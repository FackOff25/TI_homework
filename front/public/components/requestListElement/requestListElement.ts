import BasicComponent from "../_basicComponent/basicComponent.js";
import { RequestInfo, Subscription } from "../../common/types.js";
import RequestListElementView from "./requestListElementView.js";

export type EmploeeListElementEventBus = {
    editEmploee: () => void;
    deleteEmploee: () => void;
    emploeesRequests: () => void;
}

/**
 * ViewModel-компонент соответсвующего View
 * @class RequestListElement
 */
export default class RequestListElement extends BasicComponent {
    view: RequestListElementView;
    request: RequestInfo;

    constructor(request: RequestInfo) {
        super();
        this.view = new RequestListElementView();
        this.request = request;
    }

    render(): HTMLElement {
        this.root = this.view.render(this.request);
        this.subscribe();
        return this.root;
    }

    subscribe(): void {
        let subscription: Subscription;
        /*
        const editButton = this.root.querySelectorAll(".emploee_list__element__button")[0];
        const deleteButton = this.root.querySelectorAll(".emploee_list__element__button")[1];
        const requestsButton = this.root.querySelectorAll(".emploee_list__element__button")[2];

        subscription = {
            element: editButton,
            event: 'click',
            listener: () => {
                Events.makeEmploeeCardOverlay({
                    info: this.emploee,
                });
            },
        }
        this._subscribeEvent(subscription);
        */
    }
};
