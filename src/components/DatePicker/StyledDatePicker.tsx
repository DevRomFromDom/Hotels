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
        lineHeight: "20px",
        padding: "17px",
        height: "1rem",
        width: "266px"
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
        "&.Mui-error": {
            color: "red",
        },
    },
});

interface DatePicerProps {
    value: Date | null;
    onChange: (value: Date) => void;
    error?: { error: boolean; text: string };
}

const StyledDatePicker = (props: DatePicerProps) => {
    const { onChange, value, error } = props;
    const [dataPickerValue, setDataPickerValue] = useState<Date>(new Date());
    useEffect(() => {
        if (value !== dataPickerValue) {
            onChange(dataPickerValue);
        }
    }, [dataPickerValue, onChange, value]);

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
                <DatePicker
                    mask='__.__.____'
                    value={dataPickerValue}
                    onChange={(newValue: any) => {
                        setDataPickerValue(newValue);
                    }}
                    renderInput={(params) => (
                        <FormControl variant='standard' fullWidth={true}>
                            <StyledInputLabel shrink htmlFor={"date-picker"} error={error?.error}>
                                {"Дата заселения"}
                            </StyledInputLabel>
                            <StyledTextField
                                {...params}
                                id={"date-picker"}
                                error={error?.error ? true : undefined}
                                helperText={error ? error.text : ""}
                            />
                        </FormControl>
                    )}
                />
            </LocalizationProvider>
        </>
    );
};

export default StyledDatePicker;
