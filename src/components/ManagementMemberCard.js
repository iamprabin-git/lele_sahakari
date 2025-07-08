// src/components/management/ManagementMemberCard.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ManagementMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          <div className="ml-4">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-primary-600">{member.designation}</p>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{member.bio}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {member.expertise.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-between border-t pt-4">
          <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-primary-600">
            <FaEnvelope className="text-xl" />
          </a>
          <a 
            href={member.social.facebook} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a 
            href={member.social.whatsapp} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-500"
          >
            <FaWhatsapp className="text-xl" />
          </a>
          <a 
            href={member.social.instagram} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-600"
          >
            <FaInstagram className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ManagementMemberCard;