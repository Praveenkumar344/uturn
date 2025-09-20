import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import lineClamp from '@tailwindcss/line-clamp'

import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    ],
})
