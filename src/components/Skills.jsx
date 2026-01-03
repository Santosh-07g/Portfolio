import React from 'react'
import { motion } from 'framer-motion'
import { FaServer, FaDatabase, FaReact, FaCloud } from 'react-icons/fa'

const skills = [
  {
    icon: FaReact,
    title: 'FRONTEND DEVELOPMENT',
    description:
      'Experience with React.js, Tailwind CSS, and responsive design to create engaging user interfaces.',
    tags: ['Reactjs', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    icon: FaServer,
    title: 'BACKEND DEVELOPMENT',
    description:
      'Proficient in Node.js and RESTful APIs to build scalable server-side applications.',
    tags: ['Node.js', 'REST API']
  },
  {
    icon: FaDatabase,
    title: 'DATABASE MANAGEMENT',
    description:
      'Skilled in MySQL and Firebase for efficient data storage and retrieval.',
    tags: ['MySQL', 'Firebase']
  },
  {
    icon: FaCloud,
    title: 'DEPLOYMENT & CI/CD',
    description:
      'Experience with deployment platforms like Vercel and GitHub Actions for seamless delivery.',
    tags: ['Vercel','GitHub Actions']
  }
]

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-dark-300 rounded-2xl p-6 transition duration-300 cursor-pointer"
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
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
