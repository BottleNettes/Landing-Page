import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/ErrorBoundary';
import App from './App';
import './styles/index.css';
import background from './assets/background.mp4';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <ErrorBoundary> */}
			{/* <video
				src={background}
				autoPlay
				loop
				muted
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100vw',
					height: '100vh',
					objectFit: 'cover',
					zIndex: -1, // Keeps it behind all other content
				}}
			/> */}
			<App />
		{/* </ErrorBoundary> */}
	</React.StrictMode>
);
