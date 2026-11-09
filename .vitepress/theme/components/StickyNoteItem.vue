<script setup>
import { ref, reactive, onMounted, onUnmounted, watch, nextTick } from 'vue'

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update', 'delete', 'bring-to-front'])

const isDragging = ref(false)
const dragStart = reactive({ mouseX: 0, mouseY: 0, noteX: 0, noteY: 0 })

const isResizing = ref(false)
const resizeStart = reactive({ mouseX: 0, mouseY: 0, width: 0, height: 0 })

// Mode: 'text' (đánh máy) vs 'draw' (vẽ tay)
const mode = ref('text')
const canvasRef = ref(null)
const workspaceRef = ref(null)
const textareaRef = ref(null)
const isDrawing = ref(false)
const brushColor = ref('#dc2626') // default red for easy marking
const brushSize = ref(3)
const isHighlighter = ref(false)
const strokeHistory = ref([])
let ctx = null
let resizeObserver = null

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
  { name: 'Xanh dương', hex: '#2563eb' },
  { name: 'Xanh lá', hex: '#16a34a' },
  { name: 'Vàng cam', hex: '#d97706' }
]

const brushSizes = [
  { label: 'Mảnh', val: 2 },
  { label: 'Vừa', val: 4 },
  { label: 'Đậm', val: 7 },
  { label: 'Dạ quang', val: 18, isHigh: true }
]

// Dragging logic
function onHeaderPointerDown(e) {
  if (e.target.closest('button') || e.target.closest('select') || e.target.closest('input')) return
  isDragging.value = true
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
    props.note.height = Math.max(220, resizeStart.height + dy)
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

// Set mode
function switchMode(newMode) {
  mode.value = newMode
  if (newMode === 'text') {
    nextTick(() => {
      if (textareaRef.value) textareaRef.value.focus()
    })
  }
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
  if (mode.value !== 'draw' || props.note.isCollapsed) return
  isDrawing.value = true
  const rect = canvasRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  if (!ctx) ctx = canvasRef.value.getContext('2d')

  ctx.beginPath()
  ctx.moveTo(x, y)
  
  if (isHighlighter.value) {
    ctx.strokeStyle = brushColor.value + '55' // ~33% alpha for highlight
    ctx.lineWidth = brushSize.value
  } else {
    ctx.strokeStyle = brushColor.value
    ctx.lineWidth = brushSize.value
  }

  // Save current canvas state for undo
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
  if (!isDrawing.value || mode.value !== 'draw' || !ctx) return
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

function selectBrushSize(b) {
  brushSize.value = b.val
  isHighlighter.value = !!b.isHigh
}

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
</script>

<template>
  <div
    class="sticky-note-card"
    :class="{ 'is-collapsed': note.isCollapsed, 'is-dragging': isDragging }"
    :style="{
      left: note.x + 'px',
      top: note.y + 'px',
      width: note.isCollapsed ? '280px' : (note.width || 340) + 'px',
      height: note.isCollapsed ? 'auto' : (note.height || 340) + 'px',
      zIndex: note.zIndex || 999,
      '--note-bg': colorThemes[note.colorTheme || 'yellow'].bg,
      '--note-header': colorThemes[note.colorTheme || 'yellow'].header,
      '--note-border': colorThemes[note.colorTheme || 'yellow'].border,
      '--note-text': colorThemes[note.colorTheme || 'yellow'].text,
    }"
    @pointerdown="emit('bring-to-front', note.id)"
  >
    <!-- Note Top Header (Drag handle & curtain bar) -->
    <div class="note-header" @pointerdown="onHeaderPointerDown">
      <div class="header-left">
        <span class="grip-icon" title="Giữ chuột để di chuyển">⋮⋮</span>
        <span class="pin-tag">📌</span>
        <span class="note-title-preview" v-if="note.isCollapsed">
          {{ note.text ? note.text.slice(0, 18) + '...' : 'Ghi chú (đã cuộn rèm)' }}
        </span>
        <span class="note-title" v-else>Ghi chú</span>
      </div>

      <div class="header-actions">
        <!-- Collapse/Expand (Kéo rèm) -->
        <button
          class="btn-icon btn-collapse"
          :title="note.isCollapsed ? 'Kéo rèm xuống (Mở lại để viết/vẽ)' : 'Kéo rèm lên (Thu gọn lại thành 1 thanh để nhìn thấy bài bên dưới)'"
          @click="toggleCollapse"
        >
          <span v-if="note.isCollapsed">▾ Mở rèm</span>
          <span v-else>▲ Kéo rèm</span>
        </button>

        <!-- Delete button -->
        <button
          class="btn-icon btn-delete"
          title="Xóa tờ note này"
          @click="emit('delete', note.id)"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Collapsible Curtain Container -->
    <div class="note-curtain-wrapper" :class="{ 'curtain-rolled-up': note.isCollapsed }">
      <!-- Toolbar Controls -->
      <div class="note-toolbar">
        <div class="toolbar-row primary-row">
          <!-- Mode switcher: Viết chữ vs Vẽ tay -->
          <div class="mode-tabs">
            <button
              class="tab-btn"
              :class="{ active: mode === 'text' }"
              @click="switchMode('text')"
              title="Chế độ đánh máy bằng bàn phím (Font Times New Roman)"
            >
              ✍️ Viết chữ
            </button>
            <button
              class="tab-btn"
              :class="{ active: mode === 'draw' }"
              @click="switchMode('draw')"
              title="Chế độ vẽ tay bằng chuột hoặc bút cảm ứng"
            >
              🖌️ Vẽ tay
            </button>
          </div>

          <!-- Text Mode Settings (Cỡ chữ & Màu giấy) -->
          <div class="text-settings" v-if="mode === 'text'">
            <div class="setting-item">
              <span class="lbl-sm">Cỡ chữ:</span>
              <select
                v-model="note.fontSize"
                class="font-select"
                @change="emit('update', note)"
              >
                <option v-for="s in fontSizes" :key="s" :value="s">{{ s }}px</option>
              </select>
            </div>

            <!-- Paper Theme Selector -->
            <div class="theme-palette" title="Đổi màu giấy note">
              <span
                v-for="(th, name) in colorThemes"
                :key="name"
                class="theme-dot"
                :class="{ active: (note.colorTheme || 'yellow') === name }"
                :style="{ backgroundColor: th.header }"
                @click="note.colorTheme = name; emit('update', note);"
              />
            </div>
          </div>

          <!-- Draw Mode Settings (Màu cọ, cỡ cọ, hoàn tác, xóa) -->
          <div class="draw-settings" v-if="mode === 'draw'">
            <button class="action-btn" @click="undoCanvas" title="Hoàn tác nét vẽ (Undo)">↶ Lùi</button>
            <button class="action-btn btn-clear" @click="clearCanvas" title="Xóa toàn bộ nét vẽ">🧹 Xóa nét</button>
          </div>
        </div>

        <!-- Draw Mode Secondary Row (Brush colors & sizes) -->
        <div class="toolbar-row draw-palette-row" v-if="mode === 'draw'">
          <!-- Brush Colors -->
          <div class="brush-colors">
            <button
              v-for="c in brushColors"
              :key="c.hex"
              class="brush-dot"
              :class="{ selected: brushColor === c.hex && !isHighlighter }"
              :style="{ backgroundColor: c.hex }"
              @click="brushColor = c.hex; isHighlighter = false;"
              :title="'Cọ màu ' + c.name"
            />
          </div>

          <!-- Brush Sizes -->
          <div class="brush-sizes">
            <button
              v-for="b in brushSizes"
              :key="b.label"
              class="size-btn"
              :class="{ selected: brushSize === b.val && isHighlighter === !!b.isHigh }"
              @click="selectBrushSize(b)"
              :title="b.label"
            >
              {{ b.label }}
            </button>
          </div>
        </div>
      </div>

      <!-- Note Workspace: Text Area & Drawing Canvas Layer -->
      <div
        ref="workspaceRef"
        class="note-workspace"
        :class="{ 'drawing-active': mode === 'draw' }"
      >
        <!-- Text layer (Strictly Times New Roman) -->
        <textarea
          ref="textareaRef"
          v-model="note.text"
          class="note-textarea"
          :style="{ fontSize: (note.fontSize || 18) + 'px' }"
          placeholder="✍️ Nhấp vào đây để gõ nội dung (Font Times New Roman)..."
          @input="emit('update', note)"
          :disabled="mode === 'draw'"
        />

        <!-- Drawing Canvas Layer (Positioned directly over text) -->
        <canvas
          ref="canvasRef"
          class="note-canvas"
          :class="{ 'is-interactive': mode === 'draw' }"
          @pointerdown="onCanvasPointerDown"
          @pointermove="onCanvasPointerMove"
          @pointerup="onCanvasPointerUp"
          @pointerleave="onCanvasPointerUp"
        />

        <!-- Floating Hint for Drawing Mode -->
        <div class="draw-hint-overlay" v-if="mode === 'draw' && (!note.drawData && !strokeHistory.length)">
          <div class="hint-pill">
            🖌️ Rê chuột trực tiếp lên tờ note để vẽ hình hoặc ghi chú
          </div>
        </div>
      </div>

      <!-- Bottom Resize Corner Handle -->
      <div
        class="note-resize-handle"
        title="Kéo góc này để mở rộng hoặc thu nhỏ kích thước tờ note"
        @pointerdown="onResizePointerDown"
      >
        <svg viewBox="0 0 10 10" width="12" height="12">
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
  border-radius: 9px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22), 0 3px 8px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  user-select: none;
  touch-action: none;
  transition: box-shadow 0.2s ease;
  overflow: hidden;
  box-sizing: border-box;
  min-width: 260px;
}

.sticky-note-card:not(.is-collapsed) {
  min-height: 240px;
}

.sticky-note-card.is-dragging {
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.32), 0 6px 14px rgba(0, 0, 0, 0.2);
  opacity: 0.97;
}

.sticky-note-card.is-collapsed {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
}

/* Header */
.note-header {
  height: 38px;
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
  gap: 6px;
  font-weight: 700;
  font-size: 13px;
  color: var(--note-text, #713f12);
}

.grip-icon {
  font-size: 14px;
  opacity: 0.6;
  letter-spacing: -2px;
}

.note-title {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.note-title-preview {
  font-size: 12px;
  font-family: "Times New Roman", Times, serif;
  font-style: italic;
  max-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-icon {
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.5);
  color: var(--note-text, #713f12);
  border-radius: 4px;
  cursor: pointer;
  padding: 3px 8px;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 3px;
  transition: all 0.15s ease;
}

.btn-icon:hover {
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  height: calc(100% - 38px);
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

/* Toolbar */
.note-toolbar {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.45);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
}

.toolbar-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
}

.mode-tabs {
  display: flex;
  background: rgba(0, 0, 0, 0.06);
  padding: 2px;
  border-radius: 6px;
  gap: 2px;
}

.tab-btn {
  border: none;
  background: transparent;
  color: #475569;
  border-radius: 4px;
  padding: 3px 9px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.tab-btn.active {
  background: #0284c7;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(2, 132, 199, 0.3);
}

.text-settings {
  display: flex;
  align-items: center;
  gap: 8px;
}

.setting-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.lbl-sm {
  font-size: 11px;
  font-weight: 600;
  color: #475569;
}

.font-select {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #ffffff;
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}

.theme-palette {
  display: flex;
  gap: 4px;
  align-items: center;
}

.theme-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: transform 0.1s ease;
}

.theme-dot:hover {
  transform: scale(1.15);
}

.theme-dot.active {
  box-shadow: 0 0 0 2px #0284c7;
  transform: scale(1.2);
}

.draw-settings {
  display: flex;
  align-items: center;
  gap: 4px;
}

.action-btn {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}

.action-btn:hover {
  background: #ffffff;
}

.btn-clear:hover {
  background: #fee2e2;
  color: #dc2626;
  border-color: #fca5a5;
}

/* Secondary Draw Toolbar */
.draw-palette-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3px;
  border-top: 1px dashed rgba(0, 0, 0, 0.08);
}

.brush-colors {
  display: flex;
  gap: 4px;
  align-items: center;
}

.brush-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 0;
  transition: transform 0.1s ease;
}

.brush-dot.selected {
  transform: scale(1.25);
  box-shadow: 0 0 0 2px #0284c7;
}

.brush-sizes {
  display: flex;
  gap: 3px;
}

.size-btn {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 3px;
  padding: 1px 6px;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
}

.size-btn.selected {
  background: #0284c7;
  color: #ffffff;
  border-color: #0284c7;
}

/* Workspace: Text Area & Drawing Canvas */
.note-workspace {
  position: relative;
  flex: 1 1 auto;
  width: 100%;
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
  top: 12px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  pointer-events: none;
  z-index: 8;
}

.hint-pill {
  background: rgba(15, 23, 42, 0.72);
  color: #ffffff;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 9999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  pointer-events: none;
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
}

.note-resize-handle:hover {
  opacity: 1;
}
</style>
