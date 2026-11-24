---
title: "Chặng 3 (Ngày 11–15): Định Lý Động Năng, Thế Năng & Cơ Hệ Tổng Hợp (AS1003)"
layout: doc
---

# Chặng 3 (Ngày 11 – Ngày 15): Định Lý Biến Thiên Động Năng, Trường Lực Thế & Cơ Hệ Tổng Hợp

Trong đề cương học phần **Cơ Lý Thuyết (`AS1003` — Trường Đại học Bách Khoa ĐHQG-HCM)**, phần **Định lý biến thiên động năng đối với cơ hệ một bậc tự do** (Chương 12.2–12.3 theo đề cương môn học, tương ứng [Mục 3.5 và 3.6 Giáo trình Động lực học Chương 3](/dong-luc-hoc/chuong-3) và [Mục 2.4 Sách Bài Tập Động lực học Chương 2](/bai-tap/dong-luc-hoc/chuong-2)) chiếm từ 3 đến 4 câu trắc nghiệm liên hoàn trong hầu hết các mã đề thi cuối kỳ (`1821`, `1721`, `1722`, `0001/2016`, `0002/2016`, `0001/2015`, `0002/2015`).

Cấu trúc giải tích của bài toán này đòi hỏi tính chính xác tuyệt đối theo chuỗi phụ thuộc nhân quả: nếu sai mômen quán tính hoặc sai tỷ số truyền vận tốc ở bước thiết lập động năng $T$, hoặc sai dấu công của lò xo có biến dạng đầu $\Delta l_0 \neq 0$ ở bước tính tổng công $\sum A$, toàn bộ các câu tiếp theo tìm vận tốc $\omega, v$, gia tốc $\varepsilon, a$ và phản lực động lực đều sai dây chuyền. Chặng 3 xây dựng nền tảng chứng minh từ nguyên lý cơ bản đến bài toán tổng hợp kết hợp Nguyên lý D'Alembert trong 5 ngày học nghiêm ngặt (thời lượng yêu cầu `3–4` giờ làm việc thực chất mỗi ngày).

::: info Phân bổ chương trình học Chặng 3 (Ngày 11 – Ngày 15)
| Ngày | Nội dung học thuật trọng tâm | Đầu ra năng lực bắt buộc | Tài liệu đối chiếu |
| :--- | :--- | :--- | :--- |
| **Ngày 11** | Chứng minh Động năng Cơ hệ & Liên hệ Động học 1 BTD | Chứng minh Định lý König, công thức quanh tâm tức thời $I$; quy đổi vận tốc theo $q$ cho 5 cơ cấu chuẩn | [GT ĐLH Ch.3 (3.5)](/dong-luc-hoc/chuong-3) · [SBT ĐLH Ch.2 (2.4)](/bai-tap/dong-luc-hoc/chuong-2) |
| **Ngày 12** | Công Nguyên tố, Công Hữu hạn, Thế năng & Sai số Lực Thế | Chứng minh công trọng lực, ngẫu lực, lò xo có $\Delta l_0 \neq 0$, ma sát trượt vs nghỉ, kiểm toán biên $\sum A(q_0) = 0$ | [GT ĐLH Ch.3 (3.5–3.6)](/dong-luc-hoc/chuong-3) · [SBT ĐLH Ch.2](/bai-tap/dong-luc-hoc/chuong-2) |
| **Ngày 13** | Hai Dạng Định lý Động năng ($T - T_0 = \sum A$ và $\frac{dT}{dt} = \sum N$) | Chuẩn hóa $T = \frac{1}{2}M_{\text{td}}(q)\dot{q}^2$, đạo hàm đủ số hạng $\dot{q}^3$; giải trọn chùm 4 câu `1821`, `2016` | [SBT ĐLH Ch.2 (2.4.3)](/bai-tap/dong-luc-hoc/chuong-2) · [Đề thật HCMUT](/on-thi/de-thi-that-hcmut#de-1821) |
| **Ngày 14** | Cơ hệ Tổng hợp: Kết hợp Động năng & D'Alembert | Tìm sức căng dây $S$, kiểm tra không trượt $\lvert F_{\text{msn}}\rvert \le f_0 N$, tìm góc tách mặt $N(\theta^*) = 0$ | [SBT ĐLH Ch.6 (6.4–6.5)](/bai-tap/dong-luc-hoc/chuong-6) · [Đề `1721`](/on-thi/de-thi-that-hcmut#de-1721) |
| **Ngày 15** | Cổng Kiểm Định Chặng 3 (12 câu / 35 phút, cấm mở sách) | Giải độc lập 3 chùm × 4 câu chuẩn `AS1003`; đạt tối thiểu `8/12` câu trước khi sang Chặng 4 | [Ngân hàng đề thi thật](/on-thi/de-thi-that-hcmut) |
:::

---

## Ngày 11: Chứng Minh Động Năng Cơ Hệ & Thiết Lập Liên Hệ Động Học 1 Bậc Tự Do {#ngay-11}

### 11.1. Định nghĩa tổng quát và hai chuyển động cơ bản của vật rắn

Xét cơ hệ gồm $N$ chất điểm $M_k$ có khối lượng $m_k$ và vận tốc tuyệt đối $\vec{v}_k$ ($k = \overline{1, N}$) trong hệ quy chiếu quán tính. Động năng của cơ hệ là đại lượng vô hướng không âm được định nghĩa bởi tổng:

$$T = \frac{1}{2}\sum_{k=1}^{N} m_k v_k^2 = \frac{1}{2}\sum_{k=1}^{N} m_k \left(\vec{v}_k \cdot \vec{v}_k\right)$$

Khi cơ hệ gồm $n$ vật rắn hoặc vật biến dạng (dây có khối lượng, băng tải), tính cộng tính của tổng cho phép tách động năng toàn hệ thành tổng động năng từng bộ phận: $T = \sum_{j=1}^{n} T_j$. Đối với một vật rắn khối lượng $m = \sum m_k$:

1. **Chuyển động tịnh tiến:** Tại thời điểm đang xét, mọi điểm thuộc vật rắn có cùng vectơ vận tốc bằng vận tốc khối tâm $C$ ($\vec{v}_k = \vec{v}_C \implies v_k = v_C$):

   $$T_{\text{tt}} = \frac{1}{2}\left(\sum_{k=1}^{N} m_k\right) v_C^2 = \frac{1}{2} m v_C^2$$

2. **Chuyển động quay quanh trục cố định $\Delta$:** Mọi phần tử $M_k$ cách trục quay $\Delta$ khoảng vuông góc $r_k$ có độ lớn vận tốc $v_k = r_k \omega$, trong đó $\omega = \lvert\dot{\varphi}\rvert$ là độ lớn vận tốc góc của vật rắn:

   $$T_{\text{q}} = \frac{1}{2}\sum_{k=1}^{N} m_k \left(r_k \omega\right)^2 = \frac{1}{2}\left(\sum_{k=1}^{N} m_k r_k^2\right)\omega^2 = \frac{1}{2} J_\Delta \omega^2$$

   Nếu trục quay cố định $\Delta$ song song với trục trung tâm $\Delta_C$ (đi qua khối tâm $C$) và cách $\Delta_C$ một khoảng $d$, định lý Huygens–Steiner bắt buộc áp dụng để tính $J_\Delta$:

   $$J_\Delta = J_{\Delta_C} + m d^2$$

---

### 11.2. Chứng minh Định lý König và công thức động năng qua tâm vận tốc tức thời $I$

Xét vật rắn phẳng (hoặc vật rắn có mặt phẳng đối xứng chất) khối lượng $m$ thực hiện **chuyển động song phẳng** song song với mặt phẳng cố định $\Pi_0$. Gọi $C$ là khối tâm vật rắn, $\vec{v}_C$ là vận tốc khối tâm và $\vec{\omega}$ là vectơ vận tốc góc tức thời vuông góc với $\Pi_0$.

#### a) Chứng minh Định lý König theo giải tích vectơ

Xét phần tử khối lượng $m_k$ tại $M_k$. Đặt $\vec{\rho}_k = \overrightarrow{CM}_k$ là vectơ định vị tương đối từ khối tâm $C$ tới $M_k$. Theo định nghĩa khối tâm, ta luôn có đồng nhất thức:

$$\sum_{k=1}^{N} m_k \vec{\rho}_k = \vec{0}$$

Theo công thức phân bố vận tốc của vật rắn với cực là khối tâm $C$, vận tốc tuyệt đối của phần tử $M_k$ là $\vec{v}_k = \vec{v}_C + \vec{\omega} \times \vec{\rho}_k$. Thay vào định nghĩa động năng và khai triển bình phương vô hướng:

$$\begin{aligned}
T &= \frac{1}{2}\sum_{k=1}^{N} m_k \left(\vec{v}_C + \vec{\omega} \times \vec{\rho}_k\right)^2 \\
  &= \frac{1}{2}\left(\sum_{k=1}^{N} m_k\right) v_C^2 + \vec{v}_C \cdot \left[\vec{\omega} \times \left(\sum_{k=1}^{N} m_k \vec{\rho}_k\right)\right] \\
  &\quad + \frac{1}{2}\sum_{k=1}^{N} m_k \left\lvert\vec{\omega} \times \vec{\rho}_k\right\rvert^2
\end{aligned}$$

Số hạng giao thoa ở giữa bằng $0$ do $\sum m_k \vec{\rho}_k = \vec{0}$ (lưu ý: số hạng này chỉ triệt tiêu tổng quát khi cực được chọn là **khối tâm $C$** hoặc điểm cố định; nếu chọn cực $A \neq C$ đang chuyển động thì không được viết $T = \frac{1}{2}mv_A^2 + \frac{1}{2}J_A\omega^2$). Ở số hạng thứ ba, gọi $r_k$ là khoảng cách từ $M_k$ đến trục $Cz$ đi qua $C$ và song song với $\vec{\omega}$; khi đó $\lvert\vec{\omega} \times \vec{\rho}_k\rvert = \omega r_k$. Vì $J_C = \sum_{k=1}^{N} m_k r_k^2$, ta thu được **Định lý König**:

$$T = \frac{1}{2} m v_C^2 + \frac{1}{2} J_C \omega^2$$

#### b) Chứng minh công thức động năng đối với tâm vận tốc tức thời $I$

Tại thời điểm vật rắn song phẳng không tịnh tiến tức thời ($\omega \neq 0$), luôn tồn tại duy nhất trục quay tức thời đi qua **tâm vận tốc tức thời $I$** (vuông góc với mặt phẳng chuyển động) sao cho $\vec{v}_I = \vec{0}$. Khi đó vận tốc của khối tâm $C$ có độ lớn $v_C = IC \cdot \omega$. Thay $v_C = IC \cdot \omega$ vào biểu thức Định lý König và áp dụng định lý Huygens–Steiner cho hai trục song song qua $C$ và $I$:

$$\begin{aligned}
T &= \frac{1}{2} m \left(IC \cdot \omega\right)^2 + \frac{1}{2} J_C \omega^2 \\
  &= \frac{1}{2}\left(J_C + m \cdot IC^2\right)\omega^2 = \frac{1}{2} J_I \omega^2
\end{aligned}$$

::: warning Bốn biểu thức động năng cơ bản cần suy dẫn chuẩn xác
1. **Thanh mảnh đồng chất (khối lượng $m$, chiều dài $l$) quay quanh một đầu cố định $O$:**
   Với $J_C = \frac{1}{12}ml^2$ và $OC = \frac{l}{2}$, ta có $J_O = \frac{1}{12}ml^2 + m\left(\frac{l}{2}\right)^2 = \frac{1}{3}ml^2$, suy ra:
   $$T = \frac{1}{2}J_O\omega^2 = \frac{1}{6} m l^2 \omega^2$$
2. **Đĩa tròn đặc hoặc trụ tròn đặc đồng chất ($m, R$, $J_C = \frac{1}{2}mR^2$) lăn không trượt trên mặt cố định:**
   Tại tiếp điểm $I$, $\vec{v}_I = \vec{0} \implies v_C = R\omega$ và $J_I = \frac{1}{2}mR^2 + mR^2 = \frac{3}{2}mR^2$:
   $$T = \frac{1}{2}J_I\omega^2 = \frac{3}{4} m R^2 \omega^2 = \frac{3}{4} m v_C^2$$
3. **Vành tròn mỏng hoặc ống trụ rỗng thành mỏng ($m, R$, $J_C = mR^2$) lăn không trượt trên mặt cố định:**
   Với $J_I = mR^2 + mR^2 = 2mR^2$ và $v_C = R\omega$:
   $$T = \frac{1}{2}J_I\omega^2 = m R^2 \omega^2 = m v_C^2$$
4. **Vật rắn bất kỳ khối lượng $m$ có bán kính quán tính đối với khối tâm là $\rho$ ($J_C = m\rho^2$) lăn không trượt trên mặt cố định bán kính ngoài $R$:**
   $$T = \frac{1}{2} m \left(1 + \frac{\rho^2}{R^2}\right) v_C^2 = \frac{1}{2} m \left(R^2 + \rho^2\right)\omega^2$$
:::

---

### 11.3. Thiết lập liên hệ động học 1 bậc tự do cho 5 mẫu cơ cấu trọng tâm

Đối với cơ hệ dừng 1 bậc tự do định vị bởi tọa độ suy rộng $q$, bước quyết định trước khi cộng động năng là biểu diễn mọi vận tốc dài $v_k$ và vận tốc góc $\omega_i$ theo duy nhất $\dot{q}$ thông qua điều kiện không dãn của dây và điều kiện không trượt tại tiếp điểm.

#### Mẫu 1: Ròng rọc động treo tải ở tâm

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_6.svg" alt="Dây mềm không dãn vắt qua ròng rọc động" class="figure-img" />
  <p class="figure-caption">Hình 11.1: Mô hình dây mềm không dãn vắt qua ròng rọc động (Hình 3-6 Sách Bài Tập Động Lực Học Chương 3)</p>
</div>

Xét ròng rọc động tâm $C$, bán kính $R$, có hai nhánh dây song song không trượt đối với vành ròng rọc. Chọn trục chiếu song song với hai nhánh dây, gọi $v_{\text{tr}}, v_{\text{ph}}$ là hình chiếu đại số vận tốc của hai nhánh dây tại hai điểm tiếp tuyến trái và phải:
- Vận tốc khối tâm $C$ bằng trung bình cộng đại số vận tốc hai nhánh dây, còn vận tốc góc $\omega$ xác định từ hiệu đại số:

  $$v_C = \frac{v_{\text{tr}} + v_{\text{ph}}}{2}, \qquad \omega = \frac{\left\lvert v_{\text{ph}} - v_{\text{tr}}\right\rvert}{2R}$$

- **Trường hợp một nhánh dây buộc cố định** ($v_{\text{tr}} = 0$, nhánh phải kéo với vận tốc $v$): Tiếp điểm với nhánh dây cố định là tâm vận tốc tức thời $I$ của ròng rọc động ($IC = R$, đường kính sang nhánh động bằng $2R$), suy ra:

  $$v_C = \frac{1}{2} v, \qquad \omega = \frac{v}{2R} = \frac{v_C}{R}$$

#### Mẫu 2: Tang trống hai tầng đồng tâm bán kính $R, r$ (tời cố định và con lăn kép)

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_8.svg" alt="Tời hai tầng bán kính r và R quấn hai nhánh dây" class="figure-img" />
  <p class="figure-caption">Hình 11.2: Tang trống hai tầng đồng tâm bán kính r và R quay quanh trục cố định O (Hình 2-8 Sách Bài Tập Động Lực Học Chương 2)</p>
</div>

Cần phân biệt rạch ròi hai cấu hình liên kết của tang hai tầng đồng tâm (bán kính ngoài $R$, bán kính trong $r < R$):
1. **Tang quay quanh trục cố định $O$** (như `Thí dụ 2–5` Hình 11.2, hoặc tời vi sai `Bài 2.35`): Chọn góc quay của tang làm tọa độ suy rộng $q = \varphi$ ($\omega = \lvert\dot{\varphi}\rvert$). Vì $O$ cố định, vận tốc hai nhánh dây tỷ lệ thuận với bán kính tầng quấn dây:

   $$v_1 = r\lvert\dot{\varphi}\rvert, \qquad v_2 = R\lvert\dot{\varphi}\rvert \implies \frac{v_1}{r} = \frac{v_2}{R} = \omega$$

   Nếu hai nhánh dây từ $R$ và $r$ cùng vắt xuống nâng một ròng rọc động (tời vi sai `Bài 2.35` — `/figures/bai-tap/dong-luc-hoc/hinh_2_50.svg`, một tầng thu dây và một tầng nhả dây khi tang quay góc $\varphi$), vận tốc tâm ròng rọc động là $v_D = \frac{1}{2}(R - r)\lvert\dot{\varphi}\rvert$.

2. **Con lăn hai tầng lăn không trượt trên mặt cố định bằng vành ngoài $R$** (như `Bài 6.26`, Đề `0002/2015` C5–8, `Đề 1` C1–8): Tâm vận tốc tức thời $I$ nằm tại điểm tiếp xúc của vành ngoài $R$ với nền cố định, nên $v_C = R\omega$. Khi đó vận tốc điểm dây rời khỏi tầng trong bán kính $r$ phụ thuộc vị trí nhả dây so với $I$:
   - **Dây rời ở đỉnh tầng trong** (khác phía $I$ so với tâm $C$, khoảng cách đến $I$ bằng $R + r$):

     $$v_{\text{dây}} = (R + r)\omega = \left(1 + \frac{r}{R}\right) v_C$$

   - **Dây rời ở đáy tầng trong** (nằm giữa $C$ và $I$, khoảng cách đến $I$ bằng $R - r$):

     $$v_{\text{dây}} = (R - r)\omega = \left(1 - \frac{r}{R}\right) v_C$$

#### Mẫu 3: Con lăn vừa quay vừa quấn hoặc nhả dây trên mặt nghiêng

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_29.svg" alt="Khối trụ tròn quấn dây chuyển động trên mặt phẳng nghiêng" class="figure-img" />
  <p class="figure-caption">Hình 11.3: Khối trụ tròn quấn dây chuyển động dọc mặt phẳng nghiêng góc alpha (Hình 6-29 Sách Bài Tập Động Lực Học Chương 6)</p>
</div>

Trên mặt phẳng nghiêng góc $\alpha$, phải kiểm tra điểm nào có vận tốc bằng không trước khi viết liên hệ giữa $v_C$ và $\omega$:
- **Trường hợp A — Đầu dây buộc cố định vào cọc trên dốc, dây quấn không trượt vào mép trên của trụ bán kính $R$** (mô hình `Bài 6.11` Hình 11.3): Do dây không dãn và đầu dây cố định, điểm tiếp tuyến $K$ giữa dây và mép trên trụ chính là tâm vận tốc tức thời ($v_K = 0$). Suy ra khối tâm $C$ đi xuống dốc với $v_C = R\omega$, còn điểm tiếp xúc $I$ giữa đáy trụ và mặt dốc **trượt xuống dốc** với vận tốc $v_I = 2R\omega = 2v_C \neq 0$ (lực ma sát tại $I$ là ma sát trượt động và sinh công âm).
- **Trường hợp B — Con lăn lăn không trượt trên mặt dốc cố định, dây ở mép trên kéo qua ròng rọc nối vật treo** (mô hình Đề `19/06/2014` hoặc Chùm 3 Ngày 15): Điểm tiếp xúc mặt dốc $I$ có $v_I = 0$, khối tâm con lăn có $v_C = R\omega$, còn dây ở mép trên có vận tốc dọc dốc $v_{\text{dây}} = 2R\omega = 2v_C$.

#### Mẫu 4: Thanh mảnh trượt trong hai rãnh vuông góc

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_10.svg" alt="Thanh đồng chất AB tựa trên tường thẳng đứng và nền nằm ngang vuông góc" class="figure-img" />
  <p class="figure-caption">Hình 11.4: Thanh đồng chất AB chiều dài l chuyển động có hai đầu tựa trên hai phương vuông góc (Hình 6-10 Sách Bài Tập Động Lực Học Chương 6)</p>
</div>

Xét thanh mảnh đồng chất $AB$ chiều dài $l$, khối lượng $m$, có đầu $A$ trượt dọc trục thẳng đứng $Oy$ và đầu $B$ trượt dọc trục nằm ngang $Ox$ vuông góc với $Oy$. Chọn góc nghiêng $q = \theta$ hợp bởi thanh $AB$ và trục $Ox$ làm tọa độ suy rộng ($\omega = \lvert\dot{\theta}\rvert$):
- Tọa độ các điểm $A, B$ và khối tâm $G$ (trung điểm $AB$):

  $$x_A = 0,\quad y_A = l\sin\theta;\qquad x_B = l\cos\theta,\quad y_B = 0$$

  $$x_G = \frac{l}{2}\cos\theta,\qquad y_G = \frac{l}{2}\sin\theta$$

- Đạo hàm theo thời gian $t$ thu được độ lớn vận tốc hai đầu trượt và khối tâm:

  $$v_A = \lvert\dot{y}_A\rvert = l\lvert\cos\theta\rvert\cdot\lvert\dot{\theta}\rvert,\qquad v_B = \lvert\dot{x}_B\rvert = l\lvert\sin\theta\rvert\cdot\lvert\dot{\theta}\rvert$$

  $$v_G^2 = \dot{x}_G^2 + \dot{y}_G^2 = \frac{l^2}{4}\left(\sin^2\theta + \cos^2\theta\right)\dot{\theta}^2 = \frac{l^2}{4}\dot{\theta}^2$$

- Đối chiếu bằng tâm vận tốc tức thời $I$: giao điểm hai đường vuông góc với $\vec{v}_A$ và $\vec{v}_B$ là đỉnh $I(l\cos\theta, l\sin\theta)$ của hình chữ nhật $OBIA$. Suy ra $IA = l\lvert\cos\theta\rvert$, $IB = l\lvert\sin\theta\rvert$ và đường trung tuyến ứng với cạnh huyền tam giác vuông $IAB$ luôn có độ dài không đổi $IG = \frac{l}{2}$ với mọi $\theta$. Động năng thanh $AB$ bằng:

  $$\begin{aligned}
  T_{AB} &= \frac{1}{2} m v_G^2 + \frac{1}{2} J_G \dot{\theta}^2 = \frac{1}{2} J_I \dot{\theta}^2 \\
         &= \frac{1}{2}\left(\frac{1}{12} m l^2 + m \frac{l^2}{4}\right)\dot{\theta}^2 = \frac{1}{6} m l^2 \dot{\theta}^2
  \end{aligned}$$

  Cần lưu ý: tính chất $J_I = \frac{1}{3}ml^2 = \text{const}$ chỉ nghiệm đúng khi hai phương trượt của $A$ và $B$ **vuông góc nhau** và con trượt ở $A, B$ có khối lượng không đáng kể. Nếu con trượt $B$ có khối lượng $m_B \neq 0$, phải cộng thêm $T_B = \frac{1}{2}m_B v_B^2 = \frac{1}{2}m_B l^2\sin^2\theta\,\dot{\theta}^2$ làm xuất hiện hệ số phụ thuộc góc $\theta$.

#### Mẫu 5: Cơ hệ bánh răng–thanh răng và bánh răng hành tinh ăn khớp

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_24.svg" alt="Cơ cấu bánh răng hành tinh ăn khớp không trượt trên bánh trung tâm cố định" class="figure-img" />
  <p class="figure-caption">Hình 11.5: Cơ cấu tay quay OA và bánh răng 2 lăn không trượt trên bánh răng cố định 1 (Hình 2-24 Sách Bài Tập Động Lực Học Chương 2)</p>
</div>

Tại điểm ăn khớp $K$ giữa hai bánh răng hoặc giữa bánh răng và thanh răng, điều kiện truyền động không trượt đòi hỏi hai điểm tiếp xúc thuộc hai khâu có cùng vận tốc tuyệt đối ($\vec{v}_{K_1} = \vec{v}_{K_2}$):
1. **Bánh răng tâm cố định $O$ (bán kính $R$) ăn khớp thanh răng tịnh tiến:**
   Vận tốc điểm ăn khớp $K$ bằng vận tốc thanh răng $v_{\text{tr}}$, suy ra $v_{\text{tr}} = R\omega$.
2. **Bánh răng chuyển động song phẳng (bán kính $R$) lăn không trượt giữa thanh răng dưới cố định và thanh răng trên tịnh tiến:**
   Điểm ăn khớp dưới là tâm vận tốc tức thời $I$ ($v_I = 0$), tâm bánh răng có vận tốc $v_C = R\omega$, còn điểm ăn khớp trên cùng kéo thanh răng trên với vận tốc $v_{\text{tr trên}} = 2R\omega = 2v_C$.
3. **Bánh răng hành tinh (`Thí dụ 2–14` Hình 11.5):**
   Tay quay $OA$ dài $r_1 + r_2$ quay quanh $O$ với $\dot{\varphi} = \omega$ kéo tâm $A$ của bánh răng động 2 (bán kính $r_2$) với vận tốc $v_A = (r_1 + r_2)\omega$. Do bánh răng 1 (bán kính $r_1$) cố định, điểm ăn khớp $K$ là tâm vận tốc tức thời của bánh 2, cho phép suy ra ngay vận tốc góc tuyệt đối của bánh 2:

   $$v_A = r_2 \omega_2 \implies \omega_2 = \frac{r_1 + r_2}{r_2}\omega = \left(1 + \frac{r_1}{r_2}\right)\omega$$

---

### 11.4. Bài toán mẫu kiểm chứng: Đề thi thật `1721` và `1722` (Câu 6, 7, 9)

::: info Đề bài đối chiếu ([Đề `1721` & `1722` — Bài 3, Câu 6, 7, 9](/on-thi/de-thi-that-hcmut#de-1721))
Bản lề cố định $A$ nối thanh mảnh đồng chất $AB$, khớp bản lề $B$ nối tiếp thanh mảnh đồng chất $BC$ (cùng khối lượng $m_1 = 5\text{ kg}$ và cùng chiều dài $AB = BC = l$). Đầu $C$ gắn vào tâm của đĩa tròn đặc đồng chất bán kính $R = 0{,}05\text{ m}$, khối lượng $m_2 = 10\text{ kg}$ lăn không trượt trên mặt phẳng ngang đi qua $A$. Gọi $\theta$ ($15^\circ < \theta < 60^\circ$) là góc nghiêng của thanh $AB$ so với phương ngang (chiều dương ngược chiều kim đồng hồ) và $\omega = \dot{\theta}$. Xác định:
1. Vận tốc góc đại số $\bar{\omega}_1$ của thanh $BC$ và $\bar{\omega}_2$ của đĩa $C$ theo $\omega$.
2. Độ lớn vận tốc khối tâm $G$ của thanh $BC$.
3. Biểu thức động năng toàn cơ hệ $T(\theta, \omega)$ với $l = 0{,}15\text{ m}$ (Đề `1721`) và $l = 0{,}20\text{ m}$ (Đề `1722`).
:::

**Giải tích từng bước:**

1. **Thiết lập liên hệ động học theo tọa độ suy rộng $q = \theta$:**
   Chọn hệ trục $Ax$ nằm ngang hướng sang phải qua $C$, $Ay$ thẳng đứng hướng lên. Do tam giác $ABC$ cân tại $B$ ($AB = BC = l$), góc đáy tại $C$ cũng bằng $\theta$. Khi thanh $AB$ quay ngược chiều kim đồng hồ góc $+\theta$ ($\dot{\theta} = \omega > 0$), thanh $BC$ nghiêng góc $-\theta$ nên quay cùng chiều kim đồng hồ với vận tốc góc đại số:

   $$\bar{\omega}_1 = -\omega$$

   Hoành độ tâm đĩa $C$ là $x_C = 2l\cos\theta \implies \dot{x}_C = -2l\sin\theta \cdot \omega$. Khi $\theta$ tăng ($\omega > 0$), tâm $C$ tiến sang trái với tốc độ $\lvert\dot{x}_C\rvert = 2l\omega\sin\theta$. Vì đĩa $C$ lăn không trượt trên sàn ngang cố định dưới tâm $C$, đĩa $C$ quay **ngược chiều kim đồng hồ** ($\bar{\omega}_2 > 0$):

   $$\begin{aligned}
   \bar{\omega}_2 &= -\frac{\dot{x}_C}{R} = \frac{2l\sin\theta}{R}\omega \\
                  &= \begin{cases}
                  6\omega\sin\theta & \text{(Đề 1721: } l = 0{,}15\text{ m)} \\
                  8\omega\sin\theta & \text{(Đề 1722: } l = 0{,}20\text{ m)}
                  \end{cases}
   \end{aligned}$$

   Kết quả khớp đáp án **`6c`** (Đề `1721`) và **`6a`** (Đề `1722`).

2. **Vận tốc khối tâm $G$ của thanh song phẳng $BC$:**
   Tọa độ trung điểm $G$ của thanh $BC$ là $x_G = l\cos\theta + \frac{l}{2}\cos\theta = \frac{3}{2}l\cos\theta$ và $y_G = \frac{l}{2}\sin\theta$. Đạo hàm theo $t$:

   $$\dot{x}_G = -\frac{3}{2}l\omega\sin\theta, \qquad \dot{y}_G = \frac{1}{2}l\omega\cos\theta$$

   $$\begin{aligned}
   v_G^2 &= \dot{x}_G^2 + \dot{y}_G^2 = \frac{l^2\omega^2}{4}\left(9\sin^2\theta + \cos^2\theta\right) \\
         &= \frac{l^2\omega^2}{4}\left(1 + 8\sin^2\theta\right) = \frac{l^2\omega^2}{4}\left(5 - 4\cos 2\theta\right)
   \end{aligned}$$

   Khai căn hai biểu thức tương đương lượng giác trên cho $v_G = \frac{l}{2}\omega\sqrt{1 + 8\sin^2\theta} = \frac{l}{2}\omega\sqrt{5 - 4\cos 2\theta}$, khớp đồng thời hai phương án của Câu 7 (`7e` ở Đề `1721` với $\frac{l}{2} = 0{,}075\text{ m}$, và `7d` ở Đề `1722` với $\frac{l}{2} = 0{,}10\text{ m}$).

3. **Tổng hợp động năng toàn cơ hệ $T = T_{AB} + T_{BC} + T_C$:**
   - Thanh $AB$ quay quanh $A$ cố định: $T_{AB} = \frac{1}{6}m_1 l^2\omega^2$.
   - Thanh $BC$ chuyển động song phẳng (Định lý König với $J_G = \frac{1}{12}m_1 l^2$):

     $$\begin{aligned}
     T_{BC} &= \frac{1}{2}m_1 v_G^2 + \frac{1}{2}\left(\frac{1}{12}m_1 l^2\right)\omega^2 \\
            &= m_1 l^2\omega^2\left(\frac{5 - 4\cos 2\theta}{8} + \frac{1}{24}\right) = m_1 l^2\omega^2\left(\frac{2}{3} - \frac{1}{2}\cos 2\theta\right)
     \end{aligned}$$

   - Đĩa tròn đặc $C$ lăn không trượt trên sàn ngang ($m_2 = 2m_1 = 10\text{ kg}$):

     $$\begin{aligned}
     T_C &= \frac{3}{4}m_2 v_C^2 = \frac{3}{4}(2m_1)\left(4l^2\sin^2\theta\cdot\omega^2\right) \\
         &= 6m_1 l^2\left(\frac{1 - \cos 2\theta}{2}\right)\omega^2 = 3m_1 l^2(1 - \cos 2\theta)\omega^2
     \end{aligned}$$

   - Cộng ba thành phần với $m_1 = 5\text{ kg}$:

     $$\begin{aligned}
     T(\theta, \omega) &= m_1 l^2\left[\left(\frac{1}{6} + \frac{2}{3} + 3\right) - \left(\frac{1}{2} + 3\right)\cos 2\theta\right]\omega^2 \\
                       &= 5l^2\left(\frac{23}{6} - \frac{7}{2}\cos 2\theta\right)\omega^2
     \end{aligned}$$

   Thay $l = 0{,}15\text{ m}$ được $5l^2 = 0{,}1125$ (Đề `1721` — đáp án **`9d`**); thay $l = 0{,}20\text{ m}$ được $5l^2 = 0{,}2$ (Đề `1722` — đáp án **`9d`**).

---

## Ngày 12: Công Nguyên Tố, Công Hữu Hạn, Thế Năng & Phân Tích Lỗi Sai Lực Thế {#ngay-12}

### 12.1. Chứng minh biểu thức công của trọng lực và ngẫu lực ngoại lực

Công nguyên tố của lực $\vec{F}$ đặt tại điểm $M$ có vectơ định vị $\vec{r}$ và vận tốc $\vec{v} = \frac{d\vec{r}}{dt}$ trong vi phân thời gian $dt$ là:

$$d'A = \vec{F}\cdot d\vec{r} = \vec{F}\cdot\vec{v}\,dt = F_x\,dx + F_y\,dy + F_z\,dz$$

*(Ký hiệu $d'A$ nhấn mạnh công nguyên tố nói chung là dạng vi phân không toàn phần đối với các lực không thế).* Trên cung quỹ đạo hữu hạn từ vị trí đầu $M_1$ đến vị trí cuối $M_2$, công hữu hạn là tích phân đường loại hai: $A_{12} = \int_{\widehat{M_1 M_2}} \vec{F}\cdot d\vec{r}$.

#### a) Công của trọng lực đối với chất điểm và cơ hệ

<div class="figure-container">
  <img src="/figures/dong-luc-hoc/hinh_3_15.svg" alt="Chất điểm chịu tác dụng trọng lực di chuyển trên đường cong không gian" class="figure-img" />
  <p class="figure-caption">Hình 12.1: Chất điểm M chịu tác dụng của trọng lực P di chuyển dọc đường cong từ M1 đến M2 (Hình 3-15 Giáo trình Động Lực Học Chương 3)</p>
</div>

Chọn hệ trục Đề-các $Oxyz$ với trục $Oz$ hướng thẳng đứng lên trên. Trọng lực tác dụng lên phần tử $M_k$ khối lượng $m_k$ có hình chiếu $P_{kx} = 0$, $P_{ky} = 0$, $P_{kz} = -m_k g$. Khi toàn cơ hệ (tổng khối lượng $M = \sum_{k=1}^{N} m_k$, cao độ khối tâm $z_C = \frac{1}{M}\sum_{k=1}^{N} m_k z_k$) dịch chuyển từ vị trí $(1)$ sang vị trí $(2)$:

$$\begin{aligned}
A_P &= \sum_{k=1}^{N} \int_{z_{k1}}^{z_{k2}} (-m_k g)\,dz_k \\
    &= -g\left(\sum_{k=1}^{N} m_k z_{k2} - \sum_{k=1}^{N} m_k z_{k1}\right) \\
    &= -M g \left(z_{C2} - z_{C1}\right) = \pm M g \left\lvert\Delta h_C\right\rvert
\end{aligned}$$

Công của hệ trọng lực không phụ thuộc hình dạng quỹ đạo của từng chất điểm mà chỉ phụ thuộc hiệu cao độ vị trí đầu và cuối của khối tâm $C$: dương ($+$) khi khối tâm hạ thấp ($z_{C2} < z_{C1}$), âm ($-$) khi khối tâm nâng cao ($z_{C2} > z_{C1}$), và bằng $0$ khi khối tâm dịch chuyển ngang ($z_{C2} = z_{C1}$).

#### b) Công của ngẫu lực ngoại lực tác dụng lên vật rắn

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_15.svg" alt="Ngẫu lực có vectơ mômen M tác dụng lên vật rắn quay quanh trục" class="figure-img" />
  <p class="figure-caption">Hình 12.2: Vật rắn chịu tác dụng ngẫu lực có vectơ mômen M (Hình 2-15 Sách Bài Tập Động Lực Học Chương 2)</p>
</div>

Xét vật rắn chuyển động song phẳng (hoặc quay quanh trục cố định $Oz$) với vectơ vận tốc góc $\vec{\omega} = \dot{\varphi}\,\vec{k}$, chịu tác dụng một ngẫu lực gồm hai lực song song ngược chiều $\vec{F}_A = \vec{F}$ đặt tại $A$ và $\vec{F}_B = -\vec{F}$ đặt tại $B$ nằm trong mặt phẳng chuyển động. Thay $\vec{v}_A = \vec{v}_B + \vec{\omega}\times\overrightarrow{BA}$ vào tổng công nguyên tố của cặp lực:

$$\begin{aligned}
d'A_M &= \vec{F}\cdot\vec{v}_A\,dt + (-\vec{F})\cdot\vec{v}_B\,dt \\
      &= \vec{F}\cdot\left(\vec{\omega}\times\overrightarrow{BA}\right)dt = \left(\overrightarrow{BA}\times\vec{F}\right)\cdot\vec{\omega}\,dt \\
      &= \vec{M}\cdot\vec{\omega}\,dt = M_z\,d\varphi
\end{aligned}$$

Lấy tích phân từ góc định vị đầu $\varphi_1$ đến góc cuối $\varphi_2$:

$$A_M = \int_{\varphi_1}^{\varphi_2} M_z(\varphi)\,d\varphi$$

Trong trường hợp mômen đại số $M_z = \text{const}$, ta có $A_M = M_z(\varphi_2 - \varphi_1)$: công mang dấu dương nếu chiều tác dụng của ngẫu lực trùng với chiều góc quay thực tế từ $\varphi_1$ đến $\varphi_2$, và mang dấu âm nếu ngược chiều.

---

### 12.2. Công của lực đàn hồi lò xo khi $\Delta l_0 \neq 0$ & Chứng minh sai lầm toán học phổ biến

<div class="figure-container">
  <img src="/figures/dong-luc-hoc/hinh_3_22.svg" alt="Độ biến dạng của lò xo tại vị trí cân bằng tĩnh và vị trí bất kỳ" class="figure-img" />
  <p class="figure-caption">Hình 12.3: Khảo sát độ biến dạng của lò xo so với trạng thái tự nhiên khi có biến dạng ban đầu khác không (Hình 3-22 Giáo trình Động Lực Học Chương 3)</p>
</div>

Xét lò xo đàn hồi tuyến tính có độ cứng $k$ ($[\text{N/m}]$) và chiều dài tự nhiên (khi chưa chịu lực) là $l_{\text{tn}}$. Tại vị trí bất kỳ có chiều dài $l$, đặt biến số $u = l - l_{\text{tn}}$ là **độ biến dạng đại số tính từ chiều dài tự nhiên** ($u > 0$ khi dãn, $u < 0$ khi nén).

Theo định luật Hooke, hình chiếu lực đàn hồi của lò xo lên chiều tăng của $u$ là $F_{\text{lx}}(u) = -k u$, nên công nguyên tố của lực đàn hồi trong biến thiên $du = dl$ luôn bằng $d'A_{\text{lx}} = -k u\,du$. Khi lò xo chuyển từ trạng thái đầu $(1)$ có độ biến dạng $u_1 = \Delta l_1$ sang trạng thái cuối $(2)$ có độ biến dạng $u_2 = \Delta l_2$:

$$\begin{aligned}
A_{\text{lx}} &= \int_{\Delta l_1}^{\Delta l_2} (-k u)\,du = -\frac{1}{2} k \left[u^2\right]_{\Delta l_1}^{\Delta l_2} \\
              &= -\frac{1}{2} k \left(\Delta l_2^2 - \Delta l_1^2\right) = \frac{1}{2} k \left(\Delta l_1^2 - \Delta l_2^2\right)
\end{aligned}$$

::: danger Chứng minh giải tích vì sao công thức $-\frac{1}{2}k(\Delta l_2 - \Delta l_1)^2$ là SAI khi $\Delta l_1 = \Delta l_0 \neq 0$
Giả sử tại vị trí xuất phát $(1)$, lò xo đã có biến dạng ban đầu $\Delta l_1 = \Delta l_0 \neq 0$, và trong quá trình chuyển động đầu lò xo dãn thêm một đoạn $s = \Delta l_2 - \Delta l_0 \neq 0$ (tức $\Delta l_2 = \Delta l_0 + s$).
- **Tính theo tích phân định luật Hooke chính xác:**
  $$\begin{aligned}
  A_{\text{lx}}^{\text{đúng}} &= -\frac{1}{2}k\left[(\Delta l_0 + s)^2 - \Delta l_0^2\right] \\
                               &= -k \Delta l_0 \cdot s - \frac{1}{2} k s^2
  \end{aligned}$$
- **Tính theo công thức ngộ nhận** $A_{\text{lx}}^{\text{sai}} = -\frac{1}{2}k(\Delta l_2 - \Delta l_1)^2$ $= -\frac{1}{2}k s^2$:
  Hiệu số giữa biểu thức đúng và biểu thức sai là:
  $$\begin{aligned}
  \Delta A_{\text{sai số}} &= A_{\text{lx}}^{\text{đúng}} - A_{\text{lx}}^{\text{sai}} \\
                           &= -k \Delta l_0 \cdot s \neq 0 \quad (\forall\,\Delta l_0 \neq 0,\; s \neq 0)
  \end{aligned}$$

**Nguyên nhân toán học và cơ học:** Hàm lực đàn hồi $F_{\text{lx}}(u) = -ku$ là hàm bậc nhất đi qua gốc $u = 0$ chứ không bằng $0$ tại $u = \Delta l_0$. Tích phân xác định $\int_{\Delta l_1}^{\Delta l_2} (-ku)\,du$ biểu thị diện tích đại số của **hình thang** giới hạn bởi hai tung độ $-k\Delta l_1$ và $-k\Delta l_2$:

$$-\frac{k\Delta l_1 + k\Delta l_2}{2}(\Delta l_2 - \Delta l_1) = -\frac{1}{2}k\left(\Delta l_2^2 - \Delta l_1^2\right)$$

Viết nhầm $-\frac{1}{2}k(\Delta l_2 - \Delta l_1)^2$ đồng nghĩa với việc tự ý gán lực căng đầu $F_0 = -k\Delta l_0 = 0$ và đánh mất toàn bộ công của thành phần lực căng tĩnh ban đầu $-k\Delta l_0 \cdot s$. Biểu thức hiệu bình phương $\frac{1}{2}k(\Delta l_1^2 - \Delta l_2^2)$ chỉ rút gọn thành $-\frac{1}{2}k\Delta l_2^2$ trong trường hợp duy nhất $\Delta l_1 = 0$ (vị trí đầu trùng với trạng thái lò xo tự nhiên).
:::

---

### 12.3. Phân biệt công của lực ma sát trượt động và lực ma sát nghỉ khi lăn không trượt

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_25.svg" alt="Tời kéo vật A trượt lên mặt phẳng nghiêng có hệ số ma sát trượt f" class="figure-img" />
  <p class="figure-caption">Hình 12.4: Vật A trượt trên mặt phẳng nghiêng góc alpha có hệ số ma sát trượt động f (Hình 2-25 Sách Bài Tập Động Lực Học Chương 2)</p>
</div>

Trong bài toán cơ hệ nhiều vật, sai lầm thường gặp là nhầm lẫn khả năng sinh công giữa tiếp xúc trượt và tiếp xúc lăn không trượt:

1. **Ma sát trượt động (khi vận tốc trượt tương đối tại tiếp điểm $\vec{v}_{\text{tr}} \neq \vec{0}$):**
   Theo định luật Coulomb về ma sát trượt động, lực ma sát trượt tác dụng lên vật có độ lớn $F_{\text{ms}} = f N$ và luôn hướng ngược chiều vectơ vận tốc trượt tương đối $\vec{v}_{\text{tr}}$ ($\vec{F}_{\text{ms}} = -f N \frac{\vec{v}_{\text{tr}}}{\lvert\vec{v}_{\text{tr}}\rvert}$). Công nguyên tố trên nền cố định bằng:

   $$\begin{aligned}
   d'A_{\text{ms}} &= \vec{F}_{\text{ms}} \cdot \vec{v}_{\text{tr}}\,dt \\
                   &= -f N \left\lvert\vec{v}_{\text{tr}}\right\rvert dt = -f N\,ds < 0
   \end{aligned}$$

   Nếu áp lực pháp tuyến $N$ không đổi dọc quãng đường trượt thực tế $s$ (ví dụ vật $A$ khối lượng $m$ trượt dọc mặt nghiêng cố định góc $\alpha$ ở Hình 12.4 có $N = mg\cos\alpha = \text{const}$), công hữu hạn là:

   $$A_{\text{ms}} = -f N \cdot s = -f m g \cos\alpha \cdot s$$

   Lực ma sát trượt là **lực tiêu tán (không có thế)**: công phụ thuộc vào tổng chiều dài đường đi $s$ chứ không chỉ phụ thuộc vị trí đầu–cuối.

2. **Ma sát nghỉ tại điểm tiếp xúc $I$ của vật lăn không trượt:**

<div class="figure-container">
  <img src="/figures/dong-luc-hoc/hinh_3_18.svg" alt="Rơmoóc có hai bánh xe lăn không trượt trên mặt đường nằm ngang" class="figure-img" />
  <p class="figure-caption">Hình 12.5: Các bánh xe lăn không trượt trên nền đường cố định có vận tốc điểm tiếp xúc bằng không (Hình 3-18 Giáo trình Động Lực Học Chương 3)</p>
</div>

   Khi bánh xe hoặc con lăn lăn không trượt trên mặt tựa cố định (Hình 12.5), bản thân lực ma sát nghỉ $\vec{F}_{\text{msn}}$ tại điểm tiếp xúc $I$ nói chung **khác không** ($\vec{F}_{\text{msn}} \neq \vec{0}$, chính lực này tạo mômen làm bánh xe quay có gia tốc góc). Tuy nhiên, điều kiện động học lăn không trượt bắt buộc điểm tiếp xúc $I$ thuộc vật lăn là tâm vận tốc tức thời ($\vec{v}_I = \vec{0}$) tại mọi thời điểm $t$. Do đó công nguyên tố và công hữu hạn của $\vec{F}_{\text{msn}}$ triệt tiêu đồng nhất:

   $$d'A_{\text{msn}} = \vec{F}_{\text{msn}} \cdot \vec{v}_I\,dt = \vec{F}_{\text{msn}} \cdot \vec{0}\,dt = 0 \implies A_{\text{msn}} = 0$$

   *Mở rộng cho mặt tựa chuyển động:* Nếu con lăn lăn không trượt trên mặt nghiêng của một lăng trụ đang chuyển động với vận tốc $\vec{v}_{\text{lt}}$ (như [Đề `1721` Bài 4](/on-thi/de-thi-that-hcmut#de-1721)), điều kiện không trượt cho $\vec{v}_I = \vec{v}_{\text{lt}}$. Khi xét toàn cơ hệ gồm cả con lăn và lăng trụ, cặp nội lực ma sát nghỉ trực đối $(\vec{F}_{\text{msn}}, -\vec{F}_{\text{msn}})$ có tổng công nguyên tố bằng $\vec{F}_{\text{msn}}\cdot\vec{v}_I\,dt - \vec{F}_{\text{msn}}\cdot\vec{v}_{\text{lt}}\,dt$, rút gọn thành $\vec{F}_{\text{msn}}\cdot(\vec{v}_I - \vec{v}_{\text{lt}})dt = 0$.

---

### 12.4. Hàm thế năng $\Pi(q)$ và Điều kiện biên kiểm toán $q = q_0 \implies \sum A(q_0) = 0$

#### a) Thế năng và tích phân năng lượng trong trường lực thế

Đối với hệ lực thế (trọng lực, lực đàn hồi lò xo thẳng, ngẫu lực đàn hồi lò xo xoắn $M = -c\varphi$), công nguyên tố là vi phân toàn phần âm của hàm thế năng $\Pi(q)$: $d'A^{(c)} = -d\Pi(q)$. Khi cơ hệ chuyển từ vị trí đầu $q_0$ đến vị trí bất kỳ $q$, tổng công các lực thế bằng độ giảm thế năng:

$$A_{q_0 \to q}^{(c)} = \Pi(q_0) - \Pi(q)$$

Nếu mọi lực sinh công trên cơ hệ đều là lực thế ($\sum A^{\text{không thế}} = 0$), Định lý biến thiên động năng $T(q, \dot{q}) - T(q_0, \dot{q}_0) = \Pi(q_0) - \Pi(q)$ dẫn trực tiếp đến **Định luật bảo toàn cơ năng**:

$$E = T(q, \dot{q}) + \Pi(q) = T(q_0, \dot{q}_0) + \Pi(q_0) = \text{const}$$

#### b) Tính chất biên bảo toàn $q = q_0 \implies \sum A(q_0) = 0$ để tự kiểm toán tổng công

Đối với cơ hệ 1 bậc tự do chuyển động đơn điệu từ cấu hình ban đầu $q = q_0$ đến cấu hình $q$, tổng công hữu hạn của tất cả các lực hoạt động được xác định bởi tích phân xác định của lực suy rộng $Q(u)$:

$$\begin{aligned}
\sum A(q) &= \int_{q_0}^{q} Q(u)\,du \\
          &= \left[\Pi(q_0) - \Pi(q)\right] + \int_{q_0}^{q} Q_{\text{không thế}}(u)\,du
\end{aligned}$$

Theo tính chất giải tích hiển nhiên của tích phân xác định khi cận trên trùng với cận dưới ($\int_{q_0}^{q_0} Q(u)\,du \equiv 0$), mọi biểu thức giải tích đúng của tổng công $\sum A(q)$ bắt buộc thỏa mãn **điều kiện biên kiểm toán**:

$$q = q_0 \implies \sum A(q_0) = 0$$

Trong phòng thi, nếu biểu thức $\sum A(q)$ vừa thiết lập không triệt tiêu khi thay $q = q_0$, chắc chắn đã xảy ra một trong ba lỗi đại số: (1) bỏ sót hằng số thế năng đầu $\frac{1}{2}k\Delta l_0^2$ hoặc $\pm mg y_{C0}$; (2) khai triển thiếu số hạng chéo $2ab$ trong bình phương biến dạng lò xo; hoặc (3) ngược dấu giới hạn tích phân.

::: info Kiểm chứng thực tế trên Đề `1721` Câu 8 & Đề `0001/2016` Câu 4
1. **[Đề `1721` Câu 8](/on-thi/de-thi-that-hcmut#de-1721)** ($m_1 = 5\text{ kg}$, $l = 0{,}15\text{ m}$, $K = 500\text{ N/m}$ không biến dạng tại $\theta = 60^\circ$, đi từ $\theta_0 = 30^\circ$ đến $\theta < 60^\circ$, $g = 10\text{ m/s}^2$):
   - Chiều dài tự nhiên lò xo: $l_{\text{tn}} = 2l\cos 60^\circ = l$. Biến dạng tại góc $\theta$: $\Delta l(\theta) = l(2\cos\theta - 1)$, tại $\theta_0 = 30^\circ$: $\Delta l_0 = l(\sqrt{3} - 1) \neq 0$.
   - Tổng công trọng lực hai thanh và lực đàn hồi lò xo:
     $$\begin{aligned}
     \sum A(\theta) &= -2m_1 g\frac{l}{2}(\sin\theta - \sin 30^\circ) + \frac{1}{2}K\left[\Delta l_0^2 - \Delta l(\theta)^2\right] \\
                    &= -7{,}5(\sin\theta - 0{,}5) + 5{,}625\left[(3 - 2\sqrt{3}) + 4\cos\theta - 4\cos^2\theta\right] \\
                    &\approx 1{,}14 - 7{,}5\sin\theta + 22{,}5\cos\theta - 22{,}5\cos^2\theta\text{ (J)}
     \end{aligned}$$
   - **Kiểm toán biên tại $\theta = \theta_0 = 30^\circ$:** Thay $\sin 30^\circ = 0{,}5$ và $\cos 30^\circ = \frac{\sqrt{3}}{2}$ vào phương án **`8b`** cho $1{,}14 - 3{,}75 + 19{,}4856 - 16{,}875 \approx 0\text{ J}$, trong khi các phương án nhiễu `8c, 8d, 8e` cho giá trị khác không ($+2{,}66\text{ J}$, $+12{,}66\text{ J}$, $+7{,}50\text{ J}$) nên bị bác bỏ ngay về mặt toán học.
2. **[Đề `0001/2016` Câu 4](/on-thi/de-thi-that-hcmut#de-2016)** (thanh $AB$ dài $l = 0{,}4\text{ m}$, $m = 10\text{ kg}$, lò xo $K = 800\text{ N/m}$ tự nhiên tại $\theta = 0^\circ$, đi từ $\theta_0 = 30^\circ$ về $\theta < 30^\circ$, $g = 9{,}81\text{ m/s}^2$):
   $$\begin{aligned}
   \sum A(\theta) &= \frac{1}{2}(800)\left(0{,}4^2\sin^2 30^\circ - 0{,}4^2\sin^2\theta\right) \\
                  &\quad - 10(9{,}81)(0{,}2)(\sin 30^\circ - \sin\theta) \\
                  &= 6{,}19 + 19{,}62\sin\theta - 64\sin^2\theta\text{ (J)}
   \end{aligned}$$
   Thay $\theta = 30^\circ$: $\sum A(30^\circ) = 6{,}19 + 9{,}81 - 16 = 0\text{ J}$ (xác nhận phương án **`4b`**; phương án `4a` ghi hằng số $1{,}14$ cho $\sum A(30^\circ) = -5{,}05\text{ J} \neq 0$).
:::

---

## Ngày 13: Hai Dạng Định Lý Động Năng ($T - T_0 = \sum A$ và $\frac{dT}{dt} = \sum N$) Thực Chiến {#ngay-13}

### 13.1. Cơ sở giải tích và phạm vi áp dụng của hai dạng Định lý Động năng

Xuất phát từ phương trình Newton cho chất điểm thứ $k$ của cơ hệ: $m_k \frac{d\vec{v}_k}{dt} = \vec{F}_k^e + \vec{F}_k^i$. Nhân vô hướng hai vế với $\vec{v}_k$ và lấy tổng theo $k = \overline{1, N}$, chú ý đạo hàm $\frac{d}{dt}\left(\frac{1}{2}m_k v_k^2\right)$ bằng $m_k \vec{v}_k \cdot \frac{d\vec{v}_k}{dt}$, ta thu được hai dạng tương đương của Định lý biến thiên động năng:

1. **Dạng đạo hàm theo thời gian (dạng công suất — tìm gia tốc $a, \varepsilon$ và PTVP chuyển động):**

   $$\frac{dT}{dt} = \sum N^e + \sum N^i = \sum_{k} \vec{F}_k \cdot \vec{v}_k + \sum_{j} \vec{M}_j \cdot \vec{\omega}_j$$

   Đối với cơ hệ gồm các vật rắn tuyệt đối nối với nhau bằng liên kết lý tưởng dừng (dây không dãn, khớp bản lề trơn, ăn khớp không trượt), tổng công suất của các phản lực liên kết và nội lực cứng bằng không; chỉ còn công suất của ngoại lực hoạt động, lực đàn hồi lò xo nội và lực ma sát trượt động (hoặc lực cản nhớt $F_c = -\beta v$).

2. **Dạng tích phân hữu hạn (tìm vận tốc $v, \omega$ theo vị trí $q$):**
   Tích phân hai vế phương trình vi phân $dT = \sum d'A^e + \sum d'A^i$ từ thời điểm đầu $t_0$ (cấu hình $q_0$, động năng $T_0$) đến thời điểm $t$ (cấu hình $q$, động năng $T$):

   $$T - T_0 = \sum A_{q_0 \to q}^e + \sum A_{q_0 \to q}^i$$

   *Lưu ý phân giới hạn phương pháp:* Dạng hữu hạn chỉ áp dụng trực tiếp khi tính được tích phân công theo tọa độ $q$. Nếu hệ chịu lực cản phụ thuộc vận tốc (chẳng hạn mômen cản $M_c = -\beta\omega$ ở `Thí dụ 2–15` hoặc lực cản môi trường $F_c = -\beta v$ ở `Thí dụ 3–6`), không thể tính $\int \beta v\,ds$ trước khi biết $v(s)$; khi đó bắt buộc viết dạng đạo hàm $\frac{dT}{dt} = \sum N$ để lập phương trình vi phân rồi phân ly biến số tích phân.

---

### 13.2. Kỹ thuật chuẩn hóa $T = \frac{1}{2}M_{\text{td}}(q)\dot{q}^2$ và đạo hàm chứa số hạng $\dot{q}^3$

Xét cơ hệ dừng 1 bậc tự do có vị trí xác định bởi tọa độ suy rộng $q(t)$. Mọi vận tốc khối tâm và vận tốc góc trong hệ đều biểu diễn tuyến tính thuần nhất qua $\dot{q}$, do đó động năng toàn hệ luôn đưa được về dạng chuẩn tắc:

$$T(q, \dot{q}) = \frac{1}{2} M_{\text{td}}(q)\,\dot{q}^2$$

trong đó $M_{\text{td}}(q) > 0$ là **khối lượng tương đương (thu gọn)** nếu $q$ có thứ nguyên độ dài ($\text{kg}$), hoặc **mômen quán tính tương đương (thu gọn)** nếu $q$ là góc quay ($\text{kg}\cdot\text{m}^2$).

Khi lấy đạo hàm toàn phần của $T(q(t), \dot{q}(t))$ theo thời gian $t$, cả hai thừa số $M_{\text{td}}(q)$ và $\dot{q}^2$ đều phụ thuộc $t$ thông qua $q(t)$. Áp dụng quy tắc đạo hàm hàm hợp và đạo hàm của tích:

$$\begin{aligned}
\frac{dT}{dt} &= \frac{1}{2}\frac{d M_{\text{td}}(q)}{dt}\,\dot{q}^2 + \frac{1}{2} M_{\text{td}}(q)\cdot 2\dot{q}\ddot{q} \\
              &= M_{\text{td}}(q)\,\ddot{q}\dot{q} + \frac{1}{2}\frac{d M_{\text{td}}(q)}{dq}\,\dot{q}^3
\end{aligned}$$

Mặt khác, tổng công suất mọi lực tác dụng lên hệ có dạng $\sum N = Q(q, \dot{q})\,\dot{q}$ (nếu tính được tổng công hữu hạn $\sum A(q)$ chỉ phụ thuộc vị trí thì $Q(q) = \frac{d(\sum A)}{dq}$). Cân bằng $\frac{dT}{dt} = \sum N$ và giản ước nhân tử chung $\dot{q} \neq 0$ khi cơ hệ đang chuyển động:

$$M_{\text{td}}(q)\,\ddot{q} + \frac{1}{2}\frac{d M_{\text{td}}(q)}{dq}\,\dot{q}^2 = Q(q, \dot{q})$$

::: danger Cảnh báo lỗi bỏ sót số hạng $\frac{1}{2}\frac{dM_{\text{td}}}{dq}\dot{q}^3$ khi $M_{\text{td}}$ phụ thuộc tọa độ $q$
- **Khi $M_{\text{td}} = \text{const}$** (như hệ ròng rọc–tời, con lăn trên mặt phẳng, con lắc vật lý, hoặc thanh đơn độc trượt trong hai rãnh vuông góc không gắn con trượt nặng): $\frac{dM_{\text{td}}}{dq} = 0$, phương trình rút gọn thành $M_{\text{td}}\ddot{q} = Q(q, \dot{q})$.
- **Khi $M_{\text{td}}(q)$ biến thiên theo $q$** (như cơ cấu culít, cơ cấu tay quay–thanh truyền, hệ hai thanh nối con trượt hoặc đĩa lăn ở Đề `1721`/`1722` Bài 3): $\frac{dM_{\text{td}}}{dq} \neq 0$. Nếu tự ý đưa $M_{\text{td}}(q)$ ra ngoài dấu đạo hàm như hằng số sẽ làm mất hoàn toàn số hạng $\frac{1}{2}\frac{dM_{\text{td}}}{dq}\dot{q}^2$. Số hạng này chỉ bằng $0$ tại đúng thời điểm khởi hành từ trạng thái nghỉ ($\dot{q}_0 = 0$), và khác không tại mọi vị trí đang chuyển động ($\dot{q} \neq 0$).
:::

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_28.svg" alt="Cơ cấu culít gồm tay quay OA và máng trượt tịnh tiến ngang" class="figure-img" />
  <p class="figure-caption">Hình 13.1: Cơ cấu culít có mômen quán tính thu gọn phụ thuộc góc quay phi (Hình 2-28 — Thí dụ 2-17 Sách Bài Tập Động Lực Học Chương 2)</p>
</div>

**Minh họa chuẩn qua `Thí dụ 2–17` ([SBT Động Lực Học Chương 2](/bai-tap/dong-luc-hoc/chuong-2)):**
Trên Hình 13.1, tay quay $OA = a$ (mômen quán tính $J_O$, chịu ngẫu lực $M$) quay góc $q = \varphi$ kéo máng trượt khối lượng $m$ tịnh tiến ngang (chịu lực cản ngang $F$). Hoành độ máng trượt là $x = a\cos\varphi \implies v = \dot{x} = -a\sin\varphi\,\dot{\varphi}$.
1. **Đưa động năng về dạng chuẩn $T = \frac{1}{2}M_{\text{td}}(\varphi)\dot{\varphi}^2$:**

   $$\begin{aligned}
   T &= \frac{1}{2}J_O\dot{\varphi}^2 + \frac{1}{2}m\left(-a\sin\varphi\,\dot{\varphi}\right)^2 \\
     &= \frac{1}{2}\underbrace{\left(J_O + m a^2\sin^2\varphi\right)}_{M_{\text{td}}(\varphi)}\dot{\varphi}^2
   \end{aligned}$$

2. **Đạo hàm theo $t$ giữ đủ số hạng $\dot{\varphi}^3$:**
   Ta có $\frac{dM_{\text{td}}}{d\varphi} = 2 m a^2\sin\varphi\cos\varphi = m a^2\sin 2\varphi$. Do đó:

   $$\frac{dT}{dt} = \left(J_O + m a^2\sin^2\varphi\right)\ddot{\varphi}\dot{\varphi} + \frac{1}{2} m a^2\sin 2\varphi\,\dot{\varphi}^3$$

3. **Cân bằng với công suất $\sum N = (M - F a\sin\varphi)\dot{\varphi}$ (chia cho $\dot{\varphi} \neq 0$):**

   $$\left(J_O + m a^2\sin^2\varphi\right)\ddot{\varphi} + \frac{1}{2} m a^2\sin 2\varphi\,\dot{\varphi}^2 + F a\sin\varphi - M = 0$$

---

### 13.3. Giải mẫu chi tiết trọn bộ 4 câu liên hoàn từ đề thi thật HCMUT

#### Bài giải mẫu 13.1: Hệ con lắc ghép hàn cứng ([Đề `1821` — Bài 2, Câu 5–8](/on-thi/de-thi-that-hcmut#de-1821))

<div class="figure-container">
  <img src="/figures/dong-luc-hoc/hinh_3_23.svg" alt="Con lắc vật lý quay quanh trục nằm ngang cố định O dưới tác dụng trọng lực" class="figure-img" />
  <p class="figure-caption">Hình 13.2: Mô hình vật rắn quay quanh trục nằm ngang cố định O trong trường trọng lực (Hình 3-23 Giáo trình Động Lực Học Chương 3)</p>
</div>

**Tóm tắt thông số Đề `1821` (Câu 5–8):** Thanh mảnh đồng chất $OA$ khối lượng $m_1 = m_0 = 2\text{ kg}$ hàn cứng với vật nặng khối lượng $m_2 = 2m_0 = 4\text{ kg}$ có khối tâm $G$ và bán kính quán tính đối với $G$ là $\rho = 0{,}3\text{ m}$ ($O, A, G$ thẳng hàng; $OA = AG = L = 0{,}2\text{ m}$). Hệ quay quanh chốt ngang cố định $O$, thả không vận tốc đầu từ góc $\phi^* = 30^\circ$ hợp với trục ngang $Ox$ (trục $Oy$ hướng thẳng đứng xuống dưới, $g = 9{,}81\text{ m/s}^2$).

1. **Câu 5 — Tính động năng $T(\omega)$:**
   Toàn hệ là một vật rắn ghép quay quanh trục cố định $O$. Áp dụng định lý Huygens–Steiner cho thanh $OA$ ($OC_1 = \frac{L}{2}$) và vật nặng ($OG = 2L$):

   $$\begin{aligned}
   J_O &= \frac{1}{3}m_1 L^2 + m_2\left(\rho^2 + OG^2\right) \\
       &= \frac{1}{3}(2)(0{,}2)^2 + 4\left(0{,}3^2 + 0{,}4^2\right) = \frac{2}{75} + 1 = \frac{77}{75}\text{ kg}\cdot\text{m}^2
   \end{aligned}$$

   Suy ra $T = \frac{1}{2}J_O\omega^2 = \frac{77}{150}\omega^2\text{ (J)}$ (**Đáp án `5a`**; đây là hệ có $M_{\text{td}} = J_O = \frac{77}{75} = \text{const}$).

2. **Câu 6 — Tổng công ngoại lực $\sum A$ từ $\phi^* = 30^\circ$ đến $\phi = 90^\circ$:**
   Phản lực tại bản lề $O$ không sinh công. Tung độ (hướng xuống) của tâm thanh và của $G$ lần lượt là $y_{C_1} = \frac{L}{2}\sin\phi$ và $y_G = 2L\sin\phi$:

   $$\begin{aligned}
   \sum A(\phi) &= \left(m_1 g \frac{L}{2} + m_2 g \cdot 2L\right)\left(\sin\phi - \sin\phi^*\right) \\
                &= \left(2 \cdot 0{,}1 + 4 \cdot 0{,}4\right)\cdot 9{,}81 \cdot \left(\sin\phi - 0{,}5\right) \\
                &= 17{,}658\left(\sin\phi - 0{,}5\right)\text{ (J)}
   \end{aligned}$$

   Kiểm toán biên: $\sum A(30^\circ) = 0\text{ J}$. Thay $\phi = 90^\circ$: $\sum A(90^\circ) = 17{,}658 \times 0{,}5 = 8{,}829\text{ J}$ (**Đáp án `6c`**).

3. **Câu 7 — Gia tốc góc $\varepsilon(\phi)$ từ phương trình công suất $\frac{dT}{dt} = \sum N$:**
   Đạo hàm theo thời gian với $\dot{\phi} = \omega$, $\ddot{\phi} = \varepsilon$ và $\sum N = \frac{d(\sum A)}{d\phi}\omega$:

   $$\begin{aligned}
   \frac{77}{75}\omega\varepsilon &= 17{,}658\cos\phi \cdot \omega \\
   \implies \varepsilon(\phi) &= \frac{17{,}658 \times 75}{77}\cos\phi \approx 17{,}199\cos\phi\text{ (rad/s}^2\text{)}
   \end{aligned}$$

   Đối chiếu khớp **Đáp án `7d`**.

4. **Câu 8 — Độ lớn vận tốc điểm $G$ khi $\phi = 90^\circ$:**
   Áp dụng dạng hữu hạn $T - T_0 = \sum A(90^\circ)$ với $T_0 = 0$:

   $$\frac{77}{150}\omega^2 = 8{,}829 \implies \omega = \sqrt{\frac{8{,}829 \times 150}{77}} \approx 4{,}1472\text{ rad/s}$$

   Do $G$ thuộc vật quay quanh trục cố định $O$ với bán kính $OG = 2L = 0{,}4\text{ m}$:

   $$v_G = OG \cdot \omega = 0{,}4 \times 4{,}1472 \approx 1{,}659\text{ m/s} \implies \textbf{Đáp án 8b}$$

---

#### Bài giải mẫu 13.2: Thanh song phẳng trượt trong hai rãnh vuông góc ([Đề `0001/2016` & `0002/2016` Câu 3–6](/on-thi/de-thi-that-hcmut#de-2016), đối chiếu mô hình [SBT ĐLH Ch.2](/bai-tap/dong-luc-hoc/chuong-2))

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_2_49.svg" alt="Cơ hệ 1 bậc tự do khảo sát vận tốc theo tọa độ suy rộng" class="figure-img" />
  <p class="figure-caption">Hình 13.3: Minh họa bài toán xác định vận tốc theo vị trí bằng dạng hữu hạn trong Sách Bài Tập Động Lực Học Chương 2 (Hình 2-49 — Bài 2.34)</p>
</div>

Hai mã đề cùng kỳ thi ngày 28/06/2016 đều khảo sát thanh đồng chất $AB$ trượt không ma sát trong hai rãnh vuông góc nhưng đặt hai cấu hình lực và hai góc kết thúc khác nhau để kiểm tra kỹ năng xác định khoảng cách tới tâm vận tốc tức thời $I$:

1. **Mã Đề `0001/2016` (Câu 3–6):** $l = 0{,}4\text{ m}$, $m = 10\text{ kg}$, $A$ trượt ngang phía trên, $B$ trượt thẳng đứng nối lò xo $K = 800\text{ N/m}$ (không biến dạng tại $\theta = 0^\circ$), thả từ $\theta_0 = 30^\circ$ đi lên tới $\theta = 0^\circ$ ($g = 9{,}81\text{ m/s}^2$).
   - **Câu 3 (`3a`):** Theo chứng minh ở Mẫu 4 Ngày 11, $T = \frac{1}{6}ml^2\omega^2$ $= \frac{1}{6}(10)(0{,}4)^2\omega^2 = \frac{4}{15}\omega^2\text{ (J)}$.
   - **Câu 4 (`4b`):** Đã thiết lập và kiểm toán biên ở Mục 12.4: $\sum A(\theta) = 6{,}19 + 19{,}62\sin\theta - 64\sin^2\theta\text{ (J)}$.
   - **Câu 5 (`5c`):** Tại $\theta = 0^\circ$, $\sum A(0^\circ) = 6{,}19\text{ J}$. Từ $T - 0 = \sum A$:

     $$\frac{4}{15}\omega^2 = 6{,}19 \implies \omega = \sqrt{\frac{6{,}19 \times 15}{4}} \approx 4{,}818 \approx 4{,}82\text{ rad/s}$$

   - **Câu 6 (`6b`):** Với góc $\theta$ hợp bởi $AB$ và rãnh ngang của $A$, tọa độ đứng của $B$ là $y_B = l\sin\theta \implies V_B = \lvert\dot{y}_B\rvert = l\cos\theta \cdot \omega = IB \cdot \omega$. Tại $\theta = 0^\circ$, $\cos 0^\circ = 1$ nên $V_B = 0{,}4 \times 4{,}818 \approx 1{,}93\text{ m/s}$.

2. **Mã Đề `0002/2016` (Câu 3–6 — Phân tích phương án đúng `6e`):** $l = 0{,}8\text{ m}$, $m = 10\text{ kg}$, $A$ trượt thẳng đứng, $B$ trượt ngang chịu lực kéo không đổi $P = 50\text{ N}$ từ vị trí thẳng đứng $\theta_0 = 0^\circ$ đến $\theta = 45^\circ$ ($\theta$ hợp với phương thẳng đứng).
   - **Câu 3 (`3a`):** $T = \frac{1}{6}(10)(0{,}8)^2\omega^2 = \frac{16}{15}\omega^2\text{ (J)}$.
   - **Câu 4 (`4a`):** Khối tâm $G$ hạ xuống $\frac{l}{2}(1 - \cos\theta)$ và $B$ dịch theo chiều lực $P$ một đoạn $x_B = l\sin\theta$:

     $$\sum A(\theta) = mg\frac{l}{2}(1 - \cos\theta) + P l\sin\theta \approx 39{,}2(1 - \cos\theta) + 40\sin\theta\text{ (J)}$$

     (Kiểm toán biên: $\sum A(0^\circ) = 0\text{ J}$).
   - **Câu 5 (`5c`):** Tại $\theta = 45^\circ$, ta tính được $\sum A(45^\circ) = 39{,}2\left(1 - \frac{\sqrt{2}}{2}\right) + 40\frac{\sqrt{2}}{2}$ $\approx 39{,}7657\text{ J}$, suy ra $\omega = \sqrt{\frac{39{,}7657 \times 15}{16}}$ $\approx 6{,}11\text{ rad/s}$.
   - **Câu 6 (`6e. Các câu a, b, c, d đều sai`):** Hoành độ con trượt $B$ là $x_B = l\sin\theta$ (tương ứng khoảng cách từ tâm vận tốc tức thời $I$ đến $B$ là $IB = l\cos\theta$). Tại $\theta = 45^\circ$:

     $$V_B = \dot{x}_B = l\cos 45^\circ \cdot \omega = 0{,}8 \cdot \frac{\sqrt{2}}{2} \cdot 6{,}106 \approx 3{,}45\text{ m/s}$$

     Các phương án đề in là `a. 9,76`, `b. 6,91` (kết quả sai do chia nhầm $\frac{l\omega}{\cos 45^\circ}$), `c. 5,22`, `d. 4,70`. Vì giá trị đúng $3{,}45\text{ m/s}$ không xuất hiện trong `a..d`, đáp án chính xác là **`6e`**.

---

## Ngày 14: Cơ Hệ Tổng Hợp — Kết Hợp Động Năng & D'Alembert Tìm Sức Căng Dây, Phản Lực & Điều Kiện Tách Mặt {#ngay-14}

### 14.1. Quy trình giải tích 2 bước cho cơ hệ nhiều vật có hỏi lực liên kết

Trong Định lý biến thiên động năng áp dụng cho toàn cơ hệ liên kết lý tưởng, các nội lực căng dây $S$, phản lực khớp nối, phản lực pháp tuyến $N$ và lực ma sát nghỉ $F_{\text{msn}}$ đều có tổng công bằng không nên bị khử hoàn toàn khỏi phương trình. Do đó, khi đề thi yêu cầu xác định thêm các lực liên kết này, kiểm tra điều kiện lăn không trượt, hoặc tìm vị trí vật rời khỏi mặt tựa một phía, bắt buộc thực hiện **quy trình giải tích hai bước**:

- **Bước 1 — Giải động học và động lực học toàn hệ bằng Định lý Động năng:**
  - Dùng $\frac{dT}{dt} = \sum N$ để xác định gia tốc dài $a(q)$ và gia tốc góc $\varepsilon(q)$ của từng khâu.
  - Dùng $T - T_0 = \sum A$ để xác định bình phương vận tốc $v^2(q)$ và vận tốc góc $\omega^2(q)$ (cần thiết để tính thành phần lực quán tính pháp tuyến/ly tâm $F_{\text{qt}}^n = m\omega^2 r$).
- **Bước 2 — Tách vật rắn đơn lẻ và áp dụng Nguyên lý D'Alembert:**
  - Tách riêng vật rắn chứa ẩn phản lực cần tìm (cắt dây thay bằng sức căng $\vec{S}$, giải phóng mặt tựa thay bằng $\vec{N}$ và $\vec{F}_{\text{msn}}$).
  - Đặt hệ lực quán tính thu gọn về khối tâm $C$ của vật tách rời:

    $$\vec{F}_{\text{qt}} = -m\vec{a}_C, \qquad \vec{M}_C^{\text{qt}} = -J_C\vec{\varepsilon}$$

  - Viết các phương trình cân bằng tĩnh–động lực ($\sum F_x + F_{\text{qt},x} = 0$, $\sum F_y + F_{\text{qt},y} = 0$, $\sum M_C + M_C^{\text{qt}} = 0$) để giải trực tiếp các ẩn phản lực.

---

### 14.2. Ba bài toán ứng dụng trọng tâm (kèm chứng minh đầy đủ)

#### Ứng dụng A: Tìm sức căng dây $S$, lực ma sát nghỉ $F_{\text{msn}}$ và điều kiện không trượt (`Bài 6.26` SBT ĐLH Chương 6)

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_40.svg" alt="Con lăn hai tầng B và C lăn không trượt trên nền ngang nối dây qua ròng rọc D treo vật nặng A" class="figure-img" />
  <p class="figure-caption">Hình 14.1: Cơ hệ con lăn hai tầng B, C nối dây qua ròng rọc D treo vật nặng A (Hình 6-40 — Bài 6.26 Sách Bài Tập Động Lực Học Chương 6)</p>
</div>

**Bài toán (`Bài 6.26` [SBT ĐLH Chương 6](/bai-tap/dong-luc-hoc/chuong-6)):** Con lăn hai tầng đồng chất trọng lượng $Q$, bán kính vành lăn trên sàn ngang là $R$, bán kính tầng quấn dây phía trên là $r$, bán kính quán tính đối với trục tâm là $\rho$. Dây nhẹ không dãn rời từ đỉnh tầng $r$ nằm ngang sang phải, vắt qua ròng rọc nhẹ cố định $D$ treo vật nặng $A$ trọng lượng $P$ rơi thẳng đứng từ trạng thái nghỉ. Giả thiết con lăn lăn không trượt trên nền ngang có hệ số ma sát trượt tĩnh $f_0$. Xác định gia tốc $a_A$, sức căng dây $S$, lực ma sát nghỉ $F_{\text{msn}}$ và điều kiện của $f_0$ để không xảy ra trượt.

**Giải tích 2 bước:**

1. **Bước 1 (Định lý Động năng cho toàn hệ):**
   - Liên hệ động học với tâm tức thời tại tiếp điểm nền $I$: $v_C = R\omega$ (sang phải) và điểm dây rời ở đỉnh tầng $r$ cách $I$ đoạn $R + r$ nên $v_A = (R + r)\omega \implies \omega = \frac{v_A}{R + r}$.
   - Động năng toàn hệ quy về $v_A$:

     $$\begin{aligned}
     T &= \frac{1}{2}\frac{P}{g}v_A^2 + \frac{1}{2}\frac{Q}{g}\left(R^2 + \rho^2\right)\omega^2 \\
       &= \frac{1}{2g}\left[P + Q\frac{R^2 + \rho^2}{(R + r)^2}\right]v_A^2
     \end{aligned}$$

   - Công suất ngoại lực: chỉ có trọng lực $\vec{P}$ sinh công ($\sum N = P v_A$). Từ $\frac{dT}{dt} = \sum N$ rút ra gia tốc rơi $a_A$ và gia tốc góc $\varepsilon = \frac{a_A}{R + r}$:

     $$\begin{aligned}
     a_A &= \frac{P(R + r)^2 g}{Q(R^2 + \rho^2) + P(R + r)^2} \\
     \varepsilon &= \frac{P(R + r) g}{Q(R^2 + \rho^2) + P(R + r)^2}
     \end{aligned}$$

2. **Bước 2 (Tách vật đặt lực quán tính D'Alembert):**
   - **Tách vật treo $A$** (chịu $\vec{P}\downarrow$, sức căng $\vec{S}\uparrow$ và lực quán tính $F_{\text{qt},A} = \frac{P}{g}a_A\uparrow$):

     $$\begin{aligned}
     P - S - \frac{P}{g}a_A &= 0 \\
     \implies S = P\left(1 - \frac{a_A}{g}\right) &= \frac{P Q (R^2 + \rho^2)}{Q(R^2 + \rho^2) + P(R + r)^2}
     \end{aligned}$$

   - **Tách con lăn $BC$** (khối tâm tiến sang phải với $a_C = R\varepsilon$, quay thuận kim đồng hồ với $\varepsilon$; giả sử $\vec{F}_{\text{msn}}$ tại $I$ hướng sang trái): Chiếu phương ngang $S - F_{\text{msn}} - \frac{Q}{g}R\varepsilon = 0$:

     $$\begin{aligned}
     F_{\text{msn}} &= S - \frac{Q}{g}R\varepsilon = \frac{P Q (R^2 + \rho^2) - P Q R(R + r)}{Q(R^2 + \rho^2) + P(R + r)^2} \\
                    &= \frac{P Q \left(\rho^2 - R r\right)}{Q(R^2 + \rho^2) + P(R + r)^2}
     \end{aligned}$$

     *(Kiểm chứng chéo bằng phương trình mômen quanh khối tâm $C$: $S r + F_{\text{msn}} R - \frac{Q}{g}\rho^2\varepsilon = 0$ cho cùng kết quả. Đáng chú ý: chiều thực tế của $\vec{F}_{\text{msn}}$ phụ thuộc dấu của $(\rho^2 - Rr)$, và khi $\rho^2 = Rr$ thì $F_{\text{msn}} = 0$).*
   - **Điều kiện lăn không trượt:** Với phản lực pháp tuyến $N = Q$, điều kiện Coulomb tĩnh $\lvert F_{\text{msn}}\rvert \le f_0 N$ đòi hỏi:

     $$f_0 \ge \frac{P\left\lvert\rho^2 - R r\right\rvert}{Q(R^2 + \rho^2) + P(R + r)^2}$$

---

#### Ứng dụng B: Xác định góc $\varphi^*$ vật rắn tách khỏi mặt tựa một phía (`Bài 6.19` & `Thí dụ 6–5` SBT ĐLH Chương 6)

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_6_36.svg" alt="Khối trụ tròn đồng chất lăn không trượt quanh mép sắc B của sàn ngang" class="figure-img" />
  <p class="figure-caption">Hình 14.2: Khối trụ tròn đồng chất bán kính R lăn quanh mép B cho tới khi tách khỏi mép tựa (Hình 6-36 — Bài 6.19 Sách Bài Tập Động Lực Học Chương 6)</p>
</div>

**Bài toán (`Bài 6.19` [SBT ĐLH Chương 6](/bai-tap/dong-luc-hoc/chuong-6)):** Khối trụ tròn đặc đồng chất khối lượng $m$, bán kính $R$ bắt đầu lăn không trượt với vận tốc đầu không đáng kể quanh mép sắc ngang $B$ từ vị trí khối tâm $C$ nằm thẳng đứng ngay trên $B$ ($\varphi_0 = 0$). Xác định góc lệch $\varphi^*$ hợp bởi $BC$ với phương thẳng đứng và vận tốc góc $\omega^*$ tại thời điểm khối trụ bắt đầu rời khỏi mép $B$.

**Giải tích 2 bước:**
1. **Bước 1 (Tìm $\omega^2(\varphi)$ bằng dạng hữu hạn trong giai đoạn còn tiếp xúc):**
   Chừng nào $N(\varphi) > 0$ và trụ chưa trượt, khối trụ quay quanh trục cố định $B$ với $J_B = \frac{1}{2}mR^2 + mR^2 = \frac{3}{2}mR^2$. Áp dụng $T - T_0 = A_P$ với độ hạ khối tâm $\Delta h_C = R(1 - \cos\varphi)$:

   $$\frac{1}{2}\left(\frac{3}{2}m R^2\right)\omega^2 = m g R(1 - \cos\varphi) \implies \omega^2(\varphi) = \frac{4g}{3R}(1 - \cos\varphi)$$

2. **Bước 2 (Thiết lập phản lực pháp tuyến $N(\varphi)$ bằng D'Alembert và giải điều kiện tách mặt $N(\varphi^*) = 0$):**
   Chiếu các lực tác dụng lên trụ và lực quán tính ly tâm $F_{\text{qt}}^n = m a_C^n = m\omega^2 R$ (hướng dọc tia $BC$ ra xa $B$) lên trục pháp tuyến hướng từ $B$ qua $C$:

   $$\begin{aligned}
   N(\varphi) - m g \cos\varphi + m \omega^2(\varphi) R &= 0 \\
   \implies N(\varphi) &= m g \left[\cos\varphi - \frac{4}{3}(1 - \cos\varphi)\right] \\
   &= \frac{m g}{3}\left(7\cos\varphi - 4\right)
   \end{aligned}$$

   Liên kết tựa một phía tại mép $B$ chỉ chịu nén ($N \ge 0$). Khối trụ bắt đầu tách khỏi mép $B$ ngay tại góc $\varphi^*$ làm triệt tiêu phản lực pháp tuyến:

   $$N(\varphi^*) = 0 \iff \cos\varphi^* = \frac{4}{7} \implies \varphi^* = \arccos\left(\frac{4}{7}\right) \approx 55^\circ 09'$$

   Thay $\cos\varphi^* = \frac{4}{7}$ vào $\omega^2(\varphi)$ thu được $\omega^* = \sqrt{\frac{4g}{3R}\cdot\frac{3}{7}} = 2\sqrt{\frac{g}{7R}}$.

*(Đối chiếu tương tự với `Thí dụ 6–5` Hình 11.4: thanh đồng chất $AB$ dài $2a$ thả trượt từ góc nghiêng $\varphi_0$ tựa trên tường đứng nhẵn và sàn ngang nhẵn có $\dot{\varphi}^2 = \frac{3g}{2a}(\sin\varphi_0 - \sin\varphi)$ và $\ddot{\varphi} = -\frac{3g}{4a}\cos\varphi$; phương trình D'Alembert ngang $N_A = m\ddot{x}_C = 0$ cho vị trí đầu $A$ tách khỏi tường đứng là $\varphi^* = \arcsin\left(\frac{2}{3}\sin\varphi_0\right)$).*

---

### 14.3. Danh mục bài tập thực chiến bắt buộc (Ngày 11 – Ngày 14)

Trước khi bước vào Cổng Kiểm Định Ngày 15, người học phải tự đặt bút giải hoàn chỉnh và đối chiếu đáp số các bài toán có thật sau đây trong kho tài liệu học phần:

| Nhóm kỹ năng | Bài tập Sách Bài Tập Đỗ Sanh | Chùm câu hỏi Đề thi thật HCMUT |
| :--- | :--- | :--- |
| **1. Thiết lập động năng $T$ & thu gọn khối lượng** | [SBT ĐLH Chương 2](/bai-tap/dong-luc-hoc/chuong-2): `Thí dụ 2–8`, `Thí dụ 2–12`, `Bài 2.28`, `Bài 2.29`, `Bài 2.30` | [Đề `1821` Câu 5](/on-thi/de-thi-that-hcmut#de-1821) · [Đề `1721` Câu 6, 7, 9](/on-thi/de-thi-that-hcmut#de-1721) · [Đề `1722` Câu 6, 7, 9](/on-thi/de-thi-that-hcmut#de-1722) |
| **2. Công lò xo $\Delta l_0 \neq 0$, thế năng & ma sát trượt** | [SBT ĐLH Chương 2](/bai-tap/dong-luc-hoc/chuong-2): `Thí dụ 2–9`, `Thí dụ 2–10`, `Bài 2.31`, `Bài 2.33`, `Bài 2.34` | [Đề `1721` Câu 8](/on-thi/de-thi-that-hcmut#de-1721) · [Đề `1722` Câu 8](/on-thi/de-thi-that-hcmut#de-1722) · [Đề `0001/2016` Câu 4](/on-thi/de-thi-that-hcmut#de-2016) |
| **3. Đạo hàm $\frac{dT}{dt} = \sum N$ (cả $M_{\text{td}}(q)$ biến thiên)** | [SBT ĐLH Chương 2](/bai-tap/dong-luc-hoc/chuong-2): `Thí dụ 2–14`, `Thí dụ 2–15`, `Thí dụ 2–17`, `Bài 2.35`, `Bài 2.39`, `Bài 2.45` | [Đề `1821` Câu 6–8](/on-thi/de-thi-that-hcmut#de-1821) · [Đề `0002/2016` Câu 3–6](/on-thi/de-thi-that-hcmut#de-2016) · [Đề `0002/2015` Câu 5–8](/on-thi/de-thi-that-hcmut#de-2015) |
| **4. Kết hợp Động năng + D'Alembert ($S, F_{\text{msn}}, N = 0$)** | [SBT ĐLH Chương 6](/bai-tap/dong-luc-hoc/chuong-6): `Thí dụ 6–5`, `Thí dụ 6–10`, `Thí dụ 6–11`, `Bài 6.7`, `Bài 6.10`, `Bài 6.11`, `Bài 6.19`, `Bài 6.26` | [Đề `0001/2015` Câu 6–9](/on-thi/de-thi-that-hcmut#de-2015) · [Đề `1` (tr. 67) Câu 1–8](/on-thi/de-thi-that-hcmut#de-cac-nam-truoc) · [Đề `19/06/2014` Câu 1–7](/on-thi/de-thi-that-hcmut#de-cac-nam-truoc) |

---

## Ngày 15: Cổng Kiểm Định Chặng 3 (3 Chùm × 4 Câu = 12 Câu / 35 Phút, Cấm Mở Sách) {#ngay-15}

::: warning Quy chế thực hiện Cổng Kiểm Định Chặng 3
1. **Thời lượng:** Bấm đồng hồ đếm ngược đúng **35 phút** cho toàn bộ 12 câu (3 chùm bài toán liên hoàn).
2. **Điều kiện làm bài:** Chỉ sử dụng giấy nháp trắng và máy tính cầm tay khoa học; **tuyệt đối không mở giáo trình, sổ tay công thức hay xem phần lời giải phía dưới** cho tới khi ghi xong phương án lựa chọn của cả 12 câu.
3. **Cảnh báo cấu trúc phương án:** Phương án *«Các đáp án còn lại đều sai»* được bố trí ở nhiều vị trí khác nhau (`a, b, c, d, e`) tương tự đề thi thật `AS1003` (`1821`, `1721`, `0002/2016`). Không loại trừ hay chọn cảm tính phương án này nếu chưa kiểm chứng đại số.
:::

---

### Chùm 1 (Câu 1 – Câu 4): Tang Trống Hai Tầng, Lò Xo Có Biến Dạng Đầu & Ma Sát Trượt

Tang trống hai tầng quay quanh trục nằm ngang cố định $O$ gồm hai vành trụ đồng tâm bán kính ngoài $R = 0{,}4\text{ m}$ và bán kính trong $r = 0{,}2\text{ m}$, tổng khối lượng $m_O = 8\text{ kg}$, bán kính quán tính đối với trục quay $O$ là $\rho = 0{,}3\text{ m}$.
- Nhánh dây thứ nhất (mềm, nhẹ, không dãn) quấn trên vành ngoài bán kính $R$, kéo vật nặng $A$ (khối lượng $m_A = 5\text{ kg}$, xem như chất điểm) trượt **đi lên** dọc mặt phẳng nghiêng cố định hợp góc $\alpha = 30^\circ$ so với phương ngang; hệ số ma sát trượt động giữa vật $A$ và mặt nghiêng là $f = \frac{\sqrt{3}}{5}$.
- Nhánh dây thứ hai quấn trên vành trong bán kính $r$ nối thẳng với một lò xo đàn hồi tuyến tính độ cứng $k = 200\text{ N/m}$ (đầu kia của lò xo gắn cố định) theo chiều sao cho khi tang quay góc dương $\varphi > 0$ để kéo $A$ đi lên dốc thì lò xo bị kéo dãn thêm đoạn $r\varphi$.
- Tại vị trí xuất phát $\varphi_0 = 0$, cơ hệ bắt đầu chuyển động từ trạng thái đứng yên ($\omega_0 = 0$) dưới tác dụng của ngẫu lực phát động không đổi $M = 36\text{ N}\cdot\text{m}$ cùng chiều $\varphi > 0$; biết rằng ngay tại $\varphi_0 = 0$ lò xo **đã bị dãn sẵn một đoạn ban đầu $\Delta l_0 = 0{,}1\text{ m}$**.

Lấy $g = 10\text{ m/s}^2$, bỏ qua ma sát tại ổ trục $O$. Gọi $\omega = \dot{\varphi} > 0$ và $\varepsilon = \ddot{\varphi}$ là vận tốc góc và gia tốc góc của tang $O$ trong giai đoạn $0 \le \varphi \le 1{,}5\text{ rad}$.

**Câu 1.** Biểu thức động năng $T$ của toàn cơ hệ theo vận tốc góc $\omega$ của tang $O$ là:
- a. $T = 0{,}58\omega^2\text{ (J)}$
- b. $T = 0{,}76\omega^2\text{ (J)}$
- c. $T = 0{,}72\omega^2\text{ (J)}$
- d. $T = 1{,}52\omega^2\text{ (J)}$
- e. Các đáp án còn lại đều sai

**Câu 2.** Tổng công $\sum A(\varphi)$ của tất cả các lực tác dụng lên cơ hệ khi tang $O$ quay từ $\varphi_0 = 0$ đến vị trí góc $\varphi$ ($0 < \varphi \le 1{,}5\text{ rad}$) là:
- a. Các đáp án còn lại đều sai
- b. $\sum A = 20\varphi - 4\varphi^2\text{ (J)}$
- c. $\sum A = 16\varphi - 4\varphi^2\text{ (J)}$
- d. $\sum A = 22\varphi - 4\varphi^2\text{ (J)}$
- e. $\sum A = 24\varphi + 4\varphi^2\text{ (J)}$

**Câu 3.** Gia tốc góc $\varepsilon(\varphi)$ của tang $O$ theo góc quay $\varphi$ là:
- a. $\varepsilon = \dfrac{200 - 100\varphi}{19}\text{ (rad/s}^2\text{)}$
- b. $\varepsilon = \dfrac{400 - 200\varphi}{19}\text{ (rad/s}^2\text{)}$
- c. $\varepsilon = \dfrac{250 - 100\varphi}{19}\text{ (rad/s}^2\text{)}$
- d. Các đáp án còn lại đều sai
- e. $\varepsilon = \dfrac{100 - 50\varphi}{9}\text{ (rad/s}^2\text{)}$

**Câu 4.** Độ lớn vận tốc $v_A$ của vật $A$ tại thời điểm tang $O$ quay được góc $\varphi = 1\text{ rad}$ là:
- a. $v_A = 3{,}97\text{ m/s}$
- b. $v_A = 1{,}84\text{ m/s}$
- c. $v_A = 0{,}79\text{ m/s}$
- d. $v_A = 1{,}63\text{ m/s}$
- e. Các đáp án còn lại đều sai

---

### Chùm 2 (Câu 5 – Câu 8): Cơ Cấu Thanh–Con Trượt Có Khối Lượng Tương Đương Phụ Thuộc Góc $M_{\text{td}}(\theta)$

Trong mặt phẳng thẳng đứng, thanh mảnh đồng chất $OA$ có chiều dài $l = 0{,}6\text{ m}$, khối lượng $m_1 = 6\text{ kg}$ quay quanh bản lề cố định $O$. Đầu $A$ nối khớp bản lề trơn với thanh mảnh đồng chất $AB$ có cùng chiều dài $l = 0{,}6\text{ m}$ và cùng khối lượng $m_1 = 6\text{ kg}$. Đầu $B$ gắn với con trượt khối lượng $m_2 = 4\text{ kg}$ (coi như chất điểm) trượt không ma sát dọc theo rãnh thẳng nằm ngang cố định đi qua $O$, sao cho tam giác $OAB$ cân tại đỉnh $A$ (nằm phía trên đường ngang $OB$) và hai góc đáy tại $O, B$ cùng bằng $\theta$ ($0^\circ < \theta < 90^\circ$).

Cơ hệ được thả chuyển động từ trạng thái đứng yên tại vị trí góc ban đầu $\theta_0 = 60^\circ$ đi xuống dưới tác dụng của trọng lực (góc $\theta$ giảm dần). Lấy $g = 10\text{ m/s}^2$; ký hiệu $\dot{\theta} = \frac{d\theta}{dt}$ và $\ddot{\theta} = \frac{d^2\theta}{dt^2}$.

**Câu 5.** Biểu thức động năng $T(\theta, \dot{\theta})$ của toàn cơ hệ tại vị trí góc $\theta$ bất kỳ là:
- a. $T = \left(0{,}72 + 2{,}16\sin^2\theta\right)\dot{\theta}^2\text{ (J)}$
- b. $T = \left(0{,}63 + 5{,}04\sin^2\theta\right)\dot{\theta}^2\text{ (J)}$
- c. Các đáp án còn lại đều sai
- d. $T = \left(0{,}72 + 5{,}04\sin^2\theta\right)\dot{\theta}^2\text{ (J)}$
- e. $T = \left(1{,}44 + 10{,}08\sin^2\theta\right)\dot{\theta}^2\text{ (J)}$

**Câu 6.** Tổng công $\sum A(\theta)$ của các ngoại lực khi cơ hệ di chuyển từ $\theta_0 = 60^\circ$ xuống vị trí góc $\theta < 60^\circ$ là:
- a. $\sum A = 36\sin\theta - 18\sqrt{3}\text{ (J)}$
- b. $\sum A = 18\sqrt{3} - 36\sin\theta\text{ (J)}$
- c. $\sum A = 9\sqrt{3} - 18\sin\theta\text{ (J)}$
- d. $\sum A = 30\sqrt{3} - 60\sin\theta\text{ (J)}$
- e. Các đáp án còn lại đều sai

**Câu 7.** Độ lớn vận tốc góc $\omega = \lvert\dot{\theta}\rvert$ của thanh $OA$ tại thời điểm hệ đi qua vị trí $\theta = 30^\circ$ là:
- a. $\omega = 2{,}58\text{ rad/s}$
- b. $\omega = 3{,}23\text{ rad/s}$
- c. $\omega = 1{,}82\text{ rad/s}$
- d. Các đáp án còn lại đều sai
- e. $\omega = 4{,}28\text{ rad/s}$

**Câu 8.** Độ lớn gia tốc góc $\varepsilon = \lvert\ddot{\theta}\rvert$ của thanh $OA$ ngay tại vị trí $\theta = 30^\circ$ là:
- a. $\varepsilon = 7{,}87\text{ rad/s}^2$
- b. $\varepsilon = 0{,}54\text{ rad/s}^2$
- c. $\varepsilon = 15{,}21\text{ rad/s}^2$
- d. $\varepsilon = 22{,}54\text{ rad/s}^2$
- e. Các đáp án còn lại đều sai

---

### Chùm 3 (Câu 9 – Câu 12): Con Lăn Trên Mặt Nghiêng, Ròng Rọc Có Quán Tính & Vật Treo

Con lăn $C$ là khối trụ tròn đặc đồng chất khối lượng $m_1 = 12\text{ kg}$, bán kính $R = 0{,}25\text{ m}$ đặt trên mặt phẳng nghiêng cố định hợp góc $\alpha = 30^\circ$ so với phương ngang. Một sợi dây mềm, nhẹ, không dãn được quấn vào mép trên cùng của con lăn $C$ (đoạn dây rời khỏi con lăn song song với mặt dốc và cách mặt dốc khoảng $2R$), vắt không trượt qua ròng rọc cố định $D$ (là đĩa tròn đặc đồng chất khối lượng $m_D = 4\text{ kg}$, bán kính $r_D = 0{,}1\text{ m}$, quay không ma sát quanh ổ trục tại đỉnh dốc) rồi buộc vào vật nặng $A$ khối lượng $m_2 = 10\text{ kg}$ treo thẳng đứng.

Thả hệ chuyển động từ trạng thái đứng yên; giả thiết con lăn $C$ **lăn không trượt** đi lên mặt dốc. Lấy $g = 10\text{ m/s}^2$, gọi $v_A$ và $a_A$ là độ lớn vận tốc và gia tốc đi xuống của vật treo $A$.

**Câu 9.** Biểu thức động năng toàn cơ hệ $T$ tính theo vận tốc $v_A$ của vật treo $A$ là:
- a. $T = 8{,}25\,v_A^2\text{ (J)}$
- b. $T = 7{,}25\,v_A^2\text{ (J)}$
- c. $T = 15{,}00\,v_A^2\text{ (J)}$
- d. $T = 7{,}50\,v_A^2\text{ (J)}$
- e. Các đáp án còn lại đều sai

**Câu 10.** Gia tốc đi xuống $a_A$ của vật treo $A$ bằng:
- a. $a_A = 2{,}42\text{ m/s}^2$
- b. Các đáp án còn lại đều sai
- c. $a_A = 4{,}24\text{ m/s}^2$
- d. $a_A = 8{,}48\text{ m/s}^2$
- e. $a_A = 4{,}83\text{ m/s}^2$

**Câu 11.** Sức căng dây $S_2$ trên nhánh dây song song với mặt dốc (kéo mép trên con lăn $C$) có giá trị bằng:
- a. $S_2 = 57{,}58\text{ N}$
- b. $S_2 = 66{,}06\text{ N}$
- c. $S_2 = 40{,}61\text{ N}$
- d. Các đáp án còn lại đều sai
- e. $S_2 = 100{,}00\text{ N}$

**Câu 12.** Giá trị nhỏ nhất của hệ số ma sát trượt tĩnh $f_{0,\min}$ giữa con lăn $C$ và mặt phẳng nghiêng để giả thiết con lăn $C$ lăn không trượt được bảo toàn là:
- a. $f_{0,\min} = 0{,}27$
- b. $f_{0,\min} = 0{,}35$
- c. $f_{0,\min} = 0{,}43$
- d. $f_{0,\min} = 0{,}30$
- e. Các đáp án còn lại đều sai

---

<details><summary>Đáp án, Kiểm toán &amp; Giải phẫu Phương án Nhiễu</summary>

### Bảng Đáp Án Kiểm Toán Chặng 3

| Câu | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án chuẩn** | **`b`** | **`c`** | **`a`** | **`e`** | **`d`** | **`b`** | **`a`** | **`c`** | **`a`** | **`c`** | **`d`** | **`b`** |

---

### Lời Giải Kiểm Toán & Giải Phẫu Phương Án Nhiễu Từng Câu

#### Chùm 1 (Câu 1 – Câu 4)

- **Câu 1 (`b`):**
  - Mômen quán tính tang $O$ theo bán kính quán tính $\rho$: $J_O = m_O\rho^2 = 8 \times (0{,}3)^2 = 0{,}72\text{ kg}\cdot\text{m}^2$.
  - Vận tốc vật $A$: $v_A = R\omega = 0{,}4\omega$. Động năng toàn hệ:

    $$\begin{aligned}
    T &= \frac{1}{2}J_O\omega^2 + \frac{1}{2}m_A v_A^2 \\
      &= \frac{1}{2}(0{,}72)\omega^2 + \frac{1}{2}(5)(0{,}4\omega)^2 = (0{,}36 + 0{,}40)\omega^2 = 0{,}76\omega^2\text{ (J)}
    \end{aligned}$$

  - *Giải phẫu nhiễu:* `1a` ($0{,}58\omega^2$) nhân thừa hệ số $\frac{1}{2}$ vào công thức $J_O = m_O\rho^2$; `1c` ($0{,}72\omega^2$) tự ý xem tang hai tầng như trụ đặc đồng chất $\frac{1}{2}m_O R^2 = 0{,}64$; `1d` ($1{,}52\omega^2$) quên thừa số $\frac{1}{2}$ của động năng.

- **Câu 2 (`c`):**
  - Khi tang quay góc $\varphi > 0$: vật $A$ đi lên dốc đoạn $s_A = R\varphi = 0{,}4\varphi$; lực pháp tuyến $N_A = m_A g\cos 30^\circ = 25\sqrt{3}\text{ N}$ suy ra $F_{\text{ms}} = f N_A = \frac{\sqrt{3}}{5}\cdot 25\sqrt{3} = 15\text{ N}$; độ biến dạng toàn phần của lò xo là $\Delta l(\varphi) = \Delta l_0 + r\varphi = 0{,}1 + 0{,}2\varphi$.
  - Tổng công các lực:

    $$\begin{aligned}
    \sum A(\varphi) &= M\varphi - m_A g\sin 30^\circ(R\varphi) - F_{\text{ms}}(R\varphi) \\
                    &\quad - \frac{1}{2}k\left[\Delta l(\varphi)^2 - \Delta l_0^2\right] \\
                    &= 36\varphi - 10\varphi - 6\varphi - 100\left[(0{,}1 + 0{,}2\varphi)^2 - 0{,}1^2\right] \\
                    &= 20\varphi - (4\varphi + 4\varphi^2) = 16\varphi - 4\varphi^2\text{ (J)}
    \end{aligned}$$

  - *Kiểm toán biên:* Tại $\varphi = \varphi_0 = 0$, $\sum A(0) = 0\text{ J}$.
  - *Giải phẫu nhiễu:* `2b` ($20\varphi - 4\varphi^2$) mắc đúng lỗi dùng công thức sai $-\frac{1}{2}k(\Delta l_2 - \Delta l_1)^2 = -4\varphi^2$ (mất công căng đầu $-k\Delta l_0 r\varphi = -4\varphi$); `2d` ($22\varphi - 4\varphi^2$) bỏ quên công của ma sát trượt $-6\varphi$; `2e` ($24\varphi + 4\varphi^2$) đảo ngược dấu tích phân lực đàn hồi lò xo.

- **Câu 3 (`a`):**
  - Từ $\frac{dT}{dt} = \sum N$ với $M_{\text{td}} = 2 \times 0{,}76 = 1{,}52\text{ kg}\cdot\text{m}^2$ không đổi:

    $$\begin{aligned}
    1{,}52\,\omega\varepsilon &= \frac{d(\sum A)}{d\varphi}\omega = (16 - 8\varphi)\omega \\
    \implies \varepsilon(\varphi) &= \frac{16 - 8\varphi}{1{,}52} = \frac{200 - 100\varphi}{19}\text{ (rad/s}^2\text{)}
    \end{aligned}$$

  - *Giải phẫu nhiễu:* `3b` quên nhân $2$ khi đạo hàm $\omega^2$; `3c` kéo theo lỗi bỏ sót $\Delta l_0$ từ `2b`; `3e` kéo theo lỗi sai $J_O$ từ `1c`.

- **Câu 4 (`e. Các đáp án còn lại đều sai`):**
  - Tại $\varphi = 1\text{ rad}$: $\sum A(1) = 16(1) - 4(1)^2 = 12\text{ J}$. Áp dụng $T - 0 = \sum A(1)$:

    $$0{,}76\omega^2 = 12 \implies \omega = \sqrt{\frac{300}{19}} \approx 3{,}9736\text{ rad/s}$$

    $$v_A = R\omega = 0{,}4\sqrt{\frac{300}{19}} = \sqrt{\frac{48}{19}} \approx 1{,}59\text{ m/s}$$

  - *Giải phẫu nhiễu:* Giá trị đúng $v_A \approx 1{,}59\text{ m/s}$ không có trong `a..d`! Phương án `4a` ($3{,}97$) quên nhân $R = 0{,}4$, ghi nhầm $\omega$ thành $v_A$; `4b` ($1{,}84$) tính từ $\sum A(1) = 16\text{ J}$ do quên $\Delta l_0$; `4c` ($0{,}79$) nhân nhầm bán kính tầng trong $r = 0{,}2\text{ m}$; `4d` ($1{,}63$) kéo theo hệ số sai $0{,}72\omega^2$ của `1c`.

---

#### Chùm 2 (Câu 5 – Câu 8)

- **Câu 5 (`d`):**
  - Thanh $OA$ quay quanh $O$ cố định: $T_{OA} = \frac{1}{6}m_1 l^2\dot{\theta}^2 = 0{,}36\dot{\theta}^2$.
  - Thanh $AB$ song phẳng có $\lvert\omega_{AB}\rvert = \lvert\dot{\theta}\rvert$ và khối tâm $G\left(\frac{3}{2}l\cos\theta, \frac{1}{2}l\sin\theta\right)$:

    $$v_G^2 = l^2\left(\frac{9}{4}\sin^2\theta + \frac{1}{4}\cos^2\theta\right)\dot{\theta}^2 = l^2\left(\frac{1}{4} + 2\sin^2\theta\right)\dot{\theta}^2$$

    $$\begin{aligned}
    T_{AB} &= \frac{1}{2}m_1 v_G^2 + \frac{1}{24}m_1 l^2\dot{\theta}^2 = m_1 l^2\left(\frac{1}{6} + \sin^2\theta\right)\dot{\theta}^2 \\
           &= \left(0{,}36 + 2{,}16\sin^2\theta\right)\dot{\theta}^2
    \end{aligned}$$

  - Con trượt $B$ ($x_B = 2l\cos\theta \implies \dot{x}_B = -2l\sin\theta\,\dot{\theta}$): $T_B = \frac{1}{2}m_2 v_B^2 = 2m_2 l^2\sin^2\theta\,\dot{\theta}^2$ $= 2{,}88\sin^2\theta\,\dot{\theta}^2$.
  - Cộng ba thành phần: $T = \left(0{,}72 + 5{,}04\sin^2\theta\right)\dot{\theta}^2\text{ (J)}$ (tức $M_{\text{td}}(\theta) = 1{,}44 + 10{,}08\sin^2\theta$).
  - *Giải phẫu nhiễu:* `5a` bỏ quên động năng con trượt $B$; `5b` bỏ sót động năng quay $\frac{1}{2}J_G\dot{\theta}^2 = 0{,}09\dot{\theta}^2$ của thanh $AB$; `5e` quên nhân $\frac{1}{2}$.

- **Câu 6 (`b`):**
  - Khi $\theta$ giảm từ $60^\circ$ xuống $\theta < 60^\circ$, khối tâm hai thanh $OA$ và $AB$ đều hạ thấp đoạn $\frac{l}{2}(\sin 60^\circ - \sin\theta)$; con trượt $B$ đi ngang ($y_B = 0$) không sinh công trọng lực:

    $$\begin{aligned}
    \sum A(\theta) &= 2 \cdot m_1 g \frac{l}{2}(\sin 60^\circ - \sin\theta) \\
                   &= 6 \cdot 10 \cdot 0{,}6\left(\frac{\sqrt{3}}{2} - \sin\theta\right) = 18\sqrt{3} - 36\sin\theta\text{ (J)}
    \end{aligned}$$

  - *Kiểm toán biên:* $\sum A(60^\circ) = 18\sqrt{3} - 36\frac{\sqrt{3}}{2} = 0\text{ J}$.
  - *Giải phẫu nhiễu:* `6a` ngược dấu công trọng lực; `6c` chỉ tính 1 thanh; `6d` cộng nhầm khối lượng con trượt ngang $m_2$.

- **Câu 7 (`a`):**
  - Tại $\theta = 30^\circ$: $T(30^\circ) = 1{,}98\dot{\theta}^2$ (do $0{,}72 + 5{,}04 \times 0{,}25 = 1{,}98$) và $\sum A(30^\circ) = 18(\sqrt{3} - 1) \approx 13{,}1769\text{ J}$.
  - Từ $T - 0 = \sum A$:

    $$\begin{aligned}
    \dot{\theta}^2 &= \frac{18(\sqrt{3} - 1)}{1{,}98} = \frac{100(\sqrt{3} - 1)}{11} \approx 6{,}6550\text{ rad}^2/\text{s}^2 \\
    \implies \omega &= \lvert\dot{\theta}\rvert \approx 2{,}58\text{ rad/s}
    \end{aligned}$$

  - *Giải phẫu nhiễu:* `7b` ($3{,}23$) kéo theo lỗi quên $T_B$ ở `5a`; `7c` ($1{,}82$) kéo theo lỗi quên $\frac{1}{2}$ ở `5e`; `7e` ($4{,}28$) bỏ quên toàn bộ số hạng chứa $\sin^2 30^\circ$.

- **Câu 8 (`c`):**
  - Với $M_{\text{td}}(\theta) = 1{,}44 + 10{,}08\sin^2\theta$, đạo hàm theo $\theta$ cho $\frac{1}{2}\frac{dM_{\text{td}}}{d\theta} = 5{,}04\sin 2\theta$.
  - Đạo hàm $\frac{dT}{dt} = \frac{d(\sum A)}{dt}$ và chia hai vế cho $\dot{\theta} \neq 0$:

    $$\left(1{,}44 + 10{,}08\sin^2\theta\right)\ddot{\theta} + 5{,}04\sin 2\theta\,\dot{\theta}^2 = -36\cos\theta$$

  - Thay $\theta = 30^\circ$ và $\dot{\theta}^2 = \frac{100(\sqrt{3} - 1)}{11}$:

    $$\begin{aligned}
    3{,}96\,\ddot{\theta} &= -18\sqrt{3} - 5{,}04\left(\frac{\sqrt{3}}{2}\right)\frac{100(\sqrt{3} - 1)}{11} \\
                          &\approx -31{,}1769 - 29{,}0446 = -60{,}2215 \\
    \implies \ddot{\theta} &\approx -15{,}207\text{ rad/s}^2 \implies \varepsilon = \lvert\ddot{\theta}\rvert \approx 15{,}21\text{ rad/s}^2
    \end{aligned}$$

  - *Giải phẫu nhiễu:* `8a` ($7{,}87$) là lỗi kinh điển **bỏ sót hoàn toàn số hạng $\frac{1}{2}M'_{\text{td}}(\theta)\dot{\theta}^3$** khi đạo hàm $T$; `8b` ($0{,}54$) đảo dấu $+5{,}04\sin 2\theta\,\dot{\theta}^2$ thành dấu trừ; `8d` ($22{,}54$) quên thừa số $\frac{1}{2}$ trước $M'_{\text{td}}(\theta)\dot{\theta}^2$.

---

#### Chùm 3 (Câu 9 – Câu 12)

- **Câu 9 (`a`):**
  - Con lăn đặc $C$ lăn không trượt trên mặt dốc cố định (tâm vận tốc tức thời tại tiếp điểm $I$): dây rời ở mép trên cách $I$ đoạn $2R$ nên $v_A = 2R\omega_C \implies v_C = R\omega_C = \frac{1}{2}v_A$, còn ròng rọc đặc $D$ có $\omega_D = \frac{v_A}{r_D}$.
  - Tổng động năng ba vật:

    $$\begin{aligned}
    T &= \frac{3}{4}m_1 v_C^2 + \frac{1}{2}\left(\frac{1}{2}m_D r_D^2\right)\omega_D^2 + \frac{1}{2}m_2 v_A^2 \\
      &= \frac{3}{4}(12)\left(\frac{v_A}{2}\right)^2 + \frac{1}{4}(4)v_A^2 + \frac{1}{2}(10)v_A^2 \\
      &= (2{,}25 + 1 + 5)v_A^2 = 8{,}25\,v_A^2\text{ (J)}
    \end{aligned}$$

  - *Giải phẫu nhiễu:* `9b` ($7{,}25v_A^2$) quên động năng ròng rọc $D$; `9c` ($15v_A^2$) ngộ nhận $v_C = v_A$; `9d` ($7{,}50v_A^2$) bỏ quên động năng quay của con lăn $C$.

- **Câu 10 (`c`):**
  - Khi vật $A$ hạ xuống đoạn $s_A$, tâm $C$ đi lên dốc đoạn $s_C = \frac{1}{2}s_A$:

    $$\begin{aligned}
    \sum A(s_A) &= m_2 g s_A - m_1 g\sin 30^\circ\left(\frac{1}{2}s_A\right) \\
                &= (100 - 30)s_A = 70\,s_A\text{ (J)}
    \end{aligned}$$

  - Đạo hàm $\frac{dT}{dt} = \sum N$: từ $16{,}5\,v_A a_A = 70\,v_A$ suy ra $a_A = \frac{140}{33} \approx 4{,}24\text{ m/s}^2$.
  - *Giải phẫu nhiễu:* `10a` ($2{,}42$) lấy nhầm $s_C = s_A$; `10d` ($8{,}48$) quên nhân $2$ khi đạo hàm $8{,}25v_A^2$; `10e` ($4{,}83$) kéo theo lỗi quên ròng rọc $D$.

- **Câu 11 (`d. Các đáp án còn lại đều sai`):**
  - Tách vật $A$ theo D'Alembert: $S_1 = m_2(g - a_A)$ $= \frac{1900}{33} \approx 57{,}58\text{ N}$.
  - Tách ròng rọc đặc $D$ ($J_D = \frac{1}{2}m_D r_D^2$, $\varepsilon_D = \frac{a_A}{r_D}$):

    $$\begin{aligned}
    (S_1 - S_2)r_D - J_D\varepsilon_D &= 0 \\
    \implies S_2 = S_1 - \frac{1}{2}m_D a_A &= \frac{1900}{33} - \frac{280}{33} = \frac{540}{11} \approx 49{,}09\text{ N}
    \end{aligned}$$

  - *Giải phẫu nhiễu:* Giá trị đúng $S_2 \approx 49{,}09\text{ N}$ không nằm trong các số đã cho nên chọn **`11d`**. Phương án `11a` ($57{,}58\text{ N}$) bỏ qua quán tính ròng rọc $D$, gán nhầm $S_2 = S_1$; `11b` ($66{,}06\text{ N}$) cộng nhầm dấu $+\frac{1}{2}m_D a_A$; `11c` ($40{,}61\text{ N}$) dùng nhầm $J_D = m_D r_D^2$.

- **Câu 12 (`b`):**
  - Tách riêng con lăn $C$ ($a_C = \frac{1}{2}a_A = \frac{70}{33}\text{ m/s}^2$ hướng lên dốc; gọi $F_{\text{msn}}$ hướng lên dốc tại tiếp điểm $I$):
    Chiếu dọc dốc hướng lên:

    $$\begin{aligned}
    S_2 + F_{\text{msn}} - m_1 g\sin 30^\circ - m_1 a_C &= 0 \\
    \implies F_{\text{msn}} = 60 + 12\cdot\frac{70}{33} - \frac{1620}{33} &= \frac{400}{11} \approx 36{,}36\text{ N}
    \end{aligned}$$

    *(Kiểm chứng bằng phương trình mômen quanh tâm $C$: $(S_2 - F_{\text{msn}})R = \frac{1}{2}m_1 R a_C$, suy ra $F_{\text{msn}} = \frac{1620 - 420}{33} = \frac{400}{11}\text{ N}$, hoàn toàn trùng khớp).*
  - Phản lực pháp tuyến $N_C = m_1 g\cos 30^\circ = 60\sqrt{3}\text{ N}$. Điều kiện $\lvert F_{\text{msn}}\rvert \le f_0 N_C$:

    $$f_0 \ge f_{0,\min} = \frac{400/11}{60\sqrt{3}} = \frac{20\sqrt{3}}{99} \approx 0{,}35$$

  - *Giải phẫu nhiễu:* `12a` ($0{,}27$) bỏ quên hoặc đảo dấu lực quán tính $m_1 a_C$; `12c` ($0{,}43$) thay nhầm $S_1 = 57{,}58\text{ N}$ từ `11a` vào phương trình mômen; `12d` ($0{,}30$) chia cho $m_1 g$ thay vì $m_1 g\cos 30^\circ$.

</details>

---

### Bảng Phán Quyết Năng Lực Trung Thực Chặng 3

Đối chiếu số câu trả lời đúng (làm hoàn toàn độc lập trong 35 phút, không mở sách) với bảng phân loại dưới đây trước khi quyết định chuyển sang Chặng 4:

| Điểm số | Phán quyết năng lực thực tế | Lỗi hệ thống điển hình & Yêu cầu khắc phục bắt buộc |
| :---: | :--- | :--- |
| **`0 – 7 / 12`**<br>*(Dưới ngưỡng an toàn)* | **CẤM chuyển sang Chặng 4.** Nền tảng quy đổi động học 1 BTD hoặc phép tính công–đạo hàm động năng đang hổng nghiêm trọng; nếu học ép sang Phương trình Lagrange loại II (Chặng 4) sẽ sai toàn bộ động năng $T(q_1, q_2, \dot{q}_1, \dot{q}_2)$ và lực suy rộng $Q_i$. | - **Sai Câu 1, 5, 9:** Hổng định lý Huygens–Steiner, Định lý König hoặc tâm vận tốc tức thời $I$ $\rightarrow$ Học lại toàn bộ **Ngày 11**, giải lại tay `Thí dụ 2–8`, `Thí dụ 2–14`, `Bài 2.28` ([SBT ĐLH Ch.2](/bai-tap/dong-luc-hoc/chuong-2)) và [Đề `1721` C6–7–9](/on-thi/de-thi-that-hcmut#de-1721).<br>- **Sai Câu 2, 6:** Hổng tích phân công lò xo khi $\Delta l_0 \neq 0$, công ma sát trượt hoặc bỏ qua bước kiểm toán biên $\sum A(q_0) = 0$ $\rightarrow$ Học lại **Ngày 12**, giải lại `Thí dụ 2–9`, `Bài 2.34` ([SBT ĐLH Ch.2](/bai-tap/dong-luc-hoc/chuong-2)) và [Đề `0001/2016` C4](/on-thi/de-thi-that-hcmut#de-2016).<br>- **Sai Câu 3, 4, 7, 8:** Bỏ sót số hạng $\frac{1}{2}M'_{\text{td}}(q)\dot{q}^3$ khi đạo hàm $T$ hoặc sai chuyển đổi từ $\omega$ sang vận tốc điểm $\rightarrow$ Học lại **Ngày 13**, giải lại `Thí dụ 2–17` ([SBT ĐLH Ch.2](/bai-tap/dong-luc-hoc/chuong-2)) và [Đề `0002/2016` C3–6](/on-thi/de-thi-that-hcmut#de-2016).<br>- **Sai Câu 10, 11, 12:** Chưa tách được vật rắn đơn lẻ với lực quán tính D'Alembert $\rightarrow$ Học lại **Ngày 14**, giải lại `Bài 6.19`, `Bài 6.26` ([SBT ĐLH Ch.6](/bai-tap/dong-luc-hoc/chuong-6)). |
| **`8 – 9 / 12`**<br>*(Đạt ngưỡng tối thiểu)* | **Đạt điều kiện tối thiểu, nhưng chưa vững trước bẫy phương án nhiễu.** Có khả năng giải đúng các câu chuẩn nhưng còn sập bẫy ở câu `4e`, `8c` ($\dot{\theta}^3$) hoặc `11d` (quán tính ròng rọc trung gian). | Bắt buộc giải lại độc lập từng câu bị sai trên giấy trắng cho tới khi tự suy dẫn ra đúng đáp số kiểm toán mà không nhìn lời giải, đặc biệt rà soát lại kỹ năng đạo hàm $M_{\text{td}}(\theta)\dot{\theta}^2$ trước khi bước sang Chặng 4. |
| **`10 – 12 / 12`**<br>*(Đạt chuẩn vững)* | **Đủ năng lực chuyển tiếp sang Chặng 4.** Đã nắm vững chuỗi thiết lập $T \to \sum A \to \frac{dT}{dt} \to \text{D'Alembert}$ và tự phát hiện được phương án *«Các đáp án còn lại đều sai»* bằng tính toán độc lập. | Chuyển sang [Chặng 4 (Ngày 16–20): Di Chuyển Khả Dĩ, Phương Trình Lagrange Loại II & Thi Thử Chuẩn Phòng Thi](/on-thi/chang-4-ve-dich). |
