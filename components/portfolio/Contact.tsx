'use client'

import { Github, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const contactLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com',
    color: 'text-neutral-400',
    hoverColor: 'text-white',
  },
  {
    icon: Phone,
    name: 'Phone',
    href: 'tel:9080731779',
    color: 'text-blue-500',
    hoverColor: 'text-blue-400',
    value: '9080731779',
  },
  {
    icon: Mail,
    name: 'Email',
    href: 'mailto:shyamkumar890145@gmail.com',
    color: 'text-pink-500',
    hoverColor: 'text-pink-400',
    value: 'shyamkumar890145@gmail.com',
  },
]

export function Contact() {
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
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight pb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Connect With Me
        </motion.h2>
        <motion.p 
          className="text-neutral-400 text-center max-w-2xl mx-auto mb-12 text-sm sm:text-base"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Check out my work and get in touch with me.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactLinks.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.name === 'GitHub' ? '_blank' : undefined}
              rel={contact.name === 'GitHub' ? 'noopener noreferrer' : undefined}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex flex-col items-center gap-3 p-6 sm:p-8 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-900/90 via-neutral-950/90 to-neutral-900/90 backdrop-blur-xl hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer w-full sm:w-auto min-w-[200px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300" />
              <motion.div
                className="relative z-10 p-3 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <contact.icon size={32} className={`${contact.color} group-hover:text-blue-400 transition-colors`} />
              </motion.div>
              <span className="relative z-10 text-neutral-200 font-bold text-base sm:text-lg group-hover:text-white transition-colors">{contact.name}</span>
              {contact.value && (
                <span className="relative z-10 text-neutral-300 text-sm sm:text-base group-hover:text-blue-300 transition-colors font-medium">{contact.value}</span>
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

