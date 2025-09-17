// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react-icons',
        'react-icons/fa',
        // 다른 react-icons 모듈을 사용한다면 추가
        'axios', // <-- 이 부분을 추가해 주세요!
      ],
    },
  },
});