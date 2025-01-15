import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Funan Wang',
      github: 'https://github.com/random-letter-generator/',
      linkedin: 'https://www.linkedin.com/in/funan-wang/',
      image: '/placeholder.jpg',
    },
    {
      name: 'Julie Hoagland-Sorensen',
      github: 'https://github.com/JulieHoaglandSorensen/',
      linkedin: 'https://www.linkedin.com/in/juliehoaglandsorensen/',
      image: '/placeholder.jpg',
    },
    {
      name: 'Mark (Kiet) Nghiem',
      github: 'https://github.com/MarkNghiem/',
      linkedin: 'https://www.linkedin.com/in/kiet-nghiem/',
      image: '/placeholder.jpg',
    },
    {
      name: 'Quin Kirsten',
      github: 'http://github.com/quinkirsten',
      linkedin: 'https://www.linkedin.com/in/quin-kirsten-081b66132/',
      image: '/placeholder.jpg',
    },
    {
      name: 'Zoe Xu',
      github: 'https://github.com/zx-999',
      linkedin: 'https://www.linkedin.com/in/zxu3756/',
      image: '/placeholder.jpg',
    },
  ];

  return (
    <section id='team' className='p-10 bg-blue-300 min-h-screen'>
      <h2 className='text-3xl font-bold'>Our Team</h2>
      <div className='flex justify-around mt-8'>
        {teamMembers.map((member, index) => (
          <div key={index} className='text-center'>
            <img
              className='w-24 h-24 rounded-full'
              src={member.image}
              alt={member.name}
            />
            <h3>{member.name}</h3>
            <div className='mt-2 space-x-2'>
              <a href={member.github} className='text-blue-700'>
                GitHub
              </a>
              <a href={member.linkedin} className='text-blue-700'>
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
