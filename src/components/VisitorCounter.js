// components/VisitorCounter.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { FaUsers } from 'react-icons/fa';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [newVisitorsToday, setNewVisitorsToday] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') {
      setIsLoading(false);
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    const storedData = localStorage.getItem('visitorData');
    
    // Initialize visitor data if it doesn't exist
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

    // Check if this is a new visit (using sessionStorage)
    const isNewVisit = !sessionStorage.getItem('visited');
    
    if (isNewVisit) {
      // Mark session as visited
      sessionStorage.setItem('visited', 'true');
      
      // Check if this is a new visitor (using localStorage)
      const isNewVisitor = !localStorage.getItem('visited');
      
      if (isNewVisitor) {
        // Mark as visited in localStorage for future visits
        localStorage.setItem('visited', 'true');
        visitorData.totalVisitors += 1;
      }
      
      // Increment today's visitor count
      visitorData.todayVisitors += 1;
      visitorData.lastVisit = today;
      
      // Save updated data to localStorage
      localStorage.setItem('visitorData', JSON.stringify(visitorData));
    }

    // Set state with updated visitor data
    setVisitorCount(visitorData.totalVisitors);
    setNewVisitorsToday(visitorData.todayVisitors);
    setIsLoading(false);
  }, []);

  // Format numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="max-w-3xl mx-auto px-2 py-4">
      <div className="bg-gradient-to-br from-blue-400 to-indigo-900 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-1 md:p-3 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="text-center md:text-left">
            <h2 className="text-lg md:text-xl font-bold text-white mb-1">
              Website Visitors
            </h2>
            <p className="text-blue-200 text-sm">
              {isLoading ? "Loading..." : `${formatNumber(newVisitorsToday)} today`}
            </p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
            <div className="text-3xl md:text-4xl font-bold text-white flex items-center">
              <FaUsers className="mr-2" />
              {isLoading ? "..." : formatNumber(visitorCount)}
            </div>
            <div className="h-10 w-0.5 bg-white/40"></div>
            <div className="text-white">
              <div className="text-xs">Total</div>
              <div className="text-xs">Visitors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;