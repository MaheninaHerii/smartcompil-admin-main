import {
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    PUT_UPDATE_EMAIL_USER_REQUEST,
    PUT_UPDATE_PASSWORD_USER_REQUEST,
} from "./ActionTypes";
import {IUser} from "../../data/interfaces/IUser";
import {IUpdatePasswordUser} from "../../data/interfaces/IUpdatePasswordUser";

export interface UserState {
    user: IUser | null,
    error: string | null;
    pending: boolean;
}

export interface FetchUserSuccessPayload {
    user: IUser
}

export interface FetchUserErrorPayload {
    error: string;
}

export interface PutUpdateEmailUserRequest {
    type: typeof PUT_UPDATE_EMAIL_USER_REQUEST
    payload: IUser
}


export interface PutUpdatePasswordUserRequest {
    type: typeof PUT_UPDATE_PASSWORD_USER_REQUEST
    payload: IUpdatePasswordUser
}


export interface FetchUserRequest {
    type: typeof FETCH_USER_REQUEST
    payload: string
}

export interface FetchUserSuccess {
    type: typeof FETCH_USER_SUCCESS
    payload: FetchUserSuccessPayload
}

export interface FetchUserFailure {
    type: typeof FETCH_USER_FAILURE;
    payload: FetchUserErrorPayload
}

export type UserActions =
    | FetchUserRequest
    | FetchUserSuccess
    | FetchUserFailure
    | PutUpdateEmailUserRequest
    | PutUpdatePasswordUserRequest