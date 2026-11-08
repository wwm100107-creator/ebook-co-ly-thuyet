# Chương 2: Chuyển Động Cơ Bản Của Vật Rắn

Hai dạng chuyển động cơ bản nhất của vật rắn tuyệt đối là **chuyển động tịnh tiến** và **chuyển động quay quanh một trục cố định**. Mọi chuyển động phức tạp khác của vật rắn đều có thể phân tích thành sự kết hợp của hai chuyển động cơ bản này.

---

## 2.1. Chuyển Động Tịnh Tiến Của Vật Rắn

::: tip Định nghĩa
Chuyển động tịnh tiến của vật rắn là chuyển động trong đó đoạn thẳng nối hai điểm bất kỳ tùy ý của vật luôn luôn giữ phương song song với vị trí ban đầu của nó trong suốt quá trình chuyển động.
:::

<div class="figure-container">
  <img src="/figures/dong-hoc/hinh_2_1.png" alt="Hình 2-1: Chuyển động tịnh tiến của vật rắn" style="max-height: 260px;" />
  <div class="figure-caption">Hình 2-1: Đoạn thẳng AB luôn song song với chính nó trong chuyển động tịnh tiến</div>
</div>

### Định Lý Cơ Bản Về Chuyển Động Tịnh Tiến

::: tip Định lý
Khi vật rắn chuyển động tịnh tiến:
1. Quỹ đạo của mọi điểm thuộc vật là những đường cong hoàn toàn đồng dạng và trùng khớp với nhau khi tịnh tiến.
2. Tại mỗi thời điểm, vận tốc của mọi điểm thuộc vật là bằng nhau cả về phương, chiều và độ lớn:
   $$\vec{v}_A(t) = \vec{v}_B(t) = \vec{v}(t) \tag{2-1}$$
3. Tại mỗi thời điểm, gia tốc của mọi điểm thuộc vật là bằng nhau cả về phương, chiều và độ lớn:
   $$\vec{a}_A(t) = \vec{a}_B(t) = \vec{a}(t) \tag{2-2}$$
:::

*Chứng minh:* Xét hai điểm bất kỳ $A$ và $B$ thuộc vật rắn. Bán kính véctơ của chúng liên hệ với nhau qua đẳng thức:

$$\vec{r}_B(t) = \vec{r}_A(t) + \vec{AB}$$

Vì vật là tuyệt đối rắn và chuyển động tịnh tiến nên véctơ $\vec{AB}$ có độ dài và phương chiều không đổi theo thời gian ($\frac{d\vec{AB}}{dt} = \vec{0}$).

Lấy đạo hàm bậc nhất theo thời gian:

$$\frac{d\vec{r}_B}{dt} = \frac{d\vec{r}_A}{dt} \implies \vec{v}_B = \vec{v}_A$$

Lấy tiếp đạo hàm bậc hai theo thời gian:

$$\frac{d\vec{v}_B}{dt} = \frac{d\vec{v}_A}{dt} \implies \vec{a}_B = \vec{a}_A$$

> **Ý nghĩa:** Việc khảo sát động học chuyển động tịnh tiến của một vật rắn hoàn toàn quy về việc khảo sát chuyển động của một điểm duy nhất (thường chọn là khối tâm $C$ của vật).

---

## 2.2. Chuyển Động Quay Quanh Trục Cố Định Của Vật Rắn

::: tip Định nghĩa
Chuyển động quay quanh trục cố định là chuyển động của vật rắn trong đó có hai điểm cố định $O_1, O_2$ thuộc vật xác định một đường thẳng cố định gọi là **trục quay**.
Mọi điểm thuộc vật không nằm trên trục quay đều chuyển động trên các đường tròn nằm trong các mặt phẳng vuông góc với trục quay và có tâm nằm trên trục quay.
:::

<div class="figure-container">
  <img src="/figures/dong-hoc/hinh_2_2.png" alt="Hình 2-2: Vật rắn quay quanh trục cố định Oz" style="max-height: 280px;" />
  <div class="figure-caption">Hình 2-2: Góc quay $\phi$, vận tốc góc $\vec{\omega}$ và gia tốc góc $\vec{\varepsilon}$</div>
</div>

---

### 2.2.1. Phương Trình Chuyển Động Quay

Chọn trục quay làm trục $Oz$. Gắn vào trục quay một nửa mặt phẳng cố định $P_0$ và gắn vào vật một nửa mặt phẳng di động $P$ cùng đi qua trục quay.

Vị trí của vật tại mỗi thời điểm $t$ được xác định hoàn toàn bởi góc quay $\phi$ (tính bằng radian) tạo bởi hai mặt phẳng $P_0$ và $P$:

$$\phi = \phi(t) \tag{2-3}$$

Phương trình $(2-3)$ được gọi là **phương trình chuyển động quay của vật rắn**.

---

### 2.2.2. Vận Tốc Góc và Gia Tốc Góc

- **Vận tốc góc:** Đặc trưng cho tốc độ quay nhanh hay chậm và chiều quay của vật tại thời điểm $t$:
  $$\omega = \frac{d\phi}{dt} = \dot{\phi} \tag{2-4}$$
  - Đơn vị: $\text{rad/s}$ (hoặc số vòng quay trong một phút: $n \text{ (vòng/phút)} \implies \omega = \frac{\pi n}{30}$).
  - Véctơ vận tốc góc $\vec{\omega}$: Đặt trên trục quay, có chiều sao cho nhìn từ đầu mút của nó xuống thấy vật quay ngược chiều kim đồng hồ:
    $$\vec{\omega} = \omega \vec{k} = \dot{\phi} \vec{k} \tag{2-5}$$

- **Gia tốc góc:** Đặc trưng cho sự biến thiên của vận tốc góc theo thời gian:
  $$\varepsilon = \frac{d\omega}{dt} = \frac{d^2\phi}{dt^2} = \ddot{\phi} \tag{2-6}$$
  - Đơn vị: $\text{rad/s}^2$.
  - Véctơ gia tốc góc: $\vec{\varepsilon} = \frac{d\vec{\omega}}{dt} = \varepsilon \vec{k}$.
    - Khi $\omega \cdot \varepsilon > 0$: Vật quay nhanh dần ($\vec{\varepsilon}$ cùng chiều với $\vec{\omega}$).
    - Khi $\omega \cdot \varepsilon < 0$: Vật quay chậm dần ($\vec{\varepsilon}$ ngược chiều với $\vec{\omega}$).

#### Các Trường Hợp Chuyển Động Quay Riêng:
1. **Quay đều:** $\varepsilon = 0 \implies \omega = \text{const} \implies \phi = \phi_0 + \omega t$.
2. **Quay biến đổi đều:** $\varepsilon = \text{const}$:
   $$\omega = \omega_0 + \varepsilon t; \quad \phi = \phi_0 + \omega_0 t + \frac{1}{2} \varepsilon t^2; \quad \omega^2 - \omega_0^2 = 2\varepsilon(\phi - \phi_0) \tag{2-7}$$

---

### 2.2.3. Vận Tốc và Gia Tốc Của Các Điểm Thuộc Vật Quay

Xét điểm $M$ bất kỳ thuộc vật cách trục quay một khoảng $h$. Bán kính véctơ của $M$ đối với một điểm gốc $O$ trên trục quay là $\vec{r} = \vec{OM}$.

#### 1. Vận tốc
Điểm $M$ chuyển động trên đường tròn bán kính $h$ trong mặt phẳng vuông góc với trục quay.

::: tip Biểu thức véctơ vận tốc
$$\vec{v} = \vec{\omega} \times \vec{r} \tag{2-8}$$
:::

- **Phương:** Vuông góc với mặt phẳng chứa trục quay và điểm $M$ (tiếp tuyến với quỹ đạo tròn của $M$).
- **Chiều:** Theo chiều quay của vật.
- **Độ lớn:**
  $$v = \omega \cdot h \tag{2-9}$$

#### 2. Gia Tốc
Lấy đạo hàm véctơ vận tốc theo thời gian:

$$\vec{a} = \frac{d\vec{v}}{dt} = \frac{d}{dt}(\vec{\omega} \times \vec{r}) = \left(\frac{d\vec{\omega}}{dt} \times \vec{r}\right) + \left(\vec{\omega} \times \frac{d\vec{r}}{dt}\right) = (\vec{\varepsilon} \times \vec{r}) + (\vec{\omega} \times \vec{v})$$

Gia tốc phân tích thành hai thành phần trực giao:

$$\vec{a} = \vec{a}_t + \vec{a}_n \tag{2-10}$$

- **Gia tốc tiếp tuyến $\vec{a}_t$:**
  $$\vec{a}_t = \vec{\varepsilon} \times \vec{r}; \quad a_t = \varepsilon \cdot h \tag{2-11}$$
  $\vec{a}_t$ tiếp tuyến với quỹ đạo, cùng chiều với $\vec{v}$ khi quay nhanh dần và ngược chiều khi quay chậm dần.

- **Gia tốc pháp tuyến (hướng tâm) $\vec{a}_n$:**
  $$\vec{a}_n = \vec{\omega} \times \vec{v}; \quad a_n = \omega^2 \cdot h = \frac{v^2}{h} \tag{2-12}$$
  $\vec{a}_n$ luôn hướng vuông góc vào trục quay.

Độ lớn của gia tốc toàn phần:

$$a = \sqrt{a_t^2 + a_n^2} = h \sqrt{\varepsilon^2 + \omega^4} \tag{2-13}$$

Góc lệch $\mu$ giữa véctơ gia tốc $\vec{a}$ và bán kính quay $h$:

$$\tan \mu = \frac{a_t}{a_n} = \frac{\varepsilon}{\omega^2} \tag{2-14}$$

---

## 2.3. Các Cơ Cấu Truyền Động Đơn Giản

### 2.3.1. Tỉ Số Truyền
Trong kỹ thuật, để truyền chuyển động quay từ trục dẫn (1) sang trục bị dẫn (2), tỉ số truyền $i_{12}$ được định nghĩa:

$$i_{12} = \frac{\omega_1}{\omega_2} = \frac{n_1}{n_2} \tag{2-15}$$

### 2.3.2. Cơ Cấu Bánh Ma Sát và Bánh Răng
Khi hai bánh răng hoặc bánh ma sát tiếp xúc và lăn không trượt trên nhau tại điểm ăn khớp $P$, vận tốc dài của điểm tiếp xúc trên hai vành bánh phải bằng nhau:

$$v_1 = v_2 \implies r_1 \omega_1 = r_2 \omega_2 \implies i_{12} = \frac{\omega_1}{\omega_2} = \frac{r_2}{r_1} = \frac{z_2}{z_1} \tag{2-16}$$

trong đó $r_1, r_2$ là bán kính các vòng lăn, và $z_1, z_2$ là số răng của các bánh răng.

<div class="figure-container">
  <img src="/figures/dong-hoc/hinh_2_3.png" alt="Hình 2-3: Cơ cấu truyền động bánh răng ăn khớp" style="max-height: 250px;" />
  <div class="figure-caption">Hình 2-3: Vận tốc tiếp tuyến tại điểm ăn khớp giữa hai bánh răng</div>
</div>

### 2.3.3. Bộ Truyền Đai
Nếu bỏ qua sự trượt của đai trên các bánh đai:

$$v_1 = v_2 = v_{\text{đai}} \implies r_1 \omega_1 = r_2 \omega_2 \implies i_{12} = \frac{\omega_1}{\omega_2} = \frac{r_2}{r_1}$$
