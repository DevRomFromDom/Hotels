import React, { useEffect, useState } from "react";
import HotelCard from "../../components/HotelCard";
import styles from "./Favorites.module.scss";
import { ReactComponent as Select } from "../../images/svg/select.svg";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { hotelInfo } from "../../store/reducers/hotelsReducer";
import { changeSortFavoritesHotels } from "../../store";
import classNames from "classnames";

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites);
    const [sort, setSort] = useState(favorites.sort);
    const styledRaitingBtn = classNames(styles.btn, { [styles.dis]: sort.main === "price" });
    const styledPriceBtn = classNames(styles.btn, { [styles.dis]: sort.main === "rating" });
    const styledRaitingIcon = classNames(styles.icon, {
        [styles.dis]: sort.main === "price",
        [styles.reverse]: sort.reverse === "min" && sort.main === "rating",
    });
    const styledPriceIcon = classNames(styles.icon, {
        [styles.dis]: sort.main === "rating",
        [styles.reverse]: sort.reverse === "min" && sort.main === "price",
    });

    useEffect(() => {
        dispatch(changeSortFavoritesHotels(sort));
    }, [sort, dispatch]);

    const handleChangeSortRating = () => {
        setSort({ ...sort, main: "rating", reverse: sort.reverse === "max" && sort.main === "rating" ? "min" : "max" });
    };
    const handleChangeSortPrice = () => {
        setSort({ ...sort, main: "price", reverse: sort.reverse === "max" && sort.main === "price" ? "min" : "max" });
    };

    return (
        <div className={styles.favorites__wrapper}>
            <div className={styles.favorites__title}>Избранное</div>
            <div className={styles.favorites__btns}>
                <div className={styledRaitingBtn} onClick={handleChangeSortRating}>
                    Рейтинг <Select className={styledRaitingIcon} />
                </div>
                <div className={styledPriceBtn} onClick={handleChangeSortPrice}>
                    Цена
                    <Select className={styledPriceIcon} />
                </div>
            </div>
            <div className={styles.favorites__container}>
                {favorites.favorites.length !== 0 ? (
                    favorites.favorites.map((el: hotelInfo) => {
                        return (
                            <div className={styles.hotel_card} key={el.hotelId}>
                                <div className={styles.house_icon} />
                                <div className={styles.hotelcard__wrapper}>
                                    <HotelCard {...el} />
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <span>Список избранных отелей пуст.</span>
                )}
            </div>
        </div>
    );
};

export default Favorites;
