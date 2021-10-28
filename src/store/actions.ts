export interface action {
    type: string;
    payload?: any;
}

export interface sort {
    main: string;
    reverse: string;
}

export const getHotels = (options?: object): action => ({ type: "GET_HOTELS", payload: options });
export const setHotels = (options: object): action => ({ type: "SET_HOTELS", payload: options });
export const setOptions = (options: object): action => ({ type: "SET_OPTIONS", payload: options });
export const addFavoriteHotel = (hotel: object): action => ({
    type: "ADD_HOTEL",
    payload: hotel,
});
export const removeFavoriteHotel = (hotelID: number): action => ({ type: "REMOVE_HOTEL", payload: hotelID });
export const changeSortFavoritesHotels = (options: sort): action => ({ type: "CHANGE_SORT", payload: options });
export const sortFavorites = () => ({ type: "SORT_FAVORITES" });

export const logIn = (): action => ({ type: "LOG_IN" });
export const logOut = (): action => ({ type: "LOG_OUT" });
