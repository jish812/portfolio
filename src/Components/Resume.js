import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./Assets/Css/Resume.css";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div className={{ textAlign: "center" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy2y1LPo3CwPm1cdxGbR6G2fLBLr3N1-IDUot44O5E1MCNeZPG&usqp=CAU"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
          </Cell>
          <cel className="resume-right-col" col={8}>
            right
          </cel>
        </Grid>
      </div>
    );
  }
}
