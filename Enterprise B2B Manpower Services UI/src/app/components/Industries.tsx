import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const industries = [
  {
    title: 'Manufacturing',
    image: 'https:///photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Construction',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'IT',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Corporate',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Engineering',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5f64d0b0?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
  },
];

export function Industries() {
  return (
    <section id="industries" className="section-padding bg-[#F8FAFC]">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-blue mb-4">
            Industries We Serve
          </div>
          <h2 className="section-title">
            Workforce Solutions Across Sectors
          </h2>
          <p className="section-subtitle">
            Providing skilled manpower to diverse industries with verified credentials and rapid deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="image-card"
            >
              <div className="relative h-72">
                <ImageWithFallback
                  src={industry.image}
                  alt={industry.title}
                  className="image-card-img"
                />
                <div className="image-card-overlay" />

                <div className="image-card-content">
                  <h3 className="image-card-title">
                    {industry.title}
                  </h3>
                  <div className="image-card-action">
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
