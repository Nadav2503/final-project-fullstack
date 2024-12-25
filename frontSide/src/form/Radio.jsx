import React from "react";
import { RadioGroup, FormControlLabel, Radio, Grid, Typography } from "@mui/material";

const RadioField = ({
    name,
    data,
    label,
    required = true,
    error,
    onChange,
    options = [],
    ...rest
}) => {
    return (
        <Grid item xs={12} sm={6} {...rest}>
            <Typography variant="body2" sx={{ color: "text.primary", mb: 1 }}>
                {label}
            </Typography>
            <RadioGroup
                name={name}
                value={data[name] || ""}
                onChange={onChange}
            >
                {options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </Grid>
    );
};

export default RadioField;
