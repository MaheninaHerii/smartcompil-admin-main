import {createSelector} from "reselect";
import {AppState} from "../reducers/rootReducer";

const getPending = (state: AppState) => state.slide.pending

const slideList = (state: AppState) => state.slide.slideList;

const slide = (state: AppState) => state.slide.slide;

const getError = (state: AppState) => state.slide.error;

export const getSlideListSelector = createSelector(slideList, (data) => data);

export const getPendingSlideSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorSlideSelector = createSelector(getError, (error) => error);

export const getSlideSelector = createSelector(slide, (data) => data);