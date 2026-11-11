---
title: "Bài Tập Tĩnh Học - Chương 4: Bài Toán Ma Sát"
layout: doc
---

# Chương 4: Bài Toán Ma Sát

> [!NOTE] Cơ sở lý thuyết liên quan
> Xem lý thuyết chi tiết về ma sát trượt, nón ma sát, hiện tượng tự hãm và ma sát lăn tại: **[Giáo trình Lý thuyết: Chương 3 – Ma Sát](/tinh-hoc/chuong-3)**.

Trong thực tế kỹ thuật, các bề mặt tiếp xúc không bao giờ hoàn toàn nhẵn bóng. Xuất hiện lực ma sát cản trở xu hướng trượt hoặc lăn tương đối giữa các vật.

---

## 4.1. CƠ SỞ LÝ THUYẾT

### 4.1.1. Ma sát trượt khô (Định luật Coulomb)
Khi hai vật thể ép vào nhau bởi lực nén pháp tuyến $N$ và có xu hướng trượt tương đối:
- Lực ma sát trượt $\vec{F}_{ms}$ luôn nằm trong mặt tiếp xúc, có chiều ngược với xu hướng chuyển động trượt tương đối.
- Khi vật ở trạng thái cân bằng tĩnh:
  $$F_{ms} \le F_{ms}^{\max} = f \cdot N$$
  trong đó $f$ là **hệ số ma sát trượt tĩnh** (đại lượng không thứ nguyên, phụ thuộc vào bản chất vật liệu và độ nhám bề mặt).

### 4.1.2. Phản lực toàn phần & Nón ma sát
Hợp lực của phản lực pháp tuyến $\vec{N}$ và lực ma sát trượt $\vec{F}_{ms}$ được gọi là **phản lực toàn phần** $\vec{R}$:
$$\vec{R} = \vec{N} + \vec{F}_{ms}$$
Góc $\varphi$ tạo bởi phản lực toàn phần $\vec{R}$ và pháp tuyến $\vec{N}$ được gọi là **góc ma sát**:
$$\tan\varphi = \frac{F_{ms}}{N} \le \frac{F_{ms}^{\max}}{N} = f \implies \varphi \le \varphi_{\max}$$
Vùng không gian hình nón đỉnh tại điểm tiếp xúc, trục là pháp tuyến $\vec{N}$ và góc nửa đỉnh bằng $\varphi_{\max}$ gọi là **nón ma sát**.
*Điều kiện cân bằng hình học:* Nếu đường tác dụng của hợp ngoại lực chủ động nằm bên trong nón ma sát thì vật luôn luôn ở trạng thái cân bằng bất kể độ lớn của ngoại lực lớn bao nhiêu (hiện tượng **tự hãm**).

### 4.1.3. Ma sát lăn
Khi một hình trụ hoặc quả cầu lăn trên mặt phẳng:
- Do biến dạng cục bộ tại vùng tiếp xúc, phản lực pháp tuyến $\vec{N}$ bị dịch về phía trước một đoạn $d$ theo chiều lăn.
- Để con lăn không bị lăn, ngẫu lực cản lăn $M_l$ phải thỏa mãn:
  $$M_l \le M_l^{\max} = k \cdot N$$
  trong đó $k$ là **hệ số ma sát lăn** (có thứ nguyên độ dài, đơn vị $\text{cm}$ hoặc $\text{m}$).

---

## 4.2. HƯỚNG DẪN ÁP DỤNG & PHƯƠNG PHÁP GIẢI

1. **Xác định chiều của lực ma sát trượt $\vec{F}_{ms}$:**
   - Giả sử bề mặt hoàn toàn nhẵn ($f = 0$) để xem điểm tiếp xúc có xu hướng trượt về phía nào; lực ma sát tĩnh $\vec{F}_{ms}$ luôn hướng **ngược lại** với xu hướng trượt đó.
   - Nếu bài toán yêu cầu tìm miền giá trị của lực chủ động $Q$ để vật cân bằng ($Q_{\min} \le Q \le Q_{\max}$), cần giải **hai bài toán giới hạn riêng biệt**:
     - Khi $Q = Q_{\min}$ (vật sắp trượt xuống): $\vec{F}_{ms}$ hướng lên trên và đạt cực đại $F_{ms} = f N$.
     - Khi $Q = Q_{\max}$ (vật sắp trượt lên): $\vec{F}_{ms}$ đổi chiều hướng xuống dưới và đạt cực đại $F_{ms} = f N$.
2. **Phân biệt trạng thái cân bằng thường và trạng thái cân bằng giới hạn:**
   - Ở trạng thái cân bằng bất kỳ: **tuyệt đối không** viết ngay $F_{ms} = f N$, mà phải giữ nguyên ẩn số $F_{ms}$ trong phương trình cân bằng rồi kiểm tra bất đẳng thức $|F_{ms}| \le f N$.
   - Chỉ khi vật ở trạng thái **sắp trượt (cân bằng giới hạn)** hoặc đang trượt mới áp dụng đẳng thức $F_{ms} = f N$.

---

## 4.3. BÀI GIẢI MẪU

### Thí dụ 4-1: Đai truyền trên vành bánh đai (Đai dẹt vs Đai thang)

**Đề bài:** Một đoạn đai truyền bị ép vào vành bánh đai bằng lực hướng tâm $\vec{P}$ (hoặc $\vec{N}$) và bị kéo theo phương tiếp tuyến bằng lực $\vec{Q}$. Biết hệ số ma sát trượt tĩnh giữa đai và vành đai là $f$. Tìm tỉ số giới hạn $\frac{Q}{P}$ để đai không bị trượt trong hai trường hợp:
1. Đai dẹt có tiết diện chữ nhật tiếp xúc mặt vành đai.
2. Đai hình thang cân có góc giữa hai cạnh bên rãnh nêm là $2\alpha$.

<div class="figure-container">

<img src="/figures/bai-tap/tinh-hoc/hinh_4_1.svg" alt="Hình 4-1: Hiệu ứng chêm rãnh đai hình thang và cân bằng vật trên mặt nghiêng nhám" style="max-width: 600px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 4-1: a) Phân tích phản lực trong rãnh đai hình thang cân góc 2α; b) Cân bằng vật trên mặt nghiêng có ma sát

</div>

</div>

**Bài giải:**

**1. Trường hợp đai dẹt (tiết diện chữ nhật):**
Lực tác dụng gồm lực ép pháp tuyến $\vec{P}$, phản lực pháp tuyến $\vec{N}$ của vành đai, lực kéo tiếp tuyến $\vec{Q}$ và lực ma sát trượt $\vec{F}_{ms}$.
Phương trình cân bằng:
$$N = P, \quad Q = F_{ms}$$
Điều kiện đai không bị trượt là:
$$F_{ms} \le f \cdot N \implies Q \le f \cdot P \implies \frac{Q}{P} \le f$$

**2. Trường hợp đai hình thang cân (rãnh nêm góc $2\alpha$):**
Đai nêm tiếp xúc với vành đai tại hai mặt nghiêng bên rãnh.
Do tính đối xứng, phản lực pháp tuyến tại mỗi cạnh bên là $N_1$, lực ép hướng tâm $P$ được cân bằng bởi hình chiếu của hai phản lực pháp tuyến:
$$2 N_1 \sin\alpha = P \implies N_1 = \frac{P}{2\sin\alpha}$$
Lực ma sát tổng cộng xuất hiện trên cả hai cạnh bên:
$$F_{ms}^{\text{tổng}} = 2 F_{ms1} \le 2 (f \cdot N_1) = 2 f \left(\frac{P}{2\sin\alpha}\right) = f \cdot \frac{P}{\sin\alpha}$$
Điều kiện đai không trượt dọc theo rãnh:
$$Q \le F_{ms}^{\text{tổng}} = \frac{f}{\sin\alpha} P \implies \frac{Q}{P} \le \frac{f}{\sin\alpha} = f'$$
trong đó $f' = \frac{f}{\sin\alpha}$ gọi là **hệ số ma sát tương đương** của rãnh nêm.
Vì $0 < \alpha < 90^\circ$ nên $\sin\alpha < 1 \implies f' > f$.

*Ý nghĩa kỹ thuật:* Rãnh đai hình thang làm tăng ma sát bám lên gấp $\frac{1}{\sin\alpha}$ lần so với đai dẹt thông thường (ví dụ với góc rãnh chuẩn $\alpha = 18^\circ$, $\sin 18^\circ \approx 0.31$, lực kéo truyền được tăng lên hơn 3 lần mà không bị trượt).

---

### Thí dụ 4-2: Thang tựa vào tường nhám và sàn nhám

**Đề bài:** Một chiếc thang đồng chất $AB$ dài $l$, trọng lượng $P$, đầu dưới $A$ tựa lên sàn ngang có hệ số ma sát $f_1$, đầu trên $B$ dựa vào tường thẳng đứng có hệ số ma sát $f_2$. Tìm góc nghiêng nhỏ nhất $\alpha_{\min}$ của thang so với mặt sàn để thang còn đứng yên không bị trượt ngã.

**Bài giải:**

**1. Phân tích lực ở trạng thái cân bằng giới hạn (thang sắp trượt xuống):**
- Đầu $A$ có xu hướng trượt ra xa tường $\implies \vec{F}_{msA}$ hướng vào tường, $F_{msA} = f_1 N_A$.
- Đầu $B$ có xu hướng trượt xuống dưới $\implies \vec{F}_{msB}$ hướng thẳng đứng lên, $F_{msB} = f_2 N_B$.

**2. Lập hệ phương trình cân bằng phẳng:**
$$\begin{cases}
\sum F_x = F_{msA} - N_B = f_1 N_A - N_B = 0 \implies N_B = f_1 N_A \\
\sum F_y = N_A + F_{msB} - P = N_A + f_2 N_B - P = 0 \implies N_A(1 + f_1 f_2) = P \\
\sum m_A(\vec{F}_k) = -P \frac{l}{2}\cos\alpha + N_B l\sin\alpha + F_{msB} l\cos\alpha = 0
\end{cases}$$

**3. Giải tìm góc giới hạn $\alpha_{\min}$:**
Chia phương trình mômen cho $l\cos\alpha$ và thay $N_B = f_1 N_A, F_{msB} = f_1 f_2 N_A$:
$$N_A f_1 \tan\alpha + N_A f_1 f_2 = \frac{1}{2}P = \frac{1}{2} N_A (1 + f_1 f_2)$$
$$\implies \tan\alpha_{\min} = \frac{1 - f_1 f_2}{2 f_1}$$

---

## 4.4. BÀI TẬP TỰ RÈN LUYỆN (CÓ ĐÁP SỐ)

::: info Bài 4-1: Vật trượt trên mặt phẳng nghiêng
Vật có trọng lượng $P$ đặt trên mặt phẳng nghiêng góc $\alpha$ so với mặt ngang. Hệ số ma sát trượt giữa vật và mặt phẳng là $f$. Tìm lực kéo $Q$ song song với mặt phẳng nghiêng để:
a) Giữ vật không bị trượt xuống dốc.
b) Kéo vật bắt đầu trượt đều lên dốc.
* **Đáp số:**
  - a) $Q \ge P(\sin\alpha - f\cos\alpha)$ (khi $\tan\alpha > f$).
  - b) $Q \ge P(\sin\alpha + f\cos\alpha)$.
:::

::: info Bài 4-2: Con lăn trên mặt dốc có ma sát lăn
Một hình trụ tròn đồng chất trọng lượng $P$, bán kính $R$ đặt trên mặt phẳng nghiêng góc $\alpha$. Hệ số ma sát trượt là $f$, hệ số ma sát lăn là $k$. Tìm điều kiện góc nghiêng $\alpha$ để con lăn:
a) Cân bằng đứng yên hoàn toàn.
b) Lăn không trượt xuống dốc.
* **Đáp số:**
  - a) $\tan\alpha \le \frac{k}{R}$.
  - b) $\frac{k}{R} < \tan\alpha \le f$.
:::
