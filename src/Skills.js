import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import { faPython, faPhp, faCuttlefish, faJs, faReact, faMicrosoft, faHtml5, faCss3Alt,  faWordpress } from '@fortawesome/free-brands-svg-icons';

const skills = [
  { name: 'Python', icon: faPython },
  { name: 'PHP-Laravel', icon: faPhp },
  { name: 'C++', icon: faCuttlefish },
  { name: 'JavaScript', icon: faJs },
  { name: 'MS-Office', icon: faMicrosoft },
  { name: 'HTML, CSS', icon: faHtml5 },
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon:  faCss3Alt},
  { name: 'Database', icon: faDatabase },
  { name: 'WordPress', icon: faWordpress },
  { name: 'React.js', icon: faReact },
];

const Skills = () => {
  return (
    
    <div className="flex justify-center items-center h-screen bg-gray-50">
  <div className="flex flex-wrap justify-center items-center w-3/4 mx-auto pt-4">
    {skills.map((skill) => (
      <div
        key={skill.name}
        className="group flex flex-col items-center m-4 p-6 border border-transparent rounded-xl transition-all duration-300 ease-in-out transform hover:bg-blue-500 hover:text-white hover:scale-105"
      >
        <FontAwesomeIcon
          icon={skill.icon}
          className="text-4xl mb-4 transition-colors duration-300 ease-in-out group-hover:text-white"
        />
        <span className="text-lg font-semibold transition-colors duration-300 ease-in-out group-hover:text-white">
          {skill.name}
        </span>
      </div>
    ))}
  </div>
</div>
  
  );
};

export default Skills;
