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

## 3.2. HƯỚNG DẪN ÁP DỤNG & PHƯƠNG PHÁP GIẢI

1. **Trình tự giải bài toán vận tốc cơ cấu phẳng:**
   - Tách cơ cấu thành từng khâu theo thứ tự từ khâu dẫn (đã biết $\omega_1$) đến các khâu bị dẫn.
   - Với khâu chuyển động song phẳng (thanh truyền $AB$, bánh xe lăn): xác định phương vận tốc của hai điểm $A, B$, dựng hai đường vuông góc với $\vec{v}_A, \vec{v}_B$ tại $A, B$ để tìm tâm vận tốc tức thời $P$, từ đó suy ra $\omega_{AB} = \frac{v_A}{PA}$ và $v_B = \omega_{AB} \cdot PB$.
   - Nếu hai đường vuông góc song song với nhau hoặc giao điểm ở quá xa: áp dụng **Định lý hình chiếu vận tốc** $v_A \cos\alpha = v_B \cos\beta$.
2. **Trình tự giải bài toán gia tốc cơ cấu phẳng:**
   - Bắt buộc phải giải xong bài toán vận tốc (tìm $\omega$ của các khâu) trước để tính được các thành phần gia tốc pháp tuyến $a_{BA}^n = \omega_{AB}^2 \cdot AB$.
   - Viết phương trình vectơ $\vec{a}_B = \vec{a}_A + \vec{a}_{BA}^n + \vec{a}_{BA}^\tau$, sau đó chiếu lên phương vuông góc với ẩn số chưa biết (hoặc dọc theo thanh $AB$) để tìm ngay $a_B$ và $\varepsilon_{AB}$.

---

## 3.3. BÀI GIẢI MẪU (Chương 8 Sách Bài Tập Tập 2)

### Thí dụ 3-1 (Thí dụ 8-1 sách gốc): Phân tích động học cơ cấu 4 khâu bản lề

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

### Thí dụ 3-2 (Thí dụ 8-5 sách gốc): Vận tốc và gia tốc cơ cấu tay quay – con trượt

**Đề bài:** Trong cơ cấu tay quay – con trượt $OAB$, tay quay $OA = r = 0.2\text{ m}$ quay đều quanh trục cố định $O$ với vận tốc góc $\omega_0 = 10\text{ rad/s}$. Thanh truyền $AB = l = 0.4\text{ m}$ nối với con trượt $B$ trượt theo phương nằm ngang đi qua $O$. Xác định vận tốc $v_B$, vận tốc góc $\omega_{AB}$ và gia tốc $a_B$ của con trượt tại thời điểm tay quay $OA$ vuông góc với phương trượt của $B$ ($\varphi = 90^\circ$).

**Bài giải:**

1. **Bài toán vận tốc tại vị trí $OA \perp OB$:**
   - Vận tốc đầu $A$: $v_A = \omega_0 r = 10 \times 0.2 = 2\text{ m/s}$, có phương nằm ngang (song song với phương trượt $OB$).
   - Vì $\vec{v}_A \parallel \vec{v}_B$ (cùng nằm ngang), hai đường vuông góc với $\vec{v}_A$ và $\vec{v}_B$ song song với nhau $\implies$ tâm vận tốc tức thời $P$ của thanh truyền $AB$ ở vô cùng:
     $$\omega_{AB} = 0, \qquad v_B = v_A = 2\text{ m/s} \quad (\text{thanh } AB\text{ tịnh tiến tức thời})$$
2. **Bài toán gia tốc:**
   - Vì tay quay $OA$ quay đều ($\varepsilon_0 = 0$) nên gia tốc điểm $A$ chỉ có thành phần hướng tâm dọc từ $A$ về $O$:
     $$a_A = a_A^n = \omega_0^2 r = 10^2 \times 0.2 = 20\text{ m/s}^2 \quad (\text{thẳng đứng hướng xuống})$$
   - Vì $\omega_{AB} = 0$ tại thời điểm khảo sát nên $a_{BA}^n = \omega_{AB}^2 \cdot AB = 0$. Phương trình gia tốc:
     $$\vec{a}_B = \vec{a}_A + \vec{a}_{BA}^\tau \quad (\text{với } \vec{a}_{BA}^\tau \perp AB)$$
   - Góc nghiêng $\beta$ của thanh $AB$ so với phương ngang $OB$: $\sin\beta = \frac{r}{l} = \frac{0.2}{0.4} = \frac{1}{2} \implies \beta = 30^\circ$.
   - Chiếu phương trình vectơ gia tốc lên phương thanh $AB$ (để khử $\vec{a}_{BA}^\tau$):
     $$a_B \cos 30^\circ = -a_A \sin 30^\circ \implies |a_B| = a_A \tan 30^\circ = \frac{20}{\sqrt{3}} \approx 11.55\text{ m/s}^2$$

---

## 3.4. BÀI TẬP TỰ RÈN LUYỆN (CÓ ĐÁP SỐ)

::: info Bài 3-1: Bánh xe lăn không trượt trên đường ray phẳng
Bánh xe bán kính $R = 0.5\text{ m}$ lăn không trượt trên đường ray ngang. Trục bánh xe di chuyển với vận tốc không đổi $v_O = 4\text{ m/s}$. Tìm vận tốc của điểm cao nhất $A$ trên vành bánh xe và điểm $B$ ở vị trí ngang tâm bánh xe.
* **Đáp số:**
  - Tâm vận tốc tức thời $P$ tại điểm tiếp xúc đáy: $v_P = 0 \implies \omega = \frac{v_O}{R} = \frac{4}{0.5} = 8\text{ rad/s}$.
  - Điểm $A$ (cách $P$ đoạn $2R$): $v_A = \omega(2R) = 2 v_O = 8\text{ m/s}$.
  - Điểm $B$ (cách $P$ đoạn $R\sqrt{2}$): $v_B = \omega(R\sqrt{2}) = 4\sqrt{2} \approx 5.66\text{ m/s}$.
:::
