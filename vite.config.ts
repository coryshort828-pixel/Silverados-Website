import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/Silverados-Website/',
  plugins: [react()],
  define: {
    // This ensures process.env is polyfilled for the client build
    'process.env': process.env
  }
});
