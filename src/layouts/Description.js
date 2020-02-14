import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeDescription from "../descriptionPages/HomeDescription";
import DTPDescription from "../descriptionPages/DTPDescription";
import FrontEndDescription from "../descriptionPages/FrontEndDescription";
import ErrorPage from "../components/ErrorPage";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomeDescription}></Route>
        <Route path="/DTPdesign" component={DTPDescription}></Route>
        <Route path="/FrontEnd" component={FrontEndDescription}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </>
  );
};

export default Header;
