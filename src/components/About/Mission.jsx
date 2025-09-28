import { motion } from 'framer-motion'
import { Target, ShieldCheck } from 'lucide-react'
import AnandImg from '../../assets/images/Anand.jpg';

const Mission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Mission & Vision</h1>
            <p className="text-xl text-gray-600 mb-6">
              At BuildPro, we are committed to delivering excellence in every project. Our mission is to transform visions into reality through innovative construction solutions and expert consulting.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Target className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Mission</h3>
                  <p className="text-gray-600">To provide sustainable, high-quality construction services that exceed client expectations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ShieldCheck className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Vision</h3>
                  <p className="text-gray-600">To be the leading construction firm known for innovation, integrity, and impact.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={AnandImg}
              alt="Our Mission"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Mission