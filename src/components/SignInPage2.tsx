import React, { useState } from 'react';
import './styles/SignInPage.css';
import Link from 'next/link';

const SingInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(emailValue));
  };

  const handlethdLogo = () =>{
    window.location.href = 'https://www.homedepot.com'; //change this url 
  } 
  const handleContinueClick = () => {
    
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <Link href={"/signinpage"}>
    <div className="flex-container">
      <button type="button" className="logo-button" onClick={handleContinueClick}>
        <img
          src="https://mma.prnewswire.com/media/118058/the_home_depot_logo.jpg?p=facebook"
          alt="Home Depot Logo"
          className="logo-image"
        />
      </button>
      <div className="header-container">
        <p className="header-text">Enter Your Email Address</p>
      </div>
      <div className="back-button-container">
      <button 
        type="button"
        onClick={handleBackClick}
        className="back-button"
      >
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
      <form className="email-form">
        <div className="input-group">
          <label htmlFor="username" className="input-label">Email Address</label>
          <div className="input-container">
            <input
              id="username"
              type="email"
              autoComplete="on"
              value={email}
              onChange={handleEmailChange}
              aria-describedby="username-status-message"
              className="email-input"
            />
            <span className={isValid ? "icon-success" : "icon-error"}>
              <svg className="icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d={isValid ? "" : "https://static.vecteezy.com/system/resources/previews/000/378/717/non_2x/svg-vector-icon.jpg"} />
              </svg>
            </span>
          </div>
          <p className="error-message" id="username-status-message">
            {isValid ? '' : 'Please provide a valid email address.'}
          </p>
        </div>
        <button
          type="button"
          disabled={!isValid}
          className="continue-button" onClick={handleContinueClick}
        >
          Continue
        </button>
      </form>

      <div className="terms-container">
        By selecting 'Sign In' you are agreeing to the
        <a href="https://www.homedepot.com/c/ProXtra_TermsandConditions#membership" className="terms-link" target="_blank" rel="noopener noreferrer">Pro Xtra Terms and Conditions</a>,
        <a href="https://www.homedepot.com/c/Privacy_Security" className="terms-link" target="_blank" rel="noopener noreferrer">Privacy and Security Statement</a>,
        <a href="https://www.homedepot.com/c/ProXtra_TermsandConditions#membership" className="terms-link" target="_blank" rel="noopener noreferrer">Notice of Financial Incentive</a> &amp;
        <a href="https://www.homedepot.com/c/PH_MyAccount" className="terms-link" target="_blank" rel="noopener noreferrer">My Account Terms and Conditions</a>.
        For Two-Factor Authentication, message and data rates may apply.
      </div>
    </div>
    </Link>
  );
};

export default SingInPage;