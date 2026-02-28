import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  base: '/Greenmart/',   // 👈 THÊM DÒNG NÀY

  server: {
    proxy: {
      '/api': {
        target: 'https://dak.edu.vn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api2'),
      },
    },
  },
});