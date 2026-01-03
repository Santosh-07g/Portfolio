import React from 'react'
import { motion } from 'framer-motion'
import ProjectsCard from './ProjectsCard'
import { assets } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa'

const projects = [
  {
    title: "AI Mock Interview Application",
    description: "An AI-powered mock interview app using React, Firebase and OpenAI API.",
    image: assets.projectImg7, 
    tech: ["JavaScript", "TypeScript", "React", "Firebase", "Vapi API"]
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind CSS.",
    image: assets.projectImg4,
    tech: ["React", "Javascript","Tailwind", "Framer Motion"]
  },
  {
    title: "AI Image Upscaler",
    description: "A web app that uses AI to upscale images while preserving quality.",
    image: assets.projectImg8,
    tech: ["Next.js", "Replicate Api", "ShadCN/UI", "Tailwind CSS"]

  },
]

const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Projects I build to bring ideas to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectsCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300">
            <span>View More Projects</span>
            <FaArrowRight className='ml-2'/>
          </a>

        </div>
      </div>
    </motion.div>
  )
}

export default Projects
