import CardAccountType from "../CardAccountType";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AccountType } from "@/domain/models/AccountType";
import AccountBenefit from "../AccountBenefit";
import { cloneDeep } from 'lodash';
import * as AccountTypesService from "../../../services/account-types.service";

interface StepOneProps {
    setIsStepOneCompleted: Dispatch<SetStateAction<boolean>>;
    onSelectAccountType: (accountType: AccountType) => void
}

const StepOne: React.FC<StepOneProps> = ({ setIsStepOneCompleted,
    onSelectAccountType
 }) => {
    
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
        onSelectAccountType(newAccountTypeSelected);
    }

    const cardAccountTypeView = accountTypes.map((accountType) => (
        <CardAccountType
            key={accountType.id}
            accountType={accountType} 
            handleClickAccountType={handleClickAccountType}
            isSelected={accountTypeSelected?.id === accountType.id}>
        </CardAccountType>
    ));

    return (
        <>
            <div className="row justify-content-center">
                {cardAccountTypeView}
            </div>
            <div className="row justify-content-start">
                {accountTypeSelected 
                    && accountTypeSelected.benefits.map(benefit => (
                    <AccountBenefit key={benefit.name} benefit={benefit}></AccountBenefit>))}
            </div>
        </>
    )
}

export default StepOne;