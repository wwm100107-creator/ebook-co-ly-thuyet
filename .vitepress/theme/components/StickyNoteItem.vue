<script setup>
import { ref, reactive, onMounted, onUnmounted, watch, nextTick } from 'vue'
import {
  extractTrailingSlashToken,
  getAutocompleteSuggestions,
  tryImmediateBraceTransform,
  tryExpandCommandAtCursor
} from './mathSymbolsData'

const props = defineProps({
  note: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update', 'delete', 'bring-to-front', 'select', 'format-state'])

const isDragging = ref(false)
const dragStart = reactive({ mouseX: 0, mouseY: 0, noteX: 0, noteY: 0 })

const isResizing = ref(false)
const resizeStart = reactive({ mouseX: 0, mouseY: 0, width: 0, height: 0 })

const canvasRef = ref(null)
const workspaceRef = ref(null)
const editorRef = ref(null)
const isDrawing = ref(false)
const strokeHistory = ref([])
const redoHistory = ref([])
let ctx = null
let savedRange = null

// Track last pointer position inside workspace for Ctrl+T point label placement
const lastWorkspaceMouse = reactive({ x: 120, y: 90, inside: false })

// Point / Coordinate Label Boxes state
const activeLabelId = ref(null)
const draggingLabelId = ref(null)
const labelDragStart = reactive({ mouseX: 0, mouseY: 0, labelX: 0, labelY: 0 })
const labelInputRefs = ref({})

// Smart Drawing & Shape Snap State
const strokePoints = ref([])
const snappedBadgeText = ref('')
let snapshotBeforeStroke = null
let holdSnapTimer = null
let activeSnappedShape = null
let snapBoundingBox = null
const pressedKeys = reactive({
  shift: false,
  alt: false,
  c: false,
  v: false,
  r: false,
  t: false,
  a: false,
  l: false
})

// Math command autocomplete state inside the note (works for BOTH main editor & point label boxes!)
const suggestions = ref([])
const selectedSuggestionIdx = ref(0)
let currentSlashInfo = null // { targetType: 'editor'|'label', node, labelObj, inputEl, startOffset, endOffset, query }

// Color themes for the paper
const colorThemes = {
  yellow: { bg: '#fef9c3', header: '#fef08a', border: '#eab308', text: '#713f12' },
  green: { bg: '#dcfce7', header: '#bbf7d0', border: '#22c55e', text: '#14532d' },
  blue: { bg: '#e0f2fe', header: '#bae6fd', border: '#0ea5e9', text: '#0c4a6e' },
  purple: { bg: '#f3e8ff', header: '#e9d5ff', border: '#a855f7', text: '#581c87' },
  pink: { bg: '#ffe4e6', header: '#fecdd3', border: '#f43f5e', text: '#881337' },
  white: { bg: '#ffffff', header: '#f8fafc', border: '#cbd5e1', text: '#0f172a' }
}

function plainTextToHtml(txt) {
  if (!txt) return ''
  return txt
    .split('\n')
    .map(line => {
      const esc = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
      return `<div>${esc || '<br>'}</div>`
    })
    .join('')
}

function syncEditorFromNote() {
  const el = editorRef.value
  if (!el) return
  const targetHtml = props.note.html !== undefined && props.note.html !== null
    ? props.note.html
    : plainTextToHtml(props.note.text || '')
  if (el.innerHTML !== targetHtml) {
    el.innerHTML = targetHtml
  }
  nextTick(() => {
    applyDrawingObstacleAvoidance()
  })
}

function saveSelection() {
  if (typeof window === 'undefined') return
  const sel = window.getSelection()
  if (sel && sel.rangeCount > 0 && editorRef.value) {
    const r = sel.getRangeAt(0)
    if (editorRef.value.contains(r.commonAncestorContainer)) {
      savedRange = r.cloneRange()
    }
  }
}

function restoreSelection() {
  if (typeof window === 'undefined' || !editorRef.value) return
  editorRef.value.focus()
  if (savedRange) {
    try {
      const sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(savedRange)
    } catch (err) {
      // ignore invalid range
    }
  }
}

function checkFormatState() {
  if (typeof document === 'undefined' || !editorRef.value) return
  saveSelection()
  try {
    const state = {
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      strikeThrough: document.queryCommandState('strikeThrough'),
      subscript: document.queryCommandState('subscript'),
      superscript: document.queryCommandState('superscript'),
      justifyCenter: document.queryCommandState('justifyCenter'),
      justifyRight: document.queryCommandState('justifyRight'),
      insertUnorderedList: document.queryCommandState('insertUnorderedList')
    }
    emit('format-state', state)
  } catch (err) {
    // ignore
  }
}

function execFormat(cmd, val = null) {
  if (!editorRef.value) return
  restoreSelection()
  try {
    document.execCommand('styleWithCSS', false, true)
    document.execCommand(cmd, false, val)
  } catch (err) {
    try {
      document.execCommand(cmd, false, val)
    } catch (e2) {
      // ignore
    }
  }
  saveSelection()
  syncNoteFromEditor()
  checkFormatState()
}

function syncNoteFromEditor() {
  const el = editorRef.value
  if (!el) return
  applyDrawingObstacleAvoidance()
  props.note.html = el.innerHTML
  props.note.text = el.innerText || el.textContent || ''
  emit('update', props.note)
}

// === OCCUPIED DRAWING SPACE DETECTION & AUTOMATIC TEXT OBSTACLE AVOIDANCE ===
function computeCanvasOccupiedBoxes() {
  const canvas = canvasRef.value
  if (!canvas || !ctx || canvas.width === 0 || canvas.height === 0) {
    props.note.drawRegions = []
    return
  }

  const dpr = window.devicePixelRatio || 1
  const wPx = canvas.width
  const hPx = canvas.height
  const logicalW = Math.round(wPx / dpr)
  const logicalH = Math.round(hPx / dpr)

  let imgData = null
  try {
    imgData = ctx.getImageData(0, 0, wPx, hPx).data
  } catch (err) {
    return
  }

  const cellSize = 14
  const cols = Math.ceil(logicalW / cellSize)
  const rows = Math.ceil(logicalH / cellSize)
  const grid = new Uint8Array(cols * rows)

  const stepPx = Math.max(1, Math.floor(dpr * 2))
  for (let py = 0; py < hPx; py += stepPx) {
    const gy = Math.min(rows - 1, Math.floor((py / dpr) / cellSize))
    const rowOffset = py * wPx * 4
    for (let px = 0; px < wPx; px += stepPx) {
      const alpha = imgData[rowOffset + px * 4 + 3]
      if (alpha > 28) {
        const gx = Math.min(cols - 1, Math.floor((px / dpr) / cellSize))
        grid[gy * cols + gx] = 1
      }
    }
  }

  // Connected components with 1-cell neighborhood dilation so strokes of one figure group together
  const visited = new Uint8Array(cols * rows)
  const rawBoxes = []

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c
      if (grid[idx] && !visited[idx]) {
        let minC = c, maxC = c, minR = r, maxR = r
        const queue = [idx]
        visited[idx] = 1

        while (queue.length > 0) {
          const cur = queue.pop()
          const cr = Math.floor(cur / cols)
          const cc = cur % cols
          if (cc < minC) minC = cc
          if (cc > maxC) maxC = cc
          if (cr < minR) minR = cr
          if (cr > maxR) maxR = cr

          for (let dr = -2; dr <= 2; dr++) {
            for (let dc = -2; dc <= 2; dc++) {
              const nr = cr + dr
              const nc = cc + dc
              if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                const nIdx = nr * cols + nc
                if (grid[nIdx] && !visited[nIdx]) {
                  visited[nIdx] = 1
                  queue.push(nIdx)
                }
              }
            }
          }
        }

        const bx = Math.max(0, minC * cellSize - 4)
        const by = Math.max(0, minR * cellSize - 4)
        const bw = Math.min(logicalW - bx, (maxC - minC + 1) * cellSize + 8)
        const bh = Math.min(logicalH - by, (maxR - minR + 1) * cellSize + 8)
        if (bw >= 12 && bh >= 12) {
          rawBoxes.push({ x: bx, y: by, w: bw, h: bh })
        }
      }
    }
  }

  rawBoxes.sort((a, b) => a.y - b.y)
  props.note.drawRegions = rawBoxes
  applyDrawingObstacleAvoidance()
}

// Ensure root text nodes in editorRef are wrapped in <div> blocks so each paragraph/line can flow around drawings
function ensureEditorBlockChildren() {
  const el = editorRef.value
  if (!el) return
  const childNodes = Array.from(el.childNodes)
  for (const node of childNodes) {
    if (node.nodeType === Node.TEXT_NODE && (node.nodeValue || '').trim().length > 0) {
      const sel = typeof window !== 'undefined' ? window.getSelection() : null
      const isAnchor = sel && sel.anchorNode === node
      const savedOffset = isAnchor ? sel.anchorOffset : 0

      const wrapper = document.createElement('div')
      el.insertBefore(wrapper, node)
      wrapper.appendChild(node)

      if (isAnchor) {
        setCaretInTextNode(node, savedOffset)
      }
    }
  }
}

// Physically push/wrap text blocks in editorRef so text NEVER overlaps any occupied drawing region!
function applyDrawingObstacleAvoidance() {
  const el = editorRef.value
  if (!el) return
  const regions = props.note.drawRegions || []

  ensureEditorBlockChildren()

  const blocks = Array.from(el.children).filter(
    ch => ch.tagName === 'DIV' || ch.tagName === 'P' || ch.tagName === 'UL' || ch.tagName === 'OL'
  )

  // If editor is empty but has a drawing at the top, create an initial empty block so cursor starts outside drawing
  if (blocks.length === 0 && regions.length > 0 && document.activeElement === el) {
    const firstDiv = document.createElement('div')
    firstDiv.innerHTML = '<br>'
    el.appendChild(firstDiv)
    blocks.push(firstDiv)
  }

  // Reset dynamic obstacle styles before measuring
  for (const b of blocks) {
    b.style.marginTop = ''
    b.style.paddingLeft = ''
    b.style.paddingRight = ''
  }

  if (regions.length === 0 || blocks.length === 0) return

  const wsWidth = (props.note.width || 340) - 4
  const MIN_TEXT_COL = 95

  for (const b of blocks) {
    let bTop = b.offsetTop
    let bHeight = Math.max(24, b.offsetHeight)
    let bBottom = bTop + bHeight

    for (const reg of regions) {
      const rTop = reg.y - 4
      const rBottom = reg.y + reg.h + 4

      // Check vertical overlap between text block and drawing box
      if (bBottom > rTop && bTop < rBottom) {
        const leftSpace = reg.x - 18
        const rightSpace = (wsWidth - 18) - (reg.x + reg.w)

        if (leftSpace >= MIN_TEXT_COL && leftSpace >= rightSpace) {
          // Wrap text cleanly on the LEFT of the drawing
          const padR = Math.max(0, Math.ceil(wsWidth - reg.x + 10))
          const curPadR = parseInt(b.style.paddingRight || '0', 10)
          if (padR > curPadR) {
            b.style.paddingRight = padR + 'px'
            bHeight = Math.max(24, b.offsetHeight)
            bBottom = bTop + bHeight
          }
        } else if (rightSpace >= MIN_TEXT_COL) {
          // Wrap text cleanly on the RIGHT of the drawing
          const padL = Math.max(0, Math.ceil(reg.x + reg.w + 10))
          const curPadL = parseInt(b.style.paddingLeft || '0', 10)
          if (padL > curPadL) {
            b.style.paddingLeft = padL + 'px'
            bHeight = Math.max(24, b.offsetHeight)
            bBottom = bTop + bHeight
          }
        } else {
          // Drawing spans across the note width: push the text block directly BELOW the drawing!
          const pushDown = Math.ceil(rBottom - bTop + 6)
          if (pushDown > 0) {
            const curMargin = parseInt(b.style.marginTop || '0', 10)
            b.style.marginTop = (curMargin + pushDown) + 'px'
            bTop = b.offsetTop
            bHeight = Math.max(24, b.offsetHeight)
            bBottom = bTop + bHeight
          }
        }
      }
    }
  }
}

// === POINT / COORDINATE LABEL BOXES (CTRL + T / DOUBLE CLICK) ===
function addPointLabelBox(customX = null, customY = null) {
  if (!Array.isArray(props.note.labels)) {
    props.note.labels = []
  }
  if (props.note.isCollapsed) {
    props.note.isCollapsed = false
  }
  const wsW = Math.max(260, props.note.width || 340)
  const wsH = Math.max(180, (props.note.height || 340) - 36)

  const x = customX !== null
    ? Math.max(8, Math.min(wsW - 70, customX))
    : (lastWorkspaceMouse.inside ? Math.max(8, Math.min(wsW - 70, lastWorkspaceMouse.x - 20)) : Math.round(wsW / 2 - 35))
  const y = customY !== null
    ? Math.max(8, Math.min(wsH - 34, customY))
    : (lastWorkspaceMouse.inside ? Math.max(8, Math.min(wsH - 34, lastWorkspaceMouse.y - 12)) : Math.round(wsH / 2 - 16))

  const newLabel = {
    id: 'lbl_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
    x,
    y,
    text: '',
    color: props.note.mode === 'draw' ? (props.note.brushColor || '#dc2626') : (props.note.textColor || '#0f172a'),
    bgTransparent: false
  }

  props.note.labels.push(newLabel)
  activeLabelId.value = newLabel.id
  emit('update', props.note)

  nextTick(() => {
    const inp = labelInputRefs.value[newLabel.id]
    if (inp) inp.focus()
  })
}

function removePointLabel(labelId) {
  if (!Array.isArray(props.note.labels)) return
  props.note.labels = props.note.labels.filter(l => l.id !== labelId)
  if (activeLabelId.value === labelId) activeLabelId.value = null
  suggestions.value = []
  currentSlashInfo = null
  emit('update', props.note)
}

function toggleLabelBg(lbl) {
  lbl.bgTransparent = !lbl.bgTransparent
  emit('update', props.note)
}

function cycleLabelColor(lbl) {
  const palette = ['#0f172a', '#dc2626', '#2563eb', '#15803d', '#7c3aed', '#c2410c']
  const idx = palette.indexOf(lbl.color || '#0f172a')
  lbl.color = palette[(idx + 1) % palette.length]
  emit('update', props.note)
}

function onLabelGripPointerDown(e, lbl) {
  draggingLabelId.value = lbl.id
  activeLabelId.value = lbl.id
  labelDragStart.mouseX = e.clientX
  labelDragStart.mouseY = e.clientY
  labelDragStart.labelX = lbl.x
  labelDragStart.labelY = lbl.y

  window.addEventListener('pointermove', onLabelPointerMove)
  window.addEventListener('pointerup', onLabelPointerUp)
  e.preventDefault()
  e.stopPropagation()
}

function onLabelPointerMove(e) {
  if (!draggingLabelId.value || !Array.isArray(props.note.labels)) return
  const lbl = props.note.labels.find(l => l.id === draggingLabelId.value)
  if (!lbl) return
  const dx = e.clientX - labelDragStart.mouseX
  const dy = e.clientY - labelDragStart.mouseY
  const wsW = Math.max(260, props.note.width || 340)
  lbl.x = Math.max(2, Math.min(wsW - 40, labelDragStart.labelX + dx))
  lbl.y = Math.max(2, labelDragStart.labelY + dy)
}

function onLabelPointerUp() {
  if (draggingLabelId.value) {
    draggingLabelId.value = null
    window.removeEventListener('pointermove', onLabelPointerMove)
    window.removeEventListener('pointerup', onLabelPointerUp)
    emit('update', props.note)
  }
}

function onLabelInput(e, lbl) {
  if (e && e.isComposing) return
  const inp = labelInputRefs.value[lbl.id]
  if (inp) {
    const cursor = inp.selectionStart || 0
    const braceRes = tryImmediateBraceTransform(lbl.text || '', cursor)
    if (braceRes) {
      lbl.text = braceRes.text
      suggestions.value = []
      currentSlashInfo = null
      emit('update', props.note)
      nextTick(() => {
        inp.focus()
        inp.setSelectionRange(braceRes.cursor, braceRes.cursor)
      })
      return
    }

    const before = (lbl.text || '').slice(0, cursor)
    const query = extractTrailingSlashToken(before)
    if (query && query.length >= 2) {
      const list = getAutocompleteSuggestions(query, 5)
      suggestions.value = list
      selectedSuggestionIdx.value = 0
      currentSlashInfo = list.length > 0
        ? {
            targetType: 'label',
            labelObj: lbl,
            inputEl: inp,
            startOffset: cursor - query.length,
            endOffset: cursor,
            query
          }
        : null
    } else {
      suggestions.value = []
      currentSlashInfo = null
    }
  }
  emit('update', props.note)
}

function onLabelKeyDown(e, lbl) {
  if (e.isComposing || e.keyCode === 229) return

  if (suggestions.value.length > 0 && currentSlashInfo?.targetType === 'label') {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      selectedSuggestionIdx.value = (selectedSuggestionIdx.value + 1) % suggestions.value.length
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      selectedSuggestionIdx.value = (selectedSuggestionIdx.value - 1 + suggestions.value.length) % suggestions.value.length
      return
    }
    if (e.key === 'Tab') {
      e.preventDefault()
      applySuggestion(suggestions.value[selectedSuggestionIdx.value])
      return
    }
    if (e.key === 'Escape') {
      e.preventDefault()
      suggestions.value = []
      currentSlashInfo = null
      return
    }
  }

  if (e.key === ' ' || e.key === 'Tab' || e.key === 'Enter') {
    const inp = labelInputRefs.value[lbl.id]
    if (inp) {
      const cursor = inp.selectionStart || 0
      const expanded = tryExpandCommandAtCursor(lbl.text || '', cursor)
      if (expanded) {
        e.preventDefault()
        const suffix = e.key === ' ' ? ' ' : ''
        lbl.text =
          expanded.text.slice(0, expanded.cursor) +
          suffix +
          expanded.text.slice(expanded.cursor)
        const nextPos = expanded.cursor + suffix.length
        suggestions.value = []
        currentSlashInfo = null
        emit('update', props.note)
        nextTick(() => {
          inp.focus()
          inp.setSelectionRange(nextPos, nextPos)
        })
        return
      }
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      inp?.blur()
      return
    }
  }

  if ((e.key === 'Backspace' || e.key === 'Delete') && !lbl.text) {
    e.preventDefault()
    removePointLabel(lbl.id)
  }
}

function onLabelBlur(lbl) {
  setTimeout(() => {
    if (activeLabelId.value === lbl.id) {
      activeLabelId.value = null
    }
    if (!lbl.text || !lbl.text.trim()) {
      removePointLabel(lbl.id)
    }
  }, 180)
}

function onWorkspacePointerMoveTrack(e) {
  if (!workspaceRef.value) return
  const rect = workspaceRef.value.getBoundingClientRect()
  lastWorkspaceMouse.x = e.clientX - rect.left
  lastWorkspaceMouse.y = e.clientY - rect.top + (workspaceRef.value.scrollTop || 0)
  lastWorkspaceMouse.inside = true
}

function onCanvasDblClick(e) {
  if (!workspaceRef.value) return
  const rect = workspaceRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left - 16
  const y = e.clientY - rect.top + (workspaceRef.value.scrollTop || 0) - 12
  addPointLabelBox(x, y)
}

// Dragging logic for the Note Card
function onHeaderPointerDown(e) {
  if (e.target.closest('button')) return
  isDragging.value = true
  emit('select', props.note.id)
  emit('bring-to-front', props.note.id)
  dragStart.mouseX = e.pageX
  dragStart.mouseY = e.pageY
  dragStart.noteX = props.note.x
  dragStart.noteY = props.note.y

  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
  e.preventDefault()
}

function onPointerMove(e) {
  if (isDragging.value) {
    const dx = e.pageX - dragStart.mouseX
    const dy = e.pageY - dragStart.mouseY
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      props.note.userMoved = true
    }
    props.note.x = Math.max(10, dragStart.noteX + dx)
    props.note.y = Math.max(10, dragStart.noteY + dy)
    emit('update', props.note)
  } else if (isResizing.value) {
    const dx = e.pageX - resizeStart.mouseX
    const dy = e.pageY - resizeStart.mouseY
    props.note.width = Math.max(260, resizeStart.width + dx)
    props.note.height = Math.max(200, resizeStart.height + dy)
    nextTick(() => {
      resizeCanvas(true)
      applyDrawingObstacleAvoidance()
    })
    emit('update', props.note)
  }
}

function onPointerUp() {
  if (isDragging.value || isResizing.value) {
    isDragging.value = false
    isResizing.value = false
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
    emit('update', props.note)
  }
}

// Resizing logic
function onResizePointerDown(e) {
  isResizing.value = true
  emit('select', props.note.id)
  emit('bring-to-front', props.note.id)
  resizeStart.mouseX = e.pageX
  resizeStart.mouseY = e.pageY
  resizeStart.width = props.note.width || 340
  resizeStart.height = props.note.height || 340

  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
  e.preventDefault()
  e.stopPropagation()
}

// Toggle collapse ("Kéo rèm")
function toggleCollapse() {
  props.note.isCollapsed = !props.note.isCollapsed
  suggestions.value = []
  currentSlashInfo = null
  emit('update', props.note)
}

function onCardPointerDown() {
  if (!props.isActive) {
    emit('select', props.note.id)
    emit('bring-to-front', props.note.id)
  }
}

// === MATH COMMAND AUTOCOMPLETE & SHORTCUT EXPANSION IN CONTENTEDITABLE ===
function getActiveTextNodeAndOffset() {
  if (typeof window === 'undefined') return null
  const sel = window.getSelection()
  if (!sel || sel.rangeCount === 0) return null
  const node = sel.anchorNode
  const offset = sel.anchorOffset
  if (!node || !editorRef.value || !editorRef.value.contains(node)) return null
  if (node.nodeType === Node.TEXT_NODE) {
    return { node, offset }
  }
  return null
}

function setCaretInTextNode(node, offset) {
  if (typeof window === 'undefined') return
  const sel = window.getSelection()
  const range = document.createRange()
  const safeOffset = Math.max(0, Math.min(offset, (node.nodeValue || '').length))
  range.setStart(node, safeOffset)
  range.collapse(true)
  sel.removeAllRanges()
  sel.addRange(range)
  savedRange = range.cloneRange()
}

function updateAutocompleteState() {
  const info = getActiveTextNodeAndOffset()
  if (!info) {
    suggestions.value = []
    currentSlashInfo = null
    return
  }
  const { node, offset } = info
  const before = (node.nodeValue || '').slice(0, offset)
  const query = extractTrailingSlashToken(before)
  if (query && query.length >= 2) {
    const list = getAutocompleteSuggestions(query, 6)
    suggestions.value = list
    selectedSuggestionIdx.value = 0
    currentSlashInfo = list.length > 0
      ? { targetType: 'editor', node, startOffset: offset - query.length, endOffset: offset, query }
      : null
  } else {
    suggestions.value = []
    currentSlashInfo = null
  }
}

function onEditorInput(e) {
  if (e && e.isComposing) return
  saveSelection()
  const info = getActiveTextNodeAndOffset()
  if (info) {
    const { node, offset } = info
    const fullText = node.nodeValue || ''
    const braceRes = tryImmediateBraceTransform(fullText, offset)
    if (braceRes) {
      node.nodeValue = braceRes.text
      setCaretInTextNode(node, braceRes.cursor)
      suggestions.value = []
      currentSlashInfo = null
      syncNoteFromEditor()
      return
    }
  }
  updateAutocompleteState()
  syncNoteFromEditor()
  checkFormatState()
}

function applySuggestion(item) {
  if (currentSlashInfo?.targetType === 'label' && currentSlashInfo.labelObj) {
    const { labelObj, inputEl, startOffset, endOffset } = currentSlashInfo
    const val = labelObj.text || ''
    labelObj.text = val.slice(0, startOffset) + item.symbol + val.slice(endOffset)
    const newCursor = startOffset + item.symbol.length
    suggestions.value = []
    currentSlashInfo = null
    emit('update', props.note)
    nextTick(() => {
      if (inputEl) {
        inputEl.focus()
        inputEl.setSelectionRange(newCursor, newCursor)
      }
    })
    return
  }

  if (currentSlashInfo && currentSlashInfo.node && editorRef.value?.contains(currentSlashInfo.node)) {
    const { node, startOffset, endOffset } = currentSlashInfo
    const val = node.nodeValue || ''
    node.nodeValue = val.slice(0, startOffset) + item.symbol + val.slice(endOffset)
    const newCursor = startOffset + item.symbol.length
    suggestions.value = []
    currentSlashInfo = null
    setCaretInTextNode(node, newCursor)
    syncNoteFromEditor()
    return
  }
  insertTextAtCursor(item.symbol)
}

function onEditorKeyDown(e) {
  if (e.isComposing || e.keyCode === 229) return

  // Ctrl + T inside editor spawns a Point / Coordinate Label Box!
  if ((e.ctrlKey || e.metaKey || e.altKey) && e.key.toLowerCase() === 't') {
    e.preventDefault()
    addPointLabelBox()
    return
  }

  if (suggestions.value.length > 0 && currentSlashInfo?.targetType === 'editor') {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      selectedSuggestionIdx.value = (selectedSuggestionIdx.value + 1) % suggestions.value.length
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      selectedSuggestionIdx.value = (selectedSuggestionIdx.value - 1 + suggestions.value.length) % suggestions.value.length
      return
    }
    if (e.key === 'Tab') {
      e.preventDefault()
      applySuggestion(suggestions.value[selectedSuggestionIdx.value])
      return
    }
    if (e.key === 'Escape') {
      e.preventDefault()
      suggestions.value = []
      currentSlashInfo = null
      return
    }
  }

  if (e.key === ' ' || e.key === 'Tab' || e.key === 'Enter') {
    const info = getActiveTextNodeAndOffset()
    if (info) {
      const { node, offset } = info
      const expanded = tryExpandCommandAtCursor(node.nodeValue || '', offset)
      if (expanded) {
        e.preventDefault()
        const suffix = e.key === ' ' ? ' ' : ''
        node.nodeValue =
          expanded.text.slice(0, expanded.cursor) +
          suffix +
          expanded.text.slice(expanded.cursor)
        const nextPos = expanded.cursor + suffix.length
        suggestions.value = []
        currentSlashInfo = null
        setCaretInTextNode(node, nextPos)
        if (e.key === 'Enter') {
          document.execCommand('insertParagraph')
        }
        syncNoteFromEditor()
        return
      }
    }
    suggestions.value = []
    currentSlashInfo = null
  }
}

function insertTextAtCursor(str) {
  // If a Point Label Box is currently focused/active, insert into that label box!
  if (activeLabelId.value && Array.isArray(props.note.labels)) {
    const lbl = props.note.labels.find(l => l.id === activeLabelId.value)
    const inp = labelInputRefs.value[activeLabelId.value]
    if (lbl && inp) {
      const start = typeof inp.selectionStart === 'number' ? inp.selectionStart : (lbl.text || '').length
      const end = typeof inp.selectionEnd === 'number' ? inp.selectionEnd : (lbl.text || '').length
      const cur = lbl.text || ''
      lbl.text = cur.slice(0, start) + str + cur.slice(end)
      const nextPos = start + str.length
      emit('update', props.note)
      nextTick(() => {
        inp.focus()
        inp.setSelectionRange(nextPos, nextPos)
      })
      return
    }
  }

  if (!editorRef.value) return
  restoreSelection()
  const sel = window.getSelection()
  if (sel && sel.rangeCount > 0 && editorRef.value.contains(sel.anchorNode)) {
    const range = sel.getRangeAt(0)
    range.deleteContents()
    const textNode = document.createTextNode(str)
    range.insertNode(textNode)
    range.setStartAfter(textNode)
    range.collapse(true)
    sel.removeAllRanges()
    sel.addRange(range)
    savedRange = range.cloneRange()
  } else {
    editorRef.value.focus()
    const div = document.createElement('div')
    const textNode = document.createTextNode(str)
    div.appendChild(textNode)
    editorRef.value.appendChild(div)
    setCaretInTextNode(textNode, str.length)
  }
  suggestions.value = []
  currentSlashInfo = null
  syncNoteFromEditor()
}

// === SMART DRAWING, SHAPE TOOLS, KEYBOARD HOTKEYS & HOLD-TO-SNAP ===
function getTargetCanvasSize() {
  const w = Math.max(250, (props.note.width || 340) - 3)
  const h = Math.max(240, (props.note.height || 340) - 36)
  return { width: w, height: h }
}

function initCanvas() {
  if (props.note.isCollapsed) return
  const canvas = canvasRef.value
  if (!canvas) return
  resizeCanvas(false)
  if (props.note.drawData) {
    const img = new Image()
    img.onload = () => {
      const dpr = window.devicePixelRatio || 1
      ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.globalCompositeOperation = 'source-over'
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)
        ctx.drawImage(img, 0, 0, canvas.width / dpr, canvas.height / dpr)
        computeCanvasOccupiedBoxes()
      }
    }
    img.src = props.note.drawData
  } else {
    props.note.drawRegions = []
    applyDrawingObstacleAvoidance()
  }
}

function resizeCanvas(preserve = true) {
  if (props.note.isCollapsed) return
  const canvas = canvasRef.value
  if (!canvas) return
  const { width, height } = getTargetCanvasSize()
  if (width <= 0 || height <= 0) return

  const dpr = window.devicePixelRatio || 1
  const targetW = Math.round(width * dpr)
  const targetH = Math.round(height * dpr)

  if (canvas.width === targetW && canvas.height === targetH && ctx) {
    return
  }

  let temp = null
  if (preserve && canvas.width > 0 && canvas.height > 0) {
    temp = document.createElement('canvas')
    temp.width = canvas.width
    temp.height = canvas.height
    const tempCtx = temp.getContext('2d')
    if (tempCtx) tempCtx.drawImage(canvas, 0, 0)
  }

  canvas.width = targetW
  canvas.height = targetH
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'

  ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.scale(dpr, dpr)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    if (temp) {
      ctx.drawImage(temp, 0, 0, temp.width / dpr, temp.height / dpr)
    }
  }
}

function saveCanvasData() {
  const canvas = canvasRef.value
  if (!canvas || props.note.isCollapsed) return
  computeCanvasOccupiedBoxes()
  props.note.drawData = canvas.toDataURL()
  emit('update', props.note)
}

function applyStrokeStyle() {
  if (!ctx) return
  const bColor = props.note.brushColor || '#dc2626'
  const bSize = props.note.brushSize || 4
  const isHigh = !!props.note.isHighlighter
  const tool = props.note.drawTool || 'freehand'

  ctx.globalCompositeOperation = tool === 'eraser' ? 'destination-out' : 'source-over'
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  if (tool === 'eraser') {
    ctx.strokeStyle = 'rgba(0,0,0,1)'
    ctx.fillStyle = 'rgba(0,0,0,1)'
    ctx.lineWidth = Math.max(16, bSize * 3)
  } else if (isHigh) {
    ctx.strokeStyle = bColor + '55'
    ctx.fillStyle = bColor + '55'
    ctx.lineWidth = bSize
  } else {
    ctx.strokeStyle = bColor
    ctx.fillStyle = bColor
    ctx.lineWidth = bSize
  }
}

function getForcedShapeFromInput(e) {
  const tool = props.note.drawTool || 'freehand'
  if (tool && tool !== 'freehand' && tool !== 'eraser') {
    return tool
  }
  const shiftHeld = e?.shiftKey || pressedKeys.shift
  const altHeld = e?.altKey || pressedKeys.alt

  if (pressedKeys.c) return 'circle'
  if (pressedKeys.v) return 'square'
  if (pressedKeys.r) return 'rect'
  if (pressedKeys.t) return 'triangle'
  if (pressedKeys.a || altHeld) return 'arrow'
  if (pressedKeys.l || shiftHeld) return 'line'

  return null
}

function computePointsBBox(pts) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
  for (const p of pts) {
    if (p.x < minX) minX = p.x
    if (p.y < minY) minY = p.y
    if (p.x > maxX) maxX = p.x
    if (p.y > maxY) maxY = p.y
  }
  return { minX, minY, maxX, maxY }
}

function recognizeFreehandShape(pts) {
  if (!pts || pts.length < 6) return null
  const start = pts[0]
  const end = pts[pts.length - 1]
  const dx = end.x - start.x
  const dy = end.y - start.y
  const directDist = Math.hypot(dx, dy)

  let pathLen = 0
  for (let i = 1; i < pts.length; i++) {
    pathLen += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y)
  }
  if (pathLen < 24) return null

  if (directDist / pathLen > 0.85) {
    return { type: 'line', bbox: null }
  }

  const bbox = computePointsBBox(pts)
  const w = bbox.maxX - bbox.minX
  const h = bbox.maxY - bbox.minY
  const diag = Math.hypot(w, h)
  if (w < 16 || h < 16) return null

  if (directDist < diag * 0.48 && pathLen > diag * 1.65) {
    const cx = (bbox.minX + bbox.maxX) / 2
    const cy = (bbox.minY + bbox.maxY) / 2
    const rx = w / 2
    const ry = h / 2

    let sumR = 0
    const normRs = []
    for (const p of pts) {
      const nr = Math.hypot((p.x - cx) / rx, (p.y - cy) / ry)
      sumR += nr
      normRs.push(nr)
    }
    const meanR = sumR / pts.length
    let varR = 0
    for (const nr of normRs) {
      varR += (nr - meanR) ** 2
    }
    const stdR = Math.sqrt(varR / pts.length)

    let area2 = 0
    for (let i = 0; i < pts.length; i++) {
      const p1 = pts[i]
      const p2 = pts[(i + 1) % pts.length]
      area2 += p1.x * p2.y - p2.x * p1.y
    }
    const polyArea = Math.abs(area2) / 2
    const areaRatio = polyArea / (w * h)
    const isNearlyEqualSide = Math.abs(w - h) / Math.max(w, h) < 0.22

    if (stdR < 0.145 && areaRatio > 0.62 && areaRatio < 0.90) {
      return { type: 'circle', bbox }
    }
    if (areaRatio >= 0.34 && areaRatio <= 0.61) {
      return { type: 'triangle', bbox }
    }
    return { type: isNearlyEqualSide ? 'square' : 'rect', bbox }
  }

  return null
}

function renderGeometricShape(shapeType, pStart, pEnd, customBBox = null, constrainAspect = false) {
  if (!ctx || !canvasRef.value) return
  if (snapshotBeforeStroke) {
    ctx.putImageData(snapshotBeforeStroke, 0, 0)
  }
  applyStrokeStyle()

  let x1 = pStart.x
  let y1 = pStart.y
  let x2 = pEnd.x
  let y2 = pEnd.y

  const dragDist = Math.hypot(x2 - x1, y2 - y1)
  if (customBBox && dragDist < Math.hypot(customBBox.maxX - customBBox.minX, customBBox.maxY - customBBox.minY) * 0.45 && shapeType !== 'line' && shapeType !== 'arrow') {
    x1 = customBBox.minX
    y1 = customBBox.minY
    x2 = customBBox.maxX
    y2 = customBBox.maxY
  }

  ctx.beginPath()

  if (shapeType === 'line' || shapeType === 'arrow') {
    let tx = x2
    let ty = y2
    if (constrainAspect) {
      const dx = x2 - x1
      const dy = y2 - y1
      const len = Math.hypot(dx, dy)
      const angle = Math.atan2(dy, dx)
      const snapAngle = Math.round(angle / (Math.PI / 12)) * (Math.PI / 12)
      tx = x1 + len * Math.cos(snapAngle)
      ty = y1 + len * Math.sin(snapAngle)
    }
    ctx.moveTo(x1, y1)
    ctx.lineTo(tx, ty)
    ctx.stroke()

    if (shapeType === 'arrow') {
      const angle = Math.atan2(ty - y1, tx - x1)
      const headLen = Math.max(11, (props.note.brushSize || 4) * 3.2)
      ctx.beginPath()
      ctx.moveTo(tx, ty)
      ctx.lineTo(
        tx - headLen * Math.cos(angle - Math.PI / 6),
        ty - headLen * Math.sin(angle - Math.PI / 6)
      )
      ctx.lineTo(
        tx - headLen * Math.cos(angle + Math.PI / 6),
        ty - headLen * Math.sin(angle + Math.PI / 6)
      )
      ctx.closePath()
      ctx.fill()
    }
    return
  }

  const left = Math.min(x1, x2)
  const top = Math.min(y1, y2)
  const w = Math.abs(x2 - x1)
  const h = Math.abs(y2 - y1)

  if (shapeType === 'square') {
    const side = Math.max(w, h)
    const sx = x2 >= x1 ? x1 : x1 - side
    const sy = y2 >= y1 ? y1 : y1 - side
    ctx.strokeRect(sx, sy, side, side)
    return
  }

  if (shapeType === 'rect') {
    if (constrainAspect) {
      const side = Math.max(w, h)
      const sx = x2 >= x1 ? x1 : x1 - side
      const sy = y2 >= y1 ? y1 : y1 - side
      ctx.strokeRect(sx, sy, side, side)
    } else {
      ctx.strokeRect(left, top, w, h)
    }
    return
  }

  if (shapeType === 'circle') {
    const cx = (x1 + x2) / 2
    const cy = (y1 + y2) / 2
    const r = Math.max(2, Math.max(w, h) / 2)
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.stroke()
    return
  }

  if (shapeType === 'triangle') {
    const midX = left + w / 2
    ctx.moveTo(midX, top)
    ctx.lineTo(left + w, top + h)
    ctx.lineTo(left, top + h)
    ctx.closePath()
    ctx.stroke()
  }
}

const SHAPE_NAMES_VI = {
  line: 'Đoạn thẳng chuẩn',
  arrow: 'Vectơ mũi tên',
  circle: 'Hình tròn hoàn hảo',
  square: 'Hình vuông hoàn hảo',
  rect: 'Hình chữ nhật chuẩn',
  triangle: 'Tam giác cân chuẩn'
}

function showSnapToast(shapeType) {
  snappedBadgeText.value = SHAPE_NAMES_VI[shapeType] || 'Đã nắn hình chuẩn'
  setTimeout(() => {
    if (!isDrawing.value) snappedBadgeText.value = ''
  }, 1100)
}

function onCanvasPointerDown(e) {
  if (props.note.mode !== 'draw' || props.note.isCollapsed) return
  if (!props.isActive) {
    emit('select', props.note.id)
    emit('bring-to-front', props.note.id)
  }
  isDrawing.value = true
  snappedBadgeText.value = ''
  const rect = canvasRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  if (!ctx) initCanvas()
  if (!ctx) return

  strokePoints.value = [{ x, y }]
  snapBoundingBox = null
  activeSnappedShape = getForcedShapeFromInput(e)

  try {
    snapshotBeforeStroke = ctx.getImageData(0, 0, canvasRef.value.width, canvasRef.value.height)
    strokeHistory.value.push(snapshotBeforeStroke)
    if (strokeHistory.value.length > 30) strokeHistory.value.shift()
    redoHistory.value = []
  } catch (err) {
    snapshotBeforeStroke = null
  }

  applyStrokeStyle()
  ctx.beginPath()
  ctx.moveTo(x, y)

  if (activeSnappedShape) {
    showSnapToast(activeSnappedShape)
  }

  e.preventDefault()
  e.stopPropagation()
}

function onCanvasPointerMove(e) {
  if (!isDrawing.value || props.note.mode !== 'draw' || !ctx) return
  const rect = canvasRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  strokePoints.value.push({ x, y })

  const forcedNow = getForcedShapeFromInput(e)
  if (forcedNow && activeSnappedShape !== forcedNow) {
    activeSnappedShape = forcedNow
    snapBoundingBox = computePointsBBox(strokePoints.value)
    showSnapToast(activeSnappedShape)
  }

  if (activeSnappedShape) {
    if (holdSnapTimer) {
      clearTimeout(holdSnapTimer)
      holdSnapTimer = null
    }
    const startPt = strokePoints.value[0]
    const constrain = !!(e.shiftKey || pressedKeys.shift)
    renderGeometricShape(activeSnappedShape, startPt, { x, y }, snapBoundingBox, constrain)
    e.preventDefault()
    return
  }

  applyStrokeStyle()
  ctx.lineTo(x, y)
  ctx.stroke()

  if (props.note.autoShape !== false && (props.note.drawTool || 'freehand') === 'freehand') {
    if (holdSnapTimer) clearTimeout(holdSnapTimer)
    holdSnapTimer = setTimeout(() => {
      if (!isDrawing.value || activeSnappedShape) return
      const detected = recognizeFreehandShape(strokePoints.value)
      if (detected) {
        activeSnappedShape = detected.type
        snapBoundingBox = detected.bbox
        const firstPt = strokePoints.value[0]
        const lastPt = strokePoints.value[strokePoints.value.length - 1]
        renderGeometricShape(activeSnappedShape, firstPt, lastPt, snapBoundingBox, false)
        showSnapToast(activeSnappedShape)
      }
    }, 380)
  }

  e.preventDefault()
}

function onCanvasPointerUp() {
  if (holdSnapTimer) {
    clearTimeout(holdSnapTimer)
    holdSnapTimer = null
  }
  if (isDrawing.value) {
    isDrawing.value = false
    if (ctx) ctx.globalCompositeOperation = 'source-over'
    activeSnappedShape = null
    snapBoundingBox = null
    saveCanvasData()
    setTimeout(() => {
      snappedBadgeText.value = ''
    }, 900)
  }
}

function resetPressedKeys() {
  pressedKeys.shift = false
  pressedKeys.alt = false
  pressedKeys.c = false
  pressedKeys.v = false
  pressedKeys.r = false
  pressedKeys.t = false
  pressedKeys.a = false
  pressedKeys.l = false
}

function onGlobalKeyDown(e) {
  if (!props.isActive || props.note.isCollapsed) return

  // Global Ctrl + T (or Alt + T) when this note is active -> Add Point / Coordinate Label Box!
  if ((e.ctrlKey || e.metaKey || e.altKey) && (e.key.toLowerCase() === 't' || e.code === 'KeyT')) {
    e.preventDefault()
    addPointLabelBox()
    return
  }

  const tag = (e.target?.tagName || '').toLowerCase()
  const isTypingInInput = tag === 'input' || tag === 'textarea' || (e.target?.isContentEditable && props.note.mode === 'text')

  // Ctrl + Z (Undo drawing) & Ctrl + Y / Ctrl + Shift + Z (Redo drawing)
  if ((e.ctrlKey || e.metaKey) && !isTypingInInput) {
    const k = e.key.toLowerCase()
    if ((k === 'z' || e.code === 'KeyZ') && !e.shiftKey) {
      e.preventDefault()
      e.stopPropagation()
      undoCanvas()
      return
    }
    if (k === 'y' || e.code === 'KeyY' || ((k === 'z' || e.code === 'KeyZ') && e.shiftKey)) {
      e.preventDefault()
      e.stopPropagation()
      redoCanvas()
      return
    }
    return
  }

  if (props.note.mode !== 'draw' || isTypingInInput) return
  if (e.ctrlKey || e.metaKey) return

  if (e.key === 'Shift') pressedKeys.shift = true
  if (e.key === 'Alt') pressedKeys.alt = true
  const k = e.key.toLowerCase()
  if (k in pressedKeys) {
    pressedKeys[k] = true
  }

  if (isDrawing.value && strokePoints.value.length >= 2) {
    const forced = getForcedShapeFromInput(e)
    if (forced) {
      activeSnappedShape = forced
      snapBoundingBox = computePointsBBox(strokePoints.value)
      const firstPt = strokePoints.value[0]
      const lastPt = strokePoints.value[strokePoints.value.length - 1]
      renderGeometricShape(activeSnappedShape, firstPt, lastPt, snapBoundingBox, pressedKeys.shift)
      showSnapToast(activeSnappedShape)
    }
  }
}

function onGlobalKeyUp(e) {
  if (e.key === 'Shift') pressedKeys.shift = false
  if (e.key === 'Alt') pressedKeys.alt = false
  const k = e.key.toLowerCase()
  if (k in pressedKeys) {
    pressedKeys[k] = false
  }
}

function clearCanvas() {
  if (!ctx || !canvasRef.value) return
  try {
    const curImg = ctx.getImageData(0, 0, canvasRef.value.width, canvasRef.value.height)
    strokeHistory.value.push(curImg)
    if (strokeHistory.value.length > 30) strokeHistory.value.shift()
    redoHistory.value = []
  } catch (err) {
    // ignore
  }
  const dpr = window.devicePixelRatio || 1
  ctx.globalCompositeOperation = 'source-over'
  ctx.clearRect(0, 0, canvasRef.value.width / dpr, canvasRef.value.height / dpr)
  props.note.drawData = null
  props.note.drawRegions = []
  applyDrawingObstacleAvoidance()
  emit('update', props.note)
}

function undoCanvas() {
  if (!ctx || !canvasRef.value) {
    initCanvas()
  }
  if (!ctx || !canvasRef.value || strokeHistory.value.length === 0) {
    snappedBadgeText.value = 'Không còn nét vẽ để hoàn tác'
    setTimeout(() => { snappedBadgeText.value = '' }, 900)
    return
  }
  try {
    const currentImg = ctx.getImageData(0, 0, canvasRef.value.width, canvasRef.value.height)
    redoHistory.value.push(currentImg)
    if (redoHistory.value.length > 30) redoHistory.value.shift()
  } catch (err) {
    // ignore
  }
  const lastState = strokeHistory.value.pop()
  ctx.putImageData(lastState, 0, 0)
  saveCanvasData()
  snappedBadgeText.value = 'Đã hoàn tác nét vẽ (Ctrl + Z)'
  setTimeout(() => { snappedBadgeText.value = '' }, 950)
}

function redoCanvas() {
  if (!ctx || !canvasRef.value || redoHistory.value.length === 0) return
  try {
    const currentImg = ctx.getImageData(0, 0, canvasRef.value.width, canvasRef.value.height)
    strokeHistory.value.push(currentImg)
    if (strokeHistory.value.length > 30) strokeHistory.value.shift()
  } catch (err) {
    // ignore
  }
  const nextState = redoHistory.value.pop()
  ctx.putImageData(nextState, 0, 0)
  saveCanvasData()
  snappedBadgeText.value = 'Đã làm lại nét vẽ (Ctrl + Y)'
  setTimeout(() => { snappedBadgeText.value = '' }, 950)
}

defineExpose({
  undoCanvas,
  redoCanvas,
  clearCanvas,
  insertTextAtCursor,
  execFormat,
  addPointLabelBox,
  focusTextarea: () => {
    nextTick(() => {
      editorRef.value?.focus()
      applyDrawingObstacleAvoidance()
    })
  }
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', onGlobalKeyDown, { capture: true })
    window.addEventListener('keyup', onGlobalKeyUp, { capture: true })
    window.addEventListener('blur', resetPressedKeys)
  }
  nextTick(() => {
    syncEditorFromNote()
    setTimeout(() => {
      initCanvas()
    }, 50)
  })
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', onGlobalKeyDown, { capture: true })
    window.removeEventListener('keyup', onGlobalKeyUp, { capture: true })
    window.removeEventListener('blur', resetPressedKeys)
  }
  if (holdSnapTimer) clearTimeout(holdSnapTimer)
})

watch(() => props.note.isCollapsed, (newVal) => {
  if (!newVal) {
    nextTick(() => {
      syncEditorFromNote()
      setTimeout(() => initCanvas(), 60)
    })
  }
})

watch(() => props.note.mode, (newMode) => {
  if (newMode === 'text') {
    resetPressedKeys()
    nextTick(() => {
      applyDrawingObstacleAvoidance()
      if (editorRef.value) editorRef.value.focus()
    })
  } else {
    if (typeof document !== 'undefined' && document.activeElement === editorRef.value) {
      editorRef.value?.blur()
    }
    suggestions.value = []
    currentSlashInfo = null
  }
})
</script>

<template>
  <div
    class="sticky-note-card"
    :class="{
      'is-collapsed': note.isCollapsed,
      'is-dragging': isDragging,
      'is-active': isActive
    }"
    :style="{
      left: note.x + 'px',
      top: note.y + 'px',
      width: note.isCollapsed ? '250px' : (note.width || 340) + 'px',
      height: note.isCollapsed ? 'auto' : (note.height || 340) + 'px',
      zIndex: note.zIndex || 999,
      '--note-bg': colorThemes[note.colorTheme || 'yellow'].bg,
      '--note-header': colorThemes[note.colorTheme || 'yellow'].header,
      '--note-border': colorThemes[note.colorTheme || 'yellow'].border,
      '--note-text': colorThemes[note.colorTheme || 'yellow'].text,
    }"
    @pointerdown="onCardPointerDown"
  >
    <!-- Note Top Header (Minimalist vector icons) -->
    <div class="note-header" @pointerdown="onHeaderPointerDown">
      <div class="header-left">
        <!-- Minimalist Grip Dots -->
        <svg class="header-icon grip-icon" viewBox="0 0 10 16" width="9" height="15" fill="currentColor" title="Giữ chuột để di chuyển">
          <circle cx="2.5" cy="3" r="1.3"/>
          <circle cx="7.5" cy="3" r="1.3"/>
          <circle cx="2.5" cy="8" r="1.3"/>
          <circle cx="7.5" cy="8" r="1.3"/>
          <circle cx="2.5" cy="13" r="1.3"/>
          <circle cx="7.5" cy="13" r="1.3"/>
        </svg>

        <!-- Minimalist Pin Icon -->
        <svg class="header-icon pin-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="17" x2="12" y2="22"/>
          <path d="M5 17h14v-2l-2-2V5h1V3H6v2h1v8l-2 2v2Z"/>
        </svg>

        <span class="note-title-preview" v-if="note.isCollapsed">
          {{ note.text ? note.text.slice(0, 18) + '...' : 'Ghi chú (đã cuộn rèm)' }}
        </span>
        <span class="note-title" v-else>GHI CHÚ</span>
      </div>

      <div class="header-actions">
        <!-- Quick Add Point/Coordinate Text Box Button (Ctrl + T) -->
        <button
          v-if="!note.isCollapsed"
          type="button"
          class="btn-icon btn-add-label"
          title="Thêm hộp Text nhập tọa độ điểm / ký hiệu trên hình (Phím tắt: Ctrl + T hoặc Nhấp đúp lên hình)"
          @click="addPointLabelBox()"
        >
          <svg class="btn-svg" viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="4 7 4 4 20 4 20 7"/>
            <line x1="9" y1="20" x2="15" y2="20"/>
            <line x1="12" y1="4" x2="12" y2="20"/>
          </svg>
          <span>+Điểm</span>
        </button>

        <!-- Minimalist Collapse/Expand Chevron ("Kéo rèm") -->
        <button
          class="btn-icon btn-collapse"
          :title="note.isCollapsed ? 'Kéo rèm xuống (Mở lại để viết/vẽ)' : 'Kéo rèm lên (Thu gọn lại thành 1 thanh để nhìn thấy bài bên dưới)'"
          @click="toggleCollapse"
        >
          <svg v-if="note.isCollapsed" class="btn-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
          <svg v-else class="btn-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
          <span>{{ note.isCollapsed ? 'Mở rèm' : 'Kéo rèm' }}</span>
        </button>

        <!-- Minimalist Close (X) Icon -->
        <button
          class="btn-icon btn-delete"
          title="Xóa tờ note này"
          @click="emit('delete', note.id)"
        >
          <svg class="btn-svg" viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Collapsible Curtain Container (UNIFIED PAPER WORKSPACE) -->
    <div class="note-curtain-wrapper" :class="{ 'curtain-rolled-up': note.isCollapsed }">
      <!-- Unified Scrollable Paper Workspace: Text, Drawing Canvas & Point Coordinate Labels move together -->
      <div
        ref="workspaceRef"
        class="note-workspace"
        :class="{ 'drawing-active': note.mode === 'draw' }"
        @pointermove="onWorkspacePointerMoveTrack"
        @pointerleave="lastWorkspaceMouse.inside = false"
      >
        <!-- Occupied Drawing Space Indicators (Shows reserved physical area of drawings) -->
        <div
          v-for="(reg, rIdx) in (note.drawRegions || [])"
          :key="'reg_' + rIdx"
          class="occupied-drawing-zone"
          :class="{ 'in-draw-mode': note.mode === 'draw' }"
          :style="{
            left: reg.x + 'px',
            top: reg.y + 'px',
            width: reg.w + 'px',
            height: reg.h + 'px'
          }"
          @dblclick.stop="onCanvasDblClick"
        />

        <!-- Rich Text Layer (Strictly Times New Roman, automatically flows around/below occupied drawing zones) -->
        <div
          ref="editorRef"
          class="note-rich-editor"
          :class="{ 'is-disabled': note.mode === 'draw' }"
          :contenteditable="note.mode !== 'draw'"
          :style="{
            fontSize: (note.fontSize || 18) + 'px',
            color: note.textColor || '#0f172a'
          }"
          @input="onEditorInput"
          @keydown="onEditorKeyDown"
          @keyup="checkFormatState"
          @mouseup="checkFormatState"
          @click="() => { activeLabelId = null; updateAutocompleteState(); checkFormatState(); }"
          @blur="() => { saveSelection(); setTimeout(() => { if (!activeLabelId) suggestions = [] }, 180); }"
        />

        <!-- Drawing Canvas Layer (Anchored to the paper) -->
        <canvas
          ref="canvasRef"
          class="note-canvas"
          :class="{ 'is-interactive': note.mode === 'draw' }"
          @pointerdown="onCanvasPointerDown"
          @pointermove="onCanvasPointerMove"
          @pointerup="onCanvasPointerUp"
          @pointerleave="onCanvasPointerUp"
          @dblclick="onCanvasDblClick"
        />

        <!-- Draggable Point / Coordinate Text Boxes (Ctrl + T) -->
        <div
          v-for="lbl in (note.labels || [])"
          :key="lbl.id"
          class="point-label-box"
          :class="{
            'is-focused': activeLabelId === lbl.id,
            'is-transparent': lbl.bgTransparent
          }"
          :style="{
            left: lbl.x + 'px',
            top: lbl.y + 'px',
            color: lbl.color || '#0f172a'
          }"
          @pointerdown.stop="activeLabelId = lbl.id"
        >
          <!-- Mini Drag Handle for Point Label -->
          <span
            class="plb-drag-handle"
            title="Kéo để đặt nhãn vào đúng tọa độ điểm trên hình"
            @pointerdown="onLabelGripPointerDown($event, lbl)"
          >
            <svg viewBox="0 0 8 12" width="7" height="10" fill="currentColor">
              <circle cx="2" cy="2" r="1.1"/><circle cx="6" cy="2" r="1.1"/>
              <circle cx="2" cy="6" r="1.1"/><circle cx="6" cy="6" r="1.1"/>
              <circle cx="2" cy="10" r="1.1"/><circle cx="6" cy="10" r="1.1"/>
            </svg>
          </span>

          <!-- Point Coordinate Input (Auto-sizing, Times New Roman, supports /alpha, /vF, ^2, _1) -->
          <input
            :ref="el => { if (el) labelInputRefs[lbl.id] = el; else delete labelInputRefs[lbl.id] }"
            v-model="lbl.text"
            type="text"
            class="plb-input"
            :style="{
              width: Math.max(32, (lbl.text ? lbl.text.length : 3) * 9 + 10) + 'px',
              color: lbl.color || '#0f172a'
            }"
            placeholder="A(x,y)"
            @focus="activeLabelId = lbl.id"
            @input="onLabelInput($event, lbl)"
            @keydown="onLabelKeyDown($event, lbl)"
            @blur="onLabelBlur(lbl)"
          />

          <!-- Mini Toolbar when focused: Cycle Color, Toggle Background, Delete -->
          <div class="plb-mini-tools" v-if="activeLabelId === lbl.id" @mousedown.prevent>
            <button
              type="button"
              class="plb-tool-btn"
              title="Đổi màu chữ tọa độ điểm"
              @click.stop="cycleLabelColor(lbl)"
            >
              <span class="plb-color-dot" :style="{ backgroundColor: lbl.color || '#0f172a' }" />
            </button>
            <button
              type="button"
              class="plb-tool-btn"
              title="Bật/Tắt khung nền nhãn"
              @click.stop="toggleLabelBg(lbl)"
            >
              <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.2">
                <rect x="3" y="3" width="18" height="18" rx="3"/>
              </svg>
            </button>
            <button
              type="button"
              class="plb-tool-btn plb-del"
              title="Xóa nhãn điểm này"
              @click.stop="removePointLabel(lbl.id)"
            >
              <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2.4">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Live Inline /command Autocomplete Popup -->
      <div
        v-if="suggestions.length > 0"
        class="math-autocomplete-popup"
      >
        <div class="math-ac-header">
          <span>Gợi ý lệnh Toán - Cơ học (Nhấn Tab hoặc Click để chọn)</span>
        </div>
        <button
          v-for="(item, idx) in suggestions"
          :key="item.cmd + idx"
          type="button"
          class="math-ac-item"
          :class="{ active: idx === selectedSuggestionIdx }"
          @mousedown.prevent="applySuggestion(item)"
        >
          <span class="math-ac-sym">{{ item.symbol }}</span>
          <code class="math-ac-cmd">{{ item.cmd }}</code>
          <span class="math-ac-lbl">{{ item.label }}</span>
        </button>
      </div>

      <!-- Live Snap Badge Feedback when a shape snaps -->
      <div class="snap-badge-overlay" v-if="snappedBadgeText && note.mode === 'draw'">
        <div class="snap-badge-pill">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>{{ snappedBadgeText }}</span>
        </div>
      </div>

      <!-- Bottom Resize Corner Handle -->
      <div
        class="note-resize-handle"
        title="Kéo góc này để mở rộng hoặc thu nhỏ kích thước tờ note"
        @pointerdown="onResizePointerDown"
      >
        <svg viewBox="0 0 10 10" width="10" height="10">
          <path d="M9 1 L1 9 M9 5 L5 9 M9 9 L9 9" stroke="#64748b" stroke-width="1.8" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sticky-note-card {
  position: absolute;
  background-color: var(--note-bg, #fef9c3);
  border: 1.5px solid var(--note-border, #eab308);
  border-radius: 8px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22), 0 3px 8px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  overflow: hidden;
  box-sizing: border-box;
  min-width: 250px;
}

.sticky-note-card:not(.is-collapsed) {
  min-height: 200px;
}

.sticky-note-card.is-active {
  border-color: #0284c7;
  box-shadow: 0 0 0 2px #0284c7, 0 14px 34px rgba(0, 0, 0, 0.26);
}

.sticky-note-card.is-dragging {
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.32), 0 6px 14px rgba(0, 0, 0, 0.2);
  opacity: 0.97;
}

.sticky-note-card.is-collapsed {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
}

/* Header */
.note-header {
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: var(--note-header, #fef08a);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  cursor: grab;
  flex-shrink: 0;
  user-select: none;
  touch-action: none;
}

.sticky-note-card.is-dragging .note-header {
  cursor: grabbing;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 700;
  font-size: 12px;
  color: var(--note-text, #713f12);
}

.header-icon {
  display: inline-block;
  vertical-align: middle;
}

.grip-icon {
  opacity: 0.55;
}

.pin-icon {
  opacity: 0.8;
}

.note-title {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.6px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.note-title-preview {
  font-size: 12px;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.btn-icon {
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: rgba(255, 255, 255, 0.55);
  color: var(--note-text, #713f12);
  border-radius: 5px;
  cursor: pointer;
  padding: 3px 6px;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 3px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  transition: all 0.15s ease;
}

.btn-svg {
  display: inline-block;
}

.btn-icon:hover {
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.btn-add-label:hover {
  border-color: #0284c7;
  color: #0284c7;
}

.btn-delete:hover {
  background: #ef4444;
  color: #ffffff;
  border-color: #dc2626;
}

/* Curtain Wrapper */
.note-curtain-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  height: calc(100% - 36px);
  position: relative;
  overflow: hidden;
}

.note-curtain-wrapper.curtain-rolled-up {
  display: none !important;
}

/* Unified Scrollable Paper Workspace */
.note-workspace {
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 164px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  background: transparent;
}

.note-workspace.drawing-active {
  background-color: rgba(255, 255, 255, 0.08);
}

/* Occupied Drawing Space Indicator */
.occupied-drawing-zone {
  position: absolute;
  border-radius: 6px;
  pointer-events: none;
  z-index: 1;
  transition: border-color 0.15s ease, background-color 0.15s ease;
  border: 1px dashed transparent;
}

.occupied-drawing-zone.in-draw-mode {
  border-color: rgba(2, 132, 199, 0.28);
  background: rgba(255, 255, 255, 0.18);
}

/* Strictly Times New Roman Rich Text Editor */
.note-rich-editor {
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 12px 16px 28px 16px;
  border: none;
  background: transparent;
  color: #0f172a;
  font-family: "Times New Roman", Times, "Cambria Math", serif !important;
  line-height: 1.5;
  outline: none;
  box-sizing: border-box;
  user-select: text !important;
  -webkit-user-select: text !important;
  cursor: text;
  z-index: 2;
  white-space: pre-wrap;
  word-break: break-word;
}

.note-rich-editor :deep(*) {
  font-family: "Times New Roman", Times, "Cambria Math", serif !important;
}

.note-rich-editor :deep(div),
.note-rich-editor :deep(p) {
  transition: margin-top 0.12s ease, padding-left 0.12s ease, padding-right 0.12s ease;
}

.note-rich-editor :deep(ul),
.note-rich-editor :deep(ol) {
  margin: 4px 0;
  padding-left: 20px;
}

.note-rich-editor.is-disabled {
  opacity: 0.95;
  cursor: default;
  pointer-events: none;
  user-select: none !important;
}

/* Draggable Point / Coordinate Label Boxes (Ctrl + T) */
.point-label-box {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 1px 4px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(15, 23, 42, 0.18);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  z-index: 14;
  transition: border-color 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
}

.point-label-box.is-transparent {
  background: transparent;
  border-color: transparent;
  box-shadow: none;
}

.point-label-box:hover,
.point-label-box.is-focused {
  border-color: #0284c7;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.25);
  z-index: 18;
}

.plb-drag-handle {
  cursor: grab;
  color: #64748b;
  display: inline-flex;
  align-items: center;
  padding: 2px 1px;
  opacity: 0.5;
  user-select: none;
  touch-action: none;
}

.point-label-box.is-transparent:not(:hover):not(.is-focused) .plb-drag-handle {
  opacity: 0;
}

.plb-drag-handle:hover {
  opacity: 1;
  color: #0284c7;
}

.plb-input {
  border: none;
  background: transparent;
  outline: none;
  padding: 1px 2px;
  font-family: "Times New Roman", Times, "Cambria Math", serif !important;
  font-size: 15px;
  font-weight: 700;
  font-style: italic;
  line-height: 1.2;
}

.plb-input::placeholder {
  color: rgba(15, 23, 42, 0.35);
  font-weight: 400;
  font-size: 12px;
}

.plb-mini-tools {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin-left: 2px;
  padding-left: 3px;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}

.plb-tool-btn {
  border: none;
  background: transparent;
  color: #475569;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
}

.plb-tool-btn:hover {
  background: rgba(2, 132, 199, 0.15);
  color: #0284c7;
}

.plb-tool-btn.plb-del:hover {
  background: #fee2e2;
  color: #dc2626;
}

.plb-color-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.25);
}

/* Live Inline Math Autocomplete Popup */
.math-autocomplete-popup {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 12px;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(8px);
  color: #f8fafc;
  border-radius: 8px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
  z-index: 25;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  user-select: none;
}

.math-ac-header {
  padding: 4px 10px;
  font-size: 10px;
  font-weight: 600;
  color: #94a3b8;
  background: rgba(30, 41, 59, 0.9);
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.math-ac-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border: none;
  background: transparent;
  color: #f1f5f9;
  text-align: left;
  cursor: pointer;
  transition: background 0.12s ease;
  width: 100%;
}

.math-ac-item:hover,
.math-ac-item.active {
  background: #0284c7;
  color: #ffffff;
}

.math-ac-sym {
  font-family: "Times New Roman", Times, "Cambria Math", serif;
  font-size: 17px;
  font-weight: 700;
  min-width: 28px;
  text-align: center;
}

.math-ac-cmd {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  background: rgba(255, 255, 255, 0.12);
  padding: 1px 5px;
  border-radius: 4px;
  color: #bae6fd;
}

.math-ac-item.active .math-ac-cmd {
  background: rgba(0, 0, 0, 0.22);
  color: #ffffff;
}

.math-ac-lbl {
  font-size: 11px;
  color: #cbd5e1;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.math-ac-item.active .math-ac-lbl {
  color: #f0f9ff;
}

/* Drawing Canvas Layer */
.note-canvas {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 4;
}

.note-canvas.is-interactive {
  pointer-events: auto;
  cursor: crosshair;
  z-index: 10;
  user-select: none;
  touch-action: none;
}

.snap-badge-overlay {
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: 22;
}

.snap-badge-pill {
  background: #0284c7;
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 9999px;
  box-shadow: 0 3px 10px rgba(2, 132, 199, 0.35);
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Bottom resize corner handle */
.note-resize-handle {
  position: absolute;
  right: 3px;
  bottom: 3px;
  width: 16px;
  height: 16px;
  cursor: se-resize;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.45;
  transition: opacity 0.15s ease;
  z-index: 20;
  user-select: none;
  touch-action: none;
}

.note-resize-handle:hover {
  opacity: 1;
}
</style>
