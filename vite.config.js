import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/graduation_project", 
  server: {
    historyApiFallback: true
  }
})
