import { motion } from 'motion/react';
import { Target, Eye, Award, Shield, Users, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/ImageWithFallback';

const CORE_VALUES = [
  { icon: Shield, title: 'Integrity',    description: 'Complete transparency in all our operations and dealings' },
  { icon: Award,  title: 'Quality',      description: 'Uncompromising standards in workforce verification and deployment' },
  { icon: Users,  title: 'Client Focus', description: 'Your success is our priority in every engagement' },
];

const COMPANY_STATS = [
  { value: '2015',      label: 'Established' },
  { value: '5000+',     label: 'Workforce Deployed' },
  { value: '120+',      label: 'Enterprise Clients' },
  { value: '10+',       label: 'Industries' },
  { value: '98%',       label: 'Client Retention' },
  { value: 'PAN India', label: 'Presence' },
];

const CERTIFICATIONS = [
  'ISO 9001:2015 Certified',
  'MSME Registered',
  'Labour License Holder',
  'EPF & ESI Registered',
  'GST Registered',
  'Professional Indemnity Insured',
];

const TRUST_REASONS = [
  { icon: Clock,      title: 'Proven Track Record',   description: '9+ years of consistent service delivery across industries' },
  { icon: Shield,     title: 'Legal Protection',       description: 'Complete compliance shielding clients from liabilities' },
  { icon: Users,      title: 'Quality Workforce',      description: 'Thoroughly verified and skilled candidates every time' },
  { icon: TrendingUp, title: 'Scalable Solutions',     description: 'From 10 to 1000+ workforce, we scale with your needs' },
];

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ── Page hero ── */}
      <section
        aria-labelledby="about-hero-title"
        className="relative overflow-hidden"
        style={{ paddingTop: '8rem', paddingBottom: '5rem', background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, rgba(219,234,254,0.3) 100%)' }}
      >
        <div className="container text-center max-w-4xl mx-auto">
          <motion.span className="section-header__badge" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            Trusted Since 2015
          </motion.span>
          <motion.h1
            id="about-hero-title"
            className="section-header__title mt-4"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            About HRMS Manpower Solutions
          </motion.h1>
          <motion.p
            className="section-header__subtitle"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            A government-registered, ISO-certified manpower solutions provider delivering verified workforce across industries with complete legal compliance and operational excellence.
          </motion.p>
        </div>
      </section>

      {/* ── Company overview ── */}
      <section aria-labelledby="overview-title" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="grid-2-col">
            <motion.div className="space-y-5" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 id="overview-title" className="text-4xl lg:text-5xl font-black text-gray-900">Leading Workforce Solutions Provider in India</h2>
              <p className="text-lg text-gray-700 leading-relaxed">Established in 2015, HRMS Manpower Solutions has emerged as a trusted partner for enterprises seeking reliable, verified, and skilled workforce across multiple industries. Our commitment to quality, compliance, and client satisfaction has positioned us as a preferred manpower services provider.</p>
              <p className="text-lg text-gray-700 leading-relaxed">With a robust presence across India, we have successfully deployed over 5000+ workforce members for 120+ enterprise clients, maintaining a 98% client retention rate through our exceptional service delivery.</p>
              <p className="text-lg text-gray-700 leading-relaxed">We are fully compliant with all Indian labour laws, hold necessary certifications including ISO 9001:2015, and maintain complete transparency in our operations.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <figure className="img-card" style={{ margin: 0 }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1711720743865-10787dd6934a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="HRMS corporate office building"
                  className="w-full object-cover"
                  style={{ height: '600px' }}
                />
              </figure>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Excellence ── */}
      <section aria-labelledby="mission-title" style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'linear-gradient(135deg, #f8fafc, rgba(219,234,254,0.3))' }}>
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Target, title: 'Our Mission', text: 'To bridge the workforce gap in Indian industries by providing verified, skilled, and compliant manpower solutions.', dark: false },
              { icon: Eye,    title: 'Our Vision',  text: "To be India's most trusted and preferred manpower solutions provider, recognized for quality across all industries.", dark: false },
              { icon: Award,  title: 'Excellence Driven', text: 'We are committed to operational excellence, continuous improvement, and delivering value that exceeds client expectations.', dark: true },
            ].map(({ icon: Icon, title, text, dark }, i) => (
              <motion.article
                key={title}
                className={dark ? 'card' : 'card'}
                style={dark ? { background: 'linear-gradient(135deg, #2563eb, #1e40af)', color: '#fff' } : {}}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              >
                <div className="card__icon card__icon--blue mb-6" style={dark ? { background: 'rgba(255,255,255,0.2)' } : {}}>
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="card__title" style={dark ? { color: '#fff' } : {}}>{title}</h3>
                <p style={dark ? { color: '#bfdbfe', lineHeight: 1.65 } : { color: '#4b5563', lineHeight: 1.65 }}>{text}</p>
              </motion.article>
            ))}
          </div>

          {/* Core values */}
          <header className="section-header">
            <h2 id="mission-title" className="section-header__title">Our Core Values</h2>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {CORE_VALUES.map(({ icon: Icon, title, description }, i) => (
              <motion.article key={title} className="card text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="flex items-center justify-center mb-6">
                  <div className="w-14 h-14 rounded-xl border-2 border-blue-600 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-600" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="card__title">{title}</h3>
                <p className="card__description">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section aria-label="Company statistics" className="band--dark" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {COMPANY_STATS.map(({ value, label }, i) => (
              <motion.div key={label} className="stat-block" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <dt className="stat-block__number">{value}</dt>
                <dd className="stat-block__label">{label}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section aria-labelledby="certs-title" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <header className="section-header">
            <h2 id="certs-title" className="section-header__title">Certifications &amp; Compliance</h2>
            <p className="section-header__subtitle">Fully certified and compliant with all regulatory requirements</p>
          </header>
          <ul role="list" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.li key={cert} className="card flex items-center gap-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Shield className="w-10 h-10 text-blue-600 flex-shrink-0" aria-hidden="true" />
                <span className="font-semibold text-gray-900 text-lg">{cert}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why clients trust us ── */}
      <section aria-labelledby="trust-title" className="band--light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="grid-2-col">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <figure className="img-card" style={{ margin: 0 }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                  alt="Business partnership handshake"
                  className="w-full object-cover"
                  style={{ height: '500px' }}
                />
              </figure>
            </motion.div>
            <motion.div className="space-y-8" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 id="trust-title" className="text-4xl lg:text-5xl font-black text-gray-900">Why Clients Trust Us</h2>
              {TRUST_REASONS.map(({ icon: Icon, title, description }, i) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="card__icon card__icon--blue flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-500">{description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section aria-label="Partner with us" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <motion.div className="cta-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-white">Partner With Us Today</h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: '#bfdbfe' }}>
                Join 120+ enterprises who trust HRMS Manpower Solutions for their workforce needs
              </p>
              <Link to="/contact" className="btn btn--white btn--lg inline-flex">
                Get Started
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
