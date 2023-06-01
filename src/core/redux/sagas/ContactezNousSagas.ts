import {all, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from "axios";
import {
    fetchContactezNous,
    updateContactezNous,
} from "../../services/ContactezNousService";
import {
    fetchContactezNousFailure, fetchContactezNousRequest,
    fetchContactezNousSuccess
} from "../actions/ContactezNousActions";
import {
    FETCH_CONTACTEZ_NOUS_REQUEST,
    PUT_CONTACTEZ_NOUS_REQUEST,
} from "../types/ActionTypes";
import {IContactezNous} from "../../data/interfaces/IContactezNous";

function* fetchContactezNousSaga() {
    try {
        const response: AxiosResponse<IContactezNous> = yield call(fetchContactezNous);
        yield put(
            fetchContactezNousSuccess({
                contactezNous: response.data
            })
        );
    } catch (e: any) {
        yield put(
            fetchContactezNousFailure({
                error: e && e.message || 'FETCH_CONTACTEZ_NOUS_ERROR'
            })
        );
    }
}

function* putContactezNousSaga({type, payload}: {
    type: typeof PUT_CONTACTEZ_NOUS_REQUEST,
    payload: IContactezNous
}) {
    try {
        const response: AxiosResponse<IContactezNous> = yield call(updateContactezNous, payload);
        const contactezNous = response.data;
        contactezNous.status = "success";
        yield put(
            fetchContactezNousSuccess({
                contactezNous
            })
        );
        yield put(fetchContactezNousRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchContactezNousFailure({
                error: e && e.message || 'FETCH_CONTACTEZ_NOUS_ERROR'
            })
        );
    }
}

function* contactezNousSaga() {
    yield all([
        takeLatest(FETCH_CONTACTEZ_NOUS_REQUEST, fetchContactezNousSaga),
        takeLatest(PUT_CONTACTEZ_NOUS_REQUEST, putContactezNousSaga),
    ]);
}

export default contactezNousSaga;