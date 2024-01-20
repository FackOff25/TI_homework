import { emploeesList, equipmentList, requestList } from "../common/mockData";
import { EmploeeInfo, Equipment, RequestInfo } from "../common/types";

export class Queries {
    /**
     * Получение списка сотрудников
     */
    static async getEmploeeList(): Promise<EmploeeInfo[]> {
        return emploeesList;
    }

    /**
     * Получение сотрудника по id
     */
    static async getEmploee(id: string): Promise<EmploeeInfo> {
        return emploeesList[0];
    }

    /**
     * Получение списка оборудования
     */
    static async getEquipmentList(): Promise<Equipment[]> {
        return equipmentList;
    }

    /**
     * Получение списка запросов сотрудника
     */
    static async getRequestList(ID: string): Promise<RequestInfo[]> {
        return requestList;
    }
}