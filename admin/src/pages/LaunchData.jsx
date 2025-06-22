import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LaunchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://satellitelaunchtracker-1.onrender.com/api/satellite/posts', { withCredentials: true });
        if (response.status === 200) {
          setData(response.data.posts);
          alert('🚀 Launch data fetched successfully!');
        } else {
          alert('❌ Failed to fetch launch data. Please try again.');
        }
      } catch (error) {
        console.error('Error fetching launch data:', error);
        alert('❌ Failed to fetch launch data. Check server console for details.');
      }
    };

    fetchData();
  }, []);

const handleDelete = async (id) => {
  try {
    const response = await axios.delete(`https://satellitelaunchtracker-1.onrender.com/api/satellite/posts/${id}`, { withCredentials: true });
    if (response.status === 200) {
      setData(data.filter(item => item._id !== id));
      alert('🚀 Launch deleted successfully!');
    } else {
      alert('❌ Failed to delete launch. Please try again.');
    }
  } catch (error) {
    console.error('Error deleting launch:', error);
    alert('❌ Failed to delete launch. Check server console for details.');
  }
}

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🚀 Launch Data</h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-400">No launch data available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="bg-white text-black p-6 rounded-xl shadow-lg space-y-2">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Description:</strong> {item.description}</p>
              <p><strong>Created By:</strong> {item.creater}</p>
              <p><strong>Status:</strong> {item.status}</p>
              <p><strong>Send To:</strong> {item.sendTo}</p>
              <button onClick={() => handleDelete(item._id)} className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LaunchData;
