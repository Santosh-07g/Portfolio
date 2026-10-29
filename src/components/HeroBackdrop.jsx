import React from 'react'

// c picks the accent color (1 = main, 2 = pink-ish, 3 = blue-ish).
// Fixed values, not Math.random(), so the layout is identical on every render.
const GLYPHS = [
  { t: '{ }', x: 5, size: 30, dur: 26, delay: 4, c: 1 },
  { t: '</>', x: 14, size: 24, dur: 32, delay: 18, c: 3 },
  { t: '=>', x: 23, size: 28, dur: 24, delay: 9, c: 2 },
  { t: 'const', x: 31, size: 18, dur: 30, delay: 22, c: 1 },
  { t: '[ ]', x: 40, size: 26, dur: 28, delay: 2, c: 3 },
  { t: '&&', x: 48, size: 22, dur: 34, delay: 14, c: 2 },
  { t: 'git', x: 56, size: 20, dur: 27, delay: 25, c: 1 },
  { t: '0x1F', x: 64, size: 18, dur: 31, delay: 7, c: 3 },
  { t: '()', x: 72, size: 28, dur: 25, delay: 20, c: 2 },
  { t: 'async', x: 80, size: 18, dur: 33, delay: 11, c: 1 },
  { t: '#!', x: 88, size: 24, dur: 29, delay: 3, c: 3 },
  { t: ';', x: 94, size: 32, dur: 23, delay: 16, c: 2 },
  { t: 'SELECT', x: 10, size: 16, dur: 35, delay: 28, c: 3 },
  { t: 'def', x: 60, size: 18, dur: 30, delay: 30, c: 2 },
]

// Decorative layer behind the hero: code tokens drifting upward, plus a soft
// glow under the mouse (the parent sets --mx/--my with trackPointer).
const HeroBackdrop = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="hero-spot absolute inset-0" />
    {GLYPHS.map((g) => (
      <span
        key={g.t}
        className="code-glyph"
        style={{
          left: `${g.x}%`,
          fontSize: g.size,
          color: g.c === 1 ? 'var(--c-accent)' : g.c === 2 ? 'var(--c-accent-2)' : 'var(--c-accent-3)',
          animationDuration: `${g.dur}s`,
          animationDelay: `-${g.delay}s`,
        }}
      >
        {g.t}
      </span>
    ))}
  </div>
)

export default HeroBackdrop
