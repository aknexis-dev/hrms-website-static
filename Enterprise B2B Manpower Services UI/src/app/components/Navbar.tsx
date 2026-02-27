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
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

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
        role="navigation"
        aria-label="Main Navigation"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-12 h-16 lg:h-20 transition-all duration-300 ${isScrolled || isMobileOpen
            ? 'navbar-active bg-white shadow-md'
            : 'navbar-transparent bg-transparent'
          }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 logo-container" aria-label="Home">
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
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-8 nav-menu">
          {navLinks.map(link => {
            const active = location.pathname === link.path
            return (
              <li key={link.path} className="nav-item">
                <Link
                  to={link.path}
                  aria-current={active ? 'page' : undefined}
                  className={`nav-link relative text-sm font-medium transition-colors duration-200 group flex flex-col ${active ? 'text-blue-600 active' : 'text-slate-700 hover:text-blue-600'
                    }`}
                >
                  {link.name}
                  <span
                    className={`nav-link-underline absolute left-0 -bottom-1 h-[2px] transition-transform duration-300 origin-left ${active
                        ? 'bg-blue-600 w-full scale-x-100 active'
                        : 'bg-blue-600 w-full scale-x-0 group-hover:scale-x-100 inactive'
                      }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-2 text-slate-700 text-sm">
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="font-medium">+91 98765 43210</span>
          </div>

          <Link
            to="/contact"
            className="cta-button px-6 py-2.5 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
          >
            Hire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 relative z-50"
          aria-expanded={isMobileOpen}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-nav-menu"
        >
          {isMobileOpen ? (
            <X className="w-6 h-6 text-slate-800" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6 text-slate-800" aria-hidden="true" />
          )}
        </button>
      </motion.nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.nav
            id="mobile-nav-menu"
            role="navigation"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 lg:hidden overflow-y-auto overscroll-contain mobile-menu"
          >
            <ul className="flex flex-col gap-6 text-lg font-medium nav-menu">
              {navLinks.map(link => {
                const active = location.pathname === link.path
                return (
                  <li key={link.path} className="nav-item">
                    <Link
                      to={link.path}
                      aria-current={active ? 'page' : undefined}
                      className={`nav-link mobile-nav-link block ${active ? 'text-blue-600 active' : 'text-slate-800'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="pt-6 mt-6 border-t space-y-4">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+91 98765 43210</span>
              </div>

              <Link
                to="/contact"
                className="cta-button block w-full text-center py-3 bg-blue-600 text-white rounded-md font-medium"
              >
                Hire Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}