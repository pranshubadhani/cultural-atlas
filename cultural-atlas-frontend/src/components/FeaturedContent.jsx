import React from 'react';

function FeaturedContent() {
  const featuredItems = [
    {
      title: 'Traditional Music',
      description: 'Explore the rich musical traditions of India, from classical to folk music.',
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.rGp4R4toas_K9nR3UsK5qwHaDh&pid=Api&P=0&h=180', // Replace with the actual image URL
    },
    {
      title: 'Art and Sculpture',
      description: 'Discover the intricate art and sculpture works from different regions of India.',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.D8Wc6RAQQ-_QlDPxhs7I8AHaJ3&pid=Api&P=0&h=180', // Replace with the actual image URL
    },
    {
      title: 'Festivals and Celebrations',
      description: 'Learn about the vibrant festivals and celebrations that define India\'s culture.',
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.7ODnCft3xuPblVjXCmgZKAHaE8&pid=Api&P=0&h=180', // Replace with the actual image URL
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-lg">
              <img src={item.imageUrl} alt={item.title} className="mb-4 w-full h-32 object-cover" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedContent;
