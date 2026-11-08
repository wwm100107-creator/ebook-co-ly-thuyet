import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cơ Học Lý Thuyết',
  description: 'Ebook Giáo trình Cơ học trực tuyến - GS. TSKH. Đỗ Sanh (NXB Bách Khoa Hà Nội)',
  base: process.env.GITHUB_PAGES ? '/ebook-co-ly-thuyet/' : '/',
  lang: 'vi-VN',
  ignoreDeadLinks: true,
  markdown: {
    math: true
  },
  themeConfig: {
    siteTitle: 'Cơ Học Lý Thuyết',
    nav: [
      { text: 'Trang Chủ', link: '/' },
      { text: 'Tĩnh Học (Tập 1)', link: '/tinh-hoc/' },
      { text: 'Động Học (Tập 1)', link: '/dong-hoc/' },
      { text: 'Động Lực Học (Tập 2)', link: '/dong-luc-hoc/' },
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
            { text: 'Câu hỏi ôn tập', link: '/tinh-hoc/cau-hoi-on-tap' }
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
            { text: 'Tài liệu tham khảo', link: '/dong-hoc/tai-lieu-tham-khao' }
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
            { text: 'Tài liệu tham khảo', link: '/dong-luc-hoc/tai-lieu-tham-khao' }
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
