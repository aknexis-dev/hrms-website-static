import { motion } from 'motion/react';
import { Factory, Truck, Wrench, Laptop, ArrowRight } from 'lucide-react';

const services = [
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

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[#F8FAFC] to-blue-50/30">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-blue mb-4">
            Our Services
          </div>
          <h2 className="section-title">
            Service Expertise
          </h2>
          <p className="section-subtitle">
            Comprehensive workforce solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group card-container"
            >
              <div className="icon-box mb-6 group-hover:scale-110">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-black text-[#0F172A] mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="list-item-dot">
                    <div className="dot"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-button-blue group-hover:space-x-3">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-10 py-4 blue-button shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
