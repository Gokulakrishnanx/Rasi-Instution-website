"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, X, Menu } from "lucide-react"

export default function Navbar() {
  const [classesOpen, setClassesOpen] = useState(false)
  const [subjectsOpen, setSubjectsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Close dropdowns when toggling mobile menu
    setClassesOpen(false)
    setSubjectsOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            RASI
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Home
            </Link>

            <Link href="#about" className="text-sm font-medium hover:text-gray-300 transition-colors">
              About Us
            </Link>

            <div className="relative group">
              <button
                className="flex items-center text-sm font-medium hover:text-gray-300 transition-colors"
                onClick={() => setClassesOpen(!classesOpen)}
              >
                Classes <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {classesOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-40 bg-zinc-900 border border-zinc-800 rounded-md shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-1">
                    <Link href="#class-9" className="block px-4 py-2 text-sm hover:bg-zinc-800 transition-colors">
                      Class 9
                    </Link>
                    <Link href="#class-10" className="block px-4 py-2 text-sm hover:bg-zinc-800 transition-colors">
                      Class 10
                    </Link>
                    <Link href="#class-11" className="block px-4 py-2 text-sm hover:bg-zinc-800 transition-colors">
                      Class 11
                    </Link>
                    <Link href="#class-12" className="block px-4 py-2 text-sm hover:bg-zinc-800 transition-colors">
                      Class 12
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-sm font-medium hover:text-gray-300 transition-colors"
                onClick={() => setSubjectsOpen(!subjectsOpen)}
              >
                Subjects <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {subjectsOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-40 bg-zinc-900 border border-zinc-800 rounded-md shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-1">
                    <Link href="#maths" className="block px-4 py-2 text-sm hover:bg-zinc-800 transition-colors">
                      Mathematics
                    </Link>
                    <Link href="#physics" className="block px-4 py-2 text-sm hover:bg-zinc-800 transition-colors">
                      Physics
                    </Link>
                    <Link href="#chemistry" className="block px-4 py-2 text-sm hover:bg-zinc-800 transition-colors">
                      Chemistry
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            <Link href="#videos" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Videos
            </Link>

            <Link href="#contact" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="#enrol"
              className="inline-flex h-10 items-center justify-center rounded-full bg-white text-black px-6 font-medium transition-transform hover:scale-105"
            >
              Enrol Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden py-4 mt-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-sm font-medium hover:text-gray-300 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                href="#about" 
                className="text-sm font-medium hover:text-gray-300 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              <div className="py-2">
                <button
                  className="flex items-center text-sm font-medium hover:text-gray-300 transition-colors w-full justify-between"
                  onClick={() => setClassesOpen(!classesOpen)}
                >
                  Classes <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${classesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {classesOpen && (
                  <div className="pl-4 mt-2 border-l border-zinc-800 space-y-2">
                    <Link 
                      href="#class-9" 
                      className="block py-2 text-sm hover:text-gray-300 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Class 9
                    </Link>
                    <Link 
                      href="#class-10" 
                      className="block py-2 text-sm hover:text-gray-300 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Class 10
                    </Link>
                    <Link 
                      href="#class-11" 
                      className="block py-2 text-sm hover:text-gray-300 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Class 11
                    </Link>
                    <Link 
                      href="#class-12" 
                      className="block py-2 text-sm hover:text-gray-300 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Class 12
                    </Link>
                  </div>
                )}
              </div>
              
              <div className="py-2">
                <button
                  className="flex items-center text-sm font-medium hover:text-gray-300 transition-colors w-full justify-between"
                  onClick={() => setSubjectsOpen(!subjectsOpen)}
                >
                  Subjects <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${subjectsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {subjectsOpen && (
                  <div className="pl-4 mt-2 border-l border-zinc-800 space-y-2">
                    <Link 
                      href="#maths" 
                      className="block py-2 text-sm hover:text-gray-300 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Mathematics
                    </Link>
                    <Link 
                      href="#physics" 
                      className="block py-2 text-sm hover:text-gray-300 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Physics
                    </Link>
                    <Link 
                      href="#chemistry" 
                      className="block py-2 text-sm hover:text-gray-300 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Chemistry
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="#videos" 
                className="text-sm font-medium hover:text-gray-300 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Videos
              </Link>
              
              <Link 
                href="#contact" 
                className="text-sm font-medium hover:text-gray-300 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Link
                href="#enrol"
                className="inline-flex h-10 items-center justify-center rounded-full bg-white text-black px-6 font-medium transition-transform hover:scale-105 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Enrol Now
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
