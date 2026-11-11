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

<img src="/figures/tinh-hoc/hinh_4_1.svg" alt="Hình 4-1: Tâm của hệ lực song song" style="max-height: 260px;" />

<div class="figure-caption">

Hình 4-1: Xác định tâm của hệ lực song song C

</div>

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

<img src="/figures/tinh-hoc/hinh_4_2.svg" alt="Hình 4-2: Trọng tâm của vật thể đồng nhất" style="max-height: 260px;" />

<div class="figure-caption">

Hình 4-2: Xác định trọng tâm của vật rắn

</div>

</div>

---

### 4.2.1. Công Thức Tọa Độ Trọng Tâm Các Dạng Hình Học

#### 1. Vật thể tích ($V$)
$$x_C = \frac{1}{V} \iiint_V x \, dV; \quad y_C = \frac{1}{V} \iiint_V y \, dV; \quad z_C = \frac{1}{V} \iiint_V z \, dV \tag{4-6}$$

#### 2. Bản mỏng, phẳng ($S$)
$$x_C = \frac{1}{S} \iint_S x \, dS; \quad y_C = \frac{1}{S} \iint_S y \, dS \tag{4-7}$$

#### 3. Dây mảnh hoặc đường cong ($L$)
$$x_C = \frac{1}{L} \int_L x \, dL; \quad y_C = \frac{1}{L} \int_L y \, dL; \quad z_C = \frac{1}{L} \int_L z \, dL \tag{4-8}$$

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_3.svg" alt="Hình 4-3: Xác định trọng tâm cung tròn đồng chất" style="max-height: 250px;" />

<div class="figure-caption">

Hình 4-3: Trọng tâm C của cung tròn đồng chất bán kính R, góc ở tâm 2α

</div>

</div>

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


---

## 4.3. Các Bài Toán Thí Dụ Áp Dụng

::: tip Thí dụ 4-1: Trọng tâm của tấm đồng chất hình chữ L
**Đề bài:**  
Tìm tọa độ trọng tâm của một tấm phẳng đồng chất hình chữ L có kích thước cho như trên hình 4-9 (chiều cao toàn phần $10\text{ cm}$, bề rộng nhánh đứng $2\text{ cm}$, nhánh ngang thò ra $2\text{ cm}$ với bề dày $2\text{ cm}$, tổng chiều rộng đáy là $4\text{ cm}$).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_9.svg" alt="Hình 4-9: Tấm phẳng đồng chất hình chữ L" style="max-height: 260px;" />

<div class="figure-caption">

Hình 4-9: Tấm phẳng đồng chất hình chữ L

</div>

</div>

**Bài giải:**  
Sử dụng **phương pháp phân chia (vật ghép)**:  
Chia tấm chữ L thành 2 hình chữ nhật đơn giản:
1. **Hình chữ nhật đứng (phần 1):**  
   - Kích thước: rộng $2\text{ cm}$, cao $10\text{ cm}$.  
   - Diện tích: $S_1 = 2 \times 10 = 20\text{ cm}^2$.  
   - Tọa độ trọng tâm riêng $G_1$:  
     $$x_1 = 1\text{ cm}; \quad y_1 = 5\text{ cm}$$

2. **Hình chữ nhật ngang phần chìa ra (phần 2):**  
   - Kích thước: rộng $2\text{ cm}$ (từ $x = 2$ đến $x = 4\text{ cm}$), cao $2\text{ cm}$ (từ $y = 0$ đến $y = 2\text{ cm}$).  
   - Diện tích: $S_2 = 2 \times 2 = 4\text{ cm}^2$.  
   - Tọa độ trọng tâm riêng $G_2$:  
     $$x_2 = 2 + 1 = 3\text{ cm}; \quad y_2 = 1\text{ cm}$$

Áp dụng công thức tính tọa độ trọng tâm vật ghép cho tấm mỏng đồng chất:
$$x_G = \dfrac{S_1 x_1 + S_2 x_2}{S_1 + S_2} = \dfrac{20 \times 1 + 4 \times 3}{20 + 4} = \dfrac{32}{24} = \dfrac{4}{3} \approx 1{,}33\text{ cm}$$
$$y_G = \dfrac{S_1 y_1 + S_2 y_2}{S_1 + S_2} = \dfrac{20 \times 5 + 4 \times 1}{20 + 4} = \dfrac{104}{24} = \dfrac{13}{3} \approx 4{,}33\text{ cm}$$

Vậy trọng tâm của tấm chữ L có tọa độ là:
$$G\left(\dfrac{4}{3}\text{ cm}, \, \dfrac{13}{3}\text{ cm}\right)$$
:::

::: tip Thí dụ 4-2: Trọng tâm tấm tròn khoét lỗ lệch tâm
**Đề bài:**  
Tìm trọng tâm của một tấm tròn đồng chất tâm $O$ bán kính $R$, bị khoét đi một lỗ tròn tâm $A$ bán kính $r$, biết khoảng cách tâm $OA = a < R$ và $a + r < R$ (H. 4-10).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_10.svg" alt="Hình 4-10: Tấm tròn đồng chất bị khoét lỗ lệch tâm" style="max-height: 260px;" />

<div class="figure-caption">

Hình 4-10: Tấm tròn đồng chất bị khoét lỗ lệch tâm

</div>

</div>

**Bài giải:**  
Sử dụng **phương pháp phần âm**:  
Xem tấm bị khoét là kết quả ghép giữa:
1. Tấm tròn nguyên tâm $O(0, 0)$ bán kính $R$:  
   - Diện tích: $S_1 = \pi R^2$.  
   - Tọa độ trọng tâm: $x_1 = 0; \, y_1 = 0$.
2. Phần lỗ tròn bị khoét tâm $A(a, 0)$ bán kính $r$, coi là phần ghép mang diện tích âm:  
   - Diện tích âm: $S_2 = -\pi r^2$.  
   - Tọa độ trọng tâm: $x_2 = a; \, y_2 = 0$.

Do hình đối xứng qua trục $Ox$, trọng tâm $G$ chắc chắn nằm trên trục $Ox$, tức là:
$$y_G = 0$$

Hoành độ trọng tâm $x_G$ được tính theo công thức:
$$x_G = \dfrac{S_1 x_1 + S_2 x_2}{S_1 + S_2} = \dfrac{\pi R^2 \cdot 0 + (-\pi r^2) \cdot a}{\pi R^2 - \pi r^2} = -\dfrac{a r^2}{R^2 - r^2}$$

*Nhận xét:* Dấu âm chứng tỏ trọng tâm $G$ bị dời về phía đối diện với phần khoét lỗ (lệch sang bên trái gốc $O$).
:::

::: tip Thí dụ 4-3: Trọng tâm của nửa đường tròn (Áp dụng định lý Guldin 1)
**Đề bài:**  
Tìm khoảng cách từ tâm $O$ đến trọng tâm của một dây kim loại uốn thành nửa đường tròn đồng chất bán kính $R$.

**Bài giải:**  
Chọn hệ trục tọa độ sao cho đường kính nằm dọc theo trục $Ox$, trục đối xứng trùng với trục $Oy$. Do tính chất đối xứng, hoành độ trọng tâm:
$$x_G = 0$$

Để tìm tung độ $y_G$, ta áp dụng **định lý Guldin 1**:  
Cho nửa đường tròn quay quanh trục đường kính của nó ($Ox$) trọn một vòng $360^\circ$. Mặt tròn xoay sinh ra chính là **mặt cầu bán kính $R$**.
- Diện tích mặt cầu: $S = 4\pi R^2$.
- Chiều dài cung nửa đường tròn quay: $L = \pi R$.
- Khoảng cách từ trọng tâm cung $G$ đến trục quay là tung độ $y_G$.

Theo định lý Guldin 1:
$$S = 2\pi y_G \cdot L \implies 4\pi R^2 = 2\pi y_G \cdot (\pi R)$$
$$y_G = \dfrac{4\pi R^2}{2\pi^2 R} = \dfrac{2R}{\pi} \approx 0{,}637 R$$

Vậy trọng tâm của nửa đường tròn nằm trên trục đối xứng và cách tâm một khoảng $y_G = \dfrac{2R}{\pi}$.
:::

::: tip Thí dụ 4-4: Thể tích khối xuyến (Áp dụng định lý Guldin 2)
**Đề bài:**  
Tìm thể tích của một khối xuyến (hình vành khăn, ruột bánh xe) sinh ra khi cho một hình tròn bán kính $r$ quay quanh một trục $\Delta$ đồng phẳng nằm ngoài hình tròn và cách tâm hình tròn một đoạn $R > r$ (H. 4-13).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_13.svg" alt="Hình 4-13: Khối xuyến sinh ra khi quay hình tròn quanh trục Delta" style="max-height: 250px;" />

<div class="figure-caption">

Hình 4-13: Khối xuyến sinh ra khi quay hình tròn quanh trục $\Delta$

</div>

</div>

**Bài giải:**  
Áp dụng **định lý Guldin 2**:  
- Hình phẳng quay là hình tròn tâm $A$ bán kính $r$, có diện tích:
  $$S = \pi r^2$$
- Trọng tâm của hình tròn đồng chất chính là tâm $A$. Do đó khoảng cách từ trọng tâm diện tích đến trục quay $\Delta$ là:
  $$d = R$$
- Chiều dài quỹ đạo tròn do trọng tâm $A$ vạch nên khi quay một vòng quanh trục $\Delta$:
  $$L_G = 2\pi R$$

Theo định lý Guldin 2, thể tích khối tròn xoay (khối xuyến) sinh ra là:
$$V = 2\pi d \cdot S = 2\pi R \cdot (\pi r^2) = 2\pi^2 r^2 R$$
:::

::: tip Thí dụ 4-5: Trọng tâm của nửa hình tròn phẳng (Áp dụng định lý Guldin 2)
**Đề bài:**  
Tìm khoảng cách từ tâm đến trọng tâm của một tấm mỏng phẳng đồng chất hình nửa hình tròn bán kính $R$ (H. 4-14).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_14.svg" alt="Hình 4-14: Nửa tấm tròn đồng chất bán kính R" style="max-height: 250px;" />

<div class="figure-caption">

Hình 4-14: Nửa tấm tròn đồng chất bán kính $R$

</div>

</div>

**Bài giải:**  
Đặt hệ trục sao cho đường kính đáy nằm dọc trục $Oy$, trục đối xứng hướng dọc trục $Ox$. Do tính chất đối xứng, trọng tâm $G$ nằm trên trục $Ox$ ($y_G = 0$).  
Để tìm hoành độ $x_G$, ta áp dụng **định lý Guldin 2**:  
Cho nửa hình tròn quay quanh đường kính đáy của nó (trục $Oy$) một vòng $360^\circ$. Khối tròn xoay tạo thành là một **khối cầu bán kính $R$**.
- Thể tích khối cầu:
  $$V = \dfrac{4}{3}\pi R^3$$
- Diện tích của nửa hình tròn quay:
  $$S = \dfrac{1}{2}\pi R^2$$
- Khoảng cách từ trọng tâm $G$ của nửa hình tròn đến trục quay $Oy$ là hoành độ $x_G$.

Theo định lý Guldin 2:
$$V = 2\pi x_G \cdot S \implies \dfrac{4}{3}\pi R^3 = 2\pi x_G \cdot \left(\dfrac{1}{2}\pi R^2\right)$$
$$\dfrac{4}{3}\pi R^3 = \pi^2 R^2 x_G \implies x_G = \dfrac{4R}{3\pi} \approx 0{,}424 R$$

Vậy trọng tâm của nửa hình tròn phẳng đồng chất nằm trên trục đối xứng và cách tâm một khoảng:
$$x_G = \dfrac{4R}{3\pi}$$
:::
