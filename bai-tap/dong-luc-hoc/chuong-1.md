---
title: "Bài Tập Động Lực Học - Chương 1: Phương Trình Vi Phân Chuyển Động Của Chất Điểm"
layout: doc
---

# Chương 1: PHƯƠNG TRÌNH VI PHÂN CHUYỂN ĐỘNG CỦA CHẤT ĐIỂM

## 1.1. CƠ SỞ LÝ THUYẾT

### 1.1.1. Phương trình cơ bản của động lực học

Khảo sát chất điểm $M$ có khối lượng $m$, chịu tác dụng của lực $\vec{F}$ chuyển động trong hệ quy chiếu quán tính với gia tốc $\vec{a}$ thoả mãn phương trình sau :

$$m\vec{a} = \vec{F} \tag{1–1}$$

được gọi là phương trình cơ bản của động lực học.

*Chú thích :*

– Trong trường hợp chất điểm chịu tác dụng của nhiều lực thì lực $\vec{F}$ là hợp lực của các lực đó, tức $\vec{F} = \sum\limits_k \vec{F}_k$.

– Trong thực tế kỹ thuật hệ quy chiếu quán tính thường được chọn là hệ quy chiếu gắn liền với quả đất hoặc chuyển động tịnh tiến thẳng đều đối với quả đất.

– Đối với chất điểm không tự do, để sử dụng (1–1) cần áp dụng tiên đề giải phóng liên kết, thay các liên kết bằng các lực liên kết và lực tác dụng lên chất điểm bao gồm cả các lực liên kết đó.

### 1.1.2. Các dạng phương trình vi phân chuyển động của chất điểm

Khi chọn các hệ trục toạ độ khác nhau gắn với hệ quy chiếu quán tính ta nhận được các phương trình vi phân được gọi là hệ phương trình vi phân chuyển động của chất điểm, sau khi tích phân chúng, ta nhận được phương trình chuyển động của chất điểm. Từ phương trình (1–1) có thể viết phương trình vi phân chuyển động trong các dạng khác nhau. Dưới đây ta nêu tóm tắt trong bảng một số dạng phương trình vi phân chuyển động thường gặp của chất điểm.

#### Bảng 1–1

| Dạng | Lực | Toạ độ | Gia tốc | Phương trình vi phân của chuyển động của chất điểm |
| :--- | :---: | :---: | :---: | :---: |
| **Vectơ** | $\vec{F}$ | $\vec{r}$ | $\vec{a} = \dfrac{d^2\vec{r}}{dt^2} = \ddot{\vec{r}}$ | $m\vec{a} = m\ddot{\vec{r}} = \vec{F}$ |
| **Đề các** | $F_x = X$ | $x$ | $a_x = \dfrac{d^2 x}{dt^2} = \ddot{x}$ | $m\ddot{x} = X$ |
| | $F_y = Y$ | $y$ | $a_y = \dfrac{d^2 y}{dt^2} = \ddot{y}$ | $m\ddot{y} = Y$ |
| | $F_z = Z$ | $z$ | $a_z = \dfrac{d^2 z}{dt^2} = \ddot{z}$ | $m\ddot{z} = Z$ |
| **Tự nhiên** | $\overline{F}_t$ | $\overline{s}$ (trên quỹ đạo định hướng) | $\overline{a}^t = \dfrac{d^2\overline{s}}{dt^2} = \ddot{\overline{s}}$ | $m\overline{a}^t = m\ddot{\overline{s}} = F_t$ |
| | $F_n$ | | $a^n = \dfrac{v^2}{\rho} = \dfrac{(\dot{\overline{s}})^2}{\rho}$ | $ma^n = m\dfrac{v^2}{\rho} = F_n$ |
| | $F_b$ | | $a^b = 0$ | $ma^b = 0 = F_b$ |
| **Độc cực phẳng** | $F_r$ | $r$ | $a_r = \ddot{r} - r\dot{\theta}^2$ | $m(\ddot{r} - r\dot{\theta}^2) = F_r$ |
| | $F_\theta$ | $\theta$ | $a_\theta = \dfrac{1}{r}\dfrac{d}{dt}(r^2\dot{\theta})$ | $\dfrac{m}{r}\dfrac{d}{dt}(r^2\dot{\theta}) = F_\theta$ |

### 1.1.3. Hai bài toán của động lực học

Áp dụng các phương trình vi phân đã viết trên đây chúng ta có thể giải quyết hai bài toán cơ bản của động lực học chất điểm :

– *Bài toán thứ nhất của động lực học :* là bài toán biết chuyển động của chất điểm, tìm lực tác dụng lên nó hoặc một số điều kiện hình học hay động học có liên quan đến lực đó.

– *Bài toán thứ hai của động lực học :* là bài toán biết lực tác dụng lên chất điểm và điều kiện ban đầu của chuyển động, tìm quy luật chuyển động của nó.

Sau đây chúng ta sẽ lần lượt khảo sát hai bài toán đó và giới thiệu các phương pháp giải hai bài toán đó.

---

## 1.2. BÀI TOÁN THỨ NHẤT CỦA ĐỘNG LỰC HỌC ĐỐI VỚI CHẤT ĐIỂM

### 1.2.1. Hướng dẫn áp dụng

Biết chuyển động của chất điểm thường là biết toạ độ hoặc các hình chiếu của vận tốc, gia tốc :

$$\begin{aligned}
\vec{r} &= \vec{r}(t) \, ; \quad \dot{\vec{r}} = \dot{\vec{r}}(t) \, ; \quad \ddot{\vec{r}} = \ddot{\vec{r}}(t) \, ; \\
x &= x(t) \, ; \quad \dot{x} = \dot{x}(t) \, ; \quad \ddot{x} = \ddot{x}(t) \, ; \\
y &= y(t) \, ; \quad \dot{y} = \dot{y}(t) \, ; \quad \ddot{y} = \ddot{y}(t) \, ; \\
z &= z(t) \, ; \quad \dot{z} = \dot{z}(t) \, ; \quad \ddot{z} = \ddot{z}(t).
\end{aligned}$$

Hoặc biết quỹ đạo chất điểm và quy luật chuyển động trên quỹ đạo đó :

$$\overline{s} = \overline{s}(t) \, ; \quad \overline{v} = \dot{\overline{s}}(t) \, ; \quad \overline{a}^t = \ddot{\overline{s}}(t)$$

Vấn đề cần giải quyết ở đây là cần tìm gia tốc của chất điểm rồi từ các dạng phương trình vi phân chuyển động thích hợp suy ra lực tác dụng lên chất điểm. Do đó phương pháp giải quyết bài toán sẽ theo trình tự như sau :

– Xác định vật thể khảo sát dưới dạng một chất điểm chuyển động trong hệ quy chiếu quán tính. Đặt các lực tác dụng lên chất điểm đó gồm các lực hoạt động và các phản lực liên kết. Viết phương trình vi phân chuyển động theo một trong các dạng phương trình vi phân chuyển động nêu trong bảng tóm tắt trên.

– Tính đạo hàm để tìm gia tốc hoặc hình chiếu vectơ gia tốc lên các trục toạ độ đã cho.

– Thay vào các phương trình vừa viết để tìm các lực theo yêu cầu của bài toán.

### 1.2.2. Bài giải mẫu

#### Thí dụ 1–1

Một vật nặng trọng lượng $\vec{P}$ được kéo lên với gia tốc $\vec{a}$, theo phương thẳng đứng. Tìm sức căng $\vec{T}$ của dây.

**Bài giải.** Vật khảo sát : vật nặng được coi như một chất điểm.

Các lực tác dụng lên chất điểm gồm :

– Trọng lực $\vec{P}$ ; Sức căng dây $T$ ;

Khi viết (1–1) cho chất điểm khảo sát, ta có :

$$m\vec{a} = \vec{P} + \vec{T}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_1_1.svg" alt="Hình 1-1" class="figure-img" />
  <p class="figure-caption">Hình 1–1</p>
</div>

Chọn trục toạ độ $Oz$ hướng thẳng đứng từ dưới lên. Chiếu phương trình vectơ trên đây lên trục $Oz$ :

$$ma = -P + T$$

Từ đây rút ra sức căng dây $T$ là :

$$T = m(g + a)$$

*Nhận xét :* Nếu gia tốc $a$ hướng xuống thì sức căng $T$ của dây sẽ là :

$$T = m(g - a)$$

Như vậy khi vật được kéo lên nhanh dần hoặc hạ xuống nhanh dần với gia tốc có trị số $a$ thì sức căng của dây sẽ bằng trọng lượng của vật cộng thêm hoặc trừ đi đại lượng $ma$.

$$T = P \pm ma$$

Nếu $a = 0$ tức là vật được kéo lên hạ xuống không có gia tốc thì $T = P$. Ta gọi đó là sức căng tĩnh của dây.

Sức căng của dây trong điều kiện chuyển động có gia tốc của vật nặng bằng sức căng tĩnh cộng thêm hoặc trừ bớt một lực (phụ thuộc vào gia tốc của vật) được gọi là phản lực động lực.

---

#### Thí dụ 1–2

Điểm $M$ chuyển động trên mặt phẳng $xOy$ có khối lượng $m$ và theo quy luật : $x = A\cos kt$ ; $y = B\sin kt$,

$A, B, k$, là những hằng số ; $x, y$ tính bằng mét, $t$ tính bằng giây.

Hãy xác định lực $\vec{F}$ tác dụng lên chất điểm đó ?

**Bài giải.** Nhận xét đầu tiên : Nếu tìm cách loại bỏ $t$ ra khỏi phương trình chuyển động trên ta nhận được phương trình quỹ đạo :

$$\frac{x^2}{A^2} + \frac{y^2}{B^2} = 1$$

Đây là phương trình elíp. Vậy quỹ đạo của điểm khảo sát là một đường elíp (H. 1–2).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_1_2.svg" alt="Hình 1-2" class="figure-img" />
  <p class="figure-caption">Hình 1–2</p>
</div>

Để giải bài toán này ta gọi lực $\vec{F}$ là hợp lực tác dụng vào chất điểm.

Phương trình vi phân chuyển động của chất điểm dưới dạng toạ độ Đề các :

$m\ddot{x} = X$ ; $m\ddot{y} = Y$, trong đó $\ddot{x}, \ddot{y}$ là hình chiếu của $\vec{a}$ lên các trục $Ox$ và $Oy$ ; $X, Y$ là hình chiếu của $\vec{F}$ lên hai trục đó.

Theo đề ra : $x = A\cos kt$, $y = B\sin kt$,

suy ra :

$$\begin{aligned}
\ddot{x} &= -Ak^2\cos kt = -k^2 x, \\
\ddot{y} &= -Bk^2\sin kt = -k^2 y.
\end{aligned}$$

Do đó ta có :

$$\begin{aligned}
X &= -k^2 mx \, ; \\
Y &= -k^2 my.
\end{aligned}$$

Nếu gọi $\vec{r}$ là bán kính vectơ của chất điểm với hình chiếu lên các trục toạ độ là $x, y$ thì có thể viết lại kết quả vừa nhận được trên dưới dạng vectơ :

$$\vec{F} = -k^2 m\vec{r}$$

Biểu thức này chứng tỏ rằng lực tác dụng lên chất điểm buộc nó chuyển động theo quỹ đạo êlip trên đây, tỉ lệ với khối lượng $m$ và khoảng cách từ chất điểm đến gốc toạ độ. Lực này luôn luôn hướng về gốc toạ độ $O$, chính là tâm của quỹ đạo của động điểm. Thí dụ về lực này ta có thể nêu, chẳng hạn, lực đàn hồi.

---

#### Thí dụ 1–3

Một máy bay bổ nhào trong mặt phẳng thẳng đứng rồi lái ngoặt lên. Ở điểm thấp nhất của quỹ đạo máy bay có vận tốc $v = 1000\text{ km/giờ}$ và bán kính cong của quỹ đạo là $R = 600\text{ m}$. Khối lượng của người lái là $80\text{ kg}$. Tìm áp lực pháp tuyến do người lái tác dụng lên ghế ngồi ở vị trí thấp nhất đó của quỹ đạo.

**Bài giải.** Xem người lái như một chất điểm chuyển động theo đường cong $(C)$, trong mặt phẳng thẳng đứng, chịu tác dụng của trọng lực $\vec{P}$ và phản lực $\vec{R}$ của ghế ngồi. Trong đó $\vec{R}$ có thể phân tích theo hai phương tiếp tuyến và pháp tuyến với quỹ đạo tại điểm đó (H. 1–3).

$$\vec{R} = \vec{T} + \vec{N}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_1_3.svg" alt="Hình 1-3" class="figure-img" />
  <p class="figure-caption">Hình 1–3</p>
</div>

Ta có phương trình vi phân chuyển động dạng vectơ :

$$m\vec{a} = \vec{P} + \vec{T} + \vec{N} \tag{a}$$

Để tính phản lực pháp tuyến $\vec{N}$, ta chiếu hai vế của phương trình (a) lên phương pháp tuyến chính, ta có :

$$ma^n = -P + N \tag{b}$$

Từ (b) ta suy ra :

$$N = P + m\frac{v^2}{R} = m\left(\frac{v^2}{R} + g\right)$$

Thay các giá trị bằng số đã cho : $m = 80\text{ kg}$, $v = 1000\text{ km/giờ} = \dfrac{2500}{9}\text{ m/s}$ ; $R = 600\text{ m}$, lấy $g = 9{,}81\text{ m/s}^2$, ta được :

$$N = 80\left(\frac{2500^2}{9^2 \cdot 600} + 9{,}81\right) \approx 11{,}073\text{ kN}.$$

Vậy người lái đã ép lên mặt ghế một áp lực pháp tuyến bằng $11{,}073\text{ kN}$, giống như trong điều kiện tĩnh người ấy nặng lên gấp 14 lần. Trong điều kiện ấy người lái, ghế, giá đỡ, ổ đỡ v.v.. đều phải làm việc ở trạng thái chịu siêu tải trọng.

---

## 1.3. BÀI TOÁN THỨ HAI CỦA ĐỘNG LỰC HỌC ĐỐI VỚI CHẤT ĐIỂM

### 1.3.1. Hướng dẫn áp dụng

Biết lực tác dụng lên chất điểm, tức là biết được vế bên phải trong các phương trình vi phân đã nêu trong bảng tóm tắt ở trên. Vậy để tìm luật chuyển động của chất điểm ta phải tích phân các phương trình vi phân chuyển động đó.

Trên thực tế tùy theo bản chất vật lý của lực tác dụng $\vec{F}$ mà những yếu tố xác định lực ở vế phải của các phương trình trên đây là không đổi, hoặc là những hàm đối với thời gian, đối với vận tốc, đối với vị trí của chất điểm... Những lực đó xác định dạng của các phương trình vi phân nhận được và do đó tương ứng với mỗi loại phương trình ta có các phương pháp tích phân khác nhau.

Hệ phương trình vi phân chuyển động của chất điểm là hệ phương trình vi phân cấp hai, do đó khi tích phân hệ phương trình ấy ta nhận được nghiệm tổng quát của bài toán dưới dạng các hàm của thời gian và chứa các hằng số tích phân. Nghiệm tổng quát xác định một lớp chuyển động có thể xảy ra bao gồm chuyển động thực của chất điểm. Để xác định nghiệm ứng với chuyển động thực ta cần phải xác định các hằng số tích phân trong nghiệm tổng quát nhờ điều kiện đầu của bài toán.

Đó là những điều kiện xác định vị trí và vận tốc của chất điểm ở thời điểm $t_o$ nào đó được gọi là các điều kiện đầu của bài toán. Thường ta lấy $t_o = 0$. Nghiệm của bài toán nhận được khi đã xác định được các hằng số tích phân được gọi là nghiệm riêng của bài toán.

Để giải các bài toán ngược đối với chất điểm ta theo các bước như sau :

– Khảo sát chất điểm ở một vị trí bất kỳ và đặt các lực tác dụng lên nó. Viết phương trình vi phân chuyển động thích hợp (Đề-các hay tự nhiên,...) và các điều kiện đầu của chuyển động.

– Tích phân phương trình nhận được để có nghiệm tổng quát của bài toán. Trên cơ sở điều kiện đầu cho, xác định các hằng số tích phân để cuối cùng nhận được nghiệm riêng của bài toán.

### 1.3.2. Bài giải mẫu

Trong các thí dụ và bài toán sẽ cho dưới đây ta phân biệt các chuyển động thẳng và chuyển động cong của chất điểm. Việc tích phân phương trình chuyển động phụ thuộc vào dạng của lực tác dụng nên ta sẽ phân loại các chuyển động đó theo dạng lực tác dụng. Dưới đây chúng ta chỉ xét một số trường hợp đơn giản : lực hằng, lực phụ thuộc vào thời gian, lực phụ thuộc vào vị trí và lực phụ thuộc vận tốc của chất điểm hoặc tổ hợp các yếu tố này. Như sau này sẽ thấy, các trường hợp như vậy rất quan trọng, bởi vì nhiều bài toán có thể đưa về một trong các dạng này.

#### A – BÀI TOÁN CHUYỂN ĐỘNG THẲNG

Đối với các chuyển động của chất điểm có quỹ đạo thẳng bao giờ cũng chọn ngay đường thẳng quỹ đạo của chất điểm làm trục $Ox$. Khi ấy phương trình vi phân chuyển động cùng với điều kiện đầu của chuyển động của chất điểm được viết :

$$\begin{cases}
m\ddot{x} = F_x, \\
\dot{x}(0) = v_o, \\
x(0) = x_o.
\end{cases} \tag{1–4}$$

ở đó $F_x$ là hình chiếu trên trục $Ox$ của hợp lực tác dụng lên chất điểm.

---

#### Thí dụ 1–4

Một đoàn tàu chuyển động trên một đường thẳng nằm ngang với vận tốc không đổi $v_o$. Vào một thời điểm nào đó người ta tắt máy và hãm tàu lại. Lực hãm và cản tổng hợp tác dụng lên tàu bằng $1/10$ trọng lượng của nó. Hãy xác định chuyển động của tàu từ khi tắt máy và hãm, (H. 1–4).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_1_4.svg" alt="Hình 1-4" class="figure-img" />
  <p class="figure-caption">Hình 1–4</p>
</div>

**Bài giải.** Khảo sát đoàn tàu như một chất điểm có khối lượng $m$.

Các lực tác dụng lên chất điểm gồm :

– Trọng lượng $\vec{P}$, phản lực pháp tuyến $\vec{N}$, lực cản ngang $\vec{F}$.

Chọn trục $x$ hướng theo phương ngang, gốc $O$ là điểm mà từ đó tàu được tắt máy và bắt đầu hãm với thời điểm lúc đó $t_o = 0$.

Theo (1–4), phương trình vi phân chuyển động cùng với điều kiện đầu được viết như sau :

$$\begin{cases}
m\ddot{x} = -F, \\
\dot{x}(0) = v_o, \\
x(0) = 0
\end{cases}$$

Vì $F = \dfrac{1}{10}P$, nên :

$$m\ddot{x} = -\frac{mg}{10} \to \ddot{x} = -\frac{g}{10}$$

Tích phân phương trình này ta được :

$$\begin{cases}
\dot{x} = -\dfrac{g}{10}t + c_1, \\[8pt]
x = -\dfrac{g}{20}t^2 + c_1 t + c_2.
\end{cases}$$

Để xác định các hằng số $c_1, c_2$ bằng cách thay thế điều kiện đầu vào ta có ngay :

$$c_1 = v_o, \quad c_2 = 0.$$

Cuối cùng phương trình chuyển động của chất điểm sẽ là :

$$x = v_o t - \frac{gt^2}{20}.$$

*Nhận xét :* Từ kết quả nhận được ta thấy đoàn tàu chuyển động chậm dần đều với vận tốc đầu là $v_o$ và với gia tốc là $\dfrac{g}{10}$. Tàu sẽ dừng hẳn ở thời điểm $t_1$ được tìm từ điều kiện $v(t_1) = 0$ :

$$v(t_1) = \dot{x}(t_1) = v_o - \frac{gt_1}{10} = 0.$$

Từ đây tìm được : $t_1 = \dfrac{10v_o}{g}$.

Quãng đường mà đoàn tàu còn chạy thêm được kể từ khi tắt máy là :

$$\begin{aligned}
x(t_1) &= -\frac{g}{20}\left(\frac{10v_o}{g}\right)^2 + v_o\left(\frac{10v_o}{g}\right) \\
&= \frac{5v_o^2}{g}.
\end{aligned}$$

---

#### Thí dụ 1–5

Một chất điểm có khối lượng $m$ chịu tác dụng của một lực theo phương ngang $x$ là $X = P\sin kt$, trong đó $P$ và $k$ là những hằng số đã biết. Tìm chuyển động của chất điểm biết rằng lúc ban đầu $t_o = 0$ thì chất điểm ở vị trí $x_o$ và có vận tốc là $v_o$.

**Bài giải.** Khảo sát chất điểm chuyển động theo phương ngang dưới tác dụng của lực $X$. Chọn $Ox$ theo phương ngang, $O$ là điểm gốc. Gọi $x$ là hoành độ của chất điểm.

Ta viết phương trình vi phân chuyển động của chất điểm cùng với điều kiện đầu đã cho như sau :

$$m\ddot{x} = P\sin kt,$$

$$\begin{cases}
\dot{x}(0) = v_o \\
x(0) = x_o
\end{cases}$$

Giải phương trình theo điều kiện đầu ta được :

$$m\frac{dv}{dt} = P\sin kt,$$

hay

$$\begin{cases}
m\,dv = P\sin kt\,dt \\
v = \dot{x}
\end{cases}$$

Tích phân phương trình ta nhận được :

$$mv = -\frac{P}{k}\cos kt + C_1$$

Thay $v = \dot{x}$ vào đấy ta có :

$$\frac{dx}{dt} = -\frac{P}{mk}\cos kt + C_1$$

Tích phân phương trình này ta nhận được :

$$x = -\frac{P}{mk^2}\sin kt + C_1 t + C_2$$

Sử dụng các điều kiện đầu đã cho ở trên ta tính được các hằng số tích phân $C_1$ và $C_2$ :

$$C_1 = v_o + \frac{P}{mk} \, , \quad C_2 = x_o$$

Phương trình chuyển động của chất điểm sẽ là :

$$x = x_o + \left(v_o + \frac{P}{km}\right)t - \frac{P}{k^2 m}\sin kt$$

*Nhận xét :* Phương trình chuyển động nhận được chứng tỏ chất điểm tham gia hai chuyển động :

1. Chuyển động đều :

$$x_1 = x_o + \left(v_o + \frac{P}{km}\right)t \, ;$$

2. Dao động điều hoà :

$$x_2 = -\frac{P}{k^2 m}\sin kt$$

---

#### Thí dụ 1–6

Một tàu thuỷ có khối lượng toàn bộ là $m$ mở máy chuyển động từ trạng thái đứng yên trên mặt nước yên tĩnh. Cho biết lực tổng hợp bao gồm lực phát động và lực cản tác dụng vào tàu hướng theo phương chuyển động và có cường độ là $F = A - Bv$ ; $A$ và $B$ là các hằng số dương đã cho, còn $v$ là tốc độ chuyển động của tàu.

1. Xác định vận tốc giới hạn của tàu thuỷ.

2. Xác định phương trình chuyển động của tàu.

**Bài giải.** Khảo sát tàu thuỷ như một chất điểm chuyển động thẳng ngang chịu tác dụng các lực :

– Trọng lực $\vec{P}$, lực đẩy Acsimet $\vec{N}$, lực $\vec{F}$.

Chọn trục $x$ theo phương ngang, cùng hướng với chuyển động của tàu. Chọn gốc là vị trí lúc khởi động. Phương trình vi phân (1–4) có dạng :

$$m\ddot{x} = F_x = A - B\dot{x}$$

với điều kiện đầu :

$$\begin{cases}
\dot{x}(0) = v_o = 0 \\
x(0) = 0
\end{cases}$$

Hoặc có thể viết ở dạng khác :

$$\begin{cases}
\dfrac{dv}{dt} = \dfrac{A}{m} - \dfrac{B}{m}v \\[8pt]
\dfrac{dx}{dt} = v
\end{cases}$$

với điều kiện đầu :

$$\begin{cases}
v(0) = v_o = 0, \\
x(0) = 0
\end{cases}$$

Bây giờ ta sẽ giải phương trình vi phân vừa nhận được với điều kiện đầu cho.

Trước hết nhận xét rằng tàu khởi hành từ trạng thái đứng yên với gia tốc ban đầu là :

$$a(0) = \frac{A - Bv_o}{m} = \frac{A}{m} > 0 \quad (\text{vì } v_o = 0).$$

và tại thời điểm $t$ bất kì thì

$$a = \frac{A - Bv}{m}$$

Rõ ràng là $a$ giảm dần khi $v$ tăng dần cho đến khi $v = v_\infty = \dfrac{A}{B} = \text{const}$ thì $a = 0$. Quá trình tiếp theo chất điểm chuyển động thẳng đều được gọi là chuyển động bình ổn với vận tốc không đổi $v_\infty = \dfrac{A}{B}$. Vậy suy ra rằng trong quá trình chuyển động luôn luôn có hệ thức $A - Bv > 0$. Do đó ta có thể tích phân phương trình bằng phương pháp phân li biến số :

$$\frac{dv}{\alpha - \beta v} = dt,$$

nó có thể được viết trong dạng :

$$\frac{d(\alpha - \beta v)}{\alpha - \beta v} = -\beta\,dt$$

trong đó $\alpha = \dfrac{A}{m}$, $\beta = \dfrac{B}{m}$.

Tích phân phương trình này ta nhận được

$$\ln\frac{1}{C_1}(\alpha - \beta v) = -\beta t$$

$$\frac{\alpha - \beta v}{\alpha} = C_1 e^{-\beta t}$$

Sử dụng điều kiện đầu cho ta tính được : $C_1 = 1$.

Vậy :

$$v = \frac{\alpha}{\beta}\left(1 - e^{-\beta t}\right) = \frac{A}{B}\left(1 - e^{-\beta t}\right)$$

Khi $t \to \infty$ ta nhận được :

$$v(\infty) = v_\infty = \frac{A}{B}$$

Hàm $e^{-\beta t}$ giảm rất nhanh nên trên thực tế chỉ sau khoảng thời gian không lâu có thể xem chất điểm chuyển động đều với vận tốc giới hạn $v_\infty$ được gọi là chuyển động bình ổn.

Để nhận được phương trình chuyển động với con tàu, ta tiếp tục tích phân phương trình đối với biểu thức của vận tốc, nó được viết trong dạng :

$$v \equiv \frac{dx}{dt} = \frac{A}{B}\left(1 - e^{-\beta t}\right)$$

hay $dx = \dfrac{A}{B}\left(1 - e^{-\beta t}\right)dt$,

Khi tích phân ta có

$$x = \frac{A}{B}t + \frac{A}{B\beta}e^{-\beta t} + C_2$$

Sử dụng điều kiện đã cho, ta tính được

$$C_2 = -\frac{A}{B\beta} = -\frac{mA}{B^2}$$

Vậy phương trình chuyển động của con tàu sẽ là :

$$x = \frac{A}{B}t + \frac{mA}{B^2}\left(e^{-\beta t} - 1\right)$$

---

#### Thí dụ 1–7

Một quả cầu nhỏ có khối lượng $m$ được buộc vào đầu mút của một lò xo có độ cứng $c$, đầu kia của lò xo cố định. Kéo quả cầu khỏi vị trí cân bằng một đoạn là $a$ và cho nó một vận tốc đầu $v_o$ hướng theo phương ngang từ trái sang phải, sau đó quả cầu tự chuyển động theo mặt ngang nhẵn. Tìm phương trình chuyển động của quả cầu.

**Bài giải.** Khảo sát quả cầu như một chất điểm. Lực tác dụng lên chất điểm : trọng lực $\vec{P}$, phản lực $\vec{N}$, phản lực lò xo $\vec{F}$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_1_5.svg" alt="Hình 1-5" class="figure-img" />
  <p class="figure-caption">Hình 1–5</p>
</div>

Chọn gốc toạ độ là vị trí cân bằng của lò xo (không co giãn) : $x$ là toạ độ của quả cầu đồng thời cũng là độ giãn của lò xo ; $Ox$ nằm ngang theo phương chuyển động.

Theo bài ra ta có : $F = -cx$.

Phương trình vi phân chuyển động của chất điểm dọc trục $Ox$ nằm ngang có dạng :

$$m\ddot{x} = -cx$$

hoặc

$$\ddot{x} = -\frac{c}{m}x.$$

Đặt $k^2 = \dfrac{c}{m}$ ta có

$$\ddot{x} + k^2 x = 0$$

Với điều kiện đầu :

$$\begin{cases}
\dot{x}(0) = v_o \\
x(0) = a
\end{cases}$$

Giải phương trình vi phân nhận được theo điều kiện đầu đã cho.

Ta biết nghiệm tổng quát của phương trình có dạng :

$$x = A\cos kt + B\sin kt,$$

trong đó $A, B$ là những hằng số sẽ xác định theo điều kiện đầu. Khi thay chúng vào biểu thức của nghiệm và biểu thức của vận tốc :

$$\dot{x} = -Ak\sin kt + Bk\cos kt$$

ta có

$$\begin{aligned}
\dot{x}(0) &= v_o = +kB. & &\text{Rút ra } B = v_o / k. \\
x(0) &= a = A. & &\text{Rút ra } A = a.
\end{aligned}$$

Cuối cùng ta nhận được phương trình chuyển động của quả cầu :

$$x = a\cos kt + \frac{v_o}{k}\sin kt,$$

nó còn có thể viết dưới dạng :

$$x = \sqrt{a^2 + \frac{v_o^2}{k^2}}\sin(kt + \alpha),$$

với $\text{tg}\alpha = \dfrac{ak}{v_o}$.

Quả cầu thực hiện dao động điều hoà với biên độ :

$$\sqrt{a^2 + \frac{v_o^2}{k^2}}$$

tần số $k$ và góc lệch pha ban đầu $\alpha$. Chú ý rằng nghiệm tổng quát của phương trình vi phân còn có thể viết trong dạng :

$$x = C\sin(kt + \alpha)$$

trong đó $C$ và $\alpha$ là những hằng số tích phân được xác định từ điều kiện đầu, $C$ được gọi là biên độ dao động, $\alpha$ góc lệch pha ban đầu.

Từ điều kiện đầu dễ dàng tìm được :

$$C = \sqrt{a^2 + \frac{v_o^2}{k^2}} \, ; \quad \text{tg}\alpha = \frac{ak}{v_o}$$

Bằng cách đó ta nhận lại được kết quả đã tìm trên.

---

#### Thí dụ 1–8

Một vật nặng được bắn thẳng đứng từ mặt đất với vận tốc ban đầu $v_o$ chịu tác dụng của lực hấp dẫn của quả đất $F = \dfrac{C}{z^2}$ trong đó $C$ là hằng số hấp dẫn còn $z$ là khoảng cách từ tâm quả đất đến vật nặng. Với giá trị nào của $v_o$ thì vật nặng thoát khỏi được sức hút của quả đất ? Xem như quả đất đứng yên và bỏ qua sức cản của không khí.

**Bài giải.** Khảo sát vật nặng như một chất điểm, chịu tác dụng của lực hấp dẫn $\vec{F}$.

Bài toán được giải quyết qua hai bước : tìm độ cao cực đại vật nặng đạt được ứng với giá trị $v_o$ cho trước, và tìm giá trị $v_o$ để vật nặng thoát khỏi được sức hút của quả đất.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_1_6.svg" alt="Hình 1-6" class="figure-img" />
  <p class="figure-caption">Hình 1–6</p>
</div>

Lấy đường thẳng đứng – đường thẳng quỹ đạo định hướng lên trên – làm trục $z$. Chọn gốc toạ độ là tâm quả đất và gốc tính thời gian $t_o = 0$, là thời điểm lúc bắn vật lên (H. 1–6).

Phương trình vi phân chuyển động của chất điểm :

$$m\ddot{z} = -F$$

hay

$$m\ddot{z} = -\frac{C}{z^2} \tag{a}$$

với điều kiện đầu :

$$\begin{cases}
\dot{z}(0) = v_o \\
z(0) = R. \quad (R \text{ là bán kính của quả đất})
\end{cases} \tag{b}$$

Trước hết ta xác định hằng số $C$.

Trên mặt đất, tức là khi $z = R$, lực hấp dẫn chính bằng trọng lượng của vật :

$$F(R) = P = mg.$$

Suy ra : $\dfrac{C}{R^2} = mg$.

Tức là : $C = mgR^2$.

Phương trình (a) trở thành :

$$\ddot{z} = \frac{-gR^2}{z^2} \tag{a'}$$

Để tích phân phương trình (a') ta chú ý rằng :

$$\begin{aligned}
\ddot{z} &= \frac{d\dot{z}}{dt} = \frac{d\dot{z}}{dz} \cdot \frac{dz}{dt} = \dot{z}\frac{d\dot{z}}{dz} \\
&= \frac{d}{dz}\left(\frac{\dot{z}^2}{2}\right) = \frac{d}{dz}\left(\frac{v^2}{2}\right).
\end{aligned}$$

Phương trình (a') trở thành :

$$\frac{d}{dz}\left(\frac{v^2}{2}\right) = -\frac{gR^2}{z^2} \tag{a''}$$

Phân li biến số rồi tích phân với điều kiện đầu (b), ta có kết quả :

$$\frac{v^2}{2} = \frac{gR^2}{z} + C_1 \, ; \quad C_1 = \frac{v_o^2}{2} - gR$$

Vậy :

$$v^2 = v_o^2 - 2gR + \frac{2gR^2}{z} \tag{c}$$

Từ (c) ta suy ra độ cao cực đại của chất điểm ứng với $v_o$, ta có $v(z_{\max}) = 0$. Suy ra :

$$z_{\max} = \frac{2gR^2}{2gR - v_o^2} \tag{d}$$

Từ (c) hoặc từ (d) nếu cho $z_{\max} = \infty$, ta tính được giá trị vận tốc ban đầu cần thiết để chất điểm thoát khỏi sức hút của quả đất mà ta kí hiệu là $v_\infty$ :

$$v_\infty = \sqrt{2gR}$$

Nếu lấy $g = 9{,}8\text{ m/s}^2$, $R = 6{,}4 \cdot 10^6\text{ m}$ thì tính được $v_\infty = 11\,000\text{ m/s} = 11\text{ km/s}$, nó được gọi là vận tốc vũ trụ cấp hai.

Thay $v = \dfrac{dz}{dt}$ trong hệ thức (c) rồi giải ra thì sẽ nhận được phương trình vi phân sau :

$$\frac{dz}{dt} = \sqrt{\frac{a + bz}{z}} \tag{f}$$

trong đó : $a = 2gR^2$ ; $b = v_o^2 - 2gR$.

Ta phải tích phân phương trình (f) với điều kiện đầu :

$$z(0) = R \tag{g}$$

Độc giả có thể tự tiến hành các phép tính cho đến kết quả cuối cùng.

---

#### Thí dụ 1–9

Vật $A$ khối lượng $m$ đặt trên lò xo có hệ số cứng $c$, chuyển động theo phương thẳng đứng dưới tác dụng lực là hàm điều hoà của thời gian, $S = H\cos\Omega t$, và lực cản nhớt tỉ lệ bậc nhất với vận tốc, $R = \beta v$ ($c, H, \Omega, \beta$ là những hằng số). Tại thời điểm đầu vật nằm tại vị trí cân bằng tĩnh. Tìm phương trình chuyển động của vật $A$. Cho $m = 0{,}196\text{ kg}$ ; $H = 15{,}7\text{ kN}$ ; $\Omega = 60\text{ rad/s}$ ; $c = 19{,}6\text{ N/cm}$ ; $\beta = 25\text{ Ns/m}$ (H. 1–7).

**Bài giải.** Khảo sát chuyển động của vật $A$ (xem là chất điểm) theo phương thẳng đứng dưới tác dụng các lực gồm trọng lực $\vec{P}$, lực đàn hồi lò xo $\vec{F}$, lực cản $\vec{R}$ và lực kích động $\vec{S}$.

Chọn trục $x$ hướng thẳng đứng xuống, gốc $O$ ứng với vị trí cân bằng tĩnh (khi không gắn vật $A$, đầu mút lò xo ở vị trí $O_1$ ; $O_1 O = \delta_o$ được gọi là độ giãn tĩnh của lò xo). Phương trình vi phân chuyển động dọc trục $Ox$ của vật $A$ là :

$$m\ddot{x} = P - c(x + \delta_o) - \beta\dot{x} + H\sin\Omega t$$

Trong trường hợp này có thể xem chất điểm $A$ chịu tác dụng của hợp lực là hàm của thời gian, vận tốc và vị trí.

Vì tại vị trí cân bằng tĩnh trọng lực cân bằng với lực lò xo, tức $P = c\delta_o$ nên có thể viết phương trình vi phân chuyển động của chất điểm $A$ trong dạng :

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_1_7.svg" alt="Hình 1-7" class="figure-img" />
  <p class="figure-caption">Hình 1–7</p>
</div>

$$\ddot{x} + 2h\dot{x} + k^2 x = \overline{H}\sin\Omega t$$

trong đó :

$h = \dfrac{\beta}{2m}$ gọi là hệ số đặc trưng cho môi trường cản.

$k^2 = \dfrac{c}{m}$ – tần số riêng của dao động.

$\overline{H} = \dfrac{H}{m}$.

Như đã biết từ lí thuyết phương trình vi phân khi $h < k$ (trường hợp sức cản bé), nghiệm của phương trình vi phân chuyển động của vật $A$ có dạng như sau :

$$\begin{aligned}
x &= e^{-ht}\left(C_1\cos k_1 t + C_2\sin k_1 t\right) \\
&\quad + B\cos(\Omega t - \varphi)
\end{aligned}$$

trong đó $C_1$ và $C_2$ là các hằng số tích phân được xác định từ điều kiện đầu $x(t_o) = x_o$ ; $\dot{x}(t_o) = \dot{x}_o$ còn :

$$\begin{aligned}
k_1 &= \sqrt{k^2 - h^2} \, ; \\
B &= \frac{\overline{H}}{\sqrt{(k^2 - \Omega^2)^2 + 4h^2\Omega^2}} \\
\varphi &= \text{arctg}\frac{2h\Omega}{k^2 - \Omega^2}
\end{aligned}$$

Dao động của vật $A$ trong trường hợp này được gọi là dao động cưỡng bức có cản. Với các số liệu của bài toán, ta tính được.

$$\begin{aligned}
k &= \sqrt{\frac{c}{m}} = \sqrt{\frac{1960}{0{,}196}} = 100\text{ rad/s} \, ; \\
h &= \frac{\beta}{2m} = \frac{25}{2 \times 0{,}196} = 64\,\frac{1}{\text{s}} \\
\overline{H} &= \frac{H}{m} = \frac{15{,}7}{0{,}196} = 80\text{ m/s} \, ; \\
k_1 &= \sqrt{k^2 - h^2} = \sqrt{(100)^2 - (64)^2} = 77\text{ rad/s}
\end{aligned}$$

$$\begin{aligned}
B &= \frac{\overline{H}}{\sqrt{(k^2 - \Omega^2)^2 + 4h^2\Omega^2}} \\
&= \frac{80}{\sqrt{(100^2 - 60^2)^2 + 4 \cdot 64^2 \cdot 60^2}} \\
&= 8 \cdot 10^{-3}\text{ m}
\end{aligned}$$

$$\begin{aligned}
\varphi &= \text{arctg}\frac{2h\Omega}{k^2 - \Omega^2} \\
&= \text{arctg}\frac{2 \cdot 64 \cdot 60}{(100)^2 - (60)^2} \\
&= \text{arctg}\, 1{,}2 = 0{,}87\text{ rad.}
\end{aligned}$$

Số hạng thứ nhất trong biểu thức của $x$ giảm nhanh theo thời gian, tức môi trường cản dập tắt nhanh thành phần dao động với tần số $k_1$ (dao động tắt dần). Vậy trong chế độ bình ổn vật $A$ sẽ dao động theo luật :

$$x = B\cos(\Omega t - \varphi) = 8\cos(60t - 0{,}87)\text{ (mm)}$$

tức sẽ dao động với tần số của lực kích động và chậm pha $\varphi$ so với pha của lực kích động.

Trong trường hợp không kể đến sức cản môi trường ($h \equiv 0$), phương trình vi phân chuyển động của vật $A$ có dạng :

$$\ddot{x} + k^2 x = \overline{H}\cos\Omega t$$

Nghiệm của phương trình này sẽ là :

$$x = C_1\cos kt + C_2\sin kt + B_o\cos(\Omega t - \varphi)$$

trong đó : $k = \sqrt{\dfrac{c}{m}}$ ; $B_o = \dfrac{\overline{H}}{|k^2 - \Omega^2|}$

$\varphi = 0$ nếu $k > \Omega$ và $\varphi = \pi$ nếu $k < \Omega$, các hằng số tích phân $C_1, C_2$ được xác định từ điều kiện đầu.

Dao động của vật $A$ trong trường hợp này được gọi là dao động cưỡng bức không cản, nó gồm hai thành phần : thành phần đầu là dao động với tần số dao động tự do, còn thành phần thứ hai – dao động với tần số dao động của lực kích động ; thành phần sau cũng được gọi là dao động cưỡng bức trong chế độ bình ổn.

Chú ý là những kết quả vừa nhận ở trên có thể có được bằng cách khảo sát trực tiếp phương trình vi phân của dao động cưỡng bức không cản hoặc từ các kết quả của dao động cưỡng bức có cản, trong đó lấy $h \equiv 0$ (khi đó $k_1 = k$ ; $\varphi = 0$ hoặc $\pi$).

---

#### B – BÀI TOÁN CHUYỂN ĐỘNG CONG

Có thể gặp các chuyển động của vật được coi như một chất điểm mà quỹ đạo của nó là một đường cong phẳng hoặc đường cong bất kỳ trong không gian. Nếu quỹ đạo là phẳng thì ta chọn ngay mặt phẳng đó làm mặt phẳng quy chiếu $xy$. Khi ấy phương trình vi phân chuyển động trong toạ độ Đề các có dạng :

$$\begin{aligned}
m\ddot{x} &= \sum_{k=1}^{n} X_k, \\
m\ddot{y} &= \sum_{k=1}^{n} Y_k,
\end{aligned}$$

với các điều kiện đầu :

$$\begin{aligned}
\dot{x}(0) &= \dot{x}_o \, ; \quad x(0) = x_o \, ; \\
\dot{y}(0) &= \dot{y}_o \, ; \quad y(0) = y_o
\end{aligned}$$

Nếu đường cong quỹ đạo không nằm trong một mặt phẳng thì phải viết cả ba phương trình vi phân chuyển động trong toạ độ Đềcác (hay trong toạ độ thích hợp khác), trong đó có chứa cả ba toạ độ và các đạo hàm của chúng. Nói chung, đó là hệ phương trình vi phân phi tuyến. Khi ấy phải tìm các nghiệm gần đúng. Tuy nhiên trong trường hợp chuyển động khảo sát là tổng hợp của ba chuyển động thẳng độc lập ta có thể giải từng phương trình và có thể nhận được nghiệm của bài toán, theo các trường hợp đã khảo sát ở trên. Sau đây ta xét một số thí dụ.

---

#### Thí dụ 1–10

Một viên đạn được bắn đi trong trọng trường đều với vận tốc đầu $v_o$ nghiêng với phương ngang một góc $\alpha$. Khối lượng của viên đạn là $m$, gia tốc trọng trường là $g$, lực cản của không khí tác dụng lên viên đạn là $\vec{R} = -mgk\vec{v}$, trong đó $k$ là hằng số tỷ lệ đã biết.

Viết phương trình chuyển động của viên đạn.

**Bài giải.** Xem viên đạn như một chất điểm chuyển động dưới tác dụng của trọng lực $\vec{P}$ và lực cản không khí $\vec{R} = -mgk\vec{v}$.

Chọn hệ trục toạ độ Đềcác như sau : gốc $O$ trùng với miệng nòng súng, trục $Oy$ hướng thẳng đứng lên, trục $Ox$ nằm ngang và nằm trong mặt phẳng chứa vectơ vận tốc đầu $\vec{v}_o$ của viên đạn và trục $Oy$ ; trục $Oz$ thẳng góc với các trục $Ox$ và $Oy$, tức thẳng góc với vectơ $\vec{v}_o$, (H. 1–8).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_1_8.svg" alt="Hình 1-8" class="figure-img" />
  <p class="figure-caption">Hình 1–8</p>
</div>

Viết phương trình vi phân chuyển động dạng vectơ.

$$m\vec{a} = \vec{P} + \vec{R} \tag{a}$$

Chiếu đẳng thức vectơ (a) lên các trục toạ độ ta nhận được hệ phương trình vi phân chuyển động :

$$\begin{aligned}
m\ddot{x} &= -mgkv_x = -mgk\dot{x} \\
m\ddot{y} &= -P - mgkv_y = -mg - mgk\dot{y} \\
m\ddot{z} &= -mgkv_z = -mgk\dot{z}
\end{aligned}$$

Sau khi rút gọn ta được :

$$\begin{cases}
\ddot{x} = -gk\dot{x} \\[6pt]
\ddot{y} = -gk\left(\dfrac{1}{k} + \dot{y}\right) \\[8pt]
\ddot{z} = -gk\dot{z}
\end{cases} \tag{b}$$

Chọn gốc thời gian là lúc viên đạn ra khỏi nòng súng, ta có các điều kiện đầu như sau :

$$\begin{aligned}
\dot{x}(0) &= v_o\cos\alpha \, ; & x(0) &= 0 \, ; \\
\dot{y}(0) &= v_o\sin\alpha \, ; & y(0) &= 0 \, ; \\
\dot{z}(0) &= 0 \, ; & z(0) &= 0
\end{aligned} \tag{c}$$

Hệ phương trình (b) gồm ba phương trình độc lập, vậy có thể tích phân riêng từng phương trình theo các điều kiện đầu tương ứng.

Trước hết ta tìm $x = x(t)$ nhờ tích phân phương trình $(\text{b})_1$ : $\ddot{x} = -gk\dot{x}$. Nhờ phương pháp hạ cấp rồi phân ly biến ta được :

$$\frac{d\dot{x}}{dt} = -gk\dot{x} \, ; \quad \text{hoặc } \frac{d\dot{x}}{\dot{x}} = -gk\,dt$$

Từ đó : $\dot{x} = C_1 e^{-gkt}$.

Khi thay điều kiện đầu $\dot{x}(0) = v_o\cos\alpha$, ta có

$$C_1 = \dot{x}(0) = v_o\cos\alpha.$$

Do đó : $\dot{x} = \dfrac{dx}{dt} = \dot{x}(0)e^{-gkt} = v_o\cos\alpha \cdot e^{-gkt}$.

Bây giờ tích phân phương trình vừa nhận được với điều kiện đầu $x(0) = 0$ ta có kết quả

$$\begin{aligned}
x &= \frac{\dot{x}(0)}{gk}\left(1 - e^{-gkt}\right) + x(0) \\
&= \frac{v_o\cos\alpha}{gk}\left(1 - e^{-gkt}\right)
\end{aligned} \tag{d}$$

Nhận xét rằng các phương trình $(\text{b})_1$ và $(\text{b})_3$ có cùng dạng và chỉ khác nhau điều kiện đầu nên dễ dàng tìm được :

$$\begin{aligned}
\dot{z} &= \dot{z}(0)e^{-gkt} = 0 \, ; \\
z &= \frac{\dot{z}(0)}{gk}\left(1 - e^{-gkt}\right) + z(0) = 0
\end{aligned} \tag{e}$$

Cũng bằng phương pháp tương tự, tích phân phương trình $(\text{b})_2$ : $\ddot{y} = -gk\left(\dfrac{1}{k} + \dot{y}\right)$ với điều kiện đầu : $\dot{y}(0) = v_o\sin\alpha$, $y(0) = 0$, ta có kết quả :

$$y = \frac{1}{gk}\left(\frac{1}{k} + v_o\sin\alpha\right)\left(1 - e^{-gkt}\right) - \frac{t}{k} \tag{f}$$

Vậy viên đạn chuyển động trong mặt phẳng đứng chứa nòng súng theo các phương trình

$$\begin{aligned}
x &= \frac{v_o\cos\alpha}{gk}\left(1 - e^{-gkt}\right) \\
y &= \frac{1}{gk}\left(\frac{1}{k} + v_o\sin\alpha\right)\left(1 - e^{-gkt}\right) - \frac{t}{k}
\end{aligned} \tag{g}$$

*Nhận xét :* Sau đây ta nhận xét thêm một vài đặc điểm của chuyển động đó. Khử $t$ giữa hai phương trình trong (g) ta nhận được phương trình quỹ đạo :

$$\begin{aligned}
y &= \left(\frac{1}{k} + v_o\sin\alpha\right)\frac{x}{v_o\cos\alpha} \\
&\quad + \frac{1}{gk^2}\ln\left|\frac{gk}{v_o\cos\alpha}x - 1\right|.
\end{aligned}$$

Chú ý rằng : $\lim\limits_{t \to \infty} x = \dfrac{v_o\cos\alpha}{gk}$, ta thấy quỹ đạo có đường tiệm cận đứng như trên hình 1–9. Nghĩa là sau một khoảng thời gian đủ lớn, viên đạn gần như rơi thẳng đứng với vận tốc giới hạn.

$$v_1 = \lim_{t \to \infty} v_y = -\frac{1}{k}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_1_9.svg" alt="Hình 1-9" class="figure-img" />
  <p class="figure-caption">Hình 1–9</p>
</div>

Độc giả có thể tự tìm độ cao cực đại viên đạn có thể đạt được $y_{\max} = H$ và độ xa tương ứng $S$.

---

#### Thí dụ 1–11

Một chất điểm $M$ chuyển động dưới tác dụng của một lực đàn hồi tỷ lệ thuận với khoảng cách từ $M$ đến điểm cố định $O$, $\vec{F} = -k^2 m\vec{r}$, trong đó $\vec{r}$ là bán kính vectơ của điểm $M$, $m$ là khối lượng chất điểm, $k^2$ – hằng số tỷ lệ.

Hãy xác định quỹ đạo của chất điểm nếu thời điểm đầu nó có vị trí $M_o\!\left(A, -\dfrac{g}{k^2}\right)$ và có vận tốc $\vec{v}_o$ có phương thẳng đứng (xem H. 1–10).

**Bài giải.** Khảo sát chất điểm $M$ chuyển động dưới tác dụng của trọng lực $\vec{P}$ và lực đàn hồi $\vec{F}$ hướng về điểm $O$ cố định.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_1_10.svg" alt="Hình 1-10" class="figure-img" />
  <p class="figure-caption">Hình 1–10</p>
</div>

Chọn hệ trục toạ độ Đề các như sau : gốc hệ trục là điểm $O$ cố định mà lực đàn hồi tác dụng lên chất điểm $M$ hướng vào, trục $Ox$ hướng nằm ngang từ trái sang phải, trục $Oy$ hướng thẳng đứng lên trên.

Viết phương trình vi phân chuyển động của chất điểm $M$ trong dạng vectơ

$$m\vec{a} = \vec{P} + \vec{F}$$

hoặc sau khi rút gọn và sắp xếp lại ta được :

$$\ddot{\vec{r}} + k^2\vec{r} = -\vec{g} \tag{a}$$

Khi chiếu hai vế của (a) lên hai trục toạ độ $Ox$ và $Oy$, ta có :

$$\ddot{x} + k^2 x = 0 \tag{b}$$

$$\ddot{y} + k^2 y = -g \tag{c}$$

Để tìm chuyển động của chất điểm ta tích phân các phương trình vi phân (b) và (c) với các điều kiện đầu :

$$t = 0 \quad \begin{cases} x(0) = A \\ \dot{x}(0) = 0 \end{cases} \quad \begin{cases} y(0) = -\dfrac{g}{k^2} \, ; \\ \dot{y}(0) = v_o \end{cases} \tag{d}$$

Phương trình (b) là phương trình vi phân tuyến tính thuần nhất cấp hai với hệ số hằng số. Nghiệm tổng quát của nó có dạng :

$$x = C_1\cos kt + C_2\sin kt \tag{e}$$

Trong đó $C_1, C_2$ là hằng số tích phân. Để xác định $C_1, C_2$ ta tính :

$$\dot{x} = -C_1 k\sin kt + C_2 k\cos kt \tag{f}$$

sau đó thay điều kiện đầu (d) vào (e) và (f) tìm được $C_1 = A$, $C_2 = 0$. Do đó ta có :

$$x = A\cos kt \tag{g}$$

Phương trình vi phân (c) khác phương trình (b), vì (c) là phương trình không thuần nhất, nghiệm tổng quát của nó có dạng :

$$y = y_1 + y_2, \tag{h}$$

trong đó : $y_2$ là nghiệm riêng của phương trình không thuần nhất, còn $y_1$ là nghiệm tổng quát của phương trình thuần nhất tương ứng :

$$\ddot{y} + k^2 y = 0 \tag{j}$$

Nghiệm của phương trình này cũng có dạng :

$$y_1 = C_3\cos kt + C_4\sin kt \tag{k}$$

Vế bên phải của phương trình (c) là hằng số, cho nên nghiệm riêng của nó có dạng $y_2 = C$, trong đó $C$ là hằng số. Để tìm $C$ ta thay $y_2$ vào (c) dễ dàng tìm được :

$$y_2 = -\frac{g}{k^2} \tag{l}$$

Vậy nghiệm $y$ của phương trình (c) có dạng :

$$y = C_3\cos kt + C_4\sin kt - \frac{g}{k^2} \tag{m}$$

Các hằng số $C_3, C_4$ được xác định bởi các điều kiện đầu (d). Tương tự như tìm $C_1, C_2$ ta có thể nhận được :

$$C_3 = 0, \quad C_4 = \frac{v_o}{k}$$

Thay vào (m) ta có nghiệm

$$y = \frac{v_o}{k}\sin kt - \frac{g}{k^2} \tag{n}$$

Như vậy phương trình chuyển động của chất điểm $M$ là :

$$x = A\cos kt \, ; \quad y = \frac{v_o}{k}\sin kt - \frac{g}{k^2}$$

Khi khử tham số $t$ trong phương trình chuyển động ta nhận được phương trình quỹ đạo :

$$\frac{x^2}{A^2} + \frac{\left(y + \dfrac{g}{k^2}\right)^2}{\left(\dfrac{v_o}{k}\right)^2} = 1.$$

Đây là phương trình êlip với tâm có toạ độ $\left(0, -\dfrac{g}{k^2}\right)$ và các bán trục $A$ và $\dfrac{v_o}{k}$.

*Chú thích :* Có thể đưa phương trình (c) về dạng phương trình (b) nhờ phép biến đổi biến sau :

$$u = y + \frac{g}{k^2}$$

Thực vậy, từ phép biến đổi biến trên ta có :

$$\ddot{y} = \ddot{u} \, ; \quad y = u - \frac{g}{k^2}$$

và khi thay chúng vào phương trình (c) ta nhận được phương trình vi phân đối với biến $u$ :

$$\ddot{u} + k^2 u = 0$$

Tức có dạng phương trình (b).

---

## 1.4. BÀI TẬP

### Bài toán thứ nhất của động lực học chất điểm

**1.1.** Bàn máy bào có khối lượng $m_1 = 700\text{ kg}$, vật gia công có khối lượng $m_2 = 300\text{ kg}$. Vận tốc bình ổn trong hành trình là $v = 0{,}5\text{ m/s}$, thời gian lấy đà là $T = 0{,}5\text{ s}$.

Xác định lực cần thiết để lấy đà (xem chuyển động của bàn trong khoảng thời gian này là nhanh dần đều) và lực để duy trì bàn máy chuyển động đều trong quá trình chuyển động bình ổn tiếp theo. Cho biết hệ số ma sát trượt động lúc lấy đà là $f_1 = 0{,}14$ và lúc chuyển động đều là $f_2 = 0{,}07$.

*Trả lời :* $P_1 = 2374\text{ N}$, $P_2 = 686{,}7\text{ N}$.

---

**1.2.** Một xe goòng có khối lượng là $700\text{ kg}$ đang chạy xuống dốc dọc theo đường ray thẳng và nghiêng với mặt ngang một góc $15^\circ$.

Để giữ cho xe chạy đều ta dùng dây cáp song song với mặt dốc. Vận tốc chạy đều của xe là $1{,}6\text{ m/s}$. Xác định lực căng của dây cáp lúc xe chạy đều và khi nó bị hãm dừng lại trong 4 giây. Hệ số cản chuyển động tổng cộng là $f = 0{,}015$, và lúc hãm coi rằng xe chạy chậm dần đều.

*Trả lời :* $S_1 = 1682{,}4\text{ N}$, $S_2 = 1963\text{ N}$.

---

**1.3.** Một đoàn tàu hoả không kể đầu máy có khối lượng là $200$ tấn chạy nhanh dần trên đoạn ray thẳng nằm ngang. Sau $60$ giây kể từ lúc bắt đầu chạy nó đạt tới vận tốc $54\text{ km/giờ}$. Tính lực kéo của đầu máy lên đoạn toa ở chỗ móc nối trong chuyển động đó, biết rằng lực cản chuyển động bằng $0{,}005$ trọng lượng của đoàn tàu.

*Trả lời :* $F = 59840\text{ N}$.

---

**1.4.** Một máy bay có khối lượng là $2000\text{ kg}$ bay thẳng ngang với gia tốc $5\text{ m/s}^2$. Lực cản của không khí hướng ngược chiều với vận tốc và tỷ lệ với bình phương của vận tốc, có cường độ là $0{,}49\text{ N}$ khi vận tốc có giá trị bằng $1\text{ m/s}$. Xác định lực kéo của cánh quạt máy bay lúc đó đạt tốc độ $200\text{ m/s}$. Lực này tạo với hướng bay một góc $10^\circ$.

*Trả lời :* $F = 30{,}215\text{ kN}$.

---

**1.5.** Một ôtô chở hàng có khối lượng là $6$ tấn chạy xuống một chiếc phà với tốc độ là $21{,}6\text{ km/giờ}$. Từ lúc bắt đầu xuống phà đến lúc dừng hẳn xe phải chạy thêm một quãng là $10\text{ m}$, cho rằng khi ấy ôtô chuyển động chậm dần đều. Tính lực căng mỗi dây cáp (có hai dây cáp) buộc giữ phà, coi rằng dây cáp luôn luôn căng.

*Trả lời :* $T = 5395{,}5\text{ N}$.

---

**1.6.** Hòm toa tàu điện cùng với tải trọng có khối lượng $m_1 = 10\text{ tấn}$. Khung dưới và các bánh xe có khối lượng là $m_2 = 1\text{ tấn}$. Xác định lực ép lớn nhất và bé nhất của toa lên các thanh ray khi tàu chạy trên đường thẳng nằm ngang đồng thời dao động điều hoà theo phương thẳng đứng trên các lò xo đỡ theo quy luật $y = 2\sin 10t$, trong đó $y$ được tính bằng cm và $t$ tính bằng giây.

*Trả lời :* $N_1 = 127{,}922\text{ kN}$, $N_2 = 87{,}798\text{ kN}$.

---

**1.7.** Pittông của một máy bơm nước chuyển động dao động ngang theo quy luật $x = r\left(\cos\omega t + \dfrac{r}{4l}\cos 2\omega t\right)$, trong đó $r$ là chiều dài của tay quay và được tính ra mét, $l$ là chiều dài của thanh truyền cũng được tính ra mét, $\omega$ là vận tốc góc không đổi của tay quay được tính ra rad/s. Khối lượng của pittông là $m$. Xác định giá trị lớn nhất của hợp lực tác dụng lên pittông.

*Trả lời :* $F = mr\omega^2\left(1 + \dfrac{r}{l}\right)$.

---

**1.8.** Một cái sàng quặng thực hiện dao động điều hoà thẳng đứng với biên độ $a = 5\text{ cm}$. Tìm tần số $k$ nhỏ nhất của sàng để cho các hạt quặng bật được lên khỏi mặt sàng.

*Trả lời :* $k = 14\text{ rad/s}$.

---

**1.9.** Vật $M$ có khối lượng $m = 0{,}102\text{ kg}$ được treo vào một đầu dây có chiều dài $L = 0{,}3\text{ m}$, còn đầu kia của dây buộc vào điểm cố định $O$. Trong quá trình chuyển động dây làm với phương đứng một góc không đổi $\alpha = 60^\circ$, còn điểm $M$ vẽ nên đường tròn trong mặt phẳng ngang (con lắc nón).

Xác định vận tốc $v$ của vật $M$ và sức căng dây.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_1_11.svg" alt="Hình 1-11" class="figure-img" />
  <p class="figure-caption">Hình 1–11</p>
</div>

*Trả lời :* $v = 2{,}1\text{ m/s}$ ; $T = 2\text{ N}$.

---

**1.10.** Một chiếc xe đạp đi trên một đường cong bán kính $10\text{ m}$ với vận tốc $5\text{ m/s}$. Hãy tìm góc nghiêng $\alpha$ của mặt phẳng đối xứng dọc của xe đạp và phương thẳng đứng, đồng thời hệ số ma sát $f$ nhỏ nhất giữa lốp xe và mặt đường để bảo đảm cho xe đạp chạy ổn định.

*Trả lời :* $\alpha = 14^\circ 20'$, $f = 0{,}255$.

---

### Bài toán thứ hai của động lực học chất điểm

**1.11.** Một vật nặng rơi xuống giếng mỏ không vận tốc đầu. Sau thời gian $6{,}5$ giây người ta nghe thấy tiếng va đập của vật vào đáy giếng. Cho biết vận tốc của tiếng động là $330\text{ m/s}$. Tìm chiều sâu của giếng mỏ.

*Trả lời :* $175\text{ m}$.

---

**1.12.** Một người lái tàu điện bằng cách mở dần điện trở làm tăng công suất động cơ sao cho lực kéo tăng tỷ lệ với thời gian từ giá trị bằng không và mỗi giây tăng được $1177\text{ N}$. Tìm quãng đường $s$ mà toa tàu đi được trong các điều kiện cho sau đây : khối lượng toa tàu $10$ tấn, lực ma sát không đổi và bằng $1{,}96 \cdot 10^3\text{ N}$. Vận tốc đầu bằng không.

*Trả lời :* Chuyển động bắt đầu sau $5{,}3$ giây kể từ lúc đóng mạch điện, quãng đường chuyển động

$$s = 0{,}01962\left(t - \frac{5}{3}\right)^3 \text{ mét}$$

---

**1.13.** Một vật nặng chạy theo đường dốc chính của một mặt phẳng nghiêng về phía trên với vận tốc ban đầu $v_o = 15\text{ m/s}$. Mặt phẳng nghiêng tạo với mặt phẳng ngang một góc $\alpha = 30^\circ$. Cho hệ số ma sát trượt động $f = 0{,}1$. Tìm đoạn đường vật nặng đi được cho đến lúc dừng hẳn và tìm thời gian vật chạy trên quãng đường đó.

*Trả lời :*

$$\begin{aligned}
s &= \frac{v_o^2}{2g(f\cos\alpha + \sin\alpha)} = 19{,}55\text{ m} \, ; \\[6pt]
T &= \frac{v_o}{g(f\cos\alpha + \sin\alpha)} = 2{,}61\text{ s}.
\end{aligned}$$

---

**1.14.** Tìm vận tốc rơi lớn nhất của một quả cầu có khối lượng bằng $10\text{ kg}$, có bán kính bằng $8\text{ cm}$, chuyển động trong không khí chịu lực cản là $R = kSv^2$ (trong đó $v$ là vận tốc rơi, $S$ là diện tích của hình chiếu của vật rơi trên mặt phẳng thẳng góc với phương vận tốc chuyển động, $k$ là hệ số tỷ lệ và trong trường hợp này thì $k = 0{,}2352\text{ Ns}^2/\text{m}^4$).

*Trả lời :* $v_{\max} = 144\text{ m/s}$.

---

**1.15.** Một chiếc tàu thuỷ có trọng lượng là $P$ chuyển động thẳng ngang từ trạng thái nghỉ. Lực đẩy của chân vịt không đổi, bằng $Q$ và hướng theo chiều chuyển động của tàu. Lực cản của nước có giá trị là $R = \dfrac{P}{g}k^2 v^2$, trong đó $k^2$ là hệ số tỷ lệ và $v$ là vận tốc con tàu. Tìm giá trị của vận tốc giới hạn và tìm biểu thức vận tốc của con tàu hàm theo thời gian chuyển động.

*Trả lời :*

$$\begin{aligned}
v_{\text{gh}} &= \frac{1}{k}\sqrt{\frac{Q}{P}g} \, ; \\[6pt]
v &= v_{\text{gh}}\frac{e^{\alpha t} - 1}{e^{\alpha t} + 1},
\end{aligned}$$

trong đó $\alpha = 2k^2 v_{\text{gh}}$.

---

**1.16.** Một chiếc tàu lặn đang nằm yên, nhận được một trọng tải $P$ thì lặn xuống sâu theo phương thẳng đứng, trong trường hợp này có thể xem như lực cản của nước có giá trị tỷ lệ với vận tốc lặn xuống của tàu $R = kSv$, trong đó $k$ là hệ số tỷ lệ, $S$ là diện tích hình chiếu bằng của con tàu và $v$ là vận tốc lặn của tàu. Khối lượng của tàu là $m$. Tìm biểu thức vận tốc của con tàu hàm theo thời gian. Tìm khoảng thời gian $T$ cần thiết để cho vận tốc lặn xuống đạt giá trị bằng $95\%$ giá trị vận tốc giới hạn.

*Trả lời :* $v = \dfrac{P}{kS}\left(1 - e^{-\frac{kS}{m}t}\right)$ ; $T = \dfrac{m}{kS}\ln 20$.

---

**1.17.** Đoàn tàu hoả sau khi đạt tốc độ $v_o$ thì chuyển động dưới tác dụng của lực tổng hợp mà cường độ tính theo một đơn vị khối lượng của đoàn tàu đó có biểu thức

$$f(v) = a - bv + cv^2,$$

trong đó $a, b, c$ là hằng số, còn $v$ là vận tốc của đoàn tàu. Tìm biểu thức vận tốc của đoàn tàu hàm theo thời gian và tìm vận tốc giới hạn của nó.

*Trả lời :* $v = \dfrac{\alpha - \beta A e^{-c(\beta - \alpha)t}}{1 - A e^{-c(\beta - \alpha)t}}$ ; $v_{\text{gh}} = \alpha$, trong đó $A = \dfrac{\alpha - v_o}{\beta - v_o}$ ; $\alpha, \beta$ lần lượt là nghiệm lớn và nghiệm bé của phương trình $f(v) = 0$.

---

**1.18.** Từ một độ cao $h$ khá lớn, một vật nặng rơi không vận tốc đầu xuống mặt đất. Lực hút của quả đất đối với vật đó có độ lớn tỷ lệ nghịch với bình phương khoảng cách từ vật đó đến tâm quả đất. Tìm thời gian $T$ cần thiết để vật rơi chạm mặt đất và vận tốc rơi lúc đó. Bán kính quả đất là $R$ và gia tốc trọng trường ở ngay mặt đất là $g$.

*Trả lời :*

$$\begin{aligned}
v &= \sqrt{\frac{2gRh}{R + h}} \, ; \\[6pt]
T &= \frac{1}{R}\sqrt{\frac{R + h}{2g}}\left(\sqrt{Rh}\right. \\
&\quad \left.+ \frac{R + h}{2}\arccos\frac{R - h}{R + h}\right).
\end{aligned}$$

---

**1.19.** Vật $A$ có khối lượng $m = 0{,}4\text{ kg}$ gắn vào đầu một lò xo có độ cứng $c = 4\text{ kN/m}$, chuyển động theo phương thẳng đứng dưới tác dụng của lực kích động là hàm điều hoà của thời gian, $S = 40\sin 50t\text{ (N)}$ và lực cản của môi trường $\vec{R} = -\alpha\vec{v}$, trong đó $\vec{v}$ là vận tốc của vật ; $\alpha = 25\text{ Ns/m}$. Tại thời điểm đầu vật nằm yên tại vị trí cân bằng tĩnh. Tìm phương trình chuyển động của vật và xác định giá trị của tần số lực kích động để biên độ dao động cưỡng bức trong chế độ bình ổn là lớn nhất.

*Trả lời :*

1.

$$\begin{aligned}
x &= 0{,}647 e^{-31{,}25 t}\sin(95t - 46^\circ 55') \\
&\quad + 1{,}23\sin(50t - 22^\circ 36')\text{ (cm)}
\end{aligned}$$

2. Biên độ dao động cưỡng bức lớn nhất khi tần số lực kích động bằng $89{,}7\text{ rad/s}$ và bằng $1{,}684\text{ cm}$.

---

**1.20.** Để giảm lực truyền vào nền khi vật có khối lượng $m$ chịu tác dụng lực $F = F_o\sin(\Omega t + \delta)$, người ta lắp hệ thống giảm chấn gồm lò xo có độ cứng $C$ và thiết bị giảm chấn thuỷ lực có hệ số cản $\alpha$ (lực cản $\vec{R} = -\alpha\vec{v}$).

Xác định giá trị lớn nhất của áp lực động lực mà hệ thống dao động truyền vào nền trong chế độ bình ổn (H. 1–12).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_1_12.svg" alt="Hình 1-12" class="figure-img" />
  <p class="figure-caption">Hình 1–12</p>
</div>

*Trả lời :*

$$N = F_o\sqrt{\frac{k^4 + 4h^2\Omega^2}{(k^2 - \Omega^2)^2 + 4h^2\Omega^2}} \, ;$$

trong đó : $k^2 = \dfrac{C}{m}$ ; $h = \dfrac{\alpha}{2m}$.

---

**1.21.** Một máy bay đang bay thẳng ngang với tốc độ $v_1$, ở độ cao $h$. Từ nòng súng, đúng lúc máy bay ở vị trí trên đường thẳng đứng qua miệng súng, người ta bắn một viên đạn. Bỏ qua sức cản của không khí. Tìm :

1. Vận tốc đầu $v_o$ của viên đạn phải thoả mãn điều kiện nào để nó có thể trúng máy bay.

2. Góc nghiêng $\alpha$ bao nhiêu để viên đạn trúng đích.

*Trả lời :* $v_o^2 \ge v_1^2 + 2gh$ ; $\cos\alpha = \dfrac{v_1}{v_o}$.

---

**1.22.** Từ một khẩu súng đại bác đặt tại điểm $O$ người ta bắn một viên đạn với góc bắn $\alpha$ so với phương ngang và với vận tốc ban đầu $v_o$. Đồng thời từ $A$ cách $O$ một khoảng bằng $l$ theo đường ngang và mặt phẳng thẳng đứng qua $OA$ cũng chứa $v_o$, người ta bắn lên một viên đạn khác theo đường thẳng đứng. Bỏ qua sức cản không khí, xác định vận tốc bắn $v_1$ của viên đạn thứ hai để nó chạm vào viên đạn thứ nhất.

*Trả lời :* $v_1 = v_o\sin\alpha$, không phụ thuộc $l$.

---

**1.23.** Một chất điểm có khối lượng $m$, chuyển động dưới tác dụng của lực đẩy từ một tâm $O$ cố định theo luật $\vec{F} = k^2 m\vec{r}$, trong đó $k$ là hằng số và $m$ là khối lượng của chất điểm, còn $\vec{r}$ là bán kính định vị của chất điểm tính từ $O$. Ở thời điểm đầu chất điểm ở $M_o(a, 0)$ có vận tốc $\vec{v}_o$ song song với trục $y$. Xác định quỹ đạo của chất điểm. Bỏ qua tác dụng của trọng lực.

*Trả lời :* Quỹ đạo là hypecbôn $\left(\dfrac{x}{a}\right)^2 - \left(\dfrac{ky}{v_o}\right)^2 = 1$.

---

**1.24.** Một dây đàn hồi được giữ chặt ở điểm $A$ vòng qua một vòng nhẫn cố định $O$. Ở đầu cuối tự do của nó lắp một quả cầu $M$ khối lượng $m\text{ kg}$. Chiều dài của dây lúc không giãn là $l = AO$. Để kéo giãn dây ra $1\text{ cm}$ cần một lực bằng $k^2 m\text{ Niutơn}$. Sau khi kéo dây giãn ra theo đường thẳng đứng dài gấp đôi, ta chuyển cho quả cầu vận tốc $\vec{v}_o$ vuông góc với phương thẳng đứng. Xác định quỹ đạo của quả cầu, bỏ qua tác dụng của trọng lực và xem như sức căng tỉ lệ với độ giãn dài của nó (H. 1–13).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_1_13.svg" alt="Hình 1-13" class="figure-img" />
  <p class="figure-caption">Hình 1–13</p>
</div>

*Trả lời :* Êlíp $\dfrac{k^2 x^2}{v_o^2} + \dfrac{y^2}{l^2} = 1$.
