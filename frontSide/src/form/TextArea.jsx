import React from "react";
import { TextField, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeFirstLetterCapital } from "./algoMethod";

const TextArea = ({
    name,
    data,
    label,
    required = true,
    error,
    onChange,
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
                variant="outlined"
                name={name}
                value={data[name] || ""}
                onChange={onChange}
                required={required}
                multiline
                rows={4}
                fullWidth
                error={Boolean(error)}
                helperText={error}
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

export default TextArea;
