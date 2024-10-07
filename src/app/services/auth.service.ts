import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { User } from "../../domain/models/User";

export const getAuth = async (user: User): Promise<User> => {
    const response = await axios.get<null, AxiosResponse<User[]> | AxiosError<Error>>(`http://localhost:3000/users?username=${user.email}&password=${user.password}`)
    console.log('getAuth-response', response);
    if(isAxiosError(response) || response.status !== 200) {
        throw response;
    };
    console.log('getAuth-response', response);
    const { id, email } = response.data[0];
    return { id, email };
}