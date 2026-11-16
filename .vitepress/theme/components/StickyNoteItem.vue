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

const emit = defineEmits(['update', 'delete', 'bring-to-front', 'select'])

const isDragging = ref(false)
const dragStart = reactive({ mouseX: 0, mouseY: 0, noteX: 0, noteY: 0 })

const isResizing = ref(false)
const resizeStart = reactive({ mouseX: 0, mouseY: 0, width: 0, height: 0 })

const canvasRef = ref(null)
const workspaceRef = ref(null)
const textareaRef = ref(null)
const isDrawing = ref(false)
const strokeHistory = ref([])
let ctx = null
let resizeObserver = null

// Math command autocomplete state inside the note
const suggestions = ref([])
const selectedSuggestionIdx = ref(0)
const currentSlashRange = ref(null) // { start, end, query }

// Color themes for the paper
const colorThemes = {
  yellow: { bg: '#fef9c3', header: '#fef08a', border: '#eab308', text: '#713f12' },
  green: { bg: '#dcfce7', header: '#bbf7d0', border: '#22c55e', text: '#14532d' },
  blue: { bg: '#e0f2fe', header: '#bae6fd', border: '#0ea5e9', text: '#0c4a6e' },
  purple: { bg: '#f3e8ff', header: '#e9d5ff', border: '#a855f7', text: '#581c87' },
  pink: { bg: '#ffe4e6', header: '#fecdd3', border: '#f43f5e', text: '#881337' },
  white: { bg: '#ffffff', header: '#f8fafc', border: '#cbd5e1', text: '#0f172a' }
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

// === MATH COMMAND AUTOCOMPLETE & SHORTCUT EXPANSION ===
function updateAutocompleteState() {
  const el = textareaRef.value
  if (!el) {
    suggestions.value = []
    currentSlashRange.value = null
    return
  }
  const cursor = el.selectionStart || 0
  const before = (props.note.text || '').slice(0, cursor)
  const match = before.match(/(\\[a-zA-Z0-9/_^{]*)$/)
  if (match && match[1].length >= 2) {
    const query = match[1]
    const list = getAutocompleteSuggestions(query, 6)
    suggestions.value = list
    selectedSuggestionIdx.value = 0
    currentSlashRange.value = list.length > 0
      ? { start: cursor - query.length, end: cursor, query }
      : null
  } else {
    suggestions.value = []
    currentSlashRange.value = null
  }
}

function onTextareaInput() {
  const el = textareaRef.value
  if (el) {
    const cursor = el.selectionStart || 0
    const braceRes = tryImmediateBraceTransform(props.note.text || '', cursor)
    if (braceRes) {
      props.note.text = braceRes.text
      emit('update', props.note)
      suggestions.value = []
      currentSlashRange.value = null
      nextTick(() => {
        el.focus()
        el.setSelectionRange(braceRes.cursor, braceRes.cursor)
      })
      return
    }
  }
  updateAutocompleteState()
  emit('update', props.note)
}

function applySuggestion(item) {
  const el = textareaRef.value
  if (!el || !currentSlashRange.value) {
    insertTextAtCursor(item.symbol)
    return
  }
  const { start, end } = currentSlashRange.value
  const current = props.note.text || ''
  props.note.text = current.slice(0, start) + item.symbol + current.slice(end)
  const newCursor = start + item.symbol.length
  suggestions.value = []
  currentSlashRange.value = null
  emit('update', props.note)
  nextTick(() => {
    el.focus()
    el.setSelectionRange(newCursor, newCursor)
  })
}

function onTextareaKeyDown(e) {
  // Navigate autocomplete popup if visible
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
      currentSlashRange.value = null
      return
    }
  }

  // Expand exact command / ^sup / _sub when Space, Tab, or Enter is pressed
  if (e.key === ' ' || e.key === 'Tab' || e.key === 'Enter') {
    const el = textareaRef.value
    if (!el) return
    const cursor = el.selectionStart || 0
    const expanded = tryExpandCommandAtCursor(props.note.text || '', cursor)
    if (expanded) {
      e.preventDefault()
      const suffix = e.key === ' ' ? ' ' : (e.key === 'Enter' ? '\n' : '')
      props.note.text =
        expanded.text.slice(0, expanded.cursor) +
        suffix +
        expanded.text.slice(expanded.cursor)
      const nextPos = expanded.cursor + suffix.length
      suggestions.value = []
      currentSlashRange.value = null
      emit('update', props.note)
      nextTick(() => {
        el.focus()
        el.setSelectionRange(nextPos, nextPos)
      })
    }
  }
}

function insertTextAtCursor(str) {
  const el = textareaRef.value
  const current = props.note.text || ''
  if (!el) {
    props.note.text = current + str
    emit('update', props.note)
    return
  }
  const start = typeof el.selectionStart === 'number' ? el.selectionStart : current.length
  const end = typeof el.selectionEnd === 'number' ? el.selectionEnd : current.length
  props.note.text = current.slice(0, start) + str + current.slice(end)
  const newCursor = start + str.length
  suggestions.value = []
  currentSlashRange.value = null
  emit('update', props.note)
  nextTick(() => {
    el.focus()
    el.setSelectionRange(newCursor, newCursor)
  })
}

// Canvas & Drawing Logic
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

function onCanvasPointerDown(e) {
  if (props.note.mode !== 'draw' || props.note.isCollapsed) return
  isDrawing.value = true
  const rect = canvasRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  if (!ctx) ctx = canvasRef.value.getContext('2d')

  ctx.beginPath()
  ctx.moveTo(x, y)
  
  const bColor = props.note.brushColor || '#dc2626'
  const bSize = props.note.brushSize || 4
  const isHigh = !!props.note.isHighlighter

  if (isHigh) {
    ctx.strokeStyle = bColor + '55' // ~33% alpha for highlight
    ctx.lineWidth = bSize
  } else {
    ctx.strokeStyle = bColor
    ctx.lineWidth = bSize
  }

  try {
    const imgData = ctx.getImageData(0, 0, canvasRef.value.width, canvasRef.value.height)
    strokeHistory.value.push(imgData)
    if (strokeHistory.value.length > 20) strokeHistory.value.shift()
  } catch (err) {
    // ignore cross-origin taint if any
  }

  e.preventDefault()
  e.stopPropagation()
}

function onCanvasPointerMove(e) {
  if (!isDrawing.value || props.note.mode !== 'draw' || !ctx) return
  const rect = canvasRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  ctx.lineTo(x, y)
  ctx.stroke()
  e.preventDefault()
}

function onCanvasPointerUp() {
  if (isDrawing.value) {
    isDrawing.value = false
    saveCanvasData()
  }
}

function clearCanvas() {
  if (!ctx || !canvasRef.value) return
  const dpr = window.devicePixelRatio || 1
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
  focusTextarea: () => {
    nextTick(() => textareaRef.value?.focus())
  }
})

onMounted(() => {
  nextTick(() => {
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
  if (resizeObserver) resizeObserver.disconnect()
})

watch(() => props.note.isCollapsed, (newVal) => {
  if (!newVal) {
    nextTick(() => {
      setTimeout(() => initCanvas(), 80)
    })
  }
})

watch(() => props.note.mode, (newMode) => {
  if (newMode === 'text') {
    nextTick(() => {
      if (textareaRef.value) textareaRef.value.focus()
    })
  } else {
    suggestions.value = []
    currentSlashRange.value = null
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
      <!-- Workspace: Text Area & Drawing Canvas Layer -->
      <div
        ref="workspaceRef"
        class="note-workspace"
        :class="{ 'drawing-active': note.mode === 'draw' }"
      >
        <!-- Text layer (Strictly Times New Roman) -->
        <textarea
          ref="textareaRef"
          v-model="note.text"
          class="note-textarea"
          :style="{ fontSize: (note.fontSize || 18) + 'px' }"
          placeholder="Nhấp để gõ (Font Times New Roman). Gõ \alpha, \sum, \vec{F}, x^2, v_x + Space để chèn ký hiệu toán..."
          @input="onTextareaInput"
          @keydown="onTextareaKeyDown"
          @click="updateAutocompleteState"
          @blur="() => setTimeout(() => { suggestions = [] }, 180)"
          :disabled="note.mode === 'draw'"
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

        <!-- Floating Minimalist Hint when user switches to Drawing Mode -->
        <div class="draw-hint-overlay" v-if="note.mode === 'draw' && (!note.drawData && !strokeHistory.length)">
          <div class="hint-pill">
            <svg class="hint-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 22s5-1 7-3l11-11a2.828 2.828 0 0 0-4-4L5 15c-2 2-3 7-3 7z"/>
              <path d="m15 5 4 4"/>
            </svg>
            <span>Rê chuột lên mặt note để vẽ hình hoặc ghi chú</span>
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

/* Workspace: Text Area & Drawing Canvas */
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

/* Strictly Times New Roman Text Area */
.note-textarea {
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
  resize: none;
  outline: none;
  box-sizing: border-box;
  user-select: text;
  z-index: 2;
  overflow-y: auto;
}

.note-textarea::placeholder {
  color: rgba(15, 23, 42, 0.38);
  font-style: italic;
  font-family: "Times New Roman", Times, serif;
}

.note-textarea:disabled {
  opacity: 0.95;
  cursor: default;
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
  font-size: 11px;
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
