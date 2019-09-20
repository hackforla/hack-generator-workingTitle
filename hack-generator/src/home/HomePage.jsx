import React from "react";
import { scenario, tech, user } from "../data";
import TitleFormat from "../sharedcomponents/TitleFormat";

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scenario: [],
      tech: [],
      user: []
    };
  }

  componentDidMount() {
    this.setState(() => {
      console.log(scenario, tech, user);
      return {
        // scenario,
        // tech,
        // user
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <TitleFormat></TitleFormat>
      </React.Fragment>
    );
  }
}

export default HomePage;
