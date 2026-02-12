import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@types': path.resolve(__dirname, './src/types'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@i18n': path.resolve(__dirname, './src/i18n'),
        },
    },
    server: {
        port: 5173,
        host: true,
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    i18n: ['react-i18next', 'i18next', 'i18next-browser-languagedetector'],
                },
            },
        },
    },
});