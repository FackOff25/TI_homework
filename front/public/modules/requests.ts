import {Ajax} from "./ajax.js";
import {requestParams} from "./ajax"
import {
    EmploeeInfo,
    RequestAnswer
} from "../common/types";

const config = {
    hrefs: {
        emploeeList: '/queries/emploee/get/all',
        emploeeGet: '/queries/emploee/get/',
        emploeeAdd: '/queries/emploee/add',
        emploeeDelete: '/queries/emploee/delete',
        emploeeUpdate: '/queries/emploee/update',
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

    /**
     * Запрашивает Сотрудника
     */
    static getEmploee(code: number): Promise<EmploeeInfo> {
        return ajax.get({
            url: config.hrefs.emploeeGet + code,
            data: {
                code: code,
            }
        }).then((response) => {
            const result = response!;
            if (result.status !== 200) {
                throw result.status;
            }
            const emploee: EmploeeInfo = {
                ID: result.response.emploee.code,
                Name: result.response.emploee.name,
                Surname: result.response.emploee.surname,
                Fathername: result.response.emploee.fathername,
            };
            
            return emploee;
        });
    }

    /**
     * Добавляет Сотрудника
     */
    static addEmploee(emploee: EmploeeInfo): Promise<void> {
        return ajax.post({
            url: config.hrefs.emploeeAdd,
            data: {
                name: emploee.Name,
                surname: emploee.Surname,
                fathername: emploee.Fathername,
            }
        }).then((response) => {
            const result = response!;
            if (result.status !== 200) {
                throw result.status;
            }
        });
    }

    /**
     * Удаляет Сотрудника
     */
    static deleteEmploee(code: number): Promise<void> {
        return ajax.post({
            url: config.hrefs.emploeeDelete,
            data: {
                code: code,
            }
        }).then((response) => {
            const result = response!;
            if (result.status !== 200) {
                throw result.status;
            }
        });
    }

    /**
     * Обновляет Сотрудника
     */
    static updateEmploee(emploee: EmploeeInfo): Promise<void> {
        return ajax.post({
            url: config.hrefs.emploeeUpdate,
            data: {
                code: emploee.ID,
                name: emploee.Name,
                surname: emploee.Surname,
                fathername: emploee.Fathername,
            }
        }).then((response) => {
            const result = response!;
            if (result.status !== 200) {
                throw result.status;
            }
        });
    }
}
