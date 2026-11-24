---
title: "Bài Tập Động Học - Chương 7: Chuyển Động Quay Của Vật Rắn Quanh Một Trục Cố Định"
layout: doc
---

# CHƯƠNG 7: CHUYỂN ĐỘNG QUAY CỦA VẬT RẮN QUANH MỘT TRỤC CỐ ĐỊNH

## 7.1. CƠ SỞ LÍ THUYẾT

### 7.1.1. Chuyển động của vật

*1. Phương trình chuyển động của vật*

$$\overline{\varphi} = \overline{\varphi}(t), \tag{7-1}$$

trong đó : $\overline{\varphi}$ được tính bằng $\text{rad}$, là góc giữa mặt phẳng gắn vào vật và mặt phẳng cố định (hai mặt phẳng này đều chứa trục quay) với chiều quay dương được định trước.

*2. Vận tốc góc của vật* $\overline{\omega}$ ($\text{rad/s}$)

$$\overline{\omega} = \frac{d\overline{\varphi}}{dt} \quad \begin{cases} \overline{\omega} > 0 : \text{vật quay theo chiều dương} \\ \overline{\omega} < 0 : \text{vật quay theo chiều âm} \end{cases} \tag{7-2}$$

$$\omega = \frac{\pi n}{30} \, , \tag{7-3}$$

trong đó : $n$ là số vòng quay trong một phút.

*3. Gia tốc góc của vật* $\overline{\varepsilon}$ ($\text{rad/s}^2$)

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_1.svg" alt="Hình 7-1" class="figure-img" /><p class="figure-caption">Hình 7-1</p></div>

$$\overline{\varepsilon} = \frac{d\overline{\omega}}{dt} = \frac{d^2\overline{\varphi}}{dt^2} \, . \tag{7-4}$$

*4. Tính chất chuyển động*

$$\overline{\omega}.\overline{\varepsilon} \begin{cases} > 0 : \text{vật quay nhanh dần} \\ < 0 : \text{vật quay chậm dần} \end{cases} \tag{7-5}$$

*5. Các chuyển động quay đặc biệt :* Chọn vị trí đầu làm gốc và chiều dương thuận chiều quay.

a) Quay đều : $\omega = \omega_0 = \text{const}.$

Suy ra :

$$\varepsilon = 0 \, ; \quad \varphi = \omega_0 t \tag{7-6}$$

b) Quay biến đổi đều : $\varepsilon = \varepsilon_0 = \text{const}$

Suy ra :

$$\omega = \omega_0 \pm \varepsilon t \, ; \quad \varphi = \omega_0 t \pm \frac{1}{2}\varepsilon_0 t^2 \, , \tag{7-7}$$

trong đó : dấu $+$ ứng với chuyển động nhanh dần đều, dấu $-$ chậm dần đều cho tới khi vật dừng lại ($\omega = 0$) ; $\omega_0$ – vận tốc góc của vật tại thời điểm đầu.

---

### 7.1.2. Chuyển động của các điểm thuộc vật

*1. Phương trình chuyển động của điểm*

$$\overline{S} = \widehat{OM} = R\overline{\varphi}(t), \tag{7-8}$$

trong đó : $R$ là khoảng cách từ điểm khảo sát $M$ đến trục quay.

[Đính chính bản in: Trên Hình 7-2, điểm mốc cố định trên vòng tròn kí hiệu là $D$ và cung dịch chuyển là $S$, nên $\widehat{OM}$ trong $(7\text{-}8)$ là lỗi in của $\widehat{DM}$.]

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_2.svg" alt="Hình 7-2" class="figure-img" /><p class="figure-caption">Hình 7-2</p></div>

*2. Vận tốc của điểm :* $\vec{v} = \vec{\omega} \wedge \vec{r}$

$$\vec{v} \begin{cases} \text{phương : thẳng góc với bán kính } IM, \\ \text{chiều : thuận chiều quay của vật, tức thuận với } \overline{\omega} \\ \text{giá trị : } v = R\omega. \end{cases} \tag{7-9}$$

*3. Gia tốc của điểm :*

$$\vec{a}^t = \vec{\varepsilon} \wedge \vec{r} \, ; \quad \vec{a}^n = \vec{\omega} \wedge \vec{v}$$

$$\vec{a} = \vec{a}^t + \vec{a}^n,$$

$$\vec{a}^t \begin{cases} \text{phương : thẳng góc với bán kính } IM, \\ \text{chiều : thuận chiều } \overline{\varepsilon}, \\ \text{giá trị } a^t = R\varepsilon. \end{cases} \tag{7-10}$$

$$\vec{a}^n \begin{cases} \text{phương : dọc bán kính } IM, \\ \text{chiều : hướng vào trục quay,} \\ \text{giá trị } a^n = R\omega^2. \end{cases} \tag{7-11}$$

$$a = \sqrt{(a^t)^2 + (a^n)^2} = R\sqrt{\varepsilon^2 + \omega^4}$$

$$\operatorname{tg}\alpha = \frac{\varepsilon}{\omega^2} \, , \tag{7-12}$$

trong đó : $\alpha$ là góc nghiêng giữa gia tốc toàn phần với bán kính $IM$.

---

### 7.1.3. Truyền chuyển động quay quanh một trục cố định qua tiếp xúc và không có hiện tượng trượt

*1. Truyền chuyển động quay nhờ bánh răng, bánh ma sát, đai truyền, xích :*

$$i_{12} = \frac{\overline{\omega}_1}{\overline{\omega}_2} = \pm \frac{r_2}{r_1} \left( = \pm \frac{Z_2}{Z_1} \text{ cho trường hợp bánh răng} \right) \tag{7-13}$$

$r$ – bán kính bánh, $Z$ – số răng của bánh răng ;

Dấu $+$ : ăn khớp trong, đai thẳng (H. 7-3a)

Dấu $-$ : ăn khớp ngoài, đai chéo (H. 7-3b)

*2. Truyền động giữa vật quay quanh trục cố định và vật tịnh tiến bằng thanh răng hay bằng ma sát (H. 7-3c) :*

$$v = R.\omega \, , \tag{7-14}$$

$v$ – vận tốc vật tịnh tiến, $\omega$ – vận tốc góc vật quay.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_3.svg" alt="Hình 7-3" class="figure-img" /><p class="figure-caption">Hình 7-3</p></div>

---

## 7.2. HƯỚNG DẪN ÁP DỤNG

### 7.2.1. Các loại bài toán

*1. Bài toán một vật*

– Biết phương trình chuyển động, các yếu tố đặc trưng động học của vật, tìm phương trình chuyển động, các yếu tố đặc trưng động học của một điểm trên vật.

– Biết phương trình chuyển động, các yếu tố đặc trưng động học của điểm trên vật, tìm phương trình chuyển động, các yếu tố đặc trưng động học của vật.

*2. Bài toán truyền động*

Biết dạng truyền động, tìm quan hệ chuyển động giữa trục dẫn và trục bị dẫn.

### 7.2.2. Phương pháp giải bài toán

+ Tìm $\overline{\omega}, \overline{\varepsilon}$ : áp dụng $(7\text{-}2)$, $(7\text{-}3)$, $(7\text{-}4)$ hoặc suy từ $(7\text{-}9)$, $(7\text{-}10)$, $(7\text{-}11)$. Trường hợp vật quay biến đổi đều thì dùng $(7\text{-}7)$.

+ Tìm tính chất nhanh, chậm dần của chuyển động : áp dụng $(7\text{-}5)$

+ Tìm vận tốc, gia tốc của điểm thuộc vật : áp dụng $(7\text{-}9)$, $(7\text{-}10)$, $(7\text{-}11)$, $(7\text{-}12)$.

+ Tìm sự liên hệ về truyền chuyển động : áp dụng $(7\text{-}13)$, $(7\text{-}14)$.

---

## 7.3. BÀI GIẢI MẪU {#_2-3-bai-giai-mau-chuong-7-sach-bai-tap-tap-2}

### 7.3.1. Biết chuyển động của vật hoặc điểm thuộc vật tìm các đặc trưng chuyển động

#### Thí dụ 7-1.
Một trục máy đang quay với vận tốc góc $n = 600\text{ vòng/phút}$ thì tắt máy và sau $20\text{s}$ thì dừng lại. Tìm gia tốc góc và số vòng mà trục còn quay được sau khi tắt máy. Coi chuyển động của trục là biến đổi đều.

*Bài giải :* Sau khi tắt máy, trục quay chậm dần đều. Chọn chiều quay dương theo chiều chuyển động, theo $(7\text{-}7)$ ta có :

$$\omega = \omega_0 - \varepsilon t,$$

$$\varphi = \omega_0 t - \frac{1}{2}\varepsilon t^2,$$

trong đó $\omega_0 = \dfrac{\pi n}{30} = 20\pi\text{ rad/s}$.

Lúc $t = 20\text{s}$ thì $\omega = 0 \, ; \ \varphi = \varphi_1$. Thay vào hệ phương trình trên ta có :

$$0 = 20\pi - \varepsilon.20$$

$$\varphi_1 = 2\pi.20 - \varepsilon.\frac{20^2}{2} \, .$$

[Đính chính bản in: Ở biểu thức thế số tính $\varphi_1$, bản in viết nhầm $\omega_0 = 20\pi$ thành $2\pi$; phép tính đúng là $\varphi_1 = 20\pi.20 - \varepsilon.\frac{20^2}{2} = 200\pi\text{ rad}$.]

Khi giải ra, ta được :

$$\varepsilon = \pi\text{ rad/s}^2 \, ; \quad \varphi_1 = 200\pi\text{ rad}.$$

Số vòng trục máy còn quay được :

$$N = \frac{\varphi_1}{2\pi} = 100\text{ vòng}.$$

---

#### Thí dụ 7-2.
Thanh $OA$ quay quanh trục $O$ theo luật $\varphi = \dfrac{\pi}{6}t^3$.

Tìm tính chất chuyển động của thanh và vận tốc, gia tốc của điểm $A$ lúc thanh quay được $18\text{ vòng}$. Biết $OA = l = 20\text{cm}$ (H. 7-4).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_4.svg" alt="Hình 7-4" class="figure-img" /><p class="figure-caption">Hình 7-4</p></div>

*Bài giải :* 1 – Trước hết ta cần tìm vận tốc và gia tốc góc của thanh. Theo $(7\text{-}2)$ và $(7\text{-}4)$ :

$$\overline{\omega} = \dot{\varphi} = \frac{\pi}{2}t^2,$$

$$\overline{\varepsilon} = \dot{\varphi} = \pi t.$$

[Đính chính bản in: Ở biểu thức $\overline{\varepsilon}$, bản in thiếu một dấu chấm đạo hàm cấp hai ($\ddot{\varphi}$ hoặc $\dot{\overline{\omega}}$).]

Gọi $t_1$ là thời điểm mà thanh quay được $18\text{ vòng}$, ứng với $\varphi_1 = 18.2\pi = 36\pi$. Từ phương trình chuyển động ta có :

$$36\pi = \frac{\pi}{6}t^3.$$

Rút ra : $t_1 = 6\text{s}$.

Ứng với $t_1$ :

$$\overline{\omega}_1 = \frac{\pi}{2}.6^2 = 18\pi\text{ rad/s} \, ,$$

$$\overline{\varepsilon}_1 = 6\pi\text{ rad/s}^2.$$

Lúc đó : $\overline{\omega}_1.\overline{\varepsilon}_1 > 0$ : vật đang quay nhanh dần.

2 – Vận tốc, gia tốc điểm $A$ : theo $(7\text{-}9)$, $(7\text{-}10)$, $(7\text{-}11)$ :

$$v = l\omega_1 = 0,2.18\pi = 11,3\text{ m/s},$$

$$a^t = l\varepsilon_1 = 0,2.6\pi = 3,8\text{ m/s}^2,$$

$$a^n = l\omega_1^2 = 0,2.(18\pi)^2 = 648\text{ m/s}^2.$$

Các vectơ vẽ ở hình 7-4.

---

#### Thí dụ 7-3.
Một vật quay quanh trục cố định. Ở thời điểm khảo sát, điểm $A$ cách trục quay khoảng $R = 0,5\text{cm}$ có vận tốc $v = 2\text{ m/s}$ và gia tốc (toàn phần) là $8\sqrt{3}\text{ m/s}^2$.

Tìm vận tốc góc và gia tốc góc của vật.

Tìm vận tốc và gia tốc điểm $B$ cách trục quay một khoảng $r = 0,2\text{m}$ (H. 7-5).

[Đính chính bản in: Ở đề bài, $R = 0,5\text{cm}$ là lỗi in của $R = 0,5\text{m}$ như đã sử dụng trong bài giải.]

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_5.svg" alt="Hình 7-5" class="figure-img" /><p class="figure-caption">Hình 7-5</p></div>

*Bài giải :* 1 – Vận tốc điểm $A$ đã biết, vậy vận tốc góc của vật là :

$$\omega = \frac{v}{R} = \frac{2}{0,5} = 4\text{ rad/s}.$$

Để tìm gia tốc góc của vật, phải biết gia tốc tiếp của điểm $A$. Theo $(7\text{-}11)$, $(7\text{-}12)$ :

$$a_A^n = R\omega^2 = 0,5.4^2 = 8\text{ m/s}^2,$$

$$a_A^t = \sqrt{a_A^2 - (a_A^n)^2} = \sqrt{(8\sqrt{3})^2 - 8^2} = 8\sqrt{2}\text{ m/s}^2.$$

Từ $(7\text{-}10)$, gia tốc góc của vật là :

$$\varepsilon = \frac{a_A^t}{R} = \frac{8\sqrt{2}}{0,5} = 16\sqrt{2}\text{ rad/s}^2 \, .$$

Căn cứ $\vec{a}_A$ đã cho, ta thấy $\overline{\varepsilon}$ có chiều ngược $\overline{\omega}$. Như vậy lúc khảo sát vật quay chậm dần ($\overline{\omega}.\overline{\varepsilon} < 0$).

2 – Biết $\overline{\omega}$ và $\overline{\varepsilon}$ của vật, ta dễ dàng tính được vận tốc, gia tốc điểm $B$ như thí dụ 7-2, nhưng cũng có thể suy trực tiếp theo tỉ lệ :

$$\frac{v_B}{v_A} = \frac{a_B}{a_A} = \frac{r}{R} = \frac{0,2}{0,5} = \frac{2}{5} \, .$$

Vậy $v_B = \dfrac{2}{5}v_A = 0,8\text{ m/s} \, ; \ a_B = \dfrac{2}{5}a_A = \dfrac{16\sqrt{3}}{5}\text{ m/s}^2$.

---

### 7.3.2. Truyền chuyển động quay quanh các trục cố định

#### Thí dụ 7-4.
Một hộp biến tốc như hình 7-6. Số răng của các bánh tương ứng là $Z_1 = 10 \, ; \ Z_2 = 60 \, ; \ Z_3 = 12 \, ; \ Z_4 = 70$. Tìm tỉ số truyền của 2 trục $A$ và $B$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_6.svg" alt="Hình 7-6" class="figure-img" /><p class="figure-caption">Hình 7-6</p></div>

*Bài giải :*

Bánh 1 và 2 ăn khớp ngoài, nên tỉ số truyền là :

$$i_{12} = \frac{\overline{\omega}_1}{\overline{\omega}_2} = -\frac{Z_2}{Z_1} \, . \tag{a}$$

Bánh 2 và 3 gắn cứng trên một trục, nên $\overline{\omega}_2 = \overline{\omega}_3$.

Bánh 3 và 4 ăn khớp ngoài, nên :

$$i_{34} = \frac{\overline{\omega}_3}{\overline{\omega}_4} = -\frac{Z_4}{Z_3} \, . \tag{b}$$

Nhân (a) và (b) :

$$\frac{\overline{\omega}_1}{\overline{\omega}_2} \cdot \frac{\overline{\omega}_3}{\overline{\omega}_4} = \frac{Z_2 Z_4}{Z_1 Z_3} \, .$$

Vì $\overline{\omega}_1 = \overline{\omega}_A \, ; \ \overline{\omega}_4 = \overline{\omega}_B$ nên :

$$i_{14} = \frac{\overline{\omega}_A}{\overline{\omega}_B} = \frac{Z_2 \cdot Z_4}{Z_1 \cdot Z_3} = \frac{60.70}{10.12} = 35.$$

Vậy trục $B$ quay cùng chiều với trục $A$ nhưng chậm hơn 35 lần.

---

#### Thí dụ 7-5.
Cơ cấu tời như hình 7-7. Do thắng bị hỏng nên vật $M$ rơi xuống theo phương trình $x = 3t^2$ ($x : \text{cm} \, ; \ t : \text{s}$). Tìm vận tốc và gia tốc của đầu mút $A$ của tay quay lúc $t = 2\text{s}$. Biết bán kính tang tời $r = 20\text{cm}$, độ dài tay quay $l = 40\text{cm}$, số răng của các bánh $Z_1 = 72 \, ; \ Z_2 = 24$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_7.svg" alt="Hình 7-7" class="figure-img" /><p class="figure-caption">Hình 7-7</p></div>

*Bài giải :*

1 – Xét điểm $M$ :

$$v_M = \dot{x} = 6t\text{ cm/s} \, ; \quad a_M = \ddot{x} = 6\text{ cm/s}^2$$

2 – Gọi $N$ là điểm trên vành trống ta có :

$$v_N = v_M = 6t\text{ cm/s} \, ; \quad a_N^t = a_M = 6\text{ cm/s}^2.$$

Suy ra :

vận tốc góc

$$\omega_1 = \frac{v_N}{r} = \frac{6t}{20} = 0,3t\text{ rad/s},$$

gia tốc góc

$$\varepsilon_1 = \frac{a_N^t}{r} = \frac{6}{20} = 0,3\text{ rad/s}^2,$$

chiều của $\overline{\omega}_1$ và $\overline{\varepsilon}_1$ như hình vẽ.

3 – Bánh 1 và 2 ăn khớp ngoài. Trị số vận tốc góc bánh 2 được tính theo công thức :

$$\frac{\omega_2}{\omega_1} = \frac{Z_1}{Z_2} \, .$$

Vậy :

$$\omega_2 = \frac{Z_1}{Z_2}\omega_1 = \frac{72}{24}.0,3t = 0,9t\text{ rad/s}.$$

$$\varepsilon_2 = \dot{\omega}_2 = 0,9\text{ rad/s}^2.$$

Lúc $t = 2\text{s}$ thì $\omega_2 = 1,8\text{ rad/s} \, ; \ \varepsilon_2 = 0,9\text{ rad/s}^2$.

4 – Xét chuyển động điểm $A$ :

$$\begin{aligned}
v_A &= l\omega_2 = 40.1,8 = 72\text{ cm/s} \, ; \\
a_A^n &= l\omega_2^2 = 40.(1,8)^2 = 130\text{ cm/s}^2,
\end{aligned}$$

$$\begin{aligned}
a_N^t &= l\varepsilon_2 = 40.0,9 = 36\text{ cm/s}^2 \, ; \\
a_N &= \sqrt{36^2 + 130^2} = 135\text{ cm/s}^2.
\end{aligned}$$

[Đính chính bản in: Ở dòng trên, $a_N^t$ và $a_N$ là lỗi in chỉ số của điểm $A$, đúng ra là $a_A^t$ và $a_A$.]

---

## 7.4. BÀI TẬP

### 7.4.1. Biết chuyển động của vật hoặc điểm thuộc vật, tìm các đặc trưng của chuyển động

**7-1.** Rôto của tuabin quay nhanh dần đều, ở thời điểm $t_1$ và $t_2$ có tốc độ tương ứng là $n_1 = 1300\text{ vòng/phút}$ và $n_2 = 4000\text{ vòng/phút}$. Tìm gia tốc góc $\varepsilon$ và số vòng quay $N$ mà rôto quay được trong thời gian $t = t_2 - t_1 = 30\text{s}$.

*Trả lời :* $\varepsilon = 3\pi\text{ rad/s}^2 \, ; \ N = 1325\text{ vòng}$.

---

**7-2.** Một trục máy đang quay với tốc độ $n = 1200\text{ vòng/phút}$ thì bị hãm lại. Sau đó trục quay chậm dần đều và quay được $80\text{ vòng}$ thì dừng hẳn. Tìm thời gian hãm.

*Trả lời :* $t = 8\text{s}$.

---

**7-3.** Một rôto quay nhanh dần đều từ trạng thái nghỉ, khi đạt một vận tốc góc nào đó thì quay chậm dần với cùng trị số gia tốc góc rồi dừng lại. Biết thời gian tổng cộng là $T$ giây và số vòng quay tương ứng là $N$ vòng. Tìm vận tốc góc cực đại của rôto.

*Trả lời :* $\omega_{\max} = \dfrac{4\pi N}{T} \, .$

---

**7-4.** Vật quay quanh trục cố định với gia tốc góc $\overline{\varepsilon} = -2,5\overline{\omega}$ ; trong đó : $\overline{\omega}$ ($\text{rad/s}$) là vận tốc góc của vật. Lúc $t = 0$ vật có vận tốc góc $n_0 = 360\text{ vòng/phút}$.

Tìm :

a) Số vòng $N$ mà vật quay được đến lúc dừng ?

b) Thời gian để vật dừng lại ?

c) Thời gian để vận tốc góc giảm $1\%$ so với lúc đầu ?

*Trả lời :* $N = 2,4\text{ vòng} \, ; \ t = \infty \, ; \ t = 1,842\text{s}$.

---

**7-5.** Quả cầu $A$ treo ở đầu sợi dây dài $l = 398\text{cm}$, dao động trong mặt phẳng thẳng đứng theo luật :

$$\overline{\omega} = \frac{\pi}{8}\sin\frac{\pi}{2}t, \quad (\varphi : \text{rad} \, ; \ t : \text{s}).$$

[Đính chính bản in: Phương trình đầu đề in là $\overline{\omega} = \frac{\pi}{8}\sin\frac{\pi}{2}t$ nhưng đơn vị ghi $(\varphi : \text{rad} ; t : \text{s})$ và đáp số ứng với quy luật góc quay $\overline{\varphi} = \frac{\pi}{8}\sin\frac{\pi}{2}t$.]

Tìm : a) Thời điểm đầu tiên từ khi bắt đầu chuyển động để gia tốc pháp của quả cầu bằng không.

b) Thời điểm đầu tiên để gia tốc tiếp bằng không.

c) Gia tốc toàn phần lúc $t = 2\text{s}$.

*Trả lời :* $t = 1\text{s} \, ; \ t = 2\text{s} \, ; \ a = 151,24\text{ cm/s}^2$.

---

**7-6.** Một vật quay quanh trục cố định theo luật :

$$\varphi = \sigma t + \frac{1}{\gamma}(e^{-\gamma t} - 1),$$

trong đó : $\sigma$ và $\gamma$ là những hệ số không đổi.

Tìm a) Vận tốc góc, gia tốc góc của vật và tính chất chuyển động.

b) Giới hạn của vận tốc góc, gia tốc góc của vật và vận tốc, gia tốc điểm $M$ cách trục quay một khoảng $r$.

*Trả lời :* a) $\overline{\omega} = \sigma - e^{-\gamma t} \, ; \ \overline{\varepsilon} = \gamma e^{-\gamma t}$ : chuyển động quay là nhanh dần cho đến lúc $\sigma \leqslant e^{-\gamma t}$

[Đính chính bản in: Với $\gamma > 0$, khi $\sigma \leqslant e^{-\gamma t}$ thì $\overline{\omega}.\overline{\varepsilon} \leqslant 0$ (chuyển động chậm dần cho đến lúc $e^{-\gamma t} = \sigma$ rồi nhanh dần khi $\sigma > e^{-\gamma t}$); kết luận nhanh dần khi $\sigma \leqslant e^{-\gamma t}$ chỉ đúng nếu $\gamma < 0$.]

b) $\lim\limits_{t \to \infty} \overline{\omega} = \sigma, \ \lim\limits_{t \to \infty} \overline{\varepsilon} = 0$. Lúc đó $v_M = \sigma r \, ; \ a_M^n = \sigma^2 r \, ; \ a_M^t = 0$.

---

**7-7.** Một vật quay nhanh dần đều từ trạng thái nghỉ. Lúc $t = 1\text{s}$ điểm cách trục quay một khoảng $R_1 = 2\text{m}$ có gia tốc $a = 2\sqrt{2}\text{ m/s}^2$. Tìm gia tốc của điểm cách trục quay một khoảng $R = 4\text{m}$ lúc $t = 2\text{s}$.

*Trả lời :* $a^t = 4\text{ m/s}^2 \, ; \ a^n = 16\text{ m/s}^2 \, ; \ a = 4\sqrt{17}\text{ m/s}^2$.

---

**7-8.** Vectơ gia tốc của một điểm trên vành vô lăng làm với bán kính một góc $60^\circ$, gia tốc tiếp của điểm đó ở thời điểm khảo sát là $a^t = 10\sqrt{3}\text{ m/s}^2$. Tìm gia tốc pháp của điểm cách trục quay một khoảng $r = 0,5\text{m}$. Bán kính vô lăng là $R = 1\text{m}$ (H. 7-8).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_8.svg" alt="Hình 7-8" class="figure-img" /><p class="figure-caption">Hình 7-8</p></div>

*Trả lời :* $a^n = 5\text{ m/s}^2$.

---

**7-9.** Trục có bán kính $R = 10\text{cm}$ chuyển động được là do vật $P$ rơi xuống theo luật :

$$x = 100t^2, \quad (x : \text{cm} \, ; \ t : \text{s}).$$

Tìm vận tốc góc, gia tốc góc của trục và gia tốc toàn phần của 1 điểm nằm trên vành trục (H. 7-9).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_9.svg" alt="Hình 7-9" class="figure-img" /><p class="figure-caption">Hình 7-9</p></div>

*Trả lời :*

$$\omega = 20t\text{ rad/s} \, ; \quad \varepsilon = 20\text{ rad/s}^2 \, ; \quad a = 20\sqrt{1 + 100t^4}\text{ cm/s}^2.$$

---

### 7.4.2. Truyền chuyển động quay quanh các trục cố định

**7-10.** Ba bánh răng ăn khớp nhau (H. 7-10). Bán kính các bánh $r_1 = 20\text{cm} \, ; \ r_2 = 12\text{cm} \, ; \ r_3 = 15\text{cm}$. Bánh đầu quay với vận tốc góc $n_1 = 90\text{ vòng/phút}$. Tìm vận tốc góc bánh thứ ba.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_10.svg" alt="Hình 7-10" class="figure-img" /><p class="figure-caption">Hình 7-10</p></div>

*Trả lời :* $n_3 = 120\text{ vòng/phút}$ cùng chiều với bánh thứ nhất.

---

**7-11.** Để nhận được sự thay đổi vận tốc một cách chu kì, người ta dùng 2 bánh răng êlip bằng nhau để truyền chuyển động. Các trục đi qua tiêu cự của êlip. Trục $O_1$ quay đều với tốc độ $270\text{ vòng/phút}$. Khoảng cách $O_1O_2 = 50\text{cm}$, các bán trục của êlip là $25\text{cm}$ và $15\text{cm}$. Tìm vận tốc góc cực đại và cực tiểu của trục $O_2$ (H. 7-11). Điểm tiếp xúc giữa hai êlip luôn luôn trên đường thẳng $O_1O_2$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_11.svg" alt="Hình 7-11" class="figure-img" /><p class="figure-caption">Hình 7-11</p></div>

*Trả lời :* $\omega_{\max} = 81\pi\text{ rad/s} \, ; \quad \omega_{\min} = \pi\text{ rad/s}$.

---

**7-12.** Bánh răng côn $O_1$ có bán kính $r_1 = 10\text{cm}$ được dẫn động từ trạng thái tĩnh nhờ bánh răng côn $O_2$ có bán kính $r_2 = 15\text{cm}$. Hỏi sau bao lâu bánh $O_1$ đạt vận tốc góc $144\pi\text{ rad/s}$, nếu bánh $O_2$ quay nhanh dần đều với gia tốc góc $4\pi\text{ rad/s}^2$ (H. 7-12).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_12.svg" alt="Hình 7-12" class="figure-img" /><p class="figure-caption">Hình 7-12</p></div>

*Trả lời :* $t = 24\text{s}$.

---

**7-13.** Cơ cấu truyền động bằng ma sát (H. 7-13). Bán kính bánh 1 là $\rho$, các bán kính hình nón cụt 2 là $r$ và $R$, tiếp điểm $M$ cách đáy nhỏ của nón cụt một khoảng $s$, chiều cao của nón cụt là $l$. Hai trục quay trong cùng mặt phẳng. Tìm tỉ số truyền giữa 2 trục.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_13.svg" alt="Hình 7-13" class="figure-img" /><p class="figure-caption">Hình 7-13</p></div>

*Trả lời :*

$$i_{12} = \frac{\omega_1}{\omega_2} = \frac{rl + s(R - r)}{\rho l}$$

---

**7-14.** Cơ cấu như hình 7-14. Thanh 1 chuyển động theo luật $y(t) = A\sin kt$, bán kính các bánh là $r_2$, $r_3$ và $r_4$. Bánh 2 gắn cứng với bánh 3. Kim gắn cứng với bánh 4. Tìm vận tốc góc và gia tốc góc của kim.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_14.svg" alt="Hình 7-14" class="figure-img" /><p class="figure-caption">Hình 7-14</p></div>

*Trả lời :*

$$\omega_4 = \frac{r_3}{r_2 r_4}Ak\cos kt \, ; \quad \varepsilon_4 = -\frac{r_3}{r_2 r_4}Ak^2\sin kt$$

---

**7-15.** Cơ cấu như hình 7-15. Vật 1 chuyển động theo luật :

$$x = 2 + 70t^2 \quad (x : \text{cm} \, ; \ t : \text{s}).$$

Các bánh có bán kính : $r_2 = 30\text{cm} \, ; \ R_2 = 50\text{cm} \, ; \ R_3 = 60\text{cm}$. Tìm vận tốc góc, gia tốc góc của bánh 3 và vận tốc, gia tốc điểm $M$ cách trục quay một khoảng $r_3 = 40\text{cm}$ lúc vật 1 di chuyển được một đoạn bằng $40\text{cm}$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_7_15.svg" alt="Hình 7-15" class="figure-img" /><p class="figure-caption">Hình 7-15</p></div>

*Trả lời :*

$$\begin{aligned}
\omega_3 &= 2,94\text{ rad/s} \, ; \quad \varepsilon_3 = 3,84\text{ rad/s}^2 \, ; \\
v &= 118\text{ cm/s} \, ; \quad a = 379\text{ cm/s}^2.
\end{aligned}$$
