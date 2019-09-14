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

    const type = e.target.name;

    axios
      .post(`http://localhost:8000/${type}`, {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data.message);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="login-container">
        <form>
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
          <button type="button" name="login" onClick={this.submitHandler}>
            Log In
          </button>
          <button type="button" name="signup" onClick={this.submitHandler}>
            Sign Up
          </button>
        </form>
        <button
          type="button"
          onClick={e => {
            axios
              .get("http://localhost:8000/users")
              .then(res => {
                console.log(res.data.users);
              })
              .catch(err => console.error(err));
          }}
        >
          Log users
        </button>
      </div>
    );
  }
}

export default Login;
