import React from 'react';
import NavBar from './components/Taskbar';
import About from './components/About';
import Docs from './components/Documentation';
import Team from './components/Developers';
import Blog from './components/Blog';
import Dependencies from './components/Dependencies';
import Features from './components/Features';

const App = () => (
	<div>
		<NavBar />
		<main>
			<About />
			<Features />
			<Dependencies />
			<Docs />
			<Team />
			<Blog />
		</main>
	</div>
);

export default App;
