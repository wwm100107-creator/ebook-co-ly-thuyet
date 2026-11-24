---
title: "Bài Tập Động Học - Chương 6: Chuyển Động Của Điểm"
layout: doc
---

**Phần hai: ĐỘNG HỌC**

# CHƯƠNG 6: CHUYỂN ĐỘNG CỦA ĐIỂM

## 6.1. CƠ SỞ LÍ THUYẾT

Để giải bài toán về chuyển động của điểm ta thường dùng hai phương pháp sau :

### 6.1.1. Phương pháp tọa độ Đêcác

*1. Phương trình chuyển động của điểm, (H. 6-1).*

$$\left.\begin{aligned}
x &= x(t) \\
y &= y(t) \\
z &= z(t)
\end{aligned}\right\} \tag{6-1}$$

trong đó : $x, y, z$ lần lượt là các tọa độ Đêcác của động điểm.

Khi khử $t$ khỏi các phương trình (6-1) ta nhận được phương trình quỹ đạo (có thể xem 6-1 là phương trình quỹ đạo cho dưới dạng tham số $t$).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_1.svg" alt="Hình 6-1" class="figure-img" /><p class="figure-caption">Hình 6-1</p></div>

*2. Vận tốc động điểm*

$$\vec{v} \begin{cases}
v_x = \dot{x}, \text{ với } \dot{x} = dx/dt, \\
v_y = \dot{y}, \\
v_z = \dot{z} \ ; \ v = \sqrt{v_x^2 + v_y^2 + v_z^2} \ ,
\end{cases} \tag{6-2}$$

$$\cos(Ox, \vec{v}) = v_x/v \ ; \quad \cos(Ox, \vec{v}) = v_y/v \ ; \quad \cos(Oz, \vec{v}) = v_z/v.$$

[Đính chính bản in: Ở số hạng thứ hai, trục chiếu là $Oy$, tức là $\cos(Oy, \vec{v}) = v_y/v$.]

*3. Gia tốc động điểm*

$$\vec{a} \begin{cases}
a_x = \ddot{x} \ , \text{ với } \ddot{x} = d^2x/dt^2 \\
a_y = \ddot{y} \ , \ a = \sqrt{a_x^2 + a_y^2 + a_z^2} \\
a_z = \ddot{z}
\end{cases} \tag{6-3}$$

$$\cos(Ox, \vec{a}) = a_x/a \ ; \quad \cos(Oy, \vec{a}) = a_y/a \ ; \quad \cos(Oz, \vec{a}) = a_z/a$$

*4. Tính chất chuyển động :*

$$\begin{aligned}
\vec{v} \cdot \vec{a} &= \dot{x}\ddot{x} + \dot{y}\ddot{y} + \dot{z}\ddot{z} \\
&\begin{cases}
> 0 - \text{điểm chuyển động nhanh dần ;} \\
< 0 - \text{điểm chuyển động chậm dần.}
\end{cases}
\end{aligned} \tag{6-4}$$

### 6.1.2. Phương pháp tọa độ tự nhiên

*1. Phương trình chuyển động của động điểm (dọc theo quỹ đạo đã cho), (H. 6-2).*

$$\bar{s} = \bar{s}(t), \tag{6-5}$$

trong đó $\bar{s} = \overset{\frown}{OM}$ – là tọa độ cong của động điểm trên quỹ đạo (trên quỹ đạo chọn gốc $O$ và chiều dương của quỹ đạo).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_2.svg" alt="Hình 6-2" class="figure-img" /><p class="figure-caption">Hình 6-2</p></div>

*2. Vận tốc của động điểm, (H. 6-3).*

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_3.svg" alt="Hình 6-3" class="figure-img" /><p class="figure-caption">Hình 6-3</p></div>

$$\vec{v} = \dot{\bar{s}} \cdot \vec{t}_o \begin{cases}
\text{phương : tiếp tuyến với quỹ đạo ;} \\
\text{chiều : thuận chiều chuyển động ;} \\
\text{trị số : } v = |\dot{\bar{s}}|.
\end{cases} \tag{6-6}$$

trong đó : $\dot{\bar{s}} = \dfrac{d\bar{s}}{dt}$

$\vec{t}_o$ là véctơ đơn vị trên tiếp tuyến thuận chiều dương quỹ đạo.

*3. Gia tốc của động điểm*

$$\vec{a} = \vec{a}^n + \vec{a}^t$$

$$\begin{aligned}
\vec{a}^t &= \ddot{\bar{s}}\,\vec{t}_o \\
&\begin{cases}
\text{phương : tiếp tuyến với quỹ đạo,} \\
\text{chiều : phụ thuộc vào dấu của } \ddot{\bar{s}} = \dfrac{d^2\bar{s}}{dt^2} \ ; \\
\text{trị số : } a^t = |\ddot{\bar{s}}|.
\end{cases}
\end{aligned} \tag{6-7}$$

$$\begin{aligned}
\vec{a}^n &= \frac{v^2}{\rho}\,\vec{n}_o \\
&\begin{cases}
\text{phương : theo phương pháp tuyến quỹ đạo ;} \\
\text{chiều : hướng vào tâm cong quỹ đạo ;} \\
\text{trị số : } a^n = \dfrac{v^2}{\rho}.
\end{cases}
\end{aligned} \tag{6-8}$$

trong đó : $\rho$ – bán kính cong của quỹ đạo tại $M$ ;

$\vec{n}_o$ – véctơ đơn vị theo phương pháp tuyến hướng vào tâm cong quỹ đạo.

*4. Tính chất chuyển động*

$$\vec{v} \cdot \vec{a}^t \begin{cases}
> 0 : \text{điểm chuyển động nhanh dần ;} \\
\qquad (\vec{v} \text{ và } \vec{a}^t \text{ cùng chiều}) \\
< 0 : \text{điểm chuyển động chậm dần} \\
\qquad (\vec{v} \text{ và } \vec{a}^t \text{ ngược chiều})
\end{cases} \tag{6-9}$$

*5. Các dạng chuyển động đặc biệt :*

a) Chuyển động đều : $v = \text{const}$.

Suy ra :

$$a^t = 0 \ ; \quad \bar{s} = vt \tag{6-10}$$

b) Chuyển động biến đổi đều : $a^t = \gamma = \text{const}$.

Suy ra :

$$\left.\begin{aligned}
v &= v_o \pm \gamma t, \\
s &= v_o t \pm \frac{\gamma}{2} t^2,
\end{aligned}\right\} \tag{6-11}$$

trong đó quy ước chọn gốc của quỹ đạo ở vị trí đầu ; chiều dương quỹ đạo theo chiều chuyển động của điểm.

Dấu $+$ : ứng với chuyển động nhanh dần đều

Dấu $-$ : chuyển động chậm dần đều cho tới khi $v = 0$

---

## 6.2. HƯỚNG DẪN ÁP DỤNG

### 6.2.1. Các loại bài toán

Có ba loại sau :

1 – Biết phương trình chuyển động, tìm các đặc trưng của chuyển động như : quỹ đạo, vận tốc, gia tốc, tính chất nhanh, chậm dần của chuyển động.

2 – Biết một số điều kiện của chuyển động, tìm phương trình chuyển động và các đặc trưng chuyển động.

3 – Bài toán tổng hợp : trong một bài toán dùng cả hai phương pháp, tọa độ Đêcác và tọa độ tự nhiên.

### 6.2.2. Phương pháp giải bài toán

*1. Chọn phương pháp :* Tùy đầu bài mà ta chọn phương pháp tọa độ Đêcác hay tọa độ tự nhiên. Phương pháp tọa độ tự nhiên được dùng khi đã biết quỹ đạo của điểm.

*2. Tìm phương trình chuyển động :*

– Xét điểm ở vị trí bất kì. Tìm quan hệ tọa độ của điểm theo thời gian, nhận được (6-1) hoặc (6-5).

– Nếu biết gia tốc thì tích phân, nhận được vận tốc, tích phân lần nữa sẽ tìm được phương trình chuyển động.

– Nếu biết chuyển động là đều hoặc biến đổi đều, ta viết ngay phương trình chuyển động dạng (6-1) hoặc (6-11).

*3. Tìm quỹ đạo :* khử thời gian $t$ khỏi phương trình chuyển động. Từ đó tìm được các biểu thức liên hệ giữa các tọa độ không chứa $t$.

*4. Tìm vận tốc và gia tốc :*

Áp dụng (6-2) và (6-3) khi dùng tọa độ Đêcác.

Áp dụng (6-6), (6-7) và (6-8) khi dùng tọa độ tự nhiên.

*5. Tìm tính chất nhanh, chậm dần của chuyển động :*

Áp dụng (6-4) khi dùng tọa độ Đêcác.

Áp dụng (6-9) khi dùng tọa độ tự nhiên.

*6. Tìm bán kính cong của quỹ đạo :*

– Áp dụng (6-8).

– Nếu bài toán cho ở dạng tọa độ Đêcác, thì cần phải chuyển sang tọa độ tự nhiên bằng cách đặt :

$$\begin{aligned}
v &= \sqrt{\dot{x}^2 + \dot{y}^2 + \dot{z}^2} \ ; \quad a^t = \frac{dv}{dt} \ ; \\
a &= \sqrt{\ddot{x}^2 + \ddot{y}^2 + \ddot{z}^2} \ ; \quad a^n = \sqrt{a^2 - (a^t)^2} = \frac{v^2}{\rho}.
\end{aligned} \tag{6-12}$$

---

## 6.3. BÀI GIẢI MẪU

### 6.3.1. Biết phương trình chuyển động. Tìm các đặc trưng của chuyển động

**Thí dụ 6-1.** Chuyển động của điểm được cho bởi các phương trình :

$$\begin{aligned}
x &= 8t - 4t^2, \\
y &= 6t - 3t^2 \quad (x, y \text{ tính bằng m ; } t \text{ tính bằng s}).
\end{aligned}$$

Xác định quỹ đạo, vận tốc và gia tốc của điểm. Xét tính chất nhanh, chậm dần của chuyển động.

*Bài giải :*

*1 – Chọn phương pháp :* dùng phương pháp tọa độ Đêcác (đề bài cho ở dạng Đêcác, chưa biết quỹ đạo).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_4.svg" alt="Hình 6-4" class="figure-img" /><p class="figure-caption">Hình 6-4</p></div>

*2 – Quỹ đạo :* khử $t$ khỏi phương trình chuyển động. Muốn vậy nhân hai vế của phương trình đầu với 3, phương trình thứ hai với 4 rồi trừ vế với vế, ta được :

$$3x - 4y = 0,$$

hay

$$y = \frac{3}{4}x$$

Như vậy, quỹ đạo là đường thẳng, nghiêng với trục $Ox$ một góc $\alpha$ với $\operatorname{tg}\alpha = \dfrac{3}{4}$ (H. 6-4).

*3 – Vận tốc, gia tốc :* Theo (6-2) và (6-3), ta có :

vận tốc :

$$\begin{aligned}
v_x &= \dot{x} = 8(1 - t) \ ; \\
v_y &= \dot{y} = 6(1 - t) \ ; \\
v &= \sqrt{v_x^2 + v_y^2} = 10(1 - t)\text{ m/s ;}
\end{aligned}$$

[Đính chính bản in: Trị số vận tốc là $v = \sqrt{v_x^2 + v_y^2} = 10|1 - t|\text{ m/s}$ (bằng $10(1 - t)$ khi $t \leqslant 1\text{s}$ và $10(t - 1)$ khi $t > 1\text{s}$).]

gia tốc :

$$\begin{aligned}
a_x &= \ddot{x} = -8 \ ; \quad a_y = \ddot{y} = -6 \ ; \\
a &= \sqrt{a_x^2 + a_y^2} = 10\text{ m/s}^2.
\end{aligned}$$

*4 – Tính chất nhanh, chậm dần của chuyển động :* Xét tích $\vec{v} \cdot \vec{a}$ theo (6-4). Các véctơ $\vec{v}$ và $\vec{a}$ hướng theo quỹ đạo, tức là theo đường thẳng $AB$. Các hình chiếu của $a$ luôn luôn âm, nên $\vec{a}$ có chiều không đổi, hướng từ $B$ về $A$, còn chiều của $\vec{v}$ phụ thuộc $t$ :

Lúc $t = 0$ ; $x = 0$, $v_o = 10\text{ m/s}$. Điểm ở gốc tọa độ $O$.

$$\vec{v} \cdot \vec{a} = v_x a_x + v_y a_y = -64(1 - t) - 36(1 - t).$$

Khi $0 < t < 1\text{s}$ : $\vec{v} \cdot \vec{a} < 0$. Điểm chuyển động chậm dần ($\vec{v}$ hướng từ $A$ tới $B$). Lúc $t = 1\text{s}$ thì $x = 4$, $y = 3$ : điểm ở vị trí $B$ và $v = 0$.

Khi $t = 2\text{s}$, $x = 0$, $y = 0$. Điểm qua $O$.

Như vậy điểm bắt đầu chuyển động từ điểm $O$ với vận tốc đầu $v_o = 10\text{ m/s}$ dọc $AB$. Trên đoạn $OB$ điểm chuyển động chậm dần và sau $1\text{s}$ điểm tới $B$, tại đó vận tốc bằng không. Bắt đầu từ $B$ điểm chuyển động nhanh dần từ $B$ về $A$ và lúc $t = 2\text{s}$ điểm qua gốc tọa độ và tiếp tục chuyển động theo $OA$.

Gia tốc của điểm luôn luôn bằng $10\text{ m/s}^2$.

**Thí dụ 6-2.** Trong thời gian mở máy, một điểm trên vành vô lăng chuyển động theo luật $S = 0,1t^3$ ($t$ tính bằng s ; $S$ bằng m). Xác định gia tốc và tính chất chuyển động của điểm ở thời điểm khảo sát, biết rằng lúc đó vận tốc bằng $30\text{ m/s}$. Bán kính vô lăng là $2\text{m}$.

*Bài giải :*

*1 – Chọn phương pháp :* Quỹ đạo của điểm và luật chuyển động theo quỹ đạo đã biết, do đó ta dùng phương pháp tọa độ tự nhiên.

*2 – Vận tốc và gia tốc :* Theo (6-6) vận tốc của điểm

$$v = |\dot{S}| = 0,3t^2$$

Gia tốc của điểm, theo (6-7) và (6-8).

$$a^n = \frac{v^2}{R} \ ; \quad a^t = |\ddot{S}| = 0,6t.$$

Suy ra lúc $v = 30\text{ m/s}$ thì $t = \sqrt{\dfrac{v}{0,3}} = 10\text{s}$. Lúc đó :

$$a^n = \frac{30^2}{2} = 450\text{ m/s}^2 \ ; \quad a^t = 0,6 \cdot 10 = 6\text{ m/s}^2 > 0,$$

$$a = \sqrt{450^2 + 6^2} = 150,04\text{ m/s}^2.$$

[Đính chính bản in: $\sqrt{450^2 + 6^2} \approx 450,04\text{ m/s}^2$ (bản in nhầm thành $150,04\text{ m/s}^2$).]

*3 – Tính chất chuyển động :* khi $t = 10\text{s}$ thì $\vec{v} \cdot \vec{a} > 0$ do đó điểm chuyển động nhanh dần.

### 6.3.2. Tìm phương trình chuyển động và các đặc trưng của chuyển động

**Thí dụ 6-3.** Cho cơ cấu tay quay thanh truyền $OAB$ có $OA = AB = 2l$. Tay quay $OA$ quay quanh $O$ theo luật $\varphi = kt$ làm con chạy $B$ trượt theo rãnh (H. 6-5). Tìm phương trình chuyển động, quỹ đạo, vận tốc và gia tốc trung điểm $M$ của $AB$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_5.svg" alt="Hình 6-5" class="figure-img" /><p class="figure-caption">Hình 6-5</p></div>

*Bài giải :*

*1 – Chọn phương pháp :* Dùng phương pháp tọa độ Đêcác (chưa biết quỹ đạo điểm $M$ và luật chuyển động theo quỹ đạo).

*2 – Phương trình chuyển động :* Xét cơ cấu ở vị trí bất kì, khi đó $M$ có tọa độ :

$$\begin{aligned}
x &= ON = 3l\cos\varphi, \\
y &= MN = l\sin\varphi.
\end{aligned}$$

Thay $\varphi = kt$, ta được phương trình chuyển động của điểm $M$ :

$$\begin{aligned}
x &= 3l\cos kt, \\
y &= l\sin kt.
\end{aligned}$$

*3 – Quỹ đạo :* Rút $\sin kt$ và $\cos kt$ ở phương trình chuyển động, bình phương lên rồi cộng lại, ta được :

$$\frac{x^2}{9l^2} + \frac{y^2}{l^2} = 1.$$

Quỹ đạo là đường elip, các bán trục là $3l$ và $l$.

*4 – Vận tốc và gia tốc :* Dựa vào phương trình chuyển động, ta có :

Vận tốc $M$ :

$$\begin{aligned}
v_x &= \dot{x} = -3lk\sin kt, \\
v_y &= \dot{y} = lk\cos kt, \\
v &= \sqrt{v_x^2 + v_y^2} = lk\sqrt{9\sin^2 kt + \cos^2 kt}.
\end{aligned}$$

Véctơ $\vec{v}$ tiếp tuyến với quỹ đạo.

Gia tốc $M$ :

$$\begin{aligned}
a_x &= \ddot{x} = -3lk^2\cos kt = -k^2 x, \\
a_y &= \ddot{y} = -lk^2\sin kt = -k^2 y, \\
a &= \sqrt{a_x^2 + a_y^2} = k^2\sqrt{x^2 + y^2}.
\end{aligned}$$

Véctơ $\vec{a}$ có các hình chiếu tỉ lệ và ngược dấu với các tọa độ, do đó $\vec{a}$ hướng về tâm $O$ (H. 6-6).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_6.svg" alt="Hình 6-6" class="figure-img" /><p class="figure-caption">Hình 6-6</p></div>

**Thí dụ 6-4.** Một điểm chuyển động trong mặt phẳng $xOy$, gia tốc của nó có hình chiếu : $a_x = 4\text{ cm/s}^2$, $a_y = 2t\text{ cm/s}^2$. Tìm phương trình chuyển động của điểm, biết lúc $t = 2\text{s}$, vận tốc của điểm $v = 12\sqrt{2}\text{ cm/s}$ và làm với các trục $Ox$ và $Oy$ những góc bằng nhau.

*Bài giải :*

*1 – Chọn phương pháp :* Bài toán ở dạng Đêcác, ta tìm phương trình chuyển động ở dạng Đêcác bằng cách lần lượt tích phân gia tốc và vận tốc.

*2 – Phương trình chuyển động :*

– Xác định vận tốc :

Vì :

$$a_x = \frac{dv_x}{dt} \ , \quad a_y = \frac{dv_y}{dt} \ .$$

Suy ra :

$$\begin{aligned}
dv_x &= a_x dt = 4dt, \\
dv_y &= a_y dt = 2tdt,
\end{aligned}$$

Lúc $t = 2\text{s}$ thì $v_x = v_y = 12\sqrt{2}\cos 45^\circ = 12\text{ cm/s}$, do đó :

$$\int\limits_{12}^{v_x} dv_x = \int\limits_{2}^{t} 4dt \ ; \quad \int\limits_{12}^{v_y} dv_y = \int\limits_{2}^{t} 2tdt,$$

ta được :

$$\begin{aligned}
v_x &= 4t + 4, \\
v_y &= t^2 + 8.
\end{aligned}$$

Xác định phương trình chuyển động :

Vì

$$v_x = \frac{dx}{dt} \ ; \quad v_y = \frac{dy}{dt} \ .$$

Suy ra $dx = v_x dt = (4t + 4)dt \ ; \ dy = v_y dt = (t^2 + 8)dt.$

Lúc $t = 0 : x = y = 0$, ta có :

$$\int\limits_{0}^{x} dx = \int\limits_{0}^{t} (4t + 4)dt \ ; \quad \int\limits_{0}^{y} dy = \int\limits_{0}^{t} (t^2 + 8)dt,$$

ta được phương trình chuyển động của điểm :

$$\begin{aligned}
x &= 2(t^2 + 2t), \\
y &= \frac{t^3}{3} + 8t.
\end{aligned}$$

**Thí dụ 6-5.** Một tàu thủy chuyển động thẳng nhanh dần đều. Vận tốc lúc ở $A$ là $v_1$ và ở $B$ là $v_2$, với $v_2 > v_1$, khoảng cách $AB = l$. Tìm phương trình chuyển động và khoảng thời gian $T$ tàu đi từ $A$ đến $B$. Tính vận tốc, gia tốc của tàu lúc $t = 2T$.

*Bài giải :*

*1 – Chọn phương pháp :* Tàu thủy chuyển động nhanh dần đều nên ta viết ngay được biểu thức vận tốc và phương trình chuyển động dưới dạng tọa độ tự nhiên.

*2 – Phương trình chuyển động, vận tốc :* chọn thời điểm và vị trí của tàu ở $A$ làm thời điểm đầu và gốc tọa độ. Theo (6-11) khi chọn chiều dương của quỹ đạo thuận chiều chuyển động, ta có :

$$\begin{aligned}
v &= v_1 + a_1 t, \\
s &= v_1 t + \frac{1}{2}a_1 t^2.
\end{aligned}$$

Thời điểm $t = T$ thì tàu đến $B$, lúc đó $v = v_2$ và $s = l$.

$$\begin{aligned}
v_2 &= v_1 + a_1 T, \\
l &= v_1 T + \frac{1}{2}a_1 T^2,
\end{aligned}$$

Giải hai phương trình trên ta được :

$$T = \frac{2l}{v_1 + v_2} \text{ và } a_1 = \frac{v_2 - v_1}{T} \ .$$

Vậy phương trình chuyển động của tàu là :

$$s = v_1 t + \frac{v_2 - v_1}{2T} t^2.$$

Vận tốc của tàu khi $t = 2T$ bằng :

$$v = v_1 + \frac{v_2 - v_1}{T} \cdot 2T = 2v_2 - v_1.$$

Gia tốc của tàu lúc nào cũng như nhau vì chuyển động thẳng biến đổi đều. Vậy :

$$a = a_1 = \frac{v_2 - v_1}{T} \ .$$

### 6.3.3. Bài toán tổng hợp

**Thí dụ 6-6.** Phương trình chuyển động của một điểm trong mặt phẳng là :

$$x = v_o t \ ; \quad y = \frac{1}{2}gt^2,$$

trong đó : $v_o$ và $g$ là những hằng số.

Tìm quỹ đạo, vận tốc, gia tốc tiếp, gia tốc pháp của điểm và bán kính cong của quỹ đạo (biểu diễn chúng qua vận tốc của điểm tại vị trí đó).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_7.svg" alt="Hình 6-7" class="figure-img" /><p class="figure-caption">Hình 6-7</p></div>

*Bài giải :*

*1 – Chọn phương pháp :* Bài toán cho ở dạng tọa độ Đêcác nhưng khi tìm gia tốc tiếp, gia tốc pháp và bán kính cong ta phải chuyển sang dạng tọa độ tự nhiên.

*2 – Quỹ đạo :* Rút $t$ từ phương trình đầu, thay vào phương trình thứ hai, ta được

$$y = \frac{g}{2v_o^2}x^2 \ .$$

Quỹ đạo của điểm là đường parabôn (H. 6-7).

*3 – Vận tốc, gia tốc :* Ta dùng phương pháp tọa độ Đêcác : áp dụng (6-2) và (6-3).

– Vận tốc :

$$\begin{aligned}
v_x &= \dot{x} = v_o \ ; \\
v_y &= \dot{y} = gt \ ; \\
v &= \sqrt{v_o^2 + g^2 t^2}
\end{aligned}$$

Như vậy, lúc $t = 0$ điểm có vận tốc $v_o$, sau đó tăng liên tục theo thời gian.

– Gia tốc

$$\begin{aligned}
a_x &= \ddot{x} = 0 \ ; \quad a_y = \ddot{y} = g, \\
a &= g = \text{const}.
\end{aligned}$$

Ta thấy điểm chuyển động với gia tốc có trị số không đổi và luôn song song với trục $Oy$. Chú ý : đây không phải là chuyển động biến đổi đều (chuyển động biến đổi đều khi $a^t = \text{const}$, chứ không phải $a = \text{const}$. Dưới đây sẽ thấy $a^t \neq \text{const}$).

*4 – Gia tốc tiếp, gia tốc pháp, bán kính cong :* Ta dùng phương pháp tọa độ tự nhiên. Áp dụng (6-12) :

– Gia tốc tiếp :

$$a^t = \frac{dv}{dt} = \frac{g^2 t}{\sqrt{v_o^2 + g^2 t^2}} = \frac{g^2 t}{v} \ .$$

Vì $v^2 = v_o^2 + g^2 t^2$ nên $t = \dfrac{1}{g}\sqrt{v^2 - v_o^2}$, thay $t$ vào biểu thức của $a^t$ :

$$a^t = \frac{g}{v}\sqrt{v^2 - v_o^2}$$

Từ đó ta thấy, tại thời điểm đầu $v = v_o$ thì $a^t = 0$, sau đó $a^t$ sẽ tăng theo $v$, khi $v \to \infty$ thì $a^t \to g$. Bởi vậy, khi đó : $a^t = a$.

– Gia tốc pháp :

$$a^2 = (a^n)^2 + (a^t)^2.$$

Do đó

$$\begin{aligned}
(a^n)^2 &= a^2 - (a^t)^2 = g^2 - g^2\frac{(v^2 - v_o^2)}{v^2} = g^2\frac{v_o^2}{v^2} \ , \\
a^n &= \frac{gv_o}{v} \ .
\end{aligned}$$

Như vậy lúc đầu $v = v_o$ thì $a^n = g$, sau đó $a^n$ giảm khi $v$ tăng và $a^n \to 0$.

– Bán kính cong của quỹ đạo : Từ $a^n = \dfrac{v^2}{\rho}$ tính được :

$$\rho = \frac{v^2}{a^n} = \frac{v^3}{v_o g} \ .$$

Ta thấy lúc đầu bán kính cong có giá trị cực tiểu $\rho_{\min} = \dfrac{v_o^2}{g}$ ; sau đó sẽ tăng theo $v$, khi $v \to \infty$ thì $\rho \to \infty$.

---

## 6.4. BÀI TẬP

### 6.4.1. Biết phương trình chuyển động, tìm các đặc trưng chuyển động

**6-1.** Cho phương trình chuyển động của điểm ($x, y, z$ tính bằng cm, $t$ tính bằng s) ; tìm quỹ đạo, vận tốc, gia tốc của điểm :

a) $\begin{cases} x = t^3 + 2 \\ y = 3 - t^3 \ ; \end{cases}$ $\quad$ b) $\begin{cases} x = 10\cos\dfrac{2\pi}{5}t \\ y = 10\sin\dfrac{2\pi}{5}t \ ; \end{cases}$ $\quad$ c) $\begin{cases} x = \dfrac{4}{1 + t} \\ y = -4t - 4 \\ z = 2t + 2 \end{cases}$

*Trả lời :*

a) $x + y = 5$ ; $(2 \leqslant x \leqslant \infty)$ ; $v = 3\sqrt{2}t^2\text{ cm/s}$ ; $a = 6\sqrt{2}t\text{ cm/s}^2$.

b) Vòng tròn bán kính $10\text{cm}$ ; $v = 4\pi\text{ cm/s}$ ; $a = 1,6\pi^2\text{ cm/s}^2$.

c) $xy = -16$ ; $y = -2z$ (mặt trụ hypecbôlic) ;

$$v = \frac{2}{(1 + t)^2}\sqrt{4 + 5(1 + t)^4}\text{ cm/s} \ ; \qquad a = \frac{8}{(1 + t)^3}\text{ cm/s}^2.$$

**6-2.** Một điểm chuyển động theo luật :

$$x = t, \quad y = \sin t^2 \quad (x, y : \text{ cm}, \ t : \text{ s}).$$

Tìm : a) Trị số vận tốc của điểm lúc nó cắt trục $Ox$ lần thứ nhất kể từ lúc bắt đầu chuyển động.

b) Trị số gia tốc ở thời điểm này.

c) Trị số vận tốc của điểm tại vị trí cao nhất của nó trên quỹ đạo

*Trả lời :* $v = 3,68\text{ cm/s}$ ; $a = 2\text{ cm/s}^2$ ; $v = 1\text{ cm/s}$.

**6-3.** Một điểm dao động theo luật $x = A\sin\left(kt + \dfrac{3\pi}{2}\right)$, ở đây biên độ $A$ tính bằng cm, tần số $k$ tính bằng rad/s. Tìm $A$ và $k$ nếu chu kỳ dao động bằng $0,4\text{s}$ và vị trí lúc đầu $x_o = -4\text{cm}$.

*Trả lời :* $A = 4\text{cm}$ ; $k = 15,7\text{ rad/s}$.

**6-4.** Một điểm chuyển động trên đường tròn bán kính $R$ theo luật $s = v_o t - \dfrac{1}{2}\gamma t^2$.

Tìm : a) Trị số gia tốc của điểm.

b) Thời điểm $t$ và số vòng $N$ khi điểm chuyển động nhận được gia tốc bằng $\gamma$.

*Trả lời :*

a) $a = \dfrac{1}{R}\sqrt{\gamma R^2 + (v_o - \gamma t)^4}$.

[Đính chính bản in: Trong biểu thức dưới dấu căn ở câu a) là $\gamma^2 R^2 + (v_o - \gamma t)^4$.]

b) $a = \gamma$, lúc $t = \dfrac{v_o}{\gamma}$ ; $N = \dfrac{v_o^2}{4\pi\gamma R}$ .

**6-5.** Con lắc toán học có chiều dài $l$ chuyển động theo luật $S = A\sin kt$, trong đó $A$ và $k$ là các hằng số (H. 6-8). Tìm vận tốc, gia tốc tiếp, gia tốc pháp của con lắc và các vị trí tại đó các đại lượng này bằng không.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_8.svg" alt="Hình 6-8" class="figure-img" /><p class="figure-caption">Hình 6-8</p></div>

*Trả lời :* $v = Ak\cos kt$ ; $a^t = -Ak^2\sin kt$ ;

$$a^n = -\frac{A^2 k^2}{l}\cos^2 kt.$$

[Đính chính bản in: Trị số gia tốc pháp $a^n = \dfrac{v^2}{l} = \dfrac{A^2 k^2}{l}\cos^2 kt \geqslant 0$ (không có dấu trừ).]

$v = a^n = 0$ tại $2$ vị trí biên ;

$a^t = 0$ tại vị trí cân bằng.

**6-6.** Hai điểm cùng bắt đầu chuyển động từ một điểm trên vòng tròn bán kính $R = 16\text{m}$ theo hai chiều ngược nhau. Điểm thứ nhất chuyển động theo luật $S = At + 2\sin\dfrac{\pi}{2}t$, trong đó $A = \text{const}$, còn điểm thứ hai có gia tốc pháp $a^n = 4t^2$. Khi hai điểm gặp nhau thì gia tốc của điểm thứ hai bằng $4\sqrt{5}\text{ m/s}^2$.

Tìm $A$ và thời điểm gặp nhau.

*Trả lời :* $A = 32\pi - 6$ ; $t = 1\text{s}$.

### 6.4.2. Tìm phương trình chuyển động và các đặc trưng chuyển động

**6-7.** Cơ cấu cam như hình 6-9. Cam là đĩa tròn có bán kính $r$, trục quay $O$ cách tâm $C$ một đoạn $OC = e$. Cam quay quanh $O$ theo luật $\varphi = \omega t$. Tìm phương trình chuyển động và vận tốc của thanh $AB$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_9.svg" alt="Hình 6-9" class="figure-img" /><p class="figure-caption">Hình 6-9</p></div>

*Trả lời :*

$$y = e\cos\varphi + r\sqrt{1 - \lambda^2\sin^2\varphi} \ , \quad \left(\lambda = \frac{e}{r} \ ; \ \varphi = \omega t\right)$$

$$v = \left(1 - \frac{\lambda\cos\omega t}{\sqrt{1 - \lambda^2\sin^2\omega t}}\right)e\omega\sin\omega t.$$

**6-8.** Cơ cấu tay quay thanh truyền như hình 6-10. Biết $\varphi = \omega_o t$ và coi $\lambda = \dfrac{OA}{AB} = \dfrac{r}{l}$ là rất nhỏ.

a) Tìm phương trình chuyển động, vận tốc, gia tốc điểm $B$.

b) Tìm phương trình chuyển động, vận tốc, gia tốc trung điểm $M$ của thanh $AB$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_10.svg" alt="Hình 6-10" class="figure-img" /><p class="figure-caption">Hình 6-10</p></div>

*Trả lời :*

$$\begin{aligned}
x_B &= r\cos\omega_o t + \frac{r^2}{4l}\cos 2\omega_o t + \text{const}, \\
x_M &= r\cos\omega_o t + \frac{r^2}{8l}\cos 2\omega_o t + \text{const}, \\
y_M &= \frac{r}{2}\sin\omega_o t.
\end{aligned}$$

**6-9.** Con chạy chuyển động thẳng với gia tốc.

$$a = -\pi^2\sin\frac{\pi}{2}t \ (\text{m/s}^2).$$

Tìm phương trình chuyển động, biết vận tốc đầu của con chạy là $v_o = 2\pi\text{ (m/s)}$ và vị trí đầu của nó trùng với gốc tọa độ. Vẽ đường biểu diễn khoảng cách, vận tốc và gia tốc theo $t$.

*Trả lời :* $x = 4\sin\dfrac{\pi}{2}t\text{ (m)}$.

**6-10.** Một điểm chuyển động từ gốc tọa độ, gia tốc có hình chiếu là $a_x = -\gamma$ ; $a_y = \gamma$. Vận tốc đầu có hình chiếu $v_{ox} = v_o$ ; $v_{oy} = 0$. Tìm quỹ đạo và trị số nhỏ nhất của vận tốc.

*Trả lời :* $(x + y)^2 = \dfrac{2v_o^2}{\gamma}y$ ; $v_{\min} = \dfrac{v_o}{\sqrt{2}}$ .

**6-11.** Đầu búa máy rơi xuống từ độ cao $2,5\text{m}$, thời gian để búa đạt tới độ cao đó gấp đôi thời gian rơi xuống. Tìm số lần đập của búa trong một phút, nếu coi là búa rơi tự do với gia tốc $9,8\text{ m/s}^2$.

*Trả lời :* $28$ lần.

**6-12.** Một xe chuyển động trên đường tròn bán kính $R = 400\text{m}$ với vận tốc đầu $v_o = 18\text{ km/h}$. Xe chuyển động nhanh dần đều và $1$ phút sau đạt được vận tốc $72\text{ km/h}$. Tìm gia tốc tiếp, pháp, toàn phần của xe và đoạn đường mà xe đi được sau $20\text{s}$ kể từ lúc bắt đầu chuyển động.

*Trả lời :*

$$a^t = \frac{1}{4}\text{ m/s}^2 \ ; \quad a^n = \frac{1}{4}\text{ m/s}^2 \ ;$$

$$a = \frac{\sqrt{2}}{4}\text{ m/s}^2 \ ; \quad s = 150\text{m}.$$

**6-13.** Một điểm chuyển động nhanh dần đều trên mặt nghiêng $AB$ sau đó chậm dần đều trên mặt ngang và cuối cùng dừng lại ở $C$. Biết $AB = S_1$, $BC = S_2$ và thời gian điểm chuyển động từ $A$ đến $C$ là $T$. Tìm trị số các gia tốc $a_1$ và $a_2$ khi điểm chuyển động trên $AB$ và $BC$. Lúc đầu ở $A$ vận tốc của điểm bằng không (H. 6-11).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_11.svg" alt="Hình 6-11" class="figure-img" /><p class="figure-caption">Hình 6-11</p></div>

*Trả lời :*

$$a_1 = \frac{2(S_1 + S_2)^2}{S_1 T^2} \ , \qquad a_2 = \frac{2(S_1 + S_2)^2}{S_2 T^2} \ .$$

### 6.4.3. Bài toán tổng hợp

**6-14.** Điểm $M$ chuyển động trên đường tròn bán kính $R = 8\text{m}$ với tâm $C$ có tọa độ $(R, 0)$. Vị trí của điểm trên vòng tròn được xác định bằng góc hợp giữa bán kính vectơ $\overrightarrow{CM}$ của điểm và trục $x$ :

$$\varphi = \frac{\pi}{2}\sin\frac{\pi}{2}t.$$

a) Lập phương trình chuyển động của điểm dưới dạng tọa độ tự nhiên. Xác định vận tốc, gia tốc toàn phần của điểm lúc đầu và lúc hướng của chuyển động thay đổi.

b) Lập phương trình chuyển động của điểm dưới dạng tọa độ Đêcác.

*Trả lời :*

a) $s = 4\pi\sin\dfrac{\pi}{2}t\text{ m},$

$$t = 0 : v = 2\pi^2\text{ m/s} \ ; \quad a = \frac{\pi^4}{2}\text{ m/s}^2,$$

$$t = 1 : v = 0 \ ; \quad a = \pi^3\text{ m/s}^2.$$

b)

$$\begin{aligned}
x &= 8 + 8\cos\left(\frac{\pi}{2}\sin\frac{\pi}{2}t\right)\text{ m}, \\
y &= 8\sin\left(\frac{\pi}{2}\sin\frac{\pi}{2}t\right)\text{ m}.
\end{aligned}$$

**6-15.** Tìm phương trình chuyển động dọc quỹ đạo của điểm, nếu biết phương trình chuyển động của nó dưới dạng Đêcác :

a) $x = 3t^2 + 5$ , $\quad y = 4t^2 + 3$.

b) $x = a\cos t$ , $\quad y = a\sin t$, $z = ct$.

c) $x = e^t\cos t$ , $\quad y = e^t\sin t$ ; $z = e^t$.

d) $x = 4a\cos^2\omega t$ , $\quad y = a\sin^2\omega t$.

*Trả lời :*

a) $s = 5t^2$ . $\quad$ b) $s = t\sqrt{a^2 + c^2}$.

c) $s = \sqrt{3}(e^t - 1)$ . $\quad$ d) $s = 5a\sin^2\omega t$.

[Đính chính bản in: Với đáp số $s = 5a\sin^2\omega t$, phương trình ở câu d) tương ứng là $y = 3a\sin^2\omega t$.]

**6-16.** Một điểm chuyển động theo luật :

$$x = 300t \ ; \quad y = 400t - 5t^2 \quad (t : \text{s} \ ; \ x \text{ và } y : \text{m}).$$

Tìm a) Vận tốc và gia tốc của điểm ở thời điểm đầu.

b) Độ cao và tầm xa của điểm.

c) Bán kính cong của quỹ đạo ở điểm đầu và điểm cao nhất.

*Trả lời :* $v_o = 500\text{ m/s}$ ; $a_o = 10\text{ m/s}^2$ ; $h = 8\text{km}$ ;

$s = 24\text{km}$ ; $\rho_o = 41,67\text{km}$ ; $\rho = 9\text{km}$

**6-17.** Một điểm chuyển động theo đường đinh ốc có phương trình $x = 2\cos 4t$, $y = 2\sin 4t$, $z = 2t$ ($x, y, z : \text{m}$).

Tìm bán kính cong của quỹ đạo.

*Trả lời :* $\rho = 2\dfrac{1}{8}\text{m}$.

**6-18.** Cơ cấu tay quay thanh truyền với $OA = AB = l = 60\text{cm}$. Biết $\varphi = 4\pi t$. Tìm quỹ đạo điểm $M$ của thanh truyền, $MB = \dfrac{1}{3}$ .

[Đính chính bản in: $MB = \dfrac{l}{3} = 20\text{cm}$ (bản in nhầm $l$ thành $1$).]

Tính vận tốc, gia tốc và bán kính cong quỹ đạo của $M$ ứng với vị trí $\varphi = 0$ (H. 6-12).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_12.svg" alt="Hình 6-12" class="figure-img" /><p class="figure-caption">Hình 6-12</p></div>

*Trả lời :* Elip $\dfrac{x^2}{100^2} + \dfrac{y^2}{20^2} = 1,$

$$v = 80\pi\text{cm/s} \ ; \quad a = 1600\pi^2\text{cm/s}^2 \ ; \quad \rho = 4\text{cm}.$$

**6-19.** Bánh xe lăn không trượt theo đường nằm ngang, một điểm trên vành có chuyển động xiclôit với phương trình :

$$\begin{aligned}
x &= 20t - \sin 20t, \\
y &= 1 - \cos 20t,
\end{aligned}$$

$(t : \text{s} \ ; \ x \text{ và } y : \text{m}).$

Tìm gia tốc và bán kính cong của điểm, xác định giá trị của bán kính cong lúc $t = 0$. (H. 6-13).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_13.svg" alt="Hình 6-13" class="figure-img" /><p class="figure-caption">Hình 6-13</p></div>

*Trả lời :* $\vec{a}$ hướng từ $M$ về $C$ ;

$$a = 400\text{ m/s}^2 \ ; \quad \rho = 2MA \ ; \quad \rho_o = 0.$$

**6-20.** Một tay máy gồm trụ quay $1$, bộ phận di chuyển thẳng đứng $2$, cánh tay $3$ cùng bàn kẹp $K$. Tìm vận tốc và gia tốc của trọng tâm bàn kẹp theo $\varphi(t), z(t), r(t)$ (H.6-14).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_14.svg" alt="Hình 6-14" class="figure-img" /><p class="figure-caption">Hình 6-14</p></div>

*Trả lời :*

$$\begin{aligned}
v &= \sqrt{\dot{r}^2 + r^2\dot{\varphi}^2 + \dot{z}^2}, \\
a &= \sqrt{(\ddot{r} - r\dot{\varphi}^2)^2 + (r\ddot{\varphi} + 2\dot{r}\dot{\varphi})^2 + \ddot{z}^2}.
\end{aligned}$$

**6-21.** Một cột quay quanh trục thẳng đứng với góc $\varphi_1$ mang cánh tay $3$ cùng bàn kẹp được xác định nhờ góc $\theta$ và tầm với $r$. Tìm vận tốc và gia tốc của trọng tâm bàn kẹp (Hình 6-15).

[Đính chính bản in: Trong phần trả lời, góc quay quanh trục thẳng đứng được kí hiệu là $\varphi$.]

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_15.svg" alt="Hình 6-15" class="figure-img" /><p class="figure-caption">Hình 6-15</p></div>

*Trả lời :*

$$\begin{aligned}
v &= \sqrt{\dot{r}^2 + r^2\dot{\theta}^2 + r^2\sin^2\theta\dot{\varphi}^2} \ ; \\
a &= \big[(\ddot{r} - r\dot{\theta}^2 - r\dot{\varphi}^2\sin^2\theta)^2 + r\ddot{\theta} + 2\dot{r}\dot{\theta} - r\dot{\varphi}^2\sin\theta\cos\theta + \\
&\quad + (r\ddot{\varphi}\sin\theta + 2\dot{r}\dot{\varphi}\sin\theta + 2r\dot{\varphi}\dot{\theta}\cos\theta)^2\big]^{1/2}.
\end{aligned}$$

[Đính chính bản in: Số hạng thứ hai trong biểu thức gia tốc $a$ thiếu ngoặc và bình phương: $(r\ddot{\theta} + 2\dot{r}\dot{\theta} - r\dot{\varphi}^2\sin\theta\cos\theta)^2$.]

**6-22.** Một tay máy gồm bộ phận quay quanh trục thẳng đứng (góc quay $\varphi$) và hai khâu nằm trong một mặt phẳng với trục thẳng đứng (góc quay của các khâu là $\theta_1$ và $\theta_2$). Tìm vận tốc của trọng tâm của bàn kẹp (H. 6-16).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_6_16.svg" alt="Hình 6-16" class="figure-img" /><p class="figure-caption">Hình 6-16</p></div>

*Trả lời :*

$$\begin{aligned}
v &= \big[l_1^2\dot{\theta}_1^2 + l_2^2(\dot{\theta}_1 + \dot{\theta}_2)^2 + 2l_1 l_2\dot{\theta}_1(\dot{\theta}_1 + \dot{\theta}_2)\cos\theta_2 + \\
&\quad + (l_1\sin\theta_1 + l_2\sin(\theta_1 + \theta_2))^2\dot{\varphi}^2\big]^{1/2}.
\end{aligned}$$
