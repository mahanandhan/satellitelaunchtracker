import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen w-full m-0 p-0 bg-gradient-to-r from-indigo-900 via-blue-900 to-black text-white shadow-md overflow-x-hidden'>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">About Us</h1>

        <p className="text-lg text-gray-200 leading-relaxed">
          Welcome to our Delivery Management System – a modern, efficient, and intelligent platform built to streamline local deliveries in real-time. Whether you're a business owner, delivery agent, or customer, our system is designed to make order management, tracking, and fulfillment faster and smarter.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">What We Do</h2>
        <p className="text-gray-200 leading-relaxed">
          We connect local hubs with delivery agents and customers through a simple, automated system that assigns orders, tracks deliveries, and ensures smooth logistics – all in one dashboard. From order placement to doorstep delivery, we take care of every step.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">Why Choose Us</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2">
          <li>⚡ Real-time delivery assignment based on city or hub</li>
          <li>📦 Transparent order tracking system for customers and agents</li>
          <li>✅ Efficient dashboard for delivery members to manage tasks</li>
          <li>🛠️ Built with modern full-stack technology (MERN)</li>
        </ul>

        <p className="mt-8 text-gray-400 text-sm text-center">
          Made with ❤️ by Mahanandhan — passionate about building smarter web solutions for real-world problems.
        </p>
      </div>
    </div>
  );
};

export default About;
