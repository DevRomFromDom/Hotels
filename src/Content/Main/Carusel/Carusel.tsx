import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import styles from "./Carusel.module.scss";
import Forest1 from "../../../images/forest1.png";
import Forest2 from "../../../images/forest2.png";
import Forest3 from "../../../images/forest3.png";

const Carusel = () => {
    return (
        <div className={styles.carusel__wrapper}>
            <Swiper spaceBetween={12} slidesPerView={3.5}>
                <SwiperSlide>
                    <img src={Forest1} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Forest2} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Forest3} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Forest1} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Forest2} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Forest3} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Forest1} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Forest2} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Forest3} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Forest1} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Forest2} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Forest3} alt='' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carusel;
