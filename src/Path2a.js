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
        {!this.context.snooze1 ? (
          <div>
            <p>
              Even just the smell of real coffee perks your brain up. You feel
              ready for the day.
            </p>
            <Link to="/control-room">
              Whistle and stroll to the control room.
            </Link>
          </div>
        ) : (
          ""
        )}
        {!this.context.snooze2 ? <div></div> : ""}
        {this.context.snooze2 && !this.context.snooze3 ? (
          <div>
            <p>WAAAAAOOOOOOOEEEEEEIIIIIIAAAAAAA</p>
            <p>The alarm! You've dawlded and now you're in trouble.</p>
            <Link to="/control-room">Run to the control room</Link>
          </div>
        ) : (
          ""
        )}
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
        <Link to="/control-room">Head to the control room</Link>
      </div>
    );
  };

  render() {
    const coffee = this.state.coffee.length;
    const realCoffee = coffee > 0 && coffee < 7;
    const instantCoffee = coffee > 0 && coffee > 4;
    return (
      <div className="Path2a">
        <p>
          You definitely need some coffee to kick off the day, but do you want
          to take the time to make the real deal or do you decide to save time
          with some instant coffee?
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
    );
  }
}
