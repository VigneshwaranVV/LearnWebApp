import React, { Component } from "react";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import "./styles.css"
export default class Completed extends Component {
  render() {
    return (
      <div style={{display: "flex",height: "300px",flexDirection: "column",alignItems: "center",justifyContent: "center"}}> 
        <CheckCircleRoundedIcon style={{color: "green",height: "60px",width: "60px"}}/>
        <p id="completeRegistration">Registration Completed 
        </p>
        </div>
    );
  }
}
