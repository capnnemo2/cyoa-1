import React from "react";
import Context from "./Context";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  static contextType = Context;
  render() {
    return (
      <div className="Nav">
        <ul>
          <Link to="/" onClick={() => this.context.restart()}>
            Restart
          </Link>
        </ul>
      </div>
    );
  }
}
