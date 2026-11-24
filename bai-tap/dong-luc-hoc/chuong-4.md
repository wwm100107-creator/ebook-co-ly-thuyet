---
title: "Bài Tập Động Lực Học - Chương 4: Phương Pháp Tĩnh Hình Học - Động Lực"
description: "Phương pháp tĩnh hình học - động lực, lực quán tính, nguyên lý Đalămbe, bài giải mẫu và 15 bài tập có đáp số"
layout: doc
---

# Chương 4: PHƯƠNG PHÁP TĨNH HÌNH HỌC – ĐỘNG LỰC

Trong chương này trình bày một phương pháp giải các bài toán động lực học nhờ sử dụng các phương trình cân bằng tĩnh học (vectơ chính và mômen chính của hệ lực đồng thời triệt tiêu) được gọi là phương pháp tĩnh hình học – động lực. Cơ sở lí thuyết của phương pháp được trình bày là một hệ quả của nguyên lý Đalămbe.

---

## 4.1. CƠ SỞ LÝ THUYẾT

### 4.1.1. Lực quán tính

**a) Đối với chất điểm.** Một chất điểm có khối lượng $m$, chuyển động với gia tốc $a$, lực quán tính của chất điểm được xác định theo biểu thức :

$$\vec{F}^{\text{qt}} = -m\vec{a} \tag{4–1}$$

Như vậy lực quán tính có cùng phương, ngược chiều và có giá trị tỷ lệ với giá trị của gia tốc.

Trong hệ toạ độ Đề các, lực quán tính của chất điểm được xác định nhờ các hình chiếu của nó trên các trục toạ độ

$$\vec{F}^{\text{qt}} \begin{cases} F_x^{\text{qt}} = -ma_x = -m\ddot{x} \\ F_y^{\text{qt}} = -ma_y = -m\ddot{y} \\ F_z^{\text{qt}} = -ma_z = -m\ddot{z} \end{cases} \tag{4–2}$$

Trong hệ trục toạ độ tự nhiên, ta có :

$$\vec{F}^{\text{qt}} \begin{cases} F_\tau^{\text{qt}} = -ma^\tau = -m\ddot{s} \\[4pt] F_n^{\text{qt}} = -ma^n = -m\dfrac{v^2}{\rho} \\[6pt] F_b^{\text{qt}} = -ma^b = 0 \end{cases} \tag{4–3}$$

**b) Đối với cơ hệ.** Giả sử cơ hệ gồm $N$ chất điểm $M_k$, chuyển động với các gia tốc $\vec{a}_k$ ($k = \overline{1, N}$). Đối với chất điểm $M_k$ có lực quán tính tương ứng $\vec{F}_k^{\text{qt}} = -m_k\vec{a}_k$. Đối với cơ hệ ta có hệ lực quán tính :

$$(\vec{F}_1^{\text{qt}}, \vec{F}_2^{\text{qt}}, \dots, \vec{F}_N^{\text{qt}}) \, ;$$

nó được đánh giá một cách thuận tiện thường qua kết quả thu gọn về một tâm cho trước : lực thu gọn $\vec{R}_o^{\text{qt}}$ (được biểu diễn bằng vectơ chính của hệ lực quán tính đặt tại tâm thu gọn $O$) và ngẫu lực thu gọn $\vec{M}_o^{\text{qt}}$ (được biểu diễn bằng mômen chính của hệ lực quán tính đối với tâm thu gọn $O$) :

$$\begin{aligned}
\vec{R}_o^{\text{qt}} &= \sum_{k=1}^{N} \vec{F}_k^{\text{qt}} \, ; \\
\vec{M}_o^{\text{qt}} &= \sum_{k=1}^{N} \vec{m}_o(\vec{F}_k^{\text{qt}})
\end{aligned} \tag{4–4}$$

Kết quả thu gọn hệ lực quán tính đặc biệt quan trọng đối với trường hợp vật rắn, nó được xem là một cơ hệ gồm vô số các chất điểm và do đó ta có hệ vô số các lực quán tính. Dưới đây là bảng tóm tắt các kết quả thu gọn của hệ lực quán tính của vật rắn (Bảng 4–1).

#### Bảng 4–1

| Dạng chuyển động của vật rắn | Tâm thu gọn | Kết quả thu gọn hệ lực quán tính của vật về tâm thu gọn |
| :--- | :--- | :--- |
| Vật rắn chuyển động tịnh tiến | Khối tâm $C$ của vật | Hợp lực $\vec{R}_c^{\text{qt}} = -M\vec{a}_c \, ;$ |
| Tấm phẳng quay quanh trục cố định vuông góc với tấm | Giao của trục quay và tâm $O$ của tấm | $\vec{R}_o^{\text{qt}} = -M\vec{a}_c \, ;$<br>$\vec{M}_o^{\text{qt}} = -J_o \cdot \vec{\varepsilon}$ |
| Tấm phẳng chuyển động trong mặt phẳng của nó | Khối tâm $C$ của tấm | $\vec{R}_c^{\text{qt}} = -M\vec{a}_c \, ;$<br>$\vec{M}_c^{\text{qt}} = -J_c\vec{\varepsilon}_s$ |
| Vật rắn quay quanh một trục cố định trong không gian | Điểm $O$ nằm trên trục quay (hệ trục $Oxyz$ gắn liền vào vật quay) | $\vec{R}_o^{\text{qt}} = -M\vec{a}_c$<br>$\vec{M}_o^{\text{qt}} \Rightarrow$<br>$\overline{M}_x^{\text{qt}} = -J_{yz}\omega^2 + J_{zx}\overline{\varepsilon}$<br>$\overline{M}_y^{\text{qt}} = J_{yz}\overline{\varepsilon} + J_{zx}\omega^2$<br>$\overline{M}_z^{\text{qt}} = -J_z\overline{\varepsilon}$ |
| Vật rắn quay quanh một điểm cố định $O$ | Điểm cố định $O$ (hệ trục $Oxyz$ gắn liền vào vật và là hệ trục quán tính chính tại $O$) | $\vec{R}_c^{\text{qt}} = -M\vec{a}_c$<br>$\vec{M}_o^{\text{qt}} \Rightarrow$<br>$M_x^{\text{qt}} = -J_x\dfrac{d\omega_x}{dt} + (J_y - J_z)\omega_y\omega_z \, ;$<br>$M_y^{\text{qt}} = -J_y\dfrac{d\omega_y}{dt} + (J_z - J_x)\omega_z\omega_x \, ;$<br>$M_z^{\text{qt}} = -J_z\dfrac{d\omega_z}{dt} + (J_x - J_y)\omega_x\omega_y \, ;$ |
| Vật rắn chuyển động tổng quát | Khối tâm $C$ của vật (hệ trục $Cxyz$ gắn liền vào vật và là hệ trục quán tính chính tại $C$) | $\vec{R}_c^{\text{qt}} = -M\vec{a}_c$<br>$\vec{M}_c^{\text{qt}} \Rightarrow$<br>$\overline{M}_x^{\text{qt}} = -J_x\dfrac{d\omega_x}{dt} + (J_y - J_z)\omega_y\omega_z \, ;$<br>$\overline{M}_y^{\text{qt}} = -J_y\dfrac{d\omega_y}{dt} + (J_z - J_x)\omega_z\omega_x \, ;$<br>$\overline{M}_z^{\text{qt}} = -J_z\dfrac{d\omega_z}{dt} + (J_x - J_y)\omega_x\omega_y \, ;$ |

---

### 4.1.2. Nguyên lý Đalămbe

**a) Nguyên lý.** Ở mỗi thời điểm có một hệ lực cân bằng gồm các lực thật tác dụng lên cơ hệ và các lực quán tính của các chất điểm thuộc hệ

$$(\text{các } \vec{F}_k^{\text{thật}}, \, \text{các } \vec{F}_k^{\text{qt}}) = 0 \tag{4–5}$$

**b) Hệ quả.** Khi khảo sát các đặc trưng hình học của hệ lực (4–5) (vectơ chính và momen chính của hệ lực) ta có hệ quả sau :

$$\begin{aligned}
&\sum_{k=1}^{N} \vec{F}_k^e + \sum_{k=1}^{N} \vec{F}_k^{\text{qt}} = 0 \, ; \\
&\sum_{k=1}^{N} \vec{m}_o(\vec{F}_k^e) + \sum_{k=1}^{N} \vec{m}_o(\vec{F}_k^{\text{qt}}) = 0
\end{aligned} \tag{4–6}$$

---

### 4.1.3. Phương pháp tĩnh hình học – động lực

Sử dụng hệ quả (4–6) có thể giải các bài toán động lực học bằng cách viết các phương trình cân bằng cho hệ lực gồm các ngoại lực và các lực quán tính : sáu phương trình cân bằng đối với hệ lực không gian và ba phương trình đối với hệ lực phẳng. Phương pháp như vậy được gọi là phương pháp tĩnh hình học – động lực.

---

## 4.2. HƯỚNG DẪN ÁP DỤNG

Phương pháp tĩnh hình học – động lực thường được áp dụng để giải các bài toán sau :

– *Bài toán thứ nhất :* Khi đã biết chuyển động của hệ, tìm một số lực tác dụng lên cơ hệ, chủ yếu là tìm các phản lực động lực.

– *Bài toán thứ hai :* Viết phương trình vi phân chuyển động cơ hệ, đặc biệt, các phương trình vi phân chuyển động của vật rắn : vật rắn chuyển động tịnh tiến, chuyển động quay quanh một trục cố định, chuyển động song phẳng... trong trường hợp riêng, tìm điều kiện cân bằng tương đối của cơ hệ.

– Phương pháp tĩnh hình học – động lực trong một số trường hợp có thể áp dụng để giải đồng thời cả hai bài toán động lực học, chủ yếu đối với bài toán chuyển động của một vật rắn chịu liên kết.

Khi sử dụng phương pháp tĩnh hình học – động lực có thể theo trình tự sau :

– Phân tích chuyển động của hệ vật khảo sát và xác định trạng thái gia tốc của từng vật thuộc cơ hệ.

– Đặt ngoại lực tác dụng lên cơ hệ và các lực quán tính của các chất điểm thuộc hệ. Đối với vật rắn thì sử dụng các kết quả thu gọn hệ lực quán tính (Bảng 4–1).

– Viết các phương trình cân bằng cho hệ lực gồm các ngoại lực tác dụng lên cơ hệ và các lực quán tính của các chất điểm thuộc cơ hệ (đối với vật rắn thì sử dụng các kết quả thu gọn hệ lực quán tính).

– Giải các phương trình đã nhận được và nhận xét các kết quả.

*Chú thích :*

– Đối với bài toán thứ nhất ta nhận được hệ phương trình đại số, nói chung việc giải bài toán không có gì khó khăn. Đối với bài toán thứ hai ta chỉ lập được phương trình vi phân chuyển động của cơ hệ và để tìm chuyển động của cơ hệ cần phải tích phân hệ phương trình vi phân nhận được.

– Phương pháp tĩnh hình học – động lực cho phép giải bài toán động lực học một vật rắn một cách hoàn toàn (cả bài toán thuận và ngược). Đối với hệ vật rắn cần phải đưa về các bài toán một vật rắn.

– Phương pháp tĩnh hình học – động lực có một thuận lợi đặc biệt ở chỗ là tại mỗi thời điểm có thể lập các phương trình cân bằng (4–6) trong một hệ quy chiếu bất kỳ (quán tính hoặc không quán tính) đối với hệ lực gồm các ngoại lực và các lực quán tính. Tuy nhiên cần chú ý rằng các lực quán tính cần phải được tính trong hệ quy chiếu quán tính.

---

## 4.3. BÀI GIẢI MẪU

### Thí dụ 4–1

Một vật nặng trọng lượng $P$ được kéo lên nhanh dần đều với gia tốc $a$ theo phương thẳng đứng nhờ dây cáp. Tìm sức căng của dây cáp (H. 4–1).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_1.svg" alt="Hình 4-1" class="figure-img" />
  <p class="figure-caption">Hình 4-1</p>
</div>

*Bài giải.* Vật khảo sát : vật $A$ chuyển động tịnh tiến thẳng đứng.

– Các ngoại lực tác dụng lên vật gồm trọng lực $\vec{P}$ và sức căng $\vec{T}$ của dây cáp.

– Lực quán tính của vật chuyển động tịnh tiến $A$

$$\vec{F}^{\text{qt}} = -\frac{P}{g}\vec{a}$$

– Viết phương trình cân bằng cho hệ lực :

$$(\vec{P}, \vec{T}, \vec{F}^{\text{qt}}).$$

Phương trình hình chiếu các lực lên phương thẳng đứng cho ta :

$$P + F^{\text{qt}} - T = 0$$

Từ đó :

$$T = P + F^{\text{qt}} = P\left(1 + \frac{a}{g}\right).$$

*Nhận xét :*

– Khi vật đứng yên : $T_t = P$, $T_t$ là sức căng tĩnh.

– Khi vật chuyển động với gia tốc $a$

$$T = P\left(1 \pm \frac{a}{g}\right) = T_t \pm T_{\text{đ}},$$

trong đó lấy dấu $+$ hoặc $-$ tùy thuộc gia tốc $a$ hướng lên hoặc xuống. Thành phần $T_{\text{đ}} = P\dfrac{a}{g}$ được gọi là phản lực động lực.

– Khi vật chuyển động đều ($v = \text{hằng}$, $a = 0$)

$$T = T_t$$

Vậy khi vật chuyển động có gia tốc sức căng trong dây chênh lệch một lượng $T_{\text{đ}} = P\dfrac{a}{g}$ so với trường hợp vật chuyển động tịnh tiến đều.

---

### Thí dụ 4–2

Hai chất điểm $M_1$ và $M_2$ có khối lượng là $m_1$ và $m_2$ được gắn vào trục quay $AB$ bằng hai thanh $O_1M_1$ và $O_2M_2$ vuông góc với $AB$ và có độ dài tương ứng $l_1$ và $l_2$. Góc giữa hai mặt phẳng $ABM_1$ và $ABM_2$ bằng $\dfrac{\pi}{2}$.

Cho $O_1A = a$, $O_2B = b$, $O_1O_2 = d$. Trục $AB$ quay với tốc độ góc $\omega$ không đổi.

Bỏ qua ma sát và tác dụng của trọng lực. Tìm áp lực của trục quay $AB$ lên các ổ đỡ (H. 4–2).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_2.svg" alt="Hình 4-2" class="figure-img" />
  <p class="figure-caption">Hình 4-2</p>
</div>

*Bài giải.* Khảo sát cơ hệ gồm trục quay $AB$ cùng hai chất điểm $M_1, M_2$. Các ngoại lực tác dụng lên cơ hệ gồm hai phản lực $\vec{R}_A, \vec{R}_B$ vì bỏ qua tác dụng của trọng lực, các lực quán tính gồm $\vec{F}_1^{\text{qt}}$ và $\vec{F}_2^{\text{qt}}$.

Viết phương trình cân bằng cho hệ lực :

$$(\vec{R}_A, \vec{R}_B, \vec{F}_1^{\text{qt}}, \vec{F}_2^{\text{qt}}).$$

Chọn hệ trục toạ độ $Axyz$ như sau : trục $Ax$ luôn luôn song song với $O_1M_1$, trục $Ay$ luôn luôn song song với $O_2M_2$, trục $Az$ trùng với trục $AB$. Như vậy hệ trục $Axyz$ gắn liền vào vật quay và cùng với vật quay quanh trục $AB$ với vận tốc góc $\omega$.

Ký hiệu các hình chiếu của các phản lực $\vec{R}_A, \vec{R}_B$ lên các trục toạ độ lần lượt là

$$\vec{R}_A \begin{cases} X_A \\ Y_A \\ Z_A \end{cases} \qquad \vec{R}_B \begin{cases} X_B \\ Y_B \\ 0 \end{cases}$$

Còn các lực quán tính có phương chiều như hình vẽ và có trị số :

$$\begin{aligned}
F_1^{\text{qt}} &= m_1 a_{M1} = m_1 l_1 \omega^2 \, ; \\
F_2^{\text{qt}} &= m_2 a_{M2} = m_2 l_2 \omega^2.
\end{aligned}$$

Viết các phương trình cân bằng cho hệ lực :

$$(\vec{X}_A, \vec{Y}_A, \vec{Z}_A, \vec{X}_B, \vec{Y}_B, \vec{F}_1^{\text{qt}}, \vec{F}_2^{\text{qt}})$$

ta được :

$$\begin{aligned}
\sum X &= X_A + X_B + F_1^{\text{qt}} = 0 \, ; \\
\sum Y &= Y_A + Y_B + F_2^{\text{qt}} = 0 \, ; \\
\sum Z &= Z_A = 0 \, ; \\
\sum m_x(\vec{F}) &= -F_2^{\text{qt}}(a + d) - Y_B(a + b + d) = 0 \, ; \\
\sum m_y(\vec{F}) &= X_B(a + b + d) + F_1^{\text{qt}} \cdot a = 0.
\end{aligned}$$

Giải hệ phương trình vừa nhận được ta có :

$$\begin{aligned}
X_A &= -\frac{a + d}{a + b + d}m_1 l_1 \omega^2 \, ; \\
Y_A &= -\frac{b}{a + b + d}m_2 l_2 \omega^2 \, ; \\
Z_A &= 0 \, ; \\
X_B &= -\frac{a}{a + b + d}m_1 l_1 \omega^2 \, ; \\
Y_B &= -\frac{a + d}{a + b + d}m_2 l_2 \omega^2.
\end{aligned}$$

Chú ý rằng bài toán này chính là mô hình bài toán tính phản lực động lực của ổ trục lên trục quay trong thực tế.

---

### Thí dụ 4–3

Treo một vật nặng có trọng lượng $P$ vào một điểm $O$ cố định bằng một sợi dây mềm mảnh, nhẹ và không giãn, có chiều dài bằng $l$. Khảo sát chuyển động ổn định của chất điểm theo một đường tròn với tốc độ $v$ không đổi. Tìm quan hệ giữa $v$ và góc lệch $\alpha = \text{const}$ của dây treo với đường thẳng đứng qua $O$ trong chuyển động đó, (H. 4–3).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_3.svg" alt="Hình 4-3" class="figure-img" />
  <p class="figure-caption">Hình 4-3</p>
</div>

*Bài giải.* Khảo sát vật nặng như một chất điểm chuyển động đều trên đường tròn nằm trong mặt phẳng ngang cố định với tâm $I$, bán kính $IM = l\sin\alpha$.

Áp dụng phương pháp tĩnh hình học – động lực để giải bài toán này.

Ngoại lực tác dụng lên chất điểm gồm :

– Trọng lượng $\vec{P}$, sức căng dây $\vec{T}$.

Lực quán tính của chất điểm $\vec{F}^{\text{qt}} = -m\vec{a}$ có giá trị :

$$F^{\text{qt}} = ma^n = \frac{Pv^2}{gl\sin\alpha} \tag{a}$$

Viết các phương trình cân bằng cho hệ lực

$$(\vec{P}, \vec{T}, \vec{F}^{\text{qt}}) \tag{b}$$

Chọn hệ trục động $Oxyz$ như hình vẽ ta có các phương trình hình chiếu như sau :

$$\begin{aligned}
F^{\text{qt}} - T\sin\alpha &= 0 \, ; \\
-P + T\cos\alpha &= 0
\end{aligned} \tag{c}$$

Từ hai phương trình này ta tìm được liên hệ giữa $\alpha$ và $v$ :

$$v^2 = gl\sin\alpha\,\text{tg}\alpha.$$

Cũng có thể giải bài toán trên nhờ điều kiện cân bằng tương đối được thiết lập trong chương VII.

$$-P + T - F^{\text{qt}} = 0.$$

---

### Thí dụ 4–4

Một thanh thẳng, mảnh, đồng chất, chiều dài $OA = a$ có thể quay quanh trục đi qua $O$ và thẳng góc với mặt phẳng chứa thanh và trục $BD$. Thanh $OA$ cùng với trục $BD$ quay quanh trục thẳng đứng $BD$ với vận tốc góc không đổi $\omega_o$. Trong chế độ quay ổn định đó thanh $OA$ luôn luôn làm với trục $BD$ một góc không đổi $\varphi$ (tức thanh $OA$ quét nên một mặt nón tròn xoay với góc ở đỉnh $2\varphi$).

Tìm sự liên hệ giữa tốc độ góc $\omega_o$ và góc nghiêng $\varphi$ trong chế độ ổn định đó. Bỏ qua ma sát (H. 4–4).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_4.svg" alt="Hình 4-4" class="figure-img" />
  <p class="figure-caption">Hình 4-4</p>
</div>

*Bài giải.* Khảo sát thanh $OA$ chuyển động. Các ngoại lực tác dụng lên thanh $OA$ gồm trọng lực $\vec{P}$ và phản lực bản lề $\vec{R}_o$.

Để tìm kết quả thu gọn của hệ lực quán tính của thanh $OA$ ta xem thanh $OA$ là hệ vô số các chất điểm $M_k$, có khối lượng $m_k$ và gia tốc $\vec{a}_k$. Lực quán tính của mỗi phân tố $M_k$ là ;

$$\vec{F}_k^{\text{qt}} = -m_k\vec{a}_k.$$

Vì góc $\varphi = \text{const}$ nên cả thanh $OA$ và trục quay $BD$ được xem như là một vật rắn quay đều quanh trục quay $z$ với vận tốc góc không đổi $\omega_o$. Do đó $\vec{a}_k$ có phương vuông góc với trục quay $z$, có chiều hướng từ $M_k$ đến trục $z$ và có giá trị :

$$a_k = s_k\sin\varphi\,\omega_o^2.$$

do đó các lực quán tính của các phần tử $M_k$ (lực quán tính ly tâm) tạo thành hệ lực phẳng song song, có phương vuông góc với trục $BD$, có chiều hướng từ trái sang phải. Dễ dàng chỉ ra rằng khi thu gọn hệ lực đó về tâm $O$, ta được :

$$\vec{R}_o^{\text{qt}} = -M\vec{a}_c \, ; \quad \overline{M}_o^{\text{qt}} = J_o \omega_o^2 \sin\varphi\cos\varphi$$

trong đó $M$ là khối lượng thanh $OA$ ; $J_o = \dfrac{Ma^2}{3}$ là mômen quán tính của thanh $OA$ đối với trục qua $O$ và vuông góc với mặt phẳng chứa $OA$ và trục $z$ ; $\vec{a}_c$ – gia tốc khối tâm $C$, có phương vuông góc với trục quay $z$, có chiều hướng từ $C$ đến trục $z$ và có giá trị :

$$a_c = \frac{a}{2}\sin\varphi\,\omega_o^2$$

Từ kết quả thu gọn hệ lực, ta đi đến kết luận rằng hệ lực quán tính của thanh $OA$ có hợp lực, có phương chiều và giá trị được biểu diễn bằng vectơ chính của hệ lực ($\vec{R}^{\text{qt}} = -M\vec{a}_c$) và cách tâm thu gọn $O$ một đoạn $h$ :

$$h = \frac{M_o^{\text{qt}}}{R^{\text{qt}}} = \frac{J_o \sin\varphi\cos\varphi}{M\dfrac{a}{2}\sin\varphi\,\omega_o^2}\omega_o^2 = \frac{2}{3}a\cos\varphi$$

Nói khác đi hợp lực $\vec{R}^{\text{qt}}$ của hệ lực quán tính có phương chiều và giá trị được biểu diễn bằng vectơ chính của hệ lực ($\vec{R}^{\text{qt}} = -M\vec{a}_c$) và đi qua trọng tâm của tam giác phân bố lực quán tính.

Viết phương trình cân bằng (phương trình momen) cho hệ lực :

$$(\vec{P}, \vec{R}_o, \vec{R}^{\text{qt}})$$

ta được :

$$\sum \overline{m}_o(\vec{F}) = -P\frac{a}{2}\sin\varphi + R^{\text{qt}}\frac{2}{3}a\cos\varphi = 0.$$

Vì :

$$R_{\text{qt}} = Ma_c = M\frac{a}{2}\sin\varphi\,\omega_o^2$$

nên :

$$-P\frac{a}{2}\sin\varphi + M\frac{a}{2}\sin\varphi\,\omega_o^2 \frac{2}{3}a\cos\varphi = 0.$$

Với $\sin\varphi \ne 0$ ta nhận được :

$$\cos\varphi = \frac{3}{2}\frac{g}{a\omega_o^2}.$$

*Chú ý :*

1. Kết quả thu gọn hệ lực quán tính có thể nhận được trực tiếp từ phần tĩnh học vật rắn.

2. Có thể giải bài toán trên bằng cách sử dụng điều kiện cân bằng tương đối (xem chương VII).

---

### Thí dụ 4–5

Một bánh đà có trọng lượng $P$, bán kính $R$ được xem như một vành tròn đồng chất. Bánh đà quay đều quanh trục đối xứng vuông góc với mặt phẳng của nó với tốc độ góc bằng $n$ vòng trong một phút.

Tìm ứng lực pháp tuyến đối với một tiết diện xuyên tâm của bánh đà do hiệu ứng quán tính gây ra.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_5.svg" alt="Hình 4-5" class="figure-img" />
  <p class="figure-caption">Hình 4-5</p>
</div>

*Bài giải.* Vật khảo sát : Tưởng tượng cắt bánh đà làm đôi bởi một mặt phẳng đối xứng đi qua trục quay và xét phần nửa bánh đà bên phải (bỏ qua trọng lực).

Các ngoại lực tác dụng lên nửa bánh đà bên phải là $\vec{N}_1, \vec{N}_2$ đó là các ứng lực cần tìm.

Các lực quán tính của nửa bánh đà bên phải là một hệ lực đồng quy qua tâm $O$ của bánh đà, nó có hợp lực $\vec{R}^{\text{qt}}$ nằm dọc trục $Ox$ chứa khối tâm $C$ của nửa phải bánh đà ;

$$\vec{R}^{\text{qt}} = -M\vec{a}_C$$

Bây giờ khảo sát hệ lực :

$$(\vec{N}_1, \vec{N}_2, \vec{R}^{\text{qt}}) \tag{a}$$

Để xác định $\vec{R}^{\text{qt}}$ ta cần xác định $\vec{a}_C$. Muốn vậy trước hết xác định trọng tâm của nửa đường tròn. Dễ thấy rằng :

$$OC = \frac{2R}{\pi}$$

nên

$$a_C = CO\omega^2 = \frac{2R}{\pi}\omega^2 \, ,$$

trong đó $\omega = \dfrac{\pi n}{30}$.

Viết phương trình cân bằng cho hệ lực (a) và tương tự như các thí dụ trước, dễ dàng tính được :

$$N_1 = N_2 = \frac{P}{g}\frac{\pi R^2}{900}n^2.$$

---

### Thí dụ 4–6

Viết phương trình vi phân chuyển động dao động cưỡng bức của dầm mang động cơ có lệch tâm trong các điều kiện sau đây.

Khối lượng tổng cộng của vỏ động cơ là $m_1$, rô to có khối lượng $m_2$ và có độ lệch tâm $e$, quay đều với vận tốc góc $\omega$. Đặt mô tơ ở giữa dầm đàn hồi có trọng lượng không đáng kể và có hệ số cứng chống uốn là $c$. Bỏ qua lực cản và coi rằng động cơ quay đều (H. 4–6).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_6.svg" alt="Hình 4-6" class="figure-img" />
  <p class="figure-caption">Hình 4-6</p>
</div>

*Bài giải.* Ta khảo sát chuyển động của động cơ. Thay thế dầm bằng một lò xo dài đặt thẳng đứng và vỏ động cơ gắn vào đầu mút lò xo chuyển động tịnh tiến theo phương đứng. Các ngoại lực tác dụng lên cơ hệ : trọng lực $\vec{Q}$ tác dụng lên vỏ động cơ, trọng lực $\vec{P}$ tác dụng lên rôto và lực đàn hồi $\vec{F}_{\text{đh}}$ của dầm đàn hồi tác dụng lên vỏ môtơ. Các lực quán tính : Vỏ động cơ chuyển động tịnh tiến, nên hệ lực quán tính của nó thu gọn thành lực quán tính đặt ở khối tâm $O$ :

$$\vec{F}_1^{\text{qt}} = -m_1\vec{a}_o$$

Rôto của động cơ quay đều tương đối quanh $O$ đối với vỏ của nó nên có hai lực quán tính :

$$\begin{aligned}
\vec{F}_{2e}^{\text{qt}} &= -m_2\vec{a}_e = -m_2\vec{a}_o \, , \\
\vec{F}_{2r}^{\text{qt}} &= -m_2\vec{a}_2^n
\end{aligned}$$

Hệ lực gồm các ngoại lực và các lực quán tính của cơ hệ khảo sát (kết quả thu gọn) sẽ là :

$$(\vec{Q}, \vec{P}, \vec{F}_{\text{đh}}, \vec{F}_1^{\text{qt}}, \vec{F}_{2e}^{\text{qt}}, \vec{F}_{2r}^{\text{qt}}).$$

Để lập phương trình vi phân chuyển động dao động của động cơ ta sẽ viết phương trình hình chiếu trên trục đứng cho hệ lực nói trên.

Chọn vị trí $I$ của trục $O$ lúc mô tơ cân bằng tĩnh trên dầm làm gốc toạ độ, định hướng $z$ trở xuống, gọi $\Delta$ là độ võng tĩnh của dầm kể từ vị trí không biến dạng $I_o$ của nó (tức dầm không chịu tải), tức $I_o I = \Delta$. Toạ độ của khối tâm $O$ của vỏ động cơ tại thời điểm $t$ bất kỳ sẽ là $z = IO$. Ta có :

$$F_{\text{đh}} = -c(\Delta + z)$$

Vì $a_{ez} = \ddot{z}$, nên (xem hình 4–7)

$$\begin{aligned}
F_{1e}^{\text{qt}} &= -\frac{Q}{g}a_z^e = -\frac{Q\ddot{z}}{g} \, ; \\
F_{2e}^{\text{qt}} &= -\frac{P}{g}a_z^e = -\frac{P}{g}\ddot{z}
\end{aligned}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_7.svg" alt="Hình 4-7" class="figure-img" />
  <p class="figure-caption">Hình 4-7</p>
</div>

Bây giờ ta tính lực quán tính tương đối $\vec{F}_{2r}^{\text{qt}}$.

Gọi $\varphi$ là góc của $OC$ làm với phương ngang và giả thiết rằng tại thời điểm đầu $OC$ nằm ngang với hướng sang phải, ta có : $\varphi = \omega t$.

Do đó suy ra :

$$F_{2r}^{\text{qt}} = m_2 e \omega^2 \, ;$$

Phương trình hình chiếu các lực quán tính và ngoại lực lên trục $z$ cho ta :

$$\begin{aligned}
&(Q + P) - c(\Delta + z) \\
&\quad - \frac{Q + P}{g}\ddot{z} - \frac{P}{g}e\omega^2\sin\omega t = 0
\end{aligned}$$

Đặt :

$$k^2 = \frac{c}{P + Q} \, ; \quad h = \frac{P}{P + Q}e\omega^2.$$

và chú ý rằng tại vị trí cân bằng tĩnh :

$$c\Delta = P + Q$$

Nên sau khi rút gọn, ta có :

$$\ddot{z} + k^2 z = -h\sin\omega t.$$

Đây chính là phương trình vi phân chuyển động mô tả dao động cưỡng bức của cơ hệ (vỏ động cơ), trong đó $k$ là tần số dao động riêng. Qua đây ta thấy rằng chính thành phần thẳng đứng của lực quán tính tương đối của rôto ($\vec{F}_r^{\text{qt}}$) đã đóng vai trò lực kích động điều hoà gây nên dao động cưỡng bức của động cơ đặt trên nền.

---

## 4.4. BÀI TẬP

**4.1.** Một quả cầu nhỏ có trọng lượng $P$, được treo vào toa xe chuyển động thẳng với gia tốc không đổi $\vec{a}$. Dây treo quả cầu bị lệch đi góc $\alpha$ so với đường thẳng đứng và ở trạng thái cân bằng tương đối với toa xe. Hãy xác định gia tốc $a$ của toa xe.

*Trả lời :* $a = g\text{tg}\alpha.$

---

**4.2.** Trên một đường ray $ABCD$ như trên hình vẽ ta thả một xe goòng con ở $A$ với vận tốc đầu bằng không. Trọng lượng của xe là $P$, bán kính của đoạn đường ray vòng tròn là $R$.

a) Tìm áp lực pháp tuyến $N$ của xe con vào đoạn đường ray vòng tròn đó. Tìm độ cao $h$ ban đầu tối thiểu để xe con chạy được hết đoạn ray quấn tròn.

b) Giả thiết vòng quấn tròn có đoạn hở $DE$ đối xứng qua đường thẳng đứng qua tâm vòng tròn, với góc mở là $2\alpha$. Tìm độ cao $h$ cần thiết sao cho xe con vượt qua được quãng mở $DE$ và tiếp tục chuyển động theo vòng quấn ngay từ $E$ (Từ $D$ đến $E$ xe chuyển động theo quỹ đạo parabôn). Tìm $\alpha$ ứng với độ cao $h$ nhỏ nhất (H. 4–8).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_8.svg" alt="Hình 4-8" class="figure-img" />
  <p class="figure-caption">Hình 4-8</p>
</div>

*Trả lời :* a) $N = P\left(\dfrac{2h}{R} - 2 + 3\cos\varphi\right)$ ; $h \ge 2,5\,R$, trong đó $\varphi$ là góc của bán kính $OB$ với bán kính định vị của xe trên đường tròn.

b) $h = R\left(1 + \cos\alpha + \dfrac{1}{2\cos\alpha}\right)$.

---

**4.3.** Tời máy được đặt trên dầm nằm ngang như trên hình vẽ. Cho khoảng cách giữa hai gối đỡ $CD = 8\text{m}$, $AC = 3\text{m}$. Tời kéo vật nặng $B$ có khối lượng là $2$ tấn chạy lên thẳng đứng nhanh dần đều với gia tốc $a = 0,5\text{ m/s}^2$. Tìm áp lực phụ do lực quán tính của vật nặng $B$ gây ra trên hai gối đỡ, (H. 4–9).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_9.svg" alt="Hình 4-9" class="figure-img" />
  <p class="figure-caption">Hình 4-9</p>
</div>

*Trả lời :* $625,4\text{ N}$ và $375,40\text{ N}$.

---

**4.4.** Xe ôtô có khối lượng $m$, chạy trên đường ngang với gia tốc $a$. Trọng tâm của xe cách mặt đường là $h$ và theo phương ngang cách trục các bánh trước và sau những đoạn $l_1$ và $l_2$. Bỏ qua mômen quán tính của các bánh xe đối với trục quay của chúng. Tìm áp lực pháp tuyến của cặp bánh trước và cặp bánh sau lên mặt đường. Với trạng thái chuyển động nào của xe thì hai áp lực ấy có giá trị bằng nhau.

*Trả lời :* $N_1 = \dfrac{m(gl_2 - ah)}{l_1 + l_2}$ ; $N_2 = \dfrac{m(gl_1 + ah)}{l_1 + l_2}$ ;

$N_1 = N_2$ khi xe chạy chậm dần đều với gia tốc $a = g\dfrac{(l_1 - l_2)}{2h}$.

---

**4.5.** Đầu máy xe lửa chạy đều trên một đoạn đường ray thẳng ngang với vận tốc $72\text{ km/giờ}$, xác định tổng áp lực phụ lớn nhất lên ray do tác dụng quán tính của thanh $AB$ gây ra. Khối lượng của $AB$ là $200\text{ kg}$ được phân bố đều dọc thanh. Tay quay $O_1A = O_2B$ có độ dài là $r = 0,3\text{m}$, bán kính vành lăn của bánh xe là $R = 1\text{m}$, giả thiết các bánh xe lăn không trượt trên đường ray (H. 4–10).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_10.svg" alt="Hình 4-10" class="figure-img" />
  <p class="figure-caption">Hình 4-10</p>
</div>

*Trả lời :* Áp lực có giá trị hàm điều hoà theo thời gian và $N_{\max} = 24\text{ kN}$.

---

**4.6.** Vật $A$ trọng lượng $P_1$ hạ xuống theo mặt nghiêng được truyền chuyển động cho vật nặng $B$ trọng lượng $P_2$ nhờ một sợi dây không trọng lượng, không giãn, vòng qua ròng rọc cố định $O$. Góc của mặt phẳng nghiêng với mặt ngang là $\alpha$. Bỏ qua ma sát.

Xác định áp lực của mặt bên $D$ lên mố $E$ của nền, (H. 4–11).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_11.svg" alt="Hình 4-11" class="figure-img" />
  <p class="figure-caption">Hình 4-11</p>
</div>

*Trả lời :* $N = P_1 \dfrac{P_1\sin\alpha - P_2}{P_1 + P_2}\cos\alpha$.

---

**4.7.** Một cần trục quay có khối lượng bằng $2.10^3\text{ kg}$ và khối tâm tại $C$. Xe vận chuyển $D$ có khối lượng bằng $500\text{ kg}$. Xác định các phản lực ổ đỡ $A$ và $B$ trong các trường hợp sau (H. 4–12).

1. Cần trục và xe đứng yên. Người ta kéo lên vật $E$ có khối lượng $3.10^3\text{ kg}$ theo phương thẳng đứng với gia tốc bằng $\dfrac{1}{3}g$ ($g$ : gia tốc trọng trường).

2. Cần trục đứng yên và xe di chuyển không có vật $E$ từ phải sang trái với gia tốc bằng $0,5\,g$. Cho biết trọng tâm của xe cùng nằm trên đường nằm ngang với ổ đỡ $B$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_12.svg" alt="Hình 4-12" class="figure-img" />
  <p class="figure-caption">Hình 4-12</p>
</div>

*Trả lời :*

1. $X_A = -X_B = 52,1\text{ kN}$ ; $Y_A = 63,9\text{ kN}$

2. $X_A = 12,8\text{ kN}$, $X_B = -15,2\text{ kN}$, $Y_A = 24,5\text{ kN}$.

---

**4.8.** Trên một trục nằm ngang $AB$ ta lắp hai thanh cùng chiều dài $l$ vuông góc với trục và nằm trong hai mặt phẳng vuông góc với nhau. Ở đầu cuối mỗi thanh gắn các quả cầu $D$ và $E$ mỗi quả có khối lượng là $m$. Xác định áp lực động lực của trục $AB$ lên các gối $A$ và $B$ khi trục quay đều với vận tốc góc không đổi $\omega$. Các thanh có vị trí như trên hình vẽ. Các quả cầu coi như chất điểm, khối lượng các thanh bỏ qua, (H. 4–13).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_13.svg" alt="Hình 4-13" class="figure-img" />
  <p class="figure-caption">Hình 4-13</p>
</div>

*Trả lời :* $X_A^{\text{đ}} = Y_B^{\text{đ}} = -\dfrac{1}{3}ml\omega^2$ ; $X_B^{\text{đ}} = Y_A^{\text{đ}} = -\dfrac{2}{3}ml\omega^2$.

---

**4.9.** Thanh $AB$ dài $2l$ tại hai đầu mút được lắp các vật có cùng trọng lượng $P$, quay đều quanh trục thẳng đứng $Oz$ đi qua điểm giữa $O$ của thanh $AB$ với vận tốc góc $\omega$. Khoảng cách từ $O$ đến ổ đỡ $C$ là $a$, đến ổ đỡ $D$ là $b$. Góc giữa $AB$ và trục $Oz$ là $\alpha$ không đổi. Bỏ qua trọng lượng thanh và kích thước các vật nặng, hãy xác định các phản lực tại các ổ đỡ $C, D$ khi thanh $AB$ nằm trong mặt phẳng $Oyz$ (H. 4–14).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_14.svg" alt="Hình 4-14" class="figure-img" />
  <p class="figure-caption">Hình 4-14</p>
</div>

*Trả lời :* $X_C = X_D = 0$ ; $Y_C = -Y_D = \dfrac{Pl^2\sin 2\alpha}{g(a + b)}\omega^2$ ; $Z_D = 2P$.

---

**4.10.** Trên trục $AB$ quay đều với vận tốc góc $\omega$ quanh trục thẳng đứng người ta lắp cứng thêm hai thanh $OE$ và $OD$. Thanh $OE$ làm với $AB$ một góc $\varphi$, còn $OD$ vuông góc với mặt phẳng chứa $AB$ và $OE$. Cho biết $OE = OD = l$, $AB = 2a$, $OA = OB$. Trên đầu mút các thanh mới lắp người ta gắn thêm hai quả cầu $E$ và $D$ có khối lượng mỗi quả là $m$. Hãy xác định áp lực động lực của trục lên các ổ đỡ $A, B$. Bỏ qua trọng lượng các thanh và xem các quả cầu $E, D$ có kích thước không đáng kể, (H. 4–15).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_15.svg" alt="Hình 4-15" class="figure-img" />
  <p class="figure-caption">Hình 4-15</p>
</div>

*Trả lời :* $X_A^{\text{đ}} = X_B^{\text{đ}} = \dfrac{ml\omega^2}{2}$ ; $Y_A^{\text{đ}} = \dfrac{ml\omega^2(a - l\cos\varphi)\sin\varphi}{2a}$ ; $Y_A^{\text{đ}} = \dfrac{ml\omega^2(a + l\cos\varphi)\sin\varphi}{2a}$.

---

**4.11.** Một thanh mảnh đồng chất $AB$ được gắn bằng bản lề vào một trục quay thẳng đứng $CD$ tại $O$ ; $OA = a$ ; $OB = b$. Trục $CD$ quay đều với tốc độ góc $\omega$, chốt bản lề $O$ nằm ngang. Bỏ qua ma sát. Tìm hệ thức giữa tốc độ góc $\omega$ và góc nghiêng $\varphi$, giữa trục quay và thanh $AB$ khi chuyển động đã ổn định, (khi đó $\varphi = \text{const}$) (H. 4–16).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_16.svg" alt="Hình 4-16" class="figure-img" />
  <p class="figure-caption">Hình 4-16</p>
</div>

*Trả lời :* $\cos\varphi = \dfrac{3g}{2\omega^2} \cdot \dfrac{a - b}{a^2 - ab + b^2}$.

---

**4.12.** Thanh $AOB$ đồng chất, $AOB = 90^\circ$, được lắp bằng bản lề có chốt ngang vào một trục quay thẳng đứng tại $O$. Cho $OA = a$, $OB = b$. Bỏ qua ma sát. Gọi góc lệch giữa $OA$ và trục quay là $\varphi$, trục quay đều với tốc độ góc là $\omega$. Tìm quan hệ giữa $\varphi$ và $\omega$ khi chuyển động đã ổn định, (khi đó $\varphi = \text{const}$) (H. 4–17).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_17.svg" alt="Hình 4-17" class="figure-img" />
  <p class="figure-caption">Hình 4-17</p>
</div>

*Trả lời :* $\omega^2 = 3g\dfrac{b^2\cos\varphi - a^2\sin\varphi}{(b^3 - a^3)\sin 2\varphi}$.

---

**4.13.** Một thanh đồng chất trọng lượng $P$, dài $l$ quay đều với vận tốc góc $\omega$ quanh trục thẳng đứng, đi qua đầu mút của thanh và vuông góc với thanh. Hãy xác định sức căng (nội lực) của thanh ở thiết diện ngang nằm cách trục quay một đoạn là $a$.

*Trả lời :* $T = \dfrac{P(l^2 - a^2)\omega^2}{2gl}$.

---

**4.14.** Một tấm hình chữ nhật đồng chất trọng lượng $P$ quay đều quanh trục thẳng đứng với vận tốc góc không đổi $\omega$. Hãy xác định lực xé tâm trên tiết diện đi qua trục quay theo hướng vuông góc với trục quay, (H. 4–18).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_18.svg" alt="Hình 4-18" class="figure-img" />
  <p class="figure-caption">Hình 4-18</p>
</div>

*Trả lời :* $S = \dfrac{Pa\omega^2}{4g}$.

---

**4.15.** Một đĩa tròn đồng chất, bán kính $R$, trọng lượng $P$ quay quanh trục thẳng đứng nằm trên đường kính với vận tốc góc không đổi $\omega$. Hãy xác định lực xé đĩa theo đường kính thẳng đứng (H. 4–19).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_4_19.svg" alt="Hình 4-19" class="figure-img" />
  <p class="figure-caption">Hình 4-19</p>
</div>

*Trả lời :* $S = \dfrac{2PR\omega^2}{3\pi g}$.
