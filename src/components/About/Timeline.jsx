import { motion } from 'framer-motion'
import { Calendar, CheckCircle } from 'lucide-react'

const Timeline = () => {
  const timelineEvents = [
    { year: 2009, title: "Founded", description: "BuildPro was established with a vision to revolutionize construction." },
    { year: 2012, title: "First Major Project", description: "Completed our first commercial building project." },
    { year: 2015, title: "Expanded Services", description: "Added consulting and interior design divisions." }
    // { year: 2018, title: "Award Winning", description: "Received Construction Excellence Award for sustainable practices." },
    // { year: 2022, title: "Global Reach", description: "Expanded operations to international markets." },
    // { year: 2024, title: "Innovation Leader", description: "Implemented AI-driven project management systems." }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 mb-16"
        >
          Our Journey
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary"></div>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 p-6 rounded-lg ${
                index % 2 === 0 ? 'ml-auto text-right' : 'mr-auto text-left'
              } bg-white shadow-lg`}>
                <div className="flex items-center justify-center md:justify-end mb-4">
                  <Calendar className="text-primary mr-2" size={20} />
                  <span className="font-bold text-primary">{event.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="text-white" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline