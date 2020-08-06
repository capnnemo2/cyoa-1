import React from "react";
import { Route, Switch } from "react-router-dom";
import Context from "./Context";
import Home from "./Home";

export default class App extends React.Component {
  static contextType = Context;

  state = {
    userName: "",
  };

  setUserName = (name) => {
    this.setState({
      userName: name,
    });
  };

  render() {
    const value = {
      setUserName: this.setUserName,
    };
    return (
      <Context.Provider value={value}>
        <div className="App">
          <header>Choose Your Own Adventure</header>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Context.Provider>
    );
  }
}
