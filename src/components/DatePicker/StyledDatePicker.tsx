import React, { useState, useEffect } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { FormControl, TextField, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ru } from "date-fns/locale";

const StyledTextField = styled(TextField)({
    "&.MuiFormControl-root": {
        width: "100%",
    },
    fieldset: {
        border: "1px solid #C9CACC",
    },
    "& .MuiFormHelperText-root": {
        margin: "7px 0px 0px 0px",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "12px",
        fontFamily: "Roboto",
        lineHeight: "14px",
    },
    "& input": {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "16px",
        lineHeight: "18px",
    },
    "& .Mui-error": {
        input: {
            color: "red",
        },
    },
});
const StyledInputLabel = styled(InputLabel)({
    "&.MuiInputLabel-root": {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "19px",
        fontFamily: "Roboto",
        lineHeight: "19px",
        top: "-20px",
        color: "#424242",
    },
});

interface DatePicerProps {
    value: Date;
    onChange: (value: Date) => void;
}

const StyledDatePicker = (props: DatePicerProps) => {
    const { onChange, value } = props;
    const [dataPickerValue, setDataPickerValue] = useState<Date>(new Date());

    useEffect(() => {
        if (value.toString() !== dataPickerValue.toString()) {
            onChange(dataPickerValue);
        }
    }, [dataPickerValue, onChange, value]);

    const handleChange = (newValue: any) => {
        setDataPickerValue(newValue);
    };
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
                <DatePicker
                    mask='__.__.____'
                    value={dataPickerValue}
                    onChange={(newValue: any) => {
                        handleChange(newValue);
                    }}
                    renderInput={(params) => (
                        <FormControl variant='standard' fullWidth={true}>
                            <StyledInputLabel shrink htmlFor={"date-picker"}>
                                {"Дата заселения"}
                            </StyledInputLabel>
                            <StyledTextField {...params} id={"date-picker"} />
                        </FormControl>
                    )}
                />
            </LocalizationProvider>
        </>
    );
};

export default StyledDatePicker;
