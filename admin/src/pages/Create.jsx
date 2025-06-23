import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [creater, setCreater] = useState('');
  const [status, setStatus] = useState('Shulded');
  const [sendTo, setSendTo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent reload

    try {
      const response = await axios.post('https://satellitelaunchtracker-1.onrender.com/api/satellite/create', {
        name,
        description,
        creater,
        status,
        sendTo
      });

      if (response.status === 201) {
        alert('🚀 Launch created successfully!');
        setName('');
        setDescription('');
        setCreater('');
        setStatus('Shulded');
        setSendTo('');
      } else {
        alert('❌ Failed to create launch. Please try again.');
      }
    } catch (error) {
      console.error('Error creating launch:', error);
      alert('❌ Failed to create launch. Check server console for details.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-black text-white p-4">
      <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">🚀 Create New Launch</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Launch Name */}
          <div>
            <label htmlFor="launchName" className="block text-sm font-medium text-gray-700 mb-1">Launch Name:</label>
            <input
              type="text"
              id="launchName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Created By */}
          <div>
            <label htmlFor="creater" className="block text-sm font-medium text-gray-700 mb-1">Created By:</label>
            <input
              type="text"
              id="creater"
              value={creater}
              onChange={(e) => setCreater(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Send To */}
          <div>
            <label htmlFor="sendTo" className="block text-sm font-medium text-gray-700 mb-1">Send To:</label>
            <input
              type="text"
              id="sendTo"
              value={sendTo}
              onChange={(e) => setSendTo(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status:</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="shulded">Shulded</option>
              <option value="success">Success</option>
              <option value="failed">Failed</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Create Launch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
