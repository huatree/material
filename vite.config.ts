import { fileURLToPath, URL } from 'node:url'

import { visualizer } from 'rollup-plugin-visualizer'
import veauryVitePlugins from 'veaury/vite/index.js'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    visualizer({
      filename: './bundle-analysis.html'
    }),
    veauryVitePlugins({
      type: 'vue'
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-common-lib': ['vue', 'vue-router', 'pinia'],
          'react-common-lib': ['react', 'react-dom', '@glideapps/glide-data-grid']
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
