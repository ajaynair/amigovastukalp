/// <reference types="node" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on mode (development, production)
  // VITE_GEMINI_API_KEY should be in your .env file for local dev
  // or set as an environment variable in your CI/deployment environment
  const env = loadEnv(mode, process.cwd(), ''); // Use process.cwd() directly

  return {
    plugins: [react()],
    base: '/amigovastukalp/', // Important for GitHub Pages deployment
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'), // Alias to project root
      },
    },
    define: {
      // Expose VITE_GEMINI_API_KEY as process.env.API_KEY to your app
      'process.env.API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY)
    }
  };
});
