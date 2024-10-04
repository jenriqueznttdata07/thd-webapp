import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import  cards from '../icons/cards.png';
import  military from '../icons/military.png';
import  paycredit from '../icons/paycredit.png';
import  pro from '../icons/pro.png';
import  products from '../icons/products.png';
import  profile from '../icons/profile.png';
import  track from '../icons/track.png';
//import { useNavigate } from 'react-router-dom';

const ModalContent: React.FC = () => {

    //const navigate = useNavigate(); // Hook para la navegación

    const items = [
        { text: 'Track Order', icon: track  },
        { text: 'Crad & Accounts', icon: cards  },
        { text: 'Pay Credit Card Bill', icon: paycredit  },
        { text: 'Military Discount Benefit', icon: military},
        { text: 'Profile', icon: profile  },
        { text: 'Product List', icon: products  },

    ];

    return (
        <>
            <ButtonGroup className="button-group-container mb-3">
                <Button
                    className="custom-button"
                    variant="secondary"
                    //onClick={() => navigate('/signinpage')}
                >
                    Sign in
                </Button>
                <Button
                    className="custom-button-2"
                    variant="light"
                    onClick={() => alert('Botón 2 clicado')}
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
                    </div>
                    <span className="sui-font-regular sui-text-base sui-tracking-normal sui-normal-case sui-line-clamp-unset sui-text-primary">
                        Are You a Pro?
                        Get online tools to manage and grow your business – plus, Pro Xtra Members unlock more benefits and savings. Learn More          </span>
                </button>
            </div>
            <div>
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => alert(`Seleccionaste: ${item.text}`)}
                        className="button-list"
                    >
                        <div className="icon-container">
                            {item.icon}
                        </div>
                        <span className="sui-font-regular sui-text-base sui-tracking-normal sui-normal-case sui-line-clamp-unset sui-text-primary">
                            {item.text}
                        </span>
                    </button>
                ))}
            </div>
        </>
    );
};

export default ModalContent;