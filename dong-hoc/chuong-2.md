# Chương 2: Chuyển Động Cơ Bản Của Vật Rắn

Hai dạng chuyển động cơ bản nhất của vật rắn tuyệt đối là **chuyển động tịnh tiến** và **chuyển động quay quanh một trục cố định**. Mọi chuyển động phức tạp khác của vật rắn đều có thể phân tích thành sự kết hợp của hai chuyển động cơ bản này.

---

## 2.1. Chuyển Động Tịnh Tiến Của Vật Rắn

::: tip Định nghĩa
Chuyển động tịnh tiến của vật rắn là chuyển động trong đó đoạn thẳng nối hai điểm bất kỳ tùy ý của vật luôn luôn giữ phương song song với vị trí ban đầu của nó trong suốt quá trình chuyển động.
:::

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_1.svg" alt="Hình 2-1: Chuyển động tịnh tiến của vật rắn" style="max-height: 260px;" />

<div class="figure-caption">

Hình 2-1: Đoạn thẳng AB luôn song song với chính nó trong chuyển động tịnh tiến

</div>

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

<img src="/figures/dong-hoc/hinh_2_2.svg" alt="Hình 2-2: Vật rắn quay quanh trục cố định Oz" style="max-height: 280px;" />

<div class="figure-caption">

Hình 2-2: Góc quay $\phi$, vận tốc góc $\vec{\omega}$ và gia tốc góc $\vec{\varepsilon}$

</div>

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

<img src="/figures/dong-hoc/hinh_2_3.svg" alt="Hình 2-3: Cơ cấu truyền động bánh răng ăn khớp" style="max-height: 250px;" />

<div class="figure-caption">

Hình 2-3: Vận tốc tiếp tuyến tại điểm ăn khớp giữa hai bánh răng

</div>

</div>

### 2.3.3. Bộ Truyền Đai
Nếu bỏ qua sự trượt của đai trên các bánh đai:

$$v_1 = v_2 = v_{\text{đai}} \implies r_1 \omega_1 = r_2 \omega_2 \implies i_{12} = \frac{\omega_1}{\omega_2} = \frac{r_2}{r_1}$$


---

## 2.4. Các Thí Dụ Áp Dụng (Bài Tập Mẫu)

::: tip Ý NGHĨA PHƯƠNG PHÁP
Các bài toán về chuyển động của vật rắn quay quanh trục cố định và hệ truyền động liên hoàn thường yêu cầu liên hệ giữa vận tốc góc, gia tốc góc của các vật quay với vận tốc dài, gia tốc dài của các điểm trên vành và các vật chuyển động tịnh tiến qua các điểm ăn khớp hoặc dây đai không dãn.
:::

### Thí dụ 2-1: Dao động của kim điện kế Galvani

**Đề bài:**
Kim của điện kế Galvani có chiều dài $l$ chuyển động quay theo quy luật:
$$\varphi = \varphi_0 \sin\left(\frac{2\pi}{T} t\right)$$
trong đó $\varphi_0$ là độ lệch cực đại của kim khỏi vị trí cân bằng ($\varphi = 0$), $T$ là chu kỳ dao động.
1. Xác định vận tốc góc $\omega$ và gia tốc góc $\varepsilon$ của kim.
2. Tìm vận tốc dài $v$, gia tốc tiếp tuyến $a_t$, gia tốc pháp tuyến $a_n$ và gia tốc toàn phần $a$ của điểm đầu mút kim điện kế tại thời điểm $t = \frac{T}{4}$.

**Bài giải:**

Kim điện kế thực hiện chuyển động quay quanh một trục cố định đi qua gốc quay $O$ vuông góc với mặt số.

**1. Vận tốc góc và gia tốc góc:**
Đạo hàm phương trình góc quay $\varphi(t)$ theo thời gian:
$$\omega = \dot{\varphi} = \frac{d\varphi}{dt} = \varphi_0 \frac{2\pi}{T} \cos\left(\frac{2\pi}{T} t\right)$$
$$\varepsilon = \dot{\omega} = \frac{d^2\varphi}{dt^2} = -\varphi_0 \left(\frac{2\pi}{T}\right)^2 \sin\left(\frac{2\pi}{T} t\right)$$

**2. Vận tốc và gia tốc của điểm đầu mút kim:**
Điểm đầu mút kim vạch nên một cung tròn bán kính $R = l$.
- Trị số vận tốc dài:
  $$v = l |\omega| = l \varphi_0 \frac{2\pi}{T} \left|\cos\left(\frac{2\pi}{T} t\right)\right|$$
- Thành phần gia tốc tiếp tuyến:
  $$a_t = l |\varepsilon| = l \varphi_0 \left(\frac{2\pi}{T}\right)^2 \left|\sin\left(\frac{2\pi}{T} t\right)\right|$$
- Thành phần gia tốc pháp tuyến:
  $$a_n = l \omega^2 = l \varphi_0^2 \left(\frac{2\pi}{T}\right)^2 \cos^2\left(\frac{2\pi}{T} t\right)$$

**3. Tại thời điểm $t = \frac{T}{4}$:**
Góc pha: $\frac{2\pi}{T} \cdot \frac{T}{4} = \frac{\pi}{2}$.
Khi đó:
$$\sin\frac{\pi}{2} = 1, \quad \cos\frac{\pi}{2} = 0$$

Ta thu được:
- Vận tốc góc triệt tiêu: $\omega = 0 \implies v = 0$ (kim dừng lại tức thời ở vị trí lệch cực đại $\varphi = \varphi_0$).
- Gia tốc góc đạt cực đại: $|\varepsilon| = \varphi_0 \left(\frac{2\pi}{T}\right)^2$.
- Gia tốc pháp tuyến triệt tiêu: $a_n = 0$.
- Gia tốc tiếp tuyến đạt cực đại:
  $$a_t = l \varphi_0 \left(\frac{2\pi}{T}\right)^2$$
- Gia tốc toàn phần của điểm đầu mút kim:
  $$a = \sqrt{a_t^2 + a_n^2} = a_t = l \varphi_0 \left(\frac{2\pi}{T}\right)^2$$

---

### Thí dụ 2-2: Khảo sát hệ truyền động liên hoàn bánh răng - tang tời

**Đề bài:**
Cho cơ cấu truyền động như Hình 2-18. Bánh dẫn I có bán kính $R_1$ quay quanh trục cố định với vận tốc góc $\omega_1$ và gia tốc góc $\varepsilon_1$. Bánh bị dẫn II gồm hai tang gắn đồng trục: tầng ngoài có bán kính $R_2$ nhận truyền động từ bánh I, tầng trong là tang nhỏ có bán kính $r_2$ dùng để quấn dây treo vật nặng $P$. Dây không dãn và không trượt.
Xác định vận tốc $v_P$ và gia tốc $a_P$ của vật $P$.

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_2_18.svg" alt="Hình 2-18: Cơ cấu truyền động liên hoàn bánh răng - tang tời" style="max-width: 600px;" />
  <div class="figure-caption">Hình 2-18: Cơ cấu truyền động liên hoàn bánh dẫn I, khối tang hai tầng II và vật treo P</div>
</div>

**Bài giải:**

Hệ cơ học gồm hai vật rắn quay quanh trục cố định (bánh I và bánh II) cùng một vật chuyển động tịnh tiến (vật $P$).

**1. Liên hệ động học giữa bánh I và bánh II:**
Tại điểm tiếp xúc (hoặc vành đai liên kết) giữa bánh I và vành ngoài bán kính $R_2$ của bánh II, điều kiện không trượt đòi hỏi vận tốc dài tại điểm tiếp xúc phải bằng nhau:
$$v_{\text{tiếp xúc}} = R_1 \omega_1 = R_2 \omega_2$$
Từ đó suy ra vận tốc góc của khối tang II:
$$\omega_2 = \frac{R_1}{R_2} \omega_1$$

Lấy đạo hàm hai vế theo thời gian để tìm gia tốc góc của bánh II:
$$\varepsilon_2 = \frac{d\omega_2}{dt} = \frac{R_1}{R_2} \frac{d\omega_1}{dt} = \frac{R_1}{R_2} \varepsilon_1$$

**2. Vận tốc và gia tốc của vật nặng $P$:**
Vật nặng $P$ chuyển động tịnh tiến thẳng đứng. Vì dây không dãn và quấn chặt trên tang nhỏ bán kính $r_2$ của trục II, nên vận tốc và gia tốc của vật $P$ bằng vận tốc dài và gia tốc tiếp tuyến của một điểm trên vành tang $r_2$:

- Vận tốc của vật $P$:
  $$v_P = r_2 \omega_2 = r_2 \left(\frac{R_1}{R_2} \omega_1\right) = \frac{r_2 R_1}{R_2} \omega_1$$

- Gia tốc của vật $P$:
  $$a_P = r_2 \varepsilon_2 = r_2 \left(\frac{R_1}{R_2} \varepsilon_1\right) = \frac{r_2 R_1}{R_2} \varepsilon_1$$

**3. Chiều chuyển động:**
- Nếu bánh I quay ngược chiều kim đồng hồ thì bánh II quay cùng chiều kim đồng hồ, dây quấn lên và vật $P$ chuyển động tịnh tiến đi lên.
- Nếu $\omega_1$ và $\varepsilon_1$ cùng dấu, vật $P$ chuyển động nhanh dần; nếu trái dấu, vật $P$ chuyển động chậm dần.
