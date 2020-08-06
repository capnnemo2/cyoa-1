import React from "react";
import Context from "./Context";

export default class Page1 extends React.Component {
  static contextType = Context;

  state = {
    snooze: true,
    choice1: false,
  };

  handleSnooze = () => {
    this.setState({
      choice1: true,
    });
    return (
      <div>
        <p>You hit snooze and slip back into blessed nothingness until...</p>
        <p>BEEP! BEEP! BEEP! . . . BEEP! BEEP! BEEP!</p>
        <button type="button" onClick={(e) => this.handleSnooze()} value="a">
          Hit snooze
        </button>
        <button type="button">Turn off alarm and start the day</button>
      </div>
    );
  };

  //   displayPart1 = () => {
  //     return (

  //     );
  //   };

  render() {
    const hero = this.context.userName;
    const snooze = this.state.snooze;
    const choice1 = this.state.choice1;
    return hero ? (
      <div className="Page1">
        <p>BEEP! BEEP! BEEP! . . . BEEP! BEEP! BEEP!</p>
        <button type="button" onClick={(e) => this.handleSnooze()}>
          Hit snooze
        </button>
        <button type="button">Turn off alarm and start the day</button>
        <div className="page1-part1">{choice1 ? this.handleSnooze() : ""}</div>
      </div>
    ) : (
      "Missing hero name, please restart"
    );
  }
}
