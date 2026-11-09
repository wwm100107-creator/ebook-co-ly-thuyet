<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import StickyNoteItem from './StickyNoteItem.vue'

const route = useRoute()
const notes = ref([])
const activeNoteId = ref(null)
const isVisible = ref(true)
const topZIndex = ref(1000)
const noteItemRefs = ref({})

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

// Load notes for current page and sanitize dimensions
function loadNotes() {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(storageKey.value)
    if (raw) {
      const parsed = JSON.parse(raw)
      notes.value = parsed.map(n => ({
        ...n,
        width: Math.max(280, Number(n.width) || 340),
        height: Math.max(240, Number(n.height) || 340),
        fontSize: Number(n.fontSize) || 18,
        colorTheme: n.colorTheme || 'yellow',
        mode: n.mode || 'text',
        brushColor: n.brushColor || '#dc2626',
        brushSize: Number(n.brushSize) || 4,
        isHighlighter: !!n.isHighlighter,
        isCollapsed: !!n.isCollapsed,
        text: n.text || '',
        drawData: n.drawData || null,
        zIndex: Number(n.zIndex) || 1000
      }))
      const maxZ = notes.value.reduce((m, n) => Math.max(m, n.zIndex || 1000), 1000)
      topZIndex.value = maxZ + 1
      if (notes.value.length > 0) {
        activeNoteId.value = notes.value[notes.value.length - 1].id
      }
    } else {
      notes.value = []
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
  
  // Center roughly in current viewport reading area
  const noteWidth = Math.max(300, Math.min(360, winWidth - 40))
  const noteHeight = 340
  const noteX = Math.max(20, Math.min(winWidth - noteWidth - 40, (winWidth - noteWidth) / 2))
  const noteY = scrollY + 100 // Pinned directly at current scroll position

  const newNote = {
    id: 'note_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
    x: noteX,
    y: noteY,
    width: noteWidth,
    height: noteHeight,
    text: '',
    fontSize: 18,
    colorTheme: 'yellow',
    mode: 'text',
    brushColor: '#dc2626',
    brushSize: 4,
    isHighlighter: false,
    isCollapsed: false,
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
    notes.value[idx] = { ...updatedNote }
    saveNotes()
  }
}

function deleteNote(noteId) {
  notes.value = notes.value.filter(n => n.id !== noteId)
  if (activeNoteId.value === noteId) {
    activeNoteId.value = notes.value.length ? notes.value[notes.value.length - 1].id : null
  }
  saveNotes()
}

function selectNote(noteId) {
  activeNoteId.value = noteId
}

function bringToFront(noteId) {
  const target = notes.value.find(n => n.id === noteId)
  if (target) {
    target.zIndex = ++topZIndex.value
    activeNoteId.value = noteId
    saveNotes()
  }
}

function toggleVisibility() {
  isVisible.value = !isVisible.value
}

// Active note controls in the dock
function setMode(newMode) {
  if (!activeNote.value) return
  activeNote.value.mode = newMode
  saveNotes()
  if (newMode === 'text' && noteItemRefs.value[activeNote.value.id]) {
    noteItemRefs.value[activeNote.value.id].focusTextarea()
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

function triggerClear() {
  if (!activeNote.value) return
  noteItemRefs.value[activeNote.value.id]?.clearCanvas()
}

// Reload notes whenever user navigates to a new page
watch(() => route.path, () => {
  loadNotes()
})

onMounted(() => {
  loadNotes()
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
        :is-active="note.id === activeNoteId"
        @update="updateNote"
        @delete="deleteNote"
        @select="selectNote"
        @bring-to-front="bringToFront"
      />
    </div>

    <!-- Global Floating Action & Control Dock (Bottom-Right) -->
    <div class="sticky-dock-panel">
      <!-- Attached Toolbar for Active Note (Clean, uncluttered, docked at bottom) -->
      <div
        v-if="notes.length > 0 && activeNote && isVisible"
        class="dock-toolbar"
      >
        <!-- Mode Tabs: Viết chữ vs Vẽ tay -->
        <div class="dock-mode-group">
          <button
            class="dock-mode-btn"
            :class="{ active: (activeNote.mode || 'text') === 'text' }"
            @click="setMode('text')"
            title="Đánh máy văn bản (Font Times New Roman)"
          >
            ✍️ Viết chữ
          </button>
          <button
            class="dock-mode-btn"
            :class="{ active: activeNote.mode === 'draw' }"
            @click="setMode('draw')"
            title="Vẽ tay bằng chuột hoặc bút cảm ứng"
          >
            🖌️ Vẽ tay
          </button>
        </div>

        <!-- Text Mode Controls: Font Size & Paper Color -->
        <div class="dock-subgroup" v-if="(activeNote.mode || 'text') === 'text'">
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

        <!-- Draw Mode Controls: Brush Colors, Sizes, Undo & Clear -->
        <div class="dock-subgroup" v-if="activeNote.mode === 'draw'">
          <!-- Brush Colors -->
          <div class="dock-palette" title="Chọn màu cọ">
            <button
              v-for="c in brushColors"
              :key="c.hex"
              class="brush-dot"
              :class="{ selected: (activeNote.brushColor || '#dc2626') === c.hex && !activeNote.isHighlighter }"
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

          <!-- Undo & Clear -->
          <div class="dock-actions">
            <button class="dock-action-btn" @click="triggerUndo" title="Hoàn tác nét vẽ (Undo)">↶ Lùi</button>
            <button class="dock-action-btn btn-danger" @click="triggerClear" title="Xóa toàn bộ nét vẽ">🧹 Xóa</button>
          </div>
        </div>
      </div>

      <!-- Action Buttons: Hide/Show Toggle & Dán Note -->
      <div class="dock-fabs">
        <!-- Toggle Hide/Show Button -->
        <button
          v-if="notes.length > 0"
          class="fab-btn fab-toggle"
          :class="{ 'is-hidden': !isVisible }"
          @click="toggleVisibility"
          :title="isVisible ? 'Ẩn tạm thời các tờ note' : 'Hiện lại các tờ note'"
        >
          <span class="fab-icon">{{ isVisible ? '👁️' : '🙈' }}</span>
          <span class="fab-badge" v-if="notes.length > 0">{{ notes.length }}</span>
        </button>

        <!-- Main "Dán Note" Button -->
        <button
          class="fab-btn fab-add"
          @click="addNote"
          title="Dán một tờ ghi chú mới vào vị trí này"
        >
          <span class="fab-icon">📝</span>
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
  z-index: 80;
}

.notes-canvas-layer :deep(.sticky-note-card) {
  pointer-events: auto;
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
  gap: 10px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  padding: 6px 12px;
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
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 4px;
}

.dark .dock-mode-btn {
  color: #cbd5e1;
}

.dock-mode-btn.active {
  background: #0284c7;
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(2, 132, 199, 0.35);
}

/* Subgroups */
.dock-subgroup {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dock-field {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dock-label {
  font-size: 11px;
  font-weight: 700;
  color: #64748b;
}

.dark .dock-label {
  color: #94a3b8;
}

.dock-select {
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: #0f172a;
  border-radius: 6px;
  padding: 3px 6px;
  font-size: 12px;
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
  width: 16px;
  height: 16px;
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
  width: 16px;
  height: 16px;
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
  border-radius: 6px;
  padding: 2px 7px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
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
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.85);
  color: #334155;
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease;
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
  padding: 10px 18px;
  border-radius: 9999px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
}

.fab-add {
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: #ffffff;
}

.fab-add:hover {
  transform: translateY(-2px) scale(1.03);
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

.fab-icon {
  font-size: 16px;
  line-height: 1;
}

.fab-text {
  letter-spacing: 0.3px;
}

.fab-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #ef4444;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.4);
}

@media (max-width: 640px) {
  .sticky-dock-panel {
    bottom: 14px;
    right: 14px;
    left: 14px;
    justify-content: flex-end;
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
