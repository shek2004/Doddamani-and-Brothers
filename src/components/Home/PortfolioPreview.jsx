import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Eye, ArrowRight } from 'lucide-react'
import projectsData from '../../data/projectsData'

const PortfolioPreview = () => {
  // Fetch only first 3 projects for preview
  const projects = projectsData.slice(0, 3)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our excellence in construction and design
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={`${project.title} - ${project.category}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <Eye size={32} className="mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/portfolio" className="inline-flex items-center text-primary font-semibold text-lg hover:text-blue-800 transition-colors">
            View All Projects <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioPreview
