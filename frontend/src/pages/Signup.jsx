import React, { useState } from 'react';
import axios from 'axios'; // ✅ Make sure this is imported

const Signup = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault(); // ✅ Prevent form reload
    try {
      const response = await axios.post('http://localhost:3000/api/user/register', {
        username,
        email,
        password
      });

      if (response.status === 201) {
        alert('Signup successful! You can now login.');
      }
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className='h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden bg-transparent' style={{ backgroundImage: `url(./src/assets/bgisropro.png)` }}>
      <div className='flex flex-col gap-6 border border-white p-8 rounded-2xl bg-gray-800 shadow-2xl'>
        <h1 className='text-2xl flex justify-center font-bold text-white'>Signup</h1>
        <form onSubmit={handleSignup} className='flex flex-col gap-6'>
          <input
            className='text-white placeholder:text-white border border-white p-3 rounded-2xl w-sm'
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Enter your name'
            required
          />
          <input
            className='text-white placeholder:text-white border border-white p-3 rounded-2xl w-sm'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            required
          />
          <input
            className='text-white placeholder:text-white border border-white p-3 rounded-2xl w-sm'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            required
          />

          <div className='flex justify-center'>
            <button
              type="submit"
              className='text-white border border-white p-3 w-sm rounded-2xl cursor-pointer hover:bg-gray-600 transition duration-400 active:bg-gray-700'
            >
              Signup
            </button>
          </div>

          <p className='text-white'>
            Already have an account? <a href="/" className='text-blue-500 cursor-pointer'>Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
