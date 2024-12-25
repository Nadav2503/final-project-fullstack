import React from "react";
import { Select, MenuItem, FormControl, InputLabel, Grid, FormHelperText, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SelectField = ({
    name,
    data,
    label,
    required = true,
    error,
    onChange,
    options = [],
    ...rest
}) => {
    const theme = useTheme();

    const inputBorderColor = theme.palette.mode === "dark" ? "#B0BEC5" : "#47663B";
    const labelColor = theme.palette.mode === "dark" ? "#E8ECD7" : "#62825D";

    return (
        <Grid item xs={12} sm={6} {...rest}>
            <Typography variant="body2" sx={{ color: labelColor, mb: 1 }}>
                {label}
            </Typography>
            <FormControl
                fullWidth
                required={required}
                error={Boolean(error)}
                sx={{
                    '& .MuiFormLabel-root': {
                        color: labelColor,
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
                }}
            >
                <Select
                    id={name}
                    name={name}
                    value={data[name] || ""}
                    onChange={onChange}
                >
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </Grid>
    );
};

export default SelectField;
