import {combineReducers} from "redux";
import securityReducer from "./SecurityReducer";
import nousSommesReducer from "./NousSommesReducer";
import nosServicesEtProduitsReducer from "./NosServicesEtProduitsReducer";
import introductionNousRejoindreReducer from "./IntroductionNousRejoindreReducer";
import posteReducer from "./PosteReducer";
import slideTitleReducer from "./SlideTitleReducer";
import slideReducer from "./SlideReducer";
import contactezNousReducer from "./ContactezNousReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
    security: securityReducer,
    nousSommes: nousSommesReducer,
    nosServicesEtProduits: nosServicesEtProduitsReducer,
    introductionNousRejoindre: introductionNousRejoindreReducer,
    poste: posteReducer,
    slideTitle: slideTitleReducer,
    slide: slideReducer,
    contactezNous: contactezNousReducer,
    user: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;