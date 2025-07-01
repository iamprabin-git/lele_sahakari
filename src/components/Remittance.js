// components/ClientCarousel.jsx
"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import remittance1 from '@/assets/remittance/ime.png';
import remittance2 from '@/assets/remittance/city.jpg';
import remittance3 from '@/assets/remittance/himal-remit.png';
import remittance4 from '@/assets/remittance/ipayremitlogo3.png';
import remittance5 from '@/assets/remittance/easylink.png';
import remittance6 from '@/assets/remittance/emt.jpg';
import remittance7 from '@/assets/remittance/images.png';
import remittance8 from '@/assets/remittance/jme.jpg';
import remittance9 from '@/assets/remittance/logo.png';
import remittance10 from '@/assets/remittance/mg.png';
import remittance11 from '@/assets/remittance/ria.png';
import remittance12 from '@/assets/remittance/tf.png';
import remittance13 from '@/assets/remittance/wu.jpg';
import remittance14 from '@/assets/remittance/khalti.jpg';
import remittance15 from '@/assets/remittance/ips.jpg';
import remittance16 from '@/assets/remittance/esewa.jpg';

const ClientCarousel = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Client logos data
  const clients = [
    { id: 1, src: remittance1, alt: 'IME Remittance' },
    { id: 2, src: remittance2, alt: 'City Express' },
    { id: 3, src: remittance3, alt: 'Himal Remit' },
    { id: 4, src: remittance4, alt: 'iPay Remit' },
    { id: 5, src: remittance5, alt: 'EasyLink' },
    { id: 6, src: remittance6, alt: 'Express Money Transfer' },
    { id: 7, src: remittance7, alt: 'IME' },
    { id: 8, src: remittance8, alt: 'Jai Money Express' },
    { id: 9, src: remittance9, alt: 'Samsara Remit' },
    { id: 10, src: remittance10, alt: 'Money Gram' },
    { id: 11, src: remittance11, alt: 'Ria Money Transfer' },
    { id: 12, src: remittance12, alt: 'TransferGo' },
    { id: 13, src: remittance13, alt: 'Western Union' },
    { id: 14, src: remittance14, alt: 'Khalti' },    
    { id: 15, src: remittance15, alt: 'IPS Payment' },
    { id: 16, src: remittance16, alt: 'eSewa' },
  ];

  // Create unique IDs for duplicated items
  const duplicatedClients = [
    ...clients.map((client, idx) => ({ ...client, uniqueId: `first-${client.id}-${idx}` })),
    ...clients.map((client, idx) => ({ ...client, uniqueId: `second-${client.id}-${idx}` }))
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of remittance partners that rely on our solutions
          </p>
        </div>
        
        {/* Carousel container */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          {/* Carousel */}
          <div className="relative flex overflow-x-hidden">
            {/* First set of clients */}
            <div 
              className={`flex ${isMounted ? 'animate-scroll' : ''} whitespace-nowrap py-4`}
              style={{ animationDuration: '40s' }}
            >
              {duplicatedClients.slice(0, clients.length * 2).map((client) => (
                <div 
                  key={client.uniqueId}
                  className="flex items-center justify-center mx-4 lg:mx-8 transition-transform duration-300 hover:scale-110"
                >
                  <div className="relative w-32 h-20 md:w-40 md:h-24 flex items-center justify-center">
                    <Image 
                      src={client.src}
                      alt={client.alt}
                      className="object-contain"
                      fill
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600">16+</div>
            <div className="text-lg font-medium text-gray-900 mt-2">Remittance Partners</div>
            <p className="text-gray-600 mt-2">Global network of trusted services</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600">150+</div>
            <div className="text-lg font-medium text-gray-900 mt-2">Countries</div>
            <p className="text-gray-600 mt-2">Worldwide coverage</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600">24/7</div>
            <div className="text-lg font-medium text-gray-900 mt-2">Support</div>
            <p className="text-gray-600 mt-2">Dedicated customer service</p>
          </div>
        </div>
      </div>
      
      {/* Global CSS for animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientCarousel;