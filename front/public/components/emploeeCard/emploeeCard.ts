import BasicComponent from "../_basicComponent/basicComponent.js";
import {Listener, Subscription} from "../../common/types";
import EmploeeCardView, { EmploeeCardInfo } from "./emploeeCardView.js";

export type EmploeeCardEventBus = {
    submitEvent: Listener,
    closeEvent: Listener,
}

/**
 * ViewModel-компонент соответсвующего View
 * @class EmploeeCard
 */
export default class EmploeeCard extends BasicComponent {
    view: EmploeeCardView;
    data: EmploeeCardInfo;

    constructor(info: EmploeeCardInfo) {
        super();
        this.view = new EmploeeCardView();
        this.data = info;
    }

    render(): HTMLElement {
        this.root = this.view.render(this.data);
        return this.root;
    }

    subscribe(eventBus: EmploeeCardEventBus): void {
        let subscription: Subscription;
        
        const closeButton = this.root.querySelector('#emploee_card__cross')!;
        subscription = {
            element: closeButton,
            event: 'click',
            listener: eventBus.closeEvent,
        }
        this._subscribeEvent(subscription);
        
        const submitButton = this.root.querySelector('#emploee_card__submit_button')!;
        subscription = {
            element: submitButton,
            event: 'click',
            listener: eventBus.submitEvent,
        }
        this._subscribeEvent(subscription);
    }
}
