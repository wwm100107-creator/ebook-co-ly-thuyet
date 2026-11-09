# Chương 3: Các Định Lý Tổng Quát Của Động Lực Học

Các định lý tổng quát của động lực học biểu thị mối liên hệ trực tiếp giữa các đặc trưng động lực học của toàn bộ cơ hệ (khối tâm, động lượng, mômen động lượng, động năng) với hệ ngoại lực tác dụng, loại trừ hoàn toàn các nội lực phức tạp.

---

## 3.1. Các Đặc Trưng Hình Học Của Khối Cơ Hệ và Vật Rắn

### 3.1.1. Khối Tâm Của Cơ Hệ
Khối lượng toàn phần của cơ hệ: $M = \sum_{k=1}^n m_k$.

Bán kính véctơ khối tâm $C$:

$$\vec{r}_C = \frac{\displaystyle\sum_{k=1}^n m_k \vec{r}_k}{M} \tag{3-1}$$

Tọa độ khối tâm trong hệ tọa độ Descartes:

$$x_C = \frac{\sum m_k x_k}{M}; \quad y_C = \frac{\sum m_k y_k}{M}; \quad z_C = \frac{\sum m_k z_k}{M} \tag{3-2}$$

---

### 3.1.2. Mômen Quán Tính Đối Với Trục

::: tip Định nghĩa
Mômen quán tính của cơ hệ (hoặc vật rắn) đối với trục $\Delta$ là đại lượng đặc trưng cho **mức độ quán tính của vật thể trong chuyển động quay** quanh trục đó:

$$J_{\Delta} = \sum_{k=1}^n m_k h_k^2 = \iiint_V h^2 \, dm \tag{3-3}$$

trong đó $h_k$ là khoảng cách vuông góc từ chất điểm $m_k$ đến trục $\Delta$. Đơn vị: $\text{kg}\cdot\text{m}^2$.
:::

- **Bán kính quán tính:** Đại lượng $i_{\Delta}$ xác định bởi công thức:
  $$i_{\Delta} = \sqrt{\frac{J_{\Delta}}{M}} \implies J_{\Delta} = M \cdot i_{\Delta}^2 \tag{3-4}$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_1.svg" alt="Hình 3-1: Mômen quán tính của vật rắn đối với trục" style="max-height: 270px;" />

<div class="figure-caption">

Hình 3-1: Khoảng cách $h$ từ phần tử khối lượng đến trục quay

</div>

</div>

---

### 3.1.3. Định Lý Dời Trục Song Song Huygens – Steiner

::: tip Định lý Huygens – Steiner
Mômen quán tính của vật rắn đối với một trục $\Delta$ bất kỳ bằng mômen quán tính của vật đối với trục $\Delta_C$ song song đi qua khối tâm cộng với tích số giữa khối lượng của vật với bình phương khoảng cách $d$ giữa hai trục:

$$J_{\Delta} = J_{\Delta_C} + M \cdot d^2 \tag{3-5}$$
:::

### 3.1.4. Mômen Quán Tính Của Một Số Vật Thể Đồng Chất Thường Gặp
1. **Thanh mảnh dài $l$, khối lượng $M$:**
   - Đối với trục trung tâm vuông góc với thanh: $J_C = \frac{1}{12} M l^2$.
   - Đối với trục vuông góc đi qua đầu thanh: $J_O = J_C + M\left(\frac{l}{2}\right)^2 = \frac{1}{3} M l^2$.
2. **Đĩa tròn đặc / Hình trụ tròn đặc bán kính $R$, khối lượng $M$:**
   - Đối với trục đối xứng của đĩa/trụ: $J_C = \frac{1}{2} M R^2$.
3. **Vành tròn mỏng / Ống trụ rỗng mỏng bán kính $R$:**
   - Đối với trục đối xứng: $J_C = M R^2$.
4. **Khối cầu đặc đồng chất bán kính $R$, khối lượng $M$:**
   - Đối với trục đi qua tâm cầu: $J_C = \frac{2}{5} M R^2$.

---

## 3.2. Định Lý Động Lượng

### 3.2.1. Động Lượng
- Động lượng của một chất điểm: $\vec{p} = m \vec{v}$.
- Động lượng của cơ hệ là tổng hình học động lượng của tất cả các chất điểm thuộc hệ:

$$\vec{K} = \sum_{k=1}^n m_k \vec{v}_k = M \vec{v}_C \tag{3-6}$$

> **Ý nghĩa:** Động lượng của cơ hệ bằng động lượng của một chất điểm tập trung toàn bộ khối lượng $M$ của hệ chuyển động với vận tốc của khối tâm $\vec{v}_C$.

### 3.2.2. Xung Lượng Của Lực
Xung lượng của lực $\vec{F}$ trong khoảng thời gian từ $t_0$ đến $t_1$:

$$\vec{S} = \int_{t_0}^{t_1} \vec{F} \, dt \tag{3-7}$$

---

### 3.2.3. Định Lý Biến Thiên Động Lượng

::: tip Định lý động lượng
- **Dạng vi phân:** Đạo hàm bậc nhất theo thời gian của véctơ động lượng của cơ hệ bằng tổng hình học của tất cả các ngoại lực tác dụng lên cơ hệ:
  $$\frac{d\vec{K}}{dt} = \sum_{k=1}^n \vec{F}_k^e \tag{3-8}$$

- **Dạng hữu hạn:** Độ biến thiên động lượng của cơ hệ trong một khoảng thời gian bằng tổng các xung lượng của tất cả các ngoại lực tác dụng lên hệ trong khoảng thời gian đó:
  $$\vec{K}_1 - \vec{K}_0 = \sum_{k=1}^n \vec{S}_k^e \tag{3-9}$$
:::

### 3.2.4. Định Luật Bảo Toàn Động Lượng
- Nếu tổng ngoại lực tác dụng lên cơ hệ triệt tiêu: $\sum \vec{F}_k^e = \vec{0} \implies \vec{K} = \text{const}$.
- Nếu tổng hình chiếu của ngoại lực lên một trục (ví dụ $Ox$) triệt tiêu: $\sum F_{kx}^e = 0 \implies K_x = \text{const}$ (bảo toàn động lượng theo phương $Ox$).

---

## 3.3. Định Lý Chuyển Động Khối Tâm

Lấy đạo hàm của đẳng thức $\vec{K} = M \vec{v}_C$ và kết hợp với định lý động lượng:

$$\frac{d\vec{K}}{dt} = M \frac{d\vec{v}_C}{dt} = M \vec{a}_C$$

::: tip Định lý chuyển động khối tâm
Khối tâm của một cơ hệ chuyển động như một chất điểm có khối lượng bằng toàn bộ khối lượng của cơ hệ và chịu tác dụng của một lực bằng tổng hình học của tất cả các ngoại lực tác dụng lên hệ:

$$M \vec{a}_C = M \frac{d^2\vec{r}_C}{dt^2} = \sum_{k=1}^n \vec{F}_k^e \tag{3-10}$$
:::

Dạng giải tích trên ba trục tọa độ:

$$M \ddot{x}_C = \sum F_{kx}^e; \quad M \ddot{y}_C = \sum F_{ky}^e; \quad M \ddot{z}_C = \sum F_{kz}^e \tag{3-11}$$

### Định Luật Bảo Toàn Chuyển Động Khối Tâm
- Khi $\sum \vec{F}_k^e = \vec{0} \implies \vec{a}_C = \vec{0} \implies \vec{v}_C = \text{const}$. Khối tâm của hệ chuyển động thẳng đều hoặc đứng yên.
- Nếu ban đầu hệ đứng yên ($\vec{v}_{C0} = \vec{0}$) thì khối tâm $C$ sẽ giữ nguyên vị trí cố định trong không gian.

---

## 3.4. Định Lý Mômen Động Lượng

### 3.4.1. Mômen Động Lượng
- Mômen động lượng của một chất điểm đối với điểm $O$: $\vec{l}_O = \vec{r} \times (m\vec{v})$.
- Mômen động lượng của cơ hệ đối với điểm $O$:

$$\vec{L}_O = \sum_{k=1}^n (\vec{r}_k \times m_k \vec{v}_k) \tag{3-12}$$

Đối với vật rắn quay quanh trục cố định $Oz$:

$$L_z = J_z \cdot \omega \tag{3-13}$$

---

### 3.4.2. Định Lý Biến Thiên Mômen Động Lượng

::: tip Định lý
Đạo hàm bậc nhất theo thời gian của véctơ mômen động lượng của cơ hệ đối với một gốc cố định $O$ (hoặc đối với một trục cố định $z$) bằng tổng các véctơ mômen của tất cả các ngoại lực tác dụng lên hệ đối với điểm $O$ (hoặc trục $z$):

$$\frac{d\vec{L}_O}{dt} = \sum_{k=1}^n \vec{m}_O(\vec{F}_k^e) \tag{3-14}$$

$$\frac{dL_z}{dt} = \sum_{k=1}^n m_z(\vec{F}_k^e) \tag{3-15}$$
:::

### 3.4.3. Phương Trình Vi Phân Chuyển Động Quay Của Vật Rắn Quanh Trục Cố Định

Thay $L_z = J_z \omega$ vào phương trình $(3-15)$:

$$J_z \frac{d\omega}{dt} = J_z \varepsilon = J_z \ddot{\phi} = \sum_{k=1}^n m_z(\vec{F}_k^e) \tag{3-16}$$

> **Ý nghĩa:** Tích số giữa mômen quán tính của vật với gia tốc góc bằng tổng mômen của các ngoại lực tác dụng đối với trục quay.

### 3.4.4. Định Luật Bảo Toàn Mômen Động Lượng
- Nếu $\sum m_z(\vec{F}_k^e) = 0 \implies L_z = J_z \omega = \text{const}$.
- Khi mômen quán tính $J_z$ biến đổi (ví dụ người trượt băng co hoặc giang tay), vận tốc góc $\omega$ sẽ thay đổi tương ứng theo quy luật: $J_1 \omega_1 = J_2 \omega_2$.

---

## 3.5. Định Lý Động Năng

### 3.5.1. Công Của Lực

Công nguyên tố của lực $\vec{F}$ trên đoạn dịch chuyển vi phân $d\vec{r}$:

$$dA = \vec{F} \cdot d\vec{r} = F_x dx + F_y dy + F_z dz = F_t ds \tag{3-17}$$

Công toàn phần trên đoạn cung từ $M_0$ đến $M_1$:

$$A = \int_{M_0}^{M_1} (F_x dx + F_y dy + F_z dz) \tag{3-18}$$

#### Công Của Một Số Lực Thường Gặp:
1. **Công của ngẫu lực:** $dA = M_z \, d\phi \implies A = \int_{\phi_0}^{\phi_1} M_z \, d\phi$.
2. **Công của trọng lực:** $A = \pm P \cdot h$ (mang dấu dương khi vật hạ thấp, âm khi vật nâng cao).
3. **Công của lực đàn hồi lò xo (độ cứng $c$):**
   $$A = -\frac{1}{2} c (\lambda_1^2 - \lambda_0^2) \tag{3-19}$$
   trong đó $\lambda_0, \lambda_1$ là độ biến dạng ban đầu và lúc sau của lò xo.

---

### 3.5.2. Động Năng Của Cơ Hệ

Động năng toàn phần của cơ hệ:

$$T = \frac{1}{2} \sum_{k=1}^n m_k v_k^2 \tag{3-20}$$

#### Biểu Thức Động Năng Cho Các Chuyển Động Cơ Bản Của Vật Rắn:
- **Chuyển động tịnh tiến:**
  $$T = \frac{1}{2} M v^2 \tag{3-21}$$
- **Chuyển động quay quanh trục cố định $Oz$:**
  $$T = \frac{1}{2} J_z \omega^2 \tag{3-22}$$
- **Chuyển động song phẳng (Định lý Koenig):**
  $$T = \frac{1}{2} M v_C^2 + \frac{1}{2} J_C \omega^2 \tag{3-23}$$
  hoặc tính qua tâm vận tốc tức thời $P$: $T = \frac{1}{2} J_P \omega^2$.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_3_3.svg" alt="Hình 3-3: Động năng của vật rắn chuyển động song phẳng" style="max-height: 260px;" />

<div class="figure-caption">

Hình 3-3: Phân tích động năng chuyển động song phẳng theo định lý Koenig

</div>

</div>

---

### 3.5.3. Định Lý Biến Thiên Động Năng

::: tip Định lý động năng
- **Dạng vi phân:** Vi phân động năng của cơ hệ bằng tổng các công nguyên tố của tất cả các ngoại lực và nội lực tác dụng lên các chất điểm của hệ:
  $$dT = \sum_{k=1}^n dA_k^e + \sum_{k=1}^n dA_k^i \tag{3-24}$$

- **Dạng hữu hạn:** Độ biến thiên động năng của cơ hệ trên một đoạn dịch chuyển bằng tổng công của tất cả các ngoại lực và nội lực tác dụng lên hệ trên đoạn dịch chuyển đó:
  $$T_1 - T_0 = \sum A_k^e + \sum A_k^i \tag{3-25}$$
:::

::: important Lưu ý quan trọng
Đối với **vật rắn tuyệt đối** hoặc hệ các vật rắn liên kết bằng các khớp bản lề, dây không giãn, ngàm cứng, lăn không trượt, thì **tổng công của các nội lực luôn luôn bằng không**:

$$\sum dA_k^i = 0 \implies dT = \sum dA_k^e$$
:::

---

## 3.6. Trường Lực – Thế Năng – Định Luật Bảo Toàn Cơ Năng

### 3.6.1. Trường Lực Thế và Thế Năng
Nếu lực tác dụng $\vec{F}$ có công không phụ thuộc vào dạng đường cong quỹ đạo mà chỉ phụ thuộc vào vị trí điểm đầu và điểm cuối thì lực đó được gọi là **lực thế** (trường lực thế).
- Tồn tại hàm thế vị $\Pi(x, y, z)$ sao cho:
  $$F_x = -\frac{\partial \Pi}{\partial x}; \quad F_y = -\frac{\partial \Pi}{\partial y}; \quad F_z = -\frac{\partial \Pi}{\partial z} \tag{3-26}$$
- Công của lực thế bằng độ giảm của thế năng:
  $$A_{01} = \Pi_0 - \Pi_1 = -\Delta \Pi \tag{3-27}$$

### 3.6.2. Định Luật Bảo Toàn Cơ Năng

::: tip Định luật bảo toàn cơ năng
Trong một cơ hệ chịu tác dụng của các lực thế và liên kết lý tưởng, tổng động năng và thế năng (gọi là cơ năng toàn phần $E$) của hệ là một đại lượng không đổi trong suốt quá trình chuyển động:

$$T + \Pi = E = \text{const} \tag{3-28}$$
:::


---

## 3.7. Các Thí Dụ Áp Dụng (Bài Tập Mẫu)

::: tip Ý NGHĨA PHƯƠNG PHÁP
Các định lý tổng quát của Động lực học (Định lý động lượng, Định lý khối tâm, Định lý mômen động lượng, Định lý động năng và Định luật bảo toàn cơ năng) là công cụ nền tảng để giải quyết toàn bộ các bài toán chuyển động của cơ hệ mà không cần xét đến các nội lực liên kết bên trong hệ.
:::

### Thí dụ 3-1: Ứng dụng Định lý chuyển động khối tâm (Động cơ quay lệch tâm)

**Đề bài:**
Trục của một động cơ điện có khối lượng tổng cộng $M$ được gắn cố định trên nền đàn hồi. Rotor của động cơ có khối lượng $m$ và khối tâm của nó cách trục quay một khoảng lệch tâm $e$. Động cơ quay đều quanh trục cố định nằm ngang với vận tốc góc $\omega = \text{const}$.
Xác định lực tác dụng động lực học của động cơ lên bệ máy theo thời gian.

**Bài giải:**

Chọn hệ trục tọa độ $Oxy$ với gốc $O$ tại tâm trục quay của động cơ, trục $Ox$ nằm ngang, trục $Oy$ thẳng đứng hướng lên.
Tọa độ khối tâm của rotor lệch tâm tại thời điểm $t$:
$$x_C = e \cos\omega t, \quad y_C = e \sin\omega t$$

Gia tốc của khối tâm rotor:
$$\ddot{x}_C = -e\omega^2 \cos\omega t, \quad \ddot{y}_C = -e\omega^2 \sin\omega t$$

Theo định lý chuyển động khối tâm của cơ hệ:
$$M_{\text{hệ}} \vec{a}_C = \sum \vec{F}^{\text{ng}}$$
Chiếu lên hai phương ngang và đứng:
- Phương ngang: $R_x = m \ddot{x}_C = -m e \omega^2 \cos\omega t$
- Phương đứng: $R_y - (M + m)g = m \ddot{y}_C = -m e \omega^2 \sin\omega t$
  $$\implies R_y = (M + m)g - m e \omega^2 \sin\omega t$$

Áp lực toàn phần tác dụng lên nền bệ máy gồm tải trọng tĩnh $(M+m)g$ và thành phần lực kích động tuần hoàn có biên độ $F_0 = m e \omega^2$ tần số $\omega$. Hiện tượng này gây ra rung động cưỡng bức trong máy nếu không được cân bằng động tốt.

---

### Thí dụ 3-2: Ứng dụng Định lý mômen động lượng (Hệ tang tời treo vật nặng)

**Đề bài:**
Cho cơ cấu tang tời như Hình 3-4. Tang tời có trọng lượng $P$, bán kính $r$, mômen quán tính đối với trục quay nằm ngang $O$ là $J_O = \frac{1}{2}\frac{P}{g}r^2$. Một sợi dây nhẹ không dãn quấn quanh tang tời, đầu tự do treo vật nặng $Q$. Bỏ qua ma sát ở trục quay.
1. Xác định gia tốc góc $\varepsilon$ của tang tời và gia tốc chuyển động $a$ của vật nặng $Q$.
2. Tính sức căng $T$ của sợi dây trong quá trình chuyển động.

<div class="figure-box">
  <img src="/figures/dong-luc-hoc/hinh_3_4.svg" alt="Hình 3-4: Tang tời treo vật nặng Q" style="max-width: 520px;" />
  <div class="figure-caption">Hình 3-4: Hệ cơ học gồm tang tời quay quanh trục cố định và vật nặng Q chuyển động tịnh tiến</div>
</div>

**Bài giải:**

Khảo sát riêng từng vật:
**1. Đối với tang tời quay quanh trục $O$:**
Áp dụng định lý mômen động lượng đối với trục quay cố định:
$$J_O \varepsilon = \sum m_O(\vec{F}^{\text{ng}}) = T \cdot r$$
trong đó $T$ là sức căng của dây tác dụng lên tang tời.

**2. Đối với vật nặng $Q$:**
Vật $Q$ chuyển động tịnh tiến thẳng đứng xuống dưới với gia tốc $a$:
$$m_Q a = Q - T \implies \frac{Q}{g} a = Q - T$$

**3. Điều kiện liên kết động học:**
Vì dây không dãn và không trượt trên tang tời:
$$a = r \cdot \varepsilon \implies \varepsilon = \frac{a}{r}$$

Thay $\varepsilon$ vào phương trình mômen của tang tời:
$$J_O \frac{a}{r} = T \cdot r \implies T = \frac{J_O}{r^2} a$$

Thay biểu thức của $T$ vào phương trình chuyển động của vật $Q$:
$$\frac{Q}{g} a = Q - \frac{J_O}{r^2} a \implies a \left(\frac{Q}{g} + \frac{J_O}{r^2}\right) = Q$$
Với $J_O = \frac{1}{2}\frac{P}{g}r^2$, ta có:
$$a \left(\frac{Q}{g} + \frac{1}{2}\frac{P}{g}\right) = Q \implies a = \frac{Q}{Q + \frac{1}{2}P} g$$

Gia tốc góc của tang tời:
$$\varepsilon = \frac{a}{r} = \frac{Q}{r\left(Q + \frac{1}{2}P\right)} g$$

Sức căng dây $T$:
$$T = \frac{J_O}{r^2} a = \frac{1}{2}\frac{P}{g} \cdot \frac{Q}{Q + \frac{1}{2}P} g = \frac{PQ}{2Q + P}$$

---

### Thí dụ 3-3: Ứng dụng Định lý động năng và Bảo toàn cơ năng (Con lắc vật lý)

**Đề bài:**
Một vật rắn có khối lượng $m$, khối tâm $C$ cách trục quay nằm ngang $O$ một khoảng $OC = d$ (Hình 3-8). Mômen quán tính của vật đối với trục quay $O$ là $J_O$. Thả vật từ vị trí lệch góc ban đầu $\varphi_0$ so với phương thẳng đứng không vận tốc đầu.
1. Áp dụng định luật bảo toàn cơ năng, tìm vận tốc góc $\omega$ của vật theo góc lệch $\varphi$.
2. Xác định vận tốc góc cực đại $\omega_{\max}$ khi vật đi qua vị trí cân bằng thẳng đứng ($\varphi = 0$).

<div class="figure-box">
  <img src="/figures/dong-luc-hoc/hinh_3_8.svg" alt="Hình 3-8: Con lắc vật lý và bảo toàn cơ năng" style="max-width: 500px;" />
  <div class="figure-caption">Hình 3-8: Dao động của con lắc vật lý quay quanh trục nằm ngang O</div>
</div>

**Bài giải:**

Cơ hệ chỉ chịu tác dụng của trọng lực $\vec{P} = m\vec{g}$ (lực thế) và phản lực tại trục quay cố định $O$ (không sinh công vì điểm đặt đứng yên). Do đó cơ năng của hệ được bảo toàn:
$$E = T + \Pi = \text{const}$$

**1. Động năng và thế năng của vật:**
- Động năng của vật rắn quay quanh trục cố định:
  $$T = \frac{1}{2} J_O \omega^2$$
- Chọn gốc tính thế năng tại vị trí cân bằng thấp nhất của khối tâm $C$ ($\varphi = 0$):
  Độ cao của khối tâm tại vị trí góc lệch $\varphi$:
  $$h_C = d(1 - \cos\varphi)$$
  Thế năng trọng trường:
  $$\Pi(\varphi) = m g h_C = m g d (1 - \cos\varphi)$$

**2. Áp dụng định luật bảo toàn cơ năng:**
Tại vị trí ban đầu $\varphi = \varphi_0$: vật đứng yên nên $T_0 = 0$, thế năng $\Pi_0 = mgd(1 - \cos\varphi_0)$.
Tại vị trí góc lệch $\varphi$ bất kỳ:
$$T + \Pi = T_0 + \Pi_0$$
$$\frac{1}{2} J_O \omega^2 + mgd(1 - \cos\varphi) = mgd(1 - \cos\varphi_0)$$
$$\implies \frac{1}{2} J_O \omega^2 = mgd(\cos\varphi - \cos\varphi_0)$$

Vận tốc góc của con lắc theo góc lệch $\varphi$:
$$\omega(\varphi) = \sqrt{\frac{2mgd}{J_O} (\cos\varphi - \cos\varphi_0)}$$

**3. Vận tốc góc cực đại tại vị trí cân bằng ($\varphi = 0$):**
Khi con lắc đi qua vị trí cân bằng thấp nhất, $\cos 0 = 1$:
$$\omega_{\max} = \sqrt{\frac{2mgd}{J_O} (1 - \cos\varphi_0)} = 2\sin\frac{\varphi_0}{2} \sqrt{\frac{mgd}{J_O}}$$
