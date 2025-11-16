import React, { useMemo, useState } from 'react';
import PremiumButton from '@/components/ui/Button/PremiumButton';

const timeSlots = Array.from({ length: 24 }, (_, index) => {
  const hour = 11 + Math.floor(index / 2);
  const minute = index % 2 === 0 ? '00' : '30';
  if (hour > 22) return null;
  return `${hour.toString().padStart(2, '0')}:${minute}`;
}).filter(Boolean);

const guestOptions = Array.from({ length: 10 }, (_, i) => (i + 1) * 2);

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState(null);

  const isValid = useMemo(
    () => formData.name && formData.email && formData.phone && formData.date && formData.time && formData.guests,
    [formData]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value && ['notes'].indexOf(key) === -1) {
        newErrors[key] = 'Pflichtfeld';
      }
    });

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setConfirmation({ ...formData, id: Math.floor(Math.random() * 90000) + 10000 });
    setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '', notes: '' });
  };

  return (
    <div className="bg-brand-navy-950 text-white">
      <section className="relative py-24 text-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(10,12,20,0.92), rgba(33,42,64,0.88)), url('https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="uppercase tracking-[0.4em] text-sm text-brand-gold-200">Reservierung</p>
          <h1 className="text-5xl font-display mt-4">Tisch Reservieren</h1>
          <p className="mt-4 text-white/80">Sichern Sie sich Ihren Platz für ein unvergessliches kulinarisches Erlebnis.</p>
        </div>
      </section>

      <div className="bg-white text-brand-navy-900 py-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-display">Ihre Reservierung</h2>
            <p className="text-brand-navy-700 mt-3">
              Wir bestätigen jede Anfrage innerhalb weniger Minuten telefonisch oder per E-Mail.
            </p>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {[
                { label: 'Name', name: 'name', type: 'text', required: true },
                { label: 'E-Mail', name: 'email', type: 'email', required: true },
                { label: 'Telefon', name: 'phone', type: 'tel', required: true, placeholder: '+49 6441 211137' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-brand-navy-700">
                    {field.label} *
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border-brand-sand focus:border-brand-gold-400 focus:ring-brand-gold-400"
                  />
                  {errors[field.name] && <p className="text-sm text-red-600 mt-1">{errors[field.name]}</p>}
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-brand-navy-700">Datum *</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="mt-2 w-full rounded-2xl border-brand-sand focus:border-brand-gold-400 focus:ring-brand-gold-400" />
                  {errors.date && <p className="text-sm text-red-600 mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-navy-700">Uhrzeit *</label>
                  <select name="time" value={formData.time} onChange={handleChange} className="mt-2 w-full rounded-2xl border-brand-sand focus:border-brand-gold-400 focus:ring-brand-gold-400">
                    <option value="">Uhrzeit wählen</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time && <p className="text-sm text-red-600 mt-1">{errors.time}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-navy-700">Personen *</label>
                <select name="guests" value={formData.guests} onChange={handleChange} className="mt-2 w-full rounded-2xl border-brand-sand focus:border-brand-gold-400 focus:ring-brand-gold-400">
                  <option value="">Personenzahl auswählen</option>
                  {guestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option} Personen
                    </option>
                  ))}
                  <option value="20+">20+ Personen</option>
                </select>
                {errors.guests && <p className="text-sm text-red-600 mt-1">{errors.guests}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-navy-700">Besondere Wünsche</label>
                <textarea
                  name="notes"
                  rows="4"
                  placeholder="z.B. Allergien, Hochstuhl, Anlass"
                  value={formData.notes}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border-brand-sand focus:border-brand-gold-400 focus:ring-brand-gold-400"
                />
              </div>

              <PremiumButton type="submit" variant="primary" size="lg" className="w-full" disabled={!isValid}>
                Jetzt Reservieren
              </PremiumButton>
            </form>

            {confirmation && (
              <div className="mt-8 rounded-3xl border border-brand-gold-200 bg-brand-gold-50 p-6 text-brand-navy-900">
                <h3 className="text-xl font-display">Reservierung bestätigt</h3>
                <p className="text-sm mt-1">Bestätigungsnummer #{confirmation.id}</p>
                <p className="mt-3 text-sm">
                  {confirmation.date} · {confirmation.time} Uhr · {confirmation.guests} Personen
                </p>
              </div>
            )}
          </div>

          <div className="bg-brand-navy-900 rounded-3xl text-white p-8 shadow-elevated">
            <h3 className="text-3xl font-display">Warum reservieren?</h3>
            <ul className="mt-6 space-y-5 text-white/80">
              <li>• Garantierter Sitzplatz in bevorzugtem Bereich</li>
              <li>• Persönliche Betreuung für Anlässe und Gruppen</li>
              <li>• Direkte Bestätigung per Telefon oder E-Mail</li>
              <li>• Flexible Anpassung bis 2 Stunden vor Termin</li>
            </ul>
            <div className="mt-10 p-6 bg-white/10 rounded-2xl border border-white/10">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold-200">Kontakt</p>
              <p className="text-2xl font-display mt-2">06441 211137</p>
              <p className="text-white/70">info@tadim-wetzlar.de</p>
              <p className="text-white/60 mt-4 text-sm">Mo-Fr: 11:00 - 23:00 · Sa-So: 12:00 - 00:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
