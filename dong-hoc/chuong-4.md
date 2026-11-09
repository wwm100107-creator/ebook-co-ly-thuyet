# Chương 4: Chuyển Động Song Phẳng Của Vật Rắn

## 4.1. Định Nghĩa và Mô Hình

::: tip Định nghĩa
Chuyển động song phẳng của vật rắn là chuyển động trong đó mọi điểm của vật luôn luôn di chuyển trong các mặt phẳng song song với một mặt phẳng cố định cho trước (gọi là mặt phẳng chuẩn).
:::

Ví dụ: Bánh xe lăn trên đường ray thẳng, cơ cấu tay quay - thanh truyền, cơ cấu con lắc bốn khâu bản lề.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_1.svg" alt="Hình 4-1: Mô hình chuyển động song phẳng của vật rắn" style="max-height: 280px;" />

<div class="figure-caption">

Hình 4-1: Tiết diện phẳng $S$ chuyển động trong mặt phẳng chuẩn $Oxy$

</div>

</div>

### Mô Hình Tiết Diện Phẳng (Hình Phẳng)
Vì mọi điểm nằm trên cùng một đường thẳng vuông góc với mặt phẳng chuẩn đều có chuyển động hoàn toàn giống nhau (cùng quỹ đạo, cùng vận tốc và cùng gia tốc), nên việc nghiên cứu chuyển động của vật rắn song phẳng được quy về việc **nghiên cứu chuyển động của một tiết diện phẳng (hình phẳng $S$)** trong mặt phẳng của nó.

---

## 4.2. Phương Trình Chuyển Động Của Hình Phẳng

Chọn hệ trục tọa độ cố định $Oxy$ trên mặt phẳng chuẩn. Chọn một điểm $A$ tùy ý thuộc hình phẳng làm **điểm cực**.

Gắn vào hình phẳng một hệ trục tọa độ động $Ax'y'$ có gốc tại cực $A$. Vị trí của hình phẳng tại thời điểm $t$ được xác định bởi:
- Tọa độ $(x_A, y_A)$ của điểm cực $A$.
- Góc quay $\phi$ tạo bởi trục di động $Ax'$ với trục cố định $Ox$.

Phương trình chuyển động của hình phẳng gồm 3 phương trình độc lập:

$$\begin{cases} x_A = x_A(t) \\ y_A = y_A(t) \\ \phi = \phi(t) \end{cases} \tag{4-1}$$

::: tip Tính chất độc lập của góc quay
Góc quay $\phi$, vận tốc góc $\omega = \dot{\phi}$ và gia tốc góc $\varepsilon = \ddot{\phi}$ của hình phẳng là những đại lượng đặc trưng chung cho toàn bộ hình phẳng, **hoàn toàn không phụ thuộc vào việc chọn điểm cực $A$**.
:::

---

## 4.3. Phân Bố Vận Tốc Các Điểm Thuộc Hình Phẳng

### 4.3.1. Định Lý Dời Cực (Công Thức Vận Tốc)

Xét hai điểm bất kỳ $A$ và $B$ thuộc hình phẳng. Chọn $A$ làm cực:

::: tip Định lý
Vận tốc của điểm $B$ bằng tổng hình học của vận tốc điểm cực $A$ và vận tốc của điểm $B$ trong chuyển động quay tương đối quanh cực $A$:

$$\vec{v}_B = \vec{v}_A + \vec{v}_{BA} = \vec{v}_A + (\vec{\omega} \times \vec{AB}) \tag{4-2}$$
:::

Trong đó thành phần vận tốc quay $\vec{v}_{BA}$:
- **Phương:** Vuông góc với đoạn thẳng $AB$ ($\vec{v}_{BA} \perp AB$).
- **Chiều:** Hướng theo chiều quay của vận tốc góc $\vec{\omega}$.
- **Độ lớn:**
  $$v_{BA} = \omega \cdot AB \tag{4-3}$$

---

### 4.3.2. Định Lý Hình Chiếu Vận Tốc

Chiếu hệ thức véctơ $(4-2)$ lên đường thẳng nối hai điểm $AB$:

$$\text{hch}_{AB}(\vec{v}_B) = \text{hch}_{AB}(\vec{v}_A) + \text{hch}_{AB}(\vec{v}_{BA})$$

Vì $\vec{v}_{BA} \perp AB$ nên $\text{hch}_{AB}(\vec{v}_{BA}) = 0$. Ta suy ra:

::: tip Định lý hình chiếu vận tốc
Hình chiếu của véctơ vận tốc của hai điểm bất kỳ thuộc vật rắn chuyển động song phẳng lên đường thẳng nối hai điểm ấy luôn luôn bằng nhau:

$$\text{hch}_{AB}(\vec{v}_A) = \text{hch}_{AB}(\vec{v}_B) \implies v_A \cos \alpha = v_B \cos \beta \tag{4-4}$$

trong đó $\alpha, \beta$ lần lượt là góc tạo bởi $\vec{v}_A$ và $\vec{v}_B$ với đường thẳng $AB$.
:::

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_2.svg" alt="Hình 4-2: Định lý hình chiếu vận tốc" style="max-height: 240px;" />

<div class="figure-caption">

Hình 4-2: Hình chiếu vận tốc $\vec{v}_A$ và $\vec{v}_B$ lên đường nối $AB$

</div>

</div>

---

### 4.3.3. Tâm Vận Tốc Tức Thời (Tâm Quay Tức Thời)

::: tip Định nghĩa
Tâm vận tốc tức thời (kí hiệu $P$) là điểm thuộc hình phẳng (hoặc thuộc mặt phẳng gắn liền với hình phẳng) có vận tốc tức thời bằng không tại thời điểm đang xét:

$$\vec{v}_P = \vec{0} \tag{4-5}$$
:::

Nếu chọn tâm quay tức thời $P$ làm cực trong công thức $(4-2)$, vận tốc của một điểm $M$ bất kỳ được tính rất đơn giản:

$$\vec{v}_M = \vec{v}_P + (\vec{\omega} \times \vec{PM}) = \vec{\omega} \times \vec{PM} \tag{4-6}$$

- **Phương:** Vuông góc với bán kính cực $PM$ ($\vec{v}_M \perp PM$).
- **Chiều:** Theo chiều quay của vận tốc góc $\vec{\omega}$.
- **Độ lớn:**
  $$v_M = \omega \cdot PM \tag{4-7}$$

Từ đó suy ra tỉ số:

$$\frac{v_A}{PA} = \frac{v_B}{PB} = \frac{v_M}{PM} = \omega \tag{4-8}$$

> **Quy tắc:** Vận tốc của các điểm thuộc hình phẳng tỉ lệ thuận với khoảng cách từ các điểm đó đến tâm vận tốc tức thời $P$.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_4_3.svg" alt="Hình 4-3: Các phương pháp xác định tâm vận tốc tức thời P" style="max-height: 280px;" />

<div class="figure-caption">

Hình 4-3: Phương pháp xác định tâm vận tốc tức thời P

</div>

</div>

#### Các Trường Hợp Xác Định Tâm Vận Tốc Tức Thời Thường Gặp:
1. **Biết phương vận tốc của hai điểm $A$ và $B$ không song song:** $P$ là giao điểm của hai đường thẳng vuông góc với $\vec{v}_A$ tại $A$ và vuông góc với $\vec{v}_B$ tại $B$.
2. **Biết hai vận tốc $\vec{v}_A, \vec{v}_B$ song song và vuông góc với đoạn $AB$:**
   - Nếu $\vec{v}_A, \vec{v}_B$ ngược chiều: $P$ nằm trong đoạn $AB$, chia trong theo tỉ lệ: $\frac{PA}{PB} = \frac{v_A}{v_B}$.
   - Nếu $\vec{v}_A, \vec{v}_B$ cùng chiều ($v_A \neq v_B$): $P$ nằm ngoài đoạn $AB$, chia ngoài theo tỉ lệ: $\frac{PA}{PB} = \frac{v_A}{v_B}$.
3. **Bánh xe lăn không trượt trên bề mặt cố định:** Điểm tiếp xúc $P$ giữa bánh xe và mặt đường chính là tâm vận tốc tức thời ($v_P = 0$).
4. **Trường hợp $\vec{v}_A = \vec{v}_B$:** Tâm $P$ ở vô cực, vật ở trạng thái **tịnh tiến tức thời** ($\omega = 0$).

---

## 4.4. Phân Bố Gia Tốc Các Điểm Thuộc Hình Phẳng

Lấy đạo hàm công thức vận tốc $\vec{v}_B = \vec{v}_A + \vec{v}_{BA}$ theo thời gian:

::: tip Định lý gia tốc
Gia tốc của điểm $B$ bằng tổng hình học của gia tốc cực $A$ và gia tốc của điểm $B$ trong chuyển động quay quanh $A$:

$$\vec{a}_B = \vec{a}_A + \vec{a}_{BA} = \vec{a}_A + \vec{a}_{BA}^t + \vec{a}_{BA}^n \tag{4-9}$$
:::

Trong đó:
- **Gia tốc tiếp $\vec{a}_{BA}^t$:**
  $$\vec{a}_{BA}^t = \vec{\varepsilon} \times \vec{AB}; \quad a_{BA}^t = \varepsilon \cdot AB \tag{4-10}$$
  Phương vuông góc với $AB$, chiều theo chiều gia tốc góc $\vec{\varepsilon}$.

- **Gia tốc pháp $\vec{a}_{BA}^n$:**
  $$\vec{a}_{BA}^n = \vec{\omega} \times (\vec{\omega} \times \vec{AB}); \quad a_{BA}^n = \omega^2 \cdot AB \tag{4-11}$$
  Phương dọc theo $AB$, chiều luôn hướng từ $B$ về cực $A$.

Độ lớn của gia tốc tương đối quanh cực:

$$a_{BA} = \sqrt{(a_{BA}^t)^2 + (a_{BA}^n)^2} = AB \sqrt{\varepsilon^2 + \omega^4} \tag{4-12}$$

### Tâm Gia Tốc Tức Thời (Điểm $Q$)
Tại mỗi thời điểm (khi $\varepsilon^2 + \omega^4 \neq 0$), luôn tồn tại một điểm duy nhất $Q$ thuộc hình phẳng có gia tốc tức thời bằng không:

$$\vec{a}_Q = \vec{0} \tag{4-13}$$

Khi chọn $Q$ làm cực: $\vec{a}_M = \vec{a}_{MQ}$, gia tốc các điểm tỉ lệ với khoảng cách tới tâm gia tốc tức thời:

$$\frac{a_A}{QA} = \frac{a_B}{QB} = \sqrt{\varepsilon^2 + \omega^4}$$


---

## 4.4. Tổng Hợp Chuyển Động Song Phẳng

Chuyển động song phẳng có thể xem là tổng hợp của hai chuyển động quay quanh hai trục song song hoặc chuyển động quay kết hợp với chuyển động tịnh tiến:
- **Định lý về tổng hợp hai chuyển động quay quanh hai trục song song:**
  - Nếu hai chuyển động quay cùng chiều: chuyển động tổng hợp là chuyển động quay quanh một trục song song với vận tốc góc $\omega = \omega_1 + \omega_2$.
  - Nếu hai chuyển động quay ngược chiều và có độ lớn bằng nhau ($\omega_1 = -\omega_2$): chuyển động tổng hợp là chuyển động tịnh tiến tức thời (ngẫu tốc độ góc).
- **Phương pháp Willis trong cơ cấu bánh răng vi sai:**
  Cho toàn bộ cơ cấu một chuyển động quay phụ quanh trục với vận tốc góc $-\omega_0$ của cần (tay quay), đưa cơ cấu vi sai về hệ bánh răng thường có trục cố định:
  $$\frac{\omega_1 - \omega_0}{\omega_2 - \omega_0} = (-1)^k \frac{z_2}{z_1}$$

---

## 4.5. Các Thí Dụ Áp Dụng (Bài Tập Mẫu)

::: tip Ý NGHĨA PHƯƠNG PHÁP
Các bài toán chuyển động song phẳng là trọng tâm của phần Động học kỹ thuật. Có ba phương pháp chính giải bài toán vận tốc và gia tốc:
1. **Phương pháp tâm vận tốc tức thời $P$:** Rất nhanh chóng để tìm vận tốc và vận tốc góc của các khâu.
2. **Phương pháp hình học vectơ (chọn điểm cực):** Sử dụng quan hệ $\vec{v}_B = \vec{v}_A + \vec{v}_{BA}$ và $\vec{a}_B = \vec{a}_A + \vec{a}_{BA}^t + \vec{a}_{BA}^n$.
3. **Phương pháp giải tích tọa độ suy rộng:** Thích hợp cho lập trình tính toán tự động các cơ cấu phẳng nhiều khâu.
:::

### Thí dụ 4-1: Phân bố vận tốc của bánh xe lăn không trượt

**Đề bài:**
Một bánh xe tròn bán kính $R$ lăn không trượt trên đường ray phẳng nằm ngang. Tâm $C$ của bánh xe chuyển động với vận tốc không đổi $v_C$.
1. Xác định tâm vận tốc tức thời $P$ và vận tốc góc $\omega$ của bánh xe.
2. Xác định độ lớn và phương chiều vận tốc của điểm cao nhất $A$ và điểm $M$ bất kỳ trên vành bánh xe.

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_4_10.svg" alt="Hình 4-10: Phân bố vận tốc của bánh xe lăn không trượt" style="max-width: 580px;" />
  <div class="figure-caption">

Hình 4-10: Xác định tâm vận tốc tức thời $P$ và vận tốc các điểm trên vành bánh xe lăn không trượt

</div>
</div>

**Bài giải:**

**1. Xác định tâm vận tốc tức thời $P$:**
Vì bánh xe lăn không trượt trên mặt đường cố định, điểm tiếp xúc $P$ giữa bánh xe và mặt đường tại mỗi thời điểm có vận tốc triệt tiêu:
$$v_P = 0$$
Do đó điểm tiếp xúc $P$ chính là tâm vận tốc tức thời của bánh xe (Hình 4-10).

Vận tốc của tâm $C$:
$$v_C = \omega \cdot PC = \omega \cdot R \implies \omega = \frac{v_C}{R}$$

**2. Vận tốc của điểm cao nhất $A$:**
Điểm $A$ đối xứng với $P$ qua tâm $C$, do đó khoảng cách từ $A$ đến tâm $P$ là đường kính bánh xe: $PA = 2R$.
Vận tốc điểm $A$:
$$v_A = \omega \cdot PA = \frac{v_C}{R} \cdot (2R) = 2 v_C$$
Phương của $\vec{v}_A$ vuông góc với đường kính $PA$, tức là nằm ngang song song với mặt đường và cùng chiều với $v_C$.

**3. Vận tốc của điểm $M$ bất kỳ trên vành:**
Gọi $\theta = \widehat{PCM}$ là góc ở tâm chắn cung $PM$. Khoảng cách từ $P$ đến $M$ theo định lý cosin trong tam giác cân $PCM$ (với $PC = CM = R$):
$$PM = 2R \sin\frac{\theta}{2}$$
Vận tốc của điểm $M$:
$$v_M = \omega \cdot PM = \frac{v_C}{R} \cdot \left(2R \sin\frac{\theta}{2}\right) = 2 v_C \sin\frac{\theta}{2}$$
Vectơ $\vec{v}_M$ có phương vuông góc với đoạn thẳng nối $PM$ và hướng theo chiều quay của bánh xe.

---

### Thí dụ 4-2: Xác định tâm gia tốc tức thời $Q$ của bánh xe lăn

**Đề bài:**
Tại một thời điểm, tâm $O$ của một bánh xe tròn bán kính $R = 0{,}5\,\text{m}$ lăn không trượt trên ray thẳng có vận tốc $v_O = 1\,\text{m/s}$ và gia tốc $a_O = 1{,}5\,\text{m/s}^2$.
Hãy xác định vị trí của tâm gia tốc tức thời $Q$ của bánh xe tại thời điểm đó.

**Bài giải:**

Vì bánh xe lăn không trượt trên đường ray thẳng nằm ngang:
- Vận tốc góc: $\omega = \frac{v_O}{R} = \frac{1}{0{,}5} = 2\,\text{rad/s} \implies \omega^2 = 4\,\text{s}^{-2}$.
- Gia tốc góc: $\varepsilon = \frac{a_O}{R} = \frac{1{,}5}{0{,}5} = 3\,\text{rad/s}^2$.

Lấy tâm bánh xe $O$ làm điểm cực, theo định lý liên hệ gia tốc với tâm gia tốc tức thời $Q$ (nơi $\vec{a}_Q = \vec{0}$):
$$\vec{a}_O = \vec{a}_{OQ} = \vec{a}_{OQ}^t + \vec{a}_{OQ}^n$$
Độ lớn gia tốc điểm cực $O$:
$$a_O = OQ \sqrt{\varepsilon^2 + \omega^4}$$
Suy ra khoảng cách từ tâm $O$ đến tâm gia tốc tức thời $Q$:
$$OQ = \frac{a_O}{\sqrt{\varepsilon^2 + \omega^4}} = \frac{1{,}5}{\sqrt{3^2 + 4^2}} = \frac{1{,}5}{5} = 0{,}3\,\text{m}$$

Góc lệch $\alpha$ giữa đoạn $OQ$ và vectơ gia tốc $\vec{a}_O$:
$$\tan\alpha = \frac{\varepsilon}{\omega^2} = \frac{3}{4} = 0{,}75 \implies \alpha \approx 36^\circ 52'$$
Vị trí của điểm $Q$ được xác định bằng cách quay vectơ $\vec{a}_O$ quanh tâm $O$ một góc $\alpha$ theo chiều quay của gia tốc góc $\varepsilon$.
Do $OQ = 0{,}3\,\text{m} < R = 0{,}5\,\text{m}$, tâm gia tốc tức thời $Q$ nằm bên trong đĩa bánh xe.

---

### Thí dụ 4-3: Cơ cấu tay quay - con trượt (Khảo sát bài toán vận tốc)

**Đề bài:**
Cho cơ cấu tay quay - con trượt $OAB$ như Hình 4-17. Tay quay $OA = 0{,}2\,\text{m}$ quay đều quanh trục cố định $O$ với vận tốc góc $\omega = 10\,\text{rad/s}$. Thanh truyền $AB$ có chiều dài $l = 0{,}4\,\text{m}$.
Tại thời điểm góc quay của tay quay $\varphi = 60^\circ$ và thanh truyền hợp với phương trượt nằm ngang một góc $\psi = 30^\circ$:
1. Xác định tâm vận tốc tức thời $P$ của thanh truyền $AB$.
2. Tìm vận tốc góc $\omega_{AB}$ của thanh truyền $AB$ và vận tốc $v_B$ của con trượt $B$.

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_4_17.svg" alt="Hình 4-17: Cơ cấu tay quay con trượt OAB" style="max-width: 620px;" />
  <div class="figure-caption">

Hình 4-17: Sơ đồ động học cơ cấu tay quay con trượt: xác định tâm vận tốc tức thời $P$ của thanh truyền $AB$

</div>
</div>

**Bài giải:**

**1. Vận tốc của đầu tay quay $A$:**
Điểm $A$ chuyển động tròn quanh $O$:
$$v_A = OA \cdot \omega = 0{,}2 \cdot 10 = 2\,\text{m/s}$$
Phương của $\vec{v}_A$ vuông góc với tay quay $OA$.

**2. Xác định tâm vận tốc tức thời $P$ của thanh $AB$:**
- Con trượt $B$ chuyển động tịnh tiến dọc theo trục ngang $Ox$, do đó vectơ vận tốc $\vec{v}_B$ nằm ngang. Đường vuông góc với $\vec{v}_B$ tại $B$ là đường thẳng đứng qua $B$.
- Điểm $A$ có $\vec{v}_A \perp OA$, do đó đường vuông góc với $\vec{v}_A$ tại $A$ chính là đường kéo dài của tay quay $OA$.
- Giao điểm của đường kéo dài $OA$ và đường thẳng đứng qua $B$ là tâm vận tốc tức thời $P$ của thanh truyền $AB$ (Hình 4-17).

Trong tam giác $PAB$:
- Góc $\widehat{PAB} = 180^\circ - (90^\circ - 60^\circ) - 30^\circ = 180^\circ - 30^\circ - 30^\circ = 120^\circ$.
- Góc $\widehat{PBA} = 90^\circ - 30^\circ = 60^\circ$.
- Góc $\widehat{APB} = 180^\circ - 120^\circ - 60^\circ = 0^\circ$ (hai đường song song hoặc xét tam giác vuông tương ứng).

Tính trực tiếp qua hình chiếu vận tốc:
Chiếu vận tốc của $A$ và $B$ lên phương thanh truyền $AB$:
$$v_A \cos(\widehat{\vec{v}_A, \vec{AB}}) = v_B \cos\psi$$
Với $\widehat{\vec{v}_A, \vec{AB}} = 90^\circ - (\varphi + \psi) = 90^\circ - (60^\circ + 30^\circ) = 0^\circ$.
Do đó:
$$v_A \cos 0^\circ = v_B \cos 30^\circ \implies v_B = \frac{v_A}{\cos 30^\circ} = \frac{2}{\sqrt{3}/2} = \frac{4}{\sqrt{3}} \approx 2{,}31\,\text{m/s}$$

Vận tốc góc của thanh truyền $AB$:
$$\omega_{AB} = \frac{v_A \sin(\varphi + \psi)}{AB \cos\psi} = \frac{2 \cdot \sin 90^\circ}{0{,}4 \cdot \cos 30^\circ} = \frac{2}{0{,}4 \cdot \frac{\sqrt{3}}{2}} = \frac{10}{\sqrt{3}} \approx 5{,}77\,\text{rad/s}$$

---

### Thí dụ 4-4: Khảo sát gia tốc của cơ cấu tay quay con trượt

**Đề bài:**
Tiếp tục bài toán Thí dụ 4-3, giả thiết thêm rằng tay quay $OA$ quay đều ($\varepsilon_{OA} = 0$).
Hãy xác định gia tốc góc $\varepsilon_{AB}$ của thanh truyền $AB$ và gia tốc $a_B$ của con trượt $B$.

**Bài giải:**

Lấy điểm $A$ làm điểm cực, theo định lý quan hệ gia tốc:
$$\vec{a}_B = \vec{a}_A + \vec{a}_{BA}^n + \vec{a}_{BA}^t$$

Phân tích từng vectơ gia tốc:
- **Gia tốc của điểm cực $A$:** Vì tay quay $OA$ quay đều ($\omega = \text{const}$) nên $a_A^t = 0$.
  $$a_A = a_A^n = OA \cdot \omega^2 = 0{,}2 \cdot 10^2 = 20\,\text{m/s}^2$$
  Phương dọc theo $OA$, hướng từ $A$ về $O$.
- **Gia tốc pháp của $B$ đối với $A$:**
  $$a_{BA}^n = AB \cdot \omega_{AB}^2 = 0{,}4 \cdot \left(\frac{10}{\sqrt{3}}\right)^2 = \frac{40}{3} \approx 13{,}33\,\text{m/s}^2$$
  Phương dọc theo thanh $AB$, hướng từ $B$ về $A$.
- **Gia tốc tiếp của $B$ đối với $A$:**
  $$a_{BA}^t = AB \cdot \varepsilon_{AB} = 0{,}4 \cdot \varepsilon_{AB}$$
  Phương vuông góc với thanh $AB$.
- **Gia tốc của con trượt $B$:** Vì con trượt $B$ chuyển động dọc theo rãnh ngang nên vectơ $\vec{a}_B$ có phương nằm ngang.

Chiếu phương trình vectơ lên trục thẳng đứng vuông góc với phương trượt (trục $Oy$ hướng lên):
$$0 = a_{Ay} + (a_{BA}^n)_y + (a_{BA}^t)_y$$
$$-a_A \sin 60^\circ + a_{BA}^n \sin 30^\circ + a_{BA}^t \cos 30^\circ = 0$$
$$\implies a_{BA}^t = \frac{a_A \sin 60^\circ - a_{BA}^n \sin 30^\circ}{\cos 30^\circ} = \frac{20 \cdot \frac{\sqrt{3}}{2} - \frac{40}{3} \cdot 0{,}5}{\frac{\sqrt{3}}{2}} = 20 - \frac{40}{3\sqrt{3}} \approx 12{,}3\,\text{m/s}^2$$

Gia tốc góc của thanh truyền:
$$\varepsilon_{AB} = \frac{a_{BA}^t}{AB} = \frac{12{,}3}{0{,}4} \approx 30{,}75\,\text{rad/s}^2$$

Chiếu phương trình vectơ lên phương ngang (trục $Ox$) để tìm gia tốc con trượt $B$:
$$a_B = -a_A \cos 60^\circ - a_{BA}^n \cos 30^\circ + a_{BA}^t \sin 30^\circ$$
$$a_B = -20 \cdot 0{,}5 - \frac{40}{3} \cdot \frac{\sqrt{3}}{2} + 12{,}3 \cdot 0{,}5 \approx -10 - 11{,}55 + 6{,}15 = -15{,}4\,\text{m/s}^2$$
Dấu âm chỉ ra rằng con trượt $B$ đang chuyển động chậm dần (gia tốc hướng ngược chiều chuyển động).

---

### Thí dụ 4-5: Hệ bánh răng vi sai hành tinh (Phương pháp Willis)

**Đề bài:**
Cho hệ bánh răng vi sai như Hình 4-21. Bánh răng mặt trời 1 quay quanh trục cố định $O$ với vận tốc góc $\omega_1$ và gia tốc góc $\varepsilon_1$. Cần (tay quay) $OA$ quay độc lập quanh $O$ với vận tốc góc $\omega_0$ và gia tốc góc $\varepsilon_0$.
Bánh răng hành tinh 2 có bán kính $r_2$ ăn khớp ngoài với bánh 1 (bán kính $r_1$) và quay tự do quanh chốt $A$ ở đầu cần $OA$.
1. Tìm vận tốc góc $\omega_2$ và gia tốc góc $\varepsilon_2$ của bánh răng 2.
2. Tìm vận tốc và gia tốc của điểm $M$ trên vành bánh xe 2 sao cho bán kính $AM \perp OA$.

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_4_21.svg" alt="Hình 4-21: Hệ bánh răng vi sai hành tinh" style="max-width: 600px;" />
  <div class="figure-caption">

Hình 4-21: Cơ cấu vi sai bánh răng hành tinh: bánh 1, cần OA và bánh hành tinh 2

</div>
</div>

**Bài giải:**

**1. Vận tốc góc theo công thức Willis:**
Chọn hệ quy chiếu động gắn với cần $OA$ quay với vận tốc góc $\omega_0$.
Trong hệ quy chiếu này, cần $OA$ đứng yên và hệ trở thành cặp bánh răng có trục cố định $O$ và $A$:
- Vận tốc góc tương đối của bánh 1: $\omega_{1r} = \omega_1 - \omega_0$.
- Vận tốc góc tương đối của bánh 2: $\omega_{2r} = \omega_2 - \omega_0$.

Vì hai bánh ăn khớp ngoài, chiều quay tương đối ngược nhau:
$$\frac{\omega_{2r}}{\omega_{1r}} = -\frac{r_1}{r_2} \implies \frac{\omega_2 - \omega_0}{\omega_1 - \omega_0} = -\frac{r_1}{r_2}$$
Rút ra vận tốc góc tuyệt đối của bánh hành tinh 2:
$$\omega_2 = \omega_0 - \frac{r_1}{r_2}(\omega_1 - \omega_0) = \left(1 + \frac{r_1}{r_2}\right)\omega_0 - \frac{r_1}{r_2}\omega_1$$

Lấy đạo hàm biểu thức theo thời gian để tìm gia tốc góc của bánh 2:
$$\varepsilon_2 = \frac{d\omega_2}{dt} = \left(1 + \frac{r_1}{r_2}\right)\varepsilon_0 - \frac{r_1}{r_2}\varepsilon_1$$

**2. Vận tốc và gia tốc của điểm $M$:**
- Vận tốc của tâm trục $A$ (thuộc cần $OA$ dài $r_1 + r_2$):
  $$v_A = OA \cdot \omega_0 = (r_1 + r_2) \omega_0$$
  Phương vuông góc với $OA$.
- Vận tốc của $M$ đối với tâm $A$:
  $$v_{MA} = r_2 \cdot |\omega_2|$$
  Phương vuông góc với $AM$, tức là song song với $OA$.

Vì $\vec{v}_A \perp \vec{v}_{MA}$ nên độ lớn vận tốc toàn phần của điểm $M$:
$$v_M = \sqrt{v_A^2 + v_{MA}^2} = \sqrt{(r_1 + r_2)^2 \omega_0^2 + r_2^2 \omega_2^2}$$

- Gia tốc của điểm $M$:
  Lấy $A$ làm điểm cực: $\vec{a}_M = \vec{a}_A + \vec{a}_{MA}^n + \vec{a}_{MA}^t$.
  Với:
  - $a_A^n = (r_1 + r_2)\omega_0^2, \quad a_A^t = (r_1 + r_2)\varepsilon_0$.
  - $a_{MA}^n = r_2 \omega_2^2, \quad a_{MA}^t = r_2 \varepsilon_2$.
  Chiếu lên hai trục tọa độ vuông góc $Ox$ (dọc $OA$) và $Oy$ (vuông góc $OA$), ta tính được độ lớn gia tốc toàn phần $a_M$.

---

### Thí dụ 4-6: Giải tích cơ cấu bốn khâu phẳng kín bằng phương trình vectơ bao đóng

**Đề bài:**
Cho cơ cấu bốn khâu bản lề phẳng $O_1ABO_2$ như Hình 4-24. Chiều dài các khâu lần lượt là $l_1 = O_1O_2$ (giá cố định), $l_2 = O_1A$ (khâu dẫn), $l_3 = AB$ (khâu truyền), $l_4 = O_2B$ (khâu bị dẫn). Khâu dẫn quay theo quy luật góc $\varphi_2(t)$. Điểm $K$ gắn liền với khâu 3 có tọa độ $(x_K', y_K')$ trong hệ tọa độ cục bộ của khâu 3.
Thiết lập hệ phương trình giải tích xác định các góc vị trí $\varphi_3, \varphi_4$, vận tốc góc $\omega_3, \omega_4$ và gia tốc góc $\varepsilon_3, \varepsilon_4$.

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_4_24.svg" alt="Hình 4-24: Cơ cấu bốn khâu bản lề kín O1ABO2" style="max-width: 620px;" />
  <div class="figure-caption">

Hình 4-24: Mô hình giải tích vectơ bao đóng của cơ cấu bốn khâu phẳng bản lề

</div>
</div>

**Bài giải:**

**1. Phương trình vectơ bao đóng:**
Chu trình động học kín của bốn khâu được mô tả bởi phương trình tổng vectơ:
$$\vec{l}_2 + \vec{l}_3 - \vec{l}_4 - \vec{l}_1 = \vec{0}$$

Chiếu phương trình vectơ lên hai trục tọa độ $Ox$ (dọc $O_1O_2$) và $Oy$ (vuông góc $O_1O_2$):
$$l_2 \cos\varphi_2 + l_3 \cos\varphi_3 - l_4 \cos\varphi_4 - l_1 = 0 \tag{a}$$
$$l_2 \sin\varphi_2 + l_3 \sin\varphi_3 - l_4 \sin\varphi_4 = 0 \tag{b}$$

Hệ hai phương trình siêu việt lượng giác (a) và (b) cho phép giải tìm hai góc vị trí $\varphi_3$ và $\varphi_4$ theo góc quay của khâu dẫn $\varphi_2$.

**2. Bài toán vận tốc góc:**
Lấy đạo hàm hai phương trình (a) và (b) theo thời gian $t$, lưu ý $\dot{\varphi}_i = \omega_i$:
$$-l_2 \omega_2 \sin\varphi_2 - l_3 \omega_3 \sin\varphi_3 + l_4 \omega_4 \sin\varphi_4 = 0$$
$$l_2 \omega_2 \cos\varphi_2 + l_3 \omega_3 \cos\varphi_3 - l_4 \omega_4 \cos\varphi_4 = 0$$

Viết dưới dạng hệ phương trình tuyến tính đối với $\omega_3$ và $\omega_4$:
$$\begin{pmatrix} -l_3 \sin\varphi_3 & l_4 \sin\varphi_4 \\ l_3 \cos\varphi_3 & -l_4 \cos\varphi_4 \end{pmatrix} \begin{pmatrix} \omega_3 \\ \omega_4 \end{pmatrix} = \begin{pmatrix} l_2 \omega_2 \sin\varphi_2 \\ -l_2 \omega_2 \cos\varphi_2 \end{pmatrix}$$

Định thức ma trận hệ số:
$$\Delta = l_3 l_4 (\sin\varphi_3 \cos\varphi_4 - \cos\varphi_3 \sin\varphi_4) = l_3 l_4 \sin(\varphi_3 - \varphi_4)$$
Khi cơ cấu không ở vị trí kỳ dị ($\sin(\varphi_3 - \varphi_4) \neq 0$), áp dụng định lý Cramer giải ra nghiệm duy nhất cho $\omega_3$ và $\omega_4$:
$$\omega_3 = \frac{l_2 \omega_2 \sin(\varphi_4 - \varphi_2)}{l_3 \sin(\varphi_3 - \varphi_4)}$$
$$\omega_4 = \frac{l_2 \omega_2 \sin(\varphi_3 - \varphi_2)}{l_4 \sin(\varphi_3 - \varphi_4)}$$

**3. Bài toán gia tốc góc:**
Lấy đạo hàm cấp hai hệ phương trình vị trí theo thời gian $t$, chú ý $\dot{\omega}_i = \varepsilon_i$:
$$-l_3 \varepsilon_3 \sin\varphi_3 + l_4 \varepsilon_4 \sin\varphi_4 = l_2 \varepsilon_2 \sin\varphi_2 + l_2 \omega_2^2 \cos\varphi_2 + l_3 \omega_3^2 \cos\varphi_3 - l_4 \omega_4^2 \cos\varphi_4$$
$$l_3 \varepsilon_3 \cos\varphi_3 - l_4 \varepsilon_4 \cos\varphi_4 = -l_2 \varepsilon_2 \cos\varphi_2 + l_2 \omega_2^2 \sin\varphi_2 + l_3 \omega_3^2 \sin\varphi_3 - l_4 \omega_4^2 \sin\varphi_4$$

Hệ phương trình này có cùng ma trận hệ số $\Delta = l_3 l_4 \sin(\varphi_3 - \varphi_4)$ với hệ phương trình vận tốc, do đó giải nghiệm hoàn toàn tương tự để nhận được gia tốc góc $\varepsilon_3$ và $\varepsilon_4$.
