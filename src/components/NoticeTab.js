"use client";
import React, { useState } from 'react';
import { FaBullhorn, FaInfoCircle, FaNewspaper, FaCalendar, FaTag, FaBook, FaUsers, FaChartLine, FaAward, FaHandshake, FaLeaf, FaArrowRight } from 'react-icons/fa';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('notice');

  // Notice data
  const notices = [
    {
      id: 1,
      title: "System Maintenance Schedule",
      date: "June 15, 2023",
      content: "Our systems will undergo scheduled maintenance on June 20th from 10:00 PM to 2:00 AM. Services may be temporarily unavailable during this period.",
      tag: "IT Department",
      important: false
    },
    {
      id: 2,
      title: "Deadline Extension for Project Submissions",
      date: "June 12, 2023",
      content: "The deadline for Q2 project submissions has been extended to June 30th. Please ensure all documentation is complete and submitted through the portal.",
      tag: "Management",
      important: true
    },
    {
      id: 3,
      title: "Annual Company Retreat",
      date: "June 5, 2023",
      content: "Save the date! Our annual company retreat will take place from July 10-12 at Mountain View Resort. Registration opens next week.",
      tag: "HR Department",
      important: false
    }
  ];

  // Information data
  const information = [
    {
      id: 1,
      title: "Policy Handbook",
      icon: <FaBook />,
      content: "Access our comprehensive policy handbook covering all company regulations, procedures, and guidelines.",
      buttonText: "View Handbook"
    },
    {
      id: 2,
      title: "Employee Directory",
      icon: <FaUsers />,
      content: "Find contact information and department details for all team members across the organization.",
      buttonText: "Browse Directory"
    },
    {
      id: 3,
      title: "Performance Metrics",
      icon: <FaChartLine />,
      content: "Review quarterly performance reports and track progress toward our organizational goals.",
      buttonText: "View Reports"
    }
  ];

  // News data
  const news = [
    {
      id: 1,
      title: "Company Wins Industry Innovation Award",
      date: "June 10, 2023",
      content: "We're proud to announce that our company has received the prestigious Industry Innovation Award for our groundbreaking work in sustainable technology solutions.",
      icon: <FaAward />
    },
    {
      id: 2,
      title: "New Partnership with TechGlobal",
      date: "June 3, 2023",
      content: "We've formed a strategic partnership with TechGlobal to expand our service offerings in the Asia-Pacific region, creating new opportunities for growth.",
      icon: <FaHandshake />
    },
    {
      id: 3,
      title: "Sustainability Initiative Reaches Major Milestone",
      date: "May 28, 2023",
      content: "Our company has achieved its goal of reducing carbon emissions by 40% two years ahead of schedule, marking a significant step in our sustainability journey.",
      icon: <FaLeaf />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-300 to-indigo-900 text-white p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Lele Information Center</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Stay updated with the latest notices, important information, and news
          </p>
        </div>
        
        {/* Tabs Navigation */}
        <div className="bg-gray-50 border-b border-gray-200 dark:bg-slate-700">
          <div className="flex flex-col sm:flex-row">
            <button
              className={`flex items-center justify-center gap-2 py-4 px-6 text-lg font-medium transition-all ${
                activeTab === 'notice'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                  : 'text-gray-600 hover:text-blue-500 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('notice')}
            >
              <FaBullhorn className="text-xl" />
              Notice Board
            </button>
            
            <button
              className={`flex items-center justify-center gap-2 py-4 px-6 text-lg font-medium transition-all ${
                activeTab === 'information'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                  : 'text-gray-600 hover:text-blue-500 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('information')}
            >
              <FaInfoCircle className="text-xl" />
              Information
            </button>
            
            <button
              className={`flex items-center justify-center gap-2 py-4 px-6 text-lg font-medium transition-all ${
                activeTab === 'news'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                  : 'text-gray-600 hover:text-blue-500 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('news')}
            >
              <FaNewspaper className="text-xl" />
              Latest News
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="p-6">
          {/* Notice Tab */}
          {activeTab === 'notice' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Notices & Announcements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notices.map(notice => (
                  <div 
                    key={notice.id} 
                    className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 ${
                      notice.important ? 'border-red-500' : 'border-blue-500'
                    } transition-transform hover:scale-[1.02] hover:shadow-lg`}
                  >
                    <div className="p-5 border-b border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{notice.title}</h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FaCalendar className="mr-2" />
                        {notice.date}
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-600 mb-4">{notice.content}</p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                        <FaTag className="mr-1" />
                        {notice.tag}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Information Tab */}
          {activeTab === 'information' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Essential Information & Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {information.map(info => (
                  <div 
                    key={info.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-blue-500 transition-transform hover:scale-[1.02] hover:shadow-lg"
                  >
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-700 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                        {info.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{info.title}</h3>
                      <p className="text-gray-600 mb-5">{info.content}</p>
                      <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-medium hover:from-blue-700 hover:to-indigo-800 transition-all">
                        {info.buttonText}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* News Tab */}
          {activeTab === 'news' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Updates & News</h2>
              <div className="max-w-4xl mx-auto">
                {news.map(item => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-lg shadow-md p-5 mb-6 flex flex-col md:flex-row items-start transition-all hover:shadow-lg"
                  >
                    <div className="w-full md:w-40 h-40 flex-shrink-0 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white text-4xl mb-4 md:mb-0">
                      {item.icon}
                    </div>
                    <div className="md:ml-6 flex-1">
                      <div className="flex items-center text-blue-600 font-medium mb-2">
                        <FaCalendar className="mr-2" />
                        {item.date}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.content}</p>
                      <div className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors cursor-pointer">
                        Read full story
                        <FaArrowRight className="ml-2 text-sm" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
       
      </div>
    </div>
  );
};

export default TabsComponent;