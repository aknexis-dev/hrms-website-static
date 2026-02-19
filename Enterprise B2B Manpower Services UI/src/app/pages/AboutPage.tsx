import { motion } from 'motion/react';
import { Target, Eye, Award, Shield, Users, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Complete transparency in all our operations and dealings',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Uncompromising standards in workforce verification and deployment',
  },
  {
    icon: Users,
    title: 'Client Focus',
    description: 'Your success is our priority in every engagement',
  },
];

const stats = [
  { number: '2015', label: 'Established' },
  { number: '5000+', label: 'Workforce Deployed' },
  { number: '120+', label: 'Enterprise Clients' },
  { number: '10+', label: 'Industries' },
  { number: '98%', label: 'Client Retention' },
  { number: 'PAN India', label: 'Presence' },
];

const certifications = [
  'ISO 9001:2015 Certified',
  'MSME Registered',
  'Labour License Holder',
  'EPF & ESI Registered',
  'GST Registered',
  'Professional Indemnity Insured',
];

export function AboutPage() {
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
              Trusted Since 2015
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title mb-6"
            >
              About HRMS Manpower Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              A government-registered, ISO-certified manpower solutions provider delivering verified workforce across industries with complete legal compliance and operational excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="section-title">
                Leading Workforce Solutions Provider in India
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Established in 2015, HRMS Manpower Solutions has emerged as a trusted partner for enterprises seeking reliable, verified, and skilled workforce across multiple industries. Our commitment to quality, compliance, and client satisfaction has positioned us as a preferred manpower services provider.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a robust presence across India, we have successfully deployed over 5000+ workforce members for 120+ enterprise clients, maintaining a 98% client retention rate through our exceptional service delivery and unwavering focus on operational excellence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are fully compliant with all Indian labour laws, hold necessary certifications including ISO 9001:2015, and maintain complete transparency in our operations. Our government registration and statutory compliance ensure that your organization remains protected from legal liabilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[32px] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
                  alt="HRMS Corporate Office"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gradient-to-br from-[#F8FAFC] to-blue-50/30">
        <div className="container-responsive">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-container !p-10"
            >
              <div className="icon-box mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#0F172A] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To bridge the workforce gap in Indian industries by providing verified, skilled, and compliant manpower solutions that empower businesses to achieve their operational goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-container !p-10"
            >
              <div className="icon-box !bg-gradient-to-br !from-[#FACC15] !to-yellow-600 mb-6">
                <Eye className="w-8 h-8 text-[#0F172A]" />
              </div>
              <h3 className="text-2xl font-black text-[#0F172A] mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be India's most trusted and preferred manpower solutions provider, recognized for quality, compliance, and exceptional client service across all industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#2563EB] to-[#1e40af] rounded-[28px] p-10 shadow-xl text-white"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">Excellence Driven</h3>
              <p className="text-blue-100 leading-relaxed">
                We are committed to operational excellence, continuous improvement, and delivering value that exceeds client expectations in every engagement.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-container !p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center mx-auto mb-6 border-2 border-[#2563EB]">
                  <value.icon className="w-7 h-7 text-[#2563EB]" />
                </div>
                <h3 className="large-text text-[#0F172A] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-[#0F172A] via-[#1e293b] to-[#0F172A]">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl font-black text-[#FACC15] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Certifications & Compliance
            </h2>
            <p className="section-subtitle">
              Fully certified and compliant with all regulatory requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-container !p-8 flex items-center space-x-4"
              >
                <Shield className="w-10 h-10 text-[#2563EB] flex-shrink-0" />
                <span className="text-[#0F172A] font-semibold text-lg">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-[32px] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1454165833767-131f36967718?q=80&w=2070&auto=format&fit=crop"
                  alt="Business Partnership"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="section-title">
                Why Clients Trust Us
              </h2>

              {[
                {
                  icon: Clock,
                  title: 'Proven Track Record',
                  description: '9+ years of consistent service delivery across industries',
                },
                {
                  icon: Shield,
                  title: 'Legal Protection',
                  description: 'Complete compliance shielding clients from liabilities',
                },
                {
                  icon: Users,
                  title: 'Quality Workforce',
                  description: 'Thoroughly verified and skilled candidates every time',
                },
                {
                  icon: TrendingUp,
                  title: 'Scalable Solutions',
                  description: 'From 10 to 1000+ workforce, we scale with your needs',
                },
              ].map((reason, index) => (
                <div key={index} className="flex-start">
                  <div className="icon-box !w-12 !h-12 flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="large-text text-[#0F172A] mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Partner With Us Today
              </h2>
              <p className="cta-banner-text">
                Join 120+ enterprises who trust HRMS Manpower Solutions for their workforce needs
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-12 py-5 bg-white text-[#2563EB] rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
