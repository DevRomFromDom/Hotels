import React from "react";
import styles from "./HotelCard.module.scss";
import Heart from "../Heart";
import Star from "../../components/Star";
import { hotelInfo } from "../../store/reducers/hotelsReducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState, addFavoriteHotel, removeFavoriteHotel } from "../../store";

const getDay = (number: number, one: string, two: string, five: string) => {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
};

const HotelCard = (props: hotelInfo) => {
    const { stars, priceAvg, hotelName, hotelId, options } = props;
    const favorites: hotelInfo[] = useSelector((state: RootState) => state.favorites.favorites);

    const rangeDateToString =
        options.date.toLocaleDateString("ru", { day: "numeric", month: "long" }) +
        ", 20" +
        options.date.toLocaleDateString("ru", { year: "2-digit" });

    const dispatch = useDispatch();
    const find = favorites.some((el) => el.hotelId === hotelId);
    const handleChangeFavoriteHotel = () => {
        if (find) {
            dispatch(removeFavoriteHotel(hotelId));
        } else {
            dispatch(addFavoriteHotel({ ...props, ...options }));
        }
    };

    return (
        <div className={styles.hotel__card_wrapper}>
            <div className={styles.hotel__name}>{hotelName}</div>
            <div className={styles.favorite__icon} onClick={handleChangeFavoriteHotel}>
                <Heart color={find} />
            </div>
            <div className={styles.date__range}>
                {rangeDateToString} &nbsp; — &nbsp; {options.range} {getDay(options.range, "день", "дня", "дней")}
            </div>
            <div className={styles.rating}>
                {[...Array(stars)].map((el, index) => {
                    return <Star color={"#CDBC1E"} key={index} />;
                })}
                {5 - stars !== 0
                    ? [...Array(5 - stars)].map((el, index) => {
                          return <Star key={index} />;
                      })
                    : null}
            </div>
            <div className={styles.price}>
                Цена: <span className={styles.price__cost}>{priceAvg} ₽</span>
            </div>
        </div>
    );
};

export default HotelCard;
