import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <ul>
          <Link to="/">Restart</Link>
        </ul>
      </div>
    );
  }
}
