import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import  cards from '../icons/cards.png';
import  military from '../icons/military.png';
import  paycredit from '../icons/paycredit.png';
import  pro from '../icons/pro.png';
import  products from '../icons/products.png';
import  profile from '../icons/profile.png';
import  track from '../icons/track.png';
import { useRouter } from "next/navigation";

//import { useNavigate } from 'react-router-dom';

const ModalContent: React.FC = () => {

    const router = useRouter();


    //const navigate = useNavigate(); // Hook para la navegación

    const items = [
        { text: 'Track Order', icon: track  },
        { text: 'Crad & Accounts', icon: cards  },
        { text: 'Pay Credit Card Bill', icon: paycredit  },
        { text: 'Military Discount Benefit', icon: military},
        { text: 'Profile', icon: profile  },
        { text: 'Product List', icon: products  },

    ];

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
          default:
            router.push('/defaultpage'); // Ruta por defecto si no coincide con ninguno
        }
      };

    return (
        <>
            <ButtonGroup className="button-group-container mb-3">
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
          onClick={() => handleNavigation(item.text)}  // Llama la función handleNavigation
          className="button-list"
        >
          <div className="icon-container">
            {/* Aquí podrías colocar un ícono si tienes alguno */}
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