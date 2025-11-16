import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-brand-gold-300">Tadim Özyigit</p>
          <h3 className="text-2xl font-display font-semibold mt-3">Authentische türkische Küche</h3>
          <p className="mt-4 text-sm text-white/70">
            Seit über zwei Jahrzehnten servieren wir mediterrane Grillkunst aus sorgfältig ausgewählten Zutaten – mit Herz für Tradition und Gastfreundschaft.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram].map((Icon) => (
              <button
                key={Icon.displayName || Icon.name}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 focus-ring"
                aria-label={`Zu ${Icon === Facebook ? 'Facebook' : 'Instagram'} wechseln`}
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-white/70">
            {[
              { label: 'Home', to: '/' },
              { label: 'Speisekarte', to: '/speisekarte' },
              { label: 'Über Uns', to: '/ueber-uns' },
              { label: 'Galerie', to: '/galerie' },
              { label: 'Reservierung', to: '/reservierung' },
            ].map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="hover:text-brand-gold-300">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-brand-gold-400" />
              Bahnhofstr. 4, 35576 Wetzlar
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-gold-400" />
              <a href="tel:06441211137" className="hover:text-brand-gold-300">06441 211137</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-gold-400" />
              <a href="mailto:info@tadim-wetzlar.de" className="hover:text-brand-gold-300">info@tadim-wetzlar.de</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Öffnungszeiten</h4>
          <div className="flex items-center gap-3 text-white/80 text-sm">
            <Clock className="w-5 h-5 text-brand-gold-400" />
            <div>
              <p>Mo-Fr: 11:00 - 23:00</p>
              <p>Sa-So: 12:00 - 00:00</p>
            </div>
          </div>
          <p className="text-xs text-white/60 mt-4">Letzte Küchenbestellung 30 Min. vor Schließung</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60 px-4">
        © {year} Tadim Özyigit. Alle Rechte vorbehalten. · <a className="hover:text-brand-gold-300" href="#">Datenschutz</a> · <a className="hover:text-brand-gold-300" href="#">Impressum</a> · <a className="hover:text-brand-gold-300" href="#">AGB</a>
      </div>
    </footer>
  );
};

export default Footer;
