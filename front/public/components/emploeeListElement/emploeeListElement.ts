import EmploeeListElementView from "./emploeeListElementView.js";
import BasicComponent from "../_basicComponent/basicComponent.js";
import { EmploeeInfo, Subscription } from "../../common/types.js";
import { Events } from "../../modules/events.js";

export type EmploeeListElementEventBus = {
    editEmploee: () => void;
    deleteEmploee: () => void;
    emploeesRequests: () => void;
}

/**
 * ViewModel-компонент соответсвующего View
 * @class EmploeeListElement
 */
export default class EmploeeListElement extends BasicComponent {
    view: EmploeeListElementView;
    emploee: EmploeeInfo;

    constructor(emploee: EmploeeInfo) {
        super();
        this.view = new EmploeeListElementView();
        this.emploee = emploee;
    }

    render(): HTMLElement {
        this.root = this.view.render(this.emploee);
        this.subscribe();
        return this.root;
    }

    subscribe(): void {
        let subscription: Subscription;

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
    }
};
