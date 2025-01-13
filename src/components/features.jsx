import React from 'react';
import { useState, setState, useEffect } from 'react';


const Features = () => {
  const [clickedButton, setClickedButton] = useState('Heat Map');

  useEffect(() => {
    console.log('button clicked: ', clickedButton);
  }, [clickedButton]);

  return (
    <div>
      <h1>div 1</h1>
      <div>
        <button onClick={() => setClickedButton('Heat Map')}> Heat Map </button>
        <button onClick={() => setClickedButton('Memory and CPU Usage')}>
          {' '}
          Memory and CPU Usage{' '}
        </button>
        <button onClick={() => setClickedButton('Latency')}> Latency </button>
        <button onClick={() => setClickedButton('Kubernetes Functions')}>
          {' '}
          Kubernetes Functions{' '}
        </button>
        <button onClick={() => setClickedButton('AI Insights')}>
          {' '}
          AI Insights{' '}
        </button>
      </div>
      <h1>div 2</h1>
      <div></div>
    </div>
  );
};

export default Features;
