import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'tailwindcss/tailwind.css';


import Header from './components/Header';
import FeaturedContent from './components/FeaturedContent';
import UserContribution from './components/UserContribution';
import UpcomingFestivals from './components/UpcomingFestivals';

// Import the HomePage component from its actual location
import HomePage from './HomePage'; 

import InteractiveMap from './components/InteractiveMap';

function App() {
  return (
    <Router>
      <Header /> {/* Render the header on every page */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/featured" element={<FeaturedContent />} />
        <Route path="/contributions" element={<UserContribution />} />
        <Route path="/festivals" element={<UpcomingFestivals />} />
        <Route path='/map' element={<InteractiveMap/>} />
        {/* Add more routes and components as needed */}
      </Routes>
    </Router>
  );
}

export default App;
