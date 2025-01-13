import { defineConfig } from 'vite';

export default defineConfig({
	root: './',
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: './index.html',
		},
	},
	server: {
		port: 3000, // Local dev server port- may need to change? Conflict with bottlenetes actual project?
	},
});