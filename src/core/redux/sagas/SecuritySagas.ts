import {login} from "../../services/SecurityService";
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {POST_LOGIN_REQUEST} from "../types/ActionTypes";
import {fetchAuthFailure, fetchAuthSuccess} from "../actions/SecurityActions";
import {AxiosResponse} from "axios";
import {IAuthResponse} from "../../data/interfaces/IAuthResponse";
import {IUser} from "../../data/interfaces/IUser";

function* postLoginSaga({type, payload}: {
    type: typeof POST_LOGIN_REQUEST,
    payload: IUser
}) {
    try {
        const response: AxiosResponse<IAuthResponse> = yield call(login, payload);
        localStorage.setItem('accessToken', response.data && response.data.accessToken);
        localStorage.setItem('email', payload && payload.email || '');
        yield put(
            fetchAuthSuccess({
                authResponse: response.data
            })
        );
    } catch (e) {
        console.log(type);
        yield put(
            fetchAuthFailure({
                error: 'INVALID_LOGIN'
            })
        );
    }
}


function* securitySaga() {
    yield all([takeLatest(POST_LOGIN_REQUEST, postLoginSaga)]);
}

export default securitySaga;