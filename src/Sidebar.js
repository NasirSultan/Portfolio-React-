import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';  // Ensure Button from React Bootstrap is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faCode, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="w-1/6 h-100% bg-gray-800 text-white flex flex-col items-center py-8">
      <Link to="/" className="text-3xl font-bold mb-8">My Portfolio</Link>

      <Button
        as={Link}
        to="/about"
        variant="primary"
        className="mb-4 w-full flex items-center justify-start font-bold transition-transform transform hover:scale-105 hover:bg-blue-700 hover:text-white duration-300"
      >
        <FontAwesomeIcon icon={faUser} className="mr-2" /> About
      </Button>

      <Button
        as={Link}
        to="/education"
        variant="primary"
        className="mb-4 w-full flex items-center justify-start font-bold transition-transform transform hover:scale-105 hover:bg-blue-700 hover:text-white duration-300"
      >
        <FontAwesomeIcon icon={faGraduationCap} className="mr-2" /> Education
      </Button>

      <Button
        as={Link}
        to="/skills"
        variant="primary"
        className="mb-4 w-full flex items-center justify-start font-bold transition-transform transform hover:scale-105 hover:bg-blue-700 hover:text-white duration-300"
      >
        <FontAwesomeIcon icon={faCode} className="mr-2" /> Skills
      </Button>

      <Button
        as={Link}
        to="/projects"
        variant="primary"
        className="mb-4 w-full flex items-center justify-start font-bold transition-transform transform hover:scale-105 hover:bg-blue-700 hover:text-white duration-300"
      >
        <FontAwesomeIcon icon={faFolder} className="mr-2" /> Projects
      </Button>

      <Button
        as={Link}
        to="/contact"
        variant="primary"
        className="mb-4 w-full flex items-center justify-start font-bold transition-transform transform hover:scale-105 hover:bg-blue-700 hover:text-white duration-300"
      >
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact Me
      </Button>
    </div>
  );
};

export default Sidebar;
