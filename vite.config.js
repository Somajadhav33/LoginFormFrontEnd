import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches the Publish Directory in Render
  },
  root: 'src', // Optional: Specifies the root directory (default is project root)
});