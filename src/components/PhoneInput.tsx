import { ChangeEventHandler, InputHTMLAttributes, forwardRef, useState } from "react";
import { InputMask, MaskEvent, MaskEventDetail, MaskEventHandler } from "@react-input/mask";

interface PhoneInputProps {
    value: string | number | readonly string[] | undefined;
    onChange: (value: string) => void;
}

interface CustomPhoneInput {
    label?: string;
}

const CustomPhoneInput = forwardRef<HTMLInputElement, CustomPhoneInput>(({ label }, forwardedRef) => {
    return (
        <>
            <input 
                id="custom-phone-input"
                ref={forwardedRef} 
                className="form-control"
                />  
        </>
    );
});

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange }) => {
    const [detail, setDetail] = useState<MaskEventDetail | null>(null);

    const handleMask: MaskEventHandler = (event: MaskEvent) => {
        setDetail(event.detail);
        onChange(event.detail.input);

    }

    return (
        <>
        <InputMask
            component={CustomPhoneInput}
            mask="(___) ___-____"
            replacement={{ _: /\d/}}
            onMask={handleMask}
        />
        {detail?.input && !detail.isValid && <span>The field is not filled.</span>}
        </>
    );
}

export default PhoneInput;
