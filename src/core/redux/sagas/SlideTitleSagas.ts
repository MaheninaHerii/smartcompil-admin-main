import {all, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from "axios";
import {
    fetchSlideTitle,
    updateSlideTitle,
} from "../../services/SlideTitleService";
import {IArticle} from "../../data/interfaces/IArticle";
import {
    fetchSlideTitleFailure,
    fetchSlideTitleSuccess
} from "../actions/SlideTitleActions";
import {
    FETCH_SLIDE_TITLE_REQUEST,
    PUT_SLIDE_TITLE_REQUEST,
} from "../types/ActionTypes";

function* fetchSlideTitleSaga() {
    try {
        const response: AxiosResponse<IArticle> = yield call(fetchSlideTitle);
        yield put(
            fetchSlideTitleSuccess({
                slideTitle: response.data
            })
        );
    } catch (e: any) {
        yield put(
            fetchSlideTitleFailure({
                error: e && e.message || 'FETCH_SLIDE_TITLE_ERROR'
            })
        );
    }
}

function* putSlideTitleSaga({type, payload}: {
    type: typeof PUT_SLIDE_TITLE_REQUEST,
    payload: IArticle
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(updateSlideTitle, payload);
        const slideTitle = response.data;
        slideTitle.status = "success";
        yield put(
            fetchSlideTitleSuccess({
                slideTitle
            })
        );
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchSlideTitleFailure({
                error: e && e.message || 'FETCH_SLIDE_TITLE_ERROR'
            })
        );
    }
}

function* slideTitleSaga() {
    yield all([
        takeLatest(FETCH_SLIDE_TITLE_REQUEST, fetchSlideTitleSaga),
        takeLatest(PUT_SLIDE_TITLE_REQUEST, putSlideTitleSaga),
    ]);
}

export default slideTitleSaga;