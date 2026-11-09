---
title: "Bài Tập Động Lực Học - Chương 8: Lý Thuyết Va Chạm"
description: "Xung lượng va chạm, định lý biến thiên động lượng khi va chạm, hệ số phục hồi và định lý Carnot"
---

# Chương 8: Lý Thuyết Va Chạm

::: tip Tóm tắt chương trình
Hiện tượng va chạm xảy ra trong khoảng thời gian vô cùng ngắn $\tau \to 0$ với các lực tương tác vô cùng lớn gọi là **lực va chạm** (xung lực). Trong khoảng thời gian này:
- Vị trí hình học của cơ hệ coi như không đổi.
- Bỏ qua các ngoại lực thông thường (như trọng lực) so với xung lực va chạm.
- Vận tốc của các vật thay đổi đột ngột từ $\vec{v}$ (trước va chạm) sang $\vec{u}$ (sau va chạm).
:::

---

## 1. Tóm Tắt Lý Thuyết & Công Thức Cốt Lõi

### 1.1. Xung lượng của lực va chạm
$$\vec{S} = \lim_{\tau \to 0} \int_0^\tau \vec{F}_{\text{vc}} \, dt$$

### 1.2. Các định lý tổng quát trong va chạm
1. **Định lý biến thiên động lượng:**
   $$\vec{K}_2 - \vec{K}_1 = M(\vec{u}_C - \vec{v}_C) = \sum \vec{S}_k^{(e)}$$
2. **Định lý biến thiên mômen động lượng đối với điểm $O$:**
   $$\vec{L}_{O,2} - \vec{L}_{O,1} = \sum \vec{r}_k \times \vec{S}_k^{(e)}$$
   Với vật quay quanh trục $Oz$:
   $$J_z (\omega_2 - \omega_1) = \sum m_z(\vec{S}_k^{(e)})$$

### 1.3. Hệ số phục hồi $k$ (Định luật Newton về va chạm)
Phân loại theo khả năng phục hồi biến dạng:
$$k = \frac{|u_{2n} - u_{1n}|}{|v_{1n} - v_{2n}|} \quad (0 \le k \le 1)$$
- **Va chạm hoàn toàn đàn hồi:** $k = 1$ (cơ năng bảo toàn tuyệt đối).
- **Va chạm thực tế (Đàn hồi một phần):** $0 < k < 1$.
- **Va chạm mềm (Hoàn toàn không đàn hồi):** $k = 0$ (sau va chạm hai vật dính liền, chuyển động cùng vận tốc $\vec{u}_1 = \vec{u}_2$).

### 1.4. Năng lượng mất mát khi va chạm (Định lý Carnot)
Đối với va chạm mềm ($k = 0$):
$$\Delta T = T_1 - T_2 = \frac{1}{2} \sum m_i (\vec{v}_i - \vec{u}_i)^2$$
Năng lượng mất mát bằng động năng của chuyển động mất đi (chuyển hóa thành nhiệt lượng và công biến dạng dẻo).

---

## 2. Bài Giải Mẫu Điển Hình

### Thí dụ 8-1: Va chạm thẳng của hai quả cầu đàn hồi

<div class="figure-container">

<img src="/figures/bai-tap/dong-luc-hoc/hinh_8_1.svg" alt="Hình 8-1: Va chạm thẳng trực tâm giữa hai quả cầu đàn hồi" style="max-height: 260px;" />

<div class="figure-caption">

Hình 8-1: Khảo sát va chạm thẳng trực tâm giữa hai quả cầu với hệ số phục hồi $k$

</div>

</div>

**Đề bài:**
Hai quả cầu trơn nhẵn có khối lượng $m_1$ và $m_2$ chuyển động tịnh tiến dọc theo đường thẳng nối tâm với các vận tốc ban đầu tương ứng là $v_1$ và $v_2$ ($v_1 > v_2$). Hệ số phục hồi khi va chạm là $k$.
1. Xác định vận tốc $u_1$ và $u_2$ của hai quả cầu ngay sau khi va chạm.
2. Xác định xung lượng va chạm $S$ tương tác giữa hai quả cầu.
3. Tính lượng động năng $\Delta T$ bị tiêu hao trong quá trình va chạm.
4. Xét các trường hợp riêng: va chạm đàn hồi ($k = 1$), va chạm mềm ($k = 0$) và hai quả cầu có cùng khối lượng ($m_1 = m_2$).

**Bài giải:**

**1. Thiết lập hệ phương trình va chạm:**
Chọn trục $Ox$ dọc theo đường tâm va chạm hướng theo chiều chuyển động ban đầu.
- Theo định lý biến thiên động lượng của toàn hệ (xung lực tương tác giữa 2 quả cầu là nội lực triệt tiêu lẫn nhau):
  $$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2 \tag{1}$$
- Theo định nghĩa hệ số phục hồi $k$:
  $$u_2 - u_1 = k (v_1 - v_2) \tag{2}$$

**2. Giải hệ phương trình tìm $u_1, u_2$:**
Từ (2), rút $u_2 = u_1 + k (v_1 - v_2)$ thay vào (1):
$$m_1 u_1 + m_2 [u_1 + k (v_1 - v_2)] = m_1 v_1 + m_2 v_2$$
$$(m_1 + m_2) u_1 = m_1 v_1 + m_2 v_2 - k m_2 (v_1 - v_2) = (m_1 - k m_2) v_1 + m_2 (1 + k) v_2$$

Do đó:
$$u_1 = \frac{(m_1 - k m_2) v_1 + m_2 (1 + k) v_2}{m_1 + m_2}$$
Tương tự:
$$u_2 = \frac{m_1 (1 + k) v_1 + (m_2 - k m_1) v_2}{m_1 + m_2}$$

**3. Xung lượng va chạm $S$:**
Áp dụng định lý động lượng cho riêng quả cầu 1:
$$-S = m_1 (u_1 - v_1) \implies S = m_1 (v_1 - u_1)$$
Thay biểu thức của $u_1$ vào:
$$S = (1 + k) \frac{m_1 m_2}{m_1 + m_2} (v_1 - v_2)$$

**4. Động năng tiêu hao ($\Delta T$):**
$$\Delta T = T_1 - T_2 = \frac{1}{2} (1 - k^2) \frac{m_1 m_2}{m_1 + m_2} (v_1 - v_2)^2$$

**5. Khảo sát các trường hợp đặc biệt:**
- **Va chạm đàn hồi ($k = 1$):**
  $$\Delta T = 0 \quad (\text{Bảo toàn động năng tuyệt đối})$$
  Nếu thêm $m_1 = m_2$:
  $$u_1 = v_2, \quad u_2 = v_1$$
  *(Hai vật trao đổi vận tốc cho nhau, hiện tượng xảy ra trong con lắc Newton).*
- **Va chạm mềm ($k = 0$):**
  $$u_1 = u_2 = u = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$$
  $$\Delta T = \frac{1}{2} \frac{m_1 m_2}{m_1 + m_2} (v_1 - v_2)^2 \quad (\text{Tổn thất cực đại theo định lý Carnot})$$

---

## 3. Bài Tập Rèn Luyện Có Đáp Số

::: info Bài 8.1 (Búa đóng cọc)
Đầu búa khối lượng $M = 500\text{ kg}$ rơi tự do từ độ cao $h = 2\text{ m}$ xuống một cọc bê tông khối lượng $m = 200\text{ kg}$. Coi va chạm là mềm ($k = 0$). Sau va chạm, cọc lún sâu vào đất một đoạn $s = 0.05\text{ m}$.
- **Đáp số:**
  - Vận tốc đầu búa ngay trước va chạm: $v = \sqrt{2gh} \approx 6.26\text{ m/s}$.
  - Vận tốc chung ngay sau va chạm: $u = \frac{M v}{M + m} \approx 4.47\text{ m/s}$.
  - Lực cản trung bình của đất: $R_{\text{đất}} \approx \frac{(M + m) u^2}{2s} + (M + m)g \approx 147\text{ kN}$.
:::

::: info Bài 8.2 (Tâm va chạm của vật rắn quay)
Thanh đồng chất khối lượng $M$, dài $l$, quay quanh bản lề cố định tại một đầu $O$. Viên đạn khối lượng $m$ bay tới theo phương vuông góc với thanh và găm vào thanh tại điểm $K$ cách $O$ một đoạn $h$.
- **Đáp số:** Để bản lề $O$ hoàn toàn không chịu xung lực phản lực tại thời điểm va chạm ($S_O = 0$), điểm bắn $K$ phải trùng với **tâm va chạm** của thanh: $h = \frac{J_O}{M d} = \frac{\frac{1}{3} M l^2}{M (l/2)} = \frac{2}{3} l$.
:::
