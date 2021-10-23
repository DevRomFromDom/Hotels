/* eslint-disable */

interface IValidationError {
    error?: boolean,
    errors?:{
        login?: string,
        password?:string
    }
}

export const validation = (login: string, password: string) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let newError = { error: false, errors: { login: "", password: "" }  };
    if (login.length > 0) {
        if (!reg.test(login)) {
            newError = { ...newError, error: true, errors: { ...newError.errors, login: "Введите правильный Email" } };
        }
    } else {
        newError = { ...newError, error: true, errors: {...newError.errors, login: "Введите Email" } };
    }
    if (password.length > 0) {
        if (password.length < 8) {
            newError = { ...newError, error: true, errors: {...newError.errors, password: "Пароль должен быть более 8 символов" } };
        }
    } else {
        newError = { ...newError, error: true, errors: {...newError.errors, password: "Введите пароль" } };
    }
    return newError;
};
