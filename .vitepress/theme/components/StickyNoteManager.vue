<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import StickyNoteItem from './StickyNoteItem.vue'
import {
  MATH_CATEGORIES,
  MATH_SYMBOLS,
  CHEATSHEET_RULES
} from './mathSymbolsData'
import { defaultNotesByPath } from '../data/defaultNotes'

const route = useRoute()
const notes = ref([])
const activeNoteId = ref(null)
const isVisible = ref(true)
const topZIndex = ref(1000)
const noteItemRefs = ref({})

// Math Symbols & Cheatsheet Panel State
const showMathPanel = ref(false)
const activeMathCat = ref('all')
const mathSearchQuery = ref('')

// Smart Draw Guide Popover State
const showDrawGuide = ref(false)

// Rich-text format state of current selection in active note
const formatState = reactive({
  bold: false,
  italic: false,
  underline: false,
  strikeThrough: false,
  subscript: false,
  superscript: false,
  justifyCenter: false,
  justifyRight: false,
  insertUnorderedList: false
})

// Text color & highlight palettes
const textColors = [
  { name: 'Đen mực', hex: '#0f172a' },
  { name: 'Đỏ', hex: '#dc2626' },
  { name: 'Xanh dương', hex: '#2563eb' },
  { name: 'Xanh lá', hex: '#15803d' },
  { name: 'Tím', hex: '#7c3aed' },
  { name: 'Cam đậm', hex: '#c2410c' }
]

const textHighlights = [
  { name: 'Không tô nền', hex: 'transparent' },
  { name: 'Dạ quang vàng', hex: '#fde047' },
  { name: 'Dạ quang xanh lá', hex: '#86efac' },
  { name: 'Dạ quang xanh dương', hex: '#7dd3fc' },
  { name: 'Dạ quang hồng', hex: '#fda4af' }
]

const activeTextColor = ref('#0f172a')
const showColorPopover = ref(false)

// Filtered symbols for the picker & cheatsheet table
const filteredMathSymbols = computed(() => {
  const q = mathSearchQuery.value.trim().toLowerCase()
  return MATH_SYMBOLS.filter(item => {
    const matchCat =
      activeMathCat.value === 'all' ||
      activeMathCat.value === 'cheatsheet' ||
      item.category === activeMathCat.value
    if (!matchCat) return false
    if (!q) return true
    const inSym = item.symbol.toLowerCase().includes(q)
    const inCmd = item.cmd.toLowerCase().includes(q)
    const inLbl = item.label.toLowerCase().includes(q)
    const inAlias = (item.aliases || []).some(a => a.toLowerCase().includes(q))
    return inSym || inCmd || inLbl || inAlias
  })
})

// Color themes for the paper
const colorThemes = {
  yellow: { bg: '#fef9c3', header: '#fef08a', border: '#eab308', text: '#713f12' },
  green: { bg: '#dcfce7', header: '#bbf7d0', border: '#22c55e', text: '#14532d' },
  blue: { bg: '#e0f2fe', header: '#bae6fd', border: '#0ea5e9', text: '#0c4a6e' },
  purple: { bg: '#f3e8ff', header: '#e9d5ff', border: '#a855f7', text: '#581c87' },
  pink: { bg: '#ffe4e6', header: '#fecdd3', border: '#f43f5e', text: '#881337' },
  white: { bg: '#ffffff', header: '#f8fafc', border: '#cbd5e1', text: '#0f172a' }
}

const fontSizes = [14, 16, 18, 20, 24, 28]
const brushColors = [
  { name: 'Đen', hex: '#1e293b' },
  { name: 'Đỏ', hex: '#dc2626' },
  { name: 'Xanh', hex: '#2563eb' },
  { name: 'Xanh lá', hex: '#16a34a' },
  { name: 'Cam', hex: '#d97706' }
]

const brushSizes = [
  { label: 'Mảnh', val: 2 },
  { label: 'Vừa', val: 4 },
  { label: 'Đậm', val: 7 },
  { label: 'Dạ quang', val: 18, isHigh: true }
]

const drawTools = [
  { id: 'freehand', name: 'Bút tự do (Giữ chuột 0.4s cuối nét để tự nắn hình)', short: 'Tự do' },
  { id: 'line', name: 'Đoạn thẳng (Hoặc giữ phím Shift khi vẽ)', short: 'Đoạn' },
  { id: 'arrow', name: 'Mũi tên Vectơ lực (Hoặc giữ phím A / Alt khi vẽ)', short: 'Vectơ' },
  { id: 'circle', name: 'Hình tròn hoàn hảo (Hoặc giữ Shift + C / phím C khi vẽ)', short: 'Tròn' },
  { id: 'square', name: 'Hình vuông hoàn hảo (Hoặc giữ Shift + V / phím V khi vẽ)', short: 'Vuông' },
  { id: 'rect', name: 'Hình chữ nhật (Hoặc giữ Shift + R / phím R khi vẽ)', short: 'Chữ nhật' },
  { id: 'triangle', name: 'Hình tam giác cân / Gối tựa (Hoặc giữ Shift + T / phím T)', short: 'Tam giác' },
  { id: 'eraser', name: 'Tẩy nét vẽ (Rê chuột để xóa từng phần)', short: 'Tẩy' }
]

// Normalized path (without trailing slash or .html) for matching preset/synced notes
const normalizedPath = computed(() => {
  const p = route.path ? route.path.replace(/\/$/, '').replace(/\.html$/, '') : ''
  return p || '/'
})

// Storage key per page path
const storageKey = computed(() => {
  const p = route.path ? route.path.replace(/\/$/, '') : 'home'
  return `co_ly_thuyet_notes_${p || 'root'}`
})

// Current active note
const activeNote = computed(() => {
  if (!notes.value.length) return null
  return notes.value.find(n => n.id === activeNoteId.value) || notes.value[notes.value.length - 1]
})

function getDeletedNoteIds() {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem('co_ly_thuyet_deleted_note_ids')
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

function markNoteIdDeleted(noteId) {
  if (typeof window === 'undefined') return
  try {
    const set = getDeletedNoteIds()
    set.add(noteId)
    localStorage.setItem('co_ly_thuyet_deleted_note_ids', JSON.stringify([...set]))
  } catch {
    // ignore
  }
}

const CURRENT_PRESET_VERSION = 4
const COLLAPSED_MIGRATION_KEY = 'co_ly_thuyet_preset_v4_collapsed'
const viewportWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1440)

function sanitizeNote(n) {
  return {
    ...n,
    width: Math.max(280, Number(n.width) || 340),
    height: Math.max(240, Number(n.height) || 340),
    fontSize: Number(n.fontSize) || 18,
    textColor: n.textColor || '#0f172a',
    colorTheme: n.colorTheme || 'yellow',
    mode: n.mode || 'text',
    drawTool: n.drawTool || 'freehand',
    autoShape: n.autoShape !== undefined ? !!n.autoShape : true,
    brushColor: n.brushColor || '#dc2626',
    brushSize: Number(n.brushSize) || 4,
    isHighlighter: !!n.isHighlighter,
    isCollapsed: !!n.isCollapsed,
    title: n.title ? String(n.title) : undefined,
    text: n.text || '',
    html: n.html !== undefined ? n.html : undefined,
    labels: Array.isArray(n.labels) ? n.labels : [],
    drawRegions: Array.isArray(n.drawRegions) ? n.drawRegions : [],
    drawData: n.drawData || null,
    anchorId: n.anchorId || null,
    anchorDy: Number(n.anchorDy) || 0,
    presetVersion: Number(n.presetVersion) || 0,
    userMoved: !!n.userMoved,
    zIndex: Number(n.zIndex) || 1000
  }
}

// Align preset notes to the right margin right next to their section heading (never overlapping textbook)
function alignPresetNotesToAnchors() {
  if (typeof window === 'undefined' || !notes.value.length) return
  const winW = window.innerWidth || 1440
  viewportWidth.value = winW

  const anchored = notes.value.filter(n => n.anchorId && !n.userMoved)
  if (!anchored.length) return

  const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0
  const docEl = document.querySelector('.vp-doc')
  const docRight = docEl ? Math.round(docEl.getBoundingClientRect().right) : Math.round(winW * 0.68)
  const pillW = 268
  const rightMarginX = (winW - docRight >= pillW + 24)
    ? Math.min(winW - pillW - 14, docRight + 14)
    : Math.max(12, winW - pillW - 14)

  // Group notes by (anchorId + '::' + anchorDy) so same-section notes stay grouped in order
  const rowMap = new Map()
  for (const n of anchored) {
    const el = document.getElementById(n.anchorId)
    if (!el) continue
    const headingTop = Math.round(el.getBoundingClientRect().top + scrollY)
    const targetY = Math.max(88, headingTop + (Number(n.anchorDy) || 0))
    const rowKey = `${n.anchorId}::${Number(n.anchorDy) || 0}`
    if (!rowMap.has(rowKey)) {
      rowMap.set(rowKey, { targetY, items: [] })
    }
    rowMap.get(rowKey).items.push(n)
  }

  if (!rowMap.size) return
  const rows = [...rowMap.values()].sort((a, b) => a.targetY - b.targetY)
  let prevBottomY = 76
  let changed = false

  for (const row of rows) {
    row.items.sort((a, b) => (Number(a.x) || 0) - (Number(b.x) || 0))
    let curY = Math.max(row.targetY, prevBottomY + 10)
    for (const n of row.items) {
      if (Math.abs((n.x || 0) - rightMarginX) > 2) {
        n.x = rightMarginX
        changed = true
      }
      if (Math.abs((n.y || 0) - curY) > 2) {
        n.y = curY
        changed = true
      }
      const occupiedH = n.isCollapsed ? 40 : (Number(n.height) || 340)
      curY += occupiedH + 10
      prevBottomY = curY - 10
    }
  }

  if (changed) {
    saveNotes()
  }
}

// Load notes for current page, merge with preloaded notes, and sanitize dimensions
function loadNotes() {
  if (typeof window === 'undefined') return
  try {
    const keyPrimary = storageKey.value
    const keyHtml = `co_ly_thuyet_notes_${normalizedPath.value}.html`
    const keyClean = `co_ly_thuyet_notes_${normalizedPath.value}`
    const raw =
      localStorage.getItem(keyPrimary) ||
      localStorage.getItem(keyHtml) ||
      localStorage.getItem(keyClean)

    const localList = raw ? JSON.parse(raw) : []
    const deletedIds = getDeletedNoteIds()
    const presetList = defaultNotesByPath[normalizedPath.value] || []
    const presetIds = new Set(presetList.map(p => p && p.id).filter(Boolean))
    const needsCollapseMigration = !localStorage.getItem(COLLAPSED_MIGRATION_KEY)

    const mergedMap = new Map()
    let updatedPreset = false
    for (const item of localList) {
      if (item && item.id) {
        const isPresetBacked = String(item.id).startsWith('note_mmm_') || presetIds.has(item.id)
        if (isPresetBacked && (Number(item.presetVersion) || 0) < CURRENT_PRESET_VERSION) {
          updatedPreset = true
          continue
        }
        const cleanItem = sanitizeNote(item)
        if (needsCollapseMigration && !cleanItem.isCollapsed) {
          cleanItem.isCollapsed = true
          updatedPreset = true
        }
        mergedMap.set(item.id, cleanItem)
      }
    }
    for (const preset of presetList) {
      if (preset && preset.id && !mergedMap.has(preset.id) && !deletedIds.has(preset.id)) {
        mergedMap.set(preset.id, sanitizeNote(preset))
        updatedPreset = true
      }
    }

    if (needsCollapseMigration) {
      localStorage.setItem(COLLAPSED_MIGRATION_KEY, '1')
    }

    notes.value = [...mergedMap.values()]
    if (notes.value.length > 0) {
      const maxZ = notes.value.reduce((m, n) => Math.max(m, n.zIndex || 1000), 1000)
      topZIndex.value = maxZ + 1
      activeNoteId.value = notes.value[notes.value.length - 1].id
      if (updatedPreset) {
        saveNotes()
      }
      nextTick(() => {
        alignPresetNotesToAnchors()
        setTimeout(() => alignPresetNotesToAnchors(), 350)
      })
    } else {
      activeNoteId.value = null
    }
  } catch (err) {
    console.error('Error loading notes from localStorage:', err)
    notes.value = []
    activeNoteId.value = null
  }
}

// Save notes to localStorage
function saveNotes() {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(storageKey.value, JSON.stringify(notes.value))
  } catch (err) {
    console.error('Error saving notes to localStorage:', err)
  }
}

// Add a new sticky note pinned at the current reading position
function addNote() {
  if (typeof window === 'undefined') return
  
  const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0
  const winWidth = window.innerWidth || 800
  
  const noteWidth = Math.max(300, Math.min(360, winWidth - 40))
  const noteHeight = 340
  const noteX = Math.max(20, Math.min(winWidth - noteWidth - 40, (winWidth - noteWidth) / 2))
  const noteY = scrollY + 100

  const newNote = {
    id: 'note_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
    x: noteX,
    y: noteY,
    width: noteWidth,
    height: noteHeight,
    text: '',
    html: '',
    fontSize: 18,
    textColor: '#0f172a',
    colorTheme: 'yellow',
    mode: 'text',
    drawTool: 'freehand',
    autoShape: true,
    brushColor: '#dc2626',
    brushSize: 4,
    isHighlighter: false,
    isCollapsed: false,
    labels: [],
    drawRegions: [],
    drawData: null,
    zIndex: ++topZIndex.value,
    createdAt: Date.now()
  }

  notes.value.push(newNote)
  activeNoteId.value = newNote.id
  isVisible.value = true
  saveNotes()
}

function updateNote(updatedNote) {
  const idx = notes.value.findIndex(n => n.id === updatedNote.id)
  if (idx !== -1) {
    if (notes.value[idx] !== updatedNote) {
      Object.assign(notes.value[idx], updatedNote)
    }
    saveNotes()
  }
}

function deleteNote(noteId) {
  markNoteIdDeleted(noteId)
  notes.value = notes.value.filter(n => n.id !== noteId)
  if (activeNoteId.value === noteId) {
    activeNoteId.value = notes.value.length ? notes.value[notes.value.length - 1].id : null
  }
  if (notes.value.length === 0) {
    showMathPanel.value = false
    showColorPopover.value = false
    showDrawGuide.value = false
  }
  saveNotes()
}

function selectNote(noteId) {
  activeNoteId.value = noteId
}

function bringToFront(noteId) {
  const target = notes.value.find(n => n.id === noteId)
  if (target) {
    activeNoteId.value = noteId
    if ((target.zIndex || 1000) < topZIndex.value) {
      target.zIndex = ++topZIndex.value
      saveNotes()
    }
  }
}

function toggleVisibility() {
  isVisible.value = !isVisible.value
  if (!isVisible.value) {
    showMathPanel.value = false
    showColorPopover.value = false
    showDrawGuide.value = false
  }
}

function onFormatStateUpdate(st) {
  Object.assign(formatState, st)
}

// Rich-text formatting actions
function triggerFormat(cmd, val = null) {
  if (!activeNote.value) return
  if (activeNote.value.mode !== 'text') {
    activeNote.value.mode = 'text'
  }
  const refComp = noteItemRefs.value[activeNote.value.id]
  if (refComp && typeof refComp.execFormat === 'function') {
    refComp.execFormat(cmd, val)
  }
}

function applyTextColor(hex) {
  activeTextColor.value = hex
  if (!activeNote.value) return
  const sel = typeof window !== 'undefined' ? window.getSelection() : null
  const hasSelection = sel && sel.rangeCount > 0 && !sel.isCollapsed
  if (hasSelection) {
    triggerFormat('foreColor', hex)
  } else {
    if (!activeNote.value.text) {
      activeNote.value.textColor = hex
      saveNotes()
    }
    triggerFormat('foreColor', hex)
  }
}

function applyTextHighlight(hex) {
  if (!activeNote.value) return
  triggerFormat('hiliteColor', hex)
}

// Active note controls in the dock
function setMode(newMode) {
  if (!activeNote.value) return
  activeNote.value.mode = newMode
  if (newMode === 'draw') {
    showMathPanel.value = false
    showColorPopover.value = false
  } else {
    showDrawGuide.value = false
  }
  saveNotes()
  if (newMode === 'text' && noteItemRefs.value[activeNote.value.id]) {
    noteItemRefs.value[activeNote.value.id].focusTextarea()
  }
}

function setDrawTool(toolId) {
  if (!activeNote.value) return
  activeNote.value.drawTool = toolId
  saveNotes()
}

function toggleAutoShape() {
  if (!activeNote.value) return
  activeNote.value.autoShape = !(activeNote.value.autoShape !== false)
  saveNotes()
}

function toggleMathPanel() {
  if (!activeNote.value) return
  if (activeNote.value.mode === 'draw') {
    activeNote.value.mode = 'text'
    saveNotes()
  }
  showColorPopover.value = false
  showDrawGuide.value = false
  showMathPanel.value = !showMathPanel.value
}

function openCheatsheetTab() {
  if (!activeNote.value) return
  if (activeNote.value.mode === 'draw') {
    activeNote.value.mode = 'text'
    saveNotes()
  }
  showColorPopover.value = false
  showDrawGuide.value = false
  showMathPanel.value = true
  activeMathCat.value = 'cheatsheet'
}

function toggleColorPopover() {
  showMathPanel.value = false
  showDrawGuide.value = false
  showColorPopover.value = !showColorPopover.value
}

function toggleDrawGuide() {
  showMathPanel.value = false
  showColorPopover.value = false
  showDrawGuide.value = !showDrawGuide.value
}

function insertSymbolToActiveNote(symStr) {
  if (!activeNote.value) return
  if (activeNote.value.isCollapsed) {
    activeNote.value.isCollapsed = false
  }
  if (activeNote.value.mode !== 'text') {
    activeNote.value.mode = 'text'
  }
  const refComp = noteItemRefs.value[activeNote.value.id]
  if (refComp && typeof refComp.insertTextAtCursor === 'function') {
    refComp.insertTextAtCursor(symStr)
  } else {
    activeNote.value.text = (activeNote.value.text || '') + symStr
    saveNotes()
  }
}

function setFontSize(size) {
  if (!activeNote.value) return
  activeNote.value.fontSize = Number(size)
  saveNotes()
}

function setColorTheme(themeName) {
  if (!activeNote.value) return
  activeNote.value.colorTheme = themeName
  saveNotes()
}

function setBrushColor(colorHex) {
  if (!activeNote.value) return
  activeNote.value.brushColor = colorHex
  activeNote.value.isHighlighter = false
  if (activeNote.value.drawTool === 'eraser') {
    activeNote.value.drawTool = 'freehand'
  }
  saveNotes()
}

function setBrushSize(sizeObj) {
  if (!activeNote.value) return
  activeNote.value.brushSize = sizeObj.val
  activeNote.value.isHighlighter = !!sizeObj.isHigh
  saveNotes()
}

function triggerUndo() {
  if (!activeNote.value) return
  noteItemRefs.value[activeNote.value.id]?.undoCanvas()
}

function triggerRedo() {
  if (!activeNote.value) return
  noteItemRefs.value[activeNote.value.id]?.redoCanvas()
}

function triggerClear() {
  if (!activeNote.value) return
  noteItemRefs.value[activeNote.value.id]?.clearCanvas()
}

function triggerAddPointLabel() {
  if (!activeNote.value) return
  noteItemRefs.value[activeNote.value.id]?.addPointLabelBox()
}

let resizeTimer = null
function onWindowResize() {
  if (typeof window === 'undefined') return
  viewportWidth.value = window.innerWidth || 1440
  if (resizeTimer) clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    alignPresetNotesToAnchors()
  }, 120)
}

// Reload notes whenever user navigates to a new page
watch(() => route.path, () => {
  showMathPanel.value = false
  showColorPopover.value = false
  showDrawGuide.value = false
  loadNotes()
})

onMounted(() => {
  loadNotes()
  if (typeof window !== 'undefined') {
    viewportWidth.value = window.innerWidth || 1440
    window.addEventListener('resize', onWindowResize)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', onWindowResize)
  }
  if (resizeTimer) clearTimeout(resizeTimer)
})
</script>

<template>
  <div class="sticky-notes-system">
    <!-- Pinned Notes Layer (spans entire document height) -->
    <div class="notes-canvas-layer" v-show="isVisible">
      <StickyNoteItem
        v-for="note in notes"
        :key="note.id"
        :ref="el => { if (el) noteItemRefs[note.id] = el; else delete noteItemRefs[note.id] }"
        :note="note"
        :is-active="!!(activeNote && note.id === activeNote.id)"
        :viewport-width="viewportWidth"
        @update="updateNote"
        @delete="deleteNote"
        @select="selectNote"
        @bring-to-front="bringToFront"
        @format-state="onFormatStateUpdate"
      />
    </div>

    <!-- Floating Smart Drawing Guide & Hotkey Cheatsheet Popover -->
    <transition name="math-pop">
      <div
        v-if="showDrawGuide && notes.length > 0 && activeNote && isVisible"
        class="draw-guide-popover"
      >
        <div class="tsp-header">
          <div class="math-pop-title">
            <svg class="math-pop-svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="9"/>
              <polygon points="12 7 16.5 15 7.5 15"/>
            </svg>
            <span>Trợ Lý Vẽ Hình Học &amp; Phím Tắt Nhanh</span>
          </div>
          <button type="button" class="math-close-btn" @click="showDrawGuide = false">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div class="dg-body">
          <div class="dg-highlight-box">
            <strong>Cách 1 (Thông dụng nhất — Không cần bấm phím):</strong>
            <div>Khi đang ở chế độ <strong>Bút tự do</strong>, bạn cứ vẽ một đường thẳng, vòng tròn, hình vuông, chữ nhật hoặc tam giác rồi <strong>giữ yên chuột 0.4 giây ở cuối nét vẽ</strong> trước khi thả tay — nét vẽ sẽ tự động biến thành hình chuẩn xác!</div>
          </div>

          <div class="dg-subtitle">Cách 2: Nhấn giữ phím tắt trong lúc kéo chuột vẽ</div>
          <div class="dg-hotkey-list">
            <div class="dg-row">
              <kbd>Shift</kbd> + Kéo chuột
              <span>→ Đoạn thẳng hoàn hảo (khóa góc 15°: 0°, 30°, 45°, 60°, 90°)</span>
            </div>
            <div class="dg-row">
              <kbd>Shift + C</kbd> hoặc <kbd>C</kbd>
              <span>→ Hình tròn hoàn hảo</span>
            </div>
            <div class="dg-row">
              <kbd>Shift + V</kbd> hoặc <kbd>V</kbd>
              <span>→ Hình vuông hoàn hảo</span>
            </div>
            <div class="dg-row">
              <kbd>Shift + R</kbd> hoặc <kbd>R</kbd>
              <span>→ Hình chữ nhật chuẩn</span>
            </div>
            <div class="dg-row">
              <kbd>Shift + T</kbd> hoặc <kbd>T</kbd>
              <span>→ Hình tam giác cân / Gối tựa</span>
            </div>
            <div class="dg-row">
              <kbd>Shift + A</kbd> hoặc <kbd>A</kbd> / <kbd>Alt</kbd>
              <span>→ Mũi tên Vectơ lực (F⃗, P⃗, N⃗, v⃗)</span>
            </div>
            <div class="dg-row">
              <kbd>Ctrl + T</kbd> hoặc <strong>Nhấp đúp lên hình</strong>
              <span>→ Thêm hộp Text tọa độ điểm (A, B, O, F⃗...)</span>
            </div>
            <div class="dg-row">
              <kbd>Ctrl + Z</kbd> / <kbd>Ctrl + Y</kbd>
              <span>→ Hoàn tác (Undo) / Làm lại (Redo) nét vẽ vừa thực hiện</span>
            </div>
          </div>

          <div class="dg-subtitle">Cách 3: Chọn trực tiếp công cụ Hình học trên thanh Dock</div>
          <div class="dg-note">
            Nhấp chọn biểu tượng <strong>Đoạn thẳng, Vectơ, Tròn, Vuông, Chữ nhật, Tam giác</strong> ngay trên thanh công cụ bên dưới để vẽ liên tiếp nhiều hình.
          </div>
        </div>
      </div>
    </transition>

    <!-- Floating Text Color & Highlight Popover -->
    <transition name="math-pop">
      <div
        v-if="showColorPopover && notes.length > 0 && activeNote && isVisible"
        class="text-style-popover"
        @mousedown.prevent
      >
        <div class="tsp-header">
          <span>Màu chữ &amp; Tô nền văn bản</span>
          <button type="button" class="math-close-btn" @click="showColorPopover = false">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div class="tsp-section">
          <div class="tsp-label">Màu chữ (Bôi đen chữ hoặc chọn để gõ tiếp):</div>
          <div class="tsp-swatches">
            <button
              v-for="tc in textColors"
              :key="tc.hex"
              type="button"
              class="tsp-color-dot"
              :class="{ active: activeTextColor === tc.hex }"
              :style="{ backgroundColor: tc.hex }"
              :title="tc.name"
              @mousedown.prevent="applyTextColor(tc.hex)"
            />
            <!-- Custom Color Picker -->
            <label class="tsp-custom-color" title="Chọn màu chữ tùy chỉnh">
              <input
                type="color"
                :value="activeTextColor"
                @input="applyTextColor($event.target.value)"
              />
              <span>Tùy chọn</span>
            </label>
          </div>
        </div>

        <div class="tsp-section">
          <div class="tsp-label">Tô dạ quang nền chữ (Highlight):</div>
          <div class="tsp-swatches">
            <button
              v-for="hl in textHighlights"
              :key="hl.name"
              type="button"
              class="tsp-hl-pill"
              :style="{
                backgroundColor: hl.hex === 'transparent' ? '#f8fafc' : hl.hex
              }"
              :title="hl.name"
              @mousedown.prevent="applyTextHighlight(hl.hex)"
            >
              <span v-if="hl.hex === 'transparent'">Không tô</span>
              <span v-else>A</span>
            </button>
          </div>
        </div>

        <div class="tsp-section tsp-row-between">
          <div class="tsp-label">Căn lề &amp; Danh sách:</div>
          <div class="tsp-align-btns">
            <button type="button" class="fmt-btn" title="Căn trái" @mousedown.prevent="triggerFormat('justifyLeft')">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="18" y2="18"/>
              </svg>
            </button>
            <button type="button" class="fmt-btn" :class="{ active: formatState.justifyCenter }" title="Căn giữa" @mousedown.prevent="triggerFormat('justifyCenter')">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
              </svg>
            </button>
            <button type="button" class="fmt-btn" :class="{ active: formatState.insertUnorderedList }" title="Danh sách chấm tròn" @mousedown.prevent="triggerFormat('insertUnorderedList')">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/>
                <circle cx="4.5" cy="6" r="1.2" fill="currentColor"/><circle cx="4.5" cy="12" r="1.2" fill="currentColor"/><circle cx="4.5" cy="18" r="1.2" fill="currentColor"/>
              </svg>
            </button>
            <button type="button" class="fmt-btn" title="Xóa định dạng vùng bôi đen" @mousedown.prevent="triggerFormat('removeFormat')">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                <path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M13 4 8 20"/><line x1="3" y1="3" x2="21" y2="21"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Floating Math Symbols & Command Cheatsheet Panel -->
    <transition name="math-pop">
      <div
        v-if="showMathPanel && notes.length > 0 && activeNote && isVisible"
        class="math-cheatsheet-popover"
      >
        <!-- Top Header -->
        <div class="math-pop-header">
          <div class="math-pop-title">
            <!-- Minimalist Sigma SVG Icon -->
            <svg class="math-pop-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 4H6l6 8-6 8h12"/>
            </svg>
            <span>Ký Hiệu Toán - Cơ Học &amp; Bảng Lệnh Nhanh</span>
          </div>
          <div class="math-pop-actions">
            <button
              type="button"
              class="math-quick-tab-btn"
              :class="{ active: activeMathCat === 'cheatsheet' }"
              @click="activeMathCat = activeMathCat === 'cheatsheet' ? 'all' : 'cheatsheet'"
              title="Xem bảng hướng dẫn gõ lệnh tắt (Cheatsheet)"
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>
              </svg>
              <span>{{ activeMathCat === 'cheatsheet' ? 'Bảng Ký Hiệu' : 'Cheatsheet Lệnh' }}</span>
            </button>
            <button
              type="button"
              class="math-close-btn"
              @click="showMathPanel = false"
              title="Đóng bảng ký hiệu"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Search Input & Category Pills -->
        <div class="math-pop-controls">
          <div class="math-search-box">
            <svg class="search-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              v-model="mathSearchQuery"
              type="text"
              class="math-search-input"
              placeholder="Tìm ký hiệu hoặc lệnh (vd: alpha, omega, vec, đạo hàm, tổng, ^2, <=)..."
            />
            <button
              v-if="mathSearchQuery"
              type="button"
              class="search-clear-btn"
              @click="mathSearchQuery = ''"
              title="Xóa tìm kiếm"
            >
              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div class="math-cat-tabs">
            <button
              v-for="cat in MATH_CATEGORIES"
              :key="cat.id"
              type="button"
              class="math-cat-pill"
              :class="{ active: activeMathCat === cat.id }"
              @click="activeMathCat = cat.id"
            >
              {{ cat.name }}
            </button>
          </div>
        </div>

        <!-- Body Area: Symbol Grid OR Cheatsheet View -->
        <div class="math-pop-body">
          <!-- View 1: Dedicated Cheatsheet View -->
          <div v-if="activeMathCat === 'cheatsheet'" class="cheatsheet-container">
            <div class="cheatsheet-banner">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h.01"/>
              </svg>
              <span>
                <strong>Cách gõ lệnh trực tiếp trong tờ Note:</strong> Gõ <code>/tên_lệnh</code> (dấu <code>/</code> ngay cạnh phím Shift phải, hoặc dấu <code>\</code>) rồi nhấn <strong>Space</strong>, <strong>Tab</strong> hoặc <strong>Enter</strong>.
              </span>
            </div>

            <!-- Structured Syntax Rules -->
            <div class="cheatsheet-groups" v-if="!mathSearchQuery">
              <div v-for="(grp, gIdx) in CHEATSHEET_RULES" :key="gIdx" class="cs-group-card">
                <div class="cs-group-title">{{ grp.group }}</div>
                <div class="cs-rule-list">
                  <div v-for="(r, rIdx) in grp.items" :key="rIdx" class="cs-rule-row">
                    <code class="cs-syntax">{{ r.syntax }}</code>
                    <span class="cs-arrow">→</span>
                    <span class="cs-result">{{ r.result }}</span>
                    <span class="cs-desc">{{ r.desc }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Complete Searchable Command Table -->
            <div class="cs-table-section">
              <div class="cs-group-title">
                Danh mục đầy đủ Lệnh Gõ Nhanh ({{ filteredMathSymbols.length }} lệnh — Nhấp vào dòng bất kỳ để chèn)
              </div>
              <div class="cs-cmd-table">
                <button
                  v-for="(item, idx) in filteredMathSymbols"
                  :key="item.cmd + idx"
                  type="button"
                  class="cs-cmd-row"
                  @mousedown.prevent="insertSymbolToActiveNote(item.symbol)"
                  :title="'Nhấp để chèn ' + item.symbol + ' vào tờ note'"
                >
                  <span class="cs-row-sym">{{ item.symbol }}</span>
                  <div class="cs-row-codes">
                    <code class="cs-row-main-cmd">{{ item.cmd }}</code>
                    <code
                      v-for="al in (item.aliases || []).slice(0, 2)"
                      :key="al"
                      class="cs-row-alias"
                    >{{ al }}</code>
                  </div>
                  <span class="cs-row-label">{{ item.label }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- View 2: Interactive Symbol Picker Grid -->
          <div v-else class="math-symbol-grid">
            <button
              v-for="(item, idx) in filteredMathSymbols"
              :key="item.cmd + idx"
              type="button"
              class="math-sym-card"
              @mousedown.prevent="insertSymbolToActiveNote(item.symbol)"
              :title="`${item.label} — Gõ ${item.cmd} + Space hoặc nhấp để chèn`"
            >
              <span class="sym-char">{{ item.symbol }}</span>
              <code class="sym-cmd">{{ item.cmd }}</code>
            </button>

            <div v-if="filteredMathSymbols.length === 0" class="math-empty-state">
              Không tìm thấy ký hiệu hoặc lệnh phù hợp với "{{ mathSearchQuery }}".
            </div>
          </div>
        </div>

        <!-- Footer Tip -->
        <div class="math-pop-footer">
          <span>Mẹo: Trong ô viết chữ, gõ <code>/alpha</code>, <code>/omega</code>, <code>/sum</code>, <code>/vF</code>, <code>/vec(F)</code>, <code>/dx</code>, <code>x^2</code>, <code>v_x</code> + <strong>Space</strong> để chuyển tự động.</span>
        </div>
      </div>
    </transition>

    <!-- Global Floating Action & Control Dock (Bottom-Right) -->
    <div class="sticky-dock-panel">
      <!-- Attached Toolbar for Active Note (Clean, uncluttered, docked at bottom) -->
      <div
        v-if="notes.length > 0 && activeNote && isVisible"
        class="dock-toolbar"
      >
        <!-- Mode Tabs: Viết chữ vs Vẽ tay (Minimalist Vector Icons) -->
        <div class="dock-mode-group">
          <!-- Text Mode Button -->
          <button
            class="dock-mode-btn"
            :class="{ active: (activeNote.mode || 'text') === 'text' }"
            @click="setMode('text')"
            title="Đánh máy văn bản (Font Times New Roman)"
          >
            <svg class="dock-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
              <path d="m15 5 4 4"/>
            </svg>
            <span>Viết chữ</span>
          </button>

          <!-- Draw Mode Button -->
          <button
            class="dock-mode-btn"
            :class="{ active: activeNote.mode === 'draw' }"
            @click="setMode('draw')"
            title="Vẽ tay & Hình học thông minh"
          >
            <svg class="dock-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 22s5-1 7-3l11-11a2.828 2.828 0 0 0-4-4L5 15c-2 2-3 7-3 7z"/>
              <path d="m15 5 4 4"/>
            </svg>
            <span>Vẽ hình</span>
          </button>
        </div>

        <!-- Text Mode Controls: Rich Text Formatting (B, I, U, S, Sub, Sup, Text Color), Math Symbols, Font Size & Paper Color -->
        <div class="dock-subgroup" v-if="(activeNote.mode || 'text') === 'text'">
          <div class="dock-format-group">
            <!-- Bold (Ctrl+B) -->
            <button
              type="button"
              class="fmt-btn"
              :class="{ active: formatState.bold }"
              @mousedown.prevent="triggerFormat('bold')"
              title="In đậm (Ctrl + B)"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
                <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
              </svg>
            </button>

            <!-- Italic (Ctrl+I) -->
            <button
              type="button"
              class="fmt-btn"
              :class="{ active: formatState.italic }"
              @mousedown.prevent="triggerFormat('italic')"
              title="In nghiêng (Ctrl + I)"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="4" x2="10" y2="4"/>
                <line x1="14" y1="20" x2="5" y2="20"/>
                <line x1="15" y1="4" x2="9" y2="20"/>
              </svg>
            </button>

            <!-- Underline (Ctrl+U) -->
            <button
              type="button"
              class="fmt-btn"
              :class="{ active: formatState.underline }"
              @mousedown.prevent="triggerFormat('underline')"
              title="Gạch chân (Ctrl + U)"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 4v6a6 6 0 0 0 12 0V4"/>
                <line x1="4" y1="20" x2="20" y2="20"/>
              </svg>
            </button>

            <!-- Strikethrough -->
            <button
              type="button"
              class="fmt-btn"
              :class="{ active: formatState.strikeThrough }"
              @mousedown.prevent="triggerFormat('strikeThrough')"
              title="Gạch ngang chữ"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 4H9a3 3 0 0 0-2.83 4"/>
                <path d="M14 12a4 4 0 0 1 0 8H6"/>
                <line x1="4" y1="12" x2="20" y2="12"/>
              </svg>
            </button>

            <!-- Subscript (x₂) -->
            <button
              type="button"
              class="fmt-btn fmt-text-icon"
              :class="{ active: formatState.subscript }"
              @mousedown.prevent="triggerFormat('subscript')"
              title="Chỉ số dưới (Subscript x₂)"
            >
              <span>x<sub>2</sub></span>
            </button>

            <!-- Superscript (x²) -->
            <button
              type="button"
              class="fmt-btn fmt-text-icon"
              :class="{ active: formatState.superscript }"
              @mousedown.prevent="triggerFormat('superscript')"
              title="Số mũ / Chỉ số trên (Superscript x²)"
            >
              <span>x<sup>2</sup></span>
            </button>

            <!-- Text Color & Highlight Button -->
            <button
              type="button"
              class="fmt-btn fmt-color-btn"
              :class="{ active: showColorPopover }"
              @mousedown.prevent="toggleColorPopover"
              title="Đổi màu chữ, tô dạ quang nền chữ & căn lề"
            >
              <span class="fmt-letter-a">A</span>
              <span class="fmt-color-bar" :style="{ backgroundColor: activeTextColor }" />
            </button>
          </div>

          <div class="dock-divider" />

          <!-- Math Symbols & Cheatsheet Button -->
          <button
            type="button"
            class="dock-math-btn"
            :class="{ active: showMathPanel }"
            @mousedown.prevent="toggleMathPanel"
            title="Mở bảng Ký hiệu Toán - Cơ học & Cheatsheet gõ lệnh nhanh"
          >
            <svg class="dock-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 4H6l6 8-6 8h12"/>
            </svg>
            <span>Toán &amp; Lệnh</span>
          </button>

          <!-- Direct Cheatsheet Shortcut Button -->
          <button
            type="button"
            class="dock-cs-btn"
            :class="{ active: showMathPanel && activeMathCat === 'cheatsheet' }"
            @mousedown.prevent="openCheatsheetTab"
            title="Xem bảng Cheatsheet cú pháp gõ lệnh toán học"
          >
            <svg class="dock-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"/>
            </svg>
            <span>Cheatsheet</span>
          </button>

          <div class="dock-divider" />

          <div class="dock-field">
            <span class="dock-label">Cỡ:</span>
            <select
              :value="activeNote.fontSize || 18"
              class="dock-select"
              @change="setFontSize($event.target.value)"
              title="Cỡ chữ Times New Roman"
            >
              <option v-for="s in fontSizes" :key="s" :value="s">{{ s }}px</option>
            </select>
          </div>

          <div class="dock-divider" />

          <!-- Paper Theme Palette -->
          <div class="dock-palette" title="Đổi màu giấy note">
            <button
              v-for="(th, name) in colorThemes"
              :key="name"
              class="theme-dot"
              :class="{ active: (activeNote.colorTheme || 'yellow') === name }"
              :style="{ backgroundColor: th.header }"
              @click="setColorTheme(name)"
              :title="'Màu giấy ' + name"
            />
          </div>
        </div>

        <!-- Draw Mode Controls: Shape Tools, Auto-Snap Toggle, Brush Colors, Sizes, Undo & Clear -->
        <div class="dock-subgroup" v-if="activeNote.mode === 'draw'">
          <!-- Geometric Shape & Freehand Tools -->
          <div class="dock-format-group">
            <button
              v-for="dt in drawTools"
              :key="dt.id"
              type="button"
              class="fmt-btn"
              :class="{ active: (activeNote.drawTool || 'freehand') === dt.id }"
              @click="setDrawTool(dt.id)"
              :title="dt.name"
            >
              <!-- Freehand Icon -->
              <svg v-if="dt.id === 'freehand'" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 17c3-6 6-6 9 0s6 6 9 0"/>
              </svg>
              <!-- Line Icon -->
              <svg v-else-if="dt.id === 'line'" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round">
                <line x1="4" y1="20" x2="20" y2="4"/>
              </svg>
              <!-- Force Vector Arrow Icon -->
              <svg v-else-if="dt.id === 'arrow'" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="4" y1="20" x2="20" y2="4"/>
                <polyline points="10 4 20 4 20 14"/>
              </svg>
              <!-- Circle Icon -->
              <svg v-else-if="dt.id === 'circle'" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="12" cy="12" r="8"/>
              </svg>
              <!-- Square Icon -->
              <svg v-else-if="dt.id === 'square'" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="1.5"/>
              </svg>
              <!-- Rectangle Icon -->
              <svg v-else-if="dt.id === 'rect'" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round">
                <rect x="2.5" y="6" width="19" height="12" rx="1.5"/>
              </svg>
              <!-- Triangle Icon -->
              <svg v-else-if="dt.id === 'triangle'" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round">
                <polygon points="12 4 21 19 3 19"/>
              </svg>
              <!-- Eraser Icon -->
              <svg v-else-if="dt.id === 'eraser'" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/>
                <path d="M22 21H7"/>
              </svg>
            </button>
          </div>

          <!-- Auto-Snap Hold Toggle, Point Label Box & Hotkey Guide -->
          <button
            type="button"
            class="size-pill"
            :class="{ selected: activeNote.autoShape !== false }"
            @click="toggleAutoShape"
            title="Bật/Tắt tự động nắn thành hình chuẩn khi giữ chuột 0.4 giây ở cuối nét vẽ tự do"
          >
            Tự nắn
          </button>

          <button
            type="button"
            class="dock-math-btn"
            @mousedown.prevent="triggerAddPointLabel"
            title="Thêm hộp Text tọa độ điểm lên hình vẽ (Phím tắt: Ctrl + T hoặc Nhấp đúp chuột lên hình)"
          >
            <svg class="dock-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="4 7 4 4 20 4 20 7"/>
              <line x1="9" y1="20" x2="15" y2="20"/>
              <line x1="12" y1="4" x2="12" y2="20"/>
            </svg>
            <span>+Hộp Điểm (Ctrl+T)</span>
          </button>

          <button
            type="button"
            class="dock-cs-btn"
            :class="{ active: showDrawGuide }"
            @click="toggleDrawGuide"
            title="Xem hướng dẫn Phím tắt vẽ hình hoàn hảo (Shift, Shift+C, Shift+V, Shift+R, Ctrl+T...)"
          >
            <span>Phím tắt Vẽ</span>
          </button>

          <div class="dock-divider" />

          <!-- Brush Colors -->
          <div class="dock-palette" title="Chọn màu cọ">
            <button
              v-for="c in brushColors"
              :key="c.hex"
              class="brush-dot"
              :class="{ selected: (activeNote.brushColor || '#dc2626') === c.hex && !activeNote.isHighlighter && activeNote.drawTool !== 'eraser' }"
              :style="{ backgroundColor: c.hex }"
              @click="setBrushColor(c.hex)"
              :title="c.name"
            />
          </div>

          <div class="dock-divider" />

          <!-- Brush Sizes -->
          <div class="dock-sizes">
            <button
              v-for="b in brushSizes"
              :key="b.label"
              class="size-pill"
              :class="{ selected: (activeNote.brushSize || 4) === b.val && activeNote.isHighlighter === !!b.isHigh }"
              @click="setBrushSize(b)"
              :title="b.label"
            >
              {{ b.label }}
            </button>
          </div>

          <div class="dock-divider" />

          <!-- Undo, Redo & Clear with Minimalist SVGs -->
          <div class="dock-actions">
            <!-- Undo Icon (Ctrl + Z) -->
            <button class="dock-action-btn" @click="triggerUndo" title="Hoàn tác nét vẽ (Phím tắt: Ctrl + Z)">
              <svg class="action-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 7v6h6"/>
                <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>
              </svg>
              <span>Lùi (Ctrl+Z)</span>
            </button>

            <!-- Redo Icon (Ctrl + Y) -->
            <button class="dock-action-btn" @click="triggerRedo" title="Làm lại nét vẽ (Phím tắt: Ctrl + Y hoặc Ctrl + Shift + Z)">
              <svg class="action-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 7v6h-6"/>
                <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/>
              </svg>
              <span>Tiến</span>
            </button>

            <!-- Clear All Icon -->
            <button class="dock-action-btn btn-danger" @click="triggerClear" title="Xóa toàn bộ hình vẽ (Có thể Ctrl + Z để khôi phục)">
              <svg class="action-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
              <span>Xóa hết</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Action Buttons: Hide/Show Toggle & Dán Note -->
      <div class="dock-fabs">
        <!-- Toggle Hide/Show Button with Minimalist Eye / EyeOff Icon -->
        <button
          v-if="notes.length > 0"
          class="fab-btn fab-toggle"
          :class="{ 'is-hidden': !isVisible }"
          @click="toggleVisibility"
          :title="isVisible ? 'Ẩn tạm thời các tờ note' : 'Hiện lại các tờ note'"
        >
          <!-- Eye icon when visible -->
          <svg v-if="isVisible" class="fab-svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <!-- Eye-off icon when hidden -->
          <svg v-else class="fab-svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
            <line x1="2" y1="2" x2="22" y2="22"/>
          </svg>
          <span class="fab-badge" v-if="notes.length > 0">{{ notes.length }}</span>
        </button>

        <!-- Main "Dán Note" Button with Minimalist StickyNotePlus Icon -->
        <button
          class="fab-btn fab-add"
          @click="addNote"
          title="Dán một tờ ghi chú mới vào vị trí này"
        >
          <svg class="fab-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/>
            <path d="M15 3v6h6"/>
            <line x1="12" y1="11" x2="12" y2="17"/>
            <line x1="9" y1="14" x2="15" y2="14"/>
          </svg>
          <span class="fab-text">Dán Note</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sticky-notes-system {
  position: static;
  pointer-events: none;
}

.notes-canvas-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 22;
}

.notes-canvas-layer :deep(.sticky-note-card) {
  pointer-events: auto;
}

/* Rich Text & Shape Tool Group in Dock */
.dock-format-group {
  display: flex;
  align-items: center;
  gap: 2px;
  background: rgba(0, 0, 0, 0.04);
  padding: 2px 4px;
  border-radius: 8px;
}

.dark .dock-format-group {
  background: rgba(255, 255, 255, 0.08);
}

.fmt-btn {
  border: 1px solid transparent;
  background: transparent;
  color: #334155;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: all 0.14s ease;
}

.dark .fmt-btn {
  color: #cbd5e1;
}

.fmt-btn:hover {
  background: rgba(2, 132, 199, 0.12);
  color: #0284c7;
}

.fmt-btn.active {
  background: #0284c7;
  color: #ffffff;
  box-shadow: 0 1px 4px rgba(2, 132, 199, 0.35);
}

.fmt-text-icon {
  font-family: "Times New Roman", Times, serif;
  font-size: 13px;
  font-weight: 700;
  font-style: italic;
}

.fmt-text-icon sub,
.fmt-text-icon sup {
  font-size: 9px;
  font-style: normal;
}

.fmt-color-btn {
  flex-direction: column;
  gap: 1px;
  width: 28px;
}

.fmt-letter-a {
  font-family: "Times New Roman", Times, serif;
  font-size: 13px;
  font-weight: 800;
  line-height: 1;
}

.fmt-color-bar {
  width: 14px;
  height: 3px;
  border-radius: 2px;
}

/* Floating Smart Draw Guide Popover */
.draw-guide-popover {
  position: fixed;
  bottom: 78px;
  right: 24px;
  width: min(440px, calc(100vw - 32px));
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(14px);
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.24);
  z-index: 10001;
  pointer-events: auto;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.dark .draw-guide-popover {
  background: rgba(15, 23, 42, 0.96);
  border-color: #334155;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.55);
}

.dg-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;
  color: #334155;
}

.dark .dg-body {
  color: #cbd5e1;
}

.dg-highlight-box {
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  color: #0369a1;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 11.5px;
  line-height: 1.45;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.dark .dg-highlight-box {
  background: rgba(2, 132, 199, 0.16);
  border-color: rgba(56, 189, 248, 0.3);
  color: #bae6fd;
}

.dg-subtitle {
  font-size: 11.5px;
  font-weight: 700;
  color: #0f172a;
  margin-top: 2px;
}

.dark .dg-subtitle {
  color: #f8fafc;
}

.dg-hotkey-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 7px 10px;
}

.dark .dg-hotkey-list {
  background: #1e293b;
  border-color: #334155;
}

.dg-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 11.5px;
}

.dg-row kbd {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  padding: 1px 5px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10.5px;
  font-weight: 700;
  color: #0284c7;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.dark .dg-row kbd {
  background: #0f172a;
  border-color: #475569;
  color: #38bdf8;
}

.dg-note {
  font-size: 11px;
  color: #64748b;
  line-height: 1.4;
}

.dark .dg-note {
  color: #94a3b8;
}

/* Floating Text Color & Highlight Popover */
.text-style-popover {
  position: fixed;
  bottom: 78px;
  right: 160px;
  width: 285px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(14px);
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  box-shadow: 0 16px 38px rgba(15, 23, 42, 0.22);
  z-index: 10001;
  pointer-events: auto;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.dark .text-style-popover {
  background: rgba(15, 23, 42, 0.96);
  border-color: #334155;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
}

.tsp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
  color: #0f172a;
  padding-bottom: 6px;
  border-bottom: 1px solid #e2e8f0;
}

.dark .tsp-header {
  color: #f8fafc;
  border-bottom-color: #334155;
}

.tsp-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tsp-row-between {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.tsp-label {
  font-size: 11px;
  font-weight: 600;
  color: #64748b;
}

.dark .tsp-label {
  color: #94a3b8;
}

.tsp-swatches {
  display: flex;
  align-items: center;
  gap: 7px;
  flex-wrap: wrap;
}

.tsp-color-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.18);
  cursor: pointer;
  padding: 0;
  transition: transform 0.12s ease;
}

.tsp-color-dot:hover {
  transform: scale(1.18);
}

.tsp-color-dot.active {
  transform: scale(1.2);
  box-shadow: 0 0 0 2px #0284c7;
}

.tsp-custom-color {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  color: #0284c7;
  cursor: pointer;
  border: 1px dashed #94a3b8;
  padding: 2px 7px;
  border-radius: 9999px;
}

.tsp-custom-color input[type="color"] {
  width: 14px;
  height: 14px;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
}

.tsp-hl-pill {
  height: 24px;
  min-width: 30px;
  padding: 0 7px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  font-family: "Times New Roman", Times, serif;
  font-size: 12px;
  font-weight: 700;
  color: #0f172a;
  cursor: pointer;
  transition: transform 0.12s ease;
}

.tsp-hl-pill:hover {
  transform: translateY(-1px);
  border-color: #0284c7;
}

.tsp-align-btns {
  display: flex;
  gap: 4px;
}

/* Floating Math Symbols & Cheatsheet Popover */
.math-cheatsheet-popover {
  position: fixed;
  bottom: 78px;
  right: 24px;
  width: min(560px, calc(100vw - 32px));
  max-height: min(520px, calc(100vh - 120px));
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid #cbd5e1;
  border-radius: 14px;
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.24), 0 4px 12px rgba(15, 23, 42, 0.08);
  z-index: 10001;
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.dark .math-cheatsheet-popover {
  background: rgba(15, 23, 42, 0.96);
  border-color: #334155;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55);
}

.math-pop-enter-active,
.math-pop-leave-active {
  transition: opacity 0.18s ease, transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}

.math-pop-enter-from,
.math-pop-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}

.math-pop-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.dark .math-pop-header {
  background: #1e293b;
  border-bottom-color: #334155;
}

.math-pop-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  color: #0f172a;
}

.dark .math-pop-title {
  color: #f8fafc;
}

.math-pop-svg {
  color: #0284c7;
}

.math-pop-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.math-quick-tab-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #334155;
  font-size: 11.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}

.dark .math-quick-tab-btn {
  background: #0f172a;
  border-color: #475569;
  color: #cbd5e1;
}

.math-quick-tab-btn:hover {
  border-color: #0284c7;
  color: #0284c7;
}

.math-quick-tab-btn.active {
  background: #0284c7;
  border-color: #0284c7;
  color: #ffffff;
}

.math-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  transition: all 0.15s ease;
}

.math-close-btn:hover {
  background: #fee2e2;
  color: #dc2626;
}

.dark .math-close-btn:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #f87171;
}

/* Search & Category Tabs */
.math-pop-controls {
  padding: 10px 14px 8px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dark .math-pop-controls {
  border-bottom-color: #334155;
}

.math-search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-svg {
  position: absolute;
  left: 10px;
  color: #64748b;
  pointer-events: none;
}

.math-search-input {
  width: 100%;
  padding: 6px 28px 6px 30px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 12px;
  background: #f8fafc;
  color: #0f172a;
  outline: none;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.dark .math-search-input {
  background: #1e293b;
  border-color: #475569;
  color: #f1f5f9;
}

.math-search-input:focus {
  border-color: #0284c7;
  background: #ffffff;
}

.dark .math-search-input:focus {
  background: #0f172a;
  border-color: #38bdf8;
}

.search-clear-btn {
  position: absolute;
  right: 6px;
  border: none;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
}

.math-cat-tabs {
  display: flex;
  gap: 5px;
  overflow-x: auto;
  padding-bottom: 2px;
}

.math-cat-pill {
  border: 1px solid #e2e8f0;
  background: #f1f5f9;
  color: #475569;
  border-radius: 9999px;
  padding: 3px 10px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.dark .math-cat-pill {
  background: #1e293b;
  border-color: #334155;
  color: #94a3b8;
}

.math-cat-pill:hover {
  border-color: #0284c7;
  color: #0284c7;
}

.math-cat-pill.active {
  background: #0284c7;
  border-color: #0284c7;
  color: #ffffff;
}

/* Body Content */
.math-pop-body {
  padding: 10px 14px;
  overflow-y: auto;
  flex: 1 1 auto;
  max-height: 340px;
}

.math-symbol-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(78px, 1fr));
  gap: 6px;
}

.math-sym-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 7px 4px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #ffffff;
  color: #0f172a;
  cursor: pointer;
  transition: all 0.14s ease;
}

.dark .math-sym-card {
  background: #1e293b;
  border-color: #334155;
  color: #f8fafc;
}

.math-sym-card:hover {
  border-color: #0284c7;
  background: #f0f9ff;
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(2, 132, 199, 0.15);
}

.dark .math-sym-card:hover {
  background: rgba(2, 132, 199, 0.22);
  border-color: #38bdf8;
}

.sym-char {
  font-family: "Times New Roman", Times, "Cambria Math", serif;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.2;
}

.sym-cmd {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10px;
  color: #64748b;
  background: #f1f5f9;
  padding: 1px 4px;
  border-radius: 4px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dark .sym-cmd {
  background: #0f172a;
  color: #94a3b8;
}

/* Cheatsheet View Styles */
.cheatsheet-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cheatsheet-banner {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  color: #0369a1;
  font-size: 11.5px;
  line-height: 1.45;
}

.dark .cheatsheet-banner {
  background: rgba(2, 132, 199, 0.15);
  border-color: rgba(56, 189, 248, 0.3);
  color: #bae6fd;
}

.cheatsheet-groups {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cs-group-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.dark .cs-group-card {
  border-color: #334155;
}

.cs-group-title {
  padding: 6px 10px;
  font-size: 11.5px;
  font-weight: 700;
  background: #f8fafc;
  color: #1e293b;
  border-bottom: 1px solid #e2e8f0;
}

.dark .cs-group-title {
  background: #1e293b;
  color: #e2e8f0;
  border-bottom-color: #334155;
}

.cs-rule-list {
  display: flex;
  flex-direction: column;
}

.cs-rule-row {
  display: grid;
  grid-template-columns: 125px 20px 75px 1fr;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  font-size: 11.5px;
  border-bottom: 1px solid #f1f5f9;
}

.dark .cs-rule-row {
  border-bottom-color: rgba(51, 65, 85, 0.5);
}

.cs-rule-row:last-child {
  border-bottom: none;
}

.cs-syntax {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  color: #0284c7;
  background: rgba(2, 132, 199, 0.08);
  padding: 1px 5px;
  border-radius: 4px;
}

.dark .cs-syntax {
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.14);
}

.cs-arrow {
  color: #94a3b8;
  text-align: center;
}

.cs-result {
  font-family: "Times New Roman", Times, "Cambria Math", serif;
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
}

.dark .cs-result {
  color: #f8fafc;
}

.cs-desc {
  color: #475569;
  font-size: 11px;
}

.dark .cs-desc {
  color: #94a3b8;
}

.cs-table-section {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.dark .cs-table-section {
  border-color: #334155;
}

.cs-cmd-table {
  display: flex;
  flex-direction: column;
  max-height: 210px;
  overflow-y: auto;
}

.cs-cmd-row {
  display: grid;
  grid-template-columns: 44px 135px 1fr;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border: none;
  border-bottom: 1px solid #f1f5f9;
  background: transparent;
  text-align: left;
  cursor: pointer;
  transition: background 0.12s ease;
}

.dark .cs-cmd-row {
  border-bottom-color: rgba(51, 65, 85, 0.5);
}

.cs-cmd-row:hover {
  background: #f0f9ff;
}

.dark .cs-cmd-row:hover {
  background: rgba(2, 132, 199, 0.2);
}

.cs-row-sym {
  font-family: "Times New Roman", Times, "Cambria Math", serif;
  font-size: 17px;
  font-weight: 700;
  color: #0f172a;
  text-align: center;
}

.dark .cs-row-sym {
  color: #f8fafc;
}

.cs-row-codes {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.cs-row-main-cmd {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  color: #0284c7;
  background: rgba(2, 132, 199, 0.1);
  padding: 1px 5px;
  border-radius: 4px;
}

.dark .cs-row-main-cmd {
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.16);
}

.cs-row-alias {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10px;
  color: #64748b;
  background: #f1f5f9;
  padding: 1px 4px;
  border-radius: 4px;
}

.dark .cs-row-alias {
  background: #0f172a;
  color: #94a3b8;
}

.cs-row-label {
  font-size: 11.5px;
  color: #334155;
}

.dark .cs-row-label {
  color: #cbd5e1;
}

.math-empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 20px;
  font-size: 12px;
  color: #64748b;
}

.math-pop-footer {
  padding: 7px 14px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  font-size: 11px;
  color: #475569;
}

.dark .math-pop-footer {
  background: #1e293b;
  border-top-color: #334155;
  color: #94a3b8;
}

.math-pop-footer code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10.5px;
  color: #0284c7;
  background: rgba(2, 132, 199, 0.08);
  padding: 1px 4px;
  border-radius: 3px;
}

.dark .math-pop-footer code {
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.15);
}

/* Dock Math & Cheatsheet Buttons */
.dock-math-btn,
.dock-cs-btn {
  border: 1px solid rgba(2, 132, 199, 0.3);
  background: rgba(2, 132, 199, 0.08);
  color: #0369a1;
  border-radius: 9999px;
  padding: 4px 10px;
  font-size: 11.5px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.15s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.dark .dock-math-btn,
.dark .dock-cs-btn {
  background: rgba(56, 189, 248, 0.14);
  border-color: rgba(56, 189, 248, 0.35);
  color: #bae6fd;
}

.dock-math-btn:hover,
.dock-cs-btn:hover {
  background: rgba(2, 132, 199, 0.16);
  border-color: #0284c7;
}

.dock-math-btn.active,
.dock-cs-btn.active {
  background: #0284c7;
  border-color: #0284c7;
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(2, 132, 199, 0.35);
}

/* Floating Dock Panel (Bottom-Right) */
.sticky-dock-panel {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 10000;
  pointer-events: auto;
  max-width: calc(100vw - 32px);
}

/* Attached Tool Dock for Active Note */
.dock-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  padding: 5px 12px;
  border-radius: 9999px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.16), 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-x: auto;
  white-space: nowrap;
}

.dark .dock-toolbar {
  background: rgba(30, 41, 59, 0.92);
  border-color: rgba(71, 85, 105, 0.8);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

/* Mode Buttons */
.dock-mode-group {
  display: flex;
  background: rgba(0, 0, 0, 0.06);
  padding: 2px;
  border-radius: 9999px;
  gap: 2px;
}

.dark .dock-mode-group {
  background: rgba(255, 255, 255, 0.1);
}

.dock-mode-btn {
  border: none;
  background: transparent;
  color: #475569;
  border-radius: 9999px;
  padding: 5px 11px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.dark .dock-mode-btn {
  color: #cbd5e1;
}

.dock-mode-btn.active {
  background: #0284c7;
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(2, 132, 199, 0.35);
}

.dock-svg {
  display: inline-block;
  vertical-align: middle;
}

/* Subgroups */
.dock-subgroup {
  display: flex;
  align-items: center;
  gap: 7px;
}

.dock-field {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dock-label {
  font-size: 11px;
  font-weight: 600;
  color: #64748b;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.dark .dock-label {
  color: #94a3b8;
}

.dock-select {
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #0f172a;
  border-radius: 6px;
  padding: 3px 5px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}

.dark .dock-select {
  background: #1e293b;
  border-color: #475569;
  color: #f1f5f9;
}

.dock-divider {
  width: 1px;
  height: 20px;
  background: rgba(0, 0, 0, 0.1);
}

.dark .dock-divider {
  background: rgba(255, 255, 255, 0.15);
}

/* Palette Dots */
.dock-palette {
  display: flex;
  gap: 5px;
  align-items: center;
}

.theme-dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1.5px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 0;
  transition: transform 0.12s ease;
}

.theme-dot:hover {
  transform: scale(1.2);
}

.theme-dot.active {
  transform: scale(1.25);
  box-shadow: 0 0 0 2px #0284c7;
}

.brush-dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1.5px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 0;
  transition: transform 0.12s ease;
}

.brush-dot:hover {
  transform: scale(1.2);
}

.brush-dot.selected {
  transform: scale(1.3);
  box-shadow: 0 0 0 2px #0284c7;
}

/* Brush Sizes */
.dock-sizes {
  display: flex;
  gap: 3px;
}

.size-pill {
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: rgba(255, 255, 255, 0.8);
  color: #334155;
  border-radius: 5px;
  padding: 2px 7px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.dark .size-pill {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

.size-pill.selected {
  background: #0284c7;
  color: #ffffff;
  border-color: #0284c7;
}

/* Undo / Clear Actions */
.dock-actions {
  display: flex;
  gap: 4px;
}

.dock-action-btn {
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: rgba(255, 255, 255, 0.85);
  color: #334155;
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.action-svg {
  display: inline-block;
}

.dark .dock-action-btn {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

.dock-action-btn:hover {
  background: #ffffff;
}

.dock-action-btn.btn-danger:hover {
  background: #fee2e2;
  color: #dc2626;
  border-color: #fca5a5;
}

/* Action FABs */
.dock-fabs {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.fab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border-radius: 9999px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
}

.fab-svg {
  display: inline-block;
  vertical-align: middle;
}

.fab-add {
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: #ffffff;
}

.fab-add:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 24px rgba(2, 132, 199, 0.4);
  background: linear-gradient(135deg, #0369a1 0%, #075985 100%);
}

.fab-add:active {
  transform: translateY(0) scale(0.98);
}

.fab-toggle {
  position: relative;
  background: #ffffff;
  color: #1e293b;
  padding: 10px;
  border: 1px solid #e2e8f0;
}

.dark .fab-toggle {
  background: #1e293b;
  color: #f1f5f9;
  border-color: #475569;
}

.fab-toggle:hover {
  background: #f8fafc;
  transform: translateY(-2px);
}

.fab-toggle.is-hidden {
  background: #f1f5f9;
  color: #64748b;
}

.dark .fab-toggle.is-hidden {
  background: #334155;
  color: #94a3b8;
}

.fab-text {
  letter-spacing: 0.2px;
}

.fab-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #ef4444;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  min-width: 17px;
  height: 17px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.4);
}

@media (max-width: 640px) {
  .sticky-dock-panel {
    bottom: 14px;
    right: 14px;
    left: 14px;
    justify-content: flex-end;
  }
  .math-cheatsheet-popover,
  .text-style-popover,
  .draw-guide-popover {
    right: 14px;
    left: 14px;
    bottom: 68px;
    width: auto;
  }
  .cs-rule-row {
    grid-template-columns: 100px 16px 55px 1fr;
  }
  .fab-add {
    padding: 8px 12px;
    font-size: 13px;
  }
  .fab-text {
    display: none;
  }
  .dock-toolbar {
    padding: 4px 8px;
    gap: 6px;
  }
  .dock-mode-btn {
    padding: 4px 8px;
    font-size: 11px;
  }
}
</style>
