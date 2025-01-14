import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Docs from './components/Docs';
import Developers from './components/Developers';
import Blog from './components/Blog';
import Dependencies from './components/Dependencies';
import SourcesList from './components/SourcesList';

const App = () => (
	<div>
		<NavBar />
		<main>
			<About />
			<Dependencies />
			<Docs />
			<Developers />
			<Blog />
			<SourcesList />
		</main>
	</div>
);

export default App;
