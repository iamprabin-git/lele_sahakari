"use client";
import TeamCard from '@/components/TeamCard';
import { teamMembers } from '@/constants/teamMembers';
import React, { useState } from 'react';


const TeamPage = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-22 px-4 sm:px-6 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl dark:text-white">
            Our Boardmembers Team
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Meet the experienced professionals dedicated to helping you achieve your financial goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard 
              key={member.id}
              member={member}
              flipped={flippedCards[member.id]}
              toggleFlip={toggleFlip}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;