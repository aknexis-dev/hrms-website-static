import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

const articles = [
  {
    id: 1,
    title: 'Understanding Labour Law Compliance in India: A Complete Guide for Employers',
    excerpt: 'Navigate the complex landscape of Indian labour laws with our comprehensive guide covering EPF, ESI, and statutory compliance requirements.',
    image: 'https://images.unsplash.com/photo-1704969724221-8b7361b61f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGlhbmNlJTIwZG9jdW1lbnRzJTIwbGVnYWwlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzEzMTA2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Compliance',
    date: 'February 15, 2026',
    author: 'Compliance Team',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: '5 Key Strategies for Effective Bulk Hiring in Manufacturing Sector',
    excerpt: 'Learn proven strategies to successfully execute large-scale recruitment for manufacturing facilities while maintaining quality standards.',
    image: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGNvcnBvcmF0ZSUyMG9mZmljZXxlbnwxfHx8fDE3NzEzMTA1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Staffing',
    date: 'February 12, 2026',
    author: 'HR Team',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'The Future of Contract Staffing: Trends Shaping the Industry in 2026',
    excerpt: 'Explore emerging trends in contract staffing including gig economy integration, technology adoption, and changing workforce preferences.',
    image: 'https://images.unsplash.com/photo-1762341107834-a3437dd0ae62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdyaXRpbmclMjBkZXNrfGVufDF8fHx8MTc3MTMxMDYwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Industry Trends',
    date: 'February 10, 2026',
    author: 'Research Team',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'How to Build a Sustainable Workforce Pipeline for Your Organization',
    excerpt: 'Discover best practices for creating and maintaining a robust talent pipeline that meets your organization\'s evolving needs.',
    image: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGNvcnBvcmF0ZSUyMG9mZmljZXxlbnwxfHx8fDE3NzEzMTA1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'HR',
    date: 'February 8, 2026',
    author: 'Strategy Team',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Background Verification: Why It Matters More Than Ever',
    excerpt: 'Understanding the critical importance of thorough background checks in today\'s hiring landscape and best practices for implementation.',
    image: 'https://images.unsplash.com/photo-1704969724221-8b7361b61f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGlhbmNlJTIwZG9jdW1lbnRzJTIwbGVnYWwlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzEzMTA2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Compliance',
    date: 'February 5, 2026',
    author: 'Compliance Team',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Optimizing Workforce Deployment: Lessons from Successful Projects',
    excerpt: 'Real-world case studies and insights from successful workforce deployment projects across various industries.',
    image: 'https://images.unsplash.com/photo-1762341107834-a3437dd0ae62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdyaXRpbmclMjBkZXNrfGVufDF8fHx8MTc3MTMxMDYwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Staffing',
    date: 'February 3, 2026',
    author: 'Operations Team',
    readTime: '9 min read',
  },
];

const categories = ['All', 'Compliance', 'Staffing', 'HR', 'Industry Trends'];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-5 py-2 bg-blue-100 text-[#2563EB] rounded-full text-sm font-semibold mb-6"
            >
              Knowledge Hub
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-black text-[#0F172A] mb-6 leading-tight"
            >
              Insights & Industry Updates
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Expert insights on workforce management, compliance, and industry trends
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-[32px] overflow-hidden shadow-2xl border border-gray-100"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-[400px] lg:h-auto">
                <ImageWithFallback
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-[#FACC15] text-[#0F172A] rounded-full text-sm font-black">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-4 py-2 bg-blue-100 text-[#2563EB] rounded-full text-sm font-semibold">
                    {featuredArticle.category}
                  </span>
                  <span className="text-gray-600 text-sm">{featuredArticle.readTime}</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-black text-[#0F172A] mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>

                <button className="inline-flex items-center space-x-2 text-[#2563EB] font-semibold hover:underline">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#2563EB] to-[#1e40af] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#2563EB] rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-black text-[#0F172A] mb-3 leading-tight line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>

                    <button className="text-[#2563EB] font-semibold hover:underline flex items-center space-x-1">
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 mt-12">
            <button className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[#2563EB] transition-colors">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center">
              2
            </button>
            <button className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[#2563EB] transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[#2563EB] transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscribe */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2563EB] via-[#1e40af] to-[#1e3a8a] p-12 lg:p-20 shadow-2xl"
          >
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Get the latest workforce insights, compliance updates, and industry trends delivered to your inbox
              </p>
              
              <div className="max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-full text-[#0F172A] outline-none"
                  />
                  <button className="px-10 py-4 bg-[#FACC15] text-[#0F172A] rounded-full font-black whitespace-nowrap hover:scale-105 transition-all duration-300">
                    Subscribe Now
                  </button>
                </div>
              </div>

              <p className="text-sm text-blue-200">
                Join 5000+ professionals receiving our weekly insights
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
