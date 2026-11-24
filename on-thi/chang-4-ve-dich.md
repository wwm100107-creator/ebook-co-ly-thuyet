---
title: "Chặng 4 (Ngày 16–20): Chương 14–15, Tài Liệu Tra Cứu A4 & Đề Thi Thử AS1003"
layout: doc
---

# Chặng 4 (Ngày 16 – Ngày 20): Chương 14–15 (Di Chuyển Khả Dĩ, Lagrange Loại II), Tài Liệu Tra Cứu A4 & Đề Thi Thử Tổng Hợp

Trong cấu trúc đề thi Cuối kỳ học phần **Cơ Lý Thuyết (`AS1003` — ĐH Bách Khoa ĐHQG-HCM)**, khối kiến thức **Chương 14 (Nguyên lý di chuyển khả dĩ)** và **Chương 15 (Phương trình tổng quát Động lực học & Phương trình Lagrange loại II)** thường chiếm từ `35%` đến `45%` tổng số câu hỏi: gồm các câu hỏi lý thuyết phân loại liên kết, bài toán giải phóng liên kết tìm phản lực, và chùm `3–4` câu liên hoàn thiết lập động năng $T$, lực suy rộng $Q_i$ cùng hệ `2` phương trình vi phân chuyển động cho cơ hệ `2` bậc tự do.

Chặng 4 hoàn thiện toàn bộ nền tảng giải tích của Cơ học Lý thuyết từ gốc đến chứng minh đại số, tổng hợp tài liệu tra cứu chuẩn khổ A4 dùng trực tiếp trong phòng thi, và kết thúc bằng một đề thi thử tổng hợp 12 câu chuẩn định dạng `AS1003` kèm phiếu tự kiểm toán năng lực.

::: info Lộ trình Chặng 4 (Ngày 16 – Ngày 20)
| Ngày | Nội dung trọng tâm | Mục tiêu năng lực đạt chuẩn | Tài liệu giáo trình & đề thi |
| :--- | :--- | :--- | :--- |
| **Ngày 16** | Phân loại liên kết toán học (Ch.14) & Nguyên lý di chuyển khả dĩ | Phân biệt liên kết giữ/không giữ, dừng/không dừng, holonom/không holonom (điều kiện khả tích Frobenius); chứng minh nguyên lý công khả dĩ và giải phóng 1 liên kết tìm phản lực | [ĐLH Chương 4](/dong-luc-hoc/chuong-4) · [BT ĐLH Chương 3](/bai-tap/dong-luc-hoc/chuong-3) |
| **Ngày 17** | Phương trình Đalămbe–Lagrange & Động năng $T(q_1,q_2,\dot{q}_1,\dot{q}_2)$ (Ch.15) | Chứng minh phương trình Lagrange loại II; thiết lập $\vec{v}_C = \vec{v}_e + \vec{v}_r$ và dạng toàn phương $T = \frac{1}{2}\dot{q}^T M(q)\dot{q}$ cho 4 mô hình 2 BTD chuẩn | [ĐLH Chương 6](/dong-luc-hoc/chuong-6) · [BT ĐLH Chương 5](/bai-tap/dong-luc-hoc/chuong-5) |
| **Ngày 18** | Lực suy rộng $Q_i$ & Kiểm toán cấu trúc hệ 2 PT Lagrange II | Tính $Q_i = -\frac{\partial\Pi}{\partial q_i} + Q_i^{(kt)}$ (trọng lực, lò xo, ngẫu, cản nhớt, ma sát trượt giữa hai vật di động); chứng minh tính đối xứng $M_{12}=M_{21}$ và quy luật triệt tiêu số hạng $\dot{q}_1\dot{q}_2$ | [Đề thi thật HCMUT](/on-thi/de-thi-that-hcmut) |
| **Ngày 19** | Tài liệu tra cứu kỹ thuật in A4 (2 mặt) | Hệ thống bảng tra cứu cô đọng cho Ch.9–15, danh mục 12 lỗi tính toán phổ biến và 4 phép tự kiểm toán đại số | [Tổng quan lộ trình](/on-thi/) |
| **Ngày 20** | Đề thi thử tổng hợp 12 câu (90 phút) & Phiếu kiểm toán năng lực | Thực hành bấm giờ chuẩn phòng thi AS1003, đối chiếu lời giải kiểm toán SymPy và xác định lỗ hổng cần xử lý trong 24 giờ cuối | [Ngân hàng đề thi thật](/on-thi/de-thi-that-hcmut) |
:::

::: info Điều hướng lộ trình 20 ngày
- [Tổng Quan Lộ Trình 20 Ngày (AS1003)](/on-thi/) · [Ngân Hàng Đề Thi Thật HCMUT AS1003](/on-thi/de-thi-that-hcmut)
- Các chặng trước: [Chặng 1 (Nền Tảng & Ch.9–10)](/on-thi/chang-1-tinh-hoc) · [Chặng 2 (Ch.11, 12.1 & 13 D'Alembert)](/on-thi/chang-2-dong-hoc) · [Chặng 3 (Ch.12.2–12.3 Động Năng)](/on-thi/chang-3-dong-luc-hoc)
:::

---

## Ngày 16: Phân Loại Liên Kết Toán Học (Ch.14) & Nguyên Lý Di Chuyển Khả Dĩ

### 16.1. Định nghĩa và phân loại liên kết theo cấu trúc phương trình

Xét cơ hệ gồm $N$ chất điểm có tọa độ Đề các $\{x_k, y_k, z_k\}$ và vận tốc $\{\dot{x}_k, \dot{y}_k, \dot{z}_k\}$ ($k = 1, \dots, N$). **Liên kết** là các điều kiện ràng buộc về mặt hình học hoặc động học đặt lên vị trí và vận tốc của các chất điểm, độc lập với hệ lực tác dụng và điều kiện ban đầu (xem [ĐLH Chương 4 — Mục 4.1.2](/dong-luc-hoc/chuong-4)). Về mặt toán học, $s$ liên kết được biểu diễn bởi hệ phương trình hoặc bất phương trình:

$$f_\alpha(t, x_1, y_1, z_1, \dots, x_N, y_N, z_N, \dot{x}_1, \dots, \dot{z}_N) \le 0 \quad (\alpha = 1, \dots, s)$$

Liên kết được phân loại chặt chẽ theo ba tiêu chuẩn toán học độc lập:

#### 1. Liên kết giữ (hai phía) và liên kết không giữ (một phía)
- **Liên kết giữ (bilateral):** biểu diễn bằng **đẳng thức** $f_\alpha = 0$. Chất điểm không thể tách rời khỏi mặt hoặc đường liên kết về cả hai phía (ví dụ: thanh cứng nhẹ $OM$ chiều dài $l$ quay quanh $O$ có phương trình $x^2 + y^2 - l^2 = 0$; khớp bản lề; con trượt trong rãnh kín).
- **Liên kết không giữ (unilateral):** biểu diễn bằng **bất đẳng thức** $f_\alpha \le 0$ (hoặc $f_\alpha \ge 0$). Ví dụ con lắc treo bằng dây mềm không dãn chiều dài $l$ chỉ ngăn chất điểm đi ra xa $O$ quá $l$, không ngăn dây bị chùng: $f(x, y) \equiv x^2 + y^2 - l^2 \le 0$ (Hình 4–2). Mặt tựa đỡ vật từ phía dưới cũng là liên kết không giữ ($z \ge 0$).

<div class="figure-container"><img src="/figures/dong-luc-hoc/hinh_4_2.svg" alt="Con lắc dây mềm chịu liên kết không giữ" class="figure-img" /><p class="figure-caption">Hình 16-1 (Giáo trình ĐLH Hình 4-2): Con lắc dây mềm chiều dài l chịu liên kết không giữ dạng bất đẳng thức.</p></div>

#### 2. Liên kết dừng và liên kết không dừng
- **Liên kết dừng (scleronomic):** phương trình liên kết **không chứa biến thời gian $t$ một cách tường minh**, tức $\dfrac{\partial f_\alpha}{\partial t} \equiv 0$ (ví dụ mặt bàn cố định, cơ cấu bốn khâu có các gối cố định).
- **Liên kết không dừng (rheonomic):** phương trình liên kết **chứa $t$ tường minh**, tức $\dfrac{\partial f_\alpha}{\partial t} \neq 0$. Ví dụ con lắc có chiều dài dây thay đổi theo quy luật cho trước $l = l(t)$ với phương trình $x^2 + y^2 - l^2(t) = 0$ (Hình 4–3), hoặc mặt phẳng nâng hạ theo luật $z = v_0 t$.

<div class="figure-container"><img src="/figures/dong-luc-hoc/hinh_4_3.svg" alt="Con lắc có chiều dài thay đổi theo thời gian" class="figure-img" /><p class="figure-caption">Hình 16-2 (Giáo trình ĐLH Hình 4-3): Con lắc có chiều dài l(t) thay đổi theo thời gian — ví dụ chuẩn của liên kết không dừng.</p></div>

#### 3. Liên kết hình học (holonom), liên kết vi phân khả tích và liên kết không holonom
- **Liên kết hình học:** phương trình ràng buộc chỉ chứa tọa độ và thời gian:
  $$f_\alpha(t, q_1, \dots, q_m) = 0$$
  Lấy vi phân toàn phần theo thời gian thu được ngay phương trình ràng buộc trên vận tốc:
  $$\sum_{i=1}^m \frac{\partial f_\alpha}{\partial q_i}\dot{q}_i + \frac{\partial f_\alpha}{\partial t} = 0$$
  Vì vậy liên kết hình học đặt ràng buộc lên **cả vị trí lẫn vận tốc**.
- **Liên kết vi phân (động học tuyến tính theo vận tốc):** có dạng tổng quát Pfaff:
  $$\sum_{i=1}^m A_i(q_1, \dots, q_m, t)\,\dot{q}_i + B(q_1, \dots, q_m, t) = 0 \iff \sum_{i=1}^m A_i\,dq_i + B\,dt = 0$$
  Để phân định một liên kết vi phân là **holonom** hay **không holonom**, phải kiểm tra **điều kiện khả tích** — tức sự tồn tại của thừa số tích phân $\mu(q, t) \neq 0$ và hàm vô hướng $F(q, t)$ sao cho $\mu\left(\sum A_i\,dq_i + B\,dt\right) = dF$:
  - **Trường hợp 2 biến** $A_1(q_1, q_2)\,dq_1 + A_2(q_1, q_2)\,dq_2 = 0$: luôn tồn tại thừa số tích phân (về mặt địa phương), nên mọi liên kết vi phân hai biến dừng đều **khả tích** và là **holonom**.
  - **Trường hợp 3 biến** $\vec{A}(q_1, q_2, q_3) \cdot d\vec{q} = 0$ (với $\vec{A} = (A_1, A_2, A_3)$): theo định lý Frobenius, phương trình khả tích khi và chỉ khi:
    $$\vec{A} \cdot (\nabla \times \vec{A}) = 0$$
    Nếu $\vec{A} \cdot (\nabla \times \vec{A}) \neq 0$, phương trình **không khả tích** và liên kết là **không holonom thực sự**.

| Ví dụ điển hình | Phương trình vi phân liên kết | Kiểm tra điều kiện khả tích | Kết luận |
| :--- | :--- | :--- | :--- |
| Đĩa tròn bán kính $R$ lăn không trượt trên đường thẳng | $\dot{x} - R\dot{\varphi} = 0$<br>($dx - R\,d\varphi = 0$) | Tích phân trực tiếp thành $x - R\varphi = C$ | **Holonom** (vi phân khả tích) |
| Lưỡi dao trượt băng / bánh xe lăn không trượt trên mặt phẳng 3D $(x, y, \theta)$ | $\dot{x}\sin\theta - \dot{y}\cos\theta = 0$<br>($\sin\theta\,dx - \cos\theta\,dy = 0$) | $\vec{A} = (\sin\theta, -\cos\theta, 0)$<br>$\nabla\times\vec{A} = (-\sin\theta, \cos\theta, 0)$<br>$\vec{A}\cdot(\nabla\times\vec{A}) = -1 \neq 0$ | **Không holonom** thực sự |
| Đĩa lăn không trượt trong không gian 3D (góc hướng $\theta$, tự quay $\varphi$) | $\dot{x} = R\dot{\varphi}\cos\theta$<br>$\dot{y} = R\dot{\varphi}\sin\theta$ | Khử $\dot{\varphi}$ thu $\dot{x}\sin\theta - \dot{y}\cos\theta = 0$, không khả tích về hàm tọa độ | **Không holonom** thực sự |

Hệ quả trực tiếp dùng để trả lời chính xác các câu lý thuyết đề thi thật HCMUT:
- **Đề `0001/2016` Câu 1 (`1d`):** Với cơ hệ liên kết **holonom**, phương trình $f(\vec{r}_k, t) = 0$ ràng buộc trực tiếp vị trí và đạo hàm $\dot{f} = 0$ ràng buộc vận tốc $\implies$ ràng buộc **vị trí và vận tốc**.
- **Đề `0002/2016` Câu 1 (`1d`):** Với cơ hệ **không holonom**, không tồn tại phương trình tọa độ $F(q) = 0$ khóa miền cấu hình (lưỡi dao hay bánh xe vẫn có thể tiến tới mọi điểm $(x, y)$ với mọi góc hướng $\theta$), nhưng vectơ vận tốc tại mỗi thời điểm bị khóa bởi phương trình vi phân $\implies$ **vị trí tùy ý nhưng vận tốc không tùy ý**.
- *Phân biệt với Câu 2 của hai đề trên (thuộc Chương 12, không phải Chương 14):* Đề `0001/2016` Câu 2 (`2d`) hỏi điều kiện vật rắn chuyển động tịnh tiến là $\sum \vec{m}_C(\vec{F}_k^{(e)}) = \vec{0}$ (không yêu cầu $\sum \vec{F}_k^{(e)} = \vec{0}$); Đề `0002/2016` Câu 2 (`2c`) hỏi chuyển động khối tâm $C$ chỉ chịu ảnh hưởng của **ngoại lực** theo $M\vec{a}_C = \sum \vec{F}_k^{(e)}$.

---

### 16.2. Di chuyển khả dĩ, liên kết lý tưởng và chứng minh Nguyên lý Di chuyển Khả dĩ

#### 1. Di chuyển khả dĩ $\delta\vec{r}_k$ và sự khác biệt với di chuyển thật $d\vec{r}_k$
**Di chuyển khả dĩ** $\{\delta\vec{r}_k\}$ ($k = 1, \dots, N$) là tập hợp các dịch chuyển vô cùng bé tưởng tượng của các chất điểm từ vị trí đang xét sang vị trí lân cận phù hợp với các liên kết **tại thời điểm $t$ được giữ cố định ($\delta t = 0$)**.

Xét hệ liên kết giữ $f_\alpha(t, \vec{r}_1, \dots, \vec{r}_N) = 0$. So sánh hai phương trình vi phân:
- **Di chuyển khả dĩ** (đóng băng thời gian $t$):
  $$\delta f_\alpha = \sum_{k=1}^N \frac{\partial f_\alpha}{\partial \vec{r}_k} \cdot \delta\vec{r}_k = 0$$
- **Di chuyển thật** (trong khoảng thời gian $dt$, cấu hình chuyển từ $t$ sang $t + dt$):
  $$df_\alpha = \sum_{k=1}^N \frac{\partial f_\alpha}{\partial \vec{r}_k} \cdot d\vec{r}_k + \frac{\partial f_\alpha}{\partial t}\,dt = 0$$

Từ hai hệ thức trên suy ra kết luận quan trọng:
- Với **liên kết dừng** ($\partial f_\alpha / \partial t = 0$), di chuyển thật $d\vec{r}_k$ luôn trùng với một trong các di chuyển khả dĩ $\delta\vec{r}_k$.
- Với **liên kết không dừng** ($\partial f_\alpha / \partial t \neq 0$, Hình 4–4), mặt liên kết dịch chuyển từ $P$ sang $P'$ trong khoảng $dt$ nên $d\vec{r}_k$ **không** nằm trong tập hợp các $\delta\vec{r}_k$ nằm trên mặt $P$.

<div class="figure-container"><img src="/figures/dong-luc-hoc/hinh_4_4.svg" alt="So sánh di chuyển thật và di chuyển khả dĩ trên mặt phẳng di động" class="figure-img" /><p class="figure-caption">Hình 16-3 (Giáo trình ĐLH Hình 4-4): So sánh di chuyển thật dr (từ mặt P sang P') và tập hợp di chuyển khả dĩ trên mặt P cố định tại thời điểm t.</p></div>

#### 2. Liên kết lý tưởng
Phân chia lực tác dụng lên chất điểm $M_k$ thành **lực hoạt động** $\vec{F}_k^{(e)}$ (trọng lực, lực đàn hồi, lực đẩy, ngẫu dẫn động, lực ma sát trượt khi trượt...) và **phản lực liên kết** $\vec{N}_k$. Liên kết gọi là **lý tưởng** khi tổng công khả dĩ của toàn bộ phản lực liên kết triệt tiêu trên mọi di chuyển khả dĩ:

$$\sum_{k=1}^N \vec{N}_k \cdot \delta\vec{r}_k = 0$$

Các liên kết lý tưởng thường gặp trong bài toán cơ học (đối chiếu [BT ĐLH Chương 3 — Mục 3.1.1](/bai-tap/dong-luc-hoc/chuong-3)):
1. Vật rắn tuyệt đối (tổng công nội lực liên kết giữa các phần tử bằng $0$).
2. Mặt tựa nhẵn không ma sát ($\vec{N} \perp \delta\vec{r}$), khớp bản lề không ma sát, dây mềm không dãn vắt qua ròng rọc không trượt và không ma sát ổ trục.
3. **Vật rắn lăn không trượt trên mặt tựa nhẵn hoặc nhám (Hình 3–3):** tại điểm tiếp xúc tức thời $I$, vận tốc và di chuyển khả dĩ đều bằng không ($\delta\vec{r}_I = \vec{0}$), nên cả phản lực pháp tuyến $\vec{N}$ lẫn lực ma sát nghỉ $\vec{F}_{\text{ms nghỉ}}$ đều sinh công khả dĩ bằng $0$:
   $$(\vec{N} + \vec{F}_{\text{ms nghỉ}}) \cdot \delta\vec{r}_I = 0$$
   Ngược lại, khi xảy ra **trượt có ma sát**, điểm tiếp xúc dịch chuyển tương đối $\delta\vec{r}_I \neq \vec{0}$ nên lực ma sát trượt động sinh công khả dĩ khác không; khi áp dụng nguyên lý công khả dĩ hoặc phương trình Lagrange II, bắt buộc phải xếp lực ma sát trượt động vào nhóm **lực hoạt động**.

<div class="figure-container"><img src="/figures/bai-tap/dong-luc-hoc/hinh_3_3.svg" alt="Vật rắn lăn không trượt trên mặt tựa rắn" class="figure-img" /><p class="figure-caption">Hình 16-4 (SBT ĐLH Hình 3-3): Vật rắn lăn không trượt trên mặt tựa rắn là liên kết lý tưởng vì di chuyển khả dĩ tại tiếp điểm tức thời bằng không.</p></div>

#### 3. Chứng minh Nguyên lý Di chuyển Khả dĩ (Phương trình tổng quát Tĩnh học)
::: tip Định lý (Nguyên lý Di chuyển Khả dĩ)
Đối với cơ hệ chịu liên kết **holonom, giữ, dừng và lý tưởng**, điều kiện cần và đủ để cơ hệ cân bằng tại vị trí đang xét là tổng công khả dĩ của tất cả các lực hoạt động bằng không trên mọi di chuyển khả dĩ:
$$\sum_{k=1}^N \vec{F}_k^{(e)} \cdot \delta\vec{r}_k = 0$$
:::

**Chứng minh điều kiện cần:**
Giả sử cơ hệ cân bằng. Khi đó từng chất điểm $M_k$ cân bằng dưới tác dụng của lực hoạt động và phản lực liên kết: $\vec{F}_k^{(e)} + \vec{N}_k = \vec{0}$. Nhân vô hướng từng phương trình với di chuyển khả dĩ $\delta\vec{r}_k$ rồi lấy tổng theo $k = 1, \dots, N$:
$$\sum_{k=1}^N \vec{F}_k^{(e)} \cdot \delta\vec{r}_k + \sum_{k=1}^N \vec{N}_k \cdot \delta\vec{r}_k = 0$$
Do liên kết lý tưởng nên số hạng thứ hai bằng $0$, suy ra $\sum_{k=1}^N \vec{F}_k^{(e)} \cdot \delta\vec{r}_k = 0$.

**Chứng minh điều kiện đủ (phản chứng):**
Giả sử tại vị trí đứng yên ban đầu ta có $\sum \vec{F}_k^{(e)} \cdot \delta\vec{r}_k = 0$ với mọi di chuyển khả dĩ, nhưng cơ hệ không cân bằng. Khi đó tồn tại ít nhất một chất điểm bắt đầu chuyển động từ trạng thái nghỉ với di chuyển thật $d\vec{r}_k$ cùng hướng với hợp lực $\vec{\Phi}_k = \vec{F}_k^{(e)} + \vec{N}_k$ (vì $\vec{v}_0 = \vec{0}$ và $\vec{a}_0 = \vec{\Phi}_k / m_k$), dẫn tới $\sum (\vec{F}_k^{(e)} + \vec{N}_k) \cdot d\vec{r}_k > 0$. Vì liên kết **dừng**, di chuyển thật $d\vec{r}_k$ là một di chuyển khả dĩ hợp lệ $\delta\vec{r}_k$; thay vào và dùng điều kiện lý tưởng $\sum \vec{N}_k \cdot \delta\vec{r}_k = 0$ thu được $\sum \vec{F}_k^{(e)} \cdot \delta\vec{r}_k > 0$, mâu thuẫn với giả thiết. Vậy cơ hệ cân bằng.

Biểu diễn theo $n$ tọa độ suy rộng độc lập $q_1, \dots, q_n$ (số bậc tự do của hệ holonom), ta có $\delta\vec{r}_k = \sum_{i=1}^n \frac{\partial\vec{r}_k}{\partial q_i}\delta q_i$ và $\sum \vec{F}_k^{(e)}\cdot\delta\vec{r}_k = \sum_{i=1}^n Q_i\,\delta q_i = 0$. Do các biến phân $\delta q_i$ độc lập tùy ý, điều kiện cân bằng tương đương với $n$ phương trình đại số:

$$Q_i = \sum_{k=1}^N \vec{F}_k^{(e)} \cdot \frac{\partial\vec{r}_k}{\partial q_i} = 0 \qquad (i = 1, \dots, n)$$

Nếu toàn bộ lực hoạt động là lực thế với hàm thế năng $\Pi(q_1, \dots, q_n)$, điều kiện cân bằng trở thành $\dfrac{\partial\Pi}{\partial q_i} = 0$.

---

### 16.3. Phương pháp giải phóng một liên kết để xác định phản lực

Đối với hệ tĩnh định (số bậc tự do $n = 0$, ví dụ hệ dầm ghép trong [BT ĐLH Chương 3 — Thí dụ 3–6, Bài 3.15](/bai-tap/dong-luc-hoc/chuong-3) và Đề `0001/2015`, `0002/2015`), nguyên lý di chuyển khả dĩ cho phép tìm trực tiếp **một thành phần phản lực** mà không cần lập hệ phương trình tách vật cho toàn bộ kết cấu:

1. **Giải phóng đúng một liên kết** (loại bỏ đúng một bậc ràng buộc tương ứng với thành phần phản lực $\vec{R}$ cần tìm) và giữ nguyên tuyệt đối tất cả các liên kết còn lại. Hệ chuyển từ $0$ bậc tự do thành cơ hệ **1 bậc tự do**.
2. Thay liên kết vừa bỏ bằng thành phần phản lực $\vec{R}$, xem $\vec{R}$ là một **lực hoạt động**.
3. Cấp cho hệ $1$ BTD vừa tạo một di chuyển khả dĩ phù hợp với các liên kết còn giữ lại, thiết lập phương trình $\sum \delta A(\vec{F}_k^{(e)}) + \delta A(\vec{R}) = 0$ để giải thẳng ra $\vec{R}$.

<div class="figure-container"><img src="/figures/bai-tap/dong-luc-hoc/hinh_3_13.svg" alt="Hệ dầm ghép ABC giải phóng liên kết tìm phản lực tại C và A" class="figure-img" /><p class="figure-caption">Hình 16-5 (SBT ĐLH Hình 3-13, Thí dụ 3-6): Quy trình giải phóng từng bậc liên kết trên hệ dầm ghép để cô lập và tính trực tiếp từng thành phần phản lực.</p></div>

#### Ví dụ đối chiếu Đề `0001/2015` Câu 1 & Bài toán tính số giải phóng liên kết
Xét hệ dầm ghép $ABCD$ gồm gối cố định tại $A$, gối di động đứng tại $B$ ($AB = 2a$), khớp bản lề nội tại $C$ ($BC = a$), và gối di động đứng tại $D$ ($CD = 2a$). Trên đoạn $AB$ có ngẫu lực $M$ (ngược KĐH), tại trung điểm đoạn $CD$ có lực tập trung $P$ hướng thẳng đứng xuống dưới.

- **Tìm phản lực $N_D$ (tương ứng Đề `0001/2015` Câu 1 — chọn `1a`):**
  Giải phóng gối di động $D$ (giữ nguyên gối cố định $A$ và gối $B$). Đoạn $ABC$ bị định vị cứng bởi hai gối $A, B$ nên đứng yên; chỉ đoạn $CD$ quay quanh khớp $C$ một góc vô cùng bé $\delta\varphi$ (ngược KĐH). Đầu $D$ dịch lên $2a\,\delta\varphi$, trung điểm $CD$ dịch lên $a\,\delta\varphi$:
  $$\sum \delta A = N_D (2a\,\delta\varphi) - P (a\,\delta\varphi) = 0 \implies N_D = \frac{P}{2}$$
- **Tìm phản lực $N_B$ (tương tự ý tưởng giải phóng 1 bậc ràng buộc ở Đề `0002/2015` Câu 1 — chọn `1b`):**
  Giải phóng gối $B$, giữ nguyên gối cố định $A$ và gối di động $D$. Khi đoạn $ABC$ quay góc $\delta\varphi$ ngược KĐH quanh $A$, điểm $B$ dịch lên $\delta y_B = 2a\,\delta\varphi$ và khớp $C$ dịch lên $\delta y_C = 3a\,\delta\varphi$. Vì đầu $D$ vẫn bị giữ trên mặt trượt ngang ($\delta y_D = 0$), trung điểm đoạn $CD$ dịch lên $\delta y_{\text{mid}} = \frac{1}{2}(\delta y_C + \delta y_D) = \frac{3}{2}a\,\delta\varphi$. Phương trình công khả dĩ:
  $$\begin{aligned}
  \sum \delta A &= M\,\delta\varphi + N_B(2a\,\delta\varphi) - P\left(\frac{3}{2}a\,\delta\varphi\right) = 0 \\
                &\implies N_B = \frac{3}{4}P - \frac{M}{2a}
  \end{aligned}$$
  *(Kiểm chứng bằng phương trình tĩnh học tách vật tại khớp $C$: $Y_C = P - N_D = \frac{P}{2}$; lấy mômen trên đoạn $ABC$ quanh $A$ cho $M + 2a N_B - 3a(\frac{P}{2}) = 0 \implies N_B = \frac{3}{4}P - \frac{M}{2a}$, khớp tuyệt đối.)*

---

## Ngày 17: Phương Trình Tổng Quát ĐLH & Thiết Lập Động Năng $T(q_1, q_2, \dot{q}_1, \dot{q}_2)$ Cho Hệ 2 BTD (Ch.15)

### 17.1. Chứng minh từ Phương trình Đalămbe–Lagrange sang Phương trình Lagrange loại II

Xét cơ hệ holonom gồm $N$ chất điểm chịu liên kết giữ và lý tưởng, có $n$ bậc tự do với bộ tọa độ suy rộng đủ $q_1, q_2, \dots, q_n$. Vectơ định vị của từng chất điểm là hàm của tọa độ suy rộng và thời gian:

$$\vec{r}_k = \vec{r}_k(q_1, q_2, \dots, q_n, t) \qquad (k = 1, \dots, N)$$

Theo định luật II Newton, tại mọi thời điểm ta có $\vec{F}_k^{(e)} + \vec{N}_k - m_k\vec{a}_k = \vec{0}$. Nhân vô hướng với di chuyển khả dĩ $\delta\vec{r}_k$, lấy tổng theo toàn bộ chất điểm và loại bỏ công khả dĩ phản lực $\sum \vec{N}_k \cdot \delta\vec{r}_k = 0$ (liên kết lý tưởng), ta thu được **Phương trình tổng quát Động lực học (Phương trình Đalămbe–Lagrange)**:

$$\sum_{k=1}^N \left(\vec{F}_k^{(e)} - m_k\vec{a}_k\right) \cdot \delta\vec{r}_k = 0$$

Thay $\delta\vec{r}_k = \sum_{i=1}^n \dfrac{\partial\vec{r}_k}{\partial q_i}\,\delta q_i$ vào phương trình trên:

$$\sum_{i=1}^n \left(Q_i + Q_i^{\text{qt}}\right)\delta q_i = 0, \qquad Q_i = \sum_{k=1}^N \vec{F}_k^{(e)} \cdot \frac{\partial\vec{r}_k}{\partial q_i}, \qquad Q_i^{\text{qt}} = -\sum_{k=1}^N m_k \frac{d\vec{v}_k}{dt} \cdot \frac{\partial\vec{r}_k}{\partial q_i}$$

Do các biến phân $\delta q_1, \dots, \delta q_n$ độc lập tuyến tính, ta bắt buộc có $Q_i + Q_i^{\text{qt}} = 0$ với mọi $i = 1, \dots, n$. Để khử gia tốc $\vec{a}_k$ và đưa $Q_i^{\text{qt}}$ về hàm động năng $T$, ta dùng phép biến đổi đạo hàm tích kết hợp hai đồng nhất thức động học nền tảng (xem [ĐLH Chương 6 — Mục 6.1](/dong-luc-hoc/chuong-6)):

1. **Đồng nhất thức 1 (giản ước dấu chấm):** Từ $\vec{v}_k = \dfrac{d\vec{r}_k}{dt} = \sum_{j=1}^n \dfrac{\partial\vec{r}_k}{\partial q_j}\dot{q}_j + \dfrac{\partial\vec{r}_k}{\partial t}$, lấy đạo hàm riêng theo $\dot{q}_i$ (vì $\frac{\partial\vec{r}_k}{\partial q_j}$ và $\frac{\partial\vec{r}_k}{\partial t}$ không chứa $\dot{q}$):
   $$\frac{\partial\vec{v}_k}{\partial \dot{q}_i} = \frac{\partial\vec{r}_k}{\partial q_i}$$
2. **Đồng nhất thức 2 (giao hoán đạo hàm $\frac{d}{dt}$ và $\frac{\partial}{\partial q_i}$):**
   $$\frac{d}{dt}\left(\frac{\partial\vec{r}_k}{\partial q_i}\right) = \sum_{j=1}^n \frac{\partial^2\vec{r}_k}{\partial q_j\partial q_i}\dot{q}_j + \frac{\partial^2\vec{r}_k}{\partial t\partial q_i} = \frac{\partial}{\partial q_i}\left(\sum_{j=1}^n \frac{\partial\vec{r}_k}{\partial q_j}\dot{q}_j + \frac{\partial\vec{r}_k}{\partial t}\right) = \frac{\partial\vec{v}_k}{\partial q_i}$$

Thế hai đồng nhất thức này vào biểu thức $-Q_i^{\text{qt}}$:

$$\begin{aligned}
-Q_i^{\text{qt}} &= \sum_{k=1}^N m_k \frac{d\vec{v}_k}{dt} \cdot \frac{\partial\vec{r}_k}{\partial q_i} \\
&= \frac{d}{dt}\left(\sum_{k=1}^N m_k \vec{v}_k \cdot \frac{\partial\vec{r}_k}{\partial q_i}\right) - \sum_{k=1}^N m_k \vec{v}_k \cdot \frac{d}{dt}\left(\frac{\partial\vec{r}_k}{\partial q_i}\right) \\
&= \frac{d}{dt}\left(\sum_{k=1}^N m_k \vec{v}_k \cdot \frac{\partial\vec{v}_k}{\partial \dot{q}_i}\right) - \sum_{k=1}^N m_k \vec{v}_k \cdot \frac{\partial\vec{v}_k}{\partial q_i} \\
&= \frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_i}\right) - \frac{\partial T}{\partial q_i}, \qquad T = \frac{1}{2}\sum_{k=1}^N m_k v_k^2
\end{aligned}$$

Thay vào $Q_i + Q_i^{\text{qt}} = 0$, ta nhận được **Hệ Phương trình Lagrange loại II** gồm $n$ phương trình vi phân cấp hai (không chứa các phản lực liên kết lý tưởng):

$$\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{q}_i}\right) - \frac{\partial T}{\partial q_i} = Q_i \qquad (i = 1, 2, \dots, n)$$

---

### 17.2. Phương pháp hệ thống thiết lập động năng $T = \frac{1}{2}\dot{q}^T M(q)\dot{q}$ cho hệ 2 BTD

Với cơ hệ liên kết **dừng** có 2 bậc tự do $q = (q_1, q_2)^T$, động năng luôn là một dạng toàn phương xác định dương đối với vận tốc suy rộng $\dot{q} = (\dot{q}_1, \dot{q}_2)^T$:

$$\begin{aligned}
T(q_1, q_2, \dot{q}_1, \dot{q}_2) &= \frac{1}{2}\dot{q}^T M(q)\dot{q} \\
&= \frac{1}{2}M_{11}(q)\dot{q}_1^2 + M_{12}(q)\dot{q}_1\dot{q}_2 + \frac{1}{2}M_{22}(q)\dot{q}_2^2
\end{aligned}$$

trong đó $M(q) = \begin{pmatrix} M_{11} & M_{12} \\ M_{21} & M_{22} \end{pmatrix}$ là **ma trận khối lượng đối xứng** ($M_{12} = M_{21}$) thỏa điều kiện xác định dương $M_{11} > 0$, $M_{22} > 0$ và $\det M = M_{11}M_{22} - M_{12}^2 > 0$.

Để tính $T = \sum \left(\frac{1}{2}m_j v_{C_j}^2 + \frac{1}{2}J_{C_j}\omega_j^2\right)$ mà không sai dấu số hạng chéo $M_{12}\dot{q}_1\dot{q}_2$, áp dụng một trong hai phương pháp tương đương cho vận tốc khối tâm $C$ của vật thứ hai:

1. **Phương pháp tọa độ Đề các (kiểm soát dấu tuyệt đối):** Chọn hệ trục cố định $Oxy$, viết tường minh $x_C(q_1, q_2)$ và $y_C(q_1, q_2)$, lấy đạo hàm toàn phần theo $t$ để tìm $\dot{x}_C, \dot{y}_C$, rồi tính $v_C^2 = \dot{x}_C^2 + \dot{y}_C^2$.
2. **Phương pháp hợp vận tốc $\vec{v}_C = \vec{v}_e + \vec{v}_r$ (định lý cosin):**
   - Khóa $q_2$ ($\dot{q}_2 = 0$), cho $q_1$ tăng theo chiều dương để xác định hướng và độ lớn $\vec{v}_e$.
   - Khóa $q_1$ ($\dot{q}_1 = 0$), cho $q_2$ tăng theo chiều dương để xác định hướng và độ lớn $\vec{v}_r$.
   - Đặt chung gốc tại $C$ để xác định chính xác góc hợp $\gamma = (\widehat{\vec{v}_e, \vec{v}_r})$ rồi áp dụng:
     $$v_C^2 = v_e^2 + v_r^2 + 2v_e v_r \cos\gamma$$

---

### 17.3. Xây dựng $T$ và ma trận khối lượng $M(q)$ cho 4 mô hình 2 BTD kinh điển

#### Mô hình 1: Xe (con trượt) $A(m_1)$ + Con lắc $AB(m_2)$
Con trượt $A$ khối lượng $m_1$ chuyển động tịnh tiến ngang theo tọa độ $q_1 = x$; thanh $AB$ chiều dài $l$ nối bản lề tại $A$, lệch góc $q_2 = \varphi$ so với phương thẳng đứng hướng xuống về phía $+Ox$ (Hình 6–4; xem [ĐLH Chương 6 — Mục 6.2.2](/dong-luc-hoc/chuong-6) và [BT ĐLH Chương 5 — Thí dụ 5–3, Bài 5.13](/bai-tap/dong-luc-hoc/chuong-5)).

<div class="figure-container"><img src="/figures/dong-luc-hoc/hinh_6_4.svg" alt="Mô hình 1: Con lắc Eliptic gồm con trượt và quả cầu treo" class="figure-img" /><p class="figure-caption">Hình 17-1 (Giáo trình ĐLH Hình 6-4): Mô hình 1 — Con trượt chuyển động thẳng ngang mang con lắc dao động phẳng.</p></div>

- **Trường hợp 1a — Quả cầu $B$ coi như chất điểm khối lượng $m_2$, thanh $AB$ không khối lượng** (Đề `1821` Câu 9 & Câu 11):
  $$x_B = x + l\sin\varphi, \qquad y_B = -l\cos\varphi$$
  $$\dot{x}_B = \dot{x} + l\dot{\varphi}\cos\varphi, \qquad \dot{y}_B = l\dot{\varphi}\sin\varphi$$
  $$v_B^2 = \dot{x}_B^2 + \dot{y}_B^2 = \dot{x}^2 + l^2\dot{\varphi}^2 + 2l\dot{x}\dot{\varphi}\cos\varphi \quad (\text{Đề 1821 — 9a})$$
  $$\begin{aligned}
  T &= \frac{1}{2}m_1\dot{x}^2 + \frac{1}{2}m_2 v_B^2 \\
    &= \frac{1}{2}(m_1 + m_2)\dot{x}^2 + \frac{1}{2}m_2 l^2\dot{\varphi}^2 + m_2 l\cos\varphi\,\dot{x}\dot{\varphi} \quad (\text{Đề 1821 — 11d})
  \end{aligned}$$
  Ma trận khối lượng: $M(q) = \begin{pmatrix} m_1 + m_2 & m_2 l\cos\varphi \\ m_2 l\cos\varphi & m_2 l^2 \end{pmatrix}$.

- **Trường hợp 1b — Thanh mảnh đồng chất $AB$ khối lượng $m_2$, chiều dài $l$** (khối tâm $G$ cách $A$ đoạn $l/2$, $J_G = \frac{1}{12}m_2 l^2$; đối chiếu Đề `0002/2015` Câu 9 & 11 với chiều dài $2a$):
  $$v_G^2 = \dot{x}^2 + \frac{l^2}{4}\dot{\varphi}^2 + l\dot{x}\dot{\varphi}\cos\varphi$$
  $$\begin{aligned}
  T &= \frac{1}{2}m_1\dot{x}^2 + \frac{1}{2}m_2 v_G^2 + \frac{1}{2}\left(\frac{1}{12}m_2 l^2\right)\dot{\varphi}^2 \\
    &= \frac{1}{2}(m_1 + m_2)\dot{x}^2 + \frac{1}{6}m_2 l^2\dot{\varphi}^2 + \frac{1}{2}m_2 l\cos\varphi\,\dot{x}\dot{\varphi}
  \end{aligned}$$
  *(Lưu ý: với thanh dài $2a$ trong Đề `0002/2015` C11, thay $l = 2a$ cho ngay $\frac{1}{6}m_2(4a^2) = \frac{2}{3}m_2 a^2\dot{\varphi}^2$ và $m_2 a\cos\varphi\,\dot{x}\dot{\varphi}$, khớp đáp án `11c`.)*

---

#### Mô hình 2: Nêm di động $A(m_1)$ + Vật trượt / Con lăn $B(m_2)$
Lăng trụ tam giác $A$ (khối lượng $m_1$, góc nghiêng $\alpha$) trượt tịnh tiến trên sàn ngang với tọa độ $q_1 = x$; vật $B$ (khối lượng $m_2$) chuyển động dọc theo mặt nghiêng của nêm với tọa độ tương đối $q_2 = s$ (hoặc góc tự quay $q_2 = \varphi$ nếu lăn không trượt với $s = r\varphi$, Hình 6–2; đối chiếu [ĐLH Chương 6 — Thí dụ 6–2](/dong-luc-hoc/chuong-6) và Đề `1721` Câu 10).

<div class="figure-container"><img src="/figures/dong-luc-hoc/hinh_6_2.svg" alt="Mô hình 2: Trụ tròn đồng chất lăn không trượt trên lăng trụ tam giác di động" class="figure-img" /><p class="figure-caption">Hình 17-2 (Giáo trình ĐLH Hình 6-2): Mô hình 2 — Trụ tròn lăn không trượt trên mặt nghiêng của lăng trụ di động trên sàn ngang.</p></div>

Xét trường hợp mặt nghiêng dốc xuống sang phải, chọn $x$ sang phải và $s$ dọc mặt nghiêng xuống sang phải (góc giữa $\vec{v}_e$ và $\vec{v}_r$ là góc nhọn $\alpha$; nếu chọn $s$ đi lên sang trái thì góc hợp là $\pi - \alpha$ và dấu trước $\cos\alpha$ đổi thành dấu trừ):
$$x_C = x + s\cos\alpha, \qquad y_C = -s\sin\alpha \implies v_C^2 = \dot{x}^2 + \dot{s}^2 + 2\dot{x}\dot{s}\cos\alpha$$

- **Vật $B$ trượt tịnh tiến trên mặt nêm** ($\omega_B = 0$):
  $$T = \frac{1}{2}(m_1 + m_2)\dot{x}^2 + \frac{1}{2}m_2\dot{s}^2 + m_2\cos\alpha\,\dot{x}\dot{s}$$
- **Trụ tròn đặc $B$ lăn không trượt** ($J_C = \frac{1}{2}m_2 r^2$, $\omega_B = \dot{s}/r$ — Thí dụ 6–2 ĐLH):
  $$\begin{aligned}
  T &= \frac{1}{2}m_1\dot{x}^2 + \frac{1}{2}m_2 v_C^2 + \frac{1}{2}\left(\frac{1}{2}m_2 r^2\right)\left(\frac{\dot{s}}{r}\right)^2 \\
    &= \frac{1}{2}(m_1 + m_2)\dot{x}^2 + \frac{3}{4}m_2\dot{s}^2 + m_2\cos\alpha\,\dot{x}\dot{s}
  \end{aligned}$$
- **Ống trụ tròn mỏng không đáy $B$ lăn không trượt lên dốc** ($J_B = m_2 r^2$, chọn $q_2 = \varphi$ cùng KĐH làm tâm $B$ đi lên sang phải với $v_r = r\dot{\varphi}$ hợp với $\vec{v}_e$ sang phải góc nhọn $\alpha$ — **Đề `1721` Câu 10**):
  $$\begin{aligned}
  T &= \frac{1}{2}m_1\dot{x}^2 + \frac{1}{2}m_2\left(\dot{x}^2 + r^2\dot{\varphi}^2 + 2r\dot{x}\dot{\varphi}\cos\alpha\right) + \frac{1}{2}(m_2 r^2)\dot{\varphi}^2 \\
    &= 0{,}5(m_1 + m_2)\dot{x}^2 + m_2 r^2\dot{\varphi}^2 + m_2 r\cos\alpha\,\dot{x}\dot{\varphi} \quad (\text{Đề 1721 — 10c})
  \end{aligned}$$
  Ma trận khối lượng trong mô hình nêm có **toàn bộ phần tử là hằng số** (không phụ thuộc $x, \varphi$).

---

#### Mô hình 3: Khung (hoặc thanh) quay + Con chạy / Thanh trượt trong khung
Đặc trưng của lớp mô hình này là vận tốc kéo theo $\vec{v}_e$ (vuông góc mặt phẳng khung quay hoặc vuông góc thanh quay) luôn **vuông góc** với vận tốc tương đối $\vec{v}_r$ ($\vec{v}_e \perp \vec{v}_r \implies \vec{v}_e \cdot \vec{v}_r = 0$). Do đó **ma trận khối lượng $M(q)$ là ma trận đường chéo** ($M_{12} = 0$), nhưng phần tử $M_{11}$ phụ thuộc tường minh vào tọa độ $q_2$!

<div class="figure-container"><img src="/figures/bai-tap/dong-luc-hoc/hinh_5_5.svg" alt="Mô hình 3: Khung quay quanh trục thẳng đứng mang thanh trượt" class="figure-img" /><p class="figure-caption">Hình 17-3 (SBT ĐLH Hình 5-5, Thí dụ 5-5): Mô hình 3 — Khung quay quanh trục thẳng đứng có thanh AB trượt song phẳng trong mặt phẳng khung.</p></div>

- **Biến thể 3a — Thanh quay trong mặt phẳng ngang (mômen quán tính $J_0$, góc quay $q_1 = \theta$) mang con chạy $m_2$ trượt dọc thanh (tọa độ bán kính $q_2 = r$):**
  $$x = r\cos\theta,\quad y = r\sin\theta \implies v^2 = \dot{r}^2 + r^2\dot{\theta}^2$$
  $$T = \frac{1}{2}\left(J_0 + m_2 r^2\right)\dot{\theta}^2 + \frac{1}{2}m_2\dot{r}^2, \qquad M(q) = \begin{pmatrix} J_0 + m_2 r^2 & 0 \\ 0 & m_2 \end{pmatrix}$$
- **Biến thể 3b — Khung quay quanh trục thẳng đứng (mômen quán tính $J$, góc $q_1 = \theta$) mang thanh đồng chất $AB$ dài $2a$, khối lượng $m$, hai đầu trượt trên hai cạnh vuông góc (góc $q_2 = \varphi$ — [BT ĐLH Chương 5 — Thí dụ 5–5](/bai-tap/dong-luc-hoc/chuong-5)):**
  Do mỗi phân tố trên thanh có $\vec{v}_{ek} \perp \vec{v}_{rk}$, động năng tách thành $T_{AB} = T_e + T_r$ với $J_z(\varphi) = \frac{4}{3}ma^2\sin^2\varphi$ và $T_r = \frac{1}{2}J_P\dot{\varphi}^2 = \frac{2}{3}ma^2\dot{\varphi}^2$:
  $$T = \frac{1}{2}\left(J + \frac{4}{3}ma^2\sin^2\varphi\right)\dot{\theta}^2 + \frac{2}{3}ma^2\dot{\varphi}^2$$
  *(Tương tự với máy điều tiết ly tâm trong [BT ĐLH Chương 5 — Thí dụ 5–4](/bai-tap/dong-luc-hoc/chuong-5) và Bài 5.17.)*

---

#### Mô hình 4: Đĩa tròn lăn không trượt + Thanh lắc (hoặc con lắc) gắn tâm
Đĩa tròn đặc đồng chất tâm $A$ (khối lượng $m_1$, bán kính $R$, $J_A = \frac{1}{2}m_1 R^2$) lăn không trượt trên mặt phẳng ngang (hoặc nghiêng góc $\alpha$) với tọa độ tâm $q_1 = x$ (hoặc góc quay đĩa $q_1 = \varphi_1$, $x = R\varphi_1$); thanh mảnh đồng chất $AB$ (khối lượng $m_2$, chiều dài $l$) nối bản lề tại tâm đĩa $A$ hợp góc $q_2 = \varphi$ với phương thẳng đứng hướng xuống (Hình 5–17; đối chiếu [BT ĐLH Chương 5 — Bài 5.14](/bai-tap/dong-luc-hoc/chuong-5), Đề `0001/2015` Câu 10 và Đề `0002/2016` Câu 7).

<div class="figure-container"><img src="/figures/bai-tap/dong-luc-hoc/hinh_5_17.svg" alt="Mô hình 4: Đĩa lăn không trượt nối lò xo mang con lắc tại tâm" class="figure-img" /><p class="figure-caption">Hình 17-4 (SBT ĐLH Hình 5-17, Bài 5.14): Mô hình 4 — Đĩa tròn lăn không trượt trên nền ngang nối lò xo và mang con lắc treo tại tâm.</p></div>

- **Đĩa lăn trên mặt ngang + thanh đồng chất $AB(m_2, l)$** (Đề `0001/2015` Câu 10 với $x = r\varphi_1$, $m_1 = Q/g$, $m_2 = P/g$):
  - Động năng đĩa đặc lăn không trượt: $T_1 = \frac{1}{2}m_1\dot{x}^2 + \frac{1}{2}\left(\frac{1}{2}m_1 R^2\right)\left(\frac{\dot{x}}{R}\right)^2 = \frac{3}{4}m_1\dot{x}^2$.
  - Động năng thanh đồng chất $AB$: $T_2 = \frac{1}{2}m_2\dot{x}^2 + \frac{1}{6}m_2 l^2\dot{\varphi}^2 + \frac{1}{2}m_2 l\cos\varphi\,\dot{x}\dot{\varphi}$.
  - Động năng toàn hệ:
    $$\begin{aligned}
    T &= \left(\frac{3}{4}m_1 + \frac{1}{2}m_2\right)\dot{x}^2 + \frac{1}{6}m_2 l^2\dot{\varphi}^2 \\
      &\quad + \frac{1}{2}m_2 l\cos\varphi\,\dot{x}\dot{\varphi}
    \end{aligned}$$
    *(So với Mô hình 1b, hệ số $\dot{x}^2$ tăng đúng một lượng $\frac{1}{4}m_1\dot{x}^2$ do động năng quay riêng của đĩa đặc.)*
- **Đĩa lăn xuống mặt nghiêng góc $\alpha$ (tọa độ $x$ xuống-trái) + thanh đồng chất $OA(m_2, L)$ lệch trái góc $\varphi$** (Đề `0002/2016` Câu 7):
  Tọa độ khối tâm thanh $x_C = -x\cos\alpha - \frac{L}{2}\sin\varphi$, $y_C = -x\sin\alpha - \frac{L}{2}\cos\varphi \implies v_C^2 = \dot{x}^2 + \frac{L^2}{4}\dot{\varphi}^2 + L\dot{x}\dot{\varphi}\cos(\alpha + \varphi)$. Cộng $\frac{3}{4}m_1\dot{x}^2$ và $\frac{1}{24}m_2 L^2\dot{\varphi}^2$ thu được ngay đáp án `7a`:
  $$T = \left(\frac{3}{4}m_1 + \frac{1}{2}m_2\right)\dot{x}^2 + \frac{1}{6}m_2 L^2\dot{\varphi}^2 + \frac{1}{2}m_2 L\cos(\alpha + \varphi)\,\dot{x}\dot{\varphi}$$

::: info Mở rộng: Hệ ròng rọc 2 BTD với ma trận khối lượng hằng (Đề `1722` C11 & Đề `0001/2016` C9)
Trong các hệ ròng rọc hai tầng nối dây không dãn (tọa độ suy rộng $q_1 = \varphi_1$, $q_2 = \varphi_2$), vận tốc từng tải và vận tốc góc từng ròng rọc động đều là **tổ hợp tuyến tính hệ số hằng** của $\dot{\varphi}_1, \dot{\varphi}_2$:
- **Đề `1722` C11 (`11d`):** $v_B = R\dot{\varphi}_1$, $v_{O_2} = r\dot{\varphi}_1$, $v_A = r\dot{\varphi}_1 + r_2\dot{\varphi}_2$, chú ý ròng rọc $O$ cho bán kính quán tính $\rho$ nên $J_O = m_1\rho^2$ (KHÔNG nhân thêm $0{,}5$).
- **Đề `0001/2016` C9 (`9a`):** Hai nhánh dây treo ròng rọc động $O_3$ (bán kính $r_3 = r$, $R_3 = 2r$) có vận tốc hướng lên $v_{\text{trái}} = r\dot{\varphi}_1$ và $v_{\text{phải}} = -2r\dot{\varphi}_2 \implies \omega_{3,\text{CW}} = \frac{\dot{\varphi}_1 + 2\dot{\varphi}_2}{3}$ và $v_{O_3\uparrow} = \frac{2}{3}r(\dot{\varphi}_1 - \dot{\varphi}_2)$. Thay vào $T = \frac{1}{2}J_{O_1}\dot{\varphi}_1^2 + \frac{1}{2}J_{O_2}\dot{\varphi}_2^2 + \frac{1}{2}(m_3 + m_A)v_{O_3}^2 + \frac{1}{2}J_{O_3}\omega_3^2$ cho ma trận khối lượng hằng số đối xứng.
:::

---

## Ngày 18: Lực Suy Rộng $Q_i$ & Tự Kiểm Toán Cấu Trúc Hệ 2 PT Lagrange II

### 18.1. Phương pháp chuẩn xác tính lực suy rộng $Q_i$

Lực suy rộng $Q_i$ tương ứng với tọa độ suy rộng độc lập $q_i$ được xác định từ biểu thức công khả dĩ của toàn bộ lực hoạt động (không tính phản lực của các liên kết lý tưởng):

$$\delta A = \sum_{k=1}^N \vec{F}_k^{(e)} \cdot \delta\vec{r}_k = \sum_{i=1}^n Q_i\,\delta q_i \implies Q_i = \frac{\delta A(\delta q_i \neq 0,\; \delta q_{j \neq i} = 0)}{\delta q_i}$$

Trong thực hành, ta luôn tách lực hoạt động thành hai nhóm để tránh sai dấu và bỏ sót hạng tử:

$$Q_i = Q_i^{(t)} + Q_i^{(kt)} = -\frac{\partial\Pi}{\partial q_i} + Q_i^{(kt)}$$

#### 1. Lực có thế $Q_i^{(t)} = -\dfrac{\partial\Pi}{\partial q_i}$ (Trọng lực và Lò xo đàn hồi)
- **Trọng lực:** chọn trục $Oy$ hướng thẳng đứng lên trên, thế năng $\Pi_g = \sum m_k g y_k(q_1, q_2)$. Khi $q_i$ tăng làm khối tâm $C$ đi lên ($\frac{\partial y_C}{\partial q_i} > 0$), trọng lực sinh công khả dĩ âm nên $Q_i^{(g)} < 0$.
  - *Kiểm chứng:* với con lắc lệch góc $\varphi$ so với phương thẳng đứng hướng xuống ($y_C = -d\cos\varphi$), ta có $\Pi_g = -m_2 g d\cos\varphi \implies Q_\varphi^{(g)} = -\frac{\partial\Pi_g}{\partial\varphi} = -m_2 g d\sin\varphi$ (Đề `1821` C10 `10b`, Đề `0002/2016` C8 `8d`, Đề `0001/2015` C11 `11d`).
- **Lò xo tuyến tính độ cứng $k$:** thế năng đàn hồi $\Pi_{\text{đh}} = \frac{1}{2}k(\Delta l)^2$, với $\Delta l$ là độ biến dạng tính từ trạng thái **không biến dạng** của lò xo.
  - **Phân biệt hai cách chọn gốc tọa độ $q_1 = x$ (đối chiếu Đề `0002/2016` Câu 8 & Câu 9):**
    1. *Gốc $x = 0$ tại vị trí lò xo không biến dạng:* $\Delta l = x \implies \Pi_{\text{đh}} = \frac{1}{2}kx^2$, còn trọng lực và ngẫu hằng $M$ giữ nguyên:
       $$Q_x = \frac{M}{R} + (m_1 + m_2)g\sin\alpha - kx \qquad (\text{Đề 0002/2016 — 9c})$$
    2. *Gốc $x = 0$ tại vị trí cân bằng tĩnh của toàn hệ:* lò xo đã dãn tĩnh $\Delta l_0$ thỏa phương trình cân bằng tĩnh $\frac{M}{R} + (m_1 + m_2)g\sin\alpha - k\Delta l_0 = 0$. Khi dịch chuyển thêm $x$, $\Delta l = \Delta l_0 + x$ nên mọi số hạng hằng triệt tiêu với $-k\Delta l_0$, chỉ còn:
       $$Q_x = -kx \qquad (\text{Đề 0002/2016 — 8d})$$

#### 2. Lực không thế $Q_i^{(kt)}$ bằng công khả dĩ $\delta A^{(kt)}$
- **Ngẫu lực dẫn động $M$ (hoặc lực ngoại tập trung $F$):** cấp di chuyển khả dĩ $\delta q_i > 0$ (giữ các tọa độ khác cố định) và xét dấu tích vô hướng. Nếu ngẫu $M$ quay cùng chiều tăng $\delta q_i$ thì $Q_i^{(M)} = +M$; nếu **ngược chiều** tăng $\delta q_i$ thì $Q_i^{(M)} = -M$ (bẫy trực tiếp trong Đề `0001/2016` Câu 10 `10b`, trong đó $\mathfrak{M}_2$ vẽ cùng KĐH ngược với chiều $\varphi_2$ ngược KĐH nên $Q_2 = \frac{2}{3}r(m_3+m_A)g - \mathfrak{M}_2$).
- **Lực cản nhớt tuyến tính $\vec{F}_c = -c\vec{v}_P$:** lực luôn ngược chiều vận tốc thật $\vec{v}_P$ của điểm đặt $P$. Trong di chuyển khả dĩ $\delta\vec{r}_P$:
  $$\delta A^{(c)} = (-c\vec{v}_P) \cdot \delta\vec{r}_P$$
  Ví dụ với bộ giảm chấn gắn giữa vật trượt $x$ và nền cố định thì $Q_x^{(c)} = -c\dot{x}$; với bộ giảm chấn nhớt tại khớp quay góc $\varphi$ thì $Q_\varphi^{(c)} = -c_\varphi\dot{\varphi}$.
- **Ngẫu lực ma sát lăn $M_r$ trên đĩa bán kính $R$ lăn không trượt với $q_1 = x$:** khi $\dot{x} > 0$, góc quay đĩa là $\theta = x/R \implies \delta\theta = \delta x / R$. Ngẫu ma sát lăn ngược chiều quay sinh công khả dĩ $\delta A^{(r)} = -M_r\,\delta\theta = -\frac{M_r}{R}\delta x \implies Q_x^{(r)} = -\frac{M_r}{R}\operatorname{sign}(\dot{x})$.
- **Lực ma sát trượt động — hai trường hợp phải phân biệt tuyệt đối:**
  1. *Ma sát trượt giữa vật $A$ và nền cố định:* $F_{\text{ms}} = \mu N$, hướng ngược chiều vận tốc trượt $\dot{x}$ nên $Q_x^{(\text{ms})} = -\mu N \operatorname{sign}(\dot{x})$. Trong đề thi trắc nghiệm `1821` C10 (`10b`) và `1721` C11 (`11d`), bài toán xét chuyển động với $\dot{x} > 0$ và lấy xấp xỉ áp lực chuẩn tĩnh $N \approx (m_1 + m_2)g \implies Q_x^{(\text{ms})} = -\mu(m_1 + m_2)g$. Trong bài toán giải tích chính xác ([BT ĐLH Chương 5 — Bài 5.5](/bai-tap/dong-luc-hoc/chuong-5)), phản lực pháp tuyến $N$ chứa thêm thành phần quán tính theo phương đứng của vật thứ hai: $N = (m_1 + m_2)g + m_2 l(\dot{\varphi}^2\cos\varphi + \ddot{\varphi}\sin\varphi)$.
  2. *Ma sát trượt giữa hai vật cùng chuyển động (ví dụ khối $B(m_2)$ trượt trên mặt nghiêng góc $\alpha$ của nêm di động $A(m_1)$):* chọn $q_1 = x$ (độ dời ngang sang phải của nêm $A$) và $q_2 = s$ (độ dời tương đối của $B$ dọc mặt nêm hướng xuống sang phải). Lực ma sát trượt là cặp **nội lực trực đối**:
     - Trên $B$: $\vec{F}_{\text{ms}} = F_{\text{ms}}(-\cos\alpha\,\vec{i} + \sin\alpha\,\vec{j})\operatorname{sign}(\dot{s})$ (ngược chiều vận tốc tương đối $\dot{s}$).
     - Trên nêm $A$: $-\vec{F}_{\text{ms}} = F_{\text{ms}}(+\cos\alpha\,\vec{i} - \sin\alpha\,\vec{j})\operatorname{sign}(\dot{s})$.
     Tính tổng công khả dĩ của cặp lực ma sát này trên $\delta\vec{r}_A = (\delta x, 0)$ và $\delta\vec{r}_B = (\delta x + \cos\alpha\,\delta s,\; -\sin\alpha\,\delta s)$:
     $$\begin{aligned}
     \delta A^{(\text{ms})} &= \vec{F}_{\text{ms}} \cdot \delta\vec{r}_B + (-\vec{F}_{\text{ms}}) \cdot \delta\vec{r}_A \\
     &= \vec{F}_{\text{ms}} \cdot (\delta\vec{r}_B - \delta\vec{r}_A) \\
     &= F_{\text{ms}}\operatorname{sign}(\dot{s})\left(-\cos^2\alpha - \sin^2\alpha\right)\delta s \\
     &= -F_{\text{ms}}\operatorname{sign}(\dot{s})\,\delta s
     \end{aligned}$$
     Do đó:
     $$Q_x^{(\text{ms})} = 0, \qquad Q_s^{(\text{ms})} = -F_{\text{ms}}\operatorname{sign}(\dot{s})$$
     **Hệ quả cốt lõi:** Ma sát trượt trên mặt nêm di động **không đóng góp vào $Q_x$** (vì khi $\delta s = 0$, cả hai vật đi cứng cùng nhau nên công khả dĩ nội lực bằng $0$), và dấu của $Q_s^{(\text{ms})}$ phụ thuộc **duy nhất vào chiều vận tốc tương đối $\dot{q}_2 = \dot{s}$**, hoàn toàn không phụ thuộc chiều chuyển động ngang $\dot{x}$ của nêm.

---

### 18.2. Bản chất toán học của cấu trúc hệ 2 PT Lagrange II & Quy trình tự kiểm toán

Xét hệ 2 bậc tự do có liên kết dừng với động năng tổng quát:

$$T = \frac{1}{2}M_{11}(q_1, q_2)\dot{q}_1^2 + M_{12}(q_1, q_2)\dot{q}_1\dot{q}_2 + \frac{1}{2}M_{22}(q_1, q_2)\dot{q}_2^2$$

Khi khai triển hai phương trình Lagrange loại II $\frac{d}{dt}\left(\frac{\partial T}{\partial\dot{q}_i}\right) - \frac{\partial T}{\partial q_i} = Q_i$ ($i = 1, 2$), ta thu được dạng chuẩn ma trận:

$$\begin{cases}
M_{11}\ddot{q}_1 + M_{12}\ddot{q}_2 + \Phi_1(q, \dot{q}) = Q_1 \\
M_{21}\ddot{q}_1 + M_{22}\ddot{q}_2 + \Phi_2(q, \dot{q}) = Q_2
\end{cases}$$

Dựa trực tiếp vào cấu trúc vi phân của động năng $T$, mọi hệ 2 PT Lagrange II sau khi biến đổi bắt buộc phải thỏa mãn **3 bất biến đại số** sau đây:

#### Bất biến 1: Tính đối xứng của ma trận khối lượng ($M_{12} = M_{21}$)
Từ định nghĩa $M_{ij} = \dfrac{\partial^2 T}{\partial\dot{q}_i\,\partial\dot{q}_j}$ và định lý Schwarz về đạo hàm riêng hỗn hợp cấp hai:
$$M_{12} = \frac{\partial^2 T}{\partial\dot{q}_1\,\partial\dot{q}_2} = \frac{\partial^2 T}{\partial\dot{q}_2\,\partial\dot{q}_1} = M_{21}$$
Vì vậy, trước khi chia rút gọn một phương trình cho một thừa số chung, **hệ số của $\ddot{q}_2$ ở PT1 phải bằng tuyệt đối hệ số của $\ddot{q}_1$ ở PT2** (cả khối lượng, chiều dài lẫn hàm lượng giác).
- *Ứng dụng tự kiểm toán (Đề `1721` Câu 12):* Trong biểu thức $T = 0{,}5(m_1 + m_2)\dot{x}^2 + m_2 r^2\dot{\varphi}^2 + m_2 r\cos\alpha\,\dot{x}\dot{\varphi}$, hệ số chéo là $M_{12} = M_{21} = m_2 r\cos\alpha$. Các phương án nhiễu `12b, 12c` viết hệ số của $\ddot{x}$ ở PT2 là $m_1 r\cos\alpha \neq m_2 r\cos\alpha$ (phá vỡ đối xứng $M_{12} = M_{21}$), còn `12d` phá vỡ đối xứng cả đường chéo lẫn hệ số chéo $\implies$ loại ngay lập tức, chỉ còn `12e`.

#### Bất biến 2: Định lý triệt tiêu số hạng tích vận tốc $\dot{q}_1\dot{q}_2$ ở PT2 khi $M_{11}, M_{22}$ là hằng số
Trong ba mô hình phổ biến nhất của đề thi (Xe + Con lắc, Nêm + Con lăn, Đĩa lăn + Thanh lắc), động năng có cấu trúc đặc biệt: $M_{11} = A$, $M_{22} = B$ đều là hằng số, chỉ có phần tử chéo $M_{12} = C(q_2)$ phụ thuộc $q_2$ (và không phụ thuộc $q_1$):

$$T = \frac{1}{2}A\dot{q}_1^2 + \frac{1}{2}B\dot{q}_2^2 + C(q_2)\dot{q}_1\dot{q}_2$$

Ta tính tường minh cả hai phương trình Lagrange loại II:
- **Phương trình 1 ($q_1$):**
  $$\frac{\partial T}{\partial q_1} = 0, \qquad \frac{\partial T}{\partial\dot{q}_1} = A\dot{q}_1 + C(q_2)\dot{q}_2$$
  $$\frac{d}{dt}\left(\frac{\partial T}{\partial\dot{q}_1}\right) - \frac{\partial T}{\partial q_1} = A\ddot{q}_1 + C(q_2)\ddot{q}_2 + C'(q_2)\dot{q}_2^2 = Q_1$$
- **Phương trình 2 ($q_2$):**
  $$\frac{\partial T}{\partial q_2} = C'(q_2)\dot{q}_1\dot{q}_2, \qquad \frac{\partial T}{\partial\dot{q}_2} = C(q_2)\dot{q}_1 + B\dot{q}_2$$
  $$\begin{aligned}
  \frac{d}{dt}\left(\frac{\partial T}{\partial\dot{q}_2}\right) - \frac{\partial T}{\partial q_2}
  &= \Big[C(q_2)\ddot{q}_1 + C'(q_2)\dot{q}_1\dot{q}_2 + B\ddot{q}_2\Big] - C'(q_2)\dot{q}_1\dot{q}_2 \\
  &= C(q_2)\ddot{q}_1 + B\ddot{q}_2 = Q_2
  \end{aligned}$$

**Kết luận đại số:** Số hạng $+C'(q_2)\dot{q}_1\dot{q}_2$ sinh ra từ đạo hàm toàn phần $\frac{d}{dt}(C(q_2)\dot{q}_1)$ **luôn triệt tiêu đồng nhất** với $-\frac{\partial T}{\partial q_2} = -C'(q_2)\dot{q}_1\dot{q}_2$! Vì vậy ở PT2 **không bao giờ tồn tại số hạng $\dot{q}_1\dot{q}_2$** (xác nhận trực tiếp trên Đề `1821` C12 `12c`, Đề `0002/2016` C10 `10a` và Đề `0001/2015` C12 `12c`).

::: warning Ranh giới áp dụng: Khi nào số hạng $\dot{q}_1\dot{q}_2$ KHÔNG triệt tiêu?
Nếu phần tử đường chéo $M_{11}$ phụ thuộc vào $q_2$ — điển hình là **Mô hình 3 (Khung quay + Con chạy)** với $T = \frac{1}{2}M_{11}(q_2)\dot{q}_1^2 + \frac{1}{2}M_{22}\dot{q}_2^2$ ($M_{12} = 0$) — thì:
- Ở **PT1 ($q_1$):** $\frac{d}{dt}(M_{11}(q_2)\dot{q}_1) = M_{11}(q_2)\ddot{q}_1 + M'_{11}(q_2)\dot{q}_1\dot{q}_2 = Q_1$ (**xuất hiện số hạng Coriolis** $M'_{11}(q_2)\dot{q}_1\dot{q}_2$ do $\partial T/\partial q_1 = 0$ nên không có gì triệt tiêu nó).
- Ở **PT2 ($q_2$):** $M_{22}\ddot{q}_2 - \frac{1}{2}M'_{11}(q_2)\dot{q}_1^2 = Q_2$ (**xuất hiện số hạng ly tâm** $-\frac{1}{2}M'_{11}(q_2)\dot{q}_1^2$ mang dấu âm khi $M'_{11} > 0$).
:::

#### Bất biến 3: Kiểm tra dấu hạng tử phi tuyến và dấu lực không thế khi chuyển vế
1. **Dấu hạng tử $C'(q_2)\dot{q}_2^2$ ở PT1:** Khi $C(q_2) = \beta\cos q_2$ (với $\beta > 0$, chẳng hạn $\beta = m_2 l$ hoặc $\frac{1}{2}m_2 l$), đạo hàm là $C'(q_2) = -\beta\sin q_2$. Do đó số hạng $\dot{q}_2^2$ ở vế trái PT1 bắt buộc là **$-\beta\sin q_2\,\dot{q}_2^2$** (dấu trừ và hàm $\sin$, không bao giờ là $\cos$).
2. **Dấu lực không thế khi chuyển sang vế trái:** Phương trình chuẩn là $\text{VT} = Q_i \iff \text{VT} - Q_i = 0$. Mọi lực cản có $Q_i < 0$ (lực lò xo $-kx$, lực cản nhớt $-c\dot{x}$, lực ma sát trượt $-\mu N$, trọng lực kéo về $-m_2 g l\sin\varphi$) khi chuyển sang vế trái đều phải mang **dấu dương ($+$)** (ví dụ Đề `1821` C12 `12c`: $+\mu(m_1 + m_2)g$ ở PT1 và $+g\sin\varphi$ ở PT2).

---

### 18.3. Ví dụ tổng hợp (Khung quay + Con chạy có lò xo và cản nhớt — kiểm toán SymPy)

**Đề bài:** Thanh dẫn hướng nằm ngang (mômen quán tính đối với trục quay thẳng đứng cố định $Oz$ là $J_0$) quay quanh $Oz$ dưới tác dụng của ngẫu lực dẫn động $M$ (cùng chiều góc quay $q_1 = \theta$). Con chạy khối lượng $m_2$ trượt dọc theo thanh dẫn hướng (tọa độ bán kính $q_2 = r$ đo từ $O$), nối với $O$ bằng lò xo độ cứng $k$ có chiều dài tự nhiên $r_0$, và chịu lực cản nhớt tuyến tính $\vec{F}_c = -c\dot{r}\,\vec{e}_r$ đối với thanh. Lập hệ 2 PT Lagrange loại II.

**Giải và tự kiểm toán:**
1. **Động năng (Mô hình 3a):** $T = \frac{1}{2}(J_0 + m_2 r^2)\dot{\theta}^2 + \frac{1}{2}m_2\dot{r}^2$.
2. **Lực suy rộng:**
   - Thế năng đàn hồi: $\Pi = \frac{1}{2}k(r - r_0)^2 \implies Q_\theta^{(t)} = 0,\; Q_r^{(t)} = -k(r - r_0)$.
   - Công khả dĩ lực không thế: $\delta A^{(kt)} = M\,\delta\theta - c\dot{r}\,\delta r \implies Q_\theta^{(kt)} = M,\; Q_r^{(kt)} = -c\dot{r}$.
   - Tổng hợp: $Q_\theta = M$ và $Q_r = -k(r - r_0) - c\dot{r}$.
3. **Các đạo hàm Lagrange:**
   $$\begin{aligned}
   \frac{\partial T}{\partial\dot{\theta}} &= (J_0 + m_2 r^2)\dot{\theta}, \qquad \frac{\partial T}{\partial\theta} = 0 \\
   \frac{d}{dt}\left(\frac{\partial T}{\partial\dot{\theta}}\right) &= (J_0 + m_2 r^2)\ddot{\theta} + 2m_2 r\dot{r}\dot{\theta} \\
   \frac{\partial T}{\partial\dot{r}} &= m_2\dot{r}, \qquad \frac{\partial T}{\partial r} = m_2 r\dot{\theta}^2 \\
   \frac{d}{dt}\left(\frac{\partial T}{\partial\dot{r}}\right) &= m_2\ddot{r}
   \end{aligned}$$
4. **Hệ 2 PTVP chuyển động:**
   $$\begin{cases}
   (J_0 + m_2 r^2)\ddot{\theta} + 2m_2 r\dot{r}\dot{\theta} = M \\
   m_2\ddot{r} - m_2 r\dot{\theta}^2 + c\dot{r} + k(r - r_0) = 0
   \end{cases}$$
5. **Kiểm toán cấu trúc:** (i) Ma trận khối lượng đường chéo $M_{12} = M_{21} = 0$; (ii) Vì $M_{11}(r) = J_0 + m_2 r^2$ phụ thuộc $r$ nên PT1 có hạng tử Coriolis $+2m_2 r\dot{r}\dot{\theta}$ và PT2 có hạng tử ly tâm $-m_2 r\dot{\theta}^2$ (đẩy con chạy ra xa tâm quay); (iii) Các lực cản $-c\dot{r}$ và $-k(r - r_0)$ chuyển sang vế trái đều mang dấu dương; (iv) Khi $\dot{\theta} = 0$, PT2 suy biến về dao động tắt dần 1 BTD $m_2\ddot{r} + c\dot{r} + k(r - r_0) = 0$.

---

## Ngày 19: Tài Liệu Tra Cứu Kỹ Thuật In A4 (2 Mặt — Chuẩn Mang Vào Phòng Thi)

Bản tra cứu dưới đây được bố cục gọn thành 2 mặt giấy A4, dùng trực tiếp khi làm bài thi mở tài liệu giấy học phần `AS1003`.

### MẶT 1 A4 — Đặc Trưng Khối Lượng, Động Học Ch.9–10 & D'Alembert Ch.13

#### 1. Bảng mômen quán tính $J_C$, bán kính quán tính $\rho_C$ & Định lý Huygens–Steiner

| Vật rắn đồng chất (khối lượng $m$) | Trục đi qua khối tâm $C$ | $J_C$ | Bán kính quán tính $\rho_C = \sqrt{J_C/m}$ | Trục song song đặc biệt |
| :--- | :--- | :---: | :---: | :--- |
| Thanh mảnh dài $L$ | Vuông góc thanh tại trung điểm $C$ | $\dfrac{1}{12}mL^2$ | $\dfrac{L}{2\sqrt{3}}$ | Qua đầu mút $O$: $J_O = \dfrac{1}{3}mL^2$ |
| Đĩa tròn đặc / Trụ tròn đặc bán kính $R$ | Trục đối xứng vuông góc đĩa | $\dfrac{1}{2}mR^2$ | $\dfrac{R}{\sqrt{2}}$ | Qua điểm vành $I$: $J_I = \dfrac{3}{2}mR^2$ |
| Vành tròn mỏng / Ống trụ mỏng không đáy bán kính $R$ | Trục đối xứng vuông góc vành | $mR^2$ | $R$ | Qua điểm vành $I$: $J_I = 2mR^2$ |
| Vành khuyên / Ống trụ dày ($R_1 < R_2$) | Trục đối xứng vuông góc mặt | $\dfrac{1}{2}m(R_1^2 + R_2^2)$ | $\sqrt{\dfrac{R_1^2 + R_2^2}{2}}$ | — |
| Tấm chữ nhật cạnh $a \times b$ | Vuông góc tấm tại tâm $C$ | $\dfrac{1}{12}m(a^2 + b^2)$ | $\sqrt{\dfrac{a^2 + b^2}{12}}$ | Tấm vuông ($a=b$): $J_C = \dfrac{1}{6}ma^2$; qua đỉnh $A$: $J_A = \dfrac{2}{3}ma^2$ |
| Hình cầu đặc bán kính $R$ | Qua tâm cầu $C$ | $\dfrac{2}{5}mR^2$ | $\sqrt{\dfrac{2}{5}}R$ | Hình cầu rỗng vỏ mỏng: $J_C = \dfrac{2}{3}mR^2$ |
| Vật tổng quát cho bán kính quán tính $\rho_O$ | Qua trục $O$ đã cho | $J_O = m\rho_O^2$ *(không có hệ số $\frac{1}{2}$)* | $\rho_O$ | $J_C = m\rho_O^2 - m\cdot OC^2$ |

- **Định lý Huygens–Steiner (dịch trục song song):**
  $$J_\Delta = J_C + m d^2 \qquad \Longleftrightarrow \qquad J_C = J_\Delta - m d^2$$
- **Giới hạn áp dụng bắt buộc:** Trục $\Delta$ phải **song song** với trục đi qua **khối tâm $C$**, với $d$ là khoảng cách vuông góc giữa hai trục. **Cấm dịch trực tiếp** từ trục $A$ sang trục $B$ (khi cả hai không qua $C$): phải qua bước trung gian $J_B = J_A - m d_{AC}^2 + m d_{BC}^2$.

---

#### 2. Bảng tọa độ & công thức Động học Ch.9–10 (Song phẳng, Coriolis, Willis)

| Chủ đề | Công thức vectơ & đại số chuẩn | Điều kiện / Lưu ý kỹ thuật |
| :--- | :--- | :--- |
| **Vận tốc song phẳng** | $\vec{v}_B = \vec{v}_A + \vec{\omega} \times \overrightarrow{AB}$ | $v_{BA} = \lvert\omega\rvert \cdot AB$, $\vec{v}_{BA} \perp AB$; hình chiếu vận tốc hai điểm lên đường nối $AB$ bằng nhau. |
| **Tâm vận tốc tức thời $I$** | $\vec{v}_I = \vec{0} \implies \vec{v}_M = \vec{\omega} \times \overrightarrow{IM}$, $v_M = \lvert\omega\rvert \cdot IM$ | Bánh xe bán kính $R$ lăn không trượt trên nền đứng yên: $I$ tại tiếp điểm; $v_O = \omega R$; đỉnh $D$ cách $I$ đoạn $2R$ có $v_D = 2\omega R$. |
| **Gia tốc song phẳng** | $\vec{a}_B = \vec{a}_A + \vec{\varepsilon} \times \overrightarrow{AB} - \omega^2\overrightarrow{AB}$ | **Cảnh báo:** tại tâm vận tốc tức thời $I$, nói chung **$\vec{a}_I \neq \vec{0}$**. Với bánh xe lăn không trượt trên đường thẳng: $\vec{a}_I = \omega^2 R\,\vec{n}_{\text{hướng vào tâm } O}$. |
| **Tịnh tiến tức thời** | $\omega = 0 \implies \vec{v}_A = \vec{v}_B$, $\vec{a}_{BA}^n = \vec{0}$ | Khi $\omega = 0$, gia tốc góc $\vec{\varepsilon}$ vẫn có thể khác $\vec{0}$ ($\vec{a}_B = \vec{a}_A + \vec{\varepsilon}\times\overrightarrow{AB}$). |
| **Hợp chuyển động (Ch.9)** | $\vec{v}_a = \vec{v}_e + \vec{v}_r$; $\quad \vec{a}_a = \vec{a}_e + \vec{a}_r + \vec{a}_c$ | $\vec{v}_e = \vec{v}_{O'} + \vec{\omega}_e \times \overrightarrow{O'M}$; $\vec{a}_e = \vec{a}_{O'} + \vec{\varepsilon}_e \times \overrightarrow{O'M} + \vec{\omega}_e \times (\vec{\omega}_e \times \overrightarrow{O'M})$. |
| **Gia tốc Coriolis** | $\vec{a}_c = 2\,\vec{\omega}_e \times \vec{v}_r$, độ lớn $a_c = 2\omega_e v_r \sin\widehat{(\vec{\omega}_e, \vec{v}_r)}$ | Triệt tiêu khi chuyển động kéo theo là tịnh tiến ($\vec{\omega}_e = \vec{0}$), hoặc $\vec{v}_r \parallel \vec{\omega}_e$, hoặc $v_r = 0$. Trong mặt phẳng vuông góc $\vec{\omega}_e$: quay $\vec{v}_r$ góc $90^\circ$ theo chiều $\vec{\omega}_e$. |
| **Hệ trục đảo chiều** | $\vec{k} = \vec{i} \times \vec{j}$ (quy tắc bàn tay phải) | Nếu $Ox$ sang phải, $Oy$ xuống dưới $\implies \vec{k}$ hướng **vào trong** (CW là $+\vec{k}$). Nếu $Ox$ sang trái, $Oy$ xuống dưới $\implies \vec{k}$ hướng **ra ngoài** (CCW là $+\vec{k}$). |
| **Công thức Willis** | $\dfrac{\omega_n - \omega_H}{\omega_1 - \omega_H} = (-1)^k \dfrac{\prod Z_{\text{chủ động}}}{\prod Z_{\text{bị động}}}$ | $k$ là số cặp **ăn khớp ngoài** (khớp ngoài dấu $-$, khớp trong dấu $+$; $Z_i \propto R_i$). Bánh răng cố định có $\omega_n = 0$. |

---

#### 3. Bảng thu gọn hệ lực quán tính D'Alembert (2D & 3D)

| Chuyển động & Tâm thu gọn | Vectơ chính lực quán tính $\vec{R}^{\text{qt}}$ | Mômen chính lực quán tính $\vec{M}^{\text{qt}}$ | Ghi chú ranh giới áp dụng |
| :--- | :--- | :--- | :--- |
| **Tịnh tiến (2D/3D)** | $\vec{R}^{\text{qt}} = -m\vec{a}_C$ | $\vec{M}_C^{\text{qt}} = \vec{0}$ | Hợp lực quán tính đặt ngay tại khối tâm $C$. |
| **Song phẳng — thu gọn về khối tâm $C$** | $\vec{R}^{\text{qt}} = -m\vec{a}_C$ | $\vec{M}_C^{\text{qt}} = -J_C\vec{\varepsilon}$ | Đúng cho mọi chuyển động song phẳng có mặt đối xứng. |
| **Quay quanh trục cố định $O$ — về $O$** | $\vec{R}^{\text{qt}} = -m\vec{a}_C$<br>$= m\omega^2\overrightarrow{OC} - m(\vec{\varepsilon}\times\overrightarrow{OC})$ | **$\vec{M}_O^{\text{qt}} = -J_O\vec{\varepsilon}$**<br>*(dùng $J_O$, không phải $J_C$)* | Do $O$ cố định và $Oz$ là trục quán tính chính tại $O$. |
| **Thu gọn về điểm $A$ bất kỳ ($A \neq C$)** | $\vec{R}^{\text{qt}} = -m\vec{a}_C$ | $\vec{M}_A^{\text{qt}} = -J_C\vec{\varepsilon}$<br>$+\,\overrightarrow{AC}\times(-m\vec{a}_C)$ | Cấm viết $-J_A\vec{\varepsilon}$ nếu $\vec{a}_A \neq \vec{0}$ không đi qua $C$. |
| **Quay quanh trục cố định $Oz$ (3D)** | $R_x^{\text{qt}} = m(x_C\omega^2 + y_C\varepsilon)$<br>$R_y^{\text{qt}} = m(y_C\omega^2 - x_C\varepsilon)$<br>$R_z^{\text{qt}} = 0$ | $M_{Ox}^{\text{qt}} = J_{xz}\varepsilon - J_{yz}\omega^2$<br>$M_{Oy}^{\text{qt}} = J_{yz}\varepsilon + J_{xz}\omega^2$<br>$M_{Oz}^{\text{qt}} = -J_z\varepsilon$ | $J_{xz} = \sum m_k x_k z_k$, $J_{yz} = \sum m_k y_k z_k$.<br>Cân bằng động: $x_C = y_C = 0$ và $J_{xz} = J_{yz} = 0$. |

---

### MẶT 2 A4 — Định Lý Động Năng, Ma Trận Khối Lượng Lagrange II & Kiểm Toán Lỗi

#### 4. Bảng công thức Định lý Động năng, Công lò xo ($\Delta l_0 \neq 0$) & Ma trận khối lượng 2 BTD

**a) Động năng & Công ngoại lực (Ch.12.2–12.3):**

| Đại lượng | Công thức tổng quát | Trường hợp đặc biệt cần nhớ |
| :--- | :--- | :--- |
| Động năng 1 vật rắn phẳng | $T = \dfrac{1}{2}m v_C^2 + \dfrac{1}{2}J_C\omega^2$ | Quay quanh $O$ cố định / tâm tức thời $I$: $T = \dfrac{1}{2}J_O\omega^2 = \dfrac{1}{2}J_I\omega^2$. |
| Con lăn lăn không trượt ($v_C = \omega R$) | $T = \dfrac{1}{2}m\left(1 + \dfrac{\rho_C^2}{R^2}\right)v_C^2$ | Trụ đặc ($\rho_C^2 = \frac{1}{2}R^2$): $T = \dfrac{3}{4}m v_C^2$. Ống trụ mỏng ($\rho_C^2 = R^2$): $T = m v_C^2$. |
| Công trọng lực / Ngẫu hằng / Ma sát trượt | $A_P = \pm mg\Delta h$; $A_M = \pm M\Delta\varphi$; $A_{\text{ms}} = -f N s$ | Trọng lực đi xuống công $+$, đi lên công $-$; ma sát trượt luôn sinh công $-$. |
| **Công lò xo ($\Delta l_1 \neq 0$)** | **$A_{\text{đh}} = \dfrac{1}{2}k\left(\Delta l_1^2 - \Delta l_2^2\right)$** | $\Delta l_1, \Delta l_2$ đo từ **trạng thái không biến dạng**. Nếu $\Delta l_1 = \Delta l_0 \neq 0$ và $\Delta l_2 = \Delta l_0 + x$: $A_{\text{đh}} = -k\Delta l_0 x - \frac{1}{2}kx^2$. |
| Định lý động năng | Hữu hạn: $T_2 - T_1 = \sum A_{1\to 2}$ | Đạo hàm (tìm gia tốc hệ 1 BTD): $\dfrac{dT}{dt} = \sum N = \dfrac{d(\sum A)}{dq}\dot{q}$. |

**b) Ma trận khối lượng $M(q)$ & Hệ 2 PT Lagrange II cho 4 mô hình chuẩn:**
Với $T = \frac{1}{2}M_{11}\dot{q}_1^2 + M_{12}\dot{q}_1\dot{q}_2 + \frac{1}{2}M_{22}\dot{q}_2^2$, hệ 2 PT Lagrange II là $\dfrac{d}{dt}\left(\dfrac{\partial T}{\partial\dot{q}_i}\right) - \dfrac{\partial T}{\partial q_i} = Q_i$:

| Mô hình 2 BTD $(q_1, q_2)$ | $M_{11}$ | $M_{12} = M_{21}$ | $M_{22}$ | Số hạng phi tuyến (VT) |
| :--- | :---: | :---: | :---: | :--- |
| 1a. Xe $m_1$ + Cầu $m_2$ treo dài $l$ $(x, \varphi)$ | $m_1 + m_2$ | $m_2 l\cos\varphi$ | $m_2 l^2$ | PT1: $-m_2 l\sin\varphi\,\dot{\varphi}^2$; PT2: $0$ |
| 1b. Xe $m_1$ + Thanh đồng chất $m_2, l$ $(x, \varphi)$ | $m_1 + m_2$ | $\frac{1}{2}m_2 l\cos\varphi$ | $\frac{1}{3}m_2 l^2$ | PT1: $-\frac{1}{2}m_2 l\sin\varphi\,\dot{\varphi}^2$; PT2: $0$ |
| 2. Nêm $m_1(\alpha)$ + Trụ đặc $m_2$ lăn xuống $(x, s)$ | $m_1 + m_2$ | $m_2\cos\alpha$ | $\frac{3}{2}m_2$ | PT1: $0$; PT2: $0$ *(ống mỏng: $M_{22} = 2m_2$)* |
| 3. Thanh quay ngang $J_0$ + Con chạy $m_2$ $(\theta, r)$ | $J_0 + m_2 r^2$ | $0$ | $m_2$ | PT1: $+2m_2 r\dot{r}\dot{\theta}$; PT2: $-m_2 r\dot{\theta}^2$ |
| 4. Đĩa đặc $m_1$ lăn ngang + Thanh $m_2, l$ $(x, \varphi)$ | $\frac{3}{2}m_1 + m_2$ | $\frac{1}{2}m_2 l\cos\varphi$ | $\frac{1}{3}m_2 l^2$ | PT1: $-\frac{1}{2}m_2 l\sin\varphi\,\dot{\varphi}^2$; PT2: $0$ |

---

#### 5. Danh mục 12 lỗi tính toán phổ biến & 4 phép tự kiểm toán bắt buộc

| STT | Lỗi tính toán thường gặp | Hậu quả trong đề trắc nghiệm | Cách phòng ngừa & kiểm toán trực tiếp |
| :---: | :--- | :--- | :--- |
| 1 | Không quy đổi đồng nhất $\text{cm} \to \text{m}$ khi tính $T, A, J$ | Sai lệch hệ số $10^2$ hoặc $10^4$, khớp đúng phương án nhiễu | Đổi toàn bộ chiều dài về mét ($\text{m}$) ngay trước khi thay vào công thức có $g, K, \text{J}, \text{N}\cdot\text{m}$. |
| 2 | Nhầm ống trụ mỏng ($mR^2$) thành trụ đặc ($\frac{1}{2}mR^2$) | Sai $J_O$, sai $M_{22}$ trong Lagrange II (`1721` C10, C12) | Gạch chân từ khóa *"mỏng, không đáy / vành"* ($1$) vs *"đặc, dày đều"* ($\frac{1}{2}$). |
| 3 | Nhân thêm $\frac{1}{2}$ vào bán kính quán tính $\rho$ | Viết nhầm $0{,}5m\rho^2$ thay vì $m\rho^2$ (`1722` C11) | Theo định nghĩa $J \equiv m\rho^2$ không bao giờ có hệ số $\frac{1}{2}$. |
| 4 | Dùng sai chiều dịch trục Huygens–Steiner | Cộng $+md^2$ khi tính $J_C$ từ $J_O$ (`0001/2015` C4) | Luôn nhớ $J_C$ là giá trị **nhỏ nhất** trong mọi trục song song: $J_C = J_O - md^2 < J_O$. |
| 5 | Gán $\vec{a}_I = \vec{0}$ tại tâm vận tốc tức thời $I$ | Mất thành phần hướng tâm $\omega^2 R$ khi tính $\vec{a}_B$ | Chỉ $\vec{v}_I = \vec{0}$; tính gia tốc luôn chọn cực tại **tâm hình học $O$** của bánh xe. |
| 6 | Bỏ quên hệ số `2` hoặc sai chiều $\vec{a}_c = 2\vec{\omega}_e \times \vec{v}_r$ | Sai hẳn độ lớn $a_a$ hoặc dấu vận tốc trong bài giải ngược | Viết tường minh tích có hướng theo cơ sở $(\vec{i}, \vec{j}, \vec{k})$ hoặc quy tắc quay $90^\circ$. |
| 7 | Dùng hệ trục đảo ($Ox$ trái hoặc $Oy$ xuống) nhưng mặc định $\vec{k}$ hướng ra ngoài | Đảo dấu toàn bộ $\vec{\varepsilon}, \vec{M}_O^{\text{qt}}$ và $\vec{R}_{\text{qt}}^\tau$ | Luôn kiểm tra tích $\vec{k} = \vec{i} \times \vec{j}$ theo bàn tay phải trước khi ghi dấu $\vec{\omega}, \vec{\varepsilon}$. |
| 8 | Dùng $-\frac{1}{2}k(\Delta l_2 - \Delta l_1)^2$ khi lò xo đã dãn sẵn $\Delta l_1 \neq 0$ | Thiếu hạng tử bậc nhất $-k\Delta l_1 x$ trong $\sum A$ | Bắt buộc dùng $A_{\text{đh}} = \frac{1}{2}k(\Delta l_1^2 - \Delta l_2^2)$; kiểm tra $A_{\text{đh}}(q_0) = 0$. |
| 9 | Nhầm vận tốc điểm nối dây trên con lăn ($v_D = 2v_O$ vs $v_O$) | Sai tỷ số vận tốc $v_A/v_O$ trong $T$ và công $A_P$ | Tính vận tốc điểm buộc dây qua khoảng cách từ tâm tức thời $I$: $v_D = \omega \cdot ID$. |
| 10 | Sai dấu ngẫu lực $M$ hoặc ma sát trong $Q_i$ | Lệch dấu $Q_1, Q_2$ (`0001/2016` C10, `1821` C10) | Đối chiếu mũi tên $M$ với chiều tăng $\delta q_i$; ma sát trượt nội lực phụ thuộc $\operatorname{sign}(\dot{q}_{\text{tương đối}})$. |
| 11 | Không triệt tiêu $C'(q_2)\dot{q}_1\dot{q}_2$ ở PT2 hoặc viết sai dấu $\dot{q}_2^2$ ở PT1 | Chọn nhầm phương án nhiễu ở câu lập hệ 2 PTVP | Kiểm tra Bất biến 1 ($M_{12}=M_{21}$), Bất biến 2 (triệt tiêu ở PT2 khi $M_{11}, M_{22}$ hằng) và Bất biến 3. |
| 12 | Chuyển vế $Q_i$ sang vế trái mà không đổi dấu | Viết $-\mu(m_1+m_2)g = 0$ thay vì $+\mu(m_1+m_2)g = 0$ (`1821` C12a) | Luôn viết dạng $\text{VT} = Q_i$ trước, rồi mới trừ hai vế cho $Q_i$ để đưa về $= 0$. |

**Bốn phép tự kiểm toán toán học (thực hiện trước khi tô đáp án, đặc biệt khi chọn `e`):**
1. **Kiểm tra thứ nguyên:** Mọi số hạng cộng/trừ với nhau trong $T$ phải có thứ nguyên $\text{kg}\cdot\text{m}^2/\text{s}^2$; trong PT tọa độ dài $x$ là lực ($\text{N}$); trong PT tọa độ góc $\varphi$ là mômen ($\text{N}\cdot\text{m}$).
2. **Kiểm tra điều kiện biên $q = q_0$:** Tại vị trí bắt đầu thả $q = q_0$, biểu thức tổng công $\sum A(q_0)$ bắt buộc bằng $0$.
3. **Kiểm tra trường hợp suy biến:** Đặt $\alpha = 0^\circ$ (mặt nghiêng thành mặt ngang), hoặc $m_2 = 0$ (mất vật thứ hai), hoặc $\varphi = 0$ (thanh thẳng đứng): phương trình phức tạp phải rút gọn về phương trình sơ cấp đã biết (ví dụ con lắc đơn $l\ddot{\varphi} + g\sin\varphi = 0$ khi khóa $\ddot{x} = 0$).
4. **Kiểm tra cấu trúc ma trận Lagrange II:** Xác minh $M_{12} = M_{21}$, hệ số $\ddot{q}_1, \ddot{q}_2$ bằng $2$ lần hệ số $\dot{q}_1^2, \dot{q}_2^2$ trong $T$, và kiểm tra tính triệt tiêu hạng tử $\dot{q}_1\dot{q}_2$ ở PT2.

---

## Ngày 20: Đề Thi Thử Tổng Hợp Chuẩn HCMUT AS1003 (12 Câu / 90 Phút) & Phiếu Kiểm Toán Năng Lực Cuối Khóa

### 20.1. Đề Thi Thử Tổng Hợp Số 1 — Chuẩn Học Phần `AS1003`

- **Thời gian làm bài:** `90` phút (tự bấm giờ nghiêm túc, chỉ mở bản **Tài liệu tra cứu A4 ở Ngày 19** và dùng máy tính cầm tay).
- **Cấu trúc phủ chương trình (12 câu, 5 phương án `a..e`):**
  - Chùm 1 (Câu 1–2): Hợp chuyển động, gia tốc Coriolis, rãnh lệch tâm và bài toán giải ngược/đổi chiều quay (Ch.9).
  - Chùm 2 (Câu 3–5): Tọa độ khối tâm, mômen quán tính và thu gọn hệ lực quán tính D'Alembert trong hệ trục đảo hướng (Ch.11 & Ch.13).
  - Chùm 3 (Câu 6–9): Định lý động năng hệ 1 BTD có lò xo dãn sẵn $\Delta l_0 \neq 0$, sức căng dây và điều kiện lăn không trượt (Ch.12.3 & Ch.13).
  - Chùm 4 (Câu 10–12): Phân loại liên kết holonom/không holonom (Ch.14), động năng 2 BTD và hệ 2 PT Lagrange loại II có lò xo và ma sát lăn (Ch.15).

---

#### Chùm 1 (Câu 1 – Câu 2: Hợp Chuyển Động & Gia Tốc Coriolis — Rãnh Lệch Tâm)

Một đĩa tròn quay quanh trục cố định đi qua tâm $O$ (vuông góc mặt phẳng đĩa). Gắn lên đĩa hệ trục tọa độ Descartes thuận $O\xi\eta$ ($\vec{e}_\xi, \vec{e}_\eta$ nằm trong mặt phẳng đĩa, $\vec{k} = \vec{e}_\xi \times \vec{e}_\eta$ hướng **ra ngoài** mặt phẳng). Trên đĩa xẻ một rãnh thẳng song song với trục $O\xi$ và cách tâm $O$ một khoảng $d = 0{,}3\text{ m}$ về phía $+O\eta$ (chân đường vuông góc từ $O$ lên rãnh là điểm $H(0;\; 0{,}3\text{ m})$). Con chạy $M$ chuyển động dọc theo rãnh thẳng này với vận tốc tương đối không đổi $\vec{v}_r = v_r\,\vec{e}_\xi$.

**Câu 1.** Cho đĩa quay đều **ngược chiều kim đồng hồ** với $\Omega = 4\text{ rad/s}$ ($\vec{\omega}_e = +4\vec{k}$) và con chạy $M$ trượt đều theo chiều $+\vec{e}_\xi$ với $v_r = 2{,}7\text{ m/s}$. Tại thời điểm $M$ ở vị trí có tọa độ $\xi = 0{,}5\text{ m}$ ($\overrightarrow{OM} = 0{,}5\vec{e}_\xi + 0{,}3\vec{e}_\eta\text{ m}$), vectơ vận tốc tuyệt đối $\vec{v}_a$ và độ lớn $v_a$ của $M$ là:
- `a.` $\vec{v}_a = 3{,}9\vec{e}_\xi + 2{,}0\vec{e}_\eta\text{ (m/s)};\; v_a \approx 4{,}38\text{ m/s}$
- `b.` $\vec{v}_a = 2{,}7\vec{e}_\xi + 2{,}33\vec{e}_\eta\text{ (m/s)};\; v_a \approx 3{,}57\text{ m/s}$
- `c.` $\vec{v}_a = 1{,}5\vec{e}_\xi + 2{,}0\vec{e}_\eta\text{ (m/s)};\; v_a = 2{,}50\text{ m/s}$
- `d.` $\vec{v}_a = 1{,}5\vec{e}_\xi - 2{,}0\vec{e}_\eta\text{ (m/s)};\; v_a = 2{,}50\text{ m/s}$
- `e.` Các đáp án còn lại đều sai.

**Câu 2.** Giữ nguyên hình học rãnh thẳng lệch tâm $d = 0{,}3\text{ m}$, nhưng đổi chiều cho đĩa quay đều **cùng chiều kim đồng hồ** với $\Omega = 4\text{ rad/s}$ ($\vec{\omega}_e = -4\vec{k}$). Con chạy $M$ chuyển động đều dọc rãnh ($\dot{v}_r = 0$). Để tại vị trí $\xi = 0{,}5\text{ m}$ thành phần gia tốc tuyệt đối vuông góc với rãnh triệt tiêu ($a_{M\eta} = 0$), giá trị đại số của vận tốc tương đối $v_r$ (chiếu lên $+\vec{e}_\xi$) và vectơ gia tốc tuyệt đối $\vec{a}_M$ lần lượt bằng:
- `a.` $v_r = +0{,}6\text{ m/s};\; \vec{a}_M = -8{,}0\vec{e}_\xi\text{ (m/s}^2\text{)}$
- `b.` $v_r = -0{,}6\text{ m/s};\; \vec{a}_M = -8{,}0\vec{e}_\xi\text{ (m/s}^2\text{)}$
- `c.` $v_r = -1{,}2\text{ m/s};\; \vec{a}_M = -8{,}0\vec{e}_\xi\text{ (m/s}^2\text{)}$
- `d.` $v_r = -0{,}6\text{ m/s};\; \vec{a}_M = +8{,}0\vec{e}_\xi\text{ (m/s}^2\text{)}$
- `e.` Các đáp án còn lại đều sai.

---

#### Chùm 2 (Câu 3 – Câu 5: Khối Tâm, Mômen Quán Tính & Thu Gọn D'Alembert)

Cơ hệ phẳng gồm thanh thẳng mảnh đồng chất $OA$ (khối lượng $m_1 = 6\text{ kg}$, chiều dài $L = 0{,}6\text{ m}$) hàn cứng thẳng hàng xuyên tâm vào một **vành tròn mỏng đồng chất** tâm $B$ (khối lượng $m_2 = 4\text{ kg}$, bán kính $R = 0{,}3\text{ m}$; các điểm $O, A, B$ thẳng hàng với $OB = L + R = 0{,}9\text{ m}$). Hệ quay quanh trục cố định đi qua $O$ vuông góc mặt phẳng $Oxy$. Hệ trục Descartes thuận $Oxy$ đặt với $Ox(\vec{i})$ hướng **sang phải**, $Oy(\vec{j})$ hướng **xuống dưới** ($\vec{k} = \vec{i} \times \vec{j}$ hướng **vào trong** mặt phẳng). Tại thời điểm tia $OB$ nằm trong góc phần tư $+Ox, +Oy$ hợp với tia $+Ox$ góc $\alpha = 30^\circ$, cơ hệ đang quay **ngược chiều kim đồng hồ chậm dần** với độ lớn $\omega = 2\text{ rad/s}$ và $\varepsilon = 4\text{ rad/s}^2$.

**Câu 3.** Tọa độ khối tâm $C(x_C; y_C)$ của toàn cơ hệ trong hệ trục $Oxy$ tại thời điểm đã cho là:
- `a.` $x_C = 0{,}27\text{ m};\; y_C = 0{,}27\sqrt{3}\text{ m}$
- `b.` $x_C = 0{,}30\sqrt{3}\text{ m};\; y_C = 0{,}30\text{ m}$
- `c.` $x_C = 0{,}27\sqrt{3}\text{ m};\; y_C = -0{,}27\text{ m}$
- `d.` $x_C = 0{,}27\sqrt{3}\text{ m};\; y_C = 0{,}27\text{ m}$
- `e.` Các đáp án còn lại đều sai.

**Câu 4.** Mômen quán tính $J_O$ của toàn cơ hệ đối với trục quay đi qua $O$ là:
- `a.` $J_O = 4{,}32\text{ kg}\cdot\text{m}^2$
- `b.` $J_O = 4{,}14\text{ kg}\cdot\text{m}^2$
- `c.` $J_O = 3{,}78\text{ kg}\cdot\text{m}^2$
- `d.` $J_O = 1{,}404\text{ kg}\cdot\text{m}^2$
- `e.` Các đáp án còn lại đều sai.

**Câu 5.** Kết quả thu gọn hệ lực quán tính của toàn cơ hệ về tâm quay cố định $O$ là:
- `a.` $\vec{R}^{\text{qt}} = 21{,}6\sqrt{2}\left(\cos 15^\circ\,\vec{i} - \sin 15^\circ\,\vec{j}\right)\text{ N};\; \vec{M}_O^{\text{qt}} = +17{,}28\,\vec{k}\text{ N}\cdot\text{m}$
- `b.` $\vec{R}^{\text{qt}} = 21{,}6\sqrt{2}\left(\cos 75^\circ\,\vec{i} + \sin 75^\circ\,\vec{j}\right)\text{ N};\; \vec{M}_O^{\text{qt}} = -17{,}28\,\vec{k}\text{ N}\cdot\text{m}$
- `c.` $\vec{R}^{\text{qt}} = 21{,}6\sqrt{2}\left(\cos 15^\circ\,\vec{i} - \sin 15^\circ\,\vec{j}\right)\text{ N};\; \vec{M}_O^{\text{qt}} = -5{,}616\,\vec{k}\text{ N}\cdot\text{m}$
- `d.` $\vec{R}^{\text{qt}} = 21{,}6\left(\cos 15^\circ\,\vec{i} - \sin 15^\circ\,\vec{j}\right)\text{ N};\; \vec{M}_O^{\text{qt}} = -17{,}28\,\vec{k}\text{ N}\cdot\text{m}$
- `e.` Các đáp án còn lại đều sai.

---

#### Chùm 3 (Câu 6 – Câu 9: Định Lý Động Năng 1 BTD, Sức Căng Dây & Điều Kiện Lăn Không Trượt)

Con lăn tròn đặc đồng chất tâm $O$ (khối lượng $m_1 = 8\text{ kg}$, bán kính $R = 0{,}2\text{ m}$, $J_O = \frac{1}{2}m_1 R^2$) lăn không trượt trên mặt phẳng ngang. Một sợi dây nhẹ không dãn được quấn tại **đỉnh trên cùng $D$** của con lăn, căng nằm ngang sang phải, vắt qua ròng rọc nhẹ không khối lượng $E$ và treo thẳng đứng vật nặng $A$ (khối lượng $m_2 = 7\text{ kg}$). Tâm $O$ của con lăn được nối với tường cố định bên trái bằng lò xo nằm ngang độ cứng $K = 200\text{ N/m}$. Ban đầu giữ hệ đứng yên tại vị trí lò xo đã bị **dãn sẵn** một đoạn $\Delta l_0 = 0{,}1\text{ m}$, rồi thả nhẹ. Gọi $x$ là độ dịch chuyển sang phải của tâm $O$ tính từ vị trí thả ($x = 0$ ứng với độ dãn lò xo $\Delta l_0 = 0{,}1\text{ m}$). Lấy $g = 10\text{ m/s}^2$, bỏ qua ma sát lăn.

**Câu 6.** Biểu thức động năng $T$ của toàn cơ hệ theo vận tốc $v_O$ của tâm con lăn $O$ là:
- `a.` $T = 9{,}5\,v_O^2\text{ (J)}$
- `b.` $T = 18\,v_O^2\text{ (J)}$
- `c.` $T = 20\,v_O^2\text{ (J)}$
- `d.` $T = 22\,v_O^2\text{ (J)}$
- `e.` Các đáp án còn lại đều sai.

**Câu 7.** Tổng công $\sum A$ của các lực tác dụng lên cơ hệ khi tâm $O$ dịch chuyển từ vị trí thả $x = 0$ đến vị trí $x > 0$ là:
- `a.` $\sum A = 140x - 100x^2\text{ (J)}$
- `b.` $\sum A = 120x - 100x^2\text{ (J)}$
- `c.` $\sum A = 120x - 200x^2\text{ (J)}$
- `d.` $\sum A = 50x - 100x^2\text{ (J)}$
- `e.` Các đáp án còn lại đều sai.

**Câu 8.** Gia tốc $a_O(x)$ hướng sang phải của tâm con lăn và độ lớn vận tốc $v_O$ tại vị trí $x = 0{,}2\text{ m}$ lần lượt là:
- `a.` $a_O = 3 - 5x\text{ (m/s}^2\text{)};\; v_O = 1{,}00\text{ m/s}$
- `b.` $a_O = 6 - 10x\text{ (m/s}^2\text{)};\; v_O = 1{,}00\text{ m/s}$
- `c.` $a_O = 3 - 5x\text{ (m/s}^2\text{)};\; v_O = 1{,}41\text{ m/s}$
- `d.` $a_O = 3{,}5 - 5x\text{ (m/s}^2\text{)};\; v_O = 1{,}10\text{ m/s}$
- `e.` Các đáp án còn lại đều sai.

**Câu 9.** Tại thời điểm ngay khi thả ($x = 0$), xác định sức căng dây $S$, lực ma sát nghỉ $\vec{F}_{\text{ms}}$ tác dụng lên con lăn tại tiếp điểm $I$, và hệ số ma sát nghỉ tối thiểu $f_{0,\min}$ giữa con lăn với mặt ngang để con lăn không bị trượt:
- `a.` $S = 49\text{ N};\; F_{\text{ms}} = 5\text{ N}$ (hướng sang trái); $f_{0,\min} = 0{,}0625$
- `b.` $S = 28\text{ N};\; F_{\text{ms}} = 16\text{ N}$ (hướng sang trái); $f_{0,\min} = 0{,}20$
- `c.` $S = 28\text{ N};\; F_{\text{ms}} = 40\text{ N}$ (hướng sang phải); $f_{0,\min} = 0{,}50$
- `d.` $S = 28\text{ N};\; F_{\text{ms}} = 16\text{ N}$ (hướng sang phải); $f_{0,\min} = 0{,}20$
- `e.` Các đáp án còn lại đều sai.

---

#### Chùm 4 (Câu 10 – Câu 12: Liên Kết Ch.14, Động Năng 2 BTD & Hệ 2 PT Lagrange II)

**Câu 10 (Chương 14 — Phân loại liên kết & Liên kết lý tưởng):** Xét hai mô hình ràng buộc sau: (I) Đĩa tròn bán kính $R$ lăn không trượt trên một đường thẳng cố định ($\dot{x} - R\dot{\varphi} = 0$); (II) Lưỡi dao trượt trên mặt phẳng ngang cố định $(x, y, \theta)$ sao cho vận tốc tiếp xúc luôn nằm dọc phương lưỡi dao ($\dot{x}\sin\theta - \dot{y}\cos\theta = 0$). Nhận định nào sau đây là **đúng**?
- `a.` Cả (I) và (II) đều là liên kết không holonom vì phương trình liên kết đều chứa vận tốc suy rộng.
- `b.` (I) là liên kết holonom (vi phân khả tích) và lý tưởng; (II) là liên kết không holonom thực sự (không thỏa điều kiện khả tích Frobenius).
- `c.` (I) là liên kết holonom nhưng không lý tưởng vì tồn tại lực ma sát nghỉ tại tiếp điểm $I$; (II) là liên kết holonom.
- `d.` Cả (I) và (II) đều là liên kết không dừng và không giữ (một phía).
- `e.` Các đáp án còn lại đều sai.

**Dữ kiện chung cho Câu 11 – Câu 12:** Đĩa tròn đặc đồng chất tâm $A$ (khối lượng $m_1$, bán kính $R$) lăn không trượt trên mặt phẳng ngang cố định. Tâm $A$ nối với tường cố định bên trái qua lò xo nằm ngang độ cứng $k$. Chọn tọa độ suy rộng $q_1 = x$ là độ dời sang phải của tâm $A$ tính từ vị trí lò xo **không biến dạng**. Khi đĩa lăn theo chiều tăng $x$ ($\dot{x} > 0$), mặt tựa tác dụng lên đĩa một ngẫu cản ma sát lăn hằng số $M_r$ ngược chiều quay của đĩa. Một thanh thẳng mảnh đồng chất $AB$ (khối lượng $m_2$, chiều dài $l$) nối chốt bản lề không ma sát tại tâm $A$ và chuyển động trong mặt phẳng thẳng đứng, hợp góc $q_2 = \varphi$ (ngược chiều kim đồng hồ sang phía $+Ox$) với phương thẳng đứng hướng xuống.

**Câu 11.** Biểu thức động năng $T$ của toàn cơ hệ theo $(x, \varphi, \dot{x}, \dot{\varphi})$ là:
- `a.` $T = \left(\dfrac{3}{4}m_1 + \dfrac{1}{2}m_2\right)\dot{x}^2 + \dfrac{1}{6}m_2 l^2\dot{\varphi}^2 + \dfrac{1}{2}m_2 l\cos\varphi\,\dot{x}\dot{\varphi}$
- `b.` $T = \left(\dfrac{1}{2}m_1 + \dfrac{1}{2}m_2\right)\dot{x}^2 + \dfrac{1}{6}m_2 l^2\dot{\varphi}^2 + \dfrac{1}{2}m_2 l\cos\varphi\,\dot{x}\dot{\varphi}$
- `c.` $T = \left(\dfrac{3}{4}m_1 + \dfrac{1}{2}m_2\right)\dot{x}^2 + \dfrac{1}{24}m_2 l^2\dot{\varphi}^2 + \dfrac{1}{2}m_2 l\cos\varphi\,\dot{x}\dot{\varphi}$
- `d.` $T = \left(\dfrac{3}{4}m_1 + \dfrac{1}{2}m_2\right)\dot{x}^2 + \dfrac{1}{6}m_2 l^2\dot{\varphi}^2 - \dfrac{1}{2}m_2 l\cos\varphi\,\dot{x}\dot{\varphi}$
- `e.` Các đáp án còn lại đều sai.

**Câu 12.** Trong giai đoạn đĩa lăn sang phải ($\dot{x} > 0$), hệ phương trình vi phân chuyển động Lagrange loại II của cơ hệ là:
- `a.`
  $$\begin{cases}
  \begin{aligned}
  \left(\frac{3}{2}m_1 + m_2\right)\ddot{x} &+ \frac{1}{2}m_2 l\cos\varphi\,\ddot{\varphi} \\
  &+ \frac{1}{2}m_2 l\sin\varphi\,\dot{\varphi}^2 + kx + \frac{M_r}{R} = 0
  \end{aligned} \\
  \frac{1}{2}m_2 l\cos\varphi\,\ddot{x} + \frac{1}{3}m_2 l^2\ddot{\varphi} + \frac{1}{2}m_2 g l\sin\varphi = 0
  \end{cases}$$
- `b.`
  $$\begin{cases}
  \begin{aligned}
  \left(\frac{3}{2}m_1 + m_2\right)\ddot{x} &+ \frac{1}{2}m_2 l\cos\varphi\,\ddot{\varphi} \\
  &- \frac{1}{2}m_2 l\sin\varphi\,\dot{\varphi}^2 + kx + \frac{M_r}{R} = 0
  \end{aligned} \\
  \begin{aligned}
  \frac{1}{2}m_2 l\cos\varphi\,\ddot{x} &+ \frac{1}{3}m_2 l^2\ddot{\varphi} \\
  &- \frac{1}{2}m_2 l\sin\varphi\,\dot{x}\dot{\varphi} + \frac{1}{2}m_2 g l\sin\varphi = 0
  \end{aligned}
  \end{cases}$$
- `c.`
  $$\begin{cases}
  \begin{aligned}
  \left(\frac{3}{2}m_1 + m_2\right)\ddot{x} &+ \frac{1}{2}m_2 l\cos\varphi\,\ddot{\varphi} \\
  &- \frac{1}{2}m_2 l\sin\varphi\,\dot{\varphi}^2 + kx - \frac{M_r}{R} = 0
  \end{aligned} \\
  \frac{1}{2}m_2 l\cos\varphi\,\ddot{x} + \frac{1}{3}m_2 l^2\ddot{\varphi} + \frac{1}{2}m_2 g l\sin\varphi = 0
  \end{cases}$$
- `d.`
  $$\begin{cases}
  \begin{aligned}
  \left(\frac{3}{4}m_1 + m_2\right)\ddot{x} &+ \frac{1}{2}m_2 l\cos\varphi\,\ddot{\varphi} \\
  &- \frac{1}{2}m_2 l\sin\varphi\,\dot{\varphi}^2 + kx + \frac{M_r}{R} = 0
  \end{aligned} \\
  \frac{1}{2}m_2 l\cos\varphi\,\ddot{x} + \frac{1}{3}m_2 l^2\ddot{\varphi} + \frac{1}{2}m_2 g l\sin\varphi = 0
  \end{cases}$$
- `e.` Các đáp án còn lại đều sai.

---

### 20.2. Bảng Đáp Án & Lời Giải Đại Số Kiểm Toán (Chỉ Mở Sau Khi Hết 90 Phút)

<details class="page-preview">
<summary>Mở Bảng Đáp Án, Lời Giải Chi Tiết & Giải Phẫu Phương Án Sai (Đã kiểm chứng 100% bằng SymPy)</summary>

| Câu | 1 | 2 | 3 | 4 | 5 | 6 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **`c`** | **`b`** | **`d`** | **`a`** | **`e`** | **`c`** |

| Câu | 7 | 8 | 9 | 10 | 11 | 12 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Đáp án** | **`b`** | **`a`** | **`d`** | **`b`** | **`a`** | **`e`** |

---

#### Chùm 1 (Câu 1 – Câu 2)

- **Câu 1 (`c`):** Với $\overrightarrow{OM} = 0{,}5\vec{e}_\xi + 0{,}3\vec{e}_\eta\text{ (m)}$ và $\vec{\omega}_e = +4\vec{k}\text{ (rad/s)}$, vận tốc kéo theo của điểm $M$ là:
  $$\vec{v}_e = \vec{\omega}_e \times \overrightarrow{OM} = (4\vec{k}) \times (0{,}5\vec{e}_\xi + 0{,}3\vec{e}_\eta) = -1{,}2\vec{e}_\xi + 2{,}0\vec{e}_\eta\text{ (m/s)}$$
  Cộng với vận tốc tương đối $\vec{v}_r = 2{,}7\vec{e}_\xi\text{ (m/s)}$:
  $$\vec{v}_a = \vec{v}_e + \vec{v}_r = (2{,}7 - 1{,}2)\vec{e}_\xi + 2{,}0\vec{e}_\eta = 1{,}5\vec{e}_\xi + 2{,}0\vec{e}_\eta\text{ (m/s)}$$
  $$v_a = \sqrt{1{,}5^2 + 2{,}0^2} = 2{,}50\text{ m/s}$$
  - *Giải phẫu phương án sai:* `a` sai dấu $-\Omega d$ thành $+\Omega d$ ($2{,}7 + 1{,}2 = 3{,}9$); `b` áp dụng máy móc công thức $\vec{v}_e \perp \vec{v}_r$ (chỉ đúng khi rãnh đi qua tâm $O$) với $r = \sqrt{0{,}5^2 + 0{,}3^2}$; `d` sai dấu thành phần $\vec{e}_\eta$.

- **Câu 2 (`b`):** Đĩa quay đều cùng chiều KĐH nên $\vec{\omega}_e = -4\vec{k}$, $\vec{\varepsilon}_e = \vec{0}$ và $\vec{a}_r = \vec{0}$. Các thành phần gia tốc tại $\overrightarrow{OM} = 0{,}5\vec{e}_\xi + 0{,}3\vec{e}_\eta$:
  $$\begin{aligned}
  \vec{a}_e^n &= -\Omega^2\overrightarrow{OM} = -16(0{,}5\vec{e}_\xi + 0{,}3\vec{e}_\eta) = -8{,}0\vec{e}_\xi - 4{,}8\vec{e}_\eta\text{ (m/s}^2\text{)} \\
  \vec{a}_c &= 2\vec{\omega}_e \times \vec{v}_r = 2(-4\vec{k}) \times (v_r\vec{e}_\xi) = -8v_r\,\vec{e}_\eta\text{ (m/s}^2\text{)}
  \end{aligned}$$
  Điều kiện $a_{M\eta} = 0$:
  $$-4{,}8 - 8v_r = 0 \implies v_r = -0{,}6\text{ m/s}$$
  Khi đó gia tốc tuyệt đối chỉ còn thành phần dọc rãnh: $\vec{a}_M = -8{,}0\vec{e}_\xi\text{ (m/s}^2\text{)}$.
  - *Giải phẫu phương án sai:* `a` giữ nhầm chiều quay CCW cũ ($\vec{\omega}_e = +4\vec{k}$) nên ra $v_r = +0{,}6$; `c` thiếu hệ số `2` trong gia tốc Coriolis ($-4v_r = 4{,}8 \implies v_r = -1{,}2$); `d` đảo sai dấu gia tốc hướng tâm $\vec{a}_e^n$.

---

#### Chùm 2 (Câu 3 – Câu 5)

- **Câu 3 (`d`):** Tổng khối lượng $M = m_1 + m_2 = 10\text{ kg}$. Khoảng cách từ $O$ đến khối tâm $C$:
  $$OC = \frac{m_1(L/2) + m_2(L + R)}{m_1 + m_2} = \frac{6(0{,}3) + 4(0{,}9)}{10} = \frac{5{,}4}{10} = 0{,}54\text{ m}$$
  Do tia $OB$ nằm trong góc phần tư $+Ox, +Oy$ hợp $+Ox$ góc $\alpha = 30^\circ$:
  $$x_C = 0{,}54\cos 30^\circ = 0{,}27\sqrt{3}\text{ m}, \qquad y_C = 0{,}54\sin 30^\circ = 0{,}27\text{ m}$$
  - *Giải phẫu phương án sai:* `a` đảo lẫn $\sin 30^\circ$ và $\cos 30^\circ$; `b` lấy nhầm trung bình cộng $(0{,}3 + 0{,}9)/2 = 0{,}60\text{ m}$ bỏ qua trọng số khối lượng; `c` đặt dấu âm cho $y_C$ vì quên $Oy$ hướng xuống dưới.

- **Câu 4 (`a`):** Thanh $OA$ quay quanh đầu $O$ có $J_{O,1} = \frac{1}{3}m_1 L^2$; vành tròn mỏng $B$ có $J_{B} = m_2 R^2$ (KHÔNG có hệ số $\frac{1}{2}$). Áp dụng Huygens–Steiner:
  $$\begin{aligned}
  J_O &= \frac{1}{3}m_1 L^2 + m_2\left[R^2 + (L + R)^2\right] \\
      &= \frac{1}{3}(6)(0{,}6)^2 + 4\left(0{,}3^2 + 0{,}9^2\right) \\
      &= 0{,}72 + 3{,}60 = 4{,}32\text{ kg}\cdot\text{m}^2
  \end{aligned}$$
  - *Giải phẫu phương án sai:* `b` nhầm vành tròn mỏng thành đĩa tròn đặc ($0{,}72 + 4(0{,}045 + 0{,}81) = 4{,}14$); `c` dùng nhầm $\frac{1}{12}m_1 L^2$ cho thanh quay quanh đầu $O$ ($0{,}18 + 3{,}60 = 3{,}78$); `d` tính nhầm ra $J_C = J_O - M\cdot OC^2 = 1{,}404$.

- **Câu 5 (`e`):** Vì $Ox(\vec{i})$ hướng sang phải và $Oy(\vec{j})$ hướng xuống dưới, theo quy tắc bàn tay phải $\vec{k} = \vec{i} \times \vec{j}$ hướng **vào trong** mặt phẳng (chiều **cùng KĐH** là $+\vec{k}$). Hệ quay **ngược KĐH chậm dần** nên:
  $$\vec{\omega} = -2\vec{k}\text{ (rad/s)}, \qquad \vec{\varepsilon} = +4\vec{k}\text{ (rad/s}^2\text{)}$$
  Vectơ định vị khối tâm: $\overrightarrow{OC} = 0{,}54(\cos 30^\circ\,\vec{i} + \sin 30^\circ\,\vec{j})$. Do $\omega^2 = \varepsilon = 4$:
  $$\begin{aligned}
  \vec{R}_{\text{qt}}^n &= +M\omega^2\overrightarrow{OC} = 21{,}6(\cos 30^\circ\,\vec{i} + \sin 30^\circ\,\vec{j})\text{ N} \\
  \vec{a}_C^\tau &= \vec{\varepsilon} \times \overrightarrow{OC} = (+4\vec{k}) \times 0{,}54(\cos 30^\circ\,\vec{i} + \sin 30^\circ\,\vec{j}) \\
                 &= 2{,}16(-\sin 30^\circ\,\vec{i} + \cos 30^\circ\,\vec{j})\text{ m/s}^2 \\
  \vec{R}_{\text{qt}}^\tau &= -M\vec{a}_C^\tau = 21{,}6(+\sin 30^\circ\,\vec{i} - \cos 30^\circ\,\vec{j})\text{ N}
  \end{aligned}$$
  Cộng hai thành phần vuông góc:
  $$\begin{aligned}
  \vec{R}^{\text{qt}} &= 21{,}6\left[(\cos 30^\circ + \sin 30^\circ)\vec{i} + (\sin 30^\circ - \cos 30^\circ)\vec{j}\right] \\
                      &= 21{,}6\sqrt{2}\left(\cos 15^\circ\,\vec{i} - \sin 15^\circ\,\vec{j}\right)\text{ N}
  \end{aligned}$$
  Mômen quán tính thu gọn về tâm quay cố định $O$:
  $$\vec{M}_O^{\text{qt}} = -J_O\vec{\varepsilon} = -4{,}32(+4\vec{k}) = -17{,}28\,\vec{k}\text{ N}\cdot\text{m}$$
  - *Giải phẫu phương án sai:* `a` sai dấu mômen $+17{,}28\vec{k}$ (nhầm $\vec{k}$ hướng ra ngoài); `b` tính góc $75^\circ$ do nhầm quay nhanh dần ($\vec{\varepsilon} = -4\vec{k}$); `c` dùng nhầm $J_C = 1{,}404$ thay vì $J_O = 4{,}32$ ($-1{,}404 \times 4 = -5{,}616$); `d` thiếu thừa số $\sqrt{2}$. Do không có phương án `a..d` đúng đồng thời cả hai biểu thức, chọn **`e`**.

---

#### Chùm 3 (Câu 6 – Câu 9)

- **Câu 6 (`c`):** Tâm vận tốc tức thời của con lăn là tiếp điểm đáy $I$. Do $ID = 2R$ và $IO = R$, vận tốc điểm quấn dây $D$ (và vật $A$) là $v_A = v_D = 2v_O$. Trụ tròn đặc lăn không trượt có $T_1 = \frac{3}{4}m_1 v_O^2$:
  $$T = \frac{3}{4}m_1 v_O^2 + \frac{1}{2}m_2(2v_O)^2 = \left(\frac{3}{4}\cdot 8 + 2\cdot 7\right)v_O^2 = (6 + 14)v_O^2 = 20\,v_O^2\text{ (J)}$$
  - *Giải phẫu phương án sai:* `a` nhầm $v_A = v_O$ ($6 + 3{,}5 = 9{,}5$); `b` bỏ quên động năng quay của con lăn ($4 + 14 = 18$); `d` nhầm trụ đặc thành ống trụ mỏng ($8 + 14 = 22$).

- **Câu 7 (`b`):** Khi $O$ tiến sang phải đoạn $x$, vật $A$ đi xuống đoạn $s_A = 2x$ và độ dãn lò xo tăng từ $\Delta l_0 = 0{,}1\text{ m}$ lên $\Delta l = 0{,}1 + x$:
  $$\begin{aligned}
  \sum A &= m_2 g(2x) + \frac{1}{2}K\left[\Delta l_0^2 - (\Delta l_0 + x)^2\right] \\
         &= 7 \cdot 10 \cdot 2x + 100\left[0{,}01 - (0{,}01 + 0{,}2x + x^2)\right] \\
         &= 140x - 20x - 100x^2 = 120x - 100x^2\text{ (J)}
  \end{aligned}$$
  - *Giải phẫu phương án sai:* `a` quên độ dãn ban đầu $\Delta l_0 = 0{,}1\text{ m}$; `c` quên hệ số $\frac{1}{2}$ trong công lò xo; `d` nhầm quãng đường vật $A$ là $x$ thay vì $2x$.

- **Câu 8 (`a`):** Lấy đạo hàm theo thời gian biểu thức định lý động năng $\frac{dT}{dt} = \frac{d(\sum A)}{dx}v_O$:
  $$40v_O a_O = (120 - 200x)v_O \implies a_O = 3 - 5x\text{ (m/s}^2\text{)}$$
  Tại $x = 0{,}2\text{ m}$ (với $T_0 = 0$):
  $$20v_O^2 = 120(0{,}2) - 100(0{,}04) = 20 \implies v_O = 1{,}00\text{ m/s}$$
  - *Giải phẫu phương án sai:* `b` quên nhân `2` khi lấy đạo hàm $20v_O^2$; `c` tính nhầm $v_O = \sqrt{2}$; `d` kế thừa công sai $140x - 100x^2$ từ `7a`.

- **Câu 9 (`d`):** Tại $x = 0$: $a_O = 3\text{ m/s}^2$, $a_A = 2a_O = 6\text{ m/s}^2$, $\varepsilon = a_O/R = 15\text{ rad/s}^2$, lực đàn hồi kéo sang trái $F_{\text{đh},0} = K\Delta l_0 = 200 \cdot 0{,}1 = 20\text{ N}$.
  - Xét vật $A$ đi xuống: $m_2 g - S = m_2 a_A \implies S = 7(10 - 6) = 28\text{ N}$.
  - Xét con lăn $O$ (giả sử $\vec{F}_{\text{ms}}$ tại $I$ hướng **sang phải**):
    - Chiếu phương ngang sang phải: $S + F_{\text{ms}} - F_{\text{đh},0} = m_1 a_O \implies F_{\text{ms}} = 8(3) + 20 - 28 = +16\text{ N}$ (dương $\implies$ hướng **sang phải**).
    - Kiểm chứng độc lập bằng phương trình mômen quanh tâm $O$ (thuận KĐH):
      $$\begin{aligned}
      (S - F_{\text{ms}})R &= J_O\varepsilon = \frac{1}{2}m_1 R a_O \\
      \implies F_{\text{ms}} &= S - \frac{1}{2}m_1 a_O = 28 - 12 = 16\text{ N}
      \end{aligned}$$
  - Áp lực pháp tuyến $N = m_1 g = 80\text{ N} \implies f_{0,\min} = \dfrac{F_{\text{ms}}}{N} = \dfrac{16}{80} = 0{,}20$.
  - *Giải phẫu phương án sai:* `a` lấy nhầm $a_A = a_O = 3$; `b` gán sai chiều lực ma sát nghỉ hướng sang trái theo cảm tính; `c` cộng nhầm dấu lực lò xo hoặc bỏ quên lực lò xo khi viết phương trình chiếu ngang.

---

#### Chùm 4 (Câu 10 – Câu 12)

- **Câu 10 (`b`):** Phương trình (I) tích phân trực tiếp thành $x - R\varphi = C$ nên là liên kết **holonom** (vi phân khả tích), đồng thời tiếp điểm $I$ có $\delta\vec{r}_I = \vec{0}$ nên là liên kết **lý tưởng**. Phương trình (II) có $\vec{A} = (\sin\theta, -\cos\theta, 0) \implies \vec{A}\cdot(\nabla\times\vec{A}) = -1 \neq 0$, không thỏa điều kiện Frobenius nên là liên kết **không holonom** thực sự.
  - *Giải phẫu phương án sai:* `a` nhầm mọi phương trình chứa vận tốc đều không holonom; `c` nhầm lực ma sát nghỉ khi lăn không trượt là liên kết không lý tưởng; `d` cả hai phương trình đều dừng ($\partial/\partial t = 0$) và giữ (đẳng thức).

- **Câu 11 (`a`):**
  - Đĩa đặc $A$ lăn không trượt: $T_1 = \frac{3}{4}m_1\dot{x}^2$.
  - Thanh đồng chất $AB$ có $x_G = x + \frac{l}{2}\sin\varphi$, $y_G = -\frac{l}{2}\cos\varphi \implies v_G^2 = \dot{x}^2 + \frac{l^2}{4}\dot{\varphi}^2 + l\cos\varphi\,\dot{x}\dot{\varphi}$. Cộng động năng quay quanh khối tâm $\frac{1}{2}\left(\frac{1}{12}m_2 l^2\right)\dot{\varphi}^2$:
    $$T_2 = \frac{1}{2}m_2\dot{x}^2 + \frac{1}{6}m_2 l^2\dot{\varphi}^2 + \frac{1}{2}m_2 l\cos\varphi\,\dot{x}\dot{\varphi}$$
  - Tổng hợp: $T = \left(\frac{3}{4}m_1 + \frac{1}{2}m_2\right)\dot{x}^2 + \frac{1}{6}m_2 l^2\dot{\varphi}^2 + \frac{1}{2}m_2 l\cos\varphi\,\dot{x}\dot{\varphi}$.
  - *Giải phẫu phương án sai:* `b` bỏ quên động năng quay của đĩa; `c` quên thành phần $\frac{1}{2}m_2(\frac{l}{2}\dot{\varphi})^2$ trong $v_G^2$; `d` sai dấu số hạng chéo.

- **Câu 12 (`e`):** Lực suy rộng trong giai đoạn $\dot{x} > 0$:
  - $Q_x = -kx - \dfrac{M_r}{R}$ (do góc quay đĩa $\theta = x/R \implies \delta A(M_r) = -M_r\frac{\delta x}{R}$).
  - $Q_\varphi = -\dfrac{1}{2}m_2 g l\sin\varphi$.
  Áp dụng phương trình Lagrange II cho $T$ ở Câu 11 (tính chính xác và đã xác minh bằng SymPy):
  $$\begin{cases}
  \left(\dfrac{3}{2}m_1 + m_2\right)\ddot{x} + \dfrac{1}{2}m_2 l\cos\varphi\,\ddot{\varphi} - \dfrac{1}{2}m_2 l\sin\varphi\,\dot{\varphi}^2 + kx + \dfrac{M_r}{R} = 0 \\[6pt]
  \dfrac{1}{2}m_2 l\cos\varphi\,\ddot{x} + \dfrac{1}{3}m_2 l^2\ddot{\varphi} + \dfrac{1}{2}m_2 g l\sin\varphi = 0
  \end{cases}$$
  - *Giải phẫu từng phương án sai:*
    - `a`: PT1 sai dấu $+\frac{1}{2}m_2 l\sin\varphi\,\dot{\varphi}^2$ (vi phạm đạo hàm $\frac{d}{dt}\cos\varphi = -\sin\varphi\,\dot{\varphi}$).
    - `b`: PT2 còn dư số hạng $-\frac{1}{2}m_2 l\sin\varphi\,\dot{x}\dot{\varphi}$ (vi phạm Bất biến 2: phải triệt tiêu đồng nhất).
    - `c`: PT1 sai dấu $-\frac{M_r}{R}$ khi chuyển từ vế phải sang vế trái (vi phạm Bất biến 3).
    - `d`: PT1 viết $\left(\frac{3}{4}m_1 + m_2\right)\ddot{x}$ do quên nhân `2` khi đạo hàm $\frac{\partial}{\partial\dot{x}}\left(\frac{3}{4}m_1\dot{x}^2\right) = \frac{3}{2}m_1\dot{x}$.
  - Vì cả `a, b, c, d` đều sai, đáp án chính xác là **`e`**.

</details>

---

### 20.3. Phiếu Tự Kiểm Toán Năng Lực Thực Tế Trước Giờ Thi

Sau khi chấm điểm Đề Thi Thử Số 1 (thang điểm `10`, mỗi câu đúng `10/12 ≈ 0,83` điểm), đối chiếu kết quả theo đúng **4 khối năng lực** dưới đây. Không cộng dồn cảm tính: một khối yếu kéo tụt toàn bộ chùm `3–4` câu liên hoàn trong đề thi thật.

| Khối năng lực | Câu tương ứng trong Đề Thử | Ngưỡng đạt an toàn | Ngưỡng rủi ro thấp điểm / rớt môn | Hành động vá khẩn cấp trong 24 giờ cuối (khi chưa đạt ngưỡng) |
| :--- | :---: | :---: | :---: | :--- |
| **Khối 1: Động học Ch.9–10** (Hợp chuyển động, Coriolis, Song phẳng, Willis) | Câu 1 – 2 | Đúng `2/2` (hoặc `>= 1/2` và không sai dấu tích có hướng) | `0/2` — sai chiều $\vec{\omega}_e \times \vec{v}_r$ hoặc quên hệ số `2` | Ôn lại ngay [Chặng 1 — Ngày 4 & 5](/on-thi/chang-1-tinh-hoc), làm lại Đề `1721` C1–2, `1722` C1–2 và `1821` C1–4 trong [Ngân hàng đề thi thật](/on-thi/de-thi-that-hcmut). |
| **Khối 2: Đặc trưng khối lượng & D'Alembert (Ch.11–13)** | Câu 3 – 5 | Đúng `3/3` (tính đúng $x_C, J_O$, làm chủ hệ trục đảo và dấu $\vec{M}_O^{\text{qt}}$) | `<= 1/3` — nhầm $J_C$ với $J_O$, nhầm vành mỏng với đĩa đặc, sai quy tắc bàn tay phải | Rà soát Mục 1 & Mục 3 trên Mặt 1 A4 (Ngày 19), giải lại không nhìn đáp án Đề `1721` C3–5, `1722` C3–5 và `0001/2015` C2–5. |
| **Khối 3: Định lý Động năng 1 BTD & Tách vật (Ch.12.3)** | Câu 6 – 9 | Đúng `>= 3/4` (bắt buộc đúng Câu 6, 7, 8 — không sai $\Delta l_0 \neq 0$) | `<= 2/4` — sai tỷ số vận tốc $v_D/v_O$ hoặc công lò xo gây hiệu ứng domino sai cả chùm | Học lại [Chặng 3](/on-thi/chang-3-dong-luc-hoc), đặc biệt phần công lò xo $\Delta l_0 \neq 0$ và tách vật tìm $S, F_{\text{ms}}$; làm lại Đề `1821` C5–8 và `0001/2015` C6–9. |
| **Khối 4: Di chuyển khả dĩ & Lagrange loại II (Ch.14–15)** | Câu 10 – 12 | Đúng `3/3` (nắm chắc holonom, $T$ hệ 2 BTD và tự kiểm toán 3 bất biến Lagrange II) | `<= 1/3` — sai $T$ hoặc bỏ sót lỗi cấu trúc ở hệ 2 PTVP | Đọc lại Ngày 16–18 trong trang này, tự viết tay từ đầu hệ 2 PT Lagrange II cho Đề `1821` C9–12, `1721` C10–12 và `0002/2016` C7–10 rồi kiểm tra bằng 3 bất biến ở Mục 18.2. |

**Đánh giá tổng điểm thực tế trên Đề Thi Thử Số 1 (12 câu / 90 phút):**
- **Từ `10/12` đến `12/12` (`8,3 – 10,0` điểm) trong thời gian `<= 80` phút:** Đạt chuẩn an toàn cho nhóm điểm A/A+. Trong 24 giờ cuối chỉ cần giữ nhịp bằng 1 đề thi thật đầy đủ tại [Ngân Hàng Đề Thi Thật HCMUT AS1003](/on-thi/de-thi-that-hcmut) và in sạch bản A4 Ngày 19.
- **Từ `7/12` đến `9/12` (`5,8 – 7,5` điểm):** Đạt ngưỡng qua môn nhưng chưa chắc chắn trước biến thể đề có nhiều phương án `e` đúng. Cần xử lý triệt để đúng khối bị mất điểm theo bảng trên trước khi bước vào phòng thi.
- **Dưới `7/12` (`< 5,8` điểm) hoặc không kịp làm xong trong `90` phút:** Nguy cơ rớt hoặc điểm thấp rất cao. Bắt buộc ưu tiên cố định `100%` điểm ở **Khối 3 (Động năng 1 BTD)** và **Khối 4 (Lagrange II)** trong 24 giờ cuối (chiếm hơn `60%` điểm đề thi thật), đồng thời luyện tốc độ kiểm toán bằng Mặt 1–2 A4 để tránh sa lầy quá `15` phút vào một câu đơn lẻ.
