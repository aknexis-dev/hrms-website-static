import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const INDUSTRIES = [
  { title: 'Manufacturing', image: 'https://images.unsplash.com/photo-1764114908655-9a26d32750a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800' },
  { title: 'Logistics',     image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800' },
  { title: 'Construction',  image: 'https://images.unsplash.com/photo-1694522362256-6c907336af43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800' },
  { title: 'IT',            image: 'https://images.unsplash.com/photo-1664382951070-70a6e4ef8ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800' },
  { title: 'Corporate',     image: 'https://images.unsplash.com/photo-1711720743865-10787dd6934a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800' },
  { title: 'Engineering',   image: 'https://images.unsplash.com/photo-1732885787638-db5ae05bb707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800' },
  { title: 'Retail',        image: 'https://images.unsplash.com/photo-1764795849833-6e9d6e399a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800' },
];

/**
 * Industries — Grid of industry verticals served.
 */
export function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-title"
      className="band--light"
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div className="container">
        <header className="section-header">
          <span className="section-header__badge">Industries We Serve</span>
          <h2 id="industries-title" className="section-header__title">
            Workforce Solutions Across Sectors
          </h2>
          <p className="section-header__subtitle">
            Providing skilled manpower to diverse industries with verified credentials and rapid deployment
          </p>
        </header>

        <ul
          role="list"
          aria-label="Industries served"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {INDUSTRIES.map((industry, index) => (
            <motion.li
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <article className="industry-card">
                <ImageWithFallback
                  src={industry.image}
                  alt={`${industry.title} workforce`}
                  className="industry-card__image"
                />
                <div className="industry-card__overlay" aria-hidden="true" />
                <div className="industry-card__content">
                  <h3 className="industry-card__title">{industry.title}</h3>
                  <p className="industry-card__cta" aria-hidden="true">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
