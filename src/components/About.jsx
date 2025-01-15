import React from 'react';

const About = () => (
  <section id='about' className='py-20 bg-transparent'>
    <div className='mx-auto max-w-screen-xl px-4'>
      <div className='mb-16'>
        <h2 className='text-4xl font-bold text-[#072B51] text-center'>
          About BottleNetes
        </h2>
      </div>

      <div className='about-video-container backdrop-blur-sm bg-white/30 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] mb-16'>
        <iframe
          src='https://www.youtube.com/embed/KN3IemyqJJw'
          title='BottleNetes Introduction'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          loading='lazy'
        ></iframe>
      </div>

      <div className='text-center'>
        <a
          href='https://github.com/oslabs-beta/BottleNetes'
          target='_blank'
          rel='noopener noreferrer'
          className='get-started-btn'
        >
          Get Started
        </a>
      </div>
    </div>
  </section>
);

export default About;
