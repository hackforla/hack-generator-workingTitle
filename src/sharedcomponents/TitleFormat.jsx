import React from "react";
import { Header, Segment } from "semantic-ui-react";
import "./titlePage.css";

const TitleFormat = ({ title }) => {
  return (
    <Segment inverted>
      <Header textAlign="center" as="h1" inverted color="blue">
        {title}
      </Header>
    </Segment>
  );
};

export default TitleFormat;
