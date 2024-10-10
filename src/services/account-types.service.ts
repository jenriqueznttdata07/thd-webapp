import { AccountType } from "@/domain/models/AccountType";
import AxiosIntance from "@/utils/axios-intance";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";

export const getAccountTypes = async (): Promise<AccountType[]> => {
    const response = await AxiosIntance.get<null, AxiosResponse<AccountType[]> | AxiosError<Error>>(`account-types`)
    if(isAxiosError(response) || response.status !== 200) {
        throw response;
    };
    return response.data;

}