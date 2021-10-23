import { action } from "../actions";

export const favorites = (state = [], action: action) => {
    switch (action.type) {
        case "ADD_HOTEL":
            return [...state, action.payload];
        default:
            return state;
    }
};
