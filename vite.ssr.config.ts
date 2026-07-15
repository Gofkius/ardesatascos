import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// Server-side build of entry-server.tsx, used only by scripts/prerender.mjs
// to generate static HTML at build time. No Cloudflare plugin here: this
// bundle runs in Node during the build, it is never deployed.
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist-ssr',
  },
})
