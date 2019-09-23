import React from "react";
import { scenario, tech, user } from "../data";
import TitleFormat from "../sharedcomponents/TitleFormat";
import { Button, Container, Grid } from "semantic-ui-react";
import UseJSONData from "./UseJSONData";

const HomePage = () => {
  return (
    <Container fluid>
      <TitleFormat title="Welcome to Hack Generator"></TitleFormat>
      <hr />
      {mainGrid()}
      <hr />
      {buttonRender()}
    </Container>
  );
};

const mainGrid = () => {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <UseJSONData dataCategory={scenario}></UseJSONData>
        </Grid.Column>
        <Grid.Column>
          <UseJSONData dataCategory={tech}></UseJSONData>
        </Grid.Column>
        <Grid.Column>
          <UseJSONData dataCategory={user}></UseJSONData>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const buttonRender = () => {
  return (
    <Grid.Row>
      <Button size="massive" primary>
        Change Values
      </Button>
    </Grid.Row>
  );
};

export default HomePage;
