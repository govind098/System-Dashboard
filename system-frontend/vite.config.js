// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/dashboard': 'http://127.0.0.1:5000',  // Proxy requests to Flask backend
    },
  },
});
