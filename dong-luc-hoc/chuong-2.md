# Chương 2: Phương Trình Vi Phân Của Chuyển Động

## 2.1. Phương Trình Vi Phân Chuyển Động Của Chất Điểm

### 2.1.1. Phương trình vi phân chuyển động của chất điểm trong dạng vectơ

Khảo sát chuyển động của chất điểm có khối lượng $m$ chịu tác dụng của lực $\vec{F}$ (trong trường hợp chất điểm tự do, chịu tác dụng của nhiều lực thì $\vec{F}$ là hợp lực của những lực đó, còn trong trường hợp chất điểm không tự do thì $\vec{F}$ là hợp lực của lực hoạt động và lực liên kết).

Chọn một hệ quy chiếu quán tính. Trong hệ quy chiếu này chất điểm sẽ chuyển động với gia tốc $\vec{a}$, được xác định dựa vào tiên đề thứ hai (phương trình cơ bản của động lực học)

$$m\vec{a} = \vec{F}$$

Gọi $\vec{r}$ là vectơ định vị của chất điểm trong hệ quy chiếu đã chọn. Như đã biết từ phần động học:

$$\vec{a} = \ddot{\vec{r}}$$

Do đó phương trình cơ bản của động lực học chất điểm có thể viết dưới dạng

$$m\ddot{\vec{r}} = \vec{F}(t, \dot{\vec{r}}, \vec{r}) \tag{2-1}$$

Phương trình $(2-1)$ được gọi là phương trình vi phân chuyển động của chất điểm trong dạng vectơ.

### 2.1.2. Phương trình vi phân chuyển động của chất điểm trong dạng tọa độ Đề các

Chọn hệ trục tọa độ Đề các $Oxyz$ gắn vào hệ quy chiếu quán tính. Khi chiếu hai vế của đẳng thức vectơ $(2-1)$ lên các trục tọa độ ta được:

$$\begin{aligned}
m\ddot{x} &= F_x(t, x, y, z, \dot{x}, \dot{y}, \dot{z}) \\
m\ddot{y} &= F_y(t, x, y, z, \dot{x}, \dot{y}, \dot{z}) \\
m\ddot{z} &= F_z(t, x, y, z, \dot{x}, \dot{y}, \dot{z})
\end{aligned} \tag{2-2}$$

Hệ phương trình $(2-2)$ được gọi là phương trình vi phân chuyển động của chất điểm trong dạng tọa độ Đề các.

Khi chất điểm chuyển động trong mặt phẳng hoặc dọc theo đường thẳng thì số phương trình giảm xuống còn tương ứng hai hoặc một.

### 2.1.3. Phương trình vi phân chuyển động của chất điểm trong dạng tọa độ tự nhiên

Khi chiếu hai vế của đẳng thức vectơ $(2-1)$ lên các trục tọa độ tự nhiên (H. 2–1) và dựa vào kết quả trong phần động học, ta nhận được:

$$\begin{aligned}
m\ddot{\overline{s}} &= \overline{F}_\tau \\
m\frac{v^2}{\rho} &= F_n \\
0 &= F_b
\end{aligned} \tag{2-3}$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_2_1.svg" alt="Hình 2-1" style="max-height: 240px;" />

<div class="figure-caption">

Hình 2-1

</div>

</div>

trong đó $\overline{s}$ và $v$ tương ứng là tọa độ cong và giá trị của vận tốc $\vec{v}$ của chất điểm; $\rho$ là bán kính cong của quỹ đạo, còn $F_t$, $F_n$, $F_b$ lần lượt là các hình chiếu của lực $\vec{F}$ lên các trục tiếp tuyến, pháp tuyến chính và trùng pháp tuyến.

[Đính chính bản in: Trong phương trình đầu của $(2-3)$, kí hiệu $\overline{F}_\tau$ dùng chỉ số $\tau$ cho trục tiếp tuyến, còn trong lời giải thích bên dưới viết là $F_t$.]

Hệ phương trình $(2-3)$ được gọi là các phương trình vi phân chuyển động của chất điểm trong dạng tọa độ tự nhiên.

Các phương trình trên áp dụng thuận lợi khi biết quỹ đạo tuyệt đối của chất điểm, đặc biệt đối với các bài toán của động lực học chất điểm không tự do.

### 2.1.4. Phương trình vi phân chuyển động của chất điểm trong dạng tọa độ cực

Khảo sát chất điểm chuyển động trong mặt phẳng.

Khi chiếu hai vế của đẳng thức vectơ $(2-1)$ lên trục hướng theo bán kính vectơ $\vec{r}$ và lên trục hướng vuông góc với vectơ $\vec{r}$ về hướng tăng của góc $\varphi$ và sử dụng các công thức tính gia tốc của chất điểm trong phần động học, ta có:

$$\begin{aligned}
m(\ddot{\rho} - \rho\dot{\varphi}^2) &= F_\rho \\
m(\rho\ddot{\varphi} - 2\dot{\rho}\dot{\varphi}) &= F_\varphi
\end{aligned} \tag{2-4}$$

[Đính chính bản in: Trong phương trình thứ hai của $(2-4)$, dấu trước số hạng $2\dot{\rho}\dot{\varphi}$ phải là dấu cộng: $m(\rho\ddot{\varphi} + 2\dot{\rho}\dot{\varphi}) = F_\varphi$.]

Đó là phương trình vi phân chuyển động của chất điểm trong dạng tọa độ cực, nó thường được dùng để khảo sát chuyển động của chất điểm trong mặt phẳng.

### 2.1.5. Bài toán thứ nhất của động lực học chất điểm

**Bài toán thuận.** Cho biết chuyển động của chất điểm, hãy xác định lực tác dụng lên chất điểm. Trong trường hợp gia tốc của chất điểm đã cho, để giải bài toán ta áp dụng trực tiếp phương trình cơ bản của động lực học. Nếu chuyển động được cho, không phải trực tiếp qua gia tốc mà qua quy luật chuyển động của chất điểm thì đầu tiên phải tìm gia tốc của chất điểm nhờ các công thức đã thiết lập ở phần động học, sau đó áp dụng phương trình cơ bản của động lực học.

#### Thí dụ 2 – 1

Kéo một vật nặng có trọng lượng $P$ đi lên nhanh dần với gia tốc $\vec{a}$ (H.2–2). Hãy xác định sức căng của dây cáp.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_2_2.svg" alt="Hình 2-2" style="max-height: 290px;" />

<div class="figure-caption">

Hình 2-2

</div>

</div>

**Bài giải**

Khảo sát vật nặng, vật được xem như chất điểm. Lực tác dụng vào vật nặng gồm lực $\vec{P}$ hướng xuống và lực kéo của dây cáp hướng lên. Viết phương trình cơ bản của động lực học chất điểm:

$$\frac{P}{g}\vec{a} = \vec{T} + \vec{P}$$

Khi chiếu hai vế của phương trình này lên trục thẳng đứng hướng lên ta có:

$$\frac{P}{g}a = T - P$$

Từ đó:

$$T = P\left(1 + \frac{a}{g}\right)$$

Khi vật đi lên chậm dần hoặc đi xuống nhanh dần thì gia tốc $\vec{a}$ sẽ hướng xuống và sức căng trong dây cáp sẽ bằng:

$$T = P\left(1 - \frac{a}{g}\right)$$

Khi vật đứng yên hoặc chuyển động thẳng đều thì $a = 0$ và sức căng của dây cáp bằng: $T = P$.

#### Thí dụ 2 – 2

Tìm áp lực của ô tô lên cầu tại đỉnh $A$, cho biết ô tô có trọng lượng $P$ và tại đỉnh $A$ có vận tốc $\vec{v}$. Bán kính cong của cầu tại $A$ là $\rho$. (H.2–3).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_2_3.svg" alt="Hình 2-3" style="max-height: 270px;" />

<div class="figure-caption">

Hình 2-3

</div>

</div>

**Bài giải**

Khảo sát chuyển động của ô tô, nó được xem như chất điểm.

Các lực tác dụng lên ô tô gồm trọng lực $\vec{P}$, các phản lực pháp tuyến $\vec{N}$ và tiếp tuyến $\vec{T}$. (Áp lực của ô tô lên cầu có cùng độ lớn nhưng hướng ngược chiều với phản lực pháp tuyến $\vec{N}$).

Viết phương trình cơ bản của động lực học chất điểm (ô tô) ta được:

$$\frac{P}{g}\vec{a} = \vec{P} + \vec{N} + \vec{T}$$

Khi chiếu hai vế của đẳng thức vectơ này lên trục pháp tuyến chính, ta có:

$$\frac{P}{g}\frac{v^2}{\rho} = P - N$$

Từ đó: $N = P\left(1 - \frac{v^2}{\rho g}\right)$

Áp lực của ô tô lên cầu phụ thuộc vào vận tốc của ô tô.

#### Thí dụ 2 – 3

Một sàng vật liệu hạt dao động điều hòa thẳng đứng với biên độ $A = 5\text{cm}$. Hãy xác định tần số dao động của sàng để cho hạt được bật lên khỏi mặt sàng.

**Bài giải**

Khảo sát hạt nằm trên mặt sàng và do đó hạt chuyển động cùng mặt sàng, tức là dao động điều hòa thẳng đứng với biên độ $A$. (H. 2–4).

Lực tác dụng lên hạt gồm trọng lực và phản lực của sàng lên hạt.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_2_4.svg" alt="Hình 2-4" style="max-height: 220px;" />

<div class="figure-caption">

Hình 2-4

</div>

</div>

Viết phương trình cơ bản của động lực học cho hạt ta được:

$$\frac{P}{g}\overline{a} = N - P$$

Từ đó: $N = P\left(1 + \frac{\overline{a}}{g}\right)$

Vì hạt nằm trên sàng nên hạt có gia tốc bằng gia tốc của sàng. Phương trình chuyển động của sàng có dạng:

$$x = A\sin(\omega t + \alpha)$$

trong đó $A$ là biên độ, $\alpha$ là góc pha ban đầu, $\omega$ là tần số dao động.

Do đó: $\overline{a} = \ddot{x} = -A\omega^2\sin(\omega t + \alpha)$

Vậy phản lực của sàng tác dụng lên hạt bằng:

$$N = P\left[1 - \frac{A\omega^2}{g}\sin(\omega t + \alpha)\right]$$

Khi hạt còn nằm trên mặt sàng (tức hạt chưa rời khỏi mặt sàng) thì:

$$N > 0$$

Vậy điều kiện để hạt rời được khỏi mặt sàng sẽ là:

$$N \le 0$$

tức :

$$1 - \frac{A\omega^2}{g}\sin(\omega t + \alpha) \le 0$$

Điều kiện này được thỏa mãn khi:

$$\omega \ge \sqrt{\frac{g}{A}} = \sqrt{\frac{9,8}{0,05}} = 14\text{ Hz}.$$

Vậy để hạt rời được khỏi mặt sàng thì sàng phải dao động với tần số bé nhất $\omega_{\min}$ bằng

$$\omega_{\min} = 14\text{ Hz}$$

[Đính chính bản in: Đại lượng $\omega$ là tần số góc (tần số vòng), đơn vị chuẩn là $\text{rad/s}$ (hoặc $\text{s}^{-1}$), không phải $\text{Hz}$.]

### 2.1.6. Bài toán thứ hai của động lực học chất điểm

**Bài toán ngược:** Cho biết các lực tác dụng lên chất điểm và các điều kiện đầu của chuyển động (vị trí ban đầu và vận tốc ban đầu), hãy xác định chuyển động của chất điểm ấy.

Trong trường hợp này như đã biết, phương trình cơ bản của động lực học cho phương trình vi phân chuyển động của chất điểm. Để xác định chuyển động của chất điểm cần phải tích phân phương trình vi phân chuyển động. Nếu tìm được các tích phân, chúng sẽ chứa các hằng tích phân, chỉ cho biết lớp chuyển động chứ chưa cho biết dạng chuyển động cụ thể của chất điểm. Muốn tìm dạng chuyển động cụ thể cần phải xác định các hằng tích phân nhờ các điều kiện đầu:

#### Thí dụ 2 – 4

Một vật nặng có khối lượng $m$ được treo vào đầu lò xo có độ cứng $c$ nằm cân bằng tại vị trí $O$. Kéo vật nặng lệch khỏi vị trí cân bằng $O$ với độ lệch $x_o$ và cho vật vận tốc đầu $v_o$ hướng về vị trí cân bằng $O$. Tìm chuyển động của vật (H. 2–5).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_2_5.svg" alt="Hình 2-5" style="max-height: 320px;" />

<div class="figure-caption">

Hình 2-5

</div>

</div>

**Bài giải**

Khảo sát vật nặng được xem như chất điểm. Lực tác dụng lên chất điểm gồm trọng lực $\vec{P}$ và lực đàn hồi lò xo $\vec{F}_{lx}$.

Giả thiết rằng lực đàn hồi lò xo tỉ lệ bậc nhất với độ giãn lò xo kể từ vị trí không biến dạng, tức:

$$F_{lx} = c\delta$$

trong đó $\delta$ là độ giãn của lò xo, so với trạng thái không biến dạng của nó.

Chọn trục $Ox$ hướng thẳng xuống. Phương trình vi phân chuyển động của chất điểm sẽ là:

$$m\ddot{x} = P - c.\delta$$

ở đó: $\delta = x + \delta_o$

$\delta_o$ là độ giãn của lò xo ứng với vị trí cân bằng (so với trạng thái không biến dạng của lò xo), $x$ là tọa độ của chất điểm kể từ vị trí cân bằng tĩnh $O$.

Như vậy chúng ta có :

$$m\ddot{x} = P - c(x + \delta_o) = -cx + P - c\delta_o.$$

Tại vị trí cân bằng ta có : $P - c\delta_o = 0$

Do đó:

$$m\ddot{x} = -cx$$

Phương trình vi phân chuyển động của chất điểm có thể viết dưới dạng :

$$\ddot{x} + k^2 x = 0$$

Trong đó:

$$k = \sqrt{\frac{c}{m}}$$

được gọi là tần số dao động riêng.

Như đã biết phương trình vi phân trên có nghiệm tổng quát dạng:

$$x = A\sin(kt + \alpha)$$

trong đó $A$ và $\alpha$ là hai hằng tích phân, chúng sẽ được xác định từ điều kiện đầu.

$$x(t_o) = x_o; \quad \dot{x}(t_o) = v_o$$

Chọn gốc thời gian ứng với thời điểm đầu, tức $t_o = 0$

Vậy:

$$\begin{aligned}
x_o &= A\sin\alpha \\
v_o &= Ak\cos\alpha
\end{aligned}$$

Từ đó dễ dàng tìm được:

$$A = \sqrt{x_o^2 + \frac{v_o^2}{k^2}}$$

$$\alpha = \operatorname{arctg}\frac{kx_o}{v_o}$$

$A$ là biên độ của dao động, $\alpha$ là pha ban đầu.

Vậy vật nặng dao động điều hòa với biên độ $A$ và tần số $k$.

Chú ý rằng nghiệm tổng quát của phương trình vi phân chuyển động của chất điểm trên cũng có thể được viết dưới dạng:

$$x = C_1\cos kt + C_2\sin kt$$

trong đó $C_1, C_2$ là hai hằng tích phân được xác định từ điều kiện đầu. Để tìm chúng, ta dựa vào biểu thức vận tốc của chất điểm :

$$\dot{x} = -C_1 k\sin kt + C_2 k\cos kt$$

Ứng với thời điểm đầu $t = 0$, ta có:

$$\begin{aligned}
x_o &= C_1 \\
v_o &= C_2 k
\end{aligned}$$

Vậy : $x = x_o\cos kt + \frac{v_o}{k}\sin kt$.

#### Thí dụ 2 – 5

Một quả cầu khối lượng $m$ rơi tự do từ một điểm $O$ không vận tốc đầu, dưới tác dụng của trọng lực. Sức cản của không khí đối với quả cầu tỷ lệ bậc nhất với vận tốc, hệ số tỉ lệ $\beta = \text{const}$.

Hãy xác định chuyển động của quả cầu (H. 2–6)

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_2_6.svg" alt="Hình 2-6" style="max-height: 290px;" />

<div class="figure-caption">

Hình 2-6

</div>

</div>

**Bài giải**

Khảo sát chuyển động quả cầu được xem như chất điểm. Lực tác dụng lên chất điểm gồm trọng lực và lực cản của không khí $\vec{F}_c = -\beta\vec{v}$.

Chọn trục $Ox$ hướng thẳng xuống. Phương trình vi phân chuyển động của quả cầu sẽ là:

$$m\ddot{x} = P - \beta\dot{x} = mg - \beta\dot{x}$$

Từ đó:

$$\ddot{x} = g - n\dot{x}; \text{ với } n = \frac{\beta}{m}$$

Phương trình vi phân này có thể viết dưới dạng:

$$\frac{d\dot{x}}{g - n\dot{x}} = dt$$

Khi tích phân phương trình vi phân vừa nhận được với chú ý rằng lực cản không thể lớn hơn trọng lực, tức:

$$F_c \le P \text{ hay } g - n\dot{x} \ge 0.$$

ta tìm được: $\dot{x} = \frac{g}{n} - C_1 e^{-nt}$

$$x = \frac{g}{n}t + \frac{C_1}{n}e^{-nt} + C_2$$

trong đó $C_1, C_2$ là các hằng tích phân được xác định từ điều kiện đầu.

Nếu chọn gốc thời gian tương ứng với gốc tọa độ $O$, thì $x(O) = x_o = 0; \ \dot{x}(O) = v_o = 0.$

[Đính chính bản in: Trong điều kiện đầu ở trên, $x(O)$ và $\dot{x}(O)$ là lỗi in của $x(0)$ và $\dot{x}(0)$.]

Dễ dàng tìm được các hằng $C_1$ và $C_2$ từ hệ phương trình:

$$0 = \frac{g}{n} - C_1$$

$$0 = \frac{C_1}{n} + C_2$$

Vậy:

$$C_1 = \frac{g}{n}; \quad C_2 = -\frac{g}{n^2}$$

Phương trình chuyển động của chất điểm sẽ là:

$$x = \frac{g}{n}t + \frac{g}{n^2}(e^{-nt} - 1)$$

Từ biểu thức vận tốc của chất điểm ta có: $v = \frac{g}{n}(1 - e^{-nt})$, khi $t \to \infty$, $v \to \frac{g}{n} = \text{hằng}$, tức chuyển động chất điểm dần đến trạng thái chuyển động đều khi thời gian tiến đến $\infty$.

Vận tốc ứng với trạng thái đó được gọi là vận tốc giới hạn, có kí hiệu $v_\infty$ hoặc $v_{gh}$

$$v_\infty = \frac{g}{n}$$

Nhận xét rằng hàm $e^{-nt}$ giảm nhanh khi $t$ tăng, nên trong thực tế sau một khoảng thời gian không lớn có thể coi vận tốc của chất điểm đạt được vận tốc giới hạn. Lúc đó lực cản cân bằng với trọng lực.

Tiến đến trạng thái vận tốc giới hạn là một tính chất quan trọng nhất của chuyển động của chất điểm (và của cả hệ) chuyển động trong môi trường cản với lực cản tỷ lệ với vận tốc.

Lưu ý rằng giá trị của vận tốc giới hạn có thể tìm được trực tiếp mà không phải qua biểu thức của vận tốc nhờ con đường tích phân phương trình vi phân chuyển động.

Thực vậy, vận tốc giới hạn có thể tìm được từ biểu thức:

$$F_{\text{cản}} = P, \text{ tức } \beta\dot{x} = mg$$

Do đó:

$$v_\infty = \frac{g}{n}$$

#### Thí dụ 2 – 6

Một viên đạn được bắn lên với vận tốc ban đầu $\vec{v}_o$ làm với phương ngang một góc $\alpha$. Bỏ qua sức cản của không khí. Tìm chuyển động của viên đạn.

**Bài giải**

Khảo sát chuyển động của viên đạn, nó được xem như chất điểm. Lực tác dụng lên viên đạn chỉ có trọng lực.

Chọn hệ trục tọa độ $Oxyz$, có gốc $O$ ứng với vị trí ban đầu của viên đạn, trục $Oz$ hướng thẳng đứng lên, còn trục $Oy$ hướng theo phương ngang sao cho vận tốc ban đầu $\vec{v}_o$ nằm trong mặt phẳng $Oyz$. Chọn gốc thời gian ứng với vị trí ban đầu.

Phương trình vi phân chuyển động của viên đạn có dạng: $m\ddot{x} = 0; \ m\ddot{y} = 0; \ m\ddot{z} = -mg.$

Điều kiện đầu của chuyển động sẽ là:

$$\begin{gathered}
x(0) = 0; \quad \dot{x}(0) = 0; \quad y(0) = 0; \\
\dot{y}(0) = v_o\cos\alpha; \quad z(0) = 0; \quad \dot{z}(0) = v_o\sin\alpha.
\end{gathered}$$

Khi tích phân phương trình vi phân chuyển động của viên đạn, ta được:

$$\dot{x} = C_1; \quad x = C_1 t + C_2; \quad \dot{y} = C_3; \quad y = C_3 t + C_4;$$

$$\dot{z} = -gt + C_5; \quad z = -g\frac{t^2}{2} + C_5 t + C_6.$$

Ở đó $C_1, C_2, C_3, C_4, C_5, C_6$ là các hằng tích phân được xác định từ điều kiện ban đầu. Với các điều kiện đầu đã cho, ta tìm được:

$$\begin{gathered}
C_1 = C_2 = C_4 = C_6 = 0 \\
C_3 = v_o\cos\alpha; \quad C_5 = v_o\sin\alpha
\end{gathered}$$

Do đó phương trình chuyển động của viên đạn trong điều kiện đầu đã cho sẽ có dạng:

$$x = 0; \quad y = (v_o\cos\alpha)t; \quad z = -\frac{1}{2}gt^2 + (v_o\sin\alpha)t.$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_2_7.svg" alt="Hình 2-7" style="max-height: 250px;" />

<div class="figure-caption">

Hình 2-7

</div>

</div>

Như vậy viên đạn sẽ chuyển động trong mặt phẳng đứng chứa vectơ vận tốc ban đầu $\vec{v}_o$.

Dễ dàng chỉ ra rằng quỹ đạo của viên đạn là đường parabôn qua gốc tọa độ có dạng (H.2–7).

$$z = y\operatorname{tg}\alpha - \frac{gy^2}{2v_o^2}(1 + \operatorname{tg}^2\alpha), \text{ nó được gọi tắt là đường đạn.}$$

Tầm cao $H$ và tầm xa $L$ của đường đạn được xác định nhờ các biểu thức sau:

$$H = z_{\max} = \frac{1}{2g}\frac{\operatorname{tg}^2\alpha}{\operatorname{tg}^2\alpha + 1}\cdot v_o^2.$$

$$L = y_{z=0} = \frac{1}{2g}\sin 2\alpha \cdot v_o^2$$

[Đính chính bản in: Tầm xa đúng của đường đạn là $L = \frac{1}{g}\sin 2\alpha \cdot v_o^2$ (bản in dư thừa số $\frac{1}{2}$).]

Tầm cao, tầm xa và quỹ đạo của đường đạn phụ thuộc vào góc bắn ban đầu $\alpha$. Khi thay đổi góc bắn (tức xem $\operatorname{tg}\alpha$ là thông số) các đường đạn là chùm parabôn phụ thuộc thông số $\alpha$. Dễ dàng tìm được bao hình của chùm parabôn đó nhờ khử thông số $\alpha$ (tức $\operatorname{tg}\alpha$) từ hệ phương trình sau:

$$z = y\operatorname{tg}\alpha - \frac{g}{2v_o^2}(1 + \operatorname{tg}^2\alpha)y^2$$

$$\frac{\partial z}{\partial(\operatorname{tg}\alpha)} = y - \frac{g}{v_o^2}\operatorname{tg}\alpha \cdot y^2 = 0$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_2_8.svg" alt="Hình 2-8" style="max-height: 270px;" />

<div class="figure-caption">

Hình 2-8

</div>

</div>

Do đó bao hình của chùm đường đạn có dạng (H.2–8)

$$z = \frac{v_o^2}{2g} - \frac{g}{2v_o^2}y^2.$$

cũng là một parabôn đối xứng qua trục $z$ được gọi là parabôn an toàn, nó xác định biên của vùng an toàn và vùng gây nguy hiểm của một loại súng. Tổng quát hơn, chúng ta có mặt parabolic an toàn.

Cần chú ý rằng ngoài hai bài toán cơ bản của động lực học chúng ta còn gặp bài toán hỗn hợp trong đó yêu cầu xác định cả chuyển động của chất điểm và cả lực tác dụng lên chất điểm. Một trong các thí dụ về loại này là bài toán về chuyển động của chất điểm không tự do. Đối với trường hợp này, nhờ áp dụng tiên đề giải phóng liên kết, chất điểm không tự do được xem như chất điểm tự do, nhưng nằm dưới tác dụng của các lực trong đó có lực chưa biết là phản lực liên kết của liên kết được giải phóng.

---

## 2.2. Phương Trình Vi Phân Chuyển Động Của Cơ Hệ

Khảo sát cơ hệ gồm $N$ chất điểm. Để nhận được phương trình vi phân chuyển động của cơ hệ, chúng ta viết phương trình $(1-1)$ cho tất cả các chất điểm của cơ hệ trong đó $\vec{F}$ là hợp lực của tất cả các lực tác dụng vào chất điểm. Tùy thuộc cách phân loại lực tác dụng lên cơ hệ ta sẽ nhận được phương trình vi phân chuyển động của cơ hệ dưới những dạng khác nhau.

[Đính chính bản in: Phương trình cơ bản của động lực học chất điểm là $(1-2)$ hoặc $(2-1)$ (bản in viết nhầm thành $(1-1)$).]

Khi phân loại các lực tác dụng lên cơ hệ thành ngoại lực và nội lực, phương trình vi phân chuyển động của cơ hệ có các dạng:

$$\begin{aligned}
m_1 \vec{a}_1 &= \vec{F}_1^e + \vec{F}_1^i \\
m_2 \vec{a}_2 &= \vec{F}_2^e + \vec{F}_2^i \\
&\dots\dots\dots\dots\dots \\
m_N \vec{a}_N &= \vec{F}_N^e + \vec{F}_N^i
\end{aligned} \tag{2-5}$$

trong đó $\vec{F}_k^e$ và $\vec{F}_k^i$ ($k = \overline{1, N}$) tương ứng là hợp lực của các ngoại lực và nội lực tác dụng lên chất điểm thứ $k$.

Nếu các lực tác dụng lên cơ hệ được phân thành các lực hoạt động và các lực liên kết và gọi $\vec{F}_k$ và $\vec{R}_k$ tương ứng là hợp lực của các lực hoạt động và lực liên kết lên chất điểm $M_k$ ($k = \overline{1, N}$) thì phương trình vi phân chuyển động của cơ hệ có dạng:

$$\begin{aligned}
m_1 \vec{a}_1 &= \vec{F}_1 + \vec{R}_1 \\
m_2 \vec{a}_2 &= \vec{F}_2 + \vec{R}_2 \\
&\dots\dots\dots\dots\dots \\
m_N \vec{a}_N &= \vec{F}_N + \vec{R}_N
\end{aligned} \tag{2-6}$$
