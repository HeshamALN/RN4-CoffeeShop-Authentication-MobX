import React, { Component } from "react";
import { Spinner, Container } from "native-base";

// Components
// import AppContainer from "./Navigation";
import MySwitchNav from "./Navigation/switchNav";

export default class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="#132D4B" />;
    }
    return (
      <Container>
        <MySwitchNav />
      </Container>
    );
  }
}
