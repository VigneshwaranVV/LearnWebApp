import { checkEmail } from "./regexValid";

const ApplyFormValidator = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = "Required"
    } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less"
    }
    if (!values.email) {
        errors.email = "Required"
    } else if (!checkEmail(values.email)) {
        errors.email = "Provide valid email address"
    }
    if (!values.age) {
        errors.age = "Required"
    } else if (isNaN(Number(values.age))) {
        errors.age = "Must be a number"
    } else if (Number(values.age) < 18) {
        errors.age = "Sorry, you must be at least 18 years old"
    }
    if (!values.password) {
        errors.password = "Required"
    }
    else if (values.password.length !== 5) {
        errors.password = "Password must be at least 6 characters"
    }
    return errors
}


export default ApplyFormValidator;