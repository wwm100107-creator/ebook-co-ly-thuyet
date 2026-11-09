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


---

## 3.3. Các Thí Dụ Áp Dụng (Bài Tập Mẫu)

::: tip Ý NGHĨA PHƯƠNG PHÁP
Để giải quyết bài toán hợp chuyển động của điểm:
1. Xác định điểm khảo sát $M$, hệ quy chiếu cố định và hệ quy chiếu động.
2. Phân biệt rõ ba chuyển động: chuyển động tương đối (điểm đối với hệ động), chuyển động theo (điểm thuộc hệ động trùng với điểm khảo sát tại thời điểm đó đối với hệ cố định), và chuyển động tuyệt đối (điểm đối với hệ cố định).
3. Thiết lập phương trình vectơ vận tốc: $\vec{v}_a = \vec{v}_e + \vec{v}_r$ và vectơ gia tốc: $\vec{a}_a = \vec{a}_e + \vec{a}_r + \vec{a}_c$.
4. Chọn hệ trục tọa độ thích hợp để chiếu các phương trình vectơ tìm các đại lượng chưa biết.
:::

### Thí dụ 3-1: Bài toán chuyển động của thuyền qua sông

**Đề bài:**
Hai bờ của một con sông thẳng song song với nhau và cách nhau một khoảng bằng $h$. Dòng nước chảy với vận tốc $v$ không đổi theo phương song song với bờ. Một người chèo thuyền sang sông với vận tốc tương đối đối với nước là $u = \text{const}$.
1. Xác định hướng của vận tốc tương đối $\vec{u}$ để thời gian thuyền sang sông là ngắn nhất.
2. Với điều kiện thời gian ngắn nhất đó, xác định vị trí cập bến của thuyền ở bờ bên kia.

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_3_6.svg" alt="Hình 3-6: Hợp vận tốc chuyển động của thuyền qua sông" style="max-width: 580px;" />
  <div class="figure-caption">Hình 3-6: Sơ đồ hợp vận tốc thuyền qua sông: vận tốc tương đối $\vec{v}_r = \vec{u}$, vận tốc theo $\vec{v}_e = \vec{v}$ và vận tốc tuyệt đối $\vec{v}_a$</div>
</div>

**Bài giải:**

- **Hệ cơ học:** Điểm khảo sát là chiếc thuyền.
- **Hệ quy chiếu:**
  - Hệ quy chiếu động: gắn liền với dòng nước chuyển động tịnh tiến với vận tốc dòng chảy $\vec{v}_e = \vec{v}$.
  - Hệ quy chiếu cố định: gắn liền với bờ sông. Gốc $O$ tại điểm xuất phát, trục $Ox$ dọc theo bờ sông theo chiều dòng nước, trục $Oy$ vuông góc với bờ hướng sang bờ bên kia (Hình 3-6).

**1. Hợp vận tốc:**
Theo định lý hợp vận tốc:
$$\vec{v}_a = \vec{v}_e + \vec{v}_r$$
trong đó:
- $\vec{v}_e$ có độ lớn $v$, hướng dọc theo trục $Ox$.
- $\vec{v}_r$ có độ lớn $u$, hợp với trục $Oy$ một góc $\alpha$.

Chiếu phương trình vectơ lên hai trục tọa độ $Ox$ và $Oy$:
$$v_{ax} = \dot{x} = v + u \sin\alpha$$
$$v_{ay} = \dot{y} = u \cos\alpha$$

**2. Thời gian sang sông:**
Tích phân theo phương trình trục $Oy$ với điều kiện ban đầu $y(0) = 0$:
$$y(t) = (u \cos\alpha) t$$
Khi thuyền sang tới bờ bên kia thì $y(t) = h$:
$$h = (u \cos\alpha) t \implies t = \frac{h}{u \cos\alpha}$$

Để thời gian sang sông $t$ là ngắn nhất ($t_{\min}$), mẫu số $u \cos\alpha$ phải đạt cực đại:
$$\cos\alpha = 1 \implies \alpha = 0$$
Nghĩa là mũi thuyền phải luôn hướng vuông góc với dòng sông.
Khi đó thời gian sang sông ngắn nhất là:
$$t_{\min} = \frac{h}{u}$$

**3. Vị trí cập bến của thuyền:**
Khi $\alpha = 0$, ta có $\sin\alpha = 0 \implies v_{ax} = v$.
Quãng đường thuyền bị dòng nước đẩy trôi xuôi theo dòng dọc trục $Ox$ là:
$$x = v \cdot t_{\min} = \frac{v}{u} h$$
Như vậy, thuyền cập bến bờ bên kia tại điểm cách điểm đối diện điểm xuất phát một khoảng xuôi dòng là $x = \frac{v}{u} h$.

---

### Thí dụ 3-2: Chuyển động của hạt khí trong rãnh cánh rotor máy nén khí

**Đề bài:**
Một rotor máy nén khí quay đều quanh trục cố định $O$ vuông góc với mặt phẳng hình vẽ với vận tốc góc $\omega = \text{const}$. Trong rotor có các ống dẫn khí cong $AB$. Không khí chuyển động dọc theo rãnh với vận tốc tương đối có trị số không đổi $v_r = \text{const}$.
Tại điểm $C$ trên ống, bán kính $OC = r$, bán kính cong của đường rãnh tại $C$ là $\rho$, góc giữa pháp tuyến của rãnh tại $C$ và bán kính $OC$ là $\beta$.
Hãy xác định hình chiếu của vận tốc tuyệt đối và gia tốc tuyệt đối của một phần tử khí tại $C$.

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_3_7.svg" alt="Hình 3-7: Chuyển động của phần tử khí trong rãnh rotor máy nén" style="max-width: 580px;" />
  <div class="figure-caption">Hình 3-7: Phân tích vận tốc, gia tốc theo, tương đối và gia tốc Coriolis $\vec{a}_c$ của hạt khí trong rãnh rotor</div>
</div>

**Bài giải:**

- **Điểm khảo sát:** Phần tử khí tại vị trí $C$.
- **Hệ quy chiếu:**
  - Hệ động: gắn liền với rotor quay đều với vận tốc góc $\omega$.
  - Hệ cố định: gắn liền với vỏ máy.

**1. Bài toán vận tốc:**
Theo định lý hợp vận tốc:
$$\vec{v}_a = \vec{v}_e + \vec{v}_r$$
- Vận tốc tương đối $\vec{v}_r$: tiếp tuyến với rãnh tại $C$, độ lớn $v_r$.
- Vận tốc theo $\vec{v}_e$: do rotor quay quanh $O$, điểm $C$ có $v_e = r \omega$, phương vuông góc với bán kính $OC$.
Hai vectơ $\vec{v}_e$ và $\vec{v}_r$ hợp với nhau một góc $\beta$ (Hình 3-7).

Độ lớn của vận tốc tuyệt đối:
$$v_a = \sqrt{v_e^2 + v_r^2 + 2 v_e v_r \cos\beta} = \sqrt{r^2 \omega^2 + v_r^2 + 2 r \omega v_r \cos\beta}$$

**2. Bài toán gia tốc:**
Theo định lý Coriolis:
$$\vec{a}_a = \vec{a}_e + \vec{a}_r + \vec{a}_c$$
Phân tích từng thành phần gia tốc:
- **Gia tốc theo $\vec{a}_e$:** Rotor quay đều ($\varepsilon_e = 0$) nên gia tốc tiếp theo triệt tiêu $a_e^t = 0$. Gia tốc pháp theo:
  $$a_e = a_e^n = r \omega^2$$
  hướng từ $C$ về tâm quay $O$.
- **Gia tốc tương đối $\vec{a}_r$:** Vì hạt khí chuyển động dọc rãnh với vận tốc tương đối không đổi $v_r = \text{const}$ nên gia tốc tiếp tương đối $a_r^t = 0$. Gia tốc pháp tương đối:
  $$a_r = a_r^n = \frac{v_r^2}{\rho}$$
  hướng dọc theo pháp tuyến chính của rãnh về tâm cong.
- **Gia tốc Coriolis $\vec{a}_c$:**
  Vì trục quay vuông góc với mặt phẳng chứa rãnh nên $\vec{\omega} \perp \vec{v}_r$. Độ lớn:
  $$a_c = 2 \omega v_r$$
  Chiều của $\vec{a}_c$ xác định bằng cách quay vectơ $\vec{v}_r$ một góc $90^\circ$ theo chiều quay của $\vec{\omega}$.

Chiếu phương trình vectơ lên các trục vuông góc tại $C$, ta nhận được các hình chiếu của gia tốc tuyệt đối:
$$a_{ax} = (2\omega v_r - \frac{v_r^2}{\rho}) \sin\beta$$
$$a_{ay} = -r\omega^2 - (2\omega v_r - \frac{v_r^2}{\rho}) \cos\beta$$

---

### Thí dụ 3-3: Cơ cấu cu-lít (Khảo sát tay quay và cần lắc)

**Đề bài:**
Khảo sát chuyển động của cơ cấu cu-lít như Hình 3-8. Tay quay $OA = 0{,}2\,\text{m}$ quay đều quanh trục cố định $O$ với vận tốc góc $\omega = 4\pi\,\text{rad/s}$. Con chạy $A$ được nối khớp với đầu tay quay $OA$ và trượt dọc theo rãnh của cần lắc $O_1B$. Cần lắc $O_1B$ quay quanh trục cố định $O_1$.
Tại thời điểm khảo sát, tay quay vuông góc với đường nối tâm $OO_1$ ($\widehat{AOO_1} = 90^\circ$), góc nghiêng của cần lắc $\widehat{AO_1O} = 60^\circ$.
Xác định:
1. Vận tốc góc $\omega_1$ và gia tốc góc $\varepsilon_1$ của cần lắc $O_1B$.
2. Vận tốc tương đối $v_r$ và gia tốc tương đối $a_r$ của con chạy đối với rãnh cần lắc.
3. Gia tốc Coriolis $\vec{a}_c$.

<div class="figure-box">
  <img src="/figures/dong-hoc/hinh_3_8.svg" alt="Hình 3-8: Cơ cấu cu-lít truyền động giữa tay quay và cần lắc" style="max-width: 580px;" />
  <div class="figure-caption">Hình 3-8: Sơ đồ cơ cấu cu-lít: tay quay $OA$, cần lắc $O_1B$ và con chạy $A$</div>
</div>

**Bài giải:**

- **Điểm khảo sát:** Điểm $A$ trên con chạy.
- **Hệ quy chiếu:**
  - Hệ động: gắn liền với cần lắc $O_1B$ đang quay quanh $O_1$.
  - Hệ cố định: gắn liền với giá đỡ và các trục quay $O, O_1$.
- **Chiều dài hình học:**
  Trong tam giác vuông $O_1OA$ tại $O$:
  $$O_1A = \frac{OA}{\sin 60^\circ} = \frac{0{,}2}{\frac{\sqrt{3}}{2}} = \frac{0{,}4}{\sqrt{3}}\,\text{m}$$

**1. Bài toán vận tốc:**
Định lý hợp vận tốc:
$$\vec{v}_a = \vec{v}_e + \vec{v}_r$$
- Vận tốc tuyệt đối $\vec{v}_a$: của điểm $A$ do tay quay $OA$ quay đều quanh $O$:
  $$v_a = OA \cdot \omega = 0{,}2 \cdot 4\pi = 0{,}8\pi\,\text{m/s}$$
  Phương vuông góc với $OA$ (nằm ngang).
- Vận tốc theo $\vec{v}_e$: của điểm thuộc cần lắc trùng với $A$:
  $$v_e = O_1A \cdot \omega_1$$
  Phương vuông góc với cần lắc $O_1B$.
- Vận tốc tương đối $\vec{v}_r$: trượt dọc theo rãnh cần lắc $O_1B$.

Tam giác vận tốc tạo thành tam giác vuông vì $\vec{v}_e \perp \vec{v}_r$:
$$v_e = v_a \cos 30^\circ = 0{,}8\pi \cdot \frac{\sqrt{3}}{2} = 0{,}4\pi \sqrt{3}\,\text{m/s}$$
$$v_r = v_a \sin 30^\circ = 0{,}8\pi \cdot 0{,}5 = 0{,}4\pi\,\text{m/s}$$

Vận tốc góc của cần lắc $O_1B$:
$$\omega_1 = \frac{v_e}{O_1A} = \frac{0{,}4\pi \sqrt{3}}{0{,}4 / \sqrt{3}} = 3\pi\,\text{rad/s}$$

**2. Bài toán gia tốc:**
Định lý hợp gia tốc (Coriolis):
$$\vec{a}_a = \vec{a}_e^n + \vec{a}_e^t + \vec{a}_r^n + \vec{a}_r^t + \vec{a}_c$$
trong đó:
- Tay quay $OA$ quay đều quanh $O$ nên gia tốc tuyệt đối chỉ có thành phần hướng tâm:
  $$a_a = a_a^n = OA \cdot \omega^2 = 0{,}2 \cdot (4\pi)^2 = 3{,}2\pi^2\,\text{m/s}^2$$
  hướng từ $A$ về $O$.
- Rãnh thẳng nên bán kính cong $\rho = \infty \implies a_r^n = 0, \; \vec{a}_r = \vec{a}_r^t$ hướng dọc theo cần lắc $O_1B$.
- Gia tốc hướng tâm theo của điểm $A$ đối với $O_1$:
  $$a_e^n = O_1A \cdot \omega_1^2 = \frac{0{,}4}{\sqrt{3}} \cdot (3\pi)^2 = 1{,}2\sqrt{3}\pi^2\,\text{m/s}^2$$
  hướng từ $A$ về $O_1$.
- Gia tốc tiếp theo:
  $$a_e^t = O_1A \cdot \varepsilon_1$$
  vuông góc với cần lắc $O_1B$.
- Gia tốc Coriolis:
  $$a_c = 2 \omega_1 v_r = 2 \cdot (3\pi) \cdot (0{,}4\pi) = 2{,}4\pi^2\,\text{m/s}^2$$
  Chiều của $\vec{a}_c$ thu được bằng cách quay $\vec{v}_r$ một góc $90^\circ$ theo chiều của $\omega_1$.

Chiếu phương trình gia tốc lên phương vuông góc với cần lắc $O_1B$:
$$a_a \cos 60^\circ = a_e^t + a_c$$
$$\implies a_e^t = a_a \cos 60^\circ - a_c = 3{,}2\pi^2 \cdot 0{,}5 - 2{,}4\pi^2 = 1{,}6\pi^2 - 2{,}4\pi^2 = -0{,}8\pi^2\,\text{m/s}^2$$
Dấu trừ chỉ ra rằng vectơ $\vec{a}_e^t$ ngược chiều giả thiết, tức là cần lắc $O_1B$ đang quay chậm dần.

Gia tốc góc của cần lắc:
$$\varepsilon_1 = \frac{|a_e^t|}{O_1A} = \frac{0{,}8\pi^2}{0{,}4 / \sqrt{3}} = 2\sqrt{3}\pi^2\,\text{rad/s}^2$$

Chiếu phương trình lên phương dọc theo cần lắc $O_1B$ để tìm gia tốc tương đối:
$$a_r = a_a \sin 60^\circ - a_e^n = 3{,}2\pi^2 \cdot \frac{\sqrt{3}}{2} - 1{,}2\sqrt{3}\pi^2 = 1{,}6\sqrt{3}\pi^2 - 1{,}2\sqrt{3}\pi^2 = 0{,}4\sqrt{3}\pi^2\,\text{m/s}^2$$
