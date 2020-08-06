import React from "react";
import { Route, Switch } from "react-router-dom";
import Context from "./Context";
import Nav from "./Nav";
import Home from "./Home";
import Page1 from "./Page1";

export default class App extends React.Component {
  static contextType = Context;

  state = {
    userName: "",
    pronouns: "",
  };

  setUserName = (name) => {
    this.setState({
      userName: name,
    });
  };

  setUserPronouns = (pronouns) => {
    this.setState({
      pronouns: pronouns,
    });
  };

  render() {
    const value = {
      userName: this.state.userName,
      pronouns: this.state.pronouns,
      setUserName: this.setUserName,
      setUserPronouns: this.setUserPronouns,
    };
    return (
      <Context.Provider value={value}>
        <div className="App">
          <header>Choose Your Own Adventure</header>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page1" component={Page1} />
          </Switch>
        </div>
      </Context.Provider>
    );
  }
}
