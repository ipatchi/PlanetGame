import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.test.tsx'],
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, './src/API'),
      '@components': path.resolve(__dirname, './src/Components'),
      '@pages': path.resolve(__dirname, './src/Pages'),
      '@reviewScreen': path.resolve(__dirname, './src/Pages/ReviewScreen'),
      '@routing': path.resolve(__dirname, './src/Routing'),
      '@scripts': path.resolve(__dirname, './src/Scripts'),
    },
  },
});
