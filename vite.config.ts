import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
      plugins: [react()],
      base: '/',
      build: {
        outDir: 'docs', // Change this to your desired output directory for run "npm run build"
    },
  };

  if (command !== 'serve') {
      config.base = "/femt-space-tourism-website/";
  }

  return config;
});