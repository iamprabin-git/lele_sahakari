"use client";
import React, { useState, useEffect } from 'react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [tenureType, setTenureType] = useState('years');
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [amortizationData, setAmortizationData] = useState([]);
  const [showSchedule, setShowSchedule] = useState(false);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure, tenureType]);

  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    // Allow only numbers and decimal points
    if (/^\d*\.?\d*$/.test(value)) {
      setter(Number(value));
    }
  };

  const calculateEMI = () => {
    const months = tenureType === 'years' ? loanTenure * 12 : loanTenure;
    const monthlyRate = interestRate / 12 / 100;
    
    // Validate inputs
    if (loanAmount <= 0 || interestRate <= 0 || months <= 0) {
      setEmi(0);
      setTotalInterest(0);
      setTotalAmount(0);
      setAmortizationData([]);
      return;
    }

    // Calculate EMI
    const emiValue = loanAmount * monthlyRate * 
      Math.pow(1 + monthlyRate, months) / 
      (Math.pow(1 + monthlyRate, months) - 1);
    
    // Calculate total amounts
    const totalAmountValue = emiValue * months;
    const totalInterestValue = totalAmountValue - loanAmount;

    setEmi(emiValue);
    setTotalInterest(totalInterestValue);
    setTotalAmount(totalAmountValue);
    
    // Generate amortization schedule
    generateAmortizationSchedule(emiValue, months, monthlyRate);
  };

  const generateAmortizationSchedule = (emiValue, months, monthlyRate) => {
    let balance = loanAmount;
    const schedule = [];

    for (let i = 1; i <= months; i++) {
      const interest = balance * monthlyRate;
      const principal = emiValue - interest;
      const closingBalance = Math.max(0, balance - principal);

      schedule.push({
        month: i,
        principal: principal,
        interest: interest,
        totalPayment: emiValue,
        balance: closingBalance
      });

      balance = closingBalance;
    }

    setAmortizationData(schedule);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'NPR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto pt-26 bg-white dark:bg-slate-800 rounded-xl shadow-lg pb-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">EMI Calculator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-white mb-2">
              Loan Amount (Rs.)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 dark:text-white">Rs.</span>
              <input
                type="text"
                value={loanAmount}
                onChange={(e) => handleInputChange(e, setLoanAmount)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Loan Amount"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-white mb-2">
              Interest Rate (% per annum)
            </label>
            <div className="relative">
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 dark:text-white">%</span>
              <input
                type="text"
                value={interestRate}
                onChange={(e) => handleInputChange(e, setInterestRate)}
                className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Interest Rate"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-white mb-2">
              Loan Tenure
            </label>
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={loanTenure}
                  onChange={(e) => handleInputChange(e, setLoanTenure)}
                  className="w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tenure"
                />
              </div>
              <div className="flex space-x-2">
                {['years', 'months'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setTenureType(type)}
                    className={`px-4 py-3 rounded-lg ${
                      tenureType === type
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <button
              onClick={calculateEMI}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Calculate EMI
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-blue-50 rounded-xl p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-700 dark:text-white">Monthly EMI</p>
              <p className="text-2xl font-bold text-blue-600">
                {formatCurrency(emi)}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-700 dark:text-white">Total Interest</p>
              <p className="text-2xl font-bold text-blue-600">
                {formatCurrency(totalInterest)}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm col-span-2">
              <p className="text-gray-700 dark:text-white">Total Payment</p>
              <p className="text-2xl font-bold text-blue-600">
                {formatCurrency(totalAmount)}
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-700 dark:text-white mb-2">Payment Breakdown</h3>
            <div className="flex h-6 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600" 
                style={{ width: `${(loanAmount / totalAmount * 100).toFixed(1)}%` }}
              ></div>
              <div 
                className="bg-blue-400" 
                style={{ width: `${(totalInterest / totalAmount * 100).toFixed(1)}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-blue-600">
                Principal: {formatCurrency(loanAmount)}
              </span>
              <span className="text-blue-400">
                Interest: {formatCurrency(totalInterest)}
              </span>
            </div>
          </div>

          <button
            onClick={() => setShowSchedule(!showSchedule)}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {showSchedule ? 'Hide' : 'Show'} Payment Schedule
          </button>
        </div>
      </div>

      {/* Amortization Schedule */}
      {showSchedule && amortizationData.length > 0 && (
        <div className="mt-8 overflow-x-auto">
          <h3 className="text-xl font-semibold mb-4">Amortization Schedule</h3>
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Month</th>
                <th className="py-3 px-4 text-left">Principal (Rs. )</th>
                <th className="py-3 px-4 text-left">Interest (Rs. )</th>
                <th className="py-3 px-4 text-left">Total Payment (Rs. )</th>
                <th className="py-3 px-4 text-left">Balance (Rs. )</th>
              </tr>
            </thead>
            <tbody>
              {amortizationData.slice(0, 12).map((data, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-500' : ''}>
                  <td className="py-3 px-4">{data.month}</td>
                  <td className="py-3 px-4">{formatCurrency(data.principal)}</td>
                  <td className="py-3 px-4">{formatCurrency(data.interest)}</td>
                  <td className="py-3 px-4">{formatCurrency(data.totalPayment)}</td>
                  <td className="py-3 px-4">{formatCurrency(data.balance)}</td>
                </tr>
              ))}
              {amortizationData.length > 12 && (
                <tr className="bg-blue-100 dark:bg-blue-900 font-medium">
                  <td colSpan="5" className="py-3 px-4 text-center">
                    Showing first 12 months of {loanTenure} {tenureType}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EMICalculator;