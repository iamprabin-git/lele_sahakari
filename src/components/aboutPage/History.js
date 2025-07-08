import React from 'react';
import { motion } from 'framer-motion';

function History({ activeTab }) {
  // Sample timeline data (replace with your actual data)
  const timeline = [
    { year: "2005", event: "Founded with a vision to democratize financial planning." },
    { year: "2010", event: "Expanded to 5 new cities and served over 10,000 clients." },
    { year: "2015", event: "Launched our digital platform, making services accessible nationwide." },
    { year: "2020", event: "Recognized as a top financial advisory firm by Financial Times." },
    { year: "2023", event: "Celebrated 18 years of excellence and trust." }
  ];

  return activeTab === 'history' ? (
    <motion.section 
      className="py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </motion.section>
  ) : null;
}

export default History;