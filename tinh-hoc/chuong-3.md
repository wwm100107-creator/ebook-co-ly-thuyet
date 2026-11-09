# Chương 3: Ma Sát

## 3.1. Định Nghĩa và Phân Loại Ma Sát

Trong các chương trước, khi khảo sát các liên kết tựa ta đã giả thiết rằng bề mặt tiếp xúc là hoàn toàn nhẵn, tức bỏ qua lực cản trở chuyển động trượt tiếp xúc giữa các vật thể. Trong thực tế, các bề mặt tiếp xúc bao giờ cũng có độ nhám nhất định, sinh ra các lực cản trở chuyển động tương đối giữa các vật tiếp xúc, được gọi là **lực ma sát**.

### Phân Loại Ma Sát
- **Theo trạng thái chuyển động:**
  - *Ma sát trượt:* Xuất hiện khi hai vật thể có xu hướng trượt hoặc đang trượt tương đối trên nhau.
  - *Ma sát lăn:* Xuất hiện khi một vật thể (hình trụ, hình cầu, bánh xe) lăn trên bề mặt của vật thể khác.
- **Theo điều kiện bôi trơn:**
  - *Ma sát khô:* Khi không có chất bôi trơn giữa hai bề mặt tiếp xúc (đây là đối tượng nghiên cứu chính của Tĩnh học).
  - *Ma sát ướt (nhớt):* Khi giữa hai bề mặt tiếp xúc có lớp chất lỏng bôi trơn ngăn cách hoàn toàn.

---

## 3.2. Định Luật Ma Sát Trượt

### 3.2.1. Hiện Tượng Ma Sát Trượt

Xét một vật đặt trên mặt phẳng nằm ngang chịu tác dụng của trọng lực $\vec{P}$ và phản lực pháp tuyến $\vec{N}$ ($\vec{P} + \vec{N} = \vec{0}$).

Tác dụng lên vật một lực kéo nằm ngang $\vec{F}$ có xu hướng làm vật trượt. Khi lực kéo $F$ còn nhỏ, vật vẫn nằm yên. Điều đó chứng tỏ tại mặt tiếp xúc xuất hiện một lực cân bằng với lực $\vec{F}$, lực đó được gọi là **lực ma sát trượt tĩnh**, kí hiệu $\vec{F}_{\text{ms}}$:

$$\vec{F}_{\text{ms}} = -\vec{F}$$

Khi tăng dần lực kéo $F$, lực ma sát tĩnh $F_{\text{ms}}$ cũng tăng theo đến một giá trị cực đại $F_{\text{max}}$, tại đó vật bắt đầu rơi vào **trạng thái cân bằng giới hạn** (chuẩn bị trượt). Nếu lực kéo $F > F_{\text{max}}$, vật sẽ bắt đầu chuyển động trượt.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_3_1.svg" alt="Hình 3-1: Lực ma sát trượt và trạng thái cân bằng giới hạn" style="max-height: 260px;" />

<div class="figure-caption">

Hình 3-1: Sơ đồ lực ma sát trượt tác dụng lên vật

</div>

</div>

---

### 3.2.2. Định Luật Coulomb Về Ma Sát Trượt Khô

::: tip Định luật Coulomb
1. Lực ma sát trượt tĩnh có độ lớn biến thiên trong khoảng từ 0 đến giá trị cực đại $F_{\text{max}}$:
   $$0 \le F_{\text{ms}} \le F_{\text{max}} \tag{3-1}$$
   Phương của $\vec{F}_{\text{ms}}$ nằm trong mặt phẳng tiếp xúc chung và có chiều ngược với xu hướng chuyển động trượt tương đối.

2. Độ lớn cực đại của lực ma sát trượt tĩnh tỉ lệ thuận với áp lực pháp tuyến $N$:
   $$F_{\text{max}} = f_0 \cdot N \tag{3-2}$$
   trong đó $f_0$ là **hệ số ma sát trượt tĩnh** (đại lượng không thứ nguyên), phụ thuộc vào bản chất vật liệu và độ nhẵn của hai bề mặt tiếp xúc.

3. Hệ số ma sát trượt tĩnh $f_0$ trong giới hạn thực tế không phụ thuộc vào diện tích bề mặt tiếp xúc hình học.

4. Khi vật chuyển động trượt tương đối, lực ma sát trượt động tỉ lệ với áp lực pháp tuyến:
   $$F_{\text{ms}} = f \cdot N \tag{3-3}$$
   với $f$ là **hệ số ma sát trượt động**, thông thường $f \le f_0$.
:::

---

### 3.2.3. Góc Ma Sát và Nón Ma Sát

Tại điểm tiếp xúc giữa hai vật, phản lực toàn phần $\vec{R}$ của mặt tựa gồm hai thành phần: phản lực pháp tuyến $\vec{N}$ và lực ma sát trượt $\vec{F}_{\text{ms}}$:

$$\vec{R} = \vec{N} + \vec{F}_{\text{ms}} \tag{3-4}$$

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_3_2.svg" alt="Hình 3-2: Góc ma sát và nón ma sát" style="max-height: 280px;" />

<div class="figure-caption">

Hình 3-2: Phản lực toàn phần $\vec{R}$, góc ma sát $\phi_0$ và nón ma sát

</div>

</div>

Khi vật ở trạng thái cân bằng giới hạn, phản lực toàn phần $\vec{R}$ lệch với pháp tuyến một góc lớn nhất $\phi_0$, được gọi là **góc ma sát**:

$$\tan \phi_0 = \frac{F_{\text{max}}}{N} = \frac{f_0 N}{N} = f_0 \implies \phi_0 = \arctan f_0 \tag{3-5}$$

Khi xu hướng trượt có thể xảy ra theo mọi phương trong mặt phẳng tiếp xúc, véctơ phản lực toàn phần giới hạn sẽ vạch nên một hình nón có đỉnh tại điểm tiếp xúc, trục là pháp tuyến của mặt tiếp xúc và góc ở đỉnh bằng $2\phi_0$. Hình nón đó được gọi là **nón ma sát**.

::: tip Hiện tượng tự hãm (Tự khóa)
Điều kiện để vật cân bằng dưới tác dụng của hệ ngoại lực là hợp lực của các ngoại lực tác dụng lên vật phải nằm **bên trong nón ma sát**.

Khi hợp lực ngoại lực nằm trong nón ma sát, vật hoàn toàn không thể bị đẩy trượt dù độ lớn của lực có tăng lên bao nhiêu chăng nữa. Hiện tượng này được gọi là **hiện tượng tự hãm** (ứng dụng trong nêm, ren ốc vít, bu lông).
:::

---

## 3.3. Định Luật Ma Sát Lăn

### 3.3.1. Hiện Tượng Ma Sát Lăn

Xét một con lăn hình trụ bán kính $r$, trọng lượng $P$ đặt trên mặt phẳng nằm ngang. Khi tác dụng lên tâm con lăn một lực kéo nằm ngang $\vec{F}$:
- Nếu bề mặt con lăn và mặt tựa là tuyệt đối cứng (không biến dạng), con lăn sẽ tiếp xúc theo một đường sinh và lực cản lăn bằng không.
- Trong thực tế, dưới tác dụng của tải trọng, cả con lăn và mặt tựa đều bị biến dạng cục bộ tại vùng tiếp xúc. Mặt tựa bị lún xuống tạo thành gờ cản trở chuyển động lăn phía trước.

Do sự phân bố không đối xứng của áp lực tiếp xúc, hợp lực của các phản lực pháp tuyến $\vec{N}$ bị dời về phía trước chuyển động một đoạn $\delta$.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_3_3.svg" alt="Hình 3-3: Ma sát lăn và cánh tay đòn cản lăn k" style="max-height: 270px;" />

<div class="figure-caption">

Hình 3-3: Sơ đồ phân tích lực và mômen ma sát lăn

</div>

</div>

Cặp lực $(\vec{P}, \vec{N})$ tạo thành một ngẫu lực cản trở chuyển động quay của con lăn, gọi là **mômen ma sát lăn**:

$$M_{\text{msl}} = N \cdot \delta$$

Đoạn dịch chuyển $\delta$ tăng dần theo lực kéo $F$ cho đến khi đạt giá trị cực đại $k$, gọi là **hệ số ma sát lăn**:

$$\delta_{\text{max}} = k \tag{3-6}$$

### 3.3.2. Định Luật Ma Sát Lăn

::: tip Định luật ma sát lăn
Mômen ma sát lăn cực đại tỉ lệ thuận với áp lực pháp tuyến $N$:

$$M_{\text{msl}}^{\text{max}} = k \cdot N \tag{3-7}$$

trong đó $k$ là **hệ số ma sát lăn**, có thứ nguyên là độ dài (đơn vị thường đo bằng $\text{m}, \text{cm}$ hoặc $\text{mm}$).
:::

### 3.3.3. Điều Kiện Để Con Lăn Lăn Không Trượt

Để con lăn bắt đầu lăn mà không bị trượt:

$$F \cdot r \ge M_{\text{msl}}^{\text{max}} = k \cdot N \implies F \ge \frac{k}{r} N \tag{3-8}$$

Đồng thời, để con lăn không bị trượt tại điểm tựa:

$$F \le F_{\text{max}} = f_0 \cdot N \tag{3-9}$$

Do hệ số ma sát lăn $k$ rất nhỏ so với bán kính $r$ ($k \ll r$), lực cần thiết để làm một vật lăn nhỏ hơn rất nhiều lần so với lực cần thiết để kéo trượt cùng vật thể đó:

$$\frac{k}{r} \ll f_0$$

Đây chính là cơ sở vật lý giải thích vì sao ổ bi, ổ lăn và bánh xe được ứng dụng rộng rãi để giảm thiểu triệt để lực cản chuyển động trong kỹ thuật.


---

## 3.4. Các Bài Toán Thí Dụ Áp Dụng

::: tip Thí dụ 3-1: Cân bằng của vật trên mặt phẳng nghiêng có ma sát
**Đề bài:**  
Một vật rắn nằm trên mặt phẳng không nhẵn có hệ số ma sát trượt $f$, nghiêng so với mặt phẳng nằm ngang một góc $\alpha$.  
1. Xác định góc $\alpha$ để vật rắn cân bằng dưới tác dụng của trọng lực $\vec{P}$ thẳng đứng hướng xuống dưới và có giá trị lớn tùy ý.  
2. Giả sử lực $\vec{P}$ cho trước và vật còn chịu thêm tác dụng của lực đẩy nằm ngang $\vec{Q}$. Xác định góc $\alpha$ để vật có thể bị đẩy trượt lên dốc.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_3_4.svg" alt="Hình 3-4: Khảo sát cân bằng của vật trên mặt nghiêng bằng nón ma sát" style="max-height: 260px;" />

<div class="figure-caption">

Hình 3-4: Khảo sát cân bằng của vật trên mặt nghiêng bằng nón ma sát

</div>

</div>

**Bài giải:**  
**1. Trường hợp chỉ có trọng lực $\vec{P}$ tác dụng:**  
Vật có xu hướng trượt xuống dốc. Tại mặt tiếp xúc phát sinh phản lực pháp tuyến $\vec{N}$ và lực ma sát trượt $\vec{F}_{\text{ms}}$ hướng ngược chiều xu hướng chuyển động (hướng lên dọc mặt dốc).  
Chiếu hệ lực lên trục song song và vuông góc với mặt nghiêng:
$$\begin{cases}
\sum F_x = F_{\text{ms}} - P \sin\alpha = 0 \implies F_{\text{ms}} = P \sin\alpha \\
\sum F_y = N - P \cos\alpha = 0 \implies N = P \cos\alpha
\end{cases}$$

Theo định luật ma sát trượt Coulomb, điều kiện để vật không bị trượt là:
$$F_{\text{ms}} \le f \cdot N \implies P \sin\alpha \le f P \cos\alpha \implies \tan\alpha \le f$$

Gọi $\varphi$ là góc ma sát tĩnh (với $\tan\varphi = f$), điều kiện cân bằng của vật trở thành:
$$\alpha \le \varphi$$

*Ý nghĩa:* Nếu góc nghiêng $\alpha$ nhỏ hơn hoặc bằng góc ma sát $\varphi$, vật sẽ luôn đứng yên trên mặt dốc bất kể trọng lượng $P$ lớn đến mức nào (hiện tượng tự hãm).

**2. Trường hợp có thêm lực đẩy ngang $\vec{Q}$ hướng vào dốc:**  
Khi lực đẩy $\vec{Q}$ đủ lớn làm vật có xu hướng trượt lên phía trên, lực ma sát $\vec{F}_{\text{ms}}$ sẽ đổi chiều hướng xuống dưới dọc theo mặt phẳng dốc.  
Thiết lập phương trình cân bằng tại trạng thái sắp sửa trượt lên:
$$\begin{cases}
\sum F_x = Q \cos\alpha - P \sin\alpha - F_{\text{ms}} = 0 \\
\sum F_y = N - Q \sin\alpha - P \cos\alpha = 0
\end{cases}$$

Tại trạng thái giới hạn: $F_{\text{ms}} = f \cdot N$. Thay vào ta có:
$$Q \cos\alpha - P \sin\alpha - f(Q \sin\alpha + P \cos\alpha) = 0$$
$$Q(\cos\alpha - f \sin\alpha) = P(\sin\alpha + f \cos\alpha)$$
$$Q = P \cdot \dfrac{\sin\alpha + f \cos\alpha}{\cos\alpha - f \sin\alpha} = P \cdot \tan(\alpha + \varphi)$$

Để có thể đẩy vật trượt lên thì lực đẩy cần thiết phải thỏa mãn $Q > 0$, tức là mẫu số $\cos\alpha - f \sin\alpha > 0 \implies \tan\alpha < \dfrac{1}{f} = \cot\varphi$, suy ra:
$$\alpha < \dfrac{\pi}{2} - \varphi$$
:::

::: tip Thí dụ 3-2: Cân bằng của thang tựa vào tường và sàn có ma sát
**Đề bài:**  
Một chiếc thang đồng chất $AB$ có chiều dài $2l$ và trọng lượng $P$, tựa vào nền nằm ngang $Ox$ tại đầu $A$ và tựa vào tường thẳng đứng $Oy$ tại đầu $B$ (H. 3-5). Cả sàn và tường đều có ma sát và có cùng hệ số ma sát trượt $f$.  
Tìm góc nghiêng cực đại $\alpha_{\max}$ của thang so với tường thẳng đứng để thang vẫn nằm cân bằng không bị trượt.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_3_5.svg" alt="Hình 3-5: Sơ đồ lực tác dụng lên thang tại trạng thái cân bằng giới hạn" style="max-height: 280px;" />

<div class="figure-caption">

Hình 3-5: Sơ đồ lực tác dụng lên thang tại trạng thái cân bằng giới hạn

</div>

</div>

**Bài giải:**  
Khi góc $\alpha$ tăng, thang có xu hướng trượt đổ: đầu $B$ tụt xuống dưới dọc theo tường, đầu $A$ trượt sang phải dọc theo sàn.  
Do đó, các lực tác dụng lên thang gồm:
- Trọng lực $\vec{P}$ đặt tại trọng tâm $I$ (trung điểm của thang).
- Tại chân thang $A$: phản lực pháp tuyến $\vec{N}_A$ hướng lên, lực ma sát $\vec{F}_A$ hướng sang trái (ngăn trượt sang phải).
- Tại đầu thang $B$: phản lực pháp tuyến $\vec{N}_B$ hướng sang phải, lực ma sát $\vec{F}_B$ hướng lên trên (ngăn trượt tụt xuống).

Khảo sát thang ở trạng thái cân bằng giới hạn:
$$F_A = f \cdot N_A; \quad F_B = f \cdot N_B$$

Viết các phương trình cân bằng tĩnh học:
$$\begin{cases}
\sum F_x = N_B - F_A = 0 \implies N_B = f N_A \\
\sum F_y = N_A + F_B - P = 0 \implies N_A + f N_B = P \\
\sum m_O(\vec{F}_k) = 2 N_A l \sin\alpha - 2 N_B l \cos\alpha - P l \sin\alpha = 0
\end{cases}$$

Từ hai phương trình hình chiếu:
$$N_A + f(f N_A) = P \implies N_A = \dfrac{P}{1 + f^2}; \quad N_B = \dfrac{f P}{1 + f^2}$$

Thay các phản lực vào phương trình mômen đối với gốc $O$:
$$(2 N_A - P) \sin\alpha = 2 N_B \cos\alpha$$
$$\left(\dfrac{2P}{1 + f^2} - P\right) \sin\alpha = \dfrac{2f P}{1 + f^2} \cos\alpha$$
$$\dfrac{1 - f^2}{1 + f^2} \sin\alpha = \dfrac{2f}{1 + f^2} \cos\alpha \implies \tan\alpha = \dfrac{2f}{1 - f^2}$$

Nhận thấy biểu thức trên chính là công thức lượng giác của góc nhân đôi: với $\tan\varphi = f$, ta có:
$$\tan\alpha = \dfrac{2\tan\varphi}{1 - \tan^2\varphi} = \tan(2\varphi) \implies \alpha = 2\varphi$$

*Kết luận:* Điều kiện để thang cân bằng không bị trượt là góc nghiêng của thang so với tường phải thỏa mãn:
$$\alpha \le 2\varphi$$
trong đó $\varphi = \arctan f$ là góc ma sát của bề mặt tiếp xúc.
:::

::: tip Thí dụ 3-3: Cơ cấu ép bằng nêm và điều kiện tự hãm
**Đề bài:**  
Cơ cấu ép bằng nêm gồm nêm $A$ trượt trong máng thẳng đứng và nêm $B$ trượt trong máng nằm ngang (H. 3-6). Mặt tiếp xúc giữa hai nêm nghiêng một góc $\alpha$ so với phương ngang. Máng trượt thẳng đứng và máng ngang đều rất nhẵn (bỏ qua ma sát), riêng mặt nghiêng tiếp xúc giữa hai nêm có hệ số ma sát trượt $f$.  
1. Xác định mối quan hệ giữa lực ép $\vec{Q}$ tác dụng lên nêm $B$ và lực tác động $\vec{P}$ ấn nêm $A$ xuống.  
2. Tìm điều kiện góc nghiêng $\alpha$ để nêm $A$ bị tự hãm (tự khóa chặt không bị đẩy trồi ngược lên khi thôi ấn lực $\vec{P}$).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_3_6.svg" alt="Hình 3-6: Cơ cấu máy ép nêm và sơ đồ phân tích lực" style="max-height: 260px;" />

<div class="figure-caption">

Hình 3-6: Cơ cấu máy ép nêm và sơ đồ phân tích lực

</div>

</div>

**Bài giải:**  
**1. Xác định lực ép $Q$ khi ấn lực $P$ xuống:**  
Khi lực $\vec{P}$ ấn nêm $A$ đi xuống, nêm $B$ bị đẩy dịch chuyển sang phải. Tại mặt tiếp xúc nghiêng giữa $A$ và $B$ xuất hiện phản lực pháp tuyến $N$ và lực ma sát trượt $F = f \cdot N$. Lực ma sát cản trở chuyển động trượt của $A$ xuống nên hướng lên trên dọc theo mặt nghiêng.  
Chiếu các lực tác dụng lên nêm $A$ theo phương thẳng đứng và lên nêm $B$ theo phương ngang:
$$\begin{cases}
N \cos\alpha + F \sin\alpha = P \\
N \sin\alpha - F \cos\alpha = Q
\end{cases}$$

Thay $F = f \cdot N$:
$$P = N(\cos\alpha + f \sin\alpha); \quad Q = N(\sin\alpha - f \cos\alpha)$$
$$\implies Q = P \cdot \dfrac{\sin\alpha - f \cos\alpha}{\cos\alpha + f \sin\alpha} = P \cdot \tan(\alpha - \varphi)$$
với $\varphi = \arctan f$ là góc ma sát.

**2. Điều kiện tự hãm của nêm:**  
Khi thôi tác dụng lực $\vec{P}$ ($P = 0$), vật bị ép $C$ có tính đàn hồi sinh ra lực đẩy ngược $Q$ có xu hướng đẩy nêm $B$ sang trái và đẩy nêm $A$ trượt lên trên.  
Lúc này xu hướng trượt đảo chiều, lực ma sát giữa hai nêm đổi chiều hướng xuống dưới dọc theo mặt nghiêng.  
Phương trình cân bằng giới hạn để nêm $A$ không bị trượt trồi lên trở thành:
$$Q = P \cdot \tan(\alpha + \varphi)$$
Để nêm $A$ tự giữ chặt (tự hãm) dưới tác dụng của lực đàn hồi $Q > 0$ mà không cần ngoại lực giữ ($P \le 0$), ta phải có:
$$\alpha \le \varphi$$

*Kết luận:* Khi góc vát của nêm $\alpha$ nhỏ hơn hoặc bằng góc ma sát $\varphi$ ($\alpha \le \arctan f$), nêm sẽ tự hãm hoàn toàn.
:::

::: tip Thí dụ 3-4: Điều kiện cân bằng của con lăn chịu lực kéo ngang
**Đề bài:**  
Trên mặt đường nằm ngang có một con lăn hình trụ tròn đồng chất bán kính $R$, trọng lượng $P$. Con lăn chịu tác dụng của một lực kéo nằm ngang $\vec{Q}$ đặt ở độ cao $h$ so với mặt đường (H. 3-8). Biết hệ số ma sát trượt là $f$ và hệ số ma sát lăn là $k$.  
Tìm giá trị của lực kéo $Q$ để con lăn giữ được trạng thái cân bằng (không trượt và không lăn).

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_3_8.svg" alt="Hình 3-8: Con lăn chịu lực kéo ngang ở độ cao h" style="max-height: 250px;" />

<div class="figure-caption">

Hình 3-8: Con lăn chịu lực kéo ngang ở độ cao $h$

</div>

</div>

**Bài giải:**  
Hệ lực tác dụng lên con lăn gồm:
- Các lực hoạt động: trọng lực $\vec{P}$ đặt tại tâm $O$, lực kéo $\vec{Q}$ cách mặt đường đoạn $h$.
- Các phản lực liên kết tại điểm tiếp xúc $I$: phản lực pháp tuyến $\vec{N}$, lực ma sát trượt $\vec{F}$, và ngẫu lực cản lăn có mômen $M_l$.

Viết các phương trình cân bằng tĩnh học:
$$\begin{cases}
\sum F_x = Q - F = 0 \implies F = Q \\
\sum F_y = N - P = 0 \implies N = P \\
\sum m_I(\vec{F}_k) = M_l - Q \cdot h = 0 \implies M_l = Q \cdot h
\end{cases}$$

Để con lăn hoàn toàn cân bằng, nó phải thỏa mãn đồng thời hai điều kiện không trượt và không lăn:
1. **Điều kiện không trượt:**
   $$F \le f \cdot N \implies Q \le f \cdot P$$
2. **Điều kiện không lăn:**
   $$M_l \le k \cdot N \implies Q \cdot h \le k \cdot P \implies Q \le \dfrac{k}{h} P$$

Do đó, lực kéo $Q$ để con lăn cân bằng phải thỏa mãn:
$$Q \le \min\left(f P, \, \dfrac{k}{h} P\right)$$

*Nhận xét thực tế:* Thông thường đối với các bánh xe và con lăn thép/gỗ, tỷ số $\frac{k}{h} \ll f$, do đó điều kiện chống lăn bị vi phạm trước. Nghĩa là khi tăng dần lực $Q$, con lăn sẽ bắt đầu lăn trước khi có thể bị trượt.
:::

::: tip Thí dụ 3-5: Bánh xe chủ động chịu mômen quay và lực cản
**Đề bài:**  
Một bánh xe đồng chất tâm $O$ bán kính $R$, trọng lượng $P$ đặt trên mặt đường nằm ngang (H. 3-9). Bánh xe chịu tác dụng của một ngẫu lực chủ động có mômen $M$ quay theo chiều kim đồng hồ và một lực cản nằm ngang $\vec{Q}$ đặt tại tâm trục $O$. Biết hệ số ma sát trượt là $f$, hệ số ma sát lăn là $k$.  
Xác định điều kiện của mômen $M$ và lực kéo $Q$ để bánh xe lăn không trượt trên mặt đường.

<div class="figure-container">

<img src="/figures/tinh-hoc/hinh_3_9.svg" alt="Hình 3-9: Bánh xe chịu mômen quay chủ động M và lực cản Q" style="max-height: 250px;" />

<div class="figure-caption">

Hình 3-9: Bánh xe chịu mômen quay chủ động $M$ và lực cản $Q$

</div>

</div>

**Bài giải:**  
Khi ngẫu lực $M$ làm bánh xe lăn sang phải, tại điểm tiếp xúc $I$ với mặt đường:
- Mặt đường tác dụng phản lực pháp tuyến $\vec{N}$ hướng lên.
- Ngẫu lực ma sát lăn cản trở chuyển động quay: $M_l = k \cdot N = k \cdot P$.
- Lực ma sát trượt tĩnh $\vec{F}$ hướng sang phải (đóng vai trò lực phát động đẩy xe tiến tới).

Phương trình cân bằng tĩnh học quanh điểm tiếp xúc $I$:
$$\sum m_I = M - Q \cdot R - M_l = 0 \implies M_l = M - Q R$$
Chiếu các lực lên phương ngang:
$$\sum F_x = F - Q = 0 \implies F = Q$$
Chiếu lên phương đứng:
$$\sum F_y = N - P = 0 \implies N = P$$

Để bánh xe lăn không trượt, hai điều kiện sau phải được thỏa mãn:
1. **Bánh xe bắt đầu lăn được:** Mômen chủ động $M$ phải thắng được mômen cản lăn:
   $$M - Q R \ge k P \implies M \ge Q R + k P$$
2. **Bánh xe không bị trượt quay tại chỗ:** Lực ma sát cần thiết để đẩy xe không vượt quá ma sát trượt cực đại:
   $$F < f \cdot N \implies Q < f \cdot P$$
   Đồng thời mômen $M$ không vượt quá giới hạn gây trượt:
   $$M \le P(f R + k)$$

Kết hợp lại, điều kiện để bánh xe lăn không trượt là:
$$Q R + k P \le M \le P(f R + k) \quad \text{và} \quad Q < f P$$
:::
