"use client"
import StepOne from "@/components/create-account/personal-account/StepOne";
import StepTwo from "@/components/create-account/personal-account/StepTwo";
import "@/styles/CreateAccount.css";

const CreateAccount: React.FC = () => {
    return (
        <>
            <div>
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
                        <p>Create a New Account using</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>jenriquezc7@gmail.com</p>
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
                        <StepOne></StepOne>
                    </div>
                    <div className="row">
                        <div className="row">
                            <p>
                                <button>2</button>
                                <span>My Password will be</span>
                            </p>
                        </div>
                        <StepTwo></StepTwo>
                    </div>
                    <div>
                        <div>
                            <div>
                                <button>3</button>
                                <p>My phone number will be</p>
                            </div>
                            <div>
                                <input type="text" placeholder="Enter a phone number" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
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