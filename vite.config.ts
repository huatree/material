import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import veauryVitePlugins from 'veaury/vite/index.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    veauryVitePlugins({
      type: 'vue'
    })
  ],
  server: {
    host: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
