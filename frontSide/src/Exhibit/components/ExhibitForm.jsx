import React from "react";
import Form from "../../form/Form";
import Input from "../../form/Input";
import TextArea from "../../form/TextArea";
import SelectField from "../../form/Select";

const ExhibitForm = ({
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
            styles={{ maxWidth: "800px" }
            }
            validateForm={validateForm}
            title={title}
            submitLabel={submitLabel}
        >
            <Input
                name="name"
                label="Name"
                error={errors.name}
                onChange={onInputChange}
                data={data}
            />

            <TextArea
                name="description"
                label="Description"
                error={errors.description}
                onChange={onInputChange}
                data={data}
                rows={4}
            />

            <SelectField
                name="location"
                label="Location"
                error={errors.location}
                onChange={onInputChange}
                data={data}
                options={
                    [
                        { value: "Africa", label: "Africa" },
                        { value: "Asia", label: "Asia" },
                        { value: "Europe", label: "Europe" },
                        { value: "North America", label: "North America" },
                        { value: "South America", label: "South America" },
                        { value: "Australia", label: "Australia" },
                        { value: "Antarctica", label: "Antarctica" },
                    ]}
            />

            <SelectField
                name="status"
                label="Status"
                error={errors.status}
                onChange={onInputChange}
                data={data}
                options={
                    [
                        { value: "open", label: "Open" },
                        { value: "closed", label: "Closed" },
                        { value: "under maintenance", label: "Under Maintenance" },
                    ]}
            />

            <Input
                name="capacity"
                label="Maximum Capacity"
                type="number"
                error={errors.capacity}
                onChange={onInputChange}
                data={data}
                inputProps={{ min: 0, max: 100 }}
                onInput={(e) => e.preventDefault()}
            />
        </Form>
    );
};

export default ExhibitForm;
