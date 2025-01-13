import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Docs from './components/Docs';
import Team from './components/Team';
import Blog from './components/Blog';
import Dependencies from './components/Dependencies';

const App = () => (
	<div>
		<NavBar />
		<main>
			<About />
			<Dependencies />
			<Docs />
			<Team />
			<Blog />
		</main>
	</div>
);

export default App;
