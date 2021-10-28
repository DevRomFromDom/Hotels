import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
    children: () => JSX.Element;
}

const Card = (props: CardProps): JSX.Element => {
    const { children } = props;
    return <div className={styles.card__wrapper}>{children()}</div>;
};

export default Card;
