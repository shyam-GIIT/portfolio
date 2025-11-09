'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Student Management System',
    description: 'Developed a Java-based system using MySQL with add/update/delete/view features and a Swing UI.',
    technologies: ['Java', 'MySQL'],
  },
  {
    title: 'FlowStack Portfolio',
    description: 'Modern portfolio website with interactive 3D elements, smooth animations, and responsive design built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'ReactJS', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'YouTube Clone',
    description: 'Fully responsive YouTube front-end clone replicating layout & UX.',
    technologies: ['HTML', 'CSS'],
  },
  {
    title: 'Real-Time Weather Tracker',
    description: 'Weather app that fetches live temperature, humidity, and conditions using API.',
    technologies: ['HTML', 'CSS', 'API Integration'],
  },
  {
    title: 'RPS Game',
    description: 'Rock-Paper-Scissors built using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-blue-900/10 to-purple-900/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.1),transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-normal pb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.p 
          className="text-neutral-400 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A collection of projects showcasing my skills and experience
        </motion.p>

        <motion.div 
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="group relative p-4 sm:p-6 border border-neutral-800/50 bg-gradient-to-br from-neutral-900/90 via-neutral-950/90 to-neutral-900/90 backdrop-blur-xl hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300" />
                <div className="relative z-10">
                  <motion.h3 
                    className="text-xl sm:text-2xl font-extrabold mb-2 sm:mb-3 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-neutral-300/80 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-blue-300 border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(59, 130, 246, 0.3)',
                          borderColor: 'rgba(59, 130, 246, 0.5)'
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 + techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

