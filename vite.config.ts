import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from any host
    port: 3000,      // Specify your desired port
    strictPort: true, // Prevents Vite from trying to use another port if the specified one is in use
    cors: {
      origin: '*', // Allow this specific origin
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
      credentials: true, // Allow credentials
    },
  },
})