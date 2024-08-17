import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
      plugins: [react()],
      base: '/femt-space-tourism-website/',
      build: {
        outDir: 'docs', // Change this to your desired output directory for run "npm run build"
    },
  }

  return config;
});