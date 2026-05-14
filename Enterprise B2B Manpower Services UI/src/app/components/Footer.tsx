import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer-container">
      <div className="container-responsive py-16">
        <div className="column-grid gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex-center space-x-3">
              <div className="logo-container">
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
              <a href="#" className="footer-social-link">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="footer-social-link">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="footer-social-link">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="footer-social-link">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="large-text mb-6">Quick Links</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#home" className="footer-link">Home</a>
              </li>
              <li>
                <a href="#services" className="footer-link">Services</a>
              </li>
              <li>
                <a href="#industries" className="footer-link">Industries</a>
              </li>
              <li>
                <a href="#process" className="footer-link">Process</a>
              </li>
              <li>
                <a href="#about" className="footer-link">About Us</a>
              </li>
              <li>
                <Link to="/blog" className="footer-link">Blog & Insights</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="large-text mb-6">Our Services</h3>
            <ul className="footer-link-list">
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
            <h3 className="large-text mb-6">Contact Us</h3>
            <ul className="footer-contact-list">
              <li className="flex-start">
                <Phone className="w-5 h-5 text-[#FACC15] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">+91 98765 43210</div>
                  <div className="text-sm text-gray-400">Mon-Sat, 9AM-6PM</div>
                </div>
              </li>
              <li className="flex-start">
                <Mail className="w-5 h-5 text-[#FACC15] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">contact@hrmsmanpower.com</div>
                  <div className="text-sm text-gray-400">Quick Response</div>
                </div>
              </li>
              <li className="flex-start">
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
        <div className="footer-bottom-bar">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 HRMS Manpower Solutions — Government-Compliant Workforce Provider
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-link">Terms of Service</Link>
              <Link to="/compliance" className="footer-link">Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}