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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-blue-100 text-[#2563EB] rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-5xl font-black text-[#0F172A] mb-4">
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
                src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWxzJTIwdGVhbXxlbnwxfHx8fDE3NzEyMTU5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Team"
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
                className="bg-white/80 backdrop-blur-xl rounded-[24px] p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1e40af] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-[#0F172A] mb-2">
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
