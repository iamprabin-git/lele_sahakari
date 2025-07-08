import React from 'react';
import { motion } from 'framer-motion';
import { IoShieldCheckmark } from 'react-icons/io5';
import { IoIosFlash } from 'react-icons/io';


function Mission({ activeTab }) {
  return (
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
            <p className="mt-6 text-xl text-gray-600 dark:text-white">
              We empower individuals and businesses to achieve financial confidence through personalized strategies, innovative solutions, and ethical guidance.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                  <IoShieldCheckmark className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Approach</h3>
                  <p className="mt-2 text-gray-600">
                    We believe in a holistic approach to financial planning that considers every aspect of your life and goals. Our process begins with deep listening and understanding before developing tailored strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Fixed */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                  <IoIosFlash className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Our Innovation</h3>
                  <p className="mt-2 text-gray-600">
                    Leveraging cutting-edge technology and forward-thinking methodologies, we deliver dynamic financial solutions that adapt to changing market conditions and personal circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}

export default Mission;