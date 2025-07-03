import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // 👈 your GitHub repo name with trailing slash
  plugins: [react()],
});
