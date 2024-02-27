// pages/about.js
"use client"
import React from 'react';

const About = () => {
  const handleTextAnimation = () => {
    const textContainer = document.getElementById('text-container');
    textContainer.classList.add('animate-slide-in');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-10/12 md:w-8/12 lg:w-6/12 text-white p-4">
        <h1 className="text-3xl font-bold mb-4 text-white">About TechSpark</h1>
        <p className="text-white-600 mb-6">
          Welcome to TechSpark, your gateway to high-quality IT training. At TechSpark, we pride ourselves on delivering cutting-edge courses facilitated by industry experts currently working in top product-based companies.
        </p>
        <p className="text-white-600 mb-6">
          Our mission is to equip aspiring individuals like you with the skills and knowledge needed to thrive in the dynamic field of technology. The courses we offer cover a wide range of IT disciplines, ensuring a comprehensive learning experience.
        </p>
        <p className="text-white-600 mb-6">
          Our faculty comprises recognized professionals who bring real-world insights and practical expertise to the classroom. This direct industry exposure sets TechSpark apart, providing you with valuable perspectives and hands-on skills.
        </p>
        <p className="text-white-600 mb-6">
          Join us at TechSpark and embark on a journey of skill enhancement, career growth, and a brighter future in the world of technology.
        </p>
        <div
          id="text-container"
          className="hidden transform translate-x-[-100%] transition-transform duration-500 ease-in-out"
        >
          <p className="text-black">
            Start your learning journey with us today!
          </p>
        </div>
        <button
          onClick={handleTextAnimation}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Click to Reveal
        </button>
      </div>
    </div>
  );
};

export default About;
