"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { UserCheck, BookOpen, Trophy, Users } from "lucide-react"

const features = [
  {
    icon: UserCheck,
    title: "Expert Faculty",
    description: "Our teachers are subject matter experts with years of teaching experience and proven track records.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description:
      "Carefully designed curriculum covering all aspects of the syllabus with additional focus on competitive exams.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Consistent record of producing top scorers in board examinations and competitive entrance tests.",
  },
  {
    icon: Users,
    title: "Personalized Attention",
    description:
      "Small batch sizes ensuring individual attention and personalized learning experience for each student.",
  },
]

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover what sets Rasi Institution apart and makes us the preferred choice for academic excellence
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#enrol"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 font-medium transition-transform hover:scale-105"
          >
            Join Rasi Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
