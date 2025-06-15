import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './', // Add this line for correct asset paths in production
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
