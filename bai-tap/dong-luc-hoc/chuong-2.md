---
title: "Bài Tập Động Lực Học - Chương 2: Các Định Lý Tổng Quát Của Động Lực Học"
description: "Định lý biến thiên động lượng, định lý chuyển động khối tâm, định lý biến thiên mômen động lượng và định lý biến thiên động năng"
---

# Chương 2: Các Định Lý Tổng Quát Của Động Lực Học

Các định lý tổng quát của động lực học thiết lập mối quan hệ giữa các đại lượng đặc trưng cho chuyển động và các đại lượng đặc trưng cho tác dụng của lực.

Các định lý này được xây dựng từ phương trình cơ bản của động lực học khi khảo sát chuyển động của chất điểm và cơ hệ tự do trong hệ quy chiếu quán tính (đối với các chất điểm và cơ hệ không tự do thì cần sử dụng tiên đề giải phóng liên kết để có chất điểm và cơ hệ tự do tương ứng.

## 2.1. ĐỊNH LÝ BIẾN THIÊN ĐỘNG LƯỢNG

### 2.1.1. Cơ sở lý thuyết

*a) Các định nghĩa*

*$\alpha$) Động lượng.* Động lượng của một chất điểm có khối lượng $m$ chuyển động với vận tốc $\vec{v}$ là đại lượng vector được kí hiệu $\vec{Q}$ :

$$\vec{Q} = m\vec{v} \tag{2–1}$$

Trong hệ trục toạ độ Đềcac $Oxyz$, ta có :

$$\vec{Q} \begin{cases} Q_x = m v_x = m\dot{x} \\ Q_y = m v_y = m\dot{y} \\ Q_z = m v_z = m\dot{z} \end{cases} \tag{2–2}$$

Động lượng của cơ hệ gồm $N$ chất điểm $M_k$ ($k = \overline{1, N}$), có khối lượng $m_k$ và chuyển động với vận tốc $\vec{v}_k$, bằng tổng động lượng của tất cả các chất điểm thuộc cơ hệ :

$$\vec{Q} = \sum_{k=1}^{N} m_k \vec{v}_k = M\vec{v}_c \tag{2–3}$$

trong đó : $M = \sum_{k=1}^{N} m_k$ là khối lượng của cơ hệ, $\vec{v}_c$ – vận tốc khối tâm cơ hệ.

Trong hệ trục toạ độ Đềcac $Oxyz$ ta có :

$$\vec{Q} \begin{cases} Q_x = \sum\limits_{k=1}^{N} m_k v_{kx} = \sum\limits_{k=1}^{N} m_k \dot{x}_k = M\dot{x}_c \\ Q_y = \sum\limits_{k=1}^{N} m_k v_{ky} = \sum\limits_{k=1}^{N} m_k \dot{y}_k = M\dot{y}_c \\ Q_z = \sum\limits_{k=1}^{N} m_k v_{kz} = \sum\limits_{k=1}^{N} m_k \dot{z}_k = M\dot{z}_c \end{cases} \tag{2–4}$$

Đơn vị của động lượng là $\text{kgm/s}$

*$\beta$) Xung lượng của lực* (xung lực). Xung lượng nguyên tố của lực $\vec{F}$ là

$$d\vec{S} = \vec{F}.dt \tag{2–5}$$

Xung lượng của lực $\vec{F}$ trong khoảng thời gian từ $t_1$ đến $t_2$ là :

$$\vec{S} = \int_{t_1}^{t_2} \vec{F}.dt \tag{2–6}$$

Trong hệ trục toạ độ Đềcac ta có :

$$\begin{aligned}
&d\vec{S} \begin{cases} dS_x = F_x dt \\ dS_y = F_y dt \\ dS_z = F_z dt \end{cases}
\qquad
\vec{S} \begin{cases} S_x = \int\limits_{t_1}^{t_2} F_x dt \\ S_y = \int\limits_{t_1}^{t_2} F_y dt \\ S_z = \int\limits_{t_1}^{t_2} F_z dt \end{cases}
\end{aligned} \tag{2–7}$$

Nếu $\vec{F} = \overrightarrow{\text{const}}$ thì

$$\vec{S} = \vec{F}(t_2 - t_1) \tag{2–8}$$

Đơn vị của xung lực là Niutơn giây ($\text{Ns}$).

*b) Các định lý*

*$\alpha$) Đối với chất điểm :*

Dạng vi phân :

$$d(m\vec{v}) = d\vec{S} \tag{2–9}$$

Dạng hữu hạn :

$$m\vec{v}_2 - m\vec{v}_1 = \vec{S}. \tag{2–10}$$

*$\beta$) Đối với cơ hệ :*

Dạng vi phân :

$$\begin{aligned}
d\vec{Q} = \sum_{k=1}^{N} d\vec{S}_k^e \;\to\;
\begin{cases}
dQ_x = \sum dS_{kx}^e \\
dQ_y = \sum dS_{ky}^e \\
dQ_z = \sum dS_{kz}^e
\end{cases}
\end{aligned}$$

$$\begin{aligned}
\frac{d\vec{Q}}{dt} = \sum_{k=1}^{N} \vec{F}_k^e \;\to\;
\begin{cases}
\dfrac{dQ_x}{dt} = \sum F_{kx}^e \\
\dfrac{dQ_y}{dt} = \sum F_{ky}^e \\
\dfrac{dQ_z}{dt} = \sum F_{kz}^e
\end{cases}
\end{aligned} \tag{2–11}$$

Dạng hữu hạn :

$$\begin{aligned}
\vec{Q}_2 - \vec{Q}_1 = \sum_{k=1}^{N} \vec{S}_k^e \;\to\;
\begin{cases}
Q_{2x} - Q_{1x} = \sum S_{kx}^e \\
Q_{2y} - Q_{1y} = \sum S_{ky}^e \\
Q_{2z} - Q_{1z} = \sum S_{kz}^e
\end{cases}
\end{aligned} \tag{2–12}$$

trong đó : $\vec{Q}$ là động lượng của cơ hệ tại thời điểm $t$ bất kì ($\vec{Q}_1$, $\vec{Q}_2$ lần lượt là động lượng của cơ hệ tại thời điểm $t_1$ và $t_2$), $\vec{S}_k^e$ là xung lượng của ngoại lực $\vec{F}_k^e$ tác dụng lên chất điểm thứ $k$ trong khoảng thời gian $(t_2 - t_1)$.

*c) Các trường hợp bảo toàn động lượng*

Nếu $\vec{F} = \vec{0}$ thì $m\vec{v} = \overrightarrow{\text{const}}$, tức động lượng chất điểm được bảo toàn.

Nếu $F_x = 0$ thì $m\dot{x} = \text{const}$, tức hình chiếu của động lượng trên trục cố định $Ox$ được bảo toàn.

$$\begin{aligned}
\text{Nếu } \sum_{k=1}^{N} \vec{S}_k^e &= \vec{0} \text{ thì} \\
\vec{Q}_2 &= \vec{Q}_1 = \overrightarrow{\text{const}} = \vec{Q}(t_o)
\end{aligned} \tag{2–13}$$

tức động lượng cơ hệ được bảo toàn.

Nếu $\sum\limits_{k=1}^{N} S_{kx}^e = 0$ thì $Q_{2x} = Q_{1x} = \text{const} = Q_x(t_o)$, tức hình chiếu động lượng cơ hệ trên trục cố định $Ox$ được bảo toàn.

### 2.1.2. Hướng dẫn áp dụng

Định lý biến thiên động lượng đặc biệt được áp dụng trong các bài toán va chạm và bài toán về chuyển động của các chất lỏng.

Khi áp dụng định lý biến thiên động lượng của cơ hệ ta lần lượt theo thứ tự sau :

– Xác định cơ hệ khảo sát ;

– Đặt các ngoại lực tác dụng lên hệ (gồm cả các lực hoạt động và các lực liên kết). Chọn hệ trục toạ độ ;

– Áp dụng định lý biến thiên động lượng dạng (2–11) hay (2–12).

– Giải phương trình nhận được, dựa vào các định nghĩa (2–3), (2–4) và (2–7) để xác định động lượng và xung lượng.

Tìm các đại lượng cần thiết theo yêu cầu đề ra.

### 2.1.3. Bài giải mẫu

**Thí dụ 2–1.** Một vật A có trọng lượng $P$ nằm trên mặt nghiêng của hình lăng trụ B có trọng lượng $Q$, góc nghiêng $\alpha$. Ban đầu hệ đứng yên, sau đó vật A bắt đầu trượt xuống. Xác định vận tốc của vật B nếu vận tốc tương đối của vật A đối với mặt nghiêng là $u$. Bỏ qua các lực ma sát, (H. 2–1).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_1.svg" alt="Hình 2-1" class="figure-img" />
  <p class="figure-caption">Hình 2-1</p>
</div>

*Bài giải.* Cơ hệ khảo sát gồm các vật A và B. Các ngoại lực tác dụng $\vec{P}$, $\vec{Q}$, $\vec{N}$. Chọn trục $x$ theo phương ngang. Áp dụng định lý biến thiên động lượng (2–12) ta có :

$$Q_{2x} - Q_{1x} = \sum S_{kx}^e \tag{a}$$

Dễ thấy rằng $\sum S_{kx}^e = 0$ vì tất cả các ngoại lực tác dụng ở đây đều vuông góc với trục $x$. Do đó từ (a) ta có :

$$Q_{2x} - Q_{1x} = 0$$

Vì ban đầu cơ hệ đứng yên, nên :

$$Q_{1x} = 0 \tag{b}$$

Do đó :

$$Q_{2x} = 0 \tag{c}$$

Bây giờ ta cần tính động lượng của cơ hệ khi vật A trượt xuống mặt nghiêng với vận tốc $u$ (vận tốc tương đối).

Gọi $\vec{v}_B$ là vận tốc vật B. Đó cũng là vận tốc theo của vật A và ta có :

$$\vec{v}_A = \vec{v}_B + \vec{u}$$

Vậy :

$$\begin{aligned}
Q_{2x} &= m_A v_{Ax} + m_B v_{Bx} \\
       &= \frac{P}{g}(v_{Bx} + u\cos\alpha) + \frac{Q}{g} v_{Bx}
\end{aligned} \tag{d}$$

Thay (d) vào (c), ta rút ra :

$$v_{Bx} = -\frac{P}{P + Q} u\cos\alpha$$

Dấu trừ ở đây chứng tỏ vật B chuyển động ngược với chiều của $v_B$ đã giả thiết trên hình vẽ.

**Thí dụ 2–2.** Một dòng chất lỏng lý tưởng, đồng chất không nén được chảy qua một ống dẫn đổi hướng $60^\circ$, (H. 2–2). Lưu lượng khối của dòng chảy là $m\text{ kg/s}$, vận tốc của chất lỏng ở các tiết diện vào và ra $v_1$ và $v_2$.

Tìm áp lực của ống lên giá đỡ, không tính đến tác dụng của trọng lực và áp suất thuỷ tĩnh.

*Bài giải*

Khảo sát khối chất lỏng (bó dòng) tại thời điểm $t_1$ nó choán vị trí khối I và khối II. Sau một thời gian rất ngắn $\Delta t = t_2 - t_1$, tức là tại thời điểm $t_2 = t_1 + \Delta t$, khối chất lỏng từ vị trí khối I và khối II di chuyển sang vị trí II và III.

Áp lực của ống lên giá đỡ bằng hợp lực của hệ phản lực của bó dòng tác dụng lên thành ống, tức có cùng giá trị cùng phương nhưng ngược chiều với hợp lực của hệ phản lực do thành ống tác dụng lên bó dòng đang xét (lực mặt).

Giả sử hợp lực của hệ phản lực do thành ống tác dụng lên bó dòng đang xét có hai thành phần $X$ và $Y$.

Áp dụng định lý biến thiên động lượng cho bó dòng đang xét (bỏ qua tác dụng của trọng lực) ta có :

$$\vec{Q}_2 - \vec{Q}_1 = (\vec{X} + \vec{Y})\Delta t \tag{a}$$

trong đó $\vec{Q}_1$ và $\vec{Q}_2$ là động lượng của khối chất lỏng ở các thời điểm $t_1$ và $t_2$.

Nếu gọi $\vec{Q}_{\text{I}}$ là động lượng của khối chất lỏng I, $\vec{Q}_{\text{II}}$ – động lượng khối chất lỏng II, $\vec{Q}_{\text{III}}$ – động lượng khối chất lỏng III, ta có :

$$\vec{Q}_1 = \vec{Q}_{\text{I}} + \vec{Q}_{\text{II}}, \quad \vec{Q}_2 = \vec{Q}_{\text{II}} + \vec{Q}_{\text{III}}$$

Thay vào (a) ta có :

$$\vec{Q}_{\text{III}} - \vec{Q}_{\text{I}} = (\vec{X} + \vec{Y})\Delta t \tag{b}$$

Chiếu hai vế của (b) lên hai trục toạ độ $x$, $y$ ta có :

$$\begin{aligned}
&Q_{\text{III}}\cos 30^\circ = X\Delta t \\
&-Q_{\text{III}}\sin 30^\circ - Q_{\text{I}} = Y\Delta t
\end{aligned} \tag{c}$$

Theo đề ra ta có :

$$Q_{\text{I}} = m v_1 \Delta t, \qquad Q_{\text{III}} = m v_2 \Delta t.$$

Thay vào (c) ta có :

$$X = m v_2 \cos 30^\circ, \qquad Y = -m(v_2 \sin 30^\circ + v_1).$$

Từ kết quả này thấy rằng áp lực lên giá đỡ trên phương $x$ có chiều ngược với vectơ $\vec{X}$ còn trên phương $y$ có chiều trùng với vectơ $\vec{Y}$ trên hình vẽ.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_2.svg" alt="Hình 2-2" class="figure-img" />
  <p class="figure-caption">Hình 2-2</p>
</div>

*Chú thích :*

1. Nếu gọi diện tích ống tại tiết diện chảy vào và chảy ra lần lượt là $\sigma_1$ và $\sigma_2$ ; $\rho$ – khối lượng riêng của chất lỏng, vì dòng chảy dừng, chất lỏng lý tưởng và đồng chất nên

$$m = \rho \sigma_1 v_1 = \rho \sigma_2 v_2$$

Do đó :

$$\begin{aligned}
x &= \frac{m^2}{\rho \sigma_2}\cos 30^\circ \ ; \\
Y &= -\frac{m^2}{\rho}\left[\frac{\sin 30^\circ}{\sigma_2} + \frac{1}{\sigma_1}\right]
\end{aligned}$$

2. Nếu kể đến áp lực thuỷ tĩnh thì tại hai tiết diện vào và ra có hai áp lực $\vec{R}_1$ và $\vec{R}_2$ hướng vào và vuông góc với mặt cắt ; $R_1 = P_1 \sigma_1$, $R_2 = P_2 \sigma_2$, trong đó $P_1$ và $P_2$ là các áp suất tại mặt cắt vào và ra. Khi đó

$$\begin{aligned}
X &= m v_2 \cos 30^\circ + R_1 \cos 30^\circ \\
  &= m v_2 \cos 30^\circ + P_1 \sigma_1 \cos 30^\circ \\
Y &= -m(v_2 \sin 30^\circ + v_1) + R_2 - R_1 \sin 30^\circ \\
  &= -m(v_2 \sin 30^\circ + v_1) + P_2 \sigma_2 - P_1 \sigma_1 \sin 30^\circ
\end{aligned}$$

## 2.2. ĐỊNH LÝ CHUYỂN ĐỘNG KHỐI TÂM CỦA CƠ HỆ

### 2.2.1. Cơ sở lý thuyết

*a) Định nghĩa.* Khối tâm của cơ hệ là một điểm hình học $C$ mà các toạ độ của nó được xác định như sau :

$$x_C = \frac{\sum\limits_k m_k x_k}{\sum\limits_k m_k} \ ; \quad y_C = \frac{\sum\limits_k m_k y_k}{\sum\limits_k m_k} \ ; \quad z_C = \frac{\sum\limits_k m_k z_k}{\sum\limits_k m_k} \tag{2–14}$$

trong đó $m_k$ là khối lượng chất điểm (hoặc bộ phận) thứ $k$ ; $x_k$, $y_k$, $z_k$ là toạ độ Đềcac của chất điểm (hoặc của khối tâm bộ phận) thứ $k$.

*b) Định lý chuyển động khối tâm*

$$\begin{aligned}
M\vec{a}_c = \sum \vec{F}_k^e \qquad
\begin{aligned}
M\ddot{x}_c &= \sum X_k^e \\
M\ddot{y}_c &= \sum Y_k^e \\
M\ddot{z}_c &= \sum Z_k^e
\end{aligned}
\end{aligned} \tag{2–15}$$

trong đó $M = \sum\limits_k m_k$ là khối lượng của cơ hệ, $\vec{a}_c(\ddot{x}_c, \ddot{y}_c, \ddot{z}_c)$ – gia tốc khối tâm $C$ (hình chiếu của gia tốc khối tâm trên các trục toạ độ). Các $\vec{F}_k^e(X_k^e, Y_k^e, Z_k^e)$ – các ngoại lực (hình chiếu các ngoại lực lên các trục toạ độ) tác dụng lên cơ hệ.

*c) Trường hợp bảo toàn chuyển động khối tâm*

– Khi $\sum \vec{F}_k^e = \vec{0}$ thì $\vec{a}_c = \vec{0}$, tức

$$\vec{v}_c = \overrightarrow{\text{const}} \text{ hoặc } \vec{v}_c = \vec{0} \tag{2–16}$$

tức khối tâm của cơ hệ chuyển động theo quán tính hoặc đứng yên (tùy điều kiện đầu).

– Khi $\sum X_k^e = 0$ thì $\ddot{x}_c = 0$, tức

$$\dot{x}_c = \text{const} \text{ hoặc } \dot{x}_c = 0 \tag{2–17}$$

tức hình chiếu khối tâm của cơ hệ trên trục $x$ đứng yên hoặc chuyển động thẳng đều (tùy điều kiện đầu).

### 2.2.2. Hướng dẫn áp dụng

Định lý chuyển động khối tâm thường được áp dụng vào các bài toán sau :

1. Biết $\sum X_k^e = 0$ tìm di chuyển hoặc vận tốc khối tâm của một bộ phận khi biết chuyển động của các bộ phận còn lại của cơ hệ : bài toán thứ hai của động lực học.

2. Biết chuyển động của các bộ phận cơ hệ, tìm lực tác dụng lên cơ hệ (thường là tìm phản lực liên kết) : bài toán thứ nhất của động lực học.

Khi áp dụng định lý chuyển động khối tâm, cần theo các trình tự sau :

– Phân tích chuyển động của cơ hệ ; phân tích các đặc điểm của chuyển động của các bộ phận cơ hệ.

– Phân tích các ngoại lực tác dụng lên cơ hệ (gồm cả các lực hoạt động và các lực liên kết). Chọn hệ trục toạ độ thích hợp.

Có các nhận xét sau :

– Nếu $\sum X_k^e = 0$ thì sử dụng (2–17) và chú ý đến (2–14) rút ra :

$$\sum m_k \dot{x}_k = \text{const} \tag{2–18₁}$$

hoặc

$$\sum m_k x_k = \text{const} \tag{2–18₂}$$

Giải (2–18)$_1$ hoặc (2–18)$_2$ ta nhận được lời giải.

– Nếu chuyển động của các bộ phận cơ hệ hoàn toàn được xác định và bài toán đòi hỏi phải xác định một số lực nào đó của hệ lực (thường là các phản lực liên kết) thì ta sử dụng (2–15). Muốn vậy, dựa vào (2–14) tính các toạ độ khối tâm hệ và tiếp theo tính các hình chiếu của gia tốc khối tâm lên các trục toạ độ (thực hiện các phép tính đạo hàm theo thời gian) rồi thay vào vế trái của (2–15) và giải.

### 2.2.3. Bài giải mẫu

**Thí dụ 2–3.** Một chiếc ôtô có trọng lượng $P$ chuyển động từ đầu phà đến cuối phà. Phà có trọng lượng $Q$ và chiều dài $l$. Bỏ qua lực cản ngang của nước. Tính dịch chuyển của phà trong chuyển động đó. Lúc đầu phà đứng yên.

*Bài giải.* Khảo sát cơ hệ gồm ôtô và phà. Các ngoại lực tác dụng lên hệ $\vec{P}$, $\vec{Q}$ và lực đẩy thẳng đứng Acsimét $\vec{N}$. Chọn trục $x$ nằm ngang hướng từ trái sang phải.

Áp dụng định lý chuyển động khối tâm, ta có

$$M\vec{a}_c = \vec{P} + \vec{Q} + \vec{N} \tag{a}$$

trong đó $M$ là khối lượng cơ hệ, $M = \dfrac{P + Q}{g}$ ; $\vec{a}_c$ – gia tốc khối tâm hệ.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_3.svg" alt="Hình 2-3" class="figure-img" />
  <p class="figure-caption">Hình 2-3</p>
</div>

Nhận xét rằng tất cả các ngoại lực tác dụng lên cơ hệ đều thẳng góc với trục $x$ (H. 2–3) tức $\sum X_k^e = 0$ và vì ban đầu khối tâm cơ hệ đứng yên (do cả cơ hệ đứng yên) nên dựa vào tính chất bảo toàn chuyển động của hình chiếu khối tâm cơ hệ dọc trục $x$, ta có : $x_c = \text{const}$, đặc biệt :

$$x_C^{(0)} = x_C^{(1)} \tag{b}$$

trong đó $x_C^{(0)}$ là hoành độ khối tâm cơ hệ ứng với thời điểm đầu (khi ôtô đứng ở đầu phà) $x_C^{(1)}$ là hoành độ khối tâm hệ khi ôtô đã di chuyển đến cuối phà.

Ta chọn gốc toạ độ $O$ là vị trí cuối về bên trái phà lúc bắt đầu chuyển động. Áp dụng định nghĩa khối tâm (2–14) ta tính được vị trí của khối tâm $C$ lúc bắt đầu chuyển động.

$$x_C^{(0)} = \frac{\dfrac{P}{g}.0 + \dfrac{Q}{g}.\dfrac{l}{2}}{\dfrac{P}{g} + \dfrac{Q}{g}} = \frac{Ql}{2(P + Q)} \tag{c}$$

Gọi $\Delta$ là đoạn dịch chuyển của phà khi ôtô đi được đến cuối phà, ta có vị trí khối tâm lúc đó

$$\begin{aligned}
x_C^{(1)} &= \frac{\dfrac{P}{g}(l - \Delta) + \dfrac{Q}{g}\left(\dfrac{l}{2} - \Delta\right)}{\dfrac{P}{g} + \dfrac{Q}{g}} \\
          &= \frac{P(l - \Delta) + Q\left(\dfrac{l}{2} - \Delta\right)}{P + Q}
\end{aligned} \tag{d}$$

Thay (c) và (d) vào (b) ta rút ra

$$\Delta = \frac{Pl}{P + Q}$$

**Thí dụ 2–4.** Một động cơ được giữ cố định lên sàn bằng bu lông, (H. 2–4). Phần cố định của động cơ có trọng lượng $Q$, phần quay có trọng lượng $P$ đặt cách trục quay một đoạn $e$. Tìm giá trị cực đại của lực cắt ngang bu lông nếu động cơ quay đều với vận tốc góc $\omega$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_4.svg" alt="Hình 2-4" class="figure-img" />
  <p class="figure-caption">Hình 2-4</p>
</div>

*Bài giải.* Khảo sát toàn bộ động cơ. Chọn hệ trục $xOy$ như hình vẽ.

Các ngoại lực tác dụng lên hệ gồm $\vec{Q}$, $\vec{P}$, $\vec{R}$, $\vec{N}$, trong đó $\vec{R}$ là tổng lực cắt ngang bu lông theo phương $x$ mà ta cần xác định.

Áp dụng định lý chuyển động khối tâm (2–15)

$$M\vec{a}_C = \vec{P} + \vec{Q} + \vec{R} + \vec{N} \tag{a}$$

chiếu (a) lên phương $x$ được

$$M a_{Cx} = R \ ; \tag{b}$$

để xác định $R$ ta cần tìm $a_{Cx}$ là hình chiếu của vectơ gia tốc khối tâm $C$ lên trục $x$. Dựa vào công thức tính khối tâm (2–14) ta có :

$$x_C = \frac{P x_A + Q x_o}{P + Q} = \frac{P x_A}{P + Q} \ ;$$

bởi vì $x_o = 0$ ; $x_A = e\cos\varphi = e\cos\omega t$ ; $\ddot{x}_A = -e\omega^2\cos\omega t$, nên :

$$\ddot{x}_C = \frac{P\ddot{x}_A}{P + Q} = -\frac{Pe\omega^2\cos\omega t}{P + Q} = a_{Cx} \tag{c}$$

Thay (c) vào (b) ta có :

$$R = -\frac{Pe\omega^2\cos\omega t}{g} \tag{d}$$

$R$ sẽ đạt cực trị khi $\cos\omega t = \pm 1$, rút ra

$$R_{\max} = \frac{Pe\omega^2}{g}$$

*Nhận xét :* Nếu $\omega$ lớn, tức là tốc độ quay lớn thì $R_{\max}$ sẽ rất lớn. Tuy nhiên nếu $e$ bé thì dù $\omega$ lớn, $R_{\max}$ cũng sẽ rất bé. Do đó, trong kỹ thuật cần cân bằng rôto để $e = 0$.

## 2.3. ĐỊNH LÝ BIẾN THIÊN MÔMEN ĐỘNG LƯỢNG

### 2.3.1. Cơ sở lý thuyết

*a) Các định nghĩa*

*$\alpha$) Mômen động lượng (mômen động) đối với một tâm*

Mômen động đối với tâm $O$ của một chất điểm có khối lượng $m$, chuyển động với vận tốc $\vec{v}$ là đại lượng vector, được ký hiệu $\vec{L}_o$ :

$$\vec{L}_o = \vec{m}_o(m\vec{v}) = \vec{r} \wedge m\vec{v} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ x & y & z \\ m\dot{x} & m\dot{y} & m\dot{z} \end{vmatrix} \tag{2–19}$$

trong đó $\vec{r}$ là bán kính vectơ của chất điểm đối với tâm $O$. Mômen động đối với tâm $O$ của cơ hệ gồm $N$ chất điểm $M_k$ ($k = \overline{1, N}$) có khối lượng $m_k$, chuyển động với vận tốc $\vec{v}_k$, bằng tổng mômen động của các chất điểm thuộc cơ hệ đối với tâm $O$ :

$$\vec{L}_o = \sum_{k=1}^{N} \vec{m}_o(m_k \vec{v}_k) = \sum_{k=1}^{N} \vec{r}_k \wedge m_k \vec{v}_k \tag{2–20}$$

*$\beta$) Mômen động lượng (mômen động) đối với một trục*

Mômen động đối với trục $\Delta$ của một chất điểm là đại lượng đại số, được kí hiệu $\overline{L}_\Delta$

$$\overline{L}_\Delta = \overline{m}_\Delta(m\vec{v}) \tag{2–21}$$

Mômen động đối với trục $\Delta$ của cơ hệ bằng tổng mômen động của các chất điểm thuộc cơ hệ đối với trục $\Delta$ :

$$\overline{L}_\Delta = \sum_{k=1}^{N} \overline{m}_\Delta(m_k \vec{v}_k) \tag{2–22}$$

*$\gamma$) Áp dụng vào vật rắn*

Vật rắn có khối lượng $M$ chuyển động tịnh tiến với vận tốc $\vec{v}_c$ :

$$\vec{L}_o = \vec{m}_o(M\vec{v}_c) \ ; \quad \overline{L}_\Delta = \overline{m}_\Delta(M\vec{v}_c) \tag{2–23}$$

Vật rắn quay quanh trục $\Delta$ với vận tốc góc $\overline{\omega}$ và có mômen quán tính đối với trục $\Delta$ bằng $J_\Delta$

$$\overline{L}_\Delta = J_\Delta \overline{\omega} \tag{2–24}$$

Đối với các vật rắn có chuyển động khác, có thể sử dụng công thức sau :

$$\vec{L}_o = \vec{L}_C^{(r)} + \vec{m}_o(M\vec{v}_c) \tag{2–25}$$

trong đó $\vec{L}_C^{(r)}$ là mômen động của vật rắn tính đối với hệ quy chiếu tịnh tiến cùng với khối tâm $C$.

Đơn vị của mômen động là $\text{kg m}^2/\text{s}$

*b) Các định lý*

*$\alpha$) Đối với chất điểm :*

$$\frac{d\vec{L}_o}{dt} = \vec{m}_o(\vec{F}) \tag{2–26}$$

$$\frac{d\overline{L}_\Delta}{dt} = \overline{m}_\Delta(\vec{F}) \tag{2–27}$$

*$\beta$) Đối với cơ hệ :*

$$\frac{d\vec{L}_o}{dt} = \sum_{k=1}^{N} \vec{m}_o(\vec{F}_k^e) \tag{2–28}$$

$$\frac{d\overline{L}_\Delta}{dt} = \sum_{k=1}^{N} \overline{m}_\Delta(\vec{F}_k^e) \tag{2–29}$$

*c) Các trường hợp bảo toàn*

Nếu $\vec{m}_o(\vec{F}) = \vec{0}$ thì $\vec{L}_o = \vec{m}_o(m\vec{v}) = \overrightarrow{\text{const}}$

$$\text{Nếu } \overline{m}_\Delta(\vec{F}) = 0 \text{ thì } \overline{L}_\Delta = \overline{m}_\Delta(m\vec{v}) = \text{const} \tag{2–30}$$

Nếu $\sum\limits_{k=1}^{N} \vec{m}_o(\vec{F}_k^e) = \vec{0}$ thì $\vec{L}_o = \sum\limits_{k=1}^{N} \vec{m}_o(m_k\vec{v}_k) = \overrightarrow{\text{const}}$

Nếu $\sum\limits_{k=1}^{N} \overline{m}_\Delta(\vec{F}_k^e) = 0$ thì $\overline{L}_\Delta = \sum\limits_{k=1}^{N} \overline{m}_\Delta(m_k\vec{v}_k) = \text{const}$

*d) Phương trình vi phân chuyển động của vật rắn quay quanh một trục cố định*

$$J_\Delta \overline{\varepsilon} \equiv J_\Delta \frac{d\overline{\omega}}{dt} \equiv J_\Delta \frac{d^2\overline{\varphi}}{dt^2} = \sum_{k=1}^{N} \overline{m}_\Delta(\vec{F}_k) \tag{2–31}$$

trong đó $J_\Delta$ là mômen quán tính của vật rắn đối với trục quay $\Delta$ ; $\overline{\varphi}$, $\overline{\omega}$, $\overline{\varepsilon}$ lần lượt là góc quay, vận tốc góc và gia tốc góc của vật rắn, $\{\vec{F}_k\}$ – các ngoại lực tác dụng lên vật.

*e) Các công thức tính mômen quán tính của vật rắn (H. 2–5)*

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_5.svg" alt="Hình 2-5" class="figure-img" />
  <p class="figure-caption">Hình 2-5</p>
</div>

– Momen quán tính của vật rắn đối với trục :

$$J_\Delta = \sum_{k=1}^{\infty} m_k h_k^2 = M\rho^2 \tag{2–32}$$

trong đó $m_k$ là khối lượng chất điểm thứ $k$, $h_k$ – khoảng cách từ chất điểm thứ $k$ đến trục $\Delta$ ; $M$ – khối lượng của vật, còn $\rho$ – bán kính quán tính.

– Mômen quán tính của vật đối với các trục toạ độ :

$$\begin{aligned}
J_x &= \sum m_k(y_k^2 + z_k^2) \ ; \\
J_y &= \sum m_k(z_k^2 + x_k^2) \ ; \\
J_z &= \sum m_k(x_k^2 + y_k^2)
\end{aligned} \tag{2–33}$$

– Mômen quán tính tích của vật rắn :

$$\begin{aligned}
J_{xy} &= \sum m_k x_k y_k \ ; \\
J_{yz} &= \sum m_k y_k z_k \ ; \\
J_{zx} &= \sum m_k z_k x_k
\end{aligned} \tag{2–34}$$

– Mômen quán tính của vật đối với các trục song song (H. 2–6) – Định lý Stêne :

$$J_\Delta = J_{\Delta_c} + M d^2 \tag{2–35}$$

$\Delta$ và $\Delta_c$ là hai trục song song, trục $\Delta_c$ qua khối tâm $C$ ; $M$ – khối lượng của vật ; $d$ – khoảng cách giữa hai trục (H. 2–6).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_6.svg" alt="Hình 2-6" class="figure-img" />
  <p class="figure-caption">Hình 2-6</p>
</div>

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_7.svg" alt="Hình 2-7" class="figure-img" />
  <p class="figure-caption">Hình 2-7</p>
</div>

– Mômen quán tính của trục bất kỳ qua gốc toạ độ (H. 2–7) :

$$\begin{aligned}
J &= J_x \cos^2\alpha + J_y \cos^2\beta + J_z \cos^2\gamma - \\
  &\quad - 2 J_{xy} \cos\alpha \cos\beta - 2 J_{yz} \cos\beta \cos\gamma \\
  &\quad - 2 J_{zx} \cos\gamma \cos\alpha.
\end{aligned} \tag{2–36}$$

Nếu trục $Oz$ là trục quán tính tại $O$ ($J_{yz} = J_{zx} = 0$) thì :

$$\begin{aligned}
J_\Delta &= J_x \cos^2\alpha + J_y \cos^2\beta + J_z \cos^2\gamma \\
         &\quad - 2 J_{xy} \cos\alpha \cos\beta
\end{aligned} \tag{2–37}$$

Nếu $Oxyz$ là trục quán tính chính tại $O$ ($J_{xy} = J_{yz} = J_{zx} = 0$) thì :

$$J_\Delta = J_x \cos^2\alpha + J_y \cos^2\beta + J_z \cos^2\gamma \tag{2–38}$$

– Mômen quán tính của một số vật rắn đồng chất :

**Bảng 2–1**

| Dạng (1) | Vật đồng chất (2) | Mômen quán tính đối với các trục (3) |
| :--- | :--- | :--- |
| Thanh mảnh | Thanh chiều dài $l$ nằm dọc trục $y$ (từ $-\frac{l}{2}$ đến $\frac{l}{2}$), trục $x, z$ qua trung điểm vuông góc với thanh | $J_z = J_x = \dfrac{Ml^2}{12}$ |
| Vành tròn | Vành tròn bán kính $R$ nằm trong mặt phẳng $Oxy$, trục $z$ vuông góc với mặt phẳng vành qua tâm | $J_x = J_y = \dfrac{MR^2}{2}$<br>$J_z = MR^2$ |
| Trụ tròn | Trụ tròn bán kính $R$, chiều cao $h$, trục $y$ trùng trục đối xứng của trụ, trục $x, z$ qua khối tâm vuông góc với trục $y$ | Trụ đặc : $J_y = \dfrac{MR^2}{2}$<br>$J_x = J_z = \dfrac{M}{4}\left(R^2 + \dfrac{h^2}{3}\right)$<br>Trụ rỗng mỏng $J_y = MR^2$<br>$J_x = J_z = \dfrac{M}{2}\left(R^2 + \dfrac{h^2}{6}\right)$ |
| Tấm phẳng | Tấm phẳng chữ nhật cạnh $a$ (theo trục $y$: $\frac{a}{2}, \frac{a}{2}$) và $b$ (theo trục $z$: $\frac{b}{2}, \frac{b}{2}$), nằm trong mặt phẳng $Oyz$, trục $x$ vuông góc qua tâm | $J_z = M\dfrac{a^2}{12}$ ; $J_y = M\dfrac{b^2}{12}$ |
| Mặt tròn | Mặt tròn bán kính $R$ nằm trong mặt phẳng $Oxy$, trục $z$ vuông góc với mặt tròn qua tâm | $J_x = J_y = M\dfrac{R^2}{4}$<br>$J_z = \dfrac{MR^2}{2}$ |
| Quả cầu đặc | Quả cầu đặc bán kính $R$, tâm tại gốc toạ độ $Oxyz$ | $J_x = J_y = J_z = \dfrac{2}{5}MR^2$ |

### 2.3.2. Hướng dẫn áp dụng

Định lý biến thiên mômen động lượng thường được áp dụng vào các bài toán sau :

1. Xác định các yếu tố động học (gia tốc hoặc gia tốc góc) của cơ hệ một bậc tự do khi biết tổng mômen các ngoại lực đối với trục quay.

2. Xác định chuyển động của cơ hệ trong điều kiện bảo toàn mômen động đối với một tâm [$\sum \vec{m}_o(\vec{F}_k^e) = 0$] hay đối với một trục cố định, [$\sum \overline{m}_z(\vec{F}_k^e) = 0$].

3. Khảo sát chuyển động quay của một vật rắn quay quanh một trục cố định, quay quanh một tâm cố định.

Bài toán nói chung được giải theo trình tự sau :

– Xác định cơ hệ khảo sát, phân tích đặc điểm chuyển động của từng vật thuộc cơ hệ, giả định các vận tốc, gia tốc đặc trưng cho chuyển động từng vật, chú ý đến các quan hệ động học giữa các vật thuộc cơ hệ.

– Phân tích các ngoại lực tác dụng lên cơ hệ – Phát hiện các đặc điểm về tổng mômen các ngoại lực tác dụng lên cơ hệ (có tính được hay không, có bằng không hay không).

– Xác định loại bài toán. Nếu bài toán phải giải quyết thuộc bài toán 1) thì áp dụng (2–29), nếu thuộc bài toán 2) thì sử dụng (2–30)$_3$, (2–30)$_4$, nếu thuộc bài toán loại 3) thì áp dụng (2–31), (2–28). Trong đó việc tính mômen động của vật đối với một tâm hay một trục cố định dựa vào các công thức (2–20), (2–22), (2–23), (2–24), (2–25).

### 2.3.3. Bài giải mẫu

**Thí dụ 2–5.** Hai vật nặng $P_1$ và $P_2$ được buộc vào hai dây quấn vào hai tang của một tời bán kính là $r$ và $R$. Để nâng vật nặng $P_1$ lên người ta còn tác dụng vào tời một mômen quay $M$. Tìm gia tốc góc của tời quay. Biết trọng lượng của tời là $Q$ và bán kính quán tính đối với trục quay là $\rho$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_8.svg" alt="Hình 2-8" class="figure-img" />
  <p class="figure-caption">Hình 2-8</p>
</div>

*Bài giải.* Xét cơ hệ gồm vật nặng A, B và tời C (H. 2–8).

Các ngoại lực tác dụng lên cơ hệ gồm các trọng lực $\vec{P}_1$, $\vec{P}_2$, $\vec{Q}$, mômen quay $\overline{M}$ và phản lực $\vec{R}_o$, trong đó phản lực $\vec{R}_o$ có mômen đối với trục quay $O$ bằng không. Giả sử tời quay ngược chiều kim đồng hồ.

Áp dụng định lý biến thiên mômen động lượng đối với trục quay $z$ đi qua $O$ của tời ta có :

$$\frac{d}{dt}\overline{L}_z = -P_1 r + P_2 R + M, \tag{a}$$

trong đó :

$$\overline{L}_z = \overline{L}_z(A) + \overline{L}_z(B) + \overline{L}_z(C)$$

Mômen động lượng của vật A :

$$\overline{L}_z(A) = r.\frac{P_1}{g} v_A = \frac{P_1}{g} r^2 \omega$$

Mômen động lượng của vật B :

$$\overline{L}_z(B) = R.\frac{P_2}{g} v_B = \frac{P_2}{g} R^2.\omega$$

Mômen động lượng của tời C :

$$\overline{L}_z(C) = J_z \omega = \frac{Q}{g} \rho^2 \omega$$

Vậy mômen động của cơ hệ bằng :

$$\overline{L}_z = (P_1 r^2 + P_2 R^2 + Q\rho^2).\frac{\omega}{g} \tag{b}$$

Thay (b) vào (a) rút ra :

$$\frac{P_1 r^2 + P_2 R^2 + Q\rho^2}{g}.\frac{d\omega}{dt} = -P_1 r + P_2 R + M$$

Từ đây ta có gia tốc góc quay của trục tời :

$$\varepsilon = \frac{M + P_2 R - P_1 r}{P_1 r^2 + P_2 R^2 + Q\rho^2}$$

Tời quay nhanh dần nếu :

$$M + P_2 R - P_1 r > 0$$

**Thí dụ 2–6.** Một đĩa tròn đồng chất, trọng lượng là $Q$, bán kính là $R$ quay được quanh một trục thẳng đứng $AB$ đi qua tâm đĩa và vuông góc với đĩa. Trên vành đĩa có một chất điểm $M$ có trọng lượng $P$. Đĩa quay đều quanh trục với vận tốc góc $\omega_o$. Tại một thời điểm nào đó chất điểm $M$ chuyển động theo vành đĩa với vận tốc tương đối so với đĩa là $u$. Tìm vận tốc góc của đĩa lúc đó, (H. 2–9).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_9.svg" alt="Hình 2-9" class="figure-img" />
  <p class="figure-caption">Hình 2-9</p>
</div>

*Bài giải.* Khảo sát cơ hệ gồm đĩa và chất điểm $M$. Đĩa có thể quay quanh trục cố định $z$ thẳng đứng, còn chất điểm $M$ chuyển động trên mặt đĩa theo đường tròn tâm $O$, bán kính $OM$ (chuyển động tương đối) với vận tốc $u$ và cùng với đĩa quay quanh trục $z$ (chuyển động theo).

Các ngoại lực tác dụng lên cơ hệ gồm các trọng lực $\vec{Q}$, $\vec{P}$ và các phản lực $\vec{R}_A$, $\vec{R}_B$ tại các ổ trục $A$ và $B$.

Vì hệ ngoại lực gồm các lực song song hoặc cắt trục $z$ nên :

$$\sum \overline{m}_z(\vec{F}_k^e) = 0.$$

Khi áp dụng định lý biến thiên mômen động đối với trục $z$ ta có :

$$\frac{d\overline{L}_z}{dt} = \sum \overline{m}_z(\vec{F}_k^e) = 0$$

Từ đó rút ra :

$$\overline{L}_z = \text{const} = \overline{L}_z(0) \tag{a}$$

tức là mômen động lượng của cơ hệ tại mọi thời điểm đều bằng giá trị của nó tại thời điểm ban đầu.

Giả sử tại thời điểm đầu chất điểm nằm yên trên đĩa và cùng với đĩa quay quanh trục $z$ theo chiều dương với vận tốc góc $\omega_o$, và khi chất điểm chuyển động đối với đĩa với vận tốc $u$ (theo chiều dương quanh trục $z$) thì đĩa sẽ quay quanh trục $z$ với vận tốc góc $\omega$ cùng theo chiều dương. Mômen động lượng của cơ hệ bằng :

$$\overline{L}_z = \overline{L}_z^{(1)} + \overline{L}_z^{(2)}$$

trong đó $\overline{L}_z^{(1)}$ và $\overline{L}_z^{(2)}$ lần lượt là mômen động lượng của đĩa và chất điểm $M$ đối với trục $z$ :

$$\overline{L}_z^{(1)} = J_z \overline{\omega} = \frac{Q}{2g} R^2 \omega \ ; \qquad \overline{L}_z^{(2)} = \frac{P}{g}(\omega R + u)R.$$

Vậy :

$$\begin{aligned}
\overline{L}_z &= \frac{Q}{2g} R^2 \omega + \frac{P}{g}(\omega R + u)R \\
               &= \frac{R^2 \omega (Q + 2P) + 2PRu}{2g}
\end{aligned} \tag{b}$$

$$\overline{L}_z(0) = \frac{\omega_o R^2 (Q + 2P)}{2g} \tag{c}$$

Khi thay (b) và (c) vào (a) ta nhận được

$$\omega = \omega_o - \frac{2Pu}{(Q + 2P)R}$$

Đĩa quay quanh trục $z$ theo chiều dương hoặc âm tùy thuộc

$$\omega_o - \frac{2Pu}{(Q + 2P)R} > 0$$

**Thí dụ 2–7.** Viết phương trình dao động bé của con lắc vật lý (H. 2–10).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_10.svg" alt="Hình 2-10" class="figure-img" />
  <p class="figure-caption">Hình 2-10</p>
</div>

*Bài giải.* Con lắc vật lý là một vật nặng có thể quay được quanh trục cố định qua $O$ thẳng góc với mặt phẳng $(O, \vec{P})$ và dao động bé dưới tác dụng của trọng lực $\vec{P}$.

Hệ ngoại lực tác dụng lên vật gồm trọng lực $\vec{P}$ và phản lực ở trục $\vec{R}_o$.

Để viết phương trình vi phân chuyển động của con lắc vật lý ta sử dụng (2–31), nó có dạng sau :

$$J_o \frac{d^2\overline{\varphi}}{dt^2} = -Pa\sin\overline{\varphi}$$

trong đó $J_o$ là mômen quán tính của vật đối với trục qua $O$, $a$ là khoảng cách từ khối tâm $C$ của vật đến trục quay $O$ ; $\overline{\varphi}$ là góc lệch giữa đường $OC$ đối với đường thẳng đứng qua $O$.

Trong trường hợp dao động bé có thể coi : $\sin\overline{\varphi} \approx \overline{\varphi}$ nên phương trình vi phân chuyển động của con lắc vật lý được viết trong dạng :

$$\ddot{\overline{\varphi}} + k^2\overline{\varphi} = 0 \qquad \left(\ddot{\overline{\varphi}} \equiv \frac{d^2\overline{\varphi}}{dt^2}\right) \tag{a}$$

trong đó $k = \sqrt{Pa/J_o}$ được gọi là tần số riêng.

Phương trình (a) được gọi là phương trình dao động bé của con lắc.

Gọi $T$ là chu kỳ dao động của con lắc, ta có :

$$T = \frac{2\pi}{k}.$$

Từ đó :

$$J_o = \frac{PaT^2}{4\pi^2} \tag{b}$$

Áp dụng công thức Stêne (2–35), ta có

$$J_o = J_c + \frac{P}{g} a^2 \tag{c}$$

Từ (b) và (c) rút ra :

$$J_c = Pa\left(\frac{T^2}{4\pi^2} - \frac{a}{g}\right) \tag{d}$$

Bằng thực nghiệm có thể đo được chu kỳ $T$ và do đó tính được mômen quán tính của vật rắn đối với khối tâm $C$ và nhờ đó tính được bán kính quán tính của vật rắn đối với khối tâm $C$ từ biểu thức :

$$J_C = \frac{P}{g}\rho^2.$$

## 2.4. ĐỊNH LÝ BIẾN THIÊN ĐỘNG NĂNG

### 2.4.1. Cơ sở lý thuyết

*a) Các định nghĩa*

*$\alpha$) Động năng :* Động năng của một chất điểm có khối lượng $m$, chuyển động với vận tốc $\vec{v}$ là đại lượng vô hướng, được kí hiệu là $T$ :

$$T = \frac{1}{2} m v^2 \tag{2–39}$$

Động năng của cơ hệ gồm $N$ chất điểm $M_k$ ($k = \overline{1, N}$) có khối lượng $m_k$, chuyển động với vận tốc $\vec{v}_k$ là :

$$T = \frac{1}{2} \sum_{k=1}^{N} m_k v_k^2 \tag{2–40}$$

Các công thức tính động năng của vật rắn chuyển động :

- Vật rắn có khối lượng $M$, chuyển động tịnh tiến có vận tốc khối tâm $\vec{v}_c$ :

$$T = \frac{1}{2} M v_c^2 \tag{2–41}$$

- Vật rắn quay quanh trục $\Delta$ cố định với vận tốc góc $\overline{\omega}$ và có mômen quán tính đối với trục quay $\Delta$ là $J_\Delta$ :

$$T = \frac{1}{2} J_\Delta \omega^2 \tag{2–42}$$

- Vật rắn có khối lượng $M$ chuyển động song phẳng có vận tốc khối tâm $\vec{v}_c$ và vận tốc góc $\overline{\omega}_s$ :

$$T = \frac{1}{2} M v_c^2 + \frac{1}{2} J_c \omega_s^2 = \frac{1}{2} J_p \omega_s^2 \tag{2–43}$$

trong đó $J_c$ và $J_p$ lần lượt là mômen quán tính của vật rắn đối với trục vuông góc với mặt phẳng chuyển động song phẳng qua khối tâm $C$ và tâm quay tức thời $P$.

- Vật rắn quay quanh một điểm cố định $O$, có vectơ vận tốc góc $\vec{\omega}$ :

$$\begin{aligned}
T &= \frac{1}{2}\big(J_x \omega_x^2 + J_y \omega_y^2 + J_z \omega_z^2 - 2 J_{xy} \overline{\omega}_x \overline{\omega}_y - \\
  &\quad - 2 J_{yz} \overline{\omega}_y \overline{\omega}_z - 2 J_{zx} \overline{\omega}_z \overline{\omega}_x\big)
\end{aligned} \tag{2–44}$$

trong đó $J_x$, $J_y$, $J_z$, $J_{xy}$, $J_{yz}$, $J_{zx}$ là các mômen quán tính và các mômen quán tính tích đối với hệ trục toạ độ Đề các bất kỳ $Oxyz$ ; $\overline{\omega}_x$, $\overline{\omega}_y$, $\overline{\omega}_z$ hình chiếu của vectơ vận tốc góc $\vec{\omega}$ trên các trục toạ độ.

Nếu $Oxyz$ là hệ trục quán tính chính thì :

$$T = \frac{1}{2}\left(J_x \overline{\omega}_x^2 + J_y \overline{\omega}_y^2 + J_z \overline{\omega}_z^2\right) \tag{2–45}$$

- Vật rắn chuyển động tự do ;

$$T = \frac{1}{2} M v_c^2 + T^{(r)} \tag{2–46}$$

trong đó $M$ là khối lượng vật rắn, $\vec{v}_c$ – vận tốc khối tâm $C$ của nó, $T^{(r)}$ – động năng của vật rắn được tính trong chuyển động của nó đối với hệ quy chiếu chuyển động tịnh tiến cùng khối tâm $C$.

- Trong trường hợp cơ hệ gồm các vật rắn thì động năng cơ hệ bằng tổng động năng các vật rắn. Nếu vật thể có dạng dây, băng tải (vật biến dạng) thì cần xem vật thể gồm vô số các chất điểm và sử dụng công thức (2–40).

*$\beta$) Công của lực.* Công nguyên tố của lực $\vec{F}$ (tức là công của lực trong di chuyển vô cùng bé $d\vec{r}$) là đại lượng vô hướng :

$$\begin{aligned}
dA &= \vec{F}.d\vec{r} = \vec{F}.\vec{v}dt = F\cos\alpha.ds = \\
   &= F_x dx + F_y dy + F_z dz
\end{aligned} \tag{2–47}$$

trong đó $\alpha$ là góc giữa lực và phương tiếp tuyến của quỹ đạo ; $F_x$, $F_y$, $F_z$ – hình chiếu của lực trên các trục toạ độ của hệ trục toạ độ Đề các $Oxyz$ ; $x$, $y$, $z$ các toạ độ của điểm đặt lực trong hệ trục toạ độ đó, $dt$ – khoảng thời gian vô cùng bé.

Công hữu hạn của lực khi điểm đặt lực di chuyển trên đường cong từ vị trí $M_o$ đến vị trí $M$

$$\begin{aligned}
A &= \int_{M_o}^{M} \vec{F}.d\vec{r} = \int_{M_o}^{M} F\cos\alpha ds \\
  &= \int_{M_o}^{M} F_x dx + F_y dy + F_z dz
\end{aligned} \tag{2–48}$$

Đơn vị của công là Niutơn mét ($\text{Nm}$) hoặc Jun ($\text{J}$).

Công thức tính công của một số lực thường gặp :

Công có trọng lực $\vec{P}$, (H. 2–11)

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_11.svg" alt="Hình 2-11" class="figure-img" />
  <p class="figure-caption">Hình 2-11</p>
</div>

$$A = \pm Ph \tag{2–49}$$

trong đó $h$ – là cao độ di chuyển của điểm đặt trọng lực, lấy dấu $+$ hoặc $-$ tùy thuộc điểm đặt của trọng lực được hạ xuống hoặc nâng lên.

Công của lực đàn hồi khi điểm đặt lực di chuyển theo phương tác dụng lực (H. 2–12)

$$A = \frac{1}{2} c(x_1^2 - x_2^2) \tag{2–50}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_12.svg" alt="Hình 2-12" class="figure-img" />
  <p class="figure-caption">Hình 2-12</p>
</div>

còn khi điểm đặt lực di chuyển theo đường cong thì (H. 2–13).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_13.svg" alt="Hình 2-13" class="figure-img" />
  <p class="figure-caption">Hình 2-13</p>
</div>

công bằng

$$A = \frac{1}{2} c(r_1^2 - r_2^2) \tag{2–51}$$

Công của lực tác dụng lên vật rắn quay quanh một trục cố định (H. 2–14) :

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_14.svg" alt="Hình 2-14" class="figure-img" />
  <p class="figure-caption">Hình 2-14</p>
</div>

$$dA = \overline{m}_\Delta(\vec{F}) d\varphi \ ; \tag{2–52}$$

$$A = \int_{\varphi_o}^{\varphi} \overline{m}_\Delta(\vec{F}) d\varphi \ ;$$

trong đó $\overline{m}_\Delta(\vec{F})$ là mômen của lực $\vec{F}$ tác dụng lên vật đối với trục quay $\Delta$.

Công của ngẫu lực có vectơ mômen $\vec{M}$ tác dụng lên vật quay quanh trục $\Delta$, (H. 2–15) :

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_15.svg" alt="Hình 2-15" class="figure-img" />
  <p class="figure-caption">Hình 2-15</p>
</div>

$$dA = \overline{M}_\Delta d\varphi \ ; \qquad A = \int_{\varphi_o}^{\varphi} \overline{M}_\Delta d\varphi \tag{2–53}$$

trong đó $\overline{M}_\Delta$ là hình chiếu của vectơ mômen ngẫu lực $\vec{M}$ trên trục quay $\Delta$.

Nếu $\overline{M}_\Delta = \text{const}$ thì

$$A = \overline{M}_\Delta (\varphi - \varphi_o) \tag{2–54}$$

Nếu $\overline{M}_\Delta = -c\varphi$ (trường hợp ngẫu lực đàn hồi ; $c = \text{const}$) thì

$$A = \frac{1}{2} c(\varphi_1^2 - \varphi_2^2)$$

Có thể dễ dàng suy ra các công thức tính công của lực tác dụng lên vật chuyển động song phẳng (xem hình phẳng quay tức thời quanh trục đi qua tâm vận tốc) và vật chuyển động quay quanh một điểm cố định (xem vật quay quanh trục quay tức thời đi qua điểm cố định).

Công của hệ lực tác dụng lên vật rắn

$$d'A = \vec{R}_o' d\vec{r}_o + \vec{M}_o \vec{\omega} dt, \tag{2–55}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_16.svg" alt="Hình 2-16" class="figure-img" />
  <p class="figure-caption">Hình 2-16</p>
</div>

Trong đó $\vec{R}_o'$ và $\vec{M}_o$ là lực và ngẫu lực có được khi thu gọn hệ lực về tâm $O$ (được biểu diễn bằng vectơ chính của hệ lực đặt tại tâm thu gọn và mômen chính của hệ lực đối với tâm thu gọn) ; $\vec{\omega}$ – vận tốc góc tức thời của vật (H. 2–16).

Từ đây suy ra trực tiếp công thức tính công cho hệ lực tác dụng lên vật rắn chuyển động tịnh tiến, chuyển động quay quanh một trục cố định, chuyển động song phẳng...

+ Vật rắn lăn không trượt : công của lực ma sát trượt bằng không còn công ngẫu lực ma sát lăn được tính theo công thức tính công ngẫu lực.

*$\gamma$) Công suất là công sinh ra trong một đơn vị thời gian*

$$\begin{aligned}
W = \frac{d'A}{dt} &= \sum \vec{F}_k . \vec{v}_k \\
                  &= \sum \left(F_{kx}\dot{x}_k + F_{ky}\dot{y}_k + F_{kz}\dot{z}_k\right)
\end{aligned} \tag{2–56}$$

Trường hợp nếu vật rắn quay quanh trục cố định $\Delta$ (điểm cố định), chịu tác dụng ngẫu lực $\overline{M}$ (vectơ mômen ngẫu lực $\vec{M}$) thì :

$$\begin{aligned}
W &= \overline{M}.\overline{\omega} \\
W &= \vec{M}.\vec{\omega}
\end{aligned} \tag{2–57}$$

Công suất trung bình

$$W = \frac{A}{t} \tag{2–58}$$

Đơn vị công suất là Oát ($\text{W}$) hoặc Niutơn mét/giây ($\text{Nm/s}$).

*$\theta$) Thế năng cơ hệ.* Trước hết cần biết các định nghĩa :

– Lực có thế là lực có đặc điểm sau :

$$dA(\vec{F}) = \vec{F}.d\vec{r} = -d\Pi(M). \tag{2–59}$$

trong đó $\Pi$ được gọi là hàm thế hoặc là thế năng của cơ hệ ; chỉ phụ thuộc vị trí cơ hệ ở thời điểm đang xét.

– Nếu cơ hệ chịu tác dụng của nhiều lực có thế thì

$$\sum \vec{F}_k d\vec{r}_k = -d\Pi(M) \tag{2–60}$$

– Thế năng của cơ hệ ở vị trí đang xét đối với một vị trí chuẩn đã chọn là tổng công của các lực có thế tác dụng lên cơ hệ khi cơ hệ di chuyển từ vị trí đang xét về vị trí chuẩn đã chọn :

$$\Pi(M) = \sum_k \int_{M_k}^{M_k^o} \vec{F}_k.d\vec{r}_k = \sum A_{\overset{\frown}{M_k M_k^o}} \tag{2–61}$$

Chú ý rằng biểu thức thế năng được xác định sai kém một hằng số.

Nếu ký hiệu thế năng của cơ hệ tại hai vị trí qua $\Pi(M)$ và $\Pi(M_o)$ thì :

$$\Pi(M) - \Pi(M_o) = A_{\overset{\frown}{M M_o}} \tag{2–62}$$

trong đó $A_{\overset{\frown}{M M_o}}$ là tổng công của các lực ứng với chuyển dời của cơ hệ từ vị trí "$M$" đến vị trí "$M_o$".

Công thức tính thế năng đối với một số lực thế thường gặp :

– Khi lực thế là trọng lực :

$$\Pi = \pm M g z_c + \text{const}, \tag{2–63}$$

trong đó $M$ là khối lượng cơ hệ, $z_c$ là cao độ của khối tâm, lấy dấu $+$ hoặc $-$ tùy thuộc khối tâm $C$ nằm cao hơn hoặc thấp hơn vị trí chuẩn.

– Khi lực thế là lực đàn hồi : $\vec{F} = -c\vec{r}$ ;

$$\Pi = \frac{1}{2} c r^2 + \text{const} \tag{2–64}$$

(ví dụ trường hợp lò xo thẳng : $\Pi = \dfrac{1}{2} c x^2 + \text{const}$).

– Khi lực thế là ngẫu lực đàn hồi : $M = -c\varphi$ (ví dụ trường hợp lò xo xoắn) ;

$$\Pi = \frac{1}{2} c \varphi^2 + \text{const} \tag{2–65}$$

*b) Các định lý biến thiên động năng*

*$\alpha$) Đối với chất điểm*

Dạng vi phân :

$$dT = \vec{F}.d\vec{r} \tag{2–66}$$

$$\frac{dT}{dt} = \vec{F}.\vec{v} \tag{2–67}$$

Dạng hữu hạn :

$$\begin{aligned}
T - T_o &= \int_{M_o}^{M} \vec{F}.d\vec{r} \\
        &= \int_{M_o}^{M} F_x dx + F_y dy + F_z dz
\end{aligned} \tag{2–68}$$

trong đó $T$ là động năng chất điểm tại thời điểm $t$ (ứng với vị trí $M$) ; $T_o$ – động năng chất điểm tại thời đầu $t_o$ (ứng với vị trí $M_o$) ; $\vec{F}(F_x, F_y, F_z)$ – lực tác dụng lên chất điểm.

Trong trường hợp chất điểm chịu tác dụng nhiều lực thì trong các công thức trên, lực $\vec{F}$ cần được thay bằng hợp lực của các lực tác dụng lên chất điểm.

*$\beta$) Đối với cơ hệ*

Dạng vi phân

$$\begin{aligned}
dT &= \sum dA_k^i + \sum dA_k^e \\
   &\equiv \sum_{k=1}^{N} \vec{F}_k^i d\vec{r}_k + \sum_{k=1}^{N} \vec{F}_k^e d\vec{r}_k
\end{aligned} \tag{2–69}$$

$$\begin{aligned}
\frac{dT}{dt} &= \sum W_k^i + \sum W_k^e \\
              &\equiv \sum_{k=1}^{N} \vec{F}_k^i . \vec{v}_k + \sum_{k=1}^{N} \vec{F}_k^e . \vec{v}_k
\end{aligned} \tag{2–70}$$

trong đó $T$ là động năng cơ hệ tại thời điểm $t$ bất kỳ. $\{\vec{F}_k^i\}$, $\{\vec{F}_k^e\}$ lần lượt là hệ nội lực và hệ ngoại lực tác dụng lên cơ hệ, $\sum dA_k^i$, $\sum dA_k^e$ – tổng công nguyên tố của các nội lực và ngoại lực ; $\sum W_k^i$, $\sum W_k^e$ – tổng công suất của các nội lực và ngoại lực.

Dạng hữu hạn :

$$T - T_o = \sum A_k^i + \sum A_k^e \tag{2–71}$$

trong đó $T_o$ và $T$ là động năng cơ hệ tại thời điểm đầu $t_o$ và thời điểm $t$ đang xét ; $\sum A_k^i$, $\sum A_k^e$ là tổng công hữu hạn của các nội lực và ngoại lực sinh ra trong khoảng thời gian $(t - t_o)$.

Trong trường hợp tất cả các lực tác dụng lên cơ hệ (bao gồm cả nội lực và ngoại lực hoặc lực hoạt động và lực liên kết) là những lực có thế và $\Pi$ là thế năng của cơ hệ tại vị trí cơ hệ ứng với thời điểm đang xét, $\Pi_o$ – thế năng cơ hệ tại vị trí đầu, ta có ;

$$T - T_o = \Pi_o - \Pi$$

*$\gamma$) Các trường hợp bảo toàn*

Nếu tất cả các lực tác dụng lên cơ hệ là lực có thế (bao gồm cả nội lực và ngoại lực hoặc cả lực hoạt động và lực liên kết) thì cơ năng (bằng tổng động năng và thế năng) của cơ hệ được bảo toàn, tức $E = T + \Pi = \text{hằng}$

### 2.4.2. Hướng dẫn áp dụng

Định lý biến thiên động năng thường được áp dụng để giải các bài toán về chuyển động của cơ hệ một bậc tự do. Các bài toán thường gặp là :

+ Xác định công suất khi biết chuyển động của cơ hệ (bài toán thứ nhất).

+ Xác định chuyển động của cơ hệ khi biết đặc trưng sinh công của hệ lực tác dụng lên cơ hệ (bài toán thứ hai).

Khi áp dụng định lý biến thiên động năng để giải các bài toán nêu trên cần tiến hành theo các bước sau đây :

– Phân tích chuyển động của các vật hợp thành của cơ hệ ; dạng chuyển động của các vật hợp thành (tịnh tiến, quay quanh một trục cố định...). Xác nhận cơ hệ khảo sát có một bậc tự do, tức các yếu tố động học của các vật hợp thành đều có thể quy đổi theo một yếu tố động học của một vật nào đó.

– Phân tích hệ lực tác dụng lên cơ hệ ; phân tích khả năng sinh công của từng lực. Các lực được phân thành những lực sinh công và những lực không sinh công (không cần thiết phân thành ngoại lực và nội lực).

– Tính động năng của toàn cơ hệ bằng tổng động năng các vật hợp thành cơ hệ. Tìm các quan hệ động học (vận tốc) giữa các bộ phận và biểu diễn biểu thức động năng của cơ hệ là hàm của một yếu tố động học của một bộ phận nào đó thuộc vật. Thường động năng của cơ hệ được viết dưới dạng sau :

$$T = \frac{1}{2} m_{\text{thg}} v^2 \text{ hoặc } T = \frac{1}{2} J_{\text{thg}} \omega^2,$$

trong đó $m_{\text{thg}}$ được gọi là khối lượng thu gọn của cơ hệ về khâu tịnh tiến có vận tốc $v$ ; $J_{\text{thg}}$ – momen quán tính thu gọn của cơ hệ về khâu quay có vận tốc góc $\omega$.

– Tính tổng công nguyên tố của tất cả các lực tác dụng và dựa vào các quan hệ động học biểu diễn biểu thức công nguyên tố của các lực phụ thuộc vào một di chuyển nguyên tố (di chuyển dài hoặc góc) của một bộ phận nào đó của cơ hệ, chẳng hạn :

$$\sum d'A_k = F_{\text{thg}} ds \text{ hoặc } \sum d'A_k = M_{\text{thg}} d\varphi,$$

trong đó $F_{\text{thg}}$ được gọi là lực thu gọn về khâu tịnh tiến có di chuyển $ds$, $M_{\text{thg}}$ – ngẫu lực thu gọn về khâu quay có di chuyển quay $d\varphi$.

Cần tiếp tục phân tích khả năng tính công hữu hạn của các lực.

– Nếu bài toán tính công suất thì áp dụng các công thức (2–56), (2–58) và (2–69).

– Nếu bài toán tính gia tốc (gia tốc dài hoặc gia tốc góc) của một bộ phận nào đó của cơ hệ hoặc thành lập phương trình vi phân chuyển động của cơ hệ thì sử dụng định lý biến thiên động năng dạng vi phân (2–69) hoặc dạng đạo hàm (2–70).

– Đối với bài toán tính vận tốc (vận tốc dài hoặc góc) của một bộ phận nào đó của cơ hệ theo di chuyển (dài hoặc góc) của một bộ phận nào đó của cơ hệ thì cần phân biệt :

+ Trong trường hợp tính được công hữu hạn thì sử dụng định lý biến thiên động năng dạng hữu hạn (2–71).

+ Trong trường hợp không tính được công hữu hạn thì sử dụng định lý biến thiên động năng dạng vi phân (2–69) hoặc dạng đạo hàm (2–70). Lúc đó sẽ tính được gia tốc (dài hoặc góc) là hàm của thời gian. Tiếp tục tích phân để tìm vận tốc (dài hoặc góc), quãng đường (dài hoặc góc) là hàm của thời gian và sau khi khử thông số $t$ chúng ta nhận được lời giải cần tìm.

### 2.4.3. Bài giải mẫu

**Thí dụ 2–8.** Một băng tải vật liệu đang hoạt động. Cho biết vật được tải A có khối lượng $m_1$, các trục quay B và C là các trục đồng chất có cùng bán kính $r$ và khối lượng $m_2$. Băng tải là dây không giãn, đồng chất có chiều dài là $l$ và khối lượng $m_3$ được phân bố đều. Bỏ qua sự trượt giữa vật A và băng, giữa ròng rọc và băng. Tính biểu thức động năng của cơ hệ theo vận tốc góc của trục dẫn gắn với ròng rọc B.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_17.svg" alt="Hình 2-17" class="figure-img" />
  <p class="figure-caption">Hình 2-17</p>
</div>

*Bài giải.* Khảo sát cơ hệ gồm các vật sau : vật A chuyển động tịnh tiến thẳng, hai ròng rọc B và C chuyển động quay quanh các trục cố định và băng tải (H. 2–17)

Động năng cơ hệ được tính như sau :

$$T = T_A + T_B + T_C + T_{\text{băng}},$$

trong đó $T_A$, $T_B$, $T_C$, $T_{\text{băng}}$ lần lượt là động năng của các vật A, B, C và băng tải. Theo các công thức (2–41), (2–42) ta có

$$T_A = \frac{1}{2} m_1 v_A^2 \ ; \quad T_B = \frac{1}{2} J_1 \omega_1^2 \ ; \quad T_C = \frac{1}{2} J_2 \omega_2^2.$$

Băng tải là vật biến dạng, để tính động năng của nó ta chia băng tải thành nhiều phần tử, mỗi phần tử xem như là một chất điểm có khối lượng $m_k$ và có cùng vận tốc $v_A$ (vì dây không giãn và giữa vật A và băng tải không xảy ra hiện tượng trượt) nên :

$$T_{\text{băng}} = \frac{1}{2} \sum m_k v_A^2 = \frac{1}{2} v_A^2 \sum m_k = \frac{1}{2} m_3 v_A^2.$$

Chú ý rằng cơ hệ có một bậc tự do và quan hệ động học giữa các bộ phận được biểu diễn qua các hệ thức sau :

$$\omega_1 r = \omega_2 r = v_A$$

Ngoài ra $J_1$ và $J_2$ là mômen quán tính của các trục B và C đối với trục quay riêng của chúng được tính theo công thức ;

$$J_1 = J_2 = m_2 \frac{r^2}{2}.$$

Vậy biểu thức động năng của cơ hệ có thể viết trong dạng sau :

$$T = \frac{1}{2}(m_1 + m_2 + m_3) r^2 \omega_1^2$$

Đại lượng $(m_1 + m_2 + m_3) r^2$ được gọi là mômen quán tính thu về trục dẫn.

Chú ý rằng biểu thức động năng của cơ hệ cũng có thể viết trong dạng :

$$T = \frac{1}{2}(m_1 + m_2 + m_3) v_A^2.$$

Khi đó $(m_1 + m_2 + m_3)$ được gọi là khối lượng thu gọn về khâu A.

**Thí dụ 2–9.** Một vật có trọng lượng $P$ đặt ở giữa dầm đàn hồi. Khi vật ở trạng thái tĩnh dầm võng xuống một đoạn $f$ (được gọi là độ võng tĩnh). Tính thế năng của vật khi nó lệch khỏi vị trí cân bằng tĩnh một đoạn bằng $x$. (H. 2–18) cho biết hệ số cứng của dầm bằng $c$ (lực đàn hồi tỉ lệ với độ võng kể từ trạng thái không biến dạng).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_18.svg" alt="Hình 2-18" class="figure-img" />
  <p class="figure-caption">Hình 2-18</p>
</div>

*Bài giải.* Xem vật chịu tác dụng của hai lực có thế : trọng lực $\vec{P}$ và lực đàn hồi $\vec{F}$.

Lấy vị trí cân bằng tĩnh làm gốc toạ độ và định hướng trục $x$ hướng xuống, (H. 2–19).

$$\Pi_{\text{hệ}} = \Pi_{\text{trọng lực}} + \Pi_{\text{đàn hồi}}$$

(thế năng cơ hệ được xác định sai kém hằng số).

Vì $F = -c(x + f_o)$ nên thế năng của cơ hệ ứng với lực đàn hồi bằng

$$\Pi_{\text{đàn hồi}} = \frac{1}{2} c(x + f_o)^2$$

Thế năng của cơ hệ trong trọng trường bằng :

$$\Pi_{\text{trọng lực}} = -Px + \text{const}.$$

Vậy thế năng tổng cộng bằng :

$$\begin{aligned}
\Pi &= \frac{1}{2} c(x + f_o)^2 - Px + \text{const} = \\
    &= \frac{1}{2} c x^2 + (c f_o - P)x + \text{const}.
\end{aligned}$$

Tại vị trí cân bằng tĩnh có sự cân bằng giữa trọng lực và lực đàn hồi ứng với vị trí đó, tức là $P = c f_o$. Do đó có kết quả cuối cùng

$$\Pi = \frac{1}{2} c x^2 + \text{const}$$

Chú ý rằng kết quả này vẫn còn đúng cho trường hợp vật gắn trên lò xo có độ cứng $c$, (H. 2–19)

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_19.svg" alt="Hình 2-19" class="figure-img" />
  <p class="figure-caption">Hình 2-19</p>
</div>

**Thí dụ 2–10.** Một vật có trọng lượng $P_1$ được treo vào đầu một dây đồng chất không giãn có chiều dài $L$ và có trọng lượng $Q$. Dây vắt qua ròng rọc B quay quanh trục $O$ vuông góc với mặt phẳng của hình vẽ. Đầu kia của dây buộc vào trục của con lăn C, lăn không trượt trên mặt ngang cố định. Ròng rọc và con lăn là những đĩa đồng chất có trọng lượng $P_2$ và bán kính $r$. Tính thế năng của cơ hệ khi vật A cách mặt ngang một đoạn bằng $x$, (H. 2–20).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_20.svg" alt="Hình 2-20" class="figure-img" />
  <p class="figure-caption">Hình 2-20</p>
</div>

*Bài giải.* Ở đây lực có thế là các trọng lực. Chọn I làm gốc thế năng và quy ước thế năng của cơ hệ tại đó bằng không.

Ký hiệu thế năng của các vật A, B, C và của dây trong trọng trường lần lượt là $\Pi_1$, $\Pi_2$, $\Pi_3$, $\Pi_4$. Ta có

$$\Pi_1 = -P_1(x + r) \ ; \quad \Pi_2 = P_2 r \ ; \quad \Pi_3 = 0.$$

Để tính thế năng $\Pi_4$ của dây ta xem dây là hệ chất điểm và tính thế năng của nó theo công thức (2–63). Muốn thế ta chia dây thành hai đoạn : một đoạn nằm ngang có cao độ trọng tâm bằng không, đoạn buông thõng có trọng lượng bằng $\dfrac{Q}{L}(x + r)$ và có cao độ trọng tâm bằng $\dfrac{x + r}{2}$. Vậy cao độ trọng tâm $C$ của dây sẽ là :

$$\begin{aligned}
z_C &= \frac{Q_1 z_1 + Q_2 z_2}{Q} = \frac{Q_1.0 + \dfrac{Q}{L}(x + r)\dfrac{(x + r)}{2}}{Q} \\
    &= \frac{1}{2} \frac{(x + r)^2}{L}.
\end{aligned}$$

Do đó thế năng $\Pi_4$ của dây bằng :

$$\Pi_4 = -Q z_C = -\frac{Q}{2L}(x + r)^2$$

Thế năng của cơ hệ bằng

$$\begin{aligned}
\Pi &= \Pi_1 + \Pi_2 + \Pi_3 + \Pi_4 \\
    &= -P_1(x + r) - P_2 r - \frac{Q}{2L}(x + r)^2.
\end{aligned}$$

**Thí dụ 2–11.** Tìm công suất trung bình có ích của một máy hơi nước, nếu áp suất trung bình của hơi lên pittông trong cả hành trình là $50\text{ N/cm}^2$ ; Diện tích bề mặt của pittông là $300\text{ cm}^2$, độ dài hành trình là $l = 40\text{ cm}$, số hành trình trong một phút là $n = 120$ và hệ số tác dụng hữu ích là $\eta = 0,9$.

*Bài giải.* Áp lực toàn phần của hơi nước lên pittông là :

$$F = 50 \times 300 = 15.000\text{ N}.$$

Do đó công thực hiện trong một phút là ;

$$A = 15.000 \times 40 \times 120 = 720.000\text{ J}$$

Số công hữu ích là :

$$A_h = 0,9 \times 720.000\text{ J}$$

Áp dụng công thức tính công suất (2–58)

$$\begin{aligned}
W &= \frac{A}{t} = \frac{0,9 \times 720.000}{60} \\
  &= 10.800\text{ J/s} = 10,8\text{ kW}.
\end{aligned}$$

**Thí dụ 2–12.** Một chiếc xe tăng được khởi động nhờ một động cơ làm quay 4 bánh xe (mỗi bên hai bánh) kéo theo xích chuyển động. Sau 8 giây kể từ lúc bắt đầu chuyển động xe đạt được vận tốc $36\text{ km/giờ}$. Hãy xác định công suất trung bình của động cơ, nếu trọng lượng hòm xe là $P_1 = 50.000\text{N}$, trọng lượng mỗi bánh $P_2 = 2000\text{N}$, trọng lượng mỗi xích $P_3 = 5000\text{N}$. Bánh xe coi như đĩa tròn đồng chất, (H. 2–21).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_21.svg" alt="Hình 2-21" class="figure-img" />
  <p class="figure-caption">Hình 2-21</p>
</div>

*Bài giải.* Cơ hệ khảo sát gồm :

– Thân xe chuyển động tịnh tiến ;

– Bánh xe chuyển động song phẳng (4 bánh) ;

– Xích xe chia làm 3 phần ;

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_22.svg" alt="Hình 2-22" class="figure-img" />
  <p class="figure-caption">Hình 2-22</p>
</div>

Đoạn AB không chuyển động có vận tốc bằng không.

Đoạn CD chuyển động tịnh tiến với vận tốc bằng hai lần vận tốc xe tăng. Đoạn ba gồm hai nửa vành tròn kết hợp AID và BIIC chuyển động song phẳng, (H. 2–22).

Để xác định công suất trung bình của động cơ ta áp dụng công thức (2–58) :

$$W = \frac{\sum A_k}{t} \tag{a}$$

Trong đó $\sum A_k$ là tổng công của các lực thực hiện được khi xe tăng đi được một quãng đường nào đó trong thời gian $t$.

Mặt khác theo định lý động năng (2–71)

$$T - T_o = \sum A_k, \tag{b}$$

mà $T_o = 0$ vì ban đầu xe đứng yên, nên từ (a), (b) rút ra :

$$W = \frac{T}{t} \tag{c}$$

Bây giờ ta chỉ cần tính động năng $T$ của xe khi nó chuyển động với vận tốc $v = 36\text{ km/giờ}$. Theo phân tích chuyển động trên ta có ;

$$T = T_{\text{hòm xe}} + T_{\text{4 bánh xe}} + T_{\text{2 xích}} \tag{d}$$

$$T_{\text{hòm xe}} = \frac{1}{2} \frac{P_1}{g} v^2 \tag{e}$$

$$\begin{aligned}
T_{\text{4 bánh xe}} &= 4 J_z \frac{\omega^2}{2} + 4.\frac{P_2}{g}\frac{v^2}{2} = \\
                     &= 4 \frac{P_2 R^2}{2g}\frac{\omega^2}{2} + 4 \frac{P_2 v^2}{2g} = \frac{3 P_2}{g} v^2
\end{aligned}$$

$$T_{\text{2 xích}} = 2 T(DC) + 2 T(\text{vành tròn}),$$

$$\begin{aligned}
T(CD) &= m(DC).\frac{v_c^2}{2} = \frac{P_3 l}{g(2l + 2\pi R)}\frac{(2v)^2}{2} \\
      &= \frac{P_3 l v^2}{g(l + \pi R)}
\end{aligned}$$

$$\begin{aligned}
T(\text{vành tròn}) &= \frac{P_3.2\pi R}{2l + 2\pi R} R^2.\frac{\omega^2}{2g} \\
                    &\quad + \frac{P_3 2\pi R}{2l + 2\pi R}.\frac{v^2}{2g} \\
                    &= \frac{P_3 \pi R}{g(l + \pi R)} v^2.
\end{aligned}$$

Vậy :

$$T_{\text{2 xích}} = \frac{2 P_3 v^2}{g} \tag{g}$$

Khi thay các biểu thức (e), (f), (g) vào (d) ta có :

$$\begin{aligned}
T &= \frac{P_1}{g}\frac{v^2}{2} + \frac{3 P_2}{g} v^2 + \frac{2 P_3}{g} v^2 \\
  &= \left(\frac{P_1}{2} + 3 P_2 + 2 P_3\right)\frac{v^2}{g}
\end{aligned} \tag{h}$$

Thay (h) vào (c) ta được công suất động cơ :

$$W = \left(\frac{P_1}{2} + 3 P_2 + 2 P_3\right)\frac{v^2}{gt} \tag{i}$$

Với các giá trị số cho : $t = 8\text{ giây}$, $v = 10\text{ m/giây}$ ta nhận được kết quả :

$$W = 51,250\text{ kW}.$$

**Thí dụ 2–13.** Một vật A có trọng lượng $P$ được kéo lên từ trạng thái đứng yên nhờ tời B là đĩa tròn đồng chất có bán kính $R$, trọng lượng $Q$ và chịu tác dụng ngẫu lực có mômen $M$ không đổi, (H. 2–23).

– Tìm vận tốc vật A khi nó được kéo lên một đoạn bằng $h$ ;

– Tìm gia tốc vật A.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_23.svg" alt="Hình 2-23" class="figure-img" />
  <p class="figure-caption">Hình 2-23</p>
</div>

*Bài giải.* Cơ hệ khảo sát gồm vật A chuyển động tịnh tiến ; tời B quay quanh một trục cố định. Cơ hệ có một bậc tự do. Các lực tác dụng lên cơ hệ gồm các trọng lực $\vec{P}$, $\vec{Q}$, ngẫu lực $\overline{M}$, phản lực $\vec{R}_o$ và các nội lực.

*Nhận xét :* Trong hệ lực tác dụng chỉ có ngẫu lực $\overline{M}$ và trọng lực $\vec{P}$ sinh công ; còn phản lực $\vec{R}_o$ và trọng lực $\vec{Q}$ không sinh công vì các điểm đặt của chúng cố định ; các nội lực cũng không sinh công.

Vì có thể tính công hữu hạn của ngẫu lực $\overline{M}$ và trọng lực $\vec{P}$ nên để tìm vận tốc $\vec{v}_A$ của vật A ta áp dụng định lý biến thiên động năng dạng (2–68)

$$T - T_o = A(\vec{P}) + A(\overline{M}) \tag{a}$$

trong đó $T_o$ là động năng cơ hệ tại thời điểm đầu ($T_o = 0$, vì ban đầu cơ hệ đứng yên) còn $T$ là động năng cơ hệ :

$$T = T_A + T_B$$

Vật A chuyển động tịnh tiến nên $T_A = \dfrac{1}{2}\dfrac{P}{g} v_A^2$.

Vật B quay quanh trục cố định nên $T_B = \dfrac{1}{2} J_o \omega^2$, ở đó $J_o$ là mômen quán tính của vật B đối với trục thẳng góc với mặt phẳng hình vẽ và qua $O$ :

$$J_o = \frac{1}{2}\frac{Q}{g} R^2.$$

Ngoài ra

$$\omega = \frac{v_A}{R}$$

Vậy động năng cơ hệ bằng :

$$T = \frac{(2P + Q)}{2g}\frac{v_A^2}{2} \tag{b}$$

Gọi $\sum A_k$ là tổng công của các lực, ta có :

$$\sum A_k = A(\overline{M}) + A(\vec{P}) = M\varphi - Ph,$$

trong đó $\varphi$ là góc quay của tời khi vật A được nâng một đoạn $h$. Dễ dàng nhận được : $h = R\varphi$.

Vậy :

$$\sum A_k = M\varphi - Ph = \left(\frac{M}{R} - P\right) h \tag{c}$$

Thay (b) và (c) vào (a) ta nhận được :

$$\left(\frac{2P + Q}{2g}\right)\frac{v_A^2}{2} = \left(\frac{M}{R} - P\right) h$$

Từ đây rút ra :

$$v_A = \sqrt{4g\frac{(M - PR)}{R(2P + Q)} h}$$

Để tìm gia tốc $\vec{a}_A$ của vật A ta sử dụng định lý biến thiên động năng dạng (2–70), nó được viết như sau :

$$\frac{(2P + Q)}{2g} v_A . a_A = \left(\frac{M}{R} - P\right) v_A$$

Vì cơ hệ chuyển động nên $v_A \neq 0$, nên sau khi rút gọn cho $v_A$ ở hai vế, ta được :

$$a_A = 2g\frac{M - PR}{R(2P + Q)} = \text{const}$$

Như vậy vật A chuyển động biến đổi đều.

**Thí dụ 2–14.** Một cơ cấu hành tinh đặt trong mặt phẳng nằm ngang chuyển động từ trạng thái đứng yên nhờ một ngẫu lực có momen không đổi $M$ đặt vào tay quay $OA$. Tay quay $OA$ quay quanh trục cố định qua $O$ làm cho bánh 2, là một đĩa tròn đồng chất có bán kính $r_2$ và trọng lượng $P$, lăn không trượt đối với bánh 1 có bán kính $r_1$ và cố định. Xem tay quay $OA$ là thanh đồng chất, có trọng lượng $Q$. Bỏ qua các lực cản, (H. 2–24).

Xác định gia tốc góc tay quay.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_24.svg" alt="Hình 2-24" class="figure-img" />
  <p class="figure-caption">Hình 2-24</p>
</div>

*Bài giải.* Cơ hệ khảo sát gồm ;

– Tay quay $OA$ quay quanh trục cố định qua $O$.

– Bánh 2 chuyển động song phẳng. cơ hệ có một bậc tự do :

Hệ lực tác dụng gồm ngẫu lực có momen $M$, các trọng lực các khâu, các phản lực tại $O$, $A$ và tại điểm tiếp xúc giữa bánh 1 và 2 (lực ăn khớp).

Dễ dàng thấy rằng chỉ có ngẫu lực sinh công. Các trọng lực không sinh công vì cơ cấu đặt trong mặt phẳng ngang. Phản lực $\vec{R}_o$ không sinh công vì điểm đặt $O$ cố định, phản lực $\vec{R}_A$ không sinh công vì tại $A$ phản lực xuất hiện đôi một ngược chiều nhau và các điểm đặt của chúng có cùng di chuyển, lực ăn khớp không sinh công vì bánh 2 lăn không trượt theo bánh 1 cố định (điểm đặt của lực ăn khớp có vận tốc bằng không).

Để tìm gia tốc góc của tay quay ta áp dụng định lý động năng dạng (2–70)

$$\frac{dT}{dt} = \sum W_k$$

trong đó $\sum W_k$ là tổng công suất của tất cả các lực tác dụng lên hệ.

Đầu tiên tính biểu thức động năng cơ hệ bằng tổng động năng tay quay và bánh 2 :

$$T = T_{OA} + T_2$$

Tay quay quay quanh trục cố định với vận tốc góc $\omega$ nên :

$$T_{OA} = \frac{1}{2} J_o \omega^2 = \frac{1}{2}\frac{Q}{g}\frac{(r_1 + r_2)^2}{3}\omega^2$$

Bánh 2 chuyển động song phẳng với vận tốc góc $\omega_2$ và vận tốc khối tâm $v_A$ nên :

$$\begin{aligned}
T_2 &= \frac{1}{2} J_A \omega_2^2 + \frac{1}{2}\frac{P}{g} v_A^2 \\
    &= \frac{P}{4g} r_2^2 \omega_2^2 + \frac{1}{2}\frac{P}{g} v_A^2
\end{aligned}$$

Biểu thức động năng toàn hệ là

$$\begin{aligned}
T &= \frac{1}{2}\frac{Q}{g}\frac{(r_1 + r_2)^2}{3}\omega^2 + \frac{P}{4g} r_2^2 \omega_2^2 \\
  &\quad + \frac{1}{2}\frac{P}{g} v_A^2
\end{aligned}$$

Vì cơ hệ có một bậc tự do nên có thể tính các yếu tố vận tốc theo một yếu tố vận tốc chọn trước. Để tìm gia tốc của tay quay, ta tính các yếu tố vận tốc theo vận tốc góc quay. Nếu xem điểm $A$ nằm trên tay quay $OA$ thì :

$$v_A = \omega(r_1 + r_2)$$

Mặt khác có thể xem điểm $A$ thuộc bánh song phẳng 2, có tâm vận tốc là điểm tiếp xúc :

$$v_A = \omega_2 r_2$$

Từ đó rút ra :

$$\omega_2 = \omega\left(1 + \frac{r_1}{r_2}\right)$$

Thay các đại lượng vừa tính được vào biểu thức động năng cơ hệ và sau khi rút gọn, ta được :

$$T = \frac{1}{2}\frac{2Q + 9P}{6g}(r_1 + r_2)^2 \omega^2$$

Dễ dàng tính được :

$$\frac{dT}{dt} = \frac{2Q + 9P}{6g}(r_1 + r_2)^2 \overline{\omega}\frac{d\overline{\omega}}{dt}$$

Bây giờ ta chuyển sang tính tổng công suất của tất cả các lực tác dụng lên hệ. Vì chỉ có ngẫu lực $M$ sinh công nên theo (2–57) ta có :

$$\sum W_k = M\overline{\omega}$$

Vậy định lý biến thiên động năng cho ta :

$$\frac{2Q + 9P}{6g}(r_1 + r_2)^2 \overline{\omega}\frac{d\overline{\omega}}{dt} = M\overline{\omega}$$

Vì cơ hệ chuyển động nên $\overline{\omega} \neq 0$. Do đó :

$$\overline{\varepsilon} \equiv \frac{d\overline{\omega}}{dt} = \frac{6Mg}{(2Q + 9P)(r_1 + r_2)^2} = \text{const}$$

Vậy tay quay $OA$ quay nhanh dần đều.

**Thí dụ 2–15.** Một vật có trọng lượng $P$ được kéo lên theo mặt phẳng nghiêng với mặt ngang góc $\alpha$, nhờ tời có bán kính $r$, trọng lượng $Q$ quay quanh trục cố định $O$. Tời chịu tác dụng ngẫu lực có mômen $M = M_o - \beta\omega$, trong đó $M_o$, $\beta$ là các hằng số, $\omega$ – vận tốc góc của tời. Cho biết bán kính quán tính của tời đối với trục quay $O$ là $\rho$, hệ số ma sát trượt giữa vật A và mặt phẳng nghiêng là $f$. Bỏ qua khối lượng dây cáp và ma sát tại trục quay $O$. Tìm vận tốc vật A theo quãng đường đi (H. 2–25).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_25.svg" alt="Hình 2-25" class="figure-img" />
  <p class="figure-caption">Hình 2-25</p>
</div>

*Bài giải.* Cơ hệ khảo sát gồm ; vật A chuyển động tịnh tiến và tời quay quanh trục cố định $O$. Cơ hệ có một bậc tự do.

Hệ lực tác dụng gồm các trọng lực $\vec{P}$ và $\vec{Q}$, ngẫu lực có mômen $\overline{M}$, phản lực $\vec{R}_o$, phản lực pháp tuyến $\vec{N}$, lực ma sát trượt giữa vật và mặt phẳng nghiêng. Dễ dàng nhận thấy rằng chỉ có ngẫu lực sinh công dương, trọng lực $P$ và lực ma sát trượt sinh công âm. Các lực khác không sinh công. Vì ngẫu lực là một đại lượng biến đổi, không tính được công hữu hạn của nó nên chúng ta áp dụng định lý biến thiên động năng dạng vi phân :

$$dT = \sum dA_k$$

Đầu tiên chúng ta tính biểu thức động năng $T$ của cơ hệ :

$$T = T_A + T_{\text{tời}}$$

Vật A chuyển động tịnh tiến với vận tốc $v$ nên theo (2–41) có :

$$T_A = \frac{1}{2}\frac{P}{g} v^2$$

Trục tời quay quanh trục cố định qua $O$ với vận tốc góc $\omega$ nên theo (2–42)

$$T_{\text{tời}} = \frac{1}{2} J_o \omega^2 = \frac{1}{2}\frac{Q}{g}\rho^2 \omega^2$$

Nhận xét rằng do dây không giãn nên vận tốc mọi điểm trên dây bằng nhau và

$$\omega = \frac{v}{r}$$

Vậy động năng của cơ hệ bằng :

$$\begin{aligned}
T &= \frac{1}{2}\frac{P}{g} v^2 + \frac{1}{2}\frac{Q}{g}\rho^2 \omega^2 \\
  &= \frac{1}{2}\frac{Pr^2 + Q\rho^2}{gr^2} v^2 = \frac{1}{2} m v^2.
\end{aligned}$$

trong đó ta đặt

$$m = \frac{Pr^2 + Q\rho^2}{gr^2}$$

được gọi là khối lượng thu gọn về khâu tịnh tiến A.

Bây giờ ta chuyển sang tính tổng công nguyên tố của các lực :

$$\sum d'A(\vec{F}) = d'A(\overline{M}) + d'A(\vec{P}) + d'A(\vec{F}_{ms})$$

Đầu tiên nhận xét rằng :

$$F_{ms} = fN = fP\cos\alpha.$$

Để tính công nguyên tố của ngẫu lực tác dụng lên vật rắn ta sử dụng công thức (2–53)$_1$

$$d'A(M) = Md\varphi = (M_o - \beta\omega)d\varphi$$

Dựa vào (2–47) dễ dàng tính công nguyên tố của trọng lực $\vec{P}$ và lực ma sát $\vec{F}_{ms}$ :

$$d'A(P) = -P\sin\alpha ds \ ; \quad d'A(\vec{F}_{ms}) = -fP\cos\alpha ds.$$

Vậy :

$$\begin{aligned}
\sum d'A(\vec{F}) &= (M_o - \beta\omega)d\varphi - P\sin\alpha ds \\
                  &\quad - fP\cos\alpha ds
\end{aligned}$$

Từ mối quan hệ động học trên ta tìm được

$$d\varphi = \frac{ds}{r}$$

Vậy biểu thức tổng công nguyên tố của các lực có thể viết trong dạng :

$$\begin{aligned}
\sum d'A(\vec{F}) &= \left[\frac{M_o}{r} - P(\sin\alpha + f\cos\alpha) - \frac{\beta}{r^2} v\right] ds \\
                  &= F_{\text{thg}} ds
\end{aligned}$$

trong đó

$$F_{\text{thg}} = \frac{M_o}{r} - P(\sin\alpha + f\cos\alpha) - \frac{\beta}{r^2} v.$$

được gọi là lực thu gọn về khâu tịnh tiến A.

Định lý biến thiên động năng của cơ hệ dạng vi phân cho ta

$$m v dv = F_{\text{thg}}.ds = F_{\text{thg}} v dt$$

Vì hệ chuyển động nên $v \neq 0$ sau khi rút gọn hai vế cho $v$ ta nhận được :

$$\begin{aligned}
m\frac{dv}{dt} = F_{\text{thg}} &= \frac{M_o}{r} - P(\sin\alpha + f\cos\alpha) \\
                                &\quad - \frac{\beta}{r^2} v
\end{aligned} \tag{a}$$

nó mô tả chuyển động của cơ hệ và được gọi là phương trình vi phân chuyển động của cơ hệ.

Từ phương trình vi phân chuyển động của cơ hệ ta thấy rằng muốn cho cơ hệ khởi động được từ trạng thái nghỉ phải có điều kiện $F_{\text{thg}}(0) > 0$ tức :

$$\frac{M_o}{r} - P(\sin\alpha + f\cos\alpha) > 0$$

Điều kiện đó được thoả mãn, ta có $a(0) \equiv \dfrac{dv}{dt}(0) > 0$ và ban đầu cơ hệ chuyển động nhanh dần, vận tốc $v$ tăng lên và lực thu gọn giảm đến giá trị không, lúc đó cơ hệ sẽ dẫn đến trạng thái chuyển động với $a = 0$ và $v = \text{const}$, được gọi là trạng thái giới hạn (trạng thái bình ổn) và vận tốc ứng với trạng thái đó được gọi là vận tốc giới hạn (vận tốc bình ổn).

Vận tốc giới hạn được tính từ điều kiện $F_{\text{thg}} = 0$, tức là :

$$\frac{M_o}{r} - P(\sin\alpha + f\cos\alpha) - \frac{\beta}{r^2} v_{\text{gh}} = 0$$

Từ đó

$$v_{\text{gh}} = \frac{[M_o - Pr(\sin\alpha + f\cos\alpha)]r}{\beta} \tag{b}$$

Ta cũng suy ra rằng trong suốt quá trình chuyển động nhanh dần từ trạng thái nghỉ ta luôn luôn có $v \le v_{\text{gh}}$ tức là

$$F_{\text{thg}} = \frac{M_o}{r} - P(\sin\alpha + f\cos\alpha) - \frac{\beta}{r^2} v \ge 0 \tag{c}$$

Để tích phân phương trình vi phân chuyển động (a) ta đặt

$$A = \frac{1}{m}\left[\frac{M_o}{r} - P(\sin\alpha + f\cos\alpha)\right] > 0,$$

$$B = -\frac{\beta}{mr^2} \ ; \quad A - Bv > 0$$

và phân ly biến, ta nhận được (xem thí dụ 1–6, trang 13)

$$\frac{dv}{A - Bv} = dt \tag{d}$$

Khi tích phân phương trình (d) chú ý đến điều kiện đầu $v(0) = 0$ ta tìm được :

$$\frac{A - Bv}{A} = e^{-\beta t}$$

Từ đó suy ra :

$$v = \frac{A}{B}\left(1 - e^{-\beta t}\right) \tag{e}$$

Từ (e) ta có :

$$\lim_{t \to \infty} v = \frac{A}{B} = v_{\text{gh}}$$

Vậy vận tốc giới hạn là vận tốc khi $t \to \infty$. Trong thực tế sau một khoảng thời gian không lớn lắm (thời gian mở máy) có thể coi như cơ hệ đạt được trạng thái chuyển động giới hạn. Đó là trạng thái chuyển động bình ổn của cơ hệ.

Bây giờ để tìm quãng đường đi của vật A là hàm của thời gian ta tích phân phương trình (e). Muốn thế viết nó trong dạng :

$$\frac{ds}{dt} = \frac{A}{B}\left(1 - e^{-\beta t}\right)$$

và giả sử điều kiện đầu $s(0) = 0$, ta có :

$$s = -\frac{A}{B} t + \frac{A}{B^2}\left(e^{-\beta t} - 1\right) \tag{g}$$

Sau khi khử $t$ trong phương trình (e) và (g) chúng ta nhận được ;

$$s = -\frac{A}{B\beta}\ln\left(1 - \frac{B}{A} v\right) - \frac{1}{B} v$$

cho chúng ta biểu thức xác lập mối quan hệ giữa vận tốc và quãng đường đi.

**Thí dụ 2–16.** Để đo công suất động cơ người ta mắc lên puli của động cơ một đai truyền có đệm ma sát. Nhánh phải của đai được nối với một lực kế lò xo, còn ở đầu nhánh kia ta treo một vật nặng của khối lượng $m$. Khi động cơ quay đều với $n = 120$ vòng/phút thì lực kế chỉ $39,2$ Niutơn. Cho $m = 1\text{ kg}$, đường kính của puli là $d = 63,6\text{ cm}$. Tính công suất của động cơ. Bỏ qua ma sát ở trục quay của động cơ.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_26.svg" alt="Hình 2-26" class="figure-img" />
  <p class="figure-caption">Hình 2-26</p>
</div>

*Bài giải.* Cơ hệ khảo sát gồm rôto động cơ cùng với puli mắc trên nó và đai truyền có đệm ma sát.

Hệ lực tác dụng gồm ngẫu lực tạo mômen quay động cơ $M_d$, các phản lực do đai truyền tác dụng lên puli và ngược lại (tại mỗi điểm tiếp xúc có hai lực trực đối nhau), phản lực tại $O$, trọng lực vật A và lực liên kết lò xo.

Dễ dàng chỉ ra rằng các lực sinh công chỉ gồm ngẫu lực tạo mômen quay động cơ, hệ các lực ma sát do đai truyền tác dụng lên puli ; còn các trọng lực, phản lực tại $O$, hệ phản lực do puli tác dụng lên đai truyền không sinh công vì điểm đặt của chúng đứng yên. Như vậy trong trường hợp này hệ nội lực sinh công.

Vì puli và rôto động cơ quay đều, còn các bộ phận khác thuộc cơ hệ đứng yên nên động năng của hệ cơ không đổi. Dựa vào định lý biến thiên động năng dạng đạo hàm (2–70) :

$$\frac{dT}{dt} = (M_d - M_c)\omega = 0 \tag{a}$$

trong đó $M_c = \sum m_o(\vec{F}_{ms})$ là tổng mômen đối với điểm $O$ của các lực ma sát do đai truyền tác dụng lên puli.

Từ đó rút ra công suất động cơ $W_d$

$$W_d = M_d \omega = M_c \omega \tag{b}$$

Để tính $M_c$ ta xét sự cân bằng của đai truyền xem như một vật rắn cân bằng chịu tác dụng của hệ lực sau (H. 2–27).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_27.svg" alt="Hình 2-27" class="figure-img" />
  <p class="figure-caption">Hình 2-27</p>
</div>

$$\left(\vec{T}, \vec{P}, \text{các } \vec{N}_k, \text{các } \vec{F}_{ms}^k\right) \equiv 0$$

Từ đó suy ra :

$$\sum \overline{m}_o(\vec{F}_{ms}^k) - TR + PR = 0$$

Vậy :

$$M_c = \sum \overline{m}_o(\vec{F}_{ms}^k) = (T - P)R \tag{c}$$

Khi thay (c) vào (b) ta nhận được :

$$W_d = (T - P)R\omega = (T - P)R\frac{\pi n}{30}$$

Thay số liệu vào, ta có :

$$\begin{aligned}
W_d &= (39,2 - 9,81)\frac{63,6}{2}\frac{3,14.120}{30} \\
    &= 117\text{W (oát)}.
\end{aligned}$$

**Thí dụ 2–17.** Thành lập phương trình vi phân chuyển động của cơ cấu culít nếu mômen quán tính của tay quay $OA$ đối với trục qua $O$ bằng $J_o$, độ dài tay quay bằng $a$, khối lượng máng trượt bằng $m$. Bỏ qua khối lượng con trượt A và ma sát. Trọng tâm của tay quay $OA$ do được cân bằng nên nằm tại trục quay $O$. Tay quay chịu tác dụng ngẫu lực $M$ còn máng trượt chịu tác dụng lực $F$ nằm ngang, (H. 2–28).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_28.svg" alt="Hình 2-28" class="figure-img" />
  <p class="figure-caption">Hình 2-28</p>
</div>

*Bài giải.* Cơ hệ khảo sát gồm :

– Tay quay $OA$ quay với vận tốc góc $\omega$ quanh trục qua $O$ ;

– Máng trượt chuyển động tịnh tiến theo phương ngang với vận tốc $v$. Cơ hệ có một bậc tự do.

Hệ lực tác dụng gồm ngẫu lực $M$ tác dụng lên tay quay, lực $\vec{F}$ tác dụng lên máng động, các trọng lực, phản lực tại $O$. Phản lực tại rãnh $K$, phản lực giữa con trượt $A$ và máng trượt.

Dễ dàng chỉ ra rằng chỉ có ngẫu lực $\overline{M}$ và lực $\vec{F}$ sinh công. Để thành lập phương trình vi phân chuyển động cơ hệ ta sử dụng định lý biến thiên động năng dạng đạo hàm :

$$\frac{dT}{dt} = \sum W_k \tag{a}$$

Đầu tiên ta tính động năng $T$ của cơ hệ ;

$$T = T_{OA} + T_{\text{máng}},$$

$$T_{OA} = \frac{1}{2} J_o \omega^2 \ ; \qquad T_{\text{máng}} = \frac{1}{2} m v^2.$$

Vậy :

$$T = \frac{1}{2} J_o \omega^2 + \frac{1}{2} m v^2.$$

vì hệ có một bậc tự do, nên dễ dàng tính được :

$$v = \frac{d}{dt}(a\cos\varphi) = -a\sin\varphi\,\dot{\varphi}$$

(có thể tính $v$ dựa vào định lý hợp vận tốc trong hợp chuyển động đối với con trượt A ; $v_a = a\omega$; $\vec{v}_a = \vec{v}_e + \vec{v}_r$ , $v_e = v_a\sin\varphi = a\sin\varphi\,\dot{\varphi}$)

Biểu thức động năng của hệ cơ bằng ;

$$T = \frac{1}{2}\left(J_o + m a^2 \sin^2\varphi\right)\dot{\varphi}^2 \tag{b}$$

Bây giờ chuyển sang tính tổng công suất của các lực tác dụng :

$$\begin{aligned}
\sum W_k &= W(\overline{M}) + W(\vec{F}) = M\omega - Fv = \\
         &= (M - Fa\sin\varphi)\dot{\varphi}
\end{aligned} \tag{c}$$

Khi thay (b), (c) vào (a) ta nhận được :

$$\begin{aligned}
\left(J_o + m a^2 \sin^2\varphi\right)\dot{\varphi}\ddot{\varphi} &+ m a^2 \sin\varphi\cos\varphi\,\dot{\varphi}^3 \\
&= (M - Fa\sin\varphi)\dot{\varphi}.
\end{aligned}$$

Vì hệ chuyển động nên $\dot{\varphi} \neq 0$. Do đó, ta có :

$$\begin{aligned}
\left(J_o + m a^2 \sin^2\varphi\right)\ddot{\varphi} &+ \frac{1}{2} m a^2 \sin 2\varphi\,\dot{\varphi}^2 \\
&+ Fa\sin\varphi - M = 0 \ ;
\end{aligned}$$

nó mô tả chuyển động của cơ cấu culít và được gọi là phương trình vi phân chuyển động của cơ cấu.

---

## 2.5. BÀI TẬP

### Định lý biến thiên động lượng và định lý chuyển động khối tâm của cơ hệ

**2.1.** Một đầu đạn có khối lượng là $m = 0,020\text{ kg}$ bay ra khỏi nòng súng với vận tốc $v = 650\text{ m/s}$. Thời gian đầu đạn chạy trong nòng súng là $t = 0,000955\text{ s}$. Tiết diện ngang của nòng súng là $\delta = 150\text{ mm}^2$. Tìm áp suất trung bình của hơi nổ trong nòng súng. Bỏ qua tác dụng của trọng lực và của áp suất khí quyển.

*Trả lời :* $P \approx 9,12.10^4\text{ N/mm}^2$.

---

**2.2.** Một quả lựu pháo khối lượng $12\text{ kg}$ đang bay với vận tốc $15\text{m/s}$ thì nổ và vỡ làm hai mảnh : vận tốc của mảnh thứ nhất có khối lượng $8\text{ kg}$ bay về hướng chuyển động với vận tốc là $25\text{ m/s}$. Xác định vận tốc của mảnh thứ hai.

*Trả lời :* $5\text{m/s}$ về hướng ngược chiều chuyển động của mảnh thứ nhất.

---

**2.3.** Nòng súng đại bác đặt nằm ngang khối lượng $11.10^3\text{ kg}$. Khối lượng viên đạn bằng $54\text{ kg}$. Vận tốc viên đạn lúc ra khỏi miệng súng $v_0 = 900\text{ m/s}$. Xác định vận tốc giật lùi của nòng súng ở thời điểm viên đạn bay ra.

*Trả lời :* Vận tốc giật lùi của nòng súng bằng $4,42\text{ m/s}$ và hướng ngược chiều chuyển động của viên đạn.

---

**2.4.** Một chiếc xe con có khối lượng là $240\text{ kg}$ chuyển động thẳng đều với vận tốc $3,6\text{ km/giờ}$. Một người khối lượng $50\text{ kg}$ nhảy lên bậc xuống theo phương vuông góc với hướng chuyển động của xe. Xác định vận tốc của xe và người sau lúc đó.

*Trả lời :* $v = 2,98\text{ m/s}$.

---

**2.5.** Một dòng nước được phóng ra với vận tốc bằng $v = 8\text{m/s}$ và nghiêng với phương ngang một góc $\alpha = 30^\circ$ từ một vòi có tiết diện bằng $S = 16\text{ cm}^2$ như hình vẽ. Xác định áp lực tổng cộng của chất lỏng lên mặt tường thẳng đứng. Bỏ qua ảnh hưởng của trọng lực và coi rằng sau khi gặp mặt tường các hạt lỏng chuyển động theo mặt tường, (H. 2–29).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_29.svg" alt="Hình 2-29" class="figure-img" />
  <p class="figure-caption">Hình 2-29</p>
</div>

*Trả lời :* $N = 88,8\text{ N}$.

---

**2.6.** Xác định áp lực tổng hợp động lực lên gối đỡ của dòng chất lỏng chảy trong một đoạn ống cống đặt trong mặt phẳng ngang như hình vẽ. Tiết diện đường ống có đường kính $d = 20\text{cm}$. Hai nhánh của đường ống tạo với nhau một góc $\alpha = 120^\circ$. Vận tốc chất lỏng chảy trong ống là $v = 127\text{ m/s}$. Bỏ qua tác dụng của trọng lực (H. 2–30).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_30.svg" alt="Hình 2-30" class="figure-img" />
  <p class="figure-caption">Hình 2-30</p>
</div>

*Trả lời :* $N = 502\text{ N}$.

---

**2.7.** Xác định thành phần áp lực của nước song song với trục đối xứng của cánh cố định của rôto tuabin. Cho biết lưu lượng thể tích của nước là $Q$ và khối lượng riêng của nó là $\gamma$. Vận tốc của nước lúc va vào cánh tuabin là $v_1$ hướng song song với trục đối xứng, vận tốc lúc ra khỏi cánh là $v_2$ hợp với mặt phẳng đối xứng góc $\alpha$ xem hình (H. 2–31).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_31.svg" alt="Hình 2-31" class="figure-img" />
  <p class="figure-caption">Hình 2-31</p>
</div>

*Trả lời :* $N = \gamma Q(v_1 + v_2\cos\alpha)$

---

**2.8.** Một nồi súp–de đầu máy trọng lượng $103,5\text{ kN}$ đổ đầy nước trọng lượng $150\text{ kN}$ với áp suất lên mặt trên tự do là $P_0 = 10\text{ at}$, theo áp kế. Tại một thời điểm nào đó xảy ra đứt gãy các vít giữ nắp $A$ với ống nối $B$, (H. 2–32) do đó nước nóng ở trong nồi súp–de chảy ra ngoài. Cho $H = 1\text{m}$, $d = 0,4\text{m}$, trọng lượng riêng của nước nóng là $\gamma = 0,9$. Bỏ qua lực cản thuỷ lực, vận tốc của các hạt nước trong nồi và hiện tượng bốc hơi của nước khi ra khỏi ống $B$. Hãy tính áp lực của nồi súp–de lên giá đỡ khi nắp $A$ bị bung. Vận tốc của nước chảy ra ngoài sau khi bật nắp được tính theo công thức :

$$v = \sqrt{2g\left(H + \frac{P_0}{\gamma}\right)}$$

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_32.svg" alt="Hình 2-32" class="figure-img" />
  <p class="figure-caption">Hình 2-32</p>
</div>

*Trả lời :* Áp lực lên giá đỡ bằng không.

---

**2.9.** Xác định di chuyển ngang của con tàu mang cần cẩu khi cần $AB$ mang vật nặng có khối lượng bằng $2$ tấn cất thẳng đứng lên từ vị trí ban đầu nghiêng góc $30^\circ$ như hình vẽ : Khối lượng của tàu và cần cẩu bằng $20$ tấn, chiều dài $AB$ bằng $8\text{ m}$. Bỏ qua sức cản của nước và khối lượng của cần $AB$, (H. 2–33).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_33.svg" alt="Hình 2-33" class="figure-img" />
  <p class="figure-caption">Hình 2-33</p>
</div>

*Trả lời :* Tàu di chuyển ngang ngược chiều với di chuyển ngang của vật nặng một đoạn bằng $0,36\text{m}$.

---

**2.10.** Đoàn tàu hoả đang chuyển động trên một quãng đường thẳng ngang với vận tốc $54\text{ km/giờ}$. Tàu hãm máy làm xuất hiện lực cản bằng $\frac{1}{10}$ trọng lượng tổng cộng của đoàn tàu. Tìm thời gian $T$ và quãng đường $s$ đoàn tàu còn chạy thêm được cho đến khi nó dừng hẳn (lấy $g = 9,81\text{ m/s}^2$).

*Trả lời :* $T = 8\text{ giây}$ ; $s = 121\text{ m}$.

---

**2.11.** Một tàu thuỷ có khối lượng $200$ tấn, tốc độ chuyển động trung bình $10\text{ m/s}$ theo đường thẳng ngang trên mặt nước yên tĩnh. Pittông của máy hơi nước chuyển động theo đường thẳng song song với trục dọc của tàu, có khối lượng bằng $100\text{ kg}$, có độ dài hành trình bằng $1\text{m}$ và thực hiện $240$ hành trình trong một phút. Xem chuyển động của pittông là dao động điều hoà. Xác định biểu thức vận tốc của con tàu nếu sức đẩy của chân vịt luôn luôn cân bằng với lực cản của nước.

*Trả lời :* $v = (10 - 0,00314\cos 4\pi t)\text{ m/s}$.

---

**2.12.** Một toa tàu dao động điều hoà thẳng đứng trên các lò xo với biên độ $2,5\text{ cm}$ và với chu kỳ $T = 0,5\text{ giây}$. Khối lượng của hòm xe và tải trọng là $10$ tấn, của các bánh xe là $1$ tấn. Xác định áp lực tổng hợp của các bánh xe lên các đường ray.

*Trả lời :* Áp lực thay đổi từ $68,67\text{ kN}$ đến $15\text{ kN}$.

---

**2.13.** Hai vật nặng $A$ và $B$ có khối lượng là $m_1$ và $m_2$ được nối với nhau bằng một sợi dây mềm, nhẹ và không giãn và được đặt trên các mặt $KL$ và $KE$ của lăng trụ $DEKL$. Lăng trụ có khối lượng $m_3$ được đặt trên nền ngang nhẵn và cứng. Tìm di chuyển của lăng trụ khi vật nặng $A$ trượt xuống theo mặt nghiêng $KL$ một đoạn dài $s$ (H. 2–34).

Ban đầu hệ đứng yên.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_34.svg" alt="Hình 2-34" class="figure-img" />
  <p class="figure-caption">Hình 2-34</p>
</div>

*Trả lời :*

$$\Delta = \frac{(m_1\cos 60^\circ + m_2)}{m_1 + m_2 + m_3}s$$

---

**2.14.** Cho cơ hệ gồm vật nặng $A$ có trọng lượng $P_1$ đặt trên mặt nghiêng của một lăng trụ có trọng lượng $P_2$. Góc nghiêng của mặt lăng trụ với mặt ngang là $\alpha$. Lăng trụ được đặt trên một mặt ngang nhẵn như trên hình vẽ. Ban đầu vật nặng nằm yên tương đối trên mặt lăng trụ, còn chính lăng trụ thì trượt ngang sang phải với vận tốc $v_0$. Sau đó cho vật $A$ trượt xuống theo mặt nghiêng của lăng trụ với vận tốc tương đối $u = at$. Tìm vận tốc của lăng trụ (H. 2–35).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_35.svg" alt="Hình 2-35" class="figure-img" />
  <p class="figure-caption">Hình 2-35</p>
</div>

*Trả lời :*

$$v = v_0 - \frac{P_1}{P_1 + P_2}u\cos\alpha$$

---

**2.15.** Một tấm đồng chất $BAC$ có hình dạng là một tam giác vuông cân, cạnh huyền $AB$ dài $12\text{ cm}$ được đặt thẳng đứng tựa đỉnh $A$ trên mặt phẳng ngang nhẵn không ma sát. Người ta thả cho tấm phẳng đổ xuống dưới tác dụng của trọng lực. Hãy xác định quỹ đạo của điểm $M$ nằm chính giữa cạnh bên $BC$.

*Chú ý :* Trong suốt thời gian chuyển động đỉnh $A$ luôn luôn nằm trên mặt ngang, (H. 2–36).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_36.svg" alt="Hình 2-36" class="figure-img" />
  <p class="figure-caption">Hình 2-36</p>
</div>

*Trả lời :* Cung của elip : $9(x - 2)^2 + y^2 = 90$.

---

**2.16.** Xác định áp lực lên nền đất của một máy bơm nước lúc chạy không. Trọng lượng của phần cố định gồm vỏ $D$ và móng $E$ bằng $P_1$, tay quay $OA$ dài là $a$ và có trọng lượng bằng $P_2$. Trọng lượng của máng trượt $B$ cùng với pittông $C$ là $P_3$. Tay quay $OA$ quay đều với vận tốc góc $\omega$. Xem như các vật khảo sát đều là những vật đồng chất và có cấu tạo đối xứng. (Xem hình 2–37)

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_37.svg" alt="Hình 2-37" class="figure-img" />
  <p class="figure-caption">Hình 2-37</p>
</div>

*Trả lời :*

$$N = P_1 + P_2 + P_3 + \frac{a\omega^3}{2g}(P_2 + 2P_3)\cos\omega t$$

---

**2.17.** Một động cơ hơi nước đặt nằm ngang trên mặt móng nhẵn trơn. Tay quay $OA$ có chiều dài là $r$ và quay đều với tốc độ góc là $\omega$. Thanh truyền dài bằng tay quay : $OA = AB$. Coi khối lượng của các bộ phận chuyển động được thu gọn về thành hai khối lượng $m_1$ và $m_2$ tập trung ở đầu tay quay và ở trọng tâm của pittông. Khối lượng của vỏ động cơ là $m_3$. Xác định chuyển động ngang của vỏ động cơ. Cho biết ban đầu hệ đứng yên và pittông ở vị trí xa nhất về bên trái.

Nếu động cơ được bắt vít chặt xuống nền, tìm áp lực của động cơ lên nền và cắt ngang bulông. Bỏ qua lực căng ban đầu của bulông (H. 2–38).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_38.svg" alt="Hình 2-38" class="figure-img" />
  <p class="figure-caption">Hình 2-38</p>
</div>

*Trả lời :*

$$\begin{aligned}
x &= \frac{(m_1 + 2m_2)r}{m_1 + m_2 + m_3}(\cos\omega t - 1) \, ; \\
N &= (m_1 + m_2 + m_3)g - m_1 r\omega^2\sin\omega t \, ; \\
T &= (m_1 + 2m_2)r\omega^2\cos\omega t.
\end{aligned}$$

---

**2.18.** Một động cơ nổ đặt thẳng đứng trên móng nằm ngang. Khối lượng xi lanh khung và các ổ đỡ là $10$ tấn, khối lượng của các pittông là $981\text{ kg}$ và trọng tâm của nó trùng với điểm $B$. Hành trình của pittông là $60\text{ cm}$, số vòng quay khi chuyển động ổn định là $300\text{ vòng/phút}$. Tỷ số $\frac{r}{l} = \frac{1}{6}$. Bỏ qua khối lượng tay quay và thanh truyền. Coi $\lambda = \frac{r}{l}$ là bé. Nếu động cơ được vít chặt với móng máy bằng bulông, tìm lực liên kết với nền, suy ra lực kéo trong bulông (H. 2–39).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_39.svg" alt="Hình 2-39" class="figure-img" />
  <p class="figure-caption">Hình 2-39</p>
</div>

*Trả lời :* $\Delta T = 230\text{ KN}$.

---

### Định lý biến thiên mômen động lượng

**2.19.** Một đĩa tròn đồng chất có khối lượng $m_1$ và bán kính $r$, quay quanh trục cố định $AB$ với vận tốc góc $\omega_0$. Vào một thời điểm nào đó một chất điểm $M$ có khối lượng $m_2$ bắt đầu chuyển động từ tâm đĩa ra ngoài vành theo một đường bán kính. Xác định vận tốc góc $\omega$ của đĩa, tại thời điểm chất điểm $M$ ở cách tâm đĩa một khoảng cách bằng $0,5r$. Bỏ qua lực ma sát ở ổ trục quay.

*Trả lời :*

$$\omega = \frac{2m_1 r^2 \omega_0}{2m_1 r^2 + m_2 r^2}$$

---

**2.20.** Một đĩa tròn đồng chất bán kính $r$, khối lượng $m_1$ nằm ngang và quay được quanh một trục thẳng đứng đi qua tâm đĩa. Một chất điểm $M$ trên vành đĩa khối lượng $m_2$ chuyển động theo vành. Xác định vận tốc góc tại thời điểm chất điểm đạt được vận tốc $u$ so với đĩa. Bỏ qua ma sát và biết ban đầu hệ đứng yên.

*Trả lời :*

$$\overline{\omega} = \frac{2m_2 u}{r(m_1 + 2m_2)} \, ;$$

---

**2.21.** Một ống nằm ngang $CD$ có thể quay tự do quanh trục thẳng đứng $A$. Bên trong ống có quả cầu (xem như chất điểm), có khối lượng $m$ và nằm cách trục quay một khoảng $MC = a$. Tại một thời điểm nào đó ống được truyền vận tốc góc $\omega_0$. Xác định vận tốc góc $\omega$ của ống tại thời điểm khi quả cầu vừa rời khỏi ống $CD$. Cho biết mômen quán tính của ống đối với trục quay bằng $J$, chiều dài $CD$ của ống bằng $L$. Bỏ qua ma sát (H. 2–40).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_40.svg" alt="Hình 2-40" class="figure-img" />
  <p class="figure-caption">Hình 2-40</p>
</div>

*Trả lời :*

$$\omega = \frac{J + ma^2}{J + mL^2}\omega_0$$

---

**2.22.** Thanh đồng chất $AB$ dài $2l = 180\text{ cm}$, có khối lượng $m_1 = 2\text{ kg}$, đặt trên một mũi nhọn ở vị trí cân bằng ổn định nằm ngang. Hai quả cầu $M_1, M_2$ có cùng khối lượng $m_2 = 5\text{ kg}$, có thể di chuyển dọc thanh và chúng được gắn vào hai lò xo giống hệt nhau. Thanh quay quanh trục thẳng đứng với $n_1 = 64\text{ vòng/phút}$ lúc đó các quả cầu nằm đối xứng đối với trục quay và tâm của chúng được giữ cách nhau khoảng $2l_1 = 72\text{ cm}$ nhờ một sợi dây. Sau đó dây bị đứt và các quả cầu sau khi dao động một số lần nào đó, dưới tác dụng của lò xo và ma sát chúng dừng lại ở vị trí cân bằng mới cùng đối xứng qua trục quay và cách nhau một khoảng $2l_2 = 108\text{ cm}$. Coi các quả cầu là những chất điểm và bỏ qua khối lượng của các lò xo. Xác định vận tốc góc của thanh ở trạng thái ổn định mới đó, (H. 2–41).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_41.svg" alt="Hình 2-41" class="figure-img" />
  <p class="figure-caption">Hình 2-41</p>
</div>

*Trả lời :*

$$n_2 = \frac{6m_2 l_1^2 + m_1 l^2}{6m_2 l_2^2 + m_1 l^2}.n_1 = 34\text{ vòng/phút}$$

---

**2.23.** Một mô tơ điện chịu tác dụng của một ngẫu lực tổng hợp (phát động và cản) có mômen quay là $M = a - b\omega$, trong đó $a, b$ là các hằng số dương còn $\omega$ là vận tốc góc mô tơ. Mômen quán tính của rôto đối với trục quay hình học là $J$. Tìm biểu thức vận tốc góc $\omega$ trong quá trình mở máy từ trạng thái đứng yên.

*Trả lời :*

$$\omega = \frac{a}{b}\left(1 - e^{-\frac{b}{J}t}\right).$$

---

**2.24.** Người ta dùng hãm tay để hãm một bánh xe đang quay với vận tốc góc $\omega_0$ như hình vẽ. Tìm lực $P$ cần thiết phải tác dụng ở đầu tay hãm để bánh xe dừng hẳn sau thời gian $T$ cho trước. Tìm xem trong thời gian đó bánh xe còn quay được thêm bao nhiêu vòng nữa. (H. 2–42). Biết momen quán tính của bánh xe đối với trục quay bằng $J$ và hệ số ma sát trượt động giữa bánh xe và má hãm bằng $f$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_42.svg" alt="Hình 2-42" class="figure-img" />
  <p class="figure-caption">Hình 2-42</p>
</div>

*Trả lời :*

$$P = \frac{J\omega_0 b}{afRT} \, ; \quad N = \frac{\omega_0 T}{4\pi}.$$

---

**2.25.** Một vật rắn quay quanh một trục cố định khởi động từ trạng thái đứng yên, chịu tác dụng của mômen quay không đổi $M$ và của mômen cản $M_1 = \alpha\omega^2$, trong đó $\alpha$ là hằng số và $\omega$ là vận tốc góc của vật. Mômen quán tính của vật đối với trục quay là $J$. Tìm luật biến thiên của vận tốc góc theo thời gian và tìm giá trị vận tốc góc giới hạn của vật.

*Trả lời :*

$$\omega = \sqrt{\frac{M}{\alpha}} \times \frac{e^{\beta t} - 1}{e^{\beta t} + 1}, \quad \text{trong đó}$$

$$\beta = \frac{2}{J}\sqrt{\alpha M} \, ; \quad \omega_{gh} = \lim_{t \to \infty}\omega = \sqrt{\frac{M}{\alpha}}$$

---

**2.26.** Để xác định mômen quán tính của một vật đã cho đối với một trục $AB$ qua khối tâm $C$ của vật, người ta treo vật bằng hai thanh $AD$ và $BE$ gắn cứng vào vật, sao cho $AB$ song song với $DE$ và cùng nằm ngang. Hai thanh $AD$ và $BE$ quay được tự do quanh trục $DE$ cố định (hình 2–43). Sau đó cho vật dao động bé và đo nửa chu kỳ $T$ của dao động. Cho biết trọng lượng của vật là $p$ và khoảng cách giữa $AB$ và $DE$ bằng $h$. Bỏ qua trọng lượng của hai thanh treo và bỏ qua ma sát ở các khớp quay. Tính mômen quán tính của vật đối với trục $AB$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_43.svg" alt="Hình 2-43" class="figure-img" />
  <p class="figure-caption">Hình 2-43</p>
</div>

*Trả lời :*

$$J = hp\left(\frac{T^2}{\pi^2} - \frac{h}{g}\right)$$

---

**2.27.** a) Bộ phận chính của dao động kế để ghi chấn động ngang của móng máy là một con lắc như trên hình 2–44. Ở vị trí $OA$ thẳng đứng lò xo xoắn không làm việc. Mômen tĩnh của con lắc đối với $O$ khi $OA$ nằm ngang bằng $43,6\text{ Ncm}$, mômen quán tính của con lắc đối với trục quay là $J = 0,003\text{ kgm}^2$, hệ số cứng của lò xo xoắn là $c = 0,98\text{ Ncm/rad}$. Bỏ qua các lực cản. Xác định chu kỳ của dao động nhỏ tự do của con lắc quanh vị trí cân bằng thẳng đứng.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_44.svg" alt="Hình 2-44" class="figure-img" />
  <p class="figure-caption">Hình 2-44</p>
</div>

*Trả lời :* $T = 0,5\text{ s}$.

b) Gắn dao động kế vào một móng máy, giả thiết rằng móng máy dao động điều hoà theo phương ngang theo luật $x = a\sin 60t\text{ cm}$, cho biết biên độ dao động cưỡng bức của con lắc của dao động kế là $6^\circ$. Xác định biên độ $a$ của dao động móng máy.

*Trả lời :* $a = 9,1\text{ mm}$.

---

### Định lý biến thiên động năng

**2.28.** Cho cơ cấu culít như hình vẽ. Cần lắc $OC$ lắc quanh trục $O$ kéo thanh $AB$ chuyển động lên xuống theo máng trượt thẳng đứng $K$.

Cần $OC$ được coi là thanh đồng chất có chiều dài bằng $R$ và khối lượng $m_1$. Con chạy $A$ có khối lượng $m_2$. Thanh $AB$ có khối lượng $m_3$. Khoảng cách giữa trục $O$ và máng trượt $K$ là $l$. Xem con chạy $A$ như một chất điểm, tìm biểu thức động năng của cơ cấu hàm theo vận tốc góc và góc quay của tay quay, (H. 2–45).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_45.svg" alt="Hình 2-45" class="figure-img" />
  <p class="figure-caption">Hình 2-45</p>
</div>

*Trả lời :*

$$T = \frac{\omega^2}{6\cos^4\varphi}\left[m_1 R^2\cos^4\varphi + 3l^2(m_2 + m_3)\right]$$

---

**2.29.** Tay quay của một cơ cấu tay quay thanh truyền được coi là một thanh đồng chất có chiều dài bằng $r$, có khối lượng bằng $m_1$ đang quay với vận tốc $\omega$. Con chạy có khối lượng bằng $m_2$, thanh truyền dài là $l$, coi rằng tỷ số $\frac{r}{l}$ là bé.

a) Bỏ qua khối lượng thanh truyền, tìm biểu thức động năng của cơ cấu theo vận tốc góc và góc quay của tay quay.

b) Kể đến khối lượng của thanh truyền là $m_3$. Tính động năng của cơ hệ ở vị trí tay quay $OA$ vuông góc với đường trượt của con chạy.

*Trả lời :*

a)

$$T = \frac{1}{2}\left\{\frac{1}{3}m_1 + m_2\left[\sin\varphi + \frac{r}{2l}\frac{\sin 2\varphi}{\sqrt{1 - \left(\frac{r}{l}\right)^2\sin^2\varphi}}\right]^2\right\}r^2\omega^2$$

b)

$$T = \frac{1}{2}\left(\frac{m_1}{3} + m_2 + m_3\right)r^2\omega^2$$

---

**2.30.** Cho cơ cấu hành tinh như hình vẽ.

Các bánh 1, 2, 3 là các đĩa tròn đồng chất, cùng bán kính $r$, cùng khối lượng $m$. Tay quay $OA$ được xem là một thanh đồng chất có khối lượng $m_1$.

Tính động năng của cơ cấu theo vận tốc góc $\omega$ của tay quay (H. 2–46).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_46.svg" alt="Hình 2-46" class="figure-img" />
  <p class="figure-caption">Hình 2-46</p>
</div>

*Trả lời :*

$$T = (33m + 8m_1)\frac{r^2\omega^2}{3}.$$

---

**2.31.** Bộ phận chính của máy ghi chấn động thẳng đứng của nền máy là một thanh gẫy khúc $AOB$ có trọng tâm đặt tại $O$ và có mômen quán tính đối với trục $O$ và vuông góc với hình vẽ bằng $J$, mang vật nặng có trọng lượng bằng $Q$ ở đầu $A$. Thanh được giữ ở vị trí cân bằng ổn định (lúc đó $AO$ nằm ngang và $OB$ thẳng đứng) nhờ lò xo xoắn có hệ số cứng bằng $c_1$ (khi lò xo xoắn một góc $\theta$ kể từ trạng thái không biến dạng của nó thì sẽ gây ngẫu lực đàn hồi có mômen $M = c_1\theta$) và một lò xo thẳng nằm ngang có độ cứng $c_2$ nối với thanh gãy $OAB$ như trên hình vẽ. Giả thiết rằng ở vị trí cân bằng nói trên lò xo thẳng không làm việc. Các kích thước cho như trên hình vẽ và xem vật nặng $Q$ như một chất điểm.

Tính thế năng và động năng của cơ hệ khi thanh $OA$ lệch với đường nằm ngang về phía trên một góc $\varphi$ khi đặt máy trên nền ngang cố định (H. 2–47).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_47.svg" alt="Hình 2-47" class="figure-img" />
  <p class="figure-caption">Hình 2-47</p>
</div>

*Trả lời :*

$$\begin{aligned}
\Pi &= \frac{1}{2}(c_1 + c_2 b^2)\varphi^2 \, ; \\
T &= \frac{1}{2}(J + ma^2)\varphi^2.
\end{aligned}$$

---

**2.32.** Một động cơ điện kéo một hệ thống truyền động dùng xích như trên hình vẽ. Hệ thống đó làm việc như sau : lúc mở máy xích bắt đầu chuyển động với gia tốc $a$, và khi đã đạt được $v_{\max}$ thì giữ nguyên tốc độ đó. Đường kính của trục chính gắn với động cơ bằng $2r_1$, đường kính của hai ròng rọc khác là $2r_2$ và $2r_3$. Đối với trục quay của chúng mômen quán tính của trục quay chính là $J_1$, mômen quán tính của các ròng rọc là $J_2$ và $J_3$. Trọng lượng của hòm được kéo lên là $Q_1$, của hòm được thả xuống là $Q_2$. Mỗi đơn vị dài của dây xích nặng là $q$ và xích có độ dài $l$. Tính công suất của động cơ trong quá trình mở máy và trong quá trình bình ổn $v = v_{\max}$, (H. 2–48)

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_48.svg" alt="Hình 2-48" class="figure-img" />
  <p class="figure-caption">Hình 2-48</p>
</div>

*Trả lời :*

$$\begin{aligned}
W &= \Bigg[\left(\frac{Q_1 + Q_2 + ql}{g} + \frac{J_1}{r_1^2} + \frac{J_2}{r_2^2} + \frac{J_3}{r_3^2}\right)a \\
&\quad + (Q_1 - Q_2)\Bigg]v \\
W_{\text{bình ổn}} &= (Q_1 - Q_2)v_{\max}.
\end{aligned}$$

---

**2.33.** Một con lăn đồng chất hình trụ tròn xoay đường kính bằng $60\text{cm}$ và có khối lượng bằng $392\text{ kg}$, chuyển động lăn không trượt trên mặt phẳng ngang do một người đẩy. Lực đẩy $P$ có phương chiều không đổi và hướng theo thanh đẩy $AO$. Thanh $AO$ dài là $1,5\text{m}$, độ cao của $A$ so với nền ngang là $1,2\text{ m}$. Bỏ qua ma sát ở ổ trục và ma sát lăn của mặt nền. Xác định cường độ $P$ sao cho khi người đẩy đi được $2\text{m}$ thì trục con lăn đạt vận tốc $0,8\text{ m/s}$.

Nếu kể đến ma sát cản lăn của nền với hệ số $k = 0,5\text{ cm}$ thì lực $P$ phải có cường độ bằng bao nhiêu, lấy $g = 9,8\text{ m/s}^2$.

Sau khi đạt vận tốc cần thiết như trên, muốn giữ chuyển động đều của trục bánh xe, cần giảm cường độ của lực $P$ đi bao nhiêu.

*Trả lời :* $P_1 = 117,6\text{ N}$ ; $P_2 = 199,9\text{ N}$. Cần giảm $P$ một lượng là $118,9\text{ N}$.

---

**2.34.** Một ngẫu lực có mômen quay $M$ không đổi tác dụng lên tang của một trục tời có bán kính bằng $R$ và có trọng lượng là $P_1$ ; quấn vào tang tời một sợi dây mềm nhẹ và không giãn rồi buộc vào đầu mút tự do của dây vật nặng $A$ có trọng lượng $P_2$ để kéo nó lên theo mặt phẳng nghiêng có góc nghiêng là $\alpha$ so với mặt phẳng ngang. Hệ số ma sát trượt động giữa mặt phẳng và mặt phẳng nghiêng là $f$. Tang tời được xem là một trục tròn đồng chất. Tìm biểu thức vận tốc góc của tời hàm theo góc quay của nó, (H. 2–49).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_49.svg" alt="Hình 2-49" class="figure-img" />
  <p class="figure-caption">Hình 2-49</p>
</div>

*Trả lời :*

$$\omega = \frac{2}{R}\sqrt{g\frac{M - P_2 R(\sin\alpha + f\cos\alpha)}{P_1 + 2P_2}\varphi}.$$

---

**2.35.** Một tời kéo gồm hai trống $K_1$ và $K_2$ có bán kính $R_1$ và $R_2$ ghép cứng với nhau và với trục quay nằm ngang $O_1O_2$, có mômen quán tính đối với trục đó bằng $J_1$ và $J_2$. Tác dụng vào tay quay $AB$ của trục tời một ngẫu lực có mômen $M$ không đổi để kéo lên vật nặng $D$ có trọng lượng $P$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_50.svg" alt="Hình 2-50" class="figure-img" />
  <p class="figure-caption">Hình 2-50</p>
</div>

Khi trống $K_2$ quấn dây thì trống $K_1$ thả dây. Bỏ qua ma sát và trọng lượng dây. Biết ban đầu hệ đứng yên. Tìm vận tốc góc của tay quay $AB$ khi vật $D$ đã được kéo lên một đoạn bằng $h$ (H. 2–50).

*Trả lời :*

$$\omega = 2\sqrt{2gh\frac{2M - P(R_2 - R_1)}{(R_2 - R_1)[P(R_2 - R_1)^2 + 4g(J_1 + J_2)]}}$$

---

**2.36.** Một vật nặng $P$ được treo vào đầu một sợi dây mềm không giãn chiều dài $l$ và mỗi đơn vị dài của nó có trọng lượng $p$. Dây này được quấn vào tang của một trục tời có bán kính bằng $R$ và có mômen quán tính đối với trục quay bằng $J$. Vật nặng rơi xuống làm quay trục tời. Lúc ban đầu đoạn dây treo buông dài một đoạn $x_0$ và cơ hệ đứng yên. Bỏ qua ma sát của các ổ trục quay và chiều dài của dây cũng như sự thay đổi thế năng của phần dây quấn.

Xác định vận tốc rơi của vật nặng hàm theo độ dài $x$ của đoạn dây treo.

*Trả lời :*

$$v = R\sqrt{g\frac{[2P + p(x + x_0)(x - x_0)]}{gJ + (P + pl)R^2}}$$

---

**2.37.** Giải bài tập 2–34 nếu có tính đến khối lượng của dây cáp dùng để kéo vật nặng. Chiều dài của dây bằng $l$, trọng lượng của một đơn vị dài của dây bằng $p$. Ở thời điểm đầu đoạn dây buông khỏi tang tời là $a$. Bỏ qua sự thay đổi về thế năng của phần dây quấn vào tang.

*Trả lời :*

$$\omega = \frac{1}{R}\sqrt{2g\frac{2M - 2P_2 r(\sin\alpha + f\cos\alpha) - pr(2a - r\varphi)\sin\alpha}{P_1 + 2P_2 + 2pl}\varphi}$$

---

**2.38.** Một dây đồng chất dài là $L$ có một phần nằm trên mặt bàn ngang nhẵn một phần buông tự do.

Xác định khoảng thời gian $T$ để dây rời khỏi mặt bàn, biết rằng tại thời điểm đầu chiều dài của phần dây thả buông dài là $l$ và vận tốc đầu bằng không, (H. 2–51).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_51.svg" alt="Hình 2-51" class="figure-img" />
  <p class="figure-caption">Hình 2-51</p>
</div>

*Trả lời :*

$$T = \sqrt{\frac{L}{g}}\ln\left(\frac{L + \sqrt{L^2 - l^2}}{l}\right)$$

---

**2.39.** Khảo sát chuyển động của cơ cấu biểu diễn trên hình vẽ. Cơ cấu chuyển động trong mặt phẳng nằm ngang. Tay quay $OA$ được xem là một thanh đồng chất dài $l$ nặng $P$. Hai ròng rọc động và cố định có cùng bán kính $r$, ròng rọc động có trọng lượng $Q$ và được xem là những đĩa đồng chất. Tác dụng lên tay quay một ngẫu lực có mômen không đổi $M$. Tìm gia tốc góc của tay quay. Bỏ qua sự trượt giữa đai truyền và hai ròng rọc, (H. 2–52).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_52.svg" alt="Hình 2-52" class="figure-img" />
  <p class="figure-caption">Hình 2-52</p>
</div>

*Trả lời :*

$$\varepsilon = \frac{3gM}{(P + 3Q)l^2}$$

---

**2.40.** Khảo sát cơ cấu hành tinh như trên hình vẽ, chuyển động trong mặt phẳng ngang. Bánh răng 3 cố định, các bánh răng động 1 và 2 được coi là những đĩa tròn đồng chất cùng bề dày và cùng vật liệu. Cho biết bánh răng 1 quay nhanh gấp 10 lần tay quay. Bỏ qua khối lượng của tay quay. Mômen quán tính của bánh răng 1 đối với trục $O_1$ và $J$.

Bánh răng 1 chịu tác dụng của ngẫu lực cản có mômen là $M_1$ không đổi và tay quay chịu tác dụng của ngẫu lực phát động có mômen $M$ không đổi. Tìm gia tốc góc của tay quay, (H. 2–53).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_53.svg" alt="Hình 2-53" class="figure-img" />
  <p class="figure-caption">Hình 2-53</p>
</div>

*Trả lời :*

$$\varepsilon = \frac{M - 10M_1}{1300J}$$

---

**2.41.** Khảo sát chuyển động của hộp tốc độ biểu diễn trên hình vẽ. Trục dẫn và trục bị dẫn liên hệ với nhau bằng các cặp bánh răng hành tinh kép. Trục dẫn I mang tay quay $AB$, trục bị dẫn IV mang bánh răng 4 ; các ổ trục đặt trên hai đầu tay quay mang trục các cặp bánh răng hành tinh 2–3. Cho biết các bán kính $r_1, r_2, r_3, r_4$ của các bánh răng, mômen quán tính của trục dẫn với các chi tiết gắn trên nó đối với trục quay hình học của nó bằng $J_1$. Cặp bánh răng hành tinh 2–3 có khối lượng $m_2$ và có trọng tâm nằm trên trục đối xứng hình học của nó và có mômen quán tính đối với trục đó là $J_2$. Mômen quán tính đối với trục bị dẫn và các chi tiết lắp với nó đối với trục quay hình học của nó là $J_4$. Trục dẫn chịu tác dụng của ngẫu lực phát động có mômen $M_1$, trục bị dẫn chịu tác dụng ngẫu lực cản có mômen $M_4$, giả thiết $M_1$ và $M_4$ đều không đổi ; bỏ qua ma sát. Tìm gia tốc góc của trục I, (H. 2–54).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_54.svg" alt="Hình 2-54" class="figure-img" />
  <p class="figure-caption">Hình 2-54</p>
</div>

*Trả lời :*

$$\varepsilon_1 = \frac{M_1 - M_4\left(1 - \frac{r_1 r_3}{r_2 r_4}\right)}{J_1 + 2m_2(r_1 + r_2)^2 + 2J_2\left(1 + \frac{r_1}{r_2}\right)^2 + J_4\left(1 - \frac{r_1 r_3}{r_2 r_4}\right)^2}$$

---

**2.42.** Giải bài toán trên đây với giả thiết rằng $M_1 = \text{const}$, $M_4 = a\omega_4^2$ và giữ nguyên các giả thiết khác. Đặt

$$J = J_1 + 2m_2(r_1 + r_2)^2 + 2J_2\left(1 + \frac{r_1}{r_2}\right)^2 + J_1\left(1 - \frac{r_1 r_3}{r_2 r_4}\right)^2$$

Tìm giá trị của vận tốc góc $\omega_1^0$ trong chế độ bình ổn và tìm biểu thức $\omega_1 = \omega_1(t)$. Ban đầu cơ hệ đứng yên.

*Trả lời :*

$$\omega_1^0 = \sqrt{\frac{M_1}{ak^3}} \, ; \quad \omega_1(t) = \omega_1^0\frac{1 - e^{\frac{2}{J}\sqrt{k^3 a M_1 t}}}{1 - e^{\frac{2}{J}\sqrt{ak^3 M_1 t}}}$$

trong đó $k = \dfrac{\omega_4}{\omega_1} = 1 - \dfrac{r_1 r_3}{r_2 r_4}$

---

**2.43.** Một hình nón tròn xoay đồng chất chuyển động lăn không trượt trên một mặt phẳng không nhẵn và nghiêng với mặt phẳng ngang một góc $\alpha$. Chiều dài đoạn đường sinh bằng $a$ và góc mở bằng $2\beta$. Lập phương trình vi phân chuyển động của hình nón.

*Chỉ dẫn :* Lấy thông số định vị của hình nón trên mặt phẳng nghiêng là góc $\theta$ giữa đường sinh tiếp xúc với đường dốc chính của mặt phẳng nghiêng.

*Trả lời :*

$$\ddot{\theta} + \frac{g\sin\alpha}{a\left(\cos^2\beta + \dfrac{1}{5}\right)}\sin\theta = 0.$$

---

**2.44.** Các thớt $K_1$ và $K_2$ của máy nghiền được động cơ kéo chuyển động nhờ một hệ thống truyền động như hình vẽ. Khối lượng của mỗi thớt nghiền là $m = 3$ tấn, được xem là những đĩa tròn đồng chất có bán kính trung bình là $r = 0,5\text{ m}$ và có bán kính tay quay là $R = 1\text{ m}$. Xem như trục quay tức thời của thớt qua tiếp điểm $C$ giữa đường tròn trung bình của đĩa với mặt nón cố định. Tỷ số truyền động giữa trục động cơ và trục thẳng đứng của máy nghiền bằng $2/3$. Bỏ qua khối lượng của các chi tiết khác và tác dụng của ma sát.

Tính mômen không đổi của ngẫu lực $M$ cần tác dụng ở trục động cơ phát động máy nghiền sao cho sau $10$ giây nó đạt được tốc độ góc $120\text{ vòng/phút}$ (H. 2–55).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_55.svg" alt="Hình 2-55" class="figure-img" />
  <p class="figure-caption">Hình 2-55</p>
</div>

*Trả lời :* $M = 3136\text{ Nm}$.

---

**2.45.** Cho cơ cấu tay quay thanh truyền gồm có pittông $A$ có khối lượng $m_1$, thanh truyền dài là $l$ và có khối lượng là $m_2$, tay quay $OB$ có độ dài bằng $r$. Mômen quán tính của thanh truyền đối với trục quay $A$ bằng $J_2$, của tay quay $OB$ cùng với vô lăng đối với trục quay $O$ bằng $J_3$. Pittông có diện tích chịu ép bằng $S$ và chịu áp suất coi như đều và bằng $p$. Khoảng cách giữa điểm $A$ và trọng tâm của thanh truyền là $a$. Mômen của ngẫu lực cản tác dụng vào tay quay có độ lớn bằng $M$. Cho rằng trong quá trình chuyển động góc $\psi$ giữa $AB$ và $OA$ khá bé để coi được $\sin\psi \approx \psi$. $\cos\psi \approx 1$. Lập phương trình vi phân chuyển động của cơ hệ.

*Trả lời :* Lấy góc $\varphi$ giữa $OB$ và $OA$ làm toạ độ định vị cơ hệ.

$$\begin{aligned}
&\left[(m_1 + m_2)r^2\sin^2\varphi + (J_2 + ma^2)\left(\frac{r}{l}\right)^2\cos^2\varphi + J_3\right]\ddot{\varphi} + \\
&+ \left[(m_1 + m_2)r^2 - (J_2 + ma^2)\left(\frac{r}{l}\right)^2\right]\cos\varphi\sin\varphi.\dot{\varphi}^2 = \\
&= -M + pSr\sin\varphi.
\end{aligned}$$

---

**2.46.** Cho cơ hệ trên hình vẽ. Vật nặng $A$ có khối lượng $m_1$ rơi xuống thẳng đứng, kéo vật nặng $B$ khối lượng $m_2$ trượt lên theo cột thẳng đứng $CD$.

Bỏ qua ma sát. Lập phương trình vi phân chuyển động cơ hệ, (H. 2–56).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_56.svg" alt="Hình 2-56" class="figure-img" />
  <p class="figure-caption">Hình 2-56</p>
</div>

*Trả lời :*

$$\begin{aligned}
&(a^2 + h^2)[m_1 h^2 + m_2(a^2 + h^2)]\ddot{h} + \\
&+ m_1 a^2 h\dot{h}^2 + Q(a^2 + h^2)^2 - \\
&- Ph(a^2 + h^2)^{3/2} = 0.
\end{aligned}$$

---

**2.47.** Cho cơ cấu hành tinh chuyển động trong mặt phẳng nằm ngang như hình vẽ. Tay quay $OA$ quay quanh trục qua $O$ dưới tác dụng của ngẫu lực có mômen $M_0$ không đổi làm cho bánh 2 lăn không trượt đối với bánh 3 cố định và truyền chuyển động cho bánh 1 quay quanh trục qua $O$ chịu tác dụng ngẫu lực cản $M_1 = \alpha\omega_1$, trong đó $\alpha$ là hằng số, $\omega_1$ là vận tốc góc bánh 1. Cho biết bánh 1 có bán kính $r_1$ và mômen quán tính đối với trục qua $O$ bằng $J_1$, bánh 2 có bán kính $r_2$, khối lượng $m_2$ và mômen quán tính đối với khối tâm $A$ bằng $J_2$, tay quay có mômen quán tính đối với trục qua $O$ là $J_0$. Tìm vận tốc góc của bánh 1 trong chế độ bình ổn (vận tốc góc giới hạn) và trong quá trình mở máy $\omega_1 = \omega_1(t)$ từ trạng thái đầu yên nghỉ (H. 2–57).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_57.svg" alt="Hình 2-57" class="figure-img" />
  <p class="figure-caption">Hình 2-57</p>
</div>

*Trả lời :* $\omega_{gh} = \dfrac{A}{B}$ ; $\omega_1 = \omega_{gh}(1 - e^{-Bt})$, trong đó :

$$A = \frac{M_0 r_1}{2J(r_1 + r_2)} \, ; \quad B = \frac{\alpha}{J} \, ;$$

$$J = \frac{1}{4}\left[4J_1 + J_2\left(\frac{r_1}{r_2}\right)^2 + J_0\left(\frac{r_1}{r_1 + r_2}\right)^2 + m_2 r_2^2\right].$$

---

**2.48.** Một vật $A$ có trọng lượng $P$ được kéo lên từ trạng thái đứng yên nhờ tời $B$ có bán kính $R$, trọng lượng $Q$ và chịu tác dụng ngẫu lực có mômen $M = M_0 - \alpha\omega^2$ trong đó $M_0$ và $\alpha$ là các hằng số, $\omega$ là vận tốc góc của tời. Cho biết bán kính quán tính của tời đối với trục quay $O$ bằng $\rho$. Tìm vận tốc góc giới hạn của tời quay và vận tốc góc của quá trình chuyển tiếp của nó từ trạng thái yên nghỉ, (H. 2–58).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_58.svg" alt="Hình 2-58" class="figure-img" />
  <p class="figure-caption">Hình 2-58</p>
</div>

*Trả lời :*

$$\omega_{gh} = \sqrt{\frac{A}{B}} \, ; \quad \omega = \omega_{gh}\frac{e^{\sqrt{ABt}} - e^{-\sqrt{ABt}}}{e^{\sqrt{ABt}} + e^{-\sqrt{ABt}}},$$

trong đó :

$$A = g\frac{M_0 - PR}{PR^2 + Q\rho^2}, \quad B = g\frac{\alpha}{PR^2 + Q\rho^2}$$

---

**2.49.** Một máy bay có khối lượng $m = 3000\text{ kg}$ được đặt trên ba điểm trong đó phần đuôi chiếm $10\%$ khối lượng toàn máy bay. Khi chong chóng của máy bay quay $n = 1432\text{ vòng/phút}$ các lực kế đặt dưới các bánh trước của máy bay chỉ $N_1 = 10,78\text{ kN}$, $N_2 = 15,68\text{ kN}$. Xác định công suất của động cơ máy bay nếu cho biết hiệu suất của chong chóng $\eta = 0,8$ và khoảng cách giữa hai bánh trước $l = 2\text{m}$ (H. 2–59).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_59.svg" alt="Hình 2-59" class="figure-img" />
  <p class="figure-caption">Hình 2-59</p>
</div>

*Trả lời :* $W = 919,16\text{ kW}$.

---

**2.50.** Để đo công suất của mô tơ người ta sử dụng thiết bị gồm dây đai có các nhánh thẳng đứng $AC$ và $DB$ và phần ôm chặt vào nửa dưới của ròng rọc $E$ gắn chặt vào trục quay của môtơ và một đòn $BF$ với trục qua $O$, nhờ nó có thể thay đổi sức căng trong các thanh dây. Để giữ thăng bằng của đòn $BF$ ở vị trí nằm ngang người ta treo vật $P$ tại $F$. Xác định công suất của động cơ khi nó quay $n = 240\text{ vòng/phút}$ và cho biết khi đòn cân bằng thì $P = 29,4\text{ N}$, $l = 50\text{ cm}$ (H. 2–60).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_60.svg" alt="Hình 2-60" class="figure-img" />
  <p class="figure-caption">Hình 2-60</p>
</div>

*Trả lời :* $W = 369,3\text{ W}$.

