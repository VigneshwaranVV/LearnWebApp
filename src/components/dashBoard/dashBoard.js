import React, { Component } from "react";
import ExpandCollapse from "../../common/expandOption/ExpandCollapse";

export default class DashBoard extends Component {
  render () {
    return (
      <div style={{ backgroundColor: "lightgrey" }}>
        {" "}
        Welcome to dashboard
        <div style={{ width: "30%" }}>
          {Object.keys(Options).map((keyData, index) => {
            return (
              <ExpandCollapse
                key={index}
                options={Options[keyData]}
                header={<div>{keyData}</div>}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const Options = {
  Profile_settings: [
    <p>Profile</p>,
    <p>Phone</p>,
    <p>E-Mail</p>,
    <p>Address</p>,
    <p>Password</p>
  ],
  Account_settings: [
    <p>Profile</p>,
    <p>Phone</p>,
    <p>E-Mail</p>,
    <p>Address</p>,
    <p>Password</p>
  ],
  Profile_settings2: [
    <p>Profile</p>,
    <p>Phone</p>,
    <p>E-Mail</p>,
    <p>Address</p>,
    <p>Password</p>
  ]
};
