import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'

export default defineConfig({
    resolve: {
        alias: {
            '@': '/resources/js',
            '@css': '/resources/css',
            '@assets': '/resources/assets',
        },
    },
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
})
