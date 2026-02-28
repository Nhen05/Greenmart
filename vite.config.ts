import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://dak.edu.vn', // URL server của bạn
        changeOrigin: true, // Chuyển đổi origin để tránh lỗi CORS
        rewrite: (path) => path.replace(/^\/api/, '/api2'), // Đổi đường dẫn khi gửi tới server
      },
    },
  },
  
});
