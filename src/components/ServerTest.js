import React from "react";
import axios from "axios";

class ServerTest extends React.Component {
  constructor() {
    super();
    this.state = {
      comp: <h1>Awaiting Response</h1>
    };

    this.serverCall = this.serverCall.bind(this);
  }

  serverCall(type) {
    const url = "http://localhost:8000/" + type;

    axios
      .get(url)
      .then(res => {
        console.log(res.status);
        this.setState({
          comp: res.status === 200 ? <h1>Success</h1> : <h1>No Go Boss</h1>
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({ comp: <h1>No Go Boss</h1> });
      });
  }

  render() {
    return (
      <div className="testing">
        <button className="button" onClick={() => this.serverCall("")}>
          Success
        </button>
        <button className="button" onClick={() => this.serverCall("err")}>
          Error
        </button>
        {this.state.comp}
      </div>
    );
  }
}

export default ServerTest;
