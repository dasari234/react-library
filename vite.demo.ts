import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, 'demo'),
  server: {
    port: 5174,
    host: true,
    open: true,
  },
  build: {
    outDir: resolve(__dirname, 'dist-demo'),
    emptyOutDir: true,
  },
  css: {
    postcss: './postcss.config.js'
  }
});