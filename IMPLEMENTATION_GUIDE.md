# 🚀 SHK Website - Premium Modernisierung

## Implementierungs-Guide

Diese Dokumentation beschreibt alle vorgenommenen Modernisierungen und wie sie genutzt werden.

---

## 📁 Neue Dateistruktur

```
src/
├── components/
│   ├── ui/                      # Wiederverwendbare UI-Komponenten
│   │   ├── Button/
│   │   │   └── PremiumButton.jsx
│   │   └── Card/
│   │       └── GlassCard.jsx
│   ├── shared/                  # Geteilte Komponenten
│   │   └── AnimatedSection.jsx
│   └── features/                # Feature-spezifische Komponenten
│
├── hooks/                       # Custom React Hooks
│   ├── useIntersectionObserver.js
│   └── useScrollProgress.js
│
├── styles/                      # Globale Styles
│   └── globals.css
│
└── ... (existing files)
```

---

## 🎨 Neue Tailwind-Konfiguration

### Design Tokens

Alle Farben, Abstände und Animationen sind jetzt zentral definiert:

```js
// tailwind.config.js
colors: {
  brand: {
    orange: { /* 50-900 */ },
    blue: { /* 50-950 */ },
  }
}
```

### Vordefinierte Komponenten-Klassen

```jsx
// Glassmorphism
<div className="glass-card">Content</div>
<div className="glass-card-md">Content</div>
<div className="glass-card-lg">Content</div>

// Gradienten
<div className="bg-gradient-primary">Content</div>
<div className="text-gradient-orange">Text</div>
```

---

## 🧩 Neue Komponenten

### 1. PremiumButton

Feature-reiche Button-Komponente mit:
- Shine/Shimmer Effect
- Ripple Effect beim Klick
- Multiple Variants
- Loading States

**Verwendung:**

```jsx
import PremiumButton from '@/components/ui/Button/PremiumButton';

// Primary Button
<PremiumButton variant="primary" size="lg">
  Jetzt Beratung anfragen
</PremiumButton>

// Glass Button
<PremiumButton variant="glass" to="/contact">
  Kontakt
</PremiumButton>

// Loading Button
<PremiumButton loading={isSubmitting}>
  Senden...
</PremiumButton>
```

**Varianten:**
- `primary` - Orange Gradient mit Glow
- `secondary` - Blue Gradient
- `glass` - Glassmorphism-Effekt
- `outline` - Transparenter Button mit Border

---

### 2. GlassCard

Wiederverwendbare Glassmorphism-Karten mit verschiedenen Intensitäten.

**Verwendung:**

```jsx
import GlassCard from '@/components/ui/Card/GlassCard';

<GlassCard intensity="medium" hover={true} animate={true}>
  <h3>Überschrift</h3>
  <p>Inhalt...</p>
</GlassCard>
```

**Spezial-Varianten:**

```jsx
import { ServiceCard, TestimonialCard, StatsCard } from '@/components/ui/Card/GlassCard';

// Service Card
<ServiceCard
  icon={Droplets}
  title="Sanitär"
  description="..."
  features={['Feature 1', 'Feature 2']}
  image="url"
  gradient="from-blue-500 to-cyan-500"
/>

// Testimonial Card
<TestimonialCard
  name="Max Mustermann"
  location="Köln"
  rating={5}
  text="Toller Service!"
  project="Badsanierung"
/>

// Stats Card
<StatsCard
  icon={Users}
  value={1500}
  suffix="+"
  label="Zufriedene Kunden"
/>
```

---

### 3. AnimatedSection

Wrapper für Scroll-Animationen.

**Verwendung:**

```jsx
import AnimatedSection from '@/components/shared/AnimatedSection';

<AnimatedSection animation="slide-up" delay={100}>
  <h2>Diese Überschrift animiert beim Scrollen</h2>
</AnimatedSection>
```

**Animationen:**
- `fade` - Ein-/Ausblenden
- `slide-up` - Von unten
- `slide-down` - Von oben
- `slide-left` - Von rechts
- `slide-right` - Von links
- `scale` - Skalieren

---

## 🪝 Custom Hooks

### useIntersectionObserver

Erkennt wenn ein Element im Viewport sichtbar wird.

```jsx
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const MyComponent = () => {
  const [ref, isVisible] = useIntersectionObserver({ once: true });

  return (
    <div ref={ref} className={isVisible ? 'opacity-100' : 'opacity-0'}>
      Content
    </div>
  );
};
```

**Optionen:**
- `threshold` - Schwellenwert (0-1)
- `rootMargin` - Margin um Viewport
- `once` - Nur einmal animieren
- `freezeOnceVisible` - Status beibehalten

---

### useScrollProgress

Tracking von Scroll-Position und -Fortschritt.

```jsx
import { useScrollProgress } from '@/hooks/useScrollProgress';

const Header = () => {
  const { scrollProgress, isScrolled, scrollDirection } = useScrollProgress();

  return (
    <header className={isScrolled ? 'bg-white shadow' : 'bg-transparent'}>
      {/* Progress Bar */}
      <div
        className="h-1 bg-orange-500"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
};
```

**Rückgabewerte:**
- `scrollProgress` - Fortschritt in % (0-100)
- `scrollY` - Aktuelle Scroll-Position
- `scrollDirection` - 'up' oder 'down'
- `isScrolled` - true wenn > 50px gescrollt

---

### useActiveSection

Erkennt welche Section aktuell im Viewport ist.

```jsx
import { useActiveSection } from '@/hooks/useScrollProgress';

const Navigation = () => {
  const activeSection = useActiveSection(['home', 'services', 'about']);

  return (
    <nav>
      <a className={activeSection === 'home' ? 'active' : ''}>Home</a>
      <a className={activeSection === 'services' ? 'active' : ''}>Services</a>
    </nav>
  );
};
```

---

## 🎭 Animationen

### Vordefinierte Tailwind-Animationen

```jsx
// Float Animation
<div className="animate-float">Schwebt</div>

// Glow Effect
<div className="animate-glow">Leuchtet</div>

// Entrance Animations
<div className="animate-slide-up">Slide Up</div>
<div className="animate-scale-in">Scale In</div>

// Shimmer Effect
<div className="animate-shimmer">Shimmer</div>
```

### Custom CSS Animations

```css
/* globals.css enthält weitere Animationen */
@keyframes ripple { /* Ripple Effect */ }
@keyframes fadeInBottom { /* Fade + Translate */ }
@keyframes gradient { /* Gradient Animation */ }
```

---

## 🌐 Netlify-Konfiguration

### Features in `netlify.toml`:

1. **SPA Routing** - Alle Routen werden zu index.html weitergeleitet
2. **Security Headers** - CSP, X-Frame-Options, etc.
3. **Cache-Optimierung** - Aggressive Caching für Assets
4. **Asset Optimization** - Minify CSS/JS, Image Compression
5. **Build Environment** - Node 18, Production Env-Vars

### Wichtige Headers:

- **CSP** - Content Security Policy gegen XSS
- **Cache-Control** - 1 Jahr für Assets, 0 für HTML
- **Permissions-Policy** - Deaktiviert unnötige Browser-Features

---

## ♿ Accessibility-Verbesserungen

### Focus Styles

```jsx
// Automatische Focus-Ringe
<button className="focus-ring">Button</button>

// Custom Focus
<a className="focus-visible:ring-2 focus-visible:ring-orange-500">Link</a>
```

### ARIA-Labels

```jsx
// Buttons mit Icon
<button aria-label="Menü öffnen">
  <MenuIcon aria-hidden="true" />
</button>

// Sections mit Labels
<section aria-labelledby="services-heading">
  <h2 id="services-heading">Unsere Leistungen</h2>
</section>
```

### Screen Reader Only

```jsx
<span className="sr-only">Nur für Screenreader</span>
```

### Reduced Motion

Automatische Unterstützung in `globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}
```

---

## 🚀 Performance-Optimierungen

### 1. Code-Splitting

```jsx
// Lazy Loading von Routes
import { lazy, Suspense } from 'react';

const Services = lazy(() => import('./pages/Services'));

<Suspense fallback={<LoadingSpinner />}>
  <Services />
</Suspense>
```

### 2. Image Optimization

Alle Images sollten:
- `loading="lazy"` haben
- `width` und `height` Attribute haben
- Über CDN mit Resize-Parametern geladen werden

### 3. Font Optimization

```html
<!-- Preconnect zu Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### 4. Icon Tree-Shaking

```jsx
// Statt
import { Phone, Mail } from "lucide-react";

// Besser (falls nötig)
import Phone from "lucide-react/dist/esm/icons/phone";
```

---

## 🎨 Design-System

### Farbpalette

```
Primary Orange:
- 500: #ff6b35 (Haupt-Brand-Farbe)
- 600: #f15a24 (Hover)

Secondary Blue:
- 900: #1e3a8a (Dark Background)
- 700: #1d4ed8 (Accents)

Glassmorphism:
- white/10: Light
- white/15: Medium
- white/20: Strong
```

### Spacing-System

Basierend auf 4px-Grid:
- `p-4` = 16px
- `p-6` = 24px
- `p-8` = 32px
- `p-12` = 48px

### Typography-Scale

```
Hero: text-8xl (96px)
H1: text-6xl (60px)
H2: text-5xl (48px)
H3: text-3xl (30px)
Body: text-lg (18px)
Caption: text-sm (14px)
```

---

## 🛠️ Entwicklung

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build für Production

```bash
npm run build
```

### Netlify Deploy

```bash
# Netlify CLI installieren
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## 📊 Performance-Ziele

Mit allen Optimierungen sollte die Website erreichen:

- ✅ Lighthouse Score: **95+**
- ✅ First Contentful Paint: **< 1.5s**
- ✅ Time to Interactive: **< 3s**
- ✅ Largest Contentful Paint: **< 2.5s**
- ✅ Cumulative Layout Shift: **< 0.1**
- ✅ Accessibility Score: **95+**

---

## 🔒 Sicherheit

### Implementierte Maßnahmen:

1. **Content Security Policy** - Verhindert XSS
2. **X-Frame-Options** - Verhindert Clickjacking
3. **Referrer-Policy** - Schützt Privatsphäre
4. **HTTPS Enforcement** - Erzwingt verschlüsselte Verbindung

---

## 📝 Migration bestehender Komponenten

### Vorher (Alte Komponente):

```jsx
<div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
  Content
</div>
```

### Nachher (Neue GlassCard):

```jsx
<GlassCard intensity="medium" className="p-8">
  Content
</GlassCard>
```

### Vorher (Manuelle Animation):

```jsx
const [isVisible, setIsVisible] = useState(false);
// ... useEffect mit IntersectionObserver

<div className={isVisible ? 'opacity-100' : 'opacity-0'}>
  Content
</div>
```

### Nachher (AnimatedSection):

```jsx
<AnimatedSection animation="fade">
  Content
</AnimatedSection>
```

---

## 🎯 Next Steps

Nach dieser Implementierung können folgende Features hinzugefügt werden:

1. **Dark Mode** - Toggle zwischen Light/Dark
2. **Internationalisierung** - Mehrsprachigkeit
3. **PWA** - Progressive Web App Features
4. **Analytics** - Google Analytics Integration
5. **CMS** - Headless CMS (z.B. Sanity, Contentful)

---

## 📞 Support

Bei Fragen zur Implementierung:
- Siehe Inline-Kommentare in den Komponenten
- Konsultiere Tailwind-Dokumentation
- Teste in Browser DevTools

---

**Version:** 2.0.0
**Letztes Update:** 2024
