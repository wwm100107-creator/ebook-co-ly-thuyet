# Chương 2: Phương Trình Vi Phân Của Chuyển Động

## 2.1. Phương Trình Vi Phân Chuyển Động Của Chất Điểm

Phương trình véctơ cơ bản của động lực học chất điểm:

$$m \frac{d^2\vec{r}}{dt^2} = \vec{F} = \sum_{k=1}^n \vec{F}_k \tag{2-1}$$

Tùy thuộc vào việc chọn hệ tọa độ, phương trình véctơ $(2-1)$ được biểu diễn dưới các dạng phương trình vi phân vô hướng tương ứng:

---

### 2.1.1. Trong Hệ Tọa Độ Descartes (Đề Các)

Chiếu phương trình $(2-1)$ lên ba trục tọa độ vuông góc $Ox, Oy, Oz$:

$$\begin{cases} m \ddot{x} = m \dfrac{d^2 x}{dt^2} = \displaystyle\sum_{k=1}^n F_{kx} \\[10pt] m \ddot{y} = m \dfrac{d^2 y}{dt^2} = \displaystyle\sum_{k=1}^n F_{ky} \\[10pt] m \ddot{z} = m \dfrac{d^2 z}{dt^2} = \displaystyle\sum_{k=1}^n F_{kz} \end{cases} \tag{2-2}$$

Đây là hệ ba phương trình vi phân cấp hai xác định chuyển động của chất điểm trong không gian.

<div class="figure-container">
  <img src="/figures/dong-luc-hoc/hinh_2_1.png" alt="Hình 2-1: Phương trình vi phân chuyển động của chất điểm trong hệ tọa độ Descartes" style="max-height: 270px;" />
  <div class="figure-caption">Hình 2-1: Chiếu lực và gia tốc lên các trục tọa độ Descartes</div>
</div>

---

### 2.1.2. Trong Hệ Tọa Độ Tự Nhiên

Chiếu phương trình $(2-1)$ lên ba trục của tam diện tự nhiên Frenet $(\vec{\tau}, \vec{n}, \vec{b})$ gắn tại điểm đang xét trên quỹ đạo:

$$\begin{cases} m a_t = m \ddot{s} = m \dfrac{dv}{dt} = \displaystyle\sum_{k=1}^n F_{kt} \\[10pt] m a_n = m \dfrac{v^2}{\rho} = \displaystyle\sum_{k=1}^n F_{kn} \\[10pt] m a_b = 0 = \displaystyle\sum_{k=1}^n F_{kb} \end{cases} \tag{2-3}$$

trong đó:
- $\rho$ là bán kính chính khúc của quỹ đạo tại vị trí khảo sát.
- $F_{kt}, F_{kn}, F_{kb}$ lần lượt là hình chiếu của lực lên trục tiếp tuyến, pháp tuyến chính và trùng pháp tuyến.
- Phương trình thứ ba chỉ ra rằng hợp lực tác dụng lên chất điểm luôn luôn nằm trong **mặt phẳng mật tiếp** $(\vec{\tau}, \vec{n})$.

<div class="figure-container">
  <img src="/figures/dong-luc-hoc/hinh_2_2.png" alt="Hình 2-2: Phương trình vi phân chuyển động trong hệ tọa độ tự nhiên" style="max-height: 260px;" />
  <div class="figure-caption">Hình 2-2: Phân tích lực theo tiếp tuyến và pháp tuyến chính</div>
</div>

---

### 2.1.3. Phương Trình Vi Phân Chuyển Động Của Chất Điểm Không Tự Do

Nếu chất điểm chịu liên kết (bị cưỡng bức di chuyển trên một mặt cong hoặc đường cong nhẵn), áp dụng tiên đề giải phóng liên kết, ta thay thế liên kết bằng phản lực liên kết $\vec{N}$:

$$m \frac{d^2\vec{r}}{dt^2} = \vec{F} + \vec{N} \tag{2-4}$$

trong đó $\vec{F}$ là hợp lực của các lực hoạt động, còn $\vec{N}$ là phản lực liên kết.

---

## 2.2. Phương Trình Vi Phân Chuyển Động Của Cơ Hệ

Cơ hệ là một tập hợp gồm $n$ chất điểm hoặc vật thể mà vị trí và chuyển động của chúng phụ thuộc lẫn nhau.

### 2.2.1. Ngoại Lực và Nội Lực

Các lực tác dụng lên các chất điểm của cơ hệ được chia thành hai loại:
- **Ngoại lực ($\vec{F}_k^e$):** Lực do các vật thể bên ngoài cơ hệ tác dụng lên các chất điểm thuộc cơ hệ.
- **Nội lực ($\vec{F}_k^i$):** Lực tác dụng tương hỗ lẫn nhau giữa các chất điểm thuộc cùng một cơ hệ.

::: tip Hai tính chất cơ bản của nội lực
1. Tổng hình học của tất cả các nội lực trong một cơ hệ luôn luôn bằng không:
   $$\sum_{k=1}^n \vec{F}_k^i = \vec{0} \tag{2-5}$$
2. Tổng các véctơ mômen của tất cả các nội lực đối với một điểm bất kỳ $O$ luôn luôn bằng không:
   $$\sum_{k=1}^n \vec{m}_O(\vec{F}_k^i) = \vec{0} \tag{2-6}$$
:::
*(Các tính chất này được suy ra trực tiếp từ định luật 3 Newton về hai lực trực đối từng đôi một).*

---

### 2.2.2. Hệ Phương Trình Vi Phân Chuyển Động Của Cơ Hệ

Áp dụng định luật 2 Newton cho từng chất điểm thứ $k$ (có khối lượng $m_k$) thuộc cơ hệ:

$$m_k \frac{d^2\vec{r}_k}{dt^2} = \vec{F}_k^e + \vec{F}_k^i \quad (k = 1, 2, ..., n) \tag{2-7}$$

Chiếu lên ba trục tọa độ Descartes vuông góc, ta nhận được hệ $3n$ phương trình vi phân cấp hai:

$$\begin{cases} m_k \ddot{x}_k = F_{kx}^e + F_{kx}^i \\ m_k \ddot{y}_k = F_{ky}^e + F_{ky}^i \\ m_k \ddot{z}_k = F_{kz}^e + F_{kz}^i \end{cases} \quad (k = 1, 2, ..., n) \tag{2-8}$$

Vì số lượng nội lực $\vec{F}_k^i$ thường rất phức tạp và khó xác định, nên trong thực tế người ta ít khi giải trực tiếp hệ phương trình $(2-8)$ mà sử dụng **các định lý tổng quát của động lực học** (nơi nội lực tự động triệt tiêu) hoặc phương pháp **Cơ học giải tích** (Phương trình Lagrange loại II).
