import { motion } from 'motion/react';
import { FileSearch, Users, CheckSquare, Rocket, Headphones } from 'lucide-react';

const STEPS = [
  { number: '01', icon: FileSearch,  title: 'Requirement Analysis', description: 'Understanding your workforce needs and specifications' },
  { number: '02', icon: Users,       title: 'Candidate Screening',  description: 'Sourcing and evaluating qualified candidates' },
  { number: '03', icon: CheckSquare, title: 'Skill Verification',   description: 'Comprehensive testing and background verification' },
  { number: '04', icon: Rocket,      title: 'Deployment',           description: 'Rapid onboarding and workforce deployment' },
  { number: '05', icon: Headphones,  title: 'Support & Replacement', description: 'Ongoing support and replacement guarantee' },
];

const SLA_STATS = [
  { value: '48-72 Hours', label: 'Deployment Time' },
  { value: '100%',        label: 'Verified Workforce' },
  { value: '30 Days',     label: 'Replacement Guarantee' },
];

/**
 * Process — Dark-themed 5-step deployment process overview.
 */
export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="band--dark relative overflow-hidden"
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        aria-hidden="true"
      />

      <div className="container relative">
        <header className="section-header">
          <span className="section-header__badge" style={{ backgroundColor: 'rgba(250,204,21,0.2)', color: '#facc15' }}>
            Our Process
          </span>
          <h2 id="process-title" className="section-header__title" style={{ color: '#ffffff' }}>
            Enterprise Work Process
          </h2>
          <p className="section-header__subtitle" style={{ color: '#d1d5db' }}>
            Streamlined 5-step process ensuring quality workforce deployment
          </p>
        </header>

        {/* Steps grid */}
        <ol
          aria-label="Deployment process steps"
          className="relative grid md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {/* Connecting line on large screens */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-amber-400 opacity-30"
            aria-hidden="true"
          />

          {STEPS.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="step-card"
            >
              <div className="step-card__icon-wrap">
                <div className="step-card__circle">
                  <step.icon className="w-10 h-10 text-gray-900" aria-hidden="true" />
                </div>
                <span className="step-card__badge">{step.number}</span>
                <div className="step-card__glow" aria-hidden="true" />
              </div>

              <h3 className="step-card__title">{step.title}</h3>
              <p className="step-card__desc">{step.description}</p>
            </motion.li>
          ))}
        </ol>

        {/* SLA stats */}
        <motion.aside
          aria-label="Service level statistics"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="inline-flex flex-col md:flex-row items-center gap-8 md:gap-12 mx-auto rounded-3xl p-8 border border-white/10 w-full max-w-3xl"
            style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)' }}
          >
            {SLA_STATS.map(({ value, label }, i) => (
              <div key={label} className="flex items-center gap-8">
                <div className="stat-block">
                  <p className="stat-block__number">{value}</p>
                  <p className="stat-block__label">{label}</p>
                </div>
                {i < SLA_STATS.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-white/20" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
