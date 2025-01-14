import React from 'react';

const FeatureDetails = ({ feature }) => {
  let content;

  switch (feature) {
    case 'Heat Map':
      content = <div>This is the Heat Map feature.</div>;
      break;
    case 'Memory and CPU Usage':
      content = <div>This is the Memory and CPU Usage feature.</div>;
      break;
    case 'Latency':
      content = <div>This is the Latency feature.</div>;
      break;
    case 'Kubernetes Functions':
      content = <div>This is the Kubernetes Functions feature.</div>;
      break;
    case 'AI Insights':
      content = <div>This is the AI Insights feature.</div>;
      break;
    default:
      content = <div>Select a feature to see the details.</div>;
  }

  return <div>{content}</div>;
};

export default FeatureDetails;
