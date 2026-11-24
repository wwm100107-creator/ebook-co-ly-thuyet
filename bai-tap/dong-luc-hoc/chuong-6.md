---
title: "Bài Tập Động Lực Học - Chương 6: Động Lực Học Vật Rắn"
description: "Chuyển động vật rắn quay quanh trục cố định, áp lực động lực lên ổ trục, chuyển động song phẳng, hiệu ứng con quay, bài toán tổng hợp và 28 bài tập có đáp số"
layout: doc
---

# Chương 6: ĐỘNG LỰC HỌC VẬT RẮN

Trong chương này khảo sát động lực học vật rắn : bài toán một vật và bài toán hệ vật. Đối với bài toán một vật sử dụng các phương trình vi phân chuyển động có thể giải được cả hai bài toán của động lực học. Đối với bài toán hệ vật có thể đưa nó về từng bài toán một vật nhờ giải phóng liên kết hoặc sử dụng tổng hợp các kết quả lý thuyết ở các chương trước và do vậy bài toán đó còn được gọi là bài toán tổng hợp.

---

## 6.1. CHUYỂN ĐỘNG CỦA VẬT RẮN QUAY QUANH MỘT TRỤC CỐ ĐỊNH. ÁP LỰC ĐỘNG LỰC LÊN Ổ TRỤC

### 6.1.1. Cơ sở lý thuyết

**a) Phương trình chuyển động của vật rắn quay quanh một trục cố định**

Chọn hệ trục $Oxyz$ gắn liền với vật, trong đó trục $Oz$ trùng với trục quay (H. 6–1), ta có :

$$\begin{cases}
\sum X_k^e + X_A + X_B + M x_C \omega^2 + M y_C \overline{\varepsilon} = 0, \\
\sum Y_k^e + Y_A + Y_B + M y_C \omega^2 - M x_C \overline{\varepsilon} = 0, \\
\sum Z_k^e + Z_A = 0, \\
\sum \overline{m}_x(\vec{F}_k^e) + Y_A a - Y_B b - J_{yz}\omega^2 + J_{xz}\overline{\varepsilon} = 0, \\
\sum \overline{m}_y(\vec{F}_k^e) - X_A a + X_B b + J_{xz}\omega^2 + J_{yz}\varepsilon = 0, \\
\sum \overline{m}_z(\vec{F}_k^e) - J_z\overline{\varepsilon} = 0,
\end{cases} \tag{6–1}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_1.svg" alt="Hình 6-1" class="figure-img" />
  <p class="figure-caption">Hình 6-1</p>
</div>

trong đó các lực $\vec{F}_k^e(X_k^e, Y_k^e, Z_k^e)$ là các ngoại lực tác dụng lên vật rắn, $\vec{R}_A(X_A, Y_A, Z_A)$ ; $\vec{R}_B(X_B, Y_B)$ là các phản lực tại ổ đỡ $A$ và $B$ ; $\overline{\omega}, \overline{\varepsilon}$ – vận tốc góc và gia tốc góc của vật quay ; $x_C, y_C$ các toạ độ khối tâm $C$ của vật ; $J_{yz}, J_{zx}$ – các mômen quán tính tích của vật ; $J_z$ – mômen quán tính của vật đối với trục quay. Vì hệ trục toạ độ gắn vào vật quay nên các toạ độ khối tâm của vật, các momen quán tính tích và momen quán tính của vật đối với trục quay là các đại lượng không đổi, $OA = a$, $OB = b$.

Phương trình cuối cùng không chứa các phản lực trục quay được gọi là phương trình vi phân chuyển động của vật quay, khi tích phân chúng sẽ nhận được biểu thức của vận tốc góc (hàm theo $t$) và phương trình chuyển động của vật quay.

Năm phương trình còn lại cho phép xác định các thành phần phản lực tại các ổ trục $A$ và $B$, chúng phụ thuộc không những vào ngoại lực tác dụng mà còn vào các yếu tố động học $\overline{\omega}$ và $\overline{\varepsilon}$, được tính từ phương trình cuối.

**b) Phương trình xác định phản lực tĩnh và phản lực động lực**

$\alpha$) Phương trình xác định phản lực tĩnh

$$\begin{cases}
\sum X_k^e + X_A^t + X_B^t = 0 \\
\sum Y_k^e + Y_A^t + Y_B^t = 0, \\
\sum Z_k^e + Z_A^t = 0, \\
\sum \overline{m}_x(\vec{F}_k^e) + Y_A^t a - Y_B^t b = 0, \\
\sum \overline{m}_y(\vec{F}_k^e) - X_A^t a + X_B^t b = 0
\end{cases} \tag{6–2}$$

$\beta$) Phương trình xác định phản lực động lực

$$\begin{cases}
X_A^{\text{đ}} + X_B^{\text{đ}} + M x_C \omega^2 + M y_C \overline{\varepsilon} = 0, \\
Y_A^{\text{đ}} + Y_B^{\text{đ}} + M y_C \omega^2 - M x_C \overline{\varepsilon} = 0, \\
Z_A^{\text{đ}} = 0, \\
a Y_A^{\text{đ}} - b Y_B^{\text{đ}} - J_{yz}\omega^2 + J_{zx}\overline{\varepsilon} = 0, \\
-a X_A^{\text{đ}} + b X_B^{\text{đ}} + J_{zx}\omega^2 + J_{yz}\overline{\varepsilon} = 0.
\end{cases} \tag{6–3}$$

**c) Trường hợp trục quay mất cân bằng tĩnh. Vật quay đều với vận tốc góc $\omega$ (H. 6–2)**

Nếu trục quay là trục quán tính chính tại $O$ và không đi qua khối tâm $C$. Ta có $J_{zx} = J_{zy} = 0$, và nếu chọn hệ trục toạ độ như hình vẽ : $x_C = e\cos\alpha$, $y_C = e\sin\alpha$, thì từ hệ phương trình xác định phản lực động lực (6–3) ta nhận được :

$$\begin{cases}
X_A^{\text{đ}} = \dfrac{-mb\omega^2 e\cos\alpha}{a + b} \, ; \\[8pt]
Y_A^{\text{đ}} = -\dfrac{mb\omega^2 e\sin\alpha}{a + b}, \\[8pt]
X_B^{\text{đ}} = -\dfrac{ma\omega^2 e\cos\alpha}{a + b} \, ; \\[8pt]
Y_B^{\text{đ}} = -\dfrac{ma\omega^2 e\sin\alpha}{a + b}.
\end{cases} \tag{6–4}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_2.svg" alt="Hình 6-2" class="figure-img" />
  <p class="figure-caption">Hình 6-2</p>
</div>

**d) Trường hợp trục quay mất cân bằng động. Vật quay đều với vận tốc góc $\omega$ (H. 6–3)**

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_3.svg" alt="Hình 6-3" class="figure-img" />
  <p class="figure-caption">Hình 6-3</p>
</div>

Nếu trục quay đi qua khối tâm $C$ nhưng không phải là trục quán tính chính tại $C$, thì khi chọn hệ trục gốc tại $C$, ta có :

$$x_C = y_C = 0 \, ; \quad J_{yz} \neq 0 \, ; \quad J_{zx} \neq 0.$$

Các phản lực động lực được tính từ các phương trình (6–3) sẽ bằng

$$\begin{cases}
X_A^{\text{đ}} = -X_B^{\text{đ}} = \dfrac{J_{zx}}{a + b}\omega^2, \\[8pt]
Y_A^{\text{đ}} = -Y_B^{\text{đ}} = \dfrac{J_{yz}}{a + b}\omega^2 \, ;
\end{cases} \tag{6–5}$$

Chúng tạo thành một ngẫu lực.

### 6.1.2. Hướng dẫn áp dụng

Ở đây chúng ta chỉ xét bài toán xác định phản lực (bài toán xác định chuyển động của vật quay quanh một trục cố định đã được đề cập đến trong chương II §2–3), nó được tiến hành theo các bước sau :

– Chọn hệ trục toạ độ $Oxyz$ gắn chặt với vật quay, trong đó trục $Oz$ trùng với trục quay, còn một trong hai trục còn lại cố gắng chọn sao cho là trục quán tính chính tại gốc toạ độ. Nếu trọng tâm $C$ của vật nằm trên trục quay thì gốc toạ độ $O$ được chọn trùng với $C$.

– Đặt các ngoại lực tác dụng lên vật nếu cần tìm phản lực toàn phần thì giải hệ phương trình (6–1). Nếu chỉ cần xác định riêng rẽ phản lực tĩnh và phản lực động lực thì giải tương ứng các hệ phương trình (6–2) và (6–3). Trong trường hợp trục quay chỉ mất cân bằng tĩnh thì sử dụng kết quả (6–4) còn nếu trục mất cân bằng động (6–5).

### 6.1.3. Bài giải mẫu

**Thí dụ 6–1.** Một trục máy hình trụ đồng chất khối lượng $m$ quay đều với vận tốc góc $\omega_0$ quanh một trục song song với đường trục tâm của trụ. Cho biết độ lệch tâm của trục máy bằng $e$. Xác định các phản lực tĩnh và phản lực động lực tại các ổ trục $A$ và $B$ (H. 6–4).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_4.svg" alt="Hình 6-4" class="figure-img" />
  <p class="figure-caption">Hình 6-4</p>
</div>

*Bài giải.* Vì trục quay là trục quán tính chính nên trục máy chỉ bị mất cân bằng tĩnh. Do đó các phản lực động lực theo (6–4) trong đó $\alpha = \dfrac{\pi}{2}$, bằng :

$$\begin{aligned}
&X_A^{\text{đ}} = 0, \quad X_B^{\text{đ}} = 0 \, ; \\
&Y_A^{\text{đ}} = Y_B^{\text{đ}} = \dfrac{1}{2}me\omega_0^2 \, ; \quad Z_A^{\text{đ}} = 0.
\end{aligned}$$

Còn các phản lực tĩnh dễ dàng tính được

$$\begin{aligned}
&X_A^t = X_B^t = 0 \, ; \quad Y_A^t = \dfrac{Pe}{2a} \, ; \\
&Y_B^t = -\dfrac{Pe}{2a} \, ; \quad Z_A^t = P,
\end{aligned}$$

trong đó $P = mg$.

---

**Thí dụ 6–2.** Đĩa tròn đồng chất $CD$ của tuabin hơi, có bán kính $20\text{ cm}$, khối lượng là $3{,}27\text{ kg}$ được gắn trên trục $AB$ tại $O$ với $AO = 50\text{ cm}$, $OB = 50\text{ cm}$. Trục $AB$ được coi là trục cứng nhẹ đi qua trọng tâm $O$ của đĩa nhưng nghiêng với mặt phẳng của đĩa một góc $\alpha = 0{,}02\text{ rad}$ (đó cũng là góc của trục đối xứng của đĩa và trục quay $AB$). Tuabin quay đều với tốc độ $n = 30.000\text{ v/phút}$. Tính áp lực động của trục $AB$ lên hai ổ đỡ (H. 6–5).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_5.svg" alt="Hình 6-5" class="figure-img" />
  <p class="figure-caption">Hình 6-5</p>
</div>

*Bài giải.* Trục quay đi qua trọng tâm của vật quay nhưng không phải là trục quán tính chính nên bị mất cân bằng động. Do đó các phản lực động lực được tính theo (6–5). Muốn vậy ta chọn hệ trục toạ độ có gốc tại $O$ và các trục được chọn như sau :

– trục $Oz$ trùng với trục quay.

– trục $Oy$ nằm trong mặt phẳng chứa trục $Oz$ và $Oz'$, và thẳng góc với trục $Oz$ ($Oz'$ là trục thẳng góc với mặt phẳng đĩa, nó là trục quán tính chính trung tâm).

– Trục $Ox$ thẳng góc với trục $Oz$ và $Oy$ nên cũng thẳng góc với trục $Oz'$ ; tức $Ox$ nằm trong mặt phẳng của đĩa đi qua khối tâm, nó cũng là trục quán tính chính trung tâm.

Đối với hệ trục toạ độ được chọn ta có : $J_{yz} \neq 0$, $J_{zx} = 0$.

Theo (6–5), các phản lực động lực bằng

$$\begin{aligned}
X_A^{\text{đ}} &= -X_B^{\text{đ}} = \dfrac{J_{zx}}{a + b}\omega^2 = 0 \, ; \\[6pt]
Y_A^{\text{đ}} &= -Y_B^{\text{đ}} = \dfrac{J_{yz}}{a + b}\omega^2.
\end{aligned}$$

Để tính $J_{yz}$ ta sử dụng công thức

$$J_{yz} = \dfrac{J_{z'} - J_{y'}}{2}\sin 2\alpha,$$

trong đó các trục $Ox'$, $Oy'$ được chọn như sau :

– Trục $Ox'$ trùng với trục $Ox$

– Trục $Oy'$ thẳng góc với trục $Oz'$ và $Ox$ nên cùng nằm trong mặt phẳng với các trục $Oz, Oz', Oy$. Do đó khi quay quanh $Ox$ ($Ox'$) theo chiều dương (tức ngược với chiều kim đồng hồ) một góc $\alpha$ thì $Oy'$ đến trùng với $Oy$ và $Oz'$ đến trùng với $Oz$ (H. 6–6). Các trục $Oz'$ và $Ox'$ là trục quán tính chính trung tâm nên trục $Oy'$ cũng là trục quán tính chính trung tâm. Ta có

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_6.svg" alt="Hình 6-6" class="figure-img" />
  <p class="figure-caption">Hình 6-6</p>
</div>

$$J_{y'} = \dfrac{mR^2}{4}, \quad J_{z'} = \dfrac{mR^2}{2} \, ;$$

Vậy :

$$J_{yz} = \left(\dfrac{mR^2}{2} - \dfrac{mR^2}{4}\right)\dfrac{\sin 2\alpha}{2} = \dfrac{mR^2}{8}\sin 2\alpha.$$

Khi thay số vào chúng ta nhận được kết quả cuối cùng :

$$X_A^{\text{đ}} = X_B^{\text{đ}} = 0 \, ; \quad Y_A^{\text{đ}} = -Y_B^{\text{đ}} = 8.063{,}8\text{ N}.$$

Như vậy các phản lực động tạo thành ngẫu lực thuận chiều quay của kim đồng hồ trong mặt phẳng $Oyz$.

---

**Thí dụ 6–3.** Một tấm đồng chất dạng hình tam giác vuông cân cạnh $a$ quay đều quanh trục thẳng đứng với vận tốc góc $\omega$. Tìm giá trị của vận tốc góc để phản lực tại ổ trục $B$ bằng không. Xem khoảng cách giữa hai ổ trục $A$ và $B$ bằng $a$ (H. 6–7).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_7.svg" alt="Hình 6-7" class="figure-img" />
  <p class="figure-caption">Hình 6-7</p>
</div>

*Bài giải.* Chọn hệ toạ độ gốc tại $B$ và các trục như sau : trục $B_z$ là trục quay, trục $B_y$ nằm trong mặt phẳng của tấm và thẳng góc với trục quay, trục $B_x$ – thẳng góc với mặt phẳng của tấm.

Như vậy trục $B_x$ là trục quán tính chính tại $B$ vì

$$J_{xz} = \sum m_k x_k z_k = 0 \, ; \quad J_{xy} = \sum m_k y_k x_k = 0.$$

Đầu tiên ta xác định các thành phần của phản lực tĩnh. Giả định các thành phần của phản lực tĩnh hướng theo chiều dương các trục toạ độ.

Phương trình xác định phản lực tĩnh (6–2) cho ta

$$\begin{aligned}
&X_A^t + X_B^t = 0 \, ; \quad Y_A^t + Y_B^t = 0 \, ; \quad Z_A^t - P = 0 \, ; \\
&-Y_A^t \cdot a - \dfrac{Pa}{3} = 0 \, ; \quad X_A^t \cdot a = 0.
\end{aligned}$$

Từ đó chúng ta có

$$X_A^t = X_B^t = 0 \, ; \quad Y_B^t = \dfrac{P}{3} \, ; \quad Y_A^t = -\dfrac{P}{3}.$$

Như vậy thành phần theo trục $B_y$ của phản lực tĩnh tại $A$ hướng theo chiều âm của trục $B_y$.

Bây giờ chuyển sang xác định các thành phần của phản lực động lực.

Giả định các thành phần của phản lực động hướng theo chiều dương các trục toạ độ. Khi viết các phương trình xác định các phản lực động lực (6–3) với chú ý

$$x_c = 0 \, ; \quad y_c = \dfrac{a}{3} \, ; \quad J_{zx} = 0,$$

ta có :

$$\begin{aligned}
&X_A^{\text{đ}} + X_B^{\text{đ}} = 0 \, ; \quad Z_B^{\text{đ}} = 0, \\
&Y_A^{\text{đ}} + Y_B^{\text{đ}} + M\dfrac{a}{3}\omega^2 = 0 \, ; \\
&-Y_A^{\text{đ}} \cdot a - J_{yz}\omega^2 = 0 \, ; \quad X_A^{\text{đ}} \cdot a = 0,
\end{aligned}$$

Từ đó :

$$\begin{aligned}
&X_A^{\text{đ}} = X_B^{\text{đ}} = 0 \, ; \quad Y_A^{\text{đ}} = -\dfrac{1}{a}J_{yz}\omega^2 \, ; \\
&Y_B^{\text{đ}} = -Y_A^{\text{đ}} - M\dfrac{a}{3}\omega^2 = \left(\dfrac{1}{a}J_{yz} - M\dfrac{a}{3}\right)\omega^2.
\end{aligned}$$

Điều kiện để phản lực tại $B$ bằng không là :

$$X_B = X_B^t + X_B^{\text{đ}} = 0 \, ; \quad Y_B = Y_B^t + Y_B^{\text{đ}} = 0.$$

Rõ ràng phương trình đầu được thoả mãn đồng nhất, còn để phương trình thứ hai được thoả mãn cần phải có :

$$\dfrac{P}{3} + \left(\dfrac{1}{a}J_{yz} - \dfrac{Ma}{3}\right)\omega^2 = 0.$$

Chú ý rằng :

$$\begin{aligned}
J_{yz} &= \sum m_k y_k z_k = \gamma \int_0^a z\,dz \int_0^z y\,dy \\
&= \dfrac{\gamma a^2}{2} \cdot \dfrac{a^2}{4} = \dfrac{Ma^2}{4},
\end{aligned}$$

trong đó $\gamma$ là khối lượng của một đơn vị diện tích của tấm.

Vậy để phản lực tại ổ trục $B$ bằng không, tấm cần quay đều với vận tốc góc $\omega$ thoả mãn hệ thức sau :

$$\begin{aligned}
&\dfrac{P}{3} + \left(\dfrac{1}{a}\dfrac{Ma^2}{4} - \dfrac{Ma}{3}\right)\omega^2 = 0, \\
&\text{tức : } \omega = 2\sqrt{\dfrac{g}{a}}.
\end{aligned}$$

---

## 6.2. CHUYỂN ĐỘNG SONG PHẲNG CỦA VẬT RẮN (TẤM PHẲNG)

### 6.2.1. Cơ sở lí thuyết

Phương trình vi phân chuyển động của tấm phẳng chuyển động song phẳng :

$$\begin{cases}
M\ddot{x}_c = \sum X_k^e, \\
M\ddot{y}_c = \sum Y_k^e, \\
J_{cz}\ddot{\varphi}_s = \sum \overline{m}_{cz}(\vec{F}_k^e).
\end{cases} \tag{6–6}$$

hoặc

$$\begin{cases}
M\ddot{s}_c = \sum \overline{F}_k^t \\[4pt]
M\dfrac{v_c^2}{\rho} = \sum F_k^n \\[6pt]
J_{cz}\ddot{\varphi}_s = \sum \overline{m}_{cz}(\vec{F}_k^e)
\end{cases} \tag{6–7}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_8.svg" alt="Hình 6-8" class="figure-img" />
  <p class="figure-caption">Hình 6-8</p>
</div>

trong đó $x_c, y_c$ là toạ độ khối tâm $C$ của tấm phẳng ; $\overline{s}_c, \vec{v}_c$ là toạ độ cong, vận tốc của khối tâm $C$, $\rho$ là bán kính cong của quỹ đạo khối tâm, $\varphi_s$ – góc định vị của tấm phẳng đối với hệ trục toạ độ tịnh tiến cùng với khối tâm ; $M$ là khối lượng của tấm ; $J_{cz}$ – mômen quán tính của tấm đối với trục thẳng góc với mặt phẳng của tấm qua khối tâm $C$ (H. 6–8).

### 6.2.2. Hướng dẫn áp dụng

Phương trình vi phân chuyển động của tấm chuyển động song phẳng được dùng để giải cả bài toán thứ nhất và thứ hai.

*a) Biết chuyển động song phẳng của tấm, hãy xác định vectơ chính và mômen chính các lực tác dụng lên vật và nhờ đó có thể xác định các phản lực.*

*b)* Cho biết các lực tác dụng lên vật, hãy xác định chuyển động song phẳng của vật.

Chú ý rằng khi sử dụng các phương trình vi phân chuyển động song phẳng giải được đồng thời cả bài toán thứ nhất và thứ hai của động lực học.

### 6.2.3. Bài giải mẫu

**Thí dụ 6–4.** Trục bị động của bánh xe ô tô chuyển động ngang và thẳng. Tác dụng lên trục một lực $\vec{F}$ nằm ngang. Bán kính quán tính của bánh xe đối với trục đi qua trọng tâm thẳng góc với mặt phẳng của nó bằng $\rho$. Hệ số ma sát trượt tĩnh giữa bánh xe và đất là $f$. Bánh xe có bán kính bằng $R$, trọng lượng là $P$ (Hình 6–9). Tìm điều kiện lực $\vec{F}$ cần thoả mãn để bánh xe lăn không trượt. Bỏ qua sức cản lăn.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_9.svg" alt="Hình 6-9" class="figure-img" />
  <p class="figure-caption">Hình 6-9</p>
</div>

*Bài giải.* Khảo sát chuyển động song phẳng của bánh xe.

Các loại lực tác dụng lên bánh xe gồm

– Trọng lực $\vec{P}$,

– Phản lực $\vec{N}$,

– Lực tác dụng nằm ngang $\vec{F}$,

– Lực ma sát $\vec{F}_{\text{ms}}$.

Chọn các trục toạ độ như hình 6–9.

Phương trình vi phân chuyển động của bánh xe theo (6–6) có dạng :

$$\dfrac{P}{g}\ddot{x}_c = F - F_{\text{ms}}, \tag{a}$$

$$\dfrac{P}{g}\ddot{y}_c = -P + N, \tag{b}$$

$$\dfrac{P}{g}\rho^2\ddot{\varphi} = -F_{\text{ms}} \cdot R, \tag{c}$$

Ta có ba phương trình với năm đại lượng chưa biết $\ddot{x}_c, \ddot{y}_c, \ddot{\varphi}$, $F_{\text{ms}}, N$. Ta cần tìm một số liên hệ giữa các đại lượng này.

Vì $y_c = R$, nên $\ddot{y}_c = 0$. $\quad$ (d)

Vì bánh xe lăn không trượt nên tâm vận tốc tức thời là điểm tiếp xúc giữa bánh xe và đường.

Từ đó : $v_c = R\omega$ hoặc $\dot{x}_c = -R\dot{\overline{\varphi}}$

Rút ra :

$$\ddot{x}_c = -R\ddot{\overline{\varphi}} \tag{e}$$

Giải các phương trình (a) (b) và (c) với sự chú ý đến (d) và (e) chúng ta nhận được :

$$N = P \quad \text{và} \quad F_{\text{ms}} = \dfrac{F\rho^2}{R^2 + \rho^2}$$

Điều kiện để bánh xe lăn không trượt là :

$$F_{\text{ms}} \le fN,$$

hay

$$\dfrac{F\rho^2}{R^2 + \rho^2} \le fP.$$

Vậy lực $F$ tác dụng lên trục phải thoả mãn điều kiện :

$$F \le fP \cdot \dfrac{R^2 + \rho^2}{\rho^2}.$$

---

**Thí dụ 6–5.** Một thanh $AB$ đồng chất có chiều dài $2a$ đặt trong mặt phẳng thẳng đứng, đầu mút $A$ tựa vào mặt tường nhẵn thẳng đứng, còn đầu mút $B$ trượt trên mặt nhẵn ngang. Giữ thanh đứng yên tạo với mặt phẳng ngang một góc $\varphi_0$ rồi thả ra cho nó chuyển động dưới tác dụng của trọng lực.

Xác định vận tốc góc và gia tốc theo góc nghiêng $\varphi$ của nó. Tính phản lực do tường và nền tác dụng lên thanh $AB$ tại $A$ và $B$ theo góc $\varphi$. Suy ra giá trị của $\varphi$ lúc đầu mút $A$ của thanh rời khỏi mặt tường (H. 6–10).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_10.svg" alt="Hình 6-10" class="figure-img" />
  <p class="figure-caption">Hình 6-10</p>
</div>

*Bài giải.* Khảo sát thanh $AB$ chuyển động song phẳng trong mặt phẳng thẳng đứng dưới tác dụng các ngoại lực : trọng lực $\vec{P}$, các phản lực $\vec{N}_A$ và $\vec{N}_B$.

Phương trình vi phân chuyển động song phẳng của thanh có dạng :

$$M\ddot{x}_c = N_A, \tag{a}$$

$$M\ddot{y}_c = N_B - P, \tag{b}$$

$$J_c\ddot{\varphi} = -N_B a\cos\varphi + N_A a\sin\varphi \tag{c}$$

Vì $x_c = a\cos\varphi \, ; \, y_c = a\sin\varphi$ nên

$$\begin{aligned}
\ddot{x}_c &= -a\sin\varphi\ddot{\varphi} - a\cos\varphi\dot{\varphi}^2, \\
\ddot{y}_c &= a\cos\varphi\ddot{\varphi} - a\sin\varphi\dot{\varphi}^2.
\end{aligned}$$

Vậy

$$\begin{aligned}
N_A &= -Ma(\sin\varphi\,\ddot{\varphi} + \cos\varphi\,\dot{\varphi}^2), \\
N_B &= P + Ma(\cos\varphi\,\ddot{\varphi} - \sin\varphi\,\dot{\varphi}^2)
\end{aligned} \tag{d}$$

Khi thay (d) vào (c) và chú ý rằng $J_c = \dfrac{Ma^2}{3}$, chúng ta có :

$$\overline{\varepsilon} = \ddot{\varphi} = -\dfrac{3}{4}\dfrac{g}{a}\cos\varphi \tag{e}$$

Bây giờ tích phân (e) với điều kiện đầu $\varphi(t_0) = \varphi_0 \, ; \, \dot{\varphi}(t_0) = 0$ :

$$\omega^2 = \dot{\varphi}^2 = -\dfrac{3}{2}\dfrac{g}{a}(\sin\varphi - \sin\varphi_0).$$

Khi đầu mút $A$ rời khỏi tường thì $N_A = 0$, tức là

$$\begin{aligned}
Ma\bigg[\sin\varphi\dfrac{3}{4}\dfrac{g}{a}\cos\varphi \\
&+ \dfrac{3}{2}\dfrac{g}{a}(\sin\varphi - \sin\varphi_0)\cos\varphi\bigg] = 0.
\end{aligned}$$

Vì $\cos\varphi \neq 0$ nên

$$3\sin\varphi - 2\sin\varphi_0 = 0.$$

Vậy đầu mút $A$ rời khỏi tường tại vị trí

$$\varphi = \operatorname{Arcsin}\left(\dfrac{2}{3}\sin\varphi_0\right).$$

Sau khi thanh rời khỏi tường, từ (a) ta nhận được :

$$\ddot{x}_c = 0 \, ; \quad \dot{x}_c = \text{const},$$

tức sau khi rời tường thành phần nằm ngang của vận tốc khối tâm $C$ của thanh không đổi, tức hình chiếu của khối tâm trên trục $x$ chuyển động đều.

---

**Thí dụ 6–6.** Thanh thẳng $AB$ đồng chất có chiều dài $2a$, khối lượng $m$, được treo nằm ngang nhờ hai dây thẳng đứng $AD$ và $BE$ như hình 6–11. Tìm lực căng của một dây treo tại thời điểm ngay khi dây kia bị đứt.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_11.svg" alt="Hình 6-11" class="figure-img" />
  <p class="figure-caption">Hình 6-11</p>
</div>

*Bài giải.* Giả thiết rằng sau khi một dây bị đứt dây kia vẫn căng, sự thay đổi phương của thanh $AB$, cũng như sự thay đổi khoảng cách từ trọng tâm của thanh đến dây không đứt là nhỏ và bỏ qua được.

Viết phương trình vi phân chuyển động (6–6) cho thanh $AB$ ta có :

$$M\ddot{x}_c = 0 \tag{a}$$

$$M\ddot{y}_c = T - P \tag{b}$$

$$J_c\ddot{\overline{\varphi}} = -Ta \tag{c}$$

trong đó :

$$J_c = \dfrac{Ma^2}{3}.$$

Dựa vào giả thiết nêu trên, chúng ta có :

$$y_c = a\overline{\varphi}, \quad \ddot{y}_c = a\ddot{\overline{\varphi}}.$$

Các phương trình (b) và (c) bây giờ có dạng :

$$Ma\ddot{\overline{\varphi}} = T - P \, ; \quad \dfrac{Ma^2}{3}\ddot{\overline{\varphi}} = -Ta.$$

Khi khử $\ddot{\overline{\varphi}}$ giữa các phương trình vừa nhận được và giải ra, ta có :

$$T = \dfrac{P}{4}.$$

---

## 6.3. HIỆU ỨNG CON QUAY

### 6.3.1. Cơ sở lý thuyết

**a) Định nghĩa.** Con quay là một vật rắn có trục đối xứng vật chất được gọi là trục đối xứng động lực và quay quanh trục đó với vận tốc góc lớn.

**b) Giả thiết cơ bản của lý thuyết gần đúng về chuyển động của con quay.** Giả thiết con quay quay quanh trục đối xứng động lực của mình với vận tốc góc quay riêng không đổi $\vec{\Omega}$ và cùng với trục này quay quanh một trục cố định qua điểm $O$ nằm trên trục đối xứng động lực với vận tốc góc quay theo $\vec{\omega}$ (bằng tổng các vectơ vận tốc góc tiến động và chương động), trong đó (H. 6–12).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_12.svg" alt="Hình 6-12" class="figure-img" />
  <p class="figure-caption">Hình 6-12</p>
</div>

$$\Omega \gg \omega$$

Gọi $\vec{\omega}_a$ là vận tốc góc tuyệt đối của con quay, ta có : $\vec{\omega}_a = \vec{\Omega} + \vec{\omega} \approx \vec{\Omega}$.

Như vậy : Có thể xem vận tốc góc tuyệt đối của con quay bằng vận tốc góc quay riêng và trục quay tức thời của con quay trùng với trục đối xứng động lực của nó.

**c) Phương trình cơ bản của con quay quay nhanh.** Dưới tác dụng của các ngoại lực $\vec{F}_k$ con quay quay nhanh theo phương trình.

$$J\vec{\omega} \wedge \vec{\Omega} = \sum \vec{m}_o(\vec{F}_k)$$

gọi là phương trình cơ bản của con quay quay nhanh, trong đó $J$ là mômen quán tính của con quay đối với trục đối xứng động lực của nó.

**d) Mômen con quay**, được ký hiệu $\vec{M}_{cq}$, là mômen chính của hệ lực quán tính của con quay đối với điểm cố định $O$. Dễ dàng nhận được.

$$\vec{M}_{cq} = -J\vec{\omega} \wedge \vec{\Omega} = J\vec{\Omega} \wedge \vec{\omega}$$

Chính mômen con quay gây nên áp lực động lực lên ổ đỡ mang trục quay đối xứng động lực của con quay và gây nên nhiều hiệu ứng rất quan trọng đối với kỹ thuật gọi là các hiệu ứng con quay.

Với giá trị rất lớn của vận tốc góc quay riêng $\Omega$, mômen con quay có giá trị rất lớn và có thể gây nên sự phá hỏng các ổ đỡ của trục quay con quay quay nhanh.

Đối với con quay tiến động đều : $\Omega = \text{const}$, $\omega = \text{const}$, $(\vec{\Omega}, \vec{\omega}) = \alpha = \text{const}$ ta có :

$$M_{cq} = J\omega\Omega\sin\alpha = \text{const}$$

**e) Hai bài toán cơ bản của lý thuyết gần đúng con quay**

Bài toán 1. Biết chuyển động con quay ($\vec{\omega}$), tìm mômen lực tác dụng lên con quay.

Bài toán 2. Biết lực tác dụng lên con quay ($\sum \vec{m}_o(\vec{F}_k)$), tìm chuyển động con quay ($\vec{\omega}$).

### 6.3.2. Hướng dẫn áp dụng

Những bài toán về hiệu ứng con quay thường được quan tâm đến các bài toán sau :

– Tìm phản lực động lực do hiệu ứng con quay gây nên.

– Tính bảo toàn phương của trục quay riêng của con quay quay theo quán tính.

### 6.3.3. Bài giải mẫu

**Thí dụ 6–7.** Một trục mang một cặp bánh xe tàu hoả có khối lượng $m = 1400\text{ kg}$, có bán kính quán tính đối với trục đối xứng động lực của nó là $\rho^2 = 0{,}55a^2$, trong đó $a = 75\text{ cm}$ là bán kính vành lăn của bánh xe. Đoàn tàu chạy với vận tốc $v = 20\text{ m/s}$ trên một cung đường vòng bán kính $R = 200\text{ m}$ nằm trong mặt phẳng ngang. Khoảng cách xuyên tâm giữa hai thanh ray là $l = 1{,}5\text{ m}$.

Tìm áp lực pháp tuyến của hai bánh xe lên hai mặt ray (H. 6–13).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_13.svg" alt="Hình 6-13" class="figure-img" />
  <p class="figure-caption">Hình 6-13</p>
</div>

*Bài giải.* Khảo sát chuyển động của trục mang hai bánh xe, bỏ qua sự khác nhau trong chuyển động giữa hai bánh xe đó. Rõ ràng là chuyển động quay riêng quanh trục đối xứng động lực của nó có tốc độ lớn hơn nhiều so với tốc độ góc của chuyển động quay theo là chuyển động của chính trục đó quay quanh trục quay cố định thẳng đứng qua tâm của đường vòng. Cụ thể là :

$$\Omega = \dfrac{v}{a} = 26\dfrac{2}{3}\text{ s}^{-1}, \quad \omega = \dfrac{v}{R} = \dfrac{1}{10}\text{ s}^{-1}.$$

Do đó ta có thể xem vật khảo sát như là một con quay quay nhanh, chuyển động tiến động đều.

Để tính áp lực động lực của các bánh xe lên hai mặt ray, áp dụng phương pháp tĩnh hình học – động lực ta viết các phương trình cân bằng cho hệ lực :

$$(\vec{P}, \vec{N}_1, \vec{N}_2, \vec{F}^{\text{qt}}, \vec{M}_o^{\text{qt}}),$$

trong đó $\vec{F}^{\text{qt}} = -m\vec{a}_c$, $\vec{M}_o^{\text{qt}} = \vec{M}_{cq} = -J(\vec{\omega} \wedge \vec{\Omega})$.

Bằng cách đó ta nhận được

$$\begin{aligned}
\sum Y &= -P + N_1 + N_2 = 0, \\
\sum \overline{m}_B(\vec{F}_k) &= M_{cq} + aF^{\text{qt}} + P\dfrac{l}{2} - N_1 l = 0,
\end{aligned}$$

trong đó :

$$\begin{aligned}
M_{cq} &= J\omega \cdot \Omega = \dfrac{m\rho^2 v^2}{aR}, \\[6pt]
F^{\text{qt}} &= ma_c = \dfrac{mv^2}{R}
\end{aligned}$$

Giải ra ta có kết quả :

$$N_{1,2} = \dfrac{mg}{2} \pm \dfrac{mav^2}{lR}\left(1 + \dfrac{\rho^2}{a^2}\right)$$

Thay giá trị bằng số ta có :

$$N_{1,2} = (700 \pm 222) \cdot 9{,}81\text{ N}$$

---

**Thí dụ 6–8.** Một tuabin quay nhanh đặt trên tàu thuỷ có trục quay song song với đường tim của con tàu. Tốc độ quay của tuabin là $n = 3000\text{ v/ph}$, khối lượng của rôto là $m = 3500\text{ kg}$ và bán kính quán tính của nó đối với trục quay là $\rho = 0{,}6\text{ m}$. Tàu cưỡi sóng nên bị chòng chành ngang với biên độ $\varphi_0 = 9^\circ$ và với chu kỳ $T = 15\text{ s}$ quanh trục nằm ngang vuông góc với trục rôto của tuabin. Tìm áp lực động lực của rôto lên ổ đỡ, do hiệu ứng con quay gây ra, biết rằng $AB = l = 2\text{ m}$. Bỏ qua ma sát (H. 6–14).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_14.svg" alt="Hình 6-14" class="figure-img" />
  <p class="figure-caption">Hình 6-14</p>
</div>

*Bài giải.* Khảo sát chuyển động của rôto, vận tốc góc quay riêng của nó là :

$$\Omega = \dfrac{\pi n}{30} = 100\pi\text{ s}^{-1}$$

Trong chuyển động tiến động con tàu dao động quanh trục $y$ theo luật

$$\varphi = \varphi_0\cos(kt + \alpha),$$

trong đó $\varphi_0 = 9^\circ = \dfrac{\pi}{20}$ ; $k = \dfrac{2\pi}{T} = \dfrac{2\pi}{15},$

tức là :

$$\varphi = \dfrac{\pi}{20}\cos\left(\dfrac{2\pi}{15}t + \alpha\right)$$

Từ đây suy ra vận tốc góc quay theo :

$$\omega = \dot{\varphi} = -\dfrac{\pi^2}{150}\sin\left(\dfrac{2\pi}{15}t + \alpha\right)$$

và

$$\omega_{\max} = \dfrac{\pi^2}{150} \approx \dfrac{1}{15}\text{ s}^{-1}.$$

Rõ ràng $\Omega \gg \omega_{\max}$ rất nhiều lần, vậy ta có thể áp dụng lý thuyết gần đúng của con quay để giải quyết bài toán.

Trước hết hãy xác định mômen con quay :

$$\vec{M}_{cq} = -J_z\vec{\omega} \wedge \vec{\Omega}$$

Trên hình vẽ ta thấy $\vec{\omega}$ nằm theo trục $z_1$, $\vec{\Omega}$ nằm theo trục $z$ nên $\vec{M}_{cq}$ phải nằm theo trục $y_1$. Ta tính được hình chiếu trên trục $y_1$ của mômen con quay bằng ;

$$M_{y1} = J_z(\omega_{z1}\Omega_z - \omega_z\Omega_{z1}),$$

trong đó :

$$\begin{aligned}
\omega_{z1} &= \dot{\varphi} = -\dfrac{\pi^2}{150}\sin\left(\dfrac{2\pi}{15}t + \alpha\right) \\
\omega_z &= 0 \\
\Omega_z &= \Omega = 100\pi\text{ s}^{-1}, \\
\Omega_{z1} &= 0.
\end{aligned}$$

Vậy $M_{y1} = -m\rho^2\omega_{z1}\Omega_z$ và $\vec{M}_{cq} = \vec{M}_{y1}.$

Điều đó có nghĩa là ngẫu lực quán tính do hiệu ứng con quay gây ra nằm trong mặt phẳng $zz_1$ và nó làm xuất hiện các áp lực động lực $\vec{N}_1, \vec{N}_2$ lên hai gối đỡ $A, B$ theo hướng trục $z_1$. Từ đó suy ra :

$$N_{1z1} = -N_{2z1} = -\dfrac{M_{y1}}{AB} = m\dfrac{\rho^2}{l}\omega_{z1}\Omega_z$$

Sau khi thay các trị số đã cho trong đề ra tính được

$$\begin{aligned}
N_1 = N_2 &= \dfrac{m\rho^2}{l}\left[\dfrac{\pi^2}{150}\sin\left(\dfrac{2\pi}{15}t + \alpha\right)\right] 100\pi \\
&= \dfrac{2}{3}\dfrac{m\rho^2}{l}\pi^3\sin\left(\dfrac{2\pi}{15}t + \alpha\right) \\
&= 12.936\sin\left(\dfrac{2\pi}{15}t + \alpha\right)
\end{aligned}$$

Như thế khi tàu chòng chành ngang thì các ổ đỡ tuabin phải chịu áp lực động lực thay đổi tuần hoàn với giá trị cực đại khá lớn.

---

**Thí dụ 6–9.** Một con quay cân bằng được đặt bằng giá treo Cácđăng ở một địa điểm thuộc bắc bán cầu có vĩ độ $\varphi$. Trục rôto được đặt nằm ngang trong mặt phẳng kinh tuyến tại địa điểm đó. Muốn cho trục rôto luôn luôn ở trong mặt phẳng kinh tuyến của địa phương (do quả đất quay) ta treo vào vành trong của giá treo và trên đường trục của rôto đối trọng $Q$, nằm cách tâm $O$ của con quay một đoạn bằng $a$. Tốc độ quay riêng $\Omega$ của rôto lớn gấp nhiều lần tốc độ quay riêng $\omega_1$ của quả đất, mômen quán tính của rôto đối với trục đối xứng động lực của nó bằng $J$. Bỏ qua ma sát và khối lượng của các vành giá treo. Tìm khối lượng cần thiết của đối trọng (H. 6–15).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_15.svg" alt="Hình 6-15" class="figure-img" />
  <p class="figure-caption">Hình 6-15</p>
</div>

*Bài giải.* Đầu tiên nhận xét rằng con quay quay nhanh và được treo cân bằng trong giá Cácđăng thì trục đối xứng động lực $O_z$ của nó giữ một hướng không đổi trong không gian cố định nếu ban đầu trục đó được giữ đứng yên (bảo toàn mômen động lượng).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_16.svg" alt="Hình 6-16" class="figure-img" />
  <p class="figure-caption">Hình 6-16</p>
</div>

Nếu tại một địa điểm của bắc bán cầu có vĩ độ $\varphi$ ta đặt trục rôto nằm trong mặt phẳng kinh tuyến theo phương nam – bắc ($N - B$) thì do mặt phẳng kinh tuyến quay quanh trục ($N - B$) với vận tốc $\omega_1$ (vận tốc góc của quả đất quay quanh trục $N - B$) nên khi đứng trên mặt kinh tuyến qua địa điểm đặt trục rôto ta sẽ thấy trục của con quay quay theo chiều ngược lại quanh trục $O_{z1}$ với vận tốc góc (H. 6–16)

$$\omega_2 = \omega_1\sin\varphi,$$

(hiện tượng này tương tự hiện tượng của con lắc Phucô).

Như vậy trục rôto quay nhanh quanh trục quay riêng với vận tốc góc $\Omega$ và trục lại đảo quanh trục $Oz_1$ với vận tốc góc $\omega \ll \Omega$.

Trong chuyển động đó sẽ xuất hiện mômen con quay.

$$\begin{aligned}
\vec{M}_{cq} &= -J(\vec{\omega}_2 \wedge \vec{\Omega}) \\
&\begin{cases}
\text{Phương vuông góc mặt phẳng } (\vec{\omega}_2, \vec{\Omega}), \\
\text{phương đông – tây, chiều hướng từ tây sang đông.} \\
\text{Giá trị } M_{cq} = J\omega_2\Omega = J\omega_1\sin\varphi \cdot \Omega
\end{cases}
\end{aligned}$$

Như đã biết mômen con quay là mômen chính của các lực quán tính của rôto, tức là mômen phản lực do rôto tác dụng lên các ổ đỡ. Vì vậy các ổ đỡ tác dụng lại lên trục rôto ngẫu lực có mômen cùng phương cùng giá trị nhưng ngược chiều với mômen con quay, chính mômen đó làm cho trục quay riêng của rôto không thể bảo toàn phương của nó. Để trục rôto bảo toàn phương cần đặt một đối trọng $Q$ triệt tiêu mômen ngẫu lực tác dụng lên rôto, tức lực $Q$ gây đối với điểm $O$ một mômen có cùng phương, cùng chiều và cùng giá trị với mômen con quay :

$$\vec{m}_o(\vec{Q}) = -J(\vec{\omega}_2 \wedge \vec{\Omega}).$$

Như vậy cần treo đối trọng $Q$ tại điểm $M$ ở bắc bán cầu trên trục nam – bắc và cách $O$ một đoạn :

$$a = \dfrac{J\omega_1\Omega\sin\varphi}{Q}$$

*Chú ý :* Cơ cấu vừa được xét là mô hình của địa bàn con quay để giữ phương ngang và hướng nam – bắc trên các máy bay và tàu đi biển.

---

## 6.4. BÀI TOÁN TỔNG HỢP

Trong phần này ta khảo sát bài toán thứ nhất và thứ hai của hệ các vật rắn hoặc bài toán của một vật rắn mà chuyển động của nó chuyển qua nhiều dạng chuyển động do hiện tượng mất (hoặc thêm) các liên kết. Để giải các bài toán trên lẽ dĩ nhiên có thể sử dụng các phương pháp và kết quả đã nêu cho bài toán một vật rắn nhờ tiên đề giải phóng liên kết hoặc viết phương trình chuyển động cho từng giai đoạn (điều kiện cuối của giai đoạn trước là điều kiện đầu của giai đoạn tiếp theo). Tuy nhiên trong nhiều trường hợp có thể giải các loại bài toán này một cách nhanh gọn nhờ sử dụng tổng hợp các định lý được thiết lập trong các chương trước đây. Vì vậy các bài toán này còn được gọi là các bài toán tổng hợp.

**Thí dụ 6–10.** Một cơ cấu hành tinh được đặt trong mặt phẳng nằm ngang chuyển động từ trạng thái đứng yên do chịu tác dụng của một ngẫu lực phát động có mômen không đổi bằng $M$ đặt vào tay quay $OA$. Cho biết bánh răng 2 cố định có bán kính $r_2$, bánh răng 1 là một đĩa tròn đồng chất có bán kính $r_1$ và khối lượng $m_1$, chịu tác dụng của một ngẫu lực cản có mômen $M_1$ không đổi. Tay quay được coi là một thanh đồng chất, có khối lượng là $m$. Bỏ qua ma sát (H. 6–17).

1. Xác định vận tốc góc tay quay $OA$ hàm theo góc quay của nó.

2. Tìm phản lực tại $A$ và lực ăn khớp giữa hai bánh răng, biết rằng góc ăn khớp giữa chúng là $\alpha$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_17.svg" alt="Hình 6-17" class="figure-img" />
  <p class="figure-caption">Hình 6-17</p>
</div>

*Bài giải.*

1. Tìm biểu thức vận tốc góc $\omega = \omega(\varphi)$.

Khảo sát cơ hệ gồm ;

– Tay quay $OA$ quay quanh trục $O$ cố định (vuông góc với mặt phẳng hình vẽ).

Bánh răng 1 chuyển động song phẳng trong mặt phẳng hình vẽ.

Các lực tác dụng lên cơ hệ có sinh công trong chuyển động là hai ngẫu lực có mômen $M$ và $M_1$ không đổi, có thể tính được công hữu hạn của chúng.

Để tìm biểu thức $\omega = \omega(\varphi)$ ta áp dụng định lý biến thiên động năng dạng hữu hạn :

$$T - T_0 = \sum A_k \tag{a}$$

Ban đầu hệ đứng yên nên $T_0 = 0$.

Bây giờ ta tính động năng của hệ ở thời điểm bất kỳ :

$$T = T_{OA} + T_1 \tag{b}$$

Gọi $\omega$ là vận tốc góc của tay quay $OA$ ta có :

$$T_{OA} = J \cdot \dfrac{\omega^2}{2} \, ; \quad \text{trong đó } J = \dfrac{m(r_1 + r_2)^2}{3}.$$

tức là :

$$T_{OA} = \dfrac{m(r_1 + r_2)^2}{3} \cdot \dfrac{\omega^2}{2}.$$

Gọi $v_A$, là vận tốc điểm $A$, $\omega_1$ là vận tốc góc bánh 1, ta có :

$$T_1 = \dfrac{J_A}{2}\omega_1^2 + \dfrac{m_1 v_A^2}{2},$$

trong đó $J_A = \dfrac{m_1 r_1^2}{2}$ nên :

$$T_1 = \dfrac{m_1 r_1^2}{2} \cdot \dfrac{\omega_1^2}{2} + \dfrac{m_1 v_A^2}{2}.$$

Vậy biểu thức động năng của toàn hệ sẽ là :

$$T = \dfrac{m(r_1 + r_2)^2}{3} \cdot \dfrac{\omega^2}{2} + \dfrac{m_1 r_1^2}{2} \cdot \dfrac{\omega_1^2}{2} + \dfrac{m_1 v_A^2}{2}.$$

Ta có thể tính được dễ dàng ;

$$\omega_1 = \dfrac{r_1 + r_2}{r_1}\omega \, ; \quad v_A = (r_1 + r_2)\omega.$$

Vì vậy biểu thức động năng toàn hệ có thể viết trong dạng sau :

$$T = \dfrac{1}{6}(2m + 9m_1)(r_1 + r_2)^2\dfrac{\omega^2}{2} \tag{b}$$

Tiếp theo ta tính biểu thức tổng công các lực $\sum A$ theo góc quay của tay quay $OA$. Trong chuyển động của cơ hệ chỉ có hai ngẫu lực có các mômen $M$ và $M_1$ sinh công. Ta tính công của hai ngẫu lực đó :

$$\sum A_k = M\varphi - M_1\varphi_1 \tag{c}$$

trong đó $\varphi_1$ là góc quay được của bánh 1 khi tay quay $OA$ quay được một góc $\varphi$. Từ quan hệ động học vừa được tìm trên, ta suy ra :

$$\varphi_1 = \dfrac{r_1 + r_2}{r_2}\varphi,$$

và thay nó vào (c) ta có :

$$\sum A_k = \left(M - M_1\dfrac{r_1 + r_2}{2}\right)\varphi \, ; \tag{c'}$$

Thay (b), (c) vào (a) ta được :

$$\begin{aligned}
&\dfrac{1}{6}(2m + 9m_1)(r_1 + r_2)^2\dfrac{\omega^2}{2} \\
&\quad = \left(M - M_1\dfrac{r_1 + r_2}{2}\right)\varphi
\end{aligned} \tag{d}$$

Rút ra :

$$\omega = \sqrt{\dfrac{12[M r_2 - M_1(r_1 + r_2)]\varphi}{r_2(r_1 + r_2)^2(2m + 9m_1)}} \tag{e}$$

Từ đó dễ dàng tìm được

$$\begin{aligned}
\overline{\varepsilon} &= \dfrac{d\overline{\omega}}{dt} = \dfrac{d\overline{\omega}}{d\varphi}\overline{\omega} \\
&= \dfrac{6[M r_2 - M_1(r_1 + r_2)]}{r_1(r_1 + r_2)^2(2m + 9m_1)}
\end{aligned} \tag{g}$$

Nhận xét rằng kết quả này cũng có thể tìm được bằng cách áp dụng trực tiếp định lý biến thiên động năng dạng đạo hàm (2–51).

2. Tìm lực ăn khớp $\vec{S}$ và phản lực $\vec{R}_A$ (H. 6–18).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_18.svg" alt="Hình 6-18" class="figure-img" />
  <p class="figure-caption">Hình 6-18</p>
</div>

Khảo sát bánh răng 1 chuyển động song phẳng (trong mặt phẳng ngang) dưới tác dụng của hệ lực

$$(\vec{S}, \vec{R}_A, \vec{M}_1),$$

trong đó $\vec{S}$ là lực ăn khớp tại $I$ ; $\vec{R}_A$ – phản lực tại $A$ do tay quay tác dụng lên bánh răng 1.

Nhận xét rằng quy luật chuyển động của bánh răng 1 đã biết : gia tốc khối tâm $A$ của bánh răng 1 gồm hai thành phần : $\vec{a}_A^t$ có phương, chiều cùng với $\vec{v}_A$ và có giá trị $a_A^t = (r_1 + r_2)\varepsilon_1$, còn $\vec{a}_A^n$ có phương chiều hướng từ $A$ đến $O$ và có giá trị $a_A^n = (r_1 + r_2)\omega^2$.

Ngoài ra, từ quan hệ động học :

$$\overline{\omega}_1 = \dfrac{r_1 + r_2}{r_1}\overline{\omega},$$

suy ra :

$$\overline{\varepsilon}_1 = \dfrac{r_1 + r_2}{r_1}\overline{\varepsilon}.$$

Do đó việc tìm lực ăn khớp $\vec{S}$ và phản lực $\vec{R}_A$ là bài toán thứ nhất của động lực học (đối với bánh răng 1). Muốn thế ta viết phương trình vi phân chuyển động đối với vật song phẳng bánh răng 1 trong dạng (6–7) (do cơ cấu đặt trong mặt phẳng ngang nên ta chỉ lập phương trình vi phân chuyển động trong mặt phẳng của chuyển động song phẳng) :

$$\begin{aligned}
m_1\overline{a}_A^t &= -S\cos\alpha + \overline{R}_A^t, \\
m_1 a_A^n &= -S\sin\alpha + R_A^n, \\
J_A\overline{\varepsilon}_1 &= S r_1\cos\alpha - M_1,
\end{aligned}$$

trong đó :

$$J_A = \dfrac{m_1 r_1^2}{2}.$$

Từ đó dễ dàng nhận được

$$\begin{aligned}
S &= \left[\dfrac{m_1 r_1(r_1 + r_2)}{2}\varepsilon + M_1\right]\dfrac{1}{r_1\cos\alpha} \, ; \\[6pt]
R_A^t &= m_1(r_1 + r_2)\left(2 + \dfrac{r_2}{r_1}\right)\varepsilon + \dfrac{M_1}{r_1} \, ; \\[6pt]
R_A^n &= m_1(r_1 + r_2)\left(\omega^2 + \dfrac{\varepsilon}{2}\operatorname{tg}\alpha\right) + \dfrac{M_1}{r_1}\operatorname{tg}\alpha,
\end{aligned}$$

trong đó $\varepsilon, \omega$ được tính theo các biểu thức (e) và (g).

---

**Thí dụ 6–11.** Một tấm nặng có khối lượng $m$, được đặt nằm ngang trên hai con lăn, mỗi con lăn là một khối trụ tròn xoay đồng chất có bán kính $r$ và khối lượng $m_1$. Tác dụng vào tấm một lực $\vec{F}$ nằm ngang có cường độ không đổi. Hệ số ma sát lăn giữa con lăn với mặt nền là $k$. Các con lăn không trượt trên nền và tấm nặng cũng không trượt đối với các con lăn. Tìm gia tốc của tấm và tìm lực ma sát trượt tổng cộng do mặt nền tác dụng lên các con lăn. Bỏ qua ma sát lăn giữa tấm và các con lăn.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_19.svg" alt="Hình 6-19" class="figure-img" />
  <p class="figure-caption">Hình 6-19</p>
</div>

*Bài giải.*

1. *Tìm gia tốc của tấm.* Khảo sát cơ hệ gồm tấm và hai con lăn. Tấm chuyển động tịnh tiến, các con lăn chuyển động song phẳng (H. 6–19).

Các lực tác dụng lên cơ hệ sinh công gồm có lực $\vec{F}$, các ngẫu lực ma sát lăn do nền tác dụng lên các con lăn, chúng có mômen lần lượt là $m_1^l = kN_1$, $m_2^l = kN_2$.

Để tìm gia tốc của tấm ta có thể áp dụng định lý biến thiên động năng dạng đạo hàm :

$$\dfrac{dT}{dt} = \sum W_k,$$

trong đó : $T$ là động năng của hệ gồm động năng của tấm và hai con lăn :

$$T = \dfrac{1}{2}mv^2 + 2\left(\dfrac{m_1 v_1^2}{2} + \dfrac{J_1\omega_1^2}{2}\right).$$

Vì không có hiện tượng trượt giữa con lăn và nền, giữa con lăn và tấm (tâm vận tốc của con lăn là tiếp điểm giữa con lăn và nền, vận tốc của tiếp điểm thuộc con lăn và thuộc tấm có giá trị bằng nhau), nên :

$$v_1 = \dfrac{1}{2}v \, ; \quad \omega_1 = \dfrac{v_1}{r} = \dfrac{v}{2r}$$

trong đó $v$ là vận tốc tấm, $v_1$ – vận tốc của tâm con lăn, $\omega_1$ – vận tốc góc của con lăn.

Do đó :

$$T = \dfrac{4m + 3m_1}{4}\dfrac{v^2}{2}.$$

Bây giờ tính tổng công suất của lực $\vec{F}$ và các ngẫu lực ma sát lăn.

$$\begin{aligned}
\sum W_k &= F \cdot v - (m_1^l + m_2^l)\omega = F \cdot v - k(N_1 + N_2)\omega \\
&= F \cdot v - k(P_1 + P_2 + P)\omega \\
&= \left[F - \dfrac{k}{r}(P_1 + P_2 + P)\right]v.
\end{aligned}$$

Định lý động năng dạng đạo hàm cho ta :

$$\dfrac{4m + 3m_1}{4}va = \left[F - \dfrac{k}{r}(P_1 + P_2 + P)\right]v.$$

Vì cơ hệ chuyển động nên $v \neq 0$. Vậy :

$$\begin{aligned}
a &= 4\dfrac{F - \dfrac{k}{r}(P_1 + P_2 + P)}{4m + 3m_1} \\
&= 4\dfrac{F - \dfrac{k}{r}(m + 2m_1)g}{4m + 3m_1}
\end{aligned}$$

2. *Tìm lực ma sát tổng cộng do nền tác dụng lên các con lăn.* Viết phương trình chuyển động khối tâm cơ hệ ta có

$$m\vec{a} + 2m_1\vec{a}_1 = \vec{F} + \sum \vec{F}_{\text{ms}} + \sum \vec{P}_k + \sum \vec{N}_k$$

trong đó $\vec{a}_1$ là gia tốc khối tâm của các con lăn.

Khi chiếu phương trình vectơ nhận được lên trục nằm ngang ta được

$$ma + 2m_1 a_1 = F - \sum F_{\text{ms}}$$

Chú ý rằng : $a = 2a_1$, ta tìm được

$$\begin{aligned}
\sum F_{\text{ms}} &= F - (m + m_1)a \\
&= \dfrac{3m + 2m_1}{4m + 3m_1}F - \dfrac{m + m_1}{4m + 3m_1}\dfrac{k}{r}(m + 2m_1)g.
\end{aligned}$$

---

**Thí dụ 6–12.** Một thanh đồng chất $AB$ có chiều dài $2a$, quay được quanh trục $A$ cố định còn đầu $B$ tựa trên sàn. Truyền cho thanh vận tốc góc ban đầu $\omega_0$ và khi thanh nằm ở vị trí ngang liên kết tại $A$ bị mất. Tiếp theo thanh chuyển động tự do trong mặt phẳng thẳng đứng dưới tác dụng của trọng lực.

Tìm giá trị của vận tốc góc đầu $\omega_0$ của thanh để khi thanh rơi chạm vào sàn thanh ở vị trí thẳng đứng (H. 6–20).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_20.svg" alt="Hình 6-20" class="figure-img" />
  <p class="figure-caption">Hình 6-20</p>
</div>

*Bài giải.* Chuyển động của thanh gồm hai giai đoạn.

*Giai đoạn đầu :* Thanh từ vị trí thẳng đứng được truyền vận tốc góc $\omega_0$, quay quanh trục cố định qua $A$ và kết thúc khi thanh nằm ở vị trí nằm ngang và liên kết tại $A$ bị mất.

*Giai đoạn thứ hai :* Liên kết tại $A$ bị mất và thanh chuyển động song phẳng.

Chú ý rằng điều kiện đầu của giai đoạn thứ hai chính là điều kiện cuối của giai đoạn đầu.

Để tìm điều kiện cuối của giai đoạn đầu chúng ta sử dụng định lý biến thiên động năng dạng hữu hạn

$$T - T_0 = \sum A_k,$$

nó có dạng :

$$\dfrac{1}{2}J_A(\omega_1^2 - \omega_0^2) = -Pa,$$

trong đó $\omega_1$ là vận tốc góc của thanh khi nó quay đến vị trí ngang, $J_A$ là momen quán tính của thanh đối với trục qua $A$ :

$$J_A = \dfrac{4}{3}Ma^2$$

Từ đó ta tìm được :

$$\omega_1^2 = \omega_0^2 - \dfrac{3}{2}\dfrac{g}{a} \tag{a}$$

Trong giai đoạn thứ hai thanh chuyển động song phẳng, phương trình chuyển động của nó theo (6–6) có dạng sau :

$$M\ddot{x}_C = 0 \, ; \quad M\ddot{y}_C = -Mg \, ; \quad J_C\ddot{\varphi} = 0$$

với điều kiện đầu $x_C^0 = a$ ; $\dot{x}_C^0 = 0$ ; $y_C^0 = 0$ ; $\dot{y}_C^0 = a\omega_1$ ; $\varphi^0 = 0$ ; $\dot{\varphi}^0 = \omega_1$

Khi tích phân ta nhận được :

$$\begin{aligned}
&x_C = a \, ; \quad y_C = -g\dfrac{t^2}{2} + a\omega_1 t \\
&\varphi = \omega_1 t
\end{aligned}$$

Để khi thanh rơi chạm vào sàn ở vị trí thẳng đứng, các điều kiện sau phải thoả mãn :

$$y_C = a \, ; \quad \varphi = (2k + 1)\dfrac{\pi}{2} \, ; \quad k = 0, 1, 2\dots$$

Vậy ta có

$$-g\dfrac{t^2}{2} + a\omega_1 t = a \, ; \quad (2k + 1)\dfrac{\pi}{2} = \omega_1 t$$

Khử $t$ từ các phương trình nhận được và thay biểu thức của $\omega_1$ từ (a) có ;

$$\omega_0^2 = \dfrac{g}{4a}\left[6 + \dfrac{\pi^2(2k + 1)^2}{(2k + 1)\pi + 2}\right].$$

---

## 6.5. BÀI TẬP

**6.1.** Một bánh đà có khối lượng $3000\text{ kg}$ quay quanh trục nằm ngang với tốc độ $1200\text{ vòng/phút}$. Trọng tâm của bánh đà cách đường trục của trục quay là $1\text{ mm}$ và ở cách đều hai ổ đỡ của trục.

Tìm áp lực của trục lên hai ổ đỡ đó, (H. 6–21).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_21.svg" alt="Hình 6-21" class="figure-img" />
  <p class="figure-caption">Hình 6-21</p>
</div>

*Trả lời :* Áp lực tĩnh mỗi bên bằng $14{,}7\text{ kN}$ hướng thẳng đứng xuống ; áp lực động lực mỗi bên bằng $23{,}52\text{ kN}$ nằm trong mặt phẳng chứa trục quay và trọng tâm $C$ hướng vuông góc với trục quay và ngược bên với $C$ so với trục quay.

---

**6.2.** Rôto trống của tuabin có 4 tầng hình trụ tròn có khối lượng là $m_1 = 900\text{ kg}$ ; $m_2 = 1300\text{ kg}$ ; $m_3 = 500\text{ kg}$ ; $m_4 = 1000\text{ kg}$. Hai tầng bị gắn lệch tâm với các độ lệch tâm $e_2 = 0{,}1\text{ cm}$ ; $e_4 = 0{,}1\text{ cm}$ của hai trọng tâm $C_2$ và $C_4$ và hai mặt phẳng qua trục quay và $C_2, C_4$ tạo với nhau một góc vuông, còn hai tầng kia được gắn đúng tâm. Rôto quay đều với tốc độ $n = 3000\text{ vg/phút}$. Kích thước được cho như sau : $z_1 = 70\text{ cm}$ ; $z_2 = 80\text{ cm}$ ; $z_3 = 110\text{ cm}$ ; $z_4 = 75\text{ cm}$ ; $z_5 = 125\text{ cm}$ ; khối lượng của trục quay mang rôto là $m = 1300\text{ kg}$ (H. 6–22).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_22.svg" alt="Hình 6-22" class="figure-img" />
  <p class="figure-caption">Hình 6-22</p>
</div>

Tìm áp lực động lực lên hai ổ đỡ của trục rôto.

*Trả lời :* Các áp lực động lực gồm hai thành phần hướng theo các trục vuông góc nhau và gắn với trục quay.

$X_A = 86{,}338\text{ kN}$ ; $Y_A = 26{,}8\text{ kN}$ ; $X_B = 41{,}8\text{ kN}$ ; $Y_B = 71{,}9\text{ kN}$.

---

**6.3.** Một tấm hình chữ nhật đồng chất trọng lượng $P$ quay đều quanh đường chéo $AB$ với vận tốc góc $\omega$.

Xác định áp lực động lực của tấm lên các ổ đỡ $A$ và $B$ nếu chiều dài của các cạnh tấm bằng $a$ và $b$, (H. 6–23).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_23.svg" alt="Hình 6-23" class="figure-img" />
  <p class="figure-caption">Hình 6-23</p>
</div>

*Trả lời :*

$$\begin{aligned}
X_A &= 0 \, ; \quad Y_A = -\dfrac{Pab(a^2 - b^2)\omega^2}{12g(a^2 + b^2)^{3/2}} \\[8pt]
X_B &= 0 \, ; \quad Y_B = \dfrac{Pab(a^2 - b^2)\omega^2}{12g(a^2 + b^2)^{3/2}}
\end{aligned}$$

---

**6.4.** Khối trụ đồng chất tròn xoay có khối lượng $m$, dài $2l$, bán kính $R$, quay đều quanh trục thẳng đứng $Oz$ với vận tốc góc $\omega$. Trục quay qua trọng tâm $O$ của khối trụ và làm với trục đối xứng $O$ của nó một góc $\alpha$. Cho khoảng cách giữa hai ổ trục là $h$. Tìm áp lực ngang $N_1$ và $N_2$ của trục quay vào hai ổ, (H. 6–24).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_24.svg" alt="Hình 6-24" class="figure-img" />
  <p class="figure-caption">Hình 6-24</p>
</div>

*Trả lời :* $N_1 = N_2 = m\dfrac{\sin 2\alpha}{2h}\left(\dfrac{l^2}{3} - \dfrac{R^2}{4}\right)\omega^2$ và $\vec{N}_1, \vec{N}_2$ song song ngược chiều nhau.

---

**6.5.** Một cái quạt có hai cánh có khối lượng coi như được phân bố đều theo trục đối xứng dọc $y_1$ của nó, quay đều quanh trục ngang qua trọng tâm của nó với tốc độ là $n = 3000\text{ v/ph}$. Do lắp ráp không tốt, trục đối xứng $x_1$ vuông góc với mặt phẳng của cánh quạt lệch với trục quay một góc $\alpha = 0{,}015\text{ rad}$. Khoảng cách giữa trọng tâm của cánh quạt đến ổ đỡ gần nó là $a = 15\text{ cm}$, khoảng cách giữa hai ổ đỡ là $h = 25\text{ cm}$. Cánh quạt có khối lượng bằng $15\text{ kg}$ và mômen quán tính đối với trục $x_1$ là $J = 4{,}9\text{ kgm}^2$. Các trục $Ox, Oy, Oy_1, Ox_1$ trên hình vẽ cùng ở trong một mặt phẳng vuông góc với mặt phẳng cánh quạt. Tìm áp lực tĩnh và áp lực động lực mà hai ổ đỡ phải chịu (H. 6–25).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_25.svg" alt="Hình 6-25" class="figure-img" />
  <p class="figure-caption">Hình 6-25</p>
</div>

*Trả lời :* Áp lực tĩnh : $N_A^t = 235{,}2\text{ N}$ hướng xuống ; $N_B^t = 88{,}2\text{ N}$ hướng lên.

Áp lực động lực : $N_A^{\text{đ}} = N_B^{\text{đ}} = 58{,}016\text{ kN}$ ; $\vec{N}_A^{\text{đ}}, \vec{N}_B^{\text{đ}}$ song song ngược chiều nhau vuông góc với trục quay và quay cùng với cánh quạt.

---

**6.6.** Một đĩa mỏng đồng chất được lắp cứng trên trục quay nằm ngang với độ lệch tâm $OC = e$ và góc nghiêng $90^\circ - \alpha$ đối với đường tâm trục. Đĩa có trọng lượng $P$ và bán kính $r$. Xác định áp lực tĩnh và áp lực động lực của các ổ đỡ, khi đĩa quay đều quanh trục $Oz$ với vận tốc góc $\omega$ ; khoảng cách giữa hai ổ đỡ $AB = 2a$ (H. 6–26).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_26.svg" alt="Hình 6-26" class="figure-img" />
  <p class="figure-caption">Hình 6-26</p>
</div>

*Trả lời :* 1. Phản lực tĩnh hướng thẳng đứng lên phía trên và bằng

$$N_A^t = P\dfrac{a + e\sin\alpha}{2a} \, ; \quad N_B^t = P\dfrac{a - e\sin\alpha}{2a}.$$

2. Phản lực động lực hướng theo trục $Oy$ nằm trong cùng một mặt phẳng với trọng tâm và trục quay của đĩa và bằng

$$\begin{aligned}
N_A^{\text{đ}} &= \dfrac{P}{2g}\left[e\cos\alpha + \dfrac{\sin 2\alpha}{2a}\left(e^2 + \dfrac{r^2}{4}\right)\right]\omega^2 \, ; \\[8pt]
N_B^{\text{đ}} &= \dfrac{P}{2g}\left[e\cos\alpha - \dfrac{\sin 2\alpha}{2a}\left(e^2 + \dfrac{r^2}{2}\right)\right]\omega^2.
\end{aligned}$$

---

**6.7.** Dưới tác dụng của trọng lượng bản thân, một khối trụ tròn đồng chất lăn xuống theo đường dốc chính của mặt phẳng nghiêng có góc nghiêng là $\alpha$. Hệ số ma sát trượt tĩnh giữa mặt trụ và mặt phẳng nghiêng là $f$. Tìm góc nghiêng $\alpha$ của mặt phẳng nghiêng để bảo đảm cho chuyển động lăn đó là không trượt và tìm gia tốc của trục khối trụ. Bỏ qua ma sát lăn.

*Trả lời :* $\alpha \le \operatorname{arctg} 3f$ ; $a = \dfrac{2}{3}g\sin\alpha$.

---

**6.8.** Một bánh xe đồng chất bán kính $r$ lăn xuống không trượt theo đường dốc chính của một mặt phẳng nghiêng có góc nghiêng $\alpha$ so với phương ngang. Hệ số ma sát lăn giữa bánh xe và mặt nghiêng là $k$. Tìm điều kiện để bánh xe lăn xuống đều.

*Trả lời :* $k = r\operatorname{tg}\alpha$.

---

**6.9.** Một con lăn đồng chất hình trụ tròn, có trọng lượng $P$ bán kính $r$, được đặt trên mặt phẳng ngang, không nhẵn, có một sợi dây quấn vào tầng trong của con lăn với bán kính $a$. Bán kính quán tính của con lăn đối với trục của nó là $\rho$. Tác dụng lên đầu tự do của dây một lực $\vec{F}$, nghiêng với mặt phẳng ngang một góc không đổi $\alpha$. Tìm quy luật chuyển động của trục $O$ của con lăn, (H. 6–27).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_27.svg" alt="Hình 6-27" class="figure-img" />
  <p class="figure-caption">Hình 6-27</p>
</div>

*Trả lời :* $x = \dfrac{F}{P}\dfrac{rg(r\cos\alpha - a)}{2(r^2 + \rho^2)}t^2$.

---

**6.10.** Một trụ tròn đồng chất $A$, có khối lượng $m$, lăn xuống theo một dây treo thẳng đứng quấn vào nó. Đầu $B$ của dây được buộc chặt và khi trụ rơi không vận tốc đầu thì nhả dây quấn ra. Tìm vận tốc trục khối trụ khi nó đã rơi được một đoạn thẳng $h$ và tìm lực căng của dây treo, (H. 6–28).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_28.svg" alt="Hình 6-28" class="figure-img" />
  <p class="figure-caption">Hình 6-28</p>
</div>

*Trả lời :* $v = \dfrac{2}{3}\sqrt{3gh}$ , $T = \dfrac{1}{3}mg$.

---

**6.11.** Người ta quấn hai dây mềm vào một khối trụ tròn đồng chất và quấn dây đối xứng qua mặt phẳng trung bình song song với đáy : khối trụ nặng là $P$ được đặt lên mặt phẳng nghiêng sao cho đường sinh của nó vuông góc với đường dốc chính, và buộc cố định mút tự do của hai dây trên sao cho phần dây tự do song song với đường dốc chính của mặt phẳng nghiêng $AB$. Hệ số ma sát trượt động giữa mặt trụ và mặt nghiêng là $f$. Giả thiết rằng trọng lực thắng lực cản do ma sát và khối trụ trượt xuống không vận tốc đầu. Tìm quy luật chuyển động $s(t)$ của trục khối trụ và lực căng của mỗi dây. Cho rằng trong chuyển động đang xét dây quấn chưa bị nhả ra hết, (H. 6–29).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_29.svg" alt="Hình 6-29" class="figure-img" />
  <p class="figure-caption">Hình 6-29</p>
</div>

*Trả lời :*

$$\begin{aligned}
s(t) &= \dfrac{1}{3}g(\sin\alpha - 2f\cos\alpha)t^2 \, ; \\[6pt]
T &= \dfrac{1}{6}P(\sin\alpha + f\cos\alpha).
\end{aligned}$$

Khối trụ đứng yên nếu $\operatorname{tg}\alpha < 2f$ ;

---

**6.12.** Một thanh đồng chất $AB$ có trọng lượng $P$ được treo vào điểm $O$ nhờ hai dây có chiều dài bằng nhau và bằng độ dài của thanh. Xác định sức căng của một trong hai nhánh dây tại thời điểm nhánh kia bị đứt (xem hình 6–30).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_30.svg" alt="Hình 6-30" class="figure-img" />
  <p class="figure-caption">Hình 6-30</p>
</div>

*Trả lời :* $T = 0{,}266P$

---

**6.13.** Một thanh mảnh đồng chất có chiều dài $2l$ và trọng lượng $P$ nằm trên hai gối đỡ $A$ và $B$. Trọng tâm $C$ của thanh nằm cách đều hai gối đỡ : $CA = CB = a$. Áp lực tĩnh trên mỗi gối đỡ bằng $P/2$.

Tìm sự thay đổi áp lực trên gối đỡ $A$ tại thời điểm khi gối đỡ $B$ bị rơi tức thời, (H. 6–31).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_31.svg" alt="Hình 6-31" class="figure-img" />
  <p class="figure-caption">Hình 6-31</p>
</div>

*Trả lời :* Độ biến thiên của áp lực tại gối đỡ $A$ bằng $\dfrac{l^2 - 3a^2}{2(l^2 + 3a^2)}P$.

---

**6.14.** Tua bin có trục song song với trục dọc của tàu, quay với tốc độ $1500\text{ vòng/phút}$. Khối lượng rôto là $6\text{ tấn}$, bán kính quán tính của nó là $\rho = 0{,}70\text{ m}$. Xác định áp lực do hiệu ứng con quay gây ra ở hai ổ trục khi con tàu được lái vòng với vận tốc góc $\dfrac{\pi}{18}\text{ rad/s}$. Khoảng cách giữa ổ đỡ là $l = 2{,}7\text{ m}$, (H. 6–32).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_32.svg" alt="Hình 6-32" class="figure-img" />
  <p class="figure-caption">Hình 6-32</p>
</div>

*Trả lời :* $30{,}282\text{ kN}$.

---

**6.15.** Mômen quán tính của cánh quạt và của rôto môtơ máy bay đối với trục quay chung của chúng là $J = 7{,}84\text{ kgm}^2$, trục này trùng với trục dọc của máy bay. Tốc độ quay của cánh quạt là $n = 1200\text{ vòng/phút}$. Tìm mômen con quay tác dụng lên máy bay khi nó được lái vòng ngang với vận tốc $v = 40\text{ m/s}$ trên cung tròn có bán kính $R = 25\text{ m}$.

*Trả lời :* $M = 1568\text{ Nm}$, làm chúc máy bay xuống hay cất ngẩng máy bay lên tùy theo chiều lái vòng.

---

**6.16.** Trong một máy nghiền dùng thớt nghiền lăn, thớt nghiền được coi là một đĩa tròn đồng chất khối lượng $m = 1200\text{ kg}$ có bán kính quán tính đối với trục đối xứng $OA$ là $\rho = 0{,}4\text{ m}$. Bán kính vòng lăn của bánh là $R = 0{,}5\text{ m}$. Cho rằng trục quay tức thời của thớt đi qua điểm giữa của đoạn tiếp xúc của thớt và bàn nghiền. Tay quay của thớt quay với tốc độ $n = 60\text{ v/ph}$. Xác định áp lực tổng cộng của thớt nghiền lên bàn nghiền, (H. 6–33).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_33.svg" alt="Hình 6-33" class="figure-img" />
  <p class="figure-caption">Hình 6-33</p>
</div>

*Trả lời :* $27{,}048\text{ kN}$.

---

**6.17.** Bánh xe nặng $2p$, có bán kính $a$, quay quanh trục đối xứng nằm ngang $AB$ của nó với vận tốc góc không đổi $\omega_1$. Trục $AB$ lại quay quanh trục thẳng đứng $CD$ qua trọng tâm của đĩa với vận tốc góc không đổi $\omega_2$. Cho $OA = OB = h$ và giả thiết rằng khối lượng của bánh xe phân bố đều trên vành của nó. Tìm áp lực của trục $AB$ lên hai ổ đỡ $A$ và $B$, (H. 6–34).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_34.svg" alt="Hình 6-34" class="figure-img" />
  <p class="figure-caption">Hình 6-34</p>
</div>

*Trả lời :*

$$\begin{aligned}
N_A &= p\left(1 + \dfrac{a^2\omega_1\omega_2}{gh}\right) \, ; \\[8pt]
N_B &= p\left(1 - \dfrac{a^2\omega_1\omega_2}{gh}\right).
\end{aligned}$$

---

**6.18.** Một con quay cân bằng được đặt trong giá Cácđăng hai bậc tự do ở một nơi trên bắc bán cầu có vĩ độ $\varphi = 30^\circ$. Trục $AB$ của giá được đặt nằm ngang theo đường Đông–Tây. Rôto có khối lượng bằng $m_1 = 2\text{ kg}$, có bán kính $r = 4\text{ cm}$ và quay đều với vận tốc góc $\omega = 3.000\text{ rad/s}$ quanh trục đối xứng của nó. Trọng tâm chung của rôto và khung mang nó là $C$ ở trên trục $Cz$ qua trọng tâm $O$ của rôto với khoảng cách $OC = h$.

Mômen tĩnh của con quay là $H = (m_1 + m_2)gh = 128\text{ Ncm}$, khi khung cân bằng.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_35.svg" alt="Hình 6-35" class="figure-img" />
  <p class="figure-caption">Hình 6-35</p>
</div>

Tìm góc nghiêng $\alpha$ của trục quay $Oz$ của rôto so với trục thẳng đứng $O$ trong mặt phẳng kinh tuyến của nơi ấy. Coi rôto là một đĩa tròn đồng chất, (H. 6–35).

*Trả lời :* $\alpha = 45^\circ$.

---

**6.19.** Một khối trụ tròn đồng chất nặng được đặt trên một sàn ngang $AB$ ở gần mép sắc $B$ của sàn sao cho mép đó song song với đường sinh của hình trụ.

Bán kính khối trụ là $R$. Truyền cho khối trụ một vận tốc đầu rất nhỏ cho nó lăn xuống không trượt quanh mép $B$. Giả thử đến lúc mặt phẳng chứa mép $B$ và trục hình trụ tạo với mặt phẳng thẳng đứng góc $\varphi$ thì khối trụ rời mép $B$. Bỏ qua ma sát lăn và lực cản của không khí. Tìm giá trị của $\varphi$ và vận tốc $\omega$ của khối trụ lúc ấy, (H. 6–36).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_36.svg" alt="Hình 6-36" class="figure-img" />
  <p class="figure-caption">Hình 6-36</p>
</div>

*Trả lời :* $\varphi = \arccos\dfrac{4}{7} = 55^\circ 1'$ ; $\omega = 2\sqrt{\dfrac{g}{7R}}$.

---

**6.20.** Hai trục quay I và II, cùng với những bánh đà và bánh răng gắn trên chúng có mômen quán tính đối với trục quay của chúng lần lượt là $J_1 = 4900\text{ kgm}^2$ và $J_2 = 3920\text{ kgm}^2$. Tỷ số truyền động giữa 2 trục là $k_{1,2} = 2/3$. Trục I chịu tác dụng của mômen quay $M_1 = 490\text{ Nm}$. Hỏi sau khi trục II quay được bao nhiêu vòng thì đạt tốc độ $n_2 = 120\text{ v/ph}$. Bỏ qua ma sát ở các chỗ tiếp xúc. Tìm lực ăn khớp giữa các bánh răng. Cho góc ăn khớp là $\alpha = 20^\circ$, bán kính bánh răng gắn lên trục II là $r_2 = 150\text{ cm}$.

*Trả lời :* Sau $2{,}34$ vòng ; $S = 147\text{ N}$.

---

**6.21.** Một dầm nặng đồng chất dài $AB = 2l$ được đặt ở vị trí nằm ngang bằng cách giữ chặt hai đầu của nó. Ở một thời điểm nào đó đầu $B$ được buông ra và dầm bắt đầu chuyển động quay quanh trục nằm ngang đi qua đầu $A$. Ở thời điểm dầm ở vị trí thẳng đứng đầu $A$ cũng được thả tự do.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_37.svg" alt="Hình 6-37" class="figure-img" />
  <p class="figure-caption">Hình 6-37</p>
</div>

Xác định quỹ đạo của khối tâm của dầm và vận tốc góc của nó trong chuyển động tiếp theo lúc đầu dầm $B$ được tự do, (H. 6–37).

*Trả lời :* Parabôl : $y^2 = 3lx - 3l^2$ ; $\omega = \sqrt{\dfrac{3g}{2l}}$.

---

**6.22.** Một thanh nặng đồng chất dài là $l$. Đầu mút trên của nó được treo vào một trục nằm ngang $O$. Đang nằm ở vị trí cân bằng thẳng đứng, thanh nhận được vận tốc góc $\omega_0 = 3\sqrt{\dfrac{g}{l}}$. Sau khi quay được nửa vòng nó tách ra khỏi trục $O$. Xác định quỹ đạo trọng tâm và vận tốc góc quay $\omega$ của thanh trong chuyển động tiếp theo của nó.

*Trả lời :* Parabol : $y_C = \dfrac{l}{2} - \dfrac{2}{3l}x_C^2$ ; $\omega = \sqrt{3\dfrac{g}{l}}$.

---

**6.23.** Một thanh $AB$ khối lượng $m$ chuyển động phẳng, ở một thời điểm đang xét có gia tốc $\varepsilon$. Bán kính quán tính của thanh đối với trục đi qua trọng tâm $C$ vuông góc với mặt phẳng chuyển động của thanh bằng $\rho$, khoảng cách từ trọng tâm $C$ đến đầu $A$ và $B$ của thanh lần lượt bằng $a$ và $b$.

Khối lượng của thanh được thay thế bằng hai khối điểm tập trung ở hai đầu cuối thanh là $A$ và $B$ sao cho tổng khối lượng thu gọn bằng khối lượng của thanh còn khối tâm của những khối lượng thu gọn trùng với trọng tâm của thanh. Hỏi các vectơ chính và mômen chính của hai lực quán tính của các khối lượng thu gọn có bằng vectơ chính và mômen chính của hệ lực quán tính của thanh không.

*Trả lời :* Các vectơ chính của hai lực quán tính của các khối lượng thu gọn và của hệ lực quán tính của thanh bằng nhau, còn các mômen chính thì khác nhau một lượng $m(ab - \rho^2)\varepsilon$.

---

**6.24.** Một bản mỏng đồng chất $ABCD$ hình chữ nhật có chiều cao $AD = 2l$ trọng lượng $Q$, được đặt tựa vào mặt tường thẳng đứng, tỳ lên hai đinh nhẵn không mũ $E$ và $F$ với khoảng cách $AE = FB$. Vào một thời điểm nào đó bản bắt đầu rơi với vận tốc rất bé và quay quanh đường $AB$ nằm ngang. Xác định góc $\alpha$ giữa tường và bản mỏng lúc nó bắt đầu rời khỏi đinh (giả thiết đinh rất ngắn không làm mắc mứu chuyển động điểm $A$ theo phương ngang) khảo sát chuyển động tự do của bản mỏng sau khi nó rời đinh đỡ, (H. 6–38).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_38.svg" alt="Hình 6-38" class="figure-img" />
  <p class="figure-caption">Hình 6-38</p>
</div>

*Trả lời :* $\alpha = \arccos\dfrac{1}{3} = 70^\circ 32'$

Sau khi rời đinh thì khối tâm tấm phẳng chuyển động song phẳng theo một đường parabol và bản giữ nguyên tốc độ góc như khi nó rời khỏi đinh.

---

**6.25.** Hai trụ tròn xoay đồng chất $A$ và $B$ có trọng lượng lần lượt là $P_1$ và $P_2$ và bán kính lần lượt là $R_1$ và $R_2$. Quấn hai sợi dây mềm vào hai đầu của hai khối trụ một cách đối xứng đối với mặt phẳng trung bình song song với đáy của các khối trụ đó. Khối trụ $A$ quay quanh một trục cố định trùng với đường trục tâm của khối trụ đó. Khối trụ $B$ rơi tự do không vận tốc đầu, nhả dây quấn ra và làm quay cả khối trụ $A$ nữa. Bỏ qua ma sát và các lực cản. Xác định vận tốc góc của hai khối trụ khi dây quấn chưa nhả ra hết. Xác định phương trình chuyển động của trục khối trụ $B$. Tìm sức căng mỗi dây quấn, (H. 6–39).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_39.svg" alt="Hình 6-39" class="figure-img" />
  <p class="figure-caption">Hình 6-39</p>
</div>

*Trả lời :*

$$\begin{aligned}
\omega_A &= \dfrac{2gP_2}{R_1(3P_1 + 2P_2)}t \, ; \\[8pt]
\omega_B &= \dfrac{2gP_1}{R_2(3P_1 + 2P_2)}t. \\[8pt]
s &= \dfrac{g(P_1 + P_2)}{3P_1 + 2P_2}t^2 \, ; \\[8pt]
T &= \dfrac{P_1 P_2}{2(3P_1 + 2P_2)}.
\end{aligned}$$

---

**6.26.** Con lăn đồng chất gồm hai tầng trụ tròn xoay $B$ và $C$ ghép cứng với nhau được liên kết với vật nặng $A$ bằng một dây mềm, mảnh, nhẹ như hình vẽ, vành trụ $B$ quấn dây, ròng rọc $D$ có khối lượng không đáng kể và có trục quay cố định. Dưới tác dụng của trọng lực vật $A$ rơi xuống và kéo con lăn lăn không trượt trên mặt phẳng ngang và nhả dần dây quấn ra. Con lăn có trọng lượng $Q$, bán kính quấn dây $r$, bán kính lăn $R$ và bán kính quán tính đối với trục tròn xoay là $\rho$. Vật nặng $A$ có trọng lượng $P$. Bỏ qua ma sát.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_40.svg" alt="Hình 6-40" class="figure-img" />
  <p class="figure-caption">Hình 6-40</p>
</div>

Tìm gia tốc rơi của vật $A$. Tìm phản lực ở trục ròng rọc và lực ma sát trượt giữa con lăn và nền đường, (H. 6–40).

*Trả lời :*

$$\begin{aligned}
a_A &= \dfrac{P(R + r)^2 g}{Q(\rho^2 + R^2) + P(R + r)^2} \, ; \\[8pt]
R_x = R_y &= P\left(1 - \dfrac{a_A}{g}\right) \\
&= \dfrac{PQ(R^2 + \rho^2)}{Q(\rho^2 + R^2) + P(R + r)^2} \, ; \\[8pt]
F &= \dfrac{PQ(\rho^2 - Rr)}{Q(\rho^2 + R^2) + P(R + r)^2}.
\end{aligned}$$

---

**6.27.** Một trụ tròn xoay đồng chất có thể quay được quanh một trục thẳng đứng. Trên mặt trụ có một rãnh nhẵn hình xoắn ốc với góc nghiêng là $\alpha$. Ban đầu cả hệ đứng yên. Thả một viên bi không vận tốc đầu theo rãnh xoắn thì khối trụ quay. Cho biết viên bi có khối lượng $m$, mômen quán tính của khối trụ đối với trục quay của nó là $\dfrac{MR^2}{2}$, trong đó $M$ là khối lượng, $R$ là bán kính khối trụ.

Xác định vận tốc góc của khối trụ khi viên bi đã rơi xuống được một độ cao $h$.

*Trả lời :* $\omega = \dfrac{2m\cos\alpha}{R}\sqrt{\dfrac{2gh}{(M + 2m)(M + 2m\sin^2\alpha)}}$.

---

**6.28.** Trên một mặt phẳng nhẵn nằm ngang đặt một lăng trụ tam giác $ABC$ có trọng lượng $P$, nó có thể trượt trơn trên mặt phẳng đó. Một hình trụ tròn đồng chất trọng lượng $Q$ lăn không trượt trên mặt nghiêng của lăng trụ với góc nghiêng $\alpha$. Xác định chuyển động của lăng trụ, (H. 6–41).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_41.svg" alt="Hình 6-41" class="figure-img" />
  <p class="figure-caption">Hình 6-41</p>
</div>

*Trả lời :* Lăng trụ chuyển động về bên trái với gia tốc không đổi :

$$a = \dfrac{Q\sin 2\alpha}{3(P + Q) - 2Q\cos^2\alpha}g.$$
