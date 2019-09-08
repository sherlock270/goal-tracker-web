import React from "react";
import "./App.css";
import ServerTest from "./components/ServerTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Goal Tracker App</h1>
        <h4>I need to come up with a better name</h4>
        <ServerTest />
      </header>
    </div>
  );
}

export default App;
