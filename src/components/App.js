import React, { Component } from "react";
import FeedbackOptions from "./feedback/FeedBack.jsx";
import Section from "./section/Section.jsx";
import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={this.state} />
      </Section>
    );
  }
}

export default App;
