// src/components/auth/AuthModal.jsx - Updated with translations
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useTranslation } from 'react-i18next';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const { t } = useTranslation();
  
  if (!isOpen) return null;
  
  const handleSuccess = () => {
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative bg-amber-100 rounded-xl shadow-lg max-w-md w-full max-h-90vh overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {isLoginForm ? (
          <LoginForm onToggleForm={() => setIsLoginForm(false)} onSuccess={handleSuccess} />
        ) : (
          <SignupForm onToggleForm={() => setIsLoginForm(true)} onSuccess={handleSuccess} />
        )}
      </div>
    </div>
  );
};

export { AuthModal };