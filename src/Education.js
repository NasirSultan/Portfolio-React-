import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Education() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="w-10/12 md:w-7/12 lg:w-2/3 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="text-center mb-4">
        <FontAwesomeIcon icon={faUniversity} size="2x" className="text-blue-500 mb-2" />
        <h3 className="text-xl font-semibold">University of Management and Technology</h3>
      </div>

      <div className="text-center mb-4">
        <FontAwesomeIcon icon={faGraduationCap} size="2x" className="text-green-500 mb-2" />
        <h4 className="text-lg font-medium text-gray-700">Bachelor of Science: Physics</h4>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">Lahore Pakistan</p>
      </div>
    </div>
  </div>
  );
}

export default Education;
