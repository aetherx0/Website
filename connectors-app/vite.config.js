import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/connectors/',
  build: {
    outDir: '../public/connectors',
    emptyOutDir: true,
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('/node_modules/')) return undefined
          if (id.includes('@dimforge/rapier3d-compat')) return 'rapier-engine'
          if (id.includes('@react-three/rapier')) return 'rapier-bindings'
          if (id.includes('@react-three/postprocessing') || id.includes('/postprocessing/')) return 'postprocessing'
          if (id.includes('@react-three/drei')) return 'drei'
          if (id.includes('@react-three/fiber')) return 'fiber'
          if (id.includes('/three-stdlib/')) return 'three-stdlib'
          if (id.includes('/node_modules/three/')) return 'three-core'
          if (id.includes('/node_modules/react/') || id.includes('/node_modules/react-dom/') || id.includes('/node_modules/scheduler/')) return 'react-vendor'
          if (id.includes('/maath/')) return 'maath'
          return undefined
        },
      },
    },
  },
})
