// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // <-- 이 부분을 추가하거나 수정해 주세요!
  build: {
    rollupOptions: {
      external: [
        'react-icons',
        'react-icons/fa',
        'axios',
        'react-hook-form',
      ],
    },
  },
});