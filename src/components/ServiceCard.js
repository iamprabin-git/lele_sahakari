// components/ServicesTabs.jsx
"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaPiggyBank, FaHandHoldingUsd, FaMoneyBillWave, FaCreditCard, FaChartLine, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState('deposit');
  
  const services = {
    deposit: {
      title: "Deposit Services",
      icon: <FaPiggyBank className="text-blue-500" />,
      link: "/services/deposits",
      description: "Secure your savings with our flexible deposit options offering competitive interest rates.",
      features: [
        "Savings Accounts with up to 13% interest",
        "Fixed Deposits with flexible tenure",
        "Recurring Deposit plans",
        "Tax-saving deposit schemes"
      ],
      benefits: [
        "FDIC insured up to $250,000",
        "24/7 online access",
        "No hidden fees",
        "Instant account opening"
      ]
    },
    loan: {
      title: "Loan Services",
      icon: <FaHandHoldingUsd className="text-green-500" />,
      link: "/services/loans",
      description: "Achieve your financial goals with our customized loan solutions at attractive interest rates.",
      features: [
        "Home Loans starting at 15% PA",
        "Personal Loans up to Rs. 100,000",
        "Business Loans with flexible repayment",
        "Education Loans with grace period"
      ],
      benefits: [
        "Quick approval process",
        "Competitive interest rates",
        "No prepayment penalties",
        "Online loan management"
      ]
    },
    remittance: {
      title: "Remittance Services",
      icon: <FaMoneyBillWave className="text-purple-500" />,
      link: "/services/remittance",
      description: "Send money globally with our fast, secure, and cost-effective remittance solutions.",
      features: [
        "Instant transfers to 150+ countries",
        "Competitive exchange rates",
        "Mobile wallet options",
        "Cash pickup locations worldwide"
      ],
      benefits: [
        "Same-day delivery",
        "Low transaction fees",
        "24/7 customer support",
        "Tracking system"
      ]
    },
    other: {
      title: "Other Services",
      icon: <FaCreditCard className="text-orange-500" />,
      link: "/services/others",
      description: "Explore our comprehensive suite of financial services for all your banking needs.",
      features: [
        "Bill Book renewal",
        "Investment Advisory Services",
        "Insurance Products",
        "Wealth Management"
      ],
      benefits: [
        "Personalized financial planning",
        "Digital banking solutions",
        "Priority customer service",
        "Financial education resources"
      ]
    }
  };

  const activeService = services[activeTab];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Financial Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Comprehensive solutions for all your financial needs
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.keys(services).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl m-2 transition-all duration-300 ${
                activeTab === key 
                  ? 'bg-white dark:bg-slate-800 shadow-xl border-2 border-blue-500 transform -translate-y-1' 
                  : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
              style={{ minWidth: '120px' }}
            >
              <div className={`text-2xl p-3 rounded-full mb-3 ${
                activeTab === key 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' 
                  : 'bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-gray-300'
              }`}>
                {services[key].icon}
              </div>
              <span className={`font-medium ${
                activeTab === key 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}>
                {services[key].title}
              </span>
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-900">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm mr-4">
                  <div className="text-3xl text-blue-500">
                    {activeService.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{activeService.title}</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {activeService.description}
              </p>
              
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Key Features:</h4>
                <ul className="space-y-3">
                  {activeService.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                    
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-300 dark:bg-blue-900 rounded-full mr-3 flex items-center justify-center">
                           <TiTick className="h-4 w-4 text-white"/>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link href={activeService.link} className="px-10 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center" >
                Learn More
                 <FaArrowRight className="h-5 w-5 ml-2"/>
               
              </Link>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Key Benefits:</h4>
                <ul className="space-y-3">
                  {activeService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full mr-3 flex items-center justify-center">
                        <TiTick className="h-4 w-4 text-green-600 dark:text-green-400"/>
                       
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 dark:bg-slate-700 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">How to Get Started:</h4>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">1</span>
                    <span className="text-gray-700 dark:text-gray-300">Select the service you need</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">2</span>
                    <span className="text-gray-700 dark:text-gray-300">Complete our simple online application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">3</span>
                    <span className="text-gray-700 dark:text-gray-300">Get approval within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">4</span>
                    <span className="text-gray-700 dark:text-gray-300">Start using your service immediately</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Services */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
            More Financial Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaChartLine className="text-indigo-500" />, title: "Investment", desc: "Grow your wealth with expert guidance" },
              { icon: <FaShieldAlt className="text-yellow-500" />, title: "Insurance", desc: "Protect what matters most to you" },
              { icon: <FaMobileAlt className="text-teal-500" />, title: "Mobile Banking", desc: "Bank anytime, anywhere with our app" },
              { icon: <FaCreditCard className="text-pink-500" />, title: "Credit Cards", desc: "Rewards and benefits tailored for you" },
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-slate-700">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
                  <div className="text-xl">{service.icon}</div>
                </div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.desc}</p>
                <button className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:text-blue-800 dark:hover:text-blue-300">
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;