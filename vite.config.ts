import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/chat-widget.tsx',
      name: 'ChatWidget',
      formats: ['iife'],
      fileName: (format) => `chat-widget.${format}.js`,
    },
    rollupOptions: {
      output: {
        // No external dependencies - everything gets bundled
        // No globals needed since React will be bundled
      },
    },
    // Ensure production mode is properly set
    minify: 'esbuild',
    sourcemap: false,
  },
  define: {
    // Ensure NODE_ENV is properly set for production
    'process.env.NODE_ENV': '"production"',
  }
})
