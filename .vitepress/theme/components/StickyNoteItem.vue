<script setup>
import { ref, reactive, onMounted, watch, nextTick } from 'vue'

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

// Drawing state
const mode = ref('text') // 'text' or 'draw'
const canvasRef = ref(null)
const isDrawing = ref(false)
const brushColor = ref('#dc2626') // default red for clear marking
const brushSize = ref(3)
const isHighlighter = ref(false)
const strokeHistory = ref([])
let ctx = null

// Color themes
const colorThemes = {
  yellow: { bg: '#fef08a', header: '#fde047', border: '#eab308', text: '#713f12' },
  green: { bg: '#bbf7d0', header: '#86efac', border: '#22c55e', text: '#14532d' },
  blue: { bg: '#bae6fd', header: '#7dd3fc', border: '#0ea5e9', text: '#0c4a6e' },
  purple: { bg: '#e9d5ff', header: '#d8b4fe', border: '#a855f7', text: '#581c87' },
  pink: { bg: '#fecdd3', header: '#fda4af', border: '#f43f5e', text: '#881337' },
  white: { bg: '#ffffff', header: '#f1f5f9', border: '#cbd5e1', text: '#0f172a' }
}

const fontSizes = [14, 16, 18, 20, 24, 28]
const brushColors = ['#1e293b', '#dc2626', '#2563eb', '#16a34a', '#d97706', '#9333ea', '#eab308']
const brushSizes = [
  { label: 'Mảnh', val: 2 },
  { label: 'Vừa', val: 4 },
  { label: 'Đậm', val: 8 },
  { label: 'Dạ quang', val: 16, isHigh: true }
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
    props.note.width = Math.max(220, resizeStart.width + dx)
    props.note.height = Math.max(180, resizeStart.height + dy)
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
  resizeStart.width = props.note.width
  resizeStart.height = props.note.height

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

// Canvas & Drawing Logic
function initCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d')
  resizeCanvas(false)
  if (props.note.drawData) {
    const img = new Image()
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1))
    }
    img.src = props.note.drawData
  }
}

function resizeCanvas(preserve = true) {
  const canvas = canvasRef.value
  if (!canvas || !canvas.parentElement) return
  const rect = canvas.parentElement.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1

  let temp = null
  if (preserve && canvas.width > 0 && canvas.height > 0) {
    temp = document.createElement('canvas')
    temp.width = canvas.width
    temp.height = canvas.height
    temp.getContext('2d').drawImage(canvas, 0, 0)
  }

  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  canvas.style.width = rect.width + 'px'
  canvas.style.height = rect.height + 'px'

  ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  if (temp) {
    ctx.drawImage(temp, 0, 0, temp.width / dpr, temp.height / dpr)
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

  ctx.beginPath()
  ctx.moveTo(x, y)
  
  if (isHighlighter.value) {
    ctx.strokeStyle = brushColor.value + '66' // 40% alpha for highlight
    ctx.lineWidth = brushSize.value * 2
  } else {
    ctx.strokeStyle = brushColor.value
    ctx.lineWidth = brushSize.value
  }

  // Save state for undo
  const imgData = ctx.getImageData(0, 0, canvasRef.value.width, canvasRef.value.height)
  strokeHistory.value.push(imgData)
  if (strokeHistory.value.length > 20) strokeHistory.value.shift()

  e.preventDefault()
  e.stopPropagation()
}

function onCanvasPointerMove(e) {
  if (!isDrawing.value || mode.value !== 'draw') return
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
    initCanvas()
  })
})

watch(() => props.note.isCollapsed, (newVal) => {
  if (!newVal) {
    nextTick(() => {
      initCanvas()
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
      width: note.isCollapsed ? '280px' : note.width + 'px',
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
          {{ note.text ? note.text.slice(0, 18) + '...' : 'Ghi chú (đã cuộn)' }}
        </span>
      </div>

      <div class="header-actions">
        <!-- Collapse/Expand (Kéo rèm) -->
        <button
          class="btn-icon btn-collapse"
          :title="note.isCollapsed ? 'Kéo rèm xuống (Mở rộng note)' : 'Kéo rèm lên (Thu gọn để xem nội dung bên dưới)'"
          @click="toggleCollapse"
        >
          <span v-if="note.isCollapsed">🪟 ▾ Mở rèm</span>
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
        <!-- Mode switcher: Viết vs Vẽ -->
        <div class="toolbar-group mode-group">
          <button
            class="tool-btn"
            :class="{ active: mode === 'text' }"
            @click="mode = 'text'"
            title="Chế độ đánh máy (Times New Roman)"
          >
            ✏️ Viết chữ
          </button>
          <button
            class="tool-btn"
            :class="{ active: mode === 'draw' }"
            @click="mode = 'draw'"
            title="Chế độ vẽ tay bằng chuột/bút"
          >
            🖌️ Vẽ tay
          </button>
        </div>

        <!-- Text formatting controls (when in text mode) -->
        <div class="toolbar-group font-group" v-if="mode === 'text'">
          <span class="toolbar-label">Cỡ chữ:</span>
          <select
            v-model="note.fontSize"
            class="select-control"
            @change="emit('update', note)"
            title="Kích thước chữ"
          >
            <option v-for="s in fontSizes" :key="s" :value="s">{{ s }}px</option>
          </select>
        </div>

        <!-- Drawing controls (when in draw mode) -->
        <div class="toolbar-group draw-group" v-if="mode === 'draw'">
          <!-- Brush colors -->
          <div class="color-palette">
            <button
              v-for="c in brushColors"
              :key="c"
              class="color-dot"
              :class="{ selected: brushColor === c && !isHighlighter }"
              :style="{ backgroundColor: c }"
              @click="brushColor = c; isHighlighter = false;"
              :title="'Chọn màu ' + c"
            />
          </div>

          <!-- Brush sizes -->
          <div class="brush-size-picker">
            <button
              v-for="b in brushSizes"
              :key="b.label"
              class="brush-btn"
              :class="{ selected: brushSize === b.val && isHighlighter === !!b.isHigh }"
              @click="selectBrushSize(b)"
              :title="b.label"
            >
              {{ b.label }}
            </button>
          </div>

          <!-- Undo & Clear -->
          <div class="draw-actions">
            <button class="draw-btn" @click="undoCanvas" title="Hoàn tác nét vẽ cuối">↶</button>
            <button class="draw-btn" @click="clearCanvas" title="Xóa toàn bộ nét vẽ">🧹 Xóa vẽ</button>
          </div>
        </div>

        <!-- Note Paper Theme Selector -->
        <div class="toolbar-group theme-group">
          <span
            v-for="(th, name) in colorThemes"
            :key="name"
            class="theme-dot"
            :class="{ active: (note.colorTheme || 'yellow') === name }"
            :style="{ backgroundColor: th.header }"
            @click="note.colorTheme = name; emit('update', note);"
            :title="'Đổi màu nền ' + name"
          />
        </div>
      </div>

      <!-- Note Workspace: Text Area & Drawing Canvas Layer -->
      <div class="note-workspace" :style="{ height: (note.height - 85) + 'px' }">
        <!-- Text layer (Times New Roman) -->
        <textarea
          v-model="note.text"
          class="note-textarea"
          :style="{ fontSize: (note.fontSize || 18) + 'px' }"
          placeholder="Nhập ghi chú hoặc công thức tại đây... (Font Times New Roman)"
          @input="emit('update', note)"
          :disabled="mode === 'draw'"
        />

        <!-- Drawing Canvas Layer -->
        <canvas
          ref="canvasRef"
          class="note-canvas"
          :class="{ 'interactive-drawing': mode === 'draw' }"
          @pointerdown="onCanvasPointerDown"
          @pointermove="onCanvasPointerMove"
          @pointerup="onCanvasPointerUp"
          @pointerleave="onCanvasPointerUp"
        />

        <!-- Active Mode Hint Badge -->
        <div class="mode-badge" v-if="mode === 'draw'">
          🖌️ Chế độ vẽ tay (chuột/bút) đang bật
        </div>
      </div>

      <!-- Bottom Resize Corner Handle -->
      <div
        class="note-resize-handle"
        title="Kéo để đổi kích thước note"
        @pointerdown="onResizePointerDown"
      >
        <svg viewBox="0 0 10 10" width="10" height="10">
          <path d="M9 1 L1 9 M9 5 L5 9 M9 9 L9 9" stroke="#64748b" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sticky-note-card {
  position: absolute;
  background-color: var(--note-bg, #fef08a);
  border: 1px solid var(--note-border, #eab308);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18), 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  user-select: none;
  touch-action: none;
  transition: box-shadow 0.2s ease, width 0.3s ease;
  overflow: visible;
}

.sticky-note-card.is-dragging {
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.28), 0 4px 12px rgba(0, 0, 0, 0.16);
  opacity: 0.96;
}

.sticky-note-card.is-collapsed {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Header */
.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  background-color: var(--note-header, #fde047);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  cursor: grab;
}

.sticky-note-card.is-dragging .note-header {
  cursor: grabbing;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 13px;
  color: var(--note-text, #713f12);
}

.grip-icon {
  font-size: 14px;
  opacity: 0.6;
  letter-spacing: -2px;
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
  border: none;
  background: rgba(0, 0, 0, 0.06);
  color: var(--note-text, #713f12);
  border-radius: 4px;
  cursor: pointer;
  padding: 3px 6px;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 3px;
  transition: all 0.15s ease;
}

.btn-icon:hover {
  background: rgba(0, 0, 0, 0.14);
}

.btn-delete:hover {
  background: #ef4444;
  color: #ffffff;
}

/* Curtain Wrapper (Kéo rèm) */
.note-curtain-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  max-height: 1200px;
  opacity: 1;
  transform: translateY(0);
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.25s ease,
              transform 0.3s ease;
  position: relative;
}

.note-curtain-wrapper.curtain-rolled-up {
  max-height: 0 !important;
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
}

/* Toolbar */
.note-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  gap: 6px;
  background: rgba(255, 255, 255, 0.35);
  border-bottom: 1px dashed rgba(0, 0, 0, 0.12);
}

.toolbar-group {
  display: flex;
  align-items: center;
  gap: 4px;
}

.toolbar-label {
  font-size: 11px;
  font-weight: 600;
  color: #475569;
}

.tool-btn {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
  padding: 2px 7px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}

.tool-btn.active {
  background: #0284c7;
  color: #ffffff;
  border-color: #0284c7;
}

.select-control {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.85);
  border-radius: 4px;
  padding: 1px 4px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}

/* Color palette & Brush controls */
.color-palette {
  display: flex;
  gap: 3px;
}

.color-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  padding: 0;
  transition: transform 0.1s ease;
}

.color-dot.selected {
  transform: scale(1.3);
  box-shadow: 0 0 0 2px #0284c7;
}

.brush-size-picker {
  display: flex;
  gap: 2px;
}

.brush-btn {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  padding: 1px 5px;
  font-size: 10px;
  cursor: pointer;
}

.brush-btn.selected {
  background: #0284c7;
  color: #ffffff;
  font-weight: bold;
}

.draw-actions {
  display: flex;
  gap: 3px;
}

.draw-btn {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.7);
  border-radius: 3px;
  padding: 1px 5px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
}

.draw-btn:hover {
  background: #ffffff;
}

/* Theme picker dots */
.theme-group {
  display: flex;
  gap: 4px;
}

.theme-dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.theme-dot.active {
  box-shadow: 0 0 0 2px #0f172a;
}

/* Workspace (Text + Canvas) */
.note-workspace {
  position: relative;
  flex: 1;
  width: 100%;
  overflow: hidden;
}

.note-textarea {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 10px 12px;
  border: none;
  background: transparent;
  color: #0f172a;
  font-family: "Times New Roman", Times, "Cambria Math", serif !important;
  line-height: 1.45;
  resize: none;
  outline: none;
  box-sizing: border-box;
  user-select: text;
}

.note-textarea::placeholder {
  color: rgba(15, 23, 42, 0.4);
  font-style: italic;
  font-family: "Times New Roman", Times, serif;
}

.note-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}

.note-canvas.interactive-drawing {
  pointer-events: auto;
  cursor: crosshair;
}

.mode-badge {
  position: absolute;
  bottom: 6px;
  left: 8px;
  background: rgba(2, 132, 199, 0.9);
  color: #ffffff;
  padding: 2px 7px;
  font-size: 10px;
  border-radius: 10px;
  font-weight: 600;
  pointer-events: none;
  z-index: 10;
}

/* Bottom resize corner handle */
.note-resize-handle {
  position: absolute;
  right: 2px;
  bottom: 2px;
  width: 16px;
  height: 16px;
  cursor: se-resize;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: opacity 0.15s ease;
  z-index: 20;
}

.note-resize-handle:hover {
  opacity: 1;
}
</style>
