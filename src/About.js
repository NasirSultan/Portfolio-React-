import React from 'react';

function About() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200 space-y-6">
    <div className="w-10/12 md:w-7/12 lg:w-2/3 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
      <div className="bg-blue-500 text-white p-4 rounded-t-lg text-center">
        <h1 className="text-3xl font-semibold">Frontend Developer: </h1>
      </div>
      <div className="p-6">
      <p>
  As a frontend web developer, I use technologies like 
  <span class="font-semibold text-indigo-600">HTML</span>, 
  <span class="font-semibold text-indigo-600">CSS</span>, 
  <span class="font-semibold text-indigo-600">JavaScript</span>, 
  and <span class="font-semibold text-indigo-600">React.js</span> to create dynamic and responsive user interfaces. 
  <span class="font-semibold text-indigo-600">Tailwind CSS</span> and 
  <span class="font-semibold text-indigo-600">Bootstrap</span> help me quickly build clean, customizable designs that adapt to all devices.
</p>
      </div>
    </div>

    <div className="w-10/12 md:w-7/12 lg:w-2/3 bg-white p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
      <div className="bg-green-500 text-white p-4 rounded-t-lg text-center">
        <h1 className="text-3xl font-semibold">Backend Developer: </h1>
      </div>
      <div className="p-6">
      <p>
  As a backend developer, I work with <span class="font-bold text-indigo-600">PHP</span> and the <span class="font-bold text-green-600">Laravel</span> framework to build scalable, secure applications, integrating databases using <span class="font-bold text-yellow-500">SQL</span> and version control systems like <span class="font-bold text-red-600">Git</span>. I also leverage <span class="font-bold text-blue-600">Python</span>, <span class="font-bold text-purple-600">MATLAB</span>, and <span class="font-bold text-gray-600">C++</span> for complex data processing and backend logic.
</p>

      </div>
    </div>
  </div>
  );
}

export default About;