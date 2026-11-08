# Chương 1: Các Khái Niệm và Hệ Tiên Đề Của Động Lực Học

Động lực học là phần chính của cơ học nghiên cứu mối quan hệ giữa chuyển động của các vật thể và các lực tác dụng tương hỗ gây ra chuyển động đó.

---

## 1.1. Các Khái Niệm Cơ Bản

### 1.1.1. Khối Lượng
Khối lượng là đại lượng vật lý vô hướng, dương, đặc trưng cho mức độ quán tính của vật thể (khả năng bảo toàn trạng thái chuyển động của vật khi chịu lực tác dụng) và đặc trưng cho tương tác hấp dẫn của nó với các vật thể khác.
- Kí hiệu: $m$.
- Đơn vị trong hệ SI: Kilôgam ($\text{kg}$).
- Trong cơ học cổ điển Niutơn, khối lượng của một vật thể là một đại lượng không đổi ($m = \text{const}$), không phụ thuộc vào trạng thái chuyển động cũng như hệ quy chiếu khảo sát.

### 1.1.2. Hệ Quy Chiếu Quán Tính
Hệ quy chiếu quán tính là hệ quy chiếu trong đó một chất điểm cô lập (không chịu lực nào tác dụng) sẽ chuyển động thẳng đều hoặc đứng yên.
- Hệ quy chiếu gắn với hệ Mặt Trời và các định tinh xa xôi được coi là hệ quy chiếu quán tính chuẩn mực (hệ nhật tâm Copernicus).
- Trong các bài toán kỹ thuật thông thường trên mặt đất, hệ quy chiếu gắn với quả đất được coi gần đúng là hệ quy chiếu quán tính.

### 1.1.3. Lực
Lực là đại lượng véctơ đặc trưng cho tác dụng tương hỗ cơ học giữa các vật thể, là nguyên nhân làm thay đổi trạng thái chuyển động cơ học (gây ra gia tốc) hoặc làm biến dạng vật thể.
- Kí hiệu: $\vec{F}$.
- Được đặc trưng bởi ba yếu tố: điểm đặt, phương chiều và cường độ (môđun).

---

## 1.2. Hệ Tiên Đề Của Động Lực Học (Các Định Luật Newton)

Nền tảng của động lực học cổ điển được xây dựng trên bốn định luật cơ bản do Isaac Newton đề xuất năm 1687:

### Định Luật 1: Định Luật Quán Tính
::: tip Định luật 1 Newton
Một chất điểm cô lập hoàn toàn (không chịu lực nào tác dụng, hoặc chịu một hệ lực triệt tiêu lẫn nhau) sẽ giữ nguyên trạng thái đứng yên hoặc chuyển động thẳng đều mãi mãi:

$$\sum \vec{F}_k = \vec{0} \implies \vec{v} = \text{const} \tag{1-1}$$
:::

### Định Luật 2: Định Luật Cơ Bản Của Động Lực Học
::: tip Định luật 2 Newton
Gia tốc của một chất điểm tỉ lệ thuận với hợp lực tác dụng lên nó, có cùng phương chiều với hợp lực và tỉ lệ nghịch với khối lượng của chất điểm:

$$\vec{a} = \frac{\vec{F}}{m} \iff m \vec{a} = \vec{F} \tag{1-2}$$

Dưới dạng phương trình vi phân chuyển động:

$$m \frac{d^2\vec{r}}{dt^2} = \vec{F} \tag{1-3}$$
:::

### Định Luật 3: Định Luật Tác Dụng và Phản Tác Dụng
::: tip Định luật 3 Newton
Lực tác dụng và lực phản tác dụng giữa hai chất điểm bất kỳ luôn luôn có cùng đường tác dụng, cùng độ lớn nhưng ngược chiều nhau:

$$\vec{F}_{12} = -\vec{F}_{21} \tag{1-4}$$
:::
*Lưu ý:* Hai lực tác dụng và phản tác dụng đặt vào hai vật thể khác nhau nên không bao giờ là hai lực cân bằng trên cùng một vật.

### Định Luật 4: Định Luật Độc Lập Tác Dụng Của Lực
::: tip Định luật 4 Newton
Khi có nhiều lực $\vec{F}_1, \vec{F}_2, ..., \vec{F}_n$ đồng thời tác dụng lên một chất điểm, mỗi lực gây ra cho chất điểm một gia tốc độc lập hoàn toàn như khi nó tác dụng riêng lẻ:

$$\vec{a} = \sum_{k=1}^n \vec{a}_k = \sum_{k=1}^n \frac{\vec{F}_k}{m} = \frac{1}{m} \sum_{k=1}^n \vec{F}_k \tag{1-5}$$
:::

<div class="figure-container">

<img src="/figures/dong-luc-hoc/hinh_1_1.svg" alt="Hình 1-1: Định luật cơ bản của động lực học Newton" style="max-height: 260px;" />

<div class="figure-caption">

Hình 1-1: Phương trình cơ bản của động lực học chất điểm $m\vec{a} = \sum\vec{F}_k$

</div>

</div>

---

## 1.3. Hai Bài Toán Cơ Bản Của Động Lực Học

Dựa trên phương trình cơ bản $m\ddot{\vec{r}} = \vec{F}$, động lực học giải quyết hai bài toán cơ bản sau:

### Bài Toán Thuận (Bài Toán Thứ Nhất)
- **Cho biết:** Khối lượng $m$ của chất điểm và quy luật chuyển động của nó: $\vec{r} = \vec{r}(t)$.
- **Yêu cầu:** Tìm hợp lực $\vec{F}$ tác dụng lên chất điểm.
- **Phương pháp giải:** Lấy đạo hàm hai lần bán kính véctơ $\vec{r}(t)$ theo thời gian để tìm gia tốc $\vec{a} = \ddot{\vec{r}}$, sau đó áp dụng định luật 2 Newton:
  $$\vec{F} = m \frac{d^2\vec{r}}{dt^2}$$

### Bài Toán Nghịch (Bài Toán Thứ Hai)
- **Cho biết:** Khối lượng $m$ của chất điểm, các lực tác dụng lên chất điểm $\vec{F} = \vec{F}(t, \vec{r}, \dot{\vec{r}})$ và các **điều kiện ban đầu** tại thời điểm $t = t_0$:
  $$\vec{r}(t_0) = \vec{r}_0; \quad \vec{v}(t_0) = \vec{v}_0$$
- **Yêu cầu:** Xác định quy luật chuyển động của chất điểm: $\vec{r} = \vec{r}(t)$.
- **Phương pháp giải:** Thiết lập và giải hệ phương trình vi phân chuyển động cấp hai:
  $$m \frac{d^2\vec{r}}{dt^2} = \vec{F}(t, \vec{r}, \dot{\vec{r}})$$
  Tích phân phương trình vi phân và xác định các hằng số tích phân từ điều kiện ban đầu.

---

## 1.4. Hệ Đơn Vị Cơ Học

Trong hệ đơn vị quốc tế (SI - Système International d'Unités):
- **Ba đơn vị cơ bản:**
  - Chiều dài: mét ($\text{m}$).
  - Thời gian: giây ($\text{s}$).
  - Khối lượng: kilôgam ($\text{kg}$).
- **Đơn vị lực dẫn xuất:** Niutơn ($\text{N}$).
  Một Niutơn là lực truyền cho một vật có khối lượng $1\text{ kg}$ một gia tốc $1\text{ m/s}^2$:
  $$1\text{ N} = 1\text{ kg} \cdot \text{m/s}^2$$
