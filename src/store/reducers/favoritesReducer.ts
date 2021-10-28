import { action } from "../actions";
import { hotelInfo } from "./hotelsReducer";
import { sort } from "../actions";

interface Ifavorites {
    favorites: hotelInfo[];
    sort: sort;
}

const initialState = {
    favorites: [],
    sort: {
        main: "rating",
        reverse: "max",
    },
};

const sortFavoritesFunc = (favorites: hotelInfo[], sort: sort): hotelInfo[] => {
    const newArr = favorites.sort((a, b) => {
        if (sort.main === "rating") {
            if (sort.reverse === "max") {
                return b.stars - a.stars;
            } else {
                return a.stars - b.stars;
            }
        } else {
            if (sort.reverse === "max") {
                return b.priceAvg - a.priceAvg;
            } else {
                return a.priceAvg - b.priceAvg;
            }
        }
    });
    return newArr;
};

export const favorites = (state: Ifavorites = initialState, action: action) => {
    switch (action.type) {
        case "ADD_HOTEL":
            return { ...state, favorites: sortFavoritesFunc([...state.favorites, action.payload], state.sort) };
        case "REMOVE_HOTEL":
            const newState = state.favorites.filter((el) => el.hotelId !== action.payload);
            return { ...state, favorites: sortFavoritesFunc(newState, state.sort) };
        case "CHANGE_SORT":
            return { ...state, sort: action.payload, favorites: sortFavoritesFunc(state.favorites, action.payload) };
        default:
            return state;
    }
};
