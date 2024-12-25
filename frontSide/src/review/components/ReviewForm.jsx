import React from 'react';
import Form from '../../form/Form';
import TextArea from '../../form/TextArea';
import RatingField from '../../form/Rating';

const ReviewForm = ({
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
            {/* Rating Field */}
            <RatingField
                name="rating"
                label="Rating"
                error={errors.rating}
                onChange={onInputChange}
                data={data}
            />

            {/* Comment Field */}
            <TextArea
                name="comment"
                label="Comment"
                error={errors.comment}
                onChange={onInputChange}
                data={data}
                rows={4}
            />
        </Form>
    );
};

export default ReviewForm;
