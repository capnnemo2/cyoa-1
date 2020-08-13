import React from "react";
import Context from "./Context";

export default class Path1 extends React.Component {
  static contextType = Context;

  state = {
    blueSwitch: false,
  };

  flipBlueSwitch = () => {
    this.setState({
      blueSwitch: true,
    });
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
    const hero = this.context.userName;
    const blueSwitch = this.state.blueSwitch;
    return hero ? (
      <div className="Path1">
        {this.context.choice3 ? (
          <div>
            <p>WAAAAAOOOOOOOEEEEEEIIIIIIAAAAAAA</p>
            <p>"Depressurization will commence in 3 seconds. 3...2..."</p>
            <p>
              No time! Either the red switch or the blue switch will cancel the
              automatic depressurization. Choose quickly!
            </p>
            <button type="button" onClick={() => this.flipRedSwitch()}>
              Flip the red switch
            </button>
            <button type="button" onClick={() => this.flipBlueSwitch()}>
              Flip the blue switch
            </button>
          </div>
        ) : (
          ""
        )}

        <p>WAAAAAOOOOOOOEEEEEEIIIIIIAAAAAAA</p>
        <p>"Depressurization will commence in 10 seconds. 10...9..."</p>
        <p>
          Head full of sleep, you rub your eyes and try to remember which switch
          will cancel the automatic depressurization. Is it red or blue? Do you
          have time to check the manual?
        </p>
        <button type="button" onClick={() => this.checkManual()}>
          Check the manual
        </button>
        <button type="button" onClick={() => this.flipRedSwitch()}>
          Flip the red switch
        </button>
        <button type="button" onClick={() => this.flipBlueSwitch()}>
          Flip the blue switch
        </button>

        <div className="blue-switch">
          {blueSwitch ? this.renderBlueSwitch() : ""}
        </div>
      </div>
    ) : (
      "Missing hero name, please restart"
    );
  }
}
