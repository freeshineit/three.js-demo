import { defineConfig } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'
import compression from 'vite-plugin-compression'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8080',
    //     changeOrigin: true
    //     // rewrite: path => path.replace(/^\/api/, '')
    //   }
    // }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  define: {},
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    compression()
  ]
})
