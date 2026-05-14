import { motion } from 'motion/react';
import { CheckCircle2, Clock, Shield, RefreshCw } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const benefits = [
  {
    icon: CheckCircle2,
    title: 'Pre-Verified Workforce',
    description: 'All candidates undergo thorough background verification',
  },
  {
    icon: Clock,
    title: 'Fast Deployment',
    description: '48-72 hours workforce deployment guarantee',
  },
  {
    icon: Shield,
    title: 'Legal Compliance Assurance',
    description: 'Complete adherence to labour laws and regulations',
  },
  {
    icon: RefreshCw,
    title: 'Replacement Guarantee',
    description: 'Free replacement within 30 days if not satisfied',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-blue mb-4">
            Why Choose Us
          </div>
          <h2 className="section-title">
            Your Trusted Manpower Partner
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Office Environment"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Progress Indicator */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1e40af] flex items-center justify-center">
                  <span className="text-white font-black text-xl">98%</span>
                </div>
                <div>
                  <div className="text-[#0F172A] font-black text-lg">Client Satisfaction</div>
                  <div className="text-gray-600 text-sm">Industry Leading</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-container !p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="icon-box !w-14 !h-14 flex-shrink-0">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="large-text text-[#0F172A] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-[#FACC15] flex-shrink-0" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
