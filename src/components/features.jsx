import React, { useState, useEffect } from 'react';
import FeatureDetails from './FeatureDetails';

const Features = () => {
  const [clickedButton, setClickedButton] = useState('Heat Map');

  useEffect(() => {
    console.log('button clicked: ', clickedButton);
  }, [clickedButton]);

  return (
    <div className='features-container'>
      <div id='buttonDiv' className='button-container'>
        <button
          className={`featureButton ${
            clickedButton === 'Heat Map' ? 'selected' : ''
          }`}
          onClick={() => setClickedButton('Heat Map')}
        >
          Heat Map
        </button>
        <button
          className={`featureButton ${
            clickedButton === 'Memory and CPU Usage' ? 'selected' : ''
          }`}
          onClick={() => setClickedButton('Memory and CPU Usage')}
        >
          Memory and CPU Usage
        </button>
        <button
          className={`featureButton ${
            clickedButton === 'Latency' ? 'selected' : ''
          }`}
          onClick={() => setClickedButton('Latency')}
        >
          Latency
        </button>
        <button
          className={`featureButton ${
            clickedButton === 'Kubernetes Functions' ? 'selected' : ''
          }`}
          onClick={() => setClickedButton('Kubernetes Functions')}
        >
          Kubernetes Functions
        </button>
        <button
          className={`featureButton ${
            clickedButton === 'AI Insights' ? 'selected' : ''
          }`}
          onClick={() => setClickedButton('AI Insights')}
        >
          AI Insights
        </button>
      </div>

      <div id='featureDetailsDiv' className='details-container'>
        <FeatureDetails feature={clickedButton} />
      </div>
    </div>
  );
};

export default Features;
