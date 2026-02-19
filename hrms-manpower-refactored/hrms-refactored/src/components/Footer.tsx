import { Link } from 'react-router';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'Services',     path: '/services' },
  { label: 'Industries',   path: '/industries' },
  { label: 'Process',      path: '/process' },
  { label: 'About Us',     path: '/about' },
  { label: 'Blog',         path: '/blog' },
];

const SERVICE_LINKS = [
  'Manufacturing Workforce',
  'Logistics Staff',
  'Technicians & Welders',
  'IT Professionals',
  'Corporate Staff',
  'Construction Workers',
];

const SOCIAL_ICONS = [
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { icon: Twitter,   href: '#', label: 'Twitter / X' },
  { icon: Facebook,  href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

/**
 * Footer — Global site footer with links, contact info, and legal bar.
 */
export function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container footer__body">
        <div className="footer__grid">

          {/* ── Brand column ── */}
          <address className="footer__brand not-italic">
            <div className="footer__logo">
              <div className="footer__logo-icon" aria-hidden="true">
                <span className="text-white font-black text-xl">H</span>
              </div>
              <div>
                <p className="footer__logo-name">HRMS Manpower Solutions</p>
                <p className="footer__logo-sub">Since 2015</p>
              </div>
            </div>

            <p className="footer__tagline">
              Leading provider of skilled workforce solutions across India. Government registered and fully compliant with all labour regulations.
            </p>

            <nav aria-label="Social media links">
              <ul className="footer__socials" role="list">
                {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
                  <li key={label}>
                    <a href={href} className="footer__social-btn" aria-label={label}>
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </address>

          {/* ── Quick links ── */}
          <nav aria-label="Quick links">
            <h2 className="footer__col-title">Quick Links</h2>
            <ul className="footer__links" role="list">
              {QUICK_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Services ── */}
          <nav aria-label="Our services">
            <h2 className="footer__col-title">Our Services</h2>
            <ul className="footer__links" role="list">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <span className="footer__link" style={{ cursor: 'default' }}>{service}</span>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Contact ── */}
          <address className="not-italic">
            <h2 className="footer__col-title">Contact Us</h2>
            <ul className="footer__contacts" role="list">
              <li className="footer__contact-item">
                <Phone className="footer__contact-icon w-5 h-5" aria-hidden="true" />
                <div>
                  <a href="tel:+919876543210" className="footer__contact-main block hover:text-amber-400 transition-colors">
                    +91 98765 43210
                  </a>
                  <p className="footer__contact-sub">Mon-Sat, 9AM-6PM</p>
                </div>
              </li>
              <li className="footer__contact-item">
                <Mail className="footer__contact-icon w-5 h-5" aria-hidden="true" />
                <div>
                  <a href="mailto:contact@hrmsmanpower.com" className="footer__contact-main block hover:text-amber-400 transition-colors">
                    contact@hrmsmanpower.com
                  </a>
                  <p className="footer__contact-sub">Quick Response</p>
                </div>
              </li>
              <li className="footer__contact-item">
                <MapPin className="footer__contact-icon w-5 h-5" aria-hidden="true" />
                <div>
                  <p className="footer__contact-main">Corporate Office</p>
                  <p className="footer__contact-sub">Mumbai, Maharashtra</p>
                </div>
              </li>
            </ul>
          </address>
        </div>

        {/* ── Legal bar ── */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} HRMS Manpower Solutions — Government-Compliant Workforce Provider
          </p>
          <nav aria-label="Legal links">
            <ul className="footer__legal-links" role="list">
              {['Privacy Policy', 'Terms of Service', 'Compliance'].map((item) => (
                <li key={item}>
                  <a href="#" className="footer__legal-link">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
