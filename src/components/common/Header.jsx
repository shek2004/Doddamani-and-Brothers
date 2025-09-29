import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-white/70 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dqojj8h2u/image/upload/v1759133176/Logo_yebaxd.webp"
            alt="Doddamani & Brothers Logo"
            className="h-10 w-10 rounded-full shadow-lg border-2 border-blue-400"
          />
          <span className="hidden md:inline text-xl font-bold text-900 drop-shadow-sm">Doddamani & Brothers</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-2 py-1 rounded transition-colors duration-200 ${
                location.pathname === item.to
                  ? 'text-blue-700 font-semibold bg-blue-100'
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white/90 backdrop-blur-md border-t shadow"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`block px-2 py-2 rounded ${
                  location.pathname === item.to
                    ? 'text-blue-700 font-semibold bg-blue-100'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  )
}

export default Header
