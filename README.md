# June — Exact Frontend Clone

Pixel-perfect HTML/CSS clone of the June.so marketing page screenshot.

## 📁 Files
```
june-exact/
├── index.html    ← Complete page, zero dependencies
└── README.md
```

## 🖥️ Run locally
```bash
open index.html        # Mac
start index.html       # Windows
```

---

## 🔄 GitHub pe update karne ke steps (pehle wala repo update karo)

### Option A — Pehle wale repo mein replace karo

```bash
# 1. Pehle wala repo clone karo (agar nahi hai locally)
git clone https://github.com/TERA_USERNAME/june-crm-dashboard.git
cd june-crm-dashboard

# 2. Purana index.html delete karo, naya copy karo
# (is folder se apna naya index.html yahan paste karo)

# 3. Stage + commit + push
git add index.html
git commit -m "feat: pixel-perfect june marketing page clone"
git push origin main
```

### Option B — Naya alag repo banao (recommended)

```bash
# 1. Is folder mein jao
cd june-exact

# 2. Git init
git init
git add .
git commit -m "feat: june exact clone - pixel perfect"

# 3. GitHub pe naya repo banao: june-exact
# phir:
git remote add origin https://github.com/TERA_USERNAME/june-exact.git
git branch -M main
git push -u origin main
```

### ✅ GitHub Pages se live karo (FREE)
1. GitHub repo → **Settings** → **Pages**
2. Source: `Deploy from a branch` → Branch: `main` → `/ (root)`
3. Save → 2-3 min baad live:
   `https://TERA_USERNAME.github.io/june-exact/`

---

MIT License
