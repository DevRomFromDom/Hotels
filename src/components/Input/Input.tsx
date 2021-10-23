import React, { useEffect, useState } from "react";
import { TextField, FormControl, InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

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
    "& .Mui-error":{
        input: {
            color: "red"
        }
    }
});
const StyledInputLabel = styled(InputLabel)({
    "&.MuiInputLabel-root": {
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "19px",
        fontFamily: "Roboto",
        lineHeight: "19px",
        top: "-20px",
    },
});

interface InputProps {
    title?: string;
    type?: string;
    value: string;
    onChange?: (value: any) => void;
    autoFocus?: boolean;
    error?: { error?: boolean; text?: string };
}

const Input = (props: InputProps) => {
    const { title, type, value, onChange, autoFocus, error } = props;
    const [inputValue, setInputValue] = useState(value);
    useEffect(() => {
        if (onChange) {
            onChange(inputValue);
        }
    }, [inputValue, onChange]);

    const handleChange = (e: any) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <FormControl variant='standard' fullWidth={true}>
                <StyledInputLabel shrink htmlFor={`${title}-input`} error={error?.error}>
                    {title}
                </StyledInputLabel>
                <StyledTextField
                    name={type}
                    autoFocus={autoFocus}
                    autoComplete='off'
                    id={`${title}-input`}
                    value={inputValue}
                    onChange={(e) => handleChange(e)}
                    error={error?.error}
                    helperText={error?.text}
                    type={type}
                    InputProps={{error: error?.error }}
                />
            </FormControl>
        </>
    );
};

export default Input;
