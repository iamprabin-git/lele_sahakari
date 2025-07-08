import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FaFacebookF, 
  FaWhatsapp, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const TeamCard = ({ member, flipped, toggleFlip }) => {
  // Social media icon mapping
  const getSocialIcon = (platform) => {
    const icons = {
      facebook: <FaFacebookF className="w-4 h-4 text-[#1877F2]" />,
      whatsapp: <FaWhatsapp className="w-4 h-4 text-[#25D366]" />,
      instagram: <FaInstagram className="w-4 h-4 text-[#E1306C]" />,
      linkedin: <FaLinkedinIn className="w-4 h-4 text-[#0A66C2]" />,
      twitter: <FaTwitter className="w-4 h-4 text-[#1DA1F2]" />,
      email: <FaEnvelope className="w-4 h-4 text-gray-600 dark:text-gray-300" />,
      phone: <FaPhone className="w-4 h-4 text-gray-600 dark:text-gray-300" />
    };
    return icons[platform] || null;
  };

  return (
    <div 
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-[420px] [perspective:1000px] cursor-pointer"
      onClick={() => toggleFlip(member.id)}
    >
      <div className={`flip-card-inner relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* Front of Card */}
        <div className="flip-card-front absolute inset-0 [backface-visibility:hidden]">
          <div className="flex flex-col items-center pb-10 h-full">
            {/* Image container */}
            <div className="w-40 h-50 rounded-lg mb-3 mt-10 overflow-hidden relative">
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
              <RxCross2 className="w-5 h-5"/>
             
            </button>
          </div>
          
          <div className="px-6 pb-6">
            {/* Profile header */}
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
            
            <div className="mt-4 space-y-4">
              {/* About section */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">About</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{member.bio}</p>
              </div>
              
              {/* Contact section with icons */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Contact</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700">
                      <FaEnvelope className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                    <Link 
                      href={`mailto:${member.email}`} 
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={e => e.stopPropagation()}
                    >
                      {member.email}
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700">
                      <FaPhone className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                    <Link 
                      href={`tel:${member.phone}`} 
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={e => e.stopPropagation()}
                    >
                      {member.phone}
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Expertise section */}
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
              
              {/* Social media section with icons */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Connect</h4>
                <div className="flex gap-3 mt-3">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <Link
                      key={platform}
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`
                        flex items-center justify-center
                        w-10 h-10 rounded-full
                        bg-gray-100 dark:bg-gray-700
                        hover:bg-gray-200 dark:hover:bg-gray-600
                        transition-colors duration-300
                        ${platform === 'whatsapp' ? 'hover:bg-green-100 dark:hover:bg-green-900' : ''}
                      `}
                      onClick={e => e.stopPropagation()}
                      aria-label={`Connect via ${platform}`}
                    >
                      {getSocialIcon(platform)}
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