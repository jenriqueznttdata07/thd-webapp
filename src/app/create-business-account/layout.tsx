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
        router.replace('/')
    };
    
    const handleBackClick = () => {
        router.back()
    };

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
            <p className="header-text">Create a Pro Xtra Account</p>
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

export default CreateBusinessAccountLayout;