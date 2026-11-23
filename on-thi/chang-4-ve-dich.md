---
title: "Chặng 4 (Ngày 16–20): Chương 14–15, Sổ Tay A4 & Về Đích (>8 Điểm)"
layout: doc
---

# Chặng 4 (Ngày 16 – Ngày 20): Chương 14–15 (Di Chuyển Khả Dĩ, Lagrange Loại II), Sổ Tay A4 & Tổng Ôn Về Đích

Đây là chặng quyết định để sinh viên **tay ngang (mất gốc)** vượt dứt khoát ngưỡng **`> 8,0` điểm** trong đề thi Cuối kỳ **Cơ Lý Thuyết (`AS1003` — ĐH Bách Khoa TPHCM)**. Vì sao? Bởi trong hầu hết các đề thi thật (`1821`, `1721`, `1722`, `0001/2016`, `0002/2016`, `0001/2015`, `0002/2015`...), **khoảng `40%` số câu của cả đề** (gồm `1–2` câu lý thuyết mở đầu và trọn **chùm `4` câu liên hoàn Lagrange loại II** cho cơ hệ `2` bậc tự do ở cuối đề) nằm gọn trong **Chương 14 & Chương 15**. Khối bài này giải theo **khuôn mẫu cố định lặp lại qua mọi năm**, ít biến hình phức tạp và cực dễ kiểm chứng bằng **Tuyệt chiêu 15 giây**.

::: tip Bản đồ tổng quan Chặng 4 (Ngày 16 – Ngày 20 | Chương 14–15 & Về Đích)
| Ngày | Chủ đề trọng tâm | Mục tiêu làm được ngay sau buổi học | Tài liệu đối chiếu |
| :--- | :--- | :--- | :--- |
| **Ngày 16** | **Chương 14 & Cầu nối `15.1`:** Holonom & Di chuyển khả dĩ | Quét sạch câu lý thuyết mở đầu (`0001/2016` 1d, `0002/2016` 1d), bẫy Câu 2 (`2d`/`2c`), chọn di chuyển khả dĩ tìm phản lực (`2015`), đếm nhanh số BTD & PT Đalămbe–Lagrange (`15.1`) | [ĐLH Chương 4](/dong-luc-hoc/chuong-4) |
| **Ngày 17** | **Chương 15 (Bước 1–2):** $v_B^2$ & Động năng $T$ | Viết chuẩn $v_B^2$ và $T$ cho hệ 2 BTD (con lắc Eliptic `1821`, lăng trụ + ống trụ `1721`, ròng rọc tầng `1722`, `0001/2016`, `0002/2016`) | [ĐLH Chương 6](/dong-luc-hoc/chuong-6) |
| **Ngày 18** | **Chương 15 (Bước 3–4):** $Q_i$, `15.1` $\to$ `15.2` & Mẹo 15 giây | Né bẫy chọn gốc lò xo $\Delta l$ & ma sát trượt (`1821` 10b), dùng **Tuyệt chiêu 15 giây** chốt hệ 2 PT Lagrange II (`1721` 12e, `1821` 12c, `1722` 12c) & tránh sập bẫy đảo vị trí `12a` | [Đề thi thật HCMUT](/on-thi/de-thi-that-hcmut) |
| **Ngày 19** | **Sổ Tay Công Thức In A4 Mang Vào Phòng Thi** | Bản tra cứu 2 mặt A4 tối giản: $J_G$ + Steiner, Willis, D'Alembert, 4 mẫu $T$, $Q_i$, khuôn Lagrange II 15 giây & checklist chống bẫy `e` | [Tổng quan ôn thi](/on-thi/) |
| **Ngày 20** | **Chiến Thuật 90 Phút & Đề Thi Thử Chuẩn Form** | Phân bổ thời gian 90 phút phòng thi + Tự bấm giờ giải **Đề thi thử 12 câu chuẩn AS1003** kèm đáp án kiểm toán chi tiết | [Ngân hàng đề thi thật](/on-thi/de-thi-that-hcmut) |
:::

::: info Điều hướng nhanh lộ trình 20 ngày
- [Tổng Quan Lộ Trình 20 Ngày (AS1003)](/on-thi/) · [Ngân Hàng Đề Thi Thật HCMUT AS1003](/on-thi/de-thi-that-hcmut)
- Ôn lại 3 chặng trước: [Chặng 1 (Xóa Mù & Ch.9–10)](/on-thi/chang-1-tinh-hoc) · [Chặng 2 (Ch.11, 12.1 & 13 D'Alembert)](/on-thi/chang-2-dong-hoc) · [Chặng 3 (Ch.12.2–12.3 Động Năng)](/on-thi/chang-3-dong-luc-hoc)
:::

---

## Ngày 16: Chương 14 — Lý Thuyết Holonom & Di Chuyển Khả Dĩ (Quét Sạch Câu Mở Đầu Đề Thi)

### 16.1. Phân loại liên kết bằng ngôn ngữ bình dân (không cần học vẹt)

Trong [Chương 4 Tập 2](/dong-luc-hoc/chuong-4), cơ hệ chịu các ràng buộc gọi là **liên kết**. Để làm đúng mọi câu trắc nghiệm lý thuyết đầu đề, bạn chỉ cần nắm **4 cặp phân biệt** sau:

1. **Liên kết hình học vs Liên kết động học (Holonom vs Không holonom):**
   - **Liên kết hình học:** Phương trình ràng buộc **chỉ chứa tọa độ và thời gian** (không có vận tốc):
     $$f(\vec{r}_1, \vec{r}_2, \dots, \vec{r}_N, t) = 0$$
     *Ví dụ:* Quả cầu nối thanh cứng dài $l$ với điểm cố định $O$ phải thỏa $x^2 + y^2 - l^2 = 0$.
   - **Liên kết động học (vi phân):** Phương trình ràng buộc chứa vận tốc:
     $$\sum_{k=1}^N \vec{a}_{ik} \cdot \dot{\vec{r}}_k + b_i = 0$$
     - Nếu phương trình động học **tích phân được (khả tích)** để rút về phương trình tọa độ $f(\vec{r}, t) = 0$ $\implies$ vẫn là **Liên kết Holonom**! *(Ví dụ: đĩa tròn lăn không trượt trên đường thẳng cho $\dot{x} - R\dot{\varphi} = 0$, tích phân thành $x - R\varphi = \text{const}$ $\implies$ Holonom!)*
     - Nếu phương trình động học **không tích phân được (không khả tích)** $\implies$ gọi là **Liên kết Không Holonom**. *(Ví dụ: bánh xe lăn không trượt trên mặt phẳng 3D hoặc lưỡi dao trượt băng bị khóa phương vận tốc ngang nhưng vẫn đi tới mọi điểm $(x, y)$ tùy ý).*
   - **Chốt nhớ cho người mất gốc:**
     - **Holonom** $\implies$ ràng buộc **cả vị trí lẫn vận tốc** (vì lấy đạo hàm phương trình vị trí $f=0$ là ra ngay phương trình ràng buộc vận tốc $\dot{f}=0$).
     - **Không holonom** $\implies$ **vị trí tùy ý** (không bị phương trình hình học nào khóa), **nhưng vận tốc không tùy ý** (bị khóa bởi phương trình vi phân không khả tích).

2. **Liên kết dừng vs Liên kết không dừng:**
   - **Liên kết dừng (Scleronomic):** Phương trình liên kết **không chứa thời gian $t$ tường minh** ($\frac{\partial f}{\partial t} = 0$, ví dụ mặt bàn đứng yên).
   - **Liên kết không dừng (Rheonomic):** Phương trình liên kết **chứa $t$ tường minh** (ví dụ cái thang máy hoặc sàn nêm đang chuyển động theo quy luật cho trước $x_0 = v_0 t$).

3. **Liên kết hai phía (liên kết giữ) vs Liên kết một phía (liên kết không giữ):**
   - **Hai phía ($f = 0$):** Giữ chặt vật không rời hai bên (khớp bản lề, con trượt trong rãnh kín).
   - **Một phía ($f \ge 0$):** Chỉ cản một chiều, chiều kia vật tự do tách rời (dây mềm chỉ chịu kéo không chịu nén; mặt sàn chỉ đỡ vật không giữ vật bay lên).

4. **Liên kết lý tưởng:**
   - Liên kết gọi là **lý tưởng** khi **tổng công khả dĩ của tất cả các phản lực liên kết $\vec{N}_k$ bằng không** trên mọi di chuyển khả dĩ $\delta\vec{r}_k$:
     $$\sum_{k=1}^N \vec{N}_k \cdot \delta\vec{r}_k = 0$$
   - *Các liên kết lý tưởng hay gặp trong đề AS1003:* Mặt tựa nhẵn không ma sát ($\vec{N} \perp \delta\vec{r}$), khớp bản lề không ma sát, dây mềm không dãn, thanh nối cứng, và **con lăn lăn không trượt** (vì điểm tiếp xúc $I$ đứng yên tức thời nên $\delta\vec{r}_I = \vec{0} \implies \vec{F}_{\text{ms nghỉ}} \cdot \delta\vec{r}_I = 0$!).

---

### 16.2. Kiểm chứng ngay 2 câu mở đầu Đề `0001/2016` và Đề `0002/2016`

::: tip Thực chiến Đề `0001/2016` — Câu 1 (Trang 23 PDF)
**Đề bài:** *"Đối với cơ hệ liên kết holonom, điều kiện ràng buộc của các chất điểm thuộc hệ là:"*
- `a.` Vị trí $\qquad$ `b.` Vận tốc $\qquad$ `c.` Gia tốc $\qquad$ `d.` Vị trí và vận tốc $\qquad$ `e.` Tùy ý

**Lời giải 5 giây:** Liên kết holonom đặt phương trình hình học $f(\vec{r}_k, t) = 0$ lên **vị trí**; khi lấy đạo hàm theo thời gian $df/dt = 0$, ta thu được ngay ràng buộc lên **vận tốc**. Vì vậy cả **vị trí và vận tốc** đều bị ràng buộc $\implies$ Chọn **`1d`**.
:::

::: tip Thực chiến Đề `0002/2016` — Câu 1 (Trang 26 PDF)
**Đề bài:** *"Đối với cơ hệ không holonom, tại thời điểm khảo sát các chất điểm thuộc hệ có:"*
- `a.` Vị trí tùy ý $\qquad$ `b.` Vận tốc tùy ý $\qquad$ `c.` Gia tốc tùy ý
- `d.` Vị trí tùy ý nhưng vận tốc không tùy ý $\qquad$ `e.` Vị trí không tùy ý

**Lời giải 5 giây:** Liên kết không holonom có phương trình vi phân $\sum \vec{a}_k \cdot \dot{\vec{r}}_k + b = 0$ **không khả tích**, nên không có phương trình tọa độ nào giới hạn vị trí $\implies$ **vị trí tùy ý**; nhưng vận tốc vẫn phải thỏa mãn phương trình liên kết động học đó $\implies$ **vận tốc không tùy ý** $\implies$ Chọn **`1d`**. *(Lưu ý: trên bản scan PDF trang 26, thí sinh lúc đầu gạch nhầm `c` rồi sửa lại đúng `d`!)*
:::

---

### 16.3. Phương trình tổng quát Tĩnh học & Bẫy câu mở đầu Đề `2016` – `2015`

Với cơ hệ có **liên kết lý tưởng, dừng, giữ (hai phía)**, **Nguyên lý Di chuyển khả dĩ (Phương trình tổng quát của Tĩnh học)** phát biểu: Điều kiện cần và đủ để cơ hệ cân bằng là tổng công khả dĩ của tất cả các **lực hoạt động** $\vec{F}_k$ bằng không trên mọi di chuyển khả dĩ $\delta\vec{r}_k$:

$$\delta A = \sum_{k=1}^N \vec{F}_k \cdot \delta\vec{r}_k = 0$$

::: warning Bẫy Câu 2 Đề `0001/2016` (`2d`), Đề `0002/2016` (`2c`) & Phân biệt câu hỏi Chương 14
Khi làm 2 câu lý thuyết mở đầu đề HCMUT, người tay ngang rất hay bị **lừa bởi từ ngữ na ná nhau** hoặc **đọc nhầm chương**:

1. **Kiểm chứng nguyên văn Đề `0001/2016` Câu 2 (Trang 23 PDF — Chương 12):**
   - **Đề hỏi:** *"Điều kiện để vật rắn chuyển động tịnh tiến là?"*
   - **Đáp án chuẩn (`2d`):** **Tổng mômen các ngoại lực đối với khối tâm $C$ bằng không** ($\sum \vec{m}_C(\vec{F}_k^e) = \vec{0}$).
   - **Bẫy (`2c`):** Ghi *"Tổng các ngoại lực và tổng các mômen ngoại lực đối với tâm $C$ bằng không"* là **SAI**! Bởi nếu $\sum \vec{F}_k^e = \vec{0}$ thì khối tâm $C$ đứng yên hoặc chuyển động thẳng đều ($\vec{a}_C = \vec{0}$), còn vật vẫn có thể **chuyển động tịnh tiến có gia tốc** khi $\sum \vec{F}_k^e \neq \vec{0}$ miễn là $\sum \vec{m}_C = \vec{0}$ (khi xuất phát từ trạng thái đứng yên).

2. **Kiểm chứng nguyên văn Đề `0002/2016` Câu 2 (Trang 26 PDF — Chương 12):**
   - **Đề hỏi:** *"Khối tâm $C$ của cơ hệ chuyển động chịu ảnh hưởng của?"*
   - **Đáp án chuẩn (`2c`):** **Ngoại lực tác động lên hệ** (theo Định lý chuyển động khối tâm $M\vec{a}_C = \sum \vec{F}_k^e$, mọi nội lực giữa các chất điểm trong hệ đều triệt tiêu từng đôi một trực đối nhau).

3. **Bẫy trong câu hỏi Chương 14 (Phương trình cân bằng vs Điều kiện tương đương):**
   - Nếu đề hỏi **"Phương trình tổng quát Tĩnh học (điều kiện cân bằng) của hệ có liên kết lý tưởng"**: chỉ chứa **lực hoạt động** $\sum \vec{F}_k \cdot \delta\vec{r}_k = 0$.
   - Nếu đề hỏi **"Điều kiện của liên kết lý tưởng"**: chỉ chứa **phản lực liên kết** $\sum \vec{N}_k \cdot \delta\vec{r}_k = 0$.
   - Nếu đề hỏi **"Hệ chưa giải phóng liên kết (hoặc điều kiện tương đương với mọi lực tác dụng lên chất điểm tự do)"**: $\sum (\vec{F}_k + \vec{N}_k) \cdot \delta\vec{r}_k = 0$.

4. **Cách chọn Di chuyển khả dĩ đúng để tìm phản lực liên kết (Đề `0001/2015` Câu 1 & Đề `0002/2015` Câu 1, trang 33 & 37 PDF):**
   - **Quy tắc duy nhất:** Muốn tìm thành phần phản lực nào, ta **giải phóng đúng liên kết đó** (cho điểm đặt di chuyển theo phương phản lực cần tìm), còn **tất cả các liên kết khác phải giữ nguyên y hệt**!
   - **Đề `0001/2015` Câu 1 (`1a`):** Dầm $ABCD$ có gối cố định $A$, gối di động $B$, khớp nối nội $C$, gối trượt nghiêng $\alpha$ tại $D$. Để tìm phản lực $\vec{N}_D$: chỉ bỏ gối $D$, giữ $A$ và $B$ cố định $\implies$ đoạn $ABC$ đứng yên, chỉ đoạn $CD$ quay quanh khớp $C$ một góc $\delta\varphi$ $\implies$ Chọn **`1a`**.
   - **Đề `0002/2015` Câu 1 (`1b`):** Cùng hệ dầm trên, muốn tìm **phản lực đứng $\vec{V}_A$ tại $A$**: bỏ ràng buộc đứng tại $A$ (giữ gối trượt ngang tại $A$), giữ gối $B$ và gối $D$ $\implies$ thanh $ABC$ quay quanh gối $B$ góc $\delta\varphi$, kéo đầu $A$ trượt thẳng đứng còn đầu $C$ nâng đoạn $CD$ quay theo $\implies$ Chọn **`1b`**.
:::

::: tip Mục 15.1 — Phương trình vi phân tổng quát Động lực học (Đalămbe–Lagrange)
Khi cơ hệ **chuyển động** (có gia tốc $\vec{a}_k \neq \vec{0}$), người mất gốc chỉ cần **lấy Phương trình tổng quát Tĩnh học ($\sum \vec{F}_k \cdot \delta\vec{r}_k = 0$) gắn thêm lực quán tính $-m_k \vec{a}_k$** vào từng chất điểm là thu được ngay **Phương trình vi phân tổng quát Động lực học (`15.1`, phương trình Đalămbe–Lagrange)**:

$$\sum \left(\vec{F}_k^{(e)} - m_k \vec{a}_k\right) \cdot \delta\vec{r}_k = 0$$

- **Ý nghĩa cho người tay ngang:**
  - Khi hệ đứng yên ($\vec{a}_k = \vec{0}$), phương trình (`15.1`) thu về đúng Phương trình tổng quát Tĩnh học của Chương 14.
  - Từ phương trình (`15.1`), khi biểu diễn $\delta\vec{r}_k$ qua các tọa độ suy rộng độc lập $\delta q_i$, ta suy trực tiếp ra **Phương trình Lagrange loại II (`15.2`)** dùng ở Ngày 17–18! *(Xem thêm [ĐLH Chương 5 (Mục 5.4)](/dong-luc-hoc/chuong-5) và [ĐLH Chương 6](/dong-luc-hoc/chuong-6)).*
:::

---

### 16.4. Mẹo 5 giây tìm số bậc tự do $n$ (hoặc $s$) của cơ hệ bất kỳ

Trong mặt phẳng, công thức hàn lâm là $n = 3k - r_{\text{liên kết}}$ ($k$ là số vật rắn độc lập), nhưng trong phòng thi trắc nghiệm `AS1003`, người mất gốc chỉ cần dùng **mẹo đếm tọa độ chuyển động độc lập**:

| Dạng bộ phận trong cơ hệ | Số BTD đóng góp | Tọa độ suy rộng thường chọn | Lưu ý thực chiến |
| :--- | :---: | :---: | :--- |
| Con trượt / lăng trụ chạy trên đường cố định | `+1` | $x$ hoặc $s$ | Chuyển động tịnh tiến thẳng $\implies 1$ thông số vị trí. |
| Thanh / ròng rọc quay quanh trục cố định | `+1` | $\varphi$ hoặc $\theta$ | Vị trí xác định duy nhất bởi $1$ góc quay. |
| Thanh nối chốt bản lề vào một con trượt đang chạy | `+1` (của thanh) | $\varphi$ | Hệ $A + AB$ có tổng cộng $1 + 1 = 2$ BTD ($x, \varphi$). |
| **Con lăn lăn không trượt** trên mặt tựa | **`+1`** (giảm $1$ BTD so với tự do!) | $\varphi$ hoặc $x$ | Ràng buộc $x = R\varphi$ triệt tiêu $1$ BTD. **Nếu vừa lăn vừa trượt** $\implies$ mất $x = R\varphi$, tăng lên **`2` BTD** ($x, \varphi$). |
| Hai vật nối nhau bởi **dây mềm không dãn** hoặc **bánh răng ăn khớp** | **`+0`** (không tăng thêm BTD) | Phụ thuộc vật kia | Dây không dãn ép $v_2 = k \cdot v_1$, bánh răng ép $\omega_2 = i_{21}\omega_1$. |

**Ví dụ kiểm tra nhanh 5 giây:**
- Con trượt $A$ chạy ngang + thanh $AB$ quay quanh $A$ (Đề `1821` Bài 3): $1 + 1 = 2$ BTD ($x, \varphi$).
- Lăng trụ $A$ trượt ngang + ống trụ $B$ lăn không trượt trên mặt nghiêng của $A$ (Đề `1721` Bài 4): lăng trụ $1$ BTD ($x$), ống trụ lăn không trượt trên $A$ thêm $1$ BTD ($\varphi$) $\implies 2$ BTD ($x, \varphi$).
- Hệ ròng rọc `1722` Bài 4 (ròng rọc $O$ nối dây vào tâm ròng rọc động $O_2$, tải $A$ quấn dây riêng lên $O_2$): $O$ quay góc $\varphi_1$, $O_2$ quay độc lập góc $\varphi_2$ $\implies 2$ BTD ($\varphi_1, \varphi_2$).

---

## Ngày 17: Chương 15 (Bước 1 & 2) — Viết Vận Tốc Tuyệt Đối & Động Năng $T$ Cho Hệ 2 Bậc Tự Do

Chùm `4` câu Lagrange II ở cuối đề `AS1003` luôn đi qua `4` bước cố định:
1. **Bước 1:** Tính vận tốc tuyệt đối $V_B$ (hoặc $\vec{v}_B$) của khâu thứ hai.
2. **Bước 2:** Tính động năng toàn hệ $T(q_1, q_2, \dot{q}_1, \dot{q}_2)$.
3. **Bước 3:** Tính các lực suy rộng $Q_1, Q_2$.
4. **Bước 4:** Lập hệ `2` phương trình vi phân chuyển động Lagrange loại II.

Hôm nay chúng ta làm chủ **Bước 1 và Bước 2** trên **2 mô hình trụ cột** và **5 đề thi thật HCMUT**.

### 17.1. Sơ đồ 2 mô hình 2 bậc tự do kinh điển của HCMUT

<div class="figure-container">
<svg viewBox="0 0 680 300" style="width: 100%; max-width: 660px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Mô hình 1: Con lắc Eliptic đề 1821 Bài 3 và tam giác cộng vận tốc tại quả cầu B">
  <defs>
    <marker id="arr-blue-1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <polygon points="0,0 7,3 0,6" fill="#0284c7" />
    </marker>
    <marker id="arr-dark-1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <polygon points="0,0 7,3 0,6" fill="#334155" />
    </marker>
    <marker id="arr-teal-1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <polygon points="0,0 7,3 0,6" fill="#0d9488" />
    </marker>
    <marker id="arr-amber-1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <polygon points="0,0 7,3 0,6" fill="#d97706" />
    </marker>
  </defs>

  <!-- Khung nền sàn và trục tọa độ -->
  <line x1="40" y1="100" x2="355" y2="100" stroke="#334155" stroke-width="2.2" marker-end="url(#arr-dark-1)" />
  <line x1="80" y1="100" x2="80" y2="26" stroke="#334155" stroke-width="2.2" marker-end="url(#arr-dark-1)" />
  <!-- Gạch nền dưới sàn -->
  <line x1="55" y1="108" x2="63" y2="100" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="75" y1="108" x2="83" y2="100" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="95" y1="108" x2="103" y2="100" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="115" y1="108" x2="123" y2="100" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="135" y1="108" x2="143" y2="100" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="225" y1="108" x2="233" y2="100" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="245" y1="108" x2="253" y2="100" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="265" y1="108" x2="273" y2="100" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="285" y1="108" x2="293" y2="100" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="305" y1="108" x2="313" y2="100" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="325" y1="108" x2="333" y2="100" stroke="#94a3b8" stroke-width="1.5" />

  <text x="64" y="92" font-family="sans-serif" font-size="13" font-weight="700" fill="#334155">O</text>
  <text x="90" y="34" font-family="sans-serif" font-size="13" font-weight="700" fill="#334155">y</text>
  <text x="358" y="94" font-family="sans-serif" font-size="13" font-weight="700" fill="#334155">x</text>

  <!-- Đường kích thước tọa độ x -->
  <line x1="185" y1="32" x2="185" y2="70" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3" />
  <line x1="80" y1="40" x2="181" y2="40" stroke="#0284c7" stroke-width="1.8" marker-end="url(#arr-blue-1)" />
  <text x="132" y="32" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0284c7">x</text>

  <!-- Con trượt A -->
  <rect x="155" y="72" width="60" height="28" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <text x="185" y="63" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0369a1">A (m<tspan dy="3" font-size="10">1</tspan><tspan dy="-3">)</tspan></text>
  <text x="275" y="124" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="600" fill="#dc2626">Ma sát trượt μ</text>

  <!-- Đường thẳng đứng và thanh treo AB -->
  <line x1="185" y1="86" x2="185" y2="262" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4" />
  <line x1="185" y1="86" x2="275" y2="219" stroke="#0f172a" stroke-width="3" />
  <circle cx="185" cy="86" r="4" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
  <circle cx="275" cy="219" r="14" fill="#fef3c7" stroke="#d97706" stroke-width="2.2" />

  <!-- Cung góc phi -->
  <path d="M 185 148 A 62 62 0 0 0 220 137" fill="none" stroke="#0d9488" stroke-width="2" />
  <text x="206" y="168" font-family="sans-serif" font-size="13" font-weight="700" fill="#0d9488">φ</text>
  <text x="242" y="146" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a">l</text>
  <text x="300" y="224" font-family="sans-serif" font-size="13" font-weight="700" fill="#b45309">B (m<tspan dy="3" font-size="10">2</tspan><tspan dy="-3">)</tspan></text>
  <text x="275" y="262" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#475569">x<tspan dy="3" font-size="9">B</tspan><tspan dy="-3"> = x + l sin φ ;  y</tspan><tspan dy="3" font-size="9">B</tspan><tspan dy="-3"> = -l cos φ</tspan></text>

  <!-- Hộp bên phải: Cộng vectơ vận tốc tại B -->
  <rect x="392" y="22" width="268" height="256" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="526" y="46" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a">Cộng vectơ vận tốc tại B</text>

  <!-- Điểm B gốc của tam giác vận tốc -->
  <circle cx="436" cy="166" r="4" fill="#0f172a" />
  <text x="422" y="170" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">B</text>

  <!-- Vectơ v_e nằm ngang -->
  <line x1="436" y1="166" x2="532" y2="166" stroke="#0284c7" stroke-width="2.4" marker-end="url(#arr-blue-1)" />
  <text x="484" y="185" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0284c7">v<tspan dy="3" font-size="9">e</tspan><tspan dy="-3"> = dx/dt</tspan></text>

  <!-- Vectơ v_td vuông góc thanh AB (hướng lên-phải góc phi = 34 deg) -->
  <line x1="436" y1="166" x2="504" y2="120" stroke="#0d9488" stroke-width="2.4" marker-end="url(#arr-teal-1)" />
  <text x="448" y="114" font-family="sans-serif" font-size="12" font-weight="700" fill="#0d9488">v<tspan dy="3" font-size="9">td</tspan><tspan dy="-3"> = l·dφ/dt</tspan></text>

  <!-- Hình bình hành và vectơ hợp v_B -->
  <line x1="532" y1="166" x2="600" y2="120" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,3" />
  <line x1="504" y1="120" x2="600" y2="120" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,3" />
  <line x1="436" y1="166" x2="596" y2="121" stroke="#d97706" stroke-width="2.6" marker-end="url(#arr-amber-1)" />
  <text x="612" y="118" font-family="sans-serif" font-size="13" font-weight="700" fill="#b45309">v<tspan dy="3" font-size="9">B</tspan></text>

  <!-- Cung góc phi giữa v_e và v_td -->
  <path d="M 488 166 A 52 52 0 0 0 479 137" fill="none" stroke="#0d9488" stroke-width="1.6" />
  <text x="498" y="160" font-family="sans-serif" font-size="12" font-weight="700" fill="#0d9488">φ</text>

  <!-- Công thức tóm tắt trong hộp -->
  <text x="526" y="226" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="600" fill="#334155">Góc hợp giữa v<tspan dy="3" font-size="9">e</tspan><tspan dy="-3"> và v</tspan><tspan dy="3" font-size="9">td</tspan><tspan dy="-3"> là φ</tspan></text>
  <text x="526" y="252" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0369a1">v<tspan dy="3" font-size="9">B</tspan><tspan dy="-3">² = v</tspan><tspan dy="3" font-size="9">e</tspan><tspan dy="-3">² + v</tspan><tspan dy="3" font-size="9">td</tspan><tspan dy="-3">² + 2 v</tspan><tspan dy="3" font-size="9">e</tspan><tspan dy="-3"> v</tspan><tspan dy="3" font-size="9">td</tspan><tspan dy="-3"> cos φ</tspan></text>
</svg>
<div class="figure-caption">

Hình 17-1: Mô hình 1 — Con lắc Eliptic $A(m_1) + B(m_2)$ (Đề `1821` Bài 3) và phép cộng vectơ vận tốc tại $B$

</div>
</div>

<div class="figure-container">
<svg viewBox="0 0 680 300" style="width: 100%; max-width: 660px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Mô hình 2: Lăng trụ trượt A(m1) và ống trụ mỏng B(m2) lăn không trượt của đề 1721 Bài 4">
  <defs>
    <marker id="arr-blue-2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <polygon points="0,0 7,3 0,6" fill="#0284c7" />
    </marker>
    <marker id="arr-teal-2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <polygon points="0,0 7,3 0,6" fill="#0d9488" />
    </marker>
    <marker id="arr-amber-2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <polygon points="0,0 7,3 0,6" fill="#d97706" />
    </marker>
    <marker id="arr-red-2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <polygon points="0,0 7,3 0,6" fill="#dc2626" />
    </marker>
  </defs>

  <!-- Sàn ngang -->
  <line x1="24" y1="242" x2="380" y2="242" stroke="#334155" stroke-width="2.2" />
  <line x1="40" y1="250" x2="48" y2="242" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="70" y1="250" x2="78" y2="242" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="100" y1="250" x2="108" y2="242" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="130" y1="250" x2="138" y2="242" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="160" y1="250" x2="168" y2="242" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="190" y1="250" x2="198" y2="242" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="220" y1="250" x2="228" y2="242" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="250" y1="250" x2="258" y2="242" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="280" y1="250" x2="288" y2="242" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="310" y1="250" x2="318" y2="242" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="340" y1="250" x2="348" y2="242" stroke="#94a3b8" stroke-width="1.5" />

  <!-- Lăng trụ A -->
  <polygon points="80,242 350,242 350,107" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.2" />
  <text x="275" y="214" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0369a1">A (m<tspan dy="3" font-size="10">1</tspan><tspan dy="-3">)</tspan></text>
  <!-- Góc alpha -->
  <path d="M 134 242 A 54 54 0 0 0 128 218" fill="none" stroke="#0369a1" stroke-width="1.8" />
  <text x="145" y="233" font-family="sans-serif" font-size="13" font-weight="700" fill="#0369a1">α</text>

  <!-- Lực F và tọa độ x -->
  <line x1="25" y1="204" x2="76" y2="204" stroke="#dc2626" stroke-width="2.6" marker-end="url(#arr-red-2)" />
  <text x="48" y="194" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#dc2626">F</text>
  <line x1="75" y1="120" x2="75" y2="152" stroke="#64748b" stroke-width="1.5" />
  <line x1="75" y1="136" x2="128" y2="136" stroke="#0284c7" stroke-width="2" marker-end="url(#arr-blue-2)" />
  <text x="102" y="126" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0284c7">x</text>
  <text x="215" y="272" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="600" fill="#dc2626">Ma sát trượt động f<tspan dy="3" font-size="9">đ</tspan></text>

  <!-- Ống trụ mỏng B lăn không trượt trên mặt nghiêng -->
  <circle cx="200" cy="144" r="34" fill="#fef3c7" stroke="#d97706" stroke-width="2.4" />
  <circle cx="200" cy="144" r="26" fill="#ffffff" stroke="#d97706" stroke-width="1.6" />
  <circle cx="200" cy="144" r="3.5" fill="#0f172a" />
  <line x1="200" y1="144" x2="222" y2="126" stroke="#b45309" stroke-width="1.6" />
  <text x="216" y="140" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309">r</text>
  <text x="186" y="148" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a">B</text>
  <circle cx="215" cy="174.5" r="3.5" fill="#0d9488" />
  <text x="232" y="187" font-family="sans-serif" font-size="12" font-weight="700" fill="#0d9488">I</text>

  <!-- Mũi tên quay phi và ngẫu M cùng KĐH -->
  <path d="M 164 114 A 46 46 0 0 1 232 108" fill="none" stroke="#0d9488" stroke-width="2.2" marker-end="url(#arr-teal-2)" />
  <text x="198" y="88" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0d9488">φ, ngẫu M</text>

  <!-- Hộp bên phải: Cộng vectơ vận tốc & chú thích J_B -->
  <rect x="404" y="22" width="256" height="256" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="532" y="46" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a">Vận tốc tâm B &amp; Động năng</text>

  <circle cx="442" cy="166" r="4" fill="#0f172a" />
  <text x="428" y="170" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">B</text>

  <!-- Vectơ v_e ngang -->
  <line x1="442" y1="170" x2="538" y2="170" stroke="#0284c7" stroke-width="2.4" marker-end="url(#arr-blue-2)" />
  <text x="490" y="190" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0284c7">v<tspan dy="3" font-size="9">e</tspan><tspan dy="-3"> = dx/dt</tspan></text>

  <!-- Vectơ v_td lên dốc (vẽ minh họa 35 deg cho góc thoáng rõ) -->
  <line x1="442" y1="170" x2="508" y2="122" stroke="#0d9488" stroke-width="2.4" marker-end="url(#arr-teal-2)" />
  <text x="462" y="114" font-family="sans-serif" font-size="12" font-weight="700" fill="#0d9488">v<tspan dy="3" font-size="9">td</tspan><tspan dy="-3"> = r·dφ/dt</tspan></text>

  <!-- Hợp vectơ v_B -->
  <line x1="538" y1="170" x2="604" y2="122" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,3" />
  <line x1="508" y1="122" x2="604" y2="122" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,3" />
  <line x1="442" y1="170" x2="600" y2="123" stroke="#d97706" stroke-width="2.6" marker-end="url(#arr-amber-2)" />
  <text x="616" y="122" font-family="sans-serif" font-size="13" font-weight="700" fill="#b45309">v<tspan dy="3" font-size="9">B</tspan></text>

  <!-- Cung góc alpha -->
  <path d="M 498 170 A 56 56 0 0 0 487 137" fill="none" stroke="#0d9488" stroke-width="1.6" />
  <text x="510" y="164" font-family="sans-serif" font-size="12" font-weight="700" fill="#0d9488">α</text>

  <text x="532" y="220" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="600" fill="#334155">v<tspan dy="3" font-size="9">B</tspan><tspan dy="-3">² = (dx/dt)² + r²(dφ/dt)² + 2r·x'φ' cos α</tspan></text>
  <text x="532" y="246" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#b45309">Ống trụ mỏng: J<tspan dy="3" font-size="9">B</tspan><tspan dy="-3"> = m</tspan><tspan dy="3" font-size="9">2</tspan><tspan dy="-3">r² (không có 1/2!)</tspan></text>
</svg>
<div class="figure-caption">

Hình 17-2: Mô hình 2 — Lăng trụ trượt $A(m_1)$ + Ống trụ mỏng $B(m_2)$ lăn không trượt (Đề `1721` Bài 4)

</div>
</div>

---

### 17.2. Công thức khuôn tính $v_B^2$ bằng 2 cách cho 100% người mất gốc

Dù bạn nhìn hình theo phương pháp **Cộng vectơ** hay giải tích **Đạo hàm tọa độ $(x_B, y_B)$**, cả hai cách luôn cho ra **cùng một công thức khuôn**:

$$v_B^2 = v_1^2 + v_{\text{td}}^2 + 2 v_1 v_{\text{td}} \cos(\text{góc hợp})$$

- **Cách 1 — Cộng vectơ ($\vec{v}_B = \vec{v}_e + \vec{v}_r$ — tính trong `15` giây):**
  1. Giữ $q_2$ cố định ($\dot{q}_2 = 0$), xem điểm $B$ đi cùng khâu $1$ với vận tốc kéo theo $\vec{v}_e$ (độ lớn $v_1$).
  2. Giữ khâu $1$ đứng yên ($\dot{q}_1 = 0$), cho $q_2$ tăng theo chiều dương của đề để vẽ vectơ vận tốc tương đối $\vec{v}_r$ (độ lớn $v_{\text{td}}$).
  3. Đặt hai vectơ chung gốc $B$ để đọc **góc hợp $\theta_{\text{hợp}} = (\widehat{\vec{v}_e,\; \vec{v}_r})$**, rồi áp dụng định lý hàm $\cos$ cộng vectơ:
     $$v_B^2 = v_e^2 + v_r^2 + 2 v_e v_r \cos\theta_{\text{hợp}}$$
  *(Lưu ý: $\theta_{\text{hợp}}$ là góc giữa **hai mũi tên vận tốc**, nếu mũi tên này hướng vào góc thì phải tịnh tiến cho hai đuôi trùng nhau trước khi đo góc!)*

- **Cách 2 — Đạo hàm tọa độ $(x_B, y_B)$ (bảo hiểm `100%` không bao giờ sai dấu):**
  1. Chọn hệ trục cố định $Oxy$ ($Ox$ ngang sang phải, $Oy$ thẳng đứng lên).
  2. Chiếu hình học viết $x_B(q_1, q_2)$ và $y_B(q_1, q_2)$.
  3. Lấy đạo hàm theo $t$ thu được $\dot{x}_B, \dot{y}_B$, rồi tính $v_B^2 = \dot{x}_B^2 + \dot{y}_B^2$. Dùng $\sin^2 + \cos^2 = 1$ và công thức $\cos(a \mp b)$ sẽ ra ngay biểu thức rút gọn.

---

### 17.3. Kiểm chứng chi tiết trên 5 đề thi thật HCMUT

#### 1. Đề `1821` Câu 9 (`9a`) & Câu 11 (`11d`) — Con lắc Eliptic $A(m_1) + B(m_2)$ (Trang 2–3 PDF)

- **Cách đạo hàm tọa độ (chặt chẽ 100%):**
  Từ Hình 17-1, tọa độ quả cầu $B$ theo $(x, \varphi)$:
  $$x_B = x + l\sin\varphi, \qquad y_B = -l\cos\varphi$$
  Lấy đạo hàm theo thời gian $t$:
  $$\dot{x}_B = \dot{x} + l\dot{\varphi}\cos\varphi, \qquad \dot{y}_B = l\dot{\varphi}\sin\varphi$$
  Bình phương cộng lại:
  $$\begin{aligned}
  V_B^2 &= (\dot{x} + l\dot{\varphi}\cos\varphi)^2 + (l\dot{\varphi}\sin\varphi)^2 \\
        &= \dot{x}^2 + 2l\dot{x}\dot{\varphi}\cos\varphi + l^2\dot{\varphi}^2(\cos^2\varphi + \sin^2\varphi) \\
        &= \dot{x}^2 + l^2\dot{\varphi}^2 + 2l\dot{x}\dot{\varphi}\cos\varphi
  \end{aligned}$$
  $\implies V_B = \sqrt{(\dot{x})^2 + l^2(\dot{\varphi})^2 + 2l\dot{x}\dot{\varphi}\cos\varphi}$ $\implies$ **Chốt Đáp án `9a`!**
- **Động năng toàn hệ (Câu 11):** Quả cầu $B$ coi là chất điểm (đề bỏ qua kích thước/mômen quán tính quay riêng của cầu), con trượt $A$ tịnh tiến ngang:
  $$\begin{aligned}
  T &= \frac{1}{2}m_1\dot{x}^2 + \frac{1}{2}m_2 V_B^2 \\
    &= 0{,}5(m_1 + m_2)\dot{x}^2 + 0{,}5 m_2 l^2\dot{\varphi}^2 + m_2 l\dot{x}\dot{\varphi}\cos\varphi
  \end{aligned}$$
  $\implies$ **Chốt Đáp án `11d`!** *(Khớp key chính thức trang 5 PDF).*

::: info Biến thể rất hay gặp: Đề `0002/2015` Câu 9 (`9a`) & Câu 11 (`11c`) (Trang 41–42 PDF)
Nếu quả cầu $B$ được thay bằng **thanh mảnh đồng chất $AB$ chiều dài $2a$, khối lượng $m_2$** (tức khối tâm $C$ cách $A$ đoạn $a$):
- Vận tốc khối tâm $C$: $V_C = \sqrt{\dot{x}^2 + a^2\dot{\varphi}^2 + 2a\cos\varphi\,\dot{x}\dot{\varphi}}$ (**`9a`**).
- Khi tính động năng $T$, ngoài $\frac{1}{2}m_2 V_C^2$, bắt buộc phải **cộng thêm động năng quay quanh khối tâm $C$** ($\frac{1}{2}J_C\dot{\varphi}^2$ với $J_C = \frac{1}{12}m_2(2a)^2 = \frac{1}{3}m_2 a^2$):
  $$\frac{1}{2}m_2 a^2\dot{\varphi}^2 + \frac{1}{2}\left(\frac{1}{3}m_2 a^2\right)\dot{\varphi}^2 = \frac{2}{3}m_2 a^2\dot{\varphi}^2$$
  nên $T = \frac{1}{2}(m_1 + m_2)\dot{x}^2 + \frac{2}{3}m_2 a^2\dot{\varphi}^2 + m_2 a\cos\varphi\,\dot{x}\dot{\varphi}$ (**`11c`**)!
:::

#### 2. Đề `1721` Câu 10 (`10c`) — Lăng trụ $A(m_1)$ + Ống trụ mỏng $B(m_2)$ (Trang 9 PDF)

- Lăng trụ $A$ tịnh tiến ngang $\implies T_A = \frac{1}{2}m_1\dot{x}^2$.
- Ống trụ $B$ chuyển động song phẳng gồm hai thành phần:
  1. **Vận tốc tâm $B$:** Khi $x$ tăng sang phải ($\vec{v}_e$ ngang, độ lớn $\dot{x}$) và $\varphi$ tăng cùng chiều kim đồng hồ (ống lăn không trượt **lên dốc**, $\vec{v}_{\text{td}}$ dọc theo mặt nghiêng hướng lên góc $\alpha$, độ lớn $r\dot{\varphi}$):
     $$v_B^2 = \dot{x}^2 + r^2\dot{\varphi}^2 + 2r\dot{x}\dot{\varphi}\cos\alpha$$
  2. **Quay quanh tâm $B$:** Đề ghi rất rõ $B$ là **ống trụ tròn, mỏng, đồng chất, không đáy** nên mômen quán tính là $J_B = m_2 r^2$ (KHÔNG có $\frac{1}{2}$ như trụ đặc!).
- Cộng hai phần động năng của $B$:
  $$\begin{aligned}
  T_B &= \frac{1}{2}m_2 v_B^2 + \frac{1}{2}J_B \dot{\varphi}^2 \\
      &= \frac{1}{2}m_2\dot{x}^2 + \frac{1}{2}m_2 r^2\dot{\varphi}^2 + m_2 r\dot{x}\dot{\varphi}\cos\alpha + \frac{1}{2}(m_2 r^2)\dot{\varphi}^2 \\
      &= \frac{1}{2}m_2\dot{x}^2 + m_2 r^2\dot{\varphi}^2 + m_2 r\dot{x}\dot{\varphi}\cos\alpha
  \end{aligned}$$
- Cộng với $T_A$ ta thu được:
  $$T^{\text{hệ}} = 0{,}5(m_1 + m_2)\dot{x}^2 + m_2 r^2\dot{\varphi}^2 + m_2 r\dot{x}\dot{\varphi}\cos\alpha$$
  $\implies$ **Chốt Đáp án `10c`!**

#### 3. Đề `1722` Bài 4 Câu 11 (`11d`) — Ròng rọc tầng $O$ + Ròng rọc động $O_2$ (Trang 13 PDF)

*(Lưu ý: trong Bài 4 Đề `1722`, Câu 10 hỏi $Q_1, Q_2$ sẽ giải chi tiết ở Ngày 18, còn Câu 11 hỏi động năng $T$.)*
- **Ròng rọc cố định $O$** (khối lượng $m_1$, bán kính quán tính $\rho \implies J_O = m_1\rho^2$):
  $$T_O = \frac{1}{2}J_O\dot{\varphi}_1^2 = \frac{1}{2}m_1\rho^2\dot{\varphi}_1^2$$
- **Tải $B$** nối với tầng ngoài bán kính $R$ của $O$: $v_B = R\dot{\varphi}_1 \implies T_B = \frac{1}{2}m_B R^2\dot{\varphi}_1^2$.
- **Ròng rọc động $O_2$** (trụ tròn đặc khối lượng $m_2$, bán kính $r_2 \implies J_{O_2} = \frac{1}{2}m_2 r_2^2$): dây quấn tầng trong $r$ của $O$ nối trực tiếp vào trục tâm $O_2$, nên khi $O$ quay góc $\varphi_1$ (ngược KĐH), tâm $O_2$ hạ xuống với tốc độ $v_{O_2} = r\dot{\varphi}_1$, đồng thời đĩa $O_2$ tự quay thêm góc $\varphi_2$:
  $$\begin{aligned}
  T_{O_2} &= \frac{1}{2}m_2(r\dot{\varphi}_1)^2 + \frac{1}{2}\left(\frac{1}{2}m_2 r_2^2\right)\dot{\varphi}_2^2 \\
          &= \frac{1}{2}m_2 r^2\dot{\varphi}_1^2 + \frac{1}{4}m_2 r_2^2\dot{\varphi}_2^2
  \end{aligned}$$
- **Tải $A$** treo ở nhánh dây quấn lên mép phải của đĩa $O_2$: khi $\varphi_1$ tăng làm tâm $O_2$ đi xuống $r\dot{\varphi}_1$ và $\varphi_2$ quay cùng KĐH (theo mũi tên hình vẽ trang 13) làm mép phải thả dây xuống thêm $r_2\dot{\varphi}_2$:
  $$v_A = r\dot{\varphi}_1 + r_2\dot{\varphi}_2, \qquad T_A = \frac{1}{2}m_A\left(r\dot{\varphi}_1 + r_2\dot{\varphi}_2\right)^2$$
- Cộng 4 phần động năng lại:
  $$\begin{aligned}
  T &= 0{,}5\left(m_B R^2 + m_1\rho^2 + m_2 r^2 + m_A r^2\right)\dot{\varphi}_1^2 \\
    &\quad + 0{,}5(0{,}5m_2 + m_A)r_2^2\dot{\varphi}_2^2 + m_A r r_2\dot{\varphi}_1\dot{\varphi}_2
  \end{aligned}$$
  $\implies$ **Chốt Đáp án `11d`!** *(Bẫy ở `11a, 11b` đánh tráo $m_1\rho^2$ thành $0{,}5m_1\rho^2$ hoặc $0{,}5m_1 R^2$, và nhầm $r$ thành $R$).*

#### 4. Đề `0001/2016` Câu 7–9 (`7e, 8c, 9a`) — Ròng rọc động hai tầng $O_3$ (Trang 24–25 PDF)

- **Dữ kiện chuẩn:** $R_2 = 2r_1 = R_3 = 2r_3 = 2r \implies r_1 = r_3 = r$ và $R_2 = R_3 = 2r$.
- **Quan hệ vận tốc hai nhánh dây đứng treo $O_3$ (lấy chiều dương hướng LÊN):**
  - Nhánh dây trái nối tầng nhỏ $r_1 = r$ của ròng rọc $O_1$ (mũi tên $\bar{\varphi}_1$ quay ngược KĐH — CCW) vào mép trái tầng nhỏ $r_3 = r$ của $O_3$: $v_{\text{trái}\uparrow} = +r\dot{\varphi}_1$.
  - Nhánh dây phải (treo vành phải $R_3 = 2r$ của $O_3$) vắt lên nhánh trái tầng $R_2 = 2r$ của ròng rọc $O_2$: trên hình vẽ (trang 24 PDF), mũi tên $\bar{\varphi}_2$ quay ngược KĐH (CCW, hướng **lên** ở nhánh phải của $O_2$), nên kéo **nhánh trái** của $O_2$ đi xuống $2r\dot{\varphi}_2$ cùng với vành phải $O_3$, tức $v_{\text{phải}\uparrow} = -2r\dot{\varphi}_2$.
- **Mẹo nội suy 2 nhánh dây cách nhau $r_3 + R_3 = 3r$:**
  - Vận tốc góc quay **cùng chiều kim đồng hồ** của $O_3$:
    $$\begin{aligned}
    \omega_{3,\text{CW}} &= \frac{v_{\text{trái}\uparrow} - v_{\text{phải}\uparrow}}{r_3 + R_3} \\
                         &= \frac{r\dot{\varphi}_1 - (-2r\dot{\varphi}_2)}{3r} = \frac{\dot{\varphi}_1 + 2\dot{\varphi}_2}{3}
    \end{aligned}$$
  - **Câu 7:** Để $O_3$ quay cùng KĐH cần $\omega_{3,\text{CW}} > 0$, tức $\dot{\varphi}_1 + 2\dot{\varphi}_2 > 0$, suy ra $\dot{\varphi}_1 > -2\dot{\varphi}_2$ $\implies$ **Chốt `7e`!**
  - **Câu 8:** Để $O_3$ tịnh tiến tức thời cần $\omega_{3,\text{CW}} = 0$, suy ra $\dot{\varphi}_1 = -2\dot{\varphi}_2$ $\implies$ **Chốt `8c`!**
  - **Vận tốc đi lên của tâm $O_3$ (và tải $A$):**
    $$\begin{aligned}
    v_{O_3\uparrow} &= v_{\text{trái}\uparrow} - r_3 \omega_{3,\text{CW}} \\
                    &= r\dot{\varphi}_1 - r\frac{\dot{\varphi}_1 + 2\dot{\varphi}_2}{3} = \frac{2}{3}r(\dot{\varphi}_1 - \dot{\varphi}_2)
    \end{aligned}$$
- **Câu 9 — Động năng toàn hệ:**
  $$\begin{aligned}
  T &= \frac{1}{2}J_{O_1}\dot{\varphi}_1^2 + \frac{1}{2}J_{O_2}\dot{\varphi}_2^2 + \frac{1}{2}(m_3 + m_A)v_{O_3}^2 + \frac{1}{2}J_{O_3}\omega_3^2 \\
    &= \frac{1}{2}\left(J_{O_1} + \frac{4}{9}m_3 r^2 + \frac{1}{9}J_{O_3} + \frac{4}{9}m_A r^2\right)\dot{\varphi}_1^2 \\
    &\quad + \frac{1}{2}\left(J_{O_2} + \frac{4}{9}m_3 r^2 + \frac{4}{9}J_{O_3} + \frac{4}{9}m_A r^2\right)\dot{\varphi}_2^2 \\
    &\quad + \frac{2}{9}\left[J_{O_3} - 2(m_3 + m_A)r^2\right]\dot{\varphi}_1\dot{\varphi}_2
  \end{aligned}$$
  $\implies$ **Chốt `9a`!**

#### 5. Đề `0002/2016` Câu 7 (`7a`) — Đĩa tròn $O(m_1, R)$ lăn trên nêm + Thanh $OA(m_2, L)$ (Trang 27 PDF)

- **Chiều dương tọa độ trên hình vẽ:** $x$ là độ dời của tâm $O$ đi **xuống dốc** (nghiêng góc $\alpha$ sang trái), $\varphi$ là góc lệch của thanh $OA$ so với phương thẳng đứng hướng xuống về **bên trái**.
- **Tọa độ khối tâm $C$ của thanh đồng chất $OA$** (trong hệ trục $O_0 xy$ cố định với $O_0 x$ sang phải, $O_0 y$ hướng lên):
  $$x_C = -x\cos\alpha - \frac{L}{2}\sin\varphi, \qquad y_C = -x\sin\alpha - \frac{L}{2}\cos\varphi$$
- Lấy đạo hàm và tính bình phương vận tốc $v_C^2$:
  $$\begin{aligned}
  \dot{x}_C &= -\dot{x}\cos\alpha - \frac{L}{2}\dot{\varphi}\cos\varphi, \\
  \dot{y}_C &= -\dot{x}\sin\alpha + \frac{L}{2}\dot{\varphi}\sin\varphi, \\
  v_C^2 &= \dot{x}_C^2 + \dot{y}_C^2 = \dot{x}^2 + \frac{L^2}{4}\dot{\varphi}^2 + L\dot{x}\dot{\varphi}\left(\cos\alpha\cos\varphi - \sin\alpha\sin\varphi\right) \\
        &= \dot{x}^2 + \frac{L^2}{4}\dot{\varphi}^2 + L\dot{x}\dot{\varphi}\cos(\alpha + \varphi)
  \end{aligned}$$
- **Động năng toàn hệ** (đĩa đặc $O$ lăn không trượt góp $\frac{3}{4}m_1\dot{x}^2$; thanh $OA$ song phẳng góp $\frac{1}{2}m_2 v_C^2 + \frac{1}{2}\left(\frac{1}{12}m_2 L^2\right)\dot{\varphi}^2$):
  $$\begin{aligned}
  T &= \frac{3}{4}m_1\dot{x}^2 + \frac{1}{2}m_2\left[\dot{x}^2 + \frac{L^2}{4}\dot{\varphi}^2 + L\dot{x}\dot{\varphi}\cos(\alpha + \varphi)\right] + \frac{1}{24}m_2 L^2\dot{\varphi}^2 \\
    &= \left(\frac{3}{4}m_1 + \frac{1}{2}m_2\right)\dot{x}^2 + \frac{1}{6}m_2 L^2\dot{\varphi}^2 + \frac{1}{2}m_2 L\dot{\varphi}\dot{x}\cos(\alpha + \varphi)
  \end{aligned}$$
  $\implies$ **Chốt `7a`!**

---

## Ngày 18: Chương 15 (Bước 3 & 4) — Mục `15.1` Đalămbe–Lagrange, Lực Suy Rộng $Q_i$ & Tuyệt Chiêu 15 Giây

::: info Mục 15.1 $\to$ 15.2: Cầu nối từ Phương trình tổng quát Động lực học sang Lagrange loại II
Để nắm bản chất trước khi tính $Q_i$, hãy nhớ đúng 1 bước chuyển tiếp từ Chương 14: chỉ cần lấy **Phương trình tổng quát Tĩnh học** ($\sum \vec{F}_k \cdot \delta\vec{r}_k = 0$) gắn thêm **lực quán tính $-m_k \vec{a}_k$** là thành ngay **Phương trình vi phân tổng quát Động lực học (`15.1`, Đalămbe–Lagrange)**:
$$\sum \left(\vec{F}_k^{(e)} - m_k \vec{a}_k\right) \cdot \delta\vec{r}_k = 0$$
Từ đây, biểu diễn $\delta\vec{r}_k$ qua các tọa độ suy rộng độc lập $\delta q_i$, vế lực hoạt động cho ta **lực suy rộng $Q_i$**, còn vế lực quán tính rút gọn thành vế trái đạo hàm động năng $T$ — chính là **Phương trình Lagrange loại II (`15.2`)**:
$$\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_i}\right) - \frac{\partial T}{\partial q_i} = Q_i \quad (i = 1, 2, \dots, s)$$
:::

### 18.1. Cách tính lực suy rộng $Q_1, Q_2$ và 3 bẫy kinh điển

Ta dùng phương pháp **công khả dĩ** $\delta A = Q_1 \delta q_1 + Q_2 \delta q_2$:
- **Tìm $Q_1$:** Khóa $q_2 = \text{const}$ ($\delta q_2 = 0$), chỉ cho $q_1$ tăng một lượng dương $\delta q_1 > 0$. Tính tổng công của mọi lực hoạt động (và lực ma sát trượt) rồi bỏ $\delta q_1 \implies Q_1$.
- **Tìm $Q_2$:** Khóa $q_1 = \text{const}$ ($\delta q_1 = 0$), chỉ cho $q_2$ tăng một lượng dương $\delta q_2 > 0$. Tính tổng công rồi bỏ $\delta q_2 \implies Q_2$.

::: danger BẪY SỐ 1 — Chọn gốc tọa độ lò xo $\Delta l$ (VTCB tĩnh vs Không biến dạng) & Lực ma sát con trượt
Đây là bẫy cướp điểm nhiều nhất ở câu $Q_1, Q_2$ trong đề `AS1003`:

1. **Khi đề lấy gốc $x = 0$ tại vị trí LÒ XO KHÔNG BIẾN DẠNG:**
   - Phải cộng ĐỦ **lực đàn hồi $-kx$**, **trọng lực $\pm mg\sin\alpha$**, và **lực/ngẫu lực hằng**!
   - *Kiểm chứng **Đề `0002/2016` Câu 9 (`9c` — trang 28 PDF)**:* Lấy gốc $x=0$ tại lò xo không biến dạng, chiều dương $x$ xuống dốc, ngẫu $M$ quay đĩa lăn xuống dốc ($\delta\theta = \delta x / R$):
     $$Q_x = \frac{M}{R} + (m_1 + m_2)g\sin\alpha - kx \implies \text{Chốt } \mathbf{9c}$$

2. **Khi đề lấy gốc $x = 0$ tại VỊ TRÍ CÂN BẰNG TĨNH (VTCB tĩnh) của hệ đầy đủ:**
   - Tại VTCB tĩnh ($x = 0, \varphi = 0$), lò xo đã dãn sẵn lượng $\Delta l_0$ sao cho $k\Delta l_0 = \frac{M}{R} + (m_1+m_2)g\sin\alpha$. Khi trượt thêm đoạn $x$, lực đàn hồi là $-k(\Delta l_0 + x)$, nên **các lực hằng tự triệt tiêu nhau hoàn toàn**, trong $Q_x$ **CHỈ CÒN DUY NHẤT $-kx$**!
   - *Kiểm chứng **Đề `0002/2016` Câu 8 (trang 28 PDF)**:* Lấy gốc $x=0$ tại VTCB tĩnh của hệ đầy đủ $\implies Q_x = -kx$. Còn với $\varphi$: khi $\varphi$ tăng từ $0$, thanh $OA$ vểnh lên trái nên khối tâm $C$ có $y_C = -\frac{L}{2}\cos\varphi \implies \delta y_C = +\frac{L}{2}\sin\varphi\,\delta\varphi$ (đi LÊN!), trọng lực $m_2 g$ hướng xuống sinh công âm $\delta A_\varphi = -m_2 g\frac{L}{2}\sin\varphi\,\delta\varphi \implies Q_\varphi = -\frac{L}{2}m_2 g\sin\varphi$.
   - **CẢNH BÁO BẪY SCAN PDF TRANG 28:** Trên trang 28 của tập đề scan, có nét bút chì khoanh nhầm phương án `8b` ($Q_\varphi = +\frac{L}{2}m_1 g\sin\varphi$ — sai cả dấu $+$ lẫn khối lượng $m_1$ thay vì $m_2$). Kiểm toán bằng `SymPy` và đối chiếu ngay với vế phải phương trình 2 của Câu `10a` trên chính trang đó (`-\frac{L}{2}m_2 g\sin\varphi`) cho thấy đáp án chuẩn toán học của Câu 8 bắt buộc là **`8d`**!

3. **Lực ma sát trượt động $\mu$ (hoặc $f_{\text{đ}}$) tác dụng lên con trượt mang con lắc — Đề `1821` Câu 10 (`10b` — trang 3 & 5 PDF):**
   - **Nguyên văn Bài 3 trang 2 PDF:** Con trượt $A$ khối lượng $m_1$ trượt theo phương $Ax$ trên mặt phẳng ngang với hệ số ma sát trượt động $\mu$, nối quả cầu $B$ khối lượng $m_2$ qua thanh nhẹ $AB$ dài $l$. *(Lưu ý ký hiệu: tùy mã đề HCMUT ghi hệ số ma sát trượt động là $\mu$ như Đề `1821`, hoặc $f_{\text{đ}}$ như Đề `1721` — bản chất hoàn toàn giống nhau).*
   - **Tại sao đáp án chính thức trang 5 là `10b`: $Q_1 = -\mu(m_1 + m_2)g,\; Q_2 = -m_2 g l\sin\varphi$?**
     - Khi cho $\delta x > 0$, giữ $\varphi = \text{const}$: quả cầu $B$ dịch ngang cùng độ cao nên trọng lực không sinh công theo $\delta x$. Tuy nhiên, mặt sàn ngang đỡ con trượt $A$ phải gánh **trọng lượng của CẢ con trượt $m_1$ lẫn quả cầu $m_2$** truyền qua thanh $AB$: trong bài thi HCMUT, lực ma sát trượt động ở $Q_1$ áp dụng **mô hình áp lực pháp tuyến tĩnh chuẩn** $N = (m_1 + m_2)g$ (xem chuyển động gần vị trí cân bằng đứng $\varphi$ nhỏ nên bỏ qua thành phần phi tuyến chứa $\dot{\varphi}^2, \ddot{\varphi}$ theo phương đứng). Do đó lực ma sát cản chuyển động có độ lớn $F_{\text{ms}} = \mu(m_1 + m_2)g$, ngược chiều $+Ox$:
       $$\delta A_1 = -\mu(m_1 + m_2)g\,\delta x \implies Q_1 = -\mu(m_1 + m_2)g$$
     - Khi cho $\delta\varphi > 0$, giữ $x = \text{const}$: con trượt $A$ đứng yên nên ma sát không sinh công; quả cầu $B$ nâng độ cao thêm $\delta y_B = \delta(-l\cos\varphi) = l\sin\varphi\,\delta\varphi$, trọng lực hướng xuống sinh công âm:
       $$\delta A_2 = -m_2 g l\sin\varphi\,\delta\varphi \implies Q_2 = -m_2 g l\sin\varphi$$
   - **Hai bẫy thường gặp ở câu này:** Quên $m_2$ (viết thành $-\mu m_1 g$), hoặc quên dấu trừ (hoặc nhầm $\sin\varphi$ thành $\cos\varphi$).
:::

**Kiểm chứng nhanh $Q_1, Q_2$ trên 3 đề còn lại:**
- **Đề `1721` Câu 11 (`11d` — trang 9 PDF):**
  - Theo $\delta x > 0$ ($\varphi = \text{const}$): lực $F$ kéo sang phải ($+F$), ma sát trượt động trên sàn (Đề `1721` ký hiệu là $f_{\text{đ}}$) gánh cả $m_1 + m_2$ cản lại ($-f_{\text{đ}}(m_1 + m_2)g$) $\implies Q_1 = F - f_{\text{đ}}(m_1 + m_2)g$.
  - Theo $\delta\varphi > 0$ ($x = \text{const}$): ngẫu $\mathfrak{M}$ cùng chiều $\varphi$ ($+\mathfrak{M}$), ống trụ $B$ lăn **lên dốc** nên nâng độ cao $\delta y_B = r\sin\alpha\,\delta\varphi$, trọng lực $m_2 g$ sinh công âm $\implies Q_2 = \mathfrak{M} - m_2 g r\sin\alpha$ $\implies$ **Chốt `11d`!**
- **Đề `1722` Câu 10 (`10a` — trang 13 PDF):**
  - Theo $\delta\varphi_1 > 0$ ($\varphi_2 = \text{const}$): ngẫu $M_1$ cùng chiều $\varphi_1$ ($+M_1$); tải $B$ đi **lên dốc** đoạn $R\delta\varphi_1$ (trọng lực cản $-m_B g R\sin\alpha$); trục $O_2$ và tải $A$ cùng **hạ xuống** đoạn $r\delta\varphi_1$ (trọng lực kéo xuống $+(m_2 + m_A)g r$) $\implies Q_1 = M_1 - m_B g R\sin\alpha + (m_2 + m_A)g r$.
  - Theo $\delta\varphi_2 > 0$ ($\varphi_1 = \text{const}$): ngẫu $M_2$ cùng chiều $\varphi_2$ ($+M_2$); chỉ tải $A$ hạ thêm $r_2\delta\varphi_2$ ($+m_A g r_2$) $\implies Q_2 = M_2 + m_A g r_2$ $\implies$ **Chốt `10a`!**
- **Đề `0001/2016` Câu 10 (`10b` — trang 25 PDF):**
  - Theo $\delta\varphi_1 > 0$: $M_1$ cùng chiều $\varphi_1$ ($+M_1$), cụm $(m_3 + m_A)$ đi lên $\frac{2}{3}r\delta\varphi_1$ $\implies Q_1 = M_1 - \frac{2}{3}r(m_3 + m_A)g$.
  - Theo $\delta\varphi_2 > 0$: $M_2$ **ngược chiều** $\varphi_2$ trên hình vẽ ($-M_2$), cụm $(m_3 + m_A)$ đi xuống $\frac{2}{3}r\delta\varphi_2$ $\implies Q_2 = \frac{2}{3}r(m_3 + m_A)g - M_2$ $\implies$ **Chốt `10b`!**

---

### 18.2. TUYỆT CHIÊU 15 GIÂY NHẬN DIỆN ĐÁP ÁN HỆ 2 PT LAGRANGE II (ĂN CHẮC ĐÚNG + BẮT BẪY `e`)

Trong hơn `90%` đề thi Cuối kỳ `AS1003`, động năng hệ `2` bậc tự do $(q_1 = x,\; q_2 = \varphi)$ sau khi tính xong ở Bước 2 có dạng khuôn:

$$T = \frac{1}{2}A\dot{x}^2 + \frac{1}{2}B\dot{\varphi}^2 + C\cos\varphi\,\dot{x}\dot{\varphi}$$

*(Nếu số hạng chéo chứa $\cos(\alpha+\varphi)$ thì thay $\varphi \to \alpha+\varphi$; nếu chứa hằng số $\cos\alpha$ không có biến $\varphi$ thì xem $C\cos\alpha$ là hằng số và mọi số hạng đạo hàm theo $\varphi$ bằng $0$).*

Không cần đạo hàm rườm rà trong phòng thi, hãy ghi nhớ **hình dạng giải tích bất biến** của hai vế trái:

::: tip Khuôn Vàng 15 Giây của Hệ 2 Phương Trình Lagrange Loại II
1. **Phương trình 1 (theo biến $x$):**
   $$\begin{aligned}
   \frac{d}{dt}\left(\frac{\partial T}{\partial \dot{x}}\right) - \frac{\partial T}{\partial x}
   &= A\ddot{x} + (C\cos\varphi)\ddot{\varphi} \\
   &\quad - (C\sin\varphi)\dot{\varphi}^2 = Q_x
   \end{aligned}$$
   - **Kiểm tra 5 giây:** Số hạng vận tốc ở PT1 **BẮT BUỘC có dấu TRỪ** $-(C\sin\varphi)\dot{\varphi}^2$ (**CẤM dấu `+`**, **CẤM dùng $\cos\varphi$**, **CẤM xuất hiện $\dot{x}\dot{\varphi}$**!).

2. **Phương trình 2 (theo biến $\varphi$):**
   $$\begin{aligned}
   \frac{d}{dt}\left(\frac{\partial T}{\partial \dot{\varphi}}\right) - \frac{\partial T}{\partial \varphi}
   &= \frac{d}{dt}\left(C\cos\varphi\,\dot{x} + B\dot{\varphi}\right) - \left(-C\sin\varphi\,\dot{x}\dot{\varphi}\right) \\
   &= (C\cos\varphi)\ddot{x} - C\sin\varphi\,\dot{x}\dot{\varphi} + B\ddot{\varphi} + C\sin\varphi\,\dot{x}\dot{\varphi} \\
   &= (C\cos\varphi)\ddot{x} + B\ddot{\varphi} = Q_\varphi
   \end{aligned}$$
   - **Kiểm tra 5 giây:** **Hai số hạng $\mp C\sin\varphi\,\dot{x}\dot{\varphi}$ TỰ TRIỆT TIÊU NHAU!** Vì vậy PT2 **KHÔNG BAO GIỜ CÒN số hạng vận tốc $\dot{x}\dot{\varphi}$ hay $\dot{\varphi}^2$** (nếu đề ghi tường minh cả hai số hạng như Đề `0002/2016` Câu `10a` thì hai số hạng đó phải trái dấu và triệt tiêu vừa khít!).

3. **Kiểm tra đối xứng & dấu chuyển vế (5 giây cuối):**
   - **Tính đối xứng:** Khi chưa rút gọn hai vế, hệ số của $\ddot{\varphi}$ trong PT1 **bằng đúng** hệ số của $\ddot{x}$ trong PT2 (cùng là $C\cos\varphi$).
   - **Chuyển vế sang `= 0`:** Nếu đề chuyển hết $Q_i$ sang vế trái (`LHS - Q_i = 0`), **dấu của $Q_i$ phải bị đảo ngược**!
:::

#### Thực chiến 15 giây bắt gọn 4 đề thi thật HCMUT:

1. **Đề `1721` Câu 12 (`12e` — Bắt gọn bẫy đảo vị trí `12a` trong `15` giây!):**
   - Từ `10c` ($T = 0{,}5(m_1+m_2)\dot{x}^2 + m_2 r^2\dot{\varphi}^2 + m_2 r\cos\alpha\,\dot{x}\dot{\varphi}$) và `11d`:
     - Vì $\alpha$ là hằng số (không phụ thuộc $\varphi$), cả hai phương trình đều **không có số hạng vận tốc $\dot{\varphi}^2$**.
     - Hệ số đối xứng phải là $(m_2 r\cos\alpha)$ ở CẢ PT1 lẫn PT2, hệ số $\ddot{\varphi}$ ở PT2 là $2m_2 r^2$.
     - Vế phải chuẩn: PT1 là $F - f_{\text{đ}}(m_1+m_2)g$; PT2 là $\mathfrak{M} - m_2 g r\sin\alpha$.
   - **Soi đủ `5` phương án (`12a..12e`) trên Đề `1721` (trang 9 PDF) trong `15` giây:**
     - **Cảnh giác đảo vị trí:** Ở Đề `1721` Câu 12, **`12a`** mới là *"Các đáp án còn lại sai"*, còn **`12e`** là hệ `2` PTVP viết tường minh!
     - `12b`: PT2 sai hệ số chéo $m_1 r\cos\alpha$ (vi phạm đối xứng $m_2$), sai $2m_1 r^2$ (trên PDF) và sai dấu trọng lực $+m_2 g r\sin\alpha$ $\implies$ **LOẠI!**
     - `12c`: PT1 sai dấu ma sát $+f_{\text{đ}}(m_1+m_2)g$ (ma sát không thể đẩy cùng chiều kéo!), PT2 sai cả $m_1$ $\implies$ **LOẠI!**
     - `12d`: sai cả hai phương trình (nhầm hệ số $\ddot{x}$, $\ddot{\varphi}$ và dấu $-F$) $\implies$ **LOẠI!**
     - `12e`: đối chiếu thấy hệ `2` PTVP viết tường minh
       $$\begin{cases}
       (m_1 + m_2)\ddot{x} + (m_2 r\cos\alpha)\ddot{\varphi} = F - f_{\text{đ}}(m_1 + m_2)g \\
       (m_2 r\cos\alpha)\ddot{x} + (2m_2 r^2)\ddot{\varphi} = \mathfrak{M} - m_2 g r\sin\alpha
       \end{cases}$$
       khớp hoàn toàn phương trình Euler–Lagrange suy ra từ Câu `10c` và `11d` $\implies$ **LOẠI cả `12a` và chọn chính xác `12e`**!

2. **Đề `1821` Câu 12 (`12c` — Khớp key chính thức trang 5):**
   - Từ `11d`: PT1 phải có $-(m_2 l\sin\varphi)\dot{\varphi}^2$ và chuyển $Q_1 = -\mu(m_1+m_2)g$ sang vế trái thành $+\mu(m_1+m_2)g = 0$.
   - **Loại ngay trong 10 giây:** `12a` sai dấu $-\mu(m_1+m_2)g$ và sai $\cos\varphi\,\dot{\varphi}^2$; `12b` và `12d` sai dấu $+\cos\varphi\,\dot{\varphi}^2$!
   - **Kiểm tra `12c`:**
     $$\begin{cases}
     \begin{aligned}
     (m_1 + m_2)\ddot{x} &+ (m_2 l\cos\varphi)\ddot{\varphi} \\
                         &- (m_2 l\sin\varphi)\dot{\varphi}^2 + \mu(m_1+m_2)g = 0
     \end{aligned} \\
     (\cos\varphi)\ddot{x} + l\ddot{\varphi} + g\sin\varphi = 0
     \end{cases}$$
     *(PT2 đã chia cả hai vế cho $m_2 l$ và chuyển $-g\sin\varphi$ sang vế trái thành $+g\sin\varphi$, hoàn toàn không có $\dot{x}\dot{\varphi}$!)* $\implies$ **CHỐT NGAY `12c`!**

3. **Đề `1722` Câu 12 (`12c` — Trang 13 PDF):**
   - Từ `11d`: hệ số đối xứng của $\ddot{\varphi}_2$ (PT1) và $\ddot{\varphi}_1$ (PT2) phải là $m_A r r_2$ (loại ngay `12a` và `12d` vì dùng $m_A R r_2$).
   - Còn lại `12b` và `12c`: kiểm tra vế phải PT1 từ `10a` phải là $M_1 - m_B g R\sin\alpha + (m_2 + m_A)g r$ (`12b` sai dấu $-(m_2+m_A)g r$) $\implies$ **CHỐT NGAY `12c`!**

4. **Đề `0002/2016` Câu 10 (`10a` — Trang 28 PDF):**
   - Từ `7a` ($C = \frac{1}{2}m_2 L$, góc $\alpha+\varphi$): PT1 bắt buộc có dấu TRỪ $-\frac{1}{2}m_2 L\sin(\alpha+\varphi)\dot{\varphi}^2$ (loại ngay `10c` vì mang dấu `+`).
   - PT2 có hai số hạng $-\frac{1}{2}m_2 L\dot{x}\dot{\varphi}\sin(\alpha+\varphi) + \frac{1}{2}m_2 L\dot{\varphi}\dot{x}\sin(\alpha+\varphi) = 0$ triệt tiêu nhau, và vế phải là $-\frac{L}{2}m_2 g\sin\varphi$ (loại `10b` mang dấu `+`).
   - **CHỐT NGAY `10a`!**

---

## Ngày 19: "Sổ Tay Công Thức In A4 Mang Vào Phòng Thi AS1003"

Theo quy định phòng thi Cuối kỳ `AS1003` (ĐH Bách Khoa TPHCM), **sinh viên được phép mang tài liệu giấy**. Dưới đây là **Sổ Tay A4 Chuẩn 2 Mặt** (bạn có thể in trực tiếp phần này ra 1 tờ A4 in 2 mặt) gom trọn toàn bộ công thức sống còn của Chương 9–15:

### MẶT A4 SỐ 1: CHƯƠNG 9–13 (ĐỘNG HỌC PHỨC HỢP, ĐẶC TRƯNG KHỐI LƯỢNG, D'ALEMBERT & ĐỘNG NĂNG)

#### 1. Bảng Mômen Quán Tính $J_G$ Chuẩn & Định Lý Steiner–Huygens

| Hình dạng vật | Qua khối tâm $G$ | Trục khác<br>$J_O = J_G + md^2$ | Lưu ý bẫy |
| :--- | :--- | :--- | :--- |
| **Thanh mảnh**<br>chiều dài $L$ | $J_G = \dfrac{1}{12}mL^2$ | Qua đầu thanh:<br>$J_O = \dfrac{1}{3}mL^2$ | **Cấm** dời tiếp từ $J_{\text{đầu}}$! Luôn dời từ $J_G$. |
| **Đĩa / Trụ đặc**<br>bán kính $R$ | $J_G = \dfrac{1}{2}mR^2$ | Điểm tiếp xúc $I$:<br>$J_I = \dfrac{3}{2}mR^2$ | Đề cho bán kính quán tính $\rho$: $J_G = m\rho^2$. |
| **Vành / Ống mỏng**<br>bán kính $R$ | $J_G = mR^2$ | Điểm tiếp xúc $I$:<br>$J_I = 2mR^2$ | *Ống mỏng* ($mR^2$) khác *trụ đặc* ($\frac{1}{2}mR^2$). |
| **Khối cầu đặc**<br>bán kính $R$ | $J_G = \dfrac{2}{5}mR^2$ | Điểm trên mặt cầu:<br>$J_O = \dfrac{7}{5}mR^2$ | Đĩa $B$ nối thanh dài $L$:<br>$J_O = J_B + m_B OB^2$. |
| **Tấm chữ nhật**<br>cạnh $a \times b$ | $J_G = \dfrac{1}{12}m(a^2+b^2)$ | Tấm vuông cạnh $a$:<br>$J_G = \dfrac{1}{6}ma^2$ | Qua 1 đỉnh $A$ ($d^2 = \frac{a^2+b^2}{4}$):<br>$J_A = \frac{1}{3}m(a^2+b^2)$. |

#### 2. Hợp Chuyển Động (Ch.9), Song Phẳng & Công Thức Willis (Ch.10)

| Chuyên đề | Công thức cốt lõi | Quy tắc dấu & Cảnh báo bẫy |
| :--- | :--- | :--- |
| **Coriolis (Ch.9)** | $\vec{v}_a = \vec{v}_e + \vec{v}_r$<br>$\vec{a}_a = \vec{a}_e^n + \vec{a}_e^t + \vec{a}_r^n + \vec{a}_r^t + \vec{a}_c$<br>$\vec{a}_c = 2(\vec{\omega}_e \times \vec{v}_r)$<br>$a_c = 2\omega_e v_r \sin(\widehat{\vec{\omega}_e,\vec{v}_r})$ | **Nhớ số `2`** trước $\omega_e v_r$! Chiếu $\vec{v}_r$ lên mặt $\perp \vec{\omega}_e$, quay $90^\circ$ **theo chiều** $\vec{\omega}_e$ để được chiều $\vec{a}_c$. Nếu hệ theo chuyển động tịnh tiến cong $\implies \omega_e = 0 \implies a_c = 0$. |
| **Tâm tức thời $I$ & Con lăn (Ch.10)** | $\vec{v}_B = \vec{v}_A + \vec{v}_{BA}$<br>$v_A = \omega \cdot IA$, $v_B = \omega \cdot IB$<br>Con lăn trên nền yên:<br>$v_O = \omega R$, $v_{\text{đỉnh}} = 2\omega R$ | **Bẫy gia tốc tiếp xúc $I$:** $v_I = 0$ nhưng gia tốc tiếp xúc của đĩa KHÔNG bằng 0: $a_I^{\text{đĩa}} = \omega^2 R$ hướng vào tâm $O$! Còn $a_O = \varepsilon R$ song song nền. |
| **Công thức Willis (Hành tinh & Vi sai)** | $\dfrac{\bar{\omega}_k - \bar{\omega}_H}{\bar{\omega}_1 - \bar{\omega}_H} = i_{k1}^{(H)}$<br>$i_{k1}^{(H)} = (-1)^p \dfrac{Z_{\text{dẫn}}}{Z_{\text{bị dẫn}}} = (-1)^p \dfrac{Z_1}{Z_k}$ | **Bánh dẫn $Z_1$ trên tử, bánh bị dẫn $Z_k$ dưới mẫu** ($\bar{\omega}$ lấy giá trị đại số `+`/`-` theo CCW/CW). Cố định cần $H$ ($\bar{\omega}_H = 0$): mỗi cặp khớp **ngoài** góp dấu `(-)`, khớp **trong** góp dấu `(+)`. Bánh cố định đặt $\bar{\omega} = 0$. |

#### 3. Thu Gọn Lực Quán Tính D'Alembert (Ch.13)

Xét vật rắn khối lượng $m$ quay quanh trục cố định $O$ (hoặc chuyển động song phẳng có khối tâm $C$, vận tốc góc $\omega$, gia tốc góc $\varepsilon$):
- **Vectơ chính lực quán tính:** $\vec{R}_{\text{qt}} = -m\vec{a}_C = \vec{R}_{\text{qt}}^n + \vec{R}_{\text{qt}}^t$:
  - Thành phần pháp tuyến (ly tâm): $R_{\text{qt}}^n = m\omega^2 \cdot OC$, hướng **từ $O$ ra $C$** (ra xa tâm quay).
  - Thành phần tiếp tuyến: $R_{\text{qt}}^t = m\lvert\varepsilon\rvert \cdot OC$, hướng **ngược chiều $\vec{\varepsilon}$** (vuông góc $OC$).
- **Mômen quán tính:**
  - Nếu đề yêu cầu thu gọn về **tâm quay cố định $O$**: $\vec{M}_O^{\text{qt}} = -J_O \vec{\varepsilon}$ (**BẮT BUỘC dùng $J_O$, cấm dùng $J_C$!**).
  - Nếu đề yêu cầu thu gọn về **khối tâm $C$**: $\vec{M}_C^{\text{qt}} = -J_C \vec{\varepsilon}$ (và lực $\vec{R}_{\text{qt}}$ đặt tại $C$).
- **Trường hợp đặc biệt hay ra thi ($\lvert\varepsilon\rvert = \omega^2$ — như Đề `1721` Câu 5):**
  $R_{\text{qt}}^n = R_{\text{qt}}^t = m\varepsilon\cdot OC \implies R_{\text{qt}} = \sqrt{2}\,m\varepsilon\cdot OC$, hợp với tia $OC$ góc **$45^\circ$ lệch về phía ngược chiều quay $\vec{\varepsilon}$**!

#### 4. Bốn Mẫu Động Năng Chuẩn (Ch.12 & Ch.15) & Công Thức Đạo Hàm Tìm $\varepsilon, a$

| Mô hình cơ hệ | Công thức Động năng $T$ | Mẹo kiểm nhanh |
| :--- | :--- | :--- |
| **1. Tịnh tiến / Quay cố định** | Tịnh tiến: $\frac{1}{2}m v_C^2$ · Quay quanh $O$: $\frac{1}{2}J_O\omega^2$ | Cấm quên $m\cdot OC^2$ khi $O \neq C$ |
| **2. Con lăn lăn không trượt** | **Trụ/đĩa đặc:** $T = \dfrac{3}{4}m v_C^2 = \dfrac{3}{4}m R^2\omega^2$ <br> **Ống/vành mỏng:** $T = m v_C^2 = m R^2\omega^2$ | Có thể dùng $T = \frac{1}{2}J_I\omega^2$ cho ra ngay kết quả trên. |
| **3. Cơ hệ 1 BTD dạng $T = K_0 \dot{\theta}^2$** | Đạo hàm $\dfrac{dT}{dt} = \sum N$:<br>$2K_0\dot{\theta}\ddot{\theta} = \dfrac{d(\sum A)}{d\theta}\dot{\theta}$<br>$\implies \varepsilon = \dfrac{1}{2K_0}\dfrac{d(\sum A)}{d\theta}$ | Nếu $T = \frac{1}{2}J(\theta)\dot{\theta}^2$ ($J$ phụ thuộc $\theta$): <br> $\frac{dT}{dt} = J(\theta)\dot{\theta}\ddot{\theta} + \frac{1}{2}J'(\theta)\dot{\theta}^3$. |
| **4. Hệ 2 BTD $(x, \varphi)$** | $T = \frac{1}{2}A\dot{x}^2 + \frac{1}{2}B\dot{\varphi}^2$<br>$\quad + C\cos\varphi\,\dot{x}\dot{\varphi}$ | Kiểm tra hạng tử chéo bằng:<br>$v_B^2 = v_1^2 + v_{\text{td}}^2 + 2v_1 v_{\text{td}}\cos\theta_{\text{hợp}}$. |

---

### MẶT A4 SỐ 2: CHƯƠNG 14–15 (LAGRANGE II, BẢNG $Q_i$, MẸO 15 GIÂY & CHECKLIST BẪY `e`)

#### 5. Tóm Tắt Chương 14, Mục `15.1` (Đalămbe–Lagrange) & Quy Tắc Đếm Bậc Tự Do

- **Holonom:** Phương trình vị trí $f(\vec{r}, t) = 0$ (hoặc động học khả tích) $\implies$ ràng buộc **cả vị trí và vận tốc**.
- **Không Holonom:** Phương trình vi phân không khả tích $\implies$ **vị trí tùy ý nhưng vận tốc không tùy ý**.
- **Liên kết lý tưởng:** $\sum \vec{N}_k \cdot \delta\vec{r}_k = 0$ · **PT tổng quát Tĩnh học:** $\sum \vec{F}_k \cdot \delta\vec{r}_k = 0$.
- **PT vi phân tổng quát Động lực học (`15.1`, Đalămbe–Lagrange):** $\sum \left(\vec{F}_k^{(e)} - m_k \vec{a}_k\right) \cdot \delta\vec{r}_k = 0$ *(lấy PT tổng quát Tĩnh học gắn thêm lực quán tính $-m_k \vec{a}_k$ $\implies$ từ đây suy ra Phương trình Lagrange loại II `15.2`)*.
- **Con lăn lăn không trượt:** $x = R\varphi$ giảm `1` BTD; **vừa lăn vừa trượt** có đủ `2` BTD ($x, \varphi$).

#### 6. Bảng Tính Lực Suy Rộng $Q_i$ (4 Loại Lực Phổ Biến Nhất)

| Loại lực tác dụng | Công thức góp vào $Q_i$ | Quy tắc chống nhầm dấu |
| :--- | :--- | :--- |
| **1. Trọng lực $P = mg$** | $Q_i = -mg \dfrac{\partial y_C}{\partial q_i}$ (với $Oy$ hướng LÊN) | Nếu tăng $q_i$ làm khối tâm $C$ đi **lên** $\implies$ dấu **TRỪ** (`-`); đi **xuống** $\implies$ dấu **CỘNG** (`+`). |
| **2. Lò xo độ cứng $k$** | • Gốc tại **lò xo không biến dạng**: $-k x$ (giữ thêm $P, M$)<br>• Gốc tại **VTCB tĩnh đầy đủ**: chỉ còn $-k x$ | **Cấm tính trùng:** Đã đặt gốc tại VTCB tĩnh thì **bỏ các lực hằng** ($mg\sin\alpha, M/R$) đã cân bằng với $k\Delta l_0$! |
| **3. Ngẫu lực hằng $M$** | $Q_i = \pm M \dfrac{\partial\theta}{\partial q_i}$ | $M$ **cùng chiều** tăng của $q_i \implies +M$; **ngược chiều** $\implies -M$. |
| **4. Ma sát trượt động $f_{\text{đ}}$ ($\mu$)** | $Q_x = -f_{\text{đ}} N$ (hay $-\mu N$)<br>khi $\dot{x} > 0$ | Luôn mang dấu **TRỪ** cản chiều dương chuyển động. Với con trượt $m_1$ kéo con lắc $m_2$: áp dụng mô hình áp lực tĩnh chuẩn $N = (m_1 + m_2)g$! |

#### 7. Khuôn Nhận Diện Hệ 2 PT Lagrange II Trong 15 Giây

Với $T = \frac{1}{2}A\dot{x}^2 + \frac{1}{2}B\dot{\varphi}^2 + C\cos\varphi\,\dot{x}\dot{\varphi}$:

$$\begin{cases}
A\ddot{x} + (C\cos\varphi)\ddot{\varphi} - (C\sin\varphi)\dot{\varphi}^2 = Q_x \\
(C\cos\varphi)\ddot{x} + B\ddot{\varphi} = Q_\varphi
\end{cases}$$

- **PT1:** Số hạng $\dot{\varphi}^2$ bắt buộc là **$-(C\sin\varphi)\dot{\varphi}^2$** (dấu **TRỪ** và hàm **$\sin$**).
- **PT2:** **KHÔNG còn số hạng vận tốc $\dot{x}\dot{\varphi}$ hay $\dot{\varphi}^2$** (chúng tự triệt tiêu!).
- **Đối xứng:** Hệ số $\ddot{\varphi}$ ở PT1 bằng đúng hệ số $\ddot{x}$ ở PT2 (khi cùng dạng gốc chưa rút gọn).

#### 8. Checklist 20 Giây Chống Bẫy `e. Các đáp án còn lại đều sai`

Trước khi khoanh bất kỳ phương án `a..d` nào (hoặc khi nghi ngờ chọn `e`), quét nhanh **5 phép thử**:
1. **Thử thứ nguyên (đơn vị):** $Q_\varphi$ phải có đơn vị mômen ($\text{N}\cdot\text{m}$), $Q_x$ là lực ($\text{N}$); các số hạng trong $\sum A$ đều phải là $\text{J}$ ($mgL$, $kL^2$); trong $T$ phải là $\text{kg}\cdot\text{m}^2/\text{s}^2$.
2. **Thử điều kiện biên $\theta = \theta_0$:** Thay góc xuất phát $\theta_0$ vào biểu thức $\sum A(\theta)$ trong đáp án $\implies$ **BẮT BUỘC $= 0$**!
3. **Thử dấu lực cản / ma sát:** Ma sát không bao giờ mang dấu `+` ở vế phải $Q_x$; chuyển sang vế trái (`= 0`) mới đổi thành `+`.
4. **Thử đối xứng ma trận khối lượng ($M_{12} = M_{21}$):** Khi chưa rút gọn hai vế, hệ số $\ddot{q}_2$ ở PT1 phải khớp hệ số $\ddot{q}_1$ ở PT2 (ví dụ: ở Đề `1721` Câu 12, các phương án sai `12b, 12c, 12d` đều rớt ở bẫy mất đối xứng này!).
5. **Thử dấu $-(C\sin\varphi)\dot{\varphi}^2$ và triệt tiêu ở PT2:** Thấy $+(C\sin\varphi)\dot{\varphi}^2$, $\cos\varphi\,\dot{\varphi}^2$, hoặc PT2 còn dư $\sin\varphi\,\dot{x}\dot{\varphi}$ chưa triệt tiêu $\implies$ **LOẠI THẲNG TAY!**

---

## Ngày 20: Chiến Thuật 90 Phút Phòng Thi & Đề Thi Thử Tổng Hợp Chuẩn Form AS1003

### 20.1. Chiến thuật phân bổ `90` phút phòng thi trắc nghiệm AS1003

| Khung thời gian | Mục tiêu chiến lược | Hành động cụ thể tại bàn thi | Điểm tích lũy kỳ vọng |
| :--- | :--- | :--- | :---: |
| **Phút `00 – 05`** | Định vị & quét bẫy | Đọc lướt toàn đề (`10–12` câu), khoanh tròn ngay **Chùm Động năng (`4` câu)** và **Chùm Lagrange II (`4` câu)**, ghi chú quy ước $(\vec{i}, \vec{j}, \vec{k})$ và gốc $x=0$ của lò xo. | Chuẩn bị chiến trường |
| **Phút `05 – 30`** | Ăn trọn **Chùm Động năng (`4` câu)** | Giải cẩn thận $T$, $\sum A$ (thử ngay $\theta=\theta_0 \implies \sum A=0$!), đạo hàm 2 vế tìm $\varepsilon/a$, thế ngược $T - T_0 = \sum A$ tìm $v$. | **`4/12` câu ($\approx 3{,}3$ điểm)** |
| **Phút `30 – 60`** | Ăn trọn **Chùm Lagrange II (`4` câu)** | Viết $v_B^2$ bằng 2 cách đối chiếu, tính $T$ (chú ý ống mỏng vs trụ đặc), tính $Q_1, Q_2$ (bẫy gốc lò xo), áp dụng **Tuyệt chiêu 15 giây** chốt hệ 2 PTVP. | **`8/12` câu ($\approx 6{,}7$ điểm)** |
| **Phút `60 – 80`** | Ăn **Ch.14 + Ch.9–10 + Ch.13** | Chốt câu lý thuyết Holonom, bấm công thức Coriolis / Willis, tính $x_C, J_O$ và thu gọn D'Alembert ($\vec{M}_O^{\text{qt}} = -J_O\vec{\varepsilon}$). | **`11–12/12` câu (`9,0–10` điểm)** |
| **Phút `80 – 90`** | Kiểm toán **5 phép thử chống bẫy `e`** | Soát riêng tất cả câu đang chọn `a..d` hoặc phân vân `e` bằng Checklist 20 giây; kiểm tra lại mã đề và tô kín phiếu trắc nghiệm. | **Khóa chặt `> 8,5` điểm** |

---

### 20.2. Đề Thi Thử Tổng Hợp Chuẩn Form Cuối Kỳ AS1003 (12 Câu — 90 Phút)

::: warning Quy định tự kiểm tra (Bấm đúng 90 phút)
- Được phép mở **Sổ Tay A4 ở Ngày 19** khi làm bài.
- Tuyệt đối không mở các hộp `<details>` xem đáp án trước khi hoàn tất cả `12` câu!
:::

<div class="figure-container">
<svg viewBox="0 0 720 272" style="width: 100%; max-width: 700px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Hình vẽ Đề Thi Thử AS1003 cho Bài 3 (Câu 5-8) và Bài 4 (Câu 9-12)">
  <defs>
    <marker id="arr-m-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <polygon points="0,0 7,3 0,6" fill="#0284c7" />
    </marker>
    <marker id="arr-m-teal" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <polygon points="0,0 7,3 0,6" fill="#0d9488" />
    </marker>
    <marker id="arr-m-dark" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <polygon points="0,0 7,3 0,6" fill="#334155" />
    </marker>
  </defs>

  <!-- Panel Trái: Bài 3 (Câu 5-8) -->
  <rect x="12" y="10" width="338" height="250" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="181" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a">Hình 1 — Bài 3 (Câu 5–8)</text>

  <!-- Mặt nêm cố định góc 30 deg: (46, 224) -> (248, 224) -> (248, 107) -->
  <polygon points="46,224 248,224 248,107" fill="#e2e8f0" stroke="#334155" stroke-width="2" />
  <text x="114" y="214" font-family="sans-serif" font-size="12" font-weight="700" fill="#334155">α = 30°</text>

  <!-- Ròng rọc nhẹ đỉnh dốc -->
  <line x1="248" y1="107" x2="256" y2="93" stroke="#334155" stroke-width="2.5" />
  <circle cx="256" cy="93" r="10" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
  <circle cx="256" cy="93" r="2.5" fill="#0f172a" />

  <!-- Con lăn đặc B(m1, R=24) tiếp xúc đúng tại (147, 165.7) => tâm B(135, 145) -->
  <circle cx="135" cy="145" r="24" fill="#fef3c7" stroke="#d97706" stroke-width="2.2" />
  <circle cx="135" cy="145" r="3" fill="#0f172a" />
  <text x="128" y="114" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309">B (m<tspan dy="3" font-size="9">1</tspan><tspan dy="-3">, R)</tspan></text>

  <!-- Lò xo K song song dốc từ chân tường đến tâm B -->
  <line x1="56" y1="192" x2="45" y2="174" stroke="#334155" stroke-width="2.5" />
  <polyline points="51,183 65,187 67,172 81,178 83,163 97,169 99,154 113,160 119,154 135,145" fill="none" stroke="#dc2626" stroke-width="1.8" />
  <text x="80" y="148" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">K</text>

  <!-- Dây nối từ tâm B song song mặt nghiêng lên đỉnh ròng rọc (251, 84) rồi xuống A -->
  <line x1="135" y1="145" x2="251" y2="84" stroke="#0f172a" stroke-width="1.8" />
  <line x1="266" y1="93" x2="266" y2="165" stroke="#0f172a" stroke-width="1.8" />
  <rect x="251" y="165" width="30" height="28" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <text x="290" y="183" font-family="sans-serif" font-size="12" font-weight="700" fill="#0369a1">A (m<tspan dy="3" font-size="9">2</tspan><tspan dy="-3">)</tspan></text>

  <!-- Mũi tên chiều s lên dốc -->
  <line x1="168" y1="112" x2="206" y2="90" stroke="#0d9488" stroke-width="2" marker-end="url(#arr-m-teal)" />
  <text x="184" y="92" font-family="sans-serif" font-size="12" font-weight="700" fill="#0d9488">s</text>
  <text x="292" y="138" font-family="sans-serif" font-size="11.5" font-weight="600" fill="#0284c7">g ↓</text>

  <!-- Panel Phải: Bài 4 (Câu 9-12) -->
  <rect x="370" y="10" width="338" height="250" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="539" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a">Hình 2 — Bài 4 (Câu 9–12)</text>

  <!-- Tường trái và ray ngang -->
  <line x1="406" y1="74" x2="406" y2="136" stroke="#334155" stroke-width="2.5" />
  <line x1="406" y1="114" x2="672" y2="114" stroke="#334155" stroke-width="2" marker-end="url(#arr-m-dark)" />
  <text x="678" y="118" font-family="sans-serif" font-size="12" font-weight="700" fill="#334155">x</text>

  <!-- Lò xo k -->
  <polyline points="406,100 420,100 426,91 434,109 442,91 450,109 458,91 466,109 472,100 496,100" fill="none" stroke="#dc2626" stroke-width="1.8" />
  <text x="448" y="82" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">k</text>

  <!-- Mốc O và tọa độ x (cách xa tiêu đề) -->
  <line x1="486" y1="62" x2="486" y2="76" stroke="#0284c7" stroke-width="1.8" />
  <text x="486" y="56" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#0284c7">O</text>
  <line x1="486" y1="68" x2="522" y2="68" stroke="#0284c7" stroke-width="1.8" marker-end="url(#arr-m-blue)" />
  <text x="506" y="61" text-anchor="middle" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#0284c7">x</text>

  <!-- Con trượt A(m1) -->
  <rect x="496" y="86" width="56" height="28" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <text x="558" y="92" font-family="sans-serif" font-size="12" font-weight="700" fill="#0369a1">A (m<tspan dy="3" font-size="9">1</tspan><tspan dy="-3">)</tspan></text>

  <!-- Thanh AB(m2, l) và cầu B(m3) -->
  <line x1="524" y1="100" x2="524" y2="244" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4,3" />
  <line x1="524" y1="100" x2="604" y2="220" stroke="#0f172a" stroke-width="2.8" />
  <circle cx="524" cy="100" r="3.5" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
  <circle cx="604" cy="220" r="12" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <path d="M 524 154 A 54 54 0 0 0 554 145" fill="none" stroke="#0d9488" stroke-width="1.8" />
  <text x="543" y="170" font-family="sans-serif" font-size="12" font-weight="700" fill="#0d9488">φ</text>
  <text x="578" y="158" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">l (m<tspan dy="3" font-size="9">2</tspan><tspan dy="-3">)</tspan></text>
  <text x="626" y="224" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309">B (m<tspan dy="3" font-size="9">3</tspan><tspan dy="-3">)</tspan></text>
</svg>
<div class="figure-caption">

Hình 20-1: Sơ đồ cơ hệ cho Bài 3 (Câu 5–8) và Bài 4 (Câu 9–12) trong Đề thi thử tổng hợp AS1003

</div>
</div>

#### Phần A — Đề Bài (12 Câu Trắc Nghiệm, Chọn 1 Phương Án Đúng Nhất)

**Câu 1 (Chương 14 — Lý thuyết liên kết):** Xét một con trượt $A$ trượt không ma sát trên ray ngang cố định, gắn chốt bản lề với thanh cứng nhẹ không dãn $AB$ mang quả cầu $B$ chuyển động trong mặt phẳng thẳng đứng. Số bậc tự do $s$ và tính chất đầy đủ các liên kết của cơ hệ là:
- `a.` $s = 3$; liên kết không holonom, không dừng, một phía, lý tưởng.
- `b.` $s = 2$; liên kết holonom, dừng, hai phía, lý tưởng.
- `c.` $s = 2$; liên kết holonom, không dừng, một phía, có ma sát.
- `d.` $s = 1$; liên kết holonom, dừng, hai phía, lý tưởng.
- `e.` Các đáp án còn lại đều sai.

---

**Bài 1 (Câu 2–3 — Chương 9 & 10):**

**Câu 2:** Một đĩa tròn quay đều quanh trục thẳng đứng qua tâm $O$ với vận tốc góc không đổi $\Omega = 4\text{ rad/s}$ (ngược chiều kim đồng hồ nhìn từ trên xuống). Một con chạy nhỏ $M$ trượt dọc theo rãnh thẳng đi qua tâm $O$ hướng ra ngoài theo quy luật $s(t) = 0{,}2 t^2\text{ (m)}$ ($t$ tính bằng giây). Tại thời điểm $t = 1\text{ s}$, độ lớn gia tốc tuyệt đối $a_M$ của con chạy $M$ xấp xỉ bằng:
- `a.` $3{,}225\text{ m/s}^2$ $\qquad$ `b.` $4{,}817\text{ m/s}^2$ $\qquad$ `c.` $4{,}252\text{ m/s}^2$ $\qquad$ `d.` $4{,}525\text{ m/s}^2$ $\qquad$ `e.` Các đáp án còn lại đều sai.

**Câu 3:** Trong một hộp số hành tinh phẳng, bánh răng mặt trời $1$ ($Z_1 = 20$ răng) quay ngược chiều kim đồng hồ với $\omega_1 = +12\text{ rad/s}$. Bánh răng hành tinh $2$ ($Z_2 = 40$ răng) lắp trên cần $H$, ăn khớp ngoài với bánh $1$ và ăn khớp trong với bánh vành ngoài $3$ cố định ($Z_3 = 100$ răng). Vận tốc góc của cần $H$ ($\omega_H$) và bánh hành tinh $2$ ($\omega_2$) lần lượt là:
- `a.` $\omega_H = +2\text{ rad/s};\; \omega_2 = -3\text{ rad/s}$
- `b.` $\omega_H = +2\text{ rad/s};\; \omega_2 = +3\text{ rad/s}$
- `c.` $\omega_H = -3\text{ rad/s};\; \omega_2 = +4{,}5\text{ rad/s}$
- `d.` $\omega_H = +2{,}4\text{ rad/s};\; \omega_2 = -2{,}4\text{ rad/s}$
- `e.` Các đáp án còn lại đều sai.

---

**Bài 2 (Câu 4 — Chương 12.1 & 13 D'Alembert):**

**Câu 4:** Thanh thẳng mảnh đồng chất $OA$ có khối lượng $m_1 = 4\text{ kg}$, chiều dài $L = 0{,}6\text{ m}$ hàn thẳng xuyên tâm vào đĩa tròn đặc đồng chất tâm $B$ có khối lượng $m_2 = 4\text{ kg}$, bán kính $R = 0{,}3\text{ m}$ ($O, A, B$ thẳng hàng, $OB = L + R = 0{,}9\text{ m}$). Hệ quay quanh trục cố định đi qua $O$ (vuông góc mặt phẳng $Oxy$, trong đó $Ox(\vec{i})$ sang phải, $Oy(\vec{j})$ hướng lên, $\vec{k}$ hướng ra ngoài). Tại thời điểm thanh $OB$ nằm ở góc phần tư thứ I hợp với $+Ox$ một góc $\alpha = 30^\circ$, hệ đang **quay nhanh dần cùng chiều kim đồng hồ (CW)** với $\omega = 2\text{ rad/s}$ và $\varepsilon = 4\text{ rad/s}^2$. Hệ lực quán tính thu gọn về tâm quay $O$ là:
- `a.` $\vec{R}_{\text{qt}} = 19{,}2\sqrt{2}\left(\cos 75^\circ\,\vec{i} + \sin 75^\circ\,\vec{j}\right)\text{ N}$ và $\vec{M}_O^{\text{qt}} = -15{,}6\,\vec{k}\text{ N}\cdot\text{m}$
- `b.` $\vec{R}_{\text{qt}} = 19{,}2\sqrt{2}\left(\cos 15^\circ\,\vec{i} - \sin 15^\circ\,\vec{j}\right)\text{ N}$ và $\vec{M}_O^{\text{qt}} = +15{,}6\,\vec{k}\text{ N}\cdot\text{m}$
- `c.` $\vec{R}_{\text{qt}} = 19{,}2\sqrt{2}\left(\cos 75^\circ\,\vec{i} + \sin 75^\circ\,\vec{j}\right)\text{ N}$ và $\vec{M}_O^{\text{qt}} = +13{,}68\,\vec{k}\text{ N}\cdot\text{m}$
- `d.` $\vec{R}_{\text{qt}} = 19{,}2\left(\cos 75^\circ\,\vec{i} + \sin 75^\circ\,\vec{j}\right)\text{ N}$ và $\vec{M}_O^{\text{qt}} = +15{,}6\,\vec{k}\text{ N}\cdot\text{m}$
- `e.` Các đáp án còn lại đều sai.

---

**Bài 3 (Chùm 4 câu Định lý Động năng 1 BTD — Câu 5 đến Câu 8, xem Hình 1):**
Con lăn tròn đặc đồng chất tâm $B$ ($m_1 = 8\text{ kg}$, bán kính $R = 0{,}2\text{ m}$) lăn không trượt trên mặt phẳng nghiêng cố định góc $\alpha = 30^\circ$ so với phương ngang. Sợi dây nhẹ không dãn gắn vào tâm $B$, căng song song với mặt nghiêng, vắt qua ròng rọc nhẹ không khối lượng ở đỉnh dốc nối với vật nặng $A$ ($m_2 = 8\text{ kg}$) treo thẳng đứng. Tâm $B$ đồng thời nối với lò xo độ cứng $K = 300\text{ N/m}$ đặt song song mặt nghiêng và neo cố định ở chân dốc. Ban đầu hệ đứng yên tại vị trí lò xo **không biến dạng** ($s = 0$), rồi thả nhẹ cho con lăn $B$ lăn lên dốc (với $s$ là độ dời của tâm $B$ đi lên dọc mặt nghiêng). Lấy $g = 10\text{ m/s}^2$, bỏ qua ma sát lăn.

**Câu 5:** Biểu thức động năng $T$ của toàn cơ hệ theo vận tốc $v_B$ của tâm $B$ là:
- `a.` $T = 8 v_B^2\text{ (J)}$ $\qquad$ `b.` $T = 10 v_B^2\text{ (J)}$ $\qquad$ `c.` $T = 12 v_B^2\text{ (J)}$ $\qquad$ `d.` $T = 9 v_B^2\text{ (J)}$ $\qquad$ `e.` Các đáp án còn lại đều sai.

**Câu 6:** Tổng công $\sum A$ của các lực tác dụng lên hệ khi tâm $B$ đi lên dọc mặt nghiêng từ vị trí ban đầu $s_0 = 0$ đến vị trí có độ dời $s$ là:
- `a.` $\sum A = 40 s - 300 s^2\text{ (J)}$
- `b.` $\sum A = 80 s - 150 s^2\text{ (J)}$
- `c.` $\sum A = 40 s - 150 s^2\text{ (J)}$
- `d.` $\sum A = 40 s + 150 s^2\text{ (J)}$
- `e.` Các đáp án còn lại đều sai.

**Câu 7:** Gia tốc $a_B$ của tâm $B$ hướng lên dọc mặt nghiêng theo độ dời $s$ là:
- `a.` $a_B = 2 - 15 s\text{ (m/s}^2\text{)}$ $\qquad$ `b.` $a_B = 4 - 15 s\text{ (m/s}^2\text{)}$ $\qquad$ `c.` $a_B = 2 - 30 s\text{ (m/s}^2\text{)}$ $\qquad$ `d.` $a_B = 4 - 30 s\text{ (m/s}^2\text{)}$ $\qquad$ `e.` Các đáp án còn lại đều sai.

**Câu 8:** Vận tốc $v_B$ của tâm $B$ tại thời điểm con lăn đi lên được đoạn $s = 0{,}1\text{ m}$ là:
- `a.` $v_B = 0{,}25\text{ m/s}$ $\qquad$ `b.` $v_B = 0{,}50\text{ m/s}$ $\qquad$ `c.` $v_B = 0{,}71\text{ m/s}$ $\qquad$ `d.` $v_B = 1{,}00\text{ m/s}$ $\qquad$ `e.` Các đáp án còn lại đều sai.

---

**Bài 4 (Chùm 4 câu Lagrange loại II hệ 2 BTD — Câu 9 đến Câu 12, xem Hình 2):**
Con trượt $A$ khối lượng $m_1$ trượt không ma sát trên ray ngang $Ox$, nối với tường cố định bên trái bằng lò xo độ cứng $k$ (chọn gốc $x = 0$ tại vị trí lò xo **không biến dạng**). Thanh thẳng mảnh đồng chất $AB$ khối lượng $m_2$, chiều dài $l$ nối chốt bản lề tại $A$, chuyển động trong mặt phẳng thẳng đứng hợp góc $\varphi$ với phương thẳng đứng hướng xuống (lệch sang phía $+Ox$). Tại đầu $B$ của thanh gắn cứng một quả cầu nhỏ (coi là chất điểm) khối lượng $m_3$. Chọn $q_1 = x,\; q_2 = \varphi$.

**Câu 9:** Vận tốc tuyệt đối $v_B$ của quả cầu $B$ là:
- `a.` $v_B = \sqrt{\dot{x}^2 + l^2\dot{\varphi}^2 - 2l\dot{x}\dot{\varphi}\cos\varphi}$
- `b.` $v_B = \sqrt{\dot{x}^2 + l^2\dot{\varphi}^2 + 2l\dot{x}\dot{\varphi}\sin\varphi}$
- `c.` $v_B = \sqrt{\dot{x}^2 + l^2\dot{\varphi}^2 + 2l\dot{x}\dot{\varphi}\cos\varphi}$
- `d.` $v_B = \sqrt{\dot{x}^2 + l^2\dot{\varphi}^2 + l\dot{x}\dot{\varphi}\cos\varphi}$
- `e.` Các đáp án còn lại đều sai.

**Câu 10:** Động năng $T$ của toàn cơ hệ là:
- `a.`
  $$\begin{aligned}
  T ={}& \frac{1}{2}(m_1 + m_2 + m_3)\dot{x}^2 + \frac{1}{2}\left(\frac{m_2}{3} + m_3\right)l^2\dot{\varphi}^2 \\
       & + \left(\frac{m_2}{2} + m_3\right)l\cos\varphi\,\dot{x}\dot{\varphi}
  \end{aligned}$$
- `b.`
  $$\begin{aligned}
  T ={}& \frac{1}{2}(m_1 + m_2 + m_3)\dot{x}^2 + \frac{1}{2}\left(\frac{m_2}{12} + m_3\right)l^2\dot{\varphi}^2 \\
       & + \left(\frac{m_2}{2} + m_3\right)l\cos\varphi\,\dot{x}\dot{\varphi}
  \end{aligned}$$
- `c.`
  $$\begin{aligned}
  T ={}& \frac{1}{2}(m_1 + m_2 + m_3)\dot{x}^2 + \frac{1}{2}\left(\frac{m_2}{3} + m_3\right)l^2\dot{\varphi}^2 \\
       & + (m_2 + m_3)l\cos\varphi\,\dot{x}\dot{\varphi}
  \end{aligned}$$
- `d.`
  $$\begin{aligned}
  T ={}& \frac{1}{2}(m_1 + m_2 + m_3)\dot{x}^2 + \frac{1}{2}\left(\frac{m_2}{3} + m_3\right)l^2\dot{\varphi}^2 \\
       & - \left(\frac{m_2}{2} + m_3\right)l\cos\varphi\,\dot{x}\dot{\varphi}
  \end{aligned}$$
- `e.` Các đáp án còn lại đều sai.

**Câu 11:** Các lực suy rộng $Q_x, Q_\varphi$ tương ứng với hai tọa độ suy rộng đã chọn là:
- `a.` $Q_x = -kx;\; Q_\varphi = \left(\dfrac{m_2}{2} + m_3\right)gl\sin\varphi$
- `b.` $Q_x = +kx;\; Q_\varphi = -\left(\dfrac{m_2}{2} + m_3\right)gl\sin\varphi$
- `c.` $Q_x = -kx;\; Q_\varphi = -\left(\dfrac{m_2}{2} + m_3\right)gl\cos\varphi$
- `d.` $Q_x = -kx;\; Q_\varphi = -\left(\dfrac{m_2}{2} + m_3\right)gl\sin\varphi$
- `e.` Các đáp án còn lại đều sai.

**Câu 12:** Hệ phương trình vi phân chuyển động của cơ hệ là:
- `a.`
  $$\begin{cases}
  \begin{aligned}
  (m_1+m_2+m_3)\ddot{x} &+ \left(\frac{m_2}{2}+m_3\right)l\cos\varphi\,\ddot{\varphi} \\
                        &+ \left(\frac{m_2}{2}+m_3\right)l\sin\varphi\,\dot{\varphi}^2 = -kx
  \end{aligned} \\
  \begin{aligned}
  \left(\frac{m_2}{2}+m_3\right)l\cos\varphi\,\ddot{x} &+ \left(\frac{m_2}{3}+m_3\right)l^2\ddot{\varphi} \\
  &= -\left(\frac{m_2}{2}+m_3\right)gl\sin\varphi
  \end{aligned}
  \end{cases}$$
- `b.`
  $$\begin{cases}
  \begin{aligned}
  (m_1+m_2+m_3)\ddot{x} &+ \left(\frac{m_2}{2}+m_3\right)l\cos\varphi\,\ddot{\varphi} \\
                        &- \left(\frac{m_2}{2}+m_3\right)l\sin\varphi\,\dot{\varphi}^2 = -kx
  \end{aligned} \\
  \begin{aligned}
  \left(\frac{m_2}{2}+m_3\right)l\cos\varphi\,\ddot{x} &+ \left(\frac{m_2}{3}+m_3\right)l^2\ddot{\varphi} \\
  &- \left(\frac{m_2}{2}+m_3\right)l\sin\varphi\,\dot{x}\dot{\varphi} = -\left(\frac{m_2}{2}+m_3\right)gl\sin\varphi
  \end{aligned}
  \end{cases}$$
- `c.`
  $$\begin{cases}
  \begin{aligned}
  (m_1+m_2+m_3)\ddot{x} &+ \left(\frac{m_2}{2}+m_3\right)l\cos\varphi\,\ddot{\varphi} \\
                        &- \left(\frac{m_2}{2}+m_3\right)l\sin\varphi\,\dot{\varphi}^2 = -kx
  \end{aligned} \\
  \begin{aligned}
  \left(\frac{m_2}{2}+m_3\right)l\cos\varphi\,\ddot{x} &+ \left(\frac{m_2}{3}+m_3\right)l^2\ddot{\varphi} \\
  &= +\left(\frac{m_2}{2}+m_3\right)gl\sin\varphi
  \end{aligned}
  \end{cases}$$
- `d.`
  $$\begin{cases}
  \begin{aligned}
  (m_1+m_2+m_3)\ddot{x} &+ \left(\frac{m_2}{2}+m_3\right)l\cos\varphi\,\ddot{\varphi} \\
                        &- \left(\frac{m_2}{2}+m_3\right)l\cos\varphi\,\dot{\varphi}^2 = -kx
  \end{aligned} \\
  \begin{aligned}
  \left(\frac{m_2}{2}+m_3\right)l\cos\varphi\,\ddot{x} &+ \left(\frac{m_2}{3}+m_3\right)l^2\ddot{\varphi} \\
  &= -\left(\frac{m_2}{2}+m_3\right)gl\sin\varphi
  \end{aligned}
  \end{cases}$$
- `e.` Các đáp án còn lại đều sai.

---

#### Phần B — Bảng Đáp Án & Lời Giải Chi Tiết (Đã Kiểm Toán 100% Bằng SymPy)

<details class="page-preview">
<summary>Bấm để xem Bảng Đáp Án Nhanh & Lời Giải Từng Câu (Chỉ mở sau khi tự bấm giờ 90 phút)</summary>

| Câu | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **`b`** | **`c`** | **`a`** | **`e`** | **`b`** | **`c`** |

| Câu | 7 | 8 | 9 | 10 | 11 | 12 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **`a`** | **`b`** | **`c`** | **`a`** | **`d`** | **`e`** |

---

**1. Giải Câu 1 (`b`):**
- Con trượt $A$ có 1 tọa độ $x$ chạy trên ray đứng yên; thanh $AB$ có 1 góc quay $\varphi$ quanh $A$ $\implies s = 2$.
- Các phương trình liên kết $y_A = 0$ và $(x_B - x_A)^2 + (y_B - y_A)^2 = l^2$ không chứa $t$, là đẳng thức, chỉ chứa tọa độ và không ma sát $\implies$ **holonom, dừng, hai phía, lý tưởng**. Chọn **`b`**.

**2. Giải Câu 2 (`c`):**
Tại $t = 1\text{ s}$: $s = 0{,}2\text{ m}$, $v_r = \dot{s} = 0{,}4\text{ m/s}$, $a_r^t = \ddot{s} = 0{,}4\text{ m/s}^2$, $a_r^n = 0$ (rãnh thẳng).
- Gia tốc kéo theo pháp tuyến (hướng vào $O$, ngược $\vec{a}_r^t$): $a_e^n = \Omega^2 s = 16 \cdot 0{,}2 = 3{,}2\text{ m/s}^2$ ($a_e^t = 0$).
- Gia tốc Coriolis (vuông góc rãnh): $a_c = 2\Omega v_r = 2 \cdot 4 \cdot 0{,}4 = 3{,}2\text{ m/s}^2$.
- Hợp theo 2 phương vuông góc:
  $$\begin{aligned}
  a_M &= \sqrt{(a_r^t - a_e^n)^2 + a_c^2} \\
      &= \sqrt{(0{,}4 - 3{,}2)^2 + 3{,}2^2} = \sqrt{18{,}08} \approx 4{,}252\text{ m/s}^2
  \end{aligned}$$
  *(Bẫy `a` quên hệ số `2` trong $a_c$; `b` cộng sai dấu $a_r^t + a_e^n$; `d` bỏ mất $a_r^t$)*. Chọn **`c`**.

**3. Giải Câu 3 (`a`):**
Áp dụng công thức Willis cho cặp bánh $1$–$3$ qua bánh $2$ (một khớp ngoài `-`, một khớp trong `+` nên tích dấu là `-`), với $\omega_3 = 0$:
$$\begin{aligned}
\frac{0 - \omega_H}{12 - \omega_H} &= -\frac{Z_1}{Z_3} = -\frac{20}{100} = -\frac{1}{5} \\
&\implies 5\omega_H = 12 - \omega_H \implies \omega_H = +2\text{ rad/s}
\end{aligned}$$
Áp dụng tiếp Willis cho cặp khớp ngoài $1$–$2$:
$$\begin{aligned}
\frac{\omega_2 - 2}{12 - 2} &= -\frac{Z_1}{Z_2} = -\frac{20}{40} = -\frac{1}{2} \\
&\implies \omega_2 = 2 - 5 = -3\text{ rad/s}
\end{aligned}$$
Chọn **`a`**.

**4. Giải Câu 4 (`e` — Chú ý bẫy D'Alembert!):**
- Khối lượng tổng: $m = m_1 + m_2 = 4 + 4 = 8\text{ kg}$.
- Khoảng cách khối tâm $C$ từ $O$:
  $$OC = \frac{4 \cdot 0{,}3 + 4 \cdot 0{,}9}{8} = 0{,}6\text{ m}$$
- Mômen quán tính quanh $O$:
  $$\begin{aligned}
  J_O &= \frac{1}{3}m_1 L^2 + m_2\left[\frac{1}{2}R^2 + (L+R)^2\right] \\
      &= \frac{1}{3}(4)(0{,}36) + 4(0{,}045 + 0{,}81) = 3{,}90\text{ kg}\cdot\text{m}^2
  \end{aligned}$$
- Vì $\omega^2 = 4 = \varepsilon$, ta có $R_{\text{qt}}^n = R_{\text{qt}}^t = m\varepsilon\cdot OC = 8 \cdot 4 \cdot 0{,}6 = 19{,}2\text{ N}$ $\implies R_{\text{qt}} = 19{,}2\sqrt{2}\text{ N}$.
- Định hướng $\vec{R}_{\text{qt}}$: tia $OC$ ở góc $+30^\circ$ (nên $\vec{R}_{\text{qt}}^n$ hướng ra xa $O$ ở $+30^\circ$); quay **cùng KĐH** ($\vec{\varepsilon} = -4\vec{k}$) làm $\vec{a}_C^t$ hướng góc $30^\circ - 90^\circ = -60^\circ$, nên $\vec{R}_{\text{qt}}^t$ hướng ngược lại góc $+120^\circ$. Đường phân giác giữa $+30^\circ$ và $+120^\circ$ là **$+75^\circ$**:
  $$\vec{R}_{\text{qt}} = 19{,}2\sqrt{2}\left(\cos 75^\circ\,\vec{i} + \sin 75^\circ\,\vec{j}\right)\text{ N}$$
- Mômen quán tính thu gọn về $O$: vì $\vec{\varepsilon} = -4\vec{k}$ nên:
  $$\vec{M}_O^{\text{qt}} = -J_O\vec{\varepsilon} = -3{,}90(-4\vec{k}) = +15{,}6\,\vec{k}\text{ N}\cdot\text{m}$$
- Soi các phương án `a..d`: `a` sai dấu $-15{,}6\,\vec{k}$; `b` sai góc $15^\circ$; `c` tính thiếu mômen quán tính thanh $OA$ (chỉ lấy $J_O(\text{đĩa }B)\cdot\varepsilon = 3{,}42 \times 4 = 13{,}68\text{ N}\cdot\text{m}$, còn nếu dùng nhầm $J_C = 1{,}02\text{ kg}\cdot\text{m}^2$ chỉ ra $4{,}08\text{ N}\cdot\text{m}$); `d` thiếu $\sqrt{2}$. Do đó chọn **`e`**.

**5. Giải Chùm Câu 5–8 (`5b, 6c, 7a, 8b`):**
- **Câu 5 (`b`):** Đĩa đặc lăn không trượt góp $\frac{3}{4}m_1 v_B^2 = 6 v_B^2$; vật $A$ đi với cùng vận tốc dây $v_B$ góp $\frac{1}{2}m_2 v_B^2 = 4 v_B^2$. Tổng: $T = 10 v_B^2\text{ (J)}$.
- **Câu 6 (`c`):** Vật $A$ đi xuống đoạn $s$ ($+m_2 g s = +80s$), đĩa $B$ lên dốc ($-m_1 g s\sin 30^\circ = -40s$), lò xo dãn từ $0$ đến $s$ ($-\frac{1}{2}K s^2 = -150 s^2$). Tổng công: $\sum A = 40s - 150s^2\text{ (J)}$. *(Kiểm tra biên $s = 0 \implies \sum A = 0$).*
- **Câu 7 (`a`):** Đạo hàm hai vế $\frac{dT}{dt} = \frac{d(\sum A)}{ds}v_B$:
  $$20 v_B a_B = (40 - 300s)v_B \implies a_B = 2 - 15s\text{ (m/s}^2\text{)}$$
- **Câu 8 (`b`):** Thay $s = 0{,}1\text{ m}$ vào $T = \sum A$:
  $$\begin{aligned}
  10 v_B^2 &= 40(0{,}1) - 150(0{,}01) = 2{,}5 \\
           &\implies v_B^2 = 0{,}25 \implies v_B = 0{,}50\text{ m/s}
  \end{aligned}$$

**6. Giải Chùm Câu 9–12 (`9c, 10a, 11d, 12e`):**
- **Câu 9 (`c`):** Từ $x_B = x + l\sin\varphi$ và $y_B = -l\cos\varphi$, ta thu được:
  $$v_B = \sqrt{\dot{x}^2 + l^2\dot{\varphi}^2 + 2l\dot{x}\dot{\varphi}\cos\varphi}$$
- **Câu 10 (`a`):**
  - Con trượt $A$: $T_A = \frac{1}{2}m_1\dot{x}^2$.
  - Thanh $AB$ (khối tâm $G$ cách $A$ đoạn $l/2$, $J_G = \frac{1}{12}m_2 l^2$):
    $$\begin{aligned}
    T_{AB} &= \frac{1}{2}m_2\left(\dot{x}^2 + \frac{l^2}{4}\dot{\varphi}^2 + l\dot{x}\dot{\varphi}\cos\varphi\right) + \frac{1}{24}m_2 l^2\dot{\varphi}^2 \\
           &= \frac{1}{2}m_2\dot{x}^2 + \frac{1}{6}m_2 l^2\dot{\varphi}^2 + \frac{1}{2}m_2 l\cos\varphi\,\dot{x}\dot{\varphi}
    \end{aligned}$$
  - Cầu $B$: $T_B = \frac{1}{2}m_3\left(\dot{x}^2 + l^2\dot{\varphi}^2 + 2l\dot{x}\dot{\varphi}\cos\varphi\right)$.
  - Cộng lại khớp hoàn toàn **`a`**.
- **Câu 11 (`d`):** $Q_x = -kx$ (lò xo không biến dạng tại $x=0$); trọng lực trên $AB$ và $B$ khi tăng $\varphi$ làm cả hai nâng lên $\implies Q_\varphi = -\left(\frac{m_2}{2} + m_3\right)gl\sin\varphi$.
- **Câu 12 (`e` — Dùng Tuyệt chiêu 15 giây!):**
  Hệ phương trình chuẩn phải là:
  $$\begin{cases}
  \begin{aligned}
  (m_1+m_2+m_3)\ddot{x} &+ \left(\frac{m_2}{2}+m_3\right)l\cos\varphi\,\ddot{\varphi} \\
                        &- \left(\frac{m_2}{2}+m_3\right)l\sin\varphi\,\dot{\varphi}^2 = -kx
  \end{aligned} \\
  \begin{aligned}
  \left(\frac{m_2}{2}+m_3\right)l\cos\varphi\,\ddot{x} &+ \left(\frac{m_2}{3}+m_3\right)l^2\ddot{\varphi} \\
  &= -\left(\frac{m_2}{2}+m_3\right)gl\sin\varphi
  \end{aligned}
  \end{cases}$$
  - Phương án `12a`: PT1 sai dấu **`+`** ở $+\left(\frac{m_2}{2}+m_3\right)l\sin\varphi\,\dot{\varphi}^2$ $\implies$ LOẠI!
  - Phương án `12b`: PT2 còn dư số hạng $-\left(\frac{m_2}{2}+m_3\right)l\sin\varphi\,\dot{x}\dot{\varphi}$ (đáng lẽ phải tự triệt tiêu!) $\implies$ LOẠI!
  - Phương án `12c`: PT2 sai dấu vế phải $+\left(\frac{m_2}{2}+m_3\right)gl\sin\varphi$ $\implies$ LOẠI!
  - Phương án `12d`: PT1 viết sai $\cos\varphi\,\dot{\varphi}^2$ thay vì $\sin\varphi\,\dot{\varphi}^2$ $\implies$ LOẠI!
  - Vậy bắt buộc chọn **`12e. Các đáp án còn lại đều sai`**!

</details>

---

::: tip Hoàn tất Chặng 4 — Chốt mục tiêu > 8,0 Điểm AS1003
Bạn đã hoàn thành toàn bộ `20` ngày ôn thi Cuối kỳ `DCMH.AS1003` và trang bị đầy đủ **Sổ tay A4**, **Tuyệt chiêu 15 giây Lagrange II**, **Checklist 20 giây chống bẫy `e`** cùng bộ đề thi thử kiểm toán chuẩn. Bước cuối cùng trước ngày thi: hãy tự bấm giờ luyện thêm các mã đề thật (`1821`, `1721`, `1722`, `0001/2016`, `0002/2016`) tại [**Ngân Hàng Đề Thi Thật HCMUT AS1003**](/on-thi/de-thi-that-hcmut) để khóa chắc điểm `8,5 – 10`!
:::
