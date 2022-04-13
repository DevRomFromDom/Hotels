/* eslint-disable */

export interface ILoginValidationError {
    error: boolean;
    errors: {
        login: string;
        password: string;
    };
}
export interface ISearchValidationError {
    error: boolean;
    errors: {
        location: string;
        date: string;
        range: string;
    };
}

export const validationLogin = (login: string, password: string) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let newError: ILoginValidationError = { error: false, errors: { login: "", password: "" } };
    if (login.length > 0) {
        if (!reg.test(login)) {
            newError = { ...newError, error: true, errors: { ...newError.errors, login: "Введите правильный Email" } };
        }
    } else {
        newError = { ...newError, error: true, errors: { ...newError.errors, login: "Введите Email" } };
    }
    if (password.length > 0) {
        if (password.length < 8) {
            newError = { ...newError, error: true, errors: { ...newError.errors, password: "Пароль должен быть более 8 символов" } };
        }
    } else {
        newError = { ...newError, error: true, errors: { ...newError.errors, password: "Введите пароль" } };
    }
    return newError;
};

export const validationSearch = (location: string, date: Date | null, range: number | string) => {
    let currentDate = new Date().setUTCHours(0, 0, 0, 0)
    let newError: ISearchValidationError = { error: false, errors: { location: "", date: "", range: "" } };
    if (location.length === 0) {
        newError = { ...newError, error: true, errors: { ...newError.errors, location: "Введите локацию" } };
    }
    if (date !== null) {
        if (date.getTime() < currentDate) {
            newError = { ...newError, error: true, errors: { ...newError.errors, date: "Дата заселения не может быть раньше текущей" } };
        }
    } else {
        newError = { ...newError, error: true, errors: { ...newError.errors, date: "Введите дату заселения" } };
    }
    if (range === 0 || range === "") {
        newError = { ...newError, error: true, errors: { ...newError.errors, range: "Укажите колличество дней" } };
    }else{
        if(range >=100){
            newError = { ...newError, error: true, errors: { ...newError.errors, range: "Количество дней не может быть больше 100" } };
        }
    }
    return newError;
};
