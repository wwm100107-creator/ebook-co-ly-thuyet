# Chương 6: Phương trình vi phân chuyển động của cơ hệ không tự do

Trong chương này trình bày phương pháp thành lập phương trình vi phân chuyển động của cơ hệ không tự do trong dạng tọa độ suy rộng.

---

## 6.1. Phương trình Lagơrăng loại II

Khảo sát chuyển động của cơ hệ hôlônôm có $n$ bậc tự do. Chọn các tọa độ suy rộng đủ $q_1, q_2, \dots, q_n$.

Để viết phương trình vi phân chuyển động của cơ hệ trong dạng tọa độ suy rộng ta sử dụng phương pháp Tĩnh giải tích – Động lực.

Vì các liên kết đặt lên cơ hệ là lý tưởng, nên theo phương pháp Tĩnh giải tích – Động lực, ta có :

$$\sum_k \delta A_k^{\text{hđ}} + \sum_k \delta A_k^{\text{qt}} = 0$$

trong đó $\sum \delta A_k^{\text{hđ}}$ là tổng công khả dĩ của lực hoạt động $\vec{F}_k$ tác dụng lên các chất điểm $M_k$, còn $\sum \delta A_k^{\text{qt}}$ là tổng công khả dĩ của các lực quán tính của các chất điểm $M_k$ ($k = \overline{1, N}$) của cơ hệ.

Như đã biết, tổng công khả dĩ của các lực hoạt động $\vec{F}_k$ ($k = \overline{1, N}$) có thể viết trong dạng

$$\sum_k \delta A_k^{\text{hđ}} = \sum_{i=1}^n Q_i \delta q_i \tag{6-1}$$

trong đó $Q_i$ là lực suy rộng của các lực hoạt động $\vec{F}_k$ ($k = \overline{1, N}$) ứng với tọa độ suy rộng $q_i$ ($i = \overline{1, n}$)

$$Q_i = \sum_{k=1}^N \vec{F}_k \cdot \frac{\partial \vec{r}_k}{\partial q_i} \quad (i = \overline{1, n})$$

Tương tự, tổng công khả dĩ của các lực quán tính $\vec{F}_k^{\text{qt}}$ của các chất điểm $M_k$ ($k = \overline{1, N}$) có dạng sau:

$$\sum_k \delta A_k^{\text{qt}} = \sum_{i=1}^n Q_i^{\text{qt}} \delta q_i$$

trong đó $Q_i^{\text{qt}}$ là lực suy rộng của các lực quán tính $\vec{F}_k^{\text{qt}}$ ($k = \overline{1, N}$) ứng với tọa độ suy rộng $q_i$ ($i = \overline{1, n}$) :

Vì : $\vec{F}_k^{\text{qt}} = -m\vec{a}_k$

[Đính chính bản in: Trong biểu thức $\vec{F}_k^{\text{qt}} = -m\vec{a}_k$, bản in thiếu chỉ số $k$ ở khối lượng $m_k$.]

nên từ $(4 - 15)$ :

$$Q_i^{\text{qt}} = \sum_k \vec{F}_k^{\text{qt}} \cdot \frac{\partial \vec{r}_k}{\partial q_i} = -\sum_k m_k \vec{a}_k \frac{\partial \vec{r}_k}{\partial q_i} \tag{6-2}$$

Phương trình $(6 - 1)$ bây giờ được viết thành :

$$\sum_{i=1}^n \left(Q_i + Q_i^{\text{qt}}\right)\delta q_i = 0 \tag{6-3}$$

[Đính chính bản in: Ở dòng trên, bản in ghi "Phương trình $(6 - 1)$", thực chất là thế $(6 - 1)$ và biểu thức công khả dĩ của lực quán tính vào phương trình tổng quát $\sum_k \delta A_k^{\text{hđ}} + \sum_k \delta A_k^{\text{qt}} = 0$ ở trang 127.]

Vì cơ hệ hôlônôm và các tọa độ suy rộng đủ, nên các biến phân $\delta q_1, \delta q_2, \dots, \delta q_n$ độc lập đối với nhau. Do đó, đẳng thức $(6 - 3)$ được thực hiện khi và chỉ khi :

$$Q_i + Q_i^{\text{qt}} = 0,$$

hay :

$$Q_i = -Q_i^{\text{qt}}, \quad (i = \overline{1, n}) \tag{6-4}$$

Bây giờ ta tính biểu thức của lực suy rộng của các lực quán tính, nó có thể được viết trong dạng sau :

$$Q_i^{\text{qt}} = -\sum_k m_k \vec{a}_k \frac{\partial \vec{r}_k}{\partial q_i} = -\sum m_k \frac{d\vec{v}_k}{dt} \cdot \frac{\partial \vec{r}_k}{\partial q_i}$$

Sau một số phép biến đổi đơn giản, ta nhận được :

$$Q_i^{\text{qt}} = -\frac{d}{dt}\left(\sum m_k \vec{v}_k \frac{\partial \vec{r}_k}{\partial q_i}\right) + \sum m_k \vec{v}_k \cdot \frac{d}{dt}\frac{\partial \vec{r}_k}{\partial q_i} \tag{6-5}$$

Chúng ta sẽ chứng minh :

$$\frac{\partial \vec{r}_k}{\partial q_i} = \frac{\partial \vec{v}_k}{\partial \dot{q}_i} \tag{6-6}$$

$$\frac{d}{dt}\frac{\partial \vec{r}_k}{\partial q_i} = \frac{\partial \vec{v}_k}{\partial q_i} \tag{6-7}$$

Đầu tiên ta chứng minh hệ thức $(6 - 6)$

Vì rằng :

$$\vec{r}_k = \vec{r}_k(t, q_1, q_2, \dots, q_n) \tag{6-8}$$

nên :

$$\vec{v}_k = \frac{d\vec{r}_k}{dt} = \sum_{j=1}^n \frac{\partial \vec{r}_k}{\partial q_j}\dot{q}_j + \frac{\partial \vec{r}_k}{\partial t} \tag{6-9}$$

Biểu thức $(6 - 8)$ không chứa các vận tốc suy rộng $\dot{q}_i$ ($i = \overline{1, n}$) nên các đại lượng :

$$\frac{\partial \vec{r}_k}{\partial q_i} \, ; \quad \frac{\partial \vec{r}_k}{\partial t} \, ; \quad (k = \overline{1, N}) \, ; \quad (i = \overline{1, n})$$

cũng không chứa các vận tốc suy rộng $\dot{q}_j$ ($i = \overline{1, n}$), tức chúng phụ thuộc chỉ vào thời gian và tọa độ suy rộng.

[Đính chính bản in: Ở câu trên, bản in ghi $\dot{q}_j$ ($i = \overline{1, n}$), đúng ra là $\dot{q}_j$ ($j = \overline{1, n}$) hoặc $\dot{q}_i$ ($i = \overline{1, n}$).]

Do đó khi lấy đạo hàm riêng theo biến $\dot{q}_j$ hai vế của hệ thức $(6 - 9)$, ta có ngay $(6 - 6)$.

[Đính chính bản in: Để nhận được $(6 - 6)$, lấy đạo hàm riêng hai vế của $(6 - 9)$ theo biến $\dot{q}_i$.]

Bây giờ ta chứng minh hệ thức $(6 - 7)$.

Khi chú ý rằng các đại lượng $\vec{r}_k(t, q_1, \dots, q_n)$, $\frac{\partial \vec{r}_k}{\partial q_i}(t, q_1, \dots, q_n)$ và $\frac{\partial \vec{r}_k}{\partial t}(t, q_1, \dots, q_n)$ là những hàm liên tục của biến độc lập $t$ và các biến $q_i$ ($i = \overline{1, n}$) chúng ta có :

$$\frac{d}{dt}\frac{\partial \vec{r}_k}{\partial q_i} = \sum_{j=1}^n \frac{\partial^2 \vec{r}_k}{\partial q_j \partial q_i}\dot{q}_j + \frac{\partial^2 \vec{r}_k}{\partial t \partial q_i} \tag{6-10}$$

và từ $(6 - 9)$

$$\frac{\partial \vec{v}_k}{\partial q_i} = \sum_{j=1}^n \frac{\partial^2 \vec{r}_k}{\partial q_i \partial q_j}\dot{q}_j + \frac{\partial^2 \vec{r}_k}{\partial q_i \partial t} \tag{6-11}$$

Khi so sánh $(6 - 10)$ và $(6 - 11)$ và chú ý đến tính chất của các đạo hàm hỗn hợp :

$$\frac{\partial^2 \vec{r}_k}{\partial q_j \partial q_i} = \frac{\partial^2 \vec{r}_k}{\partial q_i \partial q_j}, \quad \frac{\partial^2 \vec{r}_k}{\partial t \partial q_i} = \frac{\partial^2 \vec{r}_k}{\partial q_i \partial t}$$

ta có ngay $(6 - 7)$

Bây giờ ta quay lại biểu thức của lực suy rộng của các lực quán tính $(6 - 5)$, với chú ý các hệ thức $(6 - 6)$ và $(6 - 7)$ ta có :

$$\begin{aligned}
Q_i^{\text{qt}} &= -\left[\frac{d}{dt}\left(\sum m_k \vec{v}_k \cdot \frac{\partial \vec{r}_k}{\partial q_i}\right) - \sum m_k \vec{v}_k \cdot \frac{d}{dt}\frac{\partial \vec{r}_k}{\partial q_i}\right] \\
&= -\left[\frac{d}{dt}\left(\sum m_k \vec{v}_k \cdot \frac{\partial \vec{v}_k}{\partial \dot{q}_i}\right) - \sum m_k \vec{v}_k \cdot \frac{\partial \vec{v}_k}{\partial q_i}\right] \\
&= -\left[\frac{d}{dt}\left[\frac{\partial}{\partial \dot{q}_i}\left(\frac{1}{2}\sum m_k \vec{v}_k\right)^2\right] - \frac{\partial}{\partial q_i}\left(\frac{1}{2}\sum m_k \vec{v}_k\right)^2\right].
\end{aligned}$$

[Đính chính bản in: Ở dòng cuối của biểu thức trên, bản in đặt dấu bình phương ra ngoài thành $\left(\frac{1}{2}\sum m_k \vec{v}_k\right)^2$, đúng ra là $\frac{1}{2}\sum m_k (\vec{v}_k)^2$.]

Vì :

$$(\vec{v}_k)^2 = \vec{v}_k \cdot \vec{v}_k = v_k^2$$

nên :

$$\frac{1}{2}\sum m_k (\vec{v}_k)^2 = \frac{1}{2}\sum m_k v_k^2 = T$$

là động năng của cơ hệ.

Vậy :

$$Q_i^{\text{qt}} = -\left[\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_i}\right) - \frac{\partial T}{\partial q_i}\right]. \tag{6-12}$$

trong đó động năng $T$ của cơ hệ, được tính trong tọa độ suy rộng đủ, là hàm của thời gian, tọa độ suy rộng và vận tốc suy rộng :

$$T = T(t, q_i, \dot{q}_i) \tag{6-13}$$

Bây giờ phương trình $(6 - 4)$ có dạng sau :

$$\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_i}\right) - \frac{\partial T}{\partial q_i} = Q_i \quad (i = \overline{1, n}) \tag{6-14}$$

nó được gọi là phương trình Lagơrăng loại II, mô tả chuyển động của cơ hệ hôlônôm chịu liên kết giữ và lý tưởng.

Trong trường hợp các lực hoạt động là lực thế, tức cơ hệ bảo toàn, và giả sử hàm thế năng có dạng :

$$\Pi = \Pi(q_1, q_2, \dots, q_n) \tag{6-15}$$

thì phương trình Lagơrăng loại II viết cho cơ hệ bảo toàn là :

$$\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_i}\right) - \frac{\partial T}{\partial q_i} = -\frac{\partial \Pi}{\partial q_i} \quad (i = \overline{1, n}) \tag{6-16}$$

Đưa vào biểu thức :

$$L = T - \Pi \tag{6-17}$$

được gọi là hàm Lagơrăng và chú ý rằng :

$$\frac{\partial L}{\partial \dot{q}_i} = \frac{\partial T}{\partial \dot{q}_i} \, ; \quad \frac{\partial L}{\partial q_i} = \frac{\partial T}{\partial q_i} - \frac{\partial \Pi}{\partial q_i}$$

phương trình Lagơrăng loại II cho cơ hệ bảo toàn sẽ được viết trong dạng

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = 0, \quad (i = \overline{1, n}) \tag{6-18}$$

### Thí dụ 6 – 1

**Thí dụ 6 – 1.** Thành lập phương trình vi phân chuyển động của cơ cấu tay quay thanh truyền khi tay quay chịu tác dụng ngẫu lực $M$, còn pittông chịu tác dụng lực $\vec{F}$ theo phương ngang. Cho biết chiều dài của tay quay $OA$ bằng $r$ và của thanh truyền $AB$ bằng $l$ và $\frac{r}{l} = \lambda \ll 1$. Khối lượng của tay quay bằng $m_1$, khối tâm của nó trùng với trục quay $O$, bán kính quán tính của tay quay đối với $O$ bằng $\rho$, khối lượng của pittông bằng $m_2$. Bỏ qua khối lượng thanh $AB$ và ma sát (H.6 – 1).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_6_1.svg" alt="Hình 6-1" style="max-height: 220px;" />

<div class="figure-caption">

Hình 6-1

</div>

</div>

**Bài giải**

Khảo sát cơ hệ là cơ cấu tay quay thanh truyền. Cơ hệ có liên kết hôlônôm, giữ, dừng là lý tưởng. Cơ hệ có một bậc tự do.

Chọn tọa độ suy rộng $q = \varphi$ là góc định vị của tay quay $OA$.

Các lực hoạt động gồm ngẫu lực $M$ và lực $\vec{F}$.

Đầu tiên ta tính biểu thức động năng của cơ hệ gồm động năng tay quay và động năng của pittông $B$.

$$T = T_{OA} + T_B = \frac{1}{2}J_o\omega^2 + \frac{1}{2}m_2 v_B^2,$$

trong đó :

$$\omega = \dot{\varphi} \, ; \quad v_B = \frac{d}{dt}(\overline{OB}) = \frac{d}{dt}\left(r\cos\varphi + l\sqrt{1 - \lambda^2\sin^2\varphi}\right) \, ;$$

$$J_o = m_1\rho^2$$

Vì $\lambda = \frac{r}{l} \ll 1$ nên $\sqrt{1 - \lambda^2\sin^2\varphi} \approx 1 - \frac{1}{2}\lambda^2\sin^2\varphi$.

Nên :

$$v_B = \frac{d\overline{OB}}{dt} = -r\left(\sin\varphi + \frac{\lambda}{2}\sin 2\varphi\right)\dot{\varphi}$$

Vậy :

$$T = \frac{1}{2}\left[m_1\rho^2 + m_2 r^2\left(\sin\varphi + \frac{\lambda}{2}\sin 2\varphi\right)^2\right]\dot{\varphi}^2$$

Bây giờ ta tính lực suy rộng $Q_\varphi$ của các lực hoạt động ứng với tọa độ suy rộng $\varphi$.

Cho cơ hệ di chuyển khả dĩ ứng với góc $\varphi$ biến đổi lượng $\delta\varphi$. Khi đó điểm $B$ có di chuyển khả dĩ.

$$\delta s_B = -r\left(\sin\varphi + \frac{\lambda}{2}\sin 2\varphi\right)\delta\varphi$$

Tổng công khả dĩ của các lực hoạt động bằng

$$\sum \delta A_k = M\delta\varphi + F\delta s_B = \left[M - Fr\left(\sin\varphi + \frac{1}{2}\lambda\sin 2\varphi\right)\right]\delta\varphi$$

Vậy :

$$Q_\varphi = \frac{\sum \delta A_k}{\delta\varphi} = M - Fr\left(\sin\varphi + \frac{1}{2}\lambda\sin 2\varphi\right)$$

Phương trình Lagơrăng loại II mô tả chuyển động của cơ cấu tay quay thanh truyền sẽ là :

$$\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{\varphi}}\right) - \frac{\partial T}{\partial \varphi} = Q_\varphi,$$

nó có dạng sau :

$$\begin{aligned}
&\left[m_1\rho^2 + m_2 r^2\left(\sin\varphi + \frac{\lambda}{2}\sin 2\varphi\right)^2\right]\ddot{\varphi} \\
&+ m_2 r^2(\cos\varphi + \lambda\cos 2\varphi)\left(\sin\varphi + \frac{\lambda}{2}\sin 2\varphi\right)\dot{\varphi}^2 \\
&= M - Fr\left(\sin\varphi + \frac{1}{2}\lambda\sin 2\varphi\right)
\end{aligned}$$

*Chú ý :* Vì cơ cấu tay quay thanh truyền có một bậc tự do, nên có thể áp dụng định lý động năng dạng đạo hàm và ta cũng nhận được kết quả vừa tìm được.

### Thí dụ 6 – 2

**Thí dụ 6–2.** Một trụ tròn đồng chất $A$ có khối lượng $m_1$, bán kính $R$, lăn không trượt trên một mặt phẳng nghiêng của một lăng trụ tam giác $B$ có khối lượng $m_2$ và có góc nghiêng với mặt phẳng ngang là $\alpha = \text{const}$. Lăng trụ có thể trượt trên mặt phẳng ngang nhẵn. Viết phương trình vi phân chuyển động của cơ hệ.

**Bài giải**

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_6_2.svg" alt="Hình 6-2" style="max-height: 270px;" />

<div class="figure-caption">

Hình 6-2

</div>

</div>

Khảo sát cơ hệ gồm trụ tròn $A$ và lăng trụ tam giác $B$. Cơ hệ chịu liên kết hôlônôm, giữ, dừng và lý tưởng. Hệ có hai bậc tự do (h. 6–2).

Chọn các tọa độ suy rộng đủ $q_1 = x, \; q_2 = s$; trong đó $x$ là hoành độ của khối tâm của lăng trụ đối với hệ quy chiếu cố định, còn $s$ là hoành độ khối tâm của trụ tròn theo mặt phẳng nghiêng.

Các lực hoạt động gồm các trọng lực của trụ tròn và lăng trụ.

Biểu thức động năng cơ hệ có dạng:

$$T = \frac{1}{2}m_2 v^2 + \frac{1}{2}m_1 v_o^2 + \frac{1}{2}J_o\omega^2,$$

trong đó $v$ là vận tốc tịnh tiến của lăng trụ, $v_o$ – vận tốc khối tâm $O$ của con lăn, $\omega$ là vận tốc góc tuyệt đối của con lăn đối với hệ trục tọa độ tịnh tiến cùng với khối tâm của nó.

Vì tâm $O$ tham gia hai chuyển động: chuyển động tương đối đối với lăng trụ và chuyển động theo cùng với lăng trụ, nên:

$$\vec{v}_o = \vec{v}_e + \vec{v}_r,$$

trong đó:

$$v_e = \dot{x} \, ; \quad v_r = \dot{s}$$

Từ hình vẽ (xem hình 6 – 2) ta có:

$$v_o^2 = v_e + v_r^2 + 2v_r v_e\sin\alpha = \dot{x}^2 + \dot{s}^2 + 2\dot{x}\dot{s}\sin\alpha$$

Do con lăn lăn không trượt đối với lăng trụ tịnh tiến, nên

$$\omega = \dot{\varphi} = \frac{v_r}{R} = \frac{\dot{s}}{R}$$

Momen quán tính của trụ tròn đồng chất đối với $O$ bằng:

$$J_o = \frac{m_1 R^2}{2}$$

Vậy động năng cơ hệ bằng:

$$\begin{aligned}
T &= \frac{1}{2}m_2\dot{x}^2 + \frac{1}{2}m_1\left(\dot{x}^2 + \dot{s}^2 + 2\dot{s}\dot{x}\sin\alpha\right) + \frac{m_1 R^2}{4}\frac{\dot{s}^2}{R^2} \\
&= \frac{1}{2}(m_1 + m_2)\dot{x}^2 + \frac{1}{2}\frac{3m_1}{2}\dot{s}^2 + m_1\cos\alpha\,\dot{x} \cdot \dot{s}
\end{aligned}$$

Vì các lực hoạt động là lực thế, và hàm thế năng bằng:

$$\Pi = -m_2 g\sin\alpha \cdot s + \text{const}$$

nên:

$$Q_x = -\frac{\partial \Pi}{\partial x} = 0 \, ; \quad Q_s = -\frac{\partial \Pi}{\partial s} = mg\sin\alpha$$

Phương trình Lagơrăng loại II đối với cơ hệ có dạng:

$$\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{x}}\right) - \frac{\partial T}{\partial x} = Q_x \, ; \quad \frac{d}{dt}\left(\frac{\partial T}{\partial \dot{s}}\right) - \frac{\partial T}{\partial s} = Q_s$$

Vậy phương trình vi phân chuyển động của cơ hệ sẽ là:

$$(m_1 + m_2)\ddot{x} + m_1\cos\alpha\,\ddot{s} = 0$$

$$m_1\cos\alpha\,\ddot{x} + \frac{3}{2}m_1\ddot{s} = m_1 g\sin\alpha$$

Giải hệ phương trình này ta được:

$$\ddot{x} = -\frac{m_1 g\sin 2\alpha}{3(m_1 + m_2) - 2m_1\cos^2\alpha} < 0 \, ;$$

$$\ddot{s} = \frac{2(m_1 + m_2)g\sin 2\alpha}{3(m_1 + m_2) - 2m_1\cos^2\alpha} > 0$$

Vậy cơ hệ chuyển động biến đổi đều.

*Chú ý:* Hàm Lagơrăng của cơ hệ bằng:

$$\begin{aligned}
L &= T - \Pi = \frac{1}{2}(m_1 + m_2)\dot{x}^2 + \\
&\quad + \frac{1}{2}\frac{3m_1}{2}\dot{s}^2 + m_1\cos\alpha\,\ddot{x}\dot{s} + m_2 g\cos\alpha s + \text{const}
\end{aligned}$$

Áp dụng phương trình $(6 - 18)$ ta cũng nhận được kết quả trên.

[Đính chính bản in: Trong Thí dụ 6–2 có một số lỗi in: (1) ở công thức $v_o^2$ thiếu bình phương ở $v_e^2$ và bước đầu viết nhầm $\sin\alpha$ thay cho $\cos\alpha$ (tới dòng rút gọn của $T$ và hệ phương trình sau đã dùng đúng $\cos\alpha$); (2) ở biểu thức thế năng $\Pi$ và $Q_s$ ghi nhầm $m_2$ và $m$ thay cho khối lượng trụ tròn $m_1$ ($\Pi = -m_1 g s \sin\alpha + \text{const}$, $Q_s = m_1 g\sin\alpha$); (3) tử số của $\ddot{s}$ là $\sin\alpha$ thay cho $\sin 2\alpha$; (4) trong biểu thức $L$ ghi nhầm $\ddot{x}\dot{s}$ và $m_2 g\cos\alpha s$ thay cho $\dot{x}\dot{s}$ và $m_1 g\sin\alpha\, s$.]

### Thí dụ 6 – 3

**Thí dụ 6 – 3.** Thành lập phương trình vi phân chuyển động của con lắc kép gồm hai thanh $OA$ và $AB$ nối với nhau bằng bản lề $O$. Thanh $OA$ có chiều dài $R$, trọng lượng $P$, khối tâm $C_1$ nằm cách trục quay $O$ một đoạn $s_1$ và momen quán tính của nó đối với trục $O$ bằng $J_o$. Thanh $AB$ có chiều dài $l$, trọng lượng $Q$, khối tâm $C_2$ nằm cách trục quay $A$ một đoạn $s_2$, và momen quán tính của nó đối với khối tâm $C_2$ bằng $J_2$. Bỏ qua ma sát tại các ổ quay.

[Đính chính bản in: Hai thanh $OA$ và $AB$ nối với nhau bằng bản lề $A$ (bản in ghi nhầm "bản lề $O$"); trong đề bài kí hiệu mômen quán tính đối với $C_2$ là $J_2$, phần bài giải viết là $J_{C_2}$.]

**Bài giải**

Khảo sát cơ hệ là con lắc kép gồm hai thanh $OA$ và $AB$ (H.6 – 3) cơ hệ chịu liên kết hôlônôm, giữ, dừng và lý tưởng. Cơ hệ có hai bậc tự do.

Lực hoạt động tác dụng lên cơ hệ gồm các trọng lực $\vec{P}$ và $\vec{Q}$. Chọn các tọa độ suy rộng đủ $q_1 = \varphi \, ; \; q_2 = \psi$.

Biểu thức động năng của cơ hệ được tính như sau:

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_6_3.svg" alt="Hình 6-3" style="max-height: 300px;" />

<div class="figure-caption">

Hình 6-3

</div>

</div>

$$T = \frac{1}{2}J_o\omega_1^2 + \frac{1}{2}\frac{Q}{g}v_{C_2}^2 + \frac{1}{2}J_{C_2}\omega_2^2,$$

trong đó:

$$\omega_1 = \dot{\varphi} \, ; \quad \omega_2 = \dot{\psi}$$

Để tính $v_{C_2}$ ta dựa vào công thức tính vận tốc trong tọa độ Đề các:

$$v_{C_2}^2 = \dot{x}_2^2 + \dot{y}_2^2$$

trong đó:

$$\begin{aligned}
x_2 &= R\cos\varphi + s_2\cos\psi \, ; \\
y_2 &= R\sin\varphi + s_2\sin\psi \, ; \\
\dot{x}_2 &= -R\sin\varphi\dot{\varphi} - s_2\sin\psi\dot{\psi} \, ; \\
\dot{y}_2 &= R\cos\varphi\dot{\varphi} + s_2\cos\psi\dot{\psi}
\end{aligned}$$

Vậy:

$$v_{C_2}^2 = \dot{x}_2^2 + \dot{y}_2^2 = R^2\dot{\varphi}^2 + s_2^2\dot{\psi}^2 + 2Rs_2\cos(\varphi - \psi)\dot{\varphi}\dot{\psi}$$

Biểu thức động năng của cơ hệ sẽ là:

$$T = \frac{1}{2}\left(J_o + \frac{Q}{g}R^2\right)\dot{\varphi}^2 + \frac{1}{2}\left(J_{C_2} + \frac{Q}{g}s_2^2\right)\dot{\psi}^2 + \frac{Q}{g}Rs_2\cos(\varphi - \psi)\dot{\varphi}\dot{\psi}$$

Bây giờ ta tính lực suy rộng ứng với tọa độ suy rộng $\varphi, \psi$. Vì các lực hoạt động là lực thế và hàm thế năng bằng:

$$\Pi = -Ps_1\cos\varphi - Q(R\cos\varphi + s_2\cos\psi) + \text{const}$$

nên :

$$\begin{aligned}
Q_\varphi &= -\frac{\partial \Pi}{\partial \varphi} = -Ps_1\sin\varphi - QR\sin\varphi \, ; \\
Q_\psi &= -\frac{\partial \Pi}{\partial \psi} = -Qs_2\sin\psi
\end{aligned}$$

Chú ý rằng kết quả này có thể suy trực tiếp từ thí dụ tính lực suy rộng của con lắc kép (xem chương 4, phần Động lực học, § 1)

Phương trình Lagơrăng loại II của cơ hệ có dạng.

$$\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{\varphi}}\right) - \frac{\partial T}{\partial \varphi} = Q_\varphi \, ; \quad \frac{d}{dt}\left(\frac{\partial T}{\partial \dot{\psi}}\right) - \frac{\partial T}{\partial \psi} = Q_\psi$$

Thực hiện các phép tính sau :

$$\frac{\partial T}{\partial \varphi} = -\frac{Q}{g}Rs_2\sin(\varphi - \psi)\dot{\varphi}\dot{\psi} \, ;$$

$$\frac{\partial T}{\partial \dot{\varphi}} = \left(J_o + \frac{Q}{g}R^2\right)\dot{\varphi} + \frac{Q}{g}Rs_2\cos(\varphi - \psi)\dot{\psi}$$

$$\begin{aligned}
\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{\varphi}}\right) &= \left(J_o + \frac{Q}{g}R^2\right)\ddot{\varphi} + \frac{Q}{g}Rs_2\cos(\varphi - \psi)\ddot{\psi} - \\
&\quad - \frac{Q}{g}Rs_2\sin(\varphi - \psi)(\dot{\varphi} - \dot{\psi})\dot{\psi}
\end{aligned}$$

$$\frac{\partial T}{\partial \psi} = \frac{Q}{g}Rs_2\sin(\varphi - \psi)\dot{\varphi}\dot{\psi} \, ;$$

$$\frac{\partial T}{\partial \dot{\psi}} = \left(J_{C_2} + \frac{Q}{g}s_2^2\right)\dot{\psi} + \frac{Q}{g}Rs_2\cos(\varphi - \psi)\dot{\varphi}$$

$$\begin{aligned}
\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{\psi}}\right) &= \left(J_{C_2} + \frac{Q}{g}s_2^2\right)\ddot{\psi} + \\
&\quad + \frac{Q}{g}Rs_2\cos(\varphi - \psi)\ddot{\varphi} - \frac{Q}{g}Rs_2\sin(\varphi - \psi)(\dot{\varphi} - \dot{\psi})\dot{\varphi}
\end{aligned}$$

Thay vào trên ta được phương trình vi phân chuyển động của con lắc kép.

$$\begin{aligned}
&\left(J_o + \frac{Q}{g}R^2\right)\ddot{\varphi} + \frac{Q}{g}Rs_2\cos(\varphi - \psi)\ddot{\psi} + \\
&\quad + \frac{Q}{g}Rs_2\sin(\varphi - \psi)\dot{\psi}^2 + (Ps_1 + QR)\sin\varphi = 0
\end{aligned}$$

$$\begin{aligned}
&\frac{Q}{g}Rs_2\cos(\varphi - \psi)\ddot{\varphi} + \left(J_{C_2} + \frac{Q}{g}s_2^2\right)\ddot{\psi} - \\
&\quad - \frac{Q}{g}Rs_2\sin(\varphi - \psi)\dot{\varphi}^2 + Qs_2\sin\psi = 0
\end{aligned}$$

---

## 6.2. Tích phân đầu của chuyển động

Phương trình chuyển động Lagơrăng loại II là hệ $n$ phương trình vi phân cấp hai phi tuyến. Việc tích phân hệ phương trình này trong dạng kín chỉ đạt được trong một số ít trường hợp. Trong một số trường hợp tuy không thể tích phân phương trình chuyển động trong dạng kín, nhưng dựa vào các đặc trưng của cơ hệ, nó tạo thành các lớp cơ hệ, có thể tìm được một số tích phân đầu của chuyển động của nó, từ đó có thể phát hiện được nhiều tính chất quan trọng của các cơ hệ đó. Dưới đây sẽ trình bày hai lớp cơ hệ dễ dàng tìm được các tích phân đầu của chúng. Đó là các cơ hệ bảo toàn và các cơ hệ có tọa độ xycơlic.

### 6.2.1. Tích phân năng lượng

Khảo sát cơ hệ hôlônôm có $n$ bậc tự do, chịu liên kết giữ, dừng và lý tưởng. Các lực hoạt động là các lực thế. Chọn các tọa độ suy rộng đủ là $q_1, q_2, \dots, q_n$.

Phương trình chuyển động của cơ hệ viết trong dạng phương trình Lagơrăng loại II sẽ là :

$$\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_i}\right) - \frac{\partial T}{\partial q_i} = -\frac{\partial \Pi}{\partial q_i} \quad (i = \overline{1, n}) \tag{6-16}$$

trong đó $T$ và $\Pi$ là động năng và thế năng của cơ hệ được biểu diễn trong tọa độ suy rộng đủ.

Vì cơ hệ chịu liên kết dừng, nên có thể chọn các tọa độ suy rộng $q_1$ ($i = \overline{1, n}$) sao cho :

$$x_k = x_k(q_1, \dots, q_n) \, ; \quad y_k = y_k(q_1, \dots, q_n) \, ; \quad z_k = z_k(q_1, \dots, q_n)$$

[Đính chính bản in: Ở dòng trên, bản in ghi $q_1$ ($i = \overline{1, n}$), đúng ra là $q_i$ ($i = \overline{1, n}$).]

hay :

$$\vec{r}_k = \vec{r}_k(q_1, q_2, \dots, q_n)$$

Do đó:

$$\Pi(x_1, y_1, z_1, \dots, x_N, y_N, z_N) = \Pi(q_1, q_2, \dots, q_n)$$

$$\vec{v}_k = \frac{d\vec{r}_k}{dt} = \sum_{i=1}^n \frac{\partial \vec{r}_k}{\partial q_i}\dot{q}_i$$

$$\begin{aligned}
T &= \frac{1}{2}\sum_k m_k v_k^2 = \frac{1}{2}\sum m_k \vec{v}_k \vec{v}_k = \\
&= \frac{1}{2}\sum_k m_k \sum_{i=1}^n \frac{\partial \vec{r}_k}{\partial q_i}\dot{q}_i \sum_{j=1}^n \frac{\partial \vec{r}_k}{\partial q_j}q_j \\
&= \frac{1}{2}\sum_{i=1}^n \sum_{j=1}^n \sum_k m_k \frac{\partial \vec{r}_k}{\partial q_i}\frac{\partial \vec{r}_k}{\partial q_j}\dot{q}_i\dot{q}_j = \frac{1}{2}\sum_{i=1}^n \sum_{j=1}^n a_{ij}\dot{q}_i\dot{q}_j
\end{aligned} \tag{6-19}$$

[Đính chính bản in: Ở dòng đầu của $(6 - 19)$, bản in thiếu dấu chấm trên $\dot{q}_j$ ở thừa số cuối (viết là $q_j$).]

ở đó:

$$a_{ij} = \sum_k m_k \frac{\partial \vec{r}_k}{\partial q_i}\frac{\partial \vec{r}_k}{\partial q_j}$$

được gọi là các hệ số quán tính của cơ hệ: $a_{ij} = a_{ij}(q_1, q_2, \dots, q_n) = a_{ji}$.

Vậy động năng là hàm đẳng cấp bậc hai đối với các vận tốc suy rộng: do đó ta có ngay hệ thức sau:

$$\sum \frac{\partial T}{\partial \dot{q}_i}\dot{q}_i = 2T \tag{6-20}$$

Bây giờ nhân hai vế của phương trình chuyển động của cơ hệ $(6 - 16)$ cho vận tốc suy rộng $q_i$ sau đó lấy tổng theo chỉ số $i$, ta nhận được:

[Đính chính bản in: Ở câu trên, bản in ghi thiếu dấu chấm trên vận tốc suy rộng $\dot{q}_i$.]

$$\sum_{i=1}^n \dot{q}_i \frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_i}\right) - \sum_{i=1}^n \dot{q}_i \frac{\partial T}{\partial q_i} = -\sum \frac{\partial \Pi}{\partial q_i}\dot{q}_i \tag{6-21}$$

Chú ý rằng

$$\sum_{i=1}^n \frac{\partial \Pi}{\partial q_i}\dot{q}_i = \frac{d\Pi}{dt} \tag{6-22}$$

$$\begin{aligned}
\sum_{i=1}^n \dot{q}_i \frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_i}\right) &= \sum_{i=1}^n \frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_i}\dot{q}_i\right) - \sum_{i=1}^n \frac{\partial T}{\partial \dot{q}_i}\ddot{q}_i = \\
&= \frac{d}{dt}\left(\sum_{i=1}^n \frac{\partial T}{\partial \dot{q}_i}\dot{q}_i\right) - \sum_{i=1}^n \frac{\partial T}{\partial \dot{q}_i}\ddot{q}_i = \\
&= \frac{d}{dt}(2T) - \sum_{i=1}^n \frac{\partial T}{\partial \dot{q}_i}\ddot{q}_i = \\
&= 2\frac{dT}{dt} - \left(\frac{dT}{dt} - \sum_{i=1}^n \frac{\partial T}{\partial q_i}\dot{q}_i\right) = \\
&= \frac{dT}{dt} + \sum_{i=1}^n \frac{\partial T}{\partial q_i}\dot{q}_i,
\end{aligned} \tag{6-23}$$

Khi thay $(6 - 22)$, $(6 - 23)$ vào $(6 - 21)$ ta nhận được:

$$\frac{dT}{dt} + \sum_{i=1}^n \frac{\partial T}{\partial q_i}\dot{q}_i - \sum_{i=1}^n \frac{\partial T}{\partial q_i}\dot{q}_i = -\frac{d\Pi}{dt}$$

Vậy:

$$\frac{dT}{dt} = -\frac{d\Pi}{dt}$$

hay:

$$\frac{d}{dt}(T + \Pi) = \frac{d}{dt}E = 0$$

Do đó:

$$E = T + \Pi = \text{const} = h \tag{6-24}$$

Vậy cơ năng của cơ hệ được bảo toàn. Đẳng thức $(6 - 24)$ được gọi là tích phân năng lượng, còn $h$ được gọi là hằng số năng lượng, nó được xác định từ điều kiện đầu của chuyển động.

Trong trường hợp của thí dụ $6 - 2$, ta có tích phân năng lượng dạng:

$$\frac{1}{2}(m_1 + m_2)\dot{x}^2 + \frac{1}{2}\frac{3}{2}m_1\dot{s}^2 + m_1\cos\alpha\dot{x}\dot{s} - m_2 g\sin\alpha \cdot s = h$$

[Đính chính bản in: Tương ứng với thế năng ở Thí dụ 6–2, số hạng thế năng ở đây đúng ra là $-m_1 g\sin\alpha \cdot s$.]

còn trong trường hợp thí dụ $6 - 3$, tích phân năng lượng sẽ là:

$$\begin{aligned}
\frac{1}{2}\left(J_o + \frac{Q}{g}R^2\right)\dot{\varphi}^2 + \frac{1}{2}\left(J_{C_2} + \frac{Q}{g}s_2^2\right)\dot{\psi}^2 + \frac{Q}{g}Rs_2\cos(\varphi - \psi)\dot{\varphi}\dot{\psi} - \\
- Ps_1\cos\varphi - Q(R\cos\varphi + s_2\cos\psi) = h
\end{aligned}$$

### 6.2.2. Tích phân xycơlic

*Tọa độ xycơlic:* Tọa độ $q_s$ được gọi là tọa độ xycơlic, nếu :

$$\frac{\partial T}{\partial q_s} \equiv 0 \, ; \quad \frac{\partial \Pi}{\partial q_s} \equiv 0 \, ; \quad Q_s \equiv 0 \tag{6-25}$$

Nói khác đi, tọa độ $q_s$ được gọi là tọa độ xycơlic nếu nó không có mặt trong các biểu thức động năng và thế năng của cơ hệ, còn lực suy rộng của các lực hoạt động ứng với nó bằng không.

Nếu $q_s$ là tọa độ xycơlic thì phương trình Lagơrăng loại II ứng với tọa độ này có dạng:

$$\frac{d}{dt}\frac{\partial T}{\partial \dot{q}_s} = 0$$

Do đó:

$$\frac{\partial T}{\partial \dot{q}_s} = \text{const} \tag{6-26}$$

Đẳng thức $(6 - 26)$ biểu diễn một tích phân đầu của cơ hệ được gọi là tích phân xycơlic.

Chú ý rằng cơ hệ có bao nhiêu tọa độ xycơlic thì có bấy nhiêu tích phân đầu xycơlic.

#### Thí dụ 6 – 1

**Thí dụ 6 – 1.** Một con lắc ênliptic gồm con chạy có khối lượng $m_1$ trượt trên mặt ngang nhẵn và quả cầu nhỏ có khối lượng $m_2$ được nối vào con chạy bằng thanh $AB$ cứng nhẹ, có chiều dài $l$. Thanh quay trơn quanh trục nằm ngang, vuông góc với mặt phẳng hình vẽ.

Thành lập phương trình vi phân chuyển động của con lắc và tìm các tích phân đầu.

[Đính chính bản in: Ở mục 6.2.2 (tr. 142), sách đánh số lại thí dụ này là "Thí dụ 6 – 1" (theo thứ tự toàn chương là thí dụ thứ tư).]

**Bài giải**

Khảo sát cơ hệ gồm con chạy $A$, chuyển động tịnh tiến thẳng ngang và quả cầu $B$ xem như chất điểm. Cơ hệ chịu liên kết hôlônôm, giữ, dừng và lý tưởng. Cơ hệ có hai bậc tự do. Chọn hai tọa độ suy rộng đủ là hoành độ $y$ của con chạy và góc lệch $\varphi$ của $AB$ đối với đường thẳng đứng (H. 6–4).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_6_4.svg" alt="Hình 6-4" style="max-height: 270px;" />

<div class="figure-caption">

Hình 6-4

</div>

</div>

Các lực hoạt động gồm các trọng lực. Hàm thế năng có dạng:

$$\Pi = -m_2 g l \cos\varphi + \text{const}$$

Phương trình Lagơrăng loại II được viết như sau:

$$\frac{d}{dt}\frac{\partial T}{\partial \dot{y}} - \frac{\partial T}{\partial y} = -\frac{\partial \Pi}{\partial y} \, ; \quad \frac{d}{dt}\frac{\partial T}{\partial \dot{\varphi}} - \frac{\partial T}{\partial \varphi} = -\frac{\partial \Pi}{\partial \varphi}$$

Động năng của cơ hệ bằng:

$$T = \frac{1}{2}m_1 v_1^2 + \frac{1}{2}m_2 v_2^2$$

trong đó $v_1, v_2$ lần lượt là vận tốc của con chạy và chất điểm $B$.

Rõ ràng:

$$v_1 = \dot{y}$$

còn điểm $B$ chuyển động trong mặt phẳng, có tọa độ $x_2$ và $y_2$ nên vận tốc của nó được tính theo công thức:

$$v_2^2 = \dot{x}_2^2 + \dot{y}_2^2$$

vì:

$$\begin{aligned}
x_2 &= l\cos\varphi \, ; & \dot{x}_2 &= -l\sin\varphi\dot{\varphi} \\
y_2 &= y + l\sin\varphi \, ; & \dot{y}_2 &= \dot{y} + l\cos\varphi\dot{\varphi}
\end{aligned}$$

nên:

$$v_2^2 = l^2\dot{\varphi}^2 + \dot{y}^2 + 2l\cos\varphi\dot{y}\dot{\varphi}$$

Vậy biểu thức của động năng sẽ là:

$$T = \frac{1}{2}(m_1 + m_2)\dot{y}^2 + \frac{m_2}{2}l^2\dot{\varphi}^2 + m_2 l\cos\varphi\dot{y}\dot{\varphi}$$

Ta tính các đại lượng sau :

$$\frac{\partial T}{\partial y} = 0 \, ; \quad \frac{\partial T}{\partial \dot{y}} = (m_1 + m_2)\dot{y} + m_2 l\cos\varphi\dot{\varphi}$$

$$\frac{d}{dt}\frac{\partial T}{\partial \dot{y}} = (m_1 + m_2)\ddot{y} + m_2 l\cos\varphi\ddot{\varphi} - m_2 l\sin\varphi\dot{\varphi}^2$$

$$\frac{\partial T}{\partial \dot{\varphi}} = m_2 l^2\dot{\varphi} + m_2 l\cos\varphi\dot{y}$$

$$\frac{d}{dt}\frac{\partial T}{\partial \dot{\varphi}} = m_2 l^2\ddot{\varphi} + m_2 l\cos\varphi\ddot{y} - m_2 l\sin\varphi\dot{y}\dot{\varphi}$$

$$\frac{\partial T}{\partial \varphi} = m_2 l\sin\varphi\dot{y}\dot{\varphi}$$

[Đính chính bản in: Ở biểu thức $\frac{\partial T}{\partial \varphi}$ trang 144, bản in thiếu dấu trừ ở vế phải, đúng ra là $\frac{\partial T}{\partial \varphi} = -m_2 l\sin\varphi\dot{y}\dot{\varphi}$.]

Thay các đại lượng này vào phương trình Lagơrăng loại II ta được

$$\begin{aligned}
l\ddot{\varphi} + \cos\varphi\ddot{y} + g\sin\varphi &= 0 \\
(m_1 + m_2)\ddot{y} + m_2 l\ddot{\varphi}\cos\varphi - m_2 l\sin\varphi\dot{\varphi}^2 &= 0
\end{aligned}$$

Rõ ràng tọa độ $y$ thỏa mãn điều kiện:

$$\frac{\partial T}{\partial y} = 0 \, ; \quad \frac{\partial \Pi}{\partial y} = 0 \, ; \quad Q_y \equiv 0 \, ;$$

nên $y$ là tọa độ xycơlic

Vậy cơ hệ có một tích phân xycơlic là:

$$\frac{\partial T}{\partial \dot{y}} \equiv (m_1 + m_2)\dot{y} + m_2 l\dot{\varphi}\cos\varphi = \text{const} = h_1$$

Ngoài ra cơ hệ có tích phân năng lượng dạng:

$$\begin{aligned}
E = T + \Pi &\equiv \frac{1}{2}(m_1 + m_2)\dot{y}^2 + \frac{1}{2}m_2 l^2\dot{\varphi}^2 + \\
&\quad + m_2 l\cos\varphi\dot{y}\dot{\varphi} - m_2 l g\cos\varphi = \text{const} = h_2
\end{aligned}$$
