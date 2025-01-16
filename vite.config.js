import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: './',
  server: {
    port: 5174,
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        root: resolve(__dirname, 'index.html'),
      },
      external: ['server/**/*.ts'],
    },
  },
  optimizeDeps: {
    include: ['lucide-react'],
  },
  assetsInclude: ['**/*.mp4'],
});
