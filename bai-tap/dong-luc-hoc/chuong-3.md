---
title: "Bài Tập Động Lực Học - Chương 3: Cân Bằng Của Cơ Hệ Không Tự Do"
layout: doc
---

# Chương 3: CÂN BẰNG CỦA CƠ HỆ KHÔNG TỰ DO

## 3.1. CƠ SỞ LÝ THUYẾT

### 3.1.1. Các khái niệm về cơ hệ không tự do

***a) Liên kết và phương trình liên kết.*** Cơ hệ không tự do là tập hợp các chất điểm mà chuyển động của chúng bị ràng buộc bởi một số điều kiện hình học và động học cho trước, độc lập với điều kiện đầu chuyển động và các lực tác dụng, được gọi là các liên kết.

Về mặt toán học các liên kết được biểu thị bởi những phương trình và bất phương trình được gọi là những phương trình liên kết

$$f_\alpha(t, x_k, y_k, z_k, \dot{x}_k, \dot{y}_k, \dot{z}_k) \ge 0 \tag{3-1}$$

trong đó $x_k, y_k, z_k$ là các toạ độ Đề các của chất điểm $M_k$ thuộc cơ hệ, $\dot{x}_k, \dot{y}_k, \dot{z}_k$ – các hình chiếu của vận tốc của chất điểm $M_k$ lên các trục toạ độ còn $t$ – thời gian, $\alpha = 1, 2, \dots, s < 3N$ là số phương trình liên kết.

*Liên kết giữ và liên kết không giữ.* Nếu phương trình liên kết có dạng

$$f_\alpha(t, x_k, y_k, z_k, \dot{x}_k, \dot{y}_k, \dot{z}_k) = 0 \tag{3-2}$$

thì liên kết được gọi là giữ hoặc hai phía, còn nếu phương trình liên kết có dạng (3–1) thì liên kết được gọi là không giữ hoặc liên kết một phía.

*Liên kết dừng và liên kết không dừng.* Nếu phương trình liên kết không chứa rõ thời gian $t$ :

$$f_\alpha(x_k, y_k, z_k, \dot{x}_k, \dot{y}_k, \dot{z}_k) = 0 \tag{3-3}$$

thì liên kết được gọi là dừng, còn nếu phương trình liên kết chứa rõ thời gian $t$, liên kết được gọi là không dừng (3–2).

*Liên kết hôlônôm và không hôlônôm.* Nếu phương trình liên kết không chứa các yếu tố vận tốc hoặc chứa những yếu tố ấy nhưng nhờ các phương pháp tích phân có thể nhận được những phương trình liên kết tương đương không chứa các yếu tố vận tốc thì liên kết được gọi là hôlônôm :

$$f_\alpha(x_k, y_k, z_k) = 0, \quad \alpha = \overline{1, s}, \quad s < 3N \tag{3-4}$$

Ngược lại nếu phương trình liên kết chứa các yếu tố vận tốc mà bằng các phương pháp tích phân không loại trừ được các yếu tố đó khỏi các phương trình liên kết thì liên kết được gọi là không hôlônôm. Cơ hệ với liên kết hôlônôm được gọi là cơ hệ hôlônôm, còn nếu trong các liên kết có liên kết không hôlônôm thì cơ hệ được gọi là cơ hệ không hôlônôm.

***b) Di chuyển khả dĩ và số bậc tự do của cơ hệ.*** Di chuyển khả dĩ của cơ hệ là tập hợp các di chuyển vô cùng bé của các chất điểm thuộc cơ hệ từ vị trí đang xét sang vị trí lân cận mà các liên kết đặt lên cơ hệ cho phép.

Điều kiện để $\{\delta \vec{r}_k\} \ (k = \overline{1, N})$ là một di chuyển khả dĩ của cơ hệ hôlônôm (3–4) là

$$\sum_k \frac{\partial f_\alpha}{\partial \vec{r}_k} \delta \vec{r}_k = 0 \tag{3-5}$$

hoặc trong dạng :

$$\sum_k \left( \frac{\partial f_\alpha}{\partial x_k} \delta x_k + \frac{\partial f_\alpha}{\partial y_k} \delta y_k + \frac{\partial f_\alpha}{\partial z_k} \delta z_k \right) = 0 \tag{3-5'}$$

*Số bậc tự do của cơ hệ* là số tối đa các di chuyển khả dĩ độc lập tuyến tính của cơ hệ, nghĩa là bằng số biến phân độc lập của các toạ độ.

Số bậc tự do của cơ hệ chịu liên kết hôlônôm bằng

$$m = 3N - s \tag{3-6}$$

trong đó $N$ số chất điểm của cơ hệ và $s$ là số phương trình liên kết.

***c) Toạ độ suy rộng*** là tập hợp những thông số đủ để xác định vị trí cơ hệ, chúng được ký hiệu qua $\{q_j\} \ (j = \overline{1, r})$. Các toạ độ Đề các của các chất điểm đều phải được biểu diễn qua các toạ độ suy rộng :

$$\begin{aligned}
x_k &= x_k(t, q_1, \dots, q_r), \\
y_k &= y_k(t, q_1, \dots, q_r), \\
z_k &= z_k(t, q_1, \dots, q_r)
\end{aligned} \tag{3-7}$$

hoặc trong dạng viết ngắn gọn :

$$\vec{r}_k = \vec{r}_k(t, q_1, \dots, q_r) \tag{3-7'}$$

Từ (3–7) và (3–7’) ta có :

$$\begin{aligned}
\delta x_k &= \sum_{j=1}^r \frac{\partial x_k}{\partial q_j} \delta q_j \, ; \\
\delta y_k &= \sum_{j=1}^r \frac{\partial y_k}{\partial q_j} \delta q_j \, ; \\
\delta z_k &= \sum_{j=1}^r \frac{\partial z_k}{\partial q_j} \delta q_j \, .
\end{aligned} \tag{3-8}$$

hay trong dạng viết ngắn gọn

$$\delta \vec{r} = \sum_{j=1}^r \frac{\partial \vec{r}_k}{\partial q_j} \delta q_j \tag{3-8'}$$

*Toạ độ suy rộng đủ* là tập hợp các toạ độ suy rộng độc lập với nhau $\{q_j\} \ (j = \overline{1, n})$.

*Toạ độ suy rộng thừa* là tập hợp các toạ độ suy rộng lớn hơn số toạ độ suy rộng đủ. Giữa các toạ độ suy rộng thừa có mối ràng buộc đối với nhau.

Đối với cơ hệ hôlônôm thì giữa các toạ độ suy rộng thừa $\{q_j\} \ (j = \overline{1, r} > n)$ sẽ tồn tại các hệ thức

$$f_\beta(t, q_1, q_2, \dots, q_r) = 0 \, ; \quad \beta = \overline{1, s} \tag{3-9}$$

Điều kiện để $\{\delta q_j\} \ (j = \overline{1, r})$ là di chuyển khả dĩ của cơ hệ :

$$\sum_{j=1}^r \frac{\partial f_\beta}{\partial q_j} \delta q_j = 0 \, ; \quad \beta = \overline{1, s} \tag{3-10}$$

Số bậc tự do của cơ hệ (3–9) bằng :

$$m = r - s$$

Nếu $\{q_j\} \ (j = \overline{1, n})$ là các toạ độ suy rộng đủ thì không tồn tại các hệ thức (3–9), tức $s = 0$. Vậy

$$m = n$$

tức số bậc tự do của cơ hệ hôlônôm bằng số toạ độ suy rộng đủ.

***d) Lực suy rộng***

*$\alpha$) Công khả dĩ của các lực*

$$\begin{aligned}
\sum \delta A(\vec{F}) &= \sum_{k=1}^N \vec{F}_k \delta \vec{r}_k \\
&= \sum_{k=1}^N (F_{kx}\delta x_k + F_{ky}\delta y_k + F_{kz}\delta z_k)
\end{aligned} \tag{3-11}$$

hoặc

$$\sum \delta A(\vec{F}) = \sum_{i=1}^r Q_i \delta q_i \tag{3-12}$$

trong đó :

$$\begin{aligned}
Q_i &= \sum_{k=1}^N \vec{F}_k \frac{\partial \vec{r}_k}{\partial q_i} \\
&= \sum_{k=1}^N \left( F_{kx}\frac{\partial x_k}{\partial q_i} + F_{ky}\frac{\partial y_k}{\partial q_i} + F_{kz}\frac{\partial z_k}{\partial q_i} \right)
\end{aligned} \tag{3-13}$$

được gọi là lực suy rộng ứng với toạ độ suy rộng $q_i$. Chú ý rằng đối với cơ hệ hôlônôm và các toạ độ suy rộng là đủ thì $\{\delta q_j\} \ (j = \overline{1, n})$ trong (3–12) độc lập với nhau. Còn trong trường hợp toạ độ suy rộng thừa thì giữa các $\{\delta q_j\} \ (j = \overline{1, r} > n)$ có quan hệ phụ thuộc (3–10).

Trong trường hợp cơ hệ là bảo toàn và hàm thế năng có dạng

$$\Pi = \Pi(q_1, \dots, q_n) \tag{3-14}$$

thì

$$Q_j = -\frac{\partial \Pi}{\partial q_j}, \quad j = \overline{1, r} \tag{3-15}$$

thứ nguyên của lực suy rộng

$$[Q] = \frac{[A]}{[q]}$$

Vì vậy nếu chọn toạ độ suy rộng là độ dài thì lực suy rộng có thứ nguyên của lực thông thường, nếu chọn toạ độ suy rộng là góc thì lực suy rộng có thứ nguyên của ngẫu lực.

*$\beta$) Các phương pháp tính suy rộng*

*Phương pháp 1.* Tính lực suy rộng theo định nghĩa (3–13). Muốn vậy ta tìm hình chiếu các lực trên các trục toạ độ Đề các cùng biểu thức của toạ độ điểm đặt lực theo toạ độ suy rộng từ (3–7) và tính các đạo hàm của các toạ độ Đề các theo các toạ độ suy rộng rồi thay các đại lượng tính được vào (3–13).

*Phương pháp 2.* Tính tổng công khả dĩ của các lực trong toạ độ Đề các, sau đó biểu diễn các di chuyển khả dĩ qua các biến phân của toạ độ suy rộng theo (3–8). Nhờ đó viết biểu thức công khả dĩ trong dạng (3–12). Các hệ số đứng trước các biến phân của các toạ độ suy rộng sẽ là các lực suy rộng ứng với toạ độ suy rộng.

*Phương pháp 3.* Trong trường hợp các toạ độ suy rộng đủ có thể tính riêng từng lực suy rộng bằng cách chọn những di chuyển khả dĩ đặc biệt. Ví dụ để tính lực suy rộng $Q_i$ ta chọn một di chuyển khả dĩ đặc biệt như sau :

$$\begin{aligned}
&\delta q_1 = 0 \, ; \ \delta q_2 = 0 \, ; \ \dots \, ; \ \delta q_{i-1} = 0 \, ; \\
&\delta q_i > 0 \, ; \ \delta q_{i+1} = 0 \, ; \ \dots \, ; \ \delta q_n = 0
\end{aligned}$$

tức cho hệ một di chuyển khả dĩ trong đó chỉ có toạ độ $q_i$ thay đổi, còn các toạ độ khác không đổi. Tính tổng công khả dĩ của các lực trong di chuyển khả dĩ đặc biệt này, ký hiệu là $\sum \delta A_F(\delta q_i)$. Khi đó lực suy rộng $Q_i$ sẽ bằng

$$Q_i = \frac{\sum \delta A_F(\delta q_i)}{\delta q_i}$$

*Chú thích :* Khi tính công khả dĩ của các lực có thể áp dụng các công thức tính công nguyên tố của lực đã biết (xem § 2–4), trong đó các vi phân toạ độ được thay bằng các biến phân toạ độ. Thí dụ, trong trường hợp vật rắn chuyển động quay quanh một trục cố định ta có

$$\sum \delta A_F = \left[\sum \overline{m}_z(\vec{F}_k)\right] \delta \varphi \tag{3-16}$$

còn trong trường hợp vật rắn chuyển động song phẳng thì

$$\sum \delta A_F = \left[\sum \overline{m}_P(\vec{F}_k)\right] \delta \varphi_s \tag{3-17}$$

trong đó $P$ là tâm quay tức thời của hình phẳng.

***e) Liên kết lý tưởng***

*$\alpha$) Phân loại lực tác dụng lên cơ hệ không tự do.* Các lực tác dụng lên cơ hệ không tự do được phân thành các lực liên kết và các lực hoạt động. Các lực liên kết là thể hiện tác dụng về mặt động lực của các liên kết cơ hệ. Các lực tác dụng lên cơ hệ không tự do không phải là các lực liên kết được gọi là các lực hoạt động. Một tính chất rất quan trọng của lực liên kết là nó phụ thuộc vào các lực hoạt động và do đó phụ thuộc vào chuyển động cơ hệ.

*$\beta$) Liên kết lý tưởng.* Nếu tổng công nguyên tố của các lực liên kết trong mọi di chuyển khả dĩ của hệ đều bằng không thì liên kết đặt lên hệ được gọi là lý tưởng :

$$\sum \delta A(\vec{R}_k) = \sum \vec{R}_k \delta \vec{r}_k = 0 \tag{3-18}$$

Các cơ hệ chịu liên kết lý tưởng thường gặp là ;

– Vật rắn tự do (H. 3–1).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_1.svg" alt="Hình 3-1" class="figure-img" />
  <p class="figure-caption">Hình 3-1</p>
</div>

– Vật rắn tựa trên một mặt tựa rắn và nhẵn (H. 3–2).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_2.svg" alt="Hình 3-2" class="figure-img" />
  <p class="figure-caption">Hình 3-2</p>
</div>

– Vật rắn lăn không trượt trên mặt tựa rắn (H. 3–3).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_3.svg" alt="Hình 3-3" class="figure-img" />
  <p class="figure-caption">Hình 3-3</p>
</div>

– Khớp nối bản lề trơn giữa hai vật (H. 3–4).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_4.svg" alt="Hình 3-4" class="figure-img" />
  <p class="figure-caption">Hình 3-4</p>
</div>

– Liên kết dây mềm không dãn (H. 3–5).

– Dây mềm không dãn vắt qua ròng rọc cố định không ma sát (H. 3–5).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_5.svg" alt="Hình 3-5" class="figure-img" />
  <p class="figure-caption">Hình 3-5</p>
</div>

– Dây mềm không dãn vắt qua ròng rọc động và bỏ qua sự trượt giữa dây và ròng rọc (H. 3–6).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_6.svg" alt="Hình 3-6" class="figure-img" />
  <p class="figure-caption">Hình 3-6</p>
</div>

– Các cơ hệ phức tạp được cấu thành do nhiều cơ hệ đơn giản trên (H. 3–7).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_7.svg" alt="Hình 3-7" class="figure-img" />
  <p class="figure-caption">Hình 3-7</p>
</div>

Chú ý rằng đối với những liên kết có ma sát thì trong nhiều trường hợp các lực ma sát được xếp vào loại lực hoạt động như lực ma sát trượt trong trường hợp chuyển động trượt hoặc lăn có trượt, ngẫu lực ma sát lăn, lực đàn hồi, ...

### 3.1.2. Điều kiện cân bằng tổng quát của cơ hệ

*Nguyên lí di chuyển khả dĩ*

Đối với cơ hệ chịu liên kết giữ, dừng và lý tưởng, điều kiện cần và đủ để cơ hệ cân bằng ở vị trí đang xét là tổng công nguyên tố của các lực hoạt động tác dụng lên cơ hệ trong mọi di chuyển khả dĩ từ vị trí đang xét đều bằng không

$$\sum \delta A(\vec{F}_k) = \sum_{k=1}^N \vec{F}_k \delta \vec{r}_k = 0 \tag{3-19}$$

### 3.1.3. Điều kiện cân bằng của cơ hệ hôlônôm

Đối với cơ hệ chịu liên kết hôlônôm, giữ, dừng và lý tưởng, điều kiện cần và đủ để cơ hệ cân bằng ở vị trí đang xét là các lực suy rộng của các lực hoạt động tác dụng lên cơ hệ ứng với các toạ độ suy rộng đủ tính đối với vị trí đang xét đều bằng không

$$Q_i = 0, \quad i = \overline{1, n} \tag{3-20}$$

Trong trường hợp các lực hoạt động tác dụng lên cơ hệ là các lực có thế và giả sử hàm thế năng $\Pi$ có dạng

$$\Pi = \Pi(q_1, \dots, q_n).$$

thì điều kiện cân bằng của cơ hệ có dạng sau :

$$\frac{\partial \Pi}{\partial q_i} = 0, \quad i = \overline{1, n} \tag{3-21}$$

## 3.2. HƯỚNG DẪN ÁP DỤNG

Các bài toán thường gặp :

1. Tìm điều kiện cân bằng của cơ hệ có một hoặc nhiều bậc tự do (điều kiện về lực hoạt động, về vị trí cân bằng) khi giải loại bài toán này đầu tiên cần xác định số bậc tự do của cơ hệ, sau đó chọn các toạ độ suy rộng đủ và tính các lực suy rộng của các lực hoạt động ứng với các toạ độ suy rộng đủ và cuối cùng viết điều kiện cân bằng (3–20). Đối với trường hợp khi các lực hoạt động là các lực có thế thì thay cho việc tính lực suy rộng chúng ta tính hàm thế năng và sử dụng điều kiện dạng (3–21).

2. Xác định các phản lực liên kết của các hệ cơ học tĩnh định (số bậc tự do bằng không). Đối với loại bài toán này, đầu tiên cần thay thế cơ hệ đang khảo sát bằng cơ hệ có một hoặc nhiều bậc tự do nhờ tiên đề giải phóng liên kết. Nói cách khác, ta cần phải phá vỡ các liên kết mà các phản lực của chúng cần phải xác định và thay thế các liên kết bị phá vỡ bằng những phản lực liên kết. Khi đó số bậc tự do cơ hệ bằng số thành phần (ẩn) của các liên kết bị phá vỡ. Bằng cách đó chúng ta đưa bài toán về bài toán đã nói ở mục 1.

*Chú thích :*

a) Khi chọn các toạ độ suy rộng đủ của cơ hệ có thể từ việc phân tích khả năng chuyển động cơ hệ để biết số bậc tự do cơ hệ và nhờ đó chọn các toạ độ suy rộng đủ của cơ hệ.

b) Khi tính công các lực trong di chuyển khả dĩ có thể áp dụng mọi công thức tính công đã biết (xem §2–4).

## 3.3. BÀI GIẢI MẪU

### Thí dụ 3–1

Dùng kích (H. 3–8) để nâng vật có khối lượng $m = 5020\text{ kg}$. Tay quay $OA$ có độ dài là $a = 0,6\text{ m}$ và bước của trục vít là $h = 12\text{ mm}$. Tác dụng vào đầu mút $A$ của tay quay một lực $\vec{P}$ hướng vuông góc với chính tay quay và với đường tâm của thanh vít. Tìm cường độ của lực $\vec{P}$ khi cơ hệ cân bằng. Bỏ qua ma sát.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_8.svg" alt="Hình 3-8" class="figure-img" />
  <p class="figure-caption">Hình 3-8</p>
</div>

*Bài giải.* Cơ hệ khảo sát gồm toàn bộ kích. Cơ hệ có một bậc tự do với liên kết hôlônôm, giữ, dừng và lý tưởng.

Chọn toạ độ suy rộng $q = \varphi$ ; $\varphi$ là góc quay của tay quay $OA$. Hệ các lực hoạt động gồm lực $\vec{P}$ và $\vec{Q}$, ở đó $\vec{Q}$ là trọng lượng vật được nâng.

Cho cơ hệ di chuyển khả dĩ ứng với $\{\delta\varphi, \delta h\}$, trong đó $\delta h$ là di chuyển khả dĩ của vật được nâng ứng với di chuyển khả dĩ $\delta\varphi$ của tay quay $OA$. Biết rằng khi tay quay quay được góc $2\pi$ thì vật được nâng một đoạn là $h$.

Từ đó ta có :

$$\delta h = \frac{h}{2\pi} \delta\varphi \, .$$

Tổng công các lực hoạt động trong di chuyển khả dĩ bằng

$$\begin{aligned}
\sum \delta A(\vec{F}_k) &= P \cdot a \delta\varphi - Q\delta h \\
&= \left(P \cdot a - \frac{Qh}{2\pi}\right) \delta\varphi \, .
\end{aligned}$$

Vậy lực suy rộng của các lực hoạt động ứng với toạ độ suy rộng $\varphi$ bằng

$$Q_\varphi = P \cdot a - \frac{Qh}{2\pi} \, .$$

Từ điều kiện cân bằng cơ hệ

$$Q_\varphi = 0$$

ta có

$$P = \frac{Qh}{2\pi a}$$

Khi thay số ta nhận được

$$P = \frac{5020 \times 9,81 \times 0,012}{2 \times 3,14 \times 0,6} = 157\text{ N}$$

### Thí dụ 3–2

Máy ép trục vít được cấu tạo như trên hình 3–9.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_9.svg" alt="Hình 3-9" class="figure-img" />
  <p class="figure-caption">Hình 3-9</p>
</div>

Khung ép gồm bốn thanh mảnh cứng nhẹ và cùng chiều dài $a$ nối với nhau bằng bản lề ở bốn đỉnh : đỉnh trên cùng cố định ; đỉnh dưới cùng mắc vào bàn ép nằm ngang, hai đỉnh hai bên được mắc vào hai con chạy có tiện ren ốc. Hai ốc ren này được lắp vào một trục vít có các ren ở hai đầu thanh xoắn ngược chiều nhau ; với cùng bước ren là $h$. Ở đầu cùng thanh vít có gắn một vô lăng nhỏ. Vào lúc góc mở của khung ở hai đỉnh trên và dưới là $2\alpha$, ta tác dụng vào vô lăng một ngẫu lực có mômen quay $M$. Tìm lực ép của bàn ép tác dụng xuống vật chịu ép. Bỏ qua ma sát ở các khớp nối và những chỗ tiếp xúc.

*Bài giải.* Cơ hệ khảo sát là cơ cấu máy ép không kể vật chịu ép. Vị trí của cơ cấu được hoàn toàn xác định bằng góc $\alpha$ làm bởi thanh $DA$ và đường thẳng đứng. Vậy cơ hệ có một bậc tự do.

Chọn toạ độ suy rộng đủ là góc định vị của vô lăng $q = \varphi$.

Khi bỏ qua ma sát, liên kết của cơ hệ là liên kết lý tưởng.

Để tìm lực ép của bàn ép ta tìm phản lực $\vec{N}$. Nhằm mục đích này ta phá vỡ liên kết và xem phản lực $\vec{N}$ thuộc vào các lực hoạt động cùng với ngẫu lực $M$ tác dụng lên vô lăng.

Cho cơ hệ di chuyển khả dĩ bằng cách cho vô lăng một di chuyển khả dĩ $\delta\varphi$, khi đó $A$ có di chuyển $\delta x_A$ và bàn ép di chuyển xuống một đoạn $\delta y_c$.

Tổng công khả dĩ của các lực hoạt động sẽ bằng

$$\sum \delta A(\vec{F}_k) = M \delta\varphi - N \delta y_c \, .$$

Vì rằng

$$y_A = a \cos\alpha \text{ và } y_C = 2y_A = 2a \cos\alpha$$

nên

$$\delta y_C = -2a \sin\alpha \cdot \delta\alpha$$

Ngoài ra ta có mối liên hệ giữa góc quay của trục vít và di chuyển tịnh tiến của con chạy $A$

$$\delta x_A = -\frac{h \delta\varphi}{2\pi} \, .$$

Mặt khác $x_A = a \sin\alpha$ ; $\delta x_A = a \cos\alpha \cdot \delta\alpha$

Vậy

$$a \cos\alpha \delta\alpha = -\frac{h \delta\varphi}{2\pi} \, .$$

Từ đó

$$\delta\alpha = -\frac{h}{2a \cos\alpha \, \pi} \delta\varphi$$

và

$$\delta y_c = -2a \sin\alpha \delta\alpha = \frac{h}{\pi} \operatorname{tg}\alpha \delta\varphi$$

Biểu thức tổng công khả dĩ của các lực có thể viết trong dạng sau :

$$\sum \delta A(\vec{F}_k) = \left(M - \frac{Nh}{\pi} \operatorname{tg}\alpha\right) \delta\varphi \, .$$

Lực suy rộng của các lực hoạt động với toạ độ suy rộng đủ $\varphi$ bằng

$$Q_\varphi = M - \frac{Nh}{\pi} \operatorname{tg}\alpha \, .$$

Từ điều kiện cân bằng của hệ :

$$Q_\varphi = 0,$$

ta nhận được $N = \dfrac{M}{h} \pi \operatorname{ctg}\alpha$.

Đó cũng chính là giá trị của lực ép đang cần tìm.

### Thí dụ 3–3

Dùng tời kéo vật $A$ lên dốc với góc nghiêng $\alpha$ so với phương ngang. Vật $A$ có trọng lượng $P$. Hệ số ma sát trượt giữa vật $A$ và mặt phẳng nghiêng là $f$. Tác dụng lên trục tời ngẫu lực phát động có mômen $M$. Bán kính trục tời là $R$. Tìm điều kiện để kéo được vật lên từ trạng thái nghỉ (H. 3–10). Bỏ qua ma sát ở ổ trục kéo và trọng lượng dây.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_10.svg" alt="Hình 3-10" class="figure-img" />
  <p class="figure-caption">Hình 3-10</p>
</div>

*Bài giải.* Cơ hệ đang xét có một bậc tự do và chịu liên kết lý tưởng, nếu coi lực ma sát trượt của mặt dốc tác dụng lên vật $A$ là lực hoạt động cùng với các trọng lực và ngẫu lực phát động. Chọn toạ độ suy rộng là góc quay của tời, $q = \varphi$.

Để tìm điều kiện cân bằng của vật $A$ chúng ta xét hai trường hợp : vật $A$ sắp trượt lên và vật $A$ sắp trượt xuống.

Giả sử vật $A$ sắp trượt lên. Lúc đó lực ma sát hướng xuống.

Cho hệ di chuyển khả dĩ ứng với tời quay một góc $\delta\varphi$ thuận kim đồng hồ và vật $A$ di chuyển lên dọc mặt phẳng nghiêng một đoạn $\delta s$. Rõ ràng, ta có :

$$\delta s = R \delta\varphi \, .$$

Khi chú ý rằng

$$F_{ms} = fN = f P \cos\alpha,$$

ta có

$$\sum \delta A(\vec{F}_k) = [M - P(\sin\alpha + f\cos\alpha)R] \delta\varphi \, .$$

Vậy lực suy rộng ứng với toạ độ suy rộng $\varphi$ là :

$$Q_\varphi = M - P(\sin\alpha + f\cos\alpha)R \, .$$

Khi vật $A$ sắp trượt lên nhưng vẫn còn cân bằng ta có :

$$Q_\varphi = M - P(\sin\alpha + f\cos\alpha)R = 0.$$

Vậy để vật không trượt lên cần phải có :

$$M \le P(\sin\alpha + f\cos\alpha)R.$$

Bây giờ xét trường hợp vật $A$ sắp trượt xuống. Lúc đó lực ma sát sẽ hướng lên. Lặp lại lý luận như trên ta nhận được điều kiện cân bằng của vật $A$ khi nó có khuynh hướng trượt xuống

$$M - P(\sin\alpha - f\cos\alpha)R = 0.$$

Để vật không trượt xuống cần phải thực hiện điều kiện :

$$M \ge P(\sin\alpha - f\cos\alpha)R,$$

Như vậy vật $A$ cân bằng (nghĩa là không trượt lên cũng không trượt xuống), thì điều kiện sau cần được thoả mãn :

$$PR(\sin\alpha - f\cos\alpha) \le M \le PR(\sin\alpha + f\cos\alpha).$$

Nếu một trong hai điều kiện đó bị phá vỡ thì $A$ sẽ không cân bằng tức bị kéo lên hoặc bị trượt xuống.

### Thí dụ 3–4

Cho cơ hệ như trên hình vẽ (H. 3–11). Xác định mômen $M$ của ngẫu lực cần đặt vào trục kéo I và tỉ số trọng lượng của hai vật để cho cơ hệ cân bằng. Cho bán kính của trục tời là $R$. Bỏ qua trọng lượng của ròng rọc và ma sát ở các ổ trục quay :

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_11.svg" alt="Hình 3-11" class="figure-img" />
  <p class="figure-caption">Hình 3-11</p>
</div>

*Bài giải.* Hệ khảo sát gồm có trục kéo I, các ròng rọc II, III, IV cùng dây vắt qua chúng và hai vật có trọng lượng lần lượt $P_1, P_2$. Cơ hệ có hai bậc tự do.

Có thể chọn $q_1 = \varphi_1$ ; $q_2 = \varphi_2$, ở đó $\varphi_1$ và $\varphi_2$ là hai góc định vị của trục I và của ròng rọc II tương ứng làm các toạ độ suy rộng đủ.

Các lực hoạt động gồm có các trọng lực $\vec{P}_1, \vec{P}_2$ và ngẫu lực $M$.

Để tính các lực suy rộng ứng với các toạ độ suy rộng đủ ta cho cơ hệ một di chuyển khả dĩ bất kì ứng với góc quay vô cùng bé $\delta\varphi_1$ và $\delta\varphi_2$ của trục I và ròng rọc II. Quy ước rằng các di chuyển thẳng đứng là dương nếu chúng hướng lên và là âm khi chúng hướng xuống, các di chuyển góc là dương khi chúng ngược với chiều quay của kim đồng hồ và là âm trong trường hợp trái lại. Gọi $\delta s_1, \delta s_2$ là di chuyển khả dĩ của các điểm đặt của các lực $\vec{P}_1$ và $\vec{P}_2$. Tổng công khả dĩ của các lực hoạt động bằng :

$$\sum \delta A(\vec{F}_k) = M \delta\varphi_1 - P_1 \delta s_1 - P_2 \delta s_2.$$

Để biểu diễn các biến phân $\delta s_1, \delta s_2$ theo $\delta\varphi_1$ và $\delta\varphi_2$ chúng ta chú ý rằng ròng rọc IV có tâm vận tốc tức thời là $B$, nên

$$\delta s_2 = \delta s_D \text{ và } \delta s_D = \frac{r \delta\varphi_2}{2} \, .$$

Ngoài ra ròng rọc III chuyển động song phẳng nên ta có

$$\delta s_C = \frac{\delta s_A + \delta s_E}{2}$$

Từ đó suy ra

$$\delta s_1 = \delta s_A = 2\delta s_C - \delta s_E.$$

Nhưng

$$\delta s_C = -r \delta\varphi_2, \quad \delta s_E = -R \delta\varphi_1,$$

nên

$$\delta s_1 = -2r \delta\varphi_2 + R \delta\varphi_1,$$

Thay các giá trị đó của $\delta s_1$ và $\delta s_2$ vào biểu thức tổng công khả dĩ ta có :

$$\begin{aligned}
\sum \delta A(\vec{F}_k) &= M \delta\varphi_1 - P_1(R \delta\varphi_1 - 2r \delta\varphi_2) \\
&\quad - P_2 \frac{r \delta\varphi_2}{2} \\
&= (M - P_1 R)\delta\varphi_1 + r\left(2P_1 - \frac{P_2}{2}\right)\delta\varphi_2.
\end{aligned}$$

Vậy các lực suy rộng $Q_1$ và $Q_2$ ứng với các toạ độ suy rộng đủ $\varphi_1$ và $\varphi_2$ là

$$Q_1 = M - P_1 R \, ; \qquad Q_2 = r\left(2P_1 - \frac{P_2}{2}\right)$$

Điều kiện cân bằng của cơ hệ sẽ là

$$M - P_1 R = 0 \, ; \qquad 2P_1 - \frac{P_2}{2} = 0$$

Từ đó ta nhận được

$$M = P_1 R \, ; \qquad P_2 = 4P_1.$$

*Chú thích :* Để tìm các lực suy rộng $Q_1, Q_2$ có thể sử dụng phương pháp 3 đã nêu ở phần cơ sở lý thuyết. Thí dụ, để tính lực suy rộng $Q_1$ ứng với toạ độ suy rộng $\varphi_1$ ta cho hệ một di chuyển khả dĩ đặc biệt như sau : $\delta\varphi_1 > 0$, $\delta\varphi_2 = 0$ và tính tổng công khả dĩ của các lực hoạt động trong di chuyển khả dĩ đặc biệt này.

Chú ý là trong di chuyển khả dĩ đặc biệt này chỉ có ngẫu lực $M$ và lực $\vec{P}_1$ sinh công (lực $\vec{P}_2$ không sinh công vì trong di chuyển khả dĩ đặc biệt này ròng rọc IV đứng yên). Vậy tổng công các lực hoạt động trong di chuyển khả dĩ đặc biệt trên bằng :

$$\sum \delta A(\vec{F}_k) = M \delta\varphi_1 - P_1 \delta s_A.$$

Vì trong di chuyển khả dĩ đặc biệt đã chọn ròng rọc III quay quanh tâm của mình. Do đó.

$$\delta s_A = \delta s_D = R \delta\varphi_1.$$

Thay giá trị của $\delta s_A$ vào biểu thức của tổng công khả dĩ của các lực hoạt động, ta có :

$$\sum \delta A(\vec{F}_k) = (M - P_1 R)\delta\varphi_1.$$

Từ đó

$$Q_1 = \frac{\sum \delta A(\vec{F}_k)}{\delta\varphi_1} = M - P_1 R$$

Bằng cách hoàn toàn tương tự, để tính lực suy rộng $Q_2$ ứng với toạ độ suy rộng $\varphi_2$ ta cho hệ một di chuyển khả dĩ đặc biệt như sau : $\delta\varphi_1 = 0$, $\delta\varphi_2 > 0$.

Chú ý rằng trong di chuyển khả dĩ đã chọn, ròng rọc I đứng yên (và do đó ngẫu lực $M$ không sinh công) còn ròng rọc III và IV chuyển động song phẳng quanh những tâm vận tốc $D$ và $B$ tương ứng. Ta có

$$\delta s_A = 2\delta s_C \, ; \quad \delta s_G = \frac{1}{2} \delta s_D,$$

$C$ và $G$ là tâm ròng rọc III và IV tương ứng.

Vì :

$$\delta s_C = \delta s_D = r\delta\varphi_2,$$

nên

$$\delta s_A = 2r\delta\varphi_2 \, ; \quad \delta s_G = \frac{r\delta\varphi_2}{2}$$

Tổng công khả dĩ của các lực hoạt động trong di chuyển khả dĩ đặc biệt đã chọn bằng :

$$\begin{aligned}
\sum \delta A(\vec{F}_k) &= P_1 \delta s_A - P_2 \delta s_G \\
&= 2P_1 r \delta\varphi_2 - P_2 \frac{r}{2} \delta\varphi_2
\end{aligned}$$

Vậy

$$Q_2 = \frac{\sum \delta A(\vec{F}_k)}{\delta\varphi_2} = \left(2P_1 - \frac{P_2}{2}\right) r \, .$$

Chúng ta nhận được kết quả đã tìm thấy ở trên.

### Thí dụ 3–5

Hai thanh đồng chất $OA$ và $AB$ nối với nhau bằng bản lề $A$ được treo vào tường nhờ bản lề $O$. Tại điểm $B$ có lực $\vec{F}$ tác dụng theo phương ngang hướng từ trái sang phải. Cho $OA = 2l_1$ ; $AB = 2l_2$, trọng lượng của các thanh $OA$ và $AB$ lần lượt là $P_1$ và $P_2$. Cho biết cơ hệ ở trạng thái cân bằng. Tìm các góc lệch $\varphi_1$ và $\varphi_2$ của thanh $OA$ và $AB$ làm với phương thẳng đứng (H. 3–12).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_12.svg" alt="Hình 3-12" class="figure-img" />
  <p class="figure-caption">Hình 3-12</p>
</div>

*Bài giải.* Cơ hệ khảo sát gồm hai thanh $OA$ và $AB$. Chọn các toạ độ suy rộng là các góc $\varphi_1$ và $\varphi_2$

$$q_1 = \varphi_1 \, ; \quad q_2 = \varphi_2.$$

Rõ ràng các toạ độ này độc lập với nhau và đủ để xác định vị trí của cơ hệ, do đó cơ hệ có hai bậc tự do.

Hệ gồm các vật rắn liên kết với nhau bằng các bản lề không ma sát nên cơ hệ có liên kết lý tưởng. Các lực hoạt động gồm $\vec{P}_1, \vec{P}_2$ và $\vec{F}$.

Để tính các lực suy rộng chúng ta sử dụng phương pháp thứ hai đã trình bày ở trên

$$\sum \delta A(\vec{F}_k) = \sum (F_{kx}\delta x_k + F_{ky}\delta y_k + F_{kz}\delta z_k).$$

Cho hệ trục $Oxy$ như hình vẽ (Hình 3–12).

Các lực hoạt động $\vec{P}_1(P_{1x}, P_{1y})$ ; $\vec{P}_2(P_{2x}, P_{2y})$, $\vec{F}(F_x, F_y)$ có các hình chiếu bằng :

$$\begin{aligned}
P_{1x} &= 0, & P_{1y} &= P_1, & P_{2x} &= 0, \\
P_{2y} &= P_2, & F_x &= F, & F_y &= 0.
\end{aligned}$$

Điểm đặt của các lực $\vec{P}_1, \vec{P}_2$ và $\vec{F}$ có các toạ độ :

$$\begin{aligned}
x_1 &= l_1\sin\varphi_1 \, ; \quad y_1 = l_1\cos\varphi_1, \\
x_2 &= 2l_1\sin\varphi_1 + l_2\sin\varphi_2 \, ; \\
y_2 &= 2l_1\cos\varphi_1 + l_2\cos\varphi_2, \\
x_3 &= 2l_1\sin\varphi_1 + 2l_2\sin\varphi_2 \, ; \\
y_3 &= 2l_1\cos\varphi_1 + 2l_2\cos\varphi_2
\end{aligned}$$

Từ đó suy ra :

$$\begin{aligned}
\delta y_1 &= -l_1\sin\varphi_1\delta\varphi_1 \\
\delta y_2 &= -2l_1\sin\varphi_1\delta\varphi_1 - l_2\sin\varphi_2\delta\varphi_2, \\
\delta x_3 &= 2l_1\cos\varphi_1\delta\varphi_1 + 2l_2\cos\varphi_2\delta\varphi_2.
\end{aligned}$$

Tổng công khả dĩ của các lực hoạt động bằng :

$$\begin{aligned}
\sum \delta A(\vec{F}_k) &= P_{1x}\delta x_1 + P_{1y}\delta y_1 + P_{2x}\delta x_2 \\
&\quad + P_{2y}\delta y_2 + F_x\delta x_3 + F_y\delta y_3 \\
&= -P_1 l_1\sin\varphi_1\delta\varphi_1 \\
&\quad + P_2(-2l_1\sin\varphi_1\delta\varphi_1 - l_2\sin\varphi_2\delta\varphi_2) \\
&\quad + F(2l_1\cos\varphi_1\delta\varphi_1 + 2l_2\cos\varphi_2\delta\varphi_2) \\
&= (-P_1 l_1\sin\varphi_1 - 2P_2 l_1\sin\varphi_1 + 2Fl_1\cos\varphi_1)\delta\varphi_1 \\
&\quad + (-P_2 l_2\sin\varphi_2 + 2Fl_2\cos\varphi_2)\delta\varphi_2.
\end{aligned}$$

Các hệ số của $\delta\varphi_1, \delta\varphi_2$ trong biểu thức trên chính là các lực suy rộng $Q_1, Q_2$ ứng với các toạ độ suy rộng $\varphi_1, \varphi_2$.

Vậy

$$\begin{aligned}
Q_1 &= l_1[2F\cos\varphi_1 - (P_1 + 2P_2)\sin\varphi_1] \, ; \\
Q_2 &= l_2(2F\cos\varphi_2 - P_2\sin\varphi_2).
\end{aligned}$$

Điều kiện cân bằng của cơ hệ : $Q_1 = 0$ ; $Q_2 = 0$ trở thành

$$\begin{aligned}
2F\cos\varphi_1 - (P_1 + 2P_2)\sin\varphi_1 &= 0, \\
2F\cos\varphi_2 - P_2\sin\varphi_2 &= 0.
\end{aligned}$$

Giải hệ phương trình này ta tìm được :

$$\operatorname{tg}\varphi_1 = \frac{2F}{P_1 + 2P_2} \, ; \quad \operatorname{tg}\varphi_2 = \frac{2F}{P_2} \, .$$

Sau đây chúng ta sẽ trình bày một phương pháp khác tính các lực suy rộng $Q_1$ và $Q_2$.

Vì các lực $\vec{P}_1, \vec{P}_2$ là các lực có thế với hàm thế năng :

$$\begin{aligned}
\Pi &= -P_1 y_1 - P_2 y_2 + C \\
&= -P_1 l_1\cos\varphi_1 - P_2(2l_1\cos\varphi_1 + l_2\cos\varphi_2) + C,
\end{aligned}$$

ở đó $C$ là hằng số, còn lực $\vec{F}$ là lực không thế nên

$$Q_j = -\frac{\partial \Pi}{\partial q_j} + Q_j^*, \quad j = 1, 2$$

$Q_j^*$ là lực suy rộng của lực không thế $\vec{F}$ nó được tính nhờ biểu thức

$$\begin{aligned}
\sum \delta A(\vec{F}_k) &= F_x\delta x_3 + F_y\delta y_3 \\
&= F(2l_1\cos\varphi_1\delta\varphi_1 + 2l_2\cos\varphi_2\delta\varphi_2).
\end{aligned}$$

Vậy :

$$Q_1^* = 2Fl_1\cos\varphi_1 \, ; \quad Q_2^* = 2Fl_2\cos\varphi_2.$$

Các lực suy rộng $Q_1, Q_2$ sẽ bằng :

$$\begin{aligned}
Q_1 &= -\frac{\partial \Pi}{\partial \varphi_1} + Q_1^* \\
&= l_1[2F\cos\varphi_1 - (P_1 + 2P_2)\sin\varphi_1], \\
Q_2 &= -\frac{\partial \Pi}{\partial \varphi_2} + Q_2^* \\
&= l_2(2F\cos\varphi_2 - P_2\sin\varphi_2).
\end{aligned}$$

Từ đó dễ dàng nhận được kết quả đã tìm thấy ở trên.

### Thí dụ 3–6

Cho hệ dầm gồm hai thanh $AB$ và $BC$ nối với nhau bằng bản lề $B$, liên kết với tường nhờ ngàm $A$ và với mặt nằm ngang nhờ gối tựa có con lăn $C$. Trên dầm $AB$ có tải trọng phân bố đều với cường độ $q_0\text{ N/m}$, tại điểm giữa của dầm $BC$ có tác dụng lực tập trung $P$. Chiều dài của dầm $AB$ bằng $2a$ và chiều dài của $BC$ bằng $4a$.

Tìm phản lực tại gối $C$ và ngàm $A$. Bỏ qua ma sát (H. 3–13a).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_13.svg" alt="Hình 3-13" class="figure-img" />
  <p class="figure-caption">Hình 3-13</p>
</div>

*Bài giải.* Khảo sát hệ dầm đã cho. Đầu tiên ta tìm phản lực ở gối $C$.

Phá vỡ liên kết tại $C$ và thay thế tác dụng của nó bằng phản lực $\vec{N}_c$ hướng thẳng đứng lên (H. 3–13b). Trong trường hợp này thanh $AB$ đứng yên, còn thanh $BC$ quay được quanh $B$. Ta có cơ hệ một bậc tự do cân bằng dưới tác dụng các lực hoạt động $\vec{P}, \vec{Q}$ và $\vec{N}_c$, trong đó $Q = 2aq_0$.

Cho cơ hệ một di chuyển khả dĩ đặc biệt bằng cách cho dầm $BC$ xoay quanh điểm $B$ một góc vô cùng bé $\delta\varphi$ (H. 3–13b).

Điều đó có nghĩa là ta chọn toạ độ suy rộng đủ của cơ hệ là góc định vị của dầm $BC$ quay quanh $B$, $q = \varphi$.

Tổng công khả dĩ của các lực hoạt động bằng.

$$\begin{aligned}
\sum \delta A(\vec{F}_k) &= [\overline{m}_B(\vec{P}) + \overline{m}_B(\vec{N}_C)]\delta\varphi \\
&= 2aP\delta\varphi - 4aN_C\delta\varphi.
\end{aligned}$$

Vậy các lực suy rộng ứng với toạ độ suy rộng $\varphi$ bằng

$$Q_\varphi = \frac{\sum \delta A(\vec{F}_k)}{\delta\varphi} = 2aP - 4aN_C$$

Khi sử dụng điều kiện cân bằng của hệ, $Q_\varphi = 0$, ta nhận được :

$$N_C = \frac{P}{2}$$

Bây giờ chuyển sang tìm phản lực của liên kết ngàm $A$ : Muốn vậy ta phá vỡ liên kết ngàm $A$ và thay thế tác dụng của nó bằng các lực $\vec{X}_A, \vec{Y}_A$ và ngẫu lực $\overline{m}_A$ (H. 3–13c).

Bằng cách như vậy ta có cơ hệ ba bậc tự do chịu tác dụng các lực hoạt động gồm các lực $\vec{P}, \vec{Q}, \vec{X}_A, \vec{Y}_A, \overline{m}_A$.

Chọn các toạ độ suy rộng đủ như sau : $q_1 = x_C$ ; $q_2 = \varphi$ ; $q_3 = \theta$, ở đó $x_C$ là hoành độ của điểm $C$, $\varphi$ và $\theta$ là các góc định vị của dầm $BC$ và dầm $AB$ quay tương ứng quanh $C$ và $B$ so với đường nằm ngang. Ta lần lượt tính các lực $Q_{x_c}$, $Q_\varphi$ và $Q_\theta$ ứng với các toạ độ suy rộng $x_C, \varphi$ và $\theta$.

Để tính lực suy rộng $Q_{x_c}$ ứng với toạ độ suy rộng $x_C$ ta cho cơ hệ một di chuyển khả dĩ đặc biệt như sau : $\delta x_C > 0$ ; $\delta\varphi = \delta\theta = 0$, tức xem $ABC$ là một vật rắn di chuyển theo phương ngang sang trái một đoạn $\delta x_C$ (H. 3–13c) và tính tổng công khả dĩ của các lực hoạt động trong di chuyển khả dĩ đặc biệt này.

$$\sum \delta A(\vec{F}_k) = -X_A \delta x_C.$$

Vậy :

$$Q_{x_c} = \frac{\sum \delta A(\vec{F}_k)}{\delta x_C} = -X_A.$$

Để tính lực suy rộng $Q_\theta$ ta cho hệ di chuyển khả dĩ đặc biệt như sau : $\delta x_C = 0$, $\delta\varphi = 0$, $\delta\theta > 0$ tức giữ thanh $BC$ đứng yên và cho thanh $AB$ quay quanh $B$ một góc $\delta\theta$ (H. 3–13d). Tổng công các lực hoạt động trong di chuyển khả dĩ này là

$$\sum \delta A_\theta(\vec{F}_k) = (Qa + m_A - 2aY_A)\delta\theta.$$

Vậy

$$Q_\theta = \frac{\sum \delta A_\theta(\vec{F}_k)}{\delta\theta} = Qa + m_A - 2aY_A.$$

Để tính lực suy rộng $Q_\varphi$ ta cho hệ di chuyển khả dĩ như sau : $\delta x_C = 0$, $\delta\varphi > 0$, $\delta\theta = 0$ tức giữ điểm $C$ đứng yên, thanh $BC$ quay quanh $C$ một góc $\delta\varphi$ còn thanh $AB$ di chuyển tịnh tiến trên theo phương đứng (H. 3–13e). Ký hiệu $\sum \delta A_\varphi(\vec{F}_k)$ là tổng công khả dĩ các lực hoạt động trong di chuyển khả dĩ này. Ta có :

$$\sum \delta A_\varphi(\vec{F}_k) = [-4aY_A + 4aQ + 2aP]\delta\varphi$$

Vậy

$$Q_\varphi = \frac{\delta A_\varphi(\vec{F}_k)}{\delta\varphi} = 2a(P + 2Q - 2Y_A)$$

Bây giờ ta sử dụng điều kiện cân bằng của cơ hệ ta nhận được

$X_A = 0$ ; $Qa + m_A - 2aY_A = 0$ ; $2a(P + 2Q - 2Y_A) = 0$

Từ đó :

$X_A = 0$ ; $Y_A = Q + \dfrac{P}{2}$ ; $m_A = a(P + Q)$.

Có thể đồng thời phá vỡ các liên kết tại $A$ và $C$. Lúc đó ta có hệ bốn bậc tự do (H. 3–13g). Bằng cách tương tự trên, ta tính đồng thời 4 đại lượng $N_C, X_A, Y_A, m_A$.

### Thí dụ 3–7

Trên hình 3–14 ta có sơ đồ cơ cấu culíc của máy bào ngang. Tay quay $OA$ có chiều dài $a$, cần lắc $CB$ có chiều dài $l$, còn khoảng cách giữa hai trục $O$ và $C$ là $d$. Ở vị trí đang xét $OA$ tạo với phương thẳng đứng một góc $\varphi$. Tay quay $OA$ chịu tác dụng một ngẫu lực có mômen $M$, còn cần lắc $CB$ chịu tác dụng của lực ngang $\vec{F}$ tại $B$ hướng từ trái sang phải. Bỏ qua ma sát và trọng lượng bản thân của các khâu. Tìm điều kiện cân bằng của cơ cấu ở vị trí đó và tìm phản lực tại trục quay $C$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_14.svg" alt="Hình 3-14" class="figure-img" />
  <p class="figure-caption">Hình 3-14</p>
</div>

*Bài giải.* Cơ hệ khảo sát là cơ cấu culíc. Cơ hệ có một bậc tự do với liên kết hôlônôm. Chọn góc quay $\varphi$ của tay quay $OA$ làm toạ độ suy rộng đủ. Lực hoạt động gồm lực $\vec{F}$ và ngẫu lực $M$. Do bỏ qua ma sát nên liên kết là lý tưởng.

Đầu tiên tính lực suy rộng ứng với toạ độ suy rộng $\varphi$. Muốn vậy cho hệ một di chuyển khả dĩ ứng với tay quay $OA$ quay một góc vô cùng bé $\delta\varphi$ ngược chiều kim đồng hồ. Khi đó cần lắc $CB$ quay quanh $C$ một góc $\delta\alpha$. Vì cơ hệ có một bậc tự do nên $\delta\alpha$ phụ thuộc vào $\delta\varphi$. Để tìm mối liên hệ giữa $\delta\alpha$ và $\delta\varphi$ chúng ta chú ý $A$ có chuyển động phức hợp.

$$\vec{v}_a = \vec{v}_e + \vec{v}_r,$$

trong đó :

$$v_a = \omega_{OA} \cdot OA \, ; \quad v_e = \omega_{CB} \cdot CA.$$

Dễ dàng nhận được :

$$v_e = v_a \cos(\varphi - \alpha).$$

Vậy

$$\omega_{CB} = \omega_{OA} \cdot \frac{OA}{CA} \cos(\varphi - \alpha).$$

Từ đó chúng ta có :

$$\delta\alpha = \delta\varphi \frac{a}{l_1} \cdot \cos(\varphi - \alpha),$$

trong đó $l_1$ là chiều dài của đoạn $CA$.

Bây giờ tính tổng công khả dĩ của các lực hoạt động trong di chuyển khả dĩ đã chọn

$$\begin{aligned}
\sum \delta A(\vec{F}_k) &= M\delta\varphi - Fl\cos\alpha\delta\alpha \\
&= \left[M - Fl\cos\alpha \frac{a}{l_1}\cos(\varphi - \alpha)\right]\delta\varphi.
\end{aligned}$$

Vậy lực suy rộng $Q_\varphi$ ứng với toạ độ suy rộng $\varphi$ bằng

$$\begin{aligned}
Q_\varphi &= \frac{\sum \delta A(\vec{F}_k)}{\delta\varphi} \\
&= M - Fl\cos\alpha \cdot \frac{a}{l_1}\cos(\varphi - \alpha).
\end{aligned}$$

Từ điều kiện cân bằng của cơ hệ $Q_\varphi = 0$, ta nhận được :

$$M = F \frac{l}{l_1} a \cos\alpha \cos(\varphi - \alpha)$$

Bây giờ ta chuyển sang xác định phản lực tại trục quay $C$. Giải phóng liên kết tại $C$ và thay thế nó bằng hai phản lực $X_C$ và $Y_C$ (H. 3–15). Ta có cơ hệ ba bậc tự do. Chú ý rằng khi giải phóng liên kết, khâu $BC$ trở thành khâu song phẳng nhưng chỉ có hai bậc tự do. Ta có thể chọn các toạ độ suy rộng như sau $q_1 = \varphi$ ; $q_2 = \alpha$ ; $q_3 = s$, trong đó $\varphi$ được xác định như trên, $\alpha$ là góc giữa thanh $BC$ và đường thẳng đứng, còn $s$ là toạ độ của một điểm bất kỳ của khâu $BC$ (có thể lấy điểm $C$ của khâu $BC$) đối với điểm $A$, tức $q_3 = \overline{AC} = s$. Để tìm $X_C$ và $Y_C$ chúng ta có thể sử dụng điều kiện cân bằng của cơ hệ trong toạ độ suy rộng, tức $Q_\varphi = 0$ ; $Q_\alpha = 0$ ; $Q_s = 0$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_15.svg" alt="Hình 3-15" class="figure-img" />
  <p class="figure-caption">Hình 3-15</p>
</div>

Dễ dàng thấy rằng từ điều kiện $Q_\varphi = 0$ ta tìm được mối quan hệ giữa ngẫu lực $M$ và lực $F$ để cơ cấu cân bằng đã thiết lập ở trên.

Bây giờ để tìm $X_C$ và $Y_C$ chúng ta sử dụng hai điều kiện còn lại $Q_\alpha = 0$ và $Q_s = 0$.

Đầu tiên ta tính lực suy rộng $Q_\alpha$. Muốn thế cho cơ hệ một di chuyển khả dĩ đặc biệt như sau : $\delta\varphi = \delta s = 0$, $\delta\alpha > 0$. Tổng công khả dĩ của các lực hoạt động $\vec{X}_C, \vec{Y}_C, \overline{M}, \vec{F}$ trong di chuyển khả dĩ này sẽ là :

$$\begin{aligned}
\sum \delta A_\alpha(\vec{F}_k) &= [l_1\sin\alpha Y_C - l_1\cos\alpha \cdot X_C \\
&\quad + (l - l_1)F\cos\alpha]\delta\alpha.
\end{aligned}$$

Vậy lực suy rộng $Q_\alpha$ ứng với toạ độ suy rộng $\alpha$ bằng :

$$\begin{aligned}
Q_\alpha &= \frac{\sum \delta A_\alpha(\vec{F}_k)}{\delta\alpha} \\
&= -l_1\sin\alpha Y_C + l_1\cos\alpha X_C - (l - l_1)F\cos\alpha.
\end{aligned}$$

Bây giờ chuyển đến tính lực suy rộng $Q_s$ ứng với toạ độ suy rộng $s$.

Ta cho cơ hệ một di chuyển khả dĩ đặc biệt như là : $\delta\varphi = \delta\alpha = 0$, $\delta s > 0$. Ký hiệu $\sum \delta A_s(\vec{F}_k)$ là tổng công khả dĩ của các lực hoạt động trong di chuyển khả dĩ đã cho, ta có :

$$\sum \delta A_s(\vec{F}_k) = -X_C\sin\alpha\delta s - Y_C\cos\alpha\delta s - F\sin\alpha\delta s.$$

Từ đó

$$\begin{aligned}
Q_s &= \frac{\sum \delta A_s(\vec{F}_k)}{\delta s} \\
&= -X_C\sin\alpha - Y_C\cos\alpha - F\sin\alpha.
\end{aligned}$$

Từ điều kiện cân bằng của cơ hệ $Q_\alpha = 0$, $Q_s = 0$ chúng ta nhận được :

$$\begin{aligned}
-l_1\sin\alpha Y_C + l_1\cos\alpha X_C - (l - l_1)F\cos\alpha &= 0, \\
-X_C\sin\alpha - Y_C\cos\alpha - F\sin\alpha &= 0.
\end{aligned}$$

Vậy

$$\begin{aligned}
X_C &= F\left(\frac{l}{l_1}\cos^2\alpha - 1\right) \\
Y_C &= -\frac{l}{l_1} F\cos\alpha\sin\alpha.
\end{aligned}$$

Thành phần phản lực $\vec{Y}_C$ sẽ ngược chiều hình vẽ, còn thành phần phản lực $\vec{X}_C$ đúng chiều hình vẽ nếu thoả mãn điều kiện :

$$\frac{l}{l_1}\cos^2\alpha - 1 > 0.$$

Tức là

$$l_1 < l\cos^2\alpha$$

## 3.4. BÀI TẬP

**3.1.** Xác định mối liên hệ giữa cường độ của các lực $\vec{P}$ và $\vec{Q}$ trong máy ép dạng nêm như trên hình vẽ. Lực $\vec{P}$ tác dụng vào đầu mút tay quay và hướng vuông góc với mặt phẳng, chứa đường tâm của trục vít và tay quay. Bước của trục vít là $h$, góc đỉnh nêm là $\alpha$, chiều dài tay quay bằng $a$. Bỏ qua ma sát, (H. 3–16).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_16.svg" alt="Hình 3-16" class="figure-img" />
  <p class="figure-caption">Hình 3-16</p>
</div>

*Trả lời :* $Q = P\dfrac{2\pi a}{h \operatorname{tg}\alpha}$ .

**3.2.** Cho cơ cấu máy ép như hình vẽ. Ngẫu lực tác dụng lên vô lăng có mômen bằng $M$. Nhờ trục vít được cắt ren ngược chiều mà các con chạy $B$ và $C$ đồng thời tiến gần và lùi xa nhau. Ở vị trí của cơ cấu mà $BD$ và $OD$ tạo với đường thẳng đứng lần lượt góc $\psi$ và $\alpha$, xác định lực ép $S$ tác dụng vào vật chịu ép. Cho biết bước của trục vít là $h$ và bỏ qua ma sát và trọng lượng các chi tiết, (H. 3–17).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_17.svg" alt="Hình 3-17" class="figure-img" />
  <p class="figure-caption">Hình 3-17</p>
</div>

*Trả lời :* $S = \dfrac{\pi\sin(\alpha + \psi)}{\sin\psi\cos\alpha} \cdot \dfrac{M}{h}$

**3.3.** Cho một máy ép thuỷ lực như trên hình vẽ, lực $\vec{F}$ tác dụng vào đầu mút tay quay và vuông góc với nó. Diện tích tiết diện của xylanh trái là $S_1$ và xylanh phải là $S_2$. Xác định lực $\vec{Q}$ nén vật $M$. Cho $OA = a$, $OB = b$. Bỏ qua ma sát (H. 3–18).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_18.svg" alt="Hình 3-18" class="figure-img" />
  <p class="figure-caption">Hình 3-18</p>
</div>

*Trả lời :* $Q = \dfrac{a S_2 F}{b S_1}$

**3.4.** Cho cơ cấu hãm tàu như hình vẽ (H. 3–19). Tìm hệ thức giữa $a$, $b$ và $c$ để dưới tác dụng của lực $\vec{Q}$ hướng theo phương ngang, hai má hãm tác dụng vào hai bánh xe $C$ và $D$ các lực bằng nhau. Tìm giá trị của các lực này. Bỏ qua trọng lượng các thanh và xem các bánh xe đứng yên.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_19.svg" alt="Hình 3-19" class="figure-img" />
  <p class="figure-caption">Hình 3-19</p>
</div>

*Trả lời :* $\dfrac{a}{b} = \dfrac{a + b + c}{c}$ ; $F = Q\dfrac{a + b}{2b}$

**3.5.** Cơ cấu để nâng bánh xe máy cày là một cơ cấu bốn khâu $OCBO_1$. Khâu $BC$ gắn chặt với đĩa mà tâm điểm là $B$. Tại điểm $A$ của đĩa có đặt lực ngang $P$ hướng theo tiếp tuyến và tại bản lề $B$ có tác dụng lực thẳng đứng $R$. Chiều dài các thanh $BC = l_1$, $BO_1 = l_2$ các kích thước khác cho trên hình vẽ ($H, L, \alpha_1, \alpha_2$) (H 3–20).

Xác định mối liên hệ giữa các lực $R$ và $S$ khi cơ cấu cân bằng ở vị trí như hình vẽ. Bỏ qua trọng lượng các thanh và đĩa, cũng như ma sát ở các bản lề :

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_20.svg" alt="Hình 3-20" class="figure-img" />
  <p class="figure-caption">Hình 3-20</p>
</div>

*Trả lời :* $S = R\dfrac{L l_1\sin\alpha_1}{H l_2\sin\alpha_2}$

**3.6.** Tìm mối liên hệ giữa cường độ của các lực $P$ và $Q$ trong máy ép biểu diễn trên hình vẽ, (H. 3–21).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_21.svg" alt="Hình 3-21" class="figure-img" />
  <p class="figure-caption">Hình 3-21</p>
</div>

*Trả lời :* $Q = P\operatorname{ctg}\alpha \cdot \operatorname{ctg}\beta$.

**3.7.** Máy dùng để thử mẫu khi kéo được biểu diễn như hình vẽ. Xác định sự phụ thuộc giữa ứng lực $S$ trong mẫu $K$ và khoảng cách $x$ của vật $P$ đối với vị trí "không" (0) nếu nhờ vật $Q$ máy được cân bằng sao cho khi vật $P$ tại vị trí "không" và khi vắng ứng lực trong mẫu $K$ thì tất cả các đòn đều nằm ngang. Cho các khoảng cách $l_1, l_2, e$, (H. 3–22).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_22.svg" alt="Hình 3-22" class="figure-img" />
  <p class="figure-caption">Hình 3-22</p>
</div>

*Trả lời :* $S = \dfrac{P l_1}{e l_2} x$ .

**3.8.** Cho cơ cấu máy kích như hình (H. 3–23). Chuyển động của tay quay $OA$, qua các bánh răng 1, 2, 3, 4, 5 được truyền sang thanh khía của kích. Tìm lực $P$ cần đặt vuông góc với tay quay tại đầu mút của nó để khi kích cân bằng thì lực nâng của nó bằng $4710\text{ N}$. Bán kính các bánh răng là : $r_1 = 3\text{ cm}$ ; $r_2 = 12\text{ cm}$ ; $r_3 = 4\text{ cm}$ ; $r_4 = 16\text{ cm}$ ; $r_5 = 3\text{ cm}$. Chiều dài tay quay $R = 18\text{ cm}$.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_23.svg" alt="Hình 3-23" class="figure-img" />
  <p class="figure-caption">Hình 3-23</p>
</div>

*Trả lời :* $P = Q\dfrac{r_1 r_3 r_5}{r_2 r_4 R} = 49\text{ N}$.

**3.9.** Trục kéo vi sai có hai tầng $A$ và $B$ gắn chặt với nhau, chuyển động nhờ tay quay $OC$ dài là $R$.

Vật nặng $D$ trọng lượng $Q$ được treo vào ròng rọc động $E$. Khi quay tay quay để kéo vật lên thì nhánh dây trái nhả ra khỏi tầng $B$ và nhánh dây phải quấn vào tầng $A$. Bán kính của hai tầng đó lần lượt là $r_2$ và $r_1$, với $r_1 < r_2$ (H. 3–24).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_24.svg" alt="Hình 3-24" class="figure-img" />
  <p class="figure-caption">Hình 3-24</p>
</div>

Tìm cường độ lực $\vec{P}$ cần đặt vuông góc với tay quay tại đầu mút của nó để giữ cho hệ cân bằng. Cho $Q = 7050\text{ N}$ ; $r_2 = 12\text{ cm}$, $r_1 = 10\text{ cm}$, $R = 60\text{ cm}$.

*Trả lời :* $P = Q\dfrac{r_2 - r_1}{2R} = 117,5\text{ N}$.

**3.10.** Cho cơ cấu tay quay thanh truyền nằm trong mặt phẳng đứng. Xác định mômen quay $M$ tác dụng lên tay quay khi tay quay nghiêng với phương ngang một góc $\varphi$ để cân bằng tổng áp lực hơi lên xylanh $F$. Tay quay và thanh truyền coi như những thanh đồng chất cùng chiều dài $l$ và cùng trọng lượng $P$. Bỏ qua ma sát, (H. 3–25).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_25.svg" alt="Hình 3-25" class="figure-img" />
  <p class="figure-caption">Hình 3-25</p>
</div>

*Trả lời :* $M = l[2F\sin\varphi - P\cos\varphi]$.

**3.11.** Trên hình vẽ ta có sơ đồ của một cái cân bàn. Cho : $AB = a$, $BC = b$, $CD = c$, $IK = d$ ; $EG = L$, $KH = l$. Tìm hệ thức giữa $a, b, c, d$ và $l$, sao cho vật được cân và đối trọng cân bằng nhau ở bất kì vị trí nào của vật cân trên mặt bàn cân. Khi đó tìm hệ thức giữa hai trọng lượng $p$ và $P$ của đối trọng và của vật cân, (H. 3–26).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_26.svg" alt="Hình 3-26" class="figure-img" />
  <p class="figure-caption">Hình 3-26</p>
</div>

*Trả lời :* $\dfrac{l}{d} = \dfrac{b + c}{b}$ ; $p = \dfrac{b}{a} P$ .

**3.12.** Hộp tốc độ được biểu diễn trên hình vẽ gồm : bánh răng cố định 1 có bán kính $r_1$, cặp bánh răng 2–3 (và cặp bánh răng giống nó 2'–3') có các bán kính tương ứng $r_2$ và $r_3$, bánh răng 4 lắp trên trục IV, (H. 3–27).

Tác dụng lên trục I mômen phát động $M_1$.

Xác định mômen cản hữu ích $M$ tác dụng lên trục IV để cơ cấu cân bằng. Bỏ qua ma sát.

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_27.svg" alt="Hình 3-27" class="figure-img" />
  <p class="figure-caption">Hình 3-27</p>
</div>

*Trả lời :* $M = M_1 \dfrac{r_2(r_1 + r_2 - r_3)}{(r_1 + r_2)(r_3 - r_2)}$ .

**3.13.** Tìm các trọng lượng $P_1$ và $P_2$ của hai vật được giữ cân bằng trên các mặt phẳng nghiêng với mặt nằm ngang các góc $\alpha, \beta$ nhờ vật $C$ có trọng lượng $P$. Các vật $A$ và $B$ tương ứng có trọng lượng $P_1$ và $P_2$ được buộc vào hai đầu của sợi dây mảnh, nhẹ, không giãn. Bỏ qua khối lượng các ròng rọc và ma sát, (H. 3–28).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_28.svg" alt="Hình 3-28" class="figure-img" />
  <p class="figure-caption">Hình 3-28</p>
</div>

*Trả lời :* $P_1 = \dfrac{P}{2\sin\alpha}$ ; $P_2 = \dfrac{P}{2\sin\beta}$ .

**3.14.** Cho cơ hệ được biểu diễn như hình vẽ. Dây mềm, mảnh, nhẹ và không giãn được buộc vào vật $A$, vòng qua ròng rọc cố định $C$, ròng rọc động $D$, ròng rọc cố định $E$, cuối cùng được buộc vào vật nặng $B$.

Tại trục ròng rọc động $D$ có treo vật $K$ có trọng lượng $Q$. Cho biết hai vật $A, B$ có cùng trọng lượng $P$. Xác định $P$ theo $Q$ và xác định hệ số ma sát trượt $f$ giữa vật $A$ và mặt phẳng ngang để hệ cân bằng (H. 3–29).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_29.svg" alt="Hình 3-29" class="figure-img" />
  <p class="figure-caption">Hình 3-29</p>
</div>

*Trả lời :* $P = \dfrac{Q}{2}$ ; $f = 1$.

**3.15.** Cho các hệ dầm như trên hình vẽ (H. 3–30).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_30.svg" alt="Hình 3-30" class="figure-img" />
  <p class="figure-caption">Hình 3-30</p>
</div>

Tìm các phản lực tại $A$ và $B$ (đối với trường hợp a) và tại $A, B$ và $D$ (đối với trường hợp b).

a) cho $l = 2\text{ m}$, $a = 2\text{ m}$ ; $b = 1\text{ m}$ ; $q = 4,9\text{ kN/m}$ ;

b) cho $M = 19,2\text{ kNm}$ ; $F = 29,59\text{ kN}$ ; $l = 6\text{ m}$, $a = 2\text{ m}$, $b = 1\text{ m}$, $c = 2\text{ m}$.

*Trả lời :* Trường hợp a) : $X_A = 0$ ; $Y_A = 0,36 \cdot 10^4\text{ N}$ ; $M_A = 0,73 \cdot 10^4\text{ Nm}$ ; $N_B = 11 \cdot 10^3\text{ N}$.

Trường hợp b) : $X_A = 1,47 \cdot 10^4\text{ N}$ ; $Y_A = -5,4 \cdot 10^4\text{ N}$ ; $R_B = 6,85 \cdot 10^4\text{ N}$ ; $R_D = 2,08 \cdot 10^4\text{ N}$.

**3.16.** Hai giàn I và II được nối với nhau bằng bản lề $D$ và được nối cố định vào bản lề $C$ bằng hai thanh III và IV. Ở $A$ và $B$ giàn tựa vào các gối di động. Tác dụng lên giàn lực $P$ thẳng đứng, ở cách gối $A$ là $a$ theo đường ngang. Tìm phản lực tựa ở gối $B$. Bỏ qua ma sát, (H. 3–31).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_31.svg" alt="Hình 3-31" class="figure-img" />
  <p class="figure-caption">Hình 3-31</p>
</div>

*Trả lời :* Phản lực tựa tác dụng vào gối $B$, hướng vuông góc với mặt phẳng trượt của các con lăn và có cường độ bằng :

$$R_B = P \frac{a}{b} \frac{DC_2}{C_1 D},$$

trong đó $b$ là cánh tay đòn của phản lực $R_B$ đối với tâm tức thời $C_2$.

*Chú ý :* Khi giải bài toán nên sử dụng các tâm vận tốc tức thời $C_1$ và $C_2$ của hai phần giàn.

**3.17.** Hệ ba thanh $AB$, $BC$ và $CD$ nối với nhau bằng hai bản lề $B$ và $C$, gắn xuống nền đất bằng bản lề $A$ và bằng ngàm $D$.

Cho $BC = CD = 2a$ ; $BK = KC$ và $CL = LD$.

Góc nghiêng của $AB$ với đường ngang là $60^\circ$.

Ở $K$ có lực $\vec{P}_1$ tác dụng thẳng đứng lên thanh $BC$ và ở $L$ có lực ngang $\vec{P}_2$ tác dụng vào thanh $CD$. Bỏ qua ma sát ở các bản lề, tìm các lực và mômen của ngàm $D$ tác dụng lên thanh $CD$, (H. 3–32).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_32.svg" alt="Hình 3-32" class="figure-img" />
  <p class="figure-caption">Hình 3-32</p>
</div>

*Trả lời :* $X_D = P_2 + \dfrac{3}{8} P_1$ ; $Y_D = \dfrac{5}{8} P_1$ ; $M_D = \dfrac{a}{2}\left(P_2 + \dfrac{\sqrt{3}}{4} P_1\right)$.

**3.18.** Trong cơ cấu cần lắc khi tay quay $OC$ lắc quanh trục nằm ngang $O$ con trượt $A$ di chuyển dọc tay quay $OC$ và truyền chuyển động cho thanh $AB$ trượt theo hướng thẳng đứng $K$. Cho các kích thước như sau $OC = R$ ; $OK = l$. Tìm lực $Q$ cần thiết đặt thẳng góc với tay quay $OC$ tại điểm $C$ để cơ cấu cân bằng khi có lực $P$ tác dụng lên thanh trượt $AB$ tại $B$ và phản lực tại rãnh trượt $K$, (H. 3–33).

<div class="figure-container">
  <img src="/figures/bai-tap/dong-luc-hoc/hinh_3_33.svg" alt="Hình 3-33" class="figure-img" />
  <p class="figure-caption">Hình 3-33</p>
</div>

*Trả lời :* $Q = \dfrac{Pl}{R\cos^2\varphi}$ ; $X_K = \dfrac{1}{2l} QR\sin^2\varphi$ ; $M_K = QR\sin^2\varphi$.
