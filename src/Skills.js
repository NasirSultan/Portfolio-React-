import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { 
  faPython, 
  faPhp, 
  faCuttlefish, 
  faJs, 
  faReact, 
  faMicrosoft, 
  faHtml5, 
  faCss3Alt, 
  faWordpress, 
  faNodeJs 
} from '@fortawesome/free-brands-svg-icons';

const skills = [
  { name: 'Python', icon: faPython, hoverColor: 'hover:bg-yellow-500' },
  { name: 'PHP-Laravel', icon: faPhp, hoverColor: 'hover:bg-purple-600' },
  { name: 'C++', icon: faCuttlefish, hoverColor: 'hover:bg-blue-400' },
  { name: 'JavaScript', icon: faJs, hoverColor: 'hover:bg-yellow-300' },
  { name: 'MS-Office', icon: faMicrosoft, hoverColor: 'hover:bg-green-600' },
  { name: 'HTML', icon: faHtml5, hoverColor: 'hover:bg-orange-500' },
  { name: 'CSS', icon: faCss3Alt, hoverColor: 'hover:bg-blue-500' },
  { name: 'Database', icon: faDatabase, hoverColor: 'hover:bg-gray-600' },
  { name: 'WordPress', icon: faWordpress, hoverColor: 'hover:bg-blue-800' },
  { name: 'React.js', icon: faReact, hoverColor: 'hover:bg-cyan-500' },
  { name: 'Node.js', icon: faNodeJs, hoverColor: 'hover:bg-green-500' },
  { name: 'Express.js', icon: faNodeJs, hoverColor: 'hover:bg-black' },
  { name: 'MongoDB', icon: faDatabase, hoverColor: 'hover:bg-green-700' },
];

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      {/* Main Header with Border */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 p-4 border-4 border-gray-300 rounded-lg transition-all duration-300 ease-in-out hover:text-blue-500 hover:scale-110">
  My Skills
</h1>
      
      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center items-center w-3/4 mx-auto pt-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`group flex flex-col items-center m-4 p-6 border border-transparent rounded-xl transition-all duration-300 ease-in-out transform ${skill.hoverColor} hover:text-white hover:scale-105`}
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className="text-4xl mb-4 transition-transform duration-300 ease-in-out group-hover:text-white group-hover:scale-170"
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
