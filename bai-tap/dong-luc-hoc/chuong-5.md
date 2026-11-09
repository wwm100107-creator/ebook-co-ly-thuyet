---
title: "Bài Tập Động Lực Học - Chương 5: Phương Trình Lagrange Loại II"
description: "Thiết lập phương trình vi phân chuyển động cơ hệ phức tạp, thế năng, hàm Lagrange và dao động nhỏ"
---

# Chương 5: Phương Trình Chuyển Động Cơ Hệ - Lagrange Loại II

::: tip Tóm tắt chương trình
Phương trình Lagrange loại II là đỉnh cao của cơ học giải tích cổ điển. Phương trình này cho phép thiết lập hệ phương trình vi phân chuyển động của cơ hệ phức tạp có số bậc tự do tùy ý một cách hoàn toàn tự động và có hệ thống thông qua việc tính toán **Động năng** $T(q_j, \dot{q}_j)$ và **Thế năng** $\Pi(q_j)$ (hoặc Lực suy rộng $Q_j$).
:::

---

## 1. Tóm Tắt Lý Thuyết & Công Thức Cốt Lõi

### 1.1. Phương trình Lagrange loại II tổng quát
Đối với cơ hệ chịu các liên kết holonom (hình học), dừng và lý tưởng có $s$ bậc tự do:
$$\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_j}\right) - \frac{\partial T}{\partial q_j} = Q_j \quad (j = 1, 2, \dots, s)$$
trong đó:
- $q_j$: Tọa độ suy rộng thứ $j$.
- $\dot{q}_j$: Vận tốc suy rộng thứ $j$.
- $T(q_j, \dot{q}_j, t)$: Tổng động năng của toàn bộ cơ hệ.
- $Q_j$: Lực suy rộng tương ứng với tọa độ $q_j$.

### 1.2. Trường hợp cơ hệ bảo toàn (Có hàm thế)
Nếu tất cả các lực tác dụng đều là lực thế (sinh ra từ hàm thế năng $\Pi(q_j)$):
$$Q_j = -\frac{\partial \Pi}{\partial q_j}$$
Định nghĩa **hàm Lagrange** (Lagrangian):
$$L = T - \Pi$$
Khi đó hệ phương trình rút gọn thành:
$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_j}\right) - \frac{\partial L}{\partial q_j} = 0 \quad (j = 1, 2, \dots, s)$$

### 1.3. Các trường hợp tích phân đầu (Định luật bảo toàn)
1. **Tích phân Jacobi (Bảo toàn cơ năng):**
   Nếu hệ dừng (thời gian $t$ không xuất hiện tường minh trong liên kết và hàm thế) và lực thế:
   $$T + \Pi = E = \text{const}$$
2. **Tọa độ vòng (Cyclic Coordinate):**
   Nếu hàm Lagrange $L$ không chứa tường minh tọa độ $q_k$ ($\frac{\partial L}{\partial q_k} = 0$), thì xung lượng suy rộng tương ứng là một hằng số bảo toàn:
   $$p_k = \frac{\partial L}{\partial \dot{q}_k} = \text{const}$$

---

## 2. Quy Trình 5 Bước Lập Phương Trình Lagrange II

1. **Xác định số bậc tự do $s$:** Chọn hệ $s$ tọa độ suy rộng độc lập $q_1, \dots, q_s$.
2. **Biểu diễn tọa độ và vận tốc của các phần tử:** Xác định $v_i^2, \omega_i^2$ theo các tọa độ $q_j$ và vận tốc suy rộng $\dot{q}_j$.
3. **Tính tổng động năng $T$:**
   $$T = \sum T_k = \frac{1}{2} \sum_{i,j} a_{ij}(q) \dot{q}_i \dot{q}_j$$
4. **Tính thế năng $\Pi$ (hoặc Lực suy rộng $Q_j$):**
   $$\Pi = \sum \Pi_{\text{trọng trường}} + \sum \Pi_{\text{lò xo}}$$
5. **Thực hiện các phép lấy đạo hàm:**
   - Đạo hàm riêng theo vận tốc suy rộng: $\frac{\partial T}{\partial \dot{q}_j}$.
   - Đạo hàm toàn phần theo thời gian: $\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_j}\right)$.
   - Đạo hàm riêng theo tọa độ suy rộng: $\frac{\partial T}{\partial q_j}$.
   - Thay vào phương trình Lagrange và rút gọn.

---

## 3. Bài Giải Mẫu Điển Hình

### Thí dụ 5-1: Lập phương trình vi phân chuyển động của con lắc trượt

<div class="figure-container">

<img src="/figures/bai-tap/dong-luc-hoc/hinh_5_1.svg" alt="Hình 5-1: Con lắc gắn trên con trượt trượt dọc thanh ngang" style="max-height: 260px;" />

<div class="figure-caption">

Hình 5-1: Thiết lập phương trình vi phân của con lắc trượt bằng phương trình Lagrange loại II

</div>

</div>

**Đề bài:**
Cơ hệ gồm:
- Con trượt $A$ khối lượng $M$ trượt không ma sát dọc theo thanh dẫn hướng nằm ngang cố định.
- Tại $A$ gắn bản lề treo một con lắc đơn gồm thanh nhẹ dài $l$ và quả nặng $B$ khối lượng $m$.
Hệ chuyển động trong mặt phẳng thẳng đứng.
1. Chọn tọa độ suy rộng thích hợp và xác định số bậc tự do của hệ.
2. Thiết lập hệ phương trình vi phân chuyển động của cơ hệ bằng phương trình Lagrange loại II.
3. Trong trường hợp dao động nhỏ ($\varphi \ll 1$), hãy tìm tần số dao động riêng của con lắc.

**Bài giải:**

**1. Bậc tự do và tọa độ suy rộng:**
Cơ hệ có 2 bậc tự do ($s = 2$). Ta chọn:
- $q_1 = x$: Tọa độ vị trí của con trượt $A$ trên thanh ngang.
- $q_2 = \varphi$: Góc lệch của thanh treo so với phương thẳng đứng.

**2. Động năng của hệ:**
- Vận tốc của con trượt $A$: $v_A^2 = \dot{x}^2$.
  $$T_A = \frac{1}{2} M \dot{x}^2$$
- Tọa độ của quả nặng $B$:
  $$\begin{cases} x_B = x + l \sin\varphi \\ y_B = -l \cos\varphi \end{cases}$$
- Đạo hàm theo thời gian:
  $$\begin{cases} \dot{x}_B = \dot{x} + l \dot{\varphi} \cos\varphi \\ \dot{y}_B = l \dot{\varphi} \sin\varphi \end{cases}$$
- Bình phương vận tốc của $B$:
  $$v_B^2 = \dot{x}_B^2 + \dot{y}_B^2 = \dot{x}^2 + 2 l \dot{x} \dot{\varphi} \cos\varphi + l^2 \dot{\varphi}^2$$
  $$T_B = \frac{1}{2} m \left(\dot{x}^2 + 2 l \dot{x} \dot{\varphi} \cos\varphi + l^2 \dot{\varphi}^2\right)$$

Tổng động năng của cơ hệ:
$$T = T_A + T_B = \frac{1}{2} (M + m) \dot{x}^2 + m l \dot{x} \dot{\varphi} \cos\varphi + \frac{1}{2} m l^2 \dot{\varphi}^2$$

**3. Thế năng của hệ:**
Chọn mốc thế năng tại trục dẫn hướng ngang ($y = 0$):
$$\Pi = -m g l \cos\varphi$$

**4. Thiết lập phương trình Lagrange:**

*Phương trình theo tọa độ $x$:*
- $\frac{\partial T}{\partial \dot{x}} = (M + m) \dot{x} + m l \dot{\varphi} \cos\varphi$
- $\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{x}}\right) = (M + m) \ddot{x} + m l \ddot{\varphi} \cos\varphi - m l \dot{\varphi}^2 \sin\varphi$
- $\frac{\partial T}{\partial x} = 0, \quad \frac{\partial \Pi}{\partial x} = 0 \implies Q_x = 0$

Phương trình thứ nhất:
$$(M + m) \ddot{x} + m l \ddot{\varphi} \cos\varphi - m l \dot{\varphi}^2 \sin\varphi = 0 \tag{1}$$
*(Nhận xét: $x$ là tọa độ vòng, phương trình (1) biểu diễn định luật bảo toàn thành phần động lượng nằm ngang của hệ).*

*Phương trình theo tọa độ $\varphi$:*
- $\frac{\partial T}{\partial \dot{\varphi}} = m l \dot{x} \cos\varphi + m l^2 \dot{\varphi}$
- $\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{\varphi}}\right) = m l \ddot{x} \cos\varphi - m l \dot{x} \dot{\varphi} \sin\varphi + m l^2 \ddot{\varphi}$
- $\frac{\partial T}{\partial \varphi} = -m l \dot{x} \dot{\varphi} \sin\varphi$
- $Q_\varphi = -\frac{\partial \Pi}{\partial \varphi} = -m g l \sin\varphi$

Phương trình thứ hai:
$$m l^2 \ddot{\varphi} + m l \ddot{x} \cos\varphi + m g l \sin\varphi = 0$$
Chia hai vế cho $m l$:
$$l \ddot{\varphi} + \ddot{x} \cos\varphi + g \sin\varphi = 0 \tag{2}$$

**5. Dao động nhỏ ($\varphi \ll 1$):**
Với $\cos\varphi \approx 1, \; \sin\varphi \approx \varphi, \; \dot{\varphi}^2 \approx 0$:
$$\begin{cases}
(M + m) \ddot{x} + m l \ddot{\varphi} = 0 \implies \ddot{x} = -\frac{m l}{M + m} \ddot{\varphi} \\
l \ddot{\varphi} + \ddot{x} + g \varphi = 0
\end{cases}$$
Thay $\ddot{x}$ vào phương trình thứ hai:
$$l \left(1 - \frac{m}{M + m}\right) \ddot{\varphi} + g \varphi = 0 \implies \frac{M l}{M + m} \ddot{\varphi} + g \varphi = 0$$
$$\ddot{\varphi} + \frac{g (M + m)}{M l} \varphi = 0$$
Tần số góc dao động riêng của con lắc trượt:
$$\omega_0 = \sqrt{\frac{g}{l}\left(1 + \frac{m}{M}\right)}$$
*(Tần số này lớn hơn tần số của con lắc đơn treo cố định $\sqrt{g/l}$).*

---

## 4. Bài Tập Rèn Luyện Có Đáp Số

::: info Bài 5.1 (Con lắc kép hai thanh)
Hai thanh đồng chất có cùng chiều dài $l$ và cùng khối lượng $m$ nối bản lề với nhau và treo vào điểm cố định $O$. Các góc lệch so với phương thẳng đứng lần lượt là $\varphi_1, \varphi_2$.
- **Đáp số:** Động năng của hệ: $T = \frac{1}{6} m l^2 (8 \dot{\varphi}_1^2 + 2 \dot{\varphi}_2^2 + 6 \dot{\varphi}_1 \dot{\varphi}_2 \cos(\varphi_1 - \varphi_2))$.
:::

::: info Bài 5.2 (Vật trượt trên lăng trụ di động)
Lăng trụ khối lượng $M$ góc nghiêng $\alpha$ trượt trên sàn ngang nhẵn. Trên mặt dốc có vật khối lượng $m$ trượt không ma sát. Chọn tọa độ $x$ (vị trí lăng trụ) và $s$ (quãng đường vật trượt dọc mặt dốc).
- **Đáp số:** Gia tốc của lăng trụ: $a_M = \frac{m g \sin\alpha \cos\alpha}{M + m \sin^2\alpha}$.
:::
