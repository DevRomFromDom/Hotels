import { action } from "../actions";

const initialState = {
    isLoggedIn: false,
};

export const auth = (state = initialState, action: action) => {
    switch (action.type) {
        case "LOG_IN":
            return { ...state, isLoggedIn: true };
        case "LOG_OUT":
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
};
