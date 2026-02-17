import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1e40af] flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">H</span>
              </div>
              <div>
                <div className="font-black text-lg">HRMS Manpower Solutions</div>
                <div className="text-xs text-gray-400">Since 2015</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading provider of skilled workforce solutions across India. Government registered and fully compliant with all labour regulations.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2563EB] flex items-center justify-center transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2563EB] flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2563EB] flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#2563EB] flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-black mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#FACC15] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#FACC15] transition-colors">Services</a>
              </li>
              <li>
                <a href="#industries" className="text-gray-400 hover:text-[#FACC15] transition-colors">Industries</a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-[#FACC15] transition-colors">Process</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#FACC15] transition-colors">About Us</a>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[#FACC15] transition-colors">Blog & Insights</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-black mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Manufacturing Workforce</li>
              <li className="text-gray-400">Logistics Staff</li>
              <li className="text-gray-400">Technicians & Welders</li>
              <li className="text-gray-400">IT Professionals</li>
              <li className="text-gray-400">Corporate Staff</li>
              <li className="text-gray-400">Construction Workers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-black mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#FACC15] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">+91 98765 43210</div>
                  <div className="text-sm text-gray-400">Mon-Sat, 9AM-6PM</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#FACC15] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">contact@hrmsmanpower.com</div>
                  <div className="text-sm text-gray-400">Quick Response</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FACC15] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Corporate Office</div>
                  <div className="text-sm text-gray-400">Mumbai, Maharashtra</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 HRMS Manpower Solutions — Government-Compliant Workforce Provider
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#FACC15] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#FACC15] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#FACC15] transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}