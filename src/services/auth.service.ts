import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { User } from "../domain/models/User";
import AxiosIntance from "@/utils/axios-intance";
import { AuthCode } from "@/domain/models/AuthCode";

export const getAuth = async (user: User): Promise<User> => {
    const response = await AxiosIntance.get<null, AxiosResponse<User[]> | AxiosError<Error>>(`users?username=${user.email}&password=${user.password}`)
    console.log('getAuth-response', response);
    if(isAxiosError(response) || response.status !== 200) {
        throw response;
    };
    console.log('getAuth-response', response);
    const { id, email } = response.data[0];
    return { id, email };
}

export const getAuthByCode = async (code: String): Promise<boolean> => {
    const response = await AxiosIntance.get<null, AxiosResponse<AuthCode[]> | AxiosError<Error>>(`auth-codes?code=${code}`)
    console.log('getAuth-response', response);

    if (isAxiosError(response) || response.status !== 200) {
        throw response;
    };

    if (response.data.length > 0 && response.data[0].code === code) {
        return true;
    } else {
        return false;
    }
}

export const isRegister = async (userEmail: String): Promise<User> => {
    const response = await AxiosIntance.get<null, AxiosResponse<User[]> | AxiosError<Error>>(`users?username=${userEmail}`)
    console.log('getAuth-response', response);

    if(isAxiosError(response) || response.status !== 200) {
        throw response;
    };

    const [user] = response.data;
    return user;
}

export const getCode = async (userEmail: String): Promise<string> => {
    const response = await AxiosIntance.get<null, AxiosResponse<AuthCode[]> | AxiosError<Error>>(`auth-codes?username=${userEmail}`)
    console.log('getAuth-response', response);

    if (isAxiosError(response) || response.status !== 200) {
        throw response;
    };

    return response.data.length > 0 ? response.data[0].code! : '1234';

}

export const updateIsFirstTime = async (useremail: string): Promise<void> => {
    const response = await AxiosIntance.patch(`users/${useremail}`,{
        isFirstTime: false
    });
    console.log("aqui",response);
    if (isAxiosError(response) || response.status !== 200) {
        throw response;
    };
}


export const createUser = async (user: User): Promise<void> => {
    const response = await AxiosIntance.post<null, AxiosResponse<User> | AxiosError<Error>>(`users/${user.id}`, user)
    if(isAxiosError(response) || response.status !== 200) {
        throw response;
    };
}


export const updateUser = async (user: User): Promise<void> => {
    const response = await AxiosIntance.patch<null, AxiosResponse<User> | AxiosError<Error>>(`users/${user.id}`, user)
    if(isAxiosError(response) || response.status !== 200) {
        throw response;
    };
}