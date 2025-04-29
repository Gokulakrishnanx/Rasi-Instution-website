"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="mb-6 sm:mb-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tighter mb-4 sm:mb-6 inline-block">
              RASI
            </Link>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Empowering students with quality education in Mathematics, Physics, and Chemistry for classes 9-12.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div className="mb-6 sm:mb-0">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#classes" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-6">Subjects</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="#maths" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Mathematics
                </Link>
              </li>
              <li>
                <Link href="#physics" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Physics
                </Link>
              </li>
              <li>
                <Link href="#chemistry" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Chemistry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          className="border-t border-zinc-900 mt-6 sm:mt-12 pt-6 sm:pt-8 text-gray-500 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="mb-3 sm:mb-0">&copy; 2025 Rasi Institution. All rights reserved.</p>
            <a 
              href="https://gokul96.one" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-gray-400 hover:text-gray-300 transition-colors"
            >
              Developed by Gokulakrishnan S <span className="text-gray-500">🩶</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
