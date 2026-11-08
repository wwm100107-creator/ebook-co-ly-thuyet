# Chương 4: Chuyển Động Song Phẳng Của Vật Rắn

## 4.1. Định Nghĩa và Mô Hình

::: tip Định nghĩa
Chuyển động song phẳng của vật rắn là chuyển động trong đó mọi điểm của vật luôn luôn di chuyển trong các mặt phẳng song song với một mặt phẳng cố định cho trước (gọi là mặt phẳng chuẩn).
:::

Ví dụ: Bánh xe lăn trên đường ray thẳng, cơ cấu tay quay - thanh truyền, cơ cấu con lắc bốn khâu bản lề.

<div class="figure-container">
  <img src="/figures/dong-hoc/hinh_4_1.svg" alt="Hình 4-1: Mô hình chuyển động song phẳng của vật rắn" style="max-height: 280px;" />
  <div class="figure-caption">Hình 4-1: Tiết diện phẳng $S$ chuyển động trong mặt phẳng chuẩn $Oxy$</div>
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
  <div class="figure-caption">Hình 4-2: Hình chiếu vận tốc $\vec{v}_A$ và $\vec{v}_B$ lên đường nối $AB$</div>
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
  <div class="figure-caption">Hình 4-3: Phương pháp xác định tâm vận tốc tức thời P</div>
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
