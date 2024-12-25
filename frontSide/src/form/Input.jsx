import React from "react";
import { TextField, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeFirstLetterCapital } from "./algoMethod";

const Input = ({
    variant = "outlined",
    type = "text",
    name,
    data,
    label,
    required = true,
    error,
    onChange,
    inputProps = {},
    ...rest
}) => {
    const theme = useTheme();

    const inputBorderColor = theme.palette.mode === "dark" ? "#B0BEC5" : "#47663B";
    const inputTextColor = theme.palette.mode === "dark" ? "#E8ECD7" : "#62825D";
    const labelColor = theme.palette.mode === "dark" ? "#E8ECD7" : "#62825D";

    return (
        <Grid item xs={12} sm={6} {...rest}>
            <Typography variant="body2" sx={{ color: labelColor, mb: 1 }}>
                {makeFirstLetterCapital(label)}
            </Typography>
            <TextField
                variant={variant}
                type={type}
                id={name}
                name={name}
                value={data[name] || ""}
                required={required}
                helperText={error}
                error={Boolean(error)}
                onChange={onChange}
                fullWidth
                autoComplete="off"
                inputProps={inputProps}
                sx={{
                    '& .MuiInputBase-root': {
                        borderColor: inputBorderColor,
                        color: inputTextColor,
                    },
                    '& .MuiFormLabel-root': {
                        color: labelColor,
                    },
                    '& .MuiInputBase-input': {
                        color: inputTextColor,
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: inputBorderColor,
                        },
                        '&:hover fieldset': {
                            borderColor: theme.palette.mode === "dark" ? "#9EDF9C" : "#3D5300",
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: theme.palette.mode === "dark" ? "#9EDF9C" : "#3D5300",
                        },
                    },
                    '& .MuiFormLabel-root.Mui-focused': {
                        color: theme.palette.mode === "dark" ? "#9EDF9C" : "#3D5300",
                    },
                }}
            />
        </Grid>
    );
};

export default Input;
