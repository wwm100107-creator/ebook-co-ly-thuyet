# Chương 4: Trọng Tâm

## 4.1. Tâm Của Hệ Lực Song Song

### 4.1.1. Khái Niệm Tâm Của Hệ Lực Song Song

Xét hệ lực song song $(\vec{P}_1, \vec{P}_2, ..., \vec{P}_n)$ đặt tại các điểm $A_1, A_2, ..., A_n$ có bán kính véctơ $\vec{r}_1, \vec{r}_2, ..., \vec{r}_n$ đối với gốc tọa độ $O$.

Giả sử $\vec{u}$ là véctơ đơn vị chỉ phương của hệ lực:

$$\vec{P}_k = P_k \cdot \vec{u} \quad (k = 1, 2, ..., n)$$

trong đó $P_k$ là giá trị đại số của lực $\vec{P}_k$ theo phương $\vec{u}$.

Hợp lực $\vec{R}$ của hệ lực song song:

$$\vec{R} = \sum_{k=1}^n \vec{P}_k = \left( \sum_{k=1}^n P_k \right) \vec{u} \tag{4-1}$$

Giả sử $\sum P_k \neq 0$. Theo định lý Varignon về mômen của hợp lực đối với gốc $O$:

$$\vec{r}_C \times \vec{R} = \sum_{k=1}^n (\vec{r}_k \times \vec{P}_k) \tag{4-2}$$

Thay $\vec{P}_k = P_k \vec{u}$ và $\vec{R} = (\sum P_k)\vec{u}$ vào, ta được:

$$\left[ \left( \sum_{k=1}^n P_k \right) \vec{r}_C - \sum_{k=1}^n P_k \vec{r}_k \right] \times \vec{u} = \vec{0}$$

Đẳng thức trên phải đúng với mọi phương $\vec{u}$ tùy ý khi các lực quay xung quanh điểm đặt của chúng mà vẫn giữ nguyên tính song song và trị số. Do đó:

$$\vec{r}_C = \frac{\displaystyle\sum_{k=1}^n P_k \vec{r}_k}{\displaystyle\sum_{k=1}^n P_k} \tag{4-3}$$

::: tip Định nghĩa
Điểm $C$ có bán kính véctơ xác định bởi công thức $(4-3)$ được gọi là **tâm của hệ lực song song**.

Khi các lực của hệ song song quay quanh điểm đặt của chúng theo bất kỳ phương nào trong không gian thì hợp lực $\vec{R}$ vẫn luôn luôn đi qua điểm cố định $C$.
:::

<div class="figure-container">
  <img src="/figures/tinh-hoc/hinh_4_1.png" alt="Hình 4-1: Tâm của hệ lực song song" style="max-height: 260px;" />
  <div class="figure-caption">Hình 4-1: Xác định tâm của hệ lực song song C</div>
</div>

---

### 4.1.2. Tọa Độ Tâm Của Hệ Lực Song Song

Chiếu công thức véctơ $(4-3)$ lên ba trục tọa độ Descartes $Ox, Oy, Oz$, ta nhận được tọa độ của tâm hệ lực song song:

$$x_C = \frac{\displaystyle\sum_{k=1}^n P_k x_k}{\displaystyle\sum_{k=1}^n P_k}; \quad y_C = \frac{\displaystyle\sum_{k=1}^n P_k y_k}{\displaystyle\sum_{k=1}^n P_k}; \quad z_C = \frac{\displaystyle\sum_{k=1}^n P_k z_k}{\displaystyle\sum_{k=1}^n P_k} \tag{4-4}$$

---

## 4.2. Trọng Tâm Của Vật Rắn

Trọng lực của vật rắn là hợp lực của các trọng lực vi phân $d\vec{P}$ tác dụng lên từng phần tử vô cùng bé của vật. Vì kích thước của các vật thể kỹ thuật thông thường là rất nhỏ so với bán kính Trái Đất, nên các trọng lực vi phân $d\vec{P}$ được coi là một hệ lực song song hướng thẳng đứng xuống dưới.

Tâm của hệ lực song song của các trọng lực vi phân này chính là **trọng tâm** của vật rắn.

Bán kính véctơ của trọng tâm:

$$\vec{r}_C = \frac{\displaystyle\int \vec{r} \, dP}{P} \tag{4-5}$$

Đối với vật đồng nhất có khối lượng riêng $\gamma = \text{const}$, ta có $dP = \gamma \, dV$.

<div class="figure-container">
  <img src="/figures/tinh-hoc/hinh_4_2.png" alt="Hình 4-2: Trọng tâm của vật thể đồng nhất" style="max-height: 260px;" />
  <div class="figure-caption">Hình 4-2: Xác định trọng tâm của vật rắn</div>
</div>

---

### 4.2.1. Công Thức Tọa Độ Trọng Tâm Các Dạng Hình Học

#### 1. Vật thể tích ($V$)
$$x_C = \frac{1}{V} \iiint_V x \, dV; \quad y_C = \frac{1}{V} \iiint_V y \, dV; \quad z_C = \frac{1}{V} \iiint_V z \, dV \tag{4-6}$$

#### 2. Bản mỏng, phẳng ($S$)
$$x_C = \frac{1}{S} \iint_S x \, dS; \quad y_C = \frac{1}{S} \iint_S y \, dS \tag{4-7}$$

#### 3. Dây mảnh hoặc đường cong ($L$)
$$x_C = \frac{1}{L} \int_L x \, dL; \quad y_C = \frac{1}{L} \int_L y \, dL; \quad z_C = \frac{1}{L} \int_L z \, dL \tag{4-8}$$

---

### 4.2.2. Các Phương Pháp Xác Định Trọng Tâm

#### 1. Dựa vào tính chất đối xứng
- Nếu vật có **mặt phẳng đối xứng** thì trọng tâm nằm trên mặt phẳng đối xứng đó.
- Nếu vật có **trục đối xứng** thì trọng tâm nằm trên trục đối xứng đó.
- Nếu vật có **tâm đối xứng** thì trọng tâm trùng với tâm đối xứng đó.

#### 2. Phương pháp phân chia (Vật ghép)
Chia vật phức tạp thành $n$ phần đơn giản mà ta đã biết trước thể tích (hoặc diện tích, chiều dài) $V_i$ và tọa độ trọng tâm riêng $C_i(x_i, y_i, z_i)$:

$$x_C = \frac{\displaystyle\sum_{i=1}^n V_i x_i}{\displaystyle\sum_{i=1}^n V_i}; \quad y_C = \frac{\displaystyle\sum_{i=1}^n V_i y_i}{\displaystyle\sum_{i=1}^n V_i}; \quad z_C = \frac{\displaystyle\sum_{i=1}^n V_i z_i}{\displaystyle\sum_{i=1}^n V_i} \tag{4-9}$$

#### 3. Phương pháp phần âm (Vật bị khoét rỗng)
Nếu vật thể có phần bị khoét rỗng, ta có thể áp dụng công thức vật ghép bằng cách coi phần khoét rỗng mang diện tích/thể tích **âm**:

$$x_C = \frac{V_1 x_1 - V_2 x_2}{V_1 - V_2}; \quad y_C = \frac{V_1 y_1 - V_2 y_2}{V_1 - V_2} \tag{4-10}$$

---

### 4.2.3. Các Định Lý Guldin (Pappus - Guldinus)

::: tip Định lý Guldin 1
Diện tích của mặt tròn xoay tạo nên khi quay một cung đường cong phẳng $L$ quanh một trục nằm trong mặt phẳng của cung và không cắt cung đó bằng tích số giữa chiều dài của cung với chu vi của đường tròn do trọng tâm của cung vạch nên:

$$S = 2\pi y_C \cdot L \tag{4-11}$$
:::

::: tip Định lý Guldin 2
Thể tích của khối tròn xoay tạo nên khi quay một hình phẳng có diện tích $S$ quanh một trục nằm trong mặt phẳng của hình và không cắt hình đó bằng tích số giữa diện tích hình phẳng với chu vi của đường tròn do trọng tâm của diện tích vạch nên:

$$V = 2\pi y_C \cdot S \tag{4-12}$$
:::
