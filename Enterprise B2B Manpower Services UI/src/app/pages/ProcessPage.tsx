import { motion } from 'motion/react';
import { FileSearch, Users, CheckSquare, Rocket, Headphones, Shield, FileCheck, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const steps = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Requirement Analysis',
    description: 'Understanding your workforce needs and specifications',
    details: 'Our experts conduct detailed consultation to understand your industry, role requirements, skill sets needed, and deployment timeline.',
    compliance: 'NDA & Confidentiality Agreement',
  },
  {
    number: '02',
    icon: Users,
    title: 'Candidate Screening',
    description: 'Sourcing and evaluating qualified candidates',
    details: 'We source candidates from our verified database and conduct preliminary screening based on skills, experience, and availability.',
    compliance: 'Database Privacy Compliance',
  },
  {
    number: '03',
    icon: CheckSquare,
    title: 'Skill Verification',
    description: 'Comprehensive testing and background verification',
    details: 'Candidates undergo skill tests, interviews, background checks, document verification, and reference validation.',
    compliance: 'Police Verification & Document Authentication',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deployment',
    description: 'Rapid onboarding and workforce deployment',
    details: 'Complete onboarding process including documentation, induction, safety training, and deployment at your facility within 48-72 hours.',
    compliance: 'EPF/ESI Registration & Labour Law Compliance',
  },
  {
    number: '05',
    icon: Headphones,
    title: 'Support & Replacement',
    description: 'Ongoing support and replacement guarantee',
    details: 'Continuous monitoring, performance tracking, issue resolution, and free replacement within 30 days if requirements are not met.',
    compliance: '30-Day Replacement SLA',
  },
];

const compliancePoints = [
  'EPF & ESI Registration',
  'Labour License & Contractor License',
  'Shops & Establishment Registration',
  'Professional Tax Registration',
  'GST Registration & Compliance',
  'Workmen Compensation Insurance',
];

const slaPoints = [
  {
    title: '48-72 Hours Deployment',
    description: 'Standard workforce deployment timeline',
  },
  {
    title: '30-Day Replacement',
    description: 'Free replacement if not satisfied',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance',
  },
  {
    title: '100% Documentation',
    description: 'Complete legal compliance',
  },
];

export function ProcessPage() {
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
              Enterprise Deployment Process
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-black text-[#0F172A] mb-6 leading-tight"
            >
              Our Deployment Process
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              A structured, compliant, and efficient 5-step process ensuring quality workforce deployment with complete transparency and legal compliance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Step Number & Icon */}
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start space-x-6 lg:space-x-0 lg:space-y-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FACC15] to-yellow-600 flex items-center justify-center shadow-2xl shadow-[#FACC15]/30">
                        <step.icon className="w-10 h-10 text-[#0F172A]" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center shadow-xl">
                        <span className="text-white font-black text-sm">{step.number}</span>
                      </div>
                    </div>
                    <div className="lg:text-center">
                      <h3 className="text-2xl font-black text-[#0F172A]">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{step.description}</p>
                    </div>
                  </div>

                  {/* Details Card */}
                  <div className="lg:col-span-9">
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-[28px] p-8 shadow-xl border border-gray-100">
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {step.details}
                      </p>
                      <div className="flex items-start space-x-3 bg-white rounded-2xl p-6 shadow-md">
                        <Shield className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-black text-[#0F172A] mb-1">
                            Compliance Checkpoint
                          </div>
                          <div className="text-gray-600">
                            {step.compliance}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-10 top-20 bottom-[-4rem] w-0.5 bg-gradient-to-b from-[#FACC15] to-[#2563EB] opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Compliance Section */}
      <section className="py-24 bg-gradient-to-br from-[#F8FAFC] to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-4">
              Legal Compliance & Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete adherence to all labour laws and statutory requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliancePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[20px] p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <FileCheck className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                  <span className="text-[#0F172A] font-semibold">{point}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Assurance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-4">
              Our Service Level Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guaranteed timelines and quality assurance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slaPoints.map((sla, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-[24px] p-8 shadow-xl border border-gray-100 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1e40af] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-[#0F172A] mb-2">
                  {sla.title}
                </h3>
                <p className="text-gray-600">{sla.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Process Works */}
      <section className="py-24 bg-gradient-to-r from-[#0F172A] via-[#1e293b] to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                Why This Process Reduces Hiring Risk
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our structured approach eliminates common hiring challenges and ensures you get the right workforce, on time, every time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                'Pre-verified candidates reduce hiring failures',
                'Comprehensive background checks ensure safety',
                'Skill testing guarantees competency levels',
                'Legal compliance protects from liabilities',
                'Replacement guarantee minimizes risk',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <CheckSquare className="w-6 h-6 text-[#FACC15] flex-shrink-0 mt-1" />
                  <span className="text-white font-semibold text-lg">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2563EB] via-[#1e40af] to-[#1e3a8a] p-12 lg:p-20 shadow-2xl"
          >
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Experience Our Process First-Hand
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Start your workforce requirement today and see how our process delivers results
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-12 py-5 bg-white text-[#2563EB] rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Start Your Requirement</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
