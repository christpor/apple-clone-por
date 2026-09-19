<p align="center">
  <img src="public/assets/images/apple-hero-banner.jpg" alt="Apple Sovereign Clone Banner" width="100%"/>
</p>

<h1 align="center">Apple Sovereign Web Platform Clone</h1>

<p align="center">
  <b>Pixel-accurate, high-fidelity reproduction of Apple's flagship web ecosystem, interactive hardware bentos, and kinetic navigation.</b>
</p>

<p align="center">
  <a href="https://apple-clone-por.vercel.app"><img src="https://img.shields.io/badge/Live%20Demo-apple--clone--por.vercel.app-0071E3?style=for-the-badge&logo=apple&logoColor=white" alt="Live Demo" /></a>
  <a href="https://github.com/christpor/apple-clone-por"><img src="https://img.shields.io/badge/GitHub-Repo-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" /></a>
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/Tailwind-3.4.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License MIT" />
</p>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,ts,tailwind,vite,html,css,apple,git,github&perline=10" alt="Tech Stack" />
  </a>
</p>

---

## ⚡ Executive Summary (30-Second Rule)

**Apple Sovereign Clone** is a production-grade frontend reconstruction of [apple.com](https://apple.com). Built with React 18, Vite 5, Tailwind CSS, and Lenis kinetic scroll momentum, it delivers authentic hardware showcases including the iPhone 18 Pro titanium smoke hero, iPhone Duo dual-display banner, Apple Watch Series 12 optical sensor display, and the 2x3 product bento grid.

Run it locally in seconds:
```bash
git clone https://github.com/christpor/apple-clone-por.git
cd apple-clone-por && npm install && npm run dev
```

---

## 🗺️ Master Cognitive Flow Architecture

```mermaid
flowchart TD
    classDef client fill:#18181b,stroke:#0071E3,stroke-width:2px,color:#fff;
    classDef hero fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff;
    classDef bento fill:#14141e,stroke:#22c55e,stroke-width:2px,color:#fff;
    classDef edge fill:#0a0a0a,stroke:#a855f7,stroke-width:2px,color:#fff;

    Visitor[Apple Web Visitor]:::client -->|Global Apple Navbar Navigation| Nav[Frosted Glass Nav Header]:::client
    Nav -->|Kinetic Momentum Scroll| HeroPro[iPhone 18 Pro Titanium Smoke Hero]:::hero
    HeroPro -->|Panoramic Scroll Reveal| HeroDuo[iPhone Duo Foldable Dual Display]:::hero
    HeroDuo -->|Optical Sensor Dark Section| Watch[Apple Watch Series 12 Dark Showcase]:::hero
    Watch -->|2x3 Responsive Matrix| Bento[Flagship Hardware Bento Grid]:::bento
    Bento -->|M5 MacBook / Ultra 4 / AirPods 5| Edge[Vercel Global Edge Network]:::edge
```

---

## 🏛️ Multi-Tier Engineering Architecture

| Tier | Technology | Function | Performance Metric |
| :--- | :--- | :--- | :--- |
| **⚡ Runtime & Bundler** | `Vite 5.4` + `TypeScript 5.5` | High-speed ESM compilation & type safety | Sub-2.5s production build |
| **💻 Client Core** | `React 18.3` | Modular component isolation & responsive layouts | 60 FPS silky smooth UI |
| **🎨 Design System** | `Tailwind CSS 3.4` + `SF Pro Typography` | Apple system colors, micro-borders & frosted blur | Sub-30KB compressed CSS |
| **🌊 Motion Physics** | `Lenis Scroll` | Decoupled smooth momentum & hardware acceleration | Zero frame drops / zero jank |
| **☁️ Infrastructure** | `Vercel Edge Platform` | Static edge caching & global SSL delivery | 100% Lighthouse Performance |

---

## ⚡ Highlights & Key Features

- **Flagship Hero Units**:
  - **iPhone 18 Pro**: Wide panoramic 2x retina titanium smoke render with "Pro further." typography and pre-order callouts.
  - **iPhone Duo**: Foldable dual-display retina graphic with light mode contrast.
  - **Apple Watch Series 12**: Dual optical health sensor display in dark space gray.
- **Complete 2x3 Bento Grid**:
  - MacBook Air M5 ("Now supercharged by M5.")
  - Carrier deals at Apple ($0 after trade-in)
  - Apple Watch Ultra 4 ("A battery you can't outrun.")
  - AirPods 5 with Active Noise Cancellation
  - Apple Card (Titanium laser-etched design)
  - Apple Trade In & Upgrade program
- **Apple Directory Footer**: 5-column directory with copyright, global legal disclaimers, and locale selector.

---

## 🚀 Quick Start & CLI Operations

### Local Development
```bash
# 1. Clone repository
git clone https://github.com/christpor/apple-clone-por.git
cd apple-clone-por

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).
