import {IUser} from "../data/interfaces/IUser";
import axios, {AxiosResponse} from "axios";
import {IAuthResponse} from "../data/interfaces/IAuthResponse";
import {POST_LOGIN} from "../data/constants/UrlApi";
import {LOGIN_ROUTE} from "../data/constants/PathRouter";

export const login = (user: IUser): Promise<AxiosResponse<IAuthResponse>> => axios.post(POST_LOGIN, user);

export function getToken(): string {
    return localStorage.getItem("accessToken") || "";
}

export function logout(): void {
    localStorage.removeItem("email");
    localStorage.removeItem("accessToken");
    window.location.href = LOGIN_ROUTE;
}

export function getEmail(): string {
    return localStorage.getItem("email") || "";
}

export function isLogged(): boolean {
    return !!getToken();
}
