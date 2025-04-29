"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function YouTubeVideos() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Sample YouTube video IDs - replace these with your actual YouTube video IDs
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Mathematics Concept Explanation",
    },
    {
      id: "RK1K2bCg4J8",
      title: "Physics Problem Solving",
    },
    {
      id: "V-_O7nl0Ii0",
      title: "Chemistry Lab Experiments",
    },
    {
      id: "G2W9YVkkEwU",
      title: "Exam Preparation Tips",
    },
  ]

  return (
    <section id="videos" className="py-24 bg-zinc-950" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Video Lessons</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch our educational videos to enhance your understanding of key concepts in Mathematics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="aspect-video relative">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <div className="flex items-center justify-between mt-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 text-sm font-medium flex items-center"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://www.youtube.com/channel/REPLACE_WITH_YOUR_CHANNEL_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-red-600 hover:bg-red-700 px-8 font-medium transition-transform hover:scale-105"
          >
            Visit Our YouTube Channel
          </a>
        </motion.div>
      </div>
    </section>
  )
} 