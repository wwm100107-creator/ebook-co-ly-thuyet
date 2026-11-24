---
title: "Bài Tập Tĩnh Học - Chương 5: Bài Toán Tìm Trọng Tâm"
layout: doc
---

# Chương 5: Bài Toán Tìm Trọng Tâm

Trọng tâm $G$ là điểm đặt trọng lực. Tìm trọng tâm là bài toán thực tế vì thông thường các vật khảo sát đều nằm trong trọng trường.

---

## 5.1. CƠ SỞ LÍ THUYẾT

### 5.1.1. Công thức trọng tâm hệ chất điểm

$$\vec{r}_G = \frac{1}{P} \sum_{k=1}^{n} p_k \vec{r}_k \left\{ \begin{aligned}
x_G &= \frac{1}{P} \sum_{k=1}^{n} p_k x_k \, , \\
y_G &= \frac{1}{P} \sum_{k=1}^{n} p_k y_k \, , \\
z_G &= \frac{1}{P} \sum_{k=1}^{n} p_k z_k \, ,
\end{aligned} \right. \quad \left( P = \sum_{k=1}^{n} p_k \right) \, . \tag{5.1}$$

trong đó : $n$ – số chất điểm, $\vec{r}_k(x_k, y_k, z_k)$, – bán kính vectơ (tọa độ) và $p_k$ – trọng lượng chất điểm thứ $k$ ; $P$ – trọng lượng hệ ; $\vec{r}_G(x_G, y_G, z_G)$ – bán kính vectơ (tọa độ) trọng tâm.

### 5.1.2. Công thức trọng tâm vật rắn

$$\vec{r}_G = \frac{1}{P} \int \vec{r}\,dp \left\{ \begin{aligned}
x_G &= \frac{1}{P} \int x\,dp \, , \\
y_G &= \frac{1}{P} \int y\,dp \, , \\
z_G &= \frac{1}{P} \int z\,dp \, ,
\end{aligned} \right. \quad \left( P = \int dp \right) \tag{5-2}$$

trong đó : $\vec{r}$, $dp$ – bán kính vectơ và trọng lượng phần tử nguyên tố ; $\int$ – dấu tích phân trải trên vật rắn ($1, 2$ hay $3$ lớp tùy dạng vật rắn và tùy cách lập phần tử nguyên tố).

### 5.1.3. Công thức Guynđanh

– Diện tích $S$ sinh ra bởi đường phẳng khi quay quanh trục đồng phẳng $\Delta$ không cắt nó được xác định bởi công thức :

$$S = 2\pi d \cdot L \, ,$$

trong đó : $L$ – độ dài đường phẳng ; $d$ – khoảng cách từ trọng tâm $G$ của đường phẳng đến $\Delta$, (H. 5-1).

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_1.svg" alt="Hình 5-1" style="max-height: 280px;" />

<div class="figure-caption">

Hình 5-1

</div>

</div>

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_2.svg" alt="Hình 5-2" style="max-height: 260px;" />

<div class="figure-caption">

Hình 5-2

</div>

</div>

– Thể tích $V$ sinh ra bởi tấm phẳng khi quay quanh trục đồng phẳng $\Delta$ không cắt nó được xác định bởi công thức :

$$V = 2\pi d \cdot S \, ,$$

trong đó : $S$ – diện tích tấm phẳng ;

$d$ – khoảng cách từ trọng tâm tấm phẳng đến trục $\Delta$ (H. 5-2).

### 5.1.4. Một số tính chất và trọng tâm một số vật

– Có thể thay một phần hệ (một số chất điểm, một phần vật rắn) bằng một chất điểm đặt tại trọng tâm và có cùng trọng lượng với phần đó.

– Với vật đồng chất, trong các công thức, thay trọng lượng bằng độ dài, diện tích hoặc thể tích tùy theo vật được xét là một đường, một mặt hoặc một khối.

– Trọng tâm vật đồng chất có tâm (trục, mặt phẳng) đối xứng trùng với (nằm trên) tâm (trục, mặt phẳng) đối xứng.

– Tấm (khung) đồng chất hình vuông, chữ nhật, bình hành, tròn v.v. có trọng tâm trùng với tâm hình học.

Trọng tâm tam giác đồng chất là giao điểm các trung tuyến (H. 5-3a). Trọng tâm tứ diện đồng chất là giao điểm các đoạn nối đỉnh và trọng tâm đáy đối diện (H. 5-3b).

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_3.svg" alt="Hình 5-3a và Hình 5-3b" style="max-width: 580px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 5-3a, b

</div>

</div>

$$\frac{GA_1}{GA} = \frac{GB_1}{GB} = \frac{1}{2} \quad \text{(Hình 5-3a)} \, ; \qquad \frac{GA_1}{GA} = \frac{GC_1}{GC} = \frac{1}{3} \quad \text{(Hình 5-3b)}$$

Trọng tâm cung tròn, nửa đường tròn, quạt tròn, nửa mặt tròn, bán cầu cho ở mục 5-2.

---

## 5.2. HƯỚNG DẪN ÁP DỤNG - BÀI TOÁN GIẢI MẪU

### 5.2.1. Phương pháp ghép vật

Phương pháp này được áp dụng khi có thể chia vật rắn thành một số hữu hạn phần đã biết trọng tâm và trọng lượng.

Trình tự :
- Chia vật
- Thay mỗi phần bằng một chất điểm
- Áp dụng công thức (5-1)

Thường vật là đồng chất nên trọng lượng được thay bằng độ dài diện tích hoặc thể tích.

Nếu vật khuyết, xem nó do vật nguyên (chưa khuyết) ghép với phần khuyết có trọng lượng âm.

#### Thí dụ 5-1.

Tìm trọng tâm hệ ba thanh đồng chất, cùng thiết diện, cùng vật liệu bố trí như trên hình 5-4.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_4.svg" alt="Hình 5-4" style="max-height: 280px;" />

<div class="figure-caption">

Hình 5-4

</div>

</div>

*Bài giải :* Thay ba thanh bởi ba chất điểm $G_1, G_2, G_3$ có trọng lượng tỉ lệ với độ dài $p_1 = a$, $p_2 = b$, $p_3 = 2c$ và có tọa độ :

$$x_1 = \frac{a}{2} \, ; \quad y_1 = b \, ; \quad z_1 = 0 \, ;$$

$$x_2 = a \, ; \quad y_2 = \frac{b}{2} \, ; \quad z_2 = 0 \, ;$$

$$x_3 = \frac{a}{2} \, ; \quad y_3 = \frac{b}{2} \, ; \quad z_3 = \frac{c}{2} \, .$$

Tọa độ trọng tâm $G$ của hệ là :

$$x_G = \frac{1}{P}(p_1 x_1 + p_2 x_2 + p_3 x_3) = \frac{a^2 + 2ab + 2ac}{2(a + b + 2c)} \, ;$$

$$y_G = \frac{2a + b^2 + 2bc}{2(a + b + 2c)} \, ; \quad z_G = \frac{c^2}{a + b + 2c} \, .$$

[Đính chính bản in: Ở tử số của $y_G$, bản in gốc in thiếu thừa số $b$ ở số hạng đầu ($2a$ thay vì $2ab$).]

#### Thí dụ 5-2.

Tìm trọng tâm của tấm đồng chất chữ L có kích thước cho trên hình 5-5.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_5.svg" alt="Hình 5-5" style="max-height: 280px;" />

<div class="figure-caption">

Hình 5-5

</div>

</div>

*Bài giải :* Chia tấm chữ L thành hai chữ nhật như hình vẽ và thay chúng bởi hai chất điểm $G_1, G_2$ có trọng lượng tỉ lệ với diện tích :

$$p_1 \Rightarrow S_1 = 12 \, ; \quad p_2 \Rightarrow S_2 = 8$$

và có tọa độ :

$$x_1 = 1 \, ; \quad y_1 = 5 \, ; \quad x_2 = 2 \, ; \quad y_2 = 1 \, .$$

Tọa độ trọng tâm $G$ :

$$x_G = \frac{1}{P}(p_1 x_1 + p_2 x_2) = \frac{1}{S_1 + S_2}(S_1 x_1 + S_2 x_2) = \frac{12 \cdot 1 + 8 \cdot 2}{12 + 8} = 1{,}4 \, ; \quad y_G = 3{,}4 \, .$$

#### Thí dụ 5-3.

Tìm trọng tâm của tấm tròn đồng chất $O$, bán kính $R$, bị khuyết lỗ tròn $A$, bán kính $r$. Biết $OA = a$, $a + r < R$ (H. 5-6).

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_6.svg" alt="Hình 5-6" style="max-height: 260px;" />

<div class="figure-caption">

Hình 5-6

</div>

</div>

*Bài giải :* Tấm khuyết do tấm nguyên $O$ ghép với phần khuyết $A$ mang trọng lượng âm. Vì đồng chất nên trọng lượng tỉ lệ với diện tích, tức là :

$$S_o = \pi R^2 \, ; \quad S_A = -\pi r^2 \, .$$

Vì đối xứng nên trọng tâm $G$ nằm trên trục $x$ (qua $O, A$). Chúng ta có : $x_o = 0$, $x_A = a$ và

$$x_G = \frac{1}{S}(S_o x_o + S_A x_A) = \frac{\pi R^2 \cdot 0 - \pi r^2 \cdot a}{\pi R^2 - \pi r^2} = -\frac{a r^2}{R^2 - r^2} \, .$$

#### Thí dụ 5-4.

Tìm trọng tâm của khối hộp chữ nhật đồng chất có kích thước và bị khuyết một bán cầu như hình 5-7 ; biết $r < \frac{a}{2}$ ; $r < \frac{b}{2}$ ; $r < c$.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_7.svg" alt="Hình 5-7" style="max-height: 360px;" />

<div class="figure-caption">

Hình 5-7

</div>

</div>

*Bài giải :* Xem khối khuyết do khối hộp nguyên $O$ ghép với khối bán cầu $A$ mang trọng lượng âm.

Vì đồng chất nên trọng lượng tỉ lệ thể tích :

$$V_o = abc \, ; \quad V_A = -\frac{2}{3}\pi r^3 \, .$$

Vì đối xứng, trọng tâm nằm trên trục $Oz$ qua tâm $O$ của khối hộp nguyên và song song với cạnh $c$. Chú ý rằng trọng tâm $C$ của bán cầu nằm thấp hơn $A$ một đoạn $AC = \frac{3}{8}r$.

Ta có :

$$z_o = 0 \, ; \quad z_C = \frac{c}{2} - \frac{3}{8}r \, .$$

Trọng tâm $G$ của khối khuyết có cao độ :

$$z_G = \frac{1}{V}(V_o \cdot z_o + V_A \cdot z_C) = \frac{abc \cdot 0 - \dfrac{2}{3}\pi r^3 \left(\dfrac{c}{2} - \dfrac{3}{8}r\right)}{abc - \dfrac{2}{3}\pi r^3} \, ;$$

$$z_G = -\frac{\pi r^3 (4c - 3r)}{4(3abc - 2\pi r^2)} \, .$$

[Đính chính bản in: Ở mẫu số biểu thức cuối của $z_G$, bản in gốc in $2\pi r^2$ thay vì $2\pi r^3$.]

### 5.2.2. Phương pháp tích phân

Khi không thể chia vật ra một số hữu hạn phần đơn giản, nhưng có thể biểu diễn hình dạng vật dưới dạng giải tích thuận lợi, chúng ta có thể dùng phương pháp tích phân.

#### Thí dụ 5-5.

Tìm trọng tâm cung tròn đồng chất $AB$ trên đường tròn bán kính $R$, góc tại tâm $2\alpha$ (H. 5-8).

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_8.svg" alt="Hình 5-8" style="max-height: 260px;" />

<div class="figure-caption">

Hình 5-8

</div>

</div>

*Bài giải :* Vì đồng chất, trọng lượng được thay bằng độ dài ; vì đối xứng, trọng tâm nằm trên trục $Ox$.

Chia cung tròn ra vô hạn cung vô cùng nhỏ, vị trí được xác định bởi góc $\varphi$. Cung nguyên tố tương ứng góc $d\varphi$ có độ dài bằng :

$$dl = R \cdot d\varphi$$

và có hoành độ : $x = R\cos\varphi$

Chú ý rằng độ dài cung $AB$ là $L = R \cdot 2\alpha$. Hoành độ trọng tâm của cung cho bởi công thức :

$$\begin{aligned}
x_G &= \frac{1}{L}\int_{-\alpha}^{+\alpha} x\,dl = \frac{1}{2\alpha R}\int_{-\alpha}^{+\alpha} R\cos\varphi \cdot R\,d\varphi \\
&= \left. \frac{R}{2\alpha}\sin\varphi \right|_{-\alpha}^{+\alpha} = R\frac{\sin\alpha}{\alpha} \, .
\end{aligned}$$

Với nửa cung tròn : $\alpha = \frac{\pi}{2}$ ; $x_G = \frac{2R}{\pi} \, .$

#### Thí dụ 5-6.

Tìm trọng tâm của quạt tròn đồng chất $AOB$ của tấm tròn tâm $O$ bán kính $R$ có góc tại tâm $AOB = 2\alpha$.

*Bài giải :* Tương tự trên, vì đồng chất, trọng lượng được thay bằng diện tích và vì đối xứng, trọng tâm nằm trên trục $Ox$. Chia quạt tròn thành vô hạn quạt tròn vô cùng nhỏ có vị trí xác định bởi góc $\varphi$ và có góc mở $d\varphi$. Diện tích mỗi quạt tròn nguyên tố là $dS = \frac{1}{2}R^2 d\varphi$, trọng tâm của nó có hoành độ $x = \frac{2}{3}R\cos\varphi$ (như tam giác). Chú ý rằng diện tích quạt tròn là $S = R^2 \cdot \alpha$. Trọng tâm quạt cho bởi công thức :

$$x_G = \frac{1}{S}\int x\,ds = \frac{1}{R^2 \alpha}\int_{-\alpha}^{+\alpha} \frac{2}{3}R\cos\varphi \cdot \frac{1}{2}R^2 d\varphi = \frac{2}{3}R\frac{\sin\alpha}{\alpha} \, .$$

Với nửa tấm tròn :

$$\alpha = \frac{\pi}{2} \, ; \quad x_G = \frac{4R}{3\pi} \, .$$

#### Thí dụ 5-7.

Tìm trọng tâm của bán cầu đồng chất tâm $O$ bán kính $R$ (H. 5-9).

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_9.svg" alt="Hình 5-9" style="max-height: 280px;" />

<div class="figure-caption">

Hình 5-9

</div>

</div>

*Bài giải :* Chúng ta sẽ thay trọng lượng bằng thể tích và chỉ cần tính cao độ $z$. Chia bán cầu thành vô hạn lát mỏng song song với đáy cao độ $z$, bề dày $dz$, bán kính $r = \sqrt{R^2 - z^2}$, thể tích :

$$dV = \pi r^2 dz = \pi(R^2 - z^2)dz \, .$$

Chú ý rằng thể tích bán cầu là $V = \frac{2}{3}\pi R^3$, trọng tâm của bán cầu có cao độ :

$$z_G = \frac{1}{V}\int z\,dV = \frac{3}{2\pi R^3}\int_{0}^{R} z \cdot \pi(R^2 - z^2)dz = \frac{3}{8}R \, .$$

### 5.2.3. Phương pháp Guynđanh

Các công thức Guynđanh cho phép tìm diện tích (thể tích) mặt (khối) tròn xoay hoặc trọng tâm đường phẳng (tấm phẳng) đã sinh ra diện tích (thể tích) trên.

#### Thí dụ 5-8.

Tìm thể tích của khối xuyến sinh ra bởi mặt tròn tâm $A$ bán kính $r$ khi quay quanh trục $\Delta$ đồng phẳng và cách $A$ đoạn $R$ (H. 5-10).

*Bài giải :* Diện tích mặt tròn là $S = \pi r^2$, trọng tâm là $A$ cách $\Delta$ một đoạn $R$. Theo công thức Guynđanh thứ hai, thể tích khối xuyến là :

$$V = 2\pi d \cdot S = 2\pi R \cdot \pi r^2 = 2\pi^2 R r^2 \, .$$

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_10.svg" alt="Hình 5-10" style="max-height: 260px;" />

<div class="figure-caption">

Hình 5-10

</div>

</div>

#### Thí dụ 5-9.

Tìm trọng tâm nửa mặt tròn bán kính $R$ (H. 5-11).

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_11.svg" alt="Hình 5-11" style="max-height: 240px;" />

<div class="figure-caption">

Hình 5-11

</div>

</div>

*Bài giải :* Gọi $d$ là khoảng cách từ tâm $O$ đến trọng tâm $G$. Diện tích nửa mặt tròn là $\pi R^2 / 2$. Cho nửa mặt tròn quay quanh đường kính, nó quét ra khối cầu thể tích $V = \frac{4}{3}\pi R^3$.

Công thức Guynđanh thứ hai cho :

$$V = 2\pi d \cdot S$$

hay

$$d = \frac{V}{2\pi S} = \frac{\dfrac{4}{3}\pi R^3}{2\pi \cdot \dfrac{\pi R^2}{2}} = \frac{4R}{3\pi} \, .$$

---

## 5.3. BÀI TẬP

**5-1.** Xác định trọng tâm hệ thanh đồng chất, cùng vật liệu cùng thiết diện, có kích thước cho trên hình 5-12.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_12.svg" alt="Hình 5-12" style="max-width: 520px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 5-12

</div>

</div>

*Trả lời :*

a)

$$x = \frac{7}{4(4 + \sqrt{3})} \, ; \quad y = \frac{(5 + 2\sqrt{3})\sqrt{3}}{4(4 + \sqrt{3})} \, .$$

b)

$$x = \frac{7 + 4\sqrt{2}}{10 + 4\sqrt{2}} \, ; \quad y = \frac{2 + \sqrt{2}}{5 + 2\sqrt{2}} \, .$$

c)

$$x = \frac{c^2}{2(a + b + c)} \, ; \quad y = \frac{b^2 + 2bc}{2(a + b + c)} \, ; \quad z = \frac{a^2}{2(a + b + c)} \, .$$

d)

$$x = \frac{5}{8} \, ; \quad y = 1 \, ; \quad z = \frac{\sqrt{3}}{4} \, .$$

---

**5-2.** Xác định trọng tâm các tấm đồng chất có hình dạng và kích thước như hình 5-13.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_13.svg" alt="Hình 5-13" style="max-width: 560px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 5-13

</div>

</div>

*Trả lời :*

a)

$$x = \frac{a^2 + bd - d^2}{2(a + b - d)} \, ; \quad y = \frac{b^2 + ad - d^2}{2(a + b - d)} \, .$$

b)

$$y = \frac{ad^2 + bh^2 - bd^2}{2(ad + bh - bd)} \, .$$

c) $y = 11\text{cm}.$

d) $x \approx 6{,}7\text{cm}$ ; $y \approx 2{,}5\text{cm}.$

---

**5-3.** Xác định trọng tâm các tấm đồng chất có hình dạng và kích thước như hình 5-14.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_14.svg" alt="Hình 5-14" style="max-width: 580px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 5-14

</div>

</div>

*Trả lời :*

a)

$$x = -\frac{3a}{2(4 + \sqrt{3})} \, .$$

b)

$$x = -\frac{10a}{3(8 + \pi)} \, .$$

c)

$$x = \frac{a}{3(\pi + 2\sqrt{3})} \, .$$

d)

$$x = -\frac{3a\sqrt{3}}{8\pi + 3\sqrt{3}} \, .$$

---

**5-4.** Xác định trọng tâm các tấm đồng chất có hình dạng và kích thước như hình 5-15.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_15.svg" alt="Hình 5-15" style="max-width: 520px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 5-15

</div>

</div>

*Trả lời :*

a)

$$x = -\frac{a}{9} \, .$$

b)

$$x = \frac{3\pi - 4}{6(8 - \pi)}a \, .$$

c)

$$x = \frac{R}{6} \, ; \quad y = \frac{14R}{9\pi} \, .$$

d)

$$y = \frac{2R\sqrt{3}}{4\pi - 3\sqrt{3}} \, .$$

---

**5-5.** Xác định trọng tâm các khối đồng chất có hình dạng và kích thước như hình 5-16.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_16.svg" alt="Hình 5-16" style="max-width: 560px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 5-16

</div>

</div>

*Trả lời :*

a)

$$x = y = \frac{9}{10}a \, ; \quad z = \frac{7}{10}a \, .$$

b)

$$x = y = z = \frac{13}{14}a \, .$$

c)

$$z = \frac{3h^2 - 9R^2}{12(h + 2R)} \, .$$

d)

$$z = \frac{3}{4} \cdot \frac{2h^2 - R^2}{3h - 2R} \, .$$

---

**5-6.** Xác định trọng tâm của các tấm đồng chất giới hạn bởi các đồ thị cho trên hình 5-17.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_17.svg" alt="Hình 5-17" style="max-width: 540px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 5-17

</div>

</div>

*Trả lời :*

a) $x = 3a/4$ ; $y = 3a/10 \, .$

b) $x = 3a/5$ ; $y = 3\sqrt{a}/8 \, .$

c) $x = \pi/2$ ; $y = \pi/8 \, .$

d) $x = y = 9/20 \, .$

---

**5-7.** Dùng công thức Guynđanh, xác định trọng tâm của cung tròn, quạt tròn thuộc vòng tròn bán kính $R$ và có góc tại tâm $2\alpha$.

---

**5-8.** Tính thể tích của khối xuyến tạo nên bởi thiết diện : a) tam giác đều cạnh $a$ và b) nửa mặt tròn bán kính $r$, khi quay quanh trục $z$ song song và cách đáy (tam giác, nửa mặt tròn) một đoạn $R$.

*Trả lời :*

a)

$$V = \frac{\pi}{2}\left(R + \frac{a\sqrt{3}}{6}\right)a^2\sqrt{3} \, .$$

b)

$$V = \pi^2 R^3 \left(1 + \frac{4}{3\pi}\right) \, .$$
