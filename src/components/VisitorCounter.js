// components/VisitorCounter.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [newVisitorsToday, setNewVisitorsToday] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get current date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      // Get existing visitor data from localStorage
      const storedData = localStorage.getItem('visitorData');
      let visitorData = storedData ? JSON.parse(storedData) : {
        totalVisitors: 0,
        lastVisit: null,
        todayVisitors: 0,
        todayDate: today
      };
      
      // Reset daily count if it's a new day
      if (visitorData.todayDate !== today) {
        visitorData.todayVisitors = 0;
        visitorData.todayDate = today;
      }
      
      // Check if this is a new session
      const isNewSession = !sessionStorage.getItem('visited');
      const isNewVisitor = !localStorage.getItem('visited');
      
      if (isNewSession) {
        // Mark session as visited
        sessionStorage.setItem('visited', 'true');
        
        // Update active users
        setActiveUsers(prev => prev + 1);
        
        // Remove active user when tab is closed or page is refreshed
        const handleBeforeUnload = () => {
          setActiveUsers(prev => Math.max(0, prev - 1));
        };
        
        window.addEventListener('beforeunload', handleBeforeUnload);
        
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }
      
      if (isNewVisitor) {
        // Mark as visited in localStorage for future visits
        localStorage.setItem('visited', 'true');
        
        // Update visitor counts
        visitorData.totalVisitors += 1;
        visitorData.todayVisitors += 1;
        visitorData.lastVisit = today;
        
        // Save updated data to localStorage
        localStorage.setItem('visitorData', JSON.stringify(visitorData));
      }
      
      // Set state with updated visitor data
      setVisitorCount(visitorData.totalVisitors);
      setNewVisitorsToday(visitorData.todayVisitors);
      setIsLoading(false);
    }
  }, []);

  // Format numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Calculate growth percentage
  const calculateGrowth = () => {
    if (visitorCount === 0) return 0;
    return Math.round((newVisitorsToday / visitorCount) * 100);
  };

  return (
    <div className="max-w-5xl mx-auto px-2 py-4">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-3 md:p-5">
          
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl md:text-lg font-bold text-white mb-2">
                Website Visitors
              </h2>
             
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-4xl font-bold text-white flex items-center">
                <FaUsers className="mr-2" />
                {isLoading ? "..." : formatNumber(visitorCount)}
              </div>
            </div>
          </div>
          </div>
         
      </div>
  );
};

export default VisitorCounter;