---
title: "Bài Tập Động Học - Chương 3: Chuyển Động Song Phẳng"
layout: doc
---

# CHƯƠNG 8: CHUYỂN ĐỘNG SONG PHẲNG CỦA VẬT RẮN

## 8.1. CƠ SỞ LÍ THUYẾT

Chuyển động song phẳng của vật rắn là chuyển động mà mỗi điểm thuộc vật chuyển động trên mặt phẳng song song với một mặt phẳng cố định.

### 8.1.1. Chuyển động của vật

*1. Phương trình chuyển động của vật :* Chọn điểm $A$ tùy ý làm cực, dựng hệ trục $Axy$ chuyển động tịnh tiến đối với hệ trục cố định $Ox_1y_1$. Vị trí của hình phẳng có thể được xác định nhờ $x_A, y_A$ và $\overline{\varphi}$, trong đó $(x_A, y_A)$ là các tọa độ của cực $A$ ; $\overline{\varphi}$ là góc định vị của một đoạn thẳng $AB$ thuộc hình phẳng đối với hệ trục động $Axy$.

$$\left\{ \begin{aligned}
x_A &= f_1(t), \\
y_A &= f_2(t), \\
\varphi &= f_3(t).
\end{aligned} \right. \tag{8-1}$$

Hệ (8-1) được gọi là phương trình chuyển động của vật song phẳng.

Chuyển động song phẳng có thể được phân tích thành hai chuyển động : chuyển động tịnh tiến cùng với hệ trục $Axy$ và chuyển động quay đối với hệ trục $Axy$ (H. 8-1).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_1.svg" alt="Hình 8-1" class="figure-img" />
  <p class="figure-caption">Hình 8-1</p>
</div>

**2. Các yếu tố động học đặc trưng cho chuyển động hình phẳng :**

$$\vec{v}_A, \, \vec{a}_A, \, \overline{\omega}, \, \overline{\varepsilon} \, ,$$

trong đó : $\overline{\omega}, \overline{\varepsilon}$ là vận tốc góc và gia tốc góc của hình phẳng trong chuyển động quay đối với hệ trục $Axy$ ; $\vec{v}_A, \vec{a}_A$ – vận tốc và gia tốc cực $A$.

### 8.1.2. Chuyển động các điểm thuộc vật

#### 1. Phương trình chuyển động của điểm thuộc vật

$$\left. \begin{aligned}
x_M &= x_A + MA\cos(\overline{\varphi} + \alpha) = g_1(t), \\
y_M &= y_A + MA\sin(\overline{\varphi} + \alpha) = g_2(t).
\end{aligned} \right\} \tag{8-2}$$

trong đó : $x_A, y_A, \overline{\varphi}$ được tính theo (8-1) còn $\alpha$ là góc giữa hai đoạn thẳng $AB$ và $MA$ (H. 8-2).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_2.svg" alt="Hình 8-2" class="figure-img" />
  <p class="figure-caption">Hình 8-2</p>
</div>

#### 2. Vận tốc các điểm thuộc vật {#_3-1-1-khao-sat-van-toc-trong-hinh-phang}

*1 – Định lí về quan hệ vận tốc :* Vận tốc một điểm thuộc hình phẳng bằng tổng hình học của vận tốc cực và vận tốc của điểm trong chuyển động của hình phẳng quay đối với hệ trục tịnh tiến cùng với cực

$$\vec{v}_M = \vec{v}_A + \vec{v}_{MA}, \tag{8-3}$$

trong đó (H. 8-3)

$$\vec{v}_{MA} \begin{cases}
\text{phương } \perp MA, \\
\text{chiều thuận chiều } \overline{\omega}, \\
\text{giá trị } v_{MA} = MA\omega.
\end{cases}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_3.svg" alt="Hình 8-3" class="figure-img" />
  <p class="figure-caption">Hình 8-3</p>
</div>

*2 – Định lí hình chiếu vận tốc :* Hình chiếu vận tốc hai điểm lên phương nối liền hai điểm luôn luôn bằng nhau (H. 8-4)

$$\text{Hch}_{AM}\vec{v}_M = \text{Hch}_{AM}\vec{v}_A. \tag{8-4}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_4.svg" alt="Hình 8-4" class="figure-img" />
  <p class="figure-caption">Hình 8-4</p>
</div>

*3 – Định lí về sự phân bố vận tốc các điểm thuộc hình phẳng :* Tại mỗi thời điểm, tồn tại duy nhất một điểm $P$ thuộc hình phẳng, có vận tốc bằng không ($P$ được gọi là tâm vận tốc tức thời).

– Nếu $P$ giới nội thì vận tốc mọi điểm của hình phẳng được phân bố giống như trường hợp hình phẳng quay (tức thời) quanh $P$ (H. 8-5), lúc đó :

$$v_B = PB.\omega \, ; \quad v_A = PA.\omega \, ; \quad v_M = PM.\omega \tag{8-5}$$

hoặc :

$$\frac{v_B}{PB} = \frac{v_A}{PA} = \frac{v_M}{PM} \dots = \omega \tag{8-6}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_5.svg" alt="Hình 8-5" class="figure-img" />
  <p class="figure-caption">Hình 8-5</p>
</div>

– Nếu $P$ ở vô cùng thì vận tốc mọi điểm của hình phẳng được phân bố giống như trường hợp hình phẳng chuyển động tịnh tiến (tức thời) lúc đó (H. 8-6) :

$$v_B = v_A = v_M \text{ và } \omega = 0$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_6.svg" alt="Hình 8-6" class="figure-img" />
  <p class="figure-caption">Hình 8-6</p>
</div>

Quy tắc tìm tâm vận tốc (H. 8-7).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_7.svg" alt="Hình 8-7" class="figure-img" />
  <p class="figure-caption">Hình 8-7</p>
</div>

#### 3. Gia tốc các điểm thuộc vật

*1 – Định lí về quan hệ gia tốc :* Gia tốc một điểm thuộc hình phẳng bằng tổng hình học của gia tốc cực và gia tốc của điểm trong chuyển động của hình phẳng quay đối với hệ trục tịnh tiến cùng với cực (H. 8-8).

$$\vec{a}_M = \vec{a}_A + \vec{a}_{MA}^n + \vec{a}_{MA}^t \, , \tag{8-7}$$

trong đó :

$$\vec{a}_{MA}^n \begin{cases}
\text{phương : dọc } MA, \\
\text{chiều : hướng từ } M \text{ đến } A, \\
\text{giá trị : } a_{MA}^n = MA.\omega^2.
\end{cases}$$

$$\vec{a}_{MA}^t \begin{cases}
\text{phương : thẳng góc với } AM, \\
\text{chiều : thuận chiều } \overline{\varepsilon}, \\
\text{giá trị : } a_{MA}^t = MA\varepsilon.
\end{cases}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_8.svg" alt="Hình 8-8" class="figure-img" />
  <p class="figure-caption">Hình 8-8</p>
</div>

*2 – Định lí về sự phân bố gia tốc các điểm thuộc hình phẳng :* Tại mỗi thời điểm, tồn tại duy nhất một điểm $Q$ thuộc hình phẳng có gia tốc bằng không ($Q$ được gọi là tâm gia tốc tức thời) và gia tốc mọi điểm trên hình phẳng được phân bố (tức thời) quanh $Q$, (H. 8-9)

$$\vec{a}_M = \vec{a}_{MQ} = \vec{a}_{MQ}^n + \vec{a}_{MQ}^t \, , \tag{8-8}$$

trong đó :

$\vec{a}_{MQ}^n$ hướng từ $M$ đến $Q$ và có giá trị

$$a_{MQ}^n = MQ\omega^2,$$

$\vec{a}_{MQ}^t$ hướng thẳng góc $MQ$, thuận chiều $\overline{\varepsilon}$ và có giá trị

$$a_{MQ}^t = MQ.\varepsilon,$$

$\vec{a}_M$ làm với $MQ$ góc $\alpha$, có $\text{tg}\alpha = \dfrac{\varepsilon}{\omega^2}$ .

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_9.svg" alt="Hình 8-9" class="figure-img" />
  <p class="figure-caption">Hình 8-9</p>
</div>

Cần chú ý rằng tâm gia tốc tức thời nói chung không trùng với tâm vận tốc tức thời.

*Chú thích :*

1 – Nếu vận tốc góc của hình phẳng tìm được là hàm của thời gian $t$ : $\overline{\omega} = \overline{\omega}(t)$ thì gia tốc góc $\overline{\varepsilon}$ của hình phẳng được tính theo biểu thức

$$\overline{\varepsilon} = \frac{d\overline{\omega}}{dt} \, . \tag{8-9}$$

Đặc biệt khi một đĩa tròn lăn không trượt trên một đường cố định (H. 8-10), tâm của đĩa có vận tốc $v_A$, thì

$$\overline{\omega} = \frac{\overline{v}_A}{R} \, ; \quad \overline{\varepsilon} = \frac{d\overline{\omega}}{dt} = \frac{1}{R}\overline{a}_A^t \, . \tag{8-10}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_10.svg" alt="Hình 8-10" class="figure-img" />
  <p class="figure-caption">Hình 8-10</p>
</div>

2 – Trong trường hợp biết gia tốc một điểm ($\vec{a}_A$), vận tốc góc $\overline{\omega}$ và gia tốc góc $\overline{\varepsilon}$ của hình phẳng, thì tâm gia tốc tức thời $Q$ sẽ nằm trên nửa đường thẳng $AQ$ có được bằng cách quay vectơ $\vec{a}_A$ theo chiều $\overline{\varepsilon}$ một góc $\alpha$, (H. 8-11).

$$\text{tg}\alpha = \frac{\varepsilon}{\omega^2} \, ; \qquad AQ = \frac{a_A}{\sqrt{\varepsilon^2 + \omega^4}} \, .$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_11.svg" alt="Hình 8-11" class="figure-img" />
  <p class="figure-caption">Hình 8-11</p>
</div>

3 – Trong trường hợp biết vectơ gia tốc của hai điểm $A$ và $B$, có thể tính dễ dàng các đại lượng $\omega^2$ và $\overline{\varepsilon}$, do đó tính được góc $\alpha$.

Để tìm tâm gia tốc tức thời $Q$ ta quay các vectơ gia tốc $\vec{a}_A$, $\vec{a}_B$ tương ứng quanh các điểm $A$ và $B$ cùng góc $\alpha$. Giao điểm của hai đường thẳng nhận được sẽ xác định vị trí của tâm gia tốc tức thời $Q$ (H. 8-12).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_12.svg" alt="Hình 8-12" class="figure-img" />
  <p class="figure-caption">Hình 8-12</p>
</div>

4 – Trong trường hợp việc xác định gia tốc $\overline{\varepsilon}$ và do đó việc xác định tâm gia tốc tức thời $Q$ không được thuận tiện thì để giải bài toán về gia tốc người ta thường sử dụng định lí về quan hệ gia tốc (8-7).

---

## 8.2. HƯỚNG DẪN ÁP DỤNG

### 8.2.1. Phân loại bài toán

Ta có thể phân các bài toán thường gặp thành những loại sau :

I – Lập phương trình chuyển động của vật và của các điểm thuộc vật.

II – Xác định các yếu tố chuyển động. Trường hợp biết vận tốc và gia tốc của một điểm $A$ và tâm vận tốc tức thời $P$ của vật, trong đó khoảng cách $AP$ là hàm đã biết của thời gian, đặc biệt $AP = \text{const}$ (H. 8-13).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_13.svg" alt="Hình 8-13" class="figure-img" />
  <p class="figure-caption">Hình 8-13</p>
</div>

III – Xác định các yếu tố chuyển động. Trường hợp biết vận tốc và gia tốc của một điểm $A$ và quỹ đạo của một điểm khác ($B$) của vật (H. 8-14).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_14.svg" alt="Hình 8-14" class="figure-img" />
  <p class="figure-caption">Hình 8-14</p>
</div>

IV – Các bài toán hỗn hợp và đặc biệt (H. 8-15, 8-16, 8-17).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_15.svg" alt="Hình 8-15" class="figure-img" />
  <p class="figure-caption">Hình 8-15</p>
</div>

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_16.svg" alt="Hình 8-16" class="figure-img" />
  <p class="figure-caption">Hình 8-16</p>
</div>

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_17.svg" alt="Hình 8-17" class="figure-img" />
  <p class="figure-caption">Hình 8-17</p>
</div>

### 8.2.2. Phương pháp giải bài toán

Tiến hành theo các bước sau :

*Bước một :* Phân tích dạng chuyển động của các vật thuộc cơ hệ (tịnh tiến, quay quanh một trục cố định, song phẳng) và xác định các yếu tố động học của chúng (yếu tố nào đã biết và những yếu tố nào chưa biết). Đối với khâu chuyển động song phẳng cần đặc biệt chú ý đến những điểm nối của chúng với các khâu lân cận.

*Bước hai :* Giải các bài toán.

1. *Đối với bài toán thành lập phương trình chuyển động của vật* cần viết các biểu thức (8-1) thực chất là xác định phương trình chuyển động của một đoạn $AB$ nào đó trên vật (vị trí của $AB$ được xác định bởi $x_A, y_A$ và góc $\varphi$). Để thành lập phương trình chuyển động của một điểm $M$ cần tính các tọa độ của điểm $M$ là hàm theo thời gian nhờ biểu thức (8-2).

2. *Đối với bài toán xác định các yếu tố động học*

a) *Bài toán vận tốc :* Có thể sử dụng một trong các phương pháp sau

*Tâm vận tốc tức thời $P$*

– Chọn một điểm biết vận tốc làm cực ($A$).

– Xác định tâm vận tốc theo các quy tắc đã nêu.

– Xác định vận tốc góc $\overline{\omega}$ của hình phẳng, có chiều thuận chiều chuyển động của $A$ quanh $P$ và có giá trị :

$$\omega = \frac{v_A}{AP} \, .$$

– Vận tốc một điểm $M$ bất kì thuộc hình phẳng :

$$v_M = \omega MP.$$

(có chiều thuận chiều $\overline{\omega}$ quanh $P$)

*Định lí về quan hệ vận tốc :*

– Chọn một điểm biết vận tốc làm cực ($A$).

– Viết biểu thức (8-3) : đối với bài toán II, $M$ là một điểm bất kì thuộc hình phẳng, còn đối với bài toán loại III điểm $M$ được thay bằng điểm đã biết quỹ đạo (điểm $B$).

– Vẽ và tính các vectơ vận tốc trong biểu thức (8-3) (các vectơ vận tốc biết phương nhưng chưa biết chiều thì chiều của chúng được giả định, nếu kết quả khi giải ra là dương thì chiều giả định đúng, còn âm, thì chiều đúng ngược với chiều giả định). Xác định các ẩn của phương trình vectơ (8-3), nó tương đương với hai phương trình đại số nhờ chiếu hai vế của (8-3) lên hai trục tọa độ. Đối với bài toán II các ẩn là giá trị, phương chiều của vectơ vận tốc điểm $M$, còn đối với bài toán III ẩn là giá trị vectơ $\vec{v}_B$ và $\overline{\omega}_{BA}$.

– Giải phương trình vectơ (8-3) :

Để giải phương trình (8-3) có thể dùng phương pháp vẽ hoặc phương pháp chiếu hai vế của đẳng thức vectơ (8-3) lên hai trục vuông góc với nhau. Đối với bài toán loại III có thể chiếu lên hai trục bất kì thích hợp để nhận được hai phương trình đại số. Để mỗi phương trình chỉ chứa một ẩn chọn trục chiếu thẳng góc với phương của ẩn.

*Có thể sử dụng định lí hình chiếu vận tốc, tức (8-4).*

b) *Bài toán gia tốc*

Để giải bài toán về gia tốc thông thường người ta sử dụng định lí về quan hệ gia tốc giữa hai điểm được tiến hành theo các bước sau :

– Chọn một điểm biết gia tốc làm cực.

– Viết biểu thức (8-7) :

+ Đối với bài toán loại II, $M$ là một điểm bất kì thuộc hình phẳng và gia tốc $\varepsilon$ được tính nhờ (8-9) hoặc (8-10).

+ Đối với bài toán loại III, điểm $M$ được thay bằng điểm đã biết quỹ đạo (điểm $B$).

– Vẽ và tính các vectơ trong (8-7) : (các vectơ gia tốc chưa biết chiều thì chiều của chúng được giả định và xử lí kết quả như trong trường hợp của bài toán vận tốc). Xác định ẩn trong phương trình vectơ (8-7) nó tương đương với hai phương trình đại số nhờ chiếu đẳng thức (8-7) lên hai trục tọa độ. Đối với bài toán loại III các ẩn là giá trị, phương chiều của vectơ $\vec{a}_B$ và $\vec{a}_{BA}^t$ (trong đó chứa gia tốc góc của hình phẳng $\overline{\varepsilon}$). Trong trường hợp quỹ đạo của $B$ là đường cong thì cần phân tích.

$$\vec{a}_B = \vec{a}_B^n + \vec{a}_B^t.$$

trong đó dễ dàng tính được :

$$a_B^n = \frac{v_B^2}{\rho}$$

$\rho$ là bán kính cong của quỹ đạo điểm $B$. Do đó, ẩn của bài toán là giá trị của $\vec{a}_B^t$ và $\vec{a}_{BA}^t$ (trong đó chứa $\varepsilon$).

– Giải phương trình vectơ (8-7) : Đối với bài toán loại II cần chiếu đẳng thức vectơ (8-7) lên hai trục thẳng góc nhau để tìm hai thành phần $\vec{a}_M$ lên hai trục đó và như vậy gia tốc của điểm $M$ được xác định hoàn toàn. Đối với bài toán loại III, chiếu đẳng thức vectơ (8-7) lần lượt lên hai trục thẳng góc với $\vec{a}_B$ (hoặc $\vec{a}_B^t$) và phương $AB$. Bằng cách như vậy ta nhận được hai phương trình đại số chứa riêng rẽ giá trị của $\vec{a}_B$ (hoặc $\vec{a}_B^t$) và $\vec{a}_{BA}^t$. Lúc đó gia tốc góc $\overline{\varepsilon}$ của hình phẳng có chiều thuận chiều $\vec{a}_{BA}^t$ quanh $A$ và có giá trị

$$\varepsilon = \frac{a_{BA}^t}{BA} \, .$$

Bây giờ có thể xác định gia tốc một điểm bất kì theo như bài toán II.

Cũng có thể xác định gia tốc nhờ phương pháp tâm gia tốc. Phương pháp này thuận lợi chỉ đối với bài toán II (gia tốc góc $\overline{\varepsilon}$ tính được nhờ (8-9) và (8-10)).

---

## 8.3. BÀI GIẢI MẪU

### 8.3.1. Lập phương trình chuyển động

#### Thí dụ 8-1

Cơ cấu tay quay thanh truyền như ở hình 8-18. Tay quay $OA$ quay theo luật $\varphi = \omega t$. Lập phương trình chuyển động của thanh truyền $AB$.

Biết $OA = r$ ; $AB = l$, khoảng cách từ trục quay $O$ đến rãnh trượt bằng $a$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_18.svg" alt="Hình 8-18" class="figure-img" />
  <p class="figure-caption">Hình 8-18</p>
</div>

*Bài giải :*

*1 – Phân tích chuyển động : Thanh $OA$ quay quanh trục cố định qua $O$. Thanh $AB$ chuyển động song phẳng.*

*2 – Phương trình chuyển động của thanh $AB$.* Chọn hệ trục cố định $Ox_1y_1$ như hình vẽ. Chọn $A$ trên thanh $AB$ làm cực và gọi $\psi$ là góc giữa đoạn $AB$ và phương ngang $x_1$.

$$\begin{aligned}
x_A &= OA\cos\overline{\varphi} = r\cos\omega t, \\
y_A &= OA\sin\overline{\varphi} = r\sin\omega t, \\
\sin\overline{\psi} &= \frac{AI}{AB} = \frac{r\sin\overline{\varphi} + a}{l} = \frac{r}{l}\sin\omega t + \frac{a}{l} \, .
\end{aligned}$$

Như vậy theo (8-1) phương trình chuyển động của thanh $AB$ là :

$$\begin{aligned}
x_A &= r\cos\omega t, \\
y_A &= r\sin\omega t, \\
\overline{\psi} &= \arcsin\left(\frac{r}{l}\sin\omega t + \frac{a}{l}\right).
\end{aligned}$$

#### Thí dụ 8-2

Tay quay $OA$ quay đều quanh trục cố định qua $O$ làm cho bánh có bán kính $r$ lăn không trượt theo vành trong của bánh cố định $R$. Lập phương trình chuyển động của bánh và của điểm $M$ thuộc bánh động, cho biết tại thời điểm đầu khi $\alpha = 0$, điểm $M$ trùng với điểm $M_o$ và là tiếp điểm giữa hai bánh (H. 8-19).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_19.svg" alt="Hình 8-19" class="figure-img" />
  <p class="figure-caption">Hình 8-19</p>
</div>

*Bài giải :*

*1 – Phân tích chuyển động :* Thanh $OA$ quay quanh trục cố định qua $O$, bánh động chuyển động song phẳng.

*2 – Phương trình chuyển động của bánh động :* Chọn hệ trục cố định $Ox_1y_1$ như hình vẽ.

Chọn điểm $A$, tâm của bánh động làm cực và gọi $\overline{\varphi}$ là góc giữa bán kính $AM$ của bánh động làm với phương ngang.

Dễ dàng ta tính được :

$$\begin{aligned}
x_A &= OA\cos\alpha = (R - r)\cos\omega t, \\
y_A &= OA\sin\alpha = (R - r)\sin\omega t.
\end{aligned}$$

Vì tại thời điểm đầu điểm $M$ trùng với điểm $M_o$ và do điều kiện lăn không trượt của bánh động trên bánh cố định nên $\overset{\frown}{CM} = \overset{\frown}{CM}_o$. Do đó :

$$\widehat{CAM} = \varphi + \alpha = \frac{\overset{\frown}{CM}}{r} = \frac{\overset{\frown}{CM}_o}{R} = \frac{R\overline{\alpha}}{r} \, .$$

[Đính chính bản in: Ở tỉ số thứ ba trong biểu thức trên, mẫu số đúng là $r$ (tức $\dfrac{\overset{\frown}{CM}_o}{r} = \dfrac{R\overline{\alpha}}{r}$).]

Từ đó suy ra :

$$\overline{\varphi} = \left(\frac{R}{r} - 1\right)\overline{\alpha} = \left(\frac{R}{r} - 1\right).\omega t.$$

Vậy phương trình chuyển động của bánh động là :

$$\begin{aligned}
x_A &= (R - r)\cos\omega t, \\
y_A &= (R - r)\sin\omega t, \\
\varphi &= \left(\frac{R}{r} - 1\right)\omega t.
\end{aligned}$$

*3 – Phương trình chuyển động của điểm $M$ :* Để nhận được phương trình chuyển động của điểm $M$ ta viết biểu thức (8-2).

$$\begin{aligned}
x_M &= x_A + AM\cos\overline{\varphi} = (R - r)\cos\omega t + r\cos\left(\frac{R}{r} - 1\right)\omega t, \\
y_M &= y_A - AM\sin\overline{\varphi} = (R - r)\sin\omega t - r\sin\left(\frac{R}{r} - 1\right)\omega t.
\end{aligned}$$

### 8.3.2. Biết vận tốc, gia tốc điểm $A$ và tâm vận tốc tức thời $P$ với $AP = \text{const}$. Tìm các đặc trưng chuyển động (cơ cấu đĩa phẳng)

#### Thí dụ 8-3

Tay quay $OA$ quay xung quanh trục $O$ làm bánh 2 lăn không trượt theo vành bánh 1 cố định (H. 8-20). Biết $r_2 = 0,2\text{m}$ ; $r_1 = 0,3\text{m}$. Lúc tay quay có vận tốc góc $\omega = 1\text{ rad/s}$ và gia tốc góc $\varepsilon = 4\text{ rad/s}^2$, tìm :

– Vận tốc góc bánh 2, vận tốc điểm $B$ trên vành bánh 2 ; $AB \perp OA$.

– Gia tốc góc bánh 2, gia tốc điểm $B$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_20.svg" alt="Hình 8-20" class="figure-img" />
  <p class="figure-caption">Hình 8-20</p>
</div>

*Bài giải :*

*1 – Phân tích chuyển động :* Tay quay $OA$ chuyển động quay quanh $O$ cố định, bánh 2 chuyển động song phẳng, điểm tiếp xúc là tâm vận tốc tức thời $P$. Đối với bánh 2, ta biết $\vec{v}_A, \vec{a}_A$ và $P$ với $AP = \text{const}$.

*2 – Vận tốc :* Dùng phương pháp tâm vận tốc tức thời.

– Tìm tâm vận tốc : Điểm tiếp xúc là tâm vận tốc $P$ ;

– Tìm vận tốc góc bánh 2 và vận tốc điểm $B$.

Vận tốc góc bánh 2 :

$$\omega_2 = \frac{v_A}{PA} = \frac{OA}{r_2}\omega = \frac{r_1 + r_2}{r_2}\omega = 2,5\text{ rad/s}.$$

$\overline{\omega}_2$ ngược chiều kim đồng hồ.

Vận tốc điểm $B$ :

$$v_B = PB.\omega_2 = r_2\sqrt{2}.\omega_2 = \frac{\sqrt{2}}{2}\text{ m/s},$$

$\vec{v}_B$ có chiều như hình 8-20a.

*3 – Gia tốc :*

– Vì bánh 2 lăn không trượt với $AP = \text{const}$ nên theo (8-10) :

$$\varepsilon_2 = \frac{a_A^t}{AP} = \frac{OA\varepsilon}{AP} = \frac{(r_1 + r_2).\varepsilon}{r_2} = 10\text{ rad/s}^2.$$

$\overline{\varepsilon}_2$ thuận chiều kim đồng hồ.

– Chọn $A$ làm cực, ta có :

$$\vec{a}_B = \vec{a}_A^n + \vec{a}_A^t + \vec{a}_{BA}^n + \vec{a}_{BA}^t, \tag{a}$$

$\vec{a}_A^n$ hướng vào $O$ : $a_A^n = OA.\omega^2 = 0,5\text{ m/s}^2$,

$\vec{a}_A^t \perp OA$, chiều phù hợp với $\overline{\varepsilon}$ ; $a_A^t = OA.\varepsilon = 2\text{ m/s}^2$,

$\vec{a}_{BA}^n$ hướng từ $B$ đến $A$ ; $a_{BA}^n = BA.\omega_2^2 = 1,25\text{ m/s}^2$,

$\vec{a}_{BA}^t \perp BA$ ; chiều phù hợp $\overline{\varepsilon}_2$ ; $a_{BA}^t = BA.\varepsilon_2 = 2\text{ m/s}^2$.

– Vẽ các vectơ gia tốc (H. 8-20b).

– Tính $a_B$ : $\vec{a}_B$ chưa biết phương chiều, do đó phân tích thành hai phần vuông góc. Chiếu hai vế của (a) lên hai trục vuông góc :

$$\begin{aligned}
a_{Bx} &= a_A^t + a_{BA}^n = 3,25\text{ m/s}^2, \\
a_{By} &= -a_A^n + a_{BA}^t = 1,5\text{ m/s}^2.
\end{aligned}$$

Vậy :

$$a_B = \sqrt{a_{Bx}^2 + a_{By}^2} = 3,58\text{ m/s}^2.$$

còn phương chiều của $\vec{a}_B$ được xác định nhờ các côsin chỉ phương của nó.

Có thể tìm gia tốc của điểm $B$ nhờ phương pháp tâm gia tốc.

### 8.3.3. Biết vận tốc, gia tốc một điểm và quỹ đạo điểm khác. Tìm các đặc trưng chuyển động (cơ cấu thanh)

#### Thí dụ 8-4

Cơ cấu 4 khâu như hình 8-21. Cho $OA = r$ ; $AB = 2r$ ; $O_1B = 2r\sqrt{3}$. Lúc thanh $OA$ thẳng đứng, các điểm $O, B, O_1$ cùng nằm trên đường ngang, khi đó thanh $OA$ có vận tốc góc $\omega_o$ và gia tốc góc $\varepsilon_o = \omega_o^2\sqrt{3}$. Tìm vận tốc góc và gia tốc góc của thanh $AB$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_21.svg" alt="Hình 8-21" class="figure-img" />
  <p class="figure-caption">Hình 8-21</p>
</div>

*Bài giải :*

*1 – Phân tích chuyển động :* Các thanh $OA$ và $O_1B$ quay xung quanh các trục cố định. Thanh $AB$ chuyển động song phẳng. Đối với thanh này ta đã biết $\vec{v}_A, \vec{a}_A$ và quỹ đạo điểm $B$.

*2 – Vận tốc :* Có thể dùng các phương pháp khác nhau

a) Dùng tâm vận tốc tức thời

– Tìm $P$ : Biết $\vec{v}_A \perp OA$ ; $\vec{v}_B \perp O_1B$, do đó từ $A$ và $B$ kẻ các đường tương ứng vuông góc với $\vec{v}_A$ và $\vec{v}_B$, giao điểm của 2 đường này là $P$. Ở đây $P$ trùng với $O$ (H. 8-21a).

– Tìm vận tốc góc các thanh và vận tốc các điểm.

Điểm $A$ thuộc $A$ nên : $v_A = r\omega_o$.

[Đính chính bản in: "Điểm $A$ thuộc $A$" nghĩa là "Điểm $A$ thuộc thanh $OA$".]

Mặt khác, $A$ thuộc $AB$ nên : $v_A = PA.\omega_{AB}$.

Do đó :

$$\omega_{AB} = \frac{v_A}{PA} = \frac{r\omega_o}{r} = \omega_o$$

và thanh $AB$ quay ngược chiều kim đồng hồ.

Điểm $B$ thuộc thanh $AB$ nên :

$$v_B = PB.\omega_{AB} = r\sqrt{3}\omega_o.$$

Mặt khác, $B$ thuộc thanh $BO_1$ :

$$v_B = BO_1.\omega_{BO_1},$$

trong đó : $\omega_{BO_1}$ là giá trị vận tốc góc khâu $BO_1$ quay quanh trục $O_1$.

Vậy

$$\omega_{BO_1} = \frac{v_B}{BO_1} = \frac{r\sqrt{3}\omega_o}{2r\sqrt{3}} = \frac{\omega_o}{2} \, ,$$

và thanh $BO_1$ quay quanh trục qua $O_1$ theo chiều kim đồng hồ.

b) Dùng định lí về quan hệ vận tốc :

– Chọn điểm $A$ có chuyển động đã biết làm cực

– Định lí về quan hệ vận tốc cho ta :

$$\vec{v}_B = \vec{v}_A + \vec{v}_{BA}, \tag{a}$$

trong đó : $\vec{v}_A \perp OA$ ; $v_A = r\omega_o$ ,

$$\vec{v}_{BA} \perp AB \, ; \quad v_{BA} = AB.\omega_{AB},$$

$$\vec{v}_B \perp O_1B \, ; \quad v_B = BO_1.\omega_{BO_1}.$$

– Vẽ các vectơ vận tốc trong đẳng thức vectơ (a), trong đó các vectơ $\vec{v}_{BA}$ và $\vec{v}_B$ chỉ biết được phương, chưa xác định được chiều và giá trị. Có thể giải phương trình vectơ (a) bằng phương pháp hình học. Dựa vào hình vẽ, ta có :

$$v_{BA} = \frac{v_A}{\sin\alpha} = 2r\omega_o \, ; \quad v_B = \frac{v_A}{\text{tg}\alpha} = r\sqrt{3}\omega_o.$$

Suy ra :

$$\begin{aligned}
\omega_{AB} &= \frac{v_{AB}}{AB} = \omega_o, \\
\omega_{BO_1} &= \frac{v_B}{BO_1} = \frac{\omega_o}{2} \, .
\end{aligned}$$

Thanh $AB$ quay ngược chiều kim đồng hồ, còn thanh $BO_1$ quay thuận chiều kim đồng hồ.

c) Dùng định lí hình chiếu vận tốc. Dễ dàng nhận được :

$$v_B\cos 60^\circ = v_A\cos 30^\circ.$$

Suy ra

$$v_B = r\sqrt{3}\omega_o.$$

*3 – Gia tốc :*

– Chọn điểm $A$ làm cực, định lí về quan hệ gia tốc cho ta

$$\vec{a}_B = \vec{a}_A + \vec{a}_{BA}^n + \vec{a}_{BA}^t$$

Do quỹ đạo của $A$ và $B$ là đường tròn nên biểu thức trên được viết dưới dạng :

$$\vec{a}_B^t + \vec{a}_B^n = \vec{a}_A^t + \vec{a}_A^n + \vec{a}_{BA}^n + \vec{a}_{BA}^t \tag{b}$$

trong đó $\vec{a}_B^n$ và $\vec{a}_A^n$ hướng tương ứng về $O_1$ và $O$ : $\vec{a}_{BA}^n$ hướng từ $B$ đến $A$, chúng có giá trị :

$$a_B^n = BO_1.\omega_{BO_1}^2 = \frac{r\sqrt{3}}{2}\omega_o^2 \, ; \quad a_A^n = OA\omega_o^2 = r\omega_o^2 \, ;$$

$$a_{BA}^n = \omega_{AB}^2.AB = 2r\omega_o^2 \, ;$$

$\vec{a}_A^t$ thuận chiều $\overline{\varepsilon}_o$ và có giá trị :

$$a_A^t = \varepsilon_o.OA = r\sqrt{3}.\omega_o^2 \, ;$$

– Vì chưa xác định được các gia tốc góc các thanh $BO_1$ và $BA$ ($\overline{\varepsilon}_{BO_1}$ và $\overline{\varepsilon}_{AB}$) nên chỉ biết phương các vectơ $\vec{a}_B^t \perp BO_1$ và $\vec{a}_{BA}^t \perp BA$, còn chiều của chúng chưa xác định được. Giả định chiều của chúng như trên hình 8-21b. Ngoài ra :

$$a_B^t = BO_1.\varepsilon_{BO_1} \, ; \quad a_{BA}^t = BA.\varepsilon_{AB}.$$

Tất cả các vectơ gia tốc được biểu diễn như trên hình 8-21b.

Như vậy phương trình vectơ (b) chứa hai ẩn : giá trị của $\vec{a}_B^t$ và $\vec{a}_{BA}^t$. Sau khi xác định chúng dễ dàng xác định $\overline{\varepsilon}_{BO_1}$ và $\overline{\varepsilon}_{AB}$.

Để tính giá trị của $\vec{a}_{BA}^t$, chiếu hai vế của (b) lên trục $\overrightarrow{OO_1}$, ta nhận được :

$$a_B^n = -a_A^t - a_{BA}^n\cos 30^\circ + a_{BA}^t\cos 60^\circ.$$

Từ đó : $a_{BA}^t = 5\sqrt{3}\,r\omega_o^2 > 0$.

Chiều của $\vec{a}_{BA}^t$ đúng với chiều giả định.

Dễ dàng tính được gia tốc góc thanh $AB$ :

$$\varepsilon_{AB} = \frac{a_{BA}^t}{BA} = \frac{5\sqrt{3}}{2}\omega_o^2$$

và thanh $AB$ tại vị trí khảo sát quay nhanh dần.

Bây giờ chiếu 2 vế của (b) lên trục $\overrightarrow{AB}$, ta được :

$$a_B^n\cos 30^\circ + a_B^t\sin 30^\circ = a_A^n\sin 30^\circ - a_A^t\cos 30^\circ - a_{BA}^n.$$

Sau khi tính toán ta nhận được :

$$a_B^t = -\frac{15}{4}r\omega_o^2.$$

Như vậy $\vec{a}_B^t$ có chiều ngược lại với chiều giả định trên hình 8-21b.

Dễ dàng tính được gia tốc góc thanh $BO_1$ :

$$\varepsilon_{BO_1} = \frac{a_B^t}{BO_1} = \frac{5\sqrt{3}}{8}\omega_o^2.$$

#### Thí dụ 8-5

Cho cơ cấu như hình 8-22. Con trượt $A$ trượt xuống với vận tốc $v$ và gia tốc $a = \frac{\sqrt{3}}{l}v^2$ ; $AC = CB = DE = l$ ; $CD = 2l$. Tìm vận tốc góc các thanh $AB, CD, DE$ và gia tốc con trượt $B$. Cho biết tại vị trí đang khảo sát $\varphi = 60^\circ$, thanh $CD$ ở vị trí thẳng đứng và $\widehat{CDE} = 90^\circ$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_22.svg" alt="Hình 8-22" class="figure-img" />
  <p class="figure-caption">Hình 8-22</p>
</div>

*Bài giải :*

*1 – Phân tích chuyển động :* Thanh $DE$ quay quanh trục cố định qua $E$, các con trượt $A$ và $B$ chuyển động tịnh tiến theo các phương thẳng đứng và nằm ngang tương ứng. Các thanh $AB$ và $CD$ chuyển động song phẳng. Đối với thanh $AB$ biết vận tốc, gia tốc điểm $A$ và quỹ đạo điểm $B$, còn đối với thanh $CD$ ta biết quỹ đạo điểm $D$.

*2 – Vận tốc :* Dùng phương pháp tâm vận tốc tức thời.

a) Xét thanh $AB$ : Biết $\vec{v}_A$ và quỹ đạo của $B$ (đường thẳng).

– Tìm tâm vận tốc $P_1$ của thanh $AB$ : Từ $A$ và $B$ kẻ các đường thẳng tương ứng vuông góc với $\vec{v}_A$ và $\vec{v}_B$. Giao điểm của hai đường thẳng đó là tâm vận tốc tức thời $P_1$ (H. 8-22a).

– Tìm vận tốc góc $\overline{\omega}_{AB}$ của thanh $AB$ và vận tốc $v_C$ điểm $C$ :

$$\omega_{AB} = \frac{v_A}{P_1A} = \frac{v}{2l\cos\varphi} = \frac{v}{l} \, ,$$

$\overline{\omega}_{AB}$ ngược chiều kim đồng hồ.

$$v_C = P_1C.\omega_{AB} = l\omega_{AB} = v,$$

$$\vec{v}_C \perp P_1C.$$

b) Xét thanh $CD$ : Biết $\vec{v}_C$ và quỹ đạo điểm $D$ (vòng tròn tâm $E$ bán kính $ED$).

– Tìm tâm vận tốc $P_2$ của thanh $CD$. Kẻ các đường vuông góc với $\vec{v}_C$ và $\vec{v}_D$, giao điểm của chúng là tâm vận tốc tức thời $P_2$.

– Tìm vận tốc góc $\overline{\omega}_{CD}$ của thanh $CD$ và vận tốc $v_D$ của điểm $D$.

$$\omega_{CD} = \frac{v_C}{P_2C} = \frac{\sqrt{3}}{4}\frac{v}{l} \, ; \quad \overline{\omega}_{CD} \text{ thuận chiều kim đồng hồ.}$$

$$v_D = P_2D.\omega_{CD} = \frac{2l}{\sqrt{3}}.\frac{\sqrt{3}}{4l}v = \frac{v}{2} \, .$$

Dễ dàng tìm được vận tốc góc $\overline{\omega}_{DE}$ của thanh $DE$ :

$$\omega_{DE} = \frac{v_D}{DE} = \frac{v}{2l} \, ; \quad \overline{\omega}_{DE} \text{ ngược chiều kim đồng hồ.}$$

(Chú ý : Có thể dùng định lí quan hệ vận tốc hai điểm hoặc định lí hình chiếu vận tốc để tìm $\vec{v}_B$)

*3 – Gia tốc :* Xét thanh $AB$

– Chọn điểm $A$ làm cực. Sử dụng định lí về quan hệ gia tốc ta được :

$$\vec{a}_B = \vec{a}_A + \vec{a}_{BA}^n + \vec{a}_{BA}^t, \tag{a}$$

$\vec{a}_{BA}^n$ hướng từ $B$ đến $A$ ; $a_{BA}^n = BA.\omega_{AB}^2 = \frac{2v^2}{l} \, ,$

$\vec{a}_{BA}^t \perp BA$, có chiều được giả định như hình 8-22b.

$$a_{BA}^t = BA.\varepsilon_{AB} \, ; \quad a_A = a,$$

$\vec{a}_B$ hướng dọc trục $x$, có chiều giả định như trên hình 8-22b.

Trong phương trình vectơ (a) chứa hai ẩn : giá trị của các vectơ $\vec{a}_{BA}^t$ và $\vec{a}_B$. Các vectơ được biểu diễn như hình 8-22b.

– Tính $a_B$ : chiếu hai vế của đẳng thức vectơ (a) lên $\overrightarrow{AB}$, ta có :

$$a_B\cos 60^\circ = a\cos 30^\circ - a_{BA}^n.$$

Do đó : $a_B = \frac{v^2}{l} > 0$ ; chiều $\vec{a}_B$ đúng chiều giả định trên hình vẽ.

### 8.3.4. Bài toán hỗn hợp

#### Thí dụ 8-6

Tay quay $OA$ quay đều quanh trục $O$ với vận tốc góc $\omega_o$ làm bánh 1 lăn không trượt theo vành bánh 2 cố định. Hai bánh cùng bán kính $r$. Thanh truyền $BD$ và cần lắc $DC$ cùng độ dài $l$ (H. 8-23). Tại thời điểm $BD \perp OA$, $\widehat{BDC} = 45^\circ$. Tìm :

– Các vận tốc góc : $\overline{\omega}_1, \overline{\omega}_{BD}, \overline{\omega}_{DC}$

– Gia tốc điểm $B$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_23.svg" alt="Hình 8-23" class="figure-img" />
  <p class="figure-caption">Hình 8-23</p>
</div>

*Bài giải :*

*1 – Phân tích chuyển động :* Các thanh $OA$ và $CD$ chuyển động quay quanh trục cố định. Bánh 1 và thanh $DB$ chuyển động song phẳng.

*2 – Vận tốc :* Dùng phương pháp tâm vận tốc tức thời.

a) Xét bánh 1 (bánh lăn không trượt) :

– Tâm vận tốc : Điểm tiếp xúc giữa 2 bánh là tâm vận tốc tức thời $P_1$ của bánh 1.

– Vận tốc góc $\overline{\omega}_1$ bánh 1 và vận tốc $\vec{v}_B$ của điểm $B$ :

$$\omega_1 = \frac{v_A}{P_1A} = \frac{2r\omega_o}{r} = 2.\omega_o \, ; \quad \overline{\omega}_1 \text{ thuận chiều kim đồng hồ.}$$

$$v_B = P_1B.\omega_1 = 2r\sqrt{2}.\omega_o \, ; \quad \vec{v}_B \perp P_1B_1 \text{ chiều phù hợp } \overline{\omega}_1.$$

b) Xét thanh $BD$ : Biết $\vec{v}_B$ và quỹ đạo $D$ (vòng tròn tâm $C$)

– Tâm vận tốc : từ $B$ và $D$ kẻ các đường tương ứng vuông góc với $\vec{v}_B$ và $\vec{v}_D$, giao điểm của chúng là tâm vận tốc tức thời $P_2$ của thanh $BD$, ở đây $BP_2 = \frac{\sqrt{2}}{2}l$.

– Vận tốc góc $\overline{\omega}_{BD}$ của $BD$ và vận tốc $\vec{v}_D$ của điểm $D$ :

$$\omega_{BD} = \frac{v_B}{P_2B} = \frac{4r}{l}.\omega_o \, ; \quad \overline{\omega}_{BD} \text{ ngược chiều kim đồng hồ.}$$

Áp dụng định lí hình chiếu vận tốc :

$$\text{Hch}_{BD}\vec{v}_B = \text{Hch}_{BD}\vec{v}_D$$

hay :

$$v_B\cos 45^\circ = v_D\cos 45^\circ$$

$$v_D = v_B = 2r\sqrt{2}\omega_o \, ; \quad \vec{v}_D \text{ có chiều như hình 8-23a.}$$

Từ đó suy ra vận tốc góc $\overline{\omega}_{DC}$ của thanh $DC$

$$\omega_{DC} = \frac{v_D}{DC} = \frac{2r\sqrt{2}}{l}.\omega_o \, ; \quad \overline{\omega}_{DC} \text{ ngược chiều kim đồng hồ}$$

*3. Gia tốc* (tương tự thí dụ 8-3). Xét bánh 1 :

– Bánh 1 lăn không trượt với $AP_1 = \text{const}$, nên theo (8-10) :

Gia tốc góc $\varepsilon_1 = \frac{a_A^t}{r} = 0$ (vì $OA$ quay đều).

– Chọn $A$ làm cực, xét gia tốc điểm $B$ :

$$\vec{a}_B = \vec{a}_A^n + \vec{a}_{BA}^n + \vec{a}_{BA}^t \tag{a}$$

$\vec{a}_A^n$ hướng từ $A$ đến $O$ ; $a_A^n = OA.\omega_o^2 = 2r\omega_o^2.$

$\vec{a}_{BA}^n$ hướng từ $B$ đến $A$ ; $a_{BA}^n = BA.\omega_1^2 = 4r\omega_o^2,$

$\vec{a}_{BA}^t \perp BA$ ; $a_{BA}^t = BA.\varepsilon_1 = 0.$

– Vẽ các vectơ gia tốc : (H. 8-23b).

– Tính $a_B$ : vì $\vec{a}_A^n \perp \vec{a}_{BA}^n$ nên :

$$a_B = \sqrt{(a_A^n)^2 + (a_{BA}^n)^2} = 2\sqrt{5}\,r\omega_o^2.$$

Chú ý : Muốn tìm $\overline{\varepsilon}_{BD}$ và $\overline{\varepsilon}_{DC}$ ta xét thanh $DB$ và chọn $B$ làm cực :

$$\vec{a}_D^n + \vec{a}_D^t = \vec{a}_B + \vec{a}_{DB}^n + \vec{a}_{DB}^t,$$

trong đó :

$$a_{DB}^t = DB.\varepsilon_{DB} \, ; \quad a_D^t = DC.\varepsilon_{DC}.$$

#### Thí dụ 8-7

Hệ ròng rọc như hình 8-24. Ở thời điểm vật I được nâng lên với vận tốc $\vec{v}_1$, gia tốc $\vec{a}_1$, vật II hạ xuống với vận tốc $\vec{v}_2$, gia tốc $\vec{a}_2$. Ròng rọc động có bán kính $R$.

Tìm vận tốc góc của ròng rọc động, vận tốc và gia tốc tâm $C$, gia tốc điểm $B$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_24.svg" alt="Hình 8-24" class="figure-img" />
  <p class="figure-caption">Hình 8-24</p>
</div>

*Bài giải.*

*1 – Phân tích chuyển động :* Vật I và II chuyển động tịnh tiến. Hai ròng rọc nhỏ quay xung quanh trục cố định. Ròng rọc động chuyển động song phẳng. Khi không có trượt giữa dây và ròng rọc thì :

$$v_1 = v_A \, ; \quad a_1 = a_A^t \, ; \quad v_2 = v_B \, ; \quad a_2 = a_B^t.$$

Như vậy trên ròng rọc động ta biết $\vec{v}_A, \vec{a}_A^t$ và $\vec{v}_B, \vec{a}_B^t$.

*2 – Vận tốc :*

– Trên ròng rọc động, ta biết vận tốc hai điểm, do đó tìm được vận tốc tức thời $P$ (H. 8-24a).

– Vận tốc góc của ròng rọc :

$$\omega = \frac{v_B}{PB} = \frac{v_A}{PA} = \frac{v_A + v_B}{PB + PA} = \frac{v_1 + v_2}{2R} \, . \tag{a}$$

– Vận tốc tâm $C$ :

$$v_C = \frac{v_B - v_A}{2} = \frac{v_2 - v_1}{2} \, . \tag{b}$$

Nếu $v_2 > v_1$ : tâm $C$ đang chuyển động lên ; nếu $v_2 < v_1$ tâm $C$ hạ xuống ; nếu $v_2 = v_1$ thì $v_C = 0$.

*3 – Gia tốc :* Biểu thức (a) đúng với mọi thời điểm, nên theo (8-9) ta có gia tốc của ròng rọc :

$$\varepsilon = \frac{d\omega}{dt} = \frac{1}{2R}\frac{d}{dt}(v_1 + v_2) = \frac{a_1 + a_2}{2R} \, ,$$

$\overline{\varepsilon}$ thuận chiều kim đồng hồ.

Vì $C$ chuyển động thẳng, nên gia tốc cùng phương với vận tốc, từ (b) ta có :

$$\overline{a}_C = \frac{d}{dt}(\overline{v}_C) = \frac{d}{dt}\left(\frac{v_2 - v_1}{2}\right) = \frac{a_2 - a_1}{2} \, .$$

Nếu $a_2 > a_1$ thì $\vec{a}_C$ hướng lên.

– Chọn $C$ làm cực, ta có :

$$\vec{a}_B = \vec{a}_C + \vec{a}_{BC}^n + \vec{a}_{BC}^t, \tag{c}$$

$\vec{a}_{BC}^n$ hướng từ $B$ đến $C$ :

$$a_{BC}^n = BC.\omega^2 = \frac{(v_1 + v_2)^2}{4R} \, ,$$

$\vec{a}_{BC}^t \perp BC$, chiều phù hợp với $\overline{\varepsilon}$ ;

$$a_{BC}^t = BC.\varepsilon = \frac{a_1 + a_2}{2} \, .$$

– Vẽ các vectơ gia tốc : hình 8-24b.

– Tính $a_B$. Chiếu 2 vế của (c) lên hai trục vuông góc, ta được :

$$\begin{aligned}
a_{Bx} &= a_{BC}^n = \frac{(v_1 + v_2)^2}{4R} \, , \\
a_{By} &= a_C + a_{BC}^t = \frac{a_2 - a_1}{2} + \frac{a_1 + a_2}{2} = a_2.
\end{aligned}$$

#### Thí dụ 8-8

Một tấm hình vuông cạnh $l$ chuyển động trong mặt phẳng hình 8-25. Lúc khảo sát, các đỉnh $A$ và $B$ có gia tốc $a_A = a_B = 16\text{ cm/s}^2$ và tương ứng hướng theo các cạnh $AD$ và $BA$. Tìm gia tốc của $C$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_25.svg" alt="Hình 8-25" class="figure-img" />
  <p class="figure-caption">Hình 8-25</p>
</div>

*Bài giải :*

*1 – Phân tích chuyển động :* Hình vuông chuyển động song phẳng và biết đặc trưng chuyển động của $A$ và $B$.

*2 – Gia tốc :* a) Chọn $A$ làm cực :

$$\vec{a}_B = \vec{a}_A + \vec{a}_{BA}^n + \vec{a}_{BA}^t, \tag{a}$$

$\vec{a}_B$ và $\vec{a}_A$ đã biết,

$\vec{a}_{BA}^n$ hướng từ $B$ đến $A$ ; $a_{BA}^n = l\omega^2$,

$\vec{a}_{BA}^t \perp AB$, chiều giả thiết ; $a_{BA}^t = l\varepsilon$.

Chiếu 2 vế của (a) lên 2 trục vuông góc ta có :

$$\begin{aligned}
-a_B &= -a_{BA}^n, \\
0 &= -a_A + a_{BA}^t.
\end{aligned}$$

Từ 2 phương trình trên, ta tìm được : $\omega = \sqrt{\frac{a_B}{l}}$ ; $\varepsilon = \frac{a_A}{l}$ và chiều giả thiết của $\vec{a}_{BA}^t$ là đúng (vì $a_{BA}^t > 0$), do đó $\overline{\varepsilon}$ ngược chiều kim đồng hồ.

b) Chọn $B$ làm cực :

$$\vec{a}_C = \vec{a}_B + \vec{a}_{CB}^n + \vec{a}_{CB}^t, \tag{b}$$

$\vec{a}_{CB}^n$ hướng từ $C$ đến $B$, $a_{CB}^n = l\omega^2 = a_B$,

$\vec{a}_{CB}^t \perp CB$, chiều phù hợp $\overline{\varepsilon}$ ; $a_{CB}^t = l\varepsilon = a_A$.

Chiếu 2 vế của (b) lên 2 trục vuông góc, ta có :

$$\begin{aligned}
a_{Cx} &= -a_B + a_{CB}^t = -a_B + a_A = 0, \\
a_{Cy} &= a_{CB}^n = l\omega^2 = a_B.
\end{aligned}$$

Chứng tỏ $\vec{a}_C$ hướng từ $C$ lên $B$ ; $a_C = a_B = 16\text{ cm/s}^2$.

---

## 8.4. BÀI TẬP

### 8.4.1. Lập phương trình chuyển động

**8-1.** Tay quay $OA$ quay đều với vận tốc góc $\omega_o$ (H. 8-26). Viết phương trình chuyển động của thanh truyền $AB$ và của điểm giữa $M$ của thanh $AB$. Cho biết $AB = l$ ; $OA = r$ và khi $l = 0$ thì $\alpha = 0$.

[Đính chính bản in: "khi $l = 0$" là lỗi in của "khi $t = 0$".]

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_26.svg" alt="Hình 8-26" class="figure-img" />
  <p class="figure-caption">Hình 8-26</p>
</div>

*Trả lời :* Phương trình chuyển động của $AB$

$$\begin{aligned}
x_A &= r\cos\omega_o t, \\
y_A &= r\sin\omega_o t, \\
\varphi &= -\arcsin\left(\frac{r}{l}\sin\omega_o t\right).
\end{aligned}$$

Phương trình chuyển động của $M$

$$\begin{aligned}
x_M &= r\cos\omega_o t + \frac{1}{2}\cos\varphi, \\
y_M &= r\sin\omega_o t - \frac{1}{2}\sin\varphi,
\end{aligned}$$

[Đính chính bản in: Ở hai biểu thức của $x_M, y_M$, thừa số $\dfrac{1}{2}$ là do bản in nhầm chữ $l$ thành số $1$ (đúng là $\dfrac{l}{2}$).]

trong đó $\varphi$ là góc giữa thanh $AB$ và trục $Ox$.

**8-2.** Tay quay $OA$ quay nhanh dần đều quanh $O$ với gia tốc $\varepsilon_o$, làm bánh 2 lăn không trượt theo vành bánh 1 cố định. Bán kính các bánh là $r$ và $R$, khi $t = 0$ thì $\omega_o = 0$ và $\alpha = 0$. Viết phương trình chuyển động của bánh 2 và của điểm $M$ thuộc bánh 2. Cho biết khi $t = 0$ thì $M$ ở tại $M_o$ (H. 8-27).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_27.svg" alt="Hình 8-27" class="figure-img" />
  <p class="figure-caption">Hình 8-27</p>
</div>

*Trả lời :* Phương trình chuyển động của bánh 2

$$\begin{aligned}
x_A &= (R + r)\cos\frac{\varepsilon_o t^2}{2} \, , \\
y_A &= (R + r)\sin\frac{\varepsilon_o t^2}{2} \, , \\
\varphi &= \left(\frac{R}{r} + 1\right)\frac{\varepsilon_o t^2}{2} \, .
\end{aligned}$$

Phương trình chuyển động của điểm $M$

$$\begin{aligned}
x_M &= (R + r)\cos\frac{\varepsilon_o t^2}{2} - R\cos\left(1 + \frac{R}{r}\right)\frac{\varepsilon_o t^2}{2} \, , \\
y_M &= (R + r)\sin\frac{\varepsilon_o t^2}{2} + R\sin\left(1 + \frac{R}{r}\right)\frac{\varepsilon_o t^2}{2} \, .
\end{aligned}$$

[Đính chính bản in: Ở số hạng thứ hai của $x_M, y_M$, hệ số phía trước hàm lượng giác là bán kính $r$ của bánh 2 (bản in nhầm thành $R$).]

**8-3.** Tay quay $OA$ quay đều với vận tốc góc $\omega_o$. Viết phương trình chuyển động của thanh $AB$ và của trung điểm $M$ của nó. Cho biết $OA = O_1B = a$, $OO_1 = AB = b$ ($a < b$), khi $t = 0$ thì $\alpha = 0$. (H. 8-28).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_28.svg" alt="Hình 8-28" class="figure-img" />
  <p class="figure-caption">Hình 8-28</p>
</div>

*Trả lời :* Phương trình chuyển động của $AB$

$$\begin{aligned}
x_A &= a\cos\omega_o t, \\
y_A &= a\sin\omega_o t, \\
\varphi &= -2\text{arctg}\frac{a\sin\omega_o t}{b - a\cos\omega_o t} \, .
\end{aligned}$$

Phương trình chuyển động của điểm $M$

$$\begin{aligned}
x_M &= a\cos\omega_o t + \frac{b}{2}\cos\varphi, \\
y_M &= a\sin\omega_o t - \frac{b}{2}\sin\varphi.
\end{aligned}$$

### 8.4.2. Biết vận tốc và gia tốc điểm $A$ và tâm vận tốc tức thời $P$ với $AP = \text{const}$ (cơ cấu đĩa phẳng)

**8-4.** Đĩa phẳng có bán kính $R = 0,5\text{m}$ lăn không trượt theo mặt phẳng nghiêng (H. 8-29). Tại thời điểm khảo sát tâm của đĩa có vận tốc $v_A = 1\text{ m/s}$ và gia tốc $a_A = 3\text{ m/s}^2$.

Tìm : – Vận tốc góc của đĩa, vận tốc các điểm $C, D, E$.

– Gia tốc góc của đĩa, gia tốc các điểm $B, C$.

Biết $BD \perp CE$ ; $CE$ song song với mặt phẳng nghiêng.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_29.svg" alt="Hình 8-29" class="figure-img" />
  <p class="figure-caption">Hình 8-29</p>
</div>

*Trả lời :* $\omega = 2\text{ rad/s}$ ; $\varepsilon = 6\text{ rad/s}^2$ ; $v_C = v_E = \sqrt{2}\text{ m/s}$ ; $v_D = 2\text{ m/s}$ ; $a_B = 2\text{ m/s}^2$ ; $a_C = 3,16\text{ m/s}^2$.

**8-5.** Cơ cấu hành tinh có tay quay $OA$ quay với vận tốc góc $\omega_o = \text{const}$ làm cho bánh I bán kính $r$ lăn không trượt theo vành trong của bánh cố định, bán kính $R = 3r$. (H. 8-30).

Tìm :

– Vận tốc các điểm $C, D, E$ thuộc bánh I.

– Gia tốc các điểm $B, C$. Cho $BD \perp CE$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_30.svg" alt="Hình 8-30" class="figure-img" />
  <p class="figure-caption">Hình 8-30</p>
</div>

*Trả lời :* $v_C = v_E = 2r\sqrt{2}\,\omega_o$ ; $v_D = 4r\omega_o$,

$a_B = 6r\omega_o^2$ ; $a_C = 2r\sqrt{5}\,\omega_o^2$.

**8-6.** Một đĩa phẳng được cuốn bằng sợi dây có một đầu $B$ cố định. Đĩa có bán kính $r$ rơi xuống không vận tốc đầu và mở dần dây ra. (H. 8-31).

Tâm của đĩa có vận tốc

$$v = \frac{2}{3}\sqrt{3gh},$$

trong đó $h$ là khoảng cách của tâm đĩa từ vị trí đầu đến vị trí khảo sát. Tìm vận tốc, gia tốc của các điểm $D$ và $E$. Biết $DE \perp CH$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_31.svg" alt="Hình 8-31" class="figure-img" />
  <p class="figure-caption">Hình 8-31</p>
</div>

*Trả lời :* $v_D = 0$ ; $v_E = \dfrac{4}{3}\sqrt{3gh}$,

$a_D = \dfrac{4}{9r}g^2 t^2$ ; $a_E = \dfrac{4g}{9r}\sqrt{9r^2 + g^2 t^4}$.

**8-7.** Con lăn 2 tầng bán kính $R = 20\text{cm}$ và $r = 10\text{cm}$ lăn không trượt theo mặt phẳng ngang. Tầng trong được cuốn dây và buộc vào vật $M$. Tìm gia tốc điểm cao nhất $A$ lúc $t = 1\text{s}$ khi vật $M$ rơi xuống với vận tốc $v = 3t\text{ (m/s)}$ (H. 8-32).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_32.svg" alt="Hình 8-32" class="figure-img" />
  <p class="figure-caption">Hình 8-32</p>
</div>

*Trả lời :* $a_A = 4\sqrt{26}\text{ m/s}^2$ ; $\vec{a}_A$ tạo với đường thẳng đứng một góc $\beta$ ; $\cos\beta = \dfrac{5}{\sqrt{20}}$ .

[Đính chính bản in: Vì $a_A = 4\sqrt{26}\text{ m/s}^2$, mẫu số của $\cos\beta$ trong bản in là $\sqrt{20}$ do lỗi in của $\sqrt{26}$.]

**8-8.** Hệ ròng rọc (H. 8-33) có các ròng rọc 1 và 4 cùng bán kính $R$, các ròng rọc 2 và 3 cùng bán kính $r$. Lúc khảo sát, vật $M$ đang chuyển động lên với vận tốc $v$ và gia tốc $a$.

Tìm : – Vận tốc đầu dây $A$.

– Gia tốc góc của các ròng rọc 3 và 4 (coi các dây tiếp xúc với ròng rọc ở hai đầu của đường kính ngang).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_33.svg" alt="Hình 8-33" class="figure-img" />
  <p class="figure-caption">Hình 8-33</p>
</div>

*Trả lời :* $v_A = 4v$ ;

$\varepsilon_3 = \dfrac{a}{r}$ ; $\varepsilon_4 = \dfrac{3a}{R}$ .

**8-9.** Vật $M$ rơi xuống theo luật $x = 2t^2$ ($x$ tính bằng $\text{m}$) làm chuyển động ròng rọc cố định 2 và ròng rọc động 1. Ròng rọc 1 có bán kính bằng $0,2\text{m}$. Tìm gia tốc các điểm $C, B$ và $D$ ở trên vành của ròng rọc 1 lúc $t = 0,5\text{s}$ ; $OB \perp CD$ (H. 8-34).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_34.svg" alt="Hình 8-34" class="figure-img" />
  <p class="figure-caption">Hình 8-34</p>
</div>

*Trả lời :* $a_C = 5\text{ m/s}^2$ ;

$a_B = 7,29\text{ m/s}^2$ ; $a_D = 6,4\text{ m/s}^2$.

**8-10.** Tay quay $OA$ quay với gia tốc $\varepsilon_o = 8\text{ rad/s}^2$, lúc khảo sát có vận tốc góc $\omega_o = 2\text{ rad/s}$. Bánh II lăn không trượt theo vành của bánh I cố định. Hai bánh có cùng bán kính $R = 12\text{cm}$.

Tìm gia tốc điểm $M$ và điểm $N$ của bánh II ; $M$ là điểm tiếp xúc, $N$ là điểm đầu của đường kính $MN$ (H. 8-35).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_35.svg" alt="Hình 8-35" class="figure-img" />
  <p class="figure-caption">Hình 8-35</p>
</div>

*Trả lời :* $a_N = 480\text{ cm/s}^2$ ;

$a_M = 96\text{ cm/s}^2$.

**8-11.** Cơ cấu dùng để quay nhanh bánh 1 như hình 8-36, khi tay quay quay với vận tốc góc $\omega_o$ thì bánh 2 lăn không trượt trong bánh 3 cố định làm cho bánh 1 quay xung quanh trục $O$.

Tìm : – Quan hệ về vận tốc góc và quan hệ về gia tốc góc giữa bánh 1 và tay quay.

– Bán kính $r_1$ theo $r_3$ để cho $\dfrac{\omega_1}{\omega_2} = 12$.

[Đính chính bản in: Với kết quả $r_1 = \dfrac{r_3}{11}$ và $\omega_1 = \left(1 + \dfrac{r_3}{r_1}\right)\omega_o$, tỉ số đề bài cho là $\dfrac{\omega_1}{\omega_o} = 12$ (bản in nhầm $\omega_o$ thành $\omega_2$).]

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_36.svg" alt="Hình 8-36" class="figure-img" />
  <p class="figure-caption">Hình 8-36</p>
</div>

*Trả lời :* $\omega_1 = \left(1 + \dfrac{r_3}{r_1}\right)\omega_o$ ; $\varepsilon_1 = 0$ ; $r_1 = \dfrac{r_3}{11} \, .$

### 8.4.3. Biết vận tốc, gia tốc một điểm và quỹ đạo điểm khác (cơ cấu thanh)

**8-12.** Tay quay $OA$ dài $20\text{cm}$, quay đều với vận tốc góc $\omega_o = 10\text{ rad/s}$, thanh truyền $AB$ dài $100\text{cm}$, con chạy $B$ chuyển động theo phương thẳng đứng. Tìm vận tốc góc, gia tốc góc của thanh truyền và gia tốc con chạy $B$ tại thời điểm tay quay vuông góc với thanh truyền và góc $\alpha = 45^\circ$ (H. 8-37).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_37.svg" alt="Hình 8-37" class="figure-img" />
  <p class="figure-caption">Hình 8-37</p>
</div>

*Trả lời :* $\omega_{AB} = 2\text{ rad/s}$ ;

$\varepsilon_{AB} = 16\text{ rad/s}^2$ ; $a_B = 565,6\text{ cm/s}^2$.

**8-13.** Cơ cấu 4 khâu như hình 8-38. Tay quay $OA$ quay đều với vận tốc góc $\omega_o = 4\text{ rad/s}$ ; $OA = r = 0,5\text{m}$ ; $AB = 2r$ ; $BC = r\sqrt{2}$ ; $BM = r$. Đối với các trường hợp a) và b), hãy tìm :

1) Vận tốc góc, gia tốc góc thanh $AB$ và $BC$. 2) Vận tốc, gia tốc điểm $M$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_38.svg" alt="Hình 8-38" class="figure-img" />
  <p class="figure-caption">Hình 8-38</p>
</div>

*Trả lời :* a) $\omega_{AB} = 2\text{ rad/s}$ ; $\omega_{BC} = 4\text{ rad/s}$ ;

$\varepsilon_{AB} = 20\text{ rad/s}^2$ ; $\varepsilon_{BC} = 8\text{ rad/s}^2$.

b) $\omega_{BC} = 1,41\text{ rad/s}$ ; $\varepsilon_{BC} = 14,04\text{ rad/s}^2$ ;

$v_M = 1,32\text{ m/s}$ ; $a_M = 12,15\text{ m/s}^2$.

**8-14.** Cơ cấu bốn khâu như hình 8-39. Các thanh $AB$ và $CD$ cùng độ dài $40\text{cm}$. Thanh $BC$ dài $20\text{cm}$, khoảng cách $AD$ bằng $20\text{cm}$. Tay quay $AB$ quay đều với vận tốc góc $\omega_o$. Tìm vận tốc góc và gia tốc góc của thanh $BC$ lúc góc $\widehat{ADC} = 90^\circ$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_39.svg" alt="Hình 8-39" class="figure-img" />
  <p class="figure-caption">Hình 8-39</p>
</div>

*Trả lời :* $\omega_{BC} = \dfrac{8}{3}\omega_o$ ;

$\varepsilon_{BC} = \dfrac{20}{9}\omega_o^2$.

**8-15.** Tay quay $OA$ quay đều với vận tốc góc $\omega_o$ làm chuyển động thanh truyền $AB$ gắn cứng với bánh $L$ bán kính $r$. Bánh $L$ làm chuyển động bánh $K$ cũng có bán kính $r$ và lắp trơn trên trục $O$. Độ dài $AB = l$.

Tìm vận tốc góc và gia tốc góc của bánh $K$ tại vị trí $OA$ thẳng đứng và nằm ngang. (H. 8-40).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_40.svg" alt="Hình 8-40" class="figure-img" />
  <p class="figure-caption">Hình 8-40</p>
</div>

*Trả lời :* Khi $OA$ thẳng đứng $\omega = 2\omega_o$ ; $\varepsilon = \dfrac{2r\omega_o^2}{\sqrt{l^2 - 4r^2}} \, ,$

khi $OA$ nằm ngang : $\omega = 2\left(1 \pm \dfrac{r}{l}\right)\omega_o$ ; $\varepsilon = 0$.

**8-16.** Tay quay $OA$ quay với gia tốc góc không đổi $\varepsilon_o = 5\text{ rad/s}^2$ và tại thời điểm khảo sát có vận tốc góc $\omega_o = 10\text{ rad/s}$ ; Biết $OA = r = 20\text{cm}$ ; $O_1B = R = 100\text{cm}$ ; $AB = l = 120\text{cm}$.

Tìm vận tốc điểm $B$, điểm $C$ và gia tốc (tiếp và pháp) của điểm $B$ khi $OA$ và $O_1B$ thẳng đứng (H. 8-41).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_41.svg" alt="Hình 8-41" class="figure-img" />
  <p class="figure-caption">Hình 8-41</p>
</div>

*Trả lời :* $v_B = v_C = 200\text{ cm/s}$ ; $a_B^n = 400\text{ cm/s}^2$ ;

$a_B^t = 370,45\text{ cm/s}^2$.

**8-17.** Tay quay $OA$ quay đều với vận tốc góc $\omega_o = 1\text{ rad/s}$. Biết $OA = 20\text{cm}$ ; $AB = 50\text{cm}$ ; $BC = 24\text{cm}$. Khi cơ cấu có vị trí như hình 8-42, tìm :

– Vận tốc con chạy $B$, con chạy $C$, vận tốc góc thanh $BC$.

– Gia tốc con chạy $B$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_42.svg" alt="Hình 8-42" class="figure-img" />
  <p class="figure-caption">Hình 8-42</p>
</div>

*Trả lời :* $v_B = 20\sqrt{3}\text{ cm/s}$ ; $v_C = 30\text{ cm/s}$,

$\omega_{BC} = 5\dfrac{\sqrt{3}}{12}\text{ rad/s}$ ; $a_B = 44\text{ cm/s}^2$.

**8-18.** Tay quay $OA$ quay đều với vận tốc góc $\omega = 8\text{ rad/s}$. Biết $OA = 25\text{cm}$ ; $CA = CB = 50\text{cm}$ ; $DE = 100\text{cm}$. Ở thời điểm khảo sát $\widehat{CDE} = 90^\circ$ ; $OA$ và $AB$ thẳng hàng. (H. 8-43).

Tìm : – Vận tốc góc các thanh $AB$ và $DE$.

– Gia tốc các điểm $B$ và $C$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_43.svg" alt="Hình 8-43" class="figure-img" />
  <p class="figure-caption">Hình 8-43</p>
</div>

*Trả lời :*

$\omega_{AB} = 2\text{rad/s}$ ; $\omega_{DE} = 0,5\text{rad/s}$ ;

$a_B = 2000\text{cm/s}^2$ ; $a_C = 1800\text{cm/s}^2$.

**8-19.** Cơ cấu như hình 8-44. $AB = EF = KD = 10\text{cm}$ ; $BC = 25\text{cm}$ ; $DC = CE$. Thanh $AB$ có vận tốc góc $\omega_{AB} = 10\text{ rad/s}$. Lúc $\varphi = 90^\circ$ ; $\alpha = 30^\circ$ ; $\beta = 90^\circ$, hãy tìm vận tốc góc và gia tốc góc thanh $EF$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_44.svg" alt="Hình 8-44" class="figure-img" />
  <p class="figure-caption">Hình 8-44</p>
</div>

*Trả lời :* $\omega_{EF} = 20\text{ rad/s}$ ;

$\varepsilon_{EF} = 932\text{ rad/s}^2$.

**8-20.** Thanh $OA$ dao động theo luật $\varphi = \dfrac{\pi}{6}\sin\dfrac{\pi}{2}t\text{ (rad)}$ làm cho đĩa $K$ quay quanh trục $O_1$. Cho biết $OA = 2O_1B = 24\text{cm}$ và lúc $t = 4\text{s}$ thanh $OA$ và $O_1B$ nằm ngang ; $\alpha = 60^\circ$ (H. 8-45).

Tìm :

– Vận tốc góc và gia tốc góc của đĩa.

– Vận tốc và gia tốc của trung điểm $M$ của thanh $AB$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_45.svg" alt="Hình 8-45" class="figure-img" />
  <p class="figure-caption">Hình 8-45</p>
</div>

*Trả lời :*

$$\omega = \frac{\pi^2}{6}\text{ rad/s} \, ; \quad \varepsilon = \frac{\pi^4\sqrt{3}}{72}\text{ rad/s}^2.$$

$$\vec{v}_M = \vec{v}_A \, ; \quad \vec{a}_M \begin{cases}
a_{Mx} = -\dfrac{\pi^4}{12}\text{ cm/s}^2, \\[8pt]
a_{My} = \pi^4\dfrac{\sqrt{3}}{12}\text{ cm/s}^2.
\end{cases}$$

trục $x$ hướng nằm ngang từ trái sang phải, trục $y$ hướng thẳng đứng lên.

**8-21.** Pittông $D$ của máy ép thủy lực được truyền chuyển động từ đòn $OL$. Lúc cơ cấu có vị trí như hình 8-46, đòn $OL$ có vận tốc góc $\omega = 2\text{ rad/s}$ và gia tốc góc $\varepsilon = 4\text{ rad/s}^2$. Đoạn $OA = 15\text{cm}$.

Tìm : – Vận tốc pittông $D$, vận tốc góc thanh $AB$.

– Gia tốc pittông, gia tốc góc thanh $AB$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_46.svg" alt="Hình 8-46" class="figure-img" />
  <p class="figure-caption">Hình 8-46</p>
</div>

*Trả lời :* $v_D = 34,6\text{ cm/s}$ ;

$\omega_{AB} = 2\text{ rad/s}$ ;

$a_D = 29,4\text{ cm/s}^2$ ;

$\varepsilon_{AB} = 5,2\text{ rad/s}^2$.

### 8.4.4. Bài toán hỗn hợp

*(Cơ cấu thanh và đĩa lăn không trượt. Hình phẳng bất kì)*

**8-22.** Tay quay $OA$ quay đều với vận tốc góc $\omega_o = \sqrt{3}\text{ rad/s}$ làm cho đĩa lăn không trượt trên đường ngang. Cho $OA = \sqrt{3}\text{m}$ ; $R = 1\text{m}$. Lúc $\varphi = 60^\circ$ ; $\widehat{OAB} = 90^\circ$ (H. 8-47). Tìm vận tốc các điểm $B, M$ và gia tốc của chúng.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_47.svg" alt="Hình 8-47" class="figure-img" />
  <p class="figure-caption">Hình 8-47</p>
</div>

*Trả lời :* $v_B = 6\text{ m/s}$ ; $v_M = 6\sqrt{2}\text{ m/s}$ ;

$a_B = 18\text{ m/s}^2$ ; $a_M = 18\sqrt{10}\text{ m/s}^2$.

**8-23.** Đĩa bán kính $R$ lăn không trượt trên đường ngang làm cho con chạy $B$ trượt trong rãnh ngang (H. 8-48). Thanh $AB$ dài $l$, khi đầu $A$ ở vị trí cao nhất tâm $O$ có vận tốc $\vec{v}_o$ và gia tốc $\vec{a}_o$. Tìm gia tốc điểm $A$, điểm $B$ và gia tốc góc của thanh $AB$ lúc đó, biết $OA = \dfrac{R}{2}$ .

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_48.svg" alt="Hình 8-48" class="figure-img" />
  <p class="figure-caption">Hình 8-48</p>
</div>

*Trả lời :*

$$a_{Ax} = -\frac{3}{2}a_o \, , \quad a_{Ay} = -\frac{v_o^2}{2R} \, ;$$

$$a_B = \frac{3}{2}a_o - \frac{3v_o^2}{2\sqrt{4l^2 - 9R^2}} \, ;$$

$$\varepsilon_{AB} = \frac{v_o^2}{R\sqrt{4l^2 - 9R^2}} \, .$$

**8-24.** Tay quay $OA$ quay đều với vận tốc góc $\omega_o$ làm cho bánh $\text{II}$ bán kính $r$ lăn không trượt trên vành bánh $\text{I}$ cố định bán kính $R = 2r$. Thanh $BD$ dài $r$ gắn cứng với bánh $\text{II}$, thanh $BC$ nối với con chạy $C$. Tìm gia tốc điểm $B$, điểm $C$ và gia tốc góc của thanh $BC$ lúc $\alpha = 30^\circ$, lúc đó $OA$ và $DB$ nằm ngang (H. 8-49).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_49.svg" alt="Hình 8-49" class="figure-img" />
  <p class="figure-caption">Hình 8-49</p>
</div>

*Trả lời :* $a_B = 24r\omega_o^2$ ;

$a_C = 7\sqrt{3}\,r\omega_o^2$ ;

$\varepsilon_{BC} = \dfrac{7\sqrt{3}}{5}\omega_o^2$.

**8-25.** Bánh răng bán kính $r$ kẹp giữa 2 thanh khía song song chuyển động nhanh dần về cùng một phía. (H. 8-50). Lúc khảo sát các thanh có vận tốc $\vec{v}_1, \vec{v}_2$ và gia tốc $\vec{a}_1, \vec{a}_2$. Tìm vận tốc, gia tốc tâm $O$ và gia tốc điểm $A$ của bánh răng tiếp xúc với thanh khía 1.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_50.svg" alt="Hình 8-50" class="figure-img" />
  <p class="figure-caption">Hình 8-50</p>
</div>

*Trả lời :* $v_o = \dfrac{v_1 + v_2}{2}$ ; $a_o = \dfrac{a_1 + a_2}{2}$ ;

$$a_{Ax} = a_1 \, ; \quad a_{Ay} = -\left(\frac{v_1 - v_2}{4r}\right)^2.$$

[Đính chính bản in: Theo thứ nguyên gia tốc ($r\omega^2 = r\left(\dfrac{v_1 - v_2}{2r}\right)^2$), biểu thức đúng là $a_{Ay} = -\dfrac{(v_1 - v_2)^2}{4r}$.]

**8-26.** Cơ cấu vi sai, tay quay $OA$ có vận tốc góc $\omega_o$, gia tốc góc $\varepsilon_o$ ; bánh 1 quay cùng chiều với tay quay với vận tốc góc $\omega_1 = 3\omega_o$ ; gia tốc góc $\varepsilon_1 = 3\varepsilon_o$, (H. 8-51).

Biết $R_1 = 2R_2 = 2r$.

Tìm vận tốc góc, gia tốc góc bánh 2 và gia tốc điểm $M$ trên vành bánh 2 ; $AM \perp OA$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_51.svg" alt="Hình 8-51" class="figure-img" />
  <p class="figure-caption">Hình 8-51</p>
</div>

*Trả lời :*

$\omega_2 = 3\omega_o$ ; $\varepsilon_2 = 3\varepsilon_o$ ;

$$\vec{a}_M \begin{cases}
a_{Mx} = 3r(\omega_o^2 + \varepsilon_o), \\
a_{My} = 3r(3\omega_o^2 + \varepsilon_o).
\end{cases}$$

**8-27.** Cơ cấu vi sai, bánh dẫn 1 quay ngược chiều kim đồng hồ với vận tốc góc $\omega_o$, gia tốc góc $\varepsilon_o$. Tay quay $OA = 3R$ quay thuận chiều kim đồng hồ với cùng vận tốc góc và gia tốc góc trên, (H. 8-52). Tìm vận tốc và gia tốc điểm $M$ trên vành bánh bị dẫn 3 ; $AM \perp OA$ ; $R_1 = R_3 = R$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_52.svg" alt="Hình 8-52" class="figure-img" />
  <p class="figure-caption">Hình 8-52</p>
</div>

*Trả lời :*

$v_M = R\omega_o\sqrt{10}$ ;

$$\vec{a}_M \begin{cases}
a_{Mx} = 3R\omega_o^2 - R\varepsilon_o, \\
a_{My} = 3R\varepsilon_o - R\omega_o^2.
\end{cases}$$

**8-28.** Đĩa lăn không trượt theo mặt phẳng nghiêng, góc nghiêng $30^\circ$ (H. 8-53). Tâm $A$ của đĩa chuyển động theo luật $OA = x = 10t^2$ ($x$ tính bằng $\text{cm}$). Ở tâm $A$ của đĩa treo thanh $AB = 36\text{cm}$, chuyển động theo luật :

$$\varphi = \frac{\pi}{3}\sin\frac{\pi}{6}t \, ,$$

($\varphi$ tính bằng $\text{rad}$).

Tìm vận tốc và gia tốc đầu mút $B$ lúc $t = 1\text{s}$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_53.svg" alt="Hình 8-53" class="figure-img" />
  <p class="figure-caption">Hình 8-53</p>
</div>

*Trả lời :*

$$v = 2,8\text{ cm/s} \, ; \quad \vec{a} \begin{cases}
a_x = 25,2\text{ cm/s}^2, \\
a_y = -8,25\text{ cm/s}^2.
\end{cases}$$

$a = 26,5\text{ cm/s}^2$.

**8-29.** Thanh $AB$ dài $0,2\text{m}$ chuyển động trong mặt phẳng (H. 8-54). Vectơ gia tốc đầu $A$ và đầu $B$ tạo với phương $BA$ góc $45^\circ$ và $60^\circ$, trị số $a_A = 2\text{ m/s}^2$ ; $a_B = 4,42\text{ m/s}^2$. Tìm vận tốc góc, gia tốc góc của thanh và gia tốc điểm giữa $C$ của $AB$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_54.svg" alt="Hình 8-54" class="figure-img" />
  <p class="figure-caption">Hình 8-54</p>
</div>

*Trả lời :* $\omega = 2\text{ rad/s}$ ; $\varepsilon = 12,05\text{ rad/s}^2$ ; $a_C = 3,18\text{ m/s}^2$.

**8-30.** Hình vuông $ABCD$ có cạnh $l = 2\text{cm}$ chuyển động trong mặt phẳng của hình vẽ. Lúc khảo sát, điểm $A$ và điểm $B$ có vectơ gia tốc như trên hình 8-55, trị số $a_A = 2\text{ cm/s}^2$ ; $a_B = 4\sqrt{2}\text{ cm/s}^2$. Tìm vận tốc góc, gia tốc góc và gia tốc điểm $C$ lúc đó.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_55.svg" alt="Hình 8-55" class="figure-img" />
  <p class="figure-caption">Hình 8-55</p>
</div>

*Trả lời :* $\omega = \sqrt{2}\text{ rad/s}$ ; $\varepsilon = 1\text{ rad/s}^2$ ;

$a_C = 6\text{ cm/s}^2$ ; $\vec{a}_C$ hướng từ $C$ đến $D$.

**8-31.** Hai con chạy $A$ và $B$ chuyển động không gia tốc dọc theo hai phương vuông góc, cùng hướng vào $O$ (H. 8-56). Tìm vận tốc và gia tốc của điểm $C$ lúc hai thanh $AC$ và $BC$ vuông góc với hai phương chuyển động của con chạy. Biết rằng lúc đó các con chạy có vận tốc tương ứng là $v_A$ và $v_B$ ; $CA = a, \, CB = b$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_8_56.svg" alt="Hình 8-56" class="figure-img" />
  <p class="figure-caption">Hình 8-56</p>
</div>

*Trả lời :* $v_C = 0$ ; $a_C = \sqrt{\dfrac{v_A^4}{a^2} + \dfrac{v_B^4}{b^2}} \, .$
