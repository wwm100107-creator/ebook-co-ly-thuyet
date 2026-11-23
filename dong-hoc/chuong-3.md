# Chương 3: Hợp chuyển động điểm

Trong chương 1 chúng ta đã khảo sát chuyển động của điểm đối với hệ quy chiếu cố định. Trong thực tế, nhiều khi chúng ta phải khảo sát chuyển động của điểm đối với hệ quy chiếu, mà hệ quy chiếu này lại chuyển động đối với hệ quy chiếu cố định. Trong chương này sẽ thiết lập hai định lí cơ bản của bài toán hợp chuyển động điểm : định lí hợp vận tốc và định lí hợp gia tốc.

---

## 3.1. Định nghĩa về các loại chuyển động

### 3.1.1. Mô hình bài toán

Điểm $M$ chuyển động đối với hệ quy chiếu động $Oxyz$. Thông thường hệ quy chiếu động $Oxyz$ này được gắn liền với một vật rắn $S$ nào đó (H. 3–1). Hệ quy chiếu động $Oxyz$ chuyển động đối với hệ quy chiếu cố định $O_1 x_1 y_1 z_1$.

Bài toán đặt ra là khảo sát chuyển động của điểm $M$ đối với hệ quy chiếu $Oxyz$ đang chuyển động đối với hệ quy chiếu $O_1 x_1 y_1 z_1$.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_3_1.svg" alt="Hình 3-1" style="max-height: 290px;" />

<div class="figure-caption">

Hình 3-1

</div>

</div>

### 3.1.2. Định nghĩa về chuyển động tuyệt đối, tương đối và chuyển động theo

#### 1. Chuyển động tuyệt đối

Chuyển động của điểm $M$ đối với hệ quy chiếu cố định $O_1 x_1 y_1 z_1$ được gọi là chuyển động tuyệt đối. Vận tốc, gia tốc của điểm $M$ trong chuyển động tuyệt đối (nghĩa là tính toán trong hệ quy chiếu cố định) được gọi là vận tốc tuyệt đối, gia tốc tuyệt đối. Kí hiệu : $\vec{v}_a, \vec{a}_a$.

Ta có :

$$\vec{v}_a = \frac{d\overrightarrow{O_1 M}}{dt} = \frac{d\vec{r}}{dt} \tag{3-1}$$

$$\vec{a}_a = \frac{d^2\overrightarrow{O_1 M}}{dt^2} = \frac{d^2\vec{r}}{dt^2} \tag{3-2}$$

#### 2. Chuyển động tương đối

Chuyển động của điểm $M$ đối với hệ quy chiếu động $Oxyz$ được gọi là chuyển động tương đối. Vận tốc, gia tốc điểm $M$ trong chuyển động tương đối (nghĩa là tính toán trong hệ quy chiếu động) được gọi là vận tốc tương đối, gia tốc tương đối. Kí hiệu : $\vec{v}_r, \vec{a}_r$.

Kí hiệu $\vec{i}, \vec{j}, \vec{k}$, là các vectơ đơn vị trên các trục $Ox, Oy, Oz$. Tọa độ của điểm $M$ trong hệ quy chiếu động là $x, y, z$. Khi đó ta có :

$$\overrightarrow{OM} = x\vec{i} + y\vec{j} + z\vec{k}$$

Theo định nghĩa trên biểu thức của $\vec{v}_r, \vec{a}_r$ có dạng :

$$\vec{v}_r = \frac{d\overrightarrow{OM}}{dt} = \left(\frac{d\overrightarrow{OM}}{dt}\right) \text{ xem } \vec{i}, \vec{j}, \vec{k} \text{ là các vectơ hằng số :}$$

$$= \frac{dx}{dt}\vec{i} + \frac{dy}{dt}\vec{j} + \frac{dz}{dt}\vec{k} \tag{3-3}$$

$$\vec{a}_r = \frac{d^2\overrightarrow{OM}}{dt^2} = \frac{d^2 x}{dt^2}\vec{i} + \frac{d^2 y}{dt^2}\vec{j} + \frac{d^2 z}{dt^2}\vec{k} \tag{3-4}$$

#### 3. Chuyển động theo

Chuyển động của hệ quy chiếu động $Oxyz$ đối với hệ quy chiếu cố định $O_1 x_1 y_1 z_1$ gọi là chuyển động theo.

Để có thể thiết lập biểu thức của vận tốc theo, gia tốc theo, ta đưa vào khái niệm trùng điểm. Gọi điểm $M^*$ của hệ quy chiếu động mà ở thời điểm khảo sát có cùng vị trí với điểm $M$ là trùng điểm của điểm $M$ tại thời điểm đó. Như thế ở mỗi thời điểm, điểm $M$ trùng với một điểm $M^*$ nào đó của hệ quy chiếu động.

Vận tốc, gia tốc tuyệt đối của trùng điểm $M^*$ tại thời điểm khảo sát (nghĩa là tính toán trong hệ quy chiếu cố định) được gọi là vận tốc theo, gia tốc theo của điểm $M$ tại thời điểm đó. Kí hiệu : $\vec{v}_e, \vec{a}_e$.

Gọi $x^*, y^*, z^*$ là tọa độ của trùng điểm $M^*$ trong hệ quy chiếu động $Oxyz$ ($x^*, y^*, z^*$ là các hằng số). Ta có :

$$\overrightarrow{O_1 M^*} = \overrightarrow{O_1 O} + \overrightarrow{OM^*} = \overrightarrow{O_1 O} + x^*\vec{i} + y^*\vec{j} + z^*\vec{k}$$

Theo định nghĩa :

$$\vec{v}_e = \vec{v}_{M^*} = \frac{d\overrightarrow{O_1 M^*}}{dt} = \frac{d\overrightarrow{O_1 O}}{dt} + x^*\frac{d\vec{i}}{dt} + y^*\frac{d\vec{j}}{dt} + z^*\frac{d\vec{k}}{dt}$$

$$\vec{a}_e = \vec{a}_{M^*} = \frac{d^2\overrightarrow{O_1 M^*}}{dt^2} = \frac{d^2\overrightarrow{O_1 O}}{dt^2} + x^*\frac{d^2\vec{i}}{dt^2} + y^*\frac{d^2\vec{j}}{dt^2} + z^*\frac{d^2\vec{k}}{dt^2}$$

Do $x(t) = x^*(t), y(t) = y^*(t), z(t) = z^*(t)$ nên ta có :

$$\vec{v}_e = \frac{d\overrightarrow{O_1 O}}{dt} + x\frac{d\vec{i}}{dt} + y\frac{d\vec{j}}{dt} + z\frac{d\vec{k}}{dt} \tag{3-5}$$

$$\vec{a}_e = \frac{d^2\overrightarrow{O_1 O}}{dt^2} + x\frac{d^2\vec{i}}{dt^2} + y\frac{d^2\vec{j}}{dt^2} + z\frac{d^2\vec{k}}{dt^2} \tag{3-6}$$

Trong các bài toán áp dụng, để tính vận tốc theo, gia tốc theo ta tưởng tượng dừng điểm $M$ lại trên hệ quy chiếu động. Sau đó tính toán vận tốc, gia tốc của điểm $M$ do chuyển động của hệ động đối với hệ quy chiếu cố định gây ra.

---

## 3.2. Các định lí hợp vận tốc và hợp gia tốc

### 3.2.1. Định lí hợp vận tốc

::: tip Định lí hợp vận tốc
*Ở mỗi thời điểm, vận tốc tuyệt đối của điểm bằng tổng hình học các vận tốc tương đối và vận tốc theo của nó.*

$$\vec{v}_a = \vec{v}_r + \vec{v}_e \tag{3-7}$$
:::

*Chứng minh :*

Theo hình 3–2 ta có :

$$\overrightarrow{O_1 M} = \overrightarrow{O_1 O} + \overrightarrow{OM} = \overrightarrow{O_1 O} + x\vec{i} + y\vec{j} + z\vec{k}$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_3_2.svg" alt="Hình 3-2" style="max-height: 290px;" />

<div class="figure-caption">

Hình 3-2

</div>

</div>

[Đính chính bản in: Trong Hình 3–2, kí hiệu tại điểm $M$ in nhầm là $M \equiv M$, đúng là $M \equiv M^*$]

Đạo hàm biểu thức trên ta được :

$$\frac{d\overrightarrow{O_1 M}}{dt} = \frac{d\overrightarrow{O_1 O}}{dt} + x \cdot \frac{d\vec{i}}{dt} + y\frac{d\vec{j}}{dt} + z\frac{d\vec{k}}{dt} + \frac{dx}{dt}\vec{i} + \frac{dy}{dt}\vec{j} + \frac{dz}{dt}\vec{k}$$

Chú ý đến $(3-1)$, $(3-3)$ và $(3-5)$ ta suy ra :

$$\vec{v}_a = \vec{v}_e + \vec{v}_r$$

---

### 3.2.2. Định lí hợp gia tốc

::: tip Định lí hợp gia tốc
*Ở mỗi thời điểm, gia tốc tuyệt đối của điểm bằng tổng hình học của gia tốc tương đối, gia tốc theo và gia tốc Côriôlit*

$$\vec{a}_a = \vec{a}_r + \vec{a}_e + \vec{a}_c \tag{3-8}$$

Khi hệ động $Oxyz$ chuyển động tịnh tiến : $\vec{a}_c = \vec{0}$

Khi hệ động $Oxyz$ chuyển động quay quanh một trục cố định với vận tốc góc $\vec{\omega}_e$ thì $\vec{a}_c = 2\vec{\omega}_e \wedge \vec{v}_r$
:::

*Chứng minh :* Đạo hàm hai lần biểu thức :

$$\overrightarrow{O_1 M} = \overrightarrow{O_1 O} + x\vec{i} + y\vec{j} + z\vec{k}$$

ta được :

$$\begin{aligned}
\frac{d^2\overrightarrow{O_1 M}}{dt^2} &= \frac{d^2\overrightarrow{O_1 O}}{dt^2} + x\frac{d^2\vec{i}}{dt^2} + y\frac{d^2\vec{j}}{dt^2} + z\frac{d^2\vec{k}}{dt^2} + \frac{d^2 x}{dt^2}\vec{i} + \frac{d^2 y}{dt^2}\vec{j} + \frac{d^2 z}{dt^2}\vec{k} + \\
&+ 2\left(\frac{dx}{dt} \cdot \frac{d\vec{i}}{dt} + \frac{dy}{dt} \cdot \frac{d\vec{j}}{dt} + \frac{dz}{dt} \cdot \frac{d\vec{k}}{dt}\right)
\end{aligned}$$

Chú ý đến $(3-2)$. $(3-4)$ và $(3-6)$ ta có :

$$\vec{a}_a = \vec{a}_e + \vec{a}_r + \vec{a}_c$$

trong đó :

$$a_c = 2\left(\frac{dx}{dt} \cdot \frac{d\vec{i}}{dt} + \frac{dy}{dt} \cdot \frac{d\vec{j}}{dt} + \frac{dz}{dt} \cdot \frac{d\vec{k}}{dt}\right)$$

[Đính chính bản in: Ở vế trái biểu thức trên bản in thiếu dấu vectơ trên $a_c$, đúng là $\vec{a}_c$]

gọi là gia tốc Côriôlit.

Khi hệ quy chiếu động $Oxyz$ chuyển động tịnh tiến, các vectơ đơn vị $\vec{i}, \vec{j}, \vec{k}$ là các vectơ hằng. Do đó $\vec{a}_c = \vec{0}$.

Khi hệ quy chiếu động chuyển động quay quanh một trục cố định $\Delta$ (H. 3–3), ta lấy điểm $O$ trên trục $\Delta$ làm gốc hệ quy chiếu ấy. Theo công thức tính vận tốc Ơle trong chương 2.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_3_3.svg" alt="Hình 3-3" style="max-height: 250px;" />

<div class="figure-caption">

Hình 3-3

</div>

</div>

Ta có :

$$\frac{d\vec{i}}{dt} = \vec{\omega}_e \wedge \vec{i} \, ; \quad \frac{d\vec{j}}{dt} = \vec{\omega}_e \wedge \vec{j} \, ; \quad \frac{d\vec{k}}{dt} = \vec{\omega}_e \wedge \vec{k}$$

Từ đó ta suy ra :

$$\vec{a}_c = 2\vec{\omega}_e \wedge \left(\frac{dx}{dt}\vec{i} + \frac{dy}{dt}\vec{j} + \frac{dz}{dt}\vec{k}\right) = 2\vec{\omega}_e \wedge \vec{v}_r \tag{3-9}$$

*Chú ý.* Khi làm các bài tập ta có thể sử dụng quy tắc thực hành để xác định vectơ gia tốc Côriôlit như sau :

Khi điểm $M$ chuyển động trên một mặt phẳng thì $\vec{\omega}_e \perp \vec{v}_r$. Khi đó ta quay vectơ $\vec{v}_r$ theo chiều quay của $\vec{\omega}_e$ đi một góc $90^\circ$, ta sẽ được phương và chiều của vectơ $\vec{a}_c$. Độ lớn của nó được tính theo công thức $a_c = 2\omega_e v_r$ (H.3–4).

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_3_4.svg" alt="Hình 3-4" style="max-height: 220px;" />

<div class="figure-caption">

Hình 3-4

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_3_5.svg" alt="Hình 3-5" style="max-height: 220px;" />

<div class="figure-caption">

Hình 3-5

</div>

</div>

Khi điểm $M$ không chuyển động trên một mặt phẳng. Trong mặt phẳng $(\vec{v}_r, \vec{\omega}_e)$ chiếu vectơ $\vec{v}_r$ lên mặt phẳng vuông góc với $\vec{\omega}_e$ ta được vectơ $\vec{v}'_r$. Ta có $v'_r = v_r \sin\alpha$. Sau đó quay vectơ $\vec{v}'_r$ một góc $90^\circ$ theo chiều của $\vec{\omega}_e$ ta được phương và chiều của $\vec{a}_c$. Độ lớn của nó (H.3–5).

$$a_c = 2\omega_e v'_r = 2\omega_e v_r \sin\alpha.$$

---

## 3.3. Các thí dụ áp dụng

### Thí dụ 3-1

**Thí dụ 3 – 1.** Hai bờ của một con sông song song với nhau. Chiều rộng của dòng sông là $h$. Dòng sông chảy với vận tốc $\vec{v}$ có trị số không đổi. Một người lái thuyền sang ngang với vận tốc tương đối là $\vec{u}$. Xác định hướng của vận tốc $\vec{u}$ để cho thời gian sang sông là ngắn nhất. Với điều kiện đó xác định vị trí cập bến của thuyền.

**Bài giải**

Vật điểm khảo sát là con thuyền. Hệ quy chiếu động là dòng nước, hệ quy chiếu cố định là một mốc ở bờ sông. Khi đó con thuyền sẽ tham gia hai chuyển động : chuyển động tương đối với vận tốc $\vec{v}_r = \vec{u}$ và chuyển động theo với vận tốc $\vec{v}_e = \vec{v}$.

Theo định lí hợp vận tốc :

$$\vec{v}_a = \vec{u} + \vec{v}$$

Chiếu đẳng thức này lên các trục tọa độ ta được :

$$v_{ax} = u\sin\alpha + v \, ; \quad v_{ay} = u\cos\alpha$$

Từ đó tích phân lên, với điều kiện đầu $x(0) = 0 \, ; \; y(0) = 0$, ta được :

$$x = (u\sin\alpha + v)t \, ; \quad y = (u\cos\alpha)t$$

Khi thuyền cập bến : $y = (u\cos\alpha)t = h$. Vậy thời gian sang sông là :

$$t = \frac{h}{u\cos\alpha}$$

$$\text{Khi } \alpha = 0 \Rightarrow \cos\alpha = 1 \Rightarrow t_{\min} = \frac{h}{u}$$

Vị trí cập bến của con thuyền sẽ bị lùi một đoạn so với điểm xuất phát là :

$$x = \frac{v}{u}h$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_3_6.svg" alt="Hình 3-6" style="max-height: 230px;" />

<div class="figure-caption">

Hình 3-6

</div>

</div>

---

### Thí dụ 3-2

**Thí dụ 3 – 2.** Một máy nén khí có các ống dẫn khí cong quay đều quanh trục $O$ vuông góc với mặt phẳng hình vẽ với vận tốc góc $w$. Không khí chạy dọc theo các ống với vận tốc tương đối có trị số không đổi $v_r$. Tìm hình chiếu vận tốc và gia tốc của một phân tử khí nằm ở điểm $C$ của ống $AB$ trên các trục $Ox, Oy$. Cho biết bán kính cong của ống ở điểm $C$ là $\rho$ góc giữa pháp tuyến của đường cong $AB$ ở điểm $C$ và bán kính $CO$ là $\varphi$. Bán kính $CO$ bằng $r$.

[Đính chính bản in: Kí hiệu vận tốc góc ở đề bài in là $w$, các biểu thức trong bài giải bên dưới thống nhất dùng $\omega$]

**Bài giải**

*Phân tích.* Ta khảo sát chuyển động của hạt lỏng ở vị trí $C$ của ống dẫn khí $AB$. Chọn rôto máy nén khí làm hệ quy chiếu động và giá máy làm hệ quy chiếu cố định.

Với cách chọn trên, chuyển động tương đối của hạt lỏng là chuyển động cong đều trong rãnh $AB$, chuyển động theo là chuyển động của roto quay đều quanh trục $O$. Chuyển động tuyệt đối của hạt lỏng chưa biết và cần xác định.

*Bài toán vận tốc.* Sử dụng định lí hợp vận tốc.

$$\vec{v}_a = \vec{v}_e + \vec{v}_r \qquad \text{(a)}$$

Trong bài toán này $\vec{v}_r$ đã biết, vuông góc với pháp tuyến tại điểm $C$. Do roto quay quanh trục $O$ nên $\vec{v}_e$ của hạt lỏng vuông góc với bán kính $OC$ hướng theo chiều quay của roto và độ lớn là $v_e = OC.\omega = r.\omega$. Hai vectơ $\vec{v}_e$ và $\vec{v}_r$ tạo với nhau 1 góc $\varphi$ (H. 3–7). Chiếu đẳng thức (a) lên các trục $Ox, Oy$ ta được :

$$\begin{aligned}
v_{ax} &= v_r \cos\varphi + r.\omega \\
v_{ay} &= v_r \sin\varphi
\end{aligned}$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_3_7.svg" alt="Hình 3-7" style="max-height: 290px;" />

<div class="figure-caption">

Hình 3-7

</div>

</div>

*Bài toán gia tốc.* Sử dụng định lí hợp gia tốc.

$$\vec{a}_a = \vec{a}_e + \vec{a}_r + \vec{a}_c \qquad \text{(b)}$$

Theo giả thiết, hạt lỏng chuyển động đều trong rãnh cong $AB$, nên $a_r^t = 0, a_r^n = v_r^2 / \rho$. Vectơ $\vec{a}_r^n$ hướng từ $C$ về $I$. Do roto quay đều nên $a_e^t = 0, a_e^n = r\omega^2$. Vectơ $\vec{a}_e^n$ hướng từ $C$ vào $O$. Do $\vec{v}_r \perp \vec{\omega}_e$ nên vectơ gia tốc Côriôlit $\vec{a}_c$ được xác định theo quy tắc đã nêu trong hình 3–4. Vectơ $\vec{a}_c$ hướng vuông góc với $\vec{v}_r$ và ngược chiều với $\vec{a}_r^n, a_c = 2\omega v_r$. Căn cứ vào hình vẽ 3–7 và biểu thức (b) ta dễ dàng tìm được các thành phần của vectơ gia tốc tuyệt đối :

$$a_{ax} = \left(2v_r\omega - \frac{v_r^2}{\rho}\right)\sin\varphi$$

$$a_{ay} = -\left[r\omega^2 + \left(2v_r\omega - \frac{v_r^2}{\rho}\right)\cos\varphi\right]$$

---

### Thí dụ 3-3

**Thí dụ 3 – 3.** Khảo sát chuyển động của cơ cấu culit như hình 3–8. Giả thiết rằng tay quay $OA = 0{,}2\text{m}$ quay đều quanh $O$ với vận tốc $\omega_o = 4\pi \, 1/\text{s}$. Nhờ con chạy $A$ có thể trượt dọc cần lắc $O_1 B$ mà chuyển động được truyền sang cần lắc $O_1 B$. Ở thời điểm khảo sát $O_1 AO = 60^\circ \, ; \; AOO_1 = 90^\circ$. Tìm vận tốc góc, gia tốc góc của cần lắc ở vị trí đó.

**Bài giải**

*Phân tích.* Chọn con trượt $A$ làm vật điểm khảo sát. Lấy cần lắc $O_1 B$ làm hệ quy chiếu chuyển động.

- Chuyển động tuyệt đối : Chuyển động của điểm $A$ đối với giá cố định. Đó là chuyển động tròn đều, tâm $O$, bán kính $OA$.
- Chuyển động tương đối : chuyển động của điểm $A$ đối với thanh $O_1 B$. Đó là chuyển động thẳng.
- Chuyển động theo : chuyển động của thanh $O_1 B$ đối với giá cố định. Đó là chuyển động của vật rắn quay quanh một trục cố định.

*Bài toán vận tốc :* Áp dụng định lí hợp vận tốc.

$$\vec{v}_a = \vec{v}_e + \vec{v}_r \qquad \text{(a)}$$

Vì chuyển động tuyệt đối của điểm $A$ đã biết, nên vectơ $\vec{v}_a$ đã biết hoàn toàn, $\vec{v}_a \perp OA$, có chiều phù hợp với chiều quay của $\omega_o$, $v_a = a\omega_o$. Vectơ $\vec{v}_r$ hướng dọc theo $O_1 B$, chiều và trị số của nó chưa biết. Cần lắc $O_1 B$ chuyển động quay quanh $O_1$, nên trùng điểm $A^*$ của $A$ chuyển động tròn. Do đó $\vec{v}_e \perp O_1 A$. Ta cũng chưa biết chiều và trị số của nó.

[Đính chính bản in: Trong biểu thức $v_a = a\omega_o$ ở trên, tác giả kí hiệu $a = OA = 0{,}2\text{m}$, tức $v_a = OA.\omega_o$ như dòng tính ngay bên dưới]

Từ hình vẽ 3–8 ta dễ dàng tìm được :

$$v_e = v_a \sin 30^\circ \, ; \quad v_r = v_a \cos 30^\circ.$$

Do $v_a = OA.\omega_o = 0{,}8\pi\text{m/s}$. Nên ta có :

$$v_r = 0{,}4\sqrt{3}\pi, \quad v_e = 0{,}4\pi.$$

Biết giá trị và hướng của $\vec{v}_e$, ta tìm được chiều quay và trị số của cần lắc $\overline{\omega}_1$ :

$$\omega_1 = \frac{v_e}{O_1 A} = \frac{0{,}4\pi}{2.OA} = \pi \, 1/\text{s}$$

Vận tốc góc $\overline{\omega}_1$ có chiều ngược chiều kim đồng hồ như hình vẽ.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_3_8.svg" alt="Hình 3-8" style="max-height: 330px;" />

<div class="figure-caption">

Hình 3-8

</div>

</div>

*Bài toán gia tốc :* Áp dụng công thức :

$$\vec{a}_a = \vec{a}_e + \vec{a}_r + \vec{a}_c$$

Do chuyển động tuyệt đối là chuyển động tròn đều nên $\vec{a}_a = \vec{a}_a^n$.

Chuyển động theo là chuyển động quay quanh một trục cố định nên $\vec{a}_e = \vec{a}_e^n + \vec{a}_e^t$. Công thức gia tốc trên có dạng :

$$\vec{a}_a^n = \vec{a}_e^n + \vec{a}_e^t + \vec{a}_r + \vec{a}_c \qquad \text{(b)}$$

trong đó :

$\vec{a}_a^n$ hướng từ $A$ vào $O$ ; $a_a^n = OA.\omega_o^2 = 0{,}2.16\pi^2 = 3{,}2\pi^2$ ;

$\vec{a}_e^n$ hướng từ $A$ vào $O_1$ ; $a_e^n = O_1 A.\omega_1^2 = 0{,}4\pi^2$.

$\vec{a}_c$ được xác định theo quy tắc đã nêu trên hình 3–4. Vectơ $a_c$ vuông góc với $O_1 B$ như hình vẽ. Độ lớn của $a_c = 2\omega_1 v_r = 2\pi \cdot 0{,}4\sqrt{3}\pi = 0{,}8\sqrt{3}\pi^2$. Vectơ $\vec{a}_e^t$ hướng vuông góc $O_1 B$ nhưng chưa biết chiều và trị số. Vectơ $\vec{a}_r$ hướng dọc theo cần lắc $O_1 B$ nhưng chưa biết chiều và trị số.

Chiếu đẳng thức (b) lên trục $O_1 B$ và trục vuông góc với $O_1 B$ :

$$\begin{aligned}
-a_a^n \cos 60^\circ &= -a_r - a_e^n \\
a_a^n \sin 60^\circ &= a_c - a_e^t
\end{aligned}$$

Từ đó suy ra :

$$a_r = a_a^n \cos 60^\circ - a_e^n = 1{,}6\pi^2 - 0{,}4\pi^2 = 1{,}2\pi^2$$

$$a_e^t = a_c - a_a^n \sin 60^\circ = 0{,}8\sqrt{3}\pi^2 - 1{,}6\sqrt{3}\pi^2 = -0{,}8\sqrt{3}\pi^2$$

Như vậy vectơ $\vec{a}_e^t$ ngược chiều với chiều đã vẽ trên hình 3–9.

Trị số của gia tốc góc của cần lắc $O_1 B$ :

$$\varepsilon_1 = \frac{a_e^t}{O_1 A} = \frac{0{,}8\sqrt{3}\pi^2}{0{,}4} = 2\sqrt{3}\pi^2 \, 1/\text{s}^2.$$

[Đính chính bản in: Ở công thức tính độ lớn $\varepsilon_1$ trên cần hiểu là $\dfrac{|a_e^t|}{O_1 A}$; ngoài ra trên Hình 3–9 kí hiệu gia tốc góc in nhầm là $\varepsilon_2$ (đúng là $\varepsilon_1$) và tại $A$ ghi $\vec{a}_A^n$ ứng với $\vec{a}_a^n$]

Căn cứ vào chiều đúng của $\vec{a}_e^t$, ta biết được chiều của $\varepsilon_1$. Trên hình vẽ $\overline{\varepsilon}_1$ có chiều ngược chiều kim đồng hồ.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_3_9.svg" alt="Hình 3-9" style="max-height: 320px;" />

<div class="figure-caption">

Hình 3-9

</div>

</div>

---

### Thí dụ 3-4

**Thí dụ 3 – 4.** Khảo sát chuyển động của cơ cấu cam (H. 3–10). Cho biết cam là một đĩa tròn lệch tâm quay đều quanh trục cố định $O$ với vận tốc góc $\omega_o$. Khoảng cách giữa tâm $I$ của đĩa và $O$ là $e$. Cần $AB$ chuyển động tịnh tiến dọc theo rãnh định hướng $K$. Xác định vận tốc và gia tốc của cần ở vị trí như hình vẽ 3–10.

**Bài giải**

*Phân tích :* Ta khảo sát chuyển động của điểm $A$ trên cần. Chọn hệ động là cam, hệ cố định là giá máy. Như thế chuyển động tương đối của $A$ là chuyển động tròn quanh tâm $I$. Chuyển động theo là chuyển động quay của cam quanh $O$. Chuyển động tuyệt đối là chuyển động thẳng đứng lên xuống theo trục $AB$.

*Bài toán vận tốc :* Sử dụng định lí hợp vận tốc :

$$\vec{v}_a = \vec{v}_e + \vec{v}_r \qquad \text{(a)}$$

Trong thí dụ này $\vec{v}_e$ đã biết, vuông góc với $OA$ và có độ lớn là $v_e = l\omega_o$. Trong đó :

$$\begin{aligned}
l = OA &= \sqrt{(r + e\cos 45^\circ)^2 + (e\sin 45^\circ)^2} \\
&= \sqrt{r^2 + e^2 + er\sqrt{2}}
\end{aligned}$$

Vectơ $\vec{v}_r$ vuông góc với $IA$, chưa biết về chiều và trị số.

Vectơ $\vec{v}_a$ hướng theo trục $AB$, chưa biết về chiều và trị số. Dựa trên hình vẽ 3–10 và công thức (a), ta dễ dàng xác định được :

$$v_a = v_e \cos 60^\circ = \frac{1}{2}l\omega_o$$

$$v_r = v_e \cos 30^\circ = \frac{\sqrt{3}}{2}l\omega_o$$

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_3_10.svg" alt="Hình 3-10" style="max-height: 330px;" />

<div class="figure-caption">

Hình 3-10

</div>

</div>

*Bài toán gia tốc :* Sử dụng định lí hợp gia tốc :

$$\vec{a}_a = \vec{a}_e + \vec{a}_r + \vec{a}_c \qquad \text{(b)}$$

Do cam quay đều, nên $a_e^t = 0 \, ; \; a_e^n = l\omega_o^2$. Điểm $A$ chuyển động tương đối trên vành cam nên $\vec{a}_r = \vec{a}_r^t + \vec{a}_r^n$. Trong đó $\vec{a}_r^n$ hướng từ $A$ vào $I$ và có giá trị :

$$a_r^n = \frac{v_r^2}{r} = \frac{3}{4r}l^2\omega_o^2$$

Thành phần $\vec{a}_r^t$ hướng vuông góc với $IA$, chưa biết về chiều và trị số. Do $\vec{v}_r \perp \vec{\omega}_e$ nên vectơ gia tốc $\vec{a}_c$ được xác định theo quy tắc đã nêu trên hình 3–4. Vectơ $\vec{a}_c$ vuông góc với $\vec{v}_r$ và ngược chiều với $\vec{a}_r^n \, ; \; a_c = 2\omega_o v_r = l\omega_o^2\sqrt{3}$. Do cần chuyển động tịnh tiến, nên $\vec{a}_a$ hướng dọc thanh $AB$. Ta chưa biết về chiều và trị số của nó.

Như thế hệ thức (b) bây giờ có dạng :

$$\vec{a}_a = \vec{a}_e^n + \vec{a}_r^t + \vec{a}_r^n + \vec{a}_c \qquad \text{(c)}$$

Trong đó hai vectơ $\vec{a}_a$ và $\vec{a}_r^t$ chưa biết về chiều và trị số (H. 3–11). Chiếu hệ thức (c) lên phương $IA$ ta được :

$$\begin{aligned}
a_a &= a_e^n \cos 30^\circ - a_r^n + a_c = \\
&= -l\omega_o \frac{2\sqrt{3}}{2} - \frac{3}{4r}l^2\omega_o^2 + l\omega_o^2\sqrt{3} = \\
&= -l\omega_o^2\left(\frac{3l}{4r} - \frac{\sqrt{3}}{2}\right)
\end{aligned}$$

[Đính chính bản in: Ở dòng thứ nhất vế phải in thiếu dấu trừ trước $a_e^n \cos 30^\circ$ (đúng là $-a_e^n \cos 30^\circ - a_r^n + a_c$); ở dòng thứ hai số mũ $2$ của $\omega_o^2$ bị xếp nhầm lên tử số thành $-l\omega_o \dfrac{2\sqrt{3}}{2}$, đúng là $-l\omega_o^2 \dfrac{\sqrt{3}}{2}$]

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_3_11.svg" alt="Hình 3-11" style="max-height: 340px;" />

<div class="figure-caption">

Hình 3-11

</div>

</div>

Do ở vị trí như hình 3–11 thì $l > r$; vậy $a_a < 0$; $\vec{a}_a$ phải hướng từ $A$ tới $I$. Muốn tìm $\vec{a}_r^t$, ta chiếu hệ thức (c) lên phương vuông góc với $AI$.

---

### Nhận xét chung

*Nhận xét chung :* Khi tính toán vận tốc và gia tốc trong chương này, ta thường dẫn đến việc giải phương trình vectơ.

$$\sum_{i=1}^n \vec{a}_i = \sum_{j=1}^m \vec{b}_i$$

[Đính chính bản in: Tổng ở vế phải bản in ghi $\displaystyle\sum_{j=1}^m \vec{b}_i$, đúng chỉ số là $\displaystyle\sum_{j=1}^m \vec{b}_j$]

Nếu $\vec{a}_i, \vec{b}_j$ là các vectơ trong không gian, thì phương trình trên tương đương với ba phương trình vô hướng. Bài toán giải được khi có ba ẩn. Nếu $\vec{a}_i, \vec{b}_j$ là các vectơ nằm cùng trong một mặt phẳng, thì phương trình vectơ trên tương đương với hai phương trình vô hướng. Bài toán giải được khi có hai ẩn. Ẩn ở đây là trị số và dấu của nó.

Nếu trong phương trình trên, có một vectơ hoàn toàn chưa biết, bài toán thuộc loại bài toán tổng hợp. Nếu có hai (hoặc ba trong bài toán không gian) vectơ chưa biết về trị số, còn phương đã biết, bài toán thuộc loại bài toán phân tích. Như thế các thí dụ 3–1 và 3–2 ở trên thuộc loại bài toán tổng hợp, còn các thí dụ 3–3 và 3–4 là các bài toán phân tích.
