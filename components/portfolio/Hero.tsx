'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullName = "SHYAM KUMAR CHANDRU Y"
  const fullText = `Hi, I am ${fullName}`

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [fullText])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 pointer-events-none" />
      <Card className="w-full max-w-7xl mx-auto h-[500px] sm:h-[600px] md:h-[700px] bg-gradient-to-br from-black/90 via-neutral-950/90 to-black/90 relative overflow-hidden border border-neutral-800/50 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
        />
        
        <div className="flex flex-col md:flex-row h-full">
          {/* Left content */}
          <motion.div 
            className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-2">
              <motion.span 
                className="text-sm sm:text-base text-blue-400 font-semibold tracking-wider uppercase"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Developer & Creator
              </motion.span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-4 sm:mb-6 min-h-[80px] sm:min-h-[100px] md:min-h-[140px] leading-tight drop-shadow-2xl">
              {displayText}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                {displayText.length < fullText.length ? '|' : ''}
              </span>
            </h1>
            <motion.p 
              className="mt-4 text-neutral-300/90 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Crafting digital experiences with code and creativity. Explore my work and let's build something amazing together.
            </motion.p>
            <motion.div 
              className="mt-6 sm:mt-8 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl font-semibold text-white overflow-hidden shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>
          {/* Right content */}
          <motion.div 
            className="flex-1 relative min-h-[300px] md:min-h-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </Card>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <ArrowDown className="text-neutral-400" size={24} />
      </motion.a>
    </section>
  )
}

