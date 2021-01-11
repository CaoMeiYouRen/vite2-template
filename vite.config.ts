import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const projectRootDir = path.resolve(__dirname)
export default defineConfig({
    server: {
        port: 4000,
        open: true,
        proxy: {},
    },
    plugins: [vue()],
    alias: {
        '@': path.resolve(projectRootDir, 'src'),
    },
})
