import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  const settingsOptions = [
    { id: 1, name: 'Profile Settings', path: '/profile' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Home', path: '/home' },
    { id: 4, name: 'Upcoming Launches', path: '/upcomming' },
    { id: 5, name: 'Past Launches', path: '/past' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <Navbar />

      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>

      <div className="mt-8 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {settingsOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => navigate(option.path)}
              className="bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <h2 className="text-xl font-semibold">{option.name}</h2>
              <p className="text-sm mt-2 text-white border border-blue-500 bg-blue-500 p-4 rounded-2xl hover:bg-blue-600 transition duration-300 active:bg-blue-700">Click to navigate</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
