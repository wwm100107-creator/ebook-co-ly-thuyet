---
title: "Bài Tập Tĩnh Học - Chương 3: Bài Toán Không Gian"
layout: doc
---

# Chương 3: Bài Toán Không Gian

> [!NOTE] Cơ sở lý thuyết liên quan
> Xem lý thuyết chi tiết về mômen lực đối với trục, hệ lực không gian và 6 phương trình cân bằng tại: **[Giáo trình Lý thuyết: Chương 2 – Hệ Lực Không Gian](/tinh-hoc/chuong-2)**.

Bài toán không gian khảo sát trạng thái cân bằng của vật rắn chịu tác dụng của hệ lực có đường tác dụng bố trí tùy ý trong không gian 3 chiều $Oxyz$.

---

## 3.1. CƠ SỞ LÝ THUYẾT

### 3.1.1. Các liên kết không gian thường gặp
* **Ổ trục ngắn (Bản lề trụ ngắn):** Ngăn cản chuyển động tịnh tiến theo hai phương vuông góc với trục $\rightarrow$ Có 2 thành phần phản lực vuông góc với trục.
* **Ổ đỡ chặn (Cối có mặt chắn):** Ngăn cản chuyển động theo hai phương ngang và một phương dọc trục $\rightarrow$ Có 3 thành phần phản lực $\vec{X}, \vec{Y}, \vec{Z}$.
* **Khớp cầu:** Ngăn cản chuyển động tịnh tiến theo cả 3 phương trong không gian $\rightarrow$ Có 3 thành phần phản lực $\vec{X}, \vec{Y}, \vec{Z}$ nhưng không cản trở chuyển động quay quanh tâm cầu.
* **Ngàm không gian (Ngàm 3D):** Giữ chặt hoàn toàn một đầu vật thể $\rightarrow$ Phát sinh 3 thành phần phản lực $\vec{X}, \vec{Y}, \vec{Z}$ và 3 thành phần ngẫu lực mômen ngàm $m_x, m_y, m_z$ (tổng cộng 6 ẩn số).

---

### 3.1.2. Chiếu lực và tính mômen lực đối với trục
Cho lực $\vec{F}$ có điểm đặt tại $A(x, y, z)$ và các thành phần hình chiếu $F_x, F_y, F_z$.

* **Mômen của lực $\vec{F}$ đối với trục $Oz$:**
  $$m_z(\vec{F}) = \pm F_{xy} \cdot h$$
  *Định lý giải tích:*
  $$m_x(\vec{F}) = y F_z - z F_y$$
  $$m_y(\vec{F}) = z F_x - x F_z$$
  $$m_z(\vec{F}) = x F_y - y F_x$$
* **Tính chất triệt tiêu mômen đối với trục:** Mômen của lực đối với một trục triệt tiêu ($m_z(\vec{F}) = 0$) khi và chỉ khi đường tác dụng của lực **song song** với trục hoặc **cắt** trục đó.

---

### 3.1.3. Hệ 6 phương trình cân bằng không gian
Điều kiện cần và đủ để hệ lực không gian bất kỳ cân bằng là vectơ chính và mômen chính đối với một gốc tọa độ bất kỳ đều đồng thời triệt tiêu:

$$\begin{cases}
\sum F_{kx} = 0, \quad \sum F_{ky} = 0, \quad \sum F_{kz} = 0 \\
\sum m_x(\vec{F}_k) = 0, \quad \sum m_y(\vec{F}_k) = 0, \quad \sum m_z(\vec{F}_k) = 0
\end{cases}$$

---

## 3.2. HƯỚNG DẪN ÁP DỤNG & PHƯƠNG PHÁP GIẢI

1. **Chọn đối tượng khảo sát và giải phóng liên kết không gian:**
   - Với khớp cầu hoặc ổ đỡ chặn: thay bằng 3 thành phần phản lực $\vec{X}, \vec{Y}, \vec{Z}$ theo 3 trục tọa độ.
   - Với ổ trượt ngắn (bản lề trụ): thay bằng 2 thành phần phản lực vuông góc với trục quay.
   - Với ngàm không gian: thay bằng 3 phản lực $\vec{X}_A, \vec{Y}_A, \vec{Z}_A$ và 3 ngẫu lực mômen ngàm $M_{Ax}, M_{Ay}, M_{Az}$.
2. **Nguyên tắc chọn hệ trục tọa độ $Oxyz$ tối ưu:**
   - Chọn gốc $O$ và các trục sao cho các trục tọa độ **cắt hoặc song song** với nhiều phản lực chưa biết nhất.
   - Đối với vật rắn có trục quay cố định (như trục truyền động đặt trên hai ổ đỡ $A, B$ hoặc tấm bản lề), chọn một trục tọa độ (ví dụ $Oy$ hoặc $Oz$) trùng với đường thẳng đi qua hai ổ đỡ $AB$. Khi đó phương trình mômen đối với trục $AB$ sẽ khử toàn bộ phản lực tại cả hai ổ đỡ $A$ và $B$, giúp tìm ngay ẩn số lực căng dây hoặc lực chủ động!
3. **Cách tính mômen lực đối với trục nhanh nhất:**
   - Phân tích lực $\vec{F}$ thành các thành phần song song với 3 trục tọa độ $(F_x, F_y, F_z)$ tại điểm đặt có tọa độ rõ ràng, sau đó áp dụng trực tiếp quy tắc cánh tay đòn trên mặt phẳng vuông góc với trục lấy mômen.

---

## 3.3. BÀI GIẢI MẪU

### Thí dụ 3-1: Giá đỡ không gian 3 thanh chịu tải

**Đề bài:** Treo vật nặng trọng lượng $P$ vào đầu $O$ của giá đỡ không gian tạo bởi 3 thanh nhẹ không trọng lượng $OA, OB, OC$ liên kết bản lề với tường và bản lề với nhau tại $O$. Biết các điểm tựa trên tường $A, B, C$ tạo thành tam giác đều cạnh $a$, đáy $BC$ nằm ngang, thanh $OA$ vuông góc với mặt phẳng tường. Các thanh $OB$ và $OC$ nghiêng góc $30^\circ$ so với thanh $OA$. Tìm ứng lực xuất hiện trong 3 thanh.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_3_5.svg" alt="Hình 3-5: Giá đỡ không gian 3 thanh" style="max-width: 480px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 3-5: Sơ đồ cân bằng nút O trong không gian

</div>

</div>

**Bài giải:**

**1. Khảo sát nút $O$:**
Nút $O$ chịu tác dụng của hệ 4 lực đồng quy:
- Trọng lực $\vec{P}$ hướng thẳng đứng xuống.
- Ứng lực 3 thanh: $\vec{S}_A, \vec{S}_B, \vec{S}_C$ dọc theo các thanh hướng về phía tường (giả thiết các thanh bị kéo).

**2. Chọn hệ trục tọa độ $Oxyz$ tại $O$:**
- Trục $Oz$ vuông góc với tường, dọc theo thanh $OA$ (hướng từ tường ra ngoài).
- Trục $Ox$ nằm ngang song song với đáy $BC$ của tam giác đều.
- Trục $Oy$ thẳng đứng hướng xuống dưới.

**3. Phân tích hình chiếu các lực:**
Do tính chất đối xứng của hệ qua mặt phẳng $Oyz$:
- Lực $\vec{P}$: $P_x = 0, \quad P_y = P, \quad P_z = 0$.
- Ứng lực $\vec{S}_A$: nằm hoàn toàn dọc theo thanh $OA$ (trục $Oz$): $S_{Ax} = 0, \quad S_{Ay} = 0, \quad S_{Az} = -S_A$.
- Hai thanh $OB$ và $OC$ đối xứng qua mặt phẳng $Oyz$ và cùng nghiêng $30^\circ$ với $OA$, nên:
  $$S_B = S_C$$
  $$S_{Bx} = S_B \sin 30^\circ \sin 60^\circ, \quad S_{Cx} = -S_C \sin 30^\circ \sin 60^\circ$$
  $$S_{By} = S_B \sin 30^\circ \cos 60^\circ, \quad S_{Cy} = S_C \sin 30^\circ \cos 60^\circ$$
  $$S_{Bz} = -S_B \cos 30^\circ, \quad S_{Cz} = -S_C \cos 30^\circ$$

**4. Thiết lập hệ phương trình cân bằng:**
$$\sum F_x = S_{Bx} + S_{Cx} = 0 \quad (\text{tự thỏa mãn do } S_B = S_C)$$
$$\sum F_y = P - 2 S_B \sin 30^\circ \cos 60^\circ = 0 \implies P - 2 S_B \left(\frac{1}{2}\right)\left(\frac{\sqrt{3}}{2}\right) = 0$$
$$\implies S_B = S_C = -\frac{2\sqrt{3}}{3}P$$

Chiếu lên trục $Oz$:
$$\sum F_z = -S_A - 2 S_B \cos 30^\circ = 0 \implies S_A = -2 S_B \frac{\sqrt{3}}{2} = -2\left(-\frac{2\sqrt{3}}{3}P\right)\frac{\sqrt{3}}{2} = 2P$$

**5. Kết luận:**
- $S_A = 2P > 0$: Thanh $OA$ chịu **kéo**.
- $S_B = S_C = -\frac{2\sqrt{3}}{3}P < 0$: Hai thanh $OB$ và $OC$ chịu **nén**.

---

### Thí dụ 3-2: Cân bằng trục ngang mang tấm chữ nhật và đối trọng

**Đề bài:** Một trục ngang $AB$ có chiều dài $2a$ quay trơn trong ổ đỡ chặn $A$ và ổ trượt $B$. Gắn cứng vào trục một tấm chữ nhật đồng chất trọng lượng $Q$, chiều rộng $b$, và một thanh nhẹ $CD$ dài $l$ vuông góc với trục mang quả nặng trọng lượng $P$ ở đầu $D$. Khi cân bằng, mặt phẳng tấm chữ nhật tạo góc $\alpha = 30^\circ$ với phương thẳng đứng, còn thanh $CD$ nằm trong mặt phẳng thẳng đứng tạo góc $\beta = 60^\circ$ với phương thẳng đứng. Tìm trọng lượng $P$ theo $Q$ và xác định các phản lực tại ổ đỡ $A, B$.

**Bài giải:**

**1. Chọn hệ trục tọa độ $Axyz$:**
- Gốc tại ổ đỡ $A$, trục $Ay$ dọc theo trục quay $AB$ ($y_B = 2a$), trục $Ax$ nằm ngang vuông góc với $AB$, trục $Az$ thẳng đứng hướng lên.
- Tại ổ đỡ $A$ có 3 thành phần phản lực $(X_A, Y_A, Z_A)$; tại ổ trượt $B$ có 2 thành phần $(X_B, Z_B)$.

**2. Thiết lập phương trình mômen đối với trục quay $Ay$ (trục $AB$):**
Các phản lực tại $A$ và $B$ đều cắt trục $Ay$ nên có mômen đối với $Ay$ bằng không:
$$\sum m_y(\vec{F}_k) = P \cdot l \sin\beta - Q \cdot \frac{b}{2} \sin\alpha = 0$$
$$\implies P = Q \frac{b \sin 30^\circ}{2 l \sin 60^\circ} = \frac{b}{2\sqrt{3}\,l} Q$$

**3. Thiết lập các phương trình cân bằng còn lại để tìm phản lực ổ trục:**
- Phương trình hình chiếu:
  $$\sum F_x = X_A + X_B = 0, \qquad \sum F_y = Y_A = 0, \qquad \sum F_z = Z_A + Z_B - P - Q = 0$$
- Phương trình mômen đối với $Az$ và $Ax$:
  $$\sum m_z(\vec{F}_k) = -X_B \cdot 2a = 0 \implies X_B = 0 \implies X_A = 0$$
  $$\sum m_x(\vec{F}_k) = Z_B \cdot 2a - Q \cdot a - P \cdot y_C = 0 \implies Z_B = \frac{1}{2}Q + \frac{y_C}{2a}P, \quad Z_A = P + Q - Z_B$$

---

## 3.4. BÀI TẬP TỰ RÈN LUYỆN (CÓ ĐÁP SỐ)

::: info Bài 3-1: Nắp hầm chữ nhật giữ thăng bằng nhờ dây cáp
Nắp hầm hình chữ nhật $ABCD$ có trọng lượng $P = 400\text{ N}$ bản lề dọc theo cạnh $AB$ nằm ngang. Nắp được giữ nghiêng một góc $30^\circ$ so với mặt ngang nhờ dây cáp nối từ đỉnh $C$ đến một điểm trên tường thẳng đứng. Xác định lực căng của dây cáp và phản lực tại các ổ bản lề $A, B$.
* **Đáp số:** Lập phương trình mômen đối với trục bản lề $AB$ để tìm trực tiếp sức căng dây cáp, sau đó chiếu lên 3 trục để tìm phản lực tại $A$ và $B$.
:::

::: info Bài 3-2: Trục truyền động mang hai bánh đai không gian
Trục truyền động đặt nằm ngang trên hai ổ đỡ $A$ (ổ chặn) và $B$ (ổ trượt). Trục mang bánh đai 1 chịu lực căng đai theo phương thẳng đứng và bánh đai 2 chịu lực căng đai theo phương nằm ngang. Biết công suất truyền động và mômen xoắn danh nghĩa, xác định phản lực tại hai ổ đỡ $A$ và $B$.
* **Đáp số:** Sử dụng 6 phương trình cân bằng không gian.
:::
