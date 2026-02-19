import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    role: 'Operations Head',
    company: 'Manufacturing Unit',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    quote: 'HRMS Manpower Solutions provided us with highly skilled workers within 48 hours. Their verification process is thorough and professional. We have been working with them for 3 years now.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'HR Director',
    company: 'Logistics Company',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    quote: 'The quality of workforce and the speed of deployment exceeded our expectations. Their compliance documentation is impeccable. Highly recommended for large-scale operations.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Plant Manager',
    company: 'Industrial Facility',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    quote: 'We deployed 200+ workers for our new facility through HRMS. The entire process was seamless, and the workforce quality has been consistently excellent. True professionals!',
    rating: 5,
  },
];

/**
 * Testimonials — Client quote carousel with navigation controls.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const current = TESTIMONIALS[index];

  return (
    <section
      aria-labelledby="testimonials-title"
      style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#ffffff' }}
    >
      <div className="container">
        <header className="section-header">
          <span className="section-header__badge">Client Testimonials</span>
          <h2 id="testimonials-title" className="section-header__title">What Our Clients Say</h2>
          <p className="section-header__subtitle">Trusted by leading enterprises across industries</p>
        </header>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Main testimonial card */}
          <article className="testimonial-card" aria-live="polite" aria-atomic="true">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Quote side */}
              <div>
                <div className="testimonial-card__quote-icon" aria-hidden="true">
                  <Quote className="w-8 h-8 text-gray-900" />
                </div>

                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="testimonial-card__text"
                >
                  "{current.quote}"
                </motion.blockquote>

                <div className="testimonial-card__stars" aria-label={`${current.rating} out of 5 stars`}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
              </div>

              {/* Client info */}
              <motion.div
                key={`client-${index}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col items-center text-center gap-6"
              >
                <figure className="w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-white" style={{ margin: 0 }}>
                  <ImageWithFallback
                    src={current.image}
                    alt={`Portrait of ${current.name}`}
                    className="w-full h-full object-cover"
                  />
                </figure>

                <figcaption className="text-center">
                  <p className="text-2xl font-black text-gray-900">{current.name}</p>
                  <p className="text-blue-600 font-semibold">{current.role}</p>
                  <p className="text-gray-500">{current.company}</p>
                </figcaption>
              </motion.div>
            </div>

            {/* Navigation */}
            <nav
              aria-label="Testimonial navigation"
              className="flex items-center justify-center gap-4 mt-12"
            >
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>

              <div className="flex gap-2" role="tablist">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-blue-600 w-8' : 'bg-gray-300 w-3'}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            </nav>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
