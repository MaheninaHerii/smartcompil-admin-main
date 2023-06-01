import {all, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from "axios";
import {
    deleteSlide,
    fetchSlideList,
    saveSlide,
    updateStateSlide
} from "../../services/SlideService";
import {IArticle} from "../../data/interfaces/IArticle";
import {
    fetchSlideFailure,
    fetchSlideListRequest,
    fetchSlideListSuccess,
    fetchSlideSuccess
} from "../actions/SlideActions";
import {
    DELETE_SLIDE_REQUEST,
    FETCH_SLIDE_LIST_REQUEST,
    POST_SLIDE_REQUEST,
    PUT_UPDATE_STATE_SLIDE_REQUEST
} from "../types/ActionTypes";
import {PUT_UPDATE_STATE_SLIDE} from "../../data/constants/UrlApi";

function* fetchSlideListSaga() {
    try {
        const response: AxiosResponse<IArticle[]> = yield call(fetchSlideList);
        yield put(
            fetchSlideListSuccess({
                slideList: response.data
            })
        );
    } catch (e: any) {
        yield put(
            fetchSlideFailure({
                error: e && e.message || 'FETCH_SLIDE_ERROR'
            })
        );
    }
}

function* putUpdateStateSlideSaga({type, payload}: {
    type: typeof PUT_UPDATE_STATE_SLIDE,
    payload: IArticle
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(updateStateSlide, payload);
        yield put(
            fetchSlideSuccess({
                slide: response.data
            })
        );
        yield put(fetchSlideListRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchSlideFailure({
                error: e && e.message || 'FETCH_SLIDE_ERROR'
            })
        );
    }
}

function* deleteSlideSaga({type, payload}: {
    type: typeof DELETE_SLIDE_REQUEST,
    payload: number
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(deleteSlide, payload);
        yield put(
            fetchSlideSuccess({
                slide: response.data
            })
        );
        yield put(fetchSlideListRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchSlideFailure({
                error: e && e.message || 'FETCH_SLIDE_ERROR'
            })
        );
    }
}

function* postSlideSaga({type, payload}: {
    type: typeof POST_SLIDE_REQUEST,
    payload: FormData
}) {
    try {
        const response: AxiosResponse<IArticle> = yield call(saveSlide, payload);
        const slide = response.data;
        slide.status = "success";
        yield put(
            fetchSlideSuccess({
                slide
            })
        );
        yield put(fetchSlideListRequest())
    } catch (e: any) {
        console.log(type);
        yield put(
            fetchSlideFailure({
                error: e && e.message || 'FETCH_SLIDE_ERROR'
            })
        );
    }
}

function* slideSaga() {
    yield all([
        takeLatest(FETCH_SLIDE_LIST_REQUEST, fetchSlideListSaga),
        takeLatest(PUT_UPDATE_STATE_SLIDE_REQUEST, putUpdateStateSlideSaga),
        takeLatest(DELETE_SLIDE_REQUEST, deleteSlideSaga),
        takeLatest(POST_SLIDE_REQUEST, postSlideSaga),
    ]);
}

export default slideSaga;