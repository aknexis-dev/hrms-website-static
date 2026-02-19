import { motion } from 'motion/react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const STATS = [
  { value: '5000+',    label: 'Workforce Deployed' },
  { value: '120+',     label: 'Clients Served' },
  { value: '10+',      label: 'Industries Covered' },
  { value: 'PAN India', label: 'Presence' },
  { value: '100%',     label: 'Government Registered' },
];

/**
 * Hero — Landing section with headline, CTA buttons, hero image,
 * floating badge, and a statistics bar.
 */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero – Skilled Workforce Deployment Solutions"
      className="hero"
    >
      <div className="container">
        <div className="hero__grid">

          {/* ── Left content ── */}
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero__badge">🏆 Trusted by 120+ Enterprises</span>

            <h1 className="hero__title">
              Skilled Workforce Deployment Solutions for Your Business
            </h1>

            <ul className="hero__bullets" aria-label="Service highlights">
              <li className="hero__bullet">
                <span className="dot-bullet" aria-hidden="true" />
                Supplying Skilled | Semi-Skilled | Unskilled Workforce
              </li>
              <li className="hero__bullet">
                <span className="dot-bullet" aria-hidden="true" />
                Manufacturing | Logistics | IT | Corporate Operations
              </li>
            </ul>
<div className="hero__actions" style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
  <motion.a
    href="/contact"
    className="btn btn--primary btn--lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Request Manpower
    <ArrowRight className="w-5 h-5" aria-hidden="true" />
  </motion.a>

  <motion.a
    href="tel:+919876543210"
    className="btn btn--secondary btn--lg"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <PhoneCall className="w-5 h-5" aria-hidden="true" />
    Book Consultation
  </motion.a>
</div>
          </motion.div>

          {/* ── Right visual ── */}
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <figure className="hero__image-wrap" style={{ margin: 0 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                alt="Diverse professional business team collaborating"
                className="hero__image"
              />
            </figure>

            {/* Floating workforce stat */}
            <motion.div
              className="hero__floating-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: 'spring' }}
              aria-label="5000+ workforce deployed"
            >
              <p className="hero__floating-badge-number">5000+</p>
              <p className="hero__floating-badge-label">Workforce Deployed</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.aside
          aria-label="Company statistics"
          className="hero__stats"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="hero__stats-card">
            <dl className="hero__stats-grid">
              {STATS.map(({ value, label }) => (
                <div key={label} className="stat-item">
                  <dt className="stat-item__number">{value}</dt>
                  <dd className="stat-item__label">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
