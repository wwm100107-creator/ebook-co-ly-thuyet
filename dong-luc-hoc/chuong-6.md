# Chương 6: Phương Trình Vi Phân Chuyển Động Của Cơ Hệ Không Tự Do

Phương trình Lagơrăng loại II (Lagrange II) là đỉnh cao của Cơ học giải tích, đưa việc thiết lập phương trình vi phân chuyển động của các cơ hệ phức tạp về một quy trình thuần túy giải tích thông qua hàm động năng và các lực suy rộng, hoàn toàn không cần giải phóng các liên kết lý tưởng.

---

## 6.1. Phương Trình Lagơrăng Loại II

### 6.1.1. Thiết Lập Phương Trình

Xét cơ hệ gồm $n$ chất điểm có $s$ bậc tự do với các liên kết hình học, hai chiều và lý tưởng.

Vị trí của cơ hệ được xác định hoàn toàn bởi $s$ tọa độ suy rộng $q_1, q_2, ..., q_s$.

Vận tốc của các chất điểm:

$$\vec{v}_k = \sum_{j=1}^s \frac{\partial\vec{r}_k}{\partial q_j} \dot{q}_j + \frac{\partial\vec{r}_k}{\partial t} \tag{6-1}$$

trong đó $\dot{q}_j = \frac{dq_j}{dt}$ là **vận tốc suy rộng** ứng với tọa độ suy rộng $q_j$.

Từ đẳng thức $(6-1)$, ta có hai hệ thức vi phân quan trọng:

$$\frac{\partial\vec{v}_k}{\partial\dot{q}_j} = \frac{\partial\vec{r}_k}{\partial q_j} \tag{6-2}$$

$$\frac{d}{dt}\left(\frac{\partial\vec{r}_k}{\partial q_j}\right) = \frac{\partial\vec{v}_k}{\partial q_j} \tag{6-3}$$

Động năng của cơ hệ biểu diễn dưới dạng hàm số của tọa độ suy rộng, vận tốc suy rộng và thời gian:

$$T = T(q_1, q_2, ..., q_s, \dot{q}_1, \dot{q}_2, ..., \dot{q}_s, t) = \frac{1}{2} \sum_{k=1}^n m_k \vec{v}_k^2 \tag{6-4}$$

Lấy đạo hàm riêng của $T$ theo $\dot{q}_j$ và theo $q_j$:

$$\frac{\partial T}{\partial\dot{q}_j} = \sum_{k=1}^n m_k \vec{v}_k \cdot \frac{\partial\vec{v}_k}{\partial\dot{q}_j} = \sum_{k=1}^n m_k \vec{v}_k \cdot \frac{\partial\vec{r}_k}{\partial q_j}$$

$$\frac{d}{dt}\left(\frac{\partial T}{\partial\dot{q}_j}\right) = \sum_{k=1}^n m_k \vec{a}_k \cdot \frac{\partial\vec{r}_k}{\partial q_j} + \sum_{k=1}^n m_k \vec{v}_k \cdot \frac{d}{dt}\left(\frac{\partial\vec{r}_k}{\partial q_j}\right)$$

Mặt khác:

$$\frac{\partial T}{\partial q_j} = \sum_{k=1}^n m_k \vec{v}_k \cdot \frac{\partial\vec{v}_k}{\partial q_j}$$

Trừ hai biểu thức trên và sử dụng hệ thức $(6-3)$:

$$\frac{d}{dt}\left(\frac{\partial T}{\partial\dot{q}_j}\right) - \frac{\partial T}{\partial q_j} = \sum_{k=1}^n m_k \vec{a}_k \cdot \frac{\partial\vec{r}_k}{\partial q_j}$$

Theo phương trình cơ bản Đalămbe – Lagrange, biểu thức vế phải đúng bằng lực suy rộng $Q_j$. Ta nhận được:

::: tip Phương trình Lagrange loại II tổng quát
$$\frac{d}{dt}\left(\frac{\partial T}{\partial\dot{q}_j}\right) - \frac{\partial T}{\partial q_j} = Q_j \quad (j = 1, 2, ..., s) \tag{6-5}$$
:::

Trong đó:
- $s$: Số bậc tự do của cơ hệ.
- $T$: Động năng toàn phần của cơ hệ.
- $q_j$: Tọa độ suy rộng thứ $j$.
- $\dot{q}_j$: Vận tốc suy rộng thứ $j$.
- $Q_j$: Lực suy rộng ứng với tọa độ $q_j$.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_6_1.svg" alt="Hình 6-1: Áp dụng phương trình Lagrange loại II cho cơ hệ hai bậc tự do" style="max-height: 270px;" />

<div class="figure-caption">

Hình 6-1: Khảo sát chuyển động của cơ hệ bằng phương trình Lagrange loại II

</div>

</div>

---

### 6.1.2. Trường Hợp Hệ Chịu Lực Thế (Hàm Lagrange)

Khi các lực hoạt động đều là lực thế có thế năng $\Pi(q_1, q_2, ..., q_s)$:

$$Q_j = -\frac{\partial \Pi}{\partial q_j}$$

Vì thế năng $\Pi$ chỉ phụ thuộc vào tọa độ $q_j$ mà không phụ thuộc vào vận tốc suy rộng $\dot{q}_j$ ($\frac{\partial \Pi}{\partial\dot{q}_j} = 0$), nên:

$$\frac{d}{dt}\left(\frac{\partial (T - \Pi)}{\partial\dot{q}_j}\right) - \frac{\partial (T - \Pi)}{\partial q_j} = 0$$

Định nghĩa **Hàm Lagrange** (hoặc thế động lực học) $L$:

$$L = T - \Pi \tag{6-6}$$

::: tip Phương trình Lagrange với hàm L
$$\frac{d}{dt}\left(\frac{\partial L}{\partial\dot{q}_j}\right) - \frac{\partial L}{\partial q_j} = 0 \quad (j = 1, 2, ..., s) \tag{6-7}$$
:::

### 6.1.3. Ưu Điểm Của Phương Trình Lagrange Loại II
1. **Tính chất chuẩn hóa:** Bất kể cơ hệ phức tạp đến mức nào, phương pháp thiết lập phương trình chuyển động luôn tuân theo một quy trình đại số chuẩn mực duy nhất (tính động năng $T$ và xác định lực suy rộng $Q_j$).
2. **Khử hoàn toàn ẩn số liên kết:** Phản lực của các liên kết lý tưởng tự động triệt tiêu.
3. **Số phương trình tối thiểu:** Số phương trình vi phân luôn đúng bằng số bậc tự do $s$ của hệ, ít hơn rất nhiều so với phương pháp chiếu Newton ($3n$ phương trình).

---

## 6.2. Các Tích Phân Đầu Của Chuyển Động

Tích phân đầu của chuyển động là các hệ thức đại số giữa tọa độ suy rộng $q_j$, vận tốc suy rộng $\dot{q}_j$ và thời gian $t$ có giá trị không đổi trong suốt quá trình chuyển động.

### 6.2.1. Tích Phân Năng Lượng

::: tip Tích phân năng lượng
Nếu cơ hệ có các **liên kết dừng** ($T$ là dạng toàn phương thuần nhất đối với vận tốc suy rộng), không phụ thuộc tường minh vào thời gian $t$, và các lực tác dụng là **lực thế**, thì cơ năng toàn phần của hệ là một tích phân đầu:

$$T + \Pi = E = \text{const} \tag{6-8}$$
:::

### 6.2.2. Tích Phân Tọa Độ Xiclic (Tọa Độ Vòng)

::: tip Tọa độ xiclic
Một tọa độ suy rộng $q_{\alpha}$ được gọi là **tọa độ xiclic** nếu hàm Lagrange $L$ không chứa tường minh tọa độ $q_{\alpha}$ mà chỉ chứa vận tốc suy rộng $\dot{q}_{\alpha}$:

$$\frac{\partial L}{\partial q_{\alpha}} = 0 \tag{6-9}$$
:::

Khi đó phương trình Lagrange loại II đối với tọa độ $q_{\alpha}$ trở thành:

$$\frac{d}{dt}\left(\frac{\partial L}{\partial\dot{q}_{\alpha}}\right) = 0 \implies \frac{\partial L}{\partial\dot{q}_{\alpha}} = \text{const} \tag{6-10}$$

Đại lượng:

$$p_{\alpha} = \frac{\partial L}{\partial\dot{q}_{\alpha}} = \frac{\partial T}{\partial\dot{q}_{\alpha}} \tag{6-11}$$

được gọi là **xung lượng suy rộng** ứng với tọa độ $q_{\alpha}$.

> **Định lý Noether:** Tương ứng với mỗi tọa độ xiclic của cơ hệ, ta nhận được một tích phân đầu về bảo toàn xung lượng suy rộng:
> $$p_{\alpha} = \text{const} \tag{6-12}$$


---

## 6.3. Các Thí Dụ Áp Dụng (Bài Tập Mẫu)

::: tip Ý NGHĨA PHƯƠNG PHÁP
Phương pháp Lagrange loại II là đỉnh cao của Cơ học giải tích:
1. Chọn hệ tọa độ suy rộng độc lập $q_1, q_2, \dots, q_s$ ($s$ là số bậc tự do).
2. Thiết lập biểu thức động năng toàn phần của hệ $T(q_i, \dot{q}_i, t)$ và hàm thế $\Pi(q_i)$ (hoặc tính các lực suy rộng $Q_i$).
3. Thay vào phương trình Lagrange loại II: $\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_i}\right) - \frac{\partial T}{\partial q_i} = Q_i$ để nhận được trực tiếp hệ phương trình vi phân chuyển động mà không cần xét bất kỳ phản lực liên kết lý tưởng nào.
:::

### Thí dụ 6-1: Trụ tròn lăn không trượt trên mặt phẳng nghiêng

**Đề bài:**
Một hình trụ tròn đặc đồng chất khối lượng $m$, bán kính $R$ lăn không trượt từ trạng thái nghỉ trên một mặt phẳng nghiêng góc $\alpha$ so với phương ngang (Hình 6-2).
1. Chọn tọa độ suy rộng thích hợp và thiết lập phương trình vi phân chuyển động của hình trụ bằng phương trình Lagrange loại II.
2. Xác định gia tốc chuyển động của khối tâm và điều kiện ma sát để trụ lăn không trượt.

<div class="figure-box">
  <img src="/figures/dong-luc-hoc/hinh_6_2.svg" alt="Hình 6-2: Trụ tròn lăn không trượt trên mặt phẳng nghiêng" style="max-width: 580px;" />
  <div class="figure-caption">

Hình 6-2: Mô hình cơ học trụ tròn lăn không trượt trên mặt nghiêng góc $\alpha$

</div>
</div>

**Bài giải:**

Cơ hệ có 1 bậc tự do. Chọn tọa độ suy rộng là quãng đường $s$ mà khối tâm $C$ dịch chuyển dọc theo mặt phẳng nghiêng từ vị trí ban đầu ($q = s, \; \dot{q} = \dot{s} = v_C$).
Vì trụ lăn không trượt, góc quay của trụ liên hệ với quãng đường: $\varphi = \frac{s}{R} \implies \omega = \frac{\dot{s}}{R}$.

**1. Động năng của hình trụ:**
Trụ thực hiện chuyển động song phẳng:
$$T = \frac{1}{2} m v_C^2 + \frac{1}{2} J_C \omega^2$$
với mômen quán tính của trụ tròn đặc $J_C = \frac{1}{2} m R^2$:
$$T = \frac{1}{2} m \dot{s}^2 + \frac{1}{2} \left(\frac{1}{2} m R^2\right) \left(\frac{\dot{s}}{R}\right)^2 = \frac{1}{2} m \dot{s}^2 + \frac{1}{4} m \dot{s}^2 = \frac{3}{4} m \dot{s}^2$$

**2. Thế năng và lực suy rộng:**
Chọn gốc thế năng tại vị trí ban đầu ($s = 0$):
Khi trụ lăn xuống đoạn $s$, độ cao khối tâm giảm một lượng $h = s \sin\alpha$.
Thế năng trọng trường:
$$\Pi(s) = -m g s \sin\alpha$$
Lực suy rộng của lực thế:
$$Q_s = -\frac{\partial \Pi}{\partial s} = m g \sin\alpha$$

**3. Phương trình Lagrange loại II:**
$$\frac{\partial T}{\partial \dot{s}} = \frac{3}{2} m \dot{s} \implies \frac{d}{dt}\left(\frac{\partial T}{\partial \dot{s}}\right) = \frac{3}{2} m \ddot{s}$$
$$\frac{\partial T}{\partial s} = 0$$

Phương trình vi phân chuyển động:
$$\frac{3}{2} m \ddot{s} - 0 = m g \sin\alpha \implies \ddot{s} = \frac{2}{3} g \sin\alpha$$

Gia tốc của khối tâm là hằng số: $a_C = \ddot{s} = \frac{2}{3} g \sin\alpha$.
Nhận xét: Nếu vật trượt không ma sát thì $a = g \sin\alpha$. Nhờ có lăn không trượt, một phần năng lượng chuyển thành động năng quay nên gia tốc chuyển động tịnh tiến chỉ bằng $\frac{2}{3}$ gia tốc trượt.
