import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// https://plainenglish.io/blog/step-by-step-guide-to-dockerize-react-app-created-using-vite
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
     usePolling: true,
    },
    host: true, // Here
    strictPort: true,
    port: 8080, 
  }
  // server: {
  //   watch: {
  //     usePolling: true,
  //   },
  //   hmr: {
  //     host: 'localhost',
  //   },
  //   host: true, // needed for the Docker Container port mapping to work
  //   strictPort: true,
  //   // port: 5173, // you can replace this port with any port
  // },
});