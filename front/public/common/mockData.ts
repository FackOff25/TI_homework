import { EmploeeInfo, Equipment } from "./types";

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
    Name: "Токарный станок",
};

const equipment2: Equipment = {
    Name: "Столярный станок",
};

export const equipmentList: Equipment[] = [equipment1, equipment2];
