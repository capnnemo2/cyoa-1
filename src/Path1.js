import React from "react";
import Context from "./Context";
import Switches from "./Switches";

export default class Path1 extends React.Component {
  static contextType = Context;

  render() {
    const hero = this.context.userName;
    return hero ? (
      <div className="Path1">
        {this.context.snooze3 || this.context.coffee.length < 7 ? (
          <div>
            <p>WAAAAAOOOOOOOEEEEEEIIIIIIAAAAAAA</p>
            <p>"Depressurization will commence in 3 seconds. 3...2..."</p>
            <p>
              No time! Either the red switch or the blue switch will cancel the
              automatic depressurization. Choose quickly!
            </p>
          </div>
        ) : (
          ""
        )}

        <Switches />
      </div>
    ) : (
      "Missing hero name, please restart"
    );
  }
}
