import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';

const ARTICLES = [
  { id: 1, title: 'Understanding Labour Law Compliance in India: A Complete Guide for Employers', excerpt: 'Navigate the complex landscape of Indian labour laws with our comprehensive guide covering EPF, ESI, and statutory compliance requirements.', image: 'https://images.unsplash.com/photo-1704969724221-8b7361b61f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800', category: 'Compliance',      date: 'February 15, 2026', author: 'Compliance Team',  readTime: '8 min read' },
  { id: 2, title: '5 Key Strategies for Effective Bulk Hiring in Manufacturing Sector',                  excerpt: 'Learn proven strategies to successfully execute large-scale recruitment for manufacturing facilities while maintaining quality standards.',               image: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800', category: 'Staffing',         date: 'February 12, 2026', author: 'HR Team',           readTime: '6 min read' },
  { id: 3, title: 'The Future of Contract Staffing: Trends Shaping the Industry in 2026',              excerpt: 'Explore emerging trends in contract staffing including gig economy integration, technology adoption, and changing workforce preferences.',             image: 'https://images.unsplash.com/photo-1762341107834-a3437dd0ae62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800', category: 'Industry Trends',  date: 'February 10, 2026', author: 'Research Team',    readTime: '10 min read' },
  { id: 4, title: "How to Build a Sustainable Workforce Pipeline for Your Organisation",               excerpt: "Discover best practices for creating and maintaining a robust talent pipeline that meets your organisation's evolving needs.",                           image: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800', category: 'HR',               date: 'February 8, 2026',  author: 'Strategy Team',   readTime: '7 min read' },
  { id: 5, title: 'Background Verification: Why It Matters More Than Ever',                             excerpt: "Understanding the critical importance of thorough background checks in today's hiring landscape and best practices for implementation.",                image: 'https://images.unsplash.com/photo-1704969724221-8b7361b61f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800', category: 'Compliance',      date: 'February 5, 2026',  author: 'Compliance Team', readTime: '5 min read' },
  { id: 6, title: 'Optimising Workforce Deployment: Lessons from Successful Projects',                  excerpt: 'Real-world case studies and insights from successful workforce deployment projects across various industries.',                                        image: 'https://images.unsplash.com/photo-1762341107834-a3437dd0ae62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800', category: 'Staffing',         date: 'February 3, 2026',  author: 'Operations Team', readTime: '9 min read' },
];

const CATEGORIES = ['All', 'Compliance', 'Staffing', 'HR', 'Industry Trends'];

export function BlogPage() {
  const [cat, setCat] = useState('All');
  const filtered  = cat === 'All' ? ARTICLES : ARTICLES.filter((a) => a.category === cat);
  const featured  = ARTICLES[0];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section style={{ paddingTop: '8rem', paddingBottom: '5rem', background: 'linear-gradient(135deg, #f8fafc, #fff, rgba(219,234,254,0.3))' }}>
        <div className="container text-center max-w-4xl mx-auto">
          <motion.span className="section-header__badge" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Knowledge Hub</motion.span>
          <motion.h1 className="section-header__title mt-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Insights &amp; Industry Updates</motion.h1>
          <motion.p className="section-header__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Expert insights on workforce management, compliance, and industry trends</motion.p>
        </div>
      </section>

      {/* Featured article */}
      <section aria-label="Featured article" style={{ paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: '#fff' }}>
        <div className="container">
          <motion.article className="card overflow-hidden" style={{ padding: 0 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="grid lg:grid-cols-2">
              <div className="relative" style={{ minHeight: '400px' }}>
                <ImageWithFallback src={featured.image} alt={featured.title} className="w-full h-full object-cover absolute inset-0" />
                <span className="badge badge--yellow absolute top-6 left-6 font-black">Featured</span>
              </div>
              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="badge badge--blue">{featured.category}</span>
                  <span className="text-gray-500 text-sm">{featured.readTime}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">{featured.title}</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2"><User className="w-4 h-4" aria-hidden="true" /><span>{featured.author}</span></div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" aria-hidden="true" /><time dateTime={featured.date}>{featured.date}</time></div>
                </div>
                <button className="card__link self-start text-blue-600 font-semibold flex items-center gap-2 hover:underline">
                  Read Full Article <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Category filter */}
      <nav aria-label="Article category filter" style={{ paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: '#fff' }}>
        <div className="container">
          <ul className="flex flex-wrap items-center justify-center gap-4" role="list">
            {CATEGORIES.map((c) => (
              <li key={c}>
                <button
                  onClick={() => setCat(c)}
                  aria-pressed={cat === c}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${cat === c ? 'btn btn--primary' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Article grid */}
      <section aria-label="Article list" className="band--light" style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
        <div className="container">
          <ul role="list" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.slice(1).map((article, i) => (
              <motion.li key={article.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <article className="card card--hover overflow-hidden" style={{ padding: 0 }}>
                  <div className="relative overflow-hidden" style={{ height: '14rem' }}>
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="badge badge--blue absolute top-4 left-4" style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(4px)' }}>{article.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1"><Calendar className="w-3 h-3" aria-hidden="true" /><time dateTime={article.date}>{article.date}</time></div>
                      <span aria-hidden="true">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="card__title mb-3 leading-tight line-clamp-2">{article.title}</h3>
                    <p className="card__description mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <User className="w-4 h-4" aria-hidden="true" /><span>{article.author}</span>
                      </div>
                      <button className="card__link text-blue-600">Read <ArrowRight className="w-4 h-4" aria-hidden="true" /></button>
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>

          {/* Pagination */}
          <nav aria-label="Article pagination" className="flex items-center justify-center gap-2 mt-12">
            {[1, 2, 3].map((p) => (
              <button key={p} aria-label={`Page ${p}`} className={`w-10 h-10 rounded-full flex items-center justify-center ${p === 2 ? 'bg-blue-600 text-white' : 'bg-white border-2 border-gray-200 hover:border-blue-600'}`}>{p}</button>
            ))}
            <button aria-label="Next page" className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-blue-600">
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </section>

      {/* Newsletter */}
      <section aria-labelledby="newsletter-title" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <motion.div className="cta-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="relative z-10 space-y-8">
              <h2 id="newsletter-title" className="text-4xl lg:text-5xl font-black text-white">Subscribe to Our Newsletter</h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: '#bfdbfe' }}>Get the latest workforce insights, compliance updates, and industry trends delivered to your inbox</p>
              <form className="max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()} noValidate>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input id="newsletter-email" type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-full text-gray-900 outline-none" />
                  <button type="submit" className="btn btn--yellow whitespace-nowrap">Subscribe Now</button>
                </div>
              </form>
              <p className="text-sm" style={{ color: '#bfdbfe' }}>Join 5000+ professionals receiving our weekly insights</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
