import {IAuthResponse} from "../../data/interfaces/IAuthResponse";
import {FETCH_AUTH_FAILURE, FETCH_AUTH_SUCCESS, POST_LOGIN_REQUEST} from "./ActionTypes";
import {IUser} from "../../data/interfaces/IUser";

export interface SecurityState {
    authResponse: IAuthResponse | null,
    error: string | null;
    pending: boolean;
}

export interface FetchAuthSuccessPayload {
    authResponse: IAuthResponse,
}

export interface FetchAuthErrorPayload {
    error: string;
}

export interface PostLoginRequest {
    type: typeof POST_LOGIN_REQUEST
    payload: IUser
}

export interface FetchAuthSuccess {
    type: typeof FETCH_AUTH_SUCCESS
    payload: FetchAuthSuccessPayload
}

export interface FetchAuthFailure {
    type: typeof FETCH_AUTH_FAILURE;
    payload: FetchAuthErrorPayload
}

export type SecurityActions =
    | PostLoginRequest
    | FetchAuthSuccess
    | FetchAuthFailure;