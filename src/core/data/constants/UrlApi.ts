export const API_HOST_ROOT = "https://smartcompil-server.herokuapp.com/api/v1";
export const POST_LOGIN = API_HOST_ROOT + "/auth/login";

// Nous sommes
export const PATH_NOUS_SOMMES = API_HOST_ROOT + '/nous-sommes';
export const GET_ALL_NOUS_SOMMES = PATH_NOUS_SOMMES + '/all';
export const GET_NOUS_SOMMES = PATH_NOUS_SOMMES + '/detail';
export const GET_NOUS_SOMMES_IMAGES = PATH_NOUS_SOMMES + '/image';
export const PUT_UPDATE_STATE_NOUS_SOMMES = PATH_NOUS_SOMMES + '/updateState';

// Nos services / Produits
export const PATH_NOS_SERVICES_ET_PRODUITS = API_HOST_ROOT + '/nos-services-et-produits';
export const GET_ALL_NOS_SERVICES_ET_PRODUITS = PATH_NOS_SERVICES_ET_PRODUITS + '/all';
export const GET_NOS_SERVICES_ET_PRODUITS = PATH_NOS_SERVICES_ET_PRODUITS + '/detail';
export const GET_NOS_SERVICES_ET_PRODUITS_IMAGES = PATH_NOS_SERVICES_ET_PRODUITS + '/image';
export const PUT_UPDATE_STATE_NOS_SERVICES_ET_PRODUITS = PATH_NOS_SERVICES_ET_PRODUITS + '/updateState';

// Nous Rejointre
export const PATH_INTRODUCTION_NOUS_REJOINDRE = API_HOST_ROOT + '/introduction-nous-rejoindre';
export const GET_ALL_INTRODUCTION_NOUS_REJOINDRE = PATH_INTRODUCTION_NOUS_REJOINDRE + '/all';
export const GET_INTRODUCTION_NOUS_REJOINDRE = PATH_INTRODUCTION_NOUS_REJOINDRE + '/detail';
export const PUT_UPDATE_STATE_INTRODUCTION_NOUS_REJOINDRE = PATH_INTRODUCTION_NOUS_REJOINDRE + '/updateState';

// Poste
export const PATH_POSTE = API_HOST_ROOT + '/poste';
export const GET_ALL_POSTE = PATH_POSTE + '/all';
export const GET_ALL_POSTE_APPLY = PATH_POSTE + '/apply/all';
export const GET_POSTE = PATH_POSTE + '/detail';
export const PUT_UPDATE_STATE_POSTE = PATH_POSTE + '/updateState';
export const PUT_DUPLICATE_POSTE = PATH_POSTE + '/duplicate';
export const GET_DOCUMENT_APPLY = PATH_POSTE + '/apply/document';

// Titre du slide
export const PATH_SLIDE_TITLE = API_HOST_ROOT + '/slide-title';

// Slide
export const PATH_SLIDE = API_HOST_ROOT + '/slide';
export const GET_ALL_SLIDE = PATH_SLIDE + '/all';
export const GET_SLIDE_IMAGES = PATH_SLIDE + '/image';
export const PUT_UPDATE_STATE_SLIDE = PATH_SLIDE + '/updateState';

// Contactez-nous
export const PATH_CONTACTEZ_NOUS = API_HOST_ROOT + '/contactez-nous';

// User
export const PATH_USER = API_HOST_ROOT + '/user';
export const PUT_UPDATE_EMAIL_USER = PATH_USER + '/updateEmail';
export const PUT_UPDATE_PASSWORD_USER = PATH_USER + '/updatePassword';