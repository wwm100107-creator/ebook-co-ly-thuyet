# Chương 4: Nguyên lý di chuyển khả dĩ

## 4.1. Các khái niệm về cơ hệ không tự do

### 4.1.1. Cơ hệ không tự do

Cơ hệ không tự do là tập hợp các chất điểm mà trong chuyển động, ngoài lực tác dụng ra, vị trí và vận tốc của chúng còn bị ràng buộc bởi một số điều kiện hình học và động học cho trước. Thí dụ cơ cấu bốn khâu là một cơ hệ không tự do, ở đây ngoài các ngẫu lực $m_1, m_2$ tác dụng lên các khâu $OA, O_1B$, các trọng lực các khâu, còn có những điều kiện ràng buộc về mặt hình học, như điểm $A$ chỉ có thể chuyển động trên đường tròn tâm $O$, bán kính $OA$, điểm $B$ chuyển động trên đường tròn tâm $O_1$, bán kính $O_1B$, khoảng cách giữa hai điểm $A$ và $B$ luôn luôn không đổi (H. 4–1). Các điều kiện này độc lập đối với các lực tác dụng lên cơ cấu và các điều kiện đầu của chuyển động cơ cấu.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_1.svg" alt="Hình 4-1" style="max-height: 270px;" />

<div class="figure-caption">

Hình 4–1

</div>

</div>

### 4.1.2. Liên kết. Phương trình liên kết, Phân loại liên kết

**1. Liên kết:** là những điều kiện ràng buộc cơ hệ về mặt hình học và động học (vị trí và vận tốc các chất điểm thuộc cơ hệ). Những điều kiện này độc lập đối với điều kiện đầu của chuyển động và các lực tác dụng lên cơ hệ.

**2. Phương trình liên kết:** là các phương trình và bất phương trình biểu thị về mặt toán học mối ràng buộc về mặt hình học và động học đối với các chất điểm thuộc cơ hệ, chúng có dạng sau:

$$\begin{gathered}
f_\alpha(t, x_1, y_1, z_1, \dots, x_N, y_N, z_N, \dot{x}_1, \dot{y}_1, \dot{z}_1, \dots, \dot{x}_N, \dot{y}_N, \dot{z}_N) \geqslant 0 \\
\alpha = \overline{1, s}
\end{gathered} \tag{4-1}$$

trong đó $s$ chỉ số phương trình liên kết.

Các phương trình liên kết được viết dưới dạng tắt sau:

$$f_\alpha(t, x_k, y_k, z_k, \dot{x}_k, \dot{y}_k, \dot{z}_k) \geqslant 0 \tag{4-2}$$

Để minh họa ta khảo sát chuyển động của con lắc toán học gồm chất điểm $M$, khối lượng $m$, buộc vào đầu dây mảnh, không giãn, có độ dài $l$, còn đầu kia được buộc vào một điểm $O$ cố định (H. 4 – 2).

Điều kiện ràng buộc đối với chuyển động của con lắc là chất điểm $M$ luôn luôn cách điểm cố định $O$ một khoảng không lớn hơn $l$. Về mặt toán học, điều kiện này được biểu diễn như sau:

$$f(t, x_M, y_M) \equiv x^2 + y^2 - l^2 \leqslant 0 \tag{4-3}$$

tức điểm $M$ luôn luôn chuyển động bên trong (kể cả biên) của mặt tròn tâm $O$, bán kính $l$, ở đây số phương trình liên kết bằng một, tức $s = 1$.

Nếu giả thiết dây luôn luôn ở trạng thái căng, tức xem $OM$ là một thanh mảnh cứng, thì phương trình liên kết có dạng

$$f(t, x, y) \equiv x^2 + y^2 - l^2 = 0, \tag{4-4}$$

tức trong quá trình chuyển động điểm $M$ không thể rời khỏi đường tròn tâm $O$, bán kính $l$.

Trong trường hợp chiều dài của dây thay đổi theo thời gian, tức $l = l(t)$, và giả thiết dây luôn luôn ở trạng thái căng thì phương trình liên kết được viết như sau (H. 4–3).

$$f(t, x, y) \equiv x^2 + y^2 - l^2(t) = 0 \tag{4-5}$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_2.svg" alt="Hình 4-2" style="max-height: 240px;" />

<div class="figure-caption">

Hình 4–2

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_3.svg" alt="Hình 4-3" style="max-height: 240px;" />

<div class="figure-caption">

Hình 4–3

</div>

</div>

Bây giờ ta viết các phương trình liên kết của cơ cấu bốn khâu, các khâu quay $OA$ và $O_1B$ có chiều dài tương ứng là $r_1$ và $r_2$, khâu song phẳng $AB$ có chiều dài $l$ (H. 4–1).

Vị trí của cơ cấu được xác định qua các tọa độ của hai điểm $A$ và $B$.

Điều kiện để điểm $A$ không rời khỏi vòng tròn tâm $O$, bán kính $OA$ được biểu thị trong phương trình sau:

$$f_1(t, x_A, y_A, x_B, y_B) \equiv x_A^2 + y_A^2 - r_1^2 = 0$$

Điều kiện để điểm $B$ luôn luôn nằm trên vòng tròn tâm $O_1$, bán kính $r_2$ được viết thành phương trình:

$$f_2(t, x_A, y_A, x_B, y_B) \equiv (x_B - a)^2 + (y_B - b)^2 - r_2^2 = 0$$

trong đó $a, b$ là các tọa độ của $O_1$, $(a = OO_1; \, b = 0)$.

Điều kiện ràng buộc về khoảng cách hai điểm $A$ và $B$ luôn luôn không đổi có thể được viết thành:

$$f_3(t, x_A, y_A, x_B, y_B) \equiv (x_B - x_A)^2 + (y_B - y_A)^2 - l^2 = 0$$

Như vậy ta có ba phương trình liên kết biểu diễn các điều kiện ràng buộc đối với cơ cấu bốn khâu. Trong trường hợp này $s = 3$.

**3. Phân loại liên kết.** Dựa vào dạng của các phương trình liên kết người ta phân loại các liên kết như sau:

*Liên kết giữ và không giữ:* nếu các điều kiện ràng buộc được mô tả bằng những phương trình thì liên kết được gọi là giữ hay liên kết hai phía, còn trong trường hợp được mô tả bằng những bất phương trình thì liên kết được gọi là không giữ hay liên kết một phía. Ví dụ, con lắc chịu liên kết giữ khi $OM$ được xem là thanh mảnh cứng và phương trình liên kết có dạng $(4-4)$ và chịu liên kết không giữ khi $OM$ là dây mềm, phương trình liên kết có dạng $(4-3)$. Các liên kết của cơ cấu bốn khâu đều là những liên kết giữ.

*Liên kết dừng và không dừng:* nếu phương trình liên kết không chứa rõ biến thời gian thì liên kết được gọi là dừng, trong trường hợp ngược lại là liên kết không dừng. Trường hợp con lắc có độ dài thay đổi theo thời gian, ta có liên kết không dừng, phương trình liên kết có dạng $(4-5)$. Các liên kết đặt lên cơ cấu bốn khâu là các liên kết dừng.

*Liên kết hôlônôm và không hôlônôm:* nếu trong phương trình liên kết không chứa các yếu tố vận tốc hoặc có chứa các yếu tố vận tốc nhưng nhờ các phép tích phân đưa được về dạng không chứa các yếu tố vận tốc thì liên kết được gọi là hôlônôm. Nếu các phương trình liên kết chứa các yếu tố vận tốc nhưng không thể loại trừ chúng ra khỏi các phương trình liên kết nhờ các phép tích phân thì liên kết được gọi là không hôlônôm. Các liên kết hôlônôm đặt các điều kiện ràng buộc lên vị trí các chất điểm của cơ hệ, còn các liên kết không hôlônôm không đặt những điều kiện ràng buộc lên vị trí các chất điểm của cơ hệ mà chỉ đặt những điều kiện ràng buộc lên vận tốc các chất điểm thuộc cơ hệ.

Tùy thuộc liên kết đặt lên cơ hệ là hôlônôm hay không hôlônôm mà cơ hệ được gọi là cơ hệ hôlônôm hoặc cơ hệ không hôlônôm.

Cơ hệ không hôlônôm có nhiều tính chất đặc biệt và tầm quan trọng của nó trong các lĩnh vực khác nhau của kỹ thuật hiện đại ngày càng tăng. Ở đây chúng ta chỉ giới hạn việc khảo sát đối với các cơ hệ chịu liên kết hôlônôm, giữ và dừng, tức phương trình liên kết của chúng có dạng:

$$f_\alpha(x_1, y_1, z_1, \dots, x_N, y_N, z_N) = 0; \quad \alpha = \overline{1, s} < 3N \tag{4-6}$$

### 4.1.3. Di chuyển khả dĩ và số bậc tự do cơ hệ

#### 1. Di chuyển khả dĩ của cơ hệ

Di chuyển khả dĩ của cơ hệ là tập hợp các di chuyển vô cùng bé của các chất điểm thuộc cơ hệ từ vị trí đang xét sang vị trí lân cận phù hợp với các liên kết tại vị trí đang xét.

Từ định nghĩa trên rút ra rằng khái niệm di chuyển khả dĩ chỉ có ý nghĩa về mặt hình học, không có quan hệ với các lực tác dụng lên cơ hệ, nghĩa là khi cơ hệ thực hiện di chuyển khả dĩ, hệ lực tác dụng lên cơ hệ không biến đổi và thời gian $t$ được xem như một thông số. Ngoài ra khái niệm di chuyển khả dĩ gắn liền với một vị trí xác định nào đó của cơ hệ. Do đó di chuyển khả dĩ phân biệt với di chuyển thật và vì lý do này di chuyển khả dĩ của chất điểm được ký hiệu bởi $\delta\vec{r}(\delta x, \delta y, \delta z)$ ($\vec{r}$ là vectơ định vị của chất điểm) còn di chuyển thật được ký hiệu $d\vec{r}(dx, dy, dz)$.

Ta xét một chất điểm luôn luôn chuyển động trên một mặt phẳng, vị trí của nó thay đổi theo thời gian. Tại hai thời điểm $t$ và $t + dt$ mặt phẳng có vị trí $P$ và $P'$ (H. 4 – 4). Di chuyển thật của chất điểm là $d\vec{r}$, còn di chuyển khả dĩ là một tập hợp $\infty$ các di chuyển $\delta\vec{r}$ trong mặt phẳng $P$. Rõ ràng di chuyển thật phân biệt với di chuyển khả dĩ. Nếu mặt phẳng $P$ cố định (tức liên kết dừng) thì di chuyển thật sẽ xảy ra theo một (và chỉ một) phương nào đó của di chuyển khả dĩ.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_4.svg" alt="Hình 4-4" style="max-height: 270px;" />

<div class="figure-caption">

Hình 4 – 4

</div>

</div>

Để làm rõ thêm, ta xét trường hợp cơ cấu bốn khâu. Di chuyển khả dĩ của các điểm $A$ và $B$ (tức của cơ hệ) là tập hợp các vectơ $\{\delta\vec{r}_A, \, \delta'\vec{r}_A, \, \delta\vec{r}_B, \, \delta'\vec{r}_B\}$ còn di chuyển thực là $\{d\vec{r}_A, \, d\vec{r}_B\}$ hoặc trùng với $\{\delta\vec{r}_A, \, \delta\vec{r}_B\}$ hoặc trùng với $\{\delta'\vec{r}_A, \, \delta'\vec{r}_B\}$ (H. 4–1).

Tổng quát, chúng ta xét một cơ hệ chịu liên kết dạng:

$$f_\alpha(t, x_1, y_1, z_1, \dots, x_N, y_N, z_N) = 0 \tag{4-7}$$

Giả sử cho cơ hệ một di chuyển khả dĩ từ vị trí $\{x_k, y_k, z_k\}$ sang vị trí $\{x_k + \delta x_k, y_k + \delta y_k, z_k + \delta z_k\}$. Vì hai vị trí đều phù hợp với liên kết, tức đều thỏa mãn các phương trình liên kết, nên:

$$f_\alpha(t, x_k, y_k, z_k) = 0; \quad f_\alpha(t, x_k + \delta x_k, y_k + \delta y_k, z_k + \delta z_k) = 0$$

vậy:

$$\delta f_\alpha = f_\alpha(t, x_k + \delta x_k, y_k + \delta y_k, z_k + \delta z_k) - f_\alpha(t, x_k, y_k, z_k) = 0$$

$\delta f_\alpha$ coi như vi phân toàn phần của hàm $f_\alpha$ trong đó biến $t$ được xem như tham số. Do đó

$$\delta f_\alpha = \sum \left( \frac{\partial f_\alpha}{\partial x_k}\delta x_k + \frac{\partial f_\alpha}{\partial y_k}\delta y_k + \frac{\partial f_\alpha}{\partial z_k}\delta z_k \right) = 0 \tag{4-8}$$

Đó là hệ thức mà các di chuyển khả dĩ của cơ hệ với liên kết $(4-7)$ phải thỏa mãn.

Bây giờ xét di chuyển thật của cơ hệ từ vị trí $\{x_k, y_k, z_k\}$ tại thời điểm $t$ sang vị trí $\{x_k + dx_k, y_k + dy_k, z_k + dz_k\}$ tại thời điểm $t + dt$. Tại hai thời điểm xét cơ hệ chịu liên kết $(4-6)$. Vậy:

[Đính chính bản in: Ở câu trên, trích dẫn "$(4-6)$" là lỗi in của "$(4-7)$".]

$$f_\alpha(t, x_k, y_k, z_k) = 0; \quad f_\alpha(t + dt, x_k + dx_k, y_k + dy_k, z_k + dz_k) = 0$$

Do đó:

$$df_\alpha = f_\alpha(t + dt, x_k + dx_k, y_k + dy_k, z_k + dz_k) - f_\alpha(t, x_k, y_k, z_k) = 0$$

Vậy $df_\alpha$ chính là vi phân toàn phần của hàm nhiều biến $f_\alpha$, trong đó biến thời gian $t$ là độc lập. Từ đó:

$$df_\alpha = \sum \left( \frac{\partial f_\alpha}{\partial x_k}dx_k + \frac{\partial f_\alpha}{\partial y_k}dy_k + \frac{\partial f_\alpha}{\partial z_k}dz_k \right) + \frac{\partial f_\alpha}{\partial t} = 0 \tag{4-9}$$

[Đính chính bản in: Trong công thức $(4-9)$, số hạng cuối ở vế trái thiếu nhân tử $dt$, đúng là $\frac{\partial f_\alpha}{\partial t} dt$.]

Đó là hệ thức mà các di chuyển thật phải thỏa mãn.

Trong trường hợp của liên kết dừng các hệ thức $(4-9)$ sẽ là:

$$\sum \left( \frac{\partial f_\alpha}{\partial x_k}dx_k + \frac{\partial f_\alpha}{\partial y_k}dy_k + \frac{\partial f_\alpha}{\partial z_k}dz_k \right) = 0 \tag{4-10}$$

Các di chuyển thật trong trường hợp liên kết dừng phải thỏa mãn hệ thức $(4-10)$ tức cũng phải thỏa mãn hệ thức $(4-8)$.

Như vậy các di chuyển thật trong trường hợp liên kết dừng thuộc tập hợp các di chuyển khả dĩ, còn trong trường hợp liên kết không dừng chúng không thuộc tập hợp các di chuyển khả dĩ.

#### 2. Số bậc tự do của cơ hệ {#_4-1-2-bac-tu-do-cua-co-he}

Mỗi cơ hệ tại mỗi vị trí có vô số các di chuyển khả dĩ. Tuy nhiên do giới hạn của các liên kết đặt lên cơ hệ số di chuyển khả dĩ không phải độc lập với nhau, cụ thể các di chuyển khả dĩ phải thỏa mãn hệ phương trình $(4-8)$. Ta có hệ $s$ phương trình, chứa $3N$ ẩn $\{\delta x_k, \delta y_k, \delta z_k\} \ (k = \overline{1, N})$. Do đó chỉ có $3N - s$ ẩn là độc lập, tức số di chuyển khả dĩ độc lập bằng $(3N - s)$, còn số di chuyển khả dĩ còn lại được biểu diễn qua $(3N - s)$ di chuyển khả dĩ độc lập này. Số di chuyển khả dĩ độc lập của cơ hệ mà tất cả các di chuyển khả dĩ của cơ hệ đều được biểu diễn qua chúng, được gọi là số bậc tự do của cơ hệ. Vậy:

*Số bậc tự do của cơ hệ là số tối đa các di chuyển khả dĩ độc lập tuyến tính của cơ hệ.*

Như vậy số bậc tự do của cơ hệ bằng số biến phân độc lập của các tọa độ thỏa mãn phương trình $(4-8)$.

Ký hiệu số bậc tự do của cơ hệ qua $k$, ta có:

$$k = 3N - s \tag{4-11}$$

Số bậc tự do của cơ hệ càng lớn thì mức tùy ý của các di chuyển khả dĩ của cơ hệ càng lớn, nó phản ánh khả năng của cơ hệ thực hiện các di chuyển khả dĩ phù hợp với liên kết đặt lên cơ hệ. Trong thực tế người ta xác định số bậc tự do của cơ hệ qua việc phân tích khả năng chuyển động độc lập của cơ hệ. Trong các cơ cấu máy, số bậc tự do bằng số khâu dẫn.

### 4.1.4. Tọa độ suy rộng của cơ hệ {#_4-3-1-toa-đo-suy-rong}

Tập hợp các thông số đủ để xác định được vị trí của cơ hệ trong một hệ quy chiếu xác định, được gọi là các tọa độ suy rộng của cơ hệ.

Các tọa độ suy rộng được ký hiệu là $q_1, q_2, \dots, q_m$. Các tọa độ suy rộng có thể là các tọa độ Đề các của các chất điểm thuộc cơ hệ, có thể là góc quay, các tọa độ cong...

Bản chất vật lý của tọa độ suy rộng là bất kỳ, do đó thứ nguyên của nó có thể không phải là độ dài như tọa độ Đề các.

Vị trí của cơ hệ được xác định nhờ các tọa độ suy rộng, nên các tọa độ Đề các của các chất điểm của cơ hệ có thể biểu diễn qua các tọa độ suy rộng:

$$\begin{aligned}
x_k &= x_k(t, q_1, q_2, \dots, q_m) \\
y_k &= y_k(t, q_1, q_2, \dots, q_m) \\
z_k &= z_k(t, q_1, q_2, \dots, q_m)
\end{aligned} \tag{4-12}$$

hoặc viết ở dạng rút gọn:

$$\vec{r}_k = \vec{r}_k(t, q_1, q_2, \dots, q_m) \tag{4-13}$$

Nếu các tọa độ suy rộng là độc lập ta có tọa độ suy rộng đủ, chúng được ký hiệu qua $q_1, q_2, \dots, q_n$. Trường hợp ngược lại, ta có tọa độ suy rộng dư $q_1, q_2, \dots, q_m \ (m > n)$.

Ta xét trường hợp con lắc kép (H. 4–5). Để xác định vị trí của con lắc kép ta có thể dùng một trong các tập hợp của các thông số sau:

$$\begin{gathered}
\{x_A, y_A, x_B, y_B\} \, ; \\
\{x_A, y_A, \psi\} \, , \quad \{\varphi, \psi\}, \dots
\end{gathered}$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_5.svg" alt="Hình 4-5" style="max-height: 250px;" />

<div class="figure-caption">

Hình 4–5

</div>

</div>

Các tọa độ Đề các của các chất điểm của cơ hệ, tức $\{x_A, y_A, x_B, y_B\}$, đều có thể được biểu diễn qua một trong các tập hợp nêu trên. Trong 3 tập hợp của các tọa độ nêu trên thì hai tập hợp đầu các thông số là không độc lập với nhau.

Thực vậy, đối với tập hợp $\{x_A, y_A, x_B, y_B\}$ ta có:

$$x_A^2 + y_A^2 - \overline{OA}^2 = 0; \quad (x_B - x_A)^2 + (y_B - y_A)^2 - \overline{AB}^2 = 0$$

Còn đối với tập hợp $\{x_A, y_A, \psi\}$ thì:

$$x_A^2 + y_A^2 - \overline{OA}^2 = 0$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_6.svg" alt="Hình 4-6" style="max-height: 300px;" />

<div class="figure-caption">

Hình 4–6

</div>

</div>

Chỉ có tập hợp thứ ba $\{\varphi, \psi\}$ các thông số $\varphi$ và $\psi$ độc lập với nhau. Các tọa độ Đề các của các chất điểm của cơ hệ được biểu diễn qua chúng bởi các hệ thức sau:

$$\begin{aligned}
x_A &= OA\cos\varphi, \quad y_A = OA\sin\varphi \\
x_B &= OA\cos\varphi + AB\cos\psi \\
y_B &= OA\sin\varphi + AB\sin\psi
\end{aligned}$$

Vậy $\{\varphi, \psi\}$ là các tọa độ suy rộng đủ của cơ hệ con lắc kép; các tập hợp $\{x_A, y_A, x_B, y_B\}$ và $\{x_A, y_A, \psi\}$, là các tọa độ suy rộng dư.

Khi thay $(4-12)$ vào $(4-7)$ các phương trình liên kết của cơ hệ sẽ có dạng :

$$f'_\beta(q_1, q_2, \dots, q_m) = 0; \quad \beta = \overline{1, r} \leqslant s \tag*{(4-7)'}$$

và công thức tính bậc tự do của cơ hệ $(4-11)$ bây giờ sẽ là:

$$k = m - r \tag*{(4-11)'}$$

Hiển nhiên khi các tọa độ suy rộng là đủ $(m = n)$ thì các phương trình $(4-7)'$ được thỏa mãn đồng nhất, vì nếu không, các tọa độ suy rộng đã chọn không độc lập đối với nhau, tức không phải là những tọa độ suy rộng đủ. Nói khác đi, khi $m = n$, thì $r = 0$. Vậy từ $(4-11)'$ ta có:

$$k = n \tag{4-14}$$

Do đó:

*Số bậc tự do của cơ hệ hôlônôm bằng số tọa độ suy rộng đủ.*

### 4.1.5. Lực suy rộng

Công của lực trong di chuyển khả dĩ, được gọi tắt là công khả dĩ của lực.

Cho cơ hệ di chuyển khả dĩ $\{\delta\vec{r}_k\}$. Theo công thức tính công nguyên tố $(3-52)$, biểu thức của công khả dĩ sẽ là:

$$\sum \delta A_k = \sum \vec{F}_k \cdot \delta\vec{r}_k = \sum (F_{kx}\delta x_k + F_{ky}\delta y_k + F_{kz}\delta z_k)$$

Chọn các tọa độ suy rộng đủ $q_1, q_2, \dots, q_n$. Từ biểu thức $(4-12)$ ta tính được:

$$\delta x_k = \sum \frac{\partial x_k}{\partial q_i}\delta q_i; \quad \delta y_k = \sum \frac{\partial y_k}{\partial q_i}\delta q_i; \quad \delta z_k = \sum \frac{\partial z_k}{\partial q_i}\delta q_i$$

Khi thay các đại lượng này vào biểu thức công khả dĩ ở trên và sau khi sắp xếp lại các số hạng, ta được:

$$\begin{aligned}
\sum \delta A_k &= \sum_{i=1}^n \left[ \sum_{k=1}^N \left( F_{kx}\frac{\partial x_k}{\partial q_i} + F_{ky}\frac{\partial y_k}{\partial q_i} + F_{kz}\frac{\partial z_k}{\partial q_i} \right) \right] \delta q_i = \\
&= \sum_{i=1}^n Q_i \delta q_i
\end{aligned} \tag{4-15}$$

trong đó:

$$\begin{aligned}
Q_i &= \sum_{k=1}^N \left( F_{kx}\frac{\partial x_k}{\partial q_i} + F_{ky}\frac{\partial y_k}{\partial q_i} + F_{kz}\frac{\partial z_k}{\partial q_i} \right) \equiv \\
&\equiv \sum_{k=1}^N \vec{F}_k \frac{\partial\vec{r}_k}{\partial q_i}
\end{aligned} \tag{4-16}$$

được gọi là lực suy rộng tương ứng với tọa độ suy rộng $q_i$.

Công thức $(4-16)$ vẫn còn đúng cho trường hợp các tọa độ suy rộng dư.

Chú ý rằng lực suy rộng là đại lượng vô hướng. Thứ nguyên của lực suy rộng là:

$$[Q] = \frac{[A]}{[q]}$$

Bản chất vật lý của lực suy rộng phụ thuộc vào bản chất vật lý của tọa độ suy rộng tương ứng, chẳng hạn, nếu tọa độ suy rộng là độ dài thì lực suy rộng là lực, nếu tọa độ suy rộng là góc thì lực suy rộng là ngẫu lực v.v...

Dưới đây chúng ta trình bày các phương pháp tính lực suy rộng.

*Phương pháp thứ nhất.* Để tính lực suy rộng có thể dựa trực tiếp vào biểu thức $(4-16)$. Muốn vậy cần tìm hình chiếu các lực trên các trục tọa độ Đề các và biểu thức các tọa độ Đề các của các điểm đặt của các lực theo tọa độ suy rộng, sau đó áp dụng công thức $(4-16)$.

Để minh họa ta tính lực suy rộng của các lực hoạt động gồm lực $\vec{F}$ và các trọng lượng $\vec{P}$ và $\vec{Q}$ của các thanh $OA$ và $AB$ của con lắc kép. Cho $OA = R; \, AB = l; \, OC_1 = s_1, \, OC_2 = s_2$, trong đó $C_1$ và $C_2$ là các trọng tâm của các thanh $OA$ và $AB$.

Chọn các tọa độ suy rộng đủ là $\varphi$ và $\psi$.

Chọn hệ trục $Oxy$ như hình 4–6.

Các lực hoạt động có điểm đặt $C_1(x_1, y_1); \, C_2(x_2, y_2); \, B(x_3, y_3)$

$$\vec{P} \begin{cases} P_x = 0 \\ P_y = P \end{cases} \qquad \begin{aligned} x_1 &= s_1\sin\varphi \\ y_1 &= s_1\cos\varphi \end{aligned}$$

$$\vec{Q} \begin{cases} Q_x = 0 \\ Q_y = Q \end{cases} \qquad \begin{aligned} x_2 &= R\sin\varphi + s_2\sin\psi \\ y_2 &= R\cos\varphi + s_2\cos\psi \end{aligned}$$

$$\vec{F} \begin{cases} F_x = F \\ F_y = 0 \end{cases} \qquad \begin{aligned} x_3 &= R\sin\varphi + l\sin\psi \\ y_3 &= R\cos\varphi + l\cos\psi \end{aligned}$$

Thực hiện các phép tính sau :

$$\frac{\partial y_1}{\partial\varphi} = -s_1\sin\varphi \, ; \quad \frac{\partial y_1}{\partial\psi} = 0 \, ; \quad \frac{\partial y_2}{\partial\varphi} = -R\sin\varphi \, ; \quad \frac{\partial y_2}{\partial\psi} = -s_2\sin\psi$$

$$\frac{\partial x_3}{\partial\varphi} = R\cos\varphi \, ; \quad \frac{\partial x_3}{\partial\psi} = l\cos\psi.$$

Vậy :

$$Q_\varphi = P_y\frac{\partial y_1}{\partial\varphi} + Q_y\frac{\partial y_2}{\partial\varphi} + F_x\frac{\partial x_3}{\partial\varphi} = FR\cos\varphi - (QR + Ps_1)\sin\varphi$$

$$Q_\psi = P_y\frac{\partial y_1}{\partial\psi} + Q_y\frac{\partial\dot{y}_2}{\partial\psi} + F_x\frac{\partial x_3}{\partial\psi} = Fl\cos\psi - Qs_2\sin\psi$$

[Đính chính bản in: Ở đoạn trên (tr. 82–83), $OC_2 = s_2$ là lỗi in của $AC_2 = s_2$; theo Hình 4–6 ($Ox$ hướng xuống, $Oy$ hướng sang phải) thì các hình chiếu và tọa độ bị hoán đổi vai trò $x \leftrightarrow y$ trong bản in ($P_x = P, P_y = 0; \, Q_x = Q, Q_y = 0; \, F_x = 0, F_y = F$ và $x_1 = s_1\cos\varphi, \, y_1 = s_1\sin\varphi$, tương tự cho $C_2, B$), tuy nhiên kết quả cuối của $Q_\varphi, Q_\psi$ vẫn không đổi; ngoài ra ở biểu thức $Q_\psi$, $\frac{\partial\dot{y}_2}{\partial\psi}$ in dư dấu chấm trên $y_2$, đúng là $\frac{\partial y_2}{\partial\psi}$.]

*Phương pháp thứ hai.* Sử dụng công thức $(4-15)$ để tính lực suy rộng. Muốn vậy ta tính công khả dĩ của các lực trong tọa độ Đề các, biểu diễn các tọa độ Đề các theo tọa độ suy rộng, tính các biến phân của tọa độ Đề các theo các biến phân của tọa độ suy rộng và thay vào biểu thức của công khả dĩ. Các đại lượng đứng trước các biến phân của các tọa độ suy rộng trong biểu thức công khả dĩ chính là các lực suy rộng.

Để minh họa ta trở lại trường hợp của con lắc kép.

Biểu thức công khả dĩ của các lực có dạng:

$$\sum \delta A_K = P\delta y_1 + Q\delta y_2 + F\delta x_3$$

Dễ dàng tính được:

$$\delta y_1 = -s_1\sin\varphi\delta\varphi; \quad \delta y_2 = -R\sin\varphi\delta\varphi - s_2\sin\psi\delta\psi$$

$$\delta x_3 = R\cos\varphi\delta\varphi + l\cos\psi\delta\psi$$

Vậy:

$$\sum \delta A_k = [FR\cos\varphi - (QR + Ps_1)\sin\varphi]\delta\varphi + (Fl\cos\psi - Qs_2\sin\psi)\delta\psi$$

Từ đó.

$$Q_\varphi = FR\cos\varphi - (QR + Ps_1)\sin\varphi; \quad Q_\psi = Fl\cos\psi - Qs_2\sin\psi$$

*Phương pháp thứ ba.* Trong trường hợp chọn các tọa độ suy rộng đủ, các biến phân của tọa độ suy rộng đủ là độc lập với nhau. Dựa vào tính chất đó ta tính từng lực suy rộng riêng rẽ nhờ việc chọn các di chuyển khả dĩ đặc biệt như sau. Ví dụ, để tính lực suy rộng $Q_i$ ứng với tọa độ suy rộng $q_i$, ta chọn di chuyển khả dĩ đặc biệt như sau: $\delta q_1 = 0; \, \delta q_2 = 0; \, \dots \, ; \, \delta q_{i-1} = 0; \, \delta q_i \neq 0; \, \delta q_{i+1} = 0, \, \dots, \, \delta q_n = 0$ tức là để tính lực suy rộng $Q_i$ ứng với tọa độ suy rộng $q_i$ ta chỉ cho tọa độ suy rộng $q_i$ biến thiên một lượng $\delta q_i$, còn các tọa độ suy rộng khác được giữ không đổi.

Tính công khả dĩ của các lực trong di chuyển khả dĩ đặc biệt đã chọn, ký hiệu là $\sum \delta A_k(\delta q_i)$.

Rõ ràng ta có:

$$\sum \delta A_k(\delta q_i) = Q_i\delta q_i$$

$$\text{Do đó: } Q_i = \frac{\sum \delta A_k(\delta q_i)}{\delta q_i} \tag{4-17}$$

Để minh họa ta trở lại trường hợp con lắc kép. Để tính lực suy rộng $Q_\varphi$ ta chọn di chuyển khả dĩ: $\delta\varphi \neq 0; \, \delta\psi = 0$, tức cho thanh $OA$ di chuyển quay quanh trục qua $O$ với góc $\delta\varphi$, còn thanh $AB$ tịnh tiến. Công khả dĩ của các lực trong di chuyển khả dĩ đã chọn bây giờ là:

$$\sum \delta A(\delta\varphi) = -Ps_1\sin\varphi\delta\varphi - QR\sin\varphi\delta\varphi + FR\cos\varphi\delta\varphi$$

Từ đó:

$$Q_\varphi = \frac{\sum \delta A(\delta\varphi)}{\delta\varphi} = [FR\cos\varphi - (Ps_1 + QR)\sin\varphi]$$

Để tính lực suy rộng $Q_\psi$ ta chọn di chuyển khả dĩ như sau, $\delta\varphi = 0; \, \delta\psi \neq 0$, tức giữ cố định thanh $OA$, còn cho thanh $AB$ di chuyển quay $\delta\psi$ quanh trục qua $A$. Công khả dĩ của các lực trong trường hợp này được tính như sau:

$$\sum \delta A(\delta\psi) = -Qs_2\sin\psi\delta\psi + Fl\cos\psi\delta\psi.$$

Do đó:

$$Q_\psi = \frac{\sum \delta A(\delta\psi)}{\delta\psi} = (Fl\cos\psi - Qs_2\sin\psi)$$

Các phương pháp thứ hai và thứ ba thường được sử dụng. Đặc biệt đối với hệ nhiều bậc tự do, phương pháp thứ ba rất thuận tiện, khi các tọa độ suy rộng được chọn là đủ.

Khi các lực đều có thế và hàm thế năng $\Pi$ được biểu diễn qua các tọa độ suy rộng,

$\Pi[x_k(q_1, \dots, q_n), \, y_k(q_1, \dots, q_n), \, z_k(q_1, \dots, q_n)] = \Pi(q_1, q_2, \dots, q_n)$ thì các lực suy rộng được tính theo công thức.

$$Q_i = -\frac{\partial\Pi}{\partial q_i} \qquad (i = \overline{1, n}) \tag{4-18}$$

Công thức $(4-18)$ nhận được trực tiếp từ định nghĩa về lực suy rộng và thế năng.

Thực vậy theo $(4-16)$ và $(3-77)$: xem chương 3 phần Động lực học)

$$\begin{aligned}
Q_i &= \sum \left( F_{kx}\frac{\partial x_k}{\partial q_i} + F_{ky}\frac{\partial y_k}{\partial q_i} + F_{kz}\frac{\partial z_k}{\partial q_i} \right) \\
&= -\sum \left( \frac{\partial\Pi}{\partial x_k}\frac{\partial x_k}{\partial q_i} + \frac{\partial\Pi}{\partial y_k}\frac{\partial y_k}{\partial q_i} + \frac{\partial\Pi}{\partial z_k}\frac{\partial z_k}{\partial q_i} \right) = -\frac{\partial\Pi}{\partial q_i}
\end{aligned}$$

Đó là điều cần chứng minh.

### 4.1.6. Liên kết lý tưởng

Ta xét một lớp các liên kết thường gặp trong các bài toán của kỹ thuật gọi là liên kết lý tưởng.

*Liên kết được gọi là lý tưởng nếu tổng công của tất cả các lực liên kết trong mọi di chuyển khả dĩ của cơ hệ đều bằng không.*

$$\sum \vec{R}_k \delta\vec{r}_k = 0 \tag{4-19}$$

trong đó $\vec{R}_k$ là lực liên kết tác dụng lên chất điểm $M_k$ thuộc cơ hệ, còn $\delta\vec{r}_k$ là di chuyển khả dĩ của chất điểm $M_k$.

Trong thực tế nếu bỏ qua được ma sát và tính đàn hồi của các vật thể tạo thành cơ hệ, thì đa số các liên kết thường gặp đều lý tưởng. Ví dụ:

Vật rắn tự do là cơ hệ chịu liên kết lý tưởng. Điều này được rút ra từ tính chất tổng công của các nội lực của vật rắn (chúng là lực liên kết giữa các chất điểm thuộc vật rắn) luôn luôn bằng không trong bất kỳ chuyển động nào của vật rắn.

Hai vật rắn luôn luôn tựa vào nhau trong quá trình chuyển động và ma sát giữa chúng bỏ qua được là cơ hệ chịu liên kết lý tưởng. Trường hợp riêng là hai vật trượt không ma sát đối với nhau hoặc nối bản lề không ma sát với nhau cũng là các cơ hệ chịu liên kết lý tưởng.

Dây mềm không dãn vắt qua ròng rọc hay puli nếu bỏ qua được ma sát ở trục quay và sự trượt tương đối giữa ròng rọc hay puli với dây là cơ hệ, chịu liên kết lý tưởng.

Các lực suy rộng của các phản lực liên kết lý tưởng ứng với các tọa độ suy rộng đủ luôn luôn bằng không. Thực vậy, gọi $\sum \delta A_k^*$ là công khả dĩ của các lực liên kết, ta có:

$$\sum \delta A_k^* = \sum \vec{R}_k \delta\vec{r}_k = \sum_{i=1}^n \left( \sum \vec{R}_k \frac{\partial\vec{r}_k}{\partial q_i} \right) \delta q_i = \sum_{i=1}^n Q_i^* \delta q_i = 0$$

trong đó $Q_i^*$ là lực suy rộng của các lực liên kết ứng với các tọa độ suy rộng đủ.

Vì $q_1, q_2, \dots, q_n$ là các tọa độ suy rộng đủ, nên chúng độc lập với nhau, do đó các $\delta q_i \ (i = \overline{1, n})$ cũng độc lập với nhau. Từ đó chúng ta nhận được:

$$Q_i^* = 0 \qquad (i = \overline{1, n}) \tag{4-20}$$

---

## 4.2. Nguyên lý di chuyển khả dĩ

Trong mục này sẽ thiết lập điều kiện cân bằng tổng quát của cơ hệ, từ đó dễ dàng rút ra điều kiện cân bằng của vật rắn được xem là trường hợp riêng. Tĩnh học vật rắn được trình bầy trong phần Tĩnh học dựa vào hai đặc trưng hình học của hệ lực là vectơ chính và mômen chính của nó, được gọi là Tĩnh học hình học. Tĩnh học cơ hệ được trình bày ở đây dựa trên nguyên lý di chuyển khả dĩ được gọi là Tĩnh học giải tích.

### 4.2.1. Nguyên lý di chuyển khả dĩ

::: tip Nguyên lý di chuyển khả dĩ
*Đối với cơ hệ chịu liên kết hôlônôm, giữ, dừng và lý tưởng, điều kiện cần và đủ để cơ hệ cân bằng tại một vị trí đang xét là tổng công nguyên tố của các lực hoạt động trong mọi di chuyển khả dĩ của cơ hệ từ vị trí đang xét đều triệt tiêu.*

$$\sum \delta A_k = \sum \vec{F}_k \cdot \delta\vec{r}_k = 0 \tag{4-21}$$
:::

Trong đó $\vec{F}_k$ là lực hoạt động (hợp lực) tác dụng lên chất điểm $M_k$ thuộc cơ hệ, $\delta\vec{r}_k$ là di chuyển khả dĩ của chất điểm $M_k$. Phương trình $(4-21)$ còn được gọi là phương trình công khả dĩ.

*Chứng minh điều kiện cần.* Giả thiết cơ hệ nằm cân bằng tại vị trí đang xét. Xét một chất điểm $M_k$ thuộc cơ hệ chịu tác dụng của lực hoạt động $\vec{F}_k$ và lực liên kết $\vec{R}_k$. Vì cơ hệ cân bằng nên mọi chất điểm của cơ hệ phải cân bằng, tức là:

$$\vec{F}_k + \vec{R}_k = \vec{0}$$

Nhân vô hướng hai vế của đẳng thức nhận được với $\delta\vec{r}_k$ và lấy tổng theo tất cả các chất điểm của hệ cơ, ta có:

$$\sum \vec{F}_k \delta\vec{r}_k + \sum \vec{R}_k \delta\vec{r}_k = 0$$

Do các liên kết của hệ là lý tưởng, nên có $(4-19)$. Vậy:

$$\sum \vec{F}_k \delta\vec{r}_k = 0$$

Đó là điều cần chứng minh.

*Chứng minh điều kiện đủ.* Giả thiết cơ hệ chịu liên kết hôlônôm giữ, dừng, và lý tưởng, đang nằm cân bằng tại vị trí đang xét và tổng công khả dĩ của các lực hoạt động bằng không. Ta chứng minh rằng cơ hệ mãi mãi nằm cân bằng tại vị trí đã cho.

Thực vậy, giả sử có chất điểm $M_k$ (ít nhất là một) của cơ hệ dưới tác dụng của lực hoạt động $\vec{F}_k$ và lực liên kết $\vec{R}_k$ chuyển động từ vị trí đầu đứng yên, di chuyển của nó được kí hiệu bởi $d\vec{r}_k$ ($\vec{r}_k$ là vectơ định vị của chất điểm $M_k$), có cùng phương với lực tác dụng vào chất điểm $M_k$ là $\vec{\Phi}_k = \vec{F}_k + \vec{R}_k$, vì chất điểm chuyển động từ trạng thái đầu đứng yên.

Do liên kết đặt lên hệ là dừng nên phương của di chuyển thực trùng với một trong các phương của di chuyển khả dĩ, nên ta chọn di chuyển khả dĩ của chất điểm $M_k$ trùng với di chuyển thực của nó.

Vì vậy chúng ta có:

$$\vec{\Phi}_k \delta\vec{r}_k = (\vec{F}_k + \vec{R}_k)\delta\vec{r}_k = \vec{F}_k \delta\vec{r}_k + \vec{R}_k \delta\vec{r}_k > 0$$

Lấy tổng hai vế đối với các chất điểm thuộc cơ hệ và chú ý điều kiện về liên kết lý tưởng $(4-19)$ ta nhận được:

$$\sum \vec{F}_k \delta\vec{r}_k > 0$$

điều này mâu thuẫn với giả thiết. Vậy không thể có chất điểm nào của cơ hệ chuyển động từ vị trí cân bằng, tức là cơ hệ mãi mãi nằm ở vị trí cân bằng. Đó là điều cần chứng minh.

### 4.2.2. Điều kiện cân bằng của cơ hệ hôlônôm trong tọa độ suy rộng đủ

Giả sử cơ hệ hôlônôm có $n$ bậc tự do, vị trí của nó được xác định bằng $n$ tọa độ suy rộng đủ $q_1, q_2, \dots, q_n$. Như đã biết biểu thức công khả dĩ của các lực hoạt động trong tọa độ suy rộng đủ có dạng:

$$\sum \delta A_k = \sum \vec{F}_k \delta\vec{r}_k = \sum_{i=1}^n Q_i \delta q_i$$

Trong đó $Q_i$ là lực suy rộng của các lực hoạt động ứng với tọa độ suy rộng $q_i$.

Điều kiện cân bằng của cơ hệ, theo nguyên lý di chuyển khả dĩ, sẽ là:

$$\sum_{i=1}^n Q_i \delta q_i = 0 \tag{4-22}$$

Vì cơ hệ là hôlônôm và các $\{\delta q_i\} \ (i = \overline{1, n})$ độc lập đối với nhau do các tọa độ suy rộng là đủ, nên đẳng thức trên được thực hiện khi và chỉ khi:

$$Q_i = 0; \qquad (i = \overline{1, n}) \tag{4-23}$$

Chúng ta có định lý sau:

::: tip Định lý
*Điều kiện cần và đủ để cơ hệ chịu liên kết hôlônôm giữ, dừng và lý tưởng cân bằng tại một vị trí nào đó là tất cả các lực suy rộng của các lực hoạt động ứng với tọa độ suy rộng đủ tính đối với vị trí đang xét, phải đồng thời triệt tiêu.*
:::

Trong trường hợp các lực hoạt động là những lực có thế và hàm thế năng có dạng $\Pi = \Pi(q_1, q_2, \dots, q_n)$, dựa vào $(4-18)$ ta nhận được định lý sau:

::: tip Định lý
*Điều kiện cần và đủ để cơ hệ bảo toàn với liên kết hôlônôm, giữ, dừng và lý tưởng cân bằng tại một vị trí nào đó là hàm thế năng đạt cực trị tại vị trí đó:*

$$\frac{\partial\Pi}{\partial q_i} = 0 \qquad (i = \overline{1, n}) \tag{4-24}$$
:::

### Thí dụ 4–1

**Thí dụ 4–1.** Xác định quan hệ giữa lực $P$ tác dụng thẳng góc với tay quay của máy ép vít và lực ép $Q$, cho biết cánh tay đòn của máy ép là $a$, bước của trục vít bằng $h$. Bỏ qua ma sát.

**Bài giải**

Khảo sát cơ hệ gồm toàn bộ máy ép vít. Cơ hệ có một bậc tự do, chịu liên kết giữ, dừng và lý tưởng.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_7.svg" alt="Hình 4-7" style="max-height: 300px;" />

<div class="figure-caption">

Hình 4–7

</div>

</div>

Chọn tọa độ suy rộng đủ $q = \varphi$, $\varphi$ là góc định vị tay quay.

Hệ lực hoạt động gồm lực $\vec{P}, \, \vec{P}'$ và lực $\vec{Q}$ (H. 4 – 7).

Cho cơ hệ di chuyển khả dĩ ứng với góc $\varphi$ biến đổi lượng $\delta\varphi$ và bàn ép di chuyển đoạn $\delta s$ theo phương thẳng đứng. Vì bước của trục vít là $h$, tức khi vít quay một góc $2\pi$ thì trục vít di chuyển theo chiều trục một đoạn bằng $h$, do đó:

$$\delta s = \frac{h}{2\pi}\delta\varphi$$

Tổng công khả dĩ các lực hoạt động trong di chuyển khả dĩ trên bằng:

$$\sum \delta A_k = 2aP\delta\varphi - Q\delta s = \left(2Pa - Q\frac{h}{2\pi}\right)\delta\varphi$$

Lực suy rộng ứng với tọa độ suy rộng $\varphi$ bằng:

$$Q_\varphi = \frac{\sum \delta A_k}{\delta\varphi} = 2Pa - Q\frac{h}{2\pi}$$

Từ điều kiện cân bằng của cơ hệ $Q_\varphi = 0$, ta nhận được

$$P = Q\frac{h}{4\pi a}$$

### Thí dụ 4–2

**Thí dụ 4–2.** Vật $A$ trọng lượng $P_1$ được giữ cân bằng trên mặt phẳng nghiêng với mặt phẳng ngang một góc $\alpha$, nhờ buộc vào đầu một sợi dây nhẹ, không giãn vòng qua ròng rọc cố định $D$ và ròng rọc động $E$, một đầu khác của dây buộc vào vật nặng $B$ có trọng lượng $P_2$ nằm cân bằng trên mặt phẳng nghiêng với mặt phẳng ngang một góc $\beta$. Tại tâm của ròng rọc động $E$ treo một vật nặng $C$ có trọng lượng $Q$.

Tìm quan hệ giữa các trọng lượng $P_1, P_2, Q$ khi cơ hệ cân bằng. Bỏ qua ma sát trên các mặt phẳng nghiêng, ma sát giữa dây và ròng rọc cố định $D$ cũng như hiện tượng trượt giữa dây và ròng rọc động $E$ (H. 4–8).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_8.svg" alt="Hình 4-8" style="max-height: 280px;" />

<div class="figure-caption">

Hình 4–8

</div>

</div>

**Bài giải**

Khảo sát cơ hệ gồm các vật $A, B, C$. Hệ chịu liên kết hôlônôm, giữ, dừng, lý tưởng và có hai bậc tự do. Chọn các tọa độ suy rộng đủ: $q_1 = s_A; \, q_2 = s_B$ chúng xác định vị trí của các vật $A$ và $B$ trên mặt phẳng nghiêng so với tâm của ròng rọc cố định $D$.

Các lực hoạt động gồm các trọng lực $\vec{P}_1, \vec{P}_2$ và $\vec{Q}$. Để viết các điều kiện cân bằng của cơ hệ ta tính các lực suy rộng $Q_{s_A}$ và $Q_{s_B}$.

Muốn tính lực suy rộng $Q_{s_A}$ ta cho hệ di chuyển khả dĩ đặc biệt như sau: $\delta s_A \neq 0$ và $\delta s_B = 0$, tức cho vật $A$ di chuyển dọc mặt phẳng nghiêng một lượng $\delta s_A$ theo hướng tăng của tọa độ suy rộng $s_A$ (tức $\delta s_A > 0$) và giữ cố định vật $B$ trên mặt phẳng nghiêng. Vật $C$ sẽ di chuyển theo phương thẳng đứng hướng lên lượng $\delta s_C$ bằng:

$$\delta s_C = \frac{1}{2}\delta s_A$$

Thực vậy, vì dây không giãn nên chiều dài của dây luôn luôn không đổi, tức là:

$$s_A + s_B + 2s_C = \text{const}$$

Từ đó:

$$\delta s_A + \delta s_B + 2\delta s_C = 0 \text{ và } \delta s_C = -\frac{1}{2}(\delta s_A + \delta s_B) \tag{a}$$

Trong di chuyển khả dĩ đã chọn như trên $\delta s_B = 0$, nên

$$\delta s_C = \frac{1}{2}\delta s_A$$

[Đính chính bản in: Từ hệ thức $(a)$ với $\delta s_B = 0$, biến phân đại số đúng là $\delta s_C = -\frac{1}{2}\delta s_A$ (vật $C$ dịch lên một đoạn độ lớn $\frac{1}{2}\delta s_A$), nên công khả dĩ của trọng lực $\vec{Q}$ vẫn là $-Q\frac{1}{2}\delta s_A$ như dòng dưới.]

Tổng công khả dĩ của các lực hoạt động trong di chuyển khả dĩ đặc biệt đã chọn ở trên sẽ bằng:

$$\sum \delta A_k(\delta s_A) = P_1\sin\alpha\delta s_A - Q\delta s_C = \left(P_1\sin\alpha - \frac{Q}{2}\right)\delta s_A$$

Vậy

$$Q_{s_A} = \frac{\sum \delta A_k(\delta s_A)}{\delta s_A} = \left(P_1\sin\alpha - \frac{Q}{2}\right)$$

Để tính lực suy rộng $Q_{s_B}$ có thể lặp lại cách lý luận ở trên. Tuy nhiên có thể viết ngay biểu thức của $Q_{s_B}$ nhờ biểu thức của $Q_{s_A}$ trong đó $P_1$ được thay bằng $P_2$ và $\alpha$ được thay bằng $\beta$ tức:

$$Q_{s_B} = \left(P_2\sin\beta - \frac{Q}{2}\right)$$

Điều kiện cân bằng của hệ sẽ là:

$$Q_{s_A} = \left(P_1\sin\alpha - \frac{Q}{2}\right) = 0; \quad Q_{s_B} = \left(P_2\sin\beta - \frac{Q}{2}\right) = 0$$

Từ đó:

$$P_1 = \frac{Q}{2\sin\alpha}; \qquad P_2 = \frac{Q}{2\sin\beta}$$

*Chú ý*

1) Các lực hoạt động là các lực có thế với hàm thế năng:

$$\Pi = -P_1 s_A\sin\alpha - P_2 s_B\sin\beta - Q s_C + \text{const}$$

Sau khi khử tọa độ $s_C$ nhờ hệ thức đã thiết lập ở trên giữa $s_A, s_B$ và $s_C$ chúng ta nhận được:

$$\Pi = \left(-P_1\sin\alpha + \frac{Q}{2}\right)s_A + \left(-P_2\sin\beta + \frac{Q}{2}\right)s_B + \text{const}$$

Điều kiện cân bằng của cơ hệ sẽ là:

$$\begin{aligned}
Q_{s_A} &= -\frac{\partial\Pi}{\partial s_A} = \left(-P_1\sin\alpha + \frac{Q}{2}\right) = 0; \\
Q_{s_B} &= -\frac{\partial\Pi}{\partial s_B} = \left(-P_2\sin\beta + \frac{Q}{2}\right) = 0
\end{aligned}$$

[Đính chính bản in: Vì $\frac{\partial\Pi}{\partial s_A} = -P_1\sin\alpha + \frac{Q}{2}$, nên $Q_{s_A} = -\frac{\partial\Pi}{\partial s_A} = P_1\sin\alpha - \frac{Q}{2} = 0$ (tương tự cho $Q_{s_B} = P_2\sin\beta - \frac{Q}{2} = 0$).]

Từ đó ta tìm lại được kết quả vừa nhận được ở trên.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_9.svg" alt="Hình 4-9" style="max-height: 200px;" />

<div class="figure-caption">

Hình 4–9

</div>

</div>

2) Hệ thức giữa các di chuyển khả dĩ $(a)$ có thể suy từ hệ thức vận tốc (H. 4–9)

$$v_C = \frac{1}{2}(v_A + v_B)$$

### Thí dụ 4–3

**Thí dụ 4–3.** Cho hệ dầm chịu lực và có kích thước như hình vẽ (H. 4–10). Tính phản lực tại ngàm $A$ và gối di động $C$.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_10.svg" alt="Hình 4-10" style="max-height: 220px;" />

<div class="figure-caption">

Hình 4 – 10

</div>

</div>

**Bài giải**

Khảo sát cơ hệ là dầm ghép. Để tìm phản lực tại $C$ ta phá vỡ liên kết ở $C$ và thay thế bằng phản lực $\vec{N}_C$, xem nó thuộc các lực hoạt động (H. 4 – 11).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_11.svg" alt="Hình 4-11" style="max-height: 220px;" />

<div class="figure-caption">

Hình 4 – 11

</div>

</div>

Cơ hệ bị phá vỡ liên kết tại $C$ có một bậc tự do. Chọn tọa độ suy rộng là góc định vị $\varphi$ của thanh $CB$ đối với thanh $AB$ (thanh $CB$ có thể quay quanh $B$ đối với thanh $AB$)

Các lực hoạt động gồm các lực $\vec{P}, \, \vec{Q}$, và $\vec{N}_C$. Để tính lực suy rộng ứng với tọa độ suy rộng $\varphi$ ta cho cơ hệ di chuyển khả dĩ ứng với góc $\varphi$ biến đổi lượng $\delta\varphi$. Tổng công khả dĩ các lực hoạt động trong di chuyển khả dĩ đã cho bằng:

$$\begin{aligned}
\sum \delta A_k(\delta\varphi) &= Pa\delta\varphi - N_C 2a\delta\varphi = (P - 2N_C)a\delta\varphi \\
Q_\varphi &= (P - 2N_C)a
\end{aligned}$$

Từ điều kiện cân bằng của hệ:

$$Q_\varphi = 0.$$

Ta nhận được:

$$N_C = \frac{P}{2}.$$

Để tính phản lực liên kết tại $A$ ta phá vỡ liên kết tại $A$ và thay thế vào đó hệ phản lực gồm ngẫu lực $\overline{m}_A$ và phản lực $\vec{R}_A \, (\vec{X}_A, \vec{Y}_A)$. Khi đó cơ hệ có ba bậc tự do. Ta chọn các tọa độ suy rộng đủ như sau: $q_1 = x_C; \, q_2 = \varphi; \, q_3 = \psi$, trong đó $x_C$ là hoành độ của điểm $C$, $\varphi$ là góc định vị của thanh $CB$ so với trục ngang $Ox$ khi quay quanh $C$, $\psi$ là góc định vị của thanh $AB$ đối với thanh $CB$ khi quay quanh $B$ (H.4 – 12).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_12.svg" alt="Hình 4-12" style="max-height: 200px;" />

<div class="figure-caption">

Hình 4 – 12

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_13.svg" alt="Hình 4-13" style="max-height: 200px;" />

<div class="figure-caption">

Hình 4 – 13

</div>

</div>

Các lực hoạt động gồm các lực $\vec{P}, \, \vec{Q}, \, \overline{m}_A, \, \vec{X}_A, \, \vec{Y}_A$. Chúng ta lần lượt tính các lực suy rộng $Q_{x_C}, \, Q_\varphi, \, Q_\psi$ ứng với các tọa độ suy rộng đủ $x_C, \, \varphi$ và $\psi$. Tính lực suy rộng $Q_{x_C}$. Cho hệ di chuyển khả dĩ đặc biệt như sau: (H.4 – 13)

$\delta x_C \neq 0; \, \delta\varphi = \delta\psi = 0$, tức xem hai thanh $AB$ và $BC$ là một vật rắn dịch chuyển theo phương ngang một lượng $\delta x_C$.

Tổng công khả dĩ của các lực hoạt động trong di chuyển khả dĩ đã cho bằng:

$$\sum \delta A_k(\delta x_C) = X_A \cdot \delta x_C$$

Vậy:

$$Q_{x_c} = \frac{\sum \delta A(\delta x_c)}{\delta x_c} = X_A.$$

Tính lực suy rộng $Q_\varphi$: Cho hệ di chuyển khả dĩ: $\delta\varphi \neq 0; \, \delta x_C = \delta\psi = 0$ tức xem cơ hệ như một vật rắn quay quanh điểm $C$ góc $\delta\varphi$ (H.4 – 14). Tổng công khả dĩ của các lực hoạt động bằng:

$$\sum \delta A_k(\delta\varphi) = Pa\delta\varphi + 3aQ\delta\varphi - 4aY_A\delta\varphi + m_A\delta\varphi$$

Vậy:

$$Q_\varphi = \frac{\sum \delta A_k(\delta\varphi)}{\delta\varphi} = a(P + 3Q - 4Y_A) + m_A$$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_14.svg" alt="Hình 4-14" style="max-height: 220px;" />

<div class="figure-caption">

Hình 4 – 14

</div>

</div>

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_15.svg" alt="Hình 4-15" style="max-height: 190px;" />

<div class="figure-caption">

Hình 4 – 15

</div>

</div>

[Đính chính bản in: Trong Hình 4–15, góc quay khả dĩ của thanh $AB$ quanh $B$ in nhầm là $\delta\varphi$, đúng là $\delta\psi$.]

Tính lực suy rộng $Q_\psi$.

Cho cơ hệ di chuyển khả dĩ như sau: $\delta\psi \neq 0; \, \delta x_C = \delta\varphi = 0$ tức cố định thanh $BC$ và cho thanh $AB$ quay quanh $B$ một góc $\delta\psi$ (H.4 – 15). Tổng công khả dĩ của các lực hoạt động trong di chuyển khả dĩ này bằng:

$$\sum \delta A_k(\delta\psi) = -m_A\delta\psi + Y_A \cdot 2a\delta\psi - Qa\delta\psi$$

Vậy:

$$Q_\psi = \frac{\sum \delta A_k(\delta\psi)}{\delta\psi} = -m_A + 2aY_A - Qa$$

Từ điều kiện cân bằng của cơ hệ :

$$Q_{x_C} = 0; \quad Q_\varphi = 0; \quad Q_\psi = 0$$

ta nhận được:

$$X_A = 0; \quad Y_A = Q + \frac{P}{2}; \quad \overline{m}_A = (Q + P)a$$

*Chú ý:* Có thể giải phóng đồng thời liên kết tại $A$ và $C$. Lúc đó cơ hệ có bốn bậc tự do. Chọn các tọa độ suy rộng đủ: $x_C, y_C, \varphi, \psi$ và tiến hành tính các lực suy rộng $Q_{x_C}, Q_{y_C}, Q_\varphi$, và $Q_\psi$. Từ điều kiện triệt tiêu các lực suy rộng ta xác định được các phản lực liên kết $N_C, X_A, Y_A; \overline{m}_A$.

### Thí dụ 4–4

**Thí dụ 4 – 4.** Một cơ cấu culíc (H.4 – 16) gồm tay quay $OC$ quay quanh trục nằm ngang $O$ làm cần $AB$ di chuyển tịnh tiến theo phương thẳng đứng trong rãnh định hướng $K$.

Cho $OC = R; \, OK = l$; tìm:

1. Lực $\vec{Q}$ đặt vuông góc với tay quay $OC$ tại điểm $C$ để cơ cấu cân bằng khi thanh $AB$ chịu tác dụng lực $\vec{P}$ dọc thanh hướng lên.

2. Phản lực tại rãnh trượt $K$. Bỏ qua ma sát và trọng lượng các khâu.

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_16.svg" alt="Hình 4-16" style="max-height: 360px;" />

<div class="figure-caption">

Hình 4 – 16

</div>

</div>

**Bài giải**

Khảo sát cơ hệ gồm cơ cấu culíc. Cơ hệ chịu liên kết hôlônôm, giữ, dừng, lý tưởng và có một bậc tự do. Chọn góc định vị $\varphi$ của thanh $OC$ làm tọa độ suy rộng.

Lực hoạt động tác dụng lên cơ hệ gồm lực $\vec{P}$ và $\vec{Q}$. Tính lực suy rộng $Q_\varphi$ ứng với tọa độ suy rộng $\varphi$.

Ta cho cơ hệ di chuyển khả dĩ bằng cách cho tay quay $OC$ quay quanh trục qua $O$ góc $\delta\varphi$, khi đó các điểm đặt của lực $\vec{Q}$ và lực $\vec{P}$ có các di chuyển tương ứng $\delta s_C$ và $\delta s_B$.

Dễ dàng thấy ngay: $\delta s_C = R\delta\varphi$.

Chú ý rằng thanh $AB$ chuyển động tịnh tiến nên $\delta s_B = \delta s_A$ và : $s_A = l\operatorname{tg}\varphi$

Vậy:

$$\delta s_A = \frac{l}{\cos^2\varphi}\delta\varphi = \delta s_B$$

Tổng công khả dĩ của các lực hoạt động bằng.

$$\sum \delta A_k = -Q\delta s_C + P\delta s_B = \left(\frac{Pl}{\cos^2\varphi} - QR\right)\cdot\delta\varphi$$

Điều kiện cân bằng của cơ hệ sẽ là:

$$Q_\varphi = \frac{Pl}{\cos^2\varphi} - QR = 0,$$

Từ đó chúng ta nhận được:

$$Q = \frac{Pl}{R\cos^2\varphi}$$

Để xác định hệ phản lực tại $K$ ta phá vỡ liên kết ở $K$ và thay thế bằng ngẫu lực $\overline{m}_k$, phản lực $\vec{X}_k$ và kể chúng vào loại lực hoạt động (H.4 – 17).

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_17.svg" alt="Hình 4-17" style="max-height: 360px;" />

<div class="figure-caption">

Hình 4 – 17

</div>

</div>

Cơ hệ có ba bậc tự do. Chọn các tọa độ suy rộng đủ như sau: $q_1 = \varphi; \, q_2 = s_A; \, q_3 = \psi$, trong đó như trên, $\varphi$ là góc định vị của thanh $OC$ quay quanh $O$, $s_A$ là thông số định vị của con trượt $A$ trong di chuyển dọc thanh $OC$, $\psi$ là góc định vị của thanh $AB$ đối với thanh $OC$ trong chuyển động của nó quanh $A$.

Các lực hoạt động gồm các lực $\vec{P}, \, \vec{Q}, \, \overline{m}_A, \, \vec{X}_A$.

[Đính chính bản in: Các ký hiệu $\overline{m}_A, \, \vec{X}_A$ ở dòng trên và $X_A$ ở hai công thức tính $Q_{s_A}$ ngay dưới đây là lỗi in của $\overline{m}_k, \, \vec{X}_k$ (phản lực tại rãnh trượt $K$).]

Chúng ta lần lượt tính các lực suy rộng $Q_\varphi, \, Q_{s_A}, \, Q_\psi$ ứng với các tọa độ suy rộng $\varphi, \, s_A, \, \psi$.

Tính lực suy rộng $Q_{s_A}$. Cho cơ hệ di chuyển khả dĩ như sau: $\delta\varphi = \delta\psi = 0; \, \delta s_A \neq 0$, tức giữ thanh $OC$ cố định, thanh $AB$ chuyển động tịnh tiến cùng với con trượt $A$ dọc thanh $OC$ (H.4 – 17). Tổng công khả dĩ các lực hoạt động trong di chuyển khả dĩ đã cho bằng

$$\sum \delta A_k(\delta s_A) = (X_A\cos\varphi - P\sin\varphi)\delta s_A$$

Vậy: $Q_{s_A} = X_A\cos\varphi - P\sin\varphi$

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_4_18.svg" alt="Hình 4-18" style="max-height: 360px;" />

<div class="figure-caption">

Hình 4 – 18

</div>

</div>

Tính lực suy rộng $Q_\psi$. Cho hệ di chuyển khả dĩ như sau:

$$\delta s_A = \delta\varphi = 0; \quad \delta\psi \neq 0,$$

tức thanh $OC$ cố định con trượt $A$ đứng yên và thanh $BA$ quay quanh $A$ góc $\delta\psi$ (H.4 – 18).

Tổng công khả dĩ của các lực hoạt động, trong di chuyển khả dĩ này bằng:

$$\sum \delta A_k(\delta\psi) = -m_k\delta\psi + X_k l\operatorname{tg}\varphi\delta\psi.$$

Vậy:

$$Q_\psi = X_k l\operatorname{tg}\varphi - m_k.$$

Từ điều kiện cân bằng của cơ hệ trong tọa độ suy rộng đủ:

$$Q_\psi = X_k l\operatorname{tg}\varphi - m_k = 0;$$

$$Q_{s_A} = X_k\cos\varphi - P\sin\varphi = 0,$$

ta rút ra :

$$X_k = P\operatorname{tg}\varphi; \quad m_k = X_k l\operatorname{tg}\varphi = Pl\operatorname{tg}^2\varphi$$

còn từ điều kiện $Q_\varphi = 0$ ta nhận được quan hệ giữa $P$ và $Q$ để cơ cấu cân bằng đã nêu ở trên.
