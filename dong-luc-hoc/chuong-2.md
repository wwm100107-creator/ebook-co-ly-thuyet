# Chương 2: Phương Trình Vi Phân Của Chuyển Động

## 2.1. Phương Trình Vi Phân Chuyển Động Của Chất Điểm

Phương trình véctơ cơ bản của động lực học chất điểm:

$$m \frac{d^2\vec{r}}{dt^2} = \vec{F} = \sum_{k=1}^n \vec{F}_k \tag{2-1}$$

Tùy thuộc vào việc chọn hệ tọa độ, phương trình véctơ $(2-1)$ được biểu diễn dưới các dạng phương trình vi phân vô hướng tương ứng:

---

### 2.1.1. Trong Hệ Tọa Độ Descartes (Đề Các)

Chiếu phương trình $(2-1)$ lên ba trục tọa độ vuông góc $Ox, Oy, Oz$:

$$\begin{cases} m \ddot{x} = m \dfrac{d^2 x}{dt^2} = \displaystyle\sum_{k=1}^n F_{kx} \\[10pt] m \ddot{y} = m \dfrac{d^2 y}{dt^2} = \displaystyle\sum_{k=1}^n F_{ky} \\[10pt] m \ddot{z} = m \dfrac{d^2 z}{dt^2} = \displaystyle\sum_{k=1}^n F_{kz} \end{cases} \tag{2-2}$$

Đây là hệ ba phương trình vi phân cấp hai xác định chuyển động của chất điểm trong không gian.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_2_1.svg" alt="Hình 2-1: Phương trình vi phân chuyển động của chất điểm trong hệ tọa độ Descartes" style="max-height: 270px;" />

<div class="figure-caption">

Hình 2-1: Chiếu lực và gia tốc lên các trục tọa độ Descartes

</div>

</div>

---

### 2.1.2. Trong Hệ Tọa Độ Tự Nhiên

Chiếu phương trình $(2-1)$ lên ba trục của tam diện tự nhiên Frenet $(\vec{\tau}, \vec{n}, \vec{b})$ gắn tại điểm đang xét trên quỹ đạo:

$$\begin{cases} m a_t = m \ddot{s} = m \dfrac{dv}{dt} = \displaystyle\sum_{k=1}^n F_{kt} \\[10pt] m a_n = m \dfrac{v^2}{\rho} = \displaystyle\sum_{k=1}^n F_{kn} \\[10pt] m a_b = 0 = \displaystyle\sum_{k=1}^n F_{kb} \end{cases} \tag{2-3}$$

trong đó:
- $\rho$ là bán kính chính khúc của quỹ đạo tại vị trí khảo sát.
- $F_{kt}, F_{kn}, F_{kb}$ lần lượt là hình chiếu của lực lên trục tiếp tuyến, pháp tuyến chính và trùng pháp tuyến.
- Phương trình thứ ba chỉ ra rằng hợp lực tác dụng lên chất điểm luôn luôn nằm trong **mặt phẳng mật tiếp** $(\vec{\tau}, \vec{n})$.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_2_2.svg" alt="Hình 2-2: Phương trình vi phân chuyển động trong hệ tọa độ tự nhiên" style="max-height: 260px;" />

<div class="figure-caption">

Hình 2-2: Phân tích lực theo tiếp tuyến và pháp tuyến chính

</div>

</div>

---

### 2.1.3. Phương Trình Vi Phân Chuyển Động Của Chất Điểm Không Tự Do

Nếu chất điểm chịu liên kết (bị cưỡng bức di chuyển trên một mặt cong hoặc đường cong nhẵn), áp dụng tiên đề giải phóng liên kết, ta thay thế liên kết bằng phản lực liên kết $\vec{N}$:

$$m \frac{d^2\vec{r}}{dt^2} = \vec{F} + \vec{N} \tag{2-4}$$

trong đó $\vec{F}$ là hợp lực của các lực hoạt động, còn $\vec{N}$ là phản lực liên kết.

---

## 2.2. Phương Trình Vi Phân Chuyển Động Của Cơ Hệ

Cơ hệ là một tập hợp gồm $n$ chất điểm hoặc vật thể mà vị trí và chuyển động của chúng phụ thuộc lẫn nhau.

### 2.2.1. Ngoại Lực và Nội Lực

Các lực tác dụng lên các chất điểm của cơ hệ được chia thành hai loại:
- **Ngoại lực ($\vec{F}_k^e$):** Lực do các vật thể bên ngoài cơ hệ tác dụng lên các chất điểm thuộc cơ hệ.
- **Nội lực ($\vec{F}_k^i$):** Lực tác dụng tương hỗ lẫn nhau giữa các chất điểm thuộc cùng một cơ hệ.

::: tip Hai tính chất cơ bản của nội lực
1. Tổng hình học của tất cả các nội lực trong một cơ hệ luôn luôn bằng không:
   $$\sum_{k=1}^n \vec{F}_k^i = \vec{0} \tag{2-5}$$
2. Tổng các véctơ mômen của tất cả các nội lực đối với một điểm bất kỳ $O$ luôn luôn bằng không:
   $$\sum_{k=1}^n \vec{m}_O(\vec{F}_k^i) = \vec{0} \tag{2-6}$$
:::
*(Các tính chất này được suy ra trực tiếp từ định luật 3 Newton về hai lực trực đối từng đôi một).*

---

### 2.2.2. Hệ Phương Trình Vi Phân Chuyển Động Của Cơ Hệ

Áp dụng định luật 2 Newton cho từng chất điểm thứ $k$ (có khối lượng $m_k$) thuộc cơ hệ:

$$m_k \frac{d^2\vec{r}_k}{dt^2} = \vec{F}_k^e + \vec{F}_k^i \quad (k = 1, 2, ..., n) \tag{2-7}$$

Chiếu lên ba trục tọa độ Descartes vuông góc, ta nhận được hệ $3n$ phương trình vi phân cấp hai:

$$\begin{cases} m_k \ddot{x}_k = F_{kx}^e + F_{kx}^i \\ m_k \ddot{y}_k = F_{ky}^e + F_{ky}^i \\ m_k \ddot{z}_k = F_{kz}^e + F_{kz}^i \end{cases} \quad (k = 1, 2, ..., n) \tag{2-8}$$

Vì số lượng nội lực $\vec{F}_k^i$ thường rất phức tạp và khó xác định, nên trong thực tế người ta ít khi giải trực tiếp hệ phương trình $(2-8)$ mà sử dụng **các định lý tổng quát của động lực học** (nơi nội lực tự động triệt tiêu) hoặc phương pháp **Cơ học giải tích** (Phương trình Lagrange loại II).


---

## 2.3. Các Thí Dụ Áp Dụng (Bài Tập Mẫu)

::: tip Ý NGHĨA PHƯƠNG PHÁP
Các bài toán về phương trình vi phân chuyển động giải quyết hai bài toán cơ bản của Động lực học:
1. **Bài toán thuận:** Cho quy luật chuyển động của chất điểm hoặc cơ hệ, tìm lực tác dụng lên nó (áp dụng phép lấy đạo hàm).
2. **Bài toán nghịch:** Cho các lực tác dụng và điều kiện ban đầu, tìm quy luật chuyển động (áp dụng phép tích phân phương trình vi phân).
:::

### Thí dụ 2-1: Khảo sát chuyển động rơi có lực cản môi trường

**Đề bài:**
Một vật nặng khối lượng $m$ rơi tự do không vận tốc đầu từ độ cao lớn trong không khí. Lực cản của không khí tỉ lệ bậc nhất với vận tốc: $\vec{R}_c = -\mu \vec{v}$ ($\mu > 0$ là hệ số cản).
1. Thiết lập phương trình vi phân chuyển động của vật và tìm quy luật vận tốc $v(t)$.
2. Xác định vận tốc giới hạn (vận tốc cực đại $v_{\max}$) khi rơi trong thời gian dài.
3. Tìm quãng đường rơi $s(t)$ theo thời gian.

**Bài giải:**

Chọn trục $Oz$ thẳng đứng hướng xuống dưới, gốc $O$ tại vị trí thả vật ban đầu ($t = 0 \implies z = 0, v = 0$).
Các lực tác dụng lên vật gồm:
- Trọng lực: $\vec{P} = m\vec{g}$ (hướng xuống, hình chiếu $+mg$).
- Lực cản môi trường: $\vec{R}_c = -\mu \vec{v}$ (hướng lên, hình chiếu $-\mu v$).

**1. Thiết lập và giải phương trình vi phân:**
Phương trình vi phân chuyển động theo phương $Oz$:
$$m \frac{dv}{dt} = mg - \mu v \implies \frac{dv}{dt} + \frac{\mu}{m} v = g$$
Đặt $k = \frac{\mu}{m}$, ta có:
$$\frac{dv}{dt} = g - kv \implies \frac{dv}{g - kv} = dt$$

Lấy tích phân hai vế với điều kiện ban đầu $v(0) = 0$:
$$-\frac{1}{k} \ln\left(\frac{g - kv}{g}\right) = t \implies 1 - \frac{k}{g} v = e^{-kt}$$
Suy ra quy luật vận tốc theo thời gian:
$$v(t) = \frac{g}{k} (1 - e^{-kt}) = \frac{mg}{\mu} \left(1 - e^{-\frac{\mu}{m} t}\right)$$

**2. Vận tốc giới hạn (Terminal velocity):**
Khi thời gian rơi đủ lớn ($t \to \infty$):
$$\lim_{t \to \infty} e^{-kt} = 0 \implies v_{\max} = v_{\text{gh}} = \frac{mg}{\mu}$$
Vận tốc giới hạn đạt được khi lực cản không khí triệt tiêu hoàn toàn trọng lực: $R_c = \mu v_{\text{gh}} = mg$.

**3. Quãng đường rơi:**
Vì $v = \frac{dz}{dt}$ nên:
$$z(t) = \int_0^t v(t) dt = \frac{g}{k} \int_0^t (1 - e^{-kt}) dt = \frac{g}{k} \left[t + \frac{1}{k} (e^{-kt} - 1)\right]$$
$$z(t) = \frac{mg}{\mu} t - \frac{m^2 g}{\mu^2} \left(1 - e^{-\frac{\mu}{m} t}\right)$$

---

### Thí dụ 2-2: Xác định áp lực của ô tô lên đỉnh cầu vồng

**Đề bài:**
Một ô tô có trọng lượng $P = mg$ chuyển động với vận tốc $v$ không đổi qua đỉnh $A$ của một cây cầu có mặt cong lồi với bán kính cong $R$ trong mặt phẳng thẳng đứng.
1. Xác định áp lực $N$ của ô tô tác dụng lên mặt cầu tại đỉnh $A$.
2. Tìm vận tốc $v_{0}$ để ô tô bắt đầu rời khỏi mặt cầu (không còn tiếp xúc với mặt cầu).

<div class="figure-box">
  <img src="/figures/dong-luc-hoc/hinh_2_3.svg" alt="Hình 2-3: Ô tô chuyển động qua đỉnh cầu vồng" style="max-width: 580px;" />
  <div class="figure-caption">Hình 2-3: Sơ đồ lực tác dụng lên ô tô tại đỉnh cầu vồng bán kính cong $R$</div>
</div>

**Bài giải:**

Khảo sát ô tô như một chất điểm khối lượng $m$ tại đỉnh $A$ của cầu (Hình 2-3).
Các lực tác dụng lên ô tô gồm:
- Trọng lực: $\vec{P} = m\vec{g}$ thẳng đứng hướng xuống.
- Phản lực pháp tuyến của mặt cầu: $\vec{N}$ thẳng đứng hướng lên.

Phương trình cơ bản của động lực học (Định luật II Newton):
$$m\vec{a} = \vec{P} + \vec{N}$$

Chiếu phương trình lên trục pháp tuyến chính $An$ hướng thẳng đứng xuống dưới (hướng về tâm cong của mặt cầu):
$$m a_n = P - N$$
với gia tốc pháp tuyến tại đỉnh cầu là $a_n = \frac{v^2}{R}$.

**1. Áp lực lên đỉnh cầu:**
$$N = P - m \frac{v^2}{R} = mg \left(1 - \frac{v^2}{gR}\right)$$
Theo định luật III Newton, áp lực của bánh xe tác dụng lên mặt cầu có độ lớn đúng bằng phản lực pháp tuyến $N$.
Nhận xét: Vì $v > 0$ nên $N < P$, nghĩa là khi chạy qua cầu cong lồi, áp lực lên mặt cầu luôn nhỏ hơn trọng lượng tĩnh của xe. Vận tốc càng lớn thì áp lực càng giảm.

**2. Vận tốc để xe rời mặt cầu:**
Xe bắt đầu mất tiếp xúc (rời mặt cầu bay trong không khí) khi phản lực pháp tuyến triệt tiêu:
$$N = 0 \implies 1 - \frac{v_0^2}{gR} = 0 \implies v_0 = \sqrt{gR}$$
Nếu $v \ge \sqrt{gR}$, xe sẽ bị văng khỏi mặt đường tại đỉnh cầu.
