import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from "@cloudflare/vite-plugin"
import { copyFileSync } from 'fs'
import { resolve } from 'path'

// Plugin para criar uma cópia do index.html como 404.html no build (SPA Fallback)
const spaFallbackPlugin = () => ({
  name: 'spa-fallback',
  closeBundle() {
    try {
      copyFileSync(
        resolve(__dirname, 'dist/index.html'),
        resolve(__dirname, 'dist/404.html')
      )
      console.log('-> 404.html gerado com sucesso!')
    } catch (e) {
      console.error('Erro ao gerar 404.html:', e)
    }
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    cloudflare(), 
    spaFallbackPlugin()
  ],
})