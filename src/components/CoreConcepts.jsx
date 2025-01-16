import React from 'react';
import { BiCube } from 'react-icons/bi';
import { VscGraph } from 'react-icons/vsc';
import { TbHistory } from 'react-icons/tb';
import { AiOutlineNodeIndex } from 'react-icons/ai';
import { BsRobot } from 'react-icons/bs';
import { HiOutlineLockClosed } from 'react-icons/hi';

const CoreConcepts = () => {
  const concepts = [
    {
      title: 'Pod Management',
      description:
        'Conveniently restart, scale, debug, and manage Kubernetes pods via the Web UI.',
      icon: BiCube,
    },
    {
      title: 'Real-time Monitoring',
      description:
        'Monitor your Kubernetes clusters with real-time metrics, logs, and performance analytics.',
      icon: VscGraph,
    },
    {
      title: 'History Tracking',
      description:
        'Track historical data on resource usage, api latency, and application performance.',
      icon: TbHistory,
    },
    {
      title: 'Service Mesh',
      description:
        'Manage service-to-service communication latency with built-in traffic tracking.',
      icon: AiOutlineNodeIndex,
    },
    {
      title: 'AI Insights',
      description:
        'Leverage AI to analyze cluster behavior and receive intelligent recommendations.',
      icon: BsRobot,
    },
    {
      title: 'Security',
      description:
        'Secure your Kubernetes clusters with role-based access control and encryption.',
      icon: HiOutlineLockClosed,
    },
  ];

  return (
    <section className='py-16 px-4' id='concepts'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12 text-bottlenetesBlue'>
          Core Concepts
        </h2>
        <div className='core-concepts-grid'>
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <button key={index} className='concept-button group'>
                <div className='concept-content'>
                  <div className='concept-default'>
                    <Icon className='concept-icon' />
                    <h3 className='concept-title'>{concept.title}</h3>
                  </div>
                  <div className='concept-hover'>
                    <p className='concept-description'>{concept.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreConcepts;
