"use client"
import { useRouter, useSearchParams } from "next/navigation";
import './page.css';

interface CreateBusinessAccountLayoutProps {
    children: React.ReactNode;
}

const CreateBusinessAccountLayout: React.FC<CreateBusinessAccountLayoutProps> = ({
    children
}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const emailFromPreviousPage = searchParams.get('email');
    
    const handleHomeClick = () => {
        router.replace('/');
    };
    
    const handleBackClick = () => {
        router.replace(`/create-account?email=${emailFromPreviousPage}`);
    };

    return (
      <>
      <div className="row justify-content-center m-1">
          <button type="button" className="logo-button" onClick={handleHomeClick}>
            <img
              src="/images/ba-pro-xtra-logo.svg"
              alt="Home Depot Pro Xtra Logo"
              className="logo-image"
            />
          </button>
      </div>
      <div className="row">
          <p className="text-center fw-bold">Create a Pro Xtra Account</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
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
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          {children}
        </div>
      </div>
      </>
    );
};

export default CreateBusinessAccountLayout;