import React from 'react';

function Hero() {
  return (
    <div className="bg-indigo-800 text-white py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold">Explore the Rich Cultural Heritage of India</h1>
        <p className="mt-4 text-lg">Discover the diversity of traditions, art, and festivals.</p>
        <button className="mt-8 bg-yellow-500 text-indigo-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
          Start Exploring
        </button>
      </div>
    </div>
  );
}

export default Hero;
