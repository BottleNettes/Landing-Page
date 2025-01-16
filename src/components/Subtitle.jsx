import React, { useRef, useEffect, useState } from 'react';
import { HiChevronDoubleDown } from 'react-icons/hi';
import openingVideo from '../assets/opening.mp4';

const Subtitle = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Make the video fade out by half viewport height
      if (scrollPosition < windowHeight / 2) {
        const opacity = 1 - scrollPosition / (windowHeight / 2);
        if (videoRef.current) {
          videoRef.current.style.opacity = opacity;
        }
      } else {
        // Ensure video is fully transparent after half scroll
        if (videoRef.current) {
          videoRef.current.style.opacity = 0;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    window.scrollTo({
      top: window,
      behavior: 'smooth',
    });
  };

  return (
    <div className='subtitle-header'>
      <video
        ref={videoRef}
        className='subtitle-video'
        autoPlay
        muted
        preload='auto'
        loop
      >
        <source src={openingVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className='scroll-indicator' onClick={handleScrollClick}>
        <HiChevronDoubleDown className='scroll-arrow' />
      </div>
    </div>
  );
};

export default Subtitle;
