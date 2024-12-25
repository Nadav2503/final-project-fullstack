import { useCallback, useState } from "react";
import Joi from "joi";

export default function useForm(initialForm, schema, handleSubmit) {
    const [data, setData] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const validateProperty = useCallback(
        (name, value) => {
            let joiSchema = Joi.object({ [name]: schema[name] });
            let { error } = joiSchema.validate({ [name]: value });
            const errorMessage = error ? error.details[0].message : null;
            return errorMessage;
        },
        [schema]
    );

    const validateForm = useCallback(() => {
        const joiSchema = Joi.object(schema);
        const { error } = joiSchema.validate(data);
        return !error; // Returns true if the form is valid, false otherwise
    }, [schema, data]);

    const handleChange = useCallback(
        (e) => {
            let value = e.target.value;
            let name = e.target.name;

            // Handle checkbox
            if (e.target.type === "checkbox") {
                value = e.target.checked;
                setData((prev) => ({ ...prev, [name]: value }));
            } else {
                // Handle regular inputs
                const errorMessage = validateProperty(name, value);

                if (errorMessage) {
                    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
                } else {
                    setErrors((prev) => {
                        let obj = { ...prev };
                        delete obj[name];
                        return obj;
                    });
                }

                setData((prev) => ({ ...prev, [name]: value }));
            }

            // Trigger form validation whenever input changes
            validateForm();
        },
        [validateProperty, validateForm]
    );

    const handleChangeRating = useCallback(
        (nameOrEvent, customValue = null) => {
            let name, value;

            if (customValue !== null) {
                // Handling custom value
                name = nameOrEvent;
                value = customValue;
            } else {
                // Handling standard event
                const event = nameOrEvent;
                name = event.target.name;
                value = event.target.value;
            }

            // Validate the rating value
            const errorMessage = validateProperty(name, value);

            if (errorMessage) {
                setErrors((prev) => ({ ...prev, [name]: errorMessage }));
            } else {
                setErrors((prev) => {
                    let obj = { ...prev };
                    delete obj[name];
                    return obj;
                });
            }

            setData((prev) => ({ ...prev, [name]: value }));

            // Trigger form validation
            validateForm();
        },
        [validateProperty, validateForm]
    );


    const onSubmit = useCallback(() => {
        if (validateForm()) {
            handleSubmit(data);
        }
    }, [data, validateForm, handleSubmit]);

    return {
        data,
        errors,
        setData,
        handleChange,
        handleChangeRating,
        validateForm,
        onSubmit,
    };
}
