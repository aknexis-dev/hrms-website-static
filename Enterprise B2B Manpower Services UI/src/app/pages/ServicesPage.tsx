import { motion } from 'motion/react';
import { Factory, Truck, Wrench, Laptop, Users, Briefcase, TrendingUp, ArrowRight, CheckCircle2, Shield, FileCheck } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const services = [
  {
    icon: Factory,
    title: 'Manufacturing Workforce',
    description: 'Skilled operators, technicians, and production staff for manufacturing facilities',
    features: ['Machine Operators', 'Assembly Line Workers', 'Quality Control Staff', 'Production Supervisors'],
  },
  {
    icon: Truck,
    title: 'Logistics & Warehouse',
    description: 'Trained personnel for warehousing, distribution, and supply chain operations',
    features: ['Warehouse Staff', 'Forklift Operators', 'Inventory Managers', 'Pickers & Packers'],
  },
  {
    icon: Wrench,
    title: 'Technicians & Welders',
    description: 'Certified technical workforce for industrial and construction projects',
    features: ['Certified Welders', 'Electricians', 'Fitters & Mechanics', 'Maintenance Technicians'],
  },
  {
    icon: Laptop,
    title: 'IT Professionals',
    description: 'Qualified IT workforce for technology operations and support',
    features: ['IT Support Engineers', 'Software Developers', 'Network Administrators', 'Tech Support Staff'],
  },
  {
    icon: Users,
    title: 'Corporate Staff',
    description: 'Professional workforce for corporate functions and back-office operations',
    features: ['Admin Executives', 'Data Entry Operators', 'Customer Service', 'HR Personnel'],
  },
  {
    icon: Briefcase,
    title: 'Contract Staffing',
    description: 'Flexible contract staffing solutions for project-based requirements',
    features: ['Project Staff', 'Seasonal Workers', 'Temporary Assignments', 'Contract-to-Hire'],
  },
  {
    icon: TrendingUp,
    title: 'Bulk Hiring',
    description: 'Large-scale recruitment for rapid business expansion and new facilities',
    features: ['Mass Recruitment', 'Campus Hiring', 'Multi-location Deployment', 'Rapid Onboarding'],
  },
];

const engagementModels = [
  {
    title: 'Contract Staffing',
    description: 'Flexible workforce for specific projects or seasonal demands',
    duration: '3-12 months',
  },
  {
    title: 'Temporary Staffing',
    description: 'Short-term workforce for immediate requirements',
    duration: '1 week - 3 months',
  },
  {
    title: 'Permanent Hiring',
    description: 'Full-time employees integrated into your organization',
    duration: 'Long-term',
  },
  {
    title: 'Project-Based',
    description: 'Dedicated teams for specific project completion',
    duration: 'Project lifecycle',
  },
];

const faqs = [
  {
    question: 'What is the typical deployment timeline?',
    answer: 'Our standard deployment timeline is 48-72 hours for most workforce requirements. For specialized roles or bulk hiring, we provide a detailed timeline during the consultation phase.',
  },
  {
    question: 'Do you provide replacement guarantee?',
    answer: 'Yes, we offer a 30-day replacement guarantee. If any deployed workforce does not meet your expectations, we provide free replacement within this period.',
  },
  {
    question: 'Are all workers background verified?',
    answer: 'Absolutely. All our workforce undergoes comprehensive background verification including identity, address, criminal records, and previous employment verification.',
  },
  {
    question: 'What compliance documentation do you provide?',
    answer: 'We provide complete compliance documentation including EPF/ESI registration, labour license, contractor license, and all statutory compliance certificates required by law.',
  },
  {
    question: 'Can you handle multi-location deployment?',
    answer: 'Yes, we have PAN India presence and can deploy workforce across multiple locations simultaneously with centralized coordination and management.',
  },
];

export function ServicesPage() {
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
              Complete Workforce Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title mb-6"
            >
              Workforce Solutions & Staffing Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Comprehensive manpower services across all industries with government-compliant processes, verified workforce, and guaranteed deployment timelines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="blue-button px-10 py-4 inline-flex items-center space-x-2 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                <span>Request Manpower</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Our Service Categories
            </h2>
            <p className="section-subtitle">
              End-to-end workforce solutions tailored to your industry and business requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="list-item-dot text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#FACC15] flex-shrink-0" />
                      <span className="text-gray-700 font-normal">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="text-button-blue group-hover:space-x-3">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Hiring Engagement Models
            </h2>
            <p className="section-subtitle">
              Flexible engagement models to match your business requirements
            </p>
          </motion.div>

          <div className="column-grid gap-6">
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-container"
              >
                <div className="number-box-yellow mb-4">
                  <span>{index + 1}</span>
                </div>
                <h3 className="large-text text-[#0F172A] mb-2">
                  {model.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {model.description}
                </p>
                <div className="badge-blue !bg-blue-50 !px-4 !py-2">
                  {model.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Assurance */}
      <section className="py-20 bg-gradient-to-r from-[#0F172A] via-[#1e293b] to-[#0F172A]">
        <div className="container-responsive">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <Shield className="w-12 h-12 mx-auto mb-4 text-[#FACC15]" />
              <h3 className="large-text mb-2">100% Legal Compliance</h3>
              <p className="text-gray-300 text-sm">
                Full adherence to labour laws, EPF/ESI, and statutory regulations
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white"
            >
              <FileCheck className="w-12 h-12 mx-auto mb-4 text-[#FACC15]" />
              <h3 className="large-text mb-2">Complete Documentation</h3>
              <p className="text-gray-300 text-sm">
                All licenses, certificates, and compliance documents provided
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white"
            >
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-[#FACC15]" />
              <h3 className="large-text mb-2">Verified Workforce</h3>
              <p className="text-gray-300 text-sm">
                Thorough background checks and skill verification for all candidates
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="cta-banner"
          >
            <div className="relative z-10 text-center">
              <h2 className="cta-banner-title mb-4">
                Ready to Scale Your Workforce?
              </h2>
              <p className="cta-banner-text mb-8">
                Get a customized workforce solution proposal within 24 hours
              </p>
              <Link
                to="/contact"
                className="px-10 py-4 bg-white text-[#2563EB] rounded-full font-black shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Get Free Proposal</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle">
              Common queries about our workforce services
            </p>
          </motion.div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Accordion.Item
                  value={`item-${index}`}
                  className="accordion-item"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="accordion-trigger">
                      <span className="question">
                        {faq.question}
                      </span>
                      <ChevronDown className="icon" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="accordion-content">
                    <div className="accordion-content-text">
                      {faq.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="cta-banner"
          >
            <div className="relative z-10 text-center space-y-8">
              <h2 className="cta-banner-title">
                Need Skilled Workforce Today?
              </h2>
              <p className="cta-banner-text">
                Connect with our workforce specialists and get your requirements fulfilled within 48-72 hours
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-12 py-5 bg-white text-[#2563EB] rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
                >
                  Get Proposal
                </Link>
                <a
                  href="tel:+919876543210"
                  className="px-12 py-5 bg-[#FACC15] text-[#0F172A] rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
