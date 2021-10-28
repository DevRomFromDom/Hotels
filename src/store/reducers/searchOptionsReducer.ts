import { action } from "../actions";

export interface SearchOptions {
    date: Date;
    location: string;
    range: number;
}

export const searchOptions = (state: SearchOptions | {} = {}, action: action) => {
    switch (action.type) {
        case "SET_OPTIONS":
            return action.payload;
        default:
            return state;
    }
};
