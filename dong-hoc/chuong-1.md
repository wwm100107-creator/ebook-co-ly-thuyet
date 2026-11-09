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

<div class="figure-caption">

Hình 1-1: Quỹ đạo, vận tốc $\vec{v}$ và gia tốc $\vec{a}$ của điểm

</div>

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

<div class="figure-caption">

Hình 1-2: Hệ trục tọa độ tự nhiên $(\vec{\tau}, \vec{n}, \vec{b})$

</div>

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

---

### Thí dụ 1-1: Khảo sát chuyển động Elip và lập đường đầu mút vận tốc (Hodograph)

**Đề bài:**
Chuyển động của điểm $M$ trong mặt phẳng $Oxy$ được xác định bởi phương trình:
$$x = b \sin\omega t, \quad y = d \cos\omega t \tag{1-24}$$
trong đó $b, d, \omega$ là các hằng số dương.
1. Hãy xác định phương trình quỹ đạo của điểm $M$.
2. Xác định độ lớn vận tốc và gia tốc của điểm $M$ tại thời điểm $t_1 = \frac{\pi}{2\omega}$.
3. Xác định phương trình và hình dạng đường đầu mút của vectơ vận tốc (hodograph).

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_1_5.svg" alt="Hình 1-5: Quỹ đạo Elip và đường đầu mút vectơ vận tốc (Hodograph)" style="max-width: 680px;" />
  <div class="figure-caption">

Hình 1-5: Quỹ đạo Elip của điểm $M$ và đường đầu mút vectơ vận tốc (Hodograph)

</div>
</div>

**Bài giải:**

**1. Phương trình quỹ đạo:**
Từ phương trình chuyển động (1-24), ta suy ra:
$$\sin\omega t = \frac{x}{b}, \quad \cos\omega t = \frac{y}{d}$$

Áp dụng đồng nhất thức lượng giác $\sin^2\omega t + \cos^2\omega t = 1$, ta nhận được phương trình quỹ đạo:
$$\frac{x^2}{b^2} + \frac{y^2}{d^2} = 1$$
Đây là phương trình của một đường elip có các bán trục tương ứng là $b$ và $d$ nằm trên hai trục tọa độ $Ox$ và $Oy$ (Hình 1-5a).

**2. Vận tốc và gia tốc tại thời điểm $t_1 = \frac{\pi}{2\omega}$:**
Đạo hàm các hàm tọa độ theo thời gian $t$:
- Các thành phần vận tốc:
  $$v_x = \dot{x} = b\omega \cos\omega t, \quad v_y = \dot{y} = -d\omega \sin\omega t$$
- Các thành phần gia tốc:
  $$a_x = \ddot{x} = -b\omega^2 \sin\omega t = -\omega^2 x, \quad a_y = \ddot{y} = -d\omega^2 \cos\omega t = -\omega^2 y$$

Nhận xét: $\vec{a} = a_x \vec{i} + a_y \vec{j} = -\omega^2 (x\vec{i} + y\vec{j}) = -\omega^2 \vec{r}$, nghĩa là vectơ gia tốc luôn hướng về gốc tọa độ $O$ (lực hướng tâm).

Tại thời điểm $t_1 = \frac{\pi}{2\omega}$:
$$\omega t_1 = \frac{\pi}{2} \implies \sin\omega t_1 = 1, \quad \cos\omega t_1 = 0$$
Tọa độ điểm $M$: $x(t_1) = b, \; y(t_1) = 0$ (điểm $M$ ở đầu trục lớn trên trục $Ox$).
Vận tốc:
$$v_{1x} = 0, \quad v_{1y} = -d\omega \implies v(t_1) = |v_{1y}| = d\omega$$
Gia tốc:
$$a_{1x} = -b\omega^2, \quad a_{1y} = 0 \implies a(t_1) = |-b\omega^2| = b\omega^2$$

**3. Đường đầu mút của vectơ vận tốc (Hodograph):**
Để lập phương trình đường đầu mút vận tốc, ta đặt gốc hệ tọa độ mới $O_1 x_1 y_1$ sao cho:
$$x_1 = v_x = b\omega \cos\omega t, \quad y_1 = v_y = -d\omega \sin\omega t$$
Khử tham số $t$:
$$\frac{x_1^2}{(b\omega)^2} + \frac{y_1^2}{(d\omega)^2} = \cos^2\omega t + \sin^2\omega t = 1$$
Đây cũng là một đường elip với các bán trục là $b\omega$ trên trục $x_1$ và $d\omega$ trên trục $y_1$ (Hình 1-5b).

---

### Thí dụ 1-2: Tính bán kính cong của quỹ đạo không gian

**Đề bài:**
Cho một điểm chuyển động trong không gian theo quy luật:
$$x = t - \sin t, \quad y = 1 - \cos t, \quad z = 4\sin\frac{t}{2}$$
Xác định bán kính cong $\rho$ của quỹ đạo theo thời gian $t$.

**Bài giải:**

Lấy đạo hàm các tọa độ theo thời gian $t$:
$$\dot{x} = 1 - \cos t, \quad \dot{y} = \sin t, \quad \dot{z} = 2\cos\frac{t}{2}$$

Bình phương vận tốc toàn phần:
$$v^2 = \dot{x}^2 + \dot{y}^2 + \dot{z}^2 = (1 - \cos t)^2 + \sin^2 t + 4\cos^2\frac{t}{2}$$
Biến đổi lượng giác:
$$(1 - \cos t)^2 + \sin^2 t = 1 - 2\cos t + \cos^2 t + \sin^2 t = 2(1 - \cos t) = 4\sin^2\frac{t}{2}$$
Do đó:
$$v^2 = 4\sin^2\frac{t}{2} + 4\cos^2\frac{t}{2} = 4(\sin^2\frac{t}{2} + \cos^2\frac{t}{2}) = 4 \implies v = 2 = \text{const}$$

Vì độ lớn vận tốc $v$ không đổi theo thời gian ($v = \text{const}$), nên gia tốc tiếp tuyến triệt tiêu:
$$a_t = \frac{dv}{dt} = 0$$

Gia tốc toàn phần chính là gia tốc pháp tuyến:
$$a = a_n = \frac{v^2}{\rho}$$
Mặt khác, tính đạo hàm cấp hai:
$$\ddot{x} = \sin t, \quad \ddot{y} = \cos t, \quad \ddot{z} = -\sin\frac{t}{2}$$
Độ lớn gia tốc toàn phần:
$$a^2 = \ddot{x}^2 + \ddot{y}^2 + \ddot{z}^2 = \sin^2 t + \cos^2 t + \sin^2\frac{t}{2} = 1 + \sin^2\frac{t}{2}$$

Từ $a_n = \frac{v^2}{\rho} = a$, ta suy ra biểu thức bán kính cong:
$$\rho = \frac{v^2}{a_n} = \frac{4}{\sqrt{1 + \sin^2(t/2)}}$$

---

### Thí dụ 1-3: Quỹ đạo ném xiên và các đặc trưng động học

**Đề bài:**
Trong mặt phẳng thẳng đứng $Oxy$, điểm $M$ chuyển động theo phương trình:
$$x = (v_0 \cos\alpha) t, \quad y = (v_0 \sin\alpha) t - \frac{1}{2}gt^2$$
trong đó $v_0, \alpha, g$ là các hằng số dương đã biết.
1. Tìm phương trình quỹ đạo của điểm $M$.
2. Tìm vận tốc, gia tốc và bán kính cong của quỹ đạo ứng với lúc $t = 0$ và lúc điểm $M$ đạt vị trí cao nhất.

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_1_13.svg" alt="Hình 1-13: Quỹ đạo ném xiên Parabol" style="max-width: 580px;" />
  <div class="figure-caption">

Hình 1-13: Khảo sát vận tốc, gia tốc và bán kính cong của quỹ đạo ném xiên Parabol

</div>
</div>

**Bài giải:**

**1. Phương trình quỹ đạo:**
Rút $t$ từ phương trình hoành độ $t = \frac{x}{v_0 \cos\alpha}$ thay vào phương trình tung độ:
$$y = x \tan\alpha - \frac{g}{2 v_0^2 \cos^2\alpha} x^2$$
Đây là phương trình một parabol có bề lõm quay xuống phía dưới (Hình 1-13).

**2. Vận tốc và gia tốc:**
Đạo hàm theo thời gian:
$$v_x = \dot{x} = v_0 \cos\alpha, \quad v_y = \dot{y} = v_0 \sin\alpha - gt$$
$$a_x = \ddot{x} = 0, \quad a_y = \ddot{y} = -g \implies a = g = \text{const}$$

Vectơ gia tốc $\vec{a}$ thẳng đứng hướng xuống dưới với độ lớn bằng $g$.
Độ lớn vận tốc tại thời điểm $t$ bất kỳ:
$$v = \sqrt{v_x^2 + v_y^2} = \sqrt{v_0^2 \cos^2\alpha + (v_0 \sin\alpha - gt)^2}$$

Thành phần gia tốc tiếp:
$$a_t = \frac{dv}{dt} = \frac{-g(v_0 \sin\alpha - gt)}{\sqrt{v_0^2 \cos^2\alpha + (v_0 \sin\alpha - gt)^2}}$$
Gia tốc pháp:
$$a_n = \sqrt{a^2 - a_t^2} = \sqrt{g^2 - a_t^2} = \frac{g v_0 \cos\alpha}{v}$$
Bán kính cong:
$$\rho = \frac{v^2}{a_n} = \frac{v^3}{g v_0 \cos\alpha} = \frac{\left[v_0^2 \cos^2\alpha + (v_0 \sin\alpha - gt)^2
\right]^{3/2}}{g v_0 \cos\alpha}$$

**3. Xét tại các thời điểm đặc biệt:**
- **Tại thời điểm ban đầu $t = 0$:**
  $$v(0) = v_0$$
  $$a_t(0) = -g \sin\alpha, \quad a_n(0) = g \cos\alpha$$
  $$\rho(0) = \frac{v_0^2}{g \cos\alpha}$$
- **Tại đỉnh quỹ đạo (vị trí cao nhất $H$):**
  Lúc này vectơ vận tốc nằm ngang $\implies v_y = v_0 \sin\alpha - gt_H = 0 \implies t_H = \frac{v_0 \sin\alpha}{g}$.
  Vận tốc tại đỉnh: $v_H = v_x = v_0 \cos\alpha$.
  Gia tốc tiếp triệt tiêu: $a_t = 0$.
  Gia tốc pháp bằng toàn bộ gia tốc trọng trường: $a_n = g$.
  Bán kính cong tại đỉnh parabol:
  $$\rho_H = \frac{v_H^2}{g} = \frac{v_0^2 \cos^2\alpha}{g}$$

---

### Thí dụ 1-4: Chuyển động trên đường đinh ốc trụ (Helical Path)

**Đề bài:**
Cho điểm $M$ chuyển động theo quy luật đường đinh ốc:
$$x = r \cos\varphi, \quad y = r \sin\varphi, \quad z = p \varphi \tag{1-25}$$
trong đó $r$ và $p$ là các hằng số dương, $\varphi = \varphi(t)$.
1. Tìm vận tốc, gia tốc của điểm $M$.
2. Xét trường hợp $\varphi = \omega_0 t$ (với $\omega_0 = \text{const}$), tính bán kính cong của quỹ đạo.

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_1_14.svg" alt="Hình 1-14: Chuyển động đinh ốc trên mặt trụ" style="max-width: 500px;" />
  <div class="figure-caption">

Hình 1-14: Quỹ đạo đinh ốc (Helical Path) trên mặt trụ bán kính $r$ và bước đinh ốc $h = 2\pi p$

</div>
</div>

**Bài giải:**

**1. Khảo sát hình học và bước đinh ốc:**
Hình chiếu của quỹ đạo lên mặt phẳng $Oxy$ là đường tròn tâm $O$ bán kính $r$:
$$x^2 + y^2 = r^2 \cos^2\varphi + r^2 \sin^2\varphi = r^2$$
Khi điểm hình chiếu $M'$ quay được đúng một vòng trên mặt phẳng đáy ($\Delta\varphi = 2\pi$), độ dời dọc trục $z$ là một đoạn không đổi gọi là bước của đường đinh ốc:
$$h = 2\pi p$$

Góc nghiêng $\gamma$ của tiếp tuyến quỹ đạo so với mặt phẳng đáy $Oxy$:
$$\cos\gamma = \frac{\sqrt{\dot{x}^2 + \dot{y}^2}}{v} = \frac{r}{\sqrt{r^2 + p^2}} = \text{const}$$
Như vậy, đường đinh ốc tạo với mặt đáy một góc nghiêng không đổi.

**2. Vận tốc và gia tốc tổng quát:**
Đạo hàm theo thời gian:
$$v_x = \dot{x} = -r \dot{\varphi} \sin\varphi, \quad v_y = \dot{y} = r \dot{\varphi} \cos\varphi, \quad v_z = \dot{z} = p \dot{\varphi}$$
Vận tốc toàn phần:
$$v = \sqrt{v_x^2 + v_y^2 + v_z^2} = \sqrt{r^2 \dot{\varphi}^2 + p^2 \dot{\varphi}^2} = \dot{\varphi} \sqrt{r^2 + p^2}$$

Các thành phần gia tốc:
$$a_x = \ddot{x} = -r \ddot{\varphi} \sin\varphi - r \dot{\varphi}^2 \cos\varphi$$
$$a_y = \ddot{y} = r \ddot{\varphi} \cos\varphi - r \dot{\varphi}^2 \sin\varphi$$
$$a_z = \ddot{z} = p \ddot{\varphi}$$

**3. Trường hợp $\varphi = \omega_0 t$ ($\omega_0 = \text{const}$):**
Khi $\varphi = \omega_0 t$, ta có $\dot{\varphi} = \omega_0, \; \ddot{\varphi} = 0$.
- Vận tốc có độ lớn không đổi:
  $$v = \omega_0 \sqrt{r^2 + p^2} = \text{const} \implies a_t = \frac{dv}{dt} = 0$$
- Gia tốc:
  $$a_x = -r \omega_0^2 \cos\omega_0 t = -\omega_0^2 x$$
  $$a_y = -r \omega_0^2 \sin\omega_0 t = -\omega_0^2 y$$
  $$a_z = 0$$
  Độ lớn gia tốc:
  $$a = a_n = \sqrt{a_x^2 + a_y^2} = r \omega_0^2$$
  Vectơ gia tốc $\vec{a}$ nằm song song với mặt phẳng $Oxy$, vuông góc với trục $z$ và hướng về trục đối xứng của hình trụ.

- Bán kính cong của đường đinh ốc:
  $$\rho = \frac{v^2}{a_n} = \frac{\omega_0^2 (r^2 + p^2)}{r \omega_0^2} = \frac{r^2 + p^2}{r} = r + \frac{p^2}{r}$$
  Kết quả cho thấy bán kính cong $\rho$ của đường đinh ốc trụ là một đại lượng không đổi trên toàn bộ quỹ đạo.
