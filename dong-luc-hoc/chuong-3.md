# Chương 3: Các định lý tổng quát của động lực học

## 3.1. Các đặc trưng hình học khối của cơ hệ và vật rắn

### 3.1.1. Khối tâm của cơ hệ

Khảo sát cơ hệ gồm $N$ chất điểm $M_1, M_2, \dots, M_N$ có khối lượng tương ứng $m_1, m_2, \dots, m_N$. Vị trí của các chất điểm được xác định bằng các vectơ định vị $\vec{r}_1, \dots, \vec{r}_N$.

Khối tâm của cơ hệ là điểm hình học $C$, vị trí của nó được xác định bởi công thức $(3 - 1)$, (H. $3 - 1$).

$$\vec{r}_C = \frac{\displaystyle\sum_{k=1}^N m_k \vec{r}_k}{M} \tag{3-1}$$

Trong đó $M = \displaystyle\sum_{k=1}^N m_k$ được gọi là khối lượng của cơ hệ.

Trong hệ trục tọa độ Đề các $Oxyz$, các tọa độ của điểm $C$ được xác định bởi công thức:

$$x_c = \frac{\sum m_k x_k}{M} \, ; \quad y_c = \frac{\sum m_k y_k}{M} \, ; \quad z_c = \frac{\sum m_k z_k}{M} \tag{3-2}$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_1.svg" alt="Hình 3-1: Xác định khối tâm C của cơ hệ trong hệ tọa độ Oxyz" style="max-height: 250px;" />

<div class="figure-caption">

Hình 3-1

</div>

</div>

Trong đó $x_k, y_k, z_k$ là tọa độ của chất điểm $M_k$.

Từ công thức $(3 - 1)$ hoặc $(3 - 2)$ suy trực tiếp rằng đối với các vật rắn nằm gần quả đất thì khối tâm trùng với trọng tâm của chúng.

Các công thức $(3 - 1)$ hoặc $(3 - 2)$ có thể áp dụng được cho trường hợp cơ hệ gồm nhiều vật rắn, trong đó $m_k$ và $\vec{r}_k$ lần lượt là khối lượng và vectơ định vị khối tâm của các vật rắn.

---

### 3.1.2. Mômen quán tính của vật rắn

#### 1. Định nghĩa

::: tip Định nghĩa
*Mômen quán tính của vật rắn đối với trục $z$, ký hiệu $J_z$, là đại lượng vô hướng, được xác định theo công thức:*

$$J_z = \sum m_k \rho_k^2 \tag{3-3}$$

*trong đó $\rho_k$ là khoảng cách đến trục $z$ của chất điểm $M_k$ có khối lượng $m_k$ (H. $3 - 2$).*
:::

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_2.svg" alt="Hình 3-2: Khoảng cách từ chất điểm M_k của vật rắn đến trục z" style="max-height: 240px;" />

<div class="figure-caption">

Hình 3-2

</div>

</div>

Khi đưa vào hệ trục tọa độ $Oxyz$, dễ dàng chứng minh rằng:

$$J_z = \sum m_k (x_k^2 + y_k^2) \tag{3-4}$$

và tương tự:

$$\begin{aligned} J_x &= \sum m_k (y_k^2 + z_k^2) \\ J_y &= \sum m_k (z_k^2 + x_k^2) \end{aligned} \tag{3-5}$$

Trong đó $x_k, y_k, z_k$ là các tọa độ của chất điểm $M_k$.

Người ta còn định nghĩa các mõmen quán tính tích $J_{xy}, J_{yz}, J_{zx}$ là những đại lượng được xác định theo các công thức sau:

[Đính chính bản in: Từ "mõmen" ở câu trên là lỗi chế bản của từ "mômen".]

$$J_{xy} = \sum m_k x_k y_k \, ; \quad J_{yz} = \sum m_k y_k z_k \, ; \quad J_{zx} = \sum m_k z_k x_k \tag{3-6}$$

và momen quán tính vật rắn đối với điểm $O$:

$$J_o = \sum m_k r_k^2 \tag{3-7}$$

trong đó $\vec{r}_k$ là vectơ định vị chất điểm $M_k$.

Dễ dàng chỉ ra các tính chất sau:

$$J_{xy} = J_{yx} \, ; \quad J_{xz} = J_{zx} \, ; \quad J_{yz} = J_{zy} \tag{3-8}$$

$$J_o = \frac{1}{2} (J_x + J_y + J_z) \tag{3-9}$$

Trong kỹ thuật người ta đưa ra đại lượng bán kính quán tính của vật rắn đối với trục $z$, ký hiệu là $\rho_z$ được xác định theo công thức sau:

$$\rho_z^2 = \frac{J_z}{M} \tag{3-10}$$

Đơn vị của mômen quán tính là $\text{kgm}^2$, đơn vị của bán kính quán tính là $m$.

#### 2. Mômen quán tính của một số vật đồng chất

Thanh đồng chất có chiều dài $l$, khối lượng $M$.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_3.svg" alt="Hình 3-3: Tính mômen quán tính của thanh đồng chất AB" style="max-height: 170px;" />

<div class="figure-caption">

Hình 3-3

</div>

</div>

Chia thanh theo chiều dài thành nhiều phần tử.

Xét một phần tử có độ dài $\Delta x_k$ cách trục $Ay$ đoạn $x_k$. Khối lượng của phần tử $m_k = \gamma \Delta x_k$, trong đó $\gamma$ là khối lượng của đơn vị dài: $\gamma = \dfrac{M}{l}$, trong đó $M$ và $l$ lần lượt là khối lượng và chiều dài của thanh.

Dựa vào định nghĩa của mômen quán tính của vật đối với trục, ta có:

$$J_{Ay} = \sum m_k x_k^2 = \sum \gamma x_k^2 \Delta x_k$$

chuyển tổng nhận được qua giới hạn, ta được:

$$J_{Ay} = \int_0^l \gamma x^2 dx = \frac{\gamma l^3}{3} = \frac{M l^2}{3} \tag{3-11}$$

Vòng tròn đồng chất có khối lượng $M$ bán kính $R$ (H. $3 - 4$)

Dựa vào định nghĩa:

$$J_{Cz} = \sum m_k \rho_k^2 = \sum m_k R^2 = R^2 \sum m_k = M R^2 \tag{3-12}$$

Công thức $(3 - 12)$ cũng áp dụng được cho trường hợp vỏ hình trụ mỏng; chú ý rằng $J_o = J_z = \dfrac{1}{2}(J_x + J_y + J_z)$ và $J_x = J_y$ ta tính được

$$J_x = J_y = \frac{1}{2} J_z = \frac{M R^2}{2} \tag{3-13}$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_4.svg" alt="Hình 3-4: Vòng tròn đồng chất khối lượng M, bán kính R" style="max-height: 240px;" />

<div class="figure-caption">

Hình 3-4

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_5.svg" alt="Hình 3-5: Tấm tròn đồng chất khối lượng M, bán kính R" style="max-height: 270px;" />

<div class="figure-caption">

Hình 3-5

</div>

</div>

Tấm tròn đồng chất, có khối lượng $M$ và bán kính $R$ (H. $3 - 5$)

Chia tấm thành nhiều vành tròn nhỏ, mỗi vành có bán kính $\rho_k$, độ rộng $\Delta\rho_k$. Khối lượng của vành tròn sẽ bằng:

$$m_k = \gamma 2\pi \rho_k \Delta\rho_k$$

Trong đó $\gamma$ là khối lượng của đơn vị diện tích của tấm:

$$\gamma = \frac{M}{\pi R^2}$$

Do đó mômen quán tính $\Delta J_{Cz}$ của vành đối với trục $C_z$ là:

$$\Delta J_{Cz} = m_k \rho_k^2 = 2\pi \gamma \rho_k^3 \Delta\rho_k$$

Mômen quán tính của tấm đối với trục $C_z$ bằng:

$$J_z = \sum \Delta J_{Cz} = \sum 2\pi \gamma \rho_k^3 \Delta\rho_k$$

Chuyển qua giới hạn ta nhận được

$$J_z = \int_0^R 2\pi \gamma \rho^3 d\rho = \frac{1}{2} \gamma \pi R^4 = \frac{1}{2} M R^2 \tag{3-14}$$

Tương tự như trong trường hợp vòng tròn đồng chất:

Ta có:

$$J_{Cx} = J_{Cy} = \frac{1}{2} J_{Cz} = \frac{M R^2}{4} \tag{3-15}$$

Công thức $(3 - 14)$ cũng dùng được để tính cho trường hợp khối trụ đặc.

Công thức tính mômen quán tính của các vật khác có thể tra cứu trong các sổ tay kỹ thuật.

#### 3. Các định lý liên hệ mômen quán tính của vật rắn đối với các trục

::: tip Định lý 1: Định lý mômen quán tính đối với các trục song song
*Mômen quán tính của vật rắn đối với một trục $\Delta$ bằng tổng của mômen quán tính của nó đối với trục song song với trục $\Delta$ qua khối tâm $C$ của vật và tích của khối lượng vật với bình phương khoảng cách giữa hai trục.*

$$J_\Delta = J_{\Delta C} + M d^2$$
:::

*Chứng minh :* Theo định nghĩa ta có (H. $3 - 6$)

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_6.svg" alt="Hình 3-6: Định lý mômen quán tính đối với các trục song song" style="max-height: 270px;" />

<div class="figure-caption">

Hình 3-6

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_7.svg" alt="Hình 3-7: Mômen quán tính đối với trục bất kỳ đi qua gốc tọa độ" style="max-height: 270px;" />

<div class="figure-caption">

Hình 3-7

</div>

</div>

$$J_\Delta = \sum m_k {\rho'}_k^2 \, ; \qquad J_{\Delta C} = \sum m_k \rho_k^2$$

Từ hình vẽ, ta có:

$${\rho'}_k^2 = \rho_k^2 + d^2 - 2 d \rho_k \cos\alpha = \rho_k^2 + d^2 - 2 d y_k$$

Chú ý rằng:

$$\sum m_k y_k = M y_c = 0 \tag{3-16}$$

Chúng ta nhận được:

$$J_\Delta = \sum m_k (\rho_k^2 + d^2 - 2 d y_k) = \sum m \rho_k^2 + d^2 M = J_{\Delta c} + M d^2$$

[Đính chính bản in: Ở biểu thức giữa trên, bản in viết thiếu chỉ số dưới $k$ tại $\sum m \rho_k^2$, hiểu là $\sum m_k \rho_k^2$.]

Đó là điều cần chứng minh.

*Nhận xét.* *Đối với các trục cùng phương, mômen quán tính của vật rắn đối với trục qua khối tâm có giá trị nhỏ nhất.*

::: tip Định lý 2: Định lý về mômen quán tính của vật rắn đối với trục đi qua gốc trục tọa độ (H. 3 – 7)
*Mômen quán tính của vật rắn đối với trục $\Delta$ bất kỳ qua gốc tọa độ có biểu thức:*

$$\begin{aligned} J_\Delta &= J_x \cos^2\alpha + J_y \cos^2\beta + J_z \cos^2\gamma - 2 J_{yz} \cos\beta\cos\gamma \\ &\quad - 2 J_{zx} \cos\gamma\cos\alpha - 2 J_{xy} \cos\alpha\cos\beta \end{aligned} \tag{3-17}$$
:::

Trong đó $\alpha, \beta, \gamma$ là ba góc chỉ phương của trục $\Delta$.

*Chứng minh :* Theo định nghĩa ta có:

$$J_\Delta = \sum m_k h_k^2 = \sum m_k \left(\overline{OM}_k^2 - \overline{OH}_k^2\right)$$

Chú ý đến các đẳng thức sau:

$$\overline{OM}_k^2 = (\overrightarrow{OM}_k)^2 = (\vec{r}_k)^2 = x_k^2 + y_k^2 + z_k^2$$

$$x_k^2 + y_k^2 + z_k^2 \equiv (x_k^2 + y_k^2 + z_k^2)(\cos^2\alpha + \cos^2\beta + \cos^2\gamma)$$

$$\overline{OH}_k^2 = (\vec{r}_k \cdot \vec{\rho})^2 = (x_k \cos\alpha + y_k \cos\beta + z_k \cos\gamma)^2$$

($\vec{\rho}$ là vectơ đơn vị chỉ phương của trục $\Delta$)

Vậy:

$$\begin{aligned} J_\Delta &= \sum m_k \big[(x_k^2 + y_k^2 + z_k^2)(\cos^2\alpha + \cos^2\beta + \cos^2\gamma) \\ &\quad - (x_k \cos\alpha + y_k \cos\beta + z_k \cos\gamma)^2\big] \end{aligned}$$

Sau khi khai triển và sắp xếp các số hạng lại chúng ta nhận được biểu thức $(3 - 17)$. Đó là điều cần chứng minh.

#### 4. Các định lý về trục quán tính chính và trục quán tính chính trung tâm

::: tip Định nghĩa
*Trục $Oz$ được gọi là trục quán tính chính tại $O$ nếu thỏa mãn các điều kiện:*

$$J_{zx} = J_{zy} = 0 \tag{3-18}$$

*Trục $Oz$ được gọi là trục quán tính chính trung tâm nếu nó là quán tính chính và đi qua khối tâm.*
:::

*Chú ý.* *Nếu hai trục là quán tính chính tại $O$ thì trục thứ ba vuông góc với chúng cũng là quán tính chính.*

Người ta đã chứng minh rằng tại mỗi điểm của vật rắn tồn tại ba trục quán tính chính vuông góc nhau.

::: tip Định lý 1
*Trục quán tính của vật rắn tại điểm $O$, không đi qua khối tâm của vật chỉ là trục quán tính của vật tại điểm $O$.*
:::

[Đính chính bản in: Ở phát biểu Định lý 1 trên, bản in thiếu chữ "chính" sau hai cụm "trục quán tính", tức là: "Trục quán tính chính của vật rắn tại điểm $O$, không đi qua khối tâm của vật, chỉ là trục quán tính chính của vật tại điểm $O$."]

*Chứng minh:* Từ hình vẽ ta có (H. $3 - 8\text{a}$)

$$x'_k = x_k \, ; \quad y'_k = y_k \, ; \quad z'_k = z_k - d \, ; \quad d = \overline{OO'}$$

Vậy :

$$\begin{aligned} J_{z'x'} &= \sum m_k z'_k x'_k = \sum m_k (z_k - d) x_k = \\ &= \sum m_k z_k x_k - d \sum m_k x_k = J_{zx} - M x_C d \end{aligned}$$

Do đó nếu trục $Oz$ không đi qua khối tâm $C$, tức $x_C \neq 0$ thì dù $Oz$ là quán tính chính tại $O$ (tức $J_{yz} = 0$), ta nhận được:

[Đính chính bản in: Trong ngoặc ở câu trên, bản in ghi nhầm $J_{yz} = 0$ thay cho $J_{zx} = 0$ (cùng với $J_{zy} = 0$).]

$$J_{z'x'} = - M x_C d \neq 0$$

tức trục $z$ không phải trục quán tính chính tại $O'$. Đó là điều cần chứng minh.

Từ đó ta dễ dàng suy ra (H. $3 - 8\text{b}$).

::: tip Định lý 2
*Trục quán tính chính trung tâm của vật là trục quán tính chính đối với mọi điểm thuộc trục ấy.*
:::

::: tip Định lý 3
*Nếu vật rắn đồng chất có một trục đối xứng thì trục đó là trục quán tính chính trung tâm.*
:::

*Chứng minh.* Giả sử vật có trục đối xứng $z$. Trọng tâm $C$ của vật nằm trên trục $z$. Nếu vật có phần tử $M_k$ với khối lượng $m_k$ và các tọa độ $(x_k, y_k, z_k)$ thì ắt phải có phần tử $M'_k$ có khối lượng $m_k$ với các tọa độ $(-x_k, -y_k, z_k)$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_8.svg" alt="Hình 3-8: Trục quán tính chính tại O và trục quán tính chính trung tâm" style="max-height: 270px;" />

<div class="figure-caption">

Hình 3-8

</div>

</div>

Phân hoạch vật rắn theo từng cặp phần tử như vậy để tính các mômen quán tính tích, ta có:

$$\begin{aligned} J_{zx} &= \sum m_k z_k x_k + \sum m'_k z'_k x'_k = \sum m_k z_k x_k - \sum m_k z_k x_k = 0 \\ J_{zy} &= \sum m_k z_k y_k + \sum m'_k z'_k y'_k = \sum m_k z_k y_k - \sum m_k z_k y_k = 0 \end{aligned}$$

Đó là điều cần chứng minh.

::: tip Định lý 4
*Nếu vật đồng chất có mặt phẳng đối xứng thì trục thẳng góc với mặt phẳng đối xứng là trục quán tính chính tại điểm giao của mặt phẳng đối xứng và trục.*
:::

*Chứng minh.* Chọn trục $Ox$ và $Oy$ thuộc mặt phẳng. Ta phân hoạch vật rắn theo từng cặp phần tử $M_k$ và $M'_k$ nằm đối xứng với mặt phẳng đối xứng. Giả sử phần tử $M_k$ có khối lượng $m_k$ và các tọa độ $x_k, y_k, z_k$, còn phần tử $M'_k$ có khối lượng $m'_k$ và các tọa độ $x'_k, y'_k, z'_k$. Ta có:

$$m_k = m'_k \, ; \quad x_k = x'_k \, ; \quad y_k = y'_k \, ; \quad z_k = -z'_k$$

$$\begin{aligned} J_{zx} &= \sum m_k z_k x_k + \sum m'_k z'_k x'_k = \sum m_k z_k x_k - \sum m_k z_k x_k = 0 \\ J_{zy} &= \sum m_k z_k y_k + \sum m'_k z'_k y'_k = \sum m_k z_k y_k - \sum m_k z_k y_k = 0 \end{aligned}$$

Đó là điều cần chứng minh.

Chú ý rằng trọng tâm của vật rắn nằm trong mặt phẳng đối xứng nên trục quán tính trung tâm là trục thẳng góc với mặt phẳng đối xứng tại khối tâm.

Từ các định lý trên ta đi đến kết luận: Để tính mômen quán tính của vật đối với một trục bất kỳ chỉ cần biết mômen quán tính của vật đối với ba trục quán tính chính vuông góc nhau tại khối tâm (tức hệ trục quán tính chính trung tâm). Trong các sổ tay kỹ thuật người ta cho các giá trị của mômen quán tính của các vật rắn đối với hệ trục quán tính chính trung tâm.

---

## 3.2. Định lý động lượng

### 3.2.1. Động lượng

Động lượng của chất điểm là đại lượng vectơ, ký hiệu là $\vec{Q}$, bằng tích của khối lượng chất điểm với vectơ vận tốc của nó.

$$\vec{Q} = m\vec{v} \tag{3-19}$$

Động lượng của cơ hệ bằng tổng động lượng của các chất điểm thuộc cơ hệ:

$$\vec{Q} = \sum m_k \vec{v}_k \tag{3-20}$$

Khi đạo hàm theo thời gian hai vế của đẳng thức vectơ $(3 - 1)$ ta có:

$$\vec{v}_C = \frac{\sum m_k \vec{v}_k}{M}$$

Do đó

$$\vec{Q} = \sum m_k \vec{v}_k = M\vec{v}_C \tag{3-21}$$

Tức động lượng của cơ hệ bằng động lượng của khối tâm với giả thiết khối tâm có khối lượng bằng khối lượng cơ hệ.

Công thức $(3 - 21)$ rất thuận tiện cho việc tính động lượng của vật rắn. Trong trường hợp hệ vật rắn, động lượng cơ hệ bằng tổng động lượng các vật rắn.

Đơn vị của động lượng là $\text{kgm/s}$

---

### 3.2.2. Xung lượng của lực (Xung lực)

Xung lượng nguyên tố của lực $\vec{F}$, ký hiệu là $d\vec{S}$, có biểu thức:

$$d\vec{S} = \vec{F}dt \tag{3-22}$$

Xung lượng của lực $\vec{F}$ trong khoảng thời gian từ $t_o$ đến $t_1$ có biểu thức:

$$\vec{S} = \int_{t_o}^{t_1} \vec{F}dt \tag{3-23}$$

Trong trường hợp lực không đổi (về độ lớn và hướng), tức $\vec{F} = \overrightarrow{\text{const}}$, thì:

$$\vec{S} = \vec{F}(t_1 - t_o) \tag{3-24}$$

Đơn vị của xung lượng của lực (được gọi tắt là xung lực) là $\text{Ns}$

---

### 3.2.3. Định lý động lượng

::: tip Định lý 1
*Đạo hàm theo thời gian động lượng của chất điểm bằng lực tác dụng lên chất điểm đó*

$$\frac{d(m\vec{v})}{dt} = \vec{F} \tag{3-25}$$
:::

*Chứng minh.* Khảo sát chất điểm $M$ có khối lượng $m$ chuyển động dưới tác dụng của lực $\vec{F}$ (trong trường hợp chất điểm chịu tác dụng của nhiều lực thì $\vec{F}$ là hợp lực của các lực đó, tức $\vec{F} = \sum \vec{F}_k$).

Khi viết phương trình cơ bản của động lực học cho chất điểm với chú ý là $m = \text{const}$, ta có:

$$\vec{F} = m\vec{a} = m\frac{d\vec{v}}{dt} = \frac{d}{dt}(m\vec{v})$$

Đó là điều cần chứng minh.

::: tip Định lý 2
*Đạo hàm theo thời gian động lượng cơ hệ bằng vectơ chính của hệ ngoại lực tác dụng lên cơ hệ*

$$\frac{d\vec{Q}}{dt} = \sum \vec{F}_k^e \tag{3-26}$$
:::

*Chứng minh.* Đối với chất điểm $M_k$ thuộc cơ hệ, chịu tác dụng ngoại lực $\vec{F}_k^e$ và nội lực $\vec{F}_k^i$, theo định lý $1$ ta có:

$$\frac{d}{dt}(m_k \vec{v}_k) = \vec{F}_k^e + \vec{F}_k^i$$

Lấy tổng hai vế với chú ý rằng vectơ chính của hệ nội lực bằng không, ta được:

$$\sum \frac{d}{dt} m_k \vec{v}_k = \frac{d}{dt} \sum m_k \vec{v}_k = \frac{d\vec{Q}}{dt} = \sum \vec{F}_k^e$$

Đó là điều cần chứng minh

::: tip Định lý 3
*Biến thiên động lượng của chất điểm trong một khoảng thời gian nào đó bằng xung lượng của lực tác dụng lên chất điểm trong khoảng thời gian đó*

$$m\vec{v}_1 - m\vec{v}_o = \int_{t_o}^{t_1} \vec{F} dt \tag{3-27}$$
:::

*Chứng minh.* Từ $(3 - 25)$ ta có:

$$d(m\vec{v}) = \vec{F}dt$$

Khi tích phân hai vế của đẳng thức này với các cận tương ứng, ta được:

$$\int_{\vec{v}_o}^{\vec{v}_1} d(m\vec{v}) = \int_{t_o}^{t_1} \vec{F}dt$$

Vậy:

$$m\vec{v}_1 - m\vec{v}_o = \int_{t_o}^{t_1} \vec{F}dt$$

Đó là điều cần chứng minh.

::: tip Định lý 4
*Biến thiên động lượng của cơ hệ trong một khoảng thời gian nào đó bằng tổng xung lượng các ngoại lực tác dụng lên cơ hệ trong khoảng thời gian đó:*

$$\vec{Q}_1 - \vec{Q}_o = \sum \int_{t_o}^{t_1} \vec{F}_k^e dt = \sum \vec{S}_k^e \tag{3-28}$$
:::

*Chứng minh.* Từ $(3 - 26)$ ta có:

$$d\vec{Q} = \sum \vec{F}_k^e dt$$

Tích phân hai vế của đẳng thức trên với các cận tương ứng ta nhận được

$$\int_{\vec{Q}_o}^{\vec{Q}_1} d\vec{Q} = \int_{t_o}^{t_1} \sum \vec{F}_k^e dt = \sum \int_{t_o}^{t_1} \vec{F}_k^e dt$$

hay

$$\vec{Q}_1 - \vec{Q}_o = \sum \int_{t_o}^{t_1} \vec{F}_k^e dt = \sum \vec{S}_k^e$$

Đó là điều cần chứng minh.

Trong hệ trục tọa độ Đề các, các định lý vừa phát biểu trên được biểu diễn trong dạng (chúng ta chỉ trình bày đối với trường hợp cơ hệ, còn đối với trường hợp của chất điểm hoặc được suy ra bằng cách tương tự hoặc xem như là trường hợp riêng của cơ hệ):

$$\left. \begin{aligned} \frac{d}{dt} Q_x &= \sum F_{kx}^e \\ \frac{d}{dt} Q_y &= \sum F_{ky}^e \\ \frac{d}{dt} Q_z &= \sum F_{kz}^e \end{aligned} \right\} \tag{3-29}$$

$$\left. \begin{aligned} Q_{1x} - Q_{ox} &= \sum S_{kx}^e \\ Q_{1y} - Q_{oy} &= \sum S_{ky}^e \\ Q_{1z} - Q_{oz} &= \sum S_{kz}^e \end{aligned} \right\} \tag{3-30}$$

*Chú ý :* Nội lực không có mặt trong các định lý động lượng của cơ hệ. Từ đó suy ra rằng nội lực không làm biến đổi động lượng cơ hệ.

Định lý động lượng cho phép tìm được các tích phân đầu của chất điểm và của cơ hệ trong một số điều kiện của lực tác dụng. Nó cũng được sử dụng có hiệu quả cho bài toán va chạm và bài toán chuyển động của môi trường liên tục.

---

### 3.2.4. Định lý bảo toàn động lượng

Dưới đây chúng ta chỉ xét cho trường hợp cơ hệ. Đối với chất điểm được xem như là trường hợp đặc biệt của cơ hệ.

::: tip Định lý 5
*Nếu vectơ chính của các ngoại lực tác dụng lên cơ hệ luôn luôn bằng không thì động lượng của cơ hệ được bảo toàn, tức:*

$$\sum \vec{F}_k^e = \vec{0} \text{ thì } \vec{Q} = \overrightarrow{\text{const}} \tag{3-31}$$
:::

*Chứng minh.* Nếu $\sum \vec{F}_k^e = \vec{0}$ thì từ $(3 - 26)$ ta có

$$\frac{d\vec{Q}}{dt} = \vec{0}$$

tức : $\vec{Q} = \overrightarrow{\text{const}}$

Đó là điều cần chứng minh.

::: tip Định lý 6
*Nếu tổng hình chiếu các ngoại lực tác dụng lên cơ hệ trên một trục cố định nào đó luôn luôn bằng không thì hình chiếu của động lượng cơ hệ trên trục đó được bảo toàn, tức :*

$$\sum F_{kx}^e = 0, \text{ thì } Q_x = \text{const} \tag{3-32}$$
:::

*Chứng minh:* Nếu $\sum F_{kx}^e = 0$, từ $(3 - 29)$ ta có

$$\frac{dQ_x}{dt} = 0$$

Vậy :

$$Q_x = \text{const}$$

Đó là điều cần chứng minh.

Định luật bảo toàn động lượng là cơ sở lý thuyết của cơ học vật có khối lượng biến đổi, đặt nền tảng cho ngành cơ học du hành vũ trụ.

#### Thí dụ 3-1

**Thí dụ 3 – 1.** Một dòng chất lỏng lý tưởng đồng nhất, không nén được, chảy qua ống dẫn có khuỷu đổi hướng có góc $\alpha$. Lưu lượng khối của dòng chảy là $M\text{ kg/s}$. Vận tốc của chất lỏng ở tiết diện vào và ra là $\vec{v}_1$ và $\vec{v}_2$. Tính áp lực của ống lên gối đỡ, không tính đến tác dụng của trọng lực và các áp suất thủy tĩnh (H. $3 - 9$).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_9.svg" alt="Hình 3-9: Dòng chất lỏng chảy qua ống dẫn khuỷu góc alpha" style="max-height: 260px;" />

<div class="figure-caption">

Hình 3-9

</div>

</div>

**Bài giải**

Khảo sát cơ hệ là khối lỏng $abcd$. Ngoại lực tác dụng lên cơ hệ là áp lực $\vec{R}$ của gối đỡ lên ống dòng.

Chú ý rằng lực tác dụng lên ổ đỡ ngược chiều và có cùng giá trị với lực $\vec{R}$.

Áp dụng định lý biến thiên động lượng ta có:

$$\frac{d\vec{Q}}{dt} = \vec{R}$$

Đầu tiên ta tính lượng biến thiên động lượng $\Delta\vec{Q}$ trong khoảng thời gian $\Delta t$, trong khoảng thời gian đó khối lỏng $abcd$ chuyển đến vị trí $a'b'c'd'$.

$$\Delta\vec{Q} = \vec{Q}_2 - \vec{Q}_1$$

trong đó $\vec{Q}_1$ là động lượng khối lỏng tại thời điểm $t$, tức động lượng của khối lỏng $abcd$ nó bằng tổng động lượng của hai khối lỏng $aba'b'$ và $a'b'cd$, còn $\vec{Q}_2$ là động lượng của khối lỏng $a'b'c'd'$ tại thời điểm $t + \Delta t$, nó là tổng động lượng của hai khối lỏng $a'b'cd$ và $cdc'd'$.

Do giả thiết chất lỏng lý tưởng, đồng nhất và không nén được, ta có

$$\Delta\vec{Q} = \vec{Q}'_2 - \vec{Q}'_1$$

trong đó $\vec{Q}'_1$ là động lượng của khối lỏng $aba'b'$ và $\vec{Q}'_2$ là động lượng của khối lỏng $cdc'd'$:

$$\begin{aligned} \vec{Q}'_1 &= M\vec{v}_{C1} \Delta t \, ; \\ \vec{Q}'_2 &= M\vec{v}_{C2} \Delta t \end{aligned}$$

trong đó $\vec{v}_{C1}, \vec{v}_{C2}$ là vận tốc khối tâm của các khối lỏng $aba'b'$ và $cdc'd'$.

Vậy $\Delta\vec{Q} = \vec{Q}'_2 - \vec{Q}'_1 = M(\vec{v}_{C2} - \vec{v}_{C1})\Delta t$

và $\dfrac{d\vec{Q}}{dt} = \lim_{\Delta t \to o} \dfrac{\Delta\vec{Q}}{\Delta t} = M \lim_{t \to o} (\vec{v}_{C2} - \vec{v}_{C1}) = M(\vec{v}_2 - \vec{v}_1)$

[Đính chính bản in: Ở giới hạn thứ hai, bản in ghi nhầm $t \to o$ thay vì $\Delta t \to o$.]

Từ đó ta nhận được :

$$\vec{R} = \frac{d\vec{Q}}{dt} = M(\vec{v}_2 - \vec{v}_1)$$

Các thành phần của phản lực trên các trục tọa độ $Ox$ và $Oy$ sẽ bằng

$$R_x = M v_2 \cos\alpha \, ; \qquad R_y = (M v_2 \sin\alpha - v_1)$$

[Đính chính bản in: Ở công thức $R_y$, bản in thiếu thừa số $M$ trước $v_1$ (đúng ra phải đặt nhân tử chung $M$); đồng thời tùy theo chiều dương của hệ trục tọa độ $Ox, Oy$ (trên hình $\vec{v}_1$ hướng thẳng đứng xuống dưới còn $\vec{v}_2$ hướng xuống dưới chếch sang phải góc $\alpha$ so với phương ngang), thành phần chiếu tương ứng là $M(v_2\cos\alpha)$ và $M(v_1 - v_2\sin\alpha)$ nếu $Oy$ hướng lên.]

---

## 3.3. Định lý chuyển động khối tâm

::: tip Định lý
*Khối tâm của cơ hệ chuyển động như một chất điểm có khối lượng bằng khối lượng cơ hệ và chịu tác dụng của lực có vectơ lực bằng vectơ chính của hệ ngoại lực tác dụng lên cơ hệ.*

$$M\vec{a}_c = \sum \vec{F}_k^e \tag{3-33}$$
:::

*Chứng minh.* Áp dụng định lý động lượng dạng đạo hàm $(3 - 26)$ với biểu thức tính động lượng $(3 - 21)$, ta nhận được:

$$\frac{d\vec{Q}}{dt} = \frac{d}{dt}(M\vec{v}_C) = M\vec{a}_c = \sum \vec{F}_k^e$$

Đó là điều cần chứng minh.

Vì phương trình vi phân chuyển động khối tâm $(3 - 33)$ có dạng phương trình cơ bản của động lực học chất điểm, nên có thể viết phương trình $(3 - 33)$ trong các dạng tọa độ khác nhau. Ví dụ phương trình vi phân chuyển động khối tâm có thể viết trong dạng tọa độ Đề các:

$$\left. \begin{aligned} M\ddot{x}_C &= \sum F_{kx}^e \\ M\ddot{y}_C &= \sum F_{ky}^e \\ M\ddot{z}_C &= \sum F_{kz}^e \end{aligned} \right\} \tag{3-34}$$

và v.v...

Từ định lý trên suy ra nội lực không ảnh hưởng đến chuyển động của khối tâm, dù rằng nội lực có ảnh hưởng đến chuyển động của từng bộ phận cơ hệ.

### Định luật bảo toàn chuyển động khối tâm

Từ công thức $(3 - 33)$ ta thấy rằng:

Nếu $\sum \vec{F}_k^e = \vec{0}$ thì $\vec{a}_c = \vec{0}$,

$$\text{tức } \vec{v}_C = \overrightarrow{\text{const}} \text{ hoặc } \vec{v}_C = \vec{0} \tag{3-35}$$

Vậy:

*Nếu vectơ chính của các ngoại lực tác dụng lên cơ hệ luôn luôn bằng không thì khối tâm của cơ hệ hoặc đứng yên hoặc chuyển động thẳng đều.*

Đó là định luật bảo toàn chuyển động khối tâm.

Tương tự, nếu

$$\sum F_{kx}^e = 0 \text{ thì } \ddot{x}_C = 0, \text{ tức } \dot{x}_C = \text{const} \text{ hoặc } \dot{x}_C = 0 \tag{3-36}$$

Vậy :

*Nếu tổng hình chiếu của các ngoại lực lên một trục cố định nào đó luôn luôn bằng không thì hình chiếu của khối tâm của cơ hệ lên trục do hoặc đứng yên hoặc chuyển động thẳng đều.*

[Đính chính bản in: Từ "trục do" ở câu trên là lỗi in của "trục đó".]

Đó là định luật bảo toàn chuyển động của hình chiếu khối tâm.

#### Thí dụ 3-2

**Thí dụ 3 – 2.** Trục quay của động cơ được mô hình bằng khối lượng $m_2$ cách tâm trục quay khoảng $e$.

Giả sử trục động cơ quay đều với vận tốc góc $\omega$. Vỏ mô tơ có khối lượng $m_2$. Hãy xác định:

[Đính chính bản in: Cụm "Vỏ mô tơ có khối lượng $m_2$" là lỗi in nhầm ký hiệu khối lượng; theo các công thức giải bên dưới và Hình 3-10, vỏ mô tơ có khối lượng $m_1$.]

1) Phương trình chuyển động ngang của vỏ mô tơ trên nền nhẵn.
2) Áp lực thẳng đứng của động cơ tác dụng lên nền ngang.

**Bài giải**

Khảo sát chuyển động cơ hệ gồm vỏ mô tơ, rô to và khối lượng lệch tâm.

Các ngoại lực tác dụng lên cơ hệ gồm các trọng lực của trục mất cân bằng $\vec{P}_2$, của vỏ động cơ $\vec{P}_1$ và phản lực của nền lên động cơ $\vec{N}$ (H. $3 - 10$).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_10.svg" alt="Hình 3-10: Động cơ với khối lượng lệch tâm m_2 trên nền nhẵn" style="max-height: 250px;" />

<div class="figure-caption">

Hình 3-10

</div>

</div>

Các ngoại lực đều song song với phương thẳng đứng, nên theo định lý bảo toàn chuyển động của hình chiếu khối tâm trên trục nằm ngang, ta có:

$$x_C = \text{const} = 0$$

(Vì ban đầu hệ nằm yên)

Theo công thức tính tọa độ khối tâm, ta có:

$$x_C = \frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} = \frac{m_1 x_1 + m_2 (x_1 + e\cos\omega t)}{m_1 + m_2} = 0$$

Từ đó:

$$x_1 = -\frac{m_2 e}{m_1 + m_2} \cos\omega t$$

Như vậy vỏ của động cơ dao động điều hòa với biên độ $a$ và chu kì $T$:

$$a = \frac{m_2 e}{m_1 + m_2} \, , \qquad T = \frac{2\pi}{\omega}$$

Để tìm phản lực $\vec{N}$ ta viết phương trình vi phân chuyển động của khối tâm theo trục thẳng đứng hướng lên $Oy$, ta có:

$$(m_1 + m_2)\ddot{y}_C = N - P_1 - P_2$$

Vậy:

$$N = (m_1 + m_2)(\ddot{y}_C + g)$$

Trong đó $g$ là gia tốc trọng trường.

Theo công thức tính tọa độ khối tâm, ta có:

$$y_C = \frac{m_1 y_1 + m_2 y_2}{m_1 + m_2} = \frac{m_1 \cdot 0 + m_2 e \cos\omega t}{m_1 + m_2} = \frac{m_2 e}{m_1 + m_2} \cos\omega t$$

Vậy:

$$\ddot{y}_C = -\frac{m_2 e \omega^2}{m_1 + m_2} \cos\omega t$$

[Đính chính bản in: Ở trên, nếu góc $\omega t$ đo từ trục ngang $Ox$ (theo Hình 3-10) thì $y_2 = e\sin\omega t$, từ đó $y_C = \frac{m_2 e}{m_1 + m_2}\sin\omega t$ và $\ddot{y}_C = -\frac{m_2 e \omega^2}{m_1 + m_2}\sin\omega t$ (bản in viết nhầm $\cos\omega t$).]

Thay kết quả nhận được vào biểu thức của phản lực $N$ đã tìm ở trên, ta nhận được :

$$N = (m_1 + m_2)(\ddot{y}_C + g) = (m_1 + m_2)\left(g - \frac{m_2 e \omega^2}{m_1 + m_2}\cos\omega t\right)$$

Như vậy phản lực $N$ biến đổi theo thời gian, nó đạt trị số lớn nhất và bé nhất, đó là :

$$N_{\max} = (m_1 + m_2)\left(g + \frac{m_2 e \omega^2}{m_1 + m_2}\right)$$

$$N_{\min} = (m_1 + m_2)\left(g - \frac{m_2 e \omega^2}{m_1 + m_2}\right)$$

Để động cơ không rời khỏi nền cần phải thỏa mãn điều kiện: $N_{\min} > 0$, tức là:

$$g - \frac{m_2 e}{m_1 + m_2} \omega^2 > 0$$

Vậy:

$$\omega^2 < \sqrt{\frac{(m_1 + m_2)g}{m_2 e}}$$

[Đính chính bản in: Bất đẳng thức cuối trên in nhầm $\omega^2 < \sqrt{\dfrac{(m_1 + m_2)g}{m_2 e}}$; biến đổi đúng từ $g - \dfrac{m_2 e}{m_1 + m_2}\omega^2 > 0$ là $\omega < \sqrt{\dfrac{(m_1 + m_2)g}{m_2 e}}$ (hoặc $\omega^2 < \dfrac{(m_1 + m_2)g}{m_2 e}$).]

Nếu điều kiện này không được thỏa mãn thì động cơ sẽ rời khỏi nền và gây ra hiện tượng va đập giữa động cơ và nền.

---

## 3.4. Định lý mômen động lượng

### 3.4.1. Mômen động lượng

Mômen động lượng của chất điểm đối với tâm $O$ là đại lượng vectơ, được ký hiệu bởi $\vec{L}_o$, là mômen của vectơ động lượng chất điểm đối với tâm $O$:

$$\vec{L}_o = \vec{m}_o(m\vec{v}) = \vec{r} \wedge m\vec{v} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ x & y & z \\ m\dot{x} & m\dot{y} & m\dot{z} \end{vmatrix} \tag{3-37}$$

Mômen động lượng của chất điểm đối với trục $z$ là mômen của vectơ động lượng chất điểm đối với trục $z$:

$$\overline{L}_z = \overline{m}_z(m\vec{v}) \tag{3-38}$$

Nếu gọi $\overline{L}_{oz}$ là hình chiếu của $\vec{L}_o$ lên trục $Oz$ thì từ định lý liên hệ giữa mômen lực đối với điểm và mômen lực đối với một trục trong phần tĩnh học, ta rút ra:

$$\overline{L}_z = \overline{L}_{oz} = m(x\dot{y} - y\dot{x}) \tag{3-39}$$

Mômen động lượng của cơ hệ đối với một tâm bằng tổng mômen động lượng các chất điểm của cơ hệ đối với cùng tâm đó.

$$\vec{L}_o = \sum \vec{m}_o(m_k \vec{v}_k) = \sum \vec{r}_k \wedge m_k \vec{v}_k \tag{3-40}$$

Mômen động lượng của cơ hệ đối với một trục bằng tổng mômen động lượng các chất điểm của cơ hệ đối với cùng trục đó.

$$\overline{L}_z = \sum \overline{m}_z(m_k \vec{v}_k) \tag{3-41}$$

Đơn vị của mômen động lượng là $\text{kgm}^2\text{/s}$

---

### 3.4.2. Định lý mômen động lượng

::: tip Định lý
*Đạo hàm theo thời gian của mômen động lượng của chất điểm đối với một tâm (đối với một trục) cố định bằng tổng mômen của lực tác dụng lên chất điểm đối với cùng tâm (đối với cùng trục) ấy.*

$$\frac{d\vec{L}_o}{dt} = \vec{m}_o(\vec{F}) \tag{3-42}$$

$$\frac{d\overline{L}_z}{dt} = \overline{m}_z(\vec{F}) \tag{3-43}$$
:::

*Chứng minh :* Xét chất điểm $M$, có khối lượng $m$, chịu tác dụng của lực $\vec{F}$ (nếu chịu tác dụng của nhiều lực thì $\vec{F}$ là hợp lực của các lực đó). Ta viết phương trình cơ bản của động lực học chất điểm trong dạng:

$$\frac{d}{dt}(m\vec{v}) = \vec{F}$$

Nhân hữu hướng hai vế của đẳng thức này với vectơ định vị $\vec{r}$ của chất điểm, ta có :

$$\vec{r} \wedge \frac{d(m\vec{v})}{dt} = \vec{r} \wedge \vec{F}$$

Vế trái của đẳng thức với chú ý :

$$\frac{d\vec{r}}{dt} \wedge m\vec{v} = \vec{v} \wedge m\vec{v} = \vec{0},$$

có thể viết như sau :

$$\vec{r} \wedge \frac{d}{dt}(m\vec{v}) = \frac{d}{dt}(\vec{r} \wedge m\vec{v})$$

Do đó:

$$\frac{d}{dt}(\vec{r} \wedge m\vec{v}) = \vec{r} \wedge \vec{F}$$

tức

$$\frac{d\vec{L}_o}{dt} = \vec{m}_o(\vec{F})$$

Đó là điều cần chứng minh.

Chiếu hai vế của đẳng thức $(3 - 42)$ lên trục $z$ đi qua $O$ ta sẽ có biểu thức $(3 - 43)$.

::: tip Định lý
*Đạo hàm theo thời gian của mômen động lượng của cơ hệ đối với một tâm (một trục) cố định bằng tổng mômen của các ngoại lực đối với cùng tâm (cùng trục) đó:*

$$\frac{d\vec{L}_o}{dt} = \sum \vec{m}_o(\vec{F}_k^e) \tag{3-44}$$

$$\frac{d\overline{L}_z}{dt} = \sum \overline{m}_z(\vec{F}_k^e) \tag{3-45}$$
:::

*Chứng minh :* Xét chất điểm $M_k$ của cơ hệ có khối lượng $m_k$ chịu tác dụng của ngoại lực $\vec{F}_k^e$ và nội lực $\vec{F}_k^i$. Viết công thức $(3 - 42)$ cho chất điểm $M_k$, trong đó thay thế lực $\vec{F}$ bằng hợp lực của $\vec{F}_k^e$ và $\vec{F}_k^i$, ta có:

$$\frac{d}{dt} \vec{L}_{ok} = \vec{m}_o(\vec{F}_k^e + \vec{F}_k^i) = \vec{m}_o(\vec{F}_k^e) + \vec{m}_o(\vec{F}_k^i)$$

Lấy tổng hai vế của đẳng thức với chú ý là mômen chính của hệ nội lực bằng không, tức là:

$$\sum \vec{m}_o(\vec{F}_k^i) = \vec{0}$$

ta có:

$$\sum \frac{d}{dt} \vec{L}_{ok} = \sum \vec{m}_o(\vec{F}_k^e) + \sum \vec{m}_o(\vec{F}_k^i) = \sum \vec{m}_o(\vec{F}_k^e)$$

vậy:

$$\frac{d}{dt} \sum \vec{L}_{ok} = \frac{d}{dt} \vec{L}_o = \sum \vec{m}_o(\vec{F}_k^e)$$

Đó là điều cần chứng minh.

Khi chiếu hai vế của đẳng thức $(3 - 44)$ lên trục cố định qua $O$ ta nhận được ngay đẳng thức $(3 - 45)$.

Từ định lý nêu trên ta có nhận xét: các nội lực không làm biến đổi mômen động lượng của cơ hệ, mặc dù chúng làm biến đổi mômen động lượng của các bộ phận thuộc cơ hệ.

---

### 3.4.3. Định luật bảo toàn mômen động lượng

Dưới đây ta thiết lập định luật bảo toàn mômen động lượng cho cơ hệ, nhưng chúng cũng áp dụng được một cách dễ dàng cho trường hợp chất điểm, vì chất điểm được xem như một cơ hệ đặc biệt:

Từ $(3 - 44)$ và $(3 - 45)$ ta thấy:

$$\text{nếu } \sum \vec{m}_o(\vec{F}_k^e) = \vec{0} \text{ thì } \frac{d\vec{L}_o}{dt} = \vec{0} \, ; \text{ tức } \vec{L}_o = \overrightarrow{\text{const}} \tag{3-46}$$

và nếu

$$\sum \overline{m}_z(\vec{F}_k^e) = 0 \text{ thì } \frac{d\overline{L}_z}{dt} = 0 \, ; \text{ tức } \overline{L}z = \text{const} \tag{3-47}$$

[Đính chính bản in: Ký hiệu $\overline{L}z$ ở vế cuối $(3 - 47)$ in thiếu định dạng chỉ số dưới, đúng là $\overline{L}_z = \text{const}$.]

::: tip Định lý
*Nếu tổng mômen các ngoại lực tác dụng lên cơ hệ đối với một tâm (một trục) cố định luôn luôn bằng không thì mômen động lượng của cơ hệ đối với tâm (trục) đó sẽ không đổi.*
:::

Áp dụng định lý bảo toàn mômen động lượng cho chất điểm chuyển động dưới tác dụng lực $\vec{F}$ luôn luôn đi qua điểm cố định $O$ (lực xuyên tâm), ta dễ dàng đi đến kết luận là chất điểm luôn luôn chuyển động trong mặt phẳng cố định chứa tâm $O$ và vận tốc đầu của chất điểm. Thí dụ về trường hợp này là chuyển động của các hành tinh trong thái dương hệ (bỏ qua lực tác dụng tương hỗ giữa các hành tinh).

---

### 3.4.4. Áp dụng vào vật rắn

#### 1. Biểu thức của mômen động lượng của vật rắn quay quanh trục cố định đối với trục quay của nó

Ta có công thức sau đây :

$$\overline{L}_z = J_z \cdot \overline{\omega} \tag{3-48}$$

trong đó $\overline{\omega}$ là vận tốc góc của vật, $J_z$ là mômen quán tính của vật rắn đối với trục quay.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_11.svg" alt="Hình 3-11: Vật rắn quay quanh trục cố định z với vận tốc góc omega" style="max-height: 270px;" />

<div class="figure-caption">

Hình 3-11

</div>

</div>

Lấy một phần tử $M_k$ của vật rắn, có khối lượng $m_k$, nằm cách trục quay một đoạn $h_k$. Do vận tốc của chất điểm hướng thẳng góc với bán kính quay $h_k$, thuận chiều quay của vật, có giá trị bằng $h_k\omega$, nên động lượng của chất điểm, tức $m_k \vec{v}_k$, nằm trong mặt phẳng thẳng góc với trục quay và cách trục quay một đoạn $h_k$ ($m_k\vec{v}_k$ cũng thẳng góc với bán kính quay $h_k$), có mômen đối với trục quay cùng dương hay cùng âm theo $\overline{\omega}$, tức (H. $3 - 11$):

$$\overline{m}_z(m_k \vec{v}_k) = m_k h_k^2 \overline{\omega}.$$

Vậy mômen động lượng của vật rắn đối với trục quay $z$, ký hiệu bởi $\overline{L}_z$, bằng:

$$\overline{L}_z = \sum \overline{m}_z(m_k \vec{v}_k) = \sum m_k h_k^2 \overline{\omega} = \left(\sum m_k h_k^2\right) \overline{\omega} = J_z \overline{\omega}$$

#### 2. Phương trình vi phân chuyển động của vật rắn quay quanh một trục cố định

Khảo sát một vật rắn quay quanh một trục cố định dưới tác dụng của các lực hoạt động $\vec{F}_1, \dots, \vec{F}_N$.

Các ngoại lực tác dụng lên vật rắn gồm các lực hoạt động $\vec{F}_1, \vec{F}_2, \dots, \vec{F}_N$ và các lực liên kết tại các ổ trục $\vec{R}_A$ và $\vec{R}_B$ (H. $3 - 12$).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_12.svg" alt="Hình 3-12: Ngoại lực hoạt động và phản lực ổ trục trên vật rắn quay quanh trục cố định" style="max-height: 270px;" />

<div class="figure-caption">

Hình 3-12

</div>

</div>

Vì các phản lực ở trục $\vec{R}_A, \vec{R}_B$ có mômen đối với trục quay bằng không và mômen động lượng của vật rắn đối với trục quay là $\overline{L}_z = J_z \overline{\omega}$, trong đó $J_z$ là đại lượng không biến đổi theo thời gian, nên khi áp dụng công thức $(3 - 45)$ ta được:

$$\frac{d}{dt}(J_z \overline{\omega}) = J_z \frac{d\overline{\omega}}{dt} = J_z \overline{\varepsilon} = \sum \overline{m}_z(\vec{F}_k) \tag{3-49}$$

được gọi là phương trình vi phân chuyển động của vật quay quanh một trục cố định, nó còn có thể viết dưới dạng :

$$J_z \ddot{\overline{\varphi}} = \sum \overline{m}_z(\vec{F}_k) \tag{3-49}$$

[Đính chính bản in: Bản in đánh trùng số hiệu $(3 - 49)$ cho cả dạng theo gia tốc góc $\overline{\varepsilon}$ và dạng theo đạo hàm bậc hai góc quay $\ddot{\overline{\varphi}}$.]

#### Thí dụ 3-3

**Thí dụ 3 – 3.** Một dây treo vật nặng có trọng lượng $Q$ quấn trên một tang tời có trọng lượng $P$ và bán kính $r$. Bỏ qua khối lượng dây và ma sát tại ổ trục của tời. Hãy xác định gia tốc góc của tang tời khi vật nặng rơi xuống theo phương thẳng đứng. Cho biết bán kính quán tính của tang tời đối với trục quay của nó là $\rho$, (H. $3 - 13$).

**Bài giải**

Khảo sát cơ hệ chuyển động gồm tang tời và vật nặng.

Các ngoại lực tác dụng lên cơ hệ gồm các trọng lực $\vec{P}, \vec{Q}$ của tang tời, vật nặng và phản lực $\vec{R}$ tại ổ đỡ.

Áp dụng $(3 - 45)$ ta có:

$$\frac{d\overline{L}_z}{dt} = \overline{m}_z(\vec{P}) + \overline{m}_z(\vec{Q}) + \overline{m}_z(\vec{R})$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_13.svg" alt="Hình 3-13: Hệ tang tời và vật nặng Q" style="max-height: 280px;" />

<div class="figure-caption">

Hình 3-13

</div>

</div>

Biểu thức mômen quán tính của cơ hệ được tính theo công thức:

[Đính chính bản in: Ở câu trên, bản in ghi nhầm "mômen quán tính" thay cho "mômen động lượng".]

$$\begin{aligned} \overline{L}_z &= \overline{L}_z^{\text{tang}} + \overline{L}_z^{\text{vật}} = \\ &= J_z \overline{\omega} + \frac{Q}{g} r^2 \overline{\omega} = \frac{P \rho^2 + Q r^2}{g} \overline{\omega} \end{aligned}$$

Do đó:

$$\frac{P \rho^2 + Q r^2}{g} \frac{d\overline{\omega}}{dt} = -Q r$$

Từ đó:

$$\overline{\varepsilon} = \frac{d\overline{\omega}}{dt} = -g \frac{Q r}{P \rho^2 + Q r^2}$$

Dấu $-$ chứng tỏ tang quay nhanh dần đều theo chiều kim đồng hồ.

#### Thí dụ 3-4

**Thí dụ 3–4.** Hai trục máy có đường trục trùng nhau quay đều với vận tốc góc $\omega_1$ và $\omega_2$. Tại một thời điểm nào đó người ta nối hai trục máy với nhau nhờ bộ ly hợp. Tìm vận tốc góc của trục máy sau khi nối bộ ly hợp.

**Bài giải**

Vì các trục máy quay đều, nên mômen các ngoại lực tác dụng lên các trục máy đối với trục quay (đường tâm trục) đều bằng không. Khi nối bộ ly hợp, không xuất hiện các mômen ngoại lực nên tổng mômen các ngoại lực đối với trục máy sau khi nối bộ ly hợp cũng bằng không. Do đó mômen động lượng của cơ hệ khi hai trục nối với nhau đối với đường trục tâm được bảo toàn, tức :

$$\overline{L}_z = \overline{L}_z^{(o)}$$

vì $\overline{L}_z^{(o)} = J_1 \overline{\omega}_1 + J_2 \overline{\omega}_2$ và $\overline{L}_z = (J_1 + J_2)\overline{\omega}$

ở đó $\overline{\omega}$ là vận tốc góc hai trục khi đã nối với nhau, $J_1, J_2$ là mômen quán tính của các trục đối với trục tâm của nó, nên ta có :

$$(J_1 + J_2)\overline{\omega} = J_1 \overline{\omega}_1 + J_2 \overline{\omega}_2$$

Vậy:

$$\overline{\omega} = \frac{1}{J_1 + J_2}(J_1 \overline{\omega}_1 + J_2 \overline{\omega}_2)$$

Ban đầu trục thứ hai đứng yên (tức $\overline{\omega}_2 \equiv 0$), ta có:

$$\overline{\omega} = \frac{J_1}{J_1 + J_2} \overline{\omega}_1$$

Vậy trục sau khi được ghép sẽ quay cùng chiều với trục quay thứ nhất với vận tốc góc nhỏ hơn vận tốc góc của trục thứ nhất.

---

## 3.5. Định lý động năng

### 3.5.1. Động năng

Động năng của chất điểm có khối lượng $m$, chuyển động với vận tốc $v$ là đại lượng vô hướng, được ký hiệu là $T$ :

$$T = \frac{1}{2} m v^2 \tag{3-50}$$

Động năng của cơ hệ là tổng động năng của các chất điểm thuộc cơ hệ

$$T = \frac{1}{2} \sum m_k v_k^2 \tag{3-51}$$

Đơn vị của động năng là $\text{kgm}^2\text{/s}^2$.

---

### 3.5.2. Công và công suất

#### 1. Công nguyên tố của lực

Công nguyên tố của lực $\vec{F}$, điểm đặt của nó chuyển động theo đường cong $C$, sau khoảng thời gian $dt$ thực hiện di chuyển nguyên tố $ds$ được xác định theo công thức sau:

$$d'A = F_t ds \tag{3-52}$$

Trong đó $F_t$ là hình chiếu của lực lên phương tiếp tuyến của quỹ đạo tại điểm đặt của lực $\vec{F}$ (H. $3 - 14$).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_14.svg" alt="Hình 3-14: Công nguyên tố của lực F khi điểm đặt M di chuyển trên đường cong C" style="max-height: 250px;" />

<div class="figure-caption">

Hình 3-14

</div>

</div>

Công nguyên tố của lực $d'A$ có thể dương, âm hoặc bằng không tùy thuộc góc giữa lực $\vec{F}$ và vận tốc $\vec{v}$ của điểm đặt lực $\vec{F}$ là nhọn, tù hoặc góc vuông.

Công nguyên tố của lực còn có thể viết trong các dạng sau:

$$\begin{aligned} d'A &= F\cos\alpha \, ds = \vec{F} \cdot d\vec{r} = \\ &= \vec{F} \cdot \vec{v} \, dt = F_t v_t dt = F_x dx + F_y dy + F_z dz \end{aligned} \tag{3-52}$$

[Đính chính bản in: Bản in dùng trùng số hiệu $(3 - 52)$ cho cả hai biểu thức công nguyên tố trên trang 51.]

Trong đó $\alpha$ là góc giữa lực $\vec{F}$ và vận tốc $\vec{v}$ ; $\vec{r}$ là vectơ định vị của điểm đặt lực, $F_t, v_t$ là hình chiếu lên phương tiếp tuyến của quỹ đạo tại điểm đặt của lực $\vec{F}$; $F_x, F_y, F_z$ là các hình chiếu của lực $\vec{F}$ lên các trục tọa độ Đề các $Oxyz$.

Trong trường hợp chất điểm chịu tác dụng của nhiều lực thì $\vec{F}$ là hợp lực của các lực đó.

#### 2. Công hữu hạn của lực

Khi điểm đặt lực $\vec{F}$ di chuyển từ vị trí $M_1$ đến vị trí $M_2$, công của lực $\vec{F}$ ứng với di chuyển đó được xác định như sau:

$$\begin{aligned} A_{\widehat{M_1 M_2}} &= \int_{s_1}^{s_2} F\cos\alpha \, ds = \int_{\vec{r}_1}^{\vec{r}_2} \vec{F}\cdot d\vec{r} = \int_{t_1}^{t_2} \vec{F}\cdot\vec{v} \, dt \\ &= \int_{\widehat{M_1 M_2}} F_x dx + F_y dy + F_z dz \end{aligned} \tag{3-53}$$

Khi chất điểm chịu tác dụng của nhiều lực thì lực $\vec{F}$ là hợp lực của các lực đó và rõ ràng ta có tính chất sau:

*Công (công nguyên tố) của hợp lực bằng tổng công (tổng công nguyên tố) của các lực thành phần.*

Đơn vị của công là $\text{Nm}$ còn được gọi là Jun ($\text{J}$).

#### 3. Công suất

Công suất là công do lực sinh ra trong một đơn vị thời gian. Công suất được ký hiệu là $W$.

$$W = \frac{d'A}{dt} = \frac{\vec{F}\cdot d\vec{r}}{dt} = \vec{F}\cdot\vec{v} \tag{3-54}$$

Biểu thức của công suất có thể viết trong các dạng sau :

$$W = F\cos\alpha \cdot v = \overline{F}_t \cdot \overline{v}_t = F_x \dot{x} + F_y \dot{y} + F_z \dot{z}$$

Đơn vị của công suất là Oát ($\text{w}$)

$$1\text{w} = 1\text{J/s}$$

---

### 3.5.3. Định lý động năng

::: tip Định lý
*Đạo hàm theo thời gian động năng của chất điểm bằng công suất của lực tác dụng lên chất điểm:*

$$\frac{dT}{dt} = \vec{F}\cdot\vec{v} \tag{3-55}$$
:::

*Chứng minh :* Viết phương trình cơ bản của động lực học cho chất điểm, sau đó nhân vô hướng hai vế với vận tốc của chất điểm, ta có:

$$m\vec{a}\vec{v} = \vec{F}\cdot\vec{v}$$

Chú ý rằng:

$$m\vec{a}\cdot\vec{v} = \frac{d}{dt}\left(\frac{1}{2} m\vec{v}^2\right) = \frac{d}{dt}\left(\frac{1}{2} m v^2\right) = \frac{dT}{dt}$$

ta có ngay:

$$\frac{dT}{dt} = \vec{F}\cdot\vec{v}$$

Đó là điều cần chứng minh.

Phương trình $(3 - 55)$ còn có thể viết như sau:

$$dT = \vec{F}\cdot\vec{v} \, dt = \vec{F} \, d\vec{r} = d'A \tag{3-56}$$

Vậy ta có:

::: tip Định lý
*Vi phân động năng của chất điểm bằng công nguyên tố của lực tác dụng lên chất điểm.*
:::

Đối với trường hợp cơ hệ:

::: tip Định lý
*Đạo hàm theo thời gian động năng của cơ hệ bằng tổng công suất của các nội lực và ngoại lực tác dụng lên cơ hệ:*

$$\frac{dT}{dt} = \sum \vec{F}_k^e \cdot \vec{v}_k + \sum \vec{F}_k^i \cdot \vec{v}_k. \tag{3-57}$$
:::

*Chứng minh.* Đối với một chất điểm $M_k$ thuộc cơ hệ, có khối lượng $m_k$, chịu tác dụng của ngoại lực $\vec{F}_k^e$ và nội lực $\vec{F}_k^i$, theo $(3 - 55)$, ta có:

$$\frac{d}{dt}\left(\frac{1}{2} m_k v_k^2\right) = \left(\vec{F}_k^e + \vec{F}_k^i\right) \cdot \vec{v}_k = \vec{F}_k^e \cdot \vec{v}_k + \vec{F}_k^i \cdot \vec{v}_k$$

Khi lấy tổng theo hai vế của đẳng thức vừa nhận được, ta có :

$$\begin{aligned} \sum \frac{d}{dt}\left(\frac{1}{2} m_k v_k^2\right) &= \frac{d}{dt}\frac{1}{2}\sum m_k v_k^2 = \\ &= \frac{dT}{dt} = \sum \vec{F}_k^e \cdot \vec{v}_k + \sum \vec{F}_k^i \cdot \vec{v}_k \end{aligned}$$

Đó là điều cần chứng minh.

Tương tự với trường hợp của chất điểm ta có:

::: tip Định lý
*Vi phân động năng của cơ hệ bằng tổng công nguyên tố của các ngoại lực và nội lực tác dụng lên cơ hệ.*

$$dT = \sum \vec{F}_k^e \cdot d\vec{r}_k + \sum \vec{F}_k^i \cdot d\vec{r}_k \tag{3-58}$$
:::

*Chứng minh.* Từ công thức $(3 - 57)$ ta nhận được:

$$dT = \sum \vec{F}_k^e \cdot \vec{v}_k dt + \sum \vec{F}_k^i \cdot \vec{v}_k dt = \sum \vec{F}_k^e \cdot d\vec{r}_k + \sum \vec{F}_k^i \cdot d\vec{r}_k$$

Đó là điều cần chứng minh.

Các định lý trên cho biết tốc độ biến đổi của động năng theo thời gian. Dưới đây sẽ trình bày các định lý về biến đổi của động năng trong khoảng thời gian hữu hạn (lượng tích tụ của động năng).

::: tip Định lý
*Biến thiên động năng của chất điểm trong một chuyển dời nào đó bằng công của lực tác dụng lên chất điểm sinh ra trong chuyển dời đó.*

$$\frac{1}{2} m v_2^2 - \frac{1}{2} m v_1^2 = \int_{\vec{r}_1}^{\vec{r}_2} \vec{F}\cdot d\vec{r} \tag{3-59}$$
:::

*Chứng minh.* Tích phân hai vế của đẳng thức $(3 - 56)$ với các cận tương ứng ta nhận ngay được công thức $(3 - 59)$.

::: tip Định lý
*Biến thiên động năng của cơ hệ trong một khoảng thời gian nào đó bằng tổng công các ngoại lực và nội lực sinh ra trong chuyển dời ứng với khoảng thời gian đó.*

$$T_2 - T_1 = \sum \int \vec{F}_k^e \cdot d\vec{r}_k + \sum \int \vec{F}_k^i \cdot d\vec{r}_k \tag{3-60}$$
:::

*Chứng minh.* Định lý sẽ được chứng minh, khi ta lấy tích phân hai vế của đẳng thức $(3 - 58)$ theo các cận tương ứng:

$$\int dT = \int \sum \vec{F}_k^e \cdot d\vec{r}_k + \int \sum \vec{F}_k^i \cdot d\vec{r}_k$$

Từ đó:

$$T_2 - T_1 = \sum \int \vec{F}_k^e \cdot d\vec{r}_k + \sum \int \vec{F}_k^i d\vec{r}_k$$

Đó là điều cần chứng minh.

Cần chú ý rằng nội lực làm biến đổi động năng của cơ hệ. Vì vậy định lý động năng phản ảnh bản chất quá trình thay đổi chuyển động của cơ hệ và nhờ nó trạng thái chuyển động của cơ hệ được nghiên cứu một cách sâu sắc.

---

### 3.5.4. Áp dụng

#### 1. Biểu thức động năng của vật rắn chuyển động

*a) Vật rắn chuyển động tịnh tiến:* vật có khối lượng $M$ chuyển động với vận tốc $\vec{v}$.

Trong trường hợp này các phần tử của vật đều có cùng vận tốc $v$, do đó:

$$T = \frac{1}{2}\sum m_k v_k^2 = \frac{1}{2}\sum m_k v^2 = \frac{1}{2}\left(\sum m_k\right) v^2 = \frac{1}{2} M v^2 \tag{3-61}$$

*b) Vật rắn quay quanh một trục cố định:* Xét một phần tử $M_k$ của vật rắn, có khối lượng $m_k$, nằm cách trục quay một đoạn $r_k$. Vận tốc của $M_k$ sẽ bằng $v_k = r_k \omega$, trong đó $\omega$ là vận tốc góc của vật quay quanh trục cố định. Do đó:

$$T = \frac{1}{2}\sum m_k v_k^2 = \frac{1}{2}\sum m_k (r_k \omega)^2 = \frac{1}{2}\left(\sum m_k r_k^2\right) \omega^2 = \frac{1}{2} J_z \omega^2. \tag{3-62}$$

Trong đó $J_z$ là mômen quán tính của vật đối với trục quay.

*c) Vật rắn chuyển động song phẳng:* trường hợp của tấm phẳng có vận tốc khối tâm $C$ là $\vec{v}_C$, có vận tốc góc đối với khối tâm $C$ là $\overline{\omega}_s$ và có khối lượng $M$.

[Đính chính bản in: Ký hiệu $\overline{\omega}_s$ là vận tốc góc $\overline{\omega}$ của tấm phẳng song phẳng.]

Gọi $P$ là tâm vận tốc tức thời của tấm phẳng tại thời điểm nào đó. Xét một phần tử $M_k$ của tấm, có khối lượng $m_k$, cách tâm vận tốc tức thời của tấm một đoạn $\rho_k$. Như đã biết, phần tử $M_k$ có vận tốc bằng:

$$v_k = \rho_k \omega. \text{ Vậy ta có:}$$

$$T = \frac{1}{2}\sum m_k v_k^2 = \frac{1}{2}\sum m_k (\rho_k \omega)^2 = \frac{1}{2}\left(\sum m_k \rho_k^2\right) \omega^2 = \frac{1}{2} J_P \omega^2 \tag{3-63}$$

trong đó $J_P$ là mômen quán tính của tấm phẳng đối với trục qua $P$ và thẳng góc với mặt phẳng tấm.

Theo định lý về mômen quán tính đối với các trục song song:

$$J_P = J_C + M(\overline{PC})^2$$

Trong đó $J_c$ là mômen quán tính của tấm đối với trục qua khối tâm $C$ và thẳng góc với mặt phẳng tấm.

Do đó:

$$\begin{aligned} T &= \frac{1}{2} J_P \omega^2 = \frac{1}{2}\left[J_C + M(\overline{PC})^2\right]\omega^2 = \\ &= \frac{1}{2} J_C \omega^2 + \frac{1}{2} M(\overline{PC}\omega)^2 \end{aligned} \tag{3-64}$$

$$T = \frac{1}{2} M v_c^2 + \frac{1}{2} J_C \omega^2$$

#### 2. Biểu thức công của một số lực

*a) Công của trọng lực.* Giả sử chất điểm $M$ chịu tác dụng của trọng lực $\vec{P}$, di chuyển theo một đường cong $C$ nào đó (H. $3 - 15$). Để tính công trọng lực ta sử dụng công thức:

$$A_{M_1 M_2} = \int_{\widehat{M_1 M_2}} F_x dx + F_y dy + F_z dz$$

Khi chọn trục $Oz$ hướng thẳng đứng lên thì:

$$P_x = P_y = 0 \, ; \quad P_z = -P$$

Vậy :

$$\begin{aligned} A_{M_1 M_2} &= -\int_{z_1}^{z_2} P dz = \\ &= -P(z_2 - z_1) \\ &= \pm P h \end{aligned} \tag{3-65}$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_15.svg" alt="Hình 3-15: Chất điểm chịu tác dụng trọng lực di chuyển theo đường cong (C)" style="max-height: 280px;" />

<div class="figure-caption">

Hình 3-15

</div>

</div>

trong đó $h$ là cao độ di chuyển.

Công của trọng lực sẽ dương khi điểm đặt của lực hạ xuống và âm khi điểm đặt của lực được nâng lên, và bằng không khi điểm đặt của lực di chuyển trong mặt phẳng ngang.

Công của trọng lực không phụ thuộc vào dạng của quỹ đạo của điểm đặt lực mà chỉ phụ thuộc vào vị trí đầu và vị trí cuối của điểm đặt. Khi điểm đặt di chuyển được một đoạn đường khép kín thì công của lực bằng không.

Công của hệ các trọng lực. Khi cơ hệ di chuyển từ vị trí $\text{I}$ đến vị trí $\text{II}$, các chất điểm của nó di chuyển tương ứng từ vị trí $M_k^{(\text{I})}$ đến $M_k^{(\text{II})}$, còn khối tâm cơ hệ di chuyển từ $C_{\text{I}}$ đến $C_{\text{II}}$. Công của các trọng lực trong di chuyển đó sẽ bằng:

$$\begin{aligned} A &= -\sum P_k \left(z_k^{(\text{II})} - z_k^{(\text{I})}\right) = -\sum P_k z_k^{(\text{II})} + \sum P_k z_k^{(\text{I})} = \\ &= -P\left(z_{C_{\text{II}}} - z_{C_{\text{I}}}\right) = \pm P h_C \end{aligned} \tag{3-66}$$

Trong đó $P = \sum P_k$, còn $z_{C_{\text{II}}}$ và $z_{C_{\text{I}}}$ là cao độ của khối tâm của cơ hệ ứng với các vị trí $\text{II}$ và $\text{I}$ của cơ hệ, $h_C$ là cao độ của di chuyển khối tâm.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_16.svg" alt="Hình 3-16: Lực đàn hồi tuyến tính tác dụng lên chất điểm di chuyển từ M_1 đến M_2" style="max-height: 240px;" />

<div class="figure-caption">

Hình 3-16

</div>

</div>

*b) Công của lực đàn hồi tuyến tính*

Lực đàn hồi tuân theo định luật Húc

$$\vec{F} = -c\vec{r}$$

trong đó $\vec{r}$ là vectơ định vị của chất điểm so với tâm, còn $c$ là hệ số tỷ lệ không đổi, được gọi là hệ số cứng (H. $3 - 16$).

Công của lực $\vec{F}$ khi điểm đặt của nó di chuyển từ $M_1$ đến $M_2$ được tính theo công thức:

$$A = \int_{\vec{r}_1}^{\vec{r}_2} \vec{F} d\vec{r} = -c \int_{\vec{r}_1}^{\vec{r}_2} \vec{r} d\vec{r} = -\frac{1}{2} c \int_{\vec{r}_1}^{\vec{r}_2} d(\vec{r})^2 = -\frac{1}{2} c \int_{r_1}^{r_2} d(r^2)$$

Vậy:

$$A = -\frac{c}{2}(r_2^2 - r_1^2) \tag{3-67}$$

Trong trường hợp lò xo, công của lực đàn hồi lò xo khi đầu mút của nó bị biến dạng một đoạn $\delta$ so với trạng thái không biến dạng (trạng thái tự nhiên) của nó bằng:

$$A = -\frac{c}{2} \delta^2$$

Cũng như trường hợp của trọng lực, công của lực đàn hồi tuyến tính không phụ thuộc vào dạng của quỹ đạo của điểm đặt lực mà chỉ phụ thuộc vào vị trí đầu và cuối của nó.

*c) Công của lực tác dụng lên vật rắn chuyển động tịnh tiến*

Theo công thức tính công nguyên tố, ta có:

$$d'A = \vec{F}\cdot d\vec{r} = \vec{F}\cdot \vec{v}dt = \vec{F}\cdot \vec{v}_C dt = \vec{F} \, d\vec{r}_c$$

*d) Công của lực tác dụng lên vật quay quanh một trục cố định:*

Sử dụng công thức: $d'A = \overline{F}_t \overline{v}_t dt$ ta có:

$$d'A = \overline{F}_t \overline{v}_t dt = F_t R \overline{\omega} dt = \overline{m}_z(\vec{F}) d\overline{\varphi} \tag{3-68}$$

Công của ngẫu lực tác dụng lên vật quay quanh một trục cố định, ngẫu lực có mômen $\overline{m}$ và nằm trong mặt phẳng thẳng góc với trục quay :

$$d'A = \overline{m} d\overline{\varphi} \tag{3-69}$$

*e) Công của lực đặt vào tấm chuyển động song phẳng*

Xem tấm song phẳng quay quanh trục thẳng góc với mặt phẳng của tấm và đi qua tâm quay tức thời. Áp dụng trực tiếp công thức tính công của lực tác dụng vào vật quay ta có:

$$d'A = \overline{m}_P(\vec{F}) \, d\overline{\varphi}_s \tag{3-70}$$

trong đó $\overline{m}_P(\vec{F})$ là mômen của lực $\vec{F}$ đối với tâm quay tức thời.

Công thức $(3 - 70)$ có thể được viết trong dạng:

$$d'A = \overline{m}_C(\vec{F}) \, d\overline{\varphi}_s + \vec{F}_c \cdot d\vec{r}_c \tag{3-71}$$

Trường hợp tấm phẳng chịu tác dụng ngẫu lực nằm trong mặt phẳng tấm và có mômen $\overline{m}$ thì:

$$d'A = \overline{m} d\overline{\varphi}_s \tag{3-72}$$

*g) Công của hệ nội lực trong vật rắn*

Xét hai phần tử bất kỳ của vật rắn $M_k$ và $M'_k$. Lực tác dụng tương hỗ giữa hai phần tử đó ký hiệu là $\vec{F}_k$ và $\vec{F}'_k$ với $\vec{F}_k = -\vec{F}'_k$, hai lực này đều có cùng phương với $M_k M'_k$

Theo công thức tính công nguyên tố ta có:

$$\begin{aligned} dA_k &= \vec{F}_k \, d\vec{r}_k + \vec{F}'_k \, d\vec{r}'_k = \vec{F}_k d\vec{r}_k - \vec{F}_k \, d\vec{r}'_k = \\ &= \vec{F}_k d(\vec{r}_k - \vec{r}'_k) = \vec{F}_k \, d(\overrightarrow{M'_k M_k}) \end{aligned}$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_17.svg" alt="Hình 3-17: Hệ nội lực giữa hai phần tử M_k và M'_k của vật rắn" style="max-height: 230px;" />

<div class="figure-caption">

Hình 3-17

</div>

</div>

Vì lực $\vec{F}_k$ cùng phương và ngược chiều với $\overrightarrow{M'_k M_k}$ nên

$$\vec{F}_k = -\alpha_k \overrightarrow{M'_k M_k}$$

Trong đó $\alpha_k$ là đại lượng vô hướng dương nào đó.

Vậy:

$$\begin{aligned} dA_k &= \vec{F}_k \, d(\overrightarrow{M'_k M_k}) \\ &= -\alpha_k (\overrightarrow{M'_k M_k}) \, d(\overrightarrow{M'_k M_k}) \\ &= -\frac{\alpha_k}{2} d(\overrightarrow{M'_k M_k})^2 \\ &= -\frac{\alpha_k}{2} d(\overline{M'_k M_k})^2 = 0 \end{aligned}$$

vì theo định nghĩa của vật rắn, khoảng cách giữa hai điểm $M'_k, M_k$ luôn luôn không đổi.

Từ đó.

$$dA = \sum dA_k = 0$$

tức tổng công các nội lực của vật rắn luôn luôn bằng không.

#### Thí dụ 3-5

**Thí dụ 3–5.** Một rơmoóc chở hàng chuyển động trên đường ngang dưới tác dụng của lực $\vec{F}$ nằm ngang, có giá trị không đổi. Thùng xe và vật liệu có khối lượng $M$, hai bánh xe mỗi bánh có khối lượng $m$, bán kính $R$, bán kính quán tính đối với trục quay bằng $\rho$. Giả thiết các bánh xe lăn không trượt. Bỏ qua sức cản lăn và sức cản của không khí.

1– Tính gia tốc của thùng xe.

2– Tính vận tốc của thùng xe theo quãng đường đi được, kể từ trạng thái đầu đứng yên.

**Bài giải**

Khảo sát cơ hệ chuyển động gồm thùng xe chở vật liệu và hai bánh xe. Thùng xe chuyển động tịnh tiến, các bánh xe chuyển động song phẳng.

Lực tác dụng lên cơ hệ: chỉ có lực $\vec{F}$ sinh công (trọng lực và phản lực pháp tuyến của mặt đường tác dụng lên các bánh xe không sinh công vì có phương thẳng góc với phương di chuyển, các lực ma sát trượt giữa các bánh xe và mặt đường cũng không sinh công vì do lăn không trượt, vận tốc của điểm đặt lực bằng không) (H. $3 - 18$).

Động năng cơ hệ gồm động năng của thùng xe và động năng của hai bánh xe:

$$T = \frac{1}{2} M v^2 + 2\left(\frac{1}{2} J\omega^2 + \frac{m v^2}{2}\right)$$

Do điều kiện lăn không trượt $\omega = \dfrac{v}{R}$ và vì $J = m\rho^2$ nên:

$$T = \frac{1}{2}\left[M + 2m\left(\frac{\rho^2}{R^2} + 1\right)\right] v^2$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_18.svg" alt="Hình 3-18: Rơmoóc chở hàng chuyển động ngang dưới tác dụng của lực F" style="max-height: 240px;" />

<div class="figure-caption">

Hình 3-18

</div>

</div>

Công nguyên tố của lực $\vec{F}$ bằng:

$$dA = F ds = F v dt$$

Áp dụng định lý động năng dạng đạo hàm:

$$\frac{dT}{dt} = W$$

Ta nhận được:

$$\left[M + 2m\left(\frac{\rho^2}{R^2} + 1\right)\right] v \cdot a = F \cdot v.$$

Thùng xe đang chuyển động nên $v \neq 0$, vậy:

$$a = \frac{F}{\left[M + 2m\left(\dfrac{\rho^2}{R^2} + 1\right)\right]} = \text{const}$$

tức thùng xe chuyển động nhanh dần đều.

Để tìm biểu thức của vận tốc thùng xe theo quãng đường đi ta áp dụng định lý động năng dạng hữu hạn (do tính được biểu thức của công hữu hạn). Sau đoạn đường di chuyển $s$ của thùng xe lực $\vec{F}$ sản sinh công bằng $A = F \cdot s$.

Định lý động năng dạng hữu hạn cho ta: ($T_o = 0$)

$$\frac{1}{2}\left[M + 2m\left(\frac{\rho^2}{R^2} + 1\right)\right] v^2 = F s$$

Từ đó ta tìm được:

$$v = \sqrt{2 \frac{F}{M + 2m\left(\dfrac{\rho^2}{R^2} + 1\right)} \cdot s}$$

*Chú ý:* Kết quả vừa tìm được có thể nhận trực tiếp từ công thức liên hệ động học trong chuyển động nhanh dần đều của chất điểm:

$$v = \sqrt{2as}$$

#### Thí dụ 3-6

**Thí dụ 3–6.** Giải bài toán trên khi kể đến sức cản của không khí với giả thiết lực cản tỷ lệ bậc nhất với vận tốc thùng xe (hệ số cản $\beta = \text{const}$).

Tìm biểu thức vận tốc của thùng xe trong giai đoạn khởi động và mối liên hệ giữa vận tốc của thùng xe với quãng đường đi của nó từ trạng thái đầu đứng yên.

**Bài giải**

Khảo sát cơ hệ gồm thùng xe và hai bánh xe. Biểu thức động năng của cơ hệ được tính trong thí dụ $3 - 5$.

Lực tác dụng: ngoài lực $\vec{F}$ sinh công còn lực cản không khí đối với thùng xe cũng sinh công. Biểu thức công nguyên tố của các lực bây giờ sẽ là:

$$d'A = F ds - \beta v \, ds = (F - \beta v) v dt$$

Rõ ràng trong trường hợp này không tính trực tiếp được công hữu hạn nên không áp dụng được định lý động năng dạng hữu hạn (mặc dù bài toán đang cần tìm vận tốc).

Để giải bài toán, ta áp dụng định lý động năng dạng đạo hàm:

$$\frac{dT}{dt} = W \equiv \frac{dA}{dt}$$

nó cho ta :

$$\left[M + 2m\left(\frac{\rho^2}{R^2} + 1\right)\right] v a = (F - \beta v) v$$

Do cơ hệ chuyển động $v \neq 0$, nên:

$$a = \frac{dv}{dt} = \frac{F - \beta v}{M + 2m\left(\dfrac{\rho^2}{R^2} + 1\right)} = \frac{F - \beta v}{M^*}$$

ở đó

$$M^* = M + 2m\left(\frac{\rho^2}{R^2} + 1\right) = \text{const}$$

Khi phân ly biến phương trình vi phân vừa nhận được, ta có:

$$\frac{dv}{F - \beta v} = \frac{1}{M^*} dt$$

Với chú ý rằng $F - \beta v \geqslant 0$ nghiệm phương trình vi phân này có dạng (đặt $\alpha = \beta / M^*$):

$$v = \frac{F}{\beta} - C_1 e^{-\alpha t}$$

Trong đó $C_1$ là hằng tích phân được xác định từ điều kiện đầu: $v(o) = 0$ vậy:

$$0 = \frac{F}{\beta} - C_1 \quad \text{hay} \quad C_1 = \frac{F}{\beta}$$

Do đó:

$$v = \frac{F}{\beta}\left(1 - e^{-\alpha t}\right)$$

Từ đây dễ dàng tìm được giá trị vận tốc giới hạn của xe:

$$v_\infty = \frac{F}{\beta}$$

Để tìm mối liên hệ giữa quãng đường đi được và vận tốc của thùng xe, ta xuất phát từ biểu thức:

$$v = \frac{ds}{dt} = \frac{F}{\beta}\left(1 - e^{-\alpha t}\right)$$

Từ đây dễ dàng tìm được:

$$s = \frac{F}{\beta} t + \frac{F}{\beta\alpha} e^{-\alpha t} + C_2$$

hằng tích phân $C_2$ được xác định từ điều kiện đầu:

$$0 = \frac{F}{\beta\alpha} + C_2 \quad \text{hay} \quad C_2 = -\frac{F}{\beta\alpha}$$

Phương trình chuyển động của xe là:

$$s = \frac{F}{\beta} t - \frac{F}{\alpha\beta}\left(1 - e^{-\alpha t}\right)$$

Khi khử thời gian $t$ giữa biểu thức của $s$ và $v$ ta được:

$$s = -\frac{F}{\beta\alpha} \ln\left(1 - \frac{\beta}{F} v\right) - \frac{v}{\alpha}$$

Phương trình chuyển động của xe trong quá trình bình ổn của nó ($v = v_\infty$ và gốc thời gian ứng với một thời điểm nào đó của quá trình bình ổn):

$$s = v_\infty t$$

#### Thí dụ 3-7

**Thí dụ 3–7.** Một hệ thống chuyển tải gồm hai trục là các trục đặc tròn đồng chất có trọng lượng $Q$, bán kính $R$ quay quanh các trục quay riêng cố định $O_1$ và $O_2$ và băng tải là đoạn dây khép kín không giãn, có khối lượng $m$.

Các gầu xúc có trọng lượng $P_1$ và $P_2$. Trục quay $O_1$ chịu tác dụng ngẫu lực $M = \text{const}$. Tìm vận tốc của gầu xúc theo đoạn đường di chuyển, cho biết ban đầu hệ đứng yên.

**Bài giải**

Khảo sát cơ hệ gồm hai trục quay, băng tải, hai gầu xúc $A$ và $B$ (H. $3 - 19$).

Lực tác dụng lên cơ hệ: lực sinh công gồm các trọng lực $\vec{P}_1 \, ; \vec{P}_2$ và ngẫu lực $M$ (các trọng lực của hai trục quay và băng tải không sinh công vì điểm đặt của chúng đứng yên).

Đầu tiên ta tính biểu thức động năng của các vật thuộc cơ hệ

$$T_{\text{trục}} = \frac{1}{2} J\omega^2 \, ; \quad T_A = \frac{1}{2} \frac{P_1}{g} v_A^2 \, ; \quad T_B = \frac{1}{2} \frac{P_2}{g} v_B^2$$

Khi tính động năng băng tải ta chú ý rằng do tính chất không giãn của băng tải nên mọi phần tử của băng tải có vận tốc bằng nhau và bằng $v$:

$$T_{\text{băng}} = \frac{1}{2}\sum m_k v_k^2 = \frac{1}{2}\left(\sum m_k\right) v^2 = \frac{1}{2} m v^2$$

Chú ý đến các quan hệ sau đây:

$$v_A = v_B = v = \omega R \, ; \quad J_{O_1} = J_{O_2} = J = \frac{Q}{2g} R^2$$

Động năng của cơ hệ được tính như sau:

$$\begin{aligned} T &= T_{O_1} + T_{O_2} + T_A + T_B + T_{\text{băng}} = \\ &= \frac{1}{2}\frac{Q}{2g} R^2 \omega^2 + \frac{1}{2}\frac{Q}{2g} R^2 \omega^2 + \frac{1}{2}\frac{P_1}{g} v_A^2 + \\ &\quad + \frac{1}{2}\frac{P_2}{g} v_B^2 + \frac{1}{2} m v^2 = \frac{1}{2}\left(\frac{Q + P_1 + P_2}{g} + m\right) v^2 \end{aligned}$$

Bây giờ ta chuyển sang tính công của các lực. Vì các lực sinh công chỉ gồm các trọng lực và ngẫu lực hằng nên có thể tính công hữu hạn:

$$A = (P_2 - P_1)s + M\varphi = \left(P_2 - P_1 + \frac{M}{R}\right)s$$

Áp dụng định lý động năng dạng hữu hạn ta nhận được:

$$\frac{1}{2}\left(\frac{Q + P_1 + P_2}{g} + m\right) v^2 = \left(P_2 - P_1 + \frac{M}{R}\right) s$$

Vậy :

$$v = \sqrt{2g \frac{(P_2 - P_1)R + M}{R(Q + P_1 + P_2 + mg)} \cdot s}$$

#### Thí dụ 3-8

**Thí dụ 3 – 8.** Trong bài toán trên, tìm công suất cần thiết để hệ thống chuyển động với vận tốc $v$ và gia tốc $a$.

**Bài giải**

Áp dụng định lý động năng dạng đạo hàm ta được:

$$\frac{dT}{dt} = W = W_{\text{động cơ}} + (P_1 - P_2)v$$

Từ đó:

$$\begin{aligned} W_{\text{động cơ}} &= \frac{dT}{dt} + (P_2 - P_1)v = \\ &= \left[\left(\frac{Q + P_1 + P_2}{g} + m\right) a + (P_2 - P_1)\right] v \end{aligned}$$

Trong chế độ bình ổn của chuyển động $v = v_{\max}$; $a = 0$ ta nhận được:

$$W_{\text{động cơ}} = (P_2 - P_1)v_{\max}$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_19.svg" alt="Hình 3-19: Hệ thống băng tải gầu xúc A và B" style="max-height: 290px;" />

<div class="figure-caption">

Hình 3-19

</div>

</div>

---

## 3.6. Trường lực – Thế năng – Định luật bảo toàn cơ năng

### 3.6.1. Trường lực

Trường lực là khoảng không gian vật lý mà khi chất điểm chuyển động trong trường lực chịu tác dụng lực chỉ phụ thuộc vào vị trí của nó. Trường trọng lực, trường các lực đàn hồi là những thí dụ về trường lực.

Trường lực thế là trường lực mà công của lực tác dụng lên chất điểm không phụ thuộc vào dạng quỹ đạo điểm đặt của lực mà chỉ phụ thuộc vào vị trí đầu và vị trí cuối của nó. Lực do trường lực thế tác dụng lên chất điểm đặt trong nó được gọi là lực thế. Trường trọng lực, trường lực đàn hồi tuyến tính là trường lực thế ; còn trọng lực, lực đàn hồi tuyến tính là những lực thế.

---

### 3.6.2. Thế năng

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_20.svg" alt="Hình 3-20: Cơ hệ trong trường lực thế chuyển từ vị trí M về vị trí M^0" style="max-height: 260px;" />

<div class="figure-caption">

Hình 3-20

</div>

</div>

Khảo sát cơ hệ gồm các chất điểm $M_1, M_2, \dots, M_N$ nằm trong trường lực thế dưới tác dụng của các lực có thế $\vec{F}_1, \vec{F}_2, \dots, \vec{F}_N$. Ta quy ước $M$ là tượng trưng cho vị trí của cơ hệ, ví dụ $M^1$ là vị trí của cơ hệ khi các chất điểm có các vị trí:

$$M_1^{(1)}, \quad M_2^{(1)}, \quad \dots, \quad M_N^{(1)} \, ;$$

được gọi tắt là vị trí "1" của cơ hệ. Chọn vị trí "0" của cơ hệ, ký hiệu là $M^o$:

Thế năng của cơ hệ tại một vị trí nào đó bằng tổng công của các lực thế tác dụng lên cơ hệ khi nó di chuyển từ vị trí đó về vị trí "0" (H. $3 - 20$).

$$\Pi_M = \sum A_{k(\widehat{M M^o})} \tag{3-73}$$

Vì vị trí "0" được chọn tùy ý nên thế năng của cơ hệ tại một vị trí nào đó sai khác hằng số cộng tùy ý.

Rõ ràng thế năng của cơ hệ tại vị trí "0" bằng không, tức

$$\Pi_{M^o} = 0$$

Vì lực thế chỉ phụ thuộc vào vị trí các chất điểm của cơ hệ, nên biểu thức công của nó cũng chỉ phụ thuộc vào vị trí các chất điểm của cơ hệ và do đó thế năng của cơ hệ cũng chỉ phụ thuộc vào vị trí các chất điểm cơ hệ, tức:

$$\Pi = \Pi(x_1, y_1, z_1, x_2, y_2, z_2, \dots, x_N, y_N, z_N)$$

Áp dụng công thức tính công ta tính được:

Thế năng của các trọng lực $\vec{P}_1, \vec{P}_2, \dots, \vec{P}_N$

$$\Pi = \pm P h \tag{3-74}$$

Trong đó (H. $3 - 21$): $P = \sum P_k$, $h$ là cao độ khối tâm của cơ hệ so với vị trí "0" được chọn, lấy dấu $+$ trong trường hợp khối tâm cơ hệ nằm trên vị trí "O" và lấy dấu $-$ trong trường hợp ngược lại.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_21.svg" alt="Hình 3-21: Xác định thế năng của hệ trọng lực theo cao độ khối tâm" style="max-height: 250px;" />

<div class="figure-caption">

Hình 3-21

</div>

</div>

Thế năng của lực đàn hồi tuyến tính: trường hợp lò xo

$$\Pi = \frac{1}{2} c \left[(z + \delta_0)^2 - \delta_o^2\right] \tag{3-75}$$

ở đó $\delta_o$ là độ biến dạng của lò xo tại vị trí cân bằng tĩnh $O$ so với trạng thái không biến dạng $O_1$ của lò xo (H. $3 - 22$).

---

### 3.6.3. Các tính chất của các lực thế

**Tính chất thứ nhất :** Công của các lực thế khi cơ hệ di chuyển trong trường lực thế bằng hiệu thế năng của vị trí đầu và vị trí cuối của cơ hệ trong di chuyển đó.

$$A_{\widehat{M^1 M^2}} = \Pi_{M^1} - \Pi_{M^2} \tag{3-76}$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_22.svg" alt="Hình 3-22: Độ biến dạng của lò xo tại vị trí cân bằng tĩnh và vị trí bất kỳ" style="max-height: 240px;" />

<div class="figure-caption">

Hình 3-22

</div>

</div>

Thực vậy, theo định nghĩa :

$$\Pi_{M^1} = \sum A_{\widehat{M^1 M^o}} \, ; \quad \Pi_{M^2} = \sum A_{\widehat{M^2 M^o}}$$

Vì công của các lực thế không phụ thuộc vào dạng quỹ đạo các chất điểm của cơ hệ, nên :

$$\begin{aligned} \Pi_{M^1} &= \sum A_{\widehat{M^1 M^o}} = \sum A_{\widehat{M^1 M^2 M^o}} \\ &= \sum A_{\widehat{M^1 M^2}} + \sum A_{\widehat{M^2 M^o}} \end{aligned}$$

Từ đó :

$$\sum A_{\widehat{M^1 M^2}} = \Pi_{M^1} + \Pi_{M^2}$$

[Đính chính bản in: Ở dòng trên, bản in ghi nhầm dấu $+$ thành $\Pi_{M^1} + \Pi_{M^2}$, đúng ra là $\Pi_{M^1} - \Pi_{M^2}$ như công thức $(3 - 76)$.]

**Tính chất thứ hai :** Lực thế có biểu thức sau :

$$F_{kx} = -\frac{\partial\Pi}{\partial x_k} \, ; \quad F_{ky} = -\frac{\partial\Pi}{\partial y_k} \, ; \quad F_{kz} = -\frac{\partial\Pi}{\partial z_k} \tag{3-77}$$

Thực vậy, giả sử cơ hệ di chuyển từ vị trí $M(x_k, y_k, z_k)$ sang vị trí lân cận $M'(x_k + dx_k, y_k + dy_k, z_k + dz_k)$. Theo tính chất thứ nhất ta có

$$A_{\widehat{M M'}} = \Pi_M - \Pi_{M'} = -(\Pi_{M'} - \Pi_M)$$

tức :

$$dA = -d\Pi$$

Mặt khác, công nguyên tố được tính theo công thức :

$$dA = \sum (F_{kx} dx_k + F_{ky} dy_k + F_{kz} dz_k)$$

còn vi phân toàn phần của hàm thế năng có dạng:

$$d\Pi = \sum \left(\frac{\partial\Pi}{\partial x_k} dx_k + \frac{\partial\Pi}{\partial y_k} dy_k + \frac{\partial\Pi}{\partial z_k} dz_k\right)$$

Từ đẳng thức $dA = -d\Pi$ ta nhận được:

$$F_{kx} = -\frac{\partial\Pi}{\partial x_k} \, ; \quad F_{ky} = -\frac{\partial\Pi}{\partial y_k} \, ; \quad F_{kz} = -\frac{\partial\Pi}{\partial z_k}$$

Đó là điều cần chứng minh.

---

### 3.6.4. Định lý bảo toàn cơ năng

Giả sử cơ hệ chuyển động trong trường lực thế từ vị trí đầu $M^o$ đến vị trí $M$ nào đó.

Theo định lý động năng ta có:

$$T_M - T_{M^o} = \sum A_{\widehat{M^o M}}$$

Mặt khác theo tính chất thứ nhất của các lực thế ta có:

$$\sum A_{\widehat{M^o M}} = \Pi_{M^o} - \Pi_M$$

Vậy:

$$T_M - T_{M^o} = \Pi_{M^o} - \Pi_M$$

Hay

$$T_M + \Pi_M = T_{M^o} + \Pi_{M^o} = \text{const} \tag{3-78}$$

Đại lượng $E = T + \Pi$ được gọi là cơ năng của cơ hệ, nó bằng tổng của động năng và thế năng của cơ hệ.

Vậy ta có định lý bảo toàn cơ năng:

::: tip Định lý bảo toàn cơ năng
*Khi cơ hệ chuyển động trong trường lực thế thì cơ năng của cơ hệ được bảo toàn.*
:::

Hệ cơ học nghiệm đúng định luật bảo toàn cơ năng được gọi là hệ bảo toàn, còn lực tác dụng lên cơ hệ được gọi là lực bảo toàn. Như vậy lực thế là lực bảo toàn.

Nếu ngoài các lực bảo toàn còn có những lực không bảo toàn, chẳng hạn như lực ma sát, tác dụng lên cơ hệ thì cơ năng của cơ hệ sẽ biến đổi do có sự chuyển hóa giữa cơ năng của cơ hệ khảo sát với các dạng năng lượng khác. Cơ hệ như vậy được gọi là hệ không bảo toàn.

Hệ thức $(3 - 78)$ còn được gọi là tích phân năng lượng.

#### Thí dụ 3-9

**Thí dụ 3–9.** Một vật quay quanh trục nằm ngang $O$ từ vị trí đầu được xác định nhờ góc $\varphi_o$ với vận tốc góc đầu $\omega_o$. Tìm vận tốc góc của vật quay theo góc quay $\varphi$ của nó. Bỏ qua sức cản của không khí và ma sát tại ổ trục quay.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_23.svg" alt="Hình 3-23: Con lắc vật lý quay quanh trục nằm ngang O" style="max-height: 270px;" />

<div class="figure-caption">

Hình 3-23

</div>

</div>

**Bài giải**

Khảo sát cơ hệ là con lắc vật lý (H. $3 - 23$).

Lực tác dụng : gồm phản lực trục quay $O$, không sinh công và trọng lực $\vec{P}$ là lực có thế. Do đó có cơ hệ bảo toàn.

Áp dụng định lý bảo toàn cơ năng: $E = T + \Pi = \text{hằng}$, ta có :

$$\frac{1}{2} J\omega^2 - P l \cos\varphi = \frac{1}{2} J\omega_o^2 - P l \cos\varphi_o.$$

Vậy: $\omega^2 = \omega_o^2 + \dfrac{2Pl}{J}(\cos\varphi - \cos\varphi_o)$
