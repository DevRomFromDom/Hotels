import React from "react";
import styles from "./HotelCard.module.scss";
import Heart from "../Heart";
import Star from "../../components/Star";
import { hotelInfo } from "../../store/reducers/hotelsReducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState, addFavoriteHotel, removeFavoriteHotel } from "../../store";
import { pluralNames } from "../../helpers";

const HotelCard = (props: hotelInfo) => {
    const { stars, priceAvg, hotelName, hotelId, options } = props;
    const favorites: hotelInfo[] = useSelector((state: RootState) => state.favorites.favorites);

    const rangeDateToString =
        options.date.toLocaleDateString("ru", { day: "numeric", month: "long" }) +
        ", 20" +
        options.date.toLocaleDateString("ru", { year: "2-digit" });

    const dispatch = useDispatch();
    const isFavorite = favorites.some((el) => el.hotelId === hotelId);
    const handleChangeFavoriteHotel = () => {
        if (isFavorite) {
            dispatch(removeFavoriteHotel(hotelId));
        } else {
            const hotelFavorite = {
                stars: stars,
                priceAvg: priceAvg,
                hotelName: hotelName,
                hotelId: hotelId,
                options: { range: options.range, date: options.date },
            };
            dispatch(addFavoriteHotel(hotelFavorite));
        }
    };

    return (
        <div className={styles.hotel__card_wrapper}>
            <div className={styles.hotel__name}>{hotelName}</div>
            <div className={styles.favorite__icon} onClick={handleChangeFavoriteHotel}>
                <Heart color={isFavorite} />
            </div>
            <div className={styles.date__range}>
                {rangeDateToString} &nbsp; — &nbsp; {options.range} {pluralNames(options.range, "день", "дня", "дней")}
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
