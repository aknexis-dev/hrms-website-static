import { motion } from 'motion/react';
import { FileSearch, Users, CheckSquare, Rocket, Headphones, Shield, FileCheck, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const STEPS = [
  { number: '01', icon: FileSearch,  title: 'Requirement Analysis', description: 'Understanding your workforce needs and specifications', details: 'Our experts conduct detailed consultation to understand your industry, role requirements, skill sets needed, and deployment timeline.', compliance: 'NDA & Confidentiality Agreement' },
  { number: '02', icon: Users,       title: 'Candidate Screening',  description: 'Sourcing and evaluating qualified candidates', details: 'We source candidates from our verified database and conduct preliminary screening based on skills, experience, and availability.', compliance: 'Database Privacy Compliance' },
  { number: '03', icon: CheckSquare, title: 'Skill Verification',   description: 'Comprehensive testing and background verification', details: 'Candidates undergo skill tests, interviews, background checks, document verification, and reference validation.', compliance: 'Police Verification & Document Authentication' },
  { number: '04', icon: Rocket,      title: 'Deployment',           description: 'Rapid onboarding and workforce deployment', details: 'Complete onboarding process including documentation, induction, safety training, and deployment at your facility within 48-72 hours.', compliance: 'EPF/ESI Registration & Labour Law Compliance' },
  { number: '05', icon: Headphones,  title: 'Support & Replacement', description: 'Ongoing support and replacement guarantee', details: 'Continuous monitoring, performance tracking, issue resolution, and free replacement within 30 days if requirements are not met.', compliance: '30-Day Replacement SLA' },
];

const COMPLIANCE_POINTS = ['EPF & ESI Registration', 'Labour License & Contractor License', 'Shops & Establishment Registration', 'Professional Tax Registration', 'GST Registration & Compliance', 'Workmen Compensation Insurance'];
const SLA_POINTS = [
  { title: '48-72 Hours Deployment', desc: 'Standard workforce deployment timeline' },
  { title: '30-Day Replacement',     desc: 'Free replacement if not satisfied' },
  { title: '24/7 Support',           desc: 'Round-the-clock assistance' },
  { title: '100% Documentation',     desc: 'Complete legal compliance' },
];

export function ProcessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section style={{ paddingTop: '8rem', paddingBottom: '5rem', background: 'linear-gradient(135deg, #f8fafc, #fff, rgba(219,234,254,0.3))' }}>
        <div className="container text-center max-w-4xl mx-auto">
          <motion.span className="section-header__badge" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Enterprise Deployment Process</motion.span>
          <motion.h1 className="section-header__title mt-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Our Deployment Process</motion.h1>
          <motion.p className="section-header__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            A structured, compliant, and efficient 5-step process ensuring quality workforce deployment with complete transparency and legal compliance.
          </motion.p>
        </div>
      </section>

      {/* Process timeline */}
      <section aria-label="Process steps" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <ol className="space-y-16" aria-label="Deployment steps">
            {STEPS.map((step, index) => (
              <motion.li key={step.number} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-6 lg:gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-xl">
                        <step.icon className="w-10 h-10 text-gray-900" aria-hidden="true" />
                      </div>
                      <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg text-white font-black text-sm">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900">{step.title}</h3>
                      <p className="text-gray-500 mt-1">{step.description}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-9">
                    <div className="card" style={{ background: 'linear-gradient(135deg, #eff6ff, #fff)' }}>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">{step.details}</p>
                      <div className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-3">
                        <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                        <div>
                          <p className="font-black text-gray-900 mb-1">Compliance Checkpoint</p>
                          <p className="text-gray-500">{step.compliance}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute left-10 top-20 h-16 w-0.5 bg-gradient-to-b from-amber-400 to-blue-600 opacity-30 mt-4" aria-hidden="true" />
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Compliance */}
      <section aria-labelledby="compliance-title" style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'linear-gradient(135deg, #f8fafc, rgba(219,234,254,0.3))' }}>
        <div className="container">
          <header className="section-header">
            <h2 id="compliance-title" className="section-header__title">Legal Compliance &amp; Documentation</h2>
            <p className="section-header__subtitle">Complete adherence to all labour laws and statutory requirements</p>
          </header>
          <ul role="list" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPLIANCE_POINTS.map((point, i) => (
              <motion.li key={point} className="card flex items-start gap-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <FileCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <span className="font-semibold text-gray-900">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* SLA */}
      <section aria-labelledby="sla-title" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <header className="section-header">
            <h2 id="sla-title" className="section-header__title">Our Service Level Commitment</h2>
            <p className="section-header__subtitle">Guaranteed timelines and quality assurance</p>
          </header>
          <ul role="list" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SLA_POINTS.map(({ title, desc }, i) => (
              <motion.li key={title} className="card text-center" style={{ background: 'linear-gradient(135deg, #eff6ff, #fff)' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="card__icon card__icon--blue mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="card__title">{title}</h3>
                <p className="card__description">{desc}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why it works */}
      <section className="band--dark" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="grid-2-col">
            <motion.div className="text-white" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">Why This Process Reduces Hiring Risk</h2>
              <p className="text-xl text-gray-300 leading-relaxed">Our structured approach eliminates common hiring challenges and ensures you get the right workforce, on time, every time.</p>
            </motion.div>
            <motion.ul role="list" className="space-y-4" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {['Pre-verified candidates reduce hiring failures', 'Comprehensive background checks ensure safety', 'Skill testing guarantees competency levels', 'Legal compliance protects from liabilities', 'Replacement guarantee minimises risk'].map((benefit) => (
                <li key={benefit} className="flex items-start gap-4 rounded-2xl p-6 border border-white/10" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)' }}>
                  <CheckSquare className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-white font-semibold text-lg">{benefit}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <motion.div className="cta-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-white">Experience Our Process First-Hand</h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: '#bfdbfe' }}>Start your workforce requirement today and see how our process delivers results</p>
              <Link to="/contact" className="btn btn--white btn--lg inline-flex">
                Start Your Requirement <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
