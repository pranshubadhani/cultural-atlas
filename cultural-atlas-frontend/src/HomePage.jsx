import React from 'react';
import Hero from './components/Hero';

import FeaturedContent from './components/FeaturedContent';
import UserContribution from './components/UserContribution';
import UpcomingFestivals from './components/UpcomingFestivals';

function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedContent />
      <UserContribution/>
      <UpcomingFestivals />
      {/* Additional content and sections can be added here */}
    </div>
  );
}

export default HomePage;
