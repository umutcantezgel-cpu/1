import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';
import PremiumButton from '@/components/ui/Button/PremiumButton';
import { useScrollProgress } from '@/hooks/useScrollProgress';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Speisekarte', to: '/speisekarte' },
  { label: 'Über Uns', to: '/ueber-uns' },
  { label: 'Galerie', to: '/galerie' },
  { label: 'Reservierung', to: '/reservierung' },
  { label: 'Kontakt', to: '/kontakt' },
];

const Header = () => {
  const { isScrolled, scrollProgress } = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 text-sm font-semibold transition-colors rounded-full ${
      isActive
        ? 'text-brand-gold-400 bg-white/5'
        : 'text-white/80 hover:text-white'
    }`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-brand-navy-900/95 shadow-xl shadow-black/40 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-brand-gold-300 via-brand-gold-500 to-brand-brown-500 transition-all"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3" aria-label="Zur Startseite">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-gold-500 to-brand-brown-500 flex items-center justify-center shadow-glow-gold">
            <Star className="w-6 h-6 text-brand-navy-900" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-gold-200">Tadim Özyigit</p>
            <p className="text-xl font-display font-semibold text-white leading-none">Turkish Grill House</p>
          </div>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PremiumButton variant="primary" size="md" to="/reservierung">
            Reservieren
          </PremiumButton>
        </div>

        <button
          className="lg:hidden p-2 text-white rounded-xl border border-white/20"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menü öffnen"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-navy-900/95 border-t border-white/10">
          <nav className="flex flex-col gap-2 px-6 py-6" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `py-3 px-4 rounded-2xl text-base font-semibold ${
                    isActive ? 'bg-white/10 text-brand-gold-300' : 'text-white/80 hover:bg-white/5'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <PremiumButton variant="primary" size="md" to="/reservierung" className="w-full">
              Tisch reservieren
            </PremiumButton>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
