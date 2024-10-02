import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: '127.0.0.1', // Use IPv4 to avoid binding issues with ::1 (IPv6)
    port: 3000, // Change the port to avoid conflicts
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
