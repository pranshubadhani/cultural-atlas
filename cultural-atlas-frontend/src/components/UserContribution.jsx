import React, { useState } from 'react';

function UserContribution() {
  const [contribution, setContribution] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle the user's contribution, such as submitting it to a server or database.
    // For now, we'll simply display an alert with the contribution.
    alert('User Contribution: ' + contribution);
  };

  return (
    <div className="bg-white p-4 md:p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">User Contributions</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-4 border border-gray-300 rounded mb-4"
            rows="4"
            placeholder="Share your contribution..."
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserContribution;
