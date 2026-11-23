# Chương 4: Trọng Tâm

## 4.1. Tâm Của Hệ Lực Song Song

Cho hệ lực song song bất kỳ $\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n$ với $\displaystyle\sum_{k=1}^n \vec{F}_k \neq \vec{0}$, đặt tại điểm $M_1, M_2, \dots, M_n$.

Kí hiệu vectơ định vị của điểm $M_k$ qua $\vec{r}_k = \overrightarrow{OM_k}$.

::: tip Định nghĩa
Điểm hình học $C$ gọi là tâm của hệ lực song song được xác định bởi công thức :

$$\vec{r}_c = \frac{\displaystyle\sum_{k=1}^n \overline{F}_k \vec{r}_k}{\displaystyle\sum \overline{F}_k} \tag{4-1}$$
:::

trong đó : $\overline{F}_k$ là hình chiếu của lực $\vec{F}_k$ trên trục $\Delta$ song song với các lực.

Chúng ta sẽ chứng minh tính chất quan trọng sau đây : Hợp lực của hệ lực song song đi qua điểm $C$ và nếu quay các lực thành phần quanh các điểm đặt của chúng một góc $\alpha$ trong điều kiện giữ nguyên điểm đặt và giá trị của các lực thành phần thì hợp lực của chúng cũng quay tâm $C$ một góc $\alpha$.

[Đính chính bản in: Cụm "quay tâm $C$" trong bản in gốc mang nghĩa "quay quanh tâm $C$".]

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_1.svg" alt="Hình 4-1: Tâm của hệ lực song song" style="max-height: 320px;" />

<div class="figure-caption">

Hình 4-1

</div>

</div>

Vì rằng $\sum \vec{F}_k \neq \vec{0}$ nên hệ lực song song có hợp lực $\vec{R}$ song song với các lực thành phần. Từ công thức $(4-1)$ ta thấy rằng vị trí của tâm $C$ không phụ thuộc vào phương của các lực, mà chỉ phụ thuộc vào giá trị và vị trí của các điểm đặt của các lực. Do đó ta chỉ cần chứng minh rằng hợp lực $\vec{R}$ đi qua $C$, tức :

$$\vec{m}_c(\vec{R}) = \vec{0}$$

Kí hiệu $\vec{e}$ là vectơ đơn vị trên trục $\Delta$ có chiều phù hợp với chiều dương của trục $\Delta$. Rõ ràng ta có :

$$\vec{R} = \sum \vec{F}_k \, ; \quad \vec{R} = \overline{R} \cdot \vec{e} \, ; \quad \vec{F}_k = \overline{F}_k \vec{e} \, ; \quad \overline{R} = \sum \overline{F}_k \qquad \text{(a)}$$

Vì $\vec{R}$ là hợp lực của hệ lực, nên theo định lí Varinhông

$$\vec{m}_c(\vec{R}) = \sum \vec{m}_c(\vec{F}_k) \qquad \text{(b)}$$

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_2.svg" alt="Hình 4-2: Tam giác vectơ định vị O M_k C" style="max-height: 250px;" />

<div class="figure-caption">

Hình 4-2

</div>

</div>

Từ hình 4-2 ta có :

$$\sum \vec{M}_c(\vec{F}_k) = \sum \vec{\rho}_k \wedge \vec{F}_k = \sum (\vec{r}_k - \vec{r}_c) \wedge \vec{F}_k = \sum \vec{r}_k \wedge \vec{F}_k - \vec{r}_c \wedge \sum \vec{F}_k$$

[Đính chính bản in: Ở đẳng thức trên bản in dùng kí hiệu chữ hoa $\vec{M}_c(\vec{F}_k)$ cùng nghĩa với $\vec{m}_c(\vec{F}_k)$ ở $(b)$.]

Dựa vào $(4-1)$ và $(a)$ ta nhận được :

$$\vec{r}_c \wedge \sum \vec{F}_k = \frac{\sum \overline{F}_k \vec{r}_k}{\sum \overline{F}_k} \wedge \sum \overline{F}_k \vec{e} = \sum \vec{r}_k \wedge \overline{F}_k \vec{e} = \sum \vec{r}_k \wedge \vec{F}_k$$

Do đó từ $(b)$ ta có :

$$\vec{m}_c(\vec{R}) = \sum \vec{m}_c(\vec{F}_k) = \sum \vec{r}_k \wedge \vec{F}_k - \sum \vec{r}_k \wedge \vec{F}_k = \vec{0}$$

Đó là điều cần chứng minh.

---

## 4.2. Trọng Tâm Của Vật Rắn

### 4.2.1. Định Nghĩa và Công Thức Xác Định Trọng Tâm của Vật Rắn

Khảo sát vật rắn nằm gần quả đất. Chia vật rắn thành nhiều phần tử nhỏ. Mỗi phần tử chịu lực hút của quả đất, gọi là trọng lực hướng về tâm quả đất. Vì rằng các phần tử nằm gần quả đất nên khoảng cách từ chúng đến mặt đất bé hơn rất nhiều lần bán kính quả đất, nên hệ các trọng lực được xem là hệ lực song song cùng chiều. Giá trị của trọng lực được gọi là trọng lượng của phần tử.

Kí hiệu $M_k$ là một điểm nào đó thuộc phần tử thứ $k$, nó có trọng lượng là $\Delta P_k$ và $\vec{r}_k$ là vectơ định vị của điểm $M_k$. Dựa vào công thức $(4-1)$, tâm của hệ trọng lực được xác định nhờ biểu thức :

$$\vec{r}_c = \frac{\sum \Delta P_k \vec{r}_k}{\sum \Delta P_k}$$

Khi số phần tử được chia tăng lên vô cùng còn kích thước của các phần tử là những đại lượng vô cùng bé, thì $P = \lim \sum \Delta P_k$ được gọi là trọng lượng của vật rắn, còn điểm giới hạn của $C$ được gọi là trọng tâm $G$ của vật rắn. Vậy trọng tâm của vật rắn được xác định nhờ công thức sau :

$$\vec{r}_G = \frac{\lim \sum \Delta P_k \vec{r}_k}{P} \tag{4-2}$$

Từ đó ta nhận được công thức xác định các tọa độ của trọng tâm vật rắn

$$x_G = \frac{\lim \sum \Delta P_k x_k}{P} \, ; \quad y_G = \frac{\lim \sum \Delta P_k y_k}{P} \, ; \quad z_G = \frac{\lim \sum \Delta P_k z_k}{P} \tag{4-3}$$

Như đã biết :

$$\lim \sum \Delta P_k \vec{r}_k = \int_{(V)} \vec{r}\,dP$$

Nên các công thức $(4-2)$ và $(4-3)$ có thể viết trong dạng :

$$\begin{aligned}
\vec{r}_G &= \frac{1}{P} \int_{(V)} \vec{r}\,dP \\
x_G &= \frac{1}{P} \int_{(V)} x\,dP \, ; \\
y_G &= \frac{1}{P} \int_{(V)} y\,dP \, ; \\
z_G &= \frac{1}{P} \int_{(V)} z\,dP
\end{aligned} \tag{4-4}$$

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_3.svg" alt="Hình 4-3: Xác định trọng tâm của vật rắn trong không gian Oxyz" style="max-height: 300px;" />

<div class="figure-caption">

Hình 4-3

</div>

</div>

[Đính chính bản in: Trên Hình 4-3 của bản in gốc, vị trí trọng tâm vẫn in kí hiệu là $C$ (ứng với trọng tâm $G$ trong văn bản).]

---

### 4.2.2. Công Thức Xác Định Trọng Tâm của Các Vật Đồng Chất

1. Nếu vật là một khối đồng chất có thể tích $V$ và trọng lượng riêng $\rho$ thì $dP = \rho dV$, trong đó $dV$ là thể tích của phần tử vô cùng bé. Dễ dàng nhận được :

$$\vec{r}_G = \frac{1}{V} \iiint_{(V)} \vec{r}\,dV$$

$$x_G = \frac{1}{V} \iiint_{(V)} x\,dV \, ; \quad y_G = \frac{1}{V} \iiint_{(V)} y\,dV \, ; \quad z_G = \frac{1}{V} \iiint_{(V)} z\,dV \tag{4-5}$$

2. Nếu vật là một mặt đồng chất có diện tích $S$, tương tự trên ta có :

$$\vec{r}_G = \frac{1}{S} \iint_{(S)} \vec{r}\,dS$$

$$x_G = \frac{1}{S} \iint_{(S)} x\,dS \, ; \quad y_G = \frac{1}{S} \iint_{(S)} y\,dS \, ; \quad z_G = \frac{1}{S} \iint_{(S)} z\,dS \tag{4-6}$$

Đặc biệt, khi mặt là một tấm phẳng đồng chất có tiết diện $F$ thì :

$$x_G = \frac{1}{F} \iint_{(F)} x\,dF = \frac{S_y}{F} \, ; \quad y_G = \frac{1}{F} \iint_{(F)} y\,dF = \frac{S_x}{F} \tag{4-7}$$

$$S_x = \iint_F y\,dF \, ; \quad S_y = \iint_F x\,dF \tag{4-8}$$

được gọi là mô men tĩnh của tiết diện $F$ đối với trục $x$ và trục $y$ tương ứng.

3. Nếu vật là một đường đồng chất, có chiều dài $L$, thì :

$$\vec{r}_G = \frac{1}{L} \int_{(L)} \vec{r}\,dL$$

hoặc

$$x_G = \frac{1}{L} \int_{(L)} x\,dL \, ; \quad y_G = \frac{1}{L} \int_{(L)} y\,dL \, ; \quad z_G = \frac{1}{L} \int_{(L)} z\,dL \tag{4-9}$$

---

### 4.2.3. Các Định Lí Về Trọng Tâm của Vật Rắn

::: tip Định lí 1
Nếu vật rắn đồng chất có tâm (trục, mặt phẳng) đối xứng thì trọng tâm của nó nằm tại tâm (trục, mặt phẳng) đối xứng.
:::

*Chứng minh.* Ta chứng minh cho trường hợp vật đồng chất có tâm đối xứng. Trường hợp vật đồng chất có trục và mặt phẳng đối xứng sẽ được chứng minh tương tự.

Nếu vật rắn đồng chất có một tâm đối xứng $O$ thì ứng với phần tử $M_k$ có trọng lượng $\Delta P_k$ và vectơ định vị $\vec{r}_k$ thì có phần tử $M'_k$ có trọng lượng $\Delta P_k$ đối xứng qua tâm $O$, tức vectơ định vị của nó là $(-\vec{r}_k)$. Phân hoạch vật rắn thành từng cặp phần tử đối xứng qua tâm và tính tổng, ta có :

$$\vec{r}_G = \frac{\sum \Delta P_k \vec{r}_k - \sum \Delta P_k \vec{r}_k}{P} = \vec{0}$$

Đó là điều cần chứng minh.

---

::: tip Định lí 2
Nếu vật rắn gồm các phần mà trọng tâm của các phần đó nằm trên một đường thẳng (mặt phẳng) thì trọng tâm của vật cùng nằm trên đường thẳng (mặt phẳng) đó.
:::

*Chứng minh :* Giả sử vật rắn gồm nhiều phần có trọng tâm nằm trên cùng một mặt phẳng, ví dụ mặt phẳng $Oxy$.

Để xác định, giả sử rằng vật gồm $m$ phần có các trọng tâm là $G_1, G_2, \dots, G_m$ và trọng lực là $P_1, P_2, \dots, P_m$. Kí hiệu tọa độ các trọng tâm $G_i$ qua $x_i, y_i, z_i$ ($i = \overline{1, m}$). Rõ ràng :

$$z_i = 0 \quad (i = \overline{1, m}) \qquad \text{(a)}$$

Áp dụng công thức tính trọng tâm $(4-1)$ cho phần thứ $i$, ta có :

$$z_i = \frac{\displaystyle\sum_{(i)} \Delta P_k z_k}{P_i} \, ; \quad (i = \overline{1, m})$$

[Đính chính bản in: Công thức xác định tọa độ trọng tâm ở $(4-3)$ (với giới hạn) được sách in nhầm số hiệu thành $(4-1)$ (hoặc hiểu theo công thức tâm hệ lực song song $(4-1)$ áp dụng cho hệ hữu hạn các phần tử $\Delta P_k$).]

Do $(a)$ ta có

$$\sum_{(i)} \Delta P_k z_k = 0 \, ; \quad (i = \overline{1, m}) \qquad \text{(b)}$$

Để tính trọng tâm của vật ta phân hoạch vật thành các phần tử lần lượt theo các phần của vật từ phần thứ $1$ đến phần thứ $m$. Bằng cách này ta có :

$$z_G = \frac{\displaystyle\sum_{(1)} \Delta P_k z_k + \sum_{(2)} \Delta P_k z_k + \dots + \sum_{(m)} \Delta P_k z_k}{P_1 + P_2 + \dots + P_m}$$

Khi dựa vào $(b)$ ta có : $z_G = 0$.

Đó là điều cần chứng minh.

Bằng cách tương tự ta chứng minh cho trường hợp vật rắn gồm nhiều phần có các trọng tâm nằm trên một đường thẳng.

Áp dụng các định lí trên ta tìm ngay được:

*a) Trọng tâm của một thanh đồng chất là điểm giữa của thanh.*

*b) Trọng tâm các hình bình hành, chữ nhật, hình vuông, khối hộp, khối hộp chữ nhật, khối lập phương đồng chất là tâm của chúng.*

*c) Trọng tâm của tam giác đồng chất là giao điểm của các trung tuyến.*

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_4.svg" alt="Hình 4-4: Trọng tâm của tam giác đồng chất" style="max-height: 270px;" />

<div class="figure-caption">

Hình 4-4

</div>

</div>

Thực vậy phân hoạch tam giác $\overset{\Delta}{ABC}$ thành vô hạn các dải vô cùng mảnh song song với đáy tam giác, thí dụ, đáy $BC$. Trọng tâm của mỗi dải nằm tại trung điểm của dải. Vậy theo định lí 2 trọng tâm của tam giác phải nằm trên đường trung tuyến $AA'$. Tương tự như trên, chứng minh được rằng trọng tâm tam giác cũng nằm trên các trung tuyến $BB'$ và $CC'$. Vậy trọng tâm của tam giác phải nằm trên cả ba trung tuyến nên phải nằm tại giao của chúng (H. 4-4).

*d) Trọng tâm của tứ diện đồng chất.* Phân hoạch tứ diện $ABCD$ thành những lát vô cùng mỏng hình tam giác song song với đáy, thí dụ, đáy $\overset{\Delta}{BCD}$. Trọng tâm của mỗi lát nằm tại các giao điểm các trung tuyến của chúng. Vậy trọng tâm của tứ diện phải nằm trên đoạn $AA'$ theo định lí 2. Tương tự chứng minh được rằng trọng tâm của tứ diện cùng nằm trên các đoạn $BB'$ và $CC'$ (H. 4-5). Vậy trọng tâm $G$ của tứ diện là giao điểm của các đường $AA'$, $BB'$ và $CC'$, dễ dàng tìm được :

$$GA' = \frac{1}{3} GA \tag{4-10}$$

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_5.svg" alt="Hình 4-5: Trọng tâm của tứ diện đồng chất" style="max-height: 300px;" />

<div class="figure-caption">

Hình 4-5

</div>

</div>

*e) Trọng tâm của cung tròn đồng chất $AB$ có bán kính $R$ và góc tại tâm $AOB = 2\alpha$. (H. 4-6).*

Đầu tiên nhận xét là trọng tâm $G$ của cung nằm trên trục đối xứng $Ox$ và độ dài của cung $L = 2\alpha R$.

Chia cung tròn $AB$ thành vô hạn cung vô cùng bé $\widehat{MM'}$ có vị trí xác định bởi góc $\varphi = \widehat{GOM}$ và có góc ở tâm là $d\varphi = \widehat{MOM'}$, chiều dài $dl = R d\varphi$.

Chú ý rằng hoành độ của cung $\widehat{MM'}$ là :

$$x_M = x = R \cos\varphi$$

Theo công thức $(4-9)$, ta có :

$$x_G = \frac{1}{L} \int x\,dL = \frac{1}{2\alpha R} \int_{-\alpha}^{\alpha} R \cos\varphi \, R\,d\varphi = \frac{\sin\alpha}{\alpha} R \tag{4-11a}$$

Nếu cung $AB$ là nửa đường tròn, tức $\alpha = \frac{\pi}{2}$ thì :

$$x_G = \frac{2R}{\pi} \tag{4-11b}$$

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_6.svg" alt="Hình 4-6: Trọng tâm của cung tròn đồng chất" style="max-height: 270px;" />

<div class="figure-caption">

Hình 4-6

</div>

</div>

*f) Trọng tâm của một quạt tròn đồng chất $AOB$ tâm $O$, có bán kính $R$ và góc tại tâm $AOB = 2\alpha$ (H. 4-7).*

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_7.svg" alt="Hình 4-7: Trọng tâm của quạt tròn đồng chất" style="max-height: 270px;" />

<div class="figure-caption">

Hình 4-7

</div>

</div>

Ta chia quạt tròn thành vô số hình quạt nhỏ, mỗi hình quạt có thể được xem là một tam giác có trọng tâm nằm ở $\frac{2}{3}$ bán kính, có góc mở là $d\varphi$, có đáy bằng $R d\varphi$ và diện tích $dF = \frac{1}{2} R^2 d\varphi$, vị trí của nó được xác định bằng góc $\varphi$.

Chú ý rằng quạt tròn $AOB$ có trọng tâm nằm trên trục đối xứng $Ox$, có diện tích $F = R^2 \alpha$, áp dụng công thức $(4-8)$, trong đó hoành độ của quạt phần tử ứng với góc $\varphi$ là $x = \frac{2}{3} R \cos\varphi$, ta có :

$$x_G = \frac{1}{R^2 \alpha} \int_{-\alpha}^{\alpha} \frac{2}{3} R \cos\varphi \, \frac{1}{2} R^2 d\varphi = \frac{2}{3} R \frac{\sin\alpha}{\alpha} \tag{4-12a}$$

[Đính chính bản in: Công thức xác định tọa độ trọng tâm tấm phẳng là $(4-7)$ (thay vì $(4-8)$ là công thức mô men tĩnh).]

Nếu quạt $AOB$ là nửa mặt tròn, tức $\alpha = \frac{\pi}{2}$, thì

$$x_G = \frac{4}{3} \frac{R}{\pi} \tag{4-12b}$$

Chú ý rằng các kết quả vừa tìm được có thể suy trực tiếp từ kết quả của trường hợp e), ở đó bán kính được thay bằng $\frac{2}{3} R$.

*g) Trọng tâm của bán cầu đồng chất tâm $O$, bán kính $R$ (H. 4-8).*

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_8.svg" alt="Hình 4-8: Trọng tâm của bán cầu đồng chất" style="max-height: 290px;" />

<div class="figure-caption">

Hình 4-8

</div>

</div>

Do đối xứng nên trọng tâm của bán cầu nằm trên trục $Oz$. Chia bán cầu thành vô hạn lát mỏng song song với đáy, tức vuông góc với trục $Oz$.

Xét một lát, vị trí của nó được xác định bởi cao độ $z$ và có độ dày $dz$, ta có :

$$dV = \pi r^2 dz = \pi (R^2 - z^2) dz.$$

Chú ý rằng thể tích bán cầu là $V = \frac{2}{3} \pi R^3$, theo công thức $(4-6)$, ta có :

$$z_G = \frac{1}{V} \iiint dV = \frac{1}{\frac{2}{3}\pi R^3} \int_{0}^{R} z \pi (R^2 - z^2) dz = \frac{3}{8} R \tag{4-13}$$

[Đính chính bản in: Công thức thể tích đồng chất là $(4-5)$ (không phải $(4-6)$), và tích phân bội ba trong biểu thức $(4-13)$ bị in thiếu biến $z$ dưới dấu tích phân: đúng là $z_G = \frac{1}{V} \iiint_{(V)} z\,dV$.]

---

::: tip Định lí 3
Nếu vật rắn được ghép từ $m$ phần, mỗi phần có trọng lượng $P_i$ và trọng tâm tại $C_i (x_i, y_i, z_i)$, thì trọng tâm của vật được xác định nhờ công thức :

$$x_G = \frac{\displaystyle\sum_{i=1}^m P_i x_i}{\displaystyle\sum_{i=1}^m P_i} \, ; \quad y_G = \frac{\displaystyle\sum_{i=1}^m P_i y_i}{\displaystyle\sum_{i=1}^m P_i} \, ; \quad z_G = \frac{\displaystyle\sum_{i=1}^m P_i z_i}{\displaystyle\sum_{i=1}^m P_i} \tag{4-14}$$
:::

Công thức $(4-14)$ còn được gọi là công thức tính trọng tâm vật ghép.

*Chứng minh.* Kí hiệu vectơ định vị của $G$ và $C_i$ tương ứng qua $\vec{r}_G$ và $\vec{r}_i$. Để chứng minh công thức $(4-14)$, ta chỉ cần chứng minh công thức :

$$\vec{r}_G = \frac{\displaystyle\sum_{i=1}^m P_i \vec{r}_i}{\displaystyle\sum_{i=1}^m P_i} \qquad \text{(a)}$$

Vì $G_i$ là trọng tâm của phần thứ $i$, nên theo $(4-2)$, ta có

$$\vec{r}_i = \frac{\displaystyle\lim \sum_{(i)} \Delta P_k \vec{r}_k}{P_i}$$

[Đính chính bản in: Phát biểu định lí kí hiệu trọng tâm phần thứ $i$ là $C_i$, còn trong chứng minh kí hiệu là $G_i$.]

Từ đó :

$$\lim \sum_{(i)} \Delta P_k \vec{r}_k = P_i \vec{r}_i \qquad \text{(b)}$$

Để tính trọng tâm vật rắn, ta phân hoạch vật rắn thành các phần tử vô cùng bé theo từng phần tạo nên vật ghép, ta có :

$$\vec{r}_G = \frac{\displaystyle\lim \sum_{(1)} \Delta P_k \vec{r}_k + \dots + \lim \sum_{(m)} \Delta P_k \vec{r}_k}{P_1 + \dots + P_m} \qquad \text{(c)}$$

Khi thay $(b)$ vào $(c)$ ta có ngay $(a)$. Đó là điều cần chứng minh.

Chú ý rằng công thức $(4-14)$ vẫn áp dụng được cho vật khuyết, ở đó phần khuyết được xem là phần ghép có trọng lượng âm.

::: tip Thí dụ 4-1
Tìm trọng tâm của tấm đồng chất hình chữ $L$ có kích thước cho trên hình 4-9.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_9.svg" alt="Hình 4-9: Tấm đồng chất hình chữ L" style="max-height: 300px;" />

<div class="figure-caption">

Hình 4-9

</div>

</div>

**Bài giải**

Chia tấm chữ $L$ thành hai tấm chữ nhật có trọng tâm $G_1$ và $G_2$, có các tọa độ : $x_1 = 1$, $y_1 = 5$; $x_2 = 3$, $y_2 = 1$.

Diện tích của các tấm chữ nhật là $S_1 = 20\text{ cm}^2$ ; $S_2 = 4\text{ cm}^2$. Vì tấm đồng chất nên công thức $(4-14)$ được viết như sau :

$$x_G = \frac{S_1 x_1 + S_2 x_2}{S_1 + S_2} = \frac{4}{3}\text{ cm} \, ;$$

$$y_G = \frac{S_1 y_1 + S_2 y_2}{S_1 + S_2} = 4{,}3\text{ cm}$$

[Đính chính bản in: Giá trị chính xác là $y_G = \frac{20 \cdot 5 + 4 \cdot 1}{20 + 4} = \frac{104}{24} = \frac{13}{3} \approx 4{,}33\text{ cm}$; sách gốc làm tròn thành $4{,}3\text{ cm}$.]
:::

::: tip Thí dụ 4-2
Tìm trọng tâm của tấm tròn đồng chất tâm $O$, bán kính $R$, bị khuyết một mảnh tròn tâm $A$ bán kính $r$, biết $OA = a < R$, $a + r < R$, (H. 4-10).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_10.svg" alt="Hình 4-10: Tấm tròn đồng chất bị khuyết một mảnh tròn" style="max-height: 300px;" />

<div class="figure-caption">

Hình 4-10

</div>

</div>

**Bài giải**

Xem tấm bị khuyết là kết quả của việc ghép tấm tròn nguyên có trọng tâm tại $O \, (0, 0)$, diện tích $S_1 = \pi R^2$ với mảnh tròn có trọng tâm tại $A \, (a, 0)$, diện tích tấm $S_2 = -\pi r^2$.

Do tấm có trục $Ox$ đối xứng nên trọng tâm nằm trên trục này và do tấm đồng chất nên công thức $(4-14)$ có dạng :

$$x_G = \frac{S_1 x_1 + S_2 x_2}{S_1 + S_2} = \frac{\pi R^2 \cdot 0 - \pi r^2 a}{\pi R^2 - \pi r^2} = -\frac{a r^2}{R^2 - r^2}$$

dấu $-$ chứng tỏ $G$ nằm bên trái tâm $O$.
:::

---

::: tip Định lí 4 (công thức Guynđanh 1)
Diện tích $S$ sinh ra bởi đường cong phẳng $C$ khi quay quanh trục đồng phẳng $\Delta$ nhưng không cắt nó, được xác định bởi công thức

$$S = 2\pi L d \tag{4-15}$$
:::

trong đó : $L$ là độ dài của đường cong $C$, còn $d$ là khoảng cách từ trọng tâm $G$ của đường cong đến trục $\Delta$.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_11.svg" alt="Hình 4-11: Chứng minh công thức Guynđanh 1" style="max-height: 290px;" />

<div class="figure-caption">

Hình 4-11

</div>

</div>

*Chứng minh.* Trong mặt phẳng chứa đường cong $C$ chọn trục $Ox$ thẳng góc với trục $\Delta$ tại $O$ (H. 4-11), chia đường cong $C$ ra vô hạn các cung vô cùng bé. Ta xét cung $\widehat{MM'}$ có độ dài $dl$. Hoành độ của trọng tâm $G$ của cung $AB$ dựa vào $(4-9)$ là

$$d = x_G = \frac{1}{L} \int x\,dl \qquad \text{(a)}$$

Khi đường cong $C$ quay quanh trục $\Delta$ cung vô cùng bé $\widehat{MM'}$ quét ra một diện tích $dS = 2\pi x\,dl$, nên diện tích do đường cong $C$ quét ra là :

$$S = \int ds = \int 2\pi x\,dl = 2\pi \int x\,dl \qquad \text{(b)}$$

Từ $(a)$ và $(b)$, ta nhận được $(4-15)$. Đó là điều cần phải chứng minh.

---

::: tip Định lí 5 (công thức Guynđanh 2)
Thể tích $V$ sinh ra bởi tấm phẳng khi quay quanh trục đồng phẳng và không cắt nó, được xác định bởi công thức :

$$V = 2\pi S d \tag{4-16}$$
:::

trong đó : $S$ là diện tích tấm phẳng, $d$ là khoảng cách từ trọng tâm tấm phẳng đến trục $\Delta$ (H. 4-12).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_12.svg" alt="Hình 4-12: Chứng minh công thức Guynđanh 2" style="max-height: 280px;" />

<div class="figure-caption">

Hình 4-12

</div>

</div>

*Chứng minh.* Tương tự như trên, chia tấm phẳng thành vô hạn diện tích vô cùng bé $dS$. Hoành độ trọng tâm của tấm, theo công thức $(4-7)$ sẽ là :

$$d = x_G = \frac{1}{S} \int x\,dS \qquad \text{(a)}$$

Khi tấm quay quanh trục $\Delta$, diện tích $dS$ có hoành độ $x$ sẽ tạo nên thể tích $dV = 2\pi x\,dS$.

Thể tích do tấm quay quanh trục $\Delta$ sinh ra sẽ là :

$$V = \int dV = \int 2\pi x\,dS = 2\pi \int x\,dS \qquad \text{(b)}$$

Từ $(a)$ và $(b)$ ta nhận được $(4-16)$. Đó là điều cần phải chứng minh.

::: tip Thí dụ 4-3
Tìm trọng tâm của nửa đường tròn tâm $O$ bán kính $R$.

**Bài giải**

Cho nửa đường tròn quay quanh đường kính đáy của nó, được mặt cầu diện tích $S = 4\pi R^2$ kí hiệu $d$ là khoảng cách từ trọng tâm $G$ đến đường kính đáy. Công thức Guynđanh $(4-15)$ cho ta :

$$4\pi R^2 = 2\pi d L = 2\pi d \pi R$$

Từ đó, ta nhận được : $d = \frac{2R}{\pi}$ nó trùng với kết quả $(4-11b)$ đã được tìm ở trên.
:::

::: tip Thí dụ 4-4
Tìm thể tích của khối xuyến sinh ra bởi tấm tròn tâm $A$, bán kính $r$ khi quay quanh trục $\Delta$ đồng phẳng, cách $A$ một đoạn $R > r$ (H. 4-13).

**Bài giải**

Diện tích tấm tròn là $S = \pi r^2$, trọng tâm tấm tròn là $A$, nằm cách trục $\Delta$ một đoạn $d = R > r$.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_13.svg" alt="Hình 4-13: Thể tích khối xuyến" style="max-height: 260px;" />

<div class="figure-caption">

Hình 4-13

</div>

</div>

Công thức Guynđanh $(4-16)$ cho thể tích khối xuyến :

$$V = 2\pi d S = 2\pi^2 r^2 R$$
:::

::: tip Thí dụ 4-5
Tìm trọng tâm của một nửa tấm tròn tâm $O$, bán kính $R$ (H. 4-14).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_4_14.svg" alt="Hình 4-14: Trọng tâm của một nửa tấm tròn" style="max-height: 270px;" />

<div class="figure-caption">

Hình 4-14

</div>

</div>

**Bài giải**

Do tính đối xứng, trọng tâm của nửa tấm tròn sẽ nằm trên trục $Ox$ vuông góc với đường kính đáy của tấm.

Cho tấm quay quanh đường kính đáy ta được khối cầu có thể tích $V = \frac{4}{3}\pi R^3$.

Theo công thức Guynđanh $(4-16)$, ta có : $\frac{4}{3}\pi R^3 = 2\pi x_G \cdot \frac{1}{2}\pi R^2$

Từ đó :

$$x_G = 4R / 3\pi$$

[Đính chính bản in: Kí hiệu $4R / 3\pi$ trong sách được hiểu là $\frac{4R}{3\pi}$.]

Ta tìm lại được kết quả $(4-12b)$ ở trên.
:::
