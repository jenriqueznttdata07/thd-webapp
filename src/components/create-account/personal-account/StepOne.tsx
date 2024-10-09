import { ACCOUNT_TYPES } from "@/app/data/account-types";
import CardAccountType from "../CardAccountType";
import { useState } from "react";
import { AccountType } from "@/domain/models/AccountType";
import AccountBenefit from "../AccountBenefit";
import { cloneDeep } from 'lodash';

const StepOne: React.FC = () => {

    const [accountTypeSelected, setAccountTypeSelected] = useState<AccountType | null>(null);

    const handleClickAccountType = (accountType: AccountType) => {
        const newAccountTypeSelected = cloneDeep(accountType);
        setAccountTypeSelected(newAccountTypeSelected);
    }

    console.log('NEW -accountTypeSelected', accountTypeSelected);
    const cardAccountTypeView = ACCOUNT_TYPES.map((accountType) => (
        <CardAccountType
            key={accountType.id}
            accountType={accountType} 
            handleClickAccountType={handleClickAccountType}>
        </CardAccountType>
    ));

    return (
        <>
            <div className="row">
                {cardAccountTypeView}
                <div className="row">
                    {accountTypeSelected 
                        && accountTypeSelected.benefits.map(benefit => (
                        <AccountBenefit key={benefit.name} benefit={benefit}></AccountBenefit>))}
                </div>
            </div>
        </>
    )
}

export default StepOne;