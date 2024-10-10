import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { User } from "../../domain/models/User";
import { AuthCode } from "../../domain/models/AuthCode";


export const getAuth = async (user: User): Promise<User> => {
    const response = await axios.get<null, AxiosResponse<User[]> | AxiosError<Error>>(`http://localhost:3000/users?username=${user.email}&password=${user.password}`)
    console.log('getAuth-response', response);
    if (isAxiosError(response) || response.status !== 200) {
        throw response;
    };
    console.log('getAuth-response', response);
    const { id, email } = response.data[0];
    return { id, email };
}

export const getAuthByCode = async (code: String): Promise<boolean> => {
    const response = await axios.get<null, AxiosResponse<AuthCode[]> | AxiosError<Error>>(`http://localhost:3000/auth-codes?code=${code}`)
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
export const isRegister = async (userEmail: String): Promise<boolean> => {
    const response = await axios.get<null, AxiosResponse<User[]> | AxiosError<Error>>(`http://localhost:3000/users?username=${userEmail}`)
    console.log('getAuth-response', response);

    if (isAxiosError(response) || response.status !== 200) {
        throw response;
    };

    return response.data.length > 0 ? true : false;
}


export const getCode = async (userEmail: String): Promise<string> => {
    const response = await axios.get<null, AxiosResponse<AuthCode[]> | AxiosError<Error>>(`http://localhost:3000/auth-codes?username=${userEmail}`)
    console.log('getAuth-response', response);

    if (isAxiosError(response) || response.status !== 200) {
        throw response;
    };

    return response.data.length > 0 ? response.data[0].code! : '1234';

}