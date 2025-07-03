import React from 'react';
import { FaUser } from 'react-icons/fa';

const PersonalStep = ({ formData, errors, handleChange }) => {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
        <FaUser className="mr-2 text-blue-600" />
        Personal Information
      </h2>
      <p className="text-gray-800 dark:text-white">Please provide your personal details to get started.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-800 dark:text-white mb-2">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            required
          />
          {errors.firstName && <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>}
        </div>
        
        <div>
          <label className="block text-gray-800 dark:text-white mb-2">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            required
          />
          {errors.lastName && <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>}
        </div>
        
        <div>
          <label className="block text-gray-800 dark:text-white mb-2">Date of Birth *</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            required
          />
          {errors.dob && <p className="mt-1 text-red-500 text-sm">{errors.dob}</p>}
        </div>
        
        <div>
          <label className="block text-gray-800 dark:text-white mb-2">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 dark:text-white"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PersonalStep;