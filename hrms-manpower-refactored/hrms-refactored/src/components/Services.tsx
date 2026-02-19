import { motion } from 'motion/react';
import { Factory, Truck, Wrench, Laptop, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Factory,
    title: 'Manufacturing Workforce',
    description: 'Skilled operators, technicians, and production staff for manufacturing units',
    features: ['Machine Operators', 'Assembly Workers', 'Quality Control', 'Production Staff'],
  },
  {
    icon: Truck,
    title: 'Logistics & Warehouse Staff',
    description: 'Trained personnel for warehousing, inventory, and supply chain operations',
    features: ['Warehouse Staff', 'Forklift Operators', 'Pickers & Packers', 'Inventory Managers'],
  },
  {
    icon: Wrench,
    title: 'Technicians & Welders',
    description: 'Certified technical workforce for industrial and construction projects',
    features: ['Welders', 'Electricians', 'Fitters', 'Maintenance Staff'],
  },
  {
    icon: Laptop,
    title: 'IT & Corporate Professionals',
    description: 'Qualified professionals for IT operations and corporate functions',
    features: ['IT Support', 'Data Entry', 'Back Office', 'Customer Service'],
  },
];

/**
 * Services — Card grid showcasing core service categories.
 */
export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'linear-gradient(135deg, #f8fafc 0%, rgba(219,234,254,0.3) 100%)' }}
    >
      <div className="container">
        <header className="section-header">
          <span className="section-header__badge">Our Services</span>
          <h2 id="services-title" className="section-header__title">Service Expertise</h2>
          <p className="section-header__subtitle">
            Comprehensive workforce solutions tailored to your business needs
          </p>
        </header>

        <ul
          role="list"
          aria-label="Service categories"
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {SERVICES.map((service, index) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <article className="card card--hover group h-full">
                <div className="card__icon card__icon--blue mb-6">
                  <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>

                <h3 className="card__title">{service.title}</h3>
                <p className="card__description mb-6">{service.description}</p>

                <ul className="card__features mb-6" aria-label={`${service.title} specialisations`}>
                  {service.features.map((feature) => (
                    <li key={feature} className="card__feature">
                      <span className="dot-bullet" aria-hidden="true" />
                      <span className="card__feature-label">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <span className="card__link" aria-label={`Learn more about ${service.title}`}>
                    Learn More
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>

        <div className="text-center">
          <motion.a
            href="/services"
            className="btn btn--primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            View All Services
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
