import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.scss";

const list = [
  { name: "O mnie", path: "/", exact: true },
  { name: "DTP design", path: "/DTPdesign" },
  { name: "Front-End", path: "/FrontEnd" },
];

const menu = list.map((item) => (
  <li key={item.name}>
    <NavLink to={item.path} exact={item.exact ? item.exact : false}>
      {item.name}
    </NavLink>
  </li>
));

class Nav extends Component {
  state = {
    isDesktop: false,
  };

  handleIsDesktop = () => {
    this.setState({
      isDesktop: !this.state.isDesktop,
    });

    const ul = [...document.querySelectorAll(".navigation li")];
    ul.map((li, index) => {
      return li.style.animation
        ? (li.style.animation = "")
        : (li.style.animation = `navLinkFade .5s ease both ${
            index / 7 + 0.3
          }s `);
    });
  };

  render() {
    return (
      <nav className="nav-main">
        <div className="my-name">
          <h4>Aneta Jagła</h4>
        </div>
        <ul className={`navigation ${this.state.isDesktop ? "active" : ""}`}>
          {menu}
        </ul>

        <div className="burger" onClick={this.handleIsDesktop}>
          <div
            className={`line1 ${this.state.isDesktop ? "toggle" : ""}`}
          ></div>
          <div
            className={`line2 ${this.state.isDesktop ? "toggle" : ""}`}
          ></div>
          <div
            className={`line3 ${this.state.isDesktop ? "toggle" : ""}`}
          ></div>
        </div>
      </nav>
    );
  }
}

export default Nav;
