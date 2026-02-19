import { motion } from 'motion/react';
import { ArrowRight, FileText } from 'lucide-react';

const TRUST_POINTS = ['No Hidden Charges', '100% Verified', 'Replacement Guarantee'];

/**
 * CTA — Full-width call-to-action band with two action buttons.
 */
export function CTA() {
  return (
    <section
      aria-labelledby="cta-title"
      className="band--light"
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 space-y-8">
            <motion.span
              className="badge badge--blue"
              style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', backdropFilter: 'blur(4px)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Scale Your Workforce?
            </motion.span>

            <motion.h2
              id="cta-title"
              className="text-4xl lg:text-6xl font-black text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Need Skilled Workforce for Your Business?
            </motion.h2>

            <motion.p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: '#bfdbfe' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get verified, skilled manpower deployed within 48-72 hours. Complete compliance, transparent pricing, and replacement guarantee.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a href="/contact" className="btn btn--white btn--lg">
                <FileText className="w-6 h-6" aria-hidden="true" />
                Get Proposal
              </a>
              <a href="/contact" className="btn btn--yellow btn--lg">
                Contact Now
                <ArrowRight className="w-6 h-6" aria-hidden="true" />
              </a>
            </motion.div>

            <ul
              aria-label="Assurances"
              className="flex flex-wrap items-center justify-center gap-8"
              style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}
            >
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="dot-bullet" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
