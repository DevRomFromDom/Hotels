import React from "react";
import styles from "./Login.module.scss";
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <div className={styles.login__wrapper}>
            <div className={styles.login__container}>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
