import {createSelector} from "reselect";
import {AppState} from "../reducers/rootReducer";

const getPending = (state: AppState) => state.user.pending

const user = (state: AppState) => state.user.user;

const getError = (state: AppState) => state.user.error;

export const getPendingUserSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorUserSelector = createSelector(getError, (error) => error);

export const getUserSelector = createSelector(user, (data) => data);