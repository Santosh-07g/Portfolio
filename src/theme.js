import { useSyncExternalStore } from 'react'

// Colors live in index.css under [data-theme='<id>']; this file only switches
// the attribute, remembers the choice and lets components subscribe to it.

export const THEMES = [
  { id: 'dracula', name: 'Dracula' },
  { id: 'tokyo-night', name: 'Tokyo Night' },
  { id: 'catppuccin', name: 'Catppuccin' },
  { id: 'gruvbox', name: 'Gruvbox' },
]

export const DEFAULT_THEME = THEMES[0].id

const STORAGE_KEY = 'theme'
const EVENT = 'themechange'

export const getTheme = () => {
  const id = document.documentElement.dataset.theme
  return THEMES.some((t) => t.id === id) ? id : DEFAULT_THEME
}

let fadeTimer

export const setTheme = (id) => {
  if (!THEMES.some((t) => t.id === id)) return

  // cross-fade the colors for a moment (see .theme-fade in index.css)
  const root = document.documentElement
  root.classList.add('theme-fade')
  clearTimeout(fadeTimer)
  fadeTimer = setTimeout(() => root.classList.remove('theme-fade'), 500)

  document.documentElement.dataset.theme = id
  try {
    localStorage.setItem(STORAGE_KEY, id)
  } catch {
    // storage blocked (private mode etc.) — the theme just won't persist
  }
  // keep the mobile browser chrome in step with the page background
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--c-bg').trim()
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg)
  window.dispatchEvent(new Event(EVENT))
}

const subscribe = (callback) => {
  window.addEventListener(EVENT, callback)
  return () => window.removeEventListener(EVENT, callback)
}

export const useTheme = () => useSyncExternalStore(subscribe, getTheme, () => DEFAULT_THEME)
