import React from 'react';

function Projects() {
  return (
    <div>
      {/* First Row of Projects */}
      <div className="flex flex-wrap justify-center">

        <div className="w-[40%] h-[40%] bg-white p-5 m-2 md:m-6 lg:m-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-100 overflow-auto">
          <div className="bg-blue-500 text-white p-1 rounded-t-lg text-center">
            <h2>Portfolio and Task Manager (React.js & jQuery)</h2>
          </div>
          <div className="p-5">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Built a responsive portfolio using <span className="font-semibold text-indigo-600">React.js</span> with <span className="font-semibold text-indigo-600">React Router</span> for seamless navigation.</li>
              <li>Implemented dynamic routing and page transitions in the portfolio using <span className="font-semibold text-indigo-600">React Router</span>.</li>
              <li>Developed a dynamic task manager with <span className="font-semibold text-indigo-600">jQuery</span> and <span className="font-semibold text-indigo-600">AJAX</span> for real-time updates.</li>
            </ul>
          </div>
        </div>

        <div className="w-[40%] h-[40%] bg-white p-5 m-2 md:m-6 lg:m-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-100 overflow-auto">
          <div className="bg-blue-500 text-white p-1 rounded-t-lg text-center">
            <h2>Ecommerce Website on WordPress</h2>
          </div>
          <div className="p-5">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Built a feature-rich e-commerce site using <span className="font-semibold text-indigo-600">Elementor</span> and <span className="font-semibold text-indigo-600">WooCommerce</span> for seamless product management.</li>
              <li>Integrated secure payment gateways and optimized for a user-friendly shopping experience.</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Second Row of Projects */}
      <div className="flex flex-wrap justify-center">

        <div className="w-[40%] h-[40%] bg-white p-5 m-2 md:m-6 lg:m-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-100 overflow-auto">
          <div className="bg-blue-500 text-white p-1 rounded-t-lg text-center">
            <h1>Laravel-DB Sync</h1>
          </div>
          <div className="p-5">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>The project enables smooth <span className="font-semibold text-indigo-600">CRUD operations</span>, allowing users to efficiently create, update, and delete records in the database, ensuring quick access to data.</li>
              <li>It incorporates functionality to add <span className="font-semibold text-indigo-600">dates</span> to entries, maintaining accurate timestamps and supporting seamless updates and deletions, preserving data integrity.</li>
            </ul>
          </div>
        </div>

        {/* Fourth Card (Program Section) */}
        <div className="w-[40%] h-[40%] bg-white p-5 m-2 md:m-6 lg:m-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-100 overflow-auto">
          <div className="bg-blue-500 text-white p-1 rounded-t-lg text-center">
            <h1 className="text-3xl font-semibold">Programs</h1>
          </div>
          <div className="p-5">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><span className="font-bold">ATM Program:</span> This <span className="font-semibold text-indigo-600">C++</span> program simulates basic ATM operations like deposit, withdrawal, and balance check.</li>
              <li><span className="font-bold">Calculator Program:</span> A simple <span className="font-semibold text-indigo-600">Python</span> calculator that performs basic arithmetic operations (addition, subtraction, multiplication, division).</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
