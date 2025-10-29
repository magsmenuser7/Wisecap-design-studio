import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === "development" ? "/Wisecap-design-studio/" : "/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
