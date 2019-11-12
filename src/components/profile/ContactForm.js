import React from "react"
import MyCustomInput from "./MyCustomInput";
import { reduxForm, Field } from "redux-form"

let ContactForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" label="First Name" component={MyCustomInput} type="text" />
      <Field name="lastName" label="Last Name" component={MyCustomInput} type="text" />
      <Field name="email" label="Email" component={MyCustomInput} type="text" />
      <Field name="contact" label="Contact No" component={MyCustomInput} type="text" />
      <button type="submit">Submit</button>
    </form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: "contact",
})(ContactForm)

export default ContactForm