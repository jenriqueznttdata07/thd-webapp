import React, { useState, useEffect } from 'react';
import { getAuth } from "@/app/services/auth.service";
import { useAppDispatch } from "@/app/store";
import { useRouter } from "next/navigation";



import './SignInPage.css';

interface OtraPaginaProps {
  emailFromPreviousPage: string; // Prop para recibir el email
}

interface User {
    email: string;
    password: string;
}

const PasswordPage: React.FC<OtraPaginaProps> = ({ emailFromPreviousPage }) => {
  const [email, setEmail] = useState(emailFromPreviousPage);
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState<User>({ email: '', password: ''});
  const router = useRouter();

  setValues({...values, email: emailFromPreviousPage});

  const dispatch = useAppDispatch();




  useEffect(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(email));
  }, [email]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({...values, [name]: value});
    //const emailValue = event.target.value;
    //setEmail(emailValue);
  };

  const handleContinueClick = () => {
    window.location.href = 'https://www.homedepot.com'; // Cambia esta URL si es necesario
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const handleAnotherActionClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
        const response = await getAuth(values);
        const id = response.id ? response.id : ''
        //dispatch(setJid(id))
        //dispatch(setAuth(true))
        router.push('/account');
    } catch(err) {
        console.error(err);
    } finally {
       // setLoading(false);
    }
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
        <p className="header-email">{email}</p> {/* Mostrar el email aquí */}
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
          <label htmlFor="username" className="input-label">Enter Your Email Address</label>
          <div className="input-container">
            <input
              id="username"
              type="email"
              autoComplete="on"
              value={values.password}
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
          className="continue-button" // Misma clase que el botón "Continuar"
          onClick={handleAnotherActionClick}
        >
          Another Action
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
  );
};

export default PasswordPage;