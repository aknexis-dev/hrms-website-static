import { motion } from 'motion/react';
import { ArrowRight, FileText } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2563EB] via-[#1e40af] to-[#1e3a8a] p-12 lg:p-20 shadow-2xl"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }} />
          </div>

          <div className="relative z-10 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold"
            >
              Ready to Scale Your Workforce?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-black text-white leading-tight"
            >
              Need Skilled Workforce for Your Business?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Get verified, skilled manpower deployed within 48-72 hours. Complete compliance, transparent pricing, and replacement guarantee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <button className="px-12 py-5 bg-white text-[#2563EB] rounded-full font-black text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <FileText className="w-6 h-6" />
                <span>Get Proposal</span>
              </button>

              <button className="px-12 py-5 bg-[#FACC15] text-[#0F172A] rounded-full font-black text-lg shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Contact Now</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8 flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FACC15] rounded-full"></div>
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FACC15] rounded-full"></div>
                <span>100% Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FACC15] rounded-full"></div>
                <span>Replacement Guarantee</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
