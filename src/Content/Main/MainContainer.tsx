import React, { useEffect } from "react";
import styles from "./MainContainer.module.scss";
import { ReactComponent as HeaderArrow } from "../../images/svg/HeaderArrow.svg";
import Carusel from "./Carusel";
import HotelCard from "../../components/HotelCard";
import { useSelector, useDispatch } from "react-redux";
import { getHotels, RootState } from "../../store";
import { hotelInfo } from "../../store/reducers/hotelsReducer";
import { SearchOptions } from "../../store/reducers/searchOptionsReducer";
import { pluralNames } from "../../helpers";

const MainContainer = () => {
    const options: SearchOptions = useSelector((state: RootState) => state.searchOptions);
    const hotels: hotelInfo[] = useSelector((state: RootState) => state.hotels);
    const favorites: hotelInfo[] = useSelector((state: RootState) => state.favorites.favorites);
    const dispatch = useDispatch();
    useEffect(() => {
        if (options.date) {
            dispatch(getHotels(options));
        }
    }, [options, dispatch]);

    return (
        <div className={styles.maincontainer__wrapper}>
            <div className={styles.main_content__header}>
                <div className={styles.hotels_header}>
                    <div className={styles.title}>Отели</div>
                    <div className={styles.arrow}>
                        <HeaderArrow />
                    </div>
                    <div className={styles.header__sity}>{options.location}</div>
                </div>
                {options.date ? (
                    <div className={styles.entry__date}>
                        {options.date.toLocaleDateString("ru", { day: "numeric", month: "long" }) +
                            " 20" +
                            options.date.toLocaleDateString("ru", { year: "2-digit" })}
                    </div>
                ) : null}
            </div>
            <div className={styles.maincontainer_slider}>
                <Carusel />
            </div>
            <div className={styles.hotel__counter}>
                Добавлено в Избранное: <span className={styles.counter}>{favorites.length}&nbsp;</span>
                {pluralNames(favorites.length, "отель", "отеля", "отелей")}
            </div>
            <div className={styles.hotels__list}>
                {hotels.length !== 0
                    ? hotels.map((el: hotelInfo) => {
                          return (
                              <div className={styles.hotel_card} key={el.hotelId}>
                                  <div className={styles.house_icon} />
                                  <div className={styles.hotelcard__wrapper}>
                                      <HotelCard {...{ ...el, options }} />
                                  </div>
                              </div>
                          );
                      })
                    : null}
            </div>
        </div>
    );
};

export default MainContainer;
