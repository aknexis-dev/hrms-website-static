import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const industries = [
  {
    title: 'Manufacturing',
    image: 'https://sh.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    problem: 'Skilled operators and production staff shortage',
    roles: ['Machine Operators', 'Assembly Workers', 'Quality Control', 'Production Supervisors'],
    stat: '2000+ Workers Deployed',
  },
  {
    title: 'Logistics & Warehouse',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    problem: 'Need for rapid warehouse staff deployment',
    roles: ['Warehouse Staff', 'Forklift Operators', 'Pickers & Packers', 'Inventory Managers'],
    stat: '1500+ Staff Supplied',
  },
  {
    title: 'Construction',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop',
    problem: 'Project-based skilled labour requirements',
    roles: ['Site Workers', 'Masons', 'Carpenters', 'Welders', 'Safety Officers'],
    stat: '50+ Projects Supported',
  },
  {
    title: 'Engineering',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5f64d0b0?q=80&w=2070&auto=format&fit=crop',
    problem: 'Technical expertise for specialized projects',
    roles: ['Technicians', 'Engineers', 'Maintenance Staff', 'Field Service Engineers'],
    stat: '800+ Technicians Deployed',
  },
  {
    title: 'Retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    problem: 'Customer-facing staff with service orientation',
    roles: ['Store Associates', 'Cashiers', 'Visual Merchandisers', 'Store Managers'],
    stat: '1200+ Retail Staff',
  },
  {
    title: 'IT & Corporate',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    problem: 'Qualified professionals for office operations',
    roles: ['IT Support', 'Admin Staff', 'Data Entry', 'Customer Service', 'Back Office'],
    stat: '900+ Professionals Placed',
  },
];

const testimonials = [
  {
    quote: 'HRMS provided us with 150 manufacturing workers within 72 hours. Their screening process is thorough and professional.',
    name: 'Suresh Menon',
    role: 'Plant Manager',
    company: 'Manufacturing Unit',
  },
  {
    quote: 'We scaled our warehouse operations across 3 cities with their support. Excellent coordination and quality workforce.',
    name: 'Anjali Verma',
    role: 'Operations Director',
    company: 'Logistics Company',
  },
];

export function IndustriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="badge-blue mb-6"
            >
              Cross-Industry Expertise
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title mb-6"
            >
              Industries We Support
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Delivering verified, skilled workforce across diverse sectors with industry-specific expertise and rapid deployment capabilities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Industry Cards Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-[32px] overflow-hidden shadow-2xl group">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="inline-block px-6 py-3 bg-[#FACC15] text-[#0F172A] rounded-full font-black text-lg shadow-xl">
                        {industry.stat}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h2 className="section-title">
                      {industry.title}
                    </h2>
                    <div className="flex-start mb-6">
                      <div className="w-2 h-2 bg-[#FACC15] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-lg text-gray-600 italic">
                        {industry.problem}
                      </p>
                    </div>
                  </div>

                  <div className="card-container !p-8">
                    <h3 className="large-text text-[#0F172A] mb-4">
                      Workforce Roles We Supply
                    </h3>
                    <div className="space-y-3">
                      {industry.roles.map((role, rIndex) => (
                        <div key={rIndex} className="list-item-dot">
                          <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                          <span className="text-gray-700 font-semibold">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="blue-button px-10 py-4 inline-flex items-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <span>Hire for {industry.title}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#0F172A] via-[#1e293b] to-[#0F172A]">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="text-5xl font-black text-[#FACC15] mb-2">10+</div>
              <div className="text-gray-300">Industries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white"
            >
              <div className="text-5xl font-black text-[#FACC15] mb-2">5000+</div>
              <div className="text-gray-300">Workers Deployed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white"
            >
              <div className="text-5xl font-black text-[#FACC15] mb-2">120+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white"
            >
              <div className="text-5xl font-black text-[#FACC15] mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Strip */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Client Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card-container !p-8"
              >
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1e40af] flex items-center justify-center text-white font-black text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-[#0F172A]">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry CTA */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="cta-banner !lg:p-20"
          >
            <div className="relative z-10 text-center space-y-8">
              <h2 className="cta-banner-title">
                Ready to Scale Your Industry Workforce?
              </h2>
              <p className="cta-banner-text">
                Get industry-specific workforce solutions with verified candidates and rapid deployment
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-12 py-5 bg-white text-[#2563EB] rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
                >
                  Request Workforce
                </Link>
                <Link
                  to="/services"
                  className="px-12 py-5 bg-[#FACC15] text-[#0F172A] rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
