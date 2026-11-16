<script setup>
import { ref, reactive, onMounted, onUnmounted, watch, nextTick } from 'vue'
import {
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
let ctx = null
let resizeObserver = null
let savedRange = null

// Smart Drawing & Shape Snap State
const strokePoints = ref([])
const snappedBadgeText = ref('')
let snapshotBeforeStroke = null
let holdSnapTimer = null
let activeSnappedShape = null // null | 'line' | 'arrow' | 'circle' | 'square' | 'rect' | 'triangle'
let snapBoundingBox = null // { minX, minY, maxX, maxY } when snapped from freehand loop
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

// Math command autocomplete state inside the note
const suggestions = ref([])
const selectedSuggestionIdx = ref(0)
let currentSlashInfo = null // { node, startOffset, endOffset, query }

// Color themes for the paper
const colorThemes = {
  yellow: { bg: '#fef9c3', header: '#fef08a', border: '#eab308', text: '#713f12' },
  green: { bg: '#dcfce7', header: '#bbf7d0', border: '#22c55e', text: '#14532d' },
  blue: { bg: '#e0f2fe', header: '#bae6fd', border: '#0ea5e9', text: '#0c4a6e' },
  purple: { bg: '#f3e8ff', header: '#e9d5ff', border: '#a855f7', text: '#581c87' },
  pink: { bg: '#ffe4e6', header: '#fecdd3', border: '#f43f5e', text: '#881337' },
  white: { bg: '#ffffff', header: '#f8fafc', border: '#cbd5e1', text: '#0f172a' }
}

// Helper: Escape plain text to HTML for legacy notes
function plainTextToHtml(txt) {
  if (!txt) return ''
  return txt
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>')
}

// Initialize editor content from note.html or note.text
function syncEditorFromNote() {
  const el = editorRef.value
  if (!el) return
  const targetHtml = props.note.html !== undefined && props.note.html !== null
    ? props.note.html
    : plainTextToHtml(props.note.text || '')
  if (el.innerHTML !== targetHtml) {
    el.innerHTML = targetHtml
  }
}

// Save current selection range inside editorRef
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

// Query active rich-text formatting states and notify parent toolbar
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

// Execute rich-text formatting command from dock toolbar
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
  props.note.html = el.innerHTML
  props.note.text = el.innerText || el.textContent || ''
  emit('update', props.note)
}

// Dragging logic
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
    props.note.x = Math.max(10, dragStart.noteX + dx)
    props.note.y = Math.max(10, dragStart.noteY + dy)
    emit('update', props.note)
  } else if (isResizing.value) {
    const dx = e.pageX - resizeStart.mouseX
    const dy = e.pageY - resizeStart.mouseY
    props.note.width = Math.max(260, resizeStart.width + dx)
    props.note.height = Math.max(200, resizeStart.height + dy)
    nextTick(() => resizeCanvas())
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
  emit('update', props.note)
}

function onCardPointerDown() {
  emit('select', props.note.id)
  emit('bring-to-front', props.note.id)
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
  const match = before.match(/(\\[a-zA-Z0-9/_^{]*)$/)
  if (match && match[1].length >= 2) {
    const query = match[1]
    const list = getAutocompleteSuggestions(query, 6)
    suggestions.value = list
    selectedSuggestionIdx.value = 0
    currentSlashInfo = list.length > 0
      ? { node, startOffset: offset - query.length, endOffset: offset, query }
      : null
  } else {
    suggestions.value = []
    currentSlashInfo = null
  }
}

function onEditorInput() {
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
  if (suggestions.value.length > 0) {
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
    if (e.key === 'Tab' || e.key === 'Enter') {
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
        const suffix = e.key === ' ' ? '\u00A0' : ''
        node.nodeValue =
          expanded.text.slice(0, expanded.cursor) +
          suffix +
          expanded.text.slice(expanded.cursor)
        const nextPos = expanded.cursor + suffix.length
        suggestions.value = []
        currentSlashInfo = null
        setCaretInTextNode(node, nextPos)
        if (e.key === 'Enter') {
          document.execCommand('insertLineBreak')
        }
        syncNoteFromEditor()
        return
      }
    }
  }
}

function insertTextAtCursor(str) {
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
    const textNode = document.createTextNode(str)
    editorRef.value.appendChild(textNode)
    setCaretInTextNode(textNode, str.length)
  }
  suggestions.value = []
  currentSlashInfo = null
  syncNoteFromEditor()
}

// === SMART DRAWING, SHAPE TOOLS, KEYBOARD HOTKEYS & HOLD-TO-SNAP ===
function initCanvas() {
  const canvas = canvasRef.value
  if (!canvas || !canvas.parentElement) return
  resizeCanvas(false)
  if (props.note.drawData) {
    const img = new Image()
    img.onload = () => {
      const dpr = window.devicePixelRatio || 1
      ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width / dpr, canvas.height / dpr)
      }
    }
    img.src = props.note.drawData
  }
}

function resizeCanvas(preserve = true) {
  const canvas = canvasRef.value
  if (!canvas || !canvas.parentElement) return
  const rect = canvas.parentElement.getBoundingClientRect()
  if (rect.width === 0 || rect.height === 0) return

  const dpr = window.devicePixelRatio || 1

  let temp = null
  if (preserve && canvas.width > 0 && canvas.height > 0) {
    temp = document.createElement('canvas')
    temp.width = canvas.width
    temp.height = canvas.height
    const tempCtx = temp.getContext('2d')
    if (tempCtx) tempCtx.drawImage(canvas, 0, 0)
  }

  canvas.width = Math.round(rect.width * dpr)
  canvas.height = Math.round(rect.height * dpr)
  canvas.style.width = rect.width + 'px'
  canvas.style.height = rect.height + 'px'

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
  if (!canvas) return
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

// Determine which geometric shape is currently forced by toolbar or keyboard hotkeys
function getForcedShapeFromInput(e) {
  const tool = props.note.drawTool || 'freehand'
  if (tool && tool !== 'freehand' && tool !== 'eraser') {
    return tool
  }
  const shiftHeld = e?.shiftKey || pressedKeys.shift
  const altHeld = e?.altKey || pressedKeys.alt

  // Hotkey combinations while drawing:
  // Shift+C or C -> Perfect Circle
  if (pressedKeys.c) return 'circle'
  // Shift+V or V -> Perfect Square
  if (pressedKeys.v) return 'square'
  // Shift+R or R -> Perfect Rectangle
  if (pressedKeys.r) return 'rect'
  // Shift+T or T -> Perfect Triangle
  if (pressedKeys.t) return 'triangle'
  // Shift+A or A or Alt -> Force Vector Arrow
  if (pressedKeys.a || altHeld) return 'arrow'
  // Shift+L or L or Shift alone -> Straight Line
  if (pressedKeys.l || shiftHeld) return 'line'

  return null
}

// Compute bounding box of recorded stroke points
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

// Smart Freehand Shape Recognizer (triggered on 380ms hold at end of stroke)
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

  // 1. Straight line check
  if (directDist / pathLen > 0.85) {
    return { type: 'line', bbox: null }
  }

  const bbox = computePointsBBox(pts)
  const w = bbox.maxX - bbox.minX
  const h = bbox.maxY - bbox.minY
  const diag = Math.hypot(w, h)
  if (w < 16 || h < 16) return null

  // 2. Closed loop check (start & end points close relative to path length)
  if (directDist < diag * 0.48 && pathLen > diag * 1.65) {
    const cx = (bbox.minX + bbox.maxX) / 2
    const cy = (bbox.minY + bbox.maxY) / 2
    const rx = w / 2
    const ry = h / 2

    // Normalized radial distance from center
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

    // Shoelace polygon area
    let area2 = 0
    for (let i = 0; i < pts.length; i++) {
      const p1 = pts[i]
      const p2 = pts[(i + 1) % pts.length]
      area2 += p1.x * p2.y - p2.x * p1.y
    }
    const polyArea = Math.abs(area2) / 2
    const areaRatio = polyArea / (w * h)
    const isNearlyEqualSide = Math.abs(w - h) / Math.max(w, h) < 0.22

    // Circle / Ellipse check: low radial std deviation and areaRatio around pi/4 (0.785)
    if (stdR < 0.145 && areaRatio > 0.62 && areaRatio < 0.90) {
      return { type: 'circle', bbox }
    }
    // Triangle check: areaRatio around 0.5
    if (areaRatio >= 0.34 && areaRatio <= 0.61) {
      return { type: 'triangle', bbox }
    }
    // Square / Rectangle check
    return { type: isNearlyEqualSide ? 'square' : 'rect', bbox }
  }

  return null
}

// Render geometric shape onto canvas
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

  // If snapped from a closed freehand loop (e.g. user drew a full circle returning to start point),
  // use the stroke's bounding box when start & end are very close!
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
    // Snap angle to 15° increments (0°, 30°, 45°, 60°, 90°...) when Shift is held with Line/Arrow tool
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
  let w = Math.abs(x2 - x1)
  let h = Math.abs(y2 - y1)

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
    const r = Math.max(w, h) / 2
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.stroke()
    return
  }

  if (shapeType === 'ellipse') {
    const cx = (x1 + x2) / 2
    const cy = (y1 + y2) / 2
    if (constrainAspect) {
      const r = Math.max(w, h) / 2
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
    } else {
      ctx.ellipse(cx, cy, Math.max(2, w / 2), Math.max(2, h / 2), 0, 0, Math.PI * 2)
    }
    ctx.stroke()
    return
  }

  if (shapeType === 'triangle') {
    const midX = (left + left + w) / 2
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
  isDrawing.value = true
  snappedBadgeText.value = ''
  const rect = canvasRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  if (!ctx) ctx = canvasRef.value.getContext('2d')

  strokePoints.value = [{ x, y }]
  snapBoundingBox = null
  activeSnappedShape = getForcedShapeFromInput(e)

  try {
    snapshotBeforeStroke = ctx.getImageData(0, 0, canvasRef.value.width, canvasRef.value.height)
    strokeHistory.value.push(snapshotBeforeStroke)
    if (strokeHistory.value.length > 25) strokeHistory.value.shift()
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

  // Check if user pressed a shape hotkey mid-stroke
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

  // Freehand drawing
  applyStrokeStyle()
  ctx.lineTo(x, y)
  ctx.stroke()

  // Hold-to-Snap Timer (GoodNotes style: pause pointer for 380ms at end of stroke to auto-snap!)
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

// Track keyboard hotkeys (Shift, C, V, R, T, A, L) for mid-stroke shape snapping
function onGlobalKeyDown(e) {
  if (!props.isActive || props.note.mode !== 'draw' || props.note.isCollapsed) return
  const tag = (e.target?.tagName || '').toLowerCase()
  if (tag === 'input' || tag === 'textarea' || e.target?.isContentEditable) return

  if (e.key === 'Shift') pressedKeys.shift = true
  if (e.key === 'Alt') pressedKeys.alt = true
  const k = e.key.toLowerCase()
  if (k in pressedKeys) {
    pressedKeys[k] = true
  }

  // If currently drawing a stroke, immediately snap when hotkey is pressed!
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
  const dpr = window.devicePixelRatio || 1
  ctx.globalCompositeOperation = 'source-over'
  ctx.clearRect(0, 0, canvasRef.value.width / dpr, canvasRef.value.height / dpr)
  strokeHistory.value = []
  props.note.drawData = null
  emit('update', props.note)
}

function undoCanvas() {
  if (!ctx || strokeHistory.value.length === 0) return
  const lastState = strokeHistory.value.pop()
  ctx.putImageData(lastState, 0, 0)
  saveCanvasData()
}

defineExpose({
  undoCanvas,
  clearCanvas,
  insertTextAtCursor,
  execFormat,
  focusTextarea: () => {
    nextTick(() => editorRef.value?.focus())
  }
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', onGlobalKeyDown)
    window.addEventListener('keyup', onGlobalKeyUp)
  }
  nextTick(() => {
    syncEditorFromNote()
    setTimeout(() => {
      initCanvas()
      if (workspaceRef.value && typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(() => {
          resizeCanvas(true)
        })
        resizeObserver.observe(workspaceRef.value)
      }
    }, 60)
  })
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', onGlobalKeyDown)
    window.removeEventListener('keyup', onGlobalKeyUp)
  }
  if (holdSnapTimer) clearTimeout(holdSnapTimer)
  if (resizeObserver) resizeObserver.disconnect()
})

watch(() => props.note.isCollapsed, (newVal) => {
  if (!newVal) {
    nextTick(() => {
      syncEditorFromNote()
      setTimeout(() => initCanvas(), 80)
    })
  }
})

watch(() => props.note.mode, (newMode) => {
  if (newMode === 'text') {
    nextTick(() => {
      if (editorRef.value) editorRef.value.focus()
    })
  } else {
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
        <!-- Minimalist Collapse/Expand Chevron ("Kéo rèm") -->
        <button
          class="btn-icon btn-collapse"
          :title="note.isCollapsed ? 'Kéo rèm xuống (Mở lại để viết/vẽ)' : 'Kéo rèm lên (Thu gọn lại thành 1 thanh để nhìn thấy bài bên dưới)'"
          @click="toggleCollapse"
        >
          <!-- Chevron down when collapsed -->
          <svg v-if="note.isCollapsed" class="btn-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
          <!-- Chevron up when expanded -->
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

    <!-- Collapsible Curtain Container (100% PURE PAPER WORKSPACE) -->
    <div class="note-curtain-wrapper" :class="{ 'curtain-rolled-up': note.isCollapsed }">
      <!-- Workspace: Rich Text Editor & Drawing Canvas Layer -->
      <div
        ref="workspaceRef"
        class="note-workspace"
        :class="{ 'drawing-active': note.mode === 'draw' }"
      >
        <!-- Rich Text Layer (Strictly Times New Roman, supports Bold, Italic, Underline, Colors, Math) -->
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
          @click="() => { updateAutocompleteState(); checkFormatState(); }"
          @blur="() => { saveSelection(); setTimeout(() => { suggestions = [] }, 180); }"
        />

        <!-- Live Inline \command Autocomplete Popup -->
        <div
          v-if="suggestions.length > 0 && (note.mode || 'text') === 'text'"
          class="math-autocomplete-popup"
        >
          <div class="math-ac-header">
            <span>Gợi ý lệnh Toán - Cơ học (Nhấn Tab / Enter / Space)</span>
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

        <!-- Drawing Canvas Layer (Positioned directly over text) -->
        <canvas
          ref="canvasRef"
          class="note-canvas"
          :class="{ 'is-interactive': note.mode === 'draw' }"
          @pointerdown="onCanvasPointerDown"
          @pointermove="onCanvasPointerMove"
          @pointerup="onCanvasPointerUp"
          @pointerleave="onCanvasPointerUp"
        />

        <!-- Live Snap Badge Feedback when a shape snaps -->
        <div class="snap-badge-overlay" v-if="snappedBadgeText && note.mode === 'draw'">
          <div class="snap-badge-pill">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>{{ snappedBadgeText }}</span>
          </div>
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
  user-select: none;
  touch-action: none;
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
  gap: 5px;
}

.btn-icon {
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: rgba(255, 255, 255, 0.55);
  color: var(--note-text, #713f12);
  border-radius: 5px;
  cursor: pointer;
  padding: 3px 7px;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
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
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
}

.note-curtain-wrapper.curtain-rolled-up {
  height: 0 !important;
  max-height: 0 !important;
  opacity: 0;
  pointer-events: none;
}

/* Workspace: Rich Editor & Drawing Canvas */
.note-workspace {
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 180px;
  box-sizing: border-box;
  overflow: hidden;
  background: transparent;
}

.note-workspace.drawing-active {
  background-color: rgba(255, 255, 255, 0.08);
}

/* Strictly Times New Roman Rich Text Editor */
.note-rich-editor {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 14px 16px 24px 16px;
  border: none;
  background: transparent;
  color: #0f172a;
  font-family: "Times New Roman", Times, "Cambria Math", serif !important;
  line-height: 1.5;
  outline: none;
  box-sizing: border-box;
  user-select: text;
  z-index: 2;
  overflow-y: auto;
  white-space: pre-wrap;
  word-break: break-word;
}

.note-rich-editor :deep(*) {
  font-family: "Times New Roman", Times, "Cambria Math", serif !important;
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
  z-index: 15;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 4;
}

.note-canvas.is-interactive {
  pointer-events: auto;
  cursor: crosshair;
  z-index: 10;
}

.snap-badge-overlay {
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: 12;
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

.draw-hint-overlay {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: 8;
}

.hint-pill {
  background: rgba(15, 23, 42, 0.78);
  color: #ffffff;
  font-size: 10.5px;
  padding: 4px 10px;
  border-radius: 9999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.hint-svg {
  display: inline-block;
  flex-shrink: 0;
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
}

.note-resize-handle:hover {
  opacity: 1;
}
</style>
