import React from "react";
import Context from "./Context";

export default class Home extends React.Component {
  static contextType = Context;

  handleSubmit = (e) => {
    let userName = e.target.username.value;
    this.context.setUserName(userName);
    this.props.history.push("/RiseNShine");
  };

  render() {
    return (
      <div className="Home">
        <p>
          Choose Your Own Adventure books were pretty exciting when I discovered
          them in elementary school. They were a way to basically play a video
          or computer game through a book. I though they were awesome. I wanted
          to create one as a web app. Of course, this is right on the line of
          creating an actual game. As such, as the project advances, it may
          eventually blur the line. But to begin, a simple CYOA story!
        </p>
        <p>
          Without further ado, please enter your name (or invent one for your
          character), select the appropriate pronouns, and jump into the
          adventure!
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit(e);
          }}
        >
          <label>
            Name: <input type="text" name="username" required />
          </label>
          {"  "}
          <button type="submit">Begin</button>
        </form>
      </div>
    );
  }
}
