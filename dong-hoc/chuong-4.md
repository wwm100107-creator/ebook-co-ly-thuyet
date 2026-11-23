# Chương 4: Chuyển Động Song Phẳng Của Vật Rắn

Chuyển động song phẳng của vật rắn là một chuyển động phức hợp hay gặp trong kĩ thuật. Khi nghiên cứu chuyển động phức hợp của vật rắn ta thường phân tích chuyển động phức hợp ra các chuyển động cơ bản đã quen biết. Phương pháp khảo sát trong chương này khá tổng quát. Đầu tiên khảo sát chuyển động toàn vật, sau đó khảo sát chuyển động của các điểm thuộc vật rắn chuyển động song phẳng.

---

## 4.1. Định Nghĩa và Mô Hình {#_4-1-đinh-nghia-va-mo-hinh}

### 4.1.1. Định Nghĩa

::: tip Định nghĩa
*Chuyển động song phẳng của vật rắn là chuyển động trong đó mỗi điểm thuộc vật luôn luôn dịch chuyển trong một mặt phẳng xác định song song với một mặt phẳng quy chiếu đã chọn trước (H.4-1).*
:::

### 4.1.2. Mô Hình Chuyển Động Phẳng

Xét một đoạn thẳng $AB$ tùy ý của vật rắn $\Sigma$, mà $AB$ vuông góc với mặt phẳng quy chiếu $P_o$. Vì $\Sigma$ là một vật rắn nên $AB = \text{const}$. Mặt khác do vật rắn $\Sigma$ chuyển động song phẳng nên các điểm $A, B$ luôn dịch chuyển trong hai mặt phẳng song song nhau. Vậy đoạn $AB$ luôn song song với vị trí ban đầu của nó. Theo định nghĩa, $AB$ thực hiện chuyển động tịnh tiến. Vậy chuyển động của đoạn $AB$ được đặc trưng bởi chuyển động của điểm $M$ thuộc nó (H. 4-1). Vật rắn $\Sigma$ là tập hợp vô số thanh $AB$. Do đó chuyển động song phẳng của vật rắn $\Sigma$ được đặc trưng bởi chuyển động của thiết diện phẳng $S$ trong mặt phẳng $P$.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_1.svg" alt="Hình 4-1: Mô hình chuyển động song phẳng của vật rắn" style="max-height: 300px;" />

<div class="figure-caption">

Hình 4-1

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_2.svg" alt="Hình 4-2: Thiết diện phẳng S chuyển động trong mặt phẳng P" style="max-height: 270px;" />

<div class="figure-caption">

Hình 4-2

</div>

</div>

Như vậy việc khảo sát chuyển động song phẳng của vật rắn $\Sigma$ trong không gian được đưa về bài toán khảo sát chuyển động phẳng của thiết diện $S$ trong mặt phẳng $P$ (H. 4 - 2).

---

## 4.2. Khảo Sát Chuyển Động Của Vật Rắn {#_4-2-phuong-trinh-chuyen-đong-cua-hinh-phang}

### 4.2.1. Phân Tích Chuyển Động Phẳng Thành Chuyển Động Cơ Bản

Xét chuyển động của hình phẳng $S$ trong mặt phẳng chứa nó (H. 4 - 3). Ta chọn hệ quy chiếu cố định $Oxy$. Lấy một điểm $A$ tùy ý thuộc $S$ làm điểm cực và gắn chặt vào hình phẳng $S$ một hệ tọa độ $A\xi\eta$. Đồng thời gắn vào $A$ một hệ tọa độ $Ax'y'$ sao cho trong quá trình $S$ chuyển động luôn luôn có $Ax' \parallel Ox$ ; $Ay' \parallel Oy$.

Chuyển động phẳng của hình $S$ được phân tích thành hai chuyển động thành phần :
- Chuyển động tịnh tiến của hệ động $Ax'y'$ đối với hệ quy chiếu cố định $Oxy$.
- Chuyển động quay quanh $A$ của hệ động $A\xi\eta$ đối với hệ động $Ax'y'$.

Như thế, chuyển động phẳng của vật rắn bao giờ cũng có thể phân tích được thành hai chuyển động cơ bản : chuyển động quay tương đối của vật rắn quanh cực $A$ thuộc vật đối với hệ quy chiếu động $Ax'y'$ và chuyển động tịnh tiến của hệ động $Ax'y'$ cùng với cực $A$ đối với hệ quy chiếu cố định $Oxy$.

### 4.2.2. Phương Trình Chuyển Động Của Vật

Theo phân tích trên, vị trí của $S$ đối với hệ quy chiếu cố định $Oxy$ được xác định bởi ba thông số định vị. Đó là góc $\varphi$ (để xác định vị trí của $S$ — hoặc hệ tọa độ $A\xi\eta$ — đối với hệ động $Ax'y'$) và các tọa độ $x_A, y_A$ (để xác định vị trí của hệ động $Ax'y'$ đối với hệ cố định $Oxy$). Như thế, số bậc tự do của một vật rắn chuyển động song phẳng là ba.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_3.svg" alt="Hình 4-3: Xác định vị trí của hình phẳng S trong hệ tọa độ Oxy" style="max-height: 300px;" />

<div class="figure-caption">

Hình 4-3

</div>

</div>

Khi thiết diện phẳng $S$ chuyển động phẳng, ba thông số $x_A, y_A$ và $\varphi$ tọa đổi theo thời gian $t$. Do đó phương trình chuyển động của vật rắn chuyển động phẳng là :

$$x_A = x_A(t) \, ; \quad y_A = y_A(t) \, ; \quad \varphi = \varphi(t) \tag{4-1}$$

[Đính chính bản in: Cụm từ "tọa đổi" ở câu trên là lỗi in của từ "thay đổi" (hoặc "biến đổi").]

Hai phương trình đầu mô tả thành phần chuyển động tịnh tiến, phương trình thứ ba mô tả thành phần chuyển động quay tương đối.

### 4.2.3. Vận Tốc và Gia Tốc Suy Rộng Của Vật

Nếu ta đưa vào các tọa độ mở rộng $q_1 = x_A \, ; \ q_2 = y_A \, ; \ q_3 = \varphi \, ;$ thì vị trí của vật rắn chuyển động phẳng được xác định bởi vectơ định vị :

$$\vec{q} = \begin{bmatrix} q_1 \\ q_2 \\ q_3 \end{bmatrix} = \begin{bmatrix} x_A \\ y_A \\ \varphi \end{bmatrix} \tag{4-2}$$

Đạo hàm bậc nhất theo thời gian của vectơ định vị của vật rắn chuyển động phẳng được gọi là vectơ vận tốc suy rộng của vật :

$$\dot{\vec{q}} = \begin{bmatrix} \dot{q}_1 \\ \dot{q}_2 \\ \dot{q}_3 \end{bmatrix} = \begin{bmatrix} \dot{x}_A \\ \dot{y}_A \\ \dot{\varphi} \end{bmatrix}$$

Tương ứng với sự phân tích chuyển động ở trên, hai thành phần đầu của vectơ vận tốc suy rộng mô tả vận tốc của thành phần chuyển động tịnh tiến, còn thành phần thứ ba của vectơ vận tốc suy rộng mô tả vận tốc góc của thành phần chuyển động quay.

Ta gọi đạo hàm bậc hai theo thời gian của vectơ định vị của vật rắn chuyển động phẳng là vectơ gia tốc suy rộng của vật :

$$\ddot{\vec{q}} = \begin{bmatrix} \ddot{q}_1 \\ \ddot{q}_2 \\ \ddot{q}_3 \end{bmatrix} = \begin{bmatrix} \ddot{x}_A \\ \ddot{y}_A \\ \ddot{\varphi} \end{bmatrix}$$

[Đính chính bản in: Ở mục `4.2.3` (tr. 152), bản in đánh số `(4 - 2)` cho $\vec{q}$ rồi sang mục `4.3.1` đánh số `(4 - 4)`, bỏ khuyết số hiệu `(4 - 3)` tại các biểu thức $\dot{\vec{q}}$ và $\ddot{\vec{q}}$.]

Như thế, hai thành phần đầu của vectơ gia tốc suy rộng mô tả gia tốc của thành phần chuyển động tịnh tiến, và thành phần thứ ba ($\ddot{\varphi} = \dot{\omega} = \varepsilon$) của vectơ gia tốc suy rộng mô tả gia tốc góc của thành phần chuyển động quay.

---

## 4.3. Khảo Sát Chuyển Động Các Điểm Thuộc Vật

### 4.3.1. Phương Trình Chuyển Động

Lấy một điểm $B$ bất kì thuộc vật rắn $S$ chuyển động phẳng. Vị trí của điểm $B$ đối với hệ quy chiếu cố định $Oxy$ được xác định bởi vectơ định vị $\vec{r}_B$ :

$$\vec{r}_B = \vec{r}_A + \overrightarrow{AB} \tag{4-4}$$

Chiếu đẳng thức vectơ $(4 - 4)$ lên các trục tọa độ $Ox, Oy$ ta được :

$$\begin{aligned}
x_B &= x_A + \xi_B\cos\varphi - \eta_B\sin\varphi \\
y_B &= y_A + \xi_B\sin\varphi + \eta_B\cos\varphi
\end{aligned} \tag{4-5}$$

Trong đó $\xi_B, \eta_B$ là các tọa độ của điểm $B$ trong hệ tọa độ $A\xi\eta$, chúng luôn là các hằng số.

Các phương trình $(4 - 5)$ có thể viết dưới dạng ma trận như sau :

$$\begin{bmatrix} x_B \\ y_B \end{bmatrix} = \begin{bmatrix} x_A \\ y_A \end{bmatrix} + \begin{bmatrix} \cos\varphi & -\sin\varphi \\ \sin\varphi & \cos\varphi \end{bmatrix} \begin{bmatrix} \xi_B \\ \eta_B \end{bmatrix} \tag{4-6}$$

Các phương trình $(4 - 5)$ hoặc $(4 - 6)$ được gọi là các phương trình chuyển động của một điểm thuộc vật rắn chuyển động phẳng.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_4.svg" alt="Hình 4-4: Xác định vị trí điểm B thuộc hình phẳng S" style="max-height: 300px;" />

<div class="figure-caption">

Hình 4-4

</div>

</div>

---

### 4.3.2. Vận Tốc Các Điểm

#### 1. Biểu thức giải tích xác định vận tốc của một điểm

Để nhận được biểu thức giải tích xác định vận tốc của một điểm thuộc vật rắn chuyển động phẳng, ta đạo hàm hai vế của phương trình $(4 - 6)$ theo thời gian :

$$\begin{bmatrix} \dot{x}_B \\ \dot{y}_B \end{bmatrix} = \begin{bmatrix} \dot{x}_A \\ \dot{y}_A \end{bmatrix} + \dot{\varphi} \begin{bmatrix} -\sin\varphi & -\cos\varphi \\ \cos\varphi & -\sin\varphi \end{bmatrix} \begin{bmatrix} \xi_B \\ \eta_B \end{bmatrix} \tag{4-7}$$

Hoặc viết dưới dạng thông thường :

$$\left.\begin{aligned}
\dot{x}_B &= \dot{x}_A - \dot{\varphi}(\xi_B\sin\varphi + \eta_B\cos\varphi) \\
\dot{y}_B &= \dot{y}_A + \dot{\varphi}(\xi_B\cos\varphi - \eta_B\sin\varphi)
\end{aligned}\right\} \tag{4-8}$$

*Chú ý :* nếu chưa quen với cách đạo hàm các ma trận, ta có thể đạo hàm hai vế của các phương trình $(4 - 5)$ để nhận được các phương trình $(4 - 8)$.

#### 2. Quan hệ vận tốc giữa hai điểm

::: tip Định lí 1
*Vận tốc của điểm $B$ tùy ý thuộc hình phẳng $S$ chuyển động phẳng, bằng tổng hình học vận tốc của điểm cực $A$ và vận tốc của điểm $B$ trong chuyển động quay của hình phẳng $S$ quanh $A$.*

$$\vec{v}_B = \vec{v}_A + \vec{v}_{BA} = \vec{v}_A + \vec{\omega} \wedge \overrightarrow{AB} \tag{4-9}$$
:::

*Chứng minh.* Theo mục 4.2 của chương này, chuyển động phẳng của hình phẳng $S$ có thể phân tích thành hai chuyển động thành phần : chuyển động quay tương đối của $S$ quanh trục đi qua $A$ và chuyển động tịnh tiến theo cùng với hệ động $Ax'y'$. Do đó một điểm $B$ bất kì của hình phẳng $S$ sẽ tham gia vào hai chuyển động thành phần nói trên. Để tìm vận tốc tuyệt đối của điểm $B$ ta áp dụng định lí hợp vận tốc (công thức $(3 - 7)$ chương 3 - phần Động học) :

$$\vec{v}_a = \vec{v}_e + \vec{v}_r$$

Ở đây $\vec{v}_a = \vec{v}_B \, ; \ \vec{v}_e = \vec{v}_{B^*} = \vec{v}_A$ vì hệ động $Ax'y'$ chuyển động tịnh tiến $\vec{v}_r = \vec{v}_{BA}$ với $\vec{v}_{BA}$ là vận tốc của điểm $B$ trong chuyển động quay tương đối của hình phẳng $S$ quanh $A$. Vậy ta có :

$$\vec{v}_B = \vec{v}_A + \vec{v}_{BA}$$

Theo công thức Ơle $(2 - 11)$ chương 2 thì $\vec{v}_{BA} = \vec{\omega} \wedge \overrightarrow{AB} \, ; \ \vec{\omega}$ là vận tốc góc của hình phẳng $S$.

*Chú ý 1.* Vận tốc góc của thành phần chuyển động quay không phụ thuộc vào việc chọn cực. Thực vậy, nếu lấy $A$ làm cực, ta có :

$$\vec{v}_B = \vec{v}_A + \vec{\omega}_A \wedge \overrightarrow{AB} \qquad \text{(a)}$$

Nếu lấy $B$ là cực thì :

$$\vec{v}_A = \vec{v}_B + \vec{\omega}_B \wedge \overrightarrow{BA} = \vec{v}_B - \vec{\omega}_B \wedge \overrightarrow{AB} \qquad (\beta)$$

Cộng hai đẳng thức (a) và (b) ta có :

$$(\vec{\omega}_A - \vec{\omega}_B) \wedge \overrightarrow{AB} = \vec{0} \qquad \text{(c)}$$

[Đính chính bản in: Đẳng thức thứ hai được bản in đánh kí hiệu là $(\beta)$ và ở dòng kế tiếp gọi là `(b)`.]

Do $\vec{\omega}_A - \vec{\omega}_B$ là vectơ vuông góc với mặt phẳng $S$, nên vuông góc với $\overrightarrow{AB}$. Từ (c) suy ra : $\vec{\omega}_A = \vec{\omega}_B = \vec{\omega}$.

*Chú ý 2.* Từ cách xác định vận tốc một điểm của vật rắn quay quanh một trục cố định, ta dễ dàng xác định vectơ $\vec{v}_{BA}$ bằng hình học.

$$\vec{v}_{BA} \quad \begin{cases} \text{Phương } \perp BA \\ \text{Chiều hướng theo chiều quay } \overline{\omega} \\ \text{Trị số } v_{BA} = \omega \cdot AB \end{cases}$$

*Chú ý 3.* Từ công thức $(4-8)$ ta có thể suy ra ngay công thức $(4 - 9)$ bằng một vài dẫn giải toán học đơn giản.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_5.svg" alt="Hình 4-5: Xác định vectơ vận tốc v_BA" style="max-height: 230px;" />

<div class="figure-caption">

Hình 4-5

</div>

</div>

::: tip Định lí 2
*Hình chiếu vận tốc hai điểm bất kì của hình phẳng $S$ chuyển động phẳng lên đường thẳng nối hai điểm đó thì bằng nhau.*

$$\text{hc}_{AB}\vec{v}_B = \text{hc}_{AB}\vec{v}_A \tag{4-10}$$
:::

*Chứng minh*

Chiếu đẳng thức $(4-9)$ lên trục $AB$ ta được :

$$\text{hc}_{AB}\vec{v}_B = \text{hc}_{AB}\vec{v}_A + \text{hc}_{AB}\vec{v}_{AB}$$

Do $\vec{v}_{BA} \perp AB$, nên $\text{hc}_{AB}\vec{v}_{AB} = \vec{0}$. Vậy định lí được chứng minh.

[Đính chính bản in: Ở hai dòng chứng minh trên, bản in ghi $\text{hc}_{AB}\vec{v}_{AB}$ và $= \vec{0}$, hiểu chính xác là hình chiếu đại số $\text{hc}_{AB}\vec{v}_{BA} = 0$.]

#### 3. Tâm vận tốc tức thời {#_4-3-3-tam-van-toc-tuc-thoi-tam-quay-tuc-thoi}

**Định nghĩa.** *Điểm $P$ trên hình phẳng $S$ mà tại thời điểm khảo sát có vận tốc bằng không, gọi là tâm vận tốc tức thời.*

::: tip Định lí 3
*Ở mỗi thời điểm nếu $\omega \neq 0$, có một điểm duy nhất thuộc hình phẳng $S$ có vận tốc bằng không.*
:::

*Chứng minh.* Trước hết ta chứng minh sự tồn tại của tâm vận tốc tức thời. Giả sử biết vận tốc $\vec{v}_A$ và vận tốc góc $\overline{\omega}$ (H.4-6). Quay vectơ $\vec{v}_A$ quanh $A$ theo chiều của $\overline{\omega}$ đi một góc $90^\circ$ ta được nửa đường thẳng $AB$. Trên $AB$ lấy một điểm $P$ sao cho :

$$AP = \frac{1}{\omega} v_A$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_6.svg" alt="Hình 4-6: Chứng minh sự tồn tại của tâm vận tốc tức thời P" style="max-height: 250px;" />

<div class="figure-caption">

Hình 4-6

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_7.svg" alt="Hình 4-7: Phân bố vận tốc các điểm khi quay tức thời quanh tâm P" style="max-height: 250px;" />

<div class="figure-caption">

Hình 4-7

</div>

</div>

Khi đó :

$$\vec{v}_{PA} = -\vec{v}_A$$

Mặt khác theo công thức $(4 - 9)$ :

$$\vec{v}_P = \vec{v}_A + \vec{v}_{PA} = \vec{v}_A - \vec{v}_B = \vec{0}$$

[Đính chính bản in: Ở đẳng thức trên, bản in ghi $\vec{v}_A - \vec{v}_B = \vec{0}$, đúng ra là $\vec{v}_A - \vec{v}_A = \vec{0}$.]

Bây giờ ta chứng minh tính duy nhất của tâm $P$ bằng phương pháp phản chứng. Giả sử có hai điểm $P_1$ và $P_2$ mà tại thời điểm khảo sát có tính chất $\vec{v}_{P_1} = \vec{v}_{P_2} = \vec{0}$. Khi đó :

$$\vec{v}_{P_2} = \vec{v}_{P_1} + \vec{v}_{P_1 P_2}$$

Đó là một điều vô lí vì $v_{P_1 P_2} = \omega \cdot P_1 P_2 \neq 0$.

Vậy $P_1 \equiv P_2$.

#### 4. Sự phân bố vận tốc các điểm

Ta xét sự phân bố vận tốc các điểm của tấm phẳng $S$ chuyển động phẳng. Có hai khả năng có thể xảy ra tại mỗi thời điểm :

*Khả năng 1 : $\omega \neq 0$*

Lấy tâm vận tốc tức thời $P$ làm cực. Xét vận tốc của một điểm $M$ bất kì thuộc hình phẳng $S$. Ta có quan hệ vận tốc.

$$\vec{v}_M = \vec{v}_P + \vec{v}_{MP} = \vec{v}_{MP} \quad (\text{do } \vec{v}_P = \vec{0})$$

$$\vec{v}_M = \vec{v}_{MP} \quad \begin{cases} \text{phương } \perp MP \\ \text{chiều hướng theo chiều } \overline{w} \\ \text{trị số } v_{MP} = \omega \cdot MP \end{cases}$$

Vậy khi $\omega \neq 0$, vận tốc tức thời của hình phẳng $S$ phân bố giống như $S$ đang quay quanh tâm vận tốc tức thời $P$ với vận tốc góc $\overline{\omega}$ (H.4-7).

Người ta nói rằng hình phẳng $S$ quay tức thời quanh $P$.

*Khả năng 2 : $\omega = 0$*

Xét vận tốc hai điểm $M, N$ bất kì của hình phẳng $S$. Ta có

$$\vec{v}_M = \vec{v}_N + \vec{v}_{MN}$$

Do $v_{MN} = MN \cdot \omega = 0$, nên $\vec{v}_M = \vec{v}_N$. Vậy khi $\omega = 0$, vận tốc tức thời của các điểm của hình phẳng $S$ đều bằng nhau (H.4 - 8).

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_8.svg" alt="Hình 4-8: Phân bố vận tốc khi hình phẳng S tịnh tiến tức thời" style="max-height: 270px;" />

<div class="figure-caption">

Hình 4-8

</div>

</div>

Người ta nói rằng hình phẳng $S$ chuyển động tịnh tiến tức thời.

Như vậy, tại mỗi thời điểm, hình phẳng $S$ hoặc quay tức thời quanh tâm vận tốc tức thời $P$ (khi $\omega \neq 0$) hoặc chuyển động tịnh tiến tức thời (khi $\omega = 0$). Chú ý rằng chuyển động tức thời của hình phẳng chỉ nói lên tính chất của vận tốc. Tuyệt đối không được từ đó suy ra tính chất của gia tốc.

#### 5. Quy tắc thực hành tìm tâm vận tốc tức thời

Dựa vào các kết quả ở trên ta đưa ra ở đây một số quy tắc thực hành tìm tâm vận tốc tức thời.

*Trường hợp 1 :* Biết vận tốc điểm $A$ và phương vận tốc điểm $B$. Hai phương này không song song với nhau.

Dựa vào tính chất $\vec{v}_A \perp PA, \ \vec{v}_B \perp PB$, từ $A$ và $B$ ta kẻ tương ứng các đường vuông góc với $\vec{v}_A$ và $\vec{v}_B$. Giao điểm của chúng là tâm vận tốc $P$ (H.4 - 9a).

*Trường hợp 2.* Biết vận tốc hai điểm $A$ và $B$, chúng có phương song song với nhau.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_9.svg" alt="Hình 4-9: Các trường hợp xác định tâm vận tốc tức thời P" style="max-height: 480px;" />

<div class="figure-caption">

Hình 4-9

</div>

</div>

Dựa vào tính chất

$$\frac{v_A}{v_B} = \frac{PA}{PB}$$

Ta thấy tâm vận tốc tức thời $P$ chính là giao điểm của đường $AB$ với đường nối các đầu mút các vectơ $\vec{v}_A$ và $\vec{v}_B$, (H.4-9b và 4-9c). Trường hợp giao điểm ở vô cùng, tấm phẳng thực hiện chuyển động tịnh tiến tức thời (H.4-9d và 4-9đ).

*Trường hợp 3.* Biết một điểm của hình phẳng có vận tốc bằng không.

Khi chuyển động phẳng là chuyển động lăn không trượt của thiết diện phẳng $S$ trên một đường cố định thì điểm tiếp xúc có vận tốc tức thời bằng không. (Vì các tiếp điểm của hai vật khi không trượt trên nhau phải có cùng một vận tốc, mà vật thứ hai cố định). Vì vậy điểm của vật tiếp xúc với mặt tựa chính là tâm $P$ (H.4-9e).

#### Thí dụ 4-1

**Thí dụ 4 - 1.** Tìm vận tốc của điểm $M$ trên vành của bánh xe bán kính $R$ lăn không trượt trên đường thẳng. Cho biết vận tốc tâm $C$ của bánh xe là $\vec{v}$.

[Đính chính bản in: Trong đề bài in vận tốc tâm $C$ là $\vec{v}$, tương ứng với $\vec{v}_c$ trên Hình 4-10 và trong bài giải.]

**Bài giải**

Vì bánh xe lăn không trượt trên đường thẳng, nên điểm tiếp xúc giữa bánh xe và mặt đường là tâm vận tốc tức thời $P$ (H.4-10).

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_10.svg" alt="Hình 4-10: Bánh xe bán kính R lăn không trượt trên đường thẳng" style="max-height: 270px;" />

<div class="figure-caption">

Hình 4-10

</div>

</div>

Vận tốc góc của bánh xe là :

$$\omega = \frac{v_c}{PC} = \frac{v_c}{R}$$

Vận tốc của điểm $M$ :

$$v_M = \omega PM = \frac{v_c 2R\cos\alpha}{R} = 2v_c\cos\alpha$$

---

### 4.3.3. Gia Tốc Các Điểm

#### 1. Biểu thức giải tích xác định gia tốc của một điểm

Đạo hàm biểu thức vận tốc $(4 - 6)$ hoặc $(4 - 7)$ ta được :

[Đính chính bản in: Các biểu thức vận tốc ở mục `4.3.2` là `(4 - 7)` hoặc `(4 - 8)` (bản in dẫn nhầm thành `(4 - 6)` hoặc `(4 - 7)`).]

$$\begin{bmatrix} \ddot{x}_B \\ \ddot{y}_B \end{bmatrix} = \begin{bmatrix} \ddot{x}_A \\ \ddot{y}_A \end{bmatrix} = \left( \ddot{\varphi} \begin{bmatrix} -\sin\varphi & -\cos\varphi \\ \cos\varphi & -\sin\varphi \end{bmatrix} - \dot{\varphi}^2 \begin{bmatrix} \cos\varphi & -\sin\varphi \\ \sin\varphi & \cos\varphi \end{bmatrix} \right) \begin{bmatrix} \xi_B \\ \eta_B \end{bmatrix} \tag{4-11}$$

[Đính chính bản in: Ở công thức `(4-11)`, dấu `=` đứng giữa ma trận $\begin{bmatrix} \ddot{x}_A \\ \ddot{y}_A \end{bmatrix}$ và ngoặc đơn là lỗi in của dấu `+`.]

Hay :

$$\begin{aligned}
\ddot{x}_B &= \ddot{x}_A - \ddot{\varphi}(\xi_B\sin\varphi + \eta_B\cos\varphi) - \dot{\varphi}^2(\xi_B\cos\varphi - \eta_B\sin\varphi) \\
\ddot{y}_B &= \ddot{y}_A + \ddot{\varphi}(\xi_B\cos\varphi - \eta_B\sin\varphi) - \dot{\varphi}^2(\xi_B\sin\varphi + \eta_B\cos\varphi)
\end{aligned} \tag{4-12}$$

#### 2. Quan hệ gia tốc giữa hai điểm

::: tip Định lí 4
*Gia tốc của điểm $B$ tùy ý thuộc hình phẳng $S$ chuyển động phẳng, bằng tổng hình học gia tốc của điểm cực $A$ và gia tốc của điểm $B$ trong chuyển động quay của hình phẳng $S$ quanh $A$.*

$$\vec{a}_B = \vec{a}_A + \vec{a}_{BA} = \vec{a}_A + \vec{a}_{BA}^t + \vec{a}_{BA}^n \tag{4-13}$$
:::

*Chứng minh.* Lập luận tương tự như khi chứng minh định lí 1 về quan hệ vận tốc giữa hai điểm của hình phẳng $S$, ta áp dụng định lí hợp gia tốc (công thức $3-8$ chương 3) :

$$\vec{a}_a = \vec{a}_e + \vec{a}_r$$

$\vec{a}_c = 0$ vì hệ động $Ax'y'$ chuyển động tịnh tiến.

Ở đây $\vec{a}_a = \vec{a}_B, \ \vec{a}_e = \vec{a}_{B^*} = \vec{a}_A$. Còn $a_r$ là gia tốc của điểm $B$ trong chuyển động quay tương đối của hình phẳng $S$ quanh $A$. Ta kí hiệu gia tốc này là $\vec{a}_{BA}$. Theo chương 2 thì :

$$\vec{a}_{BA} = \vec{a}_{BA}^t + \vec{a}_{BA}^n.$$

Vậy ta có :

$$\vec{a}_B = \vec{a}_A + \vec{a}_{BA} = \vec{a}_A + \vec{a}_{BA}^t + \vec{a}_{BA}^n$$

Định lí được chứng minh.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_11.svg" alt="Hình 4-11: Các thành phần gia tốc quay tương đối quanh cực A" style="max-height: 250px;" />

<div class="figure-caption">

Hình 4-11

</div>

</div>

*Chú ý 1.* Từ các hệ thức $(4 - 12)$ ta có thể nhận được hệ thức $(4 - 13)$ bằng một vài biến đổi toán học không phức tạp.

*Chú ý 2.* Từ cách xác định các thành phần gia tốc tiếp, gia tốc pháp của một điểm thuộc vật rắn quay quanh một trục cố định, ta dễ dàng xác định các vectơ $\vec{a}_{BA}^t, \vec{a}_{BA}^n$ bằng hình học (H.4 - 11).

$$\vec{a}_{BA}^t \quad \begin{cases} \text{Phương } \perp AB \\ \text{Chiều phù hợp chiều của } \overline{\varepsilon} \\ \text{Trị số } a_{BA}^t = \varepsilon \cdot AB \end{cases}$$

$$\vec{a}_{BA}^n \quad \begin{cases} \text{Hướng từ } B \text{ đến } A \\ \text{Trị số } a_{BA}^n = \omega^2 AB. \end{cases}$$

Theo các công thức $(2 - 15)$ của chương 2 ta có các biểu thức giải tích :

$$\vec{a}_{AB} = \vec{\varepsilon} \wedge \overrightarrow{AB} \, ; \quad \vec{a}_{BA}^n = \vec{\omega} \wedge \vec{v}_{BA}$$

[Đính chính bản in: Ở biểu thức đầu, bản in ghi $\vec{a}_{AB} = \vec{\varepsilon} \wedge \overrightarrow{AB}$, hiểu chính xác là thành phần gia tốc tiếp $\vec{a}_{BA}^t = \vec{\varepsilon} \wedge \overrightarrow{AB}$.]

#### 3. Tâm gia tốc tức thời

**Định nghĩa :** *Điểm $Q$ trên hình phẳng $S$ mà tại thời điểm khảo sát có gia tốc bằng không, gọi là tâm gia tốc tức thời.*

::: tip Định lí 5
*Ở mỗi thời điểm nếu $\omega$ và $\varepsilon$ không đồng thời triệt tiêu, có một điểm duy nhất thuộc hình phẳng $S$ có gia tốc bằng không.*
:::

*Chứng minh.* Sự tồn tại của tâm $Q$. Giả sử biết $\vec{a}_A, \overline{\omega}, \overline{\varepsilon}..$

Quay vectơ $\vec{a}_A$ quanh $A$ theo chiều $\overline{\varepsilon}$ đi một góc $\alpha$.

$$\operatorname{tg}\alpha = \varepsilon / \omega^2$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_12.svg" alt="Hình 4-12: Xác định tâm gia tốc tức thời Q" style="max-height: 250px;" />

<div class="figure-caption">

Hình 4-12

</div>

</div>

ta được nửa đường thẳng $AB$ (H.4-12). Trên $AB$ lấy một điểm $Q$ sao cho :

$$AQ = \frac{a_A}{\sqrt{\omega^4 + \varepsilon^2}}$$

Như thế $\vec{a}_{QA} = -\vec{a}_A$. Vậy ta có :

$$\vec{a}_Q = \vec{a}_A + \vec{a}_{QA} = \vec{0}$$

Ta chứng minh sự duy nhất của tâm $Q$ bằng phương pháp phản chứng. Giả sử có hai điểm $Q_1$ và $Q_2$ mà tại thời điểm khảo sát :

$$\vec{a}_{Q_1} = \vec{a}_{Q_2} = \vec{0}.$$

Khi đó hệ thức :

$$a_{Q_2} = a_{Q_1} + a_{Q_1 Q_2}$$

là điều vô lí, vì : $a_{Q_1 Q_2} \neq 0$. Vậy $Q_1 \equiv Q_2$

[Đính chính bản in: Hệ thức trên là hệ thức vectơ $\vec{a}_{Q_2} = \vec{a}_{Q_1} + \vec{a}_{Q_2 Q_1}$ (bản in thiếu dấu mũi tên vectơ), với trị số $a_{Q_2 Q_1} = Q_1 Q_2 \sqrt{\omega^4 + \varepsilon^2} \neq 0$.]

*Chú ý :*
- Khi $\omega$ và $\varepsilon$ không đồng thời triệt tiêu thì $Q$ là một điểm giới nội;
- Khi $\omega$ và $\varepsilon$ đồng thời triệt tiêu thì $Q \to \infty$;
- Nói chung, tâm vận tốc tức thời $P$ và tâm gia tốc tức thời $Q$ của hình phẳng $S$ không trùng nhau.

#### Thí dụ 4-2

**Thí dụ 4 - 2.** Tại một thời điểm nào đó, tâm $O$ của bánh xe lăn không trượt trên đường ray thẳng có vận tốc $v_o = 1\text{m/s}$ và gia tốc $a_o = 1{,}5\text{m/s}^2$, (H.4-13). Bán kính bánh xe $R = 0{,}5\text{m}$. Hãy xác định tâm gia tốc tức thời $Q$ tại thời điểm đó.

**Bài giải**

Do $P$ là tâm vận tốc tức thời, ta có :

$$\omega = \frac{v_o}{R} = 2/\text{s}$$

Gia tốc góc của bánh xe :

$$\varepsilon = \frac{a_o}{R} = 3/\text{s}^2$$

Chiều của $\omega$ và $\varepsilon$ cho trên hình 4 - 13.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_13.svg" alt="Hình 4-13: Xác định tâm gia tốc tức thời Q của bánh xe lăn không trượt" style="max-height: 270px;" />

<div class="figure-caption">

Hình 4-13

</div>

</div>

Quay vectơ $\vec{a}_o$ theo chiều của $\overline{\varepsilon}$ đi một góc $\alpha$ :

$$\operatorname{tg}\alpha = \frac{\varepsilon}{\omega^2} = \frac{3}{4} = 0{,}75 \quad (\alpha \approx 37^\circ)$$

ta được nửa đường thẳng $OA$. Trên đó lấy một điểm $Q$ mà

$$OQ = \frac{a_o}{\sqrt{\omega^4 + \varepsilon^2}} = 0{,}4\text{ m}$$

Điểm $Q$ đó là tâm gia tốc tức thời.

[Đính chính bản in: Thay $a_o = 1{,}5\text{ m/s}^2$, $\omega = 2\text{ /s}$, $\varepsilon = 3\text{ /s}^2$ vào biểu thức trên thì $OQ = \frac{1{,}5}{\sqrt{2^4 + 3^2}} = \frac{1{,}5}{5} = 0{,}3\text{ m}$ (bản in ghi nhầm thành $0{,}4\text{ m}$).]

*Chú ý :* Khi $a_o = 0$ thì $\varepsilon = 0$ và do đó $\alpha = 0^\circ \, ; \ OQ = 0$. Như vậy khi vận tốc tâm $O$ của bánh xe luôn không đổi thì điểm $O$ đó là gia tốc tức thời.

[Đính chính bản in: Cụm "là gia tốc tức thời" ở câu cuối bản in thiếu chữ "tâm" ("là tâm gia tốc tức thời").]

---

## 4.4. Tổng Hợp Chuyển Động Song Phẳng Từ Các Chuyển Động Cơ Bản {#_4-5-tong-hop-chuyen-đong-song-phang}

Ở các phần trên chúng ta đã chứng minh rằng chuyển động phẳng của vật rắn luôn có thể phân tích thành hai chuyển động cơ bản là chuyển động quay quanh một trục cố định và chuyển động tịnh tiến. Ngược lại, từ hai chuyển động cơ bản đó, ta có thể tổng hợp thành chuyển động song phẳng hay không?

Trước khi xét bài toán trên, chúng ta đưa ra các khái niệm chuyển động tương đối, chuyển động tuyệt đối và chuyển động theo vật rắn. Chuyển động của vật rắn đối với hệ quy chiếu động được gọi là chuyển động tương đối, chuyển động của vật rắn đối với hệ quy chiếu cố định là chuyển động tuyệt đối. Chuyển động của hệ quy chiếu động đối với hệ quy chiếu cố định là chuyển động theo.

Dưới đây ta sẽ xét một số bài toán tổng hợp chuyển động song phẳng hay gặp trong kĩ thuật.

### 4.4.1. Tổng Hợp Chuyển Động Quay Quanh Hai Trục Song Song

Giả sử vật rắn quay với vận tốc góc $\overline{\omega}_r$ quanh trục $O'z'$ đối với hệ tọa độ động $O'x'y'z'$. Hệ tọa độ động $O'x'y'z'$ lại quay với vận tốc góc $\overline{\omega}_e$ quanh trục $Oz$ đối với hệ tọa độ cố định $Oxyz$. Hai trục $Oz$ và $O'z'$ song song với nhau. Xét chuyển động của vật rắn đối với hệ tọa độ cố định $Oxyz$, ta có định lí :

::: tip Định lí 6
*Tổng hợp hai chuyển động quay quanh hai trục song song của vật rắn, ta được chuyển động tuyệt đối là chuyển động song phẳng có mặt phẳng quy chiếu vuông góc với trục quay. Vận tốc góc tuyệt đối bằng tổng đại số vận tốc góc tương đối và vận tốc góc theo :*

$$\overline{\omega}_a = \overline{\omega}_e + \overline{\omega}_r$$

*Trường hợp đặc biệt khi hai chuyển động quay cùng tốc độ nhưng ngược chiều nhau thì chuyển động tuyệt đối là chuyển động tịnh tiến.*
:::

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_14.svg" alt="Hình 4-14: Tổng hợp hai chuyển động quay quanh hai trục song song Oz và O'z'" style="max-height: 320px;" />

<div class="figure-caption">

Hình 4-14

</div>

</div>

*Chứng minh.* Xét một thiết diện $S$ của vật rắn mà vuông góc với trục $Oz$ (H. 4 - 14). Đối với hệ quy chiếu cố định, khi vật rắn chuyển động, thiết diện $S$ chỉ chuyển động trong mặt phẳng $P$ chứa nó. Vậy chuyển động tuyệt đối của vật rắn là chuyển động song phẳng mà mặt phẳng quy chiếu vuông góc với trục quay. Vì vậy ta chỉ cần xét chuyển động của thiết diện phẳng $S$ trong mặt phẳng $P$.

Gọi giao điểm của các trục $O'z'$ và $Oz$ với thiết diện phẳng $S$ là $A$ và $B$. Ta xét ba trường hợp có thể xảy ra :

a) $\overline{\omega}_r$ và $\overline{\omega}_e$ cùng chiều quay (H. 4 - 15a). Ta có :

$$v_A = AB \cdot \omega_e \, ; \quad v_B = AB \cdot \omega_r.$$

Dễ dàng xác định được tâm vận tốc tức thời của hình phẳng là $P$. Từ hình vẽ 4 - 15a ta có :

$$\frac{PA}{PB} = \frac{v_A}{v_B} = \frac{AB \cdot \omega_e}{AB \cdot \omega_r}$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_15.svg" alt="Hình 4-15: Các trường hợp tổng hợp hai chuyển động quay quanh hai trục song song" style="max-height: 400px;" />

<div class="figure-caption">

Hình 4-15

</div>

</div>

Do đó :

$$\omega_r = \frac{PB}{PA}\omega_e$$

Gọi $\omega_a$ là vận tốc góc tuyệt đối của hình phẳng $S$. Ta có :

$$\begin{aligned}
\omega_a &= \frac{v_A}{PA} = \frac{BA}{PA}\omega_e = \frac{PA + PB}{PA}\omega_e \\
&= \omega_e + \frac{PB}{PA}\omega_e = \omega_e + \omega_r
\end{aligned}$$

Vậy, trong trường hợp này, ta nhận được hệ thức : $\omega_a = \omega_e + \omega_r$

b) $\overline{\omega}_r$ và $\overline{\omega}_e$ ngược chiều quay và có trị số khác nhau (H. 4-15b). Không giảm tổng quát, giả sử $\omega_r > \omega_e$. Khi đó do $BA = PB - PA$, nên tính toán tương tự như trên ta sẽ có :

$$\omega_a = \omega_r - \omega_e$$

Kết hợp hai trường hợp a) và b) ta được : $\overline{\omega}_a = \overline{\omega}_e + \overline{\omega}_r$

c) $\overline{\omega}_r = -\overline{\omega}_e$ (H.4 - 15c). Trong trường hợp này $\vec{v}_B = \vec{v}_A$. Do đó chuyển động tuyệt đối của vật rắn là chuyển động tịnh tiến.

### 4.4.2. Tổng Hợp Chuyển Động Tịnh Tiến và Chuyển Động Quay Khi $\vec{v} \perp \vec{\omega}$

Gọi $\vec{\omega}$ là vận tốc góc của chuyển động quay (tương đối hoặc theo) quanh một trục cố định, $\vec{v}$ là vận tốc của chuyển động tịnh tiến (theo hoặc tương đối). Giả thiết $\vec{v} \perp \vec{\omega}$. Ta có định lí :

::: tip Định lí 7
*Tổng hợp chuyển động quay quanh một trục với vận tốc góc $\vec{\omega}$ và chuyển động tịnh tiến với vận tốc $\vec{v}$ của vật rắn mà $\vec{v} \perp \vec{\omega}$ ta được chuyển động tuyệt đối là chuyển động song phẳng có mặt phẳng quy chiếu vuông góc với trục quay.*
:::

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_16.svg" alt="Hình 4-16: Tổng hợp chuyển động tịnh tiến và chuyển động quay khi v vuông góc omega" style="max-height: 320px;" />

<div class="figure-caption">

Hình 4-16

</div>

</div>

*Chứng minh*

Giả sử vật rắn quay với vận tốc góc $\vec{\omega}_r = \vec{\omega}$ quanh trục $O'z'$ đối với hệ tọa độ động $O'x'y'z'$. Hệ tọa độ động $O'x'y'z'$ lại chuyển động tịnh tiến đối với hệ tọa độ cố định $Oxyz$ với vận tốc $\vec{v} \perp \vec{\omega}$.

Xét một thiết diện phẳng $S$ của vật rắn và vuông góc với $O'z'$. Khi vật rắn chuyển động, đối với hệ quy chiếu cố định, thiết diện phẳng $S$ chỉ chuyển động trong mặt phẳng $P$ của nó. Vậy chuyển động tuyệt đối của vật rắn là chuyển động song phẳng mà mặt phẳng quy chiếu vuông góc với trục quay. Lấy $o'$ làm cực, ta có : $\vec{\omega}_a = \vec{\omega} \, ; \ \vec{v}_{o'} = \vec{v}$.

Đối với trường hợp chuyển động tương đối là tịnh tiến với vận tốc $\vec{v}$ còn chuyển động theo là chuyển động quay quanh một trục với vận tốc góc $\vec{\omega} \perp \vec{v}$, ta chứng minh hoàn toàn tương tự.

---

## 4.5. Các Thí Dụ Áp Dụng

Trong các bài toán áp dụng, ta thường phải tính toán động học hệ các vật rắn chuyển động phẳng. Các phương pháp giải các bài toán động học vật rắn và hệ vật rắn chuyển động có thể phân thành bốn loại : phương pháp đồ thị, phương pháp đồ thị - tính toán, phương pháp giải tích, phương pháp số trên máy tính điện tử.

Các phương pháp đồ thị và đồ thị - tính toán dựa trên quan hệ vận tốc, quan hệ gia tốc giữa hai điểm bất kì của hình phẳng, hoặc dựa trên việc xác định tâm vận tốc và tâm gia tốc tức thời. Các phương pháp giải tích và phương pháp số dựa trên các biểu thức giải tích xác định phương trình chuyển động, vận tốc, gia tốc của một điểm bất kì thuộc hình phẳng. Dưới đây nêu ra một số thí dụ áp dụng ba phương pháp sau.

### Thí dụ 4-3

**Thí dụ 4 - 3.** Cần lắc $OA$ dài $40\text{ cm}$ có thể quay quanh trục $O$ và làm cho thanh truyền $AB$ dài $80\text{cm}$ chuyển động. Con trượt $B$ trượt dọc theo hướng $ED$ nghiêng với phương nằm ngang một góc $\alpha = 45^\circ$. Tại thời điểm khảo sát $\beta = 90^\circ, \ \omega_{OA} = 2\text{s}^{-1}, \ \varepsilon_{OA} = 0$, hãy xác định : vận tốc góc, gia tốc góc thanh $AB$, vận tốc và gia tốc con trượt $B$.

**Bài giải**

*Phân tích :* Hệ khảo sát là cơ cấu $OAB$ ở vị trí như hình 4 - 17, trong đó : $OA$ chuyển động quay quanh $O$, $AB$ chuyển động phẳng, con trượt $B$ chuyển động tịnh tiến dọc theo $DE$.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_17.svg" alt="Hình 4-17: Cơ cấu cần lắc OA - thanh truyền AB - con trượt B" style="max-height: 310px;" />

<div class="figure-caption">

Hình 4-17

</div>

</div>

*Bài toán vận tốc :* Trước hết tìm tâm vận tốc tức thời thanh truyền $AB$. Tâm này nằm trên giao của hai đường thẳng vuông góc vận tốc các điểm $A$ và $B$ (H. 4 - 17). Tam giác $ABP$ là tam giác vuông cân nên : $AB = AP = 80\text{cm}, \ BP = 80\sqrt{2}\text{ cm}$.

Vận tốc góc thanh $AB$ được xác định bởi biểu thức :

$$\omega_{AB} = \frac{v_A}{AP} = \frac{\omega_{OA} \cdot OA}{AP} = 1\text{s}^{-1}$$

Vận tốc con trượt $B$ : $v_B = \omega_{AB} \cdot BP = 80\sqrt{2}\text{ cm/s}$

*Bài toán gia tốc :* Sử dụng công thức :

$$\vec{a}_B = \vec{a}_A + \vec{a}_{BA}^t + \vec{a}_{BA}^n \qquad \text{(a)}$$

trong đó : $\vec{a}_A$ hướng từ $A$ về $O$ và có trị số $a_A = \omega_{OA}^2 OA = 160\text{cm/s}$, $\vec{a}_{BA}^n$ hướng từ $B$ về $A$ và có trị số : $a_{BA}^n = \omega_{AB}^2 \cdot AB = 80\text{ cm/s}$ ; $\vec{a}_{BA}^t$ hướng vuông góc với $AB$, $\vec{a}_B$ hướng dọc theo $DE$. Hai véctơ này chưa biết về trị số và chiều. Chiếu phương trình (a) lên $BA$ và lên phương vuông góc với $BA$ ta được :

[Đính chính bản in: Đơn vị của $a_A = 160\text{ cm/s}^2$ và $a_{BA}^n = 80\text{ cm/s}^2$ bị bản in ghi thiếu số mũ $2$ ở mẫu số thành $\text{cm/s}$.]

$$a_B\cos 45^\circ = a_{BA}^n \, ; \quad a_B\cos 45^\circ = -a_A + a_{BA}^t$$

Từ đó suy ra : $a_B = 80\sqrt{2}\text{ cm/s}^2 \, ; \ a_{BA}^t = 240\text{ cm/s}^2$.

Gia tốc góc thanh $AB$ :

$$\varepsilon_{AB} = \frac{a_{BA}^t}{AB} = 3\text{s}^{-2}$$

---

### Thí dụ 4-4

**Thí dụ 4 - 4 :** Tay quay $OA = 0{,}2\text{m}$ quay đều với vận tốc góc $\omega_o = 20\pi\ 1/\text{s}$. Thanh truyền $AB = 0{,}4\text{m}$. Tại thời điểm cơ cấu có vị trí như hình 4-18, tìm :
- Vận tốc điểm $B$, vận tốc góc thanh $AB$ và cần lắc $O_1B$.
- Gia tốc điểm $B$, gia tốc góc thanh $AB$ và cần lắc $O_1B$.

**Bài giải**

*Phân tích :* Chọn hệ khảo sát là cơ cấu bốn khâu $OABO_1$ ở vị trí như hình 4-18. Hệ gồm ba vật rắn. Tay quay $OA$ chuyển động quay quanh $O$. Cần lắc $O_1B$ chuyển động quay quanh $O_1$. Thanh truyền $AB$ chuyển động phẳng. Sử dụng phương pháp đồ thị - tính toán giải bài toán này.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_18.svg" alt="Hình 4-18: Bài toán vận tốc cơ cấu bốn khâu bản lề OABO1" style="max-height: 260px;" />

<div class="figure-caption">

Hình 4-18

</div>

</div>

*Bài toán vận tốc :* Sử dụng công thức :

$$\vec{v}_B = \vec{v}_A + \vec{v}_{BA} \qquad \text{(a)}$$

trong đó : $\vec{v}_A$ vuông góc với $OA$ và có trị số $v_A = OA \cdot \omega_o = 4\pi\text{ m/s}$. $\vec{v}_{BA}$ vuông góc với $AB$, chưa biết trị số và hướng ; $\vec{v}_B$ vuông góc với $O_1B$ và chưa biết trị số và hướng. Chiếu phương trình (a) lên phương $BA$ ta được :

$$v_B = v_A\cos 30^\circ = 4\pi\frac{\sqrt{3}}{2} = 2\sqrt{3}\pi\text{ m/s}$$

Từ đó ta có :

$$\omega_{O_1B} = \frac{v_B}{O_1B} = \frac{v_B}{OA\sin 60^\circ} = 20\pi\ 1/\text{s}$$

Chiếu đẳng thức (a) lên phương $O_1B$ :

$$v_A\sin 30^\circ - v_{BA} = 0 \implies v_{BA} = 4\pi \cdot \frac{1}{2} = 2\pi\text{ m/s}$$

$$\omega_{AB} = \frac{v_{BA}}{AB} = \frac{2\pi}{0{,}4} = 5\pi\ 1/\text{s}$$

*Bài toán gia tốc :* Áp dụng công thức (H. 4-19) :

$$\vec{a}_B^t + \vec{a}_B^n = \vec{a}_A^n + \vec{a}_{BA}^t + \vec{a}_{BA}^n \qquad \text{(b)}$$

Do tay quay $OA$ quay đều nên $\vec{a}_A^t = 0$, $\vec{a}_A^n$ hướng từ $A$ về $O$ và có trị số $a_A^n = OA\omega_o^2 = 80\pi^2\text{ m/s}^2$.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_19.svg" alt="Hình 4-19: Bài toán gia tốc cơ cấu bốn khâu bản lề OABO1" style="max-height: 250px;" />

<div class="figure-caption">

Hình 4-19

</div>

</div>

$\vec{a}_B^n$ hướng từ $B$ đến $O_1$ và có trị số :

$$a_B^n = O_1B\omega_{O_1B}^2 = 0{,}1\sqrt{3} \cdot 400\pi^2 = 40\sqrt{3}\pi^2\text{ m/s}^2.$$

$\vec{a}_B^t$ vuông góc với $O_1B$, chưa biết trị số và hướng. $\vec{a}_{BA}^n$ hướng từ $B$ về $A$ và có trị số $a_{BA}^n = AB\omega_{AB}^2 = 10\pi^2\text{ m/s}^2$. $\vec{a}_{BA}^t$ vuông góc với $O_1B$, chưa biết trị số và hướng.

[Đính chính bản in: Thành phần $\vec{a}_{BA}^t$ vuông góc với thanh truyền $AB$ (bản in ghi nhầm thành vuông góc với $O_1B$).]

Chiếu đẳng thức (b) lên phương $AB$ ta được :

$$a_B^t = -a_A^n\cos 60^\circ - a_{BA}^n = -40\pi^2 - 10\pi^2 = -50\pi^2$$

$$a_B = \sqrt{(a_B^n)^2 + (a_B^t)^2} = 10\pi^2\sqrt{73}$$

Dấu trừ chứng tỏ $\vec{a}_B^t$ phải có hướng ngược lại như trên hình vẽ. Do $a_B^t = \varepsilon_{O_1B} \cdot O_1B$, ta suy ra :

$$\varepsilon_{O_1B} = \frac{a_B^t}{O_1B} = \frac{50\pi^2}{0{,}1\sqrt{3}} = \frac{500\sqrt{3}}{3}\pi^2\ 1/\text{s}^2$$

Chiếu đẳng thức (b) lên phương $O_1B$ :

$$\begin{aligned}
-a_B^n &= -a_A^n\sin 60^\circ + a_{BA}^t \implies a_{BA}^t = a_A^n\sin 60^\circ - a_B^n \\
&= 40\sqrt{3}\pi^2 - 40\sqrt{3}\pi^2 = 0
\end{aligned}$$

Vậy $\varepsilon_{AB} = 0$

---

### Thí dụ 4-5

**Thí dụ 4 - 5.** Khảo sát động học cơ cấu hành tinh như hình 4 - 20. Bánh xe $O$ cố định, bán kính $R = 20\text{cm}$. Tay quay $OA = 30\text{cm}$ quay đều quanh trục $O$ với vận tốc góc $\omega_o = 10\text{ rad/s}$. Bánh xe $A$ bán kính $r = 10\text{cm}$, có trục lắp vào đầu $A$ của tay quay và ăn khớp răng với bánh xe cố định $O$. Tìm :
- Vận tốc góc bánh xe $A$, vận tốc điểm $M$ ở đầu bán kính thẳng góc với tay quay.
- Gia tốc góc bánh xe $A$, gia tốc điểm $M$.

**Bài giải**

*Phân tích :* Chọn hệ khảo sát là cơ cấu hành tinh như hình 4 - 20. Do bánh xe $O$ cố định, nên hệ chỉ có hai vật rắn chuyển động. Tay quay $OA$ chuyển động quay quanh $O$. Bánh xe $A$ chuyển động phẳng, lăn không trượt trên bánh xe $O$.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_20.svg" alt="Hình 4-20: Cơ cấu bánh răng hành tinh với bánh răng trung tâm O cố định" style="max-height: 270px;" />

<div class="figure-caption">

Hình 4-20

</div>

</div>

*Bài toán vận tốc :* Vì $A$ là một điểm của tay quay $OA$ nên vận tốc $\vec{v}_A$ vuông góc với $OA$ và hướng thuận theo chiều quay của $OA$. Trị số của nó $v_A = OA \cdot \omega_o = 30 \times 10 = 300\text{ cm/s}$.

Do bánh xe $A$ lăn không trượt trên bánh xe $O$, nên điểm ăn khớp $C$ là tâm vận tốc tức thời. Do :

$$v_A = CA \cdot \omega_A \text{ nên } \omega_A = \frac{v_A}{CA} = \frac{300}{10} = 30\text{rad/s}$$

Chiều quay của $\omega_A$ được chỉ trên hình 4-20.

Vận tốc điểm $M$ vuông góc với $CM$ và hướng theo chiều quay của $\omega_A$. Trị số của nó $v_M = CM \cdot \omega_A = CA\sqrt{2} \cdot \omega_A = 300\sqrt{2}\text{cm/s}$.

*Bài toán gia tốc :* Chú ý rằng ở các cơ cấu hành tinh quan hệ $\omega_A = \frac{v_A}{CA}$ luôn đúng ở mọi vị trí, mọi thời điểm. Do đó ta suy ra :

$$\varepsilon_A = \frac{d\omega_A}{dt} = \frac{d}{dt}\left(\frac{v_A}{CA}\right) = 0$$

Vì $v_A$ luôn là hằng số khi $\omega_o = \text{const}$.

Chọn $A$ làm cực, gia tốc điểm $M$ được xác định bởi hệ thức

$$\vec{a}_M = \vec{a}_A + \vec{a}_{MA}^t + \vec{a}_{MA}^n \qquad \text{(a)}$$

Do tay quay $OA$ quay đều quanh $O$ nên $\vec{a}_A^t = 0 \, ; \ \vec{a}_A^n$ hướng từ $A$ về $O$ và có trị số $a_A^n = OA \cdot \omega_o^2 = 3000\text{ cm/s}^2$.

Thành phần gia tốc $\vec{a}_{MA}^n$ hướng từ $M$ về $A$ và có trị số $a_{MA}^n = MA \cdot \omega_A^2 = 9000\text{ cm/s}^2$. Thành phần $a_{MA}^t = 0$ do $\varepsilon_A = 0$. Vậy :

$$\vec{a}_M = \vec{a}_A^n + \vec{a}_{MA}^n \qquad \text{(b)}$$

Chiếu đẳng thức (b) lên hai trục tọa độ vuông góc nhau. Cuối cùng ta có :

$$a_M^2 = (a_A^n)^2 + (a_{MA}^n)^2 = 3000^2 + 9000^2$$

Vậy : $a_M = 3000\sqrt{10}\text{ cm/s}^2$

---

### Thí dụ 4-6

**Thí dụ 4 - 6.** Khảo sát động học cơ cấu vi sai cho trên hình 4-21. Bánh răng $1$ quay quanh $O$ với vận tốc góc $\omega_1$, gia tốc góc $\varepsilon_1$. Tay quay $OA$ quay quanh $O$ độc lập với bánh răng $1$ với vận tốc góc $\omega_o$, gia tốc góc $\varepsilon_o$. Hai bánh răng $1$ và $2$ lăn không trượt trên nhau và có các bán kính tương ứng là $r_1$ và $r_2$. Bánh răng $2$ quay được quanh chốt $A$ ở trên tay quay. Tìm vận tốc góc, gia tốc góc của bánh xe $2$. Tìm vận tốc, gia tốc của điểm $M$ ở trên vành bánh xe $2$ mà $MA \perp OA$ (H.4-21).

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_21.svg" alt="Hình 4-21: Khảo sát vận tốc cơ cấu vi sai bằng phương pháp Vilit" style="max-height: 290px;" />

<div class="figure-caption">

Hình 4-21

</div>

</div>

**Bài giải**

*Phân tích :* Cơ cấu vi sai trên hình 4 - 21 là cơ cấu phẳng có ba khâu chuyển động. Bánh răng $1$ chuyển động quay quanh một trục cố định. Tay quay $OA$ chuyển động quay quanh $O$. Bánh răng $2$ chuyển động phẳng. Sự truyền động từ bánh răng $1$ và tay quay $OA$ sang bánh răng $2$ thực hiện nhờ sự ăn khớp giữa các bánh răng $1$ và $2$. Chú ý rằng cơ cấu vi sai trên hình 4 - 21, là cơ cấu hai bậc tự do. Để xác định chuyển động của nó phải cho biết trước vận tốc góc của hai khâu.

*Bài toán vận tốc :* Ta giải bài toán trên bằng phương pháp Vilit. Ta chọn tay quay $OA$ làm hệ quy chiếu động. Đứng trong hệ quy chiếu này, cặp bánh răng $1$ và $2$ là một cặp bánh răng ăn khớp ngoài, quay quanh các trục $O$ và $A$ với các vận tốc góc tương đối $\overline{\omega}_{1r}$ và $\overline{\omega}_{2r}$. Theo định lí về tổng hợp hai chuyển động quay quanh hai trục song song, ta có :

$$\overline{\omega}_{1r} = \overline{\omega}_1 - \overline{\omega}_o \, ; \quad \overline{\omega}_{2r} = \overline{\omega}_2 - \overline{\omega}_o$$

Tỉ số truyền động giữa hai bánh răng :

$$\frac{\overline{\omega}_{1r}}{\overline{\omega}_{2r}} = \frac{\overline{\omega}_1 - \overline{\omega}_o}{\overline{\omega}_2 - \overline{\omega}_o} = -\frac{r_2}{r_1} = -\frac{z_2}{z_1} \qquad \text{(a)}$$

trong đó : $z_1, z_2$ là số răng của các bánh răng $1$ và $2$.

Công thức (a) gọi là công thức Vilit. Phương pháp xác định vận tốc góc của vật rắn chuyển động phẳng nhờ công thức (a) gọi là phương pháp Vilit.

Từ (a) suy ra :

$$\overline{\omega}_2 = \frac{r_1 + r_2}{r_2}\overline{\omega}_o - \frac{r_1}{r_2}\overline{\omega}_1 \qquad \text{(b)}$$

Vận tốc điểm $M$ được tính theo công thức $\vec{v}_M = \vec{v}_A + \vec{v}_{MA}$. Trong đó $\vec{v}_A$ vuông góc với $OA$, hướng theo chiều của $\overline{\omega}_o$ (H. 4-21) và có trị số $v_A = OA \cdot \omega_o = (r_1 + r_2)\omega_o \, ; \ \vec{v}_{MA}$ vuông góc với $AM$, hướng theo chiều của $\omega_2$. Trị số của nó $v_{MA} = AM \cdot \omega_2 = r_2\omega_2$. Giá trị của $\vec{v}_M$ là :

$$v_M = \sqrt{v_A^2 + v_{MA}^2} = \sqrt{(r_1 + r_2)^2\omega_o^2 + r_2^2\omega_2^2}$$

*Bài toán gia tốc :* Do tính đối xứng của cơ cấu, hệ thức (b) luôn luôn đúng tại mọi vị trí của cơ cấu. Đạo hàm hệ thức đó ta được :

$$\overline{\varepsilon}_2 = \frac{r_1 + r_2}{r_2}\overline{\varepsilon}_o - \frac{r_1}{r_2}\overline{\varepsilon}_1 \qquad \text{(c)}$$

Lấy $A$ làm cực, gia tốc điểm $M$ được xác định theo công thức :

$$\vec{a}_M = \vec{a}_A^t + \vec{a}_A^n + \vec{a}_{MA}^t + \vec{a}_{MA}^n \qquad \text{(d)}$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_22.svg" alt="Hình 4-22: Các thành phần gia tốc của điểm M trên cơ cấu vi sai" style="max-height: 270px;" />

<div class="figure-caption">

Hình 4-22

</div>

</div>

trong đó :

$$\begin{aligned}
a_A^t &= OA \cdot \varepsilon_o = (r_1 + r_2)\varepsilon_o \, ; & a_A^n &= OA\omega_o^2 = (r_1 + r_2)\omega_o^2 \\
a_{MA}^t &= AM \cdot \varepsilon_2 = r_2\varepsilon_2 \, ; & a_{MA}^n &= AM \cdot \omega_2^2 = r_2\omega_2^2
\end{aligned}$$

Phương và chiều của bốn véctơ này được vẽ trên hình 4-22. Chiếu phương trình véctơ (d) lên các trục của hệ tọa độ vuông góc :

$$a_{Mx} = -a_A^n - a_{MA}^t \, ; \quad a_{My} = a_A^t - a_{MA}^n$$

Cuối cùng ta tính được :

$$a_M = \sqrt{a_{Mx}^2 + a_{My}^2}$$

---

### Thí dụ 4-7

**Thí dụ 4-7.** Cho cơ cấu tay quay - con trượt $OAB$ (H.4-23). Cho biết chiều dài $OA$ là $r$, chiều dài $AB$ là $l$. Giả sử chiều dài $AB$ khá lớn so với chiều dài $OA$ sao cho tỉ số $\lambda = \frac{r}{l}$ khá nhỏ. Thiết lập phương trình chuyển động, biểu thức xác định vận tốc, gia tốc của con trượt $B$ và trung điểm $M$ của thanh $AB$.

**Bài giải**

*Phân tích :* Chọn hệ khảo sát là cơ cấu tay quay - con trượt (H. 4-23). Hệ gồm ba vật rắn. Tay quay $OA$ chuyển động quay quanh $O$.

Thanh truyền $AB$ chuyển động phẳng. Con trượt $B$ chuyển động tịnh tiến.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_23.svg" alt="Hình 4-23: Cơ cấu tay quay - con trượt chính tâm OAB" style="max-height: 260px;" />

<div class="figure-caption">

Hình 4-23

</div>

</div>

*Khảo sát chuyển động của con trượt $B$.* Vị trí của điểm $B$ được xác định bởi thông số định vị $x_B$. Theo hình 4-23 :

$$x_B = \overline{OH} + \overline{HB} = r\cos\varphi + l\cos\psi$$

Mặt khác từ hình vẽ ta có :

$$AH = r\sin\varphi = l\sin\psi.$$

Do đó :

$$\sin\psi = \lambda\sin\varphi \, ; \quad \cos\psi = \sqrt{1 - \lambda^2\sin^2\varphi}$$

Do giả thiết $\lambda$ khá bé, nên ta có :

$$\begin{aligned}
\sqrt{1 - \lambda^2\sin^2\varphi} &\approx 1 - \frac{1}{2}\lambda^2\sin^2\varphi = 1 - \frac{\lambda^2}{2}\left(\frac{1 - \cos 2\varphi}{2}\right) \\
&= \left(1 - \frac{\lambda^2}{4}\right) + \frac{\lambda^2}{4}\cos 2\varphi
\end{aligned}$$

Vậy hoành độ điểm $B$ :

$$\begin{aligned}
x_B &\approx r\cos\varphi + l\left[\left(1 - \frac{\lambda^2}{4}\right) + \frac{\lambda^2}{4}\cos 2\varphi\right] \\
&= l\left(1 - \frac{\lambda^2}{4}\right) + r\cos\varphi + \frac{r^2}{4l}\cos 2\varphi
\end{aligned} \qquad \text{(a)}$$

Từ biểu thức trên, ta dễ dàng xác định biểu thức vận tốc và gia tốc con trượt $B$ :

$$\dot{x}_B = -r\dot{\varphi}\left(\sin\varphi + \frac{r}{2l}\sin 2\varphi\right)$$

$$\ddot{x}_B = -r\ddot{\varphi}\left(\sin\varphi + \frac{r}{2l}\sin 2\varphi\right) - r\dot{\varphi}^2\left(\cos\varphi + \frac{r}{l}\cos 2\varphi\right)$$

*Khảo sát chuyển động của trung điểm $M$ của $AB$.* Từ hình 4 - 23 ta có :

$$\begin{aligned}
x_M &= OH + HK = OH + \frac{1}{2}HB = r\cos\varphi + \frac{l}{2}\cos\psi \\
&\approx r\cos\varphi + \frac{r^2}{8l}\cos 2\varphi + \frac{l}{2}\left(1 - \frac{\lambda^2}{2}\right)
\end{aligned}$$

$$y_M = KM = \frac{1}{2}AH = \frac{1}{2}r\sin\varphi$$

Vậy phương trình chuyển động của $M$ là :

$$\left.\begin{aligned}
x_M &= r\cos\varphi + \frac{r^2}{8l}\cos 2\varphi + \frac{1}{2}\left(1 - \frac{\lambda^2}{2}\right) \\
y_M &= \frac{1}{2}r\sin\varphi
\end{aligned}\right\} \qquad \text{(b)}$$

[Đính chính bản in: Từ biểu thức khai triển $\cos\psi \approx \left(1 - \frac{\lambda^2}{4}\right) + \frac{\lambda^2}{4}\cos 2\varphi$, số hạng hằng số trong $x_M$ chính xác là $\frac{l}{2}\left(1 - \frac{\lambda^2}{4}\right)$ (bản in ghi thành $\frac{l}{2}\left(1 - \frac{\lambda^2}{2}\right)$ ở dòng biến đổi và $\frac{1}{2}\left(1 - \frac{\lambda^2}{2}\right)$ ở hệ `(b)`).]

Từ (b) ta có biểu thức xác định vận tốc và gia tốc của điểm $M$ :

$$\dot{x}_M = -r\dot{\varphi}\left(\sin\varphi + \frac{r}{4l}\sin 2\varphi\right)$$

$$\dot{y}_M = \frac{r}{2}\dot{\varphi}\cos\varphi$$

$$\ddot{x}_M = -r\ddot{\varphi}\left(\sin\varphi + \frac{r}{4l}\sin 2\varphi\right) - r\dot{\varphi}^2\left(\cos\varphi + \frac{r}{2l}\cos 2\varphi\right)$$

$$\ddot{y}_M = \frac{r}{2}\ddot{\varphi}\cos\varphi - \frac{r}{2}\dot{\varphi}^2\sin\varphi$$

---

### Thí dụ 4-8

**Thí dụ 4 - 8.** Cho cơ cấu bốn khâu với các kí hiệu và kích thước như hình 4 - 24. Cho biết chiều dài các khâu $l_1, l_2, l_3, l_4$ tọa độ của điểm $K(\xi_k, \eta_k)$ trong hệ tọa độ gắn liền với khâu 3, góc quay của khâu dẫn $\varphi_2(t)$. Hãy xác định :
- Các góc $\varphi_3, \varphi_4$ và các vận tốc góc, gia tốc các khâu 3 và 4,
- Tọa độ của điểm $K$, vận tốc và gia tốc của điểm đó.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_24.svg" alt="Hình 4-24: Khảo sát giải tích cơ cấu bốn khâu phẳng" style="max-height: 280px;" />

<div class="figure-caption">

Hình 4-24

</div>

</div>

**Bài giải**

*Phân tích.* Ta khảo sát động học cơ cấu bốn khâu hình 4 - 24. Hệ gồm ba vật rắn động : khâu 2 và khâu 4 chuyển động quay quanh trục cố định, khâu 3 chuyển động phẳng.

*Xác định vận tốc góc, gia tốc góc các khâu 3 và 4 :* Trước hết, ta tìm các điều kiện ràng buộc của cơ cấu. Từ hình 4-24, ta có :

$$\vec{l}_2 + \vec{l}_3 - \vec{l}_1 - \vec{l}_4 = \vec{0} \qquad \text{(a)}$$

Chiếu phương trình véctơ (a) lên các trục $x$ và $y$ :

$$\begin{aligned}
l_3\cos\varphi_3 - l_4\cos\varphi_4 &= -l_2\cos\varphi_2 + l_1 \\
l_3\sin\varphi_3 - l_4\sin\varphi_4 &= -l_2\sin\varphi_2
\end{aligned} \qquad \text{(b)}$$

Đạo hàm các phương trình (b) theo $\varphi_2$ ta có :

$$\begin{aligned}
-l_3\sin\varphi_3 \cdot \varphi_3' + l_4\sin\varphi_4 \cdot \varphi_4' &= l_2\sin\varphi_2 \\
l_3\cos\varphi_3 \cdot \varphi_3' - l_4\cos\varphi_4 \cdot \varphi_4' &= -l_2\cos\varphi_2
\end{aligned} \qquad \text{(c)}$$

Hệ hai phương trình đại số tuyến tính đối với $\varphi_3', \varphi_4'$ này có nghiệm :

$$\varphi_3' = \frac{l_2\sin(\varphi_2 - \varphi_4)}{l_3\sin(\varphi_4 - \varphi_3)} \, ; \quad \varphi_4' = \frac{l_2\sin(\varphi_2 - \varphi_3)}{l_4\sin(\varphi_4 - \varphi_3)} \qquad \text{(d)}$$

Từ đó ta tính được :

$$\dot{\varphi}_3 = \varphi_3' \cdot \dot{\varphi}_2 \, ; \quad \dot{\varphi}_4 = \varphi_4' \cdot \dot{\varphi}_2 \qquad \text{(đ)}$$

Để tìm các đạo hàm bậc hai $\ddot{\varphi}_3, \ddot{\varphi}_4$, ta đạo hàm các phương trình (c) theo $\varphi_2$ :

$$\begin{aligned}
&-l_3\sin\varphi_3 \cdot \varphi_3'' + l_4\sin\varphi_4 \cdot \varphi_4'' = \\
&\quad = l_2\cos\varphi_2 + l_3\cos\varphi_3 \cdot {\varphi_3'}^2 - l_4\cos\varphi_4 \cdot {\varphi_4'}^2 \\
&l_3\cos\varphi_3 \cdot \varphi_3'' - l_4\cos\varphi_4 \cdot \varphi_4'' = \\
&\quad = l_2\sin\varphi_2 + l_3\sin\varphi_3 \cdot {\varphi_3'}^2 - l_4\sin\varphi_4 \cdot {\varphi_4'}^2 \qquad \text{(e)}
\end{aligned}$$

Hệ (e) là hệ hai phương trình bậc nhất của hai ẩn $\varphi_3''$ và $\varphi_4''$. Ta dễ dàng tính được $\varphi_3'', \varphi_4''$.

Sau đó tính $\ddot{\varphi}_3$ và $\ddot{\varphi}_4$ theo công thức :

$$\ddot{\varphi}_3 = \varphi_3' \cdot \ddot{\varphi}_2 + \varphi_3''\dot{\varphi}_2^2 \, ; \quad \ddot{\varphi}_4 = \varphi_4' \cdot \ddot{\varphi}_2 + \varphi_4'' \cdot \dot{\varphi}_2^2 \qquad \text{(g)}$$

Các góc $\varphi_3, \varphi_4$ có thể xác định gần đúng bằng công thức :

$$\varphi_i[(\varphi_2)_o + \Delta\varphi_2] = (\varphi_i)_o + (\varphi_i')_o\Delta\varphi_2 + \frac{1}{2}(\varphi_i'')_o\Delta\varphi_2^2 + \dots \quad (i = 3, 4) \tag*{$\text{(h)}$}$$

Nếu cần giá trị chính xác hơn, ta có thể lấy các giá trị của các hàm $\varphi_3, \varphi_4$ xác định bởi công thức (h) làm các giá trị ban đầu để giải các phương trình (b) bằng phương pháp lặp Niutơn.

*Xác định tọa độ, vận tốc, gia tốc điểm $K$ :* Từ hình 4-24 ta dễ dàng tìm được biểu thức:

$$\begin{aligned}
x_K &= l_2\cos\varphi_2 + \xi_K\cos\varphi_3 - \eta_K\sin\varphi_3 \\
y_K &= l_2\sin\varphi_2 + \xi_K\sin\varphi_3 + \eta_K\cos\varphi_3
\end{aligned} \qquad \text{(i)}$$

Từ đó sử dụng phép tính đạo hàm, ta có các biểu thức xác định vận tốc, gia tốc điểm $K$ :

$$\begin{aligned}
\dot{x}_K &= -l_2\sin\varphi_2 \cdot \dot{\varphi}_2 - (\xi_K\sin\varphi_3 + \eta_K\cos\varphi_3)\dot{\varphi}_3 \\
\dot{y}_K &= l_2\cos\varphi_2 \cdot \dot{\varphi}_2 + (\xi_K\cos\varphi_3 - \eta_K\sin\varphi_3)\dot{\varphi}_3
\end{aligned} \qquad \text{(k)}$$

$$\begin{aligned}
\ddot{x}_K &= -l_2\sin\varphi_2 \cdot \ddot{\varphi}_2 - l_2\cos\varphi_2 \cdot \dot{\varphi}_2^2 - \\
&\quad - (\xi_K\sin\varphi_3 + \eta_K\cos\varphi_3) \cdot \ddot{\varphi}_3 - (\xi_K\cos\varphi_3 - \eta_K\sin\varphi_3)\dot{\varphi}_3^2 \ \text{(l)} \\
\ddot{y}_K &= l_2\cos\varphi_2 \cdot \ddot{\varphi}_2 - l_2\sin\varphi_2 \cdot \dot{\varphi}_2^2 + \\
&\quad + (\xi_K\cos\varphi_3 - \eta_K\sin\varphi_3) \cdot \ddot{\varphi}_3 - (\xi_K\sin\varphi_3 + \eta_K\cos\varphi_3)\dot{\varphi}_3^2
\end{aligned}$$
