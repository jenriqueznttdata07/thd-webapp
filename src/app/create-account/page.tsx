"use client"
import PhoneInput from "@/components/PhoneInput";
import StepOne from "@/components/create-account/personal-account/StepOne";
import StepTwo from "@/components/create-account/personal-account/StepTwo";
import "@/styles/CreateAccount.css";
import { useState } from "react";

const CreateAccount: React.FC = () => {

    const [isStepOneCompleted, setIsStepOneCompleted] = useState<boolean>(false);
    const [phone, setPhone] = useState<string | number | readonly string[] | undefined>('');

    const handlePhoneInput = (value: string) => {
        console.log('value', value);
        setPhone(value);
    }

    console.log('phone', phone);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <button>Cancel</button>
                    </div>
                    <div className="col-8">
                        <button>
                            <img src="/images/thd-logo.svg" alt="TheHomeDepotLogo" />
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="fw-bold">Create a New Account using</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="fw-bold">jenriquezc7@gmail.com</p>
                    </div>
                </div>
                <div className="row">
                    <div className="row">
                        <div className="row">
                            <p>
                                <button>1</button>
                                <span>I'm shopping for</span>
                            </p>
                        </div>
                        <StepOne setIsStepOneCompleted={setIsStepOneCompleted}></StepOne>
                    </div>
                    <div className="row mb-3">
                        <div className="row">
                            <p>
                                <button>2</button>
                                <span>My Password will be</span>
                            </p>
                        </div>
                        <StepTwo></StepTwo>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="row">
                                <p>
                                    <button>3</button>
                                    My phone number will be
                                </p>
                            </div>
                            <PhoneInput
                                value={phone}
                                onChange={handlePhoneInput}
                                />
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <button>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAccount;