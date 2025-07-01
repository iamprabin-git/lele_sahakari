// components/sections/Hero.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiShield, FiTrendingUp, FiSmartphone } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 bg-blue-400 rounded-full mix-blend-soft-light"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-soft-light"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-800/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-blue-500/30">
              <FiShield className="mr-2 text-blue-300" />
              <span className="text-blue-200 font-medium">FDIC Insured</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Trusted Partner in 
              <span className="block mt-2 bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
                Financial Growth
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-2xl mb-10 mx-auto lg:mx-0">
              Secure, innovative banking solutions to help you save, invest, and grow your wealth with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/open-account" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                Open an Account
                <FiTrendingUp className="ml-2" />
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-colors flex items-center justify-center">
                Explore Services
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
                  <FiSmartphone className="text-white text-xl" />
                </div>
                <div>
                  <div className="font-semibold">24/7 Digital Banking</div>
                  <div className="text-blue-200 text-sm">Always Available</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-2xl font-bold text-green-400 mr-2">4.9/5</div>
                <div>
                  <div className="font-semibold">Customer Rating</div>
                  <div className="text-blue-200 text-sm">Trusted by 500k+ clients</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-xl">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="bg-gradient-to-br from-blue-800 to-blue-600 rounded-xl p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="text-blue-200 text-sm">Total Balance</div>
                      <div className="text-3xl font-bold mt-1">$42,567.89</div>
                    </div>
                    <div className="bg-blue-900/50 px-3 py-1 rounded-lg text-blue-200 text-sm">
                      Premium Client
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-900/40 rounded-lg p-3">
                      <div className="text-blue-200 text-xs">Savings</div>
                      <div className="font-medium">$18,240.00</div>
                    </div>
                    <div className="bg-blue-900/40 rounded-lg p-3">
                      <div className="text-blue-200 text-xs">Investments</div>
                      <div className="font-medium">$22,107.43</div>
                    </div>
                    <div className="bg-blue-900/40 rounded-lg p-3">
                      <div className="text-blue-200 text-xs">Growth</div>
                      <div className="font-medium text-green-400">+5.2%</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-blue-200 text-sm">•••• •••• •••• 4679</div>
                    <div className="flex">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-2 h-2 bg-blue-300 rounded-full ml-1"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-400/10 backdrop-blur-sm rounded-xl border border-teal-400/30 shadow-lg p-4">
                <div className="text-teal-300 text-sm mb-1">Loan Approval</div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-teal-200 text-xs mt-1">Success Rate</div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-40 bg-blue-800/80 backdrop-blur-sm rounded-xl border border-white/20 p-4 shadow-lg">
                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center">
                      <FiTrendingUp className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">4.25% APY</div>
                    <div className="text-blue-200 text-xs">Premium Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-16 md:h-24" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-current text-white dark:text-gray-900"
            opacity="0.25"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            className="fill-current text-white dark:text-gray-900"
            opacity="0.5"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-current text-white dark:text-gray-900"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;