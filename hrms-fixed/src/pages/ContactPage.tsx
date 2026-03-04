import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirement: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Get In Touch
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-black text-[#0F172A] mb-6 leading-tight"
            >
              Request Workforce or Contact Our Team
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Fill out the form and our workforce specialists will contact you within 24 hours
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-[32px] p-10 shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-black text-[#0F172A] mb-8">
                  Workforce Inquiry Form
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#2563EB] outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#2563EB] outline-none transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#2563EB] outline-none transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#2563EB] outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Workforce Requirement *
                    </label>
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#2563EB] outline-none transition-colors"
                    >
                      <option value="">Select requirement type</option>
                      <option value="manufacturing">Manufacturing Workforce</option>
                      <option value="logistics">Logistics & Warehouse</option>
                      <option value="technicians">Technicians & Welders</option>
                      <option value="it">IT Professionals</option>
                      <option value="corporate">Corporate Staff</option>
                      <option value="contract">Contract Staffing</option>
                      <option value="bulk">Bulk Hiring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Message / Requirements Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#2563EB] outline-none transition-colors resize-none"
                      placeholder="Describe your workforce requirements, number of workers needed, location, timeline, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-10 py-5 bg-gradient-to-r from-[#2563EB] to-[#1e40af] text-white rounded-full font-black text-lg shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Requirement</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Phone */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-[24px] p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1e40af] flex items-center justify-center mb-6 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-[#0F172A] mb-3">
                  Call Us
                </h3>
                <a href="tel:+919876543210" className="text-lg text-[#2563EB] font-semibold hover:underline block mb-2">
                  +91 98765 43210
                </a>
                <a href="tel:+919876543211" className="text-lg text-[#2563EB] font-semibold hover:underline block">
                  +91 98765 43211
                </a>
                <p className="text-sm text-gray-600 mt-3">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </p>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-[24px] p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FACC15] to-yellow-600 flex items-center justify-center mb-6 shadow-lg">
                  <Mail className="w-7 h-7 text-[#0F172A]" />
                </div>
                <h3 className="text-xl font-black text-[#0F172A] mb-3">
                  Email Us
                </h3>
                <a href="mailto:contact@hrmsmanpower.com" className="text-lg text-[#2563EB] font-semibold hover:underline block mb-2">
                  contact@hrmsmanpower.com
                </a>
                <a href="mailto:hr@hrmsmanpower.com" className="text-lg text-[#2563EB] font-semibold hover:underline block">
                  hr@hrmsmanpower.com
                </a>
                <p className="text-sm text-gray-600 mt-3">
                  Response within 24 hours
                </p>
              </div>

              {/* Office */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-[24px] p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1e40af] flex items-center justify-center mb-6 shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-[#0F172A] mb-3">
                  Corporate Office
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  HRMS Tower, Business District,<br />
                  Andheri East, Mumbai,<br />
                  Maharashtra - 400069
                </p>
                <p className="text-sm text-gray-600">
                  Branch offices in Delhi, Bangalore, Pune
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-[24px] p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FACC15] to-yellow-600 flex items-center justify-center mb-6 shadow-lg">
                  <Clock className="w-7 h-7 text-[#0F172A]" />
                </div>
                <h3 className="text-xl font-black text-[#0F172A] mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Hiring Assurance */}
      <section className="py-20 bg-gradient-to-r from-[#0F172A] via-[#1e293b] to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-[#FACC15]" />
              <h3 className="text-xl font-black mb-2">24-Hour Response</h3>
              <p className="text-gray-300 text-sm">
                Our team responds to all inquiries within 24 hours
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white"
            >
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-[#FACC15]" />
              <h3 className="text-xl font-black mb-2">Free Consultation</h3>
              <p className="text-gray-300 text-sm">
                No-obligation consultation to understand your needs
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white"
            >
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-[#FACC15]" />
              <h3 className="text-xl font-black mb-2">Custom Proposal</h3>
              <p className="text-gray-300 text-sm">
                Tailored workforce solution proposal for your requirement
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white">
        <div className="h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 font-semibold">Map Location</p>
            <p className="text-sm text-gray-500">Mumbai Corporate Office</p>
          </div>
        </div>
      </section>
    </div>
  );
}
