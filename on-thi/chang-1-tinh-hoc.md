---
title: "Chặng 1 (Ngày 1 – Ngày 5): Xóa Mù Tay Ngang & Chương 9–10 (AS1003)"
layout: doc
---

# Chặng 1 (Ngày 1 – Ngày 5): Xóa Mù Cho Người Tay Ngang & Làm Chủ Chương 9–10

Chặng 1 được thiết kế dành riêng cho sinh viên **mất gốc hoặc bắt đầu từ số `0`** ôn thi Cuối kỳ môn **`DCMH.AS1003` (Cơ Lý Thuyết — ĐH Bách Khoa TPHCM)** với mục tiêu tổng trên **`8,0` điểm**. Thay vì học lan man toàn bộ phần Giữa kỳ, bạn chỉ cần **2 ngày đầu để "xóa mù" đúng các công cụ vectơ – chiếu góc – con lăn**, rồi dùng **3 ngày tiếp theo ăn trọn Khối A (Chương 9–10)** gồm: **Song phẳng 3 khâu**, **Hợp chuyển động Coriolis**, và **Hệ bánh răng (cố định, hành tinh, vi sai — Willis)** (chiếm `2` đến `4` câu trong đề thi Cuối kỳ `10–13` câu).

::: info Lộ trình Chặng 1 (5 ngày — 90 đến 120 phút/ngày)
| Ngày | Nội dung trọng tâm | Đề thi thật thực hành | Giáo trình gốc đối chiếu |
| :--- | :--- | :--- | :--- |
| **Ngày 1** | **Từ điển cứu hộ 30 phút:** $(\vec{i},\vec{j},\vec{k})$, dấu CCW/CW, kề $\cos$ đối $\sin$, quay $90^\circ$ & lực cơ bản | Chuẩn hóa mọi dấu vectơ đề thi | [Tĩnh học C1](/tinh-hoc/chuong-1) · [C3](/tinh-hoc/chuong-3) |
| **Ngày 2** | **Tâm vận tốc tức thời ($I$) & Con lăn lăn không trượt:** $v_O = \omega R$ và bẫy $a_I^{\text{đĩa}} \neq 0$ | Nền tảng cứng Chương 10 | [Động học C4](/dong-hoc/chuong-4) |
| **Ngày 3** | **Song phẳng 3 khâu Ch.10:** Phương pháp hình chiếu & tâm tức thời $I$ | Đề `1821` (C1–4), `0001/2016` (C7–8), `1721`/`1722` (C6–7), `1643`/`1744` | [Động học C4](/dong-hoc/chuong-4) · [BT C3](/bai-tap/dong-hoc/chuong-3) |
| **Ngày 4** | **Chương 9 Coriolis:** Phân biệt $(e, r, a)$, $\vec{a}_c = 2(\vec{\omega}_e \times \vec{v}_r)$ & giải ngược rãnh trượt | Đề `1721` (C1–2), `1722` (C1–2), `1643`/`1744` (C8–9), Chủ đề 5 | [Động học C3](/dong-hoc/chuong-3) · [BT C5](/bai-tap/dong-hoc/chuong-5) |
| **Ngày 5** | **Hệ bánh răng (cố định, hành tinh, vi sai — Willis) & Mini-Test 10 câu bấm giờ 15 phút** | Chủ đề 7 & Đề chuẩn AS1003 có bẫy `e` | [Động học C4](/dong-hoc/chuong-4) · [BT C6](/bai-tap/dong-hoc/chuong-6) |
:::

> Điều hướng nhanh: [Tổng quan lộ trình 20 ngày (AS1003)](/on-thi/) · [Tiếp sang Chặng 2: Ch.11–13 D'Alembert](/on-thi/chang-2-dong-hoc) · [Ngân hàng Đề thi thật HCMUT](/on-thi/de-thi-that-hcmut)

---

## Ngày 1: Từ Điển Cứu Hộ Cấp Tốc (30 Phút Xóa Mù Cho Người Mất Gốc)

Nếu bạn quên sạch phép chiếu lượng giác, tích có hướng hay quy ước dấu quay từ đầu học kỳ, hãy học thuộc đúng **4 quy tắc nền tảng** dưới đây trong 30 phút. Mọi câu trắc nghiệm AS1003 về vận tốc $\vec{v}$, gia tốc $\vec{a}$ hay gia tốc góc $\vec{\varepsilon}$ đều chấm điểm dựa trên các dấu này.

### 1. Hệ trục thuận $(\vec{i}, \vec{j}, \vec{k})$ & Quy ước dấu quay CCW / CW

Trên trang giấy (hoặc màn hình), ta dùng hệ trục tọa độ Đề-các thuận $Oxyz$ gồm:
- Trục $Ox$ gắn vectơ đơn vị $\vec{i}$ (thường hướng **sang phải**).
- Trục $Oy$ gắn vectơ đơn vị $\vec{j}$ (thường hướng **lên trên**).
- Trục $Oz$ gắn vectơ đơn vị $\vec{k}$ vuông góc với mặt giấy, **hướng thẳng ra ngoài về phía mắt bạn** (ký hiệu bằng vòng tròn có dấu chấm giữa $\odot$).

::: tip Quy tắc bàn tay phải bắt buộc nhớ (Chuẩn mọi đề AS1003)
Xòe bàn tay phải, đặt các ngón tay uốn theo chiều quay của vật trong mặt phẳng $Oxy$:
- **Quay ngược chiều kim đồng hồ (CCW):** Ngón cái chỉ **ra ngoài** (cùng chiều $+\vec{k}$) $\implies$ mang **dấu DƯƠNG $(+)$**, tức $\vec{\omega} = +\omega\vec{k}$.
- **Quay cùng chiều kim đồng hồ (CW):** Ngón cái chỉ **vào trong** (ngược chiều $+\vec{k}$) $\implies$ mang **dấu ÂM $(-)$**, tức $\vec{\omega} = -\omega\vec{k}$.
:::

**Quy ước ký hiệu chữ có gạch trên đầu ($\bar{\omega}, \bar{\varepsilon}$) và chữ không gạch ($\omega, \varepsilon$):**
- **Chữ có gạch trên đầu ($\bar{\omega}, \bar{\varepsilon}$):** Là **giá trị đại số có dấu** chiếu lên trục $+\vec{k}$ (`+` khi quay **CCW**, `-` khi quay **CW**). Ví dụ: vật quay CW với tốc độ $4\text{ rad/s}$ thì độ lớn không âm là $\omega = 4\text{ rad/s}$, còn giá trị đại số là $\bar{\omega} = -4\text{ rad/s}$ (viết vectơ: $\vec{\omega} = \bar{\omega}\vec{k} = -4\vec{k}$).
- **Chữ không gạch ($\omega, \varepsilon$):** Là **độ lớn không âm** ($\omega = |\bar{\omega}| \ge 0$, $\varepsilon = |\bar{\varepsilon}| \ge 0$). *(Lưu ý: Trong một số đề thi gốc phần Hệ bánh răng hoặc khi đề đã quy ước chiều quay dương chung, đề có thể in gọn $\omega_1, \omega_H$ không gạch đầu nhưng khi thay số vẫn phải gắn dấu $+/-$ tương ứng như $\bar{\omega}$.)*

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
2. **Lực đàn hồi lò xo:** Độ lớn $F_{\text{đh}} = k\Delta l$, với $k\text{ (N/m)}$ là độ cứng và $\Delta l = \lvert l - l_0 \rvert\text{ (m)}$ là độ biến dạng (kéo dãn hoặc nén), luôn hướng về vị trí tự nhiên không biến dạng.
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
Vì thanh $AB$ cứng không co dãn, hình chiếu vận tốc hai đầu mút lên đường thẳng $AB$ luôn bằng nhau:

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
- **Câu 2:** Vectơ gia tốc dài điểm $B$ ($\text{cm/s}^2$) (`b`: $\vec{a}_B = 12\vec{i} - 7{,}5\vec{j}$).
- **Câu 3:** Vectơ gia tốc con chạy $A$ ($\text{cm/s}^2$) (`c`: $\vec{a}_A = 7{,}67\vec{i}$).
- **Câu 4:** Vectơ gia tốc góc thanh $AB$ ($\text{rad/s}^2$) (`b`: $\vec{\varepsilon}_{AB} = -0{,}07\vec{k}$).

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

3. **Giải Câu 2 (`b`) — Tìm vectơ gia tốc $\vec{a}_B$ ($\text{cm/s}^2$):**
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

### 3. Kỹ thuật giải ngược tìm $\bar{\omega}_e, \bar{\varepsilon}_e$ cho bài toán rãnh trượt (Cơ cấu culit)

Ở hai bài mẫu `4.1` và `4.2`, đề cho sẵn chuyển động theo ($\omega_e$) và chuyển động tương đối ($v_r$) rồi bắt tìm $\vec{v}_a, \vec{a}_a$ (**bài toán thuận**). Trong đề cương `AS1003` (Mục `9.3`) còn một dạng kinh điển khác là **bài toán giải ngược**: cho khâu dẫn $OA$ mang chốt $A$ trượt dọc rãnh thẳng của cần lắc $BC$ quay quanh $C$, bắt tìm vận tốc góc $\bar{\omega}_{BC}$ và gia tốc góc $\bar{\varepsilon}_{BC}$ của khâu mang rãnh $BC$.

**Bí quyết cho người tay ngang — Chọn $(M, e)$ đúng và Chiếu vuông góc rãnh ($\perp BC$):**

1. **Chọn đúng điểm & hệ quy chiếu:**
   - **Điểm khảo sát $M$:** Luôn chọn **tâm chốt $A$** (thuộc tay quay dẫn $OA$ quay quanh $O$). Nhờ vậy, chuyển động **tuyệt đối $(a)$** của $A$ chỉ là chuyển động tròn quanh $O$, ta biết trọn vẹn $\vec{v}_a$ và $\vec{a}_a = \vec{a}_a^n + \vec{a}_a^t$.
   - **Hệ quy chiếu động $(e)$:** Gắn liền với **thanh mang rãnh $BC$** (quay quanh $C$). Nhờ rãnh $BC$ thẳng ($\rho = \infty \implies \vec{a}_r^n = \vec{0}$), chuyển động **tương đối $(r)$** của chốt $A$ chỉ chạy thẳng **dọc theo rãnh $BC$**.
2. **Tại sao phải chiếu lên phương VUÔNG GÓC với rãnh ($\perp BC$)?**
   - Trong phương trình vận tốc $\vec{v}_a = \vec{v}_e + \vec{v}_r$: ta chưa biết cả $v_r$ lẫn $\omega_e$. Vì $\vec{v}_r$ chạy **dọc** theo rãnh $BC$, nên khi chiếu lên phương **vuông góc rãnh ($\perp BC$)**, hình chiếu của $\vec{v}_r$ **tự động bằng $0$**! Trong khi đó $\vec{v}_e \perp BC$ nằm nguyên trên trục chiếu này:
     $$\text{hch}_{\perp BC}\!\left(\vec{v}_a\right) = \text{hch}_{\perp BC}\!\left(\vec{v}_e\right) \implies \text{tính ngay } \bar{\omega}_e = \bar{\omega}_{BC}$$
     Sau đó chiếu lên phương **dọc rãnh ($\parallel BC$)** (lúc này $\vec{v}_e$ bằng $0$) để lấy tiếp **$v_r$** (chuẩn bị cho $\vec{a}_c$).
   - Trong phương trình gia tốc $\vec{a}_a^n + \vec{a}_a^t = \vec{a}_e^n + \vec{a}_e^t + \vec{a}_r + \vec{a}_c$: lúc này ta chưa biết cả $a_r$ lẫn $\bar{\varepsilon}_e$! Cũng nhờ $\vec{a}_r$ (dọc rãnh) và $\vec{a}_e^n$ (hướng dọc $AC$ về tâm $C$) **cùng nằm dọc đường thẳng rãnh $BC$**, nên khi chiếu lên phương **vuông góc rãnh ($\perp BC$)**, **CẢ $\vec{a}_r$ LẪN $\vec{a}_e^n$ ĐỀU TRIỆT TIÊU BẰNG $0$**! Chỉ còn:
     $$\text{hch}_{\perp BC}\!\left(\vec{a}_a\right) = \text{hch}_{\perp BC}\!\left(\vec{a}_e^t\right) + \text{hch}_{\perp BC}\!\left(\vec{a}_c\right)$$
     Từ phương trình 1 ẩn duy nhất này, ta giải thẳng ra **$\bar{\varepsilon}_e = \bar{\varepsilon}_{BC}$** mà không cần tính $a_r$ hay $a_e^n$!

::: warning Cảnh báo sống còn về chiều $\vec{a}_c$ khi chiếu giải ngược
Vì $\vec{a}_c = 2(\vec{\omega}_e \times \vec{v}_r)$ cũng nằm trọn trên phương $\perp BC$, chỉ cần vẽ nhầm chiều $\vec{a}_c$ ngược $180^\circ$ là kết quả $\bar{\varepsilon}_e$ sẽ sai hoàn toàn! Luôn kiểm tra đủ 2 bước: **(1)** xác định đúng chiều mũi tên $\vec{v}_r$ từ phép chiếu vận tốc; **(2)** **quay $\vec{v}_r$ đúng $90^\circ$ theo chiều quay của $\vec{\omega}_e$** để được $\vec{a}_c$.
:::

### Bài mẫu 4.3 (Chủ đề 5 — Tài liệu luyện thi trang 90–91 PDF, đã kiểm toán lại chính xác)

**Đề bài nguyên văn:** Thanh $OA$ ($OA = 200\text{ mm} = 0{,}2\text{ m}$) quay đều **cùng chiều kim đồng hồ (CW)** quanh trục cố định $O$ với vận tốc góc $\omega_1 = 6{,}3\text{ rad/s}$ ($\text{tức } 6{,}3\text{ s}^{-1}$). Chốt $A$ gắn trên đầu thanh $OA$ trượt dọc theo rãnh thẳng của thanh $BC$ quay quanh trục cố định $C$ nằm trên cùng đường ngang bên phải $O$. Theo cấu tạo cơ cấu, tại mọi vị trí góc ngoài tại $O$ (giữa $OA$ và tia kéo dài sang trái của $CO$) là $2\theta$, góc trong tại $C$ là $\widehat{OCA} = \theta$. Tại vị trí $\theta = 30^\circ$, hãy tính vận tốc góc và gia tốc góc của thanh $BC$.

<div class="figure-container">
<svg viewBox="0 0 740 285" style="width: 100%; max-width: 700px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Cơ cấu culit tam giác cân OAC và phép chiếu tìm vận tốc góc gia tốc góc thanh BC trong Chủ đề 5">
  <defs>
    <marker id="m4b-k" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0f172a" />
    </marker>
    <marker id="m4b-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0284c7" />
    </marker>
    <marker id="m4b-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#dc2626" />
    </marker>
    <marker id="m4b-t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0d9488" />
    </marker>
  </defs>
  <rect x="10" y="10" width="350" height="265" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="185" y="34" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">1. Cơ cấu tam giác cân OAC (θ = 30°)</text>
  <line x1="45" y1="230" x2="325" y2="230" stroke="#64748b" stroke-width="1.6" stroke-dasharray="5 3" />
  <line x1="66" y1="107" x2="280" y2="230" stroke="#334155" stroke-width="11" stroke-linecap="round" />
  <line x1="66" y1="107" x2="280" y2="230" stroke="#ffffff" stroke-width="5" stroke-linecap="round" />
  <line x1="170" y1="230" x2="115" y2="135" stroke="#0f172a" stroke-width="3.2" stroke-linecap="round" />
  <polygon points="170,230 160,247 180,247" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5" />
  <polygon points="280,230 270,247 290,247" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5" />
  <circle cx="170" cy="230" r="4" fill="#0f172a" />
  <circle cx="280" cy="230" r="4" fill="#0f172a" />
  <circle cx="115" cy="135" r="5" fill="#dc2626" stroke="#0f172a" stroke-width="1.8" />
  <text x="185" y="263" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="600" fill="#475569">OA = OC = 200 mm, ω₁ = 6,3 rad/s (CW)</text>
  <text x="185" y="246" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">O</text>
  <text x="294" y="224" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">C</text>
  <text x="103" y="148" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">A</text>
  <text x="58" y="100" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">B</text>
  <path d="M 136 230 A 34 34 0 0 1 153 200.5" fill="none" stroke="#d97706" stroke-width="1.8" />
  <text x="128" y="216" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#b45309">2θ = 60°</text>
  <path d="M 228 230 A 52 52 0 0 1 235 204" fill="none" stroke="#d97706" stroke-width="1.8" />
  <text x="223" y="213" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#b45309">θ = 30°</text>
  <path d="M 139 176 A 62 62 0 0 1 192 172" fill="none" stroke="#0284c7" stroke-width="2" marker-end="url(#m4b-b)" />
  <text x="198" y="168" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0284c7">ω₁ (CW)</text>
  <line x1="115" y1="135" x2="146" y2="81" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="3 2" marker-end="url(#m4b-b)" />
  <text x="152" y="82" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#0369a1">e⊥ (⊥ BC)</text>

  <rect x="380" y="10" width="350" height="265" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="555" y="34" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">2. Chiếu tại A: v_a = v_e + v_r &amp; Hướng đúng a_c</text>
  <line x1="445" y1="95" x2="660" y2="219" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 3" />
  <text x="438" y="92" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#475569">B</text>
  <text x="668" y="224" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#475569">C</text>
  <line x1="500" y1="230" x2="594" y2="68" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="3 3" />
  <line x1="545" y1="153" x2="588" y2="78" stroke="#0284c7" stroke-width="2.4" marker-end="url(#m4b-b)" />
  <text x="580" y="70" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0284c7">v_e = 1,09</text>
  <line x1="545" y1="153" x2="588" y2="178" stroke="#0d9488" stroke-width="2.4" marker-end="url(#m4b-t)" />
  <text x="598" y="177" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0f766e">v_r = 0,63</text>
  <line x1="545" y1="153" x2="632" y2="103" stroke="#0f172a" stroke-width="2.4" marker-end="url(#m4b-k)" />
  <text x="640" y="106" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0f172a">v_a = 1,26</text>
  <line x1="588" y1="78" x2="632" y2="103" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3 2" />
  <line x1="588" y1="178" x2="632" y2="103" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3 2" />
  <line x1="545" y1="153" x2="585" y2="222" stroke="#d97706" stroke-width="2.2" marker-end="url(#m4b-k)" />
  <text x="592" y="226" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#b45309">a_a^n = 7,94</text>
  <line x1="585" y1="222" x2="525" y2="188" stroke="#d97706" stroke-width="1.2" stroke-dasharray="3 2" />
  <line x1="545" y1="153" x2="508" y2="217" stroke="#dc2626" stroke-width="2.5" marker-end="url(#m4b-r)" />
  <text x="498" y="218" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#dc2626">a_c = 3,97</text>
  <text x="498" y="233" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="10.5" font-weight="600" fill="#dc2626">(quay v_r 90° CW)</text>
  <circle cx="545" cy="153" r="4.5" fill="#0f172a" />
  <text x="534" y="148" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">A</text>
  <text x="555" y="263" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="600" fill="#475569">a_{a,⊥} = a_{c,⊥} = −3,97 m/s² ⇒ ε_BC = 0</text>
</svg>
<div class="figure-caption">

Hình 1.5: Giải ngược cơ cấu tam giác cân OAC (Chủ đề 5) bằng phép chiếu vuông góc rãnh BC và chiều đúng của gia tốc Coriolis

</div>
</div>

**Lời giải chi tiết theo 3 bước chiếu vuông góc rãnh $BC$:**

1. **Bước 0 — Nhận diện tam giác cân $OAC$ và độ dài $AC$:**
   - Trong $\triangle OAC$, góc ngoài tại đỉnh $O$ bằng tổng hai góc trong không kề nó: $2\theta = \widehat{OCA} + \widehat{OAC} = \theta + \widehat{OAC} \implies \widehat{OAC} = \theta$.
   - Vậy $\triangle OAC$ luôn **cân tại $O$** với $OC = OA = 200\text{ mm} = 0{,}2\text{ m}$ ở mọi thời điểm!
   - Tại $\theta = 30^\circ$: $\widehat{AOC} = 180^\circ - 2\theta = 120^\circ$, nên chiều dài từ chốt quay $C$ tới điểm $A$ là:
     $$AC = 2 \cdot OA\cos 30^\circ = 2 \cdot 0{,}2 \cdot \frac{\sqrt{3}}{2} = 0{,}2\sqrt{3} \approx 0{,}3464\text{ m}$$

2. **Bước 1 — Giải vận tốc (chiếu $\perp BC$ tìm $\bar{\omega}_{BC}$, rồi chiếu $\parallel BC$ tìm $\vec{v}_r$):**
   - Đặt hệ trục địa phương tại $A$: trục $\vec{e}_\parallel$ dọc rãnh từ $B$ hướng xuống $C$ (góc $-30^\circ$ so với $+Ox$); trục $\vec{e}_\perp$ vuông góc rãnh hướng lên-phải (góc $+60^\circ$ so với $+Ox$, tức chiều quay **CW** của thanh $BC$).
   - Thanh $OA$ (góc $+120^\circ$ so với $+Ox$) quay CW $\implies$ vận tốc tuyệt đối $\vec{v}_a$ của $A$ hướng lên-phải ở góc $+30^\circ$ (lệch góc $30^\circ$ so với $\vec{e}_\perp$), có độ lớn:
     $$v_a = OA \cdot \omega_1 = 0{,}2 \cdot 6{,}3 = 1{,}26\text{ m/s}$$
   - **Chiếu $\vec{v}_a = \vec{v}_e + \vec{v}_r$ lên $\vec{e}_\perp$ (khử $v_r$):**
     $$v_e = v_a\cos 30^\circ = 1{,}26 \cdot \frac{\sqrt{3}}{2} = 0{,}63\sqrt{3} \approx 1{,}091\text{ m/s} \quad (\text{hướng } +\vec{e}_\perp)$$
     Vì $\vec{v}_e$ hướng lên-phải quanh tâm $C$, thanh $BC$ quay **cùng chiều kim đồng hồ (CW)** với:
     $$\omega_{BC} = \frac{v_e}{AC} = \frac{0{,}63\sqrt{3}}{0{,}2\sqrt{3}} = 3{,}15\text{ rad/s} \implies \bar{\omega}_{BC} = -3{,}15\text{ rad/s}\text{ (CW)}$$
   - **Chiếu $\vec{v}_a = \vec{v}_e + \vec{v}_r$ lên $\vec{e}_\parallel$ (khử $v_e$):**
     $$v_r = v_a\sin 30^\circ = 1{,}26 \cdot 0{,}5 = +0{,}63\text{ m/s}$$
     Vậy $\vec{v}_r$ hướng **dọc rãnh từ $A$ tiến về $C$** ($+\vec{e}_\parallel$, xuống-phải).

3. **Bước 2 — Giải gia tốc (chiếu $\perp BC$ khử cả $\vec{a}_r$ và $\vec{a}_e^n$ để tìm $\bar{\varepsilon}_{BC}$):**
   Xét phương trình $\vec{a}_a^n + \vec{a}_a^t = \vec{a}_e^n + \vec{a}_e^t + \vec{a}_r + \vec{a}_c$, chiếu toàn bộ lên trục $+\vec{e}_\perp$:
   - **$\vec{a}_a^t = \vec{0}$** (vì thanh $OA$ quay **đều**, $\varepsilon_1 = 0$).
   - **$\vec{a}_a^n$:** Độ lớn $a_a^n = \omega_1^2 \cdot OA = (6{,}3)^2 \cdot 0{,}2 = 7{,}938\text{ m/s}^2$, hướng từ $A$ về $O$ (góc $-60^\circ$ so với $+Ox$, hợp với $+\vec{e}_\perp$ góc $120^\circ$):
     $$a_{a,\perp} = 7{,}938 \cos 120^\circ = -7{,}938 \cdot 0{,}5 = -3{,}969\text{ m/s}^2$$
   - **$\vec{a}_e^n$ và $\vec{a}_r$:** Cả hai cùng nằm dọc phương rãnh $BC$ nên hình chiếu lên $\vec{e}_\perp$ **đều bằng $0$**.
   - **$\vec{a}_c = 2(\vec{\omega}_{BC} \times \vec{v}_r)$:** Độ lớn $a_c = 2\omega_{BC}v_r = 2 \cdot 3{,}15 \cdot 0{,}63 = 3{,}969\text{ m/s}^2$. Để tìm chiều $\vec{a}_c$, lấy $\vec{v}_r$ (hướng xuống-phải theo $+\vec{e}_\parallel$) **quay $90^\circ$ theo chiều quay CW của $\vec{\omega}_{BC}$** $\implies \vec{a}_c$ hướng **xuống-trái dọc $-\vec{e}_\perp$**! Suy ra:
     $$a_{c,\perp} = -3{,}969\text{ m/s}^2$$
   - Thay vào phương trình chiếu lên $+\vec{e}_\perp$ ($a_{a,\perp} = a_{e,\perp}^t + a_{c,\perp}$):
     $$-3{,}969 = a_{e,\perp}^t + (-3{,}969) \implies a_{e,\perp}^t = 0 \implies \bar{\varepsilon}_{BC} = 0\text{ rad/s}^2$$

**Kiểm tra giải tích nhanh (bắt lỗi trong 10 giây):** Ở mọi góc $\theta$, góc của $OA$ là $\varphi_1 = 180^\circ - 2\theta \implies \bar{\omega}_1 = -2\dot{\theta}$, còn góc của $BC$ là $\varphi_{BC} = 180^\circ - \theta \implies \bar{\omega}_{BC} = -\dot{\theta} = \frac{1}{2}\bar{\omega}_1$. Vì $\bar{\omega}_1 = -6{,}3\text{ rad/s}$ **không đổi**, $\bar{\omega}_{BC} = -3{,}15\text{ rad/s}$ cũng **không đổi**, do đó **$\bar{\varepsilon}_{BC} = 0\text{ rad/s}^2$** ở mọi thời điểm!

::: danger Lưu ý đính chính tài liệu tham khảo (Chủ đề 5 — trang 90–91 PDF)
Trong bài giải mẫu cũ ở trang 90–91 PDF, tác giả đã **vẽ ngược chiều $\vec{a}_c$** (chĩa lên trên thay vì quay $\vec{v}_r$ góc $90^\circ$ **CW** xuống-trái theo $-\vec{e}_\perp$), sau đó ở trang 91 lại cộng Pytago $\sqrt{3{,}97^2 + 3{,}97^2} = 5{,}614$ cho hai thành phần cùng phương vuông góc $BC$, dẫn tới đáp số sai $\varepsilon_{BC} = 16{,}2\text{ rad/s}^2$. Kết quả đúng toán học là **$\omega_{BC} = 3{,}15\text{ rad/s}$ (CW)** và **$\varepsilon_{BC} = 0\text{ rad/s}^2$**!
:::

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

## Ngày 5: Hệ Bánh Răng Cố Định, Hành Tinh, Vi Sai (Willis) & Mini-Test 10 Câu

*(Lưu ý đơn vị xuyên suốt Ngày 5: trong nhiều đề thi AS1003, vận tốc góc được ghi là $\text{s}^{-1}$ thay cho $\text{rad/s}$ — hai đơn vị này tương đương nhau hoàn toàn: **$1\text{ s}^{-1} = 1\text{ rad/s}$**, vì radian không thứ nguyên.)*

### 1. Hệ bánh răng cố định ($\bar{\omega}_H = 0$) & Quy tắc đồng trục

Trước khi học hệ hành tinh có cần quay $H$, ta phải nắm chắc **hệ bánh răng thường (trục cố định)** — đây cũng chính là nền tảng để hiểu công thức Willis khi "hãm đứng cần $H$". Trong hệ cố định, tâm quay của mọi bánh răng đều đứng yên ($\bar{\omega}_H = 0$).

1. **Công thức tỉ số truyền đại số (có dấu) của hệ bánh răng cố định:**
   Khi truyền động từ bánh dẫn $1$ qua chuỗi các cặp ăn khớp tới bánh bị dẫn $n$:
   $$\frac{\bar{\omega}_1}{\bar{\omega}_n} = (-1)^k \frac{Z_{\text{bị dẫn}}}{Z_{\text{dẫn}}} = (-1)^k \prod_{\text{cặp ăn khớp}} \frac{Z_{\text{bị dẫn}}}{Z_{\text{dẫn}}}$$
   *(Nếu đề cho bán kính $r$ hoặc đường kính $d$ cùng môđun thì thay $\frac{Z_{\text{bị dẫn}}}{Z_{\text{dẫn}}}$ bằng $\frac{r_{\text{bị dẫn}}}{r_{\text{dẫn}}} = \frac{d_{\text{bị dẫn}}}{d_{\text{dẫn}}}$.)*

2. **Phân biệt Ăn khớp NGOÀI ($-$) vs Ăn khớp TRONG ($+$) và đếm số $k$:**
   - **Ăn khớp NGOÀI (dấu $-$):** Hai bánh chạm mép ngoài vào nhau, hai tâm nằm ở hai phía tiếp điểm $\implies$ **quay ngược chiều** nhau. Mỗi cặp ăn khớp ngoài tính là $1$ lần đổi dấu vào $k$.
   - **Ăn khớp TRONG (dấu $+$):** Bánh nhỏ lồng bên trong vành răng bao, hai tâm nằm cùng phía tiếp điểm $\implies$ **quay cùng chiều** nhau, **không** cộng vào $k$.
   - **Đếm $k$:** Đếm tổng số cặp **ăn khớp ngoài** dọc đường truyền từ $1$ tới $n$: $k$ **lẻ** $\implies$ vế phải mang dấu **$(-)$**; $k$ **chẵn** $\implies$ vế phải mang dấu **$(+)$**.

3. **Quy tắc vàng cho 2 bánh răng gắn cứng ĐỒNG TRỤC ($\bar{\omega}_2 = \bar{\omega}_3$):**
   Khi hai bánh $(2)$ và $(3)$ cùng gắn chặt trên **một trục quay chung** (cụm bánh răng kép hai tầng): chúng quay như **một vật rắn duy nhất** nên **cùng vận tốc góc cả độ lớn lẫn dấu**:
   $$\bar{\omega}_2 = \bar{\omega}_3$$
   *Cảnh báo lỗi hay gặp:* Giữa $2$ và $3$ **không** phải cặp ăn khớp! Tuyệt đối không viết tỉ số $\frac{Z_3}{Z_2}$ hay đếm dấu giữa chúng. Ta chỉ lập tỉ số cho từng cặp ăn khớp thực sự rồi nối qua $\bar{\omega}_2 = \bar{\omega}_3$:
   $$\frac{\bar{\omega}_1}{\bar{\omega}_4} = \frac{\bar{\omega}_1}{\bar{\omega}_2} \cdot \underbrace{1}_{\bar{\omega}_2 = \bar{\omega}_3} \cdot \frac{\bar{\omega}_3}{\bar{\omega}_4} = (-1)^k \left(\frac{Z_2}{Z_1}\right)\left(\frac{Z_4}{Z_3}\right)$$

<div class="figure-container">
<svg viewBox="0 0 740 270" style="width: 100%; max-width: 700px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Quy tắc ăn khớp ngoài trong và sơ đồ hệ 4 bánh răng cố định có cặp đồng trục">
  <defs>
    <marker id="m5f-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0284c7" />
    </marker>
    <marker id="m5f-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#dc2626" />
    </marker>
    <marker id="m5f-t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0d9488" />
    </marker>
  </defs>
  <rect x="10" y="10" width="320" height="250" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="170" y="34" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">1. Quy tắc dấu ăn khớp phẳng</text>
  <circle cx="92" cy="96" r="26" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" stroke-dasharray="4 3" />
  <circle cx="154" cy="96" r="36" fill="#ffffff" stroke="#0f172a" stroke-width="2" stroke-dasharray="4 3" />
  <circle cx="118" cy="96" r="4" fill="#dc2626" />
  <path d="M 76 78 A 20 20 0 0 0 76 114" fill="none" stroke="#0284c7" stroke-width="1.8" marker-end="url(#m5f-b)" />
  <path d="M 168 72 A 28 28 0 0 1 168 120" fill="none" stroke="#dc2626" stroke-width="1.8" marker-end="url(#m5f-r)" />
  <text x="92" y="100" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#0369a1">+</text>
  <text x="154" y="100" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#b91c1c">−</text>
  <text x="206" y="91" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#b91c1c">Ngoài: dấu (−)</text>
  <text x="206" y="109" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="600" fill="#475569">(quay ngược chiều)</text>
  <circle cx="132" cy="196" r="42" fill="#ffffff" stroke="#0f172a" stroke-width="2" stroke-dasharray="5 3" />
  <circle cx="152" cy="196" r="22" fill="#ccfbf1" stroke="#0d9488" stroke-width="2" stroke-dasharray="4 2" />
  <circle cx="174" cy="196" r="4" fill="#0d9488" />
  <path d="M 102 178 A 34 34 0 0 0 102 214" fill="none" stroke="#0d9488" stroke-width="1.8" marker-end="url(#m5f-t)" />
  <path d="M 142 182 A 15 15 0 0 0 142 210" fill="none" stroke="#0d9488" stroke-width="1.6" marker-end="url(#m5f-t)" />
  <text x="192" y="191" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="12" font-weight="700" fill="#0f766e">Trong: dấu (+)</text>
  <text x="192" y="209" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="600" fill="#475569">(quay cùng chiều)</text>

  <rect x="344" y="10" width="386" height="250" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="537" y="34" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="13" font-weight="700" fill="#0f172a">2. Ví dụ 4 bánh răng (có 1 cặp đồng trục)</text>
  <line x1="372" y1="82" x2="452" y2="82" stroke="#0f172a" stroke-width="2.4" />
  <polygon points="386,82 379,95 393,95" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.3" />
  <rect x="428" y="64" width="12" height="36" rx="2" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <text x="434" y="55" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#0369a1">1 (Z₁=20)</text>
  <line x1="388" y1="154" x2="574" y2="154" stroke="#0f172a" stroke-width="2.6" />
  <polygon points="402,154 395,167 409,167" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.3" />
  <polygon points="496,154 489,167 503,167" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.3" />
  <rect x="428" y="100" width="12" height="108" rx="2" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <text x="434" y="224" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#b45309">2 (Z₂=80)</text>
  <rect x="548" y="132" width="12" height="44" rx="2" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <text x="554" y="122" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#b45309">3 (Z₃=25)</text>
  <path d="M 540 56 H 622 V 184 H 540 V 176 H 612 V 64 H 540 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.8" />
  <line x1="622" y1="120" x2="704" y2="120" stroke="#0f172a" stroke-width="2.4" />
  <polygon points="676,120 669,133 683,133" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.3" />
  <text x="676" y="96" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#334155">4 (Z₄=125)</text>
  <circle cx="434" cy="100" r="4" fill="#dc2626" />
  <text x="450" y="104" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="700" fill="#dc2626">Ngoài (−)</text>
  <circle cx="554" cy="176" r="4" fill="#0d9488" />
  <text x="554" y="202" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="700" fill="#0f766e">Trong (+)</text>
  <rect x="524" y="227" width="178" height="24" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.2" />
  <text x="613" y="243" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11.5" font-weight="700" fill="#0369a1">Đồng trục: ω₂ = ω₃</text>
</svg>
<div class="figure-caption">

Hình 1.6: Quy tắc dấu cặp ăn khớp ngoài/trong và mô hình hệ 4 bánh răng cố định có cặp đồng trục (2, 3)

</div>
</div>

::: tip Ví dụ 5.1 (Tính nhẩm trong 15 giây): Hệ 4 bánh răng cố định có 1 cặp đồng trục
**Đề bài:** Cho hệ bánh răng trục cố định như Hình 1.6: bánh dẫn $1$ ($Z_1 = 20$) quay **CCW** với $\bar{\omega}_1 = +100\text{ rad/s}$, ăn khớp **ngoài** với bánh $2$ ($Z_2 = 80$). Bánh $2$ gắn cứng **đồng trục** với bánh $3$ ($Z_3 = 25$), còn bánh $3$ ăn khớp **trong** với vành răng $4$ ($Z_4 = 125$). Tính $\bar{\omega}_2, \bar{\omega}_3$ và $\bar{\omega}_4$.

**Lời giải nhanh (2 cách để tự kiểm tra trong phòng thi):**
- **Cách 1 (Đi từng khâu — chống nhầm):**
  1. Cặp $1-2$ ăn khớp **ngoài** (đổi dấu $-$):
     $$\frac{\bar{\omega}_1}{\bar{\omega}_2} = -\frac{Z_2}{Z_1} = -\frac{80}{20} = -4 \implies \bar{\omega}_2 = \frac{+100}{-4} = -25\text{ rad/s}\text{ (CW)}$$
  2. Bánh $2$ và $3$ **gắn cứng đồng trục**:
     $$\bar{\omega}_3 = \bar{\omega}_2 = -25\text{ rad/s}\text{ (CW)}$$
  3. Cặp $3-4$ ăn khớp **trong** (giữ dấu $+$):
     $$\frac{\bar{\omega}_3}{\bar{\omega}_4} = +\frac{Z_4}{Z_3} = +\frac{125}{25} = +5 \implies \bar{\omega}_4 = \frac{-25}{+5} = -5\text{ rad/s}\text{ (CW)}$$
- **Cách 2 (Bấm máy 1 dòng):** Dọc mạch $1 \to 2(=3) \to 4$ chỉ có **$k = 1$** cặp ăn khớp ngoài ($1-2$):
  $$\begin{aligned}
  \frac{\bar{\omega}_1}{\bar{\omega}_4} &= (-1)^1 \cdot \frac{Z_2}{Z_1} \cdot \frac{Z_4}{Z_3} = -\frac{80}{20} \cdot \frac{125}{25} = -20 \\
  \implies \bar{\omega}_4 &= \frac{+100}{-20} = -5\text{ rad/s}\text{ (CW)}
  \end{aligned}$$
:::

---

### 2. Hệ bánh răng hành tinh, vi sai: Công thức Willis chuẩn & Quy tắc đếm dấu $(-1)^k$

Hệ bánh răng có cần quay $H$ gồm 2 loại: **Hệ hành tinh** (có ít nhất 1 bánh trung tâm đứng yên cố định) và **Hệ vi sai** (tất cả bánh trung tâm và cần $H$ đều quay). Để giải mọi bài hệ bánh răng có cần quay trong 60 giây, ta dùng **phương pháp đảo chuyển động gắn lên cần $H$ (Công thức Willis)** — thực chất là trừ $\bar{\omega}_H$ vào mọi vận tốc góc để đưa về hệ cố định ở Mục 1:

$$\begin{aligned}
\frac{\bar{\omega}_1 - \bar{\omega}_H}{\bar{\omega}_n - \bar{\omega}_H} &= (-1)^k \frac{Z_{\text{bị dẫn}}}{Z_{\text{dẫn}}} \\
&= (-1)^k \prod_{\text{cặp ăn khớp}} \frac{r_{\text{bị dẫn}}}{r_{\text{dẫn}}}
\end{aligned}$$

**3 quy tắc sống còn khi bấm máy Công thức Willis:**
1. **Giữ đúng thứ tự "Đầu trên – Đuôi dưới" và "Bị dẫn trên – Dẫn dưới":** Nếu tử số là $\bar{\omega}_1 - \bar{\omega}_H$ thì ở vế phải, kích thước/số răng của bánh **$1$** nằm ở **mẫu**, còn của bánh **$n$** nằm ở **tử**:
   $$\frac{\bar{\omega}_1 - \bar{\omega}_H}{\bar{\omega}_2 - \bar{\omega}_H} = \pm \frac{Z_2}{Z_1} = \pm \frac{r_2}{r_1}$$
   *(Lưu ý: Trong nhiều đề thi gốc, đề viết gọn $\omega_1, \omega_H$ không có gạch đầu nhưng khi thay số vào Willis bắt buộc lấy **giá trị đại số có dấu** $\bar{\omega}$: `+` CCW, `-` CW!)*
2. **Dấu $(-1)^k$:** Với mỗi cặp bánh răng ăn khớp trực tiếp:
   - **Ăn khớp TRONG** (bánh con lồng trong vành răng bao): cùng chiều quay tương đối $\implies$ **dấu $(+)$**.
   - **Ăn khớp NGOÀI** (hai bánh chạm mép ngoài vào nhau): ngược chiều quay tương đối $\implies$ **dấu $(-)$**.
   Khi nối một mạch từ bánh $1$ qua nhiều bánh trung gian tới bánh $n$, chỉ cần đếm số cặp ăn khớp **ngoài** $k$: $k$ chẵn lấy $+$, $k$ lẻ lấy $-$. *(Nếu trong cụm hành tinh có 2 bánh gắn cứng đồng trục trên cần $H$, tương tự Mục 1 ta lấy $\bar{\omega}_2 - \bar{\omega}_H = \bar{\omega}_3 - \bar{\omega}_H$.)*
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

Hình 1.7: Sơ đồ hệ bánh răng hành tinh S–P–R và quy tắc đếm cặp ăn khớp trong/ngoài theo Willis

</div>
</div>

---

### Ví dụ 5.2 & 5.3: Thực hành Hệ Hành Tinh và Vi Sai

::: tip Ví dụ 5.2 (Chủ đề 7 — Tài liệu luyện thi trang 95–96 PDF, đã kiểm toán lại chính xác)
**Đề bài:** Cho hệ thống bánh răng hành tinh như Hình 1.7. Vành răng ngoài $R$ được giữ cố định ($\bar{\omega}_R = 0$). Bánh răng mặt trời $S$ có đường kính $d_S = 80\text{ mm}$ ($r_S = 40\text{ mm}$) quay với vận tốc góc $\bar{\omega}_S = +6{,}3\text{ s}^{-1}$ (tức $+6{,}3\text{ rad/s}$, vì $1\text{ s}^{-1} = 1\text{ rad/s}$). Hai bánh hành tinh $P$ có đường kính $d_P = 40\text{ mm}$ ($r_P = 20\text{ mm}$) gắn trên cần quay $A$. Tính vận tốc góc của cần $A$ ($\bar{\omega}_A$) và bánh hành tinh $P$ ($\bar{\omega}_P$).

**Lời giải chuẩn bằng Công thức Willis:**
1. **Kiểm tra bán kính vành $R$:** $r_R = r_S + 2r_P = 40 + 2(20) = 80\text{ mm}$.
2. **Cặp ăn khớp trong $P - R$ (lấy $\bar{\omega}_R = 0$):**
   $$\begin{aligned}
   \frac{\bar{\omega}_P - \bar{\omega}_A}{0 - \bar{\omega}_A} &= +\frac{r_R}{r_P} = +\frac{80}{20} = 4 \\
   \implies \bar{\omega}_P - \bar{\omega}_A &= -4\bar{\omega}_A \implies \bar{\omega}_P = -3\bar{\omega}_A \quad (1)
   \end{aligned}$$
3. **Cặp ăn khớp ngoài $P - S$:**
   $$\frac{\bar{\omega}_P - \bar{\omega}_A}{\bar{\omega}_S - \bar{\omega}_A} = -\frac{r_S}{r_P} = -\frac{40}{20} = -2 \quad (2)$$
4. **Thế $(1)$ và $\bar{\omega}_S = +6{,}3\text{ rad/s}$ vào $(2)$:**
   $$\begin{aligned}
   \frac{-3\bar{\omega}_A - \bar{\omega}_A}{6{,}3 - \bar{\omega}_A} &= -2 \iff -4\bar{\omega}_A = -12{,}6 + 2\bar{\omega}_A \\
   \iff 6\bar{\omega}_A &= 12{,}6 \implies \bar{\omega}_A = +2{,}1\text{ rad/s}\text{ (hay } +2{,}1\text{ s}^{-1}\text{)}
   \end{aligned}$$
   Thế vào $(1)$: $\bar{\omega}_P = -3(2{,}1) = -6{,}3\text{ rad/s}\text{ (hay } -6{,}3\text{ s}^{-1}\text{)}$.

**Kết luận:** Cần $A$ quay **cùng chiều** bánh $S$ với tốc độ $2{,}1\text{ s}^{-1}$, bánh hành tinh $P$ quay **ngược chiều** bánh $S$ với tốc độ $6{,}3\text{ s}^{-1}$.
*(Lưu ý đính chính tài liệu tham khảo trang 96 PDF: Trong bài giải cũ ở trang 96 viết nhầm tỉ số $\frac{r_S}{r_P} = 0{,}5$ và đánh rơi dấu trừ khi giải phương trình (2) nên mới ra $2{,}7$ và $-0{,}9$; kết quả đúng toán học phải là $\bar{\omega}_A = +2{,}1\text{ s}^{-1}$ và $\bar{\omega}_P = -6{,}3\text{ s}^{-1}$ như trên!)*
:::

::: tip Ví dụ 5.3: Hệ bánh răng vi sai cho biết số răng ($Z_1, Z_2, Z_3$)
**Đề bài:** Trong hộp số vi sai cấu trúc $S(1) - P(2) - R(3)$ như Hình 1.7 có $Z_1 = 18$ răng, $Z_2 = 27$ răng, $Z_3 = 72$ răng (kiểm tra $18 + 2\cdot 27 = 72$). Biết bánh $1$ quay $\bar{\omega}_1 = +20\text{ rad/s}$ (CCW) và cần $H$ quay $\bar{\omega}_H = +5\text{ rad/s}$ (CCW). Tìm $\bar{\omega}_3$ và $\bar{\omega}_2$.

**Lời giải nhanh:**
- Áp dụng Willis nối thẳng $1 \to 3$ (qua $2$, có $k = 1$ cặp ăn khớp ngoài):
  $$\frac{\bar{\omega}_1 - \bar{\omega}_H}{\bar{\omega}_3 - \bar{\omega}_H} = -\frac{Z_3}{Z_1} \implies \frac{20 - 5}{\bar{\omega}_3 - 5} = -\frac{72}{18} = -4$$
  $$\implies \bar{\omega}_3 - 5 = -\frac{15}{4} = -3{,}75 \implies \bar{\omega}_3 = +1{,}25\text{ rad/s} \quad (\text{CCW})$$
- Áp dụng Willis cho cặp ăn khớp trong $2 - 3$:
  $$\begin{aligned}
  \frac{\bar{\omega}_2 - 5}{1{,}25 - 5} &= +\frac{Z_3}{Z_2} = \frac{72}{27} = \frac{8}{3} \\
  \implies \bar{\omega}_2 - 5 &= \frac{8}{3}(-3{,}75) = -10 \implies \bar{\omega}_2 = -5\text{ rad/s} \quad (\text{CW})
  \end{aligned}$$
:::

---

### 3. Mini-Test Chốt Chặng 1 (10 Câu Trắc Nghiệm Chuẩn AS1003 — Bấm Giờ 15 Phút)

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

**Câu 5.** Con lăn $O$ bán kính $R = 20\text{ cm}$ lăn không trượt trên nền ngang sang phải với $\omega = 1\text{ rad/s}$ (CW) và $\varepsilon = 0{,}5\text{ rad/s}^2$ (CW). Thanh $AB$ nối đỉnh cao nhất $B$ của con lăn ($OB$ thẳng đứng) với con chạy $A$ nằm bên trái điểm tiếp xúc $I$ và trượt trên cùng đường ngang tiếp xúc sàn qua $I$, góc $\widehat{BAI} = 45^\circ$. Tìm vectơ gia tốc con chạy $A$ ($\text{cm/s}^2$) (với $\vec{i}$ sang phải, $\vec{j}$ hướng lên):
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
Nếu bạn làm đúng từ **`8/10` câu trở lên** trong Mini-Test 15 phút trên, bạn đã xóa mù hoàn toàn phần vectơ – con lăn và làm chủ chắc chắn Khối A (`Ch.9–10`) của đề thi Cuối kỳ AS1003. Hãy bước tiếp ngay sang **[Chặng 2 (Ngày 6 – Ngày 10): Ch.11, 12.1 & 13 — Khối Tâm, Steiner & D'Alembert](/on-thi/chang-2-dong-hoc)** hoặc xem thêm đề thi các năm tại **[Ngân Hàng Đề Thi Thật HCMUT](/on-thi/de-thi-that-hcmut)**.
:::
