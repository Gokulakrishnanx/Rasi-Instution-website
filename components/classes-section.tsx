"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, Users, Award, Clock } from "lucide-react"

const classes = [
  {
    id: "class-9",
    name: "Class 9",
    description: "Foundation building for secondary education with focus on fundamental concepts.",
    features: ["NCERT curriculum coverage", "Regular assessments", "Doubt clearing sessions"],
    icon: BookOpen,
  },
  {
    id: "class-10",
    name: "Class 10",
    description: "Comprehensive preparation for board examinations with strategic approach.",
    features: ["Board exam preparation", "Mock tests", "Performance analysis"],
    icon: Users,
  },
  {
    id: "class-11",
    name: "Class 11",
    description: "Transition to higher secondary with in-depth subject knowledge.",
    features: ["Advanced concepts", "Practical applications", "Competitive exam basics"],
    icon: Award,
  },
  {
    id: "class-12",
    name: "Class 12",
    description: "Intensive coaching for board exams and entrance test preparation.",
    features: ["Board & entrance exam focus", "Problem-solving techniques", "Regular mock tests"],
    icon: Clock,
  },
]

export default function ClassesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="classes" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Our Classes
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive education programs tailored for different academic levels
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {classes.map((classItem) => (
            <motion.div
              key={classItem.id}
              id={classItem.id}
              className="bg-zinc-900 rounded-2xl p-4 sm:p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/20"
              variants={itemVariants}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <classItem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{classItem.name}</h3>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{classItem.description}</p>

              <ul className="space-y-1 sm:space-y-2">
                {classItem.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
