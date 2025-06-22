import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Past = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://satellitelaunchtracker-1.onrender.com/api/satellite/posts');
        if (response.status === 200) {
          setData(response.data.posts);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredFailed = data
    .filter(launch => launch.status === 'failed')
    .filter(launch => {
      const query = search.toLowerCase();
      return (
        !query ||
        launch.name.toLowerCase().includes(query) ||
        launch.status.toLowerCase().includes(query) ||
        (launch.description?.toLowerCase() || '').includes(query) ||
        launch.creater.toLowerCase().includes(query) ||
        launch.sendTo.toLowerCase().includes(query)
      );
    });

  return (
    <div className='min-h-screen w-full flex flex-col bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white border border-white'>
      <Navbar />

      <div className='mt-4'>
        <h1 className='text-3xl font-bold flex justify-center'>Past Launches</h1>
      </div>

      <div className='flex justify-center mt-4'>
        <h2 className='text-xl font-bold border border-white p-3 rounded-2xl bg-gray-800'>
          Failed Status
        </h2>
      </div>

      {/* 🔍 Search Bar */}
      <div className='px-6 mt-6 border border-white rounded-lg bg-gray-800 placeholder:gray-400'>
        <input
          type='text'
          placeholder='Search failed launches...'
          value={search}
          onChange={handleSearch}
          className='w-full p-2 rounded-md text-black'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>
        {filteredFailed.map((launch) => (
          <div key={launch._id} className='bg-gray-800 m-4 p-4 rounded-lg shadow-lg'>
            <h2 className='text-xl font-semibold'>Name: {launch.name}</h2>
            <p className='mt-2 text-gray-300'>Description: {launch.description}</p>
            <p className='mt-2'><strong>Created By:</strong> {launch.creater}</p>
            <p className='mt-2'><strong>Send To:</strong> {launch.sendTo}</p>
            <p className='mt-2'>
              <strong>Status:</strong>{' '}
              <span className='bg-red-500 text-black p-1 rounded'>{launch.status}</span>
            </p>
            <button
              onClick={() => navigate(`/graphs/${launch._id}`)}
              className='text-white border border-blue-700 p-2 mt-2 rounded-xl bg-blue-700 hover:bg-blue-800 transition duration-300 cursor-pointer active:bg-blue-900'
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Past;
