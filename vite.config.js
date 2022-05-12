import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.js',
      formats: ['es'],
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'shadow-form': resolve(__dirname, 'shadow-form/index.html'),
        'shadow-inputs': resolve(__dirname, 'shadow-inputs/index.html'),
        'shadow-form-inputs': resolve(
          __dirname,
          'shadow-form-inputs/index.html'
        ),
      },
    },
  },
})
