<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import StickyNoteItem from './StickyNoteItem.vue'

const route = useRoute()
const notes = ref([])
const isVisible = ref(true)
const topZIndex = ref(1000)

// Storage key per page path
const storageKey = computed(() => {
  const p = route.path ? route.path.replace(/\/$/, '') : 'home'
  return `co_ly_thuyet_notes_${p || 'root'}`
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
        height: Math.max(260, Number(n.height) || 340),
        fontSize: Number(n.fontSize) || 18,
        colorTheme: n.colorTheme || 'yellow',
        isCollapsed: !!n.isCollapsed,
        text: n.text || '',
        drawData: n.drawData || null,
        zIndex: Number(n.zIndex) || 1000
      }))
      const maxZ = notes.value.reduce((m, n) => Math.max(m, n.zIndex || 1000), 1000)
      topZIndex.value = maxZ + 1
    } else {
      notes.value = []
    }
  } catch (err) {
    console.error('Error loading notes from localStorage:', err)
    notes.value = []
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
    isCollapsed: false,
    drawData: null,
    zIndex: ++topZIndex.value,
    createdAt: Date.now()
  }

  notes.value.push(newNote)
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
  saveNotes()
}

function bringToFront(noteId) {
  const target = notes.value.find(n => n.id === noteId)
  if (target) {
    target.zIndex = ++topZIndex.value
    saveNotes()
  }
}

function toggleVisibility() {
  isVisible.value = !isVisible.value
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
    <!-- Pinned Notes Container (spans entire document height) -->
    <div class="notes-canvas-layer" v-show="isVisible">
      <StickyNoteItem
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @update="updateNote"
        @delete="deleteNote"
        @bring-to-front="bringToFront"
      />
    </div>

    <!-- Global Floating Action Buttons (Bottom-Right) -->
    <div class="sticky-fab-panel">
      <!-- Toggle Hide/Show Button (if notes exist) -->
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
        title="Dán một tờ ghi chú mới vào vị trí này (gõ chữ Times New Roman hoặc vẽ tay bằng chuột)"
      >
        <span class="fab-icon">📝</span>
        <span class="fab-text">Dán Note</span>
      </button>
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

/* Floating Action Panel */
.sticky-fab-panel {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 10000;
  pointer-events: auto;
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

.fab-toggle:hover {
  background: #f8fafc;
  transform: translateY(-2px);
}

.fab-toggle.is-hidden {
  background: #f1f5f9;
  color: #64748b;
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
  .sticky-fab-panel {
    bottom: 16px;
    right: 16px;
  }
  .fab-add {
    padding: 9px 14px;
    font-size: 13px;
  }
  .fab-text {
    display: none;
  }
}
</style>
