import React from "react";
import "./App.css";
import { Navigation, Drawer, Content, Layout, Header } from "react-mdl";
import Main from "./Components/Main";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <div className="demo-big-content">
        <Layout>
          <Header title="Title" scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About Me</Link>
              <Link to="/project">Project</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About Me</Link>
              <Link to="/project">Project</Link>
              <Link to="/contact">Contact</Link>
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
