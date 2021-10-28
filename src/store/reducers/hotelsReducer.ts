import { action } from "../actions";

export interface hotelInfo {
    hotelId: number;
    location: {
        name: string;
    };
    stars: number;
    priceAvg: number,
    hotelName: string
    options: {
        date: Date, 
        range: number,
        location: string
    }
}

export const hotels = (state: hotelInfo[] = [], action: action) => {
    switch (action.type) {
        case "SET_HOTELS":
            return action.payload;
        default:
            return state;
    }
};
