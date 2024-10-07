'use client';
import React, { useState, useEffect } from 'react';
import { getAuth } from "@/app/services/auth.service";
import { useAppDispatch } from "@/app/store";
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import './page.css';


interface OtraPaginaProps {
  emailFromPreviousPage: string; // Prop para recibir el email
}

interface User {
    email: string;
    password: string;
}

const PasswordPage: React.FC<OtraPaginaProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailFromPreviousPage = searchParams.get('email');

  const [email, setEmail] = useState(emailFromPreviousPage);
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState<User>({ email: '', password: '' });
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (emailFromPreviousPage) {
      setValues({ ...values, email: emailFromPreviousPage });
    }
  }, [emailFromPreviousPage]);

  useEffect(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(emailFromPreviousPage!));
  }, [emailFromPreviousPage]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleContinueClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      //const response = await getAuth(values);
      //const id = response.id ? response.id : '';
      router.push('/');
    } catch (err) {
      console.error(err);
    }  };

  const handleBackClick = () => {
    window.history.back();
  };

  const handleAnotherActionClick=  () => {
    window.history.back();

  };

  return (
    <div className="flex-container">
      <button type="button" className="logo-button" onClick={handleContinueClick}>
        <img
          src="https://mma.prnewswire.com/media/118058/the_home_depot_logo.jpg?p=facebook"
          alt="Home Depot Logo"
          className="logo-image"
        />
      </button>
      <div className="header-container">
        <p className="header-text">Enter your Password:</p>
        <p className="header-text">Email:</p>
        <p className="header-email">{email}</p>
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
      <form className="email-form">
        <div className="input-group">
          <label htmlFor="password" className="input-label">Enter Your Password</label>
          <div className="input-container">
            <input
              id="password"
              type="password"
              autoComplete="on"
              value={values.password}
              onChange={handleEmailChange}
              name="password" // Asegúrate de que el name sea "password"
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
            {isValid ? '' : 'Enter your password.'}
          </p>
        </div>
        <button
          type="button"
          disabled={!isValid}
          className="continue-button"
          onClick={handleContinueClick}
        >
          Continue
        </button>
        <button
          type="button"
          className="continue-button"
          onClick={handleAnotherActionClick}
        >
          Cancel
        </button>
      </form>

      <div className="terms-container">
        By selecting 'Sign In' you are agreeing to the
        <a href="https://www.homedepot.com/c/ProXtra_TermsandConditions#membership" className="terms-link" target="_blank" rel="noopener noreferrer">Pro Xtra Terms and Conditions</a>,
        <a href="https://www.homedepot.com/c/Privacy_Security" className="terms-link" target="_blank" rel="noopener noreferrer">Privacy and Security Statement</a>,
        <a href="https://www.homedepot.com/c/ProXtra_TermsandConditions#membership" className="terms-link" target="_blank" rel="noopener noreferrer">Notice of Financial Incentive</a> &
        <a href="https://www.homedepot.com/c/PH_MyAccount" className="terms-link" target="_blank" rel="noopener noreferrer">My Account Terms and Conditions</a>.
        For Two-Factor Authentication, message and data rates may apply.
      </div>
    </div>
  );
};

export default PasswordPage;