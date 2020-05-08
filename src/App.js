import React from "react";
import "./App.css";
import { NavBar } from "./Components/Navbar";

export default function App() {
  return (
    <React.Fragment>
      <NavBar />{" "}
      <div className="hellobox3">
        <h1 className="contentbox1">hello</h1>
      </div>
      <div className="hellobox1">
        <br />
        <h1 className="contentbox1">Welcome to my world</h1>
      </div>
      <div className="hellobox2">
        <about />
        <h2>continue</h2>
      </div>
    </React.Fragment>
  );
}
