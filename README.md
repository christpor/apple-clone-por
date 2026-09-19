# Apple Sovereign Clone (`apple-clone-por`)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-apple--clone--por.vercel.app-0071E3?style=for-the-badge&logo=apple&logoColor=white)](https://apple-clone-por.vercel.app)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

An autonomous, pixel-accurate reproduction of [Apple](https://www.apple.com), reverse-engineered using `clone-use` v3.0 motion and asset decompression.

---

## ⚡ Key Highlights & Parity Architecture

- **Flagship Hero Units**:
  - **iPhone 18 Pro**: Wide panoramic 2x retina titanium smoke render with "Pro further." typography and pre-order callouts.
  - **iPhone Duo**: Foldable dual-display retina graphic with light mode contrast.
  - **Apple Watch Series 12**: Dual optical health sensor display in dark space gray.
- **Complete 2x3 Bento Grid**:
  - MacBook Air M5 ("Now supercharged by M5.")
  - Incredible carrier deals at Apple ($0 after trade-in)
  - Apple Watch Ultra 4 ("A battery you can't outrun.")
  - AirPods 5 with Active Noise Cancellation
  - Apple Card (Titanium laser-etched design)
  - Apple Trade In & Upgrade program
- **Apple TV+ Media Streamer ("Endless entertainment")**:
  - Autoplaying kinetic carousel featuring 6 Apple Originals (`Ted Lasso`, `Slow Horses`, `Friday Night Baseball`, `Formula 1`, `MLS`, `Mayday`).
  - Interactive "Stream now" triggers, genre badges, pause/play slideshow control, and animated progress indicator pills.
- **Apple Frosted Glass Mega-Menu**:
  - Desktop hover dropdown sheets with micro-links for `Store`, `Mac`, `iPad`, `iPhone`, `Watch`, `AirPods`.
  - Quick Search modal (Cmd+K) and interactive Apple Bag cart drawer.
- **Lenis Kinetic Scroll**:
  - High-fidelity inertial trackpad scrolling replicating Apple's signature desktop momentum.
- **Multi-Route Navigation**:
  - `/` — Homepage with flagship hero units, 2x3 bento tiles, and Apple TV+ carousel.
  - `/store` — Apple Store product shelf, financing callouts, and Today at Apple.
  - `/iphone` — Interactive model lineup comparison matrix with camera, battery, chip specs, and titanium color switcher.
  - `/support` — Searchable support directory and diagnostic category tiles.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Motion Engine**: Framer Motion 11 + Lenis Kinetic Smooth Scroll
- **Language**: TypeScript 5.5 (Strict mode)
- **Styling**: Tailwind CSS with Apple typography (`-apple-system`, `SF Pro Display`, `SF Pro Text`) and Cupertino design tokens
- **Deployment**: Vercel Edge Network

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/christpor/apple-clone-por.git
cd apple-clone-por

# Install dependencies
npm install

# Start local dev server
npm run dev

# Production build & preview
npm run build
npm run preview
```

---

## 🌐 Live Production

Live on Vercel at [https://apple-clone-por.vercel.app](https://apple-clone-por.vercel.app).
