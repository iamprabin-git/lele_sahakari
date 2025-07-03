import React from 'react';
import { FaCheck } from 'react-icons/fa';

const SuccessStep = ({ onReset }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
      <div className="bg-green-100 rounded-full p-4 w-24 h-24 flex items-center justify-center mx-auto mb-6">
        <FaCheck className="text-green-600 text-5xl" />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Account Application Submitted!</h2>
      {/* Success message content */}
      <button
        onClick={onReset}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
      >
        Apply for Another Account
      </button>
    </div>
  );
};

export default SuccessStep;