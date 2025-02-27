import React from "react";

const ApplyFormValidator = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = "Required"
    } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less"
    }
    if (!values.email) {
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"
    }
    if (!values.age) {
        errors.age = "Required"
    } else if (isNaN(Number(values.age))) {
        errors.age = "Must be a number"
    } else if (Number(values.age) < 18) {
        errors.age = "Sorry, you must be at least 18 years old"
    }
    return errors
}


export default ApplyFormValidator;