"use client"
import PhoneInput from "@/components/PhoneInput";
import StepOne from "@/components/create-account/personal-account/StepOne";
import StepTwo from "@/components/create-account/personal-account/StepTwo";
import { AccountType } from "@/domain/models/AccountType";
import { createCode, createUser } from "@/services/auth.service";
import "@/styles/CreateAccount.css";
import { useFormik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import { v4 as uuid } from 'uuid';

interface NewAccount {
    id: string;
    email: string;
    isFirstTime: boolean;
    accountTypeId: number;
    password: string;
    phone: string;
}

const CreateAccountPage: React.FC = () => {
    const [isStepOneCompleted, setIsStepOneCompleted] = useState<boolean>(false);
    const [isStepTwoCompleted, setIsStepTwoCompleted] = useState<boolean>(false);
    const [isStepThreeCompleted, setIsStepThreeCompleted] = useState<boolean>(false);
    const [phone, setPhone] = useState<string | number | readonly string[] | undefined>('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const emailFromPreviousPage = searchParams.get('email') || '';
    const id = uuid();
    const initialValues = {
        id,
        isFirstTime: true,
        email: emailFromPreviousPage,
        accountTypeId: 0,
        password: "",
        phone: "",
    };
    const [newAccount, setNewAccount] = useState<NewAccount>({
        id,
        isFirstTime: true,
        email: emailFromPreviousPage,
        accountTypeId: 0,
        password: "",
        phone: "",
    });
    const validationSchema = {
        id: Yup.string(),
        email: Yup.string(),
        accountTypeId: Yup.number().required(),
        password: Yup.string().required(),
        phone: Yup.string().required(),
        isFirstTime: Yup.boolean().optional()
    };
    
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const handleClickAccountType = () => {
        console.log('handleClickAccountType');
        createUser(newAccount);
        createCode(newAccount.email);
        router.replace("/");
    }
    

    const handlePhoneInput = (value: string) => {
        setNewAccount({...newAccount, phone: value});
    }

    const handlePasswordInput = (value: string) => {
        setNewAccount({...newAccount, password: value});
    }

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

    const onSelectAccountType = (selectedAccountType: AccountType) => {
        console.log('onSelectAccountType', selectedAccountType);
        setNewAccount({...newAccount, accountTypeId: +selectedAccountType.id});
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
                    <StepOne 
                        setIsStepOneCompleted={setIsStepOneCompleted}
                        onSelectAccountType={onSelectAccountType}>
                    </StepOne>
                </div>
            </div>
            { newAccount.accountTypeId === 1 &&
                <>
                    <div className="row mb-3">
                        <div className="row">
                            <p className="text-start">
                                <button className={isStepCompleted(isStepTwoCompleted)}>2</button>
                                <span className="m-3 fw-bold">My Password will be</span>
                            </p>
                        </div>
                        <StepTwo
                            handlePasswordInput={handlePasswordInput}>
                        </StepTwo>
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
                </>
            }
            { newAccount.accountTypeId === 2 &&
                <>
                <div className="row justify-content-center m-3">
                    <button 
                        className="btn btn-warning col-12" 
                        onClick={handleCreateBusinessAccount}>Continue</button>
                </div>
                </>}
            
            { newAccount.accountTypeId === 1
                &&
                <>
                <button 
                    onClick={handleClickAccountType}
                    className="btn btn-warning col-12 mt-2">
                    Create My Account
                </button>
                <p className="text-center mt-3">
                By selecting 'Sign In' you are agreeing to the
                    <a href="https://www.homedepot.com/c/ProXtra_TermsandConditions#membership" className="terms-link" target="_blank" rel="noopener noreferrer">Pro Xtra Terms and Conditions</a>,
                    <a href="https://www.homedepot.com/c/Privacy_Security" className="terms-link" target="_blank" rel="noopener noreferrer">Privacy and Security Statement</a>,
                    <a href="https://www.homedepot.com/c/ProXtra_TermsandConditions#membership" className="terms-link" target="_blank" rel="noopener noreferrer">Notice of Financial Incentive</a> &
                    <a href="https://www.homedepot.com/c/PH_MyAccount" className="terms-link" target="_blank" rel="noopener noreferrer">My Account Terms and Conditions</a>.
                </p>
                </>
            }
        </>
    );
};

export default CreateAccountPage;