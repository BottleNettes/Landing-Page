export default {
	root: './',
	server: {
	  port: 5174,
	},
	build: {
	  outDir: 'dist',
	  rollupOptions: {
		input: {
		  main: 'index.html',
		},
	  },
	},
  };