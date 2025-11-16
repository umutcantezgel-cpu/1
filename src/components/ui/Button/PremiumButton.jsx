import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Premium Button Component mit Advanced Hover Effects
 *
 * Features:
 * - Shine/Shimmer Effect on Hover
 * - Ripple Effect on Click
 * - Scale Animations
 * - Multiple Variants
 * - Accessibility-optimiert
 *
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'glass' | 'outline'} props.variant - Button-Stil
 * @param {'sm' | 'md' | 'lg' | 'xl'} props.size - Button-Größe
 * @param {React.ReactNode} props.children - Button-Inhalt
 * @param {string} props.href - Für Links (intern mit react-router)
 * @param {string} props.to - Für react-router Links
 * @param {boolean} props.disabled - Deaktiviert Status
 * @param {boolean} props.loading - Loading Status
 * @param {boolean} props.fullWidth - 100% Breite
 * @param {string} props.className - Zusätzliche CSS-Klassen
 */
const PremiumButton = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  to,
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const [ripples, setRipples] = useState([]);

  // Ripple Effect Handler
  const handleClick = (e) => {
    if (disabled || loading) return;

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    // Call original onClick
    if (onClick) {
      onClick(e);
    }
  };

  // ========================================
  // VARIANT STYLES
  // ========================================
  const variantClasses = {
    primary: `
      bg-gradient-to-r from-brand-gold-400 to-brand-gold-600
      text-brand-navy-900 font-semibold
      shadow-lg shadow-[0_18px_40px_rgba(244,185,32,0.35)]
      hover:shadow-glow-gold hover:from-brand-gold-500 hover:to-brand-gold-700
      active:scale-95
      before:absolute before:inset-0
      before:bg-gradient-to-r before:from-brand-gold-200 before:to-brand-gold-400
      before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-60
      disabled:from-gray-400 disabled:to-gray-500
      disabled:shadow-none disabled:cursor-not-allowed
    `,
    secondary: `
      bg-gradient-secondary
      text-white font-semibold
      shadow-lg shadow-[0_18px_40px_rgba(10,12,20,0.45)]
      hover:shadow-2xl hover:shadow-[0_25px_45px_rgba(10,12,20,0.55)]
      active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    glass: `
      glass-card-md
      text-white font-semibold
      hover:bg-white/25 hover:border-white/50
      active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    outline: `
      bg-transparent
      border-2 border-brand-gold-400
      text-brand-gold-400 font-semibold
      hover:bg-brand-gold-400 hover:text-brand-navy-900
      hover:shadow-lg hover:shadow-brand-gold-500/30
      active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-400
    `,
  };

  // ========================================
  // SIZE STYLES
  // ========================================
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  // ========================================
  // BASE CLASSES (immer angewendet)
  // ========================================
  const baseClasses = `
    relative
    inline-flex items-center justify-center gap-2
    rounded-xl
    overflow-hidden
    transition-all duration-300 ease-out
    transform
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-900
    ${fullWidth ? 'w-full' : ''}
    ${disabled || loading ? 'pointer-events-none' : 'cursor-pointer'}
  `;

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant] || variantClasses.primary}
    ${sizeClasses[size]}
    ${className}
  `;

  // ========================================
  // SHINE EFFECT COMPONENT
  // ========================================
  const ShineEffect = () => (
    <span
      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      aria-hidden="true"
    />
  );

  // ========================================
  // RIPPLE EFFECT COMPONENT
  // ========================================
  const RippleEffects = () => (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/60 animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animation: 'ripple 0.6s linear',
          }}
        />
      ))}
    </>
  );

  // ========================================
  // LOADING SPINNER
  // ========================================
  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-5 w-5 text-current"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // ========================================
  // BUTTON CONTENT
  // ========================================
  const content = (
    <>
      {/* Shine Effect */}
      {!disabled && !loading && <ShineEffect />}

      {/* Ripple Effects */}
      <RippleEffects />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading && <LoadingSpinner />}
        {children}
      </span>
    </>
  );

  // ========================================
  // RENDER LOGIC
  // ========================================

  // External Link
  if (href) {
    return (
      <a
        href={href}
        className={`${combinedClasses} group`}
        onClick={handleClick}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  // React Router Link
  if (to) {
    return (
      <Link
        to={to}
        className={`${combinedClasses} group`}
        onClick={handleClick}
        {...props}
      >
        {content}
      </Link>
    );
  }

  // Regular Button
  return (
    <button
      type={type}
      className={`${combinedClasses} group`}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
};

// ========================================
// CSS for Ripple Animation (add to globals.css)
// ========================================
const rippleStyles = `
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
`;

export default PremiumButton;
