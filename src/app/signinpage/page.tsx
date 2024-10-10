'use client';
import React, { useState } from 'react';
import './page.css';
import { useRouter } from "next/navigation";
import { isRegister } from "@/app/services/auth.service";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SideModal from '@/components/SideModal'; 

const Page: React.FC = () => {
  const router = useRouter();

  const initialValues = {
    email: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please provide a valid email address.')
      .required('Email is required')
  });

 
  const handleSubmit = async (values: { email: string }) => {
    const isRegistered = await isRegister(values.email);
    setemail(values.email);

    if (isRegistered) {
        router.push(`/passwordpage?email=${encodeURIComponent(values.email)}`);
    } else {
        router.push(`/create-account?email=${encodeURIComponent(values.email)}`);
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const [isValidForm, setIsValid] = useState(false);

  const [showModal, setShowModal] = useState(false);  

  const [email, setemail] = useState('');  


  return (
    <div className="flex-container">
      <button type="button" className="logo-button" onClick={handleBackClick}>
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
              <label htmlFor="email" className="input-label">Email Address</label>
              <div className="input-container">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="on"
                  className="email-input"
                />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !isValidForm} 
              className="continue-button"
            >
              Continue
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

      {/* Modal */}
      <SideModal show={showModal} onClose={() => setShowModal(false)} email= {email} />
    </div>
  );
};

export default Page;