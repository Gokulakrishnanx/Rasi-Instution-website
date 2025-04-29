"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, Target, Award, Users } from "lucide-react"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-md mx-auto text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">About Rasi Institution</h2>
          <div className="h-1 w-16 sm:w-20 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base">
            Founded with a vision to provide quality education, Rasi Institution has been a center of academic
            excellence for over a decade.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 max-w-6xl mx-auto mb-10 sm:mb-16 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1 */}
          <motion.div
            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-4 sm:p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Specialized Education</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Our institution specializes in teaching Mathematics for students from classes 9 to 12 with personalized attention.
            </p>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-4 sm:p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Modern Approach</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Our teaching methodology combines traditional classroom learning with modern technological tools and practical applications.
            </p>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div
            className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-4 sm:p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Expert Educators</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Our team of experienced educators is dedicated to nurturing young minds and helping them achieve their full potential.
            </p>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-6 sm:py-12 md:p-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Our Mission</h3>
              </div>

              <div className="ml-0 sm:ml-16">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
                  To empower students with knowledge, skills, and confidence to excel in academics and beyond, 
                  creating a foundation for lifelong learning and achievement.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_60%)]"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto sm:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-1 sm:mb-2">10+</div>
            <p className="text-gray-400 text-xs sm:text-sm">Years of Excellence</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-1 sm:mb-2">15+</div>
            <p className="text-gray-400 text-xs sm:text-sm">Expert Teachers</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-1 sm:mb-2">500+</div>
            <p className="text-gray-400 text-xs sm:text-sm">Students Taught</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-1 sm:mb-2">95%</div>
            <p className="text-gray-400 text-xs sm:text-sm">Success Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
