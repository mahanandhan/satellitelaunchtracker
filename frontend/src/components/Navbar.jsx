import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center border border-black p-3 bg-gradient-to-r from-indigo-900 via-blue-900 to-black text-white shadow-md">
      
      {/* Logo */}
      <div className="w-full flex justify-between items-center sm:w-auto">
        <h1
          onClick={() => navigate('/home')}
          className="text-2xl font-bold cursor-pointer hover:text-gray-300 transition duration-300 active:text-gray-400"
        >
          Satellite Tracker
        </h1>

        {/* Hamburger Button (Visible on Small Screens) */}
        <button
          className="sm:hidden text-white text-2xl focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Nav Links */}
      <div className={`flex-col sm:flex sm:flex-row gap-4 mt-3 sm:mt-0 ${isOpen ? 'flex' : 'hidden'} sm:ml-0`}>
        <h3
          onClick={() => navigate('/home')}
          className="cursor-pointer hover:text-gray-300 transition duration-300 active:text-gray-400"
        >
          Home
        </h3>
        <h3
          onClick={() => navigate('/about')}
          className="cursor-pointer hover:text-gray-300 transition duration-300 active:text-gray-400"
        >
          About
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
