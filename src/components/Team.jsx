import React from 'react';
import funanImage from '../assets/funan_linkedin.jpeg';
import julieImage from '../assets/julie_linkedin.png';
import markImage from '../assets/mark_linkedin.png';
import quinImage from '../assets/quin_linkedin.png';
import zoeImage from '../assets/zoe_linkedin.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      name: 'Funan Wang',
      github: 'https://github.com/random-letter-generator/',
      linkedin: 'https://www.linkedin.com/in/funan-wang/',
      image: funanImage,
    },
    {
      name: 'Julie Hoagland-Sorensen',
      github: 'https://github.com/JulieHoaglandSorensen/',
      linkedin: 'https://www.linkedin.com/in/juliehoaglandsorensen/',
      image: julieImage,
    },
    {
      name: 'Mark (Kiet) Nghiem',
      github: 'https://github.com/MarkNghiem/',
      linkedin: 'https://www.linkedin.com/in/kiet-nghiem/',
      image: markImage,
    },
    {
      name: 'Quin Kirsten',
      github: 'http://github.com/quinkirsten',
      linkedin: 'https://www.linkedin.com/in/quin-kirsten-081b66132/',
      image: quinImage,
    },
    {
      name: 'Zoe Xu',
      github: 'https://github.com/zx-999',
      linkedin: 'https://www.linkedin.com/in/zxu3756/',
      image: zoeImage,
    },
  ];

  return (
    <section id='team' className='team-section py-8 px-4'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-2'>
            Meet Our Team
          </h2>
          {/* <p className='text-sm text-slate-600'>The minds behind BottleNetes</p> */}
        </div>

        <div className='flex justify-center gap-32 flex-wrap'>
          {teamMembers.map((member, index) => (
            <div key={index} className='team-member w-32'>
              <div className='mb-2'>
                <div className='w-28 h-28 mx-auto rounded-full overflow-hidden'>
                  <img
                    className='w-full h-full object-cover'
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '250px',
                      height: '250px',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                    }}
                  />
                </div>
              </div>
              <div className='text-center'>
                <h3 className='text-[5px] font-medium text-slate-700 truncate mb-1'>
                  {member.name}
                </h3>

                <div className='flex justify-center gap-1'>
                  <a
                    href={member.github}
                    className='text-slate-500 hover:text-blue-600 transition-colors'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={member.linkedin}
                    className='text-slate-500 hover:text-blue-600 transition-colors'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
