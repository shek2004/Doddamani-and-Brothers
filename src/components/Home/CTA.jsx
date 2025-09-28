import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Start Your Project?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Get in touch with our experts today for a free consultation and quote.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center"
        >
          <Link
            to="/contact"
            className="block md:inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Quote
          </Link>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center">
              <Phone size={20} className="mr-2" />
              <span>+91 94807 50444</span>
            </div>
            <div className="flex items-center">
              <Mail size={20} className="mr-2" />
              <span>doddamani.brothers@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA