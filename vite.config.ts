import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],

  server: {
    proxy: {
      '/api': {
        target: 'https://apis.data.go.kr',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
      // '/api': {
      //   target: 'http://openapi.molit.go.kr',
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/api/, '')
      // },

      '/monthapi': {
        target: 'http://openapi.molit.go.kr:8081',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/monthapi/, '')
      }
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
});

