---
title: "Chặng 1 (Ngày 1–6): Chinh Phục Tĩnh Học (0 → 35 Điểm)"
layout: doc
---

# Chặng 1 (Ngày 1 – Ngày 6): Chinh Phục Tĩnh Học (`0 → 35 Điểm`)

Tĩnh học chiếm khoảng **30% đến 35% tổng số điểm** đề thi Cơ học lý thuyết (và là nền móng bắt buộc để giải tiếp Động học và Động lực học). Nếu bạn đang bắt đầu từ con số $0$, tin vui là Tĩnh học **không cần đạo hàm hay tích phân phức tạp** (trừ vài công thức trọng tâm đã cho sẵn bảng tra). Thứ duy nhất bạn cần là nắm chắc **quy tắc chiếu vectơ**, **tính mômen**, **giải phóng liên kết đúng** và **lập đủ phương trình cân bằng**.

::: info Lộ trình Chặng 1 (6 ngày — 90 đến 120 phút/ngày)
| Ngày | Chủ đề trọng tâm | Mốc điểm | Tài liệu giáo trình gốc |
| :--- | :--- | :--- | :--- |
| **Ngày 1** | Vectơ lực, 6 Tiên đề, Phép nhân vectơ, Mômen & Ngẫu lực | `0 → 6 điểm` | [Mở đầu](/tinh-hoc/mo-dau) · [Chương 1](/tinh-hoc/chuong-1) |
| **Ngày 2** | Bậc tự do ($\text{Dof}=3$), 6 loại liên kết, Tải phân bố & Cân bằng 1 vật | `6 → 13 điểm` | [Chương 1](/tinh-hoc/chuong-1) · [BT Chương 1](/bai-tap/tinh-hoc/chuong-1) |
| **Ngày 3** | Thu gọn hệ lực, 2 Bất biến, 4 Dạng chuẩn & 3 dạng PT cân bằng phẳng | `13 → 20 điểm` | [Chương 2](/tinh-hoc/chuong-2) · [BT Chương 1](/bai-tap/tinh-hoc/chuong-1) |
| **Ngày 4** | Quy trình 5 bước, Hệ nhiều vật & Hệ giàn phẳng (Tách nút + Ritter) | `20 → 27 điểm` | [Chương 2](/tinh-hoc/chuong-2) · [BT Chương 2](/bai-tap/tinh-hoc/chuong-2) |
| **Ngày 5** | Ma sát trượt tĩnh/động, Nêm & Thang, Ma sát lăn & Dây quấn Euler | `27 → 32 điểm` | [Chương 3](/tinh-hoc/chuong-3) · [BT Chương 4](/bai-tap/tinh-hoc/chuong-4) |
| **Ngày 6** | Cân bằng 3D, Trọng tâm (Ghép hình & Diện tích âm) + **Đề chốt 45 phút** | `32 → 35 điểm` | [Chương 4](/tinh-hoc/chuong-4) · [BT Ch.3](/bai-tap/tinh-hoc/chuong-3) · [BT Ch.5](/bai-tap/tinh-hoc/chuong-5) |
:::

> Quy tắc học mỗi ngày: Đọc kỹ **Phần 1** (25 phút) $\rightarrow$ Thuộc **Thuật toán Phần 2** (15 phút) $\rightarrow$ Tự che lời giải làm lại **Phần 3** (35 phút) $\rightarrow$ Soi **Bẫy & Tự luyện Phần 4** (25 phút).

---

## Ngày 1 (`0 → 6 điểm`): Vectơ Lực, 6 Tiên Đề, Phép Nhân Vectơ & Mômen – Ngẫu Lực

### 1. Mục tiêu điểm số & Kiến thức cốt lõi cô đọng

- **Mục tiêu:** Đạt chắc `6/100` điểm đầu tiên: trả lời trọn vẹn câu hỏi lý thuyết mở đầu đề thi (mệnh đề khoa học, 6 Tiên đề tĩnh học), thành thạo chiếu lực 2D theo mọi hệ trục nghiêng, tính đúng $100\%$ mômen lực trong 3D đối với tâm và trục, và biết cách dời lực song song.
- **Đọc sâu lý thuyết & bài tập gốc:** [Mở Đầu Tĩnh Học](/tinh-hoc/mo-dau) | [Chương 1: Khái niệm cơ bản và Hệ tiên đề Tĩnh học](/tinh-hoc/chuong-1) | [Bài Tập Tĩnh Học – Chương 1](/bai-tap/tinh-hoc/chuong-1).

#### a) 3 Định nghĩa nền tảng & Vectơ lực
- **Vật rắn tuyệt đối:** Tập hợp vô hạn các chất điểm mà khoảng cách giữa 2 điểm bất kỳ thuộc vật **luôn không đổi** khi chịu lực (bỏ qua biến dạng).
- **Trạng thái cân bằng:** Vật rắn đứng yên ($\vec{v} = \vec{0}$) hoặc chuyển động tịnh tiến thẳng đều đối với hệ quy chiếu quán tính (Trái Đất).
- **Lực ($\vec{F}$):** Đại lượng vectơ đặc trưng cho tác dụng cơ học giữa các vật, có **3 yếu tố**: (1) Điểm đặt, (2) Phương – chiều, (3) Độ lớn/cường độ (đơn vị Niutơn $[\text{N}]$ hoặc $[\text{kN}]$, $1\text{ kN} = 1000\text{ N}$).
- **Phân loại bản chất vectơ trong Tĩnh học:**
  - *Vectơ trượt:* Lực $\vec{F}$ tác dụng lên vật tuyệt đối rắn (trượt dọc theo đường tác dụng không đổi tác dụng).
  - *Vectơ tự do:* Vectơ mômen ngẫu lực $\vec{M}$ và véctơ chính $\vec{R}'$ (đặt ở đâu cũng có cùng giá trị).
  - *Vectơ buộc:* Mômen chính $\vec{M}_O$ đối với tâm thu gọn $O$ (gắn chặt với điểm $O$).

#### b) Hình chiếu đại số của lực lên trục
::: tip Bản chất hình chiếu đại số
Hình chiếu của vectơ $\vec{F}$ lên trục $Ox$ là **một giá trị đại số** $F_x$ (là con số có dấu $+$, $-$ hoặc $0$), **không phải vectơ**. Nếu góc nhọn giữa phương của $\vec{F}$ và trục $Ox$ là $\alpha$:

$$F_x = \pm F\cos\alpha, \qquad F_y = \pm F\sin\alpha$$

- Quy ước dấu: hướng chiếu cùng chiều dương trục lấy dấu $(+)$, ngược chiều dương trục lấy dấu $(-)$.
- Quy tắc nhớ nhanh cho người mất gốc: **Góc $\alpha$ kề trục nào thì trục đó nhân $\cos\alpha$, trục vuông góc còn lại nhân $\sin\alpha$**.
- Kiểm tra lại độ lớn: trong 2D luôn có $F_x^2 + F_y^2 = F^2$; trong 3D luôn có $F_x^2 + F_y^2 + F_z^2 = F^2$.
:::

#### c) 4 Loại mệnh đề đúng trong khoa học & 6 Tiên đề Tĩnh học
Trong đề thi lý thuyết hay hỏi: *"Trong khoa học có mấy loại mệnh đề đúng theo trình tự hình thành?"* — Đáp án gồm: **(1) Tiên đề** (công nhận từ thực nghiệm không cần chứng minh), **(2) Định lý** (suy diễn logic từ tiên đề), **(3) Hệ quả** (suy trực tiếp từ tiên đề hoặc định lý), **(4) Định luật** (quy luật định lượng từ thực nghiệm, ví dụ Định luật Coulomb).

| STT | Tên Tiên đề | Nội dung cốt lõi cần nhớ | Ý nghĩa & Lưu ý đi thi |
| :--- | :--- | :--- | :--- |
| **1** | **Hai lực cân bằng** | $(\vec{F}_1, \vec{F}_2) \sim 0 \iff$ cùng đường tác dụng, ngược chiều, cùng độ lớn. | Tiêu chuẩn gốc để kiểm tra cân bằng. |
| **2** | **Thêm bớt hai lực cân bằng** | Tác dụng của hệ lực không đổi khi thêm hoặc bớt 2 lực cân bằng. | Có thể thay đổi sang nhiều hệ lực tương đương. **Hệ quả (Định lý trượt lực):** Trượt $\vec{F}$ dọc đường tác dụng trên vật rắn thì tác dụng không đổi. |
| **3** | **Hình bình hành lực** | Hai lực đồng quy tương đương 1 lực đặt tại giao điểm: $\vec{R} = \vec{F}_1 + \vec{F}_2$. | Coi 2 lực song song là cắt nhau ở vô cùng. Hệ $n$ lực đồng quy cần $(n-1)$ lần hợp lực. **Chú ý:** $\ge 3$ lực đồng quy chưa chắc đồng phẳng! |
| **4** | **Tác dụng & Phản tác dụng** | Lực tác dụng và phản tác dụng giữa 2 vật có cùng đường tác dụng, cùng độ lớn, ngược chiều. | **Không phải 2 lực cân bằng** vì đặt vào **2 vật khác nhau**! Là cơ sở tách khớp nối giữa nhiều vật. |
| **5** | **Hóa rắn** | Vật biến dạng cân bằng thì khi hóa rắn lại nó vẫn cân bằng. | Điều kiện **cần, không đủ** cho vật biến dạng (ví dụ dây/lò xo). |
| **6** | **Giải phóng liên kết** | Vật chịu liên kết cân bằng $\iff$ vật tự do cân bằng dưới tác dụng của lực hoạt động và **phản lực liên kết**. | Tiên đề quan trọng nhất để biến mọi bài tập cơ học thành bài toán lập phương trình. |

#### d) Phân biệt 3 phép nhân vectơ
| Phép nhân | Ký hiệu & Công thức | Kết quả tạo ra | Ứng dụng trong Cơ học |
| :--- | :--- | :--- | :--- |
| **1. Nhân vô hướng** | $\vec{a}\cdot\vec{b} = ab\cos\theta = a_x b_x + a_y b_y + a_z b_z$ | **1 giá trị đại số** (số thực) | Kiểm tra vuông góc ($\vec{a}\cdot\vec{b}=0$), tính Bất biến II ($\vec{R}'\cdot\vec{M}_O$), tính công cơ học. |
| **2. Nhân có hướng** | $\vec{a}\times\vec{b} = \begin{vmatrix}\vec{i}&\vec{j}&\vec{k}\\a_x&a_y&a_z\\b_x&b_y&b_z\end{vmatrix}$ | **1 vectơ mới** $\perp \text{mp}(\vec{a},\vec{b})$, độ lớn $ab\sin\theta$ | Tính **Mômen lực** $\vec{M}_O(\vec{F}) = \vec{r}\times\vec{F}$, vận tốc quay $\vec{v}=\vec{\omega}\times\vec{r}$. |
| **3. Nhân tensor** | $\vec{a}\otimes\vec{b} = [a_i b_j]$ | **Tensor bậc 2** (ma trận $3\times 3$) | Thiết lập tensor quán tính trong Động lực học vật rắn 3D. |

#### e) Mômen của lực đối với tâm O, đối với trục và 3 Cách ký hiệu
1. **Mômen của lực $\vec{F}$ đối với tâm $O$:** Đo tác dụng làm vật rắn quay quanh điểm $O$.
   $$\vec{M}_O(\vec{F}) = \vec{r} \times \vec{F} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ x & y & z \\ F_x & F_y & F_z \end{vmatrix}$$
   trong đó $\vec{r} = \overrightarrow{OA} = (x;\, y;\, z)$ là bán kính vectơ từ **tâm quay $O$** đến **điểm đặt $A$** của lực $\vec{F}$.
   - **Độ lớn hình học:** $\lvert\vec{M}_O(\vec{F})\rvert = F \cdot d = F \cdot r \sin\alpha$, với $d = OH = r\sin\alpha$ là **cánh tay đòn** (khoảng cách vuông góc từ $O$ đến đường tác dụng $(\ell)$ của lực $\vec{F}$).
   - **Chiều vectơ $\vec{M}_O$:** Theo quy tắc bàn tay phải (vặn nút chai quay góc nhỏ nhất từ $\vec{r}$ sang $\vec{F}$).
   - **Định lý triệt tiêu mômen (với $\vec{F}\neq\vec{0}$):** $\vec{M}_O(\vec{F}) = \vec{0} \iff d = 0 \iff \alpha = 0^\circ$ hoặc $180^\circ \iff O \in (\ell)$ (đường tác dụng lực đi qua tâm $O$).
   - **Trong mặt phẳng $Oxy$:** dùng mômen đại số $\bar{m}_O(\vec{F}) = \pm F \cdot d = x F_y - y F_x$ (quy ước: **ngược chiều kim đồng hồ lấy dấu $(+)$**, **thuận chiều kim đồng hồ lấy dấu $(-)$**).

2. **Mômen của lực $\vec{F}$ đối với trục $\Delta$:** Bằng hình chiếu lên trục $\Delta$ của vectơ mômen đối với một điểm $O \in \Delta$:
   $$\bar{m}_{\Delta}(\vec{F}) = \text{hch}_{\Delta}[\vec{M}_O(\vec{F})]$$
   Chiếu công thức định thức lên $Ox, Oy, Oz$ thu được **3 công thức giải tích bất hủ**:
   $$M_x(\vec{F}) = y F_z - z F_y, \qquad M_y(\vec{F}) = z F_x - x F_z, \qquad M_z(\vec{F}) = x F_y - y F_x$$
   - Khi $\vec{F}$ **song song** hoặc **cắt** trục $\Delta$ (tức đồng phẳng với $\Delta$), mômen đối với trục $\Delta$ bằng **$0$**.

3. **3 Cách ký hiệu Mômen / Ngẫu lực trên hình vẽ:**
   - *Cách 1:* Ký hiệu bằng **vectơ thẳng 2 đầu mũi tên** $\vec{M}$ (hướng theo quy tắc bàn tay phải).
   - *Cách 2:* Ký hiệu bằng **một ngẫu gồm 2 lực** $(\vec{F}, \vec{F}')$ sao cho mômen ngẫu bằng đúng $\vec{M}$.
   - *Cách 3:* Ký hiệu bằng **mũi tên cong phẳng** nằm trong mặt phẳng tác dụng, chỉ đúng chiều quay.

#### f) Ngẫu lực & Định lý dời lực song song
- **Ngẫu lực:** Hệ 2 lực $(\vec{F}, \vec{F}')$ thỏa mãn 4 điều kiện: song song, ngược chiều, cùng độ lớn, **không cùng đường tác dụng** (cách nhau tay đòn $d > 0$).
  - Tính chất: $\vec{R}' = \vec{0}$, **không có hợp lực**, không thể tự cân bằng, tác dụng duy nhất là **làm vật quay** với mômen $M = F \cdot d$.
  - 4 định lý của ngẫu lực: (1) Hai ngẫu lực tương đương $\iff$ cùng vectơ mômen $\vec{M}$; (2) Một ngẫu lực tương đương với vô số ngẫu lực khác có cùng $\vec{M}$ (đổi $F, d$ miễn $F\cdot d$ không đổi, dời sang mặt phẳng song song); (3) Mômen của ngẫu đối với mọi điểm $O$ bất kỳ đều bằng chính $\vec{M}$ (vectơ tự do); (4) Hợp nhiều ngẫu lực là 1 ngẫu có $\vec{M} = \sum \vec{M}_i$.
- **Định lý dời lực song song (Bổ đề Poinsot):** Có thể dời lực $\vec{F}$ từ điểm đặt $A$ sang điểm $B$ tùy ý ngoài đường tác dụng của nó bằng cách **giữ nguyên lực $\vec{F}$ đặt tại $B$ và bù thêm một ngẫu lực có vectơ mômen đúng bằng mômen của lực ban đầu đối với điểm đến $B$**:
  $$(\vec{F})_A \sim \left[\, (\vec{F})_B \,;\; \vec{M}_B(\vec{F}_A) = \overrightarrow{BA} \times \vec{F} \,\right]$$

---

### 2. Thuật toán giải từng bước

#### Thuật toán A: Chiếu lực và kiểm tra bất biến hợp lực trên mặt dốc nghiêng
1. **Bước 1:** Vẽ rõ hai hệ trục cần khảo sát: hệ nghiêng $(Ox, Oy)$ gắn với mặt dốc và hệ ngang–đứng $(Ox', Oy')$.
2. **Bước 2:** Xác định **góc định hướng** của từng lực $\vec{F}_k$ so với trục $+Ox$ (hoặc tìm góc nhọn với trục gần nhất rồi xác định dấu $+/-$ theo góc phần tư).
3. **Bước 3:** Chiếu từng lực để tìm $(F_{kx}, F_{ky})$ rồi cộng theo từng trục: $R_x = \sum F_{kx},\; R_y = \sum F_{ky}$.
4. **Bước 4 (Tự kiểm lỗi):** Tính $R = \sqrt{R_x^2 + R_y^2}$ ở cả hai hệ trục; bắt buộc $R_{(x,y)} = R_{(x',y')}$ và góc hợp với phương ngang lệch nhau đúng bằng góc nghiêng mặt dốc!

#### Thuật toán B: Tính Mômen 3D chuẩn xác không bao giờ sai dấu
1. **Bước 1:** Ghi rõ tọa độ tâm lấy mômen $O(x_O; y_O; z_O)$ và điểm đặt lực $A(x_A; y_A; z_A)$.
2. **Bước 2:** Lập vectơ định vị **từ tâm đến điểm đặt**: $\vec{r} = \overrightarrow{OA} = (x_A - x_O;\; y_A - y_O;\; z_A - z_O)$.
3. **Bước 3:** Biểu diễn $\vec{F} = (F_x;\; F_y;\; F_z)$ (nếu biết lực hướng từ $A$ đến $B$ thì lấy $\vec{F} = F \cdot \frac{\overrightarrow{AB}}{AB}$).
4. **Bước 4:** Tính $\vec{M}_O(\vec{F}) = \vec{r} \times \vec{F}$ theo công thức $(yF_z - zF_y;\; zF_x - xF_z;\; xF_y - yF_x)$ — chú ý thứ tự **trừ ngược ở thành phần $y$**: $zF_x - xF_z = -(xF_z - zF_x)$!
5. **Bước 5 (Mẹo tự kiểm 5 giây):** Tính tích vô hướng $\vec{M}_O \cdot \vec{r}$ và $\vec{M}_O \cdot \vec{F}$. Cả hai **phải bằng đúng $0$**; nếu khác $0$ là bạn đã nhầm dấu ở Bước 4!

---

### 3. Ví dụ minh họa giải chi tiết 100%

::: tip Ví dụ 1.1: Chiếu hệ 2 lực trên mặt dốc nghiêng $20^\circ$ theo 2 hệ trục (Bài mẫu chuẩn vở ghi)
**Đề bài:** Một khối vật đặt trên mặt dốc nghiêng góc $\alpha = 20^\circ$ so với phương nằm ngang (dốc xuống về phía bên phải). Vật chịu tác dụng đồng thời của hai lực đồng quy:
- Lực $\vec{F}_1$ có độ lớn $F_1 = 200\text{ N}$, hướng lên phía trên bên phải, hợp với chiều dốc xuống dưới một góc $35^\circ$.
- Lực $\vec{F}_2$ có độ lớn $F_2 = 150\text{ N}$, hướng lên phía trên bên trái, hợp với phương pháp tuyến (vuông góc mặt dốc hướng lên) một góc $30^\circ$.

Hãy tìm biểu thức tọa độ và độ lớn của hợp lực $\vec{R} = \vec{F}_1 + \vec{F}_2$ theo hai cách:
1. Dùng hệ trục tọa độ nghiêng $(x, y)$: $Ox$ hướng dọc xuống mặt dốc, $Oy$ hướng theo pháp tuyến lên trên.
2. Dùng hệ trục tọa độ ngang–đứng $(x', y')$: $Ox'$ nằm ngang hướng sang phải, $Oy'$ thẳng đứng hướng lên trên.

Kiểm tra sự trùng khớp của độ lớn và phương tuyệt đối của hợp lực $\vec{R}$.

**Lời giải chi tiết:**

**Cách 1: Chiếu lên hệ trục nghiêng $(x, y)$ (vectơ đơn vị $\vec{i}, \vec{j}$)**
- Quan sát vị trí của $\vec{F}_1$: nằm ở góc phần tư thứ I của hệ $(x, y)$, kề với $+Ox$ một góc $35^\circ$:
  $$F_{1x} = +200\cos 35^\circ \approx +163{,}830\text{ N}, \qquad F_{1y} = +200\sin 35^\circ \approx +114{,}715\text{ N}$$
  $$\implies \vec{F}_1 = 200\cos 35^\circ\,\vec{i} + 200\sin 35^\circ\,\vec{j}\text{ (N)}$$
- Quan sát vị trí của $\vec{F}_2$: nằm ở góc phần tư thứ II của hệ $(x, y)$ (lệch về phía $-Ox$, phía trên $+Oy$), kề với $+Oy$ một góc $30^\circ$ (nên đối diện với $-Ox$ góc $30^\circ$):
  $$F_{2x} = -150\sin 30^\circ = -75{,}000\text{ N}, \qquad F_{2y} = +150\cos 30^\circ \approx +129{,}904\text{ N}$$
  $$\implies \vec{F}_2 = -150\sin 30^\circ\,\vec{i} + 150\cos 30^\circ\,\vec{j}\text{ (N)}$$
- Cộng hai thành phần để tìm hợp lực $\vec{R}$:
  $$R_x = F_{1x} + F_{2x} = 163{,}8304 - 75 = 88{,}8304 \approx 88{,}83\text{ N}$$
  $$R_y = F_{1y} + F_{2y} = 114{,}7153 + 129{,}9038 = 244{,}6191 \approx 244{,}62\text{ N}$$
  $$\vec{R} = 88{,}83\,\vec{i} + 244{,}62\,\vec{j}\text{ (N)}$$
- Độ lớn và góc hợp với trục $Ox$ nghiêng:
  $$R = \sqrt{88{,}8304^2 + 244{,}6191^2} = \sqrt{7890{,}84 + 59838{,}50} = \sqrt{67729{,}34} \approx 260{,}25\text{ N}$$
  $$\theta_{xy} = \arctan\left(\frac{244{,}6191}{88{,}8304}\right) \approx 70{,}04^\circ \quad (\text{hướng lên-phải so với } Ox)$$

**Cách 2: Chiếu lên hệ trục ngang–đứng $(x', y')$ (vectơ đơn vị $\vec{i}', \vec{j}'$)**
- Do mặt dốc chúi xuống sang phải một góc $20^\circ$ so với phương ngang $+Ox'$:
  - Trục $+Ox$ nằm dưới $+Ox'$ đúng $20^\circ$, mà $\vec{F}_1$ nằm trên $+Ox$ góc $35^\circ \implies \vec{F}_1$ nằm **trên** phương ngang $+Ox'$ một góc:
    $$\beta_1 = 35^\circ - 20^\circ = 15^\circ$$
    $$\implies \vec{F}_1 = 200\cos 15^\circ\,\vec{i}' + 200\sin 15^\circ\,\vec{j}' \approx 193{,}185\,\vec{i}' + 51{,}764\,\vec{j}'\text{ (N)}$$
  - Trục $+Oy$ nghiêng sang phải một góc $20^\circ$ so với phương thẳng đứng $+Oy'$, mà $\vec{F}_2$ lệch sang **trái** so với $+Oy$ góc $30^\circ \implies \vec{F}_2$ lệch sang **trái** so với phương thẳng đứng $+Oy'$ một góc:
    $$\beta_2 = 30^\circ - 20^\circ = 10^\circ$$
    $$\implies \vec{F}_2 = -150\sin 10^\circ\,\vec{i}' + 150\cos 10^\circ\,\vec{j}' \approx -26{,}047\,\vec{i}' + 147{,}721\,\vec{j}'\text{ (N)}$$
- Cộng hai thành phần theo hệ $(x', y')$:
  $$R_{x'} = 193{,}1852 - 26{,}0472 = 167{,}1380 \approx 167{,}14\text{ N}$$
  $$R_{y'} = 51{,}7638 + 147{,}7212 = 199{,}4850 \approx 199{,}49\text{ N}$$
  $$\vec{R} = 167{,}14\,\vec{i}' + 199{,}49\,\vec{j}'\text{ (N)}$$
- **Kiểm tra khớp độ lớn & phương tuyệt đối:**
  $$R = \sqrt{167{,}1380^2 + 199{,}4850^2} = \sqrt{27935{,}11 + 39794{,}28} = \sqrt{67729{,}39} \approx 260{,}25\text{ N}$$
  $$\theta_{x'y'} = \arctan\left(\frac{199{,}4850}{167{,}1380}\right) \approx 50{,}04^\circ \quad (\text{so với phương ngang } +Ox')$$
  Nhận thấy $\theta_{xy} - \theta_{x'y'} = 70{,}04^\circ - 50{,}04^\circ = 20{,}00^\circ$ (đúng bằng góc xoay giữa hai hệ trục) và $R = 260{,}25\text{ N}$ trùng khớp tuyệt đối ở cả 2 cách!
:::

::: tip Ví dụ 1.2: Tính Mômen lực 3D đối với tâm $O$, các trục tọa độ & Dời lực song song
**Đề bài:** Trong không gian $Oxyz$ (đơn vị mét), lực $\vec{F}$ có độ lớn $F = 70\text{ N}$ đặt tại điểm $A(2;\, 1;\, 3)$ và có đường tác dụng hướng từ $A$ đến điểm $B(4;\, 4;\, 9)$.
1. Xác định các thành phần tọa độ của vectơ lực $\vec{F}$.
2. Tính vectơ mômen $\vec{M}_O(\vec{F})$ của lực $\vec{F}$ đối với gốc tọa độ $O(0;\, 0;\, 0)$, độ lớn $M_O$, cánh tay đòn $d$ từ $O$ đến giá của $\vec{F}$, và mômen của lực đối với các trục $Ox, Oy, Oz$.
3. Viết hệ tương đương khi dời song song lực $\vec{F}$ từ $A$ về gốc $O$.

**Lời giải chi tiết:**

**1. Tìm vectơ lực $\vec{F}$ trong không gian 3D:**
- Vectơ chỉ phương từ $A(2;\, 1;\, 3)$ đến $B(4;\, 4;\, 9)$:
  $$\overrightarrow{AB} = (4 - 2;\; 4 - 1;\; 9 - 3) = (2;\; 3;\; 6)\text{ m}$$
- Chiều dài đoạn $AB$:
  $$AB = \sqrt{2^2 + 3^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7\text{ m}$$
- Vectơ đơn vị chỉ hướng của lực: $\vec{u} = \frac{\overrightarrow{AB}}{AB} = \left(\frac{2}{7};\; \frac{3}{7};\; \frac{6}{7}\right)$.
- Suy ra vectơ lực $\vec{F}$:
  $$\vec{F} = F \cdot \vec{u} = 70 \cdot \left(\frac{2}{7};\; \frac{3}{7};\; \frac{6}{7}\right) = (20;\; 30;\; 60)\text{ N}$$

**2. Tính Mômen đối với $O$, các trục & cánh tay đòn $d$:**
- Vectơ định vị từ tâm $O(0;\,0;\,0)$ đến điểm đặt $A(2;\,1;\,3)$: $\vec{r} = \overrightarrow{OA} = (2;\; 1;\; 3)\text{ m}$.
- Áp dụng công thức tích có hướng $\vec{M}_O(\vec{F}) = \vec{r} \times \vec{F}$:
  $$\vec{M}_O(\vec{F}) = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 2 & 1 & 3 \\ 20 & 30 & 60 \end{vmatrix}$$
  - Thành phần $x$: $M_{Ox} = (1)(60) - (3)(30) = 60 - 90 = -30\text{ N}\cdot\text{m}$.
  - Thành phần $y$: $M_{Oy} = (3)(20) - (2)(60) = 60 - 120 = -60\text{ N}\cdot\text{m}$.
  - Thành phần $z$: $M_{Oz} = (2)(30) - (1)(20) = 60 - 20 = +40\text{ N}\cdot\text{m}$.
  Vậy:
  $$\vec{M}_O(\vec{F}) = (-30;\; -60;\; 40)\text{ N}\cdot\text{m}$$
- **Kiểm tra trực giao tự động:**
  - $\vec{M}_O \cdot \vec{r} = (-30)(2) + (-60)(1) + (40)(3) = -60 - 60 + 120 = 0$ (Đúng!).
  - $\vec{M}_O \cdot \vec{F} = (-30)(20) + (-60)(30) + (40)(60) = -600 - 1800 + 2400 = 0$ (Đúng!).
- Độ lớn mômen chính tại $O$:
  $$M_O = \sqrt{(-30)^2 + (-60)^2 + 40^2} = \sqrt{900 + 3600 + 1600} = \sqrt{6100} = 10\sqrt{61} \approx 78{,}10\text{ N}\cdot\text{m}$$
- Cánh tay đòn từ gốc $O$ đến giá của $\vec{F}$:
  $$d = \frac{M_O}{F} = \frac{10\sqrt{61}}{70} = \frac{\sqrt{61}}{7} \approx 1{,}12\text{ m}$$
- Mômen đối với 3 trục tọa độ chính là 3 hình chiếu của $\vec{M}_O$:
  $$m_x(\vec{F}) = -30\text{ N}\cdot\text{m}, \qquad m_y(\vec{F}) = -60\text{ N}\cdot\text{m}, \qquad m_z(\vec{F}) = +40\text{ N}\cdot\text{m}$$

**3. Dời lực song song từ $A$ về gốc $O$:**
Theo Định lý dời lực song song:
$$(\vec{F})_A \sim \left[\, (\vec{F})_O = (20;\; 30;\; 60)\text{ N} \,;\; \vec{M}_O = (-30;\; -60;\; 40)\text{ N}\cdot\text{m} \,\right]$$
:::

---

### 4. Bẫy hay sai & Bài tập tự luyện

::: warning 4 Bẫy hay sai kinh điển của Ngày 1
1. **Bẫy Tiên đề 4 vs Tiên đề 1:** Nhiều bạn chọn sai câu trắc nghiệm *"Lực tác dụng và phản tác dụng là hai lực cân bằng"*. Sai hoàn toàn: chúng bằng nhau và ngược chiều nhưng **đặt vào 2 vật khác nhau**, nên không thể triệt tiêu nhau khi xét riêng từng vật!
2. **Bẫy xác định góc chiếu:** Khi đề cho góc $\alpha$ hợp bởi lực với **phương thẳng đứng** hay **pháp tuyến**, không được máy móc gắn $F_x = F\cos\alpha$. Hãy nhìn tam giác vuông chiếu lực: cạnh nào kề góc $\alpha$ thì dùng $\cos$, cạnh nào đối góc $\alpha$ thì dùng $\sin$.
3. **Bẫy đảo thứ tự $\vec{r} \times \vec{F}$ thành $\vec{F} \times \vec{r}$ và sai dấu thành phần $y$:** Nhớ $\vec{r} = \overrightarrow{OA}$ (**Gốc là tâm quay $O$, Ngọn là điểm đặt $A$**). Khi viết định thức, hàng thứ hai là $(x, y, z)$, hàng thứ ba là $(F_x, F_y, F_z)$, và thành phần $\vec{j}$ là $-(x F_z - z F_x) = z F_x - x F_z$.
4. **Bẫy lực trượt vs ngẫu lực:** Lực $\vec{F}$ là vectơ trượt (trượt khỏi đường tác dụng làm thay đổi mômen), còn mômen ngẫu lực $\vec{M}$ là vectơ tự do (dời đi đâu trong không gian cũng không đổi).
:::

::: info Bài tập tự luyện Ngày 1 (Có đáp số)
1. **Bài 1.1 (Chiếu lực phẳng):** Tại gốc $O$ của hệ $Oxy$, hai lực đồng quy $\vec{F}_1 = 120\text{ N}$ hợp với $+Ox$ góc $30^\circ$ (góc phần tư I) và $\vec{F}_2 = 80\text{ N}$ hợp với $-Ox$ góc $45^\circ$ (góc phần tư II). Tìm $R_x, R_y$, độ lớn $R$ và góc $\theta$ giữa $\vec{R}$ với $+Ox$.
   - *Đáp số:* $R_x \approx 47{,}35\text{ N}$, $R_y \approx 116{,}57\text{ N}$, $R \approx 125{,}82\text{ N}$, $\theta \approx 67{,}89^\circ$.
2. **Bài 1.2 (Mômen 3D):** Lực $\vec{F} = (30;\; 40;\; -50)\text{ N}$ đặt tại $A(1;\; -2;\; 2)\text{ m}$. Tính $\vec{M}_O(\vec{F})$ và độ lớn $M_O$.
   - *Đáp số:* $\vec{M}_O = (20;\; 110;\; 100)\text{ N}\cdot\text{m}$, $M_O = 150\text{ N}\cdot\text{m}$.
3. **Bài 1.3 (Dời lực song song):** Lực $\vec{F} = (0;\; -60;\; 0)\text{ N}$ đặt tại $A(3;\; 2;\; 0)\text{ m}$. Dời song song lực này về điểm $B(1;\; 5;\; 0)\text{ m}$ thì phải thêm ngẫu lực phụ $\vec{M}_B$ bằng bao nhiêu?
   - *Đáp số:* $\overrightarrow{BA} = (2;\; -3;\; 0)\text{ m} \implies \vec{M}_B = (0;\; 0;\; -120)\text{ N}\cdot\text{m}$ (quay thuận chiều kim đồng hồ, độ lớn $120\text{ N}\cdot\text{m}$).
:::

---

## Ngày 2 (`6 → 13 điểm`): Bậc Tự Do, 6 Loại Liên Kết, Tải Phân Bố & Cân Bằng 1 Vật Phẳng

### 1. Mục tiêu điểm số & Kiến thức cốt lõi cô đọng

- **Mục tiêu:** Ghi thêm `+7` điểm (tích lũy `13/100`), xác định đúng bậc tự do $\text{Dof}$, vẽ không sót không thừa bất kỳ phản lực liên kết nào trong 6 loại liên kết chuẩn, quy đổi đúng lực phân bố và giải chuẩn xác bài toán cân bằng 1 vật rắn phẳng.
- **Đọc sâu lý thuyết & bài tập gốc:** [Chương 1 – Các loại liên kết thường gặp](/tinh-hoc/chuong-1) | [Bài Tập Tĩnh Học – Chương 1](/bai-tap/tinh-hoc/chuong-1).

#### a) Bậc tự do của vật rắn phẳng (Dof = 3)
- **Định nghĩa:** Bậc tự do ($\text{Dof}$ — *Degrees of Freedom*) là số chuyển động độc lập đồng thời (tọa độ độc lập) cần thiết để xác định hoàn toàn vị trí của vật trong không gian.
- Một **vật rắn tự do hoàn toàn trong mặt phẳng $Oxy$** có đúng **$\text{Dof} = 3$**:
  1. Tịnh tiến thẳng dọc theo phương ngang ($Ox$).
  2. Tịnh tiến thẳng dọc theo phương đứng ($Oy$).
  3. Quay trong mặt phẳng chứa vật (quanh trục $Oz$ vuông góc mặt phẳng).
- **Lưu ý quan trọng:** Mỗi bậc tự do tịnh tiến hoặc quay bao gồm **cả hai chiều** $(+)$ và $(-)$ trên cùng một phương! Do đó, liên kết nào chỉ cản trở $1$ chiều trên $1$ phương (như dây chùng được nhưng không giãn được, hay mặt tựa nhấc lên được nhưng không lún xuống được) sẽ chỉ khử **$R = 0{,}5$ bậc tự do**.
- **4 Tính chất của Phản lực liên kết (PLLK):** (1) Số thành phần phản lực = $\text{round}(R_{\text{lk}})$; (2) Vị trí đặt trùng vị trí liên kết; (3) Phương trùng với phương chuyển động bị cản trở; (4) Chiều ngược với chiều chuyển động bị cản trở.

#### b) Bảng 6 loại liên kết phẳng & Phản lực liên kết bắt buộc thuộc lòng

| STT | Loại liên kết | Số bậc tự do bị khử ($R$) | Phản lực thay thế & Ký hiệu | Quy tắc phương – chiều & Lưu ý đi thi |
| :--- | :--- | :---: | :--- | :--- |
| **1** | **Dây mềm** (nhẹ, không giãn) | $R = 0{,}5$ | Sức căng dây $\vec{T}$ ($1$ ẩn) | Phương **dọc theo dây**, chiều **hướng ra ngoài vật** (vào trong dây). Bắt buộc $T \ge 0$. |
| **2** | **Tựa nhẵn** (tiếp xúc điểm/mặt) | $R = 0{,}5$ | Phản lực pháp tuyến $\vec{N}$ ($1$ ẩn) | **Vuông góc mặt tựa**, hướng **vào vật khảo sát**. Bắt buộc $N \ge 0$. *Nếu có điểm gãy thì $\vec{N} \perp$ bề mặt không gãy!* |
| **3** | **Gối trượt / Bản lề trượt** (con lăn) | $R = 1$ | $1$ phản lực pháp tuyến $\vec{N}$ ($1$ ẩn) | **Vuông góc mặt trượt / rãnh trượt**. (Nếu rãnh khống chế 2 phía, $N$ có thể mang dấu âm khi giải ra ngược chiều giả thiết). |
| **4** | **Bản lề cố định** (gối cố định) | $R = 2$ | $2$ thành phần vuông góc $(A_x, A_y)$ hoặc $(R_A, \theta)$ | Cản trở cả 2 chuyển động tịnh tiến, cho quay tự do $\implies$ **không có ngẫu phản lực**. Chiều $A_x, A_y$ giả thiết tùy ý. |
| **5** | **Khớp bản lề nội** (nối 2 vật/thanh) | $R = 2$ (khớp nối $k$ thanh: $R = 2(k-1)$) | Cặp lực trực đối $(B_x, B_y)$ và $(B'_x, B'_y)$ | Khi **hóa rắn** 2 vật thì triệt tiêu; khi **tách vật** phải vẽ $B_x = -B'_x,\; B_y = -B'_y$ (ngược chiều nhau trên 2 vật!). |
| **6** | **Ngàm phẳng** (chôn cứng đầu thanh) | $R = 3$ | $2$ thành phần lực $(A_x, A_y)$ và $1$ ngẫu lực $M_A$ | Cản trở cả tịnh tiến lẫn quay $\implies$ **luôn có đủ 3 ẩn**, không bao giờ được quên ngẫu lực ngàm $M_A$! |

*(Ghi nhớ thêm: **Liên kết thanh nhẹ** có bản lề ở 2 đầu và không chịu lực ở giữa thân thì phản lực $\vec{S}$ nằm dọc trục thanh — chịu kéo hoặc nén).*

#### c) Quy đổi tải trọng phân bố về lực tập trung tương đương
Trong đề thi, dầm hoặc mái hiên thường chịu tải phân bố đường cường độ $q$ $[\text{N/m}]$ hoặc $[\text{kN/m}]$. Ta quy đổi về $1$ lực tập trung $Q$ bằng **diện tích biểu đồ tải trọng**, đặt tại **trọng tâm hình biểu đồ**:
- **Tải phân bố đều (hình chữ nhật, cường độ $q = \text{const}$ trên đoạn $l$):**
  $$Q = q \cdot l, \qquad \text{đặt tại trung điểm cách mỗi đầu đoạn một khoảng } \frac{l}{2}$$
- **Tải phân bố tam giác vuông (tăng tuyến tính từ $0$ đến $q_{\max}$ trên đoạn $l$):**
  $$Q = \frac{1}{2} q_{\max} \cdot l, \qquad \text{đặt cách đầu đáy lớn } (q_{\max}) \text{ một đoạn } \frac{1}{3}l \text{ (cách đầu nhọn một đoạn } \frac{2}{3}l\text{)}$$
- **Tải phân bố hình thang:** Chia ngang thành $1$ hình chữ nhật $+$ $1$ tam giác vuông, quy đổi thành $2$ lực tập trung đặt tại trọng tâm riêng của từng phần.

---

### 2. Thuật toán giải bài toán cân bằng 1 vật rắn phẳng (3 bước)

1. **Bước 1 (Tự do hóa vật rắn):** Tách vật cần xét ra khỏi nền/tường/dây. Vẽ tất cả lực hoạt động (trọng lực $\vec{P}$, ngoại lực, ngẫu lực $\vec{M}$), **quy đổi tải phân bố** thành lực tập trung $Q$ tại đúng trọng tâm biểu đồ, rồi thay thế toàn bộ liên kết bằng các ẩn phản lực đúng theo Bảng 6 loại liên kết.
2. **Bước 2 (Chọn trục & Tâm mômen tối ưu):**
   - Chọn hệ trục $Oxy$ sao cho nhiều lực (nhất là các ẩn) song song hoặc vuông góc trục.
   - Chọn **tâm lấy mômen** tại bản lề cố định hoặc ngàm (nơi có từ $2$ ẩn lực trở lên đi qua) để phương trình mômen giải ra ngay $1$ ẩn duy nhất!
3. **Bước 3 (Thiết lập phương trình & Biện luận dấu):**
   - Viết 3 phương trình $\sum F_x = 0,\; \sum F_y = 0,\; \sum \bar{m}_O = 0$ (hoặc dùng hệ lực đồng quy $2$ phương trình nếu mọi lực cùng cắt nhau tại 1 điểm).
   - Giải số và kiểm tra dấu: dấu $(+)$ nghĩa là chiều thực tế trùng chiều giả thiết; dấu $(-)$ nghĩa là chiều thực tế ngược lại. **Riêng dây mềm và tựa nhẵn bắt buộc phải thu được $T \ge 0,\; N \ge 0$.**

---

### 3. 3 Ví dụ minh họa giải chi tiết 100% ra số chuẩn xác

::: tip Ví dụ 2.1 (Bài mẫu a): Quả cầu $10\text{ kg}$ kẹp giữa 2 vách nghiêng $20^\circ$ và $30^\circ$
**Đề bài:** Một quả cầu đồng chất khối lượng $m = 10\text{ kg}$ (lấy $g = 9{,}81\text{ m/s}^2$) nằm cân bằng trong máng tạo bởi hai mặt phẳng nghiêng hoàn toàn nhẵn: vách bên phải (tiếp xúc tại $A$) nghiêng góc $20^\circ$ so với phương nằm ngang, vách bên trái (tiếp xúc tại $B$) nghiêng góc $30^\circ$ so với phương thẳng đứng. Xác định các phản lực $\vec{N}_A$ và $\vec{N}_B$ của hai vách tác dụng lên quả cầu.

**Lời giải chi tiết:**
1. **Lực hoạt động & Tự do hóa quả cầu:**
   - Trọng lượng quả cầu: $P = m \cdot g = 10 \cdot 9{,}81 = 98{,}1\text{ N}$, đặt tại tâm $O$, thẳng đứng hướng xuống.
   - Tại $A$ (mặt nghiêng $20^\circ$ so với phương ngang): phản lực tựa nhẵn $\vec{N}_A$ vuông góc mặt vách $A$, hướng lên sang trái qua tâm $O$, hợp với phương thẳng đứng $+Oy$ một góc $20^\circ$.
   - Tại $B$ (mặt nghiêng $30^\circ$ so với phương đứng): phản lực tựa nhẵn $\vec{N}_B$ vuông góc mặt vách $B$, hướng xuống sang phải qua tâm $O$, hợp với phương ngang $+Ox$ một góc $30^\circ$.
   *(Ba lực $\vec{P}, \vec{N}_A, \vec{N}_B$ đồng quy tại tâm cầu $O$ nên chỉ cần $2$ phương trình hình chiếu).*

2. **Chiếu các lực lên trục $Ox$ (ngang sang phải) và $Oy$ (thẳng đứng lên):**
   - $\vec{P}$: $P_x = 0,\; P_y = -98{,}1\text{ N}$.
   - $\vec{N}_A$: $N_{Ax} = -N_A \sin 20^\circ,\; N_{Ay} = +N_A \cos 20^\circ$.
   - $\vec{N}_B$: $N_{Bx} = +N_B \cos 30^\circ,\; N_{By} = -N_B \sin 30^\circ$.

3. **Lập và giải hệ phương trình cân bằng:**
   $$\sum F_x = -N_A \sin 20^\circ + N_B \cos 30^\circ = 0 \implies N_B = N_A \frac{\sin 20^\circ}{\cos 30^\circ} \quad (1)$$
   $$\sum F_y = N_A \cos 20^\circ - N_B \sin 30^\circ - 98{,}1 = 0 \quad (2)$$
   Thế $(1)$ vào $(2)$:
   $$N_A \left(\cos 20^\circ - \frac{\sin 20^\circ \sin 30^\circ}{\cos 30^\circ}\right) = 98{,}1 \iff N_A \frac{\cos 20^\circ \cos 30^\circ - \sin 20^\circ \sin 30^\circ}{\cos 30^\circ} = 98{,}1$$
   Áp dụng công thức cộng lượng giác $\cos(20^\circ + 30^\circ) = \cos 50^\circ$:
   $$N_A = \frac{98{,}1 \cdot \cos 30^\circ}{\cos 50^\circ} = \frac{98{,}1 \cdot 0{,}866025}{0{,}642788} \approx 132{,}17\text{ N}$$
   Thay vào $(1)$:
   $$N_B = \frac{98{,}1 \cdot \sin 20^\circ}{\cos 50^\circ} = \frac{98{,}1 \cdot 0{,}342020}{0{,}642788} \approx 52{,}20\text{ N}$$

**Kết luận:** $N_A \approx 132{,}17\text{ N} > 0$, $N_B \approx 52{,}20\text{ N} > 0$ (cả hai đều dương, hợp lý với liên kết tựa nhẵn).
*(Lưu ý đối chiếu: Nếu bài toán lấy $g = 9{,}8\text{ m/s}^2 \implies P = 98\text{ N}$, khi đó $N_A \approx 132{,}04\text{ N}$ và $N_B \approx 52{,}15\text{ N}$).*
:::

::: tip Ví dụ 2.2 (Bài mẫu b): Khối hộp đặt trên 2 con lăn $A, B$
**Đề bài:** Một khối hộp đồng chất có trọng lượng $P = 1200\text{ N}$ nằm thăng bằng trên hai con lăn nhẵn đặt trên sàn ngang tại $A$ và $B$. Biết đường tác dụng của trọng lực $\vec{P}$ đi qua trọng tâm $G$ cách $A$ một đoạn $a = 0{,}5\text{ m}$ và cách $B$ một đoạn $b = 0{,}7\text{ m}$ (khoảng cách giữa hai con lăn $AB = 1{,}2\text{ m}$). Tìm phản lực pháp tuyến $N_A$ và $N_B$ tại hai con lăn.

**Lời giải chi tiết:**
1. **Giải phóng liên kết:**
   Các lực tác dụng lên khối hộp là một **hệ lực song song phẳng** gồm:
   - Trọng lực $\vec{P} = 1200\text{ N}$ đặt tại $G$, thẳng đứng hướng xuống.
   - Hai phản lực tựa nhẵn $\vec{N}_A$ tại $A$ và $\vec{N}_B$ tại $B$, vuông góc mặt sàn, thẳng đứng hướng lên.
2. **Thiết lập phương trình cân bằng (2 phương trình cho hệ lực song song 2D):**
   - Lấy mômen quanh $A$ (chiều dương ngược chiều kim đồng hồ):
     $$\sum \bar{m}_A = -P \cdot 0{,}5 + N_B \cdot 1{,}2 = 0 \implies N_B = \frac{0{,}5}{1{,}2} P = \frac{5}{12}(1200) = 500\text{ N}$$
   - Lấy mômen quanh $B$:
     $$\sum \bar{m}_B = -N_A \cdot 1{,}2 + P \cdot 0{,}7 = 0 \implies N_A = \frac{0{,}7}{1{,}2} P = \frac{7}{12}(1200) = 700\text{ N}$$
3. **Kiểm tra chéo bằng phương trình chiếu $\sum F_y = 0$:**
   $$N_A + N_B - P = 700 + 500 - 1200 = 0 \quad (\text{Chính xác } 100\%)$$

**Kết luận:** $N_A = 700\text{ N}$ và $N_B = 500\text{ N}$. Nhận xét: con lăn nào gần trọng tâm $G$ hơn thì gánh phản lực lớn hơn ($N_A > N_B$).
:::

::: tip Ví dụ 2.3 (Bài mẫu c): Dầm ngàm phẳng chịu lực xiên + tải phân bố + ngẫu lực
**Đề bài:** Thanh dầm công-xôn nằm ngang $AB$ dài $L = 1{,}0\text{ m}$, có điểm giữa $C$ ($AC = CB = 0{,}5\text{ m}$), được ngàm chặt vào tường thẳng đứng tại đầu $A$. Dầm chịu đồng thời các tải trọng sau:
- Tải trọng phân bố đều cường độ $q = 40\text{ N/m}$ hướng thẳng đứng xuống trên toàn chiều dài dầm $AB$.
- Lực tập trung $F_2 = 50\text{ N}$ thẳng đứng hướng xuống đặt tại trung điểm $C$.
- Một ngẫu lực tập trung có mômen $M = 200\text{ N}\cdot\text{m}$ quay **ngược chiều kim đồng hồ**.
- Lực xiên $F_1 = 100\text{ N}$ đặt tại đầu mút tự do $B$, hướng lên phía trên bên phải, hợp với trục ngang $AB$ một góc $30^\circ$.

Tìm các phản lực liên kết tại ngàm $A$.

**Lời giải chi tiết:**
1. **Quy đổi tải trọng phân bố đều:**
   $$Q = q \cdot L = 40 \cdot 1{,}0 = 40\text{ N}$$
   Lực $Q = 40\text{ N}$ hướng thẳng đứng xuống dưới, đặt tại trung điểm của $AB$ (tức trùng với điểm $C$, cách ngàm $A$ một đoạn $0{,}5\text{ m}$).
2. **Giải phóng liên kết ngàm phẳng tại $A$:**
   Thay ngàm $A$ bằng $3$ ẩn: thành phần lực ngang $A_x$ (giả thiết sang phải), thành phần lực đứng $A_y$ (giả thiết hướng lên), và ngẫu lực phản lực ngàm $M_A$ (giả thiết quay ngược chiều kim đồng hồ).
3. **Lập hệ 3 phương trình cân bằng phẳng (chọn $Ax$ ngang sang phải, $Ay$ thẳng đứng lên):**
   - Chiếu lên phương ngang $Ox$:
     $$\sum F_x = A_x + F_1 \cos 30^\circ = 0 \implies A_x = -100 \cdot \frac{\sqrt{3}}{2} = -50\sqrt{3} \approx -86{,}60\text{ N}$$
   - Chiếu lên phương đứng $Oy$:
     $$\sum F_y = A_y - Q - F_2 + F_1 \sin 30^\circ = 0$$
     $$\implies A_y = 40 + 50 - 100 \cdot 0{,}5 = 40\text{ N}$$
   - Lấy mômen đối với ngàm $A$ (quy ước ngược chiều KĐH là dương):
     $$\sum \bar{m}_A = M_A + M - Q \cdot 0{,}5 - F_2 \cdot 0{,}5 + (F_1 \sin 30^\circ) \cdot 1{,}0 = 0$$
     Thay số:
     $$M_A + 200 - 40 \cdot 0{,}5 - 50 \cdot 0{,}5 + 50 \cdot 1{,}0 = 0$$
     $$M_A + 200 - 20 - 25 + 50 = 0 \implies M_A + 205 = 0 \implies M_A = -205\text{ N}\cdot\text{m}$$

**Kết luận:**
- $A_x = -50\sqrt{3} \approx -86{,}60\text{ N}$ (chiều thực tế hướng **sang trái**, độ lớn $86{,}60\text{ N}$).
- $A_y = +40\text{ N}$ (chiều thực tế hướng **lên trên**).
- $M_A = -205\text{ N}\cdot\text{m}$ (ngẫu phản lực ngàm thực tế quay **thuận chiều kim đồng hồ** với độ lớn $205\text{ N}\cdot\text{m}$).

*(Ghi chú đối chiếu bài vở ghi: Khi không có tải phân bố đều $q = 0$, ta được $A_x = -50\sqrt{3}\text{ N}$, $A_y = 0\text{ N}$, $M_A = -225\text{ N}\cdot\text{m}$).*
:::

---

### 4. Bẫy hay sai & Bài tập tự luyện

::: warning 4 Bẫy hay sai kinh điển của Ngày 2
1. **Nhân thêm cánh tay đòn vào ngẫu lực $M$:** Ngẫu lực $M = 200\text{ N}\cdot\text{m}$ đã có thứ nguyên $[\text{N}\cdot\text{m}]$, khi viết $\sum \bar{m}_A = 0$ thì **cộng/trừ trực tiếp $\pm M$**, tuyệt đối **không nhân thêm khoảng cách $x$**!
2. **Đặt sai trọng tâm tải tam giác vuông:** Nhớ quy tắc **"đỉnh $2/3$, đáy $1/3$"** — điểm đặt $Q = \frac{1}{2} q_{\max} l$ cách **đầu cao ($q_{\max}$)** đoạn $\frac{1}{3}l$, không phải cách đầu nhọn đoạn $\frac{1}{3}l$.
3. **Quên điều kiện $T \ge 0$ và $N \ge 0$:** Nếu dây mềm giải ra $T < 0$ tức dây bị chùng (không đẩy được!), còn tựa nhẵn ra $N < 0$ tức vật bị nhấc tách khỏi mặt tựa.
4. **Sót phản lực $M_A$ của ngàm phẳng hoặc thêm nhầm mômen vào bản lề cố định:** Bản lề cố định cho phép quay nên **không** có mômen phản lực ($M = 0$); chỉ có **ngàm** mới có $M_A$.
:::

::: info Bài tập tự luyện Ngày 2 (Có đáp số)
1. **Bài 2.1 (Dầm ngàm chịu tải tam giác):** Dầm công-xôn $AB$ dài $3\text{ m}$ ngàm phẳng tại $A$. Dầm chịu tải phân bố tam giác vuông trên suốt chiều dài $AB$ với cường độ $0$ tại $A$ và tăng tuyến tính tới $q_{\max} = 6\text{ kN/m}$ tại $B$; đồng thời đầu $B$ treo thêm lực thẳng đứng hướng xuống $P = 5\text{ kN}$. Tìm $A_x, A_y, M_A$.
   - *Đáp số:* $A_x = 0$; $A_y = 14\text{ kN}$ (hướng lên); $M_A = 33\text{ kN}\cdot\text{m}$ (ngược chiều KĐH).
2. **Bài 2.2 (Dầm gối cố định – di động):** Dầm nằm ngang $AB$ dài $4\text{ m}$ đặt trên gối cố định tại $A$ và gối con lăn ngang tại $B$. Trên nửa trái $AC$ ($AC = 2\text{ m}$) chịu tải phân bố đều $q = 4\text{ kN/m}$ hướng xuống. Tại điểm $D$ cách $A$ một đoạn $3\text{ m}$ có lực xiên $F = 10\text{ kN}$ hướng **xuống dưới sang phải**, hợp với dầm góc $60^\circ$. Tìm phản lực tại $A$ và $B$.
   - *Đáp số:* $A_x = -5\text{ kN}$; $B_y = \frac{8 + 15\sqrt{3}}{4} \approx 8{,}495\text{ kN}$; $A_y = 8 + 5\sqrt{3} - B_y \approx 8{,}165\text{ kN}$.
3. **Bài 2.3 (Quả cầu treo dây tựa tường nhẵn):** Quả cầu đồng chất khối lượng $m = 15\text{ kg}$ ($g = 9{,}81\text{ m/s}^2$) tựa vào tường thẳng đứng nhẵn và được giữ cân bằng bởi một sợi dây nhẹ gắn vào điểm cao trên tường sao cho dây hợp với phương thẳng đứng một góc $30^\circ$ (đường kéo dài của dây đi qua tâm cầu). Tìm sức căng dây $T$ và phản lực tường $N$.
   - *Đáp số:* $P = 147{,}15\text{ N}$; $T = \frac{P}{\cos 30^\circ} \approx 169{,}91\text{ N}$; $N = P\tan 30^\circ \approx 84{,}96\text{ N}$.
:::

---

## Ngày 3 (`13 → 20 điểm`): Thu Gọn Hệ Lực, 2 Bất Biến, 4 Dạng Chuẩn & Phương Trình Cân Bằng Phẳng

### 1. Mục tiêu điểm số & Kiến thức cốt lõi cô đọng

- **Mục tiêu:** Ghi thêm `+7` điểm (tích lũy `20/100`), trả lời tuyệt đối chính xác mọi câu hỏi thi về **4 Dạng chuẩn của hệ lực** và **2 Bất biến**, thực hành thu gọn chuẩn xác hệ lực phẳng có tọa độ về các tâm khác nhau kèm vẽ **Visualise**, và tránh bẫy suy biến của 3 dạng phương trình cân bằng phẳng.
- **Đọc sâu lý thuyết & bài tập gốc:** [Chương 2: Hệ Lực Không Gian](/tinh-hoc/chuong-2) | [Bài Tập Tĩnh Học – Chương 1](/bai-tap/tinh-hoc/chuong-1).

#### a) Định lý Poinsot về thu gọn hệ lực không gian về tâm O
Mọi hệ lực và ngẫu lực bất kỳ $(\vec{F}_k, \vec{M}_i)$ tác dụng lên vật rắn khi thu gọn về một tâm $O$ tùy ý đều tương đương với một hệ gồm **1 lực $\vec{R}'$ đặt tại $O$** và **1 ngẫu lực $\vec{M}_O$**:
$$\vec{R}' = \sum_{k=1}^n \vec{F}_k, \qquad \vec{M}_O = \sum_{i} \vec{M}_i + \sum_{k=1}^n \vec{M}_O(\vec{F}_k) = \sum_{i} \vec{M}_i + \sum_{k=1}^n (\vec{r}_k \times \vec{F}_k)$$

- **Cảnh báo khái niệm:** Véctơ chính $\vec{R}'$ **KHÔNG PHẢI** lúc nào cũng là hợp lực $\vec{R}$! ($\vec{R}'$ luôn tồn tại với mọi hệ lực, còn hợp lực $\vec{R}$ chỉ tồn tại khi hệ lực tối giản được về đúng 1 lực duy nhất).
- **Công thức dời tâm thu gọn từ $O$ sang $O'$:**
  $$\vec{M}_{O'} = \vec{M}_O + \overrightarrow{O'O} \times \vec{R}'$$
  Trong mặt phẳng $Oxy$ (với $O(0;\,0)$ và $O'(x_0;\,y_0)$, nên $\overrightarrow{O'O} = (-x_0;\, -y_0;\, 0)$):
  $$M_{O'z} = M_{Oz} + (-x_0) R'_y - (-y_0) R'_x = M_{Oz} - x_0 R'_y + y_0 R'_x$$

#### b) 2 Bất biến của hệ lực
1. **Bất biến thứ nhất:** Véctơ chính $\vec{R}'$ là bất biến (không phụ thuộc vị trí tâm thu gọn $O$).
2. **Bất biến thứ hai:** Tích vô hướng $\vec{R}' \cdot \vec{M}_O$ là đại lượng không đổi với mọi tâm thu gọn $O \in \mathbb{R}^3$:
   $$\vec{R}' \cdot \vec{M}_{O'} = \vec{R}' \cdot \vec{M}_O = \text{const}$$
   Ý nghĩa: Hình chiếu vuông góc của $\vec{M}_O$ lên phương của $\vec{R}'$ (khi $\vec{R}' \neq \vec{0}$) có độ lớn không đổi và chính bằng mômen cực tiểu dọc trục trung tâm:
   $$M_{\min} = \frac{\lvert \vec{R}' \cdot \vec{M}_O \rvert}{\lvert \vec{R}' \rvert}$$

#### c) 4 Dạng chuẩn của hệ lực (Trọng tâm đề thi!)

| Dạng chuẩn | Điều kiện nhận biết | Bản chất tối giản | Có hợp lực không? |
| :---: | :--- | :--- | :--- |
| **Dạng 1** | $\vec{R}' = \vec{0}$ và $\vec{M}_O = \vec{0}$ | Hệ lực **cân bằng** ($\sim 0$). | Không cần (bằng $0$). |
| **Dạng 2** | $\vec{R}' = \vec{0}$ và $\vec{M}_O \neq \vec{0}$ | Tương đương **1 ngẫu lực** ($\vec{M}_O = \text{const}$ tại mọi $O$). | **KHÔNG BAO GIỜ có hợp lực!** |
| **Dạng 3** | $\vec{R}' \neq \vec{0}$ và $\vec{R}' \cdot \vec{M}_O = 0$ (gồm cả $\vec{M}_O = \vec{0}$ và $\vec{R}' \perp \vec{M}_O$) | Tương đương **1 hợp lực duy nhất** $\vec{R} = \vec{R}'$ (cách $O$ khoảng $d = \frac{M_O}{R'}$). | **LUÔN CÓ hợp lực!** Thỏa **Định lý Varignon**. |
| **Dạng 4** | $\vec{R}' \neq \vec{0}$ và $\vec{R}' \cdot \vec{M}_O \neq 0$ | **Đinh ốc (Xoắn động Poinsot)**: gồm lực $\vec{R}'$ và ngẫu $\vec{M}_{\min} \parallel \vec{R}'$ trên trục trung tâm. | **KHÔNG BAO GIỜ có hợp lực!** |

::: tip Câu chốt đề thi về 4 Dạng chuẩn & Hệ lực phẳng
- Trong đề thi lý thuyết hoặc trắc nghiệm: **Dạng 2 (Ngẫu lực)** và **Dạng 4 (Đinh ốc)** **KHÔNG BAO GIỜ có hợp lực**. Chỉ duy nhất **Dạng 3** là **luôn có hợp lực**, khi đó áp dụng **Định lý Varignon**: $\vec{M}_O(\vec{R}) = \sum \vec{M}_O(\vec{F}_k)$.
- **Đặc biệt đối với Hệ lực phẳng nằm trong $Oxy$:** Vì $\vec{R}' = R'_x\vec{i} + R'_y\vec{j}$ nằm trong mặt phẳng $Oxy$ còn $\vec{M}_O = M_{Oz}\vec{k}$ vuông góc mặt phẳng $Oxy$, nên luôn có $\vec{R}' \perp \vec{M}_O \implies \vec{R}' \cdot \vec{M}_O = 0$. Do đó hệ lực phẳng bất kỳ với $\vec{R}' \neq \vec{0}$ **luôn thuộc Dạng 3 (luôn có hợp lực)**!
:::

#### d) 3 Dạng phương trình cân bằng phẳng & Điều kiện hình học tránh suy biến
Hệ lực phẳng có tối đa $3$ phương trình độc lập, viết được dưới $3$ dạng tương đương:
1. **Dạng 1 (2 chiếu, 1 mômen):** $\sum F_x = 0,\; \sum F_y = 0,\; \sum \bar{m}_A = 0$ *(Điều kiện: hai trục $Ox, Oy$ không song song).*
2. **Dạng 2 (1 chiếu, 2 mômen):** $\sum F_x = 0,\; \sum \bar{m}_A = 0,\; \sum \bar{m}_B = 0$ *(Điều kiện bắt buộc: **trục chiếu $Ox$ KHÔNG ĐƯỢC VUÔNG GÓC với đường thẳng $AB$**).*
3. **Dạng 3 (3 mômen):** $\sum \bar{m}_A = 0,\; \sum \bar{m}_B = 0,\; \sum \bar{m}_C = 0$ *(Điều kiện bắt buộc: **3 điểm $A, B, C$ KHÔNG THẲNG HÀNG**, tức lập thành một tam giác).*

*(Mẹo nhớ: **Định lý 3 lực** chỉ là định lý 1 chiều — nếu vật cân bằng dưới tác dụng của đúng 3 lực không song song thì 3 lực đó phải **đồng phẳng và đồng quy** tại một điểm).*

---

### 2. Thuật toán thu gọn hệ lực phẳng có tọa độ & Vẽ Visualise

1. **Bước 1:** Viết tọa độ các điểm đặt $A_k(x_k; y_k; 0)$ và biểu diễn từng lực dưới dạng tọa độ $\vec{F}_k = (F_{kx}; F_{ky}; 0)$.
2. **Bước 2:** Cộng vế theo vế để tìm véctơ chính $\vec{R}' = (R'_x; R'_y; 0)$, độ lớn $R' = \sqrt{{R'_x}^2 + {R'_y}^2}$ và góc $\alpha$ hợp bởi $\vec{R}'$ với $+Ox$.
3. **Bước 3:** Tính mômen chính đối với gốc $O$: $M_{Oz} = \sum (x_k F_{ky} - y_k F_{kx}) + \sum \bar{M}_i$.
4. **Bước 4:** Khi đề yêu cầu thu gọn tiếp về điểm $A(x_A; y_A)$, dùng ngay công thức dời tâm $\vec{M}_A = \vec{M}_O + \overrightarrow{AO} \times \vec{R}'$ (và có thể tính lại trực tiếp $\sum \overrightarrow{AA_k} \times \vec{F}_k$ để kiểm tra chéo!).
5. **Bước 5 (Vẽ Visualise):** Vẽ riêng 2 hệ trục $Oxy$ sạch sẽ đặt cạnh nhau:
   - Hình tại $O$: đặt gốc vectơ $\vec{R}'$ tại đúng gốc $O$ (vẽ đúng góc $\alpha$ so với $+Ox$) và vẽ thêm **mũi tên cong** quanh $O$ biểu diễn ngẫu lực $M_O$ (dương ngược KĐH, âm thuận KĐH).
   - Hình tại $A$: vẽ vectơ $\vec{R}'$ y hệt như trên nhưng dời gốc đặt tại điểm $A(x_A; y_A)$ kèm mũi tên cong biểu diễn ngẫu lực $M_A$ quanh $A$.

---

### 3. Ví dụ minh họa giải chi tiết 100% + Hướng dẫn vẽ Visualise

::: tip Ví dụ 3.1: Thu gọn hệ 3 lực tại $A(2;0),\; B(0;1{,}5),\; C(4;1)$ về $O$ và $A$ (Chuẩn vở ghi Ảnh 31)
**Đề bài:** Trong mặt phẳng $Oxy$ (đơn vị mét), xét hệ gồm 3 lực tác dụng lên một tấm phẳng:
- $\vec{F}_A$ đặt tại $A(2;\, 0)$, có độ lớn $200\text{ N}$, phương thẳng đứng hướng xuống dưới (góc $-90^\circ$).
- $\vec{F}_B$ đặt tại $B(0;\, 1{,}5)$, có độ lớn $300\text{ N}$, hướng lên sang phải hợp với $+Ox$ góc $30^\circ$.
- $\vec{F}_C$ đặt tại $C(4;\, 1)$, có độ lớn $250\text{ N}$, hướng lên sang trái hợp với $+Ox$ góc $150^\circ$ (tức hợp với $-Ox$ góc $30^\circ$).

Yêu cầu:
1. Thu gọn hệ lực trên về gốc tọa độ $O(0;\, 0)$.
2. Thu gọn hệ lực trên về điểm $A(2;\, 0)$ (kiểm tra chéo bằng 2 cách).
3. Tìm phương trình đường tác dụng và khoảng cách từ $O$ đến hợp lực $\vec{R}$, kèm hướng dẫn vẽ **Visualise** kết quả.

**Lời giải chi tiết:**

**1. Biểu diễn tọa độ các vectơ lực:**
- $\vec{F}_A = (0;\; -200;\; 0)\text{ N}$
- $\vec{F}_B = (300\cos 30^\circ;\; 300\sin 30^\circ;\; 0) = (150\sqrt{3};\; 150;\; 0) \approx (259{,}81;\; 150;\; 0)\text{ N}$
- $\vec{F}_C = (250\cos 150^\circ;\; 250\sin 150^\circ;\; 0) = (-125\sqrt{3};\; 125;\; 0) \approx (-216{,}51;\; 125;\; 0)\text{ N}$

**2. Thu gọn về gốc tọa độ $O(0;\, 0)$:**
- **Véctơ chính $\vec{R}'$:**
  $$\vec{R}' = \vec{F}_A + \vec{F}_B + \vec{F}_C = (0 + 150\sqrt{3} - 125\sqrt{3};\; -200 + 150 + 125;\; 0) = (25\sqrt{3};\; 75;\; 0)\text{ N}$$
  - Giá trị xấp xỉ: $\vec{R}' \approx (43{,}30;\; 75{,}00;\; 0)\text{ N}$.
  - Độ lớn: $R' = \sqrt{(25\sqrt{3})^2 + 75^2} = \sqrt{1875 + 5625} = \sqrt{7500} = 50\sqrt{3} \approx 86{,}60\text{ N}$.
  - Góc hợp với trục $+Ox$: $\tan\alpha = \frac{R'_y}{R'_x} = \frac{75}{25\sqrt{3}} = \sqrt{3} \implies \alpha = 60^\circ$.
- **Mômen chính đối với gốc $O$:** Áp dụng $M_{Oz}(\vec{F}_k) = x_k F_{ky} - y_k F_{kx}$:
  - $M_{Oz}(\vec{F}_A) = 2\cdot(-200) - 0\cdot 0 = -400\text{ N}\cdot\text{m}$.
  - $M_{Oz}(\vec{F}_B) = 0\cdot 150 - 1{,}5\cdot(150\sqrt{3}) = -225\sqrt{3}\text{ N}\cdot\text{m}$.
  - $M_{Oz}(\vec{F}_C) = 4\cdot 125 - 1\cdot(-125\sqrt{3}) = 500 + 125\sqrt{3}\text{ N}\cdot\text{m}$.
  Cộng lại:
  $$\sum M_{Oz} = -400 - 225\sqrt{3} + 500 + 125\sqrt{3} = 100 - 100\sqrt{3} \approx -73{,}21\text{ N}\cdot\text{m}$$
  $$\implies \vec{M}_O = (0;\; 0;\; 100 - 100\sqrt{3}) \approx (0;\; 0;\; -73{,}21)\text{ N}\cdot\text{m}$$
  (Dấu âm chỉ mômen quay **thuận chiều kim đồng hồ** với độ lớn $73{,}21\text{ N}\cdot\text{m}$).

**3. Thu gọn về điểm $A(2;\, 0)$:**
- *Cách A (Tính trực tiếp tại $A$):* Lập bán kính vectơ $\vec{r}_{AA} = (0;0;0)$, $\vec{r}_{AB} = (-2;1{,}5;0)$, $\vec{r}_{AC} = (2;1;0)$:
  - $M_{Az}(\vec{F}_A) = 0$.
  - $M_{Az}(\vec{F}_B) = (-2)(150) - 1{,}5(150\sqrt{3}) = -300 - 225\sqrt{3}\text{ N}\cdot\text{m}$.
  - $M_{Az}(\vec{F}_C) = 2(125) - 1(-125\sqrt{3}) = 250 + 125\sqrt{3}\text{ N}\cdot\text{m}$.
  $$\implies \sum M_{Az} = -50 - 100\sqrt{3} \approx -223{,}21\text{ N}\cdot\text{m}$$
  $$\implies \vec{M}_A = (0;\; 0;\; -50 - 100\sqrt{3}) \approx (0;\; 0;\; -223{,}21)\text{ N}\cdot\text{m}$$
- *Cách B (Kiểm tra chéo bằng công thức dời tâm Poinsot):* Với $\overrightarrow{AO} = (-2;\; 0;\; 0)$:
  $$M_{Az} = M_{Oz} + (\overrightarrow{AO} \times \vec{R}')_z = (100 - 100\sqrt{3}) + \big[(-2)\cdot 75 - 0\cdot 25\sqrt{3}\big] = (100 - 100\sqrt{3}) - 150 = -50 - 100\sqrt{3}\text{ N}\cdot\text{m}$$
  Hai cách khớp tuyệt đối đến từng chữ số!

**4. Đường tác dụng hợp lực $\vec{R}$ & Hướng dẫn vẽ Visualise:**
- Vì $\vec{R}' \cdot \vec{M}_O = 0$ và $\vec{R}' \neq \vec{0}$ (Dạng chuẩn 3), hệ lực có **hợp lực duy nhất $\vec{R} = \vec{R}' = 50\sqrt{3}\text{ N}$** nghiêng $60^\circ$ so với $+Ox$.
- Khoảng cách từ $O$ tới giá hợp lực $\vec{R}$: $d = \frac{\lvert M_{Oz}\rvert}{R'} = \frac{100\sqrt{3} - 100}{50\sqrt{3}} = 2 - \frac{2\sqrt{3}}{3} \approx 0{,}845\text{ m}$.
- Theo Định lý Varignon, phương trình đường tác dụng của $\vec{R}$ là $x R'_y - y R'_x = M_{Oz} \iff 75x - 25\sqrt{3}y = 100 - 100\sqrt{3}$ (đi qua điểm $(-0{,}976;\, 0)$ bên trái gốc $O$ để tạo mômen âm quanh $O$!).

**Hướng dẫn vẽ Visualise chuẩn ghi điểm tối đa trên giấy thi:**
```text
   (1) HỆ BAN ĐẦU                  (2) THU GỌN VỀ O               (3) THU GỌN VỀ A(2;0)
   y                               y                              y
   ^   FB (30°)   FC (150°)        ^     / R' = 86,6 N (60°)      ^           / R' = 86,6 N (60°)
   |  /         \                  |    /                         |          /
 B +             + C(4;1)          |   /                          |         /
   |                               |  /  (mũi tên cong KĐH)       |        /  (mũi tên cong KĐH)
---+-------+----------> x      ----+--------------------> x   ----+-------+----------> x
   O      A(2;0)                   O  Mo = -73,21 N.m             O      A  MA = -223,21 N.m
          |
          v FA = 200 N
```
- **Lưu ý khi vẽ tay:** Cả hình (2) và hình (3) đều vẽ véctơ $\vec{R}'$ nghiêng đúng góc $60^\circ$ ở góc phần tư I (chỉ dời điểm đặt từ $O$ sang $A$); cả $M_O$ và $M_A$ đều mang dấu $(-)$ nên **mũi tên cong đều phải quay thuận chiều kim đồng hồ** (vòng $M_A$ ghi trị số $223{,}21\text{ N}\cdot\text{m}$ lớn hơn vòng $M_O$ ghi $73{,}21\text{ N}\cdot\text{m}$).
:::

---

### 4. Bẫy hay sai & Bài tập tự luyện

::: warning 3 Bẫy hay sai kinh điển của Ngày 3
1. **Nhầm $\vec{R}' = \vec{0}$ là hệ cân bằng:** Sai chết người! Khi $\vec{R}' = \vec{0}$ mà $\vec{M}_O \neq \vec{0}$, đó là **Dạng chuẩn 2 (ngẫu lực)** — vật vẫn quay tại chỗ và **không có hợp lực**!
2. **Dùng hệ phương trình cân bằng bị suy biến hình học:**
   - Viết $\sum F_y = 0,\; \sum \bar{m}_A = 0,\; \sum \bar{m}_B = 0$ cho dầm nằm ngang $AB$ trên trục $Ox$: vì $Oy \perp AB$ (vi phạm điều kiện Dạng 2), phương trình $\sum F_y$ và $\sum \bar{m}_A, \sum \bar{m}_B$ không khống chế được lực dọc trục $AB$!
   - Chọn $3$ điểm $A, B, C$ cùng nằm trên một thanh thẳng của dầm để viết Dạng 3: hệ 3 phương trình sẽ phụ thuộc tuyến tính (giải ra $0=0$)!
3. **Ngược dấu vectơ $\overrightarrow{O'O}$ khi dời tâm:** Trong công thức $\vec{M}_{O'} = \vec{M}_O + \overrightarrow{O'O} \times \vec{R}'$, vectơ nối hướng **từ tâm mới $O'$ về tâm cũ $O$**, tức tọa độ $O - O'$!
:::

::: info Bài tập tự luyện Ngày 3 (Có đáp số)
1. **Bài 3.1 (Phân loại 4 Dạng chuẩn trong 3D):** Thu gọn một hệ lực không gian về tâm $O$ thu được $\vec{R}' = (3;\; -4;\; 0)\text{ N}$ và $\vec{M}_O = (8;\; 6;\; 10)\text{ N}\cdot\text{m}$. Tính Bất biến II, xác định dạng chuẩn của hệ lực và khoảng cách $d$ từ $O$ đến đường tác dụng hợp lực (nếu có).
   - *Đáp số:* $\vec{R}' \cdot \vec{M}_O = 3(8) + (-4)(6) + 0(10) = 0$; vì $\vec{R}' \neq \vec{0}$ nên hệ thuộc **Dạng chuẩn 3 (có hợp lực duy nhất)** với $R = 5\text{ N}$, $M_O = \sqrt{200} = 10\sqrt{2}\text{ N}\cdot\text{m}$, $d = \frac{10\sqrt{2}}{5} = 2\sqrt{2} \approx 2{,}83\text{ m}$.
2. **Bài 3.2 (Thu gọn hệ lực phẳng):** Hệ lực trong $Oxy$ gồm $\vec{F}_1 = (40;\; 0)\text{ N}$ tại $A(0;\; 3)\text{ m}$, $\vec{F}_2 = (0;\; -30)\text{ N}$ tại $B(4;\; 0)\text{ m}$ và một ngẫu lực $M = +50\text{ N}\cdot\text{m}$ (ngược chiều KĐH). Thu gọn hệ về $O(0;\;0)$ và về $B(4;\;0)$.
   - *Đáp số:* $\vec{R}' = (40;\; -30)\text{ N}$ ($R' = 50\text{ N}$); $M_O = -190\text{ N}\cdot\text{m}$; $M_B = -70\text{ N}\cdot\text{m}$.
3. **Bài 3.3 (Bẫy điều kiện hình học):** Một thanh cứng $AB$ đặt dọc trục $Ox$ với $A(0;0)$ và $B(5;0)$. Để tìm $3$ ẩn phản lực trên thanh, bạn An viết 3 phương trình $\sum F_y = 0,\; \sum \bar{m}_A = 0,\; \sum \bar{m}_B = 0$. Hệ này có giải được cả $3$ ẩn không? Vì sao?
   - *Đáp số:* **Không giải được** (hệ suy biến) vì trục chiếu $Oy$ vuông góc với đoạn $AB$ (vi phạm điều kiện Dạng 2), mọi lực nằm dọc trục $Ox$ đều không xuất hiện trong cả 3 phương trình.
:::

---

## Ngày 4 (`20 → 27 điểm`): Quy Trình 5 Bước, Hệ Nhiều Vật & Hệ Giàn Phẳng

### 1. Mục tiêu điểm số & Kiến thức cốt lõi cô đọng

- **Mục tiêu:** Ghi thêm `+7` điểm (tích lũy `27/100`), xử lý thành thạo hệ ghép nhiều vật qua khớp bản lề nội, kiểm tra chuẩn bậc tự do của giàn phẳng ($\text{Dof} = 0$), tính nhanh toàn bộ ứng lực thanh giàn bằng **Phương pháp tách nút** và **Phương pháp mặt cắt Ritter**.
- **Đọc sâu lý thuyết & bài tập gốc:** [Chương 2: Hệ Lực Không Gian & Hệ Vật](/tinh-hoc/chuong-2) | [Bài Tập Tĩnh Học – Chương 2](/bai-tap/tinh-hoc/chuong-2).

#### a) Quy trình 5 bước chuẩn giải mọi bài toán Tĩnh học (Từ vở ghi)
1. **Bước 1:** Chọn đối tượng khảo sát trong hệ có liên quan đến ẩn số cần tìm (hoặc hóa rắn cả hệ nếu số ẩn ngoài $\le 3$).
2. **Bước 2:** Tự do hóa đối tượng đã chọn và thay thế liên kết bằng các phản lực liên kết (PLLK) tương ứng.
3. **Bước 3:** Viết các phương trình cân bằng tĩnh học (số phương trình tùy loại hệ lực: đồng quy phẳng $2$, song song phẳng $2$, phẳng bất kỳ $3$, không gian $6$).
4. **Bước 4:** Nếu $(\text{số phương trình} < \text{số ẩn cần tìm})$, chọn thêm đối tượng mới trong hệ để khảo sát và lặp lại Bước 2, Bước 3. Dừng lại khi $(\text{số ẩn} = \text{số phương trình độc lập})$.
5. **Bước 5:** Giải hệ phương trình, biện luận dấu ($+$/$-$, kéo/nén) và kiểm tra thứ nguyên.

#### b) Hệ nhiều vật: Hóa rắn toàn hệ vs Tách vật tại khớp bản lề nội
- **Phương pháp Hóa rắn toàn hệ:** Xem cả hệ nhiều thanh/dầm như một vật rắn duy nhất. Theo Tiên đề 4, các cặp nội lực tại khớp bản lề nội hay dây nối bên trong tự triệt tiêu từng đôi một $\implies$ thiết lập phương trình chỉ chứa ngoại lực để tìm trước các phản lực gối tựa bên ngoài.
- **Phương pháp Tách vật tại khớp bản lề nội $B$:**
  - Nếu tách vật $1$ và vật $2$ tại khớp $B$: trên vật $1$ đặt $(B_x, B_y)$, thì trên vật $2$ **bắt buộc** đặt cặp lực trực đối $(B'_x, B'_y)$ sao cho:
    $$B_x = -B'_x, \qquad B_y = -B'_y$$
    *(Mẹo thực hành: Vẽ mũi tên $B_x, B_y$ trên vật $2$ **ngược hướng** hẳn so với trên vật $1$ để khi giải không cần đặt dấu phẩy và giữ nguyên tên ẩn $B_x, B_y$ trong phương trình của cả 2 vật!).*
  - Mẹo chọn vật tách trước: luôn tách **vật/nhịp phụ** có $\le 3$ ẩn số trước (ví dụ đoạn dầm đặt trên gối con lăn + khớp nội $B$), giải xong mới truyền phản lực khớp $B$ sang vật/nhịp chính!

#### c) Hệ Giàn phẳng: Bậc tự do (Dof = 0), Tách nút & Mặt cắt Ritter
- **Giàn phẳng lý tưởng:** Hệ kết cấu gồm các thanh thẳng nối với nhau tại các **nút** bằng khớp bản lề trơn; ngoại lực chỉ đặt tại **các nút**, bỏ qua trọng lượng thanh $\implies$ mọi thanh giàn đều là **thanh 2 lực**, chỉ chịu **kéo** hoặc **nén** dọc theo trục thanh!
- **Kiểm tra điều kiện tĩnh định (Bậc tự do $\text{Dof} = 0$):**
  Coi mỗi thanh là $1$ vật rắn phẳng ($n$ thanh $\rightarrow 3n$ bậc tự do), trừ đi $2k_{\text{đơn}}$ bậc do các khớp đơn nội và $R_{\text{ngoài}}$ bậc do các gối tựa ngoài:
  $$\text{Dof} = 3n - 2k_{\text{đơn}} - R_{\text{ngoài}} = 0$$
  *(Lưu ý cực quan trọng: Tại một nút có $m$ thanh gặp nhau, nút đó đóng vai trò là **khớp bội**, tương đương với $k_{\text{nút}} = m - 1$ khớp đơn! Tổng $k_{\text{đơn}} = \sum (m_j - 1)$).*
  *(Công thức kiểm tra nhanh theo số nút $j$ và số thanh $m$: $\text{Dof} = 2j - m - R_{\text{ngoài}} = 0$).*

- **Quy ước dấu chuẩn cho ứng lực thanh giàn ($S_{AB}$):**
  Luôn giả thiết mọi thanh **chịu KÉO** (mũi tên ứng lực $S$ hướng **ra khỏi nút** hoặc **ra khỏi mặt cắt**).
  - Giải ra $S > 0 \implies$ Thanh chịu **Kéo**.
  - Giải ra $S < 0 \implies$ Thanh chịu **Nén**.

- **So sánh 2 phương pháp giải giàn phẳng:**
  - **Phương pháp Tách nút:** Tách từng nút, viết $2$ phương trình cân bằng hệ lực đồng quy ($\sum F_x = 0, \sum F_y = 0$). Dùng khi cần tìm lực trong **tất cả các thanh**, xuất phát từ nút chỉ có **tối đa 2 thanh chưa biết**.
  - **Phương pháp Mặt cắt Ritter:** Dùng khi đề **chỉ hỏi ứng lực ở 1–3 thanh bất kỳ ở giữa giàn**. Cắt tưởng tượng giàn làm $2$ nửa bởi mặt cắt đi qua **tối đa 3 thanh** (trong đó có thanh cần tìm), tách $1$ nửa dễ tính hơn rồi **chọn tâm lấy mômen là giao điểm của 2 thanh cắt còn lại** để triệt tiêu ngay 2 ẩn thừa và giải 1 phương trình duy nhất ra kết quả!

---

### 2. Thuật toán giải bài toán Giàn phẳng (5 bước)

1. **Bước 1:** Kiểm tra $\text{Dof} = 3n - 2k_{\text{đơn}} - R_{\text{ngoài}} = 0$ để khẳng định giàn tĩnh định, luôn cân bằng.
2. **Bước 2 (Hóa rắn toàn giàn):** Bỏ qua mọi nội lực thanh, viết 3 phương trình cân bằng toàn giàn để giải các phản lực gối tựa bên ngoài ($A_x, A_y, B_y$).
3. **Bước 3:** Chọn phương pháp:
   - Nếu cần tính toàn bộ thanh $\rightarrow$ **Tách nút** (chọn nút có $\le 2$ ẩn thanh chưa biết).
   - Nếu chỉ tìm $1$ thanh (như $S_{DE}$) $\rightarrow$ **Mặt cắt Ritter** (cắt qua tối đa $3$ thanh gồm $DE$ và $2$ thanh cắt tại một nút $C$).
4. **Bước 4:** Luôn vẽ chiều giả thiết các ứng lực thanh **hướng ra khỏi nút/mặt cắt** (giả thiết kéo).
5. **Bước 5:** Giải hệ phương trình (hoặc $\sum \bar{m}_C = 0$ trong Ritter) và kết luận Kéo ($+$) hay Nén ($-$).

---

### 3. 2 Ví dụ minh họa giải chi tiết 100% ra số chuẩn xác

::: tip Ví dụ 4.1: Giàn tam giác đều $ABC$ (Phương pháp Hóa rắn & Tách nút — Chuẩn vở ghi)
**Đề bài:** Cho giàn tam giác đều $ABC$ cạnh $a$ nằm trong mặt phẳng thẳng đứng ($AB$ nằm ngang, đỉnh $C$ ở trên). Giàn được đặt trên gối cố định tại $A$ và gối trượt con lăn ngang tại $B$. Tại đỉnh $C$ chịu tác dụng của lực $\vec{F}$ ($F = 10\text{ kN}$) hướng lên phía trên bên phải, hợp với phương nằm ngang góc $30^\circ$.
1. Kiểm tra bậc tự do của giàn.
2. Tính các phản lực tại gối $A, B$ và ứng lực $S_{AB}, S_{AC}, S_{BC}$ theo $F$ và tính ra số cụ thể với $F = 10\text{ kN}$.

**Lời giải chi tiết:**
1. **Kiểm tra bậc tự do:**
   Số thanh $n = 3$ ($AB, BC, AC$). Tại mỗi đỉnh $A, B, C$ có $m = 2$ thanh gặp nhau nên mỗi nút là $1$ khớp đơn $\implies k_{\text{đơn}} = 1 + 1 + 1 = 3$. Liên kết ngoài: gối cố định $A$ ($2$) $+$ gối trượt $B$ ($1$) $\implies R_{\text{ngoài}} = 3$.
   $$\text{Dof} = 3n - 2k_{\text{đơn}} - R_{\text{ngoài}} = 3(3) - 2(3) - 3 = 0 \implies \text{Hệ tĩnh định}$$
2. **Bước 1 — Hóa rắn toàn giàn tìm phản lực gối tựa:**
   - Chiếu lên $Ox$ (ngang sang phải):
     $$\sum F_x = A_x + F\cos 30^\circ = 0 \implies A_x = -\frac{\sqrt{3}}{2}F \approx -8{,}660\text{ kN}$$
   - Lấy mômen tại $A$ (chiều dương ngược chiều KĐH; chiều cao tam giác đều $h = \frac{a\sqrt{3}}{2}$, hoành độ $C$ là $\frac{a}{2}$):
     $$\sum \bar{m}_A = B_y \cdot a - (F\cos 30^\circ) \cdot \frac{a\sqrt{3}}{2} + (F\sin 30^\circ) \cdot \frac{a}{2} = 0$$
     Chia cho $a$:
     $$B_y - F\left(\frac{\sqrt{3}}{2}\cdot\frac{\sqrt{3}}{2}\right) + F\left(\frac{1}{2}\cdot\frac{1}{2}\right) = 0 \implies B_y = \left(\frac{3}{4} - \frac{1}{4}\right)F = \frac{1}{2}F = 5{,}000\text{ kN}$$
   - Chiếu lên $Oy$ (thẳng đứng lên):
     $$\sum F_y = A_y + B_y + F\sin 30^\circ = 0 \implies A_y = -\frac{1}{2}F - \frac{1}{2}F = -F = -10{,}000\text{ kN}$$
3. **Bước 2 — Tách nút tính ứng lực thanh (luôn giả thiết Kéo):**
   - **Tách nút $A$:** Nút $A$ chịu $A_x, A_y$, $S_{AB}$ (hướng sang phải) và $S_{AC}$ (nghiêng $60^\circ$ lên-phải):
     $$\sum F_y = A_y + S_{AC}\sin 60^\circ = 0 \implies -F + S_{AC}\frac{\sqrt{3}}{2} = 0 \implies S_{AC} = \frac{2}{\sqrt{3}}F = \frac{2\sqrt{3}}{3}F \approx +11{,}547\text{ kN}$$
     $$\sum F_x = A_x + S_{AB} + S_{AC}\cos 60^\circ = 0 \implies -\frac{\sqrt{3}}{2}F + S_{AB} + \frac{2}{\sqrt{3}}F\cdot\frac{1}{2} = 0$$
     $$\implies S_{AB} = \left(\frac{\sqrt{3}}{2} - \frac{1}{\sqrt{3}}\right)F = \frac{\sqrt{3}}{6}F \approx +2{,}887\text{ kN}$$
   - **Tách nút $B$:** Nút $B$ chịu $B_y$, $S_{BA} = S_{AB}$ (hướng sang trái) và $S_{BC}$ (nghiêng $60^\circ$ lên-trái):
     $$\sum F_y = B_y + S_{BC}\sin 60^\circ = 0 \implies \frac{1}{2}F + S_{BC}\frac{\sqrt{3}}{2} = 0 \implies S_{BC} = -\frac{\sqrt{3}}{3}F \approx -5{,}774\text{ kN}$$
     *(Kiểm tra nút $B$ theo $Ox$: $-S_{AB} - S_{BC}\cos 60^\circ = -\frac{\sqrt{3}}{6}F + \frac{\sqrt{3}}{6}F = 0$, chính xác!)*

**Kết luận:** Với $F = 10\text{ kN}$: thanh $AC$ chịu **kéo** ($11{,}55\text{ kN}$), thanh $AB$ chịu **kéo** ($2{,}89\text{ kN}$), thanh $BC$ chịu **nén** ($5{,}77\text{ kN}$).
*(Lưu ý biến thể đề thi: Nếu đặt thêm lực $\vec{F}$ thẳng đứng vào **chính giữa thanh $AB$**, thanh $AB$ sẽ chịu uốn chứ không còn là thanh giàn 2 lực; khi đó phải tách riêng thanh $AB$ thành một dầm phẳng có 2 bản lề hai đầu thay vì gán $S_{AB}$ dọc trục!).*
:::

::: tip Ví dụ 4.2: Giàn 5 nút 7 thanh dùng Mặt cắt Ritter tìm $S_{DE}$ (Chuẩn vở ghi)
**Đề bài:** Cho giàn phẳng gồm 5 nút $A, B, C, D, E$ ghép từ 3 tam giác đều cạnh $a = 0{,}5\text{ m}$ ($A, C, B$ nằm thẳng hàng trên biên dưới với $AC = CB = a$; $D$ và $E$ nằm ở biên trên với $\triangle ADC$, $\triangle DCE$, $\triangle CEB$ đều là tam giác đều). Gối cố định tại $A$, gối di động con lăn ngang tại $B$. Tại nút $D$ chịu lực nằm ngang hướng sang phải $F_1 = 2\text{ kN}$; tại nút $C$ chịu lực thẳng đứng hướng xuống $F_2 = 1\text{ kN}$ ($F_1 = 2F_2 = 2\text{ kN}$).
1. Kiểm tra bậc tự do của giàn bằng công thức $\text{Dof} = 3n - 2k_{\text{đơn}} - R_{\text{ngoài}}$.
2. Dùng phương pháp hóa rắn tìm phản lực gối $A, B$ và dùng **mặt cắt Ritter** tính trực tiếp ứng lực $S_{DE}$.

**Lời giải chi tiết:**
1. **Kiểm tra bậc tự do ($\text{Dof}$):**
   - Số thanh $n = 7$ (gồm $AD, DC, AC, DE, EC, CB, EB$).
   - Đếm số khớp đơn nội theo quy tắc khớp bội $k_{\text{nút}} = m - 1$:
     - Nút $A$ ($2$ thanh): $2-1 = 1$ khớp; Nút $B$ ($2$ thanh): $2-1 = 1$ khớp;
     - Nút $D$ ($3$ thanh): $3-1 = 2$ khớp; Nút $E$ ($3$ thanh): $3-1 = 2$ khớp;
     - Nút $C$ ($4$ thanh): $4-1 = 3$ khớp.
     Tổng số khớp đơn: $k_{\text{đơn}} = 1 + 1 + 2 + 2 + 3 = 9$ khớp đơn.
   - Liên kết ngoài: $R_{\text{ngoài}} = 2(A) + 1(B) = 3$.
   $$\text{Dof} = 3(7) - 2(9) - 3 = 21 - 18 - 3 = 0 \implies \text{Hệ tĩnh định}$$
2. **Hóa rắn toàn giàn tìm phản lực ngoài:**
   Chiều cao giàn: $h = \frac{a\sqrt{3}}{2}$. Khoảng cách $AB = 2a$.
   - $\sum F_x = A_x + F_1 = 0 \implies A_x = -F_1 = -2\text{ kN}$.
   - $\sum \bar{m}_A = B_y \cdot (2a) - F_2 \cdot a - F_1 \cdot \frac{a\sqrt{3}}{2} = 0$
     $$\implies 2 B_y = F_2 + \frac{\sqrt{3}}{2}F_1 = 1 + \frac{\sqrt{3}}{2}(2) = 1 + \sqrt{3} \implies B_y = \frac{1 + \sqrt{3}}{2} \approx 1{,}366\text{ kN}$$
   - $\sum F_y = A_y + B_y - F_2 = 0 \implies A_y = 1 - \frac{1+\sqrt{3}}{2} = \frac{1 - \sqrt{3}}{2} \approx -0{,}366\text{ kN}$.
3. **Mặt cắt Ritter tìm $S_{DE}$:**
   Dùng mặt cắt cắt qua **3 thanh** $DE$, $DC$ và $AC$. Xét cân bằng **phần bên trái** (gồm cụm $A-D-C$, với 3 nội lực $S_{DE}, S_{DC}, S_{AC}$ hướng ra khỏi mặt cắt):
   ```text
            D --- F1 -->  ----> SDE
           / \           :
          /   \  SDC     : Mặt cắt Ritter
         /     v         :
   Ax ->+-------+-------> SAC
       A        C
       ^ Ay
   ```
   - **Chọn tâm lấy mômen tối ưu:** Hai thanh cắt không cần tìm là $DC$ và $AC$ giao nhau tại **nút $C$**, nên lấy $\sum \bar{m}_C = 0$ sẽ **triệt tiêu cả $S_{DC}, S_{AC}$ và $A_x$**!
   - Viết phương trình $\sum \bar{m}_C = 0$ (chiều dương ngược chiều KĐH):
     - $A_y$ (hướng lên) làm quay thuận KĐH quanh $C$, tay đòn $AC = a$: $-A_y \cdot a$.
     - $F_1$ (hướng phải) làm quay thuận KĐH quanh $C$, tay đòn $h = \frac{a\sqrt{3}}{2}$: $-F_1 \cdot \frac{a\sqrt{3}}{2}$.
     - $S_{DE}$ (giả thiết kéo: hướng phải) làm quay thuận KĐH quanh $C$, tay đòn $h = \frac{a\sqrt{3}}{2}$: $-S_{DE} \cdot \frac{a\sqrt{3}}{2}$.
     $$\sum \bar{m}_C = -A_y \cdot a - F_1 \cdot \frac{a\sqrt{3}}{2} - S_{DE} \cdot \frac{a\sqrt{3}}{2} = 0$$
   - Chia hai vế cho $a$ và giải tìm $S_{DE}$:
     $$S_{DE} = -F_1 - \frac{2}{\sqrt{3}} A_y = -2 - \frac{2}{\sqrt{3}}\left(\frac{1-\sqrt{3}}{2}\right) = -2 - \frac{1-\sqrt{3}}{\sqrt{3}} = -1 - \frac{\sqrt{3}}{3} \approx -1{,}577\text{ kN}$$
   - *(Kiểm tra chéo nhanh bằng **nửa bên phải** cắt qua $DE, DC, AC$: tại $B$ có $B_y$ hướng lên cách $C$ đoạn $a$, $F_2$ đi qua $C$, $S_{DE}$ hướng sang trái, suy ra $\sum \bar{m}_C = B_y\cdot a + S_{DE}\cdot\frac{a\sqrt{3}}{2} = 0$, nên $S_{DE} = -\frac{2}{\sqrt{3}}\cdot\frac{1+\sqrt{3}}{2} = -1 - \frac{\sqrt{3}}{3} \approx -1{,}577\text{ kN}$. Khớp tuyệt đối!)*

**Kết luận:** Thanh $DE$ chịu **nén** với độ lớn lực nén $1{,}58\text{ kN}$.
:::

---

### 4. Bẫy hay sai & Bài tập tự luyện

::: warning 4 Bẫy hay sai kinh điển của Ngày 4
1. **Đếm sai khớp đơn ở nút khớp bội:** Với nút nối $4$ thanh như nút $C$ ở Ví dụ 4.2, số khớp đơn tương đương là $4 - 1 = 3$ khớp, tuyệt đối không đếm là $1$ khớp!
2. **Đảo ngược dấu nội lực khi tách vật khớp bản lề nội:** Khi tách tại $B$, nếu trên vật trái bạn vẽ $\vec{B}_x$ hướng sang phải và $\vec{B}_y$ hướng lên, thì trên vật phải bắt buộc vẽ $\vec{B}'_x$ sang trái và $\vec{B}'_y$ xuống dưới!
3. **Cắt Ritter qua 4 thanh hoặc quên phản lực $A_y$ khi tách nửa giàn:** Mặt cắt Ritter hợp lệ chỉ được cắt qua tối đa $3$ thanh chưa biết; và phần giàn giữ lại bắt buộc mang đầy đủ **các phản lực gối tựa ngoài** tại phần đó (ví dụ $A_x, A_y$).
4. **Coi thanh có lực đặt ở giữa thân là thanh giàn 2 lực:** Hễ có lực tác dụng lên giữa thanh thì thanh bị uốn, phản lực ở 2 đầu **không** còn nằm dọc theo trục thanh nữa!
:::

::: info Bài tập tự luyện Ngày 4 (Có đáp số)
1. **Bài 4.1 (Giàn tam giác vuông):** Giàn $ABC$ vuông tại $A$ có cạnh nằm ngang $AB = 4\text{ m}$, cạnh thẳng đứng $AC = 3\text{ m}$ ($BC = 5\text{ m}$), gối cố định tại $A$, gối di động con lăn ngang tại $B$. Tại đỉnh $C$ chịu lực nằm ngang hướng sang phải $F = 12\text{ kN}$. Tính phản lực tại $A, B$ và ứng lực các thanh $AB, AC, BC$.
   - *Đáp số:* $A_x = -12\text{ kN},\; A_y = -9\text{ kN},\; B_y = 9\text{ kN}$; $S_{BC} = -15\text{ kN}$ (Nén); $S_{AB} = +12\text{ kN}$ (Kéo); $S_{AC} = +9\text{ kN}$ (Kéo).
2. **Bài 4.2 (Hệ 2 vật khớp bản lề nội):** Dầm ghép nằm ngang $ACB$ dài $6\text{ m}$, gồm đoạn $AC = 4\text{ m}$ ngàm phẳng tại $A$ nối với đoạn $CB = 2\text{ m}$ bằng khớp bản lề nội tại $C$, đầu $B$ đặt trên gối con lăn ngang. Đoạn $AC$ chịu tải phân bố đều $q = 3\text{ kN/m}$ hướng xuống; đoạn $CB$ chịu lực tập trung $P = 8\text{ kN}$ hướng xuống đặt tại trung điểm của $CB$. Tính phản lực tại $B, C$ và ngàm $A$.
   - *Đáp số:* Tách $CB$ trước được $C_x = 0,\; B_y = 4\text{ kN},\; C_y = 4\text{ kN}$; truyền sang $AC$ được $A_x = 0,\; A_y = 16\text{ kN},\; M_A = 40\text{ kN}\cdot\text{m}$ (ngược KĐH).
3. **Bài 4.3 (Mặt cắt Ritter nhanh):** Xét lại giàn 5 nút 7 thanh ($A, B, C, D, E$, mỗi cạnh tam giác đều dài $a = 1\text{ m}$) ở Ví dụ 4.2, nhưng bỏ lực $F_1$, chỉ giữ duy nhất lực thẳng đứng hướng xuống $P = 10\sqrt{3}\text{ kN}$ đặt tại nút $C$. Dùng mặt cắt Ritter qua $DE, DC, AC$ tính nhanh $S_{DE}$.
   - *Đáp số:* $A_y = B_y = 5\sqrt{3}\text{ kN}$; lấy $\sum \bar{m}_C = 0 \implies S_{DE} = -10\text{ kN}$ (Nén).
:::

---

## Ngày 5 (`27 → 32 điểm`): Ma Sát Trượt, Ma Sát Lăn & Ma Sát Dây Quấn Euler

### 1. Mục tiêu điểm số & Kiến thức cốt lõi cô đọng

- **Mục tiêu:** Ghi thêm `+5` điểm (tích lũy `32/100`), giải gọn cả $3$ chuyên đề ma sát hay thi nhất: (1) Ma sát trượt tĩnh/động & bài toán nêm – thang tựa tường; (2) Ma sát lăn phân biệt điều kiện đứng yên vs lăn không trượt; (3) Ma sát dây quấn trụ tròn theo Công thức Euler.
- **Đọc sâu lý thuyết & bài tập gốc:** [Chương 3: Ma Sát](/tinh-hoc/chuong-3) | [Bài Tập Tĩnh Học – Chương 4](/bai-tap/tinh-hoc/chuong-4).

#### a) Ma sát trượt tĩnh, Ma sát trượt động & Hiện tượng tự hãm
- **Ma sát trượt tĩnh ($\vec{F}_{\text{mst}}$):** Xuất hiện tại mặt tiếp xúc khi 2 vật có **xu hướng trượt** nhưng vẫn đứng yên; nằm tiếp tuyến mặt tiếp xúc và **ngược chiều xu hướng trượt**. Theo Định luật Coulomb:
  $$0 \le F_{\text{mst}} \le F_{\text{msgh}} = f_t \cdot N$$
  trong đó $f_t$ là **hệ số ma sát trượt tĩnh** (không thứ nguyên).
- **Ma sát trượt động ($\vec{F}_{\text{msđ}}$):** Khi ngoại lực thắng lực cản tĩnh ($Q > Q_{\text{gh}}$), vật bắt đầu trượt với lực ma sát cản:
  $$F_{\text{msđ}} = f_{\text{đ}} \cdot N \qquad (\text{luôn có } f_t > f_{\text{đ}})$$
  *(Vì $f_t > f_{\text{đ}}$ nên lúc vật đã trượt thì lực giữ/kéo nhẹ hơn lúc mới khởi động từ trạng thái đứng yên).*
- **Góc ma sát $\varphi_t$ & Tự hãm:** Gọi $\varphi_t = \arctan f_t$. Hợp lực toàn phần $\vec{R} = \vec{N} + \vec{F}_{\text{mst}}$ luôn nằm trong **nón ma sát** góc nửa đỉnh $\varphi_t$. Khi hợp lực ngoại lực nằm gọn trong nón ma sát thì vật tự khóa chặt (**tự hãm**):
  - **Vật trên mặt dốc nghiêng góc $\alpha$ (chỉ có trọng lực):** Tự hãm khi $\tan\alpha \le f_t \iff \alpha \le \varphi_t$.
  - **Cơ cấu nêm góc vát $\alpha$ so với phương ấn $P$:** Lực ép ngang $Q = \frac{P}{\tan(\alpha + \varphi_t)}$; nêm **tự hãm** khi bỏ lực ấn $P$ nếu $\alpha \le \varphi_t$.
  - **Thang đồng chất tựa sàn ($f_1$) và tường ($f_2$):** Góc nghiêng nhỏ nhất so với sàn để thang không trượt đổ thỏa mãn $\tan\alpha_{\min} = \frac{1 - f_1 f_2}{2f_1}$ (nếu $f_1 = f_2 = f$, góc hợp với tường thỏa mãn $\beta \le 2\varphi_t$).

#### b) Ma sát lăn (Con lăn & Trụ tròn đặc)
- **Cơ chế:** Khi lăn, vùng tiếp xúc biến dạng làm điểm đặt phản lực pháp tuyến $\vec{N}$ dịch về phía trước chiều lăn một đoạn $\delta$, tạo thành **ngẫu lực cản lăn** $M_{\text{msl}} = N \cdot \delta$.
- **Định luật ma sát lăn:**
  $$M_{\text{msl}} \le M_{\text{msl}}^{\max} = k \cdot N$$
  trong đó $k$ là **hệ số ma sát lăn**, có **thứ nguyên độ dài** ($\text{m}, \text{cm}, \text{mm}$).
- **Kéo ngang tại tâm con lăn bán kính $R$ trên sàn ngang:**
  - Nếu đứng yên: $M_{\text{msl}} = R \cdot Q$ và $F_{\text{mst}} = Q$.
  - Không lăn khi $Q \le \frac{k}{R}N$; không trượt khi $Q \le f_t N \implies$ đứng yên khi $Q \le \min\left(f_t N,\; \frac{k}{R}N\right)$. Vì $\frac{k}{R} \ll f_t$, con lăn thường **bắt đầu lăn trước khi trượt**.
- **Trụ tròn đặc đồng chất bán kính $R$ trên mặt dốc nghiêng $\alpha$** (Phân biệt 2 ngưỡng cực kỳ hay thi!):
  1. **Điều kiện đứng yên hoàn toàn (không lăn, không trượt):** Mômen kéo của $P\sin\alpha$ quanh điểm tiếp xúc nhỏ hơn mômen cản lăn cực đại $k N$:
     $$P\sin\alpha \cdot R \le k \cdot P\cos\alpha \iff \tan\alpha \le \frac{k}{R}$$
  2. **Điều kiện lăn xuống dốc KHÔNG TRƯỢT (cho trụ đặc có $I_C = \frac{1}{2}mR^2$):**
     Khi trụ bắt đầu lăn xuống ($\tan\alpha > \frac{k}{R}$), phương trình chuyển động $ma_C = P\sin\alpha - F_{\text{mst}}$ và $\frac{1}{2}mR^2\frac{a_C}{R} = F_{\text{mst}} R - k P\cos\alpha$ cho lực ma sát tĩnh cần thiết là $F_{\text{mst}} = \frac{1}{3}P\sin\alpha + \frac{2k}{3R}P\cos\alpha$. Yêu cầu $F_{\text{mst}} \le f_t P\cos\alpha$ cho miền góc dốc:
     $$\frac{k}{R} < \tan\alpha \le 3f_t - \frac{2k}{R}$$

#### c) Ma sát dây quấn trụ tròn (Công thức Euler)
Xét sợi dây mềm không giãn vắt qua trụ tròn cố định có hệ số ma sát trượt tĩnh $f_t$, góc tiếp xúc (góc ôm) giữa dây và trụ là **$\alpha$ [BẮT BUỘC đổi ra radian]**:
- Khi lực giữ $Q$ nhỏ đến mức tải $P$ sắp kéo tuột dây về phía $P$:
  $$Q_{\min} = P \cdot e^{-f_t \alpha} = \frac{P}{e^{f_t \alpha}}$$
- Khi lực kéo $Q$ lớn đến mức dây sắp trượt về phía $Q$:
  $$Q_{\max} = P \cdot e^{f_t \alpha}$$
- **Miền cân bằng Euler:**
  $$P e^{-f_t\alpha} \le Q \le P e^{f_t\alpha}$$
- Vì $e^{f_t\alpha}$ tăng theo **hàm mũ**, chỉ cần quấn dây thêm $1$–$2$ vòng ($\alpha = 2\pi \cdot n_{\text{vòng}}$) là dùng lực tay nhỏ $Q$ giữ được tải trọng $P$ rất lớn!

---

### 2. Thuật toán giải bài toán ma sát (4 bước)

1. **Bước 1:** Xác định **trạng thái đề hỏi**:
   - Đang cân bằng thông thường $\rightarrow$ giữ nguyên ẩn $F_{\text{mst}}$ (hoặc $M_{\text{msl}}$), giải rồi kiểm tra bất đẳng thức $F_{\text{mst}} \le f_t N$.
   - Đang ở **trạng thái giới hạn (sắp trượt / sắp lăn)** $\rightarrow$ đặt thẳng $F_{\text{mst}} = f_t N$ (hoặc $M_{\text{msl}} = k N$). Nếu hỏi khoảng $[Q_{\min}, Q_{\max}]$, phải giải **2 lần** cho 2 chiều sắp trượt ngược nhau!
2. **Bước 2:** Xác định **chiều xu hướng trượt** (tưởng tượng làm nhẵn mặt tiếp xúc $f_t = 0$ xem vật trôi hướng nào), vẽ $\vec{F}_{\text{mst}}$ **ngược lại**.
3. **Bước 3:** Lập các phương trình cân bằng để tính $N$ trước, rồi thế vào công thức giới hạn.
4. **Bước 4 (Kiểm tra đơn vị & góc):** Với Ma sát lăn, quy đổi $k$ và $R$ về **cùng đơn vị** ($\text{m}$ hoặc $\text{cm}$). Với Công thức Euler, đổi $\alpha^\circ$ sang **radian** ($\alpha_{\text{rad}} = \alpha^\circ \cdot \frac{\pi}{180}$).

---

### 3. 3 Ví dụ minh họa giải chi tiết 100% ra số chuẩn xác

::: tip Ví dụ 5.1: Thang tựa tường và sàn có ma sát
**Đề bài:** Một chiếc thang đồng chất $AB$ dài $l = 4\text{ m}$, trọng lượng $P = 200\text{ N}$, đầu dưới $A$ tựa trên sàn nằm ngang có hệ số ma sát trượt tĩnh $f_1 = 0{,}4$, đầu trên $B$ tựa vào tường thẳng đứng có hệ số ma sát trượt tĩnh $f_2 = 0{,}25$. Xác định góc nghiêng nhỏ nhất $\alpha_{\min}$ của thang so với mặt sàn để thang không bị trượt đổ, và tính các phản lực tại $A, B$ ở trạng thái giới hạn đó.

**Lời giải chi tiết:**
1. **Phân tích chiều ma sát ở trạng thái sắp trượt đổ:**
   Thang có xu hướng trượt: chân $A$ trượt ra xa tường (sang trái hoặc sang phải tùy hình; giả sử tường nằm bên trái trên trục $Oy$, sàn $Ox$ hướng sang phải: chân $A$ trượt sang phải, đầu $B$ tụt xuống dưới).
   - Tại $A$: phản lực $\vec{N}_A$ hướng lên, lực ma sát $\vec{F}_{\text{ms}A}$ hướng sang trái (ngăn trượt ra xa tường), với $F_{\text{ms}A} = f_1 N_A = 0{,}4 N_A$.
   - Tại $B$: phản lực $\vec{N}_B$ hướng sang phải, lực ma sát $\vec{F}_{\text{ms}B}$ hướng lên trên (ngăn tụt xuống), với $F_{\text{ms}B} = f_2 N_B = 0{,}25 N_B$.
2. **Hệ 3 phương trình cân bằng phẳng:**
   $$\sum F_x = N_B - F_{\text{ms}A} = 0 \implies N_B = 0{,}4 N_A \quad (1)$$
   $$\sum F_y = N_A + F_{\text{ms}B} - P = 0 \implies N_A + 0{,}25 N_B = 200 \quad (2)$$
   Thay $(1)$ vào $(2)$:
   $$N_A(1 + 0{,}25 \cdot 0{,}4) = 200 \implies 1{,}1 N_A = 200 \implies N_A = \frac{200}{1{,}1} \approx 181{,}82\text{ N}$$
   $$\implies N_B = 0{,}4 \cdot 181{,}818 \approx 72{,}73\text{ N}, \qquad F_{\text{ms}A} \approx 72{,}73\text{ N}, \qquad F_{\text{ms}B} = 0{,}25 \cdot 72{,}727 \approx 18{,}18\text{ N}$$
3. **Tìm góc giới hạn $\alpha_{\min}$ bằng phương trình mômen quanh chân thang $A$:**
   $$\sum \bar{m}_A = -P \cdot \frac{l}{2}\cos\alpha_{\min} + N_B \cdot l\sin\alpha_{\min} + F_{\text{ms}B} \cdot l\cos\alpha_{\min} = 0$$
   Chia hai vế cho $l\cos\alpha_{\min}$:
   $$N_B \tan\alpha_{\min} = \frac{P}{2} - F_{\text{ms}B} = 100 - 18{,}1818 = 81{,}8182$$
   $$\implies \tan\alpha_{\min} = \frac{81{,}8182}{72{,}7273} = \frac{1 - f_1 f_2}{2 f_1} = \frac{1 - 0{,}1}{0{,}8} = 1{,}125 \implies \alpha_{\min} = \arctan(1{,}125) \approx 48{,}37^\circ$$
:::

::: tip Ví dụ 5.2: Trụ tròn đặc trên mặt dốc — Phân biệt đứng yên vs lăn không trượt
**Đề bài:** Một hình trụ tròn đặc đồng chất bán kính $R = 20\text{ cm}$, trọng lượng $P = 500\text{ N}$ đặt trên mặt phẳng nghiêng góc $\alpha$ so với phương ngang. Biết hệ số ma sát trượt tĩnh $f_t = 0{,}25$ và hệ số ma sát lăn $k = 0{,}4\text{ cm}$.
1. Tìm góc $\alpha_1$ lớn nhất để trụ đứng yên hoàn toàn (không lăn, không trượt).
2. Tìm khoảng góc $\alpha$ để trụ lăn xuống dốc mà **không trượt**.

**Lời giải chi tiết:**
1. **Quy đổi đồng nhất đơn vị:** $k = 0{,}4\text{ cm},\; R = 20\text{ cm} \implies \frac{k}{R} = \frac{0{,}4}{20} = 0{,}02$.
2. **Ngưỡng đứng yên hoàn toàn:**
   $$\tan\alpha \le \frac{k}{R} = 0{,}02 \implies \alpha \le \arctan(0{,}02) \approx 1{,}15^\circ$$
   Vậy góc tối đa để trụ đứng yên là $\alpha_1 \approx 1{,}15^\circ$.
3. **Miền lăn không trượt của trụ đặc:**
   $$\frac{k}{R} < \tan\alpha \le 3 f_t - \frac{2k}{R} = 3(0{,}25) - 2(0{,}02) = 0{,}75 - 0{,}04 = 0{,}71$$
   $$\implies \alpha_{\max} = \arctan(0{,}71) \approx 35{,}37^\circ$$
   Vậy khi $1{,}15^\circ < \alpha \le 35{,}37^\circ$, trụ tròn đặc sẽ lăn xuống dốc mà không bị trượt!
:::

::: tip Ví dụ 5.3: Ma sát dây quấn trụ tròn cố định (Công thức Euler)
**Đề bài:** Dây thừng mềm vắt qua một trụ neo cố định có hệ số ma sát tĩnh $f_t = 0{,}3$. Một đầu dây treo vật nặng $P = 2000\text{ N}$, đầu còn lại chịu lực giữ $Q$.
1. Nếu dây ôm nửa vòng trụ ($\alpha = 180^\circ$), tìm khoảng giá trị $Q$ để hệ cân bằng.
2. Nếu người thợ quấn thêm thành $1{,}5$ vòng ($\alpha = 540^\circ$), lực giữ tối thiểu $Q_{\min}$ giảm xuống còn bao nhiêu?

**Lời giải chi tiết:**
1. **Trường hợp $\alpha = 180^\circ$:**
   Đổi góc ôm sang **radian**: $\alpha = 180^\circ = \pi \approx 3{,}1416\text{ rad}$.
   Tính hệ số mũ Euler: $e^{f_t \alpha} = e^{0{,}3\pi} \approx e^{0{,}94248} \approx 2{,}5663$.
   Miền cân bằng:
   $$Q_{\min} = \frac{P}{e^{f_t\alpha}} = \frac{2000}{2{,}5663} \approx 779{,}32\text{ N} \le Q \le Q_{\max} = 2000 \cdot 2{,}5663 \approx 5132{,}66\text{ N}$$
2. **Trường hợp quấn $1{,}5$ vòng ($\alpha = 540^\circ = 3\pi\text{ rad}$):**
   $$e^{f_t \alpha} = e^{0{,}3 \cdot 3\pi} = e^{0{,}9\pi} \approx e^{2{,}82743} \approx 16{,}9020$$
   $$Q_{\min} = \frac{2000}{16{,}9020} \approx 118{,}33\text{ N}$$
   Chỉ cần quấn thêm $1$ vòng dây, lực giữ tối thiểu giảm từ $779{,}32\text{ N}$ xuống còn $118{,}33\text{ N}$!
:::

---

### 4. Bẫy hay sai & Bài tập tự luyện

::: warning 4 Bẫy hay sai kinh điển của Ngày 5
1. **Bẫy radian trong Công thức Euler:** Bấm máy tính $e^{f_t \cdot 180^\circ}$ thay vì $e^{f_t \cdot \pi}$ sẽ cho ra con số khổng lồ sai hoàn toàn! Luôn đổi $\alpha$ sang **radian** ($\alpha_{\text{rad}} = \alpha^\circ \cdot \frac{\pi}{180}$).
2. **Bẫy đơn vị $k$ trong ma sát lăn:** Hệ số ma sát lăn $k$ thường cho bằng $\text{cm}$ hoặc $\text{mm}$, còn bán kính $R$ cho bằng $\text{m}$. Phải đổi cùng đơn vị trước khi tính tỷ số $\frac{k}{R}$!
3. **Đặt $F_{\text{mst}} = f_t N$ khi vật chưa ở trạng thái giới hạn:** Nếu vật đang cân bằng thường, $F_{\text{mst}}$ chỉ là một ẩn số tìm từ phương trình cân bằng rồi đem so sánh với $f_t N$.
4. **Nhầm công thức giới hạn lăn không trượt:** Ngưỡng $3f_t - \frac{2k}{R}$ chỉ áp dụng cho **trụ tròn đặc** ($I_C = \frac{1}{2}mR^2$); nếu đề đổi sang vành tròn hay quả cầu đặc thì phải giải từ định luật II Newton (sẽ gặp lại ở Chặng 3).
:::

::: info Bài tập tự luyện Ngày 5 (Có đáp số)
1. **Bài 5.1 (Nêm tự hãm):** Cơ cấu ép dùng nêm có góc vát $\alpha = 15^\circ$ so với phương thẳng đứng (máng trượt thẳng đứng và ngang đều nhẵn, mặt tiếp xúc giữa hai nêm có $f_t = 0{,}3$). Khi ấn lực thẳng đứng $P = 1000\text{ N}$, tính lực ép ngang $Q$ tạo ra và kiểm tra nêm có tự hãm không.
   - *Đáp số:* $\varphi_t = \arctan(0{,}3) \approx 16{,}70^\circ > \alpha = 15^\circ \implies$ Nêm **tự hãm**; $Q = \frac{1000}{\tan(15^\circ + 16{,}70^\circ)} \approx 1619{,}19\text{ N}$.
2. **Bài 5.2 (Con lăn kéo tại tâm trên sàn ngang):** Con lăn trụ tròn đồng chất bán kính $R = 25\text{ cm}$, trọng lượng $P = 400\text{ N}$ đặt trên sàn ngang có $f_t = 0{,}2$ và $k = 0{,}5\text{ cm}$. Kéo ngang tại tâm con lăn lực $Q$. Tìm $Q_{\max}$ để con lăn đứng yên, và khi vượt ngưỡng đó nó sẽ lăn hay trượt trước?
   - *Đáp số:* $Q_{\max} = \min(0{,}2\cdot 400;\; \frac{0{,}5}{25}\cdot 400) = \min(80;\; 8) = 8\text{ N}$. Vì $8\text{ N} < 80\text{ N}$ nên con lăn sẽ **lăn trước khi trượt**.
3. **Bài 5.3 (Ma sát dây Euler):** Dây cáp quấn đúng $2$ vòng quanh tang trụ cố định ($\alpha = 4\pi\text{ rad}$), hệ số ma sát tĩnh $f_t = 0{,}2$. Một đầu treo tải $P = 5000\text{ N}$. Tính lực giữ tối thiểu $Q_{\min}$ ở đầu dây còn lại để tải không tụt xuống.
   - *Đáp số:* $Q_{\min} = 5000 \cdot e^{-0{,}8\pi} \approx 405{,}01\text{ N}$.
:::

---

## Ngày 6 (`32 → 35 điểm`): Cân Bằng Không Gian 3D, Trọng Tâm & Đề Thi Chốt Chặng 1

### 1. Mục tiêu điểm số & Kiến thức cốt lõi cô đọng

- **Mục tiêu:** Chạm mốc `35/100` điểm Tĩnh học: giải vững bài toán cân bằng không gian 3D (6 phương trình, chọn trục qua 2 ổ đỡ $AB$, giá đỡ 3 thanh $OA, OB, OC$) và bài toán trọng tâm (ghép hình & diện tích âm), sau đó hoàn thành Đề Kiểm Tra Chốt Chặng 1 trong 45 phút.
- **Đọc sâu lý thuyết & bài tập gốc:** [Chương 2 – Hệ lực không gian](/tinh-hoc/chuong-2) | [Chương 4: Trọng Tâm](/tinh-hoc/chuong-4) | [BT Chương 3 – Không gian](/bai-tap/tinh-hoc/chuong-3) | [BT Chương 5 – Trọng tâm](/bai-tap/tinh-hoc/chuong-5).

#### a) Cân bằng vật rắn không gian 3D
1. **Bảng liên kết không gian 3D:**
   - **Ổ trục trụ ngắn (Bản lề trụ):** Ngăn tịnh tiến theo $2$ phương vuông góc với trục quay $\implies 2$ thành phần phản lực vuông góc trục (ví dụ trục $Oy$ thì chỉ có $X_A, Z_A$).
   - **Ổ đỡ chặn (Cối) / Khớp cầu:** Ngăn tịnh tiến theo cả $3$ phương $\implies 3$ thành phần phản lực $(X_A, Y_A, Z_A)$, không cản quay.
   - **Ngàm không gian 3D:** Cản trở tất cả $6$ bậc tự do $\implies 3$ lực $(X_A, Y_A, Z_A)$ và $3$ ngẫu phản lực $(M_x, M_y, M_z)$.
   - **Thanh nhẹ / Dây 3D:** $1$ ẩn dọc trục thanh/dây.

2. **Hệ 6 phương trình cân bằng không gian:**
   $$\sum F_x = 0, \quad \sum F_y = 0, \quad \sum F_z = 0, \qquad \sum M_x(\vec{F}_k) = 0, \quad \sum M_y(\vec{F}_k) = 0, \quad \sum M_z(\vec{F}_k) = 0$$

3. **Mẹo vàng giải nhanh bài toán 3D:**
   - **Chọn trục đi qua 2 ổ đỡ $AB$:** Nếu vật quay hoặc đỡ trên 2 ổ $A, B$, hãy đặt trục $Oy$ (hoặc $Ox$) **đi qua đúng đường thẳng $AB$**! Khi đó toàn bộ $4$–$5$ ẩn phản lực tại $A$ và $B$ đều cắt trục $Oy$ nên mômen của chúng quanh $Oy$ **bằng $0$**; phương trình $\sum M_y = 0$ giải ngay được lực căng dây hoặc mômen truyền động!
   - **Quy tắc tính nhẩm mômen đối với trục $\Delta$:** Nếu lực $\vec{F}$ **song song** hoặc **cắt** trục $\Delta$ thì $M_\Delta(\vec{F}) = 0$. Nếu lực $\vec{F}$ vuông góc mặt phẳng chứa trục $\Delta$, lấy trực tiếp $\pm F \cdot d$ bằng cánh tay đòn hình học (hoặc dùng công thức giải tích $M_x = yF_z - zF_y$, $M_y = zF_x - xF_z$, $M_z = xF_y - yF_x$).

#### b) Trọng tâm vật rắn đồng chất & Phương pháp diện tích âm
- **Công thức tổng quát cho bản phẳng đồng chất (chia thành $n$ hình cơ bản):**
  $$x_G = \frac{\displaystyle\sum_{i=1}^n S_i x_i}{\displaystyle\sum_{i=1}^n S_i}, \qquad y_G = \frac{\displaystyle\sum_{i=1}^n S_i y_i}{\displaystyle\sum_{i=1}^n S_i}$$
  *(Thay $S_i$ bằng thể tích $V_i$ đối với khối 3D và độ dài $L_i$ đối với dây mảnh).*
- **Phương pháp diện tích âm:** Nếu hình có phần bị khoét rỗng (lỗ tròn, hốc chữ U, phần khuyết), xem phần nguyên vẹn mang diện tích dương $S_1 > 0$ và phần bị khoét mang **diện tích âm $S_2 < 0$** rồi thay vào công thức trên!
- **Bảng trọng tâm cơ bản cần thuộc:**
  - *Tam giác bất kỳ:* Cách cạnh đáy một đoạn $\frac{1}{3}h$ (tọa độ trung bình cộng $3$ đỉnh).
  - *Cung tròn bán kính $R$, góc ở tâm $2\alpha$:* $x_G = R\frac{\sin\alpha}{\alpha}$ (nửa vòng tròn: $\frac{2R}{\pi}$).
  - *Quạt tròn bán kính $R$, góc ở tâm $2\alpha$:* $x_G = \frac{2}{3}R\frac{\sin\alpha}{\alpha}$ (nửa hình tròn: $\frac{4R}{3\pi}$).
  - *Định lý Guldin 1 & 2:* $S_{\text{tròn xoay}} = 2\pi y_G L$ và $V_{\text{tròn xoay}} = 2\pi y_G S$.

---

### 2. Thuật toán giải nhanh 3D & Trọng tâm

- **Bài toán 3D:** Chọn hệ trục $Oxyz$ qua hai ổ đỡ hoặc gốc tại khớp cầu $\rightarrow$ phân tích mọi lực xiên thành $3$ thành phần $(F_x, F_y, F_z)$ (dùng vectơ đơn vị hoặc chiếu 2 lần xuống mặt phẳng nằm ngang rồi chiếu tiếp) $\rightarrow$ viết **3 phương trình mômen trước** rồi mới viết 3 phương trình hình chiếu lực!
- **Bài toán Trọng tâm:** Kiểm tra **trục đối xứng** trước (giảm ngay 1 ẩn!) $\rightarrow$ chọn gốc $O$ tại góc dưới trái hoặc tâm lỗ/tâm đĩa $\rightarrow$ kẻ bảng 5 cột $(i,\; S_i,\; x_i,\; y_i,\; S_i x_i,\; S_i y_i)$ với $S_i < 0$ cho phần khoét $\rightarrow$ chia tổng tích cho tổng diện tích.

---

### 3. 2 Ví dụ minh họa giải chi tiết 100% ra số chuẩn xác

::: tip Ví dụ 6.1: Giá đỡ không gian 3 thanh $OA, OB, OC$
**Đề bài:** Treo vật nặng trọng lượng $P = 600\text{ N}$ vào đầu nút $O$ của một giá đỡ không gian gồm 3 thanh nhẹ không trọng lượng $OA, OB, OC$ nối bản lề cầu với nhau tại $O$ và nối bản lề với tường thẳng đứng tại $A, B, C$. Biết $A, B, C$ trên tường lập thành một tam giác đều nằm trên mặt phẳng thẳng đứng với cạnh đáy $BC$ nằm ngang, đỉnh $A$ ở phía trên. Thanh $OA$ vuông góc với tường, còn hai thanh $OB, OC$ hợp với $OA$ một góc $30^\circ$. Tìm ứng lực trong 3 thanh $OA, OB, OC$.

**Lời giải chi tiết:**
1. **Chọn hệ trục $Oxyz$ tại nút $O$:**
   - Trục $Oz$ dọc theo $AO$, hướng từ tường ra ngoài (nên hướng từ $O$ vào $A$ là $-Oz$).
   - Trục $Ox$ nằm ngang song song với $BC$ (hướng từ trái sang phải).
   - Trục $Oy$ thẳng đứng hướng xuống dưới (cùng chiều trọng lực $\vec{P}$).
2. **Phân tích các lực đồng quy tại $O$ (giả thiết cả 3 thanh chịu kéo, tức hướng từ $O$ về $A, B, C$):**
   - Trọng lực $\vec{P} = (0;\; +600;\; 0)\text{ N}$.
   - Thanh $OA$: $\vec{S}_A = (0;\; 0;\; -S_A)$.
   - Gọi $M$ là trung điểm của $BC$ trên tường. Do $\triangle ABC$ đều, đường cao $AM$ nằm trên mặt phẳng $Oyz$, còn các góc $\widehat{MAB} = \widehat{MAC} = 30^\circ$.
   - Với thanh $OB$ (và đối xứng sang $OC$): hình chiếu của $\vec{S}_B$ lên đường thẳng song song với mặt tường $AM$ là $S_B \sin 30^\circ$, từ đó chiếu tiếp xuống phương thẳng đứng $Oy$ nhân $\cos 30^\circ$ và sang ngang $Ox$ nhân $\sin 30^\circ$:
     $$S_{Bx} = -S_B \sin 30^\circ \sin 30^\circ = -\frac{1}{4}S_B, \quad S_{By} = +S_B \sin 30^\circ \cos 30^\circ = +\frac{\sqrt{3}}{4}S_B, \quad S_{Bz} = -S_B \cos 30^\circ = -\frac{\sqrt{3}}{2}S_B$$
     $$S_{Cx} = +\frac{1}{4}S_C, \quad S_{Cy} = +\frac{\sqrt{3}}{4}S_C, \quad S_{Cz} = -\frac{\sqrt{3}}{2}S_C$$
3. **Giải 3 phương trình cân bằng không gian đồng quy:**
   - $\sum F_x = -\frac{1}{4}S_B + \frac{1}{4}S_C = 0 \implies S_B = S_C$.
   - $\sum F_y = 600 + \frac{\sqrt{3}}{4}S_B + \frac{\sqrt{3}}{4}S_C = 0$, suy ra $600 + \frac{\sqrt{3}}{2}S_B = 0$, nên $S_B = S_C = -\frac{1200}{\sqrt{3}} = -400\sqrt{3} \approx -692{,}82\text{ N}$.
   - $\sum F_z = -S_A - 2 S_B \frac{\sqrt{3}}{2} = 0$, suy ra $S_A = -\sqrt{3}(-400\sqrt{3}) = +1200\text{ N}$.

**Kết luận:** Thanh $OA$ chịu **kéo** $1200\text{ N}$; hai thanh $OB$ và $OC$ chịu **nén** $692{,}82\text{ N}$.
:::

::: tip Ví dụ 6.2: Trọng tâm mặt cắt chữ U & Đĩa tròn khoét lỗ (Phương pháp diện tích âm)
**Đề bài:**
- **Phần (a) — Mặt cắt chữ U:** Một mặt cắt thép đồng chất hình chữ U (nằm ngửa) có đáy dưới rộng $B = 100\text{ mm}$, chiều cao hai cánh đứng $H = 150\text{ mm}$, bề dày thành đáy và hai cánh đều bằng $t = 10\text{ mm}$. Tìm tọa độ trọng tâm $(x_G, y_G)$ tính từ góc dưới bên trái.
- **Phần (b) — Đĩa tròn khoét lỗ:** Một đĩa tròn đồng chất tâm $O$, bán kính $R = 12\text{ cm}$, bị khoét một lỗ tròn bán kính $r = 6\text{ cm}$ có tâm $A$ cách tâm $O$ một đoạn $d = 6\text{ cm}$ về phía bên phải ($+Ox$). Tìm vị trí trọng tâm $G$ của phần đĩa còn lại.

**Lời giải chi tiết:**

**Phần (a): Mặt cắt chữ U bằng phương pháp diện tích âm**
- Do chữ U đối xứng qua trục thẳng đứng giữa đáy, ta có ngay $x_G = \frac{100}{2} = 50\text{ mm}$.
- Xem chữ U là **hình chữ nhật lớn $100 \times 150\text{ mm}$** trừ đi **hốc lòng rỗng bên trong rộng $100 - 2\cdot 10 = 80\text{ mm}$ và cao $150 - 10 = 140\text{ mm}$**:
  - Hình chữ nhật bao ngoài: $S_1 = 100 \times 150 = 15\,000\text{ mm}^2$, tâm ở độ cao $y_1 = \frac{150}{2} = 75\text{ mm}$.
  - Hốc khoét rỗng (diện tích âm): $S_2 = -80 \times 140 = -11\,200\text{ mm}^2$, tâm ở độ cao $y_2 = 10 + \frac{140}{2} = 80\text{ mm}$.
- Tổng diện tích thực: $S = S_1 + S_2 = 15\,000 - 11\,200 = 3\,800\text{ mm}^2$.
- Tung độ trọng tâm:
  $$y_G = \frac{S_1 y_1 + S_2 y_2}{S_1 + S_2} = \frac{15\,000 \cdot 75 - 11\,200 \cdot 80}{3\,800} = \frac{1\,125\,000 - 896\,000}{3\,800} = \frac{229\,000}{3\,800} = \frac{1145}{19} \approx 60{,}26\text{ mm}$$
  Vậy trọng tâm mặt cắt chữ U nằm tại $(50{,}00\text{ mm};\; 60{,}26\text{ mm})$.

**Phần (b): Đĩa tròn khoét lỗ lệch tâm**
- Đặt gốc $O(0;\,0)$ tại tâm đĩa lớn, trục $Ox$ đi qua $O$ và tâm lỗ khoét $A(6;\,0)\text{ cm}$.
- Do đối xứng qua $Ox \implies y_G = 0$.
- Phần đĩa nguyên: $S_1 = \pi R^2 = 144\pi\text{ cm}^2$, $x_1 = 0$.
- Phần lỗ khoét (âm): $S_2 = -\pi r^2 = -36\pi\text{ cm}^2$, $x_2 = 6\text{ cm}$.
- Hoành độ trọng tâm:
  $$x_G = \frac{S_1 x_1 + S_2 x_2}{S_1 + S_2} = \frac{144\pi \cdot 0 - 36\pi \cdot 6}{144\pi - 36\pi} = \frac{-216\pi}{108\pi} = -2\text{ cm} = -\frac{R}{6}$$
  Vậy trọng tâm $G$ dịch sang phía đối diện với lỗ khoét một đoạn $2\text{ cm}$ tính từ tâm $O$.
:::

---

### 4. Bẫy hay sai & Bài tập tự luyện

::: warning 3 Bẫy hay sai kinh điển của Ngày 6
1. **Nhầm số ẩn của Ổ trục trụ ngắn và Ổ đỡ chặn (Cối):** Ổ trục trụ ngắn trượt dọc trục được nên chỉ có $2$ phản lực vuông góc trục; còn ổ đỡ chặn (cối) chặn thêm chuyển động dọc trục nên có đủ $3$ thành phần.
2. **Dấu trong công thức mômen $M_y$ và xác định tung độ hốc khoét $y_2$:** Ở chữ U, hốc rỗng nằm phía trên thành đáy dày $t = 10\text{ mm}$, nên tâm hốc phải cộng thêm bề dày đáy: $y_2 = 10 + \frac{140}{2} = 80\text{ mm}$ (rất nhiều bạn quên cộng $10\text{ mm}$ lấy thành $70\text{ mm}$!).
3. **Quên đổi dấu mẫu số trong phương pháp diện tích âm:** Khi tính $x_G = \frac{S_1 x_1 - S_2 x_2}{S_1 - S_2}$, mẫu số cũng **phải trừ $S_2$**, tuyệt đối không cộng!
:::

::: info Bài tập tự luyện Ngày 6 (Có đáp số)
1. **Bài 6.1 (Trục ngang 3D mang puli và tang tời):** Một trục nằm ngang $BA$ dài $4\text{ m}$ ($B$ ở $y=0$, $A$ ở $y=4\text{ m}$ dọc trục $Oy$) được đỡ bởi 2 ổ trụ ngắn tại $B$ và $A$ (trục $Oz$ hướng thẳng đứng lên, $Ox$ ngang). Tại $y = 1\text{ m}$ lắp puli đường kính $D = 0{,}6\text{ m}$ chịu 2 nhánh đai nằm ngang theo $+Ox$ có sức căng $T_1 = 5\text{ kN}$ (phía trên trục) và $T_2 = 2\text{ kN}$ (phía dưới trục). Tại $y = 3\text{ m}$ lắp tang tời đường kính $d = 0{,}3\text{ m}$ treo vật nặng $P = 5\text{ kN}$ (theo $-Oz$, ở phía $+Ox$). Tìm mômen cản $M$ trên trục và phản lực tại 2 ổ đỡ $A, B$.
   - *Đáp số:* $M = 0{,}15\text{ kN}\cdot\text{m}$; $Z_A = 3{,}75\text{ kN},\; Z_B = 1{,}25\text{ kN}$; $X_A = -1{,}75\text{ kN},\; X_B = -5{,}25\text{ kN}$.
2. **Bài 6.2 (Trọng tâm bản chữ L):** Tấm phẳng đồng chất hình chữ $L$ chiều cao toàn phần $H = 10\text{ cm}$, đáy rộng $B = 6\text{ cm}$, bề dày các nhánh đều bằng $2\text{ cm}$ (gốc $O$ đặt tại góc vuông ngoài cùng dưới bên trái). Tìm $(x_G, y_G)$.
   - *Đáp số:* $x_G = \frac{13}{7} \approx 1{,}86\text{ cm}$; $y_G = \frac{27}{7} \approx 3{,}86\text{ cm}$.
3. **Bài 6.3 (Bản vuông khoét bán nguyệt):** Bản phẳng đồng chất hình vuông cạnh $2R = 12\text{ cm}$ ($R = 6\text{ cm}$) bị khoét đi một nửa hình tròn bán kính $R = 6\text{ cm}$ ở chính giữa cạnh đáy. Tính độ cao $y_G$ của trọng tâm phần còn lại so với cạnh đáy.
   - *Đáp số:* $y_G = \frac{20}{3(8-\pi)} R \approx 8{,}23\text{ cm}$.
:::

---

## Đề Kiểm Tra Chốt Chặng 1 (45 Phút — 3 Bài Tự Luận Chuẩn Thi)

Hãy bấm đồng hồ **đúng 45 phút**, đóng toàn bộ tài liệu và tự giải trọn vẹn 3 câu dưới đây trên giấy trước khi đối chiếu đáp án và biểu điểm chấm.

::: tip ĐỀ THI THỬ CHỐT CHẶNG 1 (Thời gian: 45 phút — Thang điểm 10/10)
**Câu 1 (3,0 điểm — Hệ vật phẳng & Tải phân bố tam giác):**
Dầm ghép nằm ngang $ACB$ gồm hai thanh nối nhau qua khớp bản lề nội tại $C$. Thanh $AC$ dài $3\text{ m}$ ngàm phẳng tại đầu $A$ và chịu tải trọng phân bố tam giác vuông hướng thẳng đứng xuống dưới có cường độ bằng $0$ tại $A$, tăng tuyến tính lên cực đại $q_{\max} = 4\text{ kN/m}$ tại $C$. Thanh $CB$ dài $2\text{ m}$ đặt lên gối con lăn nằm ngang tại $B$ và chịu lực tập trung thẳng đứng hướng xuống $P = 6\text{ kN}$ tại trung điểm $D$ của $CB$ ($CD = DB = 1\text{ m}$).
Xác định phản lực tại gối $B$, khớp nội $C$ và ngàm $A$.

**Câu 2 (3,5 điểm — Hệ giàn phẳng, Tách nút & Mặt cắt Ritter):**
Cho hệ giàn phẳng gồm 5 nút $A, B, C, D, E$ ghép từ 3 tam giác đều cạnh $a = 2\text{ m}$ ($A, C, B$ nằm thẳng hàng trên biên dưới với $AC = CB = a$; $D$ và $E$ nằm trên biên trên). Giàn được đặt trên gối cố định tại $A$ và gối con lăn nằm ngang tại $B$. Tại nút $C$ có lực thẳng đứng hướng xuống $P_1 = 10\text{ kN}$, tại nút $E$ có lực nằm ngang hướng sang phải $P_2 = 6\text{ kN}$.
a) *(0,5 điểm)* Kiểm tra bậc tự do $\text{Dof} = 3n - 2k_{\text{đơn}} - R_{\text{ngoài}}$ để kết luận hệ tĩnh định.
b) *(1,5 điểm)* Tính các phản lực gối tựa tại $A$ và $B$.
c) *(1,5 điểm)* Dùng phương pháp mặt cắt Ritter tính ứng lực thanh $S_{DE}$ và dùng phương pháp tách nút $B$ tính $S_{BE}, S_{BC}$ (ghi rõ thanh chịu kéo hay chịu nén).

**Câu 3 (3,5 điểm — Ma sát dây Euler & Trọng tâm diện tích âm):**
a) *(1,75 điểm)* Một khối hàng có khối lượng $m = 100\text{ kg}$ ($g = 9{,}81\text{ m/s}^2$) nằm trên mặt dốc nghiêng góc $\theta = 30^\circ$ so với phương ngang, biết hệ số ma sát trượt tĩnh giữa vật và mặt dốc là $f_1 = 0{,}2$. Khối hàng được giữ bởi một sợi dây cáp song song mặt dốc, vắt qua một tang trụ tròn cố định có hệ số ma sát dây $f_2 = 0{,}25$ và góc ôm $\alpha = 150^\circ$, đầu dây còn lại treo đối trọng $Q$ thẳng đứng. Tìm trọng lượng nhỏ nhất $Q_{\min}$ để khối hàng không bị trượt xuống dốc.
b) *(1,75 điểm)* Một tấm kim loại mỏng đồng chất hình chữ nhật có chiều dài $L = 120\text{ mm}$ (trên trục $Ox$, từ $0$ đến $120$) và chiều cao $H = 80\text{ mm}$ (trên trục $Oy$, từ $0$ đến $80$), bị khoét đi một lỗ tròn bán kính $r = 20\text{ mm}$ có tâm nằm tại điểm $(90;\, 40)\text{ mm}$. Tính tọa độ trọng tâm $(x_G, y_G)$ của phần tấm còn lại.
:::

### Lời giải chi tiết & Biểu điểm chấm 10/10

#### Câu 1 (3,0 điểm)
1. **Tách thanh phụ $CB$ để tìm $B_y$ và phản lực khớp $C$ (1,5 điểm):**
   - Thanh $CB$ chịu lực $P = 6\text{ kN}$ tại $D$ ($CD = 1\text{ m}$), phản lực gối con lăn $\vec{B}_y$ hướng lên tại $B$ ($CB = 2\text{ m}$), và cặp phản lực khớp $(C_x, C_y)$ tại $C$ ($C_x$ sang phải, $C_y$ hướng lên). *(0,25 đ)*
   - Thiết lập $3$ phương trình cân bằng cho $CB$:
     $$\sum F_x = C_x = 0 \implies C_x = 0 \quad (0{,}25\text{ đ})$$
     $$\sum \bar{m}_C = B_y \cdot 2 - P \cdot 1 = 0 \implies B_y = \frac{6 \cdot 1}{2} = 3\text{ kN} \quad (0{,}5\text{ đ})$$
     $$\sum F_y = C_y + B_y - P = 0 \implies C_y = 6 - 3 = 3\text{ kN} \quad (0{,}5\text{ đ})$$
2. **Xét thanh chính $AC$ để tìm phản lực ngàm $A$ (1,5 điểm):**
   - Quy đổi tải tam giác vuông trên $AC$: $Q = \frac{1}{2} q_{\max} \cdot AC = \frac{1}{2} \cdot 4 \cdot 3 = 6\text{ kN}$, đặt cách đầu lớn $C$ một đoạn $\frac{1}{3}(3) = 1\text{ m}$ (tức cách ngàm $A$ một đoạn $d_Q = 2\text{ m}$). *(0,5 đ)*
   - Truyền phản lực khớp $C$ sang thanh $AC$: lực trực đối $C'_x = 0$ và $C'_y = 3\text{ kN}$ **hướng thẳng đứng xuống dưới**. *(0,25 đ)*
   - Viết phương trình cân bằng cho $AC$:
     $$\sum F_x = A_x = 0 \quad (0{,}25\text{ đ})$$
     $$\sum F_y = A_y - Q - C'_y = 0 \implies A_y = 6 + 3 = 9\text{ kN} \quad (0{,}25\text{ đ})$$
     $$\sum \bar{m}_A = M_A - Q \cdot 2 - C'_y \cdot 3 = 0 \implies M_A = 6 \cdot 2 + 3 \cdot 3 = 21\text{ kN}\cdot\text{m}\; (\text{ngược KĐH}) \quad (0{,}25\text{ đ})$$

#### Câu 2 (3,5 điểm)
- **a) Kiểm tra bậc tự do (0,5 điểm):**
  $n = 7$ thanh; tổng khớp đơn tại 5 nút là $k_{\text{đơn}} = 1(A)+1(B)+2(D)+2(E)+3(C) = 9$; $R_{\text{ngoài}} = 2(A) + 1(B) = 3$.
  $$\text{Dof} = 3(7) - 2(9) - 3 = 0 \implies \text{Hệ tĩnh định.} \quad (0{,}5\text{ đ})$$
- **b) Hóa rắn tìm phản lực gối $A, B$ (1,5 điểm):**
  Chiều cao giàn $h = \frac{a\sqrt{3}}{2} = \sqrt{3}\text{ m}$, chiều dài đáy $AB = 2a = 4\text{ m}$:
  $$\sum F_x = A_x + P_2 = 0 \implies A_x = -6\text{ kN} \quad (0{,}5\text{ đ})$$
  $$\sum \bar{m}_A = B_y \cdot (2a) - P_1 \cdot a - P_2 \cdot \frac{a\sqrt{3}}{2} = 0 \implies 2B_y = 10 + 3\sqrt{3} \implies B_y = 5 + \frac{3\sqrt{3}}{2} \approx 7{,}598\text{ kN} \quad (0{,}5\text{ đ})$$
  $$\sum F_y = A_y + B_y - P_1 = 0 \implies A_y = 10 - \left(5 + \frac{3\sqrt{3}}{2}\right) = 5 - \frac{3\sqrt{3}}{2} \approx 2{,}402\text{ kN} \quad (0{,}5\text{ đ})$$
- **c) Mặt cắt Ritter tìm $S_{DE}$ & Tách nút $B$ tìm $S_{BE}, S_{BC}$ (1,5 điểm):**
  - Cắt qua $DE, DC, AC$, giữ nửa bên trái $(A-D-C)$ và lấy mômen quanh giao điểm $C$:
    $$\sum \bar{m}_C = -A_y \cdot a - S_{DE} \cdot \frac{a\sqrt{3}}{2} = 0 \implies S_{DE} = -\frac{2}{\sqrt{3}} A_y = 3 - \frac{10\sqrt{3}}{3} \approx -2{,}774\text{ kN} \quad (\text{Chịu nén}) \quad (0{,}75\text{ đ})$$
  - Tách nút $B$ (giả thiết kéo: $S_{BC}$ hướng sang trái, $S_{BE}$ hướng lên-trái góc $60^\circ$):
    $$\sum F_y = B_y + S_{BE}\sin 60^\circ = 0 \implies S_{BE} = -\frac{B_y}{\frac{\sqrt{3}}{2}} = -3 - \frac{10\sqrt{3}}{3} \approx -8{,}774\text{ kN} \quad (\text{Chịu nén}) \quad (0{,}5\text{ đ})$$
    $$\sum F_x = -S_{BC} - S_{BE}\cos 60^\circ = 0 \implies S_{BC} = 1{,}5 + \frac{5\sqrt{3}}{3} \approx +4{,}387\text{ kN} \quad (\text{Chịu kéo}) \quad (0{,}25\text{ đ})$$

#### Câu 3 (3,5 điểm)
- **a) Phối hợp Ma sát trượt & Ma sát dây Euler (1,75 điểm):**
  - Trọng lượng vật: $P_1 = m g = 100 \cdot 9{,}81 = 981\text{ N}$. Chiếu vuông góc mặt dốc: $N = P_1 \cos 30^\circ$.
  - Khi vật **sắp trượt xuống dốc**, ma sát trượt tĩnh đạt cực đại hướng lên dọc dốc: $F_{\text{ms}1} = f_1 N = 0{,}2 P_1 \cos 30^\circ$.
  - Sức căng dây nhánh nối với vật tại giới hạn không trượt xuống:
    $$T_{\min} = P_1 \sin 30^\circ - F_{\text{ms}1} = 981(\sin 30^\circ - 0{,}2\cos 30^\circ) \approx 981(0{,}5 - 0{,}173205) \approx 320{,}59\text{ N} \quad (0{,}75\text{ đ})$$
  - Đổi góc ôm sang **radian**: $\alpha = 150^\circ \cdot \frac{\pi}{180^\circ} = \frac{5\pi}{6} \approx 2{,}6180\text{ rad}$. *(0,5 đ)*
  - Áp dụng Công thức Euler (vì nhánh $T_{\min}$ sắp kéo đối trọng $Q$ lên $\implies T_{\min} = Q_{\min} \cdot e^{f_2\alpha}$):
    $$Q_{\min} = T_{\min} \cdot e^{-f_2 \alpha} = 320{,}59 \cdot e^{-0{,}25 \cdot \frac{5\pi}{6}} = \frac{320{,}59}{1{,}9242} \approx 166{,}61\text{ N} \quad (0{,}5\text{ đ})$$
- **b) Trọng tâm tấm chữ nhật khoét lỗ tròn (1,75 điểm):**
  - Do hình đối xứng qua đường nằm ngang $y = 40\text{ mm}$ nên suy ra ngay:
    $$y_G = 40{,}00\text{ mm} \quad (0{,}25\text{ đ})$$
  - Áp dụng phương pháp diện tích âm:
    - Hình chữ nhật nguyên: $S_1 = 120 \cdot 80 = 9\,600\text{ mm}^2$, $x_1 = 60\text{ mm}$. *(0,5 đ)*
    - Lỗ tròn khoét (âm): $S_2 = -\pi r^2 = -\pi \cdot 20^2 = -400\pi \approx -1\,256{,}64\text{ mm}^2$, $x_2 = 90\text{ mm}$. *(0,5 đ)*
  - Hoành độ trọng tâm:
    $$x_G = \frac{S_1 x_1 + S_2 x_2}{S_1 + S_2} = \frac{9\,600 \cdot 60 - 1\,256{,}64 \cdot 90}{9\,600 - 1\,256{,}64} = \frac{576\,000 - 113\,097{,}34}{8\,343{,}36} \approx 55{,}48\text{ mm} \quad (0{,}5\text{ đ})$$

---

::: tip Tổng kết Chặng 1 (Đạt mốc 35/100 điểm)
Chúc mừng bạn đã hoàn thành trọn vẹn toàn bộ kiến thức nền tảng và các dạng bài tập trọng tâm của **Tĩnh học**. Nếu bạn làm Đề Kiểm Tra Chốt Chặng 1 đạt từ **7,5/10 trở lên**, bạn đã sẵn sàng bước tiếp vào **[Chặng 2 (Ngày 7 – Ngày 12): Làm Chủ Động Học (35 → 65 Điểm)](/on-thi/chang-2-dong-hoc)** hoặc quay lại **[Tổng Quan Lộ Trình 20 Ngày](/on-thi/)** để theo dõi tiến độ.
:::
