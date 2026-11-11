---
title: "Bài Tập Động Lực Học - Chương 2: Các Định Lý Tổng Quát Động Lực Học"
description: "Định lý chuyển động khối tâm, định lý biến thiên động lượng, mômen động lượng và định lý biến thiên động năng"
---

# Chương 2: Các Định Lý Tổng Quát Của Động Lực Học

::: tip Tóm tắt chương trình
Bốn định lý tổng quát là nền tảng cốt lõi của Động lực học giải tích, cho phép khảo sát chuyển động của hệ vật và vật rắn mà không cần phân tích chi tiết toàn bộ các nội lực liên kết bên trong hệ:
1. **Định lý chuyển động khối tâm:** $M \vec{a}_C = \sum \vec{F}_k^{(e)}$.
2. **Định lý biến thiên động lượng:** $\frac{d\vec{K}}{dt} = \sum \vec{F}_k^{(e)}$.
3. **Định lý biến thiên mômen động lượng:** $\frac{d\vec{L}_O}{dt} = \sum \vec{m}_O(\vec{F}_k^{(e)})$.
4. **Định lý biến thiên động năng:** $dT = d A^{(e)} + d A^{(i)}$ hoặc $T_2 - T_1 = \sum A_{1-2}$.
:::

---

## 1. Tóm Tắt Lý Thuyết & Công Thức Cốt Lõi

### 1.1. Các đại lượng động học đặc trưng của cơ hệ

| Đại lượng | Định nghĩa véctơ | Trường hợp vật rắn đặc biệt |
| :--- | :--- | :--- |
| **Khối tâm $C$** | $\vec{r}_C = \frac{1}{M} \sum m_i \vec{r}_i$ | Tâm đối xứng hình học nếu đồng chất |
| **Động lượng $\vec{K}$** | $\vec{K} = \sum m_i \vec{v}_i = M \vec{v}_C$ | Bằng khối lượng toàn hệ nhân vận tốc khối tâm |
| **Mômen động lượng $\vec{L}_O$** | $\vec{L}_O = \sum \vec{r}_i \times (m_i \vec{v}_i)$ | Quay quanh trục cố định $Oz$: $L_z = J_z \omega$ |
| **Động năng $T$** | $T = \frac{1}{2} \sum m_i v_i^2$ | Tịnh tiến: $T = \frac{1}{2} M v_C^2$<br>Quay: $T = \frac{1}{2} J_z \omega^2$<br>Song phẳng: $T = \frac{1}{2} M v_C^2 + \frac{1}{2} J_C \omega^2$ |

### 1.2. Công của các lực thông dụng
1. **Trọng lực:** $A_{1-2} = \pm P \Delta h$ ($+$ khi khối tâm hạ xuống, $-$ khi nâng lên).
2. **Lực đàn hồi lò xo:** $A_{1-2} = -\frac{1}{2} c (\lambda_2^2 - \lambda_1^2)$ ($\lambda$ là độ biến dạng).
3. **Ngẫu lực mômen $M$:** $A_{1-2} = \int_{\varphi_1}^{\varphi_2} M \, d\varphi$ (nếu $M = \text{const} \implies A = M \Delta\varphi$).
4. **Lực ma sát trượt:** $A_{\text{ms}} = -F_{\text{ms}} s = -f N s$.
5. **Nội lực của vật rắn tuyệt đối:** Tổng công của nội lực luôn triệt tiêu: $\sum d A^{(i)} = 0$.

---

## 2. Hướng Dẫn Lựa Chọn Định Lý Thích Hợp

- **Tìm vận tốc hoặc gia tốc theo quãng đường:** Ưu tiên **Định lý biến thiên động năng** vì phương trình chỉ chứa ngoại lực sinh công, tự động triệt tiêu các phản lực liên kết lý tưởng (không sinh công).
- **Tìm phản lực liên kết:** Dùng **Định lý chuyển động khối tâm** hoặc **Định lý Đalămbe**.
- **Cơ hệ chuyển động quay hoặc va đập:** Ưu tiên **Định lý biến thiên mômen động lượng**.

---

## 3. Bài Giải Mẫu Điển Hình

### Thí dụ 2-1: Cơ hệ gồm vật trượt trên nền ngang nối với vật treo qua ròng rọc có khối lượng

<div class="figure-container">

<img src="/figures/bai-tap/dong-luc-hoc/hinh_2_1.svg" alt="Hình 2-1: Cơ hệ hai vật nối qua ròng rọc có khối lượng" style="max-height: 260px;" />

<div class="figure-caption">

Hình 2-1: Khảo sát chuyển động của cơ hệ hai vật nối qua ròng rọc bằng định lý động năng

</div>

</div>

**Đề bài:**
Cơ hệ gồm:
- Vật $A$ khối lượng $m_1$ trượt trên mặt sàn nằm ngang có hệ số ma sát trượt $f$.
- Ròng rọc $B$ là đĩa tròn đồng chất khối lượng $m_0$, bán kính $R$, quay quanh trục nằm ngang cố định qua tâm $O$ (mômen quán tính $J_O = \frac{1}{2} m_0 R^2$).
- Vật $C$ khối lượng $m_2$ treo vào đầu dây rủ xuống.
Dây nhẹ, không dãn và không trượt trên rãnh ròng rọc. Hệ chuyển động từ trạng thái nghỉ.
1. Tính động năng $T$ của toàn cơ hệ theo vận tốc $v$ của vật $A$.
2. Tính tổng công của các ngoại lực khi vật $C$ hạ xuống một đoạn $s$.
3. Xác định gia tốc $a$ của vật và lực căng của các nhánh dây.

**Bài giải:**

**1. Động năng của toàn cơ hệ:**
Do dây không dãn và không trượt:
- Vận tốc của vật $A$ và vật $C$ bằng nhau: $v_A = v_C = v$.
- Vận tốc góc của ròng rọc: $\omega = \frac{v}{R}$.

Động năng của từng phần tử:
- Vật $A$ chuyển động tịnh tiến: $T_A = \frac{1}{2} m_1 v^2$.
- Ròng rọc $B$ quay quanh trục cố định $O$:
  $$T_B = \frac{1}{2} J_O \omega^2 = \frac{1}{2} \left(\frac{1}{2} m_0 R^2\right) \left(\frac{v}{R}\right)^2 = \frac{1}{4} m_0 v^2$$
- Vật $C$ chuyển động tịnh tiến: $T_C = \frac{1}{2} m_2 v^2$.

Tổng động năng của hệ:
$$T = T_A + T_B + T_C = \frac{1}{2} \left(m_1 + \frac{1}{2} m_0 + m_2\right) v^2$$

**2. Tổng công của ngoại lực:**
Khi vật $C$ hạ xuống một đoạn $s$, vật $A$ cũng trượt sang phải một đoạn $s$:
- Trọng lực vật $C$: $A(P_2) = m_2 g s$.
- Trọng lực $P_1$, phản lực pháp tuyến $N_1$, phản lực tại ổ $O$ đều vuông góc với hướng di chuyển nên không sinh công.
- Lực ma sát trượt tác dụng lên $A$: $F_{\text{ms}} = f N_1 = f m_1 g$.
  $$A(F_{\text{ms}}) = -F_{\text{ms}} s = -f m_1 g s$$
- Dây không dãn và các liên kết lý tưởng: $\sum A^{(i)} = 0$.

Tổng công của ngoại lực:
$$\sum A = m_2 g s - f m_1 g s = (m_2 - f m_1) g s$$
*(Điều kiện để hệ tự chuyển động từ trạng thái nghỉ là $m_2 > f m_1$).*

**3. Xác định gia tốc $a$:**
Áp dụng định lý biến thiên động năng dạng vi phân ($dT = dA$):
$$d\left[\frac{1}{2}\left(m_1 + \frac{1}{2} m_0 + m_2\right) v^2\right] = (m_2 - f m_1) g \, ds$$
$$\left(m_1 + \frac{1}{2} m_0 + m_2\right) v \, dv = (m_2 - f m_1) g \, ds$$

Vì $v \frac{dv}{ds} = a$, ta suy ra gia tốc không đổi của hệ:
$$a = \frac{m_2 - f m_1}{m_1 + \frac{1}{2} m_0 + m_2} g$$

---

### Thí dụ 2-2: Định lý chuyển động khối tâm và Định lý biến thiên mômen động lượng

**Đề bài:** Một thanh mảnh đồng chất $AB$ khối lượng $M$, chiều dài $l$ có thể quay tự do không ma sát trong mặt phẳng thẳng đứng quanh trục nằm ngang cố định đi qua đầu trên $A$. Ban đầu thanh được giữ nằm ngang rồi buông nhẹ không vận tốc đầu.
1. Áp dụng định lý động năng để tìm vận tốc góc $\omega$ của thanh khi đi qua vị trí thẳng đứng.
2. Áp dụng định lý biến thiên mômen động lượng đối với trục quay $A$ để tìm gia tốc góc $\varepsilon$ của thanh tại góc lệch $\varphi$ bất kỳ so với phương thẳng đứng.

**Bài giải:**

1. **Vận tốc góc khi thanh qua vị trí thẳng đứng ($\varphi = 0$):**
   - Động năng ban đầu: $T_0 = 0$.
   - Động năng khi qua vị trí thẳng đứng: $T_1 = \frac{1}{2} J_A \omega^2 = \frac{1}{2}\left(\frac{1}{3} M l^2\right)\omega^2 = \frac{1}{6} M l^2 \omega^2$.
   - Công của trọng lực khi khối tâm $C$ hạ xuống độ cao $h_C = \frac{l}{2}$: $A(P) = M g \frac{l}{2}$.
   - Theo định lý biến thiên động năng ($T_1 - T_0 = A$):
     $$\frac{1}{6} M l^2 \omega^2 = M g \frac{l}{2} \implies \omega = \sqrt{\frac{3g}{l}}$$
2. **Gia tốc góc tại vị trí góc lệch $\varphi$ bất kỳ:**
   - Mômen động lượng của thanh đối với trục quay $Az$: $L_{Az} = J_A \dot{\varphi} = \frac{1}{3} M l^2 \dot{\varphi}$.
   - Theo định lý biến thiên mômen động lượng đối với trục $Az$:
     $$\frac{d L_{Az}}{dt} = \sum m_{Az}(\vec{F}_k^{(e)}) \implies \frac{1}{3} M l^2 \ddot{\varphi} = -M g \frac{l}{2}\sin\varphi \implies \varepsilon = \ddot{\varphi} = -\frac{3g}{2l}\sin\varphi$$

---

## 4. Bài Tập Rèn Luyện Có Đáp Số

::: info Bài 2.1 (Định lý động lượng cho súng đại bác giật lùi)
Một khẩu đại bác khối lượng $M = 1000\text{ kg}$ đặt trên sàn nằm ngang không ma sát, bắn ra viên đạn khối lượng $m = 10\text{ kg}$ với vận tốc đầu nòng $u = 600\text{ m/s}$ hợp với phương ngang một góc $\alpha = 30^\circ$.
- **Đáp số:** Vận tốc giật lùi của súng: $V = \frac{m u \cos\alpha}{M + m} \approx 5.14\text{ m/s}$.
:::

::: info Bài 2.2 (Trụ lăn không trượt bằng định lý động năng)
Một hình trụ đặc đồng chất khối lượng $m$, bán kính $R$ lăn không trượt xuống một mặt phẳng nghiêng góc $\alpha$ so với phương ngang. Hệ số ma sát nghỉ đủ lớn để trụ không bị trượt.
- **Đáp số:** Gia tốc khối tâm: $a_C = \frac{2}{3} g \sin\alpha$. Lực ma sát tại điểm tiếp xúc: $F_{\text{ms}} = \frac{1}{3} m g \sin\alpha$.
:::

::: info Bài 2.3 (Bảo toàn mômen động lượng)
Một người khối lượng $m_1 = 60\text{ kg}$ đứng ở mép một sàn quay hình tròn đồng chất khối lượng $m_2 = 120\text{ kg}$, bán kính $R = 2\text{ m}$. Sàn đang quay tự do quanh trục thẳng đứng với vận tốc góc $\omega_0 = 1\text{ rad/s}$. Người đó đi dần từ mép sàn vào tâm sàn. Bỏ qua ma sát ở trục quay.
- **Đáp số:** Vận tốc góc của sàn khi người đến tâm: $\omega_1 = \left(1 + \frac{2 m_1}{m_2}\right) \omega_0 = 2\text{ rad/s}$.
:::
