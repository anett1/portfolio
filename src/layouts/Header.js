import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomeHeader from "../headerPages/HomeHeader";
import DTPdesignHeader from "../headerPages/DTPdesignHeader";
import FrontEndHeader from "../headerPages/FrontEndHeader";
import ErrorPage from "../headerPages/ErrorPage";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomeHeader}></Route>
        <Route path="/DTPdesign" component={DTPdesignHeader}></Route>
        <Route path="/FrontEnd" component={FrontEndHeader}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </>
  );
};

export default Header;
