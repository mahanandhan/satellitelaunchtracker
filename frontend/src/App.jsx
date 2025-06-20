import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MainCenter from './components/MainCenter'
import Home from './pages/Home'
import Upcomming from './pages/Upcomming'
import Past from './pages/Past'
import Graphs from './pages/Graphs'
import About from './pages/About'
import Navbar from './components/Navbar'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-none scrollbar-hidden'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard' element={<MainCenter />} />
        <Route path='/home' element={<Home />} />
        <Route path='/upcomming' element={<Upcomming />} />
        <Route path='/past' element={<Past />} />
        <Route path='/satellite/:id/graphs' element={<Graphs />} />
        <Route path='/about' element={<About />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}
export default App
