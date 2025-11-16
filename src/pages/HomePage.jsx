import React from 'react';
import PremiumButton from '@/components/ui/Button/PremiumButton';
import AnimatedSection from '@/components/shared/AnimatedSection';
import GlassCard, { StatsCard, TestimonialCard } from '@/components/ui/Card/GlassCard';
import { Star, Flame, Clock, Heart, ThumbsUp, Users } from 'lucide-react';

const featuredDishes = [
  {
    name: 'Adana Kebap',
    translation: 'Gewürzter Lammhackspieß',
    price: '€16.90',
    description: 'Am Holzkohlegrill zubereitet, serviert mit Lavash, Grillgemüse und Kräuterjoghurt.',
    badge: 'Beliebte Wahl',
    image: 'https://images.unsplash.com/photo-1612874472432-19b2a3d90a36?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Iskender Kebap',
    translation: 'Butter-Joghurt-Kebap',
    price: '€18.50',
    description: 'Zarte Fleischstreifen auf knusprigem Brot, hausgemachte Tomatensauce und geschmolzene Butter.',
    badge: 'Chef Empfehlung',
    image: 'https://images.unsplash.com/photo-1608039829574-5700b4cd7990?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Meze Platte',
    translation: 'Vorspeisenvariation',
    price: '€13.50',
    description: 'Humus, Ezme, Baba Ghanoush, Sigara Börek & marinierte Oliven – perfekt zum Teilen.',
    badge: 'Für Zwei',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Künefe',
    translation: 'Warmer Fadenteig mit Käse',
    price: '€9.50',
    description: 'Frisch aus dem Ofen mit Pistazien und hausgemachtem Rosenwasser-Sirup.',
    badge: 'Süßer Abschluss',
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=900&q=80',
  },
];

const stats = [
  { icon: Star, value: '4.2★', label: '2.864 Google-Bewertungen' },
  { icon: Clock, value: '20+', label: 'Jahre Tradition' },
  { icon: Users, value: '20-25', label: 'Teammitglieder' },
  { icon: Heart, value: '100%', label: 'Frisch zubereitet' },
];

const values = [
  { title: 'Authentische Rezepte', icon: Flame, text: 'Überlieferte Grilltechniken und Gewürzmischungen aus der Familienküche.' },
  { title: 'Premium-Qualität', icon: ThumbsUp, text: 'Ausgewähltes Fleisch, handverlesenes Gemüse und hausgemachte Marinaden.' },
  { title: 'Tradition & Herz', icon: Heart, text: 'Familienbetrieb mit persönlichem Service und Wärme.' },
  { title: 'Schneller Service', icon: Clock, text: 'Ob Restaurant oder Lieferung – immer pünktlich und sorgfältig.' },
];

const testimonials = [
  {
    name: 'Laura M.',
    location: 'Wetzlar',
    rating: 5,
    text: 'Das Beste aus der türkischen Küche in Mittelhessen! Adana Kebap war unglaublich saftig und perfekt gewürzt.',
    project: 'Familienessen im März 2024',
  },
  {
    name: 'Jonas M.',
    location: 'Gießen',
    rating: 5,
    text: 'Tolles Ambiente und super Service. Unsere große Runde wurde herzlich empfangen und exzellent beraten.',
    project: 'Geburtstagsfeier',
  },
  {
    name: 'Seda M.',
    location: 'Frankfurt',
    rating: 4,
    text: 'Meze, frisch gebackenes Fladenbrot und Künefe – alles wie in Istanbul. Wir kommen regelmäßig wieder.',
    project: 'Date Night',
  },
];

const highlights = [
  {
    title: 'Kulinarische Vielfalt',
    text: 'Holzkohlegrill, vegetarische Spezialitäten und mediterrane Klassiker – täglich frisch vorbereitet.',
    image: 'https://images.unsplash.com/photo-1455612693675-112974d4880b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Großzügiges Ambiente',
    text: 'Warme Beleuchtung, elegantes Interieur und genug Platz für Familienfeste oder Business-Dinner.',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1000&q=80',
  },
];

const HomePage = () => {
  return (
    <div className="bg-brand-navy-950 text-white">
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(10,12,20,0.8), rgba(26,31,46,0.9)), url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0">
          <div className="floating-orb floating-orb-1" />
          <div className="floating-orb floating-orb-2" />
          <div className="floating-orb floating-orb-3" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-sm uppercase tracking-[0.2em]">
            <Star className="w-4 h-4 text-brand-gold-400" />
            2.864 Gäste bewerten uns mit 4.2★
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-semibold mt-8 leading-tight">
            Willkommen bei Tadim Özyigit
            <span className="block text-gradient-gold">Kulinarische Vielfalt aus Wetzlar</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Authentische türkische Grillkunst, mediterrane Meze und warme Gastfreundschaft – seit über 20 Jahren Familienbetrieb mit Herz.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PremiumButton variant="primary" size="lg" to="/reservierung">
              Tisch reservieren
            </PremiumButton>
            <PremiumButton variant="glass" size="lg" to="/speisekarte">
              Speisekarte ansehen
            </PremiumButton>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-white text-brand-navy-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div>
              <p className="uppercase text-sm tracking-[0.4em] text-brand-brown-400">Empfehlungen</p>
              <h2 className="text-4xl font-display text-brand-navy-900">Beliebte Grillgerichte</h2>
            </div>
            <PremiumButton variant="outline" size="md" to="/speisekarte">
              Alle Gerichte entdecken
            </PremiumButton>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <div key={dish.name} className="bg-brand-sand rounded-3xl overflow-hidden shadow-elevated">
                <div className="relative h-48">
                  <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-4 left-4 bg-brand-gold-500 text-brand-navy-900 text-xs font-semibold px-3 py-1 rounded-full">
                    {dish.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-display text-brand-navy-900">{dish.name}</h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-brand-brown-400 mt-1">{dish.translation}</p>
                  <p className="text-brand-navy-700 mt-4 text-sm leading-relaxed">{dish.description}</p>
                  <p className="text-xl font-semibold text-brand-brown-600 mt-5">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-sm tracking-[0.4em] text-brand-gold-300">Über Tadim</p>
            <h2 className="text-4xl font-display mt-4">Tradition seit zwei Jahrzehnten</h2>
            <p className="text-white/80 mt-6 leading-relaxed">
              Im Herzen Wetzlars brachte Familie Özyigit die authentische Grillkultur aus Gaziantep mit – echte Holzkohle, hausgemachte Meze und Service mit Seele. Heute begrüßen wir täglich Gäste aus der Region und liefern Lieblingsgerichte bis vor die Haustür.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <StatsCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} delay={index * 100} />
              ))}
            </div>
          </div>
          <GlassCard intensity="medium" className="p-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1528832992873-5bb5781525d7?auto=format&fit=crop&w=900&q=80"
              alt="Restaurant Innenbereich Tadim"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </GlassCard>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-brand-navy-900/70 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="uppercase text-sm tracking-[0.4em] text-brand-gold-300">Unsere Werte</p>
            <h2 className="text-4xl font-display">Wofür wir stehen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <value.icon className="w-12 h-12 text-brand-gold-400" />
                <h3 className="text-2xl font-display mt-4">{value.title}</h3>
                <p className="text-white/70 mt-3 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {highlights.map((item) => (
            <div key={item.title} className="bg-white/10 rounded-3xl overflow-hidden border border-white/15">
              <div className="h-64">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-3xl font-display">{item.title}</h3>
                <p className="text-white/80 mt-3 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-brand-navy-900/80 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="uppercase text-sm tracking-[0.4em] text-brand-gold-300">Stimmen unserer Gäste</p>
          <h2 className="text-4xl font-display mb-10">Echte Erfahrungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} className="bg-white/5" />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="bg-gradient-primary text-brand-navy-900 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase text-sm tracking-[0.4em] text-brand-navy-800">Bereit für ein Erlebnis?</p>
          <h2 className="text-4xl font-display mt-4">Reservieren Sie Ihren Tisch jetzt</h2>
          <p className="mt-4 text-brand-navy-800">
            Mo-Fr: 11:00 - 23:00 · Sa-So: 12:00 - 00:00 · Telefon: 06441 211137
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <PremiumButton variant="secondary" size="lg" to="/reservierung">
              Reservierung starten
            </PremiumButton>
            <PremiumButton variant="outline" size="lg" to="/kontakt">
              Kontakt aufnehmen
            </PremiumButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
