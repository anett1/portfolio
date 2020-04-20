import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Description from "./Description";

const App = () => {
  const wrapper = {
    margin: "0 auto",
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <div style={wrapper}>
        <Header />
        <Description />
      </div>
    </Router>
  );
};

export default App;
