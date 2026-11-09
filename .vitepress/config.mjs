import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cơ Học Lý Thuyết',
  description: 'Ebook Giáo trình Cơ học trực tuyến - GS. TSKH. Đỗ Sanh (NXB Bách Khoa Hà Nội)',
  base: process.env.GITHUB_PAGES ? '/ebook-co-ly-thuyet/' : '/',
  lang: 'vi-VN',
  ignoreDeadLinks: true,
  markdown: {
    math: true,
    config(md) {
      const origInline = md.renderer.rules.math_inline
      if (origInline) {
        md.renderer.rules.math_inline = (tokens, idx, options, env, self) => {
          const html = origInline(tokens, idx, options, env, self)
          return html.replace(/<mjx-assistive-mml[\s\S]*?<\/mjx-assistive-mml>/gi, '')
        }
      }
      const origBlock = md.renderer.rules.math_block
      if (origBlock) {
        md.renderer.rules.math_block = (tokens, idx, options, env, self) => {
          const html = origBlock(tokens, idx, options, env, self)
          return html
            .replace(/<mjx-assistive-mml[\s\S]*?<\/mjx-assistive-mml>/gi, '')
            .replace(/\s*tabindex="0"/g, '')
        }
      }
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
            { text: '📝 Sách Bài Tập Tĩnh Học ↗', link: '/bai-tap/tinh-hoc/' }
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
            { text: '📝 Sách Bài Tập Động Học ↗', link: '/bai-tap/dong-hoc/' }
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
            { text: '📝 Sách Bài Tập Động Lực Học ↗', link: '/bai-tap/dong-luc-hoc/' }
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
            { text: '📖 Giáo Trình Lý Thuyết Tĩnh Học', link: '/tinh-hoc/' },
            { text: '📚 Cổng Sách Bài Tập', link: '/bai-tap/' }
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
            { text: '📖 Giáo Trình Lý Thuyết Động Học', link: '/dong-hoc/' },
            { text: '📚 Cổng Sách Bài Tập', link: '/bai-tap/' }
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
            { text: '📖 Giáo Trình Lý Thuyết Động Lực Học', link: '/dong-luc-hoc/' },
            { text: '📚 Cổng Sách Bài Tập', link: '/bai-tap/' }
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
