import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeBackground from "../backgroundPages/HomeBackground";
import DTPBackground from "../backgroundPages/DTPBackground";
import FrontEndBackground from "../backgroundPages/FrontEndBackground";
import ErrorPage from "../components/ErrorPage";

const Background = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomeBackground}></Route>
        <Route path="/DTPdesign" component={DTPBackground}></Route>
        <Route path="/FrontEnd" component={FrontEndBackground}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </>
  );
};

export default Background;
