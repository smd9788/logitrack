import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./layout/Header";
import Dashboard from "./customers/Dashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
