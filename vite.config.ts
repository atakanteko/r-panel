import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      features: `${path.resolve(__dirname, "./src/features/")}`,
      helpers: `${path.resolve(__dirname, "./src/helpers")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks")}`,
      layouts: `${path.resolve(__dirname, "./layouts/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      routes: path.resolve(__dirname, "./src/routes"),
      styles: path.resolve(__dirname, "./src/styles"),
      theme: `${path.resolve(__dirname, "./src/theme")}`,
      types: `${path.resolve(__dirname, "./src/types")}`,
      store: `${path.resolve(__dirname, "./src/store")}`,
    },
  },
})
