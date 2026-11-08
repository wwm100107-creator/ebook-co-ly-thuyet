# Chương 3: Ma Sát

## 3.1. Định Nghĩa và Phân Loại Ma Sát

Trong các chương trước, khi khảo sát các liên kết tựa ta đã giả thiết rằng bề mặt tiếp xúc là hoàn toàn nhẵn, tức bỏ qua lực cản trở chuyển động trượt tiếp xúc giữa các vật thể. Trong thực tế, các bề mặt tiếp xúc bao giờ cũng có độ nhám nhất định, sinh ra các lực cản trở chuyển động tương đối giữa các vật tiếp xúc, được gọi là **lực ma sát**.

### Phân Loại Ma Sát
- **Theo trạng thái chuyển động:**
  - *Ma sát trượt:* Xuất hiện khi hai vật thể có xu hướng trượt hoặc đang trượt tương đối trên nhau.
  - *Ma sát lăn:* Xuất hiện khi một vật thể (hình trụ, hình cầu, bánh xe) lăn trên bề mặt của vật thể khác.
- **Theo điều kiện bôi trơn:**
  - *Ma sát khô:* Khi không có chất bôi trơn giữa hai bề mặt tiếp xúc (đây là đối tượng nghiên cứu chính của Tĩnh học).
  - *Ma sát ướt (nhớt):* Khi giữa hai bề mặt tiếp xúc có lớp chất lỏng bôi trơn ngăn cách hoàn toàn.

---

## 3.2. Định Luật Ma Sát Trượt

### 3.2.1. Hiện Tượng Ma Sát Trượt

Xét một vật đặt trên mặt phẳng nằm ngang chịu tác dụng của trọng lực $\vec{P}$ và phản lực pháp tuyến $\vec{N}$ ($\vec{P} + \vec{N} = \vec{0}$).

Tác dụng lên vật một lực kéo nằm ngang $\vec{F}$ có xu hướng làm vật trượt. Khi lực kéo $F$ còn nhỏ, vật vẫn nằm yên. Điều đó chứng tỏ tại mặt tiếp xúc xuất hiện một lực cân bằng với lực $\vec{F}$, lực đó được gọi là **lực ma sát trượt tĩnh**, kí hiệu $\vec{F}_{\text{ms}}$:

$$\vec{F}_{\text{ms}} = -\vec{F}$$

Khi tăng dần lực kéo $F$, lực ma sát tĩnh $F_{\text{ms}}$ cũng tăng theo đến một giá trị cực đại $F_{\text{max}}$, tại đó vật bắt đầu rơi vào **trạng thái cân bằng giới hạn** (chuẩn bị trượt). Nếu lực kéo $F > F_{\text{max}}$, vật sẽ bắt đầu chuyển động trượt.

<div class="figure-container">
  <img src="/figures/tinh-hoc/hinh_3_1.svg" alt="Hình 3-1: Lực ma sát trượt và trạng thái cân bằng giới hạn" style="max-height: 260px;" />
  <div class="figure-caption">Hình 3-1: Sơ đồ lực ma sát trượt tác dụng lên vật</div>
</div>

---

### 3.2.2. Định Luật Coulomb Về Ma Sát Trượt Khô

::: tip Định luật Coulomb
1. Lực ma sát trượt tĩnh có độ lớn biến thiên trong khoảng từ 0 đến giá trị cực đại $F_{\text{max}}$:
   $$0 \le F_{\text{ms}} \le F_{\text{max}} \tag{3-1}$$
   Phương của $\vec{F}_{\text{ms}}$ nằm trong mặt phẳng tiếp xúc chung và có chiều ngược với xu hướng chuyển động trượt tương đối.

2. Độ lớn cực đại của lực ma sát trượt tĩnh tỉ lệ thuận với áp lực pháp tuyến $N$:
   $$F_{\text{max}} = f_0 \cdot N \tag{3-2}$$
   trong đó $f_0$ là **hệ số ma sát trượt tĩnh** (đại lượng không thứ nguyên), phụ thuộc vào bản chất vật liệu và độ nhẵn của hai bề mặt tiếp xúc.

3. Hệ số ma sát trượt tĩnh $f_0$ trong giới hạn thực tế không phụ thuộc vào diện tích bề mặt tiếp xúc hình học.

4. Khi vật chuyển động trượt tương đối, lực ma sát trượt động tỉ lệ với áp lực pháp tuyến:
   $$F_{\text{ms}} = f \cdot N \tag{3-3}$$
   với $f$ là **hệ số ma sát trượt động**, thông thường $f \le f_0$.
:::

---

### 3.2.3. Góc Ma Sát và Nón Ma Sát

Tại điểm tiếp xúc giữa hai vật, phản lực toàn phần $\vec{R}$ của mặt tựa gồm hai thành phần: phản lực pháp tuyến $\vec{N}$ và lực ma sát trượt $\vec{F}_{\text{ms}}$:

$$\vec{R} = \vec{N} + \vec{F}_{\text{ms}} \tag{3-4}$$

<div class="figure-container">
  <img src="/figures/tinh-hoc/hinh_3_2.svg" alt="Hình 3-2: Góc ma sát và nón ma sát" style="max-height: 280px;" />
  <div class="figure-caption">Hình 3-2: Phản lực toàn phần $\vec{R}$, góc ma sát $\phi_0$ và nón ma sát</div>
</div>

Khi vật ở trạng thái cân bằng giới hạn, phản lực toàn phần $\vec{R}$ lệch với pháp tuyến một góc lớn nhất $\phi_0$, được gọi là **góc ma sát**:

$$\tan \phi_0 = \frac{F_{\text{max}}}{N} = \frac{f_0 N}{N} = f_0 \implies \phi_0 = \arctan f_0 \tag{3-5}$$

Khi xu hướng trượt có thể xảy ra theo mọi phương trong mặt phẳng tiếp xúc, véctơ phản lực toàn phần giới hạn sẽ vạch nên một hình nón có đỉnh tại điểm tiếp xúc, trục là pháp tuyến của mặt tiếp xúc và góc ở đỉnh bằng $2\phi_0$. Hình nón đó được gọi là **nón ma sát**.

::: tip Hiện tượng tự hãm (Tự khóa)
Điều kiện để vật cân bằng dưới tác dụng của hệ ngoại lực là hợp lực của các ngoại lực tác dụng lên vật phải nằm **bên trong nón ma sát**.

Khi hợp lực ngoại lực nằm trong nón ma sát, vật hoàn toàn không thể bị đẩy trượt dù độ lớn của lực có tăng lên bao nhiêu chăng nữa. Hiện tượng này được gọi là **hiện tượng tự hãm** (ứng dụng trong nêm, ren ốc vít, bu lông).
:::

---

## 3.3. Định Luật Ma Sát Lăn

### 3.3.1. Hiện Tượng Ma Sát Lăn

Xét một con lăn hình trụ bán kính $r$, trọng lượng $P$ đặt trên mặt phẳng nằm ngang. Khi tác dụng lên tâm con lăn một lực kéo nằm ngang $\vec{F}$:
- Nếu bề mặt con lăn và mặt tựa là tuyệt đối cứng (không biến dạng), con lăn sẽ tiếp xúc theo một đường sinh và lực cản lăn bằng không.
- Trong thực tế, dưới tác dụng của tải trọng, cả con lăn và mặt tựa đều bị biến dạng cục bộ tại vùng tiếp xúc. Mặt tựa bị lún xuống tạo thành gờ cản trở chuyển động lăn phía trước.

Do sự phân bố không đối xứng của áp lực tiếp xúc, hợp lực của các phản lực pháp tuyến $\vec{N}$ bị dời về phía trước chuyển động một đoạn $\delta$.

<div class="figure-container">
  <img src="/figures/tinh-hoc/hinh_3_3.svg" alt="Hình 3-3: Ma sát lăn và cánh tay đòn cản lăn k" style="max-height: 270px;" />
  <div class="figure-caption">Hình 3-3: Sơ đồ phân tích lực và mômen ma sát lăn</div>
</div>

Cặp lực $(\vec{P}, \vec{N})$ tạo thành một ngẫu lực cản trở chuyển động quay của con lăn, gọi là **mômen ma sát lăn**:

$$M_{\text{msl}} = N \cdot \delta$$

Đoạn dịch chuyển $\delta$ tăng dần theo lực kéo $F$ cho đến khi đạt giá trị cực đại $k$, gọi là **hệ số ma sát lăn**:

$$\delta_{\text{max}} = k \tag{3-6}$$

### 3.3.2. Định Luật Ma Sát Lăn

::: tip Định luật ma sát lăn
Mômen ma sát lăn cực đại tỉ lệ thuận với áp lực pháp tuyến $N$:

$$M_{\text{msl}}^{\text{max}} = k \cdot N \tag{3-7}$$

trong đó $k$ là **hệ số ma sát lăn**, có thứ nguyên là độ dài (đơn vị thường đo bằng $\text{m}, \text{cm}$ hoặc $\text{mm}$).
:::

### 3.3.3. Điều Kiện Để Con Lăn Lăn Không Trượt

Để con lăn bắt đầu lăn mà không bị trượt:

$$F \cdot r \ge M_{\text{msl}}^{\text{max}} = k \cdot N \implies F \ge \frac{k}{r} N \tag{3-8}$$

Đồng thời, để con lăn không bị trượt tại điểm tựa:

$$F \le F_{\text{max}} = f_0 \cdot N \tag{3-9}$$

Do hệ số ma sát lăn $k$ rất nhỏ so với bán kính $r$ ($k \ll r$), lực cần thiết để làm một vật lăn nhỏ hơn rất nhiều lần so với lực cần thiết để kéo trượt cùng vật thể đó:

$$\frac{k}{r} \ll f_0$$

Đây chính là cơ sở vật lý giải thích vì sao ổ bi, ổ lăn và bánh xe được ứng dụng rộng rãi để giảm thiểu triệt để lực cản chuyển động trong kỹ thuật.
