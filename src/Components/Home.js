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
            className="header-color"
            title={<Link to="/portfolio">i</Link>}
            scroll
          >
            <Navigation>
              <Link className="top-nav" to="/resume">
                Resume
              </Link>
              <Link className="top-nav" to="/about">
                About Me
              </Link>
              <Link className="top-nav" to="/project">
                Project
              </Link>
              <Link className="top-nav" to="/contact">
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link className="top-nav" to="/portfolio">
                Portfolio
              </Link>
            }
          >
            <Navigation>
              <Link className="top-nav" to="/resume">
                Resume
              </Link>
              <Link className="top-nav" to="/about">
                About Me
              </Link>
              <Link className="top-nav" to="/project">
                Project
              </Link>
              <Link className="top-nav" to="/contact">
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
