"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Class 12 Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
    quote:
      "Joining Rasi Institution was the best decision I made. The teachers are incredibly knowledgeable and supportive. My understanding of Mathematics improved significantly, helping me secure a top rank in my board exams.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Class 10 Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    quote:
      "The teaching methodology at Rasi is unique and effective. The concepts are explained in a simple yet comprehensive manner. I scored 98% in my board exams thanks to the guidance from Rasi's faculty.",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5,
    quote:
      "As a parent, I've seen a remarkable improvement in my daughter's academic performance since she joined Rasi. The regular feedback and progress reports keep us informed about her development. Highly recommended!",
  },
  {
    id: 4,
    name: "Arjun Nair",
    role: "Class 11 Student",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    stars: 5,
    quote:
      "The problem-solving techniques I learned at Rasi Institution have transformed my approach to mathematics. Their focus on conceptual understanding rather than rote learning has made me more confident in tackling complex problems.",
  },
  {
    id: 5,
    name: "Kavita Reddy",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    stars: 4,
    quote:
      "My son struggled with mathematics until he enrolled at Rasi. The personalized attention and interactive teaching methods have sparked his interest in the subject. He now looks forward to his math classes!",
  },
  {
    id: 6,
    name: "Vikram Singh",
    role: "Class 12 Student",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    stars: 5,
    quote:
      "The faculty at Rasi Institution doesn't just teach the curriculum; they inspire us to think beyond it. Their commitment to excellence and supportive environment has been instrumental in my academic growth.",
  },
  {
    id: 7,
    name: "Meera Agarwal",
    role: "Former Student, Now at IIT",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
    stars: 5,
    quote:
      "I credit my success in the competitive exams to the rigorous training I received at Rasi Institution. The strong foundation they helped me build has carried me through my engineering studies at IIT.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonials.length > 1) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    if (testimonials && testimonials.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }
  }

  const prevTestimonial = () => {
    if (testimonials && testimonials.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }
  }

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-md mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400">
            Hear from our students and parents about their experience with Rasi Institution
          </p>
        </motion.div>

        <motion.div 
          ref={ref} 
          className="max-w-6xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Desktop view with cards */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {[
              currentIndex % testimonials.length,
              (currentIndex + 1) % testimonials.length,
              (currentIndex + 2) % testimonials.length,
            ].map((index) => (
              <div 
                key={testimonials[index].id}
                className="bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 shadow-lg relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < testimonials[index].stars ? "fill-yellow-400 text-yellow-400" : "text-gray-500"} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 relative z-10">
                  <Quote size={36} className="absolute -top-1 -left-2 text-blue-500/10 z-0" />
                  {testimonials[index].quote}
                </p>
                
                <div className="flex items-center mt-4">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-12 h-12 rounded-full border-2 border-blue-500/30 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/80";
                    }}
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonials[index].name}</h4>
                    <p className="text-sm text-gray-400">{testimonials[index].role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view with single card */}
          <div className="md:hidden">
            <div className="bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonials[currentIndex].stars ? "fill-yellow-400 text-yellow-400" : "text-gray-500"} 
                  />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 relative z-10">
                <Quote size={36} className="absolute -top-1 -left-2 text-blue-500/10 z-0" />
                {testimonials[currentIndex].quote}
              </p>
              
              <div className="flex items-center mt-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500/30 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://via.placeholder.com/80";
                  }}
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-4 bg-blue-500" : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="max-w-2xl mx-auto text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl text-blue-400 mb-6">
            Join our community of successful students today!
          </p>
          <a
            href="#enrol"
            className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 font-medium transition-all hover:shadow-lg hover:shadow-blue-500/30"
          >
            Enrol Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
