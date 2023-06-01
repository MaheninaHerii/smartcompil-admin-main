import {AxiosResponse} from "axios";
import {PATH_SLIDE_TITLE} from "../data/constants/UrlApi";
import {IArticle} from "../data/interfaces/IArticle";
import {httpClient} from "../config/HttpClient";

export const fetchSlideTitle = (): Promise<AxiosResponse<IArticle>> =>
    httpClient.get(PATH_SLIDE_TITLE);
export const updateSlideTitle = (data: IArticle): Promise<AxiosResponse<IArticle>> =>
    httpClient.put(PATH_SLIDE_TITLE, data);