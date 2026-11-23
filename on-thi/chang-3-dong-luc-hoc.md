---
title: "Chặng 3 (Ngày 11–15): Mỏ Vàng 4 Câu Định Lý Động Năng (AS1003)"
layout: doc
---

# Chặng 3 (Ngày 11 – Ngày 15): Chương 12.2–12.3 — Làm Chủ Tuyệt Đối "Mỏ Vàng 4 Câu Liên Hoàn" Định Lý Động Năng

Nếu bạn là người **tay ngang (mất gốc hoàn toàn)** và mục tiêu là vượt qua cột mốc `8,0+` trong đề thi Cuối kỳ **Cơ Lý Thuyết (`AS1003` — ĐH Bách Khoa TPHCM)**, thì **Chặng 3** chính là phần sinh lời cao nhất toàn khóa. Trong hầu hết các mã đề thi thật (`1821`, `1721`, `1722`, `0001/2016`, `0002/2016`, `0001/2015`, `0002/2015`, `2014`, `2013`, `2011`...), đề luôn có một bài toán cơ hệ **1 bậc tự do** đi kèm đúng **4 câu trắc nghiệm liên hoàn**, chiếm tới **33%–40% tổng số điểm cả bài thi**.

Điều tuyệt vời là cấu trúc của chùm 4 câu này gần như lặp lại y hệt qua mọi năm:
- **Câu 1 của chùm:** Tính Động năng $T(\omega)$ hoặc $T(\dot{\theta})$ của cơ hệ.
- **Câu 2 của chùm:** Tính Tổng công ngoại lực $\sum A$ khi hệ dịch chuyển từ góc đầu $\theta_0$ đến $\theta$ (hoặc công suất $\sum N$).
- **Câu 3 của chùm:** Đạo hàm hai vế $\dfrac{dT}{dt} = \sum N$ (dạng vi phân) để rút thẳng gia tốc góc $\varepsilon(\theta)$ hoặc gia tốc dài $a$.
- **Câu 4 của chùm:** Thế vào $T - T_0 = \sum A$ (dạng hữu hạn) để tìm vận tốc góc $\omega$ hoặc vận tốc điểm $v_G$, $V_B$ tại một vị trí cho trước.

::: tip Bản đồ tổng quan Chặng 3 (Ngày 11 – Ngày 15 | Định lý Động năng Ch.12.2–12.3)
| Ngày | Chủ đề trọng tâm | Mục tiêu làm được ngay sau buổi học | Đối chiếu giáo trình |
| :--- | :--- | :--- | :--- |
| **Ngày 11** | Công thức vàng tính Động năng $T$ | Không bao giờ sót thành phần $J_O$ hay $\frac{3}{4}mv_C^2$; giải gọn Đề `1821` Câu 5 & Đề `1721`/`1722` Câu 9 | [Chương 3 (Mục 3.5)](/dong-luc-hoc/chuong-3) · [BT C.2](/bai-tap/dong-luc-hoc/chuong-2) |
| **Ngày 12** | Bí kíp tính Tổng công $\sum A$ trong 60 giây | Dùng mẹo thế biên $\theta = \theta_0 \implies \sum A = 0$ triệt bẫy dấu lò xo, trọng lực trên Đề `1721`, `1722`, `2016` | [Chương 3 (Mục 3.5)](/dong-luc-hoc/chuong-3) · [BT C.2](/bai-tap/dong-luc-hoc/chuong-2) |
| **Ngày 13** | Đạo hàm 2 vế tìm $\varepsilon, a$ & tính $v$ | Giải trọn bộ 4 câu liên hoàn Đề `1821` (5–8), `0001/2016` (3–6) và bắt gọn bẫy `6e` ở Đề `0002/2016` | [Chương 3 (Mục 3.5)](/dong-luc-hoc/chuong-3) · [BT C.2](/bai-tap/dong-luc-hoc/chuong-2) |
| **Ngày 14** | Hệ dây kéo ròng rọc, con lăn kép & ma sát | Làm chủ tâm tức thời $I$ cho con lăn kép quấn tầng trong, dây chùng ở Đề `0001`/`0002` (2015), `2014`, `2011` | [Chương 3](/dong-luc-hoc/chuong-3) · [Đề thi thật HCMUT](/on-thi/de-thi-that-hcmut) |
| **Ngày 15** | Bộ 12 câu thi thật bấm giờ (25 phút) | Hoàn thành 3 chùm × 4 câu đề thi thật dưới áp lực thời gian + Checklist 20 giây chống bẫy đáp án `e` | [Ngân hàng đề thi thật](/on-thi/de-thi-that-hcmut) |
:::

> **Nhịp học đề xuất (90–120 phút/ngày):** Đọc kỹ phần quy tắc nhận diện (20 phút) $\rightarrow$ Tự đặt bút tính từng bước các ví dụ đề thi thật (45 phút) $\rightarrow$ Tự làm lại bài luyện không nhìn lời giải và kiểm tra lại bằng mẹo biên $\theta = \theta_0$ (30 phút).

---

## Ngày 11: Công Thức Vàng Tính Động Năng $T$ Của Cơ Hệ (Không Bao Giờ Sót Thành Phần)

### 1. Kiến thức nền cho người mất gốc: Động năng chỉ có 3 khuôn duy nhất

Động năng $T$ của một vật rắn luôn **không âm** ($T \ge 0$) và là **đại lượng vô hướng** (không cần quan tâm dấu $+$ hay $-$ của chiều quay vì luôn bình phương $v^2, \omega^2$). Động năng toàn cơ hệ bằng tổng động năng của từng vật rắn cộng lại:

$$T_{\text{hệ}} = T_1 + T_2 + \dots + T_n$$

Mỗi vật rắn trong cơ hệ phẳng chỉ rơi vào **đúng 1 trong 3 chuyển động** dưới đây:

| Dạng chuyển động của vật | Cách nhận diện trên hình | Công thức tính $T$ chuẩn | Mẹo chống sai cho người mất gốc |
| :--- | :--- | :--- | :--- |
| **1. Tịnh tiến** | Vật trượt thẳng (con trượt, tải treo dây) không quay | $T = \dfrac{1}{2} m v_C^2$ | Mọi điểm trên vật có cùng vận tốc $v = v_C$. |
| **2. Quay quanh trục cố định $O$** | Thanh hoặc đĩa gắn vào **chốt bản lề cố định $O$** | $T = \dfrac{1}{2} J_O \omega^2$ | **Cấm lấy $J_G$** nếu $O \neq G$! Bắt buộc dời trục $J_O = J_G + m \cdot OG^2$. |
| **3. Chuyển động song phẳng** | Thanh nối 2 khớp động, hoặc đĩa/trụ đang **lăn trên mặt phẳng** | $\begin{aligned} T &= \dfrac{1}{2}m v_C^2 + \dfrac{1}{2}J_C \omega^2 \\ &= \dfrac{1}{2} J_I \omega^2 \end{aligned}$ | Phải có **đủ 2 số hạng** (tịnh tiến của khối tâm $C$ + quay quanh $C$), hoặc lấy $J_I$ quanh tâm tức thời $I$. |

::: warning Bốn công thức "tủ" giúp tính xong $T$ một vật trong 3 giây
1. **Thanh mảnh đồng chất dài $L$, khối lượng $m$, quay quanh một đầu $O$:**
   Vì $J_G = \frac{1}{12}mL^2$ và $OG = \frac{L}{2}$, theo Huygens–Steiner: $J_O = \frac{1}{12}mL^2 + m\left(\frac{L}{2}\right)^2 = \frac{1}{3}mL^2$. Suy ra:
   $$T_{\text{thanh quay đầu}} = \frac{1}{2}\left(\frac{1}{3}mL^2\right)\omega^2 = \frac{1}{6}mL^2\omega^2$$
2. **Thanh mảnh đồng chất ($m, L$) trượt giữa hai tường/rãnh vuông góc:**
   Khoảng cách từ tâm vận tốc tức thời $I$ tới trung điểm $G$ luôn không đổi bằng $IG = \frac{L}{2}$ (trung tuyến ứng với cạnh huyền tam giác vuông). Do đó $J_I = \frac{1}{12}mL^2 + m\left(\frac{L}{2}\right)^2 = \frac{1}{3}mL^2$, suy ra luôn:
   $$T_{\text{thanh trượt 2 tường vuông}} = \frac{1}{6}mL^2\omega^2$$
3. **Đĩa tròn đặc / Trụ tròn đặc ($m, R$, $J_C = \frac{1}{2}mR^2$) lăn không trượt trên nền đứng yên:**
   Liên hệ lăn không trượt là $v_C = \omega R \implies \omega = \frac{v_C}{R}$. Thay vào công thức song phẳng:
   $$T_{\text{đĩa đặc lăn}} = \frac{1}{2}m v_C^2 + \frac{1}{2}\left(\frac{1}{2}m R^2\right)\left(\frac{v_C}{R}\right)^2 = \frac{3}{4}m v_C^2 = \frac{3}{4}m R^2 \omega^2$$
4. **Ống trụ mỏng / Vành tròn mỏng ($m, R$, $J_C = mR^2$) lăn không trượt trên nền đứng yên:**
   $$T_{\text{ống mỏng lăn}} = \frac{1}{2}m v_C^2 + \frac{1}{2}(m R^2)\left(\frac{v_C}{R}\right)^2 = m v_C^2 = m R^2 \omega^2$$
:::

<div class="figure-container">
<svg viewBox="0 0 760 275" style="width: 100%; max-width: 720px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Sơ đồ cơ hệ Đề 1821 Bài 2 và Đề 1721/1722 Bài 3">
  <rect x="8" y="8" width="362" height="258" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="390" y="8" width="362" height="258" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="189" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0369a1">Đề 1821 — Bài 2 (Câu 5–8)</text>
  <text x="571" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f766e">Đề 1721 / 1722 — Bài 3 (Câu 6–9)</text>

  <!-- Left panel: De 1821 Bai 2 -->
  <line x1="95" y1="54" x2="145" y2="54" stroke="#475569" stroke-width="2" />
  <line x1="103" y1="54" x2="111" y2="46" stroke="#64748b" stroke-width="1.2" />
  <line x1="115" y1="54" x2="123" y2="46" stroke="#64748b" stroke-width="1.2" />
  <line x1="127" y1="54" x2="135" y2="46" stroke="#64748b" stroke-width="1.2" />
  <!-- Axes Ox right, Oy down -->
  <line x1="120" y1="68" x2="270" y2="68" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,3" />
  <polygon points="268,64 276,68 268,72" fill="#64748b" />
  <text x="282" y="72" font-family="sans-serif" font-size="12" font-weight="700" fill="#334155">x</text>
  <line x1="120" y1="68" x2="120" y2="212" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,3" />
  <polygon points="116,210 120,218 124,210" fill="#64748b" />
  <text x="106" y="216" font-family="sans-serif" font-size="12" font-weight="700" fill="#334155">y</text>
  <!-- Rod O-A-G at ~40 deg -->
  <line x1="120" y1="68" x2="180" y2="126" stroke="#0f172a" stroke-width="3.5" />
  <!-- Heavy body around G -->
  <ellipse cx="236" cy="180" rx="44" ry="24" transform="rotate(44 236 180)" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
  <line x1="180" y1="126" x2="236" y2="180" stroke="#0f172a" stroke-width="1.6" stroke-dasharray="3,3" />
  <!-- Hinge O, points A, G -->
  <polygon points="113,54 127,54 120,68" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.5" />
  <circle cx="120" cy="68" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
  <circle cx="180" cy="126" r="3.5" fill="#0f172a" />
  <circle cx="236" cy="180" r="4" fill="#dc2626" />
  <text x="104" y="72" text-anchor="end" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a">O</text>
  <text x="166" y="136" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">A</text>
  <text x="248" y="182" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">G</text>
  <text x="146" y="108" text-anchor="end" font-family="sans-serif" font-size="11" fill="#0369a1">L</text>
  <text x="224" y="140" font-family="sans-serif" font-size="11" fill="#0369a1">L</text>
  <!-- Angle phi* arc -->
  <path d="M 158 68 A 38 38 0 0 1 148 95" fill="none" stroke="#d97706" stroke-width="1.8" />
  <text x="165" y="85" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309">φ*</text>
  <!-- g vector -->
  <line x1="72" y1="120" x2="72" y2="174" stroke="#dc2626" stroke-width="2" />
  <polygon points="68,172 72,180 76,172" fill="#dc2626" />
  <text x="60" y="152" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">g</text>
  <text x="189" y="254" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">OA = AG = L; m1 = m0, m2 = 2m0</text>

  <!-- Right panel: De 1721/1722 Bai 3 -->
  <!-- Ground horizontal line and wall -->
  <line x1="428" y1="120" x2="428" y2="235" stroke="#475569" stroke-width="2.5" />
  <line x1="414" y1="230" x2="730" y2="230" stroke="#475569" stroke-width="2.5" />
  <!-- Hatching on ground -->
  <line x1="435" y1="230" x2="427" y2="238" stroke="#64748b" stroke-width="1.2" />
  <line x1="475" y1="230" x2="467" y2="238" stroke="#64748b" stroke-width="1.2" />
  <line x1="515" y1="230" x2="507" y2="238" stroke="#64748b" stroke-width="1.2" />
  <line x1="555" y1="230" x2="547" y2="238" stroke="#64748b" stroke-width="1.2" />
  <line x1="595" y1="230" x2="587" y2="238" stroke="#64748b" stroke-width="1.2" />
  <line x1="635" y1="230" x2="627" y2="238" stroke="#64748b" stroke-width="1.2" />
  <line x1="675" y1="230" x2="667" y2="238" stroke="#64748b" stroke-width="1.2" />
  <line x1="715" y1="230" x2="707" y2="238" stroke="#64748b" stroke-width="1.2" />
  <!-- Disk C: center (654, 185), R = 45 -->
  <circle cx="654" cy="185" r="45" fill="#ccfbf1" stroke="#0d9488" stroke-width="2.2" />
  <!-- Horizontal axis from A(444, 185) to C(654, 185) with spring -->
  <line x1="444" y1="185" x2="504" y2="185" stroke="#64748b" stroke-width="1.5" />
  <polyline points="504,185 512,177 522,193 532,177 542,193 552,177 562,193 570,185" fill="none" stroke="#d97706" stroke-width="2" />
  <line x1="570" y1="185" x2="654" y2="185" stroke="#64748b" stroke-width="1.5" />
  <text x="537" y="170" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309">K</text>
  <!-- Rods AB and BC: A(444,185), B(549,88), C(654,185) -->
  <line x1="444" y1="185" x2="549" y2="88" stroke="#0f172a" stroke-width="3.2" />
  <line x1="549" y1="88" x2="654" y2="185" stroke="#0f172a" stroke-width="3.2" />
  <!-- Joints A, B, C, midpoint G -->
  <circle cx="444" cy="185" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
  <circle cx="549" cy="88" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
  <circle cx="654" cy="185" r="4.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.8" />
  <circle cx="601.5" cy="136.5" r="3.5" fill="#dc2626" />
  <!-- Labels -->
  <text x="438" y="206" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">A</text>
  <text x="549" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">B</text>
  <text x="668" y="182" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">C</text>
  <text x="620" y="128" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">G</text>
  <text x="478" y="120" font-family="sans-serif" font-size="11" fill="#334155">l</text>
  <!-- Angle theta arc at A -->
  <path d="M 484 185 A 40 40 0 0 0 473 158" fill="none" stroke="#0284c7" stroke-width="1.8" />
  <text x="492" y="168" font-family="sans-serif" font-size="12" font-weight="700" fill="#0284c7">θ</text>
  <!-- Positive direction arrow (+) above disk -->
  <path d="M 678 122 A 42 42 0 0 0 634 118" fill="none" stroke="#0f766e" stroke-width="2" />
  <polygon points="637,112 628,119 638,124" fill="#0f766e" />
  <text x="668" y="106" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f766e">(+)</text>
  <!-- Radius R line -->
  <line x1="654" y1="185" x2="686" y2="216" stroke="#0d9488" stroke-width="1.4" />
  <text x="678" y="202" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f766e">R</text>
  <text x="571" y="254" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">Đĩa C lăn không trượt; AB = BC = l</text>
</svg>
<div class="figure-caption">

Hình 11-1: Hai mô hình kinh điển tính động năng trong đề thi Cuối kỳ AS1003 (Đề 1821 và Đề 1721/1722)

</div>
</div>

### 2. Giải chi tiết 2 ví dụ thật từ đề thi HCMUT

::: info Ví dụ thật 1 — Đề 1821 Câu 5 (HK II/2018-2019 — Đáp án chính thức: 5a)
Hệ thống con lắc bao gồm thanh thẳng $OA$ khối lượng $m_1 = m_0$, được hàn cứng với vật nặng có khối tâm $G$ (các điểm $O, A, G$ thẳng hàng và $OA = AG = L$). Vật nặng có khối lượng $m_2 = 2m_0$ và bán kính quán tính đối với $G$ là $\rho$. Cho $m_0 = 2\text{ kg}$, $L = 0{,}2\text{ m}$, $\rho = 0{,}3\text{ m}$, vận tốc góc hệ là $\omega$. Xác định động năng hệ theo $\omega$:
- **a.** $T = \dfrac{77}{150}\omega^2$ $\qquad$ **b.** $T = \dfrac{53}{150}\omega^2$ $\qquad$ **c.** $T = \dfrac{79}{300}\omega^2$ $\qquad$ **d.** $T = \dfrac{127}{300}\omega^2$ $\qquad$ **e.** Các đáp án còn lại sai
:::

**Lời giải từng bước:**
1. Toàn bộ cơ hệ (thanh $OA$ + vật nặng) hàn cứng thành **một vật rắn duy nhất** quay quanh trục cố định $O$, nên dùng công thức:
   $$T = \frac{1}{2} J_O \omega^2$$
2. Tính $J_O$ cho từng phần:
   - Thanh mảnh $OA$ quay quanh đầu $O$:
     $$J_{O,\text{thanh}} = \frac{1}{3}m_0 L^2 = \frac{1}{3}(2)(0{,}2)^2 = \frac{2}{75}\text{ kg}\cdot\text{m}^2$$
   - Vật nặng có mômen quán tính quanh khối tâm $G$ là $J_G = m_2\rho^2 = 2m_0\rho^2$. Khoảng cách từ trục quay $O$ tới $G$ là $OG = OA + AG = 2L$. Áp dụng **Huygens–Steiner**:
     $$\begin{aligned} J_{O,\text{vật}} &= J_G + m_2 \cdot OG^2 = 2m_0\left(\rho^2 + 4L^2\right) \\ &= 4\left(0{,}3^2 + 4 \cdot 0{,}2^2\right) = 4(0{,}09 + 0{,}16) = 1\text{ kg}\cdot\text{m}^2 \end{aligned}$$
3. Cộng mômen quán tính quanh $O$:
   $$J_O = \frac{2}{75} + 1 = \frac{77}{75}\text{ kg}\cdot\text{m}^2$$
4. Suy ra động năng của cơ hệ:
   $$T = \frac{1}{2} J_O \omega^2 = \frac{1}{2}\cdot\frac{77}{75}\omega^2 = \frac{77}{150}\omega^2 \implies \textbf{Chọn 5a}$$

::: warning Nhận diện bẫy ở Câu 5 Đề 1821
- Nếu bạn quên $m_2 \cdot OG^2$ hoặc thay nhầm $OG = L$ (thay vì $2L$), hoặc lấy nhầm $J_O$ thanh là $\frac{1}{12}m_0 L^2$, kết quả sẽ rơi ngay vào các phương án nhiễu `b`, `c`, `d`.
:::

---

::: info Ví dụ thật 2 — Đề 1721 Câu 9 (9d) & Đề 1722 Câu 9 (9d)
Cho cơ hệ như Hình 11-1 (bên phải): thanh $AB$ và $BC$ có cùng khối lượng $m_1 = 5\text{ kg}$ và cùng chiều dài $l$. Đĩa tròn đặc $C$ có bán kính $R = 5\text{ cm}$, khối lượng $m_2 = 10\text{ kg}$ và lăn không trượt trên mặt phẳng ngang qua $A$. Biết $\omega = \dot{\theta}$ là vận tốc góc của thanh $AB$ tại vị trí $30^\circ < \theta < 60^\circ$. Tính động năng $T$ của hệ theo $\omega, \theta$ với:
- **Đề `1721` ($l = 15\text{ cm} = 0{,}15\text{ m}$):** Chứng minh $T = 0{,}1125\left(\dfrac{23}{6} - \dfrac{7}{2}\cos 2\theta\right)\omega^2\text{ (J)}$ (**Đáp án `9d`**).
- **Đề `1722` ($l = 20\text{ cm} = 0{,}20\text{ m}$):** Chứng minh $T = 0{,}2\left(\dfrac{23}{6} - \dfrac{7}{2}\cos 2\theta\right)\omega^2\text{ (J)}$ (**Đáp án `9d`**).
:::

**Chứng minh chi tiết từng thành phần ($T = T_{AB} + T_{BC} + T_C$):**

1. **Động năng thanh $AB$ (quay quanh bản lề cố định $A$):**
   $$T_{AB} = \frac{1}{6}m_1 l^2 \omega^2$$

2. **Động năng thanh $BC$ (chuyển động song phẳng):**
   - Do tam giác $ABC$ cân ($AB = BC = l$), góc nghiêng của $BC$ là $-\theta$ nên vận tốc góc của $BC$ có độ lớn $\lvert\omega_{BC}\rvert = \omega$ (chiều $\bar{\omega}_1 = -\omega$).
   - Chọn gốc tọa độ tại $A$: khối tâm $G$ (trung điểm $BC$) có tọa độ:
     $$x_G = l\cos\theta + \frac{l}{2}\cos\theta = \frac{3}{2}l\cos\theta, \qquad y_G = \frac{1}{2}l\sin\theta$$
   - Đạo hàm theo $t$ (với $\dot{\theta} = \omega$):
     $$\dot{x}_G = -\frac{3}{2}l\sin\theta \cdot \omega, \qquad \dot{y}_G = \frac{1}{2}l\cos\theta \cdot \omega$$
   - Bình phương vận tốc khối tâm $G$:
     $$\begin{aligned} v_G^2 &= \dot{x}_G^2 + \dot{y}_G^2 = l^2\omega^2\left(\frac{9}{4}\sin^2\theta + \frac{1}{4}\cos^2\theta\right) \\ &= l^2\omega^2\left(\frac{9}{8}(1 - \cos 2\theta) + \frac{1}{8}(1 + \cos 2\theta)\right) \\ &= l^2\omega^2\left(\frac{5}{4} - \cos 2\theta\right) \end{aligned}$$
   - Áp dụng công thức song phẳng cho thanh $BC$ ($J_G = \frac{1}{12}m_1 l^2$):
     $$\begin{aligned} T_{BC} &= \frac{1}{2}m_1 v_G^2 + \frac{1}{2}\left(\frac{1}{12}m_1 l^2\right)\omega^2 \\ &= m_1 l^2 \omega^2\left(\frac{5}{8} - \frac{1}{2}\cos 2\theta + \frac{1}{24}\right) \\ &= m_1 l^2 \omega^2\left(\frac{2}{3} - \frac{1}{2}\cos 2\theta\right) \end{aligned}$$

3. **Động năng đĩa đặc $C$ (lăn không trượt trên mặt phẳng ngang):**
   - Tọa độ tâm $C$: $x_C = 2l\cos\theta \implies \lvert v_C\rvert = \lvert\dot{x}_C\rvert = 2l\sin\theta \cdot \omega$.
   - Dùng công thức tủ $\frac{3}{4}$ cho đĩa đặc lăn không trượt ($m_2 = 10 = 2m_1$):
     $$\begin{aligned} T_C &= \frac{3}{4}m_2 v_C^2 = \frac{3}{4}m_2\left(4l^2\sin^2\theta \cdot \omega^2\right) \\ &= 3 m_2 l^2 \left(\frac{1 - \cos 2\theta}{2}\right)\omega^2 = 3 m_1 l^2 (1 - \cos 2\theta)\omega^2 \end{aligned}$$

4. **Tổng động năng toàn hệ (thay $m_1 = 5\text{ kg}$):**
   $$\begin{aligned} T &= T_{AB} + T_{BC} + T_C \\ &= m_1 l^2 \omega^2 \left[\left(\frac{1}{6} + \frac{2}{3} + 3\right) - \left(\frac{1}{2} + 3\right)\cos 2\theta\right] \\ &= 5 l^2 \left(\frac{23}{6} - \frac{7}{2}\cos 2\theta\right)\omega^2 \end{aligned}$$
   - Với **Đề `1721`** ($l = 0{,}15\text{ m}$): $5 \times (0{,}15)^2 = 0{,}1125 \implies T = 0{,}1125\left(\frac{23}{6} - \frac{7}{2}\cos 2\theta\right)\omega^2$ (**chọn `9d`**).
   - Với **Đề `1722`** ($l = 0{,}20\text{ m}$): $5 \times (0{,}20)^2 = 0{,}2 \implies T = 0{,}2\left(\frac{23}{6} - \frac{7}{2}\cos 2\theta\right)\omega^2$ (**chọn `9d`**).

**Tự luyện nhanh Ngày 11 (Bấm máy trong 2 phút):**
Một vành tròn mỏng đồng chất khối lượng $m = 4\text{ kg}$, bán kính $R = 0{,}25\text{ m}$ lăn không trượt trên mặt phẳng ngang; tâm vành gắn thanh mảnh đồng chất $AB$ dài $L = 0{,}4\text{ m}$, khối lượng $m_1 = 3\text{ kg}$ đang trượt tịnh tiến thẳng theo vành. Khi tâm vành có vận tốc $v = 2\text{ m/s}$, tính tổng động năng của hệ.

::: details Nhấn để xem đáp án và lời giải
- Vành tròn mỏng lăn không trượt: $T_{\text{vành}} = m v^2 = 4 \times 2^2 = 16\text{ J}$ (chú ý là $1 \cdot m v^2$, không phải $\frac{3}{4}mv^2$!).
- Thanh trượt tịnh tiến cùng vận tốc $v$: $T_{\text{thanh}} = \frac{1}{2}m_1 v^2 = 0{,}5 \times 3 \times 2^2 = 6\text{ J}$.
- Tổng động năng: $T = 16 + 6 = 22\text{ J}$.
:::

---

## Ngày 12: Bí Kíp Tính Tổng Công $\sum A$ Trong 60 Giây & Không Bị Bẫy Dấu Lò Xo / Trọng Lực

### 1. Bảng công của các lực và danh sách lực có công $= 0$

Khi cơ hệ chuyển động từ vị trí đầu $(0)$ sang vị trí $(1)$, tổng công của mọi lực bằng tổng công của từng lực hoạt động sinh công:

| Loại lực tác dụng | Công thức tính công $A_{0 \to 1}$ | Quy tắc dấu cho người mất gốc |
| :--- | :--- | :--- |
| **Trọng lực** $\vec{P} = m\vec{g}$ | $A_P = \pm P \cdot \lvert\Delta h_G\rvert$ | Nếu lấy chiều dương $y$ hướng **LÊN**: $A_P = mg(y_0 - y)$;<br>Nếu lấy chiều dương $y$ hướng **XUỐNG**: $A_P = mg(y - y_0)$.<br>**Nhớ miệng:** Khối tâm đi **xuống** $\to A_P > 0$; đi **lên** $\to A_P < 0$. |
| **Lực đàn hồi lò xo** (độ cứng $K$) | $A_{\text{đh}} = \dfrac{1}{2}K\left(\Delta l_0^2 - \Delta l^2\right)$ | **LUÔN LÀ ĐẦU TRỪ CUỐI**, bất kể lò xo bị nén hay bị dãn!<br>$\Delta l_0, \Delta l$ là **độ biến dạng** so với chiều dài tự nhiên. |
| **Ngẫu lực / Mômen $M$ không đổi** | $A_M = \pm M \lvert\Delta\varphi\rvert$ | $(+)$ nếu góc quay $\Delta\varphi$ cùng chiều mũi tên $M$; $(-)$ nếu ngược chiều. |
| **Lực kéo $F$ không đổi** | $A_F = \pm F \cdot s_{\text{điểm đặt}}$ | Chiếu độ dời điểm đặt lên phương của lực $\vec{F}$. |
| **Lực ma sát trượt động** | $A_{\text{ms}} = -F_{\text{ms}} \cdot s = -f_{\text{đ}} N \cdot s$ | **LUÔN ÂM**, vì luôn ngược chiều chuyển động tương đối. |
| **Lực có công $= 0$** | $A = 0$ | Phản lực tại bản lề cố định, mặt tựa nhẵn, **ma sát nghỉ khi lăn không trượt**, **nội lực căng dây / khớp nối**. |

::: tip Tuyệt chiêu tự kiểm 3 giây: Thế $\theta = \theta_0 \implies \sum A = 0$
Khi đề bài hỏi biểu thức **tổng công $\sum A(\theta)$ khi cơ hệ di chuyển từ vị trí ban đầu $\theta = \theta_0$ đến vị trí góc $\theta$**, thì ngay tại vị trí xuất phát $\theta = \theta_0$, quãng đường đi được bằng $0$ nên:

$$\sum A(\theta_0) \equiv 0 \quad \text{(BẮT BUỘC PHẢI ĐÚNG)}$$

Chỉ cần bấm máy tính thay $\theta = \theta_0$ vào từng đáp án `a, b, c, d`, phương án nào ra khác $0$ là **loại ngay lập tức trong 3 giây**!

- **Kiểm thử trên Đề `0001/2016` Câu 4 (ban đầu $\theta_0 = 30^\circ$):**
  Thế $\theta = 30^\circ$ ($\sin 30^\circ = 0{,}5$) vào phương án `4b`:
  $$\begin{aligned} \sum A(30^\circ) &= 6{,}19 + 19{,}62\sin 30^\circ - 64\sin^2 30^\circ \\ &= 6{,}19 + 9{,}81 - 16 = 0 \quad (\text{Khớp chuẩn!}) \end{aligned}$$
  Trong khi đó `4a` cho $1{,}14 + 9{,}81 - 16 = -5{,}05 \neq 0$, `4c` cho $-24{,}67 \neq 0$, `4d` cho $-19{,}62 \neq 0 \implies$ **bắt gọn `4b` gần như tức thì!**
:::

### 2. Giải chi tiết 4 bài tính công từ đề thi thật HCMUT

::: info Bài mẫu 12-1 — Đề 1721 Câu 8 (8b) & Đề 1722 Câu 8 (8c)
Trong cơ hệ 2 thanh $AB = BC = l$ (mỗi thanh khối lượng $m_1 = 5\text{ kg}$) + đĩa tròn đặc lăn không trượt $C$ ($m_2 = 10\text{ kg}$) ở Hình 11-1, lò xo nối từ điểm cố định $A$ đến tâm $C$ có độ cứng $K = 500\text{ N/m}$ và **không biến dạng tại vị trí $\theta = 60^\circ$**. Lấy $g = 10\text{ m/s}^2$. Tính tổng công của các ngoại lực khi thanh $AB$ quay ngược chiều kim đồng hồ từ $\theta_0 = 30^\circ$ đến vị trí có $\theta < 60^\circ$:
- **Đề `1721` ($l = 0{,}15\text{ m}$):** Đáp án `8b`: $\sum A = 1{,}14 - 7{,}5\sin\theta + 22{,}5\cos\theta - 22{,}5\cos^2\theta\text{ (J)}$.
- **Đề `1722` ($l = 0{,}20\text{ m}$):** Đáp án `8c`: $\sum A = 0{,}36 - 10\sin\theta + 40\cos\theta - 40\cos^2\theta\text{ (J)}$.
:::

**Lời giải từng bước:**
1. **Liệt kê các lực sinh công:**
   - Phản lực tại $A$, ma sát nghỉ tại tiếp điểm lăn không trượt của đĩa $C$, nội lực tại khớp $B$ đều có công bằng $0$.
   - Trọng lực của đĩa $C$ có công $= 0$ vì tâm $C$ di chuyển nằm ngang ($y_C = \text{const}$).
   - Chỉ còn **trọng lực 2 thanh $AB, BC$** và **lực đàn hồi lò xo $K$**.
2. **Công trọng lực 2 thanh ($A_P$):**
   - Khối tâm mỗi thanh nằm ở độ cao $y_G = \frac{l}{2}\sin\theta$ tính từ sàn ngang qua $A$. Khi $\theta$ tăng từ $\theta_0 = 30^\circ$ lên $\theta$, cả hai khối tâm đều **đi lên**:
     $$A_P = -2 m_1 g \left(\frac{l}{2}\sin\theta - \frac{l}{2}\sin 30^\circ\right) = -m_1 g l \left(\sin\theta - \frac{1}{2}\right)$$
3. **Công lực đàn hồi lò xo ($A_{\text{đh}}$):**
   - Độ dài lò xo tại góc $\theta$ là đoạn $AC = 2l\cos\theta$.
   - Vì lò xo không biến dạng tại $\theta = 60^\circ$, chiều dài tự nhiên của lò xo là $l_{\text{tn}} = 2l\cos 60^\circ = l$.
   - Vậy độ biến dạng tại góc $\theta$ bất kỳ là $\Delta l(\theta) = 2l\cos\theta - l = l(2\cos\theta - 1)$.
   - Tại $\theta_0 = 30^\circ$: $\Delta l_0 = l(\sqrt{3} - 1) \implies \Delta l_0^2 = l^2(4 - 2\sqrt{3})$.
   - Áp dụng đúng quy tắc **ĐẦU TRỪ CUỐI**:
     $$\begin{aligned} A_{\text{đh}} &= \frac{1}{2}K\left(\Delta l_0^2 - \Delta l^2\right) \\ &= \frac{1}{2}K l^2\left[(4 - 2\sqrt{3}) - (4\cos^2\theta - 4\cos\theta + 1)\right] \\ &= \frac{1}{2}K l^2\left[(3 - 2\sqrt{3}) + 4\cos\theta - 4\cos^2\theta\right] \end{aligned}$$
4. **Thay số cho hai đề ($m_1 = 5$, $g = 10$, $K = 500$):**
   - **Với Đề `1721` ($l = 0{,}15\text{ m}$):**
     $m_1 g l = 5 \cdot 10 \cdot 0{,}15 = 7{,}5$; $\quad \frac{1}{2}K l^2 = 250 \cdot (0{,}15)^2 = 5{,}625$.
     $$\begin{aligned} \sum A &= -7{,}5(\sin\theta - 0{,}5) \\ &\quad + 5{,}625(3 - 2\sqrt{3} + 4\cos\theta - 4\cos^2\theta) \\ &\approx 1{,}14 - 7{,}5\sin\theta + 22{,}5\cos\theta - 22{,}5\cos^2\theta\text{ (J)} \end{aligned}$$
     Suy ra **chọn `8b`**.
   - **Với Đề `1722` ($l = 0{,}20\text{ m}$):**
     $m_1 g l = 5 \cdot 10 \cdot 0{,}20 = 10$; $\quad \frac{1}{2}K l^2 = 250 \cdot (0{,}20)^2 = 10$.
     $$\begin{aligned} \sum A &= -10(\sin\theta - 0{,}5) \\ &\quad + 10(3 - 2\sqrt{3} + 4\cos\theta - 4\cos^2\theta) \\ &\approx 0{,}36 - 10\sin\theta + 40\cos\theta - 40\cos^2\theta\text{ (J)} \end{aligned}$$
     Suy ra **chọn `8c`**.

---

::: info Bài mẫu 12-2 — Đề 0001/2016 Câu 4 (4b) & Đề 0002/2016 Câu 4 (4a)
1. **Đề `0001/2016` Câu 4:** Thanh $AB$ dài $l = 0{,}4\text{ m}$, khối lượng $m = 10\text{ kg}$ ($g = 9{,}81\text{ m/s}^2$). Con trượt $A$ trượt trên máng ngang phía trên, $B$ trượt trên rãnh thẳng đứng bên phải và gắn lò xo độ cứng $K = 800\text{ N/m}$ thẳng đứng hướng lên (không biến dạng khi $\theta = 0^\circ$). Thanh bắt đầu chuyển động từ $\theta_0 = 30^\circ$ đi lên tới vị trí góc $\theta < 30^\circ$. Tính tổng công $\sum A$.
2. **Đề `0002/2016` Câu 4:** Thanh $AB$ dài $l = 0{,}8\text{ m}$, khối lượng $m = 10\text{ kg}$ ($g = 9{,}81\text{ m/s}^2$). Con trượt $A$ trượt thẳng đứng dọc tường phải, $B$ trượt ngang sang trái trên sàn dưới lực kéo ngang $P = 50\text{ N}$ hướng sang trái. Thanh bắt đầu từ $\theta_0 = 0^\circ$ (thẳng đứng) sang vị trí góc $\theta > 0^\circ$. Tính tổng công $\sum A$.
:::

**Lời giải từng bước:**
1. **Đề `0001/2016` Câu 4:**
   - Khi thanh đi từ $\theta_0 = 30^\circ$ lên vị trí $\theta < 30^\circ$, khối tâm $G$ được **nâng lên** một đoạn $\Delta h_G = \frac{l}{2}(\sin 30^\circ - \sin\theta)$ nên công trọng lực âm:
     $$\begin{aligned} A_P &= -mg\frac{l}{2}(\sin 30^\circ - \sin\theta) \\ &= -10(9{,}81)(0{,}2)(0{,}5 - \sin\theta) = -9{,}81 + 19{,}62\sin\theta \end{aligned}$$
   - Lò xo gắn ở $B$ dãn một đoạn $\Delta l = l\sin\theta$. Tại $\theta_0 = 30^\circ$, $\Delta l_0 = 0{,}4\sin 30^\circ = 0{,}2\text{ m}$. Theo công thức **đầu trừ cuối**:
     $$A_{\text{đh}} = \frac{1}{2}K\left(\Delta l_0^2 - \Delta l^2\right) = 400\left(0{,}2^2 - 0{,}16\sin^2\theta\right) = 16 - 64\sin^2\theta$$
   - Cộng hai công:
     $$\begin{aligned} \sum A &= (16 - 9{,}81) + 19{,}62\sin\theta - 64\sin^2\theta \\ &= 6{,}19 + 19{,}62\sin\theta - 64\sin^2\theta\text{ (J)} \end{aligned}$$
     Suy ra **chọn `4b`**.

2. **Đề `0002/2016` Câu 4:**
   - Khi thanh quay từ $\theta_0 = 0^\circ$ (đứng thẳng) ra góc $\theta > 0^\circ$, khối tâm $G$ **hạ xuống** từ độ cao $\frac{l}{2}$ về $\frac{l}{2}\cos\theta$, nên công trọng lực dương:
     $$\begin{aligned} A_P &= +mg\frac{l}{2}(1 - \cos\theta) \\ &= 10(9{,}81)(0{,}4)(1 - \cos\theta) \\ &= 39{,}24(1 - \cos\theta) \approx 39{,}2(1 - \cos\theta)\text{ (J)} \end{aligned}$$
   - Con trượt $B$ dịch sang trái đoạn $x_B = l\sin\theta$ cùng chiều lực kéo $P = 50\text{ N}$:
     $$A_P^{\text{kéo}} = P \cdot l\sin\theta = 50(0{,}8)\sin\theta = 40\sin\theta\text{ (J)}$$
   - Cộng lại:
     $$\sum A = 39{,}2(1 - \cos\theta) + 40\sin\theta\text{ (J)} \implies \textbf{Chọn 4a}$$

---

## Ngày 13: Tuyệt Chiêu Đạo Hàm 2 Vế ($\frac{dT}{dt} = \sum N \implies \varepsilon$) & Tìm Vận Tốc Khi Biết $\sum A$

### 1. Công thức đạo hàm hai vế tránh bẫy $J'(\theta)$

Khi bạn đã có sẵn biểu thức $T$ (Câu 1 của chùm) và $\sum A$ (Câu 2 của chùm), bạn **không cần tách vật hay viết Newton–Euler** để tìm gia tốc góc $\varepsilon$ hay gia tốc dài $a$. Chỉ cần áp dụng **Định lý biến thiên động năng dạng vi phân (công suất)**:

$$\frac{dT}{dt} = \sum N = \frac{d\left(\sum A\right)}{dt}$$

1. **Trường hợp A — Hệ số động năng là HẰNG SỐ ($T = K_0 \dot{\phi}^2$ hoặc $T = K_0 v^2$):**
   - Đạo hàm hai vế theo $t$ (nhớ $\dot{\phi} = \omega$, $\ddot{\phi} = \varepsilon$, $\dot{v} = a$):
     $$2 K_0 \omega \varepsilon = \frac{d\left(\sum A\right)}{d\phi}\cdot\omega$$
   - Gạch bỏ $\omega$ ở cả hai vế, rút ra ngay:
     $$\varepsilon(\phi) = \frac{1}{2 K_0}\frac{d\left(\sum A\right)}{d\phi} \qquad \text{hoặc} \qquad a = \frac{1}{2 K_0}\frac{d\left(\sum A\right)}{ds}$$

2. **Trường hợp B — Hệ số động năng PHỤ THUỘC GÓC $\theta$ ($T = \frac{1}{2} J(\theta) \dot{\theta}^2$):**
   - Bắt buộc dùng đạo hàm của tích:
     $$\frac{dT}{dt} = J(\theta)\dot{\theta}\ddot{\theta} + \frac{1}{2}J'(\theta)\dot{\theta}^3 = \frac{d\left(\sum A\right)}{d\theta}\dot{\theta}$$
   - Chia hai vế cho $\dot{\theta} = \omega$:
     $$J(\theta)\varepsilon + \frac{1}{2}J'(\theta)\omega^2 = \frac{d\left(\sum A\right)}{d\theta}$$
   - **Lưu ý sống còn:** Chỉ khi hệ đang ở vị trí thả không vận tốc đầu ($\omega = 0$) thì số hạng $\frac{1}{2}J'(\theta)\omega^2$ mới biến mất; tại vị trí $\theta \neq \theta_0$ bắt buộc phải cộng thêm nó!

3. **Bước chốt Câu 4 của chùm (Dạng hữu hạn tìm $\omega$ và $v$):**
   - Đặt $T - T_0 = \sum A$. Vì phần lớn bài thi thả hệ đứng yên ban đầu nên $T_0 = 0$:
     $$K_0 \omega^2 = \sum A(\theta_{\text{cuối}}) \implies \omega = \sqrt{\frac{\sum A(\theta_{\text{cuối}})}{K_0}}$$
   - **Cảnh giác bẫy cuối:** Đề hay hỏi **vận tốc của một điểm cụ thể** ($v_G$ hoặc $V_B$). Luôn kiểm tra điểm đó nằm trên **vật quay cố định** ($v_G = OG\cdot\omega$) hay **vật song phẳng** ($V_B = IB\cdot\omega$, với $I$ là tâm tức thời)!

<div class="figure-container">
<svg viewBox="0 0 760 275" style="width: 100%; max-width: 720px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Sơ đồ cơ hệ Đề 0001/2016 Bài 1 và Đề 0002/2016 Bài 1">
  <rect x="8" y="8" width="362" height="258" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="390" y="8" width="362" height="258" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="189" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0369a1">Đề 0001/2016 — Bài 1 (Câu 3–6)</text>
  <text x="571" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#b45309">Đề 0002/2016 — Bài 1 (Câu 3–6)</text>

  <!-- Left: De 0001/2016 Bai 1 -->
  <!-- Top horizontal guide and right vertical guide -->
  <line x1="60" y1="74" x2="292" y2="74" stroke="#475569" stroke-width="2.5" />
  <line x1="292" y1="54" x2="292" y2="230" stroke="#475569" stroke-width="2.5" />
  <!-- Hatching top & right -->
  <line x1="80" y1="74" x2="88" y2="66" stroke="#64748b" stroke-width="1.2" />
  <line x1="140" y1="74" x2="148" y2="66" stroke="#64748b" stroke-width="1.2" />
  <line x1="200" y1="74" x2="208" y2="66" stroke="#64748b" stroke-width="1.2" />
  <line x1="292" y1="90" x2="300" y2="82" stroke="#64748b" stroke-width="1.2" />
  <line x1="292" y1="150" x2="300" y2="142" stroke="#64748b" stroke-width="1.2" />
  <line x1="292" y1="210" x2="300" y2="202" stroke="#64748b" stroke-width="1.2" />
  <!-- Horizontal reference at theta=0 -->
  <line x1="85" y1="74" x2="280" y2="74" stroke="#94a3b8" stroke-width="1.2" />
  <!-- Spring K from ceiling (280,74) down to B(280,180) -->
  <line x1="280" y1="74" x2="280" y2="95" stroke="#d97706" stroke-width="1.8" />
  <polyline points="280,95 273,103 287,113 273,123 287,133 273,143 287,153 280,161" fill="none" stroke="#d97706" stroke-width="2" />
  <line x1="280" y1="161" x2="280" y2="180" stroke="#d97706" stroke-width="1.8" />
  <text x="262" y="130" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309">K</text>
  <!-- Sliders A(96,80) and B(280,180) -->
  <rect x="82" y="75" width="28" height="14" rx="2" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8" />
  <rect x="272" y="168" width="16" height="24" rx="2" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8" />
  <!-- Rod AB -->
  <line x1="96" y1="82" x2="280" y2="180" stroke="#0f172a" stroke-width="3.5" />
  <circle cx="96" cy="82" r="4" fill="#0f172a" />
  <circle cx="188" cy="131" r="4" fill="#dc2626" />
  <circle cx="280" cy="180" r="4" fill="#0f172a" />
  <!-- Labels -->
  <text x="86" y="106" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">A</text>
  <text x="180" y="148" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">G</text>
  <text x="264" y="192" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">B</text>
  <path d="M 142 82 A 46 46 0 0 1 136 103" fill="none" stroke="#0284c7" stroke-width="1.8" />
  <text x="155" y="99" font-family="sans-serif" font-size="12" font-weight="700" fill="#0284c7">θ</text>
  <text x="189" y="254" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">l = 0,4 m; θ₀ = 30° → θ = 0°</text>

  <!-- Right: De 0002/2016 Bai 1 -->
  <!-- Right vertical wall at x=668, bottom horizontal floor at y=220 -->
  <line x1="668" y1="60" x2="668" y2="220" stroke="#475569" stroke-width="2.5" />
  <line x1="440" y1="220" x2="668" y2="220" stroke="#475569" stroke-width="2.5" />
  <!-- Instantaneous center I at (540, 84) -->
  <line x1="540" y1="84" x2="668" y2="84" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3" />
  <line x1="540" y1="84" x2="540" y2="212" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3" />
  <circle cx="540" cy="84" r="4" fill="#0d9488" />
  <text x="530" y="78" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f766e">I</text>
  <!-- Sliders A(658, 84) and B(540, 212) -->
  <rect x="650" y="72" width="16" height="24" rx="2" fill="#fef3c7" stroke="#d97706" stroke-width="1.8" />
  <rect x="528" y="204" width="24" height="14" rx="2" fill="#fef3c7" stroke="#d97706" stroke-width="1.8" />
  <!-- Rod AB -->
  <line x1="658" y1="84" x2="540" y2="212" stroke="#0f172a" stroke-width="3.5" />
  <circle cx="658" cy="84" r="4" fill="#0f172a" />
  <circle cx="599" cy="148" r="4" fill="#dc2626" />
  <circle cx="540" cy="212" r="4" fill="#0f172a" />
  <!-- Labels -->
  <text x="684" y="88" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">A</text>
  <text x="614" y="156" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">G</text>
  <text x="540" y="236" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">B</text>
  <!-- Angle theta between rod AB and vertical wall at A -->
  <path d="M 658 124 A 40 40 0 0 1 631 113" fill="none" stroke="#0284c7" stroke-width="1.8" />
  <text x="646" y="138" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0284c7">θ</text>
  <!-- Force P pulling B to left -->
  <line x1="528" y1="211" x2="462" y2="211" stroke="#dc2626" stroke-width="2.4" />
  <polygon points="464,206 454,211 464,216" fill="#dc2626" />
  <text x="488" y="198" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">P = 50 N</text>
  <text x="526" y="152" text-anchor="end" font-family="sans-serif" font-size="11" fill="#0f766e">IB = l cos θ</text>
  <text x="571" y="254" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">l = 0,8 m; θ₀ = 0° → 45° (Bẫy 6e!)</text>
</svg>
<div class="figure-caption">

Hình 13-1: Hai bài toán thanh song phẳng 1 bậc tự do của Đề 0001/2016 và Đề 0002/2016 (cẩn thận tâm tức thời I ở bẫy Câu 6!)

</div>
</div>

### 2. Giải trọn vẹn 3 chùm 4 câu liên hoàn từ đề thi thật

::: info Chùm hoàn chỉnh 1 — Đề 1821 Câu 5, 6, 7, 8 (Đáp án chính thức trang 5: 5a, 6c, 7d, 8b)
Tiếp nối con lắc thanh $OA(m_0, L)$ hàn vật nặng $(2m_0, \rho)$ với $m_0 = 2\text{ kg}$, $L = 0{,}2\text{ m}$, $\rho = 0{,}3\text{ m}$, ban đầu giữ đứng yên tại góc $\phi^* = 30^\circ$ so với phương ngang $Ox$, lấy $g = 9{,}81\text{ m/s}^2$:
1. **Câu 5 (`5a`):** Động năng hệ: $T = \dfrac{77}{150}\omega^2$.
2. **Câu 6 (`6c`):** Tổng công ngoại lực khi di chuyển từ $\phi^* = 30^\circ$ đến $\phi = 90^\circ$ là:
   - Trọng tâm thanh $OA$ cách $O$ đoạn $L/2$, khối tâm $G$ cách $O$ đoạn $2L$. Khi quay từ $\phi^*$ tới $\phi$, độ hạ theo phương thẳng đứng $Oy$ của từng điểm là $\frac{L}{2}(\sin\phi - \sin\phi^*)$ và $2L(\sin\phi - \sin\phi^*)$:
     $$\begin{aligned} \sum A(\phi) &= \left[m_0 g\frac{L}{2} + 2m_0 g(2L)\right](\sin\phi - \sin\phi^*) \\ &= 4{,}5 m_0 g L (\sin\phi - \sin 30^\circ) \\ &= 4{,}5(2)(9{,}81)(0{,}2)(\sin\phi - 0{,}5) \\ &= 17{,}658(\sin\phi - 0{,}5) \end{aligned}$$
   - Tại $\phi = 90^\circ$: $\sum A = 17{,}658(1 - 0{,}5) = 8{,}829\text{ J} \implies$ **Chọn `6c`**.
3. **Câu 7 (`7d`):** Đạo hàm hai vế $T = \frac{77}{150}\dot{\phi}^2$ và $\sum A(\phi) = 17{,}658(\sin\phi - 0{,}5)$:
   $$\begin{aligned} \frac{dT}{dt} &= \frac{77}{75}\omega\varepsilon = 17{,}658\cos\phi \cdot \omega \\ \implies \varepsilon &= \frac{17{,}658}{77/75}\cos\phi \approx 17{,}199\cos\phi\text{ (rad/s}^2\text{)} \end{aligned}$$
   Suy ra **chọn `7d`**.
4. **Câu 8 (`8b`):** Tại $\phi = 90^\circ$, áp dụng $T - T_0 = \sum A$ (với $T_0 = 0$):
   $$\frac{77}{150}\omega^2 = 8{,}829 \implies \omega = \sqrt{\frac{8{,}829 \times 150}{77}} \approx 4{,}1472\text{ rad/s}$$
   Vì điểm $G$ quay trên đường tròn bán kính $OG = 2L = 0{,}4\text{ m}$ quanh $O$:
   $$v_G = 2L\cdot\omega = 0{,}4 \times 4{,}1472 \approx 1{,}659\text{ m/s} \implies \textbf{Chọn 8b}$$
:::

---

::: info Chùm hoàn chỉnh 2 — Đề 0001/2016 Câu 3, 4, 5, 6 (Đáp án: 3a, 4b, 5c, 6b)
Cơ hệ Hình 13-1 (bên trái): thanh đồng chất $AB$ dài $l = 0{,}4\text{ m}$, $m = 10\text{ kg}$, $K = 800\text{ N/m}$, thả từ đứng yên tại $\theta_0 = 30^\circ$ đi lên tới $\theta = 0^\circ$ ($g = 9{,}81\text{ m/s}^2$).
1. **Câu 3 (`3a`):** Dùng công thức tủ thanh trượt 2 rãnh vuông góc:
   $$T = \frac{1}{6}m l^2\omega^2 = \frac{1}{6}(10)(0{,}4)^2\omega^2 = \frac{4}{15}\omega^2\text{ (J)} \implies \textbf{Chọn 3a}$$
2. **Câu 4 (`4b`):** Đã chứng minh ở Ngày 12:
   $$\sum A(\theta) = 6{,}19 + 19{,}62\sin\theta - 64\sin^2\theta\text{ (J)} \implies \textbf{Chọn 4b}$$
3. **Câu 5 (`5c`):** Tại vị trí $\theta = 0^\circ$, ta có $\sum A(0^\circ) = 6{,}19\text{ J}$. Thế vào $T - 0 = \sum A$:
   $$\begin{aligned} \frac{4}{15}\omega^2 &= 6{,}19 \\ \implies \omega &= \sqrt{\frac{6{,}19 \times 15}{4}} \approx 4{,}818 \approx 4{,}82\text{ rad/s} \end{aligned}$$
   Suy ra **chọn `5c`**.
4. **Câu 6 (`6b`):** Tại vị trí $\theta = 0^\circ$, thanh $AB$ nằm ngang hoàn toàn; đoạn từ tâm tức thời $I$ đến $B$ vuông góc với phương trượt đứng của $B$ có độ dài đúng bằng $IB = l\cos 0^\circ = 0{,}4\text{ m}$:
   $$V_B = IB \cdot \omega = 0{,}4 \times 4{,}818 \approx 1{,}927 \approx 1{,}93\text{ m/s} \implies \textbf{Chọn 6b}$$
:::

---

::: info Chùm hoàn chỉnh 3 — Đề 0002/2016 Câu 3, 4, 5, 6 (Đáp án: 3a, 4a, 5c, 6e — Vạch mặt bẫy 6e!)
Cơ hệ Hình 13-1 (bên phải): thanh đồng chất $AB$ dài $l = 0{,}8\text{ m}$, $m = 10\text{ kg}$, thả từ đứng yên tại $\theta_0 = 0^\circ$ dưới lực kéo $P = 50\text{ N}$ đến vị trí $\theta = 45^\circ$ ($g = 9{,}81\text{ m/s}^2$).
1. **Câu 3 (`3a`):** Dùng công thức tủ thanh trượt 2 tường vuông góc:
   $$T = \frac{1}{6}m l^2 \omega^2 = \frac{1}{6}(10)(0{,}8)^2\omega^2 = \frac{16}{15}\omega^2\text{ (J)} \implies \textbf{Chọn 3a}$$
2. **Câu 4 (`4a`):** Đã chứng minh ở Ngày 12:
   $$\sum A(\theta) = 39{,}2(1 - \cos\theta) + 40\sin\theta\text{ (J)} \implies \textbf{Chọn 4a}$$
3. **Câu 5 (`5c`):** Tại $\theta = 45^\circ$:
   $$\sum A(45^\circ) = 39{,}2\left(1 - \frac{\sqrt{2}}{2}\right) + 40\left(\frac{\sqrt{2}}{2}\right) \approx 39{,}7657\text{ J}$$
   Từ $T - 0 = \sum A$:
   $$\begin{aligned} \frac{16}{15}\omega^2 &= 39{,}7657 \\ \implies \omega &= \sqrt{\frac{39{,}7657 \times 15}{16}} \approx 6{,}1058 \approx 6{,}11\text{ rad/s} \end{aligned}$$
   Suy ra **chọn `5c`**.
4. **Câu 6 (`6e` — CẢNH BÁO BẪY CHẾT NGƯỜI!):**
   - Đề cho 4 đáp án số: `a. 9,76 m/s`, `b. 6,91 m/s`, `c. 5,22 m/s`, `d. 4,70 m/s` và `e. Các câu a, b, c, d đều sai`.
   - Tại vị trí $\theta = 45^\circ$, điểm $I$ là giao điểm đường nằm ngang qua $A$ và đường thẳng đứng qua $B$ (xem Hình 13-1 bên phải). Cạnh $IB$ là cạnh kề góc $\theta$ trong tam giác vuông $IAB$:
     $$IB = l\cos 45^\circ = 0{,}8 \times \frac{\sqrt{2}}{2} \approx 0{,}5657\text{ m}$$
   - Vận tốc thực tế của con trượt $B$ là:
     $$V_B = IB \cdot \omega = 0{,}5657 \times 6{,}1058 \approx 3{,}45\text{ m/s}$$
     *(Nếu lấy đạo hàm trực tiếp $x_B = l\sin\theta \implies V_B = \dot{x}_B = l\cos\theta\cdot\dot{\theta}$ cũng ra y hệt $3{,}45\text{ m/s}$!).*
   - Vì $3{,}45\text{ m/s}$ **không trùng** bất kỳ số nào trong `a, b, c, d` (trên bản chụp đề cũ từng có thí sinh khoanh nhầm `b` rồi gạch bỏ khoanh sang `e`), nên đáp án đúng tuyệt đối là **`6e`**!
:::

---

## Ngày 14: Luyện Chuyên Sâu Các Hệ Dây Kéo Ròng Rọc, Con Lăn Nối Vật & Ma Sát Trượt

Trong các đề thi thật các năm `2011–2015`, ngoài cơ hệ thanh–lò xo, Bộ môn Cơ kỹ thuật thường ra chùm 4 câu với **hệ dây kéo vắt qua ròng rọc 2 tầng** hoặc **con lăn kép quấn dây ở tầng trong**, kết hợp **vật trượt có ma sát động $f$ trên mặt phẳng nghiêng**. Bí quyết làm chủ dạng này nằm ở **3 phép quy đổi vận tốc dây trong 10 giây**.

### 1. Quy tắc quy đổi vận tốc dây & Con lăn kép trong 10 giây

| Kết cấu cơ khí | Cách tìm tỉ số vận tốc bằng tâm quay | Mẹo chống sai khi làm trắc nghiệm |
| :--- | :--- | :--- |
| **1. Ròng rọc 2 tầng cố định $(R, r)$** | $\omega = \dfrac{v_{\text{ngoài}}}{R} = \dfrac{v_{\text{trong}}}{r}$ | Dây ở vành lớn luôn chạy nhanh gấp $\frac{R}{r}$ lần dây ở vành nhỏ. |
| **2. Ròng rọc động tâm $C$, 1 đầu dây cố định** | $v_{\text{dây kéo}} = 2 v_C$, $\quad \omega_C = \dfrac{v_{\text{dây kéo}}}{2R_C} = \dfrac{v_C}{R_C}$ | Điểm nối dây cố định đứng yên nên tốc độ tâm $C$ bằng **trung bình cộng** hai nhánh dây. |
| **3. Con lăn kép $(R, r)$ lăn không trượt trên nền, dây quấn tầng trong $r$** | Tâm tức thời $I$ nằm ở **đáy tiếp xúc nền** ($\omega = \frac{v_A}{R}$):<br>- Dây ở **phía trên** vành $r$: $v_{\text{dây}} = \omega(R + r)$<br>- Dây ở **phía dưới** vành $r$: $v_{\text{dây}} = \omega(R - r)$ | Đo khoảng cách từ **chân $I$** tới đường thẳng chứa dây! Tuyệt đối **không** dùng $v_{\text{dây}} = \omega r$ (vì tâm con lăn đang di chuyển!). |

<div class="figure-container">
<svg viewBox="0 0 760 285" style="width: 100%; max-width: 720px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Sơ đồ hệ ròng rọc 2 tầng Đề 0001/2015 và con lăn kép Đề 0002/2015">
  <rect x="8" y="8" width="362" height="268" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="390" y="8" width="362" height="268" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="189" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0369a1">Đề 0001/2015 — Câu 6–9</text>
  <text x="571" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f766e">Đề 0002/2015 — Câu 5–8</text>

  <!-- Left: De 0001/2015 Cau 6-9 -->
  <!-- Two-step pulley O at (240, 86), R=40, r=20 -->
  <circle cx="240" cy="86" r="40" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <circle cx="240" cy="86" r="20" fill="#bae6fd" stroke="#0369a1" stroke-width="1.8" />
  <circle cx="240" cy="86" r="3.5" fill="#0f172a" />
  <text x="240" y="79" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a">O</text>
  <!-- Incline 30 deg: bottom-left (42, 240) up to (215, 140) -->
  <line x1="42" y1="240" x2="215" y2="140" stroke="#475569" stroke-width="2.5" />
  <line x1="42" y1="240" x2="180" y2="240" stroke="#94a3b8" stroke-width="1.5" />
  <text x="98" y="232" font-family="sans-serif" font-size="11" font-weight="700" fill="#475569">30°</text>
  <!-- Block B on incline (rotated -30 deg around (115, 184)) -->
  <g transform="rotate(-30 115 184)">
    <rect x="97" y="168" width="36" height="24" rx="2" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
    <text x="115" y="184" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309">B</text>
  </g>
  <!-- Rope from B tangent to top of inner pulley r -->
  <line x1="128" y1="166" x2="230" y2="69" stroke="#0f172a" stroke-width="1.8" />
  <text x="148" y="122" text-anchor="end" font-family="sans-serif" font-size="11" fill="#334155">ma sát f</text>
  <!-- Vertical rope from right side of outer pulley R(280, 86) down to A(280, 175) -->
  <line x1="280" y1="86" x2="280" y2="170" stroke="#0f172a" stroke-width="1.8" />
  <rect x="266" y="170" width="28" height="26" rx="2" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
  <text x="280" y="187" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803d">A</text>
  <!-- Floor below A at y=240 -->
  <line x1="240" y1="240" x2="330" y2="240" stroke="#475569" stroke-width="2.5" />
  <line x1="296" y1="196" x2="296" y2="238" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,2" />
  <text x="304" y="220" font-family="sans-serif" font-size="11" font-weight="700" fill="#475569">h</text>
  <!-- Force F downward on A -->
  <line x1="280" y1="196" x2="280" y2="225" stroke="#dc2626" stroke-width="2" />
  <polygon points="276,222 280,230 284,222" fill="#dc2626" />
  <text x="264" y="218" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">F</text>
  <text x="189" y="264" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">R = 2r; vB = VA / 2; dây A chùng khi chạm đất</text>

  <!-- Right: De 0002/2015 Cau 5-8 -->
  <!-- Wedge/incline from (418, 240) to top (595, 120) then horizontal shelf to (730, 120) -->
  <line x1="418" y1="240" x2="595" y2="120" stroke="#475569" stroke-width="2.5" />
  <line x1="595" y1="120" x2="730" y2="120" stroke="#475569" stroke-width="2.5" />
  <line x1="418" y1="240" x2="520" y2="240" stroke="#94a3b8" stroke-width="1.5" />
  <text x="468" y="232" font-family="sans-serif" font-size="11" font-weight="700" fill="#475569">α</text>
  <!-- Small pulley O at corner (595, 110), radius 11 -->
  <circle cx="595" cy="110" r="11" fill="#e2e8f0" stroke="#0f172a" stroke-width="1.8" />
  <text x="595" y="92" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a">O</text>
  <!-- Double roller A on incline: slope vector (-0.828, 0.561), normal (-0.561, -0.828) -->
  <!-- Contact I = (490, 191), R = 36 -> Center A = (490 - 20.2, 191 - 29.8) = (470, 161) -->
  <circle cx="470" cy="161" r="36" fill="#ccfbf1" stroke="#0d9488" stroke-width="2" />
  <circle cx="470" cy="161" r="24" fill="#99f6e4" stroke="#0f766e" stroke-width="1.6" />
  <circle cx="470" cy="161" r="3.5" fill="#0f172a" />
  <circle cx="490" cy="191" r="4" fill="#dc2626" />
  <text x="456" y="164" text-anchor="end" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a">A</text>
  <text x="506" y="210" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">I</text>
  <!-- Line I to top of inner circle r (456.5, 141) showing R+r -->
  <line x1="490" y1="191" x2="456.5" y2="141" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2" />
  <!-- Rope from top of inner circle (456.5, 141) parallel to incline up to pulley O(589, 100), then horizontal to B(650, 108) -->
  <line x1="456.5" y1="141" x2="589" y2="100" stroke="#0f172a" stroke-width="1.8" />
  <line x1="595" y1="99" x2="650" y2="99" stroke="#0f172a" stroke-width="1.8" />
  <!-- Block B on horizontal shelf -->
  <rect x="650" y="92" width="38" height="26" rx="2" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <text x="669" y="110" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309">B</text>
  <!-- Force F pulling B right -->
  <line x1="688" y1="105" x2="730" y2="105" stroke="#dc2626" stroke-width="2.2" />
  <polygon points="728,100 737,105 728,110" fill="#dc2626" />
  <text x="716" y="94" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">F</text>
  <text x="678" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">ma sát f2</text>
  <text x="571" y="264" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">r = 2R/3; từ tâm I tới dây = R + r = 5R/3</text>
</svg>
<div class="figure-caption">

Hình 14-1: Cơ hệ ròng rọc 2 tầng kéo vật trượt có ma sát (Đề 0001/2015) và con lăn kép quấn dây tầng trong (Đề 0002/2015)

</div>
</div>

### 2. Giải chi tiết các đề thực chiến 2011–2015

::: info Bài thực chiến 14-1 — Đề 0001 (29/06/2015) Câu 6, 7, 8, 9 (Đáp án: 6b, 7a, 8d, 9c)
Cơ hệ như Hình 14-1 (bên trái): vật $A$ ($m_A$) treo thẳng đứng trên tầng ngoài bán kính $R = 2r$ của ròng rọc $O$ ($m_O = 4m_B$, bán kính quán tính $\rho = \frac{3}{2}r$), vật $B$ ($m_B$) trên mặt nghiêng $30^\circ$ có hệ số ma sát trượt động $f = \frac{\sqrt{3}}{8}$ nối với tầng trong bán kính $r$. Biết $m_A = \frac{3}{8}m_B$ (tức $m_B = \frac{8}{3}m_A$, $m_O = \frac{32}{3}m_A$) và lực kéo thẳng đứng hướng xuống đặt vào $A$ là $F = \frac{45}{12}m_A g$. Ban đầu hệ đứng yên, $A$ cách sàn đoạn $h$.

1. **Câu 6 (`6b`) — Động năng toàn hệ khi $A$ chưa chạm đất theo $V_A$:**
   - Quan hệ động học: $\omega_O = \dfrac{V_A}{R} = \dfrac{V_A}{2r}$; $\quad v_B = r\omega_O = \dfrac{V_A}{2}$.
   - Mômen quán tính ròng rọc $O$: $J_O = m_O\rho^2 = \frac{32}{3}m_A\left(\frac{3}{2}r\right)^2 = 24m_A r^2$.
   - Động năng từng vật:
     $$\begin{aligned} T_A &= \frac{1}{2}m_A V_A^2 \\ T_B &= \frac{1}{2}\left(\frac{8}{3}m_A\right)\left(\frac{V_A}{2}\right)^2 = \frac{1}{3}m_A V_A^2 \\ T_O &= \frac{1}{2}\left(24m_A r^2\right)\left(\frac{V_A}{2r}\right)^2 = 3m_A V_A^2 \end{aligned}$$
   - Cộng lại:
     $$T = \left(\frac{1}{2} + \frac{1}{3} + 3\right)m_A V_A^2 = \frac{23}{6}m_A V_A^2 \implies \textbf{Chọn 6b}$$

2. **Câu 7 (`7a`) — Tổng công ngoại lực khi $A$ đi xuống đoạn $x \le h$:**
   - Khi $A$ xuống $x$ thì $B$ đi lên dọc dốc đoạn $x_B = \frac{x}{2}$.
   - Lực kéo + trọng lực trên $A$: $A_{F+P_A} = \left(\frac{45}{12}m_A g + m_A g\right)x = \frac{57}{12}m_A g x$.
   - Trọng lực + ma sát trượt trên $B$ (lưu ý $\sin 30^\circ = \frac{1}{2}$ và $f\cos 30^\circ = \frac{\sqrt{3}}{8}\cdot\frac{\sqrt{3}}{2} = \frac{3}{16}$):
     $$A_{P_B + \text{ms}} = -m_B g\left(\frac{1}{2} + \frac{3}{16}\right)\frac{x}{2} = -\frac{8}{3}m_A g \cdot \frac{11}{32} x = -\frac{11}{12}m_A g x$$
   - Tổng công:
     $$\begin{aligned} \sum A &= \left(\frac{57}{12} - \frac{11}{12}\right)m_A g x \\ &= \frac{46}{12}m_A g x = \frac{23}{6}m_A g x \end{aligned}$$
     Suy ra **chọn `7a`**.

3. **Câu 8 (`8d`) — Sức căng dây $S_A$ khi $A$ chưa chạm đất:**
   - Đạo hàm hai vế $\frac{dT}{dt} = \sum N$:
     $$\frac{23}{3}m_A V_A a_A = \frac{23}{6}m_A g V_A \implies a_A = \frac{1}{2}g$$
   - Tách riêng vật $A$ đang đi xuống với gia tốc $a_A$:
     $$\begin{aligned} F + m_A g - S_A &= m_A a_A \\ \implies S_A &= \left(\frac{45}{12} + 1 - \frac{1}{2}\right)m_A g = \frac{51}{12}m_A g \end{aligned}$$
     Suy ra **chọn `8d`**.

4. **Câu 9 (`9c`) — Quãng đường $d$ mà $B$ trượt tiếp sau khi $A$ chạm đất:**
   - Lúc $A$ vừa chạm đất ($x = h$), từ $T = \sum A \implies \frac{23}{6}m_A V_{A0}^2 = \frac{23}{6}m_A g h \implies V_{A0}^2 = g h$, do đó $v_{B0}^2 = \frac{1}{4}V_{A0}^2 = \frac{1}{4}g h$ và $\omega_0 = \frac{v_{B0}}{r}$.
   - **Điểm tinh tế cần hiểu rõ:** Khi $A$ chạm đất và dừng lại, nhánh dây nối $A$ lập tức bị **chùng** ($S_A = 0$), nhưng ròng rọc $O$ vẫn đang quay theo quán tính kéo căng nhánh dây nối $B$, khiến **cả $B$ và ròng rọc $O$ giảm tốc cùng nhau** cho tới khi dừng hẳn!
   - Động năng còn lại của cặp $(B + O)$ là:
     $$T_{B+O} = T_B + T_O = \left(\frac{1}{3} + 3\right)m_A V_{A0}^2 = \frac{10}{3}m_A g h$$
   - Trên đoạn $d$ đi lên dốc cho tới khi dừng ($T_{\text{cuối}} = 0$), tổng công cản lên $B$:
     $$\begin{aligned} \sum A_{\text{cản}} &= -m_B g(\sin 30^\circ + f\cos 30^\circ)d \\ &= -\frac{8}{3}m_A g\left(\frac{11}{16}\right)d = -\frac{11}{6}m_A g d \end{aligned}$$
   - Áp dụng $0 - T_{B+O} = \sum A_{\text{cản}}$:
     $$\frac{11}{6}m_A g d = \frac{10}{3}m_A g h \implies d = \frac{20}{11}h \implies \textbf{Chọn 9c}$$
:::

---

::: info Bài thực chiến 14-2 — Đề 0002 (29/06/2015) Câu 5, 6, 7, 8 (Đáp án: 5b, 6c, 7d, 8c)
Cơ hệ Hình 14-1 (bên phải): con lăn kép tâm $A$ (bán kính ngoài $R$, bán kính trong $r = \frac{2}{3}R$) lăn không trượt trên mặt nghiêng góc $\alpha$, được xem như trụ đặc đồng chất trọng lượng $P_1$, bán kính $R$ ($J_A = \frac{1}{2}\frac{P_1}{g}R^2$). Dây quấn **tầng trong $r$** vòng qua ròng rọc $O$ không khối lượng kéo tải $B$ trọng lượng $P_2$ trên mặt ngang dưới lực kéo $F$.

1. **Câu 5 (`5b`) — Tổng động năng $T$ theo $V_B$:**
   - Tâm tức thời của con lăn $A$ là tiếp điểm $I$ trên dốc. Điểm tiếp xúc của dây ở **phía trên** vành trong $r$ cách $I$ một khoảng $R + r = R + \frac{2}{3}R = \frac{5}{3}R$.
   - Suy ra vận tốc dây (bằng $V_B$) là $V_B = \omega\cdot\frac{5}{3}R$, còn vận tốc tâm con lăn là $V_A = \omega R = \frac{3}{5}V_B$.
   - Áp dụng công thức tủ $\frac{3}{4}$ cho trụ đặc $A$ lăn không trượt và tải tịnh tiến $B$:
     $$\begin{aligned} T &= \frac{3}{4}\left(\frac{P_1}{g}\right)V_A^2 + \frac{1}{2}\left(\frac{P_2}{g}\right)V_B^2 \\ &= \left[\frac{3}{4}\cdot\frac{9}{25}P_1 + \frac{1}{2}P_2\right]\frac{V_B^2}{g} = \frac{50P_2 + 27P_1}{100g}V_B^2 \implies \textbf{Chọn 5b} \end{aligned}$$

2. **Câu 6 (`6c`) — Tổng công khi $B$ dịch sang phải đoạn $S$ (bỏ ma sát):**
   - Con lăn $A$ tiến lên dọc dốc đoạn $S_A = \frac{3}{5}S$, độ cao tăng $S_A\sin\alpha = \frac{3}{5}S\sin\alpha$.
   - Trọng lực $P_1$ sinh công âm, lực $F$ sinh công dương (ma sát nghỉ lăn không trượt ở $I$ không sinh công):
     $$\sum A = \left(F - \frac{3}{5}P_1\sin\alpha\right)S \implies \textbf{Chọn 6c}$$

3. **Câu 7 (`7d`) — Gia tốc $a_B$ (bỏ ma sát tại $B$):**
   - Đạo hàm hai vế $\frac{dT}{dt} = \sum N$ (với $\frac{dV_B}{dt} = a_B$ và $\frac{dS}{dt} = V_B$):
     $$2\left(\frac{50P_2 + 27P_1}{100g}\right)V_B a_B = \left(F - \frac{3}{5}P_1\sin\alpha\right)V_B$$
   - Chia hai vế cho $V_B$ và rút gọn $\frac{50P_2 + 27P_1}{50g} = \frac{2P_2 + \frac{27}{25}P_1}{2g}$:
     $$a_B = 2g\frac{F - \frac{3}{5}P_1\sin\alpha}{2P_2 + \frac{27}{25}P_1} \implies \textbf{Chọn 7d}$$

4. **Câu 8 (`8c`) — Gia tốc $a_B$ khi $B$ có ma sát trượt động $f_2$:**
   - Tổng công có thêm công ma sát âm $-P_2 f_2 S$. Thay trực tiếp vào tử số của Câu 7:
     $$a_B = 2g\frac{F - \frac{3}{5}P_1\sin\alpha - P_2 f_2}{2P_2 + \frac{27}{25}P_1} \implies \textbf{Chọn 8c}$$
:::

---

::: info Bài thực chiến 14-3 — Đề 1 HK II/13-14 (19/06/2014) Câu 1–3 & Đề 3 (28/12/2011) Câu 1–4
- **Đề `1` HK II/13-14 (Trường hợp I — Đáp án `1b, 2a, 3d`):**
  Con lăn trụ đặc $B$ ($m_B = 16m_0$, bán kính $R$) lăn không trượt trên **mặt trên nằm ngang** của lăng trụ $C$ (được chốt $H$ giữ đứng yên trên dốc nghiêng); dây từ **đỉnh trên** của $B$ (cách tâm tức thời $I$ đoạn $2R$) nối qua ròng rọc nhẹ xuống vật $A$ ($m_A = 8m_0$, tọa độ $y$ hướng lên). Ngẫu lực $M_0$ đặt vào $B$ chiều ngược KĐH sao cho $\frac{M_0}{R} = 20m_0 g$.
  - Vì $v_A = \dot{y} = 2 v_B \implies v_B = \frac{\dot{y}}{2}$ và $\omega_B = \frac{\dot{y}}{2R}$.
  - Động năng hệ:
    $$\begin{aligned} T &= \frac{1}{2}m_A\dot{y}^2 + \frac{3}{4}m_B v_B^2 \\ &= 4m_0\dot{y}^2 + \frac{3}{4}(16m_0)\left(\frac{\dot{y}}{2}\right)^2 = 7m_0\dot{y}^2 \end{aligned}$$
    Suy ra **chọn `1b`**.
  - Vì con lăn $B$ lăn trên **mặt trên nằm ngang** của lăng trụ $C$ (còn $C$ bị chốt $H$ giữ đứng yên) nên độ cao của khối tâm $B$ không đổi ($\Delta y_B = 0$), trọng lực $\vec{P}_B$ vuông góc với phương dịch chuyển ngang của $B$ nên có công suất bằng $0$. Chỉ còn ngẫu lực $M_0$ (cùng chiều quay của $B$) và trọng lực tải $A$ (đi lên ngược chiều trọng lực) sinh công: $N = M_0\omega_B - m_A g\dot{y} = 10m_0 g\dot{y} - 8m_0 g\dot{y} = 2m_0 g\dot{y}$ (**chọn `2a`**), đạo hàm ra $14m_0\dot{y}\ddot{y} = 2m_0 g\dot{y} \implies \ddot{y} = \frac{g}{7}$ (**chọn `3d`**).

- **Đề `3` (28/12/2011) Câu 1–4 (Đáp án `1c, 2b, 3c, 4c` — Bẫy Câu 4):**
  Puly kép cố định $C$ ($m_C = 11m_0$, $R_C = 5r_C$, $\rho_C^2 = \frac{55}{22}r_C^2 = \frac{5}{2}r_C^2$) chịu mômen $M = 223{,}8m_0 g r_C$ quay cùng KĐH. Nhánh dây trái $I$ quấn từ $R_C = 5r_C$ đi xuống đỡ bên trái trụ đặc động $B$ ($m_B = m_0, R_B = 3r_C$), nhánh phải $H$ quấn từ $r_C$ đi xuống đỡ bên phải $B$ (mang tải $A$ với $m_A = 100m_0$).
  - Khi $C$ quay cùng KĐH với $\omega_C$: dây $I$ đi **lên** với tốc độ $5r_C\omega_C$, dây $H$ đi **xuống** với tốc độ $r_C\omega_C$.
  - Do đó tâm $B$ (và $A$) đi lên với $V_A = \frac{5r_C\omega_C - r_C\omega_C}{2} = 2r_C\omega_C \implies \omega_C = \frac{V_A}{2r_C}$, và $\omega_B = \frac{5r_C\omega_C + r_C\omega_C}{2R_B} = \frac{6r_C\omega_C}{6r_C} = \frac{V_A}{2r_C}$ (**chọn `1c`**).
  - Động năng: $J_B = \frac{1}{2}m_0(3r_C)^2 = 4{,}5m_0 r_C^2$, $J_C = 11m_0\left(\frac{5}{2}r_C^2\right) = 27{,}5m_0 r_C^2$:
    $$\begin{aligned} T &= \frac{1}{2}(101m_0)V_A^2 + \frac{1}{2}(4{,}5 + 27{,}5)m_0 r_C^2\left(\frac{V_A}{2r_C}\right)^2 \\ &= (50{,}5 + 4)m_0 V_A^2 = 54{,}5m_0 V_A^2 \end{aligned}$$
    Suy ra **chọn `2b`**.
  - Tổng công suất:
    $$\begin{aligned} N &= M\omega_C - (m_A + m_B)g V_A \\ &= 111{,}9m_0 g V_A - 101m_0 g V_A = 10{,}9m_0 g V_A \end{aligned}$$
    Suy ra **chọn `3c`**.
  - Đạo hàm tìm gia tốc: $109m_0 V_A W_A = 10{,}9m_0 g V_A \implies W_A = 0{,}1 g$ (hướng lên). Các đáp án `a. 9/10` (thiếu $g$), `b. 30g/147`, `d. 20g/114` đều sai $\implies$ **Chọn `4c. Không có kết quả đúng`**!
:::

---

## Ngày 15: Bộ 12 Câu Thi Thật Bấm Giờ (3 Chùm × 4 Câu — 25 Phút) & Checklist Chống Bẫy `e`

Hãy tự đặt đồng hồ đúng **25 phút** để giải trọn bộ 12 câu dưới đây (được trích nguyên văn từ các đề thi thật Cuối kỳ `AS1003` tại HCMUT) trước khi mở phần lời giải ẩn.

<div class="figure-container">
<svg viewBox="0 0 760 270" style="width: 100%; max-width: 720px; height: auto; display: block; margin: 0 auto;" role="img" aria-label="Sơ đồ cơ hệ Chùm 2 Đề 26/12/2013 và Chùm 3 Đề 28/12/2011">
  <rect x="8" y="8" width="362" height="254" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="390" y="8" width="362" height="254" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="189" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0369a1">Chùm 2: Đề 2 (26/12/2013) — Bài I</text>
  <text x="571" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#b45309">Chùm 3: Đề 3 (28/12/2011) — Câu 1–4</text>

  <!-- Left: De 2 (26/12/2013) -->
  <!-- Incline ~30.7 deg from (38, 204) to (198, 109) -->
  <line x1="38" y1="204" x2="198" y2="109" stroke="#475569" stroke-width="2.5" />
  <line x1="38" y1="204" x2="170" y2="204" stroke="#94a3b8" stroke-width="1.4" />
  <text x="92" y="196" font-family="sans-serif" font-size="11" font-weight="700" fill="#475569">30°</text>
  <g transform="rotate(-30.7 106.3 150.6)">
    <rect x="88.3" y="139.6" width="36" height="22" rx="2" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
    <text x="106.3" y="154.6" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#b45309">A</text>
  </g>
  <!-- Pulley B at (239.3, 104.3): R_B = 28, r_B = 14 -->
  <circle cx="239.3" cy="104.3" r="28" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <circle cx="239.3" cy="104.3" r="14" fill="#bae6fd" stroke="#0369a1" stroke-width="1.8" />
  <circle cx="239.3" cy="104.3" r="3" fill="#0f172a" />
  <text x="260" y="74" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a">B</text>
  <!-- Rope tau1 parallel to incline (~30.7 deg) from A to top-left tangent of B -->
  <line x1="121.8" y1="141.4" x2="225.0" y2="80.2" stroke="#0f172a" stroke-width="1.8" />
  <text x="164" y="102" text-anchor="end" font-family="sans-serif" font-size="11" font-weight="700" fill="#334155">τ₁</text>
  <!-- Ceiling above right side of C -->
  <line x1="284" y1="54" x2="334" y2="54" stroke="#475569" stroke-width="2.5" />
  <!-- Movable pulley C at (281.3, 172), R_C = 28 -->
  <circle cx="281.3" cy="172" r="28" fill="#ccfbf1" stroke="#0d9488" stroke-width="2" />
  <circle cx="281.3" cy="172" r="3" fill="#0f172a" />
  <text x="281.3" y="165" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a">C</text>
  <!-- Rope tau2 from right of inner B (253.3, 104.3) down to left of C (253.3, 172) -->
  <line x1="253.3" y1="104.3" x2="253.3" y2="172" stroke="#0f172a" stroke-width="1.8" />
  <!-- Rope tau3 from right of C (309.3, 172) up to ceiling (309.3, 54) -->
  <line x1="309.3" y1="54" x2="309.3" y2="172" stroke="#0f172a" stroke-width="1.8" />
  <!-- Block D hanging from C -->
  <line x1="281.3" y1="172" x2="281.3" y2="205" stroke="#0f172a" stroke-width="1.8" />
  <rect x="265.3" y="205" width="32" height="24" rx="2" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
  <text x="281.3" y="221" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803d">D</text>
  <text x="189" y="250" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">RB = 2rB = 2r; RC = 2r</text>

  <!-- Right: De 3 (28/12/2011) -->
  <!-- Wall at x=436, beam D-C from (436, 92) to (595, 92) -->
  <line x1="436" y1="52" x2="436" y2="145" stroke="#475569" stroke-width="2.5" />
  <line x1="436" y1="92" x2="595" y2="92" stroke="#475569" stroke-width="2.5" />
  <text x="450" y="84" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a">D</text>
  <!-- Pulley C at (595, 92), RC = 45, rC = 9 (5:1 ratio) -->
  <circle cx="595" cy="92" r="45" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <circle cx="595" cy="92" r="9" fill="#bae6fd" stroke="#0369a1" stroke-width="1.8" />
  <circle cx="595" cy="92" r="3" fill="#0f172a" />
  <text x="614" y="83" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a">C</text>
  <!-- Torque M clockwise arrow on right of C -->
  <path d="M 650 68 A 59 59 0 0 1 650 116" fill="none" stroke="#dc2626" stroke-width="2" />
  <polygon points="645,113 654,119 654,109" fill="#dc2626" />
  <text x="668" y="96" font-family="sans-serif" font-size="12" font-weight="700" fill="#dc2626">M</text>
  <!-- Cylinder B centered at (577, 176), RB = 27 (3:1 ratio) -->
  <!-- Left rope I at x=550 (595-45), Right rope H at x=604 (595+9) -->
  <line x1="550" y1="92" x2="550" y2="176" stroke="#0f172a" stroke-width="1.8" />
  <line x1="604" y1="92" x2="604" y2="176" stroke="#0f172a" stroke-width="1.8" />
  <text x="538" y="148" text-anchor="end" font-family="sans-serif" font-size="11" font-weight="700" fill="#334155">I</text>
  <text x="615" y="148" font-family="sans-serif" font-size="11" font-weight="700" fill="#334155">H</text>
  <circle cx="577" cy="176" r="27" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <circle cx="577" cy="176" r="3" fill="#0f172a" />
  <text x="577" y="168" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a">B</text>
  <!-- Load A hanging from B -->
  <line x1="577" y1="176" x2="577" y2="212" stroke="#0f172a" stroke-width="1.8" />
  <rect x="561" y="212" width="32" height="24" rx="2" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
  <text x="577" y="229" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803d">A</text>
  <text x="571" y="250" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">RC = 5rC, tầng trong rC, RB = 3rC</text>
</svg>
<div class="figure-caption">

Hình 15-1: Sơ đồ cơ hệ Chùm 2 (Đề 26/12/2013) và Chùm 3 (Đề 28/12/2011) cho bài thi bấm giờ Ngày 15

</div>
</div>

### Chùm 1 (8 phút — Đề `1721` Bài 3, Câu 6–9)

Dùng cơ hệ Hình 11-1 (bên phải) gồm hai thanh đồng chất $AB, BC$ có cùng chiều dài $l = 15\text{ cm}$ và khối lượng **mỗi thanh** $m_1 = 5\text{ kg}$, cùng đĩa tròn đặc $C$ khối lượng $m_2 = 10\text{ kg}$, bán kính $R = 5\text{ cm}$; lò xo độ cứng $K = 500\text{ N/m}$ (không biến dạng ở $\theta = 60^\circ$), $g = 10\text{ m/s}^2$. Thanh $AB$ quay ngược chiều KĐH từ $\theta_0 = 30^\circ$ với vận tốc góc $\omega$ tại vị trí $30^\circ < \theta < 60^\circ$.
- **Câu 1 (Đề `1721` — Câu 6):** Xác định vận tốc góc thanh $BC$ ($\bar{\omega}_1$) và đĩa $C$ ($\bar{\omega}_2$) theo $\omega$:
  - `a.` $\bar{\omega}_1 = -\omega;\; \bar{\omega}_2 = 8\omega\sin\theta$
  - `b.` $\bar{\omega}_1 = -\omega;\; \bar{\omega}_2 = -8\omega\sin\theta$
  - `c.` $\bar{\omega}_1 = -\omega;\; \bar{\omega}_2 = 6\omega\sin\theta$
  - `d.` $\bar{\omega}_1 = -\omega;\; \bar{\omega}_2 = -6\omega\sin\theta$
  - `e.` Các kết quả còn lại đều sai
- **Câu 2 (Đề `1721` — Câu 7):** Độ lớn vận tốc khối tâm $G$ của thanh $BC$ theo $\omega$:
  - `a.` $V_G = 0{,}075\omega\sqrt{5 - 4\cos 2\theta}$
  - `b.` $V_G = 0{,}1\omega\sqrt{5 - 4\cos 2\theta}$
  - `c.` $V_G = 0{,}075\omega\sqrt{1 + 8\sin^2\theta}$
  - `d.` Các kết quả còn lại đều sai
  - `e.` Câu A và câu C đúng
- **Câu 3 (Đề `1721` — Câu 8):** Tổng công ngoại lực sinh ra khi $AB$ quay từ $\theta = 30^\circ$ đến $\theta < 60^\circ$:
  - `a.` Các kết quả còn lại đều sai
  - `b.` $\sum A = 1{,}14 - 7{,}5\sin\theta + 22{,}5\cos\theta - 22{,}5\cos^2\theta\text{ (J)}$
  - `c.` $\sum A = 0{,}36 - 10\sin\theta + 40\cos\theta - 40\cos^2\theta\text{ (J)}$
  - `d.` $\sum A = 0{,}36 + 10\sin\theta + 40\cos\theta - 40\cos^2\theta\text{ (J)}$
  - `e.` $\sum A = 1{,}14 + 7{,}5\sin\theta + 22{,}5\cos\theta - 22{,}5\cos^2\theta\text{ (J)}$
- **Câu 4 (Đề `1721` — Câu 9):** Động năng của hệ tại vị trí $30^\circ < \theta < 60^\circ$:
  - `a.` $T = 0{,}2\left(\frac{23}{6} - \frac{7}{2}\cos 2\theta\right)\omega^2$
  - `b.` $T = 0{,}1125\left(\frac{21}{6} - \frac{7}{2}\cos 2\theta\right)\omega^2$
  - `c.` $T = 0{,}2\left(\frac{21}{6} - \frac{7}{2}\cos 2\theta\right)\omega^2$
  - `d.` $T = 0{,}1125\left(\frac{23}{6} - \frac{7}{2}\cos 2\theta\right)\omega^2$
  - `e.` Các kết quả còn lại đều sai

::: details Nhấn để xem đáp án và giải nhanh Chùm 1
- **Đáp án chuẩn:** `1c` — `2e` — `3b` — `4d`.
- **Câu 1 (`c`):** $x_C = 2l\cos\theta \implies \dot{x}_C = -2l\sin\theta\cdot\omega$ (đĩa $C$ tiến sang trái, nên quay ngược KĐH chiều dương $(+)$). Tốc độ góc đĩa: $\bar{\omega}_2 = \frac{2l\omega\sin\theta}{R} = \frac{30}{5}\omega\sin\theta = 6\omega\sin\theta$. Thanh $BC$ xoay góc $-\theta \implies \bar{\omega}_1 = -\omega$.
- **Câu 2 (`e`):** $V_G = \frac{l}{2}\omega\sqrt{5 - 4\cos 2\theta} = 0{,}075\omega\sqrt{5 - 4\cos 2\theta}$. Nhận xét $5 - 4\cos 2\theta = 5 - 4(1 - 2\sin^2\theta) = 1 + 8\sin^2\theta$ nên cả `a` và `c` đều đúng!
- **Câu 3 (`b`) & Câu 4 (`d`):** Xem chứng minh đầy đủ ở Ngày 11 và Ngày 12. Lưu ý giá trị chính xác của hằng số ở Câu 3 là $\frac{165}{8} - \frac{45\sqrt{3}}{4} \approx 1{,}1394\text{ J}$, đề gốc làm tròn thành $1{,}14$ (sai số $\approx 5{,}7\cdot 10^{-4}\text{ J}$, nên kiểm tra nhanh biên $\theta = 30^\circ$ trên `3b` cho $\approx 0{,}0006 \approx 0$, vẫn chọn chắc chắn `3b`).
:::

---

### Chùm 2 (9 phút — Đề `2` 26/12/2013, Bài I Câu 1–4)

Cơ hệ Hình 15-1 (bên trái): tải $A$ ($m_A = \frac{73}{8}\text{ kg}$) trên mặt nghiêng góc $\alpha = 30^\circ$, hệ số ma sát trượt động (và tĩnh) giữa tải $A$ và mặt dốc nghiêng bằng $f$ (lấy $f = 0{,}4$ ở Câu 6, 8 và $f = 0$ ở Câu 7; bỏ qua ma sát tại các vị trí khác), ròng rọc kép cố định $B$ ($m_B = 1\text{ kg}$, $R_B = 2r_B = 2r$, $\rho_B = \sqrt{2}r$), ròng rọc động trụ tròn đặc $C$ ($m_C = 2\text{ kg}$, $R_C = 2r$) treo tải $D$ ($m_D = 3\text{ kg}$), $g = 10\text{ m/s}^2$. Thả hệ từ trạng thái đứng yên. (Ký hiệu $\uparrow$ là $A$ đi lên dốc, $\downarrow$ là $A$ đi xuống dốc).
- **Câu 5:** Động năng cơ hệ $T$ theo $V_A$:
  - `a.` $T = \frac{7}{2}V_A^2$ $\quad$ `b.` $T = V_A^2$ $\quad$ `c.` $T = \frac{11}{2}V_A^2$ $\quad$ `d.` $T = 5V_A^2$
- **Câu 6:** Tổng công $\sum A$ theo độ dời $S_A$ khi $f = 0{,}4$:
  - `a.` $\sum A\uparrow = \left(\frac{20}{16} - 2\sqrt{3}\right)S_A$ $\quad$ `b.` $\sum A\downarrow = \left(\frac{530 - 292\sqrt{3}}{16}\right)S_A$ $\quad$ `c.` $\sum A\uparrow = \left(\frac{110 - 36\sqrt{3}}{16}\right)S_A$ $\quad$ `d.` Không có kết quả đúng
- **Câu 7:** Tổng công $\sum A$ theo độ dời $S_A$ khi $f = 0$:
  - `a.` $\sum A\uparrow = \frac{20}{16}S_A$ $\quad$ `b.` $\sum A\downarrow = \frac{530}{16}S_A$ $\quad$ `c.` $\sum A\uparrow = \frac{110}{16}S_A$ $\quad$ `d.` Không có kết quả đúng
- **Câu 8:** Gia tốc $a_A$ của tải $A$ khi $f = 0{,}4$:
  - `a.` $a_A\uparrow = \frac{110 - 36\sqrt{3}}{32}$ $\quad$ `b.` $a_A\uparrow = \frac{20}{32} - \sqrt{3}$ $\quad$ `c.` $a_A\downarrow = \frac{530 - 292\sqrt{3}}{160}$ $\quad$ `d.` $a_A = 0$

::: details Nhấn để xem đáp án và lời giải chi tiết Chùm 2
- **Đáp án chuẩn:** `5d` — `6b` — `7b` — `8c`.
- **Liên hệ động học (theo $V_A$):**
  Dây nối $A$ quấn vào vành ngoài $R_B = 2r \implies \omega_B = \frac{V_A}{2r}$. Dây nối xuống tầng trong $r_B = r$ đi xuống phía trái của ròng rọc động $C$ với tốc độ $v_2 = r\omega_B = \frac{V_A}{2}$; đầu phải của $C$ cố định trên trần $\implies V_C = V_D = \frac{v_2}{2} = \frac{V_A}{4}$ và $\omega_C = \frac{v_2}{2R_C} = \frac{V_A}{8r}$.
- **Câu 5 (`d`):**
  $J_B = m_B \rho_B^2 = 2r^2$; $\quad J_C = \frac{1}{2}m_C R_C^2 = \frac{1}{2}(2)(2r)^2 = 4r^2$.
  $$\begin{aligned} T &= \frac{1}{2}\left[\frac{73}{8}V_A^2 + 2r^2\left(\frac{V_A}{2r}\right)^2 + (2 + 3)\left(\frac{V_A}{4}\right)^2 + 4r^2\left(\frac{V_A}{8r}\right)^2\right] \\ &= \frac{1}{2}\left(\frac{73}{8} + \frac{1}{2} + \frac{5}{16} + \frac{1}{16}\right)V_A^2 = \frac{1}{2}\cdot 10\,V_A^2 = 5 V_A^2 \end{aligned}$$
- **Câu 7 (`b` — khi $f = 0$, kiểm chiều chuyển động trước):**
  Giả sử $A$ đi xuống $S_A$ thì $(C + D)$ đi lên $\frac{S_A}{4}$:
  $$\begin{aligned} \sum A\downarrow &= \left[m_A g\sin 30^\circ - \frac{(m_C + m_D)g}{4}\right]S_A \\ &= \left(\frac{365}{8} - \frac{50}{4}\right)S_A = \frac{265}{8}S_A = \frac{530}{16}S_A > 0 \end{aligned}$$
  Chứng tỏ hệ **chắc chắn chuyển động theo chiều $A$ đi xuống**!
- **Câu 6 (`b` — khi $f = 0{,}4$):**
  Trừ thêm công ma sát trượt khi $A$ đi xuống:
  $$\begin{aligned} A_{\text{ms}} &= -f m_A g\cos 30^\circ S_A \\ &= -0{,}4\left(\frac{73}{8}\right)(10)\frac{\sqrt{3}}{2}S_A = -\frac{292\sqrt{3}}{16}S_A \end{aligned}$$
  Suy ra $\sum A\downarrow = \frac{530 - 292\sqrt{3}}{16}S_A \approx 1{,}515 S_A > 0$ (hệ vẫn đủ lực thắng ma sát để $A$ trượt xuống!).
- **Câu 8 (`c`):**
  Từ $\dfrac{dT}{dt} = \sum N$:
  $$10 V_A a_A = \frac{530 - 292\sqrt{3}}{16} V_A \implies a_A\downarrow = \frac{530 - 292\sqrt{3}}{160}\text{ m/s}^2$$
:::

---

### Chùm 3 (8 phút — Đề `3` 28/12/2011, Câu 1–4)

Dùng cơ hệ Hình 15-1 (bên phải): puli kép cố định $C$ hai tầng có bán kính ngoài $R_C = 5r_C$ (quấn nhánh dây trái $I$) và tầng trong $r_C$ (quấn nhánh dây phải $H$); trụ động $B$ là **trụ tròn đặc đồng chất** ($J_B = \frac{1}{2}m_B R_B^2$) treo tải $A$. Cho $m_A = 100m_0$, $m_B = m_0$, $m_C = 11m_0$, $R_B = 3r_C$, $\rho_C^2 = \frac{55}{22}r_C^2$, mômen động cơ $M = 223{,}8m_0 g r_C$ (chiều quay cùng KĐH) tác động lên puli $C$. Gọi $V_A \uparrow$ là vận tốc đi lên của tải $A$:
- **Câu 9:** Vận tốc góc $\omega_B, \omega_C$ theo $V_A \uparrow$:
  - `a.` $\omega_B = \omega_C = \frac{V_A}{r_C}$ $\quad$ `b.` $\omega_B = \frac{2V_A}{r_C};\; \omega_C = \frac{V_A}{r_C}$ $\quad$ `c.` $\omega_B = \omega_C = \frac{V_A}{2r_C}$ $\quad$ `d.` Không có kết quả đúng
- **Câu 10:** Động năng $T$ của cơ hệ:
  - `a.` $T = 57m_0 V_A^2$ $\quad$ `b.` $T = 54{,}5m_0 V_A^2$ $\quad$ `c.` Không có kết quả đúng $\quad$ `d.` $T = 73{,}5m_0 V_A^2$
- **Câu 11:** Tổng công suất $N$ tác động vào cơ hệ:
  - `a.` $N = 20m_0 g V_A$ $\quad$ `b.` $N = 30m_0 g V_A$ $\quad$ `c.` $N = 10{,}9m_0 g V_A$ $\quad$ `d.` Không có kết quả đúng
- **Câu 12:** Gia tốc $W_A$ của tải $A$:
  - `a.` $W_A \uparrow = \frac{9}{10}$ $\quad$ `b.` $W_A \uparrow = \frac{30}{147}g$ $\quad$ `c.` Không có kết quả đúng $\quad$ `d.` $W_A \uparrow = \frac{20}{114}g$

::: details Nhấn để xem đáp án và giải nhanh Chùm 3
- **Đáp án chuẩn:** `9c` — `10b` — `11c` — `12c`.
- Xem lại chi tiết từng bước tính ở Bài 14-3:
  - Tốc độ nhánh trái $5r_C\omega_C$ đi lên, nhánh phải $r_C\omega_C$ đi xuống $\implies V_A = \frac{5-1}{2}r_C\omega_C = 2r_C\omega_C \implies \omega_C = \frac{V_A}{2r_C}$; $\omega_B = \frac{5+1}{2(3r_C)}r_C\omega_C = \frac{V_A}{2r_C}$ (`9c`).
  - $T = 54{,}5m_0 V_A^2$ (`10b`); $N = 10{,}9m_0 g V_A$ (`11c`).
  - Đạo hàm: $109m_0 V_A W_A = 10{,}9m_0 g V_A \implies W_A = 0{,}1 g$ hướng lên. Phương án `a` thiếu đơn vị $g$, hai phương án `b, d` sai trị số $\implies$ **chọn `12c`**!
:::

---

### Checklist 20 giây tự kiểm chống bẫy `e` trước khi tô phiếu trắc nghiệm

::: warning 4 bước kiểm tra cuối cùng trước khi khoanh đáp án Chùm Động Năng
1. **Kiểm tra điều kiện biên $\theta = \theta_0$:** Thế góc xuất phát vào $\sum A(\theta)$ xem có ra đúng $0$ hay không. Nếu khác $0$, loại ngay không cần tính lại!
2. **Kiểm tra dấu công lò xo:** Mọi lò xo đều cho $A_{\text{đh}} = \frac{1}{2}K(\Delta l_0^2 - \Delta l^2)$, nên hệ số của $\Delta l^2$ (thường là $\sin^2\theta$ hoặc $\cos^2\theta$) **bắt buộc mang dấu trừ $(-)$**.
3. **Kiểm tra thứ nguyên:** Động năng $T$ phải có thứ nguyên $[m L^2 \omega^2]$ hoặc $[m V^2]$; gia tốc góc $\varepsilon$ phải có thứ nguyên $\text{rad/s}^2$; gia tốc dài $W_A$ **bắt buộc phải nhân thêm $g$** nếu đề cho lực theo $m_0 g$ (bẫy thiếu $g$ ở Đề `28/12/2011` Câu 4a!).
4. **Kiểm tra chữ hỏi điểm nào ở Câu 4:** Nếu đề hỏi $V_B$ hoặc $v_G$ ở cơ cấu song phẳng, nhớ nhân với **khoảng cách tới tâm tức thời $IB$** (như $l\cos 45^\circ$ ở Đề `0002/2016`), tuyệt đối không lấy $l\omega$ một cách máy móc — đó là nguyên nhân hàng đầu dẫn tới đáp án `e`!
:::

---

::: tip Điều hướng lộ trình ôn thi AS1003
- Quay lại: [Tổng Quan Lộ Trình 20 Ngày](/on-thi/) | [Chặng 2 (Ngày 6–10): D'Alembert & Phản Lực Động](/on-thi/chang-2-dong-hoc)
- Tiếp tục về đích: [Chặng 4 (Ngày 16–20): Di Chuyển Khả Dĩ, Lagrange II & Sổ Tay A4](/on-thi/chang-4-ve-dich) | [Ngân Hàng Đề Thi Thật HCMUT](/on-thi/de-thi-that-hcmut)
:::
