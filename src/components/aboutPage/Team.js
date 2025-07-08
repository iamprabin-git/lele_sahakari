import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import { managementMembers } from '@/constants/managementTeam';


function Team({ activeTab }) {
  return activeTab === 'team' ? (
    <motion.section 
      className="py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Management Team</h2>
          <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600">
            Our experienced leadership brings decades of financial expertise and a shared commitment to client success.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </motion.section>
  ) : null;
}

// New TeamMemberCard component with flip functionality
const TeamMemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className="relative w-full h-[500px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {/* Front of the card */}
      <motion.div
        className={`absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden ${
          isFlipped ? 'rotate-y-180' : 'rotate-y-0'
        }`}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flex flex-col h-full bg-white">
          {/* Profile image */}
          <div className="w-full h-48 overflow-hidden">
            {member.imageUrl ? (
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-400">
                Profile Image
              </div>
            )}
          </div>
          
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 mt-1">{member.designation}</p>
              
             
              
              
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
              <div className="flex space-x-3">
                <a 
                  href={`mailto:${member.email}`} 
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  title="Email"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaEnvelope className="text-lg" />
                </a>
                <a 
                  href={member.social.whatsapp} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-500 transition-colors"
                  title="WhatsApp"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaWhatsapp className="text-lg" />
                </a>
              </div>
              <button 
                className="flex items-center text-blue-600 text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(true);
                }}
              >
                <FaInfoCircle className="mr-1" /> View Details
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Back of the card */}
      <motion.div
        className={`absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden ${
          isFlipped ? 'rotate-y-0' : 'rotate-y-180'
        }`}
        initial={false}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex flex-col">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-blue-600">{member.designation}</p>
            
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Contact:</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-600 mr-2" />
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-blue-600 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <FaWhatsapp className="text-green-500 mr-2" />
                  <a 
                    href={member.social.whatsapp} 
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Connect:</h4>
              <div className="flex space-x-4">
                <a 
                  href={member.social.facebook} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  title="Facebook"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaFacebookF className="text-xl" />
                </a>
                <a 
                  href={member.social.instagram} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                  title="Instagram"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>
            
            <p className="mt-6 text-gray-700 text-sm">{member.bio}</p>
          </div>
          
          <button 
            className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            Back to Profile
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Team;