import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>Choose Your Own Adventure</header>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
