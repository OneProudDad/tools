import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    APP_NAME: JSON.stringify(process.env.npm_package_name),
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  }
})
