import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: 'HR Recruitment Manager',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '5-7 years',
    department: 'Human Resources',
  },
  {
    id: 2,
    title: 'Business Development Executive',
    location: 'Delhi NCR',
    type: 'Full-time',
    experience: '3-5 years',
    department: 'Sales',
  },
  {
    id: 3,
    title: 'Operations Coordinator',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    experience: '2-4 years',
    department: 'Operations',
  },
  {
    id: 4,
    title: 'Field HR Executive',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    experience: '1-3 years',
    department: 'Human Resources',
  },
  {
    id: 5,
    title: 'Compliance Officer',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '4-6 years',
    department: 'Legal & Compliance',
  },
  {
    id: 6,
    title: 'Client Relationship Manager',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '3-5 years',
    department: 'Client Services',
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear growth path and promotion opportunities',
  },
  {
    icon: Heart,
    title: 'Health Benefits',
    description: 'Comprehensive health insurance for you and family',
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Collaborative and supportive work environment',
  },
  {
    icon: Award,
    title: 'Performance Rewards',
    description: 'Recognition and rewards for outstanding performance',
  },
];

export function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const departments = ['All', 'Human Resources', 'Sales', 'Operations', 'Legal & Compliance', 'Client Services'];
  const locations = ['All', 'Mumbai', 'Delhi NCR', 'Bangalore', 'Pune', 'Hyderabad'];

  const filteredJobs = jobs.filter(job => {
    const matchesDept = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLoc = selectedLocation === 'All' || job.location.includes(selectedLocation);
    return matchesDept && matchesLoc;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="badge-blue mb-6"
            >
              Join Our Team
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title mb-6"
            >
              Build Your Career With Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Join India's leading manpower solutions provider and grow your career in a dynamic, rewarding environment
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Why Join HRMS Manpower Solutions?
            </h2>
            <p className="section-subtitle">
              Be part of a growing organization that values talent and innovation
            </p>
          </motion.div>

          <div className="column-grid gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="benefit-card hover:shadow-2xl transition-all duration-300"
              >
                <div className="icon-box mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="large-text text-[#0F172A] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Current Openings
            </h2>
            <p className="section-subtitle">
              Explore opportunities across departments and locations
            </p>
          </motion.div>

          {/* Filters */}
          <div className="filter-box">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="filter-label">
                  Department
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="filter-select"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="filter-label">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="filter-select"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-container"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="badge-blue">
                        {job.department}
                      </span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-[#0F172A] mb-3">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-6 text-gray-600">
                      <div className="list-item-dot">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="list-item-dot">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="list-item-dot">
                        <Clock className="w-4 h-4" />
                        <span>Posted 2 days ago</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/careers/${job.id}`}
                    className="blue-button px-8 py-4 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No positions available for selected filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-r from-[#0F172A] via-[#1e293b] to-[#0F172A]">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="section-title text-white">
              Our Values & Culture
            </h2>
            <p className="section-subtitle text-gray-300 mb-8">
              We foster a culture of excellence, integrity, and continuous growth where every team member contributes to our collective success.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl font-black text-[#FACC15] mb-2">120+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div>
                <div className="text-5xl font-black text-[#FACC15] mb-2">9+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
              <div>
                <div className="text-5xl font-black text-[#FACC15] mb-2">95%</div>
                <div className="text-gray-300">Employee Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Submit Resume CTA */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="cta-banner"
          >
            <div className="relative z-10 text-center space-y-8">
              <h2 className="cta-banner-title">
                Don't See a Role That Fits?
              </h2>
              <p className="cta-banner-text">
                Submit your resume and we'll reach out when a suitable position opens up
              </p>
              <button className="px-12 py-5 bg-white text-[#2563EB] rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
                <span>Submit Your Resume</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
