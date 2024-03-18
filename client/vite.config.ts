import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
<<<<<<< Updated upstream
        host: '127.0.0.1',
=======
        host: '127.0.0.1'
>>>>>>> Stashed changes
    }
})
