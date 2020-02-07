import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavMobile from "../components/NavMobile";
import NavDesktop from "../components/NavDesktop";
import "../styles/Nav.scss";

const list = [
  { name: "O mnie", path: "/", exact: true },
  { name: "DTP design", path: "/DTPdesign" },
  { name: "Front-End", path: "/FrontEnd" }
];

const menu = list.map(item => (
  <li key={item.name}>
    <NavLink to={item.path} exact={item.exact ? item.exact : false}>
      {item.name}
    </NavLink>
  </li>
));
const viewPort = window.matchMedia(`screen and ( min-width: 700px)`);

class Nav extends Component {
  state = {
    isDesktop: !viewPort.matches
  };

  render() {
    viewPort.addListener(isDesktop => {
      this.setState({
        isDesktop: !isDesktop.matches
      });
    });
    return (
      <>
        {this.state.isDesktop ? (
          <NavMobile menu={menu} />
        ) : (
          <NavDesktop menu={menu} />
        )}
      </>
    );
  }
}

export default Nav;
