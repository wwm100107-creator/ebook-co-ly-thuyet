---
title: "Chương 4: Bài toán ma sát"
layout: doc
---

# CHƯƠNG 4: BÀI TOÁN MA SÁT

Trước đây, khi xét liên kết, chúng ta đã bỏ qua ma sát. Để hoàn chỉnh bây giờ chúng ta chú ý đến ma sát trong các bài toán cân bằng.

---

## 4.1. CƠ SỞ LÍ THUYẾT

Có vật phẳng $A$ tựa lên vật $B$. Giả sử mặt tựa khô và không nhẵn. Lúc đó ngoài phản lực pháp $\vec{N}$ đã biết, vật $A$ còn chịu lực ma sát trượt $\vec{F}_{\text{ms}}$ và ngẫu lực ma sát lăn $M_l$ khi vật $A$ chuyển động hoặc có khuynh hướng chuyển động đối với vật $B$.

### 4.1.1. Định luật ma sát trượt (tĩnh, khô)

Thực nghiệm dẫn đến định luật sau :

*Dạng 1.* Lực ma sát trượt nằm trên (mặt) tiếp tuyến, ngược xu hướng trượt và có trị số :

$$F_{\text{ms}} \leqslant fN \ ;$$

trong đó : $f$ – hệ số ma sát trượt (H. 4-1).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_1.svg" alt="Hình 4-1" class="figure-img" />
  <p class="figure-caption">Hình 4-1</p>
</div>

Gọi $\vec{R} = \vec{F}_{\text{ms}} + \vec{N}$ – phản lực toàn phần ; $\varphi = \operatorname{arctg} f$ ($f = \operatorname{tg}\varphi$) – góc ma sát ; miền $zMz'$ – nón ma sát (giữa hai đường thẳng vẽ từ tiếp điểm $M$ và nghiêng với pháp tuyến góc ma sát $\varphi$). Dễ dàng từ định luật dạng 1 suy ra rằng góc $\alpha \leqslant \varphi$. Vì vậy có thể phát biểu định luật trên ở dạng 2.

*Dạng 2.* Phản lực toàn phần $\vec{R}$ của liên kết tựa có ma sát trượt nằm trong nón ma sát.

### 4.1.2. Định luật ma sát lăn (tĩnh, khô)

– Cũng từ thực nghiệm chúng ta có các định luật ma sát lăn :

*Dạng 1.* Ngẫu lực ma sát lăn ngược xu hướng lăn và có mômen.

$$M_l \leqslant kN \ ;$$

trong đó : $k$ – hệ số ma sát lăn (có thứ nguyên độ dài).

Nếu thay phản lực pháp $\vec{N}$ và ngẫu lực ma sát lăn $M_l$, chúng ta được lực $\vec{N}'$ ($N' = N$) nhưng nằm ở phía vật có xu hướng lăn tới (H. 4-1) và ở khoảng cách $d$ xác định từ hệ thức $d \cdot N = M_l$ hay $d = M_l / N \leqslant k$. Vậy có thể phát biểu :

*Dạng 2.* Khi kể đến ma sát lăn, phản lực pháp nằm ở phía vật có xu hướng lăn tới và cách pháp tuyến đoạn :

$$d \leqslant k.$$

---

## 4.2. HƯỚNG DẪN ÁP DỤNG

### 4.2.1. Phân loại các bài toán ma sát

Chúng ta phân biệt :

**1.** Bài toán một vật và hệ vật, tùy theo đối tượng được xét cân bằng là một vật hay hệ vật.

**2.** Bài toán ma sát trượt và ma sát lăn, tùy theo trong bài toán chúng ta chỉ kể đến ma sát trượt hay còn kể cả ma sát lăn.

**3.** Bài toán thuận và ngược, tùy theo cần tìm phản lực hay tìm điều kiện cân bằng

Riêng bài toán ngược, chúng ta phân biệt tỉ mỉ hơn :

a) Bài toán tìm vị trí cân bằng (tìm các đại lượng xác định vị trí của vật hoặc hệ vật).

b) Bài toán tìm điều kiện lực hoạt động phải thỏa mãn để có cân bằng.

c) Bài toán tự hãm : tìm điều kiện (các thông số hình học) để có cân bằng, dù lực hoạt động rất lớn, hoặc không còn tác dụng nữa.

Dưới đây chúng ta chỉ xét các bài toán ngược.

### 4.2.2. Trình tự và phương pháp giải

Bài toán ma sát vẫn gồm ba bước nhưng có nhiều đặc điểm cần chú ý.

*Bước 1.* Ngoài lực hoạt động và các phản lực đã nói ở chương trước, ở đây có thêm lực ma sát trượt và ngẫu lực ma sát lăn. Để vẽ đúng chiều của lực và ngẫu lực ma sát, phải xác định xu hướng trượt và lăn của các vật. Nếu có khả năng xẩy ra các xu hướng chuyển động khác nhau (tùy lực hoạt động), cần xét riêng từng xu hướng. Với các nội liên kết (giữa hai vật trong hệ), các lực và ngẫu lực ma sát là nội lực và xuất hiện từng cặp ngược chiều. Chú ý rằng tùy phương pháp giải, các điều kiện ma sát thể hiện khác nhau nên cách biểu diễn các lực và ngẫu lực ma sát cũng khác nhau : hoặc vẽ lực ma sát $\vec{F}_{\text{ms}}$ và phản lực pháp $\vec{N}$ hoặc vẽ phản lực toàn phần $\vec{R} = \vec{F}_{\text{ms}} + \vec{N}$ ; hoặc vẽ ngẫu lực ma sát lăn $M_l$ và phản lực pháp $\vec{N}$ hoặc phản lực pháp $\vec{N}'$ (H. 4-1).

*Bước 2.* Các điều kiện cân bằng gồm hai loại : 1) Các điều kiện cân bằng (các phương trình cân bằng) của hệ lực như đã biết ở các chương trước ; 2) Các điều kiện do ma sát. Như thế số các điều kiện cân bằng ở bài toán ma sát tăng lên, do đó việc giải cũng sẽ phức tạp hơn.

*Bước 3.* Giải các phương trình và điều kiện do ma sát.

Hai phương pháp giải tích và hình học được áp dụng.

**1. Phương pháp giải tích.** Vẽ lực và ngẫu lực ma sát, lập các phương trình cân bằng và viết các điều kiện ma sát dạng bất đẳng thức – thí dụ – khi chỉ có ma sát trượt :

$$F_{\text{ms}} \leqslant fN$$

Đến đây có thể theo một trong ba biến thể :

*a) Biến thể 1. Phương pháp bất đẳng thức :* Giữ nguyên bất đẳng thức ma sát và giải hệ thống hỗn hợp gồm các phương trình cân bằng và các bất phương trình ma sát. Phương pháp này rất thuận lợi khi chỉ có một bất đẳng thức ma sát.

*b) Biến thể 2. Phương pháp tới hạn :* Xét hệ ở trạng thái tới hạn (hệ sắp trượt hoặc lăn). Khi đó thay cho bất đẳng thức ma sát, chúng ta có đẳng thức $F_{\text{ms}} = fN$. Hệ hỗn hợp nói trên trở thành hệ thuần phương trình và cho phép tìm ẩn – thí dụ góc $\alpha$ – là hàm của $f$. Đó là giá trị giới hạn $\alpha^* = \alpha^*(f)$. Điều kiện cân bằng sẽ là :

$$\alpha \leqslant \alpha^*(f) \quad \text{hoặc} \quad \alpha \geqslant \alpha^*(f).$$

Chiều của bất đẳng thức được xác định nhờ kinh nghiệm hoặc dựa vào chiều biến thiên của hàm $\alpha^*(f)$ (hàm đồng biến tương ứng dấu $\leqslant$ ; hàm nghịch biến – dấu $\geqslant$).

*c) Biến thể 3. Phương pháp chuyển đến tới hạn.* Xét hệ ở trạng thái chưa tới hạn nhưng viết điều kiện ma sát dưới dạng :

$$F_{\text{ms}} = f'N \quad \text{trong đó} \quad f' \leqslant f.$$

Chúng ta cũng được hệ thuần phương trình và cho ẩn $\alpha = \alpha(f')$ là hàm của $f'$. Thay $f'$ bằng $f$ và viết điều kiện cân bằng dưới dạng bất đẳng thức trên. Chiều bất đẳng thức tùy thuộc chiều biến thiên của hàm $\alpha(f')$ khi $f'$ tăng.

**2. Phương pháp hình học.** Theo phương pháp này chúng ta vẽ nón ma sát (không vẽ phản lực pháp và lực ma sát), khi khảo sát bài toán ma sát trượt.

*a) Trường hợp có một nón ma sát.* Khi cân bằng phản lực toàn phần cân bằng với lực hoạt động. Nhưng phản lực toàn phần nằm trong nón ma sát nên lực hoạt động cũng phải có tính chất đó. Vậy điều kiện cân bằng là lực hoạt động nằm trong nón ma sát.

*b) Trường hợp có hai nón ma sát.* Xác định phần giao của hai nón ma sát. Điều kiện cân bằng là lực hoạt động cắt phần giao vừa nói (vì phải đồng quy về giao điểm của hai phản lực toàn phần là điểm hiển nhiên nằm trong phần giao).

---

## 4.3. BÀI GIẢI MẪU

### 4.3.1. Bài toán một vật trượt

### Bài 4-1 {#thi-du-4-1-đai-truyen-tren-vanh-banh-đai-đai-det-vs-đai-thang}

**Thí dụ 4-1.** Một đoạn đai truyền bị ép vào vành bánh đai bằng lực $\vec{P}$ và bị kéo bằng lực $\vec{Q}$ (nằm theo tiếp tuyến). Biết hệ số ma sát là $f$, tìm tỉ số $Q/P$ để đai không bị trượt trên vành bánh khi thiết diện có dạng : 1) chữ nhật ; 2) hình thang cân với góc giữa hai cạnh bên là $2\alpha$. (H. 4-2).

*Bài giải :* Ở trường hợp thứ nhất hệ lực tác dụng gồm : lực ép $\vec{P}$, phản lực $\vec{N}$, lực kéo $\vec{Q}$, lực ma sát $\vec{F}_{\text{ms}}$. Các phương trình cân bằng có dạng :

$$N = P \ ; \qquad Q = F_{\text{ms}}.$$

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_2.svg" alt="Hình 4-2" class="figure-img" />
  <p class="figure-caption">Hình 4-2</p>
</div>

Thay vào bất đẳng thức ma sát $F_{\text{ms}} \leqslant fN$, chúng ta được :

$$Q \leqslant fP \quad \text{hay} \quad \frac{Q}{P} \leqslant f.$$

Ở trường hợp thứ hai có hai phản lực pháp và hai lực ma sát cùng trị số. Các phương trình cân bằng có dạng :

$$2N\sin\alpha = P \ ; \qquad Q = 2F_{\text{ms}}.$$

Giải ra $N$, $F_{\text{ms}}$ và đem thay vào bất đẳng thức ma sát, chúng ta được :

$$\frac{Q}{2} \leqslant f\frac{P}{2\sin\alpha} \quad \text{hay} \quad \frac{Q}{P} \leqslant \frac{f}{\sin\alpha}.$$

Vì $\sin\alpha < 1$, nên $\dfrac{f}{\sin\alpha} > f$. Vậy với cùng lực ép $P$, đai hình thang khó bị trượt hơn đai chữ nhật.

### Bài 4-2

**Thí dụ 4-2.** Trên mặt phẳng nghiêng góc $\alpha$ với mặt nằm ngang có vật nặng trọng lượng $P$. Biết hệ số ma sát trượt là $f$. Tác dụng lực $\vec{Q}$ nằm ngang có xu hướng đẩy vật lên cao. Tìm điều kiện trị số $Q$ phải thỏa mãn để vật cân bằng (không bị đẩy lên cao hoặc bị trượt xuống thấp).

Khi nào hiện tượng tự hãm xảy ra dù tăng trị số $Q$ lên vô hạn.

*Bài giải :* Chúng ta cũng giải theo hai phương pháp.

**1. Phương pháp giải tích** (bất đẳng thức). Hai trường hợp xảy ra : vật có xu hướng trượt lên cao hoặc xuống thấp.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_3.svg" alt="Hình 4-3" class="figure-img" />
  <p class="figure-caption">Hình 4-3</p>
</div>

Hình 4-3 biểu diễn các lực tác dụng khi vật có xu hướng trượt lên cao. Hai phương trình cân bằng là :

$$\begin{aligned}
\sum F_y &= N - P\cos\alpha - Q\sin\alpha = 0, \\
\sum F_x &= Q\cos\alpha - F_{\text{ms}} - P\sin\alpha = 0.
\end{aligned}$$

$$F_{\text{ms}} \leqslant fN$$

giải ra ta được

$$Q\cos\alpha - P\sin\alpha \leqslant f(P\cos\alpha + Q\sin\alpha).$$

hay :

$$Q(\cos\alpha - f\sin\alpha) \leqslant P(f\cos\varphi + \sin\alpha).$$

Thay $f = \operatorname{tg}\varphi$, sau biến đổi, bất đẳng thức trở thành :

$$Q\cos(\varphi + \alpha) \leqslant P\sin(\varphi + \alpha). \tag{a}$$

Nếu $\alpha + \varphi \geqslant \dfrac{\pi}{2}$, bất đẳng thức (a) luôn thỏa mãn (vế trái âm, vế phải dương).

Nếu $\alpha + \varphi < \dfrac{\pi}{2}$, từ (a) suy ra :

$$Q \leqslant P\operatorname{tg}(\varphi + \alpha) = Q_1.$$

Trường hợp vật có xu hướng trượt xuống (khi tác dụng của lực $P$ mạnh hơn), lực ma sát hướng lên trên. Tiến hành tương tự chúng ta được bất đẳng thức :

$$Q\cos(\alpha - \varphi) \geqslant P\sin(\alpha - \varphi) \tag{b}$$

Nếu $\alpha \leqslant \varphi$ bất đẳng thức (b) luôn luôn thỏa mãn.

Nếu $\alpha > \varphi$ từ (b) suy ra :

$$Q \geqslant P\operatorname{tg}(\alpha - \varphi) = Q_2.$$

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_4.svg" alt="Hình 4-4" class="figure-img" />
  <p class="figure-caption">Hình 4-4</p>
</div>

Hình 4-4 tổng kết các kết quả thu được : vùng gạch chéo tương ứng các giá trị $\alpha$, $\varphi$ mà vật cân bằng không phụ thuộc $P$, $Q$ ; ở các vùng khác, vật cân bằng khi thỏa mãn điều kiện ghi kèm.

Khi tăng $Q$, điều kiện $Q \geqslant Q_2$ sẽ được thoả mãn, nên hiện tượng tự hãm tương ứng hai vùng nằm trên đường $\varphi + \alpha \geqslant \dfrac{\pi}{2}$.

**2. Phương pháp hình học.** Vẽ nón ma sát và hợp hai lực hoạt động $\vec{P} + \vec{Q} = \vec{R}$. Điều kiện cân bằng là hợp lực $\vec{R}$ nằm trong nón ma sát. Nhiều trường hợp xảy ra :

Hình 4-5a tương ứng $\alpha > \varphi \ ; \ \alpha + \varphi < \dfrac{\pi}{2}$ : vật cân bằng khi $Q_2 \leqslant Q \leqslant Q_1$ ($\vec{Q}_2$, $\vec{Q}_1$, tương ứng khi $\vec{R}$ nằm trên cạnh nón ma sát)

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_5.svg" alt="Hình 4-5" class="figure-img" />
  <p class="figure-caption">Hình 4-5</p>
</div>

Hình 4-5b tương ứng $\alpha \leqslant \varphi \ ; \ \alpha + \varphi < \dfrac{\pi}{2}$ : vật cân bằng khi $Q \leqslant Q_1$ ; ($Q_2 \leqslant 0$ nên điều kiện $Q \geqslant Q_2$ tự thoả mãn).

Hình 4-5c tương ứng $\alpha > \varphi \ ; \ \alpha + \varphi \geqslant \dfrac{\pi}{2}$ ; vật cân bằng khi $Q \geqslant Q_2$. Điều kiện này sẽ thỏa mãn khi tăng $Q$ và tự hãm xảy ra.

Hình 4-5d tương ứng $\alpha \leqslant \varphi \ ; \ \alpha + \varphi \geqslant \dfrac{\pi}{2}$ vật luôn cân bằng.

### Bài 4-3

**Thí dụ 4-3.** Thang đồng chất $AB = 2l$, trọng lượng $P$, hai đầu tựa lên nền và tường không nhẵn, hệ số ma sát $f$. Xác định góc nghiêng $\alpha$ của thang với tường để có cân bằng.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_6.svg" alt="Hình 4-6" class="figure-img" />
  <p class="figure-caption">Hình 4-6</p>
</div>

*Bài giải :*

**1. Phương pháp giải tích** (phương pháp tới hạn) :

Xét thang ở trạng thái tới hạn (sắp trượt). Hệ lực tác dụng gồm : trọng lực $\vec{P}$ ; các phản lực pháp $\vec{N}_A$, $\vec{N}_B$; các lực ma sát $\vec{F}_A$ (hướng về trái), $\vec{F}_B$ (hướng lên trên).

Lập ba phương trình cân bằng :

$$\begin{aligned}
\sum F_x &= N_B - F_A = 0 \ ; \\
\sum F_y &= N_A + F_B - P = 0 \ ; \\
\sum m_A(\vec{F}) &= P \cdot l\sin\alpha^* - F_B 2l\sin\alpha^* - N_B \cdot 2l\cos\alpha^* = 0.
\end{aligned}$$

và hai đẳng thức ma sát :

$$F_A = fN_A \ ; \qquad F_B = fN_B.$$

Thay $F_A$, $F_B$ trong phương trình cân bằng bởi biểu thức của chúng rồi từ đó rút ra :

$$N_A = \frac{P}{1 + f^2} \ ; \qquad N_B = \frac{fP}{1 + f^2} \ ;$$

và

$$\operatorname{tg}\alpha^* = \frac{2f}{1 - f^2} = \frac{2\operatorname{tg}\varphi}{1 - \operatorname{tg}^2\varphi} = \operatorname{tg} 2\varphi \quad \text{hay} \quad \alpha^* = 2\varphi.$$

Kinh nghiệm cho biết, thang càng dốc nghĩa là $\alpha$ càng nhỏ thì càng dễ cân bằng. Vậy điều kiện cân bằng là $\alpha \leqslant 2\varphi$ (có thể lập luận : tăng $f$ thì $\varphi$ tăng, vế phải đẳng thức $\alpha^* = 2\varphi$ tăng nên đặt dấu $\leqslant$).

**2. Phương pháp hình học.** Vẽ hai nón ma sát phần giao của chúng là tứ giác (gạch chéo). Thang cân bằng nếu lực hoạt động $\vec{P}$ cắt tứ giác đó hay :

$$x_P \geqslant x_I \ ; \tag{a}$$

trong đó : $x_P$ – hoành độ điểm đặt lực $\vec{P}$ ; $x_I$ hoành độ đỉnh $I$ nằm xa nhất phía trái của tứ giác nói trên.

Chúng ta có :

$$x_P = l\sin\alpha.$$

Vì tam giác $ABI$ vuông tại $I$ và góc $\widehat{ABI} = 90^\circ - (\alpha - \varphi)$ nên :

$$x_I = BI\cos\varphi = AB\cos\hat{B}\cos\varphi = 2l\sin(\alpha - \varphi)\cos\varphi.$$

Điều kiện (a) trở thành :

$$\sin\alpha \geqslant 2\sin(\alpha - \varphi)\cos\varphi$$

và cho :

$$\operatorname{tg}\alpha \leqslant \operatorname{tg} 2\varphi \quad \text{hay} \quad \alpha \leqslant 2\varphi.$$

### Bài 4-4

**Thí dụ 4-4.** Thanh $AD$ trọng lượng không đáng kể, nằm ngang trên hai ổ đỡ $B$ và $C$ không nhẵn, hệ số ma sát trượt $f$. Tại đầu $D$ đặt lực kéo $Q$ nghiêng góc $\theta$ với thanh. Cho $BC = 2CD = 2a$. Xác định góc $\theta$ để có tự hãm (thanh vẫn cân bằng) dù trị số $Q$ rất lớn.

*Bài giải.* **1. Phương pháp giải tích** (chuyển đến tới hạn). Trên hình 4-7 biểu diễn các lực tác dụng vào thanh : lực kéo $\vec{Q}$ ; các phản lực pháp $\vec{N}_1$, $\vec{N}_2$ ; các lực ma sát $\vec{F}_1$, $\vec{F}_2$.

Ba phương trình cân bằng :

$$\begin{aligned}
\sum F_x &= Q\cos\theta - F_1 - F_2 = 0 \ ; \\
\sum F_y &= Q\sin\theta + N_1 - N_2 = 0 \ ; \\
\sum m_C(\vec{F}) &= aQ\sin\theta - 2aN_1 = 0.
\end{aligned}$$

Phù hợp với các bất đẳng thức ma sát, ta đặt :

$$F_1 = f_1 N_1 \ ; \qquad F_2 = f_2 N_2 \ ;$$

trong đó : $f_1 \leqslant f \ ; \ f_2 \leqslant f$.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_7.svg" alt="Hình 4-7" class="figure-img" />
  <p class="figure-caption">Hình 4-7</p>
</div>

Thay $F_1$, $F_2$ bởi biểu thức của chúng, từ ba phương trình cân bằng suy ra :

$$\operatorname{tg}\theta = \frac{2}{f_1 + 3f_2}.$$

Khi tăng $f_1$ và $f_2$ lên trị số $f$, vế phải giảm ; vậy trạng thái cân bằng xẩy ra khi

$$\operatorname{tg}\theta \geqslant \frac{2}{4f} = \frac{1}{2f} \quad \text{hay} \quad \theta \geqslant \operatorname{arctg}\left(\frac{1}{2f}\right).$$

Điều kiện cân bằng không phụ thuộc $Q$ nên có hiện tượng tự hãm.

**2. Phương pháp hình học.** Vẽ hai nón ma sát, phần giao của chúng là phần gạch chéo có đỉnh $E$. Cân bằng xẩy ra khi lực $\vec{Q}$ cắt phần giao. Dễ dàng tính góc $\theta$ tới hạn ($\vec{Q}$ nằm theo $ED$).

$$\operatorname{tg}\theta = \frac{ED}{HD} = \frac{a\operatorname{ctg}\varphi}{2a} = \frac{1}{2f}.$$

Chúng ta tìm thấy kết quả đã biết. Tự hãm luôn xảy ra vì dù tăng trị số, lực $\vec{Q}$ vẫn cắt phần giao.

### Bài 4-5

**Thí dụ 4-5.** Đưa vật $A$ vào khe hở $a$ giữa mặt nằm ngang và đĩa tròn $O$, bán kính $R$, quay quanh trục $O$. Lực ma sát do vành đĩa đặt vào $A$ có tác dụng kéo vật $A$ qua khe hở. Biết hệ số ma sát trượt giữa vật $A$ với đĩa và mặt ngang tương ứng là $f$ và $f_1$. Tìm chiều dầy $d$ của vật $A$ để nó có thể (do biến dạng) bị kéo qua khe hở.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_8.svg" alt="Hình 4-8" class="figure-img" />
  <p class="figure-caption">Hình 4-8</p>
</div>

*Bài giải.* Vật $A$ chịu tác dụng của hệ lực gồm : phản lực pháp $\vec{N}$ và lực ma sát $\vec{F}$ (từ đĩa) ; phản lực pháp $\vec{N}_1$ và lực ma sát $\vec{F}_1$ (từ mặt ngang). Vì $A$ đã trượt nên $F_1 = f_1 N_1$ và để đơn giản, xét trường hợp mà giữa đĩa và vật $A$ xảy ra trạng thái tới hạn nên $F = fN$. Hiện tượng nói trong bài chỉ có thể xảy ra khi thành phần nằm ngang của lực ma sát $\vec{F}_1$ lớn hơn tổng thành phần nằm ngang của $\vec{F}$ và $\vec{N}$.

Gọi $\alpha$ là góc nghiêng của lực $\vec{F}$ với mặt nằm ngang. Phương trình hình chiếu (cân bằng) trên trục thẳng đứng cho :

$$N_1 = F\sin\alpha + N\cos\alpha = N(f\sin\alpha + \cos\alpha).$$

Điều kiện để vật $A$ trượt qua khe hở là :

$$fN\cos\alpha = F\cos\alpha > F_1 + N\sin\alpha = N(f_1 f\sin\alpha + f_1\cos\alpha + \sin\alpha) \ ;$$

hay

$$\operatorname{tg}\alpha < \frac{f - f_1}{1 + ff_1} = \frac{\operatorname{tg}\varphi - \operatorname{tg}\varphi_1}{1 + \operatorname{tg}\varphi\operatorname{tg}\varphi_1} = \operatorname{tg}(\varphi - \varphi_1).$$

Chú ý rằng :

$$\cos\alpha = \frac{R + a - d}{R}.$$

Vậy bất đẳng thức trên trở thành :

$$\frac{\sqrt{1 - \left(\dfrac{R + a - d}{R}\right)^2}}{\dfrac{R + a - d}{R}} < \frac{f - f_1}{1 + ff_1}.$$

Sau biến đổi chúng ta được :

$$d < a + R\left\{1 - \frac{1}{\sqrt{1 + \left(\dfrac{f - f_1}{1 + ff_1}\right)^2}}\right\}.$$

### 4.3.2. Bài toán hệ vật trượt

### Bài 4-6

**Thí dụ 4-6.** Trụ $I$ có xu hướng quay quanh trục $I$ dưới tác dụng của vật nặng $P$ treo ở đầu dây cuốn quanh tầng trong, bán kính $r$. Để giữ cân bằng, người ta dùng má hãm $B$ ép vào tầng ngoài bán kính $R$. Má hãm này được bắt vào cần $OABC$ quay được quanh $O$ và gồm đoạn thẳng đứng $OA$ và đoạn thẳng nằm ngang $ABC$. Cho $OA = a$, $AB = b$, $AC = c$, hệ số ma sát giữa má hãm và trụ là $f$. Tìm lực $Q$ thẳng đứng đặt tại $C$ để có cân bằng. Trong điều kiện nào thì hệ cân bằng, dù không có lực ép $Q$ (H. 4-9).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_9.svg" alt="Hình 4-9" class="figure-img" />
  <p class="figure-caption">Hình 4-9</p>
</div>

*Bài giải :* Xét hệ hai vật cân bằng ở trạng thái tới hạn : trụ $I$ sắp quay. Trên hình vẽ, ngoài hai lực hoạt động $\vec{P}$, $\vec{Q}$ còn biểu diễn cặp nội lực ma sát, $\vec{F}$, $\vec{F}'$ và cặp nội phản lực $\vec{N}$, $\vec{N}'$ (trị số $F = fN$).

Phương trình mômen đối với $I$ của trụ cho :

$$P \cdot r = F \cdot R = fN \cdot R \ ;$$

hay

$$N = \frac{P}{f} \cdot \frac{r}{R}.$$

Phương trình mômen đối với $O$ của cần $OABC$ cho :

$$Q \cdot c + F \cdot a = N \cdot b \ ;$$

hay

$$N = \frac{Q \cdot c}{b - fa}.$$

So sánh hai giá trị $N$, chúng ta tìm được

$$\frac{Qc}{b - fa} = \frac{Pr}{fR} \quad \text{hay} \quad Q = P\frac{(b - fa)r}{cfR}.$$

Điều kiện cân bằng là :

$$Q \geqslant P\frac{(b - fa)r}{cfR}.$$

Nếu $b - fa \leqslant 0$ nghĩa là nếu $\dfrac{b}{a} \leqslant f = \operatorname{tg}\varphi$, điều kiện cân bằng vừa thiết lập sẽ thoả mãn $Q = 0$, hệ tự cân bằng (một lực "mồi" $Q$ nhỏ tạo ra hai lực $\vec{F}$, $\vec{N}$ nhưng tác dụng gây quay cần $OABC$ quanh $O$ của $\vec{F}$ mạnh hơn nên cần $OABC$ bị ép mạnh hơn vào trụ và quá trình tiếp tục đến khi cân bằng.

### Bài 4-7

**Thí dụ 4-7.** Cho cơ cấu cam quay – cần đẩy có sơ đồ cho trên hình 4-10. Cần đẩy chịu tác dụng lực $\vec{P}$ theo phương thẳng đứng, để cơ cấu cân bằng tác dụng vào bánh cam ngẫu lực $M$. Bán kính và tâm sai của bánh cam tương ứng là $R$ và $e$, khi cơ cấu cân bằng thì $CD = DA = h$, còn bánh cam được xác định nhờ các góc $\varphi$ và $\theta$. Cho biết hệ số ma sát $f$ tại rãnh trượt $C$ và $D$.

1) Tìm ngẫu lực $M$ để cơ cấu cân bằng.

2) Tìm điều kiện để cần đẩy không bị tự hãm khi bị đẩy lên.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_10.svg" alt="Hình 4-10" class="figure-img" />
  <p class="figure-caption">Hình 4-10</p>
</div>

*Bài giải.* Cơ cấu được cân bằng tức là cần đẩy không bị đẩy lên, cũng không bị tụt xuống. Đầu tiên xét trường hợp cơ cấu cân bằng nhưng cần đẩy có xu hướng trượt lên. Trong trường hợp này các lực ma sát $\vec{F}_C$, $\vec{F}_D$ tại các rãnh $C$ và $D$ hướng xuống. Đối với bánh cam ta viết phương trình cân bằng mômen đối với trục quay của nó. Đó là :

$$\sum m_O(\vec{F}) = M - Ne\sin(\varphi + \theta) = 0 \ ;$$

từ đây ta nhận được :

$$N = \frac{M}{e\sin(\varphi + \theta)}. \tag{a}$$

Cần đẩy cân bằng nên ta nhận được các phương trình sau :

$$\begin{aligned}
\sum F_x &= -N\sin\theta + N_D - N_C = 0 \ ; \\
\sum F_y &= N\cos\theta - P - F_C - F_D = 0 \ ; \\
\sum m_A(\vec{F}_k) &= -N_D \cdot b + N_C(b + h) = 0.
\end{aligned}$$

Theo định luật ma sát trượt ta có :

$$F_C \leqslant fN_C \ ; \qquad F_D \leqslant fN_D.$$

Để giải bài toán ta đặt : $F_C = f_0 N_C \ ; \ F_D = f_0 N_D \ ; \ f_0 < f$.

Từ các phương trình cân bằng viết cho cần đẩy và các đẳng thức do ma sát ta tìm được :

$$N = \frac{P}{\cos\theta - f_0\left(1 + \dfrac{2b}{h}\right)\sin\theta}. \tag{b}$$

Từ (a) và (b) ta nhận được :

$$\frac{M}{e\sin(\varphi + \theta)} = \frac{P}{\cos\theta - f_0\left(1 + \dfrac{2b}{h}\right)\sin\theta}.$$

Điều kiện để cần đẩy không bị đẩy lên :

$$M \leqslant \frac{P \cdot e \cdot \sin(\varphi + \theta)}{\cos\theta - f\left(1 + \dfrac{2b}{h}\right)\sin\theta}.$$

Bây giờ xét trường hợp cơ cấu cân bằng nhưng cần đẩy có xu hướng tụt xuống. Trường hợp này chỉ khác trường hợp trên ở chỗ các lực masát $\vec{F}_C$ và $\vec{F}_D$ tại các rãnh trượt đổi chiều. Theo đúng cách lập luận trên ta nhận được các phương trình trên chỉ thay dấu đối với số hạng có chứa các lực ma sát. Bằng cách như vậy ta nhận được (a) và :

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_11.svg" alt="Hình 4-11" class="figure-img" />
  <p class="figure-caption">Hình 4-11</p>
</div>

$$N = \frac{P}{\cos\theta + f_0\left(1 + \dfrac{2b}{h}\right)\sin\theta}. \tag{c}$$

Từ (a) và (c) ta có :

$$\frac{M}{e\sin(\varphi + \theta)} = \frac{P}{\cos\theta + f_0\left(1 + \dfrac{2b}{h}\right)\sin\theta}.$$

Vậy để cần không bị trượt xuống cần phải :

$$M \geqslant \frac{P \cdot e \cdot \sin(\varphi + \theta)}{\cos\theta + f\left(1 + \dfrac{2b}{h}\right)\sin\theta}.$$

Điều kiện để cơ cấu cân bằng sẽ là :

$$\frac{Pe\sin(\varphi + \theta)}{\cos\theta + f\left(1 + \dfrac{2b}{h}\right)\sin\theta} \leqslant M \leqslant \frac{Pe\sin(\varphi + \theta)}{\cos\theta - f\left(1 + \dfrac{2b}{h}\right)\sin\theta}.$$

Với $h = b$ ta nhận được :

$$\frac{Pe\sin(\varphi + \theta)}{\cos\theta + 3f\sin\theta} \leqslant M \leqslant \frac{Pe\sin(\varphi + \theta)}{\cos\theta - 3f\sin\theta}.$$

Để tìm điều kiện cần đẩy không bị tự hãm khi bị đẩy lên, ta tìm điều kiện cần đẩy bị tự hãm khi bị đẩy lên và loại trừ nó.

Cần đẩy bị tự hãm (tức $M$ có giá trị lớn tùy ý khi $P \leqslant 0$ mà cơ cấu vẫn cân bằng) thì :

$$\cos\theta - 3f\sin\theta < 0,$$

tức là :

$$\operatorname{cotg}\theta \leqslant 3f.$$

Vậy để cần đẩy không bị tự hãm cần có điều kiện :

$$\operatorname{cotg}\theta \geqslant 3f$$

### Bài 4-8

**Thí dụ 4-8.** Trên hình 4-12 là sơ đồ cơ cấu bốc hàng : dây treo kéo khối $C$, đẩy xa hai cần $OA$ và ép hai cần $OB$ vào vật nặng $P$ cần bốc. Cho : $OA = L$, $OB = l$, $\widehat{AOB} = 90^\circ$, $OA$ nghiêng góc $\beta$ với giá ngang $OO$, góc ở đỉnh khối $C$ là $2\alpha$, ma sát giữa cần $AOB$ với khối $C$ và vật nặng tương ứng có hệ số $f_1$ và $f$. Tìm điều kiện để cơ cấu làm việc được (vật nặng được bốc lên dù trị số $P$ lớn).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_12.svg" alt="Hình 4-12" class="figure-img" />
  <p class="figure-caption">Hình 4-12</p>
</div>

*Bài giải :* Giả thiết vật $P$ được bốc lên cao và để đơn giản ở trạng thái tới hạn (sắp trượt). Hiển nhiên lực căng của dây đặt vào $C$ bằng đúng $P$. Trên hình 4-12 biểu diễn các lực tác dụng tương hỗ giữa cần $AOB$ bên phải với khối $C$ và với vật nặng. Điều kiện cân bằng của vật $P$ cho :

$$F = \frac{P}{2}.$$

Vì ở trạng thái tới hạn nên $F = fN$ hay $N = \dfrac{P}{2f}$.

Xét cân bằng của khối $C$ :

$$\sum F_y = 2F_1\cos\alpha + 2N_1\sin\alpha - P = 0. \tag{a}$$

Xét cân bằng của cần $AOB$ :

$$\sum m_O(\vec{F}) = F_1 \cdot L\cos(\beta + \alpha) + N_1 \cdot L\sin(\beta + \alpha) - F \cdot l\sin\beta - N \cdot l\cos\beta = 0$$

hay :

$$F_1 L\cos(\beta + \alpha) + N_1 L\sin(\beta + \alpha) = \frac{Pl}{2}\sin\beta + \frac{Pl}{2f}\cos\beta \tag{b}$$

Từ hệ hai phương trình (a), (b) rút ra :

$$\begin{aligned}
F_1 &= \frac{P \cdot L\sin(\beta + \alpha) - \dfrac{Pl\sin\alpha}{f}(f\sin\beta + \cos\beta)}{2L\sin\beta} \ ; \\
N_1 &= \frac{\dfrac{Pl\cos\alpha}{f}(f\sin\beta + \cos\beta) - PL\cos(\beta + \alpha)}{2L\sin\beta}.
\end{aligned}$$

Thay $F_1$, $N_1$ vào bất đẳng thức ma sát, $F_1 \leqslant f_1 N_1$, sau biến đổi ta được :

$$\frac{L}{l} \leqslant \frac{\cos(\beta - \varphi)\sin(\alpha + \varphi_1)}{\sin\varphi\sin(\beta + \alpha + \varphi)} \ ; \qquad f = \operatorname{tg}\varphi \ ; \ f_1 = \operatorname{tg}\varphi_1$$

### Bài 4-9

**Thí dụ 4-9.** Cho cơ cấu hãm dùng đai như trên hình 4-14. Tác dụng lực $\vec{F}$ vào đầu đòn và vuông góc với đòn để hãm rôto chịu tác dụng ngẫu lực $M$. Bán kính của rôto là $R$ và hệ số ma sát trượt giữa đai và bề mặt rôto là $f$. Xác định lực $\vec{F}$.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_13.svg" alt="Hình 4-13" class="figure-img" />
  <p class="figure-caption">Hình 4-13</p>
</div>

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_14.svg" alt="Hình 4-14" class="figure-img" />
  <p class="figure-caption">Hình 4-14</p>
</div>

*Bài giải :* Trước khi giải bài toán cần nhắc lại công thức Ơle.

Cho một mặt trụ cố định và một đai dây cuốn trên mặt trụ như trên hình 4-13. Tác dụng lên hai đầu mút của dây đai hai lực kéo $\vec{T}_1$ và $\vec{T}_2$, giả thiết $T_1 < T_2$. Gọi góc ôm giữa đai dây và trục là góc $AOB = \alpha$ (cứ mỗi khi đai cuốn quanh trục một vòng thì phải kể góc ôm tăng một lượng $2\pi$).

Điều kiện không trượt của dây đai trên mặt trụ được viết dưới dạng.

$$T_2 \leqslant T_1 e^{f\alpha},$$

trong đó : $f$ là hệ số ma sát trượt giữa đai và mặt trụ.

Bây giờ ta giải bài toán đã nêu trên.

Khảo sát cơ cấu hãm cân bằng ở trạng thái giới hạn. Coi cơ cấu đó là hệ hai vật rắn cân bằng : đòn $ED$ và rôto. Ta giải bài toán bằng phương pháp tách vật : xét sự cân bằng của rôto và thanh $ED$. Hệ lực hoạt động và lực liên kết tác dụng lên mỗi vật được biểu diễn như trên hình 4-14.

Viết phương trình cân bằng của rôto và thanh $ED$ :

$$\begin{aligned}
\sum m_O(\vec{F}) &= M - R(T_2 - T_1) = 0 \quad (\text{cho rôto}) \ ; \\
\sum m_{O_1}(\vec{F}) &= RT_2 - 2RF = 0 \quad (\text{cho thanh } ED).
\end{aligned}$$

Ngoài ra công thức Ơle cho ta :

$$T_2 = T_1 e^{f\alpha}.$$

Khi giải hệ hai phương trình nhận được, ta có :

$$F = \frac{Me^{f\alpha}}{2Re^{f\alpha} - 1}.$$

### 4.3.3. Bài toán vật và hệ vật kể đến ma sát lăn

### Bài 4-10

**Thí dụ 4-10.** Trên đường nằm ngang có bánh xe đồng chất bán kính $R$ trọng lượng $P$ chịu lực kéo $\vec{Q}$ đặt tại tâm $O$ và nghiêng góc $\theta$ với đường nằm ngang. Biết hệ số ma sát trượt $f$, hệ số ma sát lăn $k$, tìm trị số lực $Q$ để có cân bằng. Với góc nào, trị số trên của $Q$ là nhỏ nhất (H. 4-15).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_15.svg" alt="Hình 4-15" class="figure-img" />
  <p class="figure-caption">Hình 4-15</p>
</div>

*Bài giải.* Hệ lực tác dụng vào bánh xe gồm : trọng lực $\vec{P}$, lực kéo $\vec{Q}$, phản lực pháp $\vec{N}$, lực ma sát trượt $\vec{F}$, ngẫu lực ma sát lăn $M$. Lập ba phương trình cân bằng và hai bất đẳng thức ma sát :

$$\begin{aligned}
\sum F_x &= Q\cos\theta - F = 0 \ ; \\
\sum F_y &= N - P + Q\sin\theta = 0 \ ; \\
\sum m_C(\vec{F}) &= M - Q \cdot R\cos\theta = 0 \ ;
\end{aligned}$$

$$F \leqslant fN \ ; \qquad M \leqslant k'N \quad \text{với} \quad k' = \frac{k}{R}.$$

Từ ba phương trình cân bằng rút ra $N$, $F$, $M$ và thay vào hai bất đẳng thức ma sát, chúng ta sẽ được :

$$Q \leqslant \frac{fP}{\cos\theta + f\sin\theta} \ ; \qquad Q \leqslant \frac{k'P}{\cos\theta + k'\sin\theta}.$$

Vế phải của hai bất đẳng thức có cùng dạng và hàm nhất biến tăng theo $f$, $k'$. Vì vậy điều kiện cân bằng

$$Q \leqslant \min\left\{\frac{fP}{\cos\theta + f\sin\theta}, \ \frac{k'P}{\cos\theta + k'\sin\theta}\right\},$$

cho :

$$\begin{aligned}
Q &\leqslant \frac{fP}{\cos\theta + f\sin\theta} \quad \text{nếu} \quad f \leqslant k' = \frac{k}{R} \ ; \\
Q &\leqslant \frac{k'P}{\cos\theta + k'\sin\theta} \quad \text{nếu} \quad f > k' = \frac{k}{R}.
\end{aligned}$$

Những giá trị trên (ở vế phải) của $Q$ sẽ cực tiểu khi hàm ở mẫu số đạt cực đại. Dễ dàng tìm được :

– nếu $f \leqslant \dfrac{k}{R}$ ; $Q_{\min} = \dfrac{Pf}{\cos\theta + f\sin\theta}$ khi $\operatorname{tg}\theta = f = P\sin\varphi$ ; ($\operatorname{tg}\varphi = f$)

– nếu $f > \dfrac{k}{R}$ ; $Q_{\min} = \dfrac{Pk'}{\cos\theta + k'\sin\theta}$ khi $\operatorname{tg}\theta = k' = P\sin\varphi'$. ($\operatorname{tg}\varphi' = k'$)

### Bài 4-11

**Thí dụ 4-11.** Thanh đồng chất $AB = 2l$, trọng lượng $P$, bề dày không đáng kể, nằm ngang và tựa vào đĩa tròn $O$ tại đúng trọng tâm $I$ của thanh. Đĩa $O$ đồng chất, trọng lượng $P_1$ bán kính $R$, nằm trên mặt nền ngang. Biết hệ số ma sát trượt $f$ và hệ số ma sát lăn $k$ giữa đĩa với thanh và với mặt nền. Tìm hai thành phần nằm ngang $Q_1$ và thẳng đứng $Q_2$ của lực cần đặt tại $A$ để hệ ở trạng thái sắp chuyển động : thanh $AB$ chuyển động ngang, đĩa $O$ lăn không trượt đối với nền và cũng lăn không trượt tương đối với thanh.

*Bài giải.* Trên hình 4-16 biểu diễn các lực tác dụng vào hệ hai vật – thanh $AB$ và đĩa $O$, trong đó : tại $I$ có các cặp phản lực pháp, lực ma sát trượt và ngẫu lực ma sát lăn là tác dụng tương hỗ giữa thanh và đĩa ; tại $C$ có phản lực pháp, lực ma sát trượt và ngẫu lực ma sát lăn do nền tác dụng vào đĩa.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_16.svg" alt="Hình 4-16" class="figure-img" />
  <p class="figure-caption">Hình 4-16</p>
</div>

Vì chuyển động trượt chưa xảy ra nên :

$$F \leqslant fN \ ; \qquad F_1 \leqslant fN_1.$$

Vì chuyển động lăn sắp xảy ra, nên :

$$M = kN \ ; \qquad M_1 = kN_1.$$

Lập ba phương trình cân bằng của thanh $AB$ :

$$\begin{aligned}
\sum F_x &= Q_1 - F = 0 \ ; \\
\sum F_y &= N - P + Q_2 = 0 \ ; \\
\sum m_I(\vec{F}) &= -M + Q_2 \cdot l = 0.
\end{aligned}$$

Chú ý đến giá trị của $M$, từ hai phương trình cuối rút ra :

$$N = \frac{Pl}{l + k} \ ; \qquad Q_2 = \frac{Pk}{l + k},$$

và do đó :

$$M = kN = \frac{kPl}{l + k}.$$

Lập ba phương trình cân bằng của đĩa :

$$\left\{\begin{aligned}
\sum F_x &= F' - F_1 = 0 \ ; \\
\sum F_y &= N_1 - N' - P_1 = 0 \ ; \\
\sum m_C(\vec{F}) &= -M_1 + M' - 2RF' = 0.
\end{aligned}\right.$$

Dễ dàng rút ra :

$$N_1 = N + P_1 = \frac{Pl}{l + k} + P_1 \ ;$$

$$F = F_1 = \frac{M + M_1}{2R} = \frac{M + kN_1}{2R} = \frac{k}{R}\left(\frac{Pl}{l + k} + \frac{P_1}{2}\right).$$

Trở lại phương trình cân bằng thứ nhất của thanh, chúng ta tìm được :

$$Q_1 = F = \frac{k}{R}\left(\frac{Pl}{l + k} + \frac{P_1}{2}\right).$$

Do giả định về hiện tượng trượt không xảy ra, các bất đẳng thức ma sát phải thỏa mãn, nên phải có điều kiện

$$\begin{aligned}
F &= \frac{k}{R}\left(\frac{Pl}{l + k} + \frac{P_1}{2}\right) \leqslant fN = f\frac{Pl}{l + k} \ ; \\
F_1 &= \frac{k}{R}\left(\frac{Pl}{l + k} + \frac{P_1}{2}\right) \leqslant fN_1 = f\left(\frac{Pl}{l + k} + P_1\right).
\end{aligned}$$

Hiển nhiên bất đẳng thức thứ nhất nghiêm ngặt hơn.

---

## 4.4. BÀI TẬP

**4-1.** Ghép hai tấm thép bằng bulông. Giả thiết có khe hở giữa bulông và các tấm thép. Tìm lực bulông cần ép vào hai tấm thép để lực ma sát giữa chúng đủ mức chống lại lực kéo $P = 2\text{kN}$, có tác dụng không cho phép hai tấm thép trượt đối với nhau. Cho hệ số ma sát trượt $f = 0,2$ (H. 4-17).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_17.svg" alt="Hình 4-17" class="figure-img" />
  <p class="figure-caption">Hình 4-17</p>
</div>

*Trả lời :* $F \geqslant 10\text{kN}$.

**4-2.** Trụ $A$, trọng lượng $Q$, đặt trên máng trượt nằm ngang $B$ tạo bởi hai mặt nghiêng hợp với nhau một góc $\theta$ như hình 4-18. Cho hệ số ma sát trượt $f$. Tìm lực nằm ngang $P$ có thể kéo trượt trụ $A$.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_18.svg" alt="Hình 4-18" class="figure-img" />
  <p class="figure-caption">Hình 4-18</p>
</div>

*Trả lời :* $P \geqslant fQ / \sin\dfrac{\theta}{2}$.

**4-3.** Trên trục nằm ngang không nhẵn $Ox$ có con chạy $A$, trọng lượng $P$. Nhờ sợi dây vòng qua ròng rọc $B$ con chạy bị kéo bởi vật cùng trọng lượng. Biết hệ số ma sát trượt giữa $A$ và trục ngang là $f = \operatorname{tg}\varphi$. Tìm góc nghiêng $\theta$ của đoạn dây $AB$ với đường thẳng đứng khi cân bằng (H. 4-19).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_19.svg" alt="Hình 4-19" class="figure-img" />
  <p class="figure-caption">Hình 4-19</p>
</div>

*Trả lời :* $\theta \leqslant 2\varphi$.

**4-4.** Vật $B$ có trọng lượng $P$ nằm trên một mặt không nhẵn có dạng một phần tư cung tròn và được giữ cân bằng nhờ lực kéo $T$ đặt vào dây $BAD$. Cho hệ số ma sát trượt là $f = \operatorname{tg}\varphi$. Tìm lực kéo $T$. (H. 4-20).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_20.svg" alt="Hình 4-20" class="figure-img" />
  <p class="figure-caption">Hình 4-20</p>
</div>

*Trả lời :*

$$P\frac{\sin(\alpha - \varphi)}{\sin\left(\dfrac{\pi + 2\alpha}{4} - \varphi\right)} \leqslant T \leqslant P\frac{\sin(\alpha + \varphi)}{\sin\left(\dfrac{\pi + 2\alpha}{4} + \varphi\right)}.$$

**4-5.** Thanh đồng chất $AB$ có trọng lượng $P$, tựa lên nền không nhẵn nằm ngang ở đầu $A$ và được giữ cân bằng ở vị trí nghiêng $45^\circ$ nhờ dây $BC$. Tìm góc nghiêng $\varphi$ của dây khi thanh ở trạng thái sắp trượt (H. 4-21). Hệ số ma sát giữa thanh và nền là $f$.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_21.svg" alt="Hình 4-21" class="figure-img" />
  <p class="figure-caption">Hình 4-21</p>
</div>

*Trả lời :* $\operatorname{tg}\varphi = 2 + \dfrac{1}{f}$.

**4-6.** Để cầu $A$ quay được quanh trục thẳng đứng, người ta bố trí hệ con lăn hình nón cụt $B$ giữa cầu và chân cầu. Biết hệ số ma sát trượt giữa con lăn với chân cầu là $f$, lực đè từ cầu xuống con lăn nằm thẳng đứng. Xác định góc $2\alpha$ ở đỉnh con lăn để có cân bằng, dù lực đè từ cầu xuống rất lớn (tự hãm), (H. 4-22).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_22.svg" alt="Hình 4-22" class="figure-img" />
  <p class="figure-caption">Hình 4-22</p>
</div>

*Trả lời :* $2\alpha \leqslant \varphi = \operatorname{arctg} f$.

**4-7.** Giá đỡ $AB$ trọng lượng không đáng kể, đầu $B$ treo vật nặng $P$, đầu $A$ là ống trụ chiều dài $b = 2\text{cm}$ trượt dọc cột thẳng đứng không nhẵn. Biết hệ số ma sát trượt là $f = 0,1$. Xác định khoảng cách $a$ giữa trục của cột tới điểm treo vật $P$ để giá đỡ cân bằng (H. 4-23).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_23.svg" alt="Hình 4-23" class="figure-img" />
  <p class="figure-caption">Hình 4-23</p>
</div>

*Trả lời :* $a \geqslant 10\text{cm}$.

**4-8.** Thanh nặng đồng chất $AB$, hai đầu tựa lên vòng tròn không nhẵn cố định, bán kính $a$. Biết hệ số ma sát trượt là $f$, khoảng cách từ tâm $O$ đến thanh là $OC = b$, xác định góc nghiêng của $OC$ với đường kính thẳng đứng của đường tròn khi thanh cân bằng (H. 4-24).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_24.svg" alt="Hình 4-24" class="figure-img" />
  <p class="figure-caption">Hình 4-24</p>
</div>

*Trả lời :*

$$\operatorname{ctg}\varphi \geqslant \frac{b^2(1 + f^2)}{a^2 f} - f.$$

**4-9.** Khối trụ đồng chất trọng lượng $Q$ nằm trên hai giá đỡ $A$ và $B$, bố trí đối xứng qua đường thẳng đứng đi qua tâm khối trụ. Hệ số ma sát trượt giữa khối trụ và các giá đỡ là $f$. Tìm lực tiếp tuyến thẳng đứng $T$ làm khối trụ bắt đầu quay. Với góc $\theta$ nào sẽ xảy ra tự hãm (H. 4-25).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_25.svg" alt="Hình 4-25" class="figure-img" />
  <p class="figure-caption">Hình 4-25</p>
</div>

*Trả lời :*

$$T = \frac{fQ}{(1 + f^2)\cos\theta - f} \ ; \qquad \theta \leqslant \arccos\frac{f}{1 + f^2}.$$

**4-10.** Quả cầu đồng chất trọng lượng $P$, bán kính $R$. Thanh $AB = L$, trọng lượng không đáng kể, quay được quanh trục $A$. Hệ số ma sát trượt tại $D$ là $f_1 = \operatorname{tg}\varphi_1$ tại $E$ là $f_2 = \operatorname{tg}\varphi_2$ (H. 4-26).

1) Tìm trị số lực $\vec{F}$ đặt nằm ngang tại $B$ để quả cầu cân bằng.

2) Tìm điều kiện tự hãm.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_26.svg" alt="Hình 4-26" class="figure-img" />
  <p class="figure-caption">Hình 4-26</p>
</div>

*Trả lời :*

1) $F_{\min} \leqslant F \leqslant F_{\max} \ ; \ \alpha < \varphi_1 + \varphi_2$ ;

$$\begin{aligned}
F_{\max} &= \frac{PR\operatorname{cotg}(\alpha/2)}{L\cos\alpha[\sin\alpha - (f_1 + f_2)\cos\alpha - f_1 f_2\sin\alpha]} \ ; \\
F_{\min} &= \frac{PR\operatorname{cotg}(\alpha/2)}{L\cos\alpha[\sin\alpha + (f_1 + f_2)\cos\alpha - f_1 f_2\sin\alpha]}.
\end{aligned}$$

2) $\alpha \leqslant \varphi_1 + \varphi_2$ với $\operatorname{tg}\varphi_1 = f_1 \ ; \ \operatorname{tg}\varphi_2 = f_2$.

**4-11.** Trên mặt phẳng nghiêng góc $30^\circ$ với mặt nằm ngang có hai vật $A$ và $B$, trọng lượng $200\text{N}$ và $400\text{N}$ nối với nhau bằng sợi dây. Biết hệ số ma sát giữa $A$ và $B$ với mặt nghiêng là $f_A = 0,5$ và $f_B = 2/3$. Hệ hai vật có cân bằng không ? Tìm sức căng $T$ của dây và trị số các lực ma sát (H. 4-27).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_27.svg" alt="Hình 4-27" class="figure-img" />
  <p class="figure-caption">Hình 4-27</p>
</div>

*Trả lời :* Hệ cân bằng ; $F_A = 86,6\text{N}$ ; $F_B = 213,4\text{N}$ ; $T = 13,4\text{N}$.

**4-12.** Lực nằm ngang $P$ đặt vào nêm $A$ làm cho nó có xu hướng trượt sang bên phải và đẩy nêm $B$ trượt lên cao theo máng trượt nghiêng góc $\alpha$ với mặt nằm ngang. Góc nghiêng của mặt tiếp xúc giữa hai nêm là $\beta$ (H. 4-28). Tìm lực $Q$ phải tác dụng dọc nêm $B$ để có cân bằng :

1 – Khi bỏ qua ma sát

2 – Khi giữa hai nêm có ma sát hệ số $f$ và nêm $B$ ở trạng thái sắp trượt lên cao. Tìm điều kiện xảy ra tự hãm của nêm $B$.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_28.svg" alt="Hình 4-28" class="figure-img" />
  <p class="figure-caption">Hình 4-28</p>
</div>

*Trả lời :*

$$\begin{aligned}
Q &= P\frac{\sin(\alpha + \beta)}{\sin\beta} \ ; \qquad Q = P\frac{\sin(\alpha + \beta + \varphi)}{\sin(\beta + \varphi)} \ ; \\
\operatorname{tg}\varphi &= f \ ; \qquad \alpha + \beta > \pi - \varphi.
\end{aligned}$$

**4-13.** Lực nằm ngang $P$ đặt vào nêm $A$ làm cho nó có xu hướng trượt sang phải và đẩy cần $BCD$ trượt thẳng đứng lên cao ; cần này được định hướng bằng hai giá đỡ $C$ và $D$ (H. 4-29). Biết góc nghiêng của nêm $A$ là $\alpha$, đoạn $BC = CD$, tìm lực $Q$ phải nén xuống cần để có cân bằng :

1 – Khi bỏ qua ma sát.

2 – Khi có ma sát hệ số $f$ tại $C$ và $D$ và cần $BD$ ở trạng thái sắp trượt lên cao. Trong điều kiện nào xảy ra tự hãm (cân bằng dù $Q = 0$ mà $P$ rất lớn), coi nền là nhẵn trơn.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_29.svg" alt="Hình 4-29" class="figure-img" />
  <p class="figure-caption">Hình 4-29</p>
</div>

*Trả lời :*

$$Q = P\operatorname{ctg}\alpha \ ; \qquad Q = P(\operatorname{ctg}\alpha - 3f) \ ; \qquad \operatorname{ctg}\alpha \leqslant 3f \quad \text{hay} \quad \alpha \geqslant \operatorname{arcctg} 3f.$$

**4-14.** Ngẫu lực $M$ làm tay quay $OA = r$ có xu hướng quay và thông qua biên $AB$, đẩy cần $BCD$ về bên phải theo hướng ngang ; cần này được đỡ trên hai giá đỡ $C$ và $D$ (H. 4-30). Biết $\hat{A} = 90^\circ$, $\hat{B} = \alpha$ ; $BC = CD$. Tìm lực nằm ngang $Q$ tác dụng dọc $BCD$ để có cân bằng.

1 – Khi bỏ qua ma sát.

2 – Khi tại $C$ và $D$ có ma sát, hệ số $f$ và cần $BCD$ ở trạng thái sắp trượt sang phải. Trong điều kiện nào xẩy ra tự hãm của cần $BCD$.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_30.svg" alt="Hình 4-30" class="figure-img" />
  <p class="figure-caption">Hình 4-30</p>
</div>

*Trả lời :*

$$Q = \frac{M}{r}\cos\alpha \ ; \qquad Q = \frac{M}{r}(\cos\alpha - 3f\sin\alpha) \ ; \qquad \alpha \geqslant \operatorname{arcctg} 3f.$$

**4-15.** Cơ cấu bốc hàng gồm hai đòn bắt chéo nhau tại bản lề $O$, kẹp vào kiện hàng ở hai má $A$, $A'$ và được kéo lên cao nhờ móc $C$, móc vào dây $BCB'$ nối hai đầu của hai đòn. Biết : $\widehat{BOB'} = 2\alpha$, $OB = OB' = b$, bề ngang kiện hàng là $2a$, khoảng cách từ $O$ đến kiện hàng là $h$. Xác định góc $\widehat{BCB'} = 2\beta$ để cơ cấu nhờ ma sát ở hai má $A$ và $A'$ có thể bốc kiện hàng lên cao dù trọng lượng $P$ lớn. Cho hệ số ma sát trượt là $f$ (H. 4-31).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_31.svg" alt="Hình 4-31" class="figure-img" />
  <p class="figure-caption">Hình 4-31</p>
</div>

*Trả lời :* $\dfrac{\sin(\alpha + \beta)}{\cos\beta} \geqslant \dfrac{h - af}{bf}$.

**4-16.** Hệ thống hãm như hình 4-32. Vật nặng $Q = 800\text{ kN}$, hệ số ma sát giữa má hãm và trục quay là $f = 0,4$. Trục 2 tầng có các bán kính $r = 10\text{cm}$ ; $R = 25\text{ cm}$. Các độ dài $ED = 120\text{ cm}$ ; $EF = 60\text{ cm}$ ; $AB = 100\text{ cm}$ ; $BC = 10\text{ cm}$. Bỏ qua bề dầy của má hãm. Tìm trị số lực $\vec{P}$ cần đặt vuông góc với $BA$ tại $A$ để giữ được vật nặng cân bằng.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_32.svg" alt="Hình 4-32" class="figure-img" />
  <p class="figure-caption">Hình 4-32</p>
</div>

*Trả lời :* $P \geqslant 20\text{ kN}$.

**4-17.** Máy dát kim loại gồm hai trục cán $O$ và $O'$ quay ngược chiều nhau. Biết bán kính mỗi trục cán là $r$, khoảng cách $OO' = 2d$, hệ số ma sát trượt giữa trục cán và tấm kim loại là $f = \operatorname{tg}\varphi$.

Tìm bề dày lớn nhất $2a$ của những tấm kim loại mà máy có thể dát được (H. 4-33).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_33.svg" alt="Hình 4-33" class="figure-img" />
  <p class="figure-caption">Hình 4-33</p>
</div>

*Trả lời :* $a = d - r\cos\varphi$.

**4-18.** Bánh xe $O$ chịu tác dụng của ngẫu lực $M$. Để hãm bánh xe người ta vòng qua vành bánh xe một dây đai rồi buộc hai đầu dây vào hai điểm $A$, $B$ của đòn $IC$. Biết khi treo vật nặng $P$ cách $O$ một đoạn $a$ thì hệ có được trạng thái cân bằng. Tìm giá trị của mômen $M$ và sức căng hai nhánh dây đai. Cho biết hệ số ma sát trượt $f$ giữa dây đai và vành bánh xe, bán kính $R$ của bánh xe. Xem hai nhánh dây đai đều thẳng đứng, đòn $IC$ nằm ngang, (H. 4-34).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_34.svg" alt="Hình 4-34" class="figure-img" />
  <p class="figure-caption">Hình 4-34</p>
</div>

*Trả lời :*

$$M = aP \ ; \qquad T_B = P\frac{a}{R(1 - e^{-f\pi})} \ ; \qquad T_A = P\frac{a \cdot e^{-f\pi}}{R(1 - e^{-f\pi})}.$$

**4-19.** Hai trụ quay $O_1$ và $O_2$ truyền động cho nhau bằng dây đai. Trụ $O_1$ có bán kính $R_1$ và chịu tác dụng của ngẫu lực $M$. Trụ $O_2$ có hai tầng : tầng ngoài mắc dây đai có bán kính $R_2$, tầng trong có bán kính $r_2$ và bị cuốn dây, đầu dây treo vật nặng $P$. Tìm liên hệ giữa $M$ và $P$ khi cân bằng.

Tìm sức căng ban đầu $S_0$ của dây đai cần thiết để truyền động, biết hệ số ma sát trượt là $f$, góc ôm ở trục $O_1$ là $\alpha$ ; tổng sức căng ở hai nhánh dây đai bằng $2S_0$ (H. 4-35).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_35.svg" alt="Hình 4-35" class="figure-img" />
  <p class="figure-caption">Hình 4-35</p>
</div>

*Trả lời :*

$$\frac{M}{R_1} = P\frac{r_2}{R_2} \ ; \qquad S_0 \geqslant \frac{M}{2R_1} \cdot \frac{1 + e^{-f\alpha}}{1 - e^{-f\alpha}}.$$

**4-20.** Trên mặt nằm ngang có bánh xe đồng chất tâm $O$, bán kính $R$, trọng lượng $P$, chịu lực kéo $\vec{Q}$ nghiêng góc $\alpha$ với mặt nằm ngang và hướng xuống dưới, đặt tại điểm $A$ trên đường thẳng đứng qua $O$. Biết $OA = a$, hệ số ma sát trượt $f$, hệ số ma sát lăn $k$, tìm góc nghiêng $\alpha$ để có cân bằng (H. 4-36).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_36.svg" alt="Hình 4-36" class="figure-img" />
  <p class="figure-caption">Hình 4-36</p>
</div>

*Trả lời :* $\operatorname{ctg}\alpha = \min\left(f ; \dfrac{k}{R + a}\right)$.

**4-21.** Trên mặt nằm ngang có bánh xe đồng chất tâm $O$, bán kính $R$, trọng lượng $P$, chịu ngẫu lực $M$ và lực $Q$ như hình 4-37. Biết hệ số ma sát trượt $f$, hệ số ma sát lăn $k$. Xác định trị số mômen $M$ và trị số $Q$ để bánh xe cân bằng.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_37.svg" alt="Hình 4-37" class="figure-img" />
  <p class="figure-caption">Hình 4-37</p>
</div>

*Trả lời :* $Q \leqslant fP$ ; $M \leqslant kP + QR \leqslant (k + fR)P$.

**4-22.** Xe một bánh gồm : bánh xe $O$, đồng chất, trọng lượng $P$, bán kính $R$ và thân xe $AOB$ (gồm cả hàng) trọng lượng $Q$. Xe chạy trên đường nằm ngang, thân xe nằm song song mặt đường, vị trí trọng tâm thân xe ghi trên hình 4-38. Biết giữa bánh xe với mặt đường có ma sát trượt hệ số $f$ và ma sát lăn hệ số $k$. Xác định lực đẩy tại $A$ để xe ở trạng thái sắp lăn không trượt.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_38.svg" alt="Hình 4-38" class="figure-img" />
  <p class="figure-caption">Hình 4-38</p>
</div>

*Trả lời :*

$$F_{\text{đẩy}} = \frac{k}{R}\left(P + \frac{Qa}{a + b}\right) \leqslant f\left(P + \frac{Qa}{a + b}\right).$$

**4-23.** Trên mặt đường nằm ngang có xe hai bánh $A$ và $B$, đồng chất cùng trọng lượng $p$, bán kính $R$ nối với nhau bằng thân xe $AB$ (xem như thanh đồng chất) trọng lượng $P$. Biết giữa các bánh xe với mặt đường có ma sát trượt, hệ số $f$ và ma sát lăn, hệ số $k$. Tìm lực nằm ngang $Q$ cần đặt vào thân xe để xe ở trạng thái sắp lăn không trượt (H. 4-39).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_39.svg" alt="Hình 4-39" class="figure-img" />
  <p class="figure-caption">Hình 4-39</p>
</div>

*Trả lời :* $Q = \dfrac{k}{R}(P + 2p) \leqslant f(P + 2p)$.

**4-24.** Sàn trọng lượng $P$ nằm trên hai bánh xe $A$ và $B$. Hai bánh xe này đồng chất cùng bán kính $R$, trọng lượng $p$, lăn không trượt trên mặt đường nằm ngang. Biết giữa bánh xe với sàn và với mặt đường có ma sát trượt hệ số $f$ và ma sát lăn hệ số $k$. Vị trí trọng tâm sàn cho trên hình 4-40. Xác định lực kéo nằm ngang $Q$ cần đặt vào sàn để xe ở trạng thái sắp lăn không trượt.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_40.svg" alt="Hình 4-40" class="figure-img" />
  <p class="figure-caption">Hình 4-40</p>
</div>

*Trả lời :* $Q = \dfrac{k}{R}\left(\dfrac{P}{2} + p\right) \leqslant f(P + 2p)$.

**4-25.** Trục thẳng đứng $O$, bán kính $R$ được đỡ bởi ổ gồm $12$ viên bi bán kính $r$. Biết sức ép pháp tuyến giữa trục $O$ vào mỗi viên bi là $N$, biết giữa mỗi viên bi với trục $O$ và nồi $A$ có ma sát trượt, hệ số $f$ và ma sát lăn, hệ số $k$. Xác định ngẫu lực $M$ cần đặt vào trục $O$ để hệ ở trạng thái sắp chuyển động (các viên bi lăn không trượt) (H. 4-41).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_4_41.svg" alt="Hình 4-41" class="figure-img" />
  <p class="figure-caption">Hình 4-41</p>
</div>

*Trả lời :* $M = 12k\dfrac{R + r}{r}N$ ; $f \geqslant \dfrac{k}{r}$.
