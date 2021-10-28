import StyledInput from "../../components";
import React, { useState, useEffect } from "react";
import styles from "./SearchForm.module.scss";
import StyledDatePicker from "../../components/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { setOptions, RootState } from "../../store";


const SearchForm = () => {
    const dispatch = useDispatch();
    const stateOptions = useSelector((state: RootState) => state.searchOptions);
    const [location, setLocation] = useState("Москва");
    const [date, setDate] = useState(new Date());
    const [range, setRange] = useState(1);
    
    const locationChange = (value: string): void => {
        setLocation(value);
    };
    const dateChange = (value: Date): void => {
        setDate(value);
    };
    const daysRangeChange = (value: number): void => {
        setRange(value);
    };

    const handleSubmit = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        dispatch(setOptions({ date, location, range }));
    };
    useEffect(() => {
        if (!stateOptions.date) {
            dispatch(setOptions({ location, date, range }));
        }
    }, [dispatch, range, date, location, stateOptions]);

    

    return (
        <div className={styles.searchform__wrapper}>
            <form onSubmit={handleSubmit}>
                <div className={styles.input__wrapper}>
                    <StyledInput
                        title={"Локация"}
                        bold
                        value={location}
                        onChange={(value: any) => locationChange(value)}
                    />
                </div>
                <div className={styles.input__wrapper}>
                    <StyledDatePicker onChange={dateChange} value={date} />
                </div>
                <StyledInput title={"Количество дней"} bold value={range} onChange={daysRangeChange} type={"number"} />

                <button className={styles.btn__search} type='submit'>
                    Найти
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
