---
title: "Bài Tập Động Lực Học - Chương 1: Phương Trình Vi Phân Chuyển Động Chất Điểm"
description: "Các dạng bài toán thuận nghịch, phương pháp tích phân PTVP chuyển động của chất điểm tự do và chịu lực cản"
---

# Chương 1: Phương Trình Vi Phân Chuyển Động Chất Điểm

::: tip Tóm tắt chương trình
Chương này hướng dẫn phương pháp giải hai bài toán cơ bản của Động lực học chất điểm:
1. **Bài toán thuận (Bài toán 1):** Biết quy luật chuyển động, xác định lực tác dụng.
2. **Bài toán nghịch (Bài toán 2):** Biết các lực tác dụng và điều kiện ban đầu, lập và tích phân phương trình vi phân để xác định quy luật chuyển động.
:::

---

## 1. Tóm Tắt Lý Thuyết & Công Thức Cốt Lõi

### 1.1. Định luật II Newton (Dạng véctơ)
Chất điểm khối lượng $m$ chuyển động dưới tác dụng của hệ lực $\vec{F}_k$:
$$m \vec{a} = m \frac{d^2\vec{r}}{dt^2} = \sum \vec{F}_k = \vec{R}$$

### 1.2. Phương trình vi phân trong các hệ tọa độ

#### a. Hệ tọa độ Đề-các vuông góc ($Oxyz$):
$$\begin{cases}
m \ddot{x} = \sum F_{kx} \\
m \ddot{y} = \sum F_{ky} \\
m \ddot{z} = \sum F_{kz}
\end{cases}$$

#### b. Hệ tọa độ tự nhiên (Tam diện Frenet: $\vec{\tau}, \vec{n}, \vec{b}$):
$$\begin{cases}
m \frac{dv}{dt} = m \ddot{s} = \sum F_{k\tau} \\
m \frac{v^2}{\rho} = \sum F_{kn} \\
0 = \sum F_{kb}
\end{cases}$$
trong đó $\rho$ là bán kính cong của quỹ đạo tại điểm đang xét.

#### c. Hệ tọa độ cực ($r, \theta$):
$$\begin{cases}
m (\ddot{r} - r\dot{\theta}^2) = \sum F_{kr} \\
m (r\ddot{\theta} + 2\dot{r}\dot{\theta}) = \frac{m}{r} \frac{d}{dt}(r^2 \dot{\theta}) = \sum F_{k\theta}
\end{cases}$$

### 1.3. Điều kiện ban đầu
Tại thời điểm ban đầu $t = 0$:
- Vị trí ban đầu: $x(0) = x_0, \; y(0) = y_0, \; z(0) = z_0$ (hoặc $s(0) = s_0$).
- Vận tốc ban đầu: $\dot{x}(0) = v_{0x}, \; \dot{y}(0) = v_{0y}, \; \dot{z}(0) = v_{0z}$ (hoặc $v(0) = v_0$).

---

## 2. Hướng Dẫn Phương Pháp Giải

1. **Khảo sát hệ và chọn hệ quy chiếu:**
   - Chọn gốc tọa độ $O$ và các trục tọa độ thuận tiện cho việc chiếu lực và viết biểu thức gia tốc (ví dụ: trục trùng phương chuyển động thẳng, hoặc tam diện tự nhiên nếu biết trước quỹ đạo).
2. **Phân tích lực tác dụng:**
   - Liệt kê đầy đủ lực chủ động (trọng lực $\vec{P}$, lực đàn hồi $\vec{F}_{\text{đh}}$, lực cản môi trường $\vec{R}$) và phản lực liên kết (nếu chất điểm không tự do).
3. **Thiết lập phương trình vi phân:**
   - Chiếu phương trình véctơ $m\vec{a} = \sum \vec{F}_k$ lên các trục đã chọn.
4. **Tích phân phương trình vi phân (Bài toán nghịch):**
   - **Lực phụ thuộc thời gian $F(t)$:** Tách biến trực tiếp $m \, dv = F(t) dt$.
   - **Lực phụ thuộc vận tốc $F(v)$:** Dùng $a = \frac{dv}{dt}$ hoặc $a = v\frac{dv}{dx}$.
   - **Lực phụ thuộc tọa độ $F(x)$:** Dùng $m v \frac{dv}{dx} = F(x) \implies m v dv = F(x) dx$.
5. **Xác định hằng số tích phân:** Dựa vào điều kiện ban đầu tại $t = 0$.

---

## 3. Bài Giải Mẫu Điển Hình

### Thí dụ 1-1: Chuyển động của chất điểm trong môi trường có sức cản tỉ lệ bậc nhất với vận tốc

<div class="figure-container">

<img src="/figures/bai-tap/dong-luc-hoc/hinh_1_1.svg" alt="Hình 1-1: Chất điểm rơi trong môi trường có lực cản R = kv" style="max-height: 260px;" />

<div class="figure-caption">

Hình 1-1: Chất điểm rơi trong môi trường chịu lực cản tỉ lệ bậc nhất với vận tốc

</div>

</div>

**Đề bài:**
Một vật nặng khối lượng $m$ rơi tự do từ trạng thái nghỉ ($v_0 = 0$) trong không khí. Sức cản của không khí tỉ lệ với vận tốc: $R = kv$ ($k > 0$ là hệ số cản).
1. Lập phương trình vi phân chuyển động và xác định quy luật vận tốc $v(t)$.
2. Xác định vận tốc giới hạn $v_{\text{gh}}$ của vật khi thời gian $t \to \infty$.
3. Tìm quãng đường $z(t)$ mà vật đi được sau thời gian $t$.

**Bài giải:**

**1. Thiết lập và tích phân phương trình vi phân:**
Chọn trục tọa độ $Oz$ thẳng đứng hướng xuống, gốc $O$ tại vị trí ban đầu của vật ($z_0 = 0$).
Các lực tác dụng lên vật:
- Trọng lực: $\vec{P} = m\vec{g}$ (cùng chiều dương $Oz$).
- Lực cản môi trường: $\vec{R}$ (hướng ngược chiều chuyển động, hướng lên).

Chiếu phương trình định luật II Newton lên trục $Oz$:
$$m \frac{dv}{dt} = mg - kv$$

Tách biến:
$$\frac{dv}{g - \frac{k}{m}v} = dt$$

Tích phân hai vế:
$$-\frac{m}{k} \ln\left(g - \frac{k}{m}v\right) = t + C_1$$
$$\ln\left(g - \frac{k}{m}v\right) = -\frac{k}{m}t + C_2$$

Tại $t = 0$, vật có vận tốc ban đầu $v(0) = 0$:
$$\ln g = C_2 \implies \ln\left(1 - \frac{k}{mg}v\right) = -\frac{k}{m}t$$

Lấy mũ hai vế:
$$1 - \frac{k}{mg}v = e^{-\frac{k}{m}t} \implies v(t) = \frac{mg}{k} \left(1 - e^{-\frac{k}{m}t}\right)$$

**2. Vận tốc giới hạn ($v_{\text{gh}}$):**
Khi $t \to \infty$, số hạng $e^{-\frac{k}{m}t} \to 0$. Vận tốc tiệm cận tới giá trị không đổi:
$$v_{\text{gh}} = \lim_{t \to \infty} v(t) = \frac{mg}{k}$$
*Ý nghĩa cơ học:* Vận tốc giới hạn đạt được khi lực cản môi trường cân bằng hoàn toàn với trọng lực ($kv_{\text{gh}} = mg$).

**3. Quãng đường chuyển động $z(t)$:**
Thay $v = \frac{dz}{dt}$:
$$\frac{dz}{dt} = v_{\text{gh}} \left(1 - e^{-\frac{k}{m}t}\right)$$

Tích phân với điều kiện đầu $z(0) = 0$:
$$z(t) = \int_0^t v_{\text{gh}} \left(1 - e^{-\frac{k}{m}\tau}\right) d\tau = v_{\text{gh}} \left[ \tau + \frac{m}{k} e^{-\frac{k}{m}\tau} \right]_0^t$$
$$z(t) = v_{\text{gh}} t - \frac{m v_{\text{gh}}}{k}\left(1 - e^{-\frac{k}{m}t}\right)$$

---

## 4. Bài Tập Rèn Luyện Có Đáp Số

::: info Bài 1.1 (Lực cản tỉ lệ bình phương vận tốc)
Một chiếc thuyền khối lượng $m = 500\text{ kg}$ đang chuyển động với vận tốc ban đầu $v_0 = 10\text{ m/s}$ thì tắt máy. Lực cản của nước tỉ lệ với bình phương vận tốc: $R = 25 v^2\text{ (N)}$.
1. Tìm thời gian để vận tốc thuyền giảm xuống còn $v_1 = 2\text{ m/s}$.
2. Tính quãng đường thuyền chạy được trong thời gian đó.
- **Đáp số:**
  1. $t = \frac{m}{k}\left(\frac{1}{v_1} - \frac{1}{v_0}\right) = \frac{500}{25}\left(\frac{1}{2} - \frac{1}{10}\right) = 8\text{ s}$.
  2. $s = \frac{m}{k} \ln\left(\frac{v_0}{v_1}\right) = 20 \ln 5 \approx 32.19\text{ m}$.
:::

::: info Bài 1.2 (Dao động điều hòa dưới tác dụng của lực đàn hồi)
Chất điểm khối lượng $m = 2\text{ kg}$ gắn vào lò xo có độ cứng $c = 200\text{ N/m}$, chuyển động trên mặt sàn nằm ngang không ma sát. Tại thời điểm ban đầu $t = 0$, kéo vật lệch khỏi vị trí cân bằng một đoạn $x_0 = 0.05\text{ m}$ và truyền vận tốc ban đầu $v_0 = 0.4\text{ m/s}$ hướng về gốc tọa độ.
- **Đáp số:**
  - Tần số góc riêng: $k_0 = \sqrt{c/m} = \sqrt{200/2} = 10\text{ rad/s}$.
  - Biên độ dao động: $A = \sqrt{x_0^2 + (v_0/k_0)^2} = \sqrt{0.05^2 + 0.04^2} = \sqrt{0.0041} \approx 0.064\text{ m} = 6.4\text{ cm}$.
  - Phương trình dao động: $x(t) = 0.064 \cos(10t + 0.675)\text{ m}$.
:::

::: info Bài 1.3 (Chuyển động trong trường lực hút Newton)
Chất điểm khối lượng $m$ rơi tự do từ độ cao $h$ so với mặt đất về phía tâm Trái Đất (bán kính Trái Đất $R$). Bỏ qua sức cản không khí. Lực hút tỉ lệ nghịch với bình phương khoảng cách tới tâm: $F = -mg \frac{R^2}{r^2}$.
- **Đáp số:** Vận tốc khi chạm đất: $v = \sqrt{\frac{2gh}{1 + h/R}}$. Khi $h \ll R$, biểu thức lùi về kết quả cổ điển $v = \sqrt{2gh}$.
:::
