import React, { Component } from "react";
import "../styles/NavDesktop.scss";

const NavDesktop = props => {
  return (
    <div className="NavDesktop">
      <div className="NavContentDesktop">
        <div>
          Aneta Jagla - <strong>Grafik Designer</strong>
        </div>
        <div>
          <ul>{props.menu}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
