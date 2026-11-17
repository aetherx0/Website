import { Component, useEffect, useState } from 'react'
import { ConnectorsScene } from './ConnectorsScene'

class SceneErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('Connectors scene failed to initialize:', error)
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

export default function App() {
  const [frameLoop, setFrameLoop] = useState('never')

  useEffect(() => {
    let readyFrame = 0
    const handleMessage = (event) => {
      if (event.source !== window.parent || event.origin !== window.location.origin) return
      const message = event.data
      if (
        message?.type === 'connectors:frameloop' &&
        (message.mode === 'always' || message.mode === 'never')
      ) {
        setFrameLoop(message.mode)
      }
    }

    window.addEventListener('message', handleMessage)
    readyFrame = window.requestAnimationFrame(() => {
      readyFrame = window.requestAnimationFrame(() => {
        window.parent.postMessage({ type: 'connectors:ready' }, window.location.origin)
      })
    })
    return () => {
      window.cancelAnimationFrame(readyFrame)
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', background: '#141622' }}>
      <SceneErrorBoundary>
        <ConnectorsScene frameloop={frameLoop} />
      </SceneErrorBoundary>
    </div>
  )
}
