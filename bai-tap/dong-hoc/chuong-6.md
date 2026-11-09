---
title: "Bài Tập Động Học - Chương 6: Hợp Chuyển Động Của Vật"
layout: doc
---

# Chương 6: Hợp Chuyển Động Của Vật Rắn

> [!NOTE] Cơ sở lý thuyết liên quan
> Xem lý thuyết chi tiết về hệ bánh răng vi sai, hành tinh và công thức Willis tại: **[Giáo trình Lý thuyết: Chương 4 – Chuyển Động Song Phẳng](/dong-hoc/chuong-4)**.

Hợp chuyển động của vật rắn nghiên cứu chuyển động của một vật thể tham gia đồng thời nhiều chuyển động thành phần (tịnh tiến và quay), với ứng dụng tiêu biểu là các cơ cấu truyền động hành tinh và bộ vi sai ô tô.

---

## 6.1. CƠ SỞ LÝ THUYẾT

### 6.1.1. Hợp các chuyển động quay quanh các trục song song
Khi một vật tham gia đồng thời hai chuyển động quay quanh hai trục song song cách nhau một khoảng $d$ với các vận tốc góc $\vec{\omega}_1$ và $\vec{\omega}_2$:
* **Nếu $\vec{\omega}_1 + \vec{\omega}_2 \ne 0$:** Chuyển động tổng hợp là chuyển động quay quanh một trục song song mới với vận tốc góc tổng hợp:
  $$\vec{\omega} = \vec{\omega}_1 + \vec{\omega}_2$$
* **Cặp quay ($\vec{\omega}_1 = -\vec{\omega}_2$):** Chuyển động tổng hợp là chuyển động **tịnh tiến** với vận tốc:
  $$v = \omega \cdot d$$

---

### 6.1.2. Cơ cấu bánh răng hành tinh & Công thức Willis
Cơ cấu bánh răng hành tinh gồm trục cần dẫn $H$ (mang trục quay của bánh răng hành tinh) và các bánh răng trung tâm (bánh răng mặt trời).
Áp dụng phương pháp đảo chuyển động (hãm cần dẫn $H$ lại bằng cách truyền cho toàn bộ cơ cấu một chuyển động quay phụ $-\omega_H$):
Trong hệ quy chiếu gắn với cần $H$, các bánh răng chỉ quay quanh các trục cố định. Do đó tỉ số truyền tương đối tuân theo **công thức Willis**:

$$i_{1k}^H = \frac{\omega_1 - \omega_H}{\omega_k - \omega_H} = (-1)^m \frac{Z_2 \cdot Z_4 \cdots Z_k}{Z_1 \cdot Z_3 \cdots Z_{k-1}}$$
trong đó:
- $m$ là số lần ăn khớp ngoài giữa các cặp bánh răng.
- $Z_i$ là số răng của bánh thứ $i$.
- $\omega_1, \omega_k$ là vận tốc góc tuyệt đối của bánh đầu và bánh cuối.
- $\omega_H$ là vận tốc góc của cần dẫn $H$.

---

## 6.2. BÀI GIẢI MẪU

### Thí dụ 11-1: Tính vận tốc góc cần dẫn trong cơ cấu hành tinh

**Đề bài:** Một cơ cấu bánh răng hành tinh phẳng gồm:
- Bánh răng mặt trời cố định 1 có $Z_1 = 40$ răng đứng yên ($\omega_1 = 0$).
- Cần dẫn $H$ quay quanh trục của bánh 1 với vận tốc góc $\omega_H = 15\text{ rad/s}$.
- Bánh răng hành tinh 2 có $Z_2 = 20$ răng gắn trên cần $H$ và ăn khớp ngoài với bánh 1, đồng thời ăn khớp trong với vành răng 3 có $Z_3 = 80$ răng.
Tìm vận tốc góc tuyệt đối $\omega_2$ của bánh hành tinh 2 và $\omega_3$ của vành răng 3.

**Bài giải:**

**1. Áp dụng công thức Willis cho cặp bánh 1 và 2:**
Bánh 1 ăn khớp ngoài với bánh 2 ($m = 1$):
$$\frac{\omega_1 - \omega_H}{\omega_2 - \omega_H} = -\frac{Z_2}{Z_1}$$

Vì bánh 1 cố định ($\omega_1 = 0$), thay số:
$$\frac{0 - 15}{\omega_2 - 15} = -\frac{20}{40} = -\frac{1}{2}$$
$$-30 = -(\omega_2 - 15) \implies \omega_2 - 15 = 30 \implies \omega_2 = 45\text{ rad/s}$$

**2. Áp dụng công thức Willis cho cặp bánh 1 và 3:**
Đường truyền từ bánh 1 qua bánh 2 (ăn khớp ngoài, $m=1$) rồi qua bánh 3 (ăn khớp trong, $m=0$). Tổng số lần ăn khớp ngoài là $m = 1$:
$$\frac{\omega_1 - \omega_H}{\omega_3 - \omega_H} = (-1)^1 \frac{Z_2}{Z_1} \cdot \frac{Z_3}{Z_2} = -\frac{Z_3}{Z_1}$$

Thay $\omega_1 = 0, \omega_H = 15\text{ rad/s}, Z_1 = 40, Z_3 = 80$:
$$\frac{0 - 15}{\omega_3 - 15} = -\frac{80}{40} = -2$$
$$-15 = -2(\omega_3 - 15) \implies 2\omega_3 - 30 = 15 \implies 2\omega_3 = 45 \implies \omega_3 = 22.5\text{ rad/s}$$

**Kết luận:**
- Vận tốc góc của bánh răng hành tinh: $\omega_2 = 45\text{ rad/s}$ (cùng chiều kim đồng hồ với cần $H$).
- Vận tốc góc của vành răng: $\omega_3 = 22.5\text{ rad/s}$ (cùng chiều kim đồng hồ).

---

## 6.3. BÀI TẬP TỰ RÈN LUYỆN (CÓ ĐÁP SỐ)

::: info Bài 6-1: Bộ vi sai đối xứng ô tô
Bộ vi sai ô tô gồm vỏ vi sai (cần $H$) quay với vận tốc góc $\omega_H = 60\text{ rad/s}$. Khi ô tô chạy trên đường vòng cong, bánh xe bên phải (nối trục với bánh răng bán trục 2) quay với vận tốc góc $\omega_2 = 70\text{ rad/s}$. Biết hai bánh răng bán trục 1 và 2 đối xứng cùng số răng ($Z_1 = Z_2$). Xác định vận tốc góc $\omega_1$ của bánh xe bên trái.
* **Đáp số:**
  Áp dụng công thức vi sai: $\omega_1 + \omega_2 = 2\omega_H \implies \omega_1 = 2(60) - 70 = 50\text{ rad/s}$.
:::
