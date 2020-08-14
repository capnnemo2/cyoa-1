import React from "react";
import Context from "./Context";
import { Link } from "react-router-dom";

export default class Path2a extends React.Component {
  static contextType = Context;

  state = {
    coffee: "",
  };

  handleRealCoffee = () => {
    this.setState({
      coffee: "real",
    });
    this.context.setCoffee("real");
    this.renderRealCoffee();
  };

  renderRealCoffee = () => {
    return (
      <div>
        <p>WAAAAAOOOOOOOEEEEEEIIIIIIAAAAAAA</p>
        <p>The alarm! You've dawlded and now you're in trouble.</p>
        <Link to="/path1">Run to the control room</Link>
      </div>
    );
  };

  handleInstantCoffee = () => {
    this.setState({
      coffee: "instant",
    });
    this.context.setCoffee("instant");
    this.renderInstantCoffee();
  };

  renderInstantCoffee = () => {
    return (
      <div>
        <p>
          We can all agree instant coffee doesn't taste as good, but sometimes
          saving a couple minutes can be a life saver.
        </p>
        <Link to="/path2">Head to the control room</Link>
      </div>
    );
  };

  render() {
    const coffee = this.state.coffee.length;
    const realCoffee = coffee > 0 && coffee < 7;
    const instantCoffee = coffee > 0 && coffee > 4;
    return (
      <div className="Path2a">
        {!this.context.snooze ? (
          <div>
            <p>
              You definitely need some coffee to kick off the day, but do you
              want to take the time to make the real deal or do you decide to
              save time with some instant coffee?
            </p>
            <button
              type="button"
              onClick={() => this.handleRealCoffee()}
              disabled={coffee}
            >
              Real coffee
            </button>
            <button
              type="button"
              onClick={() => this.handleInstantCoffee()}
              disabled={coffee}
            >
              Instant coffee
            </button>
            {realCoffee ? this.renderRealCoffee() : ""}
            {instantCoffee ? this.renderInstantCoffee() : ""}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
