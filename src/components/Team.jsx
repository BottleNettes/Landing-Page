import React from 'react';

const Team = () => {
  const teamMembers = [
    { name: 'Dev A', github: '#', linkedin: '#', image: '/placeholder.jpg' },
    { name: 'Dev B', github: '#', linkedin: '#', image: '/placeholder.jpg' },
    { name: 'Dev C', github: '#', linkedin: '#', image: '/placeholder.jpg' },
  ];

  return (
    <section id="team" className="p-10 bg-blue-300 min-h-screen">
      <h2 className="text-3xl font-bold">Our Team</h2>
      <div className="flex justify-around mt-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img className="w-24 h-24 rounded-full" src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <div className="mt-2 space-x-2">
              <a href={member.github} className="text-blue-700">GitHub</a>
              <a href={member.linkedin} className="text-blue-700">LinkedIn</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
