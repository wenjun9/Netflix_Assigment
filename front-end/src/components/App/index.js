import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Home";
import "../../App.css";


class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="app">
        <Route path="/" exact={true} component={Home} />
      </div>
    </BrowserRouter>
    )
  }

}

export default App;
