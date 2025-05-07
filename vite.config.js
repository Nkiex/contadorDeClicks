// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/contadorDeClicks/', // 👈 Muy importante para GitHub Pages
  plugins: [react()],
})
