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

// Load notes for current page
function loadNotes() {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(storageKey.value)
    if (raw) {
      notes.value = JSON.parse(raw)
      // find highest zIndex
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
  const noteWidth = Math.min(320, winWidth - 40)
  const noteX = Math.max(20, Math.min(winWidth - noteWidth - 40, (winWidth - noteWidth) / 2))
  const noteY = scrollY + 120 // Pinned directly at current scroll position

  const newNote = {
    id: 'note_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
    x: noteX,
    y: noteY,
    width: noteWidth,
    height: 280,
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

function deleteNote(id) {
  notes.value = notes.value.filter(n => n.id !== id)
  saveNotes()
}

function bringToFront(id) {
  const target = notes.value.find(n => n.id === id)
  if (target) {
    target.zIndex = ++topZIndex.value
    saveNotes()
  }
}

function toggleVisibility() {
  isVisible.value = !isVisible.value
}

function clearAllPageNotes() {
  if (notes.value.length === 0) return
  if (window.confirm(`Bạn có chắc muốn xóa tất cả ${notes.value.length} ghi chú trên trang này không?`)) {
    notes.value = []
    saveNotes()
  }
}

onMounted(() => {
  loadNotes()
})

// Watch route path changes to load notes for newly visited chapter
watch(() => route.path, () => {
  loadNotes()
})
</script>

<template>
  <div class="sticky-notes-system">
    <!-- Render all sticky notes on the page -->
    <div v-show="isVisible" class="notes-container">
      <StickyNoteItem
        v-for="note in notes"
        :key="note.id"
        :note="note"
        @update="updateNote"
        @delete="deleteNote"
        @bring-to-front="bringToFront"
      />
    </div>

    <!-- Floating Master Action Bar (Always accessible at bottom-right) -->
    <div class="notes-fab-bar">
      <!-- Add Note button -->
      <button class="fab-btn btn-add-note" @click="addNote" title="Dán tờ note mới vào vị trí đang đọc">
        <span class="fab-icon">📝</span>
        <span class="fab-text">Dán Note</span>
        <span v-if="notes.length > 0" class="fab-badge">{{ notes.length }}</span>
      </button>

      <!-- Toggle Hide/Show notes -->
      <button
        v-if="notes.length > 0"
        class="fab-btn btn-toggle-notes"
        :class="{ 'is-hidden': !isVisible }"
        @click="toggleVisibility"
        :title="isVisible ? 'Tạm ẩn tất cả note trên trang' : 'Hiện lại các note đã dán'"
      >
        <span>{{ isVisible ? '👁️ Ẩn Note' : '👁️ Hiện Note (' + notes.length + ')' }}</span>
      </button>

      <!-- Clear all notes on page -->
      <button
        v-if="notes.length > 0 && isVisible"
        class="fab-btn btn-clear-notes"
        @click="clearAllPageNotes"
        title="Xóa toàn bộ note của trang này"
      >
        <span>🗑️</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.sticky-notes-system {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: 900;
}

.notes-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}

.notes-container > * {
  pointer-events: auto;
}

/* Floating Action Bar */
.notes-fab-bar {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  pointer-events: auto;
  z-index: 10000;
}

.fab-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #ffffff;
  color: #1e293b;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16), 0 1px 4px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
}

.fab-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.22);
}

.fab-btn:active {
  transform: translateY(0);
}

.btn-add-note {
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: #ffffff;
  border: none;
}

.btn-add-note:hover {
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
}

.fab-badge {
  background: #f59e0b;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 10px;
  min-width: 16px;
  text-align: center;
}

.btn-toggle-notes.is-hidden {
  background: #f1f5f9;
  color: #64748b;
  border-style: dashed;
}

.btn-clear-notes:hover {
  background: #fee2e2;
  color: #dc2626;
  border-color: #fca5a5;
}

/* Dark mode overrides for FAB */
:global(.dark) .fab-btn {
  background: #1e293b;
  color: #f1f5f9;
  border-color: #334155;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

:global(.dark) .btn-add-note {
  background: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%);
  color: #0f172a;
}

:global(.dark) .btn-toggle-notes.is-hidden {
  background: #0f172a;
  color: #94a3b8;
}

/* Media query for mobile */
@media (max-width: 640px) {
  .notes-fab-bar {
    bottom: 16px;
    right: 16px;
  }
  .fab-text {
    display: none;
  }
  .fab-btn {
    padding: 8px 10px;
  }
}
</style>
