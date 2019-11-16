import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./layout/Header";
import Dashboard from "./customers/Dashboard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
