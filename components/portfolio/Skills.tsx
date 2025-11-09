'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  'HTML',
  'CSS',
  'ReactJS',
  'Java',
  'SQL',
  'Python',
  'Networking'
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <section id="skills" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/10 to-blue-900/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.1),transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <motion.p 
          className="text-neutral-400 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies and tools I work with
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="group relative px-4 sm:px-6 py-2 sm:py-3 border border-neutral-800/50 bg-gradient-to-br from-neutral-900/80 via-neutral-950/80 to-neutral-900/80 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                <span className="relative z-10 text-neutral-300 font-semibold text-base sm:text-lg group-hover:text-white transition-colors">{skill}</span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

