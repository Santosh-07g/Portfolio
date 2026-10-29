import { profile, projects, workData, skills } from '../data/portfolio'
import { THEMES, getTheme, setTheme } from '../theme'
import { A, Accent, Muted, Ok, Err, Block } from './terminalUi'

/* ---- helpers --------------------------------------------------------------- */

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const scrollToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })

const downloadResume = () => {
  const a = document.createElement('a')
  a.href = profile.resume.href
  a.download = profile.resume.filename
  document.body.appendChild(a)
  a.click()
  a.remove()
}

/* ---- command outputs ---------------------------------------------------- */

const whoami = () => (
  <div className="flex items-start gap-4">
    <img
      src={profile.avatar}
      alt={profile.name}
      className="w-20 h-20 shrink-0 rounded-lg object-cover border border-purple/50"
    />
    <div>
      <div className="text-white font-bold">{profile.name}</div>
      <div>
        <Accent>{profile.role}</Accent> <Muted>@ {profile.company}</Muted>
      </div>
      <div><Muted>{profile.location}</Muted></div>
      <div className="mt-1">Python · Django · React · LLM apps</div>
      <div><Muted>500+ DSA problems on LeetCode &amp; HackerRank</Muted></div>
    </div>
  </div>
)

const about = () => (
  <Block>
    <Accent># About</Accent>
    {'\n'}Software engineer at {profile.company}, building full-stack web apps with Python,
    Django and React, and LLM-powered tools on the side. BCA graduate who learns by shipping.
  </Block>
)

const help = () => (
  <div className="grid grid-cols-[max-content_1fr] gap-x-4">
    {[
      ['help', 'list all commands'],
      ['whoami', 'a quick intro'],
      ['skills', 'my tech stack'],
      ['projects', 'stuff I have shipped'],
      ['experience', 'git log of my career'],
      ['resume', 'download my resume'],
      ['contact', 'ways to reach me'],
      ['theme [name]', 'switch the color theme'],
      ['ls / cat <file>', 'poke around the files'],
      ['clear', 'clean the screen'],
    ].map(([name, desc]) => (
      <div key={name} className="contents">
        <Accent>{name}</Accent>
        <Muted>{desc}</Muted>
      </div>
    ))}
    <div className="col-span-2 mt-1">
      <Muted>psst… try </Muted>
      <span className="text-white">sudo hire santosh</span>
    </div>
  </div>
)

const skillsOutput = () => (
  <div className="space-y-1.5">
    {skills.map((s) => (
      <div key={s.title}>
        <Accent>{s.title.toLowerCase()}</Accent>
        <div className="break-words">
          <Muted>└─ </Muted>
          {s.tags.join(' · ')}
        </div>
      </div>
    ))}
  </div>
)

const projectsOutput = () => (
  <div className="space-y-3">
    {projects.map((p, i) => (
      <div key={p.title}>
        <div>
          <Muted>{String(i + 1).padStart(2, '0')} </Muted>
          <span className="text-white font-bold">{p.title.trim()}</span>
        </div>
        <div className="pl-6 break-words">
          <Muted>{p.tech.join(' · ')}</Muted>
        </div>
        <div className="pl-6 flex gap-4">
          {p.demoLink && <A href={p.demoLink}>demo ↗</A>}
          {p.codeLink && <A href={p.codeLink}>code ↗</A>}
        </div>
      </div>
    ))}
  </div>
)

// styled like `git log` so it reads as a commit history
const experienceOutput = () => (
  <div className="space-y-3">
    {workData.map((w, i) => (
      <div key={w.company}>
        <div>
          <span className="text-yellow-400">commit </span>
          {i === 0 && <Accent>(HEAD → main) </Accent>}
          <span className="text-white font-bold">{w.role}</span>
        </div>
        <div><Muted>at:   </Muted>{w.company}</div>
        <div><Muted>when: </Muted>{w.duration}</div>
        <Block>
          <Muted>{'\n'}    {w.description}</Muted>
        </Block>
      </div>
    ))}
  </div>
)

const contactOutput = () => (
  <div>
    <div><Muted>email    </Muted><A href={`mailto:${profile.email}`}>{profile.email}</A></div>
    <div><Muted>phone    </Muted><A href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</A></div>
    <div><Muted>github   </Muted><A href={profile.github}>{profile.github.replace('https://', '')}</A></div>
    <div><Muted>linkedin </Muted><A href={profile.linkedin}>{profile.linkedin.replace('https://www.', '')}</A></div>
    <div><Muted>based in </Muted>{profile.location}</div>
  </div>
)

const resumeOutput = () => {
  downloadResume()
  return (
    <div>
      <Ok>✔ </Ok>downloading {profile.resume.filename}
      <div>
        <Muted>didn't start? </Muted>
        <A href={profile.resume.href}>open the PDF ↗</A>
      </div>
    </div>
  )
}

const hireOutput = () => {
  // let the user read the output before the page scrolls away
  setTimeout(() => scrollToSection('contact'), 900)
  return (
    <div>
      <div><Muted>[sudo] password for recruiter: </Muted>********</div>
      <div><Ok>✔ </Ok>permission granted. smart move.</div>
      <div><Muted>opening contact form…</Muted></div>
    </div>
  )
}

const themeOutput = (arg) => {
  const current = getTheme()
  if (!arg) {
    return (
      <div>
        {THEMES.map((t) => (
          <div key={t.id}>
            {t.id === current ? <Ok>● </Ok> : <Muted>○ </Muted>}
            {t.id}
          </div>
        ))}
        <div className="mt-1"><Muted>usage: theme &lt;name&gt;</Muted></div>
      </div>
    )
  }
  const norm = (s) => s.toLowerCase().replace(/[\s_-]/g, '')
  const matches = THEMES.filter((t) => norm(t.id).startsWith(norm(arg)))
  if (matches.length !== 1) {
    return <Err>theme not found: {arg}. run <span className="text-white">theme</span> to list them.</Err>
  }
  setTheme(matches[0].id)
  return <div><Ok>✔ </Ok>theme → {matches[0].name}</div>
}

/* ---- virtual file system (ls / cat) ------------------------------------- */

const skillsJson = () => (
  <Block>
    {'{\n'}
    {skills.map((s, i) => (
      `  "${s.title.toLowerCase().replace(/\s+/g, '_')}": [${s.tags.map((t) => `"${t}"`).join(', ')}]${i < skills.length - 1 ? ',' : ''}\n`
    ))}
    {'}'}
  </Block>
)

const contactSh = () => (
  <Block>
    <Muted>#!/bin/bash{'\n'}# reach out, I reply fast{'\n'}</Muted>
    export EMAIL="{profile.email}"{'\n'}
    export PHONE="{profile.phone}"{'\n'}
    export LOCATION="{profile.location}"
  </Block>
)

const FILES = {
  'about.md': about,
  'skills.json': skillsJson,
  'experience.log': experienceOutput,
  'contact.sh': contactSh,
}

/* ---- command table ------------------------------------------------------- */

const COMMANDS = {
  help,
  whoami,
  skills: skillsOutput,
  projects: projectsOutput,
  experience: experienceOutput,
  resume: resumeOutput,
  contact: contactOutput,
  theme: (args) => themeOutput(args[0]),
  ls: () => (
    <div className="flex flex-wrap gap-x-5">
      {Object.keys(FILES).map((f) => (
        <span key={f} className={f.endsWith('.md') ? 'text-blue' : ''}>{f}</span>
      ))}
    </div>
  ),
  cat: (args) => {
    if (!args[0]) return <Err>cat: missing file. try <span className="text-white">ls</span></Err>
    const file = FILES[args[0]]
    return file ? file() : <Err>cat: {args[0]}: No such file or directory</Err>
  },
  echo: (args) => <Block>{args.join(' ')}</Block>,
  hire: () => (
    <Err>permission denied. try <span className="text-white">sudo hire santosh</span></Err>
  ),
  rm: () => <Err>rm: permission denied. nice try though.</Err>,
  cd: () => <Muted>you're already home.</Muted>,
  exit: () => <Muted>there is no escape. try <span className="text-white">clear</span> instead.</Muted>,
}

// used for tab completion
export const COMMAND_NAMES = [...Object.keys(COMMANDS), 'clear', 'sudo', 'git']

/**
 * Runs one line typed into the terminal.
 * Returns { output } to print, or { clear: true } to wipe the screen.
 */
export function runCommand(raw) {
  const input = raw.trim()
  if (!input) return { output: null }

  const [name, ...args] = input.split(/\s+/)
  const cmd = name.toLowerCase()

  if (cmd === 'clear') return { clear: true }

  if (cmd === 'sudo') {
    return args.join(' ').toLowerCase() === 'hire santosh'
      ? { output: hireOutput() }
      : { output: <Err>santosh is not in the sudoers file. this incident will be reported.</Err> }
  }

  if (cmd === 'git') {
    return args[0] === 'log'
      ? { output: experienceOutput() }
      : { output: <Err>fatal: not a git repository (or any of the parent directories)</Err> }
  }

  if (Object.hasOwn(COMMANDS, cmd)) {
    return { output: COMMANDS[cmd](args) }
  }

  return {
    output: (
      <Err>
        command not found: {name}. type <span className="text-white">help</span>
      </Err>
    ),
  }
}
