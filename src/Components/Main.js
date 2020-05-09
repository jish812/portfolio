import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Contact from "./Contact";
import About from "./About";
import Project from "./Project";
import Resume from "./Resume";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" exact component={LandingPage} />
        <Route exact path="/contact" exact component={Contact} />
        <Route exact path="/about" exact component={About} />
        <Route exact path="/project" exact component={Project} />
        <Route exact path="/resume" exact component={Resume} />
      </Switch>
    </div>
  );
};

export default Main;
