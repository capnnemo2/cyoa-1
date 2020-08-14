import React from "react";
import Context from "./Context";

export default class InterruptedManual extends React.Component {
  static contextType = Context;

  state = {
    manual: false,
  };

  handleCheckManual = () => {
    this.setState({
      manual: true,
    });
    this.renderManual();
  };

  renderManual = () => {
    return (
      <div>
        <p>You examine the manual and see that there is an earmarked page.</p>
        <p>You open to the earmarked page and begin to read.</p>
        <p>
          "...As you know, the SS Eggpod was put together in France, but the
          components were constructed in fourteen different countries. The
          switches come from Australia where everything is backwards and deadly.
          Logically then, the red switch leads to--"
        </p>
        <p>WAAAAAOOOOOOOEEEEEEIIIIIIAAAAAAA</p>
        <p>"Depressurization will commence in 3 seconds. 3...2..."</p>
        <p>
          No time! Either the red switch or the blue switch will cancel the
          automatic depressurization. Choose quickly!
        </p>
      </div>
    );
  };

  render() {
    const manual = this.state.manual;
    return (
      <div className="InterruptedManual">
        <button
          type="button"
          onClick={() => this.handleCheckManual()}
          disabled={this.context.switch || manual}
        >
          Check the manual
        </button>
        {manual ? this.renderManual() : ""}
      </div>
    );
  }
}
