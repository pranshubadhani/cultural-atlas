import React from 'react';

// Sample data for upcoming festivals
const upcomingFestivals = [
  {
    name: 'Diwali Festival',
    date: 'October 28, 2023',
    location: 'Throughout India',
  },
  {
    name: 'Holi Festival',
    date: 'March 17, 2024',
    location: 'Various Cities',
  },
  {
    name: 'Navaratri Festival',
    date: 'September 30, 2024',
    location: 'Gujarat',
  },
];

function UpcomingFestivals() {
  return (
    <div className="bg-gray-100 p-4 md:p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Upcoming Festivals</h2>
        <ul>
          {upcomingFestivals.map((festival, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{festival.name}</h3>
              <p className="text-gray-600">{festival.date}</p>
              <p className="text-gray-600">{festival.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UpcomingFestivals;
