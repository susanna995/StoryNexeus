import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  "server.hmr.overlay":"false"
})

// export default defineConfig({
//   base: '/StoryNexeus/',  // Set to the repository name (case-sensitive)
// });