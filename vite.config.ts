import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    server: {
        port: 4000,
        open: true,
        proxy: {},
    },
    plugins: [
        vue(),
        tsconfigPaths(),
    ],
})
