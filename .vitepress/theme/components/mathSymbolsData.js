// Comprehensive Math & Theoretical Mechanics Symbols + Command Shortcuts
// Conflict-free design:
// - Supports BOTH /cmd and \cmd
// - Only triggers when '/' or '\' is at the start of a token (never inside m/s, rad/s, dv/dt, a/b, 1/2!)
// - No 1-letter slash aliases that could collide with algebraic division

export const MATH_CATEGORIES = [
  { id: 'all', name: 'Tất cả' },
  { id: 'mechanics', name: 'Cơ học & Vectơ' },
  { id: 'greek', name: 'Chữ Hy Lạp' },
  { id: 'operators', name: 'Toán tử & Giải tích' },
  { id: 'relations', name: 'Quan hệ & Mũi tên' },
  { id: 'subsup', name: 'Mũ & Chỉ số' },
  { id: 'cheatsheet', name: 'Cheatsheet Lệnh' }
]

export const MATH_SYMBOLS = [
  // === 1. CƠ HỌC & VECTƠ (MECHANICS & VECTORS) ===
  { symbol: 'F\u20d7', cmd: '/vF', aliases: ['/vec{F}', '/vec(F)'], label: 'Vectơ lực F', category: 'mechanics' },
  { symbol: 'R\u20d7', cmd: '/vR', aliases: ['/vec{R}', '/vec(R)'], label: 'Hợp lực / Phản lực R', category: 'mechanics' },
  { symbol: 'N\u20d7', cmd: '/vN', aliases: ['/vec{N}', '/vec(N)'], label: 'Phản lực pháp tuyến N', category: 'mechanics' },
  { symbol: 'P\u20d7', cmd: '/vP', aliases: ['/vec{P}', '/vec(P)'], label: 'Trọng lực P', category: 'mechanics' },
  { symbol: 'Q\u20d7', cmd: '/vQ', aliases: ['/vec{Q}', '/vec(Q)'], label: 'Lực Q', category: 'mechanics' },
  { symbol: 'T\u20d7', cmd: '/vT', aliases: ['/vec{T}', '/vec(T)'], label: 'Lực căng dây T', category: 'mechanics' },
  { symbol: 'S\u20d7', cmd: '/vS', aliases: ['/vec{S}', '/vec(S)'], label: 'Ứng lực / Xung lượng S', category: 'mechanics' },
  { symbol: 'M\u20d7', cmd: '/vM', aliases: ['/vec{M}', '/vec(M)'], label: 'Vectơ mômen M', category: 'mechanics' },
  { symbol: 'v\u20d7', cmd: '/vv', aliases: ['/vec{v}', '/vec(v)'], label: 'Vectơ vận tốc v', category: 'mechanics' },
  { symbol: 'a\u20d7', cmd: '/va', aliases: ['/vec{a}', '/vec(a)'], label: 'Vectơ gia tốc a', category: 'mechanics' },
  { symbol: 'r\u20d7', cmd: '/vr', aliases: ['/vec{r}', '/vec(r)'], label: 'Bán kính vectơ r', category: 'mechanics' },
  { symbol: 'ω\u20d7', cmd: '/vw', aliases: ['/vomega', '/vec{omega}', '/vec(omega)'], label: 'Vectơ vận tốc góc ω', category: 'mechanics' },
  { symbol: 'ε\u20d7', cmd: '/veps', aliases: ['/vec{eps}', '/vec(eps)'], label: 'Vectơ gia tốc góc ε', category: 'mechanics' },
  { symbol: 'τ\u20d7', cmd: '/vtau', aliases: ['/vec{tau}', '/vec(tau)'], label: 'Vectơ đơn vị tiếp tuyến τ', category: 'mechanics' },
  { symbol: 'n\u20d7', cmd: '/vn', aliases: ['/vec{n}', '/vec(n)'], label: 'Vectơ đơn vị pháp tuyến n', category: 'mechanics' },
  { symbol: 'b\u20d7', cmd: '/vb', aliases: ['/vec{b}', '/vec(b)'], label: 'Vectơ trùng pháp tuyến b', category: 'mechanics' },
  { symbol: 'K\u20d7', cmd: '/vK', aliases: ['/vec{K}', '/vec(K)'], label: 'Vectơ động lượng K', category: 'mechanics' },
  { symbol: 'L\u20d7', cmd: '/vL', aliases: ['/vec{L}', '/vec(L)'], label: 'Mômen động lượng L', category: 'mechanics' },
  { symbol: 'x\u0307', cmd: '/dx', aliases: ['/dot{x}', '/dot(x)'], label: 'Đạo hàm bậc 1 ẋ', category: 'mechanics' },
  { symbol: 'x\u0308', cmd: '/ddx', aliases: ['/ddot{x}', '/ddot(x)'], label: 'Đạo hàm bậc 2 ẍ', category: 'mechanics' },
  { symbol: 'y\u0307', cmd: '/dy', aliases: ['/dot{y}', '/dot(y)'], label: 'Đạo hàm bậc 1 ẏ', category: 'mechanics' },
  { symbol: 'y\u0308', cmd: '/ddy', aliases: ['/ddot{y}', '/ddot(y)'], label: 'Đạo hàm bậc 2 ÿ', category: 'mechanics' },
  { symbol: 's\u0307', cmd: '/ds', aliases: ['/dot{s}', '/dot(s)'], label: 'Vận tốc cong ṡ', category: 'mechanics' },
  { symbol: 's\u0308', cmd: '/dds', aliases: ['/ddot{s}', '/ddot(s)'], label: 'Gia tốc tiếp s̈', category: 'mechanics' },
  { symbol: 'φ\u0307', cmd: '/dphi', aliases: ['/dot{phi}', '/dot(phi)'], label: 'Vận tốc góc φ̇', category: 'mechanics' },
  { symbol: 'φ\u0308', cmd: '/ddphi', aliases: ['/ddot{phi}', '/ddot(phi)'], label: 'Gia tốc góc φ̈', category: 'mechanics' },
  { symbol: 'q\u0307', cmd: '/dq', aliases: ['/dot{q}', '/dot(q)'], label: 'Vận tốc suy rộng q̇', category: 'mechanics' },
  { symbol: 'q\u0308', cmd: '/ddq', aliases: ['/ddot{q}', '/ddot(q)'], label: 'Gia tốc suy rộng q̈', category: 'mechanics' },
  { symbol: 'vₐ', cmd: '/v_a', aliases: ['v_a'], label: 'Vận tốc tuyệt đối vₐ', category: 'mechanics' },
  { symbol: 'vₑ', cmd: '/v_e', aliases: ['v_e'], label: 'Vận tốc theo vₑ', category: 'mechanics' },
  { symbol: 'vᵣ', cmd: '/v_r', aliases: ['v_r'], label: 'Vận tốc tương đối vᵣ', category: 'mechanics' },
  { symbol: 'aₙ', cmd: '/a_n', aliases: ['a_n'], label: 'Gia tốc pháp tuyến aₙ', category: 'mechanics' },
  { symbol: 'aₜ', cmd: '/a_t', aliases: ['a_t'], label: 'Gia tốc tiếp tuyến aₜ', category: 'mechanics' },
  { symbol: 'a_C', cmd: '/aC', aliases: ['/ac'], label: 'Gia tốc Coriolis / khối tâm', category: 'mechanics' },
  { symbol: 'F_ms', cmd: '/fms', aliases: ['/Fms'], label: 'Lực ma sát F_ms', category: 'mechanics' },
  { symbol: 'F_qt', cmd: '/fqt', aliases: ['/Fqt'], label: 'Lực quán tính F_qt', category: 'mechanics' },
  { symbol: 'δr\u20d7', cmd: '/deltar', aliases: ['/dr'], label: 'Di chuyển khả dĩ δr⃗', category: 'mechanics' },
  { symbol: 'δA', cmd: '/deltaA', aliases: ['/dA'], label: 'Công khả dĩ δA', category: 'mechanics' },
  { symbol: '∑Fₓ = 0', cmd: '/sumFx', aliases: ['/sfx'], label: 'Phương trình chiếu trục Ox', category: 'mechanics' },
  { symbol: '∑Fᵧ = 0', cmd: '/sumFy', aliases: ['/sfy'], label: 'Phương trình chiếu trục Oy', category: 'mechanics' },
  { symbol: '∑m_O(F\u20d7ₖ) = 0', cmd: '/sumM', aliases: ['/sm'], label: 'Phương trình cân bằng mômen', category: 'mechanics' },

  // === 2. CHỮ HY LẠP (GREEK LETTERS) ===
  { symbol: 'α', cmd: '/alpha', aliases: ['/al'], label: 'Alpha (góc α)', category: 'greek' },
  { symbol: 'β', cmd: '/beta', aliases: ['/be'], label: 'Beta (góc β)', category: 'greek' },
  { symbol: 'γ', cmd: '/gamma', aliases: ['/ga'], label: 'Gamma (trọng lượng riêng γ)', category: 'greek' },
  { symbol: 'Γ', cmd: '/Gamma', aliases: [], label: 'Gamma hoa (Γ)', category: 'greek' },
  { symbol: 'δ', cmd: '/delta', aliases: ['/del'], label: 'Delta thường / biến phân δ', category: 'greek' },
  { symbol: 'Δ', cmd: '/Delta', aliases: ['/Del'], label: 'Delta hoa (độ biến thiên Δ)', category: 'greek' },
  { symbol: 'ε', cmd: '/eps', aliases: ['/varepsilon', '/epsilon'], label: 'Epsilon (gia tốc góc ε)', category: 'greek' },
  { symbol: 'ζ', cmd: '/zeta', aliases: [], label: 'Zeta (ζ)', category: 'greek' },
  { symbol: 'η', cmd: '/eta', aliases: [], label: 'Eta (hiệu suất η)', category: 'greek' },
  { symbol: 'θ', cmd: '/theta', aliases: ['/th'], label: 'Theta (góc nghiêng θ)', category: 'greek' },
  { symbol: 'Θ', cmd: '/Theta', aliases: [], label: 'Theta hoa (Θ)', category: 'greek' },
  { symbol: 'κ', cmd: '/kappa', aliases: [], label: 'Kappa (độ cong κ)', category: 'greek' },
  { symbol: 'λ', cmd: '/lambda', aliases: ['/lam'], label: 'Lambda (nhân tử / độ giãn λ)', category: 'greek' },
  { symbol: 'Λ', cmd: '/Lambda', aliases: [], label: 'Lambda hoa (Λ)', category: 'greek' },
  { symbol: 'μ', cmd: '/mu', aliases: [], label: 'Mu (hệ số ma sát μ)', category: 'greek' },
  { symbol: 'ν', cmd: '/nu', aliases: [], label: 'Nu (tần số ν)', category: 'greek' },
  { symbol: 'ξ', cmd: '/xi', aliases: [], label: 'Xi (tọa độ ξ)', category: 'greek' },
  { symbol: 'π', cmd: '/pi', aliases: [], label: 'Số Pi (π ≈ 3.1416)', category: 'greek' },
  { symbol: 'Π', cmd: '/Pi', aliases: [], label: 'Pi hoa (thế năng Π)', category: 'greek' },
  { symbol: 'ρ', cmd: '/rho', aliases: [], label: 'Rho (bán kính cong / khối lượng riêng ρ)', category: 'greek' },
  { symbol: 'σ', cmd: '/sigma', aliases: ['/sig'], label: 'Sigma thường (ứng suất σ)', category: 'greek' },
  { symbol: 'Σ', cmd: '/Sigma', aliases: [], label: 'Sigma hoa (Σ)', category: 'greek' },
  { symbol: 'τ', cmd: '/tau', aliases: [], label: 'Tau (tiếp tuyến / thời gian τ)', category: 'greek' },
  { symbol: 'φ', cmd: '/phi', aliases: ['/varphi'], label: 'Phi (góc quay φ)', category: 'greek' },
  { symbol: 'Φ', cmd: '/Phi', aliases: [], label: 'Phi hoa (Φ)', category: 'greek' },
  { symbol: 'χ', cmd: '/chi', aliases: [], label: 'Chi (χ)', category: 'greek' },
  { symbol: 'ψ', cmd: '/psi', aliases: [], label: 'Psi (góc tiến động ψ)', category: 'greek' },
  { symbol: 'Ψ', cmd: '/Psi', aliases: [], label: 'Psi hoa (Ψ)', category: 'greek' },
  { symbol: 'ω', cmd: '/omega', aliases: ['/om'], label: 'Omega (vận tốc góc ω)', category: 'greek' },
  { symbol: 'Ω', cmd: '/Omega', aliases: ['/Om'], label: 'Omega hoa (tốc độ tiến động Ω)', category: 'greek' },

  // === 3. TOÁN TỬ & GIẢI TÍCH (OPERATORS & CALCULUS) ===
  { symbol: '∑', cmd: '/sum', aliases: [], label: 'Tổng xích-ma (∑)', category: 'operators' },
  { symbol: '∏', cmd: '/prod', aliases: [], label: 'Tích (∏)', category: 'operators' },
  { symbol: '∫', cmd: '/int', aliases: [], label: 'Tích phân (∫)', category: 'operators' },
  { symbol: '∬', cmd: '/iint', aliases: [], label: 'Tích phân kép (∬)', category: 'operators' },
  { symbol: '∭', cmd: '/iiint', aliases: [], label: 'Tích phân bội ba (∭)', category: 'operators' },
  { symbol: '∮', cmd: '/oint', aliases: [], label: 'Tích phân đường kín (∮)', category: 'operators' },
  { symbol: '∂', cmd: '/part', aliases: ['/partial', '/pd'], label: 'Đạo hàm riêng (∂)', category: 'operators' },
  { symbol: '∇', cmd: '/nabla', aliases: ['/grad'], label: 'Toán tử Nabla / Gradient (∇)', category: 'operators' },
  { symbol: '√', cmd: '/sqrt', aliases: ['/root'], label: 'Căn bậc hai (√)', category: 'operators' },
  { symbol: '∛', cmd: '/cbrt', aliases: [], label: 'Căn bậc ba (∛)', category: 'operators' },
  { symbol: '∞', cmd: '/inf', aliases: ['/infty'], label: 'Vô cùng / Tâm ở vô cực (∞)', category: 'operators' },
  { symbol: '±', cmd: '/pm', aliases: ['+-'], label: 'Cộng trừ (±)', category: 'operators' },
  { symbol: '∓', cmd: '/mp', aliases: ['-+'], label: 'Trừ cộng (∓)', category: 'operators' },
  { symbol: '×', cmd: '/times', aliases: ['/cross'], label: 'Nhân có hướng / Tích vectơ (×)', category: 'operators' },
  { symbol: '·', cmd: '/cdot', aliases: ['/dot'], label: 'Nhân vô hướng (·)', category: 'operators' },
  { symbol: '÷', cmd: '/div', aliases: [], label: 'Phép chia (÷)', category: 'operators' },
  { symbol: '°', cmd: '/deg', aliases: ['/degree', '^o'], label: 'Độ góc (°)', category: 'operators' },
  { symbol: '′', cmd: '/prime', aliases: [], label: 'Phẩy đạo hàm / Phút (′)', category: 'operators' },
  { symbol: '″', cmd: '/dprime', aliases: [], label: 'Hai phẩy / Giây (″)', category: 'operators' },
  { symbol: '½', cmd: '/half', aliases: [], label: 'Phân số 1/2 (½)', category: 'operators' },
  { symbol: '⅓', cmd: '/third', aliases: [], label: 'Phân số 1/3 (⅓)', category: 'operators' },
  { symbol: '⅔', cmd: '/twothird', aliases: [], label: 'Phân số 2/3 (⅔)', category: 'operators' },
  { symbol: '¼', cmd: '/quarter', aliases: [], label: 'Phân số 1/4 (¼)', category: 'operators' },

  // === 4. QUAN HỆ, HÌNH HỌC & MŨI TÊN (RELATIONS & ARROWS) ===
  { symbol: '≠', cmd: '/neq', aliases: ['/ne', '!='], label: 'Khác không / Không bằng (≠)', category: 'relations' },
  { symbol: '≈', cmd: '/approx', aliases: ['~~'], label: 'Xấp xỉ bằng (≈)', category: 'relations' },
  { symbol: '≡', cmd: '/equiv', aliases: ['==='], label: 'Đồng nhất / Trùng với (≡)', category: 'relations' },
  { symbol: '∼', cmd: '/sim', aliases: [], label: 'Tương đương hệ lực (∼)', category: 'relations' },
  { symbol: '∝', cmd: '/prop', aliases: ['/propto'], label: 'Tỉ lệ thuận với (∝)', category: 'relations' },
  { symbol: '≤', cmd: '/le', aliases: ['/leq', '<='], label: 'Nhỏ hơn hoặc bằng (≤)', category: 'relations' },
  { symbol: '≥', cmd: '/ge', aliases: ['/geq', '>='], label: 'Lớn hơn hoặc bằng (≥)', category: 'relations' },
  { symbol: '≪', cmd: '/ll', aliases: ['<<'], label: 'Rất nhỏ hơn (≪)', category: 'relations' },
  { symbol: '≫', cmd: '/gg', aliases: ['>>'], label: 'Rất lớn hơn (≫)', category: 'relations' },
  { symbol: '⊥', cmd: '/perp', aliases: ['/bot'], label: 'Vuông góc với (⊥)', category: 'relations' },
  { symbol: '∥', cmd: '/par', aliases: ['/parallel'], label: 'Song song với (∥)', category: 'relations' },
  { symbol: '∠', cmd: '/ang', aliases: ['/angle'], label: 'Góc (∠)', category: 'relations' },
  { symbol: '△', cmd: '/tri', aliases: ['/triangle'], label: 'Tam giác (△)', category: 'relations' },
  { symbol: '⇒', cmd: '/implies', aliases: ['/Rightarrow', '=>'], label: 'Suy ra (⇒)', category: 'relations' },
  { symbol: '⇔', cmd: '/iff', aliases: ['/Leftrightarrow', '<=>'], label: 'Tương đương với (⇔)', category: 'relations' },
  { symbol: '→', cmd: '/to', aliases: ['/rightarrow', '->'], label: 'Mũi tên sang phải (→)', category: 'relations' },
  { symbol: '←', cmd: '/leftarrow', aliases: ['<-'], label: 'Mũi tên sang trái (←)', category: 'relations' },
  { symbol: '↑', cmd: '/up', aliases: ['/uparrow'], label: 'Hướng thẳng đứng lên (↑)', category: 'relations' },
  { symbol: '↓', cmd: '/down', aliases: ['/downarrow'], label: 'Hướng thẳng đứng xuống (↓)', category: 'relations' },
  { symbol: '↺', cmd: '/ccw', aliases: [], label: 'Quay ngược chiều kim đồng hồ (↺)', category: 'relations' },
  { symbol: '↻', cmd: '/cw', aliases: [], label: 'Quay cùng chiều kim đồng hồ (↻)', category: 'relations' },
  { symbol: '∀', cmd: '/forall', aliases: [], label: 'Với mọi (∀)', category: 'relations' },
  { symbol: '∃', cmd: '/exists', aliases: [], label: 'Tồn tại (∃)', category: 'relations' },
  { symbol: '∈', cmd: '/in', aliases: [], label: 'Thuộc (∈)', category: 'relations' },
  { symbol: '∉', cmd: '/notin', aliases: [], label: 'Không thuộc (∉)', category: 'relations' },
  { symbol: '⊂', cmd: '/subset', aliases: [], label: 'Tập con (⊂)', category: 'relations' },
  { symbol: '∪', cmd: '/cup', aliases: [], label: 'Hợp (∪)', category: 'relations' },
  { symbol: '∩', cmd: '/cap', aliases: ['/intersect'], label: 'Giao điểm (∩)', category: 'relations' },
  { symbol: '∅', cmd: '/empty', aliases: ['/emptyset'], label: 'Tập rỗng (∅)', category: 'relations' },
  { symbol: '∴', cmd: '/therefore', aliases: [], label: 'Do đó / Vậy (∴)', category: 'relations' },
  { symbol: '∵', cmd: '/because', aliases: [], label: 'Vì / Bởi vì (∵)', category: 'relations' },

  // === 5. SỐ MŨ & CHỈ SỐ DƯỚI (SUPERSCRIPTS & SUBSCRIPTS) ===
  { symbol: '⁰', cmd: '^0', aliases: [], label: 'Mũ 0 (⁰)', category: 'subsup' },
  { symbol: '¹', cmd: '^1', aliases: [], label: 'Mũ 1 (¹)', category: 'subsup' },
  { symbol: '²', cmd: '^2', aliases: [], label: 'Bình phương (²)', category: 'subsup' },
  { symbol: '³', cmd: '^3', aliases: [], label: 'Lập phương (³)', category: 'subsup' },
  { symbol: '⁴', cmd: '^4', aliases: [], label: 'Mũ 4 (⁴)', category: 'subsup' },
  { symbol: 'ⁿ', cmd: '^n', aliases: [], label: 'Mũ n (ⁿ)', category: 'subsup' },
  { symbol: '⁺', cmd: '^+', aliases: [], label: 'Mũ cộng (⁺)', category: 'subsup' },
  { symbol: '⁻', cmd: '^-', aliases: [], label: 'Mũ trừ (⁻)', category: 'subsup' },
  { symbol: '₀', cmd: '_0', aliases: [], label: 'Chỉ số dưới 0 (₀)', category: 'subsup' },
  { symbol: '₁', cmd: '_1', aliases: [], label: 'Chỉ số dưới 1 (₁)', category: 'subsup' },
  { symbol: '₂', cmd: '_2', aliases: [], label: 'Chỉ số dưới 2 (₂)', category: 'subsup' },
  { symbol: '₃', cmd: '_3', aliases: [], label: 'Chỉ số dưới 3 (₃)', category: 'subsup' },
  { symbol: '₄', cmd: '_4', aliases: [], label: 'Chỉ số dưới 4 (₄)', category: 'subsup' },
  { symbol: 'ₓ', cmd: '_x', aliases: [], label: 'Chỉ số dưới x (ₓ)', category: 'subsup' },
  { symbol: 'ᵧ', cmd: '_y', aliases: [], label: 'Chỉ số dưới y (ᵧ)', category: 'subsup' },
  { symbol: 'ᵢ', cmd: '_i', aliases: [], label: 'Chỉ số dưới i (ᵢ)', category: 'subsup' },
  { symbol: 'ⱼ', cmd: '_j', aliases: [], label: 'Chỉ số dưới j (ⱼ)', category: 'subsup' },
  { symbol: 'ₖ', cmd: '_k', aliases: [], label: 'Chỉ số dưới k (ₖ)', category: 'subsup' },
  { symbol: 'ₙ', cmd: '_n', aliases: [], label: 'Chỉ số dưới n (ₙ)', category: 'subsup' },
  { symbol: 'ₘ', cmd: '_m', aliases: [], label: 'Chỉ số dưới m (ₘ)', category: 'subsup' },
  { symbol: 'ₐ', cmd: '_a', aliases: [], label: 'Chỉ số dưới a (ₐ)', category: 'subsup' },
  { symbol: 'ₑ', cmd: '_e', aliases: [], label: 'Chỉ số dưới e (ₑ)', category: 'subsup' },
  { symbol: 'ᵣ', cmd: '_r', aliases: [], label: 'Chỉ số dưới r (ᵣ)', category: 'subsup' },
  { symbol: 'ₜ', cmd: '_t', aliases: [], label: 'Chỉ số dưới t (ₜ)', category: 'subsup' },
  { symbol: 'ₚ', cmd: '_p', aliases: [], label: 'Chỉ số dưới p (ₚ)', category: 'subsup' },
  { symbol: 'ₛ', cmd: '_s', aliases: [], label: 'Chỉ số dưới s (ₛ)', category: 'subsup' }
]

const SUP_MAP = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  'n': 'ⁿ', 'i': 'ⁱ', 'o': '°'
}

const SUB_MAP = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
  'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ',
  'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
  'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ',
  'v': 'ᵥ', 'x': 'ₓ', 'y': 'ᵧ'
}

export const CHEATSHEET_RULES = [
  {
    group: '1. Cú pháp gõ nhanh Vectơ & Đạo hàm Cơ học (dùng dấu / ngay cạnh phím Shift phải)',
    items: [
      { syntax: '/vF, /vv, /va + Space', result: 'F\u20d7, v\u20d7, a\u20d7', desc: 'Cách nhanh nhất để gõ vectơ lực, vận tốc, gia tốc (không cần ngoặc)' },
      { syntax: '/vec(F) hoặc /vec{F}', result: 'F\u20d7', desc: 'Thêm mũi tên vectơ trên ký tự bất kỳ (vừa đóng ngoặc là tự chuyển)' },
      { syntax: '/dx, /ddx + Space', result: 'x\u0307, x\u0308', desc: 'Đạo hàm bậc 1 (ẋ) và bậc 2 (ẍ) theo thời gian (hoặc /dot(x), /ddot(x))' },
      { syntax: '/dphi, /ddphi + Space', result: 'φ\u0307, φ\u0308', desc: 'Vận tốc góc φ̇ và gia tốc góc φ̈' }
    ]
  },
  {
    group: '2. Cú pháp Số mũ (^) & Chỉ số dưới (_) tự động',
    items: [
      { syntax: '^2, ^3, ^n + Space', result: '², ³, ⁿ', desc: 'Gõ dấu ^ kèm số/chữ rồi nhấn Space để thành số mũ' },
      { syntax: '^-1 hoặc ^(-1)', result: '⁻¹', desc: 'Số mũ âm hoặc nhiều chữ số' },
      { syntax: '_1, _2, _x, _n + Space', result: '₁, ₂, ₓ, ₙ', desc: 'Gõ dấu _ kèm chỉ số rồi nhấn Space để hạ chỉ số dưới' },
      { syntax: '_(ik) hoặc _{ik}', result: 'ᵢₖ', desc: 'Chỉ số dưới nhiều ký tự liền nhau' }
    ]
  },
  {
    group: '3. Chữ cái Hy Lạp thông dụng (gõ /lệnh + Space/Tab)',
    items: [
      { syntax: '/alpha, /beta, /gamma', result: 'α, β, γ', desc: 'Các góc α, β, γ (hoặc gõ tắt /al, /be, /ga + Space)' },
      { syntax: '/phi (hoặc /varphi)', result: 'φ', desc: 'Góc quay φ, góc ma sát φ' },
      { syntax: '/omega, /Omega', result: 'ω, Ω', desc: 'Vận tốc góc ω, tốc độ tiến động Ω (gõ tắt /om, /Om)' },
      { syntax: '/eps (hoặc /varepsilon)', result: 'ε', desc: 'Gia tốc góc ε' },
      { syntax: '/theta, /psi, /rho, /tau', result: 'θ, ψ, ρ, τ', desc: 'Góc Euler θ, ψ; bán kính cong ρ; trục tiếp tuyến τ' },
      { syntax: '/delta, /Delta', result: 'δ, Δ', desc: 'Di chuyển khả dĩ δ; độ biến thiên Δ' }
    ]
  },
  {
    group: '4. Toán tử, Quan hệ hình học & Mũi tên suy luận',
    items: [
      { syntax: '/sum, /int, /part', result: '∑, ∫, ∂', desc: 'Tổng xích-ma, tích phân, đạo hàm riêng' },
      { syntax: '/sqrt, /inf, /deg', result: '√, ∞, °', desc: 'Căn bậc hai, vô cực, độ góc (°)' },
      { syntax: '/perp, /par', result: '⊥, ∥', desc: 'Vuông góc (⊥), song song (∥)' },
      { syntax: '=>, <=>, ->', result: '⇒, ⇔, →', desc: 'Dấu suy ra (⇒), tương đương (⇔), mũi tên (→)' },
      { syntax: '<=, >=, !=, ~~', result: '≤, ≥, ≠, ≈', desc: 'Bất đẳng thức ≤, ≥, khác ≠, xấp xỉ ≈' },
      { syntax: '/times, /cdot, +-', result: '×, ·, ±', desc: 'Tích có hướng (×), tích vô hướng (·), cộng trừ (±)' }
    ]
  }
]

// Build lookup map supporting BOTH '/' and '\' prefixes
const EXACT_TOKEN_MAP = new Map()
function registerTokenBothSlashes(token, symbol) {
  EXACT_TOKEN_MAP.set(token, symbol)
  if (token.startsWith('/')) {
    EXACT_TOKEN_MAP.set('\\' + token.slice(1), symbol)
  } else if (token.startsWith('\\')) {
    EXACT_TOKEN_MAP.set('/' + token.slice(1), symbol)
  }
}

for (const item of MATH_SYMBOLS) {
  registerTokenBothSlashes(item.cmd, item.symbol)
  if (item.aliases) {
    for (const al of item.aliases) {
      registerTokenBothSlashes(al, item.symbol)
    }
  }
}

/**
 * Extract a valid slash command token at the end of `before` ONLY if '/' or '\'
 * is NOT preceded by a letter, number, or ':' (prevents m/s, rad/s, dv/dt, a/b, https:// conflicts!)
 */
export function extractTrailingSlashToken(beforeText) {
  if (!beforeText) return null
  const match = beforeText.match(/(?:^|[\s([=+\-,;])([/\\][a-zA-Z][a-zA-Z0-9_^{()]*)$/)
  if (!match) return null
  return match[1]
}

/**
 * Search symbols/commands for autocomplete when user is typing /command or \command
 */
export function getAutocompleteSuggestions(query, limit = 6) {
  if (!query || (!query.startsWith('/') && !query.startsWith('\\')) || query.length < 2) return []
  const normalizedQuery = '/' + query.slice(1).toLowerCase()
  const results = []

  for (const item of MATH_SYMBOLS) {
    const cmdLow = item.cmd.toLowerCase()
    const aliasMatch = (item.aliases || []).some(a => a.toLowerCase().startsWith(normalizedQuery))
    if (cmdLow.startsWith(normalizedQuery) || aliasMatch) {
      results.push(item)
    }
  }

  results.sort((a, b) => {
    const aExact = a.cmd.toLowerCase() === normalizedQuery || (a.aliases || []).some(al => al.toLowerCase() === normalizedQuery)
    const bExact = b.cmd.toLowerCase() === normalizedQuery || (b.aliases || []).some(al => al.toLowerCase() === normalizedQuery)
    if (aExact && !bExact) return -1
    if (!aExact && bExact) return 1
    return a.cmd.length - b.cmd.length
  })

  return results.slice(0, limit)
}

/**
 * Convert immediate braced or parenthesized expressions like:
 * /vec{F}, /vec(F), \vec{F}, /dot{x}, /dot(x), ^{12}, ^(12), _{ik}, _(ik)
 * as soon as the closing '}' or ')' is typed!
 */
export function tryImmediateBraceTransform(text, cursorPos) {
  if (cursorPos <= 0) return null
  const lastChar = text[cursorPos - 1]
  if (lastChar !== '}' && lastChar !== ')') return null

  const before = text.slice(0, cursorPos)
  const after = text.slice(cursorPos)

  // 1. Check /cmd{...} or /cmd(...) or \cmd{...} (must not be preceded by alphanumeric)
  const tokenMatch = before.match(/(?:^|[\s([=+\-,;])([/\\][a-zA-Z]+(?:\{[^}]+\}|\([^)]+\)))$/)
  if (tokenMatch) {
    const fullToken = tokenMatch[1]
    if (EXACT_TOKEN_MAP.has(fullToken)) {
      const replacement = EXACT_TOKEN_MAP.get(fullToken)
      const startIdx = cursorPos - fullToken.length
      return {
        text: text.slice(0, startIdx) + replacement + after,
        cursor: startIdx + replacement.length
      }
    }

    // Generic /vec{X}, /vec(X), /dot{X}, /ddot{X}, /bar{X}, /hat{X}
    const genericMatch = fullToken.match(/^[/\\](vec|dot|ddot|bar|hat)[{(]([^})]+)[})]$/)
    if (genericMatch) {
      const [, op, innerRaw] = genericMatch
      const cleanInner = innerRaw.trim()
      const resolvedInner =
        EXACT_TOKEN_MAP.get('/' + cleanInner.replace(/^[/\\]/, '')) ||
        EXACT_TOKEN_MAP.get(cleanInner) ||
        cleanInner
      const combMap = {
        vec: '\u20d7',
        dot: '\u0307',
        ddot: '\u0308',
        bar: '\u0305',
        hat: '\u0302'
      }
      const comb = combMap[op]
      if (comb && resolvedInner.length > 0) {
        const rep = resolvedInner + comb
        const startIdx = cursorPos - fullToken.length
        return {
          text: text.slice(0, startIdx) + rep + after,
          cursor: startIdx + rep.length
        }
      }
    }
  }

  // 2. Check superscript ^{...} or ^(...)
  const supBrace = before.match(/\^[{(]([0-9+\-=()ni]+)[})]$/)
  if (supBrace) {
    const full = supBrace[0]
    const chars = supBrace[1].split('').map(c => SUP_MAP[c] || c).join('')
    const startIdx = cursorPos - full.length
    return {
      text: text.slice(0, startIdx) + chars + after,
      cursor: startIdx + chars.length
    }
  }

  // 3. Check subscript _{...} or _(...)
  const subBrace = before.match(/_[{(]([0-9+\-=()aehijklmnoprstuvxy]+)[})]$/)
  if (subBrace) {
    const full = subBrace[0]
    const chars = subBrace[1].split('').map(c => SUB_MAP[c] || c).join('')
    const startIdx = cursorPos - full.length
    return {
      text: text.slice(0, startIdx) + chars + after,
      cursor: startIdx + chars.length
    }
  }

  return null
}

/**
 * Convert trailing command before cursor when Space, Tab, or Enter is pressed
 */
export function tryExpandCommandAtCursor(text, cursorPos) {
  const before = text.slice(0, cursorPos)
  const after = text.slice(cursorPos)

  // 1. Slash or Backslash command at start of word: e.g. /alpha, /vF, /sum, \alpha
  const token = extractTrailingSlashToken(before)
  if (token && EXACT_TOKEN_MAP.has(token)) {
    const rep = EXACT_TOKEN_MAP.get(token)
    const startIdx = cursorPos - token.length
    return {
      text: text.slice(0, startIdx) + rep + after,
      cursor: startIdx + rep.length
    }
  }

  // 2. Unbraced ^x or _x at end of word (e.g. x^2, v_x, F_1, 30^o, 10^-3)
  const supMatch = before.match(/(\^([0-9+\-=ni]+|o))$/)
  if (supMatch) {
    const full = supMatch[1]
    const inner = supMatch[2]
    const converted = inner.split('').map(c => SUP_MAP[c]).join('')
    if (converted.length === inner.length) {
      const startIdx = cursorPos - full.length
      return {
        text: text.slice(0, startIdx) + converted + after,
        cursor: startIdx + converted.length
      }
    }
  }

  const subMatch = before.match(/(_([0-9+\-=aehijklmnoprstuvxy]+))$/)
  if (subMatch) {
    const full = subMatch[1]
    const inner = subMatch[2]
    const converted = inner.split('').map(c => SUB_MAP[c]).join('')
    if (converted.length === inner.length) {
      const startIdx = cursorPos - full.length
      return {
        text: text.slice(0, startIdx) + converted + after,
        cursor: startIdx + converted.length
      }
    }
  }

  // 3. Operator shorthands: =>, <=>, ->, <-, <=, >=, !=, +-, ~~
  const opMatch = before.match(/(<=>|=>|->|<-|<=|>=|!=|\+-|-\+|~~)$/)
  if (opMatch) {
    const opToken = opMatch[1]
    if (EXACT_TOKEN_MAP.has(opToken)) {
      const rep = EXACT_TOKEN_MAP.get(opToken)
      const startIdx = cursorPos - opToken.length
      return {
        text: text.slice(0, startIdx) + rep + after,
        cursor: startIdx + rep.length
      }
    }
  }

  return null
}
