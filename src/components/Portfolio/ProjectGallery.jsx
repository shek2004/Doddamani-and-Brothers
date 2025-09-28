import { motion } from 'framer-motion'
import { Eye, ExternalLink } from 'lucide-react'
import projectsData from '../../data/projectsData.js'

const ITEMS_PER_PAGE = 8

const ProjectGallery = ({ filter, visibleCount, setVisibleCount }) => {
  let filteredProjects = projectsData
  if (filter === 'ongoing' || filter === 'completed') {
    filteredProjects = projectsData.filter(p => p.status === filter)
  } else if (filter !== 'all') {
    filteredProjects = projectsData.filter(p => p.year === Number(filter))
  }

  const visibleProjects = filteredProjects.slice(0, visibleCount)

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center text-white p-4">
                <Eye size={32} className="mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex justify-center space-x-4">
                  <ExternalLink size={20} className="cursor-pointer hover:scale-110" />
                  <Eye size={20} className="cursor-pointer hover:scale-110" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <span className="text-primary font-semibold">{project.category.toUpperCase()}</span>
              <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {visibleCount < filteredProjects.length && (
        <div className="text-center mt-8">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
            onClick={() => setVisibleCount(visibleCount + ITEMS_PER_PAGE)}
          >
            Load More
          </button>
        </div>
      )}
    </>
  )
}

export default ProjectGallery