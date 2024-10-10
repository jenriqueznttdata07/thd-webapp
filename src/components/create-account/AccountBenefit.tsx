import { Benefict } from "@/domain/models/AccountType"

interface AccountBenefitProps {
    benefit: Benefict;
}

const AccountBenefit: React.FC<AccountBenefitProps> = ({ benefit }) => {
    const { name, icon } = benefit;

    return (
        <>
            <p className="text-start">
                <img className="icon-benefits-account" src={`/images/${icon.image}`} alt={icon.name} />
                <span>{name}</span>
            </p>
        </>);
}

export default AccountBenefit;