import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../animations'
import { trackPointer } from '../utils/trackPointer'

const ProjectsCard = ({ title, description, image, tech, demoLink, codeLink }) => {
  return (
    // variants come from the grid in Projects.jsx (staggered reveal);
    // only `translate` is CSS-transitioned so it doesn't fight framer's transform
    <motion.div
      variants={fadeUp}
      onPointerMove={trackPointer}
      className="glow-card bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition-[translate] duration-300 cursor-pointer"
    >
      <img src={image} alt={title} loading="lazy" className="w-full h-48 object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span key={index} className="px-3 py-1 bg-dark-400 rounded-full text-sm">
              {item}
            </span>
          ))}
        </div>

        {/* ONLY View Demo & Code */}
        <div className="flex gap-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 bg-purple text-on-accent rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Demo
            </a>
          )}

          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectsCard
