import { motion } from 'motion/react';
import { Shield, Award, CheckCircle, FileCheck, Users } from 'lucide-react';

export function TrustStrip() {
  const credentials = [
    { icon: Shield, label: 'ISO Certified' },
    { icon: Award, label: 'MSME Registered' },
    { icon: CheckCircle, label: 'Labour Compliant' },
    { icon: FileCheck, label: 'EPF/ESI Registered' },
    { icon: Users, label: 'HR Excellence' },
    { icon: Shield, label: 'Quality Assured' },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#0F172A] via-[#1e293b] to-[#0F172A] overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex space-x-16"
        >
          {[...credentials, ...credentials, ...credentials].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 min-w-max"
            >
              <item.icon className="w-6 h-6 text-[#FACC15]" />
              <span className="text-white font-semibold whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
