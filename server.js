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

// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'dist')));

// // Catch-all route to serve index.html
// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// app.listen(PORT, () => {
// 	console.log(`Server is running on http://localhost:${PORT}`);
// });
