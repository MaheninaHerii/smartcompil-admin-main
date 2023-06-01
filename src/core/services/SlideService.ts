import {AxiosResponse} from "axios";
import {
    GET_ALL_SLIDE,
    PATH_SLIDE,
    PUT_UPDATE_STATE_SLIDE
} from "../data/constants/UrlApi";
import {IArticle} from "../data/interfaces/IArticle";
import {httpClient} from "../config/HttpClient";

export const fetchSlideList = (): Promise<AxiosResponse<IArticle[]>> =>
    httpClient.get(GET_ALL_SLIDE);
export const updateStateSlide = (data: IArticle): Promise<AxiosResponse<IArticle>> =>
    httpClient.put(PUT_UPDATE_STATE_SLIDE, data);
export const deleteSlide = (id: number): Promise<AxiosResponse<IArticle>> =>
    httpClient.delete(PATH_SLIDE + '/' + id);
export const saveSlide = (data: FormData): Promise<AxiosResponse<IArticle>> =>
    httpClient.post(PATH_SLIDE, data);