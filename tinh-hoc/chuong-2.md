# Chương 2: Hệ Lực Không Gian

## 2.1. Véctơ Chính và Mômen Chính Của Hệ Lực Không Gian

Cho hệ lực không gian $(\vec{F}_1, \vec{F}_2, ..., \vec{F}_n)$ đặt tại các điểm $A_1, A_2, ..., A_n$ có bán kính véctơ tương ứng $\vec{r}_1, \vec{r}_2, ..., \vec{r}_n$ đối với gốc tọa độ $O$.

### 2.1.1. Véctơ Chính Của Hệ Lực

::: tip Định nghĩa
Véctơ chính của hệ lực là véctơ bằng tổng hình học của tất cả các lực thành phần trong hệ:

$$\vec{R}' = \sum_{k=1}^n \vec{F}_k \tag{2-1}$$
:::

Véctơ chính $\vec{R}'$ là một **véctơ tự do**, không phụ thuộc vào việc chọn tâm thu gọn.

Hình chiếu của véctơ chính trên các trục tọa độ Descartes $Ox, Oy, Oz$:

$$\begin{cases} R'_x = \displaystyle\sum_{k=1}^n F_{kx} \\ R'_y = \displaystyle\sum_{k=1}^n F_{ky} \\ R'_z = \displaystyle\sum_{k=1}^n F_{kz} \end{cases} \tag{2-2}$$

Độ lớn và các cosin chỉ phương của véctơ chính:

$$R' = \sqrt{R'^2_x + R'^2_y + R'^2_z} \tag{2-3}$$

$$\cos(\vec{R}', Ox) = \frac{R'_x}{R'}; \quad \cos(\vec{R}', Oy) = \frac{R'_y}{R'}; \quad \cos(\vec{R}', Oz) = \frac{R'_z}{R'} \tag{2-4}$$

---

### 2.1.2. Mômen Chính Của Hệ Lực Đối Với Một Điểm

::: tip Định nghĩa
Mômen chính của hệ lực đối với điểm $O$ (gọi là tâm thu gọn) là véctơ bằng tổng các véctơ mômen của tất cả các lực thành phần đối với điểm $O$:

$$\vec{M}_O = \sum_{k=1}^n \vec{m}_O(\vec{F}_k) = \sum_{k=1}^n (\vec{r}_k \times \vec{F}_k) \tag{2-5}$$
:::

Mômen chính $\vec{M}_O$ là một **véctơ buộc** có gốc đặt tại tâm thu gọn $O$.

Hình chiếu của mômen chính trên các trục tọa độ:

$$\begin{cases} M_{Ox} = \displaystyle\sum_{k=1}^n m_x(\vec{F}_k) = \displaystyle\sum_{k=1}^n (y_k F_{kz} - z_k F_{ky}) \\ M_{Oy} = \displaystyle\sum_{k=1}^n m_y(\vec{F}_k) = \displaystyle\sum_{k=1}^n (z_k F_{kx} - x_k F_{kz}) \\ M_{Oz} = \displaystyle\sum_{k=1}^n m_z(\vec{F}_k) = \displaystyle\sum_{k=1}^n (x_k F_{ky} - y_k F_{kx}) \end{cases} \tag{2-6}$$

Độ lớn của mômen chính:

$$M_O = \sqrt{M^2_{Ox} + M^2_{Oy} + M^2_{Oz}} \tag{2-7}$$

---

### 2.1.3. Sự Phụ Thuộc Của Mômen Chính Vào Tâm Thu Gọn

Khi dời tâm thu gọn từ điểm $O$ sang điểm $O'$, bán kính véctơ của điểm đặt $A_k$ thay đổi: $\vec{r}'_k = \vec{r}_k + \vec{O'O}$.

Công thức dời tâm thu gọn:

$$\vec{M}_{O'} = \vec{M}_O + \vec{O'O} \times \vec{R}' \tag{2-8}$$

### 2.1.4. Các Bất Biến Của Hệ Lực

- **Bất biến thứ nhất:** Véctơ chính $\vec{R}'$ của hệ lực là bất biến, không phụ thuộc vào việc chọn tâm thu gọn $O$.
- **Bất biến thứ hai:** Tích vô hướng của véctơ chính và véctơ mômen chính là đại lượng không đổi đối với mọi tâm thu gọn:

$$\vec{R}' \cdot \vec{M}_{O'} = \vec{R}' \cdot \vec{M}_O = \text{const} \tag{2-9}$$

---

## 2.2. Thu Gọn Hệ Lực Không Gian

### 2.2.1. Định Lý Poinsot (Định Lý Cơ Bản Về Thu Gọn Hệ Lực)

::: tip Định lý Poinsot
Mọi hệ lực không gian $(\vec{F}_1, \vec{F}_2, ..., \vec{F}_n)$ tác dụng lên vật rắn bao giờ cũng có thể thu gọn về một tâm $O$ tùy ý thành một hệ gồm:
1. Một lực duy nhất đặt tại $O$, có véctơ bằng véctơ chính $\vec{R}'$ của hệ.
2. Một ngẫu lực có véctơ mômen bằng mômen chính $\vec{M}_O$ của hệ đối với điểm $O$.
:::

$$(\vec{F}_1, \vec{F}_2, ..., \vec{F}_n) \sim (\vec{R}', \vec{M}_O)$$

<div class="figure-container">
  <img src="/figures/tinh-hoc/hinh_2_1.png" alt="Hình 2-1: Thu gọn hệ lực không gian theo định lý Poinsot" style="max-height: 280px;" />
  <div class="figure-caption">Hình 2-1: Thu gọn hệ lực không gian về tâm O</div>
</div>

---

### 2.2.2. Các Trường Hợp Tối Giản Của Hệ Lực

Tùy thuộc vào giá trị của $\vec{R}'$ và $\vec{M}_O$, hệ lực có thể tối giản về các dạng sau:

1. **Hệ cân bằng:**
   $$\vec{R}' = \vec{0} \quad \text{và} \quad \vec{M}_O = \vec{0} \implies (\vec{F}_1, \vec{F}_2, ..., \vec{F}_n) \sim 0$$

2. **Hệ tương đương một ngẫu lực:**
   $$\vec{R}' = \vec{0} \quad \text{và} \quad \vec{M}_O \neq \vec{0} \implies (\vec{F}_1, ..., \vec{F}_n) \sim \vec{M}_O$$
   Mômen chính trong trường hợp này không phụ thuộc vào việc chọn tâm thu gọn.

3. **Hệ tương đương một hợp lực duy nhất:**
   - Trường hợp $\vec{R}' \neq \vec{0}$ và $\vec{M}_O = \vec{0}$: Hợp lực $\vec{R} = \vec{R}'$ đi qua tâm $O$.
   - Trường hợp $\vec{R}' \neq \vec{0}, \vec{M}_O \neq \vec{0}$ và $\vec{R}' \perp \vec{M}_O$ ($\vec{R}' \cdot \vec{M}_O = 0$): Hệ lực tương đương một hợp lực $\vec{R} = \vec{R}'$ có đường tác dụng cách $O$ một đoạn $d = \frac{M_O}{R'}$.

4. **Hệ tương đương một xoắn động (Đinh xoắn Poinsot):**
   $$\vec{R}' \neq \vec{0}, \quad \vec{M}_O \neq \vec{0} \quad \text{và} \quad \vec{R}' \cdot \vec{M}_O \neq 0$$
   Hệ không thể tối giản thành một lực duy nhất mà tương đương một lực $\vec{R}'$ và một ngẫu lực có véctơ mômen $\vec{M}_{\text{min}}$ song song cùng phương với $\vec{R}'$ dọc theo **trục trung tâm**.

---

### 2.2.3. Định Lý Varignon Về Mômen Của Hợp Lực

::: tip Định lý Varignon
Nếu một hệ lực có hợp lực $\vec{R}$ thì mômen của hợp lực đối với một điểm (hay một trục) bằng tổng các mômen của các lực thành phần đối với điểm đó (hay trục đó):

$$\vec{m}_O(\vec{R}) = \sum_{k=1}^n \vec{m}_O(\vec{F}_k) \tag{2-10}$$

$$m_z(\vec{R}) = \sum_{k=1}^n m_z(\vec{F}_k) \tag{2-11}$$
:::

---

## 2.3. Điều Kiện Cân Bằng Của Hệ Lực Không Gian

### 2.3.1. Điều Kiện Cân Bằng Tổng Quát

::: tip Điều kiện cân bằng
Điều kiện cần và đủ để hệ lực không gian cân bằng là véctơ chính và mômen chính của hệ đối với một tâm tùy ý đồng thời bằng không:

$$\vec{R}' = \vec{0} \quad \text{và} \quad \vec{M}_O = \vec{0} \tag{2-12}$$
:::

### 2.3.2. Hệ Phương Trình Cân Bằng Dạng Giải Tích

Từ điều kiện véctơ $(2-12)$, ta suy ra hệ 6 phương trình cân bằng độc lập trong không gian:

$$\begin{cases} \displaystyle\sum_{k=1}^n F_{kx} = 0 \\[8pt] \displaystyle\sum_{k=1}^n F_{ky} = 0 \\[8pt] \displaystyle\sum_{k=1}^n F_{kz} = 0 \end{cases} \qquad \begin{cases} \displaystyle\sum_{k=1}^n m_x(\vec{F}_k) = 0 \\[8pt] \displaystyle\sum_{k=1}^n m_y(\vec{F}_k) = 0 \\[8pt] \displaystyle\sum_{k=1}^n m_z(\vec{F}_k) = 0 \end{cases} \tag{2-13}$$

---

### 2.3.3. Các Trường Hợp Riêng

#### 1. Hệ Lực Không Gian Song Song
Nếu tất cả các lực song song với trục $Oz$: $F_{kx} = 0, F_{ky} = 0, m_z(\vec{F}_k) = 0$. Hệ phương trình rút lại còn 3 phương trình:

$$\sum F_{kz} = 0; \quad \sum m_x(\vec{F}_k) = 0; \quad \sum m_y(\vec{F}_k) = 0 \tag{2-14}$$

#### 2. Hệ Lực Phẳng Bất Kỳ
Nếu tất cả các lực nằm trong mặt phẳng $Oxy$, hệ phương trình cân bằng có thể viết dưới ba dạng tương đương:

- **Dạng 1 (Dạng cơ bản: 2 lực, 1 mômen):**
  $$\sum F_{kx} = 0; \quad \sum F_{ky} = 0; \quad \sum m_O(\vec{F}_k) = 0 \tag{2-15}$$

- **Dạng 2 (1 lực, 2 mômen):**
  $$\sum F_{kx} = 0; \quad \sum m_A(\vec{F}_k) = 0; \quad \sum m_B(\vec{F}_k) = 0 \tag{2-16}$$
  *(Điều kiện: đường thẳng $AB$ không vuông góc với trục $Ox$)*

- **Dạng 3 (3 mômen):**
  $$\sum m_A(\vec{F}_k) = 0; \quad \sum m_B(\vec{F}_k) = 0; \quad \sum m_C(\vec{F}_k) = 0 \tag{2-17}$$
  *(Điều kiện: ba điểm $A, B, C$ không thẳng hàng)*

#### 3. Hệ Lực Phẳng Song Song
Hệ phương trình rút lại còn 2 phương trình:

$$\sum F_{ky} = 0; \quad \sum m_A(\vec{F}_k) = 0 \tag{2-18}$$
hoặc:
$$\sum m_A(\vec{F}_k) = 0; \quad \sum m_B(\vec{F}_k) = 0 \tag{2-19}$$
*(đường thẳng $AB$ không song song với phương các lực)*

---

## 2.4. Bài Toán Đòn và Vật Lật

### 2.4.1. Điều Kiện Cân Bằng Đòn
Đòn là một vật rắn có trục quay cố định chịu tác dụng của các lực làm quay đòn quanh trục. Điều kiện cân bằng của đòn là tổng đại số các mômen của tất cả các lực đối với trục quay bằng không:

$$\sum m_O(\vec{F}_k) = 0$$

### 2.4.2. Bài Toán Vật Lật
Xét vật đặt trên mặt tựa nằm ngang. Khi chịu tác dụng của lực ngang hoặc mômen có xu hướng làm lật vật quanh cạnh tựa $A$:
- **Mômen giữ:** $M_g = P \cdot b$ (do trọng lực $P$ tạo ra đối với cạnh lật $A$).
- **Mômen lật:** $M_l = F \cdot h$ (do lực gây lật $F$ tạo ra đối với cạnh lật $A$).

Điều kiện để vật không bị lật quanh cạnh $A$:

$$M_g \ge M_l \implies k_l = \frac{M_g}{M_l} \ge 1 \tag{2-20}$$

trong đó $k_l$ được gọi là hệ số an toàn chống lật.

---

## 2.5. Bài Toán Siêu Tĩnh

- **Hệ tĩnh định:** Là hệ mà số phản lực liên kết chưa biết đúng bằng số phương trình cân bằng tĩnh học độc lập có thể thiết lập được. Mọi phản lực liên kết đều xác định được duy nhất bằng các phương trình tĩnh học.
- **Hệ siêu tĩnh:** Là hệ mà số ẩn phản lực liên kết lớn hơn số phương trình cân bằng tĩnh học độc lập. 
  - Số ẩn thừa $n_s = n_{\text{ẩn}} - n_{\text{pt}}$ được gọi là **bậc siêu tĩnh**.
  - Các bài toán siêu tĩnh không thể giải quyết được chỉ bằng các phương trình tĩnh học vật rắn tuyệt đối, mà phải xét đến tính biến dạng của vật thể (sử dụng phương pháp của Sức bền vật liệu và Cơ học kết cấu).
