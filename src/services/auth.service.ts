import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { User } from "../domain/models/User";
import AxiosIntance from "@/utils/axios-intance";

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

export const isRegister = async (userEmail: String): Promise<boolean> => {
    const response = await AxiosIntance.get<null, AxiosResponse<User[]> | AxiosError<Error>>(`users?username=${userEmail}`)
    console.log('getAuth-response', response);

    if(isAxiosError(response) || response.status !== 200) {
        throw response;
    };

    return response.data.length > 0;
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