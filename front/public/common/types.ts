export type RequestAnswer = {
    status: number,
    response: any,
}

export type Subscription = {
    element: Element,
    event: string,
    listener: EventListenerOrEventListenerObject
}

export type EmploeeInfo = {
    ID: string,
    Name: string,
    Surname: string,
    Fathername: string,
}

export type Listener = () => any;
