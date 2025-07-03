import React from 'react';
import { FORM_STEPS } from '@/constants/accountOpening';

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex justify-between relative">
        {FORM_STEPS.map((step) => (
          <div key={step.id} className="flex flex-col items-center z-10">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep >= step.id ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500'
              }`}
            >
              {step.id}
            </div>
            <div className="mt-2 text-xs text-gray-600 text-center w-16">
              {step.title}
            </div>
          </div>
        ))}
        <div className="absolute top-5 left-10 right-10 h-1 bg-gray-300 z-0">
          <div
            className="h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (FORM_STEPS.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;