// components/AccountOpeningForm.jsx
"use client";
import React, { useState, useRef } from 'react';
import { FaUser, FaPhone, FaIdCard, FaLock, FaCheck, FaArrowLeft, FaUpload } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdAccountBalance } from 'react-icons/md';

const MembershipForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {
      firstName: '',
      lastName: '',
      dob: '',
      gender: 'male',
    },
    contact: {
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    },
    identity: {
      idType: 'passport',
      idNumber: '',
      idFront: null,
      idBack: null,
      selfie: null,
    },
    account: {
      accountType: 'savings',
      initialDeposit: '',
      password: '',
      confirmPassword: '',
    },
    terms: false,
  });
  const [idFrontPreview, setIdFrontPreview] = useState(null);
  const [idBackPreview, setIdBackPreview] = useState(null);
  const [selfiePreview, setSelfiePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileInputRefFront = useRef(null);
  const fileInputRefBack = useRef(null);
  const fileInputRefSelfie = useRef(null);

  const handleChange = (e, section) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [name]: type === 'checkbox' ? checked : value,
      },
    });
  };

  const handleImageUpload = (e, setPreview, fileType) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a JPEG, JPG, or PNG image');
      return;
    }

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('File size should be less than 2MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setFormData({
        ...formData,
        identity: {
          ...formData.identity,
          [fileType]: file,
        },
      });
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = (ref) => {
    ref.current.click();
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    }, 2000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <FaUser className="mr-2 text-blue-600" />
              Personal Information
            </h2>
            <p className="text-gray-600">Please provide your personal details to get started.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.personal.firstName}
                  onChange={(e) => handleChange(e, 'personal')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.personal.lastName}
                  onChange={(e) => handleChange(e, 'personal')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.personal.dob}
                  onChange={(e) => handleChange(e, 'personal')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.personal.gender}
                  onChange={(e) => handleChange(e, 'personal')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <MdEmail className="mr-2 text-blue-600" />
              Contact Information
            </h2>
            <p className="text-gray-600">We'll use this information to contact you about your account.</p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.contact.email}
                  onChange={(e) => handleChange(e, 'contact')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.contact.phone}
                  onChange={(e) => handleChange(e, 'contact')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.contact.address}
                  onChange={(e) => handleChange(e, 'contact')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.contact.city}
                    onChange={(e) => handleChange(e, 'contact')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.contact.state}
                    onChange={(e) => handleChange(e, 'contact')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">ZIP Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.contact.zip}
                    onChange={(e) => handleChange(e, 'contact')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <FaIdCard className="mr-2 text-blue-600" />
              Identity Verification
            </h2>
            <p className="text-gray-600">To comply with banking regulations, please provide identification documents.</p>
            
            <div className="space-y-8">
              <div>
                <label className="block text-gray-700 mb-2">ID Type</label>
                <select
                  name="idType"
                  value={formData.identity.idType}
                  onChange={(e) => handleChange(e, 'identity')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="passport">Passport</option>
                  <option value="drivers-license">Driver's License</option>
                  <option value="national-id">National ID</option>
                  <option value="other">Other Government ID</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">ID Number</label>
                <input
                  type="text"
                  name="idNumber"
                  value={formData.identity.idNumber}
                  onChange={(e) => handleChange(e, 'identity')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 mb-2">Front of ID</label>
                  <input
                    type="file"
                    ref={fileInputRefFront}
                    onChange={(e) => handleImageUpload(e, setIdFrontPreview, 'idFront')}
                    accept="image/*"
                    className="hidden"
                  />
                  <div 
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50"
                    onClick={() => triggerFileInput(fileInputRefFront)}
                  >
                    {idFrontPreview ? (
                      <div className="relative">
                        <img 
                          src={idFrontPreview} 
                          alt="ID Front" 
                          className="w-full h-48 object-contain rounded-md"
                        />
                        <button 
                          type="button"
                          className="mt-4 text-blue-600 hover:text-blue-800"
                          onClick={() => triggerFileInput(fileInputRefFront)}
                        >
                          <FaUpload className="inline mr-1" /> Change Image
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <FaUpload className="mx-auto text-3xl text-gray-400" />
                        <p className="text-gray-500">Click to upload front of ID</p>
                        <p className="text-xs text-gray-400">JPG, PNG (max 2MB)</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Back of ID</label>
                  <input
                    type="file"
                    ref={fileInputRefBack}
                    onChange={(e) => handleImageUpload(e, setIdBackPreview, 'idBack')}
                    accept="image/*"
                    className="hidden"
                  />
                  <div 
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50"
                    onClick={() => triggerFileInput(fileInputRefBack)}
                  >
                    {idBackPreview ? (
                      <div className="relative">
                        <img 
                          src={idBackPreview} 
                          alt="ID Back" 
                          className="w-full h-48 object-contain rounded-md"
                        />
                        <button 
                          type="button"
                          className="mt-4 text-blue-600 hover:text-blue-800"
                          onClick={() => triggerFileInput(fileInputRefBack)}
                        >
                          <FaUpload className="inline mr-1" /> Change Image
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <FaUpload className="mx-auto text-3xl text-gray-400" />
                        <p className="text-gray-500">Click to upload back of ID</p>
                        <p className="text-xs text-gray-400">JPG, PNG (max 2MB)</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Selfie Photo</label>
                <input
                  type="file"
                  ref={fileInputRefSelfie}
                  onChange={(e) => handleImageUpload(e, setSelfiePreview, 'selfie')}
                  accept="image/*"
                  className="hidden"
                />
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50"
                  onClick={() => triggerFileInput(fileInputRefSelfie)}
                >
                  {selfiePreview ? (
                    <div className="relative">
                      <img 
                        src={selfiePreview} 
                        alt="Selfie" 
                        className="w-full h-48 object-contain rounded-md"
                      />
                      <button 
                        type="button"
                        className="mt-4 text-blue-600 hover:text-blue-800"
                        onClick={() => triggerFileInput(fileInputRefSelfie)}
                      >
                        <FaUpload className="inline mr-1" /> Change Photo
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <FaUpload className="mx-auto text-3xl text-gray-400" />
                      <p className="text-gray-500">Click to upload a selfie photo</p>
                      <p className="text-xs text-gray-400">JPG, PNG (max 2MB)</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <MdAccountBalance className="mr-2 text-blue-600" />
              Account Details
            </h2>
            <p className="text-gray-600">Set up your new account preferences.</p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Account Type</label>
                <select
                  name="accountType"
                  value={formData.account.accountType}
                  onChange={(e) => handleChange(e, 'account')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="savings">Savings Account</option>
                  <option value="checking">Checking Account</option>
                  <option value="business">Business Account</option>
                  <option value="student">Student Account</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Initial Deposit ($)</label>
                <input
                  type="number"
                  name="initialDeposit"
                  value={formData.account.initialDeposit}
                  onChange={(e) => handleChange(e, 'account')}
                  min="50"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Minimum initial deposit is Rs. 100</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.account.password}
                    onChange={(e) => handleChange(e, 'account')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.account.confirmPassword}
                    onChange={(e) => handleChange(e, 'account')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <FaCheck className="mr-2 text-blue-600" />
              Review & Submit
            </h2>
            <p className="text-gray-600">Please review your information before submitting.</p>
            
            <div className="bg-gray-50 rounded-xl p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">First Name</p>
                    <p className="font-medium">{formData.personal.firstName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Last Name</p>
                    <p className="font-medium">{formData.personal.lastName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Date of Birth</p>
                    <p className="font-medium">{formData.personal.dob}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Gender</p>
                    <p className="font-medium capitalize">{formData.personal.gender}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="font-medium">{formData.contact.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <p className="font-medium">{formData.contact.phone}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-600">Address</p>
                    <p className="font-medium">{formData.contact.address}</p>
                    <p className="font-medium">{formData.contact.city}, {formData.contact.state} {formData.contact.zip}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-4">Account Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Account Type</p>
                    <p className="font-medium capitalize">{formData.account.accountType}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Initial Deposit</p>
                    <p className="font-medium">${formData.account.initialDeposit}</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={(e) => handleChange(e, 'terms')}
                    className="mt-1 mr-3"
                    required
                  />
                  <label htmlFor="terms" className="text-gray-700">
                    I agree to the Terms and Conditions and Privacy Policy. I confirm that all information provided is accurate.
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="bg-green-100 rounded-full p-4 w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <FaCheck className="text-green-600 text-5xl" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Account Application Submitted!</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Thank you for applying for an account with us. Your application is being processed and we'll contact you within 1-2 business days to complete the verification process.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 max-w-xl mx-auto mb-8">
          <h3 className="font-bold text-lg text-blue-800 mb-3">Next Steps</h3>
          <ul className="text-left space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <span>We'll verify your identity documents</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <span>You'll receive an email with further instructions</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <span>Once approved, your account will be activated</span>
            </li>
          </ul>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
        >
          Apply for Another Account
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-100 p-4">
        <div className="flex justify-between relative">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className="flex flex-col items-center z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= s ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500'
                }`}
              >
                {s}
              </div>
              <div className="mt-2 text-xs text-gray-600 text-center w-16">
                {s === 1 && 'Personal'}
                {s === 2 && 'Contact'}
                {s === 3 && 'Identity'}
                {s === 4 && 'Account'}
                {s === 5 && 'Review'}
              </div>
            </div>
          ))}
          <div className="absolute top-5 left-10 right-10 h-1 bg-gray-300 z-0">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${((step - 1) / 4) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          {renderStep()}
          
          <div className="mt-10 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center text-gray-600 hover:text-gray-800 font-medium py-3 px-6 rounded-lg"
              >
                <FaArrowLeft className="mr-2" /> Back
              </button>
            )}
            
            {step < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting || !formData.terms}
                className={`ml-auto flex items-center font-medium py-3 px-8 rounded-lg transition-colors ${
                  isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;