import EmploeeListView from "./emploeeListView.js";
import BasicComponent from "../_basicComponent/basicComponent.js";
import {EmploeeInfo} from "../../common/types";
import EmploeeListElement from "../emploeeListElement/emploeeListElement.js";

/**
 * ViewModel-компонент соответсвующего View
 * @class EmploeeList
 */
export default class EmploeeList extends BasicComponent {
    view: EmploeeListView;
    elements: EmploeeListElement[];

    constructor() {
        super();
        this.view = new EmploeeListView();
        this.elements = [];
    }

    render(emploeeList: EmploeeInfo[]): HTMLElement {
        this.root = this.view.render();

        emploeeList.sort((e1: EmploeeInfo, e2: EmploeeInfo) => {
            if (e1.ID > e2.ID){
                return 1;
            }
            return -1;
        })

        emploeeList.forEach(emploee => {
            const element = new EmploeeListElement(emploee);
            this.root.appendChild(element.render());
            this.elements.push(element);
        });
        return this.root;
    }

    subscribe(): void {
    }
};
