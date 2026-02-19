import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Process', path: '/process' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar-container ${isScrolled || isMobileMenuOpen ? 'navbar-active' : 'navbar-transparent'}`}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="logo-container">
              <span className="text-white font-black text-xl">H</span>
            </div>
            <div>
              <div className="font-black text-lg tracking-tight text-[#0F172A]">
                HRMS Manpower Solutions
              </div>
              <div className="text-xs text-gray-600">Government Registered</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
                <span className={`nav-link-underline ${location.pathname === link.path ? 'active' : 'inactive'}`} />
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-[#0F172A]">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+91 98765 43210</span>
            </div>
            <Link
              to="/contact"
              className="px-8 py-3 blue-button font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Hire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0F172A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0F172A]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <div className="flex items-center space-x-2 text-[#0F172A]">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">+91 98765 43210</span>
                </div>
                <Link
                  to="/contact"
                  className="block w-full px-8 py-3 blue-button text-center"
                >
                  Hire Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
