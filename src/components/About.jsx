import React from 'react';

const About = () => (
  <section id='about' className='p-10 bg-blue-100 min-h-screen'>
    <h2 className='text-3xl font-bold'>About BottleNetes</h2>
    <p className='mt-4'>
      BottleNetes simplifies Kubernetes visualization and management!
    </p>
    <video className='mt-6 max-w-full' controls>
      <source src='/placeholder-video.mp4' type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  </section>
);

export default About;
