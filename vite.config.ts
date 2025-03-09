import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@parts": path.resolve(__dirname, "./src/parts"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
});
