import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import ProfilePic from "./Assets/img/p-pic.jpg";
import "./Assets/Css/LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={ProfilePic} alt="profile-picture" className="p-picture" />
          </Cell>
        </Grid>
      </div>
    );
  }
}
