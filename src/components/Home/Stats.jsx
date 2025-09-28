import CountUp from 'react-countup'
import { Users, Building2, Award, Clock } from 'lucide-react'

const Stats = () => {
  const stats = [
    { icon: <Building2 size={32} />, number: 250, label: "Projects Completed", suffix: "+" },
    { icon: <Users size={32} />, number: 50, label: "Happy Clients", suffix: "+" },
    { icon: <Award size={32} />, number: 10, label: "Years Experience", suffix: "+" },
    { icon: <Clock size={32} />, number: 98, label: "On Time Delivery", suffix: "%" }
  ]

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">
                <CountUp end={stat.number} duration={3} suffix={stat.suffix} />
              </div>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats