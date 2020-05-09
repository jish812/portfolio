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
            <img
              src={ProfilePic}
              alt="profile-picture"
              className="p-picture"
              style={{ display: "block", alignItems: "center" }}
            />
            <div className="banner-text">
              <h1>Jishnu</h1>
              <p>CS Undergrade | Coder | React-DEV | AI/ML</p>

              <div className="social-links">
                {/*Linkedin*/}
                <a
                  href="https://www.linkedin.com/in/jishnu-suresh-385516168/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-linkedin-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>

                {/*Github*/}
                <a
                  href="https://github.com/jish812"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-github-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>

                {/*Free Code Camp*/}
                <a
                  href="https://github.com/jish812"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-free-code-camp"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>

                {/*Youtube*/}
                <a
                  href="https://github.com/jish812"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-youtube-square"
                    rel="noopener noreferrer"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
