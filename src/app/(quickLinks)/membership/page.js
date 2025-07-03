"use client";
import React, { useState, useRef, useEffect } from 'react';
import ProgressBar from '@/components/membership/ProgressBar';
import PersonalStep from '@/components/membership/PersonalStep';
import ContactStep from '@/components/membership/ContactStep';
import IdentityStep from '@/components/membership/IdentityStep';
import AccountStep from '@/components/membership/AccountStep';
import ReviewStep from '@/components/membership/ReviewStep';
import SuccessStep from '@/components/membership/SuccessStep';
import { INITIAL_FORM_DATA } from '@/constants/accountOpening';

const AccountOpeningPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [idFrontPreview, setIdFrontPreview] = useState(null);
  const [idBackPreview, setIdBackPreview] = useState(null);
  const [selfiePreview, setSelfiePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Handle input changes for all form fields
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    // Handle file inputs
    if (type === 'file') {
      handleImageUpload(name, files[0]);
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle image uploads and previews
  const handleImageUpload = (name, file) => {
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      switch (name) {
        case 'idFront':
          setIdFrontPreview(reader.result);
          setFormData(prev => ({ ...prev, idFront: file }));
          break;
        case 'idBack':
          setIdBackPreview(reader.result);
          setFormData(prev => ({ ...prev, idBack: file }));
          break;
        case 'selfie':
          setSelfiePreview(reader.result);
          setFormData(prev => ({ ...prev, selfie: file }));
          break;
        default:
          break;
      }
    };
    reader.readAsDataURL(file);
  };

  // Validate current step fields
  const validateStep = (stepNumber) => {
    const newErrors = {};
    
    switch (stepNumber) {
      case 1: // Personal info validation
        if (!formData.firstName?.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName?.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.dob) newErrors.dob = 'Date of birth is required';
        break;
        
      case 2: // Contact info validation
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Invalid email address';
        }
        if (!formData.phone) {
          newErrors.phone = 'Phone number is required';
        } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
          newErrors.phone = 'Invalid phone number';
        }
        if (!formData.address?.trim()) newErrors.address = 'Address is required';
        break;
        
      case 3: // Identity validation
        if (!formData.idType) newErrors.idType = 'ID type is required';
        if (!formData.idNumber?.trim()) newErrors.idNumber = 'ID number is required';
        if (!formData.idFront) newErrors.idFront = 'Front image is required';
        if (!formData.idBack) newErrors.idBack = 'Back image is required';
        if (!formData.selfie) newErrors.selfie = 'Selfie is required';
        break;
        
      case 4: // Account info validation
        if (!formData.password) {
          newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
          newErrors.password = 'Password must be at least 8 characters';
        }
        if (!formData.confirmPassword) {
          newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.securityQuestion) newErrors.securityQuestion = 'Security question is required';
        if (!formData.securityAnswer?.trim()) newErrors.securityAnswer = 'Security answer is required';
        break;
        
      default:
        break;
    }
    
    return newErrors;
  };

  // Navigate to next step with validation
  const nextStep = () => {
    const stepErrors = validateStep(step);
    
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    
    setErrors({});
    setStep(prev => Math.min(prev + 1, 5));
  };

  // Navigate to previous step
  const prevStep = () => {
    setErrors({});
    setStep(prev => Math.max(prev - 1, 1));
  };

  // Reset form to initial state
  const resetForm = () => {
    setStep(1);
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setIsSubmitted(false);
    setIdFrontPreview(null);
    setIdBackPreview(null);
    setSelfiePreview(null);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all steps before submission
    const allErrors = {};
    for (let i = 1; i <= 5; i++) {
      const stepErrors = validateStep(i);
      Object.assign(allErrors, stepErrors);
    }
    
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Log form data to console (for demo)
      console.log('Form submitted:', {
        ...formData,
        idFront: formData.idFront?.name || 'No file',
        idBack: formData.idBack?.name || 'No file',
        selfie: formData.selfie?.name || 'No file'
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ form: 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render current step component
  const renderStep = () => {
    if (isSubmitted) {
      return <SuccessStep onReset={resetForm} />;
    }

    switch (step) {
      case 1:
        return <PersonalStep formData={formData} errors={errors} handleChange={handleChange} />;
      case 2:
        return <ContactStep formData={formData} errors={errors} handleChange={handleChange} />;
      case 3:
        return (
          <IdentityStep
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleImageUpload={handleImageUpload}
            idFrontPreview={idFrontPreview}
            idBackPreview={idBackPreview}
            selfiePreview={selfiePreview}
          />
        );
      case 4:
        return (
          <AccountStep
            formData={formData}
            errors={errors}
            handleChange={handleChange}
          />
        );
      case 5:
        return <ReviewStep formData={formData} errors={errors} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
      {!isSubmitted && <ProgressBar currentStep={step} />}
      
      <div className="p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          {renderStep()}
          
          {!isSubmitted && (
            <div className="mt-10 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center text-gray-600 hover:text-gray-800 font-medium py-3 px-6 rounded-lg"
                >
                  Back
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
                  disabled={isSubmitting}
                  className={`ml-auto flex items-center font-medium py-3 px-8 rounded-lg transition-colors ${
                    isSubmitting
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Processing...' : 'Submit Application'}
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AccountOpeningPage;