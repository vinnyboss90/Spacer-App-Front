import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/Spacer-App-Front',
  }

  if (command !== 'serve') {
    config.base = '/Spacer-App-Front/'
  }

  return config
})
