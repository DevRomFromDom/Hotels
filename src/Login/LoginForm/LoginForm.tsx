import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import StyledInput from "../../components";
import { validation } from "./validation";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { logIn } from "../../store";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ error: false, errors: { login: "", password: "" } });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setError({ error: false, errors: { login: "", password: "" } });
        e.preventDefault();
        const result = await validation(login, password);
        if (result?.error) {
            setError(result);
        } else {
            dispatch(logIn());
            history.push("/content");
            localStorage.setItem("isLoggedIn", "true");
        }
    };
    const handleLoginChange = (value: string): void => {
        setLogin(value);
    };
    const handleLPasswordChange = (value: string): void => {
        setPassword(value);
    };

    const styledInput = classNames(styles.login_input, { [styles.error]: error.errors.login });
    const styledBtn = classNames(styles.btn, { [styles.error]: error.errors.password });


    return (
        <div className={styles.loginform__wrapper}>
            <div className={styles.loginform_container}>
                <div className={styles.loginform__title}>Simple Hotel Check</div>
                <form className={styles.login__form} onSubmit={(e) => handleSubmit(e)}>
                    <div className={styledInput}>
                        <StyledInput
                            title={"Логин"}
                            value={login}
                            onChange={handleLoginChange}
                            autoFocus={true}
                            error={error.error ? { error: error.error, text: error.errors.login } : undefined}
                          
                        />
                    </div>
                    <div className={styles.password__input}>
                        <StyledInput
                            title={"Пароль"}
                            type={"password"}
                            value={password}
                            onChange={handleLPasswordChange}
                            error={error.error ? { error: error.error, text: error.errors.password } : undefined}
                        />
                    </div>
                    <div className={styles.submit__btn}>
                        <button className={styledBtn} type='submit'>
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
