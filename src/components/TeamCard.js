// components/TeamCard.js
import React from "react";
import Link from "next/link";
import Image from "next/image";


const TeamCard = ({ member, flipped, toggleFlip }) => {
  return (
    <div 
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-[420px] [perspective:1000px] cursor-pointer"
      onClick={() => toggleFlip(member.id)}
    >
      <div className={`flip-card-inner relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* Front of Card */}
        <div className="flip-card-front absolute inset-0 [backface-visibility:hidden]">
          <div className="flex flex-col items-center pb-10 h-full">
            {/* Image container with conditional rendering */}
            <div className="w-30 h-40 rounded-lg mb-3 mt-10 overflow-hidden relative">
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={`${member.name}'s profile`}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  priority={false}
                />
              ) : (
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-indigo-500">
                    {member.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {member.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {member.designation}
            </span>
            <div className="flex mt-4 md:mt-6">
              <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFlip(member.id);
                }}
              >
                View Details
              </button>
              <Link
                href={`mailto:${member.email}`}
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={e => e.stopPropagation()}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="flip-card-back absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-auto">
          <div className="flex justify-end px-4 pt-4">
            <button
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5"
              onClick={(e) => {
                e.stopPropagation();
                toggleFlip(member.id);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="px-6 pb-6">
            {/* Profile image on back */}
            <div className="flex items-center mt-2 gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden relative">
                {member.imageUrl ? (
                  <Image
                    src={member.imageUrl}
                    alt={`${member.name}'s profile`}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                    priority={false}
                  />
                ) : (
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 w-full h-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-indigo-500">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400">{member.designation}</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">About</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{member.bio}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Contact</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  <Link 
                    href={`mailto:${member.email}`} 
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={e => e.stopPropagation()}
                  >
                    {member.email}
                  </Link>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.phone}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Expertise</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {member.expertise.map((skill, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Connect</h4>
                <div className="flex space-x-4 mt-2">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <Link
                      key={platform}
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={e => e.stopPropagation()}
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;