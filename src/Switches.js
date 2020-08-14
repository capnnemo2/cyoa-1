import React from "react";
import Context from "./Context";

export default class Switches extends React.Component {
  static contextType = Context;

  state = {
    blueSwitch: false,
    redSwitch: false,
  };

  flipRedSwitch = () => {
    this.setState({
      redSwitch: true,
    });
    this.context.setFlipSwitch();
    this.renderRedSwitch();
  };

  renderRedSwitch = () => {
    return (
      <div>
        <p>
          "Depressurization manual override confirmed. Good morning,{" "}
          {this.context.userName}. It is your 936th day on the SS Eggpod."
        </p>
        <p>
          Whew! Relieved, you slump into the chair and take a moment to
          appreciate that you aren't dead yet today. Day 936 is off to a rocky
          start. There are only 24 more live-or-die checkpoints throughout the
          day. There is light at the end of the tunnel, however: you only have
          to survive until Day 1000 to be able to go home.
        </p>
        {!this.context.snooze ? (
          <div>
            <p>Relaxed, you head to the kitchen to make some coffee</p>
            <p>
              Congrats on surviving so far. Good luck on the rest of the day,{" "}
              {this.context.userName}.
            </p>
          </div>
        ) : (
          ""
        )}
        {this.context.choice3 ? (
          <div>
            <p>Still naked, you walk to the kitchen to make some coffee.</p>
            <p>
              Congrats on surviving so far. Good luck on the rest of the day,{" "}
              {this.context.userName}.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };

  flipBlueSwitch = () => {
    this.setState({
      blueSwitch: true,
    });
    this.context.setFlipSwitch();
    this.renderBlueSwitch();
  };

  renderBlueSwitch = () => {
    return (
      <div>
        <p>
          "Manual depressurization confirmed. Depressurization commencing now.
          Goodbye, {this.context.userName}.
        </p>
        <p>Oh....oh no.</p>
        {!this.context.snooze ? (
          <p>
            You had to check the manual, but you didn't. Maybe you deserve
            what's about to happen...
          </p>
        ) : (
          ""
        )}
        {this.context.choice3 ? (
          <p>
            You just had to hit snooze three times, didn't you. Your brain just
            didn't have enough time to wake up enough to make good decisions.
          </p>
        ) : (
          ""
        )}
        <p>
          The magnitude of your mistake hardly has time to sink in before you
          feel the water in your body begin to vaporize. You feel a brief flash
          of pain on your tongue as your saliva boils and then mercifully you
          lose consciousness forever.
        </p>

        <p>
          Feel free to restart, {this.context.userName}. Better luck next time.
        </p>
      </div>
    );
  };

  render() {
    const blueSwitch = this.state.blueSwitch;
    const redSwitch = this.state.redSwitch;
    return (
      <div className="Switches">
        <button
          type="button"
          onClick={() => this.flipRedSwitch()}
          disabled={redSwitch || blueSwitch ? true : false}
        >
          Flip the red switch
        </button>
        <button
          type="button"
          onClick={() => this.flipBlueSwitch()}
          disabled={redSwitch || blueSwitch ? true : false}
        >
          Flip the blue switch
        </button>

        {this.state.blueSwitch ? this.renderBlueSwitch() : ""}
        {this.state.redSwitch ? this.renderRedSwitch() : ""}
      </div>
    );
  }
}
