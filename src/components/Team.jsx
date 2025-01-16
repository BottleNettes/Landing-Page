import React from 'react';
import funanImage from '../../public/assets/funan_linkedin.jpeg';
import julieImage from '../../public/assets/julie_linkedin.jpg';
import markImage from '../../public/assets/mark_linkedin.png';
import quinImage from '../../public/assets/quin_linkedin.png';
import zoeImage from '../../public/assets/zoe_linkedin.png';
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
            Meet The Developers
          </h2>
          {/* <p className='text-sm text-slate-600'>The minds behind BottleNetes</p> */}
        </div>

        <div className='team-member-container'>
          {teamMembers.map((member, index) => (
            <div key={index} className='team-member w-32'>
              <div className='mb-2'>
                <div className='w-28 h-28 mx-auto rounded-full overflow-hidden'>
                  <img
                    className='w-full h-full object-cover'
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '230px',
                      height: '230px',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      borderRadius: '1rem'
                    }}
                  />
                </div>
              </div>
              <div className='text-center'>
                <h3 className='text-[5px] font-medium text-slate-700 truncate mb-1'>
                  {member.name}
                </h3>

                <div className='social-icons-container'>
                  <a
                    href={member.github}
                    className='social-icon text-slate-500 hover:text-blue-600'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={member.linkedin}
                    className='social-icon text-slate-500 hover:text-blue-600'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FaLinkedin />
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
