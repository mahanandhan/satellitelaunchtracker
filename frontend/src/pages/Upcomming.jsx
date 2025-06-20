import React from 'react'
import Navbar from '../components/Navbar';

const Upcomming = () => {

 const upcomingLaunches = [
  {
    id: 1,
    mission: 'Gaganyaan Test Flight',
    date: '2025-07-15',
    location: 'Sriharikota',
    vehicle: 'GSLV Mk III',
    status: 'Scheduled',
  },
  {
    id: 2,
    mission: 'Chandrayaan-4',
    date: '2025-09-05',
    location: 'Sriharikota',
    vehicle: 'LVM3',
    status: 'In Preparation',
  },
  {
    id: 3,
    mission: 'Aditya-L2 Solar Probe',
    date: '2025-10-20',
    location: 'Sriharikota',
    vehicle: 'PSLV-C57',
    status: 'Scheduled',
  },
  {
    id: 4,
    mission: 'RISAT-3 Earth Observation',
    date: '2025-08-12',
    location: 'Sriharikota',
    vehicle: 'PSLV-C59',
    status: 'Ready',
  },
  {
    id: 5,
    mission: 'NavIC Satellite IRNSS-1J',
    date: '2025-11-01',
    location: 'Sriharikota',
    vehicle: 'GSLV-F12',
    status: 'Scheduled',
  },
  {
    id: 6,
    mission: 'GSAT-25 Communications',
    date: '2025-12-18',
    location: 'Sriharikota',
    vehicle: 'GSLV Mk II',
    status: 'Under Testing',
  },
  {
    id: 7,
    mission: 'Cartosat-4 Mapping Satellite',
    date: '2026-01-10',
    location: 'Sriharikota',
    vehicle: 'PSLV-C61',
    status: 'Scheduled',
  },
  {
    id: 8,
    mission: 'INSAT-4D Weather Satellite',
    date: '2026-02-08',
    location: 'Sriharikota',
    vehicle: 'GSLV Mk III',
    status: 'Awaiting Clearance',
  },
  {
    id: 9,
    mission: 'SPARK Student Satellite',
    date: '2026-03-20',
    location: 'Sriharikota',
    vehicle: 'SSLV-D4',
    status: 'Confirmed',
  },
  {
    id: 10,
    mission: 'Mars Orbiter Mission 2',
    date: '2026-04-15',
    location: 'Sriharikota',
    vehicle: 'GSLV Mk III',
    status: 'Scheduled',
  },
];

  return (
    <div className='min-h-screen w-full flex flex-col bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white'>
      <div>
        <Navbar />
      </div>
      <div>
        <h1 className='text-2xl font-bold flex justify-center'>Upcomming Launches</h1>
      </div>
      <div className='flex justify-center mt-4'>
        <h1 className='text-2xl font-bold border border-white p-3 rounded-2xl bg-gray-800'>scheduled status</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>
        {upcomingLaunches.filter(launch => launch.status === 'Scheduled').map((launch, index) => {
          return <div key={launch.id}>
            <div key={index} className='bg-gray-800 m-4 p-4 rounded-lg shadow-lg'>
              <h2 className='text-xl font-semibold'>{launch.mission}</h2>
              <p className='mt-2'><strong>Date:</strong> {new Date(launch.date).toLocaleDateString()}</p>
              <p className='mt-2'><strong>Location:</strong> {launch.location}</p>
              <p className='mt-2'><strong>Status:</strong> <span className='bg-yellow-500 text-black p-1 rounded'>{launch.status}</span></p>
              <p className='mt-2'><strong>Vehicle:</strong> {launch.vehicle}</p>
              <button className='text-white border border-blue-700 p-2 mt-2 rounded-xl bg-blue-700 hover:bg-blue-800 transition duration-300 cursor-pointer active:bg-blue-900'>Details</button>
            </div>
          </div>
        })}
      </div>
      <div className='flex justify-center mt-4 border-t border-white pt-4'>
        <h1 className='text-2xl font-bold flex justify-center border border-white p-3 rounded-2xl bg-gray-800'>Other Launches</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>
        {upcomingLaunches.filter(launch => launch.status !== 'Scheduled').map((launch, index) => {
          return <div key={launch.id}>
            <div key={index} className='bg-gray-800 m-4 p-4 rounded-lg shadow-lg'>
              <h2 className='text-xl font-semibold'>{launch.mission}</h2>
              <p className='mt-2'><strong>Date:</strong> {new Date(launch.date).toLocaleDateString()}</p>
              <p className='mt-2'><strong>Location:</strong> {launch.location}</p>
              <p className='mt-2'><strong>Status:</strong> <span className='bg-red-500 text-white p-1 rounded'>{launch.status}</span></p>
              <p className='mt-2'><strong>Vehicle:</strong> {launch.vehicle}</p>
              <button className='text-white border border-blue-700 p-2 mt-2 rounded-xl bg-blue-700 hover:bg-blue-800 transition duration-300 cursor-pointer active:bg-blue-900'>Details</button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Upcomming
