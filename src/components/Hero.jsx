import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import { profile } from '../data/portfolio'
import { stagger, fadeUp } from '../animations'
import { trackPointer } from '../utils/trackPointer'
import HeroBackdrop from './HeroBackdrop'
import Terminal from './Terminal'

const Hero = () => {
  return (
    <div
      id='home'
      onPointerMove={trackPointer}
      className='relative min-h-screen flex items-center pt-24 md:pt-20 pb-16 bg-gradient-to-r from-dark-100 via-dark-300 to-dark-100'
    >
      {/* dot grid, fading out toward the edges */}
      <div
        aria-hidden='true'
        className='code-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]'
      />
      {/* drifting code tokens + cursor spotlight */}
      <HeroBackdrop />

      {/*
        Three blocks in a grid: intro, terminal, LeetCode card.
        Phones stack them in that order, so the terminal is on the first screen
        instead of buried under the card. From lg up the terminal takes the right
        column and the intro + card stack on the left. (Tablets stay stacked: two columns
        are too tight below ~1000px.)
      */}
      <motion.div
        variants={stagger}
        initial='hidden'
        animate='show'
        className='relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 lg:items-center'
      >

        {/* Intro — each line fades up in turn */}
        <motion.div variants={stagger} className='lg:col-start-1 lg:row-start-1'>

          <motion.h1 variants={fadeUp} className='text-3xl md:text-6xl font-bold mb-4 text-white'>
            Hi, I'm <span className='text-purple'>{profile.name}</span>
          </motion.h1>

          <motion.h2 variants={fadeUp} className='text-xl md:text-4xl font-semibold mb-1 typewriter'>
            SOFTWARE ENGINEER
          </motion.h2>

          <motion.p variants={fadeUp} className='text-lg text-gray-300 mb-8 leading-relaxed max-w-lg'>
            At Mount<span className='text-purple'>Blue</span> Software Company
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className='flex gap-4 flex-wrap'>
            <a
              href="#projects"
              className='px-3 py-3 bg-purple-600 text-on-accent rounded-lg font-medium hover:bg-purple-700 transition duration-300'
            >
              View Work
            </a>

            <a
              href="#contact"
              className='px-3 py-3 border border-purple-500 text-white rounded-lg font-medium hover:bg-purple-500/20 transition duration-300'
            >
              Contact Me
            </a>

            <a
              href={profile.resume.href}
              download={profile.resume.filename}
              className='inline-flex items-center gap-2 px-3 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition duration-300'
            >
              <FaDownload />
              Resume
            </a>
          </motion.div>

        </motion.div>

        {/* Interactive terminal */}
        <motion.div
          variants={fadeUp}
          className='flex lg:justify-center lg:col-start-2 lg:row-start-1 lg:row-span-2'
        >
          <Terminal />
        </motion.div>

        {/* LeetCode Card */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          className='lg:col-start-1 lg:row-start-2 bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-5 max-w-md shadow-lg'
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
                  Problem Solving
                </h3>
                <p className='text-sm text-gray-400'>
                  LeetCode &amp; HackerRank
                </p>
              </div>
            </div>

            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className='px-4 py-2.5 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition'
            >
              View
            </a>

          </div>

          <div className='grid grid-cols-3 gap-4 text-center'>

            <div>
              <h4 className='text-2xl font-bold text-purple-400'>500+</h4>
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

      </motion.div>
    </div>
  )
}

export default Hero
