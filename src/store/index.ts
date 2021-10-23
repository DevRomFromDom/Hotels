export * from "./actions";

export interface RootState {
    auth: { isLoggedIn: boolean };
    hotels: object[];
}
