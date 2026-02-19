import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowLeft, ArrowRight, CheckCircle2, Send } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

const RELATED_JOBS = [
  { id: 2, title: 'Business Development Executive', location: 'Delhi NCR' },
  { id: 3, title: 'Operations Coordinator',          location: 'Bangalore' },
  { id: 4, title: 'Field HR Executive',              location: 'Pune' },
];

const RESPONSIBILITIES = [
  'Lead end-to-end recruitment process for bulk hiring requirements',
  'Manage vendor relationships and coordinate with multiple stakeholders',
  'Develop and implement effective recruitment strategies',
  'Conduct interviews, skill assessments, and background verifications',
  'Maintain recruitment metrics and generate regular reports',
  'Ensure compliance with all labour laws and company policies',
  'Build and maintain talent pipeline for future requirements',
  'Coordinate with operations teams for smooth candidate deployment',
];

const REQUIREMENTS = [
  '5-7 years of experience in recruitment, preferably in manpower industry',
  'Strong understanding of labour laws and compliance requirements',
  'Proven track record in handling bulk hiring (100+ candidates)',
  'Excellent communication and negotiation skills',
  'Proficiency in MS Office and recruitment software/ATS',
  "Bachelor's degree in HR or related field (MBA preferred)",
  'Ability to work under pressure and meet tight deadlines',
  'Willingness to travel to client locations as needed',
];

const JOB_PERKS = ['Competitive salary package', 'Performance-based incentives', 'Health insurance for family', 'Paid time off & holidays', 'Professional development', 'Career growth opportunities'];

export function JobDetailPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', coverLetter: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log('Applied:', form); };

  return (
    <div className="min-h-screen band--light">
      {/* Header card */}
      <section style={{ paddingTop: '8rem', paddingBottom: '3rem', background: 'linear-gradient(135deg, #fff, rgba(219,234,254,0.3))' }}>
        <div className="container">
          <Link to="/careers" className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to Careers
          </Link>
          <motion.div className="card p-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="badge badge--blue">Human Resources</span>
              <span className="badge badge--gray">Full-time</span>
              <span className="badge badge--green">Actively Hiring</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">HR Recruitment Manager</h1>
            <ul className="flex flex-wrap items-center gap-8 text-gray-500 mb-8" role="list">
              <li className="flex items-center gap-2"><MapPin className="w-5 h-5" aria-hidden="true" /><strong>Mumbai, Maharashtra</strong></li>
              <li className="flex items-center gap-2"><Briefcase className="w-5 h-5" aria-hidden="true" /><strong>5-7 years experience</strong></li>
              <li className="flex items-center gap-2"><Clock className="w-5 h-5" aria-hidden="true" /><strong>Posted 2 days ago</strong></li>
            </ul>
            <a href="#apply" className="btn btn--primary btn--lg inline-flex">Apply Now <ArrowRight className="w-5 h-5" aria-hidden="true" /></a>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              <article className="card p-10">
                <h2 className="text-3xl font-black text-gray-900 mb-6">Job Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We are seeking an experienced HR Recruitment Manager to lead our talent acquisition efforts. The ideal candidate will have a proven track record in mass recruitment, vendor management, and building high-performing teams across multiple locations.</p>
                <p className="text-gray-700 leading-relaxed">This role requires strong stakeholder management skills, excellent communication abilities, and the capability to handle end-to-end recruitment cycles for blue-collar, grey-collar, and white-collar positions across various industries.</p>
              </article>

              <article className="card p-10">
                <h2 className="text-3xl font-black text-gray-900 mb-6">Key Responsibilities</h2>
                <ul className="space-y-4" role="list">
                  {RESPONSIBILITIES.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="card p-10">
                <h2 className="text-3xl font-black text-gray-900 mb-6">Requirements</h2>
                <ul className="space-y-4" role="list">
                  {REQUIREMENTS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="card p-10" style={{ background: 'linear-gradient(135deg, #eff6ff, #fff)' }}>
                <h2 className="text-3xl font-black text-gray-900 mb-6">Benefits &amp; Perks</h2>
                <ul className="grid md:grid-cols-2 gap-4" role="list">
                  {JOB_PERKS.map((perk) => (
                    <li key={perk} className="flex items-center gap-3">
                      <span className="dot-bullet" aria-hidden="true" />
                      <span className="font-semibold text-gray-700">{perk}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8" aria-label="Application and related positions">
              {/* Apply form */}
              <div id="apply" className="card p-8 sticky top-24">
                <h3 className="text-2xl font-black text-gray-900 mb-6">Quick Apply</h3>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="form-group">
                    <label className="form-label" htmlFor="apply-name">Full Name *</label>
                    <input id="apply-name" name="name" type="text" required className="form-input" placeholder="Your name" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="apply-email">Email *</label>
                    <input id="apply-email" name="email" type="email" required className="form-input" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="apply-phone">Phone *</label>
                    <input id="apply-phone" name="phone" type="tel" required className="form-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="apply-resume">Resume *</label>
                    <input id="apply-resume" type="file" required accept=".pdf,.doc,.docx" className="form-input" />
                    <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 5 MB)</p>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="apply-cover">Cover Letter</label>
                    <textarea id="apply-cover" name="coverLetter" rows={4} className="form-textarea" placeholder="Brief introduction…" value={form.coverLetter} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn btn--primary btn--full">
                    <Send className="w-5 h-5" aria-hidden="true" /> Submit Application
                  </button>
                </form>
              </div>

              {/* Related */}
              <div className="card p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-6">Related Positions</h3>
                <ul className="space-y-4" role="list">
                  {RELATED_JOBS.map((job) => (
                    <li key={job.id}>
                      <Link to={`/careers/${job.id}`} className="block p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                        <h4 className="font-bold text-gray-900 mb-1">{job.title}</h4>
                        <p className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" aria-hidden="true" />{job.location}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
