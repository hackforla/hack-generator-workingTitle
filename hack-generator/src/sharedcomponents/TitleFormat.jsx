import React from "react";
import { Container, Header } from "semantic-ui-react";

const TitleFormat = ({ props }) => {
  return (
    <Container text>
      <Header
        as="h1"
        inverted
        style={{
          fontSize: "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "3em"
        }}
      >
        Welcome to Hack Generator
      </Header>
    </Container>
  );
};

export default TitleFormat;
