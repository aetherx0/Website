'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './ConnectorsFrame.module.css'

type SceneMessage = {
  type: 'connectors:frameloop'
  mode: 'always' | 'never'
}

export default function ConnectorsFrame() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLIFrameElement>(null)
  const visibleRef = useRef(false)
  const [visible, setVisible] = useState(false)

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
    <div ref={wrapperRef} className={styles.feature} aria-hidden="true">
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
