import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import { stagger, fadeUp } from '../animations'
import { trackPointer } from '../utils/trackPointer'
import SectionHeading from './SectionHeading'

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.05 }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <SectionHeading index="02" label="skills" plain="My" accent="Skills" />
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life.
        </p>

        {/* Skills Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              onPointerMove={trackPointer}
              className="glow-card bg-dark-300 rounded-2xl p-6 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-purple mr-6" />
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>

              <p className="text-gray-400 mb-4">{skill.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full bg-gray-400/20 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
