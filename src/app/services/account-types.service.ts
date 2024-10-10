import { AccountType } from "@/domain/models/AccountType";
import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";

export const getAccountTypes = async (): Promise<AccountType[]> => {
    const response = await axios.get<null, AxiosResponse<AccountType[]> | AxiosError<Error>>(`http://localhost:3000/account-types`)
    if(isAxiosError(response) || response.status !== 200) {
        throw response;
    };
    return response.data;

}