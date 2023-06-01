import {AxiosResponse} from "axios";
import {
    GET_ALL_INTRODUCTION_NOUS_REJOINDRE,
    GET_INTRODUCTION_NOUS_REJOINDRE,
    PATH_INTRODUCTION_NOUS_REJOINDRE,
    PUT_UPDATE_STATE_INTRODUCTION_NOUS_REJOINDRE
} from "../data/constants/UrlApi";
import {IArticle} from "../data/interfaces/IArticle";
import {httpClient} from "../config/HttpClient";

export const fetchIntroductionNousRejoindreList = (): Promise<AxiosResponse<IArticle[]>> =>
    httpClient.get(GET_ALL_INTRODUCTION_NOUS_REJOINDRE);
export const fetchIntroductionNousRejoindre = (id: number): Promise<AxiosResponse<IArticle>> =>
    httpClient.get(GET_INTRODUCTION_NOUS_REJOINDRE + '/' + id);
export const updateStateIntroductionNousRejoindre = (data: IArticle): Promise<AxiosResponse<IArticle>> =>
    httpClient.put(PUT_UPDATE_STATE_INTRODUCTION_NOUS_REJOINDRE, data);
export const deleteIntroductionNousRejoindre = (id: number): Promise<AxiosResponse<IArticle>> =>
    httpClient.delete(PATH_INTRODUCTION_NOUS_REJOINDRE + '/' + id);
export const saveIntroductionNousRejoindre = (data: IArticle): Promise<AxiosResponse<IArticle>> =>
    httpClient.post(PATH_INTRODUCTION_NOUS_REJOINDRE, data);
export const updateIntroductionNousRejoindre = (data: IArticle): Promise<AxiosResponse<IArticle>> =>
    httpClient.put(PATH_INTRODUCTION_NOUS_REJOINDRE, data);