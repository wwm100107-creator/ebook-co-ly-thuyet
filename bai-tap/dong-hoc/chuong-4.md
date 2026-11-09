---
title: "Bài Tập Động Học - Chương 4: Chuyển Động Cầu"
layout: doc
---

# Chương 4: Chuyển Động Quanh Một Điểm Cố Định (Chuyển Động Cầu)

> [!NOTE] Cơ sở lý thuyết liên quan
> Xem lý thuyết chi tiết về các góc Euler, trục quay tức thời và công thức Euler tại: **[Giáo trình Lý thuyết: Chương 2 – Chuyển Động Cơ Bản của Vật Rắn](/dong-hoc/chuong-2)**.

Chuyển động của vật rắn có một điểm đứng yên (khớp cầu) là một dạng chuyển động không gian 3 bậc tự do đặc sắc, có ứng dụng nền tảng trong lý thuyết con quay hồi chuyển, thiết bị hàng không vũ trụ và robot đa trục.

---

## 4.1. CƠ SỞ LÝ THUYẾT

### 4.1.1. Hệ góc Euler
Để xác định vị trí của vật rắn quanh điểm cố định $O$, ta gắn hệ trục động $Oxyz$ vào vật và hệ trục cố định $O X_1 Y_1 Z_1$ trong không gian. Vị trí của vật xác định bởi 3 góc Euler:
1. **Góc tiến động (Precession) $\psi$:** Góc giữa trục cố định $O X_1$ và đường nút $ON$ (giao tuyến của mặt phẳng $O X_1 Y_1$ và mặt phẳng $Oxy$).
2. **Góc nghiêng (Nutration) $\theta$:** Góc giữa trục cố định $O Z_1$ và trục động $Oz$.
3. **Góc tự quay (Spin) $\varphi$:** Góc giữa đường nút $ON$ và trục động $Ox$.

---

### 4.1.2. Vectơ vận tốc góc và trục quay tức thời
Tại mỗi thời điểm, chuyển động của vật rắn quanh điểm cố định $O$ tương đương với một chuyển động quay tức thời quanh một trục đi qua $O$ gọi là **trục quay tức thời** với vận tốc góc $\vec{\omega}$:
$$\vec{\omega} = \vec{\dot{\psi}} + \vec{\dot{\theta}} + \vec{\dot{\varphi}}$$

* **Vận tốc của một điểm $M$ bất kỳ trên vật:**
  Theo công thức Euler:
  $$\vec{v}_M = \vec{\omega} \times \vec{r}_M$$
  Độ lớn: $v_M = \omega \cdot h$, trong đó $h$ là khoảng cách vuông góc từ điểm $M$ đến trục quay tức thời.

* **Gia tốc của điểm $M$:**
  Lấy đạo hàm vận tốc theo thời gian:
  $$\vec{a}_M = \frac{d\vec{v}_M}{dt} = \vec{\varepsilon} \times \vec{r}_M + \vec{\omega} \times (\vec{\omega} \times \vec{r}_M) = \vec{a}_M^\tau + \vec{a}_M^n$$
  - Gia tốc quay: $\vec{a}_M^\tau = \vec{\varepsilon} \times \vec{r}_M$ (vuông góc với mặt phẳng chứa $\vec{\varepsilon}$ và $\vec{r}_M$).
  - Gia tốc hướng tâm trục: $\vec{a}_M^n = \vec{\omega} \times (\vec{\omega} \times \vec{r}_M)$ (hướng vuông góc từ $M$ vào trục quay tức thời, độ lớn $a_M^n = \omega^2 h$).

---

## 4.2. BÀI GIẢI MẪU

### Thí dụ 9-1: Nón lăn trên mặt nón cố định

**Đề bài:** Một hình nón tròn xoay có góc ở đỉnh $2\alpha$ đỉnh tựa tại gốc $O$, lăn không trượt trên mặt phẳng nằm ngang cố định. Đáy hình nón là hình tròn bán kính $R$ lăn quanh trục thẳng đứng với vận tốc góc $\omega_1$. Tìm vận tốc góc toàn phần $\vec{\omega}$ của hình nón và vận tốc của điểm cao nhất trên đáy nón.

**Bài giải:**

**1. Xác định trục quay tức thời:**
Vì hình nón lăn không trượt trên mặt phẳng ngang, nên đường sinh tiếp xúc giữa hình nón và mặt phẳng ngang là đường đứng yên tức thời $\rightarrow$ Đó chính là **trục quay tức thời** $OP$.

**2. Phân tích vận tốc góc:**
Chuyển động của nón là tổng hợp của chuyển động tiến động quay quanh trục đứng $Oz$ với vận tốc góc $\vec{\omega}_1$ và tự quay quanh trục đối xứng của nón với vận tốc góc $\vec{\omega}_2$.
Để trục quay tức thời là đường sinh tiếp xúc nằm ngang, vectơ vận tốc góc tổng hợp $\vec{\omega} = \vec{\omega}_1 + \vec{\omega}_2$ phải nằm dọc theo đường sinh tiếp xúc:
$$\omega = \frac{\omega_1}{\sin\alpha}$$

**3. Vận tốc của điểm cao nhất trên đáy nón:**
Điểm cao nhất $B$ trên vành đáy cách đường sinh tiếp xúc một khoảng cách bằng đường kính đáy: $h = 2R$.
Vận tốc dài của điểm $B$:
$$v_B = \omega \cdot h = \left(\frac{\omega_1}{\sin\alpha}\right) \cdot (2R) = \frac{2\omega_1 R}{\sin\alpha}$$

---

## 4.3. BÀI TẬP TỰ RÈN LUYỆN (CÓ ĐÁP SỐ)

::: info Bài 4-1: Con quay hồi chuyển đối xứng
Một con quay đối xứng quay quanh trục đối xứng của nó với tốc độ tự quay $\dot{\varphi} = 300\text{ rad/s}$, đồng thời trục con quay thực hiện chuyển động tiến động đều quanh trục thẳng đứng với vận tốc góc $\dot{\psi} = 2\text{ rad/s}$. Góc nghiêng của trục con quay so với trục đứng là $\theta = 30^\circ = \text{const}$. Tính độ lớn của vectơ vận tốc góc toàn phần $\omega$ và gia tốc góc $\varepsilon$.
* **Đáp số:**
  - $\omega = \sqrt{\dot{\psi}^2 + \dot{\varphi}^2 + 2\dot{\psi}\dot{\varphi}\cos\theta} \approx 301.7\text{ rad/s}$.
  - $\varepsilon = \dot{\psi} \cdot \dot{\varphi} \sin\theta = 2 \times 300 \times \sin 30^\circ = 300\text{ rad/s}^2$.
:::
