import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainCenter from './components/MainCenter'
import Home from './pages/Home'
import Create from './pages/Create'
import LaunchData from './pages/LaunchData'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<MainCenter />} />
        <Route path="/create" element={<Create />} />
        <Route path="/launch-data" element={<LaunchData />} />
      </Routes>
    </div>
  )
}

export default App
