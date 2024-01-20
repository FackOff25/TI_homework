import {Ajax} from "./ajax.js";
import {requestParams} from "./ajax"
import {
    EmploeeInfo,
    RequestAnswer
} from "../common/types";

const config = {
    hrefs: {
        articles: '/feed',
        emploeeList: '/queries/emploee/get/list'
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

    /**
     * Запрашивает Сотрудников
     */
    static getEmploees(): Promise<EmploeeInfo[]> {
        return ajax.get({
            url: config.hrefs.emploeeList,
        }).then((response) => {
            const result = response!;
            if (result.status !== 200) {
                throw result.status;
            }
            const emploees: EmploeeInfo[] = [];
            result.response.emploees.forEach((emploee: 
                {
                    code: number,
                    name: string,
                    surname: string,
                    fathername: string,
                }) => {
                emploees.push({
                    ID: "" + emploee.code,
                    Name: emploee.name,
                    Surname: emploee.surname,
                    Fathername: emploee.fathername
                })
            });;
            return emploees;
        });
    }
}
