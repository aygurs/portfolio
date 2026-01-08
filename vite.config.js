import { defineConfig } from 'vite';

export default defineConfig({
    root: './', // Set the root directory
    build: {
        outDir: 'dist', // Output directory for the bundled files
        rollupOptions: {
            input: './index.html',
        },
    },
});