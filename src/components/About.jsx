import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { FaTools, FaProjectDiagram, FaGraduationCap, FaBullseye} from 'react-icons/fa'

/* About cards data */
const aboutInfo = [
  {
    icon: FaGraduationCap,
    title: 'Education',
    description: 'Bachelor of Computer Applications with strong fundamentals in programming'
  },
  {
    icon: FaTools,
    title: 'Skills',
    description: 'Python,MySQL,Reactjs, JavaScript and DSA concepts'
  },
  {
    icon: FaProjectDiagram,
    title: 'Projects',
    description: 'AI Mock Interview App, my personal portfolio website'
  },
  {
    icon: FaBullseye,
    title: 'Goal',
    description: 'Becoming a skilled and impactful software engineer'
  }
]

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* Image + Content */}
        <div className="flex flex-col md:flex-row items-start gap-12">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2.5 h-[800px] rounded-2xl overflow-hidden shadow-lg shadow-black/30"
          >
            <img
              src={assets.projectImg3}
              alt="About profile"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">

              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                My journey in technology began with curiosity about how applications work,
                which led me to pursue a Bachelor of Computer Applications. During my studies,
                I built a strong foundation in programming and software development.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                I worked on practical projects like an AI Mock Interview Application and
                public issue reporting systems, gaining hands-on experience with Python,
                Java, PHP, MySQL, and full-stack development concepts.
              </p>

              {/* <p className="text-gray-300 mb-6 leading-relaxed">
                These experiences strengthened my problem-solving abilities and taught me
                the importance of consistency, clean code, and continuous learning.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Along with technical skills, I actively focus on improving my communication
                and interview skills while growing toward my goal of becoming a software engineer.
              </p> */}

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {data.title}
                    </h3>
                    <p className="text-gray-400">
                      {data.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}

export default About
