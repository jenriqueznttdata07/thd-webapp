'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './page.css';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";

interface CreateAccountLayoutProps {
    children: React.ReactNode;
}

const CreateAccountLayout: React.FC<CreateAccountLayoutProps> = (
    { children }
) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailFromPreviousPage = searchParams.get('email');

  const handleBackClick = () => {
    router.back()
  };

  const handleHomeClick = () => {
    router.replace('/')
  };

  const [isValidForm, setIsValid] = useState(false);

  return (
    <div className="flex-container">
      <button type="button" className="logo-button" onClick={handleHomeClick}>
        <img
          src="https://mma.prnewswire.com/media/118058/the_home_depot_logo.jpg?p=facebook"
          alt="Home Depot Logo"
          className="logo-image"
        />
      </button>
      <div className="header-container">
        <p className="header-text">Create a New Account using</p>
        <p className="header-email">{emailFromPreviousPage}</p>
      </div>
      <div className="back-button-container">
        <button type="button" onClick={handleBackClick} className="back-button">
          <span className="back-button-content">
            <img
              src="https://www.svgrepo.com/show/305142/arrow-ios-back.svg"
              alt="Back Arrow"
              className="back-arrow-icon"
            />
            Back
          </span>
        </button>
      </div>
      <div className="terms-container">
        {children}
      </div>
    </div>
  );
};

export default CreateAccountLayout;