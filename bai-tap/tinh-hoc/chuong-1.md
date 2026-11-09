---
title: "Bài Tập Tĩnh Học - Chương 1: Bài Toán Phẳng"
layout: doc
---

# Chương 1: Bài Toán Phẳng

> [!NOTE] Cơ sở lý thuyết liên quan
> Xem lý thuyết chi tiết về hệ tiên đề tĩnh học, mômen lực và điều kiện cân bằng tại: **[Giáo trình Lý thuyết: Chương 1 – Khái niệm & Hệ tiên đề Tĩnh học](/tinh-hoc/chuong-1)**.

Trước hết chúng ta xét các bài toán phẳng một vật: đó là các bài toán dẫn đến việc khảo sát cân bằng của một vật rắn chịu tác dụng của hệ lực phẳng.

---

## 1.1. CƠ SỞ LÝ THUYẾT

### 1.1.1. Lực hoạt động và phản lực liên kết
* **Lực hoạt động (Chủ lực):** Có quy luật xác định hoặc tập trung, hoặc phân bố. Lực phân bố xác định bởi biểu đồ và cường độ phân bố $q$ (đơn vị $\text{N/m}$ hay $\text{kN/m}$). Khi thu gọn:
  - Phân bố đều hình chữ nhật: hợp lực $Q = q \cdot l$, đặt tại trung điểm đoạn tải.
  - Phân bố tam giác: hợp lực $Q = \frac{1}{2} q \cdot l$, đặt tại vị trí cách đáy lớn một đoạn $\frac{1}{3} l$ (tức cách đỉnh tam giác $\frac{2}{3} l$).
  - Phân bố hình thang: chia thành hình chữ nhật và tam giác để thu gọn.
* **Phản lực liên kết:** Phản lực liên kết từ vật gây liên kết đặt vào vật khảo sát được biểu diễn dưới dạng lực và ngẫu lực tập trung.

#### Bảng 1-1: Đặc điểm các phản lực liên kết thường gặp trong mặt phẳng

| Loại liên kết | Cấu tạo & Cách biểu diễn | Đặc điểm phản lực liên kết |
| :--- | :--- | :--- |
| **Tựa (mặt tựa nhẵn)** | Mặt tiếp xúc trơn nhẵn | Thẳng góc với mặt tựa (mặt tiếp xúc), hướng vào vật khảo sát: phản lực pháp tuyến $\vec{N}$. |
| **Dây mềm** | Sợi dây mềm, không giãn, bỏ qua trọng lượng | Nằm dọc theo dây, hướng ra ngoài vật khảo sát (kéo căng dây): sức căng dây $\vec{T}$. |
| **Thanh nhẹ hai đầu bản lề** | Thanh thẳng hoặc cong, hai đầu có chốt bản lề, không chịu tải giữa thân | Nằm dọc theo đường nối hai đầu bản lề (hướng vào thanh khi nén, hướng ra ngoài khi kéo): ứng lực thanh $\vec{S}$. |
| **Bản lề trụ (chốt tròn)** | Trục chốt xuyên qua lỗ tròn | Phương chiều chưa biết, thường phân tích thành 2 thành phần vuông góc $\vec{X}_O, \vec{Y}_O$. |
| **Gối di động (con lăn)** | Bản lề đặt trên các con lăn | Vuông góc với mặt phẳng lăn: phản lực $\vec{N}$. |
| **Ngàm phẳng** | Đầu vật bị chôn chặt vào tường | Ngăn cản chuyển động tịnh tiến và quay: gồm hai thành phần lực $\vec{X}_A, \vec{Y}_A$ và một ngẫu lực mômen ngàm $m_A$. |

---

### 1.1.2. Phép chiếu lực và tính vectơ chính
Cho lực $\vec{F}$ nghiêng với trục $Ox$ góc nhọn $\alpha$. Hình chiếu của lực lên các trục:
$$F_x = \pm F\cos\alpha, \quad F_y = \pm F\sin\alpha$$
*(lấy dấu $+$ khi cùng chiều trục, dấu $-$ khi ngược chiều trục).*

Vectơ chính của hệ lực $\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n$:
$$\vec{R}' = \sum_{k=1}^n \vec{F}_k \implies R'_x = \sum_{k=1}^n F_{kx}, \quad R'_y = \sum_{k=1}^n F_{ky}$$
Trị số: $R' = \sqrt{{R'_x}^2 + {R'_y}^2}$.

---

### 1.1.3. Mômen của lực đối với một điểm trong mặt phẳng
Mômen của lực $\vec{F}$ đối với tâm $O$ bằng tích trị số lực với cánh tay đòn $d$ (khoảng cách vuông góc từ $O$ đến đường tác dụng của lực):
$$m_O(\vec{F}) = \pm F \cdot d$$
*Quy ước:* Lấy dấu $(+)$ nếu lực có xu hướng làm vật quay quanh $O$ ngược chiều kim đồng hồ; dấu $(-)$ nếu quay thuận chiều kim đồng hồ.
*Công thức giải tích (Định lý Varignon):*
$$m_O(\vec{F}) = x F_y - y F_x$$

---

### 1.1.4. Điều kiện cân bằng của hệ lực phẳng
Đối với hệ lực phẳng bất kỳ tác dụng lên một vật rắn, điều kiện cần và đủ để vật cân bằng là hệ 3 phương trình độc lập. Có 3 dạng tương đương:

* **Dạng 1 (Hai phương trình hình chiếu, một phương trình mômen):**
  $$\sum F_x = 0, \quad \sum F_y = 0, \quad \sum m_O(\vec{F}) = 0$$
* **Dạng 2 (Một phương trình hình chiếu, hai phương trình mômen):**
  $$\sum F_x = 0, \quad \sum m_A(\vec{F}) = 0, \quad \sum m_B(\vec{F}) = 0$$
  *(Điều kiện: Đường nối $AB$ không vuông góc với trục chiếu $Ox$).*
* **Dạng 3 (Ba phương trình mômen đối với 3 điểm không thẳng hàng):**
  $$\sum m_A(\vec{F}) = 0, \quad \sum m_B(\vec{F}) = 0, \quad \sum m_C(\vec{F}) = 0$$
  *(Điều kiện: Ba tâm lấy mômen $A, B, C$ không cùng nằm trên một đường thẳng).*

---

## 1.2. HƯỚNG DẪN ÁP DỤNG & QUY TRÌNH GIẢI

Để giải một bài toán cân bằng vật rắn phẳng, ta thực hiện nghiêm ngặt theo **3 bước chuẩn mực**:

1. **Bước 1: Chọn đối tượng & Giải phóng liên kết**
   - Xác định rõ vật rắn cần khảo sát cân bằng.
   - Thay thế các vật gây liên kết bằng các phản lực liên kết thích ứng theo đúng Bảng 1-1. Đặt tên và vẽ rõ chiều giả thiết của từng lực.
2. **Bước 2: Phân tích đặc điểm hệ lực & Chọn phương trình cân bằng tối ưu**
   - Đếm số ẩn số phản lực liên kết (thường là $\le 3$ ẩn đối với bài toán tĩnh định).
   - Chọn hệ trục tọa độ $Oxy$ sao cho càng nhiều lực trùng hoặc song song với trục chiếu càng tốt.
   - Chọn tâm lấy mômen tại giao điểm của nhiều lực chưa biết để triệt tiêu các lực ẩn số này ra khỏi phương trình mômen.
3. **Bước 3: Thiết lập, giải hệ phương trình & Biện luận kết quả**
   - Giải tìm các trị số ẩn.
   - Biện luận: Nếu trị số nhận được mang dấu dương $(+)$, chiều giả thiết là đúng; nếu mang dấu âm $(-)$, chiều thực tế ngược với chiều giả thiết trên hình vẽ.

---

## 1.3. BÀI GIẢI MẪU (WORKED EXAMPLES)

### Thí dụ 1-1: Cân bằng quả cầu tựa tường treo dây

**Đề bài:** Quả cầu đồng chất tâm $O$, trọng lượng $P$, tựa vào tường nhẵn thẳng đứng tại $C$ và được treo bởi sợi dây $AB$ dài bằng bán kính $R$ ($AB = R$). Điểm $A$ chốt cố định trên tường. Tìm sức căng của dây và phản lực của tường tác dụng lên quả cầu.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_1_6.svg" alt="Hình 1-6: Quả cầu tựa tường treo dây" style="max-width: 520px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 1-6: Sơ đồ giải phóng liên kết và tam giác lực của quả cầu

</div>

</div>

**Bài giải:**

**1. Khảo sát quả cầu tâm $O$:**
Các lực tác dụng lên quả cầu gồm:
- Trọng lực $\vec{P}$ đặt tại khối tâm $O$, hướng thẳng đứng xuống dưới.
- Phản lực pháp tuyến $\vec{N}$ của tường tại điểm tựa nhẵn $C$, vuông góc với tường (hướng theo phương ngang sang phải qua tâm $O$).
- Sức căng dây $\vec{T}$ đặt tại điểm tiếp xúc $B$, dọc theo đường thẳng $AB$ hướng về $A$.

Vì hai lực $\vec{N}$ và $\vec{P}$ cắt nhau tại tâm $O$, nên để quả cầu cân bằng, đường tác dụng của sức căng $\vec{T}$ bắt buộc phải đi qua $O$ (tức $A, B, O$ thẳng hàng). Hệ 3 lực $(\vec{P}, \vec{N}, \vec{T})$ là hệ lực đồng quy tại $O$.

**2. Xét tam giác hình học $OCA$:**
Tam giác $OCA$ vuông tại $C$, cạnh huyền $OA = AB + BO = R + R = 2R$. Cạnh góc vuông $OC = R$.
Do đó:
$$\cos\widehat{COA} = \frac{OC}{OA} = \frac{R}{2R} = \frac{1}{2} \implies \widehat{COA} = 60^\circ$$

**3. Phương pháp giải tích:**
Chọn trục $Ox$ nằm ngang hướng sang phải, trục $Oy$ thẳng đứng hướng lên:
- Lực $\vec{P}$: $P_x = 0, \quad P_y = -P$
- Phản lực $\vec{N}$: $N_x = N, \quad N_y = 0$
- Sức căng $\vec{T}$: $T_x = -T \cos 60^\circ = -\frac{1}{2}T, \quad T_y = T \sin 60^\circ = \frac{\sqrt{3}}{2}T$

Thiết lập hệ phương trình cân bằng:
$$\sum F_x = N - \frac{1}{2}T = 0 \quad (1)$$
$$\sum F_y = -P + \frac{\sqrt{3}}{2}T = 0 \quad (2)$$

Từ phương trình (2) ta tìm được sức căng dây:
$$T = \frac{P}{\sin 60^\circ} = \frac{2P}{\sqrt{3}} = \frac{2\sqrt{3}}{3}P$$

Thay vào phương trình (1) ta được phản lực tường:
$$N = \frac{1}{2}T = \frac{\sqrt{3}}{3}P$$

**4. Phương pháp hình học (Tam giác lực):**
Vì hệ ba lực đồng quy cân bằng, tam giác lực phải khép kín. Ta vẽ $\vec{P}$ thẳng đứng hướng xuống, từ mút của $\vec{P}$ kẻ đường nằm ngang theo phương của $\vec{N}$, từ gốc của $\vec{P}$ kẻ đường nghiêng $60^\circ$ theo phương của $\vec{T}$.
Tam giác lực tạo thành là tam giác vuông tại góc giữa $\vec{P}$ và $\vec{N}$, có góc nhọn đối diện $\vec{N}$ bằng $30^\circ$ (góc kề với $\vec{P}$ là $60^\circ$):
$$T = \frac{P}{\cos 30^\circ} = \frac{2\sqrt{3}}{3}P, \quad N = P \cdot \tan 30^\circ = \frac{\sqrt{3}}{3}P$$
*Kết quả hoàn toàn trùng khớp với phương pháp giải tích.*

---

### Thí dụ 1-2: Cân bằng giá treo AOB

**Đề bài:** Treo vật nặng trọng lượng $P$ vào móc $O$ của giá treo $AOB$ tạo bởi hai thanh nhẹ $OA$ và $OB$ có trọng lượng không đáng kể, hai đầu liên kết bản lề với tường và bản lề với nhau tại $O$. Biết thanh $OA$ nằm ngang, thanh $OB$ nghiêng một góc $30^\circ$ so với thanh $OA$. Tìm ứng lực xuất hiện trong hai thanh.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_1_7.svg" alt="Hình 1-7: Cân bằng nút của giá treo AOB" style="max-width: 480px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 1-7: Sơ đồ giải phóng liên kết nút O và tam giác lực

</div>

</div>

**Bài giải:**

**1. Khảo sát cân bằng nút $O$:**
Nút $O$ chịu tác dụng của các lực đồng quy:
- Trọng lượng của vật nặng $\vec{P}$ hướng thẳng đứng xuống.
- Ứng lực của thanh $OA$: $\vec{S}_A$ nằm dọc theo $OA$. Giả thiết thanh $OA$ bị kéo, lực $\vec{S}_A$ hướng từ $O$ về $A$.
- Ứng lực của thanh $OB$: $\vec{S}_B$ nằm dọc theo $OB$. Giả thiết thanh $OB$ bị kéo, lực $\vec{S}_B$ hướng từ $O$ về $B$.

**2. Lập phương trình cân bằng:**
Chọn trục $Ox$ dọc theo $AO$ hướng sang phải, trục $Oy$ thẳng đứng hướng lên:
$$\sum F_x = -S_A - S_B \cos 30^\circ = 0 \quad (1)$$
$$\sum F_y = -P - S_B \sin 30^\circ = 0 \quad (2)$$

Từ (2):
$$S_B = -\frac{P}{\sin 30^\circ} = -2P$$

Thay vào (1):
$$S_A = -S_B \cos 30^\circ = -(-2P) \cdot \frac{\sqrt{3}}{2} = P\sqrt{3}$$

**3. Biện luận bản chất chịu lực:**
- $S_A = P\sqrt{3} > 0$: Giả thiết đúng $\rightarrow$ Thanh $OA$ chịu **kéo**.
- $S_B = -2P < 0$: Dấu âm chứng tỏ chiều thực tế của lực ngược với chiều giả thiết $\rightarrow$ Thanh $OB$ thực tế bị đẩy về nút $O$, nghĩa là thanh $OB$ chịu **nén** với độ lớn lực nén bằng $2P$.

---

### Thí dụ 1-4: Dầm bản lề giữ bằng dây chằng

**Đề bài:** Thanh $OA$ đồng chất, trọng lượng không đáng kể, nối bản lề với tường tại $O$ và chịu lực thẳng đứng $\vec{P}$ tại đầu $A$. Để giữ dầm nằm ngang, người ta dùng sợi dây $BC$ nối từ điểm $B$ trên thanh đến điểm neo $C$ trên tường thẳng đứng. Biết khoảng cách $OB = 2BA$. Tính sức căng $T$ của dây và phản lực bản lề $O$ trong hai trường hợp:
1. Dây $BC$ nghiêng góc $30^\circ$ với thanh.
2. Dây $BC$ thẳng đứng.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_1_9.svg" alt="Hình 1-9: Dầm bản lề giữ bằng dây chằng" style="max-width: 500px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 1-9: Sơ đồ giải phóng liên kết dầm OA

</div>

</div>

**Bài giải:**

Đặt $BA = a \implies OB = 2a \implies OA = 3a$.

**Trường hợp 1: Dây $BC$ nghiêng $30^\circ$ so với thanh**
Khảo sát cân bằng dầm $OA$:
- Ngoại lực: Lực tập trung $\vec{P}$ tại $A$ hướng xuống.
- Sức căng dây $\vec{T}$ tại $B$ hướng theo phương $BC$ (nghiêng góc $30^\circ$ lên phía trên sang trái).
- Phản lực bản lề $O$: phân tích thành hai thành phần $\vec{X}_O$ (nằm ngang sang phải) và $\vec{Y}_O$ (thẳng đứng hướng lên).

Lập 3 phương trình cân bằng:
$$\sum m_O(\vec{F}) = -P \cdot OA + T \cdot OB \cdot \sin 30^\circ = 0 \quad (1)$$
$$\sum F_x = X_O - T \cos 30^\circ = 0 \quad (2)$$
$$\sum F_y = Y_O + T \sin 30^\circ - P = 0 \quad (3)$$

Từ phương trình mômen (1):
$$-P(3a) + T(2a) \cdot \frac{1}{2} = 0 \implies T \cdot a = 3Pa \implies T = 3P$$

Thay $T = 3P$ vào (2) và (3):
$$X_O = T \cos 30^\circ = 3P \cdot \frac{\sqrt{3}}{2} = \frac{3\sqrt{3}}{2}P$$
$$Y_O = P - T \sin 30^\circ = P - 3P \cdot \frac{1}{2} = -\frac{1}{2}P$$

*Biện luận:* $Y_O < 0$, vậy thành phần phản lực thẳng đứng tại $O$ thực tế hướng xuống dưới. Phản lực toàn phần tại bản lề:
$$R_O = \sqrt{X_O^2 + Y_O^2} = \sqrt{\left(\frac{3\sqrt{3}}{2}P\right)^2 + \left(-\frac{1}{2}P\right)^2} = \sqrt{\frac{27}{4} + \frac{1}{4}}P = P\sqrt{7}$$

**Trường hợp 2: Dây $BC$ thẳng đứng**
Khi dây thẳng đứng, toàn bộ hệ lực tác dụng gồm $\vec{P}$ và $\vec{T}$ đều theo phương thẳng đứng. Do đó $X_O = 0$.
Phương trình mômen đối với $O$:
$$\sum m_O(\vec{F}) = -P(3a) + T(2a) = 0 \implies T = \frac{3}{2}P$$
Phương trình hình chiếu trục thẳng đứng:
$$\sum F_y = Y_O + T - P = 0 \implies Y_O = P - \frac{3}{2}P = -\frac{1}{2}P$$

---

### Thí dụ 1-5: Mái hiên chịu tải phân bố tam giác

**Đề bài:** Mái hiên đồng chất dạng tam giác chiều dài $AB = 6a$, trọng lượng bản thân $P$, được ngàm chặt vào tường thẳng đứng tại đầu $A$. Đầu mút $B$ chịu một tải trọng tập trung thẳng đứng $Q$. Trên suốt chiều dài $AB$ có tải trọng phân bố đều theo quy luật tam giác với cường độ lớn nhất tại $A$ bằng $q$ và bằng $0$ tại $B$. Xác định các phản lực ngàm tại $A$.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_1_10.svg" alt="Hình 1-10: Mái hiên ngàm tường chịu tải tam giác" style="max-width: 480px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 1-10: Sơ đồ thu gọn tải trọng phân bố và phản lực ngàm A

</div>

</div>

**Bài giải:**

**1. Thu gọn các hệ lực hoạt động:**
- Tải phân bố tam giác có diện tích biểu đồ:
  $$Q_1 = \frac{1}{2} q \cdot AB = \frac{1}{2} q (6a) = 3qa$$
  Điểm đặt của hợp lực $Q_1$ nằm tại trọng tâm tam giác tải trọng, cách ngàm $A$ một đoạn:
  $$d_1 = \frac{1}{3} AB = \frac{1}{3} (6a) = 2a$$
- Trọng lực bản thân $P$ của mái hiên đồng chất đặt tại chính giữa $AB$, cách $A$ một đoạn $d_P = 3a$.
- Lực tập trung $Q$ đặt tại mút $B$, cách $A$ một đoạn $d_B = 6a$.

**2. Giải phóng liên kết ngàm tại $A$:**
Tại ngàm $A$ phát sinh:
- Phản lực nằm ngang $X_A$.
- Phản lực thẳng đứng $Y_A$ (giả thiết hướng lên).
- Mômen ngàm phản lực $m_A$ (giả thiết quay ngược chiều kim đồng hồ).

**3. Thiết lập các phương trình cân bằng:**
$$\sum F_x = X_A = 0$$
$$\sum F_y = Y_A - Q_1 - P - Q = 0 \implies Y_A = P + Q + 3qa$$
$$\sum m_A(\vec{F}) = m_A - Q_1(2a) - P(3a) - Q(6a) = 0$$

Thay $Q_1 = 3qa$ vào phương trình mômen:
$$m_A = 3qa(2a) + 3aP + 6aQ = 6a^2 q + 3aP + 6aQ$$

**Kết luận:**
- $X_A = 0$
- $Y_A = P + Q + 3qa$
- $m_A = 3aP + 6aQ + 6a^2 q$

---

### Thí dụ 1-10: Cần cẩu chạy trên ray – Điều kiện chống lật

**Đề bài:** Cần cẩu $ABC$ di chuyển trên hai bánh xe $A$ và $B$ cách nhau khoảng cách $L = 1\text{ m}$. Trọng lượng của bản thân cần cẩu $P$ có đường tác dụng đi qua chính giữa đoạn $AB$. Cần cẩu dùng để nâng một vật có trọng lượng $q$ ở tầm xa cách trục đối xứng $3\text{ m}$. Ở phía đối diện có một đối trọng $Q$ đặt ở tầm xa $1\text{ m}$. Hãy xác định khoảng giá trị của đối trọng $Q$ để cần cẩu luôn luôn ổn định không bị lật trong mọi trạng thái làm việc.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_1_15.svg" alt="Hình 1-15: Cần cẩu và điều kiện ổn định chống lật" style="max-width: 460px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 1-15: Sơ đồ phân tích lật cần cẩu

</div>

</div>

**Bài giải:**

Cần cẩu có thể bị lật theo hai phía:
1. **Lật quanh bánh $A$ (lật về phía sau do đối trọng $Q$ quá nặng):** Nguy hiểm nhất xảy ra khi cần cẩu không nâng tải ($q = 0$).
2. **Lật quanh bánh $B$ (lật về phía trước do vật nâng $q$ quá nặng kéo xuống):** Nguy hiểm nhất xảy ra khi cẩu tải trọng cực đại $q$.

**1. Điều kiện không lật quanh gối $A$ (khi không nâng tải, $q = 0$):**
Khi cần cẩu sắp lật quanh bánh xe $A$, bánh xe $B$ bắt đầu nhấc lên khỏi mặt đất, tức phản lực tại $B$ triệt tiêu: $N_B \ge 0$.
Lấy mômen đối với tâm quay lật $A$:
Mômen chống lật (mômen giữ) do trọng lượng bản thân $P$ tạo ra:
$$M_{\text{giữ}} = P \cdot d_{PA} = P \cdot (0.5\text{ m})$$
Mômen gây lật do đối trọng $Q$ tạo ra:
$$M_{\text{lật}} = Q \cdot d_{QA} = Q \cdot (1\text{ m} - 0.5\text{ m}) = 0.5 Q$$

Để cần cẩu không bị lật quanh $A$:
$$M_{\text{lật}} \le M_{\text{giữ}} \implies 0.5 Q \le 0.5 P \implies Q \le P$$

**2. Điều kiện không lật quanh gối $B$ (khi nâng tải $q$):**
Khi cần cẩu sắp lật quanh $B$, bánh xe $A$ bắt đầu nhấc lên khỏi ray, do đó $N_A \ge 0$.
Lấy mômen đối với tâm quay lật $B$:
Mômen gây lật do vật nâng $q$ tạo ra:
$$M_{\text{lật}} = q \cdot d_{qB} = q \cdot (3\text{ m} - 0.5\text{ m}) = 2.5 q$$
Mômen giữ thăng bằng do bản thân cần cẩu $P$ và đối trọng $Q$ tạo ra:
$$M_{\text{giữ}} = P \cdot d_{PB} + Q \cdot d_{QB} = P(0.5) + Q(1 + 0.5) = 0.5 P + 1.5 Q$$

Để cần cẩu không lật quanh $B$:
$$M_{\text{lật}} \le M_{\text{giữ}} \implies 2.5 q \le 0.5 P + 1.5 Q$$
$$\implies 1.5 Q \ge 2.5 q - 0.5 P \implies Q \ge \frac{5q - P}{3}$$

**Kết luận:** Để cần cẩu làm việc an toàn không bị lật trong mọi tình huống, trị số đối trọng $Q$ phải thỏa mãn bất đẳng thức kép:
$$\frac{5q - P}{3} \le Q \le P$$

---

## 1.4. BÀI TẬP TỰ RÈN LUYỆN (CÓ ĐÁP SỐ)

::: info Bài 1-1: Kéo bánh xe vượt bậc thềm
Dùng lực kéo $\vec{Q}$ nằm ngang đặt vào trục để kéo bánh xe đồng chất bán kính $R$, trọng lượng $P$ từ mặt đường nằm ngang vượt lên bậc thềm cao $h = R/2$. Xác định các phản lực tại mặt đường $A$ và bậc thềm $B$. Với trị số $Q$ nào thì bánh xe bắt đầu vượt qua bậc?
* **Đáp số:** $N_A = P - Q\frac{\sqrt{3}}{3}$; $N_B = \frac{2\sqrt{3}}{3}Q$. Bánh xe bắt đầu nhấc khỏi đường khi $Q \ge P\frac{\sqrt{3}}{3}$.
:::

::: info Bài 1-2: Trục ròng rọc chịu lực
Trục của ròng rọc nhỏ được đỡ bởi hai thanh nhẹ $OA$ và $OB$ nghiêng đều $60^\circ$ với phương nằm ngang. Vòng qua ròng rọc là sợi dây một đầu treo vật nặng $P$, đầu kia chịu lực kéo $F = P$ nghiêng $30^\circ$ với phương ngang. Xác định ứng lực trong hai thanh.
* **Đáp số:** $S_A = P\frac{\sqrt{3}}{3}$ (thanh $OA$ chịu kéo); $S_B = -2P\frac{\sqrt{3}}{3}$ (thanh $OB$ chịu nén).
:::

::: info Bài 1-3: Dầm chôn vào tường chịu lực
Dầm đồng chất dài $4\text{ m}$, trọng lượng $5\text{ kN}$ được chôn thẳng góc vào tường dày $0.5\text{ m}$. Dầm tỳ lên hai cạnh tường tại $A$ và $B$. Xác định phản lực tại $A$ và $B$ khi đầu tự do $C$ treo vật nặng $P = 40\text{ kN}$.
* **Đáp số:** $N_A = 340\text{ kN}, \quad N_B = 295\text{ kN}$.
:::

::: info Bài 1-4: Xe chở hàng trên dầm cầu
Xe có trọng lượng $P_1 = 40\text{ kN}$ chạy trên dầm đồng chất nằm ngang $AB$ dài $L$, trọng lượng dầm $P = 60\text{ kN}$. Vị trí trọng tâm xe cách $A$ một đoạn $AC$. Đặt tỉ số $n = \frac{AC}{AB}$. Xác định các phản lực gối tựa $A$ và $B$ theo tỉ số $n$.
* **Đáp số:** $N_A = (7 - 4n) \times 10\text{ kN}; \quad N_B = (3 + 4n) \times 10\text{ kN}$.
:::

::: info Bài 1-5: Trục quay mang 3 đĩa tròn
Trục nằm ngang trên hai ổ đỡ $A$ và $B$ cách nhau $300\text{ cm}$. Trên trục lắp 3 đĩa tròn có trọng lượng $P_1 = 3\text{ kN}$ (cách $A$ $95\text{ cm}$), $P_2 = 5\text{ kN}$ (chính giữa trục), $P_3 = 2\text{ kN}$ (cách $B$ $35\text{ cm}$). Tìm phản lực tại hai ổ đỡ $A$ và $B$.
* **Đáp số:** $N_A = 4.78\text{ kN}, \quad N_B = 5.22\text{ kN}$.
:::

::: info Bài 1-6: Thanh treo bản lề có thanh chống chéo
Thanh nằm ngang $AB$ dài $3\text{ m}$ liên kết bản lề tại $A$ với tường. Tại $C$ cách $A$ đoạn $2\text{ m}$ có thanh chống $CD$ liên kết bản lề với trần nhà nghiêng $60^\circ$. Đầu $B$ chịu tải trọng thẳng đứng $P = 10\text{ kN}$. Bỏ qua trọng lượng các thanh. Tính phản lực tại $A$ và ứng lực thanh $CD$.
* **Đáp số:** $X_A = 10\frac{\sqrt{3}}{2}\text{ kN}, \quad Y_A = 5\text{ kN}, \quad S_C = 10\sqrt{3}\text{ kN}$.
:::

::: info Bài 1-7: Giàn cầu chịu lực gió thổi ngang
Cầu đồng chất $AB = 2a$, trọng lượng $P$, nằm trên gối cố định $A$ và gối di động $B$. Ở độ cao $h$ có lực gió nằm ngang $Q$ tác dụng vào giàn cầu. Xác định phản lực tại $A$ và $B$ trong hai trường hợp:
a) Gối di động $B$ nằm trên mặt phẳng ngang.
b) Gối di động $B$ nằm trên mặt dốc nghiêng $30^\circ$.
* **Đáp số:**
  - a) $X_A = -Q; \quad Y_A = \frac{P}{2} - Q\frac{h}{2a}; \quad N_B = \frac{P}{2} + Q\frac{h}{2a}$.
  - b) $X_A = \frac{P\sqrt{3}}{6} + Q\left(\frac{h\sqrt{3}}{6a} - 1\right); \quad Y_A = \frac{P}{2} - Q\frac{h}{2a}; \quad N_B = \left(P + Q\frac{h}{a}\right)\frac{\sqrt{3}}{3}$.
:::

::: info Bài 1-8: Dầm ngàm chịu tải trọng phức hợp
Dầm côngxon ngàm tại đầu gốc, chịu tải trọng phân bố đều $q = 1.5\text{ kN/m}$ trên đoạn $3\text{ m}$, ngẫu lực tập trung $m = 2\text{ kNm}$ và lực tập trung $F = 4\text{ kN}$ nghiêng $45^\circ$ ở đầu mút cách ngàm $5\text{ m}$. Tính các thành phần phản lực ngàm.
* **Đáp số:** $X_O = 2.8\text{ kN}; \quad Y_O = 1.67\text{ kN}; \quad m_O = -5.35\text{ kNm}$.
:::

::: info Bài 1-9: Cần trục nâng vật nặng
Cần trục có trục đứng $AB = 1.8\text{ m}$ đỡ bởi hai ổ $A$ và $B$. Tay cần vươn xa $2.4\text{ m}$ treo vật nặng $9.6\text{ kN}$. Tìm phản lực tại hai ổ đỡ $A$ và $B$.
* **Đáp số:** $X_A = 12.8\text{ kN}, \quad Y_A = 9.6\text{ kN}; \quad X_B = 12.8\text{ kN}$.
:::

::: info Bài 1-10: Điều kiện chống lật thân đập nước
Một đập nước chắn có mặt cắt hình chữ nhật chiều cao $h = 12\text{ m}$, trọng lượng riêng của vật liệu xây đập là $\gamma = 30\text{ kN/m}^3$, của nước là $\gamma_n = 10\text{ kN/m}^3$. Xác định bề rộng đáy $b$ tối thiểu của đập để thân đập không bị áp lực nước làm lật quanh mép chân đập.
* **Đáp số:** $b \ge 2\text{ m}$.
:::
