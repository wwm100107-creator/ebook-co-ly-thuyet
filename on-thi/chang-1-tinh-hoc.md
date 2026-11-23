---
title: "Chặng 1 (Ngày 1 – Ngày 5): Xóa Mù Tay Ngang & Chương 9–10 (AS1003)"
layout: doc
---

# Chặng 1 (Ngày 1 – Ngày 5): Xóa Mù Cho Người Tay Ngang & Làm Chủ Chương 9–10

Chặng 1 được thiết kế dành riêng cho sinh viên **mất gốc hoặc bắt đầu từ số `0`** ôn thi Cuối kỳ môn **`DCMH.AS1003` (Cơ Lý Thuyết — ĐH Bách Khoa TPHCM)** với mục tiêu tổng trên **`8,0` điểm**. Thay vì học lan man toàn bộ phần Giữa kỳ, bạn chỉ cần **2 ngày đầu để "xóa mù" đúng các công cụ vector – chiếu góc – con lăn**, rồi dùng **3 ngày tiếp theo ăn trọn Khối A (Chương 9–10)** gồm: **Song phẳng 3 khâu**, **Hợp chuyển động Coriolis**, và **Hệ bánh răng hành tinh Willis** (chiếm `2` đến `4` câu trong đề thi Cuối kỳ `10–13` câu).

::: info Lộ trình Chặng 1 (5 ngày — 90 đến 120 phút/ngày)
| Ngày | Nội dung trọng tâm | Đề thi thật thực hành | Giáo trình gốc đối chiếu |
| :--- | :--- | :--- | :--- |
| **Ngày 1** | **Từ điển cứu hộ 30 phút:** $(\vec{i},\vec{j},\vec{k})$, dấu CCW/CW, kề $\cos$ đối $\sin$, quay $90^\circ$ & lực cơ bản | Chuẩn hóa mọi dấu vector đề thi | [Tĩnh học C1](/tinh-hoc/chuong-1) · [C3](/tinh-hoc/chuong-3) |
| **Ngày 2** | **Tâm vận tốc tức thời ($I$) & Con lăn lăn không trượt:** $v_O = \omega R$ và bẫy $a_I^{\text{đĩa}} \neq 0$ | Nền tảng cứng Chương 10 | [Động học C4](/dong-hoc/chuong-4) |
| **Ngày 3** | **Song phẳng 3 khâu Ch.10:** Phương pháp hình chiếu & tâm tức thời $I$ | Đề `1821` (C1–4), `0001/2016` (C7–8), `1721`/`1722` (C6–7), `1643`/`1744` | [Động học C4](/dong-hoc/chuong-4) · [BT C3](/bai-tap/dong-hoc/chuong-3) |
| **Ngày 4** | **Chương 9 Coriolis:** Phân biệt $(e, r, a)$ & $\vec{a}_c = 2(\vec{\omega}_e \times \vec{v}_r)$ | Đề `1721` (C1–2), `1722` (C1–2), `1643`/`1744` (C8–9) | [Động học C3](/dong-hoc/chuong-3) · [BT C5](/bai-tap/dong-hoc/chuong-5) |
| **Ngày 5** | **Hệ bánh răng hành tinh, vi sai (Willis) & Mini-Test 10 câu bấm giờ 15 phút** | Chủ đề 7 & Đề chuẩn AS1003 có bẫy `e` | [Động học C4](/dong-hoc/chuong-4) · [BT C6](/bai-tap/dong-hoc/chuong-6) |
:::

> Điều hướng nhanh: [Tổng quan lộ trình 20 ngày (AS1003)](/on-thi/) · [Tiếp sang Chặng 2: Ch.11–13 D'Alembert](/on-thi/chang-2-dong-hoc) · [Ngân hàng Đề thi thật HCMUT](/on-thi/de-thi-that-hcmut)

---

## Ngày 1: Từ Điển Cứu Hộ Cấp Tốc (30 Phút Xóa Mù Cho Người Mất Gốc)

Nếu bạn quên sạch phép chiếu lượng giác, tích có hướng hay quy ước dấu quay từ đầu học kỳ, hãy học thuộc đúng **4 quy tắc nền tảng** dưới đây trong 30 phút. Mọi câu trắc nghiệm AS1003 về vận tốc $\vec{v}$, gia tốc $\vec{a}$ hay gia tốc góc $\vec{\varepsilon}$ đều chấm điểm dựa trên các dấu này.

### 1. Hệ trục thuận $(\vec{i}, \vec{j}, \vec{k})$ & Quy ước dấu quay CCW / CW

Trên trang giấy (hoặc màn hình), ta dùng hệ trục tọa độ Đề-các thuận $Oxyz$ gồm:
- Trục $Ox$ gắn vector đơn vị $\vec{i}$ (thường hướng **sang phải**).
- Trục $Oy$ gắn vector đơn vị $\vec{j}$ (thường hướng **lên trên**).
- Trục $Oz$ gắn vector đơn vị $\vec{k}$ vuông góc với mặt giấy, **hướng thẳng ra ngoài về phía mắt bạn** (ký hiệu bằng vòng tròn có dấu chấm giữa $\odot$).

::: tip Quy tắc bàn tay phải bắt buộc nhớ (Chuẩn mọi đề AS1003)
Xòe bàn tay phải, đặt các ngón tay uốn theo chiều quay của vật trong mặt phẳng $Oxy$:
- **Quay ngược chiều kim đồng hồ (CCW):** Ngón cái chỉ **ra ngoài** (cùng chiều $+\vec{k}$) $\implies$ mang **dấu DƯƠNG $(+)$**, tức $\vec{\omega} = +\omega\vec{k}$.
- **Quay cùng chiều kim đồng hồ (CW):** Ngón cái chỉ **vào trong** (ngược chiều $+\vec{k}$) $\implies$ mang **dấu ÂM $(-)$**, tức $\vec{\omega} = -\omega\vec{k}$.
:::

**Cảnh báo dấu của gia tốc góc $\vec{\varepsilon}$:** Đừng thấy vật đang quay CW mà vội viết $\bar{\varepsilon} < 0$!
- Nếu vật quay **nhanh dần**, $\vec{\varepsilon}$ **cùng chiều** với $\vec{\omega}$ (cùng CW thì $\bar{\varepsilon} < 0$; cùng CCW thì $\bar{\varepsilon} > 0$).
- Nếu vật quay **chậm dần**, $\vec{\varepsilon}$ **ngược chiều** với $\vec{\omega}$ (đang quay CW mà chậm dần thì $\vec{\varepsilon}$ hướng **CCW**, tức $\bar{\varepsilon} > 0$!).

---

### 2. Mẹo chiếu vectơ "Kề $\cos$ – Đối $\sin$" & Kiểm tra góc nhọn

Khi cần chiếu một vectơ $\vec{F}$ (hoặc $\vec{v}, \vec{a}$) có độ lớn $F$, nghiêng góc nhọn $\alpha$ so với một trục tọa độ, bạn chỉ cần làm đúng 2 bước:
1. **Xác định dấu $(+)$ hoặc $(-)$:** Nhìn đầu mũi tên của $\vec{F}$ xem có hướng về phía mũi tên dương của $Ox, Oy$ hay ngược lại.
2. **Chọn $\cos$ hay $\sin$ theo tam giác vuông:** Cạnh hình chiếu nào **kề** với góc $\alpha$ thì nhân **$\cos\alpha$**; cạnh nào **đối diện** với góc $\alpha$ thì nhân **$\sin\alpha$**.

| Góc nhọn $\alpha$ | $\sin\alpha$ | $\cos\alpha$ | $\tan\alpha$ | Mẹo kiểm nhanh sau khi chiếu |
| :---: | :---: | :---: | :---: | :--- |
| **$0^\circ$** | $0$ | $1$ | $0$ | Luôn thỏa định lý Pytago: $F_x^2 + F_y^2 = F^2$. |
| **$30^\circ$** | $\frac{1}{2} = 0{,}5$ | $\frac{\sqrt{3}}{2} \approx 0{,}866$ | $\frac{1}{\sqrt{3}} \approx 0{,}577$ | Với góc $30^\circ$, $\sin$ nhỏ hơn $\cos$ ($\frac{1}{2} < 0{,}866$). |
| **$45^\circ$** | $\frac{\sqrt{2}}{2} \approx 0{,}707$ | $\frac{\sqrt{2}}{2} \approx 0{,}707$ | $1$ | Hai thành phần bằng nhau về độ lớn. |
| **$60^\circ$** | $\frac{\sqrt{3}}{2} \approx 0{,}866$ | $\frac{1}{2} = 0{,}5$ | $\sqrt{3} \approx 1{,}732$ | Với góc $60^\circ$, $\cos$ nhỏ hơn $\sin$. |
| **$90^\circ$** | $1$ | $0$ | — | Vectơ vuông góc trục nào thì hình chiếu lên trục đó bằng $0$. |

*Lưu ý bẫy đề thi:* Nhiều đề như bài con lắc $OA$ hoặc thanh $AB$ cho góc $\alpha$ hợp với **phương thẳng đứng $Oy$** thay vì phương ngang $Ox$. Khi đó cạnh kề góc $\alpha$ lại là trục $Oy$ ($F_y = \pm F\cos\alpha$), còn trục $Ox$ là cạnh đối ($F_x = \pm F\sin\alpha$). Đừng bao giờ nhớ vẹt "$x$ luôn là $\cos$"!

---

### 3. Tích có hướng $\vec{\omega} \times \vec{r}$ & Tuyệt chiêu quay $90^\circ$ trong 5 giây

Khi một vật rắn quay quanh tâm $O$ (hoặc quay tương đối quanh cực $O$) với vectơ vận tốc góc $\vec{\omega} = \bar{\omega}\vec{k}$ và gia tốc góc $\vec{\varepsilon} = \bar{\varepsilon}\vec{k}$, điểm $A$ có bán kính định vị $\vec{r} = \overrightarrow{OA} = x\vec{i} + y\vec{j}$ có vận tốc và gia tốc được tính theo 2 cách hoàn toàn tương đương:

**Cách 1 — Dùng định thức $3\times 3$ (an toàn tuyệt đối, không cần tưởng tượng hình):**

$$\begin{aligned}
\vec{v}_A &= \vec{\omega} \times \vec{r} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 0 & 0 & \bar{\omega} \\ x & y & 0 \end{vmatrix} \\
&= -\bar{\omega} y\,\vec{i} + \bar{\omega} x\,\vec{j}
\end{aligned}$$

$$\begin{aligned}
\vec{a}_A &= \vec{a}_A^t + \vec{a}_A^n = (\vec{\varepsilon} \times \vec{r}) - \omega^2\vec{r} \\
&= \left(-\bar{\varepsilon} y - \omega^2 x\right)\vec{i} + \left(\bar{\varepsilon} x - \omega^2 y\right)\vec{j}
\end{aligned}$$

**Cách 2 — Mẹo quay $90^\circ$ trên mặt phẳng (bấm máy trong 5 giây):**
- **Quy tắc $\vec{\omega} \times \vec{r}$:** Lấy vectơ $\vec{r} = (x, y)$, **quay đi một góc $90^\circ$ theo đúng chiều của $\vec{\omega}$**, rồi nhân với độ lớn $|\bar{\omega}|$:
  - Nếu quay **ngược KĐH (CCW, $+k$)**: $(x, y) \longmapsto (-y, x)$.
  - Nếu quay **cùng KĐH (CW, $-k$)**: $(x, y) \longmapsto (y, -x)$.
- **Áp dụng cho gia tốc tiếp tuyến $\vec{a}_A^t = \vec{\varepsilon} \times \vec{r}$:** Y hệt quy tắc trên, quay $\vec{r}$ một góc $90^\circ$ theo chiều của $\vec{\varepsilon}$, nhân $|\bar{\varepsilon}|$.
- **Áp dụng cho gia tốc hướng tâm $\vec{a}_A^n = -\omega^2\vec{r}$:** Chỉ cần nhân $-\omega^2$ vào $\vec{r}$ (tức **ngược hướng hoàn toàn** với $\overrightarrow{OA}$, luôn lao từ $A$ thẳng về tâm quay $O$).

---

### 4. Liên kết Tĩnh học tối thiểu đủ dùng cho Chương 9–15

Để làm tiếp phần Động lực học ở Chặng 2, 3, 4 mà không cần học lại toàn bộ tập Tĩnh học, bạn chỉ cần bỏ túi đúng **4 đại lượng lực – mômen** sau:

1. **Trọng lực:** Độ lớn $P = mg$ (với $g = 9{,}81\text{ m/s}^2$ hoặc $10\text{ m/s}^2$ tùy đề bài cho), luôn đặt tại **trọng tâm $G$** và hướng thẳng đứng xuống dưới. Nếu vật nằm trên mặt dốc nghiêng góc $\alpha$ so với phương ngang: thành phần kéo trượt dọc dốc là $P\sin\alpha$, thành phần ép vuông góc mặt dốc là $P\cos\alpha$.
2. **Lực đàn hồi lò xo:** Độ lớn $F_{\text{đh}} = k\Delta l$, với $k\text{ (N/m)}$ là độ cứng và $\Delta l = \lvert l - l_0 \rvert\text{ (m)}$ là độ biến dạng (kéo giãn hoặc nén), luôn hướng về vị trí tự nhiên không biến dạng.
3. **Lực ma sát trượt động:** Khi vật trượt trên mặt phẳng nhám, phản lực pháp tuyến $\vec{N}$ vuông góc mặt tựa hướng vào vật, còn lực ma sát trượt động ngược chiều vận tốc trượt tương đối và có độ lớn:
   $$F_{\text{ms}} = f_{\text{đ}} N \quad (\text{hoặc } \mu N)$$
   *(Chú ý: Ở bài toán con lăn **lăn không trượt**, điểm tiếp xúc nền có $v_I = 0$ nên ma sát nghỉ **không sinh công**, nhưng vẫn xuất hiện trong phương trình lực!)*
4. **Mômen đại số phẳng đối với tâm $O$:** $M_O(\vec{F}) = \pm F\cdot d = xF_y - yF_x$, với $d$ là cánh tay đòn vuông góc từ $O$ tới đường tác dụng của $\vec{F}$ (quay quanh $O$ chiều **CCW lấy dấu $+$**, chiều **CW lấy dấu $-$**).

::: tip Ví dụ luyện tay Ngày 1 (Làm trong 5 phút)
**Đề bài:** Cho thanh $OA$ dài $L = 0{,}5\text{ m}$ quay quanh tâm cố định $O(0; 0)$ trong mặt phẳng $Oxy$ (hệ thuận, $\vec{k}$ hướng ra). Tại vị trí thanh $OA$ nằm ở góc phần tư thứ I, hợp với trục $+Ox$ góc $\alpha = 30^\circ$, thanh quay **cùng chiều kim đồng hồ (CW)** với $\omega = 4\text{ rad/s}$ và đang quay **chậm dần** với $|\varepsilon| = 2\text{ rad/s}^2$. Tìm vectơ $\vec{v}_A$ và $\vec{a}_A$ theo $\vec{i}, \vec{j}$.

**Lời giải nhanh:**
1. **Tọa độ đầu $A$ (kề $\cos$ lên $Ox$, đối $\sin$ lên $Oy$):**
   $$\vec{r} = \overrightarrow{OA} = \left(0{,}5\cos 30^\circ;\; 0{,}5\sin 30^\circ\right) = \left(0{,}25\sqrt{3};\; 0{,}25\right)\text{ m}$$
2. **Chuẩn hóa dấu $\vec{\omega}$ và $\vec{\varepsilon}$:**
   - Quay CW $\implies \bar{\omega} = -4\text{ rad/s}$ ($\vec{\omega} = -4\vec{k}$).
   - Quay **chậm dần** nên $\vec{\varepsilon}$ ngược chiều $\vec{\omega}$ $\implies$ $\vec{\varepsilon}$ quay **CCW**, tức $\bar{\varepsilon} = +2\text{ rad/s}^2$ ($\vec{\varepsilon} = +2\vec{k}$).
3. **Tính $\vec{v}_A$ bằng mẹo quay $90^\circ$ CW $(x, y) \mapsto (y, -x)$:**
   $$\vec{v}_A = 4 \cdot \left(0{,}25\,\vec{i} - 0{,}25\sqrt{3}\,\vec{j}\right) = 1{,}0\,\vec{i} - \sqrt{3}\,\vec{j}\text{ m/s}$$
4. **Tính $\vec{a}_A = \vec{a}_A^t + \vec{a}_A^n$:**
   - $\vec{a}_A^t$: Quay $\vec{r}$ góc $90^\circ$ **CCW** $(x, y) \mapsto (-y, x)$ rồi nhân $2$:
     $$\vec{a}_A^t = 2 \cdot \left(-0{,}25\,\vec{i} + 0{,}25\sqrt{3}\,\vec{j}\right) = -0{,}5\,\vec{i} + 0{,}5\sqrt{3}\,\vec{j}\text{ m/s}^2$$
   - $\vec{a}_A^n = -\omega^2\vec{r} = -16\left(0{,}25\sqrt{3}\,\vec{i} + 0{,}25\,\vec{j}\right) = -4\sqrt{3}\,\vec{i} - 4\,\vec{j}\text{ m/s}^2$.
   - Cộng lại:
     $$\vec{a}_A = \left(-0{,}5 - 4\sqrt{3}\right)\vec{i} + \left(0{,}5\sqrt{3} - 4\right)\vec{j} \approx -7{,}43\,\vec{i} - 3{,}13\,\vec{j}\text{ m/s}^2$$
:::

---

## Ngày 2: Tâm Vận Tốc Tức Thời ($I$) & Con Lăn Lăn Không Trượt (Nền Tảng Chương 10)

### 1. Chuyển động song phẳng & Hai công thức vận tốc cốt lõi

Vật chuyển động **song phẳng** (như thanh truyền, bánh xe lăn trên đường, ròng rọc động vừa dịch chuyển vừa quay) được tách thành: **Tịnh tiến theo một điểm cực $A$** cộng **Quay quanh cực $A$** với vận tốc góc $\vec{\omega}$ và gia tốc góc $\vec{\varepsilon}$:

$$\vec{v}_B = \vec{v}_A + \vec{v}_{BA} = \vec{v}_A + \vec{\omega} \times \overrightarrow{AB}$$

$$\vec{a}_B = \vec{a}_A + \vec{a}_{BA}^n + \vec{a}_{BA}^t = \vec{a}_A - \omega^2\overrightarrow{AB} + \vec{\varepsilon} \times \overrightarrow{AB}$$

**Tuyệt chiêu Định lý hình chiếu vận tốc (Tìm độ lớn $v$ trong 1 dòng):**
Vì thanh $AB$ cứng không co giãn, hình chiếu vận tốc hai đầu mút lên đường thẳng $AB$ luôn bằng nhau:

$$\text{hch}_{AB}(\vec{v}_A) = \text{hch}_{AB}(\vec{v}_B) \iff v_A \cos\alpha = v_B \cos\beta$$

*(Trong đó $\alpha, \beta$ là góc nhọn giữa các vectơ $\vec{v}_A, \vec{v}_B$ và đường thẳng nối $AB$.)*

---

### 2. Bốn trường hợp xác định Tâm Vận Tốc Tức Thời ($I$)

Ở mỗi thời điểm $t$, luôn tồn tại một điểm $I$ gắn với vật (hoặc phần mở rộng tưởng tượng của vật) có vận tốc tức thời bằng $0$ ($\vec{v}_I = \vec{0}$). Khi đã biết điểm $I$, **mọi điểm $M$ thuộc vật đều quay tức thời quanh $I$**:

$$v_M = \omega \cdot IM, \qquad \vec{v}_M \perp IM \text{ (theo chiều quay }\vec{\omega}\text{)}$$

| Trường hợp trên hình vẽ | Vị trí Tâm vận tốc tức thời $I$ | Công thức tốc độ & Lưu ý |
| :--- | :--- | :--- |
| **1. Con lăn lăn không trượt trên nền đứng yên** | Chính là **điểm tiếp xúc** giữa con lăn và nền cố định | $v_I = 0$, $v_O = \omega R$, đỉnh $v_{\text{đỉnh}} = 2\omega R$ |
| **2. Biết phương $\vec{v}_A, \vec{v}_B$ không song song** | Giao điểm hai đường thẳng kẻ từ $A \perp \vec{v}_A$ và từ $B \perp \vec{v}_B$ | Tính cạnh $IA, IB$ bằng tam giác vuông hoặc định lý sin |
| **3. $\vec{v}_A \parallel \vec{v}_B$ và khác độ lớn ($v_A \neq v_B$)** | Đường nối hai đầu mút của $\vec{v}_A, \vec{v}_B$ cắt đường thẳng $AB$ tại $I$ | Cùng chiều: $I$ nằm **ngoài** $AB$; ngược chiều: $I$ nằm **trong** $AB$ |
| **4. $\vec{v}_A \parallel \vec{v}_B$ và $\vec{v}_A = \vec{v}_B$ (hoặc $\perp AB$ bằng nhau)** | Tâm $I$ chạy ra vô cùng ($I \to \infty$) | Vật **tịnh tiến tức thời**: $\omega = 0$ ($\vec{a}_{AB}^n = \vec{0}$, nhưng $\vec{\varepsilon}$ thường $\neq \vec{0}$!) |

---

### 3. Mẹo 5 giây cho Con lăn không trượt & Cảnh báo bẫy gia tốc tại $I$

Đây là mô hình xuất hiện dày đặc nhất trong đề thi AS1003 (`Đề 1821` Bài 1, `Đề 1721` Bài 3, `Đề 1722` Bài 3, `Đề 0002/2016` Bài 2). Xét một con lăn tròn bán kính $R$ lăn không trượt trên mặt nền phẳng đứng yên với vận tốc góc $\omega$ và gia tốc góc $\varepsilon$:

1. **Vận tốc (dùng tâm $I$ là điểm tiếp xúc nền):**
   - Tâm $O$: $v_O = \omega \cdot IO = \omega R$ (song song nền, hướng theo chiều lăn).
   - Điểm cao nhất $B$ (đối xứng qua tâm $O$): $IB = 2R \implies v_{\text{đỉnh}} = 2\omega R = 2 v_O$.
2. **Gia tốc tâm $O$:**
   - Vì tâm $O$ chạy trên **đường thẳng** song song mặt nền ($y_O = R = \text{const}$), gia tốc pháp tuyến của tâm $O$ bằng $0$. Do đó tâm $O$ chỉ có gia tốc tiếp tuyến:
     $$a_O = \varepsilon R \quad (\text{song song mặt nền, hướng theo chiều tăng tốc})$$
3. **Gia tốc tại điểm bất kỳ (chọn $O$ làm cực, KHÔNG chọn $I$ làm cực!):**
   $$\vec{a}_M = \vec{a}_O + \vec{a}_{MO}^t + \vec{a}_{MO}^n$$
   với $a_{MO}^t = |\varepsilon| R$ (vuông góc $OM$ theo chiều $\vec{\varepsilon}$) và $a_{MO}^n = \omega^2 R$ (hướng từ $M$ về tâm $O$).

::: danger CẢNH BÁO BẪY CHẾT NGƯỜI: Gia tốc điểm tiếp xúc $I$ thuộc con lăn KHÔNG BẰNG 0!
Rất nhiều sinh viên thấy $v_I = 0$ liền suy bừa $a_I = 0$ rồi lấy $I$ làm cực tính gia tốc! Thử kiểm tra ngay bằng công thức dời cực từ tâm $O$:
$$\vec{a}_I^{\text{đĩa}} = \vec{a}_O + \vec{a}_{IO}^t + \vec{a}_{IO}^n$$
- $\vec{a}_O$ hướng sang phải, độ lớn $\varepsilon R$; $\vec{a}_{IO}^t$ ở đáy đĩa hướng sang trái, độ lớn $\varepsilon R$ $\implies$ hai thành phần này triệt tiêu nhau ($\vec{a}_O + \vec{a}_{IO}^t = \vec{0}$).
- Còn lại thành phần hướng tâm $\vec{a}_{IO}^n$ không hề triệt tiêu! Suy ra:
  $$a_I^{\text{đĩa}} = \omega^2 R \neq 0, \quad \text{hướng thẳng đứng từ } I \text{ vào tâm } O$$
**Quy tắc vàng:** Chỉ dùng $I$ để tính **VẬN TỐC**; khi sang **GIA TỐC**, luôn lấy **TÂM ĐĨA $O$** làm cực!
:::

<div class="figure-container">
<svg viewBox="0 0 760 290" style="width: 100%; max-width: 720px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Quy ước hệ trục thuận bàn tay phải và con lăn lăn không trượt">
  <defs>
    <marker id="m1-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0284c7" />
    </marker>
    <marker id="m1-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#dc2626" />
    </marker>
    <marker id="m1-k" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
    </marker>
    <marker id="m1-t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0d9488" />
    </marker>
  </defs>
  <rect x="12" y="12" width="346" height="266" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="185" y="34" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13.5" font-weight="700" fill="#0f172a">1. Quy ước (+k CCW / -k CW) &amp; Quay 90°</text>
  <line x1="145" y1="194" x2="295" y2="194" stroke="#0f172a" stroke-width="2" marker-end="url(#m1-k)" />
  <line x1="145" y1="194" x2="145" y2="74" stroke="#0f172a" stroke-width="2" marker-end="url(#m1-k)" />
  <text x="304" y="198" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">x (i)</text>
  <text x="145" y="64" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">y (j)</text>
  <circle cx="122" cy="212" r="8" fill="#ffffff" stroke="#0284c7" stroke-width="2" />
  <circle cx="122" cy="212" r="2.6" fill="#0284c7" />
  <text x="108" y="216" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0284c7">k (ra)</text>
  <line x1="145" y1="194" x2="255" y2="142" stroke="#0d9488" stroke-width="2.4" marker-end="url(#m1-t)" />
  <text x="262" y="140" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f766e">r = (x, y)</text>
  <line x1="145" y1="194" x2="93" y2="84" stroke="#0284c7" stroke-width="2.4" marker-end="url(#m1-b)" />
  <text x="86" y="78" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0284c7">90° CCW</text>
  <text x="86" y="94" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0284c7">(-y, x)</text>
  <path d="M 204 166 A 65 65 0 0 0 118 136" fill="none" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="4 3" marker-end="url(#m1-b)" />
  <text x="192" y="118" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#0284c7">+90°</text>
  <rect x="26" y="232" width="154" height="32" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2" />
  <text x="103" y="252" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0369a1">+k : Ngược KĐH (CCW)</text>
  <rect x="190" y="232" width="154" height="32" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2" />
  <text x="267" y="252" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#b91c1c">-k : Cùng KĐH (CW)</text>
  <rect x="372" y="12" width="376" height="266" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="560" y="34" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13.5" font-weight="700" fill="#0f172a">2. Con lăn không trượt &amp; Bẫy gia tốc tại I</text>
  <line x1="402" y1="226" x2="725" y2="226" stroke="#0f172a" stroke-width="2.2" />
  <path d="M 412 226 l -7 9 M 430 226 l -7 9 M 448 226 l -7 9 M 466 226 l -7 9 M 484 226 l -7 9 M 502 226 l -7 9 M 520 226 l -7 9 M 538 226 l -7 9 M 556 226 l -7 9 M 574 226 l -7 9 M 592 226 l -7 9 M 610 226 l -7 9 M 628 226 l -7 9 M 646 226 l -7 9 M 664 226 l -7 9 M 682 226 l -7 9 M 700 226 l -7 9" stroke="#64748b" stroke-width="1.3" />
  <circle cx="555" cy="156" r="70" fill="#ffffff" stroke="#0f172a" stroke-width="2.4" />
  <line x1="555" y1="86" x2="555" y2="226" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3" />
  <circle cx="555" cy="226" r="4" fill="#0f172a" />
  <circle cx="555" cy="156" r="4" fill="#0f172a" />
  <circle cx="555" cy="86" r="4" fill="#0f172a" />
  <text x="555" y="254" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">I (v_I = 0)</text>
  <text x="542" y="152" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">O</text>
  <text x="555" y="74" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">B (đỉnh)</text>
  <line x1="555" y1="156" x2="612" y2="156" stroke="#0284c7" stroke-width="2.4" marker-end="url(#m1-b)" />
  <line x1="555" y1="86" x2="669" y2="86" stroke="#0284c7" stroke-width="2.4" marker-end="url(#m1-b)" />
  <line x1="555" y1="226" x2="669" y2="86" stroke="#0284c7" stroke-width="1.4" stroke-dasharray="4 3" />
  <text x="636" y="160" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0284c7">v_O = ωR</text>
  <text x="676" y="90" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0284c7">v_B = 2ωR</text>
  <path d="M 488 118 A 76 76 0 0 1 524 83" fill="none" stroke="#0d9488" stroke-width="2" marker-end="url(#m1-t)" />
  <text x="478" y="96" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0f766e">ω (CW)</text>
  <line x1="555" y1="221" x2="555" y2="178" stroke="#dc2626" stroke-width="2.8" marker-end="url(#m1-r)" />
  <rect x="380" y="175" width="98" height="42" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2" />
  <text x="429" y="193" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#b91c1c">a_I = ω²R ≠ 0</text>
  <text x="429" y="209" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="10.5" font-weight="600" fill="#b91c1c">(hướng về tâm O)</text>
  <line x1="478" y1="196" x2="549" y2="196" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3 2" />
</svg>
<div class="figure-caption">

Hình 1.1: Quy ước hệ trục thuận bàn tay phải và phân bố vận tốc – gia tốc trên con lăn lăn không trượt

</div>
</div>

::: tip Ví dụ 2.1 (Kiểm tra nhanh 3 phút): Con lăn $R = 0{,}25\text{ m}$ lăn không trượt
**Đề bài:** Một đĩa tròn bán kính $R = 0{,}25\text{ m}$ lăn không trượt sang phải trên sàn ngang cố định ($Ox$ sang phải, $Oy$ thẳng đứng lên). Tại thời điểm khảo sát, đĩa có $\omega = 4\text{ rad/s}$ (CW) và $\varepsilon = 2\text{ rad/s}^2$ (CW). Tìm vận tốc tâm $O$, vận tốc đỉnh $B$, gia tốc tâm $O$, gia tốc đỉnh $B$ và gia tốc điểm tiếp xúc $I$ thuộc đĩa.

**Lời giải nhanh:**
- Tâm vận tốc tức thời $I$ là điểm tiếp xúc sàn: $v_O = \omega R = 4 \cdot 0{,}25 = 1{,}0\text{ m/s}$ (sang phải); $v_B = 2\omega R = 2{,}0\text{ m/s}$ (sang phải).
- Gia tốc tâm $O$: Vì đĩa quay nhanh dần CW sang phải, $\vec{a}_O = \varepsilon R\,\vec{i} = 2 \cdot 0{,}25\,\vec{i} = 0{,}5\vec{i}\text{ m/s}^2$.
- Gia tốc đỉnh $B$ lấy $O$ làm cực ($\overrightarrow{OB} = 0{,}25\vec{j}$):
  - $a_{BO}^t = \varepsilon R = 0{,}5\text{ m/s}^2$ (sang phải, $+\vec{i}$).
  - $a_{BO}^n = \omega^2 R = 4^2 \cdot 0{,}25 = 4{,}0\text{ m/s}^2$ (từ $B$ lao xuống tâm $O$, $-\vec{j}$).
  - Cộng lại: $\vec{a}_B = (0{,}5 + 0{,}5)\vec{i} - 4{,}0\vec{j} = 1{,}0\vec{i} - 4{,}0\vec{j}\text{ m/s}^2$.
- Gia tốc điểm tiếp xúc $I$ thuộc đĩa: $\vec{a}_I^{\text{đĩa}} = \omega^2 R\,\vec{j} = +4{,}0\vec{j}\text{ m/s}^2$ (hướng thẳng lên tâm $O$, tuyệt đối không phải $0$!).
:::

---

## Ngày 3: Giải Chọn Đúng 3 Khâu Chương 10 Bằng Hình Chiếu & Tâm Tức Thời

Khi gặp bài toán cơ cấu gồm **3 khâu** (ví dụ: Con lăn + Thanh truyền + Con trượt, hoặc Tay quay + Thanh truyền + Đĩa lăn), bạn hãy chạy đúng quy trình 4 bước sau:
1. **Bước 1 — Đọc kích thước hình học ẩn từ hình vẽ:** Tìm ngay độ dài các thanh từ tam giác vuông hoặc tam giác cân trên đề.
2. **Bước 2 — Giải bài toán Vận tốc:** Xuất phát từ khâu dẫn hoặc con lăn không trượt $\implies$ dùng Tâm tức thời $I$ (hoặc định lý hình chiếu vận tốc) để tìm $v$ và $\omega$ của các thanh.
3. **Bước 3 — Viết phương trình vectơ Gia tốc:** Chọn điểm đã biết gia tốc làm cực (ví dụ tâm $O$ hoặc điểm $B$), viết $\vec{a}_A = \vec{a}_B + \vec{a}_{AB}^n + \vec{a}_{AB}^t$.
4. **Bước 4 — Chiếu khéo để không dính 2 ẩn cùng lúc:** Chiếu phương trình vectơ lên trục **vuông góc** với phương chuyển động của điểm đích $A$ để triệt tiêu $a_A$, giải thẳng ra $\bar{\varepsilon}_{AB}$, rồi chiếu lên trục còn lại để ra $\vec{a}_A$!

---

### Bài mẫu 3.1 (Đề Thi Thật `1821` HK II/2018-2019 — Bài 1, Câu 1–4)

**Đề bài nguyên văn:** Cho hệ gồm con lăn $O$ bán kính $R = 30\text{ cm}$ lăn không trượt trên mặt phẳng ngang, liên kết với con chạy $A$ thông qua thanh $AB$ như hình vẽ. Con chạy $A$ trượt trong rãnh nằm ngang. Tại thời điểm cơ hệ có vị trí như hình vẽ: $B$ nằm ở đỉnh cao nhất của con lăn ($OB$ thẳng đứng), $\alpha = 30^\circ$, con lăn $O$ có vận tốc góc $\omega = 0{,}5\text{ rad/s}$ (chiều CW) và gia tốc góc $\varepsilon = 0{,}2\text{ rad/s}^2$ (chiều CW). Hệ trục chuẩn có $\vec{i}$ sang phải, $\vec{j}$ hướng lên, $\vec{k}$ hướng ra ngoài.

<div class="figure-container">
<svg viewBox="0 0 720 290" style="width: 100%; max-width: 680px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Sơ đồ cơ cấu con lăn O thanh AB và con chạy A trong Đề 1821 Bài 1">
  <defs>
    <marker id="m2-k" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
    </marker>
    <marker id="m2-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0284c7" />
    </marker>
    <marker id="m2-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#dc2626" />
    </marker>
  </defs>
  <rect x="8" y="8" width="704" height="274" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="360" y="34" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" font-weight="700" fill="#0f172a">Mô hình Đề 1821 (Bài 1, Câu 1–4): Con lăn O + Thanh AB + Con chạy A</text>
  <line x1="88" y1="115" x2="146" y2="115" stroke="#0284c7" stroke-width="2.2" marker-end="url(#m2-b)" />
  <line x1="88" y1="115" x2="88" y2="57" stroke="#0284c7" stroke-width="2.2" marker-end="url(#m2-b)" />
  <circle cx="70" cy="115" r="7.5" fill="#ffffff" stroke="#0284c7" stroke-width="1.8" />
  <circle cx="70" cy="115" r="2.5" fill="#0284c7" />
  <text x="152" y="119" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0284c7">i (Ox)</text>
  <text x="88" y="48" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0284c7">j (Oy)</text>
  <text x="58" y="119" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0284c7">k</text>
  <line x1="120" y1="228" x2="640" y2="228" stroke="#0f172a" stroke-width="2" />
  <line x1="190" y1="206" x2="320" y2="206" stroke="#334155" stroke-width="2" />
  <line x1="190" y1="250" x2="320" y2="250" stroke="#334155" stroke-width="2" />
  <path d="M 198 206 l 6 -8 M 216 206 l 6 -8 M 234 206 l 6 -8 M 252 206 l 6 -8 M 270 206 l 6 -8 M 288 206 l 6 -8 M 306 206 l 6 -8" stroke="#64748b" stroke-width="1.2" />
  <path d="M 198 250 l -6 8 M 216 250 l -6 8 M 234 250 l -6 8 M 252 250 l -6 8 M 270 250 l -6 8 M 288 250 l -6 8 M 306 250 l -6 8" stroke="#64748b" stroke-width="1.2" />
  <path d="M 460 228 l -6 9 M 478 228 l -6 9 M 496 228 l -6 9 M 514 228 l -6 9 M 532 228 l -6 9 M 550 228 l -6 9 M 568 228 l -6 9 M 586 228 l -6 9 M 604 228 l -6 9 M 622 228 l -6 9" stroke="#64748b" stroke-width="1.2" />
  <rect x="223" y="212" width="64" height="32" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <circle cx="255" cy="228" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
  <text x="242" y="232" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">A</text>
  <circle cx="480" cy="163" r="65" fill="#ffffff" stroke="#0f172a" stroke-width="2.5" />
  <line x1="480" y1="98" x2="480" y2="228" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="4 3" />
  <line x1="480" y1="163" x2="526" y2="117" stroke="#475569" stroke-width="1.5" marker-end="url(#m2-k)" />
  <text x="507" y="152" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#334155">R</text>
  <line x1="255" y1="228" x2="480" y2="98" stroke="#0f172a" stroke-width="3.2" stroke-linecap="round" />
  <circle cx="480" cy="98" r="5" fill="#ffffff" stroke="#0f172a" stroke-width="2.2" />
  <circle cx="480" cy="163" r="3.5" fill="#0f172a" />
  <circle cx="480" cy="228" r="4" fill="#0f172a" />
  <text x="466" y="168" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">O</text>
  <text x="480" y="84" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13.5" font-weight="700" fill="#0f172a">B</text>
  <text x="480" y="254" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13.5" font-weight="700" fill="#0f172a">I</text>
  <path d="M 326 228 A 71 71 0 0 0 316.5 192.5" fill="none" stroke="#d97706" stroke-width="1.8" />
  <text x="332" y="216" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#b45309">α = 30°</text>
  <text x="348" y="148" text-anchor="middle" transform="rotate(-30 348 148)" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0369a1">AB = 2R / sin 30° = 120 cm</text>
  <path d="M 526 96 A 76 76 0 0 1 558 148" fill="none" stroke="#0284c7" stroke-width="2.2" marker-end="url(#m2-b)" />
  <text x="565" y="114" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0284c7">ω = 0,5 rad/s (CW)</text>
  <path d="M 560 164 A 80 80 0 0 1 545 210" fill="none" stroke="#dc2626" stroke-width="2.2" marker-end="url(#m2-r)" />
  <text x="568" y="196" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#dc2626">ε = 0,2 rad/s² (CW)</text>
</svg>
<div class="figure-caption">

Hình 1.2: Cơ cấu con lăn O, thanh truyền AB và con chạy A của Đề 1821 (Bài 1, Câu 1–4)

</div>
</div>

**Các câu hỏi trong đề (đối chiếu đáp án chính thức trang 5 PDF):**
- **Câu 1:** Độ lớn vận tốc góc thanh $AB$ và vận tốc dài con chạy $A$ (`c`: $\omega_{AB} = 0,\; V_A = 30\text{ cm/s}$).
- **Câu 2:** Vector gia tốc dài điểm $B$ ($\text{cm/s}^2$) (`b`: $\vec{a}_B = 12\vec{i} - 7{,}5\vec{j}$).
- **Câu 3:** Vector gia tốc con chạy $A$ ($\text{cm/s}^2$) (`c`: $\vec{a}_A = 7{,}67\vec{i}$).
- **Câu 4:** Vector gia tốc góc thanh $AB$ ($\text{rad/s}^2$) (`b`: $\vec{\varepsilon}_{AB} = -0{,}07\vec{k}$).

**Lời giải chi tiết từng bước cho người mất gốc:**

1. **Bước 0 — Tìm chiều dài thanh $AB$ ẩn trên hình vẽ:**
   Trong tam giác vuông $AIB$ vuông tại $I$ có chiều cao $IB = 2R = 60\text{ cm}$ và góc $\widehat{BAI} = \alpha = 30^\circ$:
   $$AB = \frac{IB}{\sin 30^\circ} = \frac{60}{0{,}5} = 120\text{ cm}$$
   Suy ra vectơ nối từ cực $B$ tới điểm $A$ là:
   $$\overrightarrow{BA} = \left(-AB\cos 30^\circ;\; -AB\sin 30^\circ\right) = \left(-60\sqrt{3};\; -60\right)\text{ cm}$$

2. **Giải Câu 1 (`c`) — Tìm $v_B$, $\omega_{AB}$ và $V_A$:**
   - Con lăn $O$ lăn không trượt trên sàn ngang với tâm tức thời tại điểm tiếp xúc đáy $I$:
     $$\vec{v}_B = \vec{\omega} \times \overrightarrow{IB} = (-0{,}5\vec{k}) \times (60\vec{j}) = +30\vec{i}\text{ (cm/s)}$$
     *(Hoặc nhẩm ngay: $v_B = 2\omega R = 2 \cdot 0{,}5 \cdot 30 = 30\text{ cm/s}$ hướng sang phải).*
   - Trên thanh $AB$: $\vec{v}_B$ nằm ngang, con chạy $A$ trượt trong rãnh ngang nên $\vec{v}_A$ cũng nằm ngang ($\vec{v}_A \parallel \vec{v}_B$). Do hai đường vuông góc kẻ từ $A$ và $B$ đều thẳng đứng song song nhau, tâm vận tốc tức thời của thanh $AB$ nằm ở vô cùng ($I_{AB} \to \infty$), thanh $AB$ đang **tịnh tiến tức thời**:
     $$\omega_{AB} = 0\text{ rad/s}, \qquad V_A = v_B = 30\text{ cm/s}$$
     **Chốt Câu 1: chọn `c`.**

3. **Giải Câu 2 (`b`) — Tìm vector gia tốc $\vec{a}_B$ ($\text{cm/s}^2$):**
   - Chuẩn hóa dấu quay của con lăn (CW $\implies$ dấu âm): $\vec{\omega} = -0{,}5\vec{k}\text{ rad/s}$ và $\vec{\varepsilon} = -0{,}2\vec{k}\text{ rad/s}^2$.
   - Gia tốc tâm $O$ (song song mặt sàn, sang phải theo chiều lăn nhanh dần):
     $$\vec{a}_O = +\varepsilon R\,\vec{i} = 0{,}2 \cdot 30\,\vec{i} = +6\vec{i}\text{ (cm/s}^2\text{)}$$
   - Lấy tâm $O$ làm cực ($\overrightarrow{OB} = +30\vec{j}\text{ cm}$), tính $\vec{a}_B = \vec{a}_O + \vec{a}_{BO}^t + \vec{a}_{BO}^n$:
     $$\begin{aligned}
     \vec{a}_{BO}^t &= \vec{\varepsilon} \times \overrightarrow{OB} = (-0{,}2\vec{k}) \times (30\vec{j}) = +6\vec{i}\text{ (cm/s}^2\text{)} \\
     \vec{a}_{BO}^n &= -\omega^2 \overrightarrow{OB} = -(0{,}5)^2(30\vec{j}) = -7{,}5\vec{j}\text{ (cm/s}^2\text{)}
     \end{aligned}$$
   - Cộng lại từng thành phần:
     $$\vec{a}_B = (6 + 6)\vec{i} - 7{,}5\vec{j} = 12\vec{i} - 7{,}5\vec{j}\text{ (cm/s}^2\text{)}$$
     **Chốt Câu 2: chọn `b`.** *(Bẫy hay gặp: quên cộng $\vec{a}_O = 6\vec{i}$ làm ra $-6\vec{i}$ hoặc quên đổi dấu bình phương thành $+7{,}5\vec{j}$.)*

4. **Giải Câu 4 (`b`) và Câu 3 (`c`) — Tìm $\vec{\varepsilon}_{AB}$ và $\vec{a}_A$:**
   - Chọn $B$ làm cực trên thanh $AB$. Vì $\omega_{AB} = 0$, gia tốc hướng tâm tương đối $\vec{a}_{AB}^n = \vec{0}$. Đặt $\vec{\varepsilon}_{AB} = \bar{\varepsilon}_{AB}\vec{k}$ (ẩn đại số $\bar{\varepsilon}_{AB}$):
     $$\begin{aligned}
     \vec{a}_A &= \vec{a}_B + \vec{\varepsilon}_{AB} \times \overrightarrow{BA} \\
     &= (12\vec{i} - 7{,}5\vec{j}) + \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 0 & 0 & \bar{\varepsilon}_{AB} \\ -60\sqrt{3} & -60 & 0 \end{vmatrix} \\
     &= \left(12 + 60\bar{\varepsilon}_{AB}\right)\vec{i} + \left(-7{,}5 - 60\sqrt{3}\,\bar{\varepsilon}_{AB}\right)\vec{j}
     \end{aligned}$$
   - Vì con chạy $A$ trượt dọc rãnh ngang nên thành phần đứng $a_{Ay} = 0$. **Chiếu lên $Oy$ trước** để cô lập $\bar{\varepsilon}_{AB}$:
     $$\begin{aligned}
     -7{,}5 - 60\sqrt{3}\,\bar{\varepsilon}_{AB} &= 0 \\
     \implies \bar{\varepsilon}_{AB} &= -\frac{7{,}5}{60\sqrt{3}} = -\frac{\sqrt{3}}{24} \approx -0{,}0722\text{ rad/s}^2
     \end{aligned}$$
     Vậy $\vec{\varepsilon}_{AB} = -0{,}07\vec{k}\text{ rad/s}^2$ (dấu trừ tức thanh $AB$ có xu hướng quay **CW**). **Chốt Câu 4: chọn `b`.**
   - **Chiếu lên $Ox$** để tìm $\vec{a}_A$ (nhớ bấm giữ giá trị đúng $-\frac{\sqrt{3}}{24}$ khi thế vào!):
     $$a_{Ax} = 12 + 60\left(-\frac{\sqrt{3}}{24}\right) = 12 - \frac{5\sqrt{3}}{2} \approx 7{,}6699 \approx +7{,}67\text{ cm/s}^2$$
     Vậy $\vec{a}_A = 7{,}67\vec{i}\text{ cm/s}^2$. **Chốt Câu 3: chọn `c`.**

---

### Bài mẫu 3.2 (Đề Thi Thật `0001/2016` — Bài 2, Câu 7–8, trang 24 PDF)

**Đề bài tóm tắt:** Cho cơ hệ ròng rọc phẳng với bán kính $R_2 = 2r_1 = R_3 = 2r_3 = 2r$ (tức $r_1 = r_3 = r$, $R_2 = R_3 = 2r$). Ròng rọc cố định $O_1$ quay theo chiều góc $\varphi_1$ (CCW) nối dây thẳng đứng bên phải xuống vành trong $r_3$ (bên trái) của ròng rọc động hai tầng $O_3$. Ròng rọc cố định $O_2$ quay theo chiều góc $\varphi_2$ (CCW) nối dây thẳng đứng bên trái xuống vành ngoài $R_3$ (bên phải) của ròng rọc động $O_3$ (treo vật $A$).
- **Câu 7:** Điều kiện để ròng rọc động hai tầng tâm $O_3$ quay **cùng chiều kim đồng hồ**.
- **Câu 8:** Điều kiện để ròng rọc động hai tầng $3$ **tịnh tiến tức thời**.

<div class="figure-container">
<svg viewBox="0 0 740 310" style="width: 100%; max-width: 700px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Cơ cấu ròng rọc hai tầng Đề 0001/2016 và cơ cấu hai thanh đĩa lăn Đề 1721/1722">
  <defs>
    <marker id="m3-k" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
    </marker>
    <marker id="m3-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0284c7" />
    </marker>
    <marker id="m3-t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0d9488" />
    </marker>
  </defs>
  <rect x="10" y="10" width="342" height="290" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="181" y="34" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">1. Đề 0001/2016 (C7–8): Ròng rọc 2 tầng</text>
  <circle cx="96" cy="86" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
  <polygon points="96,86 88,104 104,104" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5" />
  <circle cx="96" cy="86" r="3" fill="#0f172a" />
  <text x="96" y="56" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#0f172a">O1 (r1 = r)</text>
  <path d="M 67 74 A 30 30 0 0 0 67 98" fill="none" stroke="#0284c7" stroke-width="2" marker-end="url(#m3-b)" />
  <text x="58" y="90" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0284c7">ω1 (+)</text>
  <circle cx="228" cy="98" r="44" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
  <polygon points="228,98 216,118 240,118" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5" />
  <circle cx="228" cy="98" r="3" fill="#0f172a" />
  <text x="236" y="50" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#0f172a">O2 (R2 = 2r)</text>
  <path d="M 278 112 A 52 52 0 0 0 278 82" fill="none" stroke="#0284c7" stroke-width="2" marker-end="url(#m3-b)" />
  <text x="285" y="101" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0284c7">ω2 (+)</text>
  <line x1="118" y1="86" x2="118" y2="198" stroke="#0f172a" stroke-width="1.8" />
  <line x1="184" y1="98" x2="184" y2="198" stroke="#0f172a" stroke-width="1.8" />
  <circle cx="140" cy="198" r="44" fill="#e0f2fe" fill-opacity="0.35" stroke="#0f172a" stroke-width="2" />
  <circle cx="140" cy="198" r="22" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
  <circle cx="140" cy="198" r="3.2" fill="#0f172a" />
  <text x="140" y="189" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#0f172a">O3</text>
  <text x="86" y="198" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="600" fill="#475569">r3 = r</text>
  <text x="192" y="198" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="600" fill="#475569">R3 = 2r</text>
  <line x1="140" y1="198" x2="140" y2="255" stroke="#0f172a" stroke-width="1.8" />
  <rect x="122" y="255" width="36" height="26" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.8" />
  <text x="140" y="273" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#b45309">A</text>
  <text x="196" y="264" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="600" fill="#0369a1">v_trái = r ω1 (lên)</text>
  <text x="196" y="281" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="600" fill="#0369a1">v_phải = 2r ω2 (xuống)</text>
  <rect x="366" y="10" width="364" height="290" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="548" y="34" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">2. Đề 1721/1722 (C6–7): 2 thanh + Đĩa C</text>
  <line x1="560" y1="245" x2="715" y2="245" stroke="#0f172a" stroke-width="2.2" />
  <path d="M 568 245 l -6 9 M 586 245 l -6 9 M 604 245 l -6 9 M 622 245 l -6 9 M 640 245 l -6 9 M 658 245 l -6 9 M 676 245 l -6 9 M 694 245 l -6 9" stroke="#64748b" stroke-width="1.2" />
  <line x1="395" y1="155" x2="395" y2="245" stroke="#0f172a" stroke-width="2" />
  <path d="M 395 162 l -8 7 M 395 178 l -8 7 M 395 194 l -8 7 M 395 210 l -8 7 M 395 226 l -8 7 M 395 242 l -8 7" stroke="#64748b" stroke-width="1.2" />
  <polygon points="395,188 412,200 395,212" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.6" />
  <circle cx="642" cy="200" r="45" fill="#e2e8f0" stroke="#0f172a" stroke-width="2.2" />
  <line x1="412" y1="200" x2="465" y2="200" stroke="#64748b" stroke-width="1.6" />
  <polyline points="465,200 471,192 479,208 487,192 495,208 503,192 511,208 519,192 525,200" fill="none" stroke="#0f172a" stroke-width="1.6" />
  <line x1="525" y1="200" x2="642" y2="200" stroke="#64748b" stroke-width="1.6" />
  <text x="495" y="226" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#475569">K</text>
  <line x1="412" y1="200" x2="527" y2="92" stroke="#0f172a" stroke-width="3" />
  <line x1="527" y1="92" x2="642" y2="200" stroke="#0f172a" stroke-width="3" />
  <circle cx="412" cy="200" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
  <circle cx="527" cy="92" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
  <circle cx="642" cy="200" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
  <circle cx="584.5" cy="146" r="3.5" fill="#0d9488" />
  <text x="415" y="228" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">A</text>
  <text x="527" y="79" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">B</text>
  <text x="654" y="205" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">C</text>
  <text x="598" y="138" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0f766e">G</text>
  <text x="456" y="138" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0369a1">l (ω)</text>
  <text x="580" y="114" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0369a1">l (ω1)</text>
  <path d="M 454 200 A 42 42 0 0 0 442 171" fill="none" stroke="#d97706" stroke-width="1.8" />
  <text x="458" y="183" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#b45309">θ</text>
  <line x1="635" y1="92" x2="675" y2="92" stroke="#0f172a" stroke-width="1.6" marker-end="url(#m3-k)" />
  <line x1="635" y1="92" x2="635" y2="54" stroke="#0f172a" stroke-width="1.6" marker-end="url(#m3-k)" />
  <path d="M 670 86 A 26 26 0 0 0 644 62" fill="none" stroke="#0284c7" stroke-width="1.8" marker-end="url(#m3-b)" />
  <text x="676" y="72" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0284c7">(+)</text>
  <text x="642" y="268" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="600" fill="#0f172a">I_C (tiếp đất)</text>
</svg>
<div class="figure-caption">

Hình 1.3: Hệ ròng rọc hai tầng Đề 0001/2016 (Câu 7–8) và hệ hai thanh nối đĩa lăn Đề 1721/1722 (Câu 6–7)

</div>
</div>

**Lời giải chi tiết (kiểm toán từ vận tốc 2 điểm dây trên $O_3$):**
- Chọn chiều dương thẳng đứng hướng **lên** và chiều quay dương là **CCW** ($\omega_3 > 0$ là CCW, $\omega_3 < 0$ là CW).
- Vận tốc hướng lên của hai nhánh dây khi cuốn vào $O_1$ và $O_2$ (xem chiều mũi tên $\varphi_1, \varphi_2$ trên hình):
  - Mép phải của $O_1$ đi lên: $v_{\text{trái}} = +r_1 \dot{\varphi}_1 = +r\dot{\varphi}_1$.
  - Mép trái của $O_2$ đi xuống: $v_{\text{phải}} = -R_2 \dot{\varphi}_2 = -2r\dot{\varphi}_2$.
- Áp dụng phân bố vận tốc song phẳng trên ròng rọc động $O_3$ (lấy cực $O_3$ có vận tốc hướng lên $v_{O_3}$):
  $$\begin{cases}
  v_{\text{trái}} = v_{O_3} - \omega_3 r_3 = v_{O_3} - r\omega_3 = r\dot{\varphi}_1 \\
  v_{\text{phải}} = v_{O_3} + \omega_3 R_3 = v_{O_3} + 2r\omega_3 = -2r\dot{\varphi}_2
  \end{cases}$$
- Lấy phương trình dưới trừ phương trình trên để triệt tiêu ngay $v_{O_3}$:
  $$3r\omega_3 = -r(\dot{\varphi}_1 + 2\dot{\varphi}_2) \implies \omega_3 = -\frac{\dot{\varphi}_1 + 2\dot{\varphi}_2}{3}$$
  *(Thế ngược lại cũng suy ra ngay $v_{O_3} = \frac{2}{3}r(\dot{\varphi}_1 - \dot{\varphi}_2)$ để dùng ở Chương 15 Chặng 4!)*
- **Chốt Câu 7 (`e`):** Để $O_3$ quay **cùng chiều kim đồng hồ (CW)** thì $\omega_3 < 0$:
  $$-\frac{\dot{\varphi}_1 + 2\dot{\varphi}_2}{3} < 0 \iff \dot{\varphi}_1 + 2\dot{\varphi}_2 > 0 \iff \dot{\varphi}_1 > -2\dot{\varphi}_2$$
- **Chốt Câu 8 (`c`):** Để $O_3$ **tịnh tiến tức thời** thì $\omega_3 = 0$:
  $$\dot{\varphi}_1 = -2\dot{\varphi}_2$$

---

### Bài mẫu 3.3 (Đề Thi Thật `1721` & `1722` — Bài 3, Câu 6–7, trang 8 & 12 PDF)

**Đề bài tóm tắt:** Thanh $AB$ và $BC$ có cùng chiều dài $l$. Đầu $A$ nối khớp cố định trên tường đứng, $B$ nối khớp hai thanh, $C$ là tâm của đĩa tròn bán kính $R$ lăn không trượt trên mặt phẳng ngang (như Hình 1.3 bên phải). Quy ước chiều dương quay góc $\theta$ và vận tốc góc là **ngược KĐH (+)**. Tại vị trí $15^\circ < \theta < 60^\circ$, thanh $AB$ có vận tốc góc $\omega$ (CCW).
- **Thông số Đề `1721`:** $l = 15\text{ cm} = 0{,}15\text{ m}$, $R = 5\text{ cm} = 0{,}05\text{ m}$.
- **Thông số Đề `1722`:** $l = 20\text{ cm} = 0{,}20\text{ m}$, $R = 5\text{ cm} = 0{,}05\text{ m}$.
- **Hỏi:** (Câu 6) Vận tốc góc thanh $BC$ ($\bar{\omega}_1$) và đĩa $C$ ($\bar{\omega}_2$) theo $\omega$; (Câu 7) Độ lớn vận tốc trung điểm $G$ của thanh $BC$ theo $\omega$.

**Lời giải chung chuẩn xác cho cả 2 mã đề:**

1. **Giải Câu 6 — Tìm $\bar{\omega}_1$ (thanh $BC$) và $\bar{\omega}_2$ (đĩa $C$):**
   - Vì $AB = BC = l$, tam giác $ABC$ luôn là **tam giác cân tại $B$** ($\widehat{BAC} = \widehat{BCA} = \theta$). Chọn gốc $A(0; 0)$, trục $Ox$ sang phải, $Oy$ hướng lên:
     $$x_B = l\cos\theta, \quad y_B = l\sin\theta; \qquad x_C = 2l\cos\theta, \quad y_C = 0$$
   - Khi góc $\theta$ tăng ($\dot{\theta} = +\omega$), thanh $BC$ nghiêng xuống dưới sang phải với góc hướng $-\theta$ (so với $+Ox$). Khi $\theta$ tăng thêm $d\theta$, góc nghiêng của $BC$ đổi từ $-\theta$ sang $-(\theta + d\theta)$, tức quay **cùng chiều kim đồng hồ** với cùng tốc độ:
     $$\bar{\omega}_1 = -\dot{\theta} = -\omega$$
     *(Hoặc nhìn hình: đối xứng qua đường đứng qua $B$, khi $v_B$ hướng lên-trái và $v_C$ nằm ngang sang trái thì $\vec{v}_B, \vec{v}_C$ kéo $BC$ quay CW đối nghịch $AB$.)*
   - Tìm vận tốc tâm đĩa $C$ bằng đạo hàm $x_C$:
     $$\dot{x}_C = -2l\omega\sin\theta < 0$$
     Nghĩa là tâm $C$ chạy sang trái với tốc độ $v_C = 2l\omega\sin\theta$.
   - Đĩa $C$ lăn không trượt trên mặt sàn ngang cố định về phía **bên trái**, nên đĩa quay quanh điểm tiếp xúc đất $I_C$ theo chiều **ngược KĐH (dương $+$)** với:
     $$\bar{\omega}_2 = +\frac{v_C}{R} = \frac{2l}{R}\,\omega\sin\theta$$
   - **Thay số đối chiếu Key:**
     - **Đề `1721` ($l = 15\text{ cm}, R = 5\text{ cm}$):** $\bar{\omega}_1 = -\omega$, $\bar{\omega}_2 = \frac{2\cdot 15}{5}\omega\sin\theta = 6\omega\sin\theta$ $\implies$ **Chọn `6c`.**
     - **Đề `1722` ($l = 20\text{ cm}, R = 5\text{ cm}$):** $\bar{\omega}_1 = -\omega$, $\bar{\omega}_2 = \frac{2\cdot 20}{5}\omega\sin\theta = 8\omega\sin\theta$ $\implies$ **Chọn `6a`.**

2. **Giải Câu 7 — Tìm $V_G$ và bẫy đồng nhất thức lượng giác:**
   - Trung điểm $G$ của $BC$ có tọa độ:
     $$x_G = \frac{x_B + x_C}{2} = \frac{3}{2}l\cos\theta, \qquad y_G = \frac{y_B + y_C}{2} = \frac{1}{2}l\sin\theta$$
   - Lấy đạo hàm theo thời gian ($\dot{\theta} = \omega$):
     $$\dot{x}_G = -\frac{3}{2}l\omega\sin\theta, \qquad \dot{y}_G = \frac{1}{2}l\omega\cos\theta$$
   - Suy ra tốc độ $V_G$:
     $$\begin{aligned}
     V_G &= \sqrt{\dot{x}_G^2 + \dot{y}_G^2} = \frac{l\omega}{2}\sqrt{9\sin^2\theta + \cos^2\theta} \\
     &= \frac{l\omega}{2}\sqrt{1 + 8\sin^2\theta}
     \end{aligned}$$
   - **Cảnh báo bẫy đề Bách Khoa:** Nhớ công thức nhân đôi $\cos 2\theta = 1 - 2\sin^2\theta \implies 8\sin^2\theta = 4 - 4\cos 2\theta$, nên:
     $$1 + 8\sin^2\theta \equiv 5 - 4\cos 2\theta$$
     - **Đề `1721` ($l = 0{,}15\text{ m} \implies \frac{l}{2} = 0{,}075\text{ m}$):** Cả phương án `a` ($0{,}075\omega\sqrt{5 - 4\cos 2\theta}$) và `c` ($0{,}075\omega\sqrt{1 + 8\sin^2\theta}$) đều ĐÚNG $\implies$ **Chọn `7e` ("Câu A và câu C đúng").**
     - **Đề `1722` ($l = 0{,}20\text{ m} \implies \frac{l}{2} = 0{,}1\text{ m}$):** Cả phương án `a` ($0{,}1\omega\sqrt{5 - 4\cos 2\theta}$) và `b` ($0{,}1\omega\sqrt{1 + 8\sin^2\theta}$) đều ĐÚNG $\implies$ **Chọn `7d` ("Câu A và câu B đúng").**

---

### Bài tập rèn luyện Ngày 3 (Đề Giữa kỳ `1643` & `1744` — Có đáp số kiểm toán)

**Bài 3.1 (Đề `1643` Câu 10–11):** Cơ cấu 4 khâu phẳng $ABCD$ có $A, D$ cố định nằm trên cùng đường ngang; tại vị trí xét, $AB = 2\text{ m}$ thẳng đứng hướng lên ($\omega_{AB} = 1\text{ rad/s}$ **CCW**, $\varepsilon_{AB} = 1\text{ rad/s}^2$ **CW**), $CD = 1\text{ m}$ thẳng đứng hướng lên, thanh nối $BC = 2\text{ m}$ dốc xuống sang phải hợp với phương ngang góc $30^\circ$. Tính $\omega_{BC}, \omega_{CD}$ và $\vec{\varepsilon}_{CD}$.

::: details Xem đáp án & lời giải nhanh (Key `10c, 11b`)
- $\vec{v}_B = (-2;\; 0)\text{ m/s}$, $\vec{v}_C \parallel \vec{v}_B$ (cùng nằm ngang) $\implies \omega_{BC} = 0$, $v_C = 2\text{ m/s}$ sang trái $\implies \omega_{CD} = \frac{2}{1} = 2\text{ rad/s}$ **CCW** (**Key `10c`**).
- $\overrightarrow{BC} = (\sqrt{3};\; -1)$, $\vec{a}_B = \vec{a}_B^t + \vec{a}_B^n = (+2;\; -2)\text{ m/s}^2$. Với $C$ quay quanh $D$ ($\overrightarrow{DC} = (0;\; 1)$), $\vec{a}_C = (-\bar{\varepsilon}_{CD};\; -4)$. Chiếu $\vec{a}_C = \vec{a}_B + \vec{\varepsilon}_{BC}\times\overrightarrow{BC}$ theo $(x, y)$:
  - Theo $y$: $-4 = -2 + \sqrt{3}\,\bar{\varepsilon}_{BC} \implies \bar{\varepsilon}_{BC} = -\frac{2}{\sqrt{3}}$.
  - Theo $x$: $-\bar{\varepsilon}_{CD} = 2 + \bar{\varepsilon}_{BC} = 2 - \frac{2}{\sqrt{3}}$, suy ra $\bar{\varepsilon}_{CD} = -\frac{2\sqrt{3} - 2}{\sqrt{3}}\text{ rad/s}^2$ (chiều **CW**, **Key `11b`**).
:::

**Bài 3.2 (Đề `1744` Câu 10–11):** Thanh $AB = 0{,}2\text{ m}$ treo thẳng đứng từ bản lề cố định $A$ xuống $B$; thanh $BC$ nối $B$ lên con trượt $C$ chạy thẳng đứng xuống dưới dọc tường bên trái ($AC = 0{,}2\text{ m}$ ngang, tạo tam giác vuông cân $ABC$). Biết $v_C = 2\text{ m/s}$ xuống dưới, $a_C = 1\text{ m/s}^2$ xuống dưới. Tính $\omega_{AB}, \omega_{BC}$ và $\vec{\varepsilon}_{BC}$.

::: details Xem đáp án & lời giải nhanh (Key `10a, 11b`)
- Đặt gốc $B(0; 0)$ tạm với $A(0; 0{,}2)$, $C(-0{,}2; 0{,}2)$, nên $\overrightarrow{AB} = (0;\; -0{,}2)$, $\overrightarrow{CB} = (0{,}2;\; -0{,}2)$.
- Ta có $\vec{v}_B = (0{,}2\bar{\omega}_{AB};\; 0)$ và qua $C$:
  $$\vec{v}_B = (0;\; -2) + \bar{\omega}_{BC}\vec{k}\times(0{,}2;\; -0{,}2) = (0{,}2\bar{\omega}_{BC};\; -2 + 0{,}2\bar{\omega}_{BC})$$
- Suy ra $\bar{\omega}_{BC} = +10\text{ rad/s}$ (**CCW**) và $\bar{\omega}_{AB} = +10\text{ rad/s}$ (**CCW**) (**Key `10a`**).
- Gia tốc $B$ tính qua $A$: $a_{By} = a_{AB}^n = +0{,}2 \cdot 10^2 = +20\text{ m/s}^2$. Tính qua $C$: $a_{By} = -1 + 0{,}2\bar{\varepsilon}_{BC} + 10^2(0{,}2) = 19 + 0{,}2\bar{\varepsilon}_{BC}$.
- Cân bằng $y$: $20 = 19 + 0{,}2\bar{\varepsilon}_{BC} \implies \bar{\varepsilon}_{BC} = +5\text{ rad/s}^2$ (**CCW**, **Key `11b`**).
:::

---

## Ngày 4: Chương 9 — Hợp Chuyển Động Điểm & Gia Tốc Coriolis

### 1. Phân biệt 3 chuyển động cho người mới bắt đầu

Hãy tưởng tượng một **con kiến ($M$)** đang bò dọc theo thanh kim loại của một **chiếc đĩa tròn đang quay** trên bàn:
- **Chuyển động kéo theo ($e$):** Giả sử con kiến bị dán keo cứng vào đĩa ngay tại vị trí đang xét — chuyển động của điểm gắn chặt trên đĩa đó chính là chuyển động kéo theo ($\vec{v}_e, \vec{a}_e = \vec{a}_e^n + \vec{a}_e^t$).
- **Chuyển động tương đối ($r$):** Bạn thu nhỏ lại ngồi ngay trên mặt đĩa (quay cùng đĩa) và chỉ nhìn con kiến bò dọc rãnh trên đĩa — đó là chuyển động tương đối ($\vec{v}_r, \vec{a}_r = \vec{a}_r^n + \vec{a}_r^t$).
- **Chuyển động tuyệt đối ($a$):** Mắt bạn đứng từ mặt đất cố định nhìn toàn bộ quỹ đạo thực tế của con kiến ($\vec{v}_a, \vec{a}_a$).

### 2. Hai công thức vàng & Mẹo tính Coriolis $\vec{a}_c = 2(\vec{\omega}_e \times \vec{v}_r)$

$$\vec{v}_a = \vec{v}_e + \vec{v}_r$$

$$\vec{a}_a = \vec{a}_e^n + \vec{a}_e^t + \vec{a}_r^n + \vec{a}_r^t + \vec{a}_c, \qquad \text{với } \vec{a}_c = 2\left(\vec{\omega}_e \times \vec{v}_r\right)$$

- **Độ lớn gia tốc Coriolis:**
  $$a_c = 2\,\omega_e\,v_r\,\sin\!\left(\widehat{\vec{\omega}_e,\, \vec{v}_r}\right)$$
- **Chiều $\vec{a}_c$ trong chuyển động phẳng ($\vec{\omega}_e \perp$ mặt phẳng):** $\sin 90^\circ = 1 \implies a_c = 2\omega_e v_r$. Để tìm hướng của $\vec{a}_c$, chỉ việc **quay vectơ $\vec{v}_r$ đi một góc $90^\circ$ theo đúng chiều quay của $\vec{\omega}_e$**!
- **Hai trường hợp bẫy $\vec{a}_c = \vec{0}$:**
  1. Khâu mang rãnh chuyển động **tịnh tiến** (dù tịnh tiến cong như thanh ngang của cơ cấu hình bình hành) $\implies \vec{\omega}_e = \vec{0} \implies \vec{a}_c = \vec{0}$.
  2. Vận tốc tương đối $\vec{v}_r$ **song song** với trục quay $\vec{\omega}_e$ ($\sin 0^\circ = 0 \implies \vec{a}_c = \vec{0}$).

<div class="figure-container">
<svg viewBox="0 0 740 275" style="width: 100%; max-width: 700px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Hai mô hình hợp chuyển động Coriolis trong Đề 1721 Bài 1 và Đề 1722 Bài 1">
  <defs>
    <marker id="m4-k" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
    </marker>
    <marker id="m4-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0284c7" />
    </marker>
    <marker id="m4-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#dc2626" />
    </marker>
    <marker id="m4-t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0d9488" />
    </marker>
  </defs>
  <rect x="10" y="10" width="350" height="255" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="185" y="34" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">1. Đề 1721 (C1–2): Đĩa quay Ω &amp; Điểm E</text>
  <circle cx="170" cy="152" r="85" fill="#ffffff" stroke="#0f172a" stroke-width="2.2" />
  <line x1="112" y1="193" x2="239" y2="103" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="5 3" />
  <polygon points="170,152 162,167 178,167" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5" />
  <circle cx="170" cy="152" r="3.5" fill="#0f172a" />
  <text x="155" y="152" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">O</text>
  <circle cx="217.5" cy="118.7" r="5" fill="#0f172a" />
  <text x="228" y="135" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">E</text>
  <line x1="217.5" y1="118.7" x2="262" y2="87" stroke="#0d9488" stroke-width="2.3" marker-end="url(#m4-t)" />
  <text x="268" y="88" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0f766e">v_r = da/dt</text>
  <line x1="217.5" y1="118.7" x2="188" y2="76" stroke="#dc2626" stroke-width="2.3" marker-end="url(#m4-r)" />
  <text x="193" y="103" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#dc2626">a_c // v_e</text>
  <line x1="217.5" y1="118.7" x2="186" y2="141" stroke="#0284c7" stroke-width="2.2" marker-end="url(#m4-b)" />
  <text x="198" y="160" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#0284c7">a_e^n</text>
  <path d="M 270 170 A 102 102 0 0 0 264 114" fill="none" stroke="#0284c7" stroke-width="2.2" marker-end="url(#m4-b)" />
  <text x="282" y="150" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0284c7">Ω (CCW)</text>
  <text x="185" y="253" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="600" fill="#475569">Quay v_r thêm 90° theo Ω ra chiều a_c</text>
  <rect x="380" y="10" width="350" height="255" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="555" y="34" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">2. Đề 1722 (C1–2): Vành quay quanh AB</text>
  <line x1="425" y1="80" x2="685" y2="80" stroke="#0f172a" stroke-width="4" />
  <rect x="422" y="66" width="24" height="10" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.3" />
  <rect x="422" y="84" width="24" height="10" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.3" />
  <rect x="664" y="66" width="24" height="10" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.3" />
  <rect x="664" y="84" width="24" height="10" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.3" />
  <text x="415" y="84" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">A</text>
  <text x="695" y="84" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">B</text>
  <path d="M 632 62 C 620 62 620 98 632 98" fill="none" stroke="#0284c7" stroke-width="2" marker-end="url(#m4-b)" />
  <text x="646" y="64" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0284c7">ω = const</text>
  <circle cx="555" cy="152" r="72" fill="none" stroke="#0f172a" stroke-width="2.5" />
  <line x1="555" y1="80" x2="555" y2="224" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3" />
  <line x1="483" y1="152" x2="627" y2="152" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4 3" />
  <line x1="555" y1="152" x2="500" y2="106" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 2" />
  <line x1="500" y1="80" x2="500" y2="106" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3 2" />
  <text x="494" y="96" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#dc2626">d</text>
  <rect x="491" y="97" width="18" height="18" rx="3" transform="rotate(-40 500 106)" fill="#fef3c7" stroke="#0f172a" stroke-width="1.8" />
  <text x="480" y="114" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">C</text>
  <line x1="494" y1="112" x2="465" y2="147" stroke="#0d9488" stroke-width="2.4" marker-end="url(#m4-t)" />
  <text x="457" y="148" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f766e">u</text>
  <path d="M 555 122 A 30 30 0 0 0 532 133" fill="none" stroke="#d97706" stroke-width="1.8" />
  <text x="541" y="118" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#b45309">φ</text>
  <text x="582" y="188" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0f172a">R</text>
  <text x="555" y="253" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="600" fill="#475569">d = R(1 - cos φ), góc(ω, u) = φ</text>
</svg>
<div class="figure-caption">

Hình 1.4: Hai mô hình Hợp chuyển động điểm và Gia tốc Coriolis chuẩn đề thi HCMUT (`1721` và `1722`)

</div>
</div>

---

### Bài mẫu 4.1 (Đề Thi Thật `1721` — Bài 1, Câu 1–2, trang 7 PDF)

**Đề bài nguyên văn:** Cho đĩa tròn bán kính $R$ quay đều quanh $O$ với vận tốc góc có độ lớn $\Omega$ (CCW). Điểm $E$ trượt theo phương bán kính từ tâm đĩa ra ngoài theo quy luật dịch chuyển $a = R\sin(\omega t)$, với $\omega$ là hằng số.
- **Câu 1:** Tính độ lớn vận tốc tuyệt đối của điểm $E$ (`a`).
- **Câu 2:** Độ lớn gia tốc tuyệt đối của điểm $E$ (`c`).

**Lời giải chi tiết bằng 2 phương hướng trực giao trên đĩa:**
Chọn 2 trục trực giao tại $E$ gắn theo đĩa: phương hướng tâm $\vec{e}_a$ (từ $O \to E$) và phương tiếp tuyến vòng tròn $\vec{e}_\perp$ (quay $90^\circ$ CCW so với $\vec{e}_a$).

1. **Vận tốc tuyệt đối (Câu 1 — Key `1a`):**
   - Vận tốc tương đối dọc bán kính: $v_r = \dot{a} = R\omega\cos(\omega t)$ (dọc $+\vec{e}_a$).
   - Vận tốc kéo theo (quay cùng đĩa ở khoảng cách $a$): $v_e = \Omega \cdot a = R\Omega\sin(\omega t)$ (dọc $+\vec{e}_\perp$).
   - Hai vectơ $\vec{v}_r \perp \vec{v}_e$ nên dùng Pytago:
     $$v_a = \sqrt{v_r^2 + v_e^2} = R\sqrt{\omega^2\cos^2(\omega t) + \Omega^2\sin^2(\omega t)}$$
     **Chốt Câu 1: chọn `a`.**

2. **Gia tốc tuyệt đối (Câu 2 — Key `2c`):**
   Kiểm tra đủ 5 thành phần gia tốc theo 2 phương $\vec{e}_a$ và $\vec{e}_\perp$:
   - $\vec{a}_e^t = \vec{0}$ (vì đề cho đĩa **quay đều**, $\Omega = \text{const}$).
   - $\vec{a}_e^n = -\Omega^2 a\,\vec{e}_a = -R\Omega^2\sin(\omega t)\,\vec{e}_a$ (hướng về tâm $O$).
   - $\vec{a}_r^n = \vec{0}$ (vì điểm $E$ trượt trên rãnh **bán kính thẳng**, bán kính cong $\rho \to \infty$).
   - $\vec{a}_r^t = \ddot{a}\,\vec{e}_a = -R\omega^2\sin(\omega t)\,\vec{e}_a$.
   - $\vec{a}_c = 2(\vec{\Omega} \times \vec{v}_r)$: quay $\vec{v}_r$ góc $90^\circ$ CCW được $+\vec{e}_\perp$, độ lớn $a_c = 2\Omega v_r = 2R\omega\Omega\cos(\omega t)$.
   - Cộng riêng theo từng phương vuông góc:
     $$\begin{aligned}
     a_{\text{dọc } OE} &= a_e^n + a_r^t = -R\left(\omega^2 + \Omega^2\right)\sin(\omega t) \\
     a_{\text{vuông góc } OE} &= a_c = 2R\omega\Omega\cos(\omega t)
     \end{aligned}$$
   - Bình phương cộng lại:
     $$a_a = R\sqrt{\left(\omega^4 + \Omega^4 + 2\omega^2\Omega^2\right)\sin^2(\omega t) + 4\omega^2\Omega^2\cos^2(\omega t)}$$
     **Chốt Câu 2: chọn `c`.**

---

### Bài mẫu 4.2 (Đề Thi Thật `1722` — Bài 1, Câu 1–2, trang 11 PDF)

**Đề bài nguyên văn:** Vành tròn bán kính $R$ có trục nằm ngang $AB$ (tiếp xúc tại đỉnh vành) quay đều quanh $AB$ với tốc độ góc $\omega$ không đổi. Con trượt $C$ di chuyển dọc theo vành với vận tốc tương đối có độ lớn $u$ không đổi so với vành. Góc $\varphi$ tính từ bán kính thẳng đứng hướng lên (điểm tiếp xúc trục $AB$) tới bán kính chứa $C$.
- **Câu 1:** Độ lớn vận tốc tuyệt đối của con trượt $C$ (`a`).
- **Câu 2:** Độ lớn gia tốc tuyệt đối của con trượt $C$ (`b`).

**Lời giải chi tiết bằng hệ trục 3D gắn liền mặt phẳng vành:**
Đặt tại tâm vành hệ trục trực giao: $\vec{e}_1$ dọc theo hướng ngang $BA$ (trục quay hướng sang trái hoặc phải; lấy $\vec{\omega}_e = \omega\vec{e}_1$), $\vec{e}_2$ thẳng đứng hướng lên trên trong mặt phẳng vành, và $\vec{e}_3$ vuông góc với mặt phẳng vành ($\vec{e}_1 \times \vec{e}_2 = \vec{e}_3$).

1. **Vận tốc tuyệt đối (Câu 1 — Key `1a`):**
   - Khoảng cách vuông góc từ con trượt $C$ tới trục quay ngang $AB$ là:
     $$d = R - R\cos\varphi = R(1 - \cos\varphi)$$
   - Suy ra $\vec{v}_e$ vuông góc với mặt phẳng vành (dọc $\vec{e}_3$), độ lớn $v_e = \omega d = R\omega(1 - \cos\varphi)$.
   - Còn $\vec{v}_r$ nằm **trong** mặt phẳng vành (tiếp tuyến vành), độ lớn $u$. Vì $\vec{v}_e \perp \vec{v}_r$:
     $$v_a = \sqrt{u^2 + R^2\omega^2(1 - \cos\varphi)^2}$$
     **Chốt Câu 1: chọn `a`.**

2. **Gia tốc tuyệt đối (Câu 2 — Key `2b`):**
   - Hướng bán kính từ tâm $O$ ra $C$ lệch trái so với $+\vec{e}_2$ góc $\varphi$: $\vec{e}_r = \sin\varphi\,\vec{e}_1 + \cos\varphi\,\vec{e}_2$ *(với $\vec{e}_1$ hướng sang trái theo chiều góc $\varphi$)*. Tiếp tuyến theo chiều tăng $\varphi$ là $\vec{e}_\varphi = \cos\varphi\,\vec{e}_1 - \sin\varphi\,\vec{e}_2$.
   - Tính 3 gia tốc:
     - **Kéo theo ($\vec{a}_e^t = \vec{0}$ do $\omega = \text{const}$):** $\vec{a}_e^n$ vuông góc trục $AB$, hướng thẳng đứng lên trên (về phía trục $AB$, dọc $+\vec{e}_2$) với độ lớn $\omega^2 d = R\omega^2(1 - \cos\varphi)$:
       $$\vec{a}_e = +R\omega^2(1 - \cos\varphi)\,\vec{e}_2$$
     - **Tương đối ($\vec{a}_r^t = \vec{0}$ do $u = \text{const}$):** $\vec{a}_r^n$ hướng từ $C$ về tâm vành $O$ ($-\vec{e}_r$), độ lớn $\frac{u^2}{R}$:
       $$\vec{a}_r = -\frac{u^2}{R}\sin\varphi\,\vec{e}_1 - \frac{u^2}{R}\cos\varphi\,\vec{e}_2$$
     - **Coriolis $\vec{a}_c = 2(\vec{\omega}_e \times \vec{v}_r)$:** Với $\vec{\omega}_e = \omega\vec{e}_1$ và $\vec{v}_r = u(\cos\varphi\,\vec{e}_1 - \sin\varphi\,\vec{e}_2)$:
       $$\vec{a}_c = 2\omega u \left(\vec{e}_1 \times \left(-\sin\varphi\,\vec{e}_2\right)\right) = -2u\omega\sin\varphi\,\vec{e}_3$$
   - Cộng cả 3 thành phần theo 3 trục trực giao $(\vec{e}_1, \vec{e}_2, \vec{e}_3)$:
     $$\begin{aligned}
     a_{a1} &= -\frac{u^2}{R}\sin\varphi \\
     a_{a2} &= R\omega^2(1 - \cos\varphi) - \frac{u^2}{R}\cos\varphi \\
     a_{a3} &= -2u\omega\sin\varphi
     \end{aligned}$$
   - Lấy căn tổng bình phương 3 thành phần:
     $$a_a = \sqrt{\left[\frac{u^2}{R}\cos\varphi - R\omega^2(1 - \cos\varphi)\right]^2 + \left(\frac{u^2}{R}\sin\varphi\right)^2 + 4u^2\omega^2\sin^2\varphi}$$
     **Chốt Câu 2: chọn `b`.**

---

### Bài tập rèn luyện Ngày 4 (Đề Giữa kỳ `1643` & `1744` — Có đáp số)

**Bài 4.1 (Đề `1643` Câu 8–9, Key `8d, 9b`):** Thanh $OA$ nằm ở góc $\varphi$ so với $+Ox$, quay **CCW** với $\omega, \varepsilon$ ($\varepsilon$ chiều CW). Chất điểm $M$ chạy dọc thanh $OA$ hướng ra xa $O$ với tốc độ $u$, khoảng cách $OM = s$. Tìm $\vec{v}_a^M$ và $\vec{a}_c^M$ theo $\vec{i}, \vec{j}$.

::: details Xem lời giải đối chiếu `8d, 9b`
- $\vec{v}_r = u\cos\varphi\,\vec{i} + u\sin\varphi\,\vec{j}$; quay $\overrightarrow{OM} = (s\cos\varphi, s\sin\varphi)$ góc $90^\circ$ CCW được $\vec{v}_e = -s\omega\sin\varphi\,\vec{i} + s\omega\cos\varphi\,\vec{j}$.
- Cộng lại: $\vec{v}_a^M = (u\cos\varphi - s\omega\sin\varphi)\vec{i} + (u\sin\varphi + s\omega\cos\varphi)\vec{j}$ (**Key `8d`**).
- $\vec{a}_c^M = 2\vec{\omega}_e \times \vec{v}_r$: quay $\vec{v}_r$ góc $90^\circ$ CCW nhân $2\omega$ $\implies$ $\vec{a}_c^M = -(2\omega u\sin\varphi)\vec{i} + (2\omega u\cos\varphi)\vec{j}$ (**Key `9b`**).
:::

**Bài 4.2 (Đề `1744` Câu 8–9, Key `8b, 9c`):** Với cùng thanh $OA$ ở Bài 4.1 (quay $\omega$ **CCW**, gia tốc góc $\varepsilon$ **CW**), tính vectơ gia tốc kéo theo $\vec{a}_e^M$ và gia tốc Coriolis $\vec{a}_c^M$.

::: details Xem lời giải đối chiếu `8b, 9c`
- $\vec{a}_e^n = -s\omega^2\cos\varphi\,\vec{i} - s\omega^2\sin\varphi\,\vec{j}$.
- $\vec{a}_e^t$: Vì $\vec{\varepsilon}$ quay **CW**, quay $(s\cos\varphi, s\sin\varphi)$ góc $90^\circ$ CW $(x,y)\mapsto(y,-x)$ rồi nhân $\varepsilon$:
  $$\vec{a}_e^t = s\varepsilon\sin\varphi\,\vec{i} - s\varepsilon\cos\varphi\,\vec{j}$$
- Cộng lại: $\vec{a}_e^M = (s\varepsilon\sin\varphi - s\omega^2\cos\varphi)\vec{i} - (s\varepsilon\cos\varphi + s\omega^2\sin\varphi)\vec{j}$ (**Key `8b`**).
- Gia tốc Coriolis giữ nguyên như Bài 4.1: $\vec{a}_c^M = -(2\omega u\sin\varphi)\vec{i} + (2\omega u\cos\varphi)\vec{j}$ (**Key `9c`**).
:::

---

## Ngày 5: Hệ Bánh Răng Hành Tinh, Vi Sai (Willis) & Mini-Test 10 Câu

### 1. Công thức Willis chuẩn & Quy tắc đếm dấu $(-1)^k$

Hệ bánh răng có cần quay $H$ gồm 2 loại: **Hệ hành tinh** (có ít nhất 1 bánh trung tâm đứng yên cố định) và **Hệ vi sai** (tất cả bánh trung tâm và cần $H$ đều quay). Để giải mọi bài hệ bánh răng trong 60 giây, ta dùng **phương pháp đảo chuyển động gắn lên cần $H$ (Công thức Willis)**:

$$\begin{aligned}
\frac{\omega_1 - \omega_H}{\omega_n - \omega_H} &= (-1)^k \frac{Z_{\text{bị dẫn}}}{Z_{\text{dẫn}}} \\
&= (-1)^k \prod_{\text{cặp}} \frac{r_{\text{bị dẫn}}}{r_{\text{dẫn}}}
\end{aligned}$$

**3 quy tắc sống còn khi bấm máy Công thức Willis:**
1. **Giữ đúng thứ tự "Đầu trên – Đuôi dưới" và "Bị dẫn trên – Dẫn dưới":** Nếu tử số là $\omega_1 - \omega_H$ thì ở vế phải, kích thước/số răng của bánh **$1$** nằm ở **mẫu**, còn của bánh **$n$** nằm ở **tử**:
   $$\frac{\omega_1 - \omega_H}{\omega_2 - \omega_H} = \pm \frac{Z_2}{Z_1} = \pm \frac{r_2}{r_1}$$
2. **Dấu $(-1)^k$:** Với mỗi cặp bánh răng ăn khớp trực tiếp:
   - **Ăn khớp TRONG** (bánh con lồng trong vành răng bao): cùng chiều quay tương đối $\implies$ **dấu $(+)$**.
   - **Ăn khớp NGOÀI** (hai bánh chạm mép ngoài vào nhau): ngược chiều quay tương đối $\implies$ **dấu $(-)$**.
   Khi nối một mạch từ bánh $1$ qua nhiều bánh trung gian tới bánh $n$, chỉ cần đếm số cặp ăn khớp **ngoài** $k$: $k$ chẵn lấy $+$, $k$ lẻ lấy $-$.
3. **Điều kiện hình học đồng trục $S - P - R$:** Khi cần $H$ mang bánh hành tinh $P$ quay đồng trục giữa bánh mặt trời $S$ và vành răng bao $R$, ta luôn có:
   $$r_R = r_S + 2r_P, \qquad Z_R = Z_S + 2Z_P$$

<div class="figure-container">
<svg viewBox="0 0 640 275" style="width: 100%; max-width: 600px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Hệ bánh răng hành tinh gồm bánh mặt trời S bánh hành tinh P vành răng R cố định và cần quay A">
  <defs>
    <marker id="m5-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0284c7" />
    </marker>
    <marker id="m5-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#dc2626" />
    </marker>
    <marker id="m5-t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0d9488" />
    </marker>
  </defs>
  <rect x="8" y="8" width="624" height="259" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="320" y="33" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13.5" font-weight="700" fill="#0f172a">Sơ đồ hệ bánh răng hành tinh chuẩn (Willis): Bánh S – Hành tinh P – Vành R – Cần A</text>
  <circle cx="172" cy="152" r="98" fill="#e2e8f0" stroke="#475569" stroke-width="1.4" stroke-dasharray="4 3" />
  <circle cx="172" cy="152" r="90" fill="#ffffff" stroke="#0f172a" stroke-width="2.5" stroke-dasharray="6 4" />
  <text x="64" y="114" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#334155">Vành R</text>
  <text x="64" y="130" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="600" fill="#475569">(cố định)</text>
  <circle cx="172" cy="152" r="45" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.4" stroke-dasharray="5 3" />
  <text x="172" y="182" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0369a1">Bánh S</text>
  <circle cx="172" cy="84.5" r="22.5" fill="#fef3c7" stroke="#d97706" stroke-width="2.4" stroke-dasharray="4 2" />
  <text x="184" y="88" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#b45309">P</text>
  <line x1="191" y1="73" x2="215" y2="57" stroke="#b45309" stroke-width="1.3" />
  <text x="220" y="61" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#b45309">Hành tinh P</text>
  <line x1="172" y1="152" x2="172" y2="84.5" stroke="#0f172a" stroke-width="5" stroke-linecap="round" />
  <circle cx="172" cy="152" r="5" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
  <circle cx="172" cy="84.5" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="2" />
  <line x1="170" y1="126" x2="112" y2="168" stroke="#334155" stroke-width="1.2" stroke-dasharray="3 2" />
  <rect x="20" y="156" width="88" height="24" rx="4" fill="#ffffff" stroke="#94a3b8" stroke-width="1.1" />
  <text x="64" y="172" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0f172a">Cần quay A</text>
  <circle cx="172" cy="107" r="4" fill="#dc2626" />
  <circle cx="172" cy="62" r="4" fill="#0d9488" />
  <rect x="308" y="54" width="308" height="194" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.4" />
  <text x="462" y="78" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">Quy tắc đếm dấu (-1)^k trong Willis</text>
  <circle cx="328" cy="105" r="5" fill="#dc2626" />
  <text x="341" y="109" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#b91c1c">Khớp S - P: Ăn khớp NGOÀI (dấu -)</text>
  <text x="341" y="127" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" fill="#334155">(ω_P - ω_A) / (ω_S - ω_A) = - r_S / r_P</text>
  <circle cx="328" cy="156" r="5" fill="#0d9488" />
  <text x="341" y="160" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0f766e">Khớp P - R: Ăn khớp TRONG (dấu +)</text>
  <text x="341" y="178" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" fill="#334155">(ω_P - ω_A) / (ω_R - ω_A) = + r_R / r_P</text>
  <rect x="322" y="196" width="280" height="40" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2" />
  <text x="462" y="213" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#0369a1">Nối thẳng S → R (qua P): k = 1 khớp ngoài</text>
  <text x="462" y="229" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="600" fill="#0f172a">(ω_S - ω_A) / (ω_R - ω_A) = - Z_R / Z_S</text>
</svg>
<div class="figure-caption">

Hình 1.5: Sơ đồ hệ bánh răng hành tinh S–P–R và quy tắc đếm cặp ăn khớp trong/ngoài theo Willis

</div>
</div>

---

### Ví dụ 5.1 & 5.2: Thực hành Hệ Hành Tinh và Vi Sai

::: tip Ví dụ 5.1 (Chủ đề 7 — Tài liệu luyện thi trang 95–96 PDF, đã kiểm toán lại chính xác)
**Đề bài:** Cho hệ thống bánh răng hành tinh như Hình 1.5. Vành răng ngoài $R$ được giữ cố định ($\omega_R = 0$). Bánh răng mặt trời $S$ có đường kính $d_S = 80\text{ mm}$ ($r_S = 40\text{ mm}$) quay với vận tốc góc $\omega_S = +6{,}3\text{ s}^{-1}$. Hai bánh hành tinh $P$ có đường kính $d_P = 40\text{ mm}$ ($r_P = 20\text{ mm}$) gắn trên cần quay $A$. Tính vận tốc góc của cần $A$ ($\omega_A$) và bánh hành tinh $P$ ($\omega_P$).

**Lời giải chuẩn bằng Công thức Willis:**
1. **Kiểm tra bán kính vành $R$:** $r_R = r_S + 2r_P = 40 + 2(20) = 80\text{ mm}$.
2. **Cặp ăn khớp trong $P - R$ (lấy $\omega_R = 0$):**
   $$\begin{aligned}
   \frac{\omega_P - \omega_A}{0 - \omega_A} &= +\frac{r_R}{r_P} = +\frac{80}{20} = 4 \\
   \implies \omega_P - \omega_A &= -4\omega_A \implies \omega_P = -3\omega_A \quad (1)
   \end{aligned}$$
3. **Cặp ăn khớp ngoài $P - S$:**
   $$\frac{\omega_P - \omega_A}{\omega_S - \omega_A} = -\frac{r_S}{r_P} = -\frac{40}{20} = -2 \quad (2)$$
4. **Thế $(1)$ và $\omega_S = 6{,}3\text{ s}^{-1}$ vào $(2)$:**
   $$\begin{aligned}
   \frac{-3\omega_A - \omega_A}{6{,}3 - \omega_A} &= -2 \iff -4\omega_A = -12{,}6 + 2\omega_A \\
   \iff 6\omega_A &= 12{,}6 \implies \omega_A = +2{,}1\text{ s}^{-1}
   \end{aligned}$$
   Thế vào $(1)$: $\omega_P = -3(2{,}1) = -6{,}3\text{ s}^{-1}$.

**Kết luận:** Cần $A$ quay **cùng chiều** bánh $S$ với tốc độ $2{,}1\text{ s}^{-1}$, bánh hành tinh $P$ quay **ngược chiều** bánh $S$ với tốc độ $6{,}3\text{ s}^{-1}$.
*(Lưu ý đính chính tài liệu tham khảo trang 96 PDF: Trong bài giải cũ ở trang 96 viết nhầm tỷ số $\frac{r_S}{r_P} = 0{,}5$ và đánh rơi dấu trừ khi giải phương trình (2) nên mới ra $2{,}7$ và $-0{,}9$; kết quả đúng toán học phải là $\omega_A = +2{,}1\text{ s}^{-1}$ và $\omega_P = -6{,}3\text{ s}^{-1}$ như trên!)*
:::

::: tip Ví dụ 5.2: Hệ bánh răng vi sai cho biết số răng ($Z_1, Z_2, Z_3$)
**Đề bài:** Trong hộp số vi sai cấu trúc $S(1) - P(2) - R(3)$ như Hình 1.5 có $Z_1 = 18$ răng, $Z_2 = 27$ răng, $Z_3 = 72$ răng (kiểm tra $18 + 2\cdot 27 = 72$). Biết bánh $1$ quay $\omega_1 = +20\text{ rad/s}$ (CCW) và cần $H$ quay $\omega_H = +5\text{ rad/s}$ (CCW). Tìm $\omega_3$ và $\omega_2$.

**Lời giải nhanh:**
- Áp dụng Willis nối thẳng $1 \to 3$ (qua $2$, có $k = 1$ cặp ăn khớp ngoài):
  $$\frac{\omega_1 - \omega_H}{\omega_3 - \omega_H} = -\frac{Z_3}{Z_1} \implies \frac{20 - 5}{\omega_3 - 5} = -\frac{72}{18} = -4$$
  $$\implies \omega_3 - 5 = -\frac{15}{4} = -3{,}75 \implies \omega_3 = +1{,}25\text{ rad/s} \quad (\text{CCW})$$
- Áp dụng Willis cho cặp ăn khớp trong $2 - 3$:
  $$\begin{aligned}
  \frac{\omega_2 - 5}{1{,}25 - 5} &= +\frac{Z_3}{Z_2} = \frac{72}{27} = \frac{8}{3} \\
  \implies \omega_2 - 5 &= \frac{8}{3}(-3{,}75) = -10 \implies \omega_2 = -5\text{ rad/s} \quad (\text{CW})
  \end{aligned}$$
:::

---

### 2. Mini-Test Chốt Chặng 1 (10 Câu Trắc Nghiệm Chuẩn AS1003 — Bấm Giờ 15 Phút)

Hãy đặt đồng hồ **15 phút**, tự giải toàn bộ 10 câu trên giấy nháp (đặc biệt cảnh giác với phương án **`e. Các đáp án còn lại đều sai`**) trước khi mở đáp án từng câu bên dưới!

**Câu 1.** Thanh $OA$ dài $L = 0{,}4\text{ m}$ nằm ở góc $\varphi = 60^\circ$ so với $+Ox$ (góc phần tư I, trong hệ thuận $\vec{k}$ hướng ra ngoài). Tại thời điểm xét, thanh quay **cùng chiều kim đồng hồ (CW)** với $\omega = 5\text{ rad/s}$ và đang **quay chậm dần** với $\lvert\varepsilon\rvert = 2\text{ rad/s}^2$. Vectơ gia tốc tiếp tuyến $\vec{a}_A^t$ của đầu mút $A$ ($\text{m/s}^2$) là:
- **a.** $\vec{a}_A^t = 0{,}693\vec{i} - 0{,}4\vec{j}$
- **b.** $\vec{a}_A^t = -0{,}4\vec{i} + 0{,}693\vec{j}$
- **c.** $\vec{a}_A^t = -0{,}693\vec{i} + 0{,}4\vec{j}$
- **d.** $\vec{a}_A^t = 0{,}4\vec{i} - 0{,}693\vec{j}$
- **e.** Các đáp án còn lại đều sai

::: details Xem đáp án & lời giải Câu 1
**Đáp án đúng: `c`**
- Tọa độ đầu $A$: $\vec{r}_A = (0{,}4\cos 60^\circ;\; 0{,}4\sin 60^\circ) = (0{,}2;\; 0{,}2\sqrt{3})\text{ m}$.
- Thanh quay CW ($\bar{\omega} = -5$) và **chậm dần** $\implies \vec{\varepsilon}$ ngược chiều $\vec{\omega}$, tức $\vec{\varepsilon}$ quay **CCW** ($\vec{\varepsilon} = +2\vec{k}$).
- Quay $\vec{r}_A$ góc $90^\circ$ CCW $(x, y) \mapsto (-y, x)$ rồi nhân $2$:
  $$\begin{aligned}
  \vec{a}_A^t &= 2\left(-0{,}2\sqrt{3}\,\vec{i} + 0{,}2\,\vec{j}\right) \\
  &= -0{,}4\sqrt{3}\,\vec{i} + 0{,}4\,\vec{j} \approx -0{,}693\vec{i} + 0{,}4\vec{j}\text{ m/s}^2
  \end{aligned}$$
*(Bẫy `a`: quên đổi dấu CW chậm dần thành CCW nên lấy $\bar{\varepsilon} = -2$.)*
:::

**Câu 2.** Con lăn tròn bán kính $R = 0{,}2\text{ m}$ lăn không trượt sang phải trên mặt nền ngang cố định với $\omega = 4\text{ rad/s}$ (CW) và $\varepsilon = 3\text{ rad/s}^2$ (CW). Chọn trục $Ox(\vec{i})$ sang phải, $Oy(\vec{j})$ thẳng đứng hướng lên. Vectơ gia tốc của điểm tiếp xúc $I$ thuộc con lăn ($\text{m/s}^2$) là:
- **a.** $\vec{a}_I = \vec{0}$
- **b.** $\vec{a}_I = 0{,}6\vec{i}$
- **c.** $\vec{a}_I = -3{,}2\vec{j}$
- **d.** $\vec{a}_I = 3{,}2\vec{j}$
- **e.** Các đáp án còn lại đều sai

::: details Xem đáp án & lời giải Câu 2
**Đáp án đúng: `d`**
- Tại điểm tiếp xúc $I$ thuộc con lăn lăn không trượt: $\vec{a}_O + \vec{a}_{IO}^t = \vec{0}$, chỉ còn gia tốc hướng tâm $\vec{a}_{IO}^n$ hướng từ $I$ lên tâm $O$ ($+\vec{j}$):
  $$\vec{a}_I = +\omega^2 R\,\vec{j} = 4^2 \cdot 0{,}2\,\vec{j} = 3{,}2\vec{j}\text{ m/s}^2$$
:::

**Câu 3.** Với con lăn ở Câu 2 ($R = 0{,}2\text{ m}$, $\omega = 4\text{ rad/s}$ CW), xét điểm $M$ nằm ở mép ngoài cùng bên phải (ngang hàng tâm $O$, $\overrightarrow{OM} = 0{,}2\vec{i}\text{ m}$). Độ lớn vận tốc $v_M$ và thành phần đứng $v_{My}$ là:
- **a.** $v_M = 0{,}8\text{ m/s};\; v_{My} = -0{,}8\text{ m/s}$
- **b.** $v_M \approx 1{,}131\text{ m/s};\; v_{My} = -0{,}8\text{ m/s}$
- **c.** $v_M \approx 1{,}131\text{ m/s};\; v_{My} = +0{,}8\text{ m/s}$
- **d.** $v_M = 1{,}6\text{ m/s};\; v_{My} = 0$
- **e.** Các đáp án còn lại đều sai

::: details Xem đáp án & lời giải Câu 3
**Đáp án đúng: `b`**
- $\vec{v}_O = \omega R\,\vec{i} = 0{,}8\vec{i}\text{ m/s}$.
- $\vec{v}_{MO} = \vec{\omega}\times\overrightarrow{OM} = (-4\vec{k})\times(0{,}2\vec{i}) = -0{,}8\vec{j}\text{ m/s}$.
- Suy ra $\vec{v}_M = 0{,}8\vec{i} - 0{,}8\vec{j}\text{ m/s} \implies v_M = 0{,}8\sqrt{2} \approx 1{,}131\text{ m/s}$ và $v_{My} = -0{,}8\text{ m/s}$.
:::

**Câu 4.** Thanh $AB$ dài $L = 1\text{ m}$ tựa đầu $A$ trên sàn ngang ($v_A = 2\text{ m/s}$ hướng sang phải ra xa góc tường $O$) và đầu $B$ trượt trên tường thẳng đứng bên trái. Tại thời điểm thanh hợp với sàn góc $\theta = 30^\circ$, tốc độ trượt xuống $v_B$ và tốc độ góc $\omega_{AB}$ bằng:
- **a.** $v_B = 2\sqrt{3}\text{ m/s};\; \omega_{AB} = 4\text{ rad/s}$
- **b.** $v_B = \frac{2}{\sqrt{3}}\text{ m/s};\; \omega_{AB} = 2\text{ rad/s}$
- **c.** $v_B = 2\sqrt{3}\text{ m/s};\; \omega_{AB} = 2\text{ rad/s}$
- **d.** $v_B = 4\text{ m/s};\; \omega_{AB} = 4\text{ rad/s}$
- **e.** Các đáp án còn lại đều sai

::: details Xem đáp án & lời giải Câu 4
**Đáp án đúng: `a`**
- Theo hình chiếu dọc $AB$: $v_A\cos 30^\circ = v_B\sin 30^\circ \implies v_B = 2\cot 30^\circ = 2\sqrt{3}\text{ m/s}$.
- Tâm tức thời $I$ là giao điểm đường đứng qua $A$ và đường ngang qua $B$: $IA = L\sin 30^\circ = 0{,}5\text{ m}$, nên $\omega_{AB} = \frac{v_A}{IA} = \frac{2}{0{,}5} = 4\text{ rad/s}$.
:::

**Câu 5.** Con lăn $O$ bán kính $R = 20\text{ cm}$ lăn không trượt trên nền ngang sang phải với $\omega = 1\text{ rad/s}$ (CW) và $\varepsilon = 0{,}5\text{ rad/s}^2$ (CW). Thanh $AB$ nối đỉnh cao nhất $B$ của con lăn ($OB$ thẳng đứng) với con chạy $A$ trượt trên cùng đường ngang tiếp xúc sàn $I$, góc $\widehat{BAI} = 45^\circ$. Tìm vectơ gia tốc con chạy $A$ ($\text{cm/s}^2$) (với $\vec{i}$ sang phải, $\vec{j}$ hướng lên):
- **a.** $\vec{a}_A = 20\vec{i}$
- **b.** $\vec{a}_A = 10\vec{i}$
- **c.** $\vec{a}_A = -20\vec{i}$
- **d.** $\vec{a}_A = 40\vec{i}$
- **e.** Các đáp án còn lại đều sai

::: details Xem đáp án & lời giải Câu 5
**Đáp án đúng: `e`**
- Vì $\vec{v}_A \parallel \vec{v}_B$ cùng nằm ngang, thanh $AB$ tịnh tiến tức thời ($\omega_{AB} = 0$).
- $BI = 2R = 40\text{ cm}$, $\alpha = 45^\circ \implies \overrightarrow{BA} = (-40;\; -40)\text{ cm}$.
- $\vec{a}_O = \varepsilon R\,\vec{i} = 10\vec{i}$; $\vec{a}_B = \vec{a}_O + \vec{a}_{BO}^t + \vec{a}_{BO}^n = (10 + 10)\vec{i} - 20\vec{j} = 20\vec{i} - 20\vec{j}\text{ cm/s}^2$.
- Viết phương trình gia tốc của $A$ lấy $B$ làm cực:
  $$\begin{aligned}
  \vec{a}_A &= \vec{a}_B + \bar{\varepsilon}_{AB}\vec{k}\times(-40\vec{i} - 40\vec{j}) \\
  &= (20 + 40\bar{\varepsilon}_{AB})\vec{i} + (-20 - 40\bar{\varepsilon}_{AB})\vec{j}
  \end{aligned}$$
- Chiếu $Oy$ ($a_{Ay} = 0$): $-20 - 40\bar{\varepsilon}_{AB} = 0 \implies \bar{\varepsilon}_{AB} = -0{,}5\text{ rad/s}^2$.
- Chiếu $Ox$: $a_{Ax} = 20 + 40(-0{,}5) = 0 \implies \vec{a}_A = \vec{0}$! Không có trong `a..d` nên phải chọn **`e`**.
:::

**Câu 6.** Cơ cấu hình bình hành $O_1ABO_2$ ($O_1O_2 = AB$ nằm ngang cố định, hai tay quay $O_1A = O_2B = 0{,}5\text{ m}$ song song nhau quay đều cùng tốc độ góc $\omega_0 = 4\text{ rad/s}$). Trên thanh ngang $AB$ có con chạy $M$ trượt dọc theo $AB$ với tốc độ tương đối không đổi $v_r = 3\text{ m/s}$. Độ lớn gia tốc Coriolis $a_c$ và gia tốc tuyệt đối $a_a$ của $M$ là:
- **a.** $a_c = 24\text{ m/s}^2;\; a_a = 25{,}3\text{ m/s}^2$
- **b.** $a_c = 0;\; a_a = 8\text{ m/s}^2$
- **c.** $a_c = 12\text{ m/s}^2;\; a_a = 14{,}4\text{ m/s}^2$
- **d.** $a_c = 0;\; a_a = 0$
- **e.** Các đáp án còn lại đều sai

::: details Xem đáp án & lời giải Câu 6
**Đáp án đúng: `b`**
- **Bẫy kinh điển:** Thanh $AB$ luôn nằm ngang (chuyển động **tịnh tiến cong**), không hề quay quanh chính nó, nên $\vec{\omega}_e = \vec{\omega}_{AB} = \vec{0} \implies a_c = 0$!
- Mọi điểm trên $AB$ có cùng gia tốc kéo theo bằng gia tốc hướng tâm của $A$: $a_e = \omega_0^2 \cdot O_1A = 4^2 \cdot 0{,}5 = 8\text{ m/s}^2$. Do $v_r = \text{const}$ dọc đường thẳng $AB$, $a_r = 0$, suy ra $a_a = a_e = 8\text{ m/s}^2$.
:::

**Câu 7.** Đĩa tròn nằm ngang quay đều quanh tâm $O$ theo chiều **CW** ($\vec{\omega}_e = -3\vec{k}\text{ rad/s}$). Con kiến $M$ bò dọc bán kính từ tâm $O$ ra ngoài theo $+Ox(\vec{i})$ tại $OM = 0{,}4\text{ m}$ với $v_r = 2\text{ m/s}$ và chạy nhanh dần $a_r^t = 1{,}4\text{ m/s}^2$ (dọc $+\vec{i}$). Vectơ gia tốc tuyệt đối $\vec{a}_a$ của con kiến ($\text{m/s}^2$) là:
- **a.** $\vec{a}_a = -2{,}2\vec{i} + 12\vec{j}$
- **b.** $\vec{a}_a = 5{,}0\vec{i} - 12\vec{j}$
- **c.** $\vec{a}_a = -2{,}2\vec{i} - 12\vec{j}$
- **d.** $\vec{a}_a = -2{,}2\vec{i} - 6\vec{j}$
- **e.** Các đáp án còn lại đều sai

::: details Xem đáp án & lời giải Câu 7
**Đáp án đúng: `c`**
- $\vec{a}_e^n = -\omega_e^2 r\,\vec{i} = -9(0{,}4)\vec{i} = -3{,}6\vec{i}$; $\vec{a}_e^t = \vec{0}$; $\vec{a}_r = +1{,}4\vec{i}$.
- $\vec{a}_c = 2(\vec{\omega}_e \times \vec{v}_r) = 2(-3\vec{k} \times 2\vec{i}) = -12\vec{j}$ (quay $\vec{v}_r$ góc $90^\circ$ cùng KĐH).
- Cộng lại: $\vec{a}_a = (-3{,}6 + 1{,}4)\vec{i} - 12\vec{j} = -2{,}2\vec{i} - 12\vec{j}\text{ m/s}^2$.
:::

**Câu 8.** Một khung dây tròn bán kính $R = 0{,}5\text{ m}$ quay đều với vận tốc góc $\omega = 2\text{ rad/s}$ quanh đường kính thẳng đứng cố định. Con trượt $M$ chạy dọc khung tròn với vận tốc tương đối không đổi $u = 1\text{ m/s}$. Tại vị trí bán kính $OM$ hợp với trục đứng góc $\varphi = 30^\circ$, độ lớn gia tốc Coriolis $a_c$ ($\text{m/s}^2$) là:
- **a.** $a_c = 4$
- **b.** $a_c = 2$
- **c.** $a_c = 2\sqrt{3}$
- **d.** $a_c = \sqrt{3}$
- **e.** Các đáp án còn lại đều sai

::: details Xem đáp án & lời giải Câu 8
**Đáp án đúng: `c`**
- Tiếp tuyến tại vị trí góc $\varphi = 30^\circ$ hợp với trục thẳng đứng ($\vec{\omega}_e$) một góc $90^\circ - 30^\circ = 60^\circ$.
- Vậy $a_c = 2\omega u \sin 60^\circ = 2 \cdot 2 \cdot 1 \cdot \frac{\sqrt{3}}{2} = 2\sqrt{3}\text{ m/s}^2$.
:::

**Câu 9.** Hệ bánh răng hành tinh gồm bánh mặt trời $1$ ($Z_1 = 20$ răng) quay $\omega_1 = +10\text{ rad/s}$ (CCW), bánh hành tinh $2$ ($Z_2 = 30$ răng) ăn khớp **ngoài** với bánh $1$ và ăn khớp **trong** với vành răng $3$ ($Z_3 = 80$ răng) cố định ($\omega_3 = 0$). Vận tốc góc cần $H$ ($\omega_H$) và bánh $2$ ($\omega_2$) bằng:
- **a.** $\omega_H = +2\text{ rad/s};\; \omega_2 = -\frac{10}{3}\text{ rad/s}$
- **b.** $\omega_H = -2\text{ rad/s};\; \omega_2 = +\frac{10}{3}\text{ rad/s}$
- **c.** $\omega_H = +2{,}5\text{ rad/s};\; \omega_2 = -\frac{20}{3}\text{ rad/s}$
- **d.** $\omega_H = +\frac{10}{3}\text{ rad/s};\; \omega_2 = -2\text{ rad/s}$
- **e.** Các đáp án còn lại đều sai

::: details Xem đáp án & lời giải Câu 9
**Đáp án đúng: `a`**
- Willis $(1, 3)$ qua $2$ ($k = 1$ cặp ngoài): $\frac{10 - \omega_H}{0 - \omega_H} = -\frac{80}{20} = -4 \implies 10 - \omega_H = 4\omega_H \implies \omega_H = +2\text{ rad/s}$.
- Willis $(2, 3)$ (ăn khớp trong $+$): $\frac{\omega_2 - 2}{0 - 2} = +\frac{80}{30} = \frac{8}{3} \implies \omega_2 = 2 - \frac{16}{3} = -\frac{10}{3}\text{ rad/s}$.
:::

**Câu 10.** Trong hộp số vi sai tương tự Câu 9 có $Z_1 = 24$, $Z_2 = 18$, $Z_3 = 60$. Biết bánh $1$ quay $\omega_1 = +12\text{ rad/s}$ (CCW) và vành răng $3$ quay ngược lại $\omega_3 = -6\text{ rad/s}$ (CW). Vận tốc góc $\omega_H$ của cần $H$ ($\text{rad/s}$) là:
- **a.** $\omega_H \approx +0{,}86$
- **b.** $\omega_H \approx -0{,}86$
- **c.** $\omega_H = +2{,}00$
- **d.** $\omega_H = -1{,}20$
- **e.** Các đáp án còn lại đều sai

::: details Xem đáp án & lời giải Câu 10
**Đáp án đúng: `b`**
- Willis $(1, 3)$ qua $2$ ($k = 1$ cặp ngoài):
  $$\begin{aligned}
  \frac{12 - \omega_H}{-6 - \omega_H} &= -\frac{60}{24} = -2{,}5 \implies 12 - \omega_H = 15 + 2{,}5\omega_H \\
  \implies 3{,}5\omega_H &= -3 \implies \omega_H = -\frac{6}{7} \approx -0{,}86\text{ rad/s}
  \end{aligned}$$
:::

---

::: tip Tổng kết Chặng 1 (Mốc 0 → 3,0 Điểm Khối A — Chương 9 & 10)
Nếu bạn làm đúng từ **`8/10` câu trở lên** trong Mini-Test 15 phút trên, bạn đã xóa mù hoàn toàn phần vector – con lăn và làm chủ chắc chắn Khối A (`Ch.9–10`) của đề thi Cuối kỳ AS1003. Hãy bước tiếp ngay sang **[Chặng 2 (Ngày 6 – Ngày 10): Ch.11, 12.1 & 13 — Khối Tâm, Steiner & D'Alembert](/on-thi/chang-2-dong-hoc)** hoặc xem thêm đề thi các năm tại **[Ngân Hàng Đề Thi Thật HCMUT](/on-thi/de-thi-that-hcmut)**.
:::
