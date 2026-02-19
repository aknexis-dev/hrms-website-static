import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';

const NAV_LINKS = [
  { label: 'Home',       path: '/' },
  { label: 'Services',   path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Process',    path: '/process' },
  { label: 'About Us',   path: '/about' },
  { label: 'Careers',    path: '/careers' },
  { label: 'Contact',    path: '/contact' },
];

const PHONE = '+91 98765 43210';

/**
 * Navbar — Site-wide navigation.
 * Turns opaque on scroll and collapses to hamburger on mobile.
 */
export function Navbar() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileOpen, setIsMobileOpen]     = useState(false);
  const location                            = useLocation();

  /* Close mobile menu & scroll to top on route change */
  useEffect(() => { setIsMobileOpen(false); }, [location]);

  /* Toggle opaque navbar past 50px scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      role="banner"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${isScrolled || isMobileOpen ? 'navbar--scrolled' : ''} ${isMobileOpen ? 'navbar--open' : ''}`}
    >
      <div className="container">
        <div className="navbar__inner">

          {/* ── Logo ── */}
          <Link to="/" className="navbar__logo" aria-label="HRMS Manpower Solutions — home">
            <span className="navbar__logo-icon" aria-hidden="true">
              <span className="navbar__logo-letter">H</span>
            </span>
            <span>
              <span className="navbar__logo-text">HRMS Manpower Solutions</span>
              <span className="navbar__logo-sub block">Government Registered</span>
            </span>
          </Link>

          {/* ── Desktop navigation ── */}
          <nav aria-label="Primary navigation">
            <ul className="navbar__links" role="list">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`navbar__link ${isActive(path) ? 'navbar__link--active' : ''}`}
                    aria-current={isActive(path) ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Desktop right actions ── */}
          <div className="navbar__actions">
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="navbar__phone" aria-label={`Call us: ${PHONE}`}>
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{PHONE}</span>
            </a>
            <Link to="/contact" className="navbar__cta">Hire Now</Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="navbar__toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen
              ? <X className="w-6 h-6 text-gray-900" aria-hidden="true" />
              : <Menu className="w-6 h-6 text-gray-900" aria-hidden="true" />}
          </button>
        </div>

        {/* ── Mobile navigation ── */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="navbar__mobile-menu"
            >
              <ul className="navbar__mobile-links" role="list">
                {NAV_LINKS.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className={`navbar__mobile-link ${isActive(path) ? 'navbar__mobile-link--active' : ''}`}
                      aria-current={isActive(path) ? 'page' : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="navbar__mobile-footer">
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="navbar__phone">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>{PHONE}</span>
                </a>
                <Link
                  to="/contact"
                  className="navbar__cta text-center"
                  style={{ display: 'block', textAlign: 'center' }}
                >
                  Hire Now
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
