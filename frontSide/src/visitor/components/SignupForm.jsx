import React from "react";
import Form from "../../form/Form";
import Input from "../../form/Input";
import SelectField from "../../form/Select";

const SignupForm = ({
    onSubmit,
    onInputChange,
    errors = {},
    data = {},
    title,
    submitLabel,
    validateForm,
}) => {
    return (
        <Form
            title={title}
            errors={errors}
            onSubmit={onSubmit}
            validateForm={validateForm}
            submitLabel={submitLabel}
        >
            {/* Username */}
            <Input
                name="username"
                label="Username"
                error={errors.username}
                onChange={onInputChange}
                data={data}
                required={true}  // Set required here
            />

            {/* First Name */}
            <Input
                name="first"
                label="First Name"
                error={errors.first}
                onChange={onInputChange}
                data={data}
                required={true}  // Set required here
            />

            {/* Middle Name */}
            <Input
                name="middle"
                label="Middle Name"
                error={errors.middle}
                onChange={onInputChange}
                data={data}
                required={false}  // Set required to false here if not mandatory
            />

            {/* Last Name */}
            <Input
                name="last"
                label="Last Name"
                error={errors.last}
                onChange={onInputChange}
                data={data}
                required={true}  // Set required here
            />

            {/* Email */}
            <Input
                name="email"
                label="Email"
                type="email"
                error={errors.email}
                onChange={onInputChange}
                data={data}
                required={true}  // Set required here
            />

            {/* Password */}
            <Input
                name="password"
                label="Password"
                type="password"
                error={errors.password}
                onChange={onInputChange}
                data={data}
                required={true}  // Set required here
            />

            {/* Membership Tier */}
            <SelectField
                name="membershipTier"
                label="Membership Tier"
                error={errors.membershipTier}
                onChange={onInputChange}
                data={data}
                options={[
                    { value: "Tier 1 - Explorer", label: "Tier 1 - Explorer" },
                    { value: "Tier 2 - Lionheart", label: "Tier 2 - Lionheart" },
                    { value: "Tier 3 - Jungle King/Queen", label: "Tier 3 - Jungle King/Queen" },
                    { value: "Tier 4 - Safari Leader", label: "Tier 4 - Safari Leader" },
                ]}
                required={true}  // Set required here
            />

            {/* Phone */}
            <Input
                name="phone"
                label="Phone"
                type="tel"
                error={errors.phone}
                onChange={onInputChange}
                data={data}
                required={false}  // Set required to false here if not mandatory
            />

            {/* Image URL */}
            <Input
                name="imageUrl"
                label="Profile Picture URL"
                error={errors.imageUrl}
                onChange={onInputChange}
                data={data}
                required={false}  // Set required to false here if not mandatory
            />

            {/* Image Alt Text */}
            <Input
                name="imageAlt"
                label="Profile Picture Description"
                error={errors.imageAlt}
                onChange={onInputChange}
                data={data}
                required={false}  // Set required to false here if not mandatory
            />
        </Form>
    );
};

export default SignupForm;
