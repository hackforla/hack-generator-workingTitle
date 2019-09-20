import React from "react";
import "./App.css";
import HomePage from "./home/HomePage";

//add homepage here
class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
