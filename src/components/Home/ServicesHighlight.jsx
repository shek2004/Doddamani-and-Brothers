import { motion } from 'framer-motion'
import { HardHat, ClipboardCheck, Home, Building } from 'lucide-react'

const ServicesHighlight = () => {
  const services = [
    {
      icon: <HardHat size={48} className="text-primary" />,
      title: "Construction",
      description: "Full-service construction from planning to completion"
    },
    {
      icon: <ClipboardCheck size={48} className="text-primary" />,
      title: "Consulting",
      description: "Expert advice for your construction projects"
    },
    {
      icon: <Home size={48} className="text-primary" />,
      title: "Interior Design",
      description: "Modern and functional interior solutions"
    },
    {
      icon: <Building size={48} className="text-primary" />,
      title: "Civil Engineering",
      description: "Infrastructure and structural engineering services"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction and consulting solutions for all your project needs
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesHighlight