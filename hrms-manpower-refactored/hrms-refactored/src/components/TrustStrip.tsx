import { motion } from 'motion/react';
import { Shield, Award, CheckCircle, FileCheck, Users } from 'lucide-react';

const CREDENTIALS = [
  { icon: Shield,      label: 'ISO Certified' },
  { icon: Award,       label: 'MSME Registered' },
  { icon: CheckCircle, label: 'Labour Compliant' },
  { icon: FileCheck,   label: 'EPF/ESI Registered' },
  { icon: Users,       label: 'HR Excellence' },
  { icon: Shield,      label: 'Quality Assured' },
];

/**
 * TrustStrip — Auto-scrolling marquee that highlights
 * credentials and compliance badges.
 */
export function TrustStrip() {
  const items = [...CREDENTIALS, ...CREDENTIALS, ...CREDENTIALS];

  return (
    <aside
      aria-label="Trust credentials"
      className="band--dark overflow-hidden"
      style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
    >
      <motion.ul
        role="list"
        aria-label="Certifications and registrations"
        className="flex gap-8"
        style={{ width: 'max-content' }}
        animate={{ x: [0, -1200] }}
        transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 24, ease: 'linear' } }}
      >
        {items.map((item, index) => (
          <li key={index} className="trust-pill">
            <item.icon className="w-5 h-5 text-amber-400 flex-shrink-0" aria-hidden="true" />
            <span className="trust-pill__label">{item.label}</span>
          </li>
        ))}
      </motion.ul>
    </aside>
  );
}
