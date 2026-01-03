import React from 'react'
import { motion } from 'framer-motion'

const workData = [
  {
    role: "Full Stack Developer Intern/Trainee",
    company: "Pentagon Space",
    duration: "Nov-2025 Present",
    description: "Gaining hands-on experience in full-stack development using Python, HTML, CSS, JavaScript,Reactjs, Django, Numpy and MySQL. Building responsive UI, backend logic, and database connectivity for multiple web applications.",
                  
  }
]

const Work = () => {
  return (
    <motion.div
      id="experince"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Work <span className="text-purple">Experience</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My Journey so far
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((item, index) => (
              <div
                key={index}
                className="relative pl-12 before:content-[''] 
                before:absolute before:left-0 before:top-0
                before:w-[2px] before:h-full before:bg-purple
                cursor-pointer hover:-translate-y-2 transition-all duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-0.5rem] top-0 w-6 h-6 bg-purple rounded-full" />

                {/* Content box */}
                <div className='bg-dark-300 p-6 rounded-2xl'>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{item.role}</h3>
                        <span className="px-3 py-1 bg-purple/20 text-purple rounded-full text-xs md:text-sm">{item.duration}</span>
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
