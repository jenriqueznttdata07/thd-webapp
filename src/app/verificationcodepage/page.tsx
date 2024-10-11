'use client';
import React, { useState } from 'react';
import { getAuthByCode } from "@/app/services/auth.service";
import { useAppDispatch } from "@/app/store";
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { setAuth, setJid } from '../store/slices/authSlice';
import * as Yup from 'yup';
import './page.css';


interface CodePageProps {
  emailFromPreviousPage: string; 
}

const VerificationCodePage: React.FC<CodePageProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailFromPreviousPage = searchParams.get('email');

  const dispatch = useAppDispatch();

  const initialValues = {
    email: emailFromPreviousPage || '',
    code: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    code: Yup.string()
      .required('code is required') 
  });

  const handleSubmit = async (values: { email: string; code: string }) => {
    try {
      const response = await getAuthByCode(values.code);
     if(response){
      dispatch(setAuth(true))
      router.push('/');
     }else{
       alert('the code is incorrect');
     }
    } catch (err) {
      console.error(err);
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const handleAnotherActionClick = () => {
    window.history.back();
  };


  const [isValidForm, setIsValid] = useState(false);

  return (
    <div className="flex-container">
      <button type="button" className="logo-button" onClick={handleAnotherActionClick}>
        <img
          src="https://mma.prnewswire.com/media/118058/the_home_depot_logo.jpg?p=facebook"
          alt="Home Depot Logo"
          className="logo-image"
        />
      </button>
      <div className="header-container">
        <p className="header-text">Enter your Verification code:</p>
        <p className="header-text">Email:</p>
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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={true} 
        validate={(values) => {
          const isValid = validationSchema.isValidSync(values);
          setIsValid(isValid);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="email-form">
            <div className="input-group">
              <label htmlFor="code" className="input-label">Verification code entry</label>
              <div className="input-container">
                <Field
                  id="code"
                  name="code"
                  autoComplete="on"
                  className="email-input"
                />
                <ErrorMessage name="code" component="div" className="error-message" />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !isValidForm} 
              className="continue-button"
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
          </Form>
        )}
      </Formik>
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

export default VerificationCodePage;