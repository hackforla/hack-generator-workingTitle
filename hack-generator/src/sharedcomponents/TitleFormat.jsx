import React from "react";
import { Header, Segment } from "semantic-ui-react";
import "./titlePage.css";

const TitleFormat = ({ props }) => {
  return (
    <Segment inverted>
      <Header textAlign="center" as="h1" inverted color="blue">
        Welcome to Hack Generator
      </Header>
    </Segment>
  );
};

export default TitleFormat;
