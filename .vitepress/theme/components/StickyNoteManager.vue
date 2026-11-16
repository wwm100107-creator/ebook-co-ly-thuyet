<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import StickyNoteItem from './StickyNoteItem.vue'
import {
  MATH_CATEGORIES,
  MATH_SYMBOLS,
  CHEATSHEET_RULES
} from './mathSymbolsData'

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
  if (notes.value.length === 0) {
    showMathPanel.value = false
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
  if (!isVisible.value) {
    showMathPanel.value = false
  }
}

// Active note controls in the dock
function setMode(newMode) {
  if (!activeNote.value) return
  activeNote.value.mode = newMode
  if (newMode === 'draw') {
    showMathPanel.value = false
  }
  saveNotes()
  if (newMode === 'text' && noteItemRefs.value[activeNote.value.id]) {
    noteItemRefs.value[activeNote.value.id].focusTextarea()
  }
}

function toggleMathPanel() {
  if (!activeNote.value) return
  if (activeNote.value.mode === 'draw') {
    activeNote.value.mode = 'text'
    saveNotes()
  }
  showMathPanel.value = !showMathPanel.value
}

function openCheatsheetTab() {
  if (!activeNote.value) return
  if (activeNote.value.mode === 'draw') {
    activeNote.value.mode = 'text'
    saveNotes()
  }
  showMathPanel.value = true
  activeMathCat.value = 'cheatsheet'
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
  showMathPanel.value = false
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
                <strong>Cách gõ lệnh trực tiếp trong tờ Note:</strong> Gõ <code>\tên_lệnh</code> rồi nhấn <strong>Space</strong>, <strong>Tab</strong> hoặc <strong>Enter</strong> (hoặc chọn từ menu gợi ý tự động hiện ra khi gõ dấu <code>\</code>).
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
                  @click="insertSymbolToActiveNote(item.symbol)"
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
              @click="insertSymbolToActiveNote(item.symbol)"
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
          <span>Mẹo: Trong ô viết chữ, gõ <code>\alpha</code>, <code>\omega</code>, <code>\sum</code>, <code>\vec{F}</code>, <code>\dot{x}</code>, <code>x^2</code>, <code>v_x</code> + <strong>Space</strong> để chuyển tự động.</span>
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
            title="Vẽ tay bằng chuột hoặc bút cảm ứng"
          >
            <svg class="dock-svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 22s5-1 7-3l11-11a2.828 2.828 0 0 0-4-4L5 15c-2 2-3 7-3 7z"/>
              <path d="m15 5 4 4"/>
            </svg>
            <span>Vẽ tay</span>
          </button>
        </div>

        <!-- Text Mode Controls: Math Symbols & Cheatsheet, Font Size & Paper Color -->
        <div class="dock-subgroup" v-if="(activeNote.mode || 'text') === 'text'">
          <!-- Math Symbols & Cheatsheet Button -->
          <button
            type="button"
            class="dock-math-btn"
            :class="{ active: showMathPanel }"
            @click="toggleMathPanel"
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
            @click="openCheatsheetTab"
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
            <span class="dock-label">Cỡ chữ:</span>
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

          <!-- Undo & Clear with Minimalist SVGs -->
          <div class="dock-actions">
            <!-- Undo Icon -->
            <button class="dock-action-btn" @click="triggerUndo" title="Hoàn tác nét vẽ (Undo)">
              <svg class="action-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 7v6h6"/>
                <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>
              </svg>
              <span>Lùi</span>
            </button>

            <!-- Eraser / Clear Icon -->
            <button class="dock-action-btn btn-danger" @click="triggerClear" title="Xóa toàn bộ nét vẽ">
              <svg class="action-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/>
                <path d="M22 21H7"/>
                <path d="m5 11 9 9"/>
              </svg>
              <span>Xóa</span>
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
  z-index: 80;
}

.notes-canvas-layer :deep(.sticky-note-card) {
  pointer-events: auto;
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
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 6px;
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
  gap: 8px;
}

.dock-field {
  display: flex;
  align-items: center;
  gap: 5px;
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
  padding: 3px 6px;
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
  .math-cheatsheet-popover {
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
