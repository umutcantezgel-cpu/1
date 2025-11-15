import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

/**
 * AnimatedSection Wrapper Component
 * Fügt Scroll-Animationen zu Sections hinzu
 *
 * @param {Object} props
 * @param {'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale'} props.animation
 * @param {number} props.delay - Verzögerung in ms
 * @param {number} props.duration - Animation-Dauer in ms
 * @param {React.ReactNode} props.children
 */
const AnimatedSection = ({
  animation = 'slide-up',
  delay = 0,
  duration = 500,
  threshold = 0.1,
  className = '',
  children,
  ...props
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    once: true,
    threshold,
  });

  // Animation-Klassen basierend auf Typ
  const animationClasses = {
    'fade': {
      initial: 'opacity-0',
      visible: 'opacity-100',
    },
    'slide-up': {
      initial: 'opacity-0 translate-y-10',
      visible: 'opacity-100 translate-y-0',
    },
    'slide-down': {
      initial: 'opacity-0 -translate-y-10',
      visible: 'opacity-100 translate-y-0',
    },
    'slide-left': {
      initial: 'opacity-0 translate-x-10',
      visible: 'opacity-100 translate-x-0',
    },
    'slide-right': {
      initial: 'opacity-0 -translate-x-10',
      visible: 'opacity-100 translate-x-0',
    },
    'scale': {
      initial: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100',
    },
  };

  const currentAnimation = animationClasses[animation] || animationClasses['slide-up'];

  return (
    <section
      ref={ref}
      className={`
        transition-all
        ${isVisible ? currentAnimation.visible : currentAnimation.initial}
        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
