import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const industries = [
  {
    title: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1764114908655-9a26d32750a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeSUyMHdvcmtlcnMlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MTMwODcwNnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Logistics',
    image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjB3b3JrZXJ8ZW58MXx8fHwxNzcxMzA4NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Construction',
    image: 'https://images.unsplash.com/photo-1694522362256-6c907336af43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBzYWZldHklMjBoZWxtZXR8ZW58MXx8fHwxNzcxMzA4NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'IT',
    image: 'https://images.unsplash.com/photo-1664382951070-70a6e4ef8ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHByb2Zlc3Npb25hbCUyMG9mZmljZSUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MTMwODcwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Corporate',
    image: 'https://images.unsplash.com/photo-1711720743865-10787dd6934a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzEyMzM4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Engineering',
    image: 'https://images.unsplash.com/photo-1732885787638-db5ae05bb707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlY2huaWNpYW4lMjB3b3JrfGVufDF8fHx8MTc3MTMwODcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Retail',
    image: 'https://images.unsplash.com/photo-1764795849833-6e9d6e399a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHN0YWZmJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTMwODcwOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-blue-100 text-[#2563EB] rounded-full text-sm font-semibold mb-4">
            Industries We Serve
          </div>
          <h2 className="text-5xl font-black text-[#0F172A] mb-4">
            Workforce Solutions Across Sectors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className="group relative overflow-hidden rounded-[28px] shadow-xl cursor-pointer"
            >
              <div className="relative h-72">
                <ImageWithFallback
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-black text-white mb-2">
                    {industry.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-[#FACC15] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
