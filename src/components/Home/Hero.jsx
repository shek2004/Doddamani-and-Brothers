import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.jpg'

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${logoImg})` }} // use imported image
    >
      {/* Blurred background overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 60%, rgba(30,64,175,0.5) 100%)'
          }}
        />
      </div>
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg"
        >
          Building Your <span className="text-blue-400">Future</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto text-gray-200 drop-shadow"
        >
          Expert construction and consulting services for <span className="text-blue-300 font-semibold">residential</span>, <span className="text-blue-300 font-semibold">commercial</span>, and <span className="text-blue-300 font-semibold">industrial</span> projects.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-4xl mb-8 max-w-2xl mx-auto font-bold text-yellow-300 drop-shadow"
        >
          Doddamani & Brothers
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-x-4 flex justify-center"
        >
          <Link
            to="/services"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-800 transition-colors inline-flex items-center"
          >
            Our Services <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-white hover:text-blue-900 transition-colors"
          >
            Get Quote
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
