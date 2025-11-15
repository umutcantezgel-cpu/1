import { useState, useEffect, useRef } from 'react';

/**
 * Custom Hook für Intersection Observer
 *
 * @param {Object} options - Konfigurationsoptionen
 * @param {number} options.threshold - Schwellenwert (0-1) wann das Element als sichtbar gilt
 * @param {string} options.rootMargin - Margin um das Root-Element (z.B. "-100px")
 * @param {boolean} options.once - Wenn true, wird nur einmal animiert
 * @param {boolean} options.freezeOnceVisible - Wenn true, bleibt isVisible=true nach erstem Trigger
 *
 * @returns {Array} [elementRef, isVisible] - Ref für das Element und Sichtbarkeits-Status
 *
 * @example
 * const [ref, isVisible] = useIntersectionObserver({ once: true });
 * return <div ref={ref} className={isVisible ? 'opacity-100' : 'opacity-0'}>Content</div>
 */
export const useIntersectionObserver = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
    freezeOnceVisible = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    // Wenn schon animiert und once=true, nichts tun
    if (!element || (hasAnimated && once)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;

        if (isIntersecting) {
          setIsVisible(true);

          // Bei once: Observer disconnecten und hasAnimated setzen
          if (once || freezeOnceVisible) {
            setHasAnimated(true);
            observer.disconnect();
          }
        } else if (!freezeOnceVisible) {
          // Nur wenn nicht "eingefroren", kann es wieder unsichtbar werden
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, freezeOnceVisible, hasAnimated]);

  return [elementRef, isVisible, hasAnimated];
};

/**
 * Hook für mehrere Elemente mit gleichem Observer
 * Nützlich für Listen/Grids mit vielen Items
 *
 * @example
 * const { observe, isVisible } = useMultipleIntersectionObserver();
 * items.map((item, i) => (
 *   <div ref={el => observe(i, el)} className={isVisible[i] ? 'visible' : 'hidden'}>
 *     {item}
 *   </div>
 * ))
 */
export const useMultipleIntersectionObserver = (options = {}) => {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options;

  const [visibilityMap, setVisibilityMap] = useState({});
  const observerRef = useRef(null);
  const elementsRef = useRef({});

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.observerId;

          if (entry.isIntersecting) {
            setVisibilityMap((prev) => ({
              ...prev,
              [id]: true,
            }));

            // Bei once: Element aus Observer entfernen
            if (once) {
              observerRef.current?.unobserve(entry.target);
            }
          } else if (!once) {
            setVisibilityMap((prev) => ({
              ...prev,
              [id]: false,
            }));
          }
        });
      },
      { threshold, rootMargin }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold, rootMargin, once]);

  const observe = (id, element) => {
    if (!element) return;

    // Dataset für Identifikation setzen
    element.dataset.observerId = id;

    // Element speichern und beobachten
    elementsRef.current[id] = element;
    observerRef.current?.observe(element);
  };

  return {
    observe,
    isVisible: visibilityMap,
  };
};

export default useIntersectionObserver;
