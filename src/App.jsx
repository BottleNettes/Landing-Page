import React from 'react';

import NavBar from './components/NavBar';
import Subtitle from './components/Subtitle';
import CoreConcepts from './components/CoreConcepts';
import About from './components/About';
import Features from './components/Features';
import FeatureDetails from './components/FeatureDetails';
import Dependencies from './components/Dependencies';
import Blog from './components/Blog';
import Team from './components/Team';
import SourcesList from './components/SourcesList';

import './styles/index.css';

const App = () => (
  <div id='app-container' className=' text-slate-900'>
    <NavBar />

    {/* Subtitle Section */}
    <Subtitle />

    {/* Main Content Section */}
    <div className='main-content text-sl'>
      <CoreConcepts />
      <About />
			<Features />
      <FeatureDetails />
      <Dependencies />
      <Blog />
      <Team />
      <SourcesList />
      {/* Add other components like Features or Footer here */}
    </div>
  </div>
);

export default App;
