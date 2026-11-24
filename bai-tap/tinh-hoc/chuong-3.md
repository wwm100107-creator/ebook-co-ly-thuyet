---
title: "Bài Tập Tĩnh Học - Chương 3: Bài Toán Không Gian"
layout: doc
---

# CHƯƠNG 3: BÀI TOÁN KHÔNG GIAN

Mở rộng các bài toán phẳng ở các chương 1, 2, trong chương này, chúng ta khảo sát các bài toán không gian.

---

## 3.1. CƠ SỞ LÍ THUYẾT

### 3.1.1. Phản lực các liên kết không gian

Các liên kết tựa, dây, và thanh vẫn như ở các chương trước. Dưới đây là bảng ghi đặc điểm một số liên kết khác.

#### Bảng 3–1

| Liên kết (1) | Cấu tạo và biểu diễn (2) | Đặc điểm phản lực (3) |
| :--- | :---: | :--- |
| **Bản lề trụ (ngắn)** | <img src="/figures/bai-tap/tinh-hoc/bang_3_1_1.svg" alt="Bản lề trụ (ngắn)" class="figure-img" /> | Hai thành phần thẳng góc với trục của bản lề |
| **Gối cầu (và cối)** | <img src="/figures/bai-tap/tinh-hoc/bang_3_1_2.svg" alt="Gối cầu (và cối)" class="figure-img" /> | Ba thành phần phản lực |
| **Ngàm** | <img src="/figures/bai-tap/tinh-hoc/bang_3_1_3.svg" alt="Ngàm" class="figure-img" /> | Ba thành phần phản lực và ba ngẫu lực |
| **Ống trụ dài** | <img src="/figures/bai-tap/tinh-hoc/bang_3_1_4.svg" alt="Ống trụ dài" class="figure-img" /> | Hai thành phần phản lực và hai ngẫu lực |

---

### 3.1.2. Chiếu lực và tính vectơ chính

Cho lực $\vec{F}$ nghiêng góc $\alpha, \beta, \gamma$ với các trục $x, y, z$. Gọi $\vec{F}_{xy}$ là vectơ chiếu của $\vec{F}$ lên mặt $xOy$ và $\varphi$ – góc nghiêng của $\vec{F}_{xy}$ đối với trục $x$.

Hình chiếu của lực $\vec{F}$ lên các trục tọa độ được xác định bởi các công thức sau :

$$\begin{aligned}
\overline{F}_x &= \pm F\cos\alpha, \\
\overline{F}_y &= \pm F\cos\beta\ ; \\
\overline{F}_z &= \pm F\cos\gamma\ ;
\end{aligned}$$

và

$$\begin{aligned}
\overline{F}_x &= \pm F\sin\gamma\cos\varphi\ ; \\
\overline{F}_y &= \pm F\sin\gamma\sin\varphi\ ; \\
\overline{F}_z &= \pm F\cos\gamma\ ;
\end{aligned}$$

trong đó dấu $+$ ($-$) tương ứng khi lực thuận (ngược) chiều trục.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_1.svg" alt="Hình 3-1" class="figure-img" />
  <p class="figure-caption">Hình 3-1</p>
</div>

Trường hợp lực $\vec{F}$ song song, thí dụ với trục $x$ và do đó thẳng góc với trục $y$ và $z$, chúng ta có :

$$\overline{F}_x = \pm F\ ; \quad \overline{F}_y = \overline{F}_z = 0.$$

Cho hệ lực $\vec{F}_j$ ($j = 1, 2, \dots, n$). Vectơ chính, kí hiệu $\vec{R}'$, là tổng hình học các vectơ lực.

$$\vec{R}' = \sum_{j=1}^n \vec{F}_j$$

Hình chiếu của vectơ chính lên một trục tọa độ bằng tổng hình chiếu các lực trên trục đó :

$$\overline{R}'_x = \sum_{j=1}^n \overline{F}_{jx}\ ; \quad \overline{R}'_y = \sum_{j=1}^n \overline{F}_{jy}\ ; \quad \overline{R}'_z = \sum_{j=1}^n \overline{F}_{jz}.$$

Từ đó tính được trị số và cosin chỉ phương của vectơ chính.

$$R' = \sqrt{R'^2_x + R'^2_y + R'^2_z}, \quad \begin{cases}
\cos(x, \vec{R}') = \dfrac{\overline{R}'_x}{R'}\ ; \\[8pt]
\cos(y, \vec{R}') = \dfrac{\overline{R}'_y}{R'}\ ; \\[8pt]
\cos(z, \vec{R}') = \dfrac{\overline{R}'_z}{R'}.
\end{cases}$$

---

### 3.1.3. Tính mômen lực và mômen chính

Cho lực $\vec{F}$ và điểm $O$. Vectơ mômen lực $\vec{F}$ đối với điểm $O$ – kí hiệu $\vec{m}_o(\vec{F})$ là vectơ có :
- Phương : thẳng góc với mặt phẳng qua $O$ và chứa $\vec{F}$ ;
- Chiều : hướng về phía từ đó nhìn thấy $\vec{F}$ quay quanh $O$ theo chiều ngược chiều kim đồng hồ.
- Trị số $m_o(\vec{F}) = F \cdot h$ ($F$ – trị số lực, $h$ – tay đòn, khoảng cách từ $O$ xuống đường tác dụng của lực $\vec{F}$).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_2.svg" alt="Hình 3-2" class="figure-img" />
  <p class="figure-caption">Hình 3-2</p>
</div>

Nói khác đi, vectơ mômen lực $\vec{F}$ đối với $O$ là vectơ tích hữu hướng (ngoại tích).

$$\vec{m}_o(\vec{F}) = \vec{r} \wedge \vec{F}\ ;$$

trong đó : $\vec{r} = \overrightarrow{OA}$ – bán kính vectơ của điểm đặt $A$ của lực.

Gọi $Oz$ là trục đi qua $O$. Mômen lực $\vec{F}$ đối với trục $z$ là mômen (đại số) của lực $\vec{F}_{xy}$ đối với $O$ :

$$\overline{m}_z(\vec{F}) = \overline{m}_o(\vec{F}_{xy})\ ;$$

trong đó : $\vec{F}_{xy}$ là vectơ chiếu của $\vec{F}$ lên mặt $xOy$ thẳng góc với trục $z$.

Có định lí sau : *Hình chiếu của vectơ mômen của lực $\vec{F}$ đối với điểm $O$ lên trục $z$ qua $O$ bằng mômen của lực $\vec{F}$ đối với trục $z$.*

Nhờ định lí này việc tính mômen của lực đối với điểm trong không gian quy về tính mômen của lực đối với các trục tọa độ.

Để tính mômen của lực $\vec{F}$ đối với một trục có thể sử dụng trực tiếp định nghĩa hoặc phân tích lực $\vec{F}$ ra các thành phần song song, gặp hoặc thẳng góc (nhưng không gặp) trục, rồi áp dụng các quy tắc :

- Nếu thành phần $\vec{F}_1$ song song hoặc gặp trục $z$, mômen của $\vec{F}_1$ đối với trục $z$ triệt tiêu.

$$\overline{m}_z(\vec{F}_1) = 0$$

- Nếu thành phần $\vec{F}_2$ thẳng góc với trục $z$, mômen lực $\vec{F}_2$ đối với trục $z$ là số đại số :

$$\overline{m}_z(\vec{F}_2) = \pm F_2 h_2\ ;$$

trong đó : $h_2$ – khoảng cách từ trục $z$ đến đường tác dụng của $\vec{F}_2$, lấy dấu cộng (trừ) tùy lực $\vec{F}_2$ quay quanh trục $z$ theo chiều ngược (thuận) chiều kim đồng hồ.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_3.svg" alt="Hình 3-3" class="figure-img" />
  <p class="figure-caption">Hình 3-3</p>
</div>

Vectơ mômen của lực $\vec{F}$ đối với điểm $O$ trong không gian có thể được xác định qua ba hình chiếu của nó trên các trục tọa độ, cho bởi biểu thức sau :

$$\begin{aligned}
\overline{m}_{ox}(\vec{F}) &= y\overline{F}_z - z\overline{F}_y\ ; \\
\overline{m}_{oy}(\vec{F}) &= z\overline{F}_x - x\overline{F}_z\ ; \\
\overline{m}_{oz}(\vec{F}) &= x\overline{F}_y - y\overline{F}_x\ ;
\end{aligned}$$

trong đó : $x, y, z$ là tọa độ điểm đặt $A$, còn $\overline{F}_x, \overline{F}_y, \overline{F}_z$ là các hình chiếu của lực $\vec{F}$ lên các trục tọa độ.

Vectơ mômen chính của hệ lực $\vec{F}_j$ ($j = 1, 2, \dots, n$) đối với điểm $O$ – kí hiệu $\vec{M}^o$ – là tổng vectơ mômen các lực đối với $O$ :

$$\vec{M}^o = \sum_{j=1}^n \vec{m}_o(\vec{F}_j).$$

Nếu $O$ là gốc tọa độ, hình chiếu của vectơ mômen chính trên các trục tọa độ là bằng tổng mômen các lực đối với các trục

$$\overline{M}_{ox} = \sum_{j=1}^n \overline{m}_x(\vec{F}_j)\ ; \quad \overline{M}_{oy} = \sum_{j=1}^n \overline{m}_y(\vec{F}_j)\ ; \quad \overline{M}_{oz} = \sum_{j=1}^n \overline{m}_z(\vec{F}_j).$$

Từ đó suy ra trị số và cosin chỉ phương của vectơ mômen chính.

Trường hợp đặc biệt của hệ hai lực tạo thành ngẫu lực $(\vec{F}, \vec{F}^*)$, vectơ mômen chính không phụ thuộc điểm $O$ nên được gọi là mômen ngẫu lực – kí hiệu $\vec{M}$. Đó là vectơ có :
- Phương : thẳng góc với mặt tác dụng của ngẫu lực.
- Chiều : hướng về phía từ đó nhìn thấy ngẫu lực quay ngược chiều kim đồng hồ.
- Trị số $M = F \cdot d$, trong đó $d$ – tay đòn, khoảng cách giữa hai đường tác dụng của hai lực $\vec{F}, \vec{F}^*$.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_4.svg" alt="Hình 3-4" class="figure-img" />
  <p class="figure-caption">Hình 3-4</p>
</div>

Hình chiếu của vectơ mômen ngẫu lực lên một trục tọa độ là mômen ngẫu đối với trục đó.

---

### 3.1.4. Các phương trình cân bằng

**Định lí.** *Điều kiện cần và đủ để hệ lực không gian $\vec{F}_j$ ($j = 1, 2, \dots, n$) cân bằng là tổng hình chiếu các lực (vectơ chính $\vec{R}'$) và tổng mômen các lực (vectơ mômen chính $\vec{M}^o$) đối với các trục tọa độ đều triệt tiêu :*

$$\vec{R}' = 0 \begin{cases}
\overline{R}'_x = \displaystyle\sum_{j=1}^n \overline{F}_{jx} = 0, \\[8pt]
\overline{R}'_y = \displaystyle\sum_{j=1}^n \overline{F}_{jy} = 0, \\[8pt]
\overline{R}'_z = \displaystyle\sum_{j=1}^n \overline{F}_{jz} = 0.
\end{cases}\ ; \quad \vec{M}^o = 0 \begin{cases}
\overline{M}_{ox} = \displaystyle\sum_{j=1}^n \overline{m}_x(\vec{F}_j) = 0\ ; \\[8pt]
\overline{M}_{oy} = \displaystyle\sum_{j=1}^n \overline{m}_y(\vec{F}_j) = 0\ ; \\[8pt]
\overline{M}_{oz} = \displaystyle\sum_{j=1}^n \overline{m}_z(\vec{F}_j) = 0.
\end{cases}$$

Như thế, hệ lực không gian bất kì có $6$ phương trình cân bằng độc lập.

Trường hợp hệ lực đồng quy, còn lại ba phương trình, thường dùng ba phương trình hình chiếu.

$$\sum_{j=1}^n \overline{F}_{jx} = 0\ ; \quad \sum_{j=1}^n \overline{F}_{jy} = 0\ ; \quad \sum_{j=1}^n \overline{F}_{jz} = 0$$

Trường hợp hệ lực song song với trục $z$ cũng còn lại ba phương trình thường dùng là :

$$\sum_{j=1}^n \overline{F}_{jz} = 0\ ; \quad \sum_{j=1}^n \overline{m}_x(\vec{F}_j) = 0\ ; \quad \sum_{j=1}^n \overline{m}_y(\vec{F}_j) = 0.$$

Trường hợp hệ ngẫu lực còn lại ba phương trình, đó là tổng hình chiếu của các ngẫu lực lên ba trục tọa độ lần lượt triệt tiêu.

---

## 3.2. HƯỚNG DẪN ÁP DỤNG

Cách phân loại và phương pháp giải các bài toán không gian vẫn như các bài toán phẳng. Tuy nhiên chúng ta sẽ chỉ xét các bài toán tìm phản lực liên kết.

---

## 3.3. BÀI GIẢI MẪU

### 3.3.1. Bài toán một vật không gian

#### Thí dụ 3–1

Treo vật nặng $P$ vào đầu $O$ của giá đỡ tạo nên bởi ba thanh (không trọng lượng) gắn vào nhau và vào tường (H. 3–5). Biết $ABC$ là tam giác đều, đáy $BC$ nằm ngang : thanh $OA$ thẳng góc với tường, hai thanh $OB$ và $OC$ nghiêng $30^\circ$ với $OA$. Tìm ứng lực các thanh.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_5.svg" alt="Hình 3-5" class="figure-img" />
  <p class="figure-caption">Hình 3-5</p>
</div>

*Bài giải :* Xét nút $O$ chịu $4$ lực : trọng lực $\vec{P}$ và ba ứng lực $\vec{S}_A, \vec{S}_B, \vec{S}_C$ (giả thiết các thanh bị kéo, các ứng lực hướng về $A, B, C$). Chọn hệ trục $Axyz$ như trên hình vẽ. Chú ý rằng $\vec{S}_B, \vec{S}_C$ nghiêng $30^\circ$ với trục $y$ và hình chiếu của chúng lên mặt $Axy$ tương ứng nằm theo $AB$ và $AC$, chúng ta dễ dàng tính được các hình chiếu :

$$\begin{cases}
\overline{P}_x = 0, \\
\overline{P}_y = P, \\
\overline{P}_z = 0.
\end{cases} \quad \begin{cases}
\overline{S}_{Ax} = 0, \\
\overline{S}_{Ay} = 0, \\
\overline{S}_{Az} = -S_A.
\end{cases} \quad \begin{cases}
\overline{S}_{Bx} = S_B \cdot \dfrac{1}{2} \dfrac{1}{2}, \\[6pt]
\overline{S}_{By} = S_B \cdot \dfrac{1}{2} \cdot \dfrac{\sqrt{3}}{2}, \\[6pt]
\overline{S}_{Bz} = -S_B \cdot \dfrac{\sqrt{3}}{2}.
\end{cases} \quad \begin{cases}
\overline{S}_{Cx} = -S_C \cdot \dfrac{1}{2} \dfrac{1}{2}, \\[6pt]
\overline{S}_{Cy} = S_C \cdot \dfrac{1}{2} \cdot \dfrac{\sqrt{3}}{2}, \\[6pt]
\overline{S}_{Cz} = -S_C \cdot \dfrac{\sqrt{3}}{2}.
\end{cases}$$

Vì là hệ lực đồng quy nên có ba phương trình cân bằng :

$$\begin{aligned}
\sum \overline{F}_x &= S_B \cdot \frac{1}{4} - S_C \cdot \frac{1}{4} = 0, \\
\sum \overline{F}_y &= P + S_B \cdot \frac{\sqrt{3}}{4} + S_C \cdot \frac{\sqrt{3}}{4} = 0, \\
\sum \overline{F}_z &= -S_A - S_B \cdot \frac{\sqrt{3}}{2} - S_C \cdot \frac{\sqrt{3}}{2} = 0.
\end{aligned}$$

Kết quả : $S_B = S_C = -\dfrac{2}{3} P\sqrt{3}\ ; \quad S_A = -S_B\sqrt{3} = 2P$.

Vậy hai thanh $OB$ và $OC$ bị nén, thanh $OA$ bị kéo.

---

#### Thí dụ 3–2

Trên mặt đường nằm ngang, có xe ba bánh $ABC$ trọng lượng $P$, kích thước và vị trí trọng tâm của xe là $G$ và trọng tâm của các bánh xe là $A, B, C$. Cho $OG = 0,5\text{m}\ ; \ GA = 1\text{m}\ ; \ OC = OB = 0,5\text{m}$, (hình 3–6). Xác định lực do xe nén xuống mặt đường.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_6.svg" alt="Hình 3-6" class="figure-img" />
  <p class="figure-caption">Hình 3-6</p>
</div>

*Bài giải :* Xe chịu hệ $4$ lực song song : trọng lực $\vec{P}$, các phản lực $\vec{N}_A, \vec{N}_B, \vec{N}_C$ của mặt đường (trị số các phản lực bằng lực do xe nén xuống). Chọn hệ trục $Oxyz$ như trên hình :

Ta có :

$$\begin{cases}
\sum \overline{F}_z = N_A + N_B + N_C - P = 0, \\
\sum \overline{m}_x(\vec{F}) = -0,5P + 1,5N_A = 0, \\
\sum \overline{m}_y(\vec{F}) = 0,5N_B - 0,5N_C = 0.
\end{cases}$$

Kết quả giải ba phương trình :

$$N_A = N_B = N_C = \frac{P}{3}.$$

---

#### Thí dụ 3–3

Tấm hình vuông $ABCD$ được đỡ ở vị trí nằm ngang (H. 3–7) nhờ $6$ thanh. Bỏ qua trọng lượng của tấm và các thanh, kích thước cho trên hình. Tìm ứng lực các thanh khi có lực $\vec{Q}$ tác dụng dọc cạnh $AD$.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_7.svg" alt="Hình 3-7" class="figure-img" />
  <p class="figure-caption">Hình 3-7</p>
</div>

*Bài giải :* Tấm chịu tác dụng của $7$ lực : lực hoạt động $\vec{Q}$ và các ứng lực $\vec{S}_j$ ($j = 1, 2, \dots, 6$) (giả thiết các thanh bị kéo nên các ứng lực hướng xuống). Để tiện tính hình chiếu và mômen, hãy phân tích $\vec{S}_2, \vec{S}_4, \vec{S}_6$ ra các thành phần nằm ngang và thẳng đứng (mỗi thành phần có trị số $S_j \dfrac{\sqrt{2}}{2}$). Chọn hệ trục $Cxyz$ như hình vẽ và lập $6$ phương trình cân bằng :

$$\begin{cases}
\sum \overline{F}_x = S_4 \dfrac{\sqrt{2}}{2} = 0\ ; \quad \sum \overline{F}_y = -S_2 \dfrac{\sqrt{2}}{2} - S_6 \dfrac{\sqrt{2}}{2} + Q = 0\ ; \\[8pt]
\sum \overline{F}_z = -S_1 - S_2 \dfrac{\sqrt{2}}{2} - S_3 - S_4 \dfrac{\sqrt{2}}{2} - S_5 - S_6 \dfrac{\sqrt{2}}{2} = 0\ ; \\[8pt]
\sum \overline{m}_x(\vec{F}) = aS_1 = 0\ ; \quad \sum \overline{m}_z(\vec{F}) = aS_6 \dfrac{\sqrt{2}}{2} - aQ = 0\ ; \\[8pt]
\sum \overline{m}_y(\vec{F}) = -aS_4 \dfrac{\sqrt{2}}{2} - aS_5 - aS_6 \dfrac{\sqrt{2}}{2} = 0.
\end{cases}$$

Kết quả : $S_1 = S_2 = S_3 = S_4 = 0\ ; \quad S_5 = -Q\ ; \quad S_6 = Q\sqrt{2}$.

---

#### Thí dụ 3–4

Cánh cửa chữ nhật đồng chất $ABCD$, trọng lượng $P$, cạnh $AB = 2a$, $BC = 2b$ được mắc vào tường theo cạnh nằm ngang $AB$ nhờ gối cầu $A$ và bản lề $B$. Thanh $ED$ trọng lượng không đáng kể chống giữ cho cánh cửa cân bằng ở vị trí nghiêng $60^\circ$ với tường và tạo nên tam giác đều $AED$ trong mặt thẳng đứng. Tìm phản lực tại $A, B$ và ứng lực thanh $ED$, (H. 3–8).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_8.svg" alt="Hình 3-8" class="figure-img" />
  <p class="figure-caption">Hình 3-8</p>
</div>

*Bài giải.* Chọn hệ trục $Axyz$ như hình vẽ. Cánh cửa chịu tác dụng hệ lực – trọng lực $\vec{P}$ ; – ứng lực $\vec{S}$ của thanh (bị nén, ứng lực hướng lên) ; – các phản lực $\vec{X}_A, \vec{Y}_A, \vec{Z}_A$ của gối cầu $A$ và $\vec{Y}_B\ ; \ \vec{Z}_B$ của bản lề $B$.

Chú ý rằng $\vec{S}$ nằm trong mặt $EAy$ nên có hai thành phần $\vec{S}_y, \vec{S}_z$ với tay đòn tới $Ax$ tương ứng bằng $2b\sin 60^\circ = b\sqrt{3}$ và có trị số $S_y = S\dfrac{\sqrt{3}}{2}\ ; \ S_z = \dfrac{S}{2}$.

Cũng chú ý rằng đường tác dụng của $\vec{P}$ gặp mặt $xAy$ ở $I$ nằm cách trục $Ax$ đoạn $IH = b\dfrac{\sqrt{3}}{2}$ và cách trục $Ay$ đoạn $HA = a$.

Lập $6$ phương trình cân bằng :

$$\begin{aligned}
\sum \overline{F}_x &= X_A = 0\ ; \quad \sum \overline{F}_y = Y_A + Y_B + S\frac{\sqrt{3}}{2} = 0\ ; \\
\sum \overline{F}_z &= Z_A + Z_B - P + \frac{S}{2} = 0\ ; \\
\sum \overline{m}_x(\vec{F}) &= -P \cdot b\frac{\sqrt{3}}{2} + S\frac{\sqrt{3}}{2} \cdot b + \frac{S}{2} \cdot b\sqrt{3} = 0\ ; \\
\sum \overline{m}_y(\vec{F}) &= Z_B \cdot 2a - P \cdot a = 0\ ; \\
\sum \overline{m}_z(\vec{F}) &= -Y_B \cdot 2a = 0.
\end{aligned}$$

Kết quả : $X_A = 0\ ; \quad S = \dfrac{P}{2} = Z_B\ ; \quad Y_B = 0$.

$$Y_A = -P\frac{\sqrt{3}}{4}\ ; \quad Z_A = \frac{P}{4}.$$

---

#### Thí dụ 3–5

Trục máy $O_1O_2$ nằm ngang trên hai ổ đỡ (bản lề) $O_1, O_2$, mang theo hai đĩa đồng chất $A$ và $B$, trọng lượng $P_A$ và $P_B$. Đĩa $A$ chịu ngẫu lực $M$, đĩa $B$ có bán kính $R$ được cuốn dây trên vành, đầu dây tự do sau khi qua ròng rọc nhỏ $C$ có treo vật nặng $P$. Biết $O_1A = AO_2 = O_2B = a$, đoạn $BC$ nằm trên đường kính nằm ngang của đĩa $B$, góc nghiêng của nhánh dây giữa đĩa $B$ và ròng rọc $C$ là $\alpha$. Xác định ngẫu lực $M$ để trục cân bằng. Tìm các phản lực tại $O_1$ và $O_2$ (H. 3–9).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_9.svg" alt="Hình 3-9" class="figure-img" />
  <p class="figure-caption">Hình 3-9</p>
</div>

*Bài giải :* Chọn hệ trục $O_1xyz$ như hình vẽ. Xét cân bằng của trục kể cả hai đĩa dưới tác dụng của hệ lực – trọng lực $\vec{P}_A, \vec{P}_B$ ; ngẫu lực $M$ ; – lực kéo $\vec{P}$ đặt tại tiếp điểm của dây với đĩa $B$, nằm theo nhánh dây nghiêng ; – các phản lực $\vec{X}_1, \vec{Z}_1$ và $\vec{X}_2, \vec{Z}_2$.

Chú ý rằng vectơ mômen $\vec{M}$ nằm ngược chiều trục $y$ nên các hình chiếu $\overline{M}_x = 0, \overline{M}_y = -M, \overline{M}_z = 0$. Còn lực kéo $\vec{P}$ có thể phân tích ra hai thành phần song song với trục $x$ và $z$ và tương ứng có trị số $P_x = P\cos\alpha$ và $P_z = P\sin\alpha$.

Lập $5$ phương trình cân bằng (phương trình hình chiếu trên trục $y$ tự thỏa mãn).

$$\begin{aligned}
\sum \overline{F}_x &= X_1 + X_2 + P\cos\alpha = 0\ ; \\
\sum \overline{F}_z &= Z_1 + Z_2 - P\sin\alpha - P_A - P_B = 0\ ; \\
\sum \overline{m}_x(\vec{F}) &= -P_A \cdot a - P_B \cdot 3a + Z_2 2a - P\sin\alpha \cdot 3a = 0\ ; \\
\sum \overline{m}_y(\vec{F}) &= -M + P \cdot R = 0\ ; \\
\sum \overline{m}_z(\vec{F}) &= -X_2 \cdot 2a - P\cos\alpha \cdot 3a = 0.
\end{aligned}$$

Kết quả :

$$\begin{aligned}
X_1 &= \frac{P}{2}\cos\alpha\ ; \quad Z_1 = \frac{P_A}{2} - \frac{P_B}{2} - \frac{P}{2}\sin\alpha. \\
X_2 &= -\frac{3}{2}P\cos\alpha\ ; \quad Z_2 = \frac{P_A}{2} + \frac{3P_B}{2} + \frac{3}{2}P\sin\alpha. \\
M &= P \cdot R.
\end{aligned}$$

---

### 3.3.2. Bài toán hệ vật không gian

#### Thí dụ 3–6

Dàn không gian tạo bởi $6$ thanh (không trọng lượng) bố trí như trên hình 3–10. Tìm ứng lực các thanh khi nút $A$ chịu lực $\vec{P}$ tác dụng theo chiều từ $B$ đến $A$.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_10.svg" alt="Hình 3-10" class="figure-img" />
  <p class="figure-caption">Hình 3-10</p>
</div>

*Bài giải :* Quy dàn về hệ hai nút $A$ và $B$ có liên kết thanh $AB$ với nhau và với nền. Nút $A$ chịu $4$ lực $\vec{P}, \vec{S}_1, \vec{S}_2, \vec{S}_3$. Nút $B$ chịu $4$ lực : $\vec{S}'_3, \vec{S}_4, \vec{S}_5, \vec{S}_6$.

Giả thiết các thanh đều bị kéo nên ứng lực có chiều như hình vẽ. Chọn hệ trục như hình vẽ và lập với mỗi nút $3$ phương trình cân bằng :

Nút $A$ :

$$\begin{cases}
\sum \overline{F}_x = P - S_3 = 0, \\[6pt]
\sum \overline{F}_y = -S_1\dfrac{\sqrt{2}}{2} + S_2\dfrac{\sqrt{2}}{2} = 0, \\[6pt]
\sum \overline{F}_z = -S_1\dfrac{\sqrt{2}}{2} - S_2\dfrac{\sqrt{2}}{2} = 0.
\end{cases}$$

Nút $B$ :

$$\begin{cases}
\sum \overline{F}_x = S'_3 - S_6\dfrac{\sqrt{2}}{2} = 0 \quad (S'_3 = S_3), \\[6pt]
\sum \overline{F}_y = -S_4\dfrac{\sqrt{2}}{2} + S_5\dfrac{\sqrt{2}}{2} = 0, \\[6pt]
\sum \overline{F}_z = -S_4\dfrac{\sqrt{2}}{2} - S_5\dfrac{\sqrt{2}}{2} - S_6\dfrac{\sqrt{2}}{2} = 0
\end{cases}$$

Kết quả : $S_1 = S_2 = 0\ ; \quad S_3 = P\ ; \quad S_6 = S_3\sqrt{2} = P\sqrt{2}\ ;$

$$S_4 = S_5 = -\frac{S_6}{2} = -P\frac{\sqrt{2}}{2}.$$

---

#### Thí dụ 3–7

Hệ hai trục mang các bánh răng và đĩa không trọng lượng chịu lực và được đỡ bởi các ổ như hình 3–11. Bán kính các bánh răng $O_2, O_3$ là $R_2, R_3$. Bán kính đĩa $O_4$ là $R_4$. Hai bánh răng $O_2$ và $O_3$ ăn khớp tại $I$, lực tác dụng tương hỗ $\vec{R}$ nghiêng góc $\gamma$ với trục $AB$ và hình chiếu của $\vec{R}$ lên mặt bánh răng $O_2$ nghiêng góc $\beta$ với bán kính $O_2I$. Biết ngẫu lực $M$, tìm hiệu hai sức căng $T_1, T_2$ khi hệ cân bằng.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_11.svg" alt="Hình 3-11" class="figure-img" />
  <p class="figure-caption">Hình 3-11</p>
</div>

*Bài giải :* Phân lực $\vec{R}$ ra ba thành phần $\vec{R}_t, \vec{R}_n, \vec{R}_z$ theo tiếp tuyến, pháp tuyến (bán kính) và trục bánh răng $O_2$. Dễ dàng tính được :

$$R_z = R\cos\gamma\ ; \quad R_t = R\sin\gamma\sin\beta\ ; \quad R_n = R\sin\gamma\cos\beta.$$

Ngoài phản lực hai ổ đỡ $A, B$, trục $AB$ (kể cả đĩa $O_1$ và bánh răng $O_2$) còn chịu lực $\vec{R}$ (hướng xuống) và ngẫu lực $M$.

Lập phương trình mômen đối với trục $AB$ :

$$M - R\sin\gamma\sin\beta \cdot R_2 = 0.$$

Với trục $CD$ (kể cả hai bánh $O_3, O_4$), ngoài phản lực các ổ đỡ $C, D$ còn có các lực $\vec{R}', \vec{T}_1, \vec{T}_2\ ; \ (\vec{R}' = -\vec{R})$.

Lập phương trình mômen đối với $CD$ :

$$R\sin\gamma\sin\beta \cdot R_3 - (T_1 - T_2)R_4 = 0.$$

Khử $R$ giữa hai phương trình vừa thiết lập, ta được :

$$T_1 - T_2 = \frac{MR_3}{R_2R_4}.$$

---

## 3.4. BÀI TẬP

**3–1.** Vật nặng $P$ được treo vào đầu $O$ của giá treo tạo bởi ba thanh trọng lượng không đáng kể, gắn với nhau và với tường bằng các bản lề như hình 3–12. Tìm ứng lực của các thanh.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_12.svg" alt="Hình 3-12" class="figure-img" />
  <p class="figure-caption">Hình 3-12</p>
</div>

*Trả lời :* $S_A = -P\sqrt{2}.$

$S_B = S_C = P\sqrt{2}/2.$

---

**3–2.** Vật nặng $P = 100\text{N}$ được treo vào đầu $O$ của giá treo tạo bởi ba thanh, trọng lượng không đáng kể, gắn với nhau và với tường bằng các bản lề như hình 3–13. Tìm ứng lực của các thanh.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_13.svg" alt="Hình 3-13" class="figure-img" />
  <p class="figure-caption">Hình 3-13</p>
</div>

*Trả lời :* $S_A = -200\dfrac{\sqrt{3}}{3}\text{ N}.$

$S_C = S_D = 50\dfrac{\sqrt{6}}{3}\text{ N}.$

---

**3–3.** Để kéo vật nặng $P$ người ta dùng tời $E$ và giá ba chân $ABCD$ để đỡ ròng rọc $A$ như hình 3–14. Biết $BCD$ là tam giác đều có đường cao $DE$, ba chân $AB, AC, AD$ và dây $AE$ nghiêng đều $60^\circ$ với mặt đất nằm ngang. Tìm ứng lực của ba thanh (bỏ qua kích thước ròng rọc).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_14.svg" alt="Hình 3-14" class="figure-img" />
  <p class="figure-caption">Hình 3-14</p>
</div>

*Trả lời :* $S_D = -\dfrac{P}{9}(2\sqrt{3} - 3).$

$S_B = S_C = -\dfrac{2}{9}P(3 + \sqrt{3}).$

---

**3–4.** Bàn ba chân $A, B, C$ tạo thành tam giác đều cạnh $a$. Trọng lượng bàn là $P$ và trọng tâm nằm trên đường thẳng đứng $zOO_1$ qua tâm $O_1$ của tam giác $ABC$. Trên mặt bàn có điểm $M$ trọng lượng $p$ đặt ở điểm có tọa độ $x_1, y_1$ : trục $Oy$ song song với $AB$. Xác định phản lực tại các chân. (H. 3–15).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_15.svg" alt="Hình 3-15" class="figure-img" />
  <p class="figure-caption">Hình 3-15</p>
</div>

*Trả lời :*

$$\begin{aligned}
N_A &= \frac{P + p}{3} + \left(\frac{\sqrt{3}}{3}x_1 - y_1\right)\frac{p}{a}. \\
N_B &= \frac{P + p}{3} + \left(y_1 + \frac{\sqrt{3}}{3}x_1\right)\frac{p}{a}. \\
N_C &= \frac{P + p}{3} - 2\frac{\sqrt{3}}{3}\frac{x_1}{a}p.
\end{aligned}$$

---

**3–5.** Cho cần cẩu như hình 3–16. Biết $AD = DB = 1\text{m}\ ; \ CD = 1,5\text{m}\ ; \ CM = 1\text{m}\ ; \ KL = 4\text{m}$ ; trọng lượng cần cẩu (kể cả đối trọng) là $P = 100\text{kN}$, trọng tâm $G$ của cần cẩu nằm trong mặt $LMFN$ và cách $MN$ một đoạn $0,5\text{m}$, trọng lượng vật được cẩu là $Q = 30\text{kN}$. Tìm phản lực tại ba bánh xe khi mặt thẳng đứng $LMFN$ song song với $AB$.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_16.svg" alt="Hình 3-16" class="figure-img" />
  <p class="figure-caption">Hình 3-16</p>
</div>

*Trả lời :* $N_A \approx 8,3\text{kN}\ ; \quad N_B \approx 78,3\text{kN}\ ; \quad N_C \approx 43,4\text{kN}.$

---

**3–6.** Tấm tròn, trọng lượng không đáng kể, nằm ngang trên mũi nhọn ở tâm $O$ của tấm. Trên chu vi tấm tròn, đặt ba điểm nặng trọng lượng $P_1 = 1,5\text{N}$, $P_2 = 1\text{N}$ và $P_3 = 2\text{N}$ sao cho tấm tròn vẫn cân bằng. Xác định các góc $\alpha = \widehat{AOB}$, $\beta = \widehat{AOC}$, (H. 3–17).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_17.svg" alt="Hình 3-17" class="figure-img" />
  <p class="figure-caption">Hình 3-17</p>
</div>

*Trả lời :* $\alpha = 75^\circ 30', \quad \beta = 151^\circ.$

---

**3–7.** Tấm đồng chất hình vuông trọng lượng $P$ được đỡ ở vị trí nằm ngang nhờ $6$ thanh (không trọng lượng) như hình 3–18. Toàn hình có dạng khối lập phương, tìm ứng lực các thanh.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_18.svg" alt="Hình 3-18" class="figure-img" />
  <p class="figure-caption">Hình 3-18</p>
</div>

*Trả lời :* $S_1 = S_3 = S_4 = S_5 = 0\ ; \quad S_2 = S_6 = -\dfrac{P}{2}.$

---

**3–8.** Tấm không trọng lượng, chịu lực $P$ và được đỡ ở vị trí nằm ngang nhờ $6$ thanh (không trọng lượng) như hình 3–19. Toàn hình có dạng khối lập phương. Tìm ứng lực các thanh.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_19.svg" alt="Hình 3-19" class="figure-img" />
  <p class="figure-caption">Hình 3-19</p>
</div>

*Trả lời :*

$$\begin{aligned}
S_1 &= P, \quad S_2 = -P\sqrt{2}\ ; \\
S_3 &= -P\ ; \quad S_4 = P\sqrt{2}\ ; \\
S_5 &= P\sqrt{2}\ ; \quad S_6 = -P.
\end{aligned}$$

---

**3–9.** Xét tấm như trong bài 3–7 nhưng bỏ qua trọng lượng và tấm chịu tác dụng của ngẫu lực $M$ nằm trong mặt phẳng của tấm, ngược chiều kim đồng hồ. Tìm ứng lực các thanh, cho biết tấm có cạnh $a$.

*Trả lời :*

$$\begin{aligned}
S_1 &= S_5 = \frac{M}{a}\sqrt{2}\ ; \\
S_2 &= S_6 = -\frac{M}{a}\ ; \\
S_3 &= S_4 = 0.
\end{aligned}$$

---

**3–10.** Tấm đồng chất hình chữ nhật, trọng lượng $200\text{N}$ mắc vào tường nhờ gối cầu $A$, bản lề $B$ và được giữ cân bằng ở vị trí nằm ngang nhờ dây $CE$ nghiêng $60^\circ$ với đường thẳng đứng $AE$. Biết đường chéo $AC$ nghiêng $30^\circ$ với cạnh $AB$, tìm phản lực tại $A, B$ và sức căng của dây (H. 3–20).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_20.svg" alt="Hình 3-20" class="figure-img" />
  <p class="figure-caption">Hình 3-20</p>
</div>

*Trả lời :* $T = 200\text{N}\ ; \quad X_A = 86,6\text{N}\ ; \quad Y_A = 150\text{N}\ ;$

$Z_A = 100\text{N}\ ; \quad X_B = Z_B = 0.$

---

**3–11.** Tấm chữ nhật $ABCD$ đồng chất trọng lượng $120\text{N}$, gắn với nền nhờ hai bản lề $A, B$ và được đỡ cân bằng ở vị trí nghiêng $60^\circ$ với mặt nằm ngang nhờ thanh không trọng lượng $ED = DA$ nằm trong mặt thẳng đứng qua $AD$. Tìm các phản lực bản lề và ứng lực của thanh (H. 3–21).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_21.svg" alt="Hình 3-21" class="figure-img" />
  <p class="figure-caption">Hình 3-21</p>
</div>

*Trả lời :* $S = 34,5\text{N}\ ; \quad Y_A = 17,3\text{N},$

$Z_A = 30\text{N}\ ; \quad Y_B = 0\ ;$

$Z_B = 60\text{N}.$

---

**3–12.** Cánh cửa đồng chất hình chữ nhật $ABCD$, trọng lượng $P$, chiều dài $AB = a\sqrt{3}$, chiều rộng $AD = a$, có trục quay thẳng đứng $AB$ với hai gối đỡ cầu $A$ và bản lề $B$. Cửa được mở rộng góc $120^\circ$ với khuôn cửa, đầu $D$ chịu lực $Q$ nằm song song với cạnh dưới $EA$ của khuôn, đầu $C$ được giữ bởi dây $CE$. Tìm sức căng của dây và phản lực các ổ đỡ (H. 3–22).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_22.svg" alt="Hình 3-22" class="figure-img" />
  <p class="figure-caption">Hình 3-22</p>
</div>

*Trả lời :*

$$\begin{aligned}
T &= Q\sqrt{6}\ ; \quad X_A = \frac{P}{4} + \frac{Q\sqrt{3}}{2}, \quad Y_A = P\frac{\sqrt{3}}{12} + Q\ ; \quad Z_A = P + Q\sqrt{3}\ ; \\
X_B &= -\frac{P}{4}\ ; \quad Y_B = -\frac{Q}{2} - \frac{P\sqrt{3}}{12}.
\end{aligned}$$

---

**3–13.** Trục $AB$ nằm ngang trên hai ổ đỡ bản lề $A, B$, mang theo đĩa $C$ và thanh $DE$ đều có trọng lượng không đáng kể. Trục cân bằng dưới tác dụng của hai vật nặng $Q = 250\text{N}$ treo ở đầu dây cuốn quanh vành đĩa và $P = 1\text{kN}$ gắn vào đầu $E$. Biết $DE \perp AB$ và nghiêng $30^\circ$ với đường thẳng đứng, bán kính đĩa là $20\text{cm}$, các kích thước khác ghi trên hình 3–23. Tìm chiều dài $DE = l$ và phản lực các ổ đỡ.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_23.svg" alt="Hình 3-23" class="figure-img" />
  <p class="figure-caption">Hình 3-23</p>
</div>

*Trả lời :* $l = 10\text{cm}\ ; \quad Z_A = 300\text{N}\ ; \quad Z_B = 950\text{N}\ ; \quad X_A = X_B = 0.$

---

**3–14.** Hai ổ $A, B$ (bản lề) đỡ trục nằm ngang $AB$ mang theo đĩa $C$ và khối trụ $AB$ ; bán kính đĩa gấp $6$ lần bán kính khối trụ. Quanh trụ cuốn dây treo vật $Q$ ; quanh vành đĩa cũng cuốn dây, đầu tự do treo vật $P = 60\text{N}$ sau khi vòng qua ròng rọc nhỏ $D$. Kích thước cho trên hình 3–24, nhánh dây giữa đĩa và ròng rọc nằm trong mặt phẳng của đĩa và nghiêng với đường kính nằm ngang của đĩa một góc $\alpha = 30^\circ$. Tìm $Q$ và các phản lực ổ đỡ khi cân bằng.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_24.svg" alt="Hình 3-24" class="figure-img" />
  <p class="figure-caption">Hình 3-24</p>
</div>

*Trả lời :* $Q = 360\text{N}\ ; \quad X_A = -69,3\text{N}\ ;$

$Z_A = 160\text{N}\ ; \quad X_B = 17,3\text{N}\ ;$

$Z_B = 230\text{N}.$

---

**3–15.** Trục thẳng $AB$ được đỡ bởi ổ bản lề $A$ và ổ cối $B$, mang theo đĩa $C$ và rôto $D$. Tổng trọng lượng đĩa và rôto là $Q = 200\text{N}$. Đĩa $C$ có bán kính $10\text{cm}$ với hai nhánh đai truyền song song có sức căng $T_1 = 100\text{N}$ và $T_2 = 50\text{N}$. Tìm mômen ngẫu lực $(\vec{P}, \vec{P}^*)$ cần tác dụng vào rôto để có cân bằng và các phản lực tại $A, B$. Kích thước khác cho trên hình 3–25.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_25.svg" alt="Hình 3-25" class="figure-img" />
  <p class="figure-caption">Hình 3-25</p>
</div>

*Trả lời :* $M = 5\text{Nm}\ ; \quad Z_B = 200\text{N}\ ;$

$X_A = X_B = 0\ ; \quad Y_B = 30\text{N}\ ;$

$Y_A = -180\text{N}.$

---

**3–16.** Dầm nằm ngang $OC$ đồng chất, trọng lượng $P = 1000\text{N}$, dài $2\text{m}$, chịu tác dụng của ngẫu lực $(\vec{Q}, \vec{Q}')$ trong mặt nằm ngang trị số $Q = 100\text{N}$ tay đòn $EF = 20\text{cm}$. Dầm liên kết với tường nhờ gối cầu $O$ và hai dây $AB$ và $CD$ bố trí như hình 3–26. Cho $OB = 0,5\text{m}$. Tìm phản lực tại $O$ và sức căng các dây.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_26.svg" alt="Hình 3-26" class="figure-img" />
  <p class="figure-caption">Hình 3-26</p>
</div>

*Trả lời :* $T_{DC} = 1000\text{N}\ ; \quad T_{AB} = 80\text{N}\ ;$

$X_o = -40\text{N}\ ; \quad Y_o = 540\sqrt{3}\text{ N}\ ; \quad Z_o = 500\text{N}.$

---

**3–17.** Cột $AB$ của cần trục được giữ ở vị trí thẳng đứng nhờ cối $A$ và hai thanh không trọng lượng $BC$ và $BD$. Vật được cẩu có trọng lượng $P$ treo ở móc $G$ liên kết với cột nhờ dây $BG$ và thanh $EG$ (trọng lượng không đáng kể). Biết $E$ ở giữa $AB$, các góc cần thiết cho trên hình 3–27. Tìm phản lực ở $A$, sức căng dây $BG$ và ứng lực các thanh.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_27.svg" alt="Hình 3-27" class="figure-img" />
  <p class="figure-caption">Hình 3-27</p>
</div>

*Trả lời :*

$$\begin{aligned}
T &= P\ ; \quad S_{EG} = -P\sqrt{2}\ ; \\
S_{BC} &= P\frac{\sqrt{3}}{2}\ ; \quad S_{BD} = -\frac{P}{2}\ ; \\
X_A &= -\frac{P}{4}\ ; \quad Y_A = P\frac{\sqrt{3}}{4}\ ; \quad Z_A = \frac{P}{4}(7 + \sqrt{3}).
\end{aligned}$$

---

**3–18.** Thanh đồng chất $AA_1 = 2r$, trọng lượng $P$ bị treo bởi hai dây thẳng đứng $AB = A_1B_1 = l$. Tác dụng vào thanh một ngẫu lực mômen $M$ trong mặt nằm ngang làm thanh bị quay một góc $\alpha$ quanh trục trung trực thẳng đứng của nó (thanh được nâng cao nhưng vẫn nằm ngang). Xác định mômen $M$ theo góc $\alpha$ và tìm sức căng của dây (H. 3–28).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_28.svg" alt="Hình 3-28" class="figure-img" />
  <p class="figure-caption">Hình 3-28</p>
</div>

*Trả lời :*

$$\begin{aligned}
M &= \frac{Pr^2\sin\alpha}{\sqrt{l^2 - 4r^2\sin^2\dfrac{\alpha}{2}}}\ ; \\[8pt]
T &= \frac{lP}{2\sqrt{l^2 - 4r^2\sin^2\dfrac{\alpha}{2}}}.
\end{aligned}$$

---

**3–19.** Bánh đai $D$ có trục nằm ngang gắn chặt vào tấm $ED$ nằm trong mặt phẳng thẳng đứng và bị ngàm vào trần ở $E$. Vòng qua bánh đai là đai hai nhánh song song, nghiêng $30^\circ$ với đường thẳng đứng và có cùng sức căng $T = 1200\text{N}$. Bỏ qua trọng lượng bánh đai, cho $FD = 50\text{cm}$, $EF = 40\text{cm}$, tìm các phản lực ở ngàm $E$ (H. 3–29).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_29.svg" alt="Hình 3-29" class="figure-img" />
  <p class="figure-caption">Hình 3-29</p>
</div>

*Trả lời :* $X_E = 0\ ; \quad Y_E = -1200\text{N}\ ;$

$Z_E = -1200\sqrt{3}\text{ N}\ ;$

$M_y = 600\sqrt{3}\text{Nm}\ ; \quad M_x = -480\text{Nm}\ ; \quad M_z = 600\text{Nm}.$

---

**3–20.** Cho giàn không gian $6$ thanh như hình 3–30 (các thanh không trọng lượng, $AB$ nằm ngang, $ABCD$ là chữ nhật nằm trong mặt thẳng đứng). Nút $A$ chịu tác dụng lực $P = 1\text{kN}$ nằm trong mặt $ABCD$ và nghiêng $45^\circ$ với $AC$. Tìm ứng lực các thanh.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_30.svg" alt="Hình 3-30" class="figure-img" />
  <p class="figure-caption">Hình 3-30</p>
</div>

*Trả lời :*

$$\begin{aligned}
S_1 &= S_2 = -0,5\text{kN} = -S_4 = -S_5\ ; \\
S_3 &= -\frac{\sqrt{2}}{2}\text{kN}\ ; \quad S_6 = -1\text{kN}.
\end{aligned}$$

---

**3–21.** Cho dàn không gian $6$ thanh như hình 3–31. (các thanh không trọng lượng, $ABCD$ nằm trong mặt thẳng đứng vuông góc với tường). Tại nút $A$, tác dụng lực thẳng đứng $P$. Tìm ứng lực các thanh.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_31.svg" alt="Hình 3-31" class="figure-img" />
  <p class="figure-caption">Hình 3-31</p>
</div>

*Trả lời :*

$$\begin{aligned}
S_1 &= S_2 = P\frac{\sqrt{6}}{6}\ ; \\
S_3 &= -2P\frac{\sqrt{3}}{3}\ ; \\
S_4 &= S_5 = P\frac{\sqrt{6}}{3}(\sqrt{3} - 1).
\end{aligned}$$

---

**3–22.** Hai tấm hình chữ nhật đồng chất $ABCD, A'B'C'D'$ cùng trọng lượng $P$, chiều dài $AB = A'B' = a$, chiều rộng $AD = A'D' = b$ được mắc bằng bản lề $A, B, A', B'$ với nền ngang và với nhau bằng bản lề $E$ như hình 3–32, $AA'D$ tạo thành tam giác đều. Cho $DE = \dfrac{a}{4}$, tìm phản lực các bản lề.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_32.svg" alt="Hình 3-32" class="figure-img" />
  <p class="figure-caption">Hình 3-32</p>
</div>

*Trả lời :*

$$\begin{aligned}
Y_E &= P\frac{\sqrt{3}}{6}\ ; \quad Z_E = 0\ ; \\
Y_A &= -Y_{A'} = -P\frac{\sqrt{3}}{8}\ ; \quad Z_A = Z_{A'} = \frac{P}{2} = Z_B = Z_{B'}\ ; \\
Y_B &= -Y_{B'} = -P\frac{\sqrt{3}}{24}.
\end{aligned}$$

---

**3–23.** Trên hình 3–33 là hệ hai trục song song nằm ngang $AB$ và $CD$ mang hai bánh răng $O$ và $O'$ ăn khớp với nhau ở $I$. Biết $AB = 1\text{m}$, $BO = CO' = O'D = 0,5\text{m}$, bán kính hai bánh răng là $0,40\text{m}$, pháp tuyến chung $In$ của hai mặt răng tại $I$ nghiêng góc $\alpha$ với $OO'$. Bánh răng $O'$ có tầng trong bán kính $0,2\text{m}$ quanh nó cuốn dây, đầu dây tự do treo vật nặng $P = 1\text{kN}$. Để giữ cân bằng, đặt ngẫu lực $M$ vào rôto trên trục $AB$. Bỏ qua trọng lượng các bánh răng và rôto, tìm ngẫu lực cần thiết, phản lực các ổ đỡ (bản lề) $A, B, C, D$ và lực tác dụng tương hỗ tại $I$.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_33.svg" alt="Hình 3-33" class="figure-img" />
  <p class="figure-caption">Hình 3-33</p>
</div>

*Trả lời :*

$$\begin{aligned}
Y_C &= Y_D = -\frac{P}{4}\operatorname{cotg}\alpha\ ; \\
Z_C &= Z_D = \frac{3P}{4}\ ; \quad N_I = \frac{P}{2\sin\alpha}\ ; \\
M &= 0,2P\ ; \quad Y_A = -\frac{P}{4}\operatorname{cotg}\alpha\ ; \\
Z_A &= \frac{P}{4}\ ; \quad Y_B = 0,75P\operatorname{cotg}\alpha\ ; \quad Z_B = -0,75P.
\end{aligned}$$

---

**3–24.** Trục nằm ngang $AB$ mang bánh răng ăn khớp với bánh răng $E$, bánh răng này cùng với bánh đai $F$ lắp trên trục thẳng đứng $GD$. Ngẫu lực $M$ đặt trên rôto $AB$ cân bằng với hai sức căng $T_1, T_2$ của hai nhánh đai truyền vòng qua bánh đai $F$, hai nhánh này song song với $AB$ và có tổng sức căng $T_1 + T_2 = S$. Bỏ qua trọng lượng rôto và các bánh, bán kính các bánh đều bằng $0,2\text{m}$, đoạn $AB = 0,6\text{m}\ ; \ BC = 0,4\text{m}\ ; \ GF = FE = ED = 0,5\text{m}$ ; lực truyền từ bánh răng $C$ sang bánh răng $E$ nằm trong mặt phẳng của bánh răng $C$ và nghiêng với tiếp tuyến chung tại $I$ của hai bánh một góc $\alpha$. Tính sức căng $T_1, T_2$ khi cân bằng, tính phản lực các ổ đỡ bản lề $A, B, D$ và ổ đỡ $G$, tính lực tác dụng tương hỗ tại $I$, (H. 3–34).

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_34.svg" alt="Hình 3-34" class="figure-img" />
  <p class="figure-caption">Hình 3-34</p>
</div>

*Trả lời :*

$$\begin{aligned}
Y_A &= -\frac{10}{3}M\ ; \quad Z_A = \frac{10}{3}M\operatorname{tg}\alpha\ ; \\
Y_B &= \frac{25}{3}M\ ; \quad Z_B = -\frac{25}{3}M\operatorname{tg}\alpha\ ; \\
N_1 &= \frac{5M}{\cos\alpha}\ ; \quad T_1 = \frac{S + 5M}{2}\ ; \quad T_2 = \frac{S - 5M}{2}\ ; \\
X_D &= +\frac{S}{3} - \frac{2}{3}M\operatorname{tg}\alpha\ ; \quad Y_D = -\frac{10M}{3}\ ; \\
X_G &= \frac{4}{3}S + \frac{2}{3}M\operatorname{tg}\alpha\ ; \quad Y_G = -\frac{5M}{3}\ ; \quad Z_G = 5M\operatorname{tg}\alpha.
\end{aligned}$$

---

**3–25.** Giá $3$ chân $ABDE$ dạng chóp đều, có liên kết gối cầu với hai dầm công xôn nằm ngang song song với nhau. Tại $E$ có ròng rọc nhỏ, vòng qua đó là sợi dây, đầu dây tự do treo vật nặng $P$, nhánh dây thứ hai nằm ngang song song với $AB$ và cuốn vào trục môtơ. Bỏ qua trọng lượng của các chân giá $ABD$, trọng lượng và bề dày các dầm công xôn, các kích thước khác ghi trên hình 3–35. Tìm phản lực ngàm $O$ của dầm công xôn đỡ hai chân $A$ và $B$.

<div class="figure-container">
  <img src="/figures/bai-tap/tinh-hoc/hinh_3_35.svg" alt="Hình 3-35" class="figure-img" />
  <p class="figure-caption">Hình 3-35</p>
</div>

*Trả lời :*

$$\begin{aligned}
X_o &= -P\frac{\sqrt{3}}{9}\ ; \quad Y_o = P\ ; \\
Z_o &= \frac{2}{3}P\ ; \quad M_x = -\frac{9}{15}Pl\ ; \\
M_y &= -\frac{\sqrt{3}}{90}Pl\ ; \quad M_z = -\frac{\sqrt{3}}{36}Pl.
\end{aligned}$$
