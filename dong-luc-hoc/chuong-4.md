# Chương 4: Nguyên Lý Di Chuyển Khả Dĩ

Nguyên lý di chuyển khả dĩ (còn gọi là **Nguyên lý công ảo của Lagrange**) là một trong những nguyên lý cơ bản và đẹp đẽ nhất của Cơ học giải tích, cho phép thiết lập trực tiếp các điều kiện cân bằng của cơ hệ phức tạp mà không cần giải phóng liên kết và không cần tính toán các phản lực liên kết.

---

## 4.1. Các Khái Niệm Về Cơ Hệ Không Tự Do

### 4.1.1. Phương Trình Liên Kết và Phân Loại Liên Kết
Một cơ hệ gồm $n$ chất điểm chịu $k$ điều kiện liên kết cản trở chuyển động được mô tả bởi các phương trình liên kết:

$$f_{\alpha}(t, \vec{r}_1, \vec{r}_2, ..., \vec{r}_n) = 0 \quad (\alpha = 1, 2, ..., k) \tag{4-1}$$

#### Phân Loại Liên Kết:
1. **Liên kết hình học (Holonomic):** Phương trình liên kết chỉ chứa tọa độ và thời gian: $f(t, \vec{r}) = 0$.
2. **Liên kết vi phân (Non-holonomic):** Phương trình liên kết chứa đạo hàm bậc nhất của tọa độ (vận tốc) không khả tích: $\sum A_i d\vec{r}_i + B dt = 0$.
3. **Liên kết dừng (Scleronomic):** Phương trình liên kết không chứa thời gian $t$ một cách tường minh: $f(\vec{r}) = 0$.
4. **Liên kết không dừng (Rheonomic):** Phương trình liên kết phụ thuộc tường minh vào thời gian $t$: $f(t, \vec{r}) = 0$.
5. **Liên kết giữ (Hai chiều):** Biểu diễn dưới dạng phương trình bằng 0 ($f = 0$).
6. **Liên kết không giữ (Một chiều):** Biểu diễn dưới dạng bất đẳng thức ($f \ge 0$).

---

### 4.1.2. Bậc Tự Do Của Cơ Hệ

::: tip Định nghĩa
Số bậc tự do của cơ hệ (kí hiệu là $s$) là số tọa độ độc lập tối thiểu đủ để xác định hoàn toàn và duy nhất vị trí của cơ hệ trong không gian tại mỗi thời điểm.
:::

Đối với cơ hệ gồm $n$ chất điểm chịu $k$ liên kết hình học hai chiều độc lập:

$$s = 3n - k \tag{4-2}$$

- Ví dụ: Một chất điểm tự do có $s = 3$; Một vật rắn tự do trong không gian có $s = 6$; Một vật rắn chuyển động phẳng có $s = 3$; Con lắc đơn chuyển động phẳng có $s = 1$.

---

### 4.1.3. Di Chuyển Khả Dĩ (Di Chuyển Ảo)

::: tip Định nghĩa
Di chuyển khả dĩ của một chất điểm (kí hiệu $\delta\vec{r}$) là độ dời vi phân tưởng tượng vô cùng bé của chất điểm từ vị trí đang xét sang một vị trí lân cận vô cùng gần, **phù hợp với các liên kết** của hệ tại thời điểm $t$ được cố định ("đông cứng thời gian", $\delta t = 0$).
:::

#### Phân Biệt Giữa Di Chuyển Khả Dĩ ($\delta\vec{r}$) và Di Chuyển Thực ($d\vec{r}$):
- Di chuyển thực $d\vec{r}$ xảy ra trong khoảng thời gian thực $dt > 0$ dưới tác dụng của ngoại lực.
- Di chuyển khả dĩ $\delta\vec{r}$ là di chuyển giả định trong thời gian đóng băng $\delta t = 0$, có thể thực hiện theo nhiều phương khác nhau miễn là không phá vỡ liên kết.
- Đối với liên kết dừng, di chuyển thực là một trong số các di chuyển khả dĩ.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_1.svg" alt="Hình 4-1: Di chuyển khả dĩ và công ảo" style="max-height: 270px;" />

<div class="figure-caption">

Hình 4-1: Di chuyển khả dĩ $\delta\vec{r}$ thỏa mãn điều kiện tiếp xúc liên kết

</div>

</div>

---

### 4.1.4. Công Khả Dĩ (Công Ảo) và Liên Kết Lý Tưởng

- **Công khả dĩ** của lực $\vec{F}$ trên di chuyển khả dĩ $\delta\vec{r}$:
  $$\delta A = \vec{F} \cdot \delta\vec{r} = F_x \delta x + F_y \delta y + F_z \delta z \tag{4-3}$$

::: tip Liên kết lý tưởng
Liên kết được gọi là **liên kết lý tưởng** nếu tổng công khả dĩ của tất cả các phản lực liên kết tác dụng lên cơ hệ bằng không trên mọi di chuyển khả dĩ bất kỳ của hệ:

$$\sum_{k=1}^n \vec{N}_k \cdot \delta\vec{r}_k = 0 \tag{4-4}$$
:::

Trong thực tế kỹ thuật, hầu hết các liên kết chuẩn không ma sát (mặt tựa nhẵn, khớp bản lề, gối đỡ, dây mềm không giãn, ngàm cứng, và chuyển động lăn không trượt) đều là **liên kết lý tưởng**.

---

## 4.2. Nguyên Lý Di Chuyển Khả Dĩ (Lagrange)

::: tip Nguyên lý di chuyển khả dĩ
Điều kiện cần và đủ để một cơ hệ có các liên kết dừng, hai chiều và lý tưởng ở vị trí cân bằng là: **Tổng công khả dĩ của tất cả các lực hoạt động tác dụng lên cơ hệ phải bằng không trên mọi di chuyển khả dĩ tùy ý của hệ**:

$$\sum_{k=1}^n \vec{F}_k \cdot \delta\vec{r}_k = 0 \tag{4-5}$$

Dạng giải tích trong hệ tọa độ Descartes:

$$\sum_{k=1}^n (F_{kx} \delta x_k + F_{ky} \delta y_k + F_{kz} \delta z_k) = 0 \tag{4-6}$$
:::

---

## 4.3. Phương Pháp Tọa Độ Suy Rộng và Lực Suy Rộng

### 4.3.1. Tọa Độ Suy Rộng
Thay vì dùng $3n$ tọa độ Descartes phụ thuộc lẫn nhau, ta chọn một bộ gồm $s$ biến số độc lập $q_1, q_2, ..., q_s$ xác định vị trí của cơ hệ ($s$ là số bậc tự do). Các thông số $q_j$ được gọi là **tọa độ suy rộng**.

Bán kính véctơ của các chất điểm biểu diễn qua các tọa độ suy rộng:

$$\vec{r}_k = \vec{r}_k(q_1, q_2, ..., q_s) \quad (k = 1, 2, ..., n)$$

Di chuyển khả dĩ của chất điểm theo các tọa độ suy rộng:

$$\delta\vec{r}_k = \sum_{j=1}^s \frac{\partial\vec{r}_k}{\partial q_j} \delta q_j \tag{4-7}$$

---

### 4.3.2. Lực Suy Rộng

Biểu thức công khả dĩ của hệ lực hoạt động:

$$\delta A = \sum_{k=1}^n \vec{F}_k \cdot \delta\vec{r}_k = \sum_{k=1}^n \vec{F}_k \cdot \left(\sum_{j=1}^s \frac{\partial\vec{r}_k}{\partial q_j} \delta q_j\right) = \sum_{j=1}^s \left( \sum_{k=1}^n \vec{F}_k \cdot \frac{\partial\vec{r}_k}{\partial q_j} \right) \delta q_j$$

Đặt:

$$Q_j = \sum_{k=1}^n \vec{F}_k \cdot \frac{\partial\vec{r}_k}{\partial q_j} = \sum_{k=1}^n \left( F_{kx} \frac{\partial x_k}{\partial q_j} + F_{ky} \frac{\partial y_k}{\partial q_j} + F_{kz} \frac{\partial z_k}{\partial q_j} \right) \tag{4-8}$$

Đại lượng $Q_j$ được gọi là **lực suy rộng** ứng với tọa độ suy rộng $q_j$.
- Khi $q_j$ có thứ nguyên là độ dài $[\text{m}]$, $Q_j$ có thứ nguyên là lực $[\text{N}]$.
- Khi $q_j$ có thứ nguyên là góc $[\text{rad}]$, $Q_j$ có thứ nguyên là mômen lực $[\text{N}\cdot\text{m}]$.

Nếu hệ lực hoạt động là trường lực thế với thế năng $\Pi(q_1, q_2, ..., q_s)$:

$$Q_j = -\frac{\partial \Pi}{\partial q_j} \tag{4-9}$$

---

### 4.3.3. Điều Kiện Cân Bằng Dạng Tọa Độ Suy Rộng

Biểu thức nguyên lý di chuyển khả dĩ viết theo tọa độ suy rộng:

$$\delta A = \sum_{j=1}^s Q_j \delta q_j = 0$$

Vì các biến thiên khả dĩ $\delta q_1, \delta q_2, ..., \delta q_s$ là hoàn toàn độc lập với nhau, nên đẳng thức trên chỉ thỏa mãn khi tất cả các hệ số $Q_j$ đồng thời bằng không:

::: tip Điều kiện cân bằng suy rộng
Điều kiện cần và đủ để cơ hệ có các liên kết lý tưởng, hai chiều ở vị trí cân bằng là tất cả các lực suy rộng của hệ đồng thời triệt tiêu:

$$Q_j = 0 \quad (j = 1, 2, ..., s) \tag{4-10}$$

Đối với hệ chịu lực thế:

$$\frac{\partial \Pi}{\partial q_j} = 0 \quad (j = 1, 2, ..., s) \tag{4-11}$$
:::

> **Ưu điểm vượt trội:** Với một cơ hệ có $s$ bậc tự do, phương pháp tọa độ suy rộng trực tiếp cho ta đúng $s$ phương trình cân bằng độc lập, hoàn toàn không cần giải phóng các liên kết trong nội bộ hệ.


---

## 4.4. Các Thí Dụ Áp Dụng (Bài Tập Mẫu)

::: tip Ý NGHĨA PHƯƠNG PHÁP
Nguyên lý di chuyển khả dĩ (Nguyên lý công khả dĩ) là phương pháp cực kỳ mạnh mẽ của Cơ học giải tích để tìm điều kiện cân bằng của các cơ hệ phức tạp gồm nhiều khâu mà không cần tháo rời liên kết để tìm các phản lực liên kết trong.
:::

### Thí dụ 4-1: Xác định lực ép của máy ép vít bằng Nguyên lý công khả dĩ

**Đề bài:**
Cho cơ cấu máy ép trục vít như Hình 4-2. Tay vặn có chiều dài $L$ chịu tác dụng của lực $P$ vuông góc với tay vặn ở đầu mút. Trục vít có bước ren là $h$. Bỏ qua ma sát ở ren và các ổ trục.
Xác định lực ép $Q$ của máy ép tác dụng lên vật ép theo lực vặn $P$.

<div class="figure-box">
  <img src="/figures/dong-luc-hoc/hinh_4_2.svg" alt="Hình 4-2: Máy ép trục vít" style="max-width: 550px;" />
  <div class="figure-caption">

Hình 4-2: Sơ đồ lực và dịch chuyển khả dĩ của cơ cấu máy ép trục vít

</div>
</div>

**Bài giải:**

Cơ hệ là một hệ có 1 bậc tự do. Cho cơ hệ một di chuyển khả dĩ là góc quay vô cùng nhỏ $\delta\varphi$ của trục vít quanh trục đứng.
- Khi trục vít quay góc $\delta\varphi$, điểm đặt của lực vặn $P$ dịch chuyển khả dĩ một đoạn cung:
  $$\delta s_P = L \cdot \delta\varphi$$
  Vì lực $P$ cùng chiều với dịch chuyển nên công khả dĩ của lực $P$:
  $$\delta A_P = P \cdot \delta s_P = P \cdot L \cdot \delta\varphi$$

- Khi trục vít quay một vòng toàn phần ($2\pi$ radian), trục vít tịnh tiến một bước ren $h$. Do đó khi quay góc $\delta\varphi$, bàn ép và điểm đặt của lực ép $Q$ dịch chuyển thẳng đứng một đoạn khả dĩ:
  $$\delta z = \frac{h}{2\pi} \delta\varphi$$
  Lực cản của vật ép lên bàn ép ngược chiều với dịch chuyển nén xuống, do đó công khả dĩ của lực ép $Q$:
  $$\delta A_Q = -Q \cdot \delta z = -Q \frac{h}{2\pi} \delta\varphi$$

**Áp dụng Nguyên lý di chuyển khả dĩ:**
Điều kiện cân bằng của cơ hệ:
$$\delta A = \delta A_P + \delta A_Q = 0$$
$$P \cdot L \cdot \delta\varphi - Q \frac{h}{2\pi} \delta\varphi = 0$$
Vì $\delta\varphi \neq 0$ tùy ý nên:
$$P \cdot L - Q \frac{h}{2\pi} = 0 \implies Q = \frac{2\pi L}{h} P$$

Nhận xét: Tỷ số $\frac{2\pi L}{h} \gg 1$ thể hiện hệ số lợi về lực rất lớn của máy ép trục vít.
