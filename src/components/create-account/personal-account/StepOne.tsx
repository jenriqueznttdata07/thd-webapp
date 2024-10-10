import CardAccountType from "../CardAccountType";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AccountType } from "@/domain/models/AccountType";
import AccountBenefit from "../AccountBenefit";
import { cloneDeep } from 'lodash';
import * as AccountTypesService from "../../../services/account-types.service";

interface StepOneProps {
    setIsStepOneCompleted: Dispatch<SetStateAction<boolean>>;
}

const StepOne: React.FC<StepOneProps> = ({ setIsStepOneCompleted }) => {
    
    const [accountTypes, setAccountTypes] = useState<AccountType[]>([]);
    const [accountTypeSelected, setAccountTypeSelected] = useState<AccountType | null>(null);

    useEffect(() => {
        const getData = async () => {
            const accountTypesData = await AccountTypesService.getAccountTypes();
            setAccountTypes(accountTypesData);
        }
        getData();
    },[accountTypes])

    const handleClickAccountType = (accountType: AccountType) => {
        const newAccountTypeSelected = cloneDeep(accountType);
        setAccountTypeSelected(newAccountTypeSelected);
        setIsStepOneCompleted(true);
    }

    const cardAccountTypeView = accountTypes.map((accountType) => (
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