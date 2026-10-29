import React, { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

const NOISE = '!<>-_\\/[]{}=+*^?#01'
const DURATION = 900 // ms for the whole word to resolve
const FRAME = 45 // ms between noise refreshes, slow enough to read as flicker

// Text that "decodes" left to right the first time it scrolls into view.
// The real text always stays in the DOM (it sets the width and is what screen
// readers read); the scrambled copy is an aria-hidden overlay while animating.
const ScrambleText = ({ text }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduceMotion = useReducedMotion()
  const [scrambled, setScrambled] = useState(null) // null = not animating

  useEffect(() => {
    if (!inView || reduceMotion) return
    let raf
    let lastPaint = 0
    const start = performance.now()

    const frame = (now) => {
      const progress = Math.min((now - start) / DURATION, 1)
      if (progress >= 1) {
        setScrambled(null)
        return
      }
      if (now - lastPaint >= FRAME) {
        lastPaint = now
        const resolved = Math.floor(progress * text.length)
        setScrambled(
          [...text]
            .map((ch, i) =>
              ch === ' ' || i < resolved ? ch : NOISE[Math.floor(Math.random() * NOISE.length)]
            )
            .join('')
        )
      }
      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduceMotion, text])

  return (
    <span ref={ref} className="relative inline-block">
      <span className={scrambled === null ? '' : 'invisible'}>{text}</span>
      {scrambled !== null && (
        <span aria-hidden="true" className="absolute left-0 top-0 whitespace-nowrap">
          {scrambled}
        </span>
      )}
    </span>
  )
}

export default ScrambleText
