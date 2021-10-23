import { action } from "../actions";

export const hotels = (state = [], action: action) => {
    switch (action.type) {
        case "SET_HOTELS":
            return [...state, action.payload];
        default:
            return state;
    }
};
