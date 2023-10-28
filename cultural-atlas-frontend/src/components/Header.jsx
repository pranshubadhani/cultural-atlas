import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-100">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-semibold text-blue-600">The Cultural Atlas</Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/map" className="text-gray-600 hover:text-blue-600 transition duration-300">Interactive Map</Link>
          </li>
          <li>
            <Link to="/tours" className="text-gray-600 hover:text-blue-600 transition duration-300">Virtual Tours</Link>
          </li>
          <li>
            <Link to="/art" className="text-gray-600 hover:text-blue-600 transition duration-300">Art Galleries</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
