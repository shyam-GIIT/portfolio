'use client'

import { GraduationCap } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const educationItems = [
  {
    institution: 'PSNA College of Engineering and Technology (2021–2025)',
    degree: 'BE ECE',
    score: 'CGPA: 7.4',
  },
  {
    institution: 'Higher Secondary Education (2021)',
    degree: '',
    score: '89%',
  },
  {
    institution: 'Secondary School Education (2019)',
    degree: '',
    score: '88.4%',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-neutral-400 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A brief introduction about myself
        </motion.p>

        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-block p-6 sm:p-8 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-900/80 via-neutral-950/80 to-neutral-900/80 backdrop-blur-sm shadow-xl shadow-blue-500/10">
            <p className="text-neutral-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              I'm <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Shyam Kumar Chandru Y</span>, a developer passionate about creating innovative solutions and building 
              meaningful projects. Check out my work on GitHub and connect with me.
            </p>
          </div>
        </motion.div>

        <div>
          <motion.h3 
            className="text-2xl sm:text-3xl font-extrabold text-center mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <GraduationCap className="text-blue-400" size={28} />
            </motion.div>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Education</span>
          </motion.h3>
          
          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="relative p-4 sm:p-6 border border-neutral-800/50 bg-gradient-to-br from-neutral-900/90 via-neutral-950/90 to-neutral-900/90 backdrop-blur-xl hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300" />
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors">
                          {item.institution}
                        </h4>
                        {item.degree && <p className="text-neutral-400 text-sm sm:text-base">{item.degree}</p>}
                      </div>
                      <div className="text-left md:text-right">
                        <motion.div
                          className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30"
                          whileHover={{ scale: 1.1 }}
                        >
                          <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            {item.score}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

