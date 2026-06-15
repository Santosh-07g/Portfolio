import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>

        {/* Left Side */}
        <div className='md:w-1/2 mb-10 md:mb-0'>

          <h1 className='text-3xl md:text-6xl font-bold mb-4 text-white'>
            Hi, I'm <span className='text-purple-500'>Santosh Gurkhe</span>
          </h1>

           <h2 className='text-1xl md:text-4xl font-semibold mb-4 typewriter'>
              SOFTWERE ENGINEER
            </h2>

          <p className='text-lg text-gray-300 mb-8 leading-relaxed max-w-lg'>
            Software Engineer passionate about Full Stack Development, AI, and DSA. Built an AI Mock Interview Platform.
          </p>

          {/* Buttons */}
          <div className='flex gap-4 flex-wrap mb-8'>
            <a
              href="#projects"
              className='px-3 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition duration-300'
            >
              View Work
            </a>

            <a
              href="#contact"
              className='px-3 py-3 border border-purple-500 text-white rounded-lg font-medium hover:bg-purple-500/20 transition duration-300'
            >
              Contact Me
            </a>
          </div>

          {/* LeetCode Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className='bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-5 max-w-md shadow-lg'
          >
            <div className='flex items-center justify-between mb-4'>

              <div className='flex items-center gap-3'>
                <img
                  src="https://leetcode.com/favicon.ico"
                  alt="LeetCode"
                  className='w-10 h-10 rounded-full'
                />

                <div>
                  <h3 className='text-white font-semibold text-lg'>
                    LeetCode
                  </h3>
                  <p className='text-sm text-gray-400'>
                    Problem Solving Journey
                  </p>
                </div>
              </div>

              <a
                href="https://leetcode.com/u/santosh_077/"
                target="_blank"
                rel="noopener noreferrer"
                className='px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition'
              >
                View
              </a>

            </div>

            <div className='grid grid-cols-3 gap-4 text-center'>

              <div>
                <h4 className='text-2xl font-bold text-purple-400'>200+</h4>
                <p className='text-sm text-gray-400'>Solved</p>
              </div>

              <div>
                <h4 className='text-2xl font-bold text-green-400'>80%</h4>
                <p className='text-sm text-gray-400'>Acceptance</p>
              </div>

              <div>
                <h4 className='text-2xl font-bold text-yellow-400'>DSA</h4>
                <p className='text-sm text-gray-400'>Focus</p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Right Side Image */}
        <div className='md:w-1/2 flex justify-center'>
          <div className="relative w-72 h-72 md:w-90 md:h-90">

            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-40 animate-pulse'></div>

            <motion.img
              src={assets.profileImg}
              alt="Profile"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className='relative z-10 w-full h-full rounded-full object-cover border-4 border-purple-500/30 shadow-2xl'
            />
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Hero