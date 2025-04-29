"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault()
    // WhatsApp redirect with a predefined message
    window.open("https://wa.me/+918610662551?text=I'm%20interested%20to%20join%20sir", "_blank")
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 px-4 sm:px-6">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#444_1px,transparent_1px)]" style={{ backgroundSize: '30px 30px' }}></div>
          
          {/* Animated circles - hidden on very small screens */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl hidden xs:block"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8,
              ease: "easeInOut"
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl hidden xs:block"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 10,
              ease: "easeInOut" 
            }}
          ></motion.div>
          
          {/* Floating math symbols - adjusted for visibility on mobile */}
          <div className="absolute inset-0">
            {/* Math formulas - smaller and positioned differently on mobile */}
            <motion.div 
              className="absolute top-[15%] left-[15%] sm:left-[25%] text-3xl sm:text-4xl font-light text-white/40"
              animate={{ y: [0, -15, 0], opacity: [0.4, 0.6, 0.4] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              ∑
            </motion.div>
            <motion.div 
              className="absolute top-[40%] left-[20%] sm:left-[35%] text-4xl sm:text-5xl font-light text-white/30"
              animate={{ y: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            >
              π
            </motion.div>
            <motion.div 
              className="absolute top-[65%] left-[10%] sm:left-[20%] text-3xl sm:text-4xl font-light text-white/40"
              animate={{ y: [0, -10, 0], opacity: [0.4, 0.6, 0.4] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              ∫
            </motion.div>
            <motion.div 
              className="absolute top-[30%] right-[20%] sm:right-[30%] text-4xl sm:text-5xl font-light text-white/30"
              animate={{ y: [0, 10, 0], opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            >
              ∞
            </motion.div>
            <motion.div 
              className="absolute top-[55%] right-[15%] sm:right-[25%] text-3xl sm:text-4xl font-light text-white/40"
              animate={{ y: [0, -12, 0], opacity: [0.4, 0.6, 0.4] }}
              transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
            >
              √
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section - better centered on mobile */}
      <div className="container mx-auto z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center mb-6 justify-center md:justify-start"
          >
            <div className="h-1 w-8 sm:w-12 bg-blue-500 mr-3 sm:mr-4"></div>
            <span className="text-blue-400 uppercase tracking-wider text-xs sm:text-sm font-medium">Unlock Your Potential</span>
          </motion.div>
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-center md:text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block">Transform Your</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Mathematical Journey
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 text-center md:text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Rasi Institution, we provide exceptional education in Mathematics for classes
            9-12, helping students achieve academic excellence through personalized learning.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              onClick={handleGetStarted}
              className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 font-medium transition-all hover:shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto"
            >
              Get Started
            </button>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gray-700 backdrop-blur-sm px-6 sm:px-8 font-medium transition-all hover:border-blue-500 hover:text-blue-400 w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </motion.div>
          
          <motion.div
            className="mt-6 flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              href="/student-portal-app.apk"
              download
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              onClick={(e) => {
                // You can replace this with actual download logic if needed
                // This is just a placeholder showing how to handle the download
                if (!confirm("Download the Student Portal App?")) {
                  e.preventDefault();
                }
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Student Portal App
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-8 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">10+</div>
              <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">500+</div>
              <div className="text-xs sm:text-sm text-gray-400">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">95%</div>
              <div className="text-xs sm:text-sm text-gray-400">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
