---
title: "Bài Tập Động Học - Chương 5: Hợp Chuyển Động Của Điểm"
layout: doc
---

# Chương 5: Hợp Chuyển Động Của Điểm

> [!NOTE] Cơ sở lý thuyết liên quan
> Xem lý thuyết chi tiết về chuyển động tuyệt đối, tương đối, theo đà và gia tốc Coriolis tại: **[Giáo trình Lý thuyết: Chương 3 – Hợp Chuyển Động của Điểm](/dong-hoc/chuong-3)**.

Hợp chuyển động của điểm khảo sát chuyển động của một chất điểm đối với hai hệ quy chiếu khác nhau cùng một lúc: một hệ quy chiếu đứng yên (hệ cố định) và một hệ quy chiếu đang di chuyển (hệ động).

---

## 5.1. CƠ SỞ LÝ THUYẾT

### 5.1.1. Các định nghĩa chuyển động
Cho điểm $M$ chuyển động trong hệ quy chiếu động $Oxyz$, bản thân hệ $Oxyz$ lại chuyển động so với hệ cố định $O_1 X_1 Y_1 Z_1$:
* **Chuyển động tương đối:** Chuyển động của điểm $M$ đối với hệ quy chiếu động $Oxyz$. Vận tốc tương đối là $\vec{v}_r$, gia tốc tương đối là $\vec{a}_r$.
* **Chuyển động theo đà:** Chuyển động của hệ quy chiếu động $Oxyz$ (hoặc của một điểm cố định thuộc hệ động đang trùng với $M$ tại thời điểm khảo sát) đối với hệ cố định. Vận tốc theo đà là $\vec{v}_e$, gia tốc theo đà là $\vec{a}_e$.
* **Chuyển động tuyệt đối:** Chuyển động của điểm $M$ đối với hệ quy chiếu cố định $O_1 X_1 Y_1 Z_1$. Vận tốc tuyệt đối là $\vec{v}_a$, gia tốc tuyệt đối là $\vec{a}_a$.

---

### 5.1.2. Định lý cộng vận tốc
Vectơ vận tốc tuyệt đối bằng tổng hình học của vectơ vận tốc theo đà và vectơ vận tốc tương đối:
$$\vec{v}_a = \vec{v}_e + \vec{v}_r$$
Độ lớn:
$$v_a = \sqrt{v_e^2 + v_r^2 + 2 v_e v_r \cos(\vec{v}_e, \vec{v}_r)}$$

---

### 5.1.3. Định lý cộng gia tốc (Định lý Coriolis)
Vectơ gia tốc tuyệt đối của điểm bằng tổng hình học của gia tốc theo đà, gia tốc tương đối và gia tốc phụ Coriolis:
$$\vec{a}_a = \vec{a}_e + \vec{a}_r + \vec{a}_c$$
trong đó:
* $\vec{a}_e = \vec{a}_e^\tau + \vec{a}_e^n$: Gia tốc theo đà của điểm thuộc hệ động trùng với $M$.
* $\vec{a}_r = \vec{a}_r^\tau + \vec{a}_r^n$: Gia tốc tương đối dọc theo quỹ đạo tương đối.
* **Gia tốc Coriolis $\vec{a}_c$:** Đặc trưng cho sự biến đổi tương tác qua lại giữa chuyển động tương đối và chuyển động theo đà:
  $$\vec{a}_c = 2(\vec{\omega}_e \times \vec{v}_r)$$
  - Độ lớn:
    $$a_c = 2 \omega_e v_r \sin(\vec{\omega}_e, \vec{v}_r)$$
  - Phương chiều: Theo quy tắc vặn nút chai của tích vectơ. Hoặc quy tắc phẳng: Chiếu vectơ $\vec{v}_r$ lên mặt phẳng vuông góc với $\vec{\omega}_e$, rồi **quay vectơ này một góc $90^\circ$ theo chiều quay của $\vec{\omega}_e$**.
  - **Trường hợp triệt tiêu ($a_c = 0$):**
    1. Khi chuyển động theo đà là chuyển động tịnh tiến ($\vec{\omega}_e = 0$).
    2. Khi điểm dừng lại tương đối tức thời ($v_r = 0$).
    3. Khi vectơ vận tốc tương đối song song với trục quay theo đà ($\vec{v}_r \parallel \vec{\omega}_e$).

---

## 5.2. BÀI GIẢI MẪU

### Thí dụ 10-2: Con trượt trên cơ cấu hình bình hành

**Đề bài:** Một cơ cấu 4 khâu có dạng hình bình hành $O_1 A B O_2$. Tay quay $O_1 A = 0.5\text{ m}$ quay quanh trục cố định $O_1$ với vận tốc góc $\omega = 2t\text{ rad/s}$. Dọc theo thanh $AB$, một con trượt $M$ chuyển động theo quy luật:
$$\xi = AM = 5t^2 \quad (\xi\text{ tính bằng m, } t\text{ tính bằng s})$$
Tìm vận tốc và gia tốc tuyệt đối của con trượt $M$ tại thời điểm $t = 2\text{ s}$, biết tại thời điểm đó góc $\varphi = \widehat{AO_1 O_2} = 30^\circ$.

**Bài giải:**

**1. Chọn hệ quy chiếu:**
- Hệ cố định: Gắn vào giá đỡ máy và hai ổ trục $O_1, O_2$.
- Hệ động: Gắn vào thanh truyền $AB$.
Vì cơ cấu là hình bình hành ($O_1 A \parallel O_2 B$ và $O_1 A = O_2 B$) nên thanh $AB$ thực hiện chuyển động **tịnh tiến cong**. Vận tốc góc theo đà bằng không: $\vec{\omega}_e = 0 \implies \vec{a}_c = 0$.

**2. Phân tích vận tốc tại $t = 2\text{ s}$:**
- Tại $t = 2\text{ s}$: Vận tốc góc của khâu $O_1 A$:
  $$\omega_e = 2 \times 2 = 4\text{ rad/s}$$
- Vận tốc theo đà $\vec{v}_e$: Do thanh $AB$ tịnh tiến cùng vận tốc với điểm $A$:
  $$v_e = v_A = \omega_e \cdot O_1 A = 4 \times 0.5 = 2\text{ m/s}$$
  Phương của $\vec{v}_e$ vuông góc với đoạn $O_1 A$ (nghiêng góc $60^\circ$ so với phương nằm ngang $AB$).
- Vận tốc tương đối $\vec{v}_r$:
  $$v_r = \dot{\xi} = \frac{d}{dt}(5t^2) = 10t = 10 \times 2 = 20\text{ m/s}$$
  Phương của $\vec{v}_r$ nằm dọc theo thanh $AB$ hướng từ $A$ sang $B$.

- Vận tốc tuyệt đối $\vec{v}_a = \vec{v}_e + \vec{v}_r$:
  Góc giữa $\vec{v}_e$ và $\vec{v}_r$ là:
  $$\alpha = 90^\circ - \varphi = 90^\circ - 30^\circ = 60^\circ$$
  Độ lớn vận tốc tuyệt đối:
  $$v_a = \sqrt{v_e^2 + v_r^2 + 2 v_e v_r \cos 60^\circ} = \sqrt{2^2 + 20^2 + 2(2)(20)(0.5)} = \sqrt{4 + 400 + 40} = \sqrt{444} \approx 21.07\text{ m/s}$$

**3. Phân tích gia tốc tại $t = 2\text{ s}$:**
- Gia tốc tương đối:
  $$a_r = \ddot{\xi} = 10\text{ m/s}^2 \quad (\text{dọc theo } AB)$$
- Gia tốc theo đà của điểm $A$:
  - Gia tốc góc của tay quay: $\varepsilon_e = \frac{d\omega}{dt} = 2\text{ rad/s}^2$.
  - Gia tốc tiếp: $a_e^\tau = \varepsilon_e \cdot O_1 A = 2 \times 0.5 = 1\text{ m/s}^2 \perp O_1 A$.
  - Gia tốc pháp: $a_e^n = \omega_e^2 \cdot O_1 A = 4^2 \times 0.5 = 8\text{ m/s}^2$ dọc theo $A O_1$.
- Gia tốc Coriolis:
  Do chuyển động theo đà là tịnh tiến ($\vec{\omega}_e = 0$) nên $\vec{a}_c = 0$.
- Chiếu các vectơ gia tốc lên hai phương vuông góc, ta tính được gia tốc toàn phần:
  $$a_a \approx 13.5\text{ m/s}^2$$

---

## 5.3. BÀI TẬP TỰ RÈN LUYỆN (CÓ ĐÁP SỐ)

::: info Bài 5-1: Con trượt trên rãnh quay (Cơ cấu Culit)
Một tay cần $OA$ quay đều quanh trục cố định $O$ nằm ngang với vận tốc góc không đổi $\omega = 5\text{ rad/s}$. Dọc theo rãnh của tay cần có một con trượt $M$ chuyển động ra xa gốc $O$ với vận tốc tương đối không đổi $v_r = 2\text{ m/s}$. Tại thời điểm con trượt cách gốc $O$ một khoảng cách $OM = 0.8\text{ m}$, hãy xác định:
1. Độ lớn và hướng của gia tốc Coriolis $\vec{a}_c$.
2. Gia tốc toàn phần của con trượt $M$.
* **Đáp số:**
  - $a_c = 2 \omega v_r = 2 \times 5 \times 2 = 20\text{ m/s}^2$ (phương vuông góc với tay cần $OA$).
  - $a_e^n = \omega^2 \cdot OM = 5^2 \times 0.8 = 20\text{ m/s}^2$ (hướng từ $M$ về $O$).
  - $a_e^\tau = 0, a_r = 0 \implies a_a = \sqrt{a_c^2 + (a_e^n)^2} = \sqrt{20^2 + 20^2} = 20\sqrt{2} \approx 28.28\text{ m/s}^2$.
:::
