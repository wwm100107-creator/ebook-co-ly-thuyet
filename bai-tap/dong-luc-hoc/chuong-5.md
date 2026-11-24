---
title: "Bài Tập Động Lực Học - Chương 5: Phương Trình Chuyển Động Của Cơ Hệ"
description: "Phương trình tổng quát của động lực học, phương trình Lagơrăng loại II, các tích phân đầu, bài giải mẫu và 25 bài tập có đáp số"
layout: doc
---

# Chương 5: PHƯƠNG TRÌNH CHUYỂN ĐỘNG CỦA CƠ HỆ

## 5.1. CƠ SỞ LÝ THUYẾT

### 5.1.1. Phương trình vi phân chuyển động của cơ hệ

Đối với cơ hệ chịu liên kết giữ, dừng và lý tưởng chúng ta có

$$\Sigma \delta A(\vec{F}_k) + \Sigma \delta A(\vec{F}_k^{\text{qt}}) = 0, \tag{5–1}$$

trong đó $\Sigma \delta A(\vec{F}_k)$ và $\Sigma \delta A(\vec{F}_k^{\text{qt}})$ lần lượt là tổng công khả dĩ của các lực hoạt động tác dụng lên cơ hệ và tổng công khả dĩ của các lực quán tính của các chất điểm thuộc cơ hệ. Từ (5–1) chúng ta nhận được các dạng khác nhau của phương trình chuyển động cơ hệ.

Phương trình tổng quát của động lực học trong dạng vectơ

$$\sum_{k=1}^{N} (\vec{F}_k - m_k\ddot{\vec{r}}_k)\delta\vec{r}_k = 0, \tag{5–2}$$

trong đó $\vec{F}_k$ là lực hoạt động tác dụng lên chất điểm $M_k$ ; $m_k$, $\vec{r}_k$ lần lượt là khối lượng và vectơ định vị của chất điểm $M_k$.

Phương trình tổng quát của động lực học trong dạng toạ độ Đề các.

$$\begin{aligned}
\sum_{k=1}^{N} \big[ &(F_{kx} - m_k\ddot{x}_k)\delta x_k \\
&+ (F_{ky} - m_k\ddot{y}_k)\delta y_k + (F_{kz} - m_k\ddot{z}_k)\delta z_k \big] = 0
\end{aligned} \tag{5–3}$$

trong đó $F_{kx}$, $F_{ky}$, $F_{kz}$ lần lượt là hình chiếu của lực $\vec{F}_k$ trên các trục toạ độ Đề các ; $x_k$, $y_k$, $z_k$ là các toạ độ Đề các của chất điểm $M_k$.

Đối với cơ hệ chịu liên kết hôlônôm giữ, dừng và lý tưởng, chúng ta có phương trình Lagơrăng loại II

$$\frac{d}{dt}\frac{\partial T}{\partial \dot{q}_i} - \frac{\partial T}{\partial q_i} = Q_i - \frac{\partial \Pi}{\partial q_i} \, ; \quad i = \overline{1, n} \tag{5–4}$$

trong đó $q_i$ ($i = \overline{1, n}$) là các toạ độ mở rộng đủ của cơ hệ, $\dot{q}_i = dq_i / dt$ là vận tốc mở rộng, $T$ là động năng cơ hệ được biểu diễn qua các toạ độ suy rộng đủ và các vận tốc mở rộng, $Q_i$ là các lực suy rộng của các lực hoạt động không thế, $\Pi$ là thế năng của cơ hệ, $n$ là số bậc tự do của cơ hệ.

Phương trình (5–4) còn có thể được viết trong dạng

$$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_i} - \frac{\partial L}{\partial q_i} = Q_i \, ; \quad i = \overline{1, n} \tag{5–5}$$

trong đó $L = T - \Pi$ được gọi là hàm thế động.

Trong trường hợp tất cả các lực tác dụng lên cơ hệ đều là các lực có thế, phương trình chuyển động của cơ hệ có dạng

$$\frac{d}{dt}\frac{\partial L}{\partial \dot{q}_i} - \frac{\partial L}{\partial q_i} = 0 \, ; \quad i = \overline{1, n} \tag{5–6}$$

Còn trong trường hợp các lực hoạt động đều là các lực không thế, ta có :

$$\frac{d}{dt}\frac{\partial T}{\partial \dot{q}_i} - \frac{\partial T}{\partial q_i} = Q_i \, ; \quad i = \overline{1, n} \tag{5–7}$$

---

### 5.1.2. Các tích phân đầu của phương trình chuyển động

**a) Tích phân năng lượng.** Nếu cơ hệ bảo toàn (tức các lực hoạt động là lực có thế) phương trình chuyển động dạng (5–6) có tích phân đầu sau :

$$T + \Pi = \text{const} \tag{5–8}$$

được gọi là tích phân năng lượng.

**b) Tích phân xycơlic.** Nếu cơ hệ bảo toàn và $\{\varphi_i\}$ ($i = \overline{1, k}$) là các toạ độ xycơlic (tức hàm Lagơrăng của hệ không chứa rõ các toạ độ suy rộng $\varphi_i$, $\dfrac{\partial L}{\partial \varphi_i} \equiv 0 \, ; \, i = \overline{1, k}$) thì phương trình chuyển động (5–6) của cơ hệ có các tích phân đầu sau :

$$\frac{\partial L}{\partial \dot{\varphi}_i} = C_i, \quad i = \overline{1, k} \tag{5–9}$$

trong đó $C_i$ ($i = \overline{1, k}$) là các hằng số được gọi là các tích phân xycơlic.

---

## 5.2. HƯỚNG DẪN ÁP DỤNG

**1.** Phương trình tổng quát động lực học và phương trình Lagơrăng loại II về nguyên tắc thường được sử dụng để thành lập phương trình vi phân chuyển động của các cơ hệ có một hoặc nhiều bậc tự do. Tuy nhiên trong thực tế chỉ khi phải thành lập phương trình vi phân chuyển động của cơ hệ có từ hai bậc tự do trở lên người ta mới sử dụng các dạng phương trình này. Đối với các cơ hệ có một bậc tự do để thành lập phương trình vi phân chuyển động của chúng, có thể sử dụng định lí biến thiên động năng (dạng đạo hàm) (xem chương 2, 2.4).

Cần chú ý thêm rằng phương trình tổng quát động lực học là phương trình biến phân. Do đó nó tương ứng với một hệ phương trình vi phân (số phương trình của hệ bằng số bậc tự do của cơ hệ).

**2.** Để áp dụng phương trình tổng quát của động lực học ta đặt trực tiếp các lực quán tính của các chất điểm thuộc cơ hệ (trong trường hợp cơ hệ gồm nhiều vật rắn ta thay thế hệ lực quán tính của các vật rắn bằng kết quả thay thế tương đương của chúng). Sau đó ta cho cơ hệ một di chuyển khả dĩ và tính tổng công khả dĩ của các lực hoạt động và các lực quán tính. Lập các phương trình (5–1) và (5–3). Dựa vào các di chuyển khả dĩ độc lập ta rút ra các phương trình vi phân chuyển động của cơ hệ.

**3.** Để viết phương trình Lagơrăng loại II, đầu tiên chúng ta xác định số bậc tự do của cơ hệ và chọn các toạ độ suy rộng đủ. Tiếp theo tính động năng của cơ hệ theo các công thức ở 2.4, và biểu diễn nó qua các toạ độ và vận tốc suy rộng. Nhờ các phương pháp tính các lực suy rộng đã trình bày, ta tính các lực suy rộng của các lực hoạt động ứng với các toạ độ suy rộng. Tính các biểu thức của đạo hàm của động năng theo toạ độ và vận tốc suy rộng và đạo hàm toàn phần của biểu thức đạo hàm riêng của động năng theo vận tốc suy rộng, thay thế các biểu thức tính được vào (5–4) chúng ta nhận được phương trình vi phân chuyển động của cơ hệ.

Trong trường hợp các lực hoạt động đều là lực có thế chúng ta sử dụng phương trình (5–6), còn nếu như các lực hoạt động gồm các lực có thế và lực không thế chúng ta sử dụng phương trình (5–4) và (5–5). Trong trường hợp như vậy cần phải tính biểu thức của hàm thế năng theo các toạ độ suy rộng (theo các công thức tính thế năng trong §2–4) và tính các biểu thức đạo hàm riêng của hàm thế năng theo toạ độ suy rộng nếu sử dụng (5–4) hoặc thành lập hàm thế động $L$ nếu sử dụng (5–5).

Chú ý thêm là trong một số trường hợp của cơ hệ với liên kết ma sát, chúng ta có cơ hệ với liên kết không lý tưởng. Đối với trường hợp như vậy, cần giải phóng các liên kết ma sát và kể các lực ma sát thuộc vào lớp các lực hoạt động.

---

## 5.3. BÀI GIẢI MẪU

### Thí dụ 5–1

Ròng rọc bán kính $R$ trọng lượng $Q$ phân bố đều chịu tác dụng ngẫu lực $M$, nâng vật nặng trọng lượng $P$ như hình vẽ. Xác định gia tốc góc của ròng rọc.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_1.svg" alt="Hình 5-1" class="figure-img" />
  <p class="figure-caption">Hình 5-1</p>
</div>

*Bài giải.* Khảo sát cơ hệ gồm ròng rọc và vật nặng $A$. Cơ hệ có một bậc tự do :

Hệ lực hoạt động gồm các trọng lực $\vec{P}$, $\vec{Q}$ và ngẫu lực $M$.

Do bỏ qua ma sát và dây được xem là không giãn nên liên kết đặt lên cơ hệ là lý tưởng.

Đặt vào cơ hệ các lực quán tính tương ứng như hình vẽ, trong đó

$$\begin{aligned}
\overline{M}^{\text{qt}} &= -J\overline{\varepsilon} = -\frac{Q}{g}\frac{R^2}{2}\varepsilon \, ; \\
F^{\text{qt}} &= ma = \frac{P}{g}R\varepsilon \, ;
\end{aligned}$$

$J$ là mômen quán tính của ròng rọc đối với trục quay :

$$J = \frac{1}{2}\frac{Q}{g}R^2.$$

Cho cơ hệ di chuyển khả dĩ như sau : ròng rọc quay một góc $\delta\varphi$ và tương ứng vật $A$ dịch chuyển một đoạn $\delta s$.

Áp dụng phương trình (5–1) ta có

$$\begin{aligned}
\Sigma \delta A(\vec{F}_K) &+ \Sigma \delta A(\vec{F}^{\text{qt}}) \\
&= \delta A(M) + \delta A(M^{\text{qt}}) + \delta A(\vec{P}) + \delta A(\vec{F}^{\text{qt}}) \\
&= M\delta\varphi - M^{\text{qt}}\delta\varphi - P\delta s - F_{\text{qt}}\delta s = 0
\end{aligned}$$

Theo liên hệ truyền động, ta có : $\delta s = R\delta\varphi$ :

Do đó :

$$\delta\varphi\big[M - M^{\text{qt}} - PR - F^{\text{qt}}R\big] = 0,$$

Vậy

$$M - M^{\text{qt}} - PR - F^{\text{qt}}R = 0,$$

hoặc

$$M - \frac{QR^2}{2g}\varepsilon - PR - \frac{P}{g}\varepsilon R^2 = 0,$$

Từ đó

$$\varepsilon = 2g\frac{M - PR}{R^2(2P + Q)}$$

---

### Thí dụ 5–2

Cho cơ hệ như trên hình vẽ 5–2. Các phần dây không nằm trên ròng rọc theo phương thẳng đứng. Các vật $A$, $B$, $C$ lần lượt có khối lượng tương ứng $m_1 = 2\text{ kg}$ ; $m_2 = 3\text{ kg}$ ; $m = 4\text{ kg}$. Hãy xác định gia tốc của ba vật nặng. Bỏ qua ma sát và khối lượng của các ròng rọc và dây.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_2.svg" alt="Hình 5-2" class="figure-img" />
  <p class="figure-caption">Hình 5-2</p>
</div>

*Bài giải.* Khảo sát cơ hệ gồm dây, các ròng rọc và các vật nặng. Cơ hệ có hai bậc tự do.

Các lực hoạt động gồm các trọng lực. Liên kết đặt lên cơ hệ là lý tưởng.

Chọn phương dương của trục đứng hướng xuống. Giả sử các vật $A$, $B$, $C$ chuyển động với gia tốc lần lượt tương ứng là $\overline{a}_1$, $\overline{a}_2$, $\overline{a}$ hướng xuống.

Ta đặt trực tiếp các lực quán tính như hình vẽ, có các hình chiếu trên trục thẳng đứng là :

$$\overline{F}_A^{\text{qt}} = -m_1\overline{a}_1 \, ; \quad \overline{F}_B^{\text{qt}} = -m_2\overline{a}_2 \, ; \quad \overline{F}_C^{\text{qt}} = -m\overline{a}.$$

Cho cơ hệ một di chuyển khả dĩ, trong đó vật $A$ và $B$ di chuyển hướng thẳng đứng xuống với các dịch chuyển $\delta\overline{s}_A$ và $\delta\overline{s}_B$, còn vật $C$ dịch chuyển $\delta\overline{s}_C$. Vì ròng rọc II có chuyển động song phẳng, nên ta có.

$$\delta\overline{s}_C = -\frac{1}{2}(\delta\overline{s}_A + \delta\overline{s}_B)$$

Áp dụng phương trình (5–3) :

$$\begin{aligned}
(m_1g - m_1\overline{a}_1)\delta\overline{s}_A &+ (m_2g - m_2\overline{a}_2)\delta\overline{s}_B \\
&+ (mg - m\overline{a})\delta\overline{s}_C = 0.
\end{aligned}$$

Thay biểu thức của $\delta\overline{s}_C$ tính theo $\delta\overline{s}_A$ và $\delta\overline{s}_B$ ta có

$$\begin{aligned}
\left[m_1g - m_1\overline{a}_1 - \frac{mg - m\overline{a}}{2}\right]\delta\overline{s}_A & \\
+ \left[m_2g - m_2\overline{a}_2 - \frac{mg - m\overline{a}}{2}\right]\delta\overline{s}_B &= 0
\end{aligned}$$

Vì hệ có hai bậc tự do nên các di chuyển $\delta\overline{s}_A$ và $\delta\overline{s}_B$ độc lập, do đó ta có :

$$\begin{aligned}
m_1g - m_1\overline{a}_1 - \frac{mg - m\overline{a}}{2} &= 0 \, ; \\
m_2g - m_2\overline{a}_2 - \frac{mg - m\overline{a}}{2} &= 0.
\end{aligned}$$

Từ mối quan hệ giữa các dịch chuyển của các vật $A$, $B$, $C$ chúng ta nhận ngay được quan hệ gia tốc giữa ba vật :

$$\overline{a} = -\frac{\overline{a}_1 + \overline{a}_2}{2}$$

Khi thay biểu thức của $\overline{a}$ vừa tìm được vào hai phương trình trên, ta có

$$\begin{aligned}
\left(\frac{m}{2} + m_1\right)\overline{a}_1 + \frac{m}{2}\overline{a}_2 &= \left(m_1 - \frac{m}{2}\right)g, \\
\frac{m}{4}\overline{a}_1 + \left(m_2 + \frac{m}{4}\right)\overline{a}_2 &= g\left(m_2 - \frac{m}{2}\right).
\end{aligned}$$

Thay các số liệu bằng số vào ta nhận được

$$3\overline{a}_1 + \overline{a}_2 = 0, \quad \overline{a}_1 + 4\overline{a}_2 = g.$$

Từ đó

$$\overline{a}_1 = -\frac{1}{11}g \, ; \quad \overline{a}_2 = \frac{3}{11}g \, ; \quad \overline{a} = \frac{1}{11}g$$

Trong kết quả cuối cùng $\overline{a}_1$ mang dấu âm, điều đó có nghĩa là giả thiết trên về chuyển động của vật $A$ là không đúng. Vật $A$ có gia tốc không phải hướng xuống mà là hướng lên. Các giả thiết về hướng gia tốc của vật $B$ và $C$ là đúng.

---

### Thí dụ 5–3

Một con lắc enliptic gồm con trượt $A$ có khối lượng $m_1$ trượt trên mặt phẳng nhẵn và quả cầu nhỏ có khối lượng $m_2$ được nối với con trượt $A$ bằng thanh $AB$ cứng, nhẹ, có chiều dài $l$. Thanh $AB$ có thể quay trơn quanh trục $A$ vuông góc với mặt phẳng hình vẽ. Bỏ qua ma sát. Thành lập phương trình vi phân chuyển động của cơ hệ và tìm các tích phân đầu (H. 5–3).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_3.svg" alt="Hình 5-3" class="figure-img" />
  <p class="figure-caption">Hình 5-3</p>
</div>

*Bài giải.* Khảo sát cơ hệ gồm con trượt $A$ chuyển động tịnh tiến thẳng ngang và quả cầu $B$ xem như một chất điểm chuyển động tròn tương đối trong mặt phẳng $Axy$.

Cơ hệ có hai bậc tự do. Chọn hai toạ độ suy rộng đủ là $q_1 = y$ ; $q_2 = \varphi$. Hệ chịu liên kết hôlônôm và lý tưởng.

Các lực hoạt động gồm các trọng lực.

Phương trình Lagơrăng II có dạng

$$\begin{aligned}
\frac{d}{dt}\frac{\partial T}{\partial \dot{y}} - \frac{\partial T}{\partial y} &= Q_y, \\
\frac{d}{dt}\frac{\partial T}{\partial \dot{\varphi}} - \frac{\partial T}{\partial \varphi} &= Q_\varphi
\end{aligned}$$

Đầu tiên tính động năng cơ hệ : $T = T_1 + T_2$, trong đó $T_1$ và $T_2$ lần lượt tương ứng là động năng của con trượt và quả cầu.

Vì con trượt chuyển động tịnh tiến theo phương ngang nên :

$$T_1 = \frac{1}{2}m_1v_1^2 = \frac{1}{2}m_1\dot{y}^2.$$

Chất điểm $B$ chuyển động trong mặt phẳng nên :

$$T_2 = \frac{1}{2}m_2v_B^2 = \frac{1}{2}m_2(\dot{x}_2^2 + \dot{y}_2^2),$$

trong đó : $x_2 = l\cos\varphi$ ; $\dot{x}_2 = -l\sin\varphi.\dot{\varphi}$,

$$y_2 = y + l\sin\varphi \, ; \quad \dot{y}_2 = \dot{y} + l\cos\varphi.\dot{\varphi}.$$

Vậy

$$\begin{aligned}
T_2 &= \frac{1}{2}m_2\big[(-l\sin\varphi\dot{\varphi})^2 + (\dot{y} + l\cos\varphi.\dot{\varphi})^2\big] \\
&= \frac{1}{2}m_2\big(l^2\dot{\varphi}^2 + \dot{y}^2 + 2l\dot{y}\dot{\varphi}\cos\varphi\big).
\end{aligned}$$

Biểu thức động năng của cơ hệ được viết như sau :

$$\begin{aligned}
T &= \frac{m_1\dot{y}^2}{2} + \frac{m_2}{2}\big(l^2\dot{\varphi}^2 + \dot{y}^2 + 2l\dot{y}\dot{\varphi}\cos\varphi\big) \\
&= \frac{1}{2}(m_1 + m_2)\dot{y}^2 + \frac{1}{2}m_2l^2\dot{\varphi}^2 + m_2l\dot{y}\dot{\varphi}\cos\varphi
\end{aligned}$$

Bây giờ ta tính các lực suy rộng. Lực sinh công duy nhất trong di chuyển của cơ hệ là trọng lực $\vec{P}_2$ tác dụng lên quả cầu $B$, đó là lực có thế và hàm thế năng $\Pi$ của hệ có dạng.

$$\Pi = -m_2gl\cos\varphi + \text{const}.$$

Từ đó suy ra

$$\begin{aligned}
Q_\varphi &= -\frac{\partial \Pi}{\partial \varphi} = -m_2gl\sin\varphi, \\
Q_y &= -\frac{\partial \Pi}{\partial y} = 0.
\end{aligned}$$

Để viết phương trình Lagơrăng loại II, ta tính các đạo hàm của hàm động năng

$$\begin{aligned}
\frac{\partial T}{\partial y} &= 0 \, ; \\
\frac{\partial T}{\partial \dot{y}} &= (m_1 + m_2)\dot{y} + m_2l\dot{\varphi}\cos\varphi, \\
\frac{d}{dt}\frac{\partial T}{\partial \dot{y}} &= (m_1 + m_2)\ddot{y} + m_2l\ddot{\varphi}\cos\varphi - m_2l\dot{\varphi}^2\sin\varphi \, ; \\
\frac{\partial T}{\partial \varphi} &= -m_2l\dot{y}\dot{\varphi}\sin\varphi \, ; \\
\frac{\partial T}{\partial \dot{\varphi}} &= m_2l^2\dot{\varphi} + m_2l\dot{y}\cos\varphi, \\
\frac{d}{dt}\frac{\partial T}{\partial \dot{\varphi}} &= m_2l^2\ddot{\varphi} + m_2l\ddot{y}\cos\varphi - m_2l\sin\varphi\dot{y}\dot{\varphi}.
\end{aligned}$$

Khi thay thế giá trị của các đạo hàm này và giá trị của lực suy rộng vào phương trình Lagơrăng loại II, ta nhận được phương trình vi phân chuyển động cơ hệ như sau :

$$\begin{aligned}
m_2l^2\ddot{\varphi} + m_2l\cos\varphi\ddot{y} &- m_2l\sin\varphi\dot{y}\dot{\varphi} \\
&+ m_2l\sin\varphi\dot{y}\dot{\varphi} = -m_2gl\sin\varphi, \\
(m_1 + m_2)\ddot{y} + m_2l\cos\varphi\ddot{\varphi} &- m_2l\sin\varphi\dot{\varphi}^2 = 0.
\end{aligned}$$

Sau khi rút gọn ta có hệ phương trình

$$\begin{aligned}
l\ddot{\varphi} + \cos\varphi\ddot{y} + g\sin\varphi &= 0, \\
(m_1 + m_2)\ddot{y} + m_2l\cos\varphi\ddot{\varphi} - m_2l\sin\varphi\dot{\varphi}^2 &= 0 \, ;
\end{aligned}$$

nó mô tả chuyển động cơ hệ.

Dễ dàng chỉ ra rằng hệ phương trình trên có các tích phân đầu sau (hệ bảo toàn và có toạ độ xycơlic $y$) ;

$$\begin{aligned}
\frac{1}{2}(m_1 + m_2)\dot{y}^2 + \frac{1}{2}m_2l^2\dot{\varphi}^2 & \\
+ m_2l\cos\varphi\dot{y}\dot{\varphi} - m_2gl\cos\varphi &= C_1 \\
(m_1 + m_2)\dot{y} + m_2l\cos\varphi\dot{\varphi} &= C_2,
\end{aligned}$$

ở đó $C_1$ và $C_2$ là các hằng số tích phân.

---

### Thí dụ 5–4

Một máy điều tiết ly tâm chịu tác dụng ngẫu lực có momen $M$ đặt vào trục quay. Các quả văng $A$ và $B$ của máy điều tiết có cùng trọng lượng $P_1$. Các thanh treo có cùng độ dài $l$ và các điểm treo của chúng cách trục quay một khoảng bằng $a$. Đối trọng $C$ có trọng lượng $P_2$ và bị đẩy về vị trí cân bằng tĩnh bởi lò xo có độ cứng $c$. Bỏ qua trọng lượng của các thanh và của lò xo cũng như ma sát. Thành lập phương trình vi phân chuyển động cơ hệ (H. 5–4).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_4.svg" alt="Hình 5-4" class="figure-img" />
  <p class="figure-caption">Hình 5-4</p>
</div>

*Bài giải.* Hệ khảo sát là cơ cấu máy điều tiết không kể lò xo (phá vỡ liên kết lò xo và thay thế tác dụng của lò xo bằng lực đàn hồi). Đối trọng $C$ xem như một chất điểm chuyển động thẳng. Các quả văng $A$ và $B$ đối với khung quay của máy điều tiết, chuyển động trên các đường tròn có tâm là $O_1$ và $O_2$, và có cùng bán kính $l$.

Để xác định vị trí cơ hệ ta dùng hai thông số độc lập là góc quay $\theta$ của khung quanh trục thẳng đứng và góc lệch $\varphi$ của các thanh treo trong mặt phẳng khung quay nói trên.

Như thế, $\theta$ và $\varphi$ chính là hai toạ độ suy rộng đủ của cơ hệ. Cơ hệ có hai bậc tự do.

Ngoài liên kết lò xo, các liên kết khác của cơ hệ đều là lý tưởng. Do đó các lực hoạt động gồm các trọng lực đặt vào các quả văng và đối trọng, ngẫu lực có momen $M$ và lực đàn hồi lò xo.

Để thành lập phương trình vi phân chuyển động cơ hệ ta áp dụng phương trình Lagơrăng loại II.

$$\begin{aligned}
\frac{d}{dt}\frac{\partial T}{\partial \dot{\theta}} - \frac{\partial T}{\partial \theta} &= Q_\theta, \\
\frac{d}{dt}\frac{\partial T}{\partial \dot{\varphi}} - \frac{\partial T}{\partial \varphi} &= Q_\varphi,
\end{aligned}$$

Đầu tiên ta tính biểu thức động năng cơ hệ :

$$T = T_1 + T_2,$$

trong đó $T_1$ là động năng của hai quả văng, $T_2$ là động năng của đối trọng :

Mỗi quả văng tham gia vào hai chuyển động, trong mặt phẳng chứa khung chúng chuyển động trên các đường tròn tâm $O_1$ và $O_2$ có cùng bán kính $l$. Ngoài ra chúng bị mặt phẳng khung kéo theo trong chuyển động của nó quanh trục thẳng đứng. Như vậy vận tốc tuyệt đối của mỗi quả văng được tính theo công thức :

$$\vec{v}_a = \vec{v}_e + \vec{v}_r$$

Vận tốc tương đối $\vec{v}_r$ nằm trong mặt phẳng khung, hướng vuông góc với các thanh treo và có giá trị $v_r = l\dot{\varphi}$. Vận tốc theo $\vec{v}_e$ hướng vuông góc với mặt phẳng khung quay và có giá trị $v_e = (a + l\sin\varphi)\dot{\theta}$.

Rõ ràng hai vectơ $\vec{v}_e$ và $\vec{v}_r$ vuông góc với nhau, nên :

$$v_a^2 = v_e^2 + v_r^2 = (l\sin\varphi + a)^2\dot{\theta}^2 + l^2\dot{\varphi}^2.$$

Đối trọng được xem là một chất điểm có chuyển động thẳng với vận tốc $\vec{v}_C$.

$$v_C = \frac{d}{dt}(\overline{OC}) = \frac{d}{dt}(2l\cos\varphi) = -2l\dot{\varphi}\sin\varphi.$$

Động năng của toàn cơ hệ bằng

$$\begin{aligned}
T &= T_A + T_B + T_C = 2\frac{P_1}{g}\frac{v_A^2}{2} + \frac{P_2}{2g}v_C^2 \\
&= \frac{P_1}{g}\big[(l\sin\varphi + a)^2\dot{\theta}^2 + l^2\dot{\varphi}^2\big] \\
&\quad + \frac{P_2}{2g}4l^2\sin^2\varphi\dot{\varphi}^2
\end{aligned}$$

Dễ dàng tính các biểu thức đạo hàm của hàm động năng

$$\begin{aligned}
\frac{\partial T}{\partial \dot{\varphi}} &= \frac{2P_1}{g}l^2\dot{\varphi} + \frac{4P_2}{g}l^2\sin^2\varphi\dot{\varphi}, \\
\frac{d}{dt}\frac{\partial T}{\partial \dot{\varphi}} &= \frac{2(P_1 + 2P_2\sin^2\varphi)}{g}l^2\ddot{\varphi} \\
&\quad + \frac{8P_2}{g}l^2\sin\varphi\cos\varphi.\dot{\varphi}^2, \\
\frac{\partial T}{\partial \varphi} &= \frac{2P_1}{g}(l\sin\varphi + a)l\cos\varphi\dot{\theta}^2 \\
&\quad + \frac{4P_2}{g}l^2\sin\varphi\cos\varphi\dot{\varphi}^2, \\
\frac{\partial T}{\partial \dot{\theta}} &= \frac{2P_1}{g}(l\sin\varphi + a)^2\dot{\theta}, \\
\frac{d}{dt}\frac{\partial T}{\partial \dot{\theta}} &= \frac{2P_1}{g}(l\sin\varphi + a)^2\ddot{\theta} \\
&\quad + \frac{4P_1}{g}(l\sin\varphi + a)l\cos\varphi\dot{\theta}\dot{\varphi}, \\
\frac{\partial T}{\partial \theta} &= 0.
\end{aligned}$$

Bây giờ ta tính các lực suy rộng $Q_\theta$ và $Q_\varphi$.

Vì các lực hoạt động gồm các lực có thế (các trọng lực và lực đàn hồi) và lực không thế (ngẫu lực) nên ta tính lực suy rộng theo công thức :

$$\begin{aligned}
Q_\varphi &= -\frac{\partial \Pi}{\partial \varphi} + Q_\varphi^*. \\
Q_\theta &= -\frac{\partial \Pi}{\partial \theta} + Q_\theta^*
\end{aligned}$$

trong đó $\Pi$ là hàm thế năng của các trọng lực và lực đàn hồi, $Q_\varphi^*$ và $Q_\theta^*$ là lực suy rộng của lực không thế (ngẫu lực $M$).

Thế năng của cơ hệ bằng :

$$\Pi = \Pi_1 + \Pi_2 + \Pi_3$$

trong đó, $\Pi_1$, $\Pi_2$, $\Pi_3$ lần lượt là thế năng của hai quả văng, của đối trọng và thế năng đàn hồi của lò xo.

Nếu chọn $O$ làm gốc để tính thế năng và quy ước rằng thế năng trọng trường ở đó bằng không, ta có

$$\Pi_1 = -2P_1l\cos\varphi \, ; \quad \Pi_2 = -2P_2l\cos\varphi.$$

Thế năng $\Pi_3$ của lực đàn hồi được tính theo công thức

$$\Pi_3 = \frac{c\delta^2}{2},$$

trong đó $\delta$ là độ giãn của lò xo kể từ trạng thái không biến dạng (coi rằng khi không co giãn thế năng biến dạng của lò xo bằng không). Vì khi $\varphi = 0$ lò xo không bị co giãn, nên

$$\delta = l(1 - \cos\varphi).$$

Vậy

$$\Pi_3 = \frac{cl^2(1 - \cos\varphi)^2}{2}$$

Thế năng của toàn hệ sẽ là

$$\Pi = -2(P_1 + P_2)l\cos\varphi + \frac{cl^2}{2}(1 - \cos\varphi)^2 + C.$$

Từ đó suy ra :

$$\begin{aligned}
-\frac{\partial \Pi}{\partial \varphi} &= -2(P_1 + P_2)l\sin\varphi - cl^2(1 - \cos\varphi)\sin\varphi, \\
-\frac{\partial \Pi}{\partial \theta} &= 0.
\end{aligned}$$

Bây giờ tính tiếp $Q_\varphi^*$ và $Q_\theta^*$.

Để tính $Q_\varphi^*$ ta cho hệ một di chuyển khả dĩ $\delta\varphi > 0$ và $\delta\theta = 0$.

Trong di chuyển khả dĩ này khung không di chuyển, nên

$$\delta A_\varphi(M) = 0.$$

Vậy

$$Q_\varphi^* = \frac{\delta A_\varphi(M)}{\delta\varphi} = 0.$$

Để tính $Q_\theta^*$ ta cho hệ một di chuyển khả dĩ : $\delta\theta > 0$, $\delta\varphi = 0$ và tính công khả dĩ của ngẫu lực $M$

$$\delta A_\theta(M) = M\delta\theta.$$

Vậy

$$Q_\theta^* = \frac{\delta A_\theta(M)}{\delta\theta} = M.$$

Như vậy các lực suy rộng $Q_\theta$ và $Q_\varphi$ bằng :

$$\begin{aligned}
Q_\theta &= M, \\
Q_\varphi &= -2(P_1 + P_2)l\sin\varphi - cl^2(1 - \cos\varphi)\sin\varphi.
\end{aligned}$$

Áp dụng phương trình Lagơrăng loại II ta nhận được

$$\begin{aligned}
\frac{P_1 + 2P_2\sin^2\varphi}{g}l\ddot{\varphi} &+ \frac{P_2}{g}l\sin 2\varphi\dot{\varphi}^2 \\
&- \frac{P_1}{g}(l\sin\varphi + a)\cos\varphi\dot{\theta}^2 \\
&= -(P_1 + P_2)\sin\varphi - \frac{cl}{2}(1 - \cos\varphi)\sin\varphi.
\end{aligned}$$

$$\begin{aligned}
&2\frac{P_1}{g}(l\sin\varphi + a)^2\ddot{\theta} \\
&\quad + \frac{4P_1}{g}(l\sin\varphi + a)l\cos\varphi\dot{\theta}\dot{\varphi} = M.
\end{aligned}$$

Nhận xét rằng trong chế độ làm việc của máy điều tiết $M = 0$ ta có $\ddot{\theta} = 0$ ; $\dot{\theta} = \text{const} = \omega$ ; $\dot{\varphi} = 0$ ; $\varphi = \text{hằng}$. Chế độ đó tương ứng với chế độ làm việc bình ổn của máy điều tiết. Khi đó phương trình cuối cùng được tự thoả mãn, còn từ phương trình đầu chúng ta tìm được mối liên hệ giữa chế độ quay bình ổn của máy điều tiết và độ lệch của quả văng, nó tương ứng với vị trí xác định của đối trọng.

$$\omega^2 = g\frac{(P_1 + P_2)\sin\varphi + \dfrac{cl}{2}(1 - \cos\varphi)\sin\varphi}{P_1(l\sin\varphi + a)\cos\varphi},$$

hay là

$$\omega^2 = g\frac{(P_1 + P_2) + \dfrac{cl}{2}(1 - \cos\varphi)}{P_1(l\sin\varphi + a)}\operatorname{tg}\varphi.$$

Chế độ quay bình ổn của máy điều tiết thiết lập một trạng thái cân bằng của các quả văng và đối trọng trong mặt phẳng của khung quay, được gọi là trạng thái cân bằng tương đối.

---

### Thí dụ 5–5

Các đầu mút của thanh đồng chất $AB$ có thể trượt không ma sát theo hai cạnh nằm ngang và thẳng đứng của một khung cứng có thể quay quanh trục thẳng đứng. Độ dài thanh bằng $2a$ và khối lượng của thanh bằng $m$, mômen quán tính của khung đối với trục quay bằng $J$. Khung quay quanh trục thẳng đứng dưới tác dụng ngẫu lực có mômen $M$. Bỏ qua ma sát. Thành lập phương trình vi phân chuyển động của cơ hệ (H. 5–5).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_5.svg" alt="Hình 5-5" class="figure-img" />
  <p class="figure-caption">Hình 5-5</p>
</div>

*Bài giải.* Cơ hệ khảo sát gồm có khung đang quay quanh trục cố định và thanh $AB$. Đối với khung, thanh $AB$ chuyển động song phẳng. Nếu chọn khung làm hệ động thì chuyển động ấy là chuyển động tương đối.

Cơ hệ có hai bậc tự do. Để xác định vị trí cơ hệ ta dùng hai toạ độ suy rộng đủ $q_1 = \theta$ ; $q_2 = \varphi$ ; trong đó $\theta$ là góc quay của khung và $\varphi$ là góc nghiêng của thanh đối với trục thẳng đứng.

Các liên kết đều là lý tưởng. Các lực hoạt động gồm các trọng lực đặt vào thanh và khung, và ngẫu lực có mômen $M$.

Để thành lập phương trình vi phân chuyển động của cơ hệ ta viết phương trình Lagơrăng loại II.

$$\begin{aligned}
\frac{d}{dt}\frac{\partial T}{\partial \dot{\varphi}} - \frac{\partial T}{\partial \varphi} &= Q_\varphi, \\
\frac{d}{dt}\frac{\partial T}{\partial \dot{\theta}} - \frac{\partial T}{\partial \theta} &= Q_\theta
\end{aligned}$$

Đầu tiên tính động năng cơ hệ. Nếu gọi $T_1$ và $T_2$ lần lượt là động năng của khung và thanh $AB$ tương ứng thì động năng $T$ của cơ hệ là $T = T_1 + T_2$ ; trong đó

$$T_1 = \frac{1}{2}J\dot{\theta}^2$$

còn động năng $T_2$ được tính theo công thức

$$T_2 = \frac{1}{2}\sum_{k=1}^{\infty} m_k v_k^2,$$

trong đó ta chia thanh $AB$ thành tập hợp vô hạn các phần tử $m_k$ có vận tốc $v_k$, mỗi phần tử tham gia chuyển động theo của khung quanh trục thẳng đứng với vận tốc góc $\omega = \dot{\theta}$ và chuyển động tương đối của nó đối với khung. Vì vậy

$$\vec{v}_k = \vec{v}_{ek} + \vec{v}_{rk}.$$

Dễ dàng thấy các vectơ vận tốc tương đối và theo của phần tử $m_k$ vuông góc với nhau, nên

$$v_k^2 = v_{ek}^2 + v_{rk}^2$$

Vậy

$$T_2 = \frac{1}{2}\Sigma m_k v_{ek}^2 + \frac{1}{2}\Sigma m_k v_{rk}^2$$

Chú ý rằng lượng $\Sigma\dfrac{m_k v_{rk}^2}{2}$ chính là động năng của thanh $AB$ trong chuyển động tương đối, được kí hiệu qua $T_r$, còn lượng $\dfrac{1}{2}\Sigma m_k v_{ek}^2$ chính là động năng của thanh $AB$, coi như gắn chặt vào khung chữ nhật và do đó quay quanh trục cố định của khung, kí hiệu qua $T_e$. Vậy :

$$T_{(AB)} = T_e + T_r$$

Trong mặt phẳng khung, thanh $AB$ chuyển động song phẳng với tâm tức thời $P$, nên

$$\begin{aligned}
T_r &= J_P\frac{\omega^2}{2} = (J_C + ma^2)\frac{\omega^2}{2} \\
&= \frac{4}{3}ma^2\frac{\dot{\varphi}^2}{2} = \frac{2}{3}ma^2\dot{\varphi}^2.
\end{aligned}$$

Nếu coi $AB$ gắn vào khung, cùng quay với vận tốc góc $\omega_1 = \dot{\theta}$ thì

$$T_e = J_z\frac{\dot{\theta}^2}{2}$$

Để tính mômen quán tính $J_z$ của thanh $AB$ đối với trục quay thẳng đứng $z$, chúng ta sử dụng công thức :

$$J_z = \Sigma m_k h_k^2$$

Nếu gọi chiều dài của phân tố $M_K$ có khối lượng $m_k$ là $\Delta s_k$, và do đó

$$m_k = m\frac{\Delta s_k}{2a}.$$

Vậy :

$$\begin{aligned}
J_z &= \sum_{k=1}^{\infty} m\frac{\Delta s_k}{2a}(s_k\sin\varphi)^2 \\
&= \frac{m}{2a}\sin^2\varphi \int_0^{2a} s^2 ds = \frac{4}{3}ma^2\sin^2\varphi.
\end{aligned}$$

Từ đó

$$T_e = \frac{1}{2}\cdot\frac{4}{3}ma^2\sin^2\varphi\dot{\theta}^2.$$

Động năng của thanh $AB$ bằng

$$T_{AB} = T_e + T_r = \frac{1}{2}\cdot\frac{4}{3}ma^2\sin^2\varphi\dot{\theta}^2 + \frac{1}{2}\cdot\frac{4}{3}ma^2\dot{\varphi}^2.$$

Chúng ta nhận được biểu thức động năng toàn hệ :

$$T = \frac{1}{2}\left(J + \frac{4}{3}ma^2\sin^2\varphi\right)\dot{\theta}^2 + \frac{1}{2}\cdot\frac{4}{3}ma^2\dot{\varphi}^2.$$

Bây giờ chúng ta chuyển sang tính các lực suy rộng. Vì các lực hoạt động gồm các lực có thế (các trọng lực) và lực không thế (ngẫu lực) nên lực suy rộng có thể được tính theo công thức

$$\begin{aligned}
Q_\theta &= -\frac{\partial \Pi}{\partial \theta} + Q_\theta^* \\
Q_\varphi &= -\frac{\partial \Pi}{\partial \varphi} + Q_\varphi^*
\end{aligned}$$

trong đó $\Pi$ là hàm thế năng của các trọng lực ; $Q_\theta^*$, $Q_\varphi^*$ là lực suy rộng của các lực không thế.

Để tính thế năng của các trọng lực, ta chọn gốc thế năng là $O$, trục $z$ hướng lên và thế năng của khung và thanh lần lượt là $\Pi_1$ và $\Pi_2$, ta có :

$$\Pi_1 = Pz_1 + \text{hằng} = Pb + \text{hằng} = \text{hằng},$$

($I$ là trọng tâm của khung).

$$\Pi_2 = Qz_2 + \text{hằng} = mga\cos\varphi + \text{hằng}.$$

Vậy thế năng của cơ hệ bằng

$$\Pi = \Pi_1 + \Pi_2 = mga\cos\varphi + \text{hằng}.$$

Tương tự như trong thí dụ 5–4 ta dễ dàng tính được

$$Q_\theta^* = M \, ; \quad Q_\varphi^* = 0.$$

Vậy

$$Q_\theta = M, \quad Q_\varphi = mga\sin\varphi.$$

Để viết các phương trình Lagơrăng loại II ta tính các đạo hàm

$$\begin{aligned}
\frac{\partial T}{\partial \theta} &= 0 \, ; \\
\frac{\partial T}{\partial \dot{\theta}} &= \left(J + \frac{4}{3}ma^2\sin^2\varphi\right)\dot{\theta}, \\
\frac{d}{dt}\frac{\partial T}{\partial \dot{\theta}} &= \left(J + \frac{4}{3}ma^2\sin^2\varphi\right)\ddot{\theta} \\
&\quad + \frac{8}{3}ma^2\sin\varphi\cos\varphi\dot{\theta}\dot{\varphi} \, ; \\
\frac{\partial T}{\partial \varphi} &= \frac{4}{3}ma^2\sin\varphi\cos\varphi\dot{\theta}^2 \, ; \\
\frac{\partial T}{\partial \dot{\varphi}} &= \frac{4}{3}ma^2\dot{\varphi} \, ; \\
\frac{d}{dt}\frac{\partial T}{\partial \dot{\varphi}} &= \frac{4}{3}ma^2\ddot{\varphi}.
\end{aligned}$$

Vậy phương trình vi phân chuyển động của cơ hệ là :

$$\begin{aligned}
&\left(J + \frac{4}{3}ma^2\sin^2\varphi\right)\ddot{\theta} \\
&\quad + \frac{8}{3}ma^2\sin\varphi\cos\varphi\dot{\varphi}\dot{\theta} = M, \\
&\frac{4}{3}ma^2\ddot{\varphi} - \frac{4}{3}ma^2\sin\varphi\cos\varphi\dot{\theta}^2 = mga\sin\varphi.
\end{aligned}$$

Rút gọn lại, ta nhận được

$$\begin{aligned}
&\left(J + \frac{4}{3}ma^2\sin^2\varphi\right)\ddot{\theta} \\
&\quad + \frac{4}{3}ma^2\sin 2\varphi\dot{\theta}\dot{\varphi} - M = 0, \\
&\frac{4}{3}a\ddot{\varphi} - \frac{2}{3}a\sin 2\varphi\dot{\theta}^2 - g\sin\varphi = 0.
\end{aligned}$$

---

### Thí dụ 5–6

Trên hình vẽ biểu diễn sơ đồ máy ghi chấn động dòng điện. Lõi sắt động $M$ có khối lượng $m$, hai lò xo giữ lõi sắt đó như nhau và có độ cứng tổng cộng là $c$. Hệ số tự cảm của cuộn dây điện là $L(x)$, biến thiên theo độ dời $x$ của lõi sắt động kể từ vị trí của nó ứng với trạng thái nguyên của hai lò xo. Cuộn dây tự cảm được nối với nguồn điện có sức điện động $E = \text{hằng}$. Điện trở ôm tổng cộng của mạch điện là $R$. Viết phương trình vi phân chuyển động của hệ và xác định vị trí cân bằng của nó (H. 5–6).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_6.svg" alt="Hình 5-6" class="figure-img" />
  <p class="figure-caption">Hình 5-6</p>
</div>

*Bài giải.* Ở một thời điểm bất kỳ gọi $x$ là độ dời đại số của lõi sắt động kể từ vị trí của nó ứng với trạng thái nguyên của hai lò xo và gọi $q$ là điện tích trong mạng điện. Rõ ràng rằng $x$ và $q$ là hai toạ độ suy rộng đủ của hệ cơ điện đó.

Để lập phương trình vi phân chuyển động của hệ cơ – điện ta viết các dạng phương trình Lagơrăng loại II, trong đó các phần tử điện được thay bằng các phần tử cơ tương ứng (Phương trình Lagơrăng – Macxoăn).

Phương trình Lagơrăng – Macxoăn sẽ được viết như sau

$$\begin{aligned}
\frac{d}{dt}\frac{\partial T}{\partial \dot{q}} - \frac{\partial T}{\partial q} &= -\frac{\partial \Pi}{\partial q} + Q_q \\
\frac{d}{dt}\frac{\partial T}{\partial \dot{x}} - \frac{\partial T}{\partial x} &= -\frac{\partial \Pi}{\partial x} + Q_x.
\end{aligned}$$

trong đó $T$ là tổng động năng cơ học của lõi và động năng động điện của các điện tích, $\Pi$ là thế năng đàn hồi của lò xo và của trọng lực, $Q_q$ và $Q_x$ là hai lực suy rộng do các lực không thế. Đó là lực cản điện trở ôm và sức điện động $E$. Ta có

$$T = \frac{m\dot{x}^2}{2} + L(x)\frac{\dot{q}^2}{2} \, ; \quad \Pi = -mgx + \frac{cx^2}{2}.$$

Các lực suy rộng $Q_q$ và $Q_x$ được tính như sau :

Tổng công nguyên tố của lực điện từ, lực cản điện trở ôm và sức điện động trong chuyển động thật của hệ là :

$$\Sigma dA(\vec{F}_k) = -R\dot{q}^2 dt + E\dot{q} dt,$$

Vậy

$$\Sigma dA(\vec{F}_k) = -R\dot{q} dq + E dq,$$

và do đó tổng công nguyên tố của các lực trong di chuyển khả dĩ của cơ hệ cơ điện sẽ là

$$\Sigma \delta A(\vec{F}_k) = (E - R\dot{q})\delta q$$

Từ đó ta nhận được biểu thức các lực suy rộng

$$Q_q = E - R\dot{q} \, ; \quad Q_x = 0.$$

Để viết các phương trình Lagơrăng – Macxoăn, ta tính các đạo hàm

$$\begin{aligned}
\frac{\partial T}{\partial q} &= 0 \, ; \quad \frac{\partial T}{\partial \dot{q}} = L(x)\dot{q} \, ; \\
\frac{d}{dt}\frac{\partial T}{\partial \dot{q}} &= L(x)\ddot{q} + \frac{dL}{dx}\dot{x}\dot{q}. \\
\frac{\partial T}{\partial x} &= \frac{\dot{q}^2}{2}\frac{dL}{dx} \, ; \quad \frac{\partial T}{\partial \dot{x}} = m\dot{x} \, ; \\
\frac{d}{dt}\frac{\partial T}{\partial \dot{x}} &= m\ddot{x}.
\end{aligned}$$

Vậy phương trình vi phân chuyển động của hệ sẽ là

$$\begin{aligned}
L\ddot{q} + \dot{q}\dot{x}\frac{dL}{dx} &= E - R\dot{q}, \\
m\ddot{x} - \frac{\dot{q}^2}{2}\frac{dL}{dx} &= mg - cx.
\end{aligned}$$

Sau khi chuyển vế và rút gọn, ta được :

$$\begin{aligned}
L\ddot{q} + R\dot{q} + \dot{q}\dot{x}\frac{dL}{dx} &= E \\
m\ddot{x} + cx - \frac{1}{2}\dot{q}^2\frac{dL}{dx} &= mg.
\end{aligned}$$

Để tìm vị trí cân bằng của hệ, ở đó :

$$\ddot{q} = \ddot{x} = 0 \, ; \quad \dot{x} = 0 \, ; \quad x = x_o \, ; \quad \dot{q} = \dot{q}_o \, ;$$

ta thay giá trị này vào phương trình chuyển động.

Ta có : $R\dot{q}_o = E$ ; tức : $\dot{q}_o = \dfrac{E}{R} = \text{hằng}$,

$$\begin{aligned}
cx_o &= mg + \frac{1}{2}\dot{q}_o^2\left(\frac{dL}{dx}\right)_o \, ; \\
\text{tức } x_o &= \frac{mg}{c} + \frac{\dot{q}_o^2}{2c}\left(\frac{dL}{dx}\right)_o
\end{aligned}$$

Nếu xem chuyển động bé của lõi sắt quanh vị trí bằng :

$$x = x_o + \xi, \quad \text{trong đó } \xi \text{ là bé}$$

và $q = q_o + e$, trong đó $e$ là bé.

Từ đó $\dot{\xi} = \dot{x}$ là bé và $\dot{e}$ cũng bé,

$$L(x) = L(x_o + \xi) = a + b\xi \, ; \quad \frac{dL}{dx} = b$$

Trong trường hợp như vậy có thể bỏ qua các số hạng bậc hai đối với các đại lượng $\xi$, $\dot{\xi}$, $e$, $\dot{e}$ và ta nhận được hệ phương trình vi phân chuyển động đã tuyến tính hóa như sau :

$$\begin{aligned}
a\ddot{e} + R\dot{e} + b\dot{q}_o\dot{\xi} &= 0 \\
m\ddot{\xi} + c\xi - b\dot{q}_o\dot{e} &= 0
\end{aligned}$$

---

## 5.4. BÀI TẬP

**5.1.** Thanh $DE$ có trọng lượng là $Q$ tựa trên ba con lăn như nhau và có cùng trọng lượng $P$. Chịu tác dụng lực ngang $\vec{F}$ hướng về bên phải. Coi như không xảy ra hiện tượng trượt giữa thanh và các con lăn cũng như giữa các con lăn và nền ngang. Tìm gia tốc của thanh $DE$. Coi các con lăn như những khối trục đồng chất. Bỏ qua ma sát lăn (H. 5–7).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_7.svg" alt="Hình 5-7" class="figure-img" />
  <p class="figure-caption">Hình 5-7</p>
</div>

*Trả lời :* $a = \dfrac{8gF}{8Q + 9P}$.

---

**5.2.** Một sợi dây nhẹ, không giãn, một đầu buộc vào vật $A$, sau đó vắt qua ròng rọc $B$ cố định, ròng rọc động $C$, ròng rọc cố định $D$ và buộc vào vật $E$, có thể trượt trên mặt phẳng ngang. Một vật $K$ được treo vào tâm của ròng rọc động $C$ có trọng lượng $Q$. Hệ số ma sát trượt động giữa vật $E$ và mặt phẳng ngang là $f$. Xác định điều kiện để vật $K$ có thể tụt xuống nếu vận tốc đầu của tất cả các vật đều bằng không. Tìm gia tốc của vật $K$. Bỏ qua khối lượng các ròng rọc và sự trượt giữa dây và ròng rọc (H. 5–8)

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_8.svg" alt="Hình 5-8" class="figure-img" />
  <p class="figure-caption">Hình 5-8</p>
</div>

*Trả lời :* $Q > P(1 + f)$ ; $a = g\dfrac{Q - P(1 + f)}{Q + 2P}$.

---

**5.3.** Hai vật $M_1$ và $M_2$ có trọng lượng bằng nhau và bằng $P$ chuyển động dọc hai mặt phẳng nghiêng với mặt phẳng ngang các góc tương ứng là $\alpha$ và $\beta$. Một dây nhẹ không giãn, có một đầu được buộc vào vật $M_1$ sau đó được vắt qua ròng rọc cố định $O_1$, choàng qua ròng rọc động $K$, và vắt lần nữa qua ròng rọc cố định, rồi nối với vật $M_2$. Một vật $M$ có trọng lượng $Q$ được treo vào tâm của ròng rọc $K$. Bỏ qua ma sát và khối lượng của các ròng rọc. Tìm gia tốc của vật $M$ (H. 5–9).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_9.svg" alt="Hình 5-9" class="figure-img" />
  <p class="figure-caption">Hình 5-9</p>
</div>

*Trả lời :* Xem gia tốc $a$ của vật $M$ là dương khi nó hướng xuống và âm khi nó hướng lên, ta có

$$a = g\frac{Q - P(\sin\alpha + \sin\beta)}{Q + 2P}.$$

---

**5.4.** Lập phương trình vi phân chuyển động của con lắc toán học có khối lượng $m$ được treo vào đầu tự do của một dây đàn hồi có độ dài khi cân bằng là $l$ và có độ cứng đàn hồi là $c$.

*Trả lời :*

$$\begin{aligned}
(1 + z)\ddot{\varphi} + 2\dot{z}\dot{\varphi} + \frac{g}{l}\sin\varphi &= 0, \\
\ddot{z} - (1 + z)\dot{\varphi}^2 + \frac{c}{m}z + \frac{g}{l}(1 - \cos\varphi) &= 0,
\end{aligned}$$

trong đó $\varphi$ là góc lệch của dây treo đối với phương thẳng đứng và $z$ là độ giãn tương đối của dây so với chiều dài khi cân bằng.

Trong điều kiện dao động nhỏ, phương trình chuyển động của con lắc được viết như sau

$$\begin{aligned}
z &= A\sin\left(\sqrt{\frac{c}{m}}\,t + \alpha\right), \\
\varphi &= B\sin\left(\sqrt{\frac{g}{l}}\,t + \beta\right),
\end{aligned}$$

trong đó các hằng số $A$, $B$, $\alpha$, $\beta$ phụ thuộc vào điều kiện đầu của chuyển động.

---

**5.5.** Trở lại thí dụ 5–3 khi kể đến ma sát trượt giữa con chạy và nền ngang với hệ số ma sát trượt động $f = \text{hằng}$. Viết phương trình vi phân chuyển động của con lắc.

*Trả lời :*

$$\begin{aligned}
l\ddot{\varphi} + \cos\varphi\ddot{y} + g\sin\varphi &= 0 \\
\frac{d}{dt}\big[(m_1 + m_2)\dot{y} + m_2l\dot{\varphi}\cos\varphi\big] &= \\
-f\big[(m_1 + m_2)g + m_2l\cos\varphi\dot{\varphi}^2 & \\
+ lm_2\sin\varphi\ddot{\varphi}\big]\operatorname{sign}\dot{y}, &
\end{aligned}$$

trong đó

$$\operatorname{sign}\dot{y} = \begin{cases} 1 \text{ khi } \dot{y} > 0 \\ -1 \text{ khi } \dot{y} < 0 \end{cases}$$

---

**5.6.** Một ống trụ tròn rỗng, đồng chất, có trọng lượng $P$, bán kính đáy $R$ và có thể quay quanh trục thẳng đứng. Trên mặt trong của ống trụ có xẻ một rãnh đinh ốc, bước của đường đinh ốc là $h$. Một viên bi nhỏ, chạy trong rãnh ấy dưới tác dụng của trọng lượng bản thân. Bỏ qua ma sát. Thành lập phương trình vi phân chuyển động của cơ hệ, cho biết ban đầu hệ đứng yên. Tìm phương trình chuyển động của cơ hệ.

*Trả lời :* Phương trình vi phân chuyển động cơ hệ

$$\begin{aligned}
\frac{Q + P}{g}R^2\ddot{\theta} + \frac{Q}{g}R\sin\gamma\ddot{s} &= 0. \\
\frac{Q}{g}R\sin\gamma\ddot{\theta} + \frac{Q}{g}\ddot{s} &= P\cos\gamma,
\end{aligned}$$

Phương trình chuyển động của hệ

$$\begin{aligned}
\theta &= \frac{g}{2}\frac{P\sin 2\gamma}{QR\cos^2\gamma + PR}\frac{t^2}{2} \\
s &= g\frac{Q\cos 2\gamma + P}{Q\cos^2\gamma + P}\cdot\frac{P}{Q}\cos\gamma\frac{t^2}{2},
\end{aligned}$$

trong đó $\theta$ là góc quay của trục, $s$ là quãng đường đi được của viên bi theo rãnh.

---

**5.7.** Một hình trụ khối lượng $m$, bán kính $r$ lăn không trượt bên trong của một trụ rỗng, khối lượng $M$, bán kính $R$, trụ này có thể quay quanh trục nằm ngang $O$. Mômen quán tính của các trụ đối với các trục của mình tương ứng bằng $MR^2$ và $\dfrac{mr^2}{2}$. Thành lập phương trình vi phân chuyển động của hệ và tìm các tích phân đầu (H. 5–10).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_10.svg" alt="Hình 5-10" class="figure-img" />
  <p class="figure-caption">Hình 5-10</p>
</div>

*Trả lời :*

$$\begin{aligned}
MR^2\dot{\theta} - \frac{1}{2}mR\big[(R - r)\dot{\varphi} + R\dot{\theta}\big] &= C_1 \\
\frac{1}{2}MR^2\dot{\theta}^2 + \frac{1}{4}m\big[(R - r)\dot{\varphi} - R\dot{\theta}\big]^2 & \\
+ \frac{m}{2}(R - r)^2\dot{\varphi}^2 - mg(R - r)\cos\varphi &= C_2.
\end{aligned}$$

Ở đó $\varphi$ là góc quay của đoạn thẳng nối tâm các trụ, $\theta$ là góc quay của trụ ngoài.

---

**5.8.** Một đĩa đồng chất bán kính $R$, có khối lượng $M$ có thể quay quanh trục nằm ngang $O$. Một dây nhẹ không giãn $AB$, một đầu của nó treo vào vành đĩa tại $A$, và đầu kia buộc vật có khối lượng $m$ tại $B$. Thành lập phương trình vi phân chuyển động của hệ (H. 5–11). Độ dài của dây bằng $l$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_11.svg" alt="Hình 5-11" class="figure-img" />
  <p class="figure-caption">Hình 5-11</p>
</div>

*Trả lời :*

$$\begin{aligned}
\left(m + \frac{M}{2}\right)R^2\ddot{\varphi} &+ mRl\cos(\varphi - \psi)\ddot{\psi} \\
&+ mRl\sin(\varphi - \psi)\dot{\psi}^2 + mgR\sin\varphi = 0
\end{aligned}$$

$$\begin{aligned}
mRl\cos(\varphi - \psi)\ddot{\varphi} &+ ml^2\ddot{\psi} \\
&- mRl\sin(\varphi - \psi)\dot{\varphi}^2 + mgl\sin\psi = 0
\end{aligned}$$

---

**5.9.** Xác định chuyển động của cơ hệ gồm hai khối lượng $m_1$ và $m_2$ có thể trượt tịnh tiến dọc thanh nhẵn nằm ngang $(Ox)$. Các khối lượng được nối với nhau nhờ một lò xo có độ cứng $c$. Khoảng cách giữa hai khối tâm của hai khối lượng khi lò xo không làm việc là $l$. Trạng thái đầu của cơ hệ được xác định bằng giá trị của vận tốc và toạ độ khối tâm của hai vật khi $t = 0$ ; $x_1 = 0$ ; $\dot{x}_1 = u_o$ ; $x_2 = l$ ; $\dot{x}_2 = 0$ (H. 5–12).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_12.svg" alt="Hình 5-12" class="figure-img" />
  <p class="figure-caption">Hình 5-12</p>
</div>

*Trả lời :*

$$\begin{aligned}
x_1 &= \frac{1}{m_1 + m_2}\left(m_1 u_o t + \frac{m_2 u_o}{k}\sin kt\right), \\
x_2 - l &= \frac{1}{m_1 + m_2}\left(m_1 u_o t - \frac{m_1 u_o}{k}\sin kt\right), \\
k &= \sqrt{c\left(\frac{1}{m_1} + \frac{1}{m_2}\right)}.
\end{aligned}$$

---

**5.10.** Vật $A$ có khối lượng $m$ được kéo lên nhờ các trục quay I và II có cùng bán kính $R$ và mômen quán tính của chúng đối với trục quay riêng bằng $J$. Xác định gia tốc của vật $A$ nếu các trục quay chịu tác dụng của các ngẫu lực có mômen là $M_1$ và $M_2$. Bỏ qua khối lượng của các ròng rọc và ma sát ở các ổ trục. Coi các dây là nhẹ, không giãn và không trượt đối với các ròng rọc (H. 5–13).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_13.svg" alt="Hình 5-13" class="figure-img" />
  <p class="figure-caption">Hình 5-13</p>
</div>

*Trả lời :* $a_A = \dfrac{2M_1 + M_2 - 5mgR}{J + 5mR^2}$.

---

**5.11.** Một thanh mảnh đồng chất $AB$ có trọng lượng $P$ và độ dài $2l$, đầu $A$ trượt theo đường thẳng đứng còn đầu $B$ trượt trong mặt phẳng ngang.

Thành lập phương trình vi phân chuyển động của thanh và tìm các tích phân đầu của chuyển động (H. 5–14).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_14.svg" alt="Hình 5-14" class="figure-img" />
  <p class="figure-caption">Hình 5-14</p>
</div>

*Trả lời :* Phương trình vi phân chuyển động

$$\begin{aligned}
\ddot{\varphi} - \dot{\theta}^2\sin\varphi\cos\varphi &= \frac{3}{4}\frac{g}{l}\sin\varphi \\
\ddot{\theta}\sin^2\varphi + 2\dot{\theta}\dot{\varphi}\sin\varphi\cos\varphi &= 0,
\end{aligned}$$

trong đó $\varphi$ là góc nghiêng giữa thanh với đường thẳng đứng và $\theta$ là góc giữa hình chiếu của thanh trên mặt phẳng ngang với trục $Ox$.

Các tích phân đầu :

$$\begin{aligned}
\dot{\theta}\sin^2\varphi &= C_1, \\
\dot{\varphi}^2 + \dot{\theta}^2\sin^2\varphi + \frac{3}{2}\frac{g}{l}\cos\varphi &= C_2
\end{aligned}$$

trong đó $C_1$ và $C_2$ là các hằng số tích phân.

---

**5.12.** Một dầm có tiết diện vuông, khối lượng $M$ bị khoét một lỗ hình trụ bán kính $R$ được nối với thành cố định nhờ một lò xo có độ cứng $c$ và có thể trượt không ma sát dọc theo phương ngang. Dọc theo bề mặt của lỗ có một hình trụ đồng chất khối lượng $m$, bán kính $r$ ($r < R$), lăn không trượt (H. 5–15).

Thành lập phương trình vi phân chuyển động của cơ hệ.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_15.svg" alt="Hình 5-15" class="figure-img" />
  <p class="figure-caption">Hình 5-15</p>
</div>

*Trả lời :*

$$\begin{aligned}
(M + m)\ddot{x} + m(R - r)\cos\varphi\ddot{\varphi} & \\
- m(R - r)\sin\varphi\dot{\varphi}^2 + cx &= 0, \\
\frac{3}{2}(R - r)^2\ddot{\varphi} + (R - r)\cos\varphi\ddot{x} & \\
+ g(R - r)\sin\varphi &= 0,
\end{aligned}$$

trong đó $x$ là hoành độ của trọng tâm của dầm, $\varphi$ là góc giữa đoạn thẳng nối tâm của lỗ và tâm của trụ đối với đường thẳng đứng.

---

**5.13.** Một dầm có khối lượng $M$ được nối với các tường cố định nhờ các lò xo có độ cứng như nhau $c$, có thể trượt không ma sát dọc sàn ngang. Một vật (được xem như chất điểm) có khối lượng $m$ được buộc vào một đầu dây có chiều dài $l$ và được treo vào khối tâm của dầm. Dây được xem là mảnh và không giãn. Thành lập phương trình vi phân chuyển động của hệ, (H. 5–16).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_16.svg" alt="Hình 5-16" class="figure-img" />
  <p class="figure-caption">Hình 5-16</p>
</div>

*Trả lời :*

$$\begin{aligned}
(M + m)\ddot{x} + ml\cos\varphi\ddot{\varphi} - ml\sin\varphi\dot{\varphi}^2 + 2cx &= 0 \\
l\ddot{\varphi} + \cos\varphi\ddot{x} + g\sin\varphi &= 0,
\end{aligned}$$

trong đó $x$ là hoành độ khối tâm của dầm, $\varphi$ là góc lệch của sợi dây đối với phương thẳng đứng.

---

**5.14.** Thành lập phương trình vi phân chuyển động của một con lắc toán học có khối lượng $m$ và độ dài $l$, điểm treo của nó nằm tại tâm của đĩa bán kính $r$ và có khối lượng $m_1$. Đĩa có thể lăn không trượt theo trục ngang $Ox$, tâm của đĩa nối với tường cố định nhờ một lò xo có độ cứng $c$, (H. 5–17).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_17.svg" alt="Hình 5-17" class="figure-img" />
  <p class="figure-caption">Hình 5-17</p>
</div>

*Trả lời :*

$$\begin{aligned}
(3m_1 + 2m)\ddot{x} + 2ml\cos\varphi\ddot{\varphi} & \\
- 2ml\sin\varphi\dot{\varphi}^2 + 2cx &= 0 \\
l\ddot{\varphi} + \cos\varphi\ddot{x} + g\sin\varphi &= 0.
\end{aligned}$$

---

**5.15.** Giải bài tập 4–11 khi trục quay thẳng đứng có mômen quán tính đối với trục tâm của nó bằng $J$ và chịu tác dụng ngẫu lực $M$, còn thanh đồng chất $AB$ có khối lượng $m$. Thành lập phương trình vi phân chuyển động của cơ hệ (H. 4–16).

*Trả lời :*

$$\begin{aligned}
\left[J + \frac{m}{6}(a^2 - ab + b^2)\sin^2\varphi\right]\ddot{\theta} & \\
+ \frac{m}{6}(a^2 - ab + b^2)\sin 2\varphi\,\dot{\theta}\dot{\varphi} &= M \\
\ddot{\varphi} - \frac{1}{2}\sin 2\varphi\dot{\theta}^2 &= \frac{3}{2}g(b - a)\sin\varphi,
\end{aligned}$$

trong đó $\theta$ là góc quay của trục máy và $\varphi$ là góc giữa thanh $AB$ và đường thẳng đứng.

---

**5.16.** Giải bài tập 4–12 khi trục quay thẳng đứng có mômen quán tính đối với trục tâm của nó bằng $J$ và chịu tác dụng ngẫu lực $M$, còn thanh gãy khúc $OAB$ đồng chất có khối lượng phân bố theo chiều dài là $\sigma$ (kg/m). Thành lập phương trình vi phân chuyển động của cơ hệ, (H. 4–17).

*Trả lời :*

$$\begin{aligned}
\left[J + \frac{1}{3}\sigma(b^3\sin^2\varphi + a^3\cos^2\varphi)\right]\ddot{\theta} & \\
+ \frac{2}{3}\sigma\sin\varphi\cos\varphi\,\dot{\theta}\dot{\varphi}(b^3 - a^3) &= M \\
(a^3 + b^3)\ddot{\varphi} - \frac{1}{2}(b^3 - a^3)\sin 2\varphi\,\dot{\theta}^2 &= \\
\frac{3}{2}(a^2\cos\varphi - b^2\sin\varphi) &
\end{aligned}$$

trong đó $\theta$ là góc quay của trục máy và $\varphi$ là góc giữa thanh $OA$ với đường thẳng đứng.

---

**5.17.** Một thanh đồng chất $AB$ có khối lượng $m$ và chiều dài $l$ có thể trượt không ma sát theo các cạnh của góc vuông $DOC$, trong đó cạnh $DO$ thẳng đứng. Đầu $A$ của thanh được nối với điểm cố định $D$ nhờ lò xo có độ cứng $c$. Khung $DOC$ có mômen quán tính đối với trục $OD$ bằng $J$ có thể quay quanh trục $OD$ dưới tác dụng của ngẫu lực có mômen $M$.

Cho biết khi $\varphi = \varphi_o$ lò xo không bị biến dạng.

Thành lập phương trình vi phân chuyển động của cơ hệ, (H. 5–18).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_18.svg" alt="Hình 5-18" class="figure-img" />
  <p class="figure-caption">Hình 5-18</p>
</div>

*Trả lời :*

$$\begin{aligned}
\left(J + \frac{1}{3}ml^2\sin^2\varphi\right)\ddot{\theta} & \\
+ \frac{1}{3}ml^2\sin 2\varphi\dot{\theta}\dot{\varphi} - M &= 0 \\
l\ddot{\varphi} - \frac{1}{2}\sin 2\varphi\dot{\theta}^2 - \frac{3}{2}g\sin\varphi & \\
- \frac{3cl}{m}(\cos\varphi - \cos\varphi_o)\sin\varphi &= 0
\end{aligned}$$

trong đó $\theta$ là góc quay của khung và $\varphi$ là góc của thanh $AB$ làm với đường thẳng đứng.

---

**5.18.** Một máy điều tiết ly tâm có sơ đồ như trên hình vẽ. Các quả văng có cùng trọng lượng $P$, đối trọng có trọng lượng bằng $Q$, các điểm treo của thanh cách trục quay của máy một khoảng bằng $a$. Một lò xo có độ cứng $c$ được nối vào điểm giữa của hai thanh trên, cho biết lúc các thanh nằm theo đường thẳng đứng thì lò xo không biến dạng. Các thanh có cùng độ dài $l$.

Thành lập phương trình vi phân chuyển động của cơ hệ nếu trục quay của máy điều tiết chịu tác dụng của ngẫu lực có mômen $M$. Bỏ qua ma sát ở các ổ trục, mômen quán tính của đối trọng, trọng lượng của các thanh và lò xo, (H. 5–19).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_19.svg" alt="Hình 5-19" class="figure-img" />
  <p class="figure-caption">Hình 5-19</p>
</div>

*Trả lời :*

$$\begin{aligned}
2\frac{P + 2Q\sin^2\varphi}{g}l\ddot{\varphi} &+ 2\frac{Q}{g}l\sin 2\varphi\dot{\varphi}^2 \\
&- 2\frac{P}{g}(a + l\sin\varphi)\cos\varphi\dot{\theta}^2 \\
&+ \frac{cl}{2}\sin 2\varphi + 2(P + Q)\sin\varphi = 0,
\end{aligned}$$

$$\begin{aligned}
&2\frac{P}{g}(a + l\sin\varphi)^2\ddot{\theta} \\
&\quad + 4\frac{P}{g}(a + l\sin\varphi)l\cos\varphi\dot{\varphi}\dot{\theta} - M = 0
\end{aligned}$$

trong đó $\theta$ là góc quay của trục máy và $\varphi$ là góc giữa thanh treo và đường thẳng đứng.

---

**5.19.** Một máy điều tiết ly tâm dùng lò xo gồm có hai vật nặng $A$ và $B$ có cùng trọng lượng $P$ có thể trượt trên các trục nhẵn nằm ngang gắn cứng vào các trục quay của máy. Đối trọng $C$ có trọng lượng $Q$ được nối với các vật $A$ và $B$ bằng các thanh cứng và nhẹ có độ dài $l$. Khoảng cách từ bản lề nối thanh vào đối trọng $C$ đến trục máy bằng $e$. Các lò xo dùng đẩy hoặc kéo các vật nặng về vị trí cân bằng tĩnh có độ cứng $c$. Thành lập phương trình vi phân chuyển động của máy khi trục quay của nó chịu tác dụng ngẫu lực có mômen $M$. Bỏ qua mômen quán tính của đối trọng, khối lượng của các thanh nối, của lò xo và ma sát tại các ổ trục. Cho biết khi thanh nghiêng với đường thẳng đứng một góc $\varphi_o$ thì lò xo không biến dạng, (H 5–20).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_20.svg" alt="Hình 5-20" class="figure-img" />
  <p class="figure-caption">Hình 5-20</p>
</div>

*Trả lời :*

$$\begin{aligned}
\frac{2P\cos^2\varphi + Q\sin^2\varphi}{g}l\ddot{\varphi} &+ \frac{Q}{2g}l\sin 2\varphi\dot{\varphi}^2 \\
&- \frac{2P}{g}(e + l\sin\varphi)\cos\varphi\dot{\theta}^2 - \frac{P}{g}l\sin 2\varphi\dot{\varphi}^2 \\
&+ 2cl(\sin\varphi - \sin\varphi_o)\cos\varphi + Q\sin\varphi = 0,
\end{aligned}$$

$$\begin{aligned}
&2\frac{P}{g}(e + l\sin\varphi)^2\ddot{\theta} \\
&\quad + \frac{4P}{g}(e + l\sin\varphi)l\cos\varphi\dot{\varphi}\dot{\theta} = M,
\end{aligned}$$

trong đó $\theta$ là góc quay của trục máy, còn $\varphi$ là góc lệch giữa thanh và đường thẳng đứng.

---

**5.20.** Một hệ gồm hai bánh xe giống nhau, có cùng bán kính $a$, cùng khối lượng $m$. Mômen quán tính của mỗi bánh xe đối với trục quay bằng $C$, còn đối với đường kính bằng $A$. Hai bánh xe này có thể quay độc lập với nhau quanh trục $O_1O_2$ vuông góc với chúng và lăn không trượt trên mặt phẳng ngang, độ dài của trục bằng $l$. Một lò xo xoắn có độ cứng bằng $c$ nối giữa hai bánh xe, (H. 5–21).

Thành lập phương trình chuyển động của hệ với các điều kiện đầu như sau :

$$\begin{aligned}
\varphi_1 &= 0 \, ; \quad \dot{\varphi}_1 = 0 \, ; \\
\varphi_2 &= 0 \, ; \quad \dot{\varphi}_2 = \omega \, ;
\end{aligned}$$

($\varphi_1$, $\varphi_2$ là góc quay của các bánh xe).

Bỏ qua khối lượng của trục.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_21.svg" alt="Hình 5-21" class="figure-img" />
  <p class="figure-caption">Hình 5-21</p>
</div>

*Trả lời :*

$$\begin{aligned}
\varphi_1 &= \frac{1}{2}\left(\omega t - \frac{\omega}{k}\sin kt\right), \\
\varphi_2 &= \frac{1}{2}\left(\omega t + \frac{\omega}{k}\sin kt\right), \\
k &= \sqrt{\frac{2c}{ma^2 + C + 4A\left(\dfrac{a}{l}\right)^2}}
\end{aligned}$$

---

**5.21.** Trên hình vẽ cho một sơ đồ máy ghi địa chấn. Gắn trên bệ máy một cuộn tự cảm có $n$ vòng dây với bán kính $r$ và có điện trở ôm tổng cộng là $R$ và hệ số tự cảm $L$. Lõi sắt từ là một hình trụ đồng trục với cuộn tự cảm và gây ra trong khoảng không của nó một từ trường phẳng và xuyên tâm với hệ số cảm ứng $B$. Lõi sắt có khối lượng $M$ và được đỡ bằng các lò xo có hệ số cứng tổng cộng là $c$ và còn chịu tác dụng của lực cản nhớt $\beta\dot{x}$, trong đó $x$ là độ chuyển dời của lõi sắt từ tính từ vị trí cân bằng của nó. Nền rung theo quy luật $\xi = \xi_o\sin\omega t$. Đóng kín mạch điện bằng cách nối liền hai cực cuộn tự cảm bằng dây dẫn có điện trở nhỏ không đáng kể. Thành lập phương trình vi phân chuyển động của hệ, (H. 5–22).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_22.svg" alt="Hình 5-22" class="figure-img" />
  <p class="figure-caption">Hình 5-22</p>
</div>

*Hướng dẫn :* Các lực suy rộng do lực tác dụng tương hỗ giữa sắt từ và cuộn dây tự cảm là :

$$Q_q = -2\pi rnB\dot{x} \, ; \quad Q_x = 2\pi rnB\dot{q}.$$

*Trả lời :*

$$\begin{aligned}
M\ddot{x} + \beta\dot{x} + cx - 2\pi rnB\dot{q} &= M\xi_o\omega^2\sin\omega t \, ; \\
L\ddot{q} + R\dot{q} + 2\pi rnB\dot{x} &= 0.
\end{aligned}$$

---

**5.22.** Sơ đồ của một máy nói micrô dùng tụ điện được biểu diễn như trên hình vẽ, nó là một mạch nối tiếp gồm nguồn điện với sức điện động $E$, ống tự cảm với hệ số $L$, điện trở ôm $R$ và tụ điện có điện dung $C$ ($E$, $L$ và $R$ là những hằng số). Giữa hai tấm của tụ điện ta mắc hai lò xo có độ cứng tổng cộng $c$ để có thể thay đổi điện dung $C$ của tụ điện, khối lượng tấm động của tụ điện là $m$ ; gọi $C_o$ là điện dung của tụ điện lúc hệ cân bằng, khi đó khoảng cách giữa hai tấm tụ điện là $a$ và điện lượng của mỗi tấm đó là $q_o$. Tác dụng lên tấm động của tụ điện lực kích động $P(t)$. Lập phương trình vi phân chuyển động của hệ cơ điện ấy.

*Chỉ dẫn :*

1. Thế năng của tụ điện bằng $\Pi = \dfrac{q^2}{2C}$ ($C$ là điện dung của tụ điện, $q$ là điện lượng trên các tấm của nó), động năng của các điện tử chạy trong mạch được tính theo công thức $T = \dfrac{1}{2}Li^2$ ($L$ là hệ số tự cảm, $i = \dfrac{dq}{dt}$ cường độ dòng điện trong mạch).

2. Chọn toạ độ suy rộng là độ tăng giảm điện lượng $q$ của tụ điện và độ lệch $x$ của lò xo đối với vị trí cân bằng. Khi đó điện lượng toàn phần sẽ là $q_o + q$, còn độ lệch toàn phần của lò xo là $x_o + x$ ; ở đó $q_o$ là điện lượng của tụ điện, còn $x_o$ là độ lệch của lò xo của vị trí cân bằng đối với vị trí không biến dạng (H. 5–23).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_23.svg" alt="Hình 5-23" class="figure-img" />
  <p class="figure-caption">Hình 5-23</p>
</div>

*Trả lời :*

$$\begin{aligned}
m\ddot{x} + cx - \frac{E}{a}q - \frac{q^2}{2C_o a} &= P(t). \\
L\ddot{q} + R\dot{q} - \frac{E}{a}x + \frac{q}{C_o} - \frac{qx}{aC_o} &= 0.
\end{aligned}$$

---

**5.23.** Thành lập phương trình chuyển động của một hệ cơ điện được biểu diễn như trên hình vẽ. Chiều dài của lò xo lúc không biến dạng bằng $l$, độ cứng của nó bằng $c$, khối lượng của vật với tấm động bằng $m$. Khi lò xo không bị biến dạng khoảng cách giữa các tấm động và cố định của tụ bằng $a$, còn điện dung của nó bằng $C_1$, (H. 5–24).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_24.svg" alt="Hình 5-24" class="figure-img" />
  <p class="figure-caption">Hình 5-24</p>
</div>

*Trả lời :*

$$\begin{aligned}
m\ddot{x} + cx - \frac{q}{aC_1} &= mg + P(t). \\
L\ddot{q} + \frac{q}{C_o} - \frac{q}{aC_1}(a - x) + R\dot{q} &= e(t).
\end{aligned}$$

---

**5.24.** Một tay quay gồm trụ cố định thẳng đứng dọc theo nó di chuyển thanh đỡ 1, thanh đỡ 2 có thể chuyển động tịnh tiến đối với thanh 1 và tay với 3 cùng với bàn kẹp có thể tịnh tiến đối với thanh 2. Khối lượng các thanh 1, 2 và 3 tương ứng là $m_1$, $m_2$, $m_3$. Các động lực để thực hiện các chuyển động tịnh tiến lần lượt là $\vec{F}_{01}$, $\vec{F}_{12}$ và $\vec{F}_{23}$. Bỏ qua ma sát (Hình 5–25). Thành lập phương trình chuyển động của cơ hệ.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_25.svg" alt="Hình 5-25" class="figure-img" />
  <p class="figure-caption">Hình 5-25</p>
</div>

*Trả lời :*

$$\begin{aligned}
m_3\ddot{x} &= F_{23} \, ; \quad (m_2 + m_3)\ddot{y} = F_{12} \\
(m_1 + m_2 + m_3)\ddot{z} &= F_{01} - (m_1 + m_2 + m_3)g.
\end{aligned}$$

---

**5.25.** Một tay máy gồm cột 1 quay quanh trục thẳng đứng (thông số định vị $\varphi$) bộ phận 2 dùng để nâng hạ lên xuống theo phương thẳng đứng (thông số định vị $z$) và tay với cùng bàn kẹp 3 (thông số định vị $\rho$). Momen quán tính của khâu 1 đối với trục quay là $J_1$. Khâu 2 có khối lượng $m_2$ và mômen quán tính đối với trục quay là $J_2$. Tay với cùng với bàn kẹp có khối lượng là $m_3$ và có khối tâm nằm cách trụ quay là $\rho$, có mômen quán tính đối với trục song song với trụ quay và qua khối tâm $J_3$. Trục quay chịu tác dụng ngẫu lực có mômen $M$, còn các động lực để thực hiện các chuyển động tịnh tiến là $\vec{F}_{12}$ (để di chuyển bộ phận 2 đối với trụ đứng 1) và $\vec{F}_{23}$ (để di chuyển tay với – bàn kẹp cùng chi tiết).

Thành lập phương trình vi phân chuyển động của cơ hệ.

Bỏ qua ma sát (Hình 5–26)

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_5_26.svg" alt="Hình 5-26" class="figure-img" />
  <p class="figure-caption">Hình 5-26</p>
</div>

*Trả lời :*

$$\begin{aligned}
\frac{d}{dt}\big[(J_1 + J_2 + J_3 + m_3\rho^2)\dot{\varphi}\big] &= M \\
(m_2 + m_3)\ddot{z} &= F_{12} - (m_2 + m_3)g \, ; \\
m_3(\ddot{\rho} + \rho\dot{\varphi}^2) &= F_{23}.
\end{aligned}$$
