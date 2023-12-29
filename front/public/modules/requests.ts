import {Ajax} from "./ajax.js";
import {requestParams} from "./ajax"
import {
    RequestAnswer
} from "../common/types";

const config = {
    hrefs: {
        articles: '/feed',
    }
}

const ajax = new Ajax();

export class Requests {

    /**
     * Запрашивает статьи автора
     */
    /*static getUserArticles(login: string): Promise<IncompleteArticleData[]> {
        return ajax.get({
            url: config.hrefs.userFeed,
            data: {
                login: login,
            }
        }).then((response) => {
            const result: RequestAnswer = response!;
            return Requests.#parseIncompleteArticles(result.response.articles);
        });
    }*/
}
