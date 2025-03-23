import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 28702
  },
  base: "html-hacking-tools",
  build: {
    outDir: "docs"
  }
})