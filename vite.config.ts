import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '', // Change this to your desired base path for run "npm run preview"
  build: {
    outDir: 'docs', // Change this to your desired output directory for run "npm run build"
  },
})
