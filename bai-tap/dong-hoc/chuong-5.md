---
title: "Bài Tập Động Học - Chương 10: Hợp Chuyển Động Của Điểm"
layout: doc
---

# CHƯƠNG 10: HỢP CHUYỂN ĐỘNG CỦA ĐIỂM

## 10.1. CƠ SỞ LÍ THUYẾT

### 10.1.1. Một số định nghĩa

– Bài toán hợp chuyển động của điểm : Có một điểm $M$ chuyển động đối với vật $A$, vật $A$ chuyển động đối với vật $B$ cố định, ta có bài toán hợp chuyển động đối với điểm $M$. Vật $A$ được gọi là hệ quy chiếu động, vật $B$ – hệ quy chiếu cố định.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_1.svg" alt="Hình 10-1" class="figure-img" />
  <p class="figure-caption">Hình 10-1</p>
</div>

– Các chuyển động :

+ Chuyển động tuyệt đối của $M$ : là chuyển động của điểm $M$ đối với hệ quy chiếu cố định $B$ (gắn với hệ toạ độ $O_1x_1y_1z_1$).

+ Chuyển động tương đối của $M$ là chuyển động của điểm $M$ đối với hệ quy chiếu động $A$ (gắn với hệ toạ độ $Oxyz$).

+ Chuyển động theo là chuyển động của hệ quy chiếu động $A$ đối với hệ quy chiếu cố định $B$.

– Các yếu tố đặc trưng động học của điểm $M$ :

+ Vận tốc tuyệt đối và gia tốc tuyệt đối của điểm $M$, được kí hiệu $\vec{v}_a, \vec{a}_a$, là vận tốc và gia tốc của điểm $M$ trong chuyển động tuyệt đối tức là vận tốc và gia tốc của điểm $M$ được tính đối với hệ quy chiếu cố định.

+ Vận tốc tương đối và gia tốc tương đối của điểm $M$ được kí hiệu $\vec{v}_r, \vec{a}_r$, là vận tốc và gia tốc của điểm $M$ trong chuyển động tương đối, tức là vận tốc và gia tốc của điểm $M$ được tính đối với hệ quy chiếu động.

+ Vận tốc theo và gia tốc theo của điểm $M$ được kí hiệu $\vec{v}_e, \vec{a}_e$, là vận tốc và gia tốc của điểm $M^*$ thuộc hệ động tại thời điểm khảo sát trùng với điểm $M$ ($M^*$ gọi là trùng điểm của $M$) tức

$$\vec{v}_e = \vec{v}_{M^*} \, ; \quad \vec{a}_e = \vec{a}_{M^*}.$$

Chuyển động tuyệt đối, chuyển động tương đối là chuyển động của điểm (chuyển động thẳng hoặc cong) nên để tính vận tốc, gia tốc của chúng cần sử dụng các công thức đã nêu trong chương VI. Chuyển động theo là chuyển động của vật (tịnh tiến, quay quanh một trục cố định, song phẳng...) nên để tính vận tốc theo và gia tốc theo cần sử dụng các công thức đã nêu trong các chương 7, 8, 9.

### 10.1.2. Định lí hợp vận tốc

Thể hiện bằng biểu thức :

$$\vec{v}_a = \vec{v}_e + \vec{v}_r. \tag{10–1}$$

### 10.1.3. Định lí hợp gia tốc

Thể hiện bằng biểu thức :

a) Trường hợp chuyển động theo là tịnh tiến :

$$\vec{a}_a = \vec{a}_e + \vec{a}_r. \tag{10–2}$$

b) Trường hợp chuyển động theo không phải là chuyển động tịnh tiến (quay quanh một trục cố định, song phẳng, quay quanh một điểm cố định, ...) :

$$\vec{a}_a = \vec{a}_e + \vec{a}_r + \vec{a}_c, \tag{10–3}$$

trong đó gia tốc Côriôlit $\vec{a}_c$ được xác định theo biểu thức :

$$\vec{a}_c = 2\vec{\omega}_e \wedge \vec{v}_r, \tag{10–4}$$

($\vec{\omega}_e$ là vectơ vận tốc góc của hệ động).

Nhận xét rằng, gia tốc Côriôlit có thể triệt tiêu tại một số vị trí ứng với thời điểm $t_1$, tại đó hoặc $\vec{\omega}_e(t_1) = 0$ (chuyển động theo thay đổi chiều quay), hoặc $\vec{v}_r(t_1) = 0$ (chuyển động tương đối thay đổi chiều chuyển động), hoặc $\vec{\omega}_e \parallel \vec{v}_r$.

Phương pháp xác định $\vec{a}_c$ :

Hoặc trực tiếp theo biểu thức (10–4) hoặc dùng quy tắc thực hành sau :

– Trường hợp $\vec{\omega}_e \perp \vec{v}_r$ (bài toán phẳng), phương chiều của $\vec{a}_c$ nhận được bằng cách quay $\vec{v}_r$ một góc $\dfrac{\pi}{2}$ quanh trục mang vectơ $\vec{\omega}_2$ theo chiều quay của hệ quy chiếu động (H. 10–2a), còn giá trị bằng :

$$a_c = 2\omega_e . v_r. \tag{10–5}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_2.svg" alt="Hình 10-2" class="figure-img" />
  <p class="figure-caption">Hình 10-2</p>
</div>

– Trường hợp hai vectơ $\vec{\omega}_e$ và $\vec{v}_r$ không vuông góc nhau, mà hợp với nhau một góc $\alpha$ (bài toán không gian) – chiếu $\vec{v}_r$ xuống mặt phẳng thẳng góc với trục quay ta nhận được $\vec{v}'_r$ ; quay $\vec{v}'_r$ quanh trục mang vectơ $\vec{\omega}_e$ theo chiều quay của hệ quy chiếu động ta nhận được phương chiều của $\vec{a}_c$ (H. 10–2b), còn giá trị của nó bằng :

$$a_C = 2\omega_e . v_r \sin\alpha. \tag{10–6}$$

*Chú ý :* Trong (10–2) và (10–3) nếu chuyển động tuyệt đối và chuyển động tương đối là chuyển động cong thì các gia tốc tuyệt đối $\vec{a}_a$ và gia tốc tương đối $\vec{a}_r$ cần tiếp tục phân thành gia tốc tiếp và gia tốc pháp :

$$\vec{a}_a = \vec{a}_a^t + \vec{a}_a^n, \tag{10–7}$$

$$\vec{a}_r = \vec{a}_r^t + \vec{a}_r^n. \tag{10–8}$$

---

## 10.2. HƯỚNG DẪN ÁP DỤNG

### 10.2.1. Phân loại bài toán

Có thể phân các bài toán thường gặp thành ba loại.

1 – Bài toán tìm phương trình chuyển động của điểm.

2 – Bài toán tổng hợp chuyển động : Biết các yếu tố động học của chuyển động tương đối và chuyển động theo, tìm vận tốc và gia tốc tuyệt đối.

3 – Bài toán phân tích chuyển động : Biết các yếu tố động học của một trong hai chuyển động (tuyệt đối hoặc theo) và phương vận tốc, gia tốc của điểm trong hai chuyển động còn lại. Tìm giá trị của vận tốc và gia tốc của điểm trong hai chuyển động đó.

### 10.2.2. Phương pháp giải bài toán

*1. Phân tích chuyển động :* Phân tích dạng chuyển động của các vật cấu thành hệ được khảo sát và phát hiện hệ quy chiếu động để hình thành bài toán hợp chuyển động đối với điểm. Phân tích các chuyển động thành phần.

– Chuyển động tuyệt đối và chuyển động tương đối : Dạng chuyển động (thẳng hoặc cong) và các yếu tố động học đặc trưng chuyển động (vận tốc, gia tốc), các yếu tố nào đã biết, chưa biết.

– Chuyển động theo : dạng chuyển động (tịnh tiến, quay quanh một trục cố định, song phẳng...). Trong trường hợp chuyển động theo không phải là tịnh tiến cần xác định được trục quay tức thời) và vectơ vận tốc góc của chuyển động theo $\vec{\omega}_e$.

*2. Bài giải*

*a) Bài toán tìm phương trình chuyển động :* Xét điểm ở vị trí bất kì. Để viết phương trình chuyển động tuyệt đối cần tìm quan hệ giữa các toạ độ của điểm trong hệ toạ độ cố định và thời gian, còn đối với phương trình chuyển động tương đối cần tìm quan hệ giữa các toạ độ của điểm trong hệ quy chiếu động và thời gian.

*b) Bài toán tổng hợp hoặc phân tích chuyển động :*

*Tìm vận tốc :*

– Viết biểu thức vận tốc (10–1). Xác định phương chiều, trị số các vận tốc.

– Vẽ các vectơ vận tốc. Đối với các vectơ chỉ biết phương, chưa biết chiều thì chiều có thể giả định, nếu kết quả giải là dương thì chiều của nó đúng chiều giả định, nếu kết quả giải ra âm thì lấy chiều ngược lại chiều giả định. Xác định ẩn số của phương trình (10–1).

– Giải phương trình vectơ (10–1) để tìm trị số của các thành phần vận tốc chưa biết. Có thể dùng phương pháp vẽ (quy tắc tam giác vectơ) hoặc chiếu hai vế của (10–1) lên hai trục vuông góc nhau (trong bài toán phân tích chuyển động có thể chiếu lên hai trục bất kì nào thích hợp nhất).

*Tìm gia tốc :*

– Viết biểu thức gia tốc dạng (10–2) nếu chuyển động theo là tịnh tiến ; dạng (10–3) nếu chuyển động theo không phải là tịnh tiến. Sau đó xác định phương chiều và trị số các gia tốc. Xác định ẩn của phương trình vectơ (10–2) hoặc (10–3).

– Vẽ các vectơ gia tốc. Đối với các vectơ ẩn chỉ biết phương, chưa biết chiều, thì chiều của chúng được giả định và được xử lí như trong bài toán vận tốc.

– Giải phương trình vectơ (10–2) hoặc (10–3).

Nếu trong các phương trình vectơ có một vectơ chưa biết phương chiều (tức các ẩn tập trung vào một vectơ) thì vectơ đó được xác định qua các hình chiếu của nó trên các trục của hệ trục vuông góc bằng cách chiếu đẳng thức vectơ lên hai trục vuông góc nhau nếu các vectơ đó đồng phẳng và lên ba trục vuông góc nhau nếu các vectơ đó không đồng phẳng. Trường hợp đó xảy ra đối với bài toán tổng hợp chuyển động.

Đối với trường hợp trong phương trình vectơ có các vectơ đã biết phương, nhưng chưa biết chiều và giá trị (tức là các ẩn thuộc các vectơ khác nhau) thì có thể chiếu đẳng thức vectơ lên các trục thích hợp sao cho số ẩn trong phương trình nhận được là ít nhất.

Cần chú ý rằng các thành phần gia tốc pháp tuyến, gia tốc Côriôlit không phải là những ẩn đối với bài toán gia tốc, bởi vì sau khi giải bài toán vận tốc những thành phần gia tốc đó đã được xác định.

---

## 10.3. BÀI GIẢI MẪU

### 10.3.1. Tìm phương trình chuyển động

#### Thí dụ 10–1

Một đĩa quay đều quanh trục $O$ với vận tốc góc $\omega$.

Dọc theo bán kính của đĩa có điểm $M$ chuyển động theo luật :

$$x = OM = a\cos\omega t.$$

Tìm phương trình chuyển động và quỹ đạo tuyệt đối của $M$.

Dọc theo trục cố định $Ox_1$ có một điểm $N$ chuyển động theo luật $x_1 = ON = b\sin\omega t$. Tìm phương trình chuyển động và quỹ đạo tương đối của $N$.

*Bài giải :*

*1 – Phân tích chuyển động :* Các điểm $M$ và $N$ chuyển động đối với đĩa, đĩa quay quanh trục cố định (đối với không gian cố định) qua $O$. Ta có bài toán hợp chuyển động điểm đối với các điểm $M$ và $N$. Chọn hệ động $Oxy$ gắn vào đĩa, còn hệ cố định $Ox_1y_1$ gắn vào không gian cố định.

– Chuyển động theo là chuyển động của đĩa. Đó là chuyển động quay đều đã biết.

– Chuyển động của $M$ và $N$ đối với đĩa là các chuyển động tương đối của chúng. Đối với điểm $M$ chúng ta biết được chuyển động tương đối, còn đối với điểm $N$ thì chưa biết.

– Chuyển động của $M$ và $N$ đối với hệ $Ox_1y_1$ là chuyển động tuyệt đối. Đối với điểm $N$ chuyển động tuyệt đối của nó đã biết, còn đối với điểm $M$ chuyển động tuyệt đối của nó chưa biết.

*2 – Tìm phương trình chuyển động và quỹ đạo*

a) Tìm phương trình chuyển động và quỹ đạo tuyệt đối của điểm $M$ (H. 10–3a). Theo bài ra ta biết phương trình chuyển động tương đối của điểm $M$ :

$$\begin{aligned}
x &= a\cos\omega t, \\
y &= 0.
\end{aligned}$$

Coi lúc đầu trục $Ox$ trùng với $Ox_1$ nên phương trình chuyển động của đĩa là : $\varphi = \omega t$.

Toạ độ của điểm $M$ đối với hệ trục cố định là :

$$\begin{aligned}
x_1 &= x\cos\varphi - y\sin\varphi, \\
y_1 &= x\sin\varphi + y\cos\varphi.
\end{aligned}$$

Từ đó ta có phương trình chuyển động tuyệt đối của $M$ :

$$\begin{aligned}
x_1 &= a\cos^2\omega t, \\
y_1 &= a\cos\omega t \cdot \sin\omega t.
\end{aligned}$$

Phương trình quỹ đạo tuyệt đối của $M$ đơn giản nhất là viết trong toạ độ độc cực :

$$\begin{cases}
r = \sqrt{x^2 + y^2} = a\cos\omega t, \\
\varphi = \omega t.
\end{cases}$$

Từ đấy khử $t$, ta được

$$r = a\cos\varphi.$$

Đó là phương trình đường tròn, đường kính $a$ qua gốc toạ độ (H. 10–3b).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_3.svg" alt="Hình 10-3" class="figure-img" />
  <p class="figure-caption">Hình 10-3</p>
</div>

b) Tìm phương trình chuyển động và quỹ đạo tương đối của $N$.

Phương trình chuyển động tuyệt đối của $N$ đã cho :

$$x_1 = ON = b\sin\omega t.$$

Toạ độ của $N$ trong hệ trục động :

$$\begin{aligned}
x &= ON\cos\varphi, \\
y &= -ON\sin\varphi.
\end{aligned}$$

Từ đó ta có phương trình chuyển động tương đối của điểm $N$ :

$$\begin{aligned}
x &= b\sin\omega t \cdot \cos\omega t = \frac{b}{2}\sin 2\omega t, \\
y &= -b\sin\omega t \cdot \sin\omega t = -b\sin^2\omega t \\
&= -\frac{b}{2}(1 - \cos 2\omega t).
\end{aligned}$$

Khử $t$ trong hai phương trình này, ta nhận được phương trình quỹ đạo tương đối của $N$ đối với đĩa :

$$x^2 + \left(y + \frac{b}{2}\right)^2 = \frac{b^2}{4}.$$

Đó là đường tròn, bán kính $\dfrac{b}{2}$, tâm ở điểm $\left(0, \dfrac{b}{2}\right)$, (H. 10–3c).

---

### 10.3.2. Bài toán tổng hợp chuyển động

#### Thí dụ 10–2

Một cơ cấu 4 khâu có dạng hình bình hành. Tay quay $O_1A$ dài $0{,}5\text{m}$ quay với vận tốc góc $\omega = 2t\text{ rad/s}$. Dọc theo $AB$ có con trượt $M$ chuyển động theo luật :

$$\xi = AM = 5t^2, \quad (\xi : \text{m} \, ; \ t : \text{s}).$$

Tìm vận tốc và gia tốc tuyệt đối của con trượt lúc $t = 2\text{s}$ ; biết lúc đó $\varphi = 30^\circ$ (H. 10–4).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_4.svg" alt="Hình 10-4" class="figure-img" />
  <p class="figure-caption">Hình 10-4</p>
</div>

*Bài giải*

*1 – Phân tích chuyển động :* Điểm $M$ chuyển động dọc $AB$ thanh $AB$ chuyển động tịnh tiến. Có bài toán hợp chuyển động đối với điểm $M$. Chọn $AB$ làm hệ động.

– Chuyển động của thanh $AB$ là chuyển động theo. Đó là chuyển động tịnh tiến với vận tốc và gia tốc của điểm $A$.

– Chuyển động của điểm $M$ dọc $AB$ là chuyển động tương đối. Đó là chuyển động thẳng với phương trình chuyển động $\xi = 5t^2$.

– Chuyển động của điểm $M$ đối với giá cố định là chuyển động tuyệt đối. Trong bài toán này các đặc trưng động học của chuyển động tuyệt đối chưa biết.

*2 – Vận tốc*

– Dựa vào định lí hợp vận tốc trong hợp chuyển động, ta có :

$$\vec{v}_M = \vec{v}_e + \vec{v}_r, \tag{a}$$

trong đó $\vec{v}_e = \vec{v}_{M^*} = \vec{v}_A$ vì trùng điểm $M^*$ của điểm $M$ thuộc thanh $AB$ chuyển động tịnh tiến. Vậy $\vec{v}_e \perp O_1A$ ; $v_e = O_1A.\omega = 1t$.

Lúc $t = 2$, $v_e = 2\text{ m/s}$.

$\vec{v}_r$ hướng dọc $AB$ ; $v_r = \dot{\xi} = 10t$.

Lúc $t = 2\text{s}$, $v_r = 20\text{ m/s}$.

– Các vectơ vận tốc được biểu diễn như trên hình 10–4.

– Trong phương trình vectơ (a), các vectơ $\vec{v}_e, \vec{v}_r$ đã biết hoàn toàn (phương chiều và giá trị), còn vectơ vận tốc tuyệt đối của điểm $M$ chưa biết.

Để tìm $\vec{v}_M$ chúng ta có thể sử dụng phương pháp vẽ : $\vec{v}_M$ là vectơ chéo của hình bình hành có hai cạnh $\vec{v}_e$ và $\vec{v}_r$. Giá trị $v_M$ bằng :

$$v_M = \sqrt{v_e^2 + v_r^2 + 2v_e v_r \cos 60^\circ} = 21{,}07\text{ m/s}.$$

Phương chiều của $\vec{v}_M$ có thể xác định qua góc $\alpha$ của nó với phương ngang. Dựa vào hệ thức sin trong tam giác dễ dàng tìm được :

$$\sin\alpha = O_1A \frac{\omega_o}{v_M} \cos\varphi.$$

Có thể xác định $\vec{v}_M$ qua hai hình chiếu của nó trên hai trục vuông góc thẳng đứng và nằm ngang.

$$\vec{v}_M \begin{cases}
v_{Mx} = v_e\cos\varphi + v_r, \\
v_{My} = v_e\sin\varphi.
\end{cases}$$

Từ đó xác định được giá trị $v_M$.

$$v_M = \sqrt{v_{Mx}^2 + v_{My}^2} \, ,$$

còn phương chiều của nó được xác định qua các cosin chỉ phương.

*3 – Gia tốc*

– Chuyển động theo là tịnh tiến, dựa vào định lí hợp gia tốc trong hợp chuyển động điểm, dạng (10–2) ta có :

$$\vec{a}_M = \vec{a}_e + \vec{a}_r,$$

trong đó : $\vec{a}_e = \vec{a}_{M^*} = \vec{a}_A$, vì trùng điểm $M^*$ thuộc thanh $AB$ chuyển động tịnh tiến. Mặt khác, điểm $A$ nằm trên khâu quay $O_1A$ nên :

$$\vec{a}_A = \vec{a}_A^t + \vec{a}_A^n \, ;$$

$\vec{a}_A^t \perp O_1A$ ; $a_A^t = O_1A.\varepsilon = O_1A \dfrac{d\omega}{dt} = 0{,}5.2 = 1\text{ m/s}^2$ ;

$\vec{a}_A^n$ hướng từ $A$ đến $O_1$, $a_A^n = O_1A.\omega^2 = 0{,}5(2t)^2$ ;

Lúc $t = 2\text{s}$ ; $a_A^n = 8\text{ m/s}^2$,

$\vec{a}_r$ hướng dọc $AB$,

$$a_r = \ddot{\xi} = 10\text{ m/s}^2$$

Biểu thức gia tốc của điểm $M$ được viết trong dạng sau :

$$\vec{a}_M = \vec{a}_A^t + \vec{a}_A^n + \vec{a}_r. \tag{b}$$

– Các vectơ gia tốc được biểu diễn như trên hình 10–5.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_5.svg" alt="Hình 10-5" class="figure-img" />
  <p class="figure-caption">Hình 10-5</p>
</div>

– Trong phương trình vectơ (b), các vectơ đều được xác định cả phương chiều và giá trị trừ vectơ $\vec{a}_M$. Để tìm gia tốc của điểm $M$, ta tìm các hình chiếu của nó trên hai trục vuông góc thẳng đứng và nằm ngang.

$$\vec{a}_M \begin{cases}
\begin{aligned}
a_{Mx} &= a_A^t\cos 60^\circ - a_A^n\cos 30^\circ + a_r \\
&= 1\frac{1}{2} - 8\frac{\sqrt{3}}{2} + 10 = 3{,}58\text{ m/s}^2,
\end{aligned} \\[8pt]
\begin{aligned}
a_{My} &= -a_A^t\sin 60^\circ - a_A^n\sin 30^\circ \\
&= -\left(\frac{\sqrt{3}}{2} + 4\right)\text{ m/s}^2.
\end{aligned}
\end{cases}$$

Giá trị $a_M$ được xác định qua biểu thức

$$a_M = \sqrt{a_{Mx}^2 + a_{My}^2} = 6{,}1\text{ m/s}^2,$$

còn phương chiều của nó được xác định qua các cosin chỉ phương.

$$\cos(Ox, \vec{a}_M) = \frac{a_{Mx}}{a_M} = \frac{3{,}58}{6{,}1} \, ;$$

$$\cos(Oy, \vec{a}_M) = \frac{a_{My}}{a_M} = \frac{4{,}865}{6{,}1} \, .$$

---

#### Thí dụ 10–3

Vành tròn bán kính $R = 20\text{ cm}$ quay trong mặt phẳng của nó quanh trục $O$ với vận tốc góc không đổi $\omega_o = 3\text{ rad/s}$. Điểm $M$ chuyển động trên vành theo luật $s = \widehat{OM} = 5\pi t\text{ cm}$.

Tìm vận tốc và gia tốc tuyệt đối của điểm $M$ lúc $t = 2\text{s}$.

*Bài giải :*

*1 – Phân tích chuyển động :* Điểm $M$ chuyển động đối với vành, vành quay quanh trục $O$. Vì vậy có bài toán hợp chuyển động đối với điểm $M$. Chọn vành làm hệ động.

– Chuyển động của vành là chuyển động theo. Đó là chuyển động quay đều quanh trục $O$ với vận tốc góc $\omega_o = 3\text{ rad/s}$.

– Chuyển động của $M$ trên vành là chuyển động tương đối. Đó là chuyển động tròn với luật chuyển động $s = 5\pi t$.

– Chuyển động của điểm $M$ đối với giá cố định là chuyển động tuyệt đối, các đặc trưng động học của nó chưa được xác định.

*2 – Vận tốc :*

– Sử dụng định lí hợp vận tốc trong hợp chuyển động cho điểm $M$ :

$$\vec{v}_M = \vec{v}_e + \vec{v}_r. \tag{a}$$

Để xác định các vectơ vận tốc tại $t = 2\text{ s}$, đầu tiên chúng ta xác định vị trí của điểm $M$ tại $t = 2\text{s}$, khi $t = 2\text{s}$ :

$$s = 10\pi = R\frac{\pi}{2} = \widehat{OA} \, .$$

Vậy tại thời điểm $t = 2\text{s}$ điểm $M$ ở tại vị trí $A$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_6.svg" alt="Hình 10-6" class="figure-img" />
  <p class="figure-caption">Hình 10-6</p>
</div>

$\vec{v}_e = \vec{v}_{M^*} = \vec{v}_A$. Vậy $\vec{v}_e$ có phương thẳng góc $OA$, có giá trị $v_e = OA.\omega_e = \omega_o R\sqrt{2} = 60\sqrt{2}\text{ cm/s}$ và có chiều thuận chiều $\overline{\omega}_o$ như hình 10–6.

$\vec{v}_r$ tại thời điểm $t = 2\text{s}$ tiếp tuyến với vành tròn tại $A$ (hướng lên).

– Các vectơ vận tốc được biểu diễn như hình 10–6.

– Trong phương trình vectơ (a) các vectơ $\vec{v}_e, \vec{v}_r$ đã xác định được cả phương chiều và giá trị, vectơ $\vec{v}_M$ chưa xác định được.

– Để tìm $\vec{v}_M$, chiếu hai vế của (a) lên hai trục vuông góc nằm ngang và thẳng đứng (H. 10–6).

$$v_M \begin{cases}
v_{Mx} = -v_e\cos 45^\circ = -60\text{ cm/s}, \\
v_{My} = -v_e\sin 45^\circ + v_r = 44{,}3\text{ cm/s}.
\end{cases}$$

Do đó :

$$v_M = \sqrt{v_{Mx}^2 + v_{My}^2} = \sqrt{60^2 + (44{,}3)^2} = 74{,}6\text{ cm/s}$$

$$\cos(Ox, \vec{v}_M) = -\frac{60}{74{,}6} \, ; \quad \cos(Oy, \vec{v}_M) = \frac{44{,}3}{74{,}6} \, .$$

*3 – Gia tốc*

– Biểu thức gia tốc của động điểm $M$ : Vì chuyển động theo là quay đều, còn chuyển động tương đối là tròn đều, nên dựa vào định lí hợp gia tốc trong hợp chuyển động điểm, dạng (10–3) ta có :

$$\vec{a}_M = \vec{a}_e^n + \vec{a}_r^n + \vec{a}_c, \tag{b}$$

$\vec{a}_e^n = \vec{a}_A^n$ có phương dọc $AO$ và chiều hướng từ $A$ đến $O$, có giá trị :

$$a_e^n = a_A^n = OA.\omega_o^2 = R\sqrt{2}\omega_o^2 = 180\sqrt{2}\text{ cm/s}^2,$$

(trùng điểm $M^*$ là điểm $A$ thuộc vành tròn).

$\vec{a}_r^n$ hướng vào tâm $I$ của vành tròn và có giá trị

$$a_r^n = \frac{v_r^2}{R} = \frac{5}{4}\pi^2.$$

$\vec{a}_c$ được xác định theo quy tắc đã nêu trên ($\vec{\omega}_e \perp \vec{v}_r$ do đó phương chiều $\vec{a}_c$ có được bằng cách quay $\vec{v}_r$ quanh $\overline{\omega}_o$ theo chiều quay của vành một góc $\dfrac{\pi}{2}$ và

$$a_c = 2\omega_o . v_r = 2.3.5\pi = 30\pi\text{ cm/s}^2.$$

– Các vectơ gia tốc được biểu diễn như trên hình 10–7.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_7.svg" alt="Hình 10-7" class="figure-img" />
  <p class="figure-caption">Hình 10-7</p>
</div>

– Trong phương trình vectơ gia tốc (b) vectơ $\vec{a}_M$ chưa xác định cả phương chiều và giá trị, nó được xác định qua hai hình chiếu của nó trên hai trục vuông góc nằm ngang và thẳng đứng :

$$\vec{a}_M \begin{cases}
a_{Mx} = a_e^n\cos 45^\circ + a_r^n - a_C = 98{,}1\text{ cm/s}^2, \\
a_{My} = -a_e^n\sin 45^\circ = -180\text{ cm/s}^2.
\end{cases}$$

Vậy :

$$\begin{aligned}
a_M &= \sqrt{a_{Mx}^2 + a_{My}^2} = \sqrt{(98{,}1)^2 + (180)^2} \\
&= 205\text{ cm/s}^2 \, ;
\end{aligned}$$

$$\cos(Ox, \vec{a}_M) = \frac{98{,}1}{205} \, ; \quad \cos(Oy, \vec{a}_M) = -\frac{180}{205} \, .$$

---

#### Thí dụ 10–4

Nửa đĩa tròn bán kính $R = 40\text{ cm}$ quay đều với vận tốc góc $\omega_o = 0{,}5\text{ rad/s}$ quanh đường kính $AB$. Điểm $M$ chuyển động theo vành đĩa với vận tốc không đổi $u = 10\text{ cm/s}$. Tìm vận tốc và gia tốc tuyệt đối của điểm $M$ lúc $\widehat{AOM} = 45^\circ$.

*Bài giải :*

*1 – Phân tích chuyển động :* Điểm $M$ chuyển động đối với vành, vành quay quanh trục cố định. Ta có bài toán hợp chuyển động đối với điểm $M$. Chọn vành làm hệ động.

– Chuyển động của vành là chuyển động theo. Đó là chuyển động quay đều quanh trục cố định với vận tốc góc $\omega_o = 0{,}5\text{ rad/s}$.

– Chuyển động của điểm $M$ theo vành là chuyển động tương đối. Đó là chuyển động tròn đều với vận tốc $u$ trên đường tròn tâm $O$, bán kính $R$.

– Chuyển động của điểm $M$ đối với giá cố định là chuyển động tuyệt đối ; các đặc trưng động học của nó chưa biết.

*2 – Vận tốc :*

– Sử dụng định lí hợp vận tốc trong hợp chuyển động, ta có

$$\vec{v}_M = \vec{v}_e + \vec{v}_r, \tag{a}$$

trong đó : $\vec{v}_e = \vec{v}_{M^*}$ ; $M^*$ là điểm của vành và trùng với $M$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_8.svg" alt="Hình 10-8" class="figure-img" />
  <p class="figure-caption">Hình 10-8</p>
</div>

Vậy $\vec{v}_e$ có phương vuông góc với mặt phẳng hình vẽ có chiều hướng vào trong (được kí hiệu $\otimes$) và có trị số :

$$v_e = \omega_o R\sin 45^\circ = 10\sqrt{2}\text{ cm/s}.$$

$\vec{v}_r = \vec{u}$ có phương tiếp tuyến đường tròn tại $M$ ; $v_r = u = 10\text{ m/s}$.

– Các vectơ được biểu diễn như trên hình 10–8.

– Vectơ $\vec{v}_M$ có thể tìm được nhờ phương pháp vẽ hoặc qua ba hình chiếu của nó trên hệ trục toạ độ Đêcác $Oxyz$

$$\vec{v}_M \begin{cases}
v_{Mx} = -v_e = -10\sqrt{2}\text{ cm/s}, \\
v_{My} = u\cos 45^\circ = 5\sqrt{2}\text{ cm/s}, \\
v_{Mz} = u\sin 45^\circ = 5\sqrt{2}\text{ cm/s}.
\end{cases}$$

Từ đó :

$$\begin{aligned}
v_M &= \sqrt{v_e^2 + u^2\cos^2 45^\circ + u^2\sin^2 45^\circ} \\
&= \sqrt{v_e^2 + u^2} = 10\sqrt{3}\text{ cm/s} \, ;
\end{aligned}$$

$$\cos(Ox, \vec{v}_M) = \frac{v_{Mx}}{v} = -\sqrt{\frac{2}{3}} \, ,$$

$$\cos(Oy, \vec{v}_M) = \frac{v_{My}}{v} = \frac{\sqrt{6}}{6} \, ,$$

$$\cos(Oz, \vec{v}_M) = \frac{v_{Mz}}{v} = \frac{\sqrt{6}}{6} \, .$$

*3 – Gia tốc*

– Chuyển động theo là quay đều và chuyển động tương đối là tròn đều, nên dựa vào định lí hợp gia tốc trong hợp chuyển động điểm đối với điểm $M$ ta có :

$$\vec{a}_M = a_e^n + a_r^n + \vec{a}_c, \tag{b}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_9.svg" alt="Hình 10-9" class="figure-img" />
  <p class="figure-caption">Hình 10-9</p>
</div>

$\vec{a}_e^n$ hướng vào trục quay và có giá trị :

$$a_e^n = \omega_o^2 R\sin 45^\circ = 5\sqrt{2}\text{ cm/s}^2,$$

$\vec{a}_r^n$ hướng dọc bán kính $MO$ :

$$a_r^n = \frac{u^2}{R} = 2{,}5\text{ cm/s}^2 \, ;$$

$\vec{a}_c = 2\vec{\omega}_o \wedge \vec{v}_r$ được xác định theo quy tắc đã nêu, (phương chiều $\vec{a}_c$ có được bằng cách quay $\vec{v}'_r$ một góc $90^\circ$ quanh $\vec{\omega}_o$ theo chiều $\overline{\omega}_o$) và có giá trị :

$$a_c = 2\omega_o v'_r = 2.0{,}5\frac{u\sqrt{2}}{2} = 5\sqrt{2}\text{ cm/s}^2.$$

– Các vectơ gia tốc được biểu diễn như trên hình 10–9.

– Trong phương trình vectơ (b), vectơ gia tốc của điểm $M$ chưa xác định cả phương chiều và giá trị, nó có thể được xác định qua các hình chiếu của nó lên hệ trục toạ độ Đêcác $Oxyz$.

$$\vec{a}_M \begin{cases}
a_{Mx} = -a_c = -5\sqrt{2}\text{ cm/s}^2, \\
a_{My} = -a_e^n - a_r^n\cos 45^\circ = -\dfrac{25}{4}\sqrt{2}\text{ cm/s}^2, \\
a_{Mz} = a_r^n\sin 45^\circ = 5\dfrac{\sqrt{2}}{4}\text{ cm/s}^2.
\end{cases}$$

Từ đó :

$$\begin{aligned}
a_M &= \sqrt{(5\sqrt{2})^2 + \left(25\frac{\sqrt{2}}{4}\right)^2 + \left(5\frac{\sqrt{2}}{4}\right)^2} \\
&\approx 11{,}5\text{ cm/s}^2
\end{aligned}$$

$$\cos(Ox, \vec{a}_M) = -5\frac{\sqrt{2}}{9} \, ; \quad \cos(Oy, \vec{a}_M) = \frac{-15\sqrt{2}}{36} \, ;$$

$$\cos(Oz, \vec{a}_M) = 5\frac{\sqrt{2}}{36} \, .$$

---

### 10.3.3. Bài toán phân tích chuyển động

#### Thí dụ 10–5

Tay quay $OA$ có chiều dài $l$ quay quanh trục cố định qua $O$ với vận tốc góc $\omega_o = \text{const}$ làm cho cần $K$ trượt theo phương ngang. Tìm vận tốc và gia tốc của cần $K$ ; vận tốc và gia tốc của con trượt $A$ đối với cần $K$. Cho biết tại vị trí đang xét $\varphi = 30^\circ$ (H. 10–10).

*Bài giải.*

*1 – Phân tích chuyển động :* Điểm $A$ chuyển động đối với $K$, cần $K$ chuyển động đối với giá cố định. Do đó có bài toán tổng hợp chuyển động đối với điểm $A$. Chọn cần $K$ làm hệ động.

– Chuyển động của cần $K$ đối với giá là chuyển động theo. Đó là chuyển động tịnh tiến, các yếu tố động học của nó chưa được xác định (hoàn toàn).

– Chuyển động của điểm $A$ đối với cần $K$ là chuyển động tương đối. Đó là chuyển động thẳng, có các yếu tố động học chưa được xác định (hoàn toàn).

– Chuyển động của điểm $A$ đối với giá là chuyển động tuyệt đối. Đó là chuyển động tròn đều trên đường tròn tâm $O$, bán kính $OA$. Các yếu tố động học của nó hoàn toàn xác định do chuyển động của tay quay $OA$ được xác định.

*2 – Vận tốc*

– Khi sử dụng định lí hợp vận tốc trong hợp chuyển động đối với điểm $A$, ta có :

$$\vec{v}_A = \vec{v}_e + \vec{v}_r. \tag{a}$$

trong đó $\vec{v}_A$ có phương thẳng góc với $OA$, thuận chiều $\overline{\omega}_o$ và có giá trị $v_A = l\omega_o$.

Để tính vận tốc $\vec{v}_e$ ta lấy điểm $A^*$ thuộc cần $K$ là trùng điểm của $A$. Do cần $K$ tịnh tiến theo phương ngang nên $\vec{v}_e$ hướng theo phương ngang.

Vì chuyển động tương đối của $A$ dọc theo đường thẳng đứng đối với cần $K$ nên $\vec{v}_r$ có phương thẳng đứng.

– Các vectơ vận tốc được biểu diễn như trên hình 10–10.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_10.svg" alt="Hình 10-10" class="figure-img" />
  <p class="figure-caption">Hình 10-10</p>
</div>

– Trong phương trình vectơ (a) vectơ $\vec{v}_A$ đã được hoàn toàn xác định cả phương chiều và giá trị ; các vectơ $\vec{v}_r$ và $\vec{v}_e$ chỉ biết được phương, còn chiều và giá trị chưa được xác định.

Để tìm giá trị $v_e$ và $v_r$ có thể sử dụng phương pháp vẽ. Dễ dàng tính được :

$$\begin{aligned}
v_r &= v_A\cos\varphi = \frac{l}{2}\omega_o \, ; \\
v_e &= v_A\sin\varphi = \frac{l\sqrt{3}}{2}\omega_o.
\end{aligned}$$

$\vec{v}_r$ là vận tốc của con trượt $A$ đối với cần $K$, còn $\vec{v}_e$ chính là vận tốc của cần $K$ (tại thời điểm khảo sát).

*3 – Gia tốc*

– Áp dụng định lí hợp gia tốc cho điểm $A$ trong trường hợp chuyển động theo là tịnh tiến, ta có :

$$\vec{a}_A = \vec{a}_e + \vec{a}_r, \tag{b}$$

vì $A$ nằm trên tay quay $OA$ quay đều, nên $\vec{a}_A$ có phương dọc $OA$, chiều hướng từ $A$ về $O$ và có giá trị :

$$a_A = l\omega_o^2.$$

Vì chuyển động tương đối là chuyển động thẳng nên $\vec{a}_r$ có cùng phương với $\vec{v}_r$, còn chiều và giá trị chưa được xác định, còn $\vec{a}_e = \vec{a}_{A^*}$ trong đó $A^*$ là điểm thuộc cần $K$ trùng với $A$. Vì cần $K$ tịnh tiến ngang nên $\vec{a}_e$ có phương ngang, chiều và giá trị chưa được xác định.

– Các vectơ gia tốc được biểu diễn như trên hình 10–11.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_11.svg" alt="Hình 10-11" class="figure-img" />
  <p class="figure-caption">Hình 10-11</p>
</div>

– Phương trình vectơ (b) chứa hai ẩn : đó là giá trị của các vectơ $\vec{a}_e, \vec{a}_r$. Để xác định chúng có thể dùng phương pháp vẽ theo quy tắc bình hành. Dễ dàng tìm được :

$$\begin{aligned}
a_e &= a_A\cos 60^\circ = \frac{1}{2}\omega_o^2 \, ; \\
a_r &= a_A\sin 60^\circ = \frac{l\sqrt{3}}{2}\omega_o^2.
\end{aligned}$$

Chiều của các vectơ $\vec{a}_e, \vec{a}_r$ được chỉ ra trên hình 10–11. Tại thời điểm khảo sát con trượt chuyển động chậm dần và cần $K$ tịnh tiến nhanh dần về phía phải.

---

#### Thí dụ 10–6

Tay quay $OA$ có chiều dài $l = 10\text{ cm}$ quay đều với vận tốc góc $\omega_o = 6\text{ rad/s}$ làm cho con trượt $A$ trượt dọc cần lắc $O_1B$. Lúc $OA$ nằm ngang $\varphi = 30^\circ$.

Tìm vận tốc trượt của $A$ dọc cần lắc, vận tốc góc $\overline{\omega}_1$ của cần lắc.

Tìm gia tốc của con trượt $A$ và gia tốc góc $\overline{\varepsilon}_1$ của cần lắc.

*Bài giải :*

*1 – Phân tích chuyển động :* Điểm $A$ chuyển động dọc thanh $O_1B$, thanh $O_1B$ quay quanh trục cố định qua $O_1$. Ta có bài toán hợp chuyển động điểm đối với điểm $A$. Chọn $O_1B$ làm hệ động.

– Chuyển động của thanh $O_1B$ đối với giá cố định là chuyển động theo, đó là chuyển động quay xung quanh một trục cố định, các yếu tố động học chưa được xác định (hoàn toàn).

– Chuyển động của điểm $A$ dọc $O_1B$ là chuyển động tương đối. Đó là chuyển động thẳng, có các yếu tố động học chưa được xác định (hoàn toàn).

– Chuyển động của điểm $A$ đối với giá cố định là chuyển động tuyệt đối. Đó là chuyển động tròn đều dọc đường tròn tâm $O$ bán kính $OA$. Các yếu tố động học của chuyển động này được hoàn toàn xác định vì tay quay $OA$ quay đều với vận tốc góc đã cho $\omega_o = 6\text{ rad/s}$.

*2 – Vận tốc :*

– Viết biểu thức hợp vận tốc cho điểm $A$

$$\vec{v}_A = \vec{v}_e + \vec{v}_r, \tag{a}$$

trong đó : $\vec{v}_A$ có phương thẳng góc với $OA$, chiều phù hợp với chiều của $\overline{\omega}_o$ và có giá trị $v_A = l\omega_o$ ($\vec{v}_A$ hướng thẳng đứng lên).

$\vec{v}_r$ dọc thanh $O_1B$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_12.svg" alt="Hình 10-12" class="figure-img" />
  <p class="figure-caption">Hình 10-12</p>
</div>

$\vec{v}_e = \vec{v}_{A^*}$, ở đó $A^*$ thuộc thanh $O_1B$ trùng với điểm $A$ tại thời điểm khảo sát. Do đó $\vec{v}_e$ có phương thẳng góc với thanh $O_1B$ tại $A$, chiều và giá trị chưa được xác định :

– Các vectơ vận tốc được biểu diễn trên hình 10–12.

– Trong phương trình vectơ (a), vectơ $\vec{v}_A$ hoàn toàn được xác định cả phương chiều và giá trị, các vectơ $\vec{v}_e$ và $\vec{v}_r$ chỉ được xác định về phương. Hai ẩn của phương trình vectơ (a) là các giá trị $v_e$ và $v_r$. Các ẩn này thuộc hai vectơ khác nhau. Đó chính là đặc điểm của bài toán phân tích chuyển động. Để xác định các ẩn của bài toán có thể sử dụng phương pháp vẽ bằng cách phân tích $\vec{v}_A$ theo hai phương đã biết của $\vec{v}_e$ và $\vec{v}_r$, cũng có thể chiếu hai vế của đẳng thức vectơ (a) lên hai trục thích hợp. Cụ thể để tìm giá trị $v_r$ chúng ta chiếu hai vế của (a) lên trục $O_1B$ (chiều của các vectơ $\vec{v}_e$ và $\vec{v}_r$ được giả định như trên hình 10–12. Ta có :

$$v_A\cos\varphi = v_r \, .$$

Vậy $\vec{v}_r$ có giá trị $v_r = l\omega_o\cos 30^\circ = 30\sqrt{3}\text{ cm/s}$, có chiều như chiều giả định :

Để tìm giá trị $v_e$ chiếu hai vế của (a) lên trục thẳng góc với phương của $\vec{v}_r$ :

$$v_A\sin\varphi = v_e \, .$$

Do đó $\vec{v}_e$ có giá trị :

$$v_e = l\omega_o\sin 30 = 30\text{ cm/s},$$

và có chiều như chiều giả định.

Vì $\vec{v}_e$ là vận tốc của điểm $A^*$ thuộc $O_1A$ nên dễ dàng tìm vận tốc góc của khâu $O_1B$ :

$$\omega_1 = \frac{v_{A^*}}{O_1A^*} = \frac{v_e}{O_1A} = \frac{30}{20} = 1{,}5\text{ rad/s}.$$

Tại thời điểm khảo sát thanh $O_1B$ quay ngược chiều kim đồng hồ.

*3 – Gia tốc*

Vì chuyển động theo là quay quanh một trục cố định nên dựa vào định lí hợp gia tốc trong hợp chuyển động :

$$\vec{a}_A = \vec{a}_e + \vec{a}_r + \vec{a}_c.$$

Thanh $OA$ quay đều quanh $O$ với vận tốc góc $\omega_o$ nên $\vec{a}_A$ hướng dọc $AO$ từ $A$ đến $O$ và có giá trị :

$$a_A = l\omega_o^2 = 360\text{ cm/s}^2 \, ;$$

$$\vec{a}_c = 2\vec{\omega}_e \wedge \vec{v}_r = 2\vec{\omega}_1 \wedge \vec{v}_r,$$

phương chiều của $\vec{a}_c$ được xác định theo quy tắc đã nêu ở trên (quay $\vec{v}_r$ góc $\dfrac{\pi}{2}$ theo chiều $\overline{\omega}_1$) và có giá trị :

$$a_c = 2\omega_1 v_r = 90\sqrt{3}\text{ cm/s}^2,$$

$$\vec{a}_e = \vec{a}_{A^*} = \vec{a}_e^n + \vec{a}_e^t$$

$\vec{a}_e^n$ hướng dọc $BO_1$ từ $A$ đến $O_1$ và $\vec{a}_e^n = O_1A.\omega_1^2 = 45\text{ cm/s}^2$ ; $\vec{a}_e^t$ có phương thẳng góc $O_1B$ tại $A$ có chiều và giá trị chưa xác định.

$\vec{a}_r$ hướng dọc $O_1B$, chiều và giá trị chưa xác định.

Biểu thức gia tốc có thể viết lại :

$$\vec{a}_A = \vec{a}_e^n + \vec{a}_e^t + \vec{a}_r + \vec{a}_c. \tag{b}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_13.svg" alt="Hình 10-13" class="figure-img" />
  <p class="figure-caption">Hình 10-13</p>
</div>

– Các vectơ gia tốc được biểu diễn như trên hình 10–13.

– Trong phương trình vectơ (b) có hai ẩn là các giá trị $a_r$ và $a_e^t$.

Để tìm chúng, chiếu hai vế của (b) lên hai trục $\Delta_1$ và $\Delta_2$ ta được hai phương trình :

$$\begin{aligned}
-a_A\sin\varphi &= -a_e^n + a_r, \\
a_A\cos\varphi &= a_e^t + a_C.
\end{aligned}$$

Giải chúng, ta nhận được :

$$\begin{aligned}
a_r &= a_e^n - a_A\sin\varphi = -135\text{ cm/s}^2 \, ; \\
a_e^t &= a_e^n\cos\varphi - a_C = 90\sqrt{3}\text{ cm/s}^2.
\end{aligned}$$

Kết quả nhận được chứng tỏ $\vec{a}_r$ có chiều ngược với chiều giả định, còn $\vec{a}_e^t$ có chiều giả định. Vì $\vec{a}_e^t = \vec{a}_{A^*}^t$ nên :

$$\varepsilon_1 = \frac{a_e^t}{O_1A} = \frac{90\sqrt{3}}{20} = 4{,}5\sqrt{3}\text{ rad/s}^2.$$

Căn cứ vào chiều $\vec{a}_e^t$ tại thời điểm khảo sát, suy ra $\overline{\varepsilon}_1$ ngược chiều kim đồng hồ, tức cần lắc quay nhanh dần. Con trượt $A$ chuyển động chậm dần.

---

#### Thí dụ 10–7

Cam là một đĩa tròn bán kính $R$, tâm $C$ quay đều quanh trục cố định qua $O$ với vận tốc góc $\omega_o$ làm cho cần đẩy $AB$ chuyển động dọc theo rãnh $K$. Độ lệch tâm $OC = \dfrac{R}{\sqrt{2}}$. Tìm vận tốc và gia tốc của cần đẩy tại thời điểm ứng với $\alpha = 30^\circ$ ; $\varphi = 45^\circ$, (H. 10–14).

*Bài giải :*

*1 – Phân tích chuyển động :* Đối với cam, điểm $A$ của cần chuyển động trên biên tròn của cam, còn cam quay quanh trục cố định qua $O$. Ta có bài toán hợp chuyển động với điểm $A$. Chọn cam làm hệ quy chiếu động.

– Chuyển động của cam là chuyển động theo. Đó là chuyển động quay đều với vận tốc góc $\overline{\omega}_o$ đã biết.

– Chuyển động của điểm $A$ đối với cam là chuyển động tương đối. Đó là chuyển động tròn theo biên tròn của cam. Các yếu tố động học chưa xác định, nhưng biết được quỹ đạo chuyển động.

– Chuyển động của điểm $A$ đối với giá cố định là chuyển động tuyệt đối. Đó là chuyển động thẳng dọc $AB$ với vận tốc và gia tốc chưa xác định về giá trị.

*2 – Vận tốc*

– Định lí hợp vận tốc của điểm trong hợp chuyển động điểm cho ta :

$$\vec{v}_A = \vec{v}_e + \vec{v}_r, \tag{a}$$

trong đó : $\vec{v}_A$ hướng dọc $OB$ chưa biết được trị số ; $\vec{v}_r$ hướng tiếp tuyến với quỹ đạo tương đối của điểm, tức tiếp tuyến với biên tròn của cam (thẳng góc với $CA$) chưa xác định được giá trị ; còn $\vec{v}_e = \vec{v}_{A^*}$, ở đó $A^*$ là điểm thuộc cam và trùng với $A$ tại thời điểm khảo sát.

Vectơ vận tốc $\vec{v}_e$ có phương thẳng góc với $OA^*$ (tức $OA$), có chiều thuận chiều $\overline{\omega}_o$ và có giá trị :

$$v_e = \omega_o.OA^* = \omega_o.OA = l\omega_o,$$

trong đó : $l = OA = \dfrac{R}{2}(1 + \sqrt{3})$.

– Các vectơ vận tốc được biểu diễn như trên hình 10–14.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_14.svg" alt="Hình 10-14" class="figure-img" />
  <p class="figure-caption">Hình 10-14</p>
</div>

– Phương trình vectơ (a) chứa hai ẩn là các giá trị $v_r$ và $v_A$. Để giải chúng có thể sử dụng phương pháp vẽ hoặc chiếu hai vế của (a) lên hai trục thích hợp. Dễ dàng tìm được :

$$v_A = v_e\operatorname{tg}30^\circ = \frac{l\sqrt{3}}{3}\omega_o \, ; \quad v_r = \frac{v_e}{\cos 30^\circ} = \frac{2\sqrt{3}}{3}\omega_o \, ,$$

$\vec{v}_A$ chính là vận tốc của cần $AB$.

*3 – Gia tốc*

– Sử dụng định lí hợp gia tốc trong hợp chuyển động điểm cho điểm $A$ với chuyển động theo không phải là tịnh tiến nên :

$$\vec{a}_A = \vec{a}_e + \vec{a}_r + \vec{a}_c,$$

trong đó : $\vec{a}_A$ hướng dọc $OB$, chưa biết được trị số và chiều của nó ; $\vec{a}_e = \vec{a}_{A^*}$, ở đó $A^*$ là điểm thuộc về cam, trùng với điểm $A$ tại thời điểm khảo sát, $\vec{a}_e^n = \vec{a}_{A^*}^n$ có phương dọc $AO$, chiều hướng từ $A$ đến $O$ và có giá trị $a_e^n = l\omega_o^2$ ; còn $\vec{a}_e^r = \vec{a}_{A^*}^r$ có giá trị $a_e^t = 0$ (vì $\omega_o = \text{const}$).

Chuyển động tương đối là chuyển động tròn theo biên của cam, nên :

$$\vec{a}_r = \vec{a}_r^t + \vec{a}_r^n,$$

$\vec{a}_r^n$ hướng dọc $AC$ từ $A$ đến $C$ và có giá trị :

$$a_r^n = \frac{v_r^2}{R} = \frac{4l^2}{3R}\omega_o^2,$$

$a_r^t$ tiếp tuyến với biên của cam (thẳng góc với bán kính $CA$), có giá trị và chiều chưa xác định.

$\vec{a}_c$ được xác định theo quy tắc được nêu : quay $\vec{v}_r$ một góc $\dfrac{\pi}{2}$ theo chiều quay của cam nhận được phương và chiều của $\vec{a}_c$ và $a_c = 2\omega_o v_r = \dfrac{4l\sqrt{3}}{3}\omega_o^2$.

Biểu thức gia tốc của điểm $A$ có thể viết lại như sau :

$$\vec{a}_A = \vec{a}_e^n + \vec{a}_r^n + \vec{a}_r^t + \vec{a}_c. \tag{b}$$

– Các vectơ gia tốc được biểu diễn như hình 10–15.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_15.svg" alt="Hình 10-15" class="figure-img" />
  <p class="figure-caption">Hình 10-15</p>
</div>

– Phương trình vectơ (b) chứa hai ẩn : đó là giá trị của các vectơ $\vec{a}_A$ và $\vec{a}_r^t$. Để xác định chúng, ta chiếu hai vế của đẳng thức (b) lên hai trục thích hợp. Để tìm giá trị $\vec{a}_r^t$, chiếu hai vế của (b) lên phương ngang, ta nhận được một phương trình đại số chỉ chứa $a_r^t$ ; còn để tìm giá trị $a_A$ chiếu hai vế của (b) lên trục $\overrightarrow{CA}$ ta được một phương trình đại số khác chỉ chứa $a_A$. Khi thực hiện các phép chiếu ta nhận được :

$$\begin{aligned}
0 &= a_r^n\sin\alpha + a_r^t\cos\alpha - a_c\sin\alpha, \\
a_A\cos\alpha &= a_e^n\cos\alpha + a_r^n - a_c.
\end{aligned}$$

Vậy :

$$\begin{aligned}
a_r^t &= (a_c - a_r^n)\operatorname{tg}\alpha = \frac{2l\omega_o^2}{3}(\sqrt{3} - 1) > 0, \\
a_A &= \frac{l\omega_o^2}{9}(4\sqrt{3} - 3) > 0.
\end{aligned}$$

Chiều giả định của $\vec{a}_r^t$ và $\vec{a}_A$ là đúng. Tại thời điểm khảo sát cần $AB$ chuyển động nhanh dần xuống phía dưới.

---

#### Thí dụ 10–8

Cho cơ cấu như hình 10–16. Thanh I chuyển động nhanh dần lên phía trên truyền chuyển động qua thanh $AC$ và con trượt $B$ làm cho thanh II chuyển động tịnh tiến ngang. Tìm gia tốc góc của thanh $AC$ và gia tốc của con trượt $B$ đối với thanh $AC$ khi cơ cấu ở vị trí ứng với góc $\alpha = 30^\circ$, $BO = 3\text{ cm}$, thanh I có vận tốc $v_1 = \sqrt{3}\text{ cm/s}$, gia tốc $a_1 = 3\text{ cm/s}^2$ còn thanh II có vận tốc $v_2 = 5\text{ cm/s}$, gia tốc $a_2 = 1\text{ cm/s}^2$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_16.svg" alt="Hình 10-16" class="figure-img" />
  <p class="figure-caption">Hình 10-16</p>
</div>

*Bài giải.*

*1 – Phân tích chuyển động :* Con trượt $B$ chuyển động đối với thanh $AC$, thanh $AC$ lại chuyển động. Ta có bài toán hợp chuyển động đối với điểm $B$. Chọn hệ quy chiếu động là thanh $AC$.

– Chuyển động của thanh $AC$ đối với giá cố định là chuyển động theo. Đó là chuyển động song phẳng, đối với nó chỉ biết được vận tốc và gia tốc điểm $A$ thuộc vật.

– Chuyển động của con trượt $B$ đối với thanh $AC$ là chuyển động tương đối. Đó là chuyển động thẳng dọc thanh $AC$. Đối với chuyển động này chỉ biết được phương của vận tốc và gia tốc.

– Chuyển động của $B$ đối với giá cố định là chuyển động tuyệt đối. Đó là chuyển động thẳng theo phương ngang, tại thời điểm khảo sát vận tốc và gia tốc của nó đã cho.

*2 – Vận tốc*

– Dựa vào định lí hợp vận tốc trong hợp chuyển động điểm ta có :

$$\vec{v}_B = \vec{v}_e + \vec{v}_r,$$

trong đó : $\vec{v}_B = \vec{v}_2$ còn $\vec{v}_r$ hướng dọc theo $AC$ ; $\vec{v}_e = \vec{v}_{B^*}$, ở đó $B^*$ là trùng điểm của $B$ thuộc thanh $AC$. Dựa vào định lí về quan hệ trong chuyển động song phẳng đối với hai điểm $A$ và $B^*$ đều thuộc khâu song phẳng $AC$, ta có :

$$\vec{v}_{B^*} = \vec{v}_A + \vec{v}_{B^*A}.$$

Bây giờ biểu thức vận tốc tuyệt đối của điểm $B$ có thể viết dưới dạng :

$$\vec{v}_B = \vec{v}_A + \vec{v}_{B^*A} + \vec{v}_r, \tag{a}$$

trong đó : $\vec{v}_A = \vec{v}_1$ còn $\vec{v}_{B^*A}$ là vận tốc của điểm $B^*$ trong chuyển động của thanh $AC$ quay quanh cực $A$, chúng ta chỉ biết phương của nó thẳng góc với thanh $AC$, nhưng chưa biết chiều (phải giả định) và trị số ($v_{B^*A} = \omega_{AC}.B^*A$, trong đó $\omega_{AC}$ là vận tốc góc thanh $AC$ chưa xác định).

– Các vectơ vận tốc được biểu diễn như trên hình 10–16.

– Phương trình vectơ (a) chứa hai ẩn : giá trị của vectơ $\vec{v}_r$ và $\vec{v}_{B^*A}$. Để xác định chúng, chiếu hai vế của (a) lên hai trục $\Delta_1$ và $\Delta_2$ (H. 10–16), ta nhận được :

$$\begin{aligned}
v_B\cos\alpha &= -v_A\sin\alpha + v_{B^*A}, \\
v_B\sin\alpha &= v_A\cos\alpha - v_r,
\end{aligned}$$

khi thay $v_A = v_1 = \sqrt{3}\text{ cm/s}$, $v_B = v_2 = 5\text{ cm/s}$ ; $\alpha = 30^\circ$ và giải, ta có :

$$v_r = -1\text{ cm/s} < 0 \, ; \quad v_{B^*A} = 3\sqrt{3}\text{ cm/s} > 0.$$

Kết quả cho thấy chiều của $\vec{v}_r$ ngược lại chiều giả định, tức tại thời điểm này con trượt chuyển động hướng về $A$, còn $\vec{v}_{B^*A}$ có chiều đúng như chiều giả định. Ngoài ra, dễ dàng tìm được :

$$\omega_{AC} = \frac{v_{B^*A}}{B^*A} = 3\frac{\sqrt{3}}{6} = \frac{\sqrt{3}}{2}\text{ rad/s}.$$

Dựa vào chiều của $\vec{v}_{B^*A}$ ta thấy rằng tại thời điểm khảo sát thanh $AC$ quay ngược chiều kim đồng hồ.

*3 – Gia tốc*

– Sử dụng định lí hợp gia tốc trong hợp chuyển động đối với điểm $B$. Vì chuyển động theo không phải là chuyển động tịnh tiến (khâu $AC$ chuyển động song phẳng) nên :

$$\vec{a}_B = \vec{a}_e + \vec{a}_r + \vec{a}_c,$$

trong đó $\vec{a}_B = \vec{a}_2$ ; $\vec{a}_c$ có phương chiều nhờ quy tắc quay vectơ vận tốc $\vec{v}_r$ theo chiều quay của $\overline{\omega}_{AC}$ góc $\dfrac{\pi}{2}$ quanh trục qua $B$, (H. 10–17).

$$a_c = 2\omega_e . v_r\sin(\vec{\omega}_{AC}, \vec{v}_r) = 2\omega_{AC}.v_r = \sqrt{3}\text{ cm/s}^2$$

($\vec{\omega}_{AC}$ có phương thẳng góc mặt phẳng hình vẽ và hướng ra) $\vec{a}_r$ hướng dọc thanh $AC$, giá trị và chiều chưa biết. Giả sử $\vec{a}_r$ có chiều như trên hình 10–17.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_17.svg" alt="Hình 10-17" class="figure-img" />
  <p class="figure-caption">Hình 10-17</p>
</div>

$\vec{a}_e = \vec{a}_{B^*}$, ở đó $B^*$ thuộc thanh $AC$, tại thời điểm khảo sát trùng với $B$. Vì thanh $AC$ chuyển động song phẳng đối với hai điểm $B^*$ và $A$, ta có :

$$\vec{a}_{B^*} = \vec{a}_A + \vec{a}_{B^*A}^n + \vec{a}_{B^*A}^t,$$

ở đó $\vec{a}_A = \vec{a}_1$ ; $\vec{a}_{B^*A}^n$ hướng từ $B$ đến $A$ ;

$$a_{B^*A}^n = \omega_{AC}^2 . BA = 4{,}5\text{ cm/s}^2 \, ;$$

$\vec{a}_{B^*A}^t$ có phương vuông góc với $BA$, chiều chưa biết (giả định như trên hình 10–17), có giá trị $a_{B^*A}^t = \varepsilon_{AC}.BA$ chưa biết vì gia tốc góc $\varepsilon_{AC}$ của thanh $AC$ chưa xác định.

Biểu thức gia tốc tuyệt đối của $B$ bây giờ có thể viết dưới dạng :

$$\vec{a}_B = \vec{a}_A + \vec{a}_{B^*A}^n + \vec{a}_{B^*A}^t + \vec{a}_r + \vec{a}_c. \tag{b}$$

– Các vectơ gia tốc được biểu diễn trên hình 10–17.

– Phương trình vectơ (b) chứa hai ẩn : giá trị $a_r$ và $a_{B^*A}^t$.

Để tìm chúng, chiếu hai vế của (b) lần lượt lên các trục $\Delta_1$ và $\Delta_2$ :

$$\begin{aligned}
-a_B\cos\alpha &= -a_A\sin\alpha + a_{B^*A}^t - a_c, \\
-a_B\sin\alpha &= a_A\cos\alpha + a_{B^*A}^n - a_r.
\end{aligned}$$

Giải ra ta có :

$$\begin{aligned}
a_r &= a_{B^*A}^n + a_A\cos\alpha + a_B\sin\alpha = 7{,}6\text{ cm/s}^2 > 0, \\
a_{B^*A}^n &= a_A\sin\alpha - a_B\cos\alpha + a_c = 2{,}4\text{ cm/s}^2 > 0.
\end{aligned}$$

Như vậy các vectơ $\vec{a}_r, \vec{a}_{B^*A}^t$ có chiều như đã giả định.

Bây giờ dễ dàng tìm được

$$\varepsilon_{AC} = \frac{a_{B^*A}^t}{BA} = \frac{2{,}4}{6} = 0{,}4\text{ rad/s}^2.$$

Chiều của $\overline{\varepsilon}_{AC}$ phù hợp với chiều $\vec{a}_{B^*A}^t$. Như vậy tại thời điểm khảo sát thanh $AC$ chuyển động nhanh dần.

---

## 10.4. BÀI TẬP

### 10.4.1. Tìm phương trình chuyển động

**10–1.** Băng để ghi dao động chuyển động tịnh tiến theo phương $Ox$ với vận tốc $2\text{ m/s}$. Đầu bút – gắn với vật dao động theo phương $Oy$ – vẽ lên băng một đường hình sin với biên độ $AB = 2{,}5\text{cm}$ và độ dài $O_1C = 8\text{cm}$. Tìm phương trình dao động của vật, nếu điểm $O$ tương ứng với vị trí của vật lúc $t = 0$ (H. 10–18).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_18.svg" alt="Hình 10-18" class="figure-img" />
  <p class="figure-caption">Hình 10-18</p>
</div>

*Trả lời :* $y = 2{,}5\sin 50\pi t \ (\text{cm}).$

---

**10–2.** Cần trục di chuyển theo phương ngang với vận tốc $v = 0{,}5\text{ m/s}$. Tời $B$, bán kính $r = 0{,}5\text{m}$, quay với vận tốc góc $\omega = 2\pi\text{ rad/s}$. Tìm quỹ đạo tuyệt đối của điểm $A$, nếu toạ độ đầu của nó là $x_o = 10\text{m}$, $y_o = 6\text{m}$ (H. 10–19).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_19.svg" alt="Hình 10-19" class="figure-img" />
  <p class="figure-caption">Hình 10-19</p>
</div>

*Trả lời :* $y = \dfrac{x - x_o}{v}\omega r + y_o = 6{,}28x - 56{,}8.$

---

**10–3.** Trục cuốn băng của máy ghi có bán kính $r$, quay đều với vận tốc góc $\omega_o$. Đầu bút chuyển động theo phương thẳng đứng theo luật :

$$y = a\sin\omega_1 t.$$

Tìm phương trình đường cong mà đầu bút vẽ trên băng, (H. 10–20).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_20.svg" alt="Hình 10-20" class="figure-img" />
  <p class="figure-caption">Hình 10-20</p>
</div>

*Trả lời :* $y = a\sin\dfrac{\omega_1}{\omega_o r}x.$

---

**10–4.** Cơ cấu culit như hình 10–21. Tay quay $OA$ dài $r$, quay với vận tốc góc không đổi $\omega$. Khoảng cách $O_1O = a$. Tìm phương trình chuyển động của con trượt $A$ dọc thanh $O_1B$ (phương trình chuyển động tương đối) và phương trình chuyển động của thanh $O_1B$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_21.svg" alt="Hình 10-21" class="figure-img" />
  <p class="figure-caption">Hình 10-21</p>
</div>

*Trả lời :*

$$\xi = O_1A = \sqrt{a^2 + r^2 + 2ar\cos\omega t},$$

$$\varphi = \operatorname{artg}\frac{r\sin\omega t}{a + r\cos\omega t} \, .$$

---

### 10.4.2. Bài toán tổng hợp chuyển động

**10–5.** Mặt phẳng nghiêng $AB$, chuyển động thẳng theo trục $Ox$ với gia tốc không đổi $0{,}1\text{ m/s}^2$. Trên $AB$ có vật $P$ trượt xuống với gia tốc tương đối không đổi $0{,}1\sqrt{2}\text{ m/s}^2$. Vận tốc đầu của mặt phẳng nghiêng và của vật đều bằng không. Vị trí đầu của vật có toạ độ $x = 0$ ; $y = h$. Tìm quỹ đạo, vận tốc và gia tốc tuyệt đối của điểm $P$, (H. 10–22).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_22.svg" alt="Hình 10-22" class="figure-img" />
  <p class="figure-caption">Hình 10-22</p>
</div>

*Trả lời :* $y = h - \dfrac{x}{2}$ ;

$$v = 0{,}1\sqrt{5}t\text{ m/s} \, ;$$

$$a = 0{,}1\sqrt{5}\text{ m/s}^2.$$

---

**10–6.** Xe chuyển động nhanh dần đều với gia tốc $49{,}2\text{ cm/s}^2$. Trên xe có đặt một động cơ điện, rôto bán kính $20\text{cm}$ quay với phương trình $\varphi = t^2$.

Tìm vận tốc tuyệt đối và gia tốc tuyệt đối của điểm $A$ trên vành rôto lúc $t = 1\text{s}$, biết lúc đó $A$ có vị trí như hình 10–23.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_23.svg" alt="Hình 10-23" class="figure-img" />
  <p class="figure-caption">Hình 10-23</p>
</div>

*Trả lời :* $v_A = 77{,}38\text{ cm/s}$ ; $a_A = 74{,}6\text{ cm/s}^2.$

---

**10–7.** Cơ cấu như hình 10–24 ; $O_1A = O_2B = 20\text{cm}$ ; $R = 16\text{cm}$. Thanh $O_1A$ quay theo luật $\varphi = \dfrac{\pi}{48}t^3$. Điểm $M$ chuyển động trên vành tròn theo luật $s = \widehat{AM} = \pi t^2\text{ cm}$. Tìm vận tốc tuyệt đối, gia tốc tuyệt đối của điểm $M$ lúc $t = 2\text{s}$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_24.svg" alt="Hình 10-24" class="figure-img" />
  <p class="figure-caption">Hình 10-24</p>
</div>

*Trả lời :* Lúc khảo sát $\varphi = 30^\circ$ ; $\alpha = 45^\circ$ ;

$$v_M = 28{,}03\text{ cm/s} \, ; \quad a_M = 30{,}34\text{ cm/s}^2.$$

---

**10–8.** Ôtô chuyển động trên đoạn đường thẳng với gia tốc $a_o = 2\text{ m/s}^2$. Trên trục dọc có lắp một vô lăng bán kính $R = 0{,}25\text{cm}$, ở thời điểm khảo sát có vận tốc góc $\omega = 4\text{ rad/s}$, gia tốc góc $\varepsilon = 4\text{ rad/s}^2$. Tìm gia tốc một điểm trên vành vô lăng (H. 10–25).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_25.svg" alt="Hình 10-25" class="figure-img" />
  <p class="figure-caption">Hình 10-25</p>
</div>

*Trả lời :* $a = 4{,}58\text{ m/s}^2.$

---

**10–9.** Một ống tròn bán kính $R = 1\text{m}$ quay quanh trục $O$ với vận tốc góc không đổi $\omega_o = 1\text{ rad/s}$. Trong ống có điểm $M$ dao động quanh điểm $A$ theo luật $\varphi = \sin\pi t$. Tìm gia tốc tuyệt đối của $M$ lúc $t = 2\dfrac{1}{6}\text{s}$, (H. 10–26).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_26.svg" alt="Hình 10-26" class="figure-img" />
  <p class="figure-caption">Hình 10-26</p>
</div>

*Trả lời :* $a_M^n = 13{,}84\text{ m/s}^2$ ; $a_M^t = -4{,}93\text{ m/s}^2.$

---

**10–10.** Tam giác vuông $OAB$ quay quanh $O$ với vận tốc góc không đổi $\omega_o = 1\text{ rad/s}$. Điểm $M$ chuyển động từ $A$ đến $B$ với gia tốc không đổi bằng $2\text{ cm/s}^2$, vận tốc đầu bằng không. Tìm vận tốc tuyệt đối và gia tốc tuyệt đối của $M$ lúc $t = \dfrac{1}{2}\text{s}$, biết lúc này $OB = BM = 4\text{cm}$ (H. 10–27).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_27.svg" alt="Hình 10-27" class="figure-img" />
  <p class="figure-caption">Hình 10-27</p>
</div>

*Trả lời :* $v_M = \sqrt{41}\text{ cm/s}$ ;

$$a_M = 6\sqrt{2}\text{ cm/s}^2.$$

---

**10–11.** Máy nén khí quay đều quanh trục $O$ với vận tốc $\omega$. Khí chạy trong rãnh cong với vận tốc tương đối $u = \text{const}$. Xét một phần tử khí tại cửa vào $C$. Tìm hình chiếu lên trục $Ox$ và $Oy$ của vận tốc tuyệt đối, gia tốc tuyệt đối của phần tử khí đó. Biết bán kính cong của rãnh tại $C$ là $IC = \rho$ ; góc giữa bán kính cong và $CO$ là $\varphi$ ; $OC = r$, (H. 10–28).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_28.svg" alt="Hình 10-28" class="figure-img" />
  <p class="figure-caption">Hình 10-28</p>
</div>

*Trả lời :* $v_x = u\cos\varphi + r\omega$ ; $v_y = u\sin\varphi$ ;

$$\begin{aligned}
a_x &= 2u\omega - \frac{u^2}{\rho}\sin\varphi \, ; \\
a_y &= -r\omega^2 - \left(2u\omega - \frac{u^2}{\rho}\cos\varphi\right).
\end{aligned}$$

---

**10–12.** Một ống tròn bán kính $r$ quay quanh trục $O$ với vận tốc góc $\omega = \text{const}$. Trong ống chứa đầy chất lỏng chuyển động với vận tốc tương đối $u = \text{const}$. Tìm gia tốc tuyệt đối của một hạt chất lỏng ở các điểm $1, 2, 3$ và $4$ trong hai trường hợp : chuyển động của chất lỏng cùng chiều và ngược chiều với chuyển động của ống, (H. 10–29).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_29.svg" alt="Hình 10-29" class="figure-img" />
  <p class="figure-caption">Hình 10-29</p>
</div>

*Trả lời :*

$$\begin{aligned}
\text{I. } & a_1 = r\omega^2 - \frac{u^2}{r} - 2u\omega \, ; \quad a_3 = 3r\omega^2 + \frac{u^2}{r} + 2u\omega. \\
& a_2 = a_4 = \sqrt{\left(\frac{u^2}{r} + 2u\omega + r\omega^2\right)^2 + 4r^2\omega^4} \, . \\
\text{II. } & a_1 = r\omega^2 - \frac{u^2}{r} + 2u\omega \, ; \quad a_3 = 3r\omega^2 + \frac{u^2}{r} - 2u\omega. \\
& a_2 = a_4 = \sqrt{\left(r\omega^2 + \frac{u^2}{r} - 2u\omega\right)^2 + 4r^2\omega^4} \, .
\end{aligned}$$

---

**10–13.** Cơ cấu điều tiết li tâm quay quanh trục thẳng đứng với vận tốc góc không đổi $\omega = 6\pi\text{ rad/s}$ ; quả văng gắn vào đầu cuối lò xo – thực hiện dao động trong rãnh sao cho khoảng cách từ tâm trọng tâm $C$ của nó tới trục quay biến thiên theo luật :

$$x = OC = (0{,}1 + 0{,}05\sin 8\pi t),$$

$x$ tính bằng $\text{m}$ (Hình 10–30).

Tìm gia tốc tuyệt đối của điểm $C$ tại thời điểm gia tốc Côriôlit đạt giá trị lớn nhất.

– Giá trị gia tốc Côriôlit khi quả văng ở vị trí xa nhất.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_30.svg" alt="Hình 10-30" class="figure-img" />
  <p class="figure-caption">Hình 10-30</p>
</div>

*Trả lời :* $a_a = 6\pi^2\text{ m/s}^2$ ; $a_C = 0.$

---

**10–14.** Nửa đường tròn bán kính $R$ quay với vận tốc góc $\omega = \text{const}$ quanh trục song song với đường kính $AB$ và cách $AB$ một khoảng $2R$. Trên đường tròn có một điểm $M$ chuyển động từ $A$ đến $B$ với vận tốc tương đối $u = \text{const}$, (H. 10–31).

Tìm vận tốc tuyệt đối và gia tốc tuyệt đối của $M$ ở thời điểm đầu và thời điểm mà nó đã đi được $1/4$ vòng tròn.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_31.svg" alt="Hình 10-31" class="figure-img" />
  <p class="figure-caption">Hình 10-31</p>
</div>

*Trả lời :*

$$\begin{aligned}
1)\ v_M &= \sqrt{u^2 + 4R^2\omega^2} \, ; \\
a_M &= \sqrt{4R^2\omega^4 + \frac{u^4}{R^2} + 4u^2\omega^2} \, . \\[8pt]
2)\ v_M &= \sqrt{u^2 + 4R^2\omega^2} \, ; \quad a_M = \frac{u^2}{R} - R\omega^2.
\end{aligned}$$

---

**10–15.** Tam giác vuông $ABC$, có $AB = 2a = 20\text{cm}$ ; $\alpha = 60^\circ$ quay quanh trục $CB$ theo luật $\varphi = 10t - 2t^2$. Trên $AB$ có điểm $M$ dao động xung quanh trung điểm $O$ theo luật $\xi = a\cos\dfrac{\pi}{3}t$. Tìm gia tốc tuyệt đối của $M$ lúc $t = 2\text{s}$, (H. 10–32).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_32.svg" alt="Hình 10-32" class="figure-img" />
  <p class="figure-caption">Hình 10-32</p>
</div>

*Trả lời :* $a_{ax} = 48{,}7\text{ cm/s}^2$ ; $a_{ay} = -12{,}6\text{ cm/s}^2$ ;

$$a_{az} = -2{,}7\text{ cm/s}^2.$$

---

**10–16.** Cơ cấu điều tiết li tâm như hình 10–33. Lúc khảo sát, trục quay có vận tốc góc $\omega = \dfrac{\pi}{2}\text{ rad/s}$, gia tốc góc $\varepsilon = 1\text{ rad/s}^2$ ; các thanh treo quả cầu có vận tốc góc $\omega_1 = \dfrac{\pi}{2}\text{ rad/s}$ ; gia tốc góc $\varepsilon_1 = 0{,}4\text{ rad/s}^2$ ; $\alpha = 45^\circ$. Tìm gia tốc tuyệt đối của quả cầu. Biết $l = 50\text{cm}$ ; $e = 5\text{cm}$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_33.svg" alt="Hình 10-33" class="figure-img" />
  <p class="figure-caption">Hình 10-33</p>
</div>

*Trả lời :* $a_a = 293{,}7\text{ cm/s}^2.$

---

**10–17.** Một cần trục chuyển động trên đường ray thẳng với gia tốc $a_1$ đồng thời quay quanh trục $O$ của nó với vận tốc $\omega$. Ở đầu cuối $A$ của tay cần trục người ta cẩu vật nặng, chiều dài dây treo thay đổi theo luật $z = l_o - \dfrac{1}{2}a_2t^2$ ($l_o$ và $a_2$ không đổi). Độ dài $OA = R$. Tìm gia tốc tuyệt đối của vật nặng lúc $OA$ song song với đường ray, (H. 10–34).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_34.svg" alt="Hình 10-34" class="figure-img" />
  <p class="figure-caption">Hình 10-34</p>
</div>

*Trả lời :* $a_a = \sqrt{(a_1 - R\omega^2)^2 + a_2^2}$

---

### 10.4.3. Bài toán phân tích chuyển động

**10–18.** Tay quay $OA$ có chiều dài $l$ quay đều quanh trục $O$ với vận tốc góc $\omega_o$ làm con trượt $A$ chuyển động trong rãnh của culit $K$ và culit $K$ chuyển động lên xuống. Tìm vận tốc, gia tốc của culit $K$ và vận tốc, gia tốc của con trượt $A$ đối với culit $K$ tại thời điểm ứng với vị trí $\varphi = 30^\circ$, (H. 10–35).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_35.svg" alt="Hình 10-35" class="figure-img" />
  <p class="figure-caption">Hình 10-35</p>
</div>

*Trả lời :*

$$\begin{aligned}
v_e &= \frac{1}{2}l\omega_o\text{ cm/s} \, ; \quad v_r = \frac{\sqrt{3}}{2}l\omega_o\text{ cm/s} \, ; \\
a_e &= \frac{\sqrt{3}}{2}l\omega_o\text{ cm/s}^2 \, ; \quad a_r = \frac{1}{2}l\omega_o\text{ cm/s}^2.
\end{aligned}$$

---

**10–19.** Cơ cấu tay quay culit như hình 10–36. Lúc góc $\widehat{xOA} = 60^\circ$, tay quay $OA = r = 0{,}5\text{m}$ có vận tốc góc $\omega = 1\text{ rad/s}$ và gia tốc góc $\varepsilon = \pm 1\text{ rad/s}^2$. Tìm gia tốc của culit lúc đó đối với 2 trường hợp :

1) khi $\varepsilon > 0$ và 2) khi $\varepsilon < 0$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_36.svg" alt="Hình 10-36" class="figure-img" />
  <p class="figure-caption">Hình 10-36</p>
</div>

*Trả lời :* $a_1 = 0{,}683\text{ m/s}^2$ ; $a_2 = 0{,}183\text{ m/s}^2.$

---

**10–20.** Cần đẩy $AB$ chuyển động nhanh dần đều, sau $4\text{s}$ nó trượt từ vị trí cao nhất xuống một đoạn $h = 4\text{cm}$ làm cho cam bán kính $r = 10\text{cm}$ trượt trên nền ngang. Tìm vận tốc và gia tốc của cam lúc đó, (H. 10–37).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_37.svg" alt="Hình 10-37" class="figure-img" />
  <p class="figure-caption">Hình 10-37</p>
</div>

*Trả lời :* $v_e = \dfrac{3}{2}\text{ cm/s}$ ; $a_e = 0{,}406\text{ cm/s}^2.$

---

**10–21.** Một tam giác vuông có góc nhọn $\alpha$ trượt theo mặt ngang với gia tốc không đổi $a_o$ làm cho thanh $AB$ chuyển động trong rãnh thẳng đứng. Tìm vận tốc và gia tốc của thanh, (H. 10–38).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_38.svg" alt="Hình 10-38" class="figure-img" />
  <p class="figure-caption">Hình 10-38</p>
</div>

*Trả lời :* $a_a = a_o\operatorname{tg}\alpha.$

---

**10–22.** Con chạy $A$ của cơ cấu tay quay cần lắc có chốt trên bánh răng $E$, bánh này ăn khớp ngoài với bánh răng $D$. Bán kính các bánh là $R_D = 100\text{mm}$ ; $R_E = 350\text{mm}$. Khoảng cách $O_1A = 300\text{mm}$ ; $O_1B = 700\text{mm}$. Vận tốc góc của bánh $D$ là $\omega_D = 7\text{ rad/s}$. Tìm vận tốc góc và gia tốc góc của cần lắc $BA$ lúc $A$ ở vị trí cao nhất và lúc $O_1A$ vuông góc với $BA$ về bên phải, (H. 10–39).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_39.svg" alt="Hình 10-39" class="figure-img" />
  <p class="figure-caption">Hình 10-39</p>
</div>

*Trả lời :* $\omega_{\text{I}} = 0{,}6\text{ rad/s}$ ; $\omega_{\text{II}} = 0$ ; $\varepsilon_{\text{I}} = 0$ ; $\varepsilon_{\text{II}} = 1{,}9\text{ rad/s}^2.$

---

**10–23.** Để truyền quay giữa 2 trục song song, người ta dùng cơ cấu như hình 10–40. Tay quay $AB$ quanh trục $O_1$ với vận tốc góc không đổi $\omega_1$ làm cho máng chữ thập quay quanh trục $O_2$. Biết $O_1O_2 = O_1A = O_1B = l$.

Tìm : 1) Vận tốc tương đối, vận tốc theo của con chạy và vận tốc góc của máng.

2) Gia tốc (tương đối, theo, Côriôlit) của con chạy.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_40.svg" alt="Hình 10-40" class="figure-img" />
  <p class="figure-caption">Hình 10-40</p>
</div>

*Trả lời :*

$$\begin{aligned}
v_r &= l\omega_1\cos\frac{\omega_1}{2}t \, ; \quad v_e = l\omega_1\sin\frac{\omega_1}{2}t, \quad \omega_2 = \frac{\omega_1}{2} \, . \\[8pt]
a_r &= a_e^n = \frac{l\omega_1^2}{2}\sin\frac{\omega_1 t}{2} \, ; \quad a_c = l\omega_1^2\cos\frac{\omega_1}{2}t \, ; \quad a_e^t = 0.
\end{aligned}$$

*Hướng dẫn :* Góc $\widehat{O_2O_1A} = \varphi = \omega_1 t.$

---

**10–24.** Hai đĩa $A$ và $B$ cùng quay với vận tốc góc $\omega$ quanh các trục cố định $O_1$ và $O_2$. Trên đĩa $B$ ta lấy một điểm $M$ trên vành và xét chuyển động của nó khi chọn đĩa $A$ làm hệ quy chiếu động. Tìm gia tốc tương đối và gia tốc Côriôlit của điểm $M$, biết $\omega = 1\text{ rad/s}$ và $O_1O_2 = 15\text{cm}$, (H. 10–41).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_41.svg" alt="Hình 10-41" class="figure-img" />
  <p class="figure-caption">Hình 10-41</p>
</div>

*Trả lời :* $a_r = 15\text{ cm/s}^2$ ; $a_c = 30\text{ cm/s}^2.$

---

**10–25.** Tay quay $OC$ quay quanh $O$ làm cho thanh $AB$ chuyển động theo rãnh $K$ (H. 10–42). Tìm vận tốc và gia tốc của thanh $AB$ Biết $OK = l$ và lúc khảo sát thanh $OC$ có vận tốc góc $\omega$, gia tốc góc $\varepsilon$ và tạo với $OK$ góc $\varphi$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_42.svg" alt="Hình 10-42" class="figure-img" />
  <p class="figure-caption">Hình 10-42</p>
</div>

*Trả lời :* $v_{AB} = \dfrac{l\omega}{\cos^2\varphi}$ ; $a_{AB} = \dfrac{2l\operatorname{tg}\varphi}{\cos^2\varphi}\omega^2 + \dfrac{l}{\cos^2\varphi}\varepsilon.$

---

**10–26.** Cơ cấu tay quay cần lắc như hình 10–43. Tay quay $OA$ quay đều với vận tốc góc $\omega$. Độ dài $OA = r$ ; $O_1O = l$ với $l > r$. Biểu diễn gia tốc góc $\varepsilon_1$ của cần lắc là hàm của thời gian $t$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_43.svg" alt="Hình 10-43" class="figure-img" />
  <p class="figure-caption">Hình 10-43</p>
</div>

*Trả lời :* $\varepsilon_1 = \dfrac{(r^2 - l^2)lr\omega^2\sin\omega t}{(l^2 + r^2 + 2lr\cos\omega t)^2} \, .$

---

**10–27.** Tay quay $OA$ quay đều với vận tốc góc $\omega = 3\text{ rad/s}$. Độ dài $OA = r = 0{,}4\text{m}$ ; $O_1O = l = 0{,}3\text{m}$, (H. 10–44).

Tìm gia tốc góc của cần lắc và gia tốc tương đối của con chạy đối với cần lắc tại $2$ vị trí nằm ngang và $2$ vị trí thẳng đứng của tay quay.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_44.svg" alt="Hình 10-44" class="figure-img" />
  <p class="figure-caption">Hình 10-44</p>
</div>

*Trả lời :*

$$\begin{aligned}
\text{I} &: \varepsilon = 1{,}21\text{ rad/s}^2 \, ; \quad a_r = 1{,}037\text{ m/s}^2 \, ; \\
\text{III} &: \varepsilon = -1{,}21\text{ rad/s}^2 \, ; \quad a_r = 1{,}037\text{ m/s}^2 \, ; \\
\text{II} &: \varepsilon = 0 \, ; \quad a_r = 1{,}534\text{ m/s}^2 \, ; \\
\text{IV} &: \varepsilon = 0 \, ; \quad a_r = -1{,}037\text{ m/s}^2.
\end{aligned}$$

---

**10–28.** Trên máy tiện, vật gia công hình trụ có đường kính $d = 80\text{mm}$ quay đều với tốc độ $30$ vòng/phút. Mũi dao chạy dọc với vận tốc không đổi, bằng $0{,}2\text{ mm/s}$.

Tìm vận tốc và gia tốc của mũi dao đối với vật gia công, (H. 10–45).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_45.svg" alt="Hình 10-45" class="figure-img" />
  <p class="figure-caption">Hình 10-45</p>
</div>

*Trả lời :* $v_r = 125{,}7\text{ mm/s}^2$ ; $a_r = 394{,}8\text{ mm/s}^2.$

---

**10–29.** Cơ cấu culit như hình 10–46. Tay quay $OA$ quay với vận tốc góc không đổi $\omega_o$. Tìm vận tốc góc, gia tốc của cần lắc $O_1D$ và vận tốc, gia tốc thanh $BC$ lúc $OA$ nằm ngang về bên phải. Biết $OA = r$ ; $OO_1 = r\sqrt{3}$ ; $h = 2r\sqrt{3}$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_46.svg" alt="Hình 10-46" class="figure-img" />
  <p class="figure-caption">Hình 10-46</p>
</div>

*Trả lời :* $\omega_1 = \dfrac{\omega_o}{4}$ ; $v_{BC} = \dfrac{2}{\sqrt{3}}r\omega_o$ ; $\varepsilon_1 = \dfrac{\sqrt{3}}{8}\omega_o^2$ ; $a_{BC} = \dfrac{2}{3}r\omega_o^2.$

---

**10–30.** Cơ cấu culit như hình 10–47. Tay quay $OA$ quay với vận tốc góc không đổi $\omega_o$. Biết $OA = OK = r$ ; $O_1B = r\sqrt{3}$ ; $AC = 4r$. Ở vị trí như hình vẽ, hãy tìm :

– Vận tốc con chạy $C$, vận tốc góc thanh $O_1B$.

– Gia tốc con chạy $C$, gia tốc góc thanh $AC$ và thanh $O_1B$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_47.svg" alt="Hình 10-47" class="figure-img" />
  <p class="figure-caption">Hình 10-47</p>
</div>

*Trả lời :* $v_C = r\omega_o$ ; $\omega_{O_1B} = \dfrac{\omega_o}{3} \, .$

$$a_C = \frac{\sqrt{3}}{3}r\omega_o^2 \, ; \quad \varepsilon_{AC} = \frac{\omega_o^2\sqrt{3}}{6} \, ; \quad \varepsilon_{O_1B} = \frac{5\sqrt{3}}{27}\omega_o^2.$$

---

**10–31.** Cơ cấu như hình 10–48. Hai tay quay $OA_1$ và $OA_2$ cùng chiều dài và bằng nửa khoảng cách giữa 2 máng định hướng $M$ và $N$. Lúc khảo sát các góc $\alpha_1 = \alpha_2 = \beta = 30^\circ$, hai tay quay quay cùng chiều với vận tốc góc $\omega_o = \text{const}$. Tìm vận tốc và gia tốc góc của thanh $EK$ ở thời điểm đó.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_48.svg" alt="Hình 10-48" class="figure-img" />
  <p class="figure-caption">Hình 10-48</p>
</div>

*Trả lời :* $\omega = \dfrac{3}{8}\omega_o$ ; $\varepsilon = \dfrac{3\sqrt{3}}{32}\omega_o^2.$

---

**10–32.** Thanh $AB$ luôn luôn tựa lên điểm $D$ có đầu $B$ trượt trên nửa đường tròn với vận tốc không đổi $v_B = 1\text{ m/s}$. Tìm vận tốc và gia tốc điểm $D^*$ của thanh $AB$ trùng với $D$ ; $\alpha = 30^\circ$ ; ($\alpha$ là góc giữa thanh với đường nằm ngang). Biết bán kính của đường tròn $R = 1\text{m}$, (H. 10–49).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_49.svg" alt="Hình 10-49" class="figure-img" />
  <p class="figure-caption">Hình 10-49</p>
</div>

*Trả lời :* $v_{D^*} = \dfrac{1}{2}\text{ m/s}$ ; $a_{D^*} = \dfrac{1}{4}\sqrt{7}\text{ m/s}^2.$

---

**10–33.** Cho cơ cấu như hình 10–50. Tay quay $OA$ quay đều với vận tốc góc $\omega_o$. Thanh $AB$ trong quá trình chuyển động luôn luôn qua điểm $B$ nhờ ống quay quanh $B$. Tìm vận tốc góc và gia tốc góc của ống tại thời điểm ứng với vị trí góc $\widehat{AOB} = 90^\circ$ ; $\widehat{ABO} = 30^\circ$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_50.svg" alt="Hình 10-50" class="figure-img" />
  <p class="figure-caption">Hình 10-50</p>
</div>

*Trả lời :* $\omega = \dfrac{\omega_o}{4}$ ; $\varepsilon = \dfrac{\omega_o^2\sqrt{3}}{8} \, .$

---

**10–34.** Để truyền chuyển động quay từ một trục đến trục khác song song với nó mà độ lệch trục tâm không lớn người ta dùng cơ cấu như hình 10–51. Hai đĩa $A$ và $B$ gắn trên hai trục I và II. Trên hai đĩa có các rãnh $a–a$ và $b–b$ theo đường kính. Giữa hai đĩa $A$ và $B$ có đĩa $C$, trên hai mặt của đĩa này có hai sống lồi $a'$ và $b'$ vuông góc với nhau, có thể ăn khớp tương ứng với các rãnh ở các đĩa $A$ và $B$ và có thể trượt tự do trong các rãnh ấy. Chứng minh rằng vận tốc góc của hai trục bằng nhau và tìm tâm vận tốc tức thời của đĩa đệm $C$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-hoc/hinh_10_51.svg" alt="Hình 10-51" class="figure-img" />
  <p class="figure-caption">Hình 10-51</p>
</div>

*Hướng dẫn :* Xét vận tốc của các điểm thuộc đĩa đệm $C$ có vị trí trùng với các tâm $O_1$ và $O_2$ của đĩa $A$ và $B$.

*Trả lời :* Tâm vận tốc tức thời của đĩa $C$ là giao điểm của hai đường thẳng kẻ từ các tâm $O_1, O_2$ và vuông góc tương ứng với các sống lồi $a', b'$.

Các rãnh $a$ và $b$ cùng quay đồng nhất với chuyển động của các sống lồi $a'$ và $b'$. Hai đĩa $A$ và $B$ cùng quay đồng nhất với chuyển động quay của đĩa $C$ (trong quá trình chuyển động của nó, góc vuông $a'Ob'$ có các cạnh luôn luôn đi qua các điểm cố định $O_1$ và $O_2$, trong đó $O$ là tâm đĩa đệm $C$), nên hai đĩa $A$ và $B$ quay cùng vận tốc góc, tức trục I và trục II có cùng vận tốc góc.
