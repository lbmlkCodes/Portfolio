import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { /* components from reactstrap */ } from 'reactstrap';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    // other Vite config options
    build: {
      rollupOptions: {
        external: ['reactstrap'],
      },
    },
})
