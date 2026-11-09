---
title: "Bài Tập Tĩnh Học - Chương 2: Bài Toán Phẳng Hệ Vật"
layout: doc
---

# Chương 2: Bài Toán Phẳng (Hệ Vật)

> [!NOTE] Cơ sở lý thuyết liên quan
> Xem lý thuyết chi tiết về phân tích hệ vật, nội lực, ngoại lực và nguyên lý hóa rắn tại: **[Giáo trình Lý thuyết: Chương 2 – Hệ Lực Không Gian & Hệ Vật](/tinh-hoc/chuong-2)**.

Phát triển từ bài toán phẳng một vật, trong chương này chúng ta giải quyết các bài toán khảo sát sự cân bằng của **hệ vật** (gồm nhiều vật rắn nối với nhau bởi các liên kết trong).

---

## 2.1. CƠ SỞ LÝ THUYẾT

### 2.1.1. Ngoại lực và nội lực
- **Ngoại lực:** Là những lực từ các vật bên ngoài tác dụng vào các vật trong hệ (trọng lực, lực kéo, áp lực gió, phản lực từ các gối đỡ cố định...).
- **Nội lực:** Là những lực tương hỗ giữa các vật trong hệ với nhau.
  - *Đặc điểm của nội lực:* Luôn xuất hiện từng đôi một trực đối (cùng phương, ngược chiều, cùng độ lớn) đặt vào hai vật khác nhau theo Tiên đề 4 (Tác dụng và phản tác dụng).
  - *Tính chất triệt tiêu:* Khi xét toàn bộ hệ vật (hoá rắn hệ), các cặp nội lực triệt tiêu lẫn nhau và không xuất hiện trong các phương trình cân bằng của toàn hệ.

#### Bảng 2-1: Đặc điểm các cặp nội lực liên kết trong hệ vật

| Liên kết trong | Cấu tạo & Cách biểu diễn | Đặc điểm cặp nội lực tương hỗ |
| :--- | :--- | :--- |
| **Mặt tựa giữa 2 vật** | Hai vật tiếp xúc trơn nhẵn tại một điểm | Cặp lực trực đối vuông góc với mặt tiếp xúc: $\vec{N}$ và $\vec{N}'$ ($\vec{N}' = -\vec{N}$). |
| **Dây mềm nối 2 vật** | Dây vắt qua ròng rọc hoặc nối 2 vật | Cặp sức căng dây kéo căng: $\vec{T}$ và $\vec{T}'$ ($T = T'$). |
| **Thanh nối 2 khớp** | Thanh nhẹ chỉ nối khớp 2 đầu | Cặp ứng lực dọc theo đường nối hai khớp: $\vec{S}$ và $\vec{S}'$ (cùng nén hoặc cùng kéo). |
| **Bản lề trung gian** | Chốt bản lề nối 2 hoặc nhiều vật | Phân tích thành hai cặp thành phần lực trực đối: $(\vec{X}_O, \vec{X}'_O)$ và $(\vec{Y}_O, \vec{Y}'_O)$. |

---

### 2.1.2. Hai loại điều kiện cân bằng
1. **Điều kiện cân bằng tách riêng từng vật:** Mỗi vật trong hệ là một vật rắn cân bằng dưới tác dụng của ngoại lực và nội lực đặt vào vật đó.
2. **Điều kiện cân bằng toàn hệ hoá rắn:** Xem toàn hệ như một vật rắn duy nhất. Các cặp nội lực tự triệt tiêu, chỉ còn các ngoại lực tham gia vào 3 phương trình cân bằng tĩnh học.

---

## 2.2. HƯỚNG DẪN ÁP DỤNG & CHIẾN LƯỢC TÁCH VẬT

* **Bước 1 (Nhận diện thanh liên kết):** Trước khi giải, phát hiện các thanh nhẹ hai đầu bản lề (không mang tải giữa nhịp). Thay thế các thanh này bằng một ẩn số ứng lực $S$ duy nhất dọc theo thanh để giảm bớt số ẩn phản lực bản lề từ 2 xuống 1.
* **Bước 2 (Chọn phương pháp lập phương trình):**
  - **Phương pháp tách vật:** Tách lần lượt từng vật, lập phương trình cân bằng cho từng vật. Ưu tiên tách vật nào chứa ít ẩn số trước (hoặc số phương trình độc lập $\ge$ số ẩn).
  - **Phương pháp hoá rắn:** Lập phương trình cân bằng ngoại lực cho toàn hệ trước để tìm các phản lực ngoài, sau đó mới tách vật để tìm nội lực.

---

## 2.3. BÀI GIẢI MẪU

### Thí dụ 2-1: Hai quả cầu đặt trong hộp

**Đề bài:** Trong một hộp có đáy nằm ngang và hai thành thẳng đứng, người ta đặt hai quả cầu đồng chất cùng bán kính $R$, cùng trọng lượng $P$ nằm chồng lên nhau. Đường nối hai tâm $O_1 O_2$ nghiêng một góc $45^\circ$ so với đường nằm ngang. Tìm phản lực của đáy, các thành hộp và lực ép tương hỗ giữa hai quả cầu.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_2_1.svg" alt="Hình 2-1: Hai quả cầu đặt chồng trong hộp" style="max-width: 460px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 2-1: Sơ đồ giải phóng liên kết hai quả cầu trong hộp

</div>

</div>

**Bài giải:**

**1. Khảo sát quả cầu trên $O_2$ (tách vật ít ẩn trước):**
Quả cầu $O_2$ chịu tác dụng của 3 lực đồng quy tại tâm $O_2$:
- Trọng lực $\vec{P}_2$ ($P_2 = P$) thẳng đứng hướng xuống.
- Phản lực thành phải $\vec{N}_2$ nằm ngang hướng sang trái.
- Lực ép tương hỗ $\vec{N}'$ từ quả cầu $O_1$ truyền sang, dọc theo đường nối tâm $O_1 O_2$ nghiêng $45^\circ$ hướng lên sang phải.

Lập hai phương trình cân bằng chiếu lên các trục tọa độ:
$$\sum F_x = N' \cos 45^\circ - N_2 = 0 \implies N' \frac{\sqrt{2}}{2} - N_2 = 0 \quad (1)$$
$$\sum F_y = N' \sin 45^\circ - P = 0 \implies N' \frac{\sqrt{2}}{2} - P = 0 \quad (2)$$

Từ (2) ta tìm được lực ép tương hỗ giữa 2 quả cầu:
$$N' = \frac{P}{\sin 45^\circ} = P\sqrt{2}$$

Thay $N'$ vào (1):
$$N_2 = N' \cos 45^\circ = (P\sqrt{2}) \cdot \frac{\sqrt{2}}{2} = P$$

**2. Khảo sát quả cầu dưới $O_1$:**
Quả cầu $O_1$ chịu tác dụng của các lực:
- Trọng lực $\vec{P}_1$ ($P_1 = P$) hướng xuống.
- Phản lực thành trái $\vec{N}_1$ hướng sang phải.
- Phản lực đáy hộp $\vec{N}_3$ hướng thẳng đứng lên.
- Lực tác dụng tương hỗ $\vec{N} = -\vec{N}'$ ($N = N' = P\sqrt{2}$) hướng dọc theo $O_2 O_1$ nghiêng $45^\circ$ xuống dưới sang trái.

Lập hai phương trình hình chiếu:
$$\sum F_x = N_1 - N \cos 45^\circ = 0 \implies N_1 = (P\sqrt{2})\frac{\sqrt{2}}{2} = P$$
$$\sum F_y = N_3 - P - N \sin 45^\circ = 0 \implies N_3 = P + (P\sqrt{2})\frac{\sqrt{2}}{2} = 2P$$

**3. Kiểm tra lại bằng phương pháp hoá rắn toàn hệ:**
Xem hai quả cầu như một khối thống nhất:
- Tổng ngoại lực thẳng đứng: $\sum F_y = N_3 - P_1 - P_2 = 0 \implies N_3 = 2P$ (hoàn toàn đúng).
- Tổng ngoại lực nằm ngang: $\sum F_x = N_1 - N_2 = 0 \implies N_1 = N_2 = P$ (hoàn toàn đúng).

---

### Thí dụ 2-2: Hệ dầm OA và thanh chống BC ngàm

**Đề bài:** Thanh đồng chất $OA = 6a$, trọng lượng $P$ gắn vào tường nhờ bản lề $O$ và được đỡ nằm ngang nhờ thanh đồng chất $BC = 4a$, trọng lượng $p$ ngàm ở $C$ trên tường và nghiêng góc $30^\circ$ với tường. Điểm tựa $B$ trên thanh $OA$ cách $O$ một đoạn $OB = 2a$. Đầu $A$ chịu tải trọng thẳng đứng $Q$. Tìm các phản lực tại $O$, $B$ và ngàm $C$.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_2_2.svg" alt="Hình 2-2: Hệ dầm OA và thanh chống BC ngàm" style="max-width: 480px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 2-2: Sơ đồ tương tác giữa dầm OA và thanh chống BC

</div>

</div>

**Bài giải:**

**1. Tách dầm $OA$ khảo sát trước:**
Dầm $OA$ chịu các lực:
- Lực tập trung $Q$ tại $A$ ($x = 6a$).
- Trọng lực $P$ tại trung điểm ($x = 3a$).
- Phản lực tựa $\vec{N}$ từ thanh $BC$ tại $B$ ($x = 2a$) vuông góc với $OA$ (hướng thẳng đứng lên).
- Phản lực bản lề $O$: $X_O$ (ngang) và $Y_O$ (đứng).

Lập 3 phương trình cân bằng cho dầm $OA$:
$$\sum F_x = X_O = 0$$
$$\sum m_O(\vec{F}) = N(2a) - P(3a) - Q(6a) = 0 \implies 2aN = 3aP + 6aQ \implies N = \frac{3}{2}P + 3Q$$
$$\sum F_y = Y_O + N - P - Q = 0 \implies Y_O = P + Q - N = P + Q - \left(\frac{3}{2}P + 3Q\right) = -\frac{1}{2}P - 2Q$$

*(Dấu trừ của $Y_O$ cho thấy phản lực tại bản lề $O$ thực chất hướng xuống).*

**2. Khảo sát thanh chống $BC$:**
Thanh $BC$ chịu:
- Áp lực $\vec{N}' = -\vec{N}$ từ dầm $OA$ đè xuống tại đầu $B$ với độ lớn $N' = \frac{3}{2}P + 3Q$.
- Trọng lực bản thân $p$ đặt tại trung điểm của $BC$.
- Các phản lực ngàm tại $C$: lực $X_C, Y_C$ và mômen ngàm $m_C$.

Dễ dàng giải được phản lực tại ngàm $C$:
$$X_C = 0, \quad Y_C = p + N' = p + \frac{3}{2}P + 3Q$$
$$m_C = p \cdot a + 3aP + 6aQ$$

---

## 2.4. BÀI TẬP TỰ RÈN LUYỆN (CÓ ĐÁP SỐ)

::: info Bài 2-1: Hệ dầm ghép hai nhịp liên kết bản lề giữa
Dầm ghép gồm hai đoạn $AC$ và $CB$ nối với nhau bằng bản lề trung gian tại $C$. Gối $A$ là ngàm cứng, gối $B$ là gối di động con lăn. Đoạn $AC$ chịu tải phân bố đều $q$, đoạn $CB$ chịu lực tập trung $P$. Xác định các phản lực ngàm $A$, gối $B$ và khớp $C$.
* **Đáp số:** Áp dụng phương pháp tách nhịp phụ $CB$ trước, sau đó truyền phản lực $C$ vào nhịp chính $AC$.
:::

::: info Bài 2-2: Khung 3 khớp chịu tải gió
Khung tam giác 3 khớp gồm hai nửa khung $AC$ và $BC$ liên kết bản lề với móng tại $A, B$ và liên kết với nhau tại đỉnh $C$. Khung chịu tải trọng gió phân bố ngang $q$ tác dụng lên cột đứng $AC$. Tìm các phản lực chân cột $A, B$ và khớp đỉnh $C$.
* **Đáp số:** Sử dụng phương pháp hoá rắn toàn hệ để tìm liên hệ giữa $A$ và $B$, sau đó tách nửa khung $BC$ không chịu tải để tìm hướng đường tác dụng của phản lực qua $C$.
:::
