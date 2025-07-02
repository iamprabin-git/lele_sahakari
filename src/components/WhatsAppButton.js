// components/WhatsAppButton.jsx
"use client";
import React, { useState } from 'react';
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppButton = ({
  phoneNumber = "+977-9766384876",
  defaultMessage = "Hello, I'm interested in your services!",
  messageOptions = [
    { text: "Service Inquiry", message: "I'd like more information about your services" },
    { text: "Get Quote", message: "Can you provide a quote for..." },
    { text: "Schedule Meeting", message: "I'd like to schedule a meeting" },
    { text: "Custom Message", message: "" },
  ]
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Function to open WhatsApp chat
  const openWhatsApp = (message = defaultMessage) => {
    const cleanPhoneNumber = phoneNumber.replace(/[^0-9+]/g, '');
    const formattedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${cleanPhoneNumber}?text=${formattedMessage}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Message options */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 animate-fade-in">
          <h3 className="font-bold text-gray-800 dark:text-white mb-3">Send a message</h3>
          
          <div className="space-y-2">
            {messageOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => openWhatsApp(option.message)}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  option.message 
                    ? "bg-green-50 hover:bg-green-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                    : "bg-blue-50 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                }`}
              >
                <div className="font-medium text-gray-800 dark:text-white">
                  {option.text}
                </div>
                {option.message && (
                  <div className="text-sm text-gray-600 dark:text-gray-300 truncate">
                    {option.message}
                  </div>
                )}
              </button>
            ))}
          </div>
          
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="px-3 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      {/* Main WhatsApp button */}
      <button
        onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <IoLogoWhatsapp className="w-10 h-10 text-white"/>
        <span className="sr-only">Chat on WhatsApp</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;