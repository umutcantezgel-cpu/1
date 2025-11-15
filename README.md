# 🚀 SHK Premium Website

Premium-Website für Sanitär, Heizung & Klima Meisterbetrieb mit modernsten Web-Technologien.

## ✨ Features

- **World-Class Design** - Glassmorphism, Micro-Interactions, Premium-Feel
- **Performance-Optimiert** - 95+ Lighthouse Score
- **Accessibility-First** - WCAG AAA Compliance
- **Responsive** - Mobile-First Design
- **Modern Stack** - Vite, React, Tailwind CSS

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Routing:** React Router 6
- **Icons:** Lucide React
- **Deployment:** Netlify

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

Das Projekt nutzt ein umfassendes Design-System mit:

- **Design Tokens** - Zentralisierte Farben, Abstände, Animationen
- **Glassmorphism Components** - 3 Intensitätsstufen
- **Premium Button** - Mit Ripple & Shine Effects
- **Custom Hooks** - useIntersectionObserver, useScrollProgress
- **Animations** - Float, Glow, Shimmer, Slide, Scale

### Komponenten

```jsx
// Premium Button
import PremiumButton from '@/components/ui/Button/PremiumButton';
<PremiumButton variant="primary" size="lg">Click Me</PremiumButton>

// Glass Card
import GlassCard from '@/components/ui/Card/GlassCard';
<GlassCard intensity="medium">Content</GlassCard>

// Animated Section
import AnimatedSection from '@/components/shared/AnimatedSection';
<AnimatedSection animation="slide-up">Content</AnimatedSection>
```

## 📁 Projektstruktur

```
src/
├── components/
│   ├── ui/              # Basis UI-Komponenten
│   │   ├── Button/
│   │   └── Card/
│   ├── shared/          # Geteilte Komponenten
│   └── features/        # Feature-spezifische Komponenten
├── hooks/               # Custom React Hooks
├── pages/               # Route-Komponenten
├── styles/              # Globale Styles
└── utils/               # Helper-Funktionen
```

## 🚀 Deployment

Das Projekt ist für Netlify optimiert:

```bash
# Mit Netlify CLI
netlify deploy --prod

# Oder via Git Push (Continuous Deployment)
git push origin main
```

## 📊 Performance

Ziel-Metriken:

- ✅ Lighthouse Score: **95+**
- ✅ First Contentful Paint: **< 1.5s**
- ✅ Time to Interactive: **< 3s**
- ✅ Accessibility Score: **95+**

## 📖 Dokumentation

Vollständige Dokumentation in:
- `IMPLEMENTATION_GUIDE.md` - Detaillierte Implementierungs-Anleitung

## 📄 Lizenz

© 2024 SHK Premium GmbH
