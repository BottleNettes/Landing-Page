import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001; // Backend port

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
	res.send('Welcome to the BottleNetes Backend!');
});

app.get('/health', (req, res) => {
	res.status(200).json({ status: 'Healthy' });
});

// Start the server
app.listen(PORT, () => {
	console.log(`Backend server is running at http://localhost:${PORT}`);
});
