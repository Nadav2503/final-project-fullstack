import React from "react";
import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";

const CheckboxField = ({
    name,
    data,
    label,
    required = false,
    error,
    onChange,
    ...rest
}) => {
    return (
        <Grid item xs={12} sm={6} {...rest}>
            <Typography variant="body2" sx={{ color: "text.primary", mb: 1 }}>
                {label}
            </Typography>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={data[name] || false}
                        onChange={onChange}
                        name={name}
                    />
                }
                label={label}
            />
            {error && <Typography variant="body2" color="error">{error}</Typography>}
        </Grid>
    );
};

export default CheckboxField;
