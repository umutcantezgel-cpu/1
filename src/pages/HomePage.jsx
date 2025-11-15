import React from 'react';
import PremiumButton from '../components/ui/Button/PremiumButton';
import GlassCard, { ServiceCard, StatsCard, TestimonialCard } from '../components/ui/Card/GlassCard';
import AnimatedSection from '../components/shared/AnimatedSection';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { Droplets, Flame, Wind, Users, Briefcase, Award, TrendingUp, Phone, ChevronDown } from 'lucide-react';

export default function HomePage() {
  const { scrollProgress, isScrolled } = useScrollProgress();

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const services = [
    {
      id: 1,
      icon: Droplets,
      title: "Sanitär",
      description: "Von der Badsanierung bis zur Rohrleitungsinstallation - wir realisieren Ihre Wünsche mit höchster Präzision.",
      features: ["Badsanierung", "Rohrleitungen", "Armaturen", "Wartung"],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: Flame,
      title: "Heizung",
      description: "Moderne Heizsysteme für maximale Effizienz und Komfort. Wir sind Ihr Experte für Wärmepumpen und mehr.",
      features: ["Wärmepumpen", "Gasheizung", "Ölheizung", "Smart Home"],
      image: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&q=80",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      icon: Wind,
      title: "Klima",
      description: "Perfektes Raumklima das ganze Jahr über. Professionelle Klimatechnik für Wohn- und Geschäftsräume.",
      features: ["Klimaanlagen", "Lüftung", "Luftqualität", "Wartung"],
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&q=80",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const stats = [
    { icon: Users, value: 1500, suffix: "+", label: "Zufriedene Kunden" },
    { icon: Briefcase, value: 2000, suffix: "+", label: "Abgeschlossene Projekte" },
    { icon: Award, value: 15, suffix: "+", label: "Jahre Erfahrung" },
    { icon: TrendingUp, value: 98, suffix: "%", label: "Weiterempfehlungsrate" }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>
        <div className="floating-orb floating-orb-3"></div>
      </div>

      {/* Header with Scroll Progress */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card-md shadow-lg' : 'bg-transparent'}`}>
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 flex items-center justify-center shadow-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">SHK Premium</h1>
                <p className="text-xs text-blue-200">Ihr Meisterbetrieb</p>
              </div>
            </div>

            {/* CTA Button */}
            <PremiumButton variant="primary" size="md" href="tel:+4922112345678">
              <Phone className="w-5 h-5" />
              0221 1234567
            </PremiumButton>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=1920&q=80)',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="absolute inset-0 bg-gradient-hero"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <GlassCard intensity="medium" className="p-8 md:p-12 max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange-500/20 border border-brand-orange-400/30 text-brand-orange-300 font-semibold text-sm mb-6 animate-pulse">
                <span className="w-2 h-2 bg-brand-orange-400 rounded-full animate-pulse"></span>
                24/7 Notdienst verfügbar
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Ihr Premium-Installateur
                <br />
                <span className="text-gradient-orange">
                  für Sanitär, Heizung & Klima
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Moderne Lösungen. Meisterqualität. Seit über 15 Jahren Ihr zuverlässiger Partner in Köln und Umgebung.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <PremiumButton variant="primary" size="lg">
                  Jetzt Beratung anfragen
                </PremiumButton>
                <PremiumButton variant="glass" size="lg">
                  Unsere Leistungen
                </PremiumButton>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Meisterbetrieb</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>TÜV-zertifiziert</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>5 Jahre Garantie</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToContent}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-all duration-300 animate-bounce cursor-pointer glass-card rounded-full p-3 border border-white/20"
            aria-label="Scroll to content"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </section>

        {/* Stats Section */}
        <AnimatedSection animation="fade" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatsCard
                  key={index}
                  icon={stat.icon}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection animation="slide-up" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Unsere Leistungen
              </h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Vom kleinen Reparaturauftrag bis zum kompletten Neubau-Projekt
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                    image={service.image}
                    gradient={service.gradient}
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonial Section */}
        <AnimatedSection animation="slide-up" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Das sagen unsere Kunden
              </h2>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Über 1.500 zufriedene Kunden in Köln und Umgebung
              </p>
            </div>

            <TestimonialCard
              name="Familie Müller"
              location="Köln-Lindenthal"
              rating={5}
              text="Hervorragende Arbeit bei unserer Badsanierung! Das Team war pünktlich, sauber und professionell. Das Ergebnis übertrifft unsere Erwartungen."
              project="Komplette Badsanierung"
            />
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="scale" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-primary p-12 text-center shadow-glow-orange-lg">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Bereit für Ihr nächstes Projekt?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Kontaktieren Sie uns noch heute für eine kostenlose Beratung
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <PremiumButton variant="secondary" size="xl">
                    Jetzt Beratung anfragen
                  </PremiumButton>
                  <PremiumButton variant="outline" size="xl" href="tel:+4922112345678">
                    <Phone className="w-5 h-5" />
                    0221 1234567
                  </PremiumButton>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 glass-card-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-blue-200 text-sm">
              © 2024 SHK Premium GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-4 justify-center mt-4">
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Impressum
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
