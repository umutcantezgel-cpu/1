import React, { useMemo, useState } from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import PremiumButton from '@/components/ui/Button/PremiumButton';
import { Leaf, Flame } from 'lucide-react';

const categories = [
  { id: 'alle', label: 'Alle' },
  { id: 'vorspeisen', label: 'Vorspeisen' },
  { id: 'fleisch', label: 'Fleisch-Spezialitäten' },
  { id: 'vegetarisch', label: 'Vegetarisch' },
  { id: 'getraenke', label: 'Getränke' },
  { id: 'desserts', label: 'Desserts' },
];

const dishes = [
  {
    id: 1,
    category: 'vorspeisen',
    name: 'Sigara Börek',
    translation: 'Knusprige Käseröllchen',
    description: 'Füllung aus Schafskäse, Petersilie und Minze, serviert mit Granatapfeldip.',
    price: '€8.50',
    image: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=800&q=80',
    badge: 'Beliebte',
  },
  {
    id: 2,
    category: 'vorspeisen',
    name: 'Lahmacun',
    translation: 'Türkische Pizza',
    description: 'Dünner Teig mit Rinderhack, Tomate, Petersilie und Sumach, frisch aus dem Steinofen.',
    price: '€7.90',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f38?auto=format&fit=crop&w=800&q=80',
    badge: 'Chef Empfehlung',
  },
  {
    id: 3,
    category: 'fleisch',
    name: 'Kuzu Şiş',
    translation: 'Lammspieß',
    description: 'Mariniertes Lammfilet auf Holzkohle gegrillt, Kräuterreis und Grillgemüse.',
    price: '€21.90',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    badge: 'Beliebte',
  },
  {
    id: 4,
    category: 'fleisch',
    name: 'Tavuk Köfte',
    translation: 'Hähnchen-Frikadellen',
    description: 'Saftige Hähnchenbällchen mit Petersilie, Cacık und Kichererbsensalat.',
    price: '€16.50',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    category: 'vegetarisch',
    name: 'Imam Bayıldı',
    translation: 'Gefüllte Auberginen',
    description: 'Mit Tomaten, Paprika und Walnüssen, verfeinert mit Olivenöl und Kräutern.',
    price: '€15.90',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80',
    badge: 'Vegan',
  },
  {
    id: 6,
    category: 'vegetarisch',
    name: 'Falafel Bowl',
    translation: 'Kichererbsenbällchen',
    description: 'Mit Hummus, Sesam-Karotten und Granatapfelkernen auf Bulgur.',
    price: '€14.50',
    image: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    category: 'getraenke',
    name: 'Hausgemachter Ayran',
    translation: 'Joghurtgetränk',
    description: 'Joghurt, Wasser und Prise Meersalz – erfrischend und natürlich.',
    price: '€4.50',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    category: 'getraenke',
    name: 'Granatapfel-Spritz',
    translation: 'Signature Drink',
    description: 'Granatapfelsaft, Tonic, Minze und Limette – perfekt zum Aperitif.',
    price: '€6.90',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    badge: 'Beliebte',
  },
  {
    id: 9,
    category: 'desserts',
    name: 'Baklava Variation',
    translation: 'Pistazie & Walnuss',
    description: 'Knuspriger Filo-Teig, Pistazienfüllung, mit Rosenhonig glasiert.',
    price: '€8.20',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    category: 'desserts',
    name: 'Türkischer Mokka',
    translation: 'Kleiner Genuss',
    description: 'Traditionell im Cezve aufgebrüht, serviert mit Lokum.',
    price: '€4.80',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
    badge: 'Empfehlung',
  },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('alle');

  const groupedDishes = useMemo(() => {
    const data = {};
    dishes
      .filter((dish) => activeCategory === 'alle' || dish.category === activeCategory)
      .forEach((dish) => {
        if (!data[dish.category]) {
          data[dish.category] = [];
        }
        data[dish.category].push(dish);
      });
    return data;
  }, [activeCategory]);

  return (
    <div className="bg-brand-navy-950 text-white">
      <section className="relative py-28 text-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(10,12,20,0.9), rgba(34,42,64,0.85)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="uppercase tracking-[0.4em] text-sm text-brand-gold-200">Unsere Speisekarte</p>
          <h1 className="text-5xl font-display mt-4">Kulinarische Vielfalt</h1>
          <p className="mt-4 text-white/80">
            Von Meze über Grillspieße bis zu hausgemachten Desserts – entdecken Sie unsere Kategorien oder lassen Sie sich inspirieren.
          </p>
        </div>
      </section>

      <div className="bg-white text-brand-navy-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="sticky top-24 z-20 bg-white/90 backdrop-blur border border-brand-sand rounded-2xl p-4 flex flex-wrap gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${
                  activeCategory === category.id
                    ? 'bg-brand-navy-900 text-white border-brand-navy-900'
                    : 'border-brand-brown-200 text-brand-navy-700 hover:border-brand-navy-300'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {Object.entries(groupedDishes).map(([categoryId, items]) => (
            <AnimatedSection key={categoryId} className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="uppercase text-xs tracking-[0.4em] text-brand-brown-400">{categories.find((c) => c.id === categoryId)?.label}</p>
                  <h2 className="text-3xl font-display text-brand-navy-900">{categories.find((c) => c.id === categoryId)?.label}</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((dish) => (
                  <div key={dish.id} className="rounded-3xl border border-brand-sand shadow-lg p-5 bg-white">
                    <div className="flex flex-col sm:flex-row gap-5">
                      <div className="sm:w-40 h-32 rounded-2xl overflow-hidden">
                        <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-display text-brand-navy-900">{dish.name}</h3>
                            <p className="text-xs uppercase tracking-[0.4em] text-brand-brown-400 mt-1">{dish.translation}</p>
                          </div>
                          <p className="text-lg font-semibold text-brand-brown-600">{dish.price}</p>
                        </div>
                        <p className="text-sm text-brand-navy-700 mt-3 leading-relaxed">{dish.description}</p>
                        {dish.badge && (
                          <span className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-brand-gold-100 text-brand-brown-700 text-xs font-semibold">
                            {dish.badge === 'Vegan' ? <Leaf className="w-4 h-4" /> : <Flame className="w-4 h-4" />}
                            {dish.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <section className="bg-brand-navy-900/80 py-16 text-center px-4">
        <h2 className="text-4xl font-display">Noch Fragen zu Allergenen oder Catering?</h2>
        <p className="mt-4 text-white/80">Unser Team berät Sie gerne persönlich und stellt individuelle Menüs zusammen.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <PremiumButton variant="primary" to="/reservierung" size="lg">
            Tisch reservieren
          </PremiumButton>
          <PremiumButton variant="outline" to="/kontakt" size="lg">
            Kontakt aufnehmen
          </PremiumButton>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
