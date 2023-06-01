import {createSelector} from "reselect";
import {AppState} from "../reducers/rootReducer";

const getPending = (state: AppState) => state.contactezNous.pending

const contactezNous = (state: AppState) => state.contactezNous.contactezNous;

const getError = (state: AppState) => state.contactezNous.error;

export const getPendingContactezNousSelector = createSelector(
    getPending,
    (pending) => pending
);

export const getErrorContactezNousSelector = createSelector(getError, (error) => error);

export const getContactezNousSelector = createSelector(contactezNous, (data) => data);