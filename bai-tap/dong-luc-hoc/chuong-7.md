---
title: "Bài Tập Động Lực Học - Chương 7: Động Lực Học Chuyển Động Tương Đối"
description: "Phương trình vi phân chuyển động tương đối, lực quán tính tịnh tiến, ly tâm và lực quán tính Coriolis"
---

# Chương 7: Động Lực Học Chuyển Động Tương Đối

::: tip Tóm tắt chương trình
Khi khảo sát chuyển động của chất điểm hoặc cơ hệ trong **hệ quy chiếu chuyển động (phi quán tính)** $Oxyz$, định luật II Newton vẫn giữ nguyên dạng toán học quen thuộc nếu ta bổ sung thêm các **lực quán tính**:
- **Lực quán tính theo:** $\vec{F}_{\text{qt}}^{(e)} = -m\vec{a}_e$ (gồm lực quán tính tịnh tiến và lực quán tính ly tâm).
- **Lực quán tính Coriolis:** $\vec{F}_{\text{qt}}^{(C)} = -m\vec{a}_C = -2m(\vec{\omega}_e \times \vec{v}_r)$.
:::

---

## 1. Tóm Tắt Lý Thuyết & Công Thức Cốt Lõi

### 1.1. Phương trình vi phân chuyển động tương đối của chất điểm
$$m \vec{a}_r = \sum \vec{F}_k + \vec{F}_{\text{qt}}^{(e)} + \vec{F}_{\text{qt}}^{(C)}$$
trong đó:
- $\vec{a}_r$: Gia tốc tương đối của chất điểm đối với hệ quy chiếu động.
- $\sum \vec{F}_k$: Tổng các lực thực (chủ động và phản lực liên kết).
- $\vec{F}_{\text{qt}}^{(e)} = -m\vec{a}_e$: Lực quán tính theo.
  - Nếu hệ động chuyển động quay đều quanh trục cố định: $\vec{F}_{\text{qt}}^{(e)} = m \omega_e^2 \vec{r}_n$ (**Lực quán tính ly tâm**, hướng vuông góc ra xa trục quay).
- $\vec{F}_{\text{qt}}^{(C)} = -2m (\vec{\omega}_e \times \vec{v}_r)$: **Lực quán tính Coriolis**.

### 1.2. Cân bằng tương đối của chất điểm
Chất điểm đứng yên tương đối trong hệ quy chiếu động ($\vec{v}_r = 0, \; \vec{a}_r = 0 \implies \vec{F}_{\text{qt}}^{(C)} = 0$):
$$\sum \vec{F}_k + \vec{F}_{\text{qt}}^{(e)} = 0$$

### 1.3. Các trường hợp đặc biệt của lực quán tính Coriolis
1. $\vec{F}_{\text{qt}}^{(C)} = 0$ khi:
   - Hệ động chuyển động tịnh tiến ($\vec{\omega}_e = 0$).
   - Chất điểm đứng yên tương đối ($\vec{v}_r = 0$).
   - Véctơ vận tốc tương đối song song với trục quay ($\vec{v}_r \parallel \vec{\omega}_e$).
2. Phương và chiều của $\vec{F}_{\text{qt}}^{(C)}$:
   - Luôn vuông góc với cả $\vec{\omega}_e$ và $\vec{v}_r$.
   - Chiều xác định theo quy tắc bàn tay phải của tích có hướng $-(\vec{\omega}_e \times \vec{v}_r)$.

---

## 2. Bài Giải Mẫu Điển Hình

### Thí dụ 7-1: Chất điểm chuyển động trong rãnh thẳng quay đều nằm ngang

<div class="figure-container">

<img src="/figures/bai-tap/dong-luc-hoc/hinh_7_1.svg" alt="Hình 7-1: Chất điểm chuyển động trong rãnh quay đều chịu lực Coriolis" style="max-height: 260px;" />

<div class="figure-caption">

Hình 7-1: Khảo sát chuyển động tương đối của chất điểm trong rãnh quay bằng phương trình ĐLH tương đối

</div>

</div>

**Đề bài:**
Một viên bi nhỏ $M$ khối lượng $m$ có thể trượt không ma sát dọc theo một rãnh thẳng của một thanh nằm ngang. Thanh quay đều quanh trục thẳng đứng đi qua đầu $O$ với vận tốc góc không đổi $\omega$.
Tại thời điểm ban đầu $t = 0$, viên bi ở vị trí cách gốc $O$ một đoạn $r_0$ và có vận tốc tương đối dọc rãnh bằng 0 ($v_{r0} = 0$).
1. Lập phương trình vi phân chuyển động tương đối của viên bi dọc theo rãnh.
2. Tìm quy luật chuyển động tương đối $r(t)$ và vận tốc tương đối $v_r(t)$.
3. Xác định áp lực của viên bi tác dụng lên thành rãnh theo thời gian $t$.

**Bài giải:**

**1. Chọn hệ quy chiếu động:**
Gắn hệ tọa độ động $Oxyz$ với thanh quay:
- Gốc $O$ tại tâm quay.
- Trục $Ox$ dọc theo rãnh quay.
- Trục $Oz$ thẳng đứng trùng với trục quay (hướng của $\vec{\omega}$).
- Trục $Oy$ vuông góc với rãnh trong mặt phẳng ngang.

**2. Phân tích lực tác dụng lên viên bi $M$:**
- Trọng lực: $\vec{P} = -m g \vec{k}$ (theo trục $Oz$).
- Phản lực của rãnh: Do rãnh nhẵn, phản lực chỉ gồm thành phần thẳng đứng $N_z$ và thành phần ngang vuông góc với rãnh $N_y$:
  $$\vec{N} = N_y \vec{j} + N_z \vec{k}$$
- Lực quán tính theo (ly tâm): Vì trục quay đều, $\vec{a}_e$ chỉ là gia tốc hướng tâm hướng về $O$:
  $$\vec{F}_{\text{qt}}^{(e)} = m \omega^2 x \vec{i}$$
- Lực quán tính Coriolis:
  Vận tốc tương đối $\vec{v}_r = \dot{x}\vec{i}$.
  $$\vec{\omega} = \omega \vec{k}$$
  $$\vec{F}_{\text{qt}}^{(C)} = -2m (\vec{\omega} \times \vec{v}_r) = -2m (\omega \vec{k} \times \dot{x}\vec{i}) = -2m \omega \dot{x} \vec{j}$$

**3. Phương trình vi phân chuyển động tương đối:**
$$m \vec{a}_r = \vec{P} + \vec{N} + \vec{F}_{\text{qt}}^{(e)} + \vec{F}_{\text{qt}}^{(C)}$$

Chiếu lên 3 trục tọa độ:
$$\begin{cases}
m \ddot{x} = m \omega^2 x \tag{1} \\
0 = N_y - 2m \omega \dot{x} \tag{2} \\
0 = N_z - mg \tag{3}
\end{cases}$$

**4. Tích phân phương trình chuyển động tương đối:**
Phương trình (1):
$$\ddot{x} - \omega^2 x = 0$$
Phương trình đặc trưng: $\lambda^2 - \omega^2 = 0 \implies \lambda = \pm\omega$.
Nghiệm tổng quát:
$$x(t) = C_1 e^{\omega t} + C_2 e^{-\omega t} = A \cosh(\omega t) + B \sinh(\omega t)$$

Điều kiện ban đầu tại $t = 0$: $x(0) = r_0, \; \dot{x}(0) = 0$:
$$C_1 + C_2 = r_0, \quad \omega(C_1 - C_2) = 0 \implies C_1 = C_2 = \frac{r_0}{2}$$

Quy luật chuyển động tương đối:
$$x(t) = r_0 \cosh(\omega t) = \frac{r_0}{2}\left(e^{\omega t} + e^{-\omega t}\right)$$
Vận tốc tương đối:
$$v_r(t) = \dot{x}(t) = r_0 \omega \sinh(\omega t) = \frac{r_0 \omega}{2}\left(e^{\omega t} - e^{-\omega t}\right)$$

**5. Áp lực tác dụng lên thành rãnh:**
Từ phương trình (2) và (3):
$$N_z = mg$$
$$N_y = 2m \omega \dot{x} = 2m r_0 \omega^2 \sinh(\omega t)$$

Theo định luật III Newton, áp lực toàn phần tác dụng lên thành rãnh:
$$N = \sqrt{N_y^2 + N_z^2} = \sqrt{(mg)^2 + \left[2m r_0 \omega^2 \sinh(\omega t)\right]^2}$$

---

## 3. Bài Tập Rèn Luyện Có Đáp Số

::: info Bài 7.1 (Độ lệch của vật rơi tự do do lực Coriolis của Trái Đất)
Thả một vật rơi tự do từ độ cao $h = 100\text{ m}$ tại một địa điểm có vĩ độ bắc $\lambda = 45^\circ$. Bỏ qua sức cản không khí. Biết vận tốc góc tự quay của Trái Đất $\omega \approx 7.29 \times 10^{-5}\text{ rad/s}$.
- **Đáp số:** Lực Coriolis làm vật bị lệch về phía **Đông**. Độ lệch khi chạm đất: $x_E = \frac{2}{3} \omega h \cos\lambda \sqrt{\frac{2h}{g}} \approx 1.55\text{ cm}$.
:::

::: info Bài 7.2 (Góc lệch của con lắc Foucault)
Con lắc Foucault dao động tại vĩ độ $\lambda$.
- **Đáp số:** Mặt phẳng dao động của con lắc quay chậm dần theo chiều kim đồng hồ ở Bắc Bán Cầu với chu kỳ: $T_{\text{Foucault}} = \frac{24\text{ giờ}}{\sin\lambda}$.
:::
