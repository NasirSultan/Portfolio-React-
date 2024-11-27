import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import profileImage from './IMG_0627.jpg';

function MainPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-light">
      <div className="container flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-5 w-3/4">
        {/* Name Box (Top Row) */}
        <div className="flex-1 p-5 flex flex-col justify-center items-center mb-5 md:mb-0">
          <h5 className="text-5xl font-bold text-primary mb-2 transition duration-300 transform hover:scale-105 hover:text-blue-500">
            Nasir Sultan
          </h5>
          <p className="text-brown-700 text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-600 hover:shadow-lg">
          Hello, I'm a Full-Stack Developer based in Lahore, Pakistan.
</p>


          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <a
              href="Http://linkedin.com/in/nasir-sultan-848762282"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 border border-gray-300 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transform transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 border border-gray-300 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transform transition-all duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
          </div>

          {/* Buttons for CV and Cover Letter */}
          <div className="flex space-x-4 mt-5">
            <a
              href="https://drive.google.com/file/d/1ttfT5FglwoaESHmR-bOry6_IDzO-qqZK/view?usp=drive_link"
              
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:text-gray-100 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
             Resume
            </a>
            <a
              href="https://drive.google.com/file/d/1yhwy8PHy6zbtOyM7_nIRRp_5EW11gaWq/view?usp=drive_link"
             
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 hover:text-gray-100 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              Cover-Letter
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 p-5 flex flex-col justify-center items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full border border-primary transition duration-300 transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
