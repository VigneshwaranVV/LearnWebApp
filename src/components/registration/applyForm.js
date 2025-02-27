import React from "react"
import { reduxForm, Field } from "redux-form"
import { connect } from "react-redux";
import CustomButton from "../../common/VButton/CustomButton";
import ApplyFormValidator from "../../validations/ApplyFormValidator";
import MyCustomInput from "../profile/MyCustomInput";
import "./styles.css"
import { registerUser } from "../../store_config/actions";

let ApplyForm = props => {
    const { handleSubmit ,formData} = props;
    const onclickSubmit = () => {
        // handleSubmit();

        props.onClickRegister(formData);
    }
    return (
        <div className="container">
        {console.log(props)}
            <div className="form_container" >
                <form onSubmit={onclickSubmit} style={{ width: "80%" }}>
                    <h2>Sign Up!</h2>
                    <Field name="firstName" label="First Name*" component={MyCustomInput} type="text" />
                    <Field name="lastName" label="Last Name" component={MyCustomInput} type="text" />
                    <Field name="age" label="Age*" component={MyCustomInput} type="text" />
                    <Field name="dob" label="DOB" component={MyCustomInput} type="text" />
                    <Field name="email" label="Email*" component={MyCustomInput} type="text" />
                    <Field name="contact" label="Contact No" component={MyCustomInput} type="text" />
                    <div style={{ padding: 20 }}>
                        <CustomButton label="Submit" isDisabled={!props.valid} onClick={onclickSubmit}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export const mapStateToProps = (state, props) => {
    return {
        initialValues: {
            email: "",
            contact: "",
            firstName: "",
            age: "",
            dob: "",
            skills: "",
        },
        formData: state.form.applyform &&state.form.applyform.values &&state.form.applyform.values
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onClickRegister: formData => {
            return dispatch(registerUser(formData));
        }
    };
};

ApplyForm = connect(
    mapStateToProps,mapDispatchToProps
)(reduxForm({
    form: "applyform",
    validate: ApplyFormValidator,// a unique identifier for this form
    enableReinitialize: true
})(ApplyForm))

export default ApplyForm;