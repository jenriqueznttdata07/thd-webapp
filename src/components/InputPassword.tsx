import { useState } from "react";

const InputPassword: React.FC = () => {
    const [passwordType, setPasswordType] = useState<boolean>(true);

    const width = 100;

    const handleClick = () => {
        setPasswordType(!passwordType);
    }

    return (
        <>
            <div className="input-group mb-3">
                <input 
                    type={ passwordType ? "password" : "text"}
                    className="form-control"/>
                <button 
                    className="btn btn-outline-info" 
                    type="button"
                    onClick={handleClick}>
                        { passwordType ? "Show" : "Hide"}
                </button>
            </div>
            <p>Create a strong password</p>
            <p className="fw-bold">Password must contain:</p>
            <p>9 characters minimum</p>
            <p className="fw-bold">And 3 of the following</p>
            <p>Uppercase letter</p>
            <p>Lowercase letter</p>
            <p>Number</p>
            <p>Special characters</p>
            <p className="fw-bold">Stregth: <span>Excellent</span></p>
            <div>
                <div className="progress">
                    <div 
                        className="progress-bar bg-success" 
                        style={{ width: `${width}%` }}></div>
                </div>
            </div>
        </>
    );
}

export default InputPassword;