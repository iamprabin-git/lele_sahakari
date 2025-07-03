import React from 'react';
import { MdAccountBalance } from 'react-icons/md';
import { ACCOUNT_TYPES } from '@/constants/accountOpening';

const AccountStep = ({ formData, errors, handleChange, passwordMatchError }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center">
        <MdAccountBalance className="mr-2 text-blue-600" />
        Account Details
      </h2>
      <p className="text-gray-600">Set up your new account preferences.</p>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Account Type *</label>
          <select
            name="accountType"
            value={formData.account.accountType}
            onChange={(e) => handleChange(e, 'account')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            {ACCOUNT_TYPES.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        
        {/* Other account fields */}
      </div>
    </div>
  );
};

export default AccountStep;