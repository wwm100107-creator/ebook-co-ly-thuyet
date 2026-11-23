# Chương 2: Hệ Lực Không Gian

Hệ lực không gian là hệ lực có đường tác dụng các lực nằm tùy ý trong không gian.

Hệ lực không gian là hệ lực tổng quát nhất. Vì vậy các kết quả nhận được khi khảo sát hệ lực không gian dễ dàng áp dụng cho các hệ lực đồng quy, hệ ngẫu lực, hệ lực song song, hệ lực phẳng, chúng được xem như là các trường hợp riêng.

Hai vấn đề chính được khảo sát trong hệ lực không gian:
- Thu gọn hệ lực không gian về dạng tối giản (dạng chuẩn).
- Tìm điều kiện cân bằng của hệ lực không gian.

Phương pháp khảo sát hệ lực không gian trong tĩnh học là phương pháp hình học, dựa trên hai đặc trưng hình học của nó là vectơ chính và mô men chính.

---

## 2.1. Vectơ chính và mô men chính của hệ lực không gian {#_2-1-vecto-chinh-va-momen-chinh-cua-he-luc-khong-gian}

### 2.1.1. Vectơ chính của hệ lực không gian

#### 1. Định nghĩa

::: tip Định nghĩa
*Vectơ chính của hệ lực không gian, kí hiệu $\vec{R}'$, là tổng hình học của các vectơ biểu diễn các lực của hệ lực.*

$$\vec{R}' = \vec{F}_1 + \vec{F}_2 + \dots + \vec{F}_n = \sum_{k=1}^n \vec{F}_k \tag{2-1}$$
:::

#### 2. Phương pháp xác định vectơ chính

**a) *Phương pháp vẽ:*** để xác định vectơ chính có thể vẽ (trên hình vẽ xét hệ lực gồm bốn lực) đa giác lực. Muốn vậy, từ một điểm bất kì ta vẽ nối tiếp những vectơ song song cùng chiều và có trị số bằng các vectơ biểu diễn các lực của hệ lực. Đường gãy khúc nhận được gọi là đa giác lực. Vectơ $\overrightarrow{OD}$ được gọi là vectơ khép kín đa giác lực, (H. 2–1). Vậy: *Vectơ chính của hệ lực chính là vectơ khép kín của đa giác lực.*

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_1.svg" alt="Hình 2-1: Đa giác lực và vectơ khép kín R'" style="max-height: 250px;" />

<div class="figure-caption">

Hình 2-1: Đa giác lực $OABCD$ và vectơ khép kín $\vec{R}'$

</div>

</div>

Trong trường hợp hệ lực phẳng, đa giác lực là đa giác phẳng, còn trong trường hợp hệ lực không gian, đa giác lực, nói chung là đa giác ghềnh.

**b) *Phương pháp chiếu:*** Dựa vào công thức $(2-1)$, vectơ chính có thể được xác định qua các hình chiếu của nó theo các hình chiếu của các lực của hệ lực trên các trục tọa độ vuông góc $Oxyz$.

$$\vec{R}' \begin{cases} R'_x = F_{1x} + F_{2x} + \dots + F_{nx} = \displaystyle\sum_{k=1}^n F_{kx} \\ R'_y = F_{1y} + F_{2y} + \dots + F_{ny} = \displaystyle\sum_{k=1}^n F_{ky} \\ R'_z = F_{1z} + F_{2z} + \dots + F_{nz} = \displaystyle\sum_{k=1}^n F_{kz} \end{cases} \tag{2-1'}$$

Từ đó mô đun và phương chiếu của vectơ chính được xác định theo công thức:

$$R' = \sqrt{R'^2_x + R'^2_y + R'^2_z} \tag{2-2}$$

$$\cos\alpha = \frac{R'_x}{R'}; \quad \cos\beta = \frac{R'_y}{R'}; \quad \cos\gamma = \frac{R'_z}{R'} \tag{2-3}$$

trong đó: $\alpha, \beta, \gamma$ là góc hợp bởi vectơ chính với các trục tọa độ.

Như vậy, vectơ chính là vectơ tự do.

---

### 2.1.2. Mô men chính của hệ lực không gian đối với một tâm {#_2-1-2-momen-chinh-cua-he-luc-đoi-voi-mot-điem}

#### 1. Định nghĩa

::: tip Định nghĩa
*Mô men chính của hệ lực không gian đối với tâm $O$, kí hiệu $\vec{M}^O$ là một vectơ bằng tổng hình học các vectơ mô men của các lực thuộc hệ lực đối với tâm $O$:*

$$\vec{M}^O = \sum_{k=1}^n \vec{m}^O(\vec{F}_k) = \sum_{k=1}^n \vec{r}_k \wedge \vec{F}_k \tag{2-4}$$
:::

#### 2. Phương pháp xác định

**a) *Phương pháp vẽ:*** dựa vào công thức $(2-4)$ ta thấy ngay rằng vectơ mô men chính của hệ lực đối với tâm $O$ là vectơ khép kín của đa giác vectơ, có các cạnh là các vectơ song song cùng chiều và có trị số bằng các vectơ mô men của các lực đối với điểm $O$. Đa giác vectơ đó được gọi là đa giác vectơ mô men, được xây dựng tương tự đa giác lực, ở đó các lực được thay bằng mô men của nó đối với tâm $O$. Vậy: *Mô men chính của hệ lực đối với một tâm bằng vectơ khép kín của đa giác vectơ mô men.*

**b) *Phương pháp chiếu:*** gọi hình chiếu của vectơ mô men chính của hệ lực đối với tâm $O$ trên hệ trục tọa độ vuông góc $Oxyz$ lần lượt là $\overline{M}^{Ox}, \overline{M}^{Oy}, \overline{M}^{Oz}$ và áp dụng định lí liên hệ giữa mô men của lực đối với một điểm và mô men của lực đối với một trục, ta có:

$$\vec{M}^O \begin{cases} \overline{M}^{Ox} = \displaystyle\sum_{k=1}^n \overline{m}_{Ox}(\vec{F}_k) = \displaystyle\sum_{k=1}^n \overline{m}_x(\vec{F}_k) = \displaystyle\sum_{k=1}^n (y_k F_{kz} - z_k F_{ky}) \\ \overline{M}^{Oy} = \displaystyle\sum_{k=1}^n \overline{m}_{Oy}(\vec{F}_k) = \displaystyle\sum_{k=1}^n \overline{m}_y(\vec{F}_k) = \displaystyle\sum_{k=1}^n (z_k F_{kx} - x_k F_{kz}) \\ \overline{M}^{Oz} = \displaystyle\sum_{k=1}^n \overline{m}_{Oz}(\vec{F}_k) = \displaystyle\sum_{k=1}^n \overline{m}_z(\vec{F}_k) = \displaystyle\sum_{k=1}^n (x_k F_{ky} - y_k F_{kx}) \end{cases}$$

trong đó: $x_k, y_k, z_k$ là tọa độ của điểm đặt của lực $\vec{F}_k$; $F_{kx}, F_{ky}, F_{kz}$ lần lượt là hình chiếu của lực $\vec{F}_k$ trên các trục $Ox, Oy, Oz$.

#### 3. Định lí biến thiên mô men chính

Vectơ mô men chính của hệ lực đối với tâm $O$, thay đổi khi tâm $O$ thay đổi. Ta có:

::: tip Định lí
*Biến thiên mô men chính của hệ lực khi tâm lấy mô men thay đổi từ $O$ đến $O'$ bằng mô men của vectơ chính đặt tại $O$ lấy đối với điểm $O'$:*

$$\vec{M}^{O'} - \vec{M}^O = \vec{m}_{O'}(\vec{R}'_O) \tag{2-5}$$
:::

*Chứng minh:* theo định nghĩa mô men chính của hệ lực đối với một tâm [xem công thức $(2-4)$, ta có (H. 2–2)]:

$$\vec{M}^{O'} = \sum_{k=1}^n \vec{m}_{O'}(\vec{F}_k) = \sum_{k=1}^n \vec{r}'_k \wedge \vec{F}_k$$

$$\vec{M}^O = \sum_{k=1}^n \vec{m}_O(\vec{F}_k) = \sum_{k=1}^n \vec{r}_k \wedge \vec{F}_k$$

Vậy:

$$\begin{aligned}
\vec{M}^{O'} - \vec{M}^O &= \sum_{k=1}^n (\vec{r}'_k \wedge \vec{F}_k) - \sum_{k=1}^n (\vec{r}_k \wedge \vec{F}_k) \\
&= \sum_{k=1}^n (\vec{r}'_k - \vec{r}_k) \wedge \vec{F}_k = \sum_{k=1}^n \overrightarrow{O'O} \wedge \vec{F}_k \\
&= \overrightarrow{O'O} \wedge \sum_{k=1}^n \vec{F}_k = \overrightarrow{O'O} \wedge \vec{R}' = \vec{m}_{O'}(\vec{R}'_O)
\end{aligned}$$

Đó là điều cần chứng minh.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_2.svg" alt="Hình 2-2: Minh họa định lí biến thiên mô men chính" style="max-height: 240px;" />

<div class="figure-caption">

Hình 2-2: Định lí biến thiên mô men chính khi dời tâm từ $O$ đến $O'$

</div>

</div>

Trong trường hợp hệ lực phẳng, khi sử dụng công thức $(2-4)$ để tính mô men chính của hệ lực đối với tâm $O$ nằm trong mặt phẳng tác dụng của hệ lực, ta có:

$$\overline{M}^O = \sum_{k=1}^n \overline{m}_O(\vec{F}_k) \tag{2-6}$$

*Vậy: Mô men chính của hệ lực phẳng đối với tâm $O$ là lượng đại số bằng tổng đại số các mô men của các lực của hệ lực đối với tâm $O$.*

---

## 2.2. Thu gọn hệ lực không gian {#_2-2-thu-gon-he-luc-khong-gian}

### 2.2.1. Thu gọn hệ lực không gian về tâm O

#### 1. Định lí dời lực song song

::: tip Định lí dời lực song song
*Lực $\vec{F}$ đặt tại $A$ tương đương với lực $\vec{F}'$ song song cùng chiều, cùng cường độ với lực $\vec{F}$ nhưng đặt tại $O$ và một ngẫu lực có mô men bằng mô men của lực $\vec{F}$ đối với điểm $O$.*
:::

*Chứng minh.* Áp dụng tiên đề 2, đặt tại $O$ hai lực cân bằng $(\vec{F}', \vec{F}'')$, trong đó lực $\vec{F}'$ có cùng phương chiều và cường độ với lực $\vec{F}$. Ta có:

$$\vec{F} \equiv (\vec{F}', \vec{F}, \vec{F}'') \equiv \vec{F}' \text{ và } (\vec{F}, \vec{F}'')$$

Lực $\vec{F}'$ chính là lực $\vec{F}$ dời song song đến $O$, còn hệ gồm hai lực $(\vec{F}, \vec{F}'')$ là ngẫu lực, có vectơ mô men $\vec{M} = \vec{m}_O(\vec{F})$, (H. 2–3). Đó là điều cần chứng minh.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_3.svg" alt="Hình 2-3: Định lí dời lực song song" style="max-height: 230px;" />

<div class="figure-caption">

Hình 2-3: Định lí dời lực song song

</div>

</div>

*Nhận xét:* Vectơ mô men ngẫu lực $\vec{M} = \vec{m}_O(\vec{F})$ vuông góc với lực $\vec{F}$, tức lực $\vec{F}$ nằm trong mặt phẳng tác dụng của ngẫu lực. Vậy hệ lực gồm một lực $\vec{F}$ và ngẫu lực có vectơ mô men $\vec{M}$ vuông góc với $\vec{F}$ (tức ngẫu lực và lực cùng nằm trong một mặt phẳng) sẽ tương đương với một lực, tức có hợp lực $\vec{R} = \vec{F}$ và $\vec{m}_O(\vec{R}) = \vec{M}$.

#### 2. Thu gọn hệ lực không gian về một tâm

Giả sử có hệ lực không gian $(\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n)$. Để thu gọn hệ lực này về tâm $O$ ta lần lượt thu gọn từng lực về tâm $O$ nhờ áp dụng định lí dời lực song song.

Cụ thể, (H. 2–4):

$$\vec{F}_1 = \vec{F}'_1 \text{ và ngẫu lực } \vec{M}_1 = \vec{m}_O(\vec{F}_1)$$

$$\vec{F}_2 = \vec{F}'_2 \text{ và ngẫu lực } \vec{M}_2 = \vec{m}_O(\vec{F}_2)$$

$$\dots\dots$$

$$\vec{F}_n = \vec{F}'_n \text{ và ngẫu lực } \vec{M}_n = \vec{m}_O(\vec{F}_n).$$

Vậy hệ lực đã cho $(\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n)$ tương đương với hệ lực đồng quy tại $O$ $(\vec{F}'_1, \vec{F}'_2, \dots, \vec{F}'_n)$ và hệ ngẫu lực $(\vec{M}_1, \vec{M}_2, \dots, \vec{M}_n)$.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_4.svg" alt="Hình 2-4: Thu gọn hệ lực không gian về một tâm O" style="max-height: 250px;" />

<div class="figure-caption">

Hình 2-4: Thu gọn hệ lực không gian về tâm $O$

</div>

</div>

Như đã biết hệ lực đồng quy có hợp lực qua $O$, được biểu diễn bằng vectơ chính của hệ lực đặt tại $O$.

Gọi $\vec{R}'_O$ là hợp lực của hệ lực đồng quy, ta có:

$$\vec{R}'_O = \sum_{k=1}^n \vec{F}'_k = \sum_{k=1}^n \vec{F}_k = \vec{R}'.$$

khi dựa vào $(2-1)$.

Hệ ngẫu lực $(\vec{M}_1, \vec{M}_2, \dots, \vec{M}_n)$, như đã chứng minh, tương đương với một ngẫu lực, có vectơ mô men $\vec{M}$:

$$\vec{M} = \vec{M}_1 + \vec{M}_2 + \dots + \vec{M}_n = \vec{m}_O(\vec{F}_1) + \dots + \vec{m}_O(\vec{F}_n) = \sum_{k=1}^n \vec{m}_O(\vec{F}_k) = \vec{M}^O$$

khi dựa vào $(2-4)$.

Tâm $O$ được gọi là tâm thu gọn. Ta có định lí sau:

::: tip Định lí
*Hệ lực không gian bất kì tương đương với một lực và một ngẫu lực đặt tại một điểm tùy ý, chúng được gọi là lực thu gọn và ngẫu lực thu gọn. Lực thu gọn được biểu diễn bằng vectơ chính của hệ lực đặt tại tâm thu gọn, còn ngẫu lực thu gọn có vectơ mô men bằng mô men chính của hệ lực đối với tâm thu gọn.*
:::

#### 3. Các bất biến của hệ lực không gian

Kết quả thu gọn của hệ lực không gian về một tâm được biểu diễn qua vectơ chính và mô men chính của hệ lực. Vectơ chính của hệ lực rõ ràng không biến đổi khi tâm thu gọn thay đổi. Vậy:

*Vectơ chính là một đại lượng bất biến (bất biến thứ nhất) của hệ lực không gian.*

Mô men chính của hệ lực phụ thuộc vào tâm thu gọn. Sự biến thiên của mô men chính khi tâm thu gọn thay đổi tuân theo công thức $(2-5)$:

$$\vec{M}^{O'} - \vec{M}^O = \vec{m}_{O'}(\vec{R}'_O)$$

Khi chú ý rằng vectơ chính là đại lượng bất biến (có phương chiều và mô đun không đổi) và vuông góc với $\vec{m}_{O'}(\vec{R}'_O)$, ta có:

$$\vec{M}^{O'} \cdot \vec{R}'_O - \vec{M}^O \cdot \vec{R}'_O = \vec{m}_{O'}(\vec{R}'_O) \cdot \vec{R}'_O = 0 \quad \text{tức là:}$$

$$\vec{M}^{O'} \cdot \vec{R}'_{O'} = \vec{M}^O \cdot \vec{R}'_O = \text{hằng} \tag{2-7}$$

là đại lượng bất biến (bất biến thứ hai) của hệ lực không gian, tức tích vô hướng của vectơ chính và mô men chính là đại lượng bất biến.

Bất biến thứ hai của hệ lực không gian biểu diễn tính chất sau:

*Hình chiếu của vectơ mô men chính lên phương vectơ chính là đại lượng không đổi.*

Cần chú ý rằng bất biến thứ hai có ý nghĩa chỉ khi bất biến thứ nhất khác không. Trong trường hợp bất biến thứ nhất bằng không thì mô men chính của hệ lực là đại lượng bất biến. Điều này rút ra trực tiếp từ định lí biến thiên mô men chính.

---

### 2.2.2. Các trường hợp xảy ra {#_2-2-2-cac-truong-hop-toi-gian-cua-he-luc}

Khi thu gọn hệ lực không gian về một tâm $O$ cho trước có thể gặp các trường hợp sau:

**1)** $\vec{R}'_O = \vec{0}; \; \vec{M}^O = \vec{0}$, tức khi thu gọn hệ lực không gian về $O$, lực thu gọn và ngẫu lực thu gọn đều bằng không. Khi đó ta nói rằng hệ lực không gian tương đương không tại $O$, tức hệ lực không gian cân bằng.

**2)** $\vec{R}'_O = \vec{0}; \; \vec{M}^O \neq \vec{0}$; tức hệ lực không gian đã cho tương đương với một ngẫu lực tại $O$, có vectơ mô men bằng mô men chính của hệ lực đối với tâm thu gọn.

**3)** $\vec{R}'_O \neq \vec{0}; \; \vec{M}^O = \vec{0}$, trong trường hợp này hệ lực không gian tương đương với một lực tại $O$, tức hệ lực không gian có hợp lực được biểu diễn bằng vectơ chính đặt tại $O$.

**4)** $\vec{R}'_O \neq \vec{0}, \; \vec{M}^O \neq \vec{0}$, tức lực thu gọn và ngẫu lực thu gọn tại tâm thu gọn đều khác không.

Trong trường hợp này tùy thuộc quan hệ giữa lực thu gọn và ngẫu lực thu gọn (mặt phẳng của ngẫu lực thu gọn) ta sẽ có các kết quả khác nhau. Cụ thể:

**a)** $\vec{R}'_O \perp \vec{M}^O$, tức lực thu gọn nằm trong mặt phẳng của ngẫu lực thu gọn. Như đã biết, hệ lực như vậy có hợp lực $\vec{R}$, phương, chiều và cường độ của nó được biểu diễn bằng phương chiều và giá trị của vectơ chính và nằm cách tâm thu gọn $O$ một khoảng cách $d$ (H. 2–5):

$$d = \frac{|\vec{M}^O|}{R'}$$

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_5.svg" alt="Hình 2-5: Trường hợp lực thu gọn vuông góc với vectơ mô men chính" style="max-height: 240px;" />

<div class="figure-caption">

Hình 2-5: Thu gọn hệ lực khi $\vec{R}'_O \perp \vec{M}^O$

</div>

</div>

**b)** $\vec{R}'_O \parallel \vec{M}^O$, trong trường hợp này lực thu gọn có phương vuông góc với mặt phẳng ngẫu lực. Hệ lực như vậy được gọi là **hệ xoắn** (H. 2–6), **hệ xoắn thuận** nếu vectơ lực thu gọn và vectơ mô men ngẫu lực thu gọn song song cùng chiều (H. 2–6a) và **hệ xoắn ngược** trong trường hợp hai vectơ đó song song ngược chiều (H. 2–6b). Dễ dàng chỉ ra rằng hệ xoắn tương đương với hai lực chéo nhau. Trục có phương song song với vectơ chính đi qua $O$ được gọi là **trục xoắn** (H. 2–6).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_6.svg" alt="Hình 2-6: Hệ xoắn thuận và hệ xoắn ngược" style="max-height: 230px;" />

<div class="figure-caption">

Hình 2-6: a) Hệ xoắn thuận; b) Hệ xoắn ngược

</div>

</div>

*[Đính chính bản in: trên Hình 2-6b, kí hiệu trên cùng bị mờ nét chữ $O$, chính xác là $\vec{M} = \vec{M}^O$.]*

**c)** $\widehat{(\vec{R}'_O, \vec{M}^O)} = \alpha \neq k\dfrac{\pi}{2}; \; k = 0, 1, 2\dots$ Trường hợp này lực thu gọn và vectơ mô men của ngẫu lực thu gọn hợp với nhau bởi góc nhọn hoặc góc tù, tức lực thu gọn không nằm trong mặt phẳng hoặc không vuông góc với mặt phẳng tác dụng của ngẫu lực thu gọn. Hệ lực đã cho trong trường hợp này tương đương với một hệ xoắn, nhưng trục xoắn không qua tâm thu gọn.

Để chứng minh điều này ta phân ngẫu lực $\vec{M}^O$ thành hai ngẫu lực $\vec{M}_1^O$ và $\vec{M}_2^O$, trong đó $\vec{M}_1^O$ theo phương vectơ chính còn $\vec{M}_2^O$ vuông góc với phương vectơ chính. Như vậy, lực thu gọn $\vec{R}'_O$ nằm trong mặt phẳng tác dụng của ngẫu lực $\vec{M}_2^O$ nên hệ lực gồm $\vec{R}'_O$ và $\vec{M}_2^O$ tương đương với một lực có cùng phương, chiều và cường độ với lực thu gọn $\vec{R}'_O$ nhưng đặt tại điểm $O_1$ cách đường tác dụng của lực thu gọn $\vec{R}'_O$ một đoạn:

$$d = \frac{|\vec{M}_2^O|}{R'}$$

Như vậy hợp lực của hệ $(\vec{R}'_O, \vec{M}_2^O)$ được biểu diễn bằng vectơ chính đặt tại $O_1$. Do đó:

$$(\vec{M}^O, \vec{R}'_O) \equiv (\vec{M}_1^O, \vec{M}_2^O, \vec{R}'_O) \equiv (\vec{M}_1^O, \vec{R}'_{O_1})$$

Chú ý rằng vectơ mô men ngẫu lực là vectơ tự do, nên hệ $(\vec{M}_1^O, \vec{R}'_{O_1})$ là hệ xoắn có trục xoắn qua điểm $O_1$ (H. 2–7).

Đó là điều cần chứng minh.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_7.svg" alt="Hình 2-7: Thu gọn về hệ xoắn có trục xoắn qua điểm O1" style="max-height: 250px;" />

<div class="figure-caption">

Hình 2-7: Phân tích $\vec{M}^O = \vec{M}_1^O + \vec{M}_2^O$ và dời trục xoắn qua $O_1$

</div>

</div>

---

### 2.2.3. Các dạng chuẩn của hệ lực không gian

Dựa vào kết quả thu gọn hệ lực về một tâm và các bất biến của hệ lực không gian, ta nhận được các tiêu chuẩn về các dạng chuẩn của hệ lực không gian:

1) $\vec{R}' = \vec{0}, \; \vec{M}^O = \vec{0}$, hệ lực không gian cân bằng.

2) $\vec{R}' = \vec{0}, \; \vec{M}^O \neq \vec{0}$, hệ lực không gian tương đương với một ngẫu lực (không phụ thuộc tâm thu gọn).

3) $\vec{R}' \neq \vec{0}, \; \vec{M}^O \cdot \vec{R}' = 0$, hệ lực không gian tương đương với một lực, tức hệ lực không gian có hợp lực.

4) $\vec{R}' \neq \vec{0}, \; \vec{M}^O \cdot \vec{R}' \neq 0$, hệ lực không gian tương đương với một hệ xoắn.

Đó là bốn dạng chuẩn (tối giản) của hệ lực không gian.

Trong trường hợp hệ lực không gian có hợp lực, ta có định lí sau:

::: tip Định lí Varinhông
*Trong trường hợp hệ lực không gian có hợp lực thì mô men của hợp lực đối với một tâm bất kì bằng tổng mô men của các lực thành phần đối với tâm ấy.*

$$\vec{m}_O(\vec{R}) = \sum_{k=1}^n \vec{m}_O(\vec{F}_k) \tag{2-8}$$
:::

*Chứng minh.* Giả sử hệ lực có hợp lực, kí hiệu là $\vec{R}$, viết định lí biến thiên mô men chính cho tâm thu gọn $O$ bất kì và tâm thu gọn $O_1$ nằm trên đường tác dụng của hợp lực $\vec{R}$, ta có:

$$\vec{M}^O - \vec{M}^{O_1} = \vec{m}_O(\vec{R}_{O_1})$$

Chú ý rằng mô men chính của hệ lực đối với tâm thu gọn nằm trên đường tác dụng của hợp lực là bằng không theo định nghĩa của hợp lực, là lực duy nhất tương đương với hệ lực, tức $\vec{M}^{O_1} = \vec{0}$; còn $\vec{R}'_{O_1}$ chính là hợp lực $\vec{R}$, (H. 2–8).

$$\vec{M}^O = \sum_{k=1}^n \vec{m}_O(\vec{F}_k)$$

Do đó:

$$\sum_{k=1}^n \vec{m}_O(\vec{F}_k) = \vec{m}_O(\vec{R})$$

Đó là điều cần chứng minh.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_8.svg" alt="Hình 2-8: Minh họa chứng minh Định lí Varinhông" style="max-height: 260px;" />

<div class="figure-caption">

Hình 2-8: Chứng minh Định lí Varinhông

</div>

</div>

---

### 2.2.4. Các dạng chuẩn của các hệ lực đặc biệt

#### 1. Hệ lực đồng quy tại O

Vì $\vec{M}^O = \sum \vec{m}_O(\vec{F}_k) = 0$, nên $\vec{M}^O \cdot \vec{R}' = 0$.

Vậy hệ lực đồng quy hoặc cân bằng hoặc có hợp lực.

#### 2. Hệ ngẫu lực

Vectơ chính của hệ ngẫu lực luôn luôn bằng không:

$$\vec{R}' = \sum_{k=1}^n \vec{F}_k = \vec{0}$$

Nên hệ ngẫu lực hoặc cân bằng hoặc tương đương với một ngẫu lực.

#### 3. Hệ lực song song

Vectơ chính của hệ lực song song $\vec{R}' = \sum_{k=1}^n \vec{F}_k$ có phương song song với các lực thành phần.

Ngoài ra, $\vec{m}_O(\vec{F}_k)$ vuông góc với lực $\vec{F}_k$, tức vuông góc với phương của vectơ chính $\vec{R}'$. Do đó mô men chính của hệ lực:

$$\vec{M}^O = \sum_{k=1}^n \vec{m}_O(\vec{F}_k),$$

cũng vuông góc với phương của vectơ chính $\vec{R}'$.

Vậy:

$$\vec{M}^O \cdot \vec{R}' = 0$$

Do đó các hệ lực song song có các dạng chuẩn là: cân bằng, ngẫu lực, hợp lực.

Trong trường hợp hệ lực song song cùng chiều, vectơ chính:

$$\vec{R}' = \sum_{k=1}^n \vec{F}_k \neq 0,$$

nên hệ lực chỉ có một dạng chuẩn, là hợp lực.

#### 4. Hệ lực phẳng

Lấy tâm thu gọn nằm trong mặt phẳng tác dụng của hệ lực, ta có $\vec{m}_O(\vec{F}_k)$ và do đó $\vec{M}^O = \sum_{k=1}^n \vec{m}_O(\vec{F}_k)$ vuông góc với mặt phẳng tác dụng của hệ lực. Vectơ chính của hệ lực $\vec{R}' = \sum_{k=1}^n \vec{F}_k$ song song với mặt phẳng tác dụng của hệ lực.

Do đó:

$$\vec{M}^O \cdot \vec{R}' = 0$$

Vậy hệ lực phẳng có các dạng chuẩn như sau: cân bằng, ngẫu lực và hợp lực.

Hệ lực phẳng cân bằng khi vectơ chính và mô men chính của hệ lực đối với một điểm đều bằng không, tức:

$$\vec{R}' = \sum_{k=1}^n \vec{F}_k = \vec{0}; \quad \overline{M}^O = \sum_{k=1}^n \overline{m}_O(\vec{F}_k) = 0$$

Hệ lực phẳng tương đương với một ngẫu lực khi vectơ chính của hệ lực bằng không, còn mô men chính của hệ lực đối với một điểm khác không:

$$\vec{R}' = \sum_{k=1}^n \vec{F}_k = \vec{0}; \quad \overline{M}^O = \sum_{k=1}^n \overline{m}_O(\vec{F}_k) \neq 0$$

Ngẫu lực thu gọn có mô men (đại số) bằng tổng đại số các mô men của các lực thành phần đối với một điểm bất kì, tức không phụ thuộc vào điểm lấy mô men. Điều này được rút ra từ định lí biến thiên mô men chính.

Hệ lực phẳng có hợp lực khi vectơ chính của hệ lực khác không. Hợp lực $\vec{R}$ của hệ lực được biểu diễn bằng vectơ chính của hệ lực, nằm cách điểm $O$ một đoạn $d$:

$$d = \frac{\left|\displaystyle\sum_{k=1}^n \overline{m}_O(\vec{F}_k)\right|}{R'} \quad \text{sao cho} \quad \overline{m}_O(\vec{R}) = \sum_{k=1}^n \overline{m}_O(\vec{F}_k)$$

#### 5. Hệ lực phân bố

Xét một dầm thẳng chịu tác dụng của hệ lực song song phân bố theo quy luật (H. 2–9):

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_9.svg" alt="Hình 2-9: Hệ lực song song phân bố tổng quát trên dầm" style="max-height: 240px;" />

<div class="figure-caption">

Hình 2-9: Biểu đồ hệ lực phân bố tổng quát

</div>

</div>

$$q(x) = \lim \frac{\Delta q}{\Delta x}$$

được gọi là cường độ của phân bố lực trên dầm theo chiều dài. Để đơn giản ta chỉ xét trường hợp của cường độ phân bố lực có biểu đồ như hình 2–9.

Hệ lực phân bố có thể được xem là trường hợp giới hạn của hệ lực tập trung (hệ lực phẳng song song cùng chiều), với các lực tập trung $\vec{F}_k$:

$$F_k = \Delta Q_k = q(x'_k)\,\Delta x_k \quad \text{với } x_k < x'_k < x_{k+1}$$

Vectơ chính của hệ lực song song cùng chiều, cùng phương với các lực $\vec{F}_k$ và có giá trị:

$$R' = \sum F_k = \lim_{\Delta x_k \to 0} \sum q(x'_k)\,\Delta x_k = \int_0^l q(x)\,dx$$

Chú ý rằng tích phân trên biểu diễn diện tích của biểu đồ phân bố lực.

Mô men chính của hệ lực $(\vec{F}_k)$ đối với một điểm nào đó, chẳng hạn, đối với điểm đầu mút của dầm sẽ bằng:

$$\overline{M}^O = \sum \overline{m}_O(\vec{F}_k) = \lim_{\Delta x_k \to 0} \sum q(x'_k) x_k\,\Delta x_k = \int_0^l q(x) x\,dx$$

Vậy hệ lực phân bố có hợp lực $\vec{R}$ hướng thẳng đứng xuống, có trị số:

$$R = \int_0^l q(x)\,dx \tag{2-9}$$

và cách đầu mút của dầm một đoạn $d$:

$$d = \frac{\displaystyle\int_0^l q(x) x\,dx}{\displaystyle\int_0^l q(x)\,dx} \tag{2-10}$$

Xét hai trường hợp riêng sau:

**a) *Cường độ phân bố lực đều***, tức $q(x) = q_0 = \text{hằng}$ (H. 2–10).

Trị số của hợp lực tính theo công thức $(2-9)$ bằng:

$$R = \int_0^l q_0\,dx = q_0 l$$

và hợp lực cách đầu mút dầm một đoạn $d$:

$$d = \frac{\displaystyle\int_0^l q_0 x\,dx}{q_0 l} = \frac{1}{2}$$

*[Đính chính bản in: kết quả đúng là $d = \dfrac{l}{2}$.]*

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_10.svg" alt="Hình 2-10: Hệ lực phân bố đều" style="max-height: 180px;" />

<div class="figure-caption">

Hình 2-10: Biểu đồ hệ lực phân bố đều $q_0$

</div>

</div>

Vậy hợp lực đặt tại điểm giữa của dầm và có trị số bằng diện tích của hình chữ nhật phân bố lực.

**b) *Cường độ phân bố lực tuyến tính***

Giả sử lực phân bố dọc dầm theo luật tam giác có đáy là $q_0$. Rõ ràng:

$$q(x) = q_0 \frac{x}{l}$$

Công thức $(2-9)$ cho ta trị số của hợp lực $\vec{R}$:

$$R = \int_0^1 q_0 \frac{x}{l}\,dx = \frac{1}{2} q_0 l$$

và hợp lực cách đầu mút dầm một đoạn $d$:

$$d = \frac{\displaystyle\int_0^1 q_0 \dfrac{x}{l} x\,dx}{\dfrac{1}{2} q_0 l} = \frac{\dfrac{q_0 l^2}{3}}{\dfrac{1}{2} q_0 l} = \frac{2}{3} l$$

*[Đính chính bản in: cận trên của hai tích phân trên trong sách in nhầm là $1$, đúng phải là $l$ ($\int_0^l$).]*

Vậy hệ lực phân bố tam giác có hợp lực có trị số bằng $R = \dfrac{1}{2} q_0 l$ (diện tích của tam giác phân bố lực) và cách đỉnh của tam giác phân bố lực một đoạn bằng $\dfrac{2}{3} l$ (tức đi qua trọng tâm của tam giác phân bố lực).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_11.svg" alt="Hình 2-11: Hệ lực phân bố tuyến tính dạng tam giác" style="max-height: 200px;" />

<div class="figure-caption">

Hình 2-11: Biểu đồ hệ lực phân bố tuyến tính (tam giác)

</div>

</div>

Qua hai thí dụ về phân bố lực hằng và lực tuyến tính và từ công thức $(2-9)$ và $(2-10)$ có thể đi đến kết luận sau:

*Hệ lực phân bố có phương chiều song song với phương chiều của các lực phân bố có giá trị bằng diện tích (với tỉ lệ xích nào đó) của biểu đồ phân bố lực và đi qua trọng tâm của biểu đồ.*

---

## 2.3. Điều kiện cân bằng và các phương trình cân bằng của hệ lực không gian {#_2-3-đieu-kien-can-bang-cua-he-luc-khong-gian}

### 2.3.1. Điều kiện cân bằng của hệ lực không gian

::: tip Điều kiện cân bằng
*Điều kiện cần và đủ để hệ lực không gian cân bằng là vectơ chính và mô men chính của hệ lực đối với một điểm bất kì phải đồng thời triệt tiêu:*

$$(\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n) \equiv 0 \longleftrightarrow \begin{cases} \vec{R}' = \displaystyle\sum_{k=1}^n \vec{F}_k = \vec{0} \\ \vec{M}^O = \displaystyle\sum_{k=1}^n \vec{m}_O(\vec{F}_k) = \vec{0} \end{cases} \tag{2-11}$$
:::

*Chứng minh.* Điều kiện cần được chứng minh nhờ dựa vào các dạng chuẩn của hệ lực không gian. Thực vậy, nếu điều kiện $(2-11)$ không được thỏa mãn thì hệ lực không gian hoặc tương đương với một ngẫu lực hoặc một hợp lực hoặc một hệ xoắn, tức không thỏa mãn tiên đề 1, vậy hệ lực đã cho không cân bằng.

Điều kiện đủ là hiển nhiên vì vectơ chính của hệ lực bằng không, khi thu gọn hệ lực về một điểm bất kì ta được một ngẫu lực thu gọn bằng mô men chính của hệ lực đối với điểm $O$ (định lí biến thiên mô men chính) tức bằng không. Vậy ngẫu lực thu gọn là hai lực cân bằng, theo tiên đề 1, hệ lực đã cho cân bằng.

---

### 2.3.2. Các phương trình cân bằng của hệ lực không gian

Từ điều kiện $(2-11)$ ta có: *điều kiện cần và đủ để hệ lực không gian cân bằng là tổng các hình chiếu của các lực trên ba trục tọa độ vuông góc và tổng mô men của các lực đối với ba trục ấy đều triệt tiêu.*

$$\begin{aligned}
&\sum_{k=1}^n F_{kx} = 0; \quad \sum_{k=1}^n F_{ky} = 0; \quad \sum_{k=1}^n F_{kz} = 0 \\
&\sum_{k=1}^n \overline{m}_x(\vec{F}_k) = 0; \quad \sum_{k=1}^n \overline{m}_y(\vec{F}_k) = 0; \quad \sum_{k=1}^n \overline{m}_z(\vec{F}_k) = 0
\end{aligned} \tag{2-12}$$

Muốn chứng minh ta chỉ cần chứng minh đây là điều kiện cần và đủ để có điều kiện $(2-11)$. Đó là điều rõ ràng.

Các phương trình $(2-12)$ được gọi là những phương trình cân bằng của hệ lực không gian.

---

### 2.3.3. Điều kiện cân bằng và các phương trình cân bằng của các hệ lực đặc biệt

#### 1. Hệ lực đồng quy

*Điều kiện cần và đủ để hệ lực đồng quy cân bằng là vectơ chính của hệ lực triệt tiêu:*

$$\vec{R}' = \sum_{k=1}^n \vec{F}_k = \vec{0}$$

hoặc

$$\sum_{k=1}^n F_{kx} = 0; \quad \sum_{k=1}^n F_{ky} = 0; \quad \sum_{k=1}^n F_{kz} = 0 \tag{2-13}$$

trong đó: $F_{kx}, F_{ky}, F_{kz}$ $(k = 1, 2, \dots, n)$ là hình chiếu của các lực trên ba trục tọa độ vuông góc nhau.

Các phương trình $(2-13)$ được gọi là những phương trình cân bằng của hệ lực đồng quy không gian.

Trong trường hợp hệ lực đồng quy phẳng, số phương trình cân bằng còn hai.

#### 2. Hệ ngẫu lực

*Điều kiện cần và đủ để hệ ngẫu lực $(\vec{M}_1, \vec{M}_2, \dots, \vec{M}_n)$ cân bằng là ngẫu lực tổng cộng của nó triệt tiêu*, tức:

$$\vec{M} = \sum_{k=1}^n \vec{M}_k = \vec{0}$$

Hoặc:

$$\sum_{k=1}^n \overline{M}_{kx} = 0; \quad \sum_{k=1}^n \overline{M}_{ky} = 0; \quad \sum_{k=1}^n \overline{M}_{kz} = 0 \tag{2-14}$$

Các phương trình $(2-14)$ được gọi là những phương trình cân bằng của hệ ngẫu lực.

Trong trường hợp hệ ngẫu lực phẳng, số phương trình cân bằng còn một.

#### 3. Hệ lực song song

Trong trường hợp hệ lực song song, phương của vectơ chính của hệ lực đã được xác định (song song với các lực thành phần) còn mô men chính của hệ lực là vectơ nằm trong mặt phẳng xác định (mặt phẳng thẳng góc với phương các lực thành phần). Do đó:

*Điều kiện cần và đủ để hệ lực song song cân bằng là tổng hình chiếu của các lực trên trục $z$ song song với các lực thành phần và tổng mô men của các lực đối với hai trục vuông góc với nhau $x, y$ (và vuông góc với trục $z$) triệt tiêu:*

$$\sum_{k=1}^n \overline{F}_{kz} = 0; \quad \sum_{k=1}^n \overline{m}_x(\vec{F}_k) = 0; \quad \sum_{k=1}^n \overline{m}_y(\vec{F}_k) = 0 \tag{2-15}$$

Các phương trình $(2-15)$ được gọi là những phương trình cân bằng của hệ lực song song không gian.

Đối với trường hợp hệ lực song song phẳng số phương trình cân bằng còn hai.

#### 4. Hệ lực phẳng

Khi áp dụng điều kiện cân bằng $(2-12)$ của hệ lực không gian cho hệ lực phẳng ta có:

**Dạng 1:** *Điều kiện cần và đủ để hệ lực phẳng cân bằng là tổng hình chiếu của các lực trên hai trục tọa độ vuông góc và tổng mô men của các lực đối với điểm $O$ bất kì bằng không:*

$$\sum_{k=1}^n \overline{F}_{kx} = 0; \quad \sum_{k=1}^n \overline{F}_{ky} = 0; \quad \sum_{k=1}^n \overline{m}_O(\vec{F}_k) = 0 \tag{2-16}$$

*Chứng minh.* Chọn hệ trục $Oxyz$ có mặt phẳng $Oxy$ là mặt phẳng tác dụng của các lực, tức trục $Oz$ thẳng góc với mặt phẳng lực.

Rõ ràng là các phương trình:

$$\sum_{k=1}^n \overline{F}_{kz} = 0; \quad \sum_{k=1}^n \overline{m}_x(\vec{F}_k) = 0; \quad \sum_{k=1}^n \overline{m}_y(\vec{F}_k) = 0$$

sẽ tự thỏa mãn, và vì trục $Oz$ vuông góc với mặt phẳng chứa lực nên:

$$\sum_{k=1}^n \overline{m}_z(\vec{F}_k) = \sum_{k=1}^n \overline{m}_O(\vec{F}_k) = 0$$

Vậy hệ phương trình cân bằng của hệ lực phẳng là:

$$\sum_{k=1}^n \overline{F}_{kx} = 0; \quad \sum_{k=1}^n \overline{F}_{ky} = 0; \quad \sum_{k=1}^n \overline{m}_O(\vec{F}_k) = 0$$

với điều kiện là các trục $x, y$ vuông góc với nhau.

Các phương trình $(2-16)$ được gọi là các phương trình cân bằng của hệ lực phẳng (dạng 1).

**Dạng 2:** *Điều kiện cần và đủ để hệ lực phẳng cân bằng là tổng mô men của các lực đối với hai điểm $A, B$ và tổng các hình chiếu của các lực trên trục không vuông góc với đoạn $AB$ bằng không:*

$$\sum_{k=1}^n \overline{m}_A(\vec{F}_k) = 0; \quad \sum_{k=1}^n \overline{m}_B(\vec{F}_k) = 0; \quad \sum_{k=1}^n F_{kx} = 0 \tag{2-17}$$

với điều kiện trục $x$ không vuông góc với đoạn $AB$.

*Chứng minh:* Điều kiện cần được chứng minh tương tự như trường hợp hệ lực không gian, nhờ dựa vào các dạng chuẩn của hệ lực. Nếu các điều kiện không được thỏa mãn thì hệ lực phẳng hoặc tương đương với một ngẫu lực hoặc có hợp lực, tức không thỏa mãn tiên đề 1, nghĩa là hệ lực không cân bằng.

Để chứng minh điều kiện đủ ta lí luận như sau:

Từ điều kiện tổng hình chiếu các lực trên trục $x$ triệt tiêu rút ra hình chiếu của vectơ chính của hệ lực trên trục $x$ triệt tiêu. Có hai khả năng xảy ra:

a) $\vec{R}' \neq \vec{0}$, khi đó vectơ chính $\vec{R}'$ phải vuông góc với trục chiếu $x$ và vì trục chiếu không vuông góc với đường chứa đoạn $AB$ nên phương vectơ chính không song song với đường thẳng chứa đoạn $AB$. Tuy nhiên vì:

$$\vec{R}' \neq \vec{0}, \quad \overline{M}^A = \sum \overline{m}_A(\vec{F}_k) = 0; \quad \overline{M}^B = \sum \overline{m}_B(\vec{F}_k) = 0$$

nên hệ lực có hợp lực, đường tác dụng của nó qua $2$ điểm $A$ và $B$, tức phương vectơ chính phải song song với đường chứa đoạn $AB$, điều này mâu thuẫn với trên.

Do đó: $\vec{R} = \vec{0}$.

b) $\vec{R}' = \vec{0}$, khi thu gọn hệ lực phẳng về một điểm $O$ nào đó ta nhận được ngẫu lực thu gọn có mô men thu gọn:

$$\overline{M}^O = \overline{M}^A = \sum_{k=1}^n \overline{m}_A(\vec{F}_k) = 0$$

Vậy ngẫu lực thu gọn nhận được là hai lực cân bằng, theo tiên đề 1, hệ lực phẳng đã cho cân bằng.

**Dạng 3:** *Điều kiện cần và đủ để hệ lực phẳng cân bằng là tổng các mô men của các lực đối với ba điểm $A, B, C$ không thẳng hàng triệt tiêu.*

$$\sum_{k=1}^n \overline{m}_A(\vec{F}_k) = 0; \quad \sum_{k=1}^n \overline{m}_B(\vec{F}_k) = 0; \quad \sum_{k=1}^n \overline{m}_C(\vec{F}_k) = 0 \tag{2-18}$$

*Chứng minh:* Trước khi chứng minh ta nhận xét rằng các ngẫu lực thu gọn tại $A, B, C$ là $\overline{M}^A, \overline{M}^B,$ và $\overline{M}^C$ sẽ là:

$$\overline{M}^A = \sum_{k=1}^n \overline{m}_A(\vec{F}_k); \quad \overline{M}^B = \sum_{k=1}^n \overline{m}_B(\vec{F}_k); \quad \overline{M}^C = \sum_{k=1}^n \overline{m}_C(\vec{F}_k)$$

Điều kiện cần là hiển nhiên vì nếu trong các điều kiện $(2-18)$ không được thỏa mãn, thí dụ:

$$\sum_{k=1}^n \overline{m}_A(\vec{F}_k) \neq 0$$

thì ngẫu lực thu gọn $\overline{M}^A$ tại $A$ cũng khác không, nghĩa là hệ lực đã cho không thỏa mãn tiên đề 1, tức hệ lực không cân bằng.

Để chứng minh điều kiện đủ, ta chú ý rằng nếu các điều kiện $(2-18)$ được thỏa mãn thì các ngẫu lực thu gọn tại $A, B$ và $C$ đều bằng không. Vậy nếu hệ lực có hợp lực thì ba điểm $A, B, C$ phải nằm trên đường tác dụng của hợp lực. Nói khác đi đường tác dụng của hợp lực phải đi qua ba điểm $A, B, C$ không thẳng hàng. Đó là điều vô lý. Vậy hệ lực không có hợp lực và dựa vào dạng chuẩn của hệ lực ta đi đến kết luận là vectơ chính của hệ lực phải bằng không.

Do $\vec{R}' = \vec{0}$, nên khi tiến hành thu gọn hệ lực về một điểm tùy ý $O$ thì ngẫu lực thu gọn $\overline{M}^O$, theo định lí biến thiên mô men chính, bằng ngẫu lực thu gọn tại $A$, tức $\overline{M}^O = \overline{M}^A = 0$.

Vậy ngẫu lực thu gọn $\overline{M}^O$ là hai lực cân bằng, theo tiên đề 1, hệ lực đã cho cân bằng.

Áp dụng trực tiếp các dạng phương trình cân bằng trên cho hệ lực song song phẳng ta có:

*Điều kiện cần và đủ để hệ lực phẳng song song cân bằng là tổng các hình chiếu của các lực trên một trục không vuông góc với đường tác dụng các lực và tổng mô men của các lực đối với một điểm đồng thời triệt tiêu:*

$$\sum_{k=1}^n F_{ky} = 0; \quad \sum_{k=1}^n \overline{m}_O(\vec{F}_k) = 0 \tag{2-19}$$

*với điều kiện trục chiếu $y$ không vuông góc với đường tác dụng của các lực.*

Hoặc:

*Điều kiện cần và đủ để hệ lực phẳng song song cân bằng là tổng mô men của các lực đối với hai điểm $A, B$ không cùng nằm trên một đường song song với các lực đều triệt tiêu*, tức:

$$\sum_{k=1}^n \overline{m}_A(\vec{F}_k) = 0; \quad \sum_{k=1}^n \overline{m}_B(\vec{F}_k) = 0 \tag{2-20}$$

*với điều kiện $\overrightarrow{AB}$ không song song với các lực.*

---

::: tip Thí dụ 2-1
**Đề bài:**  
Dầm $AB$ có chiều dài $4a$ được đặt trên hai gối như hình 2–12. Dầm chịu tác dụng của hai lực tập trung theo phương đứng hướng xuống tại $C$ và $D$ ($C$ là điểm giữa của dầm, còn $D$ cách đầu mút $A$ của dầm một đoạn $a$) và một lực $\vec{F}$ theo phương ngang cách đường trục của dầm một khoảng $d$.

Xác định các phản lực tại gối đỡ (lấy $d = \dfrac{1}{10}a$).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_12.svg" alt="Hình 2-12: Dầm AB chịu lực và các phản lực liên kết" style="max-height: 230px;" />

<div class="figure-caption">

Hình 2-12: Dầm $AB$ chịu hệ lực phẳng

</div>

</div>

**Bài giải:**  
Khảo sát dầm $AB$ cân bằng dưới tác dụng hệ lực phẳng gồm các lực hoạt động $\vec{P}, \vec{Q}$ và $\vec{F}$ và hai phản lực liên kết của gối đỡ $A$ và $B$ (phản lực tại $A$ gồm thành phần thẳng đứng và nằm ngang $\vec{X}_A, \vec{Y}_A$, còn phản lực tại $B$ theo phương thẳng đứng $\vec{N}_B$) (H. 2–12).

Vì dầm cân bằng nên:

$$(\vec{P}, \vec{Q}, \vec{F}, \vec{X}_A, \vec{Y}_A, \vec{N}_B) \equiv \vec{0}$$

Viết các phương trình cân bằng của hệ lực phẳng (dạng 1) cho hệ lực trên, ta có:

$$\begin{aligned}
&\sum F_x = F - X_A = 0 \\
&\sum F_y = Y_A + N_B - P - Q = 0 \\
&\sum \overline{m}_A(\vec{F}) = \frac{1}{10}Fa + Qa + 2Pa - 4N_B a = 0
\end{aligned}$$

Khi giải hệ phương trình trên ta nhận được:

$$X_A = F; \quad Y_A = \frac{1}{2}P + \frac{3}{4}Q - \frac{1}{40}F; \quad N_B = \frac{1}{4}Q + \frac{1}{2}P + \frac{1}{40}F$$

Các phản lực $\vec{X}_A, \vec{N}_B$ nhận được giá trị dương, còn thành phần phản lực thẳng đứng $\vec{Y}_A$ sẽ có giá trị dương hoặc âm tùy thuộc biểu thức:

$$\frac{1}{4}P + \frac{3}{4}Q - \frac{1}{40}F$$

có giá trị dương hay âm.

*[Đính chính bản in: biểu thức đúng theo nghiệm $Y_A$ ở trên là $\dfrac{1}{2}P + \dfrac{3}{4}Q - \dfrac{1}{40}F$.]*

Để làm rõ vấn đề này, ta lưu ý rằng trong trường hợp tổng quát không biết trước chiều của các phản lực liên kết, vì chúng phụ thuộc vào các lực hoạt động tác dụng lên vật rắn. Do đó, khi giải phóng liên kết, các phản lực liên kết được giả thiết có chiều nào đó. Vậy chiều được chọn trước như vậy có thể đúng, cũng có thể không đúng.

Vì các phản lực liên kết được đưa vào trong các phương trình cân bằng với danh nghĩa là mô đun của các phản lực liên kết, được thêm dấu dương hay dấu âm là tùy thuộc chiều chọn cùng hoặc ngược chiều với hướng dương của trục chiếu, nên chúng phải là các đại lượng chỉ lấy các giá trị dương. Với lí do đó, các phản lực được tìm từ các phương trình cân bằng bắt buộc phải dương. Khi giải các phương trình cân bằng, có phản lực nào đó nhận được giá trị âm thì điều đó không thể chấp nhận được. Vậy cần phải chọn lại chiều của phản lực liên kết sao cho từ các phương trình cân bằng các phản lực đều nhận được giá trị dương, nghĩa là phải tiến hành giải lại bài toán. Tuy nhiên nếu có một phản lực nào đó được giả thiết chiều không đúng thì chiều đúng là chiều ngược lại. Từ đó không cần thiết phải tiến hành giải lại bài toán mà chỉ cần đổi lại chiều của phản lực có giá trị âm.
:::

::: tip Thí dụ 2-2
**Đề bài:**  
Cầu trục $ABC$ có trục quay thẳng đứng $GE$ với $GE = AC = 5\text{ m}$ (H. 2–13). Trọng lượng bản thân của cầu trục là $P = 19{,}62\text{ kN}$ đặt tại điểm $D$ cách trục quay $2\text{ m}$. Vật được cẩu có trọng lượng $Q = 19{,}43\text{ kN}$ đặt tại điểm $C$. Xác định phản lực tại các ổ đỡ $G$ và $E$. Bỏ qua ma sát.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_13.svg" alt="Hình 2-13: Sơ đồ cầu trục ABC và các phản lực liên kết" style="max-height: 280px;" />

<div class="figure-caption">

Hình 2-13: Cầu trục $ABC$ chịu hệ lực phẳng

</div>

</div>

**Bài giải:**  
Khảo sát cần trục $ABC$ cân bằng dưới tác dụng của hệ lực gồm các lực hoạt động $\vec{P}$ và $\vec{Q}$ đặt tại $D$ và $C$ và các phản lực liên kết tại $G$ và $E$. Vì các lực hoạt động tác dụng trong mặt phẳng cầu trục nên các phản lực tại $G$ và $E$ cùng nằm trong mặt phẳng cầu trục. Do đó, các phản lực tại $G$ và $E$ được biểu diễn như trên hình vẽ.

Vậy cầu trục nằm cân bằng dưới tác dụng của hệ lực phẳng:

$$(\vec{P}, \vec{Q}, \vec{F}, \vec{X}_E, \vec{Y}_E, \vec{X}_G) \equiv \vec{0}$$

*[Đính chính bản in: trong hệ lực cân bằng không có lực $\vec{F}$, chỉ gồm $(\vec{P}, \vec{Q}, \vec{X}_E, \vec{Y}_E, \vec{X}_G) \equiv \vec{0}$.]*

Các phương trình cân bằng của hệ lực này được viết như sau:

$$\begin{aligned}
&\sum F_{ky} = Y_E - P - Q = 0 \\
&\sum \overline{m}_E(\vec{F}) = 5X_G - 2P - 5Q = 0 \\
&\sum \overline{m}_G(\vec{F}) = 5X_E - 2P - 5Q = 0
\end{aligned}$$

Từ hệ phương trình này, ta có:

$$\begin{aligned}
Y_E &= P + Q = 39{,}05\text{ kN} \\
X_G &= \frac{2}{5}P + Q = 27{,}278\text{ kN} \\
X_E &= \frac{2}{5}P + Q = 27{,}278\text{ kN}
\end{aligned}$$

Các phản lực đều có giá trị dương.

Do đó các phản lực có chiều đúng chiều đã chọn như trên hình vẽ.
:::

::: tip Thí dụ 2-3
**Đề bài:**  
Dầm $AB$ có chiều dài $l$ được gắn vào tường nhờ liên kết ngàm tại $A$. Tại đầu mút $B$ tự do dầm chịu tác dụng lực $\vec{P}$ và ngẫu lực $\overline{M}$ và suốt chiều dài dầm chịu tác dụng của hệ lực phân bố đều có cường độ $q_0$. Xác định phản lực tại ngàm. Bỏ qua trọng lượng bản thân của dầm (H. 2–14).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_14.svg" alt="Hình 2-14: Dầm ngàm AB chịu lực phân bố đều, lực tập trung và ngẫu lực" style="max-height: 210px;" />

<div class="figure-caption">

Hình 2-14: Dầm ngàm $AB$ chịu tải trọng phân bố đều $q_0$, lực $\vec{P}$ và ngẫu lực $\overline{M}$

</div>

</div>

**Bài giải:**  
Khảo sát dầm cân bằng dưới tác dụng của hệ lực gồm các lực hoạt động $\vec{P}$, ngẫu lực $\overline{M}$ và hệ lực phân bố đều có hợp lực $Q = q_0 l$ và các lực liên kết tại ngàm $\vec{X}_A, \vec{Y}_A$ và ngẫu lực $\overline{M}^A$.

Ta có hệ lực phẳng cân bằng sau:

$$(\vec{P}, \vec{Q}, \text{ngẫu lực } \overline{M}, \vec{X}_A, \vec{Y}_A, \text{ngẫu lực } \overline{M}^A) \equiv 0$$

Phương trình cân bằng của hệ lực này có dạng:

$$\begin{aligned}
&\sum F_x = X_A = 0 \\
&\sum F_y = Y_A - P - Q = 0 \\
&\sum m_A(\vec{F}) = M^A - P \cdot l - Q\frac{l}{2} - M = 0
\end{aligned}$$

Khi giải hệ phương trình này với chú ý $Q = q_0 l$, ta được:

$$X_A = 0; \quad Y_A = P + Q; \quad M^A = Pl + q_0 \frac{l^2}{2} + M$$

Các phản lực đều có giá trị dương, nên có chiều như trên hình vẽ.
:::

::: tip Thí dụ 2-4
**Đề bài:**  
Cánh cửa $OABC$ hình chữ nhật đồng chất có trọng lượng $P$ được giữ cân bằng ở vị trí nằm ngang nhờ gối cầu $O$, bản lề $C$ và dây $BD$. Biết đường chéo $OB$ nghiêng $60^\circ$ với cạnh $OA$, dây $BD$ nằm trong mặt phẳng thẳng đứng qua $OB$ và nghiêng góc $45^\circ$ với $OB$. Tìm các phản lực tại $O, C$ và sức căng của dây.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_15.svg" alt="Hình 2-15: Cánh cửa chữ nhật OABC cân bằng trong không gian" style="max-height: 280px;" />

<div class="figure-caption">

Hình 2-15: Cánh cửa $OABC$ cân bằng trong không gian (với $OA = a$)

</div>

</div>

**Bài giải:**  
Khảo sát cánh cửa cân bằng dưới tác dụng của hệ lực không gian gồm lực hoạt động $\vec{P}$ và các phản lực liên kết $\vec{X}_O, \vec{Y}_O, \vec{Z}_O$ của gối cầu $O$; $\vec{X}_C, \vec{Z}_C$ của bản lề $C$ và sức căng $\vec{T}$ của dây. Ta có hệ lực cân bằng sau:

$$(\vec{P}, \vec{X}_O, \vec{Y}_O, \vec{Z}_O, \vec{X}_C, \vec{Z}_C, \vec{TC}) \equiv \vec{0}$$

Để đơn giản cho việc lập các phương trình cân bằng ta phân tích sức căng $\vec{T}$ thành ba lực nằm dọc ba trục tọa độ vuông góc, đó là:

$$\begin{aligned}
T_x &= T\cos 45^\circ \cos 60^\circ = \frac{T\sqrt{2}}{4} \\
T_y &= T\cos 45^\circ \sin 60^\circ = \frac{T\sqrt{6}}{4} \\
T_z &= T\sin 45^\circ = \frac{T\sqrt{2}}{2}
\end{aligned}$$

Các phương trình cân bằng của hệ lực không gian sẽ là:

$$\begin{aligned}
&\sum F_x = X_O + X_C - \frac{T\sqrt{2}}{4} = 0 \\
&\sum F_Y = Y_O - P - \frac{T\sqrt{2}}{2} = 0 \\
&\sum F_z = Z_O + Z_C + \frac{T\sqrt{2}}{2} - P = 0 \\
&\sum \overline{m}_x(\vec{F}) = -\frac{Pa\sqrt{3}}{2} + Z_C a\sqrt{3} + \frac{T\sqrt{2}}{2} \cdot a\sqrt{3} = 0 \\
&\sum \overline{m}_y(\vec{F}) = P\frac{a}{2} - \frac{T\sqrt{2}}{2} \cdot a = 0 \\
&\sum \overline{m}_z(\vec{F}) = -X_C a\sqrt{3} = 0
\end{aligned}$$

Giải hệ phương trình trên ta nhận được:

$$X_C = 0; \quad T = \frac{P\sqrt{2}}{2}; \quad X_O = \frac{P}{4}; \quad Y_O = \frac{P\sqrt{3}}{2}; \quad Z_C = 0; \quad Z_O = \frac{P}{2}$$

Các phản lực đều có giá trị dương nên chúng có chiều như trên hình vẽ.

*[Đính chính bản in: trong hệ lực cân bằng là $\vec{T}$ (không phải $\vec{TC}$); kích thước cạnh $OA = a$ được ghi trên Hình 2-15; phương trình chiếu trục $y$ đúng là $\sum F_y = Y_O - T_y = Y_O - \dfrac{T\sqrt{6}}{4} = 0$, do đó giá trị đúng là $Y_O = T_y = \dfrac{P\sqrt{3}}{4}$ (không phải $\dfrac{P\sqrt{3}}{2}$).]*
:::

::: tip Thí dụ 2-5
**Đề bài:**  
Một xe ba bánh được mô hình bằng tấm tam giác đều $ABC$ đồng chất, các cạnh có chiều dài $a$, nằm cân bằng trên mặt ngang và tiếp xúc với mặt đường nằm ngang qua ba điểm tiếp xúc của bánh với mặt đứng tại $A, B$ và $C$. Trọng lượng của xe là $P$ đặt tại trọng tâm $G$ của tấm, còn vật nặng xe chở có trọng lượng $Q$ đặt tại điểm $D$. Tìm các phản lực tại $A, B$ và $C$.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_16.svg" alt="Hình 2-16: Mô hình xe ba bánh tam giác đều ABC" style="max-height: 280px;" />

<div class="figure-caption">

Hình 2-16: Tấm tam giác đều $ABC$ chịu hệ lực song song không gian

</div>

</div>

**Bài giải:**  
Khảo sát tấm $ABC$ nằm cân bằng dưới tác dụng của hệ lực gồm các lực hoạt động $P, Q$ và các phản lực liên kết $\vec{N}_A, \vec{N}_B, \vec{N}_C$ có phương thẳng góc với mặt phẳng của tấm, tức phương thẳng đứng. Ta có hệ lực không gian song song cân bằng (H. 2–16).

$$(\vec{P}, \vec{Q}, \vec{N}_A, \vec{N}_B, \vec{N}_C) \equiv 0$$

Chọn hệ trục $Oxyz$ như hình vẽ các phương trình cân bằng có dạng:

$$\begin{aligned}
&\sum F_z = N_A + N_B + N_C - P - Q = 0 \\
&\sum \overline{M}_c \sum (\vec{F}) = -Pa\sqrt{3}/6 - Qb + N_B a\sqrt{3}/2 = 0 \\
&\sum \overline{M}_y(\vec{F}) = Q \cdot C + N_C \frac{a}{2} - N_A \frac{a}{2} = 0
\end{aligned}$$

Khi giải hệ phương trình này, ta được:

$$\begin{aligned}
N_A &= \frac{P}{3} + Q\left(\frac{1}{2} + \frac{c}{a} - \frac{b\sqrt{3}}{3a}\right) \\
N_B &= \frac{P}{3} + \frac{2Qb\sqrt{3}}{3a} \\
N_C &= \frac{P}{3} + \left[\frac{1}{2} - \left(\frac{c}{a} + \frac{b\sqrt{3}}{3a}\right)\right] \cdot Q
\end{aligned}$$

Rõ ràng phản lực $N_B$ có giá trị dương, tức có chiều như trên hình vẽ.

Phản lực $N_A$ cũng có giá trị dương, nếu chú ý rằng $b$ có giá trị lớn nhất chỉ bằng chiều cao của tam giác, tức là:

$$b \leqslant \frac{a\sqrt{3}}{2}$$

Vậy:

$$N_A^{\min} = \frac{P}{3} + \left(\frac{1}{2} + \frac{c}{a} - \frac{a\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{a}\right) \cdot Q = \frac{P}{3} + \left(\frac{c}{a} - 1\right) \cdot Q > 0$$

phản lực $\vec{N}_C$ có giá trị dương hoặc âm tùy biểu thức:

$$\frac{P}{3} + \left[\frac{1}{2} - \left(\frac{c}{a} + \frac{b}{a}\frac{\sqrt{3}}{3}\right)\right] Q$$

có giá trị dương hay âm.

Trong trường hợp $\vec{N}_C$ có giá trị không hoặc âm, tức liên kết giữa mặt đường và xe không có, xe sẽ bị lật quanh $AB$, vì liên kết $C$ bị mất.

Vậy điều kiện để xe không bị lật quanh $AB$ sẽ là:

$$\frac{P}{3} + \left[\frac{1}{2} - \left(\frac{c}{a} + \frac{b}{a}\frac{\sqrt{3}}{3}\right)\right] Q > 0$$

Bài toán vật lật sẽ được trình bày chi tiết ở phần tiếp sau.

*[Đính chính bản in: ở đề bài "mặt đứng" thực chất là "mặt đường"; phương trình thứ hai là $\sum \overline{m}_x(\vec{F}) = 0$; ở phương trình thứ ba là $Q \cdot c$; khi thế $b = \dfrac{a\sqrt{3}}{2}$ vào biểu thức $N_A$ phải chia cho $3a$ nên $N_A^{\min} = \dfrac{P}{3} + \left(\dfrac{1}{2} + \dfrac{c}{a} - \dfrac{a\sqrt{3}}{2}\cdot\dfrac{\sqrt{3}}{3a}\right)Q = \dfrac{P}{3} + \dfrac{c}{a}Q > 0$.]*
:::

::: tip Thí dụ 2-6
**Đề bài:**  
Một trục kéo $AB$ có đường trục nằm ngang và được đỡ trên hai ổ trục (bản lề trụ) $A$ và $B$. Hai nhánh đai tác dụng lên trục tời qua puli có đường kính $D = 0{,}60\text{ m}$ các lực kéo $T_1 = 5\text{ kN}$ và $T_2 = 2\text{ kN}$. Vật được kéo có trọng lượng $P = 5\text{ kN}$ nhờ tang tời có đường kính $d = 0{,}30\text{ m}$. Trục tời còn chịu tác dụng ngẫu lực cản có mô men $M$.

Xác định ngẫu lực cản $M$ cần thiết để trục kéo cân bằng và các phản lực tại ổ trục $A$ và $B$. Các kích thước cho trên hình vẽ. Bỏ qua ma sát.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_17.svg" alt="Hình 2-17: Trục kéo AB chịu lực kéo đai, trọng lượng vật và ngẫu lực cản" style="max-height: 270px;" />

<div class="figure-caption">

Hình 2-17: Sơ đồ trục kéo $AB$ trong không gian

</div>

</div>

**Bài giải:**  
Khảo sát trục kéo cân bằng dưới tác dụng của hệ lực gồm các lực hoạt động $\vec{P}$, ngẫu lực $\vec{M}$ và các phản lực liên kết $\vec{R}_A, \vec{R}_B, \vec{T}_1, \vec{T}_2$ trong đó các sức căng $\vec{T}_1$ và $\vec{T}_2$ đã cho, ngẫu lực cản có vectơ mô men $\vec{M}$ hướng song song với trục quay, các phản lực $\vec{R}_A, \vec{R}_B$ nằm trong mặt phẳng vuông góc với trục quay nên có thể phân tích chúng thành hai thành phần nằm dọc theo hai trục $x, y$ trong hệ tọa độ $Oxyz$, có trục $z$ trùng với trục tâm của trục quay, (H. 2–17).

Ta có hệ lực không gian cân bằng sau:

$$(\vec{P}, \text{ngẫu lực } \overline{M}, \vec{T}_1, \vec{T}_2, \vec{X}_A, \vec{Y}_A, \vec{X}_B, \vec{Y}_B) \equiv 0$$

Khi viết các phương trình cân bằng cho hệ lực này, ta có:

$$\begin{aligned}
&\sum F_x = T_1 + T_2 + X_A + X_B = 0 \\
&\sum P_z = -P + Z_A + Z_B = 0 \\
&\sum \overline{M}_x(\vec{F}) = aP - 4aZ_B = 0 \\
&\sum \overline{M}_y(\vec{F}) = T_1 \frac{D}{2} - T_2 \frac{D}{2} - P\frac{d}{2} - M = 0 \\
&\sum \overline{M}_z(\vec{F}) = 3aT_1 + 3aT_2 + 4aX_B = 0
\end{aligned}$$

Thay các giá trị bằng số vào hệ phương trình trên và giải ta được:

$$\begin{aligned}
X_A &= -1{,}75\text{ kN}, \quad Z_A = 3{,}75\text{ kN}; \\
X_B &= -5{,}25\text{ kN}; \quad Z_B = 1{,}25\text{ kN}; \quad M = 0{,}15\text{ kN}
\end{aligned}$$

Ở đây thành phần $X_A$ của phản lực tại $A$ và $X_B$ có chiều ngược so với chiều trên hình vẽ.

*[Đính chính bản in: theo Hình 2-17, trục tâm của trục quay là trục $y$ (không phải $z$) và mặt phẳng vuông góc với trục quay là $Oxz$, nên hai thành phần phản lực tại $A, B$ là $\vec{X}_A, \vec{Z}_A$ và $\vec{X}_B, \vec{Z}_B$ (bản in ghi nhầm thành $\vec{Y}_A, \vec{Y}_B$); phương trình thứ hai là $\sum F_z = 0$ (bản in ghi $\sum P_z$); và đơn vị đúng của mô men ngẫu lực cản là $M = 0{,}15\text{ kNm}$.]*
:::

---

### 2.3.4. Điều kiện cân bằng của hệ vật rắn

Đối với hệ vật rắn cần phân biệt ngoại lực và nội lực.

Ngoại lực, có kí hiệu $\vec{F}^e$, là các lực do các vật không thuộc hệ tác dụng lên các vật thuộc hệ.

Nội lực, có kí hiệu $\vec{F}^i$, là các lực tác dụng tương hỗ giữa các vật thuộc hệ, mà trường hợp riêng là những lực liên kết của các liên kết trong, tức là những liên kết giữa các vật thuộc hệ.

Theo tiên đề tác dụng và phản tác dụng, các nội lực xuất hiện từng cặp trực đối, nhưng đó không phải là hai lực cân bằng, vì không đặt lên cùng một vật. Hệ nội lực có tính chất quan trọng sau: *vectơ chính và mô men chính của hệ nội lực luôn luôn triệt tiêu.*

$$\vec{R}'^i = \vec{0}; \qquad \vec{M}^{Oi} = \vec{0} \tag{2-21}$$

Cần chú ý rằng các ngoại lực cũng như các nội lực bao gồm trong bản thân chúng cả lực hoạt động và lực liên kết.

Bây giờ khảo sát hệ vật rắn gồm $N$ vật nằm cân bằng dưới tác dụng của hệ ngoại lực $(\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n)$ được gọi vắn tắt là hệ lực $(S)$.

Vì hệ vật rắn cân bằng nên từng vật rắn phải cân bằng. Áp dụng tiên đề giải phóng liên kết ta lập được điều kiện cân bằng (các phương trình cân bằng) cho các hệ lực tác dụng lên từng vật. Gọi các hệ lực đó là $(S_k)$; $k = 1, 2, \dots, N$, ta có:

$$\vec{R}'(S_k) = \vec{0}; \quad \vec{M}^O(S_k) = \vec{0}; \quad k = 1, 2, \dots, N \tag{2-22}$$

Mặt khác, áp dụng tiên đề hóa rắn, coi hệ như một vật rắn nằm cân bằng dưới tác dụng của hệ lực $(S)$. Vậy:

$$\vec{R}'(S) = \vec{0}; \qquad \vec{M}^O(S) = \vec{0}; \tag{2-23}$$

Để tìm mối quan hệ giữa các điều kiện $(2-22)$ và $(2-23)$, ta xét hệ lực $(\overline{S})$ gồm tất cả các lực thuộc các hệ lực $(S_1)(S_2)\dots(S_k)$. Ta có ngay:

$$\vec{R}'(\overline{S}) = \sum_{k=1}^N \vec{R}'(S_k); \qquad \vec{M}^O(\overline{S}) = \sum_{k=1}^N \vec{M}^O(S_k)$$

Vì các hệ lực $(\overline{S})$ và $(S)$ chỉ khác nhau bằng các cặp lực trực đối, nên:

$$\vec{R}'(\overline{S}) = \vec{R}'(S); \qquad \vec{M}^O(\overline{S}) = \vec{M}^O(S)$$

Từ đó:

$$\vec{R}'(S) = \sum_{k=1}^N \vec{R}'(S_k); \qquad \vec{M}^O(S) = \sum_{k=1}^N \vec{M}^O(S_k)$$

Vậy điều kiện $(2-23)$ là hệ quả của các điều kiện $(2-22)$.

<div id="cach-1-phuong-phap-tach-vat"></div>

Để giải bài toán cân bằng các hệ vật rắn ta có thể sử dụng điều kiện $(2-22)$, tức thiết lập $N$ điều kiện cân bằng của $N$ vật rắn thuộc hệ, hoặc sử dụng điều kiện $(2-23)$, tức điều kiện cân bằng của hệ được hóa rắn và một số trong các điều kiện $(2-22)$, sao cho chúng tập hợp thành một hệ phương trình đầy đủ (số ẩn bằng số phương trình) để giải bài toán. Phương trình đầu được gọi là **phương pháp tách vật**, còn phương trình thứ hai mang tên là **phương pháp hóa rắn**.

---

::: tip Thí dụ 2-7
**Đề bài:**  
Hai thanh đồng chất $OA = 4a$; $BC = 2a$ có trọng lượng tương ứng $2P$ và $P$, nối với nhau bằng bản lề $B$ và với nền nhờ bản lề $O$ và $C$. Tại $A$ treo một vật nặng có trọng lượng $Q$. Tìm các phản lực liên kết tại $O, C$ và lực liên kết tại $B$. Các thanh làm với đường nằm ngang góc $30^\circ$.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_18.svg" alt="Hình 2-18: Hệ hai thanh OA và BC nối với nhau bằng bản lề B" style="max-height: 280px;" />

<div class="figure-caption">

Hình 2-18: Hệ hai thanh nối bản lề $OA$ và $BC$

</div>

</div>

**Bài giải:**  
Đây là bài toán cân bằng của hệ vật. Ta có thể dùng hoặc phương pháp tách vật hoặc phương pháp hóa rắn.

**Phương pháp tách vật:**

Khảo sát sự cân bằng của thanh $OA$ dưới tác dụng của hệ lực gồm các lực hoạt động $\vec{Q}$ và $\vec{P}'$ (ngoại lực) và các lực liên kết $\vec{X}_O, \vec{Y}_O$ tại $O$ (ngoại lực) và $\vec{X}_B, \vec{Y}_B$ tại $B$ (nội lực), chúng được giả thiết có chiều như hình vẽ ($\vec{P}'$ có trị số bằng $2P$).

Ta có hệ lực phẳng cân bằng:

$$(\vec{Q}, \vec{P}', \vec{X}_O, \vec{Y}_O, \vec{X}_B, \vec{Y}_B) \equiv 0.$$

Các phương trình cân bằng của hệ lực phẳng (dạng 1) cho:

$$\begin{aligned}
&\sum F_x = X_O - X_B = 0 \\
&\sum F_y = Y_O + Y_B - 2P - Q = 0 \\
&\sum \overline{m}_O(\vec{F}) = -2a\sqrt{3}\,P - 2a\sqrt{3}\,Q + a\sqrt{3}\,Y_B + aX_B = 0
\end{aligned}$$

Bây giờ ta xét sự cân bằng của thanh $CB$ chịu tác dụng của hệ lực gồm lực hoạt động $\vec{P}$ (ngoại lực) và các liên kết $\vec{X}_C, \vec{Y}_C$ tại $C$ (ngoại lực) có chiều được giả thiết như hình vẽ và $\vec{X}'_B, \vec{Y}'_B$ là các lực do thanh $AO$ tác dụng lên thanh $CB$ (nội lực), theo tiên đề tác dụng và phản tác dụng, ta có:

$$\vec{X}'_B = -\vec{X}_B; \qquad \vec{Y}'_B = -\vec{Y}_B$$

Như vậy $\vec{X}'_B$ và $\vec{X}_B$ có cùng mô đun, gọi chúng là $X_B$, còn mô đun của các lực $\vec{Y}_B$ và $\vec{Y}'_B$ kí hiệu là $Y_B$.

Vậy thanh $BC$ cân bằng dưới tác dụng của hệ lực:

$$(\vec{P}, \vec{X}_C, \vec{Y}_C, \vec{X}'_B, \vec{Y}'_B) \equiv \vec{0}$$

Viết phương trình cân bằng (dạng 1) cho hệ lực này, ta có:

$$\begin{aligned}
&\sum F_x = X_C + X_B = 0 \\
&\sum F_y = Y_C - P - Y_B = 0 \\
&\sum \overline{m}_C(\vec{F}) = a\sqrt{3}\,\frac{P}{2} + a\sqrt{3}\,Y_B - aX_B = 0
\end{aligned}$$

Khi giải hệ sáu phương trình vừa lập, ta tìm được:

$$\begin{aligned}
X_O &= \left(\frac{5}{4}P - Q\right)\sqrt{3}; \quad X_B = \left(\frac{5}{4}P - 2Q\right)\sqrt{3}; \quad X_C = \left(Q - \frac{5}{4}P\right)\sqrt{3} \\
Y_O &= \left(2Q + \frac{5}{4}P\right); \quad Y_B = \frac{3}{4}P - Q; \quad Y_C = \frac{7}{4}P - Q
\end{aligned}$$

Các phản lực có chiều đúng như hình vẽ nếu chúng có giá trị dương và ngược chiều nếu có giá trị âm.

*[Đính chính bản in: giải đúng hệ 6 phương trình trên thu được: $X_O = \left(\dfrac{5}{4}P + Q\right)\sqrt{3}$, $X_B = \left(\dfrac{5}{4}P + Q\right)\sqrt{3}$, $X_C = -\left(\dfrac{5}{4}P + Q\right)\sqrt{3}$, $Y_O = \dfrac{5}{4}P$, $Y_B = \dfrac{3}{4}P + Q$, $Y_C = \dfrac{7}{4}P + Q$. Trên Hình 2-18 vẽ dư các con lăn dưới hai bản lề cố định $O$ và $C$.]*

**Phương pháp hóa rắn:**

Đầu tiên xem hệ là một vật rắn cân bằng dưới tác dụng của hệ lực gồm các lực hoạt động $\vec{Q}, \vec{P}', \vec{P}$ và các lực liên kết $\vec{X}_O, \vec{Y}_O, \vec{X}_C, \vec{Y}_C$. Các lực liên kết tại $B$ là các nội lực, nên khi xem hệ là một vật rắn cân bằng, có thể bớt chúng đi theo tiên đề 2.

Vậy ta có hệ lực phẳng cân bằng sau:

$$(\vec{Q}, \vec{P}, \vec{P}', \vec{X}_O, \vec{Y}_O, \vec{X}_C, \vec{Y}_C) \equiv \vec{0}$$

Khi viết các phương trình cân bằng của hệ lực phẳng (dạng 2) cho hệ lực trên, ta có:

$$\begin{aligned}
&\sum F_x = X_O + X_C = 0 \\
&\sum \overline{m}_O(\vec{F}) = 2a\sqrt{3}\,Y_C - 2a\sqrt{3}\,Q - 3a\sqrt{3}\,P/2 - 2a\sqrt{3}\,P = 0 \\
&\sum \overline{m}_C(\vec{F}) = -2a\sqrt{3}\,Y_O + 2a\sqrt{3}\,P + \frac{a\sqrt{3}}{2}P = 0
\end{aligned}$$

Vậy ta nhận được ba phương trình chứa bốn ẩn $X_O, Y_O, X_C, Y_C$. Để có thêm một phương trình chứa cũng bốn ẩn trên ta xét thanh $BC$ cân bằng và viết phương trình cân bằng cho hệ lực:

$$(\vec{X}'_B, \vec{Y}'_B, \vec{X}_C, \vec{Y}_C, \vec{P}) \equiv \vec{0}$$

trong đó không chứa phản lực tại $B$. Đó là phương trình mô men của các lực đối với điểm $B$:

$$\sum \overline{m}_B(\vec{F}) = a\sqrt{3}\,Y_C - \frac{a\sqrt{3}}{2}P + aX_C = 0$$

Từ hệ bốn phương trình vừa lập trên ta tính được $X_O, Y_O, X_C, Y_C$. Lẽ tất nhiên nếu phải tính các phản lực tại $B$ thì cần viết hai phương trình còn lại cho hệ lực tác dụng lên thanh $CB$.
:::

---

## 2.4. Bài toán đòn và vật lật

### 2.4.1. Bài toán đòn

Đòn là một vật rắn quay được quanh một trục cố định và chịu tác dụng của hệ lực hoạt động nằm trong một mặt phẳng vuông góc với trục quay của đòn (H. 2–19).

Bài toán của đòn là tìm điều kiện đối với hệ lực hoạt động để đòn cân bằng.

Hệ lực tác dụng lên đòn gồm các lực hoạt động $\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n$ và các phản lực liên kết tại trục quay $\vec{X}_O, \vec{Y}_O$. Nếu đòn cân bằng thì hệ lực gồm các lực hoạt động và lực liên kết tại $O$ là hệ lực cân bằng, tức:

$$(\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n, \vec{X}_O, \vec{Y}_O) \equiv \vec{0}$$

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_19.svg" alt="Hình 2-19: Sơ đồ đòn quay quanh trục cố định O" style="max-height: 240px;" />

<div class="figure-caption">

Hình 2-19: Sơ đồ lực tác dụng lên đòn quay quanh trục $O$

</div>

</div>

Viết các phương trình cân bằng cho hệ này, ta được:

$$\begin{aligned}
&\sum F_x = \sum_{k=1}^n F_{kx} + X_O = 0 \\
&\sum F_y = \sum_{k=1}^n F_{ky} + Y_O = 0 \\
&\sum \overline{m}_O(\vec{F}) = \sum_{k=1}^n \overline{m}_O(\vec{F}_k) = 0
\end{aligned}$$

Hai phương trình đầu luôn được thỏa mãn nhờ trục $O$ tạo các phản lực $\vec{X}_O, \vec{Y}_O$. Vậy đòn có cân bằng hay không tùy thuộc hệ lực hoạt động $(\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n)$ tác dụng lên đòn có thỏa mãn phương trình thứ ba hay không. Do đó, ta có định lí: *Điều kiện cần và đủ để đòn cân bằng là tổng mô men của các lực hoạt động đối với trục quay của nó phải triệt tiêu.*

::: tip Thí dụ 2-8
**Đề bài:**  
Van an toàn $A$ được nối vào đòn $CD$ tại $B$, đòn này dài $50\text{ cm}$, đồng chất có trọng lượng $10\text{ N}$ quay quanh trục $C$ và có vị trí nằm ngang để giữ van an toàn nhờ đối trọng $Q$ đặt tại $D$. Biết $BC = 7\text{ cm}$, áp suất an toàn là $p = 50\text{ N/cm}^2$; đường kính van $d = 6\text{ cm}$. Tìm trọng lượng cần thiết $Q$ cần treo ở $D$ để khóa chặt van an toàn (H. 2–20).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_20.svg" alt="Hình 2-20: Sơ đồ van an toàn đòn bẩy CD" style="max-height: 240px;" />

<div class="figure-caption">

Hình 2-20: Van an toàn $A$ và đòn $CD$

</div>

</div>

**Bài giải:**  
Van an toàn chịu lực đẩy:

$$P = 50 \frac{\pi 6^2}{4} = 1413\text{ N}$$

Điều kiện cân bằng của đòn $CD$ là:

$$\sum \overline{m}_C(\vec{F}) = 1413 \cdot 7 - 50Q = 0$$

Từ đó tính được lực $Q$ bé nhất để khóa chặt van an toàn:

$$Q_{\min} = \frac{1413 \cdot 7}{50} = 197\text{ N}$$

*[Đính chính bản in: bài giải của sách đã bỏ qua trọng lượng bản thân $10\text{ N}$ của đòn $CD$ và cắt cụt phần thập phân ($P = 450\pi \approx 1413{,}7\text{ N}$). Nếu xét đủ trọng lượng đòn $P_{\text{đ}} = 10\text{ N}$ đặt tại trung điểm đòn (cách $C$ đoạn $25\text{ cm}$) thì $\sum \overline{m}_C(\vec{F}) = 1413{,}7 \cdot 7 - 10 \cdot 25 - 50Q = 0 \implies Q_{\min} \approx 192{,}9\text{ N}$ (còn nếu bỏ qua trọng lượng đòn thì $Q_{\min} \approx 197{,}9\text{ N}$).]*
:::

---

### 2.4.2. Bài toán vật lật

Khảo sát vật rắn cân bằng dưới tác dụng của hệ lực hoạt động $(\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n)$. Để đơn giản, ta xét trường hợp hệ lực phẳng. Vật có liên kết tựa tại hai điểm $A$ và $B$ trong trường hợp riêng có thể chỉ có một liên kết tựa, còn liên kết kia là liên kết bản lề. Ta có hệ lực cân bằng:

$$(\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n, \vec{R}_A, \vec{R}_B) \equiv \vec{0}$$

Với những điều kiện nào đó của hệ lực hoạt động có thể xảy ra sự mất liên kết tại một trong hai điểm $A$ và $B$. Phản lực liên kết tại liên kết bị mất sẽ bằng không, khi đó vật mất cân bằng và trở thành một đòn (H. 2–21a).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_21a.svg" alt="Hình 2-21a: Mô hình vật rắn tựa tại hai điểm A và B" style="max-height: 240px;" />

<div class="figure-caption">

Hình 2-21a: Vật rắn đặt trên hai gối tựa $B$ và $A$

</div>

</div>

Bài toán vật lật là tìm điều kiện đối với hệ lực hoạt động để không xảy ra mất liên kết tại $B$ (không lật quanh $A$) hoặc tại $A$ (không lật quanh $B$).

Ta hãy tìm điều kiện để vật không bị lật, giả sử quanh $A$.

Các lực hoạt động được phân thành hai nhóm. Nhóm thứ nhất gồm các lực gây lật là các lực có mô men đối với $A$ theo chiều vật bị lật. Tổng mô men của chúng đối với điểm $A$ được gọi là mô men lật, có kí hiệu $M_{\text{lật}}^A$. Nhóm thứ hai gồm các lực còn lại là các lực chống lật, có mô men đối với $A$ ngược chiều vật bị lật. Tổng mô men của các lực này đối với $A$ được gọi là mô men chống lật, có kí hiệu $M_{\text{chống}}^A$.

Chú ý rằng mô men lật và mô men chống lật ngược chiều nhau, còn mô men của phản lực tại $B$ đối với $A$ có cùng chiều với mô men gây lật.

Điều kiện cần và đủ để vật không bị lật quanh $A$ là nó còn cân bằng và liên kết tại $B$ vẫn còn hoạt động, tức là:

$$\sum m_A(\vec{F}) = m_A(\vec{N}_B) + M_{\text{lật}}^A - M_{\text{chống}}^A = 0$$

$$m_A(\vec{N}_B) \geqslant 0$$

Từ đó ta có: $M_{\text{lật}}^A \leqslant M_{\text{chống}}^A$.

::: tip Định lí
*Điều kiện cần và đủ để vật không bị lật là mô men lật không lớn hơn mô men chống lật:*

$$M_{\text{lật}} \leqslant M_{\text{chống}}$$
:::

::: tip Thí dụ 2-9
**Đề bài:**  
Cần trục di động được nhờ hai bánh xe cách nhau $1\text{ m}$. Trọng lượng của cần trục là $P_1 = 20\text{ kN}$ đi qua điểm giữa $I$ của đoạn $AB$. Đối trọng là $P_2 = 10\text{ kN}$ nằm cách điểm $I$ một đoạn bằng $1\text{ m}$. Tìm trọng lượng lớn nhất $Q$ mà cần trục mang được, biết rằng nó nằm cách $I$ một đoạn bằng $2\text{ m}$ (H. 2–21b).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_21b.svg" alt="Hình 2-21b: Cần trục di động trên hai bánh xe A và B" style="max-height: 270px;" />

<div class="figure-caption">

Hình 2-21b: Sơ đồ cần trục di động trên hai bánh xe $A, B$

</div>

</div>

**Bài giải:**  
Rõ ràng cần trục không thể bị lật quanh $A$ vì:

$$M_{\text{lật}} = m_A(\vec{P}_2) = 10 \cdot 0{,}5 = 5\text{ kNm},$$

trong khi đó mô men chống lật trong trường hợp nguy hiểm nhất là không có lực $Q$ bằng:

$$M_{\text{chống}} = m_A(\vec{P}_1) = 20 \cdot 0{,}5 = 10\text{ kNm} > M_{\text{lật}}.$$

Bây giờ xét khả năng cần trục bị lật quanh $B$. Lực $\vec{Q}$ thuộc nhóm lực gây lật, còn trọng lực $\vec{P}_1$ và đối trọng $\vec{P}_2$ thuộc nhóm lực chống lật. Do đó:

$$M_{\text{lật}}^B = m_B(\vec{Q}) = 1{,}5Q;$$

$$M_{\text{chống}}^B = m_B(P_1) + m_B(P_2) = 20 \cdot 0{,}5 + 10 \cdot 1{,}5 = 25\text{ kNm}$$

Điều kiện để cần trục không bị lật quanh $B$ là:

$$1{,}5Q \leqslant 25$$

Từ đó:

$$Q \leqslant \frac{25}{1{,}5} = 16{,}6\text{ kN}$$

Vậy:

$$Q_{\max} = 16{,}6\text{ kN}$$

*[Đính chính bản in: giá trị $\dfrac{25}{1{,}5} = 16{,}666\dots \approx 16{,}67\text{ kN}$ (bản in cắt cụt còn $16{,}6\text{ kN}$).]*
:::

---

## 2.5. Bài toán siêu tĩnh

Nhờ các phương trình cân bằng ta giải được các bài toán cân bằng của một vật hoặc một hệ vật: xác định các phản lực liên kết hoặc tìm các vị trí cân bằng. Nếu số phương trình lập được bằng số ẩn của bài toán, ta có bài toán xác định tĩnh, còn nếu số phương trình không đủ để giải bài toán thì bài toán được gọi là siêu tĩnh.

Một thí dụ về bài toán siêu tĩnh là bài toán xác định phản lực hai gối cố định đỡ một thanh cân bằng dưới tác dụng của hệ lực hoạt động là hệ lực phẳng (H. 2–22).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_2_22.svg" alt="Hình 2-22: Thanh AB đặt trên hai gối cố định (bài toán siêu tĩnh)" style="max-height: 190px;" />

<div class="figure-caption">

Hình 2-22: Thanh $AB$ trên hai gối cố định

</div>

</div>

Đối với bài toán này lập được ba phương trình cân bằng chứa bốn thành phần phản lực. Một trong các nguyên nhân gây nên bài toán siêu tĩnh là biến dạng, nên kết quả tìm được đối với mô hình vật rắn tuyệt đối chưa đủ để giải quyết các bài toán không thể bỏ qua biến dạng được. Dựa trên kết quả của tĩnh học vật rắn và bổ sung về quan hệ giữa lực và biến dạng trong các giáo trình cơ học của vật biến dạng người ta giải quyết được các loại bài toán siêu tĩnh đó.
