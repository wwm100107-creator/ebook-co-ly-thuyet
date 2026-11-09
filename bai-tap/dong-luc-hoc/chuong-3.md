---
title: "Bài Tập Động Lực Học - Chương 3: Nguyên Lý Di Chuyển Khả Dĩ"
description: "Phương pháp giải tích xác định điều kiện cân bằng cơ hệ không tự do, tọa độ suy rộng và lực suy rộng"
---

# Chương 3: Cân Bằng Cơ Hệ Không Tự Do - Nguyên Lý Di Chuyển Khả Dĩ

::: tip Tóm tắt chương trình
Nguyên lý di chuyển khả dĩ (Nguyên lý công khả dĩ) là công cụ giải tích mạnh mẽ để tìm điều kiện cân bằng của cơ hệ phức tạp gồm nhiều vật liên kết. Ưu điểm tuyệt đối của phương pháp này là **hoàn toàn không cần phân tích và tính toán các phản lực liên kết lý tưởng** (liên kết tựa nhẵn, bản lề không ma sát, dây không dãn,...).
:::

---

## 1. Tóm Tắt Lý Thuyết & Công Thức Cốt Lõi

### 1.1. Di chuyển khả dĩ (Di chuyển ảo $\delta\vec{r}$)
Di chuyển khả dĩ của một chất điểm là độ dời vô cùng bé $\delta\vec{r}$ mà chất điểm có thể thực hiện được từ vị trí đang xét mà **hoàn toàn phù hợp với các liên kết hình học** của hệ tại thời điểm khảo sát.

### 1.2. Công khả dĩ ($\delta A$)
Công khả dĩ của lực $\vec{F}$ trên di chuyển khả dĩ $\delta\vec{r}$:
$$\delta A = \vec{F} \cdot \delta\vec{r} = F_x \delta x + F_y \delta y + F_z \delta z$$
Công khả dĩ của ngẫu lực mômen $m$:
$$\delta A = m \cdot \delta\varphi$$

### 1.3. Định lý Nguyên lý di chuyển khả dĩ
> **Định lý:** Điều kiện cần và đủ để một cơ hệ có các liên kết dừng, hai chiều và lý tưởng ở trạng thái cân bằng là: **tổng công khả dĩ của tất cả các lực chủ động tác dụng lên cơ hệ phải triệt tiêu trên mọi di chuyển khả dĩ bất kỳ của hệ.**
$$\sum \delta A_k = \sum \vec{F}_k \cdot \delta\vec{r}_k = 0$$

### 1.4. Tọa độ suy rộng và Lực suy rộng
Nếu cơ hệ có $k$ bậc tự do, vị trí của hệ được xác định hoàn toàn bởi $k$ tọa độ suy rộng độc lập: $q_1, q_2, \dots, q_k$.
Di chuyển khả dĩ biểu diễn qua các biến thiên tọa độ suy rộng:
$$\delta\vec{r}_i = \sum_{j=1}^k \frac{\partial \vec{r}_i}{\partial q_j} \delta q_j$$
Tổng công khả dĩ:
$$\sum \delta A = \sum_{j=1}^k Q_j \delta q_j = 0$$
trong đó $Q_j$ là **lực suy rộng** tương ứng với tọa độ suy rộng $q_j$:
$$Q_j = \sum_{i} \vec{F}_i \cdot \frac{\partial \vec{r}_i}{\partial q_j} = \frac{\delta A}{\delta q_j}$$

**Điều kiện cân bằng tổng quát:**
Vì $\delta q_j$ độc lập tuyến tính, cơ hệ cân bằng khi và chỉ khi tất cả các lực suy rộng đồng thời triệt tiêu:
$$Q_1 = 0, \quad Q_2 = 0, \quad \dots, \quad Q_k = 0$$

---

## 2. Các Bước Áp Dụng Phương Pháp

1. **Xác định số bậc tự do $k$:** Chọn các tọa độ suy rộng độc lập $q_1, \dots, q_k$.
2. **Cho hệ một di chuyển khả dĩ:** Tăng một tọa độ suy rộng $q_j$ một lượng $\delta q_j$ trong khi giữ cố định các tọa độ còn lại.
3. **Biểu diễn các độ dời qua $\delta q_j$:** Dùng hình học hoặc đạo hàm biến số.
4. **Viết tổng công khả dĩ của các lực chủ động:**
   $$\sum \delta A = 0$$
5. **Giải phương trình:** Rút ra lực cần tìm hoặc mối quan hệ cân bằng giữa các tải trọng.

---

## 3. Bài Giải Mẫu Điển Hình

### Thí dụ 3-1: Xác định lực cân bằng trong cơ cấu con trượt - thanh truyền

<div class="figure-container">

<img src="/figures/bai-tap/dong-luc-hoc/hinh_3_1.svg" alt="Hình 3-1: Cơ cấu thanh cân bằng theo nguyên lý di chuyển khả dĩ" style="max-height: 260px;" />

<div class="figure-caption">

Hình 3-1: Xác định lực chủ động cân bằng của cơ cấu thanh bằng nguyên lý di chuyển khả dĩ

</div>

</div>

**Đề bài:**
Cơ cấu gồm:
- Thanh $AB$ dài $l$ quay quanh bản lề cố định $A$ trên sàn ngang.
- Thanh $BC$ dài $l$ nối bản lề tại $B$ và đầu $C$ khớp với con trượt trượt dọc sàn ngang $Ax$.
- Tại khớp $B$ chịu tải trọng thẳng đứng $P$ hướng xuống.
- Tại con trượt $C$ chịu lực đẩy nằm ngang $Q$ hướng về phía gốc $A$.
Bỏ qua trọng lượng các thanh và ma sát tại các khớp.
Xác định lực $Q$ theo $P$ và góc nghiêng $\varphi$ của thanh $AB$ với phương ngang để cơ cấu cân bằng ở vị trí đối xứng.

**Bài giải:**

**1. Khảo sát bậc tự do và tọa độ suy rộng:**
Cơ cấu có 1 bậc tự do ($k = 1$). Ta chọn góc nghiêng $\varphi$ của thanh $AB$ so với sàn ngang làm tọa độ suy rộng: $q = \varphi$.

**2. Xác định tọa độ các điểm đặt lực chủ động:**
Gốc tọa độ tại bản lề $A(0, 0)$:
- Điểm $B$ (nơi đặt lực $\vec{P}$):
  $$y_B = l \sin\varphi$$
- Điểm $C$ (nơi đặt lực $\vec{Q}$):
  Tam giác $ABC$ cân tại $B$ ($AB = BC = l$), do đó $y_B = l \sin\varphi$ và $x_B = l \cos\varphi$.
  Hoành độ điểm $C$:
  $$x_C = 2l \cos\varphi$$

**3. Tính vi phân (di chuyển khả dĩ):**
Cho tọa độ suy rộng $\varphi$ một biến thiên khả dĩ $\delta\varphi$:
- Di chuyển thẳng đứng của điểm $B$:
  $$\delta y_B = \frac{\partial y_B}{\partial \varphi} \delta\varphi = l \cos\varphi \, \delta\varphi$$
- Di chuyển nằm ngang của điểm $C$:
  $$\delta x_C = \frac{\partial x_C}{\partial \varphi} \delta\varphi = -2l \sin\varphi \, \delta\varphi$$

**4. Thiết lập phương trình công khả dĩ:**
Lực $\vec{P}$ ngược chiều dương trục $y$ (hướng xuống), lực $\vec{Q}$ ngược chiều dương trục $x$ (hướng sang trái):
$$\sum \delta A = -P \cdot \delta y_B - Q \cdot \delta x_C = 0$$

Thay các biểu thức di chuyển khả dĩ vào:
$$-P (l \cos\varphi \, \delta\varphi) - Q (-2l \sin\varphi \, \delta\varphi) = 0$$
$$\left(-P \cos\varphi + 2Q \sin\varphi\right) l \, \delta\varphi = 0$$

Vì $\delta\varphi \neq 0$ là biến thiên tùy ý:
$$-P \cos\varphi + 2Q \sin\varphi = 0 \implies Q = \frac{P}{2} \cot\varphi$$

---

## 4. Bài Tập Rèn Luyện Có Đáp Số

::: info Bài 3.1 (Kích nâng thủy lực hình quả trám)
Một cơ cấu kích gồm 4 thanh có cùng chiều dài $a$ khớp bản lề tạo thành hình thoi $ABCD$. Đỉnh $A$ tựa trên sàn, đỉnh $C$ chịu lực nén thẳng đứng $P$. Hai đỉnh đối diện $B$ và $D$ được kéo lại gần nhau bởi một trục ren với lực căng $F$. Góc giữa các thanh với phương thẳng đứng là $\theta$.
- **Đáp số:** Lực kéo trên trục ren: $F = P \tan\theta$.
:::

::: info Bài 3.2 (Cân bằng của đòn bẩy kép)
Một cơ cấu gồm hai đòn bẩy liên hợp tựa trên hai gối đỡ cố định $O_1, O_2$. Đòn 1 chịu tải trọng $P$ tại mút tự do, truyền lực sang đòn 2 qua khớp con lăn để cân bằng tải trọng $Q$.
- **Đáp số:** Tỉ số truyền lực: $\frac{Q}{P} = \frac{a_1 b_2}{b_1 a_2}$.
:::

::: info Bài 3.3 (Hệ vật có biến dạng lò xo)
Thanh đồng chất $AB$ trọng lượng $P$, dài $l$, tựa một đầu vào tường thẳng đứng nhẵn và đầu kia trên sàn ngang nhẵn. Đầu $A$ trên sàn được giữ bởi một lò xo nằm ngang có độ cứng $c$. Lò xo không biến dạng khi thanh ở vị trí thẳng đứng.
- **Đáp số:** Góc nghiêng cân bằng $\theta$ với sàn ngang thỏa mãn: $\sin\theta = \frac{P}{2 c l}$.
:::
