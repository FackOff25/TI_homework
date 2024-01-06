import BasicComponent from "../_basicComponent/basicComponent.js";
import {Listener, Subscription} from "../../common/types";
import RequestCardView, { RequestCardInfo } from "./requestCardView.js";

export type RequestCardEventBus = {
    submitEvent: Listener,
    closeEvent: Listener,
}

/**
 * ViewModel-компонент соответсвующего View
 * @class RequestCard
 */
export default class RequestCard extends BasicComponent {
    view: RequestCardView;
    data: RequestCardInfo;

    constructor(info: RequestCardInfo) {
        super();
        this.view = new RequestCardView();
        this.data = info;
    }

    render(): HTMLElement {
        this.root = this.view.render(this.data);
        return this.root;
    }

    subscribe(eventBus: RequestCardEventBus): void {
        let subscription: Subscription;
        
        const closeButton = this.root.querySelector('#request_card__cross')!;
        subscription = {
            element: closeButton,
            event: 'click',
            listener: eventBus.closeEvent,
        }
        this._subscribeEvent(subscription);
        
        const submitButton = this.root.querySelector('#request_card__submit_button')!;
        subscription = {
            element: submitButton,
            event: 'click',
            listener: eventBus.submitEvent,
        }
        this._subscribeEvent(subscription);
    }
}
