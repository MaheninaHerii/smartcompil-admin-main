import {all, fork} from "redux-saga/effects";
import securitySaga from "./SecuritySagas";
import nousSommesSaga from "./NousSommesSagas";
import nosServicesEtProduitsSaga from "./NosServicesEtProduitsSagas";
import introductionNousRejoindreSaga from "./IntroductionNousRejoindreSagas";
import posteSaga from "./PosteSagas";
import slideTitleSaga from "./SlideTitleSagas";
import slideSaga from "./SlideSagas";
import contactezNousSaga from "./ContactezNousSagas";
import userSaga from "./UserSagas";

export default function* rootSaga() {
    yield all([
        fork(securitySaga),
        fork(nousSommesSaga),
        fork(nosServicesEtProduitsSaga),
        fork(introductionNousRejoindreSaga),
        fork(posteSaga),
        fork(slideTitleSaga),
        fork(slideSaga),
        fork(contactezNousSaga),
        fork(userSaga)
    ]);
}
