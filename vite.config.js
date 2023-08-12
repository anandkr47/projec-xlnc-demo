import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 10000, // Adjust the chunk size warning limit to 1000 KiB (1 MB) or any other value as needed
  },
})
