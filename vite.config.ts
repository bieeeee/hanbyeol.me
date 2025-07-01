import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '/src/styles/mixins.scss' as *;`
      }
    }
  },
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components/index.ts"
    }
  }
});
