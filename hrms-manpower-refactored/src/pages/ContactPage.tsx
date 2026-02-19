import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const WORKFORCE_TYPES = [
  { value: 'manufacturing', label: 'Manufacturing Workforce' },
  { value: 'logistics',     label: 'Logistics & Warehouse' },
  { value: 'technicians',   label: 'Technicians & Welders' },
  { value: 'it',            label: 'IT Professionals' },
  { value: 'corporate',     label: 'Corporate Staff' },
  { value: 'contract',      label: 'Contract Staffing' },
  { value: 'bulk',          label: 'Bulk Hiring' },
];

const ASSURANCES = [
  { icon: CheckCircle, title: '24-Hour Response',   description: 'Our team responds to all inquiries within 24 hours' },
  { icon: CheckCircle, title: 'Free Consultation',  description: 'No-obligation consultation to understand your needs' },
  { icon: CheckCircle, title: 'Custom Proposal',    description: 'Tailored workforce solution proposal for your requirement' },
];

type FormData = {
  name: string; company: string; phone: string;
  email: string; requirement: string; message: string;
};

export function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '', company: '', phone: '', email: '', requirement: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log('Form submitted:', form); };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section style={{ paddingTop: '8rem', paddingBottom: '5rem', background: 'linear-gradient(135deg, #f8fafc, #fff, rgba(219,234,254,0.3))' }}>
        <div className="container text-center max-w-4xl mx-auto">
          <motion.span className="section-header__badge" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Get In Touch</motion.span>
          <motion.h1 className="section-header__title mt-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Request Workforce or Contact Our Team
          </motion.h1>
          <motion.p className="section-header__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Fill out the form and our workforce specialists will contact you within 24 hours
          </motion.p>
        </div>
      </section>

      {/* Contact body */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="card p-10">
                <h2 className="text-3xl font-black text-gray-900 mb-8">Workforce Inquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" required className="form-input" placeholder="Your name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company Name *</label>
                      <input id="company" name="company" type="text" required className="form-input" placeholder="Your company" value={form.company} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" type="tel" required className="form-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" required className="form-input" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="requirement">Workforce Requirement *</label>
                    <select id="requirement" name="requirement" required className="form-select" value={form.requirement} onChange={handleChange}>
                      <option value="">Select requirement type</option>
                      {WORKFORCE_TYPES.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message / Requirement Details</label>
                    <textarea id="message" name="message" rows={6} className="form-textarea" placeholder="Describe your workforce requirements, number of workers needed, location, timeline, etc." value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn btn--primary btn--full btn--lg">
                    <Send className="w-5 h-5" aria-hidden="true" />
                    Submit Requirement
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info panels */}
            <motion.aside className="lg:col-span-2 space-y-6" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} aria-label="Contact information">
              {[
                { icon: Phone,  title: 'Call Us',          accent: 'blue',   content: <><a href="tel:+919876543210" className="text-blue-600 font-semibold hover:underline block">+91 98765 43210</a><a href="tel:+919876543211" className="text-blue-600 font-semibold hover:underline block mt-1">+91 98765 43211</a><p className="text-sm text-gray-500 mt-2">Mon - Sat: 9:00 AM - 6:00 PM</p></> },
                { icon: Mail,   title: 'Email Us',         accent: 'yellow', content: <><a href="mailto:contact@hrmsmanpower.com" className="text-blue-600 font-semibold hover:underline block">contact@hrmsmanpower.com</a><a href="mailto:hr@hrmsmanpower.com" className="text-blue-600 font-semibold hover:underline block mt-1">hr@hrmsmanpower.com</a><p className="text-sm text-gray-500 mt-2">Response within 24 hours</p></> },
                { icon: MapPin, title: 'Corporate Office',  accent: 'blue',   content: <><p className="text-gray-700">HRMS Tower, Business District,<br />Andheri East, Mumbai,<br />Maharashtra - 400069</p><p className="text-sm text-gray-500 mt-2">Branch offices in Delhi, Bangalore, Pune</p></> },
                { icon: Clock,  title: 'Business Hours',    accent: 'yellow', content: <dl className="space-y-1 text-gray-700"><div className="flex justify-between"><dt>Monday – Friday</dt><dd className="font-semibold">9:00 AM – 6:00 PM</dd></div><div className="flex justify-between"><dt>Saturday</dt><dd className="font-semibold">9:00 AM – 2:00 PM</dd></div><div className="flex justify-between"><dt>Sunday</dt><dd className="font-semibold">Closed</dd></div></dl> },
              ].map(({ icon: Icon, title, accent, content }) => (
                <div key={title} className="card p-8">
                  <div className={`card__icon card__icon--${accent === 'yellow' ? 'yellow' : 'blue'} mb-5`}>
                    <Icon className={`w-7 h-7 ${accent === 'yellow' ? 'text-gray-900' : 'text-white'}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{title}</h3>
                  {content}
                </div>
              ))}
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Assurance bar */}
      <section aria-label="Service assurances" className="band--dark" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <ul role="list" className="grid md:grid-cols-3 gap-8 text-center">
            {ASSURANCES.map(({ icon: Icon, title, description }, i) => (
              <motion.li key={title} className="text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Icon className="w-12 h-12 mx-auto mb-4 text-amber-400" aria-hidden="true" />
                <h3 className="text-xl font-black mb-2">{title}</h3>
                <p className="text-gray-300 text-sm">{description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Map placeholder */}
      <section aria-label="Office location map">
        <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" aria-hidden="true" />
            <p className="text-gray-600 font-semibold">Map Location</p>
            <p className="text-sm text-gray-500">Mumbai Corporate Office</p>
          </div>
        </div>
      </section>
    </div>
  );
}
