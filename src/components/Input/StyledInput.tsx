import React, { useEffect, useState } from "react";
import { TextField, FormControl, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

interface InputProps {
    title?: string;
    type?: string;
    value?: any;
    onChange: (value: any) => any;
    autoFocus?: boolean;
    error?: { error?: boolean; text?: string };
    bold?: boolean;
}

const StyledTextField = styled(TextField)({
    "& .MuiFormControl-root": {
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

const StyledInputLabel = styled(InputLabel, {
    shouldForwardProp: (prop) => prop !== "bold",
})<{ bold: boolean }>(({ bold }) => ({
    "&.MuiInputLabel-root": {
        fontStyle: "normal",
        fontSize: "19px",
        fontFamily: "Roboto",
        lineHeight: "19px",
        top: "-20px",
        fontWeight: bold ? 500 : 300,
        color: bold ? "#424242" : "",
    },
}));

const StyledInput = (props: InputProps) => {
    const { title, type, onChange, autoFocus, value = "", error, bold = false } = props;
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e: any) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        onChange(inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue]);

    return (
        <>
            <FormControl variant='standard' fullWidth={true}>
                <StyledInputLabel shrink htmlFor={`${title}-input`} error={error?.error} bold={bold}>
                    {title}
                </StyledInputLabel>
                <StyledTextField
                    name={title}
                    autoFocus={autoFocus}
                    autoComplete='off'
                    id={`${title}-input`}
                    value={inputValue}
                    onChange={handleChange}
                    error={error?.error}
                    helperText={error?.text}
                    type={type}
                    InputProps={{ error: error?.error }}
                />
            </FormControl>
        </>
    );
};

export default StyledInput;
