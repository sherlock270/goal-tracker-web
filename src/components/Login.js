import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();

    console.log("submitted");
  }

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.submitHandler}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Enter username..."
              onChange={this.changeHandler}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Enter password..."
              onChange={this.changeHandler}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
