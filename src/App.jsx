import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import NavBar from './components/NavBar';
import Subtitle from './components/Subtitle';
import About from './components/About';
import Docs from './components/Docs';
import Blog from './components/Blog';
import Dependencies from './components/Dependencies';
import Features from './components/Features';
import CoreConcepts from './components/CoreConcepts';
import FeatureDetails from './components/FeatureDetails';
import Team from './components/Team';
import SourcesList from './components/SourcesList';

import './styles/index.css';

const App = () => (
  <div className='app-container'>
    {/* Sticky NavBar */}
    <NavBar />

    {/* Subtitle Section */}
    <div className='video-section'>
      <Subtitle />
    </div>

    {/* Main Content Section */}
    <div className='main-content'>
      {/* <CoreConcepts />
      <About />
      <Features />
      <FeatureDetails />
      <Dependencies />
      <Blog />
      <Team />
      <SourcesList /> */}
      {/* Add other components like Features or Footer here */}
    </div>
  </div>
);

export default App;
