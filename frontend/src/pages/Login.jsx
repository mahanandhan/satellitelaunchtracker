import React, { useState } from 'react';
import axios from 'axios'; // Don't forget this import
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Import useNavigate from 'react-router-dom' if not already done
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form reload
    try {
      const response = await axios.post('https://satellitelaunchtracker-1.onrender.com/api/user/login', {
        email,
        password
      }, { withCredentials: true });

      if (response.status === 200) {
        alert('Login successful!');
        navigate('/dashboard'); // Navigate to the dashboard or any other page after successful login
        // You can navigate to dashboard or set auth token here
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div
      className="h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden bg-transparent"
      style={{ backgroundImage: `url(/bgisropro.png)` }}
    >
      <div className="flex flex-col gap-6 border border-white p-8 rounded-2xl bg-gray-800 shadow-2xl">
        <h1 className="text-2xl flex justify-center font-bold text-white">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <input
            className="text-white placeholder:text-white border border-white p-3 rounded-2xl w-sm"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <input
            className="text-white placeholder:text-white border border-white p-3 rounded-2xl w-sm"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white border border-white p-3 w-sm rounded-2xl cursor-pointer hover:bg-gray-600 transition duration-400 active:bg-gray-700"
            >
              Login
            </button>
          </div>
          <p className="text-white">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="text-blue-500 cursor-pointer">
              Signup
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
