import { motion } from 'motion/react';
import { Factory, Truck, Wrench, Laptop, Users, Briefcase, TrendingUp, ArrowRight, CheckCircle2, Shield, FileCheck } from 'lucide-react';
import { Link } from 'react-router';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const SERVICES = [
  { icon: Factory,     title: 'Manufacturing Workforce', description: 'Skilled operators, technicians, and production staff for manufacturing facilities', features: ['Machine Operators', 'Assembly Line Workers', 'Quality Control Staff', 'Production Supervisors'] },
  { icon: Truck,       title: 'Logistics & Warehouse',  description: 'Trained personnel for warehousing, distribution, and supply chain operations', features: ['Warehouse Staff', 'Forklift Operators', 'Inventory Managers', 'Pickers & Packers'] },
  { icon: Wrench,      title: 'Technicians & Welders',  description: 'Certified technical workforce for industrial and construction projects', features: ['Certified Welders', 'Electricians', 'Fitters & Mechanics', 'Maintenance Technicians'] },
  { icon: Laptop,      title: 'IT Professionals',        description: 'Qualified IT workforce for technology operations and support', features: ['IT Support Engineers', 'Software Developers', 'Network Administrators', 'Tech Support Staff'] },
  { icon: Users,       title: 'Corporate Staff',         description: 'Professional workforce for corporate functions and back-office operations', features: ['Admin Executives', 'Data Entry Operators', 'Customer Service', 'HR Personnel'] },
  { icon: Briefcase,   title: 'Contract Staffing',       description: 'Flexible contract staffing solutions for project-based requirements', features: ['Project Staff', 'Seasonal Workers', 'Temporary Assignments', 'Contract-to-Hire'] },
  { icon: TrendingUp,  title: 'Bulk Hiring',             description: 'Large-scale recruitment for rapid business expansion and new facilities', features: ['Mass Recruitment', 'Campus Hiring', 'Multi-location Deployment', 'Rapid Onboarding'] },
];

const ENGAGEMENT_MODELS = [
  { title: 'Contract Staffing',  description: 'Flexible workforce for specific projects or seasonal demands', duration: '3-12 months' },
  { title: 'Temporary Staffing', description: 'Short-term workforce for immediate requirements', duration: '1 week – 3 months' },
  { title: 'Permanent Hiring',   description: 'Full-time employees integrated into your organization', duration: 'Long-term' },
  { title: 'Project-Based',      description: 'Dedicated teams for specific project completion', duration: 'Project lifecycle' },
];

const FAQS = [
  { q: 'What is the typical deployment timeline?',        a: 'Our standard deployment timeline is 48-72 hours for most workforce requirements. For specialised roles or bulk hiring, we provide a detailed timeline during the consultation phase.' },
  { q: 'Do you provide replacement guarantee?',           a: 'Yes, we offer a 30-day replacement guarantee. If any deployed workforce does not meet your expectations, we provide free replacement within this period.' },
  { q: 'Are all workers background verified?',            a: 'Absolutely. All our workforce undergoes comprehensive background verification including identity, address, criminal records, and previous employment verification.' },
  { q: 'What compliance documentation do you provide?',   a: 'We provide complete compliance documentation including EPF/ESI registration, labour license, contractor license, and all statutory compliance certificates required by law.' },
  { q: 'Can you handle multi-location deployment?',       a: 'Yes, we have PAN India presence and can deploy workforce across multiple locations simultaneously with centralised coordination and management.' },
];

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section style={{ paddingTop: '8rem', paddingBottom: '5rem', background: 'linear-gradient(135deg, #f8fafc, #fff, rgba(219,234,254,0.3))' }}>
        <div className="container text-center max-w-4xl mx-auto">
          <motion.span className="section-header__badge" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Complete Workforce Solutions</motion.span>
          <motion.h1 className="section-header__title mt-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Workforce Solutions &amp; Staffing Services</motion.h1>
          <motion.p className="section-header__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Comprehensive manpower services across all industries with government-compliant processes, verified workforce, and guaranteed deployment timelines.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8">
            <Link to="/contact" className="btn btn--primary btn--lg inline-flex">
              Request Manpower <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service grid */}
      <section aria-labelledby="service-cats-title" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <header className="section-header">
            <h2 id="service-cats-title" className="section-header__title">Our Service Categories</h2>
            <p className="section-header__subtitle">End-to-end workforce solutions tailored to your industry and business requirements</p>
          </header>
          <ul role="list" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc, i) => (
              <motion.li key={svc.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }}>
                <article className="card card--hover h-full">
                  <div className="card__icon card__icon--blue mb-6">
                    <svc.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="card__title">{svc.title}</h3>
                  <p className="card__description mb-6">{svc.description}</p>
                  <ul className="card__features mb-6" aria-label="Roles covered">
                    {svc.features.map((f) => (
                      <li key={f} className="card__feature text-sm">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="card__link">View Details <ArrowRight className="w-4 h-4" aria-hidden="true" /></span>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Engagement models */}
      <section aria-labelledby="engagement-title" className="band--light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <header className="section-header">
            <h2 id="engagement-title" className="section-header__title">Hiring Engagement Models</h2>
            <p className="section-header__subtitle">Flexible engagement models to match your business requirements</p>
          </header>
          <ul role="list" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGAGEMENT_MODELS.map(({ title, description, duration }, i) => (
              <motion.li key={title} className="card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="card__icon card__icon--yellow mb-4">
                  <span className="text-gray-900 font-black text-xl">{i + 1}</span>
                </div>
                <h3 className="card__title">{title}</h3>
                <p className="card__description text-sm mb-3">{description}</p>
                <span className="badge badge--blue">{duration}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compliance band */}
      <section aria-label="Compliance assurance" className="band--dark" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <ul role="list" className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Shield,      title: '100% Legal Compliance',    desc: 'Full adherence to labour laws, EPF/ESI, and statutory regulations' },
              { icon: FileCheck,   title: 'Complete Documentation',   desc: 'All licences, certificates, and compliance documents provided' },
              { icon: CheckCircle2, title: 'Verified Workforce',      desc: 'Thorough background checks and skill verification for all candidates' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.li key={title} className="text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Icon className="w-12 h-12 mx-auto mb-4 text-amber-400" aria-hidden="true" />
                <h3 className="text-xl font-black mb-2">{title}</h3>
                <p className="text-gray-300 text-sm">{desc}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container max-w-4xl">
          <motion.div className="cta-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black text-white">Ready to Scale Your Workforce?</h2>
              <p className="text-xl" style={{ color: '#bfdbfe' }}>Get a customised workforce solution proposal within 24 hours</p>
              <Link to="/contact" className="btn btn--white btn--lg inline-flex">Get Free Proposal <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="band--light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container max-w-3xl">
          <header className="section-header">
            <h2 id="faq-title" className="section-header__title">Frequently Asked Questions</h2>
            <p className="section-header__subtitle">Common queries about our workforce services</p>
          </header>
          <Accordion.Root type="single" collapsible className="space-y-4">
            {FAQS.map(({ q, a }, i) => (
              <motion.div key={q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Accordion.Item value={`faq-${i}`} className="card overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                      <span className="text-lg font-black text-gray-900 pr-8">{q}</span>
                      <ChevronDown className="w-5 h-5 text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" aria-hidden="true" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <p className="px-6 pb-6 text-gray-500 leading-relaxed">{a}</p>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <motion.div className="cta-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-white">Need Skilled Workforce Today?</h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: '#bfdbfe' }}>Connect with our workforce specialists and get your requirements fulfilled within 48-72 hours</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="btn btn--white btn--lg">Get Proposal</Link>
                <a href="tel:+919876543210" className="btn btn--yellow btn--lg">Call Now</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
