import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: 'client',
  base: './',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './client/src')
      }
    ]
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true
  }
});
