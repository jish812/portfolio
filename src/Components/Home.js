import React from "react";
import "./Assets/Css/Home.css";
import { Navigation, Drawer, Content, Layout, Header } from "react-mdl";
import Main from "./Main";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      <div className="demo-big-content">
        <Layout>
          <Header
            transparent
            title={
              <Link
                style={{ color: "gray", fontFamily: "Ubuntu" }}
                to="/portfolio"
              >
                Portfolio
              </Link>
            }
            style={{ color: "gray", fontFamily: "Ubuntu", fontSize: "larger" }}
            scroll
          >
            <Navigation>
              <Link
                style={{ color: "gray", fontFamily: "Ubuntu" }}
                to="/portfolio/resume"
              >
                Resume
              </Link>
              <Link
                style={{ color: "gray", fontFamily: "Ubuntu" }}
                to="/portfolio/about"
              >
                About Me
              </Link>
              <Link
                style={{ color: "gray", fontFamily: "Ubuntu" }}
                to="/portfolio/project"
              >
                Project
              </Link>
              <Link
                style={{ color: "gray", fontFamily: "Ubuntu" }}
                to="/portfolio/contact"
              >
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer title={<Link to="/portfolio">Portfolio</Link>}>
            <Navigation>
              <Link className="top-nav" to="/portfolio/resume">
                Resume
              </Link>
              <Link className="top-nav" to="/portfolio/about">
                About Me
              </Link>
              <Link className="top-nav" to="/portfolio/project">
                Project
              </Link>
              <Link className="top-nav" to="/portfolio/contact">
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>{" "}
    </React.Fragment>
  );
}
