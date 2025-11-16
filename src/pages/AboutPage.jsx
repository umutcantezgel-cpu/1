import React from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Heart, Users, Award, Flame, MapPin, Clock } from 'lucide-react';

const values = [
  {
    title: 'Leidenschaft',
    description: 'Jedes Gericht wird mit handverlesenen Zutaten und echter Begeisterung zubereitet.',
    icon: Heart,
  },
  {
    title: 'Qualität',
    description: 'Wir arbeiten ausschließlich mit vertrauenswürdigen Lieferanten aus der Region.',
    icon: Award,
  },
  {
    title: 'Gemeinschaft',
    description: 'Familien, Teams und Freunde finden bei uns Raum für gemeinsame Erinnerungen.',
    icon: Users,
  },
  {
    title: 'Tradition',
    description: 'Überlieferte Rezepte aus mehreren Generationen, modern interpretiert.',
    icon: Flame,
  },
];

const milestones = [
  { year: '2001', title: 'Gründung in Wetzlar', text: 'Familie Özyigit eröffnet das erste Restaurant und etabliert den Holzkohlegrill als Herzstück.' },
  { year: '2008', title: 'Erweiterung', text: 'Umbau der Räumlichkeiten, neue Lounge und Ausbau des Lieferdienstes für Unternehmen.' },
  { year: '2016', title: 'Generation 2', text: 'Die nächste Generation übernimmt – Fokus auf moderne Präsentation und Events.' },
  { year: '2023', title: 'Heute', text: '2.864 Bewertungen, Catering-Partner für Hochzeiten und Events in Mittelhessen.' },
];

const team = [
  {
    name: 'Chef Mehmet',
    role: 'Küchenchef & Grillmeister',
    bio: '25 Jahre Erfahrung mit anatolischen Grillklassikern, perfektioniert auf Holzkohle.',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Selin Özyigit',
    role: 'Guest Experience',
    bio: 'Gastfreundschaft liegt ihr im Blut – verantwortlich für Events, Service und Details.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Emir Kaya',
    role: 'Pâtissier',
    bio: 'Dessert-Spezialist für Baklava, Künefe und saisonale Süßspeisen.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
  },
];

const AboutPage = () => {
  return (
    <div className="bg-brand-navy-950 text-white">
      <section className="relative py-28">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(110deg, rgba(17,20,33,0.92), rgba(43,31,16,0.8)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-brand-gold-200">Über Uns</p>
          <h1 className="text-5xl font-display mt-4">Unsere Geschichte</h1>
          <p className="mt-5 text-white/80">
            Im Jahr 2001 brachte Familie Özyigit die authentische türkische Grillkultur nach Wetzlar. Mit Leidenschaft für traditionelle Rezepte, frische Zutaten und liebevolles Storytelling servieren wir seitdem kulinarische Erinnerungen.
          </p>
        </div>
      </section>

      <AnimatedSection className="bg-white text-brand-navy-900 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display">Mit Herz und Familie</h2>
            <p className="mt-6 text-brand-navy-700 leading-relaxed">
              Die Küche unserer Eltern bildet bis heute das Fundament: marinierte Kebaps, ofenfrisches Brot und liebevoll arrangierte Meze. Gleichzeitig investieren wir in moderne Technik, digitale Reservierungen und Events für Firmen oder Hochzeiten.
            </p>
            <div className="mt-6 space-y-3 text-brand-navy-700">
              <p>• 2.864 Google-Bewertungen mit 4.2★</p>
              <p>• Über 400 Events & Caterings jährlich</p>
              <p>• Eigener Lieferdienst für Wetzlar & Umgebung</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map((value) => (
              <div key={value.title} className="bg-brand-sand rounded-3xl p-5 shadow-lg border border-brand-cream/40">
                <value.icon className="w-10 h-10 text-brand-brown-500" />
                <h3 className="text-xl font-display mt-3">{value.title}</h3>
                <p className="text-sm text-brand-navy-700 mt-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-sm text-brand-gold-300 text-center">Unsere Reise</p>
          <h2 className="text-4xl font-display text-center mt-4">Meilensteine</h2>
          <div className="mt-12 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((item, index) => (
                <div key={item.year} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center gap-6`}>
                  <div className="md:w-1/2 bg-white/5 border border-white/10 rounded-3xl p-6">
                    <p className="text-brand-gold-300 text-sm uppercase tracking-[0.4em]">{item.year}</p>
                    <h3 className="text-2xl font-display mt-2">{item.title}</h3>
                    <p className="text-white/80 mt-2 leading-relaxed">{item.text}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white text-brand-navy-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.4em] text-sm text-brand-brown-400">Unser Team</p>
            <h2 className="text-4xl font-display">Menschen hinter dem Grill</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="rounded-3xl border border-brand-sand shadow-lg overflow-hidden bg-white">
                <img src={member.image} alt={member.name} className="h-64 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-2xl font-display">{member.name}</h3>
                  <p className="uppercase text-xs tracking-[0.4em] text-brand-brown-400 mt-1">{member.role}</p>
                  <p className="text-sm text-brand-navy-700 mt-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="py-16 bg-brand-navy-900/80 text-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <MapPin className="w-10 h-10 text-brand-gold-400" />
            <div>
              <h3 className="text-xl font-display">Adresse</h3>
              <p className="text-white/80">Bahnhofstr. 4, 35576 Wetzlar</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="w-10 h-10 text-brand-gold-400" />
            <div>
              <h3 className="text-xl font-display">Öffnungszeiten</h3>
              <p className="text-white/80">Mo-Fr: 11:00 - 23:00 · Sa-So: 12:00 - 00:00</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Users className="w-10 h-10 text-brand-gold-400" />
            <div>
              <h3 className="text-xl font-display">Teamgröße</h3>
              <p className="text-white/80">20-25 leidenschaftliche Gastgeber:innen</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
