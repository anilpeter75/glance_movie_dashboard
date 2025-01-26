import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import path from "path";


// https://vite.dev/config/
export default defineConfig({
  base: '/', // Update this to your actual base path if necessary
  plugins: [react()],
  css: {
    postcss: {
     plugins: [tailwindcss()],
    },
   },
   resolve: {
    alias: {
    "@": path.resolve(__dirname, "./src"),
  },
},
test: {
  globals: true,
  environment: "jsdom",
  setupFiles:'/test/setup.js'
},
})
