import React from 'react'
import { motion } from 'framer-motion'
import ProjectsCard from './ProjectsCard'
import SectionHeading from './SectionHeading'
import { stagger } from '../animations'
import { projects, profile } from '../data/portfolio'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.05 }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <SectionHeading index="03" label="projects" plain="My" accent="Projects" />

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Projects I build to bring ideas to life.
        </p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectsCard key={index} {...project} />
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300">
            <span>View More Projects</span>
            <FaArrowRight className='ml-2'/>
          </a>

        </div>
      </div>
    </motion.div>
  )
}

export default Projects
