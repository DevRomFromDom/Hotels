import { hotelInfo } from "./reducers/hotelsReducer";
import { SearchOptions } from "./reducers/searchOptionsReducer";
import { sort } from "./actions";

export interface RootState {
    auth: { isLoggedIn: boolean };
    hotels: hotelInfo[];
    searchOptions: SearchOptions;
    favorites: { favorites: hotelInfo[]; sort: sort };
}

export * from "./actions";
