import React from "react";
import { Route, Switch } from "react-router-dom";
import Context from "./Context";
import Nav from "./Nav";
import Home from "./Home";
import Page1 from "./Page1";
import ControlRoom from "./ControlRoom";
import Path2a from "./Path2a";

export default class App extends React.Component {
  static contextType = Context;

  state = {
    userName: "",
    pronouns: "",
    snooze: true,
    snooze1: false,
    snooze2: false,
    snooze3: false,
    switch: false,
    coffee: "",
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

  setsnooze1 = () => {
    this.setState({
      snooze1: true,
    });
  };

  setsnooze2 = () => {
    this.setState({
      snooze2: true,
    });
  };

  setsnooze3 = () => {
    this.setState({
      snooze3: true,
    });
  };

  setFlipSwitch = () => {
    this.setState({
      switch: true,
    });
  };

  setCoffee = (coffee) => {
    this.setState({
      coffee: coffee,
    });
  };

  restart = () => {
    this.setState({
      userName: "",
      pronouns: "",
      snooze: true,
      snooze1: false,
      snooze2: false,
      snooze3: false,
      switch: false,
      coffee: "",
    });
  };

  render() {
    const value = {
      userName: this.state.userName,
      pronouns: this.state.pronouns,
      setUserName: this.setUserName,
      setUserPronouns: this.setUserPronouns,
      setSnooze: this.setSnooze,
      setsnooze1: this.setsnooze1,
      setsnooze2: this.setsnooze2,
      setsnooze3: this.setsnooze3,
      snooze: this.state.snooze,
      snooze1: this.state.snooze1,
      snooze2: this.state.snooze2,
      snooze3: this.state.snooze3,
      switch: this.state.switch,
      setFlipSwitch: this.setFlipSwitch,
      coffee: this.state.coffee,
      setCoffee: this.setCoffee,
      restart: this.restart,
    };
    return (
      <Context.Provider value={value}>
        <div className="App">
          <header>Choose Your Own Adventure</header>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page1" component={Page1} />
            <Route path="/control-room" component={ControlRoom} />
            <Route path="/path2a" component={Path2a} />
          </Switch>
        </div>
      </Context.Provider>
    );
  }
}
