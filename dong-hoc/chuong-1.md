# Chương 1: Động Học Điểm

Trong chương động học điểm, chúng ta khảo sát chuyển động của một điểm đối với một hệ quy chiếu đã chọn. Để mô tả sáng sủa và gọn gàng các đặc trưng của chuyển động, chúng ta sử dụng phương pháp vectơ. Để tính toán thuận tiện, chúng ta sử dụng các phương pháp tọa độ như phương pháp tọa độ Đề các, phương pháp tọa độ tự nhiên, phương pháp tọa độ cực v.v...

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_1.svg" alt="Hình 1-1" style="max-height: 270px;" />

<div class="figure-caption">

Hình 1-1

</div>

</div>

---

## 1.1. Khảo sát chuyển động của điểm bằng phương pháp vectơ {#_1-1-phuong-phap-vecto}

### 1.1.1. Phương trình chuyển động

Xét điểm $M$ chuyển động trong hệ quy chiếu $Oxyz$ (H.1–1).

Vị trí của điểm $M$ được xác định bởi vectơ $\vec{r} = \overrightarrow{OM}$. Điểm $M$ chuyển động, do đó $\vec{r}$ thay đổi theo thời gian :

$$\vec{r} = \vec{r}(t) \tag{1-1}$$

Phương trình $(1-1)$ được gọi là phương trình chuyển động của điểm $M$ dạng vectơ.

Chú ý rằng điểm $M$ chuyển động liên tục, ở mỗi thời điểm, điểm $M$ chiếm một vị trí xác định và có hướng chuyển động xác định. Do đó $\vec{r}(t)$ là một hàm liên tục, đơn trị.

Tập hợp các vị trí của điểm trong không gian quy chiếu được gọi là quỹ đạo của nó trong hệ quy chiếu ấy. Phương trình $(1-1)$ là phương trình tham số của quỹ đạo. Nếu quỹ đạo là đường thẳng, thì chuyển động được gọi là chuyển động thẳng. Nếu quỹ đạo là đường cong thì chuyển động được gọi là chuyển động cong. Và khi đó người ta thường lấy tên đường cong quỹ đạo để gọi tên chuyển động.

### 1.1.2. Vận tốc chuyển động

Một trong những đặc trưng cơ bản của chuyển động của điểm là khái niệm vận tốc đối với một hệ quy chiếu đã chọn. Chúng ta sẽ xây dựng một cách chặt chẽ khái niệm này. Giả sử ở thời điểm $t$, điểm ở vị trí $M$ xác định bởi vectơ $\vec{r} = \overrightarrow{OM}$. Ở thời điểm khác $t_1 = t + \Delta t$, điểm ở vị trí $M_1$ xác định bởi vectơ $\vec{r}_1 = \overrightarrow{OM}_1$ (H. 1–2). Như thế sau khoảng thời gian $\Delta t$ điểm dịch chuyển được một đoạn :

$$\overrightarrow{MM}_1 = \vec{r}_1 - \vec{r} = \Delta\vec{r}.$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_2.svg" alt="Hình 1-2" style="max-height: 250px;" />

<div class="figure-caption">

Hình 1-2

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_3.svg" alt="Hình 1-3" style="max-height: 270px;" />

<div class="figure-caption">

Hình 1-3

</div>

</div>

Đại lượng $\vec{v}_{tb} = \Delta\vec{r} / \Delta t$ được gọi là vận tốc trung bình của điểm trong khoảng thời gian $\Delta t$, kể từ thời điểm $t$. Vectơ $\vec{v}_{tb}$ hướng dọc theo cát tuyến $MM_1$.

Vận tốc của điểm ở thời điểm $t$ được xác định như sau :

$$\vec{v} = \lim_{\Delta t \to 0} \vec{v}_{tb} = \lim_{\Delta t \to 0} \frac{\Delta\vec{r}}{\Delta t} = \frac{d\vec{r}}{dt} = \dot{\vec{r}} \tag{1-2}$$

Như thế, vận tốc của điểm là đạo hàm bậc nhất theo thời gian của véc tơ định vị của điểm ấy. Vectơ vận tốc $\vec{v}$ hướng theo tiếp tuyến với quỹ đạo ở điểm $M$ về phía chuyển động. Đơn vị của vận tốc là mét/giây, kí hiệu là $\text{m/s}$.

### 1.1.3. Gia tốc chuyển động

Giả sử ở thời điểm $t$, điểm ở vị trí $M$, có vận tốc là $\vec{v}$. Sang thời điểm $t_1 = t + \Delta t$, điểm ở vị trí $M_1$ có vận tốc là $\vec{v}_1$. Như thế, sau khoảng thời gian $\Delta t$, vận tốc của điểm biến thiên một đại lượng $\Delta\vec{v} = \vec{v}_1 - \vec{v}$

Đại lượng $\vec{a}_{tb} = \Delta\vec{v} / \Delta t$ được gọi là gia tốc trung bình của điểm trong khoảng thời gian $\Delta t$, kể từ thời điểm $t$. Vectơ $\vec{a}_{tb}$ hướng dọc theo vectơ $\Delta\vec{v}$ (H. 1–3).

Gia tốc của điểm ở thời điểm $t$ được xác định như sau :

$$\vec{a} = \lim_{\Delta t \to 0} \vec{a}_{tb} = \lim_{\Delta t \to 0} \frac{\Delta\vec{v}}{\Delta t} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2} = \ddot{\vec{r}} \tag{1-3}$$

Như thế, gia tốc của điểm là đạo hàm bậc nhất theo thời gian của vectơ vận tốc và bằng đạo hàm bậc hai theo thời gian của vectơ định vị của điểm ấy. Đơn vị của gia tốc là $\text{mét/giây}^2$, kí hiệu là $\text{m/s}^2$.

### 1.1.4. Nhận xét về một vài tính chất của chuyển động

Trước hết ta nêu ra một tiêu chuẩn nhận xét về chuyển động thẳng và chuyển động cong của điểm. Khi điểm chuyển động thẳng, vectơ vận tốc $\vec{v}$ luôn không đổi về phương do đó vectơ $\vec{v}$ và vectơ $\vec{a}$ luôn cùng phương. Vì vậy $\vec{v} \wedge \vec{a} \equiv \vec{0}$. Ngược lại, khi điểm chuyển động cong, vectơ $\vec{v}$ nói chung thay đổi cả về hướng cũng như trị số. Các vectơ $\vec{v}$ và $\vec{a}$ nói chung không cùng phương. Vì vậy ta có tiêu chuẩn nhận xét :

$$\vec{v} \wedge \vec{a} \begin{cases} \equiv \vec{0} : \text{chuyển động thẳng} \\ \neq \vec{0} : \text{chuyển động cong.} \end{cases}$$

Bây giờ ta đưa ra tiêu chuẩn nhận xét về tính đều và tính biến đổi của chuyển động. Chuyển động là đều khi giá trị của vận tốc $v$ không đổi. Chuyển động nhanh dần hay chậm dần tùy theo giá trị của vận tốc tăng lên hay giảm đi theo thời gian.

Chú ý rằng sự thay đổi của $v^2$ đặc trưng cho sự thay đổi của giá trị $v$ của vận tốc. Ta có :

$$\frac{d(v^2)}{dt} = \frac{d(\vec{v}^2)}{dt} = 2\vec{v} \cdot \frac{dv}{dt} = 2\vec{v}\cdot\vec{a}$$

Từ đó rút ra tiêu chuẩn nhận xét :

$$\vec{v}\cdot\vec{a} \begin{cases} \equiv \vec{0} : \text{chuyển động đều} \\ \neq \vec{0} : \text{chuyển động biến đổi.} \end{cases}$$

Trong trường hợp thứ hai, nếu $\vec{v}\cdot\vec{a} > \vec{0}$ thì chuyển động là nhanh dần; và $\vec{v}\cdot\vec{a} < \vec{0}$, chuyển động là chậm dần.

[Đính chính bản in: Trong biểu thức đạo hàm của $v^2$, thừa số thứ hai là $\frac{d\vec{v}}{dt}$; tích vô hướng $\vec{v}\cdot\vec{a}$ là đại lượng vô hướng nên so sánh với số $0$ (thay vì vectơ $\vec{0}$).]

---

## 1.2. Khảo sát chuyển động của điểm bằng phương pháp tọa độ Đề các {#_1-2-phuong-phap-toa-đo-đe-cac-descartes}

### 1.2.1. Phương trình chuyển động

Vị trí của điểm $M$ được xác định bằng ba tọa độ $x, y, z$ của điểm ở trong hệ tọa độ Đề các, vuông góc $Oxy$ (H. 1–4).

[Đính chính bản in: Hệ tọa độ không gian trên Hình 1-4 là $Oxyz$ (bản in thiếu chữ $z$).]

$$\vec{r} = x\vec{i} + y\vec{j} + z\vec{k}$$

Khi điểm $M$ chuyển động, $x, y, z$ biến đổi liên tục theo thời gian.

Vậy các phương trình chuyển động của điểm có dạng

$$x = x(t), \quad y = y(t), \quad z = z(t) \tag{1-4}$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_4.svg" alt="Hình 1-4" style="max-height: 290px;" />

<div class="figure-caption">

Hình 1-4

</div>

</div>

### 1.2.2. Vận tốc chuyển động

Theo công thức $(1-2)$ ta có :

$$v = \frac{d\vec{r}}{dt} = \frac{d}{dt}(x\vec{i} + y\vec{j} + z\vec{k}) = \frac{dx}{dt}\vec{i} + \frac{dy}{dt}\vec{j} + \frac{dz}{dt}\vec{k}$$

Chiếu đẳng thức trên lên ba trục tọa độ, ta nhận được

$$v_x = \frac{dx}{dt} = \dot{x} \, ; \quad v_y = \frac{dy}{dt} = \dot{y} \, ; \quad v_z = \frac{dz}{dt} = \dot{z} \tag{1-5}$$

Dựa vào các biểu thức $(1-5)$, ta có thể xác định dễ dàng độ lớn và các cosin chỉ phương của vận tốc $\vec{v}$ :

$$v = |\vec{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2} = \sqrt{\dot{x}^2 + \dot{y}^2 + \dot{z}^2}$$

$$\cos(Ox, \vec{v}) = \frac{\dot{v}_x}{v} \, ; \quad \cos(Oy, \vec{v}) = \frac{v_y}{v} \, ; \quad \cos(Oz, \vec{v}) = \frac{v_z}{v}$$

[Đính chính bản in: Ở biểu thức đầu mục 1.2.2 vế trái là vectơ $\vec{v} = \frac{d\vec{r}}{dt}$; ở công thức cosin chỉ phương thứ nhất tử số là $v_x$ (tức $\cos(Ox, \vec{v}) = \frac{v_x}{v}$).]

### 1.2.3. Gia tốc chuyển động

Tương tự như xác định các biểu thức thành phần vận tốc, từ công thức $(1-3)$ ta có :

$$\begin{aligned}
\vec{a} &= \frac{d\vec{v}}{dt} = \frac{d}{dt}(v_x\vec{i} + v_y\vec{j} + v_z\vec{k}) = \frac{d}{dt}(\dot{x}\vec{i} + \dot{y}\vec{j} + \dot{z}\vec{k}) \\
&= \frac{d\vec{v}_x}{dt}\vec{i} + \frac{d\vec{v}_y}{dt}\vec{j} + \frac{d\vec{v}_z}{dt}\vec{k} = (\ddot{x}\vec{i} + \ddot{y}\vec{j} + \ddot{z}\vec{k})
\end{aligned}$$

[Đính chính bản in: Các hình chiếu $v_x, v_y, v_z$ là đại lượng vô hướng nên các đạo hàm ở dòng thứ hai là $\frac{dv_x}{dt}, \frac{dv_y}{dt}, \frac{dv_z}{dt}$.]

Từ đó nhận được hình chiếu của gia tốc $\vec{a}$ trên các trục tọa độ :

$$a_x = \frac{dv_x}{dt} = \ddot{x} \, ; \quad a_y = \frac{dv_y}{dt} = \ddot{y} \, ; \quad a_z = \frac{dv_z}{dt} = \ddot{z} \tag{1-6}$$

Từ $(1-6)$ ta cũng có thể xác định dễ dàng độ lớn và các cosin chỉ phương của $\vec{a}$ :

$$a = |\vec{a}| = \sqrt{a_x^2 + a_y^2 + a_z^2} = \sqrt{\ddot{x}^2 + \ddot{y}^2 + \ddot{z}^2}$$

$$\cos(Ox, \vec{a}) = \frac{a_x}{a} \, ; \quad \cos(Oy, \vec{a}) = \frac{a_y}{a} \, ; \quad \cos(Oz, \vec{a}) = \frac{a_z}{a}$$

**Thí dụ 1–1.** Chuyển động của điểm $M$ ở trong mặt phẳng $Oxy$ được xác định bởi phương trình :

$$x = b\sin\omega t \, ; \quad y = d\cos\omega t \tag{1-7}$$

trong đó: $b, d, \omega$, là các hằng số dương. Hãy xác định phương trình quỹ đạo, độ lớn của vận tốc, gia tốc của điểm $M$ ở thời điểm $t_1 = \pi / 2\omega$. Sau đó xác định phương trình đường đầu mút của véctơ vận tốc.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_5.svg" alt="Hình 1-5" style="max-height: 250px;" />

<div class="figure-caption">

Hình 1-5

</div>

</div>

**Bài giải**

Muốn tìm phương trình quỹ đạo, ta chỉ việc tìm cách khử tham số thời gian $t$ trong các phương trình chuyển động. Trong thí dụ này từ các phương trình chuyển động $(1-7)$ ta suy ra :

$$\sin\omega t = \frac{x}{b} \, ; \quad \cos\omega t = \frac{y}{d}$$

Do tính chất $\sin^2\omega t + \cos^2\omega t = 1$, nên ta có phương trình quỹ đạo :

$$\frac{x^2}{b^2} + \frac{y^2}{d^2} = 1$$

Vậy quỹ đạo là một đường elip với các bán trục $b$ và $d$ (H. 1–5).

Từ phương trình $(1-7)$ ta tính các đạo hàm theo $t$ :

$$v_x = \dot{x} = b\omega\cos\omega t, \quad v_y = \dot{y} = -d\omega\sin\omega t$$

$$a_x = \ddot{x} = -b\omega^2\sin\omega t, \quad a_y = \ddot{y} = -d\omega^2\cos\omega t$$

Ở thời điểm $t_1 = \pi / 2\omega$, điểm $M$ ở vị trí $M_1$ ($x_1 = b \, ; \; y_1 = 0$) và các hình chiếu vận tốc và gia tốc của nó có dạng :

$$v_{1x} = 0 \, ; \quad v_{1y} = -d\omega$$

$$a_{1x} = -b\omega^2 \, ; \quad a_{1y} = 0$$

Để vẽ đường đầu mút vectơ vận tốc (cũng gọi là đường đầu tốc) ta chọn trên mặt phẳng vận tốc hệ trục vuông góc $O_1 x_1 y_1$ tương ứng như sau (H. 1–5):

$$x_1 = v_x = \omega b\cos\omega t \, ; \quad y_1 = v_y = -d\omega\sin\omega t$$

Khử $t$ từ các phương trình tham số của đường đầu mút véctơ vận tốc, ta nhận được phương trình :

$$\frac{x_1^2}{b^2\omega^2} + \frac{y_1^2}{d^2\omega^2} = 1 \tag{1-8}$$

đây là phương trình đường đầu mút vectơ vận tốc dạng tọa độ. Trên hình 1–5 các điểm $M'_o, M'$ và $M'_1$ trên đường đầu mút vectơ vận tốc tương ứng với các điểm $M_o, M, M_1$ ở trên quỹ đạo.

---

## 1.3. Khảo sát chuyển động của điểm bằng phương pháp tọa độ tự nhiên {#_1-3-phuong-phap-toa-đo-tu-nhien}

### 1.3.1. Phương trình chuyển động

Phương pháp tọa độ tự nhiên được áp dụng khi biết trước quỹ đạo chuyển động của điểm. Giả sử cho biết quỹ đạo $(C)$ của điểm ở trong một hệ quy chiếu không gian. Chọn một điểm tùy ý $O$ ở trên quỹ đạo làm điểm gốc và định chiều dương trên quỹ đạo (H. 1–6). Vị trí của điểm $M$ được xác định bằng độ dài đại số cung $\overset{\frown}{OM} = \overline{s}$.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_6.svg" alt="Hình 1-6" style="max-height: 150px;" />

<div class="figure-caption">

Hình 1-6

</div>

</div>

Điểm $M$ chuyển động, do đó $\overline{s}$ thay đổi theo thời gian. Phương trình :

$$s = \overline{s}(t) \tag{1-9}$$

biểu diễn quy luật chuyển động của điểm $M$ dọc theo quỹ đạo gọi là phương trình chuyển động của điểm dạng tọa độ tự nhiên.

Chú ý rằng $s$ là một đại lượng đại số. Tuy nhiên nếu chiều chuyển động không đổi và nếu chọn chiều đó làm chiều dương để tính cung, thì với cách chọn gốc $O$ thích hợp $\overline{s}$ sẽ luôn luôn dương.

### 1.3.2. Một vài tính chất hình học của quỹ đạo

#### 1. Hệ tọa độ tự nhiên

Trước hết chúng ta hãy đưa ra cách xác định mặt phẳng mật tiếp của quỹ đạo tại điểm $M$ của nó. Trên quỹ đạo ngoài điểm $M$ ta lấy thêm điểm $M_1$ (hình 1–3). Kẻ các tiếp tuyến $MT$ và $M_1 T_1$. Qua $M$ kẻ đường $MT'_1 \parallel M_1 T_1$. Dựng mặt phẳng $P$ chứa các đường $MT$ và $MT'_1$. Khi cho $M_1$ tiến dần đến $M$, mặt phẳng $P$ sẽ tiến dần đến một mặt phẳng giới hạn $\pi$, gọi là mặt phẳng mật tiếp của quỹ đạo tại điểm $M$. Như thế, nếu quỹ đạo là đường cong phẳng thì mặt phẳng chứa đường cong quỹ đạo là mặt phẳng mật tiếp tại mọi điểm của quỹ đạo. Khi quỹ đạo là đường cong không gian, ta lấy một cung rất bé $MM' = d\overline{s}$. Vì cung $d\overline{s}$ rất bé nên có thể thay thế nó bởi một cung phẳng cùng điểm đầu, điểm cuối. Mặt phẳng chứa cung phẳng này sẽ được xem một cách gần đúng là mặt phẳng mật tiếp với quỹ đạo tại điểm $M$ (H.1–7).

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_7.svg" alt="Hình 1-7" style="max-height: 310px;" />

<div class="figure-caption">

Hình 1-7

</div>

</div>

Dựng trong mặt phẳng mật tiếp với quỹ đạo tại điểm $M$ trục $Mt$ hướng theo tiếp tuyến của quỹ đạo về phía dương. Vectơ đơn vị trên trục đó là $\vec{t}_o$. Dựng trục $Mn$ hướng theo pháp tuyến của quỹ đạo về phía lõm. Pháp tuyến $Mn$ nằm trong mặt phẳng mật tiếp gọi là pháp tuyến chính. Vectơ đơn vị trên trục này là $\vec{n}_o$. Dựng pháp tuyến $Mb$ của quỹ đạo tại $M$ và vuông góc với mặt phẳng mật tiếp. Pháp tuyến $Mb$ gọi là trùng pháp tuyến. Vectơ đơn vị trên trục này là $\vec{b}_o$. Thường người ta chọn chiều của $\vec{b}_o$ sao cho $Mtnb$ tạo thành một hệ trục thuận (H.1–7).

Như thế, tại mỗi điểm của đường cong ta luôn dựng được một hệ tọa độ vuông góc có ba trục hướng theo tiếp tuyến, pháp tuyến chính, trùng pháp tuyến, gọi là hệ tọa độ tự nhiên. Hệ tọa độ tự nhiên thay đổi theo vị trí của điểm $M$ trên quỹ đạo và phản ảnh được một phần tính chất hình học của quỹ đạo.

#### 2. Độ cong của quỹ đạo

Ta nhận thấy rằng quỹ đạo càng cong thì tiếp tuyến của nó đổi hướng càng nhanh dọc theo quỹ đạo ấy. Vì vậy người ta đưa ra khái niệm độ cong của quỹ đạo (H.1–8).

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_8.svg" alt="Hình 1-8" style="max-height: 270px;" />

<div class="figure-caption">

Hình 1-8

</div>

</div>

Đại lượng :

$$k_{tb} = \left|\frac{\Delta\varphi}{\Delta s}\right|$$

được gọi là độ cong trung bình của quỹ đạo ứng với cung $\overset{\frown}{MM}_1$.

Đại lượng :

$$k = \lim_{\Delta s \to 0} \left|\frac{\Delta\varphi}{\Delta s}\right| = \left|\frac{d\varphi}{ds}\right|$$

được gọi là độ cong của quỹ đạo tại điểm $M$. Đại lượng $\rho = \dfrac{1}{k}$ là bán kính cong của quỹ đạo tại điểm $M$.

Để minh họa, xét quỹ đạo là đường tròn bán kính $R$. Khi đó $\Delta s = R\Delta\varphi$.

Vậy ta có :

$$k = \frac{\Delta\varphi}{\Delta s} = \frac{1}{R} \, , \quad \rho = R$$

Như thế bán kính cong của đường tròn tại các điểm của chúng chính bằng bán kính của đường tròn đó.

### 1.3.3. Vận tốc chuyển động

Để xác định vận tốc $\vec{v}$, ta sẽ tìm hình chiếu của nó trên các trục của hệ tọa độ tự nhiên. Vì vectơ $\vec{v}$ hướng theo tiếp tuyến quỹ đạo tại $M$, nên $\vec{v} = v_t\vec{t}_o$. Mặt khác theo định nghĩa :

$$\vec{v} = \frac{d\vec{r}}{dt} = \frac{d\vec{r}}{ds} \cdot \frac{d\overline{s}}{dt} = \dot{\overline{s}}\frac{d\vec{r}}{ds}$$

Trong phần hình học vi phân, người ta đã chứng minh : $\dfrac{d\vec{r}}{ds} = \vec{t}_o$.

Vì vậy ta rút ra :

$$v^t = \dot{\overline{s}} \, ; \quad v^n = v^b = 0 \tag{1-10}$$

Chú ý rằng $|v^t| = |\vec{v}|$

### 1.3.4. Gia tốc chuyển động

Tương tự như phần vận tốc, ta sẽ tìm hình chiếu của vectơ gia tốc trên các trục của hệ tọa độ tự nhiên :

$$\vec{a} = a^t\vec{t}_o + a^n\vec{n}_o + a^b\vec{b}_o$$

Mặt khác theo định nghĩa :

$$\vec{a} = \frac{d\vec{v}}{dt} = \frac{d}{dt}(v_t\vec{t}_o) = \dot{v}_t\vec{t}_o + v_t\vec{t}_o = \dot{v}_t\vec{t} + v_t\frac{d\vec{t}_o}{d\overline{s}} \cdot \frac{d\overline{s}}{dt}$$

[Đính chính bản in: Ở biểu thức trên, sách in thiếu dấu chấm đạo hàm trên $\vec{t}_o$ ở số hạng $v_t\dot{\vec{t}}_o$ và thiếu chỉ số dưới $o$ ở $\dot{v}_t\vec{t}_o$.]

Trong phần hình học vi phân, người ta đã chứng minh :

$$\frac{d\vec{t}_o}{ds} = \frac{\vec{n}_o}{\rho} .$$

Vì vậy ta có :

$$\vec{a} = \frac{dv_t}{dt}\vec{t}_o + \frac{v_t^2}{\rho}\vec{n}_o = \vec{a}^t + \vec{a}^n$$

Cuối cùng ta rút ra :

$$a^t = \frac{dv_t}{dt} \, ; \quad a^n = \frac{v^2}{\rho} \, ; \quad a^b = 0 \tag{1-11}$$

Từ $(1-11)$ ta thấy gia tốc pháp tuyến $\vec{a}^n$ luôn luôn hướng về tâm cong của quỹ đạo, còn gia tốc tiếp tuyến $\vec{a}^t$ thì có thể hướng cùng chiều hoặc ngược chiều với vận tốc $\vec{v}$.

Từ các biểu thức $(1-11)$ ta đưa ra một vài nhận xét về ý nghĩa của các thành phần gia tốc.

Từ biểu thức $a^n = v^2 / \rho$ ta thấy : khi điểm chuyển động nói chung $v \neq 0$, do đó $a^n = 0$ khi $\rho = \infty$. Vậy chỉ trong chuyển động thẳng thì $a^n$ mới luôn luôn triệt tiêu. Trong chuyển động cong, nói chung $a \neq 0$. Như thế gia tốc pháp tuyến phản ánh tính cong của quỹ đạo, do đó đặc trưng cho sự thay đổi về phương của vectơ vận tốc. Chú ý rằng giá trị của $a^n$ tỉ lệ với bình phương của vận tốc nên tăng rất nhanh khi giá trị vận tốc tăng.

[Đính chính bản in: Ở câu "Trong chuyển động cong, nói chung $a \neq 0$", kí hiệu đúng là $a^n \neq 0$.]

Từ biểu thức $a^t = dv_t / dt$ ta rút ra : gia tốc tiếp đặc trưng cho sự biến đổi của vận tốc về mặt trị số. Nó phản ánh tính đều ($a^t \equiv 0$) hay tính biến đổi ($a^t \neq 0$) của chuyển động.

### 1.3.5. Chuyển động đều và chuyển động biến đổi đều

**1. Chuyển động đều :** Chuyển động đều của điểm là chuyển động mà vận tốc của nó có trị số không đổi ($v = v_o = \text{hằng số}$).

Nếu chọn chiều chuyển động không đổi của điểm làm chiều dương trên quỹ đạo thì phương trình chuyển động của điểm có dạng :

$$s = \int_0^t v_o dt + s_o = v_o t + s_o$$

**2. Chuyển động biến đổi đều :** chuyển động biến đổi đều của điểm là chuyển động mà thành phần gia tốc tiếp luôn có trị số không đổi $a^t = a = \text{hằng số}$).

Từ biểu thức $a^t = dv_t / dt = a$ ; ta suy ra : $v_t = at + v_o$

Vậy phương trình chuyển động có dạng :

$$v_t = \frac{ds}{dt} \to s = \frac{1}{2}at^2 + v_o t + s_o$$

Trong chuyển động biến đổi đều nếu $v_t$ và $a^t$ cùng dấu thì chuyển động là nhanh dần đều, nếu $v_t$ và $a^t$ ngược dấu nhau thì chuyển động là chậm dần đều. Trong thực tế, nếu ta chọn chiều dương trên quỹ đạo trùng với chiều của vận tốc đầu $\vec{v}_o$ thì nếu $a^t = a > 0$ chuyển động là nhanh dần đều, còn $a^t = a < 0$ chuyển động là chậm dần đều cho đến khi dừng lại ($v = 0$).

**Thí dụ 1–2.** Cho điểm chuyển động theo quy luật :

$$x = t - \sin t \, ; \quad y = 1 - \cos t \, ; \quad z = 4\sin\frac{t}{2}$$

Xác định bán kính cong của quỹ đạo theo thời gian $t$.

**Bài giải**

Trước hết đạo hàm các hàm $x, y, z$ theo $t$ :

$$\dot{x} = 1 - \cos t \, ; \quad \dot{y} = \sin t \, ; \quad \dot{z} = 2\cos\frac{t}{2}$$

$$\ddot{x} = \sin t \, ; \quad \ddot{y} = \cos t \, ; \quad \ddot{z} = -\sin\frac{t}{2}$$

Ta dễ dàng tính được :

$$v^2 = \dot{x}^2 + \dot{y}^2 + \dot{z}^2 = 2(1 - \cos t) + 4\cos^2\frac{t}{2} = 4$$

$$a^2 = \ddot{x}^2 + \ddot{y}^2 + \ddot{z}^2 = 1 + \sin^2\frac{t}{2}$$

Từ đó suy ra : $a^t = \dfrac{dv}{dt} = 0 \, ; \quad a^n = \dfrac{v^2}{\rho} = \dfrac{4}{\rho}$

Do $a^n = a$ nên ta có :

$$\rho = \frac{4}{\sqrt{1 + \sin^2\dfrac{t}{2}}}$$

---

## 1.4. Khảo sát chuyển động của điểm bằng phương pháp tọa độ cực

### 1.4.1. Phương trình chuyển động

Xét chuyển động của điểm $M$ trên mặt phẳng $Oxy$. Ta lấy $O$ làm cực, vẽ nửa đường thẳng $OM$ (hình 1–9). Gọi góc giữa các trục $Ox$ và $Or$ là $\varphi$. Gọi đoạn $OM = r$. Khi đó vị trí của điểm $M$ trên mặt phẳng $Oxy$ được xác định bởi hai tham số $r$ và $\varphi$. Vậy các phương trình chuyển động của điểm có dạng :

$$r = r(t) \, ; \quad \varphi = \varphi(t) \tag{1-12}$$

Các phương trình $(1-12)$ cũng là các phương trình tham số của quỹ đạo của điểm $M$ trong tọa độ cực.

### 1.4.2. Vận tốc chuyển động

Ta gọi trục cực là trục $Or$ mà hướng dương của nó được xác định theo chiều của $\overrightarrow{OM}$. Vectơ đơn vị trên trục này là $\overrightarrow{r^o}$. Quay trục $Or$ theo chiều của góc $\varphi$ đi một góc $90^\circ$ ta được trục $Op$. Vectơ đơn vị trên trục này là $\overrightarrow{p^o}$. Vectơ đơn vị trên các trục $Ox, Oy$ là $\vec{i}$ và $\vec{j}$ (H. 1–9).

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_9.svg" alt="Hình 1-9" style="max-height: 260px;" />

<div class="figure-caption">

Hình 1-9

</div>

</div>

Như thế, theo hình 1–9, ta có :

$$\left.\begin{aligned}
\overrightarrow{r^o} &= \cos\varphi \cdot \vec{i} + \sin\varphi \cdot \vec{j} \\
\overrightarrow{p^o} &= -\sin\varphi \cdot \vec{i} + \cos\varphi \cdot \vec{j}
\end{aligned}\right\} \tag{1-13}$$

Thực hiện phép tính đạo hàm theo $t$ :

$$\begin{aligned}
\frac{d\overrightarrow{r^o}}{dt} &= (-\sin\varphi \cdot \vec{i} + \cos\varphi \, \vec{j})\dot{\varphi} = \dot{\varphi}\overrightarrow{p^o} \\
\frac{d\overrightarrow{p^o}}{dt} &= -(\cos\varphi \cdot \vec{i} + \sin\varphi \, \vec{j})\dot{\varphi} = -\dot{\varphi}\overrightarrow{r^o}
\end{aligned} \tag{1-14}$$

Theo định nghĩa ta có :

$$\vec{v} = \frac{d\vec{r}}{dt} = \frac{d(r \cdot \overrightarrow{r^o})}{dt} = \frac{dr}{dt}\overrightarrow{r^o} + r\frac{d\overrightarrow{r^o}}{dt}$$

Chú ý đến $(1-14)$ ta nhận được :

$$\vec{v} = \frac{dr}{dt}\overrightarrow{r^o} + r\frac{d\varphi}{dt}\overrightarrow{p^o} \tag{1-15}$$

Vậy : $v_r = \dot{r}, \; v_p = r\dot{\varphi}$.

$$v = \sqrt{\dot{r}^2 + r^2 \cdot \dot{\varphi}^2}$$

### 1.4.3. Gia tốc chuyển động

Đạo hàm biểu thức $(1-15)$ ta được :

$$\begin{aligned}
\vec{a} = \frac{d\vec{v}}{dt} &= \frac{d^2 r}{dt^2} \cdot \overrightarrow{r^o} + \frac{dr}{dt} \cdot \frac{d\vec{r}_o}{dt} + \frac{dr}{dt} \cdot \frac{d\varphi}{dt}\overrightarrow{p^o} + \\
&+ r\frac{d^2\varphi}{dt^2}\overrightarrow{p^o} + r\frac{d\varphi}{dt}\frac{d\overrightarrow{p^o}}{dt}
\end{aligned}$$

Thế các biểu thức $(1-14)$ vào biểu thức trên ta nhận được :

$$\vec{a} = (\ddot{r} - r\dot{\varphi}^2)\overrightarrow{r^o} + (r\ddot{\varphi} + 2\dot{r}\dot{\varphi})\overrightarrow{p^o} \tag{1-16}$$

Từ đó suy ra hình chiếu của gia tốc điểm $M$ trên các trục $Or$ và $Op$ là :

$$a_r = \ddot{r} - r\dot{\varphi}^2 \, ;$$

$$a_p = r\ddot{\varphi} + 2\dot{r}\dot{\varphi}$$

Môđun và hướng của véc tơ gia tốc $\vec{a}$ được xác định bởi các công thức :

$$a = \sqrt{a_p^2 + a_r^2}$$

$$\cos(\overrightarrow{r^o}, \vec{a}) = \frac{a_r}{a} \, ,$$

$$\cos(\overrightarrow{p^o}, \vec{a}) = \frac{a_p}{a}$$

---

## 1.5. Khảo sát một số chuyển động đặc biệt

### 1.5.1. Chuyển động thẳng

Nếu quỹ đạo của điểm là đường thẳng, thì chuyển động là chuyển động thẳng. Ta chọn, chẳng hạn, trục $x$ hướng dọc theo đường thẳng quỹ đạo, thì vị trí của điểm được xác định bởi hoành độ $x = x(t)$. Hình chiếu vận tốc, gia tốc của điểm trên trục $x$ :

$$v_x = \dot{x} \, ; \quad a_x = \ddot{x}$$

Bây giờ ta khảo sát một loại chuyển động thẳng quan trọng, được xác định bởi quy luật :

$$x = a\sin(\omega t + \alpha) = a\sin\varphi \tag{1-17}$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_10.svg" alt="Hình 1-10" style="max-height: 260px;" />

<div class="figure-caption">

Hình 1-10

</div>

</div>

Chuyển động của điểm theo quy luật $(1-17)$ gọi là dao động điều hòa. Hình vẽ 1–10 biểu diễn đồ thị của hàm $x = a\sin(\omega t + \alpha) = a\sin\varphi$. Đại lượng $a$ bằng độ lệch cực đại của điểm từ vị trí $x = 0$ gọi là biên độ dao động. Đại lượng $\varphi = \omega t + \alpha$ gọi là pha dao động, $\alpha$ gọi là pha ban đầu.

Khoảng thời gian tối thiểu để chuyển động lặp lại gọi là chu kỳ dao động. Chu kỳ của dao động điều hòa là $T = 2\pi / \omega$. Số dao động xảy ra trong một đơn vị thời gian gọi là tần số dao động, $f = \dfrac{1}{T}$. Nếu thời gian tính bằng giây, thì đơn vị tần số là Hertz ($\text{Hz}$). Đại lượng $\omega$ được gọi là tần số vòng. Như thế ta có :

$$f = \frac{1}{T} = \frac{\omega}{2\pi} \tag{1-18}$$

### 1.5.2. Chuyển động tròn

Bây giờ sử dụng phương pháp tọa độ cực khảo sát chuyển động của điểm trên đường tròn. Tọa độ $r$ luôn là hằng số và bằng bán kính $R$ của vòng tròn. Vì vậy vị trí của điểm $M$ được xác định bởi góc $\varphi$ (H. 1–11).

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_11.svg" alt="Hình 1-11" style="max-height: 280px;" />

<div class="figure-caption">

Hình 1-11

</div>

</div>

Theo $(1-15)$ ta có :

$$v_r = \dot{r} = 0$$

$$v_p = r\dot{\varphi} = R\dot{\varphi}$$

Vậy :

$$v = |v_p| = R\omega \quad \text{với} \quad \omega = |\dot{\varphi}|$$

Tính toán gia tốc theo $(1-16)$ :

$$a_r = -R\omega^2 \, ; \quad a_p = R\ddot{\varphi}$$

Vậy :

$$a = \sqrt{a_r^2 + a_p^2} = R\sqrt{\omega^4 + \varepsilon^2}$$

trong đó : $\varepsilon = |\ddot{\varphi}|$.

Chú ý rằng nếu áp dụng phương pháp tọa độ tự nhiên, ta có :

$$a_t = R\ddot{\varphi} \, ; \quad a_n = R\omega^2 .$$

### 1.5.3. Chuyển động Xyclôit

**Thí dụ 1–2.** Một bánh xe tròn bán kính $R$ lăn không trượt trên đường ray thẳng. Vận tốc tâm bánh xe là hằng số và bằng $\vec{v}_o$. Tìm phương trình chuyển động của điểm $M$ ở trên vành bánh xe. Tìm quỹ đạo, vận tốc, gia tốc của điểm đó.

[Đính chính bản in: Sách đánh trùng số "Thí dụ 1–2" với thí dụ ở mục 1.3.5 (tr. 112).]

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_12.svg" alt="Hình 1-12" style="max-height: 310px;" />

<div class="figure-caption">

Hình 1-12

</div>

</div>

**Bài giải**

Chọn hệ tọa độ $Oxy$ như hình 1–12 với chú ý khi $t = 0$ thì $M \equiv 0$. Do bánh xe lăn không trượt nên cung $\overset{\frown}{AM}$ bằng đoạn $OA$. Do $\overset{\frown}{AM} = R\varphi$; $OA = v_o t$ nên $v_o t = R\varphi$. Do đó :

$$\varphi = \omega t \quad \text{với} \quad \omega = \frac{v_o}{R}$$

Tọa độ của điểm $M$ là :

$$\begin{aligned}
x &= v_o t - R\sin\varphi = v_o t - R\sin\omega t \\
y &= R - R\cos\varphi = R(1 - \cos\omega t)
\end{aligned} \qquad \text{(a)}$$

Các phương trình chuyển động của điểm $M$ này cũng là phương trình tham số quỹ đạo của nó. Quỹ đạo của $M$ gồm những cung xyclôit như hình 1–12.

Hình chiếu vận tốc của điểm $M$ trên các trục $Ox$ và $Oy$ :

$$\begin{aligned}
v_x &= \dot{x} = v_o - R\omega\cos\omega t = v_o(1 - \cos\omega t) \\
v_y &= \dot{y} = R\omega\sin\omega t = v_o\sin\omega t
\end{aligned} \qquad \text{(b)}$$

Mô đun của vận tốc

$$\begin{aligned}
v &= \sqrt{\dot{x}^2 + \dot{y}^2} = v_o\sqrt{(1 - \cos\omega t)^2 + \sin^2\omega t} = \\
&= v_o\sqrt{2(1 - \cos\omega t)} = 2v_o\sin\frac{\omega t}{2}
\end{aligned}$$

Chú ý rằng góc $2\pi \geqslant \varphi \geqslant 0$ nên $\sin\dfrac{\omega t}{2} \geqslant 0$.

Để tìm hướng vận tốc điểm $M$, ta xác định các cosin chỉ phương của véctơ vận tốc.

$$\cos(x, \vec{v}) = \frac{v_x}{v} = \frac{1 - \cos\omega t}{2\sin\dfrac{\omega t}{2}} = \sin\frac{\omega t}{2}$$

$$\cos(y, \vec{v}) = \frac{v_y}{v} = \frac{\sin\omega t}{2\sin\dfrac{\omega t}{2}} = \cos\frac{\omega t}{2}$$

Từ đó suy ra véctơ vận tốc của điểm $M$ luôn luôn nằm trên đường thẳng nối từ điểm $M$ tới điểm cao nhất của bánh xe (H. 1–12).

Hình chiếu gia tốc của điểm $M$ trên các trục $Ox$ và $Oy$ :

$$a_x = \ddot{x} = v_o\omega\sin\omega t, \quad a_y = \ddot{y} = v_o\omega\cos\omega t$$

Do đó :

$$a = \sqrt{a_x^2 + a_y^2} = v_o\omega = \omega^2 R$$

Do $\cos(x, \vec{a}) = \dfrac{a_x}{a} = \sin\omega t$; $\sin(y, \vec{a}) = \dfrac{a_y}{a} = \cos\omega t$

[Đính chính bản in: Biểu thức thứ hai là $\cos(y, \vec{a}) = \frac{a_y}{a} = \cos\omega t$ (sách in nhầm $\sin(y, \vec{a})$).]

Nên véctơ gia tốc của điểm $M$ luôn đi qua tâm của bánh xe.

Bán kính cong của quỹ đạo được tính từ biểu thức :

$$\rho = \frac{v^2}{a^n}$$

Do $a^n = \sqrt{a^2 - (a^t)^2}$ và $a^t = \dfrac{dv_t}{dt} = v_o\omega\cos\dfrac{\omega t}{2}$ (vì $v_t = v$)

nên $a^n = v_o\omega\sqrt{1 - \cos^2\dfrac{\omega t}{2}} = v_o\omega\sin\dfrac{\omega t}{2}$

Vậy :

$$\rho = \frac{4v_o^2\sin^2\dfrac{\omega t}{2}}{v_o\omega\sin\dfrac{\omega t}{2}} = \frac{4v_o}{\omega}\sin\frac{\omega t}{2} = 4R\sin\frac{\omega t}{2} = 2AM$$

trong đó : $AM$ là khoảng cách từ điểm $M$ đến điểm thấp nhất của bánh xe.

### 1.5.4. Chuyển động Parabôn

**Thí dụ 1–3.** Trong mặt phẳng thẳng đứng $Oxy$, một điểm $M$ chuyển động theo phương trình :

$$x = v_o t\cos\alpha \, ; \quad y = v_o t\sin\alpha - \frac{gt^2}{2}$$

trong đó : $v_o, \alpha, g$ là các hằng số.

Tìm quỹ đạo, vận tốc, gia tốc của điểm $M$ và bán kính cong của quỹ đạo ứng với lúc $t = 0$ và lúc $M$ ở vị trí cao nhất.

**Bài giải**

Rút $t$ từ phương trình thứ nhất $t = \dfrac{x}{v_o\cos\alpha}$ rồi thay vào phương trình thứ hai ta được :

$$y = x\operatorname{tg}\alpha - \frac{g}{2v_o^2\cos^2\alpha}x^2$$

Vậy quỹ đạo là một đường parabôn (H. 1–13).

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_13.svg" alt="Hình 1-13" style="max-height: 240px;" />

<div class="figure-caption">

Hình 1-13

</div>

</div>

Xác định vận tốc của điểm $M$. Ta có :

$$v_x = \dot{x} = v_o\cos\alpha$$

$$v_y = \dot{y} = v_o\sin\alpha - gt$$

Vậy :

$$v = \sqrt{v_o^2\cos^2\alpha + (v_o\sin\alpha - gt)^2}$$

Đạo hàm biểu thức vận tốc :

$$a_x = \ddot{x} = 0$$

$$a_y = \ddot{y} = -g$$

Do đó véctơ $\vec{a}$ hướng thẳng xuống dưới, $a = g$.

Để tìm bán kính cong của quỹ đạo ta sử dụng công thức :

$$\rho = \frac{v_o^2}{a^n}$$

[Đính chính bản in: Công thức tổng quát bán kính cong là $\rho = \frac{v^2}{a^n}$ (chỉ tại $t = 0$ mới có $v = v_o$).]

Trong bài toán này $v_t = v$, nên ta có :

$$a^t = \frac{dv_t}{dt} = \frac{dv}{dt} = \frac{-g(v_o\sin\alpha - gt)}{\sqrt{v_o^2\cos^2\alpha + (v_o\sin\alpha - gt)^2}}$$

Khi $t = 0$ ; $a^t = -g\sin\alpha$ ; $a = g$. Vậy $a^n = \sqrt{a^2 - (a^t)^2} = g\cos\alpha$

Do đó :

$$\rho = \frac{v_o^2}{g\cos\alpha}$$

Khi điểm $M$ ở vị trí cao nhất của quỹ đạo thì $\vec{v} \parallel \text{trục } x$, do đó $v_y = v_o\sin\alpha - gt = 0$. Từ đó suy ra $a^t = 0$ ; $a^n = g$.

Vậy bán kính cong quỹ đạo tại điểm đó là :

$$\rho = \frac{v_o^2\cos^2\alpha}{g}$$

### 1.5.5. Chuyển động đinh ốc

**Thí dụ 1–4.** Cho biết điểm $M$ chuyển động theo quy luật :

$$x = r\cos\varphi \, ; \quad y = r\sin\varphi \, ; \quad z = p\varphi \qquad \text{(a)}$$

trong đó : $r$ và $p$ là hằng số, $\varphi = \varphi(t)$. Tìm vận tốc, gia tốc của điểm $M$ và xét tính biến đổi chuyển động khi $\varphi = \omega_o t$, với $\omega_o = \text{const}$.

**Bài giải**

Do phương trình chuyển động (a) của điểm $M$, nó sẽ vạch nên một đường đinh ốc đều như hình vẽ 1–14, áp dụng phương pháp tọa độ Đề các tính vận tốc và gia tốc điểm $M$.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_1_14.svg" alt="Hình 1-14" style="max-height: 330px;" />

<div class="figure-caption">

Hình 1-14

</div>

</div>

Ta có :

$$v_x = \dot{x} = -r\dot{\varphi}\sin\varphi \, ; \quad v_y = \dot{y} = r\dot{\varphi}\cos\varphi \, ; \quad v_z = p\dot{\varphi} \qquad \text{(b)}$$

$$v = \sqrt{r^2\dot{\varphi}^2\sin^2\varphi + r^2\dot{\varphi}^2\cos^2\varphi + p^2\dot{\varphi}^2} = |\dot{\varphi}|\sqrt{r^2 + p^2}$$

$$\begin{aligned}
a_x &= \ddot{x} = -r\dot{\varphi}^2\cos\varphi - r\ddot{\varphi}\sin\varphi \\
a_y &= \ddot{y} = -r\dot{\varphi}^2\sin\varphi + r\ddot{\varphi}\cos\varphi \\
a_z &= \ddot{z} = p\ddot{\varphi}
\end{aligned} \qquad \text{(c)}$$

Để xác định, ta xét trường hợp $\dot{\varphi} > 0$. Khi đó, nếu gọi $\gamma$ là góc giữa tiếp tuyến với quỹ đạo và trục $z$, ta có :

$$\cos\gamma = \frac{v_z}{v} = \frac{p\dot{\varphi}}{\dot{\varphi}\sqrt{r^2 + p^2}} = \frac{p}{\sqrt{r^2 + p^2}} = \text{const}$$

Như thế, đường đinh ốc có độ nghiêng không đổi đối với mặt phẳng $Oxy$.

Gọi $M'$ là hình chiếu của điểm $M$ trên mặt phẳng $Oxy$. Dễ dàng thấy hình chiếu của quỹ đạo trên mặt phẳng $Oxy$ là đường tròn tâm $O$ bán kính $r$.

$$x^2 + y^2 = r^2\cos^2\varphi + r^2\sin^2\varphi = r^2$$

Khi điểm $M'$ đi được một vòng trên đáy trụ tròn $\varphi = 2\pi$ radian, thì điểm $M$ chuyển động dọc trục $z$ được một đoạn không đổi là $h = 2\pi p$. Người ta gọi $h$ là bước của đinh ốc.

Xét trường hợp $\varphi = \omega_o t$.

Khi đó :

$$\begin{aligned}
v_x &= -r\omega_o\sin\omega_o t \, ; \quad v_y = r\omega_o\cos\omega_o t, \\
v_z &= p\omega_o
\end{aligned} \qquad \text{(d)}$$

Ta có : $v = \omega_o\sqrt{r^2 + p^2} = \text{const}$.

Khi đó điểm $M$ sẽ chuyển động đều trên đường đinh ốc.

$$\begin{aligned}
a_x &= -r\omega_o^2\cos\omega_o t \, ; \quad a_y = -r\omega_o^2\sin\omega_o t \, ; \quad a_z = 0 \\
a &= r\omega_o^2
\end{aligned} \qquad \text{(đ)}$$

Vectơ gia tốc $\vec{a}$ song song với trục mặt phẳng $Oxy$ (vì $a_z = 0$).

Chú ý rằng $a_x = -\omega^2 x \, ; \; a_y = -\omega^2 y$ mà $x, y$ lại là tọa độ của điểm $M'$. Vậy gia tốc $\vec{a}$ ngược chiều với vectơ $\overrightarrow{OM'}$.

[Đính chính bản in: Ở hai câu trên, "song song với trục mặt phẳng $Oxy$" được hiểu là "song song với mặt phẳng $Oxy$", và $a_x = -\omega_o^2 x \, ; \; a_y = -\omega_o^2 y$ (sách in thiếu chỉ số dưới $o$ của $\omega_o$).]

Do $v = \text{const}$, nên $a^t = 0$ ; $a^n = a$. Vậy bán kính cong của quỹ đạo là :

$$\rho = \frac{v^2}{a^n} = \frac{r^2 + p^2}{r}$$
