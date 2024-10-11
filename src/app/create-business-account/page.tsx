"use client"

import InputPassword from "@/components/InputPassword";
import { useFormik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import { v4 as uuid } from 'uuid';
import PhoneInput from "@/components/PhoneInput";
import { createCode, createUser } from "@/services/auth.service";


interface BusinessAccount {
    id: string;
    email: string | null;
    password: string;
    phone: string;
    companyName: string;
    firstName: string;
    lastName: string;
    companyAddress: string;
    businessOrTrade: string;
}

const CreateBusinessAccountPage: React.FC = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const emailFromPreviousPage = searchParams.get('email');
    const id = uuid();
    const initialValues = {
        id,
        email: emailFromPreviousPage,
        password: '',
        phone: '',
        companyName: '',
        firstName: '',
        lastName: '',
        companyAddress: '',
        businessOrTrade: 'DEFAULT'
    };
    
    const [newBusinessAccount, setNewBusinessAccount] = useState<BusinessAccount>({
        id,
        email: emailFromPreviousPage,
        password: '',
        phone: '',
        companyName: '',
        firstName: '',
        lastName: '',
        companyAddress: '',
        businessOrTrade: 'DEFAULT'
    });
    const validationSchema = Yup.object({
        email: Yup.string()
            .email()
            .required("Email is required"),
        firstName: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("First Name is required"),
        lastName: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("Last Name is required"),
        companyName: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required(),
        phone: Yup.string()
            .min(10, "Must be 10 characters")
            .max(10, "Must be 10 characters"),
        businessOrTrade: Yup.string().optional()
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log('values', values);
            createUser(values);
            createCode(values.email || '');
        }
    });

    const handleOnChangePassword = (password: string) => {
        setNewBusinessAccount({...newBusinessAccount, password});
    }

    const handlePhoneInput = (phone: string) => {
        setNewBusinessAccount({...newBusinessAccount, phone});
    }

    return (
        <>
            <div className="row">
                <div className="col-6 justify-content-end">
                    <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <InputPassword
                            handlePasswordInput={handleOnChangePassword}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="CompanyName" className="form-label">Company Name</label>
                        <input type="text" className="form-control" id="companyName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="mb-3">
                        <PhoneInput
                                    value={newBusinessAccount.phone}
                                    onChange={handlePhoneInput}
                                    />
                        </div>
                    <div className="mb-3">
                        <label htmlFor="companyAddress" className="form-label">Company Address</label>
                        <input type="text" className="form-control" id="companyAddress" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="businessOrTrade" className="form-label">Business or Trade</label>
                        <select className="form-select" id="businessOrTrade">
                            <option value="DEFAULT">Select a Business or Trade</option>
                            <option value="CARPENTRY">Carpentry</option>
                            <option value="EDU">Education</option>
                            <option value="ELECTRICAL">Electrical</option>
                            <option value="FIRE WATER REST">Fire/Water Restoration</option>
                            <option value="GOVERNMENT">Government</option>
                            <option value="HANDYPERSON">Handyperson</option>
                            <option value="HEALTHCARE">Healthcare</option>
                            <option value="HOTELS">Hotels and Lodging</option>
                            <option value="HOUSING AUTHORITIES">Housing Authorities</option>
                            <option value="IMP EXP">Import/Export</option>
                            <option value="JAN BLD SRV">Janitorial Building Services</option>
                            <option value="LANDSCAPING">Landscaping</option>
                            <option value="MANUFACTURING">Manufacturing</option>
                            <option value="MULT FAM CONST">MultiFamily Residential Construction</option>
                            <option value="NON PROF ORG">Non-Profit Organization</option>
                            <option value="NON RES CONST">Non-Residential Construction</option>
                            <option value="NON RES REM">Non-Residential Remodeling</option>
                            <option value="PAINTERS">Painter</option>
                            <option value="PLUM HVAC">Plumbing and HVAC</option>
                            <option value="PROPTY INV">Property Investment</option>
                            <option value="NON RES PROP MGMT">Property Management, Non-Residential</option>
                            <option value="RES PROP MGMT">Property Management, Single and Multifamily</option>
                            <option value="HOMEOWNER">Property Owner</option>
                            <option value="RES REM">Residential Remodeling</option>
                            <option value="REST EVNT">Restaurants and Event Spaces</option>
                            <option value="ROOFING">Roofing</option>
                            <option value="RES CONST">Single-Family Residential Construction</option>
                            <option value="OTHR">Other</option>
                        </select>
                    </div>
                    <button 
                        className="btn btn-warning col-12 mt-2">
                        Register for Pro Xtra
                    </button>
                    </form>
                    <p className="text-center mt-3">
                        By selecting 'Register for Pro Xtra' you are agreeing to the
                        <a href="https://www.homedepot.com/c/ProXtra_TermsandConditions#membership" className="terms-link" target="_blank" rel="noopener noreferrer">Pro Xtra Terms and Conditions</a>,
                        <a href="https://www.homedepot.com/c/Privacy_Security" className="terms-link" target="_blank" rel="noopener noreferrer">Privacy and Security Statement</a>,
                        <a href="https://www.homedepot.com/c/ProXtra_TermsandConditions#membership" className="terms-link" target="_blank" rel="noopener noreferrer">Notice of Financial Incentive</a> &
                        <a href="https://www.homedepot.com/c/PH_MyAccount" className="terms-link" target="_blank" rel="noopener noreferrer">My Account Terms and Conditions</a>.
                    </p>
                </div>
                <div className="col-6 justify-content-start">
                    <h5>Pro Xtra Account Benefits</h5>
                    <p>
                        Pro Xtra is The Home Depot’s free loyalty program built just for Pros —providing members with exclusive benefits that help them save time, save money and get rewarded. Pro Xtra benefits include:
                    </p>
                    <p className="text-start">
                        <img src="/images/ba-perks.svg" alt="Perks" />
                        <span className="m-5 fw-bold">Perks</span>
                    </p>
                    <p className="text-start">
                        <img src="/images/ba-purchase-tracking.svg" alt="Purchase Tracking" />
                        <span className="m-5 fw-bold">Purchase Tracking</span>
                    </p>
                    <p className="text-start">
                        <img src="/images/ba-exclusive-offers.svg" alt="Exclusive Offers" />
                        <span className="m-5 fw-bold">Exclusive Offers</span>
                    </p>
                    <p className="text-start">
                        <img src="/images/ba-volume-pricing-program.svg" alt="Volume Pricing Program" />
                        <span className="m-5 fw-bold">Volume Pricing Program</span>
                    </p>
                    <p className="text-start">
                        <img src="/images/ba-pro-xtra-paint-rewards.svg" alt="Pro Xtra Pain Rewards" />
                        <span className="m-5 fw-bold">Pro Xtra Pain Rewards</span>
                    </p>
                    <p className="text-start">
                        <img src="/images/ba-text2confirm-purchase-authorization.svg" alt="Text2Confirm Purchase Authorization" />
                        <span className="m-5 fw-bold">Text2Confirm Purchase Authorization</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default CreateBusinessAccountPage; 