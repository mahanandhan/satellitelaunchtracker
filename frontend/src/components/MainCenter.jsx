import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainCenter = () => {
  const upcomingLaunches = [
    { id: 1, mission: 'Gaganyaan Test Flight', date: '2025-07-15', location: 'Sriharikota', vehicle: 'GSLV Mk III', status: 'Scheduled' },
    { id: 2, mission: 'Chandrayaan-4', date: '2025-09-05', location: 'Sriharikota', vehicle: 'LVM3', status: 'In Preparation' },
    { id: 3, mission: 'Aditya-L2 Solar Probe', date: '2025-10-20', location: 'Sriharikota', vehicle: 'PSLV-C57', status: 'Scheduled' },
    { id: 4, mission: 'RISAT-3 Earth Observation', date: '2025-08-12', location: 'Sriharikota', vehicle: 'PSLV-C59', status: 'Ready' },
    { id: 5, mission: 'NavIC IRNSS-1J', date: '2025-11-01', location: 'Sriharikota', vehicle: 'GSLV-F12', status: 'Scheduled' },
    { id: 6, mission: 'GSAT-25 Communications', date: '2025-12-18', location: 'Sriharikota', vehicle: 'GSLV Mk II', status: 'Under Testing' },
    { id: 7, mission: 'Cartosat-4 Mapping Satellite', date: '2026-01-10', location: 'Sriharikota', vehicle: 'PSLV-C61', status: 'Scheduled' },
    { id: 8, mission: 'INSAT-4D Weather Satellite', date: '2026-02-08', location: 'Sriharikota', vehicle: 'GSLV Mk III', status: 'Awaiting Clearance' },
    { id: 9, mission: 'SPARK Student Satellite', date: '2026-03-20', location: 'Sriharikota', vehicle: 'SSLV-D4', status: 'Confirmed' },
    { id: 10, mission: 'Mars Orbiter Mission 2', date: '2026-04-15', location: 'Sriharikota', vehicle: 'GSLV Mk III', status: 'Scheduled' },
    { id: 14, mission: 'NISAR Earth Imaging', date: '2026-08-15', location: 'Sriharikota', vehicle: 'GSLV Mk II', status: 'Ready' },
    { id: 18, mission: 'ResourceSat-4 Earth Resource', date: '2026-12-25', location: 'Sriharikota', vehicle: 'PSLV-C66', status: 'Scheduled' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white sm:justify-between md:justify-between lg:justify-between xl:justify-between 2xl:justify-between">
      {/* Navbar */}
      <Navbar className="sm:w-2 md:w-full lg:w-full xl:w-full 2xl:w-full"/>

      {/* Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Scheduled */}
          <h1 className="text-2xl font-bold mb-4">Scheduled Launches</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {upcomingLaunches.filter(l => l.status === 'Scheduled').map(launch => (
              <div key={launch.id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
                <h2 className="text-xl font-semibold">{launch.mission}</h2>
                <p>Date: {new Date(launch.date).toLocaleDateString()}</p>
                <p>Location: {launch.location}</p>
                <p>Vehicle: {launch.vehicle}</p>
                <p>Status: <span className="bg-yellow-500 text-black px-2 py-1 rounded">{launch.status}</span></p>
                <button className="mt-3 w-full text-white border border-blue-500 p-2 rounded-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700">Details</button>
              </div>
            ))}
          </div>

          {/* Ready */}
          <h1 className="text-2xl font-bold mb-4">Ready Launches</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {upcomingLaunches.filter(l => l.status === 'Ready').map(launch => (
              <div key={launch.id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
                <h2 className="text-xl font-semibold">{launch.mission}</h2>
                <p>Date: {new Date(launch.date).toLocaleDateString()}</p>
                <p>Location: {launch.location}</p>
                <p>Vehicle: {launch.vehicle}</p>
                <p>Status: <span className="bg-green-500 text-black px-2 py-1 rounded">{launch.status}</span></p>
                <button className="mt-3 w-full text-white border border-blue-500 p-2 rounded-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700">Details</button>
              </div>
            ))}
          </div>

          {/* Confirmed */}
          <h1 className="text-2xl font-bold mb-4">Confirmed Launches</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {upcomingLaunches.filter(l => l.status === 'Confirmed').map(launch => (
              <div key={launch.id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
                <h2 className="text-xl font-semibold">{launch.mission}</h2>
                <p>Date: {new Date(launch.date).toLocaleDateString()}</p>
                <p>Location: {launch.location}</p>
                <p>Vehicle: {launch.vehicle}</p>
                <p>Status: <span className="bg-blue-500 text-black px-2 py-1 rounded">{launch.status}</span></p>
                <button className="mt-3 w-full text-white border border-blue-500 p-2 rounded-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700">Details</button>
              </div>
            ))}
          </div>

          {/* Under Testing */}
          <h1 className="text-2xl font-bold mb-4">Under Testing Launches</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {upcomingLaunches.filter(l => l.status === 'Under Testing').map(launch => (
              <div key={launch.id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
                <h2 className="text-xl font-semibold">{launch.mission}</h2>
                <p>Date: {new Date(launch.date).toLocaleDateString()}</p>
                <p>Location: {launch.location}</p>
                <p>Vehicle: {launch.vehicle}</p>
                <p>Status: <span className="bg-red-500 text-black px-2 py-1 rounded">{launch.status}</span></p>
                <button className="mt-3 w-full text-white border border-blue-500 p-2 rounded-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700">Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCenter;
