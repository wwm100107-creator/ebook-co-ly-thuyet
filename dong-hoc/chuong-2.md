# Chương 2: Chuyển động cơ bản của vật rắn

Trong chương này chúng ta khảo sát hai dạng chuyển động đơn giản nhất của vật rắn là chuyển động tịnh tiến và chuyển động quay quanh một trục cố định. Mọi dạng chuyển động phức tạp của vật rắn đều có thể phân tích thành các dạng chuyển động đơn giản này. Ngược lại, từ hai dạng chuyển động đơn giản này, chúng ta có thể tổng hợp thành các dạng chuyển động phức tạp của vật rắn.

Việc khảo sát chuyển động của vật rắn ở đây được tiến hành theo hai bước : khảo sát chuyển động của vật rắn, sau đó khảo sát chuyển động của các điểm thuộc vật.

---

## 2.1. Chuyển động tịnh tiến của vật rắn {#_2-1-chuyen-đong-tinh-tien-cua-vat-ran}

### 2.1.1. Định nghĩa và thí dụ

::: tip Định nghĩa
*Chuyển động tịnh tiến của vật rắn là chuyển động mà mỗi đoạn thẳng thuộc vật luôn luôn song song với vị trí ban đầu của nó.*
:::

**Thí dụ.** Chuyển động của thùng xe trên đoạn đường thẳng (H. 2–1), chuyển động của thanh truyền $AB$ trong cơ cấu bốn khâu có các tay quay $O_1A$ và $O_2B$ bằng nhau (H. 2–2) là chuyển động tịnh tiến.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_1.svg" alt="Hình 2-1" style="max-height: 220px;" />

<div class="figure-caption">

Hình 2-1

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_2.svg" alt="Hình 2-2" style="max-height: 250px;" />

<div class="figure-caption">

Hình 2-2

</div>

</div>

*Chú ý :* Không có khái niệm điểm chuyển động tịnh tiến. Khi vật rắn chuyển động tịnh tiến, các điểm thuộc vật có thể chuyển động không thẳng, không đều.

### 2.1.2. Tính chất của chuyển động

::: tip Định lí
*Khi vật rắn chuyển động tịnh tiến, quỹ đạo, vận tốc, gia tốc các điểm của vật như nhau.*
:::

*Chứng minh.* Lấy hai điểm $A, B$ bất kỳ thuộc vật. Các vectơ định vị của chúng thỏa mãn điều kiện (H. 2–3).

$$\vec{r}_B = \vec{r}_A + \overrightarrow{AB} \tag{2-1}$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_3.svg" alt="Hình 2-3" style="max-height: 280px;" />

<div class="figure-caption">

Hình 2-3

</div>

</div>

Đối với vật rắn bất kỳ, vectơ $\overrightarrow{AB}$ luôn có độ lớn không đổi, đối với chuyển động tịnh tiến $\overrightarrow{AB}$ luôn có hướng không đổi. Vậy $\overrightarrow{AB} = \overrightarrow{\text{const}}$.

Phương trình $(2-1)$ chứng tỏ rằng vị trí của điểm $B$ là vị trí của điểm $A$ trượt đi một vectơ hằng $\overrightarrow{AB}$. Nếu sự dịch chuyển trên được thực hiện thì quỹ đạo của điểm $A$ sẽ chồng khít lên quỹ đạo điểm $B$. Các quỹ đạo như thế được gọi là như nhau.

Do $\overrightarrow{AB} = \overrightarrow{\text{const}}$ nên đạo hàm đẳng thức $(2-1)$ theo thời gian, ta có :

$$\begin{aligned}
\frac{d\vec{r}_B}{dt} &= \frac{d\vec{r}_A}{dt} \quad \text{hay} \quad \vec{v}_B = \vec{v}_A \\
\frac{d\vec{v}_B}{dt} &= \frac{d\vec{v}_A}{dt} \quad \text{hay} \quad \vec{a}_B = \vec{a}_A
\end{aligned}$$

Từ định lí trên ta thấy rằng, việc khảo sát chuyển động tịnh tiến của vật rắn được đưa về khảo sát chuyển động của một điểm bất kì thuộc vật. Phương pháp khảo sát chuyển động của điểm đã được trình bày trong chương trước.

---

## 2.2. Chuyển động quay quanh trục cố định của vật rắn {#_2-2-chuyen-đong-quay-quanh-truc-co-đinh-cua-vat-ran}

Chuyển động của vật rắn có hai điểm cố định, do đó có một trục đi qua hai điểm đó cố định, được gọi là chuyển động quay quanh một trục cố định. Trục cố định đó được gọi là trục quay của vật.

Trên hình 2–4a cho ta mô hình không gian của vật rắn quay quanh một trục cố định. Giao giữa vật rắn quay và mặt phẳng vuông góc với trục quay cho ta mô hình phẳng như hình vẽ 2–4b.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_4a.svg" alt="Hình 2-4a" style="max-height: 280px;" />

<div class="figure-caption">

Hình 2-4a

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_4b.svg" alt="Hình 2-4b" style="max-height: 240px;" />

<div class="figure-caption">

Hình 2-4b

</div>

</div>

### 2.2.1. Khảo sát chuyển động của vật

#### 1. Phương trình chuyển động

Ta chọn quy ước một chiều quay dương quanh trục. Dựng mặt phẳng $P_0$ cố định qua trục và mặt phẳng động $P$ qua trục và gắn chặt với vật rắn. Góc giữa mặt phẳng $P_0$ và mặt phẳng $P$ là $\varphi$. Vị trí của vật rắn khi đó được xác định bởi vị trí của mặt phẳng $P$ đối với mặt phẳng $P_0$, tức là được xác định bởi góc quay $\overline{\varphi}$. Khi vật quay, góc $\overline{\varphi}$ thay đổi theo thời gian.

$$\overline{\varphi} = \overline{\varphi}(t) \tag{2-2}$$

Phương trình $(2-2)$ là phương trình chuyển động của vật rắn quay quanh một trục cố định.

Như thế, vị trí của vật rắn quay quanh một trục cố định được xác định bởi một tham số là góc quay $\overline{\varphi}$. Do đó vật rắn loại này có một bậc tự do.

*Chú ý :* Góc quay $\overline{\varphi}$ có thể dương hay âm tùy thuộc vào chiều quay dương đã chọn. Thông thường người ta quy ước góc quay $\overline{\varphi}$ được xem là dương nếu vật quay ngược chiều kim đồng hồ, và xem là âm nếu vật quay thuận chiều kim đồng hồ. Góc quay $\overline{\varphi}$ được tính bằng radian ($\text{rad}$).

#### 2. Vận tốc góc của vật

Để đặc trưng cho chuyển động quay của vật rắn quanh một trục cố định, người ta đưa vào các khái niệm vận tốc góc và gia tốc góc.

Đại lượng

$$\overline{\omega} = \frac{d\overline{\varphi}}{dt} = \dot{\overline{\varphi}} \tag{2-3}$$

gọi là vận tốc góc của vật.

Như thế vận tốc góc là đạo hàm bậc nhất theo thời gian của góc quay. Dấu của $\overline{\omega}$ cho biết chiều quay của vật quanh trục. Nếu $\overline{\omega} = \dot{\overline{\varphi}} > 0$ thì $\overline{\varphi}$ tăng theo thời gian và vật rắn quay theo chiều dương. Ngược lại nếu $\overline{\omega} < 0$ thì vật quay theo chiều âm.

Giá trị tuyệt đối $|\overline{\omega}| = \omega$ cho biết độ nhanh của chuyển động quay : $\omega$ có giá trị càng lớn, thì vật quay càng nhanh.

Đơn vị để tính vận tốc góc là radian trên giây. Kí hiệu là $\text{rad/s}$. Người ta cũng dùng đơn vị $1/\text{s}$ để tính vận tốc góc.

Trong kĩ thuật người ta hay sử dụng đơn vị vòng/phút để tính tốc độ góc. Do $1\text{ vòng} = 2\pi\text{ rad}$, $1\text{ phút} = 60\text{ s}$ nên ta dễ dàng thiết lập hệ thức liên hệ giữa hai loại đơn vị :

$$\omega = \frac{\pi n}{30} \approx 0,1n\text{ rad/s} \tag{2-4}$$

Thí dụ : $n = 9000\text{ vòng/ph}$ thì $\omega = 300\pi\text{ rad/s}$.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_5.svg" alt="Hình 2-5" style="max-height: 300px;" />

<div class="figure-caption">

Hình 2-5

</div>

</div>

#### 3. Gia tốc góc của vật

Đại lượng :

$$\overline{\varepsilon} = \frac{d\overline{\omega}}{dt} = \frac{d^2\overline{\varphi}}{dt^2} = \ddot{\overline{\varphi}} \tag{2-5}$$

gọi là gia tốc góc của vật.

Đơn vị để tính gia tốc góc là $\text{radian/giây}^2$. Kí hiệu là $\text{rad/s}^2$. Người ta cũng dùng đơn vị $1/\text{s}^2$ để tính gia tốc góc.

Gia tốc góc $\overline{\varepsilon}$ đặc trưng cho sự biến thiên của vận tốc góc $\overline{\omega}$ theo thời gian. Khi $\overline{\varepsilon} = 0$, do đó $\overline{\omega} = \text{const}$, chuyển động quay đều. Khi $\overline{\varepsilon} \neq 0$, chuyển động quay biến đổi. Nếu $\omega = |\overline{\omega}|$ tăng theo thời gian, thì vật rắn quay nhanh dần. Ngược lại khi $\omega$ giảm theo thời gian, thì vật rắn quay chậm dần. Chú ý rằng sự biến đổi của giá trị vận tốc góc $\omega$ được đặc trưng bởi sự biến đổi của $\omega^2 = (\overline{\omega})^2$. Do đó để tìm dấu hiệu nhận biết tính chất của chuyển động quay, ta xét dấu của đạo hàm :

$$\frac{d(\overline{\omega}^2)}{dt}$$

Do $\dfrac{d(\overline{\omega}^2)}{dt} = 2\overline{\omega}\cdot\overline{\varepsilon}$. Ta có kết luận :

- khi $\overline{\varepsilon} = 0$ : vật rắn quay đều ;
- $\overline{\omega} \cdot \overline{\varepsilon} > 0$ : vật rắn quay nhanh dần ;
- $\overline{\omega} \cdot \overline{\varepsilon} < 0$ : vật rắn quay chậm dần.

#### 4. Một vài dạng chuyển động quay đặc biệt

**a) *Chuyển động quay đều.*** Đó là chuyển động quay mà vận tốc góc có trị số không đổi ($\omega_0 = \text{const}$). Do đó $\overline{\omega} = \overline{\omega}_0 = \text{const}$.

Từ đó suy ra :

$$\overline{\varphi} = \overline{\omega}_0 t + \overline{\varphi}_0 \tag{2-6}$$

**b) *Chuyển động quay biến đổi đều.*** Đó là chuyển động quay mà gia tốc góc có trị số không đổi ($\overline{\varepsilon} = \overline{\varepsilon}_0 = \text{const}$).

Do :

$$\frac{d^2(\overline{\varphi})}{dt^2} = \overline{\varepsilon}, \quad \text{ta suy ra :}$$

$$\left.\begin{aligned}
\overline{\omega} &= \overline{\varepsilon}_0 t + \overline{\omega}_0 \\
\overline{\varphi} &= \frac{1}{2}\overline{\varepsilon}_0 t^2 + \overline{\omega}_0 t + \overline{\varphi}_0
\end{aligned}\right\} \tag{2-7}$$

#### 5. Vectơ vận tốc góc và vectơ gia tốc góc

Để biểu diễn gọn gàng, sáng sủa những đặc điểm của chuyển động quay của vật rắn quanh một trục cố định và để chuẩn bị cơ sở nghiên cứu sâu hơn về động học vật rắn, người ta sử dụng vectơ để biểu diễn vận tốc góc và gia tốc góc. Kí hiệu vectơ vận tốc góc là $\vec{\omega}$, vectơ gia tốc góc là $\vec{\varepsilon}$.

Vectơ vận tốc góc của vật rắn quay quanh một trục cố định $\vec{\omega}$ là một vectơ nằm trên trục quay có chiều sao cho nhìn từ ngọn đến gốc vectơ $\vec{\omega}$ ta thấy vật rắn quay ngược chiều kim đồng hồ và có trị số $|\vec{\omega}| = \omega$, (H. 2–6). Nếu gọi $\vec{k}$ là vectơ đơn vị trên trục quay $z$, ta có :

$$\vec{\omega} = \overline{\omega}\cdot\vec{k}$$

Vectơ gia tốc góc của vật rắn quay quanh một trục cố định $\vec{\varepsilon}$ là một vectơ bằng đạo hàm theo thời gian của vectơ vận tốc góc $\vec{\omega}$ của vật rắn :

$$\vec{\varepsilon} = \frac{d\vec{\omega}}{dt} = \frac{d\overline{\omega}}{dt}\vec{k} = \overline{\varepsilon}\cdot\vec{k}$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_6.svg" alt="Hình 2-6" style="max-height: 310px;" />

<div class="figure-caption">

Hình 2-6

</div>

</div>

Như thế vectơ gia tốc góc $\vec{\varepsilon}$ cũng nằm trên trục quay, chiều và trị số của nó được xác định bởi dấu và trị số của $\overline{\varepsilon}$ (H. 2–6).

### 2.2.2. Khảo sát chuyển động các điểm thuộc vật

Xét chuyển động một điểm $M$ bất kì thuộc vật rắn, nằm cách trục quay $z$ một đoạn $IM = R$. Khi vật rắn quay quanh trục $z$ cố định, quỹ đạo của điểm $M$ là một đường tròn tâm $I$, bán kính $R$, nằm trên mặt phẳng đi qua $I$ và vuông góc với trục quay. Do biết được quỹ đạo chuyển động của $M$ nên ta sử dụng phương pháp tọa độ tự nhiên để phân tích chuyển động của điểm $M$.

#### 1. Phương trình chuyển động của điểm

Chọn điểm $O$ trên mặt phẳng $P_0$ làm gốc quy chiếu và lấy chiều quay dương làm chiều dương. Vị trí của điểm $M$ được xác định bởi cung $\overline{s} = \overset{\frown}{OM}$.

Vậy ta có phương trình chuyển động của điểm $M$.

$$\overline{s} = R\,\overline{\varphi}(t) \tag{2-8}$$

#### 2. Vận tốc các điểm

Theo công thức $(1-10)$ ta có :

$$\vec{v} = v_t\vec{t}_0 = \dot{\overline{s}}\vec{t}_0$$

Vậy vận tốc $\vec{v}$ của điểm $M$ vuông góc với $IM$, hướng theo chiều quay của vật (H. 2–7) và có trị số xác định bởi công thức :

$$v = |\dot{\overline{s}}| = R|\dot{\overline{\varphi}}| = R\omega \tag{2-9}$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_7.svg" alt="Hình 2-7" style="max-height: 230px;" />

<div class="figure-caption">

Hình 2-7

</div>

</div>

Như thế, vận tốc các điểm thuộc vật rắn quay quanh một trục cố định được phân bố quanh trục quay theo quy tắc tam giác vuông đồng dạng (H. 2–8).

Ta có :

$$\frac{v_M}{IM} = \frac{v_N}{IN} = \omega$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_8.svg" alt="Hình 2-8" style="max-height: 240px;" />

<div class="figure-caption">

Hình 2-8

</div>

</div>

[Đính chính bản in: Ở cuối trang 128 của bản in gốc, hình vẽ phân bố vận tốc (nằm bên phải Hình 2-7) bị in sót dòng nhãn "Hình 2-8".]

Bây giờ ta thiết lập công thức Ơle, một công thức rất quan trọng trong động học vật rắn. Trước hết ta lấy hai hệ tọa độ vuông góc : hệ $Ox_1y_1$ cố định, hệ $Oxy$ chuyển động quay quanh một trục cố định $O$, (H. 2–9).

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_9.svg" alt="Hình 2-9" style="max-height: 260px;" />

<div class="figure-caption">

Hình 2-9

</div>

</div>

Gọi vectơ đơn vị trên trục $Ox$ là $\vec{i}$; trên trục $Oy$ là $\vec{j}$ trên các trục $Ox_1, Oy_1$ tương ứng là $\vec{i}_1, \vec{j}_1$.

Từ hình 2–9 ta có :

$$\begin{aligned}
\vec{i} &= \cos\varphi\cdot\vec{i}_1 + \sin\varphi\cdot\vec{j}_1 \\
\vec{j} &= -\sin\varphi\cdot\vec{i}_1 + \cos\varphi\cdot\vec{j}_1
\end{aligned}$$

Thực hiện phép tính đạo hàm theo $t$ :

$$\begin{aligned}
\frac{d\vec{i}}{dt} &= \dot{\varphi}(-\sin\varphi\cdot\vec{i}_1 + \cos\varphi\cdot\vec{j}_1) = \dot{\varphi}\vec{j} \\
\frac{d\vec{j}}{dt} &= -\dot{\varphi}(\cos\varphi\cdot\vec{i}_1 + \sin\varphi\cdot\vec{j}_1) = -\dot{\varphi}\vec{i}
\end{aligned} \tag{2-10}$$

Xét vật rắn quay quanh một trục $z$ cố định. Chọn hệ tọa độ cố định $Ox_1y_1z_1$ làm hệ quy chiếu. Lấy hệ tọa độ động $Oxyz$ gắn liền với vật (H. 2–10). Vị trí của điểm $M$ thuộc vật được xác định bởi vectơ $\vec{r}$ :

$$\vec{r} = x\vec{i} + y\vec{j} + z\vec{k}$$

trong đó : $x, y, z$ là tọa độ của điểm $M$ trong hệ tọa độ $Oxyz$. Chúng là các hằng số.

Vận tốc của điểm $M$ :

$$\vec{v} = \frac{d\vec{r}}{dt} = x\frac{d\vec{i}}{dt} + y\frac{d\vec{j}}{dt} + z\frac{d\vec{k}}{dt}$$

Do $\vec{k} = \overrightarrow{\text{const}}$, nên $\dot{\vec{k}} = \vec{0}$. Chú ý đến $(2-10)$ ta có :

$$\vec{v} = x\dot{\varphi}\vec{j} - y\dot{\varphi}\vec{i} = -y\omega_z\vec{i} + x\omega_z\vec{j}$$

Mặt khác, chú ý đến tích vectơ :

$$\vec{\omega} \wedge \vec{r} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 0 & 0 & \omega_z \\ x & y & z \end{vmatrix} = -y\omega_z\vec{i} + x\omega_z\vec{j}$$

Từ trên ta có :

$$\vec{v} = \vec{\omega} \wedge \vec{r} \tag{2-11}$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_10.svg" alt="Hình 2-10" style="max-height: 320px;" />

<div class="figure-caption">

Hình 2-10

</div>

</div>

Công thức $(2-11)$ gọi là công thức Ơle. Đây là công thức cơ bản của lí thuyết động học vật rắn. Chú ý rằng, ta có thể thiết lập công thức Ơle nhanh gọn hơn bằng một vài nhận xét hình học về tích hữu hướng của hai vectơ.

#### 3. Gia tốc các điểm

Điểm $M$ chuyển động tròn, nên trong trường hợp tổng quát, gia tốc của nó có hai thành phần : gia tốc pháp tuyến $\vec{a}^n$ và gia tốc tiếp tuyến $\vec{a}^t$ (H. 2–11) :

$$\vec{a} = \vec{a}^n + \vec{a}^t$$

Gia tốc pháp tuyến $\vec{a}^n$ hướng từ điểm $M$ vào tâm $I$. Trị số của nó :

$$a^n = \frac{v^2}{\rho} = R\omega^2 \tag{2-12}$$

Gia tốc tiếp tuyến $\vec{a}^t$ hướng cùng chiều hay ngược chiều với vận tốc $\vec{v}$ tùy theo vật rắn quay nhanh dần hay chậm dần quanh trục quay.

Trị số của nó :

$$a^t = |\dot{v}| = R\varepsilon \tag{2-13}$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_11.svg" alt="Hình 2-11" style="max-height: 250px;" />

<div class="figure-caption">

Hình 2-11

</div>

</div>

Gia tốc toàn phần của điểm $M$ tạo với $MI$ một góc $\alpha$ mà :

$$\operatorname{tg}\alpha = \frac{a^t}{a^n} = \frac{\varepsilon}{\omega^2}$$

Còn trị số của nó :

$$a = \sqrt{(a^t)^2 + (a^n)^2} = R\sqrt{\omega^4 + \varepsilon^2}$$

Như thế, gia tốc các điểm của vật rắn chuyển động quay quanh một trục cố định được phân bố theo quy tắc tam giác thường đồng dạng với hệ số đồng dạng là $\sqrt{\omega^4 + \varepsilon^2}$ (H. 2–12).

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_12.svg" alt="Hình 2-12" style="max-height: 220px;" />

<div class="figure-caption">

Hình 2-12

</div>

</div>

Từ công thức Ơle $(2-11)$ ta có :

$$\vec{a} = \frac{d\vec{v}}{dt} = \frac{d}{dt}(\vec{\omega} \wedge \vec{r}) = \vec{\varepsilon} \wedge \vec{r} + \vec{\omega} \wedge \vec{v} \tag{2-14}$$

Bằng một vài suy luận đơn giản, ta rút ra :

$$\vec{a}^n = \vec{\omega} \wedge \vec{v} \, ; \quad \vec{a}^t = \vec{\varepsilon} \wedge \vec{r} \tag{2-15}$$

::: tip Thí dụ 2-1
Kim của điện kế Galvani dài $l$ chuyển động theo quy luật $\overline{\varphi} = \overline{\varphi}_0 \sin 2\pi\dfrac{1}{T}t$, trong đó $\overline{\varphi}_0$ là góc lệch cực đại của kim từ vị trí $\overline{\varphi} = 0$, $T$ là chu kỳ dao động. Tìm vận tốc, gia tốc điểm đầu mút của kim điện kế ở thời điểm $t = T/4$.

**Bài giải**

Kim điện kế thực hiện chuyển động quay dao động điều hòa quanh một trục cố định. Vận tốc góc và gia tốc góc của nó là:

$$\omega_z = \dot{\overline{\varphi}} = \frac{2\pi}{T}\overline{\varphi}_0 \cos\frac{2\pi}{T}t,$$

$$\varepsilon_z = \ddot{\overline{\varphi}} = -\frac{4\pi^2}{T^2}\overline{\varphi}_0 \sin\frac{2\pi}{T}t$$

Trị số vận tốc điểm đầu mút của kim điện kế

$$v = l\omega = l\frac{2\pi}{T}\varphi_0 \left|\cos\frac{2\pi}{T}t\right|$$

Trị số gia tốc tiếp và gia tốc pháp của điểm đầu mút của kim :

$$a^t = l\varepsilon = l\frac{4\pi^2}{T^2}\varphi_0 \left|\sin\frac{2\pi}{T}t\right| \, ; \quad a^n = l\omega^2 = l\frac{4\pi^2}{T^2}\varphi_0^2 \cos^2\frac{2\pi}{T}t$$

Khi $t = \dfrac{T}{4}$ thì $\sin\dfrac{2\pi}{T}t = \sin\dfrac{\pi}{2} = 1$, $\cos\dfrac{2\pi}{T}t = \cos\dfrac{\pi}{2} = 0$

Do vậy : khi $t = \dfrac{T}{4}$ ; góc $\overline{\varphi} = \overline{\varphi}_0$ ; $v = l\omega = 0$ ; $a^t = l\dfrac{4\pi^2}{T^2}\varphi_0$ ; $a^n = 0$

[Đính chính bản in: Ở dòng kết luận của Thí dụ 2-1 (trang 132), nét gạch phân số của $\dfrac{T}{4}$ và $\dfrac{4\pi^2}{T^2}$ trong bản in gốc bị xô lệch sang trái đè vào dấu `$=$` và chữ `$l$`.]
:::

---

<div id="_2-4-cac-thi-du-ap-dung-bai-tap-mau"></div>

## 2.3. Truyền động đơn giản

### 2.3.1. Vị trí của truyền động

Trong một máy hoặc một tổ hợp máy thường gồm ba phần (H. 2–13) : động cơ, cơ cấu truyền động, bộ phận làm việc.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_13.svg" alt="Hình 2-13" style="max-height: 150px;" />

<div class="figure-caption">

Hình 2-13

</div>

</div>

Ở đây bước đầu ta làm quen với một vài cơ cấu truyền động đơn giản nhằm biến chuyển động quay quanh một trục cố định thành chuyển động quay quanh một trục khác cố định, biến chuyển động tịnh tiến thành chuyển động tịnh tiến, biến chuyển động quay thành chuyển động tịnh tiến và biến chuyển động tịnh tiến thành chuyển động quay.

### 2.3.2. Vài loại truyền động đơn giản

#### 1. Truyền động bằng cơ cấu bánh răng, đai truyền, xích

Truyền các chuyển động quay giữa hai trục cố định song song nhau, người ta dùng cơ cấu bánh răng, đai truyền, xích như hình 2–14 và 2–15.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_14a.svg" alt="Hình 2-14a" style="max-height: 230px;" />

<div class="figure-caption">

Hình 2-14a

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_14b.svg" alt="Hình 2-14b" style="max-height: 200px;" />

<div class="figure-caption">

Hình 2-14b

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_15a.svg" alt="Hình 2-15a" style="max-height: 200px;" />

<div class="figure-caption">

Hình 2-15a

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_15b.svg" alt="Hình 2-15b" style="max-height: 200px;" />

<div class="figure-caption">

Hình 2-15b

</div>

</div>

Trong trường hợp biểu diễn trên hình 2–14, ta có

$$\frac{\overline{\omega}_1}{\overline{\omega}_2} = \frac{r_2}{r_1}$$

Truyền động như hình 2–15 ta có

$$\frac{\overline{\omega}_1}{\overline{\omega}_2} = -\frac{r_2}{r_1}$$

[Đính chính bản in: Trên Hình 2-15a của bản in gốc (trang 133), vận tốc góc của bánh bán kính $r_1$ bị in nhầm kí hiệu là $\omega_2$ thay vì $\omega_1$; ở đầu trang 134, nét gạch phân số của hai tỉ số truyền bị xô lệch sang trái.]

#### 2. Truyền động bằng bánh răng – thanh răng

Để truyền chuyển động giữa một vật quay và một vật tịnh tiến người ta sử dụng cơ cấu bánh răng – thanh răng hoặc cơ cấu bánh – thanh ma sát (H. 2–16).

Khi đó : $v = R\omega$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_16.svg" alt="Hình 2-16" style="max-height: 230px;" />

<div class="figure-caption">

Hình 2-16

</div>

</div>

#### 3. Truyền động bằng cơ cấu cam

Để truyền chuyển động tịnh tiến thành chuyển động tịnh tiến hoặc chuyển động quay thành chuyển động tịnh tiến người ta có thể sử dụng các cơ cấu cam như hình 2–17.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_17a.svg" alt="Hình 2-17a" style="max-height: 260px;" />

<div class="figure-caption">

Hình 2-17a

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_17b.svg" alt="Hình 2-17b" style="max-height: 280px;" />

<div class="figure-caption">

Hình 2-17b

</div>

</div>

::: tip Thí dụ 2-2
Cho cơ cấu truyền động như hình 2–18. Trục $\text{I}$ có bán kính $R_1$ chuyển động quay với vận tốc $\omega_1$ và gia tốc góc $\varepsilon_1$. Trục $\text{II}$ gồm hai tầng có bán kính tương ứng $R_2$ và $r_2$. Tìm vận tốc và gia tốc của vật $P$.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_2_18.svg" alt="Hình 2-18" style="max-height: 320px;" />

<div class="figure-caption">

Hình 2-18

</div>

</div>

**Bài giải**

Hệ gồm có trục $\text{I}$ và trục $\text{II}$ chuyển động quay, còn vật $P$ chuyển động tịnh tiến. Theo trên ta có :

$$\frac{\overline{\omega}_1}{\overline{\omega}_2} = \frac{\overline{\varepsilon}_1}{\overline{\varepsilon}_2} = -\frac{R_2}{R_1}$$

Do đó :

$$\overline{\omega}_2 = -\frac{R_1}{R_2}\overline{\omega}_1 \, ; \quad \overline{\varepsilon}_2 = -\frac{R_1}{R_2}\overline{\varepsilon}_1$$

Vận tốc điểm $P$ :

$$v_P = v_M = r_2\omega_2 = \frac{r_2 R_1}{R_2}\omega_1$$

Gia tốc điểm $P$ :

$$a_P = a_M^t = r_2\varepsilon_2 = \frac{r_2 R_1}{R_2}\varepsilon_1$$

Do $\overline{\omega}_1$ và $\overline{\varepsilon}_1$ ngược chiều nhau (H. 2–18) nên vật $P$ chuyển động lên chậm dần do $\vec{v}_P$ và $\vec{a}_P$ ngược chiều nhau.

[Đính chính bản in: Trên Hình 2-18 của bản in gốc (trang 135), bán kính bánh $\text{I}$ được kí hiệu là $r_1$ (ứng với $R_1$ trong đề và lời giải).]
:::
