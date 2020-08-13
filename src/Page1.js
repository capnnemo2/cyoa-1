import React from "react";
import Context from "./Context";
import { Link } from "react-router-dom";

export default class Page1 extends React.Component {
  static contextType = Context;

  state = {
    snooze: true,
    choice1: false,
    choice2: false,
    choice3: false,
  };

  handleGetUp = () => {
    if (this.state.snooze) {
      this.setState({
        snooze: false,
      });
      this.context.setSnooze();
      this.renderGetUp();
    }
  };

  renderGetUp = () => {
    return (
      <div>
        <p>You pull on a pair of shorts and shuffle down the hall.</p>
        <Link to="/path2">Walk to the control room</Link>
      </div>
    );
  };

  handleSnooze = () => {
    if (!this.state.choice1) {
      this.setState({
        choice1: true,
      });
      this.context.setChoice1();
      this.renderSnooze();
    } else if (!this.state.choice2) {
      this.setState({
        choice2: true,
      });
      this.context.setChoice2();
      this.renderSnooze2();
    } else if (!this.state.choice3) {
      this.setState({
        choice3: true,
      });
      this.context.setChoice3();
      this.renderNoMoSnooze();
    }
  };

  renderSnooze = () => {
    return (
      <div>
        <p>You hit snooze and slip back into blessed nothingness until...</p>
        <p>BEEP! BEEP! BEEP! . . . BEEP! BEEP! BEEP!</p>
        <button
          type="button"
          onClick={(e) => this.handleSnooze()}
          disabled={this.state.choice2 ? true : false}
        >
          Hit snooze
        </button>
        <button
          type="button"
          onClick={() => this.handleGetUp()}
          disabled={this.state.choice2 ? true : false}
        >
          Turn off alarm and start the day
        </button>
      </div>
    );
  };

  renderSnooze2 = () => {
    return (
      <div>
        <p>You hit snooze and slip back into blessed nothingness until...</p>
        <p>BEEP! BEEP! BEEP! . . . BEEP! BEEP! BEEP!</p>
        <button
          type="button"
          onClick={(e) => this.handleSnooze()}
          disabled={this.state.choice3 ? true : false}
        >
          Hit snooze
        </button>
        <button
          type="button"
          onClick={() => this.handleGetUp()}
          disabled={this.state.choice3 ? true : false}
        >
          Turn off alarm and start the day
        </button>
      </div>
    );
  };

  renderNoMoSnooze = () => {
    return (
      <div>
        <p>WAAAAAOOOOOOOEEEEEEIIIIIIAAAAAAA</p>
        <p>
          A shrieking tears you from your slumber. The alarm! Oh holy pile of
          crap, you leap from bed and run down the hall without stopping to put
          on clothes.
        </p>
        <Link to="/path1">Run to the control room</Link>
      </div>
    );
  };

  render() {
    const hero = this.context.userName;
    const snooze = this.state.snooze;
    const choice1 = this.state.choice1;
    const choice2 = this.state.choice2;
    const choice3 = this.state.choice3;
    return hero ? (
      <div className="Page1">
        <p>BEEP! BEEP! BEEP! . . . BEEP! BEEP! BEEP!</p>
        <button
          type="button"
          onClick={() => this.handleSnooze()}
          disabled={choice1 ? true : false}
        >
          Hit snooze
        </button>
        <button
          type="button"
          onClick={() => this.handleGetUp()}
          disabled={choice1 ? true : false}
        >
          Turn off alarm and start the day
        </button>

        <div className="page1-part1">{choice1 ? this.renderSnooze() : ""}</div>
        <div className="page1-part2">{choice2 ? this.renderSnooze2() : ""}</div>
        <div className="page1-part0">{snooze ? "" : this.renderGetUp()}</div>
        <div className="page1-part2">
          {choice3 ? this.renderNoMoSnooze() : ""}
        </div>
      </div>
    ) : (
      "Missing hero name, please restart"
    );
  }
}
