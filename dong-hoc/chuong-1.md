# Chương 1: Động Học Điểm

Động học điểm nghiên cứu các quy luật chuyển động hình học của một chất điểm trong không gian theo thời gian mà không xét đến lực tác dụng.

---

## 1.1. Phương Pháp Véctơ

Vị trí của điểm $\rho$M$\rho$ chuyển động trong không gian tại thời điểm $\rho$t$\rho$ đối với gốc tọa độ cố định $\rho$O$\rho$ được xác định bằng bán kính véctơ:

$\rho$$\rho$\vec{r} = \vec{OM} = \vec{r}(t) \tag{1-1}$\rho$$\rho$

Phương trình $\rho$(1-1)$\rho$ được gọi là **phương trình chuyển động dạng véctơ** của điểm.

Đường cong do mút của bán kính véctơ $\rho$\vec{r}(t)$\rho$ vạch nên trong không gian được gọi là **quỹ đạo** của điểm chuyển động.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_1.svg" alt="Hình 1-1: Khảo sát chuyển động của điểm bằng phương pháp vectơ" style="max-height: 260px;" />

<div class="figure-caption">

Hình 1-1: Quỹ đạo, vận tốc $\rho$\vec{v}$\rho$ và gia tốc $\rho$\vec{a}$\rho$ của điểm

</div>

</div>

### 1.1.1. Vận Tốc Của Điểm
Tại thời điểm $\rho$t$\rho$, điểm ở vị trí $\rho$M$\rho$ có bán kính véctơ $\rho$\vec{r}$\rho$. Tại thời điểm $\rho$t + \Delta t$\rho$, điểm chuyển đến vị trí $\rho$M_1$\rho$ có bán kính véctơ $\rho$\vec{r} + \Delta\vec{r}$\rho$. Véctơ độ dời: $\rho$\Delta\vec{r} = \vec{MM}_1$\rho$.

Vận tốc trung bình trong khoảng thời gian $\rho$\Delta t$\rho$:

$\rho$$\rho$\vec{v}_{\text{tb}} = \frac{\Delta\vec{r}}{\Delta t}$\rho$$\rho$

::: tip Vận tốc tức thời
Vận tốc tức thời của điểm tại thời điểm $\rho$t$\rho$ là đạo hàm bậc nhất của bán kính véctơ $\rho$\vec{r}$\rho$ theo thời gian:

$\rho$$\rho$\vec{v} = \lim_{\Delta t \to 0} \frac{\Delta\vec{r}}{\Delta t} = \frac{d\vec{r}}{dt} = \dot{\vec{r}} \tag{1-2}$\rho$$\rho$
:::

- **Phương:** Trùng với tiếp tuyến của quỹ đạo tại điểm $\rho$M$\rho$.
- **Chiều:** Hướng theo chiều chuyển động của điểm.
- **Độ lớn:** Bằng tốc độ biến thiên vị trí của điểm theo thời gian.

---

### 1.1.2. Gia Tốc Của Điểm
Gia tốc đặc trưng cho sự biến đổi cả về độ lớn và phương chiều của véctơ vận tốc theo thời gian.

::: tip Gia tốc tức thời
Gia tốc tức thời của điểm tại thời điểm $\rho$t$\rho$ là đạo hàm bậc nhất của véctơ vận tốc $\rho$\vec{v}$\rho$ hoặc đạo hàm bậc hai của bán kính véctơ $\rho$\vec{r}$\rho$ theo thời gian:

$\rho$$\rho$\vec{a} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2} = \ddot{\vec{r}} \tag{1-3}$\rho$$\rho$
:::

- Véctơ gia tốc $\rho$\vec{a}$\rho$ luôn nằm trong mặt phẳng mật tiếp và hướng về phía lõm của đường cong quỹ đạo.

---

## 1.2. Phương Pháp Tọa Độ Đề Các (Descartes)

Gắn vào hệ quy chiếu một hệ trục tọa độ Descartes vuông góc $\rho$Oxyz$\rho$. Vị trí của điểm $\rho$M$\rho$ được xác định bởi bộ ba tọa độ:

$\rho$$\rho$\vec{r}(t) = x(t)\vec{i} + y(t)\vec{j} + z(t)\vec{k}$\rho$$\rho$

### 1.2.1. Phương Trình Chuyển Động và Phương Trình Quỹ Đạo

- **Phương trình chuyển động:**
  $\rho$$\rho$\begin{cases} x = x(t) \\ y = y(t) \\ z = z(t) \end{cases} \tag{1-4}$\rho$$\rho$

- **Phương trình quỹ đạo:** Khử biến số thời gian $\rho$t$\rho$ từ hệ $\rho$(1-4)$\rho$, ta nhận được phương trình quỹ đạo dưới dạng giao tuyến của hai mặt cong:
  $\rho$$\rho$\begin{cases} f_1(x, y, z) = 0 \\ f_2(x, y, z) = 0 \end{cases}$\rho$$\rho$

---

### 1.2.2. Vận Tốc Của Điểm

Chiếu véctơ vận tốc $\rho$\vec{v} = \dot{\vec{r}}$\rho$ lên ba trục tọa độ:

$\rho$$\rho$v_x = \dot{x} = \frac{dx}{dt}; \quad v_y = \dot{y} = \frac{dy}{dt}; \quad v_z = \dot{z} = \frac{dz}{dt} \tag{1-5}$\rho$$\rho$

Độ lớn của vận tốc:

$\rho$$\rho$v = \sqrt{v_x^2 + v_y^2 + v_z^2} = \sqrt{\dot{x}^2 + \dot{y}^2 + \dot{z}^2} \tag{1-6}$\rho$$\rho$

Các cosin chỉ phương của véctơ vận tốc:

$\rho$$\rho$\cos(\vec{v}, Ox) = \frac{\dot{x}}{v}; \quad \cos(\vec{v}, Oy) = \frac{\dot{y}}{v}; \quad \cos(\vec{v}, Oz) = \frac{\dot{z}}{v} \tag{1-7}$\rho$$\rho$

---

### 1.2.3. Gia Tốc Của Điểm

Chiếu véctơ gia tốc $\rho$\vec{a} = \ddot{\vec{r}}$\rho$ lên ba trục tọa độ:

$\rho$$\rho$a_x = \ddot{x} = \frac{d^2 x}{dt^2}; \quad a_y = \ddot{y} = \frac{d^2 y}{dt^2}; \quad a_z = \ddot{z} = \frac{d^2 z}{dt^2} \tag{1-8}$\rho$$\rho$

Độ lớn của gia tốc:

$\rho$$\rho$a = \sqrt{a_x^2 + a_y^2 + a_z^2} = \sqrt{\ddot{x}^2 + \ddot{y}^2 + \ddot{z}^2} \tag{1-9}$\rho$$\rho$

Các cosin chỉ phương của véctơ gia tốc:

$\rho$$\rho$\cos(\vec{a}, Ox) = \frac{\ddot{x}}{a}; \quad \cos(\vec{a}, Oy) = \frac{\ddot{y}}{a}; \quad \cos(\vec{a}, Oz) = \frac{\ddot{z}}{a} \tag{1-10}$\rho$$\rho$

---

## 1.3. Phương Pháp Tọa Độ Tự Nhiên

Phương pháp này được sử dụng khi **quỹ đạo của điểm đã biết trước**.

Trên quỹ đạo đã biết, chọn một điểm gốc $\rho$O$\rho$, chọn một chiều quy ước làm chiều dương, và xác định vị trí của điểm $\rho$M$\rho$ bằng tọa độ cong (cung đại số) $\rho$s = \overset{\large\frown}{OM}$\rho$:

$\rho$$\rho$s = s(t) \tag{1-11}$\rho$$\rho$

Phương trình $\rho$(1-11)$\rho$ được gọi là **phương trình chuyển động của điểm theo quỹ đạo**.

### 1.3.1. Hệ Trục Tọa Độ Tự Nhiên (Tam Diện Frenet)

Tại mỗi điểm $\rho$M$\rho$ trên quỹ đạo, ta gắn hệ tam diện trực chuẩn gồm ba véctơ đơn vị:
- $\rho$\vec{\tau}$\rho$: Véctơ đơn vị **tiếp tuyến**, tiếp xúc với quỹ đạo tại $\rho$M$\rho$ và hướng theo chiều dương của cung $\rho$s$\rho$.
- $\rho$\vec{n}$\rho$: Véctơ đơn vị **pháp tuyến chính**, nằm trong mặt phẳng mật tiếp tại $\rho$M$\rho$, vuông góc với $\rho$\vec{\tau}$\rho$ và luôn hướng về phía lõm của quỹ đạo.
- $\rho$\vec{b} = \vec{\tau} \times \vec{n}$\rho$: Véctơ đơn vị **trùng pháp tuyến**, vuông góc với mặt phẳng mật tiếp.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_2.svg" alt="Hình 1-2: Tam diện tự nhiên Frenet" style="max-height: 270px;" />

<div class="figure-caption">

Hình 1-2: Hệ trục tọa độ tự nhiên $\rho$(\vec{\tau}, \vec{n}, \vec{b})$\rho$

</div>

</div>

---

### 1.3.2. Vận Tốc Trong Hệ Tọa Độ Tự Nhiên

Vì vận tốc luôn tiếp tuyến với quỹ đạo:

$\rho$$\rho$\vec{v} = v_{\tau} \vec{\tau} = \frac{ds}{dt} \vec{\tau} = \dot{s} \vec{\tau} \tag{1-12}$\rho$$\rho$

Độ lớn của vận tốc: $\rho$v = |\dot{s}|$\rho$. Vận tốc đại số $\rho$v_{\tau} = \dot{s}$\rho$ mang dấu dương khi điểm chuyển động theo chiều dương và âm khi chuyển động ngược lại.

---

### 1.3.3. Gia Tốc Trong Hệ Tọa Độ Tự Nhiên

Lấy đạo hàm của véctơ vận tốc theo thời gian:

$\rho$$\rho$\vec{a} = \frac{d\vec{v}}{dt} = \frac{d}{dt}(\dot{s}\vec{\tau}) = \ddot{s}\vec{\tau} + \dot{s}\frac{d\vec{\tau}}{dt}$\rho$$\rho$

Theo công thức vi phân Frenet: $\rho$\frac{d\vec{\tau}}{ds} = \frac{1}{\rho}\vec{n}$\rho$ (với $\rho$\rho$\rho$ là bán kính chính khúc của quỹ đạo tại $\rho$M$\rho$), do đó:

$\rho$$\rho$\frac{d\vec{\tau}}{dt} = \frac{d\vec{\tau}}{ds} \frac{ds}{dt} = \frac{\dot{s}}{\rho}\vec{n} = \frac{v}{\rho}\vec{n}$\rho$$\rho$

Thay vào, ta nhận được:

$\rho$$\rho$\vec{a} = \vec{a}_t + \vec{a}_n = a_t \vec{\tau} + a_n \vec{n} \tag{1-13}$\rho$$\rho$

::: tip Thành phần gia tốc tiếp tuyến và pháp tuyến
- **Gia tốc tiếp tuyến $\rho$\vec{a}_t$\rho$:**
  $\rho$$\rho$a_t = \frac{dv}{dt} = \ddot{s} \tag{1-14}$\rho$$\rho$
  Đặc trưng cho **sự biến thiên về độ lớn** của véctơ vận tốc.
  - Khi $\rho$a_t \cdot v > 0$\rho$: Điểm chuyển động nhanh dần.
  - Khi $\rho$a_t \cdot v < 0$\rho$: Điểm chuyển động chậm dần.
  - Khi $\rho$a_t = 0$\rho$: Điểm chuyển động đều ($\rho$v = \text{const}$\rho$).

- **Gia tốc pháp tuyến $\rho$\vec{a}_n$\rho$:**
  $\rho$$\rho$a_n = \frac{v^2}{\rho} = \frac{\dot{s}^2}{\rho} \tag{1-15}$\rho$$\rho$
  Đặc trưng cho **sự biến thiên về phương** của véctơ vận tốc.
  - $\rho$\vec{a}_n$\rho$ luôn hướng về tâm chính khúc của quỹ đạo.
  - Đối với chuyển động thẳng ($\rho$\rho \to \infty$\rho$): $\rho$a_n = 0$\rho$.
:::

Độ lớn của gia tốc toàn phần:

$\rho$$\rho$a = \sqrt{a_t^2 + a_n^2} = \sqrt{\ddot{s}^2 + \left(\frac{\dot{s}^2}{\rho}\right)^2} \tag{1-16}$\rho$$\rho$

Góc $\rho$\mu$\rho$ giữa véctơ gia tốc toàn phần $\rho$\vec{a}$\rho$ và tiếp tuyến $\rho$\vec{\tau}$\rho$:

$\rho$$\rho$\tan \mu = \frac{a_n}{|a_t|} = \frac{v^2}{\rho |\ddot{s}|} \tag{1-17}$\rho$$\rho$

---

## 1.4. Phương Pháp Tọa Độ Cực (Trong Mặt Phẳng)

Vị trí của điểm $\rho$M$\rho$ trên mặt phẳng được xác định bởi bán kính cực $\rho$r$\rho$ và góc cực $\rho$\theta$\rho$:

$\rho$$\rho$\begin{cases} r = r(t) \\ \theta = \theta(t) \end{cases} \tag{1-18}$\rho$$\rho$

### 1.4.1. Vận Tốc Trong Tọa Độ Cực

$\rho$$\rho$\vec{v} = v_r \vec{e}_r + v_{\theta} \vec{e}_{\theta} \tag{1-19}$\rho$$\rho$

trong đó:
- $\rho$v_r = \dot{r}$\rho$ (thành phần vận tốc dọc tia).
- $\rho$v_{\theta} = r\dot{\theta}$\rho$ (thành phần vận tốc ngang / vận tốc góc).

Độ lớn vận tốc:

$\rho$$\rho$v = \sqrt{\dot{r}^2 + (r\dot{\theta})^2} \tag{1-20}$\rho$$\rho$

---

### 1.4.2. Gia Tốc Trong Tọa Độ Cực

$\rho$$\rho$\vec{a} = a_r \vec{e}_r + a_{\theta} \vec{e}_{\theta} \tag{1-21}$\rho$$\rho$

trong đó:
- $\rho$a_r = \ddot{r} - r\dot{\theta}^2$\rho$ (thành phần gia tốc dọc tia).
- $\rho$a_{\theta} = r\ddot{\theta} + 2\dot{r}\dot{\theta} = \frac{1}{r}\frac{d}{dt}(r^2\dot{\theta})$\rho$ (thành phần gia tốc ngang).

Độ lớn gia tốc:

$\rho$$\rho$a = \sqrt{a_r^2 + a_{\theta}^2} \tag{1-22}$\rho$$\rho$

---

## 1.5. Một Số Chuyển Động Đặc Biệt

### 1.5.1. Chuyển Động Thẳng
Quỹ đạo là đường thẳng ($\rho$\rho = \infty \implies a_n = 0, a = a_t = \ddot{s}$\rho$).
- **Chuyển động thẳng đều:** $\rho$a = 0 \implies v = \text{const} \implies s = s_0 + v t$\rho$.
- **Chuyển động thẳng biến đổi đều:** $\rho$a = \text{const}$\rho$:
  $\rho$$\rho$v = v_0 + a t; \quad s = s_0 + v_0 t + \frac{1}{2} a t^2; \quad v^2 - v_0^2 = 2a(s - s_0) \tag{1-23}$\rho$$\rho$

### 1.5.2. Chuyển Động Tròn
Quỹ đạo là đường tròn bán kính $\rho$R = \text{const}$\rho$ ($\rho$\rho = R$\rho$). Tọa độ cong $\rho$s = R \cdot \theta(t)$\rho$.
- Vận tốc góc: $\rho$\omega = \dot{\theta} = \frac{d\theta}{dt}$\rho$.
- Gia tốc góc: $\rho$\varepsilon = \dot{\omega} = \ddot{\theta} = \frac{d^2\theta}{dt^2}$\rho$.
- Vận tốc dài: $\rho$v = R \cdot \omega$\rho$.
- Gia tốc tiếp tuyến: $\rho$a_t = R \cdot \varepsilon$\rho$.
- Gia tốc pháp tuyến (gia tốc hướng tâm): $\rho$a_n = \frac{v^2}{R} = R \cdot \omega^2$\rho$.
- Gia tốc toàn phần: $\rho$a = R \sqrt{\varepsilon^2 + \omega^4}$\rho$.


---

## 1.6. Các Thí Dụ Áp Dụng (Bài Tập Mẫu)

::: tip Ý NGHĨA PHƯƠNG PHÁP
Các thí dụ trong chương này rèn luyện kỹ năng khảo sát chuyển động của điểm bằng cả ba phương pháp: phương pháp vectơ, phương pháp tọa độ Đề-các và phương pháp tọa độ tự nhiên, cũng như kỹ thuật khử tham số thời gian để tìm quỹ đạo và lập biểu thức gia tốc toàn phần.
:::

### Thí dụ 1-1: Khảo sát chuyển động Elip và lập đường đầu mút vận tốc (Hodograph)

**Đề bài:**
Chuyển động của điểm $\rho$M$\rho$ trong mặt phẳng $\rho$Oxy$\rho$ được xác định bởi phương trình:
$\rho$$\rho$x = b \sin\omega t, \quad y = d \cos\omega t 	ag{1-24}$\rho$$\rho$
trong đó $\rho$b, d, \omega$\rho$ là các hằng số dương.
1. Hãy xác định phương trình quỹ đạo của điểm $\rho$M$\rho$.
2. Xác định độ lớn vận tốc và gia tốc của điểm $\rho$M$\rho$ tại thời điểm $\rho$t_1 = \frac{\pi}{2\omega}$\rho$.
3. Xác định phương trình và hình dạng đường đầu mút của vectơ vận tốc (hodograph).

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_1_5.svg" alt="Hình 1-5: Quỹ đạo Elip và đường đầu mút vectơ vận tốc (Hodograph)" style="max-width: 680px;" />
  <div class="figure-caption">Hình 1-5: Quỹ đạo Elip của điểm $\rho$M$\rho$ và đường đầu mút vectơ vận tốc (Hodograph)</div>
</div>

**Bài giải:**

**1. Phương trình quỹ đạo:**
Từ phương trình chuyển động (1-24), ta suy ra:
$\rho$$\rho$\sin\omega t = \frac{x}{b}, \quad \cos\omega t = \frac{y}{d}$\rho$$\rho$

Áp dụng đồng nhất thức lượng giác $\rho$\sin^2\omega t + \cos^2\omega t = 1$\rho$, ta nhận được phương trình quỹ đạo:
$\rho$$\rho$\frac{x^2}{b^2} + \frac{y^2}{d^2} = 1$\rho$$\rho$
Đây là phương trình của một đường elip có các bán trục tương ứng là $\rho$b$\rho$ và $\rho$d$\rho$ nằm trên hai trục tọa độ $\rho$Ox$\rho$ và $\rho$Oy$\rho$ (Hình 1-5a).

**2. Vận tốc và gia tốc tại thời điểm $\rho$t_1 = \frac{\pi}{2\omega}$\rho$:**
Đạo hàm các hàm tọa độ theo thời gian $\rho$t$\rho$:
- Các thành phần vận tốc:
  $\rho$$\rho$v_x = \dot{x} = b\omega \cos\omega t, \quad v_y = \dot{y} = -d\omega \sin\omega t$\rho$$\rho$
- Các thành phần gia tốc:
  $\rho$$\rho$a_x = \ddot{x} = -b\omega^2 \sin\omega t = -\omega^2 x, \quad a_y = \ddot{y} = -d\omega^2 \cos\omega t = -\omega^2 y$\rho$$\rho$

Nhận xét: $\rho$ec{a} = a_x ec{i} + a_y ec{j} = -\omega^2 (xec{i} + yec{j}) = -\omega^2 ec{r}$\rho$, nghĩa là vectơ gia tốc luôn hướng về gốc tọa độ $\rho$O$\rho$ (lực hướng tâm).

Tại thời điểm $\rho$t_1 = \frac{\pi}{2\omega}$\rho$:
$\rho$$\rho$\omega t_1 = \frac{\pi}{2} \implies \sin\omega t_1 = 1, \quad \cos\omega t_1 = 0$\rho$$\rho$
Tọa độ điểm $\rho$M$\rho$: $\rho$x(t_1) = b, \; y(t_1) = 0$\rho$ (điểm $\rho$M$\rho$ ở đầu trục lớn trên trục $\rho$Ox$\rho$).
Vận tốc:
$\rho$$\rho$v_{1x} = 0, \quad v_{1y} = -d\omega \implies v(t_1) = |v_{1y}| = d\omega$\rho$$\rho$
Gia tốc:
$\rho$$\rho$a_{1x} = -b\omega^2, \quad a_{1y} = 0 \implies a(t_1) = |-b\omega^2| = b\omega^2$\rho$$\rho$

**3. Đường đầu mút của vectơ vận tốc (Hodograph):**
Để lập phương trình đường đầu mút vận tốc, ta đặt gốc hệ tọa độ mới $\rho$O_1 x_1 y_1$\rho$ sao cho:
$\rho$$\rho$x_1 = v_x = b\omega \cos\omega t, \quad y_1 = v_y = -d\omega \sin\omega t$\rho$$\rho$
Khử tham số $\rho$t$\rho$:
$\rho$$\rho$\frac{x_1^2}{(b\omega)^2} + \frac{y_1^2}{(d\omega)^2} = \cos^2\omega t + \sin^2\omega t = 1$\rho$$\rho$
Đây cũng là một đường elip với các bán trục là $\rho$b\omega$\rho$ trên trục $\rho$x_1$\rho$ và $\rho$d\omega$\rho$ trên trục $\rho$y_1$\rho$ (Hình 1-5b).

---

### Thí dụ 1-2: Tính bán kính cong của quỹ đạo không gian

**Đề bài:**
Cho một điểm chuyển động trong không gian theo quy luật:
$\rho$$\rho$x = t - \sin t, \quad y = 1 - \cos t, \quad z = 4\sin\frac{t}{2}$\rho$$\rho$
Xác định bán kính cong $\rho$
ho$\rho$ của quỹ đạo theo thời gian $\rho$t$\rho$.

**Bài giải:**

Lấy đạo hàm các tọa độ theo thời gian $\rho$t$\rho$:
$\rho$$\rho$\dot{x} = 1 - \cos t, \quad \dot{y} = \sin t, \quad \dot{z} = 2\cos\frac{t}{2}$\rho$$\rho$

Bình phương vận tốc toàn phần:
$\rho$$\rho$v^2 = \dot{x}^2 + \dot{y}^2 + \dot{z}^2 = (1 - \cos t)^2 + \sin^2 t + 4\cos^2\frac{t}{2}$\rho$$\rho$
Biến đổi lượng giác:
$\rho$$\rho$(1 - \cos t)^2 + \sin^2 t = 1 - 2\cos t + \cos^2 t + \sin^2 t = 2(1 - \cos t) = 4\sin^2\frac{t}{2}$\rho$$\rho$
Do đó:
$\rho$$\rho$v^2 = 4\sin^2\frac{t}{2} + 4\cos^2\frac{t}{2} = 4(\sin^2\frac{t}{2} + \cos^2\frac{t}{2}) = 4 \implies v = 2 = 	ext{const}$\rho$$\rho$

Vì độ lớn vận tốc $\rho$v$\rho$ không đổi theo thời gian ($\rho$v = 	ext{const}$\rho$), nên gia tốc tiếp tuyến triệt tiêu:
$\rho$$\rho$a_t = \frac{dv}{dt} = 0$\rho$$\rho$

Gia tốc toàn phần chính là gia tốc pháp tuyến:
$\rho$$\rho$a = a_n = \frac{v^2}{
ho}$\rho$$\rho$
Mặt khác, tính đạo hàm cấp hai:
$\rho$$\rho$\ddot{x} = \sin t, \quad \ddot{y} = \cos t, \quad \ddot{z} = -\sin\frac{t}{2}$\rho$$\rho$
Độ lớn gia tốc toàn phần:
$\rho$$\rho$a^2 = \ddot{x}^2 + \ddot{y}^2 + \ddot{z}^2 = \sin^2 t + \cos^2 t + \sin^2\frac{t}{2} = 1 + \sin^2\frac{t}{2}$\rho$$\rho$

Từ $\rho$a_n = \frac{v^2}{
ho} = a$\rho$, ta suy ra biểu thức bán kính cong:
$\rho$$\rho$
ho = \frac{v^2}{a_n} = \frac{4}{\sqrt{1 + \sin^2(t/2)}}$\rho$$\rho$

---

### Thí dụ 1-3: Quỹ đạo ném xiên và các đặc trưng động học

**Đề bài:**
Trong mặt phẳng thẳng đứng $\rho$Oxy$\rho$, điểm $\rho$M$\rho$ chuyển động theo phương trình:
$\rho$$\rho$x = (v_0 \coslpha) t, \quad y = (v_0 \sinlpha) t - \frac{1}{2}gt^2$\rho$$\rho$
trong đó $\rho$v_0, lpha, g$\rho$ là các hằng số dương đã biết.
1. Tìm phương trình quỹ đạo của điểm $\rho$M$\rho$.
2. Tìm vận tốc, gia tốc và bán kính cong của quỹ đạo ứng với lúc $\rho$t = 0$\rho$ và lúc điểm $\rho$M$\rho$ đạt vị trí cao nhất.

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_1_13.svg" alt="Hình 1-13: Quỹ đạo ném xiên Parabol" style="max-width: 580px;" />
  <div class="figure-caption">Hình 1-13: Khảo sát vận tốc, gia tốc và bán kính cong của quỹ đạo ném xiên Parabol</div>
</div>

**Bài giải:**

**1. Phương trình quỹ đạo:**
Rút $\rho$t$\rho$ từ phương trình hoành độ $\rho$t = \frac{x}{v_0 \coslpha}$\rho$ thay vào phương trình tung độ:
$\rho$$\rho$y = x 	anlpha - \frac{g}{2 v_0^2 \cos^2lpha} x^2$\rho$$\rho$
Đây là phương trình một parabol có bề lõm quay xuống phía dưới (Hình 1-13).

**2. Vận tốc và gia tốc:**
Đạo hàm theo thời gian:
$\rho$$\rho$v_x = \dot{x} = v_0 \coslpha, \quad v_y = \dot{y} = v_0 \sinlpha - gt$\rho$$\rho$
$\rho$$\rho$a_x = \ddot{x} = 0, \quad a_y = \ddot{y} = -g \implies a = g = 	ext{const}$\rho$$\rho$

Vectơ gia tốc $\rho$ec{a}$\rho$ thẳng đứng hướng xuống dưới với độ lớn bằng $\rho$g$\rho$.
Độ lớn vận tốc tại thời điểm $\rho$t$\rho$ bất kỳ:
$\rho$$\rho$v = \sqrt{v_x^2 + v_y^2} = \sqrt{v_0^2 \cos^2lpha + (v_0 \sinlpha - gt)^2}$\rho$$\rho$

Thành phần gia tốc tiếp:
$\rho$$\rho$a_t = \frac{dv}{dt} = \frac{-g(v_0 \sinlpha - gt)}{\sqrt{v_0^2 \cos^2lpha + (v_0 \sinlpha - gt)^2}}$\rho$$\rho$
Gia tốc pháp:
$\rho$$\rho$a_n = \sqrt{a^2 - a_t^2} = \sqrt{g^2 - a_t^2} = \frac{g v_0 \coslpha}{v}$\rho$$\rho$
Bán kính cong:
$\rho$$\rho$
ho = \frac{v^2}{a_n} = \frac{v^3}{g v_0 \coslpha} = \frac{\left[v_0^2 \cos^2lpha + (v_0 \sinlpha - gt)^2
ight]^{3/2}}{g v_0 \coslpha}$\rho$$\rho$

**3. Xét tại các thời điểm đặc biệt:**
- **Tại thời điểm ban đầu $\rho$t = 0$\rho$:**
  $\rho$$\rho$v(0) = v_0$\rho$$\rho$
  $\rho$$\rho$a_t(0) = -g \sinlpha, \quad a_n(0) = g \coslpha$\rho$$\rho$
  $\rho$$\rho$
ho(0) = \frac{v_0^2}{g \coslpha}$\rho$$\rho$
- **Tại đỉnh quỹ đạo (vị trí cao nhất $\rho$H$\rho$):**
  Lúc này vectơ vận tốc nằm ngang $\rho$\implies v_y = v_0 \sinlpha - gt_H = 0 \implies t_H = \frac{v_0 \sinlpha}{g}$\rho$.
  Vận tốc tại đỉnh: $\rho$v_H = v_x = v_0 \coslpha$\rho$.
  Gia tốc tiếp triệt tiêu: $\rho$a_t = 0$\rho$.
  Gia tốc pháp bằng toàn bộ gia tốc trọng trường: $\rho$a_n = g$\rho$.
  Bán kính cong tại đỉnh parabol:
  $\rho$$\rho$
ho_H = \frac{v_H^2}{g} = \frac{v_0^2 \cos^2lpha}{g}$\rho$$\rho$

---

### Thí dụ 1-4: Chuyển động trên đường đinh ốc trụ (Helical Path)

**Đề bài:**
Cho điểm $\rho$M$\rho$ chuyển động theo quy luật đường đinh ốc:
$\rho$$\rho$x = r \cosarphi, \quad y = r \sinarphi, \quad z = p arphi 	ag{1-25}$\rho$$\rho$
trong đó $\rho$r$\rho$ và $\rho$p$\rho$ là các hằng số dương, $\rho$arphi = arphi(t)$\rho$.
1. Tìm vận tốc, gia tốc của điểm $\rho$M$\rho$.
2. Xét trường hợp $\rho$arphi = \omega_0 t$\rho$ (với $\rho$\omega_0 = 	ext{const}$\rho$), tính bán kính cong của quỹ đạo.

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_1_14.svg" alt="Hình 1-14: Chuyển động đinh ốc trên mặt trụ" style="max-width: 500px;" />
  <div class="figure-caption">Hình 1-14: Quỹ đạo đinh ốc (Helical Path) trên mặt trụ bán kính $\rho$r$\rho$ và bước đinh ốc $\rho$h = 2\pi p$\rho$</div>
</div>

**Bài giải:**

**1. Khảo sát hình học và bước đinh ốc:**
Hình chiếu của quỹ đạo lên mặt phẳng $\rho$Oxy$\rho$ là đường tròn tâm $\rho$O$\rho$ bán kính $\rho$r$\rho$:
$\rho$$\rho$x^2 + y^2 = r^2 \cos^2arphi + r^2 \sin^2arphi = r^2$\rho$$\rho$
Khi điểm hình chiếu $\rho$M'$\rho$ quay được đúng một vòng trên mặt phẳng đáy ($\rho$\Deltaarphi = 2\pi$\rho$), độ dời dọc trục $\rho$z$\rho$ là một đoạn không đổi gọi là bước của đường đinh ốc:
$\rho$$\rho$h = 2\pi p$\rho$$\rho$

Góc nghiêng $\rho$\gamma$\rho$ của tiếp tuyến quỹ đạo so với mặt phẳng đáy $\rho$Oxy$\rho$:
$\rho$$\rho$\cos\gamma = \frac{\sqrt{\dot{x}^2 + \dot{y}^2}}{v} = \frac{r}{\sqrt{r^2 + p^2}} = 	ext{const}$\rho$$\rho$
Như vậy, đường đinh ốc tạo với mặt đáy một góc nghiêng không đổi.

**2. Vận tốc và gia tốc tổng quát:**
Đạo hàm theo thời gian:
$\rho$$\rho$v_x = \dot{x} = -r \dot{arphi} \sinarphi, \quad v_y = \dot{y} = r \dot{arphi} \cosarphi, \quad v_z = \dot{z} = p \dot{arphi}$\rho$$\rho$
Vận tốc toàn phần:
$\rho$$\rho$v = \sqrt{v_x^2 + v_y^2 + v_z^2} = \sqrt{r^2 \dot{arphi}^2 + p^2 \dot{arphi}^2} = \dot{arphi} \sqrt{r^2 + p^2}$\rho$$\rho$

Các thành phần gia tốc:
$\rho$$\rho$a_x = \ddot{x} = -r \ddot{arphi} \sinarphi - r \dot{arphi}^2 \cosarphi$\rho$$\rho$
$\rho$$\rho$a_y = \ddot{y} = r \ddot{arphi} \cosarphi - r \dot{arphi}^2 \sinarphi$\rho$$\rho$
$\rho$$\rho$a_z = \ddot{z} = p \ddot{arphi}$\rho$$\rho$

**3. Trường hợp $\rho$arphi = \omega_0 t$\rho$ ($\rho$\omega_0 = 	ext{const}$\rho$):**
Khi $\rho$arphi = \omega_0 t$\rho$, ta có $\rho$\dot{arphi} = \omega_0, \; \ddot{arphi} = 0$\rho$.
- Vận tốc có độ lớn không đổi:
  $\rho$$\rho$v = \omega_0 \sqrt{r^2 + p^2} = 	ext{const} \implies a_t = \frac{dv}{dt} = 0$\rho$$\rho$
- Gia tốc:
  $\rho$$\rho$a_x = -r \omega_0^2 \cos\omega_0 t = -\omega_0^2 x$\rho$$\rho$
  $\rho$$\rho$a_y = -r \omega_0^2 \sin\omega_0 t = -\omega_0^2 y$\rho$$\rho$
  $\rho$$\rho$a_z = 0$\rho$$\rho$
  Độ lớn gia tốc:
  $\rho$$\rho$a = a_n = \sqrt{a_x^2 + a_y^2} = r \omega_0^2$\rho$$\rho$
  Vectơ gia tốc $\rho$ec{a}$\rho$ nằm song song với mặt phẳng $\rho$Oxy$\rho$, vuông góc với trục $\rho$z$\rho$ và hướng về trục đối xứng của hình trụ.

- Bán kính cong của đường đinh ốc:
  $\rho$$\rho$
ho = \frac{v^2}{a_n} = \frac{\omega_0^2 (r^2 + p^2)}{r \omega_0^2} = \frac{r^2 + p^2}{r} = r + \frac{p^2}{r}$\rho$$\rho$
  Kết quả cho thấy bán kính cong $\rho$
ho$\rho$ của đường đinh ốc trụ là một đại lượng không đổi trên toàn bộ quỹ đạo.
