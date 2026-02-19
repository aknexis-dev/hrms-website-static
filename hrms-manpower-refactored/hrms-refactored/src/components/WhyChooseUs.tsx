import { motion } from 'motion/react';
import { CheckCircle2, Clock, Shield, RefreshCw } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const BENEFITS = [
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

/**
 * WhyChooseUs — Side-by-side image and benefits checklist.
 */
export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-title"
      style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#ffffff' }}
    >
      <div className="container">
        <header className="section-header">
          <span className="section-header__badge">Why Choose Us</span>
          <h2 id="why-title" className="section-header__title">Your Trusted Manpower Partner</h2>
        </header>

        <div className="grid-2-col">
          {/* Left — image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <figure className="img-card" style={{ margin: 0 }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
                alt="Diverse professional team working together"
                className="w-full object-cover"
                style={{ height: '500px' }}
              />
            </figure>

            {/* Floating satisfaction badge */}
            <aside
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
              aria-label="98% client satisfaction rate"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
                  <span className="text-white font-black text-xl">98%</span>
                </div>
                <div>
                  <p className="font-black text-gray-900">Client Satisfaction</p>
                  <p className="text-gray-500 text-sm">Industry Leading</p>
                </div>
              </div>
            </aside>
          </motion.div>

          {/* Right — benefits list */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card flex items-start gap-4"
              >
                <div className="card__icon card__icon--blue flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-500">{benefit.description}</p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0" aria-hidden="true" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
