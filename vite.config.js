import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { babel } from '@rollup/plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
  ],
  base: '/gosia_szulc/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext',
    sourcemap: true,
    assetsInlineLimit: 4096,
    assetsDir: 'assets',
    cssCodeSplit: true,
    manifest: true,
    rollupOptions: {
      input: './main.jsx',
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: '[name].[ext]',
        format: 'es',
      },
    },
  },
  css: {
    modules: true,
  },
  assetsInclude: ['**/*.PNG'],
})
