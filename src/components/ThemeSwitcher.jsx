import React, { useEffect, useRef, useState } from 'react'
import { FaPalette, FaCheck } from 'react-icons/fa'
import { THEMES, setTheme, useTheme } from '../theme'

// A swatch reads its colors from the CSS variables of its own data-theme,
// so the palettes are only defined once (in index.css).
const Swatch = ({ id }) => (
  <span
    data-theme={id}
    className="flex shrink-0 overflow-hidden rounded-full border border-white/20"
  >
    <span className="w-4 h-4" style={{ background: 'var(--c-bg)' }} />
    <span className="w-4 h-4" style={{ background: 'var(--c-accent)' }} />
    <span className="w-4 h-4" style={{ background: 'var(--c-accent-2)' }} />
  </span>
)

// placement="floating": fixed bottom-right button, large screens only.
// placement="navbar":   sits in the navbar below lg, so on phones and tablets it
//                       never covers page content.
const ThemeSwitcher = ({ placement = 'floating' }) => {
  const inNavbar = placement === 'navbar'
  const current = useTheme()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  // close on outside click or Escape
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    // floating: z-40 keeps it under the navbar (z-50)
    <div
      ref={rootRef}
      className={inNavbar ? 'relative lg:hidden' : 'fixed bottom-4 right-4 z-40 hidden lg:block'}
    >
      {open && (
        <div
          role="radiogroup"
          aria-label="Color theme"
          className={`absolute right-0 w-56 rounded-xl border border-dark-400 bg-dark-300 p-2 shadow-2xl shadow-black/40 ${
            inNavbar ? 'top-full mt-3' : 'bottom-14'
          }`}
        >
          <p className="px-2 pb-1 pt-0.5 font-mono text-xs text-gray-400">$ theme --set</p>
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={t.id === current}
              onClick={() => {
                setTheme(t.id)
                setOpen(false)
              }}
              className="flex w-full items-center gap-3 rounded-lg px-2 py-3 text-left text-sm text-white transition hover:bg-dark-400 cursor-pointer"
            >
              <Swatch id={t.id} />
              <span className="flex-1">{t.name}</span>
              {t.id === current && <FaCheck className="text-purple" />}
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change color theme"
        aria-expanded={open}
        aria-haspopup="true"
        className={
          inNavbar
            ? 'flex h-11 w-11 items-center justify-center rounded-full text-xl text-purple transition active:bg-purple/20 cursor-pointer'
            : 'flex h-12 w-12 items-center justify-center rounded-full border border-dark-400 bg-dark-300 text-xl text-purple shadow-lg shadow-black/30 transition hover:scale-105 hover:bg-purple hover:text-on-accent cursor-pointer'
        }
      >
        <FaPalette />
      </button>
    </div>
  )
}

export default ThemeSwitcher
