import { useState, useEffect } from 'react';

/**
 * Custom Hook für Scroll-Progress Tracking
 *
 * @returns {Object} { scrollProgress, scrollY, scrollDirection, isScrolled }
 *
 * @example
 * const { scrollProgress, isScrolled } = useScrollProgress();
 * return (
 *   <div className={isScrolled ? 'bg-white shadow' : 'bg-transparent'}>
 *     <div style={{ width: `${scrollProgress}%` }} className="progress-bar" />
 *   </div>
 * )
 */
export const useScrollProgress = () => {
  const [scrollData, setScrollData] = useState({
    scrollProgress: 0,
    scrollY: 0,
    scrollDirection: 'down',
    isScrolled: false,
  });

  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;

          setScrollData({
            scrollProgress: Math.min(100, Math.max(0, progress)),
            scrollY: currentScrollY,
            scrollDirection: currentScrollY > lastScrollY ? 'down' : 'up',
            isScrolled: currentScrollY > 50,
          });

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    // Initial call
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return scrollData;
};

/**
 * Hook für Active Section Detection
 * Erkennt welche Section aktuell im Viewport ist
 *
 * @param {Array<string>} sectionIds - Array von Section IDs
 * @returns {string} activeSection - ID der aktiven Section
 *
 * @example
 * const activeSection = useActiveSection(['home', 'services', 'about']);
 * // activeSection = 'services'
 */
export const useActiveSection = (sectionIds = []) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      // Finde die Section, die am meisten im Viewport ist
      const sections = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;

          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Berechne wie viel % der Section im Viewport ist
          const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          const visiblePercentage = visibleHeight / rect.height;

          return {
            id,
            visiblePercentage,
            distanceFromTop: Math.abs(rect.top),
          };
        })
        .filter(Boolean);

      if (sections.length === 0) return;

      // Section mit höchster Sichtbarkeit und geringster Distanz vom oberen Viewport
      const mostVisible = sections.reduce((prev, current) => {
        if (current.visiblePercentage > 0.3) {
          // Mindestens 30% sichtbar
          if (current.distanceFromTop < prev.distanceFromTop) {
            return current;
          }
        }
        return prev;
      });

      if (mostVisible && mostVisible.id !== activeSection) {
        setActiveSection(mostVisible.id);
      }
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, activeSection]);

  return activeSection;
};

export default useScrollProgress;
