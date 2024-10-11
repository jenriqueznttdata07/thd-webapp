import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import cards from '../icons/cards.png';
import military from '../icons/military.png';
import paycredit from '../icons/paycredit.png';
import pro from '../icons/pro.png';
import products from '../icons/products.png';
import profile from '../icons/profile.png';
import track from '../icons/track.png';
import logout from '../icons/logout.png';
import { useRouter } from "next/navigation";
import '../styles/AdaptiveModal.css';
import { useAppSelector } from '@/app/store';
import { setAuth, setJid } from '@/app/store/slices/authSlice';
import { useAppDispatch } from "@/app/store";



const ModalContent: React.FC = () => {
    const router = useRouter();
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const dispatch = useAppDispatch();


    const items = [
        { text: 'Track Order', icon: track },
        { text: 'Crad & Accounts', icon: cards },
        { text: 'Pay Credit Card Bill', icon: paycredit },
        { text: 'Military Discount Benefit', icon: military },
        { text: 'Profile', icon: profile },
        { text: 'Product List', icon: products },
    ];

    if (isAuth) {
        items.push({ text: 'Logout', icon: logout })
    }


    const handleNavigation = (text: string) => {
        switch (text) {
            case 'Track Order':
                router.push('/track-order');
                break;
            case 'Pay Credit Card Bill':
                router.push('/pay-credit-card');
                break;
            case 'Military Discount Benefit':
                router.push('/military-discount-benefit');
                break;
            case 'Profile':
                router.push('/profile');
                break;
            case 'Product List':
                router.push('/product-list');
                break;
            case 'Logout':
                dispatch(setJid(''));
                dispatch(setAuth(false));
                router.push('/');
                break;
            default:
                router.push('/defaultpage');
        }
    };

    return (
        <>

            <ButtonGroup className="button-group-container mb-3" hidden={isAuth}>
                <Button
                    className="custom-button"
                    variant="secondary"
                    onClick={() => router.push('/signinpage')}
                >
                    Sign in
                </Button>
                <Button
                    className="custom-button-2"
                    variant="light"
                    onClick={() => router.push('/signinpage')}
                >
                    Register
                </Button>
            </ButtonGroup>

            <div className="extra-item" style={{ marginBottom: '10px' }}>
                <button
                    onClick={() => alert('Ítem Extra clicado')}
                    className="button-list"
                >
                    <div className="icon-container">
                        <img src={pro.src} alt={'Pro icon'} className='icon-image' />
                    </div>
                    <span className="sui-font-regular sui-text-base sui-tracking-normal sui-normal-case sui-line-clamp-unset sui-text-primary">
                        Are You a Pro?
                        Get online tools to manage and grow your business – plus, Pro Xtra Members unlock more benefits and savings. Learn More
                    </span>
                </button>
                <div className="divider" />
            </div>
            <div>
                {items.map((item, index) => (
                    <div className='button-list:hover' key={index}>
                        <button
                            onClick={() => handleNavigation(item.text)}
                            className="button-list"
                        >
                            <div className="icon-container">
                                <img src={item.icon.src} alt={item.text} className='icon-image' />
                            </div>
                            <span className="sui-font-regular sui-text-base sui-tracking-normal sui-normal-case sui-line-clamp-unset sui-text-primary">
                                {item.text}
                            </span>
                        </button>
                        <div className="divider" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ModalContent;