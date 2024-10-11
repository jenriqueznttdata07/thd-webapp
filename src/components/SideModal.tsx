import React from 'react';
import '../styles/SideModal.css';
import { useRouter } from "next/navigation";
import smileface from '../icons/smileface.png';
import finger from '../icons/finger.png';
import key from '../icons/key.png';
interface SideModalProps {
    show: boolean;
    onClose: () => void;
    email: string;
}


const SideModal: React.FC<SideModalProps> = ({ show, onClose, email }) => {

    const router = useRouter();

    const handleNoThanksClick = () => {
        router.push(`/passwordpage?email=${encodeURIComponent(email!)}`);
    };

    const handleSendCodeClick = () => {
        router.push(`/verificationcodepage?email=${encodeURIComponent(email!)}`);
        const url = (`/codeviewpage?code=${encodeURIComponent(email!)}`);
        window.open(url)
    };
    return (
        <>
            {show && <div className="backdrop" onClick={onClose} />}
            <div className={`side-modal ${show ? 'show' : ''}`}>
                <div className="modal-header">
                    Signing in just got easier.
                </div>
                <div className="icon-container">
                    <img src={smileface.src} alt="Icon 1" />
                    <img src={finger.src} alt="Icon 2" />
                    <img src={key.src} alt="Icon 3" />
                </div>
                <button className="orange-button"
                    onClick={handleSendCodeClick}>Text me a code to sign in</button>
                <button className="orange-button2">Email me a Code to sign in</button>
                <a href="#" className="link">What is this?</a>
                <div className="divider" />
                <a href="#" className="link2" onClick={handleNoThanksClick}>No thanks</a>
            </div>
        </>
    );
};

export default SideModal;