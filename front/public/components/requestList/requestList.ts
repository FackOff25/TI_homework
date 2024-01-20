
import BasicComponent from "../_basicComponent/basicComponent.js";
import RequestListView from "./requestListView.js";
import RequestListElement from "../requestListElement/requestListElement.js";
import { RequestInfo } from "../../common/types.js";

/**
 * ViewModel-компонент соответсвующего View
 * @class RequestList
 */
export default class RequestList extends BasicComponent {
    view: RequestListView;
    elements: RequestListElement[];

    constructor() {
        super();
        this.view = new RequestListView();
        this.elements = [];
    }

    render(requestList: RequestInfo[]): HTMLElement {
        this.root = this.view.render();

        requestList.sort((r1: RequestInfo, r2: RequestInfo) => {
            if (r1.ID > r2.ID){
                return 1;
            }
            return -1;
        })

        requestList.forEach((request) => {
            const element = new RequestListElement(request);
            this.root.appendChild(element.render());
            this.elements.push(element);
        });
        return this.root;
    }

    subscribe(): void {
    }
};
