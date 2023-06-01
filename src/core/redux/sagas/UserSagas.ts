import {all, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from "axios";
import {
    fetchUser, updateEmail, updatePassword,
} from "../../services/UserService";
import {
    fetchUserFailure,
    fetchUserRequest,
    fetchUserSuccess
} from "../actions/UserActions";
import {
    FETCH_USER_REQUEST, PUT_UPDATE_EMAIL_USER_REQUEST, PUT_UPDATE_PASSWORD_USER_REQUEST,
} from "../types/ActionTypes";
import {IUser} from "../../data/interfaces/IUser";
import {IUpdatePasswordUser} from "../../data/interfaces/IUpdatePasswordUser";

function* fetchUserSaga({type, payload}: {
    type: typeof FETCH_USER_REQUEST,
    payload: string
}) {
    try {
        const response: AxiosResponse<IUser> = yield call(fetchUser, payload);
        yield put(
            fetchUserSuccess({
                user: response.data
            })
        );
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchUserFailure({
                error: e && e.message || 'FETCH_USER_ERROR'
            })
        );
    }
}

function* putUserUpdateEmailSaga({type, payload}: {
    type: typeof PUT_UPDATE_EMAIL_USER_REQUEST,
    payload: IUser
}) {
    try {
        const response: AxiosResponse<IUser> = yield call(updateEmail, payload);
        const user = response.data;
        user.status = "success";
        yield put(
            fetchUserSuccess({
                user
            })
        );
        yield put(fetchUserRequest(user.email || ''))
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchUserFailure({
                error: e && e.message || 'FETCH_USER_ERROR'
            })
        );
    }
}

function* putUserUpdatePasswordSaga({type, payload}: {
    type: typeof PUT_UPDATE_PASSWORD_USER_REQUEST,
    payload: IUpdatePasswordUser
}) {
    try {
        const response: AxiosResponse<IUser> = yield call(updatePassword, payload);
        const user = response.data;
        user.status = "success";
        yield put(
            fetchUserSuccess({
                user
            })
        );
        yield put(fetchUserRequest(user.email || ''))
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchUserFailure({
                error: e && e.message || 'FETCH_USER_ERROR'
            })
        );
    }
}

function* userSaga() {
    yield all([
        takeLatest(FETCH_USER_REQUEST, fetchUserSaga),
        takeLatest(PUT_UPDATE_PASSWORD_USER_REQUEST, putUserUpdatePasswordSaga),
        takeLatest(PUT_UPDATE_EMAIL_USER_REQUEST, putUserUpdateEmailSaga),
    ]);
}

export default userSaga;