import { Options } from "./rootSaga";
import { hotelInfo } from "../reducers/hotelsReducer";

const setRangeDate = (date: Date, range: number) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + +range);
    return newDate.toISOString().split("T")[0];
};

export const fetchGetHotels = async (options: Options): Promise<hotelInfo[]> => {
    const { date, range, location } = options;
    const dateEnd =  setRangeDate(date, range);
    const dateStart =  date.toISOString().split("T")[0];

    return await fetch(
        `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${dateStart}&checkOut=${dateEnd}&limit=50&language=ru`
    )
        .then((res) => res.json())
        .then((data) => data);
};
