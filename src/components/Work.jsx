import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../data/portfolio'
import { trackPointer } from '../utils/trackPointer'
import SectionHeading from './SectionHeading'

const Work = () => {
  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.05 }}
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <SectionHeading index="04" label="experience" plain="Work" accent="Experience" />

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My Journey so far
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-12 before:content-[''] 
                before:absolute before:left-0 before:top-0
                before:w-[2px] before:h-full before:bg-purple
                cursor-pointer hover:-translate-y-2 transition-all duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-0.5rem] top-0 w-6 h-6 bg-purple rounded-full" />

                {/* Content box */}
                <div onPointerMove={trackPointer} className='glow-card bg-dark-300 p-6 rounded-2xl'>
                    <div className="flex flex-col-reverse items-start gap-2 mb-2 sm:flex-row sm:justify-between">
                        <h3 className="text-xl font-semibold">{item.role}</h3>
                        <span className="shrink-0 whitespace-nowrap px-3 py-1 bg-purple/20 text-purple rounded-full text-xs md:text-sm">{item.duration}</span>
                    </div>
                    <p className='text-gray-400 mb-2'>{item.company}</p>
                    <p className="text-gray-300">{item.description}</p>
                    
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work
