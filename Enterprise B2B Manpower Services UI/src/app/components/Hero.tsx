import { motion } from 'motion/react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-blue-50/30 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-5 py-2 bg-blue-100 text-[#2563EB] rounded-full text-sm font-semibold">
              🏆 Trusted by 120+ Enterprises
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-[#0F172A] leading-[1.1]">
              Skilled Workforce Deployment Solutions for Your Business
            </h1>
            
            <div className="space-y-3 text-xl text-gray-600">
              <p className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#FACC15] rounded-full"></span>
                <span>Supplying Skilled | Semi-Skilled | Unskilled Workforce</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#FACC15] rounded-full"></span>
                <span>Manufacturing | Logistics | IT | Corporate Operations</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[#2563EB] to-[#1e40af] text-white rounded-full font-semibold shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Request Manpower</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-[#0F172A] rounded-full font-semibold border-2 border-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Book Consultation</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzcxMjUyNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Business Team"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#FACC15] to-yellow-600 rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-[#0F172A] font-black text-3xl">5000+</div>
              <div className="text-[#0F172A] font-semibold text-sm">Workforce Deployed</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-[28px] p-8 shadow-2xl border border-white/50">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <StatItem number="5000+" label="Workforce Deployed" />
              <StatItem number="120+" label="Clients Served" />
              <StatItem number="10+" label="Industries Covered" />
              <StatItem number="PAN India" label="Presence" />
              <StatItem number="100%" label="Government Registered" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-black text-[#2563EB] mb-2">{number}</div>
      <div className="text-sm text-gray-600 font-semibold">{label}</div>
    </div>
  );
}
