import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Description from "./Description";
import "../styles/App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav>
            <Nav />
          </nav>
          <header>
            <Header />
          </header>
          <section>
            <Description />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
