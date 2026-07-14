import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/gh-live-react/", //base URL for the application
  server: {
    port: 3000,
    strictPort: true,
    host: "localhost",//host: "0.0.0.0"
    open: true,
    cors: true, //enable cross-origin resource sharing
    hmr: true, //enable hot module replacement
    
  }
})
