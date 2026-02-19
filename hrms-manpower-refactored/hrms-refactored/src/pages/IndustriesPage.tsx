import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/ImageWithFallback';

const INDUSTRIES = [
  { title: 'Manufacturing',      image: 'https://images.unsplash.com/photo-1764114908655-9a26d32750a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', problem: 'Skilled operators and production staff shortage', roles: ['Machine Operators', 'Assembly Workers', 'Quality Control', 'Production Supervisors'], stat: '2000+ Workers Deployed' },
  { title: 'Logistics & Warehouse', image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', problem: 'Need for rapid warehouse staff deployment', roles: ['Warehouse Staff', 'Forklift Operators', 'Pickers & Packers', 'Inventory Managers'], stat: '1500+ Staff Supplied' },
  { title: 'Construction',       image: 'https://images.unsplash.com/photo-1694522362256-6c907336af43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', problem: 'Project-based skilled labour requirements', roles: ['Site Workers', 'Masons', 'Carpenters', 'Welders', 'Safety Officers'], stat: '50+ Projects Supported' },
  { title: 'Engineering',        image: 'https://images.unsplash.com/photo-1732885787638-db5ae05bb707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', problem: 'Technical expertise for specialised projects', roles: ['Technicians', 'Engineers', 'Maintenance Staff', 'Field Service Engineers'], stat: '800+ Technicians Deployed' },
  { title: 'Retail',             image: 'https://images.unsplash.com/photo-1764795849833-6e9d6e399a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', problem: 'Customer-facing staff with service orientation', roles: ['Store Associates', 'Cashiers', 'Visual Merchandisers', 'Store Managers'], stat: '1200+ Retail Staff' },
  { title: 'IT & Corporate',     image: 'https://images.unsplash.com/photo-1664382951070-70a6e4ef8ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080', problem: 'Qualified professionals for office operations', roles: ['IT Support', 'Admin Staff', 'Data Entry', 'Customer Service', 'Back Office'], stat: '900+ Professionals Placed' },
];

const TESTIMONIALS = [
  { quote: 'HRMS provided us with 150 manufacturing workers within 72 hours. Their screening process is thorough and professional.', name: 'Suresh Menon', role: 'Plant Manager', company: 'Manufacturing Unit' },
  { quote: 'We scaled our warehouse operations across 3 cities with their support. Excellent coordination and quality workforce.', name: 'Anjali Verma', role: 'Operations Director', company: 'Logistics Company' },
];

export function IndustriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section style={{ paddingTop: '8rem', paddingBottom: '5rem', background: 'linear-gradient(135deg, #f8fafc, #fff, rgba(219,234,254,0.3))' }}>
        <div className="container text-center max-w-4xl mx-auto">
          <motion.span className="section-header__badge" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Cross-Industry Expertise</motion.span>
          <motion.h1 className="section-header__title mt-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Industries We Support</motion.h1>
          <motion.p className="section-header__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Delivering verified, skilled workforce across diverse sectors with industry-specific expertise and rapid deployment capabilities.
          </motion.p>
        </div>
      </section>

      {/* Industry articles */}
      <section aria-label="Industry details" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="space-y-20">
            {INDUSTRIES.map((industry, index) => (
              <motion.article key={industry.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className={`grid-2-col ${index % 2 === 1 ? '' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative img-card group">
                      <ImageWithFallback
                        src={industry.image}
                        alt={`${industry.title} workforce`}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ height: '500px' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" aria-hidden="true" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <span className="badge badge--yellow font-black text-lg px-6 py-3">{industry.stat}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900">{industry.title}</h2>
                    <div className="flex items-start gap-3">
                      <span className="dot-bullet mt-2 flex-shrink-0" aria-hidden="true" />
                      <p className="text-lg text-gray-500 italic">{industry.problem}</p>
                    </div>

                    <div className="card" style={{ background: 'linear-gradient(135deg, #eff6ff, #fff)' }}>
                      <h3 className="text-xl font-black text-gray-900 mb-4">Workforce Roles We Supply</h3>
                      <ul className="card__features">
                        {industry.roles.map((role) => (
                          <li key={role} className="card__feature">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
                            <span className="font-semibold text-gray-700">{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/contact" className="btn btn--primary btn--lg inline-flex">
                      Hire for {industry.title} <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Industry statistics" className="band--dark" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[['10+', 'Industries Served'], ['5000+', 'Workers Deployed'], ['120+', 'Enterprise Clients'], ['98%', 'Client Satisfaction']].map(([val, label]) => (
              <div key={label} className="stat-block">
                <dt className="stat-block__number">{val}</dt>
                <dd className="stat-block__label">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="industry-testimonials-title" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <header className="section-header">
            <h2 id="industry-testimonials-title" className="section-header__title">Client Success Stories</h2>
          </header>
          <ul role="list" className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.li key={t.name} className="card" style={{ background: 'linear-gradient(135deg, #eff6ff, #fff)' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">"{t.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-black text-lg" aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="band--light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <motion.div className="cta-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-white">Ready to Scale Your Industry Workforce?</h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: '#bfdbfe' }}>Get industry-specific workforce solutions with verified candidates and rapid deployment</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="btn btn--white btn--lg">Request Workforce</Link>
                <Link to="/services" className="btn btn--yellow btn--lg">View All Services</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
