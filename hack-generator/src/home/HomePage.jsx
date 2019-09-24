import React, { useState } from "react";
import { scenario, tech, user } from "../data";
import TitleFormat from "../sharedcomponents/TitleFormat";
import { Button, Container, Grid } from "semantic-ui-react";
import UseJSONData from "./UseJSONData";

const HomePage = () => {
  const [data, setData] = useState({ scenario, tech, user });
  return (
    <Container fluid>
      <TitleFormat title="Welcome to Hack Generator"></TitleFormat>
      <hr />
      {mainGrid(data)}
      <hr />
      {buttonRender(data, setData)}
    </Container>
  );
};

const gridDisplay = dataType => {
  return (
    <Grid.Column>
      <UseJSONData dataCategory={dataType}></UseJSONData>
    </Grid.Column>
  );
};

const mainGrid = data => {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        {gridDisplay(data.scenario)}
        {gridDisplay(data.tech)}
        {gridDisplay(data.user)}
      </Grid.Row>
    </Grid>
  );
};

const buttonRender = (data, setData) => {
  return (
    <Grid.Row>
      <Button size="massive" primary onClick={() => setData(!data)}>
        Change Values
      </Button>
    </Grid.Row>
  );
};

export default HomePage;
