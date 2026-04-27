# 🏫 New Deep Public School — Website

**Palwal, Haryana | Admission Open 2026-27**  
Contact: 9813279231

---

## 🚀 Quick Start

### Frontend (React + Vite + Tailwind + Framer Motion)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# Opens at http://localhost:5173
```

### Backend (Node.js + Express + MongoDB)

```bash
# 1. Go to backend folder
cd backend

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env
# Edit .env with your MongoDB URI and email settings

# 4. Start backend
npm run dev   # development (with nodemon)
npm start     # production
```

---

## 📁 Project Structure

```
school-website/
├── index.html              # SEO-optimized HTML entry
├── vite.config.js          # Vite + API proxy config
├── tailwind.config.js      # Custom colors, fonts
├── src/
│   ├── App.jsx             # Main app
│   ├── index.css           # Global styles + animations
│   └── components/
│       ├── Navbar.jsx       # Sticky nav with mobile menu
│       ├── Hero.jsx         # Full-screen hero with stats
│       ├── NoticeBoard.jsx  # Auto-scrolling ticker
│       ├── About.jsx        # School intro + values
│       ├── Facilities.jsx   # 6-facility grid
│       ├── Academics.jsx    # Classes + teaching approach
│       ├── WhyChooseUs.jsx  # Parent concern focused
│       ├── Gallery.jsx      # Photo grid
│       ├── Admission.jsx    # 3-step + CTA (dark section)
│       ├── Testimonials.jsx # Hinglish reviews carousel
│       ├── Contact.jsx      # Form + map + WhatsApp
│       ├── Footer.jsx       # Full footer
│       ├── FloatingWhatsApp.jsx  # Fixed WA button
│       └── StickyApply.jsx  # Mobile bottom CTA bar
└── backend/
    ├── server.js            # Express API
    ├── package.json
    └── .env.example         # Environment variables template
```

---

## 🎨 Design Choices

| Decision | Reasoning |
|----------|-----------|
| **Navy + Amber palette** | Trust (navy) + energy/warmth (amber) — ideal for school |
| **Playfair Display headings** | Prestigious, trustworthy, not corporate |
| **Nunito body font** | Friendly, easy to read, works for Hindi-English mix |
| **Hinglish tone in testimonials** | Authentic for Palwal audience, builds instant trust |
| **Dark admission section** | Creates contrast, draws attention to conversion section |
| **Floating WhatsApp** | #1 contact method in Palwal — always visible |
| **Sticky mobile bar** | Keeps Call + Apply accessible while scrolling on phone |

---

## 📱 Key Features

- ✅ **Mobile-first** — designed for parents on phones
- ✅ **WhatsApp integration** — floating button + inline CTAs
- ✅ **Notice ticker** — announcements visible on all pages
- ✅ **Working contact form** — saves to MongoDB + email notify
- ✅ **Fallback** — form falls back to WhatsApp if backend is down
- ✅ **Local SEO** — schema markup + meta tags for Palwal
- ✅ **Framer Motion** — subtle scroll animations
- ✅ **Hinglish testimonials** — authentic Palwal parent voice
- ✅ **Fast loading** — no heavy libraries, optimized animations

---

## 🌐 Production Deployment

### Frontend → Vercel / Netlify
```bash
npm run build
# Upload dist/ folder
```

### Backend → Railway / Render / VPS
```bash
# Set environment variables on your host
# Start: npm start
```

### Update API endpoint
In `src/components/Contact.jsx`, update the fetch URL for production:
```js
const res = await fetch('https://your-backend.railway.app/api/enquiry', ...)
```

---

## 📞 School Contact

- **Phone/WhatsApp**: 9813279231
- **Location**: Palwal, Haryana — 121102
- **Admission**: 2026-27 Open

---

*Built for New Deep Public School, Palwal. Focused on parent trust, admission conversions, and local authenticity.*
