---
title: "Chặng 3 (Ngày 13 – Ngày 17): Bứt Phá Động Lực Học & Cơ Học Giải Tích (65 → 90 Điểm)"
layout: doc
---

# Chặng 3 (Ngày 13 – Ngày 17): Bứt Phá Động Lực Học & Cơ Học Giải Tích (`65 → 90 Điểm`)

Chào mừng bạn bước vào **Chặng 3** của lộ trình ôn thi cấp tốc. Nếu Tĩnh học và Động học giúp bạn nắm chắc `65 điểm` nền tảng, thì **Động lực học và Cơ học giải tích** chính là khu vực quyết định để bứt phá lên mốc `90 điểm`. Toàn bộ 5 ngày học dưới đây được thiết kế theo cấu trúc đồng nhất: **(1) Mục tiêu điểm số & Kiến thức cốt lõi**, **(2) Thuật toán giải từng bước**, **(3) Ví dụ minh họa giải chi tiết 100% ra số**, và **(4) Bẫy hay sai & Bài tập tự luyện có đáp số**, khép lại bằng **Đề Kiểm Tra Chốt Chặng 3 (45 phút)**.

::: tip Bản đồ tổng quan Chặng 3 (`65 → 90 điểm`)
| Ngày | Chủ đề trọng tâm | Mục tiêu điểm | Liên kết giáo trình & bài tập |
| :--- | :--- | :--- | :--- |
| **Ngày 13** | Hệ tiên đề, PTVP chất điểm, Dao động & Chuyển động tương đối | `65 → 70 điểm` | [Chương 1](/dong-luc-hoc/chuong-1), [Chương 2](/dong-luc-hoc/chuong-2), [BT C.1](/bai-tap/dong-luc-hoc/chuong-1), [BT C.7](/bai-tap/dong-luc-hoc/chuong-7) |
| **Ngày 14** | Động lượng, Khối tâm, Mômen động lượng & Huygens–Steiner | `70 → 75 điểm` | [Chương 3](/dong-luc-hoc/chuong-3), [BT C.2](/bai-tap/dong-luc-hoc/chuong-2) |
| **Ngày 15** | Công, Động năng (hữu hạn & vi phân) & Vật rắn song phẳng | `75 → 80 điểm` | [Chương 3](/dong-luc-hoc/chuong-3), [BT C.2](/bai-tap/dong-luc-hoc/chuong-2), [BT C.6](/bai-tap/dong-luc-hoc/chuong-6) |
| **Ngày 16** | Nguyên lý Đalămbe, Phản lực động ổ trục & Cân bằng động rôto | `80 → 85 điểm` | [Chương 5](/dong-luc-hoc/chuong-5), [BT C.4](/bai-tap/dong-luc-hoc/chuong-4) |
| **Ngày 17** | Công ảo, Lagrange loại II, Lý thuyết va chạm & Đề chốt chặng | `85 → 90 điểm` | [Chương 4](/dong-luc-hoc/chuong-4), [Chương 6](/dong-luc-hoc/chuong-6), [Chương 7](/dong-luc-hoc/chuong-7), [BT C.3](/bai-tap/dong-luc-hoc/chuong-3), [BT C.5](/bai-tap/dong-luc-hoc/chuong-5), [BT C.8](/bai-tap/dong-luc-hoc/chuong-8) |
:::

---

## Ngày 13 (`65 → 70 Điểm`): Hệ Tiên Đề, Tích Phân PTVP Chất Điểm, Dao Động & Chuyển Động Tương Đối

### 1. Mục tiêu điểm số & Kiến thức cốt lõi cô đọng

- **Mục tiêu (`65 → 70 điểm`):** Giải thành thạo bài toán thuận – nghịch của chất điểm, tách biến tích phân PTVP $m\ddot{x} = F_x$, nhận diện nhanh các chế độ dao động (tự do, tắt dần, cưỡng bức, cộng hưởng), và thiết lập đúng PTVP chuyển động tương đối trong hệ quy chiếu không quán tính.
- **Đọc sâu giáo trình:** [Chương 1: Khái niệm & Hệ tiên đề](/dong-luc-hoc/chuong-1) | [Chương 2: PTVP chuyển động](/dong-luc-hoc/chuong-2) | [Bài tập Chương 1](/bai-tap/dong-luc-hoc/chuong-1) | [Bài tập Chương 7](/bai-tap/dong-luc-hoc/chuong-7)

#### a) Hệ tiên đề Động lực học (4 Định luật Newton) & Hai bài toán cơ bản
1. **Định luật 1 (Quán tính):** $\sum\vec{F}_k = \vec{0} \implies \vec{v} = \text{const}$ (xác lập khái niệm hệ quy chiếu quán tính).
2. **Định luật 2 (Cơ bản):** Trong hệ quy chiếu quán tính, gia tốc của chất điểm có phương chiều trùng hợp lực tác dụng và tỉ lệ nghịch với khối lượng:
   $$m\vec{a} = m\frac{d^2\vec{r}}{dt^2} = \sum_{k=1}^n \vec{F}_k$$
3. **Định luật 3 (Tác dụng & Phản tác dụng):** $\vec{F}_{12} = -\vec{F}_{21}$ (cùng đường tác dụng, ngược chiều, độ lớn bằng nhau nhưng đặt lên **hai vật khác nhau** nên không tự triệt tiêu khi tách vật).
4. **Định luật 4 (Độc lập tác dụng):** $\vec{a} = \sum_{k=1}^n \vec{a}_k = \dfrac{1}{m}\sum_{k=1}^n \vec{F}_k$.

- **Hai bài toán cơ bản của Động lực học:**
  - **Bài toán thuận (Bài toán 1):** Cho khối lượng $m$ và quy luật chuyển động $\vec{r}(t)$ $\to$ lấy đạo hàm bậc hai tìm gia tốc $\vec{a} = \ddot{\vec{r}}$, từ đó tính trực tiếp hợp lực $\vec{F} = m\ddot{\vec{r}}$.
  - **Bài toán ngược (Bài toán 2):** Cho khối lượng $m$, biểu thức lực $\vec{F}(t, \vec{r}, \dot{\vec{r}})$ và điều kiện ban đầu $\vec{r}(t_0) = \vec{r}_0, \; \vec{v}(t_0) = \vec{v}_0$ $\to$ lập và tích phân PTVP cấp hai $m\ddot{\vec{r}} = \vec{F}$, dùng điều kiện ban đầu để tìm các hằng số tích phân.

#### b) Tích phân phương trình vi phân chuyển động chất điểm
Với chất điểm chuyển động dọc trục $Ox$, PTVP cơ bản có dạng $m\ddot{x} = F_x$. Tổng quát trong không gian, xét trên hệ tọa độ Descartes và hệ tọa độ tự nhiên Frenet $(\vec{\tau}, \vec{n}, \vec{b})$:

$$\begin{cases} m\ddot{x} = \sum F_{kx} \\ m\ddot{y} = \sum F_{ky} \\ m\ddot{z} = \sum F_{kz} \end{cases} \qquad \text{và} \qquad \begin{cases} m\dfrac{dv}{dt} = m\ddot{s} = \sum F_{k\tau} \\ m\dfrac{v^2}{\rho} = \sum F_{kn} \\ 0 = \sum F_{kb} \end{cases}$$

Tùy dạng lực tác dụng dọc theo trục chuyển động $Ox$, chọn phép biến đổi vi phân tương ứng:
- **Lực chỉ phụ thuộc thời gian $F_x = F(t)$:** Dùng $\ddot{x} = \dfrac{dv_x}{dt} \implies dv_x = \dfrac{F(t)}{m}\,dt$, tích phân hai lần liên tiếp.
- **Lực phụ thuộc vận tốc $F_x = F(v)$:**
  - Tìm $v(t)$: tách biến $\dfrac{dv}{F(v)} = \dfrac{dt}{m}$.
  - Tìm $v(x)$ hoặc quãng đường $x(v)$: dùng $\ddot{x} = v\dfrac{dv}{dx} \implies \dfrac{v\,dv}{F(v)} = \dfrac{dx}{m}$.
- **Lực phụ thuộc vị trí $F_x = F(x)$:** Dùng $m v\dfrac{dv}{dx} = F(x) \implies \dfrac{1}{2}mv^2 - \dfrac{1}{2}mv_0^2 = \displaystyle\int_{x_0}^{x} F(x)\,dx$.

#### c) Dao động cơ học 1 bậc tự do của chất điểm
1. **Dao động tự do không cản:** Khi chất điểm chịu lực hồi phục tuyến tính $F_x = -cx$ (lò xo độ cứng $c$):
   $$\ddot{x} + \omega_0^2 x = 0 \quad \left(\omega_0 = \sqrt{\frac{c}{m}}\right)$$
   Nghiệm: $x(t) = A\cos(\omega_0 t + \varphi_0) = C_1\cos\omega_0 t + C_2\sin\omega_0 t$, với chu kỳ $T_0 = \dfrac{2\pi}{\omega_0}$ và biên độ $A = \sqrt{x_0^2 + \left(\dfrac{v_0}{\omega_0}\right)^2}$. Nếu lò xo treo thẳng đứng chịu thêm trọng lực, chọn gốc tọa độ tại vị trí cân bằng tĩnh ($\Delta l_{\text{tĩnh}} = \frac{mg}{c}$) thì PTVP vẫn giữ nguyên dạng $\ddot{x} + \omega_0^2 x = 0$.
2. **Dao động tắt dần:** Khi có thêm lực cản nhớt $F_c = -\beta\dot{x}$ ($\beta > 0$):
   $$\ddot{x} + 2n\dot{x} + \omega_0^2 x = 0 \quad \left(2n = \frac{\beta}{m}\right)$$
   - **Cản yếu ($n < \omega_0$):** $x(t) = e^{-nt}\left(C_1\cos\omega_* t + C_2\sin\omega_* t\right) = A_0 e^{-nt}\cos(\omega_* t + \varphi_0)$, trong đó tần số góc dao động tắt dần là $\omega_* = \sqrt{\omega_0^2 - n^2}$, chu kỳ $T_* = \dfrac{2\pi}{\omega_*}$, biên độ giảm dần theo quy luật $e^{-nt}$.
   - **Cản tới hạn ($n = \omega_0$) và cản lớn ($n > \omega_0$):** Không còn dao động tuần hoàn; vật tiệm cận đơn điệu về vị trí cân bằng.
3. **Dao động cưỡng bức & Cộng hưởng:** Khi chịu thêm ngoại lực điều hòa $F_{\text{kb}}(t) = H\cos\Omega t$ ($h = H/m$):
   $$\ddot{x} + 2n\dot{x} + \omega_0^2 x = h\cos\Omega t$$
   Sau khi thành phần dao động tắt dần tiêu tan, nghiệm dao động cưỡng bức ổn định có dạng $x_{\text{cb}}(t) = B\cos(\Omega t - \psi)$ với:
   $$B = \frac{h}{\sqrt{(\omega_0^2 - \Omega^2)^2 + 4n^2\Omega^2}}, \qquad \tan\psi = \frac{2n\Omega}{\omega_0^2 - \Omega^2}$$
   - **Hiện tượng cộng hưởng:** Khi lực cản nhỏ ($n \ll \omega_0$) và tần số kích động $\Omega \approx \omega_0$ (chính xác là $\Omega_{\text{ch}} = \sqrt{\omega_0^2 - 2n^2}$), mẫu số đạt cực tiểu làm biên độ $B$ tăng vọt tới cực đại $B_{\max} \approx \dfrac{h}{2n\omega_0}$. Nếu hoàn toàn không cản ($n = 0$) và $\Omega = \omega_0$, biên độ tăng vô hạn tuyến tính theo thời gian.

#### d) Chuyển động tương đối trong hệ quy chiếu không quán tính
Khi khảo sát chất điểm trong hệ quy chiếu động (hệ quy chiếu không quán tính gắn với vật mang chuyển động theo với vận tốc góc $\vec{\omega}_e$ và gia tốc theo $\vec{a}_e$):

$$m\vec{a}_r = \sum \vec{F}_k + \vec{F}_{\text{qt}}^e + \vec{F}_{\text{qt}}^c$$

trong đó:
- $\sum\vec{F}_k$: Tổng các lực thực (lực hoạt động và phản lực liên kết).
- $\vec{F}_{\text{qt}}^e = -m\vec{a}_e$: **Lực quán tính theo** (ngược chiều $\vec{a}_e$). Nếu hệ động quay đều với vận tốc góc $\omega_e$, $\vec{a}_e = \vec{a}_e^n$ hướng vào trục quay nên $\vec{F}_{\text{qt}}^e$ là **lực quán tính ly tâm** hướng vuông góc ra xa trục quay, độ lớn $m\omega_e^2 r_n$.
- $\vec{F}_{\text{qt}}^c = -m\vec{a}_c = -2m(\vec{\omega}_e \times \vec{v}_r)$: **Lực quán tính Coriolis**, độ lớn $F_{\text{qt}}^c = 2m\omega_e v_r\sin(\vec{\omega}_e, \vec{v}_r)$.
- **Cân bằng tương đối ($\vec{v}_r = \vec{0}, \vec{a}_r = \vec{0}$):** Vì $\vec{v}_r = \vec{0} \implies \vec{F}_{\text{qt}}^c = \vec{0}$, điều kiện cân bằng rút gọn thành $\sum\vec{F}_k + \vec{F}_{\text{qt}}^e = \vec{0}$.

---

### 2. Thuật toán giải từng bước

1. **Bước 1 — Định vị bài toán:** Phân biệt ngay bài toán **thuận** (biết $x(t), y(t)$ tìm lực), bài toán **ngược tích phân PTVP**, bài toán **dao động**, hay bài toán **chuyển động tương đối** (khảo sát chất điểm trượt trong ống/rãnh/sàn đang chuyển động).
2. **Bước 2 — Phân tích hệ lực:**
   - Trong hệ quy chiếu quán tính: chỉ đặt trọng lực, đàn hồi, lực cản, ma sát và phản lực liên kết $\vec{N}$.
   - Trong hệ quy chiếu không quán tính: đặt thêm $\vec{F}_{\text{qt}}^e = -m\vec{a}_e$ và $\vec{F}_{\text{qt}}^c = -2m(\vec{\omega}_e \times \vec{v}_r)$ ở vế phải cùng các lực thực, trong khi vế trái là $m\vec{a}_r$.
3. **Bước 3 — Chiếu phương trình và chuẩn hóa:**
   - Chọn trục tọa độ theo phương chuyển động (hoặc theo rãnh trượt trong hệ động).
   - Chiếu lên phương chuyển động để lấy PTVP; chiếu lên hai phương vuông góc còn lại để tính phản lực liên kết $\vec{N}$ (và áp lực lên thành rãnh).
4. **Bước 4 — Giải PTVP và áp đặt điều kiện ban đầu:**
   - Nếu tách biến: thế $v(0) = v_0, x(0) = x_0$ ngay sau mỗi lần tích phân để khử hằng số nhanh gọn.
   - Nếu là phương trình tuyến tính hệ số hằng ($\ddot{x} + 2n\dot{x} + \omega_0^2 x = \dots$ hoặc $\ddot{x} - \omega^2 x = 0$): viết phương trình đặc trưng tìm nghiệm tổng quát rồi giải hệ 2 ẩn tìm $C_1, C_2$.
5. **Bước 5 — Kiểm tra vật lý:** Kiểm tra thứ nguyên ($\text{N}$, $\text{rad/s}$, $\text{m/s}$), chiều của lực Coriolis và điều kiện tiếp xúc ($N \ge 0$).

---

### 3. Ví dụ minh họa giải chi tiết 100% ra số

::: info Ví dụ 13-1: Bài toán thuận & Bài toán ngược tích phân PTVP
1. *(Bài toán thuận)* Chất điểm khối lượng $m = 2\text{ kg}$ chuyển động trong mặt phẳng $Oxy$ theo quy luật $x = 3t^2\text{ (m)}$, $y = 4\sin(2t)\text{ (m)}$. Xác định véctơ hợp lực $\vec{F}$ và độ lớn của hợp lực tại thời điểm $t = \frac{\pi}{4}\text{ s}$.
2. *(Bài toán ngược)* Một ca nô khối lượng $m = 400\text{ kg}$ đang chạy thẳng với vận tốc $v_0 = 8\text{ m/s}$ thì tắt máy. Lực cản của nước tỉ lệ bậc nhất với vận tốc: $R_c = 20 v\text{ (N)}$. Tính thời gian $t$ và quãng đường $s$ ca nô đi được cho đến khi vận tốc giảm xuống còn $v_1 = 2\text{ m/s}$.
:::

**Lời giải chi tiết:**

**Phần 1 (Bài toán thuận):**
- Đạo hàm hai lần theo thời gian $t$ các tọa độ chuyển động:
  $$\dot{x} = 6t \implies \ddot{x} = 6\text{ m/s}^2$$
  $$\dot{y} = 8\cos(2t) \implies \ddot{y} = -16\sin(2t)\text{ m/s}^2$$
- Áp dụng Định luật 2 Newton theo hai trục tọa độ:
  $$F_x = m\ddot{x} = 2 \times 6 = 12\text{ N}$$
  $$F_y = m\ddot{y} = 2 \times \big(-16\sin(2t)\big) = -32\sin(2t)\text{ N}$$
- Tại $t = \frac{\pi}{4}\text{ s}$, ta có $\sin\left(2 \cdot \frac{\pi}{4}\right) = \sin\frac{\pi}{2} = 1$:
  $$\vec{F} = 12\vec{i} - 32\vec{j}\text{ (N)}$$
  $$F = \sqrt{12^2 + (-32)^2} = \sqrt{144 + 1024} = \sqrt{1168} = 4\sqrt{73} \approx 34{,}18\text{ N}$$

**Phần 2 (Bài toán ngược):**
- Chọn trục $Ox$ theo chiều chuyển động của ca nô, gốc $O$ tại vị trí tắt máy ($t = 0 \implies s = 0, \; v = v_0 = 8\text{ m/s}$).
- Lực cản ngược chiều chuyển động: $F_x = -R_c = -20v$. PTVP chuyển động:
  $$m\frac{dv}{dt} = -20v \implies 400\frac{dv}{dt} = -20v \implies \frac{dv}{v} = -0{,}05\,dt$$
- Tích phân hai vế từ $t = 0$ ($v = 8$) đến thời điểm $t$ ($v = v_1 = 2$):
  $$\int_{8}^{2} \frac{dv}{v} = -0{,}05 \int_{0}^{t} dt \implies \ln\frac{2}{8} = -0{,}05\,t \implies -\ln 4 = -0{,}05\,t$$
  $$t = \frac{\ln 4}{0{,}05} = 20\ln 4 \approx 27{,}73\text{ s}$$
- Để tìm quãng đường $s$, thay $\frac{dv}{dt} = v\frac{dv}{ds}$ vào PTVP:
  $$400 v\frac{dv}{ds} = -20v \implies dv = -0{,}05\,ds \quad (\text{vì } v > 0)$$
- Tích phân từ $s = 0$ ($v = 8$) đến $s$ ($v = 2$):
  $$2 - 8 = -0{,}05\,s \implies s = \frac{6}{0{,}05} = 120\text{ m}$$

---

::: info Ví dụ 13-2: Dao động tắt dần & Dao động cưỡng bức – Cộng hưởng
Một chất điểm khối lượng $m = 2\text{ kg}$ gắn vào lò xo có độ cứng $c = 200\text{ N/m}$, chuyển động trên mặt ngang không ma sát trong môi trường cản nhớt có hệ số cản $\beta = 4\text{ N}\cdot\text{s/m}$.
1. Khi không có ngoại lực kích động, tại $t = 0$ kéo vật lệch khỏi vị trí cân bằng đoạn $x_0 = 0{,}1\text{ m}$ rồi thả nhẹ ($v_0 = 0$). Tìm tần số góc riêng $\omega_0$, hệ số cản $n$, tần số góc tắt dần $\omega_*$ và viết phương trình dao động $x(t)$.
2. Sau đó tác dụng thêm lực cưỡng bức điều hòa $F(t) = 10\cos(9t)\text{ (N)}$. Tính biên độ dao động cưỡng bức ổn định $B$ và tính biên độ cực đại $B_{\max}$ khi xảy ra cộng hưởng ($\Omega \approx \omega_0$).
:::

**Lời giải chi tiết:**

**1. Dao động tắt dần tự do:**
- Tần số góc riêng không cản:
  $$\omega_0 = \sqrt{\frac{c}{m}} = \sqrt{\frac{200}{2}} = 10\text{ rad/s}$$
- Hệ số cản quy đổi $n$:
  $$2n = \frac{\beta}{m} = \frac{4}{2} = 2\text{ s}^{-1} \implies n = 1\text{ s}^{-1}$$
- Vì $n = 1 < \omega_0 = 10$, hệ dao động tắt dần với tần số góc:
  $$\omega_* = \sqrt{\omega_0^2 - n^2} = \sqrt{10^2 - 1^2} = \sqrt{99} \approx 9{,}95\text{ rad/s}$$
- PTVP $\ddot{x} + 2\dot{x} + 100x = 0$ có nghiệm tổng quát:
  $$x(t) = e^{-t}\left(C_1\cos\sqrt{99}\,t + C_2\sin\sqrt{99}\,t\right)$$
- Đạo hàm theo $t$:
  $$\dot{x}(t) = e^{-t}\left[\left(-C_1 + \sqrt{99}\,C_2\right)\cos\sqrt{99}\,t + \left(-C_2 - \sqrt{99}\,C_1\right)\sin\sqrt{99}\,t\right]$$
- Thay điều kiện ban đầu tại $t = 0$:
  $$\begin{cases} x(0) = C_1 = 0{,}1\text{ m} \\ \dot{x}(0) = -C_1 + \sqrt{99}\,C_2 = 0 \implies C_2 = \dfrac{0{,}1}{\sqrt{99}} \approx 0{,}01005\text{ m} \end{cases}$$
- Phương trình chuyển động:
  $$\begin{aligned} x(t) &= e^{-t}\left(0{,}1\cos\sqrt{99}\,t + \frac{0{,}1}{\sqrt{99}}\sin\sqrt{99}\,t\right) \\ &\approx e^{-t}\big(0{,}1\cos(9{,}95t) + 0{,}01005\sin(9{,}95t)\big)\text{ (m)} \end{aligned}$$

**2. Dao động cưỡng bức và cộng hưởng:**
- Gia tốc biên độ lực kích động: $h = \frac{H}{m} = \frac{10}{2} = 5\text{ m/s}^2$.
- Tại tần số kích động $\Omega = 9\text{ rad/s}$:
  $$\begin{aligned} B &= \frac{h}{\sqrt{(\omega_0^2 - \Omega^2)^2 + 4n^2\Omega^2}} \\ &= \frac{5}{\sqrt{(100 - 81)^2 + 4(1)^2(81)}} = \frac{5}{\sqrt{685}} \approx 0{,}1910\text{ m} \end{aligned}$$
- Tại cộng hưởng chính xác, tần số kích động tối ưu là $\Omega_{\text{ch}} = \sqrt{\omega_0^2 - 2n^2} = \sqrt{98} \approx 9{,}8995\text{ rad/s}$ (xấp xỉ $\omega_0$):
  $$B_{\max} = \frac{h}{\sqrt{(\omega_0^2 - \Omega_{\text{ch}}^2)^2 + 4n^2\Omega_{\text{ch}}^2}} = \frac{5}{\sqrt{4 + 4(98)}} = \frac{5}{\sqrt{396}} \approx 0{,}2513\text{ m}$$
  *(Nếu tính nhanh gần đúng tại $\Omega = \omega_0 = 10\text{ rad/s}$: $B \approx \frac{h}{2n\omega_0} = \frac{5}{2 \times 1 \times 10} = 0{,}2500\text{ m}$, sai lệch chỉ $0{,}5\%$ so với giá trị chính xác).*

---

::: info Ví dụ 13-3: Chuyển động tương đối trong ống quay đều (Lực ly tâm & Coriolis)
Một thanh rỗng thẳng nằm ngang quay đều trong mặt phẳng ngang quanh trục thẳng đứng $Oz$ đi qua đầu $O$ với vận tốc góc không đổi $\omega = 4\text{ rad/s}$ (ngược chiều kim đồng hồ khi nhìn từ trên xuống). Bên trong ống nhẵn có một viên bi nhỏ khối lượng $m = 0{,}5\text{ kg}$ được thả tại $t = 0$ ở vị trí cách $O$ đoạn $r_0 = 0{,}2\text{ m}$ với vận tốc tương đối bằng $0$ ($v_{r0} = 0$). Lấy $g = 9{,}81\text{ m/s}^2$.
1. Lập PTVP chuyển động tương đối dọc theo ống và xác định quy luật $r(t), \; v_r(t)$.
2. Tại thời điểm $t = 0{,}5\text{ s}$, tính vị trí $r$, vận tốc tương đối $v_r$, lực quán tính Coriolis $F_{\text{qt}}^c$ và tổng áp lực $N$ của viên bi lên thành ống.
:::

**Lời giải chi tiết:**

**1. Chọn hệ quy chiếu động $Oxyz$ gắn với thanh quay:**
- Gốc $O$ tại tâm quay; trục $Ox$ hướng dọc theo thanh ra ngoài; trục $Oz$ thẳng đứng hướng lên (nên $\vec{\omega}_e = \omega\vec{k}$); trục $Oy$ nằm ngang vuông góc tạo tam diện thuận ($\vec{k}\times\vec{i} = \vec{j}$).
- Phân tích các lực tác dụng lên viên bi ở tọa độ $x = r$:
  - Trọng lực: $\vec{P} = -mg\vec{k}$.
  - Phản lực của thành ống nhẵn (vuông góc với $Ox$): $\vec{N} = N_y\vec{j} + N_z\vec{k}$.
  - Lực quán tính theo (ly tâm): vì $\vec{a}_e = -\omega^2 x\,\vec{i}$ hướng về $O$, nên $\vec{F}_{\text{qt}}^e = -m\vec{a}_e = m\omega^2 x\,\vec{i}$.
  - Lực quán tính Coriolis: vì $\vec{v}_r = \dot{x}\vec{i}$, nên:
    $$\vec{F}_{\text{qt}}^c = -2m(\vec{\omega}_e \times \vec{v}_r) = -2m(\omega\vec{k} \times \dot{x}\vec{i}) = -2m\omega\dot{x}\,\vec{j}$$
- Viết phương trình cơ bản $m\vec{a}_r = \vec{P} + \vec{N} + \vec{F}_{\text{qt}}^e + \vec{F}_{\text{qt}}^c$ và chiếu lên 3 trục:
  $$\begin{cases} m\ddot{x} = m\omega^2 x \quad (1) \\ 0 = N_y - 2m\omega\dot{x} \quad (2) \\ 0 = N_z - mg \quad (3) \end{cases}$$
- Từ $(1)$ có $\ddot{x} - \omega^2 x = 0$. Phương trình đặc trưng $\lambda^2 - \omega^2 = 0 \implies \lambda = \pm\omega$.
  Nghiệm tổng quát: $x(t) = C_1 e^{\omega t} + C_2 e^{-\omega t}$, và $\dot{x}(t) = \omega(C_1 e^{\omega t} - C_2 e^{-\omega t})$.
- Áp dụng điều kiện đầu $x(0) = r_0 = 0{,}2\text{ m}$ và $\dot{x}(0) = 0$:
  $$\begin{cases} C_1 + C_2 = r_0 \\ C_1 - C_2 = 0 \end{cases} \implies C_1 = C_2 = \frac{r_0}{2} = 0{,}1\text{ m}$$
- Suy ra quy luật chuyển động tương đối (với $r = x$):
  $$r(t) = 0{,}2\cosh(4t)\text{ (m)}, \qquad v_r(t) = \dot{r}(t) = 0{,}8\sinh(4t)\text{ (m/s)}$$

**2. Tính giá trị tại $t = 0{,}5\text{ s}$ ($\omega t = 4 \times 0{,}5 = 2$):**
- $r(0{,}5) = 0{,}2\cosh(2) = 0{,}2 \times \frac{e^2 + e^{-2}}{2} \approx 0{,}7524\text{ m}$.
- $v_r(0{,}5) = 0{,}8\sinh(2) = 0{,}8 \times \frac{e^2 - e^{-2}}{2} \approx 2{,}9015\text{ m/s}$.
- Độ lớn lực quán tính Coriolis:
  $$F_{\text{qt}}^c = 2m\omega v_r = 2 \times 0{,}5 \times 4 \times 2{,}9015 \approx 11{,}6060\text{ N}$$
- Từ $(2)$ và $(3)$: $N_y = F_{\text{qt}}^c \approx 11{,}6060\text{ N}$, $N_z = mg = 0{,}5 \times 9{,}81 = 4{,}9050\text{ N}$.
- Tổng áp lực viên bi tác dụng lên thành ống:
  $$N = \sqrt{N_y^2 + N_z^2} = \sqrt{11{,}6060^2 + 4{,}9050^2} \approx 12{,}60\text{ N}$$

---

### 4. Bẫy hay sai & Bài tập tự luyện có đáp số

::: warning 4 Bẫy hay sai ở Ngày 13
1. **Nhầm lẫn hệ quy chiếu:** Vừa lấy gia tốc tuyệt đối $m\vec{a}_a$ ở vế trái vừa cộng thêm lực quán tính $\vec{F}_{\text{qt}}^e, \vec{F}_{\text{qt}}^c$ ở vế phải! Quy tắc bất biến: **Vế trái là $\vec{a}_r$ (trong hệ động) thì vế phải mới cộng lực quán tính; vế trái là $\vec{a}_a$ (trong hệ quán tính) thì chỉ có lực thực.**
2. **Quên đổi $2n = \beta/m$ khi tính dao động tắt dần:** Rất nhiều thí sinh thế thẳng $n = \beta/m$ thay vì $n = \beta/(2m)$, làm sai cả $\omega_*$ lẫn biên độ cộng hưởng $B$.
3. **Dùng nhầm $\ddot{x} = dv/dt$ khi lực cho theo tọa độ $F(x)$:** Gặp $F(x)$ phải chuyển ngay sang $\ddot{x} = v\frac{dv}{dx}$ để tách biến trực tiếp.
4. **Ngược chiều lực quán tính Coriolis:** $\vec{F}_{\text{qt}}^c = -2m(\vec{\omega}_e \times \vec{v}_r)$ có dấu trừ, tức quay hình chiếu của $\vec{v}_r$ đi $90^\circ$ **ngược chiều** $\vec{\omega}_e$, ngược hẳn với gia tốc Coriolis $\vec{a}_c$.
:::

::: info Bài tập tự luyện Ngày 13
- **Bài 13.1 (Bài toán thuận & Tọa độ tự nhiên):** Chất điểm khối lượng $m = 1{,}5\text{ kg}$ chuyển động trên mặt phẳng ngang $Oxy$ theo quy luật $x = 2t\text{ (m)}$, $y = t^2 - 4t\text{ (m)}$. Tính hợp lực $\vec{F}$, lực tiếp tuyến $F_\tau$ và lực pháp tuyến $F_n$ tác dụng lên chất điểm tại thời điểm $t = 2\text{ s}$.
  - *Đáp số:* $\vec{F} = 3\vec{j}\text{ (N)}$, $F = 3\text{ N}$; tại $t = 2\text{ s}$ có $v_y = 0 \implies F_\tau = 0\text{ N}$, $F_n = 3\text{ N}$ ($\rho = 2\text{ m}$).
- **Bài 13.2 (Tích phân PTVP $F(v)$):** Một vật khối lượng $m = 100\text{ kg}$ trượt trên mặt sàn ngang không ma sát với vận tốc đầu $v_0 = 10\text{ m/s}$, chịu lực cản của môi trường $R_c = 5v^2\text{ (N)}$. Tính vận tốc sau khi vật đi được quãng đường $s = 10\text{ m}$ và thời gian để vận tốc giảm xuống còn $2\text{ m/s}$.
  - *Đáp số:* $v(10) = 10 e^{-0{,}5} \approx 6{,}07\text{ m/s}$; $t = 8\text{ s}$.
- **Bài 13.3 (Cân bằng tương đối của con lắc ly tâm):** Quả cầu nhỏ khối lượng $m = 1\text{ kg}$ gắn ở đầu một thanh nhẹ dài $l = 0{,}5\text{ m}$ bản lề tại trục quay thẳng đứng $Oz$. Hệ quay đều quanh $Oz$ với vận tốc góc $\omega = 6\text{ rad/s}$ ($g = 9{,}81\text{ m/s}^2$). Tìm góc lệch ổn định $\theta$ của thanh so với phương thẳng đứng dưới và lực kéo dọc thanh $T$.
  - *Đáp số:* $\cos\theta = \frac{g}{\omega^2 l} = 0{,}545 \implies \theta \approx 56{,}98^\circ$; $T = m\omega^2 l = 18\text{ N}$.
:::

---

## Ngày 14 (`70 → 75 Điểm`): Động Lượng, Chuyển Động Khối Tâm & Mômen Động Lượng

### 1. Mục tiêu điểm số & Kiến thức cốt lõi cô đọng

- **Mục tiêu (`70 → 75 điểm`):** Sử dụng thuần thục 3 định lý tổng quát về động lượng, chuyển động khối tâm và mômen động lượng; thuộc chính xác bảng mômen quán tính vật đồng chất và định lý Huygens–Steiner để giải nhanh bài toán hệ giật lùi và trục quay cố định.
- **Đọc sâu giáo trình:** [Chương 3: Các định lý tổng quát (Mục 3.1 – 3.4)](/dong-luc-hoc/chuong-3) | [Bài tập Chương 2](/bai-tap/dong-luc-hoc/chuong-2)

#### a) Định lý biến thiên & bảo toàn Động lượng
- **Động lượng của cơ hệ:** $\vec{Q} = \sum_{k=1}^n m_k \vec{v}_k = M\vec{v}_C$ (một số giáo trình ký hiệu $\vec{K} = M\vec{v}_C$, bản chất hoàn toàn đồng nhất).
- **Định lý biến thiên động lượng:**
  $$\frac{d\vec{Q}}{dt} = \sum \vec{F}_k^{(e)} \qquad \text{và dạng hữu hạn:} \qquad \vec{Q}_1 - \vec{Q}_0 = \sum \vec{S}_k^{(e)}$$
- **Định luật bảo toàn động lượng:** Nội lực không làm thay đổi động lượng của toàn hệ. Nếu hình chiếu tổng ngoại lực lên một trục (ví dụ $Ox$) bằng không:
  $$\sum F_{kx}^{(e)} = 0 \implies Q_x = M v_{Cx} = \text{const}$$

#### b) Định lý chuyển động Khối tâm & Bảo toàn vị trí khối tâm
- **Định lý chuyển động khối tâm:**
  $$M\vec{a}_C = \sum \vec{F}_k^{(e)} \iff \begin{cases} M\ddot{x}_C = \sum F_{kx}^{(e)} \\ M\ddot{y}_C = \sum F_{ky}^{(e)} \\ M\ddot{z}_C = \sum F_{kz}^{(e)} \end{cases}$$
- **Bảo toàn vị trí khối tâm:** Nếu $\sum F_{kx}^{(e)} = 0$ và lúc đầu khối tâm đứng yên theo phương $Ox$ ($v_{Cx0} = 0$) thì:
  $$v_{Cx}(t) = 0 \implies x_C = \text{const} \implies \sum_{k=1}^n m_k \Delta x_k = 0$$
  *(Công thức vàng để giải ngay bài toán thuyền – người, xe – vật trượt, nêm trên sàn nhẵn).*

#### c) Bảng Mômen quán tính khối lượng & Định lý Huygens–Steiner
Mômen quán tính của vật rắn đối với trục $\Delta$ là $J_\Delta = \int h^2\,dm = M i_\Delta^2$ ($i_\Delta$ là bán kính quán tính).

| Vật rắn đồng chất (khối lượng $m$) | Vị trí trục quay | Mômen quán tính $J$ |
| :--- | :--- | :--- |
| Thanh mảnh dài $l$ | Qua khối tâm $C$, vuông góc thanh | $J_C = \dfrac{1}{12}m l^2$ |
| Thanh mảnh dài $l$ | Qua một đầu $O$, vuông góc thanh | $J_O = \dfrac{1}{3}m l^2$ |
| Đĩa tròn đặc / Trụ tròn đặc bán kính $R$ | Trục đối xứng đi qua khối tâm $C$ | $J_C = \dfrac{1}{2}m R^2$ |
| Vành tròn mỏng / Ống trụ rỗng mỏng bán kính $R$ | Trục đối xứng đi qua khối tâm $C$ | $J_C = m R^2$ |
| Khối cầu đặc bán kính $R$ | Trục bất kỳ đi qua tâm cầu $C$ | $J_C = \dfrac{2}{5}m R^2$ |

- **Định lý dời trục song song Huygens–Steiner:** Với trục $\Delta$ bất kỳ song song với trục $\Delta_C$ **đi qua khối tâm $C$** và cách nhau đoạn $d$:
  $$J_\Delta = J_C + m d^2$$

#### d) Định lý biến thiên & bảo toàn Mômen động lượng
- **Đối với điểm cố định $O$ (hoặc khối tâm $C$):**
  $$\vec{L}_O = \sum_{k=1}^n \vec{r}_k \times m_k\vec{v}_k, \qquad \frac{d\vec{L}_O}{dt} = \sum \vec{M}_O\big(\vec{F}_k^{(e)}\big)$$
- **PTVP vật rắn quay quanh trục cố định $Oz$:** Vì $L_z = J_z\omega = J_z\dot{\varphi}$ nên:
  $$J_z \ddot{\varphi} = J_z \varepsilon = \sum M_z\big(\vec{F}_k^{(e)}\big)$$
- **Bảo toàn mômen động lượng:** Nếu $\sum M_z\big(\vec{F}_k^{(e)}\big) = 0 \implies L_z = J_z\omega = \text{const}$ (khi cấu hình hệ thay đổi dẫn tới $J_z$ thay đổi: $J_{z1}\omega_1 = J_{z2}\omega_2$).

---

### 2. Thuật toán giải từng bước

- **Dạng A — Tìm độ dịch chuyển ngang bằng Bảo toàn vị trí khối tâm:**
  1. Kiểm tra mặt tựa có nhẵn theo phương ngang không; liệt kê tất cả ngoại lực lên toàn hệ. Xác nhận $\sum F_{kx}^{(e)} = 0$ và $v_{Cx0} = 0$.
  2. Chọn trục $Ox$ cố định gắn với đất. Ký hiệu $\Delta x_M$ là độ dời tuyệt đối của vật nền $M$.
  3. Viết độ dời tuyệt đối của vật di động $m$: $\Delta x_m = \Delta x_M + \Delta x_{\text{tương đối}}$.
  4. Giải phương trình $\sum m_k \Delta x_k = 0$ tìm $\Delta x_M$ và kết luận hướng dịch chuyển.

- **Dạng B — Tìm gia tốc và lực căng dây của cơ hệ quay quanh trục cố định $O$:**
  1. Nếu chỉ tìm gia tốc $\varepsilon, a$: xét **toàn cơ hệ**, viết mômen động lượng tổng $L_O$ đối với trục quay cố định $O$ theo một biến $\omega$ duy nhất (nhớ cộng cả $J_O\omega$ của vật quay và $\sum m_k v_k r_k$ của các vật tịnh tiến!).
  2. Áp dụng $\frac{dL_O}{dt} = \sum M_O\big(\vec{F}_k^{(e)}\big)$ để tìm trực tiếp $\varepsilon$ mà không cần viết ẩn lực căng dây $T_1, T_2$.
  3. Tách riêng từng vật tịnh tiến viết $m_k a_k = \sum F_k$ để suy ra ngay lực căng dây $T_1, T_2$.

---

### 3. Ví dụ minh họa giải chi tiết 100% ra số

::: info Ví dụ 14-1: Bảo toàn vị trí khối tâm (Xe trên ray ngang không ma sát)
Một chiếc xe lăn khối lượng $M = 80\text{ kg}$ nằm yên trên đường ray nằm ngang không ma sát. Trên mặt sàn xe có một rô-bốt nhỏ khối lượng $m = 20\text{ kg}$ ban đầu đứng yên ở mép phải. Rô-bốt chạy từ mép phải sang mép trái của sàn xe trên một đoạn dài tương đối so với xe là $L = 3\text{ m}$ rồi dừng lại. Xác định độ dịch chuyển của xe và của rô-bốt so với mặt đất.
:::

**Lời giải chi tiết:**
- Xét cơ hệ gồm (Xe $M$ + Rô-bốt $m$). Ngoại lực tác dụng lên hệ gồm trọng lực $M\vec{g}$, $m\vec{g}$ và phản lực $\vec{N}$ từ ray ngang nhẵn đều có phương thẳng đứng.
- Chiếu lên phương ngang $Ox$ (chọn chiều dương hướng sang phải):
  $$\sum F_{kx}^{(e)} = 0 \implies a_{Cx} = 0$$
- Vì ban đầu cả hệ đứng yên ($v_{Cx0} = 0$), tọa độ khối tâm theo phương ngang được bảo toàn:
  $$x_C = \text{const} \implies M\Delta x_M + m\Delta x_m = 0$$
- Gọi $\Delta x_M$ là độ dời của xe so với mặt đất. Do rô-bốt di chuyển sang trái (ngược chiều $Ox$) một đoạn $L = 3\text{ m}$ trên sàn xe, độ dời tuyệt đối của rô-bốt so với mặt đất là:
  $$\Delta x_m = \Delta x_M - L = \Delta x_M - 3$$
- Thay vào phương trình bảo toàn vị trí khối tâm:
  $$80\,\Delta x_M + 20(\Delta x_M - 3) = 0 \implies 100\,\Delta x_M = 60 \implies \Delta x_M = 0{,}6\text{ m}$$
- Vậy xe dịch chuyển **$0{,}6\text{ m}$ sang phải** (ngược chiều chuyển động của rô-bốt), còn rô-bốt dịch chuyển so với mặt đất một đoạn $\Delta x_m = 0{,}6 - 3 = -2{,}4\text{ m}$ (tức **$2{,}4\text{ m}$ sang trái**).

---

::: info Ví dụ 14-2: Định lý biến thiên & bảo toàn Mômen động lượng
1. *(Định lý biến thiên mômen động lượng)* Một ròng rọc hai tầng đồng trục quay trơn quanh trục nằm ngang cố định đi qua tâm $O$, có khối lượng $M = 8\text{ kg}$ và bán kính quán tính đối với trục quay là $i_O = 0{,}25\text{ m}$. Trên vành lớn bán kính $R = 0{,}4\text{ m}$ quấn sợi dây treo vật nặng $m_1 = 10\text{ kg}$; trên vành nhỏ bán kính $r = 0{,}2\text{ m}$ quấn dây theo chiều ngược lại treo vật nặng $m_2 = 12\text{ kg}$. Thả hệ không vận tốc đầu ($g = 9{,}81\text{ m/s}^2$). Tính gia tốc góc $\varepsilon$ của ròng rọc, gia tốc $a_1, a_2$ của hai vật và lực căng hai nhánh dây $T_1, T_2$.
2. *(Bảo toàn mômen động lượng)* Một đĩa tròn đặc đồng chất khối lượng $m_1 = 4\text{ kg}$, bán kính $R = 0{,}5\text{ m}$ đang quay trơn quanh trục thẳng đứng qua tâm với $\omega_1 = 6\text{ rad/s}$. Đặt nhẹ đồng trục một vành tròn mỏng khối lượng $m_2 = 2\text{ kg}$, cùng bán kính $R = 0{,}5\text{ m}$ xuống mặt đĩa. Do ma sát trong nội bộ, hai vật nhanh chóng quay cùng tốc độ góc $\omega_2$. Tính $\omega_2$.
:::

**Lời giải chi tiết:**

**Phần 1:**
- Mômen quán tính của ròng rọc đối với trục quay $O$:
  $$J_O = M i_O^2 = 8 \times (0{,}25)^2 = 0{,}5\text{ kg}\cdot\text{m}^2$$
- So sánh mômen quay của hai trọng lực đối với trục $O$:
  $$m_1 g R = 10 \times 9{,}81 \times 0{,}4 = 39{,}24\text{ N}\cdot\text{m}$$
  $$m_2 g r = 12 \times 9{,}81 \times 0{,}2 = 23{,}544\text{ N}\cdot\text{m}$$
  Vì $m_1 g R > m_2 g r$ nên vật $m_1$ đi xuống, vật $m_2$ đi lên. Chọn chiều dương của $\omega, \varepsilon$ theo chiều $m_1$ đi xuống ($v_1 = R\omega, \; v_2 = r\omega$).
- Mômen động lượng toàn cơ hệ đối với trục quay $O$:
  $$L_O = J_O\omega + m_1 v_1 R + m_2 v_2 r = \left(J_O + m_1 R^2 + m_2 r^2\right)\omega$$
- Áp dụng định lý biến thiên mômen động lượng $\dfrac{dL_O}{dt} = \sum M_O\big(\vec{F}_k^{(e)}\big)$ cho toàn hệ (lực căng dây là nội lực tự triệt tiêu, phản lực tại $O$ có cánh tay đòn bằng $0$):
  $$\left(J_O + m_1 R^2 + m_2 r^2\right)\varepsilon = m_1 g R - m_2 g r$$
- Thay số:
  $$J_O + m_1 R^2 + m_2 r^2 = 0{,}5 + 10(0{,}4)^2 + 12(0{,}2)^2 = 2{,}58\text{ kg}\cdot\text{m}^2$$
  $$m_1 g R - m_2 g r = (10 \times 0{,}4 - 12 \times 0{,}2) \times 9{,}81 = 15{,}696\text{ N}\cdot\text{m}$$
  $$\varepsilon = \frac{15{,}696}{2{,}58} \approx 6{,}0837\text{ rad/s}^2$$
- Gia tốc tịnh tiến của hai vật:
  $$a_1 = R\varepsilon = 0{,}4 \times 6{,}0837 \approx 2{,}4335\text{ m/s}^2\text{ (xuống)}$$
  $$a_2 = r\varepsilon = 0{,}2 \times 6{,}0837 \approx 1{,}2167\text{ m/s}^2\text{ (lên)}$$
- Tách riêng từng vật để tính lực căng dây:
  $$T_1 = m_1(g - a_1) = 10(9{,}81 - 2{,}4335) \approx 73{,}77\text{ N}$$
  $$T_2 = m_2(g + a_2) = 12(9{,}81 + 1{,}2167) \approx 132{,}32\text{ N}$$
  *(Kiểm tra lại bằng PTVP ròng rọc: $T_1 R - T_2 r = 73{,}7651 \times 0{,}4 - 132{,}3209 \times 0{,}2 = 3{,}0419\text{ N}\cdot\text{m}$, khớp đúng với $J_O\varepsilon = 0{,}5 \times 6{,}0837 = 3{,}0419\text{ N}\cdot\text{m}$).*

**Phần 2:**
- Lực ma sát giữa vành và đĩa là nội lực của hệ (đĩa + vành), mômen ngoại lực đối với trục quay thẳng đứng bằng $0 \implies L_z = \text{const}$:
  $$J_{\text{đĩa}}\omega_1 = \left(J_{\text{đĩa}} + J_{\text{vành}}\right)\omega_2$$
- Tính mômen quán tính từ bảng chuẩn:
  $$J_{\text{đĩa}} = \frac{1}{2}m_1 R^2 = \frac{1}{2}(4)(0{,}5)^2 = 0{,}5\text{ kg}\cdot\text{m}^2$$
  $$J_{\text{vành}} = m_2 R^2 = 2(0{,}5)^2 = 0{,}5\text{ kg}\cdot\text{m}^2$$
- Suy ra vận tốc góc sau khi gắn liền:
  $$\omega_2 = \frac{0{,}5 \times 6}{0{,}5 + 0{,}5} = 3\text{ rad/s}$$

---

### 4. Bẫy hay sai & Bài tập tự luyện có đáp số

::: warning 4 Bẫy hay sai ở Ngày 14
1. **Dời trục Huygens–Steiner giữa hai trục không qua khối tâm $C$:** Công thức $J_\Delta = J_C + md^2$ **bắt buộc** trục gốc phải đi qua khối tâm $C$. Nếu biết $J_A$ ở một điểm $A$ khác $C$ và muốn tìm $J_B$, phải dời về $C$ trước rồi mới dời sang $B$: $J_B = J_A - md_{AC}^2 + md_{BC}^2$.
2. **Bỏ sót hạng tử $m v r$ khi viết $L_O$ cho toàn hệ:** Trong hệ có cả vật quay và vật tịnh tiến treo bằng dây (như Ví dụ 14-2), $L_O$ phải cộng đủ $J_O\omega$ và từng $m_k v_k r_k$.
3. **Nhầm phản lực ngoài thành nội lực:** Phản lực tại bản lề $O$ hay từ tường tựa là **ngoại lực**! Nếu ngoại lực đó khác $0$ theo phương $Ox$, không được phép bảo toàn động lượng $Q_x$.
4. **Bảo toàn nhầm cả động năng khi áp dụng $J_1\omega_1 = (J_1+J_2)\omega_2$:** Trong quá trình hai đĩa trượt lên nhau để đạt cùng $\omega_2$, ma sát trong sinh công âm nên **động năng bị tổn hao**, tuyệt đối không dùng bảo toàn cơ năng ở giai đoạn ghép dính.
:::

::: info Bài tập tự luyện Ngày 14
- **Bài 14.1 (Huygens–Steiner cho vật ghép):** Thanh mảnh đồng chất dài $l = 1{,}2\text{ m}$, khối lượng $m = 3\text{ kg}$ quay quanh bản lề $O$ ở một đầu thanh. Tại đầu còn lại của thanh gắn đồng phẳng một đĩa tròn đặc đồng chất khối lượng $M = 6\text{ kg}$, bán kính $R = 0{,}2\text{ m}$ sao cho tâm đĩa nằm trên đường nối dài của thanh (cách $O$ một khoảng $d = l + R = 1{,}4\text{ m}$). Tính mômen quán tính $J_O$ của cả vật ghép.
  - *Đáp số:* $J_O = \frac{1}{3}ml^2 + \frac{1}{2}MR^2 + M(l+R)^2$, tính ra $J_O = 1{,}44 + 0{,}12 + 11{,}76 = 13{,}32\text{ kg}\cdot\text{m}^2$.
- **Bài 14.2 (Bảo toàn vị trí khối tâm):** Một nêm tam giác vuông khối lượng $M = 10\text{ kg}$, chiều dài cạnh đáy nằm ngang $b = 1{,}5\text{ m}$, đặt trên sàn ngang không ma sát. Thả vật nhỏ khối lượng $m = 2\text{ kg}$ trượt từ đỉnh đến chân nêm. Tính quãng đường dịch chuyển của nêm trên sàn.
  - *Đáp số:* $\Delta x_M = \frac{m b}{M + m} = 0{,}25\text{ m}$ (ngược hướng trượt ngang của vật).
- **Bài 14.3 (Bảo toàn mômen động lượng):** Đĩa tròn đặc đồng chất khối lượng $M = 4\text{ kg}$, bán kính $R = 0{,}5\text{ m}$ đang quay quanh trục thẳng đứng qua tâm với $\omega_0 = 10\text{ rad/s}$. Thả rơi thẳng đứng một chất điểm $m = 1\text{ kg}$ xuống dính chặt vào mép đĩa. Tính vận tốc góc $\omega$ sau khi dính.
  - *Đáp số:* $\omega = \frac{20}{3} \approx 6{,}67\text{ rad/s}$.
:::

---

## Ngày 15 (`75 → 80 Điểm`): Công, Động Năng (Hữu Hạn & Vi Phân) & Động Lực Học Song Phẳng

### 1. Mục tiêu điểm số & Kiến thức cốt lõi cô đọng

- **Mục tiêu (`75 → 80 điểm`):** Vận dụng thành thạo Định lý biến thiên động năng dạng hữu hạn (tính $v, \omega$) và dạng vi phân $dT = dA$ (tính siêu nhanh gia tốc $a$ và lực căng dây $T_1, T_2$); lập hệ 3 PTVP chuyển động song phẳng và kiểm tra chặt chẽ điều kiện lăn không trượt.
- **Đọc sâu giáo trình:** [Chương 3: Các định lý tổng quát (Mục 3.5 – 3.6)](/dong-luc-hoc/chuong-3) | [Bài tập Chương 2](/bai-tap/dong-luc-hoc/chuong-2) | [Bài tập Chương 6](/bai-tap/dong-luc-hoc/chuong-6)

#### a) Công và Công suất của các lực thường gặp
Công nguyên tố $dA = \vec{F}\cdot d\vec{r} = F_\tau\,ds$ và công suất $W = \dfrac{dA}{dt} = \vec{F}\cdot\vec{v}$ (tịnh tiến) hoặc $W = M_z\omega$ (quay).

| Loại lực | Công thức tính công $A_{12}$ | Ghi chú dấu và điều kiện |
| :--- | :--- | :--- |
| Trọng lực $\vec{P} = m\vec{g}$ | $A = \pm m g h$ | $(+)$ khi khối tâm hạ xuống độ cao $h$, $(-)$ khi nâng lên |
| Lực đàn hồi lò xo (độ cứng $c$) | $A = \dfrac{1}{2}c\left(\Delta l_1^2 - \Delta l_2^2\right)$ | $\Delta l_1, \Delta l_2$ là độ biến dạng (dãn/nén) so với chiều dài tự nhiên $l_0$ |
| Ngẫu lực mômen $M$ không đổi | $A = \pm M\varphi$ | $(+)$ khi góc quay $\varphi$ cùng chiều ngẫu lực, $(-)$ khi ngược chiều |
| Lực ma sát trượt | $A_{\text{ms}} = -f_{\text{đ}} N s$ | Luôn âm vì ngược chiều vận tốc trượt tương đối |
| Lực ma sát nghỉ khi lăn không trượt | $A_{\text{ms nghỉ}} = 0$ | Điểm tiếp xúc $P$ là tâm vận tốc tức thời ($\vec{v}_P = \vec{0}$) |

#### b) Động năng của cơ hệ
Động năng toàn phần của cơ hệ bằng tổng động năng của các vật cấu thành: $T = \sum_{k=1}^n T_k$.
- **Vật tịnh tiến / chất điểm:** $T_{\text{tt}} = \dfrac{1}{2} m v^2$.
- **Vật quay quanh trục cố định qua $O$:** $T_{\text{quay}} = \dfrac{1}{2} J_O \omega^2$.
- **Vật chuyển động song phẳng (Định lý Koenig):**
  $$T_{\text{sp}} = \frac{1}{2} m v_C^2 + \frac{1}{2} J_C \omega^2 = \frac{1}{2} J_P \omega^2$$
  *(với $P$ là tâm vận tốc tức thời; $J_P = J_C + m\cdot PC^2$).*

#### c) Định lý biến thiên Động năng (Dạng hữu hạn & Dạng vi phân)
- **Dạng hữu hạn (tìm nhanh vận tốc $v, \omega$):**
  $$T - T_0 = \sum A_k^{(e)} + \sum A_k^{(i)}$$
  Khi các liên kết là lý tưởng và không biến dạng (khớp nhẵn, dây không giãn, lăn không trượt), tổng công nội lực $\sum A_k^{(i)} = 0$, ta có $T - T_0 = \sum A_k^{(e)}$.
- **Dạng vi phân (tìm nhanh gia tốc $a, \varepsilon$):**
  $$dT = \sum dA_k^{(e)} + \sum dA_k^{(i)}$$
  Nếu biểu diễn $T = \frac{1}{2} M_{\text{qđ}} v^2$ và tổng công nguyên tố $dA = F_{\text{qđ}}\,ds$, lấy vi phân $dT = M_{\text{qđ}} v\,dv = F_{\text{qđ}}\,ds$ kết hợp $v\frac{dv}{ds} = a$ sẽ cho ngay $a = \dfrac{F_{\text{qđ}}}{M_{\text{qđ}}}$. Sau khi có $a$, tách riêng từng vật để rút lực căng dây $T_1, T_2$ bằng Định luật 2 Newton.

#### d) PTVP chuyển động song phẳng & Điều kiện lăn không trượt
- **Hệ 3 phương trình chuyển động song phẳng của vật rắn:**
  $$\begin{cases} m\ddot{x}_C = \sum F_{kx} \\ m\ddot{y}_C = \sum F_{ky} \\ J_C\ddot{\varphi} = \sum M_C(\vec{F}_k) \end{cases}$$
- **Điều kiện lăn không trượt:**
  - Liên kết động học tại mặt phẳng cố định: $v_C = R\omega$, $a_C = R\varepsilon$.
  - Điều kiện ma sát Coulomb: lực ma sát nghỉ tìm được phải thỏa mãn $F_{\text{ms}} \le f_t N$ (hoặc $\lvert F_{\text{ms}}\rvert \le f_t N$).
  - **Kết quả chuẩn (Trụ đặc $J_C = \frac{1}{2}mR^2$ lăn không trượt trên dốc nghiêng góc $\alpha$):**
    $$a_C = \frac{2}{3} g\sin\alpha, \qquad F_{\text{ms}} = \frac{1}{3}m g\sin\alpha, \qquad N = m g\cos\alpha \implies f_t \ge \frac{1}{3}\tan\alpha$$

---

### 2. Thuật toán giải từng bước

- **Dạng 1 — Giải hệ nhiều vật bằng Định lý động năng (tìm $v, a, T_1, T_2$):**
  1. Chọn 1 vận tốc đại diện $v$ (của vật tịnh tiến hoặc khối tâm vật lăn). Biểu diễn vận tốc góc $\omega_i$ của tất cả ròng rọc, con lăn theo $v$.
  2. Cộng động năng toàn hệ $T = \sum T_k$ (đặc biệt kiểm tra vật song phẳng phải có đủ cả $\frac{1}{2}mv_C^2$ và $\frac{1}{2}J_C\omega^2$).
  3. Liệt kê các ngoại lực sinh công khi dịch chuyển đoạn $s$, tính $\sum A_k^{(e)}$ (nhớ công ma sát nghỉ lăn không trượt $= 0$, công lò xo $= \frac{1}{2}c(\Delta l_1^2 - \Delta l_2^2)$).
  4. Dùng $T - T_0 = \sum A$ rút ra $v$; vi phân $dT = dA$ (hoặc đạo hàm $\frac{dT}{ds} = \frac{dA}{ds}$) để rút ngay $a$.
  5. Tách từng vật tịnh tiến và ròng rọc, viết $m_i a = \sum F_i$ để tính $T_1, T_2$.

- **Dạng 2 — Kiểm tra chế độ lăn không trượt của vật rắn song phẳng:**
  1. Giả sử lăn không trượt ($a_C = R\varepsilon$). Vẽ lực $\vec{P}, \vec{N}, \vec{F}_{\text{ms}}$.
  2. Viết 3 PTVP song phẳng tại khối tâm $C$, giải cùng $a_C = R\varepsilon$ tìm $a_C, \varepsilon, N, F_{\text{ms}}$.
  3. So sánh $\lvert F_{\text{ms}}\rvert$ với $f_t N$:
     - Nếu $\lvert F_{\text{ms}}\rvert \le f_t N$: vật **lăn không trượt** thật, giữ nguyên kết quả.
     - Nếu $\lvert F_{\text{ms}}\rvert > f_t N$: vật **vừa lăn vừa trượt**! Bỏ ràng buộc $a_C = R\varepsilon$, đặt $F_{\text{ms}} = f_{\text{đ}} N$ ngược chiều trượt của điểm tiếp xúc rồi giải lại 3 PTVP.

---

### 3. Ví dụ minh họa giải chi tiết 100% ra số

::: info Ví dụ 15-1: Định lý động năng hữu hạn & vi phân cho cơ hệ nối lò xo
Một cơ hệ chuyển động trong mặt phẳng thẳng đứng từ trạng thái nghỉ ($v_0 = 0$):
- Trụ tròn đặc đồng chất $A$ khối lượng $m_1 = 4\text{ kg}$, bán kính $R = 0{,}2\text{ m}$ lăn không trượt trên mặt sàn ngang. Tâm $C$ của trụ $A$ nối vào một lò xo nằm ngang có độ cứng $c = 100\text{ N/m}$ (ban đầu không biến dạng) và nối với một sợi dây nhẹ không giãn nằm ngang vắt qua ròng rọc cố định $B$.
- Ròng rọc $B$ là đĩa tròn đặc đồng chất khối lượng $m_0 = 2\text{ kg}$, bán kính $r = 0{,}15\text{ m}$.
- Đầu tự do của dây treo thẳng đứng vật nặng $D$ khối lượng $m_2 = 5\text{ kg}$.
Lấy $g = 9{,}81\text{ m/s}^2$.
1. Tìm vận tốc $v$ của vật $D$ khi vật $D$ hạ xuống được đoạn $s = 0{,}2\text{ m}$.
2. Dùng dạng vi phân $dT = dA$ tìm gia tốc $a$ của vật $D$ tại $s = 0{,}2\text{ m}$ và gia tốc ban đầu $a_0$ tại $s = 0$.
3. Tính lực căng hai nhánh dây $T_1, T_2$ tại $s = 0{,}2\text{ m}$ và tìm hệ số ma sát nghỉ tối thiểu $f_{t,\min}$ trên sàn để trụ $A$ lăn không trượt ngay từ lúc khởi hành ($s = 0$).
:::

**Lời giải chi tiết:**

**1. Tính động năng $T$, công $\sum A$ và vận tốc $v$ tại $s = 0{,}2\text{ m}$:**
- Vì dây gắn vào tâm $C$ không giãn và trụ $A$ lăn không trượt: $v_C = v_D = v$, $\omega_A = \dfrac{v}{R}$, $\omega_B = \dfrac{v}{r}$.
- Động năng của từng vật trong hệ:
  - Trụ $A$ (song phẳng):
    $$T_A = \frac{1}{2}m_1 v^2 + \frac{1}{2}\left(\frac{1}{2}m_1 R^2\right)\left(\frac{v}{R}\right)^2 = \frac{3}{4}m_1 v^2 = 3v^2$$
  - Ròng rọc $B$ (quay cố định):
    $$T_B = \frac{1}{2}\left(\frac{1}{2}m_0 r^2\right)\left(\frac{v}{r}\right)^2 = \frac{1}{4}m_0 v^2 = 0{,}5v^2$$
  - Vật $D$ (tịnh tiến): $T_D = \dfrac{1}{2}m_2 v^2 = 2{,}5v^2$.
  - Tổng động năng của hệ:
    $$T = 3v^2 + 0{,}5v^2 + 2{,}5v^2 = 6v^2$$
- Tổng công ngoại lực khi vật $D$ đi xuống đoạn $s$ (trụ $A$ tiến đoạn $s$):
  - Công trọng lực vật $D$: $A(P_2) = m_2 g s = 5 \times 9{,}81\,s = 49{,}05\,s$.
  - Công lực đàn hồi lò xo (dãn từ $\Delta l_1 = 0$ đến $\Delta l_2 = s$): $A_{\text{đh}} = \dfrac{1}{2}c(0 - s^2) = -50\,s^2$.
  - Công trọng lực $P_1$, phản lực sàn $N_1$, phản lực ổ $B$, ma sát nghỉ tại tiếp điểm trụ $A$ đều bằng $0$.
  - Tổng công: $\sum A = 49{,}05\,s - 50\,s^2$.
- Áp dụng định lý động năng dạng hữu hạn $T - T_0 = \sum A$ với $T_0 = 0$ tại $s = 0{,}2\text{ m}$:
  $$6v^2 = 49{,}05(0{,}2) - 50(0{,}2)^2 = 7{,}81\text{ J} \implies v = \sqrt{\frac{7{,}81}{6}} \approx 1{,}1409\text{ m/s}$$

**2. Tìm gia tốc bằng dạng vi phân $dT = dA$:**
- Lấy vi phân hai vế $T(v) = 6v^2$ và $A(s) = 49{,}05\,s - 50\,s^2$:
  $$dT = 12v\,dv, \qquad dA = (49{,}05 - 100s)\,ds$$
- Vì $dT = dA$ và $v\dfrac{dv}{ds} = a$, suy ra:
  $$12v\,dv = (49{,}05 - 100s)\,ds \implies a(s) = \frac{49{,}05 - 100s}{12}$$
- Tại $s = 0{,}2\text{ m}$: $a = \dfrac{49{,}05 - 20}{12} = \dfrac{29{,}05}{12} \approx 2{,}4208\text{ m/s}^2$.
- Tại $s = 0$: $a_0 = \dfrac{49{,}05}{12} = 4{,}0875\text{ m/s}^2$.

**3. Lực căng dây $T_1, T_2$ tại $s = 0{,}2\text{ m}$ và điều kiện lăn không trượt:**
- Tách vật $D$: $m_2 g - T_2 = m_2 a \implies T_2 = 5(9{,}81 - 2{,}4208) \approx 36{,}95\text{ N}$.
- Tách ròng rọc $B$: $(T_2 - T_1)r = J_B\varepsilon_B = \frac{1}{2}m_0 r^2 \frac{a}{r}$, suy ra $T_2 - T_1 = \frac{1}{2}m_0 a = 1 \times 2{,}4208 = 2{,}42\text{ N}$.
  Suy ra $T_1 = 36{,}9458 - 2{,}4208 \approx 34{,}53\text{ N}$.
- Tách trụ $A$: PTVP quay quanh khối tâm $C$ là $J_{CA}\varepsilon_A = F_{\text{ms}} R \implies F_{\text{ms}} = \frac{1}{2}m_1 a = 2a$.
  Do $a(s)$ giảm theo $s$, lực ma sát nghỉ lớn nhất xuất hiện tại $s = 0$:
  $$F_{\text{ms},\max} = 2 a_0 = 2 \times 4{,}0875 = 8{,}175\text{ N}$$
  $$N_1 = m_1 g = 4 \times 9{,}81 = 39{,}24\text{ N}$$
  Điều kiện không trượt: $f_t \ge \dfrac{F_{\text{ms},\max}}{N_1} = \dfrac{8{,}175}{39{,}24} = \dfrac{5}{24} \approx 0{,}2083$.

---

::: info Ví dụ 15-2: Chuyển động song phẳng & Kiểm tra điều kiện lăn không trượt
Một trụ tròn đặc đồng chất khối lượng $m = 6\text{ kg}$, bán kính $R = 0{,}3\text{ m}$ thả không vận tốc đầu trên mặt phẳng nghiêng góc $\alpha = 30^\circ$ so với phương ngang ($g = 9{,}81\text{ m/s}^2$).
1. Giả sử trụ lăn không trượt, thiết lập 3 PTVP song phẳng và tính $a_C, N, F_{\text{ms}}$ cùng điều kiện hệ số ma sát nghỉ tối thiểu $f_{t,\min}$.
2. Nếu mặt dốc chỉ có $f_t = f_{\text{đ}} = 0{,}15$, kiểm tra xem trụ có lăn không trượt được không; nếu không, tính lại $a_C$ và gia tốc góc $\varepsilon$.
:::

**Lời giải chi tiết:**

**1. Giả sử lăn không trượt:**
- Chọn trục $Cx$ hướng xuống dọc theo mặt dốc, trục $Cy$ vuông góc với mặt dốc hướng lên; chiều dương $\varepsilon$ cùng chiều lăn xuống. Các lực: $\vec{P} = m\vec{g}$, $\vec{N}$ (theo $Cy$), $\vec{F}_{\text{ms}}$ (hướng lên dọc dốc).
- Hệ 3 PTVP song phẳng và liên kết động học $a_C = R\varepsilon$:
  $$\begin{cases} m a_C = m g\sin\alpha - F_{\text{ms}} \quad (1) \\ 0 = N - m g\cos\alpha \quad (2) \\ J_C\varepsilon = \dfrac{1}{2}mR^2 \left(\dfrac{a_C}{R}\right) = F_{\text{ms}} R \implies F_{\text{ms}} = \dfrac{1}{2}m a_C \quad (3) \end{cases}$$
- Thế $(3)$ vào $(1)$:
  $$\frac{3}{2}m a_C = m g\sin\alpha \implies a_C = \frac{2}{3}g\sin\alpha = \frac{2}{3}(9{,}81)\sin 30^\circ = 3{,}27\text{ m/s}^2$$
- Phản lực pháp tuyến và lực ma sát nghỉ:
  $$N = m g\cos 30^\circ = 6 \times 9{,}81 \times \frac{\sqrt{3}}{2} \approx 50{,}97\text{ N}$$
  $$F_{\text{ms}} = \frac{1}{3}m g\sin 30^\circ = \frac{1}{3} \times 6 \times 9{,}81 \times 0{,}5 = 9{,}81\text{ N}$$
- Điều kiện lăn không trượt $F_{\text{ms}} \le f_t N$:
  $$f_t \ge \frac{\frac{1}{3}mg\sin\alpha}{mg\cos\alpha} = \frac{1}{3}\tan 30^\circ = \frac{1}{3\sqrt{3}} \approx 0{,}1925$$

**2. Khi $f_t = f_{\text{đ}} = 0{,}15$:**
- Vì $0{,}15 < 0{,}1925$, lực ma sát nghỉ cực đại không đủ giữ điểm tiếp xúc đứng yên $\implies$ trụ **vừa lăn vừa trượt** (không còn $a_C = R\varepsilon$).
- Lúc này điểm tiếp xúc trượt xuống dưới, nên lực ma sát trượt hướng lên dốc có độ lớn:
  $$F_{\text{ms}} = f_{\text{đ}} N = 0{,}15 \times 50{,}9743 \approx 7{,}65\text{ N}$$
- Từ $(1)$ và phương trình mômen $J_C\varepsilon = F_{\text{ms}} R$:
  $$a_C = g(\sin 30^\circ - 0{,}15\cos 30^\circ) = 9{,}81\left(0{,}5 - 0{,}15 \times \frac{\sqrt{3}}{2}\right) \approx 3{,}63\text{ m/s}^2$$
  $$\varepsilon = \frac{F_{\text{ms}} R}{\frac{1}{2}mR^2} = \frac{2 f_{\text{đ}} g \cos 30^\circ}{R} = \frac{2 \times 0{,}15 \times 9{,}81 \times \frac{\sqrt{3}}{2}}{0{,}3} \approx 8{,}50\text{ rad/s}^2$$
  *(Kiểm tra vật lý: $R\varepsilon = 0{,}3 \times 8{,}4957 = 2{,}55\text{ m/s}^2 < a_C = 3{,}63\text{ m/s}^2$, đúng là điểm tiếp xúc trượt xuống dưới).*

---

### 4. Bẫy hay sai & Bài tập tự luyện có đáp số

::: warning 4 Bẫy hay sai ở Ngày 15
1. **Quên phần động năng quay $\frac{1}{2}J_C\omega^2$:** Với mọi vật lăn (đĩa, trụ, cầu, vành), phải viết đủ $T = \frac{1}{2}mv_C^2 + \frac{1}{2}J_C\omega^2$; bỏ sót hạng tử quay sẽ làm sai hệ số gia tốc.
2. **Tính sai dấu và độ biến dạng của công lực đàn hồi:** Công thức đúng là $A_{\text{đh}} = \frac{1}{2}c(\Delta l_1^2 - \Delta l_2^2)$ (chú ý $\Delta l_1^2$ đứng trước $\Delta l_2^2$), và $\Delta l$ luôn đo từ chiều dài tự nhiên của lò xo chứ không phải vị trí cân bằng tĩnh!
3. **Tính công âm cho lực ma sát nghỉ khi lăn không trượt:** Trong lăn thuần túy, điểm tiếp xúc $P$ có $\vec{v}_P = \vec{0}$ nên $A(F_{\text{ms nghỉ}}) = 0$. Chỉ ma sát **trượt** mới sinh công âm.
4. **Lấy phương trình $J_A\ddot{\varphi} = \sum M_A$ quanh điểm động tùy ý:** Trong chuyển động song phẳng, chỉ được viết $J_C\ddot{\varphi} = \sum M_C$ quanh **khối tâm $C$** (trừ trường hợp đặc biệt điểm $A$ có gia tốc hướng qua $C$ hoặc bằng $0$).
:::

::: info Bài tập tự luyện Ngày 15
- **Bài 15.1 (Định lý động năng cho vật lăn khác nhau):** Thả đồng thời từ trạng thái nghỉ trên cùng dốc nghiêng góc $\alpha = 30^\circ$, dài $s = 4\text{ m}$ (lăn không trượt, $g = 9{,}81\text{ m/s}^2$) hai vật đồng chất: (a) quả cầu đặc ($J_C = \frac{2}{5}mR^2$) và (b) vành tròn mỏng ($J_C = mR^2$). Tính vận tốc khối tâm $v$ ở chân dốc và hệ số ma sát nghỉ tối thiểu $f_{t,\min}$ của mỗi vật.
  - *Đáp số:* (a) Cầu đặc: $v = \sqrt{\frac{10}{7}gs\sin\alpha} \approx 5{,}29\text{ m/s}$, $f_{t,\min} = \frac{2}{7}\tan 30^\circ \approx 0{,}165$; (b) Vành mỏng: $v = \sqrt{gs\sin\alpha} \approx 4{,}43\text{ m/s}$, $f_{t,\min} = \frac{1}{2}\tan 30^\circ \approx 0{,}289$.
- **Bài 15.2 (Vi phân $dT = dA$):** Tang tời đặc đồng chất khối lượng $M = 10\text{ kg}$, bán kính $R = 0{,}2\text{ m}$ quay quanh trục ngang cố định dưới tác dụng của ngẫu lực phát động $M_0 = 25\text{ N}\cdot\text{m}$, cuốn dây kéo vật $m = 8\text{ kg}$ đi lên dọc theo dốc nghiêng góc $\alpha = 30^\circ$ có hệ số ma sát trượt $f_{\text{đ}} = 0{,}2$ ($g = 9{,}81\text{ m/s}^2$). Tính gia tốc $a$ của vật và lực căng dây $T_{\text{dây}}$.
  - *Đáp số:* $a \approx 5{,}55\text{ m/s}^2$; $T_{\text{dây}} \approx 97{,}24\text{ N}$.
- **Bài 15.3 (Song phẳng với dây quấn):** Một đĩa tròn đặc đồng chất khối lượng $m = 3\text{ kg}$, bán kính $R = 0{,}2\text{ m}$ được quấn dây nhẹ không giãn quanh vành, đầu trên của dây giữ cố định. Thả đĩa rơi thẳng đứng xuống dưới không vận tốc đầu ($g = 9{,}81\text{ m/s}^2$). Tìm gia tốc khối tâm $a_C$ và lực căng dây $T_{\text{dây}}$.
  - *Đáp số:* $a_C = \frac{2}{3}g = 6{,}54\text{ m/s}^2$; $T_{\text{dây}} = \frac{1}{3}mg = 9{,}81\text{ N}$.
:::

---

## Ngày 16 (`80 → 85 Điểm`): Nguyên Lý Đalămbe, Phản Lực Động Ổ Trục & Cân Bằng Động Rôto

### 1. Mục tiêu điểm số & Kiến thức cốt lõi cô đọng

- **Mục tiêu (`80 → 85 điểm`):** Biến đổi bài toán động lực học thành bài toán cân bằng tĩnh học hình thức nhờ lực quán tính Đalămbe; tính nhanh lực căng dây, phản lực động tại các ổ đỡ trục quay và nắm chắc điều kiện cân bằng động rôto.
- **Đọc sâu giáo trình:** [Chương 5: Nguyên lý Đalămbe](/dong-luc-hoc/chuong-5) | [Bài tập Chương 4](/bai-tap/dong-luc-hoc/chuong-4)

#### a) Nguyên lý Đalămbe cho chất điểm và cơ hệ
- **Lực quán tính của chất điểm:** $\vec{F}_{\text{qt}} = -m\vec{a}$ (trong tọa độ tự nhiên gồm thành phần tiếp tuyến $F_{\text{qt}}^t = -m\dot{v}$ ngược $\vec{a}_t$ và lực ly tâm $F_{\text{qt}}^n = m\frac{v^2}{\rho}$ hướng ra xa tâm cong).
- **Nguyên lý Đalămbe cho cơ hệ:** Tại mọi thời điểm, nếu cộng thêm lực quán tính Đalămbe $\vec{F}_{k,\text{qt}} = -m_k\vec{a}_k$ vào từng chất điểm cùng với các ngoại lực và phản lực liên kết, hệ lực thu được là một **hệ lực cân bằng hình thức** (nội lực tự triệt tiêu khi xét toàn hệ):
  $$\sum \left(\vec{F}_k^{(e)} + \vec{N}_k + \vec{F}_{k,\text{qt}}\right) = \vec{0}$$

#### b) Thu gọn hệ lực quán tính của vật rắn
- **Trong chuyển động phẳng (vật có mặt phẳng đối xứng là mặt phẳng chuyển động):**
  Hệ lực quán tính phân bố trên vật rắn thu gọn về **khối tâm $C$** gồm đúng 1 lực và 1 ngẫu lực:
  $$\vec{R}_{\text{qt}} = -M\vec{a}_C \quad (\text{đặt tại khối tâm } C)$$
  $$M_{C,\text{qt}} = -J_C \varepsilon \quad (\text{ngẫu lực ngược chiều } \vec{\varepsilon})$$
  - *Chuyển động tịnh tiến ($\varepsilon = 0$):* $\vec{R}_{\text{qt}} = -M\vec{a}_C$ đặt tại $C$, $M_{C,\text{qt}} = 0$.
  - *Quay quanh trục cố định đi qua $C$ ($\vec{a}_C = \vec{0}$):* $\vec{R}_{\text{qt}} = \vec{0}$, $M_{C,\text{qt}} = -J_C\varepsilon$.
  - *Quay quanh trục cố định không qua $C$ ($OC = d$):* Đặt tại $C$ hai lực quán tính $R_{\text{qt}}^t = M\varepsilon d$ (ngược $\vec{a}_C^t$) và $R_{\text{qt}}^n = M\omega^2 d$ (hướng ly tâm từ $O$ ra $C$), cùng ngẫu lực $M_{C,\text{qt}} = -J_C\varepsilon$.

#### c) Phản lực động ổ trục, Quay quanh trục Oz bất kỳ & Cân bằng động rôto
Phản lực toàn phần tại hai ổ đỡ $A, B$ tách thành $\vec{R}_A = \vec{R}_A^{\text{t}} + \vec{R}_A^{\text{đ}}$ (tĩnh + động). Khi chỉ tìm **phản lực động** ($\vec{R}_A^{\text{đ}}, \vec{R}_B^{\text{đ}}$), ta bỏ qua trọng lực và các ngoại lực tĩnh, chỉ cho các ổ đỡ cân bằng với hệ lực quán tính.

- **Vật rắn quay quanh trục $Oz$ bất kỳ (gắn hệ trục $Oxyz$ theo vật với $Oz$ là trục quay):**
  - Hình chiếu véctơ chính lực quán tính:
    $$R_{x,\text{qt}} = M(\omega^2 x_C + \varepsilon y_C), \qquad R_{y,\text{qt}} = M(\omega^2 y_C - \varepsilon x_C), \qquad R_{z,\text{qt}} = 0$$
  - Hình chiếu mômen chính hệ lực quán tính đối với gốc $O$:
    $$\begin{cases} M_{x,\text{qt}} = J_{xz}\varepsilon - J_{yz}\omega^2 \\ M_{y,\text{qt}} = J_{yz}\varepsilon + J_{xz}\omega^2 \\ M_{z,\text{qt}} = -J_z \varepsilon \end{cases}$$
    với các tích quán tính $J_{xz} = \int xz\,dm$ và $J_{yz} = \int yz\,dm$.
- **Điều kiện cân bằng động của rôto (triệt tiêu hoàn toàn $R_A^{\text{đ}} = R_B^{\text{đ}} = 0$ khi trục quay):**
  1. **Cân bằng tĩnh:** Khối tâm $C$ phải nằm trên trục quay $Oz$ ($x_C = y_C = 0 \implies \vec{R}_{\text{qt}} = \vec{0}$).
  2. **Cân bằng động:** Trục quay $Oz$ phải là trục quán tính chính trung tâm ($J_{xz} = 0$ và $J_{yz} = 0 \implies M_{x,\text{qt}} = M_{y,\text{qt}} = 0$).

---

### 2. Thuật toán giải từng bước

1. **Bước 1 — Giải phóng liên kết:** Vẽ tách vật (hoặc toàn hệ), thay các gối tựa, ổ trục $A, B$, dây treo bằng ẩn phản lực ($X_A^{\text{đ}}, Y_A^{\text{đ}}, X_B^{\text{đ}}, Y_B^{\text{đ}}, T$). Nếu đề chỉ yêu cầu thành phần phản lực **động**, bỏ qua trọng lực.
2. **Bước 2 — Xác định động học:** Tính hoặc ký hiệu gia tốc khối tâm $\vec{a}_C$ và gia tốc góc $\vec{\varepsilon}$, cùng vận tốc góc $\omega$.
3. **Bước 3 — Đặt hệ lực quán tính Đalămbe:**
   - Bài toán phẳng: vẽ $\vec{R}_{\text{qt}} = -M\vec{a}_C$ tại $C$ và vòng cung mômen $M_{C,\text{qt}} = J_C\varepsilon$ quay **ngược chiều** $\vec{\varepsilon}$.
   - Bài toán trục quay 3D: tính $R_{x,\text{qt}}, R_{y,\text{qt}}$ và $M_{x,\text{qt}}, M_{y,\text{qt}}, M_{z,\text{qt}}$ tại một ổ đỡ làm gốc $O$ (thường chọn ổ $A$).
4. **Bước 4 — Viết phương trình cân bằng hình thức:**
   - Hệ phẳng: $\sum F_x + R_{\text{qt},x} = 0$, $\sum F_y + R_{\text{qt},y} = 0$, $\sum M_O + M_{O,\text{qt}} = 0$.
   - Hệ 3D trục $AB$ ($B$ ở cao độ $z = l$): lấy mômen quanh $Ax$ và $Ay$ tại gốc $A$ để tìm ngay $Y_B^{\text{đ}}, X_B^{\text{đ}}$, rồi chiếu lực $\sum F_x = 0, \sum F_y = 0$ để tìm $X_A^{\text{đ}}, Y_A^{\text{đ}}$.

---

### 3. Ví dụ minh họa giải chi tiết 100% ra số

::: info Ví dụ 16-1: Phản lực động ổ trục khi rôto quay không đối xứng (3D)
Trục quay thẳng đứng $AB$ dài $l = 1{,}2\text{ m}$ ($A$ ở dưới làm gốc tọa độ $Axyz$ gắn với trục quay, $Az$ hướng thẳng đứng lên qua $B$). Gắn cố định tại trung điểm $O$ ($AO = OB = 0{,}6\text{ m}$) một thanh đồng chất $CD$ khối lượng $M = 6\text{ kg}$, dài $2a = 0{,}8\text{ m}$ ($OC = OD = a = 0{,}4\text{ m}$) nằm hoàn toàn trong mặt phẳng $Axz$ và nghiêng góc $\alpha = 30^\circ$ so với trục $Az$ ($C$ ở phía $x > 0, z > z_O$; $D$ ở phía $x < 0, z < z_O$). Tại thời điểm khảo sát, trục quay với $\omega = 20\text{ rad/s}$ và $\varepsilon = 10\text{ rad/s}^2$ (cùng chiều dương $Az$). Bỏ qua khối lượng trục $AB$.
1. Tính các đặc trưng quán tính $J_{xz}, J_{yz}, J_z$ và hệ lực quán tính thu gọn tại gốc $A$.
2. Tính các thành phần phản lực động $X_A^{\text{đ}}, Y_A^{\text{đ}}, X_B^{\text{đ}}, Y_B^{\text{đ}}$, độ lớn $R_A^{\text{đ}}, R_B^{\text{đ}}$ và mômen phát động $M_{\text{đ}}$ tác dụng lên trục.
:::

**Lời giải chi tiết:**

**1. Tính các tích quán tính và lực quán tính thu gọn tại $A$:**
- Khối tâm thanh $CD$ trùng với trung điểm $O$ nằm trên trục quay $AB \implies x_C = 0, \; y_C = 0 \implies \vec{R}_{\text{qt}} = \vec{0}$.
- Thanh nằm trong mặt phẳng $Axz$ ($y \equiv 0$) nên $J_{yz} = \int yz\,dm = 0$.
- Tham số hóa điểm trên thanh theo tọa độ $s \in [-a, a]$ tính từ $O$: $x = s\sin\alpha$, $z = z_O + s\cos\alpha$. Vì $\int_{-a}^a x\,dm = 0$, ta có:
  $$\begin{aligned} J_{xz} = \int_{-a}^a xz\,dm &= \frac{M}{2a}\sin\alpha\cos\alpha \int_{-a}^a s^2\,ds \\ &= \frac{1}{3}Ma^2\sin\alpha\cos\alpha = \frac{1}{6}Ma^2\sin 2\alpha \end{aligned}$$
  Thay $M = 6\text{ kg}, \; a = 0{,}4\text{ m}, \; \alpha = 30^\circ$:
  $$J_{xz} = \frac{1}{6}(6)(0{,}4)^2\sin 60^\circ = 0{,}08\sqrt{3} \approx 0{,}1386\text{ kg}\cdot\text{m}^2$$
- Mômen quán tính quanh trục quay $Az$:
  $$\begin{aligned} J_z = \int_{-a}^a (x^2 + y^2)\,dm &= \frac{M}{2a}\sin^2\alpha \int_{-a}^a s^2\,ds \\ &= \frac{1}{3}Ma^2\sin^2\alpha = \frac{1}{3}(6)(0{,}16)(0{,}25) = 0{,}08\text{ kg}\cdot\text{m}^2 \end{aligned}$$
- Mômen chính hệ lực quán tính đối với gốc $A$:
  $$M_{x,\text{qt}} = J_{xz}\varepsilon - J_{yz}\omega^2 = (0{,}08\sqrt{3})(10) - 0 = 0{,}8\sqrt{3} \approx 1{,}3856\text{ N}\cdot\text{m}$$
  $$M_{y,\text{qt}} = J_{yz}\varepsilon + J_{xz}\omega^2 = 0 + (0{,}08\sqrt{3})(20^2) = 32\sqrt{3} \approx 55{,}4256\text{ N}\cdot\text{m}$$
  $$M_{z,\text{qt}} = -J_z\varepsilon = -0{,}08 \times 10 = -0{,}80\text{ N}\cdot\text{m}$$

**2. Thiết lập phương trình cân bằng Đalămbe tìm phản lực động:**
- Đặt phản lực động $\vec{R}_A^{\text{đ}}(X_A^{\text{đ}}, Y_A^{\text{đ}}, 0)$ tại $A(0,0,0)$ và $\vec{R}_B^{\text{đ}}(X_B^{\text{đ}}, Y_B^{\text{đ}}, 0)$ tại $B(0,0,l)$, cùng mômen phát động $M_{\text{đ}}$ quanh trục $Az$.
- Vì $\vec{r}_B \times \vec{R}_B^{\text{đ}} = (l\vec{k}) \times (X_B^{\text{đ}}\vec{i} + Y_B^{\text{đ}}\vec{j}) = -l Y_B^{\text{đ}}\vec{i} + l X_B^{\text{đ}}\vec{j}$, viết hệ phương trình mômen đối với $A$ và chiếu lực:
  $$\begin{cases} -l Y_B^{\text{đ}} + M_{x,\text{qt}} = 0 \implies Y_B^{\text{đ}} = \dfrac{0{,}8\sqrt{3}}{1{,}2} = \dfrac{2\sqrt{3}}{3} \approx 1{,}1547\text{ N} \\ l X_B^{\text{đ}} + M_{y,\text{qt}} = 0 \implies X_B^{\text{đ}} = -\dfrac{32\sqrt{3}}{1{,}2} = -\dfrac{80\sqrt{3}}{3} \approx -46{,}1880\text{ N} \\ M_{\text{đ}} + M_{z,\text{qt}} = 0 \implies M_{\text{đ}} = 0{,}80\text{ N}\cdot\text{m} \end{cases}$$
- Phương trình hình chiếu lực ($\vec{R}_{\text{qt}} = \vec{0}$):
  $$X_A^{\text{đ}} = -X_B^{\text{đ}} \approx +46{,}1880\text{ N}, \qquad Y_A^{\text{đ}} = -Y_B^{\text{đ}} \approx -1{,}1547\text{ N}$$
- Độ lớn phản lực động tại mỗi ổ trục:
  $$R_A^{\text{đ}} = R_B^{\text{đ}} = \sqrt{(-46{,}1880)^2 + (1{,}1547)^2} \approx 46{,}20\text{ N}$$

---

::: info Ví dụ 16-2: Tìm nhanh gia tốc, lực căng dây và phản lực ổ trục bằng Đalămbe phẳng
Cơ cấu gồm trụ tròn đặc đồng chất $A$ khối lượng $m_1 = 6\text{ kg}$, bán kính $R = 0{,}2\text{ m}$ quay quanh trục ngang cố định qua tâm $O$ dưới tác dụng của ngẫu lực phát động $M_0 = 12\text{ N}\cdot\text{m}$. Dây nhẹ không giãn quấn trên trụ $A$ kéo vật $B$ khối lượng $m_2 = 4\text{ kg}$ trượt lên mặt phẳng nghiêng góc $\alpha = 30^\circ$ có hệ số ma sát trượt $f_{\text{đ}} = 0{,}2$ ($g = 9{,}81\text{ m/s}^2$). Áp dụng Nguyên lý Đalămbe để tính gia tốc $a$ của vật $B$, lực căng dây $T$ và độ lớn phản lực toàn phần tại ổ trục $O$.
:::

**Lời giải chi tiết:**
- Giả sử vật $B$ đi lên dọc mặt dốc với gia tốc $a$, trụ $A$ quay với gia tốc góc $\varepsilon = a/R$.
- **Xét riêng vật $B$:** Đặt trọng lực $m_2\vec{g}$, phản lực $\vec{N}_B$, ma sát trượt $\vec{F}_{\text{ms}}$ (hướng xuống dốc), lực căng $\vec{T}$ (hướng lên dốc) và **lực quán tính Đalămbe** $F_{\text{qt},B} = m_2 a$ hướng xuống dọc mặt dốc.
  - Chiếu vuông góc dốc: $N_B = m_2 g\cos 30^\circ = 4 \times 9{,}81 \times \frac{\sqrt{3}}{2} \approx 33{,}9828\text{ N}$.
  - Lực ma sát trượt: $F_{\text{ms}} = f_{\text{đ}} N_B = 0{,}2 \times 33{,}9828 \approx 6{,}7966\text{ N}$.
  - Chiếu dọc dốc:
    $$T - m_2 g\sin 30^\circ - F_{\text{ms}} - m_2 a = 0 \implies T = 4(9{,}81)(0{,}5) + 6{,}7966 + 4a = 26{,}4166 + 4a \quad (1)$$
- **Xét riêng trụ $A$:** Đặt ngẫu lực $M_0$, trọng lực $m_1\vec{g}$, lực căng $T$, phản lực ổ $O$ ($\vec{R}_O$ có hai thành phần $X_O$ song song hướng lên dọc dốc và $Y_O$ vuông góc hướng lên), và **ngẫu lực quán tính** $M_{O,\text{qt}} = J_O\varepsilon = \frac{1}{2}m_1 R^2 \frac{a}{R} = \frac{1}{2}m_1 R a$ quay ngược chiều $M_0$ (còn $\vec{R}_{\text{qt},A} = \vec{0}$ do khối tâm trùng trục $O$).
  - Phương trình mômen đối với trục $O$:
    $$M_0 - T R - \frac{1}{2}m_1 R a = 0 \implies T = \frac{M_0}{R} - \frac{1}{2}m_1 a = \frac{12}{0{,}2} - 3a = 60 - 3a \quad (2)$$
- Giải hệ $(1)$ và $(2)$:
  $$26{,}4166 + 4a = 60 - 3a \implies 7a = 33{,}5834 \implies a \approx 4{,}7976\text{ m/s}^2$$
  $$T = 60 - 3(4{,}7976) \approx 45{,}61\text{ N}$$
- Tìm phản lực toàn phần tại ổ trục $O$ bằng cân bằng lực Đalămbe trên trụ $A$ ($\vec{R}_{\text{qt},A} = \vec{0}$):
  $$X_O = T + m_1 g\sin 30^\circ = 45{,}6071 + 6(9{,}81)(0{,}5) = 75{,}0371\text{ N}$$
  $$Y_O = m_1 g\cos 30^\circ = 6(9{,}81)\frac{\sqrt{3}}{2} \approx 50{,}9743\text{ N}$$
  $$R_O = \sqrt{X_O^2 + Y_O^2} = \sqrt{75{,}0371^2 + 50{,}9743^2} \approx 90{,}71\text{ N}$$

---

### 4. Bẫy hay sai & Bài tập tự luyện có đáp số

::: warning 4 Bẫy hay sai ở Ngày 16
1. **Đặt chiều ngẫu lực quán tính $M_{C,\text{qt}}$ cùng chiều $\vec{\varepsilon}$:** Theo công thức $M_{C,\text{qt}} = -J_C\varepsilon$, ngẫu lực quán tính luôn có xu hướng chống lại sự tăng tốc góc nên phải vẽ **ngược chiều $\vec{\varepsilon}$**.
2. **Đặt lực quán tính ly tâm hướng vào tâm quay:** Vì $\vec{a}_n$ hướng vào tâm nên $\vec{F}_{\text{qt}}^n = -m\vec{a}_n$ luôn hướng **ra xa trục quay**.
3. **Đặt nhầm $\vec{R}_{\text{qt}}$ tại tâm quay $O$ khi $O \neq C$:** Véctơ chính lực quán tính $\vec{R}_{\text{qt}} = -M\vec{a}_C$ luôn đặt tại **khối tâm $C$**; nếu dời về $O$ phải cộng thêm mômen dời lực.
4. **Nhầm dấu $M_{x,\text{qt}}$ và $M_{y,\text{qt}}$:** Nhớ quy luật bất biến: $M_{x,\text{qt}} = J_{xz}\varepsilon - J_{yz}\omega^2$ mang dấu trừ trước $\omega^2$, còn $M_{y,\text{qt}} = J_{yz}\varepsilon + J_{xz}\omega^2$ mang dấu cộng trước $\omega^2$.
:::

::: info Bài tập tự luyện Ngày 16
- **Bài 16.1 (Phản lực động trên trục quay mang vật lệch tâm):** Trục thẳng đứng $AB$ dài $l = 1{,}0\text{ m}$ quay đều với $\omega = 40\text{ rad/s}$. Tại điểm $D$ trên trục cách $A$ một đoạn $h = 0{,}4\text{ m}$ có gắn tay đòn nhẹ dài $r = 0{,}25\text{ m}$ mang quả nặng $m = 3\text{ kg}$. Tính phản lực động tại hai ổ trục $A$ và $B$.
  - *Đáp số:* $F_{\text{qt}} = 1200\text{ N}$; $R_B^{\text{đ}} = 480\text{ N}$; $R_A^{\text{đ}} = 720\text{ N}$.
- **Bài 16.2 (Con lắc trên toa xe có gia tốc):** Toa tàu chạy nhanh dần đều theo phương ngang với gia tốc $a = 4\text{ m/s}^2$. Trong toa có treo một con lắc đơn quả cầu khối lượng $m = 2\text{ kg}$ ($g = 9{,}81\text{ m/s}^2$). Dùng Nguyên lý Đalămbe tìm góc lệch cân bằng $\theta$ so với phương thẳng đứng và sức căng dây $T$.
  - *Đáp số:* $\tan\theta = \frac{a}{g} \approx 0{,}4077 \implies \theta \approx 22{,}18^\circ$; $T = m\sqrt{g^2 + a^2} \approx 21{,}19\text{ N}$.
- **Bài 16.3 (Phản lực bản lề ngay khi buông thanh):** Thanh mảnh đồng chất $AB$ khối lượng $m = 3\text{ kg}$, dài $l = 1{,}2\text{ m}$ giữ nằm ngang quanh bản lề cố định $A$ rồi buông nhẹ không vận tốc đầu ($\omega = 0$, $g = 9{,}81\text{ m/s}^2$). Dùng Nguyên lý Đalămbe tính gia tốc góc $\varepsilon$ và các thành phần phản lực tại bản lề $A$ ngay tại thời điểm buông.
  - *Đáp số:* $\varepsilon = \frac{3g}{2l} = 12{,}2625\text{ rad/s}^2$; $X_A = 0\text{ N}$; $Y_A = \frac{1}{4}mg = 7{,}36\text{ N}$ (hướng lên).
:::

---

## Ngày 17 (`85 → 90 Điểm`): Cơ Học Giải Tích (Công Ảo – Lagrange II) & Lý Thuyết Va Chạm

### 1. Mục tiêu điểm số & Kiến thức cốt lõi cô đọng

- **Mục tiêu (`85 → 90 điểm`):** Làm chủ toàn bộ phần Cơ học giải tích (câu phân loại điểm 9–10 trong đề thi cuối kỳ) gồm: phân loại liên kết, tính lực và phản lực bằng Nguyên lý công ảo, lập hệ PTVP bằng Lagrange loại II (kèm tọa độ xiclic), và giải quyết trọn vẹn bài toán va chạm và tâm va chạm.
- **Đọc sâu giáo trình:** [Chương 4: Nguyên lý di chuyển khả dĩ](/dong-luc-hoc/chuong-4) | [Chương 6: PTVP cơ hệ không tự do](/dong-luc-hoc/chuong-6) | [Chương 7: Lý thuyết va chạm](/dong-luc-hoc/chuong-7) | [BT Chương 3](/bai-tap/dong-luc-hoc/chuong-3) | [BT Chương 5](/bai-tap/dong-luc-hoc/chuong-5) | [BT Chương 8](/bai-tap/dong-luc-hoc/chuong-8)

#### a) Phân loại liên kết, Bậc tự do & Di chuyển khả dĩ
- **Phân loại liên kết (3 cặp phân loại cơ bản):**
  1. *Giữ (hai chiều)* $f(t, \vec{r}_k) = 0$ (khớp bản lề, thanh cứng) vs *Không giữ (một chiều)* $f(t, \vec{r}_k) \ge 0$ (mặt tựa, dây mềm có thể chùng).
  2. *Dừng* $f(\vec{r}_k) = 0$ (không chứa thời gian $t$) vs *Không dừng* $f(t, \vec{r}_k) = 0$ (liên kết chuyển động theo thời gian cho trước).
  3. *Holonom (hình học)* $f(t, \vec{r}_k) = 0$ vs *Không holonom (vi phân không khả tích)* $\sum A_k\,d\vec{r}_k + B\,dt = 0$.
- **Bậc tự do $s$ & Tọa độ suy rộng độc lập $q_1, \dots, q_s$:** Số thông số độc lập tối thiểu xác định hoàn toàn vị trí của cơ hệ ($s = 3n - k$ với $n$ chất điểm chịu $k$ liên kết holonom giữ độc lập).
- **Di chuyển khả dĩ $\delta\vec{r}_k$:** Độ dời vi phân tưởng tượng tại thời điểm đông cứng ($\delta t = 0$) phù hợp với liên kết:
  $$\delta\vec{r}_k = \sum_{\alpha=1}^s \frac{\partial\vec{r}_k}{\partial q_\alpha}\delta q_\alpha$$
- **Liên kết lý tưởng:** Tổng công ảo của mọi phản lực liên kết triệt tiêu: $\sum \vec{N}_k\cdot\delta\vec{r}_k = 0$ (mặt tựa nhẵn, khớp không ma sát, dây không giãn, lăn không trượt).

#### b) Nguyên lý Di chuyển khả dĩ (Công ảo) & Lực suy rộng
- **Điều kiện cân bằng (Nguyên lý công ảo):** Cơ hệ có liên kết dừng, giữ, lý tưởng cân bằng khi và chỉ khi tổng công ảo của mọi lực hoạt động bằng không trên mọi di chuyển khả dĩ:
  $$\sum_{k=1}^n \delta A_k^{(e)} = \sum_{k=1}^n \vec{F}_k\cdot\delta\vec{r}_k = 0 \iff Q_\alpha = 0 \quad (\forall \alpha = 1, \dots, s)$$
- **Tìm phản lực liên kết bằng Công ảo:** Giải phóng liên kết cần tìm, thay liên kết bằng lực hoạt động chưa biết $\vec{R}$ (làm bậc tự do tăng thêm 1), cho hệ thực hiện di chuyển khả dĩ $\delta q$ phù hợp với các liên kết còn lại và viết $\sum\delta A + \vec{R}\cdot\delta\vec{r}_R = 0$.
- **Lực suy rộng $Q_\alpha$:**
  $$Q_\alpha = \frac{\delta A_\alpha}{\delta q_\alpha} = \sum_{k=1}^n \vec{F}_k \cdot \frac{\partial\vec{r}_k}{\partial q_\alpha}$$
  Nếu tất cả lực hoạt động là lực thế có hàm thế năng $\Pi(q_1, \dots, q_s)$ thì:
  $$Q_\alpha = -\frac{\partial\Pi}{\partial q_\alpha}$$

#### c) Phương trình Lagrange loại II & Tọa độ xiclic
- **Phương trình Lagrange loại II:**
  $$\frac{d}{dt}\left(\frac{\partial T}{\partial\dot{q}_\alpha}\right) - \frac{\partial T}{\partial q_\alpha} = Q_\alpha \quad (\alpha = 1, 2, \dots, s)$$
  *(Với cơ hệ chỉ có lực thế, có thể dùng hàm Lagrange $L = T - \Pi$ để viết $\dfrac{d}{dt}\left(\dfrac{\partial L}{\partial\dot{q}_\alpha}\right) - \dfrac{\partial L}{\partial q_\alpha} = 0$).*
- **Tọa độ xiclic (tọa độ vòng) & Tích phân đầu bảo toàn xung lượng suy rộng:**
  Nếu $q_\alpha$ không xuất hiện tường minh trong $L$ (tức $\frac{\partial T}{\partial q_\alpha} = 0$ và $Q_\alpha = 0$), thì $q_\alpha$ là **tọa độ xiclic** và hệ có ngay một tích phân đầu bảo toàn xung lượng suy rộng:
  $$p_\alpha = \frac{\partial T}{\partial\dot{q}_\alpha} = \text{const}$$

#### d) Lý thuyết va chạm & Tâm va chạm
- **Đặc điểm trong thời gian va chạm cực ngắn $\tau \to 0$:** Vị trí hình học giữ nguyên; bỏ qua xung lượng của các lực hữu hạn (trọng lực, lực đàn hồi lò xo), chỉ giữ lại các **xung lực va chạm** $\vec{S} = \int_0^\tau \vec{F}_{\text{xk}}\,dt$.
- **Hệ số khôi phục Newton ($0 \le k \le 1$):** Tỉ số giữa vận tốc pháp tuyến tách ra sau va chạm $u_n$ và vận tốc pháp tuyến lao vào trước va chạm $v_n$:
  $$k = \frac{u_n}{v_n} = \frac{u_{2n} - u_{1n}}{v_{1n} - v_{2n}}$$
  ($k = 1$: va chạm đàn hồi tuyệt đối; $k = 0$: va chạm mềm, sau va chạm hai vật dính nhau cùng vận tốc).
- **Các định lý tổng quát khi va chạm:**
  1. Biến thiên động lượng: $M(\vec{v}_{C2} - \vec{v}_{C1}) = \sum \vec{S}_k^{(e)}$.
  2. Biến thiên mômen động lượng quanh trục quay cố định $O$:
     $$J_O(\omega_2 - \omega_1) = d \cdot S$$
     (với $d$ là cánh tay đòn từ trục quay $O$ tới đường tác dụng của xung lực $S$).
- **Tâm va chạm ($K$):** Khi xung lực $S$ đặt vuông góc với mặt phẳng chứa trục quay $O$ và khối tâm $C$ (cách $O$ một khoảng $a_C = OC$) tại điểm $K$ cách $O$ một đoạn $d$, phản xung lực tại ổ trục $O$ triệt tiêu hoàn toàn ($S_O = 0$) khi:
  $$d = \frac{J_O}{M a_C} = a_C + \frac{i_C^2}{a_C}$$

---

### 2. Thuật toán giải từng bước

- **Quy trình 5 bước lập PTVP bằng Lagrange loại II:**
  1. Đếm số bậc tự do $s$, chọn $s$ tọa độ suy rộng độc lập $q_1, \dots, q_s$ (ưu tiên vị trí cân bằng hoặc khớp cố định làm gốc).
  2. Viết tọa độ $(x_k, y_k)$ của khối tâm từng vật theo $q_\alpha$, lấy đạo hàm tìm $\dot{x}_k, \dot{y}_k \implies v_{Ck}^2 = \dot{x}_k^2 + \dot{y}_k^2$.
  3. Viết tổng động năng $T = \sum\left(\frac{1}{2}m_k v_{Ck}^2 + \frac{1}{2}J_{Ck}\omega_k^2\right)$ dưới dạng hàm của $(q_\alpha, \dot{q}_\alpha)$.
  4. Tính lực suy rộng $Q_\alpha$ bằng Công ảo ($\delta A = \sum Q_\alpha\delta q_\alpha$) hoặc từ Thế năng $\Pi$ ($Q_\alpha = -\frac{\partial\Pi}{\partial q_\alpha}$).
  5. Tính $\frac{\partial T}{\partial\dot{q}_\alpha}$, lấy $\frac{d}{dt}\left(\frac{\partial T}{\partial\dot{q}_\alpha}\right)$, trừ $\frac{\partial T}{\partial q_\alpha}$ và cho bằng $Q_\alpha$. Kiểm tra ngay xem có tọa độ xiclic nào không.

- **Quy trình 3 bước giải Va chạm vào vật quay quanh trục cố định $O$:**
  1. Tính $J_O$ của vật rắn (dùng Huygens–Steiner nếu cần).
  2. Dùng Định lý biến thiên mômen động lượng quanh $O$ để khử phản xung lực $S_O$ ở trục quay: $J_O(\omega_2 - \omega_1) = \sum M_O(\vec{S}_{\text{ngoại}})$ (nếu có vật găm vào thì cộng $md^2$ vào $J_O$ sau va chạm; nếu bật ngược lại với hệ số $k$, ghép thêm phương trình $k = \frac{d\omega_2 - u_1}{v_1 - d\omega_1}$).
  3. Dùng Định lý biến thiên động lượng $M(\vec{v}_{C2} - \vec{v}_{C1}) = \vec{S} + \vec{S}_O$ để tìm phản xung lực $\vec{S}_O$ (hoặc đặt $S_O = 0$ để tìm tâm va chạm $d = \frac{J_O}{Ma_C}$).

---

### 3. Ví dụ minh họa giải chi tiết 100% ra số

::: info Ví dụ 17-1: Tìm phản lực liên kết bằng Nguyên lý Công ảo
Một dầm ngang $AB$ dài $l = 4\text{ m}$ có bản lề cố định tại $A$ và gối tựa di động đặt trên mặt sàn ngang tại $B$. Tại điểm $D$ cách $A$ một đoạn $a = 1{,}5\text{ m}$ đặt lực thẳng đứng hướng xuống $P = 20\text{ kN}$, đồng thời dầm chịu thêm một ngẫu lực mômen $M = 12\text{ kN}\cdot\text{m}$ quay cùng chiều kim đồng hồ. Dùng Nguyên lý công ảo để xác định phản lực $N_B$ tại gối $B$.
:::

**Lời giải chi tiết:**
- **Giải phóng liên kết tại gối $B$:** Tháo gối tựa di động $B$, thay bằng lực hoạt động $\vec{N}_B$ thẳng đứng hướng lên. Cơ hệ bây giờ có $1$ bậc tự do (dầm $AB$ quay quanh bản lề $A$).
- Cho dầm quay khả dĩ một góc vô cùng bé $\delta\varphi$ theo chiều ngược kim đồng hồ quanh $A$:
  - Điểm đặt lực $N_B$ tại $B$ đi lên một đoạn: $\delta y_B = l\,\delta\varphi$.
  - Điểm đặt lực $P$ tại $D$ đi lên một đoạn: $\delta y_D = a\,\delta\varphi$.
- Viết tổng công ảo bằng $0$:
  $$\sum \delta A = N_B \cdot \delta y_B - P \cdot \delta y_D - M \cdot \delta\varphi = 0$$
  $$\big(N_B l - P a - M\big)\delta\varphi = 0$$
- Vì $\delta\varphi \neq 0$ tùy ý:
  $$N_B = \frac{P a + M}{l} = \frac{20 \times 1{,}5 + 12}{4} = \frac{42}{4} = 10{,}5\text{ kN}$$

---

::: info Ví dụ 17-2: Hệ 2 bậc tự do bằng Lagrange loại II & Tọa độ xiclic
Một nêm khối lượng $M = 6\text{ kg}$ có góc nghiêng $\alpha = 30^\circ$ trượt không ma sát trên mặt sàn nằm ngang. Trên mặt dốc nhẵn của nêm có một khối hộp khối lượng $m = 2\text{ kg}$ trượt xuống dưới không ma sát ($g = 9{,}81\text{ m/s}^2$).
1. Chọn 2 tọa độ suy rộng độc lập $q_1 = x$ (hoành độ của nêm dọc trục ngang hướng sang phải) và $q_2 = s$ (quãng đường khối hộp trượt xuống dọc theo mặt dốc sang phải). Tính động năng $T$ và thế năng $\Pi$ của cơ hệ.
2. Thiết lập hệ 2 PTVP bằng phương trình Lagrange loại II, chỉ ra tọa độ xiclic và tích phân đầu bảo toàn xung lượng suy rộng.
3. Tính gia tốc $a_M = \ddot{x}$ của nêm và gia tốc tương đối $a_r = \ddot{s}$ của khối hộp dọc mặt dốc.
:::

**Lời giải chi tiết:**

**1. Tính động năng $T$ và thế năng $\Pi$:**
- Vận tốc của nêm: $v_M = \dot{x} \implies T_M = \frac{1}{2}M\dot{x}^2$.
- Tọa độ của khối hộp $m$ trong hệ $Oxy$ ($Ox$ hướng sang phải, $Oy$ hướng lên):
  $$\begin{cases} x_m = x + s\cos\alpha \\ y_m = h_0 - s\sin\alpha \end{cases} \implies \begin{cases} \dot{x}_m = \dot{x} + \dot{s}\cos\alpha \\ \dot{y}_m = -\dot{s}\sin\alpha \end{cases}$$
- Bình phương vận tốc tuyệt đối của $m$:
  $$\begin{aligned} v_m^2 &= \dot{x}_m^2 + \dot{y}_m^2 = \dot{x}^2 + 2\dot{x}\dot{s}\cos\alpha + \dot{s}^2\left(\cos^2\alpha + \sin^2\alpha\right) \\ &= \dot{x}^2 + 2\dot{x}\dot{s}\cos\alpha + \dot{s}^2 \end{aligned}$$
- Tổng động năng của hệ:
  $$T = \frac{1}{2}(M + m)\dot{x}^2 + m\dot{x}\dot{s}\cos\alpha + \frac{1}{2}m\dot{s}^2$$
- Chọn mốc thế năng tại $y = h_0$ (vị trí $s = 0$):
  $$\Pi = m g (y_m - h_0) = -m g s \sin\alpha$$

**2. Thiết lập PTVP Lagrange II & Tích phân đầu:**
- Các lực suy rộng:
  $$Q_x = -\frac{\partial\Pi}{\partial x} = 0, \qquad Q_s = -\frac{\partial\Pi}{\partial s} = m g\sin\alpha$$
- Vì $\dfrac{\partial T}{\partial x} = 0$ và $Q_x = 0$ (hàm $L = T - \Pi$ không chứa tường minh $x$), nên **$x$ là tọa độ xiclic**. Tích phân đầu bảo toàn xung lượng suy rộng là:
  $$p_x = \frac{\partial T}{\partial\dot{x}} = (M + m)\dot{x} + m\dot{s}\cos\alpha = \text{const}$$
- Viết phương trình Lagrange theo $x$:
  $$\frac{d}{dt}\left(\frac{\partial T}{\partial\dot{x}}\right) - \frac{\partial T}{\partial x} = Q_x \implies (M + m)\ddot{x} + m\ddot{s}\cos\alpha = 0 \quad (1)$$
- Viết phương trình Lagrange theo $s$:
  $$\frac{\partial T}{\partial\dot{s}} = m\dot{x}\cos\alpha + m\dot{s}, \qquad \frac{\partial T}{\partial s} = 0$$
  $$m\ddot{x}\cos\alpha + m\ddot{s} = m g\sin\alpha \implies \ddot{x}\cos\alpha + \ddot{s} = g\sin\alpha \quad (2)$$

**3. Tính giá trị bằng số:**
- Từ $(1)$ rút $\ddot{x} = -\dfrac{m\cos\alpha}{M+m}\ddot{s}$, thế vào $(2)$:
  $$\ddot{s}\left(1 - \frac{m\cos^2\alpha}{M+m}\right) = g\sin\alpha \implies \ddot{s}\left(\frac{M + m\sin^2\alpha}{M+m}\right) = g\sin\alpha$$
  $$\begin{aligned} a_r = \ddot{s} &= \frac{(M + m)g\sin\alpha}{M + m\sin^2\alpha} \\ &= \frac{(6 + 2) \times 9{,}81 \times 0{,}5}{6 + 2(0{,}5)^2} = \frac{39{,}24}{6{,}5} \approx 6{,}0369\text{ m/s}^2 \end{aligned}$$
  $$\ddot{x} = -\frac{m g\sin\alpha\cos\alpha}{M + m\sin^2\alpha} = -\frac{2 \times 9{,}81 \times 0{,}5 \times \frac{\sqrt{3}}{2}}{6{,}5} \approx -1{,}3070\text{ m/s}^2$$
  Dấu âm chứng tỏ nêm giật lùi sang trái với gia tốc độ lớn $a_M = 1{,}3070\text{ m/s}^2$.

---

::: info Ví dụ 17-3: Va chạm vào thanh quay quanh trục cố định & Tâm va chạm
Một thanh đồng chất $OA$ khối lượng $M = 3\text{ kg}$, dài $l = 0{,}9\text{ m}$ treo thẳng đứng quay trơn quanh bản lề cố định $O$ ở đầu trên đang đứng yên ($\omega_1 = 0$). Một viên bi nhỏ khối lượng $m = 0{,}5\text{ kg}$ bay ngang với vận tốc $v_1 = 8\text{ m/s}$ đến va chạm vuông góc vào thanh tại điểm $D$ cách $O$ đoạn $d$.
1. Nếu viên bi va chạm mềm ($k = 0$) găm chặt vào trung điểm thanh ($d = 0{,}45\text{ m}$), tính vận tốc góc $\omega_2$ ngay sau va chạm và phản xung lực $S_{Ox}$ tại ổ trục $O$.
2. Xác định vị trí **tâm va chạm $K$** ($d_K$) để ổ trục $O$ hoàn toàn không chịu xung lực va chạm ($S_{Ox} = 0$). Khi viên bi va chạm vào đúng điểm $K$ với hệ số khôi phục $k = 0{,}5$, tính $\omega_2$, vận tốc $u_1$ của bi sau va chạm và kiểm chứng lại $S_{Ox} = 0$.
:::

**Lời giải chi tiết:**
- Mômen quán tính thanh $OA$ quanh trục $O$: $J_O = \frac{1}{3}M l^2 = \frac{1}{3}(3)(0{,}9)^2 = 0{,}81\text{ kg}\cdot\text{m}^2$. Khoảng cách khối tâm: $a_C = \frac{l}{2} = 0{,}45\text{ m}$.

**1. Va chạm mềm tại trung điểm ($d = 0{,}45\text{ m}$):**
- Xét toàn hệ (thanh + bi), xung lực phản lực tại $O$ có mômen bằng $0$ đối với trục $O$, nên mômen động lượng bảo toàn qua va chạm:
  $$m v_1 d = \left(J_O + m d^2\right)\omega_2$$
  $$\begin{aligned} 0{,}5 \times 8 \times 0{,}45 &= \left(0{,}81 + 0{,}5 \times 0{,}45^2\right)\omega_2 \\ 1{,}8 &= 0{,}91125\,\omega_2 \implies \omega_2 = \frac{160}{81} \approx 1{,}9753\text{ rad/s} \end{aligned}$$
- Áp dụng định lý biến thiên động lượng theo phương ngang $Ox$ (cùng chiều $\vec{v}_1$):
  $$M v_{C2} + m v_{D2} - m v_1 = S_{Ox}$$
  Vì $v_{C2} = v_{D2} = 0{,}45 \times \frac{160}{81} = \frac{8}{9}\text{ m/s}$:
  $$S_{Ox} = (3 + 0{,}5)\left(\frac{8}{9}\right) - 0{,}5(8) = \frac{28}{9} - 4 = -\frac{8}{9} \approx -0{,}8889\text{ N}\cdot\text{s}$$
  Phản xung lực tại $O$ có độ lớn $0{,}8889\text{ N}\cdot\text{s}$ và hướng ngược chiều bay tới của viên bi.

**2. Tâm va chạm $K$ và trường hợp $k = 0{,}5$:**
- Để $S_{Ox} = 0$ khi có xung lực $S$ đập vào thanh tại $d_K$, kết hợp $J_O\omega_2 = d_K S$ và $M a_C\omega_2 = S$:
  $$d_K = \frac{J_O}{M a_C} = \frac{\frac{1}{3}Ml^2}{M\frac{l}{2}} = \frac{2}{3}l = \frac{2}{3}(0{,}9) = 0{,}6\text{ m}$$
- Khi viên bi va chạm vào đúng tâm va chạm $K$ ($d_K = 0{,}6\text{ m}$) với $k = 0{,}5$:
  - Bảo toàn mômen động lượng quanh $O$:
    $$m v_1 d_K = J_O\omega_2 + m u_1 d_K \implies 2{,}4 = 0{,}81\omega_2 + 0{,}3u_1$$
  - Hệ thức hệ số khôi phục tại điểm $K$ (vận tốc thanh tại $K$ sau va chạm là $v_{K2} = d_K\omega_2$):
    $$k = \frac{d_K\omega_2 - u_1}{v_1 - 0} \implies 0{,}6\omega_2 - u_1 = 4 \implies u_1 = 0{,}6\omega_2 - 4$$
  - Thế $u_1$ vào phương trình mômen động lượng:
    $$2{,}4 = 0{,}81\omega_2 + 0{,}3(0{,}6\omega_2 - 4) = 0{,}99\omega_2 - 1{,}2$$
    $$0{,}99\omega_2 = 3{,}6 \implies \omega_2 = \frac{40}{11} \approx 3{,}6364\text{ rad/s}$$
  - Vận tốc bi sau va chạm:
    $$u_1 = 0{,}6\left(\frac{40}{11}\right) - 4 = -\frac{20}{11} \approx -1{,}8182\text{ m/s}\text{ (bật ngược trở lại)}$$
  - Kiểm chứng $S_{Ox} = 0$: Xung lực nhận vào thanh là $S = m(v_1 - u_1) = 0{,}5\left(8 + \frac{20}{11}\right) = \frac{54}{11}\text{ N}\cdot\text{s}$; động lượng thanh sau va chạm là $M a_C \omega_2 = 3(0{,}45)\left(\frac{40}{11}\right) = \frac{54}{11}\text{ N}\cdot\text{s}$. Vì $M a_C \omega_2 = S$, suy ra $S_{Ox} = M a_C\omega_2 - S = 0$.

---

### 4. Bẫy hay sai & Bài tập tự luyện có đáp số

::: warning 5 Bẫy hay sai ở Ngày 17
1. **Tính đúp lực thế trong Lagrange II:** Nếu đã đưa trọng lực hoặc lực đàn hồi vào thế năng $\Pi$ để tính $Q_\alpha = -\frac{\partial\Pi}{\partial q_\alpha}$, tuyệt đối không được tính thêm công của chúng vào $Q_\alpha$ lần nữa!
2. **Bỏ sót $-\dfrac{\partial T}{\partial q_\alpha}$:** Khi $T$ chứa cả tọa độ $q_\alpha$ (như $\frac{1}{2}m r^2\dot{\theta}^2$ trong tọa độ cực hay $\cos(\varphi_1-\varphi_2)$ trong con lắc kép), quên trừ $\frac{\partial T}{\partial q_\alpha}$ là mất hẳn lực ly tâm hoặc lực tương hỗ.
3. **Đưa trọng lực hay lực lò xo vào phương trình va chạm:** Trong thời gian $\tau \to 0$, mọi lực hữu hạn đều có xung lượng bằng $0$; chỉ xung lực va chạm $\vec{S}$ và phản xung lực liên kết $\vec{S}_O$ mới xuất hiện.
4. **Nhầm $J_C$ vào công thức tâm va chạm:** Công thức đúng là $d_K = \dfrac{J_O}{M a_C}$ (dùng mômen quán tính quanh **trục quay $O$**, không phải $J_C$!).
5. **Dùng nhầm $a_C$ là gia tốc trong tâm va chạm:** Trong công thức $d_K = \frac{J_O}{M a_C}$, ký hiệu $a_C = OC$ là **khoảng cách hình học** từ trục quay $O$ tới khối tâm $C$.
:::

::: info Bài tập tự luyện Ngày 17
- **Bài 17.1 (Nguyên lý công ảo):** Cơ cấu tay quay – thanh truyền nằm ngang gồm tay quay $OA = r = 0{,}2\text{ m}$ chịu ngẫu lực $M$ và thanh truyền $AB = l = 0{,}4\text{ m}$ nối con trượt $B$ chịu lực đẩy ngang $P = 100\text{ N}$ hướng về $O$. Ở vị trí $\widehat{AOB} = \alpha = 30^\circ$ (ký hiệu $\beta = \widehat{ABO}$), dùng Nguyên lý công ảo tính mômen $M$ cân bằng.
  - *Đáp số:* $M = P r\dfrac{\sin(\alpha+\beta)}{\cos\beta} \approx 14{,}47\text{ N}\cdot\text{m}$ (với $\sin\beta = \frac{r}{l}\sin\alpha = 0{,}25$).
- **Bài 17.2 (Phương trình Lagrange II & Dao động nhỏ):** Con trượt khối lượng $M = 4\text{ kg}$ trượt không ma sát dọc thanh ngang cố định; tại con trượt treo con lắc đơn gồm quả nặng $m = 1\text{ kg}$ và dây nhẹ dài $l = 0{,}5\text{ m}$ ($g = 9{,}81\text{ m/s}^2$). Lập PTVP theo $(x, \varphi)$, chỉ ra tích phân đầu và tính tần số góc dao động nhỏ $\omega_0$ khi $\varphi \ll 1$.
  - *Đáp số:* $(M+m)\ddot{x} + ml(\ddot{\varphi}\cos\varphi - \dot{\varphi}^2\sin\varphi) = 0$ (tích phân $p_x = (M+m)\dot{x} + ml\dot{\varphi}\cos\varphi = \text{const}$), $l\ddot{\varphi} + \ddot{x}\cos\varphi + g\sin\varphi = 0$; tần số dao động nhỏ $\omega_0 = \sqrt{\dfrac{g(M+m)}{M l}} \approx 4{,}95\text{ rad/s}$.
- **Bài 17.3 (Va chạm thẳng & Định lý Carnot):** Hai quả cầu nhẵn khối lượng $m_1 = 2\text{ kg}$, $m_2 = 3\text{ kg}$ chuyển động cùng chiều trên đường nối tâm với vận tốc $v_1 = 6\text{ m/s}$, $v_2 = 1\text{ m/s}$, va chạm với hệ số khôi phục $k = 0{,}6$. Tính vận tốc $u_1, u_2$ sau va chạm và phần động năng tiêu hao $\Delta T$.
  - *Đáp số:* $u_1 = 1{,}2\text{ m/s}$, $u_2 = 4{,}2\text{ m/s}$; $\Delta T = 9{,}6\text{ J}$.
:::

---

## Đề Kiểm Tra Chốt Chặng 3 (45 Phút — Thang Điểm 10)

Hãy tự bấm đồng hồ đúng **45 phút** để giải trọn vẹn 3 bài tự luận dưới đây trước khi mở phần lời giải và thang điểm chi tiết.

### Đề bài (Tổng 10,0 điểm)

**Bài 1 (3,0 điểm — Chuyển động tương đối & Dao động):**
Một thanh thẳng có rãnh nhẵn nằm ngang quay đều quanh trục thẳng đứng $Oz$ đi qua đầu $O$ với vận tốc góc $\omega = 4\text{ rad/s}$. Trong rãnh có một con trượt $M$ khối lượng $m = 0{,}5\text{ kg}$ được nối với đầu $O$ bằng một lò xo có độ cứng $c = 26\text{ N/m}$, chiều dài tự nhiên $l_0 = 0{,}36\text{ m}$. Tại $t = 0$, kéo con trượt ra vị trí cách $O$ đoạn $x_0 = 0{,}62\text{ m}$ rồi thả không vận tốc tương đối ($v_{r0} = 0$).
1. Thiết lập PTVP chuyển động tương đối $x(t)$ dọc theo rãnh, tìm vị trí cân bằng tương đối $x_{\text{cb}}$ và tần số góc dao động tương đối $\Omega_0$. *(1,5 điểm)*
2. Viết phương trình chuyển động $x(t)$ và tính áp lực ngang cực đại $N_{y,\max}$ do lực quán tính Coriolis gây ra lên thành rãnh. *(1,5 điểm)*

**Bài 2 (3,5 điểm — Định lý Động năng & Nguyên lý Đalămbe):**
Một hình trụ tròn đặc đồng chất $A$ khối lượng $m_1 = 8\text{ kg}$, bán kính $R = 0{,}25\text{ m}$ lăn không trượt trên mặt phẳng nghiêng góc $\alpha = 30^\circ$ so với phương ngang. Sợi dây nhẹ không giãn gắn vào tâm $C$ của trụ $A$, chạy song song lên trên dọc mặt dốc, vắt qua ròng rọc cố định $B$ (đĩa tròn đặc đồng chất khối lượng $m_0 = 4\text{ kg}$, bán kính $r = 0{,}2\text{ m}$) rồi treo thẳng đứng vật nặng $D$ khối lượng $m_2 = 10\text{ kg}$. Hệ bắt đầu chuyển động từ trạng thái nghỉ ($g = 9{,}81\text{ m/s}^2$).
1. Dùng Định lý biến thiên động năng (dạng hữu hạn và vi phân) tính vận tốc $v$ của vật $D$ khi nó hạ xuống được $s = 1{,}2\text{ m}$ và gia tốc $a$ của vật $D$. *(1,75 điểm)*
2. Dùng Nguyên lý Đalămbe (tách vật) tính lực căng hai nhánh dây $T_1, T_2$, lực ma sát nghỉ $F_{\text{ms}}$ tại tiếp điểm của trụ $A$ và tìm điều kiện hệ số ma sát nghỉ $f_t$ để trụ $A$ lăn không trượt. *(1,75 điểm)*

**Bài 3 (3,5 điểm — Lagrange loại II & Lý thuyết va chạm):**
1. *(2,0 điểm)* Con trượt $A$ khối lượng $M = 3\text{ kg}$ trượt không ma sát dọc thanh dẫn nằm ngang cố định và nối với tường trái cố định bằng lò xo ngang độ cứng $c = 48\text{ N/m}$ (lò xo không biến dạng khi $x = 0$). Tại $A$ treo bản lề một thanh mảnh đồng chất $AB$ khối lượng $m = 3\text{ kg}$, dài $l = 0{,}6\text{ m}$. Chọn hai tọa độ suy rộng $q_1 = x$ (hoành độ của $A$) và $q_2 = \varphi$ (góc lệch của $AB$ so với phương thẳng đứng dưới). Dùng phương trình Lagrange loại II lập hệ 2 PTVP chuyển động (cả dạng tổng quát và dạng tuyến tính hóa khi dao động nhỏ $\varphi \ll 1$, lấy $g = 9{,}81\text{ m/s}^2$).
2. *(1,5 điểm)* Giữ cố định bản lề $A$ và cho thanh đồng chất $AB$ nói trên ($m = 3\text{ kg}, \; l = 0{,}6\text{ m}$) đứng yên thẳng đứng ($\omega_1 = 0$). Dùng búa gõ ngang vào thanh một xung lực $S = 6\text{ N}\cdot\text{s}$ tại điểm $K$ cách $A$ đoạn $d_K$ sao cho phản xung lực tại ổ trục $A$ bằng không ($S_A = 0$). Tính $d_K$ và vận tốc góc $\omega_2$ của thanh ngay sau va chạm.

---

### Lời giải chi tiết & Biểu điểm chấm (`10,0 điểm`)

#### Lời giải Bài 1 (`3,0 điểm`)
1. **Thiết lập PTVP và tìm $x_{\text{cb}}, \; \Omega_0$ (`1,5 điểm`):**
   - Gắn hệ trục động $Oxyz$ với thanh quay ($Ox$ dọc rãnh ra ngoài, $Oz$ hướng lên theo $\vec{\omega}_e = \omega\vec{k}$, $Oy$ vuông góc rãnh trong mặt phẳng ngang). *(0,25 đ)*
   - Lực tác dụng theo phương $Ox$: lực đàn hồi $F_{\text{đh}} = -c(x - l_0)$ và lực quán tính theo (ly tâm) $F_{\text{qt}}^e = m\omega^2 x$. *(0,5 đ)*
   - Chiếu PTVP lên $Ox$:
     $$m\ddot{x} = m\omega^2 x - c(x - l_0) \implies m\ddot{x} + (c - m\omega^2)x = c l_0$$
     Thay số ($m = 0{,}5, \; \omega = 4, \; c = 26, \; l_0 = 0{,}36$):
     $$0{,}5\ddot{x} + (26 - 0{,}5 \times 16)x = 26 \times 0{,}36 \implies 0{,}5\ddot{x} + 18x = 9{,}36 \implies \ddot{x} + 36x = 18{,}72 \quad (0{,}25\text{ đ})$$
   - Vì $c - m\omega^2 = 18 > 0$, con trượt dao động điều hòa quanh vị trí cân bằng tương đối:
     $$x_{\text{cb}} = \frac{c l_0}{c - m\omega^2} = \frac{9{,}36}{18} = 0{,}52\text{ m}, \qquad \Omega_0 = \sqrt{\frac{c - m\omega^2}{m}} = \sqrt{36} = 6\text{ rad/s} \quad (0{,}5\text{ đ})$$
2. **Phương trình $x(t)$ và áp lực ngang cực đại $N_{y,\max}$ (`1,5 điểm`):**
   - Đặt $u = x - x_{\text{cb}}$, ta có $\ddot{u} + 36u = 0$, với $u(0) = 0{,}62 - 0{,}52 = 0{,}10\text{ m}$ và $\dot{u}(0) = 0$:
     $$x(t) = 0{,}52 + 0{,}10\cos(6t)\text{ (m)} \quad (0{,}5\text{ đ})$$
   - Vận tốc tương đối dọc rãnh: $v_r(t) = \dot{x}(t) = -0{,}6\sin(6t)\text{ (m/s)} \implies \lvert v_r\rvert_{\max} = 0{,}6\text{ m/s}$. *(0,25 đ)*
   - Chiếu PTVP tương đối lên trục $Oy$: $\vec{F}_{\text{qt}}^c = -2m(\omega\vec{k} \times \dot{x}\vec{i}) = -2m\omega\dot{x}\vec{j}$. Chiếu lực được $0 = N_y - 2m\omega\dot{x} \implies N_y = 2m\omega\dot{x}$. *(0,5 đ)*
   - Áp lực ngang cực đại tác dụng lên thành rãnh:
     $$N_{y,\max} = 2 m \omega \lvert v_r\rvert_{\max} = 2 \times 0{,}5 \times 4 \times 0{,}6 = 2{,}4\text{ N} \quad (0{,}25\text{ đ})$$

#### Lời giải Bài 2 (`3,5 điểm`)
1. **Định lý biến thiên động năng (`1,75 điểm`):**
   - Do $m_2 g = 10g > m_1 g\sin 30^\circ = 4g$, vật $D$ đi xuống và trụ $A$ lăn lên dốc. Liên hệ động học: $v_C = v_D = v$, $\omega_A = \frac{v}{R}$, $\omega_B = \frac{v}{r}$. *(0,25 đ)*
   - Động năng toàn cơ hệ:
     $$T_A = \frac{3}{4}m_1 v^2 = 6v^2, \quad T_B = \frac{1}{4}m_0 v^2 = v^2, \quad T_D = \frac{1}{2}m_2 v^2 = 5v^2$$
     Suy ra tổng động năng $T = 12v^2$. *(0,5 đ)*
   - Tổng công ngoại lực khi $D$ xuống đoạn $s$ (ma sát nghỉ lăn không trượt không sinh công):
     $$\sum A = m_2 g s - m_1 g s \sin 30^\circ = (10 - 4)g s = 6 g s = 58{,}86\,s \quad (0{,}5\text{ đ})$$
   - Tại $s = 1{,}2\text{ m}$, từ $T - 0 = \sum A \implies 12v^2 = 6 \times 9{,}81 \times 1{,}2$, tính được $v = \sqrt{5{,}886} \approx 2{,}4261\text{ m/s}$. *(0,25 đ)*
   - Vi phân $dT = dA \implies 24v\,dv = 6g\,ds$, suy ra gia tốc $a = \dfrac{6g}{24} = \dfrac{g}{4} = 2{,}4525\text{ m/s}^2$. *(0,25 đ)*
2. **Nguyên lý Đalămbe tách vật (`1,75 điểm`):**
   - Vật $D$: $m_2 g - T_2 - m_2 a = 0 \implies T_2 = 10(9{,}81 - 2{,}4525) = 73{,}575\text{ N}$. *(0,5 đ)*
   - Ròng rọc $B$: $(T_2 - T_1)r - J_B\varepsilon_B = 0 \implies T_2 - T_1 = \frac{1}{2}m_0 a = 4{,}905\text{ N}$, suy ra $T_1 = 73{,}575 - 4{,}905 = 68{,}67\text{ N}$. *(0,5 đ)*
   - Trụ $A$: dây kéo qua tâm $C$ nên chỉ có $\vec{F}_{\text{ms}}$ tạo mômen quanh $C$; để trụ lăn lên dốc (chiều $\varepsilon_A$ làm mặt dưới quay lùi xuống), $\vec{F}_{\text{ms}}$ phải hướng **xuống dọc theo mặt dốc**:
     $$F_{\text{ms}} R - J_{CA}\varepsilon_A = 0 \implies F_{\text{ms}} = \frac{1}{2}m_1 a = 4 \times 2{,}4525 = 9{,}81\text{ N} \quad (0{,}5\text{ đ})$$
     *(Kiểm tra lực dọc dốc trên $A$: $T_1 - m_1 g\sin 30^\circ - F_{\text{ms}} - m_1 a = 68{,}67 - 39{,}24 - 9{,}81 - 19{,}62 = 0$, khớp tuyệt đối).*
   - Phản lực pháp tuyến $N_1 = m_1 g\cos 30^\circ = 8(9{,}81)\frac{\sqrt{3}}{2} \approx 67{,}9657\text{ N}$. Điều kiện lăn không trượt:
     $$f_t \ge \frac{F_{\text{ms}}}{N_1} = \frac{9{,}81}{67{,}9657} = \frac{1}{4\sqrt{3}} \approx 0{,}1443 \quad (0{,}25\text{ đ})$$

#### Lời giải Bài 3 (`3,5 điểm`)
1. **Lập PTVP bằng Lagrange loại II (`2,0 điểm`):**
   - Khối tâm $C$ của thanh $AB$ (trung điểm, $AC = l/2$) có tọa độ $x_C = x + \frac{l}{2}\sin\varphi$, $y_C = -\frac{l}{2}\cos\varphi$.
     $$\dot{x}_C = \dot{x} + \frac{l}{2}\dot{\varphi}\cos\varphi, \qquad \dot{y}_C = \frac{l}{2}\dot{\varphi}\sin\varphi \implies v_C^2 = \dot{x}^2 + l\dot{x}\dot{\varphi}\cos\varphi + \frac{l^2}{4}\dot{\varphi}^2 \quad (0{,}5\text{ đ})$$
   - Động năng toàn hệ (với $J_C = \frac{1}{12}m l^2$):
     $$T = \frac{1}{2}M\dot{x}^2 + \frac{1}{2}m\left(\dot{x}^2 + l\dot{x}\dot{\varphi}\cos\varphi + \frac{l^2}{4}\dot{\varphi}^2\right) + \frac{1}{2}\left(\frac{1}{12}m l^2\right)\dot{\varphi}^2$$
     $$T = \frac{1}{2}(M + m)\dot{x}^2 + \frac{1}{2}m l \dot{x}\dot{\varphi}\cos\varphi + \frac{1}{6}m l^2\dot{\varphi}^2 \quad (0{,}5\text{ đ})$$
   - Thế năng $\Pi = \frac{1}{2}c x^2 - m g\frac{l}{2}\cos\varphi \implies Q_x = -cx, \quad Q_\varphi = -\frac{1}{2}m g l\sin\varphi$. *(0,25 đ)*
   - Lấy đạo hàm thay vào phương trình Lagrange II cho $x$ và $\varphi$:
     $$\begin{cases} (M + m)\ddot{x} + \dfrac{1}{2}m l\left(\ddot{\varphi}\cos\varphi - \dot{\varphi}^2\sin\varphi\right) + c x = 0 \\ \dfrac{1}{3}m l^2\ddot{\varphi} + \dfrac{1}{2}m l\ddot{x}\cos\varphi + \dfrac{1}{2}m g l\sin\varphi = 0 \end{cases}$$
     Thay số ($M = 3, \; m = 3, \; l = 0{,}6, \; c = 48, \; g = 9{,}81$):
     $$\begin{cases} 6\ddot{x} + 0{,}9\left(\ddot{\varphi}\cos\varphi - \dot{\varphi}^2\sin\varphi\right) + 48 x = 0 \\ 0{,}36\ddot{\varphi} + 0{,}9\ddot{x}\cos\varphi + 8{,}829\sin\varphi = 0 \end{cases} \quad (0{,}5\text{ đ})$$
   - Tuyến tính hóa khi dao động nhỏ ($\cos\varphi \approx 1, \; \sin\varphi \approx \varphi, \; \dot{\varphi}^2 \approx 0$):
     $$\begin{cases} 6\ddot{x} + 0{,}9\ddot{\varphi} + 48 x = 0 \\ 0{,}9\ddot{x} + 0{,}36\ddot{\varphi} + 8{,}829\varphi = 0 \end{cases} \quad (0{,}25\text{ đ})$$
2. **Tâm va chạm của thanh quay quanh bản lề $A$ (`1,5 điểm`):**
   - Mômen quán tính quanh $A$: $J_A = \frac{1}{3}m l^2 = \frac{1}{3}(3)(0{,}6)^2 = 0{,}36\text{ kg}\cdot\text{m}^2$, $a_C = \frac{l}{2} = 0{,}3\text{ m}$. *(0,5 đ)*
   - Khoảng cách tâm va chạm $K$ để $S_A = 0$:
     $$d_K = \frac{J_A}{m a_C} = \frac{0{,}36}{3 \times 0{,}3} = 0{,}4\text{ m} \quad \left(= \frac{2}{3}l\right) \quad (0{,}5\text{ đ})$$
   - Áp dụng định lý biến thiên mômen động lượng khi va chạm quanh trục $A$ (với $\omega_1 = 0$):
     $$J_A(\omega_2 - 0) = d_K \cdot S \implies \omega_2 = \frac{0{,}4 \times 6}{0{,}36} = \frac{20}{3} \approx 6{,}67\text{ rad/s} \quad (0{,}5\text{ đ})$$

---

::: tip Điều hướng lộ trình ôn thi
- Quay lại: [Tổng Quan Lộ Trình 20 Ngày](/on-thi/) | [Chặng 2 (Ngày 7 – Ngày 12): Làm Chủ Động Học](/on-thi/chang-2-dong-hoc)
- Chặng tiếp theo: [Chặng 4 (Ngày 18 – Ngày 20): Sổ Tay Công Thức, 20 Bẫy Đề Thi & 3 Đề Thực Chiến (`90 → 100 Điểm`)](/on-thi/chang-4-ve-dich)
:::
