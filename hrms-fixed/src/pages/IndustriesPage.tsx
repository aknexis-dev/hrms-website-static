import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const industries = [
  {
    title: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1764114908655-9a26d32750a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMHdvcmtlcnMlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MTMwODcwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Skilled operators and production staff shortage',
    roles: ['Machine Operators', 'Assembly Workers', 'Quality Control', 'Production Supervisors'],
    stat: '2000+ Workers Deployed',
  },
  {
    title: 'Logistics & Warehouse',
    image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjB3b3JrZXJ8ZW58MXx8fHwxNzcxMzA4NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Need for rapid warehouse staff deployment',
    roles: ['Warehouse Staff', 'Forklift Operators', 'Pickers & Packers', 'Inventory Managers'],
    stat: '1500+ Staff Supplied',
  },
  {
    title: 'Construction',
    image: 'https://images.unsplash.com/photo-1694522362256-6c907336af43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBzYWZldHklMjBoZWxtZXR8ZW58MXx8fHwxNzcxMzA4NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Project-based skilled labour requirements',
    roles: ['Site Workers', 'Masons', 'Carpenters', 'Welders', 'Safety Officers'],
    stat: '50+ Projects Supported',
  },
  {
    title: 'Engineering',
    image: 'https://images.unsplash.com/photo-1732885787638-db5ae05bb707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlY2huaWNpYW4lMjB3b3JrfGVufDF8fHx8MTc3MTMwODcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Technical expertise for specialized projects',
    roles: ['Technicians', 'Engineers', 'Maintenance Staff', 'Field Service Engineers'],
    stat: '800+ Technicians Deployed',
  },
  {
    title: 'Retail',
    image: 'https://images.unsplash.com/photo-1764795849833-6e9d6e399a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHN0YWZmJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTMwODcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Customer-facing staff with service orientation',
    roles: ['Store Associates', 'Cashiers', 'Visual Merchandisers', 'Store Managers'],
    stat: '1200+ Retail Staff',
  },
  {
    title: 'IT & Corporate',
    image: 'https://images.unsplash.com/photo-1664382951070-70a6e4ef8ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHByb2Zlc3Npb25hbCUyMG9mZmljZSUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MTMwODcwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
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
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-5 py-2 bg-blue-100 text-[#2563EB] rounded-full text-sm font-semibold mb-6"
            >
              Cross-Industry Expertise
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-black text-[#0F172A] mb-6 leading-tight"
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
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
                    <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-4">
                      {industry.title}
                    </h2>
                    <div className="flex items-start space-x-3 mb-6">
                      <div className="w-2 h-2 bg-[#FACC15] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-lg text-gray-600 italic">
                        {industry.problem}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-[24px] p-8 border border-gray-100 shadow-lg">
                    <h3 className="text-xl font-black text-[#0F172A] mb-4">
                      Workforce Roles We Supply
                    </h3>
                    <div className="space-y-3">
                      {industry.roles.map((role, rIndex) => (
                        <div key={rIndex} className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                          <span className="text-gray-700 font-semibold">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 px-10 py-4 bg-gradient-to-r from-[#2563EB] to-[#1e40af] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-4">
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
                className="bg-gradient-to-br from-blue-50 to-white rounded-[28px] p-8 shadow-xl border border-gray-100"
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
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2563EB] via-[#1e40af] to-[#1e3a8a] p-12 lg:p-20 shadow-2xl"
          >
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Ready to Scale Your Industry Workforce?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Get industry-specific workforce solutions with verified candidates and rapid deployment
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-12 py-5 bg-white text-[#2563EB] rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Request Workforce
                </Link>
                <Link
                  to="/services"
                  className="px-12 py-5 bg-[#FACC15] text-[#0F172A] rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300"
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
