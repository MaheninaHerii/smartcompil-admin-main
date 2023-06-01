import {
    FetchUserErrorPayload,
    FetchUserFailure,
    FetchUserRequest,
    FetchUserSuccess,
    FetchUserSuccessPayload,
    PutUpdateEmailUserRequest,
    PutUpdatePasswordUserRequest,
} from "../types/UserTypes";
import {
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    PUT_UPDATE_EMAIL_USER_REQUEST,
    PUT_UPDATE_PASSWORD_USER_REQUEST
} from "../types/ActionTypes";
import {IUser} from "../../data/interfaces/IUser";
import {IUpdatePasswordUser} from "../../data/interfaces/IUpdatePasswordUser";

export const fetchUserRequest = (email: string): FetchUserRequest => ({
    type: FETCH_USER_REQUEST,
    payload: email
});

export const putUpdateEmailUserRequest = (data: IUser): PutUpdateEmailUserRequest => ({
    type: PUT_UPDATE_EMAIL_USER_REQUEST,
    payload: data
});

export const putUpdatePasswordUserRequest = (data: IUpdatePasswordUser): PutUpdatePasswordUserRequest => ({
    type: PUT_UPDATE_PASSWORD_USER_REQUEST,
    payload: data
});

export const fetchUserSuccess = (
    payload: FetchUserSuccessPayload
): FetchUserSuccess => ({
    type: FETCH_USER_SUCCESS,
    payload
});

export const fetchUserFailure = (
    payload: FetchUserErrorPayload
): FetchUserFailure => ({
    type: FETCH_USER_FAILURE,
    payload
});