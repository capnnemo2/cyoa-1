import React from "react";
import Context from "./Context";
import { Link } from "react-router-dom";

export default class Page1 extends React.Component {
  static contextType = Context;

  state = {
    snooze: true,
    snooze1: false,
    snooze2: false,
    snooze3: false,
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
        <p>You pull on your onesie and shuffle down the hall.</p>
        <Link to="/control-room">Walk to the control room to begin work</Link>
        <br />
        <Link to="/path2a">
          Walk to the kitchen for some coffee before heading to the control room
        </Link>
      </div>
    );
  };

  handleSnooze = () => {
    if (!this.state.snooze1) {
      this.setState({
        snooze1: true,
      });
      this.context.setsnooze1();
      this.renderSnooze();
    } else if (!this.state.snooze2) {
      this.setState({
        snooze2: true,
      });
      this.context.setsnooze2();
      this.renderSnooze2();
    } else if (!this.state.snooze3) {
      this.setState({
        snooze3: true,
      });
      this.context.setsnooze3();
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
          disabled={this.state.snooze2 ? true : false}
        >
          Hit snooze
        </button>
        <button
          type="button"
          onClick={() => this.handleGetUp()}
          disabled={this.state.snooze2 ? true : false}
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
          disabled={this.state.snooze3 ? true : false}
        >
          Hit snooze
        </button>
        <button
          type="button"
          onClick={() => this.handleGetUp()}
          disabled={this.state.snooze3 ? true : false}
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
        <Link to="/control-room">Run to the control room</Link>
      </div>
    );
  };

  render() {
    const hero = this.context.userName;
    const snooze = this.state.snooze;
    const snooze1 = this.state.snooze1;
    const snooze2 = this.state.snooze2;
    const snooze3 = this.state.snooze3;
    return hero ? (
      <div className="Page1">
        <p>BEEP! BEEP! BEEP! . . . BEEP! BEEP! BEEP!</p>
        <button
          type="button"
          onClick={() => this.handleSnooze()}
          disabled={snooze1 ? true : false}
        >
          Hit snooze
        </button>
        <button
          type="button"
          onClick={() => this.handleGetUp()}
          disabled={snooze1 ? true : false}
        >
          Turn off alarm and start the day
        </button>

        <div className="page1-part1">{snooze1 ? this.renderSnooze() : ""}</div>
        <div className="page1-part2">{snooze2 ? this.renderSnooze2() : ""}</div>
        <div className="page1-part0">{snooze ? "" : this.renderGetUp()}</div>
        <div className="page1-part2">
          {snooze3 ? this.renderNoMoSnooze() : ""}
        </div>
      </div>
    ) : (
      "Missing hero name, please restart"
    );
  }
}
