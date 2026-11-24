---
title: "Bài Tập Động Lực Học - Chương 7: Động Lực Học Của Chuyển Động Tương Đối"
layout: doc
---

# Chương 7: ĐỘNG LỰC HỌC CỦA CHUYỂN ĐỘNG TƯƠNG ĐỐI

## 7.1. CƠ SỞ LÝ THUYẾT

### 7.1.1. Bài toán đặt ra

Trong các chương trước chúng ta khảo sát bài toán trong hệ quy chiếu quán tính. Do yêu cầu của thực tế kỹ thuật nhiều bài toán cần phải khảo sát trong hệ quy chiếu không quán tính. Cụ thể bài toán được đặt ra như sau : Một vật thể (chất điểm, cơ hệ, vật rắn và hệ vật rắn...) dưới tác dụng của một hệ lực chuyển động đối với một hệ quy chiếu, hệ quy chiếu đó chuyển động đối với hệ quy chiếu quán tính. Hãy khảo sát chuyển động của vật thể đối với hệ quy chiếu động, được gọi là hệ quy chiếu không quán tính.

### 7.1.2. Phương trình vi phân chuyển động của chất điểm trong chuyển động tương đối

$$m\vec{a}_r = \vec{F} + \vec{F}_e^{\text{qt}} + \vec{F}_c^{\text{qt}}, \tag{7–1}$$

trong đó $m$ là khối lượng chất điểm, $\vec{a}_r$ là gia tốc tương đối của chất điểm. $\vec{F}$ là lực thật tác dụng lên chất điểm, còn $\vec{F}_e^{\text{qt}}$, $\vec{F}_c^{\text{qt}}$ lần lượt là các lực quán tính theo và lực quán tính Côriôlic của chất điểm, chúng được xác định theo công thức :

$$\vec{F}_e^{\text{qt}} = -m\vec{a}_e \, ; \quad \vec{F}_c^{\text{qt}} = -m\vec{a}_c,$$

trong đó $\vec{a}_e$ là gia tốc theo còn $\vec{a}_c = 2\vec{\omega}_e \wedge \vec{v}_r$ là gia tốc Côriôlic của chất điểm ($\vec{\omega}_e$ là vectơ vận tốc góc của hệ quy chiếu không quán tính, $\vec{v}_r$ là vận tốc tương đối của chất điểm).

Cũng như trong chuyển động tuyệt đối, từ (7–1) ta có thể xây dựng các dạng khác nhau của phương trình vi phân chuyển động trong chuyển động tương đối.

### 7.1.3. Phương trình cân bằng tương đối của chất điểm

Điều kiện cân bằng của chất điểm trong hệ quy chiếu không quán tính được viết như sau :

$$\vec{F} + \vec{F}_e^{\text{qt}} = 0 \, ; \quad \vec{v}_r(0) = 0 \tag{7–2}$$

### 7.1.4. Các định lí trong động lực học của chuyển động tương đối

Như đã biết, từ phương trình vi phân chuyển động chất điểm trong hệ quy chiếu quán tính ta xây dựng được các định lí của chất điểm và cơ hệ trong chuyển động tuyệt đối như các định lí tổng quát động lực học, phương trình chuyển động...

Về mặt hình thức ta nhận thấy phương trình vi phân chuyển động của chất điểm trong chuyển động tương đối có dạng như trong chuyển động tuyệt đối nếu ta xem lực tác dụng lên chất điểm ngoài lực thật còn bao gồm cả các lực quán tính theo và lực quán tính Côriôlic của chất điểm.

Vì vậy về nguyên tắc, tất cả các định lí đã được thiết lập cho chuyển động tuyệt đối còn đúng cho chuyển động tương đối (cả chất điểm và cơ hệ) nếu ngoài lực thật ta thêm vào các lực quán tính theo và lực quán tính Côriôlic của các chất điểm.

### 7.1.5. Chú ý

**a) Định lí biến thiên mômen động lượng cơ hệ trong chuyển động tương đối.** Nếu hệ quy chiếu không quán tính có gốc tại khối tâm $C$ của cơ hệ và chuyển động tịnh tiến so với hệ quy chiếu quán tính thì ta có

$$\frac{d}{dt}\vec{L}_C^{(r)} = \sum_{k=1}^{N} \vec{m}_C(\vec{F}_{ek}) \tag{7–3}$$

trong đó $\vec{L}^{(r)}$ là mômen động lượng của cơ hệ đối với hệ quy chiếu không quán tính. Như vậy định lí biến thiên mômen động lượng đối với hệ quy chiếu tịnh tiến cùng với khối tâm giống như trong hệ quy chiếu quán tính.

**b) Định lí biến thiên động năng.** Vì rằng các lực quán tính Côriôlic thẳng góc với vận tốc tương đối nên trong định lí động năng không có mặt lực quán tính Côriôlic. Nói cách khác

$$dT_r = \sum dA_r(\vec{F}_{ik}) + \sum dA_r(\vec{F}_{ek}^{\text{qt}}) \tag{7–4}$$

$$T_r - T_r(0) = \sum A_r(\vec{F}_k) + \sum A_r(\vec{F}_{ek}^{\text{qt}}) \tag{7–5}$$

trong đó : $T_r = \dfrac{1}{2}\sum m_k v_{rk}^2$ là động năng cơ hệ trong chuyển động tương đối, $\sum dA_r(\vec{F}_k)$ ; $\sum A_r(\vec{F}_k)$ ; $\sum dA_r(\vec{F}_{ek}^{\text{qt}})$ ; $\sum A_r(\vec{F}_{ek}^{\text{qt}})$ là công nguyên tố và công hữu hạn của các lực hoạt động (thật) và lực quán tính theo.

**c) Phương trình Lagơrăng loại II** trong chuyển động tương đối của hệ với liên kết hôlônôm giữ, dừng và lí tưởng, có $n$ bậc tự do

$$\begin{aligned}
\frac{d}{dt}\frac{\partial T_r}{\partial \dot{q}_i} - \frac{\partial T_r}{\partial q_i} &= Q_i^r(\vec{F}_k) + Q_i^r(\vec{F}_{ek}^{\text{qt}}) \\
&\quad + Q_i^r(\vec{F}_{ck}^{\text{qt}}) \, , \quad (i = \overline{1, n})
\end{aligned} \tag{7–6}$$

trong đó $q_i$, $\dot{q}_i$ là các toạ độ và vận tốc suy rộng của cơ hệ trong hệ quy chiếu không quán tính, $Q_i^r(\vec{F}_k)$, $Q_i^r(\vec{F}_{ek}^{\text{qt}})$, $Q_i^r(\vec{F}_{ck}^{\text{qt}})$ là lực suy rộng của các lực thật, lực quán tính theo và lực quán tính Côriôlic ứng với các toạ độ suy rộng $q_i$ trong chuyển động tương đối.

Tương tự có thể nhận được phương trình tổng quát động lực học trong chuyển động tương đối.

**d) Cân bằng của cơ hệ trong hệ quy chiếu không quán tính**

$$\sum \delta A_r(\vec{F}_k) + \sum \delta A_r(\vec{F}_{ek}^{\text{qt}}) = 0 \tag{7–7}$$

tức là tổng công khả dĩ của các lực hoạt động (thật) và tổng công khả dĩ của các lực quán tính theo (tính trong hệ quy chiếu không quán tính) bằng không, hoặc

$$Q_i^r(\vec{F}_k) + Q_i^r(\vec{F}_{ek}^{\text{qt}}) = 0 \, ; \quad (i = \overline{1, n}) \tag{7–8}$$

---

## 7.2. HƯỚNG DẪN ÁP DỤNG

Chúng ta thường gặp các bài toán sau :

– Tìm điều kiện cân bằng tương đối hoặc các áp lực động lực trong chuyển động tương đối (bài toán thứ nhất của động lực học).

– Tìm quy luật chuyển động tương đối của chất điểm hoặc cơ hệ (bài toán thứ hai của động lực học).

Khi giải quyết những bài toán cụ thể cần đặc biệt chú ý bước phân tích lực. Ngoài các lực thật tác dụng lên chất điểm và cơ hệ phải đặt thêm vào mỗi chất điểm lực quán tính theo và lực quán tính Côriôlic của nó. Sau đó bài toán được giải như trong hệ quy chiếu quán tính.

---

## 7.3. BÀI GIẢI MẪU

### Thí dụ 7–1

Một toa tàu chuyển động nhanh dần đều với gia tốc $a$ trên đường ray thẳng ngang. Trong toa tàu treo một con lắc toán học. Tìm vị trí cân bằng của con lắc và tìm chu kỳ dao động của con lắc đó (H. 7–1).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_1.svg" alt="Hình 7-1" class="figure-img" />
  <p class="figure-caption">Hình 7–1</p>
</div>

**Bài giải.** 1. Xác định vị trí cân bằng tương đối của con lắc trong hệ quy chiếu không quán tính là toa tàu.

Chất điểm chịu tác dụng các lực thật là trọng lực $\vec{P}$ và lực căng $\vec{T}$ của dây treo. Ta đặt vào chất điểm lực quán tính theo

$$\vec{F}_e^{\text{qt}} = -\frac{P}{g}\vec{a}$$

Vậy ta có hệ lực cân bằng :

$$(\vec{P}, \vec{T}, \vec{F}_e^{\text{qt}}) \equiv 0.$$

Khi chiếu các lực trên phương ngang và phương thẳng đứng ta nhận được

$$T\sin\alpha - F_e^{\text{qt}} = 0 \, , \quad T\cos\alpha - P = 0$$

Từ đó :

$$\text{tg}\alpha = \frac{F_e^{\text{qt}}}{P} = \frac{a}{g}$$

trong đó $\alpha$ là góc nghiêng của dây treo con lắc với phương thẳng đứng, nó xác định vị trí cân bằng tương đối của con lắc.

Từ góc lệch $\alpha$ ta suy ra được gia tốc của con tàu. Bằng cách đó, ta có một dụng cụ đơn giản để đo gia tốc của con tàu.

2. Xác định chuyển động của con lắc quanh vị trí cân bằng tương đối.

Gọi $\theta$ là góc lệch của dây treo $OM$ ở thời điểm bất kỳ đối với vị trí $OA$ của nó khi con lắc cân bằng. Lực thật tác dụng lên con lắc vẫn là trọng lực $\vec{P}$ và lực căng $\vec{T}$. Lực quán tính theo $\vec{F}_e^{\text{qt}} = -m\vec{a} = -\dfrac{P}{g}\vec{a}$, còn lực quán tính Côriôlic thì bằng không vì hệ động chuyển động tịnh tiến.

Trong chuyển động tương đối, chất điểm $M$ chuyển động trên đường tròn tâm $O$ bán kính $OM$. Ta viết phương trình vi phân chuyển động của chất điểm trong dạng toạ độ tự nhiên. Ta có :

$$ma^t = F_t + F_{et}^{\text{qt}},$$

trong đó $t$ chỉ phương tiếp tuyến với quỹ đạo.

Chúng ta nhận được :

$$ml\frac{d^2\theta}{dt^2} = -mg\sin(\alpha + \theta) - ma\cos(\alpha + \theta)$$

Coi $\theta$ là nhỏ, ta có :

$$\begin{aligned}
\sin(\alpha + \theta) &\approx \sin\alpha + \theta\cos\alpha \, ; \\
\cos(\alpha + \theta) &\approx \cos\alpha - \theta\sin\alpha.
\end{aligned}$$

Khi chú ý đến điều kiện cân bằng tương đối $a = g\text{tg}\alpha$ hoặc $a\cos\alpha = g\sin\alpha$, phương trình vi phân chuyển động của con lắc có thể được viết như sau :

$$\begin{aligned}
l\ddot{\theta} &= -(g\sin\alpha + g\cos\alpha\,\theta) + a\cos\alpha - a\sin\alpha\,\theta \\
&= -g\sin\alpha + a\cos\alpha - \theta(g\cos\alpha + a\sin\alpha) \\
&= -\theta(g\cos\alpha + a\sin\alpha).
\end{aligned}$$

Vậy chuyển động bé của con lắc quanh vị trí cân bằng tương đối có dạng dao động bé

$$l\ddot{\theta} + (g\cos\alpha + a\sin\alpha)\theta = 0,$$

hoặc

$$\ddot{\theta} + k^2\theta = 0,$$

trong đó

$$k^2 = \frac{g\cos\alpha + a\sin\alpha}{l}$$

Phương trình trên chứng tỏ con lắc dao động điều hoà quanh vị trí cân bằng tương đối với chu kỳ

$$T = \frac{2\pi}{k} = 2\pi\sqrt{\frac{l}{g\cos\alpha + a\sin\alpha}}.$$

Vì $a = g\text{tg}\alpha$ nên

$$\cos\alpha = \frac{g}{\sqrt{a^2 + g^2}} \, ; \quad \sin\alpha = \frac{a}{\sqrt{a^2 + g^2}}.$$

Dễ dàng tìm được

$$T = 2\pi\sqrt{\frac{l}{\sqrt{a^2 + g^2}}} \, ; \quad a = \sqrt{\frac{16l^2\pi^4}{T^4} - g^2}.$$

Đo chu kỳ dao động của con lắc, ta suy ra được gia tốc con tàu.

---

### Thí dụ 7–2

Ống $AB$ quay với vận tốc góc $\omega$ không đổi quanh trục thẳng đứng $CD$. Góc nghiêng của ống $AB$ với đường thẳng đứng bằng $\alpha$ không đổi.

Lúc đầu chất điểm nằm cách $O$ một đoạn $OM_o = a$ và có vận tốc tương đối $v(0) = 0$.

Xác định luật chuyển động của chất điểm $M$ dọc ống và tìm điều kiện để chất điểm đứng yên tại $M$ trong ống. Bỏ qua ma sát, (H. 7–2).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_2.svg" alt="Hình 7-2" class="figure-img" />
  <p class="figure-caption">Hình 7–2</p>
</div>

**Bài giải.** Khảo sát chuyển động của chất điểm $M$ dọc ống $AB$. Lấy mặt phẳng $CDOB$ làm hệ quy chiếu không quán tính. Lực thật tác dụng lên chất điểm gồm trọng lực $\vec{P}$ và phản lực pháp tuyến $\vec{N}$ của ống $AB$. Vì ống quay đều quanh trục thẳng đứng nên lực quán tính theo $\vec{F}_e^{\text{qt}} = -m\vec{a}_e$ có phương dọc $MH$ từ trái sang phải và có giá trị $F_e^{\text{qt}} = m\cdot MH\cdot\omega^2 = mz\sin\alpha\,\omega^2$, trong đó $z = OM$. Lực quán tính Côriôlic $\vec{F}_c^{\text{qt}} = -2m\vec{\omega} \wedge \vec{v}_r$ hướng vuông góc với $\vec{v}_r$, tức vuông góc với thanh $OB$ (H. 7–3).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_3.svg" alt="Hình 7-3" class="figure-img" />
  <p class="figure-caption">Hình 7–3</p>
</div>

Vậy ta có phương trình vi phân chuyển động chất điểm trong chuyển động tương đối

$$m\vec{a}_r = \vec{P} + \vec{N} + \vec{F}_e^{\text{qt}} + \vec{F}_c^{\text{qt}}.$$

Khi chiếu phương trình này lên trục $OB$ ta có

$$m\ddot{z} = -mg\cos\alpha + m\omega^2\sin^2\alpha\cdot z,$$

hoặc

$$\ddot{z} - \omega^2\sin^2\alpha\cdot z + g\cos\alpha = 0.$$

Nghiệm tổng quát của phương trình có dạng :

$$z = \frac{g\cos\alpha}{\omega^2\sin^2\alpha} + C_1 e^{\omega\sin\alpha\, t} + C_2 e^{-\omega\sin\alpha\, t},$$

trong đó $C_1$ và $C_2$ là những hằng số tích phân, chúng được xác định từ điều kiện đầu :

$$\begin{aligned}
z(0) &= a \, ; \quad \dot{z}(0) = 0 \, ; \\
a &= \frac{g\cos\alpha}{\omega^2\sin^2\alpha} + C_1 + C_2 \\
0 &= C_1\omega\sin\alpha - C_2\omega\sin\alpha
\end{aligned}$$

Từ đó

$$C_1 = C_2 = \frac{1}{2}\left(a - \frac{g\cos\alpha}{\omega^2\sin^2\alpha}\right).$$

Vậy chuyển động của chất điểm trong hệ quy chiếu không quán tính được mô tả bằng phương trình.

$$\begin{aligned}
z &= \frac{g\cos\alpha}{\omega^2\sin^2\alpha} \\
&\quad + \left(a - \frac{g\cos\alpha}{\omega^2\sin^2\alpha}\right)\text{ch}(\omega\sin\alpha\, t).
\end{aligned}$$

Bây giờ ta khảo sát chiều chuyển động của chất điểm $M$ dọc ống $AB$. Chú ý rằng hàm $\text{ch}(\omega\sin\alpha\, t)$ luôn luôn lấy giá trị dương với $\forall t$. Vậy chiều chuyển động của chất điểm $M$ phụ thuộc lượng : $a - \dfrac{g\cos\alpha}{\omega^2\sin^2\alpha}$.

Nếu $a > \dfrac{g\cos\alpha}{\omega^2\sin^2\alpha}$, tức nếu $\omega^2 > \dfrac{g\cos\alpha}{a\sin^2\alpha}$ thì chất điểm đi lên theo hướng $OB$.

Nếu $a < \dfrac{g\cos\alpha}{\omega^2\sin^2\alpha}$ tức nếu $\omega^2 < \dfrac{g\cos\alpha}{a\sin^2\alpha}$ thì chất điểm sẽ chuyển động theo hướng xuống từ $B$ đến $O$.

Nếu $a = \dfrac{g\cos\alpha}{\omega^2\sin^2\alpha}$ tức nếu $\omega^2 = \dfrac{g\cos\alpha}{a\sin^2\alpha}$ thì chất điểm sẽ cân bằng tương đối trên $OB$ tại $M$.

Chú ý rằng điều kiện cân bằng tương đối của chất điểm $M_o$ còn có thể tìm được bằng cách lập điều kiện cân bằng tương đối, đó là :

$$\vec{P} + \vec{N} + \vec{F}_e^{\text{qt}} = 0 \, ; \quad \vec{v}_r(0) = 0$$

và phương trình chuyển động của chất điểm trong hệ quy chiếu không quán tính có thể nhận được nhờ phương trình Lagơrăng loại II.

---

### Thí dụ 7–3

Trục máy điều tiết ly tâm quay đều với vận tốc góc $\omega_o$. Tìm liên hệ giữa vận tốc góc $\omega_o$ và góc mở $\alpha$ của thanh treo với phương thẳng đứng. Cho biết độ cứng của lò xo là $c$ và khi $\alpha = 0$ thì lò xo không biến dạng ; trọng lượng đối trọng là $P$, trọng lượng mỗi quả văng là $Q$, chiều dài các thanh bằng $l$, bản lề nối các thanh vào đòn treo và vào đối trọng cách đều máy trục là $a$. Bỏ qua khối lượng của các thanh, của lò xo và bỏ qua ma sát.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_4.svg" alt="Hình 7-4" class="figure-img" />
  <p class="figure-caption">Hình 7–4</p>
</div>

**Bài giải.** Cơ hệ khảo sát gồm toàn bộ cơ cấu điều tiết ly tâm. Cơ hệ có hai bậc tự do. Chọn các toạ độ suy rộng đủ là góc quay $\varphi$ của mặt phẳng cơ cấu và góc mở $\alpha$ của các thanh với phương thẳng đứng. Vì trục máy quay đều với vận tốc góc $\omega_o$, nên góc $\varphi = \omega_o t + \varphi_o$. Lúc cơ cấu làm việc ở trạng thái ổn định ($\omega = \omega_o$) ta có $\alpha = \text{hằng}$ (xem thí dụ 5–4), lúc đó ta có khung cân bằng trong mặt phẳng quay. Nói cách khác ta có cơ cấu một bậc tự do cân bằng tương đối trong mặt phẳng khung quay.

Không kể liên kết đàn hồi của lò xo, liên kết đặt lên cơ hệ là lý tưởng. Các lực hoạt động gồm các trọng lực, các quả văng và đối trọng $C$ và lực đàn hồi $\vec{F}$ tác dụng lên đối trọng.

Điều kiện cân bằng tương đối của khung có thể thiết lập nhờ nguyên lý di chuyển khả dĩ trong chuyển động tương đối, đó là tổng công khả dĩ của các lực hoạt động và lực quán tính theo trong chuyển động tương đối bằng không :

$$\sum \delta A_r(\vec{F}_k) + \sum \delta A_r(\vec{F}_{ek}^{\text{qt}}) = 0$$

Lực quán tính theo của hai quả văng theo phương ngang, hướng xa trục quay và có cùng giá trị bằng

$$F_{eA}^{\text{qt}} = F_{eB}^{\text{qt}} = \frac{Q}{g}(a + l\sin\alpha)\omega^2.$$

Để tính công khả dĩ ta áp dụng phương pháp tính công trong toạ độ Đềcác. Hệ trục $Oxyz$ được chọn như hình vẽ.

$$\begin{aligned}
\vec{P}_C &\begin{cases} P_{C_x} = 0 \\ P_{C_y} = P \end{cases} \\[4pt]
C &\begin{cases} x_C = 0 \\ y_C = 2l\cos\alpha \, ; \; \delta y_C = -2l\sin\alpha\delta\alpha \, ; \end{cases} \\[6pt]
\vec{Q}_A &\begin{cases} Q_{A_x} = 0 \\ Q_{A_y} = Q \end{cases} \\[4pt]
A &\begin{cases} x_A = l\sin\alpha + e \, ; \; \delta x_A = l\cos\alpha\delta\alpha \, ; \\ y_A = l\cos\alpha \, ; \; \delta y_A = -l\sin\alpha\delta\alpha \, ; \end{cases} \\[6pt]
\vec{Q}_B &\begin{cases} Q_{B_x} = 0 \\ Q_{B_y} = Q \end{cases} \\[4pt]
B &\begin{cases} x_B = -l\sin\alpha - e \, ; \; \delta x_B = -l\cos\alpha\delta\alpha \\ y_B = l\cos\alpha \, ; \; \delta y_B = -l\sin\alpha\delta\alpha. \end{cases}
\end{aligned}$$

$$\begin{aligned}
\vec{F}_{eA}^{\text{qt}} &\begin{cases} F_{eAx}^{\text{qt}} = \dfrac{Q}{g}(a + l\sin\alpha)\omega^2 \\ F_{eAy}^{\text{qt}} = 0 \end{cases} \\[6pt]
\vec{F}_{eB}^{\text{qt}} &\begin{cases} F_{eBx}^{\text{qt}} = -\dfrac{Q}{g}(a + l\sin\alpha)\omega^2 \\ F_{eBy}^{\text{qt}} = 0 \end{cases} \\[6pt]
\vec{F}_{dh} &\begin{cases} F_{dhx} = 0, \\ F_{dhy} = F = 2cl(1 - \cos\alpha). \end{cases}
\end{aligned}$$

Vậy điều kiện cân bằng tương đối của cơ cấu được viết như sau :

$$\begin{aligned}
P_C\delta y_C + Q_{Ay}\delta y_A &+ Q_{By}\delta y_B + F_{eA}^{\text{qt}}\delta x_A \\
&+ F_{eB}^{\text{qt}}\delta x_B + F_{dh}\delta y_C = 0,
\end{aligned}$$

hay

$$\begin{aligned}
-2Pl\sin\alpha\delta\alpha &- 2Ql\sin\alpha\delta\alpha \\
&+ \frac{2Q}{g}(a + l\sin\alpha)\omega^2 l\cos\alpha\delta\alpha \\
&- 4cl^2\sin\alpha(1 - \cos\alpha)\delta\alpha = 0
\end{aligned}$$

Khi giản ước cho $\delta\alpha \neq 0$, ta có :

$$\omega^2 = g\frac{P + Q + 2cl(1 - \cos\alpha)}{Q(a + l\sin\alpha)}\text{tg}\alpha.$$

Chú ý rằng có thể thiết lập điều kiện cân bằng tương đối của cơ cấu trong mặt phẳng quay của khung nhờ điều kiện cân bằng tương đối của cơ hệ trong toạ độ suy rộng đủ, tức là :

$$Q_i + Q_{ei}^{\text{qt}} = 0 \, ; \quad i = \overline{1, n}$$

trong đó $Q_i$ là lực suy rộng của các lực hoạt động, $Q_{ei}^{\text{qt}}$ là lực suy rộng của các lực quán tính theo.

Khi chọn $\alpha$ làm toạ độ suy rộng đủ của cơ cấu trong hệ quy chiếu động (tức đối với mặt phẳng khung quay) ta dễ dàng tính được :

$$\begin{aligned}
Q_\alpha &= -2l\sin\alpha[P + Q + 2cl(1 - \cos\alpha)], \\
Q_{e\alpha}^{\text{qt}} &= \frac{2Q}{g}(a + l\sin\alpha)\omega^2 l\cos\alpha.
\end{aligned}$$

Từ đó

$$\begin{aligned}
-2l\sin\alpha[P + Q &+ 2cl(1 - \cos\alpha)] \\
&+ \frac{2Q}{g}(a + l\sin\alpha)\omega^2 l\cos\alpha = 0,
\end{aligned}$$

Bằng cách đó chúng ta nhận được kết quả đã tìm ở trên.

---

### Thí dụ 7–4

Một chất điểm có khối lượng $m$ chuyển động theo vòng tròn bán kính $a$, đồng thời vòng tròn quay đều quanh trục thẳng đứng với vận tốc góc $\omega$.

Thành lập phương trình chuyển động của chất điểm đối với khung. Bỏ qua ma sát.

**Bài giải.** Khảo sát chuyển động của chất điểm $M$.

Nếu chọn khung quay làm hệ động thì chuyển động của chất điểm $M$ đối với khung là chuyển động tương đối. Như vậy, cần thành lập phương trình chuyển động của chất điểm $M$ trong chuyển động tương đối.

Trong chuyển động tương đối chất điểm $M$ có một bậc tự do.

Vì bỏ qua ma sát nên liên kết đặt lên chất điểm $M$ là lý tưởng. Lực hoạt động là trọng lực đặt vào chất điểm.

Vị trí của chất điểm đối với hệ động được xác định nhờ toạ độ suy rộng đủ $q = \theta$ là góc giữa bán kính $OM$ với trục thẳng đứng của khung.

Để viết phương trình chuyển động của chất điểm trong chuyển động tương đối ta có thể sử dụng phương trình Lagơrăng loại II trong chuyển động tương đối. Khi chú ý rằng lực suy rộng của các lực quán tính Côriôlic đối với toạ độ suy rộng $\theta$ bằng không, chúng ta có :

$$\frac{d}{dt}\frac{\partial T_r}{\partial \dot{\theta}} - \frac{\partial T_r}{\partial \theta} = Q_\theta + Q_{e\theta}^{\text{qt}}$$

trong đó $T_r$ là động năng của chất điểm trong chuyển động tương đối, $Q_\theta$ là lực suy rộng của các lực hoạt động, $Q_{e\theta}^{\text{qt}}$ là lực suy rộng của lực quán tính theo. Lực quán tính theo hướng nằm ngang xa trục quay và có giá trị (H. 7–5).

$$F_e^{\text{qt}} = ma\sin\theta\cdot\omega^2$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_5.svg" alt="Hình 7-5" class="figure-img" />
  <p class="figure-caption">Hình 7–5</p>
</div>

Để tính lực suy rộng $Q_\theta$ ta cho chất điểm một di chuyển khả dĩ ứng với góc $\delta\theta$ và tính công khả dĩ của trọng lực đặt lên chất điểm trong di chuyển khả dĩ đó

$$\delta A(\vec{F}) = -mg\sin\theta\cdot a\cdot\delta\theta$$

Vậy

$$Q_\theta = \frac{\delta A(\vec{F})}{\delta\theta} = -mga\sin\theta.$$

Bây giờ tính lực suy rộng của lực quán tính theo

$$\begin{aligned}
\delta A(\vec{F}_e^{\text{qt}}) &= F_e^{\text{qt}}\cos\theta\cdot a\cdot\delta\theta \\
&= ma^2\sin\theta\cos\theta\,\omega^2\delta\theta.
\end{aligned}$$

Do đó

$$Q_{e\theta}^{\text{qt}} = \frac{\delta A(\vec{F}_e^{\text{qt}})}{\delta\theta} = ma^2\sin\theta\cos\theta\,\omega^2$$

Dễ dàng chỉ ra rằng lực suy rộng của các lực quán tính Côriôlic bằng không, tức là.

$$Q_{c\theta}^{\text{qt}} = 0$$

Ta chuyển sang tính động năng của hệ trong chuyển động tương đối :

$$T_r = \frac{1}{2}mv_r^2.$$

Vì chất điểm chuyển động trên đường tròn với luật $s = a\theta$ nên :

$$v_r = \frac{ds}{dt} = a\dot{\theta}.$$

Do đó

$$T_r = \frac{1}{2}ma^2\dot{\theta}^2.$$

Để viết phương trình Lagơrăng loại II, ta tính các biểu thức đạo hàm

$$\begin{aligned}
\frac{\partial T_r}{\partial \theta} &= 0 \, ; \quad \frac{\partial T_r}{\partial \dot{\theta}} = ma^2\dot{\theta} \, ; \\
\frac{d}{dt}\frac{\partial T_r}{\partial \dot{\theta}} &= ma^2\ddot{\theta}.
\end{aligned}$$

Vậy phương trình vi phân chuyển động tương đối của chất điểm trong ống vòng là :

$$ma^2\ddot{\theta} = ma(a\sin\theta\cos\theta\cdot\omega^2 - g\sin\theta),$$

hay :

$$\ddot{\theta} + \left(\frac{g}{a} - \omega^2\cos\theta\right)\sin\theta = 0.$$

*Chú ý :* 1. Để viết phương trình vi phân chuyển động của chất điểm trong chuyển động tương đối, do chất điểm có một bậc tự do, ta có thể sử dụng định lí biến thiên động năng trong dạng :

$$\frac{dT_r}{dt} = W(\vec{F}) + W(\vec{F}_e^{\text{qt}}),$$

trong đó $W(\vec{F})$ là công suất của các lực hoạt động, $W(\vec{F}_e^{\text{qt}})$ là công suất của các lực quán tính theo. Dễ dàng tính được

$$\begin{aligned}
W(\vec{F}) &= \vec{P}\vec{v}_r = -mga\sin\theta\,\dot{\theta}. \\
W(\vec{F}_e^{\text{qt}}) &= \vec{F}_e^{\text{qt}}\vec{v}_r = ma^2\sin\theta\cos\theta\,\omega^2\dot{\theta} \\
\frac{dT_r}{dt} &= ma^2\dot{\theta}\ddot{\theta}
\end{aligned}$$

Từ đó :

$$\begin{aligned}
ma^2\dot{\theta}\ddot{\theta} &= ma^2\sin\theta\cos\theta\,\dot{\theta}\omega^2 \\
&\quad - mga\sin\theta\,\dot{\theta}.
\end{aligned}$$

Vì chất điểm đang chuyển động nên $\dot{\theta} \neq 0$. Sau khi rút gọn và chuyển vế ta nhận được.

$$\ddot{\theta} + \left(\frac{g}{a} - \omega^2\cos\theta\right)\sin\theta = 0$$

Bằng cách như vậy ta tìm lại được kết quả đã tìm ra ở trên.

2. Cũng có thể sử dụng định lý biến thiên mômen động trong chuyển động tương đối cho bài toán đã nêu trên.

3. Trong trường hợp cần xác định biểu thức của vận tốc tương đối của chất điểm hàm theo góc ta có thể tích phân phương trình vi phân chuyển động của chất điểm (tìm tích phân đầu) hoặc sử dụng định lý biến thiên động năng dạng hữu hạn trong chuyển động tương đối

$$T_r - T_r(0) = \sum A_r(\vec{F}_k) + \sum A_r(\vec{F}_k^{\text{qt}}),$$

trong đó $T_r$ và $T_r(0)$ là biểu thức động năng tương đối của cơ hệ (hoặc chất điểm) ứng với thời điểm đang xét và thời điểm đầu ; $\sum A_r(\vec{F}_k)$, $\sum A_r(\vec{F}_e^{\text{qt}})$ là công của các lực hoạt động và các lực quán tính theo trong di chuyển tương đối ứng với khoảng thời gian khảo sát. Cụ thể ta có :

$$\begin{aligned}
\frac{1}{2}mv_r^2 - \frac{1}{2}mv_{ro}^2 &= mga(\cos\theta - \cos\theta_o) \\
&\quad + \frac{ma^2}{2}\omega^2(\sin^2\theta - \sin^2\theta_o).
\end{aligned}$$

4. Để nhận được lời giải của bài toán có thể viết phương trình Lagơrăng loại II trong hệ quy chiếu cố định và trong phương trình vi phân chuyển động ta đặt điều kiện để ống vòng quay đều. Bằng cách đó cũng nhận được phương trình vi phân chuyển động của chất điểm $M$ trong chuyển động tương đối.

---

### Thí dụ 7–5

Một thanh đồng chất $AB$ được gắn bằng bản lề $O$ vào một trục quay thẳng đứng, trong đó chốt bản lề $O$ thẳng góc với mặt phẳng $\Pi$ chứa thanh $AB$ và trục quay. Cho $OA = a$, $OB = b$. Bỏ qua ma sát, xác định chuyển động của thanh $AB$ trong mặt phẳng $\Pi$ khi trục quay với vận tốc $\omega$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_6.svg" alt="Hình 7-6" class="figure-img" />
  <p class="figure-caption">Hình 7–6</p>
</div>

**Bài giải.** Khảo sát chuyển động của thanh $AB$. Nếu chọn mặt phẳng $\Pi$ chứa thanh $AB$ và trục quay làm hệ động thì chuyển động của thanh $AB$ trong mặt phẳng $\Pi$ là chuyển động tương đối. Để xác định chuyển động tương đối của thanh $AB$ cần thành lập phương trình vi phân chuyển động của nó. Trong chuyển động tương đối thanh $AB$ có một bậc tự do, vị trí của nó được xác định nhờ toạ độ suy rộng $q = \varphi$ là góc giữa thanh và trục quay thẳng đứng.

Bỏ qua ma sát, liên kết đặt lên thanh là lý tưởng. Lực hoạt động chỉ là trọng lực của thanh.

Chúng ta viết phương trình Lagơrăng loại hai trong chuyển động tương đối của thanh, nó có dạng :

$$\frac{d}{dt}\frac{\partial T_r}{\partial \dot{\varphi}} - \frac{\partial T_r}{\partial \varphi} = Q_\varphi + Q_{e\varphi}^{\text{qt}} + Q_{c\varphi}^{\text{qt}}$$

trong đó, $T_r$ là động năng của thanh trong chuyển động tương đối, $Q_\varphi$ – lực suy rộng của các lực hoạt động, $Q_{e\varphi}^{\text{qt}}$ – lực suy rộng của các lực quán tính theo, $Q_{c\varphi}^{\text{qt}}$ – lực suy rộng của các lực quán tính Côriôlic. Trong trường hợp này dễ dàng chỉ ra rằng $Q_{c\varphi}^{\text{qt}} = 0$.

Để tính lực suy rộng của các lực hoạt động cho thanh một di chuyển khả dĩ ứng với góc $\delta\varphi$ và tính tổng công khả dĩ của các lực trong di chuyển khả dĩ đó, hệ số của $\delta\varphi$ trong biểu thức tổng công khả dĩ sẽ là lực suy rộng.

Vì lực hoạt động là trọng lực $\vec{P}_1$ và $\vec{P}_2$ của phần $OA$ và $OB$ tương ứng nên :

$$\begin{aligned}
\sum \delta A(\vec{F}) &= P_1\frac{a}{2}\sin\varphi\,\delta\varphi - P_2\frac{b}{2}\sin\varphi\,\delta\varphi \\
&= \frac{1}{2}(P_1 a - P_2 b)\sin\varphi\,\delta\varphi.
\end{aligned}$$

Từ đó

$$Q_\varphi = \frac{1}{2}(P_1 a - P_2 b)\sin\varphi.$$

Bây giờ tính lực suy rộng của các lực quán tính theo. Nhận xét rằng lực quán tính theo của mỗi phân tố của thanh gồm lực quán tính theo pháp và lực quán tính theo tiếp, trong đó tổng công của các lực quán tính theo tiếp trong di chuyển khả dĩ tương đối bằng không (lực vuông góc với quỹ đạo tương đối), còn lực quán tính theo pháp có thể đưa được về hai lực đặt tại các điểm $I$ và $J$ $\left(OI = \dfrac{2}{3}OA \, ; \; OJ = \dfrac{2}{3}OB\right)$ có phương chiều như hình vẽ và có giá trị (xem thí dụ 4–4).

$$\begin{aligned}
F_{e1}^{\text{qt}} &= \frac{1}{2}\frac{P_1}{g}a\sin\varphi\,\omega^2 \, ; \\
F_{e2}^{\text{qt}} &= \frac{P_2}{2g}b\sin\varphi\,\omega^2.
\end{aligned}$$

$$\begin{aligned}
\sum \delta A(\vec{F}_{ek}^{\text{qt}}) &= F_{e1}^{\text{qt}}\frac{2}{3}a\cos\varphi\,\delta\varphi \\
&\quad + F_{e2}^{\text{qt}}\frac{2}{3}b\cos\varphi\,\delta\varphi \\
&= \frac{1}{3g}(P_1 a^2 + P_2 b^2)\sin\varphi\cos\varphi\,\omega^2\delta\varphi
\end{aligned}$$

Vậy :

$$Q_{e\varphi}^{\text{qt}} = \frac{1}{3g}(P_1 a^2 + P_2 b^2)\sin\varphi\cos\varphi\,\omega^2.$$

trong chuyển động tương đối thanh quay quanh trục $O$ thẳng góc với mặt phẳng $\Pi$, nên

$$\begin{aligned}
T_r &= \frac{1}{2}J_o\dot{\varphi}^2 = \frac{1}{2}\left[\frac{P_1}{g}\frac{a^2}{3} + \frac{P_2}{g}\frac{b^2}{3}\right]\dot{\varphi}^2 \\
&= \frac{1}{6g}(P_1 a^2 + P_2 b^2)\dot{\varphi}^2.
\end{aligned}$$

Vì

$$\begin{aligned}
\frac{\partial T_r}{\partial \varphi} &= 0 \, ; \quad \frac{\partial T_r}{\partial \dot{\varphi}} = \frac{1}{3g}(P_1 a^2 + P_2 b^2)\dot{\varphi}, \\
\frac{d}{dt}\frac{\partial T_r}{\partial \dot{\varphi}} &= \frac{1}{3g}(P_1 a^2 + P_2 b^2)\ddot{\varphi},
\end{aligned}$$

nên phương trình Lagơrăng loại hai trong chuyển động tương đối có dạng :

$$\begin{aligned}
\frac{1}{3g}(P_1 a^2 + P_2 b^2)\ddot{\varphi} &= \frac{1}{2}(P_1 a - P_2 b)\sin\varphi \\
&\quad + \frac{1}{3g}(P_1 a^2 + P_2 b^2)\sin\varphi\cos\varphi\,\omega^2,
\end{aligned}$$

nó mô tả chuyển động của thanh $AB$ trong mặt phẳng $\Pi$, tức chuyển động tương đối của thanh.

Rõ ràng phương trình vi phân chuyển động của thanh có một nghiệm riêng khi

$$\omega = \text{const} = \omega_o \, (\ddot{\varphi} = \dot{\varphi} = 0 \, ; \; \varphi = \text{const}).$$

$$\begin{aligned}
\varphi &= \arccos\left[\frac{3g}{2\omega_o^2}\cdot\frac{b^2 - a^2}{a^3 + b^3}\right] \\
&= \arccos\left[\frac{3g}{2\omega_o^2}\cdot\frac{b - a}{a^2 - ab + b^2}\right] = \text{const},
\end{aligned}$$

nó ứng với chế độ ổn định : $\omega = \omega_o = \text{const}$ ; $\varphi = \text{const}$, tức khi trục quay đều, thanh $AB$ tách khỏi trục quay một góc không đổi $\varphi$.

*Chú ý :* Để giải bài toán trên cũng có thể sử dụng hoặc phương trình vi phân vật quay hoặc định lí biến thiên động năng trong chuyển động tương đối.

---

## 7.4. BÀI TẬP

**7.1.** Thanh nhẵn $AB$ quay đều quanh trục thẳng đứng, hợp với nó góc $\alpha = \text{hằng}$. Xác định giá trị cực đại của vận tốc góc để một vòng nhỏ $M$ lồng trên thanh có thể cân bằng tương đối ở vị trí thấp nhất $A$. Cho biết $a$ là khoảng cách từ $A$ tới trục quay (H. 7–7).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_7.svg" alt="Hình 7-7" class="figure-img" />
  <p class="figure-caption">Hình 7–7</p>
</div>

*Trả lời :* $\omega_{\max} = \sqrt{\dfrac{g\,\text{cotg}\alpha}{a}}$.

---

**7.2.** Một máy điều tiết li tâm dùng lò xo gồm có hai vật nặng $A$ và $B$, trọng lượng mỗi vật bằng $P$, có thể trượt trên các trục nhẵn nằm ngang gắn cứng vào trục quay của máy. Đối trọng $C$ có trọng lượng $Q$ được nối với các vật $A$ và $B$ bằng các thanh cứng và nhẹ có độ dài $l$. Khoảng cách từ bản lề nối thanh với đối trọng $C$ đến trục máy bằng $e$. Các lò xo có độ cứng $c$.

Tìm góc lệch $\varphi$ tạo bởi thanh $BC$ và đường thẳng đứng khi trục quay đều với vận tốc góc $\omega$ (lúc đó $\varphi = \text{hằng}$). Cho biết khi thanh nghiêng với đường thẳng đứng góc $\varphi_o$ thì lò xo không biến dạng, (H. 7–8).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_8.svg" alt="Hình 7-8" class="figure-img" />
  <p class="figure-caption">Hình 7–8</p>
</div>

*Trả lời :*

$$\omega^2 = g\frac{Q\,\text{tg}\varphi + 2cl(\sin\varphi - \sin\varphi_o)}{2P(e + l\sin\varphi)}.$$

---

**7.3.** Cơ cấu điều tiết li tâm quay đều với vận tốc góc $\omega$. Tìm liên hệ giữa $\omega$ và góc nghiêng $\varphi$ của thanh với phương thẳng đứng khi cơ hệ cân bằng tương đối. Cho biết các thanh có cùng chiều dài là $l$, trọng lượng của mỗi quả cầu là $P$, trọng lượng của đối trọng là $Q$, độ cứng lò xo là $c$ và khi bằng $\varphi = 0$ thì lò xo không bị biến dạng. Lò xo được gắn vào các điểm giữa của các thanh treo. Trục treo của các thanh cách trục quay một đoạn $a$ (H. 7–9).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_9.svg" alt="Hình 7-9" class="figure-img" />
  <p class="figure-caption">Hình 7–9</p>
</div>

*Trả lời :*

$$\omega^2 = g\frac{\left(P + Q + \dfrac{cl}{2}\cos\varphi\right)}{P(a + l\sin\varphi)}\text{tg}\varphi$$

---

**7.4.** Một con lắc vật lý $AB$ treo vào khối $A$ như trên hình vẽ sao cho con lắc chuyển động trong mặt phẳng thẳng đứng. Cho mômen quán tính của con lắc với trục quay của nó là $J$. Khoảng cách từ $A$ đến khối tâm $C$ của con lắc là $a$ và khối lượng của con lắc bằng $m$.

Lập phương trình vi phân chuyển động của con lắc đối với khối $A$ khi khối này chuyển động dao động ngang theo quy luật $\xi = h\sin pt$. Bỏ qua ma sát (H. 7–10).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_10.svg" alt="Hình 7-10" class="figure-img" />
  <p class="figure-caption">Hình 7–10</p>
</div>

*Trả lời :* $J\ddot{\varphi} + mga\varphi = hmap^2\sin pt$, trong đó $\varphi$ là góc giữa $AC$ và đường thẳng đứng.

---

**7.5.** Một máy ghi chấn thẳng đứng của nền móng có bộ phận chủ yếu được biểu diễn như trên hình vẽ. Đòn $OA$ và con trượt có khối lượng $m$, khối tâm $C$ với $OC = a$, có mômen quán tính đối với trục $O$ là $J$. Lò xo xoắn tác dụng lên đòn $OA$ ngẫu lực xoắn có momen $M = c\varphi$, trong đó $\varphi$ là góc giữa $OA$ và $OI$ ($OI$ là vị trí cân bằng tĩnh của đòn $OA$), $c$ là hệ số cứng.

Đặt máy ghi lên nền rung thẳng đứng theo quy luật $\xi = \xi(t)$. Bỏ qua các lực cản. Lập phương trình vi phân chuyển động tương đối của đòn $OA$ đối với giá mang nó (hay đối với nền móng) khi nền không rung thì $OA$ cân bằng tĩnh ở vị trí nằm ngang (H. 7–11).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_11.svg" alt="Hình 7-11" class="figure-img" />
  <p class="figure-caption">Hình 7–11</p>
</div>

*Trả lời :* $J\ddot{\varphi} + c\varphi = ma\ddot{\xi}(t)$

---

**7.6.** Một thanh đồng chất có thể chuyển động trong mặt phẳng thẳng đứng $Oxy$, mặt phẳng này lại quay với vận tốc góc không đổi $\omega$ quanh trục thẳng đứng $Oy$. Thành lập phương trình vi phân chuyển động tương đối của thanh đối với mặt phẳng quay. Hãy so sánh với trường hợp khi mặt phẳng quay với vận tốc góc $\omega$ biến đổi (H. 7–12).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_12.svg" alt="Hình 7-12" class="figure-img" />
  <p class="figure-caption">Hình 7–12</p>
</div>

*Trả lời :*

$$\begin{aligned}
\ddot{x}_c - \omega^2 x_c &= 0 \, ; \\
\ddot{y}_c + g &= 0 \, ; \quad 2\ddot{\varphi} + \omega^2\sin 2\varphi = 0.
\end{aligned}$$

Trong trường hợp mặt phẳng quay với vận tốc góc biến đổi $\omega = \omega(t)$ phương trình chuyển động tương đối của thanh trong mặt phẳng quay cũng có dạng như trên.

---

**7.7.** Một vòng tròn nhẵn bán kính $R$ quay quanh đường kính thẳng đứng của mình với vận tốc góc không đổi $\omega$. Một vành khuyên khối lượng $m$ lồng trên vành tròn và nối với điểm cố định $O$ nhờ lò xo có độ cứng $c$. Độ dài của lò xo khi không biến dạng bằng $R\varphi_o$. Thành lập phương trình chuyển động tương đối của khuyên trong chuyển động của nó dọc theo vành tròn (H. 7–13).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_13.svg" alt="Hình 7-13" class="figure-img" />
  <p class="figure-caption">Hình 7–13</p>
</div>

*Trả lời :*

$$\begin{aligned}
\ddot{\varphi} - \frac{1}{2}\omega^2\sin 2\varphi &+ \frac{c}{2m}(\varphi - \varphi_o) \\
&- \frac{g}{R}\sin\varphi = 0.
\end{aligned}$$

---

**7.8.** Một khuyên khối lượng $m$ có thể trượt dọc theo một thanh nhẵn $AB$ có chiều dài $2l$, các đầu của thanh được hàn vào khung $OAB$ vuông góc tại $O$, khung này quay quanh trục thẳng đứng $OA$ với vận tốc góc không đổi $\omega$. Khuyên được nối với hai điểm cố định $A$ và $B$ nhờ hai lò xo có độ cứng như nhau và bằng $c$. Độ dài của mỗi lò xo khi không làm việc bằng $l$. Cho góc $\widehat{OAB} = \alpha$. Thành lập phương trình chuyển động tương đối của khuyên dọc thanh $AB$ (H. 7–14).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_14.svg" alt="Hình 7-14" class="figure-img" />
  <p class="figure-caption">Hình 7–14</p>
</div>

*Trả lời :*

$$\begin{aligned}
x &= a\sin(\sqrt{\lambda}\, t + \beta) \\
&\quad + \frac{1}{\lambda}(g\cos\alpha + \omega^2 l\sin^2\alpha),
\end{aligned}$$

khi $2c > m\omega^2\sin^2\alpha$ ;

$$\begin{aligned}
x &= b\,\text{sh}(\sqrt{\lambda}\, t + \gamma) \\
&\quad + \frac{1}{\lambda}(g\cos\alpha + \omega^2 l\sin^2\alpha),
\end{aligned}$$

khi $2c < m\omega^2\sin^2\alpha$ ;

$$x = (g\cos\alpha + \omega^2 l\sin^2\alpha)\frac{t^2}{2} + d_1 t + d_2,$$

khi $2c = m\omega^2\sin^2\alpha$, trong đó $a$, $b$, $d_1$, $d_2$, $\beta$, $\gamma$ là các hằng số tùy ý và $\lambda = \left|\dfrac{2c}{m} - \omega^2\sin^2\alpha\right|$.

---

**7.9.** Một thanh đồng chất $AB$, khối lượng $m$ và chiều dài $l$, có thể trượt không ma sát theo các cạnh của góc vuông $DOC$, cạnh $OD$ của nó theo phương thẳng đứng. Đầu $A$ của thanh nối với điểm cố định $D$ trên trục quay $OD$ nhờ lò xo có độ cứng $c$. Góc $DOC$ quay quanh trục $OD$ với vận tốc góc không đổi $\omega$. Thành lập phương trình vi phân chuyển động tương đối của thanh trong mặt phẳng quay $DOC$. Cho biết khi $\varphi = \varphi_o$ lò xo không bị biến dạng (H. 7–15).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_15.svg" alt="Hình 7-15" class="figure-img" />
  <p class="figure-caption">Hình 7–15</p>
</div>

*Trả lời :*

$$\begin{aligned}
\ddot{\varphi} - \frac{\omega^2}{2}\sin 2\varphi &- \frac{3c}{m}(\cos\varphi - \cos\varphi_o)\sin\varphi \\
&- \frac{3g}{2l}\sin\varphi = 0.
\end{aligned}$$

---

**7.10.** Một vành tròn nhẵn bán kính $R$ quay với vận tốc góc không đổi $\omega$ quanh đường kính thẳng đứng. Một khuyên khối lượng $m$ nối với điểm cố định của vành nhờ lò xo có độ cứng $c$ có độ dài khi không biến dạng là $l_o$. Thành lập phương trình vi phân chuyển động tương đối của khuyên dọc vành tròn (H. 7–16).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_7_16.svg" alt="Hình 7-16" class="figure-img" />
  <p class="figure-caption">Hình 7–16</p>
</div>

*Trả lời :*

$$\begin{aligned}
4mR\ddot{\varphi} - m\omega^2 R\sin 4\varphi &+ 2mg\sin 2\varphi \\
&- 2c\sin\varphi(2R\cos\varphi - l_o) = 0.
\end{aligned}$$

---

**7.11.** Trở lại bài 4–12. Thành lập phương trình vi phân chuyển động tương đối của thanh gãy khúc $AB$.

*Trả lời :*

$$\begin{aligned}
(a^3 + b^3)\ddot{\varphi} &- \frac{3}{2}g(a^2\sin\varphi - b^2\cos\varphi) \\
&- \frac{1}{2}\omega^2(b^3 - a^3)\sin 2\varphi = 0.
\end{aligned}$$
