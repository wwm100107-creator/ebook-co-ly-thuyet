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

<img src="/figures/tinh-hoc/hinh_2_1.svg" alt="Hình 2-1: Thu gọn hệ lực không gian theo định lý Poinsot" style="max-height: 280px;" />

<div class="figure-caption">

Hình 2-1: Thu gọn hệ lực không gian về tâm O

</div>

</div>

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_2.svg" alt="Hình 2-2: Bổ đề dời lực song song của Poinsot" style="max-height: 260px;" />

<div class="figure-caption">

Hình 2-2: Bổ đề dời lực song song về tâm thu gọn O

</div>

</div>

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_3.svg" alt="Hình 2-3: Thu gọn hệ lực phẳng bất kỳ về tâm O" style="max-height: 250px;" />

<div class="figure-caption">

Hình 2-3: Thu gọn hệ lực phẳng bất kỳ về véctơ chính và mômen chính tại O

</div>

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

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_5.svg" alt="Hình 2-5: Hợp hai lực song song cùng chiều và ngược chiều" style="max-height: 250px;" />

<div class="figure-caption">

Hình 2-5: Hợp hai lực song song cùng chiều và hai lực song song ngược chiều

</div>

</div>

---

## 2.4. Bài Toán Đòn và Vật Lật

### 2.4.1. Điều Kiện Cân Bằng Đòn
Đòn là một vật rắn có trục quay cố định chịu tác dụng của các lực làm quay đòn quanh trục. Điều kiện cân bằng của đòn là tổng đại số các mômen của tất cả các lực đối với trục quay bằng không:

$$\sum m_O(\vec{F}_k) = 0$$

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_19.svg" alt="Hình 2-19: Sơ đồ cân bằng của đòn quay quanh trục cố định O" style="max-height: 260px;" />

<div class="figure-caption">

Hình 2-19: Sơ đồ lực và cánh tay đòn đối với trục quay cố định O

</div>

</div>

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


---

## 2.6. Các Bài Toán Thí Dụ Áp Dụng

::: tip Thí dụ 2-1: Cân bằng của dầm cầu chịu hệ lực phẳng
**Đề bài:**  
Dầm $AB$ có chiều dài $4a$ được đặt trên hai gối đỡ như hình 2-12 (gối cố định tại $A$, gối di động tại $B$). Dầm chịu tác dụng của hai lực tập trung thẳng đứng hướng xuống: lực $\vec{P}$ tại điểm giữa $C$ ($BC = 2a$) và lực $\vec{Q}$ tại $D$ cách đầu mút $A$ một đoạn $a$ ($AD = a$). Ngoài ra, dầm còn chịu một lực ngang $\vec{F}$ cách đường trục của dầm một khoảng $d = \frac{1}{10}a$.  
Xác định các phản lực tại các gối đỡ $A$ và $B$.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_12.svg" alt="Hình 2-12: Sơ đồ dầm AB chịu hệ lực phẳng và các phản lực liên kết" style="max-height: 260px;" />

<div class="figure-caption">

Hình 2-12: Sơ đồ dầm $AB$ chịu hệ lực phẳng và các phản lực liên kết

</div>

</div>

**Bài giải:**  
Khảo sát sự cân bằng của dầm $AB$. Giải phóng liên kết tại $A$ và $B$, thay bằng các phản lực liên kết:
- Tại gối cố định $A$: phản lực gồm hai thành phần vuông góc $\vec{X}_A$ (nằm ngang) và $\vec{Y}_A$ (thẳng đứng).
- Tại gối di động $B$: phản lực pháp tuyến $\vec{N}_B$ vuông góc với mặt tựa (hướng thẳng đứng lên trên).

Hệ lực tác dụng lên dầm gồm các lực hoạt động $\vec{P}, \vec{Q}, \vec{F}$ và các phản lực liên kết $\vec{X}_A, \vec{Y}_A, \vec{N}_B$. Vì dầm ở trạng thái cân bằng:
$$(\vec{P}, \vec{Q}, \vec{F}, \vec{X}_A, \vec{Y}_A, \vec{N}_B) \sim \vec{0}$$

Thiết lập hệ phương trình cân bằng tĩnh học dạng cơ bản (dạng 1):
$$\begin{cases}
\sum F_x = F - X_A = 0 \\
\sum F_y = Y_A + N_B - P - Q = 0 \\
\sum m_A(\vec{F}_k) = F \cdot d + Q \cdot a + P \cdot 2a - N_B \cdot 4a = 0
\end{cases}$$

Thay $d = \frac{1}{10}a$ vào phương trình mômen đối với điểm $A$:
$$\frac{1}{10}Fa + Qa + 2Pa - 4N_B a = 0 \implies 4N_B = 2P + Q + \frac{1}{10}F$$

Từ đó giải hệ phương trình ta tìm được độ lớn các phản lực:
$$\begin{cases}
X_A = F \\
N_B = \dfrac{1}{2}P + \dfrac{1}{4}Q + \dfrac{1}{40}F \\
Y_A = P + Q - N_B = \dfrac{1}{2}P + \dfrac{3}{4}Q - \dfrac{1}{40}F
\end{cases}$$

*Nhận xét:*
- Các phản lực $X_A$ và $N_B$ luôn dương nên có chiều thực tế trùng với chiều giả thiết trên hình vẽ.
- Thành phần phản lực thẳng đứng $Y_A$ có thể mang giá trị dương hoặc âm tùy thuộc vào dấu của biểu thức $\left(\frac{1}{2}P + \frac{3}{4}Q - \frac{1}{40}F\right)$. Nếu $Y_A < 0$, chiều thực tế của phản lực $\vec{Y}_A$ sẽ hướng thẳng đứng xuống dưới.
:::

::: tip Thí dụ 2-2: Xác định phản lực tại các ổ đỡ cần trục quay
**Đề bài:**  
Cần trục $ABC$ có trục quay thẳng đứng $GE$ với chiều cao $GE = 5\text{ m}$ và tầm vươn $AC = 5\text{ m}$ (H. 2-13). Trọng lượng bản thân của cần trục là $P = 19{,}62\text{ kN}$ đặt tại điểm $D$ cách trục quay một khoảng $2\text{ m}$. Vật cẩu có trọng lượng $Q = 19{,}43\text{ kN}$ treo tại điểm $C$. Xác định các phản lực liên kết tại ổ đỡ $G$ và ổ cối chặn $E$. Bỏ qua ma sát.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_13.svg" alt="Hình 2-13: Sơ đồ kết cấu cần trục quay và các lực tác dụng" style="max-height: 280px;" />

<div class="figure-caption">

Hình 2-13: Sơ đồ kết cấu cần trục quay và các lực tác dụng

</div>

</div>

**Bài giải:**  
Khảo sát cân bằng của cần trục $ABC$. Toàn bộ hệ lực tác dụng nằm trong mặt phẳng đối xứng của cần trục:
- Các lực hoạt động: trọng lượng cần trục $\vec{P}$ đặt tại $D$ cách trục đứng $2\text{ m}$, tải trọng cẩu $\vec{Q}$ đặt tại $C$ cách trục đứng $5\text{ m}$.
- Các phản lực liên kết:
  - Ổ trục trụ phía trên $G$ cản trở chuyển động ngang, phát sinh phản lực nằm ngang $\vec{X}_G$.
  - Ổ cối phía dưới $E$ vừa cản trở di chuyển ngang vừa cản trở lún đứng, phát sinh hai thành phần phản lực $\vec{X}_E$ và $\vec{Y}_E$.

Hệ lực phẳng cân bằng:
$$(\vec{P}, \vec{Q}, \vec{X}_G, \vec{X}_E, \vec{Y}_E) \sim \vec{0}$$

Viết các phương trình cân bằng tĩnh học:
$$\begin{cases}
\sum F_y = Y_E - P - Q = 0 \\
\sum m_E(\vec{F}_k) = 5 X_G - 2 P - 5 Q = 0 \\
\sum m_G(\vec{F}_k) = 5 X_E - 2 P - 5 Q = 0
\end{cases}$$

Từ hệ phương trình trên, ta tính được các phản lực:
$$\begin{cases}
Y_E = P + Q = 19{,}62 + 19{,}43 = 39{,}05\text{ kN} \\
X_G = \dfrac{2}{5}P + Q = \dfrac{2}{5}(19{,}62) + 19{,}43 = 7{,}848 + 19{,}43 = 27{,}278\text{ kN} \\
X_E = \dfrac{2}{5}P + Q = 27{,}278\text{ kN}
\end{cases}$$

Các phản lực đều có giá trị dương, do đó chiều thực tế của các phản lực đúng như chiều giả thiết ban đầu.
:::

::: tip Thí dụ 2-3: Dầm công-xôn ngàm chịu tải phân bố và ngẫu lực
**Đề bài:**  
Dầm $AB$ có chiều dài $l$ được gắn vào tường nhờ liên kết ngàm tại đầu $A$. Tại đầu tự do $B$, dầm chịu tác dụng của lực tập trung $\vec{P}$ hướng xuống và một ngẫu lực có mômen $M$ thuận chiều kim đồng hồ. Dọc suốt chiều dài dầm chịu tác dụng của hệ lực phân bố đều cường độ $q_0$. Xác định các phản lực tại ngàm $A$. Bỏ qua trọng lượng bản thân dầm (H. 2-14).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_14.svg" alt="Hình 2-14: Dầm ngàm chịu tải trọng phân bố đều, lực tập trung và ngẫu lực" style="max-height: 220px;" />

<div class="figure-caption">

Hình 2-14: Dầm ngàm chịu tải trọng phân bố đều, lực tập trung và ngẫu lực

</div>

</div>

**Bài giải:**  
Hệ lực phân bố đều cường độ $q_0$ tương đương với một hợp lực tập trung:
$$Q = q_0 \cdot l$$
đặt tại trung điểm của dầm, tức cách ngàm $A$ một đoạn bằng $\frac{l}{2}$.

Giải phóng liên kết ngàm phẳng tại $A$, thay bằng:
- Phản lực lực: gồm hai thành phần $\vec{X}_A$ (dọc trục dầm) và $\vec{Y}_A$ (thẳng đứng).
- Ngẫu lực phản lực ngàm: có mômen $M^A$ (giả thiết ngược chiều kim đồng hồ).

Điều kiện cân bằng tĩnh học của dầm:
$$\begin{cases}
\sum F_x = X_A = 0 \\
\sum F_y = Y_A - P - Q = 0 \\
\sum m_A(\vec{F}_k) = M^A - P \cdot l - Q \cdot \dfrac{l}{2} - M = 0
\end{cases}$$

Thay $Q = q_0 l$, ta nhận được nghiệm:
$$\begin{cases}
X_A = 0 \\
Y_A = P + q_0 l \\
M^A = P l + \dfrac{1}{2}q_0 l^2 + M
\end{cases}$$

Các giá trị phản lực đều dương, khẳng định chiều của phản lực $\vec{Y}_A$ hướng thẳng đứng lên và mômen ngàm $M^A$ quay ngược chiều kim đồng hồ để giữ dầm cân bằng.
:::

::: tip Thí dụ 2-4: Cân bằng của cánh cửa không gian giữ bằng dây cáp
**Đề bài:**  
Cánh cửa phẳng chữ nhật $OABC$ đồng chất có trọng lượng $P$ được giữ cân bằng ở vị trí nằm ngang trong mặt phẳng $Oxy$ nhờ gối cầu tại gốc tọa độ $O$, bản lề trụ tại $C$ trên trục $Oy$, và một sợi dây cáp $BD$ chằng từ đỉnh $B$ lên điểm $D$ trên trục thẳng đứng $Oz$ (H. 2-15). Biết đường chéo $OB$ của cánh cửa nghiêng góc $60^\circ$ so với cạnh $OA$ (nằm trên trục $Ox$), sợi dây $BD$ nằm trong mặt phẳng thẳng đứng đi qua đường chéo $OB$ và nghiêng góc $45^\circ$ so với $OB$.  
Xác định sức căng $T$ của dây cáp và các phản lực tại gối tựa $O$ và bản lề $C$.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_15.svg" alt="Hình 2-15: Cánh cửa phẳng chữ nhật cân bằng trong không gian" style="max-height: 280px;" />

<div class="figure-caption">

Hình 2-15: Cánh cửa phẳng chữ nhật cân bằng trong không gian

</div>

</div>

**Bài giải:**  
Đặt hệ trục tọa độ Đề-các $Oxyz$ với mặt phẳng $Oxy$ chứa cánh cửa lúc nằm ngang ($Ox$ dọc theo $OA$, $Oy$ dọc theo $OC$, $Oz$ hướng thẳng đứng lên trên).
- Trọng lực $\vec{P}$ của cánh cửa đặt tại tâm đối xứng $G$ có tọa độ $\left(\frac{a}{2}, \frac{b}{2}, 0\right)$ với $b = a\sqrt{3}$ (do $\widehat{AOB} = 60^\circ$).
- Lực căng dây $\vec{T}$ tại $B$ hướng về $D$. Vì dây nghiêng góc $45^\circ$ với mặt phẳng nằm ngang và hình chiếu của dây trên mặt $Oxy$ trùng với đường chéo $BO$, các thành phần hình chiếu của $\vec{T}$ là:
  $$\begin{cases}
  T_x = T \cos 45^\circ \cos 60^\circ = \dfrac{T\sqrt{2}}{4} \\
  T_y = T \cos 45^\circ \sin 60^\circ = \dfrac{T\sqrt{6}}{4} \\
  T_z = T \sin 45^\circ = \dfrac{T\sqrt{2}}{2}
  \end{cases}$$
- Phản lực tại gối cầu $O$: gồm 3 thành phần $\vec{X}_O, \vec{Y}_O, \vec{Z}_O$.
- Phản lực tại bản lề trụ $C$ (trục bản lề dọc theo trục $Oy$): gồm 2 thành phần vuông góc với trục bản lề $\vec{X}_C, \vec{Z}_C$.

Viết 6 phương trình cân bằng không gian:
$$\begin{cases}
\sum F_x = X_O + X_C - T_x = 0 \\
\sum F_y = Y_O - T_y = 0 \\
\sum F_z = Z_O + Z_C + T_z - P = 0 \\
\sum m_x(\vec{F}) = - P \cdot \dfrac{b}{2} + Z_C \cdot b + T_z \cdot b = 0 \\
\sum m_y(\vec{F}) = P \cdot \dfrac{a}{2} - T_z \cdot a = 0 \\
\sum m_z(\vec{F}) = - X_C \cdot b = 0
\end{cases}$$

Từ phương trình mômen đối với trục $Oy$:
$$P \cdot \dfrac{a}{2} - \dfrac{T\sqrt{2}}{2} \cdot a = 0 \implies T = \dfrac{P\sqrt{2}}{2}$$

Thay giá trị $T$ vào các phương trình còn lại, ta lần lượt tìm được:
$$\begin{cases}
T_x = \dfrac{P}{4}; \quad T_y = \dfrac{P\sqrt{3}}{4}; \quad T_z = \dfrac{P}{2} \\
X_C = 0 \\
X_O = T_x = \dfrac{P}{4} \\
Y_O = T_y = \dfrac{P\sqrt{3}}{4} \\
Z_C = \dfrac{P}{2} - T_z = 0 \\
Z_O = P - Z_C - T_z = \dfrac{P}{2}
\end{cases}$$

Tất cả các thành phần phản lực đều xác định được duy nhất và mang dấu dương.
:::

::: tip Thí dụ 2-5: Xác định phản lực của xe ba bánh (Hệ lực song song không gian)
**Đề bài:**  
Một xe ba bánh được mô hình bằng tấm phẳng tam giác đều $ABC$ đồng chất, cạnh có chiều dài $a$, nằm cân bằng trên mặt ngang và tiếp xúc với mặt đường qua 3 bánh xe tại các đỉnh $A, B$ và $C$ (H. 2-16). Trọng lượng của xe là $P$ đặt tại trọng tâm $G$ của tam giác. Xe chở một kiện hàng có trọng lượng $Q$ đặt tại điểm $D$ cách cạnh $AC$ một đoạn $b$ và cách trung trực của cạnh $AB$ một đoạn $c$.  
Xác định phản lực của mặt đường tác dụng lên mỗi bánh xe tại $A, B$ và $C$. Tìm điều kiện để xe không bị lật.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_16.svg" alt="Hình 2-16: Sơ đồ xe ba bánh chịu hệ lực song song trong không gian" style="max-height: 280px;" />

<div class="figure-caption">

Hình 2-16: Sơ đồ xe ba bánh chịu hệ lực song song trong không gian

</div>

</div>

**Bài giải:**  
Hệ lực tác dụng lên xe gồm hai tải trọng thẳng đứng hướng xuống $\vec{P}, \vec{Q}$ và ba phản lực thẳng đứng hướng lên từ mặt đường $\vec{N}_A, \vec{N}_B, \vec{N}_C$. Đây là bài toán cân bằng của hệ lực song song trong không gian.

Chọn hệ trục tọa độ $Oxyz$ sao cho mặt phẳng $Oxy$ chứa đáy xe, trục $Oz$ hướng thẳng đứng lên trên. Thiết lập 3 phương trình cân bằng độc lập:
$$\begin{cases}
\sum F_z = N_A + N_B + N_C - P - Q = 0 \\
\sum m_x(\vec{F}) = - P \cdot \dfrac{a\sqrt{3}}{6} - Q \cdot b + N_C \cdot \dfrac{a\sqrt{3}}{2} = 0 \\
\sum m_y(\vec{F}) = Q \cdot c + N_B \cdot \dfrac{a}{2} - N_A \cdot \dfrac{a}{2} = 0
\end{cases}$$

Giải hệ phương trình trên, ta tìm được các phản lực:
$$\begin{cases}
N_C = \dfrac{P}{3} + \dfrac{2Qb\sqrt{3}}{3a} \\
N_A = \dfrac{P}{3} + Q\left[\dfrac{1}{2} - \dfrac{b\sqrt{3}}{3a} + \dfrac{c}{a}\right] \\
N_B = \dfrac{P}{3} + Q\left[\dfrac{1}{2} - \dfrac{b\sqrt{3}}{3a} - \dfrac{c}{a}\right]
\end{cases}$$

*Điều kiện chống lật:*  
Để xe không bị lật, cả ba bánh xe đều phải tiếp xúc với mặt đường và nén lên mặt đường, tức là các phản lực pháp tuyến không được triệt tiêu:
$$N_A > 0, \quad N_B > 0, \quad N_C > 0$$
Đặc biệt, bánh xe $B$ là vị trí dễ bị nhấc lên nhất khi đặt tải lệch về phía $A$ ($c > 0$), do đó điều kiện để bánh $B$ không tách khỏi mặt đường (xe không bị lật quanh cạnh $AC$) là:
$$\dfrac{P}{3} + Q\left[\dfrac{1}{2} - \dfrac{b\sqrt{3}}{3a} - \dfrac{c}{a}\right] > 0$$
:::

::: tip Thí dụ 2-6: Cân bằng của trục truyền động nằm ngang trong không gian
**Đề bài:**  
Một trục kéo $AB$ có đường trục nằm ngang và được đỡ trên hai ổ trục trụ tại $A$ và $B$ (H. 2-17). Trên trục có lắp một puli đường kính $D = 0{,}60\text{ m}$ chịu lực kéo của hai nhánh đai $T_1 = 5\text{ kN}$ và $T_2 = 2\text{ kN}$, và một tang tời đường kính $d = 0{,}30\text{ m}$ treo vật kéo có trọng lượng $P = 5\text{ kN}$. Ngoài ra trục còn chịu tác dụng của một ngẫu lực cản có mômen $M$. Biết khoảng cách từ $B$ đến puli là $a$, từ puli đến tang tời là $2a$, và từ tang tời đến $A$ là $a$.  
Xác định ngẫu lực cản $M$ cần thiết để trục cân bằng và các phản lực tại hai ổ trục $A$ và $B$. Bỏ qua ma sát và trọng lượng bản thân của trục.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_17.svg" alt="Hình 2-17: Sơ đồ trục truyền động chịu lực trong không gian" style="max-height: 260px;" />

<div class="figure-caption">

Hình 2-17: Sơ đồ trục truyền động chịu lực trong không gian

</div>

</div>

**Bài giải:**  
Chọn hệ trục tọa độ $Oxyz$ có trục $Oy$ trùng với đường tâm trục $AB$ hướng từ $B$ sang $A$, trục $Oz$ hướng thẳng đứng lên trên, trục $Ox$ nằm ngang.
- Tác dụng của hai nhánh đai: hai lực nằm ngang song song $T_1 = 5\text{ kN}$ và $T_2 = 2\text{ kN}$ theo phương trục $Ox$.
- Tác dụng của dây cáp tang tời: lực căng dây thẳng đứng hướng xuống có độ lớn bằng trọng lượng vật $P = 5\text{ kN}$ theo phương $-Oz$.
- Ngẫu lực cản $M$ tác dụng quay quanh trục $Oy$.
- Các phản lực liên kết:
  - Ổ trục trụ tại $B$: $\vec{X}_B$ (nằm ngang), $\vec{Z}_B$ (thẳng đứng).
  - Ổ trục trụ tại $A$: $\vec{X}_A$ (nằm ngang), $\vec{Z}_A$ (thẳng đứng).

Thiết lập các phương trình cân bằng không gian:
$$\begin{cases}
\sum F_x = T_1 + T_2 + X_A + X_B = 0 \\
\sum F_z = - P + Z_A + Z_B = 0 \\
\sum m_y(\vec{F}) = T_1 \cdot \dfrac{D}{2} - T_2 \cdot \dfrac{D}{2} - P \cdot \dfrac{d}{2} - M = 0 \\
\sum m_x(\vec{F}) = P \cdot 3a - Z_A \cdot 4a = 0 \\
\sum m_z(\vec{F}) = -(T_1 + T_2) \cdot a - X_A \cdot 4a = 0
\end{cases}$$

Từ phương trình mômen đối với trục quay $Oy$:
$$M = (T_1 - T_2)\dfrac{D}{2} - P\dfrac{d}{2} = (5 - 2)\cdot \dfrac{0{,}60}{2} - 5\cdot \dfrac{0{,}30}{2} = 0{,}90 - 0{,}75 = 0{,}15\text{ kNm}$$

Từ các phương trình hình chiếu và mômen còn lại:
$$\begin{cases}
Z_A = \dfrac{3}{4}P = \dfrac{3}{4}(5) = 3{,}75\text{ kN} \\
Z_B = P - Z_A = 5 - 3{,}75 = 1{,}25\text{ kN} \\
X_A = -\dfrac{1}{4}(T_1 + T_2) = -\dfrac{1}{4}(5 + 2) = -1{,}75\text{ kN} \\
X_B = -(T_1 + T_2) - X_A = -7 - (-1{,}75) = -5{,}25\text{ kN}
\end{cases}$$

*Kết luận:* Dấu âm của $X_A$ và $X_B$ chỉ ra rằng các lực phản lực ngang tại các ổ đỡ có chiều thực tế ngược chiều với chiều giả thiết ban đầu (hướng theo chiều âm trục $Ox$).
:::

::: tip Thí dụ 2-7: Cân bằng hệ hai thanh nối bản lề
**Đề bài:**  
Hai thanh đồng chất $OA$ và $BC$ có trọng lượng tương ứng là $2P$ và $P$, chiều dài $OA = 4a$, $BC = 2a$. Hai thanh được nối với nhau bằng bản lề tại điểm giữa $B$ của thanh $OA$ ($OB = 2a$), các đầu mút $O$ và $C$ nối với nền nhờ các bản lề cố định (H. 2-18). Tại đầu tự do $A$ có treo một vật nặng trọng lượng $Q$. Lúc cân bằng, cả hai thanh đều làm với đường nằm ngang một góc $30^\circ$.  
Tìm các phản lực liên kết tại các gối đỡ $O, C$ và lực tương tác tại khớp nối $B$.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_18.svg" alt="Hình 2-18: Hệ hai thanh nối bản lề chịu tải trọng" style="max-height: 260px;" />

<div class="figure-caption">

Hình 2-18: Hệ hai thanh nối bản lề chịu tải trọng

</div>

</div>

**Bài giải:**  
Đây là bài toán cân bằng của hệ vật rắn gồm 2 vật nối với nhau bằng khớp động. Ta có thể giải bằng hai cách:

#### Cách 1: Phương pháp tách vật
Tách riêng từng thanh và đặt các phản lực liên kết:
1. **Xét thanh $OA$:** Chịu tải trọng $Q$ tại $A$, trọng lượng $2P$ tại trung điểm $B$, phản lực tại bản lề $O$ ($\vec{X}_O, \vec{Y}_O$), và phản lực từ thanh $BC$ tác dụng lên $OA$ tại khớp $B$ ($\vec{X}_B, \vec{Y}_B$).  
   Các phương trình cân bằng cho thanh $OA$:
   $$\begin{cases}
   \sum F_x = X_O - X_B = 0 \\
   \sum F_y = Y_O + Y_B - 2P - Q = 0 \\
   \sum m_O(\vec{F}) = -2P(a\sqrt{3}) - Q(2a\sqrt{3}) + Y_B(a\sqrt{3}) + X_B(a) = 0
   \end{cases}$$

2. **Xét thanh $BC$:** Chịu trọng lượng $P$ tại trung điểm, phản lực tại bản lề $C$ ($\vec{X}_C, \vec{Y}_C$), và lực tác dụng từ thanh $OA$ tại $B$ ($\vec{X}'_B = -\vec{X}_B, \vec{Y}'_B = -\vec{Y}_B$).  
   Các phương trình cân bằng cho thanh $BC$:
   $$\begin{cases}
   \sum F_x = X_C + X_B = 0 \\
   \sum F_y = Y_C - P - Y_B = 0 \\
   \sum m_C(\vec{F}) = P\left(\dfrac{a\sqrt{3}}{2}\right) + Y_B(a\sqrt{3}) - X_B(a) = 0
   \end{cases}$$

Giải hệ 6 phương trình trên, ta tìm được các phản lực:
$$\begin{cases}
X_O = \left(\dfrac{5}{4}P - Q\right)\sqrt{3}; \quad Y_O = 2Q + \dfrac{5}{4}P \\
X_C = \left(Q - \dfrac{5}{4}P\right)\sqrt{3}; \quad Y_C = \dfrac{7}{4}P - Q \\
X_B = \left(\dfrac{5}{4}P - Q\right)\sqrt{3}; \quad Y_B = \dfrac{3}{4}P - Q
\end{cases}$$

#### Cách 2: Phương pháp hóa rắn
Xem toàn bộ hệ hai thanh như một vật rắn duy nhất. Ngoại lực tác dụng gồm các hoạt lực $\vec{Q}, 2\vec{P}, \vec{P}$ và các phản lực gối tựa tại $O$ và $C$ ($\vec{X}_O, \vec{Y}_O, \vec{X}_C, \vec{Y}_C$). Các lực tại khớp $B$ là nội lực nên triệt tiêu lẫn nhau.  
Phương trình cân bằng toàn hệ:
$$\begin{cases}
\sum F_x = X_O + X_C = 0 \\
\sum F_y = Y_O + Y_C - 3P - Q = 0 \\
\sum m_O(\vec{F}) = Y_C(2a\sqrt{3}) - Q(2a\sqrt{3}) - P\left(\dfrac{3a\sqrt{3}}{2}\right) - 2P(a\sqrt{3}) = 0
\end{cases}$$
Kết hợp với một phương trình tách riêng thanh $BC$ lấy mômen đối với điểm $B$, ta cũng thu được kết quả hoàn toàn trùng khớp.
:::

::: tip Thí dụ 2-8: Xác định đối trọng khóa van an toàn (Bài toán đòn)
**Đề bài:**  
Một van an toàn hình nón $A$ được nối vào đòn ngang $CD$ tại điểm $B$ (H. 2-20). Đòn $CD$ dài $50\text{ cm}$, đồng chất, có trọng lượng $P_đ = 10\text{ N}$, quay quanh trục bản lề cố định $C$. Tại đầu $D$ của đòn treo một đối trọng $Q$ để giữ van luôn đóng chặt. Biết khoảng cách $BC = 7\text{ cm}$, đường kính miệng van $d = 6\text{ cm}$, và áp suất an toàn của hơi trong bình là $p = 50\text{ N/cm}^2$.  
Xác định trọng lượng nhỏ nhất của đối trọng $Q$ cần treo tại $D$ để khóa chặt van.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_20.svg" alt="Hình 2-20: Sơ đồ van an toàn đòn bẩy và quả cân đối trọng" style="max-height: 220px;" />

<div class="figure-caption">

Hình 2-20: Sơ đồ van an toàn đòn bẩy và quả cân đối trọng

</div>

</div>

**Bài giải:**  
1. **Lực đẩy của hơi tác dụng lên nắp van $A$:**  
   Diện tích miệng van:
   $$S = \dfrac{\pi d^2}{4} = \dfrac{\pi \cdot 6^2}{4} = 9\pi \approx 28{,}27\text{ cm}^2$$
   Lực áp suất hơi đẩy thẳng đứng hướng lên:
   $$P = p \cdot S = 50 \cdot 28{,}27 = 1413{,}7\text{ N}$$

2. **Khảo sát cân bằng của đòn $CD$:**  
   Các lực tác dụng lên đòn làm quay quanh trục $C$:
   - Lực đẩy từ van truyền lên đòn tại điểm $B$: lực $P = 1413{,}7\text{ N}$ hướng lên, cánh tay đòn $BC = 7\text{ cm}$.
   - Trọng lượng của bản thân đòn: $P_đ = 10\text{ N}$ đặt tại trung điểm của đòn cách $C$ một đoạn $\frac{CD}{2} = 25\text{ cm}$.
   - Trọng lượng quả cân đối trọng $Q$ treo tại đầu $D$: cách $C$ một đoạn $CD = 50\text{ cm}$.

3. **Phương trình cân bằng mômen đối với trục quay $C$:**
   $$\sum m_C(\vec{F}) = P \cdot BC - P_đ \cdot \dfrac{CD}{2} - Q \cdot CD = 0$$
   $$1413{,}7 \cdot 7 - 10 \cdot 25 - Q \cdot 50 = 0$$
   $$9895{,}9 - 250 - 50 Q = 0 \implies 50 Q = 9645{,}9$$
   $$Q = \dfrac{9645{,}9}{50} \approx 192{,}9\text{ N}$$
   *(Nếu bỏ qua trọng lượng bản thân của đòn thì $Q = \dfrac{1413{,}7 \cdot 7}{50} \approx 197{,}9\text{ N}$)*.

Vậy trọng lượng đối trọng cần thiết là $Q \approx 193\text{ N}$.
:::

::: tip Thí dụ 2-9: Tải trọng cẩu tối đa chống lật cần trục di động (Bài toán vật lật)
**Đề bài:**  
Một cần trục di động chạy trên ray nhờ hai cụm bánh xe $A$ và $B$ cách nhau một khoảng $AB = 1\text{ m}$ (H. 2-21). Trọng lượng bản thân của toàn bộ cần trục là $P_1 = 20\text{ kN}$ có đường tác dụng đi qua trung điểm $I$ của đoạn $AB$. Khối đối trọng gắn ở đuôi cần có trọng lượng $P_2 = 10\text{ kN}$ đặt cách $I$ một đoạn $1\text{ m}$. Cần trục mang tải trọng cẩu $Q$ ở đầu cần cách tâm $I$ một đoạn $2\text{ m}$.  
Tìm tải trọng nâng lớn nhất $Q_{\max}$ để cần trục không bị lật.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_21.svg" alt="Hình 2-21: Khảo sát điều kiện chống lật của cần trục tháp di động" style="max-height: 260px;" />

<div class="figure-caption">

Hình 2-21: Khảo sát điều kiện chống lật của cần trục tháp di động

</div>

</div>

**Bài giải:**  
Cần trục có nguy cơ lật quanh một trong hai mép ray tựa $A$ hoặc $B$:
- **Khả năng 1: Lật quanh mép $A$ (về phía đối trọng khi không cẩu tải):**  
  Trường hợp nguy hiểm nhất khi không có tải ($Q = 0$):
  - Mômen gây lật quanh $A$ (do đối trọng $P_2$):
    $$M_{\text{lật}}^A = P_2 \cdot (1 - 0{,}5) = 10 \cdot 0{,}5 = 5\text{ kNm}$$
  - Mômen chống lật quanh $A$ (do trọng lượng cần trục $P_1$):
    $$M_{\text{chống}}^A = P_1 \cdot 0{,}5 = 20 \cdot 0{,}5 = 10\text{ kNm}$$
  Vì $M_{\text{chống}}^A = 10\text{ kNm} > M_{\text{lật}}^A = 5\text{ kNm}$, nên cần trục luôn đảm bảo không bao giờ bị lật quanh $A$.

- **Khả năng 2: Lật quanh mép $B$ (về phía tải nâng khi cẩu vật nặng):**  
  Khoảng cách từ mép $B$ đến đường tác dụng của tải trọng $Q$ là: $d_Q = 2 - 0{,}5 = 1{,}5\text{ m}$.  
  - Mômen gây lật quanh $B$:
    $$M_{\text{lật}}^B = Q \cdot d_Q = 1{,}5 Q$$
  - Mômen chống lật quanh $B$ (do cả $P_1$ và đối trọng $P_2$ tạo ra):
    $$M_{\text{chống}}^B = P_1 \cdot 0{,}5 + P_2 \cdot (1 + 0{,}5) = 20 \cdot 0{,}5 + 10 \cdot 1{,}5 = 10 + 15 = 25\text{ kNm}$$

Điều kiện để cần trục cân bằng bền, không bị lật đổ quanh $B$ là:
$$M_{\text{lật}}^B \le M_{\text{chống}}^B \implies 1{,}5 Q \le 25$$
$$\implies Q \le \dfrac{25}{1{,}5} \approx 16{,}67\text{ kN}$$

Vậy tải trọng cẩu cực đại cho phép để đảm bảo an toàn chống lật là:
$$Q_{\max} = 16{,}67\text{ kN}$$
:::
