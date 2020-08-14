import React from "react";
import Context from "./Context";

export default class ManualCheck extends React.Component {
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
          Logically then, the red switch leads to safety. All other switches
          cause death in some horrifying way or another..."
        </p>
      </div>
    );
  };

  render() {
    const manual = this.state.manual;
    return (
      <div className="ManualCheck">
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
