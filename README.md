# 🍽️ Tadim Özyigit – Premium Restaurant Website

Eine maßgeschneiderte Multi-Page-Website für Tadim Özyigit (Turkish Grill House) in Wetzlar. Die Anwendung vereint erstklassiges Design, Performance und Accessibility nach 24h-Premium-Standard und präsentiert alle wichtigen Inhalte rund um Speisekarte, Reservierungen und Kontakt.

## ✨ Highlights
- **6 vollwertige Seiten** – Home, Speisekarte, Über Uns, Galerie, Reservierung, Kontakt
- **Edles Branding** – Gold (#F4B920), Navy (#1a1f2e) und Warm Brown (#9B6F47) mit Playfair Display & Inter
- **Komplette Story** – Tradition, Werte, Team, Testimonials & 2.864 Google-Bewertungen
- **Formulare mit Validierung** – Reservierungs- und Kontaktformular inklusive Erfolgszustand
- **Responsive & barrierearm** – Optimiert für Mobile/Desktop, semantische Struktur, Fokus-Styles

## 🛠️ Tech Stack
- **React 18** mit **Vite 5**
- **React Router 6** für Multi-Page-Routing
- **Tailwind CSS 3** mit Custom Design Tokens
- **Lucide Icons** für hochwertige Piktogramme

## 🚀 Entwicklung
```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktion builden
npm run build

# Production-Build lokal prüfen
npm run preview
```

## 📁 Struktur
```
src/
├── components/
│   ├── layout/            # Header, Footer, Layout, Scroll Helpers
│   ├── shared/            # Animierte Sections
│   └── ui/                # Buttons & Cards
├── hooks/                 # Scroll- und Intersection-Hooks
├── pages/                 # Alle sechs Seiten
├── styles/                # Globale Styles & Fonts
└── utils/                 # Helper (falls benötigt)
```

## 📐 Design-System
- **Design Tokens:** Farben, Typografie & Schatten zentral in `tailwind.config.js`
- **PremiumButton:** Mehrere Varianten (gold, navy, glass, outline) mit Ripple/Shine-Effekt
- **GlassCard:** Wiederverwendbare Karten mit animierten Overlays & Hover-States
- **Globale Komponenten:** Sticky Navigation, CTA-Footer, animierte Sektionen

## 📊 Qualitätsziele
- Lighthouse 95+ in Performance/Accessibility/Best Practices/SEO
- WCAG 2.1 AA-konforme Kontraste, Tastatursteuerung & Fokus-Stati
- Ladezeit < 3s dank optimierter Assets & Vite-Build

## 📄 Lizenz
© 2024 Tadim Özyigit – Alle Rechte vorbehalten.
