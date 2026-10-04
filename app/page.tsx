'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type IconName =
  | 'html'
  | 'python'
  | 'c'
  | 'brain'
  | 'matlab'
  | 'git'
  | 'robot'
  | 'gear'
  | 'cad'
  | 'shape'
  | 'cube'
  | 'blender'
  | 'vercel'
  | 'arrow'
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'twitter'
  | 'discord'
  | 'spark'
  | 'play'

const skills: { name: string; icon: IconName; color: string }[] = [
  { name: 'HTML', icon: 'html', color: '#E34F26' },
  { name: 'Python', icon: 'python', color: '#3776AB' },
  { name: 'C Programming', icon: 'c', color: '#2563EB' },
  { name: 'Machine Learning', icon: 'brain', color: '#EC4899' },
  { name: 'MATLAB', icon: 'matlab', color: '#F97316' },
  { name: 'Git', icon: 'git', color: '#F05032' },
  { name: 'Robotics', icon: 'robot', color: '#0F766E' },
  { name: 'Mechanics', icon: 'gear', color: '#64748B' },
  { name: 'CAD/CAM', icon: 'cad', color: '#7C3AED' },
  { name: 'Onshape', icon: 'shape', color: '#E11D48' },
  { name: 'Fusion 360', icon: 'cube', color: '#F59E0B' },
  { name: 'Blender', icon: 'blender', color: '#EA580C' },
  { name: 'Maths', icon: 'vercel', color: '#111111' },
]

const projects = [
  {
    number: '01',
    category: 'Engineering & CAD',
    title: '3D Mechanical Design',
    description:
      'Self-directed study in Autodesk Fusion 360, and OnShape focusing on parametric modeling, physical constraints, and precision mechanical design.',
    tags: ['fusion 360', 'Parametric', 'Precision'],
    theme: 'project-blue',
  },
  {
    number: '02',
    category: 'Data Science & Machine Learning',
    title: 'Data Intelligence & Analytics',
    description:
      ' Focused on running data workflows and predictive modeling.',
    tags: ['Python', 'pytorch', 'Predictive'],
    theme: 'project-ink',
  },
]

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  if (name === 'html') return <svg {...common}><path d="m4 3 1.7 16L12 21l6.3-2L20 3H4Z" fill="currentColor" opacity=".14"/><path d="m8 8 .5 5.5L12 15l3.5-1.5L16 8H8Zm0 0h8M8.8 11h6.4" /></svg>
  if (name === 'python') return <svg {...common}><path d="M12 3c-4.2 0-4.5 1.8-4.5 3.1v2.2h5.1v1.1H5.3C3.7 9.4 3 11.1 3 13.1c0 2.1.8 3.7 2.3 3.7h2.2v-2.5c0-1.7 1.3-3 3-3h5.9c1.5 0 2.6-1.2 2.6-2.7V6.1C19 4.2 17.1 3 15 3h-3Z" fill="currentColor" opacity=".25"/><path d="M12 3c-4.2 0-4.5 1.8-4.5 3.1v2.2h5.1v1.1H5.3C3.7 9.4 3 11.1 3 13.1c0 2.1.8 3.7 2.3 3.7h2.2M12 21c4.2 0 4.5-1.8 4.5-3.1v-2.2h-5.1v-1.1h7.3c1.6 0 2.3-1.7 2.3-3.7 0-2.1-.8-3.7-2.3-3.7h-2.2M9 6h.01M15 18h.01" /></svg>
  if (name === 'c') return <svg {...common}><path d="M19.5 8.5a7 7 0 1 0 0 7"/><path d="m17 5.5 2.5 3-2.5 3M17 13.5l2.5 3-2.5 3" /></svg>
  if (name === 'brain') return <svg {...common}><path d="M9.5 4.5A3 3 0 0 0 5 7.1a3.3 3.3 0 0 0-1 5.9 3.3 3.3 0 0 0 2.2 5.1 3.1 3.1 0 0 0 5.8-.8V7.2a3 3 0 0 0-2.5-2.7Z"/><path d="M14.5 4.5A3 3 0 0 1 19 7.1a3.3 3.3 0 0 1 1 5.9 3.3 3.3 0 0 1-2.2 5.1 3.1 3.1 0 0 1-5.8-.8V7.2a3 3 0 0 1 2.5-2.7ZM8 9h1.5M8 13h1.5M15 9h1.5M15 13h1.5" /></svg>
  if (name === 'matlab') return <svg {...common}><path d="m3 18 5.4-12 3.4 8 2.9-4.5L21 18h-5l-1.8-3.5L12.3 18H8l-1.2-3L5.5 18H3Z" fill="currentColor" opacity=".2"/><path d="m3 18 5.4-12 3.4 8 2.9-4.5L21 18h-5l-1.8-3.5L12.3 18H8l-1.2-3L5.5 18H3Z" /></svg>
  if (name === 'git') return <svg {...common}><path d="m14.5 4.5 5 5-9.9 9.9a2 2 0 0 1-2.8 0l-2.2-2.2a2 2 0 0 1 0-2.8l9.9-9.9Z" fill="currentColor" opacity=".2"/><path d="m14.5 4.5 5 5-9.9 9.9a2 2 0 0 1-2.8 0l-2.2-2.2a2 2 0 0 1 0-2.8l9.9-9.9ZM7.5 14.5l2 2M12 7l5 5M8 8.5h.01M15.5 15.5h.01" /></svg>
  if (name === 'robot') return <svg {...common}><rect x="4" y="7" width="16" height="12" rx="3" fill="currentColor" opacity=".12"/><path d="M12 4v3M8.5 12h.01M15.5 12h.01M9 16h6M4 11H2m18 0h2M7 19h10" /></svg>
  if (name === 'gear') return <svg {...common}><path d="m12 2 1.2 2.2 2.4.7 2.2-1.1 1.5 1.5-1.1 2.2.7 2.4L21 11v2l-2.1 1.1-.7 2.4 1.1 2.2-1.5 1.5-2.2-1.1-2.4.7L12 22l-1.1-2.2-2.4-.7-2.2 1.1-1.5-1.5 1.1-2.2-.7-2.4L3 13v-2l2.2-1.1.7-2.4-1.1-2.2 1.5-1.5 2.2 1.1 2.4-.7L12 2Z" fill="currentColor" opacity=".13"/><circle cx="12" cy="12" r="3" /></svg>
  if (name === 'cad') return <svg {...common}><path d="m4 7 8-4 8 4-8 4-8-4Zm0 5 8 4 8-4M4 17l8 4 8-4" /><path d="M12 11v10" /></svg>
  if (name === 'shape') return <svg {...common}><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" fill="currentColor" opacity=".13"/><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3ZM4 7.5l8 4 8-4M12 11.5V21" /></svg>
  if (name === 'cube') return <svg {...common}><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" fill="currentColor" opacity=".13"/><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3ZM8 5.2l8 4.6v8.7M12 11v10" /></svg>
  if (name === 'blender') return <svg {...common}><path d="m4 4 14 2-3 4 5 2-2 8H7l2-6-5-2 2-8Z" fill="currentColor" opacity=".13"/><path d="m4 4 14 2-3 4 5 2-2 8H7l2-6-5-2 2-8ZM9 14h8M12 10l-2 4" /></svg>
  if (name === 'vercel') return <svg {...common}><path d="m12 4 8 14H4L12 4Z" fill="currentColor" opacity=".16"/><path d="m12 4 8 14H4L12 4Z" /></svg>
  if (name === 'arrow') return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  if (name === 'github') return <svg {...common}><path d="M15 22v-4a3.3 3.3 0 0 0-.9-2.5c3-.3 6.1-1.5 6.1-6.5a5 5 0 0 0-1.3-3.5 4.7 4.7 0 0 0-.1-3.5S17.6 1.7 15 3.4a13.4 13.4 0 0 0-6 0C6.4 1.7 5.2 2 5.2 2a4.7 4.7 0 0 0-.1 3.5 5 5 0 0 0-1.3 3.5c0 5 3.1 6.2 6.1 6.5A3.3 3.3 0 0 0 9 18v4M9 18c-4.5 2-5-2-7-2" /></svg>
  if (name === 'linkedin') return <svg {...common}><path d="M5 9v10M5 5v.01M9 19V9m0 3a4 4 0 0 1 8 0v7m0 0v-7" /></svg>
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" opacity=".12"/><path d="m3 7 9 6 9-6M3 19h18" /></svg>
  if (name === 'twitter') return <svg {...common}><path d="M4 4.5 10 12 4.5 19.5h3l4-5.3 4.5 5.3H20l-6.3-7.7L19.5 4.5h-3l-3.6 4.8-4-4.8H4Z" fill="currentColor" opacity=".18"/><path d="M4 4.5 10 12 4.5 19.5h3l4-5.3 4.5 5.3H20l-6.3-7.7L19.5 4.5h-3l-3.6 4.8-4-4.8H4Z" /></svg>
  if (name === 'discord') return <svg {...common}><path d="M7 7.5a14 14 0 0 1 5-1 14 14 0 0 1 5 1 16 16 0 0 1 2 9.5 14 14 0 0 1-4.5 2.2l-1.1-1.5M7 7.5a16 16 0 0 0-2 9.5 14 14 0 0 0 4.5 2.2l1.1-1.5M7 7.5l1 1.5M17 7.5l-1 1.5M8.5 15c1 .6 2 .9 3.5.9s2.5-.3 3.5-.9M9 12h.01M15 12h.01" /></svg>
  if (name === 'spark') return <svg {...common}><path d="m12 2 1.4 6.6L20 10l-6.6 1.4L12 18l-1.4-6.6L4 10l6.6-1.4L12 2ZM19 16l.5 2.5L22 19l-2.5.5L19 22l-.5-2.5L16 19l2.5-.5L19 16Z" fill="currentColor" opacity=".18" /></svg>
  return <svg {...common}><path d="m9 6 6 6-6 6" /></svg>
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function MagneticLink({ children, href, secondary = false }: { children: ReactNode; href: string; secondary?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [transform, setTransform] = useState('translate3d(0, 0, 0)')
  const reduce = useReducedMotion()
  return (
    <a
      ref={ref}
      href={href}
      className={`magnetic-link ${secondary ? 'magnetic-link-secondary' : ''}`}
      onPointerMove={(event) => {
        if (reduce || event.pointerType !== 'mouse' || !ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = (event.clientX - rect.left - rect.width / 2) * 0.14
        const y = (event.clientY - rect.top - rect.height / 2) * 0.14
        setTransform(`translate3d(${x}px, ${y}px, 0)`)
      }}
      onPointerLeave={() => setTransform('translate3d(0, 0, 0)')}
      style={{ transform }}
    >
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  )
}

function Cursor() {
  const reduce = useReducedMotion()
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (reduce || typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return
    const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY })
    const over = (event: MouseEvent) => setActive(Boolean((event.target as HTMLElement).closest('a, button, .skill-badge, .project-card')))
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [reduce])

  if (reduce) return null
  return (
    <>
      <motion.div className={`cursor-ring ${active ? 'cursor-ring-active' : ''}`} animate={{ x: position.x - 18, y: position.y - 18 }} transition={{ type: 'spring', stiffness: 500, damping: 35 }} />
      <motion.div className="cursor-dot" animate={{ x: position.x - 3, y: position.y - 3 }} transition={{ type: 'spring', stiffness: 900, damping: 45 }} />
    </>
  )
}

function AudioControl() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = true
    void audio.play().catch(() => undefined)
  }, [])

  const toggleAudio = () => {
    const audio = audioRef.current
    if (!audio) return
    const nextMuted = !muted
    audio.muted = nextMuted
    setMuted(nextMuted)
    if (!nextMuted) void audio.play().catch(() => undefined)
  }

  return (
    <div className="audio-control">
      <audio ref={audioRef} autoPlay loop muted preload="auto">
        <source src="/audio/ambient-loop.wav" type="audio/wav" />
      </audio>
      <button className="audio-toggle" type="button" onClick={toggleAudio} aria-label={muted ? 'Unmute background audio' : 'Mute background audio'} aria-pressed={!muted}>
        <span className="audio-icon" aria-hidden="true">{muted ? '◌' : ')))'}</span>
        <span>{muted ? 'Sound off' : 'Sound on'}</span>
      </button>
    </div>
  )
}

function ThemeControl() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('ameya-theme')
    const isDark = savedTheme === 'dark'
    setDarkMode(isDark)
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
  }, [])

  const toggleTheme = () => {
    const nextDarkMode = !darkMode
    setDarkMode(nextDarkMode)
    document.documentElement.dataset.theme = nextDarkMode ? 'dark' : 'light'
    window.localStorage.setItem('ameya-theme', nextDarkMode ? 'dark' : 'light')
  }

  return (
    <div className="theme-control">
      <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={darkMode}>
        <span className="theme-icon" aria-hidden="true">{darkMode ? '☀' : '☾'}</span>
        <span>{darkMode ? 'Light mode' : 'Dark mode'}</span>
      </button>
    </div>
  )
}

function ScrollUnderlineHeading({ text }: { text: string }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const path = pathRef.current
    const section = sectionRef.current
    if (!path || !section) return
    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${reduce ? 0 : length}`
    if (reduce) return

    let frame = 0
    const update = () => {
      const bounds = section.getBoundingClientRect()
      const start = window.innerHeight * 0.78
      const end = -Math.max(bounds.height * 0.35, 260)
      const progress = Math.min(1, Math.max(0, (start - bounds.top) / (start - end)))
      path.style.strokeDashoffset = `${length * (1 - progress)}`
      frame = 0
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [reduce])

  return (
    <div ref={sectionRef} className="hero-name-lockup">
      <MagneticHeadline text={text} />
      <svg className="hero-name-underline" viewBox="0 0 920 300" role="img" aria-label="Decorative blue growing loop">
        <path ref={pathRef} d="M28 42 C120 55 164 92 175 154 C188 230 295 267 444 252 C600 236 764 226 846 159 C904 112 874 39 784 35 C673 30 578 92 595 170 C613 249 756 257 858 173" />
      </svg>
    </div>
  )
}

function MagneticHeadline({ text }: { text: string }) {
  const reduce = useReducedMotion()
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [offsets, setOffsets] = useState<Record<number, { x: number; y: number }>>({})
  const previousOffsets = useRef<Record<number, { x: number; y: number }>>({})

  useEffect(() => {
    if (reduce || typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return
    let frame = 0
    const pointer = { x: -1000, y: -1000 }
    const move = (event: MouseEvent) => { pointer.x = event.clientX; pointer.y = event.clientY }
    const tick = () => {
      const next: Record<number, { x: number; y: number }> = {}
      letterRefs.current.forEach((letter, index) => {
        if (!letter || letter.textContent === ' ') return
        const bounds = letter.getBoundingClientRect()
        const centerX = bounds.left + bounds.width / 2
        const centerY = bounds.top + bounds.height / 2
        const dx = centerX - pointer.x
        const dy = centerY - pointer.y
        const distance = Math.hypot(dx, dy)
        const radius = 132
        if (distance < radius) {
          const force = Math.pow(1 - distance / radius, 2)
          next[index] = { x: (dx / Math.max(distance, 1)) * force * 22, y: (dy / Math.max(distance, 1)) * force * 22 }
        } else next[index] = { x: 0, y: 0 }
      })
      const changed = Object.keys(next).some((key) => next[Number(key)].x !== previousOffsets.current[Number(key)]?.x || next[Number(key)].y !== previousOffsets.current[Number(key)]?.y) || Object.keys(previousOffsets.current).length !== Object.keys(next).length
      if (changed) {
        previousOffsets.current = next
        setOffsets(next)
      }
      frame = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', move, { passive: true })
    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', move)
    }
  }, [reduce, text])

  let letterIndex = 0
  return (
    <span className="hero-name" aria-label={text}>
      {text.split(' ').map((word, wordIndex) => {
        const letters = word.split('').map((character) => {
          const index = letterIndex
          letterIndex += 1
          const offset = offsets[index] ?? { x: 0, y: 0 }
          return <motion.span key={`${character}-${index}`} ref={(element) => { letterRefs.current[index] = element }} className="hero-name-letter" animate={reduce ? undefined : { x: offset.x, y: offset.y }} transition={{ type: 'spring', stiffness: 420, damping: 24, mass: .45 }}>{character}</motion.span>
        })
        letterIndex += 1
        return <span className="hero-name-word" key={`${word}-${wordIndex}`}>{letters}{wordIndex < text.split(' ').length - 1 ? '\u00a0' : null}</span>
      })}
    </span>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Reveal delay={index * 0.1} className="project-card-wrap">
      <article className="project-card" onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
        <div className={`project-media ${project.theme}`}>
          <div className="media-grid" aria-hidden="true" />
          <div className="media-orbit media-orbit-one" aria-hidden="true" />
          <div className="media-orbit media-orbit-two" aria-hidden="true" />
          <video className={`project-video ${hovered ? 'project-video-visible' : ''}`} autoPlay muted loop playsInline preload="metadata" aria-label={`${project.title} visual preview`}>
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>
          <div className="project-media-overlay" aria-hidden="true" />
          <div className="media-caption"><Icon name="play" size={15} /> hover to explore</div>
          <span className="project-number">{project.number}</span>
        </div>
        <div className="project-card-body">
          <div className="project-meta"><span>{project.category}</span><span>Selected work</span></div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="project-actions">
            <a href="#contact" className="text-link">View Details <Icon name="arrow" size={16} /></a>
            <a href="https://github.com/aetherx0" className="text-link text-link-muted" target="_blank" rel="noreferrer">GitHub <Icon name="arrow" size={16} /></a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Home() {
  const reduce = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)
  const headline = 'Mechanical Engineering & Data Science'

  return (
    <main className="site-shell">
      <Cursor />
      <AudioControl />
      <ThemeControl />
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand-lockup" href="#home" aria-label="Ameya Raut home">
          <span className="brand-mark"><i /></span>
          <span className="brand-name">Ameya Raut</span>
        </a>
        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <a href="mailto:ameyaraut2708@gmail.com" className="nav-availability"><span className="status-dot" /> Available for a conversation</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><span /><span /></button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-visual" aria-hidden="true">
          <video className="hero-video" autoPlay muted loop playsInline poster="/hero-poster.svg">
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-fallback" />
          <div className="hero-wash" />
          <div className="hero-scanline" />
        </div>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-kicker"><span className="eyebrow-line" /> Mechanical systems / data intelligence</div>
          <h1><ScrollUnderlineHeading text="Ameya Raut" /><span className="hero-headline">{headline.split(' ').map((word, wordIndex) => <span className="headline-word" key={word}>{word.split('').map((character, charIndex) => <motion.span key={`${word}-${charIndex}`} initial={reduce ? false : { opacity: 0, y: 18, filter: 'blur(6px)' }} animate={reduce ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.22 + (wordIndex * 6 + charIndex) * 0.045, duration: 0.68, ease: [0.22, 1, 0.36, 1] }}>{character}</motion.span>)}{wordIndex < headline.split(' ').length - 1 ? <span className="headline-space">{'\u00a0'}</span> : null}</span>)}</span></h1>
          <p className="hero-subtext">Building at the intersection of physical systems and data-driven intelligence.</p>
          <div className="hero-actions"><MagneticLink href="#projects">View My Work</MagneticLink><MagneticLink href="#contact" secondary>Let&apos;s Talk</MagneticLink></div>
        </div>
        <div className="hero-bottomline"><span>01 / 04</span><span>Scroll to explore <span className="scroll-arrow">↘</span></span><span>Based in India · 2026</span></div>
        <div className="hero-side-note">01<br /><span>ENGINEER<br />IN MOTION</span></div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="section-intro"><span className="section-index">01</span><div><p className="eyebrow">About me</p><p className="section-note">A dual-track practice</p></div></div>
        <div className="about-layout">
          <Reveal className="about-statement"><p className="display-statement">I make complex systems <em>legible.</em></p><div className="blue-rule" /></Reveal>
          <Reveal delay={0.1} className="about-copy"><p>I am Ameya Raut, an engineering student bridging the gap between mechanical systems and software. I am pursuing Mechanical Engineering alongside a BS in Data Science and Applications. I enjoy taking on messy technical problems—whether that is 3D CAD modeling, writing machine learning scripts, or optimizing server networks.</p><a className="inline-link" href="#contact">Let&apos;s connect <Icon name="arrow" size={16} /></a></Reveal>
        </div>
        <div className="metrics-row">
          <Reveal className="metric"><span className="metric-value">02</span><span className="metric-label">Disciplines in parallel</span></Reveal>
          <Reveal delay={0.08} className="metric"><span className="metric-value">13</span><span className="metric-label">Tools in orbit</span></Reveal>
          <Reveal delay={0.16} className="metric metric-feature"><Icon name="spark" size={21} /><span className="metric-label">Dual Focus: Hardware &amp; Analytics</span></Reveal>
        </div>
      </section>

      <section className="skills-section section-wrap" id="skills">
        <div className="section-intro"><span className="section-index">02</span><div><p className="eyebrow">Capabilities</p><p className="section-note">Tools for making</p></div></div>
        <div className="skills-header"><h2>Skills<span className="title-dot">.</span></h2><p>From a constraint in a sketch to a pattern in a dataset, I like tools that turn the abstract into something you can see, test, and improve.</p></div>
        <div className="skills-grid">{skills.map((skill, index) => <Reveal key={skill.name} delay={Math.min(index * 0.035, 0.32)}><div className="skill-badge"><span className="skill-icon" style={{ color: skill.color }}><Icon name={skill.icon} size={20} /></span><span>{skill.name}</span></div></Reveal>)}</div>
      </section>

      <section className="projects-section section-wrap" id="projects">
        <div className="section-intro"><span className="section-index">03</span><div><p className="eyebrow">Selected projects</p><p className="section-note">Proof of practice</p></div></div>
        <div className="projects-heading"><h2>Work with <em>weight.</em></h2><span className="project-count">02 / 02</span></div>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-grid" aria-hidden="true" />
        <div className="contact-inner section-wrap">
          <div className="section-intro contact-intro"><span className="section-index">04</span><div><p className="eyebrow">Contact</p><p className="section-note">Open channel</p></div></div>
          <Reveal className="contact-content"><p className="eyebrow accent-eyebrow">Have a good problem?</p><h2>Let&apos;s build something <em>complex</em> together.</h2><a className="contact-email" href="mailto:ameyaraut2708@gmail.com">ameyaraut2708@gmail.com <Icon name="arrow" size={24} /></a></Reveal>
          <div className="social-strip">
            <span className="social-label">Find me in the field</span>
            <div className="social-links">
              <a className="social-bubble" href="https://github.com/aetherx0" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={19} /><span>GitHub</span></a>
              <a className="social-bubble" href="https://www.linkedin.com/in/ameyaraut/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={19} /><span>LinkedIn</span></a>
              <a className="social-bubble" href="mailto:ameyaraut2708@gmail.com" aria-label="Email"><Icon name="mail" size={19} /><span>Email</span></a>
              <a className="social-bubble" href="https://x.com/ameyaraut" target="_blank" rel="noreferrer" aria-label="Twitter"><Icon name="twitter" size={19} /><span>Twitter</span></a>
              <a className="social-bubble" href="https://discord.com/users/973825553540984902" target="_blank" rel="noreferrer" aria-label="Discord"><Icon name="discord" size={19} /><span>Discord</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer section-wrap"><a className="brand-lockup footer-brand" href="#home"><span className="brand-mark"><i /></span><span className="brand-name">Ameya Raut</span></a><span>© 2026 — Built with curiosity</span><div className="footer-links"><a href="https://github.com/aetherx0" target="_blank" rel="noreferrer">View My Work</a><a href="#contact">Download Resume</a></div></footer>
    </main>
  )
}
