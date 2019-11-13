import React from "react"
import MyCustomInput from "./MyCustomInput";
import { reduxForm, Field } from "redux-form"
import { connect } from "react-redux";
import CustomButton from "../../common/VButton/CustomButton";
import ProfileFormValidator from "../../validations/profileFormValidator";

let ContactForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" label="First Name" component={MyCustomInput} type="text" />
      <Field name="lastName" label="Last Name" component={MyCustomInput} type="text" />
      <Field name="age" label="Age" component={MyCustomInput} type="text" />
      <Field name="dob" label="DOB" component={MyCustomInput} type="text" />
      <Field name="email" label="Email" component={MyCustomInput} type="text" />
      <Field name="contact" label="Contact No" component={MyCustomInput} type="text" />
     <div style={{padding:20}}>
      <CustomButton label="Submit" />
      </div>
    </form>
  )
}

const mapStateToProps = (state, props) => {
  const data = state.authReducer.loginResponse.userData
  return {
    initialValues: {
      email: data.email,
      contact: data.mobile,
      firstName: data.name,
      age: data.age,
      dob: data.dob,
      skills: data.skills,
    }
  }
}

export default connect(
  mapStateToProps
)(reduxForm({
  form: "contact", 
  ProfileFormValidator,// a unique identifier for this form
  enableReinitialize: true
})(ContactForm))
