import React from "react";
import Form from "../../form/Form";
import Input from "../../form/Input";

const LoginForm = ({
    onSubmit,
    onInputChange,
    errors = {},
    data = {},
    title,
    submitLabel,
    validateForm
}) => {
    return (
        <Form
            title={title}
            errors={errors}
            onSubmit={onSubmit}
            validateForm={validateForm}
            submitLabel={submitLabel}
        >
            <Input
                name="username_or_email"
                label="Username or Email"
                error={errors.username_or_email}
                onChange={onInputChange}
                data={data}
            />

            <Input
                name="password"
                label="Password"
                type="password"
                error={errors.password}
                onChange={onInputChange}
                data={data}
            />
        </Form>
    );
};

export default LoginForm;
