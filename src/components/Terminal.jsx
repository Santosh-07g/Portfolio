import React, { useEffect, useRef, useState } from 'react'
import { runCommand, COMMAND_NAMES } from './terminalCommands'

const INTRO_COMMAND = 'whoami'

// one-tap shortcuts so visitors who won't type can still use it
const SHORTCUTS = [
  { label: 'whoami', cmd: 'whoami' },
  { label: 'projects', cmd: 'projects' },
  { label: 'skills', cmd: 'skills' },
  { label: 'experience', cmd: 'experience' },
  { label: 'resume', cmd: 'resume' },
  { label: 'theme', cmd: 'theme' },
  { label: 'hire me', cmd: 'sudo hire santosh' },
]

const Prompt = () => (
  <span className="select-none whitespace-nowrap">
    <span className="text-purple">santosh@portfolio</span>
    <span className="text-gray-400">:</span>
    <span className="text-blue">~</span>
    {/* nbsp: a plain trailing space collapses when the prompt sits in the input row */}
    <span className="text-gray-400"> $&nbsp;</span>
  </span>
)

const Terminal = () => {
  // visitors who ask for less motion skip the typing intro
  const [reduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const [phase, setPhase] = useState(reduceMotion ? 'ready' : 'typing')
  const [typed, setTyped] = useState('')
  const [value, setValue] = useState('')
  const [entries, setEntries] = useState(() =>
    reduceMotion ? [{ id: 0, cmd: INTRO_COMMAND, output: runCommand(INTRO_COMMAND).output }] : []
  )

  const nextId = useRef(1)
  const inputRef = useRef(null)
  const scrollRef = useRef(null)
  const history = useRef([])
  const historyPos = useRef(-1)

  // type the first command out, then run it
  useEffect(() => {
    if (phase !== 'typing') return
    let i = 0
    let timer
    const tick = () => {
      i += 1
      setTyped(INTRO_COMMAND.slice(0, i))
      if (i < INTRO_COMMAND.length) {
        timer = setTimeout(tick, 110)
      } else {
        timer = setTimeout(() => {
          setEntries([{ id: 0, cmd: INTRO_COMMAND, output: runCommand(INTRO_COMMAND).output }])
          setTyped('')
          setPhase('ready')
        }, 450)
      }
    }
    timer = setTimeout(tick, 1300) // let the hero entrance finish first
    return () => clearTimeout(timer)
  }, [phase])

  // keep the newest output in view (scroll the terminal, never the page)
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [entries, typed])

  const submit = (raw) => {
    const line = raw.trim()
    if (!line) return
    history.current.push(line)
    historyPos.current = -1

    const result = runCommand(line)
    if (result.clear) {
      setEntries([])
      return
    }
    const id = nextId.current++
    setEntries((prev) => [...prev, { id, cmd: line, output: result.output }])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submit(value)
      setValue('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const past = history.current
      if (!past.length) return
      historyPos.current =
        historyPos.current === -1 ? past.length - 1 : Math.max(0, historyPos.current - 1)
      setValue(past[historyPos.current])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const past = history.current
      if (historyPos.current === -1) return
      if (historyPos.current >= past.length - 1) {
        historyPos.current = -1
        setValue('')
      } else {
        historyPos.current += 1
        setValue(past[historyPos.current])
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const matches = COMMAND_NAMES.filter((c) => c.startsWith(value.toLowerCase()))
      if (value && matches.length === 1) setValue(matches[0])
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setEntries([])
    }
  }

  const focusInput = () => {
    // don't steal focus while someone is selecting output to copy it
    if (window.getSelection()?.toString()) return
    inputRef.current?.focus({ preventScroll: true })
  }

  return (
    <div className="w-full max-w-xl md:max-w-none lg:max-w-xl rounded-xl border border-dark-400 bg-dark-100/95 shadow-2xl shadow-black/40 overflow-hidden font-mono">
      {/* window chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-dark-300 border-b border-dark-400">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="flex-1 pr-10 text-center text-xs text-gray-400 truncate">
          santosh@portfolio: ~
        </span>
      </div>

      {/* screen */}
      <div
        ref={scrollRef}
        role="log"
        aria-live="polite"
        onClick={focusInput}
        className="h-80 sm:h-96 overflow-y-auto p-4 text-[13px] leading-relaxed text-gray-300 cursor-text"
      >
        {entries.map((entry) => (
          <div key={entry.id} className="term-entry mb-3">
            <div className="break-words">
              <Prompt />
              <span className="text-white">{entry.cmd}</span>
            </div>
            {entry.output && <div className="mt-1">{entry.output}</div>}
          </div>
        ))}

        {phase === 'typing' ? (
          <div aria-hidden="true">
            <Prompt />
            <span className="text-white">{typed}</span>
            <span className="inline-block w-2 h-4 -mb-0.5 bg-purple animate-[cursor-blink_1s_steps(1)_infinite]" />
          </div>
        ) : (
          <label className="flex items-center">
            <Prompt />
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Terminal input. Type help to see commands."
              placeholder="type 'help'"
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              className="flex-1 min-w-0 pointer-coarse:py-3 bg-transparent text-white caret-purple outline-none placeholder:text-gray-400/50 text-base sm:text-[13px]"
            />
          </label>
        )}
      </div>

      {/* shortcuts */}
      <div className="flex flex-wrap gap-2 px-3 py-2.5 border-t border-dark-400 bg-dark-300/60">
        {SHORTCUTS.map(({ label, cmd }) => (
          <button
            key={label}
            type="button"
            disabled={phase !== 'ready'}
            onClick={() => submit(cmd)}
            className="px-2.5 py-1.5 pointer-coarse:min-h-11 pointer-coarse:px-4 rounded-md bg-dark-300 border border-dark-400 text-xs text-gray-300 transition hover:bg-purple hover:text-on-accent hover:border-purple disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Terminal
