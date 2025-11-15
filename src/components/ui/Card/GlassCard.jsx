import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

/**
 * GlassCard Component mit Glassmorphism-Effekt
 *
 * Features:
 * - 3 Intensitätsstufen (light, medium, strong)
 * - Optionale Hover-Effekte
 * - Scroll-Animationen
 * - Gradient-Borders
 * - Accessibility-optimiert
 *
 * @param {Object} props
 * @param {'light' | 'medium' | 'strong'} props.intensity - Glassmorphism-Intensität
 * @param {boolean} props.hover - Aktiviert Hover-Effekt
 * @param {boolean} props.animate - Aktiviert Scroll-Animation
 * @param {boolean} props.gradient - Zeigt Gradient-Border
 * @param {string} props.className - Zusätzliche CSS-Klassen
 * @param {React.ReactNode} props.children - Card-Inhalt
 */
const GlassCard = ({
  intensity = 'medium',
  hover = true,
  animate = true,
  gradient = false,
  className = '',
  children,
  ...props
}) => {
  // Scroll-Animation Hook (optional)
  const [ref, isVisible] = useIntersectionObserver({
    once: true,
    threshold: 0.1,
  });

  // ========================================
  // INTENSITY VARIANTS
  // ========================================
  const intensityClasses = {
    light: 'glass-card',       // bg-white/10, blur(20px)
    medium: 'glass-card-md',   // bg-white/15, blur(24px)
    strong: 'glass-card-lg',   // bg-white/20, blur(32px)
  };

  // ========================================
  // HOVER EFFECTS
  // ========================================
  const hoverClasses = hover
    ? `
      hover:bg-white/25
      hover:border-white/40
      hover:shadow-glass-lg
      hover:scale-[1.02]
      transition-all duration-300 ease-out
    `
    : '';

  // ========================================
  // ANIMATION CLASSES
  // ========================================
  const animationClasses = animate
    ? `
      transition-all duration-500
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    `
    : '';

  // ========================================
  // GRADIENT BORDER
  // ========================================
  const gradientBorderClasses = gradient
    ? `
      relative
      before:absolute before:inset-0
      before:rounded-inherit
      before:p-[1px]
      before:bg-gradient-to-br before:from-white/40 before:via-white/20 before:to-transparent
      before:-z-10
      before:mask-composite:exclude
    `
    : '';

  const combinedClasses = `
    ${intensityClasses[intensity]}
    ${hoverClasses}
    ${animationClasses}
    ${gradientBorderClasses}
    rounded-3xl
    ${className}
  `;

  return (
    <div
      ref={animate ? ref : undefined}
      className={combinedClasses}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * ServiceCard - Spezialisierte Card für Service-Anzeige
 */
export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features = [],
  image,
  gradient = 'from-blue-500 to-cyan-500',
  className = '',
}) => {
  const [ref, isVisible] = useIntersectionObserver({ once: true });

  return (
    <GlassCard
      ref={ref}
      intensity="medium"
      hover={true}
      animate={false}
      className={`group overflow-hidden ${className}`}
    >
      {/* Image Header */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60`} />

          {/* Icon Overlay */}
          {Icon && (
            <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-orange-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-blue-100 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-blue-200 text-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange-400 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </GlassCard>
  );
};

/**
 * TestimonialCard - Card für Kundenbewertungen
 */
export const TestimonialCard = ({
  name,
  location,
  rating = 5,
  text,
  project,
  className = '',
}) => {
  return (
    <GlassCard intensity="medium" hover={false} className={`p-8 md:p-12 ${className}`}>
      {/* Stars */}
      <div className="flex gap-1 mb-6" aria-label={`Bewertung: ${rating} von 5 Sternen`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-6 h-6 ${i < rating ? 'text-brand-orange-400 fill-current' : 'text-gray-400'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote Icon */}
      <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-brand-orange-500/20 flex items-center justify-center">
        <svg className="w-8 h-8 text-brand-orange-400" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
        "{text}"
      </blockquote>

      {/* Author Info */}
      <div>
        <h4 className="text-lg font-bold text-white mb-1">{name}</h4>
        <p className="text-blue-200 text-sm">{location}</p>
        {project && (
          <p className="text-brand-orange-400 text-sm font-semibold mt-1">
            {project}
          </p>
        )}
      </div>
    </GlassCard>
  );
};

/**
 * StatsCard - Card für Statistiken
 */
export const StatsCard = ({
  icon: Icon,
  value,
  suffix = '',
  label,
  delay = 0,
  className = '',
}) => {
  const [ref, isVisible] = useIntersectionObserver({ once: true });

  return (
    <GlassCard
      ref={ref}
      intensity="medium"
      hover={true}
      animate={false}
      className={`p-6 text-center ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      {Icon && (
        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      )}

      {/* Number */}
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {isVisible ? value : 0}{suffix}
      </div>

      {/* Label */}
      <div className="text-blue-200 font-semibold">{label}</div>
    </GlassCard>
  );
};

export default GlassCard;
