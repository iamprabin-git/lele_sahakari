import React from 'react';
import { MdEmail } from 'react-icons/md';

const ContactStep = ({ formData, errors, handleChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center">
        <MdEmail className="mr-2 text-blue-600" />
        Contact Information
      </h2>
      <p className="text-gray-600">We will use this information to contact you about your account.</p>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.contact.email}
            onChange={(e) => handleChange(e, 'contact')}
            className={`w-full px-4 py-3 border ${errors.contact?.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
            required
          />
          {errors.contact?.email && <p className="mt-1 text-red-500 text-sm">{errors.contact.email}</p>}
        </div>
        
        {/* Other contact fields */}
      </div>
    </div>
  );
};

export default ContactStep;