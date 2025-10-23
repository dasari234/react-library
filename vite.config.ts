import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      outDir: 'dist',
      insertTypesEntry: true,
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactSharedComponents',
      fileName: (format) => {
        if (format === 'es') return 'react-shared-components.es.js';
        if (format === 'umd') return 'react-shared-components.umd.js';
        return `react-shared-components.${format}.js`;
      },
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? 'asset';
          if (name === 'style.css') return 'react-shared-components.css';
          return name;
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: true,
    emptyOutDir: true,
  },
  css: {
    postcss: './postcss.config.js'
  }
});