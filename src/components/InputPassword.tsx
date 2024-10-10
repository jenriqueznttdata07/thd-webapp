import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

interface ValidPassword {
    isLengthValid: boolean;
    hasOneLowercase: boolean;
    hasOneUppercase: boolean;
    hasOneNumber: boolean;
    hasOneSpecialChar: boolean;
}


const InputPassword: React.FC = () => {
    const [passwordType, setPasswordType] = useState<boolean>(true);
    const [validPassword, setValidPassword] = useState<ValidPassword>({
        isLengthValid: false,
        hasOneLowercase: false,
        hasOneUppercase: false,
        hasOneNumber: false,
        hasOneSpecialChar: false
    });
    const [strength, setStrength] = useState<string>('');

    const STRENGTH: { [name:string]: number } = {
        Initial: 0,
        Poor: 25,
        Fair: 50,
        Good: 75,
        Excellent: 100
    };
    const STRENGTH_STYLE: { [name:string]: string } = {
        Poor: "bg-danger",
        Fair: "bg-warning",
        Good: "bg-info",
        Excellent: "bg-success"
    }
    const AT_LEAST_ONE_LOWERCASE_REGEX = /.*[a-z]{1,}.*/g;
    const AT_LEAST_ONE_UPPPERCASE_REGEX = /.*[A-Z]{1,}.*/g;
    const AT_LEAST_ONE_NUMBER_REGEX = /.*[0-9]{1,}.*/g;
    const AT_LEAST_ONE_SPECIAL_CHAR_REGEX = /.*[\|\°\¬\!\"\#\$\%\&\/\(\)\=\'\?\\\¡\¿\¨\´\*\+\~\[\{\^\}\]\`\,\;\.\:\-\_]{1,}.*/g;
    
    const validationSchema = Yup.object({
        password: Yup.string()
            .test({
                name: "is-password-valid",
                test: (value, context: Yup.TestContext) => {
                    let requirementsCount = 0;
                    let message: Yup.Message<any> = '';
                    const params: ValidPassword = {
                        isLengthValid: true,
                        hasOneUppercase: false,
                        hasOneLowercase: false,
                        hasOneNumber: false,
                        hasOneSpecialChar: false
                    };

                    if (value === undefined || value.length < 9) {
                        params.isLengthValid = false;
                        message = "Please use at least 9 characters";
                    }

                    if(value && AT_LEAST_ONE_LOWERCASE_REGEX.test(value)) {
                        requirementsCount++;
                        params.hasOneLowercase = true;
                    }
                    

                    if(value && AT_LEAST_ONE_UPPPERCASE_REGEX.test(value)) {
                        requirementsCount++;
                        params.hasOneUppercase = true;
                    }

                    if(value && AT_LEAST_ONE_NUMBER_REGEX.test(value)) {
                        requirementsCount++;
                        params.hasOneNumber = true;
                    }

                    if(value && AT_LEAST_ONE_SPECIAL_CHAR_REGEX.test(value)) {
                        requirementsCount++;
                        params.hasOneSpecialChar = true;
                    }
                    
                    if(!message.length && requirementsCount < 3) {
                        message = "Password must meet at least 3 of the requirements.";
                    }

                    if(message.length > 0) {
                        console.log('message', message);
                        setValidPassword({ ...params });
                        calculateStrength(params);
                        return context.createError({ message });
                    }

                    setValidPassword({ ...params });
                    calculateStrength(params);
                    return true;
                }
            })
    });


    const calculateStrength = (params: ValidPassword) => {
        let value = '';
        const { isLengthValid, ...threeOfFourRequirements } = params;

        const resultRequeriments = Object.values(threeOfFourRequirements).filter(req => req);

        value = !isLengthValid && resultRequeriments.length === 1 ? 'Poor': 'Poor';
        value = !isLengthValid && resultRequeriments.length >= 3 ? 'Poor': value;
        value = isLengthValid && resultRequeriments.length === 1 ? 'Fair': value;
        value = isLengthValid && resultRequeriments.length === 2 ? 'Good': value;
        value = isLengthValid && resultRequeriments.length >= 3 ? 'Excellent': value;
        
        setStrength(value);
    };

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        }
    });

    const handleClick = () => {
        setPasswordType(!passwordType);
    }

    const verifyRequirement = (requirementValue: boolean) => {
        return requirementValue 
            ? <i className="bi bi-check text-success fs-3"></i>
            : <i className="bi bi-x text-secondary fs-3"></i>;
    }

    return (
        <>
            <div className="input-group mb-3">
                <input 
                    id="password"
                    type={ passwordType ? "password" : "text"}
                    className="form-control"
                    {...formik.getFieldProps("password")}/>
                <button 
                    className="btn btn-outline-info" 
                    type="button"
                    onClick={handleClick}>
                        { passwordType ? "Show" : "Hide"}
                </button>
            </div>
            <p className="text-start">Create a strong password</p>
            <p className="text-start fw-bold">Password must contain:</p>
            <p className="text-start">
                <span className="fs-6 text-body-secondary">
                    {verifyRequirement(validPassword.isLengthValid)}
                    9 characters minimum
                </span>
            </p>
            <p className="text-start fw-bold">And 3 of the following</p>
            <p className="text-start">
                <span className="fs-6 text-body-secondary m-2">
                    {verifyRequirement(validPassword.hasOneUppercase)}
                    Uppercase letter
                </span>
                <span className="fs-6 text-body-secondary m-2">
                    {verifyRequirement(validPassword.hasOneNumber)}
                    Number
                </span>
            </p>
            <p className="text-start">
                <span className="fs-6 text-body-secondary m-2">
                    {verifyRequirement(validPassword.hasOneLowercase)}
                    Lowercase letter
                </span>
                <span className="fs-6 text-body-secondary m-2">
                    {verifyRequirement(validPassword.hasOneSpecialChar)}
                    Special characters
                </span>
            </p>
            <p className="fw-bold text-start">Stregth: <span>{strength}</span></p>
            <div>
                <div className="progress">
                    <div 
                        className={`progress-bar ${STRENGTH_STYLE[strength]}`}
                        style={{ width: `${STRENGTH[strength]}%` }}></div>
                </div>
            </div>
        </>
    );
}

export default InputPassword;