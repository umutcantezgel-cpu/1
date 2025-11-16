import React, { useMemo, useState } from 'react';
import PremiumButton from '@/components/ui/Button/PremiumButton';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
  { icon: MapPin, title: 'Adresse', content: 'Bahnhofstr. 4, 35576 Wetzlar', link: 'https://maps.google.com/?q=Bahnhofstr.+4+35576+Wetzlar' },
  { icon: Phone, title: 'Telefon', content: '06441 211137', link: 'tel:06441211137' },
  { icon: Mail, title: 'E-Mail', content: 'info@tadim-wetzlar.de', link: 'mailto:info@tadim-wetzlar.de' },
  { icon: Clock, title: 'Öffnungszeiten', content: 'Mo-Fr: 11:00-23:00 · Sa-So: 12:00-00:00' },
];

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

const ContactPage = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const isValid = useMemo(
    () => formData.name && formData.email && formData.subject && formData.message,
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
    ['name', 'email', 'subject', 'message'].forEach((field) => {
      if (!formData[field]) newErrors[field] = 'Pflichtfeld';
    });
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setSuccess(true);
    setFormData(initialForm);
  };

  return (
    <div className="bg-brand-navy-950 text-white">
      <section className="relative py-24 text-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(10,12,20,0.92), rgba(33,42,64,0.88)), url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="uppercase tracking-[0.4em] text-sm text-brand-gold-200">Kontakt</p>
          <h1 className="text-5xl font-display mt-4">Wir freuen uns auf Ihre Nachricht</h1>
          <p className="mt-4 text-white/80">Ob Reservierung, Event oder Feedback – schreiben Sie uns.</p>
        </div>
      </section>

      <AnimatedSection className="bg-white text-brand-navy-900 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {contactDetails.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 border border-brand-sand rounded-3xl bg-white shadow-sm">
                <item.icon className="w-10 h-10 text-brand-brown-500" />
                <div>
                  <h3 className="text-xl font-display">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-brand-navy-700 block">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-brand-navy-700">{item.content}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-3xl overflow-hidden">
              <iframe
                title="Anfahrt Tadim"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.469011003889!2d8.499!3d50.5575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bda7dffbd423fd%3A0x9d3be2df9b19b5a2!2sBahnhofstra%C3%9Fe%204%2C%2035576%20Wetzlar!5e0!3m2!1sde!2sde!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-brand-sand rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-display">Nachricht senden</h2>
            <p className="text-brand-navy-700 mt-2">Wir antworten innerhalb von 24 Stunden.</p>
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-brand-navy-700">Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border-brand-cream focus:border-brand-gold-400 focus:ring-brand-gold-400"
                />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-navy-700">E-Mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border-brand-cream focus:border-brand-gold-400 focus:ring-brand-gold-400"
                />
                {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-navy-700">Telefon</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border-brand-cream focus:border-brand-gold-400 focus:ring-brand-gold-400"
                  placeholder="Optional"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-navy-700">Betreff *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border-brand-cream focus:border-brand-gold-400 focus:ring-brand-gold-400"
                >
                  <option value="">Bitte auswählen</option>
                  <option value="reservierung">Reservierung</option>
                  <option value="allergien">Allergien</option>
                  <option value="event">Event / Catering</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
                {errors.subject && <p className="text-sm text-red-600 mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-navy-700">Nachricht *</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border-brand-cream focus:border-brand-gold-400 focus:ring-brand-gold-400"
                  placeholder="Ihre Nachricht an uns..."
                />
                {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
              </div>

              <PremiumButton variant="primary" size="lg" type="submit" className="w-full" disabled={!isValid}>
                Nachricht senden
              </PremiumButton>

              {success && <p className="text-green-700 text-sm">Vielen Dank! Wir melden uns zeitnah.</p>}
            </form>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;
