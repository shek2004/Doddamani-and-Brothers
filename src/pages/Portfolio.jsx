import { useState } from 'react'
import ProjectFilter from '../components/Portfolio/ProjectFilter'
import ProjectGallery from '../components/Portfolio/ProjectGallery'

const ITEMS_PER_PAGE = 8

const Portfolio = () => {
  const [filter, setFilter] = useState('all')
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  // Reset visibleCount when filter changes
  const handleSetFilter = (newFilter) => {
    setFilter(newFilter)
    setVisibleCount(ITEMS_PER_PAGE)
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of completed projects across various sectors
          </p>
        </div>
        <ProjectFilter filter={filter} setFilter={handleSetFilter} />
        <ProjectGallery filter={filter} visibleCount={visibleCount} setVisibleCount={setVisibleCount} />
      </div>
    </div>
  )
}

export default Portfolio