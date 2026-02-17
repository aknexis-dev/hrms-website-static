import { motion } from 'motion/react';
import { FileSearch, Users, CheckSquare, Rocket, Headphones } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Requirement Analysis',
    description: 'Understanding your workforce needs and specifications',
  },
  {
    number: '02',
    icon: Users,
    title: 'Candidate Screening',
    description: 'Sourcing and evaluating qualified candidates',
  },
  {
    number: '03',
    icon: CheckSquare,
    title: 'Skill Verification',
    description: 'Comprehensive testing and background verification',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deployment',
    description: 'Rapid onboarding and workforce deployment',
  },
  {
    number: '05',
    icon: Headphones,
    title: 'Support & Replacement',
    description: 'Ongoing support and replacement guarantee',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-5 py-2 bg-[#FACC15]/20 text-[#FACC15] rounded-full text-sm font-semibold mb-4">
            Our Process
          </div>
          <h2 className="text-5xl font-black text-white mb-4">
            Enterprise Work Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Streamlined 5-step process ensuring quality workforce deployment
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#FACC15] via-[#FACC15] to-[#FACC15] transform -translate-y-1/2 opacity-30" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Glowing Circle */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#FACC15] to-yellow-600 flex items-center justify-center shadow-2xl shadow-[#FACC15]/30 relative z-10">
                    <step.icon className="w-10 h-10 text-[#0F172A]" />
                  </div>
                  
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-[#2563EB] flex items-center justify-center shadow-xl border-4 border-[#0F172A] z-20">
                    <span className="text-white font-black text-sm">{step.number}</span>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#FACC15] blur-2xl opacity-20 animate-pulse" />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-black text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white/5 backdrop-blur-xl rounded-[24px] p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
              <div className="text-center">
                <div className="text-4xl font-black text-[#FACC15] mb-2">48-72 Hours</div>
                <div className="text-gray-400">Deployment Time</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-black text-[#FACC15] mb-2">100%</div>
                <div className="text-gray-400">Verified Workforce</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-black text-[#FACC15] mb-2">30 Days</div>
                <div className="text-gray-400">Replacement Guarantee</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
