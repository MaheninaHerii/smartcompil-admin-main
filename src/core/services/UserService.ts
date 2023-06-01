import {AxiosResponse} from "axios";
import {
    PATH_USER, PUT_UPDATE_EMAIL_USER, PUT_UPDATE_PASSWORD_USER
} from "../data/constants/UrlApi";
import {IUser} from "../data/interfaces/IUser";
import {httpClient} from "../config/HttpClient";
import {IUpdatePasswordUser} from "../data/interfaces/IUpdatePasswordUser";

export const fetchUser = (email: string): Promise<AxiosResponse<IUser>> =>
    httpClient.get(PATH_USER + '/' + email);
export const updateEmail = (data: IUser): Promise<AxiosResponse<IUser>> =>
    httpClient.put(PUT_UPDATE_EMAIL_USER, data);
export const updatePassword = (data: IUpdatePasswordUser): Promise<AxiosResponse<IUser>> =>
    httpClient.put(PUT_UPDATE_PASSWORD_USER, data);