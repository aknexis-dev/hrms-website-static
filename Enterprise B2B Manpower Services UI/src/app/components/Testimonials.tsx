import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Operations Head',
    company: 'Manufacturing Unit',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2066&auto=format&fit=crop',
    quote: 'HRMS Manpower Solutions provided us with highly skilled workers within 48 hours. Their verification process is thorough and professional. We have been working with them for 3 years now.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'HR Director',
    company: 'Logistics Company',
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663986?q=80&w=2070&auto=format&fit=crop',
    quote: 'The quality of workforce and the speed of deployment exceeded our expectations. Their compliance documentation is impeccable. Highly recommended for large-scale operations.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Plant Manager',
    company: 'Industrial Facility',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop',
    quote: 'We deployed 200+ workers for our new facility through HRMS. The entire process was seamless, and the workforce quality has been consistently excellent. True professionals!',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding bg-white">
      <div className="container-responsive">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge-blue mb-4">
            Client Testimonials
          </div>
          <h2 className="section-title">
            What Our Clients Say
          </h2>
          <p className="section-subtitle">
            Trusted by leading enterprises across industries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-[32px] p-12 shadow-2xl border border-gray-100 backdrop-blur-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Quote */}
              <div className="space-y-6">
                <div className="icon-box !bg-gradient-to-br !from-[#FACC15] !to-yellow-600">
                  <Quote className="w-8 h-8 text-[#0F172A]" />
                </div>

                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl text-gray-700 leading-relaxed"
                >
                  "{current.quote}"
                </motion.p>

                <div className="flex items-center space-x-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#FACC15] text-[#FACC15]" />
                  ))}
                </div>
              </div>

              {/* Right - Client Info */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col items-center text-center space-y-6"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <ImageWithFallback
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-2">
                    {current.name}
                  </h3>
                  <p className="text-[#2563EB] font-semibold mb-1">
                    {current.role}
                  </p>
                  <p className="text-gray-600">
                    {current.company}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-12">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-[#2563EB] w-8'
                      : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
