import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ReviewStep = ({ formData, errors, handleChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center">
        <FaCheck className="mr-2 text-blue-600" />
        Review & Submit
      </h2>
      <p className="text-gray-600">Please review your information before submitting.</p>
      
      <div className="bg-gray-50 rounded-xl p-6 space-y-6">
        {/* Personal Information Review */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">First Name</p>
              <p className="font-medium">{formData.personal.firstName}</p>
            </div>
            {/* Other personal fields */}
          </div>
        </div>
        
        {/* Other sections (Contact, Identity, Account) */}
        
        <div className="pt-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={(e) => handleChange(e)}
              className="mt-1 mr-3"
              required
            />
            <label htmlFor="terms" className="text-gray-700">
              I agree to the Terms and Conditions and Privacy Policy...
            </label>
          </div>
          {errors.terms && <p className="mt-2 text-red-500 text-sm">{errors.terms}</p>}
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;