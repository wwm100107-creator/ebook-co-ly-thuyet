# Chương 7: Lý Thuyết Va Chạm

Va chạm là một hiện tượng cơ học rất phổ biến trong tự nhiên và kỹ thuật (đóng cọc, dập kim loại, va chạm xe cộ, cơ cấu búa đập), đặc trưng bởi sự thay đổi vận tốc nhảy vọt trong một khoảng thời gian vô cùng ngắn dưới tác dụng của các lực cực lớn.

---

## 7.1. Định Nghĩa và Các Giả Thiết Cơ Bản

### 7.1.1. Hiện Tượng Va Chạm và Xung Lực Va Chạm

::: tip Định nghĩa
Va chạm là hiện tượng tương tác cơ học giữa các vật thể trong một khoảng thời gian cực kỳ ngắn $\tau$ (cỡ $10^{-3} \div 10^{-5}\text{ s}$), trong đó vận tốc của các điểm thuộc vật thay đổi một lượng hữu hạn và xuất hiện các lực tương tác tiếp xúc rất lớn gọi là **lực va chạm** (hay lực xung kích).
:::

Lực va chạm $\vec{F}_{\text{xk}}$ đạt cực đại rất lớn trong khoảng thời gian $\tau$. Tác dụng của lực va chạm được đặc trưng bằng **xung lượng va chạm**:

$$\vec{S} = \int_{0}^{\tau} \vec{F}_{\text{xk}} \, dt \tag{7-1}$$

Mặc dù $\tau \to 0$, nhưng vì $\vec{F}_{\text{xk}} \to \infty$ nên xung lượng $\vec{S}$ là một đại lượng hữu hạn xác định.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_7_1.svg" alt="Hình 7-1: Đồ thị biến thiên của lực va chạm theo thời gian" style="max-height: 250px;" />

<div class="figure-caption">

Hình 7-1: Biến thiên của lực va chạm xung kích trong thời gian cực ngắn $\tau$

</div>

</div>

---

### 7.1.2. Ba Giả Thiết Cơ Bản Của Lý Thuyết Va Chạm Cổ Điển

1. **Giả thiết về sự bất động hình học:** Trong khoảng thời gian va chạm cực ngắn $\tau$, độ dịch chuyển vị trí của các vật thể là vô cùng bé có thể bỏ qua. Vị trí hình học của cơ hệ tại thời điểm kết thúc va chạm coi như trùng với vị trí lúc bắt đầu va chạm.
2. **Giả thiết về sự bỏ qua các lực thông thường:** Các lực thông thường (không xung kích) như trọng lực, lực cản không khí, lực đàn hồi lò xo có độ lớn hữu hạn nên xung lượng của chúng trong thời gian $\tau \to 0$ là triệt tiêu. Do đó, trong các phương trình va chạm, chỉ giữ lại các lực xung kích va chạm và phản lực xung kích tại các liên kết.
3. **Giả thiết thực nghiệm Newton về hệ số hồi phục:** Quá trình va chạm chia làm hai giai đoạn: giai đoạn biến dạng (từ $0$ đến $\tau_1$, vận tốc tương đối giảm về 0) và giai đoạn hồi phục (từ $\tau_1$ đến $\tau$, các vật đẩy nhau ra xa).
   Tỉ số giữa xung lượng giai đoạn hồi phục $S_2$ và xung lượng giai đoạn biến dạng $S_1$ là một hằng số $k$ ($0 \le k \le 1$), gọi là **hệ số hồi phục**:

$$k = \frac{S_2}{S_1} = \frac{u_2 - u_1}{v_1 - v_2} \tag{7-2}$$

- **Va chạm hoàn toàn đàn hồi ($k = 1$):** Không có sự tiêu hao cơ năng do biến dạng.
- **Va chạm hoàn toàn mềm / dẻo ($k = 0$):** Hai vật sau va chạm dính liền với nhau và chuyển động cùng một vận tốc.
- **Va chạm đàn hồi một phần ($0 < k < 1$):** Trường hợp thực tế phổ biến nhất trong kỹ thuật.

---

## 7.2. Các Định Lý Tổng Quát Trong Quá Trình Va Chạm

Kí hiệu $\vec{v}, \vec{K}, \vec{L}_O$ là các đặc trưng trước va chạm và $\vec{v}', \vec{K}', \vec{L}'_O$ là các đặc trưng ngay sau va chạm.

### 7.2.1. Định Lý Biến Thiên Động Lượng Trong Va Chạm

::: tip Định lý
Độ biến thiên véctơ động lượng của cơ hệ trong quá trình va chạm bằng tổng hình học của tất cả các xung lượng va chạm của các ngoại lực tác dụng lên hệ:

$$\vec{K}' - \vec{K} = \sum_{k=1}^n \vec{S}_k^e \tag{7-3}$$
:::

Nếu hệ không chịu ngoại xung lực nào tác dụng ($\sum \vec{S}_k^e = \vec{0}$) thì động lượng của cơ hệ được bảo toàn trong va chạm:

$$\vec{K}' = \vec{K} \tag{7-4}$$

---

### 7.2.2. Định Lý Biến Thiên Mômen Động Lượng Trong Va Chạm

::: tip Định lý
Độ biến thiên mômen động lượng của cơ hệ đối với một điểm cố định $O$ (hay một trục cố định $z$) bằng tổng các mômen của tất cả các xung lượng va chạm của ngoại lực đối với điểm $O$ (hay trục $z$):

$$\vec{L}'_O - \vec{L}_O = \sum_{k=1}^n \vec{m}_O(\vec{S}_k^e) \tag{7-5}$$

$$L'_z - L_z = \sum_{k=1}^n m_z(\vec{S}_k^e) \tag{7-6}$$
:::

---

## 7.3. Va Chạm Thẳng Xuyên Tâm Của Hai Vật

Xét hai vật có khối lượng $m_1$ và $m_2$ chuyển động tịnh tiến dọc theo một đường thẳng nối tâm khối lượng của chúng trước và sau va chạm.
- Vận tốc trước va chạm: $u_1, u_2$.
- Vận tốc sau va chạm: $v_1, v_2$.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_7_2.svg" alt="Hình 7-2: Va chạm thẳng xuyên tâm của hai quả cầu" style="max-height: 250px;" />

<div class="figure-caption">

Hình 7-2: Vận tốc trước và sau va chạm thẳng xuyên tâm

</div>

</div>

### 7.3.1. Xác Định Vận Tốc Sau Va Chạm

Áp dụng định luật bảo toàn động lượng của hệ hai vật:

$$m_1 v_1 + m_2 v_2 = m_1 u_1 + m_2 u_2 \tag{7-7}$$

Kết hợp với định nghĩa hệ số hồi phục:

$$v_2 - v_1 = k(u_1 - u_2) \tag{7-8}$$

Giải hệ phương trình $(7-7)$ và $(7-8)$, ta tìm được vận tốc của hai vật sau va chạm:

$$\begin{cases} v_1 = \dfrac{m_1 u_1 + m_2 u_2 - k m_2 (u_1 - u_2)}{m_1 + m_2} \\[10pt] v_2 = \dfrac{m_1 u_1 + m_2 u_2 + k m_1 (u_1 - u_2)}{m_1 + m_2} \end{cases} \tag{7-9}$$

#### Các Trường Hợp Đặc Biệt:
1. **Va chạm mềm hoàn toàn ($k = 0$):**
   $$v_1 = v_2 = v = \frac{m_1 u_1 + m_2 u_2}{m_1 + m_2} \tag{7-10}$$
2. **Hai vật có khối lượng bằng nhau ($m_1 = m_2$) và đàn hồi hoàn toàn ($k = 1$):**
   $$v_1 = u_2; \quad v_2 = u_1 \tag{7-11}$$
   Hai vật trao đổi vận tốc cho nhau sau va chạm.

---

### 7.3.2. Tổn Thất Động Năng (Định Lý Carnot Trong Va Chạm)

::: tip Định lý Carnot
Độ giảm động năng (tổn thất cơ năng biến thành nhiệt năng và công biến dạng) trong va chạm thẳng xuyên tâm bằng động năng của chuyển động tương đối bị mất đi:

$$\Delta T = T_0 - T_1 = \frac{1 - k^2}{2} \cdot \frac{m_1 m_2}{m_1 + m_2} (u_1 - u_2)^2 \tag{7-12}$$
:::

- Khi $k = 1$ (đàn hồi hoàn toàn): $\Delta T = 0$ (bảo toàn động năng).
- Khi $k = 0$ (va chạm mềm): $\Delta T$ đạt giá trị cực đại lớn nhất.

---

## 7.4. Va Chạm Của Vật Quay Quanh Trục Cố Định. Tâm Va Chạm

Xét vật rắn có trục quay cố định $Oz$ chịu tác dụng của một xung lực va chạm $\vec{S}$. Khi va chạm xảy ra, tại trục quay xuất hiện phản xung lực $\vec{S}_O$ có thể làm gãy trục hoặc phá hủy các ổ trục đỡ.

### Tâm Va Chạm (Điểm $K$)

::: tip Định nghĩa tâm va chạm
Tâm va chạm là điểm thuộc vật rắn mà nếu đường tác dụng của xung lực va chạm vuông góc với mặt phẳng chứa trục quay và khối tâm đi qua điểm đó, thì **phản xung lực tại trục quay hoàn toàn triệt tiêu**:

$$\vec{S}_O = \vec{0} \tag{7-13}$$
:::

Khoảng cách từ trục quay $Oz$ đến tâm va chạm $K$:

$$h_K = \frac{J_z}{M \cdot d} = \frac{J_C + M d^2}{M d} = d + \frac{i_C^2}{d} \tag{7-14}$$

trong đó:
- $J_z$: Mômen quán tính của vật đối với trục quay $Oz$.
- $M$: Khối lượng toàn phần của vật.
- $d = OC$: Khoảng cách từ trục quay $Oz$ đến khối tâm $C$.
- $i_C$: Bán kính quán tính đối với trục trung tâm song song.

> **Ứng dụng kỹ thuật:** Điểm $K$ được ứng dụng để thiết kế điểm va chạm trên búa máy, tay đập cơ khí, vợt bóng bàn, gậy đánh bóng chày nhằm triệt tiêu lực giật phản hồi truyền vào cổ tay người cầm hoặc ổ trục máy móc.


---

## 7.5. Các Thí Dụ Áp Dụng (Bài Tập Mẫu)

::: tip Ý NGHĨA PHƯƠNG PHÁP
Lý thuyết va chạm nghiên cứu các quá trình biến thiên vận tốc xảy ra trong khoảng thời gian cực ngắn $\tau \to 0$ dưới tác dụng của các lực xung lượng rất lớn. Hai định lý cơ bản được áp dụng là Định lý biến thiên động lượng dạng xung lượng và Định lý biến thiên mômen động lượng dạng xung lượng.
:::

### Thí dụ 7-1: Va chạm thẳng xuyên tâm của hai quả cầu đàn hồi

**Đề bài:**
Hai quả cầu có khối lượng $m_1$ và $m_2$ chuyển động tịnh tiến dọc theo một đường thẳng nối tâm với các vận tốc tương ứng $v_1$ và $v_2$ ($v_1 > v_2$) đến va chạm xuyên tâm với nhau (Hình 7-3). Hệ số hồi phục khi va chạm là $k$ ($0 \le k \le 1$).
Xác định vận tốc $u_1, u_2$ của hai quả cầu ngay sau va chạm.

<div class="figure-box">
  <img src="/figures/dong-luc-hoc/hinh_7_3.svg" alt="Hình 7-3: Va chạm thẳng xuyên tâm hai quả cầu đàn hồi" style="max-width: 580px;" />
  <div class="figure-caption">Hình 7-3: Sơ đồ va chạm thẳng xuyên tâm của hai quả cầu khối lượng $m_1, m_2$ với hệ số hồi phục $k$</div>
</div>

**Bài giải:**

Chọn trục $Ox$ dọc theo đường thẳng nối tâm hai quả cầu theo chiều chuyển động.
Trong quá trình va chạm, các lực tác dụng tương hỗ giữa hai quả cầu là nội lực xung lượng, ngoại lực theo phương ngang bằng 0.

**1. Định luật bảo toàn động lượng dạng xung lượng:**
Động lượng của hệ trước và sau va chạm bằng nhau:
$$m_1 v_1 + m_2 v_2 = m_1 u_1 + m_2 u_2 \tag{a}$$

**2. Định nghĩa hệ số hồi phục $k$ (Định luật Newton về va chạm):**
Hệ số hồi phục $k$ bằng tỉ số giữa vận tốc phân kỳ sau va chạm và vận tốc tiếp cận trước va chạm:
$$k = \frac{u_2 - u_1}{v_1 - v_2} \implies u_2 - u_1 = k(v_1 - v_2) \tag{b}$$

**3. Giải hệ hai phương trình (a) và (b):**
Từ (b) rút ra: $u_2 = u_1 + k(v_1 - v_2)$, thay vào (a):
$$m_1 v_1 + m_2 v_2 = m_1 u_1 + m_2 [u_1 + k(v_1 - v_2)]$$
$$(m_1 + m_2) u_1 = m_1 v_1 + m_2 v_2 - k m_2(v_1 - v_2) = (m_1 - k m_2) v_1 + m_2 (1 + k) v_2$$
Suy ra vận tốc sau va chạm của quả cầu 1:
$$u_1 = \frac{(m_1 - k m_2) v_1 + m_2 (1 + k) v_2}{m_1 + m_2}$$

Tương tự, tính được vận tốc sau va chạm của quả cầu 2:
$$u_2 = \frac{m_1 (1 + k) v_1 + (m_2 - k m_1) v_2}{m_1 + m_2}$$

**4. Các trường hợp đặc biệt:**
- **Va chạm hoàn toàn đàn hồi ($k = 1$):** Động năng của hệ được bảo toàn. Nếu $m_1 = m_2$ thì $u_1 = v_2, \; u_2 = v_1$ (hai quả cầu trao đổi vận tốc cho nhau).
- **Va chạm hoàn toàn không đàn hồi / va chạm mềm ($k = 0$):** Sau va chạm hai vật dính liền chuyển động cùng vận tốc chung:
  $$u_1 = u_2 = u = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$$
