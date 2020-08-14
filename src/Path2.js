import React from "react";
import Context from "./Context";
import Switches from "./Switches";

export default class Path2 extends React.Component {
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
        <p>You open the manual to an earmarked page which reads:</p>
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
    const hero = this.context.userName;
    const manual = this.state.manual;
    const coffee = this.context.coffee.length;
    return hero ? (
      <div className="Path2">
        {!this.context.snooze && !coffee ? (
          <div>
            <p>
              "Good morning, {hero}. You have five minutes to manually override
              the automatic depressurization."
            </p>
            <p>
              Unfortunately, you're drawing a blank and don't remember how to do
              that. Fortunately, it seems you have five minutes to figure it
              out. Or maybe you're feeling lucky?
            </p>
            <button
              type="button"
              onClick={() => this.handleCheckManual()}
              disabled={this.context.switch || manual}
            >
              Check the manual
            </button>
            {manual ? this.renderManual() : ""}
            <Switches />
          </div>
        ) : (
          ""
        )}
        {coffee && coffee > 5 ? (
          <div>
            <p>
              "Good morning, {hero}. You have two minutes to manually override
              the automatic depressurization."
            </p>
            <p>
              Unfortunately, you're drawing a blank and don't remember how to do
              that. Fortunately, it seems you have two minutes to figure it out.
              Or maybe you're feeling lucky?
            </p>
            <button
              type="button"
              onClick={() => this.handleCheckManual()}
              disabled={this.context.switch || manual}
            >
              Check the manual
            </button>
            {manual ? this.renderManual() : ""}
            <Switches />
          </div>
        ) : (
          ""
        )}
      </div>
    ) : (
      "Missing hero name, please restart"
    );
  }
}
