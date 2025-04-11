import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'potter',
      filename: 'remoteEntry.js',
      exposes: {
        './AppContainer': './src/components/AppContainer/Index.tsx',
        './hooks/useSwitchLanguage': './src/hooks/useSwitchLanguage',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5002,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
