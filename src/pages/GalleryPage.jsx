import React, { useMemo, useState } from 'react';
import PremiumButton from '@/components/ui/Button/PremiumButton';
import { X } from 'lucide-react';

const galleryItems = [
  { id: 1, category: 'gerichte', title: 'Mixed Grillplatte', description: 'Holzkohlegrill mit Adana, Köfte und Gemüse.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80' },
  { id: 2, category: 'restaurant', title: 'Restaurant Innenraum', description: 'Warme Beleuchtung, gedeckte Tische.', image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80' },
  { id: 3, category: 'events', title: 'Familienfeier', description: 'Tafel für Geburtstage und Hochzeiten.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80&sat=-100' },
  { id: 4, category: 'gerichte', title: 'Meze Auswahl', description: 'Humus, Ezme, Baba Ghanoush und Oliven.', image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80' },
  { id: 5, category: 'restaurant', title: 'Barbereich', description: 'Signature-Drinks und Ayran frisch gezapft.', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80' },
  { id: 6, category: 'events', title: 'Catering Setup', description: 'Buffet für Firmenfeier mit Live-Grill.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80&sat=-30' },
  { id: 7, category: 'gerichte', title: 'Desserts & Tee', description: 'Baklava, Künefe und türkischer Mokka.', image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80' },
  { id: 8, category: 'restaurant', title: 'Außenbereich', description: 'Sommerterrasse mit Laternenlicht.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80&sat=-50' },
];

const filters = [
  { id: 'alle', label: 'Alle' },
  { id: 'gerichte', label: 'Gerichte' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'events', label: 'Events' },
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('alle');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = useMemo(
    () => (activeFilter === 'alle' ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)),
    [activeFilter]
  );

  return (
    <div className="bg-brand-navy-950 text-white">
      <section className="relative py-24 text-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(130deg, rgba(10,12,20,0.9), rgba(48,34,21,0.85)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="uppercase tracking-[0.4em] text-sm text-brand-gold-200">Galerie</p>
          <h1 className="text-5xl font-display mt-4">Impressionen</h1>
          <p className="mt-4 text-white/80">Ein Blick in unsere Küche, unser Restaurant und besondere Events.</p>
        </div>
      </section>

      <div className="bg-white text-brand-navy-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full border text-sm font-semibold transition ${
                  activeFilter === filter.id
                    ? 'bg-brand-navy-900 text-white border-brand-navy-900'
                    : 'border-brand-brown-200 text-brand-navy-700 hover:border-brand-navy-400'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-3xl overflow-hidden shadow-lg focus-ring"
                aria-label={`Bild öffnen: ${item.title}`}
              >
                <img src={item.image} alt={item.title} className="h-72 w-full object-cover group-hover:scale-105 transition" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-4 left-4 right-4 text-left opacity-0 group-hover:opacity-100 transition">
                  <p className="text-white font-display text-lg">{item.title}</p>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-brand-navy-900/80 py-16 text-center px-4">
        <h2 className="text-4xl font-display">Lust auf ein Live-Erlebnis?</h2>
        <p className="mt-4 text-white/80">Besuchen Sie uns vor Ort oder buchen Sie uns für Ihr Event.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <PremiumButton variant="primary" to="/reservierung" size="lg">
            Tisch reservieren
          </PremiumButton>
          <PremiumButton variant="outline" to="/kontakt" size="lg">
            Event anfragen
          </PremiumButton>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur z-50 flex items-center justify-center p-6">
          <div className="bg-brand-navy-900 rounded-3xl max-w-3xl w-full overflow-hidden">
            <div className="relative">
              <img src={selectedImage.image} alt={selectedImage.title} className="w-full max-h-[70vh] object-cover" />
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center"
                onClick={() => setSelectedImage(null)}
                aria-label="Lightbox schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-display">{selectedImage.title}</h3>
              <p className="text-white/80 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
