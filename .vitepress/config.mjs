import { createRequire } from 'node:module'
import { defineConfig } from 'vitepress'

const localRequire = createRequire(import.meta.url)
const mj3Require = createRequire(localRequire.resolve('markdown-it-mathjax3/package.json'))
const { mathjax } = mj3Require('mathjax-full/js/mathjax.js')
const { TeX } = mj3Require('mathjax-full/js/input/tex.js')
const { SVG } = mj3Require('mathjax-full/js/output/svg.js')
const { liteAdaptor } = mj3Require('mathjax-full/js/adaptors/liteAdaptor.js')
const { RegisterHTMLHandler } = mj3Require('mathjax-full/js/handlers/html.js')
const { AllPackages } = mj3Require('mathjax-full/js/input/tex/AllPackages.js')
const juice = mj3Require('juice/client')

const VN_MATH_RE = /[\u00C0-\u1EF9đĐ]/
const NARROW_CHARS = new Set([...'iIljltfr.,:;\'"!|()[]/\\`1ìíỉĩịÌÍỈĨỊ'])
const MEDIUM_CHARS = new Set([...'abcdefghkmnopqsuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ023456789+-=*/%'])
const WIDE_CHARS = new Set([...'mwMW@#%&QOGĐƯƠĂÂÊÔ'])

/**
 * Estimate proportional width (in em) for Vietnamese/Latin strings in MathJax <text>.
 * Prevents MathJax liteAdaptor's fixed 0.6em unknownCharWidth from splitting accented words.
 */
function estimateTextWidthEm(str) {
  let width = 0
  for (const ch of str) {
    if (ch === ' ' || ch === '\u00A0') width += 0.27
    else if (NARROW_CHARS.has(ch)) width += 0.30
    else if (WIDE_CHARS.has(ch)) width += 0.72
    else if (ch >= 'A' && ch <= 'Z') width += 0.65
    else if (MEDIUM_CHARS.has(ch)) width += 0.49
    else if (/[\u00C0-\u1EF9]/.test(ch)) {
      const base = ch.normalize('NFD')[0]
      if ('iI'.includes(base)) width += 0.30
      else if ('mMwW'.includes(base)) width += 0.72
      else if (base >= 'A' && base <= 'Z') width += 0.65
      else width += 0.50
    } else {
      width += 0.55
    }
  }
  return width
}

function createVietnameseMathRenderer() {
  const adaptor = liteAdaptor()
  const origNodeSize = adaptor.nodeSize.bind(adaptor)
  adaptor.nodeSize = (node, em, local) => {
    const txt = adaptor.textContent(node) || ''
    if (txt.length > 0) {
      return [estimateTextWidthEm(txt), 0.8]
    }
    return origNodeSize(node, em, local)
  }
  // Unregister immediately so markdown-it-mathjax3's ASCII pipeline never resolves our custom adaptor.
  const handler = RegisterHTMLHandler(adaptor)
  mathjax.handlers.unregister(handler)
  const inputJax = new TeX({ packages: AllPackages })
  // Do not use quotes inside mtextFont; juice corrupts inline style="..." attributes containing quotes.
  const outputJax = new SVG({ fontCache: 'none', mtextFont: 'sans-serif' })
  const doc = handler.create('', { InputJax: inputJax, OutputJax: outputJax })

  return (texStr, display) => {
    const node = doc.convert(texStr, { display })
    const html = adaptor.outerHTML(node)
    const sheet = adaptor.outerHTML(outputJax.styleSheet(doc))
    return juice(html + sheet)
  }
}

const renderVietnameseMath = createVietnameseMathRenderer()

function stripMathChrome(html, isBlock) {
  let out = html.replace(/<mjx-assistive-mml[\s\S]*?<\/mjx-assistive-mml>/gi, '')
  if (isBlock) {
    out = out.replace(/\s*tabindex="0"/g, '')
  }
  return out
}

function wrapMathRule(origRule, isBlock) {
  if (!origRule) return origRule
  return (tokens, idx, options, env, self) => {
    const content = tokens[idx]?.content || ''
    if (VN_MATH_RE.test(content)) {
      try {
        return stripMathChrome(renderVietnameseMath(content, isBlock), isBlock)
      } catch {
        // Fall back to default markdown-it-mathjax3 renderer if custom rendering fails.
      }
    }
    return stripMathChrome(origRule(tokens, idx, options, env, self), isBlock)
  }
}

const ICON_BOOK = '<svg class="nav-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px;"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 2v20"/></svg>'
const ICON_LIBRARY = '<svg class="nav-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px;"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>'
const ICON_EXERCISE = '<svg class="nav-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px;"><path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/><path d="M15 3v6h6"/><path d="m9 14 2 2 4-4"/></svg>'
const ICON_TARGET = '<svg class="nav-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px;"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>'
const ICON_EXTERNAL = '<svg class="nav-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-1px;margin-left:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'

export default defineConfig({
  title: 'Cơ Học Lý Thuyết',
  description: 'Ebook Giáo trình Cơ học trực tuyến - GS. TSKH. Đỗ Sanh (NXB Bách Khoa Hà Nội)',
  base: process.env.GITHUB_PAGES ? '/ebook-co-ly-thuyet/' : '/',
  lang: 'vi-VN',
  ignoreDeadLinks: true,
  markdown: {
    math: true,
    config(md) {
      md.renderer.rules.math_inline = wrapMathRule(md.renderer.rules.math_inline, false)
      md.renderer.rules.math_block = wrapMathRule(md.renderer.rules.math_block, true)
    }
  },
  themeConfig: {
    siteTitle: 'Cơ Học Lý Thuyết',
    nav: [
      { text: 'Trang Chủ', link: '/' },
      {
        text: 'Giáo Trình Lý Thuyết',
        items: [
          { text: 'Phần 1: Tĩnh Học (Tập 1)', link: '/tinh-hoc/' },
          { text: 'Phần 2: Động Học (Tập 1)', link: '/dong-hoc/' },
          { text: 'Tập 2: Động Lực Học', link: '/dong-luc-hoc/' },
        ]
      },
      {
        text: 'Sách Bài Tập',
        items: [
          { text: 'Tổng Quan Sách Bài Tập', link: '/bai-tap/' },
          { text: 'Bài Tập Tĩnh Học (5 Chương)', link: '/bai-tap/tinh-hoc/' },
          { text: 'Bài Tập Động Học (6 Chương)', link: '/bai-tap/dong-hoc/' },
          { text: 'Bài Tập Động Lực Học (8 Chương)', link: '/bai-tap/dong-luc-hoc/' },
        ]
      },
      {
        text: 'Ôn Thi 20 Ngày (AS1003)',
        items: [
          { text: 'Tổng Quan Lộ Trình 20 Ngày (AS1003)', link: '/on-thi/' },
          { text: 'Chặng 1 (Ngày 1–5): Nền Tảng Vectơ & Ch.9–10', link: '/on-thi/chang-1-tinh-hoc' },
          { text: 'Chặng 2 (Ngày 6–10): Ch.11, 12.1 & 13 (D\'Alembert)', link: '/on-thi/chang-2-dong-hoc' },
          { text: 'Chặng 3 (Ngày 11–15): Ch.12.2–12.3 (Động Năng)', link: '/on-thi/chang-3-dong-luc-hoc' },
          { text: 'Chặng 4 (Ngày 16–20): Ch.14–15 (Lagrange II & Thi Thử)', link: '/on-thi/chang-4-ve-dich' },
          { text: 'Ngân Hàng Đề Thi Thật HCMUT AS1003', link: '/on-thi/de-thi-that-hcmut' }
        ]
      },
      { text: 'Về Giáo Trình', link: '/gioi-thieu' }
    ],
    sidebar: {
      '/tinh-hoc/': [
        {
          text: 'Phần Một: TĨNH HỌC',
          items: [
            { text: 'Giới Thiệu & Mục Lục', link: '/tinh-hoc/' },
            { text: 'Mở Đầu Tĩnh Học', link: '/tinh-hoc/mo-dau' },
            { text: 'Chương 1: Khái niệm & Hệ tiên đề', link: '/tinh-hoc/chuong-1' },
            { text: 'Chương 2: Hệ lực không gian', link: '/tinh-hoc/chuong-2' },
            { text: 'Chương 3: Ma sát', link: '/tinh-hoc/chuong-3' },
            { text: 'Chương 4: Trọng tâm', link: '/tinh-hoc/chuong-4' },
            { text: 'Câu hỏi ôn tập', link: '/tinh-hoc/cau-hoi-on-tap' },
            { text: ICON_EXERCISE + 'Sách Bài Tập Tĩnh Học' + ICON_EXTERNAL, link: '/bai-tap/tinh-hoc/' }
          ]
        }
      ],
      '/dong-hoc/': [
        {
          text: 'Phần Hai: ĐỘNG HỌC',
          items: [
            { text: 'Giới Thiệu & Mục Lục', link: '/dong-hoc/' },
            { text: 'Mở Đầu Động Học', link: '/dong-hoc/mo-dau' },
            { text: 'Chương 1: Động học điểm', link: '/dong-hoc/chuong-1' },
            { text: 'Chương 2: Chuyển động cơ bản vật rắn', link: '/dong-hoc/chuong-2' },
            { text: 'Chương 3: Hợp chuyển động điểm', link: '/dong-hoc/chuong-3' },
            { text: 'Chương 4: Chuyển động song phẳng', link: '/dong-hoc/chuong-4' },
            { text: 'Câu hỏi ôn tập', link: '/dong-hoc/cau-hoi-on-tap' },
            { text: 'Tài liệu tham khảo', link: '/dong-hoc/tai-lieu-tham-khao' },
            { text: ICON_EXERCISE + 'Sách Bài Tập Động Học' + ICON_EXTERNAL, link: '/bai-tap/dong-hoc/' }
          ]
        }
      ],
      '/dong-luc-hoc/': [
        {
          text: 'Tập Hai: ĐỘNG LỰC HỌC',
          items: [
            { text: 'Giới Thiệu & Mục Lục', link: '/dong-luc-hoc/' },
            { text: 'Lời Nói Đầu', link: '/dong-luc-hoc/loi-noi-dau' },
            { text: 'Chương 1: Khái niệm & Hệ tiên đề', link: '/dong-luc-hoc/chuong-1' },
            { text: 'Chương 2: Phương trình vi phân chuyển động', link: '/dong-luc-hoc/chuong-2' },
            { text: 'Chương 3: Các định lý tổng quát', link: '/dong-luc-hoc/chuong-3' },
            { text: 'Chương 4: Nguyên lý di chuyển khả dĩ', link: '/dong-luc-hoc/chuong-4' },
            { text: 'Chương 5: Nguyên lý Đalămbe', link: '/dong-luc-hoc/chuong-5' },
            { text: 'Chương 6: PTVP cơ hệ không tự do', link: '/dong-luc-hoc/chuong-6' },
            { text: 'Chương 7: Lý thuyết va chạm', link: '/dong-luc-hoc/chuong-7' },
            { text: 'Câu hỏi ôn tập', link: '/dong-luc-hoc/cau-hoi-on-tap' },
            { text: 'Tài liệu tham khảo', link: '/dong-luc-hoc/tai-lieu-tham-khao' },
            { text: ICON_EXERCISE + 'Sách Bài Tập Động Lực Học' + ICON_EXTERNAL, link: '/bai-tap/dong-luc-hoc/' }
          ]
        }
      ],
      '/bai-tap/tinh-hoc/': [
        {
          text: 'SÁCH BÀI TẬP: TĨNH HỌC',
          items: [
            { text: 'Giới Thiệu & Mục Lục', link: '/bai-tap/tinh-hoc/' },
            { text: 'Chương 1: Bài toán phẳng', link: '/bai-tap/tinh-hoc/chuong-1' },
            { text: 'Chương 2: Bài toán phẳng hệ vật', link: '/bai-tap/tinh-hoc/chuong-2' },
            { text: 'Chương 3: Bài toán không gian', link: '/bai-tap/tinh-hoc/chuong-3' },
            { text: 'Chương 4: Bài toán ma sát', link: '/bai-tap/tinh-hoc/chuong-4' },
            { text: 'Chương 5: Bài toán tìm trọng tâm', link: '/bai-tap/tinh-hoc/chuong-5' }
          ]
        },
        {
          text: 'Chuyển Phân Hệ',
          items: [
            { text: ICON_BOOK + 'Giáo Trình Lý Thuyết Tĩnh Học', link: '/tinh-hoc/' },
            { text: ICON_LIBRARY + 'Cổng Sách Bài Tập', link: '/bai-tap/' }
          ]
        }
      ],
      '/bai-tap/dong-hoc/': [
        {
          text: 'SÁCH BÀI TẬP: ĐỘNG HỌC',
          items: [
            { text: 'Giới Thiệu & Mục Lục', link: '/bai-tap/dong-hoc/' },
            { text: 'Chương 1: Chuyển động của điểm', link: '/bai-tap/dong-hoc/chuong-1' },
            { text: 'Chương 2: Quay quanh trục cố định', link: '/bai-tap/dong-hoc/chuong-2' },
            { text: 'Chương 3: Chuyển động song phẳng', link: '/bai-tap/dong-hoc/chuong-3' },
            { text: 'Chương 4: Chuyển động cầu', link: '/bai-tap/dong-hoc/chuong-4' },
            { text: 'Chương 5: Hợp chuyển động điểm', link: '/bai-tap/dong-hoc/chuong-5' },
            { text: 'Chương 6: Hợp chuyển động vật', link: '/bai-tap/dong-hoc/chuong-6' }
          ]
        },
        {
          text: 'Chuyển Phân Hệ',
          items: [
            { text: ICON_BOOK + 'Giáo Trình Lý Thuyết Động Học', link: '/dong-hoc/' },
            { text: ICON_LIBRARY + 'Cổng Sách Bài Tập', link: '/bai-tap/' }
          ]
        }
      ],
      '/bai-tap/dong-luc-hoc/': [
        {
          text: 'SÁCH BÀI TẬP: ĐỘNG LỰC HỌC',
          items: [
            { text: 'Giới Thiệu & Mục Lục', link: '/bai-tap/dong-luc-hoc/' },
            { text: 'Chương 1: PTVP chuyển động chất điểm', link: '/bai-tap/dong-luc-hoc/chuong-1' },
            { text: 'Chương 2: Các định lý tổng quát', link: '/bai-tap/dong-luc-hoc/chuong-2' },
            { text: 'Chương 3: Di chuyển khả dĩ', link: '/bai-tap/dong-luc-hoc/chuong-3' },
            { text: 'Chương 4: Nguyên lý Đalămbe', link: '/bai-tap/dong-luc-hoc/chuong-4' },
            { text: 'Chương 5: Phương trình Lagrange', link: '/bai-tap/dong-luc-hoc/chuong-5' },
            { text: 'Chương 6: Động lực học vật rắn', link: '/bai-tap/dong-luc-hoc/chuong-6' },
            { text: 'Chương 7: Chuyển động tương đối', link: '/bai-tap/dong-luc-hoc/chuong-7' },
            { text: 'Chương 8: Lý thuyết va chạm', link: '/bai-tap/dong-luc-hoc/chuong-8' }
          ]
        },
        {
          text: 'Chuyển Phân Hệ',
          items: [
            { text: ICON_BOOK + 'Giáo Trình Lý Thuyết Động Lực Học', link: '/dong-luc-hoc/' },
            { text: ICON_LIBRARY + 'Cổng Sách Bài Tập', link: '/bai-tap/' }
          ]
        }
      ],
      '/bai-tap/': [
        {
          text: 'TỔNG QUAN BÀI TẬP',
          items: [
            { text: 'Cổng Sách Bài Tập', link: '/bai-tap/' },
            { text: 'Bài Tập Tĩnh Học (Tập 1)', link: '/bai-tap/tinh-hoc/' },
            { text: 'Bài Tập Động Học (Tập 2)', link: '/bai-tap/dong-hoc/' },
            { text: 'Bài Tập Động Lực Học (Quyển 1 & 2)', link: '/bai-tap/dong-luc-hoc/' }
          ]
        }
      ],
      '/on-thi/': [
        {
          text: 'ÔN THI CUỐI KỲ AS1003 (20 NGÀY)',
          items: [
            { text: ICON_TARGET + 'Tổng Quan Lộ Trình 20 Ngày (AS1003)', link: '/on-thi/' },
            { text: ICON_BOOK + 'Chặng 1 (Ngày 1–5): Nền Tảng Vectơ & Ch.9–10', link: '/on-thi/chang-1-tinh-hoc' },
            { text: ICON_BOOK + 'Chặng 2 (Ngày 6–10): Ch.11, 12.1 & 13 (D\'Alembert)', link: '/on-thi/chang-2-dong-hoc' },
            { text: ICON_BOOK + 'Chặng 3 (Ngày 11–15): Ch.12.2–12.3 (Động Năng)', link: '/on-thi/chang-3-dong-luc-hoc' },
            { text: ICON_BOOK + 'Chặng 4 (Ngày 16–20): Ch.14–15 (Lagrange II & Thi Thử)', link: '/on-thi/chang-4-ve-dich' },
            { text: ICON_EXERCISE + 'Ngân Hàng Đề Thi Thật HCMUT AS1003', link: '/on-thi/de-thi-that-hcmut' }
          ]
        },
        {
          text: 'Tra Cứu Nhanh Giáo Trình',
          items: [
            { text: ICON_BOOK + 'Giáo Trình Tĩnh Học', link: '/tinh-hoc/' },
            { text: ICON_BOOK + 'Giáo Trình Động Học', link: '/dong-hoc/' },
            { text: ICON_LIBRARY + 'Giáo Trình Động Lực Học', link: '/dong-luc-hoc/' },
            { text: ICON_EXERCISE + 'Sách Bài Tập Tổng Hợp', link: '/bai-tap/' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Tìm kiếm nội dung...',
                buttonAriaLabel: 'Tìm kiếm nội dung'
              },
              modal: {
                noResultsText: 'Không tìm thấy kết quả phù hợp',
                resetButtonTitle: 'Xóa tìm kiếm',
                footer: {
                  selectText: 'chọn',
                  navigateText: 'điều hướng',
                  closeText: 'đóng'
                }
              }
            }
          }
        }
      }
    },
    outline: {
      level: [2, 3],
      label: 'Mục lục trang'
    },
    docFooter: {
      prev: 'Trang trước',
      next: 'Trang sau'
    },
    footer: {
      message: 'Giáo trình Cơ học - GS. TSKH Đỗ Sanh (NXB Bách Khoa Hà Nội)',
      copyright: 'Bản số hóa trực tuyến phục vụ nghiên cứu & học tập'
    }
  }
})
