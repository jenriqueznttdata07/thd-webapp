import { AccountType } from "@/domain/models/AccountType";
import "@/styles/CreateAccount.css";

interface CardAccountTypeProps {
    accountType: AccountType;
    handleClickAccountType: (accountType: AccountType) => void;
    isSelected: boolean;
}

const CardAccountType: React.FC<CardAccountTypeProps> = ({ accountType,
    handleClickAccountType,
    isSelected }) => {

    const { id, name, icons, accountType: accountTypeValue } = accountType;

    const iconsView = icons.map(icon => (
        <img 
            key={icon.name}
            className={id === 1 ? "logo-personal-account" : "logo-personal-business-account" }
            src={`/images/${icon.image}`} 
            alt={icon.name}
            />
    ))

    const isSelectedCard = () => {
        let baseStyle = "col-4 card justify-content-center m-1 p-2"
        baseStyle += isSelected 
            ? " fw-bold card-account-selected "
            : "";
        return baseStyle; 
    }

    return (
        <>
            <div 
                className={isSelectedCard()}
                onClick={() => handleClickAccountType(accountType)}>
                <div className="row text-center">
                    {iconsView}
                </div>
                <div className="row text-center">
                    <p>{name}</p>
                    <p>({accountTypeValue})</p>
                </div>
            </div>
        </>);
}

export default CardAccountType