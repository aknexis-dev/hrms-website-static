import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowLeft, ArrowRight, CheckCircle2, Send } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

const relatedJobs = [
  { id: 2, title: 'Business Development Executive', location: 'Delhi NCR' },
  { id: 3, title: 'Operations Coordinator', location: 'Bangalore' },
  { id: 4, title: 'Field HR Executive', location: 'Pune' },
];

export function JobDetailPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-blue-50/30">
        <div className="container-responsive">
          <Link
            to="/careers"
            className="inline-flex-center space-x-2 text-[#2563EB] font-semibold mb-8 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Careers</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[32px] p-10 shadow-2xl border border-gray-100"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-blue-100 text-[#2563EB] rounded-full text-sm font-semibold">
                Human Resources
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                Full-time
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Actively Hiring
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-6">
              HR Recruitment Manager
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-gray-600 mb-8">
              <div className="flex-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Mumbai, Maharashtra</span>
              </div>
              <div className="flex-center space-x-2">
                <Briefcase className="w-5 h-5" />
                <span className="font-semibold">5-7 years experience</span>
              </div>
              <div className="flex-center space-x-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Posted 2 days ago</span>
              </div>
            </div>

            <a
              href="#apply"
              className="inline-flex-center space-x-2 px-10 py-4 bg-gradient-to-r from-[#2563EB] to-[#1e40af] text-white rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-[28px] p-10 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-black text-[#0F172A] mb-6">Job Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We are seeking an experienced HR Recruitment Manager to lead our talent acquisition efforts. The ideal candidate will have a proven track record in mass recruitment, vendor management, and building high-performing teams across multiple locations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This role requires strong stakeholder management skills, excellent communication abilities, and the capability to handle end-to-end recruitment cycles for blue-collar, grey-collar, and white-collar positions across various industries.
                </p>
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded-[28px] p-10 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-black text-[#0F172A] mb-6">Key Responsibilities</h2>
                <ul className="space-y-4">
                  {[
                    'Lead end-to-end recruitment process for bulk hiring requirements',
                    'Manage vendor relationships and coordinate with multiple stakeholders',
                    'Develop and implement effective recruitment strategies',
                    'Conduct interviews, skill assessments, and background verifications',
                    'Maintain recruitment metrics and generate regular reports',
                    'Ensure compliance with all labour laws and company policies',
                    'Build and maintain talent pipeline for future requirements',
                    'Coordinate with operations teams for smooth candidate deployment',
                  ].map((item, index) => (
                    <li key={index} className="flex-start">
                      <CheckCircle2 className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-[28px] p-10 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-black text-[#0F172A] mb-6">Requirements</h2>
                <ul className="space-y-4">
                  {[
                    '5-7 years of experience in recruitment, preferably in manpower industry',
                    'Strong understanding of labour laws and compliance requirements',
                    'Proven track record in handling bulk hiring (100+ candidates)',
                    'Excellent communication and negotiation skills',
                    'Proficiency in MS Office and recruitment software/ATS',
                    'Bachelor\'s degree in HR or related field (MBA preferred)',
                    'Ability to work under pressure and meet tight deadlines',
                    'Willingness to travel to client locations as needed',
                  ].map((item, index) => (
                    <li key={index} className="flex-start">
                      <CheckCircle2 className="w-6 h-6 text-[#FACC15] flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-[28px] p-10 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-black text-[#0F172A] mb-6">Benefits & Perks</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Competitive salary package',
                    'Performance-based incentives',
                    'Health insurance for family',
                    'Paid time off & holidays',
                    'Professional development',
                    'Career growth opportunities',
                  ].map((benefit, index) => (
                    <div key={index} className="flex-center space-x-3">
                      <div className="w-2 h-2 bg-[#2563EB] rounded-full"></div>
                      <span className="text-gray-700 font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Apply Form */}
              <div id="apply" className="bg-white rounded-[28px] p-8 shadow-lg border border-gray-100 sticky top-24">
                <h3 className="text-2xl font-black text-[#0F172A] mb-6">Quick Apply</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Resume *
                    </label>
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] outline-none transition-colors"
                    />
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] outline-none transition-colors resize-none"
                      placeholder="Brief introduction..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#1e40af] text-white rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300 flex-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Application</span>
                  </button>
                </form>
              </div>

              {/* Related Jobs */}
              <div className="bg-white rounded-[28px] p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-black text-[#0F172A] mb-6">Related Positions</h3>
                <div className="space-y-4">
                  {relatedJobs.map((job) => (
                    <Link
                      key={job.id}
                      to={`/careers/${job.id}`}
                      className="block p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors"
                    >
                      <h4 className="font-bold text-[#0F172A] mb-2">{job.title}</h4>
                      <div className="flex-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
