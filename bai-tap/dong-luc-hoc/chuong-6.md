---
title: "Bài Tập Động Lực Học - Chương 6: Động Lực Học Vật Rắn"
description: "Chuyển động quay quanh trục cố định, chuyển động song phẳng, phương trình vi phân và con quay hồi chuyển"
---

# Chương 6: Động Lực Học Vật Rắn

::: tip Tóm tắt chương trình
Chương này nghiên cứu phương trình vi phân chuyển động của vật rắn trong các dạng chuyển động cơ bản:
1. **Quay quanh trục cố định:** $J_z \varepsilon = J_z \ddot{\varphi} = \sum M_{zk}$.
2. **Chuyển động song phẳng:** Hệ phương trình vi phân chuyển động khối tâm và chuyển động quay quanh khối tâm.
3. **Quay quanh một điểm cố định & Hiệu ứng con quay (Gyroscope).**
:::

---

## 1. Tóm Tắt Lý Thuyết & Công Thức Cốt Lõi

### 1.1. Chuyển động quay quanh trục cố định ($Oz$)
$$J_z \frac{d\omega}{dt} = J_z \frac{d^2\varphi}{dt^2} = \sum M_{zk}^{(e)}$$
- $J_z = \int (x^2 + y^2) \, dm$: Mômen quán tính đối với trục quay $Oz$.
- Định lý Steiner-Huygens (Trục song song): $J_z = J_C + M d^2$.

### 1.2. Chuyển động song phẳng của vật rắn
Chọn khối tâm $C$ làm gốc quy chiếu:
$$\begin{cases}
M \ddot{x}_C = \sum F_{kx}^{(e)} \\
M \ddot{y}_C = \sum F_{ky}^{(e)} \\
J_C \ddot{\varphi} = \sum M_{C}(\vec{F}_k^{(e)})
\end{cases}$$
Nếu vật lăn không trượt trên bề mặt cố định có bán kính $R$:
- Liên kết động học: $v_C = \omega R, \quad a_C = \varepsilon R$.
- Tâm vận tốc tức thời $P$ là điểm tiếp xúc với mặt cố định ($v_P = 0$).
- Lực ma sát tại điểm tiếp xúc là **ma sát nghỉ** ($F_{\text{ms}} \le f_0 N$).

### 1.3. Con quay hồi chuyển đối xứng (Gyroscope)
Với con quay quay rất nhanh quanh trục đối xứng với vận tốc góc riêng $\omega_0$ rất lớn:
Mômen ngoại lực $\vec{M}_O$ tác dụng làm trục con quay tiến động với vận tốc góc tiến động $\vec{\Omega}$:
$$\vec{M}_O = \vec{\Omega} \times \vec{L}_O \approx \vec{\Omega} \times (J_z \omega_0 \vec{k})$$
Độ lớn vận tốc góc tiến động:
$$\Omega = \frac{M_O}{J_z \omega_0}$$
Quy tắc: Trục quay riêng $Oz$ luôn có xu hướng quay đuổi theo véctơ mômen ngoại lực $\vec{M}_O$ theo đường ngắn nhất.

---

## 2. Hướng Dẫn Áp Dụng & Phương Pháp Giải

1. **Cách lập phương trình vi phân chuyển động song phẳng không bị nhầm dấu:**
   - Luôn vẽ chiều dương giả thiết của gia tốc khối tâm $\vec{a}_C$ và gia tốc góc $\vec{\varepsilon}$ phù hợp với liên kết động học ($a_C = \varepsilon R$ theo chiều lăn không trượt).
   - Trong phương trình $J_C \varepsilon = \sum M_C(\vec{F}_k^{(e)})$, các mômen lấy đối với **khối tâm $C$** mang dấu dương khi cùng chiều với $\vec{\varepsilon}$.
2. **Kiểm tra điều kiện lăn không trượt:**
   - Sau khi giải hệ phương trình tìm được lực ma sát nghỉ $F_{\text{ms}}$ và phản lực pháp tuyến $N$, luôn kiểm tra điều kiện $|F_{\text{ms}}| \le f_0 N$. Nếu vi phạm, vật xảy ra hiện tượng **vừa lăn vừa trượt**, khi đó $a_C \neq \varepsilon R$ và phải thay bằng phương trình lực ma sát trượt $F_{\text{ms}} = f N$.

---

## 3. Bài Giải Mẫu Điển Hình

### Thí dụ 6-1: Khảo sát chuyển động lăn không trượt của hình trụ đặc trên dốc nghiêng

<div class="figure-container">

<img src="/figures/bai-tap/dong-luc-hoc/hinh_6_1.svg" alt="Hình 6-1: Hình trụ lăn thuần túy trên dốc nghiêng" style="max-height: 260px;" />

<div class="figure-caption">

Hình 6-1: Khảo sát chuyển động song phẳng lăn không trượt của trụ tròn trên mặt phẳng nghiêng

</div>

</div>

**Đề bài:**
Một hình trụ đặc đồng chất khối lượng $m$, bán kính $R$, mômen quán tính đối với trục khối tâm $J_C = \frac{1}{2} m R^2$, được thả không vận tốc ban đầu từ đỉnh một mặt phẳng nghiêng góc $\alpha$ so với phương ngang. Trụ lăn không trượt.
1. Lập các phương trình vi phân chuyển động song phẳng của hình trụ.
2. Xác định gia tốc khối tâm $a_C$, gia tốc góc $\varepsilon$ và lực ma sát nghỉ $F_{\text{ms}}$ tại điểm tiếp xúc.
3. Xác định điều kiện đối với hệ số ma sát nghỉ $f_0$ để trụ lăn thuần túy mà không bị trượt.

**Bài giải:**

**1. Phân tích lực tác dụng lên hình trụ:**
- Trọng lực $\vec{P} = m\vec{g}$ đặt tại khối tâm $C$.
- Phản lực pháp tuyến của dốc $\vec{N}$ vuông góc với mặt dốc tại điểm tiếp xúc $P$.
- Lực ma sát nghỉ $\vec{F}_{\text{ms}}$ tiếp xúc dọc mặt dốc, hướng lên phía trên để cản trở xu hướng trượt xuống.

**2. Thiết lập hệ phương trình vi phân:**
Chọn trục $Cx$ hướng xuống dọc mặt dốc, trục $Cy$ vuông góc với mặt dốc hướng lên:
- Chiếu chuyển động của khối tâm lên trục $Cx$:
  $$m a_C = m g \sin\alpha - F_{\text{ms}} \tag{1}$$
- Chiếu chuyển động của khối tâm lên trục $Cy$:
  $$0 = N - m g \cos\alpha \implies N = m g \cos\alpha \tag{2}$$
- Phương trình chuyển động quay quanh khối tâm $C$:
  Lực $\vec{P}$ và $\vec{N}$ đi qua khối tâm $C$ nên mômen bằng 0. Chỉ có lực ma sát $\vec{F}_{\text{ms}}$ tạo mômen:
  $$J_C \varepsilon = F_{\text{ms}} \cdot R \tag{3}$$

**3. Điều kiện lăn không trượt:**
Vì điểm tiếp xúc $P$ tức thời đứng yên ($v_P = 0$):
$$a_C = \varepsilon R \implies \varepsilon = \frac{a_C}{R} \tag{4}$$

Thay (4) vào (3):
$$F_{\text{ms}} = \frac{J_C \varepsilon}{R} = \frac{\frac{1}{2} m R^2 \frac{a_C}{R}}{R} = \frac{1}{2} m a_C \tag{5}$$

Thay (5) vào (1):
$$m a_C = m g \sin\alpha - \frac{1}{2} m a_C \implies \frac{3}{2} m a_C = m g \sin\alpha$$

Do đó:
$$a_C = \frac{2}{3} g \sin\alpha$$
$$F_{\text{ms}} = \frac{1}{2} m a_C = \frac{1}{3} m g \sin\alpha$$
$$\varepsilon = \frac{a_C}{R} = \frac{2 g \sin\alpha}{3 R}$$

**4. Điều kiện để trụ lăn không trượt:**
Lực ma sát nghỉ thực tế không được vượt quá lực ma sát nghỉ cực đại của định luật Coulomb:
$$F_{\text{ms}} \le f_0 N$$
$$\frac{1}{3} m g \sin\alpha \le f_0 (m g \cos\alpha)$$
$$f_0 \ge \frac{1}{3} \tan\alpha$$
*Kết luận:* Nếu hệ số ma sát $f_0 < \frac{1}{3}\tan\alpha$, hình trụ sẽ vừa lăn vừa trượt.

---

## 4. Bài Tập Rèn Luyện Có Đáp Số

::: info Bài 6.1 (Con lăn hai tầng - Ròng rọc vi sai)
Một ống chỉ có bán kính vành ngoài $R$ và bán kính lõi trong $r$. Một sợi dây quấn vào lõi trong và được kéo bởi lực nằm ngang $F$. Đặt ống chỉ trên sàn ngang, ma sát đủ để không trượt.
- **Đáp số:**
  - Nếu dây kéo ra từ mép dưới lõi: Ống chỉ lăn sang phải (cùng chiều lực kéo).
  - Nếu dây kéo ra từ mép trên lõi: Ống chỉ cũng lăn sang phải.
  - Gia tốc khối tâm: $a_C = \frac{F (R \pm r) R}{J_C + m R^2}$.
:::

::: info Bài 6.2 (Tiến động của con quay đồ chơi)
Con quay có khối lượng $m = 0.5\text{ kg}$, bán kính quán tính đối với trục quay đối xứng $\rho = 4\text{ cm}$ ($J_z = m \rho^2$), quay quanh trục riêng với tốc độ $n = 3000\text{ vòng/phút}$. Trọng tâm $C$ cách điểm tựa nhọn $O$ một đoạn $d = 5\text{ cm}$. Trục con quay nghiêng góc $\theta = 30^\circ$ so với phương thẳng đứng.
- **Đáp số:** Vận tốc góc tiến động: $\Omega = \frac{m g d}{J_z \omega_0} \approx 0.976\text{ rad/s} \approx 9.3\text{ vòng/phút}$.
:::
