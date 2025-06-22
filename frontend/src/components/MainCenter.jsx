import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MainCenter = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://satellitelaunchtracker-1.onrender.com/api/satellite/posts');
        if (response.status === 200) {
          setData(response.data.posts);
        } else {
          alert("Failed to fetch data. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch data. Please try again later.");
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter(launch =>
    launch.name.toLowerCase().includes(search) ||
    launch.status.toLowerCase().includes(search) ||
    (launch.date?.toLowerCase() || '').includes(search) ||
    launch.creater.toLowerCase().includes(search) ||
    launch.description.toLowerCase().includes(search)
  );

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (fixed width) */}
        <div className="">
          <Sidebar />
        </div>

        {/* Main Content (scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-hidden">
          <h1 className="text-3xl font-bold mb-6 text-center">Satellite Launch Tracker</h1>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Scheduled */}
          <h1 className="text-2xl font-bold mb-4">Scheduled Launches</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {filteredData.filter(l => l.status === 'shulded').map(launch => (
              <div key={launch._id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
                <h2 className="text-xl font-semibold">Name: {launch.name}</h2>
                <p>Description: {launch.description}</p>
                <p>Created By: {launch.creater}</p>
                <p>Send To: {launch.sendTo}</p>
                <p>Status: <span className="bg-yellow-500 text-black px-2 py-1 rounded">{launch.status}</span></p>
                <button onClick={() => navigate(`/graphs/${launch._id}`)} className="mt-3 w-full text-white border border-blue-500 p-2 rounded-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700">Details</button>
              </div>
            ))}
          </div>

          {/* Success */}
          <h1 className="text-2xl font-bold mb-4">Success Launches</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {filteredData.filter(l => l.status === 'success').map(launch => (
              <div key={launch._id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
                <h2 className="text-xl font-semibold">Name: {launch.name}</h2>
                <p>Description: {launch.description}</p>
                <p>Created By: {launch.creater}</p>
                <p>Send To: {launch.sendTo}</p>
                <p>Status: <span className="bg-green-500 text-black px-2 py-1 rounded">{launch.status}</span></p>
                <button onClick={() => navigate(`/graphs/${launch._id}`)} className="mt-3 w-full text-white border border-blue-500 p-2 rounded-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700">Details</button>
              </div>
            ))}
          </div>

          {/* Failed */}
          <h1 className="text-2xl font-bold mb-4">Failed Launches</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {filteredData.filter(l => l.status === 'failed').map(launch => (
              <div key={launch._id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
                <h2 className="text-xl font-semibold">Name: {launch.name}</h2>
                <p>Description: {launch.description}</p>
                <p>Created By: {launch.creater}</p>
                <p>Send To: {launch.sendTo}</p>
                <p>Status: <span className="bg-red-500 text-black px-2 py-1 rounded">{launch.status}</span></p>
                <button onClick={() => navigate(`/graphs/${launch._id}`)} className="mt-3 w-full text-white border border-blue-500 p-2 rounded-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700">Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCenter;
