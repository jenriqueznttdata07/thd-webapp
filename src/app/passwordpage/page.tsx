'use client';
import React, { useState } from 'react';
import { getAuth } from "@/services/auth.service";
import { useAppDispatch } from "@/app/store";
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './page.css';
import { setAuth, setJid } from '../store/slices/authSlice';
import { useAppSelector } from '@/app/store';



interface PasswordPageProps {
  emailFromPreviousPage: string; // Prop para recibir el email
}

const PasswordPage: React.FC<PasswordPageProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailFromPreviousPage = searchParams.get('email');

  const dispatch = useAppDispatch();

  const initialValues = {
    email: emailFromPreviousPage || '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required') 
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const response = await getAuth(values);
      const id = response.id ? response.id : '';
      dispatch(setJid(id))
      dispatch(setAuth(true))

      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  const handleBackClick = () => {
    router.push('/signinpage')
  };

  const handleAnotherActionClick = () => {
    router.push('/signinpage')
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
        <p className="header-text">Enter your Password:</p>
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
              <label htmlFor="password" className="input-label">Enter Your Password</label>
              <div className="input-container">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="on"
                  className="email-input"
                />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
            </div>
            <div className='butttoncontainer'>
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
            </div>
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

export default PasswordPage;