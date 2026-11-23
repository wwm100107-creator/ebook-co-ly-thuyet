---
title: "Chặng 2 (Ngày 6 – Ngày 10): Chương 11, 12.1–12.2 & 13 — Động Lực Học, Khối Tâm, D'Alembert & Phản Lực Động (AS1003)"
layout: doc
---

# Chặng 2 (Ngày 6 – Ngày 10): Chương 11, 12.1–12.2 & 13 — Định Lý Tổng Quát, Đặc Trưng Khối Lượng, Nguyên Lý D'Alembert & Phản Lực Động

Chào mừng bạn bước vào **Chặng 2** của lộ trình **20 ngày chinh phục Cuối kỳ `AS1003` (Bách Khoa TPHCM)** từ mốc `3,0 → 5,0+` điểm. Sau khi đã "xóa mù" chiếu vectơ, tâm vận tốc tức thời $I$ và ăn trọn **Khối A (Ch.9–10)** ở [Chặng 1](/on-thi/chang-1-tinh-hoc), Chặng 2 giúp bạn làm chủ toàn bộ nền tảng **Chương 11–12.2** và trọn **Khối B**: nhóm câu **Đặc trưng hình học khối lượng ($x_C, y_C, J_O, J_C$)**, **Định lý chuyển động khối tâm – Động lượng – Mômen động lượng**, **Thu gọn hệ lực quán tính D'Alembert**, **Phản lực động ổ trục (2D & 3D)** và **Điều kiện không trượt / không lật**.

::: info Lộ trình Chặng 2 (Ngày 6 – Ngày 10 | 90–120 phút/ngày)
| Ngày | Nội dung trọng tâm (Đề cương AS1003) | Mục tiêu làm được ngay sau buổi học | Đối chiếu giáo trình gốc |
| :--- | :--- | :--- | :--- |
| **Ngày 6** | **Ch.11.1–11.2 & 12.2:** HQC quán tính, 2 bài toán ĐLH, PTVP cơ hệ, Định lý Động lượng & Mômen động lượng | Thuần thục $(\vec{\tau}, \vec{n})$ & Đề-các; ăn câu lý thuyết nội lực, tịnh tiến, bảo toàn khối tâm & $J_1\bar{\omega}_1 = J_2\bar{\omega}_2$ | [ĐLH Ch.1](/dong-luc-hoc/chuong-1) · [ĐLH Ch.2](/dong-luc-hoc/chuong-2) · [ĐLH Ch.3](/dong-luc-hoc/chuong-3) · [BT Ch.1](/bai-tap/dong-luc-hoc/chuong-1) · [BT Ch.2](/bai-tap/dong-luc-hoc/chuong-2) |
| **Ngày 7** | **Ch.12.1:** Khối tâm tổng hợp ($x_C, y_C$) & Mômen quán tính ($J_O, J_C$) | Thuần thục bảng tra $J_G$, định lý Steiner $J_O = J_G + m\cdot OG^2$; giải gọn **Đề `1721` (3–4)**, **Đề `1722` (3–4)** & **Đề `0001/2015` (2–4)** | [ĐLH Ch.3 (Mục 3.1)](/dong-luc-hoc/chuong-3) · [BT ĐLH Ch.2](/bai-tap/dong-luc-hoc/chuong-2) |
| **Ngày 8** | **Ch.13:** Nguyên lý D'Alembert & Thu gọn lực quán tính về tâm $O$ hoặc $C$ | Dùng ẩn dụ xe buýt phanh gấp không bao giờ nhầm dấu; xử lý gọn mẫu $\lvert\varepsilon\rvert = \omega^2$ ($\alpha + 45^\circ$) ở **Đề `1721` (5)**, **Đề `1722` (5)**, **Đề `2015`** | [ĐLH Ch.5](/dong-luc-hoc/chuong-5) · [BT ĐLH Ch.4](/bai-tap/dong-luc-hoc/chuong-4) |
| **Ngày 9** | **Ch.13 Nâng cao (13.3):** Phản lực động ổ trục 2D & 3D, Cân bằng động & Không trượt / Không lật | Tính $(A_x, A_y)$, lực ma sát động trên **Đề `0002/2015` (4)**, **Đề `1` (pp.67–69)**; nắm phản lực động 2 ổ đỡ 3D & điều kiện $x_C=y_C=J_{xz}=J_{yz}=0$ | [ĐLH Ch.5](/dong-luc-hoc/chuong-5) · [BT ĐLH Ch.4](/bai-tap/dong-luc-hoc/chuong-4) |
| **Ngày 10** | **Mini-Test 10 câu Ch.11–13** & Bảng bấm máy 30 giây | Tự bấm giờ 25 phút rèn phản xạ né bẫy $J_O$ vs $J_C$, bẫy dấu $\vec{i}, \vec{j}, \vec{k}$ và bẫy đáp án `e` | [Chặng 3: Chùm Động năng](/on-thi/chang-3-dong-luc-hoc) |
:::

> **Điều hướng nhanh:** [Tổng quan lộ trình 20 ngày](/on-thi/) · [Quay lại Chặng 1 (Ngày 1–5)](/on-thi/chang-1-tinh-hoc) · [Tiếp sang Chặng 3 (Ngày 11–15)](/on-thi/chang-3-dong-luc-hoc)

---

## Ngày 6: Chương 11 (11.1–11.2) & 12.2 — Hệ Quy Chiếu Quán Tính, PTVP Cơ Hệ, Động Lượng & Mômen Động Lượng

### 1. Nền tảng Chương 11 (11.1–11.2): Hệ quy chiếu quán tính, 2 bài toán cơ bản & PTVP chất điểm / cơ hệ

Nếu ở Tĩnh học vật đứng yên nên tổng lực bằng không ($\sum \vec{F} = \vec{0}$), thì trong Động lực học khi vật **chuyển động có gia tốc** $\vec{a}$, hợp lực tác dụng lên chất điểm không triệt tiêu mà chính bằng $m\vec{a}$:

$$m\vec{a} = \sum_{k=1}^{n} \vec{F}_k$$

#### A. Hệ quy chiếu quán tính & 4 định luật Newton
- **Hệ quy chiếu quán tính (HQC QT):** Là hệ quy chiếu trong đó một chất điểm cô lập (không chịu tác dụng lực nào) sẽ đứng yên hoặc chuyển động thẳng đều. Trong các bài toán cơ học kỹ thuật thông thường trên mặt đất, hệ quy chiếu gắn với Trái Đất được coi gần đúng là hệ quy chiếu quán tính.
- **4 tiên đề nền tảng (Định luật Newton):**
  1. **Định luật I (Quán tính):** Nếu $\sum \vec{F}_k = \vec{0} \implies \vec{v} = \text{const}$.
  2. **Định luật II (Phương trình cơ bản):** $m\vec{a} = m\dfrac{d^2\vec{r}}{dt^2} = \sum \vec{F}_k$.
  3. **Định luật III (Tác dụng – phản tác dụng):** $\vec{F}_{12} = -\vec{F}_{21}$ (hai lực đặt trên **hai vật khác nhau**, không tự triệt tiêu khi tách riêng từng vật).
  4. **Định luật IV (Độc lập tác dụng):** $\vec{a} = \sum \vec{a}_k = \frac{1}{m}\sum \vec{F}_k$.

#### B. Hai bài toán cơ bản của Động lực học (Mục 11.1)
Mọi bài toán chất điểm đều quy về đúng 1 trong 2 chiều đi của phương trình $m\ddot{\vec{r}} = \vec{F}$:
1. **Bài toán thuận (Bài toán thứ nhất):** Cho biết khối lượng $m$ và quy luật chuyển động $\vec{r}(t)$ (hoặc tọa độ $x(t), y(t)$). Ta lấy đạo hàm bậc hai theo thời gian tìm gia tốc $\vec{a} = \ddot{\vec{r}}$ rồi suy ra hợp lực $\vec{F} = m\ddot{\vec{r}}$ (hoặc phản lực liên kết).
2. **Bài toán nghịch (Bài toán thứ hai):** Cho biết khối lượng $m$, biểu thức các lực tác dụng $\vec{F}(t, \vec{r}, \dot{\vec{r}})$ và **điều kiện ban đầu** tại $t = t_0$ ($\vec{r}(t_0) = \vec{r}_0,\; \vec{v}(t_0) = \vec{v}_0$). Ta viết PTVP $m\ddot{\vec{r}} = \vec{F}$, tích phân hai lần và dùng $(\vec{r}_0, \vec{v}_0)$ để xác định hằng số tích phân, thu được quy luật chuyển động $\vec{r}(t)$.

#### C. Hai hệ trục chiếu PTVP chất điểm: Đề-các $(Ox, Oy)$ & Tự nhiên $(\vec{\tau}, \vec{n}, \vec{b})$
- **Hệ trục Đề-các $(Ox, Oy)$** (vật trượt thẳng hoặc chuyển động phẳng theo tọa độ $x, y$):
  $$\begin{cases} m\ddot{x} = \sum F_{kx} \\ m\ddot{y} = \sum F_{ky} \end{cases}$$
- **Hệ trục Tự nhiên $(\vec{\tau}, \vec{n}, \vec{b})$** (vật trượt trên mặt cong, mặt cầu, cầu vồng): gắn tại chất điểm $M$, với $\vec{\tau}$ dọc tiếp tuyến theo chiều chuyển động, $\vec{n}$ vuông góc $\vec{\tau}$ **luôn hướng vào tâm cong (phía lõm)**, $\vec{b}$ vuông góc mặt phẳng mật tiếp $(\vec{\tau}, \vec{n})$:
  $$\begin{cases}
  m a_\tau = m\dot{v} = m\ddot{s} = \sum F_{k\tau} \\
  m a_n = m\dfrac{v^2}{\rho} = \sum F_{kn} \\
  0 = \sum F_{kb}
  \end{cases}$$

::: warning 3 điều kiện sống còn trong bài toán ly tâm, bứt mặt cong & ma sát
1. **Điều kiện còn tựa lên mặt cong (không bị văng/bứt khỏi mặt trụ–cầu):** Phản lực pháp tuyến $N \ge 0$. Tại đúng khoảnh khắc vật bắt đầu **bứt khỏi mặt**, ta đặt **$N = 0$** vào phương trình trục $\vec{n}$ để rút ra góc rời mặt hoặc vận tốc giới hạn!
2. **Điều kiện không trượt (ma sát tĩnh):** Lực ma sát nghỉ thỏa mãn $\lvert F_{\text{ms}} \rvert \le f_0 N$ (khi chớm trượt thì $\lvert F_{\text{ms}} \rvert = f_0 N$).
3. **Khi vật đã trượt (ma sát trượt động):** Lực ma sát có độ lớn $F_{\text{ms}} = f_{\text{đ}} N$ (hoặc $\mu N$) và **luôn hướng ngược chiều vận tốc trượt tương đối** của vật so với mặt tiếp xúc.
:::

#### D. Phương trình vi phân chuyển động của hệ chất điểm (Mục 11.2)
Với một cơ hệ gồm $n$ chất điểm (hoặc nhiều vật liên kết nhau), mỗi chất điểm thứ $k$ (khối lượng $m_k$) chịu tác dụng đồng thời của **ngoại lực** $\vec{F}_k^{(e)}$ (từ bên ngoài hệ) và **nội lực** $\vec{F}_k^{(i)}$ (tương tác giữa các phần tử trong cùng hệ):

$$m_k \ddot{\vec{r}}_k = \vec{F}_k^{(e)} + \vec{F}_k^{(i)} \qquad (k = 1, 2, \dots, n)$$

Theo Định luật III Newton, các nội lực xuất hiện từng cặp trực đối nên có **hai tính chất bất biến**:

$$\sum_{k=1}^n \vec{F}_k^{(i)} = \vec{0}, \qquad \sum_{k=1}^n \vec{M}_O\left(\vec{F}_k^{(i)}\right) = \vec{0}$$

::: danger CẢNH BÁO BẪY LÝ THUYẾT: Tổng lực & mômen nội lực bằng 0, NHƯNG công nội lực thì sao?
Dù tổng vectơ nội lực $\sum \vec{F}_k^{(i)} = \vec{0}$ và tổng mômen nội lực $\sum \vec{M}_O(\vec{F}_k^{(i)}) = \vec{0}$, **tổng công của các nội lực nói chung KHÁC KHÔNG ($\sum A_k^{(i)} \neq 0$)**!
- Lý do: Hai nội lực $\vec{F}_{12}$ và $\vec{F}_{21}$ bằng nhau ngược chiều nhưng đặt lên **hai điểm khác nhau**; nếu hai điểm đó dịch chuyển tương đối khác nhau — như khi **cơ hệ bị biến dạng** (lò xo nối hai vật co giãn) hoặc có **ma sát trượt giữa các vật trong hệ** — thì tổng công nội lực không triệt tiêu!
- Chỉ đối với **vật rắn tuyệt đối** hoặc hệ các vật rắn nối với nhau bằng liên kết lý tưởng không biến dạng (dây không giãn, khớp nhẵn, lăn không trượt) thì $\sum A_k^{(i)} = 0$.
:::

---

### 2. Chương 12.2: Định Lý Khối Tâm, Định Lý Động Lượng & Định Lý Mômen Động Lượng

Vì tổng nội lực và tổng mômen nội lực luôn tự triệt tiêu khi cộng cả hệ, ta rút ngay ra các **định lý tổng quát không chứa ẩn nội lực** (cực hay ra trong cả câu lý thuyết lẫn bài toán tính nhanh bảo toàn):

*(Quy ước ký hiệu xuyên suốt: chữ có gạch trên đầu như $\bar{\omega}, \bar{\varepsilon}$ biểu thị **giá trị đại số có dấu** ($+$ khi quay CCW, $-$ khi quay CW); chữ không gạch như $\omega, \varepsilon$ là độ lớn không âm khi chiều quay đã xác định rõ).*

#### A. Định lý chuyển động khối tâm & Định lý Động lượng
- **Động lượng của cơ hệ** (ký hiệu $\vec{Q}$, hoặc $\vec{K}$ trong giáo trình Đỗ Sanh):
  $$\vec{Q} = \sum_{k=1}^n m_k \vec{v}_k = M\vec{v}_C \qquad \left(M = \sum_{k=1}^n m_k\right)$$
- **Xung lượng của lực $\vec{F}$** trong khoảng thời gian $[t_0;\; t_1]$: $\vec{S} = \int_{t_0}^{t_1} \vec{F}\,dt$ (khi $\vec{F}$ không đổi thì $\vec{S} = \vec{F}\,\Delta t$).
- **Định lý biến thiên động lượng & Định lý chuyển động khối tâm:**
  - *Dạng vi phân:*
    $$M\vec{a}_C = \frac{d\vec{Q}}{dt} = \sum_{k=1}^n \vec{F}_k^{(e)}$$
  - *Dạng hữu hạn:*
    $$\vec{Q}_1 - \vec{Q}_0 = \sum_{k=1}^n \vec{S}_k^{(e)}$$
    *(Chiếu lên trục $Ox$: $Q_{1x} - Q_{0x} = \sum S_{kx}^{(e)}$).*
- **Hệ quả thi trắc nghiệm — Bảo toàn động lượng & Bảo toàn vị trí khối tâm:**
  1. Chuyển động khối tâm $C$ **chỉ phụ thuộc vào ngoại lực**, hoàn toàn không chịu ảnh hưởng của nội lực! (Xem Đề `0002/2016` Câu 2 bên dưới).
  2. **Bảo toàn động lượng theo trục chiếu:** Nếu tổng hình chiếu ngoại lực lên trục $Ox$ bằng không ($\sum F_{kx}^{(e)} = 0$) thì động lượng theo phương đó bảo toàn: $Q_x = M v_{Cx} = \text{const}$.
  3. **Bảo toàn vị trí khối tâm:** Nếu ban đầu hệ đứng yên ($\vec{v}_{C0} = \vec{0}$) và $\sum F_{kx}^{(e)} = 0$, thì hoành độ khối tâm $C$ giữ nguyên ($x_C = \text{const} \implies \Delta x_C = 0$):
     $$m_1 \Delta x_1 + m_2 \Delta x_2 = 0$$
     *(Tổng quát cho $n$ vật: $\sum_{k=1}^n m_k \Delta x_k = 0$).*

#### B. Định lý Mômen động lượng & Điều kiện vật rắn chuyển động tịnh tiến
- **Mômen động lượng:**
  - Đối với điểm cố định $O$: $\vec{L}_O = \sum_{k=1}^n \left(\vec{r}_k \times m_k \vec{v}_k\right)$.
  - Đối với **vật rắn quay quanh trục cố định $Oz$**: $L_z = J_z \bar{\omega}$.
- **Định lý biến thiên mômen động lượng:**
  - Quanh điểm cố định $O$: $\dfrac{d\vec{L}_O}{dt} = \sum \vec{M}_O\left(\vec{F}_k^{(e)}\right)$.
  - Quanh **trục quay cố định $Oz$** (PTVP chuyển động quay):
    $$\frac{dL_z}{dt} = J_z \bar{\varepsilon} = \sum M_z\left(\vec{F}_k^{(e)}\right)$$
    *(Dạng hữu hạn với xung lượng ngoại lực: $J_z(\bar{\omega}_1 - \bar{\omega}_0) = \sum M_z(\vec{S}_k^{(e)})$).*
  - Quanh **khối tâm $C$** (vật rắn chuyển động phẳng):
    $$\frac{d\vec{L}_C}{dt} = J_C \vec{\varepsilon} = \sum \vec{M}_C\left(\vec{F}_k^{(e)}\right)$$
- **Định luật bảo toàn mômen động lượng:**
  Nếu tổng mômen ngoại lực đối với trục cố định $Oz$ bằng không ($\sum M_z^{(e)} = 0$) thì $L_z = J_z \bar{\omega} = \text{const}$:
  $$J_1 \bar{\omega}_1 = J_2 \bar{\omega}_2$$
  *(Khi người hoặc vật thu gọn về gần trục quay làm $J_z$ giảm, vận tốc góc $\omega$ phải tăng tương ứng!)*
- **Điều kiện để vật rắn chuyển động tịnh tiến** (không quay, giữ $\vec{\varepsilon} = \vec{0}$):
  $$\sum \vec{M}_C\left(\vec{F}_k^{(e)}\right) = \vec{0}$$
  **Cảnh báo bẫy lý thuyết:** Không được chọn điều kiện "tổng ngoại lực và tổng mômen bằng không" (đó là **đứng yên cân bằng**, không thể tăng tốc tịnh tiến!), và cũng không được lấy mômen đối với điểm $O$ bất kỳ khác $C$ (vì $\sum \vec{M}_O^{(e)} = \vec{M}_O(M\vec{a}_C) + \sum \vec{M}_C^{(e)} \neq \vec{0}$ khi $\vec{a}_C \neq \vec{0}$!).

---

### 3. Thuật toán giải 4 bước bài toán PTVP chất điểm & cơ hệ

- **Bước 1:** Vẽ đầy đủ các ngoại lực tác dụng lên vật (trọng lực $\vec{P} = m\vec{g}$, phản lực $\vec{N}$ vuông góc mặt tựa, lực ma sát $\vec{F}_{\text{ms}}$ ngược chiều chuyển động, lực căng dây $\vec{T}$, lực lò xo).
- **Bước 2:** Chọn hệ trục thích hợp: quỹ đạo cong tròn dùng $(\vec{\tau}, \vec{n})$ với $+\vec{n}$ hướng **vào tâm cong**; trượt thẳng dùng $(Ox, Oy)$ với $+Ox$ dọc phương trượt.
- **Bước 3:** Chiếu $m\vec{a} = \sum\vec{F}$ (hoặc $M\vec{a}_C = \sum\vec{F}^{(e)}$ cho cả cơ hệ) lên từng trục.
- **Bước 4:** Thay điều kiện biên tương ứng ($N = 0$ để tìm điểm rời mặt; $F_{\text{ms}} = f_{\text{đ}} N$ khi vật đã trượt; áp dụng $\sum F_{kx}^{(e)} = 0 \implies m_1\Delta x_1 + m_2\Delta x_2 = 0$ hoặc $\sum M_z^{(e)} = 0 \implies J_1\omega_1 = J_2\omega_2$ cho bài toán bảo toàn).

---

### 4. Ví dụ minh họa từ lý thuyết, định luật bảo toàn & đề thi thật

#### Ví dụ 6-1 (Hai câu lý thuyết kinh điển Đề `0001/2016` & `0002/2016`)
1. **Đề `0002/2016` — Câu 2 (`p.26`):** *"Khối tâm $C$ của cơ hệ chuyển động chịu ảnh hưởng của:"*
   - `a.` Ngoại lực và nội lực tác động lên hệ
   - `b.` Lực tương tác của các chất điểm thuộc hệ
   - `c.` Ngoại lực tác động lên hệ
   - `d.` Các câu a, b, c đều đúng
   - `e.` Các câu a, b, c, d đều sai
   - **Giải & Chốt đáp án `2c`:** Theo $M\vec{a}_C = \sum\vec{F}_k^{(e)}$, các nội lực từng đôi một trực đối nhau triệt tiêu hoàn toàn, nên gia tốc của khối tâm $C$ chỉ phụ thuộc vào **ngoại lực tác động lên hệ**.

2. **Đề `0001/2016` — Câu 2 (`p.23`):** *"Điều kiện để vật rắn chuyển động tịnh tiến là:"*
   - `a.` Tổng các ngoại lực bằng tổng các nội lực
   - `b.` Tổng các ngoại lực bằng không
   - `c.` Tổng các ngoại lực và tổng các mômen ngoại lực đối với tâm $C$ bằng không
   - `d.` Tổng mômen các ngoại lực đối với khối tâm $C$ bằng không
   - `e.` Tổng mômen các ngoại lực đối với điểm $O$ bất kỳ khác tâm $C$ bằng không
   - **Giải & Chốt đáp án `2d`:** Chuyển động tịnh tiến nghĩa là gia tốc góc $\vec{\varepsilon} = \vec{0}$ (trong khi $\vec{a}_C$ có thể khác $\vec{0}$!). Từ $J_C \vec{\varepsilon} = \sum \vec{M}_C^{(e)}$, điều kiện cần là $\sum \vec{M}_C^{(e)} = \vec{0}$. Phương án `c` ép thêm $\sum \vec{F}^{(e)} = \vec{0}$ sẽ thành vật đứng yên; phương án `e` lấy mômen quanh điểm $O \neq C$ bị dính thêm mômen lực quán tính $-M\vec{a}_C$ nên sai.

#### Ví dụ 6-2 (Trục Tự nhiên): Chất điểm rời mặt cầu trơn
**Đề bài:** Một viên bi nhỏ khối lượng $m$ được đẩy nhẹ từ đỉnh $A$ của một bán cầu nhẵn bán kính $R = 1{,}5\text{ m}$ (không ma sát) với vận tốc ban đầu $v_0 = 2\text{ m/s}$ ($g = 9{,}81\text{ m/s}^2$). Tìm góc $\theta$ (hợp bởi bán kính qua bi và phương thẳng đứng hướng lên) tại đúng vị trí viên bi bắt đầu rời khỏi mặt cầu và vận tốc $v$ tại đó. *(Kiểm tra thêm trường hợp thả nhẹ $v_0 = 0$)*.

**Lời giải chi tiết:**
- **Bước 1 (PTVP trên trục tự nhiên $(\vec{\tau}, \vec{n})$ ở góc lệch $\theta$):**
  Lực tác dụng gồm trọng lực $P = mg$ thẳng đứng xuống và phản lực pháp tuyến $N$ hướng ra ngoài dọc bán kính. Chọn $+\vec{n}$ hướng **vào tâm cầu $O$**, chiếu $m\vec{a} = \vec{P} + \vec{N}$ lên trục $\vec{n}$:
  $$m\frac{v^2}{R} = mg\cos\theta - N \implies N = mg\cos\theta - m\frac{v^2}{R}$$
- **Bước 2 (Liên hệ $v^2$ theo $\theta$ bằng Định lý Động năng / Bảo toàn cơ năng):**
  Công của phản lực $\vec{N} \perp \vec{v}$ bằng $0$; viên bi hạ độ cao $h = R(1 - \cos\theta)$:
  $$\frac{1}{2}mv^2 - \frac{1}{2}mv_0^2 = mgR(1 - \cos\theta) \implies v^2 = v_0^2 + 2gR(1 - \cos\theta)$$
- **Bước 3 (Điều kiện bắt đầu bứt khỏi mặt cầu $N = 0$):**
  Thế $N = 0$ và $v^2$ vào phương trình trục $\vec{n}$:
  $$\begin{aligned}
  g\cos\theta &= \frac{v_0^2}{R} + 2g(1 - \cos\theta) \\
  \implies 3g\cos\theta &= 2g + \frac{v_0^2}{R} \\
  \implies \cos\theta &= \frac{2}{3} + \frac{v_0^2}{3gR}
  \end{aligned}$$
- **Bước 4 (Thay số kiểm toán):**
  - Với $v_0 = 2\text{ m/s},\; R = 1{,}5\text{ m},\; g = 9{,}81\text{ m/s}^2$:
    $$\begin{aligned}
    \cos\theta &= \frac{2}{3} + \frac{2^2}{3 \cdot 9{,}81 \cdot 1{,}5} \\
    &\approx 0{,}6667 + 0{,}0906 = 0{,}7573 \implies \theta \approx 40{,}78^\circ
    \end{aligned}$$
    Vận tốc lúc rời mặt cầu: $v = \sqrt{gR\cos\theta} = \sqrt{9{,}81 \cdot 1{,}5 \cdot 0{,}7573} \approx 3{,}34\text{ m/s}$.
  - Trường hợp kinh điển $v_0 = 0$: $\cos\theta = \frac{2}{3} \implies \theta \approx 48{,}19^\circ$ (nhớ con số $\frac{2}{3}$ này để kiểm tra nhanh!).

#### Ví dụ 6-3 (Ứng dụng Định lý Khối tâm từ Đề thật — Đề `1`, `pp. 67–69`, Câu 13)
**Đề bài:** Cơ hệ gồm lăng trụ $C$ khối lượng $m_3 = 3m_2$ đặt trên mặt sàn ngang không ma sát, mặt nghiêng của lăng trụ hợp với sàn góc $\alpha$. Trên mặt ngang của $C$ có con lăn $B$ khối lượng $m_2$, trên mặt nghiêng góc $\alpha$ có tải $A$ khối lượng $m_1 = 1{,}5m_2$ trượt xuống tương đối dọc theo mặt nghiêng với gia tốc $\ddot{s}_1$. Biết lăng trụ $C$ dịch chuyển ngang với gia tốc $\ddot{s}_2$. Tính áp lực $N$ của lăng trụ $C$ lên mặt sàn ngang.

**Lời giải 2 dòng bằng Định lý khối tâm $M\vec{a}_C = \sum\vec{F}^{(e)}$:**
- **Phân tích ngoại lực thẳng đứng tác dụng lên CẢ HỆ $(A + B + C)$:**
  Chỉ có tổng trọng lực hướng xuống $P_{\text{tổng}} = (m_1 + m_2 + m_3)g = (1{,}5m_2 + m_2 + 3m_2)g = 5{,}5m_2 g$ và phản lực sàn $N$ hướng lên. Toàn bộ lực căng dây, phản lực giữa $A$–$C$, $B$–$C$ đều là **nội lực nên tự triệt tiêu**!
- **Chiếu $M\vec{a}_C = \sum\vec{F}^{(e)}$ lên phương thẳng đứng hướng lên ($+Oy$):**
  - Lăng trụ $C$ và con lăn $B$ chỉ chuyển động ngang nên $a_{By} = a_{Cy} = 0$.
  - Tải $A$ trượt xuống mặt nghiêng góc $\alpha$ (so với $C$ đứng yên theo phương đứng) nên thành phần gia tốc thẳng đứng hướng xuống của $A$ là $a_{Ay} = -\ddot{s}_1\sin\alpha$.
  - Suy ra:
    $$\begin{aligned}
    N - 5{,}5m_2 g &= m_1(- \ddot{s}_1\sin\alpha) \\
    \implies N &= 5{,}5m_2 g - 1{,}5m_2\ddot{s}_1\sin\alpha
    \end{aligned}$$
  Đối chiếu **Đề `1` (`p.69`) Câu 13**: khớp tuyệt đối đáp án chính thức **`13a`**!

#### Ví dụ 6-4 (Chuẩn trắc nghiệm 12.2 — Bảo toàn vị trí khối tâm & Bẫy độ dời tương đối)
**Đề bài:** Một chiếc thuyền khối lượng $M = 160\text{ kg}$ ban đầu đứng yên trên mặt nước phẳng lặng (bỏ qua mọi lực cản theo phương ngang). Một người khối lượng $m = 40\text{ kg}$ đi từ mũi đến lái thuyền với quãng đường dài $L = 3{,}0\text{ m}$ **so với thuyền**. Độ dịch chuyển của thuyền so với mặt nước là:
- `a.` $0{,}75\text{ m}$ $\quad$ `b.` $0{,}60\text{ m}$ $\quad$ `c.` $0{,}48\text{ m}$ $\quad$ `d.` $1{,}20\text{ m}$ $\quad$ `e.` Các đáp án còn lại đều sai

**Giải nhanh & Phá bẫy (Chốt `b`):**
- Vì $\sum F_x^{(e)} = 0$ và hệ ban đầu đứng yên ($\vec{v}_{C0} = \vec{0}$), hoành độ khối tâm chung bảo toàn ($m\,\Delta x_{\text{người}} + M\,\Delta x_{\text{thuyền}} = 0$).
- **Cẩn thận bẫy `0,75 m` (`a`):** $L = 3{,}0\text{ m}$ là độ dời **tương đối so với thuyền**, KHÔNG phải độ dời tuyệt đối so với mặt nước! Gọi thuyền giật lùi đoạn $d$ ($\Delta x_{\text{thuyền}} = -d$), thì độ dời tuyệt đối của người so với nước là $\Delta x_{\text{người}} = L - d$.
- Thay vào định luật bảo toàn vị trí khối tâm:
  $$m(L - d) + M(-d) = 0 \implies d = \frac{mL}{M + m} = \frac{40 \cdot 3{,}0}{160 + 40} = \frac{120}{200} = 0{,}60\text{ m}$$

#### Ví dụ 6-5 (Chuẩn trắc nghiệm 12.2 — Bảo toàn mômen động lượng $J_1\bar{\omega}_1 = J_2\bar{\omega}_2$)
**Đề bài:** Một sàn quay hình đĩa tròn đặc đồng chất khối lượng $M = 120\text{ kg}$, bán kính $R = 2\text{ m}$ đang quay tự do không ma sát quanh trục thẳng đứng đi qua tâm $O$ với vận tốc góc $\omega_1 = 1{,}5\text{ rad/s}$. Một người khối lượng $m = 60\text{ kg}$ (coi như chất điểm) ban đầu đứng ở mép sàn ($r_1 = R = 2\text{ m}$), sau đó đi vào đứng cách tâm $r_2 = 1\text{ m}$. Vận tốc góc mới $\omega_2$ của sàn quay bằng:
- `a.` $2{,}0\text{ rad/s}$ $\quad$ `b.` $6{,}0\text{ rad/s}$ $\quad$ `c.` $2{,}4\text{ rad/s}$ $\quad$ `d.` $3{,}0\text{ rad/s}$ $\quad$ `e.` Các đáp án còn lại đều sai

**Giải nhanh & Phá bẫy (Chốt `c`):**
- Toàn bộ ngoại lực (trọng lực thẳng đứng song song trục $Oz$, phản lực ổ quay cắt trục $Oz$) đều có mômen quanh trục quay $Oz$ bằng $0$ ($\sum M_z^{(e)} = 0$), nên mômen động lượng $L_z = J_z \omega$ được bảo toàn:
  - Mômen quán tính của sàn đĩa đặc: $J_{\text{sàn}} = \frac{1}{2}MR^2 = \frac{1}{2}(120)(2^2) = 240\text{ kg}\cdot\text{m}^2$.
  - Khi người ở mép ($r_1 = 2\text{ m}$): $J_1 = 240 + 60(2^2) = 480\text{ kg}\cdot\text{m}^2$.
  - Khi người ở $r_2 = 1\text{ m}$: $J_2 = 240 + 60(1^2) = 300\text{ kg}\cdot\text{m}^2$.
- Áp dụng $J_1 \omega_1 = J_2 \omega_2$:
  $$\omega_2 = \frac{J_1}{J_2}\omega_1 = \frac{480}{300} \cdot 1{,}5 = 2{,}4\text{ rad/s}$$
  *(Bẫy `a` $2{,}0\text{ rad/s}$ dùng nhầm $MR^2$ của vành mỏng; bẫy `b` $6{,}0\text{ rad/s}$ quên cộng $J_{\text{sàn}}$!).*

---

### 5. Bẫy hay sai & Bài tập tự luyện Ngày 6

::: warning 4 Bẫy hay sai ở Ngày 6
1. **Đặt sai chiều $a_n$:** Gia tốc pháp tuyến $\vec{a}_n$ luôn hướng **vào tâm cong**, nên $\sum F_{kn} = m\frac{v^2}{\rho}$ phải lấy dấu $(+)$ cho lực hướng vào tâm (như $mg\cos\theta$), dấu $(-)$ cho lực hướng ra ngoài (như phản lực $N$ trên cầu lồi).
2. **Nhầm công thức ma sát tĩnh vs trượt động:** Khi vật đã trượt, lực ma sát luôn là $F_{\text{ms}} = f_{\text{đ}} N$ (không được viết dấu $\le$); chỉ khi tìm điều kiện **không trượt / cân bằng** mới viết $\lvert F_{\text{ms}} \rvert \le f_0 N$.
3. **Đưa nội lực vào Định lý khối tâm hoặc tưởng công nội lực luôn $= 0$:** Nội lực không xuất hiện trong $M\vec{a}_C = \sum\vec{F}^{(e)}$ hay $J_z\bar{\varepsilon} = \sum M_z^{(e)}$, nhưng **công của nội lực $\sum A^{(i)}$ vẫn khác $0$** nếu hệ biến dạng hoặc có ma sát trượt bên trong hệ!
4. **Nhầm độ dời tương đối thành tuyệt đối trong $m_1\Delta x_1 + m_2\Delta x_2 = 0$:** Phải đổi độ dời của người/vật nhỏ về hệ quy chiếu gắn với mặt đất ($\Delta x_{\text{người}} = L - d$) trước khi thế vào công thức bảo toàn khối tâm!
:::

::: info Bài tập tự luyện Ngày 6 (Có đáp số kiểm toán — Xem thêm ở [BT ĐLH Chương 2](/bai-tap/dong-luc-hoc/chuong-2))
**Bài 6-1:** Một khối hộp nặng $m = 10\text{ kg}$ trượt xuống dốc nghiêng góc $\alpha = 30^\circ$ có hệ số ma sát trượt động $f_{\text{đ}} = 0{,}25$ ($g = 9{,}81\text{ m/s}^2$). Tính áp lực pháp tuyến $N$, lực ma sát trượt động $F_{\text{ms}}$ và gia tốc trượt $a$ của khối hộp.
- **Đáp số:** $N = mg\cos 30^\circ \approx 84{,}96\text{ N}$; $\quad F_{\text{ms}} = f_{\text{đ}} N \approx 21{,}24\text{ N}$; $\quad a = g(\sin 30^\circ - f_{\text{đ}}\cos 30^\circ) \approx 2{,}78\text{ m/s}^2$.

**Bài 6-2:** Một ô tô khối lượng $m = 1200\text{ kg}$ đi qua đỉnh một cầu vồng có bán kính cong $\rho = 40\text{ m}$ ($g = 10\text{ m/s}^2$). Tính áp lực của ô tô đè lên mặt cầu khi xe chạy qua đỉnh cầu với vận tốc $v = 36\text{ km/h}$ ($10\text{ m/s}$) và tốc độ tối đa để xe không bị bốc đầu rời mặt cầu tại đỉnh.
- **Đáp số:** $N = m\left(g - \frac{v^2}{\rho}\right) = 1200(10 - 2{,}5) = 9000\text{ N} = 9\text{ kN}$; $\quad v_{\text{max}} = \sqrt{g\rho} = 20\text{ m/s} = 72\text{ km/h}$.
:::

---

## Ngày 7: Chương 12.1 — Khối Tâm Tổng Hợp ($x_C, y_C$) & Mômen Quán Tính ($J_O, J_G$) Cho Hệ Ghép Thanh + Đĩa

### 1. Bảng tra nhanh không cần học thuộc & Quy tắc Huygens–Steiner

Trong đề thi `AS1003`, trước khi viết được lực quán tính hay động năng, bạn gần như luôn phải đi qua 2 câu hỏi mở màn: **(1) Tìm tọa độ khối tâm $C(x_C; y_C)$** và **(2) Tính mômen quán tính $J_O$ (hoặc $J_C$)**. Tin vui là bạn **được mang bảng tra giấy A4 vào phòng thi** — hãy nắm vững cách tra bảng và 2 quy tắc vàng sau:

#### A. Bảng tra Mômen Quán Tính $J_G$ qua Khối Tâm $G$ (Vuông góc mặt phẳng chuyển động)

| Vật rắn đồng chất (khối lượng $m$) | Hình dạng & Trục quay | Công thức $J_G$ qua khối tâm $G$ | Lưu ý / Mẹo tránh nhầm cho người mất gốc |
| :--- | :--- | :---: | :--- |
| **Chất điểm** | Nằm cách trục quay đoạn $d$ | $J = m d^2$ | Vật nhỏ coi như chất điểm thì $J_G = 0$, chỉ còn $md^2$. |
| **Thanh thẳng mảnh** | Dài $L$, trục $\perp$ thanh tại **trung điểm $G$** | $J_G = \dfrac{1}{12}mL^2$ | Nếu trục $\perp$ thanh đi qua **1 đầu mút $O$**: $J_{\text{đầu}} = \dfrac{1}{3}mL^2$. |
| **Đĩa tròn đặc / Trụ đặc** | Bán kính $R$, trục đi qua tâm $G$ | $J_G = \dfrac{1}{2}mR^2$ | Chú ý chữ **"đặc"** trong đề thi $\implies$ có hệ số $\frac{1}{2}$. |
| **Vành tròn mỏng / Ống trụ mỏng** | Bán kính $R$, trục đi qua tâm $G$ | $J_G = mR^2$ | Chú ý chữ **"vành mỏng / ống không đáy"** $\implies$ hệ số là $1$ (không có $\frac{1}{2}$!). |
| **Tấm chữ nhật mỏng** | Cạnh $a \times b$, trục $\perp$ tấm tại tâm $G$ | $J_G = \dfrac{1}{12}m(a^2 + b^2)$ | Trường hợp **tấm hình vuông** cạnh $a$: $J_G = \dfrac{1}{6}ma^2$. |
| **Khối cầu đặc** | Bán kính $R$, trục qua tâm $G$ | $J_G = \dfrac{2}{5}mR^2$ | Dùng thêm nếu đề cho quả cầu đặc (vỏ cầu rỗng mỏng: $\frac{2}{3}mR^2$). |
| **Vật cho bán kính quán tính $\rho_G$** | Đề cho sẵn $\rho_G$ (ròng rọc 2 tầng) | $J_G = m\rho_G^2$ | Thấy ký hiệu $\rho$ hoặc $\rho_G$ là nhân luôn $m\rho_G^2$, không nhân $\frac{1}{2}$! |

#### B. Công thức Khối tâm Hệ ghép & Định lý dời trục song song (Huygens–Steiner)

- **Tọa độ khối tâm tổng hợp $C(x_C; y_C)$ của hệ gồm $n$ vật:**
  $$x_C = \frac{\sum_{i=1}^n m_i x_i}{\sum_{i=1}^n m_i}, \qquad y_C = \frac{\sum_{i=1}^n m_i y_i}{\sum_{i=1}^n m_i}$$
  *(Mẹo đối với khung gồm các thanh thẳng đồng chất, cùng tiết diện và tổng khối lượng $m$: khối lượng từng thanh tỉ lệ thuận với chiều dài $m_i = \frac{L_i}{\sum L_k} m$!)*

- **Định lý dời trục song song (Huygens–Steiner):**
  Muốn tính mômen quán tính của vật đối với trục qua $O$ (song song với trục qua khối tâm $G$ của chính vật đó và cách $G$ một đoạn $OG$):
  $$J_O = J_G + m \cdot OG^2$$
  Và khi đã có $J_O$ của toàn hệ, muốn tính ngược về $J_C$ (quanh khối tâm chung $C$ của cả hệ):
  $$J_C = J_O - M_{\text{tổng}} \cdot OC^2$$

::: danger CẢNH BÁO ĐỎ: Bẫy dời trục chết người hay gặp nhất!
1. **Cấm tuyệt đối lấy $J_{\text{đầu}} + m d^2$!** Định lý Steiner **CHỈ ĐÚNG** khi xuất phát từ **khối tâm $G$** của chính vật đó: $J_O = J_G + m \cdot OG^2$. Ví dụ thanh $AB$ (không có đầu nào gắn ở $O$) phải viết $J_O = \frac{1}{12}m_{AB}L^2 + m_{AB} \cdot OG_{AB}^2$, tuyệt đối không lấy $\frac{1}{3}m_{AB}L^2 + m_{AB} \cdot OA^2$.
2. **Đọc thật kỹ khoảng cách $OG$ trên hình vẽ:** Nếu thanh $OA$ dài $L$ được hàn **vào mép đĩa** bán kính $R$ (như Đề `1721` và Đề `0001/2015`), tâm đĩa $B$ nằm cách $O$ một đoạn **$L + R$**, không phải $L$!
3. **Phân biệt chiều trục $Ox, Oy$ trên hình đề cho:** Có đề vẽ $Ox$ hướng **sang phải**, $Oy$ **hướng lên** (Đề `1722`), nhưng cũng có đề vẽ $Ox$ hướng **sang trái**, $Oy$ **hướng xuống** (Đề `1721`) hoặc $Ox$ hướng **dọc theo thanh** (Đề `0001/2015`)! Luôn nhìn mũi tên trục trước khi viết $\cos\alpha, \sin\alpha$ và dấu $\pm$!
:::

---

### 2. Giải chi tiết 3 bài đề thi thật (Kiểm toán 100% bằng Python)

<div class="figure-container">
<svg viewBox="0 0 760 320" style="width: 100%; max-width: 740px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Sơ đồ hệ ghép thanh và đĩa Đề 1721 Bài 2 và phân tích vectơ lực quán tính ở Đề 1721 Câu 5">
  <rect x="8" y="8" width="364" height="304" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="388" y="8" width="364" height="304" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="190" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0369a1">Đề 1721 Bài 2 (Câu 3–4): Tọa độ C &amp; J_O</text>
  <text x="570" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f766e">Đề 1721 Câu 5: Góc (α + 45°) khi |ε| = ω²</text>

  <!-- Left Panel: De 1721 Bai 2 -->
  <!-- Pivot O at (256, 72) -->
  <line x1="240" y1="54" x2="272" y2="54" stroke="#475569" stroke-width="2" />
  <polygon points="248,54 264,54 256,72" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.4" />
  <!-- +Ox pointing LEFT -->
  <line x1="256" y1="72" x2="56" y2="72" stroke="#0284c7" stroke-width="1.8" />
  <polygon points="62,67 50,72 62,77" fill="#0284c7" />
  <text x="36" y="76" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0284c7">+x</text>
  <!-- +Oy pointing DOWN -->
  <line x1="256" y1="72" x2="256" y2="274" stroke="#0284c7" stroke-width="1.8" />
  <polygon points="251,268 256,280 261,268" fill="#0284c7" />
  <text x="256" y="296" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0284c7">+y</text>

  <!-- Right-hand k-hat badge -->
  <circle cx="318" cy="70" r="9" fill="#ffffff" stroke="#334155" stroke-width="1.5" />
  <circle cx="318" cy="70" r="2.6" fill="#334155" />
  <text x="333" y="74" font-family="sans-serif" font-size="11" font-weight="700" fill="#334155">k (ra)</text>

  <!-- Rod OA at angle alpha=60 deg below +Ox (going down-left from (256,72)) -->
  <line x1="256" y1="72" x2="196" y2="176" stroke="#0f172a" stroke-width="4" stroke-linecap="round" />
  <circle cx="175" cy="212" r="42" fill="#bae6fd" fill-opacity="0.55" stroke="#0f172a" stroke-width="2" />
  <line x1="196" y1="176" x2="175" y2="212" stroke="#475569" stroke-width="1.4" stroke-dasharray="4,3" />
  <!-- Radius R arrow -->
  <line x1="175" y1="212" x2="142" y2="238" stroke="#0369a1" stroke-width="1.5" />
  <polygon points="145,231 138,241 150,238" fill="#0369a1" />
  <text x="150" y="222" font-family="sans-serif" font-size="11" font-weight="700" fill="#0369a1">R</text>

  <!-- Points O, A, B, G_OA, C -->
  <circle cx="256" cy="72" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
  <text x="272" y="76" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">O</text>
  <circle cx="226" cy="124" r="3" fill="#475569" />
  <text x="234" y="132" font-family="sans-serif" font-size="11" fill="#475569">0,5L</text>
  <circle cx="196" cy="176" r="3.5" fill="#0f172a" />
  <text x="180" y="170" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">A</text>
  <circle cx="175" cy="212" r="3.8" fill="#0f172a" />
  <text x="186" y="220" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">B</text>

  <!-- Composite C at (190, 186) -->
  <circle cx="190" cy="186" r="4.5" fill="#dc2626" />
  <text x="202" y="182" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">C</text>
  <!-- Dashed projections of C -->
  <line x1="190" y1="186" x2="190" y2="72" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3" />
  <line x1="190" y1="186" x2="256" y2="186" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3" />
  <text x="218" y="64" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626">x_C</text>
  <text x="268" y="155" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626">y_C</text>

  <!-- Angle alpha arc from +Ox down-left to OA -->
  <path d="M 186 72 A 70 70 0 0 0 221 133" fill="none" stroke="#d97706" stroke-width="1.8" />
  <text x="172" y="110" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309">α</text>

  <!-- CW omega and eps arrows around O -->
  <path d="M 275 110 A 42 42 0 0 1 226 105" fill="none" stroke="#dc2626" stroke-width="1.7" />
  <polygon points="229,110 222,102 233,102" fill="#dc2626" />
  <text x="290" y="114" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626">ω, ε (CW)</text>

  <!-- Right Panel: Vector sum R_qt^n + R_qt^t when |eps|=w^2 -->
  <!-- Origin O' at (640, 82) -->
  <line x1="640" y1="82" x2="435" y2="82" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" />
  <polygon points="440,78 430,82 440,86" fill="#64748b" />
  <text x="418" y="86" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#334155">+x</text>
  <line x1="640" y1="82" x2="640" y2="215" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" />
  <polygon points="636,210 640,220 644,210" fill="#64748b" />
  <text x="654" y="218" font-family="sans-serif" font-size="12" font-weight="700" fill="#334155">+y</text>

  <!-- Ray O'C at alpha=35 deg below +Ox (going left-down) -->
  <line x1="640" y1="82" x2="558" y2="139" stroke="#0f172a" stroke-width="2.5" />
  <circle cx="640" cy="82" r="4" fill="#0f172a" />
  <text x="652" y="80" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">O</text>
  <circle cx="558" cy="139" r="4.5" fill="#dc2626" />
  <text x="546" y="132" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">C</text>

  <!-- R_qt^n outward along O->C -->
  <line x1="558" y1="139" x2="509" y2="173" stroke="#0284c7" stroke-width="2.4" />
  <polygon points="515,174 503,177 509,167" fill="#0284c7" />
  <text x="496" y="175" text-anchor="end" font-family="sans-serif" font-size="11" font-weight="700" fill="#0284c7">R_qt^n</text>

  <!-- R_qt^t opposing CW eps -->
  <line x1="558" y1="139" x2="592" y2="188" stroke="#16a34a" stroke-width="2.4" />
  <polygon points="586,186 596,194 593,182" fill="#16a34a" />
  <text x="604" y="191" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803d">R_qt^t</text>

  <!-- Parallelogram dashed lines & diagonal R_qt -->
  <line x1="509" y1="173" x2="543" y2="222" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3" />
  <line x1="592" y1="188" x2="543" y2="222" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3" />
  <line x1="558" y1="139" x2="543" y2="222" stroke="#dc2626" stroke-width="2.8" />
  <polygon points="539,215 542,228 549,217" fill="#dc2626" />
  <text x="542" y="246" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">R_qt = √2·M·ε·OC</text>

  <!-- Reference horizontal at C for alpha+45 -->
  <line x1="558" y1="139" x2="466" y2="139" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3" />
  <path d="M 520 139 A 38 38 0 0 0 551 176" fill="none" stroke="#d97706" stroke-width="1.7" />
  <text x="512" y="156" text-anchor="end" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309">α + 45°</text>

  <!-- M_O^qt CCW arrow at O -->
  <path d="M 672 68 A 34 34 0 0 0 622 52" fill="none" stroke="#dc2626" stroke-width="2" />
  <polygon points="626,56 616,52 624,47" fill="#dc2626" />
  <text x="682" y="64" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626">M_O^qt (+k)</text>
  <text x="570" y="294" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Góc giữa R_qt^n và R_qt là đúng 45° nên cộng thêm 45° vào α!</text>
</svg>
<div class="figure-caption">

Hình 7-1: Hệ ghép thanh OA và đĩa tròn B của Đề 1721 Bài 2 (trái) và hình bình hành giải thích góc α + 45° khi |ε| = ω² (phải)

</div>
</div>

#### Ví dụ 7-1 (Đề `1721` Bài 2, Câu 3–4, `pp. 7–8`): Thanh $OA$ hàn đĩa tròn đặc tâm $B$
**Đề bài:** Cho đĩa tròn đặc, dày đều, tâm $B$, bán kính $R$, khối lượng $m_B$ và thanh thẳng mảnh đồng chất $OA$ chiều dài $L$, khối lượng $m_{OA}$. Thanh $OA$ hàn trong mặt phẳng đĩa và theo phương xuyên tâm $B$ (đầu $A$ nối tại mép đĩa nên $OB = L + R$). Hệ quay quanh tâm $O$ cố định với hệ trục thuận $Oxy$ (trục $Ox$ hướng sang **trái**, trục $Oy$ hướng **xuống**, $\vec{k}$ hướng ra) và góc $\alpha$ như Hình 7-1.
1. *(Câu 3)* Xác định tọa độ khối tâm $C(x_C; y_C)$ của toàn hệ.
2. *(Câu 4)* Tính mômen quán tính $J_O$ của toàn hệ đối với tâm quay $O$.

**Lời giải chi tiết:**
1. **Tìm tọa độ khối tâm $C$ (`3e`):**
   - Thanh $OA$ có khối tâm $G_{OA}$ nằm ở trung điểm, cách $O$ đoạn $0{,}5L$.
   - Đĩa $B$ có khối tâm tại chính tâm $B$, cách $O$ đoạn $OB = L + R$.
   - Khoảng cách từ $O$ tới khối tâm chung $C$ dọc theo đường thẳng $OAB$:
     $$OC = \frac{m_{OA}(0{,}5L) + m_B(L + R)}{m_{OA} + m_B}$$
   - Vì $OC$ nằm ở góc phần tư $(+Ox, +Oy)$ hợp với $+Ox$ (sang trái) một góc $\alpha$:
     $$\begin{aligned}
     x_C &= OC\cos\alpha = \frac{0{,}5m_{OA}L + m_B(L + R)}{m_{OA} + m_B}\cos\alpha \\
     y_C &= OC\sin\alpha = \frac{0{,}5m_{OA}L + m_B(L + R)}{m_{OA} + m_B}\sin\alpha
     \end{aligned}$$
   - Đối chiếu các lựa chọn trên trang 7: khớp chính xác phương án **`3e`**! *(Bẫy `3b` đảo $\sin\alpha$ với $\cos\alpha$; bẫy `3c, 3d` gán nhầm cánh tay đòn $0{,}5L + R$ cho thanh $OA$).*

2. **Tính mômen quán tính $J_O$ (`4d`):**
   - **Thanh $OA$ quay quanh 1 đầu $O$:** $J_O(OA) = \dfrac{m_{OA}L^2}{3}$.
   - **Đĩa tròn đặc tâm $B$ (dời trục Steiner từ $B$ về $O$ với $OB = L + R$):**
     $$J_O(B) = J_B + m_B \cdot OB^2 = \frac{1}{2}m_B R^2 + m_B(R + L)^2$$
   - **Cộng cả hệ:**
     $$J_O = \frac{m_{OA}L^2}{3} + m_B\left[\frac{R^2}{2} + (R + L)^2\right]$$
   - Đối chiếu trang 8: khớp chính xác phương án **`4d`**! *(Bẫy `4a, 4c` dùng $R^2$ của vành mỏng thay vì $\frac{R^2}{2}$ của đĩa đặc; bẫy `4b, 4c` dùng $\frac{m_{OA}L^2}{12}$ thay vì $\frac{m_{OA}L^2}{3}$).*

---

<div class="figure-container">
<svg viewBox="0 0 760 300" style="width: 100%; max-width: 740px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Sơ đồ khung chữ T đồng chất OIAB của Đề 1722 Bài 2 và quy tắc đúng sai định lý dời trục Steiner">
  <rect x="8" y="8" width="364" height="284" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="388" y="8" width="364" height="284" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="190" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0369a1">Đề 1722 Bài 2 (Câu 3–4): Khung chữ T OIAB</text>
  <text x="570" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#b45309">Quy tắc vàng Dời trục Steiner cho thanh AB</text>

  <!-- Left panel: OIAB T-frame -->
  <!-- Pivot O at (104, 86), +Ox right, +Oy up -->
  <line x1="88" y1="68" x2="120" y2="68" stroke="#475569" stroke-width="2" />
  <polygon points="96,68 112,68 104,86" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.4" />
  <line x1="104" y1="86" x2="292" y2="86" stroke="#0284c7" stroke-width="1.8" />
  <polygon points="288,81 299,86 288,91" fill="#0284c7" />
  <text x="312" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0284c7">+x</text>
  <line x1="104" y1="86" x2="104" y2="42" stroke="#0284c7" stroke-width="1.8" />
  <polygon points="99,48 104,37 109,48" fill="#0284c7" />
  <text x="90" y="47" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#0284c7">+y</text>

  <!-- Rod OI: length 170 at 60 deg below +Ox -> dx=85, dy=147 -> I=(189, 233) -->
  <!-- Bar AB: half-length l=57 perp to OI -> unit perp = (0.866, -0.5) => B=(238, 205), A=(140, 261) -->
  <line x1="104" y1="86" x2="189" y2="233" stroke="#0f172a" stroke-width="4" stroke-linecap="round" />
  <line x1="140" y1="261" x2="238" y2="205" stroke="#0f172a" stroke-width="4" stroke-linecap="round" />
  <!-- Right angle mark at I -->
  <polyline points="183,223 193,217 199,227" fill="none" stroke="#475569" stroke-width="1.4" />

  <!-- Labels O, I, A, B -->
  <circle cx="104" cy="86" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
  <text x="88" y="92" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">O</text>
  <circle cx="189" cy="233" r="3.5" fill="#0f172a" />
  <text x="193" y="250" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">I</text>
  <text x="128" y="269" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">A</text>
  <text x="250" y="205" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">B</text>

  <!-- Center G_OI at 1.5l -> (146.5, 159.5) and composite C at 2.1l -> (163.5, 189) -->
  <circle cx="146" cy="159" r="3" fill="#475569" />
  <text x="135" y="158" text-anchor="end" font-family="sans-serif" font-size="11" fill="#475569">G_OI</text>
  <circle cx="164" cy="189" r="4.5" fill="#dc2626" />
  <text x="176" y="188" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">C</text>

  <!-- Projections of C -->
  <line x1="164" y1="189" x2="164" y2="86" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3" />
  <line x1="164" y1="189" x2="104" y2="189" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3" />
  <text x="164" y="76" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626">x_C &gt; 0</text>
  <text x="96" y="193" text-anchor="end" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626">y_C &lt; 0</text>

  <!-- Angle 60 deg -->
  <path d="M 150 86 A 46 46 0 0 1 127 126" fill="none" stroke="#d97706" stroke-width="1.8" />
  <text x="150" y="114" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309">60°</text>

  <!-- CCW omega & eps at O -->
  <path d="M 122 108 A 28 28 0 0 0 128 66" fill="none" stroke="#16a34a" stroke-width="1.7" />
  <polygon points="124,71 128,60 133,70" fill="#16a34a" />
  <text x="140" y="56" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803d">ω, ε (CCW)</text>
  <text x="275" y="150" font-family="sans-serif" font-size="11" fill="#334155">m_OI = (3/5)m</text>
  <text x="275" y="168" font-family="sans-serif" font-size="11" fill="#334155">m_AB = (2/5)m</text>
  <text x="275" y="186" font-family="sans-serif" font-size="11" fill="#dc2626">OC = 2,1 l</text>

  <!-- Right panel: Steiner rule comparison -->
  <rect x="406" y="54" width="328" height="96" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.6" />
  <text x="420" y="76" font-family="sans-serif" font-size="12" font-weight="700" fill="#047857">CÁCH ĐÚNG (Bắt đầu từ khối tâm I của AB):</text>
  <text x="420" y="100" font-family="sans-serif" font-size="12" fill="#0f172a">J_O(AB) = J_I(AB) + m_AB . OI^2</text>
  <text x="420" y="122" font-family="sans-serif" font-size="12" fill="#065f46">= (1/12).m_AB.(2l)^2 + m_AB.(3l)^2 = (56/15) m l^2</text>

  <rect x="406" y="166" width="328" height="106" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.6" />
  <text x="420" y="188" font-family="sans-serif" font-size="12" font-weight="700" fill="#b91c1c">BẪY CẤM ĐỤNG (Lấy từ đầu A hoặc quên dời trục):</text>
  <text x="420" y="212" font-family="sans-serif" font-size="12" fill="#0f172a">- Cấm dùng (1/3).m_AB.(2l)^2 + m_AB.OA^2 (SAI!)</text>
  <text x="420" y="234" font-family="sans-serif" font-size="12" fill="#0f172a">- Cấm cộng m_AB.OI^2 vào (1/3)m_AB(2l)^2 (SAI!)</text>
  <text x="420" y="256" font-family="sans-serif" font-size="11" font-weight="700" fill="#b91c1c">Chỉ duy nhất J_G mới được phép cộng thêm m.OG^2!</text>
</svg>
<div class="figure-caption">

Hình 7-2: Tọa độ khối tâm khung chữ T OIAB của Đề 1722 Bài 2 (trái) và quy tắc bất biến của định lý dời trục Steiner (phải)

</div>
</div>

#### Ví dụ 7-2 (Đề `1722` Bài 2, Câu 3–4, `p. 11`): Khung chữ T đồng chất $OIAB$
**Đề bài:** Cho khung chữ T đồng chất $OIAB$ tổng khối lượng $m$, tiết diện đều, kích thước $OI = 3AI = 3BI = 3l$ (tức $OI = 3l,\; AB = 2l$, $OI \perp AB$ tại trung điểm $I$). Hệ quay quanh trục vuông góc mặt phẳng $Oxy$ đi qua $O$ (trục $Ox$ sang phải, $Oy$ hướng lên), ở vị trí thanh $OI$ nằm ở góc phần tư IV hợp với $+Ox$ góc $60^\circ$ như Hình 7-2.
1. *(Câu 3)* Tìm tọa độ trọng tâm $C(x_C; y_C)$ của khung $OIAB$.
2. *(Câu 4)* Tính mômen quán tính $J_O$ của khung đối với trục đi qua $O$.

**Lời giải chi tiết:**
- **Bước 1 (Chia khối lượng theo chiều dài):**
  Tổng chiều dài khung là $OI + AB = 3l + 2l = 5l$. Do đồng chất tiết diện đều:
  $$m_{OI} = \frac{3}{5}m, \qquad m_{AB} = \frac{2}{5}m$$
- **Bước 2 (Tọa độ khối tâm $C$ — Câu 3):**
  - Khối tâm của thanh $OI$ cách $O$ đoạn $OG_{OI} = 1{,}5l$; khối tâm của thanh $AB$ nằm ngay tại $I$ cách $O$ đoạn $OI = 3l$:
    $$OC = \frac{\frac{3}{5}m \cdot (1{,}5l) + \frac{2}{5}m \cdot (3l)}{m} = (0{,}9 + 1{,}2)l = \frac{21}{10}l$$
  - Vì $OI$ nằm dưới $+Ox$ một góc $60^\circ$ ($+x > 0,\; y < 0$):
    $$x_C = \frac{21}{10}l\cos 60^\circ = \frac{21}{20}l, \qquad y_C = -\frac{21}{10}l\sin 60^\circ = -\frac{21\sqrt{3}}{20}l$$
  - Khớp chính xác phương án **`3c`** trên trang 11!
- **Bước 3 (Mômen quán tính $J_O$ — Câu 4):**
  - Thanh $OI$ quay quanh 1 đầu $O$:
    $$J_O(OI) = \frac{1}{3}m_{OI}(3l)^2 = \frac{1}{3}\left(\frac{3}{5}m\right)(9l^2) = \frac{9}{5}ml^2 = \frac{27}{15}ml^2$$
  - Thanh $AB$ dời trục từ khối tâm $I$ (trung điểm thanh $AB$ dài $2l$) về $O$ với $OI = 3l$:
    $$\begin{aligned}
    J_O(AB) &= \frac{1}{12}m_{AB}(2l)^2 + m_{AB}(3l)^2 \\
    &= \frac{1}{12}\left(\frac{2}{5}m\right)(4l^2) + \left(\frac{2}{5}m\right)(9l^2) \\
    &= \left(\frac{2}{15} + \frac{54}{15}\right)ml^2 = \frac{56}{15}ml^2
    \end{aligned}$$
  - Cộng cả khung:
    $$J_O = \frac{27}{15}ml^2 + \frac{56}{15}ml^2 = \frac{83}{15}ml^2$$
  - **Ghi chú kiểm toán đề thật:** Trên bản in gốc của Đề `1722` (`p.11`), cả hai phương án **`b`** và **`d`** đều bị in trùng là $J_O = \frac{83}{15}ml^2$ (và cả hai ô đều được đánh dấu đáp án đúng). Kết quả toán học duy nhất chính xác là $\frac{83}{15}ml^2$.

---

#### Ví dụ 7-3 (Đề `0001/2015`, Câu 2–4, `pp. 33–34`): Bắt gọn vết khoanh tay sai trên tài liệu cũ!
**Đề bài:** Cho cơ hệ gồm **vành tròn mỏng** đồng chất $O_1$ bán kính $R_1$, **đĩa tròn đặc** đồng chất $O_2$ bán kính $R_2$, hai thanh đồng chất tiết diện đều $L_1$ và $L_2$ nối thẳng hàng tại khớp $O$ (thanh $L_1$ nối từ $O$ đến mép vành $O_1$; thanh $L_2$ nối từ $O$ đến mép đĩa $O_2$ về phía đối diện). Trục $Ox$ hướng dọc từ $O_1$ qua $O$ tới $O_2$ (hướng xuống-phải). Biết:

$$\begin{aligned}
R_2 = 2R_1 &= 2R, & L_2 = 2L_1 &= 4R \\
m_{O_1} = m_{L_1} &= m, & m_{O_2} = 2m_{L_2} &= 4m
\end{aligned}$$

Tìm $J_O$ (Câu 2), $x_C$ (Câu 3) và $J_C$ (Câu 4). *(Lưu ý: trên bản PDF scan `pp. 33–34` có vết khoanh tay sai của người làm trước ở Câu 2 là `b` và Câu 4 là `e` — hãy kiểm toán từng số hạng!)*.

**Lời giải kiểm toán 100% từng số hạng:**
1. **Xác định khoảng cách tâm từng bộ phận tới gốc $O$ (theo $Ox$ hướng về phía $O_2$):**
   - Khối lượng 4 bộ phận: $m_{O_1} = m$, $m_{L_1} = m$, $m_{L_2} = 2m$, $m_{O_2} = 4m \implies M_{\text{tổng}} = 8m$.
   - Kích thước độ dài: $R_1 = R,\; R_2 = 2R,\; L_1 = 2R,\; L_2 = 4R$.
   - Tọa độ khối tâm từng phần trên trục $Ox$:
     - Thanh $L_1$ (nằm phía âm của $Ox$): $x_{L_1} = -\frac{L_1}{2} = -R$.
     - Vành tròn $O_1$ (tâm cách mép một bán kính $R_1$): $x_{O_1} = -(L_1 + R_1) = -3R$.
     - Thanh $L_2$ (nằm phía dương của $Ox$): $x_{L_2} = +\frac{L_2}{2} = +2R$.
     - Đĩa tròn $O_2$ (tâm cách mép một bán kính $R_2$): $x_{O_2} = +(L_2 + R_2) = +6R$.

2. **Tọa độ khối tâm $x_C$ (Câu 3 — Chốt `3b`):**
   $$\begin{aligned}
   x_C &= \frac{m(-3R) + m(-R) + 2m(2R) + 4m(6R)}{8m} \\
   &= \frac{-3 - 1 + 4 + 24}{8}R = \frac{24}{8}R = 3R
   \end{aligned}$$

3. **Mômen quán tính $J_O$ (Câu 2 — Chốt `2c`, vạch trần khoanh sai `2b`):**
   - Vành tròn mỏng $O_1$: $J_O(O_1) = m R_1^2 + m x_{O_1}^2 = mR^2 + m(-3R)^2 = 10mR^2$.
   - Thanh $L_1$ quay quanh đầu $O$: $J_O(L_1) = \frac{1}{3}m(2R)^2 = \frac{4}{3}mR^2$.
   - Thanh $L_2$ quay quanh đầu $O$: $J_O(L_2) = \frac{1}{3}(2m)(4R)^2 = \frac{32}{3}mR^2$.
   - Đĩa tròn đặc $O_2$:
     $$\begin{aligned}
     J_O(O_2) &= \frac{1}{2}(4m)(2R)^2 + (4m)(6R)^2 \\
     &= 8mR^2 + 144mR^2 = 152mR^2
     \end{aligned}$$
   - **Tổng cộng:**
     $$J_O = 10 + \frac{4}{3} + \frac{32}{3} + 152 = 10 + 12 + 152 = 174mR^2$$
   - **Vì sao vết khoanh tay `2b` ($165mR^2$) trên PDF là SAI?** Lỗi thiếu đúng $9mR^2$ ($174 - 9 = 165$) thường rơi vào 1 trong 2 sai lầm kinh điển: hoặc **quên cộng mômen quán tính riêng quanh tâm** của vành $O_1$ ($1mR^2$) và đĩa $O_2$ ($8mR^2$: $1 + 8 = 9mR^2$), hoặc **lấy nhầm $\frac{1}{12}$ thay vì $\frac{1}{3}$** (quên $+md^2$) cho hai thanh $L_1, L_2$ (làm hụt $\frac{4-1}{3} + \frac{32-8}{3} = 1 + 8 = 9mR^2$)! Đáp án chuẩn xác là **`2c`** ($174mR^2$).

4. **Mômen quán tính $J_C$ (Câu 4 — Chốt `4a`, vạch trần khoanh sai `4e`):**
   Áp dụng Huygens–Steiner đảo chiều từ $O$ về khối tâm chung $C$ ($OC = 3R$, $M_{\text{tổng}} = 8m$):
   $$\begin{aligned}
   J_C &= J_O - M_{\text{tổng}} \cdot x_C^2 \\
   &= 174mR^2 - 8m(3R)^2 = (174 - 72)mR^2 = 102mR^2
   \end{aligned}$$
   Vì khoanh nhầm $J_O = 165$ nên người làm cũ trừ ra $165 - 72 = 93$ rồi khoanh nhầm `4e`. Với $J_O = 174mR^2$ đúng chuẩn, đáp án chính xác tuyệt đối là **`4a`** ($102mR^2$)!

---

## Ngày 8: Chương 13 — Nguyên Lý D'Alembert & Thu Gọn Hệ Lực Quán Tính Về Tâm Quay $O$ (Chủ Tủ Đề Bách Khoa)

### 1. Hiểu bản chất D'Alembert qua chiếc xe buýt phanh gấp

Hãy tưởng tượng bạn đang đứng trên một chiếc xe buýt:
- Khi xe **tăng tốc lao về phía trước** ($\vec{a}$ hướng tới trước), bạn thấy mình bị giật ngửa **về phía sau**.
- Khi xe **phanh gấp** ($\vec{a}$ hướng ngược về sau), bạn thấy mình bị lao nhào **về phía trước**.
- Khi xe **ôm cua gắt** ($\vec{a}_n$ hướng vào tâm vòng xoay), bạn thấy mình bị ép **văng ra phía ngoài**.

**Lực quán tính $\vec{F}_{\text{qt}} = -m\vec{a}$** chính là lực ảo giúp ta đứng bên trong vật đang tăng tốc mà vẫn giải bài toán **y như vật đang đứng yên cân bằng (Tĩnh học)**! Quy tắc sống còn chỉ có 3 chữ: **LUÔN NGƯỢC CHIỀU** gia tốc!

### 2. Công thức vàng thu gọn hệ lực quán tính của Vật rắn quay quanh trục cố định $O$

Khi một vật rắn (hoặc hệ ghép thanh + đĩa) khối lượng $M$, khối tâm $C$, mômen quán tính quanh $O$ là $J_O$ (quanh $C$ là $J_C$), đang quay quanh trục cố định $O$ với vận tốc góc $\vec{\omega}$ và gia tốc góc $\vec{\varepsilon}$:

1. **Hợp lực quán tính (Vectơ chính $\vec{R}_{\text{qt}}$):**
   Vì $\vec{a}_C = \vec{a}_C^n + \vec{a}_C^t$, hợp lực quán tính luôn có 2 thành phần vuông góc nhau:
   $$\vec{R}_{\text{qt}} = -M\vec{a}_C = \vec{R}_{\text{qt}}^n + \vec{R}_{\text{qt}}^t$$
   - **Thành phần pháp tuyến (lực quán tính ly tâm):**
     $$\vec{R}_{\text{qt}}^n = -M\left[\vec{\omega} \times \left(\vec{\omega} \times \overrightarrow{OC}\right)\right] = +M\omega^2 \overrightarrow{OC}$$
     Độ lớn $R_{\text{qt}}^n = M\omega^2 \cdot OC$; chiều **từ tâm $O$ phóng thẳng qua $C$ hướng RA XA tâm $O$** (vì $\vec{a}_C^n$ hướng vào $O$).
   - **Thành phần tiếp tuyến:**
     $$\vec{R}_{\text{qt}}^t = -M\left(\vec{\varepsilon} \times \overrightarrow{OC}\right)$$
     Độ lớn $R_{\text{qt}}^t = M\lvert\varepsilon\rvert \cdot OC$; phương vuông góc $OC$, chiều **NGƯỢC CHIỀU gia tốc góc $\vec{\varepsilon}$** (tức ngược chiều $\vec{a}_C^t$).

2. **Mômen ngẫu lực quán tính — BẪY CHẾT NGƯỜI PHÂN BIỆT $O$ VÀ $C$!**

| Yêu cầu của đề thi AS1003 | Điểm thu gọn | Cặp lực thu gọn đúng | Giải thích bản chất (không bao giờ nhầm!) |
| :--- | :---: | :--- | :--- |
| **"Thu gọn hệ lực quán tính về tâm quay $O$"** | Tâm $O$ | $\begin{cases} \vec{R}_{\text{qt}} = -M\vec{a}_C \\ \vec{M}_O^{\text{qt}} = -J_O \vec{\varepsilon} \end{cases}$ | **BẮT BUỘC DÙNG $J_O$!** (Dời $\vec{R}_{\text{qt}}^t$ từ $C$ về $O$ sinh thêm mômen $-M \cdot OC^2 \vec{\varepsilon}$, cộng với $-J_C\vec{\varepsilon}$ thành $-J_O\vec{\varepsilon}$). |
| **"Thu gọn hệ lực quán tính về khối tâm $C$"** | Khối tâm $C$ | $\begin{cases} \vec{R}_{\text{qt}} = -M\vec{a}_C \\ \vec{M}_C^{\text{qt}} = -J_C \vec{\varepsilon} \end{cases}$ | **BẮT BUỘC DÙNG $J_C$!** (Ở đây lực $\vec{R}_{\text{qt}}$ đặt ngay tại $C$ nên không còn cánh tay đòn quanh $C$, chỉ giữ lại mômen quay thuần $-J_C\vec{\varepsilon}$). |

::: tip Mẹo 10 giây tính nhanh khi gặp "$\lvert\varepsilon\rvert = \omega^2$" (Đề `1721` Câu 5, Đề `0001/2015` Câu 5)
Khi đề cho $|\varepsilon| = \omega^2$, hai vectơ thành phần $\vec{R}_{\text{qt}}^n$ và $\vec{R}_{\text{qt}}^t$ vừa **vuông góc nhau**, vừa có **độ lớn bằng hệt nhau**:
$$R_{\text{qt}}^n = R_{\text{qt}}^t = M\varepsilon \cdot OC$$
Do đó:
1. Đường chéo hình vuông cho ngay độ lớn hợp lực: $R_{\text{qt}} = \sqrt{2}\,M\varepsilon \cdot OC$.
2. Hợp lực $\vec{R}_{\text{qt}}$ lệch khỏi tia $\overrightarrow{OC}$ đúng một góc **$45^\circ$ về phía ngược chiều $\vec{\varepsilon}$**!
3. Nếu hệ quy chiếu tọa độ đánh dấu góc $\alpha$ từ $+Ox$ đến $\overrightarrow{OC}$ theo **đúng chiều ngược $\vec{\varepsilon}$**, thì góc hợp bởi $\vec{R}_{\text{qt}}$ và $+Ox$ là **$\alpha + 45^\circ$**, cho ngay $\cos(\alpha + 45^\circ)\vec{i} + \sin(\alpha + 45^\circ)\vec{j}$!
:::

---

### 3. Giải chi tiết & kiểm toán 5 bài đề thi thật

#### Ví dụ 8-1 (Đề `1721` Câu 5, `p. 8` — Key chuẩn `5c`): Thu gọn về tâm $O$ khi $|\varepsilon| = \omega^2$
**Đề bài:** Tiếp tục cơ hệ thanh $OA$ hàn đĩa $B$ ở Ví dụ 7-1 (trục $+Ox$ sang **trái**, $+Oy$ hướng **xuống**, $\vec{k}$ hướng **ra ngoài**; thanh hợp $+Ox$ góc $\alpha$; quay **cùng chiều kim đồng hồ** với $\omega$ và $\varepsilon = \omega^2$). Hãy thu gọn hệ lực quán tính về tâm $O$.

**Lời giải 2 cách (Hình học 10 giây & Giải tích vectơ kiểm chứng 100%):**
- **Cách 1 (Hình học $45^\circ$ — cực nhanh):**
  - Tổng khối lượng $M = m_{OA} + m_B$, tích $M \cdot OC = m_{OA}\frac{L}{2} + m_B(L + R)$.
  - Vì $\varepsilon = \omega^2$, hai thành phần $\vec{R}_{\text{qt}}^n$ (ra xa $O$, góc $\alpha$ dưới $+Ox$) và $\vec{R}_{\text{qt}}^t$ (ngược chiều CW của $\vec{\varepsilon}$, tức quay tiếp xuống dưới thêm $90^\circ$ thành góc $\alpha + 90^\circ$) có độ lớn bằng nhau là $M\varepsilon \cdot OC$.
  - Hợp lực $\vec{R}_{\text{qt}}'$ nằm chính giữa góc $\alpha$ và $\alpha + 90^\circ$, tức hợp với $+Ox$ một góc **$\alpha + 45^\circ$** trong góc phần tư $(+Ox, +Oy)$ (nhìn Hình 7-1 phải):
    $$\begin{aligned}
    \vec{R}_{\text{qt}}' &= \sqrt{2}\varepsilon\left[m_{OA}\frac{L}{2} + m_B(L + R)\right] \\
    &\quad \times \left[\cos(\alpha + 45^\circ)\vec{i} + \sin(\alpha + 45^\circ)\vec{j}\right]
    \end{aligned}$$
  - Về mômen quán tính tại $O$: vì $\vec{\varepsilon}$ quay **cùng chiều kim đồng hồ** nên $\vec{\varepsilon} = -\varepsilon\vec{k}$, suy ra:
    $$\begin{aligned}
    \vec{M}_O^{\text{qt}} &= -J_O \vec{\varepsilon} = -J_O(-\varepsilon\vec{k}) \\
    &= +\left\{\left[\frac{m_{OA}L^2}{3} + m_B\left(\frac{R^2}{2} + (R + L)^2\right)\right]\varepsilon\right\}\vec{k}
    \end{aligned}$$

- **Cách 2 (Giải tích vectơ bằng tích có hướng để kiểm toán dấu):**
  - Ta có $\overrightarrow{OC} = OC(\cos\alpha\,\vec{i} + \sin\alpha\,\vec{j})$, $\vec{\omega} = -\omega\vec{k}$, $\vec{\varepsilon} = -\varepsilon\vec{k}$.
  - Tính $\vec{a}_C^t = \vec{\varepsilon} \times \overrightarrow{OC} = \varepsilon\cdot OC(\sin\alpha\,\vec{i} - \cos\alpha\,\vec{j})$, nên:
    $$\vec{R}_{\text{qt}}^t = -M\vec{a}_C^t = M\varepsilon\cdot OC(-\sin\alpha\,\vec{i} + \cos\alpha\,\vec{j})$$
  - Cộng với $\vec{R}_{\text{qt}}^n = M\omega^2\cdot OC(\cos\alpha\,\vec{i} + \sin\alpha\,\vec{j})$ (với $\omega^2 = \varepsilon$):
    $$\begin{aligned}
    \vec{R}_{\text{qt}}' &= M\varepsilon\cdot OC\left[(\cos\alpha - \sin\alpha)\vec{i} + (\sin\alpha + \cos\alpha)\vec{j}\right] \\
    &= \sqrt{2}M\varepsilon\cdot OC\left[\cos(\alpha + 45^\circ)\vec{i} + \sin(\alpha + 45^\circ)\vec{j}\right]
    \end{aligned}$$
  - Khớp từng dấu với phương án **`5c`**! *(Bẫy `5a, 5d` đổi nhầm $\cos$ và $\sin$, đồng thời dùng $\frac{L^2}{12}$ thay vì $\frac{L^2}{3}$).*

---

#### Ví dụ 8-2 (Đề `1722` Câu 5, `p. 12` — Key chuẩn `5a`): Thu gọn về tâm $O$ khung chữ T $OIAB$
**Đề bài:** Tiếp tục khung chữ T $OIAB$ ở Ví dụ 7-2 ($x_C = \frac{21}{20}l,\; y_C = -\frac{21\sqrt{3}}{20}l,\; J_O = \frac{83}{15}ml^2$). Quan sát mũi tên trên hình đề `1722` (`p. 11`), cả $\vec{\omega}$ và $\vec{\varepsilon}$ đều quay **ngược chiều kim đồng hồ (CCW)** tức $\vec{\omega} = +\omega\vec{k},\; \vec{\varepsilon} = +\varepsilon\vec{k}$. Thu gọn hệ lực quán tính về tâm $O$.

**Lời giải kiểm toán chi tiết:**
- Bán kính vectơ khối tâm: $\overrightarrow{OC} = \frac{21}{20}l\left(\vec{i} - \sqrt{3}\vec{j}\right)$.
- Thành phần ly tâm (cùng hướng $\overrightarrow{OC}$ ra xa $O$):
  $$\vec{R}_{\text{qt}}^n = m\omega^2 \overrightarrow{OC} = \frac{21}{20}ml\left(\omega^2\vec{i} - \sqrt{3}\omega^2\vec{j}\right)$$
- Gia tốc tiếp tuyến:
  $$\begin{aligned}
  \vec{a}_C^t &= \vec{\varepsilon} \times \overrightarrow{OC} \\
  &= (0;\; 0;\; \varepsilon) \times \left(\frac{21}{20}l;\; -\frac{21\sqrt{3}}{20}l;\; 0\right) \\
  &= \frac{21}{20}l\varepsilon\left(\sqrt{3}\vec{i} + \vec{j}\right)
  \end{aligned}$$
  Suy ra thành phần tiếp tuyến quán tính $\vec{R}_{\text{qt}}^t = -m\vec{a}_C^t = \frac{21}{20}ml\left(-\sqrt{3}\varepsilon\vec{i} - \varepsilon\vec{j}\right)$.
- Hợp lực quán tính $\vec{R}_O^{\text{qt}} = \vec{R}_{\text{qt}}^n + \vec{R}_{\text{qt}}^t$ và mômen tại tâm quay $O$:
  $$\begin{cases}
  \vec{R}_O^{\text{qt}} = \dfrac{21}{20}ml\left[\left(-\sqrt{3}\varepsilon + \omega^2\right)\vec{i} - \left(\sqrt{3}\omega^2 + \varepsilon\right)\vec{j}\right] \\
  \vec{M}_O^{\text{qt}} = -J_O \vec{\varepsilon} = -\dfrac{83}{15}ml^2\varepsilon\vec{k}
  \end{cases}$$
- Khớp chính xác phương án **`5a`** trên trang 12!

---

#### Ví dụ 8-3 (Đề `0001/2015` Câu 5, `p. 34` — Key chuẩn `5b`, sửa khoanh sai `5d`): Thu gọn về khối tâm $C$!
**Đề bài:** Tiếp tục hệ vành $O_1$ + hai thanh $L_1, L_2$ + đĩa $O_2$ ở Ví dụ 7-3 ($M_{\text{tổng}} = 8m,\; x_C = 3R,\; y_C = 0,\; J_C = 102mR^2$). Hệ quay **cùng chiều kim đồng hồ** ($\vec{\omega} = -\omega\vec{k},\; \vec{\varepsilon} = -\omega^2\vec{k}$ vì $\varepsilon = \omega^2$). Thu gọn hệ lực quán tính **về khối tâm $C$**.

**Lời giải kiểm toán chi tiết:**
- Vì $\overrightarrow{OC} = 3R\vec{i}$ nên:
  - $\vec{R}_{\text{qt}}^n = M_{\text{tổng}}\omega^2\overrightarrow{OC} = 8m\omega^2(3R\vec{i}) = +24mR\omega^2\vec{i}$ (ra xa $O$ dọc $+Ox$).
  - $\vec{a}_C^\tau = \vec{\varepsilon} \times \overrightarrow{OC} = (-\omega^2\vec{k}) \times (3R\vec{i}) = -3R\omega^2\vec{j}$, nên $\vec{R}_{\text{qt}}^\tau = -8m\vec{a}_C^\tau = +24mR\omega^2\vec{j}$.
  - Thu gọn **về khối tâm $C$** nên dùng **$J_C = 102mR^2$** (cấm dùng $J_O = 174$!):
    $$\vec{M}_{\text{qt}}^C = -J_C \vec{\varepsilon} = -102mR^2(-\omega^2\vec{k}) = +102mR^2\omega^2\vec{k}$$
- **Kết luận:** Đáp án đúng duy nhất là **`5b`** (trong khi vết khoanh `5d` trên PDF vừa đảo nhầm $\vec{i}, \vec{j}$ vừa sai dấu $-102\vec{k}$, còn `5a, 5c` dính bẫy $J_O = 174$!).

---

#### Ví dụ 8-4 (Đề `0002/2015` Câu 2–3, `pp. 39–40` — Key chuẩn `2d, 3a`) & Đề `2` (`26/12/2013` Câu 7, `p. 48`)
1. **Đề `0002/2015` Câu 2–3 (`pp. 39–40`):** Tấm hình vuông $ABCD$ mỏng cạnh $a = 0{,}5\text{ m}$, khối lượng $m = 2\text{ kg}$ đặt trong mặt phẳng ngang $Axy$ ($Ax$ sang phải, $Ay$ lên trên, $AD$ nghiêng $15^\circ$ về bên phải $+Ay$ nên đường chéo $AE$ hợp $+Ax$ góc $30^\circ$). Tấm quay ngược KĐH quanh $A$ với $\omega = 0{,}5\text{ rad/s}$, $\varepsilon$ và chịu ngẫu lực $M = 10\text{ N}\cdot\text{m}$ ngược KĐH. Biết $J_{zE} = \frac{ma^2}{6}$.
   - **Chọn mô hình thu gọn lực quán tính đúng (Câu 2):** Vì $\omega = 0{,}5\text{ rad/s} \neq 0$ nên lực ly tâm $\vec{F}_n^{\text{qt}} = m\vec{a}_E^n \neq \vec{0}$ (hướng từ $A \to E$ ra xa $A$), lực tiếp tuyến $\vec{F}_\tau^{\text{qt}} = m\vec{a}_E^\tau$ vuông góc $AE$ quay theo chiều **thuận KĐH** (ngược $\varepsilon$) và mômen tại khối tâm $E$ là $\vec{M}_E^{\text{qt}} = J_{zE}\vec{\varepsilon}$ cũng quay **thuận KĐH**. Phương án chuẩn duy nhất là **`2d`**! *(Vết khoanh tay `2c` trên PDF chọn nhầm mô hình có $\vec{F}_n^{\text{qt}} = 0$ — bẫy cực kỳ nguy hiểm vì bỏ quên $\omega = 0{,}5\text{ rad/s}$!).*
   - **Tính gia tốc góc $\varepsilon$ (Câu 3):** Khoảng cách $AE = \frac{a\sqrt{2}}{2}$. Theo Huygens–Steiner:
     $$\begin{aligned}
     J_{zA} &= J_{zE} + m \cdot AE^2 = \frac{ma^2}{6} + m\frac{a^2}{2} \\
     &= \frac{2}{3}ma^2 = \frac{2}{3}(2)(0{,}5)^2 = \frac{1}{3}\text{ kg}\cdot\text{m}^2
     \end{aligned}$$
     Phương trình quay quanh $A$: $\sum M_A = M - J_{zA}\varepsilon = 0 \implies \varepsilon = \frac{M}{J_{zA}} = \frac{10}{1/3} = 30\text{ rad/s}^2$ $\implies$ Chốt **`3a`**.

2. **Đề `2` (`26/12/2013` Câu 7, `p. 48` — Key chuẩn `7c`):** Ròng rọc động trụ tròn đặc $C$ khối lượng $m_C = 2\text{ kg}$, bán kính $R_C = 2r$ treo tải $D$, nhánh dây phải gắn cố định lên trần, nhánh trái đi lên cuốn vào tầng trong $r_B = r$ của ròng rọc cố định $B$. Khi hệ số ma sát ở $A$ là $f = 0$, tải $A$ trượt xuống dốc với $a_A = \frac{530}{160} = \frac{53}{16}\text{ m/s}^2$, kéo ròng rọc $B$ quay **ngược chiều kim đồng hồ (CCW)** và kéo nhánh dây trái của $C$ đi lên với $a_{\text{trái}} = \frac{a_A}{2}$ (trong khi nhánh phải của $C$ đứng yên). Do đó tâm $C$ đi lên với $a_C = \frac{a_A}{4} = \frac{53}{64} \approx 0{,}8281\text{ m/s}^2$ và ròng rọc $C$ quay **cùng chiều kim đồng hồ (CW)** với $\varepsilon_C = \frac{a_C}{R_C} = \frac{a_C}{2r}$. Khi thu gọn hệ lực quán tính của ròng rọc $C$ về tâm $C$:
   - Hợp lực quán tính hướng **xuống** (ngược với $\vec{a}_C$ hướng lên): $R_C^{\text{qt}} = m_C a_C = 2 \cdot \frac{53}{64} = \frac{53}{32} \approx 1{,}66\text{ N}$.
   - Mômen ngẫu lực quán tính quanh $C$ quay **ngược chiều kim đồng hồ (CCW)** (vì $\vec{M}_C^{\text{qt}} = -J_C \vec{\varepsilon}_C$ ngược chiều với $\vec{\varepsilon}_C$ đang quay CW):
     $$\begin{aligned}
     M_C^{\text{qt}} &= J_C \varepsilon_C = \left(\frac{1}{2}m_C R_C^2\right)\frac{a_C}{R_C} \\
     &= \frac{1}{2}(2)(2r)\left(\frac{53}{64}\right) = \frac{53}{32}r \approx 1{,}66r\text{ N}\cdot\text{m}
     \end{aligned}$$
   - Khớp hoàn toàn cả trị số lẫn mũi tên **CCW** của phương án **`7c`** trên đề thi thật (`p. 48`)!

---

## Ngày 9: Chương 13 Nâng Cao — Tính Phản Lực Động Ổ Trục & Điều Kiện Vật Không Lật / Không Trượt

### 1. Quy trình 3 bước "Phương trình Tĩnh động lực" giải mọi phản lực động

Muốn tìm phản lực tại chốt bản lề $O$ (gồm $X_O, Y_O$), áp lực nền $N$, hay sức căng dây khi cơ hệ đang quay và tăng tốc, ta áp dụng **Nguyên lý D'Alembert** theo đúng 3 bước y hệt Tĩnh học:

1. **Bước 1 (Giải phóng liên kết — Vẽ ngoại lực):** Tách riêng vật cần tìm phản lực; đặt hai thành phần phản lực ổ trục $(X_O, Y_O)$ (hoặc phản lực pháp tuyến $N$ và lực ma sát $F$), trọng lực $P = mg$, lực kéo và ngẫu lực chủ động $M$.
2. **Bước 2 (Đặt thêm hệ lực quán tính vào hình):**
   - Đặt tại khối tâm $C$: $\vec{R}_{\text{qt}}^n$ (hướng $O \to C$ ra xa $O$), $\vec{R}_{\text{qt}}^t$ (vuông góc $OC$, ngược chiều $\vec{\varepsilon}$), và ngẫu lực $\vec{M}_C^{\text{qt}}$ (ngược chiều $\vec{\varepsilon}$, độ lớn $J_C \lvert\varepsilon\rvert$).
   - *(Hoặc đặt $\vec{R}_{\text{qt}}$ và $\vec{M}_O^{\text{qt}} = -J_O\vec{\varepsilon}$ ngay tại tâm quay $O$ nếu muốn viết $\sum M_O$ nhanh trong 1 dòng).*
3. **Bước 3 (Viết 3 phương trình cân bằng Tĩnh học):**
   $$\sum X = 0, \qquad \sum Y = 0, \qquad \sum M_O = 0$$
   - Từ $\sum M_O = 0$ giải ngay $\varepsilon$ (do $X_O, Y_O$ đi qua $O$ tự biến mất!).
   - Thế $\varepsilon$ và $\omega$ vào $\sum X = 0,\; \sum Y = 0$ bấm máy ra ngay $(X_O, Y_O)$ kèm dấu âm/dương chuẩn xác!

::: tip Công thức giải nhanh điều kiện không trượt & không lật (Chống bẫy đề thi)
- **Không trượt trên mặt sàn / mặt dốc:** Tìm $F_{\text{ms}}$ và $N$ từ phương trình Tĩnh động lực, rồi ép điều kiện:
  $$\lvert F_{\text{ms}} \rvert \le f_0 N \quad \text{và} \quad N > 0$$
- **Không lật quanh mép tựa (hoặc không nhấc bánh):** Viết $\sum M_{\text{mép lật}} = 0$ (tính cả mômen lực quán tính $\vec{R}_{\text{qt}}$ đặt tại khối tâm $C$), ép phản lực ở mép còn lại $N_{\text{mép kia}} \ge 0$ (giới hạn sắp lật là $N = 0$). **Chú ý:** Với vật cao hẹp có $f_0 > \frac{b}{h}$, vật sẽ **lật trước khi kịp trượt**!
:::

---

### 2. Giải chi tiết các bài Phản lực động & Không trượt từ Đề thi thật

<div class="figure-container">
<svg viewBox="0 0 760 285" style="width: 100%; max-width: 740px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Sơ đồ phân tích tĩnh động lực D'Alembert tính phản lực động tại chốt A của tấm hình vuông ABCD Đề 0002/2015">
  <rect x="8" y="8" width="364" height="269" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="388" y="8" width="364" height="269" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="190" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0369a1">Đề 0002/2015 Câu 2–4: Tấm vuông ABCD</text>
  <text x="570" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f766e">Bước 2–3: Cân bằng tĩnh động lực tìm A_x, A_y</text>

  <!-- Left panel: Geometric plate ABCD with A at (110, 200) -->
  <!-- Axes Ax right, Ay up -->
  <line x1="110" y1="200" x2="290" y2="200" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" />
  <polygon points="286,196 296,200 286,204" fill="#64748b" />
  <text x="308" y="204" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#334155">x</text>
  <line x1="110" y1="200" x2="110" y2="54" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3" />
  <polygon points="106,58 110,48 114,58" fill="#64748b" />
  <text x="122" y="56" font-family="sans-serif" font-size="12" font-weight="700" fill="#334155">y</text>

  <!-- Square side s=110, AD at 15 deg clockwise from +y -> D = A + (28.5, -106.3) = (138, 94) -->
  <!-- B at -15 deg from +x -> B = A + (106.3, +28.5) = (216, 228) -->
  <!-- C = (244, 122), E = (177, 161) -->
  <polygon points="110,200 216,228 244,122 138,94" fill="#e0f2fe" fill-opacity="0.65" stroke="#0f172a" stroke-width="2" />
  <line x1="110" y1="200" x2="244" y2="122" stroke="#475569" stroke-width="1.3" stroke-dasharray="4,3" />
  <line x1="138" y1="94" x2="216" y2="228" stroke="#475569" stroke-width="1.3" stroke-dasharray="4,3" />

  <!-- Pin hinge A -->
  <polygon points="101,216 119,216 110,200" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.4" />
  <line x1="94" y1="216" x2="126" y2="216" stroke="#334155" stroke-width="2" />
  <circle cx="110" cy="200" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
  <circle cx="177" cy="161" r="4" fill="#dc2626" />

  <text x="92" y="204" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">A</text>
  <text x="228" y="238" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">B</text>
  <text x="256" y="122" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">C</text>
  <text x="138" y="83" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">D</text>
  <text x="176" y="148" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">E</text>

  <!-- 15 deg and 30 deg labels -->
  <path d="M 110 130 A 70 70 0 0 1 128 132" fill="none" stroke="#d97706" stroke-width="1.6" />
  <text x="123" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#b45309">15°</text>
  <path d="M 164 200 A 54 54 0 0 0 157 173" fill="none" stroke="#0284c7" stroke-width="1.6" />
  <text x="182" y="191" font-family="sans-serif" font-size="10" font-weight="700" fill="#0284c7">30°</text>

  <!-- Couple M CCW near C & w, eps CCW at A -->
  <path d="M 272 150 A 38 38 0 0 0 250 96" fill="none" stroke="#dc2626" stroke-width="2" />
  <polygon points="246,101 248,90 256,97" fill="#dc2626" />
  <text x="282" y="114" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">M (CCW)</text>
  <path d="M 142 220 A 35 35 0 0 0 120 166" fill="none" stroke="#16a34a" stroke-width="1.8" />
  <polygon points="116,172 118,160 126,168" fill="#16a34a" />
  <text x="58" y="170" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803d">ω, ε</text>

  <!-- Right panel: Free-body + D'Alembert forces -->
  <line x1="436" y1="188" x2="680" y2="188" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="4,3" />
  <line x1="436" y1="188" x2="436" y2="56" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="4,3" />
  <!-- Line AE at 30 deg up-right: A=(436, 188), E=(558, 118) -->
  <line x1="436" y1="188" x2="558" y2="118" stroke="#0f172a" stroke-width="2.2" stroke-dasharray="5,3" />
  <circle cx="436" cy="188" r="4.5" fill="#0f172a" />
  <text x="422" y="198" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">A</text>
  <circle cx="558" cy="118" r="4.5" fill="#dc2626" />
  <text x="558" y="103" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">E</text>

  <!-- Reactions Ax, Ay at A -->
  <line x1="436" y1="188" x2="500" y2="188" stroke="#0284c7" stroke-width="2.4" />
  <polygon points="496,184 506,188 496,192" fill="#0284c7" />
  <text x="498" y="206" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0284c7">A_x</text>
  <line x1="436" y1="188" x2="436" y2="118" stroke="#0284c7" stroke-width="2.4" />
  <polygon points="432,122 436,112 440,122" fill="#0284c7" />
  <text x="422" y="122" text-anchor="end" font-family="sans-serif" font-size="11" font-weight="700" fill="#0284c7">A_y</text>

  <!-- F_n^qt outward along AE -->
  <line x1="558" y1="118" x2="606" y2="90" stroke="#dc2626" stroke-width="2.4" />
  <polygon points="600,88 612,87 605,97" fill="#dc2626" />
  <text x="616" y="88" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626">F_n^qt (ra xa A)</text>

  <!-- F_tau^qt CW perp AE -->
  <line x1="558" y1="118" x2="602" y2="194" stroke="#dc2626" stroke-width="2.6" />
  <polygon points="595,192 605,200 604,187" fill="#dc2626" />
  <text x="612" y="198" font-family="sans-serif" font-size="11" font-weight="700" fill="#dc2626">F_τ^qt (60° dưới +x)</text>

  <!-- M_E^qt CW arc centered strictly at E(558, 118) -->
  <path d="M 563.2 142.5 A 25 25 0 0 1 541.3 136.6" fill="none" stroke="#b45309" stroke-width="2" />
  <polygon points="539.8,135.2 548.4,137.6 543.1,143.6" fill="#b45309" />
  <text x="556" y="166" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#b45309">M_E^qt (CW)</text>

  <text x="570" y="246" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f766e">A_x = -10,76 N;  A_y = +18,28 N (Khớp 4c!)</text>
  <text x="570" y="263" text-anchor="middle" font-family="sans-serif" font-size="10.5" fill="#475569">Lưu ý: Đặt đủ F_n^qt và F_τ^qt như hình 2d mới ra đúng số!</text>
</svg>
<div class="figure-caption">

Hình 9-1: Áp dụng 3 bước Tĩnh động lực tính phản lực chốt A trên tấm hình vuông Đề 0002/2015 (Câu 2–4)

</div>
</div>

#### Ví dụ 9-1 (Đề `0002/2015` Câu 4, `pp. 39–40` — Key chuẩn `4c`): Tính phản lực liên kết tại chốt $A$
**Đề bài:** Dùng tiếp tấm hình vuông $ABCD$ ở Ví dụ 8-4 ($a = 0{,}5\text{ m},\; m = 2\text{ kg},\; \omega = 0{,}5\text{ rad/s},\; \varepsilon = 30\text{ rad/s}^2$, đặt trong mặt phẳng ngang $Axy$, đường chéo $AE$ hợp với $+Ax$ góc $30^\circ$). Tính các thành phần phản lực liên kết $(\bar{A}_x;\; \bar{A}_y)$ tại khớp bản lề $A$.

**Lời giải chi tiết theo 3 bước Tĩnh động lực:**
- **Bước 1 & 2 (Tính độ lớn hai lực quán tính tại $E$ như Hình 9-1):**
  Khoảng cách từ trục quay $A$ tới khối tâm $E$ là $AE = \frac{a\sqrt{2}}{2} = \frac{0{,}5\sqrt{2}}{2} = \frac{\sqrt{2}}{4}\text{ m}$.
  - Lực quán tính ly tâm hướng **ra xa $A$** dọc theo $AE$ (hợp với $+Ax$ góc $+30^\circ$):
    $$F_n^{\text{qt}} = m\omega^2 \cdot AE = 2 \cdot (0{,}5)^2 \cdot \frac{\sqrt{2}}{4} = \frac{\sqrt{2}}{8} \approx 0{,}1768\text{ N}$$
  - Lực quán tính tiếp tuyến vuông góc $AE$, quay chiều **thuận KĐH** (tức hướng **xuống-phải**, hợp $+Ax$ góc $-60^\circ$):
    $$F_\tau^{\text{qt}} = m\varepsilon \cdot AE = 2 \cdot 30 \cdot \frac{\sqrt{2}}{4} = 15\sqrt{2} \approx 21{,}2132\text{ N}$$
- **Bước 3 (Chiếu cân bằng hình thức $\sum X = 0,\; \sum Y = 0$):**
  - Chiếu lên $Ax$:
    $$\begin{aligned}
    A_x + F_n^{\text{qt}}\cos 30^\circ + F_\tau^{\text{qt}}\cos 60^\circ &= 0 \\
    \implies A_x &= -\left(0{,}1768 \cdot \frac{\sqrt{3}}{2} + 21{,}2132 \cdot 0{,}5\right) \\
    &\approx -10{,}76\text{ N}
    \end{aligned}$$
  - Chiếu lên $Ay$:
    $$\begin{aligned}
    A_y + F_n^{\text{qt}}\sin 30^\circ - F_\tau^{\text{qt}}\sin 60^\circ &= 0 \\
    \implies A_y &= 21{,}2132 \cdot \frac{\sqrt{3}}{2} - 0{,}1768 \cdot 0{,}5 \\
    &\approx +18{,}28\text{ N}
    \end{aligned}$$
- **Chốt đáp án:** $\bar{A}_x = -10{,}76\text{ N};\; \bar{A}_y = 18{,}28\text{ N}$ — khớp từng chữ số thập phân với phương án **`4c`** trên trang 40!

---

#### Ví dụ 9-2 (Đề `1`, `pp. 67–69`, Phần I Câu 7–8 — Có bảng đáp án chính thức `7c, 8d`): Lực ma sát, sức căng dây & điều kiện không trượt của con lăn 2 tầng
**Đề bài:** Cho con lăn $B$ (khối lượng $m_2$, bán kính ngoài $R = 3r$, bán kính trong $r$, mômen quán tính $J_B = m_2 r^2$) lăn không trượt tại điểm tiếp xúc $H$ trên mặt ngang cố định của lăng trụ $C$. Tâm $B$ gắn lò xo độ cứng $K = \frac{1600}{9}m_2$ (gắn cố định tường bên trái). Một sợi dây nhẹ không giãn quấn ở **đáy tầng trong** (bán kính $r$, kéo sang phải) vòng qua ròng rọc lý tưởng nối với tải $A$ ($m_1 = 1{,}5m_2$) đặt trên mặt nghiêng góc $\alpha$. Hệ số ma sát (tĩnh và động) tại $H$ là $f = 0{,}4$. Cho biết khi bỏ qua trượt, tải $A$ dao động quanh vị trí cân bằng tĩnh theo quy luật $s = s_0\cos(10t)$ (với $s$ hướng xuống dốc).
1. *(Câu 7)* Thiết lập biểu thức sức căng dây $\tau$ và điều kiện để dây luôn căng.
2. *(Câu 8)* Dùng D'Alembert tính lực ma sát $F$ tác dụng lên con lăn tại $H$ và kiểm tra điều kiện lăn không trượt.

**Lời giải chi tiết & kiểm toán chuẩn:**
1. **Tìm sức căng dây $\tau$ từ tải $A$:**
   Từ $s = s_0\cos(10t) \implies \ddot{s} = -100s_0\cos(10t)$. Chiếu định luật II Newton / D'Alembert cho tải $A$ dọc mặt nghiêng (chiều dương $s$ hướng xuống):
   $$\begin{aligned}
   m_1 g\sin\alpha - \tau &= m_1 \ddot{s} \\
   \implies \tau &= 1{,}5m_2\left[g\sin\alpha + 100s_0\cos(10t)\right] \\
   &= 1{,}5m_2 g\sin\alpha + 150m_2 s_0\cos(10t)
   \end{aligned}$$
   - Để dây không bị chùng ($\tau \ge 0$ tại lúc $\cos(10t) = -1$): $1{,}5m_2 g\sin\alpha - 150m_2 s_0 \ge 0 \implies s_0 \le \frac{g\sin\alpha}{100}$.
   - **Ghi chú đối chiếu đề thi thật `p.68–69`:** Đáp án chính thức của Bộ môn chọn **`7c`** ($\tau = 1{,}5m_2 g\sin\alpha + 100m_2 s_0\cos(10t)$ và $s_0 \le \frac{1}{100}g\sin\alpha$), trong đó có lỗi đánh máy số hạng sau quên nhân $1{,}5$ ($100$ thay vì $150$), nhưng ngay ở Câu 8 bên dưới chính tác giả vẫn dùng hệ số $150$ thật để ra đúng **`8d`** (đồng thời ở dòng 2 của `8d` bản in gốc `page_068.png` cũng in nhầm bất đẳng thức không trượt — xem chi tiết ở bước 2 dưới)!

2. **Tìm lực ma sát $F$ tại $H$ bằng Tĩnh động lực cho con lăn $B$ (`8d`):**
   - **Quan hệ động học:** Khi tâm $B$ lăn không trượt sang phải đoạn $x$, đáy tầng trong bán kính $r$ nằm cách điểm tiếp xúc $H$ đoạn $(R - r)$ nên dây đi sang phải đoạn $s = \frac{R - r}{R}x = \frac{2}{3}x \implies x_{\text{động}} = 1{,}5s$, góc quay $\theta_{\text{động}} = \frac{x_{\text{động}}}{R} = \frac{s}{2r}$.
   - **Độ giãn lò xo toàn phần:** Tại cân bằng tĩnh, $K x_{\text{tĩnh}} R = \tau_{\text{tĩnh}}(R - r)$, nên $K x_{\text{tĩnh}} = \frac{2}{3}(1{,}5m_2 g\sin\alpha) = m_2 g\sin\alpha$. Cộng thêm phần dao động $1{,}5s$:
     $$\begin{aligned}
     F_{\text{đh}} &= K x_{\text{tổng}} = m_2 g\sin\alpha + 1{,}5K s_0\cos(10t) \\
     &= m_2 g\sin\alpha + \frac{800}{3}m_2 s_0\cos(10t)
     \end{aligned}$$
   - **Chiếu phương ngang (chiều phải dương) cho con lăn $B$** (giả sử lực ma sát $F$ tại $H$ hướng **sang trái**, lực quán tính tâm $B$ là $-m_2 \ddot{x}$):
     $$\begin{aligned}
     \tau - F_{\text{đh}} - F - m_2 \ddot{x} &= 0 \\
     \implies F &= \tau - F_{\text{đh}} - m_2(-150s_0\cos 10t) \\
     &= 0{,}5m_2 g\sin\alpha + \left(300 - \frac{800}{3}\right)m_2 s_0\cos(10t) \\
     &= 0{,}5m_2 g\sin\alpha + \frac{100}{3}m_2 s_0\cos(10t)
     \end{aligned}$$
   - Để ý $\frac{100}{3}m_2 = \frac{3}{16}\left(\frac{1600}{9}m_2\right) = \frac{3}{16}K$! Suy ra:
     $$F = 0{,}5m_2 g\sin\alpha + \frac{3}{16}K s_0\cos(10t) \quad (\text{hướng sang trái})$$
     *(Kiểm tra lại bằng phương trình mômen quanh tâm $B$: $F\cdot R - \tau\cdot r = J_B\ddot{\theta} \iff F(3r) - \tau r = m_2 r^2(-50s_0\cos 10t / r)$, thay số khớp chính xác tuyệt đối!)*.
   - **Điều kiện con lăn $B$ lăn không trượt tại $H$:** Vì $B$ chuyển động ngang nên $N_H = m_2 g$; từ $\lvert F \rvert_{\max} \le f N_H = 0{,}4m_2 g$ (lúc $\cos(10t) = +1$):
     $$\begin{aligned}
     0{,}5m_2 g\sin\alpha + \frac{3}{16}K s_0 &\le 0{,}4m_2 g \\
     \implies s_0 &\le \frac{16m_2 g}{3K}(0{,}4 - 0{,}5\sin\alpha)
     \end{aligned}$$
   - **Ghi chú đối chiếu đề thi thật (`pp. 68–69`):** Đáp án Key chính thức tr. 69 chọn **`8d`** (khớp chính xác biểu thức $F = 0{,}5m_2 g\sin\alpha + \frac{3}{16}K s_0\cos(10t)$). Tuy nhiên, cần lưu ý bản in đề gốc `page_068.png` tại dòng 2 của **`8d`** in sai bất đẳng thức không trượt thành $s_0 \le \frac{8m_2 g}{K}(0{,}4 - 0{,}75\sin\alpha)$ thay vì công thức đúng $s_0 \le \frac{16m_2 g}{3K}(0{,}4 - 0{,}5\sin\alpha)$ (bất đẳng thức đúng lại bị in sang phương án `8a`).

---

#### Ví dụ 9-3 (Đề `1` HK II/13-14, `p. 43`, Câu 4–5): Dùng D'Alembert toàn hệ tìm phản lực chốt $H$ và áp lực $N$
**Đề bài:** Con lăn trụ đặc $B$ ($m_B = 16m_0$) lăn không trượt trên mặt ngang của lăng trụ $C$ ($m_C = 26m_0$) được giữ đứng yên nhờ chốt $H$ trên mặt dốc góc $\alpha$ (dốc đi xuống về bên phải). Dây nối từ đỉnh trên của $B$ vòng qua ròng rọc giữ tải $A$ ($m_A = 8m_0$). Khi $A$ đi lên với gia tốc $\ddot{y}$ thì tâm $B$ đi sang trái với gia tốc $a_B = \frac{\ddot{y}}{2}$ (do đỉnh con lăn chạy nhanh gấp đôi tâm $B$). Tính lực chốt $F$ (hướng lên dọc dốc) tại $H$ và áp lực pháp tuyến $N$ của dốc lên lăng trụ $C$.

**Lời giải nhanh gọn trong 4 dòng:**
- Tổng khối lượng toàn hệ $(A + B + C)$: $M = (8 + 16 + 26)m_0 = 50m_0$.
- Thêm các lực quán tính của các vật có gia tốc ($C$ đứng yên nên bằng $0$):
  - Tải $A$ có $\vec{a}_A = \ddot{y}\uparrow \implies \vec{R}_{A}^{\text{qt}} = 8m_0\ddot{y}\downarrow$ (thẳng đứng xuống).
  - Con lăn $B$ có $\vec{a}_B = \frac{\ddot{y}}{2}\leftarrow \implies \vec{R}_{B}^{\text{qt}} = 16m_0\frac{\ddot{y}}{2} = 8m_0\ddot{y}\rightarrow$ (nằm ngang sang phải).
- Áp dụng cân bằng D'Alembert $\sum X = 0,\; \sum Y = 0$ cho toàn hệ $(A + B + C)$ với $+Ox$ sang phải, $+Oy$ lên trên (chốt $F$ hướng lên-trái góc $\alpha$, áp lực $N$ hướng lên-phải góc $\alpha$):
  $$\begin{cases}
  N\sin\alpha - F\cos\alpha + 8m_0\ddot{y} = 0 \\
  N\cos\alpha + F\sin\alpha - 50m_0 g - 8m_0\ddot{y} = 0
  \end{cases}$$
- Nhân phương trình (1) với $\cos\alpha$, phương trình (2) với $\sin\alpha$ để rút $F$ (và tương tự rút $N$):
  $$F = (50m_0 g + 8m_0\ddot{y})\sin\alpha + 8m_0\ddot{y}\cos\alpha$$
  $$N = (50m_0 g + 8m_0\ddot{y})\cos\alpha - 8m_0\ddot{y}\sin\alpha$$
- **Kết quả kiểm toán:** Câu 4 khớp chính xác **`4b`**; riêng Câu 5 trên bản PDF scan bị khoanh nhầm phương án `5a` (in sai thành $-16m_0\ddot{y}\sin\alpha$ do quên chia $2$ ở $a_B = \ddot{y}/2$), nên đáp án đúng của Câu 5 là **`5d` (Không có kết quả đúng)**.

---

### 3. Chương 13.3: Phản lực động trục quay 2 ổ đỡ 3D & Điều kiện cân bằng động

Ở mục 1 và 2 trên ta mới giải bài toán **phẳng 2D** (quay quanh 1 khớp bản lề $O$). Trong thực tế máy móc (trục khuỷu, rôto động cơ, trục gắn các khối lệch tâm ở các mặt cắt khác nhau dọc trục), vật rắn khối lượng $M$ quay quanh trục cố định $Az$ đi qua **2 ổ đỡ $A$ và $B$** cách nhau khoảng $l$ sẽ tạo ra các **phản lực động 3D** $\vec{R}_A^{\text{đ}}, \vec{R}_B^{\text{đ}}$ (tách riêng khỏi phản lực tĩnh do trọng lực).

#### A. Thu gọn hệ lực quán tính 3D & Công thức tính $\vec{R}_A^{\text{đ}}, \vec{R}_B^{\text{đ}}$
Gắn hệ trục Đề-các thuận $Axyz$ quay cùng vật với gốc $A(0; 0; 0)$, ổ đỡ $B(0; 0; l)$ nằm trên trục $+Az$, khối tâm chung $C(x_C; y_C; z_C)$, vận tốc góc $\omega$ và gia tốc góc đại số $\bar{\varepsilon}$ quanh $Az$:
- **Hợp lực quán tính** (gồm lực ly tâm $\omega^2$ và lực tiếp tuyến $\bar{\varepsilon}$):
  $$\begin{cases}
  R_{\text{qt}, x} = M\left(\omega^2 x_C + \bar{\varepsilon} y_C\right) \\
  R_{\text{qt}, y} = M\left(\omega^2 y_C - \bar{\varepsilon} x_C\right)
  \end{cases}$$
- **Mômen hệ lực quán tính quanh $Ax, Ay$** (với tích quán tính $J_{xz} = \sum m_k x_k z_k$ và $J_{yz} = \sum m_k y_k z_k$):
  $$\begin{aligned}
  M_{x,\text{qt}} &= J_{xz}\bar{\varepsilon} - J_{yz}\omega^2 \\
  M_{y,\text{qt}} &= J_{yz}\bar{\varepsilon} + J_{xz}\omega^2
  \end{aligned}$$
- **Phản lực động tác dụng lên 2 ổ đỡ $A$ và $B$** (từ $\sum M_{Ax}=0,\; \sum M_{Ay}=0,\; \sum X=0,\; \sum Y=0$):
  $$\begin{cases}
  X_B^{\text{đ}} = -\dfrac{M_{y,\text{qt}}}{l} = -\dfrac{J_{yz}\bar{\varepsilon} + J_{xz}\omega^2}{l} \\[8pt]
  Y_B^{\text{đ}} = \dfrac{M_{x,\text{qt}}}{l} = \dfrac{J_{xz}\bar{\varepsilon} - J_{yz}\omega^2}{l}
  \end{cases}$$
  $$\begin{cases}
  X_A^{\text{đ}} = -R_{\text{qt}, x} - X_B^{\text{đ}} \\
  Y_A^{\text{đ}} = -R_{\text{qt}, y} - Y_B^{\text{đ}}
  \end{cases}$$

*(Mẹo thực chiến cho người tay ngang: Với trục mang vài chất điểm hoặc khối lệch tâm rời rạc, bạn không cần nhớ công thức $J_{xz}, J_{yz}$ — chỉ cần vẽ thẳng các lực ly tâm $m_k\omega^2 r_k$ và tiếp tuyến $m_k\bar{\varepsilon} r_k$ tại từng điểm rồi viết cân bằng Tĩnh học 3D quanh $A$, kết quả khớp 100%!)*

#### B. Điều kiện cân bằng động trục quay (Câu hỏi lý thuyết tủ!)
Muốn trục quay êm, **phản lực động ở cả hai ổ đỡ hoàn toàn bằng không** ($\vec{R}_A^{\text{đ}} = \vec{R}_B^{\text{đ}} = \vec{0}$ với mọi $\omega, \bar{\varepsilon}$) thì cả $\vec{R}_{\text{qt}} = \vec{0}$ lẫn $M_{x,\text{qt}} = M_{y,\text{qt}} = 0$, tức là trục quay $Az$ phải là **trục quán tính chính trung tâm**:

$$x_C = 0, \quad y_C = 0, \qquad J_{xz} = 0, \quad J_{yz} = 0$$

- **$x_C = y_C = 0$ (Cân bằng tĩnh):** Khối tâm $C$ nằm ngay trên trục quay $Az$.
- **$J_{xz} = J_{yz} = 0$ (Trục quán tính chính):** Trục quay $Az$ là trục quán tính chính tại gốc $A$.

::: warning Cảnh báo bẫy trắc nghiệm lý thuyết Cân bằng động
Đừng chọn đáp án *"chỉ cần khối tâm nằm trên trục quay ($x_C = y_C = 0$)"*! Nếu $x_C = y_C = 0$ mà $J_{xz} \neq 0$ hoặc $J_{yz} \neq 0$ (chẳng hạn 2 khối nặng bằng nhau đặt lệch về hai phía ngược chiều ở **hai độ cao $z_1 \neq z_2$ khác nhau**), trục đã cân bằng tĩnh nhưng **chưa cân bằng động**: nó vẫn sinh ra ngẫu lực ly tâm làm hai ổ $A, B$ chịu hai phản lực động ngược chiều nhau ($\vec{R}_A^{\text{đ}} = -\vec{R}_B^{\text{đ}} \neq \vec{0}$)!
:::

#### Ví dụ 9-4 (Minh họa 13.3 đã kiểm toán SymPy): Đã cân bằng tĩnh nhưng chưa cân bằng động!
**Đề bài:** Một trục nhẹ thẳng đứng $AB$ dài $l = 1{,}0\text{ m}$ ($A$ ở $z = 0$, $B$ ở $z = 1{,}0\text{ m}$) quay đều với vận tốc góc $\omega = 10\text{ rad/s}$ ($\bar{\varepsilon} = 0$). Trên trục gắn 2 chất điểm $m_1 = m_2 = 2\text{ kg}$ đặt lệch tâm ở hai phía đối diện tại tọa độ $M_1(+0{,}2\text{ m};\; 0;\; 0{,}2\text{ m})$ và $M_2(-0{,}2\text{ m};\; 0;\; 0{,}8\text{ m})$. Kiểm tra trạng thái cân bằng và tính các phản lực động $\vec{R}_A^{\text{đ}}, \vec{R}_B^{\text{đ}}$.

**Lời giải nhanh theo 2 cách đối chiếu:**
1. **Kiểm tra điều kiện cân bằng tĩnh & cân bằng động:**
   - Khối tâm: $x_C = \dfrac{2(0{,}2) + 2(-0{,}2)}{4} = 0$, $y_C = 0 \implies$ trục **đã cân bằng tĩnh** ($R_{\text{qt},x} = R_{\text{qt},y} = 0$).
   - Tích quán tính: $J_{yz} = 0$, và:
     $$\begin{aligned}
     J_{xz} &= m_1 x_1 z_1 + m_2 x_2 z_2 \\
     &= 2(0{,}2)(0{,}2) + 2(-0{,}2)(0{,}8) = -0{,}24\text{ kg}\cdot\text{m}^2 \neq 0
     \end{aligned}$$
     Do $J_{xz} \neq 0$ nên trục **chưa cân bằng động**!
2. **Tính phản lực động tại $A$ và $B$:**
   - *Cách 1 (Thay công thức 3D với $\bar{\varepsilon} = 0,\; \omega^2 = 100$):*
     $M_{x,\text{qt}} = 0$, $M_{y,\text{qt}} = J_{xz}\omega^2 = -0{,}24(100) = -24\text{ N}\cdot\text{m}$, suy ra:
     $$\begin{aligned}
     X_B^{\text{đ}} &= -\frac{-24}{1{,}0} = +24\text{ N}, & X_A^{\text{đ}} &= -X_B^{\text{đ}} = -24\text{ N} \\
     Y_A^{\text{đ}} &= Y_B^{\text{đ}} = 0
     \end{aligned}$$
   - *Cách 2 (Đặt trực tiếp lực ly tâm):* Tại $z_1 = 0{,}2\text{ m}$ có $F_1^{\text{qt}} = 2(10^2)(0{,}2) = 40\text{ N}$ (hướng $+Ax$); tại $z_2 = 0{,}8\text{ m}$ có $F_2^{\text{qt}} = 40\text{ N}$ (hướng $-Ax$). Cặp lực tạo ngẫu lực quay độ lớn $40(0{,}8 - 0{,}2) = 24\text{ N}\cdot\text{m}$, đòi hỏi cặp phản lực ở 2 đầu trục $X_B^{\text{đ}} = +24\text{ N}$ và $X_A^{\text{đ}} = -24\text{ N}$ giữ cân bằng!

---

## Ngày 10: Mini-Test 10 Câu Chương 11–13 & Công Thức Bấm Máy 30 Giây

### 1. Bảng Công Thức Bấm Máy 30 Giây Phòng Thi (Chương 11, 12.1–12.2 & 13)

| Tình huống gặp trong đề AS1003 | Công thức bấm máy 30 giây | Bẫy `e` cần soi ngay trước khi tô |
| :--- | :--- | :--- |
| **Vật trượt rời mặt cầu / cầu vồng** | $N = mg\cos\theta - m\dfrac{v^2}{\rho} = 0$ | Nhớ đổi $\text{km/h} \to \text{m/s}$ (chia $3{,}6$); không bỏ quên trọng lực chiếu lên $\vec{n}$. |
| **Khung ghép thanh + đĩa ($x_C, y_C, J_O, J_C$)** | $\begin{aligned} x_C &= \dfrac{\sum m_i x_i}{\sum m_i} \\ J_O &= J_G + m\cdot OG^2 \\ J_C &= J_O - M_{\text{tổng}}\cdot OC^2 \end{aligned}$ | Vành mỏng là $mR^2$, đĩa đặc là $\frac{1}{2}mR^2$; thanh gắn mép đĩa thì $OB = L + R$. |
| **Thu gọn D'Alembert về $O$ khi $\lvert\varepsilon\rvert = \omega^2$** | $R_{\text{qt}} = \sqrt{2}\,M\varepsilon \cdot OC$; $\quad \vec{M}_O^{\text{qt}} = -J_O\vec{\varepsilon}$ | Kiểm tra chiều $Ox, Oy$ (trái/phải, lên/xuống) và dấu CW ($-\vec{k}$) / CCW ($+\vec{k}$). |
| **Thu gọn về $O$ vs thu gọn về $C$** | Về $O \implies \vec{M}_O^{\text{qt}} = -J_O\vec{\varepsilon}$; Về $C \implies \vec{M}_C^{\text{qt}} = -J_C\vec{\varepsilon}$ | Đề hỏi tại $C$ mà bấm $J_O$ (hoặc ngược lại) là dính bẫy ngay lập tức! |
| **Tìm phản lực động ổ trục $(O_x, O_y)$** | $\sum M_O = 0 \implies \varepsilon$; rồi đặt $\vec{R}_{\text{qt}}^n, \vec{R}_{\text{qt}}^t$ tại $C$ bấm $\sum X = 0, \sum Y = 0$ | Không bao giờ được bỏ $\vec{R}_{\text{qt}}^n$ khi $\omega \neq 0$ dù đề cho nhỏ! |
| **Cân bằng động trục quay 3D (2 ổ đỡ)** | Cân bằng tĩnh: $x_C = y_C = 0$<br>Cân bằng động: thêm $J_{xz} = J_{yz} = 0$ | Không được quên điều kiện $J_{xz} = J_{yz} = 0$: trục cân bằng tĩnh vẫn rung nếu lệch đối xứng ở $z_1 \neq z_2$! |
| **Lăn có ma sát / vật cao dễ lật** | Kiểm cả $\lvert F_{\text{ms}} \rvert \le f_0 N$ **và** điều kiện không lật $N_{\text{mép}} \ge 0$ | Giả sử lăn không trượt ra $F_{\text{ms}} > f_0 N$ thì **bắt buộc giải lại theo chế độ có trượt** ($F_{\text{ms}} = f_{\text{đ}} N$)! |

---

### 2. Đề Mini-Test Tự Luyện 10 Câu Chuẩn Form HCMUT AS1003 (25 Phút)

Hãy tự bấm đồng hồ **25 phút**, làm trọn vẹn cả 10 câu trên giấy nháp trước khi mở từng ô đáp án. Đề có chứa các **bẫy kinh điển `e. Các đáp án còn lại đều sai`** (cả bẫy thật lẫn bẫy giả).

#### Câu 1 (Chương 11 — Trục Tự nhiên & Cầu vồng)
Một ô tô khối lượng $m = 1200\text{ kg}$ chạy qua đỉnh một cầu vồng có bán kính cong $\rho = 40\text{ m}$ (lấy $g = 10\text{ m/s}^2$). Tại đỉnh cầu, xe có vận tốc $v = 36\text{ km/h}$. Tính áp lực $N$ của xe lên mặt cầu lúc đó và vận tốc giới hạn $v_{\text{max}}$ để xe không bị bứt khỏi mặt cầu tại đỉnh.
- `a.` $N = 9000\text{ N};\; v_{\text{max}} = 72\text{ km/h}$
- `b.` $N = 15000\text{ N};\; v_{\text{max}} = 72\text{ km/h}$
- `c.` $N = 9000\text{ N};\; v_{\text{max}} = 20\text{ km/h}$
- `d.` $N = 12000\text{ N};\; v_{\text{max}} = 36\text{ km/h}$
- `e.` Các đáp án còn lại đều sai

::: details Nhấn để xem đáp án & giải chi tiết Câu 1
- **Đáp án chuẩn: `a`**.
- **Giải nhanh:** Đổi $v = 36\text{ km/h} = 10\text{ m/s}$. Chiếu lên trục pháp tuyến hướng vào tâm cầu (thẳng đứng xuống): $mg - N = m\frac{v^2}{\rho} \implies N = 1200\left(10 - \frac{10^2}{40}\right) = 9000\text{ N}$. Khi xe sắp rời mặt cầu ($N = 0$): $v_{\text{max}} = \sqrt{g\rho} = \sqrt{10 \cdot 40} = 20\text{ m/s} = 72\text{ km/h}$. Phương án `c` sai đơn vị $20\text{ km/h}$ ($20\text{ m/s}$ mới đúng!).
:::

#### Câu 2 (Chương 12.2 — Định lý khối tâm & Mômen động lượng)
Phát biểu nào sau đây **ĐÚNG** đối với một vật rắn tuyệt đối chuyển động trong không gian?
- `a.` Khối tâm của vật chịu ảnh hưởng bởi cả ngoại lực và nội lực liên kết giữa các phần tử trong vật.
- `b.` Để vật chuyển động tịnh tiến có gia tốc từ trạng thái nghỉ, tổng hợp ngoại lực phải bằng không.
- `c.` Điều kiện cần để vật rắn chuyển động tịnh tiến là tổng mômen của các ngoại lực đối với khối tâm $C$ bằng không ($\sum\vec{M}_C^{(e)} = \vec{0}$).
- `d.` Điều kiện cần để vật rắn chuyển động tịnh tiến là tổng mômen của các ngoại lực đối với một điểm $O$ cố định bất kỳ luôn bằng không.
- `e.` Các đáp án còn lại đều sai

::: details Nhấn để xem đáp án & giải chi tiết Câu 2
- **Đáp án chuẩn: `c`**.
- **Giải thích:** Từ $\frac{d\vec{L}_C}{dt} = \sum \vec{M}_C^{(e)}$, vật tịnh tiến ($\vec{\omega} = \vec{0},\; \vec{\varepsilon} = \vec{0}$) đòi hỏi $\sum\vec{M}_C^{(e)} = \vec{0}$, trong khi $\sum\vec{F}^{(e)} = M\vec{a}_C$ có thể khác không! Phương án `a` sai vì nội lực tự triệt tiêu; `b` sai vì sẽ khiến $\vec{a}_C = \vec{0}$; `d` sai vì mômen quanh điểm $O \neq C$ còn dính thêm $\vec{M}_O(M\vec{a}_C)$.
:::

#### Câu 3 (Chương 12.1 — Tọa độ khối tâm khung thanh gập khúc)
Cho một thanh đồng chất, tiết diện đều, tổng khối lượng $m$, được gập vuông góc thành khung $OAB$ nằm trong mặt phẳng $Oxy$ với đoạn $OA = 2l$ nằm dọc theo trục $+Ox$ (gốc $O$ tại $(0; 0)$) và đoạn $AB = l$ dựng dọc theo chiều dương $+Oy$ (tại $x = 2l$). Tọa độ khối tâm $C(x_C; y_C)$ của khung $OAB$ là:
- `a.` $C\left(\dfrac{4}{3}l;\; \dfrac{1}{3}l\right)$
- `b.` $C\left(\dfrac{3}{2}l;\; \dfrac{1}{6}l\right)$
- `c.` $C\left(\dfrac{4}{3}l;\; \dfrac{1}{6}l\right)$
- `d.` $C\left(\dfrac{5}{3}l;\; \dfrac{1}{6}l\right)$
- `e.` Các đáp án còn lại đều sai

::: details Nhấn để xem đáp án & giải chi tiết Câu 3
- **Đáp án chuẩn: `c`**.
- **Giải nhanh:** Tổng chiều dài là $2l + l = 3l$, nên $m_{OA} = \frac{2}{3}m$ có tâm tại $(l; 0)$ và $m_{AB} = \frac{1}{3}m$ có tâm tại $(2l;\; 0{,}5l)$.
  $$x_C = \frac{2}{3}l + \frac{1}{3}(2l) = \frac{4}{3}l, \qquad y_C = \frac{2}{3}(0) + \frac{1}{3}\left(\frac{l}{2}\right) = \frac{1}{6}l$$
:::

#### Câu 4 (Chương 12.1 — Mômen quán tính $J_C$ với bẫy `e`)
Vẫn sử dụng khung $OAB$ ở **Câu 3** (tổng khối lượng $m$, $OA = 2l$ dọc $+Ox$, $AB = l$ dọc $+Oy$). Tính mômen quán tính **$J_C$** của khung đối với trục đi qua **khối tâm $C$** và vuông góc với mặt phẳng $Oxy$.
- `a.` $J_C = \dfrac{7}{3}ml^2$
- `b.` $J_C = \dfrac{22}{9}ml^2$
- `c.` $J_C = \dfrac{5}{9}ml^2$
- `d.` $J_C = \dfrac{4}{3}ml^2$
- `e.` Các đáp án còn lại đều sai

::: details Nhấn để xem đáp án & giải chi tiết Câu 4
- **Đáp án chuẩn: `e`** *(Bẫy thật!)*.
- **Giải & Kiểm toán:**
  - Tính $J_O$ trước:
    - Đoạn $OA$ ($m_{OA} = \frac{2}{3}m$, quay quanh đầu $O$): $J_O(OA) = \frac{1}{3}\left(\frac{2}{3}m\right)(2l)^2 = \frac{8}{9}ml^2$.
    - Đoạn $AB$ ($m_{AB} = \frac{1}{3}m$, tâm tại $G_{AB}(2l;\; l/2)$ nên $OG_{AB}^2 = 4l^2 + \frac{l^2}{4} = \frac{17}{4}l^2$):
      $$\begin{aligned}
      J_O(AB) &= \frac{1}{12}\left(\frac{1}{3}m\right)l^2 + \frac{1}{3}m\left(\frac{17}{4}l^2\right) \\
      &= \left(\frac{1}{36} + \frac{51}{36}\right)ml^2 = \frac{13}{9}ml^2
      \end{aligned}$$
    - Suy ra $J_O = \frac{8}{9}ml^2 + \frac{13}{9}ml^2 = \frac{7}{3}ml^2$ (đáp án `a` chính là bẫy $J_O$ dành cho ai quên bước trừ $m \cdot OC^2$!).
  - Dời từ $O$ về khối tâm chung $C\left(\frac{4}{3}l;\; \frac{1}{6}l\right)$:
    $$OC^2 = \left(\frac{4}{3}l\right)^2 + \left(\frac{1}{6}l\right)^2 = \left(\frac{64}{36} + \frac{1}{36}\right)l^2 = \frac{65}{36}l^2$$
    $$J_C = J_O - m\cdot OC^2 = \left(\frac{84}{36} - \frac{65}{36}\right)ml^2 = \frac{19}{36}ml^2$$
  - Không có phương án nào trong `a..d` bằng $\frac{19}{36}ml^2 \implies$ **chốt `e`!**
:::

#### Câu 5 (Chương 12.1 — Thanh + Vành tròn mỏng: bẫy $\frac{1}{2}mR^2$ vs $mR^2$)
Cho thanh thẳng mảnh đồng chất $OA$ chiều dài $2R$, khối lượng $m$, hàn vuông góc vào mép của một **vành tròn mỏng** đồng chất bán kính $R$, khối lượng $2m$ theo phương xuyên qua tâm $B$ của vành (vậy $OB = 2R + R = 3R$). Tính mômen quán tính $J_O$ của toàn hệ đối với trục đi qua $O$ và vuông góc mặt phẳng hệ.
- `a.` $J_O = \dfrac{61}{3}mR^2$
- `b.` $J_O = \dfrac{64}{3}mR^2$
- `c.` $J_O = \dfrac{34}{3}mR^2$
- `d.` $J_O = \dfrac{58}{3}mR^2$
- `e.` Các đáp án còn lại đều sai

::: details Nhấn để xem đáp án & giải chi tiết Câu 5
- **Đáp án chuẩn: `b`**.
- **Giải nhanh:**
  - Thanh $OA$: $J_O(OA) = \frac{1}{3}m(2R)^2 = \frac{4}{3}mR^2$.
  - **Vành tròn mỏng** (cẩn thận không dùng $\frac{1}{2}$!): $J_B = m_{\text{vành}}R^2 = 2mR^2$. Dời về $O$ với $OB = 3R$:
    $$J_O(\text{vành}) = 2mR^2 + 2m(3R)^2 = 20mR^2$$
  - Tổng: $J_O = \frac{4}{3}mR^2 + 20mR^2 = \frac{64}{3}mR^2$. *(Bẫy `a`: dùng nhầm đĩa đặc $\frac{1}{2}m_{\text{vành}}R^2$ hoặc $\frac{1}{12}m(2R)^2$; bẫy `c`: lấy nhầm $OB = 2R$).*
:::

#### Câu 6 (Chương 13 — D'Alembert đặc biệt $\lvert\varepsilon\rvert = \omega^2$, góc $\alpha + 45^\circ$)
Một cơ hệ phẳng có tổng khối lượng $M$, mômen quán tính đối với trục quay cố định $O$ là $J_O$, khối tâm $C$ cách $O$ đoạn $OC = d$. Trong hệ trục thuận $Oxy$ ($Ox$ sang phải, $Oy$ hướng lên, $\vec{k}$ hướng ra ngoài), tại thời điểm tia $\overrightarrow{OC}$ nằm ở góc phần tư I hợp với $+Ox$ một góc nhọn $\alpha$, hệ đang quay **ngược chiều kim đồng hồ** với $\omega$ và quay chậm dần với gia tốc góc $\varepsilon = \omega^2$ hướng **cùng chiều kim đồng hồ**. Kết quả thu gọn hệ lực quán tính về tâm quay $O$ là:
- `a.` $\vec{R}_O^{\text{qt}} = \sqrt{2}M\varepsilon d\left[\cos(\alpha + 45^\circ)\vec{i} + \sin(\alpha + 45^\circ)\vec{j}\right]$; $\quad\vec{M}_O^{\text{qt}} = +J_O\varepsilon\vec{k}$
- `b.` $\vec{R}_O^{\text{qt}} = \sqrt{2}M\varepsilon d\left[\cos(\alpha - 45^\circ)\vec{i} + \sin(\alpha - 45^\circ)\vec{j}\right]$; $\quad\vec{M}_O^{\text{qt}} = -J_O\varepsilon\vec{k}$
- `c.` $\vec{R}_O^{\text{qt}} = \sqrt{2}M\varepsilon d\left[\cos(\alpha + 45^\circ)\vec{i} + \sin(\alpha + 45^\circ)\vec{j}\right]$; $\quad\vec{M}_O^{\text{qt}} = -J_O\varepsilon\vec{k}$
- `d.` $\vec{R}_O^{\text{qt}} = \sqrt{2}M\varepsilon d\left[\sin(\alpha + 45^\circ)\vec{i} + \cos(\alpha + 45^\circ)\vec{j}\right]$; $\quad\vec{M}_O^{\text{qt}} = +J_O\varepsilon\vec{k}$
- `e.` Các đáp án còn lại đều sai

::: details Nhấn để xem đáp án & giải chi tiết Câu 6
- **Đáp án chuẩn: `a`**.
- **Giải nhanh:**
  - Thành phần ly tâm $\vec{R}_{\text{qt}}^n$ hướng ra xa $O$ (góc $\alpha$ trên $+Ox$).
  - Vì $\vec{\varepsilon}$ hướng **CW** ($-\varepsilon\vec{k}$), nên $\vec{R}_{\text{qt}}^t$ hướng **CCW** (góc $\alpha + 90^\circ$ trên $+Ox$).
  - Với $\omega^2 = \varepsilon$, tổng $\vec{R}_O^{\text{qt}}$ hợp $+Ox$ góc $\alpha + 45^\circ$ và có độ lớn $\sqrt{2}M\varepsilon d$.
  - Mômen quán tính thu gọn về $O$: $\vec{M}_O^{\text{qt}} = -J_O\vec{\varepsilon} = -J_O(-\varepsilon\vec{k}) = +J_O\varepsilon\vec{k}$ (chiều CCW).
:::

#### Câu 7 (Chương 13 — Bẫy thu gọn về $O$ vs $C$ và dấu $\vec{i}, \vec{j}, \vec{k}$)
Một thanh thẳng mảnh đồng chất $OA$ có chiều dài $L = 1{,}2\text{ m}$, khối lượng $m = 6\text{ kg}$, quay quanh chốt bản lề cố định $O$ trong mặt phẳng $Oxy$ ($Ox$ sang phải, $Oy$ hướng lên, $\vec{k}$ hướng ra ngoài). Tại thời điểm thanh nằm ngang dọc theo chiều dương $+Ox$, thanh đang quay **ngược chiều kim đồng hồ** với $\omega = 2\text{ rad/s}$ và $\varepsilon = 5\text{ rad/s}^2$ (cùng chiều ngược kim đồng hồ). Bộ đặc trưng thu gọn hệ lực quán tính của thanh **về tâm quay $O$** là:
- `a.` $\vec{R}_O^{\text{qt}} = (14{,}4\vec{i} - 18\vec{j})\text{ N};\quad \vec{M}_O^{\text{qt}} = -3{,}6\vec{k}\text{ N}\cdot\text{m}$
- `b.` $\vec{R}_O^{\text{qt}} = (-14{,}4\vec{i} + 18\vec{j})\text{ N};\quad \vec{M}_O^{\text{qt}} = -14{,}4\vec{k}\text{ N}\cdot\text{m}$
- `c.` $\vec{R}_O^{\text{qt}} = (14{,}4\vec{i} - 18\vec{j})\text{ N};\quad \vec{M}_O^{\text{qt}} = +14{,}4\vec{k}\text{ N}\cdot\text{m}$
- `d.` $\vec{R}_O^{\text{qt}} = (14{,}4\vec{i} - 18\vec{j})\text{ N};\quad \vec{M}_O^{\text{qt}} = -14{,}4\vec{k}\text{ N}\cdot\text{m}$
- `e.` Các đáp án còn lại đều sai

::: details Nhấn để xem đáp án & giải chi tiết Câu 7
- **Đáp án chuẩn: `d`**.
- **Giải nhanh:**
  - $OC = 0{,}6\text{ m}$. Lực ly tâm hướng ra xa $O$ dọc $+Ox$: $R_{\text{qt}}^n = 6 \cdot 2^2 \cdot 0{,}6 = +14{,}4\vec{i}\text{ N}$.
  - $\vec{\varepsilon}$ quay CCW nên $\vec{a}_C^t$ hướng lên ($+Oy$), suy ra $\vec{R}_{\text{qt}}^t$ hướng **xuống** ($-Oy$): $-6 \cdot 5 \cdot 0{,}6 = -18\vec{j}\text{ N}$.
  - Mômen tại $O$ phải dùng $J_O = \frac{1}{3}mL^2 = \frac{1}{3}(6)(1{,}2)^2 = 2{,}88\text{ kg}\cdot\text{m}^2$, suy ra $\vec{M}_O^{\text{qt}} = -J_O\vec{\varepsilon} = -2{,}88(5)\vec{k} = -14{,}4\vec{k}\text{ N}\cdot\text{m}$. *(Bẫy `a` dùng nhầm $J_C = 0{,}72 \implies -3{,}6\vec{k}$!).*
:::

#### Câu 8 (Chương 13 — Phản lực động ổ trục $O$)
Đặt thanh $OA$ ở **Câu 7** ($L = 1{,}2\text{ m},\; m = 6\text{ kg}$, $g = 10\text{ m/s}^2$ thẳng đứng hướng xuống) trong **mặt phẳng thẳng đứng $Oxy$** ($Ox$ sang phải, $Oy$ hướng lên). Tại đúng vị trí thanh nằm ngang dọc $+Ox$, thanh đang có $\omega = 2\text{ rad/s}$ (ngược KĐH) và chịu tác dụng của một ngẫu lực chủ động $M = 50{,}4\text{ N}\cdot\text{m}$ (ngược KĐH). Tính các thành phần phản lực động $(O_x;\; O_y)$ của ổ trục tại $O$ tác dụng lên thanh.
- `a.` $O_x = -14{,}4\text{ N};\; O_y = 42{,}0\text{ N}$
- `b.` $O_x = -14{,}4\text{ N};\; O_y = 78{,}0\text{ N}$
- `c.` $O_x = +14{,}4\text{ N};\; O_y = 78{,}0\text{ N}$
- `d.` $O_x = -14{,}4\text{ N};\; O_y = 60{,}0\text{ N}$
- `e.` Các đáp án còn lại đều sai

::: details Nhấn để xem đáp án & giải chi tiết Câu 8
- **Đáp án chuẩn: `b`**.
- **Giải chi tiết 3 bước:**
  1. Tìm $\varepsilon$ từ $\sum M_O = 0$: trọng lực $P = mg = 60\text{ N}$ tại $C(0{,}6;\; 0)$ tạo mômen thuận KĐH $-60(0{,}6) = -36\text{ N}\cdot\text{m}$; ngẫu lực $M = +50{,}4\text{ N}\cdot\text{m}$; mômen quán tính tại $O$ là $-J_O\varepsilon = -2{,}88\varepsilon$:
     $$\begin{aligned}
     50{,}4 - 36 - 2{,}88\varepsilon &= 0 \\
     \implies \varepsilon &= \frac{14{,}4}{2{,}88} = 5\text{ rad/s}^2 \quad (\text{ngược KĐH})
     \end{aligned}$$
  2. Lấy lại kết quả lực quán tính ở Câu 7: $R_{\text{qt}}^x = +14{,}4\text{ N}$, $R_{\text{qt}}^y = -18{,}0\text{ N}$.
  3. Viết cân bằng Tĩnh động lực:
     - $\sum X = O_x + 14{,}4 = 0 \implies O_x = -14{,}4\text{ N}$.
     - $\sum Y = O_y - 60 - 18{,}0 = 0 \implies O_y = 78{,}0\text{ N}$.
:::

#### Câu 9 (Chương 13 — So sánh điều kiện không trượt vs không lật)
Một khối hộp chữ nhật đồng chất khối lượng $m = 20\text{ kg}$, bề rộng đáy $b = 0{,}6\text{ m}$, chiều cao $h = 1{,}2\text{ m}$ đặt thẳng đứng trên sàn một xe tải chạy ngang. Hệ số ma sát nghỉ giữa khối hộp và sàn xe là $f_0 = 0{,}6$ (lấy $g = 10\text{ m/s}^2$). Tìm gia tốc lớn nhất $a_{\text{max}}$ của xe khi tăng tốc đột ngột để khối hộp **vừa không trượt vừa không bị lật ngã**?
- `a.` $a_{\text{max}} = 6{,}0\text{ m/s}^2$
- `b.` $a_{\text{max}} = 5{,}0\text{ m/s}^2$
- `c.` $a_{\text{max}} = 4{,}0\text{ m/s}^2$
- `d.` $a_{\text{max}} = 3{,}0\text{ m/s}^2$
- `e.` Các đáp án còn lại đều sai

::: details Nhấn để xem đáp án & giải chi tiết Câu 9
- **Đáp án chuẩn: `b`**.
- **Giải nhanh:** Khi xe tăng tốc $a$ sang phải, lực quán tính $R_{\text{qt}} = ma$ đặt tại khối tâm $C$ hướng sang trái ở độ cao $\frac{h}{2} = 0{,}6\text{ m}$, trọng lực $mg$ đặt ở cách mép sau đoạn $\frac{b}{2} = 0{,}3\text{ m}$:
  - Điều kiện **không trượt:** $ma \le f_0 mg \implies a \le 0{,}6 \cdot 10 = 6{,}0\text{ m/s}^2$.
  - Điều kiện **không lật quanh mép sau:** $ma\left(\frac{h}{2}\right) \le mg\left(\frac{b}{2}\right) \implies a \le g\frac{b}{h} = 10\cdot\frac{0{,}6}{1{,}2} = 5{,}0\text{ m/s}^2$.
  - Vì $5{,}0 < 6{,}0$, khối hộp **bị lật trước khi kịp trượt**! Gia tốc an toàn lớn nhất là $a_{\text{max}} = 5{,}0\text{ m/s}^2$. *(Bẫy `a` $6{,}0\text{ m/s}^2$ chỉ xét trượt mà quên xét lật!).*
:::

#### Câu 10 (Chương 13 — Bẫy giả thiết "lăn không trượt" & Bẫy thật chọn `e`)
Một hình trụ tròn đặc đồng chất khối lượng $m = 8\text{ kg}$, bán kính $R = 0{,}2\text{ m}$ đặt trên mặt sàn nằm ngang có hệ số ma sát (tĩnh và động đều bằng) $f = 0{,}3$ (lấy $g = 10\text{ m/s}^2$). Tác dụng vào trục tâm trụ một lực kéo nằm ngang $P = 84\text{ N}$. Tính gia tốc $a_C$ của tâm trụ.
- `a.` $a_C = 7{,}0\text{ m/s}^2$
- `b.` $a_C = 10{,}5\text{ m/s}^2$
- `c.` $a_C = 5{,}25\text{ m/s}^2$
- `d.` $a_C = 6{,}0\text{ m/s}^2$
- `e.` Các đáp án còn lại đều sai

::: details Nhấn để xem đáp án & giải chi tiết Câu 10
- **Đáp án chuẩn: `e`** *(Bẫy kinh điển kiểm tra điều kiện lăn không trượt!)*.
- **Giải & Phá bẫy:**
  - **Bước 1 (Thử giả sử trụ lăn không trượt, $a_C = \varepsilon R$):**
    D'Alembert ngang: $P - F_{\text{ms}} - ma_C = 0$; Mômen quanh tâm $C$: $F_{\text{ms}}R - \left(\frac{1}{2}mR^2\right)\frac{a_C}{R} = 0 \implies F_{\text{ms}} = \frac{1}{2}ma_C$.
    Thế vào ra $\frac{3}{2}ma_C = P \implies a_C^{\text{thử}} = \frac{2 \cdot 84}{3 \cdot 8} = 7{,}0\text{ m/s}^2$ (đáp án `a` là cái bẫy gài sẵn!).
  - **Bước 2 (Kiểm tra điều kiện $\lvert F_{\text{ms}} \rvert \le f N$):**
    Lực ma sát đòi hỏi để giữ không trượt là $F_{\text{ms}}^{\text{đòi}} = \frac{1}{2}(8)(7{,}0) = 28\text{ N}$. Trong khi ma sát nghỉ cực đại của sàn chỉ đạt $F_{\text{max}} = f mg = 0{,}3 \cdot 8 \cdot 10 = 24\text{ N}$.
    Vì $28\text{ N} > 24\text{ N}$ nên **giả thiết lăn không trượt BỊ PHÁ VỠ — trụ thực sự vừa lăn vừa trượt!**
  - **Bước 3 (Giải lại với chế độ trượt động $F_{\text{ms}} = f mg = 24\text{ N}$):**
    $$a_C = \frac{P - F_{\text{ms}}}{m} = \frac{84 - 24}{8} = 7{,}5\text{ m/s}^2$$
    Không có phương án nào ghi $7{,}5\text{ m/s}^2 \implies$ **chốt đáp án `e`!**
:::

---

::: tip Đánh giá mốc 5,0 điểm trước khi bước sang Chặng 3 (Mỏ vàng 4 câu Động năng)
- Nếu đạt **từ 8/10 câu trở lên** ở Mini-Test Ngày 10 và tự giải lại trơn tru 3 bài mẫu Đề `1721`, `1722`, `0002/2015`: Bạn đã khóa chặt **Khối B (`Ch.11, 12.1 & 13`)**, chạm vững mốc **`5,0+ điểm`**.
- **Bước tiếp theo quyết định điểm `8,0+`:** Tiến thẳng sang [Chặng 3 (Ngày 11–15): Mỏ Vàng 4 Câu Liên Hoàn Định Lý Động Năng (Ch.12.2–12.3)](/on-thi/chang-3-dong-luc-hoc) hoặc rà lại [Chặng 1: Xóa Mù & Ch.9–10](/on-thi/chang-1-tinh-hoc).
:::
