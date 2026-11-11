---
title: "Bài Tập Tĩnh Học - Chương 5: Bài Toán Tìm Trọng Tâm"
layout: doc
---

# Chương 5: Bài Toán Tìm Trọng Tâm

> [!NOTE] Cơ sở lý thuyết liên quan
> Xem lý thuyết chi tiết về tâm hệ lực song song, công thức trọng tâm và định lý Guldin tại: **[Giáo trình Lý thuyết: Chương 4 – Trọng Tâm](/tinh-hoc/chuong-4)**.

Trọng tâm $G$ là tâm của hệ lực song song gồm các trọng lực nguyên tố tác dụng lên mọi phần tử của vật thể khi đặt trong trọng trường đồng nhất của Trái Đất.

---

## 5.1. CƠ SỞ LÝ THUYẾT

### 5.1.1. Công thức tọa độ trọng tâm
Đối với hệ gồm $n$ phần tử có trọng lượng $P_k$ và tọa độ $(x_k, y_k, z_k)$:
$$x_G = \frac{\sum_{k=1}^n P_k x_k}{\sum_{k=1}^n P_k}, \quad y_G = \frac{\sum_{k=1}^n P_k y_k}{\sum_{k=1}^n P_k}, \quad z_G = \frac{\sum_{k=1}^n P_k z_k}{\sum_{k=1}^n P_k}$$

Đối với vật thể đồng chất (khối lượng riêng $\gamma = \text{const}$):
* **Vật thể hình khối (thể tích $V$):**
  $$x_G = \frac{1}{V}\int_V x\,dV, \quad y_G = \frac{1}{V}\int_V y\,dV, \quad z_G = \frac{1}{V}\int_V z\,dV$$
* **Tấm phẳng mỏng (diện tích $S$):**
  $$x_G = \frac{1}{S}\sum_{k=1}^n S_k x_k = \frac{1}{S}\iint_S x\,dS, \quad y_G = \frac{1}{S}\sum_{k=1}^n S_k y_k = \frac{1}{S}\iint_S y\,dS$$
* **Dây kim loại, đường cong mảnh (chiều dài $L$):**
  $$x_G = \frac{1}{L}\int_L x\,dL, \quad y_G = \frac{1}{L}\int_L y\,dL, \quad z_G = \frac{1}{L}\int_L z\,dL$$

---

### 5.1.2. Định lý Guldin (Guynđanh)
* **Định lý 1 (Diện tích mặt tròn xoay):** Diện tích $S$ của mặt sinh ra khi quay một đường cong phẳng có chiều dài $L$ quanh một trục nằm trong mặt phẳng của đường nhưng không cắt nó bằng tích độ dài đường cong với chu vi quỹ đạo tròn của trọng tâm $G$ đường cong:
  $$S = 2\pi y_G \cdot L$$
* **Định lý 2 (Thể tích khối tròn xoay):** Thể tích $V$ của khối sinh ra khi quay một hình phẳng có diện tích $S$ quanh một trục đồng phẳng không cắt nó bằng tích diện tích hình phẳng với chu vi quỹ đạo tròn của trọng tâm $G$ hình phẳng:
  $$V = 2\pi y_G \cdot S$$

---

## 5.2. HƯỚNG DẪN ÁP DỤNG & PHƯƠNG PHÁP GIẢI

1. **Tận dụng tối đa tính chất đối xứng:**
   - Nếu vật thể đồng chất có mặt phẳng đối xứng, trục đối xứng hoặc tâm đối xứng thì trọng tâm $G$ bắt buộc phải nằm trên yếu tố đối xứng đó (giúp giảm ngay 1 đến 2 tọa độ cần tính).
2. **Bảng trọng tâm của các hình phẳng và đường cong cơ bản cần nhớ:**
   - **Tam giác bất kỳ:** Trọng tâm $G$ nằm tại giao điểm ba đường trung tuyến (cách đáy một đoạn $\frac{1}{3}h$).
   - **Cung tròn đồng chất bán kính $R$, góc ở tâm $2\alpha$:** Trọng tâm nằm trên trục đối xứng, cách tâm $O$ một đoạn $x_G = R \frac{\sin\alpha}{\alpha}$ (với nửa vòng tròn $\alpha = \pi/2 \implies x_G = \frac{2R}{\pi}$).
   - **Hình quạt tròn bán kính $R$, góc ở tâm $2\alpha$:** Trọng tâm nằm trên trục đối xứng, cách tâm $O$ một đoạn $x_G = \frac{2}{3} R \frac{\sin\alpha}{\alpha}$ (với nửa hình tròn $\alpha = \pi/2 \implies x_G = \frac{4R}{3\pi}$).
3. **Phương pháp ghép hình và diện tích âm:**
   - Với các tiết diện kỹ thuật phức tạp (chữ $L, T, I, U$) hoặc tấm có khoét lỗ: chia thành các hình cơ bản (chữ nhật, tam giác, hình tròn), lập bảng gồm $(S_k, x_k, y_k)$ với $S_k < 0$ cho phần bị khoét rỗng.

---

## 5.3. BÀI GIẢI MẪU

### Thí dụ 5-1: Trọng tâm của tấm đồng chất hình chữ L

**Đề bài:** Tìm tọa độ trọng tâm của tấm đồng chất hình chữ $L$ có kích thước cho như hình vẽ: chiều cao tổng thể $H = 10\text{ cm}$, đáy rộng $B = 6\text{ cm}$, bề dày phần đứng và phần ngang đều bằng $b = 2\text{ cm}$.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_5_5.svg" alt="Hình 5-5: Tấm phẳng đồng chất hình chữ L" style="max-width: 380px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 5-5: Phân chia tấm chữ L thành hai hình chữ nhật đơn giản

</div>

</div>

**Bài giải:**

**1. Chọn hệ trục tọa độ $Oxy$:**
Đặt gốc $O$ tại góc vuông dưới cùng bên trái của chữ $L$:
- Trục hoành $Ox$ dọc theo cạnh đáy dưới nằm ngang.
- Trục tung $Oy$ dọc theo cạnh đứng ngoài cùng bên trái.

**2. Phân chia tấm chữ $L$ thành 2 hình chữ nhật đơn giản:**
- **Hình chữ nhật 1 (nhánh đứng bên trên):**
  - Chiều rộng $b_1 = 2\text{ cm}$, chiều cao $h_1 = 10 - 2 = 8\text{ cm}$.
  - Diện tích: $S_1 = 2 \times 8 = 16\text{ cm}^2$.
  - Tọa độ trọng tâm $G_1$:
    $$x_1 = \frac{2}{2} = 1\text{ cm}, \quad y_1 = 2 + \frac{8}{2} = 6\text{ cm}$$
- **Hình chữ nhật 2 (nhánh ngang đáy):**
  - Chiều rộng $b_2 = 6\text{ cm}$, chiều cao $h_2 = 2\text{ cm}$.
  - Diện tích: $S_2 = 6 \times 2 = 12\text{ cm}^2$.
  - Tọa độ trọng tâm $G_2$:
    $$x_2 = \frac{6}{2} = 3\text{ cm}, \quad y_2 = \frac{2}{2} = 1\text{ cm}$$

**3. Tính tọa độ trọng tâm toàn phần $G$:**
Tổng diện tích tấm chữ $L$:
$$S = S_1 + S_2 = 16 + 12 = 28\text{ cm}^2$$

Áp dụng công thức tọa độ trọng tâm:
$$x_G = \frac{S_1 x_1 + S_2 x_2}{S_1 + S_2} = \frac{16 \times 1 + 12 \times 3}{28} = \frac{16 + 36}{28} = \frac{52}{28} = \frac{13}{7} \approx 1.86\text{ cm}$$
$$y_G = \frac{S_1 y_1 + S_2 y_2}{S_1 + S_2} = \frac{16 \times 6 + 12 \times 1}{28} = \frac{96 + 12}{28} = \frac{108}{28} = \frac{27}{7} \approx 3.86\text{ cm}$$

**Kết luận:** Trọng tâm của tấm chữ $L$ nằm tại điểm $G\left(\frac{13}{7}\text{ cm}, \frac{27}{7}\text{ cm}\right)$.

---

### Thí dụ 5-2: Trọng tâm bản phẳng hình chữ nhật khoét lỗ bán nguyệt (Phương pháp phần âm)

**Đề bài:** Một bản mỏng đồng chất hình chữ nhật có cạnh đáy $2R$ và chiều cao $h = 2R$, phía dưới bị khoét đi một nửa hình tròn đường kính $2R$ (bán kính $R$). Xác định độ cao trọng tâm $y_G$ của phần bản phẳng còn lại so với cạnh đáy.

**Bài giải:**

1. **Chọn hệ trục tọa độ $Oxy$:**
   - Gốc $O$ tại tâm của nửa đường tròn bị khoét trên cạnh đáy, trục $Oy$ thẳng đứng hướng lên (là trục đối xứng của vật $\implies x_G = 0$).
2. **Phân tích theo phương pháp diện tích âm:**
   - **Hình 1 (Hình chữ nhật nguyên vẹn $2R \times 2R$):**
     $$S_1 = 2R \cdot 2R = 4R^2, \qquad y_1 = R$$
   - **Hình 2 (Phần nửa hình tròn bán kính $R$ bị khoét bỏ — mang dấu âm):**
     $$S_2 = -\frac{1}{2}\pi R^2, \qquad y_2 = \frac{4R}{3\pi}$$
3. **Tính tung độ trọng tâm $y_G$:**
   $$y_G = \frac{S_1 y_1 + S_2 y_2}{S_1 + S_2} = \frac{4R^2 \cdot R - \left(\frac{1}{2}\pi R^2\right)\left(\frac{4R}{3\pi}\right)}{4R^2 - \frac{1}{2}\pi R^2} = \frac{4 - \frac{2}{3}}{4 - \frac{\pi}{2}} R = \frac{20}{3(8 - \pi)} R \approx 1.372\,R$$

---

## 5.4. BÀI TẬP TỰ RÈN LUYỆN (CÓ ĐÁP SỐ)

::: info Bài 5-1: Trọng tâm mặt cắt thép chữ U
Mặt cắt thép định hình chữ U có chiều rộng đáy $100\text{ mm}$, chiều cao hai cánh $150\text{ mm}$, bề dày thành đáy và hai cánh đều bằng $10\text{ mm}$. Xác định khoảng cách từ trục đối xứng và từ đáy ngoài đến trọng tâm $G$.
* **Đáp số:** Do tính đối xứng, $x_G = 50\text{ mm}$; áp dụng phương pháp ghép hình hoặc diện tích âm: $y_G \approx 58.7\text{ mm}$.
:::

::: info Bài 5-2: Trọng tâm đĩa tròn khoét lỗ lệch tâm
Một đĩa tròn đồng chất bán kính $R$ bị khoét một lỗ tròn có bán kính $r = R/2$. Tâm lỗ tròn khoét cách tâm đĩa một đoạn $d = R/2$. Xác định vị trí trọng tâm của phần đĩa còn lại.
* **Đáp số:** Sử dụng phương pháp diện tích âm: $x_G = -\frac{R}{6}$ (dịch về phía đối diện với lỗ khoét).
:::
