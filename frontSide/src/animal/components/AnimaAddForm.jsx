import React from "react";
import Form from "../../form/Form";
import Input from "../../form/Input";
import TextArea from "../../form/TextArea";
import SelectField from "../../form/Select";
import Checkbox from "../../form/Checkbox";
import RadioField from "../../form/Radio";

const AnimalAddForm = ({
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
            onSubmit={onSubmit}
            errors={errors}
            styles={{ maxWidth: "800px" }}
            validateForm={validateForm}
            title={title}
            submitLabel={submitLabel}
        >
            {/* Name Input */}
            <Input
                name="name"
                label="Name"
                error={errors.name}
                onChange={onInputChange}
                data={data}
            />

            {/* Type Input */}
            <Input
                name="type"
                label="Type"
                error={errors.type}
                onChange={onInputChange}
                data={data}
            />

            {/* Gender RadioField */}
            <RadioField
                name="gender"
                label="Gender"
                error={errors.gender}
                onChange={onInputChange}
                data={data}
                options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                ]}
            />

            {/* Age Input */}
            <Input
                name="age"
                label="Age"
                type="number"
                error={errors.age}
                onChange={onInputChange}
                data={data}
                inputProps={{ min: 1 }}
                onInput={(e) => e.preventDefault()}
            />

            {/* Description TextArea */}
            <TextArea
                name="description"
                label="Description"
                error={errors.description}
                onChange={onInputChange}
                data={data}
                rows={4}
            />

            {/* Diet Select */}
            <SelectField
                name="diet"
                label="Diet"
                error={errors.diet}
                onChange={onInputChange}
                data={data}
                options={[
                    { value: "omnivore", label: "Omnivore" },
                    { value: "carnivore", label: "Carnivore" },
                    { value: "herbivore", label: "Herbivore" },
                ]}
            />

            {/* Endangered Checkbox */}
            <Checkbox
                name="isEndangered"
                label="Is Endangered?"
                error={errors.isEndangered}
                onChange={onInputChange}
                data={data}
            />

            {/* Health Status TextArea */}
            <TextArea
                name="healthStatus"
                label="Health Status"
                error={errors.healthStatus}
                onChange={onInputChange}
                data={data}
                rows={4}
            />

            {/* Image URL Input */}
            <Input
                name="imageUrl"
                label="Image URL"
                error={errors.imageUrl}
                onChange={onInputChange}
                data={data}
            />

            {/* Image Alt Text Input */}
            <Input
                name="imageAlt"
                label="Image Alt Text"
                error={errors.imageAlt}
                onChange={onInputChange}
                data={data}
            />
        </Form>
    );
};

export default AnimalAddForm;
