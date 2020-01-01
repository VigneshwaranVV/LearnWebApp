import React, { useEffect, user } from "react"
import MyCustomInput from "./MyCustomInput";
import { reduxForm, Field } from "redux-form"
import { connect } from "react-redux";
import CustomButton from "../../common/VButton/CustomButton";
import ProfileFormValidator from "../../validations/profileFormValidator";
import RenderChipInput from "../../common/VChipInput/renderChipInput";
import "./styles.css"
import ConfirmModal from "../../common/VAlert/confirmModal";
import { deleteUser, registerUser, clearAuthStatusMessage, updateUser } from "../../store_config/actions";
import MySnackbarContentWrapper from "../../common/VSnackBar/customSnack";
import Snackbar from "@material-ui/core/Snackbar";
import CustomizedRadios from "../../common/VRadio/customRadio";
import { ImageUpload } from "./imageUpload";
const profile_dp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAM1BMVEUKME7///+El6bw8vQZPVlHZHpmfpHCy9Ojsbzg5ekpSmTR2N44V29XcYayvsd2i5yTpLFbvRYnAAAJcklEQVR4nO2d17arOgxFs+kkofz/154Qmg0uKsuQccddT/vhnOCJLclFMo+//4gedzcApf9B4srrusk+GsqPpj+ypq7zVE9LAdLWWVU+Hx69y2FMwAMGyfusLHwIpooyw9IAQfK+8naDp3OGHvZ0FMhrfPMgVnVjC2kABOQ1MLvi0DEIFj1ILu0LU2WjNRgtSF3pKb4qqtd9IHmjGlJHlc09IHlGcrQcPeUjTAySAGNSkQlRhCCJMGaUC0HSYUx6SmxFAtJDTdylsr4ApC1TY0yquKbCBkk7qnYVzPHFBHkBojhVJWviwgPJrsP4qBgTgbQXdsesjm4pDJDmIuswVZDdFx0ENTtkihoeqSDXD6tVxOFFBHndMKxWvUnzexpIcx/Gg2goJJDhVo6PCMGRAnKTmZuKm3wcJO/upphUqUHy29yVrRhJDORXOKIkEZDf4YiRhEF+iSNCEgb5KY4wSRDkB/yurUEG8nMcocgYABnvbrVL3nMIP0h/d5udKnwzSC/InfPdkJ6eWb0PJE++dyVVyQP5iQmWW27X5QG5druEKafBu0Hqu9saVOHa8HKC/K6BzHKZiRMEZCDF0Nd1/ZfXI/fcOibHOssFgokg9uFA20BhztHEAZIjIohrD/o1wljeFBDEwBo8YUt5Ir/rNLjOIACPFdy/AbEcPdcJBOCxytjeYAM4Kzp6rhOIPhRGNzwmFP3rOoTFI0irtnQKx6fj1Zt+h9njEUS9mKJxfFRrX5lt7wcQtaWTOfTHeIXVJQcQrRW+OYex2j0a66XZINoO8a7fPH2iHF2mC7ZBtB3Czb5QvjizSx7A3308mRzqAwujSywQbYfwc0iU8zqjS0yQ6ztEHX9332KCaGNIYB/Qq1z3yN0oDZBWyeFYJBCkm2sXLhDtpKFwNDMu5TnrZpYGiHbK4Nlwikg5DrYV1g6iPoJmzE5MKd/fOp53EPUaQZaLqH3u+vo2ELWp3wSyWuYGoj9EEIJoV3L9AUS/ZLsJpLNBXmqOu0CW6P5A/dx9IL0FAji/FYKot9EqE0Tvs6QBUe/2CxMEkZAlBNGPhdoAQWyTSmbxUwvUygwQyMmniAPgLt87CODXHuftWJIQgzrfQDC5AfwSgz9MmmG/gWCOqDgZ4JsQeTvZBoJJDhAFEsSDyxUEEUUekk0UEMhjBcEcGsoWVpBU3NcCgkkPkJWrKbdRZvULCMTWhYEdMrayBQRyqHcnSLmAIH7LcWJ8Hch7BsHEdWFpJsZjziCgFBpZ9TPm4e0XBJTTJKt9xjy8RoLI4gimPLP5goCSgWTrEcyzsy8IqmZVMo0H5bJiQToBCOjZ5RcElhjLN3dU7uQMAvoxwQkJZKI1CQzCthJYEigahHuDDi4rFwzCPQ7F1fiDQZgTR5iJwEGYRgIsiECD8BwwMAEfDcIaW8CRBQdhjS1kJQEchDEFhiRKr4KDFPS9FGQNVwEHoW83QjsEHdkfnuIOl6C1NjMItiaCaCWgbdpFJXQ9soh2uoB9aJcCxFdgZwlcrTmvENGlrITBBdpK25Qhd1F2RScq8CKu/gsCL8qN5THjy+Rr5E6joYgPxpdl518QrCf8Kpgjn6C8HLkbb+vt7ZM8wdVvy258khsRfHaS5DalDnlidZT7Erk+SXV5Bj1D3LS29XyhVJuoKHs9Q8S6reK11oUc7vPcr9uswP3SLiDINefXOF5rwCuGzVT6zVkVPfh2wWmHcz4wAwba2cgN1/Tsvleu7//i69CgVyt1GwjOs2+XK3rtbl151Tg3vOeioG40Mz2V+6pQ4xbJHOZj6g0EMxk93tV7fuedvVZpQSPhbwNBGInrymGrwNh1GXmL8F+lAaJ+NU/fzcmvJqvKj7177+1v1GY/GiBKI1Fdy/2XK6upXwaIJpI8B/399W0mH9zzafKaeCF9J0WF+jyCuFusTGzZKhFH8dVLZql2brxgcdVBKb7KG/7UZTmB3XJ6uL/QYT5ScRI74FcHEJ7feopyfGkaeaGlPoCw/BbjZmSBWIvINQNmTxdjWJqwUI8sztR4nYPuIPSTSUnOCZOE3ierqRoJfNSQxDjLEYs8i91eqgFCDSWiFHiuqAN9CwEGCPEISVjvwhS7Mfx6dtX8kC5aqvneGBOEFN2v6RBiYwr3DQOkLhEW6fHFbIwFQnkLiWYmZxE220z/aedPx99C+hiyKR4OzNFhg8S75CJTnxQ1dyugHTLaY10iu9dBpmhQtMz1ABLrkgtHVnRsPUO3OcU25i8cWdGxZbflCBKJqBdMs3aF/dYhNexU9RFcYEmLXYQKghyWdufyldBSU3KpjkKhZclxTXQGCTkL/HZDUIH5+Gkt4SgoCtj7pSYSNJLTK3VVRnmXZxebSMBIzmHABeIdXBebiN9eHYtUZ62ab3BdGkUm+SKJw1bdRXeewaX7qqdAnljg2sVxg3guAk3baofcg9yZ2eZpnHNvSFrEqhB9YPjesmt0pt6Xc8hl7W5L9Q4Xx09ctsrd5VhWeF6nF8SRrZdw49qns//0xTK/AZ8vGr3caTliuzeFNeCJTgafpKlhHd2WP1sy1LqDF798gjKJPLqDr9keoTd43+NyNzC1CI8Xy2lcPtOaVBI5IiAWyQ3e125AcKoXs2Djhy5eVc3KiBxREIPkhjBiLhIjU++4T91IbggjRiCJLSEIwWGddkEaxlVN5KCArPHk8mXVpHk8FHH7JL3n5dPA7C90q7XkeFJucacNmGXeRfswLE71HA79efaGiCN/Ofjmfmtcp8X10tIsqCacV5xfRWjNUiXGYbovWgyFYHcQLak15K9oM5zqmgaeKsHJetbSHfSPzXOiw/rxE9YH4CXaUpsZ0ztemFurP95Jpyvrd29YTpIZr7cEJHqfc7Wl0PFm2+yJR70udaokKFtGPTdm8WdQe24+HmVLlueboWQquBcYYVH2vEzfh8kCks1p90eWsLCyZ8qK7E86Oe+3XYFnBuiWdth20UqZR5SvMoyPg3WNauJipi0LMTQgVq5xUUlZcrPsopPHJ926z8pm7xyFLrH/PxpHSoXKdWgXsLn1scZn1ZDd/2vszN3lt254qkE+qu3yoqLM+ghN3Qz2qcVzUC/ZMFsK/alU6l0OWV/bQz6v6yYbyuN5BaZ4A7Y30vs/PPksS2+qzlvfF7OQmzzcL7W+xa7OIfRuVdtn/tdvdFLnL4OTKcm2W16PmWc4FWWXNSlWM2n3D+uPxuyrcfo74aP+Ac30a82+oLmfAAAAAElFTkSuQmCC"

const dummy_dp ="data:image/png;base64,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";

let UserDetails = props => {
  const { handleSubmit, formData } = props;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (props.statusMessage.message) {
      setOpen(true);
      setTimeout(() => props.clearAuthStatusMessage(), 2000);
    }
  }, [props.statusMessage.message])

  const updateAccount = () => {
    props.onClickUpdate(formData);
  }
const onChangeImage = (event) => {
        console.log("-------------->",event,"==?")
        // setImg(event.target.value)
        props.change('profile_img', event)

        // var image = document.getElementById('output');
        // image.src = URL.createObjectURL(event.target.files[0]);
    };

  const deleteAccount = () => {
    props.onClickDelete(formData.email);
  }
  console.log("--inside render ==?",formData)
  return (
    <div className="container">
      <div className="picture_container">
        {/* <img className="picture" src={formData &&formData.profile_img?formData.profile_img:""} alt="no img" /> */}
        <ImageUpload onChangeImage={onChangeImage} currentImage={formData &&formData.profile_img?formData.profile_img: "dummy_dp"}/>
        <p className="name_text">{(formData && formData.firstName) + " " + (formData && formData.lastName)}</p>
      </div>
      <div className="form_container">
        <form onSubmit={handleSubmit} style={{ width: "80%" }}>
          <Field name="firstName" label="First Name*" component={MyCustomInput} type="text" />
          <Field name="lastName" label="Last Name" component={MyCustomInput} type="text" />
          <Field name="age" label="Age" component={MyCustomInput} type="text" />
          <Field name="gender" label="Gender" component={CustomizedRadios}
            radioData={[{ labelText: "Male", value: "male" }, { labelText: "Female", value: "female" }, { labelText: "Others", value: "others" }]}
          />
          <Field name="dob" label="DOB" component={MyCustomInput} type="text" />
          <Field name="email" label="Email*" component={MyCustomInput} type="text"
            disabled={true}
          />
          <Field name="contact" label="Contact No" component={MyCustomInput} type="text" />
          <Field name="skills" label="Skills" component={RenderChipInput} />

          <div style={{ padding: 20, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
            <CustomButton label="UPDATE" isDisabled={!props.valid} onClick={updateAccount} />

            <ConfirmModal
              buttontext="DELETE ACCOUNT"
              dialogcontent="Are you sure ?"
              dialogbuttons={[{ text: "Ok", onClick: deleteAccount }, { text: "Cancel", onClick: null }]}
              style={{ minWidth: 200 }}
            // isDisabled={true}
            />
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={open}
              autoHideDuration={1000}
              onClose={() => setOpen(false)}
            >
              <MySnackbarContentWrapper
                onClose={() => setOpen(false)}
                variant="success"
                message={props.statusMessage.message}
              />
            </Snackbar>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  const data = state.authReducer.formData
  return {
    initialValues: {
      email: data.email,
      contact: data.contact,
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      age: data.age,
      dob: data.dob,
      skills: data.skills,
      profile_img:data.profile_img
      // profile_img:"https://gumlet.assettype.com/thequint%2F2018-04%2F4a952ec9-48d0-470b-82db-78ad9c850505%2F215ae5ca-04e6-4f23-a0d0-bf449f04c7f6.png?rect=0%2C0%2C1500%2C844&auto=format%2Ccompress&w=320"
    },
    formData: state.form.contact && state.form.contact.values,
    isLoggedIn: state.authReducer.isLoggedIn,
    statusMessage: state.authReducer && state.authReducer.statusMessage,
  }
}


export const mapDispatchToProps = dispatch => {
  return {
    onClickDelete: email => {
      return dispatch(deleteUser({ email }));
    },
    onClickUpdate: formData => {
      return dispatch(updateUser(formData));
    },
    clearAuthStatusMessage: () => {
      return dispatch(clearAuthStatusMessage())
    }
  };
};


UserDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({
  form: "contact",
  validate: ProfileFormValidator,// a unique identifier for this form
  enableReinitialize: true,
  // destroyOnUnmount: false
})(UserDetails))

export default UserDetails; 