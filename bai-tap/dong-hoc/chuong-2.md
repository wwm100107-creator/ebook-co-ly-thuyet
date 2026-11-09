---
title: "Bài Tập Động Học - Chương 2: Quay Quanh Trục Cố Định"
layout: doc
---

# Chương 2: Chuyển Động Quay Quanh Một Trục Cố Định

> [!NOTE] Cơ sở lý thuyết liên quan
> Xem lý thuyết chi tiết về góc quay, vận tốc góc, gia tốc góc và phân bố vận tốc trên vật quay tại: **[Giáo trình Lý thuyết: Chương 2 – Chuyển Động Cơ Bản của Vật Rắn](/dong-hoc/chuong-2)**.

---

## 2.1. CƠ SỞ LÝ THUYẾT

### 2.1.1. Phương trình chuyển động và các đặc trưng góc
Vật rắn quay quanh trục cố định $Oz$ có vị trí xác định bởi góc quay $\varphi = \varphi(t)$ ($\text{rad}$).
* **Vận tốc góc:**
  $$\omega = \dot{\varphi} = \frac{d\varphi}{dt} \quad (\text{rad/s})$$
  Quy đổi từ số vòng quay $n$ ($\text{vòng/phút}$):
  $$\omega = \frac{\pi n}{30}$$
* **Gia tốc góc:**
  $$\varepsilon = \dot{\omega} = \ddot{\varphi} = \frac{d\omega}{dt} \quad (\text{rad/s}^2)$$
* **Tính chất quay:**
  - Quay nhanh dần: $\omega$ và $\varepsilon$ cùng dấu ($\omega \cdot \varepsilon > 0$).
  - Quay chậm dần: $\omega$ và $\varepsilon$ trái dấu ($\omega \cdot \varepsilon < 0$).
  - Quay biến đổi đều: $\varepsilon = \text{const} \implies \omega = \omega_0 + \varepsilon t, \quad \varphi = \varphi_0 + \omega_0 t + \frac{1}{2}\varepsilon t^2$.

---

### 2.1.2. Vận tốc và gia tốc của một điểm trên vật quay
Điểm $M$ trên vật quay cách trục quay một khoảng cách bán kính $R$:
* **Vận tốc dài:**
  $$v = \omega \cdot R$$
  Vectơ $\vec{v} = \vec{\omega} \times \vec{r}$, vuông góc với mặt phẳng chứa trục quay và điểm $M$.
* **Gia tốc của điểm $M$:**
  - Gia tốc tiếp tuyến: $a_\tau = |\varepsilon| \cdot R$ (tiếp tuyến quỹ đạo tròn).
  - Gia tốc pháp tuyến (hướng tâm): $a_n = \omega^2 R = \frac{v^2}{R}$ (hướng về trục quay).
  - Gia tốc toàn phần:
    $$a = \sqrt{a_\tau^2 + a_n^2} = R\sqrt{\varepsilon^2 + \omega^4}$$
  - Góc nghiêng $\mu$ giữa gia tốc toàn phần và bán kính hướng tâm:
    $$\tan\mu = \frac{a_\tau}{a_n} = \frac{|\varepsilon|}{\omega^2}$$

---

### 2.1.3. Hệ truyền động cơ khí (Bánh răng, đai, xích)

<div class="figure-container">

<img src="/figures/bai-tap/dong-hoc/hinh_7_3.svg" alt="Hình 7-3: Các hệ truyền động cơ khí" style="max-width: 520px; width: 100%; margin: 0 auto; display: block;" />

<div class="figure-caption">

Hình 7-3: Sơ đồ truyền động bánh răng và đai truyền

</div>

</div>

Khi hai bánh truyền động tiếp xúc không trượt tại điểm ăn khớp (vận tốc dài tiếp tuyến bằng nhau: $v_1 = v_2$):
* **Tỉ số truyền giữa hai trục:**
  $$i_{12} = \frac{\omega_1}{\omega_2} = \pm \frac{R_2}{R_1} = \pm \frac{Z_2}{Z_1}$$
  - Dấu $(+)$ đối với đai truyền thẳng hoặc ăn khớp trong (hai bánh quay cùng chiều).
  - Dấu $(-)$ đối với đai chéo hoặc ăn khớp ngoài (hai bánh quay ngược chiều).
* **Truyền động thanh răng – bánh răng:** Vận tốc tịnh tiến của thanh răng bằng vận tốc dài tiếp tuyến của vòng tròn ăn khớp:
  $$v = R \cdot \omega$$

---

## 2.2. BÀI GIẢI MẪU

### Thí dụ 7-1: Hãm trục máy quay chậm dần đều

**Đề bài:** Một trục máy đang quay đều với tốc độ $n_0 = 600\text{ vòng/phút}$ thì bị ngắt điện hãm phanh lại. Sau khoảng thời gian $t_1 = 20\text{ s}$ trục dừng hẳn lại. Coi chuyển động hãm là quay chậm dần đều.
1. Tính gia tốc góc $\varepsilon$ và số vòng quay $N$ mà trục đã quay được từ khi hãm đến lúc dừng.
2. Tại thời điểm $t = 10\text{ s}$, tính vận tốc và gia tốc toàn phần của một điểm trên bề mặt trục có bán kính $R = 10\text{ cm}$.

**Bài giải:**

**1. Tính vận tốc góc ban đầu và gia tốc góc:**
Vận tốc góc lúc bắt đầu hãm:
$$\omega_0 = \frac{\pi n_0}{30} = \frac{\pi \cdot 600}{30} = 20\pi \approx 62.83\text{ rad/s}$$

Vì trục quay chậm dần đều và dừng lại ($\omega_1 = 0$) tại $t_1 = 20\text{ s}$:
$$\omega_1 = \omega_0 + \varepsilon t_1 = 0 \implies \varepsilon = -\frac{\omega_0}{t_1} = -\frac{20\pi}{20} = -\pi \approx -3.14\text{ rad/s}^2$$

Góc quay tổng cộng đến khi dừng hẳn:
$$\varphi = \omega_0 t_1 + \frac{1}{2}\varepsilon t_1^2 = 20\pi(20) + \frac{1}{2}(-\pi)(20)^2 = 400\pi - 200\pi = 200\pi\text{ (rad)}$$

Số vòng quay thực hiện được:
$$N = \frac{\varphi}{2\pi} = \frac{200\pi}{2\pi} = 100\text{ vòng}$$

**2. Trạng thái động học của điểm $M$ tại $t = 10\text{ s}$:**
Vận tốc góc tại thời điểm $t = 10\text{ s}$:
$$\omega = \omega_0 + \varepsilon t = 20\pi - \pi(10) = 10\pi \approx 31.42\text{ rad/s}$$

Vận tốc dài của điểm $M$ ($R = 0.1\text{ m}$):
$$v = \omega R = 10\pi \times 0.1 = \pi \approx 3.14\text{ m/s}$$

Các thành phần gia tốc của điểm $M$:
$$a_\tau = |\varepsilon| R = \pi \times 0.1 = 0.1\pi \approx 0.314\text{ m/s}^2$$
$$a_n = \omega^2 R = (10\pi)^2 \times 0.1 = 10\pi^2 \approx 98.7\text{ m/s}^2$$

Gia tốc toàn phần:
$$a = \sqrt{a_\tau^2 + a_n^2} = \sqrt{(0.1\pi)^2 + (10\pi^2)^2} \approx 98.7\text{ m/s}^2$$

---

## 2.3. BÀI TẬP TỰ RÈN LUYỆN (CÓ ĐÁP SỐ)

::: info Bài 2-1: Hệ bánh răng truyền động nhiều cấp
Hệ truyền động gồm bánh răng 1 ($Z_1 = 20$ răng) quay với tốc độ $n_1 = 1200\text{ vòng/phút}$ ăn khớp ngoài với bánh 2 ($Z_2 = 60$ răng). Trục của bánh 2 gắn đồng trục với bánh 3 ($Z_3 = 25$ răng) ăn khớp trong với vành răng 4 ($Z_4 = 100$ răng). Tìm tốc độ quay của vành răng 4.
* **Đáp số:** $i_{14} = i_{12} \cdot i_{34} = \left(-\frac{60}{20}\right) \times \left(+\frac{100}{25}\right) = -3 \times 4 = -12 \implies n_4 = \frac{1200}{-12} = -100\text{ vòng/phút}$ (quay ngược chiều bánh 1).
:::
