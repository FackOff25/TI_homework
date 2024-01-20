import { EmploeeInfo, Equipment, RequestInfo } from "./types";

const emploee1: EmploeeInfo = {
    ID: "123",
    Name: "Иван",
    Surname: "Иванов",
    Fathername: "Иванович",
};

const emploee2: EmploeeInfo = {
    ID: "124",
    Name: "Cидор",
    Surname: "Сидоров",
    Fathername: "Сидорович",
};

export const emploeesList: EmploeeInfo[] = [emploee1, emploee2];

const equipment1: Equipment = {
    ID: 1,
    Name: "Токарный станок",
};

const equipment2: Equipment = {
    ID: 2,
    Name: "Столярный станок",
};

export const equipmentList: Equipment[] = [equipment1, equipment2];

const request1: RequestInfo = {
    ID: 1,
    Equipment: equipment1,
    Assigner: emploee1,
    From: new Date("2020-01-01"),
    To: new Date("2020-01-02"),
};

const request2: RequestInfo = {
    ID: 2,
    Equipment: equipment2,
    Assigner: emploee1,
    From: new Date("2021-01-01"),
    To: new Date("2021-01-02"),
};

export const requestList: RequestInfo[] = [request1, request2];
