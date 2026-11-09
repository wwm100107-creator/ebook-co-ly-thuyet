# Tích Hợp Toàn Bộ Sách Bài Tập Cơ Học Lý Thuyết Vào Ebook

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Số hóa và tích hợp toàn bộ hệ thống sách Bài Tập Cơ Học Lý Thuyết (gồm BT Tĩnh học, BT Động học, BT Động lực học Quyển 1 & 2 của GS. TSKH Đỗ Sanh - NXB Bách Khoa Hà Nội) vào website Ebook với đầy đủ Cơ sở lý thuyết, Phương pháp giải, Bài giải mẫu chi tiết, Bài tập rèn luyện (kèm đáp số), hình vẽ vector SVG sắc nét và liên kết 2 chiều với các chương lý thuyết.

**Architecture:** Mở rộng cấu trúc VitePress với phân mục `/bai-tap/` gồm 3 nhánh chuyên sâu (`tinh-hoc/`, `dong-hoc/`, `dong-luc-hoc/`). Cập nhật Navbar hai cấp, đa dạng hóa Sidebar theo từng môn học, xây dựng kho SVG đồ họa kỹ thuật vector riêng trong `public/figures/bai-tap/`, và thiết lập các hộp điều hướng chéo (Cross-reference Callouts) giữa bài tập và lý thuyết.

**Tech Stack:** VitePress 1.6+, KaTeX / MathJax, Scalable Vector Graphics (SVG), GitHub Actions, Vercel Production.

---

## Danh Mục Nguồn Sách Bài Tập Cần Tích Hợp

| Sách Bài Tập | Tệp Nguồn PDF | Quy mô | Các chương nội dung |
| :--- | :--- | :--- | :--- |
| **BT Tĩnh Học** (Tập 1) | `BT Tĩnh Học & Động Học\Tập 1.pdf` | 64 trang scan (133 trang in) | Chương 1: Bài toán phẳng<br>Chương 2: Bài toán phẳng hệ vật<br>Chương 3: Bài toán không gian<br>Chương 4: Bài toán ma sát<br>Chương 5: Bài toán tìm trọng tâm |
| **BT Động Học** (Tập 2) | `BT Tĩnh Học & Động Học\Tập 2.pdf` | 78 trang scan (162 trang in) | Chương 6: Chuyển động của điểm<br>Chương 7: Quay quanh trục cố định<br>Chương 8: Chuyển động song phẳng<br>Chương 9: Chuyển động quanh điểm cố định (cầu)<br>Chương 10: Hợp chuyển động điểm<br>Chương 11: Hợp chuyển động vật |
| **BT Động Lực Học (Quyển 1)** | `BT Động Lực Học\Screenshot (1287)-đã gộp.pdf` | 84 trang scan (167 trang in) | Chương 1: PTVP chuyển động chất điểm<br>Chương 2: Các định lý tổng quát ĐLH<br>Chương 3: Cân bằng cơ hệ không tự do (Di chuyển khả dĩ)<br>Chương 4: Phương pháp tĩnh hình học - động lực (Đalămbe) |
| **BT Động Lực Học (Quyển 2)** | `BT Động Lực Học\Screenshot (1288)-đã gộp.pdf` | 66 trang scan (130 trang in) | Chương 5: Phương trình chuyển động của cơ hệ (Lagrange)<br>Chương 6: Động lực học vật rắn<br>Chương 7: ĐLH chuyển động tương đối<br>Chương 8: Va chạm |

---

## Kế Hoạch Triển Khai Chi Tiết (Phân Kỳ Thực Hiện)

### Giai Đoạn 1: Khung Điều Hướng & Cấu Trúc Website (Site Architecture)
- **Task 1.1:** Cấu hình lại Navbar trong `.vitepress/config.mjs` với 2 nhóm lớn rõ ràng:
  - `Giáo Trình Lý Thuyết`: Tĩnh học, Động học, Động lực học.
  - `Sách Bài Tập`: Tổng quan, Bài tập Tĩnh học, Bài tập Động học, Bài tập Động lực học.
- **Task 1.2:** Cấu hình 3 bộ Sidebar mới chuyên trách cho:
  - `/bai-tap/tinh-hoc/` (5 chương)
  - `/bai-tap/dong-hoc/` (6 chương)
  - `/bai-tap/dong-luc-hoc/` (8 chương)
- **Task 1.3:** Tạo trang cổng `/bai-tap/index.md` giới thiệu tổng quan bộ sách bài tập, phương pháp học tập kết hợp lý thuyết - bài tập.
- **Task 1.4:** Tạo thư mục lưu trữ vector SVG tương ứng: `public/figures/bai-tap/tinh-hoc/`, `public/figures/bai-tap/dong-hoc/`, `public/figures/bai-tap/dong-luc-hoc/`.

---

### Giai Đoạn 2: Số Hóa Sách Bài Tập Tĩnh Học (Tập 1 - 5 Chương)
Mỗi chương bài tập bao gồm 4 phần quy chuẩn:
1. `Cơ sở lý thuyết`: Tóm tắt định nghĩa, bảng phân loại liên kết, điều kiện cân bằng.
2. `Hướng dẫn áp dụng`: Phương pháp giải chuẩn 3 bước, chú ý đặc biệt.
3. `Bài giải mẫu`: Tuyển tập các thí dụ kinh điển kèm hình vẽ vector SVG sắc nét và các bước tính toán chi tiết.
4. `Bài tập rèn luyện`: Đề bài chuẩn kèm đáp số đối chiếu.

- **Task 2.1: Chương 1 - Bài toán phẳng**
  - Cơ sở lý thuyết & Bảng liên kết phẳng (tựa, dây, thanh, bản lề, ngàm).
  - Thí dụ giải mẫu: Tìm phản lực liên kết, hệ lực đồng quy, ngẫu lực phẳng, hệ lực bất kỳ.
  - Bài tập tự luyện & đáp số.
  - Vẽ SVG: Hình hệ lực phẳng, dầm côngxon, thanh liên kết.
- **Task 2.2: Chương 2 - Bài toán phẳng hệ vật**
  - Cơ sở lý thuyết: Điều kiện cân bằng hệ vật, nguyên lý hóa rắn, tách vật.
  - Thí dụ giải mẫu: Hệ khung giàn, hệ dầm ghép, hệ 3 vật liên kết bản lề.
  - Bài tập tự luyện & đáp số.
  - Vẽ SVG: Hệ dầm ghép bản lề, khung 3 khớp, pa-lăng tời.
- **Task 2.3: Chương 3 - Bài toán không gian**
  - Cơ sở lý thuyết & Bảng liên kết không gian (cối, ống dài, ngàm 3D, ổ đỡ chặn).
  - Thí dụ giải mẫu: Cân bằng thanh chống trong không gian, hệ giàn không gian, trục truyền động.
  - Bài tập tự luyện & đáp số.
  - Vẽ SVG: Trục không gian 3D, hệ thanh tựa tường không gian.
- **Task 2.4: Chương 4 - Bài toán ma sát**
  - Cơ sở lý thuyết: Ma sát trượt (Culông), nón ma sát, ma sát lăn.
  - Thí dụ giải mẫu: Nêm chêm, kích ốc vít, vật trượt trên mặt phẳng nghiêng có ma sát lăn.
  - Bài tập tự luyện & đáp số.
  - Vẽ SVG: Nêm xiên, bánh xe lăn trên mặt phẳng nhám.
- **Task 2.5: Chương 5 - Bài toán tìm trọng tâm**
  - Cơ sở lý thuyết: Công thức trọng tâm hình học, phương pháp diện tích âm, định lý Guynđanh.
  - Thí dụ giải mẫu: Mặt cắt thép định hình I, L, vật tròn xoay sinh bởi đường cong.
  - Bài tập tự luyện & đáp số.
  - Vẽ SVG: Mặt cắt composite, vật thể tròn xoay.

---

### Giai Đoạn 3: Số Hóa Sách Bài Tập Động Học (Tập 2 - 6 Chương)
- **Task 3.1: Chương 6 - Chuyển động của điểm** (Phương pháp tọa độ Đề-các, tự nhiên, gia tốc tiếp - pháp, bán kính cong quỹ đạo).
- **Task 3.2: Chương 7 - Quay quanh một trục cố định** (Vận tốc góc, gia tốc góc, phân bố vận tốc - gia tốc trên vật rắn, bộ truyền bánh răng).
- **Task 3.3: Chương 8 - Chuyển động song phẳng** (Tâm vận tốc tức thời, định lý hình chiếu vận tốc, tâm gia tốc, cơ cấu 4 khâu bản lề, cơ cấu tay quay con trượt).
- **Task 3.4: Chương 9 - Chuyển động quay quanh một điểm cố định (cầu)** (Góc Euler, trục quay tức thời, vận tốc và gia tốc góc).
- **Task 3.5: Chương 10 - Hợp chuyển động của điểm** (Chuyển động tuyệt đối, tương đối, theo đà; định lý cộng vận tốc; định lý Coriolis).
- **Task 3.6: Chương 11 - Hợp chuyển động của vật** (Hợp chuyển động tịnh tiến và quay, hệ bánh răng vi sai không gian).

---

### Giai Đoạn 4: Số Hóa Sách Bài Tập Động Lực Học (Quyển 1 & 2 - 8 Chương)
- **Task 4.1: Chương 1 - PTVP chuyển động của chất điểm** (Bài toán thuận & bài toán nghịch, dao động điều hòa, chất điểm chịu cản môi trường).
- **Task 4.2: Chương 2 - Các định lý tổng quát của ĐLH** (Định lý động lượng, chuyển động khối tâm, mômen động lượng, động năng, định luật bảo toàn).
- **Task 4.3: Chương 3 - Cân bằng cơ hệ không tự do (Di chuyển khả dĩ)** (Tọa độ suy rộng, lực suy rộng, phương trình cân bằng trong tọa độ suy rộng).
- **Task 4.4: Chương 4 - Phương pháp tĩnh hình học - động lực (Đalămbe)** (Lực quán tính chất điểm, lực quán tính vật rắn, áp lực động lên ổ trục).
- **Task 4.5: Chương 5 - Phương trình chuyển động của cơ hệ (Lagrange loại II)** (Hàm Lagrange, lập PTVP cho cơ hệ phức tạp nhiều bậc tự do).
- **Task 4.6: Chương 6 - Động lực học vật rắn** (Quay quanh trục cố định, song phẳng, hiệu ứng con quay hồi chuyển Gyroscope).
- **Task 4.7: Chương 7 - ĐLH chuyển động tương đối** (Lực quán tính Coriolis, cân bằng tương đối).
- **Task 4.8: Chương 8 - Lý thuyết va chạm** (Hệ số phục hồi, va chạm xuyên tâm và lệch tâm, định lý Carnot).

---

### Giai Đoạn 5: Liên Kết Hai Chiều (Bidirectional Linking), Tinh Chỉnh & Triển Khai
- **Task 5.1:** Gắn liên kết chéo giữa từng chương Lý thuyết và chương Bài tập tương ứng:
  - Ở đầu/cuối mỗi chương Lý thuyết có callout: `[!TIP] Luyện tập thực hành: Xem Bài tập & Lời giải mẫu`.
  - Ở đầu mỗi chương Bài tập có callout: `[!NOTE] Cơ sở lý thuyết: Đọc lại lý thuyết và hệ tiên đề`.
- **Task 5.2:** Kiểm tra toàn bộ công thức toán học KaTeX, bảo đảm không có lỗi render hay tràn màn hình.
- **Task 5.3:** Kiểm tra chất lượng hiển thị của 100% hình vẽ SVG trên cả giao diện Sáng (Light) và Tối (Dark).
- **Task 5.4:** Chạy full build `npm run build` để xác thực 0 broken links và 0 lỗi cú pháp.
- **Task 5.5:** Git commit, push GitHub repository và Deploy lên Vercel Production.
