# Chương 3: Hợp Chuyển Động Điểm

Hợp chuyển động điểm khảo sát chuyển động của một điểm đồng thời đối với hai hệ quy chiếu: một hệ quy chiếu được chọn làm cố định và một hệ quy chiếu chuyển động (hệ quy chiếu động).

---

## 3.1. Các Khái Niệm Cơ Bản

Xét hệ quy chiếu cố định $Oxyz$ và hệ quy chiếu động $O'x'y'z'$ chuyển động đối với hệ $Oxyz$. Một điểm $M$ chuyển động trong không gian.

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_3_1.svg" alt="Hình 3-1: Các hệ quy chiếu trong hợp chuyển động điểm" style="max-height: 280px;" />

<div class="figure-caption">

Hình 3-1: Hệ quy chiếu cố định $Oxyz$ và hệ quy chiếu động $O'x'y'z'$

</div>

</div>

### 1. Chuyển Động Tuyệt Đối
Là chuyển động của điểm $M$ đối với hệ quy chiếu cố định $Oxyz$.
- Quỹ đạo, vận tốc và gia tốc của điểm trong chuyển động này được gọi là **quỹ đạo tuyệt đối**, **vận tốc tuyệt đối** $\vec{v}_a$ và **gia tốc tuyệt đối** $\vec{a}_a$.

### 2. Chuyển Động Tương Đối
Là chuyển động của điểm $M$ đối với hệ quy chiếu động $O'x'y'z'$ (xem hệ $O'x'y'z'$ như đứng yên).
- Quỹ đạo, vận tốc và gia tốc trong chuyển động này được gọi là **quỹ đạo tương đối**, **vận tốc tương đối** $\vec{v}_r$ và **gia tốc tương đối** $\vec{a}_r$.

### 3. Chuyển Động Theo
Là chuyển động của hệ quy chiếu động $O'x'y'z'$ (hoặc vật mang hệ trục đó) đối với hệ quy chiếu cố định $Oxyz$.
- Xét điểm cố định $M'$ thuộc hệ động trùng với vị trí của điểm $M$ tại thời điểm $t$ đang xét. Vận tốc và gia tốc của điểm $M'$ đối với hệ cố định được gọi là **vận tốc theo** $\vec{v}_e$ và **gia tốc theo** $\vec{a}_e$ của điểm $M$ tại thời điểm đó.
- Vận tốc góc và gia tốc góc của hệ động đối với hệ cố định được gọi là vận tốc góc theo $\vec{\omega}_e$ và gia tốc góc theo $\vec{\varepsilon}_e$.

---

## 3.2. Các Định Lý Cơ Bản

Bán kính véctơ của điểm $M$ đối với gốc cố định $O$ liên hệ với bán kính véctơ đối với gốc động $O'$:

$$\vec{r}(t) = \vec{r}_{O'}(t) + \vec{r}'(t) \tag{3-1}$$

trong đó $\vec{r}' = x'\vec{i}' + y'\vec{j}' + z'\vec{k}'$ là vị trí của $M$ trong hệ động.

---

### 3.2.1. Định Lý Hợp Vận Tốc

::: tip Định lý hợp vận tốc
Tại mỗi thời điểm, véctơ vận tốc tuyệt đối của điểm bằng tổng hình học của véctơ vận tốc theo và véctơ vận tốc tương đối:

$$\vec{v}_a = \vec{v}_e + \vec{v}_r \tag{3-2}$$
:::

- **Phương pháp hình bình hành vận tốc:** $\vec{v}_a$ là đường chéo của hình bình hành dựng trên hai cạnh $\vec{v}_e$ và $\vec{v}_r$.
- Độ lớn của vận tốc tuyệt đối:
  $$v_a = \sqrt{v_e^2 + v_r^2 + 2 v_e v_r \cos(\widehat{\vec{v}_e, \vec{v}_r})} \tag{3-3}$$

---

### 3.2.2. Định Lý Hợp Gia Tốc (Định Lý Coriolis)

Lấy đạo hàm của công thức vận tốc $\vec{v}_a = \vec{v}_e + \vec{v}_r$ theo thời gian:

::: tip Định lý Coriolis
Tại mỗi thời điểm, véctơ gia tốc tuyệt đối của điểm bằng tổng hình học của gia tốc theo, gia tốc tương đối và gia tốc Coriolis (gia tốc phụ):

$$\vec{a}_a = \vec{a}_e + \vec{a}_r + \vec{a}_c \tag{3-4}$$
:::

Trong đó:
- $\vec{a}_e$: Gia tốc theo (gia tốc của điểm trùng $M'$ thuộc hệ động). Nếu hệ động quay với vận tốc góc $\vec{\omega}_e$, gia tốc góc $\vec{\varepsilon}_e$ quanh trục qua $O'$ thì:
  $$\vec{a}_e = \vec{a}_{O'} + (\vec{\varepsilon}_e \times \vec{r}') + \vec{\omega}_e \times (\vec{\omega}_e \times \vec{r}') = \vec{a}_{O'} + \vec{a}_e^t + \vec{a}_e^n$$
- $\vec{a}_r$: Gia tốc tương đối ($\vec{a}_r = \vec{a}_r^t + \vec{a}_r^n$).
- $\vec{a}_c$: **Gia tốc Coriolis** (hay gia tốc phụ, gia tốc quán tính phối hợp).

<div class="figure-container">

<img src="/figures/dong-hoc/hinh_3_2.svg" alt="Hình 3-2: Xác định véctơ gia tốc Coriolis" style="max-height: 270px;" />

<div class="figure-caption">

Hình 3-2: Quy tắc xác định phương chiều của gia tốc Coriolis $\vec{a}_c$

</div>

</div>

---

### 3.2.3. Các Đặc Trưng Của Gia Tốc Coriolis

Biểu thức xác định gia tốc Coriolis:

$$\vec{a}_c = 2(\vec{\omega}_e \times \vec{v}_r) \tag{3-5}$$

1. **Phương:** Vuông góc với mặt phẳng chứa véctơ vận tốc góc theo $\vec{\omega}_e$ và véctơ vận tốc tương đối $\vec{v}_r$.
2. **Chiều:** Xác định theo quy tắc vặn nút chai quay từ $\vec{\omega}_e$ sang $\vec{v}_r$ theo góc nhỏ hơn, hoặc theo quy tắc bàn tay phải (ngón cái chỉ chiều $\vec{a}_c$).
   - *Quy tắc Jukovsky (khi $\vec{\omega}_e \perp \vec{v}_r$):* Chiếu véctơ $\vec{v}_r$ lên mặt phẳng vuông góc với $\vec{\omega}_e$, sau đó quay hình chiếu ấy đi một góc $90^\circ$ theo chiều quay của $\vec{\omega}_e$, ta được chiều của $\vec{a}_c$.
3. **Độ lớn:**
   $$a_c = 2 \omega_e v_r \sin(\widehat{\vec{\omega}_e, \vec{v}_r}) \tag{3-6}$$

#### Các Trường Hợp Gia Tốc Coriolis Bằng Không ($\vec{a}_c = \vec{0}$):
- Hệ quy chiếu động chuyển động tịnh tiến ($\vec{\omega}_e = \vec{0}$).
- Vận tốc tương đối của điểm bằng không tại thời điểm khảo sát ($\vec{v}_r = \vec{0}$).
- Véctơ vận tốc tương đối song song cùng phương với trục quay của hệ quy chiếu động ($\vec{v}_r \parallel \vec{\omega}_e \implies \sin 0^\circ = 0$).

Khi $\vec{a}_c = \vec{0}$, định lý hợp gia tốc trở thành dạng đơn giản: $\vec{a}_a = \vec{a}_e + \vec{a}_r$.
