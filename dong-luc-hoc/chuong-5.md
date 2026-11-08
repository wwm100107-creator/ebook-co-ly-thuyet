# Chương 5: Nguyên Lý Đalămbe

Nguyên lý Đalămbe (d'Alembert) đưa ra khái niệm **lực quán tính**, cho phép chuyển các bài toán động lực học về dạng các bài toán tĩnh học tương đương. Phương pháp này đặc biệt hiệu quả trong kỹ thuật để xác định các phản lực liên kết động và áp lực lên ổ trục trong các máy móc quay.

---

## 5.1. Nguyên Lý Đalămbe Đối Với Chất Điểm

### 5.1.1. Lực Quán Tính Đalămbe

Xét một chất điểm khối lượng $m$ chuyển động với gia tốc $\vec{a}$ dưới tác dụng của hợp lực $\vec{F}$ (bao gồm cả ngoại lực và phản lực liên kết). Theo định luật 2 Newton:

$$m\vec{a} = \vec{F} \iff \vec{F} - m\vec{a} = \vec{0}$$

::: tip Định nghĩa
Lực quán tính Đalămbe của chất điểm là một véctơ bằng tích số giữa khối lượng của chất điểm với gia tốc của nó, có phương trùng với phương gia tốc nhưng có **chiều ngược lại**:

$$\vec{F}_{\text{qt}} = -m\vec{a} = -m\frac{d^2\vec{r}}{dt^2} \tag{5-1}$$
:::

### 5.1.2. Phát Biểu Nguyên Lý Đalămbe

::: tip Nguyên lý Đalămbe đối với chất điểm
Tại mỗi thời điểm chuyển động của chất điểm, nếu đặt thêm vào chất điểm lực quán tính Đalămbe $\vec{F}_{\text{qt}}$ cùng với các lực thực tế $\vec{F}$ tác dụng lên nó, thì hệ lực thu được sẽ là một **hệ lực cân bằng hình thức**:

$$\vec{F} + \vec{F}_{\text{qt}} = \vec{0} \tag{5-2}$$
:::

<div class="figure-container">
  <img src="/figures/dong-luc-hoc/hinh_5_1.svg" alt="Hình 5-1: Lực quán tính Đalămbe tác dụng lên chất điểm" style="max-height: 260px;" />
  <div class="figure-caption">Hình 5-1: Cân bằng hình thức giữa lực tác dụng $\vec{F}$ và lực quán tính $\vec{F}_{\text{qt}}$</div>
</div>

### 5.1.3. Lực Quán Tính Trong Hệ Tọa Độ Tự Nhiên
Phân tích gia tốc $\vec{a} = \vec{a}_t + \vec{a}_n$, lực quán tính gồm hai thành phần:

$$\vec{F}_{\text{qt}} = \vec{F}_{\text{qt}}^t + \vec{F}_{\text{qt}}^n \tag{5-3}$$

- **Lực quán tính tiếp tuyến $\vec{F}_{\text{qt}}^t$:**
  $$\vec{F}_{\text{qt}}^t = -m \vec{a}_t = -m \ddot{s} \vec{\tau}; \quad F_{\text{qt}}^t = -m \frac{dv}{dt} \tag{5-4}$$
  Ngược chiều với gia tốc tiếp tuyến $\vec{a}_t$.

- **Lực quán tính pháp tuyến (Lực quán tính ly tâm) $\vec{F}_{\text{qt}}^n$:**
  $$\vec{F}_{\text{qt}}^n = -m \vec{a}_n = -m \frac{v^2}{\rho} \vec{n}; \quad F_{\text{qt}}^n = m \frac{v^2}{\rho} \tag{5-5}$$
  Phương nằm trên pháp tuyến chính, chiều luôn luôn **hướng ra xa tâm chính khúc** của quỹ đạo (hướng ra ngoài đường cong).

---

## 5.2. Nguyên Lý Đalămbe Đối Với Cơ Hệ

Xét cơ hệ gồm $n$ chất điểm. Với mỗi chất điểm thứ $k$ (khối lượng $m_k$, gia tốc $\vec{a}_k$):

$$\vec{F}_k^e + \vec{F}_k^i + \vec{F}_{\text{qt}k} = \vec{0} \quad (k = 1, 2, ..., n) \tag{5-6}$$

trong đó $\vec{F}_{\text{qt}k} = -m_k \vec{a}_k$ là lực quán tính của chất điểm thứ $k$.

::: tip Nguyên lý Đalămbe đối với cơ hệ
Tại mỗi thời điểm chuyển động của cơ hệ, nếu thêm vào các ngoại lực $\vec{F}_k^e$ và nội lực $\vec{F}_k^i$ tác dụng lên mỗi chất điểm lực quán tính Đalămbe $\vec{F}_{\text{qt}k}$ tương ứng, thì hệ tất cả các lực đó sẽ là một **hệ lực cân bằng**:

$$\sum_{k=1}^n (\vec{F}_k^e + \vec{F}_k^i + \vec{F}_{\text{qt}k}) = \vec{0}$$
:::

---

## 5.3. Phương Pháp Tĩnh Hình Học – Động Lực (Kinetostatics)

Phương pháp Tĩnh hình học – Động lực áp dụng các quy tắc thu gọn hệ lực của Tĩnh học để thu gọn toàn bộ hệ lực quán tính phân bố trên vật thể rắn về một điểm thu gọn (thường chọn là khối tâm $C$ hoặc tâm quay cố định $O$).

### 5.3.1. Thu Gọn Hệ Lực Quán Tính Của Vật Rắn

1. **Véctơ chính của hệ lực quán tính:**
   $$\vec{R}_{\text{qt}} = \sum_{k=1}^n \vec{F}_{\text{qt}k} = -\sum_{k=1}^n m_k \vec{a}_k = -M \vec{a}_C \tag{5-7}$$
   > **Véctơ chính lực quán tính** đặt tại khối tâm $C$, ngược chiều với gia tốc khối tâm $\vec{a}_C$ và có độ lớn $R_{\text{qt}} = M a_C$.

2. **Mômen chính của hệ lực quán tính đối với khối tâm $C$:**
   $$\vec{M}_{C\text{qt}} = \sum_{k=1}^n (\vec{r}'_k \times \vec{F}_{\text{qt}k}) = -J_C \vec{\varepsilon} \tag{5-8}$$
   > **Mômen chính lực quán tính** ngược chiều với gia tốc góc $\vec{\varepsilon}$ của vật và có độ lớn $M_{C\text{qt}} = J_C \varepsilon$.

---

### 5.3.2. Thu Gọn Lực Quán Tính Trong Các Dạng Chuyển Động

1. **Chuyển động tịnh tiến:**
   Vì $\vec{\varepsilon} = \vec{0}$ nên hệ lực quán tính thu gọn thành một lực duy nhất đặt tại khối tâm $C$:
   $$\vec{R}_{\text{qt}} = -M\vec{a}_C; \quad \vec{M}_{C\text{qt}} = \vec{0} \tag{5-9}$$

2. **Chuyển động quay quanh trục cố định $Oz$ đi qua khối tâm $C$:**
   Vì $\vec{a}_C = \vec{0}$ nên véctơ chính lực quán tính triệt tiêu:
   $$\vec{R}_{\text{qt}} = \vec{0}; \quad M_{z\text{qt}} = -J_z \varepsilon \tag{5-10}$$
   Hệ lực quán tính tương đương một ngẫu lực quán tính cản trở chuyển động quay.

3. **Chuyển động quay quanh trục cố định $Oz$ không đi qua khối tâm ($d = OC$):**
   Khối tâm $C$ có gia tốc $\vec{a}_C = \vec{a}_C^t + \vec{a}_C^n$. Hệ lực quán tính gồm:
   - Lực quán tính tiếp tuyến: $R_{\text{qt}}^t = M \varepsilon d$.
   - Lực quán tính pháp tuyến (ly tâm): $R_{\text{qt}}^n = M \omega^2 d$.
   - Ngẫu lực quán tính: $M_{z\text{qt}} = -J_C \varepsilon$.

4. **Chuyển động song phẳng:**
   Hệ lực quán tính tương đương một lực $\vec{R}_{\text{qt}} = -M\vec{a}_C$ đặt tại khối tâm $C$ và một ngẫu lực mômen $M_{C\text{qt}} = -J_C \varepsilon$.

<div class="figure-container">
  <img src="/figures/dong-luc-hoc/hinh_5_2.svg" alt="Hình 5-2: Thu gọn hệ lực quán tính của vật rắn chuyển động song phẳng" style="max-height: 280px;" />
  <div class="figure-caption">Hình 5-2: Lực quán tính $\vec{R}_{\text{qt}}$ và mômen quán tính $M_{C\text{qt}}$</div>
</div>

---

### 5.3.3. Các Phương Trình Cân Bằng Động Lực Học
Để giải bài toán bằng phương pháp này, ta viết hệ phương trình cân bằng tĩnh học quen thuộc nhưng bổ sung thêm $\vec{R}_{\text{qt}}$ và $\vec{M}_{\text{qt}}$:

$$\begin{cases} \displaystyle\sum F_{kx}^e + R_{\text{qt}x} = 0 \\[8pt] \displaystyle\sum F_{ky}^e + R_{\text{qt}y} = 0 \\[8pt] \displaystyle\sum m_O(\vec{F}_k^e) + M_{O\text{qt}} = 0 \end{cases} \tag{5-11}$$

---

## 5.4. Phương Pháp Tĩnh Giải Tích – Động Lực (Nguyên Lý Đalămbe – Lagrange)

Kết hợp nguyên lý Đalămbe với nguyên lý di chuyển khả dĩ của Lagrange:

::: tip Phương trình cơ bản của động lực học (Đalămbe – Lagrange)
Đối với một cơ hệ có các liên kết lý tưởng, hai chiều, tại mỗi thời điểm chuyển động, tổng công khả dĩ của tất cả các lực hoạt động và các lực quán tính bằng không trên mọi di chuyển khả dĩ của hệ:

$$\sum_{k=1}^n (\vec{F}_k^e - m_k \vec{a}_k) \cdot \delta\vec{r}_k = 0 \tag{5-12}$$
:::

Dạng giải tích trong hệ tọa độ Descartes:

$$\sum_{k=1}^n \Big[ (F_{kx}^e - m_k \ddot{x}_k)\delta x_k + (F_{ky}^e - m_k \ddot{y}_k)\delta y_k + (F_{kz}^e - m_k \ddot{z}_k)\delta z_k \Big] = 0 \tag{5-13}$$

Phương trình $(5-12)$ là phương trình tổng quát nhất của toàn bộ cơ học cổ điển. Nó chứa đựng cả Tĩnh học (khi $\vec{a}_k = \vec{0}$) và Động lực học, đồng thời là cơ sở trực tiếp để thiết lập **Phương trình Lagrange loại II**.
