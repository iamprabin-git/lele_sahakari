// src/app/about/page.jsx
'use client';

import React, { useState } from 'react';

import { motion } from 'framer-motion';

import Mission from '@/components/aboutPage/Mission';
import History from '@/components/aboutPage/History';
import Team from '@/components/aboutPage/Team';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Saraswati Sijapati',
      title: 'Manager',
      bio: 'With over 10 years in Cooperative Finance,teaching.',
      experience: 'With over 10 years in Cooperative Finance,teaching'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Chief Investment Officer',
      bio: 'Michael leads our investment strategy with a focus on long-term value creation.',
      experience: '15+ years portfolio management, CFA charterholder'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      title: 'Chief Financial Officer',
      bio: 'Elena ensures our financial operations maintain the highest standards of integrity.',
      experience: 'Former Big 4 partner, CPA and CMA'
    },
    {
      id: 4,
      name: 'David Wilson',
      title: 'Head of Client Relations',
      bio: 'David builds lasting relationships by understanding each client&#39;s unique financial goals.',
      experience: '12+ years in private wealth management'
    }
  ];

  // Stats data
  const stats = [
    { value: '$4.2B+', label: 'Assets Under Management' },
    { value: '15,000+', label: 'Clients Served' },
    { value: '200+', label: 'Financial Professionals' },
    { value: '98%', label: 'Client Retention Rate' }
  ];

  // Timeline data
  const timeline = [
    { year: '2008', event: 'Company founded during financial crisis with focus on ethical practices' },
    { year: '2012', event: 'Expanded to 5 regional offices across the country' },
    { year: '2015', event: 'Reached $1B in assets under management' },
    { year: '2018', event: 'Launched digital investment platform' },
    { year: '2021', event: 'Named Top 50 Financial Services Firm by Global Finance Magazine' },
    { year: '2023', event: 'Expanded sustainable investment offerings' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-700 dark:from-gray-200 dark:to-gray-700">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 dark:from-gray-200 dark:to-gray-500 text-white">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Building Financial Futures
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              For over 15 years, we have empowered clients to achieve financial freedom through innovative solutions and personalized strategies.
            </motion.p>
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <button className="bg-white text-blue-900 font-medium px-6 py-3 rounded-md hover:bg-blue-50 transition-colors duration-300">
                Schedule a Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-20 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 md:space-x-8 py-4">
            {['mission', 'history', 'team', 'values'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm md:text-base font-medium rounded-md transition-colors duration-200 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

     <Mission activeTab={activeTab} />
                 

        {/* History Section */}
       <History activeTab={activeTab} />

        {/* Team Section */}
    <Team activeTab={activeTab} />

        {/* Values Section */}
        {activeTab === 'values' && (
          <motion.section 
            className="py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
              <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto"></div>
              <p className="mt-6 text-xl text-gray-600">
                These principles guide every decision we make and every relationship we build.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">Integrity</h3>
                <p className="mt-4 text-gray-600">
                  We uphold the highest ethical standards in all our advice and operations, ensuring transparency in every interaction.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">Client Focus</h3>
                <p className="mt-4 text-gray-600">
                  Your goals are at the center of every strategy we create, with personalized solutions for your unique situation.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">Innovation</h3>
                <p className="mt-4 text-gray-600">
                  We leverage technology and forward-thinking strategies to deliver cutting-edge financial solutions.
                </p>
              </div>
            </div>
          </motion.section>
        )}
      </div>

      // {/* Stats Section */}
      // <section className="py-16 bg-blue-900 text-white">
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //     <div className="text-center">
      //       <h2 className="text-3xl font-bold">By The Numbers</h2>
      //       <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
      //         Our commitment to excellence is reflected in our growth and client satisfaction metrics.
      //       </p>
      //     </div>
          
      //     <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
      //       {stats.map((stat, index) => (
      //         <motion.div 
      //           key={index}
      //           className="bg-blue-800 rounded-lg p-6 text-center"
      //           initial={{ opacity: 0, y: 20 }}
      //           animate={{ opacity: 1, y: 0 }}
      //           transition={{ delay: index * 0.1, duration: 0.5 }}
      //         >
      //           <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
      //           <div className="mt-2 text-blue-200">{stat.label}</div>
      //         </motion.div>
      //       ))}
      //     </div>
      //   </div>
      // </section>

      // {/* CTA Section */}
      // <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //     <div className="md:flex md:items-center md:justify-between">
      //       <div className="md:w-1/2">
      //         <h2 className="text-3xl font-bold">Ready to build your financial future?</h2>
      //         <p className="mt-4 text-indigo-100 max-w-md">
      //           Our team of experts is ready to create a personalized strategy for your financial goals.
      //         </p>
      //       </div>
      //       <div className="mt-8 md:mt-0 md:w-1/2 md:flex md:justify-end">
      //         <div className="inline-flex rounded-md shadow">
      //           <button className="bg-white text-indigo-700 font-medium px-8 py-4 rounded-md hover:bg-indigo-50 transition-colors duration-300">
      //             Schedule a Consultation
      //           </button>
      //         </div>
      //         <div className="ml-3 inline-flex">
      //           <Link href="/team" className="bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-md hover:bg-white/10 transition-colors duration-300">
      //             Meet Our Team
      //           </Link>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    
  );
};

export default AboutPage;