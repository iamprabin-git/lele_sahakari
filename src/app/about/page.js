// src/app/about/page.jsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'CEO & Founder',
      bio: 'With over 20 years in finance, Sarah founded WealthBridge to create a client-first financial services firm.',
      experience: 'Former VP at Goldman Sachs, MBA from Wharton'
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        {activeTab === 'mission' && (
          <motion.section 
            className="py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto"></div>
              <p className="mt-6 text-xl text-gray-600">
                We empower individuals and businesses to achieve financial confidence through personalized strategies, innovative solutions, and ethical guidance.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Approach</h3>
                    <p className="mt-2 text-gray-600">
                      We believe in a holistic approach to financial planning that considers every aspect of your life and goals. Our process begins with deep listening and understanding before developing tailored strategies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Commitment</h3>
                    <p className="mt-2 text-gray-600">
                      We are committed to transparency, integrity, and putting your interests first. As a fiduciary, we are legally obligated to act in your best interest at all times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* History Section */}
        {activeTab === 'history' && (
          <motion.section 
            className="py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
              <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto"></div>
              <p className="mt-6 text-xl text-gray-600">
                From humble beginnings to becoming a trusted financial partner for thousands of clients.
              </p>
            </div>

            <div className="mt-16">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-blue-200 transform md:translate-x-1/2"></div>
                
                {/* Timeline items */}
                <ul className="space-y-12">
                  {timeline.map((item, index) => (
                    <li key={index} className="relative">
                      <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="hidden md:flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white absolute left-1/2 transform -translate-x-1/2">
                          {index + 1}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className={`bg-white rounded-lg shadow-md p-6 max-w-md ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                            <div className="flex items-center mb-2">
                              <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                                {item.year}
                              </span>
                            </div>
                            <p className="text-gray-700">{item.event}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
        )}

        {/* Team Section */}
        {activeTab === 'team' && (
          <motion.section 
            className="py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Leadership Team</h2>
              <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto"></div>
              <p className="mt-6 text-xl text-gray-600">
                Our experienced leadership brings decades of financial expertise and a shared commitment to client success.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <motion.div 
                  key={member.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 mt-1">{member.title}</p>
                    <p className="mt-4 text-gray-600 text-sm">{member.bio}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500">{member.experience}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

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

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">By The Numbers</h2>
            <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our growth and client satisfaction metrics.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-blue-800 rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="mt-2 text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold">Ready to build your financial future?</h2>
              <p className="mt-4 text-indigo-100 max-w-md">
                Our team of experts is ready to create a personalized strategy for your financial goals.
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 md:flex md:justify-end">
              <div className="inline-flex rounded-md shadow">
                <button className="bg-white text-indigo-700 font-medium px-8 py-4 rounded-md hover:bg-indigo-50 transition-colors duration-300">
                  Schedule a Consultation
                </button>
              </div>
              <div className="ml-3 inline-flex">
                <Link href="/team" className="bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-md hover:bg-white/10 transition-colors duration-300">
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;