---
title: "Bài Tập Động Học - Chương 1: Chuyển Động Của Điểm"
layout: doc
---

# Chương 1: Chuyển Động Của Điểm

> [!NOTE] Cơ sở lý thuyết liên quan
> Xem lý thuyết chi tiết về các phương pháp khảo sát chuyển động của điểm tại: **[Giáo trình Lý thuyết: Chương 1 – Động Học Điểm](/dong-hoc/chuong-1)**.

Động học điểm nghiên cứu chuyển động thuần túy về mặt hình học của một chất điểm trong không gian theo thời gian mà chưa xét đến lực gây ra chuyển động.

---

## 1.1. CƠ SỞ LÝ THUYẾT

### 1.1.1. Phương pháp tọa độ Đề-các
Phương trình chuyển động của điểm trong không gian:
$$x = x(t), \quad y = y(t), \quad z = z(t)$$
* **Vectơ vận tốc:**
  $$v_x = \dot{x} = \frac{dx}{dt}, \quad v_y = \dot{y} = \frac{dy}{dt}, \quad v_z = \dot{z} = \frac{dz}{dt}$$
  Độ lớn: $v = \sqrt{v_x^2 + v_y^2 + v_z^2}$.
* **Vectơ gia tốc:**
  $$a_x = \ddot{x} = \frac{dv_x}{dt}, \quad a_y = \ddot{y} = \frac{dv_y}{dt}, \quad a_z = \ddot{z} = \frac{dz}{dt}$$
  Độ lớn: $a = \sqrt{a_x^2 + a_y^2 + a_z^2}$.

---

### 1.1.2. Phương pháp tọa độ tự nhiên
Khi quỹ đạo của điểm đã biết trước, vị trí của điểm xác định bằng tọa độ cong $s = s(t)$ tính từ một gốc $O$ trên quỹ đạo.

* **Vận tốc:**
  $$v = \dot{s} = \frac{ds}{dt}$$
  Vectơ $\vec{v} = v \cdot \vec{\tau}$, luôn tiếp tuyến với quỹ đạo theo chiều chuyển động.
* **Gia tốc (Phân tích theo hệ trục tự nhiên Frenet):**
  $$\vec{a} = \vec{a}_\tau + \vec{a}_n$$
  - **Gia tốc tiếp tuyến $\vec{a}_\tau$:** Đặc trưng cho sự thay đổi về độ lớn của vận tốc:
    $$a_\tau = \dot{v} = \ddot{s} = \frac{dv}{dt}$$
  - **Gia tốc pháp tuyến $\vec{a}_n$:** Đặc trưng cho sự thay đổi về phương chiều của vận tốc (hướng về tâm cong của quỹ đạo):
    $$a_n = \frac{v^2}{\rho}$$
    trong đó $\rho$ là **bán kính cong** của quỹ đạo tại vị trí khảo sát.
  - **Gia tốc toàn phần:**
    $$a = \sqrt{a_\tau^2 + a_n^2}$$
* **Tính chất chuyển động:**
  - Nhanh dần khi $\vec{v} \cdot \vec{a} > 0$ hay $v \cdot a_\tau > 0$ ($v$ và $a_\tau$ cùng dấu).
  - Chậm dần khi $\vec{v} \cdot \vec{a} < 0$ hay $v \cdot a_\tau < 0$ ($v$ và $a_\tau$ trái dấu).

---

## 1.2. HƯỚNG DẪN ÁP DỤNG & PHƯƠNG PHÁP GIẢI

1. **Cách tìm phương trình quỹ đạo từ phương trình chuyển động $x = x(t), y = y(t)$:**
   - Khử tham số thời gian $t$ giữa hai phương trình để đưa về hệ thức $f(x, y) = 0$.
   - Nếu có các hàm lượng giác $\sin(\omega t), \cos(\omega t)$: sử dụng hằng đẳng thức $\sin^2(\omega t) + \cos^2(\omega t) = 1$ để đưa về phương trình đường tròn hoặc elip.
2. **Cách tính bán kính cong $\rho$ của quỹ đạo tại thời điểm $t$ bất kỳ (không cần biết phương trình tự nhiên $s(t)$):**
   - Bước 1: Tính $v_x = \dot{x}, v_y = \dot{y} \implies v = \sqrt{v_x^2 + v_y^2}$.
   - Bước 2: Tính $a_x = \ddot{x}, a_y = \ddot{y} \implies a = \sqrt{a_x^2 + a_y^2}$.
   - Bước 3: Tính gia tốc tiếp tuyến từ đạo hàm độ lớn vận tốc (hoặc phép chiếu lên $\vec{v}$):
     $$a_\tau = \frac{dv}{dt} = \frac{v_x a_x + v_y a_y}{v}$$
   - Bước 4: Suy ra gia tốc pháp tuyến và bán kính cong:
     $$a_n = \sqrt{a^2 - a_\tau^2} \quad (\text{hoặc } a_n = \frac{|v_x a_y - v_y a_x|}{v}) \implies \rho = \frac{v^2}{a_n}$$

---

## 1.3. BÀI GIẢI MẪU (Chương 6 Sách Bài Tập Tập 2)

### Thí dụ 1-1 (Thí dụ 6-1 sách gốc): Khảo sát chuyển động của điểm trong mặt phẳng

**Đề bài:** Chuyển động của một chất điểm trong mặt phẳng $Oxy$ được cho bởi các phương trình:
$$x = 8t - 4t^2, \quad y = 6t - 3t^2$$
trong đó $x, y$ đo bằng mét ($\text{m}$), thời gian $t$ đo bằng giây ($\text{s}$).
1. Xác định phương trình quỹ đạo của điểm.
2. Xác định vectơ vận tốc và gia tốc của điểm tại thời điểm $t$.
3. Xét tính chất chuyển động nhanh dần, chậm dần.

<div class="figure-container">

<img src="/figures/bai-tap/dong-hoc/hinh_6_4.svg" alt="Hình 6-4: Quỹ đạo và vectơ vận tốc, gia tốc của điểm" style="max-width: 420px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 6-4: Quỹ đạo thẳng của chất điểm trong hệ tọa độ Oxy

</div>

</div>

**Bài giải:**

**1. Tìm phương trình quỹ đạo:**
Khử thời gian $t$ giữa hai phương trình:
Nhận xét tỉ số:
$$\frac{x}{y} = \frac{8t - 4t^2}{6t - 3t^2} = \frac{4(2t - t^2)}{3(2t - t^2)} = \frac{4}{3}$$
$$\implies 3x - 4y = 0 \iff y = \frac{3}{4}x$$

Vậy quỹ đạo của chất điểm là một **đường thẳng** đi qua gốc tọa độ $O$ và nghiêng với trục $Ox$ một góc nhọn $\alpha$ có $\tan\alpha = \frac{3}{4}$ ($\alpha \approx 36.87^\circ$).

**2. Xác định vận tốc:**
Lấy đạo hàm bậc nhất theo thời gian:
$$v_x = \dot{x} = 8 - 8t = 8(1 - t)$$
$$v_y = \dot{y} = 6 - 6t = 6(1 - t)$$

Độ lớn của vận tốc:
$$v = \sqrt{v_x^2 + v_y^2} = \sqrt{[8(1-t)]^2 + [6(1-t)]^2} = \sqrt{64 + 36} \cdot |1 - t| = 10|1 - t|\text{ (m/s)}$$

**3. Xác định gia tốc:**
Lấy đạo hàm bậc hai theo thời gian:
$$a_x = \ddot{x} = -8\text{ m/s}^2$$
$$a_y = \ddot{y} = -6\text{ m/s}^2$$

Độ lớn của gia tốc:
$$a = \sqrt{a_x^2 + a_y^2} = \sqrt{(-8)^2 + (-6)^2} = \sqrt{64 + 36} = 10\text{ m/s}^2 = \text{const}$$

Gia tốc của điểm có độ lớn và hướng không đổi dọc theo đường thẳng quỹ đạo hướng về phía gốc tọa độ.

**4. Xét tính chất chuyển động:**
Xét tích vô hướng giữa vận tốc và gia tốc:
$$\vec{v} \cdot \vec{a} = v_x a_x + v_y a_y = 8(1-t)(-8) + 6(1-t)(-6) = -64(1-t) - 36(1-t) = -100(1-t)$$

- **Khoảng thời gian $0 \le t < 1\text{ s}$:**
  $1 - t > 0 \implies \vec{v} \cdot \vec{a} < 0$: Chuyển động **chậm dần** theo hướng từ $O$ đi ra xa dọc theo tia quỹ đạo.
  Tại $t = 1\text{ s}$: tọa độ điểm là $x = 4\text{ m}, y = 3\text{ m}$ (điểm dừng $B$), vận tốc triệt tiêu $v = 0$.
- **Thời điểm $t > 1\text{ s}$:**
  $1 - t < 0 \implies \vec{v} \cdot \vec{a} > 0$: Chất điểm đổi chiều chuyển động và chuyển động **nhanh dần** ngược về phía gốc tọa độ $O$.
  Tại $t = 2\text{ s}$: $x = 0, y = 0$, chất điểm quay trở lại gốc tọa độ $O$ với vận tốc $v = 10\text{ m/s}$.

---

### Thí dụ 1-2 (Thí dụ 6-4 sách gốc): Xác định bán kính cong quỹ đạo từ tọa độ Đề-các

**Đề bài:** Chuyển động của điểm $M$ trong mặt phẳng $Oxy$ được cho bởi phương trình:
$$x = 3\cos(2t), \quad y = 4\sin(2t) \quad (x, y\text{ tính bằng cm; } t\text{ tính bằng s})$$
Tìm phương trình quỹ đạo, vận tốc, gia tốc tiếp tuyến, gia tốc pháp tuyến và bán kính cong $\rho$ của quỹ đạo tại thời điểm $t = \frac{\pi}{4}\text{ s}$.

**Bài giải:**

1. **Phương trình quỹ đạo:**
   $$\frac{x^2}{3^2} + \frac{y^2}{4^2} = \cos^2(2t) + \sin^2(2t) = 1 \implies \frac{x^2}{9} + \frac{y^2}{16} = 1 \quad (\text{Elip bán trục } a=3\text{ cm}, b=4\text{ cm})$$
2. **Vận tốc và gia tốc tại thời điểm $t = \frac{\pi}{4}\text{ s}$ ($2t = \frac{\pi}{2}$):**
   - $v_x = -6\sin(2t) = -6\text{ cm/s}, \quad v_y = 8\cos(2t) = 0 \implies v = 6\text{ cm/s}$.
   - $a_x = -12\cos(2t) = 0, \quad a_y = -16\sin(2t) = -16\text{ cm/s}^2 \implies a = 16\text{ cm/s}^2$.
3. **Gia tốc tiếp tuyến, pháp tuyến và bán kính cong:**
   $$a_\tau = \frac{v_x a_x + v_y a_y}{v} = 0, \qquad a_n = \sqrt{a^2 - a_\tau^2} = 16\text{ cm/s}^2$$
   $$\rho = \frac{v^2}{a_n} = \frac{6^2}{16} = \frac{36}{16} = 2.25\text{ cm}$$

---

## 1.4. BÀI TẬP TỰ RÈN LUYỆN (CÓ ĐÁP SỐ)

::: info Bài 1-1: Chuyển động cong phẳng parabol
Một chất điểm chuyển động theo phương trình: $x = 2t, \quad y = 4t(1 - t)$ ($x, y$ đo bằng $\text{m}$, $t$ bằng $\text{s}$).
1. Xác định phương trình quỹ đạo và vẽ dạng đường đi.
2. Tính vận tốc, gia tốc tiếp tuyến, gia tốc pháp tuyến và bán kính cong của quỹ đạo tại đỉnh parabol ($t = 0.5\text{ s}$).
* **Đáp số:**
  - Quỹ đạo parabol: $y = 2x - x^2$.
  - Đỉnh parabol tại $x = 1\text{ m}, y = 1\text{ m}$: $v = 2\text{ m/s}, a_\tau = 0, a_n = a = 8\text{ m/s}^2 \implies \rho = \frac{v^2}{a_n} = \frac{4}{8} = 0.5\text{ m}$.
:::

::: info Bài 1-2: Chuyển động tròn đều
Điểm $M$ chuyển động trên đường tròn bán kính $R = 2\text{ m}$ theo quy luật cung $s = 4t - t^2$ ($\text{m}$).
1. Tìm thời điểm chất điểm dừng lại đổi chiều.
2. Xác định gia tốc tiếp tuyến, gia tốc pháp tuyến và gia tốc toàn phần lúc $t = 1\text{ s}$.
* **Đáp số:** Dừng lại khi $v = 4 - 2t = 0 \implies t = 2\text{ s}$. Tại $t = 1\text{ s}$: $a_\tau = -2\text{ m/s}^2, a_n = \frac{v^2}{R} = \frac{2^2}{2} = 2\text{ m/s}^2 \implies a = 2\sqrt{2}\text{ m/s}^2$.
:::
