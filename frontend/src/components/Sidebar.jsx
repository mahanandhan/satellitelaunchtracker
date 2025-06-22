import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await axios.post('https://satellitelaunchtracker-1.onrender.com/api/user/logout', { withCredentials: true });
      if (response.status === 200) {
        alert("Logged out successfully");
        navigate('/');
      } else {
        alert("Failed to log out. Please try again later.");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Failed to log out. Please try again later.");
    }
  }
  return (
    <div
      className={`h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-black text-white shadow-md transition-all duration-300 ${
        isOpen ? 'w-52' : 'w-16'
      } flex flex-col items-center py-6 pb-400`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-6 px-3 py-2 text-sm bg-white text-black rounded-lg hover:bg-gray-300 transition-all duration-300 active:bg-gray-400 cursor-pointer"
      >
        {isOpen ? '←' : '→'}
      </button>

      {/* Navigation Items */}
      <ul className="space-y-6 w-full px-2">
        {/* Home */}
        <li
          onClick={() => navigate('/home')}
          className="relative group flex items-center hover:bg-gray-800 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300"
        >
          <span>🏠</span>
          {isOpen ? (
            <span className="ml-3">Home</span>
          ) : (
            <span className="absolute left-full ml-2 px-2 py-1 text-sm bg-black text-white rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 whitespace-nowrap">
              Home
            </span>
          )}
        </li>

        {/* About */}
        <li
          onClick={() => navigate('/about')}
          className="relative group flex items-center hover:bg-gray-800 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300"
        >
          <span>👨‍💻</span>
          {isOpen ? (
            <span className="ml-3">About</span>
          ) : (
            <span className="absolute left-full ml-2 px-2 py-1 text-sm bg-black text-white rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 whitespace-nowrap">
              About
            </span>
          )}
        </li>

        {/* Upcoming */}
        <li
          onClick={() => navigate('/upcomming')}
          className="relative group flex items-center hover:bg-gray-800 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300"
        >
          <span>🚀</span>
          {isOpen ? (
            <span className="ml-3">Upcoming Launches</span>
          ) : (
            <span className="absolute left-full ml-2 px-2 py-1 text-sm bg-black text-white rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 whitespace-nowrap">
              Upcoming Launches
            </span>
          )}
        </li>
        {/* Success */}
        <li
          onClick={() => navigate('/success')}
          className="relative group flex items-center hover:bg-gray-800 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300"
        >
          <span>✅</span>
          {isOpen ? (
            <span className="ml-3">Success Launches</span>
          ) : (
            <span className="absolute left-full ml-2 px-2 py-1 text-sm bg-black text-white rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 whitespace-nowrap">
              Success Launches
            </span>
          )}
        </li>

        {/* Past */}
        <li
          onClick={() => navigate('/past')}
          className="relative group flex items-center hover:bg-gray-800 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300"
        >
          <span>📅</span>
          {isOpen ? (
            <span className="ml-3">Falied Launches</span>
          ) : (
            <span className="absolute left-full ml-2 px-2 py-1 text-sm bg-black text-white rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 whitespace-nowrap">
              Failed Launches
            </span>
          )}
        </li>

        {/* Settings */}
        <li
          onClick={() => navigate('/settings')}
          className="relative group flex items-center hover:bg-gray-800 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300"
        >
          <span>⚙️</span>
          {isOpen ? (
            <span className="ml-3">Settings</span>
          ) : (
            <span className="absolute left-full ml-2 px-2 py-1 text-sm bg-black text-white rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 whitespace-nowrap">
              Settings
            </span>
          )}
        </li>

        {/* Logout */}
        <li
          onClick={handleLogout}
          className="relative group flex items-center hover:bg-gray-800 px-3 py-2 rounded-lg cursor-pointer text-red-400 transition-all duration-300"
        >
          <span>🚪</span>
          {isOpen ? (
            <span className="ml-3">Logout</span>
          ) : (
            <span className="absolute left-full ml-2 px-2 py-1 text-sm bg-red-600 text-white rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
              Logout
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
