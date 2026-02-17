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
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-5 py-2 bg-blue-100 text-[#2563EB] rounded-full text-sm font-semibold mb-6"
            >
              Join Our Team
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-black text-[#0F172A] mb-6 leading-tight"
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-4">
              Why Join HRMS Manpower Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a growing organization that values talent and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-[24px] p-8 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1e40af] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-[#0F172A] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">
              Explore opportunities across departments and locations
            </p>
          </motion.div>

          {/* Filters */}
          <div className="bg-white rounded-[24px] p-6 shadow-lg mb-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Department
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] outline-none transition-colors"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-[#2563EB] outline-none transition-colors"
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
                className="bg-white rounded-[24px] p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-4 py-2 bg-blue-100 text-[#2563EB] rounded-full text-sm font-semibold">
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
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>Posted 2 days ago</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/careers/${job.id}`}
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#1e40af] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Our Values & Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
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
                Don't See a Role That Fits?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
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
