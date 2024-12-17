import React from 'react';

export default function Project() {
  return (
    <div className="min-h-screen bg-[#2C0101] flex flex-col items-center py-10">
      {/* Navigation
      <nav className="flex justify-end space-x-4 p-4 text-white w-full max-w-screen-lg">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/about" className="hover:text-gray-300">About</a>
        <a href="/projects" className="hover:text-gray-300">Projects</a>
        <a href="/contact" className="hover:text-gray-300">Contact Me</a>
      </nav> */}

      {/* Projects Title */}
      <h1 className="text-9xl shadow-slate-50 font-bold italic text-[#0A937C] mb-10">PROJECTS.</h1>

      {/* Projects Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg px-4">
        {/* Simple Calculator Project */}
        <div className="bg-[#280101] p-6 rounded-lg text-center text-white shadow-md">
          <h2 className="text-2xl font-bold mb-4">Simple Calculator</h2>
          <div className="p-4 bg-white rounded-lg">
            {/* Replace this section with actual calculator code if needed */}
            <p className="text-black">[Calculator UI]</p>
          </div>
          <img src='/pic/Simple calculator.png' alt='Simple Calculator' className='mt-4 rounded-lg shadow-md' />
        </div>

        {/* Student ID Card Project */}
        <div className="bg-[#280101] p-6 rounded-lg text-center text-white shadow-md">
          <h2 className="text-2xl font-bold mb-4">Student ID Card</h2>
          <div className="p-4 bg-white rounded-lg">
            {/* Replace this section with actual ID Card code if needed */}
            <p className="text-black">[ID Card UI]</p>
          </div>
          <img src='/pic/Id card.png' alt='Simple Calculator' className='mt-4 rounded-lg shadow-md' />
        </div>

        {/* Registration Form Project */}
        <div className="bg-[#280101] p-6 rounded-lg text-center text-white shadow-md">
          <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
          <div className="p-4 bg-white rounded-lg">
            {/* Replace this section with actual form code if needed */}
            <p className="text-black">[Registration Form UI]</p>
          </div>
          <img src='/pic/regestration.png' alt='Simple Calculator' className='mt-4 rounded-lg shadow-md' />
        </div>
      </div>
    </div>
  );
}