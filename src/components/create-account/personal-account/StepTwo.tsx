import InputPassword from "@/components/InputPassword";
import "@/styles/InputPassword.css";

interface StepTwoProps {
    handlePasswordInput: (value: string) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({
    handlePasswordInput
}) => {

    return (
        <>
        <div className="row">
            <InputPassword
                handlePasswordInput={handlePasswordInput}></InputPassword>
        </div>
        </>
    );
}

export default StepTwo;