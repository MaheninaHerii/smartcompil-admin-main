import {
    FetchAuthErrorPayload,
    FetchAuthFailure,
    FetchAuthSuccess,
    FetchAuthSuccessPayload,
    PostLoginRequest
} from "../types/SecurityTypes";
import {
    FETCH_AUTH_FAILURE,
    FETCH_AUTH_SUCCESS,
    POST_LOGIN_REQUEST
} from "../types/ActionTypes";
import {IUser} from "../../data/interfaces/IUser";

export const postLoginRequest = (user: IUser): PostLoginRequest => ({
    type: POST_LOGIN_REQUEST,
    payload: user
});

export const fetchAuthSuccess = (
    payload: FetchAuthSuccessPayload
): FetchAuthSuccess => ({
    type: FETCH_AUTH_SUCCESS,
    payload
});

export const fetchAuthFailure = (
    payload: FetchAuthErrorPayload
): FetchAuthFailure => ({
    type: FETCH_AUTH_FAILURE,
    payload
});