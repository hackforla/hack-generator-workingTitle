import React from "react";
import { scenario, tech, user } from "../data";
import TitleFormat from "../sharedcomponents/TitleFormat";
import { Container, Grid } from "semantic-ui-react";

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
      return {
        scenario,
        tech,
        user
      };
    });
  }

  mapPieces = gamePiece => {
    return;
  };

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  render() {
    console.log(scenario);
    return (
      <Container fluid>
        <TitleFormat></TitleFormat>
        <hr />
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              {Object.values(scenario[this.getRandomInt(scenario.length)])}
            </Grid.Column>
            <Grid.Column>
              {Object.values(tech[this.getRandomInt(tech.length)])}
            </Grid.Column>
            <Grid.Column>
              {Object.values(user[this.getRandomInt(user.length)])}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <hr />
      </Container>
    );
  }
}

export default HomePage;
