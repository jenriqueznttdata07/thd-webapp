"use client"
import PhoneInput from "@/components/PhoneInput";
import StepOne from "@/components/create-account/personal-account/StepOne";
import StepTwo from "@/components/create-account/personal-account/StepTwo";
import "@/styles/CreateAccount.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const CreateAccountPage: React.FC = () => {

    const [isStepOneCompleted, setIsStepOneCompleted] = useState<boolean>(false);
    const [isStepTwoCompleted, setIsStepTwoCompleted] = useState<boolean>(false);
    const [isStepThreeCompleted, setIsStepThreeCompleted] = useState<boolean>(false);
    const [phone, setPhone] = useState<string | number | readonly string[] | undefined>('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const emailFromPreviousPage = searchParams.get('email') || '';
    

    const handlePhoneInput = (value: string) => {
        console.log('value', value);
        setPhone(value);
    }

    console.log('phone', phone);

    const isStepCompleted = (value: boolean) => {
        let baseStyle = "btn btn-step";
        baseStyle += value
            ? " btn-success"
            : "";
        return baseStyle;
    }
    
    const handleCreateBusinessAccount = () => {
        router.replace(`/create-business-account?email=${encodeURIComponent(emailFromPreviousPage)}`)
    }

    return (
        <>
            <div className="row">
                <div className="row">
                    <p className="text-start">
                        <button className={isStepCompleted(isStepOneCompleted)}>1</button>
                        <span className="m-3 fw-bold">I'm shopping for</span>
                    </p>
                </div>
                <div className="row">
                    <StepOne setIsStepOneCompleted={setIsStepOneCompleted}></StepOne>
                </div>
            </div>
            <div className="row mb-3">
                <div className="row">
                    <p className="text-start">
                        <button className={isStepCompleted(isStepTwoCompleted)}>2</button>
                        <span className="m-3 fw-bold">My Password will be</span>
                    </p>
                </div>
                <StepTwo></StepTwo>
            </div>
            <div className="row">
                <div className="row">
                    <div className="row">
                        <p className="text-start">
                            <button className={isStepCompleted(isStepThreeCompleted)}>3</button>
                            <span className="m-3 fw-bold">My phone number will be</span>
                        </p>
                    </div>
                    <PhoneInput
                        value={phone}
                        onChange={handlePhoneInput}
                        />
                </div>
            </div>
            <div className="row justify-content-center m-3">
                <button className="btn btn-warning col-12" onClick={handleCreateBusinessAccount}>Continue</button>
            </div>
            <div className="terms-container">
                By selecting 'Sign In' you are agreeing to the
                <a href="https://www.homedepot.com/c/ProXtra_TermsandConditions#membership" className="terms-link" target="_blank" rel="noopener noreferrer">Pro Xtra Terms and Conditions</a>,
                <a href="https://www.homedepot.com/c/Privacy_Security" className="terms-link" target="_blank" rel="noopener noreferrer">Privacy and Security Statement</a>,
                <a href="https://www.homedepot.com/c/ProXtra_TermsandConditions#membership" className="terms-link" target="_blank" rel="noopener noreferrer">Notice of Financial Incentive</a> &
                <a href="https://www.homedepot.com/c/PH_MyAccount" className="terms-link" target="_blank" rel="noopener noreferrer">My Account Terms and Conditions</a>.
                For Two-Factor Authentication, message and data rates may apply.
            </div>
        </>
    );
};

export default CreateAccountPage;