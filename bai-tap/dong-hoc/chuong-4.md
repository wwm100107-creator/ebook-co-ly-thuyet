---
title: "Chương 9: Chuyển động quay của vật rắn quanh một điểm cố định (chuyển động cầu của vật rắn)"
layout: doc
---

# CHƯƠNG 9: CHUYỂN ĐỘNG QUAY CỦA VẬT RẮN QUANH MỘT ĐIỂM CỐ ĐỊNH (CHUYỂN ĐỘNG CẦU CỦA VẬT RẮN)

## 9.1. CƠ SỞ LÍ THUYẾT

Trong chuyển động quay của vật rắn quanh một điểm cố định, mỗi điểm thuộc vật chuyển động trên một mặt cầu mà tâm là điểm cố định. Do đó chuyển động này còn có tên là chuyển động cầu.

### 9.1.1. Khảo sát chuyển động của vật

*1. Phương trình chuyển động của vật*

Gọi $Ox_1y_1z_1$ là trục cố định và $Oxyz$ là hệ trục gắn liền với vật ; $ON$ – đường nút, là giao tuyến của hai mặt phẳng $Ox_1y_1$ và $Oxy$. Vị trí của vật được xác định bởi $3$ góc Ơle : $\varphi$, $\psi$ và $\theta$ ;

trong đó :
- $\varphi$ – góc giữa $ON$ và $Ox$ ;
- $\psi$ – góc giữa $Ox_1$ và $ON$ ;
- $\theta$ – góc giữa $Oz_1$ và $Oz$.

Phương trình chuyển động của vật quay quanh điểm cố định có dạng :

$$\begin{aligned}
\varphi &= \varphi(t), \\
\psi &= \psi(t), \\
\theta &= \theta(t).
\end{aligned} \tag{9–1}$$

Chuyển động của vật quay quanh điểm cố định $O$ có thể phân tích thành ba chuyển động quay quanh ba trục.

– Quay riêng quanh trục $Oz$ với góc quay $\varphi$.

– Quay tiến động quanh trục $Oz_1$ với góc quay $\psi$.

– Quay trương động quanh trục $ON$ với góc quay $\theta$.

*2. Vận tốc góc của vật :* Theo phân tích chuyển động ở trên, các chuyển động quay xác định các vectơ vận tốc $\vec{\omega}_1$, $\vec{\omega}_2$, $\vec{\omega}_3$ nằm dọc theo các trục quay (H. 9-1).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_1.svg" alt="Hình 9-1" class="figure-img" /><p class="figure-caption">Hình 9-1</p></div>

$$\overline{\omega}_1 = \dot{\varphi} \ ; \quad \overline{\omega}_2 = \dot{\psi} \ ; \quad \overline{\omega}_3 = \dot{\theta}. \tag{9–2}$$

Vectơ vận tốc góc tức thời $\vec{\omega}$ của vật :

$$\vec{\omega} = \vec{\omega}_1 + \vec{\omega}_2 + \vec{\omega}_3. \tag{9–3}$$

Hình chiếu của $\vec{\omega}$ lên các trục của hệ trục cố định $Ox_1y_1z_1$ :

$$\begin{aligned}
\omega_{x_1} &= \dot{\varphi}\sin\theta\sin\psi + \dot{\theta}\cos\psi, \\
\omega_{y_1} &= -\dot{\varphi}\sin\theta\cos\psi + \dot{\theta}\sin\psi, \\
\omega_{z_1} &= \dot{\varphi}\cos\theta + \dot{\psi}.
\end{aligned} \tag{9–4}$$

Hình chiếu của $\vec{\omega}$ lên các trục của hệ trục động $Oxyz$ :

$$\left.\begin{aligned}
\omega_x &= \dot{\psi}\sin\theta\sin\varphi + \dot{\theta}\cos\varphi, \\
\omega_y &= \dot{\psi}\sin\theta\cos\varphi - \dot{\theta}\sin\varphi, \\
\omega_z &= \dot{\psi}\cos\theta + \dot{\varphi}.
\end{aligned}\right\} \tag{9–5}$$

Giá trị của vectơ $\vec{\omega}$ bằng

$$\omega = \sqrt{\dot{\varphi}^2 + \dot{\psi}^2 + \dot{\theta}^2 + 2\dot{\varphi}\dot{\psi}\cos\theta} \, . \tag{9–6}$$

Trục $OP$ mang vectơ $\vec{\omega}$ được gọi là trục quay tức thời, phương trình của nó đối với hệ trục cố định có dạng

$$\frac{x_1}{\omega_{x_1}} = \frac{y_1}{\omega_{y_1}} = \frac{z_1}{\omega_{z_1}} \, , \tag{9–7}$$

trong đó $\omega_{x_1}$, $\omega_{y_1}$, $\omega_{z_1}$ có biểu thức (9–4)

Phương trình của trục quay tức thời $OP$ đối với hệ trục động sẽ là :

$$\frac{x}{\omega_x} = \frac{y}{\omega_y} = \frac{z}{\omega_z} \, , \tag{9–8}$$

trong đó $\omega_x$, $\omega_y$, $\omega_z$ lấy các biểu thức (9–5).

Về mặt thực hành trục quay tức thời được xác định dựa trên hai quy tắc sau :

– Ngoài điểm $O$, tìm một điểm trên vật có vận tốc bằng không. Trục quay tức thời đi qua điểm đó và $O$.

– Tìm vectơ $\vec{\omega}$, phương của $\vec{\omega}$ là trục quay tức thời.

Khi vật chuyển động, trục quay tức thời vẽ nên một mặt nón đối với hệ trục động được gọi là mặt lăn, còn đối với hệ trục cố định được gọi là mặt căn cứ. Trong quá trình vật chuyển động mặt lăn sẽ lăn không trượt trên mặt căn cứ.

*3. Gia tốc góc của vật*

$$\vec{\varepsilon} = \frac{d\vec{\omega}}{dt} \, , \tag{9–9}$$

và quy ước có gốc tại $O$. Khác với chuyển động quay quanh một trục cố định, trong trường hợp này vectơ gia tốc góc $\vec{\varepsilon}$ không cùng phương với vectơ vận tốc góc $\vec{\omega}$ (H. 9-2). Vectơ gia tốc góc $\vec{\varepsilon}$ chính là vectơ vận tốc điểm đầu mút của vectơ vận tốc góc $\vec{\omega}$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_2.svg" alt="Hình 9-2" class="figure-img" /><p class="figure-caption">Hình 9-2</p></div>

Trường hợp vật quay tiến động đều. Khi đó chuyển động quay riêng và quay tiến động là đều ($\omega_1 = \text{const} \ ; \ \omega_2 = \text{const}$) còn chuyển động quay trương động không có ($\omega_3 = 0 \ ; \ \theta = \text{const}$). Đối với trường hợp này (H. 9-3) ta có :

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_3.svg" alt="Hình 9-3" class="figure-img" /><p class="figure-caption">Hình 9-3</p></div>

$$\vec{\omega} = \vec{\omega}_1 + \vec{\omega}_2, \tag{9–10}$$

$$\vec{\varepsilon} = \vec{\omega}_2 \wedge \vec{\omega}_1, \tag{9–11}$$

khi đó :

$$\begin{aligned}
\omega &= \sqrt{\omega_1^2 + \omega_2^2 + 2\omega_1\omega_2\cos\theta} = \text{const}, \\
\varepsilon &= \omega_1 \cdot \omega_2\sin\theta = \text{const}, \\
\alpha &= \arcsin\frac{\omega_1}{\omega}\sin\theta = \text{const} \ ; \quad \vec{\varepsilon} \perp \text{mp}(\vec{\omega}_1, \vec{\omega}_2).
\end{aligned} \tag{9–12}$$

### 9.1.2. Khảo sát chuyển động các điểm thuộc vật

*1. Vận tốc các điểm thuộc vật*

$$\vec{v} = \vec{\omega} \wedge \vec{r} \, , \tag{9–13}$$

trong đó $\vec{r} = \overrightarrow{OM}$, còn $\vec{\omega}$ được xác định theo (9–3).

Vậy

$$\vec{v} \begin{cases}
\text{phương : thẳng góc với mặt phẳng } (\overrightarrow{OP}, \vec{r}), \\
\text{chiều : thuận chiều quay của vật quanh } OP, \\
\text{giá trị : } v = h\omega \ ; \ h \text{ là khoảng cách từ } M \text{ đến trục } OP.
\end{cases}$$

Như vậy việc tính vectơ vận tốc của một điểm $M$ thuộc vật giống như tính vận tốc của điểm khi vật quay quanh trục $OP$ với vận tốc góc $\vec{\omega}$ (H. 9-4).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_4.svg" alt="Hình 9-4" class="figure-img" /><p class="figure-caption">Hình 9-4</p></div>

*2. Gia tốc của điểm thuộc vật*

$$\vec{a} = \vec{a}^\omega + \vec{a}^\varepsilon, \tag{9–14}$$

trong đó :

$$\vec{a}^\omega = \vec{\omega} \wedge \vec{v} \begin{cases}
\text{Phương : dọc đường thẳng góc vẽ từ } M \text{ đến } OP. \\
\text{Chiều : hướng từ } M \text{ đến } OP. \\
\text{Giá trị : } a^\omega = h\omega^2, \ h \text{ là khoảng cách từ } M \text{ đến } OP.
\end{cases}$$

$$\vec{a}^\varepsilon = \vec{\varepsilon} \wedge \vec{r} \begin{cases}
\text{Phương : thẳng góc với mặt phẳng } (\vec{\varepsilon}, \overrightarrow{OM}). \\
\text{Chiều : nhìn từ đầu mút } \vec{a}^\varepsilon \text{ thấy } \vec{\varepsilon} \text{ quay đến } \vec{r} \\
\quad \text{ngược chiều kim đồng hồ theo góc nhỏ.} \\
\text{Giá trị : } a^\varepsilon = h_1\varepsilon \ ; \ h_1 \text{ là khoảng cách từ } M \text{ đến} \\
\quad \text{trục mang vectơ } \vec{\varepsilon}.
\end{cases}$$

Quy tắc thực hành.

Vectơ $\vec{a}^\omega$ được xác định giống như $\vec{a}^n$ trong chuyển động quay quanh trục cố định khi lấy trục quay là trục mang vectơ $\vec{\omega}$ (tức trục $OP$) (H. 9-5). Vectơ $\vec{a}^\varepsilon$ được xác định giống như $\vec{a}^t$ trong chuyển động quay quanh trục cố định khi lấy trục quay là trục mang vectơ $\vec{\varepsilon}$ (H. 9-5).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_5.svg" alt="Hình 9-5" class="figure-img" /><p class="figure-caption">Hình 9-5</p></div>

---

## 9.2. HƯỚNG DẪN ÁP DỤNG

### 9.2.1. Phân loại bài toán

Trong các bài toán thường gặp có thể phân thành các loại :

*Loại I :* Biết trục quay tức thời (vật lăn không trượt trên vật khác cố định) và biết chuyển động của một điểm $A$ thuộc vật.

*Loại II :* Biết các chuyển động thành phần.

### 9.2.2. Phương pháp giải bài toán

Theo các bước sau :

*1 – Phân tích chuyển động của cơ hệ,* dạng chuyển động của từng vật thuộc hệ, các yếu tố động học của từng vật (các đại lượng đã biết, chưa biết), phát hiện vật quay quanh một điểm cố định và xác định loại bài toán.

*2 – Xác định các yếu tố động học của vật :*

– Vectơ vận tốc góc $\vec{\omega}$. Đối với bài toán loại I, vectơ $\vec{\omega}$ nằm dọc trục quay tức thời và có chiều phù hợp với vectơ $\vec{v}_A$, trị số bằng :

$$\omega = \frac{v_A}{h} \, ,$$

$h$ – là khoảng cách từ $A$ đến trục quay tức thời.

Đối với bài toán loại II, vectơ vận tốc góc $\vec{\omega}$ được xác định theo (9–3) và (9–2) hoặc (9–10) khi vật quay tiến động đều.

– Vectơ gia tốc góc $\vec{\varepsilon}$ được xác định theo công thức (9–9) tức là tìm vectơ vận tốc của điểm đầu mút của vectơ vận tốc góc.

Trong trường hợp vật quay tiến động đều, vectơ gia tốc góc được xác định theo công thức (9–11).

*3 – Xác định các yếu tố động học của các điểm thuộc vật.*

Vận tốc một điểm thuộc vật được xác định theo (9–13), còn gia tốc của nó được xác định theo (9–14).

---

## 9.3. BÀI GIẢI MẪU

### Thí dụ 9–1.

Trục $OA$ quay quanh trục $OB$ với vận tốc góc $\omega_o = \text{const}$, làm cho bánh răng nón $I$ lăn không trượt trên bánh răng nón $II$ cố định (H. 9–6). Cho $OA = a$, $OB = b$. Tìm :

– Vận tốc góc của bánh $I$, vận tốc điểm cao nhất $M$.

– Gia tốc góc của bánh $I$, gia tốc của điểm $M$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_6.svg" alt="Hình 9-6" class="figure-img" /><p class="figure-caption">Hình 9-6</p></div>

*Bài giải.*

*1 – Phân tích chuyển động.* Hệ khảo sát gồm có tay quay $OA$ quay đều quanh trục cố định thẳng đứng với vận tốc góc $\omega_o$, và bánh răng $I$ lăn không trượt trên bánh răng $II$ cố định. Chuyển động của bánh răng $I$ là chuyển động quay quanh điểm cố định $O$ (có thể phân tích chuyển động bánh răng $I$ gồm có chuyển động quay riêng quanh trục $OA$ và quay tiến động quanh trục $OB$).

*2 – Xác định vận tốc góc $\vec{\omega}$ và gia tốc góc $\vec{\varepsilon}$ của bánh răng $I$ :*

Bánh $I$ lăn không trượt trên bánh $II$ cố định, điểm tiếp xúc $P$ giữa hai bánh răng có vận tốc bằng không nên $OP$ là trục quay tức thời của bánh răng $I$, do đó nó chứa phương của vectơ vận tốc góc $\vec{\omega}$.

Trên bánh $I$ có điểm $A$ biết được vận tốc, vì nó là điểm nối giữa bánh $I$ và tay quay $OA$ nên giá trị của $\vec{\omega}$ được tính theo (9–13), trong đó

$$v_A = OA \cdot \omega_o = a\omega_o \ ; \qquad h = a\sin\alpha.$$

Vậy :

$$\omega = \frac{a\omega_o}{a\sin\alpha} = \frac{\omega_o}{\sin\alpha} = \text{const}.$$

Vectơ $\vec{\omega}$ có chiều như trên hình 9–6.

Vì vectơ $\vec{\omega}$ có giá trị không đổi, làm với trục thẳng đứng góc không đổi và quay quanh trục đó với vận tốc góc $\vec{\omega}_o$ nên vận tốc điểm đầu mút của nó được tính theo công thức.

$$\vec{\varepsilon} = \frac{d\vec{\omega}}{dt} = \vec{\omega}_o \wedge \vec{\omega}.$$

Vectơ $\vec{\varepsilon}$ có phương thẳng góc với mặt phẳng $(\vec{\omega}_o, \vec{\omega})$ hướng từ trong ra ngoài (kí hiệu $\odot$) và có giá trị :

$$\varepsilon = \omega_o \cdot \omega\cos\alpha = \frac{\omega_o^2}{\operatorname{tg}\alpha} = \frac{a}{b}\omega_o^2 \, .$$

*3 – Xác định vận tốc và gia tốc của điểm $M$* (H. 9–7)

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_7.svg" alt="Hình 9-7" class="figure-img" /><p class="figure-caption">Hình 9-7</p></div>

Vận tốc của điểm $M$ được tính theo (9–13) có phương thẳng góc với mặt phẳng $(\vec{\omega}, \overrightarrow{OM})$ có chiều hướng vào trong (kí hiệu $\otimes$) và có giá trị :

$$v_M = MD \cdot \omega = 2h\omega = 2a\sin\alpha \cdot \omega = 2a\omega_o = 2v_A.$$

Gia tốc của điểm $M$ được tính theo (9–14) :

$$\vec{a} = \vec{a}^\omega + \vec{a}^\varepsilon$$

trong đó : $\vec{a}^\omega = \vec{\omega} \wedge \vec{v}$ hướng thẳng góc với trục $OP$, có chiều từ $M$ đến $D$ và có giá trị

$$a^\omega = MD \cdot \omega^2 = 2a\omega^2\sin\alpha = \frac{2a\omega_o^2}{b}\sqrt{a^2 + b^2},$$

$\vec{a}^\varepsilon = \vec{\varepsilon} \wedge \overrightarrow{OM}$ có phương thẳng góc với mặt phẳng $(\overrightarrow{OM}, \vec{\omega})$ có chiều hướng như hình vẽ, có giá trị :

$$a^\varepsilon = OM \cdot \varepsilon = \frac{a}{\cos\alpha} \cdot \varepsilon = \frac{a\omega_o^2}{b}\sqrt{a^2 + b^2}.$$

Hai vectơ $\vec{a}^\omega$ và $\vec{a}^\varepsilon$ tạo với nhau một góc $(\pi - 2\alpha)$ nên

$$a = \sqrt{(a^\omega)^2 + (a^\varepsilon)^2 - 2a^\omega a^\varepsilon \cos 2\alpha} = \frac{a\omega_o^2}{b}\sqrt{a^2 + 9b^2}.$$

### Thí dụ 9–2.

Một đĩa bán kính $R$ quay đều với vận tốc góc $\omega_1$, quanh trục $O_1O_2$, trục này quay đều với vận tốc góc $\omega_2$ quanh trục thẳng đứng. Tìm vận tốc góc và gia tốc góc của đĩa, vận tốc và gia tốc của hai điểm mút đường kính $AB$ ở vị trí thẳng đứng (H. 9–8).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_8.svg" alt="Hình 9-8" class="figure-img" /><p class="figure-caption">Hình 9-8</p></div>

*Bài giải*

*1 – Phân tích chuyển động :* Hệ gồm khung quay quanh trục thẳng đứng cố định với vận tốc góc không đổi $\omega_2$ và đĩa quay đối với khung quanh trục $O_1O_2$ với vận tốc góc không đổi $\omega_1$ và cùng với khung quay quanh trục thẳng đứng với vận tốc góc không đổi $\omega_2$. Vậy đĩa có chuyển động quay quanh điểm cố định $O$, hơn nữa đó là chuyển động quay tiến động đều ($\overline{\omega}_1 = \text{const} \ ; \ \overline{\omega}_2 = \text{const} \ ; \ \theta = \dfrac{\pi}{2}$).

*2 – Xác định vectơ vận tốc góc $\vec{\omega}$ và gia tốc góc $\vec{\varepsilon}$.* Vectơ vận tốc góc $\vec{\omega}$ được xác định theo (9–10) trong đó $\vec{\omega}_1 \perp \vec{\omega}_2$. Vậy :

$$\omega = \sqrt{\omega_1^2 + \omega_2^2}.$$

Vectơ $\vec{\omega}$ có chiều như hình 9–8. Trục quay tức thời là trục mang vectơ $\vec{\omega}$.

Vectơ gia tốc góc $\vec{\varepsilon}$ được xác định theo

$$\vec{\varepsilon} = \vec{\omega}_2 \wedge \vec{\omega}_1.$$

Vậy

$$\varepsilon = \omega_1 \cdot \omega_2\sin\frac{\pi}{2} = \omega_1 \cdot \omega_2.$$

Vectơ $\vec{\varepsilon}$ có gốc tại $O$, vuông góc với mặt phẳng hình vẽ và hướng vào trong.

*3 – Xác định vận tốc và gia tốc các điểm $A$, $B$* (H. 9–8 ; 9–9). Tại thời điểm khảo sát, đĩa quay tức thời quanh $OP$ với vận tốc góc $\vec{\omega}$ do đó :

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_9.svg" alt="Hình 9-9" class="figure-img" /><p class="figure-caption">Hình 9-9</p></div>

$$v_B = v_A = h\omega = R\cos\alpha \cdot \omega = \omega R\frac{\omega_1}{\omega} = R\omega_1.$$

Các vectơ $\vec{v}_B$, $\vec{v}_A$ hướng ngược chiều nhau và cùng thẳng góc với mặt phẳng hình vẽ, ở đó $\vec{v}_A$ hướng từ trong ra ngoài.

Theo (9–14) ta có gia tốc điểm $A$ :

$$\vec{a}_A = \vec{a}_A^\omega + \vec{a}_A^\varepsilon,$$

trong đó : $\vec{a}_A^\omega = \vec{\omega} \wedge \vec{v}$ có phương thẳng góc với trục $OP$, hướng từ $A$ đến trục $OP$ và có giá trị :

$$a_A^\omega = h\omega^2 = R\cos\alpha \cdot \omega^2 = R \cdot \frac{\omega_1}{\omega}\omega^2 = R\omega_1\omega.$$

$\vec{a}_A^\varepsilon = \vec{\varepsilon} \wedge \overrightarrow{OA}$ có phương và chiều song song với trục $O_1O_2$ (H. 9–9) và có giá trị

$$a_A^\varepsilon = OA \cdot \varepsilon = R\omega_1\omega_2.$$

Dễ dàng thấy rằng $\vec{a}_A^\omega$ và $\vec{a}_A^\varepsilon$ làm với nhau góc $\dfrac{\pi}{2} - \alpha$

Do đó

$$a_A = \sqrt{(a_A^\omega)^2 + (a_A^\varepsilon)^2 + 2a_A^\omega a_A^\varepsilon \sin\alpha} = R\omega_1\sqrt{\omega_1^2 + 4\omega_2^2}.$$

Vectơ $\vec{a}_B$ cùng phương, ngược chiều và cùng giá trị với $\vec{a}_A$.

### Thí dụ 9–3.

Một vật rắn quay quanh điểm cố định theo phương trình :

$$\varphi = 30t \ ; \quad \psi = 2t \ ; \quad \theta = \frac{\pi}{6} \, .$$

Tìm vận tốc góc, gia tốc góc và trục quay tức thời của vật đối với hệ trục cố định và hệ trục động.

*Bài giải :* Gọi hệ trục cố định là $Ox_1y_1z_1$ và hệ trục động gắn liền với vật là $Oxyz$ (Hình 9–1).

Để tìm vectơ vận tốc góc $\vec{\omega}$ ta có thể tìm hình chiếu của nó đối với hệ trục cố định theo biểu thức (9–4) :

$$\begin{aligned}
\omega_{x_1} &= \dot{\varphi}\sin\theta\sin\psi + \dot{\theta}\cos\psi = 30\sin\frac{\pi}{6}\sin 2t = 15\sin 2t, \\
\omega_{y_1} &= -\dot{\varphi}\sin\theta\cos\psi + \dot{\theta}\sin\psi = -30\sin\frac{\pi}{6}\cos 2t = -15\cos 2t, \\
\omega_{z_1} &= \dot{\varphi}\cos\theta + \dot{\psi} = 30\cos\frac{\pi}{6} + 2 = 15\sqrt{3} + 2 = \text{const}.
\end{aligned}$$

Dễ dàng tính được giá trị của vectơ vận tốc góc $\omega$

$$\omega = \sqrt{(15\sin 2t)^2 + (-15\cos 2t)^2 + (15\sqrt{3} + 2)^2} = 31,7\text{ rad/s}.$$

Cũng có thể tìm giá trị của $\vec{\omega}$ theo công thức (9–6). Phương chiều của vectơ vận tốc góc $\vec{\omega}$ được xác định nhờ các cosin chỉ phương của chúng.

$$\begin{aligned}
\cos(Ox_1, \vec{\omega}) &= \frac{\omega_{x_1}}{\omega} \ ; \qquad \cos(\vec{\omega}, Oy_1) = \frac{\omega_{y_1}}{\omega} \, , \\
\cos(Oz_1, \vec{\omega}) &= \frac{\omega_{z_1}}{\omega} = \text{const}.
\end{aligned}$$

Dễ dàng thấy rằng, trong trường hợp này vật có chuyển động quay tiến động đều ($\omega_1 = \dot{\varphi} = 30\text{rad/s} = \text{const} \ ; \ \omega_2 = \dot{\psi} = 2\text{ rad/s} = \text{const} \ ; \ \omega_2 = \dot{\theta} = 0, \ \theta = \dfrac{\pi}{6}$).

Vậy có thể tìm vectơ vận tốc góc theo (9–10)

$$\vec{\omega} = \vec{\omega}_1 + \vec{\omega}_2,$$

$$\begin{aligned}
\omega &= \sqrt{\omega_1^2 + \omega_2^2 + 2\omega_1\omega_2\cos\frac{\pi}{6}} = \sqrt{30^2 + 2^2 + 2 \cdot 2 \cdot 30 \frac{\sqrt{3}}{2}} \\
&= 31,7\text{ rad/s}.
\end{aligned}$$

$$\sin(Oz_1, \vec{\omega}) = \frac{\omega_1}{\omega}\sin\theta = \text{const}.$$

Bằng cách như vậy ta nhận được kết quả tìm được ở trên.

Vectơ gia tốc góc $\vec{\varepsilon}$ dựa vào (9–11), có phương thẳng góc với mặt phẳng $(\vec{\omega}_1, \vec{\omega}_2)$ tức mặt phẳng $(Oz_1, Oz)$, có chiều khi nhìn từ đầu mút $\vec{\varepsilon}$ thấy $\vec{\omega}_2$ quay góc bé nhất ngược chiều kim đồng hồ gặp $\vec{\omega}_1$ và có giá trị tính theo (9–12) :

$$\varepsilon = \omega_1 \cdot \omega_2\sin\theta = 30 \cdot 2\sin\frac{\pi}{6} = 30\text{ rad/s}^2 = \text{const}.$$

Phương trình của trục quay tức thời đối với hệ trục cố định theo (9–7)

$$\frac{x_1}{15\sin 2t} = \frac{y_1}{-15\cos 2t} = \frac{z_1}{28} \, .$$

Để viết phương trình của trục quay tức thời đối với hệ trục động gắn liền với vật, chúng ta sử dụng (9–8), trong đó các hình chiếu của vectơ vận tốc góc $\vec{\omega}$ lên các trục của hệ động có dạng (9–5) :

$$\begin{aligned}
\omega_x &= \dot{\psi}\sin\theta\sin\varphi + \dot{\theta}\cos\varphi = 2\sin\frac{\pi}{6}\sin 30t = \sin 30t, \\
\omega_y &= \dot{\psi}\sin\theta\cos\varphi - \dot{\theta}\sin\varphi = 2\sin\frac{\pi}{6}\cos 30t = \cos 30t, \\
\omega_z &= \psi\cos\theta + \dot{\varphi} = 2\cos\frac{\pi}{6} + 30 = 30 + \sqrt{3} = \text{const}.
\end{aligned}$$

Phương trình của trục quay tức thời đối với hệ trục động có dạng :

$$\frac{x}{\sin 30t} = \frac{y}{\cos 30t} = \frac{z}{30 + \sqrt{3}} \, .$$

Phương trình này có thể xem là phương trình của mặt lăn viết dưới dạng tham số $t$. Bằng cách khử $t$ chúng ta nhận được phương trình của mặt lăn.

$$F\left(\frac{x}{z}, \frac{y}{z}\right) = \frac{x^2}{z^2} + \frac{y^2}{z^2} - \frac{1}{(30 + \sqrt{3})^2} = 0.$$

Tương tự, chúng ta nhận được phương trình của mặt căn cứ

$$G\left(\frac{x_1}{z_1}, \frac{y_1}{z_1}\right) = \frac{x_1^2}{z_1^2} + \frac{y_1^2}{z_1^2} - \frac{1}{\left(\dfrac{28}{15}\right)^2} = 0.$$

---

## 9.4. BÀI TẬP

**9–1.** Một hình nón lăn không trượt theo mặt ngang, đỉnh $O$ cố định. Tâm $C$ của đáy nón chuyển động đều, trở về vị trí cũ sau một giây. Tìm vận tốc mút $B$ của đường kính $AB$, gia tốc góc của hình nón và gia tốc các điểm $A$ và $B$. (9–10).

Cho chiều cao $CO = 18\text{cm}$ ; góc $\widehat{AOB} = 90^\circ$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_10.svg" alt="Hình 9-10" class="figure-img" /><p class="figure-caption">Hình 9-10</p></div>

*Trả lời :* $v_B = 36\pi\sqrt{2}\text{ cm/s}$.

$\varepsilon = 39,5\text{ rad/s}^2$ ; $\vec{\varepsilon}$ hướng thẳng góc với $OA$ và $OB$.

$a_A = 1000\text{ cm/s}^2$ ; $\vec{a}_A$ song song với $OB$.

$a_B = 1000\sqrt{2}\text{ cm/s}^2$ ; $\vec{a}_B$ trong mặt phẳng $AOB$ và tạo với $OB$ góc $45^\circ$.

**9–2.** Hình nón $II$ chuyển động trên mặt hình nón cố định $I$, đường cao $OO_1 = 10\text{cm}$ có vận tốc $120\text{ vòng/phút}$. Góc phẳng nón $I$ là $120^\circ$, nón $II$ là $60^\circ$ (H. 9–11).

Tìm vận tốc và gia tốc điểm $A$ và điểm $B$ của hình nón $II$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_11.svg" alt="Hình 9-11" class="figure-img" /><p class="figure-caption">Hình 9-11</p></div>

*Trả lời :* $v_A = 0$ ; $v_B = 80\pi\text{ cm/s}$ ; $a_A = 320\pi^2\text{ cm/s}^2$ ;

$a_B^\omega = 610\pi^2\text{ cm/s}^2$ ; $a_B^\varepsilon = 320\pi^2\text{ cm/s}^2$.

**9–3.** Hai con lăn hình nón cụt lăn không trượt trên một đế cố định. Bán kính đáy của con lăn là $R = 10\sqrt{2}\text{cm}$, góc ở đỉnh $2\alpha = 90^\circ$, vận tốc tâm $A$ là $v_A = 20\text{ cm/s}$ (H. 9–12).

Tìm vận tốc và gia tốc điểm cao nhất $B$ và điểm tiếp xúc $C$ của con lăn.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_12.svg" alt="Hình 9-12" class="figure-img" /><p class="figure-caption">Hình 9-12</p></div>

*Trả lời :* $v_C = 0$ ; $v_B = 40\text{ cm/s}$ ;

$a_C = 40\text{ cm/s}^2$ ; $a_B = 40\sqrt{5}\text{ cm/s}^2$.

**9–4.** Một máy nghiền có sơ đồ cấu trúc như hình 9–13. Quả cầu rỗng $II$ chứa bi và vật liệu nghiền được lắp trơn trên khung $I$ quay được quanh trục nằm ngang nhờ tay quay $G$. Khi quay tay quay $G$, khung $I$ quay quanh trục $AB$ làm cho trục $CD$ chuyển động, do đó bánh răng nón $E$ gắn cứng với trục $CD$ – chuyển động ăn khớp với bánh $F$ cố định. Bán kính của bánh $E$ là $r$, của bánh $F$ là $R$. Tìm vận tốc góc và gia tốc góc của quả cầu $II$, nếu tay quay có vận tốc góc $\omega_o = \text{const}$, góc giữa trục $AB$ và $CD$ là $\alpha$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_13.svg" alt="Hình 9-13" class="figure-img" /><p class="figure-caption">Hình 9-13</p></div>

*Trả lời :* $\omega = \dfrac{\omega_o}{r}\sqrt{R^2 + r^2 + 2Rr\cos\alpha}$ ; $\varepsilon = \dfrac{R\omega_o^2}{r}\sin\alpha$.

**9–5.** Khung vuông $ABCD$ quay quanh cạnh $AB$ với vận tốc $2\text{ vòng/phút}$. Một đĩa quay quanh đường chéo $BD$ của khung với vận tốc $2\text{ vòng/phút}$. Tìm vận tốc góc, gia tốc góc của đĩa (H. 9–14).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_14.svg" alt="Hình 9-14" class="figure-img" /><p class="figure-caption">Hình 9-14</p></div>

*Trả lời :* $\omega = 0,39\text{ rad/s}$ ; $\varepsilon = 0,031\text{ rad/s}^2$.

**9–6.** Đĩa $A$ và đĩa $B$ quay độc lập đối với nhau quanh trục thẳng đứng làm cho đĩa $C$ chuyển động, do đó trục $HI$ của nó quay quanh trục thẳng đứng. Bán kính của đĩa $C$ là $r = 0,05\text{ m}$, trục $HI = \dfrac{1}{14}\text{m}$, các điểm tiếp xúc có vận tốc $v_1 = 3\text{ m/s}$ và $v_2 = 4\text{ m/s}$.

Tìm vận tốc tâm $H$, vận tốc góc và gia tốc góc của đĩa $C$ (H. 9–15).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_15.svg" alt="Hình 9-15" class="figure-img" /><p class="figure-caption">Hình 9-15</p></div>

*Trả lời :* $v = 0,5\text{ m/s}$ ; $\omega = 70,35\text{ rad/s}$ ; $\varepsilon = 490\text{ rad/s}^2$.

**9–7.** Con quay quay riêng quanh trục $OB$ với vận tốc góc không đổi $\omega_1\text{ rad/s}$, đồng thời trục $OB$ tạo nên hình nón đều. Sau $1$ phút đỉnh $B$ tạo được $n$ vòng, góc $BOS = \alpha$. Tìm vận tốc góc và gia tốc góc của con quay. (H. 9–16).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_9_16.svg" alt="Hình 9-16" class="figure-img" /><p class="figure-caption">Hình 9-16</p></div>

*Trả lời :* $\omega = \sqrt{\omega_1^2 + \left(\dfrac{\pi n}{30}\right)^2 + 2\omega_1\dfrac{\pi n}{30}\cos\alpha}$ ; $\varepsilon = \omega_1\dfrac{\pi n}{30}\sin\alpha$.

**9–8.** Tìm phương trình trục quay tức thời và trị số vận tốc góc của vật, biết rằng điểm $M_1(0, 0, 2)$ có hình chiếu vận tốc trên các trục toạ độ gắn chặt với vật là $v_x = 1\text{ m/s}$ ; $v_y = 2\text{ m/s}$ ; $v_z = 0$ và điểm $M_2(0, 1, 2)$ có phương vận tốc tạo với hệ trục nói trên các góc có cosin chỉ phương lần lượt là : $-\dfrac{2}{3}$ ; $\dfrac{2}{3}$ ; $-\dfrac{1}{3}$.

*Trả lời :*

$$\begin{cases}
x + 2y = 0, \\
3x + z = 0,
\end{cases} \qquad \omega = 3,2\text{ rad/s}.$$

**9–9.** Vật rắn quay quanh điểm cố định theo phương trình :

$$\varphi = nt \ ; \quad \psi = \frac{\pi}{2} + ant \ ; \quad \theta = \frac{\pi}{3} \, .$$

a) Tìm hình chiếu của vectơ vận tốc góc và gia tốc góc lên hệ trục cố định nếu $a$ và $n$ là những hằng số ; b) Viết phương trình của trục quay tức thời đối với hệ trục cố định ; với giá trị nào của $a$, trục quay tức thời sẽ tạo một mặt phẳng ?

*Trả lời :*

a) $\omega_{x_1} = -\dfrac{n\sqrt{3}}{2}\cos(ant)$ ; $\omega_{y_1} = \dfrac{n\sqrt{3}}{2}\sin(ant)$ ; $\omega_{z_1} = n\left(a + \dfrac{1}{2}\right)$ ;

$\varepsilon_{x_1} = -\dfrac{an^2\sqrt{3}}{2}\sin(ant)$ ; $\varepsilon_{y_1} = \dfrac{an^2\sqrt{3}}{2}\cos(ant)$ ; $\varepsilon_{z_1} = 0$.

b) $a = -\dfrac{1}{2}$.
