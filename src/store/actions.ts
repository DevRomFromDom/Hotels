export interface action {
    type: string;
    payload?: object;
}

export const getHotels = (options: object): action => {
    return { type: "GET_HOTELS" };
};
export const logIn = (): action => {
    return { type: "LOG_IN" };
};
