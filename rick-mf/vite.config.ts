import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    federation({
      name: 'rick',
      filename: 'remoteEntry.js',
      exposes: {
        './AppContainer': './src/components/AppContainer/Index.tsx',
        './hooks/useSwitchLanguage': './src/hooks/useSwitchLanguage',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5001,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    assetsInlineLimit: 0,
  },
})

