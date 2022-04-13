import React from "react";
import styles from "./Content.module.scss";
import { ReactComponent as LogOut } from "../images/svg/log out.svg";
import SearchForm from "./SearchForm";
import Favorites from "./Favorites";
import MainContainer from "./Main";
import Wrapper from "../components/Wrapper";
import { useDispatch } from "react-redux";
import { logOut } from "../store";

const Content = () => {
    const dispatch = useDispatch();
    const hangleLogOut = () => {
        dispatch(logOut());
        localStorage.removeItem("isLoggedIn");
    };
    return (
        <div className={styles.content__wrapper}>
            <div className={styles.content__header}>
                <div className={styles.header__title}>Simple Hotel Check</div>
                <div className={styles.header__btn}>
                    <div className={styles.btn__exit} onClick={hangleLogOut}>
                        <span className={styles.exit__text}>Выйти</span> <LogOut />
                    </div>
                </div>
            </div>
            <div className={styles.main__content_wrapper}>
                <div className={styles.content__container}>
                    <div className={styles.search__form}>
                        <Wrapper>
                            <SearchForm />
                        </Wrapper>
                    </div>
                    <div className={styles.favorites}>
                        <Wrapper>
                            <Favorites />
                        </Wrapper>
                    </div>
                    <div className={styles.main__container}>
                        <Wrapper>
                            <MainContainer />
                        </Wrapper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
