'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './ConnectorsFrame.module.css'

type SceneMessage = {
  type: 'connectors:frameloop'
  mode: 'always' | 'never'
}

type Placement = {
  left: number
  top: number
  width: number
  height: number
}

export default function ConnectorsFrame() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLIFrameElement>(null)
  const visibleRef = useRef(false)
  const [visible, setVisible] = useState(false)
  const [placement, setPlacement] = useState<Placement | null>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const hero = wrapper?.closest<HTMLElement>('.hero')
    if (!wrapper || !hero) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationFrame = 0
    const measurePlacement = () => {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = window.requestAnimationFrame(() => {
        if (window.innerWidth <= 1199 || reducedMotion.matches) {
          setPlacement(null)
          return
        }

        const kicker = hero.querySelector<HTMLElement>('.hero-kicker')
        const heading = hero.querySelector<HTMLElement>('.hero h1')
        const buttons = hero.querySelector<HTMLElement>('.hero-actions')
        const sideNote = hero.querySelector<HTMLElement>('.hero-side-note')
        if (!kicker || !heading || !buttons || !sideNote) {
          setPlacement(null)
          return
        }

        const heroRect = hero.getBoundingClientRect()
        const kickerRect = kicker.getBoundingClientRect()
        const buttonsRect = buttons.getBoundingClientRect()
        const noteRect = sideNote.getBoundingClientRect()
        const headingLetters = hero.querySelectorAll<HTMLElement>(
          '.hero-name-letter, .hero-headline .headline-word > span',
        )
        const textRight = Math.max(
          0,
          ...Array.from(headingLetters, (letter) => letter.getBoundingClientRect().right),
        )
        const left = textRight - heroRect.left + 48
        const right = noteRect.left - heroRect.left - 24
        const availableWidth = right - left
        const width = Math.min(heroRect.width * 0.35, availableWidth)
        const minWidth = heroRect.width * 0.15
        const top = kickerRect.top - heroRect.top
        const height = buttonsRect.bottom - kickerRect.top

        if (
          headingLetters.length === 0 ||
          !Number.isFinite(width) ||
          width < minWidth ||
          height <= 0
        ) {
          setPlacement(null)
          return
        }

        setPlacement({
          left: Math.round(left * 100) / 100,
          top: Math.round(top * 100) / 100,
          width: Math.round(width * 100) / 100,
          height: Math.round(height * 100) / 100,
        })
      })
    }

    const resizeObserver = new ResizeObserver(measurePlacement)
    const observedElements = [
      hero,
      hero.querySelector('.hero-kicker'),
      hero.querySelector('.hero h1'),
      hero.querySelector('.hero-actions'),
      hero.querySelector('.hero-side-note'),
    ].filter((element): element is Element => Boolean(element))
    observedElements.forEach((element) => resizeObserver.observe(element))

    measurePlacement()
    window.addEventListener('resize', measurePlacement)
    reducedMotion.addEventListener('change', measurePlacement)
    void document.fonts?.ready.then(measurePlacement)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
      window.removeEventListener('resize', measurePlacement)
      reducedMotion.removeEventListener('change', measurePlacement)
    }
  }, [])

  useEffect(() => {
    const wrapper = wrapperRef.current
    const frame = frameRef.current
    if (!wrapper || !frame) return

    const sendFrameLoop = (isVisible: boolean) => {
      const message: SceneMessage = {
        type: 'connectors:frameloop',
        mode: isVisible ? 'always' : 'never',
      }
      frame.contentWindow?.postMessage(message, window.location.origin)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting && entry.intersectionRatio > 0
        visibleRef.current = isVisible
        setVisible(isVisible)
        sendFrameLoop(isVisible)
      },
      { threshold: 0.01 },
    )

    const handleReady = (event: MessageEvent) => {
      if (
        event.source !== frame.contentWindow ||
        event.origin !== window.location.origin ||
        event.data?.type !== 'connectors:ready'
      ) return
      sendFrameLoop(visibleRef.current)
    }

    observer.observe(wrapper)
    window.addEventListener('message', handleReady)

    return () => {
      observer.disconnect()
      window.removeEventListener('message', handleReady)
      sendFrameLoop(false)
    }
  }, [])

  const handleFrameLoad = () => {
    const message: SceneMessage = {
      type: 'connectors:frameloop',
      mode: visibleRef.current ? 'always' : 'never',
    }
    frameRef.current?.contentWindow?.postMessage(message, window.location.origin)
  }

  return (
    <div
      ref={wrapperRef}
      className={styles.feature}
      data-visible={placement ? 'true' : 'false'}
      style={
        placement
          ? {
              left: placement.left,
              top: placement.top,
              width: placement.width,
              height: placement.height,
            }
          : undefined
      }
      aria-hidden="true"
    >
      <iframe
        ref={frameRef}
        className={styles.frame}
        src="/connectors/index.html"
        title="Interactive 3D connectors scene"
        aria-hidden="true"
        tabIndex={-1}
        loading="lazy"
        onLoad={handleFrameLoad}
      />
    </div>
  )
}
