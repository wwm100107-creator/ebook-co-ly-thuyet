# Chương 1: Động Học Điểm

Động học điểm nghiên cứu các quy luật chuyển động hình học của một chất điểm trong không gian theo thời gian mà không xét đến lực tác dụng.

---

## 1.1. Phương Pháp Véctơ

Vị trí của điểm $M$ chuyển động trong không gian tại thời điểm $t$ đối với gốc tọa độ cố định $O$ được xác định bằng bán kính véctơ:

$$\vec{r} = \vec{OM} = \vec{r}(t) \tag{1-1}$$

Phương trình $(1-1)$ được gọi là **phương trình chuyển động dạng véctơ** của điểm.

Đường cong do mút của bán kính véctơ $\vec{r}(t)$ vạch nên trong không gian được gọi là **quỹ đạo** của điểm chuyển động.

<div class="figure-container">
  <img src="/figures/dong-hoc/hinh_1_1.svg" alt="Hình 1-1: Khảo sát chuyển động của điểm bằng phương pháp vectơ" style="max-height: 260px;" />
  <div class="figure-caption">Hình 1-1: Quỹ đạo, vận tốc $\vec{v}$ và gia tốc $\vec{a}$ của điểm</div>
</div>

### 1.1.1. Vận Tốc Của Điểm
Tại thời điểm $t$, điểm ở vị trí $M$ có bán kính véctơ $\vec{r}$. Tại thời điểm $t + \Delta t$, điểm chuyển đến vị trí $M_1$ có bán kính véctơ $\vec{r} + \Delta\vec{r}$. Véctơ độ dời: $\Delta\vec{r} = \vec{MM}_1$.

Vận tốc trung bình trong khoảng thời gian $\Delta t$:

$$\vec{v}_{\text{tb}} = \frac{\Delta\vec{r}}{\Delta t}$$

::: tip Vận tốc tức thời
Vận tốc tức thời của điểm tại thời điểm $t$ là đạo hàm bậc nhất của bán kính véctơ $\vec{r}$ theo thời gian:

$$\vec{v} = \lim_{\Delta t \to 0} \frac{\Delta\vec{r}}{\Delta t} = \frac{d\vec{r}}{dt} = \dot{\vec{r}} \tag{1-2}$$
:::

- **Phương:** Trùng với tiếp tuyến của quỹ đạo tại điểm $M$.
- **Chiều:** Hướng theo chiều chuyển động của điểm.
- **Độ lớn:** Bằng tốc độ biến thiên vị trí của điểm theo thời gian.

---

### 1.1.2. Gia Tốc Của Điểm
Gia tốc đặc trưng cho sự biến đổi cả về độ lớn và phương chiều của véctơ vận tốc theo thời gian.

::: tip Gia tốc tức thời
Gia tốc tức thời của điểm tại thời điểm $t$ là đạo hàm bậc nhất của véctơ vận tốc $\vec{v}$ hoặc đạo hàm bậc hai của bán kính véctơ $\vec{r}$ theo thời gian:

$$\vec{a} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2} = \ddot{\vec{r}} \tag{1-3}$$
:::

- Véctơ gia tốc $\vec{a}$ luôn nằm trong mặt phẳng mật tiếp và hướng về phía lõm của đường cong quỹ đạo.

---

## 1.2. Phương Pháp Tọa Độ Đề Các (Descartes)

Gắn vào hệ quy chiếu một hệ trục tọa độ Descartes vuông góc $Oxyz$. Vị trí của điểm $M$ được xác định bởi bộ ba tọa độ:

$$\vec{r}(t) = x(t)\vec{i} + y(t)\vec{j} + z(t)\vec{k}$$

### 1.2.1. Phương Trình Chuyển Động và Phương Trình Quỹ Đạo

- **Phương trình chuyển động:**
  $$\begin{cases} x = x(t) \\ y = y(t) \\ z = z(t) \end{cases} \tag{1-4}$$

- **Phương trình quỹ đạo:** Khử biến số thời gian $t$ từ hệ $(1-4)$, ta nhận được phương trình quỹ đạo dưới dạng giao tuyến của hai mặt cong:
  $$\begin{cases} f_1(x, y, z) = 0 \\ f_2(x, y, z) = 0 \end{cases}$$

---

### 1.2.2. Vận Tốc Của Điểm

Chiếu véctơ vận tốc $\vec{v} = \dot{\vec{r}}$ lên ba trục tọa độ:

$$v_x = \dot{x} = \frac{dx}{dt}; \quad v_y = \dot{y} = \frac{dy}{dt}; \quad v_z = \dot{z} = \frac{dz}{dt} \tag{1-5}$$

Độ lớn của vận tốc:

$$v = \sqrt{v_x^2 + v_y^2 + v_z^2} = \sqrt{\dot{x}^2 + \dot{y}^2 + \dot{z}^2} \tag{1-6}$$

Các cosin chỉ phương của véctơ vận tốc:

$$\cos(\vec{v}, Ox) = \frac{\dot{x}}{v}; \quad \cos(\vec{v}, Oy) = \frac{\dot{y}}{v}; \quad \cos(\vec{v}, Oz) = \frac{\dot{z}}{v} \tag{1-7}$$

---

### 1.2.3. Gia Tốc Của Điểm

Chiếu véctơ gia tốc $\vec{a} = \ddot{\vec{r}}$ lên ba trục tọa độ:

$$a_x = \ddot{x} = \frac{d^2 x}{dt^2}; \quad a_y = \ddot{y} = \frac{d^2 y}{dt^2}; \quad a_z = \ddot{z} = \frac{d^2 z}{dt^2} \tag{1-8}$$

Độ lớn của gia tốc:

$$a = \sqrt{a_x^2 + a_y^2 + a_z^2} = \sqrt{\ddot{x}^2 + \ddot{y}^2 + \ddot{z}^2} \tag{1-9}$$

Các cosin chỉ phương của véctơ gia tốc:

$$\cos(\vec{a}, Ox) = \frac{\ddot{x}}{a}; \quad \cos(\vec{a}, Oy) = \frac{\ddot{y}}{a}; \quad \cos(\vec{a}, Oz) = \frac{\ddot{z}}{a} \tag{1-10}$$

---

## 1.3. Phương Pháp Tọa Độ Tự Nhiên

Phương pháp này được sử dụng khi **quỹ đạo của điểm đã biết trước**.

Trên quỹ đạo đã biết, chọn một điểm gốc $O$, chọn một chiều quy ước làm chiều dương, và xác định vị trí của điểm $M$ bằng tọa độ cong (cung đại số) $s = \overset{\large\frown}{OM}$:

$$s = s(t) \tag{1-11}$$

Phương trình $(1-11)$ được gọi là **phương trình chuyển động của điểm theo quỹ đạo**.

### 1.3.1. Hệ Trục Tọa Độ Tự Nhiên (Tam Diện Frenet)

Tại mỗi điểm $M$ trên quỹ đạo, ta gắn hệ tam diện trực chuẩn gồm ba véctơ đơn vị:
- $\vec{\tau}$: Véctơ đơn vị **tiếp tuyến**, tiếp xúc với quỹ đạo tại $M$ và hướng theo chiều dương của cung $s$.
- $\vec{n}$: Véctơ đơn vị **pháp tuyến chính**, nằm trong mặt phẳng mật tiếp tại $M$, vuông góc với $\vec{\tau}$ và luôn hướng về phía lõm của quỹ đạo.
- $\vec{b} = \vec{\tau} \times \vec{n}$: Véctơ đơn vị **trùng pháp tuyến**, vuông góc với mặt phẳng mật tiếp.

<div class="figure-container">
  <img src="/figures/dong-hoc/hinh_1_2.svg" alt="Hình 1-2: Tam diện tự nhiên Frenet" style="max-height: 270px;" />
  <div class="figure-caption">Hình 1-2: Hệ trục tọa độ tự nhiên $(\vec{\tau}, \vec{n}, \vec{b})$</div>
</div>

---

### 1.3.2. Vận Tốc Trong Hệ Tọa Độ Tự Nhiên

Vì vận tốc luôn tiếp tuyến với quỹ đạo:

$$\vec{v} = v_{\tau} \vec{\tau} = \frac{ds}{dt} \vec{\tau} = \dot{s} \vec{\tau} \tag{1-12}$$

Độ lớn của vận tốc: $v = |\dot{s}|$. Vận tốc đại số $v_{\tau} = \dot{s}$ mang dấu dương khi điểm chuyển động theo chiều dương và âm khi chuyển động ngược lại.

---

### 1.3.3. Gia Tốc Trong Hệ Tọa Độ Tự Nhiên

Lấy đạo hàm của véctơ vận tốc theo thời gian:

$$\vec{a} = \frac{d\vec{v}}{dt} = \frac{d}{dt}(\dot{s}\vec{\tau}) = \ddot{s}\vec{\tau} + \dot{s}\frac{d\vec{\tau}}{dt}$$

Theo công thức vi phân Frenet: $\frac{d\vec{\tau}}{ds} = \frac{1}{\rho}\vec{n}$ (với $\rho$ là bán kính chính khúc của quỹ đạo tại $M$), do đó:

$$\frac{d\vec{\tau}}{dt} = \frac{d\vec{\tau}}{ds} \frac{ds}{dt} = \frac{\dot{s}}{\rho}\vec{n} = \frac{v}{\rho}\vec{n}$$

Thay vào, ta nhận được:

$$\vec{a} = \vec{a}_t + \vec{a}_n = a_t \vec{\tau} + a_n \vec{n} \tag{1-13}$$

::: tip Thành phần gia tốc tiếp tuyến và pháp tuyến
- **Gia tốc tiếp tuyến $\vec{a}_t$:**
  $$a_t = \frac{dv}{dt} = \ddot{s} \tag{1-14}$$
  Đặc trưng cho **sự biến thiên về độ lớn** của véctơ vận tốc.
  - Khi $a_t \cdot v > 0$: Điểm chuyển động nhanh dần.
  - Khi $a_t \cdot v < 0$: Điểm chuyển động chậm dần.
  - Khi $a_t = 0$: Điểm chuyển động đều ($v = \text{const}$).

- **Gia tốc pháp tuyến $\vec{a}_n$:**
  $$a_n = \frac{v^2}{\rho} = \frac{\dot{s}^2}{\rho} \tag{1-15}$$
  Đặc trưng cho **sự biến thiên về phương** của véctơ vận tốc.
  - $\vec{a}_n$ luôn hướng về tâm chính khúc của quỹ đạo.
  - Đối với chuyển động thẳng ($\rho \to \infty$): $a_n = 0$.
:::

Độ lớn của gia tốc toàn phần:

$$a = \sqrt{a_t^2 + a_n^2} = \sqrt{\ddot{s}^2 + \left(\frac{\dot{s}^2}{\rho}\right)^2} \tag{1-16}$$

Góc $\mu$ giữa véctơ gia tốc toàn phần $\vec{a}$ và tiếp tuyến $\vec{\tau}$:

$$\tan \mu = \frac{a_n}{|a_t|} = \frac{v^2}{\rho |\ddot{s}|} \tag{1-17}$$

---

## 1.4. Phương Pháp Tọa Độ Cực (Trong Mặt Phẳng)

Vị trí của điểm $M$ trên mặt phẳng được xác định bởi bán kính cực $r$ và góc cực $\theta$:

$$\begin{cases} r = r(t) \\ \theta = \theta(t) \end{cases} \tag{1-18}$$

### 1.4.1. Vận Tốc Trong Tọa Độ Cực

$$\vec{v} = v_r \vec{e}_r + v_{\theta} \vec{e}_{\theta} \tag{1-19}$$

trong đó:
- $v_r = \dot{r}$ (thành phần vận tốc dọc tia).
- $v_{\theta} = r\dot{\theta}$ (thành phần vận tốc ngang / vận tốc góc).

Độ lớn vận tốc:

$$v = \sqrt{\dot{r}^2 + (r\dot{\theta})^2} \tag{1-20}$$

---

### 1.4.2. Gia Tốc Trong Tọa Độ Cực

$$\vec{a} = a_r \vec{e}_r + a_{\theta} \vec{e}_{\theta} \tag{1-21}$$

trong đó:
- $a_r = \ddot{r} - r\dot{\theta}^2$ (thành phần gia tốc dọc tia).
- $a_{\theta} = r\ddot{\theta} + 2\dot{r}\dot{\theta} = \frac{1}{r}\frac{d}{dt}(r^2\dot{\theta})$ (thành phần gia tốc ngang).

Độ lớn gia tốc:

$$a = \sqrt{a_r^2 + a_{\theta}^2} \tag{1-22}$$

---

## 1.5. Một Số Chuyển Động Đặc Biệt

### 1.5.1. Chuyển Động Thẳng
Quỹ đạo là đường thẳng ($\rho = \infty \implies a_n = 0, a = a_t = \ddot{s}$).
- **Chuyển động thẳng đều:** $a = 0 \implies v = \text{const} \implies s = s_0 + v t$.
- **Chuyển động thẳng biến đổi đều:** $a = \text{const}$:
  $$v = v_0 + a t; \quad s = s_0 + v_0 t + \frac{1}{2} a t^2; \quad v^2 - v_0^2 = 2a(s - s_0) \tag{1-23}$$

### 1.5.2. Chuyển Động Tròn
Quỹ đạo là đường tròn bán kính $R = \text{const}$ ($\rho = R$). Tọa độ cong $s = R \cdot \theta(t)$.
- Vận tốc góc: $\omega = \dot{\theta} = \frac{d\theta}{dt}$.
- Gia tốc góc: $\varepsilon = \dot{\omega} = \ddot{\theta} = \frac{d^2\theta}{dt^2}$.
- Vận tốc dài: $v = R \cdot \omega$.
- Gia tốc tiếp tuyến: $a_t = R \cdot \varepsilon$.
- Gia tốc pháp tuyến (gia tốc hướng tâm): $a_n = \frac{v^2}{R} = R \cdot \omega^2$.
- Gia tốc toàn phần: $a = R \sqrt{\varepsilon^2 + \omega^4}$.
