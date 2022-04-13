import StyledInput from "../../components";
import React, { useState, useEffect } from "react";
import styles from "./SearchForm.module.scss";
import StyledDatePicker from "../../components/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { setOptions, RootState } from "../../store";
import { ISearchValidationError } from "../../helpers/validation";
import { validationSearch } from "../../helpers";

const SearchForm = () => {
    const dispatch = useDispatch();
    const stateOptions = useSelector((state: RootState) => state.searchOptions);
    const [location, setLocation] = useState("Москва");
    const [date, setDate] = useState(new Date());
    const [range, setRange] = useState(1);
    const [error, setError] = useState({ error: false, errors: { location: "", date: "", range: "" } });

    const locationChange = (value: string): void => {
        setLocation(value);
    };
    const dateChange = (value: Date): void => {
        setDate(value);
    };
    const daysRangeChange = (value: number): void => {
        setRange(value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setError({ error: false, errors: { location: "", date: "", range: "" } });
        event.preventDefault();
        const result: ISearchValidationError = await validationSearch(location, date, range);
        if (result.error) {
            setError(result);
        } else {
            dispatch(setOptions({ date, location, range }));
        }
    };
    useEffect(() => {
        if (!stateOptions.date) {
            dispatch(setOptions({ location, date, range }));
        }
    }, [dispatch, range, date, location, stateOptions]);

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.searchform__wrapper}>
                <div className={styles.input__location}>
                    <StyledInput
                        title={"Локация"}
                        bold
                        value={location}
                        onChange={(value: any) => locationChange(value)}
                        error={error.error ? { error: error.error, text: error.errors.location } : undefined}
                    />
                </div>
                <div className={styles.input__date}>
                    <StyledDatePicker
                        onChange={dateChange}
                        value={date}
                        error={error.error ? { error: error.error, text: error.errors.date } : undefined}
                    />
                </div>
                <div className={styles.input__range}>
                    <StyledInput
                        title={"Количество дней"}
                        bold
                        value={range}
                        onChange={daysRangeChange}
                        type={"number"}
                        error={error.error ? { error: error.error, text: error.errors.range } : undefined}
                    />
                </div>
                <button className={styles.btn__search} type='submit'>
                    Найти
                </button>
            </form>
        </>
    );
};

export default SearchForm;
