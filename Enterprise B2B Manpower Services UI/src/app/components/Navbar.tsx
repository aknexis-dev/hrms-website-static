import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Phone, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'auto'
  }, [isMobileOpen])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Process', path: '/process' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileOpen
            ? 'bg-white shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white font-bold rounded-md">
                H
              </div>
              <div className="leading-tight">
                <p className="font-bold text-base text-slate-900">
                  HRMS Manpower Solutions
                </p>
                <p className="text-xs text-slate-500">
                  Government Registered
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center gap-8">
                {navLinks.map(link => {
                  const active = location.pathname === link.path
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`relative text-sm font-medium transition-colors duration-200 ${
                        active ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full transition-transform duration-300 ${
                          active
                            ? 'bg-blue-600 scale-x-100'
                            : 'bg-blue-600 scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Right Section */}
            <div className="hidden lg:flex items-center gap-6 shrink-0">
              <div className="flex items-center gap-2 text-slate-700 text-sm">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 98765 43210</span>
              </div>

              <Link
                to="/contact"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
              >
                Hire Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6 text-slate-800" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-medium">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-blue-600'
                      : 'text-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-6 border-t space-y-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </div>

                <Link
                  to="/contact"
                  className="block w-full text-center py-3 bg-blue-600 text-white rounded-md"
                >
                  Hire Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}