'use client'

import { Award } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const certifications = [
  'Python',
  'SQL',
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
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
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-neutral-900">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Award className="text-blue-400" size={40} />
          </motion.div>
          <span>Certifications</span>
        </motion.h2>
        <motion.p 
          className="text-neutral-400 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Professional certifications I have earned
        </motion.p>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="p-6 border-neutral-800 bg-neutral-900/50 hover:border-blue-500/50 hover:bg-neutral-800/50 transition-all duration-300 text-center cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="mx-auto mb-3 text-blue-400" size={32} />
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  {cert}
                </motion.h3>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

