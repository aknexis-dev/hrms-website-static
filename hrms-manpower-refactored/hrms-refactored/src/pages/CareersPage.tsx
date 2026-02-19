import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

const JOBS = [
  { id: 1, title: 'HR Recruitment Manager',         location: 'Mumbai, Maharashtra', type: 'Full-time', experience: '5-7 years', department: 'Human Resources' },
  { id: 2, title: 'Business Development Executive', location: 'Delhi NCR',            type: 'Full-time', experience: '3-5 years', department: 'Sales' },
  { id: 3, title: 'Operations Coordinator',          location: 'Bangalore, Karnataka', type: 'Full-time', experience: '2-4 years', department: 'Operations' },
  { id: 4, title: 'Field HR Executive',              location: 'Pune, Maharashtra',    type: 'Full-time', experience: '1-3 years', department: 'Human Resources' },
  { id: 5, title: 'Compliance Officer',              location: 'Mumbai, Maharashtra', type: 'Full-time', experience: '4-6 years', department: 'Legal & Compliance' },
  { id: 6, title: 'Client Relationship Manager',     location: 'Hyderabad, Telangana', type: 'Full-time', experience: '3-5 years', department: 'Client Services' },
];

const BENEFITS = [
  { icon: TrendingUp, title: 'Career Growth',        description: 'Clear growth path and promotion opportunities' },
  { icon: Heart,      title: 'Health Benefits',      description: 'Comprehensive health insurance for you and family' },
  { icon: Users,      title: 'Team Culture',         description: 'Collaborative and supportive work environment' },
  { icon: Award,      title: 'Performance Rewards',  description: 'Recognition and rewards for outstanding performance' },
];

const DEPARTMENTS = ['All', 'Human Resources', 'Sales', 'Operations', 'Legal & Compliance', 'Client Services'];
const LOCATIONS    = ['All', 'Mumbai', 'Delhi NCR', 'Bangalore', 'Pune', 'Hyderabad'];

export function CareersPage() {
  const [dept, setDept] = useState('All');
  const [loc,  setLoc]  = useState('All');

  const filtered = JOBS.filter((j) => {
    const okDept = dept === 'All' || j.department === dept;
    const okLoc  = loc  === 'All' || j.location.includes(loc);
    return okDept && okLoc;
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section style={{ paddingTop: '8rem', paddingBottom: '5rem', background: 'linear-gradient(135deg, #f8fafc, #fff, rgba(219,234,254,0.3))' }}>
        <div className="container text-center max-w-4xl mx-auto">
          <motion.span className="section-header__badge" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Join Our Team</motion.span>
          <motion.h1 className="section-header__title mt-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Build Your Career With Us</motion.h1>
          <motion.p className="section-header__subtitle" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Join India's leading manpower solutions provider and grow your career in a dynamic, rewarding environment
          </motion.p>
        </div>
      </section>

      {/* Why join */}
      <section aria-labelledby="why-join-title" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <header className="section-header">
            <h2 id="why-join-title" className="section-header__title">Why Join HRMS Manpower Solutions?</h2>
            <p className="section-header__subtitle">Be part of a growing organisation that values talent and innovation</p>
          </header>
          <ul role="list" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map(({ icon: Icon, title, description }, i) => (
              <motion.li key={title} className="card text-center" style={{ background: 'linear-gradient(135deg, #eff6ff, #fff)' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="card__icon card__icon--blue mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="card__title">{title}</h3>
                <p className="card__description">{description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Job listings */}
      <section aria-labelledby="jobs-title" className="band--light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <header className="section-header">
            <h2 id="jobs-title" className="section-header__title">Current Openings</h2>
            <p className="section-header__subtitle">Explore opportunities across departments and locations</p>
          </header>

          {/* Filters */}
          <div className="card mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label" htmlFor="dept-filter">Department</label>
                <select id="dept-filter" className="form-select" value={dept} onChange={(e) => setDept(e.target.value)}>
                  {DEPARTMENTS.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="loc-filter">Location</label>
                <select id="loc-filter" className="form-select" value={loc} onChange={(e) => setLoc(e.target.value)}>
                  {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Job cards */}
          <ul role="list" className="space-y-6">
            {filtered.map((job, i) => (
              <motion.li key={job.id} className="card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="badge badge--blue">{job.department}</span>
                      <span className="badge badge--gray">{job.type}</span>
                    </div>
                    <h3 className="card__title mb-3">{job.title}</h3>
                    <ul className="flex flex-wrap items-center gap-6 text-gray-500" role="list">
                      <li className="flex items-center gap-2"><MapPin className="w-4 h-4" aria-hidden="true" />{job.location}</li>
                      <li className="flex items-center gap-2"><Briefcase className="w-4 h-4" aria-hidden="true" />{job.experience}</li>
                      <li className="flex items-center gap-2"><Clock className="w-4 h-4" aria-hidden="true" />Posted 2 days ago</li>
                    </ul>
                  </div>
                  <Link to={`/careers/${job.id}`} className="btn btn--primary">
                    View Details <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.li>
            ))}
          </ul>

          {filtered.length === 0 && (
            <p className="text-center text-xl text-gray-500 py-20">No positions available for selected filters</p>
          )}
        </div>
      </section>

      {/* Culture */}
      <section aria-labelledby="culture-title" className="band--dark" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container text-center">
          <motion.div className="text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 id="culture-title" className="text-4xl lg:text-5xl font-black mb-6">Our Values &amp; Culture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">We foster a culture of excellence, integrity, and continuous growth where every team member contributes to our collective success.</p>
            <dl className="grid md:grid-cols-3 gap-8">
              {[['120+', 'Team Members'], ['9+', 'Years of Excellence'], ['95%', 'Employee Satisfaction']].map(([val, label]) => (
                <div key={label} className="stat-block">
                  <dt className="stat-block__number">{val}</dt>
                  <dd className="stat-block__label">{label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Resume CTA */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fff' }}>
        <div className="container">
          <motion.div className="cta-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-black text-white">Don't See a Role That Fits?</h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: '#bfdbfe' }}>Submit your resume and we'll reach out when a suitable position opens up</p>
              <button className="btn btn--white btn--lg inline-flex">
                Submit Your Resume <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
