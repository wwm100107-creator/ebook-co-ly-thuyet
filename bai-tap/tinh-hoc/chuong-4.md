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

## 4.2. BÀI GIẢI MẪU

### Thí dụ 4-1: Đai truyền trên vành bánh đai (Đai dẹt vs Đai thang)

**Đề bài:** Một đoạn đai truyền bị ép vào vành bánh đai bằng lực hướng tâm $\vec{P}$ và bị kéo theo phương tiếp tuyến bằng lực $\vec{Q}$. Biết hệ số ma sát trượt tĩnh giữa đai và vành đai là $f$. Tìm tỉ số giới hạn $\frac{Q}{P}$ để đai không bị trượt trong hai trường hợp:
1. Đai dẹt có tiết diện chữ nhật tiếp xúc mặt vành đai.
2. Đai hình thang cân có góc giữa hai cạnh bên rãnh nêm là $2\alpha$.

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

## 4.3. BÀI TẬP TỰ RÈN LUYỆN (CÓ ĐÁP SỐ)

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
