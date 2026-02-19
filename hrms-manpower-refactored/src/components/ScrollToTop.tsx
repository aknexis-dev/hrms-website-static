import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * ScrollToTop — Resets the scroll position to the top
 * whenever the route pathname changes.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}
