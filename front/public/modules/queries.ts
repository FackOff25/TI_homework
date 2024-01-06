import { emploeesList, equipmentList } from "../common/mockData";
import { EmploeeInfo, Equipment } from "../common/types";

export class Queries {
    /**
     * Получение списка сотрудников
     */
    static async getEmploeeList(): Promise<EmploeeInfo[]> {
        return emploeesList;
    }

    /**
     * Получение списка оборудования
     */
    static async getEquipmentList(): Promise<Equipment[]> {
        return equipmentList;
    }
}