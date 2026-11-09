---
title: "Bài Tập Động Học - Chương 3: Chuyển Động Song Phẳng"
layout: doc
---

# Chương 3: Chuyển Động Song Phẳng Của Vật Rắn

> [!NOTE] Cơ sở lý thuyết liên quan
> Xem lý thuyết chi tiết về tâm vận tốc tức thời, định lý hình chiếu vận tốc và tâm gia tốc tại: **[Giáo trình Lý thuyết: Chương 4 – Chuyển Động Song Phẳng](/dong-hoc/chuong-4)**.

---

## 3.1. CƠ SỞ LÝ THUYẾT

Chuyển động song phẳng là chuyển động trong đó mọi điểm của vật rắn luôn di chuyển trong các mặt phẳng song song với một mặt phẳng cố định quy chiếu. Chuyển động của vật được quy về chuyển động của một tiết diện phẳng (hình phẳng) trong mặt phẳng của nó.

### 3.1.1. Khảo sát vận tốc trong hình phẳng
Chọn một điểm $A$ làm cực (điểm đã biết vận tốc $\vec{v}_A$):
$$\vec{v}_B = \vec{v}_A + \vec{v}_{BA}$$
trong đó $\vec{v}_{BA}$ là vận tốc của điểm $B$ quay quanh cực $A$:
$$v_{BA} = \omega \cdot AB, \quad \vec{v}_{BA} \perp AB$$

* **Định lý hình chiếu vận tốc:** Hình chiếu vectơ vận tốc của hai điểm bất kỳ thuộc vật rắn lên đường thẳng nối hai điểm đó luôn luôn bằng nhau:
  $$\text{pr}_{AB} \vec{v}_A = \text{pr}_{AB} \vec{v}_B \iff v_A \cos\alpha = v_B \cos\beta$$

* **Tâm vận tốc tức thời (Tâm quay tức thời $P$):**
  Tại mỗi thời điểm, luôn tồn tại duy nhất một điểm $P$ thuộc hình phẳng (hoặc gắn liền với hình phẳng) có vận tốc tức thời triệt tiêu: $v_P = 0$.
  - Vận tốc của một điểm bất kỳ $M$ thuộc hình phẳng:
    $$v_M = \omega \cdot MP, \quad \vec{v}_M \perp MP$$
  - Vận tốc góc của hình phẳng:
    $$\omega = \frac{v_A}{AP} = \frac{v_B}{BP} = \frac{v_M}{MP}$$
  - **Quy tắc xác định vị trí tâm $P$:**
    1. Khi biết phương của hai vectơ vận tốc $\vec{v}_A$ và $\vec{v}_B$ không song song: Tâm $P$ là **giao điểm** của hai đường thẳng hạ vuông góc từ $A$ và $B$ với các vectơ vận tốc tương ứng.
    2. Bánh xe lăn không trượt trên đường ray cố định: Tâm vận tốc tức thời $P$ nằm tại **điểm tiếp xúc** giữa vành bánh xe và mặt đường ($v_P = 0$).

---

### 3.1.2. Khảo sát gia tốc trong hình phẳng
Quan hệ gia tốc giữa hai điểm $A$ và $B$:
$$\vec{a}_B = \vec{a}_A + \vec{a}_{BA}^n + \vec{a}_{BA}^\tau$$
trong đó:
- $\vec{a}_{BA}^n$: Gia tốc hướng tâm quay quanh cực $A$, hướng từ $B$ về $A$:
  $$a_{BA}^n = \omega^2 \cdot AB = \frac{v_{BA}^2}{AB}$$
- $\vec{a}_{BA}^\tau$: Gia tốc tiếp tuyến quay quanh cực $A$, vuông góc với đoạn $AB$:
  $$a_{BA}^\tau = |\varepsilon| \cdot AB$$

---

## 3.2. BÀI GIẢI MẪU

### Thí dụ 8-1: Phân tích động học cơ cấu 4 khâu bản lề

**Đề bài:** Cho cơ cấu 4 khâu bản lề phẳng $O_1 A B O_2$. Khâu dẫn $O_1 A = 0.4\text{ m}$ quay quanh trục cố định $O_1$ với vận tốc góc không đổi $\omega_1 = 10\text{ rad/s}$. Tại thời điểm khảo sát, khâu $O_1 A$ nằm nghiêng và khâu truyền $AB = 0.5\text{ m}$, khâu bị dẫn $O_2 B = 0.5\text{ m}$ có các góc nghiêng như hình vẽ. Xác định vận tốc góc của thanh truyền $AB$ và vận tốc điểm $B$.

<div class="figure-container">

<img src="/figures/bai-tap/dong-hoc/hinh_8_14.svg" alt="Hình 8-14: Cơ cấu 4 khâu bản lề phẳng" style="max-width: 480px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 8-14: Xác định tâm vận tốc tức thời P của thanh truyền AB

</div>

</div>

**Bài giải:**

**1. Vận tốc của khớp $A$:**
Khớp $A$ thuộc khâu $O_1 A$ quay quanh $O_1$:
$$v_A = \omega_1 \cdot O_1 A = 10 \times 0.4 = 4\text{ m/s}$$
Phương của $\vec{v}_A$ vuông góc với đoạn $O_1 A$.

**2. Vận tốc của khớp $B$:**
Khớp $B$ thuộc khâu $O_2 B$ quay quanh trục cố định $O_2$, nên phương của $\vec{v}_B$ vuông góc với đoạn $O_2 B$.

**3. Xác định tâm vận tốc tức thời $P$ của thanh truyền $AB$:**
Thanh truyền $AB$ chuyển động song phẳng:
- Đường vuông góc với $\vec{v}_A$ tại $A$ chính là đường thẳng $O_1 A$.
- Đường vuông góc với $\vec{v}_B$ tại $B$ chính là đường thẳng $O_2 B$.
Giao điểm của hai đường thẳng này là tâm vận tốc tức thời $P$ của khâu $AB$:
$$P = O_1 A \cap O_2 B$$

Từ sơ đồ hình học tại vị trí khảo sát, ta tính được các khoảng cách từ $P$ đến $A$ và $B$:
$$AP = 0.8\text{ m}, \quad BP = 0.6\text{ m}$$

**4. Tính vận tốc góc của thanh truyền $AB$:**
$$\omega_{AB} = \frac{v_A}{AP} = \frac{4\text{ m/s}}{0.8\text{ m}} = 5\text{ rad/s}$$

**5. Tính vận tốc của khớp $B$ và vận tốc góc của khâu bị dẫn $O_2 B$:**
$$v_B = \omega_{AB} \cdot BP = 5 \times 0.6 = 3\text{ m/s}$$
Vận tốc góc của khâu $O_2 B$:
$$\omega_{O2B} = \frac{v_B}{O_2 B} = \frac{3}{0.5} = 6\text{ rad/s}$$

---

## 3.3. BÀI TẬP TỰ RÈN LUYỆN (CÓ ĐÁP SỐ)

::: info Bài 3-1: Bánh xe lăn không trượt trên đường ray phẳng
Bánh xe bán kính $R = 0.5\text{ m}$ lăn không trượt trên đường ray ngang. Trục bánh xe di chuyển với vận tốc không đổi $v_O = 4\text{ m/s}$. Tìm vận tốc của điểm cao nhất $A$ trên vành bánh xe và điểm $B$ ở vị trí ngang tâm bánh xe.
* **Đáp số:**
  - Tâm vận tốc tức thời $P$ tại điểm tiếp xúc đáy: $v_P = 0 \implies \omega = \frac{v_O}{R} = \frac{4}{0.5} = 8\text{ rad/s}$.
  - Điểm $A$ (cách $P$ đoạn $2R$): $v_A = \omega(2R) = 2 v_O = 8\text{ m/s}$.
  - Điểm $B$ (cách $P$ đoạn $R\sqrt{2}$): $v_B = \omega(R\sqrt{2}) = 4\sqrt{2} \approx 5.66\text{ m/s}$.
:::
