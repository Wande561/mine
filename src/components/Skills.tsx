import React from 'react';

const skills = [
  { id: 1, src: '/src/assets/images/skill1.jpg', alt: 'HTML'},
  { id: 2, src: '/src/assets/images/skill2.jpg', alt: 'CSS' },
  { id: 3, src: '/src/assets/images/skill3.jpg', alt: 'Javascript' },
  { id: 4, src: '/src/assets/images/skill4.jpg', alt: 'Testing & Debbuging' },
  { id: 5, src: '/src/assets/images/skill5.jpg', alt: 'Communication' },
  { id: 6, src: '/src/assets/images/skill6.jpg', alt: 'Problem solving' },
  { id: 7, src: '/src/assets/images/skill7.jpg', alt: 'Security Practices' },
  { id: 8, src: '/src/assets/images/skill8.jpg', alt: 'Project management' },
  { id: 9, src: '/src/assets/images/skill9.jpg', alt: 'Git' },
  { id: 10, src: '/src/assets/images/skill10.jpg', alt: 'Adaptability' },
];

const Skills = () => {
  return (
    <div className="grid grid-cols-4 gap-5 p-7 bg-[#2C3E50] ">
        <h1 className="text-blue-400 font-bold text-2xl px-4">My Skills</h1>
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center">
           <img 
            src={skill.src} 
            alt={skill.alt} 
            className="h-16 w-16 object-cover rounded-full" 
           />
           <p className="mt-2 text-center">{skill.alt}</p>
          </div>
        ))}
    </div>
  );
};

export default Skills;
