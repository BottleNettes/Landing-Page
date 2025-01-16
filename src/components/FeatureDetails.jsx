import React from 'react';

// Import the image and video files from the assets folder
import heatMapImage from '../assets/feature_heatmap.png';
import memoryCpuImage from '../assets/feature_requestlimit.png';
import latencyImage from '../assets/feature_latency.png';
import kubernetesImage from '../assets/feature_k8operation.gif'; // It's a GIF now, not a MOV
import aiInsightsImage from '../assets/feature_chatbot.png';

const FeatureDetails = ({ feature }) => {
  let content;

  // Image paths referencing imported assets
  const imagePaths = {
    'Heat Map': heatMapImage,
    'Memory and CPU Usage': memoryCpuImage,
    'Latency': latencyImage,
    'Kubernetes Functions': kubernetesImage, // Treat as an image, not a video
    'AI Insights': aiInsightsImage,
  };

  switch (feature) {
    case 'Heat Map':
      content = (
        <div className='feature-container'>
          <div className='text-section'>
            <p>
              The Heat Map feature provides an intuitive, visual representation
              of your system’s performance at a cluster level. It allows you to
              monitor critical metrics such as CPU usage, memory usage, and
              latency across your entire Kubernetes cluster. With this feature,
              you can quickly spot potential bottlenecks and areas for
              optimization by visualizing the health and performance of your
              resources.
            </p>
          </div>
          <div className='media-section'>
            <img src={imagePaths['Heat Map']} alt='Heat Map' />
          </div>
        </div>
      );
      break;
    case 'Memory and CPU Usage':
      content = (
        <div className='feature-container'>
          <div className='text-section'>
            <p>
              The Request vs Limit feature offers a clear, stacked bar chart
              visualization that helps you understand the resource utilization
              on each individual node in your Kubernetes cluster. This feature
              specifically compares the resource requests (the amount of
              resources a pod is guaranteed) versus the resource limits (the
              maximum amount of resources a pod can use) for each node.
            </p>
          </div>
          <div className='media-section'>
            <img
              src={imagePaths['Memory and CPU Usage']}
              alt='Memory and CPU Usage'
            />
          </div>
        </div>
      );
      break;
    case 'Latency':
      content = (
        <div className='feature-container'>
          <div className='text-section'>
            <p>
              The Latency feature provides a historical line graph that tracks
              both inbound and outbound latency over time, helping you monitor
              and diagnose network performance in your Kubernetes cluster. The
              graph includes lines for average and peak latency for both inbound
              and outbound traffic, giving you insights into traffic patterns
              and potential bottlenecks. By default, the view is at the node
              level, but you can click into individual pods for more granular
              details.
            </p>
          </div>
          <div className='media-section'>
            <img src={imagePaths['Latency']} alt='Latency' />
          </div>
        </div>
      );
      break;
    case 'Kubernetes Functions':
      content = (
        <div className='feature-container'>
          <div className='text-section'>
            <p>
              The Kubernetes Functions feature allows you to manage and
              troubleshoot your pods directly, including the ability to restart
              pods, scale replicas up or down, and modify resource requests and
              limits. You can also view detailed pod logs to diagnose errors or
              investigate performance issues, simplifying the management of your
              Kubernetes workloads.
            </p>
          </div>
          <div className='media-section'>
            <img
              src={imagePaths['Kubernetes Functions']}
              alt='Kubernetes Functions'
            />
          </div>
        </div>
      );
      break;
    case 'AI Insights':
      content = (
        <div className='feature-container'>
          <div className='text-section'>
            <p>
              The AI Insights feature uses an intelligent chatbot to analyze
              your cluster’s performance and provide actionable recommendations
              to optimize your fleet. By monitoring key metrics, the AI
              identifies potential issues and suggests improvements. If you have
              questions about your cluster, you can ask the chatbot directly,
              and it will provide insights and guidance, helping you maintain an
              efficient cluster with minimal manual intervention.
            </p>
          </div>
          <div className='media-section ai-insights'>
            <img src={imagePaths['AI Insights']} alt='AI Insights' />
          </div>
        </div>
      );
      break;
    default:
      content = (
        <div>
          <p>Select a feature to see the details.</p>
        </div>
      );
  }

  return <div>{content}</div>;
};

export default FeatureDetails;
