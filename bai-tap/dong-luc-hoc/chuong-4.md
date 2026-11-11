---
title: "Bài Tập Động Lực Học - Chương 4: Nguyên Lý Đalămbe & Áp Lực Động"
description: "Phương pháp tĩnh hình học - động lực, tính lực quán tính và áp lực động lên ổ trục của vật rắn quay"
---

# Chương 4: Nguyên Lý Đalămbe & Áp Lực Động Lên Ổ Trục

::: tip Tóm tắt chương trình
Nguyên lý Đalămbe (Phương pháp tĩnh hình học - động lực) chuyển bài toán động lực học về bài toán cân bằng tĩnh học hình thức bằng cách đặt thêm **lực quán tính Đalămbe**:
$$\vec{F}_{\text{qt}} = -m\vec{a}$$
Nhờ đó, toàn bộ 6 phương trình cân bằng tĩnh học quen thuộc có thể được áp dụng để tính toán gia tốc và các phản lực liên kết (đặc biệt là phản lực động lên các ổ trục quay).
:::

---

## 1. Tóm Tắt Lý Thuyết & Công Thức Cốt Lõi

### 1.1. Lực quán tính của chất điểm
$$\vec{F}_{\text{qt}} = -m\vec{a}$$
Phương trình cân bằng hình thức:
$$\sum \vec{F}_k + \vec{F}_{\text{qt}} = 0$$

### 1.2. Thu gọn hệ lực quán tính của vật rắn
Hệ lực quán tính của vật rắn được thu gọn về một tâm quy chiếu $O$ gồm một **véctơ chính lực quán tính** $\vec{R}_{\text{qt}}$ và một **mômen chính lực quán tính** $\vec{M}_{O,\text{qt}}$:
$$\vec{R}_{\text{qt}} = -M \vec{a}_C$$
$$\vec{M}_{O,\text{qt}} = -\int \vec{r} \times \vec{a} \, dm$$

| Dạng chuyển động | Véctơ chính $\vec{R}_{\text{qt}}$ | Mômen chính quán tính |
| :--- | :--- | :--- |
| **Tịnh tiến** | $\vec{R}_{\text{qt}} = -M\vec{a}$ | $\vec{M}_{C,\text{qt}} = 0$ (đặt tại khối tâm $C$) |
| **Quay quanh trục $Oz$ đối xứng** | $\vec{R}_{\text{qt}} = 0$ (nếu $C \in Oz$) | $M_{z,\text{qt}} = -J_z \varepsilon$ |
| **Quay quanh trục $Oz$ bất kỳ** | $\vec{R}_{\text{qt}} = -M\vec{a}_C$ | $M_{x,\text{qt}} = J_{xz}\omega^2 - J_{yz}\varepsilon$<br>$M_{y,\text{qt}} = J_{yz}\omega^2 + J_{xz}\varepsilon$<br>$M_{z,\text{qt}} = -J_z\varepsilon$ |
| **Song phẳng (mặt phẳng đối xứng)** | $\vec{R}_{\text{qt}} = -M\vec{a}_C$ | $M_{C,\text{qt}} = -J_C \varepsilon$ |

### 1.3. Áp lực động lên ổ trục
Khi vật rắn quay quanh trục cố định $AB$, phản lực tại hai ổ trục gồm hai phần:
- **Phản lực tĩnh:** Sinh ra do trọng lực và các ngoại lực tĩnh tác dụng khi vật đứng yên.
- **Phản lực động:** Sinh ra do lực quán tính khi vật quay với vận tốc góc $\omega$ và gia tốc góc $\varepsilon$.
$$\vec{R}_A = \vec{R}_{A,\text{tĩnh}} + \vec{R}_{A,\text{động}}$$
$$\vec{R}_B = \vec{R}_{B,\text{tĩnh}} + \vec{R}_{B,\text{động}}$$

**Điều kiện để trục quay không chịu áp lực động:**
Trục quay $AB$ phải là **trục quán tính chính trung tâm** của vật rắn:
1. Trục quay đi qua khối tâm ($C \in AB \implies \vec{R}_{\text{qt}} = 0$).
2. Trục quay là trục chính quán tính ($J_{xz} = 0, \; J_{yz} = 0 \implies \vec{M}_{\text{qt}} \perp AB$).

---

## 2. Hướng Dẫn Áp Dụng & Phương Pháp Giải

1. **Quy trình 4 bước giải bài toán bằng Nguyên lý Đalămbe:**
   - **Bước 1:** Giải phóng liên kết cho cơ hệ hoặc từng vật rắn, đặt đầy đủ các ngoại lực chủ động và các phản lực liên kết.
   - **Bước 2:** Phân tích chuyển động của từng phần tử để xác định véctơ gia tốc khối tâm $\vec{a}_C$ và gia tốc góc $\vec{\varepsilon}$.
   - **Bước 3:** Đặt thêm hệ lực quán tính thu gọn tại khối tâm $C$ của mỗi vật: véctơ chính $\vec{R}_{\text{qt}} = -M\vec{a}_C$ (ngược chiều $\vec{a}_C$) và ngẫu lực quán tính $M_{C,\text{qt}} = -J_C \varepsilon$ (ngược chiều $\vec{\varepsilon}$).
   - **Bước 4:** Viết các phương trình cân bằng tĩnh học hình thức cho hệ lực gồm cả lực thực và lực quán tính.
2. **Mẹo khử ẩn số nhanh:**
   - Lấy tổng mômen đối với giao điểm của các phản lực liên kết chưa biết (hoặc đối với tâm vận tốc tức thời $P$) để tìm ngay gia tốc mà không cần giải hệ nhiều phương trình!

---

## 3. Bài Giải Mẫu Điển Hình

### Thí dụ 4-1: Xác định phản lực động lên các ổ trục quay mang vật lệch tâm

<div class="figure-container">

<img src="/figures/bai-tap/dong-luc-hoc/hinh_4_1.svg" alt="Hình 4-1: Trục quay mang vật lệch tâm chịu lực quán tính Đalămbe" style="max-height: 260px;" />

<div class="figure-caption">

Hình 4-1: Xác định phản lực động tác dụng lên hai ổ trục $A$ và $B$ bằng nguyên lý Đalămbe

</div>

</div>

**Đề bài:**
Trục quay thẳng đứng $AB$ có chiều dài khoảng cách giữa hai ổ đỡ $A$ và $B$ là $l = AB = 1\text{ m}$.
Tại khoảng cách $h = 0.6\text{ m}$ tính từ $A$, gắn một cánh tay đòn nhẹ vuông góc với trục, đầu cánh tay mang một chất điểm $M$ khối lượng $m = 2\text{ kg}$ cách trục một đoạn $r = 0.2\text{ m}$.
Trục quay đều với vận tốc góc $\omega = 50\text{ rad/s}$ xung quanh trục $AB$. Bỏ qua khối lượng của trục và tay đòn.
Xác định độ lớn phản lực động tại các ổ trục $A$ và $B$.

**Bài giải:**

**1. Gia tốc và lực quán tính của chất điểm $M$:**
Vì trục quay đều ($\omega = \text{const} \implies \varepsilon = 0$):
Gia tốc của chất điểm $M$ chỉ có thành phần gia tốc hướng tâm:
$$a_n = \omega^2 r = 50^2 \times 0.2 = 500\text{ m/s}^2$$
Gia tốc tiếp triệt tiêu: $a_\tau = 0$.

Lực quán tính Đalămbe $\vec{F}_{\text{qt}}$ có phương nằm ngang, hướng ly tâm (ra xa trục quay $AB$):
$$F_{\text{qt}} = m a_n = m \omega^2 r = 2 \times 500 = 1000\text{ N}$$

**2. Lập các phương trình cân bằng Đalămbe:**
Theo nguyên lý Đalămbe, hệ lực tác dụng lên trục gồm:
- Lực quán tính ly tâm: $\vec{F}_{\text{qt}}$ (hướng theo phương bán kính $r$, ví dụ trục $Ox$).
- Các phản lực động nằm ngang tại hai ổ trục: $\vec{X}_A$ (tại $A$) và $\vec{X}_B$ (tại $B$).

Phương trình chiếu lên phương bán kính $Ox$:
$$X_A + X_B - F_{\text{qt}} = 0 \implies X_A + X_B = F_{\text{qt}} \tag{1}$$

Phương trình mômen đối với điểm $A$:
Lực $F_{\text{qt}}$ cách $A$ một đoạn $h$, phản lực $X_B$ cách $A$ một đoạn $l$:
$$\sum M_A = X_B \cdot l - F_{\text{qt}} \cdot h = 0 \tag{2}$$

**3. Giải hệ phương trình tìm phản lực:**
Từ phương trình (2):
$$X_B = F_{\text{qt}} \frac{h}{l} = 1000 \times \frac{0.6}{1.0} = 600\text{ N}$$

Thay vào phương trình (1):
$$X_A = F_{\text{qt}} - X_B = 1000 - 600 = 400\text{ N}$$

*Nhận xét:*
Hai phản lực động $\vec{X}_A$ và $\vec{X}_B$ cùng phương, cùng chiều và luôn quay đồng bộ cùng với trục theo thời gian. Đây chính là nguyên nhân gây ra hiện tượng rung lắc mạnh và mỏi ổ bi nếu không được cân bằng động.

---

### Thí dụ 4-2: Áp lực động của thanh đồng chất hàn nghiêng trên trục quay

**Đề bài:** Một thanh mảnh đồng chất $CD$ có khối lượng $M$, chiều dài $2l$, được hàn tại trung điểm (khối tâm $O$) vào trục quay thẳng đứng $AB$ ($AB = 2a$, $O$ là trung điểm $AB$) sao cho thanh hợp với trục quay một góc nhọn $\alpha$. Trục quay đều với vận tốc góc $\omega$. Xác định phản lực động tại hai ổ trục $A$ và $B$.

**Bài giải:**

1. **Thu gọn hệ lực quán tính của thanh về khối tâm $O$:**
   - Vì khối tâm $O$ của thanh nằm ngay trên trục quay $AB$ nên $\vec{a}_O = \vec{0} \implies$ véctơ chính lực quán tính bằng không: $\vec{R}_{\text{qt}} = \vec{0}$.
   - Mỗi phần tử $dm$ cách $O$ một đoạn $s$ trên thanh chịu lực quán tính ly tâm $dF_{\text{qt}} = dm \cdot \omega^2 (s\sin\alpha)$ có cánh tay đòn $s\cos\alpha$ đối với $O$. Hai nửa thanh tạo thành một **ngẫu lực quán tính ly tâm** nằm trong mặt phẳng chứa trục $AB$ và thanh $CD$:
     $$M_{\text{qt}} = 2 \int_0^l \left(\frac{M}{2l}ds\right) \omega^2 s^2 \sin\alpha \cos\alpha = \frac{1}{3} M l^2 \omega^2 \sin\alpha \cos\alpha = \frac{1}{6} M l^2 \omega^2 \sin 2\alpha$$
2. **Phương trình cân bằng Đalămbe cho trục $AB$:**
   $$\begin{cases}
   X_A^{\text{đ}} + X_B^{\text{đ}} = 0 \implies X_B^{\text{đ}} = -X_A^{\text{đ}} \\
   \sum m_O = X_A^{\text{đ}} \cdot 2a - M_{\text{qt}} = 0 \implies |X_A^{\text{đ}}| = |X_B^{\text{đ}}| = \frac{M l^2 \omega^2 \sin 2\alpha}{12 a}
   \end{cases}$$

---

## 4. Bài Tập Rèn Luyện Có Đáp Số

::: info Bài 4.1 (Cân bằng tĩnh và cân bằng động của đĩa lệch tâm)
Một đĩa tròn mỏng đồng chất bán kính $R = 0.3\text{ m}$, khối lượng $M = 10\text{ kg}$ bị khoét một lỗ tròn bán kính $r = 0.05\text{ m}$ tại vị trí cách tâm đĩa $d = 0.2\text{ m}$. Trục quay đi qua tâm đĩa và vuông góc với mặt đĩa, quay với vận tốc góc $\omega = 100\text{ rad/s}$.
- **Đáp số:** Để trục quay triệt tiêu hoàn toàn phản lực động (cân bằng động), cần gắn thêm vào đĩa một quả nặng bù trừ $m'$ tại vị trí đối xứng qua tâm đĩa. Khối lượng bù: $m' = m_{\text{khoét}} = \rho_{\text{mặt}} \pi r^2 \approx 0.278\text{ kg}$.
:::

::: info Bài 4.2 (Góc nghiêng của con lắc trên xe có gia tốc)
Một con lắc đơn gồm quả cầu nhỏ treo vào trần một toa tàu đang chuyển động thẳng biến đổi đều với gia tốc không đổi $a$ trên đường ray nằm ngang. Dùng nguyên lý Đalămbe, xác định góc lệch $\theta$ của dây treo so với phương thẳng đứng ở vị trí cân bằng tương đối.
- **Đáp số:** $\tan\theta = \frac{a}{g}$. Sức căng của dây treo: $T = m\sqrt{g^2 + a^2}$.
:::

::: info Bài 4.3 (Áp lực của ô tô lên cầu cong lồi)
Ô tô khối lượng $m = 1500\text{ kg}$ chuyển động với vận tốc đều $v = 72\text{ km/h} = 20\text{ m/s}$ qua đỉnh một cây cầu vồng lên có bán kính cong $\rho = 100\text{ m}$.
- **Đáp số:** Áp lực của xe lên mặt cầu tại đỉnh: $N = m\left(g - \frac{v^2}{\rho}\right) = 1500 \times (9.81 - 4) = 8715\text{ N}$ (giảm đáng kể so với trọng lượng tĩnh $14715\text{ N}$).
:::
