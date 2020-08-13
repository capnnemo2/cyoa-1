import React from "react";
import { Route, Switch } from "react-router-dom";
import Context from "./Context";
import Nav from "./Nav";
import Home from "./Home";
import Page1 from "./Page1";
import Path1 from "./Path1";
import Path2 from "./Path2";

export default class App extends React.Component {
  static contextType = Context;

  state = {
    userName: "",
    pronouns: "",

    snooze: true,
    choice1: false,
    choice2: false,
    choice3: false,
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

  setSnooze = () => {
    this.setState({
      snooze: false,
    });
  };

  setChoice1 = () => {
    this.setState({
      choice1: true,
    });
  };

  setChoice2 = () => {
    this.setState({
      choice2: true,
    });
  };

  setChoice3 = () => {
    this.setState({
      choice3: true,
    });
  };

  render() {
    const value = {
      userName: this.state.userName,
      pronouns: this.state.pronouns,
      setUserName: this.setUserName,
      setUserPronouns: this.setUserPronouns,
      setSnooze: this.setSnooze,
      setChoice1: this.setChoice1,
      setChoice2: this.setChoice2,
      setChoice3: this.setChoice3,
      snooze: this.state.snooze,
      choice1: this.state.choice1,
      choice2: this.state.choice2,
      choice3: this.state.choice3,
    };
    return (
      <Context.Provider value={value}>
        <div className="App">
          <header>Choose Your Own Adventure</header>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page1" component={Page1} />
            <Route path="/path1" component={Path1} />
            <Route path="/path2" component={Path2} />
          </Switch>
        </div>
      </Context.Provider>
    );
  }
}
