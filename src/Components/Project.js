import React, { Component } from "react";
import { Tab, Tabs } from "react-mdl";

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1>this is react</h1>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>this is flutter</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>this is python</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>REact</Tab>
          <Tab>Flutter</Tab>
          <Tab>Python</Tab>
        </Tabs>
        <section className="projects-grid">{this.toggleCategories()}</section>
      </div>
    );
  }
}
