---
title: "Chặng 1 (Ngày 1 – Ngày 5): Nền Tảng Vectơ, Chuyển Động Song Phẳng & Hợp Chuyển Động (AS1003)"
layout: doc
---

# Chặng 1 (Ngày 1 – Ngày 5): Nền Tảng Vectơ, Chuyển Động Song Phẳng & Hợp Chuyển Động

Chặng 1 xây dựng hệ thống công cụ đại số vectơ không gian, phép đạo hàm vectơ trong hệ quy chiếu quay và mô hình giải phóng liên kết làm nền tảng bắt buộc cho toàn bộ học phần **`DCMH.AS1003` (Cơ Lý Thuyết — ĐH Bách Khoa ĐHQG-HCM)**, đồng thời giải quyết trọn vẹn phần Động học thi Cuối kỳ gồm **Chương 9 (Hợp chuyển động điểm & gia tốc Coriolis)** và **Chương 10 (Chuyển động song phẳng của vật rắn & Hệ bánh răng)**. Trong cấu trúc đề thi trắc nghiệm `10–13` câu / `90` phút, riêng khối kiến thức Chương 9–10 chiếm trực tiếp `2–4` câu độc lập và quyết định quan hệ động học đầu vào cho toàn bộ các câu Định lý Động năng (Chương 12), Nguyên lý D'Alembert (Chương 13) và Phương trình Lagrange loại II (Chương 15).

::: info Khung phân bổ khối lượng học tập Chặng 1 (5 ngày — 3 đến 4 giờ thực học/ngày)
| Ngày | Nội dung học thuật & kỹ thuật trọng tâm | Đối chiếu Giáo trình & SBT Đỗ Sanh | Đối chiếu Đề thi thật HCMUT |
| :--- | :--- | :--- | :--- |
| **Ngày 1** | Hình học vectơ không gian, phép chiếu hệ trục đảo chiều, công thức Poisson & giải phóng liên kết 2D/3D | [Tĩnh học C1](/tinh-hoc/chuong-1) · [BT TH C1](/bai-tap/tinh-hoc/chuong-1) · [C2](/bai-tap/tinh-hoc/chuong-2) · [C3](/bai-tap/tinh-hoc/chuong-3) | [Đề `1721` Bài 2](/on-thi/de-thi-that-hcmut#de-1721) · [Đề `1643/1744`](/on-thi/de-thi-that-hcmut#de-giua-ky-1643-1744) |
| **Ngày 2** | Cơ sở lý thuyết chuyển động song phẳng, tâm vận tốc tức thời $I$ & gia tốc tiếp điểm lăn không trượt trên đường thẳng/cung tròn | [Động học C4](/dong-hoc/chuong-4) · [BT ĐH C3 (Ch.8)](/bai-tap/dong-hoc/chuong-3) | [Đề `1821` C1–2](/on-thi/de-thi-that-hcmut#de-1821) · [Đề `0001/2016` C7–8](/on-thi/de-thi-that-hcmut#de-2016) |
| **Ngày 3** | Khảo sát cơ cấu phẳng đa khâu: đối chiếu song song Hình chiếu vectơ, Tâm $I$ và Giải tích đạo hàm ràng buộc | [Động học C4](/dong-hoc/chuong-4) · [BT ĐH C3 (`8.1`–`8.4`)](/bai-tap/dong-hoc/chuong-3) | [Đề `1821` C1–4](/on-thi/de-thi-that-hcmut#de-1821) · [Đề `1721/1722` C6–7](/on-thi/de-thi-that-hcmut#de-1721) |
| **Ngày 4** | Hợp chuyển động điểm, chứng minh gia tốc Coriolis & phân tích bài toán thuận/ngược cơ cấu culit rãnh quay | [Động học C3](/dong-hoc/chuong-3) · [BT ĐH C5 (`10.1`–`10.4`)](/bai-tap/dong-hoc/chuong-5) | [Đề `1721` C1–2](/on-thi/de-thi-that-hcmut#de-1721) · [Đề `1722` C1–2](/on-thi/de-thi-that-hcmut#de-1722) · [Chủ đề 5](/on-thi/de-thi-that-hcmut#chu-de-5-8) |
| **Ngày 5** | Hệ bánh răng trục cố định, hành tinh, vi sai phẳng & nón (Willis) + **Cổng Kiểm Định Chặng 1 (12 câu / 35 phút)** | [Động học C4](/dong-hoc/chuong-4) · [BT ĐH C6 (`11.1`–`11.4`)](/bai-tap/dong-hoc/chuong-6) | [Chủ đề 7](/on-thi/de-thi-that-hcmut#chu-de-5-8) & Kiểm định năng lực bắt buộc |
:::

> Điều hướng hệ thống: [Tổng quan lộ trình 20 ngày (AS1003)](/on-thi/) · [Chặng 2: Ch.11–13 D'Alembert](/on-thi/chang-2-dong-hoc) · [Chặng 3: Ch.12.2–12.3 Động năng](/on-thi/chang-3-dong-luc-hoc) · [Chặng 4: Ch.14–15 Lagrange II & Tài liệu Tra cứu A4](/on-thi/chang-4-ve-dich) · [Ngân hàng Đề thi thật HCMUT](/on-thi/de-thi-that-hcmut)

---

## Ngày 1: Hình Học Vectơ Không Gian, Đạo Hàm Vectơ Trong Hệ Quy Chiếu Quay & Giải Phóng Liên Kết {#ngay-1}

Sai số phổ biến nhất trong bài thi trắc nghiệm AS1003 không nằm ở việc quên phương trình tổng quát, mà phát sinh từ ba lỗ hổng toán học cơ sở: chiếu sai dấu khi đề bài xoay hoặc đảo chiều trục tọa độ, nhầm chiều vectơ trục quay trong tích có hướng, và đặt thiếu thành phần phản lực khi giải phóng liên kết.

### 1.1. Phép chiếu tổng quát trên hệ trục Đề-các thuận bất kỳ (kể cả trục đảo chiều)

Cho vectơ $\vec{F}$ (lực, vận tốc hoặc gia tốc) có độ lớn $F = \lvert\vec{F}\rvert \ge 0$ và trục định hướng $\Delta$ mang vectơ đơn vị $\vec{e}_\Delta$. Hình chiếu đại số của $\vec{F}$ lên trục $\Delta$ được định nghĩa duy nhất qua tích vô hướng:

$$F_\Delta = \text{hc}_\Delta(\vec{F}) = \vec{F} \cdot \vec{e}_\Delta = F\cos(\vec{F}, \vec{e}_\Delta)$$

Trong hệ trục tọa độ Đề-các trực chuẩn thuận $Oxyz$ gắn bộ ba vectơ đơn vị $(\vec{i}, \vec{j}, \vec{k})$, chiều của trục thứ ba luôn bị ràng buộc bởi định nghĩa tích có hướng thuận bàn tay phải:

$$\vec{i} \times \vec{j} = \vec{k}, \qquad \vec{j} \times \vec{k} = \vec{i}, \qquad \vec{k} \times \vec{i} = \vec{j}$$

Quy tắc kiểm tra bắt buộc đối với mọi hình vẽ đề thi phẳng trước khi viết bất kỳ phương trình nào:
1. **Hệ trục chuẩn trên mặt giấy ($Ox$ sang phải, $Oy$ hướng lên):** Quay từ $+Ox(\vec{i})$ sang $+Oy(\vec{j})$ một góc $90^\circ$ là chiều ngược kim đồng hồ (CCW), do đó $\vec{k} = \vec{i} \times \vec{j}$ hướng **vuông góc ra ngoài mặt phẳng** ($\odot$). Khi đó: quay **CCW** ứng với $+\vec{k}$ ($\bar{\omega} > 0$), quay **CW** ứng với $-\vec{k}$ ($\bar{\omega} < 0$).
2. **Hệ trục quay $180^\circ$ ($Ox$ sang trái, $Oy$ hướng xuống dưới — cấu hình thực tế của [Đề 1721 Bài 2](/on-thi/de-thi-that-hcmut#de-1721)):** Quay từ tia $+Ox$ (trái) sang tia $+Oy$ (xuống) góc $90^\circ$ vẫn là chiều **ngược kim đồng hồ (CCW)**, nên $\vec{k} = \vec{i} \times \vec{j}$ **vẫn hướng ra ngoài mặt phẳng** ($\odot$). Tuy nhiên, một vectơ hướng sang phải lúc này mang thành phần $-\vec{i}$, và trọng lực hướng xuống dưới mang thành phần $+\vec{j}$.
3. **Hệ trục đảo đơn lẻ một trục ($Ox$ sang phải, $Oy$ hướng xuống dưới):** Quay từ $+Ox$ (phải) sang $+Oy$ (xuống) góc $90^\circ$ là chiều **cùng kim đồng hồ (CW)**, dẫn đến vectơ đơn vị thứ ba của hệ thuận $\vec{e}_3 = \vec{i} \times \vec{j}$ hướng **vào trong mặt phẳng** ($\otimes$). Trong cơ sở $(\vec{i}, \vec{j}, \vec{e}_3)$ này, vật quay CW có $\vec{\omega} = +\omega\vec{e}_3$, còn vật quay CCW có $\vec{\omega} = -\omega\vec{e}_3$. Nếu sinh viên áp đặt thói quen "CCW luôn mang dấu cộng" mà không kiểm tra $\vec{i}\times\vec{j}$, toàn bộ số hạng tích có hướng sẽ đảo dấu.
4. **Phép chiếu hai lần trong không gian ba chiều** (đối chiếu mục `3.1.2` [BT Tĩnh học Chương 3](/bai-tap/tinh-hoc/chuong-3#_3-1-2-chieu-luc-va-tinh-vecto-chinh)): Khi lực $\vec{F}$ hợp góc nhọn $\gamma$ với trục $Oz$ và hình chiếu trung gian $\vec{F}_{xy}$ trên mặt phẳng $Oxy$ hợp góc $\varphi$ với tia $+Ox$:

$$\begin{aligned}
F_z &= \pm F\cos\gamma, \qquad F_{xy} = F\sin\gamma \\
F_x &= \pm F\sin\gamma\cos\varphi, \qquad F_y = \pm F\sin\gamma\sin\varphi
\end{aligned}$$

<div class="figure-container"><img src="/figures/bai-tap/tinh-hoc/hinh_3_1.svg" alt="Hình 3-1: Phép chiếu hai lần của vectơ lực trong hệ tọa độ không gian Oxyz" class="figure-img" /><p class="figure-caption">Hình 1.1: Phép chiếu hai lần của vectơ lực trong không gian Oxyz qua mặt phẳng trung gian Oxy (Hình 3-1, SBT Tĩnh học Chương 3)</p></div>

---

### 1.2. Tích có hướng bằng định thức $3\times 3$, Mômen lực & Tích kép

Với hai vectơ $\vec{a} = (a_x, a_y, a_z)$ và $\vec{b} = (b_x, b_y, b_z)$ biểu diễn trong cơ sở trực chuẩn thuận $(\vec{i}, \vec{j}, \vec{k})$, tích có hướng được tính tường minh bằng định thức cấp 3:

$$\begin{aligned}
\vec{a} \times \vec{b} &= \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ a_x & a_y & a_z \\ b_x & b_y & b_z \end{vmatrix} \\
&= (a_y b_z - a_z b_y)\vec{i} + (a_z b_x - a_x b_z)\vec{j} + (a_x b_y - a_y b_x)\vec{k}
\end{aligned}$$

Hai phép toán tích có hướng xuyên suốt từ Chương 9 đến Chương 15 gồm:
- **Mômen của lực $\vec{F}$ đặt tại $A$ đối với tâm $O$** ($\vec{r} = \overrightarrow{OA} = x\vec{i} + y\vec{j} + z\vec{k}$): $\vec{m}_O(\vec{F}) = \vec{r} \times \vec{F}$. Trong bài toán phẳng ($\vec{r}, \vec{F} \in Oxy$), thành phần đại số theo $\vec{k}$ là $\overline{m}_O(\vec{F}) = xF_y - yF_x = \pm F\cdot d$, và mômen đối với trục $Oz$ bằng mômen của hình chiếu $\vec{F}_{xy}$ đối với giao điểm $O$: $\overline{m}_z(\vec{F}) = \vec{k}\cdot(\vec{r}\times\vec{F}) = xF_y - yF_x$.
- **Tích có hướng với vectơ góc phẳng $\vec{\omega} = \bar{\omega}\vec{k}$ và vectơ bán kính $\vec{r} = x\vec{i} + y\vec{j}$:**

$$\begin{aligned}
\vec{\omega} \times \vec{r} &= (\bar{\omega}\vec{k}) \times (x\vec{i} + y\vec{j}) = -\bar{\omega}y\,\vec{i} + \bar{\omega}x\,\vec{j} \\
\vec{\omega} \times (\vec{\omega} \times \vec{r}) &= (\vec{\omega}\cdot\vec{r})\vec{\omega} - \omega^2\vec{r} = -\omega^2\vec{r} \quad (\text{do } \vec{\omega} \perp \vec{r})
\end{aligned}$$

---

### 1.3. Đạo hàm vectơ trong hệ quy chiếu quay — Chứng minh công thức Poisson & Bour

Xét hệ trục động $Oxyz$ gắn chặt vào vật rắn với cơ sở trực chuẩn $(\vec{e}_1, \vec{e}_2, \vec{e}_3)$ chuyển động quay đối với hệ quy chiếu cố định $Ox_1y_1z_1$ có cơ sở hằng $(\vec{i}_1, \vec{j}_1, \vec{k}_1)$.

**1. Chứng minh trực tiếp cho chuyển động quay phẳng quanh trục cố định** (đối chiếu mục `2.2.2` [Giáo trình Động học Chương 2](/dong-hoc/chuong-2#_2-2-chuyen-đong-quay-quanh-truc-co-đinh-cua-vat-ran)):
Gọi $\varphi(t)$ là góc định vị từ tia cố định $Ox_1$ đến tia động $Ox$ ($\vec{e}_3 \equiv \vec{k}_1 = \text{const}$, vectơ vận tốc góc $\vec{\omega} = \dot{\varphi}\vec{e}_3$). Biểu diễn $(\vec{e}_1, \vec{e}_2)$ theo cơ sở cố định:

$$\vec{e}_1 = \cos\varphi\,\vec{i}_1 + \sin\varphi\,\vec{j}_1, \qquad \vec{e}_2 = -\sin\varphi\,\vec{i}_1 + \cos\varphi\,\vec{j}_1$$

Lấy đạo hàm theo thời gian $t$ (với $\dot{\vec{i}}_1 = \dot{\vec{j}}_1 = \vec{0}$):

$$\begin{aligned}
\frac{d\vec{e}_1}{dt} &= \dot{\varphi}(-\sin\varphi\,\vec{i}_1 + \cos\varphi\,\vec{j}_1) = \dot{\varphi}\vec{e}_2 = \vec{\omega} \times \vec{e}_1 \\
\frac{d\vec{e}_2}{dt} &= -\dot{\varphi}(\cos\varphi\,\vec{i}_1 + \sin\varphi\,\vec{j}_1) = -\dot{\varphi}\vec{e}_1 = \vec{\omega} \times \vec{e}_2, \qquad \frac{d\vec{e}_3}{dt} = \vec{0} = \vec{\omega} \times \vec{e}_3
\end{aligned}$$

<div class="figure-container"><img src="/figures/dong-hoc/hinh_2_9.svg" alt="Hình 2-9: Hệ tọa độ động Oxy quay góc phi so với hệ tọa độ cố định Ox1y1" class="figure-img" /><p class="figure-caption">Hình 1.2: Hệ trục tọa độ động Oxy quay quanh trục cố định đối với hệ Ox1y1 để thiết lập công thức đạo hàm vectơ đơn vị (Hình 2-9, Giáo trình Động học Chương 2)</p></div>

**2. Mở rộng tổng quát không gian 3D (Công thức Poisson & Công thức Bour):**
Với cơ sở trực chuẩn bất kỳ $\vec{e}_m \cdot \vec{e}_n = \delta_{mn}$ ($m, n \in \{1,2,3\}$), lấy đạo hàm hai vế theo $t$:

$$\frac{d\vec{e}_m}{dt}\cdot\vec{e}_n + \vec{e}_m\cdot\frac{d\vec{e}_n}{dt} = 0 \implies \Omega_{nm} + \Omega_{mn} = 0 \quad \left(\text{với } \Omega_{nm} = \vec{e}_n\cdot\frac{d\vec{e}_m}{dt}\right)$$

Ma trận $3\times 3$ có các phần tử $\Omega_{nm}$ là ma trận phản đối xứng ($\Omega_{11}=\Omega_{22}=\Omega_{33}=0$, $\Omega_{nm} = -\Omega_{mn}$), nên chỉ có đúng 3 thành phần độc lập $(\omega_1, \omega_2, \omega_3) = (\Omega_{32}, \Omega_{13}, \Omega_{21})$. Đặt $\vec{\omega} = \omega_1\vec{e}_1 + \omega_2\vec{e}_2 + \omega_3\vec{e}_3$, ta thu được **công thức Poisson** cho mọi vectơ đơn vị gắn chặt với hệ động:

$$\frac{d\vec{e}_m}{dt} = \vec{\omega} \times \vec{e}_m \qquad (m = 1, 2, 3)$$

Hệ quả trực tiếp cho một vectơ biến thiên bất kỳ $\vec{u}(t) = u_1(t)\vec{e}_1 + u_2(t)\vec{e}_2 + u_3(t)\vec{e}_3$ là **công thức đạo hàm tuyệt đối Bour**:

$$\frac{d\vec{u}}{dt} = \sum_{m=1}^3 \dot{u}_m\vec{e}_m + \sum_{m=1}^3 u_m\frac{d\vec{e}_m}{dt} = \frac{\tilde{d}\vec{u}}{dt} + \vec{\omega} \times \vec{u}$$

trong đó $\frac{\tilde{d}\vec{u}}{dt}$ là đạo hàm cục bộ (tương đối) tính trong hệ quy chiếu động khi coi $(\vec{e}_1, \vec{e}_2, \vec{e}_3)$ không đổi. Đặc biệt, nếu đoạn thẳng $\overrightarrow{AB}$ gắn cứng vào vật rắn thì $\frac{\tilde{d}\overrightarrow{AB}}{dt} = \vec{0}$, suy ra $\frac{d\overrightarrow{AB}}{dt} = \vec{\omega} \times \overrightarrow{AB}$.

::: info Ví dụ Kiểm toán 1.1: Tính đạo hàm vectơ quay chậm dần và mômen lực trên hệ trục đảo chiều
**Đề bài:** Trong mặt phẳng quy chiếu gắn hệ trục Đề-các $(O, \vec{i}, \vec{j})$ có tia $+Ox(\vec{i})$ hướng **sang trái** và tia $+Oy(\vec{j})$ hướng **xuống dưới** (cấu hình hệ trục của [Đề 1721 Bài 2](/on-thi/de-thi-that-hcmut#de-1721)). Thanh cứng $OA$ dài $L = 0{,}6\text{ m}$ quay quanh chốt cố định $O$, tại thời điểm khảo sát nằm giữa tia $+Ox$ và $+Oy$ với góc $\widehat{xOA} = \alpha = 30^\circ$. Thanh đang quay **cùng chiều kim đồng hồ (CW)** với tốc độ góc $\omega = 5\text{ rad/s}$ và quay **chậm dần** với độ lớn gia tốc góc $\varepsilon = 10\text{ rad/s}^2$. Tại $A$ đặt lực $\vec{F}$ độ lớn $F = 40\text{ N}$ hướng thẳng đứng **lên trên**. Hãy xác định $\vec{v}_A$, $\vec{a}_A$ và mômen $\vec{m}_O(\vec{F})$ theo cơ sở $(\vec{i}, \vec{j}, \vec{k})$.

**Lời giải kiểm toán:**
1. **Xác định chiều $\vec{k}$ và dấu đại số $\vec{\omega}, \vec{\varepsilon}$:** Quay từ $+Ox$ (sang trái) đến $+Oy$ (xuống dưới) góc $90^\circ$ là chiều ngược kim đồng hồ (CCW), nên $\vec{k} = \vec{i} \times \vec{j}$ hướng **ra ngoài mặt phẳng**. Thanh quay CW $\implies \vec{\omega} = -5\vec{k}\text{ (rad/s)}$. Do thanh quay **chậm dần**, $\vec{\varepsilon}$ ngược chiều $\vec{\omega}$ (tức hướng CCW) $\implies \vec{\varepsilon} = +10\vec{k}\text{ (rad/s}^2\text{)}$.
2. **Vectơ định vị và vận tốc đầu $A$:**
   $$\begin{aligned}
   \overrightarrow{OA} &= L\cos 30^\circ\,\vec{i} + L\sin 30^\circ\,\vec{j} = 0{,}3\sqrt{3}\,\vec{i} + 0{,}3\,\vec{j}\text{ (m)} \\
   \vec{v}_A &= \vec{\omega} \times \overrightarrow{OA} = (-5\vec{k}) \times \left(0{,}3\sqrt{3}\,\vec{i} + 0{,}3\,\vec{j}\right) = 1{,}5\,\vec{i} - 1{,}5\sqrt{3}\,\vec{j}\text{ (m/s)}
   \end{aligned}$$
3. **Gia tốc đầu $A$** ($\vec{a}_A = \vec{\varepsilon}\times\overrightarrow{OA} - \omega^2\overrightarrow{OA}$):
   $$\begin{aligned}
   \vec{a}_A &= (+10\vec{k}) \times \left(0{,}3\sqrt{3}\,\vec{i} + 0{,}3\,\vec{j}\right) - 25\left(0{,}3\sqrt{3}\,\vec{i} + 0{,}3\,\vec{j}\right) \\
   &= -\left(3 + 7{,}5\sqrt{3}\right)\vec{i} + \left(3\sqrt{3} - 7{,}5\right)\vec{j} \approx -15{,}99\,\vec{i} - 2{,}30\,\vec{j}\text{ (m/s}^2\text{)}
   \end{aligned}$$
4. **Mômen lực $\vec{F}$ đối với tâm $O$:** Vì $+Oy$ hướng xuống nên lực thẳng đứng hướng lên biểu diễn là $\vec{F} = -40\vec{j}\text{ (N)}$:
   $$\vec{m}_O(\vec{F}) = \overrightarrow{OA} \times \vec{F} = \left(0{,}3\sqrt{3}\,\vec{i} + 0{,}3\,\vec{j}\right) \times (-40\vec{j}) = -12\sqrt{3}\,\vec{k} \approx -20{,}78\,\vec{k}\text{ (N}\cdot\text{m)}$$
:::

---

### 1.4. Mô hình hóa giải phóng liên kết 2D & 3D

Nguyên lý tiên đề giải phóng liên kết: mỗi bậc tự do chuyển động (tịnh tiến theo một phương hoặc quay quanh một trục) bị liên kết ngăn cản sẽ sinh ra đúng một thành phần phản lực hoặc ngẫu phản lực tương ứng ngược chiều xu hướng di chuyển bị cản trở. Sinh viên bắt buộc đối chiếu trực tiếp sơ đồ cấu tạo gốc tại [Bảng 1–1](/bai-tap/tinh-hoc/chuong-1#bang-1–1), [Bảng 1–2](/bai-tap/tinh-hoc/chuong-1#bang-1–2), nội lực hệ vật tại [Bảng 2-1](/bai-tap/tinh-hoc/chuong-2#bang-2-1) và liên kết không gian tại [Bảng 3–1](/bai-tap/tinh-hoc/chuong-3#bang-3–1):

| Nhóm liên kết | Loại liên kết cơ học | Số ẩn phản lực | Thành phần phản lực / ngẫu phản lực chuẩn hóa |
| :--- | :--- | :---: | :--- |
| **Phẳng (2D)** | **Tựa trơn nhẵn / Gối di động** | $1$ | Phản lực pháp tuyến $\vec{N}$ vuông góc mặt tựa, hướng vào vật khảo sát. |
| **Phẳng (2D)** | **Dây mềm không dãn** | $1$ | Sức căng $\vec{T}$ dọc theo phương dây, luôn hướng rời khỏi vật khảo sát ($T \ge 0$). |
| **Phẳng (2D)** | **Thanh nhẹ hai đầu khớp** | $1$ | Ứng lực $\vec{S}$ nằm dọc đường thẳng nối hai bản lề đầu thanh (kéo $S>0$, nén $S<0$). |
| **Phẳng (2D)** | **Bản lề trụ / Gối cố định** | $2$ | Hai thành phần lực trực giao $(X_A, Y_A)$; khi tách khớp nối hai vật cần đặt cặp nội lực đối xứng $(-X_A, -Y_A)$ lên vật kia ([Bảng 2-1](/bai-tap/tinh-hoc/chuong-2#bang-2-1)). |
| **Phẳng (2D)** | **Ngàm phẳng** | $3$ | Hai thành phần lực $(X_A, Y_A)$ và một ngẫu phản lực phẳng $\overline{M}_A$. |
| **Phẳng (2D)** | **Tiếp xúc lăn không trượt** | $2$ | Phản lực pháp tuyến $N \ge 0$ và ma sát nghỉ $F_{\text{ms}}$ tiếp tuyến mặt lăn (chưa biết chiều, thỏa $\lvert F_{\text{ms}}\rvert \le f_0 N$; khác với trượt động $F_{\text{ms}} = f_{\text{đ}}N$). |
| **Không gian (3D)** | **Bản lề trụ ngắn / Ổ đỡ ngắn** | $2$ | Hai phản lực vuông góc trục quay (ví dụ trục quay $Oz \implies X_A, Y_A$). |
| **Không gian (3D)** | **Gối cầu / Cối (ổ chặn)** | $3$ | Ba thành phần phản lực không gian $(X_B, Y_B, Z_B)$, không cản quay. |
| **Không gian (3D)** | **Ngàm không gian** | $6$ | Ba thành phần lực $(X, Y, Z)$ và ba thành phần ngẫu phản lực $(M_x, M_y, M_z)$. |

<div class="figure-container"><img src="/figures/bai-tap/tinh-hoc/hinh_2_2.svg" alt="Hình 2-2: Hệ hai thanh liên kết bản lề, tựa và ngàm phẳng trong SBT Tĩnh học Chương 2" class="figure-img" /><p class="figure-caption">Hình 1.3: Mô hình tách vật và đặt cặp nội lực - ngoại lực cho cơ hệ kết hợp bản lề O, liên kết tựa B và ngàm phẳng C (Thí dụ 2-2, Hình 2-2, SBT Tĩnh học Chương 2)</p></div>

**Bài tập tự luyện bắt buộc Ngày 1 (SBT Đỗ Sanh):**
- **Phép chiếu & cân bằng một vật phẳng:** [BT Tĩnh học Chương 1](/bai-tap/tinh-hoc/chuong-1#_1-3-bai-giai-mau-worked-examples) — đọc kỹ `Thí dụ 1–1`, `Thí dụ 1–4` và tự giải `Bài 1–3`, `Bài 1–8` trong mục `1.4`.
- **Tách vật & nhận diện thanh hai đầu khớp:** [BT Tĩnh học Chương 2](/bai-tap/tinh-hoc/chuong-2#_2-3-bai-giai-mau) — làm lại độc lập `Thí dụ 2-2`, `Thí dụ 2-3` và giải `Bài 2-1`, `Bài 2-5` trong mục [2.4 Bài tập](/bai-tap/tinh-hoc/chuong-2#_2-4-bai-tap).
- **Chiếu lực hai lần & mômen trục 3D:** [BT Tĩnh học Chương 3](/bai-tap/tinh-hoc/chuong-3#_3-3-1-bai-toan-mot-vat-khong-gian) — giải `Thí dụ 3–1` và `Thí dụ 3–2`.

---

## Ngày 2: Cơ Sở Lý Thuyết Chuyển Động Song Phẳng (Chương 10.1 – 10.4) {#ngay-2}

Chuyển động song phẳng của vật rắn là chuyển động trong đó mọi điểm thuộc vật luôn dịch chuyển trong các mặt phẳng song song với một mặt phẳng quy chiếu cố định $Oxy$ (tương đương 3 bậc tự do định vị $(x_A, y_A, \varphi)$ của thiết diện phẳng $S$).

### 2.1. Chứng minh định lý vận tốc & gia tốc hai điểm từ $\vec{r}_B = \vec{r}_A + \overrightarrow{AB}$

Xét hai điểm bất kỳ $A$ và $B$ gắn cứng trên hình phẳng $S$ chuyển động trong mặt phẳng $Oxy$ (vuông góc với vectơ đơn vị $\vec{k}$). Chọn $A$ làm điểm cực, vị trí điểm $B$ xác định bởi đẳng thức vectơ:

$$\vec{r}_B = \vec{r}_A + \overrightarrow{AB}$$

<div class="figure-container"><img src="/figures/dong-hoc/hinh_4_4.svg" alt="Hình 4-4: Xác định vị trí điểm B thuộc hình phẳng S qua cực A" class="figure-img" /><p class="figure-caption">Hình 2.1: Xác định vectơ vị trí điểm B qua cực A và hệ tọa độ gắn liền với hình phẳng S (Hình 4-4, Giáo trình Động học Chương 4)</p></div>

**1. Định lý quan hệ vận tốc hai điểm & Định lý hình chiếu vận tốc:**
Do vật rắn không biến dạng, vectơ $\overrightarrow{AB}$ có độ dài không đổi và gắn chặt với hệ trục quay của hình phẳng $S$ (vận tốc góc $\vec{\omega} = \bar{\omega}\vec{k}$, với $\bar{\omega} = \dot{\varphi}$). Lấy đạo hàm bậc nhất đẳng thức vị trí theo thời gian $t$ và áp dụng trực tiếp công thức Poisson $\frac{d\overrightarrow{AB}}{dt} = \vec{\omega} \times \overrightarrow{AB}$:

$$\vec{v}_B = \frac{d\vec{r}_A}{dt} + \frac{d\overrightarrow{AB}}{dt} = \vec{v}_A + \vec{\omega} \times \overrightarrow{AB} = \vec{v}_A + \vec{v}_{BA}$$

trong đó $\vec{v}_{BA} = \vec{\omega} \times \overrightarrow{AB}$ có phương vuông góc với $AB$, chiều thuận theo chiều quay của $\vec{\omega}$ quanh cực $A$ và độ lớn $v_{BA} = \omega \cdot AB$.
- **Tính bất biến của $\vec{\omega}$ đối với cực:** Nếu chọn $B$ làm cực thì $\vec{v}_A = \vec{v}_B + \vec{\omega}_B \times \overrightarrow{BA} = \vec{v}_B - \vec{\omega}_B \times \overrightarrow{AB}$. Cộng với biểu thức cực $A$ được $(\vec{\omega}_A - \vec{\omega}_B) \times \overrightarrow{AB} = \vec{0}$; vì $(\vec{\omega}_A - \vec{\omega}_B) \parallel Oz \perp \overrightarrow{AB}$ và $AB \neq 0$, suy ra $\vec{\omega}_A \equiv \vec{\omega}_B = \vec{\omega}$ (vận tốc góc là đặc trưng của toàn hình phẳng, không phụ thuộc cực).
- **Định lý hình chiếu vận tốc:** Nhân vô hướng hai vế của $\vec{v}_B = \vec{v}_A + \vec{\omega} \times \overrightarrow{AB}$ với vectơ đơn vị $\vec{e}_{AB} = \frac{\overrightarrow{AB}}{AB}$, do $(\vec{\omega} \times \overrightarrow{AB}) \cdot \vec{e}_{AB} = 0$ nên ta có:

$$\vec{v}_B \cdot \vec{e}_{AB} = \vec{v}_A \cdot \vec{e}_{AB} \iff \text{hc}_{AB}(\vec{v}_B) = \text{hc}_{AB}(\vec{v}_A)$$

**2. Chứng minh định lý quan hệ gia tốc hai điểm:**
Lấy đạo hàm bậc hai theo thời gian $t$ phương trình vận tốc (với gia tốc góc $\vec{\varepsilon} = \frac{d\vec{\omega}}{dt} = \bar{\varepsilon}\vec{k}$):

$$\begin{aligned}
\vec{a}_B &= \frac{d\vec{v}_A}{dt} + \frac{d\vec{\omega}}{dt} \times \overrightarrow{AB} + \vec{\omega} \times \frac{d\overrightarrow{AB}}{dt} \\
&= \vec{a}_A + \vec{\varepsilon} \times \overrightarrow{AB} + \vec{\omega} \times (\vec{\omega} \times \overrightarrow{AB})
\end{aligned}$$

Do $\vec{\omega} \perp \overrightarrow{AB}$ ($\vec{\omega} \cdot \overrightarrow{AB} = 0$), khai triển tích có hướng kép cho $\vec{\omega} \times (\vec{\omega} \times \overrightarrow{AB}) = (\vec{\omega}\cdot\overrightarrow{AB})\vec{\omega} - \omega^2\overrightarrow{AB} = -\omega^2\overrightarrow{AB}$. Ta thu được công thức gia tốc hai điểm:

$$\begin{aligned}
\vec{a}_B &= \vec{a}_A + \vec{a}_{BA}^\tau + \vec{a}_{BA}^n \\
\vec{a}_{BA}^\tau &= \vec{\varepsilon} \times \overrightarrow{AB} \quad (\perp AB,\; a_{BA}^\tau = \lvert\bar{\varepsilon}\rvert \cdot AB) \\
\vec{a}_{BA}^n &= -\omega^2\overrightarrow{AB} \quad (\text{hướng từ } B \text{ về cực } A,\; a_{BA}^n = \omega^2 \cdot AB)
\end{aligned}$$

---

### 2.2. Chứng minh sự tồn tại và tính duy nhất của Tâm Vận Tốc Tức Thời $I$ ($P$)

**Định lý:** Tại mỗi thời điểm $t$ mà hình phẳng có $\omega \neq 0$, luôn tồn tại **duy nhất** một điểm $I$ (trong giáo trình Đỗ Sanh ký hiệu là $P$) gắn liền với hình phẳng (hoặc phần mở rộng hình học của nó) có vận tốc tức thời triệt tiêu ($\vec{v}_I = \vec{0}$).

**Chứng minh đại số:** Cần tìm vectơ $\overrightarrow{AI}$ thỏa mãn $\vec{v}_I = \vec{v}_A + \vec{\omega} \times \overrightarrow{AI} = \vec{0}$, tức $\vec{\omega} \times \overrightarrow{AI} = -\vec{v}_A$. Nhân có hướng bên trái hai vế với $\vec{\omega}$ (chú ý $\vec{\omega} \cdot \overrightarrow{AI} = 0$ và $\omega \neq 0$):

$$\begin{aligned}
\vec{\omega} \times (\vec{\omega} \times \overrightarrow{AI}) &= -\vec{\omega} \times \vec{v}_A \\
-\omega^2\overrightarrow{AI} &= -\vec{\omega} \times \vec{v}_A \implies \overrightarrow{AI} = \frac{\vec{\omega} \times \vec{v}_A}{\omega^2}
\end{aligned}$$

Biểu thức trên xác định tường minh và duy nhất vị trí điểm $I$: nhận được bằng cách quay vectơ $\vec{v}_A$ quanh $A$ một góc $90^\circ$ theo đúng chiều quay của $\vec{\omega}$ và đặt đoạn $AI = \frac{v_A}{\omega}$. Kiểm chứng ngược lại: $\vec{v}_I = \vec{v}_A + \vec{\omega} \times \frac{\vec{\omega}\times\vec{v}_A}{\omega^2} = \vec{v}_A - \vec{v}_A = \vec{0}$. Nếu giả sử có điểm thứ hai $I' \neq I$ cũng thỏa $\vec{v}_{I'} = \vec{0}$ thì $\vec{0} = \vec{v}_{I'} - \vec{v}_I = \vec{\omega} \times \overrightarrow{II'}$, mâu thuẫn vì $\omega \neq 0$ và $\vec{\omega} \perp \overrightarrow{II'}$.

Khi chọn $I$ làm cực cho bài toán **vận tốc**: $\vec{v}_M = \vec{\omega} \times \overrightarrow{IM}$ ($\vec{v}_M \perp IM$, $v_M = \omega \cdot IM \implies \frac{v_A}{IA} = \frac{v_B}{IB} = \omega$). Ngược lại, khi $\omega = 0$ ($I \to \infty$), hình phẳng ở trạng thái **tịnh tiến tức thời**: $\vec{v}_M = \vec{v}_A$ với mọi điểm $M$, thành phần hướng tâm $\vec{a}_{BA}^n = -\omega^2\overrightarrow{AB} = \vec{0}$, nhưng nói chung $\vec{\varepsilon} = \frac{d\vec{\omega}}{dt} \neq \vec{0}$ nên $\vec{a}_B = \vec{a}_A + \vec{\varepsilon} \times \overrightarrow{AB} \neq \vec{a}_A$.

<div class="figure-container"><img src="/figures/dong-hoc/hinh_4_9.svg" alt="Hình 4-9: Các quy tắc hình học xác định tâm vận tốc tức thời P" class="figure-img" /><p class="figure-caption">Hình 2.2: Năm cấu hình thực hành xác định vị trí tâm vận tốc tức thời của hình phẳng (Hình 4-9, Giáo trình Động học Chương 4)</p></div>

---

### 2.3. Chứng minh tại điểm tiếp xúc $I$ của đĩa lăn không trượt: $\vec{v}_I = \vec{0}$ nhưng $\vec{a}_I \neq \vec{0}$

Điều kiện vật lý "lăn không trượt" giữa một đĩa tròn tâm $C$ (bán kính $R$ hoặc $r$) và một đường tựa cố định là điểm vật chất $I$ thuộc vành đĩa đang tiếp xúc với đường tựa có cùng vận tốc với điểm tiếp xúc trên nền đứng yên, tức $\vec{v}_I = \vec{0}$ ($I$ chính là tâm vận tốc tức thời). Tuy nhiên, gia tốc $\vec{a}_I$ của điểm vật chất $I$ thuộc đĩa **khác không** (trừ khi $\omega = 0$). Ta chứng minh chặt chẽ cho cả hai dạng biên dạng đường lăn.

#### Trường hợp 1: Đĩa bán kính $R$ lăn không trượt trên đường thẳng cố định

Chọn hệ trục cố định $Oxy$ có $Ox(\vec{i})$ dọc mặt đường sang phải, $Oy(\vec{j}) = \vec{n}$ vuông góc mặt đường hướng từ tiếp điểm $I$ vào tâm $C$. Khi đĩa lăn sang phải góc $\theta(t)$ theo chiều kim đồng hồ ($\dot{\theta} = \omega$, $\ddot{\theta} = \varepsilon$, tức $\vec{\omega} = -\omega\vec{k}$, $\vec{\varepsilon} = -\varepsilon\vec{k}$):
- **Chứng minh bằng công thức dời cực từ tâm $C$:** Do tâm $C$ chuyển động thẳng song song mặt đường ($y_C = R = \text{const}$), ta có $x_C = x_{C0} + R\theta(t) \implies \vec{v}_C = \omega R\,\vec{i}$ và $\vec{a}_C = \varepsilon R\,\vec{i}$. Với $\overrightarrow{CI} = -R\vec{j}$:

$$\begin{aligned}
\vec{v}_I &= \vec{v}_C + \vec{\omega} \times \overrightarrow{CI} = \omega R\,\vec{i} + (-\omega\vec{k}) \times (-R\vec{j}) = (\omega R - \omega R)\vec{i} = \vec{0} \\
\vec{a}_I &= \vec{a}_C + \vec{\varepsilon} \times \overrightarrow{CI} - \omega^2\overrightarrow{CI} \\
&= \varepsilon R\,\vec{i} + (-\varepsilon\vec{k}) \times (-R\vec{j}) - \omega^2(-R\vec{j}) = +\omega^2 R\,\vec{j} = +\omega^2 R\,\vec{n}
\end{aligned}$$

- **Chứng minh giải tích qua quỹ đạo xicloit (cycloid):** Điểm vật chất $M$ gắn cố định trên vành đĩa trùng với gốc $O(0,0)$ tại $t = 0$ ($\theta(0) = 0$) có phương trình tham số $x_M(t) = R\theta(t) - R\sin\theta(t)$, $y_M(t) = R - R\cos\theta(t)$. Lấy đạo hàm cấp 1 và cấp 2 theo $t$:

$$\begin{aligned}
\dot{x}_M &= R\dot{\theta}(1 - \cos\theta), & \dot{y}_M &= R\dot{\theta}\sin\theta \\
\ddot{x}_M &= R\ddot{\theta}(1 - \cos\theta) + R\dot{\theta}^2\sin\theta, & \ddot{y}_M &= R\ddot{\theta}\sin\theta + R\dot{\theta}^2\cos\theta
\end{aligned}$$

Thay thời điểm tiếp xúc $\theta = 0$ ($\dot{\theta} = \omega$): ta thu được ngay $\dot{x}_M(0) = \dot{y}_M(0) = 0$ ($\vec{v}_I = \vec{0}$), còn $\ddot{x}_M(0) = 0$, $\ddot{y}_M(0) = +\omega^2 R \neq 0$. Về mặt hình học, điểm vật chất $I$ trên vành đĩa chạm nền tại điểm lùi của đường xicloit rồi lập tức nhấc lên theo phương pháp tuyến $+\vec{n}$. **Tâm gia tốc tức thời $Q$** (điểm có $\vec{a}_Q = \vec{0}$) nằm cách tâm $C$ đoạn $CQ = \frac{a_C}{\sqrt{\omega^4 + \varepsilon^2}} = \frac{\varepsilon R}{\sqrt{\omega^4 + \varepsilon^2}}$, hoàn toàn không trùng với $I$.

<div class="figure-container"><img src="/figures/dong-hoc/hinh_4_10.svg" alt="Hình 4-10: Phân bố vận tốc trên bánh xe bán kính R lăn không trượt trên đường thẳng" class="figure-img" /><p class="figure-caption">Hình 2.3: Phân bố vận tốc quay tức thời quanh tiếp điểm P (tức I) của bánh xe lăn không trượt trên đường thẳng (Hình 4-10, Giáo trình Động học Chương 4)</p></div>

<div class="figure-container"><img src="/figures/dong-hoc/hinh_4_13.svg" alt="Hình 4-13: Xác định tâm gia tốc tức thời Q của bánh xe lăn không trượt" class="figure-img" /><p class="figure-caption">Hình 2.4: Vị trí tâm gia tốc tức thời Q tách biệt hoàn toàn với tâm vận tốc tức thời P trên bánh xe lăn không trượt (Hình 4-13, Giáo trình Động học Chương 4)</p></div>

#### Trường hợp 2: Đĩa bán kính $r$ lăn không trượt trên cung tròn cố định bán kính $R_{\text{đường}}$

Gọi $O$ là tâm cung tròn cố định bán kính $R_{\text{đường}}$, $C$ là tâm đĩa động bán kính $r$, và $\vec{n}$ là vectơ pháp tuyến đơn vị hướng từ tiếp điểm $I$ vào tâm đĩa $C$ ($\overrightarrow{CI} = -r\vec{n}$). Vì $I$ là tâm vận tốc tức thời của đĩa nên $v_C = \omega r$ và $a_C^\tau = \dot{v}_C = \varepsilon r$ (dẫn đến hai thành phần tiếp tuyến $\vec{a}_C^\tau + \vec{a}_{IC}^\tau = \vec{0}$ luôn triệt tiêu nhau như trên mặt phẳng). Điểm khác biệt cốt lõi là tâm $C$ nay chuyển động trên quỹ đạo tròn quanh $O$ nên bản thân cực $C$ có thêm gia tốc pháp tuyến $\vec{a}_C^n$:

1. **Lăn ngoài trên vành tròn lồi cố định** ($OC = R_{\text{đường}} + r$, $O$ và $C$ nằm khác phía đối với tiếp điểm $I$ nên $\vec{a}_C^n$ hướng từ $C$ về $O$, tức ngược chiều $\vec{n}$):

$$\begin{aligned}
\vec{a}_C^n &= -\frac{v_C^2}{R_{\text{đường}} + r}\vec{n} = -\frac{\omega^2 r^2}{R_{\text{đường}} + r}\vec{n} \\
\implies \vec{a}_I^{\text{lăn ngoài}} &= \vec{a}_C^n + \vec{a}_{IC}^n = \left(-\frac{\omega^2 r^2}{R_{\text{đường}} + r} + \omega^2 r\right)\vec{n} = \omega^2 r\left(\frac{R_{\text{đường}}}{R_{\text{đường}} + r}\right)\vec{n}
\end{aligned}$$

2. **Lăn trong trên vành tròn lõm cố định** ($R_{\text{đường}} > r$, $OC = R_{\text{đường}} - r$, tâm $O$ nằm cùng phía với $C$ đối với $I$ nên $\vec{a}_C^n$ hướng từ $C$ về $O$ **cùng chiều** $+\vec{n}$):

$$\begin{aligned}
\vec{a}_C^n &= +\frac{v_C^2}{R_{\text{đường}} - r}\vec{n} = +\frac{\omega^2 r^2}{R_{\text{đường}} - r}\vec{n} \\
\implies \vec{a}_I^{\text{lăn trong}} &= \vec{a}_C^n + \vec{a}_{IC}^n = \left(+\frac{\omega^2 r^2}{R_{\text{đường}} - r} + \omega^2 r\right)\vec{n} = \omega^2 r\left(\frac{R_{\text{đường}}}{R_{\text{đường}} - r}\right)\vec{n}
\end{aligned}$$

*Kiểm chứng giới hạn suy biến:* Khi $R_{\text{đường}} \to \infty$ (cung tròn suy biến thành đường thẳng), cả hai hệ số $\frac{R_{\text{đường}}}{R_{\text{đường}} \pm r} \to 1$, khôi phục chính xác $\vec{a}_I = +\omega^2 r\,\vec{n}$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_8_20.svg" alt="Hình 8-20: Bánh 2 bán kính r2 lăn không trượt ngoài trên bánh 1 cố định bán kính r1" class="figure-img" /><p class="figure-caption">Hình 2.5: Mô hình bánh động 2 lăn không trượt ngoài trên vành bánh cố định 1 với tiếp điểm P là tâm vận tốc tức thời (Thí dụ 8-3, Hình 8-20, SBT Động học Chương 8)</p></div>

::: info Ví dụ Kiểm toán 2.1: So sánh định lượng $\vec{a}_I$ trên đường thẳng, cung lồi và cung lõm
**Đề bài:** Một bánh răng động bán kính $r = 0{,}12\text{ m}$ tại thời điểm khảo sát có độ lớn vận tốc góc tuyệt đối $\omega = 4\text{ rad/s}$ và độ lớn gia tốc góc $\varepsilon = 5\text{ rad/s}^2$. Tính độ lớn gia tốc tiếp điểm $I$ thuộc bánh động trong ba cấu hình lăn không trượt: (a) trên thanh răng phẳng cố định (kèm khoảng cách $CQ$ tới tâm gia tốc tức thời); (b) lăn ngoài trên vành bánh cố định bán kính $R_{\text{đường}} = 0{,}12\text{ m}$ (đối chiếu `Bài 8-10` SBT Đỗ Sanh); (c) lăn trong trên vành răng cố định bán kính $R_{\text{đường}} = 0{,}36\text{ m}$.

**Lời giải kiểm toán:**
- **(a) Trên thanh răng phẳng ($R_{\text{đường}} \to \infty$):** $a_I = \omega^2 r = 4^2 \cdot 0{,}12 = 1{,}92\text{ m/s}^2$; gia tốc tâm $a_C = \varepsilon r = 0{,}60\text{ m/s}^2$, khoảng cách tới tâm gia tốc tức thời $CQ = \frac{0{,}60}{\sqrt{4^4 + 5^2}} = \frac{0{,}60}{\sqrt{281}} \approx 0{,}0358\text{ m}$.
- **(b) Lăn ngoài ($R_{\text{đường}} = 0{,}12\text{ m} = r$):** $a_I^{\text{ngoài}} = 1{,}92 \cdot \frac{0{,}12}{0{,}12 + 0{,}12} = 0{,}96\text{ m/s}^2 = 96\text{ cm/s}^2$ (khớp chính xác đáp số $a_M = 96\text{ cm/s}^2$ của `Bài 8-10` trong [BT Động học Chương 3](/bai-tap/dong-hoc/chuong-3#_8-4-bai-tap)).
- **(c) Lăn trong ($R_{\text{đường}} = 0{,}36\text{ m} = 3r$):** $a_I^{\text{trong}} = 1{,}92 \cdot \frac{0{,}36}{0{,}36 - 0{,}12} = 1{,}92 \cdot 1{,}5 = 2{,}88\text{ m/s}^2$.
:::

---

### 2.4. Bốn lỗi sai nghiêm trọng về dấu của $\vec{\omega}, \vec{\varepsilon}$ và quy ước bàn tay phải

::: danger Phân tích 4 lỗi hệ thống gây mất điểm trực tiếp trong đề thi AS1003
1. **Gán dấu $\bar{\varepsilon}$ trùng dấu $\bar{\omega}$ bất chấp tính chất chuyển động:** Quy tắc đúng là $\frac{d(\omega^2)}{dt} = 2\bar{\omega}\bar{\varepsilon}$. Vật quay nhanh dần có $\bar{\omega}\bar{\varepsilon} > 0$ ($\vec{\varepsilon} \uparrow\uparrow \vec{\omega}$); vật quay chậm dần có $\bar{\omega}\bar{\varepsilon} < 0$ ($\vec{\varepsilon} \uparrow\downarrow \vec{\omega}$ — ví dụ [Đề 1744 Câu 8](/on-thi/de-thi-that-hcmut#de-giua-ky-1643-1744) cho $\omega$ ngược KĐH nhưng $\varepsilon$ cùng KĐH).
2. **Bỏ qua phép kiểm tra $\vec{k} = \vec{i} \times \vec{j}$ khi đề đảo trục tọa độ:** Nếu đề vẽ $Ox$ sang phải nhưng $Oy$ hướng xuống dưới, vectơ thứ ba của tam diện thuận hướng **vào trong** mặt giấy; viết tự động "ngược KĐH là $+\vec{k}$" sẽ làm đảo dấu toàn bộ $\vec{v}_{BA}$ và $\vec{a}_{BA}^\tau$.
3. **Đảo ngược vectơ định vị $\overrightarrow{AB} = \vec{r}_B - \vec{r}_A$ thành $\overrightarrow{BA}$:** Trong công thức $\vec{a}_B = \vec{a}_A + \vec{\varepsilon}\times\overrightarrow{AB} - \omega^2\overrightarrow{AB}$, vectơ bán kính bắt buộc xuất phát **từ điểm cực $A$ tới điểm cần tính $B$**. Đảo nhầm thành $\overrightarrow{BA}$ làm ngược đồng thời cả chiều $\vec{a}_{BA}^\tau$ lẫn chiều hướng tâm $\vec{a}_{BA}^n$.
4. **Dùng tâm vận tốc tức thời $I$ làm cực tính gia tốc với giả thiết sai $\vec{a}_I = \vec{0}$, hoặc suy diễn $\omega = 0 \implies \vec{\varepsilon} = \vec{0}$:** Khi giải gia tốc cho đĩa lăn không trượt, bắt buộc chọn **tâm hình học $C$** của đĩa làm cực; khi thanh truyền tịnh tiến tức thời ($\omega_{AB} = 0$), chỉ có $\vec{a}_{BA}^n = \vec{0}$, còn $\vec{\varepsilon}_{AB}$ vẫn là ẩn số khác không cần giải từ phương trình chiếu.
:::

**Bài tập tự luyện bắt buộc Ngày 2 (SBT Đỗ Sanh):**
- [BT Động học Chương 3 (Chương 8 gốc)](/bai-tap/dong-hoc/chuong-3#_8-3-bai-giai-mau): đọc và tự chứng minh lại `Thí dụ 8-2`, `Thí dụ 8-3`, `Thí dụ 8-7`; giải trọn vẹn `Bài 8-4`, `Bài 8-5`, `Bài 8-7`, `Bài 8-10` trong mục [8.4.2](/bai-tap/dong-hoc/chuong-3#_8-4-bai-tap) và [Đề 0001/2016 Câu 7–8](/on-thi/de-thi-that-hcmut#de-2016).

---

## Ngày 3: Thực Chiến Cơ Cấu Phẳng Đa Khâu (3 Phương Pháp: Hình Chiếu, Tâm $I$, Giải Tích) {#ngay-3}

Một cơ cấu phẳng đa khâu trong đề thi AS1003 thường ghép nối tuần tự `3` vật rắn: khâu dẫn (tay quay quanh trục cố định hoặc con lăn lăn không trượt), khâu truyền (thanh truyền chuyển động song phẳng) và khâu bị dẫn (con trượt tịnh tiến hoặc cần lắc quay quanh trục cố định). Để kiểm soát thời gian làm bài và kiểm chứng chéo kết quả, cần nắm vững 3 phương pháp giải độc lập.

### 3.1. Phân tích cấu trúc và phạm vi áp dụng của 3 phương pháp

| Phương pháp | Hệ phương trình nền tảng | Ưu thế kỹ thuật | Giới hạn cần lưu ý |
| :--- | :--- | :--- | :--- |
| **1. Tâm vận tốc tức thời $I$** | $v_A = \omega \cdot IA,\; v_B = \omega \cdot IB$, giao hai đường $\perp \vec{v}_A$ và $\perp \vec{v}_B$ | Cho ngay $\omega$ (kể cả $\omega = 0$ khi hai pháp tuyến song song) và tỷ số vận tốc theo tam giác hình học. | Chỉ dùng cho **vận tốc**; không áp dụng trực tiếp để tìm gia tốc vì $\vec{a}_I \neq \vec{0}$. |
| **2. Quan hệ vectơ & Hình chiếu chọn lọc** | $\vec{v}_B = \vec{v}_A + \vec{\omega}\times\overrightarrow{AB}$; $\vec{a}_B = \vec{a}_A + \vec{\varepsilon}\times\overrightarrow{AB} - \omega^2\overrightarrow{AB}$ | Chiếu lên trục **vuông góc** với ẩn chưa biết ($\vec{a}_B$ hoặc $\vec{a}_{BA}^\tau$) giúp tách hệ $2\times 2$ thành từng phương trình 1 ẩn. | Phải chuẩn hóa tuyệt đối dấu của $\bar{\omega}, \bar{\varepsilon}$ và thứ tự vectơ $\overrightarrow{AB} = \vec{r}_B - \vec{r}_A$. |
| **3. Giải tích đạo hàm ràng buộc tọa độ** | Thiết lập $f_1(q_1, q_2, t) = 0,\; f_2(q_1, q_2, t) = 0$; lấy $\frac{d}{dt}$ và $\frac{d^2}{dt^2}$ | Tự động hóa dấu đại số thông qua quy tắc đạo hàm hàm hợp; đặc biệt mạnh cho cơ hệ đối xứng ([Đề 1721 C6–7](/on-thi/de-thi-that-hcmut#de-1721)). | Dễ sai nếu thay giá trị góc tức thời $\alpha = \alpha_0$ vào biểu thức **trước** khi lấy đạo hàm theo thời gian $t$. |

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_8_21.svg" alt="Hình 8-21: Cơ cấu bốn khâu bản lề OABO1 giải bằng tâm vận tốc tức thời và phép chiếu gia tốc" class="figure-img" /><p class="figure-caption">Hình 3.1: Khảo sát vận tốc bằng tâm tức thời P và phân tích các thành phần gia tốc trên cơ cấu bốn khâu bản lề OABO1 (Thí dụ 8-4, Hình 8-21, SBT Động học Chương 8)</p></div>

<div class="figure-container"><img src="/figures/dong-hoc/hinh_4_23.svg" alt="Hình 4-23: Cơ cấu tay quay - thanh truyền - con trượt chính tâm OAB" class="figure-img" /><p class="figure-caption">Hình 3.2: Thiết lập phương trình ràng buộc tọa độ giải tích cho cơ cấu tay quay - thanh truyền - con trượt OAB (Thí dụ 4-7, Hình 4-23, Giáo trình Động học Chương 4)</p></div>

---

### 3.2. Giải sâu cơ cấu Con lăn – Thanh truyền – Con trượt: Đối chiếu song song Vectơ/Tâm $I$ và Giải tích

Cơ cấu kết hợp đĩa lăn không trượt với thanh truyền và con chạy là cấu trúc kinh điển của cả sách bài tập Đỗ Sanh (`Bài 8-23`, Hình 8-48) lẫn đề thi thật ([Đề 1821 Câu 1–4](/on-thi/de-thi-that-hcmut#de-1821)). Dưới đây ta giải trọn vẹn một bài toán kiểm toán tương đương trực tiếp cấu trúc `Đề 1821` bằng hai phương pháp độc lập để đối chiếu từng bước.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_8_48.svg" alt="Hình 8-48: Đĩa bán kính R lăn không trượt trên đường ngang nối thanh truyền AB và con chạy trượt ngang" class="figure-img" /><p class="figure-caption">Hình 3.3: Cơ cấu đĩa bán kính R lăn không trượt truyền động qua thanh cứng cho con chạy trượt trong rãnh ngang (Bài 8-23, Hình 8-48, SBT Động học Chương 8)</p></div>

#### Ví dụ Kiểm toán 3.1 (Tương đương cấu trúc Đề `1821` Câu 1–4)

**Đề bài:** Cho con lăn tròn tâm $O$ bán kính $R = 40\text{ cm}$ lăn không trượt sang phải trên mặt sàn ngang cố định ($y = 0$), liên kết bản lề tại điểm $B$ trên vành con lăn với thanh cứng $BA$ để kéo con chạy $A$ trượt dọc rãnh nằm ngang trùng mức sàn ($y_A = 0$, nằm bên trái con lăn). Tại thời điểm khảo sát, $B$ ở vị trí đỉnh cao nhất của con lăn ($IB = 2R = 80\text{ cm}$ thẳng đứng qua tiếp điểm $I$), thanh $BA$ nghiêng góc $\alpha = 30^\circ$ so với phương ngang, con lăn có vận tốc góc $\omega = 0{,}5\text{ rad/s}$ (chiều CW) và gia tốc góc $\varepsilon = 0{,}25\text{ rad/s}^2$ (chiều CW). Hệ trục chuẩn có $Ox(\vec{i})$ sang phải, $Oy(\vec{j})$ hướng lên, $\vec{k}$ hướng ra ngoài. Tìm $\omega_{AB}$, $\vec{v}_A$, $\vec{a}_B$, $\vec{\varepsilon}_{AB}$ và $\vec{a}_A$.

**Nhánh giải 1 — Phương pháp Tâm vận tốc tức thời $I$ kết hợp Hình chiếu vectơ:**
1. **Kích thước hình học ẩn:** Từ tam giác vuông $AIB$ vuông tại tiếp điểm $I$ có $IB = 2R = 80\text{ cm}$ và $\widehat{BAI} = 30^\circ$:
   $$\begin{aligned}
   L &= AB = \frac{2R}{\sin 30^\circ} = 160\text{ cm} \\
   \overrightarrow{BA} &= -L\cos 30^\circ\,\vec{i} - L\sin 30^\circ\,\vec{j} = -80\sqrt{3}\,\vec{i} - 80\,\vec{j}\text{ (cm)}
   \end{aligned}$$
2. **Bài toán vận tốc:** Với con lăn lăn không trượt quanh tâm tức thời $I$ ($\vec{\omega} = -0{,}5\vec{k}\text{ rad/s}$):
   $$\vec{v}_B = \vec{\omega} \times \overrightarrow{IB} = (-0{,}5\vec{k}) \times (80\vec{j}) = +40\vec{i}\text{ (cm/s)}$$
   Trên thanh $AB$, ta có $\vec{v}_B \parallel Ox$ và con chạy $A$ trượt ngang nên $\vec{v}_A \parallel Ox$. Hai đường vuông góc với $\vec{v}_A, \vec{v}_B$ kẻ từ $A, B$ đều thẳng đứng song song nhau ($I_{AB} \to \infty$), trong khi thanh $AB$ nghiêng $30^\circ$. Vậy thanh $AB$ **tịnh tiến tức thời**:
   $$\omega_{AB} = 0\text{ rad/s}, \qquad \vec{v}_A = \vec{v}_B = +40\vec{i}\text{ (cm/s)}$$
3. **Gia tốc chốt $B$ (lấy tâm con lăn $O$ làm cực):** Con lăn tăng tốc góc CW sang phải ($\vec{\varepsilon} = -0{,}25\vec{k}\text{ rad/s}^2$) nên tâm $O$ có $\vec{a}_O = \varepsilon R\,\vec{i} = +10\vec{i}\text{ cm/s}^2$. Với $\overrightarrow{OB} = +40\vec{j}\text{ cm}$:
   $$\begin{aligned}
   \vec{a}_B &= \vec{a}_O + \vec{\varepsilon} \times \overrightarrow{OB} - \omega^2\overrightarrow{OB} \\
   &= 10\vec{i} + (-0{,}25\vec{k}) \times (40\vec{j}) - (0{,}5)^2(40\vec{j}) = 20\vec{i} - 10\vec{j}\text{ (cm/s}^2\text{)}
   \end{aligned}$$
4. **Gia tốc góc thanh $AB$ và gia tốc con chạy $A$ (lấy $B$ làm cực):** Do $\omega_{AB} = 0 \implies \vec{a}_{AB}^n = \vec{0}$. Đặt $\vec{\varepsilon}_{AB} = \bar{\varepsilon}_{AB}\vec{k}$:
   $$\begin{aligned}
   \vec{a}_A &= \vec{a}_B + (\bar{\varepsilon}_{AB}\vec{k}) \times \left(-80\sqrt{3}\,\vec{i} - 80\,\vec{j}\right) \\
   &= \left(20 + 80\bar{\varepsilon}_{AB}\right)\vec{i} - \left(10 + 80\sqrt{3}\,\bar{\varepsilon}_{AB}\right)\vec{j}
   \end{aligned}$$
   - **Chiếu lên $Oy$ ($\perp$ phương trượt của $A$, khử $a_{Ax}$):**
     $$\begin{aligned}
     a_{Ay} &= -10 - 80\sqrt{3}\,\bar{\varepsilon}_{AB} = 0 \\
     \bar{\varepsilon}_{AB} &= -\frac{10}{80\sqrt{3}} = -\frac{\sqrt{3}}{24} \approx -0{,}0722\text{ rad/s}^2
     \end{aligned}$$
     Vậy $\vec{\varepsilon}_{AB} = -\frac{\sqrt{3}}{24}\vec{k} \approx -0{,}0722\vec{k}\text{ rad/s}^2$ (xu hướng quay CW).
   - **Chiếu lên $Ox$:**
     $$\begin{aligned}
     a_{Ax} &= 20 + 80\left(-\frac{\sqrt{3}}{24}\right) \\
     &= 20 - \frac{10\sqrt{3}}{3} \approx +14{,}23\text{ cm/s}^2 \implies \vec{a}_A \approx 14{,}23\vec{i}\text{ (cm/s}^2\text{)}
     \end{aligned}$$

**Nhánh giải 2 — Phương pháp Giải tích đạo hàm hai lần phương trình ràng buộc tọa độ:**
Gọi $x_O(t)$ là hoành độ tâm con lăn ($\dot{x}_O = R\dot{\beta}$, $\ddot{x}_O = R\ddot{\beta}$), $\beta(t)$ là góc lệch CW của bán kính $OB$ so với tia thẳng đứng $+Oy$, và $\alpha(t)$ là góc nghiêng của vectơ $\overrightarrow{AB}$ phía trên tia $+Ox$ (góc quay ngược KĐH của thanh $AB$ bằng $+\alpha(t)$, nên $\bar{\omega}_{AB} = \dot{\alpha}$ và $\bar{\varepsilon}_{AB} = \ddot{\alpha}$). Tọa độ tức thời của $B$ và điều kiện ràng buộc với $A(x_A(t), 0)$ ở thời điểm bất kỳ lân cận vị trí khảo sát là:

$$\begin{aligned}
x_B(t) &= x_O(t) + R\sin\beta(t) \\
y_B(t) &= R + R\cos\beta(t) = L\sin\alpha(t) \\
x_A(t) &= x_B(t) - L\cos\alpha(t)
\end{aligned}$$

1. **Đạo hàm bậc nhất theo $t$ phương trình ràng buộc tung độ** $R + R\cos\beta = L\sin\alpha$:
   $$-R\dot{\beta}\sin\beta = L\dot{\alpha}\cos\alpha$$
   Thay trạng thái tức thời $\beta = 0$, $\alpha = 30^\circ$, $\dot{\beta} = 0{,}5\text{ rad/s}$: vế trái bằng $0 \implies \dot{\alpha} = \bar{\omega}_{AB} = 0$. Đạo hàm hoành độ: $\dot{x}_A = \dot{x}_O + R\dot{\beta}\cos\beta + L\dot{\alpha}\sin\alpha = 40(0{,}5) + 40(0{,}5)(1) + 0 = +40\text{ cm/s}$.
2. **Đạo hàm bậc hai theo $t$ phương trình ràng buộc tung độ** (trước khi thế số!):
   $$-R\ddot{\beta}\sin\beta - R\dot{\beta}^2\cos\beta = L\ddot{\alpha}\cos\alpha - L\dot{\alpha}^2\sin\alpha$$
   Thế $\beta = 0$, $\alpha = 30^\circ$, $\dot{\beta} = 0{,}5$, $\ddot{\beta} = 0{,}25$, $\dot{\alpha} = 0$, $L = 160\text{ cm}$:
   $$\begin{aligned}
   -40(0{,}5)^2(1) &= 160\ddot{\alpha}\frac{\sqrt{3}}{2} \implies -10 = 80\sqrt{3}\,\ddot{\alpha} \\
   \ddot{\alpha} &= \bar{\varepsilon}_{AB} = -\frac{\sqrt{3}}{24}\text{ rad/s}^2
   \end{aligned}$$
3. **Đạo hàm bậc hai hoành độ** $x_A = x_O + R\sin\beta - L\cos\alpha$:
   $$\begin{aligned}
   \ddot{x}_A &= \ddot{x}_O + R\ddot{\beta}\cos\beta - R\dot{\beta}^2\sin\beta + L\ddot{\alpha}\sin\alpha + L\dot{\alpha}^2\cos\alpha \\
   &= 10 + 10 - 0 + 160\left(-\frac{\sqrt{3}}{24}\right)\frac{1}{2} = 20 - \frac{10\sqrt{3}}{3}\text{ cm/s}^2
   \end{aligned}$$

Hai phương pháp độc lập cho kết quả đại số **trùng khớp 100%**.

::: warning Đối chiếu trực tiếp với Đề Thi Thật `1821` (Câu 1–4) và `Bài 8-23` SBT Đỗ Sanh
- **Với số liệu gốc [Đề 1821 Bài 1 (Câu 1–4)](/on-thi/de-thi-that-hcmut#de-1821)** ($R = 30\text{ cm}$, $\alpha = 30^\circ$, $\omega = 0{,}5\text{ rad/s}$ CW, $\varepsilon = 0{,}2\text{ rad/s}^2$ CW $\implies L = 120\text{ cm}$): áp dụng đúng công thức trên cho ngay `1c` ($\omega_{AB} = 0,\; V_A = 30\text{ cm/s}$), `2b` ($\vec{a}_B = 12\vec{i} - 7{,}5\vec{j}\text{ cm/s}^2$), `4b` ($\bar{\varepsilon}_{AB} = -\frac{7{,}5}{60\sqrt{3}} = -\frac{\sqrt{3}}{24} \approx -0{,}07\text{ rad/s}^2 \implies \vec{\varepsilon}_{AB} = -0{,}07\vec{k}$) và `3c` ($a_{Ax} = 12 - \frac{5\sqrt{3}}{2} \approx +7{,}67\text{ cm/s}^2 \implies \vec{a}_A = 7{,}67\vec{i}$).
- **Với cấu hình `Bài 8-23` (Hình 8-48)** khi chốt $A$ đặt cách tâm đĩa đoạn $OA = \frac{R}{2}$ (lăn sang trái với $v_o, a_o$): tại vị trí $A$ cao nhất ($y_A = \frac{3}{2}R$), vẫn có $\vec{v}_A \parallel \vec{v}_B \implies \omega_{AB} = 0$, nhưng $a_{Ax} = -\frac{3}{2}a_o$, $a_{Ay} = -\frac{v_o^2}{2R}$, dẫn đến $\varepsilon_{AB} = \frac{v_o^2}{R\sqrt{4l^2 - 9R^2}}$ và độ lớn $a_B = \frac{3}{2}a_o - \frac{3v_o^2}{2\sqrt{4l^2 - 9R^2}}$.
- **Khi khâu truyền có $\omega_{AB} \neq 0$** (như `Thí dụ 8-4` Hình 8-21 hoặc `Bài 8-12`, `Bài 8-22`): tuyệt đối không được bỏ quên thành phần hướng tâm $\vec{a}_{BA}^n = -\omega_{AB}^2\overrightarrow{AB}$ trong phương trình gia tốc.
:::

---

### 3.3. Danh mục bài tập tự luyện chuẩn Ngày 3

1. **Sách Bài Tập Đỗ Sanh — [BT Động học Chương 3 (Chương 8 gốc, mục `8.3`–`8.4`)](/bai-tap/dong-hoc/chuong-3#_8-3-bai-giai-mau):**
   - Nhóm cơ cấu bốn khâu & con trượt (`8.3.3` & `8.4.3`): giải chi tiết `Thí dụ 8-4`, `Thí dụ 8-5`, `Bài 8-12`, `Bài 8-14`, `Bài 8-16`.
   - Nhóm bài toán hỗn hợp thanh truyền – đĩa lăn (`8.3.4` & `8.4.4`): giải `Thí dụ 8-6`, `Bài 8-22`, `Bài 8-23`, `Bài 8-24`, `Bài 8-25`. *(Lưu ý đính chính lỗi in trong bản sách giấy gốc đã ghi nhận tại trang chương: ở `Bài 8-7` mẫu số đúng của $\cos\beta$ là $\sqrt{26}$; ở `Bài 8-25` thành phần đứng đúng là $a_{Ay} = -\frac{(v_1 - v_2)^2}{4r}$).*
2. **Đề thi thật HCMUT đối chiếu:** tự bấm giờ giải lại [Đề 1821 Câu 1–4](/on-thi/de-thi-that-hcmut#de-1821), [Đề 1721/1722 Câu 6–7](/on-thi/de-thi-that-hcmut#de-1721) (dùng phương pháp giải tích đạo hàm $x_C = 2l\cos\theta$, $x_G = \frac{3}{2}l\cos\theta$, $y_G = \frac{1}{2}l\sin\theta$) và [Đề 1643/1744 Câu 10–11](/on-thi/de-thi-that-hcmut#de-giua-ky-1643-1744).

---

## Ngày 4: Hợp Chuyển Động Điểm (Chương 9) & Gia Tốc Coriolis {#ngay-4}

Khi trong cơ hệ xuất hiện một chất điểm hoặc con trượt dịch chuyển dọc theo một rãnh dẫn hướng mà bản thân vật mang rãnh cũng đang quay hoặc chuyển động song phẳng, khoảng cách giữa con trượt và tâm quay thay đổi liên tục theo thời gian ($O_1A \neq \text{const}$). Lúc này không được viết quan hệ hai điểm thuộc cùng một vật rắn, mà bắt buộc sử dụng mô hình **hợp chuyển động điểm**.

### 4.1. Chứng minh định lý hợp vận tốc và gia tốc Coriolis bằng đạo hàm hai lần trong hệ động

Xét chất điểm $M$ chuyển động đối với hệ quy chiếu động $Oxyz$ (cơ sở trực chuẩn $\vec{i}, \vec{j}, \vec{k}$ gắn với vật mang rãnh, có vận tốc góc $\vec{\omega}_e$ và gia tốc góc $\vec{\varepsilon}_e = \frac{d\vec{\omega}_e}{dt}$), trong khi $Oxyz$ chuyển động đối với hệ quy chiếu cố định $O_1x_1y_1z_1$. Đặt $\vec{\rho} = \overrightarrow{OM} = x\vec{i} + y\vec{j} + z\vec{k}$, vectơ vị trí tuyệt đối của $M$ là:

$$\vec{r}_M = \overrightarrow{O_1M} = \overrightarrow{O_1O} + x\vec{i} + y\vec{j} + z\vec{k}$$

<div class="figure-container"><img src="/figures/dong-hoc/hinh_3_2.svg" alt="Hình 3-2: Mô hình hợp chuyển động điểm với hệ quy chiếu động Oxyz và hệ cố định O1x1y1z1" class="figure-img" /><p class="figure-caption">Hình 4.1: Quan hệ vectơ định vị giữa hệ quy chiếu cố định O1x1y1z1, hệ quy chiếu động Oxyz và trùng điểm tại M (Hình 3-2, Giáo trình Động học Chương 3)</p></div>

Gọi $M^*$ là **trùng điểm** của $M$ tại thời điểm khảo sát $t$ — tức là điểm gắn cứng vào hệ quy chiếu động (có tọa độ cục bộ $x^*, y^*, z^*$ không đổi theo $t$, trùng với $(x(t), y(t), z(t))$ tại thời điểm đang xét).

**1. Đạo hàm cấp một — Định lý hợp vận tốc:**
Lấy đạo hàm hai vế của $\vec{r}_M$ theo thời gian $t$ và áp dụng công thức Poisson $\frac{d\vec{i}}{dt} = \vec{\omega}_e \times \vec{i}$, $\frac{d\vec{j}}{dt} = \vec{\omega}_e \times \vec{j}$, $\frac{d\vec{k}}{dt} = \vec{\omega}_e \times \vec{k}$:

$$\begin{aligned}
\vec{v}_a = \frac{d\vec{r}_M}{dt} &= \left(\frac{d\overrightarrow{O_1O}}{dt} + x\frac{d\vec{i}}{dt} + y\frac{d\vec{j}}{dt} + z\frac{d\vec{k}}{dt}\right) + \left(\dot{x}\vec{i} + \dot{y}\vec{j} + \dot{z}\vec{k}\right) \\
&= \underbrace{\left(\vec{v}_O + \vec{\omega}_e \times \vec{\rho}\right)}_{\vec{v}_e = \vec{v}_{M^*}} + \underbrace{\frac{\tilde{d}\vec{\rho}}{dt}}_{\vec{v}_r} = \vec{v}_e + \vec{v}_r
\end{aligned}$$

**2. Đạo hàm cấp hai — Định lý hợp gia tốc & Nguồn gốc hệ số $2$ của gia tốc Coriolis:**
Lấy đạo hàm theo thời gian $t$ biểu thức $\vec{v}_a = \vec{v}_O + \vec{\omega}_e \times \vec{\rho} + \vec{v}_r$, chú ý theo công thức Bour thì $\frac{d\vec{\rho}}{dt} = \vec{v}_r + \vec{\omega}_e \times \vec{\rho}$ và $\frac{d\vec{v}_r}{dt} = \frac{\tilde{d}\vec{v}_r}{dt} + \vec{\omega}_e \times \vec{v}_r = \vec{a}_r + \vec{\omega}_e \times \vec{v}_r$:

$$\begin{aligned}
\vec{a}_a = \frac{d\vec{v}_a}{dt} &= \frac{d\vec{v}_O}{dt} + \frac{d\vec{\omega}_e}{dt} \times \vec{\rho} + \vec{\omega}_e \times \left(\vec{v}_r + \vec{\omega}_e \times \vec{\rho}\right) + \left(\vec{a}_r + \vec{\omega}_e \times \vec{v}_r\right) \\
&= \underbrace{\left[\vec{a}_O + \vec{\varepsilon}_e \times \vec{\rho} + \vec{\omega}_e \times (\vec{\omega}_e \times \vec{\rho})\right]}_{\vec{a}_e = \vec{a}_{M^*}} + \underbrace{\left(\ddot{x}\vec{i} + \ddot{y}\vec{j} + \ddot{z}\vec{k}\right)}_{\vec{a}_r} + \underbrace{2\vec{\omega}_e \times \vec{v}_r}_{\vec{a}_c}
\end{aligned}$$

Ta thu được **định lý hợp gia tốc tổng quát**: $\vec{a}_a = \vec{a}_e + \vec{a}_r + \vec{a}_c$, với **gia tốc Coriolis** $\vec{a}_c = 2\vec{\omega}_e \times \vec{v}_r$.
- **Ý nghĩa vật lý của hệ số $2$:** Một số hạng $\vec{\omega}_e \times \vec{v}_r$ phát sinh từ việc dịch chuyển tương đối $\vec{v}_r\,dt$ đưa điểm $M$ sang trùng điểm mới có vận tốc kéo theo khác biệt; số hạng $\vec{\omega}_e \times \vec{v}_r$ thứ hai phát sinh do bản thân phương của vectơ $\vec{v}_r$ bị hệ quy chiếu động cuốn quay đi góc $\vec{\omega}_e\,dt$.
- **Độ lớn và điều kiện triệt tiêu:** $a_c = 2\omega_e v_r\sin(\vec{\omega}_e, \vec{v}_r)$. Trong bài toán phẳng ($\vec{\omega}_e \perp \vec{v}_r$), $a_c = 2\omega_e v_r$ và chiều của $\vec{a}_c$ nhận được bằng cách **quay vectơ $\vec{v}_r$ đi góc $90^\circ$ theo đúng chiều quay của $\vec{\omega}_e$**. Gia tốc Coriolis bằng $\vec{0}$ khi và chỉ khi: (1) hệ động tịnh tiến ($\vec{\omega}_e = \vec{0}$); hoặc (2) tại thời điểm $\vec{v}_r = \vec{0}$; hoặc (3) $\vec{\omega}_e \parallel \vec{v}_r$ trong không gian.
- **Lưu ý quỹ đạo cong:** Nếu quỹ đạo tương đối (rãnh dẫn) là đường cong có bán kính cong $\rho_r$, bắt buộc tách $\vec{a}_r = \vec{a}_r^\tau + \vec{a}_r^n$ với $a_r^n = \frac{v_r^2}{\rho_r}$ hướng về tâm cong của rãnh (ngay cả khi hạt trượt đều $v_r = \text{const} \implies a_r^\tau = 0$, vẫn có $\vec{a}_r^n \neq \vec{0}$).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_10_2.svg" alt="Hình 10-2: Quy tắc xác định phương chiều gia tốc Coriolis trong bài toán phẳng và không gian" class="figure-img" /><p class="figure-caption">Hình 4.2: Quy tắc quay 90 độ xác định phương chiều gia tốc Coriolis trong mặt phẳng và trường hợp không gian tổng quát (Hình 10-2, SBT Động học Chương 10)</p></div>

---

### 4.2. Phân biệt dứt khoát Bài toán thuận và Bài toán ngược cơ cấu culit rãnh quay

#### A. Bài toán thuận (Tổng hợp chuyển động — Biết $\omega_e, \varepsilon_e$ và quy luật tương đối $s_r(t)$)

Trong bài toán thuận, các yếu tố của hệ động và chuyển động tương đối đã cho trước, cần tìm $\vec{v}_a, \vec{a}_a$:
- **Mẫu phẳng xuyên tâm ([Đề 1721 Câu 1–2](/on-thi/de-thi-that-hcmut#de-1721), [Đề 1643/1744 Câu 8–9](/on-thi/de-thi-that-hcmut#de-giua-ky-1643-1744)):** Đĩa quay đều tốc độ $\Omega$, hạt trượt dọc bán kính theo $r(t) = R\sin(\omega t) \implies v_r = R\omega\cos(\omega t)$, $v_e = \Omega r(t) \perp \vec{v}_r \implies v_a = \sqrt{v_r^2 + v_e^2}$. Trên phương bán kính có $a_r + a_e^n = -R(\omega^2 + \Omega^2)\sin(\omega t)$; trên phương vuông góc bán kính có $a_e^\tau + a_c = 0 + 2\Omega\omega R\cos(\omega t)$.
- **Mẫu không gian 3D trên vành tròn quay quanh trục nằm trong mặt phẳng vành (`Thí dụ 10–4`, `Bài 10–14` và [Đề 1722 Câu 1–2](/on-thi/de-thi-that-hcmut#de-1722)):** Xem xét chi tiết qua Ví dụ Kiểm toán 4.1 dưới đây.

::: info Ví dụ Kiểm toán 4.1: Bài toán thuận 3D — Con trượt trên vành tròn quay quanh trục tiếp tuyến (Đối chiếu Đề `1722` Câu 1–2)
**Đề bài:** Vành tròn bán kính $R$ nằm trong mặt phẳng thẳng đứng $Oxy$ ($O$ là tâm vành, $Ox(\vec{i})$ nằm ngang sang phải, $Oy(\vec{j})$ thẳng đứng hướng lên, $Oz(\vec{k})$ hướng ra ngoài). Vành quay đều với vận tốc góc $\vec{\omega}_e = \omega\vec{i}$ quanh trục tiếp tuyến nằm ngang $AB$ gắn ở đỉnh cao nhất $(y = +R)$ của vành. Con trượt $C$ dịch chuyển dọc vành từ đỉnh sang phía trái xuống dưới với tốc độ tương đối $u = \text{const}$ tại vị trí bán kính $OC$ lệch góc $\varphi$ sang trái so với tia $+Oy$. Tìm độ lớn $v_a$ và $a_a$ của $C$.

**Lời giải kiểm toán:**
1. **Khoảng cách tới trục quay $AB$ và vận tốc:** Tọa độ của $C$ so với tâm vành $O$ là $(-R\sin\varphi,\; R\cos\varphi,\; 0)$. Hạ đường vuông góc từ $C$ lên trục quay $AB$ (đường thẳng $y = R, z = 0$): vectơ bán kính quay kéo theo là $\vec{\rho}_\perp = -R(1 - \cos\varphi)\vec{j}$.
   - Vận tốc kéo theo: $\vec{v}_e = (\omega\vec{i}) \times \left[-R(1 - \cos\varphi)\vec{j}\right] = -\omega R(1 - \cos\varphi)\vec{k}$ (vuông góc mặt phẳng vành).
   - Vận tốc tương đối tiếp tuyến vành (tăng $\varphi$): $\vec{v}_r = u(-\cos\varphi\,\vec{i} - \sin\varphi\,\vec{j})$. Do $\vec{v}_e \perp \vec{v}_r$:
     $$v_a = \sqrt{u^2 + R^2\omega^2(1 - \cos\varphi)^2} \quad (\text{khớp Đề 1722 Câu 1a})$$
2. **Phân tích 3 thành phần gia tốc theo cơ sở $(\vec{i}, \vec{j}, \vec{k})$:**
   - Gia tốc kéo theo pháp tuyến hướng thẳng từ $C$ lên trục quay $AB$ ($\vec{a}_e^\tau = \vec{0}$ do $\omega = \text{const}$): $\vec{a}_e^n = +\omega^2 R(1 - \cos\varphi)\vec{j}$.
   - Gia tốc tương đối pháp tuyến hướng từ $C$ vào tâm vành $O$ ($a_r^\tau = 0$ do $u = \text{const}$): $\vec{a}_r^n = \frac{u^2}{R}(\sin\varphi\,\vec{i} - \cos\varphi\,\vec{j})$.
   - Gia tốc Coriolis (lưu ý $\vec{\omega}_e = \omega\vec{i}$ **không vuông góc** với $\vec{v}_r$):
     $$\vec{a}_c = 2(\omega\vec{i}) \times u(-\cos\varphi\,\vec{i} - \sin\varphi\,\vec{j}) = -2\omega u\sin\varphi\,\vec{k}$$
   - Tổng hợp thành phần vectơ và bình phương độ lớn:
     $$\begin{aligned}
     \vec{a}_a &= \frac{u^2}{R}\sin\varphi\,\vec{i} - 2\omega u\sin\varphi\,\vec{k} \\
     &\quad + \left[\omega^2 R(1 - \cos\varphi) - \frac{u^2}{R}\cos\varphi\right]\vec{j} \\
     a_a^2 &= \left[\frac{u^2}{R}\cos\varphi - R\omega^2(1 - \cos\varphi)\right]^2 \\
     &\quad + \left(\frac{u^2}{R}\sin\varphi\right)^2 + 4u^2\omega^2\sin^2\varphi
     \end{aligned}$$
     Lấy căn bậc hai $a_a = \sqrt{a_a^2}$ cho kết quả khớp Đề `1722` Câu `2b`.
:::

#### B. Bài toán ngược (Phân tích chuyển động — Cơ cấu culit / con trượt chốt $A$ trong rãnh quay)

Trong cơ cấu tay quay – con trượt – cần lắc culit (`Thí dụ 10–6`, Hình 10-12 & 10-13), chốt con trượt $A$ gắn trên đầu tay quay dẫn $OA$ và trượt tự do bên trong rãnh thẳng của thanh culit $O_1B$ quay quanh khớp cố định $O_1$.

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_10_12.svg" alt="Hình 10-12: Phân tích vận tốc cơ cấu tay quay - cần lắc culit O1B" class="figure-img" /><p class="figure-caption">Hình 4.3: Phân tích vận tốc tuyệt đối của chốt A thành vận tốc kéo theo vuông góc rãnh và vận tốc tương đối dọc rãnh O1B (Thí dụ 10-6, Hình 10-12, SBT Động học Chương 10)</p></div>

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_10_13.svg" alt="Hình 10-13: Phân tích gia tốc trên hai trục dọc rãnh và vuông góc rãnh của cơ cấu culit" class="figure-img" /><p class="figure-caption">Hình 4.4: Hệ trục chiếu dọc rãnh Delta1 và vuông góc rãnh Delta2 để giải tách gia tốc góc cần lắc và gia tốc trượt tương đối (Thí dụ 10-6, Hình 10-13, SBT Động học Chương 10)</p></div>

**Quy tắc giải bắt buộc gồm 3 bước:**
1. **Chọn đúng động điểm và hệ quy chiếu động:** Động điểm khảo sát là **tâm chốt $A$** (biết trọn vẹn $\vec{v}_A, \vec{a}_A$ từ tay quay dẫn $OA$); hệ quy chiếu động bắt buộc gắn vào **khâu mang rãnh trượt $O_1B$** (trùng điểm $A^* \in O_1B$ quay quanh $O_1$ với bán kính tức thời $d = O_1A$). *Tuyệt đối không gắn hệ động vào tay quay $OA$.*
2. **Thiết lập cặp vectơ đơn vị trực giao gắn theo rãnh tại $A$:** Gọi $\vec{u}_\parallel = \frac{\overrightarrow{O_1A}}{O_1A}$ hướng dọc rãnh ra xa $O_1$, và $\vec{u}_\perp = \vec{k} \times \vec{u}_\parallel$ vuông góc với rãnh theo chiều quay dương ngược KĐH quanh $O_1$.
3. **Chiếu đồng thời lên cả hai phương $\vec{u}_\perp$ và $\vec{u}_\parallel$:**
   - **Ở bước vận tốc** ($\vec{v}_A = d\bar{\omega}_e\,\vec{u}_\perp + v_r\,\vec{u}_\parallel$):
     $$\bar{\omega}_e = \frac{\vec{v}_A \cdot \vec{u}_\perp}{O_1A}, \qquad v_r = \vec{v}_A \cdot \vec{u}_\parallel$$
     *(Cảnh báo: Dù đề bài chỉ hỏi gia tốc góc $\bar{\varepsilon}_e$, vẫn **bắt buộc** tính cả hai phương trình trên vì $\bar{\omega}_e$ và dấu đại số của $v_r$ quyết định trực tiếp $\vec{a}_c = 2(\bar{\omega}_e\vec{k})\times(v_r\vec{u}_\parallel) = 2\bar{\omega}_e v_r\,\vec{u}_\perp$ và $\vec{a}_{A^*}^n = -\omega_e^2 O_1A\,\vec{u}_\parallel$).*
   - **Ở bước gia tốc** ($\vec{a}_A = -\omega_e^2 O_1A\,\vec{u}_\parallel + O_1A\bar{\varepsilon}_e\,\vec{u}_\perp + a_r\,\vec{u}_\parallel + 2\bar{\omega}_e v_r\,\vec{u}_\perp$ cho rãnh thẳng):
     - **Chiếu lên phương vuông góc rãnh $\vec{u}_\perp$** (khử $a_r$ và $a_{A^*}^n$):
       $$O_1A\,\bar{\varepsilon}_e + 2\bar{\omega}_e v_r = \vec{a}_A \cdot \vec{u}_\perp \implies \bar{\varepsilon}_e = \frac{\vec{a}_A \cdot \vec{u}_\perp - 2\bar{\omega}_e v_r}{O_1A}$$
     - **Chiếu lên phương dọc rãnh $\vec{u}_\parallel$** (khử $\bar{\varepsilon}_e$ và $a_c$):
       $$-\omega_e^2 O_1A + a_r = \vec{a}_A \cdot \vec{u}_\parallel \implies a_r = \vec{a}_A \cdot \vec{u}_\parallel + \omega_e^2 O_1A$$

::: info Ví dụ Kiểm toán 4.2: Giải bài toán ngược cơ cấu culit rãnh quay khi tay quay biến đổi tốc độ
**Đề bài:** Cho cơ cấu tay quay – culit có hình học tại thời điểm khảo sát như Hình 4.3: tay quay $OA = 0{,}20\text{ m}$ nằm ngang hướng sang phải ($\overrightarrow{OA} = 0{,}20\vec{i}\text{ m}$), đang quay ngược KĐH (CCW) với $\omega_0 = 6\text{ rad/s}$ và quay **chậm dần** với độ lớn gia tốc góc $\varepsilon_0 = 3\text{ rad/s}^2$. Cần lắc có rãnh thẳng $O_1B$ quay quanh trục cố định $O_1$ nằm dưới bên trái $A$ sao cho đoạn $O_1A = 0{,}40\text{ m}$ nghiêng góc $\varphi = 30^\circ$ sang phải so với phương thẳng đứng $+Oy$. Xác định $\bar{\omega}_{O_1B}$, $v_r$, $\bar{\varepsilon}_{O_1B}$ và $a_r$.

**Lời giải kiểm toán:**
1. **Chuyển động tuyệt đối của chốt $A$ trên tay quay $OA$** ($\vec{\omega}_0 = +6\vec{k}$, quay chậm dần nên $\vec{\varepsilon}_0 = -3\vec{k}$):
   $$\begin{aligned}
   \vec{v}_A &= (+6\vec{k}) \times (0{,}20\vec{i}) = +1{,}20\vec{j}\text{ (m/s)} \\
   \vec{a}_A &= (-3\vec{k}) \times (0{,}20\vec{i}) - 6^2(0{,}20\vec{i}) = -7{,}20\vec{i} - 0{,}60\vec{j}\text{ (m/s}^2\text{)}
   \end{aligned}$$
2. **Cơ sở trực chuẩn theo rãnh $O_1B$** (hợp $30^\circ$ với $+Oy$, tức $60^\circ$ với $+Ox$):
   $$\vec{u}_\parallel = \frac{1}{2}\vec{i} + \frac{\sqrt{3}}{2}\vec{j}, \qquad \vec{u}_\perp = \vec{k} \times \vec{u}_\parallel = -\frac{\sqrt{3}}{2}\vec{i} + \frac{1}{2}\vec{j}$$
3. **Chiếu vận tốc tìm $\bar{\omega}_{O_1B}$ và $v_r$:**
   $$\begin{aligned}
   v_{A^*} &= \vec{v}_A \cdot \vec{u}_\perp = 1{,}20 \cdot \frac{1}{2} = +0{,}60\text{ m/s} \implies \bar{\omega}_{O_1B} = \frac{+0{,}60}{0{,}40} = +1{,}50\text{ rad/s (CCW)} \\
   v_r &= \vec{v}_A \cdot \vec{u}_\parallel = 1{,}20 \cdot \frac{\sqrt{3}}{2} = \frac{3\sqrt{3}}{5} \approx +1{,}039\text{ m/s (trượt ra xa } O_1\text{)}
   \end{aligned}$$
4. **Tính gia tốc Coriolis và chiếu gia tốc lên $\vec{u}_\perp, \vec{u}_\parallel$:**
   - Thành phần Coriolis trên $\vec{u}_\perp$: $2\bar{\omega}_{O_1B}v_r = 2(1{,}50)\left(\frac{3\sqrt{3}}{5}\right) = \frac{9\sqrt{3}}{5}\text{ m/s}^2$.
   - Chiếu $\vec{a}_A$ lên $\vec{u}_\perp$: $\vec{a}_A \cdot \vec{u}_\perp = (-7{,}20)\left(-\frac{\sqrt{3}}{2}\right) + (-0{,}60)\left(\frac{1}{2}\right) = \frac{18\sqrt{3}}{5} - 0{,}30$. Suy ra:
     $$\bar{\varepsilon}_{O_1B} = \frac{\left(\frac{18\sqrt{3}}{5} - 0{,}30\right) - \frac{9\sqrt{3}}{5}}{0{,}40} = \frac{9\sqrt{3}}{2} - \frac{3}{4} \approx +7{,}04\text{ rad/s}^2\text{ (CCW)}$$
   - Chiếu $\vec{a}_A$ lên $\vec{u}_\parallel$: $\vec{a}_A \cdot \vec{u}_\parallel = -3{,}60 - 0{,}3\sqrt{3}$. Cộng $\omega_{O_1B}^2 \cdot O_1A = (1{,}50)^2(0{,}40) = 0{,}90$:
     $$a_r = -3{,}60 - 0{,}3\sqrt{3} + 0{,}90 = -\frac{27 + 3\sqrt{3}}{10} \approx -3{,}22\text{ m/s}^2$$
:::

*(Cảnh báo tư liệu cũ: Trong bài giải tự luận mẫu [Chủ đề 5](/on-thi/de-thi-that-hcmut#chu-de-5-8) lưu hành của sinh viên các khóa trước, người giải vẽ ngược chiều $\vec{a}_c$ làm hai số hạng không triệt tiêu và ra kết quả sai $\varepsilon_{BC} = 16{,}2\text{ rad/s}^2$ thay vì kết quả đúng $\varepsilon_{BC} = 0\text{ rad/s}^2$. Việc dùng đại số có dấu $\vec{u}_\parallel, \vec{u}_\perp$ như trên loại bỏ hoàn toàn sai lầm vẽ nhầm chiều này).*

---

### 4.3. Danh mục bài tập tự luyện chuẩn Ngày 4

- **SBT Đỗ Sanh — [BT Động học Chương 5 (Chương 10 gốc)](/bai-tap/dong-hoc/chuong-5#_10-3-bai-giai-mau):**
  - Bài toán thuận (`10.3.2` & `10.4.2`): giải `Thí dụ 10–3`, `Thí dụ 10–4` (không gian 3D), `Bài 10–9`, `Bài 10–11` (rãnh cong máy nén khí), `Bài 10–13`, `Bài 10–14`.
  - Bài toán ngược cơ cấu culit & cam (`10.3.3` & `10.4.3`): giải `Thí dụ 10–6`, `Thí dụ 10–7`, `Thí dụ 10–8` (hệ động chuyển động song phẳng), `Bài 10–18`, `Bài 10–19`, `Bài 10–23`, `Bài 10–26`, `Bài 10–27`.
- **Đề thi thật HCMUT:** tự giải không nhìn đáp án [Đề 1721 Câu 1–2](/on-thi/de-thi-that-hcmut#de-1721), [Đề 1722 Câu 1–2](/on-thi/de-thi-that-hcmut#de-1722) và [Đề 1643/1744 Câu 8–9](/on-thi/de-thi-that-hcmut#de-giua-ky-1643-1744).

---

## Ngày 5: Hệ Bánh Răng Cố Định, Hành Tinh, Vi Sai (Chương 10.5) & Cổng Kiểm Định Chặng 1 {#ngay-5}

### 5.1. Chứng minh công thức Willis bằng phép đảo chuyển động & Hệ bánh răng nón không gian

#### 1. Hợp hai chuyển động quay song song & Chứng minh công thức Willis

Theo định lý tổng hợp chuyển động quay quanh hai trục song song (mục `11.1.1` [BT Động học Chương 6](/bai-tap/dong-hoc/chuong-6#_11-1-1-hop-chuyen-đong-quay-quanh-hai-truc-song-song)): nếu bánh răng $k$ quay tương đối quanh trục riêng gắn trên cần dẫn (tay quay) $C$ với vận tốc góc đại số $\bar{\omega}_{k/C}$, còn cần dẫn $C$ quay quanh trục cố định song song với vận tốc góc $\bar{\omega}_C$, thì vận tốc góc tuyệt đối của bánh $k$ là $\bar{\omega}_k = \bar{\omega}_C + \bar{\omega}_{k/C}$ (khi $\bar{\omega}_{k/C} = -\bar{\omega}_C$, bánh $k$ chuyển động tịnh tiến tròn).

**Chứng minh công thức Willis bằng phép đảo chuyển động (cộng $-\vec{\omega}_C$ vào toàn cơ hệ):**
Xét cặp bánh răng trụ $1$ (bán kính vòng lăn $r_1$, số răng $z_1$) và $2$ ($r_2, z_2$) ăn khớp không trượt trên cần dẫn $C$ đang quay với $\vec{\omega}_C = \bar{\omega}_C\vec{k}$. Ta truyền thêm cho toàn bộ cơ hệ một chuyển động quay chung quanh trục cố định với vận tốc góc $-\vec{\omega}_C$ (tương đương đứng quan sát trong hệ quy chiếu động gắn chặt với cần $C$):
- Cần dẫn $C$ trở thành **đứng yên** ($\bar{\omega}_{C/C} = \bar{\omega}_C - \bar{\omega}_C = 0$), các trục bánh răng trở thành hệ trục cố định.
- Bánh $1$ và bánh $2$ quay quanh trục cố định trong hệ cần với $\bar{\omega}_{1/C} = \bar{\omega}_1 - \bar{\omega}_C$ và $\bar{\omega}_{2/C} = \bar{\omega}_2 - \bar{\omega}_C$.
- Tại điểm ăn khớp $K$, điều kiện không trượt đòi hỏi vận tốc dài tương đối của hai vành chia bằng nhau ($\vec{v}_{K_1/C} = \vec{v}_{K_2/C}$, độ lớn $\lvert\bar{\omega}_{1/C}\rvert r_1 = \lvert\bar{\omega}_{2/C}\rvert r_2$, với bước răng đều nên $\frac{r_2}{r_1} = \frac{z_2}{z_1}$):
  1. **Ăn khớp ngoài** ($O_1O_2 = r_1 + r_2$, điểm $K$ nằm giữa đoạn nối hai tâm): hai bán kính hướng ngược chiều nhau từ tâm tới $K$, nên hai bánh quay **ngược chiều** trong hệ cần:
     $$i_{12}^{(C)} = \frac{\bar{\omega}_1 - \bar{\omega}_C}{\bar{\omega}_2 - \bar{\omega}_C} = -\frac{r_2}{r_1} = -\frac{z_2}{z_1}$$
  2. **Ăn khớp trong** ($O_1O_2 = \lvert r_1 - r_2\rvert$, điểm $K$ nằm cùng phía đối với cả hai tâm): hai bán kính hướng cùng chiều từ tâm tới $K$, nên hai bánh quay **cùng chiều** trong hệ cần:
     $$i_{12}^{(C)} = \frac{\bar{\omega}_1 - \bar{\omega}_C}{\bar{\omega}_2 - \bar{\omega}_C} = +\frac{r_2}{r_1} = +\frac{z_2}{z_1}$$
  3. **Chuỗi nhiều cấp phẳng nối tiếp từ bánh $1$ đến bánh $n$ trên cùng cần $C$** (nhân vế theo vế các cặp ăn khớp liên tiếp, lưu ý hai bánh ghép cứng đồng trục như khối $2\text{–}3$ có $\bar{\omega}_{2/C} = \bar{\omega}_{3/C}$):
     $$i_{1n}^{(C)} = \frac{\bar{\omega}_1 - \bar{\omega}_C}{\bar{\omega}_n - \bar{\omega}_C} = (-1)^m \frac{\text{Tích số răng (hoặc bán kính) các bánh bị dẫn}}{\text{Tích số răng (hoặc bán kính) các bánh dẫn}}$$
     trong đó $m$ là tổng số cặp **ăn khớp ngoài** trên đường truyền từ $1$ đến $n$.

<div class="figure-container"><img src="/figures/dong-hoc/hinh_4_21.svg" alt="Hình 4-21: Khảo sát vận tốc cơ cấu vi sai phẳng bằng phương pháp Willis" class="figure-img" /><p class="figure-caption">Hình 5.1: Cơ cấu vi sai phẳng gồm bánh trung tâm 1, cần dẫn OA và bánh vệ tinh 2 khảo sát bằng phương pháp đảo chuyển động Willis (Hình 4-21, Giáo trình Động học Chương 4)</p></div>

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_11_6.svg" alt="Hình 11-6: Hộp biến tốc hành tinh ăn khớp trong - ăn khớp ngoài hỗn hợp" class="figure-img" /><p class="figure-caption">Hình 5.2: Hộp biến tốc hành tinh hỗn hợp gồm vành cố định 1 ăn khớp trong với bánh 2 và khối bánh 2-3 ăn khớp ngoài với bánh 4 (Thí dụ 11-1, Hình 11-6, SBT Động học Chương 11)</p></div>

**Phân loại bậc tự do, Gia tốc điểm trên bánh vệ tinh & Cân bằng công suất:**
- **Hệ bánh răng trục cố định (hệ thường):** Cần cố định ($\bar{\omega}_C = 0$), 1 bậc tự do.
- **Hệ hành tinh:** Cần quay ($\bar{\omega}_C \neq 0$) và có 1 bánh trung tâm cố định ($\bar{\omega}_1 = 0$ hoặc $\bar{\omega}_n = 0$), **1 bậc tự do** (chỉ cần biết 1 vận tốc góc đầu vào).
- **Hệ vi sai:** Không có bánh nào cố định, **2 bậc tự do** (phải cho trước 2 vận tốc góc độc lập).
- **Gia tốc góc & gia tốc điểm $M$ thuộc bánh vệ tinh $2$:** Do tỉ số răng là hằng số ở mọi thời điểm, lấy đạo hàm công thức Willis theo $t$ cho cùng hệ thức tuyến tính giữa $\bar{\varepsilon}_1, \bar{\varepsilon}_2, \bar{\varepsilon}_C$. Sau khi tìm được $\bar{\omega}_2, \bar{\varepsilon}_2$, chọn tâm chốt $A$ trên cần làm cực ($\vec{a}_A = \vec{a}_A^\tau + \vec{a}_A^n$) để tính $\vec{a}_M = \vec{a}_A + \vec{\varepsilon}_2\times\overrightarrow{AM} - \omega_2^2\overrightarrow{AM}$.
- **Quan hệ mômen truyền động ở chế độ quay đều (liên kết lý tưởng không tổn hao):** Tổng công suất ngoại lực tác dụng lên các trục bằng $0$: $\sum M_k\bar{\omega}_k = 0$. Với hộp giảm tốc hành tinh 1 bậc tự do có trục vào I và trục ra II: $M_{\text{I}}\bar{\omega}_{\text{I}} + M_{\text{II}}\bar{\omega}_{\text{II}} = 0 \implies M_{\text{II}} = -M_{\text{I}}\frac{\bar{\omega}_{\text{I}}}{\bar{\omega}_{\text{II}}}$ (và mômen phản lực trên vành cố định giữ cân bằng tổng mômen $M_{\text{vành}} = -(M_{\text{I}} + M_{\text{II}})$).

#### 2. Hệ bánh răng nón hành tinh – vi sai (Hai trục quay cắt nhau trong không gian)

Đối với hệ bánh răng nón có trục cần dẫn $\Delta_1$ vuông góc (hoặc cắt) trục quay riêng $\Delta_2$ của bánh vệ tinh nón $2$ tại tâm $O$ (mục `11.1.2` [BT Động học Chương 6](/bai-tap/dong-hoc/chuong-6#_11-1-2-hop-cac-chuyen-đong-quay-quanh-hai-truc-cat-nhau)):
1. Chọn chiều dương định hướng trên từng trục $\Delta_1, \Delta_2$ và viết tỷ số ăn khớp tương đối trong hệ cần $\frac{\bar{\omega}_{1/C}}{\bar{\omega}_{2/C}} = \pm\frac{r_2}{r_1}$ (dấu $+/-$ xác định trực tiếp bằng hình chiếu mũi tên vận tốc tại tiếp điểm ăn khớp khi giữ cần $C$ đứng yên).
2. Các bánh trung tâm $1, 4$ có trục trùng với $\Delta_1 \parallel \vec{\omega}_C$ nên vẫn tách đại số $\bar{\omega}_{1/C} = \bar{\omega}_1 - \bar{\omega}_C$.
3. Riêng bánh vệ tinh nón $2$ quay quanh $\Delta_2 \perp \Delta_1$ thực hiện **chuyển động cầu quanh điểm cố định $O$**, bắt buộc cộng vectơ không gian và tính gia tốc góc tiến động theo công thức Poisson:

$$\vec{\omega}_2 = \vec{\omega}_C + \vec{\omega}_{2/C} \implies \omega_2 = \sqrt{\omega_C^2 + \omega_{2/C}^2}, \qquad \vec{\varepsilon}_2 = \frac{d\vec{\omega}_C}{dt} + \frac{\tilde{d}\vec{\omega}_{2/C}}{dt} + \vec{\omega}_C \times \vec{\omega}_{2/C}$$

Đặc biệt, ngay cả khi hệ quay đều ($\dot{\omega}_C = 0,\; \dot{\omega}_{2/C} = 0$), bánh vệ tinh nón $2$ vẫn có gia tốc góc tiến động khác không $\vec{\varepsilon}_2 = \vec{\omega}_C \times \vec{\omega}_{2/C}$ ($\varepsilon_2 = \omega_C\omega_{2/C}$ khi $\Delta_1 \perp \Delta_2$).

<div class="figure-container"><img src="/figures/bai-tap/dong-hoc/hinh_11_8.svg" alt="Hình 11-8: Cơ cấu vi sai bánh răng nón hai trục vuông góc cắt nhau" class="figure-img" /><p class="figure-caption">Hình 5.3: Cơ cấu vi sai bánh răng nón với trục cần thẳng đứng Delta1 vuông góc trục quay riêng nằm ngang Delta2 của khối bánh 2-3 (Thí dụ 11-3, Hình 11-8, SBT Động học Chương 11)</p></div>

::: info Ví dụ Kiểm toán 5.1 & 5.2: Hệ hành tinh phẳng (tính tới $\vec{a}_M$) và Hộp vi sai nón ô tô
**1. Hệ hành tinh phẳng:** Cho bánh mặt trời $1$ ($z_1 = 20,\; r_1 = 0{,}10\text{ m}$) ăn khớp ngoài với bánh vệ tinh $2$ ($z_2 = 30,\; r_2 = 0{,}15\text{ m}$), bánh $2$ ăn khớp trong với vành răng cố định $3$ ($z_3 = 80,\; \bar{\omega}_3 = 0$). Bánh $1$ quay ngược KĐH với $\bar{\omega}_1 = +10\text{ rad/s}$, $\bar{\varepsilon}_1 = +4\text{ rad/s}^2$. Tại thời điểm cần $OC$ ($OC = 0{,}25\text{ m}$) nằm dọc tia $+Ox$, xét điểm $M$ trên vành bánh $2$ có $\overrightarrow{CM} = +0{,}15\vec{j}\text{ m}$:
- Từ Willis: $\frac{\bar{\omega}_1 - \bar{\omega}_C}{0 - \bar{\omega}_C} = \left(-\frac{30}{20}\right)\left(+\frac{80}{30}\right) = -4 \implies 10 - \bar{\omega}_C = 4\bar{\omega}_C \implies \bar{\omega}_C = +2\text{ rad/s}$, $\bar{\varepsilon}_C = +0{,}8\text{ rad/s}^2$.
- Suy ra $\frac{10 - 2}{\bar{\omega}_2 - 2} = -\frac{3}{2} \implies \bar{\omega}_2 = -\frac{10}{3}\text{ rad/s}$ (CW), $\bar{\varepsilon}_2 = -\frac{4}{3}\text{ rad/s}^2$.
- Vận tốc và gia tốc điểm $M$:
  $$\begin{aligned}
  \vec{v}_C &= (+2\vec{k})\times(0{,}25\vec{i}) = 0{,}5\vec{j}\text{ (m/s)} \\
  \vec{v}_M &= 0{,}5\vec{j} + \left(-\frac{10}{3}\vec{k}\right)\times(0{,}15\vec{j}) = 0{,}5\vec{i} + 0{,}5\vec{j}\text{ (m/s)} \\
  \vec{a}_C &= -1{,}0\vec{i} + 0{,}2\vec{j}\text{ (m/s}^2\text{)} \\
  \vec{a}_M &= \vec{a}_C + \left(-\frac{4}{3}\vec{k}\right)\times(0{,}15\vec{j}) - \frac{100}{9}(0{,}15\vec{j}) \\
  &= -0{,}80\vec{i} - \frac{22}{15}\vec{j} \approx -0{,}80\vec{i} - 1{,}47\vec{j}\text{ (m/s}^2\text{)}
  \end{aligned}$$

**2. Hộp vi sai nón đối xứng (tương tự `Bài 11-10` SBT Đỗ Sanh):** Hai bán trục sau gắn hai bánh nón cùng bán kính $r_1 = r_2 = 6\text{ cm}$ quay cùng chiều với $\omega_1 = 8\text{ rad/s}$ và $\omega_2 = 4\text{ rad/s}$; bánh hành tinh nón $3$ bán kính $r_3 = 3\text{ cm}$ lắp trên vỏ hộp $C$:
- Willis giữa hai bánh đồng trục $1$ và $2$ qua bánh trung gian nón $3$: $\frac{\bar{\omega}_1 - \bar{\omega}_C}{\bar{\omega}_2 - \bar{\omega}_C} = -1 \implies \bar{\omega}_C = \frac{\bar{\omega}_1 + \bar{\omega}_2}{2} = 6\text{ rad/s}$.
- Vận tốc góc tương đối của bánh $3$: $\lvert\omega_{3/C}\rvert = \frac{r_1}{r_3}\lvert\bar{\omega}_1 - \bar{\omega}_C\rvert = \frac{6}{3}(8 - 6) = 4\text{ rad/s}$.
- Vận tốc góc và gia tốc góc tuyệt đối của bánh $3$: $\omega_3 = \sqrt{6^2 + 4^2} = 2\sqrt{13} \approx 7{,}21\text{ rad/s}$ và $\varepsilon_3 = \omega_C\omega_{3/C} = 6 \cdot 4 = 24\text{ rad/s}^2$.
:::

**Bài tập tự luyện bắt buộc Ngày 5 (SBT Đỗ Sanh):**
- [BT Động học Chương 6 (Chương 11 gốc)](/bai-tap/dong-hoc/chuong-6#_11-3-bai-giai-mau): giải `Thí dụ 11-1`, `Thí dụ 11-2`, `Thí dụ 11-3` *(chú ý các dòng đính chính lỗi in số học của sách gốc đã ghi chú rõ trong trang chương)*; tự giải `Bài 11-1`, `Bài 11-3`, `Bài 11-5`, `Bài 11-7`, `Bài 11-10` và đối chiếu [Chủ đề 7](/on-thi/de-thi-that-hcmut#chu-de-5-8).

---

### 5.2. Cổng Kiểm Định Chặng 1 (Bắt Buộc — 12 Câu / 35 Phút, Cấm Mở Tài Liệu) {#cong-kiem-dinh-chang-1}

::: warning Quy chế thực hiện Cổng Kiểm Định Chặng 1
- **Thời gian nghiêm ngặt:** Đúng **35 phút** cho **12 câu trắc nghiệm 5 phương án (`a..e`)**, chỉ sử dụng giấy nháp trắng và máy tính cầm tay, **tuyệt đối không tra cứu lại bài giảng hay bảng công thức**.
- **Đặc điểm đề kiểm định:** Mô phỏng đúng cấu trúc bẫy đề thi thật HCMUT AS1003 — bao gồm bẫy đảo chiều hệ trục tọa độ, bẫy $\vec{a}_I \neq \vec{0}$ trên đường cong, bẫy dấu $\vec{a}_c$, và phương án `Các đáp án còn lại đều sai` xuất hiện ở các vị trí `a, b, c, d, e` khác nhau (có câu là đáp án đúng, có câu là phương án nhiễu).
- Chỉ mở phần kiểm toán đáp án sau khi đã ghi trọn vẹn 12 lựa chọn ra giấy.
:::

**Câu 1 (Ngày 1 — Hệ trục đảo chiều đơn lẻ & đạo hàm vectơ quay).** Trong mặt phẳng gắn hệ trục tọa độ Đề-các $(O, \vec{i}, \vec{j})$ có tia $+Ox(\vec{i})$ hướng **sang phải**, nhưng tia $+Oy(\vec{j})$ hướng **thẳng đứng xuống dưới**. Thanh cứng $OA$ dài $L = 0{,}4\text{ m}$ quay quanh chốt cố định $O$; tại thời điểm khảo sát, thanh nằm giữa hai tia $+Ox, +Oy$ với góc $\widehat{xOA} = 60^\circ$, đang quay **ngược chiều kim đồng hồ (CCW)** và **tăng tốc** với $\omega = 5\text{ rad/s}$, $\varepsilon = 15\text{ rad/s}^2$. Vectơ gia tốc điểm $A$ ($\text{m/s}^2$) biểu diễn theo $(\vec{i}, \vec{j})$ là:
- a. $\vec{a}_A = -\left(5 + 3\sqrt{3}\right)\vec{i} + \left(3 - 5\sqrt{3}\right)\vec{j}$
- b. $\vec{a}_A = \left(3\sqrt{3} - 5\right)\vec{i} - \left(3 + 5\sqrt{3}\right)\vec{j}$
- c. Các đáp án còn lại đều sai
- d. $\vec{a}_A = \left(3 - 5\sqrt{3}\right)\vec{i} - \left(5 + 3\sqrt{3}\right)\vec{j}$
- e. $\vec{a}_A = \left(3\sqrt{3} + 5\right)\vec{i} + \left(5\sqrt{3} - 3\right)\vec{j}$

**Câu 2 (Ngày 1 — Giải phóng liên kết hệ dầm & thanh hai đầu khớp).** Dầm ngang đồng chất $AB$ dài $4a$, trọng lượng $P$, đầu $A$ nối bản lề trụ cố định vào tường đứng, được đỡ nằm ngang nhờ thanh nhẹ không trọng lượng $CD$ (hai đầu bản lề gắn vào tường tại $C$ phía dưới $A$ và gắn vào dầm tại $D$ với $AD = 3a$, góc $\widehat{ADC} = 30^\circ$). Đầu tự do $B$ chịu lực thẳng đứng hướng xuống $Q = P$. Chọn trục $Ox$ hướng ngang từ $A$ sang $B$. Giá trị đại số ứng lực dọc thanh $CD$ ($S_{CD} > 0$ khi chịu kéo, $S_{CD} < 0$ khi chịu nén) và thành phần phản lực ngang $X_A$ tại bản lề $A$ là:
- a. $S_{CD} = -4P;\; X_A = -2\sqrt{3}\,P$
- b. $S_{CD} = +4P;\; X_A = +2\sqrt{3}\,P$
- c. $S_{CD} = -\frac{8}{3}P;\; X_A = -\frac{4\sqrt{3}}{3}P$
- d. $S_{CD} = -2P;\; X_A = 0$
- e. Các đáp án còn lại đều sai

**Câu 3 (Ngày 2 — Gia tốc điểm tiếp xúc lăn không trượt trên cung tròn cố định).** Bánh răng động bán kính $r = 10\text{ cm}$ lăn không trượt ở **phía trong** vành răng tròn cố định bán kính $R_{\text{đường}} = 30\text{ cm}$ nhờ tay quay dẫn $OC$ ($O$ là tâm vành cố định, $C$ là tâm bánh động). Tại thời điểm tay quay $OC$ thẳng đứng hướng xuống dưới, $OC$ có vận tốc góc $\omega_0 = 4\text{ rad/s}$ (ngược KĐH) và gia tốc góc $\varepsilon_0 = 6\text{ rad/s}^2$ (ngược KĐH). Chọn $Ox(\vec{i})$ sang phải, $Oy(\vec{j})$ thẳng đứng hướng lên. Vectơ gia tốc $\vec{a}_I$ ($\text{cm/s}^2$) của điểm $I$ thuộc vành bánh động đang tiếp xúc với vành cố định ở đáy dưới cùng là:
- a. $\vec{a}_I = \vec{0}$
- b. $\vec{a}_I = 640\vec{j}$
- c. $\vec{a}_I = 480\vec{j}$
- d. Các đáp án còn lại đều sai
- e. $\vec{a}_I = 120\vec{i} + 960\vec{j}$

**Câu 4 (Ngày 2 — Phân bố vận tốc & gia tốc trên con lăn hai tầng).** Con lăn hai tầng có bán kính vành ngoài $R = 0{,}4\text{ m}$ và bán kính tầng trong $r = 0{,}2\text{ m}$ lăn không trượt sang phải trên mặt sàn ngang cố định ($Ox$ sang phải, $Oy$ hướng lên). Tại thời điểm khảo sát, đỉnh cao nhất của vành ngoài có vận tốc $v_{\text{đỉnh}} = 2{,}4\text{ m/s}$ hướng sang phải và tâm $O$ của con lăn đang **chuyển động chậm dần** với độ lớn gia tốc $a_O = 1{,}8\text{ m/s}^2$. Vectơ gia tốc ($\text{m/s}^2$) của điểm $M$ nằm ở phía trái nhất trên vành tầng trong ($\overrightarrow{OM} = -0{,}2\vec{i}\text{ m}$) là:
- a. Các đáp án còn lại đều sai
- b. $\vec{a}_M = -0{,}9\vec{j}$
- c. $\vec{a}_M = -3{,}6\vec{i} - 0{,}9\vec{j}$
- d. $\vec{a}_M = +0{,}9\vec{j}$
- e. $\vec{a}_M = -1{,}8\vec{i} - 0{,}9\vec{j}$

**Câu 5 (Ngày 3 — Vận tốc cơ cấu 3 khâu có $\omega_{AB} \neq 0$).** Trong mặt phẳng chuẩn $Oxy$ ($Ox$ sang phải, $Oy$ hướng lên, $\vec{k}$ hướng ra), tay quay $OA = 0{,}3\text{ m}$ quay đều cùng chiều kim đồng hồ (CW) quanh gốc $O$ với $\omega_{OA} = 4\text{ rad/s}$ ($\varepsilon_{OA} = 0$). Thanh truyền $AB$ dài $0{,}3\sqrt{3}\text{ m}$ nối chốt $A$ với con trượt $B$ dịch chuyển dọc trục ngang $+Ox$. Tại thời điểm thanh $OA$ nằm ở góc phần tư thứ I hợp với $+Ox$ góc $60^\circ$ (khi đó $\widehat{OAB} = 90^\circ$ và $x_B = 0{,}6\text{ m}$), giá trị đại số vận tốc góc $\bar{\omega}_{AB}$ ($\text{rad/s}$) của thanh $AB$ và vận tốc $v_{Bx}$ ($\text{m/s}$) của con trượt $B$ là:
- a. $\bar{\omega}_{AB} = -\frac{4}{3};\; v_{Bx} = 0{,}4\sqrt{3}$
- b. $\bar{\omega}_{AB} = 0;\; v_{Bx} = 0{,}6\sqrt{3}$
- c. $\bar{\omega}_{AB} = +\frac{4}{3};\; v_{Bx} = 0{,}8\sqrt{3}$
- d. $\bar{\omega}_{AB} = +\frac{8}{3};\; v_{Bx} = 1{,}2\sqrt{3}$
- e. Các đáp án còn lại đều sai

**Câu 6 (Ngày 3 — Gia tốc cơ cấu 3 khâu liên hoàn với Câu 5).** Với cùng cơ hệ và thời điểm khảo sát như Câu 5, giá trị đại số gia tốc góc $\bar{\varepsilon}_{AB}$ ($\text{rad/s}^2$) của thanh truyền $AB$ và gia tốc dọc trục $a_{Bx}$ ($\text{m/s}^2$) của con trượt $B$ là:
- a. $\bar{\varepsilon}_{AB} = +\frac{16\sqrt{3}}{3};\; a_{Bx} = 0$
- b. Các đáp án còn lại đều sai
- c. $\bar{\varepsilon}_{AB} = -\frac{128\sqrt{3}}{27};\; a_{Bx} = -\frac{32}{5}$
- d. $\bar{\varepsilon}_{AB} = +\frac{128\sqrt{3}}{27};\; a_{Bx} = -\frac{16}{15}$
- e. $\bar{\varepsilon}_{AB} = +\frac{128\sqrt{3}}{27};\; a_{Bx} = +\frac{176}{45}$

**Câu 7 (Ngày 3 — Đĩa lăn kéo thanh truyền tịnh tiến tức thời).** Đĩa tròn bán kính $R = 0{,}2\text{ m}$ lăn không trượt **sang trái** trên sàn ngang cố định ($Ox$ sang phải, $Oy$ hướng lên, $\vec{k}$ hướng ra) với vận tốc góc $\omega = 3\text{ rad/s}$ (ngược KĐH — CCW) và đang **quay chậm dần** với độ lớn gia tốc góc $\varepsilon = 5\text{ rad/s}^2$. Thanh cứng $BA$ nối đỉnh cao nhất $B$ của đĩa với con chạy $A$ trượt dọc rãnh ngang trên mặt sàn ở phía bên phải đĩa; tại thời điểm khảo sát, thanh $BA$ hợp với phương ngang góc $\alpha = 30^\circ$. Vectơ gia tốc góc $\vec{\varepsilon}_{AB}$ ($\text{rad/s}^2$) của thanh $BA$ là:
- a. $\vec{\varepsilon}_{AB} = +\frac{3\sqrt{3}}{2}\vec{k}$
- b. $\vec{\varepsilon}_{AB} = -\frac{3\sqrt{3}}{2}\vec{k}$
- c. $\vec{\varepsilon}_{AB} = \vec{0}$
- d. $\vec{\varepsilon}_{AB} = +3\sqrt{3}\,\vec{k}$
- e. Các đáp án còn lại đều sai

**Câu 8 (Ngày 4 — Hợp chuyển động điểm trên rãnh cong tròn quay biến đổi).** Đĩa tròn bán kính $R = 0{,}5\text{ m}$ quay trong mặt phẳng chuẩn $Oxy$ ($Ox$ sang phải, $Oy$ hướng lên, $\vec{k}$ hướng ra) quanh tâm cố định $O(0,0)$ theo chiều kim đồng hồ (CW) với $\omega_e = 2\text{ rad/s}$ và tăng tốc góc CW với $\varepsilon_e = 3\text{ rad/s}^2$. Trên mặt đĩa khoét một rãnh tròn bán kính $r = 0{,}25\text{ m}$ có tâm rãnh tại $C(0,\; 0{,}25)\text{ m}$ gắn trên đĩa. Tại thời điểm hạt $M$ đi qua điểm cao nhất $D(0,\; 0{,}5)\text{ m}$ của rãnh theo chiều từ trái sang phải đối với đĩa với tốc độ tương đối không đổi $v_r = 1{,}0\text{ m/s}$, vectơ gia tốc tuyệt đối $\vec{a}_a$ ($\text{m/s}^2$) của hạt $M$ là:
- a. $\vec{a}_a = 1{,}5\vec{i} - 6{,}0\vec{j}$
- b. $\vec{a}_a = 1{,}5\vec{i} - 8{,}0\vec{j}$
- c. $\vec{a}_a = 1{,}5\vec{i} - 10{,}0\vec{j}$
- d. Các đáp án còn lại đều sai
- e. $\vec{a}_a = 1{,}5\vec{i} - 2{,}0\vec{j}$

**Câu 9 (Ngày 4 — Bài toán ngược vận tốc cơ cấu culit rãnh quay).** Trong mặt phẳng chuẩn $Oxy$ ($Ox$ sang phải, $Oy$ hướng lên, $\vec{k}$ hướng ra), tay quay $OA$ dài $0{,}2\text{ m}$ quay đều ngược chiều kim đồng hồ (CCW) quanh khớp cố định $O$ với $\omega_0 = 5\text{ rad/s}$ ($\varepsilon_0 = 0$). Chốt $A$ trượt trong rãnh thẳng của thanh culit $O_1B$ quay quanh khớp cố định $O_1$. Tại thời điểm $OA$ thẳng đứng hướng lên ($\overrightarrow{OA} = 0{,}2\vec{j}\text{ m}$), đoạn $O_1A$ dài $0{,}4\text{ m}$ nghiêng góc $30^\circ$ phía trên phương ngang sang phải ($\overrightarrow{O_1A} = 0{,}4\cos 30^\circ\,\vec{i} + 0{,}4\sin 30^\circ\,\vec{j}\text{ m}$). Giá trị đại số vận tốc góc $\bar{\omega}_{O_1B}$ ($\text{rad/s}$) của thanh culit và hình chiếu vận tốc tương đối $v_r$ ($\text{m/s}$, quy ước dương khi trượt dọc rãnh ra xa $O_1$) là:
- a. $\bar{\omega}_{O_1B} = +1{,}25;\; v_r = -\frac{\sqrt{3}}{2}$
- b. $\bar{\omega}_{O_1B} = -1{,}25;\; v_r = -\frac{\sqrt{3}}{2}$
- c. $\bar{\omega}_{O_1B} = +1{,}25;\; v_r = +\frac{\sqrt{3}}{2}$
- d. $\bar{\omega}_{O_1B} = +\frac{5\sqrt{3}}{4};\; v_r = -0{,}5$
- e. Các đáp án còn lại đều sai

**Câu 10 (Ngày 4 — Bài toán ngược gia tốc góc cơ cấu culit liên hoàn với Câu 9).** Với cùng cơ hệ và thời điểm khảo sát như Câu 9, giá trị đại số gia tốc góc $\bar{\varepsilon}_{O_1B}$ ($\text{rad/s}^2$, dương khi hướng ngược KĐH) của thanh culit $O_1B$ là:
- a. $\bar{\varepsilon}_{O_1B} = -\frac{75\sqrt{3}}{8}$
- b. Các đáp án còn lại đều sai
- c. $\bar{\varepsilon}_{O_1B} = -\frac{25\sqrt{3}}{4}$
- d. $\bar{\varepsilon}_{O_1B} = +\frac{25\sqrt{3}}{8}$
- e. $\bar{\varepsilon}_{O_1B} = 0$

**Câu 11 (Ngày 5 — Hệ bánh răng vi sai phẳng hỗn hợp Willis).** Cơ cấu vi sai phẳng gồm bánh răng trung tâm $1$ ($z_1 = 24$ răng) quay ngược chiều kim đồng hồ (CCW, chiều dương $+\vec{k}$) với tốc độ $\omega_1 = 23\text{ rad/s}$, vành răng bao ngoài $3$ ($z_3 = 72$ răng) quay **cùng chiều kim đồng hồ (CW)** với tốc độ $\omega_3 = 5\text{ rad/s}$. Bánh vệ tinh $2$ ($z_2 = 24$ răng) lắp trên chốt của cần dẫn $C$, đồng thời ăn khớp ngoài với bánh $1$ và ăn khớp trong với vành răng $3$. Vận tốc góc đại số của cần dẫn $\bar{\omega}_C$ và của bánh vệ tinh $\bar{\omega}_2$ ($\text{rad/s}$) là:
- a. $\bar{\omega}_C = +9{,}5;\; \bar{\omega}_2 = -4{,}0$
- b. $\bar{\omega}_C = +2{,}0;\; \bar{\omega}_2 = -21{,}0$
- c. Các đáp án còn lại đều sai
- d. $\bar{\omega}_C = +2{,}0;\; \bar{\omega}_2 = -19{,}0$
- e. $\bar{\omega}_C = -19{,}0;\; \bar{\omega}_2 = +23{,}0$

**Câu 12 (Ngày 5 — Hệ bánh răng nón hành tinh không gian & gia tốc góc tiến động).** Cơ cấu hành tinh bánh răng nón có bánh nón trung tâm $1$ bán kính $r_1 = 12\text{ cm}$ giữ cố định ($\omega_1 = 0$). Cần dẫn $C$ quay đều quanh trục thẳng đứng $Oz$ với $\vec{\omega}_C = 6\vec{k}\text{ rad/s}$. Trên nhánh ngang vuông góc với $Oz$ (trùng tia $+Ox$ tại thời điểm khảo sát) lắp bánh răng nón vệ tinh $2$ bán kính $r_2 = 6\text{ cm}$ ăn khớp không trượt với bánh $1$ ở mặt dưới sao cho $\vec{\omega}_{2/C}$ hướng theo $+\vec{i}$. Độ lớn vận tốc góc tuyệt đối $\omega_2$ ($\text{rad/s}$) và độ lớn gia tốc góc tuyệt đối $\varepsilon_2$ ($\text{rad/s}^2$) của bánh nón $2$ là:
- a. $\omega_2 = 18\text{ rad/s};\; \varepsilon_2 = 0$
- b. $\omega_2 = 6\sqrt{5}\text{ rad/s};\; \varepsilon_2 = 0$
- c. $\omega_2 = 6\sqrt{5}\text{ rad/s};\; \varepsilon_2 = 72\text{ rad/s}^2$
- d. $\omega_2 = 12\text{ rad/s};\; \varepsilon_2 = 72\text{ rad/s}^2$
- e. Các đáp án còn lại đều sai

<details>
<summary>Đáp án, Kiểm toán &amp; Giải phẫu Phương án Nhiễu</summary>

#### Bảng Khóa Đáp Án Chuẩn (Đã Kiểm Toán Độc Lập Bằng SymPy)

| Câu | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án đúng** | **`b`** | **`a`** | **`d`** | **`b`** | **`c`** | **`d`** | **`a`** | **`c`** | **`a`** | **`b`** | **`d`** | **`c`** |

#### Lời Giải Đại Số &amp; Giải Phẫu Chi Tiết Từng Phương Án Nhiễu (`a..e`)

1. **Câu 1 — Chọn `b`:**
   - **Kiểm toán:** $\overrightarrow{OA} = 0{,}4\cos 60^\circ\,\vec{i} + 0{,}4\sin 60^\circ\,\vec{j} = 0{,}2\vec{i} + 0{,}2\sqrt{3}\,\vec{j}\text{ (m)}$. Vì $+Ox$ sang phải còn $+Oy$ hướng **xuống dưới**, tam diện thuận có $\vec{e}_3 = \vec{i}\times\vec{j}$ hướng **vào trong** mặt giấy; do đó quay tăng tốc ngược KĐH (CCW) ứng với $\vec{\omega} = -5\vec{e}_3$ và $\vec{\varepsilon} = -15\vec{e}_3$. Tính $\vec{a}_A^\tau = (-15\vec{e}_3)\times(0{,}2\vec{i} + 0{,}2\sqrt{3}\,\vec{j}) = 3\sqrt{3}\,\vec{i} - 3\vec{j}$, cộng $\vec{a}_A^n = -25(0{,}2\vec{i} + 0{,}2\sqrt{3}\,\vec{j}) = -5\vec{i} - 5\sqrt{3}\,\vec{j}$ cho $\vec{a}_A = (3\sqrt{3} - 5)\vec{i} - (3 + 5\sqrt{3})\vec{j}\text{ m/s}^2$.
   - **Giải phẫu nhiễu:** `a` là lỗi gán máy móc CCW mang dấu $+\vec{e}_3$ mà quên $Oy$ đảo chiều xuống dưới; `d` là lỗi hoán vị $\sin 60^\circ \leftrightarrow \cos 60^\circ$ khi chiếu $\overrightarrow{OA}$; `e` là lỗi đảo dấu $+\omega^2\overrightarrow{OA}$ cho gia tốc hướng tâm; `c` sai vì `b` đã khớp chính xác.

2. **Câu 2 — Chọn `a`:**
   - **Kiểm toán:** Thanh nhẹ hai đầu khớp $CD$ chỉ chịu lực dọc thanh. Giả sử thanh đẩy vào dầm lực nén $N_{CD} > 0$ hướng từ $C$ lên $D$ (hợp $30^\circ$ với $DA$). Lấy mômen đối với bản lề $A$: $3a(N_{CD}\sin 30^\circ) - 2aP - 4aP = 0 \implies 1{,}5N_{CD} = 6P \implies N_{CD} = 4P$ (thanh chịu nén nên $S_{CD} = -4P$). Chiếu lên $Ox$: $X_A + N_{CD}\cos 30^\circ = 0 \implies X_A = -2\sqrt{3}\,P$.
   - **Giải phẫu nhiễu:** `b` nhầm thanh chịu kéo ($S_{CD} > 0$) và quên chuyển vế khi tính $X_A$; `c` bỏ quên trọng lượng bản thân dầm $P$ đặt tại trung điểm $2a$ (chỉ tính tải $Q=P$ tại $B$); `d` mô hình hóa sai thanh $CD$ thành gối tựa vuông góc dầm $AB$; `e` là nhiễu.

3. **Câu 3 — Chọn `d` (`Các đáp án còn lại đều sai`):**
   - **Kiểm toán:** Khoảng cách $OC = R_{\text{đường}} - r = 20\text{ cm} \implies v_C = \omega_0 \cdot OC = 80\text{ cm/s}$ (sang phải) $\implies \omega_{\text{bánh}} = \frac{v_C}{r} = 8\text{ rad/s}$. Áp dụng công thức lăn trong trên vành tròn lõm cố định (pháp tuyến hướng từ $I$ lên $C, O$ là $+\vec{j}$):
     $$\begin{aligned}
     \vec{a}_I &= \omega_{\text{bánh}}^2 r\left(\frac{R_{\text{đường}}}{R_{\text{đường}} - r}\right)\vec{j} \\
     &= 8^2 \cdot 10 \cdot \frac{30}{20}\vec{j} = +960\vec{j}\text{ (cm/s}^2\text{)}
     \end{aligned}$$
     Không có phương án nào trong `a, b, c, e` bằng $+960\vec{j}$, nên **`d`** là đáp án đúng.
   - **Giải phẫu nhiễu:** `a` mắc lỗi cơ bản đồng nhất $\vec{v}_I = \vec{0} \implies \vec{a}_I = \vec{0}$; `b` dùng nhầm công thức lăn trên đường thẳng $\omega_{\text{bánh}}^2 r = 640\vec{j}$ (bỏ quên gia tốc hướng tâm $\vec{a}_C^n = +320\vec{j}$ của tâm bánh động trên quỹ đạo cong); `c` áp dụng nhầm công thức lăn ngoài $\omega_{\text{bánh}}^2 r\frac{R}{R+r} = 480\vec{j}$; `e` quên rằng hai thành phần tiếp tuyến $\vec{a}_C^\tau = +120\vec{i}$ và $\vec{a}_{IC}^\tau = -120\vec{i}$ triệt tiêu nhau.

4. **Câu 4 — Chọn `b`:**
   - **Kiểm toán:** Tâm tức thời tại tiếp điểm đáy vành ngoài cho $v_{\text{đỉnh}} = 2\omega R \implies \omega = \frac{2{,}4}{0{,}8} = 3\text{ rad/s}$ (CW, $\vec{\omega} = -3\vec{k}$). Con lăn đi sang phải nhưng **chậm dần** nên $\vec{a}_O = -1{,}8\vec{i}\text{ m/s}^2$ và $\vec{\varepsilon}$ ngược chiều $\vec{\omega}$ (hướng CCW): $\vec{\varepsilon} = +\frac{1{,}8}{0{,}4}\vec{k} = +4{,}5\vec{k}\text{ rad/s}^2$. Với cực $O$ và $\overrightarrow{OM} = -0{,}2\vec{i}$:
     $$\begin{aligned}
     \vec{a}_M &= -1{,}8\vec{i} + (+4{,}5\vec{k})\times(-0{,}2\vec{i}) - 3^2(-0{,}2\vec{i}) \\
     &= (-1{,}8 + 1{,}8)\vec{i} - 0{,}9\vec{j} = -0{,}9\vec{j}\text{ (m/s}^2\text{)}
     \end{aligned}$$
   - **Giải phẫu nhiễu:** `c` sai dấu hướng tâm $\vec{a}_{MO}^n$ (lấy $-1{,}8\vec{i}$ thay vì $+1{,}8\vec{i}$); `d` quên dữ kiện "chậm dần" nên lấy $\vec{\varepsilon} = -4{,}5\vec{k}$ cùng chiều $\vec{\omega}$; `e` bỏ sót thành phần $\vec{a}_{MO}^n$; `a` là nhiễu.

5. **Câu 5 — Chọn `c`:**
   - **Kiểm toán:** $A = (0{,}15;\; 0{,}15\sqrt{3})\text{ m}$, $B = (0{,}6;\; 0)\text{ m} \implies \overrightarrow{AB} = 0{,}45\vec{i} - 0{,}15\sqrt{3}\,\vec{j}\text{ m}$. Do $\vec{\omega}_{OA} = -4\vec{k}$: $\vec{v}_A = (-4\vec{k})\times\overrightarrow{OA} = 0{,}6\sqrt{3}\,\vec{i} - 0{,}6\vec{j}\text{ m/s}$. Từ $\vec{v}_B = \vec{v}_A + (\bar{\omega}_{AB}\vec{k})\times\overrightarrow{AB} = (0{,}6\sqrt{3} + 0{,}15\sqrt{3}\,\bar{\omega}_{AB})\vec{i} + (-0{,}6 + 0{,}45\bar{\omega}_{AB})\vec{j}$, điều kiện $v_{By} = 0$ cho $\bar{\omega}_{AB} = +\frac{4}{3}\text{ rad/s}$ và $v_{Bx} = 0{,}8\sqrt{3}\text{ m/s}$.
   - **Giải phẫu nhiễu:** `a` đảo ngược $\overrightarrow{AB}$ thành $\overrightarrow{BA}$ làm sai dấu $\bar{\omega}_{AB}$; `b` ngộ nhận thanh truyền tịnh tiến tức thời ($\bar{\omega}_{AB} = 0$); `d` tính sai cạnh $IA$ khi tìm tâm tức thời; `e` là nhiễu.

6. **Câu 6 — Chọn `d`:**
   - **Kiểm toán:** $\vec{a}_A = -16\overrightarrow{OA} = -2{,}4\vec{i} - 2{,}4\sqrt{3}\,\vec{j}\text{ m/s}^2$; $\vec{a}_{BA}^n = -\left(\frac{4}{3}\right)^2\overrightarrow{AB} = -0{,}8\vec{i} + \frac{0{,}8\sqrt{3}}{3}\vec{j}\text{ m/s}^2$. Viết $\vec{a}_B = \vec{a}_A + (\bar{\varepsilon}_{AB}\vec{k})\times\overrightarrow{AB} + \vec{a}_{BA}^n$:
     $$\begin{aligned}
     a_{By} &= -2{,}4\sqrt{3} + \frac{0{,}8\sqrt{3}}{3} + 0{,}45\bar{\varepsilon}_{AB} = 0 \implies \bar{\varepsilon}_{AB} = +\frac{128\sqrt{3}}{27}\text{ rad/s}^2 \\
     a_{Bx} &= -2{,}4 - 0{,}8 + 0{,}15\sqrt{3}\left(\frac{128\sqrt{3}}{27}\right) = -\frac{16}{5} + \frac{32}{15} = -\frac{16}{15}\text{ m/s}^2
     \end{aligned}$$
   - **Giải phẫu nhiễu:** `a` là kết quả khi bỏ quên hoàn toàn gia tốc hướng tâm tương đối $\vec{a}_{BA}^n$ (cho $a_{Bx} = 0,\; \bar{\varepsilon}_{AB} = \frac{16\sqrt{3}}{3}$); `c` đảo ngược vectơ $\overrightarrow{AB}$ thành $\overrightarrow{BA}$; `e` tính nhầm tích số học $0{,}15 \cdot 3 \cdot \frac{128}{27}$ thành $\frac{64}{9}$ thay vì $\frac{32}{15}$; `b` là nhiễu.

7. **Câu 7 — Chọn `a`:**
   - **Kiểm toán:** Đĩa lăn sang trái ($\vec{\omega} = +3\vec{k}$) nhưng **chậm dần** nên $\vec{\varepsilon} = -5\vec{k}$ (CW) và tâm đĩa có $\vec{a}_O = +5(0{,}2)\vec{i} = +1{,}0\vec{i}\text{ m/s}^2$. Tại đỉnh $B$ ($\overrightarrow{OB} = 0{,}2\vec{j}$): $\vec{a}_B = 1{,}0\vec{i} + (-5\vec{k})\times(0{,}2\vec{j}) - 9(0{,}2\vec{j}) = 2{,}0\vec{i} - 1{,}8\vec{j}\text{ m/s}^2$. Thanh $BA$ có $L = \frac{2R}{\sin 30^\circ} = 0{,}8\text{ m}$, $\overrightarrow{BA} = 0{,}4\sqrt{3}\,\vec{i} - 0{,}4\vec{j}\text{ m}$, đang tịnh tiến tức thời ($\omega_{AB} = 0$). Chiếu $\vec{a}_A = \vec{a}_B + (\bar{\varepsilon}_{AB}\vec{k})\times\overrightarrow{BA}$ lên $Oy$: $-1{,}8 + 0{,}4\sqrt{3}\,\bar{\varepsilon}_{AB} = 0 \implies \bar{\varepsilon}_{AB} = +\frac{3\sqrt{3}}{2}\text{ rad/s}^2$.
   - **Giải phẫu nhiễu:** `b` đặt $A$ nhầm sang bên trái đĩa hoặc đảo $\overrightarrow{BA}$; `c` suy diễn sai $\omega_{AB} = 0 \implies \vec{\varepsilon}_{AB} = \vec{0}$; `d` lấy chiều cao tam giác bằng $R = 0{,}2\text{ m}$ thay vì $2R = 0{,}4\text{ m}$ (làm $L$ giảm một nửa và $\bar{\varepsilon}_{AB}$ tăng gấp đôi); `e` là nhiễu.

8. **Câu 8 — Chọn `c`:**
   - **Kiểm toán:** Tại $D(0;\; 0{,}5)\text{ m}$ với $\vec{\omega}_e = -2\vec{k}$, $\vec{\varepsilon}_e = -3\vec{k}$: gia tốc kéo theo $\vec{a}_e = (-3\vec{k})\times(0{,}5\vec{j}) - 4(0{,}5\vec{j}) = 1{,}5\vec{i} - 2{,}0\vec{j}\text{ m/s}^2$. Rãnh là đường tròn bán kính $r = 0{,}25\text{ m}$ tâm $C(0;\; 0{,}25)\text{ m}$, nên dù $v_r = 1{,}0\text{ m/s} = \text{const}$ ($a_r^\tau = 0$), vẫn tồn tại gia tốc tương đối pháp tuyến hướng từ $D$ về $C$: $\vec{a}_r^n = -\frac{1{,}0^2}{0{,}25}\vec{j} = -4{,}0\vec{j}\text{ m/s}^2$. Cộng thêm $\vec{a}_c = 2(-2\vec{k})\times(1{,}0\vec{i}) = -4{,}0\vec{j}\text{ m/s}^2$ thu được $\vec{a}_a = 1{,}5\vec{i} - 10{,}0\vec{j}\text{ m/s}^2$.
   - **Giải phẫu nhiễu:** `a` bỏ sót $\vec{a}_r^n = -4{,}0\vec{j}$ vì tưởng trượt đều thì $\vec{a}_r = \vec{0}$; `b` thiếu hệ số $2$ trong công thức Coriolis ($\vec{\omega}_e\times\vec{v}_r$); `e` quay ngược chiều $\vec{a}_c$ thành $+4{,}0\vec{j}$ làm triệt tiêu mất $\vec{a}_r^n$; `d` là nhiễu.

9. **Câu 9 — Chọn `a`:**
   - **Kiểm toán:** $\vec{v}_A = (+5\vec{k})\times(0{,}2\vec{j}) = -1{,}0\vec{i}\text{ m/s}$. Đặt $\vec{u}_\parallel = \frac{\sqrt{3}}{2}\vec{i} + \frac{1}{2}\vec{j}$ và $\vec{u}_\perp = -\frac{1}{2}\vec{i} + \frac{\sqrt{3}}{2}\vec{j}$. Chiếu $\vec{v}_A$: $v_{A^*} = \vec{v}_A\cdot\vec{u}_\perp = +0{,}5\text{ m/s} \implies \bar{\omega}_{O_1B} = \frac{+0{,}5}{0{,}4} = +1{,}25\text{ rad/s}$; $v_r = \vec{v}_A\cdot\vec{u}_\parallel = -\frac{\sqrt{3}}{2}\text{ m/s}$.
   - **Giải phẫu nhiễu:** `b` xác định sai chiều quay của trùng điểm $A^*$ quanh $O_1$; `c` lấy độ lớn dương cho $v_r$ mà bỏ qua chiều trượt vào gần $O_1$; `d` hoán đổi phương chiếu dọc rãnh và vuông góc rãnh; `e` là nhiễu.

10. **Câu 10 — Chọn `b` (`Các đáp án còn lại đều sai`):**
    - **Kiểm toán:** $\vec{a}_A = -25(0{,}2\vec{j}) = -5{,}0\vec{j}\text{ m/s}^2$. Với $\bar{\omega}_{O_1B} = +1{,}25\text{ rad/s}$ và $v_r = -\frac{\sqrt{3}}{2}\text{ m/s}$ từ Câu 9, số hạng gia tốc Coriolis chiếu lên $\vec{u}_\perp$ là $2\bar{\omega}_{O_1B}v_r = -\frac{5\sqrt{3}}{4}\text{ m/s}^2$, còn $\vec{a}_A\cdot\vec{u}_\perp = -\frac{5\sqrt{3}}{2}\text{ m/s}^2$. Từ phương trình chiếu vuông góc rãnh:
      $$\begin{aligned}
      0{,}4\bar{\varepsilon}_{O_1B} + \left(-\frac{5\sqrt{3}}{4}\right) &= -\frac{5\sqrt{3}}{2} \\
      \implies 0{,}4\bar{\varepsilon}_{O_1B} &= -\frac{5\sqrt{3}}{4} \implies \bar{\varepsilon}_{O_1B} = -\frac{25\sqrt{3}}{8} \approx -5{,}41\text{ rad/s}^2
      \end{aligned}$$
      Giá trị đúng $-\frac{25\sqrt{3}}{8}$ không xuất hiện trong `a, c, d, e`, nên **`b`** là đáp án đúng.
    - **Giải phẫu nhiễu:** `a` dùng nhầm $v_r = +\frac{\sqrt{3}}{2} > 0$ làm đảo chiều $\vec{a}_c$ thành $+\frac{5\sqrt{3}}{4}\vec{u}_\perp$ (ra $-\frac{75\sqrt{3}}{8}$); `c` bỏ quên hoàn toàn số hạng Coriolis $\vec{a}_c$ (ra $-\frac{25\sqrt{3}}{4}$); `d` chiếu sai dấu của $\vec{a}_A = -5\vec{j}$ lên $\vec{u}_\perp$; `e` ngộ nhận $\varepsilon_0 = 0 \implies \bar{\varepsilon}_{O_1B} = 0$.

11. **Câu 11 — Chọn `d`:**
    - **Kiểm toán:** Gán dấu đại số chuẩn theo $+\vec{k}$ (CCW): $\bar{\omega}_1 = +23\text{ rad/s}$, $\bar{\omega}_3 = -5\text{ rad/s}$ (do quay CW). Hệ thức Willis từ $1$ sang $3$ qua $2$ (1 ăn khớp ngoài, 1 ăn khớp trong):
      $$\begin{aligned}
      \frac{23 - \bar{\omega}_C}{-5 - \bar{\omega}_C} &= \left(-\frac{24}{24}\right)\left(+\frac{72}{24}\right) = -3 \\
      \implies 23 - \bar{\omega}_C &= 15 + 3\bar{\omega}_C \implies \bar{\omega}_C = +2{,}0\text{ rad/s}
      \end{aligned}$$
      Thế vào cặp ngoài $1\text{–}2$: $\frac{23 - 2}{\bar{\omega}_2 - 2} = -1 \implies \bar{\omega}_2 = -19{,}0\text{ rad/s}$.
    - **Giải phẫu nhiễu:** `a` quên gắn dấu âm cho vành $3$ quay CW (thay $+5$ thay vì $-5$); `b` quên cộng trả lại $+\bar{\omega}_C = +2$ khi suy từ vận tốc góc tương đối $\bar{\omega}_{2/C} = -21$ sang tuyệt đối $\bar{\omega}_2$; `e` nhầm dấu tỉ số truyền thành $+3$ thay vì $-3$; `c` là nhiễu.

12. **Câu 12 — Chọn `c`:**
    - **Kiểm toán:** Trong hệ gắn với cần $C$, bánh $1$ quay với $\bar{\omega}_{1/C} = 0 - 6 = -6\text{ rad/s}$; tỉ số bán kính $\frac{r_1}{r_2} = 2$ cho $\vec{\omega}_{2/C} = 12\vec{i}\text{ rad/s}$. Hợp hai trục vuông góc cắt nhau: $\vec{\omega}_2 = 6\vec{k} + 12\vec{i} \implies \omega_2 = \sqrt{36 + 144} = 6\sqrt{5}\text{ rad/s}$. Đạo hàm hướng của trục quay riêng theo công thức Poisson sinh gia tốc góc tiến động $\vec{\varepsilon}_2 = \vec{\omega}_C \times \vec{\omega}_{2/C} = (6\vec{k})\times(12\vec{i}) = 72\vec{j}\text{ rad/s}^2 \implies \varepsilon_2 = 72\text{ rad/s}^2$.
    - **Giải phẫu nhiễu:** `a` cộng đại số $6 + 12 = 18$ như hai trục song song và ngộ nhận quay đều thì $\varepsilon_2 = 0$; `b` tính đúng môđun $\omega_2$ nhưng bỏ quên đạo hàm của vectơ đơn vị trục động $\frac{d\vec{i}}{dt} = \vec{\omega}_C\times\vec{i}$; `d` bỏ quên $\vec{\omega}_C$ khi tính $\omega_2$; `e` là nhiễu.

</details>

---

### 5.3. Bảng Phán Quyết Năng Lực Trung Thực Chặng 1 &amp; Ánh Xạ Khắc Phục Lỗ Hổng

Đối chiếu tổng số câu đúng thực tế (làm độc lập trong $\le 35$ phút, không mở tài liệu) với bảng phán quyết dưới đây:

| Mức điểm thực tế | Đánh giá năng lực nền tảng thực chất | Phán quyết chuyển chặng &amp; Yêu cầu bắt buộc |
| :---: | :--- | :--- |
| **`0 – 5 / 12`** | **Hổng nền vectơ và động học song phẳng nghiêm trọng:** Chưa phân biệt được hệ trục thuận khi đảo chiều, sai công thức đạo hàm vectơ quay hoặc đồng nhất $\vec{v}_I = \vec{0}$ với $\vec{a}_I = \vec{0}$. | **CẤM chuyển sang Chặng 2.** Nếu đi tiếp sẽ sai dây chuyền toàn bộ lực quán tính D'Alembert, động năng và vận tốc suy rộng Lagrange II. Bắt buộc học và giải lại từ đầu **Ngày 1 – Ngày 2**. |
| **`6 – 7 / 12`** | **Thuộc công thức rời rạc nhưng sai dấu &amp; biện luận phương:** Nắm được biểu thức đại cương nhưng mất điểm ở câu quay chậm dần, bỏ sót $\vec{a}_{BA}^n$, $\vec{a}_r^n$ hoặc đảo chiều $\vec{a}_c$. | **Chưa đạt chuẩn qua cổng.** Bắt buộc làm lại trọn vẹn **Ngày 3 – Ngày 4** và tự giải tay tối thiểu `6` bài trong SBT Đỗ Sanh theo bảng ánh xạ lỗi bên dưới trước khi kiểm tra lại. |
| **`8 – 9 / 12`** | **Đạt ngưỡng tối thiểu nhưng còn chậm hoặc yếu cục bộ 1 mảng:** Xử lý được bài cơ bản nhưng còn mắc bẫy ở câu lăn trên cung tròn, bài toán ngược culit hoặc bánh răng nón. | **Cho phép chuyển sang Chặng 2 có điều kiện:** Dành `60–90` phút rà soát dứt điểm đúng nhóm lỗi vừa sai theo bảng ánh xạ dưới đây trước khi học Ngày 6. |
| **`10 – 12 / 12`**<br>*(trong $\le 35$ phút)* | **Đạt chuẩn kỹ thuật vững chắc:** Kiểm soát tốt dấu đại số $(\vec{i}, \vec{j}, \vec{k})$, tách ẩn hình chiếu chính xác và miễn nhiễm với bẫy phương án `Các đáp án còn lại đều sai`. | **Đủ năng lực chuyển thẳng sang [Chặng 2: Chương 11–13 (Khối tâm, Mômen quán tính &amp; D'Alembert)](/on-thi/chang-2-dong-hoc).** |

#### Bảng Ánh Xạ Lỗi Gốc → Nguyên Nhân Kỹ Thuật → Bài Tập Khắc Phục Cụ Thể Trong SBT Đỗ Sanh

| Câu sai trong Cổng Kiểm Định | Lỗi gốc &amp; Nguyên nhân toán – cơ học | Tài liệu &amp; Bài tập khắc phục đích danh (SBT Đỗ Sanh) |
| :--- | :--- | :--- |
| **Câu 1, Câu 2** | Không kiểm tra $\vec{i}\times\vec{j}$ khi trục tọa độ đảo chiều; nhầm liên kết thanh hai đầu khớp với gối tựa pháp tuyến hoặc sót trọng lực dầm. | Ôn mục `1.1`, `1.4`; giải lại `Thí dụ 2-2`, `Thí dụ 2-3`, `Bài 2-1`, `Bài 2-5` tại [BT Tĩnh học Chương 2](/bai-tap/tinh-hoc/chuong-2#_2-3-bai-giai-mau) và [Đề 1721 Câu 3, 5](/on-thi/de-thi-that-hcmut#de-1721). |
| **Câu 3, Câu 4** | Ngộ nhận $\vec{a}_I = \vec{0}$ tại tâm vận tốc tức thời; bỏ quên gia tốc pháp tuyến $\vec{a}_C^n$ của tâm đĩa trên đường cong; gán sai dấu $\vec{\varepsilon}$ khi lăn chậm dần. | Ôn mục `2.3`, `2.4`; giải lại `Thí dụ 8-3`, `Bài 8-4`, `Bài 8-5`, `Bài 8-7`, `Bài 8-10` tại [BT Động học Chương 3 (Ch.8)](/bai-tap/dong-hoc/chuong-3#_8-3-bai-giai-mau). |
| **Câu 5, Câu 6, Câu 7** | Bỏ sót $\vec{a}_{BA}^n = -\omega_{AB}^2\overrightarrow{AB}$ khi $\omega_{AB} \neq 0$; ngộ nhận $\omega_{AB} = 0 \implies \vec{\varepsilon}_{AB} = \vec{0}$; tính sai kích thước hình học ẩn $2R/\sin\alpha$. | Ôn mục `3.2`; giải lại `Thí dụ 8-4`, `Bài 8-12`, `Bài 8-22`, `Bài 8-23` tại [BT Động học Chương 3 (Ch.8)](/bai-tap/dong-hoc/chuong-3#_8-4-bai-tap) và [Đề 1821 Câu 1–4](/on-thi/de-thi-that-hcmut#de-1821). |
| **Câu 8, Câu 9, Câu 10** | Bỏ sót $\vec{a}_r^n = v_r^2/\rho_r$ trên rãnh cong; chọn sai hệ động hoặc lấy độ lớn $v_r > 0$ làm đảo dấu $\vec{a}_c$ khi chiếu phương vuông góc rãnh culit. | Ôn mục `4.2`; giải lại `Thí dụ 10–3`, `Thí dụ 10–6`, `Bài 10–11`, `Bài 10–19`, `Bài 10–26` tại [BT Động học Chương 5 (Ch.10)](/bai-tap/dong-hoc/chuong-5#_10-3-bai-giai-mau). |
| **Câu 11, Câu 12** | Quên gắn dấu âm cho bánh quay ngược chiều dương trong Willis; quên cộng $+\bar{\omega}_C$ khi tìm $\bar{\omega}_2$; bỏ sót gia tốc góc tiến động $\vec{\omega}_C\times\vec{\omega}_{2/C}$ của bánh nón. | Ôn mục `5.1`; giải lại `Thí dụ 11-1`, `Thí dụ 11-2`, `Thí dụ 11-3`, `Bài 11-3`, `Bài 11-5`, `Bài 11-10` tại [BT Động học Chương 6 (Ch.11)](/bai-tap/dong-hoc/chuong-6#_11-3-bai-giai-mau). |

::: info Lộ trình tiếp nối sau khi vượt Cổng Kiểm Định Chặng 1 ($\ge 8/12$)
Chuyển sang [**Chặng 2 (Ngày 6 – Ngày 10): Chương 11–13 — Động Lực Học Cơ Sở, Đặc Trưng Hình Học Khối Lượng &amp; Nguyên Lý D'Alembert**](/on-thi/chang-2-dong-hoc), hoặc đối chiếu trực tiếp các câu Chương 9–10 trong [**Ngân Hàng Đề Thi Thật HCMUT AS1003**](/on-thi/de-thi-that-hcmut).
:::
