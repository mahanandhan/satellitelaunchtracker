// MainCenter.jsx
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';

const MainCenter = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch satellite data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://satellitelaunchtracker-1.onrender.com/api/satellite/posts', { withCredentials: true });
        if (response.status === 200) {
          setData(response.data.posts);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load satellite data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <div className="h-16 bg-gray-800 shadow-md">
        <Navbar />
      </div>

      {/* Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 bg-gray-900 p-6 overflow-auto">
          <h1 className="text-2xl font-bold mb-6">🛰️ Satellite Launch Tracker</h1>

          {/* Loading State */}
          {loading && <p>Loading satellites...</p>}

          {/* Error State */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Satellite Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.length > 0 ? (
              data.map((item, index) => (
                <div key={index} className="bg-white text-black p-5 rounded-xl shadow-lg transition hover:shadow-xl">
                  <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                  <p><strong>Description:</strong> {item.description}</p>
                  <p><strong>Created By:</strong> {item.creater}</p>
                  <p><strong>Status:</strong> {item.status}</p>
                  <p><strong>Send To:</strong> {item.sendTo}</p>
                </div>
              ))
            ) : (
              <p>No satellite data found.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainCenter;