import { motion } from 'motion/react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background Gradient */}
      <div className="hero-bg-gradient" />

      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="badge-blue">
              🏆 Trusted by 120+ Enterprises
            </div>

            <h1 className="hero-title">
              Skilled Workforce Deployment Solutions for Your Business
            </h1>

            <div className="hero-description">
              <p className="flex-center space-x-2">
                <span className="w-2 h-2 bg-[#FACC15] rounded-full"></span>
                <span>Supplying Skilled | Semi-Skilled | Unskilled Workforce</span>
              </p>
              <p className="flex-center space-x-2">
                <span className="w-2 h-2 bg-[#FACC15] rounded-full"></span>
                <span>Manufacturing | Logistics | IT | Corporate Operations</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 blue-button shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Request Manpower</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 outline-button flex items-center space-x-2"
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
            <div className="hero-image-container">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Corporate Building"
                className="w-full h-[600px] object-cover"
              />
              <div className="hero-image-overlay" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="floating-badge"
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
          className="floating-stats-container"
        >
          <div className="floating-stats-bar">
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
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
