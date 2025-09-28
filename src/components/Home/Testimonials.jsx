import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bhoomika Balikai",
      // company: "Smith Development",
      text: "Excellent work ,good service , also good response & prefect finishing",
      rating: 4
    },
    {
      name: "Anusha T",
      // company: "Johnson Realty",
      text: "We had an outstanding experience with Doddamani & Brothers Construction, Right from the initial discussions to the final handover, everything was handled with professionalism, care, and dedication. A big shoutout to Anand Doddamani, whose involvement made a real difference—not just because of his technical expertise, but also his fun and friendly nature.",
      rating: 5
    },
    {
      name: "Iranna Huchchannavar",
      // company: "Davis Enterprises",
      text: "Your dedication to building strong foundations both literally and in teamwork is truly commendable. Your attention to detail, problem solving skills, and commitment to quality make every project you touch a success. Keep up the great work!",
      rating: 4.8
    },
    {
      name: "Prashant D",
      // company: "Chen Group",
      text: "I highly recommend (CC). The estimate was done by the owner and he stayed right on target. They crew is very skilled. They were efficient, responsive and easy to communicate with.",
      rating: 4
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-lg text-center"
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className={`${
                        i < Math.floor(testimonial.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`} />
                    ))}
                  </div>
                  <Quote size={48} className="text-primary mx-auto mb-6 opacity-20" />
                  <p className="text-lg italic text-gray-700 mb-6">"{testimonial.text}"</p>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials