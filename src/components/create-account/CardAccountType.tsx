import { AccountType } from "@/domain/models/AccountType";

interface CardAccountTypeProps {
    accountType: AccountType;
    handleClickAccountType: (accountType: AccountType) => void;
}

const CardAccountType: React.FC<CardAccountTypeProps> = ({ accountType,
    handleClickAccountType }) => {

    const { name, icons, accountType: accountTypeValue } = accountType;

    const iconsView = icons.map(icon => (
        <img 
            key={icon.name}
            className="logo-personal-account" 
            src={`/images/${icon.image}`} 
            alt={icon.name}
            />
    ))

    return (
        <>
            <div 
                className="col-2 card"
                onClick={() => handleClickAccountType(accountType)}>
                <div className="row">
                    {iconsView}
                </div>
                <div className="row">
                    <p>{name}</p>
                    <p>({accountTypeValue})</p>
                </div>
            </div>
        </>);
}

export default CardAccountType