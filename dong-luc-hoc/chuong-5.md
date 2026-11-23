# Chương 5: Nguyên lý Đalămbe

Trong chương này trình bày nguyên lý Đalămbe, nhờ nó có thể áp dụng các phương pháp giải bài toán tĩnh học (phương pháp tĩnh học hình học và phương pháp tĩnh học giải tích) vào việc giải các bài toán động lực học.

---

## 5.1. Nguyên lý Đalămbe đối với chất điểm

### 5.1.1. Lực quán tính của chất điểm

Khảo sát chất điểm dưới tác dụng của lực $\vec{F}$ chuyển động với gia tốc $\vec{a}$ đối với hệ quy chiếu quán tính nào đó. Theo tiên đề thứ hai Niutơn, ta có:

$$m\vec{a} = \vec{F}$$

nó có thể được viết trong dạng:

$$\vec{F} + (- m\vec{a}) = \vec{0} \tag{5-1}$$

Đẳng thức $(5 - 1)$ tương tự điều kiện cân bằng của chất điểm dưới tác dụng của lực $\vec{F}$ và lực được gọi là lực quán tính, có ký hiệu $\vec{F}^{qt}$:

$$\vec{F}^{qt} = - m\vec{a} \tag{5-2}$$

*Chú ý*

1. Lực quán tính không phải là lực tác dụng vào chất điểm (lực tác dụng vào chất điểm chỉ là lực $\vec{F}$). Dựa vào tiên đề tác dụng và phản tác dụng (tiên đề thứ ba) có thể khẳng định rằng lực quán tính của chất điểm tự do là lực do chất điểm tác dụng vào vật, (số đo của nó là $\vec{F}$), đã buộc nó chuyển động với gia tốc $\vec{a}$.

2. Khái niệm cân bằng vừa nêu ở trên chỉ có ý nghĩa hình thức vì lực $\vec{F}$ và $\vec{F}^{qt}$ không tác dụng lên cùng một chất điểm.

3. Lực quán tính được xác định khi biết được gia tốc. Như vậy trong bài toán thuận (bài toán thứ nhất của động lực học) lực quán tính được hoàn toàn xác định, còn trong bài toán ngược (bài toán thứ hai của động lực học) lực quán tính là đại lượng chưa biết.

Trong hệ trục tọa độ Đề các lực quán tính được xác định qua các hình chiếu của nó trên các trục tọa độ

$$F_x^{qt} = -m\ddot{x} \, ; \quad F_y^{qt} = -m\ddot{y} \, ; \quad F_z^{qt} = -m\ddot{z} \tag{5-3}$$

Trong hệ trục tọa độ tự nhiên lực quán tính được phân tích thành các thành phần trên các trục tọa độ tự nhiên.

$$\vec{F}^{qt} = \vec{F}_t^{qt} + \vec{F}_n^{qt} \tag{5-4}$$

$$\text{Với : } \vec{F}_t^{qt} = -m\vec{a}^t \, ; \quad \vec{F}_n^{qt} = -m\vec{a}^n \tag{5-5}$$

$\vec{a}^t, \vec{a}^n$ là các vectơ gia tốc tiếp và gia tốc pháp của chất điểm.

### 5.1.2. Nguyên lý Đalămbe đối với chất điểm

::: tip Nguyên lý Đalămbe đối với chất điểm
*Tại mỗi thời điểm lực tác dụng vào chất điểm và lực quán tính của chất điểm cân bằng nhau.*

$$\vec{F} + \vec{F}^{qt} = \vec{0}. \tag{5-6}$$
:::

*Chú ý:* Trong trường hợp của chất điểm không tự do, lực tác dụng vào chất điểm bao gồm cả phản lực liên kết $\vec{R}$, tức là :

$$\vec{F} + \vec{R} + \vec{F}^{qt} = \vec{0} \tag{5-7}$$

#### Thí dụ 5-1

**Thí dụ 5 – 1 :** Một quả cầu nhỏ có trọng lượng $P$ được treo vào toa xe chuyển động thẳng với gia tốc $\vec{a}$. Dây treo quả cầu bị lệch một góc $\alpha = \text{const}$ so với đường thẳng đứng. Xác định gia tốc $\vec{a}$ của toa xe.

**Bài giải :**

Khảo sát chất điểm chịu tác dụng của trọng lực và phản lực $\vec{T}$ của dây. (H.5 – 1).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_5_1.svg" alt="Hình 5-1" style="max-height: 260px;" />

<div class="figure-caption">

Hình 5-1

</div>

</div>

Lực quán tính của chất điểm, do gia tốc của chất điểm bằng gia tốc của toa xe, sẽ bằng:

$$\begin{aligned}
\vec{F}^{qt} &= -m\vec{a} \\
&= -\frac{P}{g}\vec{a}
\end{aligned}$$

Theo nguyên lý Đalămbe:

$$\vec{F} + \vec{T} + \vec{F}^{qt} = \vec{0}$$

[Đính chính bản in: Trong đẳng thức trên, số hạng đầu tiên in nhầm là $\vec{F}$, đúng theo đề bài là trọng lực $\vec{P}$, tức $\vec{P} + \vec{T} + \vec{F}^{qt} = \vec{0}$.]

Chiếu hai vế của đẳng thức này lên phương $\Delta$ thẳng góc với dây ta có:

$$F^{qt}\cos\alpha - P\sin\alpha = 0$$

nghĩa là $\dfrac{P}{g}a\cos\alpha - P\sin\alpha = 0$

Vậy: $a = g\operatorname{tg}\alpha$

Bài toán trên cho ta một phương pháp đơn giản để đo gia tốc của toa xe.

---

## 5.2. Nguyên lý Đalămbe đối với cơ hệ

Khảo sát cơ hệ gồm $N$ chất điểm $M_1, M_2, ..., M_N$, dưới tác dụng của hệ lực $\vec{F}_1, \vec{F}_2, ..., \vec{F}_N$ chuyển động với gia tốc $\vec{a}_1, \vec{a}_2, ... \vec{a}_N$.

Xét chất điểm $M_k$ có khối lượng $m_k$ chịu tác dụng của lực $\vec{F}_k$, chuyển động với gia tốc $\vec{a}_k$. Lực quán tính của chất điểm ấy là $\vec{F}_k^{qt} = -m_k\vec{a}_k$.

Theo nguyên lý Đalămbe đối với chất điểm, với mọi chất điểm của cơ hệ ta có:

$$(\vec{F}_k, \vec{F}_k^{qt}) \equiv 0.$$

Do đó nguyên lý Đalămbe đối với cơ hệ được phát biểu như sau:

::: tip Nguyên lý Đalămbe đối với cơ hệ
*Tại mỗi thời điểm, các lực tác dụng lên các chất điểm của cơ hệ và các lực quán tính của các chất điểm thuộc cơ hệ tạo thành hệ lực cân bằng*

$$(\vec{F}_1, \vec{F}_2, ..., \vec{F}_N, \vec{F}_1^{qt}, \vec{F}_2^{qt}, ..., \vec{F}_N^{qt}) \equiv 0 \tag{5-8}$$
:::

*Chú ý*

1. Các lực $\vec{F}_k$, đối với cơ hệ tự do, là hợp lực của ngoại lực và nội lực, còn đối với cơ hệ không tự do, là hợp lực của lực hoạt động và lực liên kết, tác dụng lên chất điểm $M_k$.

2. Khái niệm cân bằng ở đây có tính chất quy ước: "hệ lực cân bằng là hệ lực có từng đôi một lực trực đối với nhau".

3. Hệ lực cân bằng $(5 - 8)$ được thiết lập tại mọi thời điểm chuyển động của cơ hệ, do đó có thể thiết lập điều kiện cân bằng của nó đối với hệ trục tọa độ động và được sử dụng rất tiện lợi trong bài toán xác định phản lực vật quay. Tuy nhiên cần lưu ý rằng các lực quán tính (các gia tốc) của các chất điểm phải tính đối với hệ quy chiếu quán tính.

---

## 5.3. Phương pháp Tĩnh hình học – Động lực

### 5.3.1. Nội dung phương pháp

Việc khảo sát điều kiện cân bằng của hệ lực có thể dựa vào hai đặc trưng hình học của nó là vectơ chính và mômen chính của hệ lực. Dựa trên điều kiện triệt tiêu vectơ chính và mômen chính của hệ lực ta thiết lập được phương trình cân bằng của hệ lực (trong phần Tĩnh học ta đã thiết lập các phương trình cân bằng đối với vật rắn).

Phương pháp thiết lập các phương trình cân bằng cho hệ lực $(5 - 8)$ dựa vào tính chất triệt tiêu của vectơ chính và mômen chính của nó được gọi là phương pháp Tĩnh hình học – động lực.

Để áp dụng phương phương pháp này các lực tác dụng lên cơ hệ được phân thành những ngoại lực và những nội lực.

[Đính chính bản in: Ở câu trên in lặp chữ "phương phương pháp", đọc là "phương pháp".]

$$\vec{F}_k = \vec{F}_k^e + \vec{F}_k^i$$

Vì vectơ chính và mômen chính đối với một điểm bất kỳ của hệ nội lực luôn luôn triệt tiêu, tức:

$$\vec{R}^i = \vec{F}_k^i = \vec{0} \, ; \quad \vec{m}_o^i = \vec{m}_o(\vec{F}_k^i) = \vec{0}$$

[Đính chính bản in: Trong đẳng thức trên thiếu dấu tổng $\sum$, đúng là $\vec{R}^i = \sum\vec{F}_k^i = \vec{0}$ và $\vec{m}_o^i = \sum\vec{m}_o(\vec{F}_k^i) = \vec{0}$.]

nên phương trình cân bằng của hệ lực $(5 - 8)$ có dạng sau:

$$\begin{aligned}
&\sum\vec{F}_k^e + \sum\vec{F}_k^{qt} = \vec{0} \\
&\sum\vec{m}_o(\vec{F}_k^e) + \sum\vec{m}_o(\vec{F}_k^{qt}) = \vec{0}
\end{aligned} \tag{5-9}$$

#### Thí dụ 5-2

**Thí dụ 5 – 2. :** Một trục máy mất cân bằng được mô hình bằng hai chất điểm $M_1, M_2$, có khối lượng tương ứng bằng $m_1, m_2$, nằm trong hai mặt phẳng vuông góc với nhau và chứa trục quay, khoảng cách của chúng đối với trục quay tương ứng bằng $e_1, e_2$. Trục máy quay đều với vận tốc $\omega_o$. Xác định các phản lực tại các ổ trục A và B. Các kích thước khác được cho như trên hình vẽ. Bỏ qua ma sát tại các trục quay.

**Bài giải :**

Khảo sát cơ hệ là trục máy có gắn hai chất điểm $M_1, M_2$.

Các ngoại lực tác dụng vào cơ hệ gồm các trọng lực $\vec{P}_1, \vec{P}_2$ và các phản lực ổ trục $\vec{R}_A(\vec{X}_A, \vec{Y}_A, \vec{Z}_A), \vec{R}_B(\vec{X}_B, \vec{Y}_B)$ (H. $5 - 2$).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_5_2.svg" alt="Hình 5-2" style="max-height: 310px;" />

<div class="figure-caption">

Hình 5-2

</div>

</div>

Các lực quán tính của hai chất điểm $M_1$ và $M_2$ được ký hiệu bởi $\vec{F}_1^{qt}$ và $\vec{F}_2^{qt}$

$$\vec{F}_1^{qt} = -m_1\vec{a}_{M_1}$$

với $a_{M_1} = e_1\omega_o^2$

$$\vec{F}_2^{qt} = -m_2\vec{a}_{M_2}$$

với $a_{M_2} = e_2\omega_o^2$

Chọn hệ trục tọa độ $Axyz$, trong đó $Az$ trùng với trục quay, còn các chất điểm $M_1, M_2$ nằm tương ứng trong các mặt phẳng tọa độ $Axz$ và $Ayz$. Chú ý rằng hệ trục tọa độ đó gắn liền và cùng quay với trục máy.

Bây giờ ta thành lập các phương trình cân bằng tĩnh học cho hệ lực:

$$(\vec{P}_1, \vec{P}_2, \vec{X}_A, \vec{Y}_A, \vec{Z}_A, \vec{X}_B, \vec{Y}_B, \vec{F}_1^{qt}, \vec{F}_2^{qt})$$

Chúng có dạng sau :

$$\begin{aligned}
&\sum F_x = X_A + X_B + F_1^{qt} = 0, \\
&\sum F_y = Y_A + Y_B + F_2^{qt} = 0, \\
&\sum F_z = Z_A - P_1 - P_2 = 0, \\
&\sum m_x(\vec{F}) = -Y_B(a + b + c) - P_2 e_2 - F_2^{qt}(a + b) = 0, \\
&\sum m_y(\vec{F}) = X_B(a + b + c) + P_1 e_1 + F_1^{qt} a = 0, \\
&\sum m_z(\vec{F}) = 0,
\end{aligned}$$

trong đó: $F_1^{qt} = \dfrac{P_1}{g}e_1\omega_o^2$ và $F_2^{qt} = \dfrac{P_2}{g}e_2\omega_o^2$

Giải hệ phương trình trên ta được:

$$\begin{aligned}
X_B &= -\frac{1}{(a+b+c)}(P_1 e_1 + F_1^{qt} a) = -\frac{P_1 e_1}{(a+b+c)}\left(1 + \frac{\omega_o^2}{g}a\right) \\
Y_B &= -\frac{1}{(a+b+c)}\left[P_2 e_2 + F_2^{qt}(a + b)\right] = \\
&\quad -\frac{P_2 e_2}{(a+b+c)}\left[1 + \frac{\omega_o^2}{g}(a + b)\right] \\
X_A &= \frac{1}{(a+b+c)}\left[P_1 e_1 - (b + c)F_1^{qt}\right] \\
&= \frac{P_1 e_1}{(a+b+c)}\left[1 - (b + c)\frac{\omega_o^2}{g}\right] \\
Y_A &= \frac{1}{(a+b+c)}(P_2 e_2 - c F_2^{qt}) = \frac{P_2 e_2}{(a+b+c)}\left(1 - c\frac{\omega_o^2}{g}\right) \\
Z_A &= P_1 + P_2
\end{aligned}$$

*Nhận xét:* Các phản lực ở trục không những phụ thuộc vào vận tốc góc của trục quay mà có phương thay đổi (các vectơ $\vec{R}_A$ và $\vec{R}_B$ quay quanh đường tâm của trục máy với vận tốc góc $\omega_o$)

### 5.3.2. Thu gọn hệ lực quán tính của vật rắn

Việc áp dụng trực tiếp các phương trình cân bằng tĩnh học chỉ thuận tiện đối với các cơ hệ gồm chỉ một số hữu hạn các chất điểm. Đối với trường hợp vật rắn (cơ hệ gồm vô số các chất điểm) cần tìm dạng thu gọn (tương đương) của hệ lực quán tính của vật rắn. Dưới đây sẽ trình bày kết quả thu gọn hệ lực quán tính của một số vật rắn chuyển động thường gặp.

Đầu tiên ta chứng minh rằng đối với vật rắn có chuyển động bất kỳ, vectơ chính của hệ lực quán tính của nó luôn luôn bằng:

$$\vec{R}^{qt} = -M\vec{a}_C \tag{5-10}$$

trong đó $M$ là khối lượng của vật còn $\vec{a}_C$ là gia tốc khối tâm của nó.

Thực vậy, dựa vào định nghĩa của vectơ chính của hệ lực và định nghĩa của khối tâm vật rắn, ta có:

$$\vec{R}^{qt'} = \sum\vec{F}_k^{qt} = -\sum m_k\vec{a}_k = -M\vec{a}_C$$

Mômen chính của hệ lực quán tính của vật rắn chuyển động phụ thuộc vào dạng chuyển động cụ thể của vật rắn.

#### Vật rắn chuyển động tịnh tiến

*Vật rắn chuyển động tịnh tiến.* Mômen chính của hệ lực quán tính đối với khối tâm vật rắn được tính như sau:

$$\vec{m}_C^{qt} = \sum\vec{m}_C(\vec{F}_k^{qt}) = \sum\vec{r}_k \wedge \vec{F}_k^{qt} = -\sum\vec{r}_k \wedge m_k\vec{a}_k$$

trong đó $\vec{r}_k$ là vectơ định vị của chất điểm $M_k$ đối với khối tâm $C$ tức $\vec{r}_k \equiv \overrightarrow{CM}_k \, ; \; \vec{r}_C = \vec{0}$. (H. $5 - 3$)

Chú ý rằng:

$$\vec{a}_k = \vec{a}_C \, ; \quad \sum m_k\vec{r}_k = M\vec{r}_C = \vec{0} \, ; \quad \vec{F}_k^{qt} = -m_k\vec{a}_k = -m\vec{a}_c$$

[Đính chính bản in: Ở biểu thức trên, $-m\vec{a}_c$ đúng kí hiệu là $-m_k\vec{a}_C$ (và trên Hình 5–3 kí hiệu $\vec{a}_c$ ứng với $\vec{a}_C$).]

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_5_3.svg" alt="Hình 5-3" style="max-height: 230px;" />

<div class="figure-caption">

Hình 5-3

</div>

</div>

Vậy :

$$\begin{aligned}
\vec{m}_C^{qt} &= -\sum\vec{r}_k \wedge m_k\vec{a}_k = \sum\vec{a}_k \wedge m_k\vec{r}_k = \\
&= \sum\vec{a}_C \wedge m_k\vec{r}_k = \vec{a}_C \wedge \sum m_k\vec{r}_k = \\
&= \vec{a}_C \wedge M\vec{r}_C = 0
\end{aligned}$$

[Đính chính bản in: Vế phải cuối cùng là vectơ $\vec{0}$.]

Do đó thu gọn hệ lực quán tính của vật chuyển động tịnh tiến về khối tâm $C$ ta được một lực đặt tại khối tâm $C$.

$$\vec{R}^{qt} = -M\vec{a}_C \tag{5-11}$$

#### Vật rắn là tấm phẳng chuyển động song phẳng

*Vật rắn là tấm phẳng chuyển động song phẳng.*

Lấy một chất điểm $M_k$, khối lượng $m_k$ có gia tốc $\vec{a}_k$. (H. 5–4).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_5_4.svg" alt="Hình 5-4" style="max-height: 280px;" />

<div class="figure-caption">

Hình 5-4

</div>

</div>

$$\vec{a}_k = \vec{a}_C + \vec{a}_{M_k C}^n + \vec{a}_{M_k C}^t$$

trong đó :

$$a_{M_k C}^n = r_k\omega_s^2 \, ; \quad a_{M_k C}^t = r_k\varepsilon_s \, ; \quad \vec{r}_k = \overrightarrow{CM}_k$$

Do đó:

$$\vec{F}_k^{qt} = \vec{F}_k^{qtc} + \vec{F}_k^{qtn} + \vec{F}_k^{qtt}$$

trong đó:

$$\begin{aligned}
\vec{F}_k^{qtc} &= -m_k\vec{a}_C \, ; \\
\vec{F}_k^{qtn} &= -m_k\vec{a}_{M_k C}^n \, ; \quad \vec{F}_k^{qtt} = -m_k\vec{a}_{M_k C}^t
\end{aligned}$$

Vậy:

$$\overline{m}_C^{qt} = \sum\overline{m}_C(\vec{F}_k^{qtc}) + \sum\overline{m}_C(\vec{F}_k^{qtn}) + \sum\overline{m}_C(\vec{F}_k^{qtt})$$

Chú ý rằng :

$$\begin{aligned}
\sum\vec{m}_C(\vec{F}_k^{qtc}) &= -\sum\vec{r}_k \wedge m_k\vec{a}_C = \\
&= \vec{a}_C \wedge \sum m_k\vec{r}_k = \vec{a}_C \wedge M\vec{r}_C = \vec{0}
\end{aligned}$$

$\sum\vec{m}_C(\vec{F}_k^{qtn}) = \vec{0}$ vì các lực $\vec{F}_k^{qtn}$ đi qua tâm lấy mômen $C$.

$$\sum\overline{m}_C(\vec{F}_k^{qtt}) = -\sum m_k r_k^2\overline{\varepsilon}_s = -J_{z_C}\overline{\varepsilon}_s$$

trong đó $J_{z_C} = \sum m_k r_k^2$ là mômen quán tính của tấm đối với trục thẳng góc với mặt phẳng tấm và qua khối tâm $C$.

Vậy : $\overline{m}_C^{qt} = -J_{z_C}\overline{\varepsilon}_s$

Kết quả thu gọn hệ lực quán tính của tấm về khối tâm $C$ sẽ là :

$$\begin{aligned}
\vec{R}_C^{qt'} &= -M\vec{a}_C \\
\overline{m}_C^{qt} &= -J_{z_C}\overline{\varepsilon}_s
\end{aligned} \tag{5-12}$$

Kết quả này còn đúng cho trường hợp vật rắn chuyển động song song với mặt phẳng đối xứng động lực của nó.

#### Vật quay quanh một trục cố định

*Vật quay quanh một trục cố định* với vận tốc góc $\vec{\omega}$ và gia tốc góc $\vec{\varepsilon}$ (H.5 – 5).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_5_5.svg" alt="Hình 5-5" style="max-height: 310px;" />

<div class="figure-caption">

Hình 5-5

</div>

</div>

Chọn hệ trục tọa độ $Oxyz$ gắn liền vào vật quay, trong đó $Oz$ trùng với trục quay của vật. Lấy phần tử $M_k$, có khối lượng $m_k$ và vectơ định vị $\vec{r}_k(x_k, y_k, z_k)$. Gia tốc của chất điểm $M_k$ bằng.

$$\vec{a}_k = \vec{a}_k^t + \vec{a}_k^n = \vec{\varepsilon} \wedge \vec{r}_k + \vec{\omega} \wedge \vec{v}_k \, ; \quad \vec{v}_k = \vec{\omega} \wedge \vec{r}_k$$

Lực quán tính của chất điểm $M_k$ sẽ là:

$$\vec{F}_k^{qt} = -m_k(\vec{\varepsilon} \wedge \vec{r}_k) - m_k(\vec{\omega} \wedge \vec{v}_k)$$

Vậy mômen chính của hệ lực quán tính của vật rắn đối với gốc tọa độ $O$ sẽ bằng :

$$\vec{m}_o^{qt} = \sum\vec{m}_o(\vec{F}_k^{qt}) = -\sum\vec{r}_k \wedge m_k(\vec{\varepsilon} \wedge \vec{r}_k) - \sum\vec{r}_k \wedge m_k(\vec{\omega} \wedge \vec{v}_k)$$

Trong hệ trục tọa độ đã chọn, các vectơ $\vec{r}_k, \vec{\omega}, \vec{\varepsilon}$ được xác định theo các vectơ đơn vị $\vec{i}, \vec{j}, \vec{k}$ trên các trục tọa độ như sau:

$$\vec{r}_k = x_k\vec{i} + y_k\vec{j} + z_k\vec{k} \, ; \quad \vec{\omega} = \overline{\omega}\vec{k} \, ; \quad \vec{\varepsilon} = \overline{\varepsilon}\vec{k}$$

Sau khi thực hiện các phép tính với chú ý rằng:

$$\vec{i} \wedge \vec{j} = \vec{k} \, ; \quad \vec{j} \wedge \vec{k} = \vec{i} \, ; \quad \vec{k} \wedge \vec{i} = \vec{j} \, ; \quad \vec{i} \wedge \vec{i} = \vec{j} \wedge \vec{j} = \vec{k} \wedge \vec{k} = \vec{0},$$

ta được:

$$\vec{m}_o^{qt} = (-\omega^2 J_{yz} + \overline{\varepsilon} J_{zx})\vec{i} + (\omega^2 J_{xz} + \overline{\varepsilon} J_{zy})\vec{j} - J_z\overline{\varepsilon}\vec{k}, \tag{5-13}$$

trong đó:

$$J_{yz} = \sum m_k y_k z_k \, ; \quad J_{xz} = \sum m_k x_k z_k \, ; \quad J_z = \sum m_k(x_k^2 + y_k^2)$$

Vectơ chính của hệ lực quán tính, như trên đã nêu, bằng

$$\vec{R}^{qt'} = -M\vec{a}_C = -M[\vec{\varepsilon} \wedge \vec{r}_C + \vec{\omega} \wedge (\vec{\omega} \wedge \vec{r}_C)]$$

Sau khi thay:

$$\vec{r}_C = x_C\vec{i} + y_C\vec{i} + z_C\vec{k}$$

chúng ta có:

$$\vec{R}^{qt'} = M(x_C\omega^2 + y_C\overline{\varepsilon})\vec{i} + M(y_C\omega^2 - x_C\overline{\varepsilon})\vec{J} \tag{5-14}$$

[Đính chính bản in: Ở biểu thức $\vec{r}_C$ ngay trên, hạng tử thứ hai in nhầm là $y_C\vec{i}$ thay vì $y_C\vec{j}$; trong công thức $(5-14)$, vectơ đơn vị trục $Oy$ in hoa là $\vec{J}$ thay vì $\vec{j}$.]

Như vậy thu gọn hệ lực quán tính của vật quay quanh một trục cố định về một điểm nằm trên trục quay của vật ta được một lực tính theo công thức $(5 - 14)$ và một ngẫu lực được tính theo công thức $(5 - 13)$.

### 5.3.3. Áp dụng

#### 1. Phương trình xác định phản lực trục quay

Khảo sát vật rắn quay quanh một trục cố định dưới tác dụng của các lực hoạt động $(\vec{F}_1, \vec{F}_2, ... \vec{F}_N)$, có vận tốc góc $\vec{\omega}$ và gia tốc góc $\vec{\varepsilon}$.

Các ngoại lực tác dụng lên vật rắn bao gồm các lực hoạt động $\vec{F}_1, \vec{F}_2, ... \vec{F}_N$ và các phản lực ổ trục $\vec{R}_A$ và $\vec{R}_B$.

Chọn hệ trục tọa độ gắn liền vào vật $Axyz$, có trục $Az$ trùng với trục quay (H.5 – 6).

Hệ lực quán tính của vật rắn thu gọn về tâm $A$ được một lực $\vec{R}_A^{qt'}$ và ngẫu lực $\vec{m}_A^{qt}$ được tính theo các công thức $(5 - 14)$ và $(5 - 13)$.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_5_6.svg" alt="Hình 5-6" style="max-height: 310px;" />

<div class="figure-caption">

Hình 5-6

</div>

</div>

Dựa trên phương pháp Tĩnh – Động lực hình học, ta viết các phương trình cân bằng tĩnh học cho hệ lực:

$$(\vec{F}_1, \vec{F}_2, ..., \vec{F}_N, \vec{R}_A, \vec{R}_B, \vec{R}_A^{qt'}, \vec{m}_A^{qt}),$$

chúng ta nhận được:

$$\begin{aligned}
&\sum F_{kx} + R_{Ax} + R_{Bx} + My_C\overline{\varepsilon} + Mx_C\omega^2 = 0 \\
&\sum F_{ky} + R_{Ay} + R_{By} + My_C\omega^2 - Mx_C\overline{\varepsilon} = 0 \\
&\sum F_{kz} + R_{Az} = 0 \\
&\sum m_x(\vec{F}_k) + m_x(\vec{R}_A) + m_x(\vec{R}_B) - J_{yz}\omega^2 + J_{zx}\overline{\varepsilon} = 0 \\
&\sum m_y(\vec{F}_k) + m_y(\vec{R}_A) + m_y(\vec{R}_B) + J_{xz}\omega^2 + J_{yz}\overline{\varepsilon} = 0 \\
&\sum m_z(\vec{F}_k) - J_z\overline{\varepsilon} = 0
\end{aligned} \tag{5-15}$$

Vì hệ trục tọa độ gắn liền vào vật quay nên các đại lượng $x_C, y_C, J_{zx}, J_z$ là không đổi.

Như vậy ta nhận được sáu phương trình, trong đó phương trình cuối cùng không chứa các phản lực ổ trục, cho phép xác định chuyển động của vật quay, được gọi là phương trình vi phân vật quay quanh một trục cố định đã được thiết lập trong chương 3 (xem $(3 - 49)$ chương 3, 4).

Năm phương trình còn lại cho phép ta xác định các phản lực ổ trục tại A và B.

Chú ý rằng các phản lực ổ trục phụ thuộc vào các lực hoạt động và các yếu tố động học của vật rắn, tức vận tốc góc $\overline{\omega}$ và gia tốc góc $\overline{\varepsilon}$ của vật quay.

Thành phần của phản lực ổ trục chỉ phụ thuộc vào các yếu tố động học của vật quay ($\overline{\omega}$ và $\overline{\varepsilon}$) được gọi là phản lực động lực của ổ trục.

Để làm sáng tỏ điều này ta biểu diễn phản lực ổ trục dưới dạng:

$$\vec{R}_A = \vec{R}_A^t + \vec{R}_A^{\text{đ}} \, ; \quad \vec{R}_B = \vec{R}_B^t + \vec{R}_B^{\text{đ}}$$

trong đó $R_A^t, R_B^t$ là các thành phần không phụ thuộc vào chuyển động, tức không chứa $\overline{\omega}$ và $\overline{\varepsilon}$, được gọi là các phản lực tĩnh, $\vec{R}_A^{\text{đ}}, \vec{R}_B^{\text{đ}}$ là các thành phần phụ thuộc vào chuyển động, tức chứa $\overline{\omega}$ và $\overline{\varepsilon}$ được gọi là các phản lực động lực.

Dễ dàng thấy rằng các thành phần phản lực động lực được xác định nhờ hệ phương trình sau:

$$\begin{aligned}
&R_{Ax}^{\text{đ}} + R_{Bx}^{\text{đ}} + Mx_C\omega^2 + My_C\overline{\varepsilon} = 0 \\
&R_{Ay}^{\text{đ}} + R_{By}^{\text{đ}} + My_C\omega^2 - Mx_C\overline{\varepsilon} = 0 \\
&m_x(\vec{R}_A^{\text{đ}}) + m_x(\vec{R}_B^{\text{đ}}) - J_{yz}\omega^2 + J_{zx}\overline{\varepsilon} = 0 \\
&m_y(\vec{R}_A^{\text{đ}}) + m_y(\vec{R}_B^{\text{đ}}) + J_{yz}\overline{\varepsilon} + J_{zx}\omega^2 = 0
\end{aligned} \tag{5-16}$$

Các phương trình này được gọi là các phương trình xác định phản lực động lực.

Việc xuất hiện các phản lực động lực làm giảm độ bền, độ chính xác, năng suất và gây hư hỏng máy. Chính vì vậy cần phải triệt tiêu hoặc giảm các phản lực động lực. Điều kiện cần và đủ để triệt tiêu các phản lực động lực là trục quay phải thỏa mãn các điều kiện sau:

$$\begin{aligned}
&x_C = y_C = 0 \\
&J_{yz} = J_{zx} = 0
\end{aligned} \tag{5-17}$$

tức trục quay phải qua trọng tâm và là trục quán tính chính. Nói khác đi để triệt tiêu hoàn toàn phản lực động lực, trục quay phải là trục quán tính chính trung tâm.

Trong trường hợp trục quay không phải là trục quán tính chính trung tâm thì bằng cách thêm hoặc bớt khối lượng của vật quay, nó có thể trở thành trục quán tính chính trung tâm. Vấn đề này sẽ được trình bày trong giáo trình nguyên lí máy.

#### Thí dụ 5-3

**Thí dụ 5 – 3 :** Trục máy là một trụ tròn đồng chất khối lượng $m$, quay đều với vận tốc góc $\omega_o$. Trục quay của trục máy song song và cách trục đối xứng một đoạn $e$. Xác định phản lực tại ổ trục $A$ và $B$ (H. $5 - 7$).

**Bài giải**

Khảo sát trục máy. Đây là trường hợp trục máy lệch tâm, nhưng không lệch trục.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_5_7.svg" alt="Hình 5-7" style="max-height: 310px;" />

<div class="figure-caption">

Hình 5-7

</div>

</div>

Ngoại lực gồm có trọng lực và các phản lực tại các ổ trục.

Chọn hệ trục $Oxyz$ gắn liền với trục máy sao cho khối tâm $C$ nằm trên trục $Oy$. Với hệ trục tọa độ này, ta có:

$$\begin{aligned}
x_C &= 0 \, ; \quad y_C = e \, ; \\
J_{yz} &= J_{zx} = 0.
\end{aligned}$$

Phương trình xác định phản lực trục quay sẽ là:

$$\begin{aligned}
&X_A + X_B = 0 \\
&Y_A + Y_B + Me\omega^2 = 0 \\
&Z_A - P = 0 \\
&-Y_B b + Y_A a - Pe = 0 \\
&X_B . b - X_A a = 0
\end{aligned}$$

Giải hệ phương trình này ta được :

$$\begin{aligned}
X_A &= X_B = 0, \quad Z_A = P \\
Y_A &= -\frac{b}{a+b}Me\omega^2 - \frac{P.e}{a+b} \, ; \\
Y_B &= -\frac{a}{a+b}Me\omega^2 + \frac{Pe}{a+b}
\end{aligned}$$

Phản lực động lực sẽ là:

$$\begin{aligned}
X_A^{\text{đ}} &= X_B^{\text{đ}} = 0 \, ; \quad Z_A^{\text{đ}} = 0 \, ; \\
Y_A^{\text{đ}} &= -\frac{b}{a+b}Me\omega^2 \, ; \quad Y_B^{\text{đ}} = -\frac{a}{a+b}Me\omega^2.
\end{aligned}$$

nó dễ dàng được tìm trực tiếp từ hệ phương trình xác định phản lực động lực $(5 - 16)$.

[Đính chính bản in: Trong lời giải trên dùng kí hiệu khối lượng $M$ và vận tốc góc $\omega$ thay cho $m$ và $\omega_o$ nêu ở đề bài.]

#### Thí dụ 5-4

**Thí dụ 5 – 4.** Trục máy là một trụ tròn đồng chất có khối lượng $m$, bán kính $R$ quay đều với vận tốc góc $\omega$ quanh trục đi qua khối tâm $C$ và lệch đối với trục đối xứng một góc $\alpha$. Xác định các phản lực động lực tại gối đỡ $A$ và $B$.

Các kích thước cho trên hình vẽ $5 - 8$.

**Bài giải**

Khảo sát trục máy. Trường hợp này trục quay đúng tâm nhưng lệch trục.

Ngoại lực tác dụng gồm trọng lực và các phản lực tại các ổ trục. Chọn hệ trục tọa độ $Oxyz$ gắn liền vào vật quay trong đó trục $z$ là trục quay, còn các trục $Cx$ và $Cy$ được chọn như sau:

Trục $Cx$ thẳng góc với mặt phẳng chứa trục $Cz$ và $Cz'$.

Trục $Cy$ thẳng góc với các trục $Cx$ và $Cz$ và tạo thành tam diện thuận.

Trong trường hợp này trục quay $Cz$ không phải là trục quán tính chính, nhưng có trục $Cx$ là trục quán tính chính trung tâm.

Ta có: $x_C = y_C = 0 \, ; \; J_{xz} = 0 \, ; \; J_{yz} \neq 0$

Phương trình xác định phản lực động lực cho ta:

$$\begin{aligned}
X_A^{\text{đ}} + X_B^{\text{đ}} &= 0 \\
Y_A^{\text{đ}} + Y_B^{\text{đ}} &= 0
\end{aligned}$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_5_8.svg" alt="Hình 5-8" style="max-height: 330px;" />

<div class="figure-caption">

Hình 5-8

</div>

</div>

[Đính chính bản in: Trên Hình 5–8 bản in không ghi các kích thước $a, b$ (khoảng cách từ $C$ đến $A, B$) và nửa chiều dài $l$ của hình trụ.]

$$\begin{aligned}
Y_A^{\text{đ}} \cdot a - Y_B^{\text{đ}} \cdot b - J_{yz}\omega^2 &= 0 \\
X_A^{\text{đ}} \cdot a - X_B^{\text{đ}} \cdot b &= 0
\end{aligned}$$

Khi giải hệ phương trình trên ta nhận được:

$$X_A^{\text{đ}} = X_B^{\text{đ}} = 0 \, ; \quad Y_A^{\text{đ}} = -Y_B^{\text{đ}} = \frac{1}{a+b}J_{yz}\omega^2$$

Do đó phản lực động tại A và B tạo thành ngẫu lực $m = J_{yz}\omega^2$

Để tính $J_{yz}$ ta xuất phát từ định nghĩa của nó:

$$J_{yz} = \sum m_k y_k z_k$$

Sử dụng công thức đổi trục tọa độ (H.5 – 9):

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_5_9.svg" alt="Hình 5-9" style="max-height: 260px;" />

<div class="figure-caption">

Hình 5-9

</div>

</div>

$$y_k = y'_k\cos\alpha - z'_k\sin\alpha \, ; \quad z_k = y'_k\sin\alpha + z'_k\cos\alpha$$

ta có :

$$\begin{aligned}
J_{yz} &= \sum m_k y_k z_k = \sum m_k(y'_k\cos\alpha - z'_k\sin\alpha)(y'_k\sin\alpha + z'_k\cos\alpha) \\
&= \frac{1}{2}\sin 2\alpha\left[\sum m_k(y_k^{\prime 2} + x_k^{\prime 2}) - \sum m_k(z_k^{\prime 2} + x_k^{\prime 2})\right] \\
J_{yz} &= \frac{1}{2}\sin 2\alpha\,(J_{z'} - J_{y'}) \\
&= \frac{1}{2}\sin 2\alpha\left[\frac{MR^2}{2} - M\left(\frac{R^2}{4} + \frac{l^2}{3}\right)\right] \\
J_{yz} &= \frac{1}{2}M\left(\frac{R^2}{4} - \frac{l^2}{3}\right)\sin 2\alpha.
\end{aligned}$$

#### 2. Phương trình vi phân chuyển động của vật rắn chuyển động song phẳng

Khảo sát một tấm phẳng chuyển động trong mặt phẳng của nó dưới tác dụng của hệ lực $\vec{F}_1, \vec{F}_2, ..., \vec{F}_N$. Hệ lực quán tính của vật chuyển động song phẳng thu về khối tâm $C$ của nó được một lực $\vec{R}_C^{qt'}$ và một ngẫu lực $\overline{m}_C^{qt}$ tính theo công thức $(5 - 12)$.

Áp dụng phương pháp Tĩnh – Động lực hình học để viết các phương trình cân bằng cho hệ lực:

$$(\vec{F}_1, \vec{F}_2, ..., \vec{F}_N, \vec{R}_C^{qt'}, \overline{m}_C^{qt})$$

ta được:

$$\begin{aligned}
&\vec{R}_C^{qt'} + \sum_{k=1}^N \vec{F}_k = \vec{0} \\
&\overline{m}_C^{qt} + \sum_{k=1}^N \overline{m}_C(\vec{F}_k) = 0
\end{aligned}$$

Theo $(5 - 12)$ :

$$\vec{R}_C^{qt'} = -M\vec{a}_C \, ; \quad \overline{m}_C^{qt} = -J_C\overline{\varepsilon}_s$$

nên các phương trình cân bằng vừa thiết lập trên có thể viết dưới dạng sau:

$$\begin{aligned}
M\vec{a}_C &= \sum\vec{F}_k \\
J_C\overline{\varepsilon}_s &= \sum\overline{m}_C(\vec{F}_k)
\end{aligned} \tag{5-18}$$

nó mô tả chuyển động song phẳng của vật rắn.

Từ $(5 - 18)$ ta nhận được phương trình vi phân chuyển động của vật chuyển động song phẳng trong các dạng khác nhau, chẳng hạn:

$$\begin{aligned}
M\ddot{x}_C &= \sum F_{kx} \\
M\ddot{y}_C &= \sum F_{ky} \\
J_C\ddot{\overline{\varphi}} &= \sum\overline{m}_C(\vec{F}_k)
\end{aligned} \tag{5-19}$$

trong đó $x_C, y_C$ là tọa độ khối tâm $C$ của vật chuyển động song phẳng đối với hệ trục tọa độ Đề các vuông góc cố định, còn $\overline{\varphi}$ là góc định vị của nó đối với hệ trục tọa độ có gốc tại khối tâm $C$ và chuyển động tịnh tiến đối với hệ trục tọa độ cố định.

Trong trường hợp biết quỹ đạo của khối tâm $C$ của vật, ta viết các phương trình $(5 - 18)$ dưới dạng:

$$\begin{aligned}
M\ddot{\overline{s}}_C &= \sum F_k^t \\
M\frac{v_C^2}{\rho_C} &= \sum F_k^n \\
J_C\ddot{\overline{\varphi}} &= \sum\overline{m}_C(\vec{F}_k)
\end{aligned} \tag{5-20}$$

trong đó $\vec{s}_c$ và $\vec{v}_C$ là tọa độ cong và vận tốc của khối tâm $C$; $\rho_C$ là bán kính cong của quỹ đạo khối tâm.

[Đính chính bản in: Tọa độ cong của khối tâm $C$ là đại lượng đại số $\overline{s}_C$ (bản in đặt dấu vectơ thành $\vec{s}_c$).]

Các phương trình vi phân chuyển động $(5 - 19)$ hoặc $(5 - 20)$ được sử dụng rất thuận tiện để giải quyết các bài toán thuận và ngược của động lực học của vật rắn chuyển động song phẳng.

#### Thí dụ 5-5

**Thí dụ 5 – 5.** Trục của bánh xe bị dẫn của một ôtô chạy trên đường thẳng nằm ngang chịu tác dụng của lực nằm ngang $\vec{F}$ và lực thẳng đứng $\vec{Q}$. Bánh xe có trọng lượng $\vec{P}$, bán kính $R$ và có khối tâm trùng với trục quay riêng. Bán kính quán tính của bánh xe đối với trục quay riêng bằng $\rho$. Tìm điều kiện để bánh xe lăn không trượt. Cho hệ số ma sát trượt tĩnh bằng $f$ và bỏ qua ma sát lăn.

**Bài giải**

Khảo sát chuyển động song phẳng của bánh xe trong mặt phẳng thẳng đứng. Các lực tác dụng lên bánh xe gồm tải trọng thẳng đứng $\vec{Q}$, lực đẩy ngang $\vec{F}$, trọng lượng của bánh xe $\vec{P}$ phản lực pháp tuyến $\vec{N}$ của mặt đường và lực ma sát trượt $\vec{F}_{ms}$ (Hình $5 - 10$).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_5_10.svg" alt="Hình 5-10" style="max-height: 240px;" />

<div class="figure-caption">

Hình 5-10

</div>

</div>

Viết phương trình vi phân chuyển động dạng $(5 - 19)$ cho bánh ô tô, ta có:

$$\begin{aligned}
\frac{P}{g}\ddot{x}_C &= F - F_{ms} && \text{(a)} \\
\frac{P}{g}\ddot{y}_C &= N - P - Q && \text{(b)} \\
J_c\ddot{\overline{\varphi}} &= -F_{ms}R && \text{(c)}
\end{aligned}$$

ba phương trình chứa năm đại lượng chưa biết. Do đó cần phải tìm các phương trình bổ sung.

Điều kiện khối tâm $C$ của bánh xe chạy trên đường thẳng, tức $y_C = R$, cho ta:

$$\ddot{y}_C = 0 \qquad \text{(d)}$$

Do bánh xe lăn không trượt trên đường ngang, nên tâm vận tốc là tiếp điểm $I$ giữa bánh xe và đường, tức $\overline{v}_C = -R\dot{\overline{\varphi}}$. Vậy:

$$\ddot{x}_C = -R\ddot{\overline{\varphi}} \qquad \text{(e)}$$

Cuối cùng ta viết định luật Culông về ma sát trượt do điều kiện bánh xe không bị trượt:

$$F_{ms} \leqslant fN \qquad \text{(g)}$$

Từ (a) (b) (c) và (d) ta dễ dàng tính được

[Đính chính bản in: Để tính $F_{ms}$ cần kết hợp thêm cả phương trình (e) $\ddot{x}_C = -R\ddot{\overline{\varphi}}$ và $J_C = \dfrac{P}{g}\rho^2$.]

$$N = P + Q \, ; \quad F_{ms} = \frac{\rho^2}{\rho^2 + R^2}F \qquad \text{(f)}$$

Khi thay các đại lượng từ (f) vào (g): ta có:

$$\frac{\rho^2 + R^2}{\rho^2}F \leqslant f(P + Q)$$

[Đính chính bản in: Ở bất đẳng thức trung gian ngay trên bị đảo nhầm phân số, đúng là $\dfrac{\rho^2}{\rho^2 + R^2}F \leqslant f(P + Q)$, từ đó suy ra kết quả cuối cùng ở dưới.]

Vậy điều kiện để bánh xe trong chuyển động không bị trượt sẽ là:

$$F \leqslant f \cdot \frac{\rho^2 + R^2}{\rho^2}(P + Q)$$

*Chú ý:* Áp dụng phương pháp Tĩnh hình học – Động lực vào khảo sát chuyển động vật rắn khác: chuyển động tịnh tiến, chuyển động quay quanh một điểm cố định, chuyển động tổng quát, ta dễ dàng rút ra các phương trình chuyển động của chúng.

---

## 5.4. Phương pháp Tĩnh giải tích – Động lực

### 5.4.1. Nội dung phương pháp

Khảo sát cơ hệ chịu liên kết hôlônôm, giữ, dừng và lý tưởng gồm các chất điểm $M_1, M_2, ... M_N$ chịu tác dụng các lực hoạt động tương ứng $\vec{F}_1, \vec{F}_2, ..., \vec{F}_N$. Mỗi chất điểm $M_K$ của cơ hệ chịu tác dụng của lực hoạt động $\vec{F}_K$ và lực liên kết $\vec{R}_K$, chuyển động với gia tốc $\vec{a}_K$. Do đó lực quán tính của nó được xác định bằng:

$$\vec{F}_K^{qt} \equiv -m_k\vec{a}_k$$

Theo nguyên lý Đalămbe ta có:

$$(\vec{F}_1, \vec{F}_2, ..., \vec{F}_N, \vec{R}_1, \vec{R}_2, ..., \vec{R}_N, \vec{F}_1^{qt}, \vec{F}_2^{qt}, ..., \vec{F}_N^{qt}) \equiv 0, \tag{5-21}$$

Dựa vào nguyên lý di chuyển khả dĩ, tổng công khả dĩ của hệ lực $(5 - 21)$ sẽ triệt tiêu. Chú ý các liên kết đặt lên cơ hệ là lý tưởng ($\sum\vec{R}_k\delta\vec{r}_k = 0$).

Khi cho cơ hệ di chuyển khả dĩ chúng ta nhận được:

$$\sum\vec{F}_k\delta\vec{r}_k + \sum\vec{F}_k^{qt} \cdot \delta\vec{r}_k = \sum(\vec{F}_k + \vec{F}_k^{qt}) \cdot \delta\vec{r}_k = 0$$

Do đó:

$$\sum(\vec{F}_k - m_k\vec{a}_k) \cdot \delta\vec{r}_k = 0 \tag{5-22}$$

hoặc:

$$\sum\left[(F_{kx} - m_k\ddot{x}_k)\delta x_k + (F_{ky} - m_k\ddot{y}_k)\delta y_k + (F_{kz} - m_k\ddot{z}_k)\delta z_k\right] = 0 \tag{5-23}$$

Phương trình $(5 - 22)$ hoặc phương trình $(5 - 23)$ được gọi là phương trình tổng quát của động lực học. Cần chú ý rằng phương trình tổng quát của động lực học là phương trình biến phân, nó tương đương với hệ phương trình vi phân.

Phương pháp giải bài toán động lực học bằng cách sử dụng trực tiếp phương trình tổng quát của động lực học được gọi là phương pháp Tĩnh giải tích – Động lực. Để sử dụng phương pháp Tĩnh giải tích – Động lực ta đặt trực tiếp các lực quán tính của chất điểm thuộc cơ hệ (trong trường hợp vật rắn và hệ vật rắn thì hệ lực quán tính của vật rắn được thay thế bởi kết quả thu gọn của chúng), sau đó cho cơ hệ di chuyển khả dĩ, tính tổng công khả dĩ của các lực hoạt động và lực quán tính và cho bằng không.

### 5.4.2. Áp dụng

#### Thí dụ 5-6

**Thí dụ 5 – 6.** Một thanh mảnh đồng chất $AB$ được gắn bằng bản lề vào một trục quay thẳng đứng tại $O$ (H. $5 - 11$), cho $OA = a \, ; \; OB = b$. Trục quay đều với vận tốc góc $\omega$. Bỏ qua ma sát tại chốt bản lề nằm ngang $O$.

Tìm hệ thức giữa vận tốc góc $\omega$ và góc nghiêng $\varphi$ giữa trục quay và thanh $AB$.

**Bài giải**

Khảo sát thanh $AB$ quay đều quanh trục thẳng đứng qua $O$ với vận tốc góc $\omega$. Chọn tọa độ suy rộng là góc $\varphi$ như trên hình 5–11.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_5_11.svg" alt="Hình 5-11" style="max-height: 270px;" />

<div class="figure-caption">

Hình 5-11

</div>

</div>

Các lực hoạt động gồm các trọng lực của các đoạn thanh $OA$ và $OB$.

Các lực quán tính của các chất điểm của thanh là hệ lực song song cùng chiều, có phân bố dạng tam giác.

Để tìm kết quả thu gọn của hệ lực quán tính, ta xét một phân tố $M_k$, có khối lượng $m_k$, nằm cách gốc $O$ một khoảng $s_k$. Lực quán tính của chất điểm $M_k$ là lực ly tâm, có phương vuông góc với trục $AB$, có chiều hướng xa trục quay, có giá trị bằng:

[Đính chính bản in: Lực quán tính ly tâm có phương vuông góc với trục quay thẳng đứng (chứ không phải vuông góc với thanh $AB$); ở biểu thức dưới $m$ là khối lượng phân tố $m_k$.]

$$F_k^{qt} = m h_k \omega^2 = m_k s_k \sin\varphi\omega^2$$

Như đã biết trong phần tĩnh học, hệ lực song song phân bố tam giác có hợp lực, phương chiều và giá trị của nó là phương chiều và giá trị của vectơ chính của hệ lực và đặt tại trọng tâm của tam giác phân bố lực. Do đó, hệ lực quán tính của thanh $AB$ được thu về hai lực $\vec{R}_1^{qt}$ và $\vec{R}_2^{qt}$ có phương song song và cùng chiều với lực phân bố và đặt tại trọng tâm $G_1$ và $G_2$ của các tam giác phân bố lực. Vậy:

$$\begin{aligned}
R_1^{qt} &= \sum m_k s_k \sin\varphi\omega^2 = \omega^2\sin\varphi \sum m_k s_k = \omega^2\sin\varphi \, m_1 s_{C_1} \\
&= \omega^2\sin\varphi \frac{m}{a+b}a \cdot \frac{a}{2} = \frac{1}{2}\frac{a^2}{a+b}m\omega^2\sin\varphi
\end{aligned}$$

Tương tự, ta có:

$$R_2^{qt} = \frac{1}{2}\frac{b^2}{a+b}m\omega^2\sin\varphi$$

Các điểm $G_1$ và $G_2$ nằm cách đáy của tam giác phân bố lực các khoảng tương ứng bằng $\dfrac{1}{3}a\cos\varphi$ và $\dfrac{1}{3}b\cos\varphi$.

Cho cơ hệ một di chuyển khả dĩ ứng với thanh $AB$ quay quanh chốt nằm ngang $O$ một góc $\delta\varphi$. Từ phương trình tổng quát của động lực học, ta có:

$$\begin{aligned}
&\left(-P_1\frac{a}{2}\sin\varphi + P_2\frac{b}{2}\sin\varphi + \right. \\
&\left. + R_1^{qt}\frac{2}{3}a\cos\varphi - R_2^{qt}\frac{2}{3}b\cos\varphi\right)\delta\varphi = 0
\end{aligned}$$

Do $\delta\varphi \neq 0$, ta nhận được:

$$-P_1\frac{a}{2}\sin\varphi + P_2\frac{b}{2}\sin\varphi + R_1^{qt}\frac{2}{3}a\cos\varphi - R_2^{qt}\frac{2}{3}b\cos\varphi = 0$$

hay:

$$\begin{aligned}
&-P_1\frac{a}{2}\sin\varphi + P_2\frac{b}{2}\sin\varphi + \frac{a^2}{2(a+b)}m\omega^2\sin\varphi\frac{2}{3}a\cos\varphi - \\
&\qquad \frac{b^2}{2(a+b)}m\omega^2\sin\varphi\frac{2}{3}b\cos\varphi = 0
\end{aligned}$$

Từ đó rút ra

$$\omega^2 = \frac{3}{2}\frac{(a P_1 - b P_2)(a+b)}{(a - b)(a^2 + ab + b^2)m\cos\varphi}$$

*Chú ý :* Kết quả trên có thể tìm được nhờ phương pháp Tĩnh hình học – Động lực khi thành lập phương trình momen của các ngoại lực và lực quán tính đối với chốt $O$.

#### Thí dụ 5-7

**Thí dụ 5 – 7.** Tìm điều kiện cân bằng tương đối của cơ cấu điều tiết ly tâm như trên hình vẽ. Các quả văng $C, D$ có trọng lượng $\vec{P}_1, \vec{P}_2$ ($P_1 = P_2 = P$), đối trọng $E$ có trọng lượng $\vec{Q}$. Bỏ qua trọng lượng các thanh và ma sát ở các khớp và ổ trục. Hai điểm treo $A, B$ cách đều trục quay một khoảng $e$. Các thanh có cùng chiều dài $l$. Cho biết lò xo có độ cứng $c$ và khi các thanh treo nằm ở vị trí thẳng đứng thì lò xo không bị biến dạng (H. $5 - 12$).

**Bài giải**

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_5_12.svg" alt="Hình 5-12" style="max-height: 350px;" />

<div class="figure-caption">

Hình 5-12

</div>

</div>

Khảo sát cơ hệ là cơ cấu điều tiết ly tâm. Cơ cấu chịu liên kết hôlônôm, giữ, dừng và lý tưởng.

Các lực hoạt động gồm các trọng lực $\vec{P}_1, \vec{P}_2, \vec{Q}, \vec{F}_1, \vec{F}_2$, trong đó $\vec{F}_1, \vec{F}_2$ là hai lực đàn hồi lò xo.

$$\begin{aligned}
F_1 &= F_2 = c\delta \\
&= c \cdot 2 \cdot \frac{1}{2}\sin\varphi = cl\sin\varphi
\end{aligned}$$

Do khung cân bằng tương đối nên hai quả văng coi như gắn liền với khung, cùng với khung quay đều quanh trục thẳng đứng với vận tốc góc $\omega$, còn đối trọng $E$ đứng yên.

Do đó, các lực quán tính của các quả văng được tính như sau:

$$\begin{aligned}
F_C^{qt} &= m_C a_C = m(e + 1\sin\varphi)\omega^2 \, ; \\
F_D^{qt} &= m_D a_D = m(e + l\sin\varphi)\omega^2.
\end{aligned}$$

Phương chiều của hai lực này được xác định trên hình vẽ. Lực quán tính của đối trọng $E$ bằng không.

Viết phương trình công khả dĩ cho hệ lực

$$(\vec{P}_1, \vec{P}_2, \vec{Q}, \vec{F}_1, \vec{F}_2, \vec{F}_C^{qt}, \vec{F}_D^{qt}),$$

ta được :

$$P_1\delta z_C + P_2\delta z_D + Q\delta z_E - F_C^{qt}\delta x_C + F_D^{qt}\delta x_D + F_1\delta x_1 - F_2\delta x_K = 0$$

Từ hình vẽ ta có :

$$z_C = z_D = l\cos\varphi \, ; \quad x_C = -(e + l\sin\varphi) \, ; \quad x_D = e + l\sin\varphi \, ;$$

$$x_I = -\left(e + \frac{1}{2}\sin\varphi\right) \, ; \quad x_K = e + \frac{1}{2}\sin\varphi \, ; \quad z_E = 2l\cos\varphi$$

Vậy :

$$\delta z_C = \delta z_D = -l\sin\varphi\delta\varphi \, ; \quad \delta x_C = -l\cos\varphi\delta\varphi \, ; \quad \delta x_D = -l\cos\varphi\delta\varphi \, ;$$

$$\delta x_I = -\frac{1}{2}\cos\varphi\delta\varphi \, ; \quad \delta x_K = \frac{1}{2}\cos\varphi\delta\varphi \, ; \quad \delta z_E = -2l\sin\varphi\delta\varphi.$$

Thay các đại lượng này vào phương trình công khả dĩ, ta có;

$$\begin{aligned}
&-Pl\sin\varphi\delta\varphi - Pl\sin\varphi\delta\varphi - 2Ql\sin\varphi\delta\varphi + F_C^{qt}l\cos\varphi\delta\varphi + \\
&\qquad F_D^{qt}l\cos\varphi\delta\varphi - F_1\frac{1}{2}\cos\varphi\delta\varphi - F_2\frac{1}{2}\cos\varphi\delta\varphi = 0
\end{aligned}$$

Khi thay các giá trị của $\vec{F}_1, \vec{F}_2, \vec{F}_C^{qt}, \vec{F}_D^{qt}$ và rút gọn cho $l\delta\varphi \neq 0$ đối với phương trình công khả dĩ ta được :

$$-2P\sin\varphi - 2Q\sin\varphi + 2P(e + l\sin\varphi)\omega^2\cos\varphi - l^2\cos\varphi\sin\varphi = 0$$

$$\text{Vậy : } \omega^2 = \frac{P + Q + \dfrac{1^2\cos\varphi}{2}}{P(e + l\sin\varphi)}\operatorname{tg}\varphi$$

[Đính chính bản in: Trong Thí dụ 5–7 có một số lỗi chế bản: (1) chữ $l$ bị in nhầm thành số $1$ ở các chỗ $\frac{1}{2}$ (đúng là $\frac{l}{2}$), $1\sin\varphi$ (đúng là $l\sin\varphi$) và $1^2$ (đúng là $l^2$); (2) ở phương trình công khả dĩ đầu trang 124, $\delta x_1$ là $\delta x_I$, và ở bên dưới $\delta x_D = +l\cos\varphi\delta\varphi$ (in nhầm dấu trừ); (3) khi thay $F_C^{qt} = F_D^{qt} = \frac{P}{g}(e + l\sin\varphi)\omega^2$ và $F_1 = F_2 = cl\sin\varphi$, các thừa số $g$ và $c$ bị sót nên hai dòng cuối đúng phải là $-2(P+Q)\sin\varphi + 2\frac{P}{g}(e+l\sin\varphi)\omega^2\cos\varphi - cl\sin\varphi\cos\varphi = 0$ và $\omega^2 = \dfrac{g\left(P + Q + \frac{cl\cos\varphi}{2}\right)}{P(e + l\sin\varphi)}\operatorname{tg}\varphi$.]

#### Thí dụ 5-8

**Thí dụ 5 – 8.** Một sợi dây nhẹ, không giãn, một đầu buộc vào vật $A$ có trọng lượng $P_1$, trượt trên mặt phẳng ngang có hệ số ma sát trượt $f$, sau đó vòng qua ròng rọc cố định $O$, ròng rọc động $D$, rồi đến ròng rọc cố định $E$ và một đầu buộc vào vật nặng $B$ có trọng lượng $P_2$ chuyển động theo phương thẳng đứng. Vật nặng $C$ có trọng lượng $Q$ buộc vào tâm ròng rọc $D$. Bỏ qua ma sát giữa dây (H.5–13) và các ròng rọc cố định và hiện tượng trượt giữa dây và ròng rọc động.

**Bài giải**

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_5_13.svg" alt="Hình 5-13" style="max-height: 290px;" />

<div class="figure-caption">

Hình 5-13

</div>

</div>

Khảo sát cơ hệ gồm các vật $A, B, C$ nối với nhau bằng dây nhẹ không giãn. Cơ hệ chịu liên kết hôlônôm giữ, dừng và lý tưởng nếu xem lực ma sát trượt giữa vật $A$ và mặt phẳng ngang thuộc lực hoạt động. Cơ hệ có hai bậc tự do.

Các lực hoạt động gồm các lực $\vec{P}_1, \vec{P}_2, \vec{Q}$ và $\vec{F}_{ms}$, trong đó :

$$F_{ms} = fN_A = fP_1$$

Các lực quán tính của các vật được xác định như sau:

$$\vec{F}_A^{qt} = -\frac{P_1}{g}\vec{a}_A \, ; \quad \vec{F}_B^{qt} = -\frac{P_2}{g}\vec{a}_B \, ; \quad \vec{F}_C^{qt} = -\frac{Q}{g}\vec{a}_C$$

Chọn các tọa độ suy rộng đủ là $x_A$ và $y_B$. Ta có các hệ thức :

$$x_A + y_B + 2y_C = \text{const} \, ; \quad \delta y_C = -\frac{1}{2}(\delta x_A + \delta y_B) \, ;$$

$$\ddot{y}_C = -\frac{1}{2}(\ddot{x}_A + \ddot{y}_B)$$

Phương trình tổng quát của động lực học cho ta :

$$\begin{aligned}
&\left(P_2 - \frac{P_2}{g}\ddot{y}_B\right)\delta y_B + \left(fP_1 - \frac{P_1}{g}\ddot{x}_A\right)\delta x_A \\
&\qquad + \left(Q - \frac{Q}{g}\ddot{y}_C\right)\delta y_C = 0
\end{aligned}$$

Dựa vào các hệ thức trên và dựa vào tính chất độc lập của các biến phân $\delta x_A, \delta y_B$, ta nhận được :

$$\begin{aligned}
\frac{Q}{4g}\ddot{x}_A + \frac{4P_2 + Q}{4g}\ddot{y}_B &= P_2 - \frac{Q}{2} \, ; \\
\frac{4P_1 + Q}{4g}\ddot{x}_A + \frac{Q}{4g}\ddot{y}_B &= fP_1 - \frac{Q}{2}
\end{aligned}$$

Giải những phương trình này ta tìm được gia tốc của các vật $A$ và $B$ và tìm được gia tốc vật $C$ từ hệ thức

$$a_C = \frac{1}{2}(a_A + a_B).$$

Dễ dàng thấy cơ hệ chuyển động biến đổi đều.

*Chú ý :* Chúng ta cũng có thể nhận các kết quả ở trên bằng cách tính lực suy rộng của hệ lực :

$$(\vec{P}_1, \vec{P}_2, \vec{Q}, \vec{F}_{ms}, \vec{F}_A^{qt}, \vec{F}_B^{qt}, \vec{F}_C^{qt})$$

ứng với các tọa độ suy rộng đủ (ví dụ $x_A$ và $y_A$), sau đó cho các lực suy rộng tính được bằng không.

[Đính chính bản in: Ở câu trên in nhầm $y_A$, đúng theo hai tọa độ suy rộng đã chọn là $x_A$ và $y_B$.]
