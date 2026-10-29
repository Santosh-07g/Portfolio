import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

// thin accent line across the top that fills as you scroll down the page
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-purple via-pink to-blue"
    />
  )
}

export default ScrollProgress
