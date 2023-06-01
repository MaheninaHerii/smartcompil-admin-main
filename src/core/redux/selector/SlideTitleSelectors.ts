import {createSelector} from "reselect";
import {AppState} from "../reducers/rootReducer";

const getPending = (state: AppState) => state.slideTitle.pending

const slideTitle = (state: AppState) => state.slideTitle.slideTitle;

const getError = (state: AppState) => state.slideTitle.error;

export const getPendingSlideTitleSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorSlideTitleSelector = createSelector(getError, (error) => error);

export const getSlideTitleSelector = createSelector(slideTitle, (data) => data);