import React from "react";
import Context from "./Context";
import Switches from "./Switches";

export default class Path2 extends React.Component {
  static contextType = Context;
  render() {
    const hero = this.context.userName;
    return hero ? (
      <div className="Path2">
        {!this.context.snooze ? (
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
            <button type="button" disabled={this.context.switch}>
              Check the manual
            </button>
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
