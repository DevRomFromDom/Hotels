import React from "react";
import styles from "./Wrapper.module.scss";

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper = ({children}:WrapperProps): JSX.Element => {
    return <div className={styles.card__wrapper}>{children}</div>;
};

export default Wrapper;
